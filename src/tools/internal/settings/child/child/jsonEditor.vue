<script setup lang="ts">
const settingStore = useSettingStore()
const userStore = useUserStore()
const settings = settingStore.modules.jsonEditor
</script>

<template>
  <div>
    <a-typography-title v-if="userStore.logged" :level="5">
      JSON 编辑器
    </a-typography-title>
    <el-space v-if="userStore.logged">
      <el-checkbox
        v-model="settings.syncCloud"
      >
        从云端获取
      </el-checkbox>
    </el-space>
  </div>
</template>
