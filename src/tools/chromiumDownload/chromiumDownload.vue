<script setup lang="ts">
const status = reactive({
  loading: true,
  error: false,
})

const branches = reactive<{
  milestone: number
  branch: string
  position: number
}[]>([])

onMounted(async () => {
  try {
    const res = await fetch(
      `https://chromiumdash.appspot.com/fetch_milestones?${new URLSearchParams({
        only_branched: 'true',
      })}`,
    ).then(res => res.json())
    status.error = false
    console.log(res)
    branches.splice(0, branches.length, ...res.map((item: {
      milestone: number
      chromium_branch: string
      chromium_main_branch_position: number
    }) => ({
      milestone: item.milestone,
      branch: item.chromium_branch,
      position: item.chromium_main_branch_position,
    })))
  }
  catch (e) {
    status.error = true
  }
  finally {
    status.loading = false
  }
})
</script>

<template>
  <div h-full w-full flex gap-2 class="wrapper">
    <div />
    <div flex flex-col gap-2>
      <h2 class="i-typography">
        Chromium 版本
      </h2>
      <el-table :data="branches" flex-1>
        <el-table-column label="里程碑" width="180">
          <template #default="scope">
            <el-tag>{{ scope.row.milestone }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="branch" label="内部版本" width="180" />
        <el-table-column prop="position" label="分支位置" />
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  > div {
    width: 50%;
  }
}
</style>
