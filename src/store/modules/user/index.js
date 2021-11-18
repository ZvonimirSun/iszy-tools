import axios from '@/plugins/Axios'

let source = axios.CancelToken.source()

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
          const res = await axios.post(`${this.$apiBase}/auth/login`, {
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
    logout ({ commit }) {
      source.cancel()
      source = axios.CancelToken.source()
      commit('clearToken')
    }
  }
}
