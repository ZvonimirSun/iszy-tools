import config from './config'
import App from '@/App.vue'
import axios from '@/plugins/Axios'
import { createPiniaPersist } from '@/plugins/PiniaPersist'
import { createPiniaSync } from '@/plugins/PiniaSync'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:uno.css'

const $apiBase = import.meta.env.PROD ? config.apiOrigin : (import.meta.env.VITE_API_BASE_URL || config.apiOrigin)
if (!import.meta.env.PROD) {
  config.apiOrigin = $apiBase
}

(async () => {
  const pinia = createPinia()
  const app = createApp(App)

  axios.$apiBase = $apiBase

  const piniaPersistPlugin = await createPiniaPersist({
    name: config.name,
    storeName: 'state',
    version: 3,
  })
  const piniaSyncPlugin = createPiniaSync()
  pinia.use(piniaPersistPlugin).use(piniaSyncPlugin)
  app.use(pinia)

  const router = (await import('@/plugins/Router')).default
  app.use(router)

  app.mount('#app')
})()
