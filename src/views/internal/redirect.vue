<template>
  <a-typography-title :level="3">
    重定向中...
  </a-typography-title>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.query.url) {
    window.location.href = route.query.url as string
  } else {
    router.push('/')
  }
})
</script>
