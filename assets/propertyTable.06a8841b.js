import{_ as h,d as f,o as n,c as l,w as y,Z as v,J as d,bw as i,a0 as k,K as c,I as g,bx as D}from"./index.bbc49104.js";/* empty css               */import{_ as C}from"./index.5bdb64ac.js";import"./index.70cb1f9a.js";import"./index.004bff62.js";import"./index.a8049694.js";import"./index.bcbc197b.js";import"./index.2ce0fccd.js";import"./index.43781d02.js";import"./index.50102a85.js";import"./css.b1edd3c8.js";import"./useState.22cffb56.js";import"./toArray.691daed4.js";import"./DownOutlined.0e4b8062.js";import"./index.aaf4508d.js";import"./index.a58693d1.js";import"./index.bca1a9a1.js";import"./Menu.50f85e35.js";import"./shallowequal.484c8fc4.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Overflow.00686090.js";import"./collapseMotion.6b35f1ec.js";import"./SearchOutlined.9f60fa31.js";import"./index.bb4d4aa9.js";import"./Password.4eda3fca.js";import"./EyeOutlined.68921e85.js";import"./Checkbox.3cd86d1b.js";import"./responsiveObserve.b50b6281.js";import"./isMobile.47354675.js";const w=f({name:"PropertyTable",props:{geoJsonLayer:{type:Object,default:void 0}},data:()=>({editableData:{}}),computed:{features(){if(this.geoJsonLayer)try{return this.geoJsonLayer.toGeoJSON().features}catch{return null}return null},propertyList(){return this.features?this.features.map(e=>e.properties):null},tableColumns(){if(this.propertyList&&this.propertyList.length>0){const t=this.getArrayKeys(this.propertyList).map(o=>({title:o,dataIndex:o,key:o,slots:{customRender:"property"}}));return t.push({title:"\u64CD\u4F5C",dataIndex:"operation",width:40,fixed:"right",slots:{customRender:"operation"}}),t}else return null}},methods:{getArrayKeys(e){return[...e.reduce((t,o)=>(Object.keys(o).forEach(u=>t.add(u)),t),new Set)]},saveToEditableData(e,t,o){if(e instanceof InputEvent&&t&&o)try{t[o]=JSON.parse(e.currentTarget.value)}catch{t[o]=e.currentTarget.value}},edit(e){this.editableData[e]=v(this.propertyList[e])},save(e){Object.assign(this.propertyList[e],this.editableData[e]),delete this.editableData[e],this.$eventBus.emit("updateEditor")},cancel(e){delete this.editableData[e]},rowEvents(e,t){return{onClick:()=>{this.$eventBus.emit("locationGeo",this.features[t])}}}}}),I={key:0,class:"editable-cell-input-wrapper"},L={key:1,class:"editable-cell-text-wrapper"},$={key:0},E=["onClick"],J=["onClick"],T={key:1},O=["onClick"];function B(e,t,o,u,S,N){const m=g,b=C,_=D;return e.tableColumns?(n(),l(b,{key:0,class:"ant-table-striped",columns:e.tableColumns,"data-source":e.propertyList,"row-key":(r,a)=>a,pagination:!1,bordered:"",size:"small",scroll:{x:!0},"row-class-name":(r,a)=>a%2===1?"table-striped":null,"custom-row":e.rowEvents},{property:y(({text:r,column:a,index:s})=>[e.editableData[s]?(n(),d("div",I,[typeof e.editableData[s][a.dataIndex]=="string"?(n(),l(m,{key:0,value:e.editableData[s][a.dataIndex],"onUpdate:value":p=>e.editableData[s][a.dataIndex]=p,onClick:t[0]||(t[0]=i(()=>{},["stop"]))},null,8,["value","onUpdate:value"])):typeof e.editableData[s][a.dataIndex]=="number"?(n(),l(m,{key:1,value:e.editableData[s][a.dataIndex],"onUpdate:value":p=>e.editableData[s][a.dataIndex]=p,valueModifiers:{number:!0},onClick:t[1]||(t[1]=i(()=>{},["stop"]))},null,8,["value","onUpdate:value"])):(n(),l(m,{key:2,value:JSON.stringify(e.editableData[s][a.dataIndex]),onClick:t[2]||(t[2]=i(()=>{},["stop"])),onChange:p=>e.saveToEditableData(p,e.editableData[s],a.dataIndex)},null,8,["value","onChange"]))])):(n(),d("div",L,k(typeof r=="object"?JSON.stringify(r):r),1))]),operation:y(({index:r})=>[e.editableData[r]?(n(),d("span",$,[c("a",{onClick:i(a=>e.save(r),["stop"])}," \u4FDD\u5B58\u5C5E\u6027 ",8,E),c("a",{onClick:i(a=>e.cancel(r),["stop"])}," \u53D6\u6D88\u7F16\u8F91 ",8,J)])):(n(),d("span",T,[c("a",{onClick:i(a=>e.edit(r),["stop"])}," \u7F16\u8F91\u5C5E\u6027 ",8,O)]))]),_:1},8,["columns","data-source","row-key","row-class-name","custom-row"])):(n(),l(_,{key:1}))}const ue=h(w,[["render",B],["__scopeId","data-v-64841336"]]);export{ue as default};