import{ad as y,bL as l,a8 as s,c as w,b as p,aj as m,a as b,F as x,aM as M,o as T,bI as _,W as C,ak as N,aI as Z}from"./vendor-gU4Z3UCH.js";/* empty css                */import{r as i}from"./common-1spP1o8b.js";import{c as n,C as h}from"./shared/geoJson/latLng-ExUiCCYd.js";import{m as d}from"./marker-shadow-qajquWMY.js";const v=new i.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-green.png",shadowUrl:d,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),z=new i.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:d,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),$={name:"LatLng",data:()=>({map:void 0,centerMarker:void 0,clickMarker:void 0,tdtToken:"bed806b1ccb34b268ab1c0700123d444",gaodeToken:"868d6830a7409520ae283cde3a3f84d1",latLng:{lng:"",lat:""},address:"",keyword:""}),mounted(){this.initMap()},methods:{initMap(){this.map=l(i.map(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1,minZoom:4,trackResize:!0})),this.map.setView([35,105],4),i.control.layers({高德矢量:n("GaoDe.Normal.Map",{maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}).addTo(this.map),高德影像:i.layerGroup([n("GaoDe.Satellite.Map",{maxNativeZoom:18,maxZoom:20}),n("GaoDe.Satellite.Annotation",{maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}),谷歌矢量:i.layerGroup([n("Google.Normal.Map",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者'}),谷歌影像:i.layerGroup([n("Google.Satellite.Map",{maxZoom:20}),n("Google.Satellite.Annotation",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者'}),OpenStreetMap:n("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',maxNativeZoom:19,maxZoom:20}),天地图矢量:i.layerGroup([n("TianDiTu.Normal.Map",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20}),n("TianDiTu.Normal.Annotation",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),天地图影像:i.layerGroup([n("TianDiTu.Satellite.Map",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20}),n("TianDiTu.Satellite.Annotation",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),天地图地形:i.layerGroup([n("TianDiTu.Terrain.Map",{key:this.tdtToken,maxNativeZoom:14,maxZoom:20}),n("TianDiTu.Terrain.Annotation",{key:this.tdtToken,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'})},{},{hideSingleBase:!0,position:"bottomleft"}).addTo(this.map),i.control.scale({imperial:!1,position:"bottomright"}).addTo(this.map),i.control.zoom({zoomInTitle:"放大",zoomOutTitle:"缩小",position:"topright"}).addTo(this.map),this.centerMarker=l(i.marker(this.map.getCenter(),{icon:v})).addTo(this.map).bindPopup(this.getPopupContent(this.map.getCenter()),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).on("popupopen",()=>{this.clickMarker&&this.clickMarker.closePopup()}).openPopup(),this.map.on("move",()=>{this.centerMarker.setLatLng(this.map.getCenter()).getPopup().setContent(this.getPopupContent(this.map.getCenter()))}),this.map.on("click",t=>{this.keyword=`${t.latlng.lng},${t.latlng.lat}`,this.locateLatLng(t.latlng,null,!1)}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t=>{this.keyword||(this.keyword=`${t.coords.longitude},${t.coords.latitude}`),this.map.setView([t.coords.latitude,t.coords.longitude],16)})},getPopupContent(t,e){const o=t.lat;let a=t.lng%360;a<=-180&&(a+=360);let r="";return o>=0?r+=`<p>北纬N: ${Math.abs(o)}</p>`:r+=`<p>南纬S: ${Math.abs(o)}</p>`,a>=0?r+=`<p>东经E: ${Math.abs(a)}</p>`:r+=`<p>西经W: ${Math.abs(a)}</p>`,o>=0?r+=`<p>北纬N: ${this.formatDegree(Math.abs(o))}</p>`:r+=`<p>南纬S: ${this.formatDegree(Math.abs(o))}</p>`,a>=0?r+=`<p>东经E: ${this.formatDegree(a)}</p>`:r+=`<p>西经W: ${this.formatDegree(a)}</p>`,e&&(r+=`<p>地址: ${e}</p>`),r},handler(){if(!this.keyword)return;const t=this.keyword.replace(/，/g,",").split(",");if(t.length===2&&!isNaN(parseFloat(t[0].trim()))&&!isNaN(parseFloat(t[1].trim()))){this.latLng.lng=parseFloat(t[0].trim()),this.latLng.lat=parseFloat(t[1].trim()),this.locateLatLng(this.latLng);return}this.address=this.keyword,this.locateAddress()},async locateLatLng(t={},e,o=!0){if(t.lng!=null&&t.lat!=null&&t.lng!==""&&t.lat!=="")try{if(!e)try{const a=h.prototype.csysConvert.gps84_To_gcj02(t.lng,t.lat),r=await this.$axios.get("https://amap.api.iszy.xyz/v3/geocode/regeo",{params:{location:`${a.lng},${a.lat}`,output:"json",key:this.gaodeToken,homeorcorp:1}});r.data.status==="1"&&r.data.regeocode.formatted_address?e=r.data.regeocode.formatted_address:s.warning("未找到相关地址。")}catch{s.error("查询地址失败！")}this.clickMarker?(this.clickMarker.setLatLng(t).getPopup().setContent(this.getPopupContent(t,e)),this.clickMarker.openPopup()):this.clickMarker=l(i.marker(t,{icon:z})).addTo(this.map).bindPopup(this.getPopupContent(t,e),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1,maxWidth:350}).on("popupopen",()=>{this.centerMarker&&this.centerMarker.closePopup()}).openPopup(),o&&this.map.setView(t,16)}catch{s.error("定位失败!")}},async locateAddress(){if(this.address)try{const t=await this.$axios.get("https://amap.api.iszy.xyz/v3/geocode/geo",{params:{address:this.address,key:this.gaodeToken}});if(t.data.status==="1"&&Number(t.data.count)>0){const e=t.data.geocodes[0],o=h.prototype.csysConvert.gcj02_To_gps84(parseFloat(e.location.split(",")[0]),parseFloat(e.location.split(",")[1]));await this.locateLatLng({lat:o.lat,lng:o.lng},e.formatted_address)}else s.warning("未找到相关地址。")}catch{s.error("查询地址失败!")}},formatDegree(t){t=Math.abs(t);const e=Math.floor(t),o=Math.floor((t-e)*60),a=((t-e)*3600%60).toFixed(2);return e+"° "+(o<10?"0"+o:o)+"' "+(a<10?"0"+a:a)+'" '}}},S={ref:"mapContainer",class:"mapContainer"};function P(t,e,o,a,r,c){const g=N,u=Z,f=M;return T(),w(x,null,[p(f,{size:8,alignment:"center"},{default:m(()=>[p(g,{modelValue:t.keyword,"onUpdate:modelValue":e[0]||(e[0]=k=>t.keyword=k),placeholder:"输入经纬度(如'116.4,36.9')或地址(如'北京市政府')","allow-clear":"",onKeypress:_(c.handler,["enter"])},null,8,["modelValue","onKeypress"]),p(u,{type:"primary",onClick:c.handler},{default:m(()=>[C(" 解析 ")]),_:1},8,["onClick"])]),_:1}),b("div",S,null,512)],64)}const F=y($,[["render",P],["__scopeId","data-v-7e7e7724"]]);export{F as default};
