import { cloneDeep } from 'lodash-es'
import { v4 as uuidv4 } from 'uuid'

export default {
  namespaced: true,
  state: () => ({
    uploader: '',
    imgList: [],
    configs: {
    },
    commonConfig: {
      renameTimeStamp: true
    }
  }),
  getters: {
    config: (state) => (uploader) => {
      return state.configs[uploader]
    }
  },
  mutations: {
    saveConfig (state, { uploader, config }) {
      if (uploader) {
        state.uploader = uploader
        state.configs[uploader] = config
      }
    },
    saveCommonConfig (state, val) {
      state.commonConfig = cloneDeep(val)
    },
    addImage (state, { name, url }) {
      if (name && url) {
        state.imgList.unshift({
          name, url, id: uuidv4()
        })
      }
    },
    removeImage (state, { id }) {
      for (const i in state.imgList || []) {
        if (state.imgList[i].id === id) {
          state.imgList.splice(parseInt(i), 1)
        }
      }
    },
    importConfig (state, val) {
      state = val
    }
  },
  actions: {
    saveConfig ({ commit }, val) {
      commit('saveConfig', val)
    },
    saveCommonConfig ({ commit }, val) {
      commit('saveCommonConfig', val)
    },
    addImage ({ commit }, val) {
      commit('addImage', val)
    },
    removeImage ({ commit }, val) {
      commit('removeImage', val)
    },
    async importConfig ({ commit }, {
      uploader = '',
      imgList = [],
      configs = {},
      commonConfig = { renameTimeStamp: true }
    }) {
      if (typeof uploader === 'string' && Array.isArray(imgList) && configs && commonConfig) {
        commit('importConfig', {
          uploader,
          imgList,
          configs,
          commonConfig
        })
      } else {
        throw new Error('配置有误')
      }
    }
  }
}
