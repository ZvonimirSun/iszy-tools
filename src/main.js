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

app.use(store).use(router)
app.mount('#app')
