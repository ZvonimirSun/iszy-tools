export interface Privilege {
  type: string
}

export interface Role {
  name: string
  alias: string
  privileges?: Privilege[]
}

export interface User {
  nickName: string
  userName: string
  email: string
  userId: number
  mobile: string
  github?: string
  linuxdo?: string
  roles: Role[]
  createdAt?: string
  updatedAt?: string
  status?: UserStatus
}

export type AuthOption = boolean | {
  users?: string[]
  roles?: string[]
  privileges?: string[]
}
