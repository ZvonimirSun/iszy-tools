// axios
export type { AxiosStatic } from 'axios'
declare module 'axios' {
  import type { AxiosResponse } from 'axios'

  export interface AxiosInstance {
    getData?: (res: AxiosResponse) => any
  }
}
