import { acceptHMRUpdate, defineStore } from 'pinia'
import tools from '@/views/tools.json'
import axios from '@/plugins/Axios'
import { flatten, merge } from 'lodash-es'
import type { AxiosError } from 'axios'
import $msg from 'ant-design-vue/es/message'

let tokenChecked = false

interface Favorite {
  name: string,
  link: string
}

interface Statistic {
  name: string,
  link: string,
  times: number,
  lastAccessTime: number
}

export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    _user: {
      token: null as string | null,
      profile: {
        nickName: null as string | null
      }
    },

    favorite: [] as Favorite[],
    statistics: [] as Statistic[],

    settings: {
      showMost: false,
      showRecent: false,

      showSearch: true,
      showType: true,
      openInNewTab: false,

      autoSync: false
    },
    modules: {
      2048: {
        bestScore: 0
      },
      tetris: {
        bestScore: 0
      },
      imgHosting: {
        uploader: '' as 'aliyun' | '' | null,
        configs: {} as Record<string, Record<string, string>>,
        commonConfig: {
          renameBeforeUpload: false,
          renameTimeStamp: true,
          copyUrlAfterUpload: true,
          customCopyContent: '$url'
        }
      },
      jsonEditor: {
        syncCloud: false
      }
    },
    version: 2
  }),
  getters: {
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
    async login ({ userName, password } = {} as {
      userName: string,
      password: string
    }) {
      let error = ''
      try {
        if (userName && password) {
          const res = (await axios.post(`${axios.$apiBase}/auth/login`, {
            username: userName.trim(),
            password
          })).data
          if (res.success) {
            this._user.token = 'logged'
            tokenChecked = true
            this._user.profile = res.data || { nickName: null }
            this.downloadSettings()
            return
          } else {
            this.clearToken()
            error = res.message
          }
        } else {
          error = '用户名或密码错误'
        }
      } catch (e) {
        this.clearToken()
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
      throw new Error(error)
    },
    async logout () {
      try {
        const data = (await axios.post(`${axios.$apiBase}/auth/logout`)).data
        if (data && data.success) {
          this.clearToken()
        } else {
          $msg.warn('登出失败！')
        }
      } catch (e) {
        this.clearToken()
      }
    },
    async getProfiles () {
      if (this._user.token) {
        try {
          if (await this.checkToken()) {
            this._user.profile = (await axios.get(`${axios.$apiBase}/auth/profile`)).data.data || {}
          }
        } catch (e) {
          if (axios.isCancel && !axios.isCancel(e)) {
            console.log(e)
          }
        }
      }
    },
    async checkToken () {
      if (this._user.token) {
        if (tokenChecked) {
          return true
        } else {
          try {
            await axios.head(`${axios.$apiBase}/auth/profile`)
            tokenChecked = true
            return true
          } catch (e) {
            if (axios.isCancel && !axios.isCancel(e)) {
              this.clearToken()
            }
            return false
          }
        }
      } else {
        return false
      }
    },

    clearHistory () {
      this.statistics = []
    },

    fixFavorite () {
      const allTools = flatten([...(tools || [])].map(item => {
        return item.children
      }))
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
    },

    clearToken () {
      this._user.token = null
      this._user.profile = {
        nickName: null
      }
    },

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

    async uploadSettings () {
      if (this._user.token) {
        const settings = {
          favorite: this.favorite,
          statistics: this.statistics,

          settings: this.settings,
          modules: this.modules,

          version: this.version
        }
        try {
          const res = (await axios.post(`${axios.$apiBase}/tools/settings`, settings)).data
          return res.success && res.data
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    },
    async downloadSettings () {
      if (this._user.token) {
        try {
          if (await this.checkToken()) {
            const res = (await axios.get(`${axios.$apiBase}/tools/settings`)).data
            if (res.success && res.data) {
              this.importConfig(res.data)
              return true
            }
          }
        } catch (e) {
          console.log(e)
        }
        return false
      } else {
        return false
      }
    },
    importConfig (data: any) {
      let tmp = data
      if (data.version == null) {
        tmp = this.upgradeDataToV2(data)
      }
      this.favorite = tmp.favorite
      this.statistics = tmp.statistics
      this.settings = tmp.settings
      this.modules = tmp.modules
      this.version = tmp.version
    },

    upgradeDataToV2 (data: any) {
      delete data.profile
      delete data.token
      data.modules.jsonEditor = merge(this.modules.jsonEditor, data.settings.jsonEditor)
      delete data.settings.jsonEditor
      data.version = 2
      return data
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
