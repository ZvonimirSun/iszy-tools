import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('urlEncode', {
  persist: true,
  state: () => ({
    history: [] as Array<Array<string>>,
  }),
  actions: {
    addHistory({ origin, target }: { origin: string, target: string }) {
      if (origin && target) {
        this.history.push([origin, target])
      }
    },
    clearHistory() {
      this.history = []
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
