export interface Privilege {
  type: string,
}

export interface Role {
  name: string,
  alias: string,
  privileges?: Privilege[]
}

export interface User {
  nickName: string | null,
  userName: string | null,
  email: string | null,
  userId: number | null,
  roles: Role[] | null
}

export interface AuthOption {
  users?: string[],
  roles?: string[],
  privileges?: string[]
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string,
    requiresAuth?: boolean | AuthOption
  }
}
