<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import type {
  Control,
  GeoJSON,
  Layer,
  Map,
} from 'leaflet'
import {
  Icon,
  Marker,
  geoJSON,
  marker,
} from 'leaflet'
import type { Feature, GeoJsonObject } from 'geojson'
import $eventBus from '@/plugins/EventBus'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import { createMap, getMapStatus } from '@/utils/mapUtils'

const defaultIcon = new Icon.Default()
const yellowIcon = new Icon({
  ...Icon.Default.prototype.options,
  iconUrl: 'https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-yellow.png',
  iconRetinaUrl: 'https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png',
})

let geoJsonLayer: GeoJSON, _map: Map, layerControl: Control.Layers

const selectedFeature = ref<Feature>()
const mapContainer = ref<HTMLDivElement>()
const propertyPopup = ref<HTMLDivElement>()

onMounted(() => {
  $eventBus.on('locationGeo', locationGeo)
  $eventBus.on('updateGeojsonLayer', updateGeojsonLayer)
  $eventBus.on('getGeoJson', getGeoJson)
  $eventBus.on('addLayer', addLayer)
  $eventBus.on('removeLayer', removeLayer)
  $eventBus.on('selectFeature', selectFeature)
  initMap()
})

onBeforeUnmount(() => {
  $eventBus.off('locationGeo', locationGeo)
  $eventBus.off('updateGeojsonLayer', updateGeojsonLayer)
  $eventBus.off('getGeoJson', getGeoJson)
  $eventBus.off('addLayer', addLayer)
  $eventBus.off('removeLayer', removeLayer)
  $eventBus.off('selectFeature', selectFeature)
  if (_map) {
    _map.remove()
  }
})

function initMap() {
  if (!mapContainer.value) {
    return
  }
  // 初始化地图
  _map = createMap({
    dom: mapContainer.value,
    view: {
      center: [35, 105],
      zoom: 4,
    },
    controls: {
      layers: true,
    },
  })
  // 添加GeoJson图层
  geoJsonLayer = geoJSON(undefined, {
    onEachFeature,
    pointToLayer: (feature, latLng) => {
      return marker(latLng).addTo(_map)
    },
  }).addTo(_map)
  // 添加底图、图层控制
  layerControl = getMapStatus(_map).controls.layers as Control.Layers
  layerControl.addOverlay(geoJsonLayer, '图形')
  _map.pm.setLang('zh')
  _map.pm.setGlobalOptions({
    layerGroup: geoJsonLayer,
  })
  _map.pm.addControls({
    position: 'topright',
    drawCircleMarker: false,
    drawText: false,
    rotateMode: true,
  })

  _map.on('pm:create pm:remove pm:cut', (e) => {
    updateEditor()
    if (e.type === 'pm:create') {
      onEachFeature(e.layer.toGeoJSON() as Feature, e.layer)
    }
  })
}

function onEachFeature(feature: Feature, layer: GeoJSON | Marker) {
  layer.on('pm:change', () => {
    updateEditor()
  })
  if (!feature.properties) {
    feature.properties = {}
  }
  if (!propertyPopup.value) {
    return
  }
  layer.bindPopup(propertyPopup.value).on('popupopen', () => {
    selectedFeature.value = feature
    if (_map.hasLayer(layer)) {
      if (layer instanceof Marker) {
        layer.setIcon(yellowIcon)
      }
      else {
        layer.setStyle({
          color: '#ffff00',
          weight: 5,
          opacity: 0.65,
        })
      }
    }
  }).on('popupclose', () => {
    selectedFeature.value = undefined
    if (_map.hasLayer(layer)) {
      if (layer instanceof Marker) {
        layer.setIcon(defaultIcon)
      }
      else {
        geoJsonLayer.resetStyle(layer)
      }
    }
  })
}

function locationGeo(geoJson: GeoJsonObject) {
  try {
    const layer = geoJSON(geoJson)
    _map.fitBounds(layer.getBounds())
  }
  catch (e) {
  }
}
function updateGeojsonLayer(geoJson: GeoJsonObject) {
  geoJsonLayer.clearLayers()
  try {
    geoJsonLayer.addData(geoJson)
    _map.fitBounds(geoJsonLayer.getBounds())
  }
  catch (e) {
  }
}

function getGeoJson(callback: (geoJson: GeoJsonObject) => void) {
  callback(geoJsonLayer?.toGeoJSON())
}

function addLayer(layer: Layer, serviceName: string) {
  layer.addTo(_map)
  layerControl.addOverlay(layer, serviceName)
}

function removeLayer(layer: Layer) {
  _map.removeLayer(layer)
  layerControl.removeLayer(layer)
}

function updateEditor() {
  if (geoJsonLayer.getLayers().length === 0) {
    $eventBus.emit('updateEditor', {
      type: 'FeatureCollection',
      features: [],
    })
  }
  else {
    $eventBus.emit('updateEditor', geoJsonLayer.toGeoJSON())
  }
}

function selectFeature(index: number) {
  if (geoJsonLayer.getLayers().length > index) {
    const layer = geoJsonLayer.getLayers()[index] as GeoJSON
    layer.openPopup()
    _map.fitBounds(layer.getBounds())
  }
}
</script>

<template>
  <div
    ref="mapContainer"
    class="map-container"
  />
  <div
    v-show="false"
    ref="propertyPopup"
    class="property-popup"
  >
    <div class="title">
      <span>属性</span>
    </div>
    <div
      v-if="selectedFeature?.properties && Object.keys(selectedFeature?.properties).length"
      class="content"
    >
      <el-descriptions
        :column="1"
        :border="true"
      >
        <el-descriptions-item
          v-for="(val, key, index) of selectedFeature.properties"
          :key="index"
          :label="key.toString()"
        >
          {{ val }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-container {
  height: 100%;
  width: 100%;
  z-index: 0;
  font-size: 1.2rem;
}

.btn-container {
  display: flex;
  gap: .8rem;
}

::v-deep(.leaflet-popup) {

  .leaflet-popup-close-button {
    color: #fff;
    padding: .2rem .2rem 0 0;
    font-size: 1.8rem;
  }

  .leaflet-popup-tip {
    background: var(--el-fill-color-lighter);
  }

  .leaflet-popup-content-wrapper {
    border-radius: 0;
    padding: 0;
    background-color: var(--el-fill-color-lighter);

    .leaflet-popup-content {
      margin: 0;
      padding: 0;
      overflow: auto;

      .property-popup {
        display: flex !important;
        flex-direction: column;
        width: 30.1rem;
        height: 20rem;
        overflow-y: auto;

        * {
          //box-sizing: border-box;
        }

        .title {
          display: flex;
          width: 100%;
          height: 3rem;
          line-height: 3rem;
          background: var(--el-color-primary);
          color: var(--el-color-white);
          font-size: 1.6rem;
          padding: 0 .8rem;
        }

        .content {
          flex: 1;
          width: 100%;
          padding: .8rem;
          overflow-y: auto;
          background: var(--el-fill-color-lighter);

          .form-item-container {
            display: flex;
            gap: .8rem;
            margin-top: .8rem;

            .ant-form-item {
              margin: unset;
            }

            & + .ant-form-item {
              margin-top: .8rem;
            }
          }
        }

        .el-form-item {
          margin-bottom: .8rem;
        }

        .el-form:last-child {
          .el-form-item:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
