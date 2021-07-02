export default {
  namespaced: true,
  state: () => ({
    bestScore: 0
  }),
  mutations: {
    setBestScore (state, bestScore) {
      state.bestScore = bestScore
    }
  },
  actions: {
    setBestScore ({ commit }, bestScore) {
      commit('setBestScore', bestScore || 0)
    }
  }
}
