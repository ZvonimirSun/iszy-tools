import { acceptHMRUpdate, defineStore } from 'pinia'
import tools from '@/views/tools.json'
import axios from '@/plugins/Axios'
import { flatten } from 'lodash-es'
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
    statistics: [] as Statistic[]
  }),
  getters: {
    isFav: state => (name: string) => {
      return state.favorite.filter(item => (item.name === name)).length > 0
    },
    recent: state => (count: number) => {
      return [...state.statistics].sort(function (a, b) {
        return b.lastAccessTime - a.lastAccessTime
      }).slice(0, count)
    },
    most: state => (count: number) => {
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
        if ((e as AxiosError)?.response?.data?.message) {
          throw new Error((e as AxiosError)?.response?.data?.message)
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
          this.favorite = this.favorite.filter(item => (item.name !== tool.name))
        } else if (tmp.link !== tool.link) {
          const tmp = this.favorite.find(item => (item.name === tool.name))
          if (tmp) {
            tmp.link = tool.link
          } else {
            this.favorite.push({
              name: tool.name,
              link: tool.link
            })
          }
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
    access ({ name, link } = {} as {name:string, link:string}) {
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
    },
    async downloadSettings () {
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
