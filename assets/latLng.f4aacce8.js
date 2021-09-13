import{I as t,c as e,a,t as o,l as s,m as i}from"./leaflet-src.esm.0ed8e194.js";import{_ as n}from"./container.35c5d4bb.js";import{W as r,B as l,X as m,a9 as p,p as c,j as d,r as u,c as h,w as g,o as v,b as f,k as w,e as y}from"./vendor.2026921e.js";/* empty css              *//* empty css              */import"./index.a20867fc.js";var x="/assets/marker-shadow.264f5c64.png",k=".ant-form[data-v-3761a12c] {\n  margin-bottom: 0.8rem;\n}\n.mapContainer[data-v-3761a12c] {\n  width: 100%;\n  height: calc(100% - 4rem);\n}\n.mapContainer[data-v-3761a12c] .leaflet-popup-content p {\n  font-size: 1.4rem;\n}";const{Item:b}=r,z=new t({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-green.png",shadowUrl:x,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),C=new t({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:x,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),_={name:"latLng",components:{Container:n,Form:r,Item:b,Button:l,Input:m},data:()=>({map:void 0,centerMarker:void 0,clickMarker:void 0,tdtToken:"bed806b1ccb34b268ab1c0700123d444",gaodeToken:"868d6830a7409520ae283cde3a3f84d1",latLng:{lng:"",lat:""},address:""}),mounted(){this.initMap()},methods:{initMap(){this.map=p(e(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1})),this.map.setView([35,105],4),a.layers({"高德矢量":o("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{subdomains:"1234",minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}).addTo(this.map),"高德影像":s([o("https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}",{subdomains:"1234",minZoom:3,maxNativeZoom:18,maxZoom:20}),o("https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{subdomains:"1234",minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}),"天地图矢量":s([o(`https://t{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=vec&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20}),o(`https://t{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=cva&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),"天地图影像":s([o(`https://t{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=img&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20}),o(`https://t{s}.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=cia&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),"天地图地形":s([o(`https://t{s}.tianditu.gov.cn/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=ter&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:14,maxZoom:20}),o(`https://t{s}.tianditu.gov.cn/cta_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=cta&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),OpenStreetMap:o("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者'})},{},{hideSingleBase:!0,position:"topright"}).addTo(this.map),a.scale({imperial:!1,position:"bottomleft"}).addTo(this.map),a.zoom({zoomInTitle:"放大",zoomOutTitle:"缩小",position:"bottomright"}).addTo(this.map),this.centerMarker=p(i(this.map.getCenter(),{icon:z})).addTo(this.map).bindPopup(this.getPopupContent(this.map.getCenter()),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).openPopup(),this.map.on("move",(()=>{this.centerMarker.setLatLng(this.map.getCenter()).getPopup().setContent(this.getPopupContent(this.map.getCenter()))})),this.map.on("click",(t=>{this.clickMarker?this.clickMarker.setLatLng(t.latlng).getPopup().setContent(this.getPopupContent(t.latlng)).openPopup():this.clickMarker=p(i(t.latlng,{icon:C})).addTo(this.map).bindPopup(this.getPopupContent(t.latlng),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).openPopup()})),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((t=>{this.$axios.get("https://amapapi.iszy.xyz/v3/assistant/coordinate/convert",{params:{key:this.gaodeToken,locations:`${t.coords.longitude},${t.coords.latitude}`,coordsys:"gps",output:"json"}}).then((t=>{if(t.data&&"1"===t.data.status){const e=t.data.locations.split(",");this.map.setView([e[1],e[0]],18)}}))}))},getPopupContent(t,e){const a=t.lat;let o=t.lng%360;o<=-180&&(o+=360);let s="";return s+=a>=0?`<p>北纬N: ${Math.abs(a)}</p>`:`<p>南纬S: ${Math.abs(a)}</p>`,s+=o>=0?`<p>东经E: ${Math.abs(o)}</p>`:`<p>西经W: ${Math.abs(o)}</p>`,s+=a>=0?`<p>北纬N: ${this.formatDegree(Math.abs(a))}</p>`:`<p>南纬S: ${this.formatDegree(Math.abs(a))}</p>`,s+=o>=0?`<p>东经E: ${this.formatDegree(o)}</p>`:`<p>西经W: ${this.formatDegree(o)}</p>`,e&&(s+=`<p>地址: ${e}</p>`),s},formatDegree(t){t=Math.abs(t);const e=Math.floor(t),a=Math.floor(60*(t-e)),o=(3600*(t-e)%60).toFixed(2);return e+"° "+(a<10?"0"+a:a)+"' "+(o<10?"0"+o:o)+'" '},async locateLatLng(t={},e){if(null!=t.lng&&null!=t.lat&&""!==t.lng&&""!==t.lat)try{if(!e)try{const a=await this.$axios.get("https://amapapi.iszy.xyz/v3/geocode/regeo",{params:{location:`${t.lng},${t.lat}`,output:"json",key:this.gaodeToken}});"1"===a.data.status&&a.data.regeocode.formatted_address?e=a.data.regeocode.formatted_address:this.$msg.warn("未找到相关地址。")}catch(a){this.$msg.error("查询地址失败！")}this.clickMarker?this.clickMarker.setLatLng(t).getPopup().setContent(this.getPopupContent(t,e)).openPopup():this.clickMarker=p(i(t,{icon:C})).addTo(this.map).bindPopup(this.getPopupContent(t,e),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1,maxWidth:350}).openPopup(),this.map.setView(t,18)}catch(a){this.$msg.error("定位失败!")}},async locateAddress(){if(this.address)try{const t=await this.$axios.get("https://amapapi.iszy.xyz/v3/geocode/geo",{params:{address:this.address,key:this.gaodeToken}});if("1"===t.data.status&&Number(t.data.count)>0){const e=t.data.geocodes[0];await this.locateLatLng({lat:parseFloat(e.location.split(",")[1]),lng:parseFloat(e.location.split(",")[0])},e.formatted_address)}else this.$msg.warn("未找到相关地址。")}catch(t){this.$msg.error("查询地址失败!")}}}};c("data-v-3761a12c");const $=y("解析经纬度"),Z=y("解析地址"),M={class:"mapContainer",ref:"mapContainer"};function T(t,e,a,o,s,i){const n=u("Input"),r=u("Item"),l=u("Button"),m=u("Form"),p=u("container");return v(),h(p,null,{default:g((()=>[f(m,{layout:"inline"},{default:g((()=>[f(r,null,{default:g((()=>[f(n,{value:t.latLng.lat,"onUpdate:value":e[0]||(e[0]=e=>t.latLng.lat=e),valueModifiers:{number:!0},placeholder:"输入纬度"},null,8,["value"])])),_:1}),f(r,null,{default:g((()=>[f(n,{value:t.latLng.lng,"onUpdate:value":e[1]||(e[1]=e=>t.latLng.lng=e),valueModifiers:{number:!0},placeholder:"输入经度"},null,8,["value"])])),_:1}),f(r,null,{default:g((()=>[f(l,{type:"primary",onClick:e[2]||(e[2]=e=>i.locateLatLng(t.latLng))},{default:g((()=>[$])),_:1})])),_:1}),f(r,null,{default:g((()=>[f(n,{value:t.address,"onUpdate:value":e[3]||(e[3]=e=>t.address=e),valueModifiers:{number:!0},placeholder:"输入结构化地址"},null,8,["value"])])),_:1}),f(r,null,{default:g((()=>[f(l,{type:"primary",onClick:i.locateAddress},{default:g((()=>[Z])),_:1},8,["onClick"])])),_:1})])),_:1}),w("div",M,null,512)])),_:1})}d(),_.render=T,_.__scopeId="data-v-3761a12c";export{_ as default};