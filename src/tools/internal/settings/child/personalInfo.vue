<script setup lang="ts">
import type { Device, UpdateUser } from '@zvonimirsun/iszy-common'
import type { FormInstance, FormRules } from 'element-plus'
import LinuxDoImg from '@/assets/images/linuxdo.png'
import config from '@/config'

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

const editingUser = ref(false)
const ruleFormRef = ref<FormInstance>()
const userForm = reactive<UpdateUser & {
  rePasswd?: string
}>({
  userName: '',
  nickName: '',
  email: '',
  passwd: '',
  rePasswd: '',
  oldPasswd: '',
})
const rules = reactive<FormRules<typeof userForm>>({
  userName: [{
    trigger: 'change',
    validator: (_rule: any, value: string, callback: any) => {
      if (value && !value.trim()) {
        callback(new Error('用户名无效'))
      }
      else {
        callback()
      }
    },
  }],
  nickName: [{
    trigger: 'change',
    validator: (_rule: any, value: string, callback: any) => {
      if (value && !value.trim()) {
        callback(new Error('昵称无效'))
      }
      else {
        callback()
      }
    },
  }],
  rePasswd: [{
    trigger: 'change',
    validator: (_rule: any, value: string, callback: (e?: Error) => void) => {
      if (value && value !== userForm.passwd) {
        callback(new Error('两次输入的密码不一致'))
      }
      else {
        callback()
      }
    },
  }],
})

const binding = ref('')

const managingDevices = ref(false)
const devices = ref<(Device & {
  createTime?: string
  lastLoginTime?: string
})[]>([])

async function manageDevices() {
  try {
    devices.value = await userStore.getDevices()
    managingDevices.value = true
  }
  catch (e) {
    managingDevices.value = false
    ElMessage.error((e as Error).message)
  }
}

function cancelManageDevices() {
  managingDevices.value = false
}

async function logout(options: {
  deviceId?: string
  all?: boolean
  other?: boolean
  current?: boolean
}) {
  if (options.current) {
    await userStore.logout()
    ElMessage.success('登出成功')
    return
  }
  await userStore.logoutDevice(options)
  ElMessage.success('登出成功')
  if (!options.all) {
    devices.value = await userStore.getDevices()
  }
}

function editUser() {
  userForm.userName = userStore.profile.userName ?? ''
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
      const options: UpdateUser = {
      }
      if (userForm.userName) {
        options.userName = userForm.userName
      }
      if (userForm.nickName) {
        options.nickName = userForm.nickName
      }
      if (userForm.email) {
        options.email = userForm.email
      }
      if (userForm.passwd) {
        options.passwd = userForm.passwd
        if (userForm.oldPasswd) {
          options.oldPasswd = userForm.oldPasswd
        }
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
    }
  })
}

async function bind(type: 'github' | 'linuxdo', title?: string) {
  if (userStore.profile[type]) {
    return
  }
  const url = new URL(`${config.apiBaseUrl}/auth/${type}/bind`)
  url.searchParams.append('access_token', userStore.access_token)
  _openThirdPartyBind(type, url.toString(), title)
}

async function unbind(type: 'github' | 'linuxdo') {
  if (!userStore.profile[type]) {
    return
  }
  try {
    await userStore.thirdPartyUnbind(type)
    ElMessage.success('解绑成功')
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

async function _thirdPartyBindCallback(e: MessageEvent<{
  type: string
  data: string
}>) {
  const page = e.source as Window
  if (import.meta.env.PROD && e.origin !== config.apiBaseUrl) {
    return
  }
  if (e.data?.type === 'bind_success') {
    window.removeEventListener('message', _thirdPartyBindCallback)
    page.close()
    try {
      await userStore.thirdPartyBind(binding.value, e.data.data)
      ElMessage.success('绑定成功')
    }
    catch (e) {
      ElMessage.error((e as Error).message)
    }
    finally {
      binding.value = ''
    }
  }
  else if (e.data?.type === 'bind_fail') {
    window.removeEventListener('message', _thirdPartyBindCallback)
    page.close()
    binding.value = ''
    ElMessage.error('绑定失败')
  }
}

function _openThirdPartyBind(type: string, url: string, title = '绑定第三方登录', width = 500, height = 600) {
  if (binding.value) {
    ElMessage.warning('绑定进行中，请勿重复点击')
    return
  }
  binding.value = type
  window.addEventListener('message', _thirdPartyBindCallback)
  const top = (window.screen.height - width) / 2
  const left = (window.screen.width - height) / 2
  const page = window.open(url, title, `popup,width=${width},height=${height},top=${top},left=${left}`)
  if (!page) {
    binding.value = ''
    ElMessage.error('请允许浏览器弹出窗口！')
    return
  }
  const index = window.setInterval(() => {
    if (page.closed) {
      window.clearInterval(index)
      binding.value = ''
    }
  }, 500)
}
</script>

<template>
  <div>
    <a-typography-title :level="4">
      账户信息
    </a-typography-title>
    <div
      flex flex-col items-start gap-4 text-7
    >
      <div flex items-center gap-4>
        <div w-32 text-right>
          用户名:
        </div>
        <div>
          {{ userStore.profile.userName }}
        </div>
      </div>
      <div flex items-center gap-4>
        <div w-32 text-right>
          昵称:
        </div>
        <div>
          {{ userStore.profile.nickName }}
        </div>
      </div>
      <div flex items-center gap-4>
        <div w-32 text-right>
          邮箱:
        </div>
        <div>
          {{ userStore.profile.email }}
        </div>
      </div>
      <div flex items-center gap-4>
        <div w-32 text-right>
          角色:
        </div>
        <div>
          {{ userStore.profile?.roles?.[0]?.alias ?? '注册用户' }}
        </div>
      </div>
      <div flex items-center gap-4>
        <div w-32 text-right>
          绑定:
        </div>
        <div flex items-center gap-4>
          <div
            v-for="(item) in thirdParties"
            :key="item.type"
            class="third-party"
            :title="item.title"
            :class="{
              active: userStore.profile[item.type],
            }"
            @click="bind(item.type, `${item.title} 绑定`)"
          >
            <i v-if="item.icon" :class="item.icon" />
            <img
              v-else-if="item.img"
              :src="item.img"
              class="third-party-img"
              alt=""
            >

            <div
              v-if="userStore.profile[item.type]"
              class="unbind-btn"
              title="解绑"
              @click.stop="unbind(item.type)"
            >
              <i class="i-icon-park-solid:close-one" />
            </div>
          </div>
        </div>
      </div>
      <div flex items-center>
        <el-button
          @click="editUser"
        >
          修改信息
        </el-button>
        <el-button
          @click="manageDevices"
        >
          登录设备管理
        </el-button>
      </div>
    </div>
    <el-dialog v-model="editingUser" title="修改信息" :before-close="cancelEditUser">
      <el-form
        ref="ruleFormRef"
        :model="userForm"
        :rules="rules"
        label-width="8rem"
        label-position="left"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input v-model="userForm.userName" />
        </el-form-item>
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
        <span class="dialog-footer">
          <el-button @click="cancelEditUser">取消</el-button>
          <el-button
            type="primary"
            @click="updateUser(ruleFormRef)"
          >
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="managingDevices" title="管理登录设备" :before-close="cancelManageDevices" :width="400">
      <ul flex="~ col" m-0 gap-4 p-0>
        <li
          v-for="(item, index) in devices"
          :key="index"
          w-full flex="~ col"
        >
          <div w-full flex-inline items-center gap-2>
            <span flex-1 overflow-hidden font-bold text="ellipsis nowrap" :title="item.name || item.id">{{ item.name || item.id }}</span>
            <span v-if="item.current">(当前设备)</span>
            <el-button size="small" @click="logout({ deviceId: item.id, current: item.current })">
              登出
            </el-button>
          </div>
          <div w-full p-l-6>
            <table>
              <tr>
                <td text-right>
                  IP:
                </td><td underline>
                  {{ item.ip }}
                </td>
              </tr>
              <tr>
                <td text-right>
                  首次登录时间:
                </td><td underline>
                  {{ item.createTime }}
                </td>
              </tr>
              <tr>
                <td text-right>
                  最后登录时间:
                </td><td underline>
                  {{ item.lastLoginTime }}
                </td>
              </tr>
            </table>
          </div>
        </li>
        <li flex items-center>
          <el-button size="small" @click="logout({ other: true })">
            登出其他
          </el-button>
          <el-button size="small" @click="logout({ all: true })">
            登出所有
          </el-button>
        </li>
      </ul>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            type="primary"
            @click="cancelManageDevices"
          >
            关闭
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.el-breadcrumb {
  font-size: 1.6rem;
}

.third-party {
  cursor: pointer;
  font-size: 2.8rem;
  color: var(--el-text-color-disabled);
  position: relative;

  .third-party-img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    filter: grayscale(1);
  }

  .unbind-btn {
    position: absolute;
    cursor: pointer;
    top: -.5rem;
    right: -.5rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }

  &.active {
    cursor: unset;
    color: var(--el-text-color-primary);

    .third-party-img {
      filter: unset;
    }
  }

  &:hover:not(.active) {
    color: var(--el-color-primary);
  }
}
</style>
