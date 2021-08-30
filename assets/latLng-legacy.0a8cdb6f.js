!function(){var t=document.createElement("style");t.innerHTML=".ant-form[data-v-9b2ed03c]{margin-bottom:.8rem}.mapContainer[data-v-9b2ed03c]{width:100%;height:calc(100% - 4rem)}.mapContainer[data-v-9b2ed03c] .leaflet-popup-content p{font-size:1.4rem}\n",document.head.appendChild(t),System.register(["./leaflet-src.esm-legacy.3e7f17a4.js","./container-legacy.ef2af940.js","./vendor-legacy.c6a019b7.js","./index-legacy.307817a4.js","./index-legacy.a000b4fb.js","./index-legacy.c3a455d8.js"],(function(t){"use strict";var e,a,o,i,s,n,l,r,m,c,p,d,u,h,g,v,f,w,x,y;return{setters:[function(t){e=t.I,a=t.c,o=t.a,i=t.t,s=t.l,n=t.m},function(t){l=t._},function(t){r=t.P,m=t.V,c=t.Q,p=t.ac,d=t.p,u=t.a,h=t.r,g=t.c,v=t.w,f=t.o,w=t.b,x=t.d,y=t.e},function(){},function(){},function(){}],execute:function(){var b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";const{Item:k}=r,C=new e({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-green.png",shadowUrl:b,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),A=new e({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:b,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),z=t("default",{name:"latLng",components:{Container:l,Form:r,Item:k,Button:m,Input:c},data:()=>({map:void 0,centerMarker:void 0,clickMarker:void 0,tdtToken:"bed806b1ccb34b268ab1c0700123d444",gaodeToken:"868d6830a7409520ae283cde3a3f84d1",latLng:{lng:"",lat:""},address:""}),mounted(){this.initMap()},methods:{initMap(){this.map=p(a(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1})),this.map.setView([35,105],4),o.layers({"高德矢量":i("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{subdomains:"1234",minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}).addTo(this.map),"高德影像":s([i("https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}",{subdomains:"1234",minZoom:3,maxNativeZoom:18,maxZoom:20}),i("https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{subdomains:"1234",minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}),"天地图矢量":s([i(`https://t{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=vec&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20}),i(`https://t{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=cva&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),"天地图影像":s([i(`https://t{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=img&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20}),i(`https://t{s}.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=cia&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),"天地图地形":s([i(`https://t{s}.tianditu.gov.cn/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=ter&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:14,maxZoom:20}),i(`https://t{s}.tianditu.gov.cn/cta_w/wmts?service=wmts&request=GetTile&version=1.0.0&layer=cta&style=default&tilematrixset=w&format=tiles&tilematrix={z}&tilerow={y}&tilecol={x}&tk=${this.tdtToken}`,{subdomains:"01234567",minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),OpenStreetMap:i("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者'})},{},{collapsed:!1,hideSingleBase:!0,position:"topright"}).addTo(this.map),o.scale({imperial:!1,position:"bottomleft"}).addTo(this.map),o.zoom({zoomInTitle:"放大",zoomOutTitle:"缩小",position:"bottomright"}).addTo(this.map),this.centerMarker=p(n(this.map.getCenter(),{icon:C})).addTo(this.map).bindPopup(this.getPopupContent(this.map.getCenter()),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).openPopup(),this.map.on("move",(()=>{this.centerMarker.setLatLng(this.map.getCenter()).getPopup().setContent(this.getPopupContent(this.map.getCenter()))})),this.map.on("click",(t=>{this.clickMarker?this.clickMarker.setLatLng(t.latlng).getPopup().setContent(this.getPopupContent(t.latlng)).openPopup():this.clickMarker=p(n(t.latlng,{icon:A})).addTo(this.map).bindPopup(this.getPopupContent(t.latlng),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1}).openPopup()})),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((t=>{this.map.setView([t.coords.latitude,t.coords.longitude],18)}))},getPopupContent(t,e){const a=t.lat;let o=t.lng%360;o<=-180&&(o+=360);let i="";return i+=a>=0?`<p>北纬N: ${Math.abs(a)}</p>`:`<p>南纬S: ${Math.abs(a)}</p>`,i+=o>=0?`<p>东经E: ${Math.abs(o)}</p>`:`<p>西经W: ${Math.abs(o)}</p>`,i+=a>=0?`<p>北纬N: ${this.formatDegree(Math.abs(a))}</p>`:`<p>南纬S: ${this.formatDegree(Math.abs(a))}</p>`,i+=o>=0?`<p>东经E: ${this.formatDegree(o)}</p>`:`<p>西经W: ${this.formatDegree(o)}</p>`,e&&(i+=`<p>地址: ${e}</p>`),i},formatDegree(t){t=Math.abs(t);const e=Math.floor(t),a=Math.floor(60*(t-e)),o=(3600*(t-e)%60).toFixed(2);return e+"° "+(a<10?"0"+a:a)+"' "+(o<10?"0"+o:o)+'" '},async locateLatLng(t={},e){if(null!=t.lng&&null!=t.lat&&""!==t.lng&&""!==t.lat)try{try{const a=await this.$axios.get("https://restapi.amap.com/v3/geocode/regeo",{params:{location:`${t.lng},${t.lat}`,output:"json",key:this.gaodeToken}});"1"===a.data.status&&a.data.regeocode.formatted_address?e=a.data.regeocode.formatted_address:this.$msg.warn("未找到相关地址。")}catch(a){this.$msg.error("查询地址失败！")}this.clickMarker?this.clickMarker.setLatLng(t).getPopup().setContent(this.getPopupContent(t,e)).openPopup():this.clickMarker=p(n(t,{icon:A})).addTo(this.map).bindPopup(this.getPopupContent(t,e),{autoPan:!1,autoClose:!1,closeOnEscapeKey:!1,closeOnClick:!1,maxWidth:350}).openPopup(),this.map.setView(t,18)}catch(a){this.$msg.error("定位失败!")}},async locateAddress(){if(this.address)try{const t=await this.$axios.get("https://restapi.amap.com/v3/geocode/geo",{params:{address:this.address,key:this.gaodeToken}});if("1"===t.data.status&&Number(t.data.count)>0){const e=t.data.geocodes[0];await this.locateLatLng({lat:parseFloat(e.location.split(",")[1]),lng:parseFloat(e.location.split(",")[0])},e.formatted_address)}else this.$msg.warn("未找到相关地址。")}catch(t){this.$msg.error("查询地址失败!")}}}});d("data-v-9b2ed03c");const M=y("解析经纬度"),S=y("解析地址"),T={class:"mapContainer",ref:"mapContainer"};u(),z.render=function(t,e,a,o,i,s){const n=h("Input"),l=h("Item"),r=h("Button"),m=h("Form"),c=h("container");return f(),g(c,null,{default:v((()=>[w(m,{layout:"inline"},{default:v((()=>[w(l,null,{default:v((()=>[w(n,{value:t.latLng.lat,"onUpdate:value":e[0]||(e[0]=e=>t.latLng.lat=e),valueModifiers:{number:!0},placeholder:"输入纬度"},null,8,["value"])])),_:1}),w(l,null,{default:v((()=>[w(n,{value:t.latLng.lng,"onUpdate:value":e[1]||(e[1]=e=>t.latLng.lng=e),valueModifiers:{number:!0},placeholder:"输入经度"},null,8,["value"])])),_:1}),w(l,null,{default:v((()=>[w(r,{type:"primary",onClick:e[2]||(e[2]=e=>s.locateLatLng(t.latLng))},{default:v((()=>[M])),_:1})])),_:1}),w(l,null,{default:v((()=>[w(n,{value:t.address,"onUpdate:value":e[3]||(e[3]=e=>t.address=e),valueModifiers:{number:!0},placeholder:"输入结构化地址"},null,8,["value"])])),_:1}),w(l,null,{default:v((()=>[w(r,{type:"primary",onClick:s.locateAddress},{default:v((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1}),x("div",T,null,512)])),_:1})},z.__scopeId="data-v-9b2ed03c"}}}))}();
