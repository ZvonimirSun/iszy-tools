import axios from '@/plugins/Axios'
import { cloneDeep, merge } from 'lodash-es'
import { createStore } from 'vuex'
import settings from './modules/settings'
import favorite from './modules/favorite'
import g2048 from './modules/2048'
import tetris from './modules/tetris'
import user from './modules/user'
import linuxCommand from './modules/linuxCommand'
import cache from './modules/cache'
import imgHosting from './modules/imgHosting'
import VuexPersist from '@/plugins/VuexPersist'

export default createStore({
  mutations: {
    importConfig (state, val) {
      merge(state, val)
    }
  },
  actions: {
    async uploadSettings ({ state }) {
      if (state.user.token) {
        const settings = cloneDeep(state)
        delete settings.user.token
        try {
          const res = (await axios.post('https://api.iszy.xyz/iszy_tools/settings', settings)).data
          return res.code === '00000' && res.data
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    },
    async downloadSettings ({ state, commit }) {
      if (state.user.token) {
        const settings = cloneDeep(state)
        delete settings.user.token
        try {
          const res = (await axios.get('https://api.iszy.xyz/iszy_tools/settings')).data
          if (res.code === '00000' && res.data) {
            commit('importConfig', res.data)
            return true
          } else {
            return false
          }
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    }
  },
  modules: {
    settings,
    favorite,
    g2048,
    tetris,
    user,
    linuxCommand,
    cache,
    imgHosting
  },
  plugins: [VuexPersist({
    name: 'iszy_tools',
    storeName: 'state'
  })]
})
