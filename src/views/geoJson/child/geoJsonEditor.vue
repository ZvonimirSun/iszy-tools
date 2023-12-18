<template>
  <VanillaJsonEditor
    ref="editor"
    class="edit-data-json"
    :config="{
      mode: 'text'
    }"
    :content="geoJson"
    @change="onChangeDebounce"
  />
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import $eventBus from '@/plugins/EventBus.js'
import VanillaJsonEditor from '@/components/VanillaJsonEditor.vue'
import { JSONValue } from '@/index'

const editor = ref<InstanceType<typeof VanillaJsonEditor> | null>(null)
let geoJson: JSONValue = {
  type: 'FeatureCollection',
  features: []
}

const updateEditorDebounce = debounce(updateEditor, 500)

onMounted(() => {
  $eventBus.on('updateEditor', updateEditorDebounce)
})

onBeforeUnmount(() => {
  $eventBus.off('updateEditor', updateEditorDebounce)
})

const onChangeDebounce = debounce(onChange, 500)

function onChange (val: JSONValue | string) {
  try {
    if (typeof val === 'string') {
      geoJson = JSON.parse(val)
    } else {
      geoJson = val
    }
    $eventBus.emit('updateGeojsonLayer', geoJson)
  } catch (e) {}
}

function updateEditor (val: JSONValue) {
  editor.value?.update(val)
}
</script>

<style scoped lang="scss">
.geoJsonContainer {
  height: 100%;
}
</style>
