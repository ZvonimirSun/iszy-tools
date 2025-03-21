import App from '@/App.vue'
import { createPiniaPersist } from '@/plugins/PiniaPersist'
import { createPiniaSync } from '@/plugins/PiniaSync'
import config from './config'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:uno.css'

if (!import.meta.env.PROD) {
  if (import.meta.env.VITE_API_BASE_URL) {
    config.apiOrigin = import.meta.env.VITE_API_BASE_URL
  }
  else {
    config.apiOrigin = window.origin
    config.apiPath = '/api'
  }
}

(async () => {
  const pinia = createPinia()
  const app = createApp(App)

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
