import type { GeoJSON, LatLng, Layer } from 'leaflet'
import { geoJSON, marker } from 'leaflet'

export function getGeoJsonLayer({ geojson, onEachFeature, pointToLayer }: {
  geojson?: any
  onEachFeature?: (...args: any[]) => any
  pointToLayer?: (_feature: any, latLng: LatLng) => Layer
} = {}): GeoJSON {
  return geoJSON(geojson, {
    onEachFeature,
    pointToLayer: pointToLayer ?? defaultPointToLayer,
  })
}

function defaultPointToLayer(_feature: any, latLng: LatLng) {
  return marker(latLng)
}
