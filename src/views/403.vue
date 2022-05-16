<template>
  <a-result
    status="403"
    title="403"
    sub-title="对不起，你无权访问当前页面。"
  >
    <template #extra>
      <a-button
        type="primary"
        @click="login"
      >
        登录
      </a-button>
    </template>
  </a-result>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login () {
  router.push('/login')
}
</script>
