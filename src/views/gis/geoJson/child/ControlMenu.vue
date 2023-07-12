<template>
  <div class="controlMenu">
    <input
      v-show="false"
      ref="uploader"
      type="file"
      accept=".json,.JSON,.geojson,.GEOJSON"
      @change="openFile"
    >
    <el-button @click="$refs.uploader.click()">
      打开
    </el-button>
    <el-button @click="exportGeoJson">
      保存
    </el-button>
  </div>
</template>

<script setup>
import createFile from '@/utils/createFile'
import $eventBus from '@/plugins/EventBus'

function openFile (e) {
  if (e.target.files.length) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        try {
          const data = JSON.parse(reader.result)
          $eventBus.emit('updateEditor', data)
          $eventBus.emit('updateGeojsonLayer', data)
        } catch (e) {
        }
      }
    }
    reader.readAsText(file)
  }
  e.target.value = ''
}

function exportGeoJson () {
  $eventBus.emit('getGeoJson', function (data) {
    if (data) {
      createFile(JSON.stringify(data), 'exportFile.geojson')
    } else {
      ElMessage.warning('无可导出数据')
    }
  })
}
</script>

<style scoped lang="scss">
.controlMenu {
  background: var(--el-fill-color-lighter);
  padding: .8rem;
}

.buttonWithIcon {
  display: inline-flex;
  align-items: center;

  .i-icon-park-outline-down {
    margin-left: .5rem;
  }
}
</style>
