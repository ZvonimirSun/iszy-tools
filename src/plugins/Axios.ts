import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'
import router from '@/router'

const axiosInstance = Axios.create()
axiosInstance.$apiBase = ''
axiosInstance.CancelToken = Axios.CancelToken
axiosInstance.isCancel = Axios.isCancel
axiosInstance.interceptors.request.use(
  (configs: AxiosRequestConfig) => {
    if (store.state.user._user.token && configs.url.includes(axiosInstance.$apiBase)) {
      configs.headers.Authorization = 'Bearer ' + store.state.user._user.token
    }
    return configs
  }
)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // todo 修复401逻辑
    if (response.config.url.includes(axiosInstance.$apiBase)) {
      if (response.data && response.data.code === 'A0401') {
        router.push('/403')
      }
    }
    return response
  }, async error => {
    return await Promise.reject(error)
  }
)

export default axiosInstance
