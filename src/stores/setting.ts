export const useSettingStore = defineStore('setting', {
  persist: true,
  sync: true,
  state: () => ({
    general: {
      showMost: false,
      showRecent: false,

      showSearch: true,
      showType: true,
      openInNewTab: false,

      theme: {
        mode: 'auto' as 'dark' | 'light' | 'auto',
      },
    },
    modules: {
      2048: {
        bestScore: 0,
      },
      tetris: {
        bestScore: 0,
      },
      imgHosting: {
        uploader: null as 'aliyun' | null,
        configs: {} as Record<string, Record<string, string>>,
        commonConfig: {
          renameBeforeUpload: false,
          renameTimeStamp: true,
          copyUrlAfterUpload: true,
          customCopyContent: '$url',
        },
      },
      jsonEditor: {
        syncCloud: false,
      },
    },
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot))
}
