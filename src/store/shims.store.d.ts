import { AxiosInstance } from 'axios'
import { message } from 'ant-design-vue'
declare module 'vuex' {
  export interface Store<S> {
    $axios?: AxiosInstance
    $msg?: typeof message,
    $apiBase?: string
  }
}
