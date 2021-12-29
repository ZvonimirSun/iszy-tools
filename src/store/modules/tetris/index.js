export default {
  namespaced: true,
  getters: {
    bestScore (state, getters, rootState) {
      return rootState.user.modules.tetris.bestScore
    }
  },
  actions: {
    setBestScore ({ commit }, bestScore) {
      commit('user/updateModuleState', {
        module: 'tetris',
        key: 'bestScore',
        value: bestScore || 0
      }, { root: true })
    }
  }
}
