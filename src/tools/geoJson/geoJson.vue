<script setup lang="ts">
import LeafletMap from './child/leafletMap.vue'
import GeoJsonEditor from './child/geoJsonEditor.vue'
import PropertyTable from './child/propertyTable.vue'
import AddService from './child/addService.vue'
import ControlMenu from './child/ControlMenu.vue'

const currentTab = ref('geoJson')
const wrapper = ref<HTMLDivElement>()

const wrapperHeight = computed(() => {
  if (wrapper.value) {
    return Number.parseFloat(getComputedStyle(wrapper.value).height) - 40
  }
  else {
    return 400
  }
})
</script>

<template>
  <div
    ref="wrapper"
    class="wrapper"
  >
    <LeafletMap />
    <el-tabs
      v-model="currentTab"
      type="card"
    >
      <el-tab-pane
        name="geoJson"
        label="GeoJSON"
      >
        <GeoJsonEditor />
      </el-tab-pane>
      <el-tab-pane
        name="table"
        label="属性表"
      >
        <PropertyTable :height="wrapperHeight" />
      </el-tab-pane>
      <el-tab-pane
        name="addService"
        label="添加服务"
      >
        <AddService />
      </el-tab-pane>
    </el-tabs>
    <ControlMenu />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  position: relative;

  :deep(.map-container) {
    height: 100%;
    width: 60%;
  }

  :deep(.el-tabs) {
    width: 40%;
    height: 100%;

    .el-tabs__header {
      margin: 0;
    }

    .el-tabs__content {
      height: calc(100% - 4.1rem);
      z-index: 2;

      .el-tab-pane {
        height: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    :deep(.map-container) {
      width: 100%;
      height: calc(50% - .4rem);
    }

    :deep(.el-tabs) {
      margin-top: .8rem;
      width: 100%;
      height: calc(50% - .4rem);
    }
  }
}

.controlMenu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
