import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    statistics: []
  }),
  getters: {},
  mutations: {
    access (state, { name, link }) {
      if (Array.isArray(state.statistics)) {
        const tmp = state.statistics.filter(item => (item.name === name))
        if (tmp.length > 0) {
          tmp[0].times++
          tmp[0].lastAccessTime = new Date().getTime()
        } else {
          state.statistics.push({
            name, link, times: 1, lastAccessTime: new Date().getTime()
          })
        }
      } else {
        state.statistics = [{
          name, link, times: 1, lastAccessTime: new Date().getTime()
        }]
      }
    }
  },
  actions: {
    access ({ commit }, { name, link }) {
      commit({ name, link })
    }
  }
})
