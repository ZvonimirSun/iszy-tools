import Axios from 'axios'
import store from '@/store'

const axiosInstance = Axios.create()
axiosInstance.CancelToken = Axios.CancelToken
axiosInstance.interceptors.request.use(
  configs => {
    if (store.state.user.token) {
      configs.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    return configs
  }
)

export default axiosInstance
