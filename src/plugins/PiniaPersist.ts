import type { PiniaPlugin, PiniaPluginContext, StateTree, SubscriptionCallbackMutation } from 'pinia'
import { cloneDeep, debounce, merge } from 'lodash-es'
import localforage from 'localforage'
import SimplePromiseQueue from '@/utils/SimplePromiseQueue.js'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S extends StateTree, Store> {
    persist?: boolean
  }
}

export interface PluginOptions<S extends StateTree = StateTree> {
  name?: string,
  storeName?: string,
  version?: number,
  debug?: boolean
}

// 队列
const _mutex = new SimplePromiseQueue()

async function createPiniaPersist<S extends StateTree = StateTree> (pluginOptions: PluginOptions<S> = ({} as PluginOptions)): Promise<PiniaPlugin> {
  // 应用名称
  const name = (pluginOptions.name != null ? pluginOptions.name : 'pinia')
  // 库名
  const storeName = (pluginOptions.storeName != null ? pluginOptions.storeName : 'keyvaluepairs')
  // 库版本号
  const version = (pluginOptions.version != null ? pluginOptions.version : 1)
  // 日志输出
  const debug = pluginOptions.debug

  // 设置库
  localforage.config({
    name,
    storeName: version !== 1 ? `${storeName}_${version}` : storeName
  })

  // 设置库版本号
  const storeVersion = await localforage.getItem('version')
  if (storeVersion == null) {
    await localforage.setItem('version', version)
  }

  // 转储到 sessionStorage
  sessionStorage.clear()
  const keys = await localforage.keys()
  for (const key of keys) {
    const data = await localforage.getItem(key)
    if (data != null) {
      sessionStorage.setItem(key, JSON.stringify(data))
    }
  }

  // 获取state的值
  const getState = (key:string) => {
    const data = sessionStorage.getItem(key)
    if (data != null) {
      return JSON.parse(data)
    } else {
      return null
    }
  }

  // 设置state的值
  const setState = (key: string, state: never) => {
    return localforage.setItem(key, cloneDeep(state))
  }

  return (context: PiniaPluginContext) => {
    const {
      store, options: {
        persist
      }
    } = context
    if (!persist) return

    // 恢复持久化数据
    const data = getState(store.$id)
    store.$patch(merge({}, store.$state, data))

    let flag = true
    // 更新数据
    const updateState = debounce(function () {
      _mutex.enqueue(setState(store.$id, store.$state as never).catch(e => {
        debug && console.log(e)
      }))
      if (store.$id === 'user' && store.$state.settings?.autoSync && navigator.onLine) {
        if (!flag) {
          flag = true
        } else if (!store.$state.syncing) {
          _mutex.enqueue(store.uploadSettings?.())
        } else {
          store.$state.syncing = false
          flag = false
        }
      }
    }, 100)
    store.$subscribe(
      (
        _mutation: SubscriptionCallbackMutation<StateTree>
      ) => {
        if (_mutation.storeId === 'main') {
          if (!Array.isArray(_mutation.events) && _mutation.events.key === 'clearOfflineCacheTag') {
            localforage.clear().then(() => {
              window.location.reload()
            })
            return
          }
        }
        updateState()
      },
      {
        detached: true,
        deep: true
      }
    )
  }
}

export { createPiniaPersist }

export default createPiniaPersist()
