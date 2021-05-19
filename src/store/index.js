import { createStore } from 'vuex'
import statistics from './modules/statistics'
import settings from './modules/settings'
import favorite from './modules/favorite'
import jsonEditor from './modules/jsonEditor'
import g2048 from './modules/2048'
import VuexPersist from '@/plugins/VuexPersist'

export default createStore({
  modules: {
    statistics,
    settings,
    favorite,
    jsonEditor,
    g2048
  },
  plugins: [VuexPersist()]
})
