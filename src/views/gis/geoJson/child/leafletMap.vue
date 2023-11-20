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
          v-for="(val,key,index) of selectedFeature.properties"
          :key="index"
          :label="key.toString()"
        >
          {{ val }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { chineseLayer } from '@/utils/leaflet.ChineseLayer.js'
import {
  map,
  control,
  layerGroup,
  geoJSON,
  marker,
  Icon,
  Marker,
  GeoJSON,
  Map,
  Control,
  Layer
} from 'leaflet'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import $eventBus from '@/plugins/EventBus'
import { Ref } from 'vue'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import type { GeoJsonObject, Feature } from 'geojson'

const blueIcon = new Icon({
  iconUrl: 'https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
const yellowIcon = new Icon({
  iconUrl: 'https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
const tdtToken = 'bed806b1ccb34b268ab1c0700123d444'

let geoJsonLayer: GeoJSON, _map: Map, layerControl: Control.Layers

const selectedFeature: Ref<Feature | undefined> = ref(undefined)
const mapContainer: Ref<HTMLDivElement> = ref<HTMLDivElement>() as Ref<HTMLDivElement>
const propertyPopup: Ref<HTMLDivElement> = ref<HTMLDivElement>() as Ref<HTMLDivElement>

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

function initMap () {
  // 初始化地图
  _map = map(mapContainer.value, {
    attributionControl: true,
    zoomControl: false,
    minZoom: 4,
    trackResize: true
  })
  _map.setView([35, 105], 4)

  // 添加GeoJson图层
  geoJsonLayer = geoJSON(undefined, {
    onEachFeature,
    pointToLayer: (feature, latLng) => {
      return marker(latLng, { icon: blueIcon }).addTo(_map)
    }
  }).addTo(_map)
  // 添加底图、图层控制
  layerControl = control.layers(
    {
      高德矢量: chineseLayer('GaoDe.Normal.Map', {
        maxNativeZoom: 18,
        maxZoom: 20,
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
      }).addTo(_map),
      高德影像: layerGroup([
        chineseLayer('GaoDe.Satellite.Map', {
          maxNativeZoom: 18,
          maxZoom: 20
        }),
        chineseLayer('GaoDe.Satellite.Annotation', {
          maxNativeZoom: 18,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
      }),
      谷歌矢量: layerGroup([
        chineseLayer('Google.Normal.Map', {
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者'
      }),
      谷歌影像: layerGroup([
        chineseLayer('Google.Satellite.Map', {
          maxZoom: 20
        }),
        chineseLayer('Google.Satellite.Annotation', {
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者'
      }),
      OpenStreetMap: chineseLayer('OSM.Normal.Map', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',
        maxNativeZoom: 19,
        maxZoom: 20
      }),
      天地图矢量: layerGroup([
        chineseLayer('TianDiTu.Normal.Map', {
          key: tdtToken,
          maxNativeZoom: 18,
          maxZoom: 20
        }),
        chineseLayer('TianDiTu.Normal.Annotation', {
          key: tdtToken,
          maxNativeZoom: 18,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
      }),
      天地图影像: layerGroup([
        chineseLayer('TianDiTu.Satellite.Map', {
          key: tdtToken,
          maxNativeZoom: 18,
          maxZoom: 20
        }),
        chineseLayer('TianDiTu.Satellite.Annotation', {
          key: tdtToken,
          maxNativeZoom: 18,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
      }),
      天地图地形: layerGroup([
        chineseLayer('TianDiTu.Terrain.Map', {
          key: tdtToken,
          maxNativeZoom: 14,
          maxZoom: 20
        }),
        chineseLayer('TianDiTu.Terrain.Annotation', {
          key: tdtToken,
          maxNativeZoom: 14,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
      })
    },
    {
      图形: geoJsonLayer
    },
    {
      hideSingleBase: true,
      position: 'bottomleft'
    }
  ).addTo(_map)
  control.scale({
    imperial: false,
    position: 'bottomright'
  }).addTo(_map)
  control.zoom({
    zoomInTitle: '放大',
    zoomOutTitle: '缩小',
    position: 'topright'
  }).addTo(_map)
  _map.pm.setLang('zh')
  _map.pm.setGlobalOptions({
    layerGroup: geoJsonLayer
  })
  _map.pm.addControls({
    position: 'topright',
    drawCircleMarker: false,
    drawText: false,
    rotateMode: true
  })

  _map.on('pm:create pm:remove pm:cut', function (e) {
    updateEditor()
    if (e.type === 'pm:create') {
      onEachFeature(e.layer.toGeoJSON() as Feature, e.layer)
    }
  })
}

function onEachFeature (feature: Feature, layer: GeoJSON | Marker) {
  layer.on('pm:change', function () {
    updateEditor()
  })
  if (!feature.properties) {
    feature.properties = {}
  }
  layer.bindPopup(propertyPopup.value).on('popupopen', () => {
    selectedFeature.value = feature
    if (_map.hasLayer(layer)) {
      if (layer instanceof Marker) {
        layer.setIcon(yellowIcon)
      } else {
        layer.setStyle({
          color: '#ffff00',
          weight: 5,
          opacity: 0.65
        })
      }
    }
  }).on('popupclose', () => {
    selectedFeature.value = undefined
    if (_map.hasLayer(layer)) {
      if (layer instanceof Marker) {
        layer.setIcon(blueIcon)
      } else {
        geoJsonLayer.resetStyle(layer)
      }
    }
  })
}

function locationGeo (geoJson: GeoJsonObject) {
  try {
    const layer = geoJSON(geoJson)
    _map.fitBounds(layer.getBounds())
  } catch (e) {
  }
}
function updateGeojsonLayer (geoJson: GeoJsonObject) {
  geoJsonLayer.clearLayers()
  try {
    geoJsonLayer.addData(geoJson)
    _map.fitBounds(geoJsonLayer.getBounds())
  } catch (e) {
  }
}

function getGeoJson (callback: (geoJson: GeoJsonObject) => void) {
  // eslint-disable-next-line n/no-callback-literal
  callback(geoJsonLayer?.toGeoJSON())
}

function addLayer (layer: Layer, serviceName: string) {
  layer.addTo(_map)
  layerControl.addOverlay(layer, serviceName)
}

function removeLayer (layer: Layer) {
  _map.removeLayer(layer)
  layerControl.removeLayer(layer)
}

function updateEditor () {
  if (geoJsonLayer.getLayers().length === 0) {
    $eventBus.emit('updateEditor', {
      type: 'FeatureCollection',
      features: []
    })
  } else {
    $eventBus.emit('updateEditor', geoJsonLayer.toGeoJSON())
  }
}

function selectFeature (index: number) {
  if (geoJsonLayer.getLayers().length > index) {
    const layer = geoJsonLayer.getLayers()[index] as GeoJSON
    layer.openPopup()
    _map.fitBounds(layer.getBounds())
  }
}
</script>

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
