<template>
  <div
    ref="wrapper"
    class="wrapper"
  >
    <leaflet-map
      v-model:geo-json-layer="geoJsonLayer"
      @get-map="getMap"
      @get-control="getControl"
    />
    <a-tabs type="card">
      <a-tab-pane
        key="geoJson"
        tab="GeoJSON"
      >
        <geo-json-editor
          ref="geoJsonEditor"
          :geo-json-layer="geoJsonLayer"
        />
      </a-tab-pane>
      <a-tab-pane
        key="table"
        tab="表格"
      >
        <property-table
          :geo-json-layer="geoJsonLayer"
          :height="wrapperHeight"
        />
      </a-tab-pane>
      <a-tab-pane
        key="addService"
        tab="添加服务"
      >
        <add-service
          :map="_map"
          :layer-control="_control"
        />
      </a-tab-pane>
    </a-tabs>
    <control-menu
      :geo-json-layer="geoJsonLayer"
    />
  </div>
</template>

<script setup lang="ts">
import type { Map, GeoJSON, Control } from 'leaflet'
import LeafletMap from './child/leafletMap.vue'
import GeoJsonEditor from './child/geoJsonEditor.vue'
import PropertyTable from './child/propertyTable.vue'
import AddService from './child/addService.vue'
import ControlMenu from './child/ControlMenu.vue'
import type { Ref } from 'vue'

const geoJsonLayer: Ref<GeoJSON<unknown> | undefined> = ref()
const _map: Ref<Map | undefined> = ref()
const _control: Ref<Control.Layers | undefined> = ref()
const wrapper: Ref<HTMLDivElement | undefined> = ref()

const wrapperHeight = computed(() => {
  if (wrapper.value) {
    return parseFloat(getComputedStyle(wrapper.value).height)
  } else {
    return 400
  }
})

function getMap (val: Map) {
  _map.value = markRaw(val)
}

function getControl (val: Control.Layers) {
  _control.value = markRaw(val)
}
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
