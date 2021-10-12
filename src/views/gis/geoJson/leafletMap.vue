<template>
  <div class="mapContainer" ref="mapContainer"></div>
  <div class="propertyPopup" v-show="false" ref="propertyPopup">
    <Form v-if="selectedFeature?.properties" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :colon="false">
      <Item v-for="(val,key,index) of selectedFeature.properties" :label="key" :key="'prop'+index">
        <Input v-model:value="selectedFeature.properties[key]"
               v-if="typeof selectedFeature.properties[key] === 'string'" @change="saveToEditor"/>
        <Input v-model:value.number="selectedFeature.properties[key]"
               v-else-if="typeof selectedFeature.properties[key] === 'number'" @change="saveToEditor"/>
        <Input :value="JSON.stringify(val)" v-else @change="saveToEditor($event, selectedFeature, key)"/>
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
  iconUrl: 'https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
const yellowIcon = new Icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
const tdtToken = 'bed806b1ccb34b268ab1c0700123d444'

let layerControl, _map

export default {
  name: 'leafletMap',
  props: {
    geoJsonLayer: Object
  },
  emits: ['update:geoJsonLayer'],
  components: { Form, Item, Input },
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
  methods: {
    initMap () {
      // 初始化地图
      _map = markRaw(map(this.$refs.mapContainer, { attributionControl: true, zoomControl: false }))
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
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者'
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
        _map.setView(center, zoom)
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
          _map.setView(center, zoom)
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
  beforeUnmount () {
    this.$eventBus.off('locationGeo', this.locationGeo)
    this.$eventBus.off('updateGeojsonLayer', this.updateGeojsonLayer)
    if (_map) {
      _map.remove()
      _map = undefined
    }
  }
}
</script>

<style scoped lang="scss">
.mapContainer {
  height: 100%;
  width: 100%;
}

.leaflet-popup-content {
  .propertyPopup {
    display: block !important;
    width: 25rem;
    height: 20rem;
    overflow-y: auto;
  }
}
</style>
