import randomString from '@/utils/randomString.js'
import dayjs from 'dayjs'
import { clamp, debounce } from 'lodash-es'
import SimplePromiseQueue from '@/utils/SimplePromiseQueue.js'

const _mutex = new SimplePromiseQueue()
let waitList = {}
let listened = false

export default {
  namespaced: true,
  state: () => ({
    leftId: undefined,
    rightId: undefined,
    splitterValue: 0.5,
    fullStatus: '',
    $_data: {}
  }),
  getters: {
    dataList: (state) => (keyword) => {
      const result = []
      for (const key in state.$_data) {
        result.push({
          _id: key,
          name: state.$_data[key].name,
          updated: dayjs(state.$_data[key].updated).format('YYYY-MM-DD HH:mm')
        })
      }
      if (keyword) {
        return result.filter(item => (item.name.includes(keyword)))
      } else {
        return result
      }
    },
    data: (state) => (id) => {
      if (state.$_data[id]) {
        return { ...state.$_data[id], updated: dayjs(state.$_data[id].updated).format('YYYY-MM-DD HH:mm') }
      } else {
        return null
      }
    },
    leftData: (state) => {
      if (state.$_data[state.leftId]) {
        return { ...state.$_data[state.leftId], updated: dayjs(state.$_data[state.leftId].updated).format('YYYY-MM-DD HH:mm') }
      } else {
        return null
      }
    },
    rightData: (state) => {
      if (state.$_data[state.rightId]) {
        return {
          ...state.$_data[state.rightId],
          updated: dayjs(state.$_data[state.rightId].updated).format('YYYY-MM-DD HH:mm')
        }
      } else {
        return null
      }
    },
    syncCloud: (state, getters, rootState) => {
      return rootState.user.settings.jsonEditor.syncCloud
    }
  },
  mutations: {
    saveData (state, { left, right, id, content, name }) {
      if (typeof content !== 'undefined') {
        id = id || randomString(6)
        state.$_data[id] = state.$_data[id] || {}
        state.$_data[id].name = name || state.$_data[id].name || `文档-${id}`
        if (typeof content === 'string') {
          state.$_data[id].content = {
            text: content
          }
        } else {
          state.$_data[id].content = {
            json: markRaw(content)
          }
        }
        state.$_data[id].updated = dayjs().format()
        if (left) {
          state.leftId = id
        }
        if (right) {
          state.rightId = id
        }
      } else if (id && state.$_data[id]) {
        if (left) {
          state.leftId = id
        }
        if (right) {
          state.rightId = id
        }
        state.$_data[id].name = name || state.$_data[id].name
      } else {
        if (left) {
          state.leftId = undefined
        }
        if (right) {
          state.rightId = undefined
        }
      }
    },
    deleteData (state, { id }) {
      if (state.leftId === id) {
        state.leftId = undefined
      }
      if (state.rightId === id) {
        state.rightId = undefined
      }
      if (state.$_data[id]) {
        delete (state.$_data[id])
      }
    },
    setSplitter (state, val = 0.5) {
      state.splitterValue = clamp(val, 0, 1)
    },
    /**
     * 设置全屏状态
     * @param state
     * @param [val]
     */
    setFullStatus (state, val) {
      if (val === 'left' || val === 'right') {
        state.fullStatus = val
      } else {
        state.fullStatus = ''
      }
    },
    replaceState (state, val = []) {
      const data = {}
      for (const d of val) {
        data[d.key] = {
          name: d.name
        }
        data[d.key].content = {}
        if (d.text != null) {
          data[d.key].content.text = d.text
        } else if (d.json != null) {
          data[d.key].content.json = d.json
        }
        data[d.key].updated = dayjs(d.updatedAt).format()
      }
      state.$_data = data
    }
  },
  actions: {
    async getSyncData ({ commit }) {
      try {
        const data = (await (this.$axios.get(`${this.$axios.$apiBase}/tools/jsoneditor`))).data
        if (data.success) {
          commit('replaceState', data.data)
        } else {
          console.log(data.message)
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    syncData: debounce(function ({ dispatch }, { id, data }) {
      if (navigator.onLine) {
        _mutex.enqueue(this.$axios.post(`${this.$axios.$apiBase}/tools/jsoneditor/${id}`, data))
      } else {
        waitList[id] = data

        if (!listened) {
          listened = true
          function reSync () {
            window.removeEventListener('online', reSync)
            for (const id in waitList) {
              dispatch('syncData', { id, data: waitList[id] })
            }
            waitList = {}
          }
          window.addEventListener('online', reSync)
        }
      }
    }, 500),
    saveData ({ commit, state, getters, dispatch }, { left, right, id, content, name }) {
      if (getters.syncCloud) {
        id = id || randomString(6)
        if (content != null || name != null) {
          const item = { name: name || (state.$_data[id] || {}).name || `文档-${id}` }
          if (typeof content === 'string') {
            item.text = content
          } else if (typeof content === 'object') {
            item.json = markRaw(content)
          }
          dispatch('syncData', { id, data: item })
        }
      }
      commit('saveData', { left, right, id, content, name })
    },
    async deleteData ({ commit, getters }, { id }) {
      if (getters.syncCloud) {
        try {
          const data = (await this.$axios.delete(`${this.$axios.$apiBase}/tools/jsoneditor/${id}`)).data
          if (data.success) {
            commit('deleteData', { id })
          } else {
            console.log(data.message)
          }
        } catch (e) {
          console.log(e)
        }
      } else {
        commit('deleteData', { id })
      }
    }
  }
}
