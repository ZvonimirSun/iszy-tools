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
          if (res.data && res.data.code === 200) {
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
    }
  }
}
