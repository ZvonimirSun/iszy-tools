<template>
  <div
    ref="mapContainer"
    class="map-container"
  />
</template>

<script setup lang="ts">
import { LatLngBounds, LatLng, map, Map, CRS, tileLayer } from 'leaflet'
import type { Ref } from 'vue'
import 'leaflet/dist/leaflet.css'

const mapContainer: Ref<HTMLDivElement | undefined> = ref()
const _map: Ref<Map | undefined> = ref()

onMounted(() => {
  if (!mapContainer.value) {
    return
  }
  const bounds = new LatLngBounds(
    new LatLng(-49.875, 34.25), new LatLng(-206, 221)
  )

  _map.value = markRaw(map(mapContainer.value, {
    crs: CRS.Simple,
    attributionControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
  }).setView([0, 0], 2))

  tileLayer('https://lib.iszy.xyz/other/zelda-botw-map/{z}_{x}_{y}.png', {
    minZoom: 2,
    maxZoom: 7,
    noWrap: true,
    bounds
  }).addTo(_map.value)
})

</script>

<style scoped lang="scss">
.map-container {
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
