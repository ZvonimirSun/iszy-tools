import { AxiosResponse } from 'axios'

// typings.d.ts or router.ts
import 'vue-router'
export { JSONValue } from 'immutable-json-patch'

declare global {
  const ElMessage: typeof import('element-plus/es')['ElMessage']
  const ElMessageBox: typeof import('element-plus/es')['ElMessageBox']
}

declare module 'ace-builds' {
  namespace Ace {
    interface EditSession {
      foldAll: () => void,
      unfold: () => void
    }
  }
}

/// <reference types="vue/macros-global" />
/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
export type { AxiosStatic } from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    $apiBase?: string,
    getData?: (res: AxiosResponse) => any
  }
}

declare module 'virtual:pwa-register/vue' {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-expect-error ignore when vue is not installed
  import type { Ref } from 'vue'
  import type { RegisterSWOptions } from 'vite-plugin-pwa/types'

  export type { RegisterSWOptions }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>
    offlineReady: Ref<boolean>
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string,
    requiresAuth?: boolean
  }
}
