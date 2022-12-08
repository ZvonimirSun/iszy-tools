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
    <div class="content">
      <a-form
        v-if="selectedFeature?.properties && Object.keys(selectedFeature?.properties).length"
        name="selected-feature-form"
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
      <a-form
        name="add-property-form"
        :model="addPropertyForm"
        @finish="onPropertyFinishAdd"
      >
        <template
          v-if="Object.keys(addPropertyForm.properties).length"
        >
          <div
            v-for="(property, index) in addPropertyForm.properties"
            :key="property.id"
            class="form-item-container"
          >
            <a-form-item
              :name="['properties', index, 'label']"
              :rules="{
                required: true,
                message: '属性名称缺失',
              }"
            >
              <a-input
                v-model:value="property.label"
                placeholder="属性名称"
              />
            </a-form-item>
            <a-form-item
              :name="['properties', index, 'value']"
              :rules="{
                required: true,
                message: '属性值缺失',
              }"
            >
              <a-input
                v-model:value="property.value"
                placeholder="属性值"
              />
            </a-form-item>
          </div>
        </template>
        <a-form-item>
          <a-button
            type="dashed"
            block
            @click="addNewProperty"
          >
            <span class="i-icon-park-outline-add-one" />新增属性
          </a-button>
        </a-form-item>
        <a-form-item
          v-if="Object.keys(addPropertyForm.properties).length"
        >
          <div class="btn-container">
            <a-button
              type="primary"
              html-type="submit"
            >
              确认
            </a-button>
            <a-button
              @click.stop="cancelEdit"
            >
              取消
            </a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { chineseLayer } from '@/utils/leaflet.ChineseLayer.js'
import { map, control, layerGroup, geoJSON, marker, Icon, Marker, GeoJSON } from 'leaflet'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

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

const props = defineProps({
  geoJsonLayer: { type: GeoJSON, default: undefined }
})

const emit = defineEmits(['update:geoJsonLayer', 'getMap', 'getControl'])

const $eventBus = inject('$eventBus')

const selectedFeature = ref(undefined)
const mapContainer = ref()
const propertyPopup = ref()

const addPropertyForm = reactive({
  properties: []
})

const onPropertyFinishAdd = values => {
  values.properties.forEach(item => {
    if (item.label && item.value) {
      if (selectedFeature.value.properties[item.label] != null) {
        ElMessage.warning('字段 [ ' + item.label + ' ] 存在，已跳过')
      } else {
        selectedFeature.value.properties[item.label] = isNaN(item.value) ? item.value : parseFloat(item.value)
      }
    }
  })
  cancelEdit()
  $eventBus.emit('updateEditor')
}
function addNewProperty () {
  addPropertyForm.properties.push({
    label: '',
    value: '',
    id: Date.now()
  })
}

function cancelEdit () {
  addPropertyForm.properties = []
}

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
    zoomControl: false,
    minZoom: 4,
    trackResize: true
  }))
  emit('getMap', _map)
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
      图形: toRaw(props.geoJsonLayer)
    },
    {
      hideSingleBase: true,
      position: 'bottomleft'
    }
  ).addTo(_map)
  emit('getControl', layerControl)
}
function addControls () {
  control.scale({
    imperial: false,
    position: 'bottomright'
  }).addTo(_map)
  control.zoom({
    zoomInTitle: '放大',
    zoomOutTitle: '缩小',
    position: 'topright'
  }).addTo(_map)
}

function onEachFeature (feature, layer) {
  if (!feature.properties) {
    feature.properties = {}
  }
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
    addPropertyForm.properties = []
    if (layer instanceof Marker) {
      layer.setIcon(blueIcon)
    } else {
      props.geoJsonLayer.resetStyle(layer)
    }
  })
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
    _map.fitBounds(layer.getBounds())
  } catch (e) {
  }
}
function updateGeojsonLayer (geoJson) {
  if (props.geoJsonLayer && props.geoJsonLayer instanceof GeoJSON) {
    props.geoJsonLayer.clearLayers()
    try {
      props.geoJsonLayer.addData(geoJson)
      _map.fitBounds(props.geoJsonLayer.getBounds())
    } catch (e) {
      console.log(e)
    }
  }
}

</script>

<style scoped lang="scss">
.map-container {
  height: 100%;
  width: 100%;
  z-index: 0;
}

.btn-container {
  display: flex;
  gap: .8rem;
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

      .property-popup {
        display: flex !important;
        flex-direction: column;
        width: 30rem;
        height: 20rem;
        overflow-y: auto;

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

        .content {
          flex: 1;
          width: 100%;
          padding: .8rem;
          overflow-y: auto;

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

        .ant-form-item {
          margin-bottom: .8rem;
        }

        .ant-form:last-child {
          .ant-form-item:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
