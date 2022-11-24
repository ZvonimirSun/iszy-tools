import type { AxiosStatic } from 'axios'
import type { MessageApi } from 'ant-design-vue/es/message'

declare module 'vuex' {
  export interface Store<S> {
    $axios?: AxiosStatic
    $msg?: MessageApi,
    $apiBase?: string
  }
}
