import config from '@/config'
import { gaodeToken } from '@/utils/gisUtils'
import $axios from 'axios'
import { LatLng } from 'leaflet'
import { csysConvert } from '../core/leaflet.ChineseLayer'

export async function getLocation(address: string): Promise<{
  latLng: LatLng
  address: string
}> {
  const res = await $axios.get(`${config.apiBaseUrl}/amap/v3/geocode/geo`, {
    params: {
      address,
      key: gaodeToken,
    },
  })
  if (res.data.status === '1' && Number(res.data.count) > 0) {
    const info = res.data.geocodes[0]
    const latLng = csysConvert.gcj02_To_gps84(Number.parseFloat(info.location.split(',')[0]), Number.parseFloat(info.location.split(',')[1]))
    return {
      latLng: new LatLng(latLng.lat, latLng.lng),
      address: info.formatted_address,
    }
  }
  else {
    throw new Error('未找到相关地址。')
  }
}

export async function getAddress(location: LatLng): Promise<string> {
  location = location.wrap()
  const gaodeLatLng = csysConvert.gps84_To_gcj02(location.lng, location.lat)
  const res = await $axios.get(`${config.apiBaseUrl}/amap/v3/geocode/regeo`, {
    params: {
      location: `${gaodeLatLng.lng},${gaodeLatLng.lat}`,
      output: 'json',
      key: gaodeToken,
      homeorcorp: 1,
    },
  })
  if (res.data.status === '1' && res.data.regeocode.formatted_address) {
    return res.data.regeocode.formatted_address
  }
  else {
    throw new Error('未找到相关地址。')
  }
}
