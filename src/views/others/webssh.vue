<template>
  <container>
    <iframe src="https://webssh.iszy.xyz/" class="webssh" title="webssh"></iframe>
  </container>
</template>

<script>
import { Container } from '@/components'

export default {
  name: 'webssh',
  components: { Container }
}
</script>

<style scoped lang="scss">
.webssh {
  width: 100%;
  height: calc(100% - .8rem);
  border: none;
}
</style>
