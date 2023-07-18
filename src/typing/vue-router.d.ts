// typings.d.ts or router.ts
import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string,
    requiresAuth?: boolean
  }
}
