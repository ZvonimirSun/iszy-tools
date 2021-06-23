import { merge, cloneDeep } from 'lodash'
import localforage from 'localforage'

export default (options = {}) => {
  const key = options.key || 'vuex'
  localforage.config(options)

  // 获取state的值
  const getState = async (key) => {
    return await localforage.getItem(key)
  }

  // 设置state的值
  const setState = (key, state) =>
    localforage.setItem(key, cloneDeep(state))

  return async store => {
    // 初始化时获取数据，如果有的话，把原来的vuex的state替换掉
    const data = merge({}, store.state, await getState(key))
    if (data) {
      store.replaceState(data)
    }

    // 订阅 store 的 mutation。handler 会在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态作为参数
    store.subscribe((mutation, state) => {
      setState(key, state)
    })
  }
}
