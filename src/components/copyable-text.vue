<template>
  <div
    :title="val"
    class="copiable-text"
    @click="copy(val)"
  >
    {{ val }}
  </div>
</template>
<script setup lang="ts">
defineProps<{
  val: string
}>()

async function copy (val: string) {
  try {
    await navigator.clipboard.writeText(val)
    ElMessage.success('复制成功')
  } catch (e) {
    ElMessage.error('复制失败')
  }
}
</script>
<style scoped lang="scss">
.copiable-text {
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: var(--el-color-primary);
    text-decoration: underline;
  }
}
</style>
