/* Copyright© 2000 - 2021 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html. */
import L from 'leaflet'
import { GeoJSON as GeoJSONFormat } from '@supermap/iclient-common/format/GeoJSON.js'
import { getMeterPerMapUnit as MeterPerMapUnit } from '@supermap/iclient-common/util/MapCalculateUtil.js'

/**
 * @namespace L.Util
 * @category BaseTypes Util
 */
// eslint-disable-next-line camelcase
export const supermap_callbacks = {}
// eslint-disable-next-line camelcase
L.Util.supermap_callbacks = supermap_callbacks
export const toGeoJSON = function (feature) {
  if (!feature) {
    return feature
  }
  return new GeoJSONFormat().toGeoJSON(feature)
}
export const toSuperMapGeometry = function (geometry) {
  if (!geometry) {
    return geometry
  }
  let result
  const format = new GeoJSONFormat()
  if (['FeatureCollection', 'Feature', 'Geometry'].indexOf(geometry.type) !== -1) {
    result = format.read(geometry, geometry.type)
  } else if (typeof geometry.toGeoJSON === 'function') {
    const geojson = geometry.toGeoJSON()
    result = geojson ? format.read(geojson, geojson.type) : geometry
  }

  let serverResult = result || geometry
  if (L.Util.isArray(result)) {
    if (result.length === 1) {
      serverResult = result[0]
    } else if (result.length > 1) {
      serverResult = []
      result.map(function (item) {
        serverResult.push(item.geometry)
        return item
      })
    }
  }

  return serverResult && serverResult.geometry ? serverResult.geometry : serverResult
}
export const getMeterPerMapUnit = MeterPerMapUnit

export const resolutionToScale = function (resolution, dpi, mapUnit) {
  const inchPerMeter = 1 / 0.0254
  // 地球半径。
  const meterPerMapUnit = getMeterPerMapUnit(mapUnit)
  let scale = resolution * dpi * inchPerMeter * meterPerMapUnit
  scale = 1 / scale
  return scale
}
export const scaleToResolution = function (scale, dpi, mapUnit) {
  const inchPerMeter = 1 / 0.0254
  const meterPerMapUnitValue = getMeterPerMapUnit(mapUnit)
  let resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue
  resolution = 1 / resolution
  return resolution
}

export const GetResolutionFromScaleDpi = function (scale, dpi, coordUnit, datumAxis) {
  let resolution = null
  const ratio = 10000
  // 用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
  datumAxis = datumAxis || 6378137
  coordUnit = coordUnit || ''
  if (scale > 0 && dpi > 0) {
    scale = L.Util.NormalizeScale(scale)
    if (
      coordUnit.toLowerCase() === 'degree' ||
      coordUnit.toLowerCase() === 'degrees' ||
      coordUnit.toLowerCase() === 'dd'
    ) {
      // scale = SuperMap.Util.normalizeScale(scale);
      resolution = (0.0254 * ratio) / dpi / scale / ((Math.PI * 2 * datumAxis) / 360) / ratio
      return resolution
    } else {
      resolution = (0.0254 * ratio) / dpi / scale / ratio
      return resolution
    }
  }
  return -1
}
export const NormalizeScale = function (scale) {
  return scale > 1.0 ? 1.0 / scale : scale
}

L.Util.toGeoJSON = toGeoJSON
L.Util.toSuperMapGeometry = toSuperMapGeometry
L.Util.resolutionToScale = resolutionToScale
L.Util.scaleToResolution = scaleToResolution
L.Util.getMeterPerMapUnit = getMeterPerMapUnit
L.Util.GetResolutionFromScaleDpi = GetResolutionFromScaleDpi
L.Util.NormalizeScale = NormalizeScale
