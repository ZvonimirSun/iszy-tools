<template>
  <Sketch v-model="colors" :style="{maxWidth: '300px', width: '100%', margin: '0 auto'}"/>
</template>

<script>
import { Sketch } from '@ckpack/vue-color'

export default {
  name: '颜色转换',
  data: () => ({
    colors: '#16b0f6'
  }),
  components: { Sketch }
}
</script>

<style scoped>

</style>
