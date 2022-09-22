import{_ as V,j as P,r as h,D as $,al as R,U as K,bx as q,o as m,J as M,L as g,a1 as H,c as f,w as N,K as Q,F as L,ay as W,a$ as X,b0 as Y,b1 as oo,I as eo,a2 as to}from"./index.d7a1a0f1.js";/* empty css              *//* empty css               */import{m as J,c as r}from"./marker-shadow.7506daae.js";import{G as z,i as C,j as ao,k as B,m as no,l as b,n as v,M as I}from"./leaflet-src.esm.d774afe4.js";import{F as ro}from"./Form.add1504d.js";import{_ as io}from"./FormItem.9c22706f.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Col.234873ab.js";import"./responsiveObserve.a46000ae.js";import"./useFlexGapSupport.5bbc8dda.js";import"./toArray.eefe39fa.js";import"./get.0562d879.js";import"./hasIn.84555d25.js";import"./toInteger.1215b7ee.js";import"./toFinite.0157ba3a.js";import"./collapseMotion.f45529ed.js";const so=c=>(Y("data-v-937c4026"),c=c(),oo(),c),po=so(()=>g("div",{class:"title"},[g("span",null,"\u5C5E\u6027")],-1)),mo={__name:"leafletMap",props:{geoJsonLayer:{type:z,default:void 0}},emits:["update:geoJsonLayer"],setup(c,{emit:D}){const s=c,w=new C({iconUrl:"https://jsdelivr.cdn.iszy.cc/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:J,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),G=new C({iconUrl:"https://jsdelivr.cdn.iszy.cc/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:J,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),l="bed806b1ccb34b268ab1c0700123d444";let e;const u=P("$eventBus"),n=h(void 0),Z=h(),x=h();$(()=>{u.on("locationGeo",T),u.on("updateGeojsonLayer",k),U(),R(()=>{j(),A()})}),K(()=>{u.off("locationGeo",T),u.off("updateGeojsonLayer",k),e&&(e.remove(),e=void 0)});function U(){e=q(ao(Z.value,{attributionControl:!0,zoomControl:!1})),e.setView([35,105],4),D("update:geoJsonLayer",B(void 0,{onEachFeature:O,pointToLayer:(t,o)=>no(o,{icon:w})}).addTo(e))}function j(){b.layers({\u9AD8\u5FB7\u77E2\u91CF:r("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(e),\u9AD8\u5FB7\u5F71\u50CF:v([r("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),r("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u77E2\u91CF:v([r("TianDiTu.Normal.Map",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20}),r("TianDiTu.Normal.Annotation",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:v([r("TianDiTu.Satellite.Map",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20}),r("TianDiTu.Satellite.Annotation",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:v([r("TianDiTu.Terrain.Map",{key:l,minZoom:3,maxNativeZoom:14,maxZoom:20}),r("TianDiTu.Terrain.Annotation",{key:l,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:r("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',minZoom:3,maxNativeZoom:19,maxZoom:20})},{\u56FE\u5F62:W(s.geoJsonLayer)},{hideSingleBase:!0,position:"bottomleft"}).addTo(e)}function A(){b.scale({imperial:!1,position:"bottomright"}).addTo(e),b.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"topright"}).addTo(e)}function O(t,o){t.properties&&o.bindPopup(x.value).on("popupopen",()=>{n.value=t,o instanceof I?o.setIcon(G):o.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{n.value=void 0,o instanceof I?o.setIcon(w):s.geoJsonLayer.resetStyle(o)})}function y(t,o,a){if(t instanceof InputEvent&&o&&a)try{o.properties[a]=JSON.parse(t.currentTarget.value)}catch{o.properties[a]=t.currentTarget.value}u.emit("updateEditor")}function T(t){try{const a=B(t).getBounds(),p=a.getCenter(),_=e.getBoundsZoom(a);e.setView(p,_>16?16:_)}catch{}}function k(t){if(s.geoJsonLayer&&s.geoJsonLayer instanceof z){s.geoJsonLayer.clearLayers();try{s.geoJsonLayer.addData(t);const o=s.geoJsonLayer.getBounds(),a=o.getCenter(),p=e.getBoundsZoom(o);e.setView(a,p>16?16:p)}catch(o){console.log(o)}}}return(t,o)=>{var S;const a=eo,p=io,_=ro;return m(),M(L,null,[g("div",{ref_key:"mapContainer",ref:Z,class:"mapContainer"},null,512),H(g("div",{ref_key:"propertyPopup",ref:x,class:"propertyPopup"},[po,(S=n.value)!=null&&S.properties?(m(),f(_,{key:0,"label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:N(()=>[(m(!0),M(L,null,X(n.value.properties,(F,i,E)=>(m(),f(p,{key:"prop"+E,label:i},{default:N(()=>[typeof n.value.properties[i]=="string"?(m(),f(a,{key:0,value:n.value.properties[i],"onUpdate:value":d=>n.value.properties[i]=d,onChange:y},null,8,["value","onUpdate:value"])):typeof n.value.properties[i]=="number"?(m(),f(a,{key:1,value:n.value.properties[i],"onUpdate:value":d=>n.value.properties[i]=d,valueModifiers:{number:!0},onChange:y},null,8,["value","onUpdate:value"])):(m(),f(a,{key:2,value:JSON.stringify(F),onChange:d=>y(d,n.value,i)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):Q("",!0)],512),[[to,!1]])],64)}}},Lo=V(mo,[["__scopeId","data-v-937c4026"]]);export{Lo as default};
