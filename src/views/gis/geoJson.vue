<template>
  <container>
    <div class="container">
      <div class="mapContainer" ref="mapContainer"></div>
      <Tabs type="card">
        <TabPane key="geoJson" tab="GeoJSON">
          <div class="geoJsonContainer" ref="geoJsonContainer"></div>
        </TabPane>
        <TabPane key="table" tab="table">
          <div></div>
        </TabPane>
      </Tabs>
    </div>
  </container>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Container from '@/components/container.vue'
import { markRaw } from 'vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import { Tabs } from 'ant-design-vue'

const { TabPane } = Tabs

export default {
  name: 'geoJson',
  components: { Container, Tabs, TabPane },
  data: () => ({
    map: undefined,
    editor: undefined,
    geoJson: {
      type: 'FeatureCollection',
      features: []
    },
    geoJsonLayer: undefined
  }),
  watch: {
    geoJson: {
      handler (val) {
        if (this.geoJsonLayer && this.geoJsonLayer instanceof L.Layer) {
          this.map.removeLayer(this.geoJsonLayer)
          this.geoJsonLayer = undefined
        }
        if (val) {
          try {
            this.geoJsonLayer = L.geoJSON(val).addTo(this.map)
            const bounds = this.geoJsonLayer.getBounds()
            const center = bounds.getCenter()
            const zoom = this.map.getBoundsZoom(bounds)
            this.map.setView(center, zoom)
          } catch (e) {}
        }
      },
      deep: true
    }
  },
  mounted () {
    this.editor = markRaw(new JSONEditor(
      this.$refs.geoJsonContainer,
      {
        mode: 'code',
        onChangeText: (json) => {
          if (json == null || json === '') {
            this.geoJson = undefined
            return
          }
          try {
            this.geoJson = JSON.parse(json)
          } catch (e) {
          }
        }
      },
      this.geoJson
    ))
    this.initMap()
  },
  methods: {
    initMap () {
      this.map = markRaw(L.map(this.$refs.mapContainer))
      this.map.setView([35, 105], 4)
      this.map.addLayer(L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: '1234',
        minZoom: 3,
        maxZoom: 18,
        attribution: '&copy; 高德地图'
      }))
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;

  .mapContainer {
    height: 100%;
    width: 60%;
  }

  :deep(.ant-tabs) {
    width: 40%;
    height: 100%;

    .ant-tabs-bar {
      margin: 0;
    }

    .ant-tabs-content {
      height: calc(100% - 4rem);

      .ant-tabs-tabpane {
        height: 100%;
      }
    }

    .geoJsonContainer {
      height: 100%;
    }
  }

}
</style>
