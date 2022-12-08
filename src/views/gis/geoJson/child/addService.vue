<template>
  <template v-if="layers.length">
    <div class="layer-wrapper">
      <div
        v-for="(item,index) in layers"
        :key="item.id"
        class="layer-item"
      >
        <div
          class="layer-item-title"
          :title="item.name"
        >
          {{ item.name }}
        </div>
        <div
          class="layer-item-url"
          :title="item.url"
        >
          {{ item.url }}
        </div>
        <a-button @click="removeLayer(index)">
          移除
        </a-button>
      </div>
    </div>
    <a-divider />
  </template>
  <a-form
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
  </a-form>
</template>

<script>
import { tiledMapLayer } from '@/utils/iclient-leaflet/index.js'
import { dynamicMapLayer as esriDynamicMapLayer } from 'esri-leaflet/src/Layers/DynamicMapLayer.js'
import { tiledMapLayer as esriTiledMapLayer } from 'esri-leaflet/src/Layers/TiledMapLayer.js'
import { CRS, tileLayer, Map, Control } from 'leaflet'
import { v4 as uuid } from 'uuid'

export default defineComponent({
  name: 'AddService',
  props: {
    map: { type: Map, default: undefined },
    layerControl: { type: Control.Layers, default: undefined }
  },
  data: () => ({
    count: 0,
    name: '服务 1',
    url: '',
    type: 'supermap_rest',
    layers: []
  }),
  methods: {
    addService () {
      if (!this.map || !this.layerControl) {
        return
      }
      const serviceUrl = this.url
      const serviceType = this.type
      const serviceName = this.name
      this.count++
      this.name = '服务 ' + this.count
      let layer
      try {
        switch (serviceType) {
          case 'supermap_rest':
          case 'supermap_tile': {
            layer = tiledMapLayer(serviceUrl, {
              prjCoordSys: { epsgCode: 3857 },
              crs: CRS.EPSG3857
            })
            layer.addTo(this.map)
            break
          }
          case 'arcgis_rest': {
            layer = esriDynamicMapLayer({
              url: serviceUrl,
              f: 'image'
            })
            layer.addTo(this.map)
            break
          }
          case 'arcgis_tile': {
            layer = esriTiledMapLayer({
              url: serviceUrl
            })
            layer.addTo(this.map)
            break
          }
          case 'tms': {
            layer = tileLayer(serviceUrl)
            layer.addTo(this.map)
            break
          }
          default:
            break
        }
      } catch (e) {
        ElMessage.error('添加服务失败')
      }
      if (layer && this.layerControl) {
        this.layerControl.addOverlay(layer, serviceName)
        this.layers.push({
          name: serviceName,
          url: serviceUrl,
          layer,
          id: uuid()
        })
      }
    },
    removeLayer (index) {
      if (this.layers[index]?.layer && this.layerControl) {
        this.map.removeLayer(this.layers[index]?.layer)
        this.layerControl.removeLayer(this.layers[index]?.layer)
        this.layers.splice(index, 1)
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

.layer-wrapper {
  width: 100%;
  display: flex;
  gap: .8rem;
  flex-direction: column;
  padding: .8rem 0 .8rem .8rem;
}

.layer-item {
  display: flex;
  width: 100%;
  align-items: center;
  gap: .8rem;

  &-title {
    font-weight: bold;
    font-size: 2.2rem;
    width: 10rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &-url {
    color: #999;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.ant-divider {
  margin: .8rem 0;
}
</style>
