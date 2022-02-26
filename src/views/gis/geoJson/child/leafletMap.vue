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
    <Form
      v-if="selectedFeature?.properties"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :colon="false"
    >
      <Item
        v-for="(val,key,index) of selectedFeature.properties"
        :key="'prop'+index"
        :label="key"
      >
        <Input
          v-if="typeof selectedFeature.properties[key] === 'string'"
          v-model:value="selectedFeature.properties[key]"
          @change="saveToEditor"
        />
        <Input
          v-else-if="typeof selectedFeature.properties[key] === 'number'"
          v-model:value.number="selectedFeature.properties[key]"
          @change="saveToEditor"
        />
        <Input
          v-else
          :value="JSON.stringify(val)"
          @change="saveToEditor($event, selectedFeature, key)"
        />
      </Item>
    </Form>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { chineseLayer } from '@/utils/leaflet.ChineseLayer.js'
import { map, control, layerGroup, geoJSON, marker, Icon, Marker, GeoJSON } from 'leaflet'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { markRaw, toRaw } from 'vue'
import { Form, Input } from 'ant-design-vue'

const { Item } = Form

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

export default {
  name: 'LeafletMap',
  components: {
    Form,
    Item,
    Input
  },
  props: {
    geoJsonLayer: { type: Object, default: undefined }
  },
  emits: ['update:geoJsonLayer'],
  data: () => ({
    selectedFeature: undefined
  }),
  mounted () {
    this.$eventBus.on('locationGeo', this.locationGeo)
    this.$eventBus.on('updateGeojsonLayer', this.updateGeojsonLayer)
    this.initMap()
    this.$nextTick(() => {
      this.addBaseMaps()
      this.addControls()
    })
  },
  beforeUnmount () {
    this.$eventBus.off('locationGeo', this.locationGeo)
    this.$eventBus.off('updateGeojsonLayer', this.updateGeojsonLayer)
    if (_map) {
      _map.remove()
      _map = undefined
    }
  },
  methods: {
    initMap () {
      // 初始化地图
      _map = markRaw(map(this.$refs.mapContainer, {
        attributionControl: true,
        zoomControl: false
      }))
      _map.setView([35, 105], 4)

      // 添加GeoJson图层
      this.$emit('update:geoJsonLayer', geoJSON(undefined, {
        onEachFeature: this.onEachFeature,
        pointToLayer: (feature, latLng) => {
          return marker(latLng, { icon: blueIcon })
        }
      }).addTo(_map))
    },
    addBaseMaps () {
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
          图形: toRaw(this.geoJsonLayer)
        },
        {
          hideSingleBase: true,
          position: 'topright'
        }
      ).addTo(_map)
    },
    addControls () {
      control.scale({
        imperial: false,
        position: 'bottomleft'
      }).addTo(_map)
      control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        position: 'bottomright'
      }).addTo(_map)
    },

    onEachFeature (feature, layer) {
      if (feature.properties) {
        layer.bindPopup(this.$refs.propertyPopup).on('popupopen', () => {
          this.selectedFeature = feature
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
          this.selectedFeature = undefined
          if (layer instanceof Marker) {
            layer.setIcon(blueIcon)
          } else {
            this.geoJsonLayer.resetStyle(layer)
          }
        })
      }
    },

    saveToEditor (val, feature, key) {
      if (val instanceof InputEvent && feature && key) {
        try {
          feature.properties[key] = JSON.parse(val.currentTarget.value)
        } catch (e) {
          feature.properties[key] = val.currentTarget.value
        }
      }
      this.$eventBus.emit('updateEditor')
    },

    locationGeo (geoJson) {
      try {
        const layer = geoJSON(geoJson)
        const bounds = layer.getBounds()
        const center = bounds.getCenter()
        const zoom = _map.getBoundsZoom(bounds)
        _map.setView(center, zoom > 16 ? 16 : zoom)
      } catch (e) {
      }
    },
    updateGeojsonLayer (geoJson) {
      if (this.geoJsonLayer && this.geoJsonLayer instanceof GeoJSON) {
        this.geoJsonLayer.clearLayers()
        try {
          this.geoJsonLayer.addData(geoJson)
          const bounds = this.geoJsonLayer.getBounds()
          const center = bounds.getCenter()
          const zoom = _map.getBoundsZoom(bounds)
          _map.setView(center, zoom > 16 ? 16 : zoom)
        } catch (e) {
          console.log(e)
        }
      }
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
