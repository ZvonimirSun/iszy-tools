<template>
  <a-typography-title :level="3">
    账户信息
  </a-typography-title>
  <div
    v-if="userStore._user.token"
    flex
    flex-col
    text-7
    gap-4
    items-start
  >
    <div flex>
      <div
        w-25
        font-bold
      >
        昵称:
      </div>
      <div>
        {{ userStore._user.profile.nickName }}
      </div>
    </div>
    <div flex>
      <div
        w-25
        font-bold
      >
        邮箱:
      </div>
      <div>
        {{ userStore._user.profile.email }}
      </div>
    </div>
    <el-button
      type="primary"
      @click="logout"
    >
      登出
    </el-button>
  </div>
  <el-button
    v-else
    type="primary"
    @click="login"
  >
    登录
  </el-button>
  <el-divider />
  <a-typography-title :level="3">
    网站设置
  </a-typography-title>
  <el-popconfirm
    title="您是否确定要清空本地缓存？"
    confirm-button-text="清空"
    @confirm="clearOfflineCache"
  >
    <template #reference>
      <el-button
        type="danger"
        plain
      >
        清空本地缓存
      </el-button>
    </template>
  </el-popconfirm>
  <template v-if="userStore._user.token">
    <a-typography-title :level="4">
      设置云端同步
    </a-typography-title>
    <el-space>
      <el-button
        type="primary"
        @click="uploadToCloud"
      >
        同步到云端
      </el-button>
      <el-button
        type="primary"
        @click="downloadFromCloud"
      >
        从云端同步
      </el-button>
      <el-checkbox
        v-model="settings.autoSync"
      >
        自动同步
      </el-checkbox>
    </el-space>
  </template>
  <a-typography-title :level="4">
    全局设置
  </a-typography-title>
  <a-typography-title :level="5">
    访问统计
  </a-typography-title>
  <el-space>
    <el-checkbox
      v-model="settings.showMost"
    >
      最常访问
    </el-checkbox>
    <el-checkbox
      v-model="settings.showRecent"
    >
      最近访问
    </el-checkbox>
  </el-space>
  <a-typography-title :level="5">
    其他设置
  </a-typography-title>
  <el-space>
    <el-checkbox
      v-model="settings.showSearch"
    >
      显示搜索
    </el-checkbox>
    <el-checkbox
      v-model="settings.showType"
    >
      显示分类
    </el-checkbox>
    <el-checkbox
      v-model="settings.openInNewTab"
    >
      新标签页打开工具
    </el-checkbox>
  </el-space>
  <template v-if="userStore._user.token">
    <a-typography-title :level="4">
      应用设置
    </a-typography-title>
    <a-typography-title :level="5">
      JSON 编辑器
    </a-typography-title>
    <el-space>
      <el-checkbox
        v-model="userStore.modules.jsonEditor.syncCloud"
      >
        从云端获取
      </el-checkbox>
    </el-space>
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
function logout () {
  router.push('/logout')
}
</script>

<script setup lang="ts">
</script>
<style scoped lang="scss">
h3.ant-typography,
.ant-typography h3,
h4.ant-typography,
.ant-typography h4,
h5.ant-typography,
.ant-typography h5 {
  margin-top: .8rem;
}
</style>
