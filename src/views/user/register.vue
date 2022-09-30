<template>
  <div class="login-container">
    <div class="main">
      <a-form
        v-bind="{wrapperCol: { span: 24 }}"
        ref="registerForm"
        layout="horizontal"
        :model="form"
        :rules="rules"
      >
        <a-form-item
          name="nickName"
        >
          <a-input
            v-model:value="form.nickName"
            placeholder="昵称"
            @keypress.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-user-business"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="userName"
        >
          <a-input
            v-model:value="form.userName"
            placeholder="用户名"
            @keypress.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-user"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="password"
        >
          <a-input-password
            v-model:value="form.password"
            placeholder="密码"
            @keypress.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-lock"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item
          name="rePassword"
        >
          <a-input-password
            v-model:value="form.rePassword"
            placeholder="再次输入密码"
            @keypress.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-lock"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item
          name="mobile"
        >
          <a-input
            v-model:value="form.mobile"
            placeholder="手机号（可选）"
            @keypress.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-phone-telephone"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="email"
        >
          <a-input
            v-model:value="form.email"
            placeholder="邮箱（可选）"
            @keypress.enter="register"
          >
            <template #prefix>
              <span
                class="i-icon-park-outline-mail"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            :loading="loading"
            @click="register"
          >
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { FormInstance, Rule } from 'ant-design-vue/es/form'
import type { AxiosInstance } from 'axios'
import type { MessageApi } from 'ant-design-vue/es/message'

const registerForm = ref<FormInstance>()
const $axios:AxiosInstance = inject('$axios')
const $msg:MessageApi = inject('$msg')
const router = useRouter()

const form = reactive({
  userName: '',
  nickName: '',
  password: '',
  rePassword: '',
  mobile: '',
  email: ''
})
const loading:Ref<boolean> = ref(false)

const rules: Record<string, Rule[]> = {
  userName: [{
    required: true,
    validator: validateUserName,
    trigger: 'blur'
  }],
  nickName: [{
    required: true,
    validator: validateNickName,
    trigger: 'blur'
  }],
  password: [{
    required: true,
    validator: validatePassword,
    trigger: 'blur'
  }],
  rePassword: [{
    required: Boolean(form.password),
    validator: validateRePassword,
    trigger: 'blur'
  }]
}

async function validateUserName (_rule: Rule, value = '') {
  const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
  if (!value) {
    throw new Error('用户名不能为空')
  } else if (!reg.test(value)) {
    throw new Error('用户名由5-16位字母、数字、下划线组成，且必须以字母开头')
  }
}
async function validateNickName (_rule: Rule, value = '') {
  if (!value) {
    throw new Error('昵称不能为空')
  } else if (value.trim() !== value) {
    throw new Error('开头和结尾不能包含空格')
  } else if (value.length > 30) {
    throw new Error('昵称不能超过30字符')
  }
}
async function validatePassword (_rule: Rule, value = '') {
  if (!value) {
    throw new Error('密码不能为空')
  } else if (value.length < 8) {
    throw new Error('密码不能少于8位')
  } else if (value.length > 32) {
    throw new Error('密码不能多于32位')
  } else {
    if (form.rePassword) {
      registerForm.value.validateFields('rePassword')
    }
  }
}
async function validateRePassword (_rule: Rule, value = '') {
  if (value !== form.password) {
    throw new Error('两次密码内容不一致')
  }
}

async function register () {
  try {
    await registerForm.value.validateFields()
    const res = (await $axios.post($axios.$apiBase + '/auth/register', {
      userName: form.userName,
      nickName: form.nickName,
      password: form.password,
      mobile: form.mobile,
      email: form.email
    })).data
    if (res.success) {
      $msg.success('注册成功，请等待管理员审核')
      await router.push('/')
    } else {
      $msg.error(`注册失败，${res.message}`)
    }
  } catch (e) {
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  min-height: 100%;
  position: relative;
  //background: #F6F6F6;
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
</style>
