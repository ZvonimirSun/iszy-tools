import EventBus from '@/plugins/EventBus.js'
import message from 'ant-design-vue/es/message'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/Axios'
import * as fundebug from 'fundebug-javascript'
import FundebugVue from 'fundebug-vue'
import 'ant-design-vue/es/message/style/css.js'

const fundebugApiKey = '376d597c08f80d72c91b09f49055384c76742c47c07783dadbad8d196c318d0c'
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

fundebug.init({
  apikey: fundebugApiKey
})

app.use(new FundebugVue(fundebug)).use(store).use(router)
app.mount('#app')
