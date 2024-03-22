<script setup lang="ts">
import EditUser from './child/editUser.vue'

const userStore = useUserStore()
const editingUser = ref(false)
const route = useRoute()

function startEditUser() {
  editingUser.value = true
}

function updateUser(user: {
  nickName?: string
  email?: string
  passwd?: string
  oldPasswd?: string
}) {
  console.log(user)

  // return userStore.updateUser(user)
}
</script>

<template>
  <div h-full w-full flex flex-col>
    <el-breadcrumb v-if="route.meta.parentInfo">
      <el-breadcrumb-item :to="route.meta.parentInfo.link">
        {{ route.meta.parentInfo.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ route.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-scrollbar flex-1>
      <a-typography-title :level="3">
        账户信息
      </a-typography-title>
      <div
        flex flex-col items-start gap-4 text-7
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
            {{ userStore.profile?.roles?.[0]?.alias ?? '注册用户' }}
          </div>
        </div>
        <div
          flex
          gap-4
        >
          <el-button
            @click="startEditUser"
          >
            修改信息
          </el-button>
        </div>
      </div>
    </el-scrollbar>
    <EditUser
      v-if="editingUser"
      v-model="editingUser"
      :ok="updateUser"
      :user="userStore.profile"
    />
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

.el-button + .el-button {
  margin: 0;
}
</style>
