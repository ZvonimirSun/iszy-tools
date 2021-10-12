<template>
  <div class="geoJsonContainer" ref="geoJsonContainer"></div>
</template>

<script>
import 'jsoneditor/dist/jsoneditor.min.css'
import JSONEditor from 'jsoneditor'
import { defineComponent } from 'vue'

let editor
let geoJson = {
  type: 'FeatureCollection',
  features: []
}

export default defineComponent({
  name: 'geoJsonEditor',
  props: {
    geoJsonLayer: Object
  },
  mounted () {
    editor = new JSONEditor(
      this.$refs.geoJsonContainer,
      {
        mode: 'code',
        onChangeText: this.onChangeText
      },
      geoJson
    )
    this.$eventBus.on('updateEditor', this.updateEditor)
  },
  methods: {
    onChangeText () {
      try {
        geoJson = editor.get()
        this.$eventBus.emit('updateGeojsonLayer', geoJson)
      } catch (e) {
      }
    },
    updateEditor () {
      try {
        geoJson = this.geoJsonLayer.toGeoJSON()
        editor.update(geoJson)
      } catch (e) {}
    }
  },
  beforeUnmount () {
    this.$eventBus.off('updateEditor', this.updateEditor)
    if (editor) {
      editor.destroy()
      editor = undefined
    }
  }
})
</script>

<style scoped lang="scss">
.geoJsonContainer {
  height: 100%;
}
</style>
