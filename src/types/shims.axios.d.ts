import { AxiosResponse } from 'axios'
export type { AxiosStatic } from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    $apiBase?: string,
    getData?: (res: AxiosResponse) => any
  }
}
