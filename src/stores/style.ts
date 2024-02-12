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
        useSettingStore().general.theme.mode = value
      }
      switch (useSettingStore().general.theme.mode) {
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
      switch (useSettingStore().general.theme.mode) {
        case 'dark':
          useSettingStore().general.theme.mode = 'light'
          break
        case 'light':
          useSettingStore().general.theme.mode = 'dark'
          break
        default:
          if (dark) {
            useSettingStore().general.theme.mode = 'light'
          } else {
            useSettingStore().general.theme.mode = 'dark'
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
