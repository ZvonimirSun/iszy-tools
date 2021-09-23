export default {
  namespaced: true,
  state: () => ({
    settings: {
      showMost: false,
      showRecent: false,

      showSearch: true,
      showType: true,
      openInNewTab: false
    }
  }),
  mutations: {
    triggerMost (state) {
      state.settings.showMost = !state.settings.showMost
    },
    triggerRecent (state) {
      state.settings.showRecent = !state.settings.showRecent
    },

    triggerSearch (state) {
      state.settings.showSearch = !state.settings.showSearch
    },
    triggerType (state) {
      state.settings.showType = !state.settings.showType
    },
    triggerNewTab (state) {
      state.settings.openInNewTab = !state.settings.openInNewTab
    }
  },
  actions: {
    triggerMost ({ commit }) {
      commit('triggerMost')
    },
    triggerRecent ({ commit }) {
      commit('triggerRecent')
    },

    triggerSearch ({ commit }) {
      commit('triggerSearch')
    },
    triggerType ({ commit }) {
      commit('triggerType')
    },
    triggerNewTab ({ commit }) {
      commit('triggerNewTab')
    }
  }
}
