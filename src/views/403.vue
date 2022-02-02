<template>
  <Result status="403" title="403" sub-title="对不起，你无权访问当前页面。">
    <template #extra>
      <Button type="primary" @click="login">登录</Button>
    </template>
  </Result>
</template>

<script setup>
import { Result, Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function login () {
  router.push('/login')
}
</script>
