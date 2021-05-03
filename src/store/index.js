import { createStore } from 'vuex'
import statistics from './modules/statistics'
import settings from './modules/settings'
import vuexPersist from '@/plugins/vuexPersist'

export default createStore({
  modules: {
    statistics,
    settings
  },
  plugins: [vuexPersist()]
})
