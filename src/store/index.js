import { createStore } from 'vuex'
import statistics from './modules/statistics'
import settings from './modules/settings'
import favorite from './modules/favorite'
import jsonEditor from './modules/jsonEditor'
import VuexPersist from '@/plugins/VuexPersist'

export default createStore({
  modules: {
    statistics,
    settings,
    favorite,
    jsonEditor
  },
  plugins: [VuexPersist()]
})
