export default {
  namespaced: true,
  state: () => ({
    uploader: '',
    imgList: [],
    configs: {
    }
  }),
  getters: {
    config: (state) => (uploader) => {
      return state.configs[uploader]
    }
  },
  mutations: {
    saveConfig (state, { uploader, config }) {
      if (uploader) {
        state.uploader = uploader
        state.configs[uploader] = config
      }
    }
  },
  actions: {
    saveConfig ({ commit }, val) {
      commit('saveConfig', val)
    }
  }
}
