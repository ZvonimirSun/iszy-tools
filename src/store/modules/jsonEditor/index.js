export default {
  namespaced: true,
  state: () => ({
    content: undefined,
    save: false
  }),
  mutations: {
    saveContent (state, content) {
      if (state.save) {
        state.content = content
      }
    },
    changeSave (state, { save, content }) {
      if (!save) {
        state.content = undefined
      } else {
        state.content = content
      }
      state.save = save
    }
  },
  actions: {
    saveContent ({ commit }, content) {
      commit('saveContent', content)
    },
    changeSave ({ commit }, { save, content }) {
      commit('changeSave', { save, content })
    }
  }
}
