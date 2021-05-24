<template>
  <container>
    <Sketch v-model="colors" :style="{maxWidth: '30rem', width: '100%', margin: '0 auto'}"/>
  </container>
</template>

<script>
import { Sketch } from '@ckpack/vue-color'
import Container from '@/components/container.vue'

export default {
  name: '颜色转换',
  data: () => ({
    colors: '#16b0f6'
  }),
  components: { Container, Sketch }
}
</script>

<style scoped>

</style>
