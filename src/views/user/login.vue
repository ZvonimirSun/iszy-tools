<template>
  <div class="login-container">
    <div class="main">
      <el-form
        layout="horizontal"
        :model="form"
        v-bind="{wrapperCol: { span: 24 }}"
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
          <div class="btn-wrapper">
            <el-button
              type="primary"
              block
              size="large"
              :loading="loading"
              @click="login"
            >
              登录
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { LocationQuery } from 'vue-router'
import { useUserStore } from '@/stores/user'

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

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

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
    ElMessage.warning('已离线！')
    return
  }
  if (form.value.userName != null && form.value.password != null) {
    loading.value = true
    try {
      await userStore.login({
        userName: form.value.userName,
        password: form.value.password
      })
      ElMessage.success('登录成功！')
      router.push({ path: redirect.value || '/', query: otherQuery.value })
    } catch (e) {
      if (e instanceof Error) { ElMessage.error(e.message) }
    }
    loading.value = false
  }
}

function getOtherQuery (query: LocationQuery) {
  const { redirect, ...result } = query
  return result
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
}

.btn-wrapper {
  width: 100%;
  display: flex;
  gap: 8px;
}
</style>
