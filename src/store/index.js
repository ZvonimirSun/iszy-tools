import { createStore } from 'vuex'
import statistics from './modules/statistics'
import settings from './modules/settings'

export default createStore({
  modules: {
    statistics,
    settings
  }
})
