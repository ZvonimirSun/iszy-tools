<template>
  <component
    :is="`h${level}`"
    class="s-typography"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
}>(), {
  level: 1
})
</script>

<style lang="scss" scoped>
h3.s-typography, .s-typography h3 {
    margin-bottom: 0.5em;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 1.35;
}

h4.s-typography, .s-typography h4 {
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.4;
}
</style>
