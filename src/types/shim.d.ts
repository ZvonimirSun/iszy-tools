// vue
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line ts/no-empty-object-type
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
  import type { AxiosResponse } from 'axios'

  export interface AxiosInstance {
    getData?: (res: AxiosResponse) => any
  }
}
