import{_,d as f,o,c as d,w as v,a0 as k,L as n,bw as l,a2 as g,F as y,M as c,I as D,bx as C}from"./index.b28822d7.js";/* empty css               */import{_ as w}from"./index.cb06ff1d.js";import"./index.d13686d8.js";import"./index.52113cec.js";import"./index.3004881c.js";import"./index.85703d3d.js";import"./index.e857a682.js";import"./index.a60e9e63.js";import"./index.7b9fa428.js";import{l as I}from"./leaflet-src.fc436da4.js";import"./css.1dd79e5e.js";import"./useState.b5be019f.js";import"./toArray.fd80d8b6.js";import"./DownOutlined.7cdbef70.js";import"./index.629b0c10.js";import"./index.b15688dc.js";import"./index.15492267.js";import"./Menu.11a7d727.js";import"./shallowequal.7c75c350.js";import"./_arrayIncludesWith.15e56e3a.js";import"./Overflow.d7314ce8.js";import"./collapseMotion.c0f910bf.js";import"./SearchOutlined.d8a6d4b5.js";import"./index.ecf92d40.js";import"./Password.1ece853a.js";import"./EyeOutlined.46f3fb22.js";import"./Checkbox.2a3bab71.js";import"./responsiveObserve.d281707b.js";import"./isMobile.481c1aec.js";const L=f({name:"PropertyTable",props:{geoJsonLayer:{type:I.exports.GeoJSON,default:null},height:{type:Number,default:null}},data:()=>({editableData:{}}),computed:{features(){if(this.geoJsonLayer)try{return this.geoJsonLayer.toGeoJSON().features}catch{return null}return null},propertyList(){return this.features?this.features.map(e=>e.properties):null},tableColumns(){if(this.propertyList&&this.propertyList.length>0){const t=this.getArrayKeys(this.propertyList).map(r=>({title:r,dataIndex:r,key:r,width:150}));return t.push({title:"\u64CD\u4F5C",dataIndex:"operation",width:100,fixed:"right"}),t}else return null},tableScroll(){return{y:this.height-96}}},methods:{getArrayKeys(e){return[...e.reduce((t,r)=>(Object.keys(r).forEach(u=>t.add(u)),t),new Set)]},saveToEditableData(e,t,r){if(e instanceof InputEvent&&t&&r)try{t[r]=JSON.parse(e.currentTarget.value)}catch{t[r]=e.currentTarget.value}},edit(e){this.editableData[e]=k(this.propertyList[e])},save(e){Object.assign(this.propertyList[e],this.editableData[e]),delete this.editableData[e],this.$eventBus.emit("updateEditor")},cancel(e){delete this.editableData[e]},rowEvents(e,t){return{onClick:()=>{this.$eventBus.emit("locationGeo",this.features[t])}}}}}),S={key:0,class:"editable-cell-input-wrapper"},$={key:1,class:"editable-cell-text-wrapper"},E={key:0},J=["onClick"],T=["onClick"],N={key:1},O=["onClick"];function B(e,t,r,u,U,j){const m=D,b=w,h=C;return e.tableColumns?(o(),d(b,{key:0,class:"ant-table-striped",columns:e.tableColumns,"data-source":e.propertyList,"row-key":p=>p.key,pagination:!1,bordered:"",size:"small",scroll:e.tableScroll,"custom-row":e.rowEvents},{bodyCell:v(({text:p,index:a,column:s})=>[s.dataIndex!=="operation"?(o(),n(y,{key:0},[e.editableData[a]?(o(),n("div",S,[typeof e.editableData[a][s.dataIndex]=="string"?(o(),d(m,{key:0,value:e.editableData[a][s.dataIndex],"onUpdate:value":i=>e.editableData[a][s.dataIndex]=i,onClick:t[0]||(t[0]=l(()=>{},["stop"]))},null,8,["value","onUpdate:value"])):typeof e.editableData[a][s.dataIndex]=="number"?(o(),d(m,{key:1,value:e.editableData[a][s.dataIndex],"onUpdate:value":i=>e.editableData[a][s.dataIndex]=i,valueModifiers:{number:!0},onClick:t[1]||(t[1]=l(()=>{},["stop"]))},null,8,["value","onUpdate:value"])):(o(),d(m,{key:2,value:JSON.stringify(e.editableData[a][s.dataIndex]),onClick:t[2]||(t[2]=l(()=>{},["stop"])),onChange:i=>e.saveToEditableData(i,e.editableData[a],s.dataIndex)},null,8,["value","onChange"]))])):(o(),n("div",$,g(typeof p=="object"?JSON.stringify(p):p),1))],64)):(o(),n(y,{key:1},[e.editableData[a]?(o(),n("span",E,[c("a",{onClick:l(i=>e.save(a),["stop"])}," \u4FDD\u5B58\u5C5E\u6027 ",8,J),c("a",{onClick:l(i=>e.cancel(a),["stop"])}," \u53D6\u6D88\u7F16\u8F91 ",8,T)])):(o(),n("span",N,[c("a",{onClick:l(i=>e.edit(a),["stop"])}," \u7F16\u8F91\u5C5E\u6027 ",8,O)]))],64))]),_:1},8,["columns","data-source","row-key","scroll","custom-row"])):(o(),d(h,{key:1}))}const ce=_(L,[["render",B],["__scopeId","data-v-290c0dab"]]);export{ce as default};
