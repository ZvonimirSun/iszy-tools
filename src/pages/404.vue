<script setup>
const router = useRouter()

function returnHome() {
  router.push('/')
}
</script>

<template>
  <el-result
    icon="warning"
    title="404"
    sub-title="对不起，你访问的页面不存在。"
  >
    <template #extra>
      <el-button
        type="primary"
        @click="returnHome"
      >
        返回首页
      </el-button>
    </template>
  </el-result>
</template>
