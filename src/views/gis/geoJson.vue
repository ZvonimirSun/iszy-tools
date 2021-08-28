<template>
  <container>
    <div class="container">
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
      <Tabs type="card">
        <TabPane key="geoJson" tab="GeoJSON">
          <div class="geoJsonContainer" ref="geoJsonContainer"></div>
        </TabPane>
        <TabPane key="table" tab="Table">
          <Table class="ant-table-striped" v-if="tableColumns" :columns="tableColumns" :data-source="propertyList"
                 :rowKey="(record,index)=>{return index}" :pagination="false" bordered size="small" :scroll="{x:true}"
                 :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
                 :customRow="rowEvents">
            <template #property="{text, column, index}">
              <div v-if="editableData[index]" class="editable-cell-input-wrapper">
                <Input v-model:value="editableData[index][column.dataIndex]"
                       v-if="typeof editableData[index][column.dataIndex] === 'string'" @change="saveToEditor"/>
                <Input v-model:value.number="editableData[index][column.dataIndex]"
                       v-else-if="typeof editableData[index][column.dataIndex] === 'number'" @change="saveToEditor"/>
                <Input :value="JSON.stringify(editableData[index][column.dataIndex])" v-else
                       @change="saveToEditableData($event, editableData[index], column.dataIndex)"/>
              </div>
              <div v-else class="editable-cell-text-wrapper">
                {{ typeof text === 'object' ? JSON.stringify(text) : text }}
              </div>
            </template>
            <template #operation="{ index }">
              <span v-if="editableData[index]">
                <a @click.stop="save(index)"> 保存属性 </a>
                <a @click.stop="cancel(index)"> 取消编辑 </a>
              </span>
              <span v-else>
                <a @click.stop="edit(index)"> 编辑属性 </a>
              </span>
            </template>
          </Table>
          <Empty v-else></Empty>
        </TabPane>
      </Tabs>
    </div>
  </container>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Container from '@/components/container.vue'
import { defineComponent, markRaw, toRaw } from 'vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import { Tabs, Table, Empty, Form, Input } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'

const { TabPane } = Tabs
const { Item } = Form

export default defineComponent({
  name: 'geoJson',
  components: {
    Container,
    Tabs,
    TabPane,
    Table,
    Empty,
    Form,
    Item,
    Input
  },
  data: () => ({
    map: undefined,
    editor: undefined,
    geoJson: {
      type: 'FeatureCollection',
      features: []
    },
    geoJsonLayer: undefined,
    selectedFeature: undefined,

    // flags
    editorUpdated: false,
    editorUpdateTimeout: undefined,

    editableData: {}
  }),
  computed: {
    tableColumns () {
      if (this.propertyList && this.propertyList.length > 0) {
        const keys = Object.keys(this.propertyList[0])
        const columns = keys.map(item => {
          return {
            title: item,
            dataIndex: item,
            key: item,
            slots: { customRender: 'property' }
          }
        })
        columns.push({
          title: '操作',
          dataIndex: 'operation',
          width: 40,
          fixed: 'right',
          slots: {
            customRender: 'operation'
          }
        })
        return columns
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
      if (this.geoJsonLayer) {
        try {
          const tmp = this.geoJsonLayer.toGeoJSON()
          return tmp.features
        } catch (e) {
          return null
        }
      }
      return null
    }
  },
  mounted () {
    this.editor = markRaw(new JSONEditor(
      this.$refs.geoJsonContainer,
      {
        mode: 'code',
        onChangeText: () => {
          this.editorUpdated = true
          if (this.editorUpdateTimeout) {
            clearTimeout(this.editorUpdateTimeout)
            this.editorUpdateTimeout = undefined
          }
          this.editorUpdateTimeout = setTimeout(() => {
            this.updateGeoJsonLayer()
            this.editorUpdated = false
            this.editorUpdateTimeout = undefined
          }, 5000)
        },
        onBlur: () => {
          if (this.editorUpdateTimeout) {
            clearTimeout(this.editorUpdateTimeout)
            this.editorUpdateTimeout = undefined
          }
          if (this.editorUpdated) {
            this.updateGeoJsonLayer()
            this.editorUpdated = false
          }
        }
      },
      this.geoJson
    ))
    this.initMap()
  },
  methods: {
    initMap () {
      this.map = markRaw(L.map(this.$refs.mapContainer, { attributionControl: true, zoomControl: false }))
      this.map.setView([35, 105], 4)
      this.geoJsonLayer = L.geoJSON(undefined, {
        onEachFeature: this.onEachFeature
      }).addTo(this.map)
      L.control.layers({
        高德: L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
          subdomains: '1234',
          minZoom: 3,
          maxZoom: 18,
          attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
        }).addTo(this.map),
        OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者'
        })
      }, {
        图形: toRaw(this.geoJsonLayer)
      }, {
        collapsed: false,
        hideSingleBase: true,
        position: 'topright'
      }).addTo(this.map)
      L.control.scale({
        imperial: false,
        position: 'bottomleft'
      }).addTo(this.map)
      L.control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        position: 'bottomright'
      }).addTo(this.map)
    },
    updateGeoJsonLayer () {
      if (this.geoJsonLayer && this.geoJsonLayer instanceof L.GeoJSON) {
        this.geoJsonLayer.clearLayers()
      }
      try {
        this.geoJson = this.editor.get()
        try {
          this.geoJsonLayer.addData(this.geoJson)
          const bounds = this.geoJsonLayer.getBounds()
          const center = bounds.getCenter()
          const zoom = this.map.getBoundsZoom(bounds)
          this.map.setView(center, zoom)
        } catch (e) {
        }
      } catch (e) {
        this.geoJson = undefined
      }
    },
    locationGeo (geoJson) {
      try {
        const layer = L.geoJSON(geoJson)
        const bounds = layer.getBounds()
        const center = bounds.getCenter()
        const zoom = this.map.getBoundsZoom(bounds)
        this.map.setView(center, zoom)
      } catch (e) {
      }
    },
    onEachFeature (feature, layer) {
      if (feature.properties) {
        layer.bindPopup(this.$refs.propertyPopup).on('popupopen', () => {
          this.selectedFeature = feature
          layer.setStyle({
            color: '#ff7800',
            weight: 5,
            opacity: 0.65
          })
        }).on('popupclose', () => {
          this.selectedFeature = undefined
          this.geoJsonLayer.resetStyle()
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
      this.geoJson = this.geoJsonLayer.toGeoJSON()
      this.editor.update(this.geoJson)
    },
    saveToEditableData (val, property, key) {
      if (val instanceof InputEvent && property && key) {
        try {
          property[key] = JSON.parse(val.currentTarget.value)
        } catch (e) {
          property[key] = val.currentTarget.value
        }
      }
    },
    edit (index) {
      this.editableData[index] = cloneDeep(this.propertyList[index])
    },
    save (index) {
      Object.assign(this.propertyList[index], this.editableData[index])
      delete this.editableData[index]
    },
    cancel (index) {
      delete this.editableData[index]
    },

    rowEvents (record, index) {
      return {
        onClick: () => {
          this.locationGeo(this.features[index])
        }
      }
    }
  },
  beforeUnmount () {
    if (this.map) {
      this.map.remove()
      this.map = undefined
    }
    if (this.editor) {
      this.editor.destroy()
      this.editor = undefined
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

  .leaflet-popup-content {
    .propertyPopup {
      display: block !important;
      width: 25rem;
      height: 20rem;
      overflow-y: auto;
    }
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

          .editable-cell-input-wrapper, .editable-cell-text-wrapper {
            width: max-content;
          }
        }
      }

      .ant-table-striped .table-striped {
        background-color: #fafafa;
      }
    }

    .geoJsonContainer {
      height: 100%;
    }
  }

}
</style>
