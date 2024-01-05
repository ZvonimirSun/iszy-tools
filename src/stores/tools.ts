import { acceptHMRUpdate, defineStore } from 'pinia'
import tools from '@/tools.json'
import { flatten } from 'lodash-es'
import { v4 as uuid } from 'uuid'

interface ToolItem {
  id?: string,
  name: string,
  link: string,
  tags?: string[],
  statistics?: boolean,
  layout?: string,
  type?: string,
  requiresAuth?: boolean,
}

interface ToolMenu {
  id?: string,
  type?: string,
  icon?: string,
  link?: string,
  children: ToolItem[]
}

export const useToolsStore = defineStore('tools', {
  getters: {
    oriToolMenus (): ToolMenu[] {
      return (tools || []).map((item: ToolMenu) => {
        item.id = item.id || uuid()
        item.children = (item.children || []).map((child: ToolItem) => {
          child.id = child.id || uuid()
          return child
        })
        return item
      })
    },
    oriToolItems (): ToolItem[] {
      return flatten(this.oriToolMenus.map((item: ToolMenu) => {
        return item.children
      }))
    },
    toolMenus (): ToolMenu[] {
      const userStore = useUserStore()
      const settings = userStore.settings
      const count = 6

      let tmp: ToolMenu[] = []
      if (settings.showType) {
        tmp = [...this.oriToolMenus]
      } else {
        tmp = [{
          id: uuid(),
          type: '工具',
          icon: 'i-icon-park-solid-all-application',
          children: this.oriToolItems
        }]
      }
      if (settings.showRecent && userStore.recent().length > 0) {
        tmp.unshift({
          id: uuid(),
          type: '最近访问',
          icon: 'i-icon-park-outline-history',
          children: userStore.recent(count)
        })
      }
      if (settings.showMost && userStore.most().length > 0) {
        tmp.unshift({
          id: uuid(),
          type: '最常访问',
          icon: 'i-icon-park-solid-concern',
          children: userStore.most(count)
        })
      }
      if (userStore.favorite.length > 0) {
        tmp.unshift({
          id: uuid(),
          type: '收藏',
          icon: 'i-icon-park-solid-folder-focus',
          children: userStore.favorite
        })
      }
      return tmp.filter((item: ToolMenu) => {
        return item.children.length
      })
    },
    toolMenusFilter (): (keyword: string) => ToolMenu[] {
      return (keyword: string): ToolMenu[] => {
        const tmp = keyword.trim().toLowerCase()
        return this.toolMenus.map((item: ToolMenu) => {
          return {
            ...item,
            children: item.children.filter((child: ToolItem) => {
              return child.name.toLowerCase().includes(tmp) || child.link.toLowerCase().includes(tmp) || (child.tags || []).some(tag => tag.toLowerCase().includes(tmp))
            })
          }
        }).filter((item: ToolMenu) => {
          return item.children.length
        })
      }
    },
    toolMenusWithInternal (): ToolMenu[] {
      return [...this.oriToolMenus, {
        children: [
          {
            name: '首页',
            link: '/',
            type: 'internal'
          },
          {
            name: '403',
            link: '/403',
            type: 'internal'
          },
          {
            name: '404',
            link: '/404',
            type: 'internal'
          },
          {
            name: '登录',
            link: '/login',
            type: 'internal'
          },
          {
            name: '重定向',
            link: '/redirect',
            type: 'internal'
          }
        ]
      }]
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToolsStore, import.meta.hot))
}
