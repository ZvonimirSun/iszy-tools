import { cloneDeep } from 'lodash-es'
import { v4 as uuidv4 } from 'uuid'

export default {
  namespaced: true,
  state: () => ({
    imgList: []
  }),
  getters: {
    uploader: (state, getters, rootState) => {
      return rootState.user.modules.imgHosting.uploader
    },
    config: (state, getters, rootState) => (uploader) => {
      return rootState.user.modules.imgHosting.configs[uploader]
    },
    commonConfig: (state, getters, rootState) => {
      return rootState.user.modules.imgHosting.commonConfig
    }
  },
  mutations: {
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
    saveConfig ({ commit }, { uploader, config }) {
      commit('user/updateModuleState', {
        module: 'imgHosting',
        key: 'uploader',
        value: uploader
      }, { root: true })
      commit('user/updateModuleState', {
        module: 'imgHosting',
        key: 'configs/' + uploader,
        value: config
      }, { root: true })
    },
    saveCommonConfig ({ commit }, val) {
      commit('user/updateModuleState', {
        module: 'imgHosting',
        key: 'commonConfig',
        value: cloneDeep(val)
      }, { root: true })
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
