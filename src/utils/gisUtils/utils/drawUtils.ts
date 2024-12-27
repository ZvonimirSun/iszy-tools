import type { GeoJSON, Layer, Map } from 'leaflet'
import { circle } from '@turf/turf'
import L from 'leaflet'

export function initDrawLayer(layer: Layer, {
  onChange,
}: {
  onChange: (layer: L.Layer) => void
}) {
  layer.on('pm:change', ({ layer }) => {
    onChange(layer)
  })
}

export function initDrawMap(map: Map, geoJsonLayer: GeoJSON, {
  onCreate,
  onRemove,
  onChange,
}: {
  onCreate?: (layer: L.Layer) => void
  onRemove?: (layer: L.Layer) => void
  onChange?: (layer: L.Layer) => void
} = {}) {
  if (!map.pm) {
    L.PM.reInitLayer(map as any)
  }
  map.pm.setLang('zh')
  map.pm.setGlobalOptions({
    layerGroup: geoJsonLayer,
  })
  map.pm.addControls({
    position: 'topright',
    drawCircleMarker: false,
    drawText: false,
    rotateMode: true,
  })
  if (onCreate) {
    map.on('pm:create', ({ shape, layer }) => {
      onAdd({ shape, layer })
      onCreate(layer)
    })
    map.on('pm:cut', ({ layer }) => {
      onAdd({ layer })
      onCreate(layer)
    })
  }
  if (onRemove) {
    map.on('pm:remove', ({ layer }) => {
      onRemove(layer)
    })
  }
  if (onChange) {
    map.on('pm:create', ({ shape, layer }) => {
      onAdd({ shape, layer })
      onChange(layer)
    })
    map.on('pm:cut', ({ layer }) => {
      onChange(layer)
    })
    map.on('pm:remove', ({ layer }) => {
      onChange(layer)
    })
  }
  function onAdd({ shape, layer }: { shape?: string, layer: Layer }) {
    if (shape === 'Circle') {
      const marker = layer as any
      const latLng = marker.getLatLng()
      const radius = marker.getRadius()
      geoJsonLayer.addData(circle([latLng.lng, latLng.lat], radius / 1000))
    }
    else {
      geoJsonLayer.addData((layer as GeoJSON).toGeoJSON())
    }
    geoJsonLayer.removeLayer(layer)
  }
}
