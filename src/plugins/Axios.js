import Axios from 'axios'
import store from '@/store'
import router from '@/router'

const axiosInstance = Axios.create()
axiosInstance.$apiBase = ''
axiosInstance.CancelToken = Axios.CancelToken
axiosInstance.isCancel = Axios.isCancel
axiosInstance.interceptors.request.use(
  configs => {
    if (store.state.user.token && configs.url.includes(axiosInstance.$apiBase)) {
      configs.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    return configs
  }
)
axiosInstance.interceptors.response.use(
  response => {
    if (response.config.url.includes(axiosInstance.$apiBase)) {
      if (response.data && response.data.code === 'A0401') {
        router.push('/login')
      }
    }
    return response
  }, error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
