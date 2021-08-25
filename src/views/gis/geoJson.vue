<template>
  <container>
    <div class="container">
      <div class="mapContainer" ref="mapContainer"></div>
      <div class="geoJsonContainer" ref="geoJsonContainer"></div>
    </div>
  </container>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Container from '@/components/container.vue'
import { markRaw } from 'vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'

export default {
  name: 'geoJson',
  components: { Container },
  data: () => ({
    map: undefined,
    editor: undefined,
    geoJson: {
      type: 'FeatureCollection',
      features: []
    }
  }),
  mounted () {
    this.map = markRaw(L.map(this.$refs.mapContainer))
    this.editor = markRaw(new JSONEditor(
      this.$refs.geoJsonContainer,
      {
        mode: 'code',
        onChangeText: (json) => {
          try {
            this.geoJson = JSON.parse(json)
          } catch (e) {
          }
        }
      },
      this.geoJson
    ))
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;

  .mapContainer {
    height: 100%;
    width: 60%;
  }

  .geoJsonContainer {
    height: 100%;
    width: 40%;
  }
}
</style>
