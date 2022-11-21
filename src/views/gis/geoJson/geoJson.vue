<template>
  <div class="wrapper">
    <LeafletMap
      v-model:geo-json-layer="geoJsonLayer"
      @get-map="getMap"
    />
    <a-tabs type="card">
      <a-tab-pane
        key="geoJson"
        tab="GeoJSON"
      >
        <GeoJsonEditor
          ref="geoJsonEditor"
          :geo-json-layer="geoJsonLayer"
        />
      </a-tab-pane>
      <a-tab-pane
        key="table"
        tab="表格"
      >
        <PropertyTable :geo-json-layer="geoJsonLayer" />
      </a-tab-pane>
      <a-tab-pane
        key="addService"
        tab="添加服务"
      >
        <AddService :map="map" />
      </a-tab-pane>
    </a-tabs>
    <ControlMenu
      :geo-json-layer="geoJsonLayer"
    />
  </div>
</template>

<script>
import LeafletMap from './child/leafletMap.vue'
import GeoJsonEditor from './child/geoJsonEditor.vue'
import PropertyTable from './child/propertyTable.vue'
import AddService from './child/addService.vue'
import ControlMenu from './child/ControlMenu.vue'

export default defineComponent({
  name: 'GeoJson',
  components: {
    LeafletMap,
    GeoJsonEditor,
    PropertyTable,
    AddService,
    ControlMenu
  },
  data: () => ({
    geoJsonLayer: undefined,
    map: undefined
  }),
  methods: {
    getMap (map) {
      this.map = markRaw(map)
    }
  }
})
</script>

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

  :deep(.ant-tabs) {
    width: 40%;
    height: 100%;

    .ant-tabs-bar {
      margin: 0;
    }

    .ant-tabs-nav {
      margin: 0;
    }

    .ant-tabs-nav-container, .ant-tabs-bar, .ant-tabs-tab {
      height: 4rem;
      line-height: 4rem;
    }

    .ant-tabs-content {
      height: calc(100%);

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

.controlMenu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
