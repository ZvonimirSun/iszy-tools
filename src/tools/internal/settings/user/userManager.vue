<script setup lang="ts">
import type { PublicUser } from '@zvonimirsun/iszy-common'
import config from '@/config'
import $axios from '@/plugins/Axios'
import { getUserTableColumns } from './userTableColumns'

const userList = reactive<PublicUser[]>([])
const page = reactive({
  index: 1,
  size: 10,
})

const columns = getUserTableColumns(operation)

onMounted(() => {
  getUsers(1, page.size)
})

async function getUsers(pageIndex: number, pageSize: number) {
  try {
    const data = (await $axios.get(`${config.apiBaseUrl}/user/list`, {
      params: {
        pageIndex,
        pageSize,
      },
    })).data
    if (data.success) {
      userList.splice(0, userList.length, ...data.data)
    }
    else {
      throw new Error(data.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

function operation(row: PublicUser, operation: string) {
  switch (operation) {
    case 'edit':
      // todo
      break
    case 'disable':
      disableUser(row)
      break
    case 'activate':
      activateUser(row)
      break
    case 'delete':
      deleteUser(row)
      break
  }
}

async function disableUser(row: PublicUser) {
  try {
    const data = (await $axios.put(`${config.apiBaseUrl}/user/ban`, null, {
      params: {
        id: row.userId,
      },
    })).data
    if (data.success) {
      ElMessage.success(data.message)
      await getUsers(page.index, page.size)
    }
    else {
      throw new Error(data.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

async function activateUser(row: PublicUser) {
  try {
    const data = (await $axios.put(`${config.apiBaseUrl}/user/activate`, null, {
      params: {
        id: row.userId,
      },
    })).data
    if (data.success) {
      ElMessage.success(data.message)
      await getUsers(page.index, page.size)
    }
    else {
      throw new Error(data.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

async function deleteUser(row: PublicUser) {
  try {
    const data = (await $axios.delete(`${config.apiBaseUrl}/user/${row.userId}`)).data
    if (data.success) {
      ElMessage.success(data.message)
      await getUsers(page.index, page.size)
    }
    else {
      throw new Error(data.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}
</script>

<template>
  <div h-full w-full flex flex-col gap-4 pa-4>
    <el-breadcrumb v-if="$route.meta.parentInfo">
      <el-breadcrumb-item :to="$route.meta.parentInfo.link">
        {{ $route.meta.parentInfo.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ $route.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-auto-resizer flex-1>
      <template #default="{ width, height }">
        <el-table-v2
          :columns="columns"
          :data="userList"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </el-auto-resizer>
  </div>
</template>

<style scoped lang="scss">
.el-breadcrumb {
  font-size: 1.6rem;
}
</style>
