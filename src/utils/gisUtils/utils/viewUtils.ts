import type { Map } from 'leaflet'
import { getGeoJsonLayer } from '@/utils/gisUtils'

export function setViewByGeojson(map: Map, geojson: any) {
  const bounds = getGeoJsonLayer(geojson).getBounds()
  map.fitBounds(bounds)
}
