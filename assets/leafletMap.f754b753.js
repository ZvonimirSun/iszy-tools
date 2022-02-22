import{m as _,c as n}from"./marker-shadow.468c75a6.js";import{l as t}from"./leaflet-src.d68c88bb.js";import{ag as w,ah as N,m as F,Z as I,c as y,a as u,H as M,h as c,y as b,L as C,J as x,p as G,b as B,r as g,o as i,ab as J,I as z}from"./vendor.53be07e2.js";/* empty css                *//* empty css               */import{_ as D}from"./index.60affb76.js";const{Item:E}=w,Z=new t.exports.Icon({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-blue.png",shadowUrl:_,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),O=new t.exports.Icon({iconUrl:"https://cdn.jsdelivr.net/gh/zvonimirsun/leaflet-color-markers@master/img/marker-icon-2x-yellow.png",shadowUrl:_,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),l="bed806b1ccb34b268ab1c0700123d444";let a;const $={name:"LeafletMap",components:{Form:w,Item:E,Input:N},props:{geoJsonLayer:{type:Object,default:void 0}},emits:["update:geoJsonLayer"],data:()=>({selectedFeature:void 0}),mounted(){this.$eventBus.on("locationGeo",this.locationGeo),this.$eventBus.on("updateGeojsonLayer",this.updateGeojsonLayer),this.initMap(),this.$nextTick(()=>{this.addBaseMaps(),this.addControls()})},beforeUnmount(){this.$eventBus.off("locationGeo",this.locationGeo),this.$eventBus.off("updateGeojsonLayer",this.updateGeojsonLayer),a&&(a.remove(),a=void 0)},methods:{initMap(){a=F(t.exports.map(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1})),a.setView([35,105],4),this.$emit("update:geoJsonLayer",t.exports.geoJSON(void 0,{onEachFeature:this.onEachFeature,pointToLayer:(e,o)=>t.exports.marker(o,{icon:Z})}).addTo(a))},addBaseMaps(){t.exports.control.layers({\u9AD8\u5FB7\u77E2\u91CF:n("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}).addTo(a),\u9AD8\u5FB7\u5F71\u50CF:t.exports.layerGroup([n("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),n("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">\u9AD8\u5FB7\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u77E2\u91CF:t.exports.layerGroup([n("TianDiTu.Normal.Map",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20}),n("TianDiTu.Normal.Annotation",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5F71\u50CF:t.exports.layerGroup([n("TianDiTu.Satellite.Map",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20}),n("TianDiTu.Satellite.Annotation",{key:l,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),\u5929\u5730\u56FE\u5730\u5F62:t.exports.layerGroup([n("TianDiTu.Terrain.Map",{key:l,minZoom:3,maxNativeZoom:14,maxZoom:20}),n("TianDiTu.Terrain.Annotation",{key:l,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">\u5929\u5730\u56FE</a> \u8D21\u732E\u8005'}),OpenStreetMap:n("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> \u8D21\u732E\u8005',minZoom:3,maxNativeZoom:19,maxZoom:20})},{\u56FE\u5F62:I(this.geoJsonLayer)},{hideSingleBase:!0,position:"topright"}).addTo(a)},addControls(){t.exports.control.scale({imperial:!1,position:"bottomleft"}).addTo(a),t.exports.control.zoom({zoomInTitle:"\u653E\u5927",zoomOutTitle:"\u7F29\u5C0F",position:"bottomright"}).addTo(a)},onEachFeature(e,o){e.properties&&o.bindPopup(this.$refs.propertyPopup).on("popupopen",()=>{this.selectedFeature=e,o instanceof t.exports.Marker?o.setIcon(O):o.setStyle({color:"#ffff00",weight:5,opacity:.65})}).on("popupclose",()=>{this.selectedFeature=void 0,o instanceof t.exports.Marker?o.setIcon(Z):this.geoJsonLayer.resetStyle(o)})},saveToEditor(e,o,r){if(e instanceof InputEvent&&o&&r)try{o.properties[r]=JSON.parse(e.currentTarget.value)}catch{o.properties[r]=e.currentTarget.value}this.$eventBus.emit("updateEditor")},locationGeo(e){try{const r=t.exports.geoJSON(e).getBounds(),p=r.getCenter(),d=a.getBoundsZoom(r);a.setView(p,d>16?16:d)}catch{}},updateGeojsonLayer(e){if(this.geoJsonLayer&&this.geoJsonLayer instanceof t.exports.GeoJSON){this.geoJsonLayer.clearLayers();try{this.geoJsonLayer.addData(e);const o=this.geoJsonLayer.getBounds(),r=o.getCenter(),p=a.getBoundsZoom(o);a.setView(r,p>16?16:p)}catch(o){console.log(o)}}}}},U=e=>(G("data-v-07512cd2"),e=e(),B(),e),j={ref:"mapContainer",class:"mapContainer"},A={ref:"propertyPopup",class:"propertyPopup"},V=U(()=>u("div",{class:"title"},[u("span",null,"\u5C5E\u6027")],-1));function P(e,o,r,p,d,h){var v;const f=g("Input"),T=g("Item"),S=g("Form");return i(),y(x,null,[u("div",j,null,512),M(u("div",A,[V,((v=e.selectedFeature)==null?void 0:v.properties)?(i(),c(S,{key:0,"label-col":{span:8},"wrapper-col":{span:16},colon:!1},{default:b(()=>[(i(!0),y(x,null,J(e.selectedFeature.properties,(k,s,L)=>(i(),c(T,{key:"prop"+L,label:s},{default:b(()=>[typeof e.selectedFeature.properties[s]=="string"?(i(),c(f,{key:0,value:e.selectedFeature.properties[s],"onUpdate:value":m=>e.selectedFeature.properties[s]=m,onChange:h.saveToEditor},null,8,["value","onUpdate:value","onChange"])):typeof e.selectedFeature.properties[s]=="number"?(i(),c(f,{key:1,value:e.selectedFeature.properties[s],"onUpdate:value":m=>e.selectedFeature.properties[s]=m,valueModifiers:{number:!0},onChange:h.saveToEditor},null,8,["value","onUpdate:value","onChange"])):(i(),c(f,{key:2,value:JSON.stringify(k),onChange:m=>h.saveToEditor(m,e.selectedFeature,s)},null,8,["value","onChange"]))]),_:2},1032,["label"]))),128))]),_:1})):C("",!0)],512),[[z,!1]])],64)}var X=D($,[["render",P],["__scopeId","data-v-07512cd2"]]);export{X as default};