<template>
  <div
    class="fixedWidgets"
    :style="style"
  >
    <div
      v-for="(item,index) of widgets"
      :key="'widget'+index"
    >
      <!--    <IconFont :type="item.icon" @click="item.callback"/>-->
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FixedWidgets',
  props: {
    target: {
      type: Function,
      default: function () { return () => window }
    },
    style: {
      type: Object,
      default: () => ({})
    },
    widgets: {
      type: Array,
      default: () => ([])
    }
  }
})
</script>

<style scoped lang="scss">
.fixedWidgets {
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 3rem;
  bottom: 3rem;
}
</style>
