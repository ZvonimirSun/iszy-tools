<template>
  <a-typography-title :level="3">
    用户
  </a-typography-title>
  <a-space>
    <template
      v-if="!_user.token"
    >
      <a-button
        type="primary"
        @click="login"
      >
        登录
      </a-button>
      <a-button
        type="primary"
        @click="register"
      >
        注册
      </a-button>
    </template>
    <a-button
      v-else
      type="primary"
      @click="logout"
    >
      登出
    </a-button>
    <a-popconfirm
      title="您是否确定要清空本地缓存？"
      ok-text="清空"
      @confirm="clearOfflineCache"
    >
      <a-button danger>
        清空本地缓存
      </a-button>
    </a-popconfirm>
  </a-space>
  <a-divider />
  <template v-if="_user.token">
    <a-typography-title :level="3">
      云端同步
    </a-typography-title>
    <a-space>
      <a-button
        type="primary"
        @click="uploadToCloud"
      >
        同步到云端
      </a-button>
      <a-button
        type="primary"
        @click="downloadFromCloud"
      >
        从云端同步
      </a-button>
      <a-checkbox
        :checked="settings.autoSync"
        @change="triggerSetting('autoSync')"
      >
        自动同步
      </a-checkbox>
    </a-space>
    <a-divider />
  </template>
  <a-typography-title :level="3">
    全局设置
  </a-typography-title>
  <a-typography-title :level="4">
    访问统计
  </a-typography-title>
  <a-space>
    <a-checkbox
      :checked="settings.showMost"
      @change="triggerSetting('showMost')"
    >
      最常访问
    </a-checkbox>
    <a-checkbox
      :checked="settings.showRecent"
      @change="triggerSetting('showRecent')"
    >
      最近访问
    </a-checkbox>
  </a-space>
  <a-typography-title :level="4">
    其他设置
  </a-typography-title>
  <a-space>
    <a-checkbox
      :checked="settings.showSearch"
      @change="triggerSetting('showSearch')"
    >
      显示搜索
    </a-checkbox>
    <a-checkbox
      :checked="settings.showType"
      @change="triggerSetting('showType')"
    >
      显示分类
    </a-checkbox>
    <a-checkbox
      :checked="settings.openInNewTab"
      @change="triggerSetting('openInNewTab')"
    >
      新标签页打开工具
    </a-checkbox>
  </a-space>
  <template v-if="_user.token">
    <a-divider />
    <a-typography-title :level="3">
      应用设置
    </a-typography-title>
    <a-space>
      <a-checkbox
        :checked="settings.jsonEditor.syncCloud"
        @change="triggerJsonEditorSetting('syncCloud')"
      >
        从云端获取
      </a-checkbox>
    </a-space>
  </template>
</template>

<script setup lang="ts">
import { MessageApi } from 'ant-design-vue/es/message'

const store = useStore()
const router = useRouter()
const route = useRoute()

const $msg = inject<MessageApi>('$msg')

const _user = computed(() => {
  return store.state.user._user
})

const settings = computed(() => {
  return store.state.user.settings
})

const clearOfflineCache = () => store.commit('clearOfflineCache')
const uploadSettings = () => store.dispatch('uploadSettings')
const downloadSettings = () => store.dispatch('downloadSettings')
const triggerSetting = (setting) => store.commit('user/triggerSetting', setting)
const triggerJsonEditorSetting = (setting) => store.commit('user/jsonEditor/triggerJsonEditorSetting', setting)

async function uploadToCloud () {
  if (await uploadSettings()) {
    $msg.success('同步成功')
  } else {
    $msg.error('同步失败')
  }
}
async function downloadFromCloud () {
  if (await downloadSettings()) {
    $msg.success('同步成功')
  } else {
    $msg.error('同步失败')
  }
}
function login () {
  router.push({
    path: '/login',
    query: {
      redirect: route.fullPath
    }
  })
}
function register () {
  router.push('/register')
}
function logout () {
  router.push('/logout')
}
</script>

<style scoped lang="scss">

</style>
