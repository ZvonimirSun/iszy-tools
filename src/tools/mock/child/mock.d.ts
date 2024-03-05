export interface MockPrj {
  id: string
  name: string
  path: string
  description: string
}

type RequestType = 'post' | 'get' | 'delete' | 'put'

export interface MockData {
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

export interface ResultDto<T> {
  success: boolean
  data?: T
  message?: string
}
