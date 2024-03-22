<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { User } from '@/types/auth'

const props = defineProps<{
  user: User
  ok: (options: {
    nickName?: string
    email?: string
    passwd?: string
    oldPasswd?: string
  }) => Promise<void>
}>()
const model = defineModel()
const ruleFormRef = ref<FormInstance>()
const userForm = reactive({
  nickName: '',
  email: '',
  passwd: '',
  rePasswd: '',
  oldPasswd: '',
})
userForm.nickName = props.user.nickName ?? ''
userForm.email = props.user.email ?? ''

const rules = reactive<FormRules<typeof userForm>>({
  rePasswd: [{
    validator: (_rule: any, value: string, callback: (e?: Error) => void) => {
      if (value && value !== userForm.passwd) {
        callback(new Error('两次输入的密码不一致'))
      }
      else {
        callback()
      }
    },
  }],
  oldPasswd: [{
    validator: (_rule: any, value: string, callback: (e?: Error) => void) => {
      if (!value && (userForm.passwd || userForm.rePasswd)) {
        callback(new Error('请输入旧密码'))
      }
      else {
        callback()
      }
    },
  }],
})

async function updateUser(formEl: FormInstance | undefined) {
  if (!formEl) {
    return
  }
  await formEl.validate(async (valid) => {
    if (valid) {
      const options: {
        nickName?: string
        email?: string
        passwd?: string
        oldPasswd?: string
      } = {
      }
      if (userForm.nickName) {
        options.nickName = userForm.nickName
      }
      if (userForm.email) {
        options.email = userForm.email
      }
      if (userForm.passwd) {
        options.passwd = userForm.passwd
        options.oldPasswd = userForm.oldPasswd
      }
      if (Object.keys(options).length === 0) {
        ElMessage.warning('没有需要修改的信息')
        return
      }
      props.ok(options).then(() => {
        model.value = false
      }).catch((e) => {
        ElMessage.error((e as Error).message)
      })
    }
    else {
      ElMessage.warning('请检查输入')
      return false
    }
  })
}

function cancelEditUser() {
  model.value = false
}
</script>

<template>
  <el-dialog title="修改信息">
    <el-form
      ref="ruleFormRef"
      :model="userForm"
      :rules="rules"
      label-width="8rem"
      label-position="left"
    >
      <el-form-item
        label="昵称"
        prop="nickName"
      >
        <el-input v-model="userForm.nickName" />
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input v-model="userForm.email" />
      </el-form-item>
      <el-form-item
        label="旧密码"
        prop="oldPasswd"
      >
        <el-input
          v-model="userForm.oldPasswd"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="新密码"
        prop="passwd"
      >
        <el-input
          v-model="userForm.passwd"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="rePasswd"
      >
        <el-input
          v-model="userForm.rePasswd"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button
        type="primary"
        @click="updateUser(ruleFormRef)"
      >
        保存
      </el-button>
      <el-button @click="cancelEditUser">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">

</style>
