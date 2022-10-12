import EventBus from '@/plugins/EventBus.js'
import message from 'ant-design-vue/es/message'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/Axios'
import 'ant-design-vue/es/message/style/css.js'

const $apiBase = 'https://api.iszy.xyz'

const app = createApp(App)

message.config({
  duration: 2,
  maxCount: 3
})

axios.defaults.withCredentials = true
app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = message
app.config.globalProperties.$eventBus = EventBus
app.config.globalProperties.$apiBase = $apiBase

app.provide('$axios', axios)
app.provide('$msg', message)
app.provide('$eventBus', EventBus)
app.provide('$apiBase', $apiBase)

store.$axios = app.config.globalProperties.$axios
store.$msg = app.config.globalProperties.$msg
store.$apiBase = app.config.globalProperties.$apiBase
axios.$apiBase = app.config.globalProperties.$apiBase

app.use(store).use(router)
app.mount('#app')
