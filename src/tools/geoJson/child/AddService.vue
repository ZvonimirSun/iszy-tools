<script setup lang="ts">
import type { Layer, Map } from 'leaflet'
import $event from '@/plugins/EventBus'
import { addLayer, removeLayer } from '@/utils/gisUtils'
import { v4 as uuid } from 'uuid'

let _map: Map
const data: {
  count: number
  name: string
  url: string
  type: string
  layers: Array<{
    id: string
    name: string
    url: string
    layer: Layer
  }>
} = reactive({
  count: 0,
  name: '服务 1',
  url: '',
  type: 'supermap_rest',
  layers: [],
})

onMounted(() => {
  $event.emit('getMap', (map: Map) => {
    _map = map
  })
})

function addService() {
  const serviceUrl = data.url
  const serviceType = data.type
  const serviceName = data.name
  data.count++
  data.name = `服务 ${data.count}`
  let layer: Layer
  try {
    layer = addLayer(_map, {
      name: serviceName,
      type: serviceType,
      url: serviceUrl,
    })
  }
  catch (e) {
    ElMessage.error('添加服务失败')
    return
  }
  if (layer) {
    data.layers.push({
      name: serviceName,
      url: serviceUrl,
      layer,
      id: uuid(),
    })
  }
}
function remove(index: number) {
  if (data.layers[index]?.layer) {
    removeLayer(_map, data.layers[index].layer)
    data.layers.splice(index, 1)
  }
}
</script>

<template>
  <template v-if="data.layers.length">
    <div class="layer-wrapper">
      <div
        v-for="(item, index) in data.layers"
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
        <el-button @click="remove(index)">
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
      <el-input v-model="data.name" />
    </el-form-item>
    <el-form-item label="服务地址">
      <el-input v-model="data.url" />
    </el-form-item>
    <el-form-item label="服务类型">
      <el-select v-model="data.type">
        <el-option
          value="supermap_rest"
          label="超图动态"
        />
        <el-option
          value="supermap_tile"
          label="超图切片"
        />
        <el-option
          value="arcgis_rest"
          label="ArcGIS 动态"
        />
        <el-option
          value="arcgis_tile"
          label="ArcGIS 切片"
        />
        <el-option
          value="tms"
          label="TMS"
        />
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

<style scoped lang="scss">
.addService {
  padding: .8rem 0 .8rem .8rem;

  .el-form-item {
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

.el-divider {
  margin: .8rem 0;
}
</style>
