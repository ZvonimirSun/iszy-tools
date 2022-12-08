<template>
  <a-typography-title :level="3">
    用户
  </a-typography-title>
  <a-space>
    <template
      v-if="!userStore._user.token"
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
  <template v-if="userStore._user.token">
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
        v-model:checked="settings.autoSync"
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
      v-model:checked="settings.showMost"
    >
      最常访问
    </a-checkbox>
    <a-checkbox
      v-model:checked="settings.showRecent"
    >
      最近访问
    </a-checkbox>
  </a-space>
  <a-typography-title :level="4">
    其他设置
  </a-typography-title>
  <a-space>
    <a-checkbox
      v-model:checked="settings.showSearch"
    >
      显示搜索
    </a-checkbox>
    <a-checkbox
      v-model:checked="settings.showType"
    >
      显示分类
    </a-checkbox>
    <a-checkbox
      v-model:checked="settings.openInNewTab"
    >
      新标签页打开工具
    </a-checkbox>
  </a-space>
  <template v-if="userStore._user.token">
    <a-divider />
    <a-typography-title :level="3">
      应用设置
    </a-typography-title>
    <a-space>
      <a-checkbox
        v-model:checked="userStore.modules.jsonEditor.syncCloud"
      >
        从云端获取
      </a-checkbox>
    </a-space>
  </template>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useMainStore } from '@/stores/main'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const settings = computed(() => {
  return userStore.settings
})

const clearOfflineCache = () => useMainStore().clearOfflineCache()
const uploadSettings = () => userStore.uploadSettings()
const downloadSettings = () => userStore.downloadSettings()

async function uploadToCloud () {
  if (await uploadSettings()) {
    ElMessage.success('同步成功')
  } else {
    ElMessage.error('同步失败')
  }
}
async function downloadFromCloud () {
  if (await downloadSettings()) {
    ElMessage.success('同步成功')
  } else {
    ElMessage.error('同步失败')
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
