import{_ as Q,j,r as M,aM as X,H as Y,a9 as ee,ag as oe,a5 as te,o as i,L as k,M as _,b2 as ae,k as r,c as y,w as l,a1 as Z,a as c,F as G,aD as re,U as A,b as L,bx as ne,V as se,W as pe,I as ie,B as le,b3 as ue}from"./index.4441fc7b.js";/* empty css              *//* empty css               *//* empty css                */import{m as F,c as s}from"./marker-shadow.3f5230ce.js";import{l as o}from"./leaflet-src.41f9cab5.js";import{F as ce,_ as me}from"./Form.3c833048.js";import"./Col.78ee422c.js";import"./responsiveObserve.f43a62a9.js";import"./useFlexGapSupport.a79911df.js";import"./toArray.b4eb4985.js";import"./get.fc66b4b5.js";import"./_baseGet.cdf9511a.js";import"./toString.72481d3c.js";import"./_arrayMap.dc1f124f.js";import"./_flatRest.e9656e1f.js";import"./toInteger.9eb20cb1.js";import"./toFinite.10a20fed.js";import"./_arrayIncludesWith.15e56e3a.js";import"./collapseMotion.624ef29a.js";const E=b=>(se("data-v-7dbdedd9"),b=b(),pe(),b),de=E(()=>_("div",{class:"title"},[_("span",null,"\u5C5E\u6027")],-1)),fe={class:"content"},_e=E(()=>_("span",{class:"i-icon-park-outline-add-one"},null,-1)),ge={class:"btn-container"},ve={__name:"leafletMap",props:{geoJsonLayer:{type:o.exports.GeoJSON,default:void 0}},emits:["update:geoJsonLayer","getMap","getControl"],setup(b,{emit:N}){const m=b,C=new o.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:F,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),P=new o.exports.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:F,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),g="bed806b1ccb34b268ab1c0700123d444";let J,n;const v=j("$eventBus"),V=j("$msg"),a=M(void 0),z=M(),B=M(),d=X({properties:[]}),$=t=>{t.properties.forEach(e=>{e.label&&e.value&&(a.value.properties[e.label]!=null?V.warn("\u5B57\u6BB5 [ "+e.label+" ] \u5B58\u5728\uFF0C\u5DF2\u8DF3\u8FC7"):a.value.properties[e.label]=isNaN(e.value)?e.value:parseFloat(e.value))}),I(),v.emit("updateEditor")};function R(){d.properties.push({label:"",value:"",id:Date.now()})}function I(){d.properties=[]}Y(()=>{v.on("locationGeo",U),v.on("updateGeojsonLayer",D),q(),ee(()=>{H(),W()})}),oe(()=>{v.off("locationGeo",U),v.off("updateGeojsonLayer",D),n&&(n.remove(),n=void 0)});function q(){n=te(o.exports.map(z.value,{attributionControl:!0,zoomControl:!1,minZoom:4,trackResize:!0})),N("getMap",n),n.setView([35,105],4),N("update:geoJsonLayer",o.exports.geoJSON(void 0,{onEachFeature:K,pointToLayer:(t,e)=>o.exports.marker(e,{icon:C})}).addTo(n))}function H(){J=o.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:s("GaoDe.Normal.Map",{maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(n),\u9AD8\u5FB7\u5F71\u50CF:o.exports.layerGroup([s("GaoDe.Satellite.Map",{maxNativeZoom:18,maxZoom:20}),s("GaoDe.Satellite.Annotation",{maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u8C37\u6B4C\u77E2\u91CF:o.exports.layerGroup([s("Google.Normal.Map",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">\u8C37\u6B4C\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u8C37\u6B4C\u5F71\u50CF:o.exports.layerGroup([s("Google.Satellite.Map",{maxZoom:20}),s("Google.Satellite.Annotation",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">\u8C37\u6B4C\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:s("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',maxNativeZoom:19,maxZoom:20}),\u5929\u5730\u56FE\u77E2\u91CF:o.exports.layerGroup([s("TianDiTu.Normal.Map",{key:g,maxNativeZoom:18,maxZoom:20}),s("TianDiTu.Normal.Annotation",{key:g,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:o.exports.layerGroup([s("TianDiTu.Satellite.Map",{key:g,maxNativeZoom:18,maxZoom:20}),s("TianDiTu.Satellite.Annotation",{key:g,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:o.exports.layerGroup([s("TianDiTu.Terrain.Map",{key:g,maxNativeZoom:14,maxZoom:20}),s("TianDiTu.Terrain.Annotation",{key:g,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'})},{\u56FE\u5F62:re(m.geoJsonLayer)},{hideSingleBase:!0,position:"bottomleft"}).addTo(n),N("getControl",J)}function W(){o.exports.control.scale({imperial:!1,position:"bottomright"}).addTo(n),o.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"topright"}).addTo(n)}function K(t,e){t.properties||(t.properties={}),e.bindPopup(B.value).on("popupopen",()=>{a.value=t,e instanceof o.exports.Marker?e.setIcon(P):e.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{a.value=void 0,d.properties=[],e instanceof o.exports.Marker?e.setIcon(C):m.geoJsonLayer.resetStyle(e)})}function S(t,e,u){if(t instanceof InputEvent&&e&&u)try{e.properties[u]=JSON.parse(t.currentTarget.value)}catch{e.properties[u]=t.currentTarget.value}v.emit("updateEditor")}function U(t){try{const e=o.exports.geoJSON(t);n.fitBounds(e.getBounds())}catch{}}function D(t){if(m.geoJsonLayer&&m.geoJsonLayer instanceof o.exports.GeoJSON){m.geoJsonLayer.clearLayers();try{m.geoJsonLayer.addData(t),n.fitBounds(m.geoJsonLayer.getBounds())}catch(e){console.log(e)}}}return(t,e)=>{const u=ie,h=me,O=ce,T=le;return i(),k(G,null,[_("div",{ref_key:"mapContainer",ref:z,class:"map-container"},null,512),ae(_("div",{ref_key:"propertyPopup",ref:B,class:"property-popup"},[de,_("div",fe,[r(a)?.properties&&Object.keys(r(a)?.properties).length?(i(),y(O,{key:0,name:"selected-feature-form","label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:l(()=>[(i(!0),k(G,null,A(r(a).properties,(f,p,x)=>(i(),y(h,{key:"prop"+x,label:p},{default:l(()=>[typeof r(a).properties[p]=="string"?(i(),y(u,{key:0,value:r(a).properties[p],"onUpdate:value":w=>r(a).properties[p]=w,onChange:S},null,8,["value","onUpdate:value"])):typeof r(a).properties[p]=="number"?(i(),y(u,{key:1,value:r(a).properties[p],"onUpdate:value":w=>r(a).properties[p]=w,valueModifiers:{number:!0},onChange:S},null,8,["value","onUpdate:value"])):(i(),y(u,{key:2,value:JSON.stringify(f),onChange:w=>S(w,r(a),p)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):Z("",!0),c(O,{name:"add-property-form",model:r(d),onFinish:$},{default:l(()=>[Object.keys(r(d).properties).length?(i(!0),k(G,{key:0},A(r(d).properties,(f,p)=>(i(),k("div",{key:f.id,class:"form-item-container"},[c(h,{name:["properties",p,"label"],rules:{required:!0,message:"\u5C5E\u6027\u540D\u79F0\u7F3A\u5931"}},{default:l(()=>[c(u,{value:f.label,"onUpdate:value":x=>f.label=x,placeholder:"\u5C5E\u6027\u540D\u79F0"},null,8,["value","onUpdate:value"])]),_:2},1032,["name"]),c(h,{name:["properties",p,"value"],rules:{required:!0,message:"\u5C5E\u6027\u503C\u7F3A\u5931"}},{default:l(()=>[c(u,{value:f.value,"onUpdate:value":x=>f.value=x,placeholder:"\u5C5E\u6027\u503C"},null,8,["value","onUpdate:value"])]),_:2},1032,["name"])]))),128)):Z("",!0),c(h,null,{default:l(()=>[c(T,{type:"dashed",block:"",onClick:R},{default:l(()=>[_e,L("\u65B0\u589E\u5C5E\u6027 ")]),_:1})]),_:1}),Object.keys(r(d).properties).length?(i(),y(h,{key:1},{default:l(()=>[_("div",ge,[c(T,{type:"primary","html-type":"submit"},{default:l(()=>[L(" \u786E\u8BA4 ")]),_:1}),c(T,{onClick:ne(I,["stop"])},{default:l(()=>[L(" \u53D6\u6D88 ")]),_:1},8,["onClick"])])]),_:1})):Z("",!0)]),_:1},8,["model"])])],512),[[ue,!1]])],64)}}},Oe=Q(ve,[["__scopeId","data-v-7dbdedd9"]]);export{Oe as default};
