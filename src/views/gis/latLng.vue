<template>
  <Space
    :size="8"
    align="center"
  >
    <Input
      v-model:value="keyword"
      placeholder="输入经纬度(如'116.4,36.9')或地址(如'北京市政府')"
      allow-clear
      @keypress.enter="handler"
    />
    <Button
      type="primary"
      @click="handler"
    >
      解析
    </Button>
  </Space>
  <div
    ref="mapContainer"
    class="mapContainer"
  />
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { map, control, layerGroup, marker, Icon } from 'leaflet'
import { chineseLayer, ChineseLayer } from '@/utils/leaflet.ChineseLayer.js'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { markRaw } from 'vue'
import { Button, Input, Space } from 'ant-design-vue'

const greenIcon = new Icon({
  iconUrl: 'https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-green.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
const yellowIcon = new Icon({
  iconUrl: 'https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default {
  name: 'LatLng',
  components: {
    Button,
    Input,
    Space
  },
  data: () => ({
    map: undefined,
    centerMarker: undefined,
    clickMarker: undefined,
    tdtToken: 'bed806b1ccb34b268ab1c0700123d444',
    gaodeToken: '868d6830a7409520ae283cde3a3f84d1',

    latLng: {
      lng: '',
      lat: ''
    },
    address: '',
    keyword: ''
  }),
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      this.map = markRaw(map(this.$refs.mapContainer, {
        attributionControl: true,
        zoomControl: false
      }))
      this.map.setView([35, 105], 4)
      control.layers({
        高德矢量: chineseLayer('GaoDe.Normal.Map', {
          minZoom: 3,
          maxNativeZoom: 18,
          maxZoom: 20,
          attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
        }).addTo(this.map),
        高德影像: layerGroup([
          chineseLayer('GaoDe.Satellite.Map', {
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          }),
          chineseLayer('GaoDe.Satellite.Annotation', {
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          })
        ], {
          attribution: '&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'
        }),
        天地图矢量: layerGroup([
          chineseLayer('TianDiTu.Normal.Map', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          }),
          chineseLayer('TianDiTu.Normal.Annotation', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          })
        ], {
          attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
        }),
        天地图影像: layerGroup([
          chineseLayer('TianDiTu.Satellite.Map', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          }),
          chineseLayer('TianDiTu.Satellite.Annotation', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 18,
            maxZoom: 20
          })
        ], {
          attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
        }),
        天地图地形: layerGroup([
          chineseLayer('TianDiTu.Terrain.Map', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 14,
            maxZoom: 20
          }),
          chineseLayer('TianDiTu.Terrain.Annotation', {
            key: this.tdtToken,
            minZoom: 3,
            maxNativeZoom: 14,
            maxZoom: 20
          })
        ], {
          attribution: '&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'
        }),
        OpenStreetMap: chineseLayer('OSM.Normal.Map', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者'
        })
      }, {}, {
        hideSingleBase: true,
        position: 'topright'
      }).addTo(this.map)
      control.scale({
        imperial: false,
        position: 'bottomleft'
      }).addTo(this.map)
      control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        position: 'bottomright'
      }).addTo(this.map)

      this.centerMarker = markRaw(marker(this.map.getCenter(), { icon: greenIcon }))
        .addTo(this.map)
        .bindPopup(this.getPopupContent(this.map.getCenter()), {
          autoPan: false,
          autoClose: false,
          closeOnEscapeKey: false,
          closeOnClick: false
        })
        .on('popupopen', () => {
          if (this.clickMarker) {
            this.clickMarker.closePopup()
          }
        })
        .openPopup()
      this.map.on('move', () => {
        this.centerMarker.setLatLng(this.map.getCenter()).getPopup().setContent(this.getPopupContent(this.map.getCenter()))
      })
      this.map.on('click', (val) => {
        this.keyword = `${val.latlng.lng},${val.latlng.lat}`
        this.locateLatLng(val.latlng, null, false)
      })
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          if (!this.keyword) {
            this.keyword = `${position.coords.longitude},${position.coords.latitude}`
          }
          this.map.setView([position.coords.latitude, position.coords.longitude], 16)
        })
      }
    },
    getPopupContent (latLng, address) {
      const lat = latLng.lat
      let lng = latLng.lng % 360
      if (lng <= -180) {
        lng += 360
      }
      let content = ''
      if (lat >= 0) {
        content += `<p>北纬N: ${Math.abs(lat)}</p>`
      } else {
        content += `<p>南纬S: ${Math.abs(lat)}</p>`
      }
      if (lng >= 0) {
        content += `<p>东经E: ${Math.abs(lng)}</p>`
      } else {
        content += `<p>西经W: ${Math.abs(lng)}</p>`
      }
      if (lat >= 0) {
        content += `<p>北纬N: ${this.formatDegree(Math.abs(lat))}</p>`
      } else {
        content += `<p>南纬S: ${this.formatDegree(Math.abs(lat))}</p>`
      }
      if (lng >= 0) {
        content += `<p>东经E: ${this.formatDegree(lng)}</p>`
      } else {
        content += `<p>西经W: ${this.formatDegree(lng)}</p>`
      }
      if (address) {
        content += `<p>地址: ${address}</p>`
      }
      return content
    },

    handler () {
      if (!this.keyword) {
        return
      }
      const tmp = this.keyword.replace(/，/g, ',').split(',')
      if (tmp.length === 2) {
        if (!isNaN(parseFloat(tmp[0].trim())) && !isNaN(parseFloat(tmp[1].trim()))) {
          this.latLng.lng = parseFloat(tmp[0].trim())
          this.latLng.lat = parseFloat(tmp[1].trim())
          this.locateLatLng(this.latLng)
          return
        }
      }
      this.address = this.keyword
      this.locateAddress()
    },
    async locateLatLng (latLng = {}, address, fly = true) {
      if (latLng.lng != null && latLng.lat != null && latLng.lng !== '' && latLng.lat !== '') {
        try {
          if (!address) {
            try {
              const gaodeLatLng = ChineseLayer.prototype.csysConvert.gps84_To_gcj02(latLng.lng, latLng.lat)
              const res = await this.$axios.get('https://amap.api.iszy.xyz/v3/geocode/regeo', {
                params: {
                  location: `${gaodeLatLng.lng},${gaodeLatLng.lat}`,
                  output: 'json',
                  key: this.gaodeToken,
                  homeorcorp: 1
                }
              })
              if (res.data.status === '1' && res.data.regeocode.formatted_address) {
                address = res.data.regeocode.formatted_address
              } else {
                this.$msg.warn('未找到相关地址。')
              }
            } catch (e) {
              this.$msg.error('查询地址失败！')
            }
          }
          if (this.clickMarker) {
            this.clickMarker
              .setLatLng(latLng)
              .getPopup()
              .setContent(this.getPopupContent(latLng, address))
            this.clickMarker.openPopup()
          } else {
            this.clickMarker = markRaw(marker(latLng, { icon: yellowIcon }))
              .addTo(this.map)
              .bindPopup(this.getPopupContent(latLng, address), {
                autoPan: false,
                autoClose: false,
                closeOnEscapeKey: false,
                closeOnClick: false,
                maxWidth: 350
              })
              .on('popupopen', () => {
                if (this.centerMarker) {
                  this.centerMarker.closePopup()
                }
              })
              .openPopup()
          }
          if (fly) {
            this.map.setView(latLng, 16)
          }
        } catch (e) {
          this.$msg.error('定位失败!')
        }
      }
    },
    async locateAddress () {
      if (this.address) {
        try {
          const res = await this.$axios.get('https://amap.api.iszy.xyz/v3/geocode/geo', {
            params: {
              address: this.address,
              key: this.gaodeToken
            }
          })
          if (res.data.status === '1' && Number(res.data.count) > 0) {
            const info = res.data.geocodes[0]
            const latLng = ChineseLayer.prototype.csysConvert.gcj02_To_gps84(parseFloat(info.location.split(',')[0]), parseFloat(info.location.split(',')[1]))
            await this.locateLatLng({
              lat: latLng.lat,
              lng: latLng.lng
            }, info.formatted_address)
          } else {
            this.$msg.warn('未找到相关地址。')
          }
        } catch (e) {
          this.$msg.error('查询地址失败!')
        }
      }
    },

    formatDegree (value) {
      value = Math.abs(value)
      const v1 = Math.floor(value)// 度
      const v2 = Math.floor((value - v1) * 60) // 分
      const v3 = ((value - v1) * 3600 % 60).toFixed(2) // 秒
      return v1 + '° ' + (v2 < 10 ? '0' + v2 : v2) + '\' ' + (v3 < 10 ? '0' + v3 : v3) + '" '
    }
  }
}
</script>

<style scoped lang="scss">
.ant-space {
  margin-bottom: .8rem;
  width: 100%;

  :deep(.ant-space-item:first-child) {
    flex: 1;
  }
}

.mapContainer {
  width: 100%;
  height: calc(100% - 4rem);

  :deep(.leaflet-popup-content) {
    p {
      font-size: 1.4rem;
      margin: 0 0 .8rem 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
