import { createStore } from 'vuex'
import settings from './modules/settings'
import favorite from './modules/favorite'
import jsonEditor from './modules/jsonEditor'
import g2048 from './modules/2048'
import tetris from './modules/tetris'
import VuexPersist from '@/plugins/VuexPersist'

export default createStore({
  modules: {
    settings,
    favorite,
    jsonEditor,
    g2048,
    tetris
  },
  plugins: [VuexPersist({
    name: 'iszy_tools',
    storeName: 'state'
  })]
})
