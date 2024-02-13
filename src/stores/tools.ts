import { acceptHMRUpdate, defineStore } from 'pinia'
import tools from '@/tools.json'
import { flatten } from 'lodash-es'
import { v4 as uuid } from 'uuid'
import type { AuthOption, Favorite, Statistic } from '@/index'

interface ToolItem {
  id?: string,
  name: string,
  link: string,
  tags?: string[],
  statistics?: boolean,
  layout?: string,
  type?: string,
  requiresAuth?: boolean | AuthOption,
}

interface ToolMenu {
  id?: string,
  type?: string,
  icon?: string,
  link?: string,
  children: ToolItem[]
}

const internalTools: ToolItem[] = [
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
  },
  {
    name: '用户管理',
    link: '/userManager',
    requiresAuth: {
      roles: ['superadmin']
    }
  }
]

export const useToolsStore = defineStore('tools', {
  persist: true,
  sync: true,
  state: () => ({
    favorite: [] as Favorite[],
    statistics: [] as Statistic[]
  }),
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
      const settings = useSettingStore().general
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

      tmp = tmp.map((item: ToolMenu) => {
        return {
          ...item,
          children: item.children.filter((child: ToolItem) => {
            return !child.requiresAuth || child.requiresAuth === true
          })
        }
      })

      if (settings.showRecent && this.recent().length > 0) {
        tmp.unshift({
          id: uuid(),
          type: '最近访问',
          icon: 'i-icon-park-outline-history',
          children: this.recent(count)
        })
      }
      if (settings.showMost && this.most().length > 0) {
        tmp.unshift({
          id: uuid(),
          type: '最常访问',
          icon: 'i-icon-park-solid-concern',
          children: this.most(count)
        })
      }
      if (this.favorite.length > 0) {
        tmp.unshift({
          id: uuid(),
          type: '收藏',
          icon: 'i-icon-park-solid-folder-focus',
          children: this.favorite
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
        children: internalTools
      }]
    },

    isFav: state => (name: string): boolean => {
      return state.favorite.filter(item => (item.name === name)).length > 0
    },
    recent: state => (count?: number): Statistic[] => {
      return [...state.statistics].sort(function (a, b) {
        return b.lastAccessTime - a.lastAccessTime
      }).slice(0, count)
    },
    most: state => (count?: number): Statistic[] => {
      return [...state.statistics].sort(function (a, b) {
        return b.times - a.times
      }).slice(0, count)
    }
  },
  actions: {
    // 收藏相关
    updateFav ({ name, link, add } = {} as {
      name: string, link?: string, add?: boolean
    }) {
      if (add) {
        if (!link) {
          return
        }
        const tmp = this.favorite.filter(item => (item.name === name))
        if (tmp.length > 0) {
          tmp[0].link = link
        } else {
          this.favorite.push({ name, link })
        }
      } else {
        this.favorite = this.favorite.filter(item => (item.name !== name))
      }
    },
    access ({ name, link } = {} as { name: string, link: string }) {
      if (Array.isArray(this.statistics)) {
        const tmp = this.statistics.filter(item => (item.name === name))
        if (tmp.length > 0) {
          tmp[0].times++
          tmp[0].lastAccessTime = new Date().getTime()
          tmp[0].link = link
        } else {
          this.statistics.push({
            name, link, times: 1, lastAccessTime: new Date().getTime()
          })
        }
      } else {
        this.statistics = [{
          name, link, times: 1, lastAccessTime: new Date().getTime()
        }]
      }
    },

    clearHistory () {
      this.statistics = []
    },

    fixFavorite () {
      const allTools = useToolsStore().oriToolItems
      for (const tool of this.favorite) {
        const tmp = allTools.find(item => (item.name === tool.name))
        if (!tmp) {
          this.updateFav({ name: tool.name })
        } else if (tmp.link !== tool.link) {
          this.updateFav({ name: tool.name, link: tmp.link, add: true })
        }
      }
      for (const tool of this.statistics) {
        const tmp = allTools.find(item => (item.name === tool.name))
        if (!tmp) {
          this.statistics = this.statistics.filter(item => (item.name !== tool.name))
        } else if (tmp.link !== tool.link) {
          const tmp = this.statistics.find(item => (item.name === tool.name))
          if (tmp) {
            tmp.link = tool.link
          }
        }
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToolsStore, import.meta.hot))
}
