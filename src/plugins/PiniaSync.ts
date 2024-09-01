import type { PiniaPlugin, PiniaPluginContext, StateTree, StoreGeneric, SubscriptionCallbackMutation } from 'pinia'
import { debounce } from 'lodash-es'
import SimplePromiseQueue from '@/utils/SimplePromiseQueue'
import $axios from '@/plugins/Axios'

interface SyncOptions<S> {
  key?: string
  serializer?: {
    serialize: (value: S) => any
    deserialize: (value: any) => S
  }
  debug?: boolean
}

declare module 'pinia' {

  export interface DefineStoreOptionsBase<S extends StateTree, Store> {
    sync?: boolean | SyncOptions<S>
  }
}

// 队列
const _mutex = new SimplePromiseQueue()
const storeMap = new Map<string, StoreGeneric>()

function createPiniaSync<S extends StateTree = StateTree>(): PiniaPlugin {
  return (context: PiniaPluginContext) => {
    const {
      store,
      options: {
        sync,
      },
    } = context
    if (!sync)
      return

    let syncOptions: SyncOptions<S> = {}
    if (typeof sync === 'object') {
      syncOptions = sync
    }
    storeMap.set(syncOptions.key || store.$id, store)

    let syncing = false
    const userStore = useUserStore()

    if (userStore.logged) {
      syncing = true
      userStore.checkToken().then(() => {
        downloadSettings(store, syncOptions).then(() => {
          syncing = false
        })
      })
    }

    const uploadFunc = debounce(() => {
      if (syncing) {
        return
      }
      if (userStore.logged) {
        syncing = true
        userStore.checkToken().then(() => {
          _mutex.enqueue(uploadSettings(store, syncOptions).then(() => {
            syncing = false
          }))
        })
      }
    }, 100)

    store.$subscribe(
      (
        _mutation: SubscriptionCallbackMutation<StateTree>,
      ) => {
        if (!syncing) {
          uploadFunc()
        }
      },
      {
        detached: true,
        deep: true,
      },
    )
  }
}

async function uploadSettings(store: StoreGeneric, syncOptions: SyncOptions<StateTree>) {
  if (!navigator.onLine) {
    return false
  }
  else {
    const {
      key = store.$id,
      debug = false,
      // serializer
    } = syncOptions
    try {
      const data = (await $axios.post(`${$axios.$apiBase}/tools/settings/${key}`, toRaw(store.$state))).data
      return data.success as boolean
    }
    catch (e) {
      // eslint-disable-next-line ts/no-unused-expressions
      debug && console.error(e)
      return false
    }
  }
}

async function downloadSettings(store: StoreGeneric, syncOptions: SyncOptions<StateTree>) {
  if (!navigator.onLine) {
    return false
  }
  else {
    const {
      key = store.$id,
      debug = false,
      // serializer
    } = syncOptions
    try {
      const data = (await $axios.get(`${$axios.$apiBase}/tools/settings/${key}`)).data
      let status = data.success as boolean
      if (data.data) {
        store.$patch(data.data)
      }
      else {
        status = await uploadSettings(store, syncOptions)
      }
      return status
    }
    catch (e) {
      // eslint-disable-next-line ts/no-unused-expressions
      debug && console.error(e)
      return false
    }
  }
}

async function downloadAllSettings(debug?: boolean) {
  if (!navigator.onLine) {
    return false
  }
  else {
    const promiseList = []
    for (const [key, store] of storeMap) {
      promiseList.push(downloadSettings(store, { key, debug }))
    }
    try {
      await Promise.all(promiseList)
      return true
    }
    catch (e) {
      // eslint-disable-next-line ts/no-unused-expressions
      debug && console.error(e)
      return false
    }
  }
}

export { createPiniaSync, downloadAllSettings as downloadSettings }
