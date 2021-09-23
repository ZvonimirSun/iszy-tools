export default {
  namespaced: true,
  state: () => ({
    data: {}
  }),
  getters: {
    getData: (state) => (key) => {
      if (key) {
        return (state.data || {})[key]
      } else {
        return undefined
      }
    }
  },
  mutations: {
    setData (state, { key, val }) {
      if (key) {
        state.data = state.data || {}
        state.data[key] = val
      }
    },
    clear (state) {
      state.data = {}
    }
  },
  actions: {
    setData ({ commit }, val) {
      commit('setData', val)
    },
    clear ({ commit }) {
      commit('clear')
    }
  }
}
