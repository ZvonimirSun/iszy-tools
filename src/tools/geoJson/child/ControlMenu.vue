<script setup>
import $eventBus from '@/plugins/EventBus'
import createFile from '@/utils/createFile'
import { area } from '@turf/turf'

function openFile(e) {
  if (e.target.files.length) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        try {
          const data = JSON.parse(reader.result)
          $eventBus.emit('updateEditor', data)
          $eventBus.emit('updateGeojsonLayer', data)
        }
        catch (e) {
        }
      }
    }
    reader.readAsText(file)
  }
  e.target.value = ''
}

function exportGeoJson() {
  $eventBus.emit('getGeoJson', (data) => {
    if (data) {
      createFile(JSON.stringify(data), 'exportFile.geojson')
    }
    else {
      ElMessage.warning('无可导出数据')
    }
  })
}

function showInfo() {
  $eventBus.emit('getGeoJson', (data) => {
    if (data) {
      const areaResult = area(data)
      if (areaResult < 1000000) {
        ElMessageBox.alert(`面积: ${areaResult.toFixed(2)} 平方米`, '信息')
      }
      else if (areaResult < 100000000) {
        ElMessageBox.alert(`面积: ${(areaResult / 10000).toFixed(2)} 公顷`, '信息')
      }
      else {
        ElMessageBox.alert(`面积: ${(areaResult / 1000000).toFixed(2)} 平方千米`, '信息')
      }
    }
  })
}
</script>

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
    <i
      class="i-icon-park-outline-info"
      @click="showInfo"
    />
  </div>
</template>

<style scoped lang="scss">
.controlMenu {
  background: var(--el-fill-color-lighter);
  padding: .8rem;
  display: flex;
  gap: .8rem;
  align-items: center;

  .el-button+.el-button {
    margin-left: 0;
  }

  i {
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: var(--el-color-primary);
    }
  }
}

.buttonWithIcon {
  display: inline-flex;
  align-items: center;

  .i-icon-park-outline-down {
    margin-left: .5rem;
  }
}
</style>
