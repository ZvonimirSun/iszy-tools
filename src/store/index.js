import { createStore } from 'vuex'
import statistics from './modules/statistics'
import settings from './modules/settings'
import VuexPersist from '@/plugins/VuexPersist'

export default createStore({
  modules: {
    statistics,
    settings
  },
  plugins: [VuexPersist()]
})
