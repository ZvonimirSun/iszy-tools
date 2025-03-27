<script setup lang="ts">
import PersonalInfo from './personalInfo.vue'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

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
  <template
    v-if="userStore.logged"
  >
    <div
      flex items-center gap-4
    >
      <el-button
        type="primary"
        @click="logout"
      >
        登出
      </el-button>
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
    <el-divider />
    <PersonalInfo />
  </template>
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
</template>

<style scoped lang="scss">
.el-divider {
  margin: .8rem 0;
}

.el-button + .el-button {
  margin: 0;
}
</style>
