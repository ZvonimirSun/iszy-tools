import type { AxiosStatic } from 'axios'
import { AxiosResponse } from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    $apiBase?: string,
    getData?: (res: AxiosResponse) => any
  }
}
