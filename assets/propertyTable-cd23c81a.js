import{_ as f,h as k,o,c as p,w as _,Q as g,l as n,av as i,t as v,H as b,m as c,B as D}from"./index-64dd3e12.js";import{E as C}from"./el-empty-06ee9a13.js";import{E}from"./el-table-5b1e5a6d.js";import"./el-checkbox-6866cf39.js";import"./el-tag-6e978a8c.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-39616f65.js";import"./el-scrollbar-0f5d8a5e.js";import{l as w}from"./leaflet-src-1241b51b.js";import"./isEqual-b7755aa5.js";import"./_baseProperty-02e4e231.js";const I=k({name:"PropertyTable",props:{geoJsonLayer:{type:w.GeoJSON,default:null},height:{type:Number,default:null}},data:()=>({editableData:{}}),computed:{features(){if(this.geoJsonLayer)try{return this.geoJsonLayer.toGeoJSON().features}catch{return null}return null},propertyList(){return this.features?this.features.map(e=>e.properties):null},tableColumns(){if(this.propertyList&&this.propertyList.length>0){const t=this.getArrayKeys(this.propertyList).map(s=>({title:s,dataIndex:s,key:s,width:150}));return t.push({title:"操作",dataIndex:"operation",width:100,fixed:"right"}),t}else return null},tableScroll(){return{y:this.height-96}}},methods:{getArrayKeys(e){return[...e.reduce((t,s)=>(Object.keys(s).forEach(u=>t.add(u)),t),new Set)]},saveToEditableData(e,t,s){if(e instanceof InputEvent&&t&&s)try{t[s]=JSON.parse(e.currentTarget.value)}catch{t[s]=e.currentTarget.value}},edit(e){this.editableData[e]=g(this.propertyList[e])},save(e){Object.assign(this.propertyList[e],this.editableData[e]),delete this.editableData[e],this.$eventBus.emit("updateEditor")},cancel(e){delete this.editableData[e]},rowEvents(e,t){return{onClick:()=>{this.$eventBus.emit("locationGeo",this.features[t])}}}}}),L={key:0,class:"editable-cell-input-wrapper"},S={key:1,class:"editable-cell-text-wrapper"},T={key:0},V=["onClick"],$=["onClick"],J={key:1},B=["onClick"];function N(e,t,s,u,O,U){const y=D,m=E,h=C;return e.tableColumns?(o(),p(m,{key:0,class:"ant-table-striped",columns:e.tableColumns,"data-source":e.propertyList,"row-key":d=>d.key,pagination:!1,bordered:"",size:"small",scroll:e.tableScroll,"custom-row":e.rowEvents},{bodyCell:_(({text:d,index:a,column:r})=>[r.dataIndex!=="operation"?(o(),n(b,{key:0},[e.editableData[a]?(o(),n("div",L,[typeof e.editableData[a][r.dataIndex]=="string"?(o(),p(y,{key:0,modelValue:e.editableData[a][r.dataIndex],"onUpdate:modelValue":l=>e.editableData[a][r.dataIndex]=l,onClick:t[0]||(t[0]=i(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue"])):typeof e.editableData[a][r.dataIndex]=="number"?(o(),p(y,{key:1,modelValue:e.editableData[a][r.dataIndex],"onUpdate:modelValue":l=>e.editableData[a][r.dataIndex]=l,modelModifiers:{number:!0},onClick:t[1]||(t[1]=i(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue"])):(o(),p(y,{key:2,value:JSON.stringify(e.editableData[a][r.dataIndex]),onClick:t[2]||(t[2]=i(()=>{},["stop"])),onChange:l=>e.saveToEditableData(l,e.editableData[a],r.dataIndex)},null,8,["value","onChange"]))])):(o(),n("div",S,v(typeof d=="object"?JSON.stringify(d):d),1))],64)):(o(),n(b,{key:1},[e.editableData[a]?(o(),n("span",T,[c("a",{onClick:i(l=>e.save(a),["stop"])}," 保存属性 ",8,V),c("a",{onClick:i(l=>e.cancel(a),["stop"])}," 取消编辑 ",8,$)])):(o(),n("span",J,[c("a",{onClick:i(l=>e.edit(a),["stop"])}," 编辑属性 ",8,B)]))],64))]),_:1},8,["columns","data-source","row-key","scroll","custom-row"])):(o(),p(h,{key:1}))}const R=f(I,[["render",N],["__scopeId","data-v-cb30d9b9"]]);export{R as default};