import type { AuthOption, User } from '@/types/auth'
import type { AxiosError, AxiosResponse } from 'axios'
import config from '@/config'
import axios from '@/plugins/Axios'
import { downloadSettings } from '@/plugins/PiniaSync'
import { clone } from 'lodash-es'
import { acceptHMRUpdate, defineStore } from 'pinia'

let tokenChecked = false
let checkTokenPromise: Promise<AxiosResponse> | null = null

const emptyProfile: User = {
  nickName: '',
  userName: '',
  email: '',
  userId: -1,
  roles: [],
  mobile: '',
}

export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    logged: false,
    profile: clone(emptyProfile) as User,
  }),
  getters: {
    isAdmin: (state) => {
      return state.profile.roles?.some(item => (item.name === 'superadmin'))
    },
  },

  actions: {
    async login({ userName, password } = {} as {
      userName: string
      password: string
    }) {
      let error = ''
      try {
        if (userName && password) {
          const res = (await axios.post(`${config.apiBaseUrl}/auth/login`, {
            username: userName.trim(),
            password,
          })).data
          if (res.success) {
            this.logged = true
            tokenChecked = true
            this.profile = res.data || clone(emptyProfile)
            await downloadSettings()
            return
          }
          else {
            this.clearToken()
            error = res.message
          }
        }
        else {
          error = '用户名或密码错误'
        }
      }
      catch (e) {
        this.clearToken()
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
      throw new Error(error)
    },
    async logout() {
      try {
        const data = (await axios.post(`${config.apiBaseUrl}/auth/logout`)).data
        if (data && data.success) {
          this.clearToken()
        }
        else {
          ElMessage.warning('登出失败！')
        }
      }
      catch (e) {
        this.clearToken()
      }
    },
    async register(form: Omit<User, 'roles' | 'userId'>) {
      try {
        const data = (await axios.post(`${config.apiBaseUrl}/auth/register`, form)).data
        if (data && data.success) {
          return true
        }
        else {
          throw new Error(data.message)
        }
      }
      catch (e) {
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
    },
    async updateUser(options: {
      nickName?: string
      email?: string
      passwd?: string
      oldPasswd?: string
    }) {
      try {
        const data = (await axios.put(`${config.apiBaseUrl}/auth/profile`, options)).data
        if (data && data.success) {
          this.profile = data.data || clone(emptyProfile)
          ElMessage.success('更新成功！')
        }
        else {
          throw new Error(data.message)
        }
      }
      catch (e) {
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
    },
    async checkToken() {
      if (this.logged) {
        if (tokenChecked) {
          return true
        }
        else {
          if (!checkTokenPromise) {
            checkTokenPromise = axios.get(`${config.apiBaseUrl}/auth/profile`)
            checkTokenPromise.then((res) => {
              console.log('已登录')
              const data = res.data
              if (data && data.success) {
                this.profile = data.data || clone(emptyProfile)
              }
            })
          }
          try {
            const data = (await checkTokenPromise).data
            if (data && data.success) {
              tokenChecked = true
              return true
            }
            else {
              this.clearToken()
              return false
            }
          }
          catch (e) {
            if (axios.isCancel && !axios.isCancel(e)) {
              this.clearToken()
            }
            return false
          }
        }
      }
      else {
        return false
      }
    },
    async checkThirdPartyLogin() {
      this.logged = true
      await this.checkToken()
    },
    checkAccess(authOption: AuthOption) {
      if (authOption === false) {
        return true
      }
      else if (typeof authOption === 'boolean') {
        return this.logged
      }
      else {
        if (!this.logged) {
          return false
        }
        if (authOption.users) {
          if (authOption.users.includes(this.profile.userName || '')) {
            return true
          }
        }
        if (authOption.roles) {
          if (authOption.roles.some(item => (this.profile.roles?.some(role => role.name === item)))) {
            return true
          }
        }
        if (authOption.privileges) {
          // todo
        }
        return false
      }
    },

    clearToken() {
      this.logged = false
      this.profile = clone(emptyProfile)
    },
    importConfig(data: any) {
      useUserStore().$patch(data)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
