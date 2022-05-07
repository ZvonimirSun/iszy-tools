<template>
  <div class="controlMenu">
    <input
      v-show="false"
      ref="uploader"
      type="file"
      accept=".json,.JSON,.geojson,.GEOJSON"
      @change="openFile"
    >
    <a-space :gap="8">
      <a-button
        size="middle"
        @click="$refs.uploader.click()"
      >
        打开
      </a-button>
      <a-dropdown>
        <template #overlay>
          <a-menu @click="exportFile">
            <a-menu-item key="geojson">
              GeoJSON
            </a-menu-item>
            <a-menu-item key="shapefile">
              Shapefile
            </a-menu-item>
          </a-menu>
        </template>
        <a-button
          size="middle"
        >
          <span class="buttonWithIcon">保存<span class="i-icon-park-outline-down" /></span>
        </a-button>
      </a-dropdown>
    </a-space>
  </div>
</template>

<script setup>
import { GeoJSON } from 'leaflet'
import '@/utils/shpwrite.js'
import createFile from '@/utils/createFile.js'

const $eventBus = inject('$eventBus')
const $msg = inject('$msg')
// eslint-disable-next-line no-undef
const props = defineProps({
  geoJsonLayer: { type: GeoJSON, default: undefined }
})

function openFile (e) {
  if (e.target.files.length) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        try {
          const data = JSON.parse(reader.result)
          $eventBus.emit('updateEditor', data)
        } catch (e) {
          $eventBus.emit('updateEditor')
        }
      }
    }
    reader.readAsText(file)
  }
  e.target.value = ''
}

function exportFile (e = {}) {
  switch (e.key) {
    case 'shapefile':
      exportShapefile()
      break
    case 'geojson':
      exportGeoJson()
      break
  }
}

function exportShapefile () {
  if (typeof ArrayBuffer === 'undefined') {
    $msg.error('当前浏览器不支持导出成Shapefile')
    return
  }
  const data = props.geoJsonLayer?.toGeoJSON()
  if (data) {
    try {
      window.process = window.process || {}
      Object.assign(window.process, {
        browser: true
      })
      // todo 修复不支持multiPolygon等问题
      // eslint-disable-next-line no-undef
      shpwrite.download(data, {
        folder: 'geojson',
        types: {
          point: 'points',
          polygon: 'polygons',
          line: 'lines'
        }
      })
    } catch (e) {
      $msg.error('导出失败，' + e.message)
    }
  } else {
    $msg.warn('无可导出数据')
  }
}

function exportGeoJson () {
  const data = props.geoJsonLayer?.toGeoJSON()
  if (data) {
    createFile(data, 'exportFile.geojson')
  } else {
    $msg.warn('无可导出数据')
  }
}
</script>

<style scoped lang="scss">
.controlMenu {
  background: #fff;
  padding: .8rem;
}

.buttonWithIcon {
  display: inline-flex;
  align-items: center;
}
</style>
