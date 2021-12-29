export default {
  namespaced: true,
  state: () => ({
    gameState: undefined
  }),
  getters: {
    bestScore (state, getters, rootState) {
      return rootState.user.modules['2048'].bestScore
    }
  },
  mutations: {
    setGameState (state, gameState) {
      state.gameState = gameState
    }
  },
  actions: {
    setBestScore ({ commit }, bestScore) {
      commit('user/updateModuleState', {
        module: '2048',
        key: 'bestScore',
        value: bestScore || 0
      }, { root: true })
    },
    setGameState ({ commit }, gameState) {
      commit('setGameState', gameState || {})
    },
    clearGameState ({ commit }) {
      commit('setGameState', undefined)
    }
  }
}
