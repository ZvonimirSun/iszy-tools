import type { ControlPosition, MapOptions } from 'leaflet'

export interface ControlOptions {
  zoom?: boolean | ControlPosition
  scale?: boolean | ControlPosition
}

export interface InitMapOptions {
  dom: HTMLDivElement
  options?: MapOptions
  view: {
    center: [number, number]
    zoom: number
  }
  controls?: ControlOptions
}

export interface ChineseLayerOption {
  type: string
  chinese: true
  options?: any
}

export interface GeneralLayerOption {
  type: string
  url: string
  chinese?: false
  options?: any
}

export type LayerOption = ChineseLayerOption | GeneralLayerOption

export type LayerOptionWithName = LayerOption & { name: string }
export type LayerOptions = LayerOption[]
export interface LayerOptionsWithName {
  layers: LayerOptions
  name: string
}
