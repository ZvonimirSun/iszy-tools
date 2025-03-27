<script setup lang="ts">
import JsonEditor from './child/jsonEditor.vue'
</script>

<template>
  <div w-full overflow-auto>
    <a-typography-title :level="4">
      应用设置
    </a-typography-title>
    <div gap-4 class="settings-wrapper">
      <JsonEditor />
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  overflow: auto;

  & > div {
    width: calc((100% - 2rem) / 3);
    min-width: 35rem;
    overflow: auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    & > div {
      width: 100%;
      min-width: unset;
    }
  }
}
</style>
