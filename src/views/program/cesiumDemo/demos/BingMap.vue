<template>
  <div class="container">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
import { Viewer, BingMapsImageryProvider, BingMapsStyle } from 'cesium'
import { markRaw } from 'vue'

export default {
  name: 'BingMap',
  mounted () {
    this.$nextTick(() => {
      this.viewer = markRaw(new Viewer('cesiumContainer', {
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
        vrButton: false,
        scene3DOnly: true,
        infoBox: false
      }))
      this.viewer.scene.debugShowFramesPerSecond = true
      this.viewer.imageryLayers.addImageryProvider(new BingMapsImageryProvider({
        url: 'https://dev.virtualearth.net',
        key: 'AjdX6boBhLMBIkXHL7-U76zwpopBKk39DTqXCOfLthsf-2448hcsK4hElZNdnQRg',
        mapStyle: BingMapsStyle.AERIAL
      }))
    })
  },
  data: () => ({
    viewer: undefined
  }),
  beforeUnmount () {
    if (this.viewer) {
      this.viewer.destroy()
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  #cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
}
</style>
