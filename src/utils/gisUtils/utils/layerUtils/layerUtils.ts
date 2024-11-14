import type { ControlPosition, Layer, LayerGroup, Map, TileLayer } from 'leaflet'
import type { ChineseLayerOption, LayerOption, LayerOptionsWithName, LayerOptionWithName } from '../../type'
import { tdtToken } from '@/utils/gisUtils/common'
import { chineseLayer } from '@/utils/gisUtils/core/leaflet.ChineseLayer'
import { tiledMapLayer } from '@/utils/iclient-leaflet'
import { dynamicMapLayer as esriDynamicMapLayer, tiledMapLayer as esriTiledMapLayer } from 'esri-leaflet'
import { control, CRS, layerGroup, tileLayer } from 'leaflet'
import { get } from '../persistMap'

function addLayerControl(map: Map, { position }: { position?: ControlPosition } = {}) {
  const status = get(map)
  status.controls.layers = control.layers({}, {}, {
    hideSingleBase: true,
    position: position ?? 'bottomleft',
  }).addTo(map)
  return status.controls.layers
}

export function addLayer(map: Map, options: LayerOptionWithName | LayerOptionsWithName): Layer | LayerGroup {
  let layer: Layer | LayerGroup
  if ('layers' in options) {
    const layers = createLayers(options.layers)
    layer = layerGroup(layers)
  }
  else {
    layer = createLayer(options)
  }
  addOverlay(map, {
    name: options.name,
    layer,
  })
  return layer
}

export function removeLayer(map: Map, layer: Layer | LayerGroup) {
  const status = get(map)
  const layerControl = status.controls.layers
  map.removeLayer(layer)
  layerControl?.removeLayer(layer)
}

export function addDefaultBaseLayers(map: Map) {
  const layers = [
    {
      name: '高德矢量',
      layer: createLayer({
        type: 'GaoDe.Normal.Map',
        chinese: true,
        options: {
          attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者',
        },
      }),
    },
    {
      name: '高德影像',
      layer: layerGroup(createLayers([
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
    },
    {
      name: '谷歌矢量',
      layer: createLayer({
        type: 'Google.Normal.Map',
        chinese: true,
        options: {
          attribution: '&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者',
        },
      }),
    },
    {
      name: '谷歌影像',
      layer: layerGroup(createLayers([
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
    },
    {
      name: 'OpenStreetMap',
      layer: createLayer({
        type: 'OSM.Normal.Map',
        chinese: true,
        options: {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',
        },
      }),
    },
    {
      name: '天地图矢量',
      layer: layerGroup(createLayers([
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
    },
    {
      name: '天地图影像',
      layer: layerGroup(createLayers([{
        type: 'TianDiTu.Satellite.Map',
        chinese: true,
      }, {
        type: 'TianDiTu.Satellite.Annotation',
        chinese: true,
      }]), {
        attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者',
      }),
    },
    {
      name: '天地图地形',
      layer: layerGroup(createLayers([
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
    },
  ]
  layers.forEach(({ name, layer }, index) => {
    addBaseLayer(map, { name, layer, add: index === 0 })
  })
}

export function addBaseLayer(map: Map, { name, layer, add }: { name: string, layer: Layer | LayerGroup, add?: boolean }) {
  const status = get(map)
  const layerControl = status.controls.layers || addLayerControl(map)
  layerControl.addBaseLayer(layer, name)
  if (add) {
    layer.addTo(map)
  }
}

export function addOverlay(map: Map, { name, layer }: { name: string, layer: Layer | LayerGroup }) {
  const status = get(map)
  const layerControl = status.controls.layers || addLayerControl(map)
  layerControl.addOverlay(layer, name)
}

function createLayer(options: LayerOption): Layer {
  if (options.chinese) {
    return getChineseLayer(options)
  }
  else {
    switch (options.type) {
      case 'supermap_rest':
      case 'supermap_tile': {
        return tiledMapLayer(options.url, {
          prjCoordSys: { epsgCode: 3857 },
          crs: CRS.EPSG3857,
          ...options.options,
        })
      }
      case 'arcgis_rest': {
        return esriDynamicMapLayer({
          url: options.url,
          f: 'image',
          ...options.options,
        })
      }
      case 'arcgis_tile': {
        return esriTiledMapLayer({
          url: options.url,
          ...options.options,
        })
      }
      case 'tms': {
        return tileLayer(options.url, {
          ...options.options,
        })
      }
    }
    // todo
    throw new Error('not support')
  }
}

function createLayers(options: LayerOption[]): Layer[] {
  return options.map(option => createLayer(option))
}

function getChineseLayer(options: Omit<ChineseLayerOption, 'chinese'>): TileLayer {
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
