import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  persist: true,
  state: () => ({
    _cache: {} as Record<string, never>,
    clearOfflineCacheTag: false,
  }),
  getters: {
    getData: state => (key: string): any => {
      if (key) {
        return (state._cache || {})[key]
      }
      else {
        return undefined as never
      }
    },
  },
  actions: {
    setData({ key, val } = {} as { key: string, val: never }) {
      if (key) {
        this._cache = this._cache || {} as Record<string, never>
        this._cache[key] = val
      }
    },
    clear() {
      this._cache = {} as Record<string, never>
    },

    clearOfflineCache() {
      console.log('clearOfflineCache')
      this.clearOfflineCacheTag = true
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
