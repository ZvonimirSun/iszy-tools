<template>
  <div class="container">
    <LeafletMap v-model:geo-json-layer="geoJsonLayer"/>
    <Tabs type="card">
      <TabPane key="geoJson" tab="GeoJSON">
        <GeoJsonEditor ref="geoJsonEditor" :geo-json-layer="geoJsonLayer"/>
      </TabPane>
      <TabPane key="table" tab="表格">
        <PropertyTable :geo-json-layer="geoJsonLayer"/>
      </TabPane>
      <TabPane key="addService" tab="添加服务">
        <AddService/>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { Tabs } from 'ant-design-vue'
import { defineAsyncComponent, defineComponent } from 'vue'

const { TabPane } = Tabs

export default defineComponent({
  name: 'geoJson',
  components: {
    LeafletMap: defineAsyncComponent(() => import('./leafletMap.vue')),
    GeoJsonEditor: defineAsyncComponent(() => import('./geoJsonEditor.vue')),
    PropertyTable: defineAsyncComponent(() => import('./propertyTable.vue')),
    AddService: defineAsyncComponent(() => import('./addService.vue')),
    Tabs,
    TabPane
  },
  data: () => ({
    geoJsonLayer: undefined
  })
})
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

  :deep(.mapContainer) {
    height: 100%;
    width: 60%;
  }

  :deep(.ant-tabs) {
    width: 40%;
    height: 100%;

    .ant-tabs-bar {
      margin: 0;
    }

    .ant-tabs-nav-container, .ant-tabs-bar, .ant-tabs-tab {
      height: 4rem;
      line-height: 4rem;
    }

    .ant-tabs-content {
      height: calc(100% - 4rem);

      .ant-tabs-tabpane {
        height: 100%;
        overflow: auto;

        &.ant-tabs-tabpane-inactive {
          display: none;
        }
      }
    }
  }

  @media (max-width: 992px) {
    :deep(.mapContainer) {
      width: 100%;
      height: calc(50% - .4rem);
    }

    :deep(.ant-tabs) {
      margin-top: .8rem;
      width: 100%;
      height: calc(50% - .4rem);
    }
  }
}
</style>
