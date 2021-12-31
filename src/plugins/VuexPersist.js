import { merge, cloneDeep, omit } from 'lodash-es'
import localforage from 'localforage'
import SimplePromiseQueue from '@/utils/SimplePromiseQueue.js'

export default (options = {}) => {
  const name = ((options.name != null) ? options.name : 'vuex')
  const storeName = ((options.storeName != null) ? options.storeName : 'keyvaluepairs')
  localforage.config({
    name,
    storeName
  })

  const _mutex = new SimplePromiseQueue()

  const filter = options.filter || (() => true)

  // 获取state的值
  const getState = (key) => {
    return localforage.getItem(key)
  }

  // 设置state的值
  const setState = (key, state) =>
    localforage.setItem(key, cloneDeep(state))

  return store => {
    const _store = store
    store.restored = (async () => {
      const modules = Object.keys(_store._modulesNamespaceMap).map(item => {
        return item.slice(0, -1)
      })

      // 初始化时获取数据，如果有的话，把原来的vuex的state替换掉
      const data = merge({}, _store.state, await getState('root'))
      for (const module of modules) {
        data[module] = merge({}, data[module], await getState(module))
      }
      if (data) {
        _store.replaceState(data)
        if (_store.state.user._user.token) {
          _store.dispatch('downloadSettings')
          _store.dispatch('user/getProfiles')
        }
      }

      // 订阅 store 的 mutation。handler 会在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态作为参数
      _store.subscribe((mutation, state) => {
        if (mutation.type === 'clearOfflineCache') {
          localforage.clear().then(() => {
            window.location.reload()
          })
          return
        }
        if (filter(mutation)) {
          const tmp = mutation.type.split('/')
          if (tmp.length <= 1) {
            _mutex.enqueue(setState('root', omit(state, modules)))
            if (mutation.type === 'importConfig') {
              for (const module of modules) {
                _mutex.enqueue(setState(module, state[module]))
              }
            }
          } else {
            _mutex.enqueue(setState(tmp[0], state[tmp[0]]))
            if (tmp[0] === 'user') {
              if (state?.user?.settings?.autoSync) {
                _mutex.enqueue(_store.dispatch('uploadSettings'))
              }
            }
          }
        }
      })
    })()
  }
}
