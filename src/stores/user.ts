import type { AuthOption } from '@/types/auth'
import type { Device, PublicUser, RegisterUser, UpdateUser } from '@zvonimirsun/iszy-common'
import type { AxiosError, AxiosResponse } from 'axios'
import config from '@/config'
import axios from '@/plugins/Axios'
import { downloadSettings } from '@/plugins/PiniaSync'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash-es'
import { acceptHMRUpdate, defineStore } from 'pinia'

let tokenChecked = false
let checkTokenPromise: Promise<AxiosResponse> | null = null
let refreshTokenPromise: Promise<AxiosResponse> | null = null

const emptyProfile: PublicUser = {
  nickName: '',
  userName: '',
  email: '',
  userId: -1,
  roles: [],
  mobile: '',
  status: 1,
  createBy: -1,
  updateBy: -1,
}

export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    logged: false,
    access_token: '',
    refresh_token: '',
    profile: cloneDeep(emptyProfile) as PublicUser,
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
            this.updateProfile(res.data)
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
    async logoutDevice({ deviceId, all, other }: {
      deviceId?: string
      all?: boolean
      other?: boolean
    }) {
      if (other) {
        try {
          await axios.post(`${config.apiBaseUrl}/auth/logout`, null, {
            params: {
              deviceId,
              other,
            },
          })
        }
        catch (e) {
          ElMessage.warning('登出失败！')
        }
        return
      }
      if (all) {
        try {
          await axios.post(`${config.apiBaseUrl}/auth/logout`, null, {
            params: {
              all,
            },
          })
        }
        catch (e) {
          ElMessage.warning('登出失败！')
        }
        this.clearToken()
        return
      }
      if (deviceId) {
        try {
          await axios.post(`${config.apiBaseUrl}/auth/logout`, null, {
            params: {
              deviceId,
            },
          })
        }
        catch (e) {
          ElMessage.warning('登出失败！')
        }
      }
    },
    async refresh() {
      if (!this.logged) {
        return
      }
      if (!refreshTokenPromise) {
        refreshTokenPromise = axios.post(`${config.apiBaseUrl}/auth/refresh`, null, {
          headers: {
            Authorization: `Bearer ${this.refresh_token}`,
          },
        })
        refreshTokenPromise.then((res) => {
          const data = res.data
          if (data && data.success) {
            this.updateProfile(data.data)
          }
        })
      }
      try {
        const data = (await refreshTokenPromise).data
        if (!data || !data.success) {
          this.clearToken()
        }
      }
      catch (e) {
        if (axios.isCancel && !axios.isCancel(e)) {
          this.clearToken()
        }
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
    },
    async register(form: RegisterUser): Promise<boolean> {
      try {
        const data = (await axios.post(`${config.apiBaseUrl}/auth/register`, form)).data
        if (data && data.success) {
          return data.data
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
    async updateUser(options: UpdateUser) {
      try {
        const data = (await axios.put(`${config.apiBaseUrl}/auth/profile`, options)).data
        if (data && data.success) {
          this.profile = data.data || cloneDeep(emptyProfile)
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
    async checkToken(force?: boolean) {
      if (!this.logged) {
        return false
      }
      if (tokenChecked && !force) {
        return true
      }
      if (!checkTokenPromise || force) {
        checkTokenPromise = axios.get(`${config.apiBaseUrl}/auth/profile`)
        checkTokenPromise.then((res) => {
          console.log('已登录')
          const data = res.data
          if (data && data.success) {
            this.profile = data.data || cloneDeep(emptyProfile)
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
    },
    async thirdPartyLogin(data: {
      access_token: string
      refresh_token: string
    }) {
      this.logged = true
      tokenChecked = true
      this.updateProfile(data)
      await downloadSettings()
    },
    async thirdPartyBind(type: string, id: string) {
      try {
        await axios.post(`${config.apiBaseUrl}/auth/bind/${type}/${id}`)
        await this.checkToken(true)
      }
      catch (e) {
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
    },
    async thirdPartyUnbind(type: string) {
      try {
        await axios.delete(`${config.apiBaseUrl}/auth/bind/${type}`)
        await this.checkToken(true)
      }
      catch (e) {
        if (((e as AxiosError)?.response?.data as { message: string })?.message) {
          throw new Error(((e as AxiosError)?.response?.data as { message: string })?.message)
        }
        throw e
      }
    },

    async getDevices(): Promise<(Device & {
      createTime?: string
      lastLoginTime?: string
    })[]> {
      const res = (await axios.get(`${config.apiBaseUrl}/auth/devices`)).data
      return res.data.map((device: Device & {
        createTime?: string
        lastLoginTime?: string
      }) => {
        const ip = device.ip
        if (!ip) {
          device.ip = '未知'
        }
        else {
          const tmp = ip.split('.')
          device.ip = `${tmp[0]}.${tmp[1]}.***.***`
        }
        device.createTime = dayjs(device.createdAt!).format('YYYY年MM月DD日 HH:mm')
        device.lastLoginTime = dayjs(device.updatedAt!).format('YYYY年MM月DD日 HH:mm')
        return device
      })
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

    updateProfile(data: {
      access_token: string
      refresh_token: string
      profile?: PublicUser
    }) {
      this.access_token = data.access_token
      this.refresh_token = data.refresh_token
      this.profile = data.profile || cloneDeep(emptyProfile)
    },
    clearToken() {
      this.logged = false
      this.updateProfile({
        access_token: '',
        refresh_token: '',
      })
    },
    importConfig(data: any) {
      useUserStore().$patch(data)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
