<script setup lang="ts">
import type { Map } from 'leaflet'
import { CRS, LatLng, LatLngBounds, map, tileLayer } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContainer = ref<HTMLDivElement>()
const _map = ref<Map>()

onMounted(() => {
  if (!mapContainer.value) {
    return
  }
  const bounds = new LatLngBounds(
    new LatLng(-49.875, 34.25),
    new LatLng(-206, 221),
  )

  _map.value = markRaw(map(mapContainer.value, {
    crs: CRS.Simple,
    attributionControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    trackResize: true,
  }).setView([0, 0], 2))

  tileLayer('https://lib.demos.pub/other/zelda-botw-map/map/{z}_{x}_{y}.png', {
    minZoom: 2,
    maxZoom: 7,
    noWrap: true,
    bounds,
  }).addTo(_map.value)
  tileLayer('https://lib.demos.pub/other/zelda-botw-map/label/{z}_{x}_{y}.png', {
    minZoom: 2,
    maxZoom: 7,
    noWrap: true,
    bounds,
  }).addTo(_map.value)
})
</script>

<template>
  <div
    ref="mapContainer"
    class="map-container"
  />
</template>

<style scoped lang="scss">
.map-container {
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
