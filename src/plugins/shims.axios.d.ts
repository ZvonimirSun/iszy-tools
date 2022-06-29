import { AxiosInstance, CancelTokenStatic, AxiosStatic } from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    $apiBase?: string,
    CancelToken?: CancelTokenStatic,
    isCancel?: AxiosStatic['isCancel']
  }
}
