<template>
  <div class="wrapper">
    <a-tabs
      v-model:activeKey="activeKey"
      type="card"
      class="totalTab"
    >
      <a-tab-pane
        key="home"
        tab="上传区"
      >
        <Upload :active-key="activeKey" />
      </a-tab-pane>
      <a-tab-pane
        key="uploaded"
        tab="相册"
      >
        <ImgList />
      </a-tab-pane>
      <a-tab-pane
        key="settings"
        tab="设置"
      >
        <Settings />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import ImgList from './child/imgList.vue'
import Upload from './child/upload.vue'
import Settings from './child/settings.vue'
import type { Ref } from 'vue'

const activeKey: Ref<string> = ref('home')
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;

  .totalTab {
    height: 100%;
  }
}

:deep(.ant-tabs) {
  width: 100%;

  .ant-tabs-bar {
    height: 4rem !important;
    margin-bottom: .8rem;

    .ant-tabs-tab {
      height: 4rem !important;
      line-height: 4rem !important;
    }
  }

  .ant-tabs-content {
    width: 100%;
    height: 100%;

    .ant-tabs-tabpane {
      width: 100%;
      height: 100%;
      overflow: auto;

      &.ant-tabs-tabpane-inactive {
        display: none;
      }
    }
  }
}
</style>
