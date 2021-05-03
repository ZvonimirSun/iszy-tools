export default {
  namespaced: true,
  state: () => ({
    content: undefined
  }),
  mutations: {
    saveContent (state, content) {
      state.content = content
    }
  },
  actions: {
    saveContent ({ commit }, content) {
      commit('saveContent', content)
    }
  }
}
