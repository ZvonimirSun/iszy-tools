import randomString from '@/utils/randomString.js'
import dayjs from 'dayjs'

export default {
  namespaced: true,
  state: () => ({
    leftId: undefined,
    rightId: undefined,
    $_data: {}
  }),
  getters: {
    data: (state) => (id) => {
      return state.$_data[id]
    },
    leftData: (state) => {
      return state.$_data[state.leftId]
    },
    rightData: (state) => {
      return state.$_data[state.rightId]
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
            json: content
          }
        }
        state.$_data[id].updated = dayjs().format()
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
    }
  },
  actions: {}
}
