import config from '@/config'
import axios from 'axios'
import dayjs from 'dayjs'
import { defineStore } from 'pinia'

export const useLinuxCommandStore = defineStore('linuxCommand', {
  persist: true,
  state: () => ({
    data: {} as Record<string, any>,
    time: null as string | null,
  }),
  actions: {
    async getData() {
      try {
        const res = await axios.get(`${config.cdnOrigin}/jsd/gh/jaywcjlove/linux-command@1.8.1/dist/data.min.json`)
        this.data = res.data
        this.time = dayjs().format()
      }
      catch (e) {
        ElMessage.warning('获取Linux命令数据失败')
      }
    },
  },
})
