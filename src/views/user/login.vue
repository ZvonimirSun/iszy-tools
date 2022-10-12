<template>
  <div class="login-container">
    <div class="main">
      <a-form
        layout="horizontal"
        :model="form"
        v-bind="{wrapperCol: { span: 24 }}"
      >
        <a-form-item required>
          <a-input
            v-model:value="form.userName"
            placeholder="账户"
            size="large"
            @keypress.enter="login"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-user"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item required>
          <a-input-password
            v-model:value="form.password"
            placeholder="密码"
            size="large"
            @keypress.enter="login"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-lock"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <div class="btn-wrapper">
            <a-button
              type="primary"
              block
              size="large"
              :loading="loading"
              @click="login"
            >
              登录
            </a-button>
            <a-button
              block
              size="large"
              @click="register"
            >
              注册
            </a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { MessageApi } from 'ant-design-vue/es/message'
import type { LocationQuery } from 'vue-router'

const form: Ref<{
  userName: string,
  password: string
}> = ref({
  userName: '',
  password: ''
})
const redirect: Ref<string> = ref() as Ref<string>
const otherQuery = ref({})
const loading: Ref<boolean> = ref(false)

const store = useStore()
const router = useRouter()
const route = useRoute()
const $msg: MessageApi = inject('$msg') as MessageApi

watch(route, function (val) {
  const query = val.query
  if (query) {
    if (typeof query.redirect === 'string') {
      redirect.value = query.redirect
    }
    otherQuery.value = getOtherQuery(query)
  }
}, { immediate: true })

async function login () {
  if (!navigator.onLine) {
    $msg.warn('已离线！')
    return
  }
  if (form.value.userName != null && form.value.password != null) {
    loading.value = true
    try {
      await store.dispatch('user/login', {
        userName: form.value.userName,
        password: form.value.password
      })
      $msg.success('登录成功！')
      router.push({ path: redirect.value || '/', query: otherQuery.value })
    } catch (e) {
      if (e instanceof Error) { $msg.error(e.message) }
    }
    loading.value = false
  }
}

function getOtherQuery (query: LocationQuery) {
  const { redirect, ...result } = query
  return result
}

function register () {
  router.push('/register')
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 5rem 0 14.4rem;

  .main {
    min-width: 26rem;
    width: 36.8rem;
    margin: 0 auto;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 1.6rem;
    margin: 4.8rem 0 2.4rem;
    text-align: center;
    color: #999999;
  }
}

.btn-wrapper {
  width: 100%;
  display: flex;
  gap: 8px;
}
</style>
