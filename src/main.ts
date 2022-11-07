import EventBus from '@/plugins/EventBus.js'
import message from 'ant-design-vue/es/message'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/Axios'
import 'ant-design-vue/es/message/style/css.js'
import { createPinia } from 'pinia'
import { createPiniaPersist } from '@/plugins/PiniaPersist'

const $apiBase = 'https://api.iszy.xyz'

const pinia = createPinia()
const app = createApp(App)

message.config({
  duration: 2,
  maxCount: 3
})

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = message
app.config.globalProperties.$eventBus = EventBus

app.provide('$axios', axios)
app.provide('$msg', message)
app.provide('$eventBus', EventBus)

store.$axios = app.config.globalProperties.$axios
store.$msg = app.config.globalProperties.$msg
axios.$apiBase = $apiBase

pinia.use(createPiniaPersist({
  name: 'iszy_tools',
  storeName: 'state',
  version: 2,
  debug: true
}))

app.use(pinia).use(store).use(router)
app.mount('#app')
