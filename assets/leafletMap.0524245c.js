import{j as U,L as h,M as A,ae as j,O as F,cb as E,aU as V,n as k,s as x,v as P,c as v,w as N,p as $,F as L,bR as R,bS as H,H as q,o as m,r as K,ap as Q,a$ as W}from"./index.7e728817.js";import{m as M,c as i}from"./marker-shadow.f7a7eb00.js";import{l as e}from"./leaflet-src.b950eda2.js";import{F as X,_ as Y}from"./Form.41ba48a9.js";import"./index.98b7851d.js";import"./Col.fdc7c50d.js";import"./responsiveObserve.cc80a954.js";import"./useFlexGapSupport.605984bb.js";import"./toArray.44f743d7.js";import"./get.ce0f27ed.js";import"./hasIn.b550d00f.js";import"./_arrayIncludesWith.40afec22.js";import"./toFinite.196b2311.js";import"./collapseMotion.ccdd79cf.js";const oo=u=>(R("data-v-4fd9077a"),u=u(),H(),u),eo=oo(()=>x("div",{class:"title"},[x("span",null,"\u5C5E\u6027")],-1)),to={props:{geoJsonLayer:{type:e.exports.GeoJSON,default:void 0}},emits:["update:geoJsonLayer"],setup(u,{emit:z}){const p=u,_=new e.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:M,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),J=new e.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:M,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),c="bed806b1ccb34b268ab1c0700123d444";let t;const d=q("$eventBus"),r=h(void 0),b=h(),w=h();A(()=>{d.on("locationGeo",Z),d.on("updateGeojsonLayer",S),G(),j(()=>{C(),B()})}),F(()=>{d.off("locationGeo",Z),d.off("updateGeojsonLayer",S),t&&(t.remove(),t=void 0)});function G(){t=E(e.exports.map(b.value,{attributionControl:!0,zoomControl:!1})),t.setView([35,105],4),z("update:geoJsonLayer",e.exports.geoJSON(void 0,{onEachFeature:I,pointToLayer:(a,o)=>e.exports.marker(o,{icon:_})}).addTo(t))}function C(){e.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:i("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(t),\u9AD8\u5FB7\u5F71\u50CF:e.exports.layerGroup([i("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),i("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u77E2\u91CF:e.exports.layerGroup([i("TianDiTu.Normal.Map",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20}),i("TianDiTu.Normal.Annotation",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:e.exports.layerGroup([i("TianDiTu.Satellite.Map",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20}),i("TianDiTu.Satellite.Annotation",{key:c,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:e.exports.layerGroup([i("TianDiTu.Terrain.Map",{key:c,minZoom:3,maxNativeZoom:14,maxZoom:20}),i("TianDiTu.Terrain.Annotation",{key:c,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:i("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',minZoom:3,maxNativeZoom:19,maxZoom:20})},{\u56FE\u5F62:V(p.geoJsonLayer)},{hideSingleBase:!0,position:"topright"}).addTo(t)}function B(){e.exports.control.scale({imperial:!1,position:"bottomleft"}).addTo(t),e.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"bottomright"}).addTo(t)}function I(a,o){a.properties&&o.bindPopup(w.value).on("popupopen",()=>{r.value=a,o instanceof e.exports.Marker?o.setIcon(J):o.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{r.value=void 0,o instanceof e.exports.Marker?o.setIcon(_):p.geoJsonLayer.resetStyle(o)})}function y(a,o,n){if(a instanceof InputEvent&&o&&n)try{o.properties[n]=JSON.parse(a.currentTarget.value)}catch{o.properties[n]=a.currentTarget.value}d.emit("updateEditor")}function Z(a){try{const n=e.exports.geoJSON(a).getBounds(),l=n.getCenter(),g=t.getBoundsZoom(n);t.setView(l,g>16?16:g)}catch{}}function S(a){if(p.geoJsonLayer&&p.geoJsonLayer instanceof e.exports.GeoJSON){p.geoJsonLayer.clearLayers();try{p.geoJsonLayer.addData(a);const o=p.geoJsonLayer.getBounds(),n=o.getCenter(),l=t.getBoundsZoom(o);t.setView(n,l>16?16:l)}catch(o){console.log(o)}}}return(a,o)=>{var T;const n=Q,l=Y,g=X;return m(),k(L,null,[x("div",{ref_key:"mapContainer",ref:b,class:"mapContainer"},null,512),P(x("div",{ref_key:"propertyPopup",ref:w,class:"propertyPopup"},[eo,(T=r.value)!=null&&T.properties?(m(),v(g,{key:0,"label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:N(()=>[(m(!0),k(L,null,K(r.value.properties,(D,s,O)=>(m(),v(l,{key:"prop"+O,label:s},{default:N(()=>[typeof r.value.properties[s]=="string"?(m(),v(n,{key:0,value:r.value.properties[s],"onUpdate:value":f=>r.value.properties[s]=f,onChange:y},null,8,["value","onUpdate:value"])):typeof r.value.properties[s]=="number"?(m(),v(n,{key:1,value:r.value.properties[s],"onUpdate:value":f=>r.value.properties[s]=f,valueModifiers:{number:!0},onChange:y},null,8,["value","onUpdate:value"])):(m(),v(n,{key:2,value:JSON.stringify(D),onChange:f=>y(f,r.value,s)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):$("",!0)],512),[[W,!1]])],64)}}};var yo=U(to,[["__scopeId","data-v-4fd9077a"]]);export{yo as default};
