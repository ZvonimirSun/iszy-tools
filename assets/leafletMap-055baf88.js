import{_ as K,a3 as Q,y as M,a7 as W,R as X,ao as Y,a9 as ee,S as oe,o as i,l as x,m as _,T as ae,n,c as h,w as p,s as Z,a as c,H as V,A as te,au as ne,I as O,b as G,av as re,J as le,K as se,B as ie,E as pe,U as ue}from"./index-2d447dfc.js";import{E as ce,a as me}from"./el-form-item-df4114d5.js";/* empty css                */import{m as D,c as l}from"./marker-shadow-63582697.js";import{l as o}from"./leaflet-src-51ec4ce5.js";const A=b=>(le("data-v-183d0a99"),b=b(),se(),b),de=A(()=>_("div",{class:"title"},[_("span",null,"属性")],-1)),fe={class:"content"},_e=A(()=>_("span",{class:"i-icon-park-outline-add-one"},null,-1)),ge={class:"btn-container"},v="bed806b1ccb34b268ab1c0700123d444",ye={__name:"leafletMap",props:{geoJsonLayer:{type:o.GeoJSON,default:void 0}},emits:["update:geoJsonLayer","getMap","getControl"],setup(b,{emit:S}){const m=b,L=new o.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:D,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),j=new o.Icon({iconUrl:"https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:D,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});let C,r;const g=Q("$eventBus"),t=M(void 0),J=M(),E=M(),d=W({properties:[]}),F=a=>{a.properties.forEach(e=>{e.label&&e.value&&(t.value.properties[e.label]!=null?te.warning("字段 [ "+e.label+" ] 存在，已跳过"):t.value.properties[e.label]=isNaN(e.value)?e.value:parseFloat(e.value))}),z(),g.emit("updateEditor")};function P(){d.properties.push({label:"",value:"",id:Date.now()})}function z(){d.properties=[]}X(()=>{g.on("locationGeo",B),g.on("updateGeojsonLayer",I),R(),Y(()=>{q(),$()})}),ee(()=>{g.off("locationGeo",B),g.off("updateGeojsonLayer",I),r&&(r.remove(),r=void 0)});function R(){r=oe(o.map(J.value,{attributionControl:!0,zoomControl:!1,minZoom:4,trackResize:!0})),S("getMap",r),r.setView([35,105],4),S("update:geoJsonLayer",o.geoJSON(void 0,{onEachFeature:H,pointToLayer:(a,e)=>o.marker(e,{icon:L})}).addTo(r))}function q(){C=o.control.layers({高德矢量:l("GaoDe.Normal.Map",{maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}).addTo(r),高德影像:o.layerGroup([l("GaoDe.Satellite.Map",{maxNativeZoom:18,maxZoom:20}),l("GaoDe.Satellite.Annotation",{maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}),谷歌矢量:o.layerGroup([l("Google.Normal.Map",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者'}),谷歌影像:o.layerGroup([l("Google.Satellite.Map",{maxZoom:20}),l("Google.Satellite.Annotation",{maxZoom:20})],{attribution:'&copy; <a href="https://www.google.com/maps" target="_blank">谷歌地图</a> 贡献者'}),OpenStreetMap:l("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者',maxNativeZoom:19,maxZoom:20}),天地图矢量:o.layerGroup([l("TianDiTu.Normal.Map",{key:v,maxNativeZoom:18,maxZoom:20}),l("TianDiTu.Normal.Annotation",{key:v,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),天地图影像:o.layerGroup([l("TianDiTu.Satellite.Map",{key:v,maxNativeZoom:18,maxZoom:20}),l("TianDiTu.Satellite.Annotation",{key:v,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),天地图地形:o.layerGroup([l("TianDiTu.Terrain.Map",{key:v,maxNativeZoom:14,maxZoom:20}),l("TianDiTu.Terrain.Annotation",{key:v,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'})},{图形:ne(m.geoJsonLayer)},{hideSingleBase:!0,position:"bottomleft"}).addTo(r),S("getControl",C)}function $(){o.control.scale({imperial:!1,position:"bottomright"}).addTo(r),o.control.zoom({zoomInTitle:"放大",zoomOutTitle:"缩小",position:"topright"}).addTo(r)}function H(a,e){a.properties||(a.properties={}),e.bindPopup(E.value).on("popupopen",()=>{t.value=a,e instanceof o.Marker?e.setIcon(j):e.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{t.value=void 0,d.properties=[],e instanceof o.Marker?e.setIcon(L):m.geoJsonLayer.resetStyle(e)})}function T(a,e,u){if(a instanceof InputEvent&&e&&u)try{e.properties[u]=JSON.parse(a.currentTarget.value)}catch{e.properties[u]=a.currentTarget.value}g.emit("updateEditor")}function B(a){try{const e=o.geoJSON(a);r.fitBounds(e.getBounds())}catch{}}function I(a){if(m.geoJsonLayer&&m.geoJsonLayer instanceof o.GeoJSON){m.geoJsonLayer.clearLayers();try{m.geoJsonLayer.addData(a),r.fitBounds(m.geoJsonLayer.getBounds())}catch(e){console.log(e)}}}return(a,e)=>{const u=ie,y=me,U=ce,N=pe;return i(),x(V,null,[_("div",{ref_key:"mapContainer",ref:J,class:"map-container"},null,512),ae(_("div",{ref_key:"propertyPopup",ref:E,class:"property-popup"},[de,_("div",fe,[n(t)?.properties&&Object.keys(n(t)?.properties).length?(i(),h(U,{key:0,name:"selected-feature-form","label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:p(()=>[(i(!0),x(V,null,O(n(t).properties,(f,s,w)=>(i(),h(y,{key:"prop"+w,label:s},{default:p(()=>[typeof n(t).properties[s]=="string"?(i(),h(u,{key:0,modelValue:n(t).properties[s],"onUpdate:modelValue":k=>n(t).properties[s]=k,onChange:T},null,8,["modelValue","onUpdate:modelValue"])):typeof n(t).properties[s]=="number"?(i(),h(u,{key:1,modelValue:n(t).properties[s],"onUpdate:modelValue":k=>n(t).properties[s]=k,modelModifiers:{number:!0},onChange:T},null,8,["modelValue","onUpdate:modelValue"])):(i(),h(u,{key:2,value:JSON.stringify(f),onChange:k=>T(k,n(t),s)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):Z("",!0),c(U,{name:"add-property-form",model:n(d),onFinish:F},{default:p(()=>[Object.keys(n(d).properties).length?(i(!0),x(V,{key:0},O(n(d).properties,(f,s)=>(i(),x("div",{key:f.id,class:"form-item-container"},[c(y,{name:["properties",s,"label"],rules:{required:!0,message:"属性名称缺失"}},{default:p(()=>[c(u,{modelValue:f.label,"onUpdate:modelValue":w=>f.label=w,placeholder:"属性名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["name"]),c(y,{name:["properties",s,"value"],rules:{required:!0,message:"属性值缺失"}},{default:p(()=>[c(u,{modelValue:f.value,"onUpdate:modelValue":w=>f.value=w,placeholder:"属性值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["name"])]))),128)):Z("",!0),c(y,null,{default:p(()=>[c(N,{type:"dashed",block:"",onClick:P},{default:p(()=>[_e,G("新增属性 ")]),_:1})]),_:1}),Object.keys(n(d).properties).length?(i(),h(y,{key:1},{default:p(()=>[_("div",ge,[c(N,{type:"primary","html-type":"submit"},{default:p(()=>[G(" 确认 ")]),_:1}),c(N,{onClick:re(z,["stop"])},{default:p(()=>[G(" 取消 ")]),_:1},8,["onClick"])])]),_:1})):Z("",!0)]),_:1},8,["model"])])],512),[[ue,!1]])],64)}}},xe=K(ye,[["__scopeId","data-v-183d0a99"]]);export{xe as default};
