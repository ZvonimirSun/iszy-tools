import{_ as U,I as A,L as x,M as j,ar as F,O as E,bm as V,ap as P,o as m,n as k,s as g,v as R,c as v,w as N,p as $,F as M,bx as q,by as H,q as K,S as Q,ad as W}from"./index.41cdb11f.js";/* empty css               *//* empty css              */import{m as L,c as i}from"./marker-shadow.3e873c67.js";import{l as e}from"./leaflet-src.6560a1b9.js";import{F as X,_ as Y}from"./Form.308e1db7.js";import"./Col.02153a99.js";import"./responsiveObserve.4a2d86ec.js";import"./useFlexGapSupport.07774eee.js";import"./toArray.09ef8734.js";import"./get.01c3a585.js";import"./hasIn.c3b88e88.js";import"./_arrayIncludesWith.15e56e3a.js";import"./toFinite.44c8dd4a.js";import"./collapseMotion.e6bf9a06.js";import"./debounce.d67c9d94.js";const oo=u=>(q("data-v-256c3158"),u=u(),H(),u),eo=oo(()=>g("div",{class:"title"},[g("span",null,"\u5C5E\u6027")],-1)),to={props:{geoJsonLayer:{type:e.exports.GeoJSON,default:void 0}},emits:["update:geoJsonLayer"],setup(u,{emit:J}){const p=u,h=new e.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.cc/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:L,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),G=new e.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.cc/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:L,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),c="bed806b1ccb34b268ab1c0700123d444";let t;const d=A("$eventBus"),r=x(void 0),b=x(),w=x();j(()=>{d.on("locationGeo",Z),d.on("updateGeojsonLayer",S),z(),F(()=>{C(),I()})}),E(()=>{d.off("locationGeo",Z),d.off("updateGeojsonLayer",S),t&&(t.remove(),t=void 0)});function z(){t=V(e.exports.map(b.value,{attributionControl:!0,zoomControl:!1})),t.setView([35,105],4),J("update:geoJsonLayer",e.exports.geoJSON(void 0,{onEachFeature:B,pointToLayer:(a,o)=>e.exports.marker(o,{icon:h})}).addTo(t))}function C(){e.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:i("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(t),\u9AD8\u5FB7\u5F71\u50CF:e.exports.layerGroup([i("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),i("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u77E2\u91CF:e.exports.layerGroup([i("TianDiTu.Normal.Map",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20}),i("TianDiTu.Normal.Annotation",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:e.exports.layerGroup([i("TianDiTu.Satellite.Map",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20}),i("TianDiTu.Satellite.Annotation",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:e.exports.layerGroup([i("TianDiTu.Terrain.Map",{key:c,minZoom:3,maxNativeZoom:14,maxZoom:20}),i("TianDiTu.Terrain.Annotation",{key:c,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:i("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',minZoom:3,maxNativeZoom:19,maxZoom:20})},{\u56FE\u5F62:P(p.geoJsonLayer)},{hideSingleBase:!0,position:"bottomleft"}).addTo(t)}function I(){e.exports.control.scale({imperial:!1,position:"bottomright"}).addTo(t),e.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"topright"}).addTo(t)}function B(a,o){a.properties&&o.bindPopup(w.value).on("popupopen",()=>{r.value=a,o instanceof e.exports.Marker?o.setIcon(G):o.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{r.value=void 0,o instanceof e.exports.Marker?o.setIcon(h):p.geoJsonLayer.resetStyle(o)})}function y(a,o,n){if(a instanceof InputEvent&&o&&n)try{o.properties[n]=JSON.parse(a.currentTarget.value)}catch{o.properties[n]=a.currentTarget.value}d.emit("updateEditor")}function Z(a){try{const n=e.exports.geoJSON(a).getBounds(),l=n.getCenter(),_=t.getBoundsZoom(n);t.setView(l,_>16?16:_)}catch{}}function S(a){if(p.geoJsonLayer&&p.geoJsonLayer instanceof e.exports.GeoJSON){p.geoJsonLayer.clearLayers();try{p.geoJsonLayer.addData(a);const o=p.geoJsonLayer.getBounds(),n=o.getCenter(),l=t.getBoundsZoom(o);t.setView(n,l>16?16:l)}catch(o){console.log(o)}}}return(a,o)=>{var T;const n=Q,l=Y,_=X;return m(),k(M,null,[g("div",{ref_key:"mapContainer",ref:b,class:"mapContainer"},null,512),R(g("div",{ref_key:"propertyPopup",ref:w,class:"propertyPopup"},[eo,(T=r.value)!=null&&T.properties?(m(),v(_,{key:0,"label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:N(()=>[(m(!0),k(M,null,K(r.value.properties,(D,s,O)=>(m(),v(l,{key:"prop"+O,label:s},{default:N(()=>[typeof r.value.properties[s]=="string"?(m(),v(n,{key:0,value:r.value.properties[s],"onUpdate:value":f=>r.value.properties[s]=f,onChange:y},null,8,["value","onUpdate:value"])):typeof r.value.properties[s]=="number"?(m(),v(n,{key:1,value:r.value.properties[s],"onUpdate:value":f=>r.value.properties[s]=f,valueModifiers:{number:!0},onChange:y},null,8,["value","onUpdate:value"])):(m(),v(n,{key:2,value:JSON.stringify(D),onChange:f=>y(f,r.value,s)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):$("",!0)],512),[[W,!1]])],64)}}};var ho=U(to,[["__scopeId","data-v-256c3158"]]);export{ho as default};