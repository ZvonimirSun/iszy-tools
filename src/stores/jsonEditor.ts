import dayjs from 'dayjs'
import { clamp, debounce } from 'lodash-es'
import { defineStore } from 'pinia'
import { API } from '@/plugins/API'
import randomString from '@/utils/randomString.js'
import SimplePromiseQueue from '@/utils/SimplePromiseQueue'

interface EditorData {
  name: string
  updated?: string
  content: {
    text?: string
    json?: any
  }
}

interface SyncDto {
  key: string
  name: string
  text?: string
  json?: never
  updatedAt?: string
}

const _mutex = new SimplePromiseQueue()
let waitList = {} as Record<string, SyncDto>
let listened = false

export const useJsonEditorStore = defineStore('jsonEditor', {
  persist: true,
  state: () => ({
    leftId: null as string | null,
    rightId: null as string | null,
    splitterValue: 0.5,
    fullStatus: '',
    $_data: {} as Record<string, EditorData>,
  }),
  getters: {
    dataList: state => (keyword: string) => {
      const result = []
      for (const key in state.$_data) {
        result.push({
          _id: key,
          name: state.$_data[key]!.name,
          updated: dayjs(state.$_data[key]!.updated).format('YYYY-MM-DD HH:mm'),
        })
      }
      if (keyword) {
        return result.filter(item => (item.name.includes(keyword)))
      }
      else {
        return result
      }
    },
    data: state => (id: string) => {
      if (state.$_data[id]) {
        return { ...state.$_data[id], updated: dayjs(state.$_data[id].updated).format('YYYY-MM-DD HH:mm') }
      }
      else {
        return null
      }
    },
    leftData: (state) => {
      if (state.leftId && state.$_data[state.leftId]) {
        return {
          ...state.$_data[state.leftId],
          updated: dayjs(state.$_data[state.leftId]!.updated).format('YYYY-MM-DD HH:mm'),
        }
      }
      else {
        return null
      }
    },
    rightData: (state) => {
      if (state.rightId && state.$_data[state.rightId]) {
        return {
          ...state.$_data[state.rightId],
          updated: dayjs(state.$_data[state.rightId]!.updated).format('YYYY-MM-DD HH:mm'),
        }
      }
      else {
        return null
      }
    },
    syncCloud: () => {
      return useUserStore().logged && useSettingStore().modules.jsonEditor.syncCloud
    },
  },
  actions: {
    setSplitter(val = 0.5) {
      this.splitterValue = clamp(val, 0, 1)
    },
    setFullStatus(val?: 'left' | 'right' | unknown) {
      if (val === 'left' || val === 'right') {
        this.fullStatus = val
      }
      else {
        this.fullStatus = ''
      }
    },
    replaceState(val = [] as Array<SyncDto>) {
      const data = {} as Record<string, EditorData>
      for (const d of val) {
        data[d.key] = {
          name: d.name,
          content: {},
        }
        if (d.text != null) {
          data[d.key]!.content.text = d.text
        }
        else if (d.json != null) {
          data[d.key]!.content.json = d.json
        }
        data[d.key]!.updated = dayjs(d.updatedAt).format()
      }
      this.$_data = data as Record<string, EditorData>
    },

    async getSyncData() {
      try {
        const data = await API.get(`/tools/jsoneditor`)
        if (data.success) {
          this.replaceState(data.data)
        }
        else {
          console.log(data.message)
        }
      }
      catch (e) {
        console.log((e as Error).message)
      }
    },
    syncData: debounce(({ id, data } = {} as {
      id: string
      data: SyncDto
    }) => {
      if (navigator.onLine) {
        _mutex.enqueue(() => API.post(`/tools/jsoneditor/${id}`, data))
      }
      else {
        waitList[id] = data

        if (!listened) {
          listened = true

          function reSync() {
            window.removeEventListener('online', reSync)
            for (const id in waitList) {
              useJsonEditorStore().syncData({ id, data: waitList[id] })
            }
            waitList = {}
          }

          window.addEventListener('online', reSync)
        }
      }
    }, 500),
    saveData({ left, right, id, content, name }: {
      left?: boolean
      right?: boolean
      id?: string
      content?: any
      name?: string
    } = {}) {
      if (this.syncCloud) {
        id = id || randomString(6)
        if (content != null || name != null) {
          const item: Partial<SyncDto> = { name: name || (this.$_data[id] || {}).name || `文档-${id}` }
          if (typeof content === 'string') {
            item.text = content
          }
          else if (typeof content === 'object') {
            item.json = markRaw(content)
          }
          this.syncData({ id, data: item })
        }
      }
      if (typeof content !== 'undefined') {
        id = id || randomString(6)
        this.$_data[id] = this.$_data[id] || {} as EditorData
        this.$_data[id]!.name = name || this.$_data[id]!.name || `文档-${id}`
        if (typeof content === 'string') {
          this.$_data[id]!.content = {
            text: content,
          }
        }
        else {
          this.$_data[id]!.content = {
            json: markRaw(content),
          }
        }
        this.$_data[id]!.updated = dayjs().format()
        if (left) {
          this.leftId = id
        }
        if (right) {
          this.rightId = id
        }
      }
      else if (id && this.$_data[id]) {
        if (left) {
          this.leftId = id
        }
        if (right) {
          this.rightId = id
        }
        this.$_data[id]!.name = name || this.$_data[id]!.name
      }
      else {
        if (left) {
          this.leftId = null
        }
        if (right) {
          this.rightId = null
        }
      }
    },
    async deleteData({ id } = {} as { id: string }) {
      if (this.syncCloud) {
        try {
          const data = await API.delete(`/tools/jsoneditor/${id}`)
          if (data.success) {
            if (this.leftId === id) {
              this.leftId = null
            }
            if (this.rightId === id) {
              this.rightId = null
            }
            if (this.$_data[id]) {
              delete (this.$_data[id])
            }
          }
          else {
            console.log(data.message)
          }
        }
        catch (e) {
          console.log(e)
        }
      }
      else {
        if (this.leftId === id) {
          this.leftId = null
        }
        if (this.rightId === id) {
          this.rightId = null
        }
        if (this.$_data[id]) {
          delete (this.$_data[id])
        }
      }
    },
  },
})
