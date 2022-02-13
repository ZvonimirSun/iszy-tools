import randomString from '@/utils/randomString.js'
import dayjs from 'dayjs'
import { markRaw } from 'vue'

export default {
  namespaced: true,
  state: () => ({
    leftId: undefined,
    rightId: undefined,
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
    }
  },
  actions: {}
}
