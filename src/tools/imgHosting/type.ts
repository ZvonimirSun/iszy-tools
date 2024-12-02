export interface Config {
  name: string
  type: string
  default: string
  required: boolean
  label: string
  hint: string
}

export interface S3Config {
  accessKeyId: string
  accessKeySecret: string
  bucket: string
  area: string
  path: string
  customUrl: string
  options: string
  [key: string]: string
}

export interface Uploader<T = any> {
  name: string
  config: (options: Partial<T>) => Config[]
  upload: (config: T, file: File) => Promise<{
    name: string
    url: string
  }>
}
