export default {
  namespaced: true,
  state: () => ({
    bestScore: 0,
    gameState: undefined
  }),
  mutations: {
    setBestScore (state, bestScore) {
      state.bestScore = bestScore
    },
    setGameState (state, gameState) {
      state.gameState = gameState
    }
  },
  actions: {
    setBestScore ({ commit }, bestScore) {
      commit('setBestScore', bestScore || 0)
    },
    setGameState ({ commit }, gameState) {
      commit('setGameState', gameState || {})
    },
    clearGameState ({ commit }) {
      commit('setGameState', undefined)
    }
  }
}
