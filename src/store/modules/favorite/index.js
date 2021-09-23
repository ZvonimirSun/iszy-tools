import tools from '@/views/tools.json'
import { flatten } from 'lodash-es'
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
      if (add) {
        const tmp = state.favorite.filter(item => (item.name === name))
        if (tmp.length > 0) {
          tmp[0].link = link
        } else {
          state.favorite.push({ name, link })
        }
      } else {
        state.favorite = state.favorite.filter(item => (item.name !== name))
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
    },
    updateHistory (state, { name, link }) {
      const tmp = state.statistics.filter(item => (item.name === name))
      if (tmp.length > 0) {
        tmp[0].link = link
      }
    },
    removeHistory (state, { name }) {
      state.statistics = state.statistics.filter(item => (item.name !== name))
    }
  },
  actions: {
    addFav ({ commit }, { name, link }) {
      commit('updateFav', { name, link, add: true })
    },
    removeFav ({ commit }, { name }) {
      commit('updateFav', { name })
    },
    access ({ commit }, { name, link }) {
      commit('access', { name, link })
    },
    clearHistory ({ commit }) {
      commit('clearHistory')
    },
    updateHistory ({ commit }, { name, link }) {
      commit('updateHistory', { name, link })
    },
    removeHistory ({ commit }, { name }) {
      commit('removeHistory', { name })
    },

    fixFavorite ({ dispatch, state, getters }) {
      const allTools = flatten([...(tools || [])].map(item => {
        return item.children
      }))
      for (const tool of state.favorite) {
        const tmp = allTools.filter(item => (item.name === tool.name))
        if (tmp.length === 0) {
          dispatch('removeFav', { name: tool.name })
        } else if (tmp[0].link !== tool.link) {
          dispatch('addFav', { name: tool.name, link: tmp[0].link })
        }
      }
      for (const tool of state.statistics) {
        const tmp = allTools.filter(item => (item.name === tool.name))
        if (tmp.length === 0) {
          dispatch('removeHistory', { name: tool.name })
        } else if (tmp[0].link !== tool.link) {
          dispatch('updateHistory', { name: tool.name, link: tmp[0].link })
        }
      }
    }
  }
}
