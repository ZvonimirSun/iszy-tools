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
            <a-menu-item key="shp">
              Shapefile
            </a-menu-item>
          </a-menu>
        </template>
        <a-button
          size="middle"
        >
          <span class="buttonWithIcon">保存<Down theme="outline" /></span>
        </a-button>
      </a-dropdown>
    </a-space>
  </div>
</template>

<script setup>
import { Down } from '@icon-park/vue-next'
import { inject } from 'vue'

const $eventBus = inject('$eventBus')

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

function exportFile (type) {
  console.log(type)
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
