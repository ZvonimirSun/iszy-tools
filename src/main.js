import EventBus from '@/plugins/EventBus.js'
import { createApp } from 'vue'
import { message } from 'ant-design-vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/Axios'
import span from '@/directives/span'

const app = createApp(App)

message.config({
  duration: 2,
  maxCount: 3
})

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = message
app.config.globalProperties.$eventBus = EventBus

store.$axios = axios
store.$msg = message

app.use(store).use(router).use(span)
app.mount('#app')
