import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'

export const useImgHostingStore = defineStore('imgHosting', {
  persist: true,
  state: () => ({
    imgList: []
  }),
  getters: {
    uploader () {
      return useUserStore().modules.imgHosting.uploader
    },
    config () {
      return (uploader: string): never => {
        return useUserStore().modules.imgHosting.configs[uploader]
      }
    },
    commonConfig: () => {
      return useUserStore().modules.imgHosting.commonConfig
    }
  }
})
