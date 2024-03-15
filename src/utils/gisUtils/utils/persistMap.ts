import type { Control, Map } from 'leaflet'

interface Controls {
  layers?: Control.Layers
  zoom?: Control.Zoom
  scale?: Control.Scale
}

const persistMap = new WeakMap<Map, {
  controls: Controls
}>()

export function add(map: Map) {
  const _status = persistMap.get(map)
  if (_status) {
    return _status
  }
  const status: {
    controls: Controls
  } = {
    controls: {},
  }
  persistMap.set(map, status)
  return status
}

export function get(map: Map) {
  const status = persistMap.get(map)
  if (!status) {
    return add(map)
  }
  return status
}

export default persistMap
