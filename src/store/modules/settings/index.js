export default {
  namespaced: true,
  state: () => ({
    settings: {
      showMost: true,
      showRecent: false,
      openInNewTab: false,
      showType: true
    }
  }),
  mutations: {
    triggerMost (state) {
      state.settings.showMost = !state.settings.showMost
    },
    triggerRecent (state) {
      state.settings.showRecent = !state.settings.showRecent
    },
    triggerNewTab (state) {
      state.settings.openInNewTab = !state.settings.openInNewTab
    },
    triggerType (state) {
      state.settings.showType = !state.settings.showType
    }
  },
  actions: {
    triggerMost ({ commit }) {
      commit('triggerMost')
    },
    triggerRecent ({ commit }) {
      commit('triggerRecent')
    },
    triggerNewTab ({ commit }) {
      commit('triggerNewTab')
    },
    triggerType ({ commit }) {
      commit('triggerType')
    }
  }
}
