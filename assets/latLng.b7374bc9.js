import{_ as k,bv as i,o as y,L as _,a as p,w as c,M as x,F as w,bZ as b,b as M,I as T,B as v}from"./index.1467a21b.js";import{_ as C}from"./index.11edb692.js";import{m as h,c as n,C as m}from"./marker-shadow.006345f0.js";import{l as r}from"./leaflet-src.ae6309f0.js";import"./useFlexGapSupport.492ea448.js";const N=new r.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-green.png",shadowUrl:h,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),Z=new r.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:h,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),$={name:"LatLng",data:()=>({map:void 0,centerMarker:void 0,clickMarker:void 0,tdtToken:"bed806b1ccb34b268ab1c0700123d444",gaodeToken:"868d6830a7409520ae283cde3a3f84d1",latLng:{lng:"",lat:""},address:"",keyword:""}),mounted(){this.initMap()},methods:{initMap(){this.map=i(r.exports.map(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1,minZoom:4})),this.map.setView([35,105],4),r.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:n("GaoDe.Normal.Map",{maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(this.map),\u9AD8\u5FB7\u5F71\u50CF:r.exports.layerGroup([n("GaoDe.Satellite.Map",{maxNativeZoom:18,maxZoom:20}),n("GaoDe.Satellite.Annotation",{maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u8C37\u6B4C\u77E2\u91CF:r.exports.layerGroup([n("Google.Normal.Map",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">\u8C37\u6B4C\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u8C37\u6B4C\u5F71\u50CF:r.exports.layerGroup([n("Google.Satellite.Map",{maxZoom:20}),n("Google.Satellite.Annotation",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">\u8C37\u6B4C\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:n("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',maxNativeZoom:19,maxZoom:20}),\u5929\u5730\u56FE\u77E2\u91CF:r.exports.layerGroup([n("TianDiTu.Normal.Map",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20}),n("TianDiTu.Normal.Annotation",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:r.exports.layerGroup([n("TianDiTu.Satellite.Map",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20}),n("TianDiTu.Satellite.Annotation",{key:this.tdtToken,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:r.exports.layerGroup([n("TianDiTu.Terrain.Map",{key:this.tdtToken,maxNativeZoom:14,maxZoom:20}),n("TianDiTu.Terrain.Annotation",{key:this.tdtToken,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'})},{},{hideSingleBase:!0,position:"bottomleft"}).addTo(this.map),r.exports.control.scale({imperial:!1,position:"bottomright"}).addTo(this.map),r.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"topright"}).addTo(this.map),this.centerMarker=i(r.exports.marker(this.map.getCenter(),{icon:N})).addTo(this.map).bindPopup(this.getPopupContent(this.map.getCenter()),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).on("popupopen",()=>{this.clickMarker&&this.clickMarker.closePopup()}).openPopup(),this.map.on("move",()=>{this.centerMarker.setLatLng(this.map.getCenter()).getPopup().setContent(this.getPopupContent(this.map.getCenter()))}),this.map.on("click",t=>{this.keyword=`${t.latlng.lng},${t.latlng.lat}`,this.locateLatLng(t.latlng,null,!1)}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t=>{this.keyword||(this.keyword=`${t.coords.longitude},${t.coords.latitude}`),this.map.setView([t.coords.latitude,t.coords.longitude],16)})},getPopupContent(t,e){const a=t.lat;let o=t.lng%360;o<=-180&&(o+=360);let s="";return a>=0?s+=`<p>\u5317\u7EACN: ${Math.abs(a)}</p>`:s+=`<p>\u5357\u7EACS: ${Math.abs(a)}</p>`,o>=0?s+=`<p>\u4E1C\u7ECFE: ${Math.abs(o)}</p>`:s+=`<p>\u897F\u7ECFW: ${Math.abs(o)}</p>`,a>=0?s+=`<p>\u5317\u7EACN: ${this.formatDegree(Math.abs(a))}</p>`:s+=`<p>\u5357\u7EACS: ${this.formatDegree(Math.abs(a))}</p>`,o>=0?s+=`<p>\u4E1C\u7ECFE: ${this.formatDegree(o)}</p>`:s+=`<p>\u897F\u7ECFW: ${this.formatDegree(o)}</p>`,e&&(s+=`<p>\u5730\u5740: ${e}</p>`),s},handler(){if(!this.keyword)return;const t=this.keyword.replace(/，/g,",").split(",");if(t.length===2&&!isNaN(parseFloat(t[0].trim()))&&!isNaN(parseFloat(t[1].trim()))){this.latLng.lng=parseFloat(t[0].trim()),this.latLng.lat=parseFloat(t[1].trim()),this.locateLatLng(this.latLng);return}this.address=this.keyword,this.locateAddress()},async locateLatLng(t={},e,a=!0){if(t.lng!=null&&t.lat!=null&&t.lng!==""&&t.lat!=="")try{if(!e)try{const o=m.prototype.csysConvert.gps84_To_gcj02(t.lng,t.lat),s=await this.$axios.get("https://amap.api.iszy.xyz/v3/geocode/regeo",{params:{location:`${o.lng},${o.lat}`,output:"json",key:this.gaodeToken,homeorcorp:1}});s.data.status==="1"&&s.data.regeocode.formatted_address?e=s.data.regeocode.formatted_address:this.$msg.warn("\u672A\u627E\u5230\u76F8\u5173\u5730\u5740\u3002")}catch{this.$msg.error("\u67E5\u8BE2\u5730\u5740\u5931\u8D25\uFF01")}this.clickMarker?(this.clickMarker.setLatLng(t).getPopup().setContent(this.getPopupContent(t,e)),this.clickMarker.openPopup()):this.clickMarker=i(r.exports.marker(t,{icon:Z})).addTo(this.map).bindPopup(this.getPopupContent(t,e),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1,maxWidth:350}).on("popupopen",()=>{this.centerMarker&&this.centerMarker.closePopup()}).openPopup(),a&&this.map.setView(t,16)}catch{this.$msg.error("\u5B9A\u4F4D\u5931\u8D25!")}},async locateAddress(){if(this.address)try{const t=await this.$axios.get("https://amap.api.iszy.xyz/v3/geocode/geo",{params:{address:this.address,key:this.gaodeToken}});if(t.data.status==="1"&&Number(t.data.count)>0){const e=t.data.geocodes[0],a=m.prototype.csysConvert.gcj02_To_gps84(parseFloat(e.location.split(",")[0]),parseFloat(e.location.split(",")[1]));await this.locateLatLng({lat:a.lat,lng:a.lng},e.formatted_address)}else this.$msg.warn("\u672A\u627E\u5230\u76F8\u5173\u5730\u5740\u3002")}catch{this.$msg.error("\u67E5\u8BE2\u5730\u5740\u5931\u8D25!")}},formatDegree(t){t=Math.abs(t);const e=Math.floor(t),a=Math.floor((t-e)*60),o=((t-e)*3600%60).toFixed(2);return e+"\xB0 "+(a<10?"0"+a:a)+"' "+(o<10?"0"+o:o)+'" '}}},z={ref:"mapContainer",class:"mapContainer"};function S(t,e,a,o,s,l){const d=T,g=v,u=C;return y(),_(w,null,[p(u,{size:8,align:"center"},{default:c(()=>[p(d,{value:t.keyword,"onUpdate:value":e[0]||(e[0]=f=>t.keyword=f),placeholder:"\u8F93\u5165\u7ECF\u7EAC\u5EA6(\u5982'116.4,36.9')\u6216\u5730\u5740(\u5982'\u5317\u4EAC\u5E02\u653F\u5E9C')","allow-clear":"",onKeypress:b(l.handler,["enter"])},null,8,["value","onKeypress"]),p(g,{type:"primary",onClick:l.handler},{default:c(()=>[M(" \u89E3\u6790 ")]),_:1},8,["onClick"])]),_:1}),x("div",z,null,512)],64)}const F=k($,[["render",S],["__scopeId","data-v-7ff716ad"]]);export{F as default};
