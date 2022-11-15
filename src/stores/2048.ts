import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'

export const use2048Store = defineStore('2048', {
  persist: true,
  state: () => ({
    gameState: null as never
  }),
  actions: {
    setBestScore (bestScore: number) {
      useUserStore().modules['2048'].bestScore = bestScore
    },

    setGameState (gameState?: never) {
      this.gameState = gameState || {} as never
    },
    clearGameState () {
      this.setGameState()
    }
  }
})
