import dayjs from 'dayjs'

export default {
  namespaced: true,
  state: () => ({
    data: {},
    time: undefined
  }),
  mutations: {
    setData (state, val) {
      state.data = val
      state.time = dayjs().format()
    }
  },
  actions: {
    async getData ({ commit }) {
      try {
        const res = await this.$axios.get('https://jsdelivr.cdn.iszy.cc/gh/jaywcjlove/linux-command@1.8.1/dist/data.min.json')
        commit('setData', res.data)
      } catch (e) {
        this.$msg.warn('获取Linux命令数据失败')
      }
    }
  }
}
