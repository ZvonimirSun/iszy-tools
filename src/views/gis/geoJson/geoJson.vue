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
        <TabPane key="table" tab="表格">
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
        <TabPane key="addService" tab="添加服务">
          <Form :colon="false" class="addService">
            <Item label="服务名称">
              <Input v-model:value="service.name"/>
            </Item>
            <Item label="服务地址">
              <Input v-model:value="service.url"/>
            </Item>
            <Item label="服务类型">
              <Select v-model:value="service.type">
                <SelectOption value="supermap_rest">超图动态</SelectOption>
                <SelectOption value="supermap_tile">超图切片</SelectOption>
                <SelectOption value="arcgis_rest">ArcGIS 动态</SelectOption>
                <SelectOption value="arcgis_tile">ArcGIS 切片</SelectOption>
              </Select>
            </Item>
            <Item class="formBtnItem">
              <Button @click="addService" type="primary">添加</Button>
            </Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </container>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { chineseLayer } from '@/utils/leaflet.ChineseLayer.js'
import { map, control, layerGroup, geoJSON, GeoJSON, Control, CRS } from 'leaflet'
import { Container } from '@/components'
import { defineComponent, markRaw, toRaw } from 'vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import { Tabs, Table, Empty, Form, Input, Select, Button } from 'ant-design-vue'
import { cloneDeep, uniqueId } from 'lodash-es'
import { tiledMapLayer } from '@/utils/iclient-leaflet'
import { tiledMapLayer as esriTiledMapLayer, dynamicMapLayer as esriDynamicMapLayer } from 'esri-leaflet'

const { Layers } = Control
const { TabPane } = Tabs
const { Item } = Form
const { Option: SelectOption } = Select

/**
 * @type {Layers}
 */
let layerControl

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
    Input,
    Select,
    SelectOption,
    Button
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

    editableData: {},

    tdtToken: 'bed806b1ccb34b268ab1c0700123d444',
    gaodeToken: '868d6830a7409520ae283cde3a3f84d1',

    service: {
      id: 1,
      name: '服务 1',
      url: '',
      type: 'supermap_rest'
    }
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
      this.map = markRaw(map(this.$refs.mapContainer, { attributionControl: true, zoomControl: false }))
      this.map.setView([35, 105], 4)
      this.geoJsonLayer = geoJSON(undefined, {
        onEachFeature: this.onEachFeature
      }).addTo(this.map)
      layerControl = control.layers({
        高德矢量: chineseLayer('GaoDe.Normal.Map', {
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20,
          attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
        }).addTo(this.map),
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
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          }),
          chineseLayer('TianDiTu.Normal.Annotation', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          })
        ], {
          attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
        }),
        天地图影像: layerGroup([
          chineseLayer('TianDiTu.Satellite.Map', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          }),
          chineseLayer('TianDiTu.Satellite.Annotation', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          })
        ], {
          attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
        }),
        天地图地形: layerGroup([
          chineseLayer('TianDiTu.Terrain.Map', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 14,
            maxZoom: 20
          }),
          chineseLayer('TianDiTu.Terrain.Annotation', {
            key: this.tdtToken,
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
      }, {
        图形: toRaw(this.geoJsonLayer)
      }, {
        hideSingleBase: true,
        position: 'topright'
      }).addTo(this.map)
      control.scale({
        imperial: false,
        position: 'bottomleft'
      }).addTo(this.map)
      control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        position: 'bottomright'
      }).addTo(this.map)
    },
    updateGeoJsonLayer () {
      if (this.geoJsonLayer && this.geoJsonLayer instanceof GeoJSON) {
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
        const layer = geoJSON(geoJson)
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

    addService () {
      const serviceUrl = this.service.url
      const serviceType = this.service.type
      const serviceName = this.service.name
      this.service.id++
      this.service.name = '服务 ' + this.service.id
      switch (serviceType) {
        case 'supermap_rest':
        case 'supermap_tile': {
          try {
            const layer = tiledMapLayer(serviceUrl, {
              prjCoordSys: { epsgCode: 3857 },
              crs: CRS.EPSG3857
            }).addTo(this.map)
            layerControl.addOverlay(layer, serviceName)
          } catch (e) {
            this.$msg.error('添加服务失败')
          }
          break
        }
        case 'arcgis_rest': {
          try {
            const layer = esriDynamicMapLayer({
              url: serviceUrl,
              f: 'image'
            })
            layer.addTo(this.map)
            layerControl.addOverlay(layer, serviceName)
          } catch (e) {
            console.log(e)
            this.$msg.error('添加服务失败')
          }
          break
        }
        case 'arcgis_tile': {
          try {
            const layer = esriTiledMapLayer({
              url: serviceUrl
            })
            layer.addTo(this.map)
            layerControl.addOverlay(layer, serviceName)
          } catch (e) {
            console.log(e)
            this.$msg.error('添加服务失败')
          }
          break
        }
        default:
          break
      }
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

  .addService {
    padding: .8rem 0 .8rem .8rem;

    .ant-form-item {
      margin-bottom: .8rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .formBtnItem {
      text-align: right;

      .ant-btn {
        height: 3rem;
      }
    }
  }
}
</style>
