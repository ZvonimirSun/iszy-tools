import{l as e,c as t}from"./leaflet.ChineseLayer.b8f3e177.js";import{C as a}from"./container.5ad8adce.js";import{d as o,a3 as n,ad as i,aL as r,_ as s,$ as d,am as p,aM as l,l as c,a as m,o as u,c as h,w as b,e as v,J as y,f as g,Q as f,P as x,O as T,b as k,U as w,V as C,ac as J}from"./vendor.18d196da.js";import{J as Z}from"./jsoneditor.min.87ee7f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as D}from"./index.f91f87a2.js";var N=".container[data-v-7c45ba0e] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.container .mapContainer[data-v-7c45ba0e] {\n  height: 100%;\n  width: 60%;\n}\n.container .leaflet-popup-content .propertyPopup[data-v-7c45ba0e] {\n  display: block !important;\n  width: 25rem;\n  height: 20rem;\n  overflow-y: auto;\n}\n.container[data-v-7c45ba0e] .ant-tabs {\n  width: 40%;\n  height: 100%;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-bar {\n  margin: 0;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content {\n  height: calc(100% - 4rem);\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-tabs-tabpane {\n  height: 100%;\n  overflow: auto;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-tabs-tabpane.ant-tabs-tabpane-inactive {\n  display: none;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-table th {\n  background-color: #e6e6e6;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-table td {\n  white-space: nowrap;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-table td .editable-cell-input-wrapper, .container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-table td .editable-cell-text-wrapper {\n  width: max-content;\n}\n.container[data-v-7c45ba0e] .ant-tabs .ant-tabs-content .ant-table-striped .table-striped {\n  background-color: #fafafa;\n}\n.container[data-v-7c45ba0e] .ant-tabs .geoJsonContainer {\n  height: 100%;\n}";const{TabPane:L}=n,{Item:U}=s,S=o({name:"geoJson",components:{Container:a,Tabs:n,TabPane:L,Table:i,Empty:r,Form:s,Item:U,Input:d},data:()=>({map:void 0,editor:void 0,geoJson:{type:"FeatureCollection",features:[]},geoJsonLayer:void 0,selectedFeature:void 0,editorUpdated:!1,editorUpdateTimeout:void 0,editableData:{},tdtToken:"bed806b1ccb34b268ab1c0700123d444",gaodeToken:"868d6830a7409520ae283cde3a3f84d1"}),computed:{tableColumns(){if(this.propertyList&&this.propertyList.length>0){const e=Object.keys(this.propertyList[0]).map((e=>({title:e,dataIndex:e,key:e,slots:{customRender:"property"}})));return e.push({title:"操作",dataIndex:"operation",width:40,fixed:"right",slots:{customRender:"operation"}}),e}return null},propertyList(){return this.features?this.features.map((e=>e.properties)):null},features(){if(this.geoJsonLayer)try{return this.geoJsonLayer.toGeoJSON().features}catch(e){return null}return null}},mounted(){this.editor=p(new Z(this.$refs.geoJsonContainer,{mode:"code",onChangeText:()=>{this.editorUpdated=!0,this.editorUpdateTimeout&&(clearTimeout(this.editorUpdateTimeout),this.editorUpdateTimeout=void 0),this.editorUpdateTimeout=setTimeout((()=>{this.updateGeoJsonLayer(),this.editorUpdated=!1,this.editorUpdateTimeout=void 0}),5e3)},onBlur:()=>{this.editorUpdateTimeout&&(clearTimeout(this.editorUpdateTimeout),this.editorUpdateTimeout=void 0),this.editorUpdated&&(this.updateGeoJsonLayer(),this.editorUpdated=!1)}},this.geoJson)),this.initMap()},methods:{initMap(){this.map=p(e.exports.map(this.$refs.mapContainer,{attributionControl:!0,zoomControl:!1})),this.map.setView([35,105],4),this.geoJsonLayer=e.exports.geoJSON(void 0,{onEachFeature:this.onEachFeature}).addTo(this.map),e.exports.control.layers({"高德矢量":t("GaoDe.Normal.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20,attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}).addTo(this.map),"高德影像":e.exports.layerGroup([t("GaoDe.Satellite.Map",{minZoom:3,maxNativeZoom:18,maxZoom:20}),t("GaoDe.Satellite.Annotation",{minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://lbs.amap.com/pages/terms/" target="_blank">高德地图</a> 贡献者'}),"天地图矢量":e.exports.layerGroup([t("TianDiTu.Normal.Map",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20}),t("TianDiTu.Normal.Annotation",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),"天地图影像":e.exports.layerGroup([t("TianDiTu.Satellite.Map",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20}),t("TianDiTu.Satellite.Annotation",{key:this.tdtToken,minZoom:3,maxNativeZoom:18,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),"天地图地形":e.exports.layerGroup([t("TianDiTu.Terrain.Map",{key:this.tdtToken,minZoom:3,maxNativeZoom:14,maxZoom:20}),t("TianDiTu.Terrain.Annotation",{key:this.tdtToken,minZoom:3,maxNativeZoom:14,maxZoom:20})],{attribution:'&copy; <a href="https://www.tianditu.gov.cn/" target="_blank">天地图</a> 贡献者'}),OpenStreetMap:t("OSM.Normal.Map",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> 贡献者'})},{"图形":l(this.geoJsonLayer)},{hideSingleBase:!0,position:"topright"}).addTo(this.map),e.exports.control.scale({imperial:!1,position:"bottomleft"}).addTo(this.map),e.exports.control.zoom({zoomInTitle:"放大",zoomOutTitle:"缩小",position:"bottomright"}).addTo(this.map)},updateGeoJsonLayer(){this.geoJsonLayer&&this.geoJsonLayer instanceof e.exports.GeoJSON&&this.geoJsonLayer.clearLayers();try{this.geoJson=this.editor.get();try{this.geoJsonLayer.addData(this.geoJson);const e=this.geoJsonLayer.getBounds(),t=e.getCenter(),a=this.map.getBoundsZoom(e);this.map.setView(t,a)}catch(t){}}catch(t){this.geoJson=void 0}},locationGeo(t){try{const a=e.exports.geoJSON(t).getBounds(),o=a.getCenter(),n=this.map.getBoundsZoom(a);this.map.setView(o,n)}catch(a){}},onEachFeature(e,t){e.properties&&t.bindPopup(this.$refs.propertyPopup).on("popupopen",(()=>{this.selectedFeature=e,t.setStyle({color:"#ff7800",weight:5,opacity:.65})})).on("popupclose",(()=>{this.selectedFeature=void 0,this.geoJsonLayer.resetStyle()}))},saveToEditor(e,t,a){if(e instanceof InputEvent&&t&&a)try{t.properties[a]=JSON.parse(e.currentTarget.value)}catch(o){t.properties[a]=e.currentTarget.value}this.geoJson=this.geoJsonLayer.toGeoJSON(),this.editor.update(this.geoJson)},saveToEditableData(e,t,a){if(e instanceof InputEvent&&t&&a)try{t[a]=JSON.parse(e.currentTarget.value)}catch(o){t[a]=e.currentTarget.value}},edit(e){this.editableData[e]=c(this.propertyList[e])},save(e){Object.assign(this.propertyList[e],this.editableData[e]),delete this.editableData[e]},cancel(e){delete this.editableData[e]},rowEvents(e,t){return{onClick:()=>{this.locationGeo(this.features[t])}}}},beforeUnmount(){this.map&&(this.map.remove(),this.map=void 0),this.editor&&(this.editor.destroy(),this.editor=void 0)}}),j={class:"container"},I={class:"mapContainer",ref:"mapContainer"},F={class:"propertyPopup",ref:"propertyPopup"},O={class:"geoJsonContainer",ref:"geoJsonContainer"},E={key:0,class:"editable-cell-input-wrapper"},_={key:1,class:"editable-cell-text-wrapper"},G={key:0},M=["onClick"],P=["onClick"],B={key:1},z=["onClick"];function A(e,t,a,o,n,i){const r=m("Input"),s=m("Item"),d=m("Form"),p=m("TabPane"),l=m("Table"),c=m("Empty"),Z=m("Tabs"),D=m("container");return u(),h(D,null,{default:b((()=>{var t;return[v("div",j,[v("div",I,null,512),y(v("div",F,[(null==(t=e.selectedFeature)?void 0:t.properties)?(u(),h(d,{key:0,"label-col":{span:6},"wrapper-col":{span:18},colon:!1},{default:b((()=>[(u(!0),g(x,null,f(e.selectedFeature.properties,((t,a,o)=>(u(),h(s,{label:a,key:"prop"+o},{default:b((()=>["string"==typeof e.selectedFeature.properties[a]?(u(),h(r,{key:0,value:e.selectedFeature.properties[a],"onUpdate:value":t=>e.selectedFeature.properties[a]=t,onChange:e.saveToEditor},null,8,["value","onUpdate:value","onChange"])):"number"==typeof e.selectedFeature.properties[a]?(u(),h(r,{key:1,value:e.selectedFeature.properties[a],"onUpdate:value":t=>e.selectedFeature.properties[a]=t,valueModifiers:{number:!0},onChange:e.saveToEditor},null,8,["value","onUpdate:value","onChange"])):(u(),h(r,{key:2,value:JSON.stringify(t),onChange:t=>e.saveToEditor(t,e.selectedFeature,a)},null,8,["value","onChange"]))])),_:2},1032,["label"])))),128))])),_:1})):T("",!0)],512),[[J,!1]]),k(Z,{type:"card"},{default:b((()=>[k(p,{key:"geoJson",tab:"GeoJSON"},{default:b((()=>[v("div",O,null,512)])),_:1}),k(p,{key:"table",tab:"Table"},{default:b((()=>[e.tableColumns?(u(),h(l,{key:0,class:"ant-table-striped",columns:e.tableColumns,"data-source":e.propertyList,rowKey:(e,t)=>t,pagination:!1,bordered:"",size:"small",scroll:{x:!0},rowClassName:(e,t)=>t%2==1?"table-striped":null,customRow:e.rowEvents},{property:b((({text:t,column:a,index:o})=>[e.editableData[o]?(u(),g("div",E,["string"==typeof e.editableData[o][a.dataIndex]?(u(),h(r,{key:0,value:e.editableData[o][a.dataIndex],"onUpdate:value":t=>e.editableData[o][a.dataIndex]=t,onChange:e.saveToEditor},null,8,["value","onUpdate:value","onChange"])):"number"==typeof e.editableData[o][a.dataIndex]?(u(),h(r,{key:1,value:e.editableData[o][a.dataIndex],"onUpdate:value":t=>e.editableData[o][a.dataIndex]=t,valueModifiers:{number:!0},onChange:e.saveToEditor},null,8,["value","onUpdate:value","onChange"])):(u(),h(r,{key:2,value:JSON.stringify(e.editableData[o][a.dataIndex]),onChange:t=>e.saveToEditableData(t,e.editableData[o],a.dataIndex)},null,8,["value","onChange"]))])):(u(),g("div",_,w("object"==typeof t?JSON.stringify(t):t),1))])),operation:b((({index:t})=>[e.editableData[t]?(u(),g("span",G,[v("a",{onClick:C((a=>e.save(t)),["stop"])}," 保存属性 ",8,M),v("a",{onClick:C((a=>e.cancel(t)),["stop"])}," 取消编辑 ",8,P)])):(u(),g("span",B,[v("a",{onClick:C((a=>e.edit(t)),["stop"])}," 编辑属性 ",8,z)]))])),_:1},8,["columns","data-source","rowKey","rowClassName","customRow"])):(u(),h(c,{key:1}))])),_:1})])),_:1})])]})),_:1})}var R=D(S,[["render",A],["__scopeId","data-v-7c45ba0e"]]);export{R as default};
