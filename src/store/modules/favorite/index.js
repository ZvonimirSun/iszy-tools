export default {
  namespaced: true,
  state: () => ({
    favorite: [],
    statistics: []
  }),
  getters: {
    isFav: state => name => {
      return state.favorite.filter(item => (item.name === name)).length > 0
    },
    recent (state) {
      return [...state.statistics].sort(function (a, b) {
        return b.lastAccessTime - a.lastAccessTime
      }).slice(0, 3)
    },
    most (state) {
      return [...state.statistics].sort(function (a, b) {
        return b.times - a.times
      }).slice(0, 3)
    }
  },
  mutations: {
    updateFav (state, { name, link, add }) {
      const tmp = state.favorite.filter(item => (item.name !== name))
      if (add) {
        if (tmp.length === state.favorite.length) {
          state.favorite.push({ name, link })
        }
      } else {
        state.favorite = tmp
      }
    },
    access (state, { name, link }) {
      if (Array.isArray(state.statistics)) {
        const tmp = state.statistics.filter(item => (item.name === name))
        if (tmp.length > 0) {
          tmp[0].times++
          tmp[0].lastAccessTime = new Date().getTime()
          tmp[0].link = link
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
    },
    clearHistory (state) {
      state.statistics = []
    }
  },
  actions: {
    addFav ({ commit }, { name, link }) {
      commit('updateFav', { name, link, add: true })
    },
    removeFav ({ commit }, { name, link }) {
      commit('updateFav', { name, link })
    },
    access ({ commit }, { name, link }) {
      commit('access', { name, link })
    },
    clearHistory ({ commit }) {
      commit('clearHistory')
    }
  }
}
