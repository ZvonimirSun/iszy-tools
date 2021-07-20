import { createApp } from 'vue'
import { message } from 'ant-design-vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/Axios'
import { createFromIconfontCN } from '@ant-design/icons-vue'

const app = createApp(App)
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1621893_xd2ds9wt5hf.js'
})

message.config({
  duration: 2,
  maxCount: 3
})

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = message

app.use(store).use(router).component('IconFont', IconFont)
app.mount('#app')
