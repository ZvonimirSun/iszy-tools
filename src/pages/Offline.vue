<script setup>
const router = useRouter()

function returnBack() {
  router.back()
}
</script>

<template>
  <el-result
    icon="warning"
    title="离线不可用"
    sub-title="当前页面未缓存完成或需要网络连接~"
  >
    <template #extra>
      <el-button
        type="primary"
        @click="returnBack"
      >
        后退
      </el-button>
    </template>
  </el-result>
</template>
