<script setup lang="ts">
import ImgList from './child/imgList.vue'
import Settings from './child/settings.vue'
import Upload from './child/upload.vue'

const activeKey = ref('home')
const imgListLoaded = ref(false)

watch(activeKey, (val) => {
  if (val === 'uploaded') {
    imgListLoaded.value = true
  }
})
</script>

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
        <ImgList v-if="activeKey === 'uploaded' || imgListLoaded" />
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
