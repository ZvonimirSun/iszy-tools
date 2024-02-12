import EventBus from '@/plugins/EventBus.js'
import App from '@/App.vue'
import axios from '@/plugins/Axios'
import { createPiniaPersist } from '@/plugins/PiniaPersist'
import { createPiniaSync } from '@/plugins/PiniaSync'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:uno.css'

const $apiBase = import.meta.env.PROD ? 'https://api.iszy.xyz' : import.meta.env.VITE_API_BASE_URL || 'https://api.iszy.xyz';

(async () => {
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
    version: 3
  })
  const piniaSyncPlugin = createPiniaSync()
  pinia.use(piniaPersistPlugin).use(piniaSyncPlugin)
  app.use(pinia)

  const router = (await import('@/router')).default
  app.use(router)

  app.mount('#app')
})()
