import type { PiniaPlugin, PiniaPluginContext, StateTree, SubscriptionCallbackMutation } from 'pinia'
import { cloneDeep, debounce, merge } from 'lodash-es'
import localforage from 'localforage'
import SimplePromiseQueue from '@/utils/SimplePromiseQueue.js'

interface PersistOptions<S> {
  key?: string,
  serializer?: {
    serialize: (value: S) => any,
    deserialize: (value: any) => S
  },
  debug?: boolean
}

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S extends StateTree, Store> {
    persist?: boolean | PersistOptions<S>
  }
}

export interface PluginOptions<S extends StateTree = StateTree> {
  name?: string,
  storeName?: string,
  version?: number
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

  // 设置库
  const localStore = localforage.createInstance({
    name,
    storeName: version > 1 ? `${storeName}_${version}` : storeName
  })
  const keys = await localStore.keys()
  if (!keys.length) {
    // 升级旧版本库
    if (version > 1) {
      const lastVersionStore = localforage.createInstance({
        name,
        storeName: version - 1 > 1 ? `${storeName}_${version - 1}` : storeName
      })
      const lastKeys = await lastVersionStore.keys()
      if (lastKeys.length) {
        if (version === 2) {
          await migrateToV2(lastVersionStore, localStore)
        } else if (version === 3) {
          await migrateToV3(lastVersionStore, localStore)
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
  const promiseList: Array<Promise<void>> = []
  for (const key of keys) {
    promiseList.push((async () => {
      const data = await localStore.getItem(key)
      if (data != null) {
        sessionStorage.setItem(key, JSON.stringify(data))
      }
    })())
  }

  await Promise.all(promiseList)

  // 获取state的值
  const getState = (key: string, clear: boolean) => {
    const data = sessionStorage.getItem(key)
    if (data != null) {
      if (clear) {
        sessionStorage.removeItem(key)
      }
      return JSON.parse(data)
    } else {
      return null
    }
  }

  // 设置state的值
  const setState = (key: string, state: any) => {
    return localStore.setItem(key, cloneDeep(state))
  }

  return (context: PiniaPluginContext) => {
    const {
      store, options: {
        persist
      }
    } = context
    if (!persist) return

    let persistOptions: PersistOptions<S> = {}

    if (typeof persist === 'object') {
      persistOptions = persist
    }

    const {
      key = store.$id,
      debug = false,
      serializer
    } = persistOptions

    // 恢复持久化数据
    const data = getState(key, true)
    store.$patch(merge({}, store.$state, serializer ? serializer.deserialize(data) : data))

    // let flag = true
    // 更新数据
    const updateState = debounce(function () {
      _mutex.enqueue(setState(key, serializer ? serializer.serialize(store.$state) : store.$state).catch(e => {
        debug && console.log(e)
      }))
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

async function migrateToV3 (lastStore: typeof localforage, store: typeof localforage) {
  await store.clear()
  const keys = await lastStore.keys()
  for (const key of keys) {
    switch (key) {
      case 'user': {
        const data: any = await lastStore.getItem('user')
        await store.setItem('tools', {
          favorite: data.favorite,
          statistics: data.statistics
        })
        await store.setItem('setting', {
          general: data.settings,
          modules: data.modules
        })
        await store.setItem('user', {
          logged: Boolean(data._user.token),
          profile: data._user.profile
        })
        break
      }
      default:
        await store.setItem(key, await lastStore.getItem(key))
    }
  }
  await store.setItem('version', 3)
}

export { createPiniaPersist }
