import type { AxiosResponse } from 'axios'
import type { APIInstance } from '@/types/axios'
import Axios from 'axios'
import configs from '../config'

const API: APIInstance = Axios.create({
  baseURL: configs.apiBaseUrl,
})

API.interceptors.request.use((config) => {
  if (useUserStore().logged) {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${useUserStore().access_token}`
    }
  }
  return config
})

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest.url !== '/auth/refresh') {
      if (!useUserStore().logged) {
        return Promise.reject(error)
      }
      if (!originalRequest._retry) {
        originalRequest._retry = true
        delete originalRequest.headers.Authorization
        await useUserStore().refresh()
        return API(originalRequest)
      }
    }
    return Promise.reject(error)
  },
)

Axios.getData = function (res: AxiosResponse) {
  return res?.data
}

export { API }

export default API
