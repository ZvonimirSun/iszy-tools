export interface ToolItem {
  id?: string,
  name: string,
  link: string,
  tags?: string[],
  statistics?: boolean,
  layout?: string,
  type?: string
}

export interface ToolMenu {
  id?: string,
  type?: string,
  icon?: string,
  link?: string,
  children?: ToolItem[]
}
