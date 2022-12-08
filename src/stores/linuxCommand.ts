import { defineStore } from 'pinia'
import axios from '@/plugins/Axios'
import dayjs from 'dayjs'

export const useLinuxCommandStore = defineStore('linuxCommand', {
  persist: true,
  state: () => ({
    data: {},
    time: null as string | null
  }),
  actions: {
    async getData () {
      try {
        const res = await axios.get('https://jsdelivr.cdn.iszy.xyz/gh/jaywcjlove/linux-command@1.8.1/dist/data.min.json')
        this.data = res.data
        this.time = dayjs().format()
      } catch (e) {
        ElMessage.warning('获取Linux命令数据失败')
      }
    }
  }
})
