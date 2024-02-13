<template>
  <el-result
    icon="warning"
    title="403"
    sub-title="对不起，你无权访问当前页面。"
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

<script setup>
const router = useRouter()

function returnHome () {
  router.push('/')
}
</script>
