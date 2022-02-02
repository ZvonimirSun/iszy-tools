import{m as c,c as r,C as d}from"./marker-shadow.fa7be158.js";import{l as n}from"./leaflet-src.8440f9fd.js";import{$ as y,ad as x,af as w,m as i,c as _,f as p,u as h,a as T,D as b,r as l,o as M,aB as v,E as C}from"./vendor.1cb08c69.js";/* empty css                */import{_ as Z}from"./index.82786d94.js";const $=new n.exports.Icon({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-green.png",shadowUrl:c,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),N=new n.exports.Icon({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:c,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),S={name:"latLng",components:{Button:y,Input:x,Space:w},data:()=>({map:void 0,centerMarker:void 0,clickMarker:void 0,tdtToken:"bed806b1ccb34b268ab1c0700123d444",gaodeToken:"868d6830a7409520ae283cde3a3f84d1",latLng:{lng:"",lat:""},address:"",keyword:""}),mounted(){this.initMap()},methods:{initMap(){this.map=i(n.exports.map(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1})),this.map.setView([35,105],4),n.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:r("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(this.map),\u9AD8\u5FB7\u5F71\u50CF:n.exports.layerGroup([r("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),r("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u77E2\u91CF:n.exports.layerGroup([r("TianDiTu.Normal.Map",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20}),r("TianDiTu.Normal.Annotation",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:n.exports.layerGroup([r("TianDiTu.Satellite.Map",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20}),r("TianDiTu.Satellite.Annotation",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:n.exports.layerGroup([r("TianDiTu.Terrain.Map",{key:this.tdtToken,minZoom:3,maxNativeZoom:14,maxZoom:20}),r("TianDiTu.Terrain.Annotation",{key:this.tdtToken,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:r("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005'})},{},{hideSingleBase:!0,position:"topright"}).addTo(this.map),n.exports.control.scale({imperial:!1,position:"bottomleft"}).addTo(this.map),n.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"bottomright"}).addTo(this.map),this.centerMarker=i(n.exports.marker(this.map.getCenter(),{icon:$})).addTo(this.map).bindPopup(this.getPopupContent(this.map.getCenter()),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).on("popupopen",()=>{this.clickMarker&&this.clickMarker.closePopup()}).openPopup(),this.map.on("move",()=>{this.centerMarker.setLatLng(this.map.getCenter()).getPopup().setContent(this.getPopupContent(this.map.getCenter()))}),this.map.on("click",t=>{this.keyword=`${t.latlng.lng},${t.latlng.lat}`,this.locateLatLng(t.latlng,null,!1)}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t=>{this.keyword||(this.keyword=`${t.coords.longitude},${t.coords.latitude}`),this.map.setView([t.coords.latitude,t.coords.longitude],16)})},getPopupContent(t,e){const a=t.lat;let o=t.lng%360;o<=-180&&(o+=360);let s="";return a>=0?s+=`<p>\u5317\u7EACN: ${Math.abs(a)}</p>`:s+=`<p>\u5357\u7EACS: ${Math.abs(a)}</p>`,o>=0?s+=`<p>\u4E1C\u7ECFE: ${Math.abs(o)}</p>`:s+=`<p>\u897F\u7ECFW: ${Math.abs(o)}</p>`,a>=0?s+=`<p>\u5317\u7EACN: ${this.formatDegree(Math.abs(a))}</p>`:s+=`<p>\u5357\u7EACS: ${this.formatDegree(Math.abs(a))}</p>`,o>=0?s+=`<p>\u4E1C\u7ECFE: ${this.formatDegree(o)}</p>`:s+=`<p>\u897F\u7ECFW: ${this.formatDegree(o)}</p>`,e&&(s+=`<p>\u5730\u5740: ${e}</p>`),s},handler(){if(!this.keyword)return;const t=this.keyword.replace(/，/g,",").split(",");if(t.length===2&&!isNaN(parseFloat(t[0].trim()))&&!isNaN(parseFloat(t[1].trim()))){this.latLng.lng=parseFloat(t[0].trim()),this.latLng.lat=parseFloat(t[1].trim()),this.locateLatLng(this.latLng);return}this.address=this.keyword,this.locateAddress()},async locateLatLng(t={},e,a=!0){if(t.lng!=null&&t.lat!=null&&t.lng!==""&&t.lat!=="")try{if(!e)try{const o=d.prototype.csysConvert.gps84_To_gcj02(t.lng,t.lat),s=await this.$axios.get("https://amap.api.iszy.xyz/v3/geocode/regeo",{params:{location:`${o.lng},${o.lat}`,output:"json",key:this.gaodeToken,homeorcorp:1}});s.data.status==="1"&&s.data.regeocode.formatted_address?e=s.data.regeocode.formatted_address:this.$msg.warn("\u672A\u627E\u5230\u76F8\u5173\u5730\u5740\u3002")}catch{this.$msg.error("\u67E5\u8BE2\u5730\u5740\u5931\u8D25\uFF01")}this.clickMarker?(this.clickMarker.setLatLng(t).getPopup().setContent(this.getPopupContent(t,e)),this.clickMarker.openPopup()):this.clickMarker=i(n.exports.marker(t,{icon:N})).addTo(this.map).bindPopup(this.getPopupContent(t,e),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1,maxWidth:350}).on("popupopen",()=>{this.centerMarker&&this.centerMarker.closePopup()}).openPopup(),a&&this.map.setView(t,16)}catch{this.$msg.error("\u5B9A\u4F4D\u5931\u8D25!")}},async locateAddress(){if(this.address)try{const t=await this.$axios.get("https://amap.api.iszy.xyz/v3/geocode/geo",{params:{address:this.address,key:this.gaodeToken}});if(t.data.status==="1"&&Number(t.data.count)>0){const e=t.data.geocodes[0],a=d.prototype.csysConvert.gcj02_To_gps84(parseFloat(e.location.split(",")[0]),parseFloat(e.location.split(",")[1]));await this.locateLatLng({lat:a.lat,lng:a.lng},e.formatted_address)}else this.$msg.warn("\u672A\u627E\u5230\u76F8\u5173\u5730\u5740\u3002")}catch{this.$msg.error("\u67E5\u8BE2\u5730\u5740\u5931\u8D25!")}},formatDegree(t){t=Math.abs(t);const e=Math.floor(t),a=Math.floor((t-e)*60),o=((t-e)*3600%60).toFixed(2);return e+"\xB0 "+(a<10?"0"+a:a)+"' "+(o<10?"0"+o:o)+'" '}}},P=C("\u89E3\u6790"),z={class:"mapContainer",ref:"mapContainer"};function D(t,e,a,o,s,m){const g=l("Input"),u=l("Button"),f=l("Space");return M(),_(b,null,[p(f,{size:8,align:"center"},{default:h(()=>[p(g,{value:t.keyword,"onUpdate:value":e[0]||(e[0]=k=>t.keyword=k),placeholder:"\u8F93\u5165\u7ECF\u7EAC\u5EA6(\u5982'116.4,36.9')\u6216\u5730\u5740(\u5982'\u5317\u4EAC\u5E02\u653F\u5E9C')",onKeypress:v(m.handler,["enter"]),"allow-clear":""},null,8,["value","onKeypress"]),p(u,{onClick:m.handler,type:"primary"},{default:h(()=>[P]),_:1},8,["onClick"])]),_:1}),T("div",z,null,512)],64)}var F=Z(S,[["render",D],["__scopeId","data-v-76262702"]]);export{F as default};
