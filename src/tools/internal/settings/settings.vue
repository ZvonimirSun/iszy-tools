<script setup lang="ts">
import ToolSettings from '@/tools/internal/settings/child/toolSettings.vue'
import AuthInfo from './child/authInfo.vue'
import GlobalSettings from './child/globalSettings.vue'

const userStore = useUserStore()
</script>

<template>
  <div>
    <a-typography-title v-if="userStore.logged" :level="3">
      {{ userStore.profile.nickName }} 欢迎你~
    </a-typography-title>
    <AuthInfo />
    <el-divider />
    <div flex flex-wrap items-start gap-4>
      <GlobalSettings />
      <ToolSettings flex-1 />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep() {
  h3.ant-typography,
  .ant-typography h3 {
    margin-top: 0.8rem;
  }

  h4.ant-typography,
  .ant-typography h4,
  h5.ant-typography,
  .ant-typography h5 {
    margin-top: 0;
  }
}

.el-divider {
  margin: .8rem 0;
}
</style>
