import type { AuthOption } from './auth'

interface ToolMeta {
  tags?: string[],
  statistics?: boolean,
  layout?: string,
  type?: 'tool' | 'internal',
  requiresAuth?: AuthOption,
  offline?: boolean
}

export interface ToolItem extends ToolMeta {
  id?: string,
  name: string,
  link: string
}

export interface ToolMenu {
  id: string,
  type: string,
  icon: string,
  children: ToolItem[]
}

interface ToolRecord {
  name: string,
  link: string
}

export interface Favorite extends ToolRecord {
}

export interface Statistic extends ToolRecord {
  times: number,
  lastAccessTime: number
}

declare module 'vue-router' {
  interface RouteMeta extends ToolMeta {
    title?: string,
  }
}
