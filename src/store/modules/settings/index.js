export default {
  namespaced: true,
  state: () => ({
    settings: {
      showMost: false,
      showRecent: false
    }
  }),
  mutations: {
    triggerMost (state) {
      state.settings.showMost = !state.settings.showMost
    },
    triggerRecent (state) {
      state.settings.showRecent = !state.settings.showRecent
    }
  },
  actions: {
    triggerMost ({ commit, state }) {
      commit('triggerMost')
    },
    triggerRecent ({ commit, state }) {
      commit('triggerRecent')
    }
  }
}
