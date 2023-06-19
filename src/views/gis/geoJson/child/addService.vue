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
        <el-button @click="removeLayer(index)">
          移除
        </el-button>
      </div>
    </div>
    <el-divider />
  </template>
  <el-form
    :colon="false"
    class="addService"
  >
    <el-form-item label="服务名称">
      <el-input v-model="name" />
    </el-form-item>
    <el-form-item label="服务地址">
      <el-input v-model="url" />
    </el-form-item>
    <el-form-item label="服务类型">
      <el-select v-model="type">
        <el-option value="supermap_rest">
          超图动态
        </el-option>
        <el-option value="supermap_tile">
          超图切片
        </el-option>
        <el-option value="arcgis_rest">
          ArcGIS 动态
        </el-option>
        <el-option value="arcgis_tile">
          ArcGIS 切片
        </el-option>
        <el-option value="tms">
          TMS
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="formBtnItem">
      <el-button
        type="primary"
        @click="addService"
      >
        添加
      </el-button>
    </el-form-item>
  </el-form>
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
