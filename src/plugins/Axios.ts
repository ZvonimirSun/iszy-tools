import type { AxiosResponse } from 'axios'
import Axios from 'axios'
import configs from '../config'

Axios.interceptors.request.use((config) => {
  if (config.url && config.url.startsWith(configs.apiBaseUrl)) {
    config.withCredentials = true
  }
  return config
})
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 401 && response.config.url && response.config.url.startsWith(configs.apiBaseUrl)) {
      useUserStore().logout()
    }
    return response
  },
  async (error) => {
    return await Promise.reject(error)
  },
)

Axios.getData = function (res: AxiosResponse) {
  return res?.data
}

export default Axios
