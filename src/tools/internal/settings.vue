<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const route = useRoute()
const styleStore = useGlobalStore()
const userStore = useUserStore()
const settingStore = useSettingStore()

const settings = computed(() => {
  return settingStore.general
})

const editingUser = ref(false)
const ruleFormRef = ref<FormInstance>()
const userForm = reactive({
  nickName: '',
  email: '',
  passwd: '',
  rePasswd: '',
  oldPasswd: '',
})
const rules = reactive<FormRules<typeof userForm>>({
  rePasswd: [{
    validator: (rule: any, value: string, callback: (e?: Error) => void) => {
      if (value && value !== userForm.passwd) {
        callback(new Error('两次输入的密码不一致'))
      }
      else {
        callback()
      }
    },
  }],
  oldPasswd: [{
    validator: (rule: any, value: string, callback: (e?: Error) => void) => {
      if (!value && (userForm.passwd || userForm.rePasswd)) {
        callback(new Error('请输入旧密码'))
      }
      else {
        callback()
      }
    },
  }],
})

const clearOfflineCache = () => useMainStore().clearOfflineCache()

function login() {
  router.push({
    path: '/login',
    query: {
      redirect: route.fullPath,
    },
  })
}
function logout() {
  router.push('/logout')
}

function editUser() {
  userForm.nickName = userStore.profile.nickName ?? ''
  userForm.email = userStore.profile.email ?? ''
  userForm.passwd = ''
  userForm.rePasswd = ''
  userForm.oldPasswd = ''
  editingUser.value = true
}

function cancelEditUser() {
  editingUser.value = false
}

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
      try {
        await userStore.updateUser(options)
      }
      catch (e) {
        ElMessage.error((e as Error).message)
      }
      editingUser.value = false
    }
    else {
      ElMessage.warning('请检查输入')
      return false
    }
  })
}
</script>

<template>
  <a-typography-title :level="3">
    账户信息
  </a-typography-title>
  <div
    v-if="userStore.logged"
    flex
    flex-col
    text-7
    gap-4
    items-start
  >
    <div flex>
      <div w-32>
        昵称:
      </div>
      <div>
        {{ userStore.profile.nickName }}
      </div>
    </div>
    <div flex>
      <div w-32>
        邮箱:
      </div>
      <div>
        {{ userStore.profile.email }}
      </div>
    </div>
    <div flex>
      <div w-32>
        角色
      </div>
      <div>
        {{ userStore.profile?.roles?.[0]?.alias ?? '普通用户' }}
      </div>
    </div>
    <div
      flex
      gap-4
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
        <el-button
          type="primary"
          @click="goto"
        >
          用户权限中心
        </el-button>
      </HaveAccess>
      <el-button
        v-if="!editingUser"
        @click="editUser"
      >
        修改信息
      </el-button>
      <template v-else>
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
    </div>
    <el-form
      v-if="editingUser"
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
  <el-space v-else>
    <el-button
      type="primary"
      @click="login"
    >
      登录
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
  <el-divider />
  <div
    flex
    text-7
    gap-4
    items-start
    flex-wrap
    class="settings-container"
  >
    <div class="settings-wrapper">
      <a-typography-title :level="4">
        全局设置
      </a-typography-title>
      <a-typography-title :level="5">
        外观
      </a-typography-title>
      <el-space>
        <el-radio-group
          :model-value="settings.theme.mode"
          @change="styleStore.setTheme"
        >
          <el-radio label="auto">
            跟随系统
          </el-radio>
          <el-radio label="light">
            浅色
          </el-radio>
          <el-radio label="dark">
            深色
          </el-radio>
        </el-radio-group>
      </el-space>
      <a-typography-title :level="5">
        访问统计
      </a-typography-title>
      <el-space>
        <el-checkbox
          v-model="settings.showMost"
        >
          最常访问
        </el-checkbox>
        <el-checkbox
          v-model="settings.showRecent"
        >
          最近访问
        </el-checkbox>
      </el-space>
      <a-typography-title :level="5">
        其他设置
      </a-typography-title>
      <el-space>
        <el-checkbox
          v-model="settings.showSearch"
        >
          显示搜索
        </el-checkbox>
        <el-checkbox
          v-model="settings.showType"
        >
          显示分类
        </el-checkbox>
        <el-checkbox
          v-model="settings.openInNewTab"
        >
          新标签页打开工具
        </el-checkbox>
      </el-space>
    </div>
    <div
      v-if="userStore.logged"
      class="settings-wrapper"
    >
      <a-typography-title :level="4">
        应用设置
      </a-typography-title>
      <a-typography-title :level="5">
        JSON 编辑器
      </a-typography-title>
      <el-space>
        <el-checkbox
          v-model="settingStore.modules.jsonEditor.syncCloud"
        >
          从云端获取
        </el-checkbox>
      </el-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3.ant-typography,
.ant-typography h3,
h4.ant-typography,
.ant-typography h4,
h5.ant-typography,
.ant-typography h5 {
  margin-top: .8rem;
}

.settings-container {
  overflow: auto;
}

.settings-wrapper {
  width: 25%;
  min-width: 35rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
}

.el-button + .el-button {
  margin: 0;
}
</style>
