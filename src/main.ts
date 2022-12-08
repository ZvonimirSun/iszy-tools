import EventBus from '@/plugins/EventBus.js'
import App from '@/App.vue'
import router from '@/router'
import axios from '@/plugins/Axios'
import { createPiniaPersist } from '@/plugins/PiniaPersist'
import VueGtag from 'vue-gtag'
import { RouteRecordRaw } from 'vue-router'
import 'element-plus/theme-chalk/dark/css-vars.css'

const $apiBase = 'https://api.iszy.xyz'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$eventBus = EventBus

app.provide('$axios', axios)
app.provide('$eventBus', EventBus)

axios.$apiBase = $apiBase

const piniaPersistPlugin = await createPiniaPersist({
  name: 'iszy_tools',
  storeName: 'state',
  version: 2
})

pinia.use(piniaPersistPlugin)

app.use(pinia).use(router).use(VueGtag, {
  appName: 'ISZY工具集合',
  pageTrackerScreenviewEnabled: true,
  pageTrackerTemplate (to: RouteRecordRaw) {
    return {
      page_title: to.name,
      page_path: to.path
    }
  },
  config: { id: 'G-LSFH1TGJMM' }
}, router)
app.mount('#app')
