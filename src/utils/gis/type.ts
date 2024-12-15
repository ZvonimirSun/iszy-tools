import type { Control, ControlPosition } from 'leaflet'

export interface ControlOptions {
  zoom?: boolean | ControlPosition
  scale?: boolean | ControlPosition
}

export interface Controls {
  layers?: Control.Layers
  zoom?: Control.Zoom
  scale?: Control.Scale
}

export interface InitMapOptions {
  dom: HTMLDivElement
  view?: {
    center: [number, number]
    zoom: number
  }
  controls?: ControlOptions
}
