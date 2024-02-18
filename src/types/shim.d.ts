/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/vue" />

// vue
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// element-plus
declare global {
  const ElMessage: typeof import('element-plus/es')['ElMessage']
  const ElMessageBox: typeof import('element-plus/es')['ElMessageBox']
}

// axios
export type { AxiosStatic } from 'axios'
declare module 'axios' {
  import { AxiosResponse } from 'axios'
  export interface AxiosInstance {
    $apiBase?: string,
    getData?: (res: AxiosResponse) => any
  }
}

declare interface Window {
  // extend the window
}
