<template>
  <Form :colon="false" class="addService">
    <Item label="服务名称">
      <Input v-model:value="name"/>
    </Item>
    <Item label="服务地址">
      <Input v-model:value="url"/>
    </Item>
    <Item label="服务类型">
      <Select v-model:value="type">
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
</template>

<script>
import { tiledMapLayer } from '@/utils/iclient-leaflet'
import { dynamicMapLayer as esriDynamicMapLayer } from 'esri-leaflet/src/Layers/DynamicMapLayer.js'
import { tiledMapLayer as esriTiledMapLayer } from 'esri-leaflet/src/Layers/TiledMapLayer.js'
import { CRS } from 'leaflet'
import { defineComponent } from 'vue'
import { Button, Form, Select, Input } from 'ant-design-vue'

const { Item } = Form
const { Option: SelectOption } = Select

export default defineComponent({
  name: 'addService',
  props: {
    map: Object,
    layerControl: Object
  },
  components: { Button, Form, Select, Input, Item, SelectOption },
  data: () => ({
    id: 1,
    name: '服务 1',
    url: '',
    type: 'supermap_rest'
  }),
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
            }).addTo(this.map)
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
