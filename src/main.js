import { createApp } from 'vue'
import Antd, { message } from 'ant-design-vue'
import App from '@/App.vue'
import 'ant-design-vue/dist/antd.css'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import Parse from 'parse'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import '@/permission'

const app = createApp(App)
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1621893_lxlqg2tkrd.js'
})

Parse.serverURL = 'https://api.iszy.xyz/parse'
Parse.initialize('3fee66ab-e2fb-463e-b0fb-8f9c11ae3a33', '66b34f1f-e00b-46af-882a-5c1e36287aae')

message.config({
  duration: 2,
  maxCount: 3
})

app.config.globalProperties.$axios = axios
app.config.globalProperties.$msg = message

app.use(store).use(router).use(Antd).component('IconFont', IconFont)
app.mount('#app')
