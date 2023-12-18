<template>
  <div class="wrapper">
    <el-tabs
      v-model="activeKey"
      type="card"
      class="totalTab"
    >
      <el-tab-pane
        name="home"
        label="上传区"
      >
        <Upload :active-key="activeKey" />
      </el-tab-pane>
      <el-tab-pane
        name="uploaded"
        label="相册"
      >
        <ImgList />
      </el-tab-pane>
      <el-tab-pane
        name="settings"
        label="设置"
      >
        <Settings />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import ImgList from './child/imgList.vue'
import Upload from './child/upload.vue'
import Settings from './child/settings.vue'

const activeKey = ref('home')
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;

  .totalTab {
    height: 100%;
  }
}

:deep(.el-tabs) {
  width: 100%;

  .el-tabs__header {
    height: 4rem !important;
    margin-bottom: .8rem;

    .ant-tabs-tab {
      height: 4rem !important;
      line-height: 4rem !important;
    }
  }

  .el-tabs__content {
    width: 100%;
    height: calc(100% - 4.8rem);

    .el-tab-pane {
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
