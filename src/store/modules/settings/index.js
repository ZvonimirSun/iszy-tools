import { getLocalStorage, setLocalStorage } from '@/utils/StorageUtils'

export default {
  namespaced: true,
  state: () => ({
    settings: getLocalStorage('store_settings', {
      enableStatistics: true,
      showMost: false,
      showRecent: false
    })
  }),
  mutations: {
    triggerMost (state) {
      state.settings.showMost = !state.settings.showMost
    },
    triggerRecent (state) {
      state.settings.showRecent = !state.settings.showRecent
    },
    triggerStatistics (state) {
      state.settings.enableStatistics = !state.settings.enableStatistics
    }
  },
  actions: {
    triggerMost ({ commit, state }) {
      commit('triggerMost')
      setLocalStorage('store_settings', state.settings)
    },
    triggerRecent ({ commit, state }) {
      commit('triggerRecent')
      setLocalStorage('store_settings', state.settings)
    },
    triggerStatistics ({ dispatch, commit, state }) {
      commit('triggerStatistics')
      if (!state.settings.enableStatistics) {
        dispatch('statistics/clearHistory', null, { root: true })
      }
      setLocalStorage('store_settings', state.settings)
    }
  }
}
