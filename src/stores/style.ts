import { acceptHMRUpdate, defineStore } from 'pinia'

const isDark = useDark()
const toggleDark = useToggle(isDark)

export const useStyleStore = defineStore('style', {
  state: () => ({
    isDark,
    toggleDark
  }),
  actions: {
    setTheme (value?: 'dark' | 'light' | 'auto') {
      if (value) {
        useUserStore().settings.theme.mode = value
      }
      switch (useUserStore().settings.theme.mode) {
        case 'dark':
          this.isDark = true
          break
        case 'light':
          this.isDark = false
          break
        default:
          this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          break
      }
    },
    toggleTheme () {
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
      switch (useUserStore().settings.theme.mode) {
        case 'dark':
          useUserStore().settings.theme.mode = 'light'
          break
        case 'light':
          useUserStore().settings.theme.mode = 'dark'
          break
        default:
          if (dark) {
            useUserStore().settings.theme.mode = 'light'
          } else {
            useUserStore().settings.theme.mode = 'dark'
          }
          break
      }
      this.setTheme()
    }
  }
})

watch(isDark, function () {
  useStyleStore().setTheme()
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
