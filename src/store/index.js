import { createStore } from 'vuex'
import Parse from 'parse'
import { message } from 'ant-design-vue'

export default createStore({
  state: {},
  getters: {
    currentUser: () => {
      return Parse.User.current()
    }
  },
  mutations: {},
  actions: {
    async login ({ commit }, { username, password }) {
      try {
        const user = await Parse.User.logIn(username.trim(), password, { usePost: true })
        message.success('登陆成功！')
        console.log(user)
      } catch (e) {
        message.error('用户名或密码错误！')
      }
    }
  },
  modules: {}
})
