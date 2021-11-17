import Axios from 'axios'
import store from '@/store'

const axiosInstance = Axios.create()
axiosInstance.CancelToken = Axios.CancelToken
axiosInstance.interceptors.request.use(
  configs => {
    if (store.state.user.token && configs.url.includes('https://api.iszy.xyz')) {
      configs.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    return configs
  }
)
axiosInstance.interceptors.response.use(
  response => {
    if (response.config.url.includes('https://api.iszy.xyz')) {
      if (response.data && response.data.code === 'A0401') {
        window.location.href = '/'
      }
    }
    return response
  }, error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
