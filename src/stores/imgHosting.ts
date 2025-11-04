import { merge } from 'lodash-es'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

const userImgHosting = useSettingStore().modules.imgHosting

interface ImgItem {
  name: string
  url: string
  id: string
}

export const useImgHostingStore = defineStore('imgHosting', {
  state: () => ({
    imgList: [] as ImgItem[],
  }),
  getters: {
    uploader() {
      return userImgHosting.uploader
    },
    config() {
      return (uploader: string): Record<string, string> => {
        return userImgHosting.configs[uploader]!
      }
    },
    commonConfig() {
      return userImgHosting.commonConfig
    },
  },
  actions: {
    saveConfig({ uploader, config } = {} as {
      uploader: 'aliyun'
      config: Record<string, string>
    }) {
      userImgHosting.uploader = uploader
      userImgHosting.configs[uploader] = config
    },
    importImages(images: ImgItem[]) {
      this.imgList = images.slice()
    },
    addImage({ name, url } = {} as { name: string, url: string }) {
      if (name && url) {
        this.imgList.unshift({
          name,
          url,
          id: uuidv4(),
        })
      }
    },
    removeImage({ id } = {} as { id: string }) {
      for (const i in this.imgList || []) {
        if (this.imgList[i]!.id === id) {
          this.imgList.splice(Number.parseInt(i), 1)
        }
      }
    },
    async importConfig({
      uploader = '' as 'aliyun' | null,
      configs = {},
      commonConfig = { renameTimeStamp: true },
    }) {
      if (typeof uploader === 'string' && configs && commonConfig) {
        userImgHosting.uploader = uploader
        userImgHosting.configs = configs
        userImgHosting.commonConfig = merge(userImgHosting.commonConfig, commonConfig)
      }
      else {
        throw new Error('配置有误')
      }
    },
  },
})
