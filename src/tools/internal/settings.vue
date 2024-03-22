<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const styleStore = useGlobalStore()
const userStore = useUserStore()
const settingStore = useSettingStore()

const settings = computed(() => {
  return settingStore.general
})

const clearOfflineCache = () => useMainStore().clearOfflineCache()

function login() {
  router.push({
    path: '/login',
    query: {
      redirect: route.fullPath,
    },
  })
}

function register() {
  router.push('/register')
}

function logout() {
  router.push('/logout')
}
</script>

<template>
  <a-typography-title v-if="userStore.logged" :level="3">
    {{ userStore.profile.nickName }} 欢迎你~
  </a-typography-title>
  <div
    v-if="userStore.logged"
    flex items-center gap-4
  >
    <el-button
      type="primary"
      @click="logout"
    >
      登出
    </el-button>
    <router-link to="/personalCenter">
      <el-button>
        个人中心
      </el-button>
    </router-link>
    <HaveAccess
      v-slot="{ goto }"
      link="/userManager"
    >
      <el-button @click="goto">
        用户权限中心
      </el-button>
    </HaveAccess>
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
  </div>
  <el-space v-else mt-4>
    <el-button
      type="primary"
      @click="login"
    >
      登录
    </el-button>
    <el-button
      @click="register"
    >
      注册
    </el-button>
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
  </el-space>
  <el-divider />
  <div
    flex flex-wrap items-start gap-4 text-7
    class="settings-container"
  >
    <div class="settings-wrapper">
      <a-typography-title :level="4">
        全局设置
      </a-typography-title>
      <a-typography-title :level="5">
        外观
      </a-typography-title>
      <el-space>
        <el-radio-group
          :model-value="settings.theme.mode"
          @change="styleStore.setTheme"
        >
          <el-radio value="auto" label="跟随系统" />
          <el-radio value="light" label="浅色" />
          <el-radio value="dark" label="深色" />
        </el-radio-group>
      </el-space>
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
    </div>
    <div
      v-if="userStore.logged"
      class="settings-wrapper"
    >
      <a-typography-title :level="4">
        应用设置
      </a-typography-title>
      <a-typography-title :level="5">
        JSON 编辑器
      </a-typography-title>
      <el-space>
        <el-checkbox
          v-model="settingStore.modules.jsonEditor.syncCloud"
        >
          从云端获取
        </el-checkbox>
      </el-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3.ant-typography,
.ant-typography h3,
h4.ant-typography,
.ant-typography h4,
h5.ant-typography,
.ant-typography h5 {
  margin-top: .8rem;
}

.settings-container {
  overflow: auto;
}

.settings-wrapper {
  width: 25%;
  min-width: 35rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
}

.el-divider {
  margin: .8rem 0;
}

.el-button + .el-button {
  margin: 0;
}
</style>
