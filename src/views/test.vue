<script setup lang="ts">
import Javascript from '@/components/editor/javascript'
function change (val: string) {
  console.log(val)
}
</script>

<template>
  <Editor
    h-full
    :plugin="Javascript"
    @change="change"
  />
</template>

<style scoped lang="scss">

</style>
