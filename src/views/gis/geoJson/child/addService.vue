<template>
  <a-form-item
    :colon="false"
    class="addService"
  >
    <a-form-item label="服务名称">
      <a-input v-model:value="name" />
    </a-form-item>
    <a-form-item label="服务地址">
      <a-input v-model:value="url" />
    </a-form-item>
    <a-form-item label="服务类型">
      <a-select v-model:value="type">
        <a-select-option value="supermap_rest">
          超图动态
        </a-select-option>
        <a-select-option value="supermap_tile">
          超图切片
        </a-select-option>
        <a-select-option value="arcgis_rest">
          ArcGIS 动态
        </a-select-option>
        <a-select-option value="arcgis_tile">
          ArcGIS 切片
        </a-select-option>
        <a-select-option value="tms">
          TMS
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item class="formBtnItem">
      <a-button
        type="primary"
        @click="addService"
      >
        添加
      </a-button>
    </a-form-item>
  </a-form-item>
</template>

<script>
import { tiledMapLayer } from '@/utils/iclient-leaflet/index.js'
import { dynamicMapLayer as esriDynamicMapLayer } from 'esri-leaflet/src/Layers/DynamicMapLayer.js'
import { tiledMapLayer as esriTiledMapLayer } from 'esri-leaflet/src/Layers/TiledMapLayer.js'
import { CRS, tileLayer, Map } from 'leaflet'

let _map

export default defineComponent({
  name: 'AddService',
  props: {
    map: { type: Map, default: undefined },
    layerControl: { type: Object, default: undefined }
  },
  data: () => ({
    id: 1,
    name: '服务 1',
    url: '',
    type: 'supermap_rest'
  }),
  watch: {
    map: function (val) {
      _map = val
    }
  },
  methods: {
    addService () {
      const serviceUrl = this.url
      const serviceType = this.type
      const serviceName = this.name
      this.id++
      this.name = '服务 ' + this.id
      let layer
      try {
        switch (serviceType) {
          case 'supermap_rest':
          case 'supermap_tile': {
            layer = tiledMapLayer(serviceUrl, {
              prjCoordSys: { epsgCode: 3857 },
              crs: CRS.EPSG3857
            }).addTo(_map)
            break
          }
          case 'arcgis_rest': {
            layer = esriDynamicMapLayer({
              url: serviceUrl,
              f: 'image'
            })
            layer.addTo(_map)
            break
          }
          case 'arcgis_tile': {
            layer = esriTiledMapLayer({
              url: serviceUrl
            })
            layer.addTo(_map)
            break
          }
          case 'tms': {
            layer = tileLayer(serviceUrl)
            layer.addTo(_map)
            break
          }
          default:
            break
        }
      } catch (e) {
        this.$msg.error('添加服务失败')
      }
      if (layer) {
        this.layerControl.addOverlay(layer, serviceName)
      }
    }
  }
})
</script>

<style scoped lang="scss">
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
  }
}
</style>
