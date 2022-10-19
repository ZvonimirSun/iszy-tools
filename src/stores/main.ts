import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    _cache: {} as Record<string, never>
  }),
  getters: {
    getData: (state) => (key: string): never => {
      if (key) {
        return (state._cache || {})[key]
      } else {
        return undefined as never
      }
    }
  },
  actions: {
    importConfig () {
    },
    setData ({ key, val } = {} as {key: string, val:never}) {
      if (key) {
        this._cache = this._cache || {} as Record<string, never>
        this._cache[key] = val
      }
    },
    clear () {
      this._cache = {} as Record<string, never>
    },

    clearOfflineCache () {
      console.log('clearOfflineCache')
    }
  }
})
