<script lang="ts" setup>
import type { Map, Marker } from 'leaflet'
import type { Ref } from 'vue'
import config from '@/config'
import { addDefaultLayers, formatDegree, getAddress, getLocation, initMap } from '@/utils/gis'
import { Icon, LatLng, marker, Popup } from 'leaflet'

const yellowIcon = new Icon.Default({
  iconUrl: `https://jsdelivr.${config.cdnHost}/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-yellow.png`,
  iconRetinaUrl: `https://jsdelivr.${config.cdnHost}/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png`,
})

let map: Map
let centerMarker: Marker
let clickMarker: Marker

const keyword = ref('')
const mapContainer = ref<HTMLDivElement>() as Ref<HTMLDivElement>

onMounted(() => {
  map = initMap({
    dom: mapContainer.value,
    view: {
      center: [105, 35],
      zoom: 4,
    },
  })
  addDefaultLayers(map)
  centerMarker = marker(map.getCenter(), { icon: new Icon.Default() })
    .addTo(map)
    .bindPopup(updatePopupContent(map.getCenter()))
    .on('popupopen', () => {
      if (clickMarker) {
        clickMarker.closePopup()
      }
    })
    .openPopup()
  map.on('move', () => {
    if (!centerMarker) {
      return
    }
    window.requestAnimationFrame(() => {
      centerMarker.setLatLng(map.getCenter())
      updatePopupContent(map.getCenter(), centerMarker.getPopup())
    })
  })
  map.on('click', (val) => {
    keyword.value = `${val.latlng.lng},${val.latlng.lat}`
    locateLocation(val.latlng)
  })
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      if (!keyword.value) {
        keyword.value = `${position.coords.longitude},${position.coords.latitude}`
      }
      map.setView([position.coords.latitude, position.coords.longitude], 16)
    })
  }
})

function handler() {
  if (!keyword.value) {
    return
  }
  const tmp = keyword.value.replace(/，/g, ',').split(',')
  if (tmp.length === 2) {
    if (!Number.isNaN(Number.parseFloat(tmp[0].trim())) && !Number.isNaN(Number.parseFloat(tmp[1].trim()))) {
      // 格式满足经纬度格式
      locateLocation(new LatLng(Number.parseFloat(tmp[1].trim()), Number.parseFloat(tmp[0].trim())), true)
      return
    }
  }
  // 不满足则走地址查询
  locateAddress(keyword.value)
}

function updatePopupContent(location: LatLng, popup?: Popup, address?: string): Popup {
  if (!popup) {
    popup = new Popup({
      autoPan: false,
      autoClose: false,
      closeOnEscapeKey: false,
      closeOnClick: false,
    })
  }
  const lat = location.lat
  let lng = location.lng % 360
  if (lng <= -180) {
    lng += 360
  }
  let content = ''
  if (lat >= 0) {
    content += `<p>北纬N: ${Math.abs(lat)}</p>`
  }
  else {
    content += `<p>南纬S: ${Math.abs(lat)}</p>`
  }
  if (lng >= 0) {
    content += `<p>东经E: ${Math.abs(lng)}</p>`
  }
  else {
    content += `<p>西经W: ${Math.abs(lng)}</p>`
  }
  if (lat >= 0) {
    content += `<p>北纬N: ${formatDegree(Math.abs(lat))}</p>`
  }
  else {
    content += `<p>南纬S: ${formatDegree(Math.abs(lat))}</p>`
  }
  if (lng >= 0) {
    content += `<p>东经E: ${formatDegree(lng)}</p>`
  }
  else {
    content += `<p>西经W: ${formatDegree(lng)}</p>`
  }
  if (address) {
    content += `<p>地址: ${address}</p>`
  }
  popup.setContent(content)
  return popup
}

function locateLocation(location: LatLng, fly?: boolean, address?: string) {
  if (fly) {
    map.setView(location, 16)
  }
  if (!clickMarker) {
    clickMarker = marker(location, { icon: yellowIcon })
      .on('popupopen', () => {
        if (centerMarker) {
          centerMarker.closePopup()
        }
      })
      .addTo(map)
  }
  else {
    clickMarker.setLatLng(location)
  }
  if (address) {
    helper()
  }
  else {
    const index = setTimeout(() => {
      helper()
    }, 500)
    getAddress(location).then((res) => {
      clearTimeout(index)
      address = res
      helper()
    })
  }

  function helper() {
    const popup = updatePopupContent(location, clickMarker.getPopup(), address)
    if (!clickMarker.getPopup()) {
      clickMarker.bindPopup(popup)
    }
    clickMarker.openPopup()
  }
}

async function locateAddress(address: string) {
  try {
    const info = await getLocation(address)
    locateLocation(info.latLng, true, info.address)
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}
</script>

<template>
  <el-space
    :size="8"
    alignment="center"
  >
    <el-input
      v-model="keyword"
      placeholder="输入经纬度(如'116.4,36.9')或地址(如'北京市政府')"
      allow-clear
      @keydown.enter="handler"
    />
    <el-button
      type="primary"
      @click="handler"
    >
      解析
    </el-button>
  </el-space>
  <div
    ref="mapContainer"
    class="mapContainer"
  />
</template>

<style scoped lang="scss">
.el-space {
  margin-bottom: .8rem;
  width: 100%;

  :deep(.el-space__item:first-child) {
    flex: 1;
  }
}

.mapContainer {
  width: 100%;
  height: calc(100% - 4rem);
  font-size: 1.2rem;

  :deep(.leaflet-popup-content) {
    p {
      font-size: 1.4rem;
      margin: 0 0 .8rem 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
