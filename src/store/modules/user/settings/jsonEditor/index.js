export default {
  namespaced: true,
  state: () => ({
    syncCloud: false
  }),
  mutations: {
    triggerJsonEditorSetting (state, setting) {
      state[setting] = !state[setting]
    }
  }
}
