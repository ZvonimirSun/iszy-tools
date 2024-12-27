import type { ControlPosition, Layer, LayerGroup, Map } from 'leaflet'
import type { Controls, InitMapOptions } from './type'
import { Config, LayerUtils, MapUtils, ViewUtils } from '@tip-develop/maputils'
import { control, layerGroup } from 'leaflet'
import { tdtToken } from './common'

const persistMap = new WeakMap<Map, {
  controls: Controls
}>()

export function initMap(options: InitMapOptions) {
  Config.nonProjection = true
  const map = MapUtils.createMap(options.dom, {
    crs: {
      wkid: 3857,
    },
    mapConfig: {
    },
  })
  ViewUtils.setHome(map, {
    center: options.view?.center ?? [105, 35],
    zoom: options.view?.zoom ?? 4,
  })
  const status: {
    controls: Controls
  } = {
    controls: {},
  }
  persistMap.set(map, status)
  if (options.controls?.scale !== false) {
    status.controls.scale = control.scale({
      imperial: false,
      position: typeof options.controls?.scale === 'string' ? options.controls.scale : 'bottomright',
    }).addTo(map)
  }
  if (options.controls?.zoom !== false) {
    status.controls.zoom = control.zoom({
      zoomInTitle: '放大',
      zoomOutTitle: '缩小',
      position: typeof options.controls?.zoom === 'string' ? options.controls.zoom : 'topright',
    }).addTo(map)
  }
  return map
}

export function addDefaultLayers(map: Map) {
  const layers = [
    {
      name: '高德矢量',
      layer: LayerUtils.createLayer(map, {
        type: 'url_template',
        csysType: 'gcj02',
        url: '//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        subdomains: ['1', '2', '3', '4'],
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者',
        maxNativeZoom: 18,
        noWrap: false,
      }) as Layer,
    },
    {
      name: '高德影像',
      layer: layerGroup([
        LayerUtils.createLayer(map, {
          type: 'url_template',
          csysType: 'gcj02',
          url: '//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
          subdomains: ['1', '2', '3', '4'],
          maxNativeZoom: 18,
        }) as Layer,
        LayerUtils.createLayer(map, {
          type: 'url_template',
          csysType: 'gcj02',
          url: '//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}',
          subdomains: ['1', '2', '3', '4'],
          maxNativeZoom: 18,
        }) as Layer,
      ], {
        attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者',
      }),
    },
    {
      name: '谷歌矢量',
      layer: LayerUtils.createLayer(map, {
        type: 'url_template',
        csysType: 'gcj02',
        url: '//www.google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
        attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者',
        maxNativeZoom: 20,
      }) as Layer,
    },
    {
      name: '谷歌影像',
      layer: layerGroup([
        LayerUtils.createLayer(map, {
          type: 'url_template',
          csysType: 'gcj02',
          url: '//www.google.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
          maxNativeZoom: 20,
        }) as Layer,
        LayerUtils.createLayer(map, {
          type: 'url_template',
          csysType: 'gcj02',
          url: '//www.google.com/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}',
          maxNativeZoom: 20,
        }) as Layer,
      ], {
        attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者',
      }),
    },
    {
      name: 'OpenStreetMap',
      layer: LayerUtils.createLayer(map, {
        type: 'url_template',
        url: '//{s}.tile.osm.org/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',
        maxNativeZoom: 19,
      }) as Layer,
    },
    {
      name: '天地图矢量',
      layer: layerGroup([
        LayerUtils.createLayer(map, {
          type: 'tdt',
          layerType: 'vec',
          key: tdtToken,
        }) as Layer,
        LayerUtils.createLayer(map, {
          type: 'tdt',
          layerType: 'vec',
          isLabel: true,
          key: tdtToken,
        }) as Layer,
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
    },
    {
      name: '天地图影像',
      layer: layerGroup([
        LayerUtils.createLayer(map, {
          type: 'tdt',
          layerType: 'img',
          key: tdtToken,
        }) as Layer,
        LayerUtils.createLayer(map, {
          type: 'tdt',
          layerType: 'img',
          isLabel: true,
          key: tdtToken,
        }) as Layer,
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
    },
    {
      name: '天地图地形',
      layer: layerGroup([
        LayerUtils.createLayer(map, {
          type: 'tdt',
          layerType: 'ter',
          key: tdtToken,
        }) as Layer,
        LayerUtils.createLayer(map, {
          type: 'tdt',
          layerType: 'ter',
          isLabel: true,
          key: tdtToken,
        }) as Layer,
      ], {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
    },
  ]
  layers.forEach(({ name, layer }, index) => {
    addBaseLayer(map, { name, layer, add: index === 0 })
  })
}

export function addBaseLayer(map: Map, { name, layer, add }: { name: string, layer: Layer | LayerGroup, add?: boolean }) {
  const status = persistMap.get(map)!
  const layerControl = status.controls.layers || addLayerControl(map)
  layerControl.addBaseLayer(layer, name)
  if (add) {
    layer.addTo(map)
  }
}

export function addOverlay(map: Map, { name, layer }: { name: string, layer: Layer | LayerGroup }) {
  const status = persistMap.get(map)!
  const layerControl = status.controls.layers || addLayerControl(map)
  layerControl.addOverlay(layer, name)
}

function addLayerControl(map: Map, { position }: { position?: ControlPosition } = {}) {
  const status = persistMap.get(map)!
  status.controls.layers = control.layers({}, {}, {
    hideSingleBase: true,
    position: position ?? 'bottomleft',
  }).addTo(map)
  return status.controls.layers
}
