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
  const localStore = localforage.createInstance({
    name,
    storeName: version !== 1 ? `${storeName}_${version}` : storeName
  })

  const keys = await localStore.keys()
  if (!keys.length) {
    // 升级旧版本库
    if (version !== 1) {
      const lastVersionStore = localforage.createInstance({
        name,
        storeName: version - 1 !== 1 ? `${storeName}_${version - 1}` : storeName
      })
      const lastKeys = await lastVersionStore.keys()
      if (lastKeys.length) {
        if (version === 2) {
          await migrateToV2(lastVersionStore, localStore)
        }
      }
      await localforage.dropInstance({
        name,
        storeName: version - 1 !== 1 ? `${storeName}_${version - 1}` : storeName
      })
    }

    // 设置库版本号
    const storeVersion = await localStore.getItem('version')
    if (storeVersion == null) {
      await localStore.setItem('version', version)
    }
  }

  // 转储到 sessionStorage
  sessionStorage.clear()
  for (const key of keys) {
    const data = await localStore.getItem(key)
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
    return localStore.setItem(key, cloneDeep(state))
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
            localStore.clear().then(() => {
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

async function migrateToV2 (lastStore: typeof localforage, store: typeof localforage) {
  await store.clear()
  const keys = await lastStore.keys()
  for (const key of keys) {
    switch (key) {
      case 'g2048':
        await store.setItem('2048', await lastStore.getItem('g2048'))
        break
      case 'imgHosting':
        await store.setItem('imgHosting', await lastStore.getItem('imgHosting'))
        break
      case 'jsonEditor':
        await store.setItem('jsonEditor', await lastStore.getItem('jsonEditor'))
        break
      case 'linuxCommand':
        await store.setItem('linuxCommand', await lastStore.getItem('linuxCommand'))
        break
      case 'tinyEditor':
        await store.setItem('tinyEditor', await lastStore.getItem('tinyEditor'))
        break
      case 'user': {
        const tmp: any = await lastStore.getItem('user')
        delete tmp.profile
        delete tmp.token
        tmp.modules.jsonEditor = tmp.settings.jsonEditor
        delete tmp.settings.jsonEditor
        tmp.version = 2
        await store.setItem('user', tmp)
        break
      }
    }
  }
  await store.setItem('version', 2)
}

export { createPiniaPersist }
