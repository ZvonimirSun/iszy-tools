import type { AxiosResponse } from 'axios'
import Axios from 'axios'
import configs from '../config'

Axios.interceptors.request.use((config) => {
  if (config.url && config.url.startsWith(configs.apiBaseUrl)) {
    if (!config.headers.Authorization && useUserStore().logged) {
      config.headers.Authorization = `Bearer ${useUserStore().access_token}`
    }
  }
  return config
})
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest.url?.startsWith(configs.apiBaseUrl) && originalRequest.url !== `${configs.apiBaseUrl}/auth/refresh`) {
      if (!useUserStore().logged) {
        return Promise.reject(error)
      }
      if (!originalRequest._retry) {
        originalRequest._retry = true
        delete originalRequest.headers.Authorization
        try {
          await useUserStore().refresh()
          return Axios(originalRequest)
        }
        catch (e) {
          return Promise.reject(error)
        }
      }
    }
    return Promise.reject(error)
  },
)

Axios.getData = function (res: AxiosResponse) {
  return res?.data
}

export default Axios
