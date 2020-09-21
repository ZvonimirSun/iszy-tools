import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from 'axios'
import { createFromIconfontCN } from '@ant-design/icons-vue'

const app = createApp(App)
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1621893_lxlqg2tkrd.js'
})

app.use(store).use(router).use(Antd).component('IconFont', IconFont)
app.config.globalProperties.axios = axios
app.mount('#app')
