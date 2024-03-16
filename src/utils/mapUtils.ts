import 'leaflet/dist/leaflet.css'

import type { Control, ControlPosition, Map, MapOptions, TileLayer } from 'leaflet'
import { Icon, LatLng, control, layerGroup, map } from 'leaflet'
import config from '@/config'
import { chineseLayer, csysConvert } from '@/utils/leaflet.ChineseLayer.js'
import $axios from '@/plugins/Axios'

Icon.Default.prototype.options.iconUrl = `https://jsdelivr.${config.cdnHost}/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-blue.png`
Icon.Default.prototype.options.iconRetinaUrl = `https://jsdelivr.${config.cdnHost}/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png`
Icon.Default.prototype.options.shadowUrl = `https://jsdelivr.${config.cdnHost}/gh/zvonimirsun/leaflet-color-markers@master/img/marker-shadow.png`

interface InitMapOptions {
  dom: HTMLDivElement
  options?: MapOptions
  view: {
    center: [number, number]
    zoom: number
  }
  controls?: {
    layers?: boolean | ControlPosition
    zoom?: boolean | ControlPosition
    scale?: boolean | ControlPosition
  }
}

interface ChineseLayerOptions {
  type: string
  chinese: true
  options?: any
}

interface GeneralLayerOptions {
  type: string
  url: string
  chinese?: false
  options?: any
}

type LayerOptions = ChineseLayerOptions | GeneralLayerOptions

const defaultMapOptions: MapOptions = {
  attributionControl: true,
  zoomControl: false,
  minZoom: 4,
  trackResize: true,
}

const tdtToken = 'bed806b1ccb34b268ab1c0700123d444'
const gaodeToken = '868d6830a7409520ae283cde3a3f84d1'

const persistMap = new WeakMap<Map, {
  controls: {
    layers?: Control.Layers
    zoom?: Control.Zoom
    scale?: Control.Scale
  }
}>()

function createMap(options: InitMapOptions) {
  const map = getMap(options.dom, options.options)
  map.setView(options.view.center, options.view.zoom)
  const controlMap: {
    layers?: Control.Layers
    zoom?: Control.Zoom
    scale?: Control.Scale
  } = {
  }
  persistMap.set(map, {
    controls: controlMap,
  })
  if (options.controls?.layers) {
    controlMap.layers = control.layers({
      高德矢量: getLayer({
        type: 'GaoDe.Normal.Map',
        chinese: true,
        options: {
          attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者',
        },
      }).addTo(map),
      高德影像: layerGroup(getLayers([
        {
          type: 'GaoDe.Satellite.Map',
          chinese: true,
        },
        {
          type: 'GaoDe.Satellite.Annotation',
          chinese: true,
        },
      ]), {
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者',
      }),
      谷歌矢量: getLayer({
        type: 'Google.Normal.Map',
        chinese: true,
        options: {
          attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者',
        },
      }),
      谷歌影像: layerGroup(getLayers([
        {
          type: 'Google.Satellite.Map',
          chinese: true,
        },
        {
          type: 'Google.Satellite.Annotation',
          chinese: true,
        },
      ]), {
        attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者',
      }),
      OpenStreetMap: getLayer({
        type: 'OSM.Normal.Map',
        chinese: true,
        options: {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',
        },
      }),
      天地图矢量: layerGroup(getLayers([
        {
          type: 'TianDiTu.Normal.Map',
          chinese: true,
        },
        {
          type: 'TianDiTu.Normal.Annotation',
          chinese: true,
        },
      ]), {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
      天地图影像: layerGroup(getLayers([{
        type: 'TianDiTu.Satellite.Map',
        chinese: true,
      }, {
        type: 'TianDiTu.Satellite.Annotation',
        chinese: true,
      }]), {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
      天地图地形: layerGroup(getLayers([
        {
          type: 'TianDiTu.Terrain.Map',
          chinese: true,
        },
        {
          type: 'TianDiTu.Terrain.Annotation',
          chinese: true,
        },
      ]), {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
    }, {}, {
      hideSingleBase: true,
      position: typeof options.controls?.layers === 'string' ? options.controls.layers : 'bottomleft',
    }).addTo(map)
  }
  if (options.controls?.scale !== false) {
    controlMap.scale = control.scale({
      imperial: false,
      position: typeof options.controls?.scale === 'string' ? options.controls.scale : 'bottomright',
    }).addTo(map)
  }
  if (options.controls?.zoom !== false) {
    controlMap.zoom = control.zoom({
      zoomInTitle: '放大',
      zoomOutTitle: '缩小',
      position: typeof options.controls?.zoom === 'string' ? options.controls.zoom : 'topright',
    }).addTo(map)
  }
  return map
}

function getMap(dom: HTMLDivElement, options: MapOptions = defaultMapOptions) {
  return map(dom, {
    ...defaultMapOptions,
    ...options,
  })
}

function addLayer(map: Map, options: LayerOptions | LayerOptions[], {
  flat = true,
  add = true,
} = {}) {
  if (Array.isArray(options)) {
    const layers = options.map(option => getLayer(option))
    if (add) {
      if (flat) {
        layers.forEach((layer) => {
          layer.addTo(map)
        })
      }
      else {
        layerGroup(layers).addTo(map)
      }
    }
    return layers
  }
  else {
    const layer = getLayer(options)
    if (add) {
      layer.addTo(map)
    }
    return layer
  }
}

function getLayer(options: LayerOptions): TileLayer {
  if (options.chinese) {
    return getChineseLayer(options)
  }
  else {
    // todo
    throw new Error('not support')
  }
}

function getLayers(options: LayerOptions[]): TileLayer[] {
  return options.map(option => getLayer(option))
}

function getChineseLayer(options: Omit<ChineseLayerOptions, 'chinese'>): TileLayer {
  const _options: any = {}
  const type = options.type
  const providerName = type.split('.')[0]
  switch (providerName) {
    case 'GaoDe':
      Object.assign(_options, {
        maxNativeZoom: 18,
        maxZoom: 20,
      })
      break
    case 'Google':
      Object.assign(_options, {
        maxZoom: 20,
      })
      break
    case 'OSM':
      Object.assign(_options, {
        maxNativeZoom: 19,
        maxZoom: 20,
      })
      break
    case 'TianDiTu':
      Object.assign(_options, {
        key: tdtToken,
        maxNativeZoom: 18,
        maxZoom: 20,
      })
      if (type.includes('Terrain')) {
        Object.assign(_options, {
          maxNativeZoom: 14,
        })
      }
      break
  }

  return chineseLayer(type, { ..._options, ...options.options })
}

function formatDegree(value: number) {
  value = Math.abs(value)
  const v1 = Math.floor(value)// 度
  const v2 = Math.floor((value - v1) * 60) // 分
  const v3 = ((value - v1) * 3600 % 60).toFixed(2) // 秒
  return `${v1}° ${v2 < 10 ? `0${v2}` : v2}' ${Number.parseFloat(v3) < 10 ? `0${v3}` : v3}" `
}

async function getLocation(address: string): Promise<{
  latLng: LatLng
  address: string
}> {
  const res = await $axios.get('https://amap.api.iszy.xyz/v3/geocode/geo', {
    params: {
      address,
      key: gaodeToken,
    },
  })
  if (res.data.status === '1' && Number(res.data.count) > 0) {
    const info = res.data.geocodes[0]
    const latLng = csysConvert.gcj02_To_gps84(Number.parseFloat(info.location.split(',')[0]), Number.parseFloat(info.location.split(',')[1]))
    return {
      latLng: new LatLng(latLng.lat, latLng.lng),
      address: info.formatted_address,
    }
  }
  else {
    throw new Error('未找到相关地址。')
  }
}

async function getAddress(location: LatLng): Promise<string> {
  const gaodeLatLng = csysConvert.gps84_To_gcj02(location.lng, location.lat)
  const res = await $axios.get('https://amap.api.iszy.xyz/v3/geocode/regeo', {
    params: {
      location: `${gaodeLatLng.lng},${gaodeLatLng.lat}`,
      output: 'json',
      key: gaodeToken,
      homeorcorp: 1,
    },
  })
  if (res.data.status === '1' && res.data.regeocode.formatted_address) {
    return res.data.regeocode.formatted_address
  }
  else {
    throw new Error('未找到相关地址。')
  }
}

function getMapStatus(map: Map) {
  const status = persistMap.get(map)
  if (!status) {
    throw new Error('map not found')
  }
  return status
}

const utils = {
  formatDegree,
  getAddress,
  getLocation,
}

export {
  tdtToken,
  gaodeToken,
  createMap,
  addLayer,
  getMapStatus,
  utils,
}
