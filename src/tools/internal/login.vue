<script setup lang="ts">
import type { LocationQuery } from 'vue-router'
import LinuxDoImg from '@/assets/images/linuxdo.png'
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

const thirdParties: {
  type: 'github' | 'linuxdo'
  title: string
  icon?: string
  img?: string
}[] = [
  {
    type: 'github',
    title: 'Github',
    icon: 'i-icon-park-outline:github',
  },
  {
    type: 'linuxdo',
    title: 'LINUX DO',
    img: LinuxDoImg,
  },
]

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
  window.removeEventListener('message', _thirdPartyLoginCallback)
})

async function login() {
  if (loading.value) {
    return
  }
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

function thirdPartyLogin(type: 'github' | 'linuxdo') {
  const url = `${config.apiBaseUrl}/auth/${type}`
  _openThirdPartyLogin(url, 'GitHub登录')
}

function _afterLogin() {
  ElMessage.success('登录成功！')
  router.push({ path: redirect.value || '/', query: otherQuery.value })
}

function _getOtherQuery(query: LocationQuery) {
  const { redirect, ...result } = query
  return result
}

async function _thirdPartyLoginCallback(e: MessageEvent<{
  type: string
  data: {
    access_token: string
    refresh_token: string
    profile: any
  }
}>) {
  const page = e.source as Window
  if (import.meta.env.PROD && e.origin !== config.apiBaseUrl) {
    return
  }
  if (e.data?.type === 'oauth_complete') {
    window.removeEventListener('message', _thirdPartyLoginCallback)
    page.close()
    loading.value = false
    await userStore.thirdPartyLogin(e.data.data)
    _afterLogin()
  }
}

function _openThirdPartyLogin(url: string, title = '第三方登录', width = 500, height = 600) {
  if (loading.value) {
    ElMessage.warning('登录进行中，请勿重复点击')
    return
  }
  loading.value = true
  window.addEventListener('message', _thirdPartyLoginCallback)
  const top = (window.screen.height - width) / 2
  const left = (window.screen.width - height) / 2
  const page = window.open(url, title, `popup,width=${width},height=${height},top=${top},left=${left}`)
  if (!page) {
    loading.value = false
    ElMessage.error('请允许浏览器弹出窗口！')
    return
  }
  const index = window.setInterval(() => {
    if (page.closed) {
      window.clearInterval(index)
      loading.value = false
    }
  }, 500)
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
        <div
          v-for="item in thirdParties"
          :key="item.type"
          class="third-party"
          :title="item.title"
          @click="thirdPartyLogin(item.type)"
        >
          <i
            v-if="item.icon"
            :class="item.icon"
          />
          <img
            v-else
            class="third-party-img"
            :src="item.img"
            alt=""
          >
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
  font-size: 4rem;

  .third-party-img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
