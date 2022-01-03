export default {
  state: () => ({
    showMost: false,
    showRecent: false,

    showSearch: true,
    showType: true,
    openInNewTab: false,

    autoSync: false
  }),
  mutations: {
    triggerSetting (state, setting) {
      state[setting] = !state[setting]
    }
  }
}
