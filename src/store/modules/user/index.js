import axios from '@/plugins/Axios'
import tools from '@/views/tools.json'
import settings from './settings'
import modules from './modules'
import { flatten } from 'lodash-es'

export default {
  namespaced: true,
  state: () => ({
    _user: {
      profile: {
        nickName: undefined
      }
    },

    favorite: [],
    statistics: []
  }),
  getters: {
    isFav: state => name => {
      return state.favorite.filter(item => (item.name === name)).length > 0
    },
    recent: state => count => {
      return [...state.statistics].sort(function (a, b) {
        return b.lastAccessTime - a.lastAccessTime
      }).slice(0, count)
    },
    most: state => count => {
      return [...state.statistics].sort(function (a, b) {
        return b.times - a.times
      }).slice(0, count)
    }
  },
  mutations: {
    setToken (state, token) {
      state._user.token = token
    },
    clearToken (state) {
      state._user.token = null
      state._user.profile = {}
    },
    updateProfile (state, profile) {
      state._user.profile = profile || {}
    },

    // 收藏相关
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
    async login ({ commit, dispatch }, { userName, password }) {
      try {
        if (userName != null && password != null) {
          const res = await axios.post(`${this.$apiBase}/auth/login`, {
            username: userName.trim(),
            password
          })
          if (res.data && res.data.success) {
            commit('setToken', 'logged')
            commit('updateProfile', res.data.data)
            dispatch('downloadSettings', null, { root: true })
            return true
          } else {
            commit('clearToken')
            return false
          }
        } else {
          return false
        }
      } catch (e) {
        commit('clearToken')
        return false
      }
    },
    logout ({ commit }) {
      commit('clearToken')
    },
    async getProfiles ({ state, commit, dispatch }) {
      if (state._user.token) {
        try {
          if (await dispatch('checkToken')) {
            commit('updateProfile', (await axios.get(`${this.$apiBase}/auth/profile`)).data.data)
          }
        } catch (e) {
          if (!axios.isCancel(e)) {
            console.log(e)
          }
        }
      }
    },
    async checkToken ({ state, commit }) {
      if (state._user.token) {
        try {
          await axios.head(`${this.$apiBase}/auth/profile`)
          return true
        } catch (e) {
          if (!axios.isCancel(e)) {
            commit('clearToken')
          }
          return false
        }
      } else {
        return false
      }
    },

    clearHistory ({ commit }) {
      commit('clearHistory')
    },

    fixFavorite ({ state, commit }) {
      const allTools = flatten([...(tools || [])].map(item => {
        return item.children
      }))
      for (const tool of state.favorite) {
        const tmp = allTools.filter(item => (item.name === tool.name))
        if (tmp.length === 0) {
          commit('updateFav', { name: tool.name })
        } else if (tmp[0].link !== tool.link) {
          commit('updateFav', { name: tool.name, link: tmp[0].link, add: true })
        }
      }
      for (const tool of state.statistics) {
        const tmp = allTools.filter(item => (item.name === tool.name))
        if (tmp.length === 0) {
          commit('removeHistory', { name: tool.name })
        } else if (tmp[0].link !== tool.link) {
          commit('updateHistory', { name: tool.name, link: tmp[0].link })
        }
      }
    }
  },
  modules: {
    settings,
    modules
  }
}
