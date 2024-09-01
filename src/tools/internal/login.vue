<script setup lang="ts">
import type { LocationQuery } from 'vue-router'

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
    otherQuery.value = getOtherQuery(query)
  }
}, { immediate: true })

onMounted(() => {
  if (userStore.logged) {
    router.push({ path: redirect.value || '/', query: otherQuery.value })
  }
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
      ElMessage.success('登录成功！')
      router.push({ path: redirect.value || '/', query: otherQuery.value })
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

function getOtherQuery(query: LocationQuery) {
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
</style>
