import EventBus from '@/plugins/EventBus.js'
import { createApp } from 'vue'
import { message } from 'ant-design-vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/Axios'

const app = createApp(App)

message.config({
  duration: 2,
  maxCount: 3
})

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = message
app.config.globalProperties.$eventBus = EventBus
app.config.globalProperties.$apiBase = 'https://api.iszy.xyz'

app.provide('$axios', axios)
app.provide('$msg', message)
app.provide('$eventBus', EventBus)
app.provide('$apiBase', 'https://api.iszy.xyz')

store.$axios = app.config.globalProperties.$axios
store.$msg = app.config.globalProperties.$msg
store.$apiBase = app.config.globalProperties.$apiBase
axios.$apiBase = app.config.globalProperties.$apiBase

app.use(store).use(router)
app.mount('#app')
