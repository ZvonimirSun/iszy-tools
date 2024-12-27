import type { InitMapOptions } from '@/utils/gisUtils/type'

import type { Map, MapOptions } from 'leaflet'
import { control, map } from 'leaflet'
import persistMap, { add } from './persistMap'

const defaultMapOptions: MapOptions = {
  attributionControl: true,
  zoomControl: false,
  minZoom: 4,
  trackResize: true,
}

export function createMap(options: InitMapOptions) {
  const map = getMap(options.dom, options.options)
  map.setView(options.view.center, options.view.zoom)
  const status = add(map)
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

function getMap(dom: HTMLDivElement, options: MapOptions = defaultMapOptions) {
  return map(dom, {
    ...defaultMapOptions,
    ...options,
  })
}

export function getMapStatus(map: Map) {
  const status = persistMap.get(map)
  if (!status) {
    throw new Error('map not found')
  }
  return status
}
