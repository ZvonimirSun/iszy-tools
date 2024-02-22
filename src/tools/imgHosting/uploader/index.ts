export * from './aliyun'

export interface Config {
  name: string,
  type: string,
  default: string,
  required: boolean,
  label: string,
  hint: string
}
