import $axios from '@/plugins/Axios'
import { CrsUtils } from '@tip-develop/maputils'
import { LatLng } from 'leaflet'
import { gaodeToken } from './common'

export async function getLocation(address: string): Promise<{
  latLng: LatLng
  address: string
}> {
  const res = await $axios.get('https://amap.api.iszy.xyz/v3/geocode/geo', {
    params: {
      address,
      key: gaodeToken,
    },
  })
  if (res.data.status === '1' && Number(res.data.count) > 0) {
    const info = res.data.geocodes[0]
    const [lng, lat] = info.location.split(',')
    const latLng = CrsUtils.transformPoint('gcj02', 'wgs84', [Number.parseFloat(lng), Number.parseFloat(lat)])
    return {
      latLng: new LatLng(latLng[1], latLng[1]),
      address: info.formatted_address,
    }
  }
  else {
    throw new Error('未找到相关地址。')
  }
}

export async function getAddress(location: LatLng): Promise<string> {
  const gaodeLatLng = CrsUtils.transformPoint('wgs84', 'gcj02', [location.lng, location.lat])
  const res = await $axios.get('https://amap.api.iszy.xyz/v3/geocode/regeo', {
    params: {
      location: `${gaodeLatLng[0]},${gaodeLatLng[1]}`,
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
