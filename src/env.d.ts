/// <reference types="vue/macros-global" />

export interface ToolItem {
  id?: string,
  name: string,
  link: string,
  tags?: string[],
  statistics?: boolean
}

export interface ToolMenu {
  id?: string,
  type: string,
  icon?: string,
  children?: ToolItem[]
}
