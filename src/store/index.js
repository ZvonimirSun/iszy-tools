import axios from '@/plugins/Axios'
import { merge } from 'lodash-es'
import { toRaw } from 'vue'
import { createStore } from 'vuex'
import g2048 from './modules/2048'
import tetris from './modules/tetris'
import user from './modules/user'
import linuxCommand from './modules/linuxCommand'
import imgHosting from './modules/imgHosting'
import jsonEditor from './modules/jsonEditor/index.js'
import VuexPersist from '@/plugins/VuexPersist'

export default createStore({
  state: {
    _cache: {}
  },
  getters: {
    getData: (state) => (key) => {
      if (key) {
        return (state._cache || {})[key]
      } else {
        return undefined
      }
    }
  },
  mutations: {
    importConfig (state, val) {
      merge(state.user, val)
    },
    setData (state, { key, val }) {
      if (key) {
        state._cache = state._cache || {}
        state._cache[key] = val
      }
    },
    clear (state) {
      state._cache = {}
    },

    clearOfflineCache () {}
  },
  actions: {
    async uploadSettings ({ state }) {
      if (state.user._user.token) {
        const { _user, ...settings } = toRaw(state.user)
        try {
          const res = (await axios.post(`${this.$apiBase}/iszy_tools/settings`, settings)).data
          return res.code === '00000' && res.data
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    },
    async downloadSettings ({ state, commit, dispatch }) {
      if (state.user._user.token) {
        try {
          if (await dispatch('user/checkToken')) {
            const res = (await axios.get(`${this.$apiBase}/iszy_tools/settings`)).data
            if (res.code === '00000' && res.data) {
              commit('importConfig', res.data)
              return true
            }
          }
        } catch (e) {
          console.log(e)
        }
        return false
      } else {
        return false
      }
    }
  },
  modules: {
    g2048,
    tetris,
    user,
    linuxCommand,
    imgHosting,
    jsonEditor
  },
  plugins: [VuexPersist({
    name: 'iszy_tools',
    storeName: 'state'
  })]
})
