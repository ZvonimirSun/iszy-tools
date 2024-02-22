export type MockPrj = {
  id: string
  name: string
  path: string
  description: string
}

type RequestType = 'post' | 'get' | 'delete' | 'put'

export type MockData = {
  id: number
  name: string
  type: RequestType
  enabled: boolean
  path: string
  description?: string
  delay: number
  response: string
  projectId: string
  createdAt?: string
  url?: string
}

export type ResultDto<T> = {
  success: boolean
  data?: T
  message?: string
}
