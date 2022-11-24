import Axios, { AxiosResponse } from 'axios'
import { useUserStore } from '@/stores/user'

Axios.$apiBase = ''
Axios.interceptors.request.use((config) => {
  if (config.url && config.url.startsWith(Axios.$apiBase as string)) {
    config.withCredentials = true
  }
  return config
})
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 401 && response.config.url && response.config.url.startsWith(Axios.$apiBase as string)) {
      useUserStore().logout()
    }
    return response
  }, async error => {
    return await Promise.reject(error)
  }
)

export default Axios
