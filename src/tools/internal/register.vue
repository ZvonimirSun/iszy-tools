<script setup lang="ts">
import type { RegisterUser } from '@zvonimirsun/iszy-common'
import type { FormInstance, FormRules } from 'element-plus'
import { REGEX_EMAIL, REGEX_MOBILE_PHONE } from '@/utils/regexUtils'

interface RegisterForm extends Required<RegisterUser> {
  rePasswd: string
}
const registerFormRef = ref<FormInstance>()
const form = reactive<RegisterForm>({
  userName: '',
  nickName: '',
  passwd: '',
  rePasswd: '',
  mobile: '',
  email: '',
})
const rules = reactive<FormRules<RegisterForm>>({
  userName: [{
    required: true,
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (!value || !value.trim()) {
        callback(new Error('请输入用户名'))
      }
      else {
        callback()
      }
    },
  }],
  nickName: [{
    required: true,
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (!value || !value.trim()) {
        callback(new Error('请输入昵称'))
      }
      else {
        callback()
      }
    },
  }],
  passwd: [{
    trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      else {
        if (form.rePasswd !== '') {
          if (!registerFormRef.value)
            return
          registerFormRef.value.validateField('rePasswd', () => undefined)
        }
        callback()
      }
    },
  }],
  rePasswd: [{
    trigger: 'change',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      }
      else if (value !== form.passwd) {
        callback('两次输入密码不一致!')
      }
      else {
        callback()
      }
    },
  }],
  mobile: [{
    trigger: 'change',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback()
      }
      else {
        if (!REGEX_MOBILE_PHONE.test(value)) {
          callback('请输入正确的手机号码')
        }
        else {
          callback()
        }
      }
    },
  }],
  email: [{
    trigger: 'change',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback()
      }
      else {
        if (!REGEX_EMAIL.test(value)) {
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
      form.userName = form.userName.trim()
      form.nickName = form.nickName.trim()
      form.email = form.email.trim()
      form.mobile = form.mobile.trim()
      loading.value = true
      userStore.register(form).then((isActivated: boolean) => {
        if (isActivated) {
          ElMessage.success('注册成功，请前往登录')
          router.push('/login')
        }
        else {
          ElMessage.success('注册成功，请等待管理员审批')
          router.push('/')
        }
      }).catch((e) => {
        ElMessage.error((e as Error).message)
      }).finally(() => {
        loading.value = false
      })
    }
  })
}

function resetFields() {
  registerFormRef.value?.resetFields()
}

function login() {
  router.push('/login')
}
</script>

<template>
  <div class="login-container">
    <div class="main">
      <el-alert title="注意，本站未开放注册" type="warning" />
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
        <el-form-item required label="密码" prop="passwd">
          <el-input
            v-model="form.passwd"
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
        <el-form-item required label="重复密码" prop="rePasswd">
          <el-input
            v-model="form.rePasswd"
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
          <el-button
            block
            size="large"
            :disabled="loading"
            @click="login"
          >
            返回登录
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
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .el-form-item {
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
