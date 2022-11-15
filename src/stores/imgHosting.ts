import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import { cloneDeep, merge } from 'lodash-es'
import { v4 as uuidv4 } from 'uuid'

const userImgHosting = useUserStore().modules.imgHosting

interface ImgItem {
  name: string,
  url: string,
  id: string
}

export const useImgHostingStore = defineStore('imgHosting', {
  persist: true,
  state: () => ({
    imgList: [] as ImgItem[]
  }),
  getters: {
    uploader () {
      return userImgHosting.uploader
    },
    config () {
      return (uploader: string): Record<string, string> => {
        return userImgHosting.configs[uploader]
      }
    },
    commonConfig () {
      return userImgHosting.commonConfig
    }
  },
  actions: {
    saveConfig ({ uploader, config } = {} as {
      uploader: 'aliyun', config: Record<string, string>
    }) {
      userImgHosting.uploader = uploader
      userImgHosting.configs[uploader] = config
    },
    saveCommonConfig (val: any) {
      userImgHosting.commonConfig = cloneDeep(val)
    },
    addImage ({ name, url } = {} as { name: string, url: string }) {
      if (name && url) {
        this.imgList.unshift({
          name, url, id: uuidv4()
        })
      }
    },
    removeImage ({ id } = {} as {id: string}) {
      for (const i in this.imgList || []) {
        if (this.imgList[i].id === id) {
          this.imgList.splice(parseInt(i), 1)
        }
      }
    },
    async importConfig ({
      uploader = '' as 'aliyun' | null,
      imgList = [],
      configs = {},
      commonConfig = { renameTimeStamp: true }
    }) {
      if (typeof uploader === 'string' && Array.isArray(imgList) && configs && commonConfig) {
        this.imgList = imgList
        userImgHosting.uploader = uploader
        userImgHosting.configs = configs
        userImgHosting.commonConfig = merge(userImgHosting.commonConfig, commonConfig)
      } else {
        throw new Error('配置有误')
      }
    }
  }
})
