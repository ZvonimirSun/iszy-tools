import axios from '@/plugins/Axios'

export default {
  namespaced: true,
  state: () => ({
    token: null
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    clearToken (state) {
      state.token = null
    }
  },
  actions: {
    async login ({ commit }, { userName, password }) {
      try {
        if (userName != null && password != null) {
          const res = await axios.post('https://api.iszy.xyz/auth/login', {
            userName: userName.trim(),
            password
          })
          if (res.data && res.data.code === '00000') {
            commit('setToken', res.data.data.token)
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
    async getProfiles ({ state }) {
      if (state.token) {
        try {
          return (await axios.get('https://api.iszy.xyz/auth/profile')).data.data
        } catch (e) {
          return null
        }
      } else {
        return null
      }
    }
  }
}
