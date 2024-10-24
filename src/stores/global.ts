const isDark = useDark()

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isDark,
  }),
  actions: {
    setTheme(val?: string | boolean | number) {
      if (val != null && typeof val !== 'string') {
        return
      }
      const value = val as 'dark' | 'light' | 'auto'
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
    toggleTheme() {
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
          }
          else {
            useSettingStore().general.theme.mode = 'dark'
          }
          break
      }
      this.setTheme()
    },
  },
})

watch(isDark, () => {
  useGlobalStore().setTheme()
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
