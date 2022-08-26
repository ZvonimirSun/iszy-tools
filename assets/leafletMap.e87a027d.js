import{_ as A,H as U,K as h,L as j,av as F,N as E,bp as V,o as l,m as k,q as g,s as P,c as v,w as N,n as $,F as M,aG as R,p as q,bz as H,bA as K,$ as Q,ad as W}from"./index.990579d2.js";/* empty css               *//* empty css              */import{m as L,c as i}from"./marker-shadow.487ee9b5.js";import{l as e}from"./leaflet-src.fc3d7be0.js";import{F as X}from"./Form.d603feaa.js";import{_ as Y}from"./FormItem.8e404dcb.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./debounce.a7fcd29b.js";import"./Col.061f35a6.js";import"./responsiveObserve.37d831e2.js";import"./useFlexGapSupport.e8901a29.js";import"./toArray.50178d7b.js";import"./get.7858eace.js";import"./hasIn.48d0e63a.js";import"./toInteger.49ec7feb.js";import"./toFinite.46929150.js";import"./collapseMotion.8976f0e9.js";const oo=u=>(H("data-v-2215a1d8"),u=u(),K(),u),eo=oo(()=>g("div",{class:"title"},[g("span",null,"\u5C5E\u6027")],-1)),to={__name:"leafletMap",props:{geoJsonLayer:{type:e.exports.GeoJSON,default:void 0}},emits:["update:geoJsonLayer"],setup(u,{emit:G}){const s=u,x=new e.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.cc/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:L,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),J=new e.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.cc/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:L,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),c="bed806b1ccb34b268ab1c0700123d444";let t;const d=U("$eventBus"),r=h(void 0),b=h(),w=h();j(()=>{d.on("locationGeo",Z),d.on("updateGeojsonLayer",T),z(),F(()=>{C(),B()})}),E(()=>{d.off("locationGeo",Z),d.off("updateGeojsonLayer",T),t&&(t.remove(),t=void 0)});function z(){t=V(e.exports.map(b.value,{attributionControl:!0,zoomControl:!1})),t.setView([35,105],4),G("update:geoJsonLayer",e.exports.geoJSON(void 0,{onEachFeature:I,pointToLayer:(a,o)=>e.exports.marker(o,{icon:x})}).addTo(t))}function C(){e.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:i("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(t),\u9AD8\u5FB7\u5F71\u50CF:e.exports.layerGroup([i("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),i("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u77E2\u91CF:e.exports.layerGroup([i("TianDiTu.Normal.Map",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20}),i("TianDiTu.Normal.Annotation",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:e.exports.layerGroup([i("TianDiTu.Satellite.Map",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20}),i("TianDiTu.Satellite.Annotation",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:e.exports.layerGroup([i("TianDiTu.Terrain.Map",{key:c,minZoom:3,maxNativeZoom:14,maxZoom:20}),i("TianDiTu.Terrain.Annotation",{key:c,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:i("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',minZoom:3,maxNativeZoom:19,maxZoom:20})},{\u56FE\u5F62:R(s.geoJsonLayer)},{hideSingleBase:!0,position:"bottomleft"}).addTo(t)}function B(){e.exports.control.scale({imperial:!1,position:"bottomright"}).addTo(t),e.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"topright"}).addTo(t)}function I(a,o){a.properties&&o.bindPopup(w.value).on("popupopen",()=>{r.value=a,o instanceof e.exports.Marker?o.setIcon(J):o.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{r.value=void 0,o instanceof e.exports.Marker?o.setIcon(x):s.geoJsonLayer.resetStyle(o)})}function y(a,o,n){if(a instanceof InputEvent&&o&&n)try{o.properties[n]=JSON.parse(a.currentTarget.value)}catch{o.properties[n]=a.currentTarget.value}d.emit("updateEditor")}function Z(a){try{const n=e.exports.geoJSON(a).getBounds(),m=n.getCenter(),_=t.getBoundsZoom(n);t.setView(m,_>16?16:_)}catch{}}function T(a){if(s.geoJsonLayer&&s.geoJsonLayer instanceof e.exports.GeoJSON){s.geoJsonLayer.clearLayers();try{s.geoJsonLayer.addData(a);const o=s.geoJsonLayer.getBounds(),n=o.getCenter(),m=t.getBoundsZoom(o);t.setView(n,m>16?16:m)}catch(o){console.log(o)}}}return(a,o)=>{var S;const n=Q,m=Y,_=X;return l(),k(M,null,[g("div",{ref_key:"mapContainer",ref:b,class:"mapContainer"},null,512),P(g("div",{ref_key:"propertyPopup",ref:w,class:"propertyPopup"},[eo,(S=r.value)!=null&&S.properties?(l(),v(_,{key:0,"label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:N(()=>[(l(!0),k(M,null,q(r.value.properties,(D,p,O)=>(l(),v(m,{key:"prop"+O,label:p},{default:N(()=>[typeof r.value.properties[p]=="string"?(l(),v(n,{key:0,value:r.value.properties[p],"onUpdate:value":f=>r.value.properties[p]=f,onChange:y},null,8,["value","onUpdate:value"])):typeof r.value.properties[p]=="number"?(l(),v(n,{key:1,value:r.value.properties[p],"onUpdate:value":f=>r.value.properties[p]=f,valueModifiers:{number:!0},onChange:y},null,8,["value","onUpdate:value"])):(l(),v(n,{key:2,value:JSON.stringify(D),onChange:f=>y(f,r.value,p)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):$("",!0)],512),[[W,!1]])],64)}}};var Zo=A(to,[["__scopeId","data-v-2215a1d8"]]);export{Zo as default};
