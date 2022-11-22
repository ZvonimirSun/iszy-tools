import { Bounds, Browser, DomUtil, TileLayer } from 'leaflet'

export const ChineseLayer = TileLayer.extend({
  initialize: function (type, options = {}) { // (type, Object)
    const providers = this.providers

    const parts = type.split('.')

    const providerName = parts[0]
    const mapName = parts[1]
    const mapType = parts[2]

    const url = providers[providerName][mapName][mapType]
    options.subdomains = providers[providerName].Subdomains

    if ('tms' in providers[providerName]) {
      options.tms = providers[providerName].tms
    }

    TileLayer.prototype.initialize.call(this, url, options)
  }
})

export function chineseLayer (type, options = {}) {
  options.csysType = getCsysType(type)
  return new ChineseLayer(type, options)

  // 获取坐标类型
  function getCsysType (type) {
    const parts = type.split('.')
    const providerName = parts[0]
    let zbName = 'wgs84'
    switch (providerName) {
      case 'Geoq':
      case 'GaoDe':
      case 'Google':
        zbName = 'gcj02'
        break
      case 'Baidu':
        zbName = 'bd09'
        break
      case 'OSM':
      case 'TianDiTu':
        zbName = 'wgs84'
        break
    }
    return zbName
  }
}

const pi = Math.PI
const a = 6378245.0
// eslint-disable-next-line @typescript-eslint/no-loss-of-precision
const ee = 0.00669342162296594323
const xPi = pi * 3000.0 / 180.0
// const R = 6378137

ChineseLayer.include({
  providers: {
    TianDiTu: {
      Normal: {
        Map: '//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}',
        Annotation: '//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}'
      },
      Satellite: {
        Map: '//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}',
        Annotation: '//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}'
      },
      Terrain: {
        Map: '//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}',
        Annotation: '//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}'
      },
      Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      key: ''
    },

    GaoDe: {
      Normal: {
        Map: '//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
      },
      Satellite: {
        Map: '//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        Annotation: '//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
      },
      Subdomains: ['1', '2', '3', '4']
    },

    Google: {
      Normal: {
        Map: '//www.google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
      },
      Satellite: {
        Map: '//www.google.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
        Annotation: '//www.google.com/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}'
      },
      Subdomains: []
    },

    Geoq: {
      Normal: {
        Map: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
        PurplishBlue: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
        Gray: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
        Warm: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
      },
      Theme: {
        Hydro: '//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}'
      },
      Subdomains: []
    },

    OSM: {
      Normal: {
        Map: '//{s}.tile.osm.org/{z}/{x}/{y}.png'
      },
      Subdomains: ['a', 'b', 'c']
    },

    Baidu: {
      Normal: {
        Map: '//online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1'
      },
      Satellite: {
        Map: '//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
        Annotation: '//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020'
      },
      Subdomains: '0123456789',
      tms: true
    }
  },
  csysConvert: {
    /** 百度转84 */
    bd09_To_gps84: function (lng, lat) {
      const gcj02 = this.bd09_To_gcj02(lng, lat)
      return this.gcj02_To_gps84(gcj02.lng, gcj02.lat)
    },
    /** 84转百度 */
    gps84_To_bd09: function (lng, lat) {
      const gcj02 = this.gps84_To_gcj02(lng, lat)
      return this.gcj02_To_bd09(gcj02.lng, gcj02.lat)
    },
    /** 84转火星 */
    gps84_To_gcj02: function (lng, lat) {
      let dLat = transformLat(lng - 105.0, lat - 35.0)
      let dLng = transformLng(lng - 105.0, lat - 35.0)
      const radLat = lat / 180.0 * pi
      let magic = Math.sin(radLat)
      magic = 1 - ee * magic * magic
      const sqrtMagic = Math.sqrt(magic)
      dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
      dLng = (dLng * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi)
      const mgLat = lat + dLat
      const mgLng = lng + dLng
      return {
        lng: mgLng,
        lat: mgLat
      }
    },
    /** 火星转84 */
    gcj02_To_gps84: function (lng, lat) {
      const coord = transform(lng, lat)
      const lontitude = lng * 2 - coord.lng
      const latitude = lat * 2 - coord.lat
      return {
        lng: lontitude,
        lat: latitude
      }
    },
    /** 火星转百度 */
    gcj02_To_bd09: function (x, y) {
      const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * xPi)
      const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * xPi)
      const bdLng = z * Math.cos(theta) + 0.0065
      const bdLat = z * Math.sin(theta) + 0.006
      return {
        lng: bdLng,
        lat: bdLat
      }
    },
    /** 百度转火星 */
    bd09_To_gcj02: function (bdLng, bdLat) {
      const x = bdLng - 0.0065
      const y = bdLat - 0.006
      const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xPi)
      const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xPi)
      const ggLng = z * Math.cos(theta)
      const ggLat = z * Math.sin(theta)
      return {
        lng: ggLng,
        lat: ggLat
      }
    }
  },
  _setZoomTransform: function (level, _center, zoom) {
    let center = _center
    if (center != null && this.options) {
      if (this.options.csysType === 'gcj02') {
        center = this.csysConvert.gps84_To_gcj02(_center.lng, _center.lat)
      } else if (this.options.csysType === 'bd09') {
        center = this.csysConvert.gps84_To_bd09(_center.lng, _center.lat)
      }
    }
    const scale = this._map.getZoomScale(zoom, level.zoom)
    const translate = level.origin.multiplyBy(scale)
      .subtract(this._map._getNewPixelOrigin(center, zoom)).round()

    if (Browser.any3d) {
      DomUtil.setTransform(level.el, translate, scale)
    } else {
      DomUtil.setPosition(level.el, translate)
    }
  },
  _getTiledPixelBounds: function (_center) {
    let center = _center
    if (center != null && this.options) {
      if (this.options.csysType === 'gcj02') {
        center = this.csysConvert.gps84_To_gcj02(_center.lng, _center.lat)
      } else if (this.options.csysType === 'bd09') {
        center = this.csysConvert.gps84_To_bd09(_center.lng, _center.lat)
      }
    }
    const map = this._map
    const mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom()
    const scale = map.getZoomScale(mapZoom, this._tileZoom)
    const pixelCenter = map.project(center, this._tileZoom).floor()
    const halfSize = map.getSize().divideBy(scale * 2)

    return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize))
  }
})

function transform (lng, lat) {
  let dLat = transformLat(lng - 105.0, lat - 35.0)
  let dLng = transformLng(lng - 105.0, lat - 35.0)
  const radLat = lat / 180.0 * pi
  let magic = Math.sin(radLat)
  magic = 1 - ee * magic * magic
  const sqrtMagic = Math.sqrt(magic)
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
  dLng = (dLng * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi)
  const mgLat = lat + dLat
  const mgLng = lng + dLng
  return {
    lng: mgLng,
    lat: mgLat
  }
}

function transformLat (x, y) {
  let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x))
  ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0
  ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0
  return ret
}

function transformLng (x, y) {
  let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x))
  ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0
  ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0
  return ret
}
