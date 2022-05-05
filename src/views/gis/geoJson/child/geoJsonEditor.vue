<template>
  <div
    ref="geoJsonContainer"
    class="geoJsonContainer"
  />
</template>

<script>
import 'jsoneditor/dist/jsoneditor.min.css'
import JSONEditor from 'jsoneditor'
import { defineComponent } from 'vue'
import { debounce } from 'lodash-es'

let editor
let geoJson = {
  type: 'FeatureCollection',
  features: []
}

export default defineComponent({
  name: 'GeoJsonEditor',
  props: {
    geoJsonLayer: { type: Object, default: undefined }
  },
  mounted () {
    editor = new JSONEditor(
      this.$refs.geoJsonContainer,
      {
        mode: 'code',
        onChangeText: debounce(this.onChangeText, 500)
      },
      geoJson
    )
    this.$eventBus.on('updateEditor', debounce(this.updateEditor, 500))
  },
  beforeUnmount () {
    this.$eventBus.off('updateEditor', this.updateEditor)
    if (editor) {
      editor.destroy()
      editor = undefined
    }
  },
  methods: {
    onChangeText () {
      try {
        geoJson = editor.get()
        this.$eventBus.emit('updateGeojsonLayer', geoJson)
      } catch (e) {
      }
    },
    updateEditor (val) {
      try {
        if (val) {
          editor.update(val)
          this.$eventBus.emit('updateGeojsonLayer', editor.get())
        } else {
          geoJson = this.geoJsonLayer.toGeoJSON()
          editor.update(geoJson)
        }
      } catch (e) {}
    }
  }
})
</script>

<style scoped lang="scss">
.geoJsonContainer {
  height: 100%;
}
</style>
