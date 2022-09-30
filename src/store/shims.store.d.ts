import type { AxiosInstance } from 'axios'
import type { MessageApi } from 'ant-design-vue/es/message'
declare module 'vuex' {
  export interface Store<S> {
    $axios?: AxiosInstance
    $msg?: MessageApi,
    $apiBase?: string
  }
}
