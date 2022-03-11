export default {
  state: () => ({
    2048: {
      bestScore: 0
    },
    tetris: {
      bestScore: 0
    },
    imgHosting: {
      uploader: '',
      configs: {
      },
      commonConfig: {
        renameBeforeUpload: false,
        renameTimeStamp: true,
        copyUrlAfterUpload: true,
        customCopyContent: '$url'
      }
    }
  }),
  mutations: {
    updateModuleState (state, { module, key, value }) {
      const k = key.split('/')
      try {
        let s = state[module]
        for (let i = 0; i < k.length - 1; i++) {
          s = s[k[i]]
        }
        s[k[k.length - 1]] = value
      } catch (e) {
        console.error(e)
      }
    }
  }
}
