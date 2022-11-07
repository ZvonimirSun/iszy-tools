import type { AxiosStatic } from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    $apiBase?: string
  }
}
