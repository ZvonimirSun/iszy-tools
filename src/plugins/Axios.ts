import Axios, { AxiosResponse } from 'axios'
import store from '@/store'

const axiosInstance = Axios.create()
axiosInstance.$apiBase = ''
axiosInstance.CancelToken = Axios.CancelToken
axiosInstance.isCancel = Axios.isCancel
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 401 && response.config.url && response.config.url.includes(axiosInstance.$apiBase as string)) {
      store.dispatch('user/logout')
    }
    return response
  }, async error => {
    return await Promise.reject(error)
  }
)

export default axiosInstance
