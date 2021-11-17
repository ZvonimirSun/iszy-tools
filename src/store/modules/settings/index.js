export default {
  namespaced: true,
  state: () => ({
    settings: {
      showMost: false,
      showRecent: false,

      showSearch: true,
      showType: true,
      openInNewTab: false,

      autoSync: false
    }
  }),
  mutations: {
    triggerSetting (state, setting) {
      state.settings[setting] = !state.settings[setting]
    }
  },
  actions: {
    triggerSetting ({ commit }, setting) {
      commit('triggerSetting', setting)
    }
  }
}
