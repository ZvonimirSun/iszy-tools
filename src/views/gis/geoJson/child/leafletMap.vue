<template>
  <div
    ref="mapContainer"
    class="mapContainer"
  />
  <div
    v-show="false"
    ref="propertyPopup"
    class="propertyPopup"
  >
    <div class="title">
      <span>属性</span>
    </div>
    <a-form
      v-if="selectedFeature?.properties"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :colon="false"
    >
      <a-form-item
        v-for="(val,key,index) of selectedFeature.properties"
        :key="'prop'+index"
        :label="key"
      >
        <a-input
          v-if="typeof selectedFeature.properties[key] === 'string'"
          v-model:value="selectedFeature.properties[key]"
          @change="saveToEditor"
        />
        <a-input
          v-else-if="typeof selectedFeature.properties[key] === 'number'"
          v-model:value.number="selectedFeature.properties[key]"
          @change="saveToEditor"
        />
        <a-input
          v-else
          :value="JSON.stringify(val)"
          @change="saveToEditor($event, selectedFeature, key)"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { chineseLayer } from '@/utils/leaflet.ChineseLayer.js'
import { map, control, layerGroup, geoJSON, marker, Icon, Marker, GeoJSON } from 'leaflet'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { markRaw, onMounted, ref, toRaw, nextTick, onBeforeUnmount, inject } from 'vue'

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

let layerControl, _map

// eslint-disable-next-line no-undef
const props = defineProps({
  geoJsonLayer: { type: GeoJSON, default: undefined }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:geoJsonLayer'])

const $eventBus = inject('$eventBus')

const selectedFeature = ref(undefined)
const mapContainer = ref()
const propertyPopup = ref()

onMounted(() => {
  $eventBus.on('locationGeo', locationGeo)
  $eventBus.on('updateGeojsonLayer', updateGeojsonLayer)
  initMap()
  nextTick(() => {
    addBaseMaps()
    addControls()
  })
})

onBeforeUnmount(() => {
  $eventBus.off('locationGeo', locationGeo)
  $eventBus.off('updateGeojsonLayer', updateGeojsonLayer)
  if (_map) {
    _map.remove()
    _map = undefined
  }
})

function initMap () {
  // 初始化地图
  _map = markRaw(map(mapContainer.value, {
    attributionControl: true,
    zoomControl: false
  }))
  _map.setView([35, 105], 4)

  // 添加GeoJson图层
  emit('update:geoJsonLayer', geoJSON(undefined, {
    onEachFeature,
    pointToLayer: (feature, latLng) => {
      return marker(latLng, { icon: blueIcon })
    }
  }).addTo(_map))
}

function addBaseMaps () {
  // 添加底图、图层控制
  layerControl = control.layers(
    {
      高德矢量: chineseLayer('GaoDe.Normal.Map', {
        minZoom: 3,
        maxNativeZoom: 18,
        maxZoom: 20,
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
      }).addTo(_map),
      高德影像: layerGroup([
        chineseLayer('GaoDe.Satellite.Map', {
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20
        }),
        chineseLayer('GaoDe.Satellite.Annotation', {
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
      }),
      天地图矢量: layerGroup([
        chineseLayer('TianDiTu.Normal.Map', {
          key: tdtToken,
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20
        }),
        chineseLayer('TianDiTu.Normal.Annotation', {
          key: tdtToken,
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
      }),
      天地图影像: layerGroup([
        chineseLayer('TianDiTu.Satellite.Map', {
          key: tdtToken,
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20
        }),
        chineseLayer('TianDiTu.Satellite.Annotation', {
          key: tdtToken,
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
      }),
      天地图地形: layerGroup([
        chineseLayer('TianDiTu.Terrain.Map', {
          key: tdtToken,
          minZoom: 3,
          maxNativeZoom: 14,
          maxZoom: 20
        }),
        chineseLayer('TianDiTu.Terrain.Annotation', {
          key: tdtToken,
          minZoom: 3,
          maxNativeZoom: 14,
          maxZoom: 20
        })
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
      }),
      OpenStreetMap: chineseLayer('OSM.Normal.Map', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',
        minZoom: 3,
        maxNativeZoom: 19,
        maxZoom: 20
      })
    },
    {
      图形: toRaw(props.geoJsonLayer)
    },
    {
      hideSingleBase: true,
      position: 'topright'
    }
  ).addTo(_map)
}
function addControls () {
  control.scale({
    imperial: false,
    position: 'bottomleft'
  }).addTo(_map)
  control.zoom({
    zoomInTitle: '放大',
    zoomOutTitle: '缩小',
    position: 'bottomright'
  }).addTo(_map)
}

function onEachFeature (feature, layer) {
  if (feature.properties) {
    layer.bindPopup(propertyPopup.value).on('popupopen', () => {
      selectedFeature.value = feature
      if (layer instanceof Marker) {
        layer.setIcon(yellowIcon)
      } else {
        layer.setStyle({
          color: '#ffff00',
          weight: 5,
          opacity: 0.65
        })
      }
    }).on('popupclose', () => {
      selectedFeature.value = undefined
      if (layer instanceof Marker) {
        layer.setIcon(blueIcon)
      } else {
        props.geoJsonLayer.resetStyle(layer)
      }
    })
  }
}

function saveToEditor (val, feature, key) {
  if (val instanceof InputEvent && feature && key) {
    try {
      feature.properties[key] = JSON.parse(val.currentTarget.value)
    } catch (e) {
      feature.properties[key] = val.currentTarget.value
    }
  }
  $eventBus.emit('updateEditor')
}

function locationGeo (geoJson) {
  try {
    const layer = geoJSON(geoJson)
    const bounds = layer.getBounds()
    const center = bounds.getCenter()
    const zoom = _map.getBoundsZoom(bounds)
    _map.setView(center, zoom > 16 ? 16 : zoom)
  } catch (e) {
  }
}
function updateGeojsonLayer (geoJson) {
  if (props.geoJsonLayer && props.geoJsonLayer instanceof GeoJSON) {
    props.geoJsonLayer.clearLayers()
    try {
      props.geoJsonLayer.addData(geoJson)
      const bounds = props.geoJsonLayer.getBounds()
      const center = bounds.getCenter()
      const zoom = _map.getBoundsZoom(bounds)
      _map.setView(center, zoom > 16 ? 16 : zoom)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
.mapContainer {
  height: 100%;
  width: 100%;
}

::v-deep(.leaflet-popup) {

  .leaflet-popup-close-button {
    color: #fff;
    padding: .6rem .6rem 0 0;
    font-size: 1.8rem;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 0;
    padding: 0;

    .leaflet-popup-content {
      margin: 0;
      padding: 0;
      overflow: auto;

      .propertyPopup {
        display: flex !important;
        flex-direction: column;
        width: 30rem;
        height: 20rem;

        .title {
          display: block;
          width: 100%;
          height: 3rem;
          line-height: 3rem;
          background: #38f;
          color: #fff;
          font-size: 1.6rem;
          padding: 0 .8rem;
        }

        .ant-form {
          flex: 1;
          padding: .8rem;
          overflow-y: auto;

          .ant-form-item {
            margin-bottom: .8rem;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
