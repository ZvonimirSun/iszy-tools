<template>
  <container>
    <div class="container">
      <div class="mapContainer" ref="mapContainer"></div>
      <Tabs type="card">
        <TabPane key="geoJson" tab="GeoJSON">
          <div class="geoJsonContainer" ref="geoJsonContainer"></div>
        </TabPane>
        <TabPane key="table" tab="Table">
          <Table class="ant-table-striped" v-if="tableColumns" :columns="tableColumns" :data-source="propertyList"
                 :rowKey="(record,index)=>{return index}" :scroll="{x: true}" :pagination="false" bordered size="small"
                 :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
                 :customRow="rowEvents">
          </Table>
        </TabPane>
      </Tabs>
    </div>
  </container>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Container from '@/components/container.vue'
import { defineComponent, markRaw } from 'vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import { Tabs, Table } from 'ant-design-vue'

const { TabPane } = Tabs

export default defineComponent({
  name: 'geoJson',
  components: {
    Container,
    Tabs,
    TabPane,
    Table
  },
  data: () => ({
    map: undefined,
    editor: undefined,
    geoJson: {
      type: 'FeatureCollection',
      features: []
    },
    geoJsonLayer: undefined
  }),
  computed: {
    tableColumns () {
      if (this.propertyList && this.propertyList.length > 0) {
        const keys = Object.keys(this.propertyList[0])
        return keys.map(item => {
          return {
            title: item,
            dataIndex: item,
            key: item
          }
        })
      } else {
        return null
      }
    },
    propertyList () {
      if (this.features) {
        return this.features.map(item => {
          return item.properties
        })
      }
      return null
    },
    features () {
      if (this.geoJson) {
        try {
          const tmp = L.geoJSON(this.geoJson).toGeoJSON()
          return tmp.features
        } catch (e) {
          return null
        }
      }
      return null
    }
  },
  watch: {
    geoJson: {
      handler (val) {
        if (this.geoJsonLayer && this.geoJsonLayer instanceof L.Layer) {
          this.map.removeLayer(this.geoJsonLayer)
          this.geoJsonLayer = undefined
        }
        if (val) {
          this.locationGeo(val, true)
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
    },
    locationGeo (geoJson, add) {
      try {
        const layer = L.geoJSON(geoJson)
        if (add) {
          this.geoJsonLayer = layer.addTo(this.map)
        }
        const bounds = layer.getBounds()
        const center = bounds.getCenter()
        const zoom = this.map.getBoundsZoom(bounds)
        this.map.setView(center, zoom)
      } catch (e) {}
    },

    rowEvents (record, index) {
      return {
        onClick: () => {
          this.locationGeo(this.features[index])
        }
      }
    }
  }
})
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
        overflow: auto;

        &.ant-tabs-tabpane-inactive {
          display: none;
        }
      }

      .ant-table {
        th {
          background-color: #e6e6e6;
        }

        td {
          white-space: nowrap;
        }
      }

      .ant-table-striped .table-striped {
        background-color: #e6e6e6;
      }

    }

    .geoJsonContainer {
      height: 100%;
    }
  }

}
</style>
