import type { AuthOption } from '@/types/auth'

export interface ToolItem {
  id?: string,
  name: string,
  link: string,
  tags?: string[],
  statistics?: boolean,
  layout?: string,
  type?: string,
  requiresAuth?: AuthOption,
}

export interface ToolMenu {
  id: string,
  type: string,
  icon: string,
  children: ToolItem[]
}

export interface Favorite {
  name: string,
  link: string
}

export interface Statistic {
  name: string,
  link: string,
  times: number,
  lastAccessTime: number
}
