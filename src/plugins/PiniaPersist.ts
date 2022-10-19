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

function createPiniaPersist<S extends StateTree = StateTree> (pluginOptions: PluginOptions<S> = ({} as PluginOptions)): PiniaPlugin {
  const name = (pluginOptions.name != null ? pluginOptions.name : 'pinia')
  const storeName = (pluginOptions.storeName != null ? pluginOptions.storeName : 'keyvaluepairs')
  const version = (pluginOptions.version != null ? pluginOptions.version : 1)
  const debug = pluginOptions.debug

  localforage.config({
    name,
    storeName: version !== 1 ? `${storeName}_${version}` : storeName
  });

  (async function () {
    const storeVersion = await localforage.getItem('version')
    if (storeVersion == null) {
      await localforage.setItem('version', version)
    }
  })()

  const _mutex = new SimplePromiseQueue()

  // 获取state的值
  const getState = (key:string) => {
    return localforage.getItem(key)
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

    getState(store.$id).then((data: unknown) => {
      store.$patch(merge({}, store.$state, data))
      const updateState = debounce(function () {
        _mutex.enqueue(setState(store.$id, store.$state as never).catch(e => {
          debug && console.log(e)
        }))
      }, 100)
      store.$subscribe(
        (
          _mutation: SubscriptionCallbackMutation<StateTree>
        ) => {
          updateState()
        },
        {
          detached: true,
          deep: true
        }
      )
    })
  }
}

export { createPiniaPersist }

export default createPiniaPersist()
