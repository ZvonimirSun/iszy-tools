import axios from '@/plugins/Axios'
import tools from '@/views/tools.json'
import { flatten } from 'lodash-es'

let source = axios.CancelToken.source()

export default {
  namespaced: true,
  state: () => ({
    token: null,

    settings: {
      showMost: false,
      showRecent: false,

      showSearch: true,
      showType: true,
      openInNewTab: false,

      autoSync: false
    },

    favorite: [],
    statistics: [],

    modules: {
      2048: {
        bestScore: 0
      },
      tetris: {
        bestScore: 0
      },
      imgHosting: {
        uploader: '',
        configs: {
        },
        commonConfig: {
          renameBeforeUpload: false,
          renameTimeStamp: true,
          copyUrlAfterUpload: true
        }
      }
    }
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
    setToken (state, token) {
      state.token = token
    },
    clearToken (state) {
      state.token = null
    },

    triggerSetting (state, setting) {
      state.settings[setting] = !state.settings[setting]
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
    },

    updateModuleState (state, { module, key, value }) {
      const k = key.split('/')
      try {
        let s = state.modules[module]
        for (let i = 0; i < k.length - 1; i++) {
          s = s[k[i]]
        }
        s[k[k.length - 1]] = value
      } catch (e) {
        console.error(e)
      }
    }
  },
  actions: {
    async login ({ commit, dispatch }, { userName, password }) {
      try {
        if (userName != null && password != null) {
          const res = await axios.post(`${this.$apiBase}/auth/login`, {
            userName: userName.trim(),
            password
          })
          if (res.data && res.data.code === '00000') {
            commit('setToken', res.data.data.token)
            await dispatch('downloadSettings', null, { root: true })
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
      source.cancel()
      source = axios.CancelToken.source()
      commit('clearToken')
    },
    async getProfiles ({ state, commit }) {
      source.cancel()
      source = axios.CancelToken.source()
      if (state.token) {
        try {
          return (await axios.get(`${this.$apiBase}/auth/profile`, {
            cancelToken: source.token
          })).data.data
        } catch (e) {
          if (!axios.isCancel(e)) {
            commit('clearToken')
          }
          return null
        }
      } else {
        return null
      }
    },

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

    fixFavorite ({ dispatch, state }) {
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
