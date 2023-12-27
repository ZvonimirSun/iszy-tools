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
const { copy } = useCopy({ text: '复制成功' })
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
