<script setup lang="ts">
import type { LocationQuery } from 'vue-router'
import config from '@/config'

const form = reactive({
  userName: '',
  password: '',
})
const redirect = ref<string>()
const otherQuery = ref({})
const loading = ref(false)

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

watch(route, (val) => {
  const query = val.query
  if (query) {
    if (typeof query.redirect === 'string') {
      redirect.value = query.redirect
    }
    otherQuery.value = _getOtherQuery(query)
  }
}, { immediate: true })

onMounted(() => {
  if (userStore.logged) {
    router.push({ path: redirect.value || '/', query: otherQuery.value })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('message', thirdPartyLoginCallback)
})

async function login() {
  if (!navigator.onLine) {
    ElMessage.warning('已离线！')
    return
  }
  if (form.userName != null && form.password != null) {
    loading.value = true
    try {
      await userStore.login({
        userName: form.userName,
        password: form.password,
      })
      _afterLogin()
    }
    catch (e) {
      if (e instanceof Error) {
        ElMessage.error(e.message)
      }
    }
    loading.value = false
  }
}

function register() {
  router.push('/register')
}

function githubLogin() {
  window.addEventListener('message', thirdPartyLoginCallback)
  window.open(`${config.apiBaseUrl}/auth/github`, '_blank')
}

async function thirdPartyLoginCallback(e: MessageEvent<{
  type: string
}>) {
  const page = e.source as Window
  if (e.data?.type === 'oauth_complete') {
    window.removeEventListener('message', thirdPartyLoginCallback)
    page.close()
    await userStore.checkThirdPartyLogin()
    _afterLogin()
  }
}

function _afterLogin() {
  ElMessage.success('登录成功！')
  router.push({ path: redirect.value || '/', query: otherQuery.value })
}

function _getOtherQuery(query: LocationQuery) {
  const { redirect, ...result } = query
  return result
}
</script>

<template>
  <div class="login-container">
    <div class="main">
      <el-form
        layout="horizontal"
        :model="form"
        v-bind="{ wrapperCol: { span: 24 } }"
      >
        <el-form-item required>
          <el-input
            v-model="form.userName"
            placeholder="账户"
            size="large"
            @keypress.enter="login"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-user"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item required>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
            size="large"
            show-password
            @keypress.enter="login"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-lock"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            block
            size="large"
            :loading="loading"
            @click="login"
          >
            登录
          </el-button>
          <el-button
            block
            size="large"
            :disabled="loading"
            @click="register"
          >
            注册
          </el-button>
        </el-form-item>
      </el-form>
      <el-divider />
      <el-space>
        <div class="third-party" title="GitHub登录" @click="githubLogin">
          <i class="i-icon-park-outline:github" />
        </div>
      </el-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  position: relative;
  padding: 5rem 0 .8rem;

  .main {
    min-width: 26rem;
    width: 36.8rem;
    margin: 0 auto;
  }
}

.third-party {
  cursor: pointer;
  font-size: 40px;

  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
