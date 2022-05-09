export default {
  namespaced: true,
  state: () => ({
    html: '',
    css: '',
    js: ''
  }),
  mutations: {
    setContent (state, { type, content }) {
      state[type] = content
    }
  },
  actions: {
    setContent ({ commit }, { type, content }) {
      if (['html', 'css', 'js'].includes(type) && typeof content === 'string') {
        commit('setContent', { type, content })
      }
    }
  }
}
