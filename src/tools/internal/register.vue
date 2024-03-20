<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface RegisterForm {
  userName: string
  nickName: string
  password: string
  rePassword: string
  mobile: string
  email: string
}
const registerFormRef = ref<FormInstance>()
const form = reactive<RegisterForm>({
  userName: '',
  nickName: '',
  password: '',
  rePassword: '',
  mobile: '',
  email: '',
})
const rules = reactive<FormRules<RegisterForm>>({
  userName: [{
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  }],
  nickName: [{
    required: true,
    message: '请输入昵称',
    trigger: 'blur',
  }],
  password: [{
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      else {
        if (form.rePassword !== '') {
          if (!registerFormRef.value)
            return
          registerFormRef.value.validateField('rePassword', () => null)
        }
        callback()
      }
    },
  }],
  rePassword: [{
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      }
      else if (value !== form.password) {
        callback('两次输入密码不一致!')
      }
      else {
        callback()
      }
    },
  }],
  mobile: [{
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback()
      }
      else {
        if (!/^1[3-9]\d{9}$/.test(value)) {
          callback('请输入正确的手机号码')
        }
        else {
          callback()
        }
      }
    },
  }],
  email: [{
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback()
      }
      else {
        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
          callback('请输入正确的邮箱')
        }
        else {
          callback()
        }
      }
    },
  }],
})

const loading = ref(false)

const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  if (userStore.logged) {
    router.back()
  }
})

function register() {
  if (!registerFormRef.value)
    return
  registerFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      userStore.register(form).then(() => {
        ElMessage.success('注册成功，请等待管理员审批')
        router.push('/')
      }).catch((e) => {
        ElMessage.error((e as Error).message)
      }).finally(() => {
        loading.value = false
      })
    }
    else {
      return false
    }
  })
}

function resetFields() {
  registerFormRef.value?.resetFields()
}
</script>

<template>
  <div class="login-container">
    <div class="main">
      <el-form
        ref="registerFormRef"
        layout="horizontal"
        :model="form"
        :rules="rules"
        status-icon
        label-width="auto"
      >
        <el-form-item required label="用户名" prop="userName">
          <el-input
            v-model="form.userName"
            size="large"
            @keydown.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-user"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item required label="昵称" prop="nickName">
          <el-input
            v-model="form.nickName"
            size="large"
            @keydown.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-user"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item required label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            size="large"
            show-password
            autocomplete="off"
            @keydown.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-lock"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item required label="重复密码" prop="rePassword">
          <el-input
            v-model="form.rePassword"
            type="password"
            size="large"
            show-password
            autocomplete="off"
            @keydown.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-lock"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input
            v-model="form.mobile"
            size="large"
            @keydown.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-phone"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="form.email"
            size="large"
            @keydown.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-mail"
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
            @click="register"
          >
            注册
          </el-button>
          <el-button
            block
            size="large"
            :disabled="loading"
            @click="resetFields"
          >
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

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
</style>
