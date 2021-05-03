export default {
  namespaced: true,
  state: () => ({
    favorite: []
  }),
  getters: {
    isFav: state => name => {
      return state.favorite.filter(item => (item.name === name)).length > 0
    }
  },
  mutations: {
    updateFav (state, { tool, add }) {
      const tmp = state.favorite.filter(item => (item.name !== tool.name))
      if (add) {
        if (tmp.length === state.favorite.length) {
          state.favorite.push(tool)
        }
      } else {
        state.favorite = tmp
      }
    }
  },
  actions: {
    addFav ({ commit }, tool) {
      commit('updateFav', { tool, add: true })
    },
    removeFav ({ commit }, tool) {
      commit('updateFav', { tool })
    }
  }
}
