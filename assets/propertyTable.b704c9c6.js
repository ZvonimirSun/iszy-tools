import{_,e as h,ap as k,ao as D,l as g,r as m,o as s,c as l,w as y,n as d,D as i,z as C,s as c}from"./index.dce6f2f8.js";import{T as I}from"./index.e90e30a0.js";import"./index.2e796bb0.js";import"./index.bc6719f6.js";import"./index.09515041.js";import"./index.c0eb3ada.js";import"./index.a071b22a.js";/* empty css               *//* empty css               */import"./index.95da72f3.js";import"./css.b1edd3c8.js";import"./useState.66794210.js";import"./index.bff6f21d.js";import"./debounce.706e94e5.js";import"./toArray.3d44d93e.js";import"./DownOutlined.d4840611.js";import"./useMergedState.9ef6251f.js";import"./index.5f211957.js";import"./shallowequal.2ada3616.js";import"./_arrayIncludesWith.40afec22.js";import"./Overflow.ae156dde.js";import"./collapseMotion.5f9ffa4e.js";import"./dropdown.6bbce2ac.js";import"./SearchOutlined.ec8463c8.js";import"./index.b46cae14.js";import"./EyeOutlined.ace96c89.js";import"./isMobile.6491fde5.js";import"./Checkbox.3571ee74.js";import"./responsiveObserve.6ddd218f.js";const w=h({name:"PropertyTable",components:{Table:I,Empty:k,Input:D},props:{geoJsonLayer:{type:Object,default:void 0}},data:()=>({editableData:{}}),computed:{features(){if(this.geoJsonLayer)try{return this.geoJsonLayer.toGeoJSON().features}catch{return null}return null},propertyList(){return this.features?this.features.map(e=>e.properties):null},tableColumns(){if(this.propertyList&&this.propertyList.length>0){const t=Object.keys(this.propertyList[0]).map(n=>({title:n,dataIndex:n,key:n,slots:{customRender:"property"}}));return t.push({title:"\u64CD\u4F5C",dataIndex:"operation",width:40,fixed:"right",slots:{customRender:"operation"}}),t}else return null}},methods:{saveToEditableData(e,t,n){if(e instanceof InputEvent&&t&&n)try{t[n]=JSON.parse(e.currentTarget.value)}catch{t[n]=e.currentTarget.value}},edit(e){this.editableData[e]=g(this.propertyList[e])},save(e){Object.assign(this.propertyList[e],this.editableData[e]),delete this.editableData[e],this.$eventBus.emit("updateEditor")},cancel(e){delete this.editableData[e]},rowEvents(e,t){return{onClick:()=>{this.$eventBus.emit("locationGeo",this.features[t])}}}}}),T={key:0,class:"editable-cell-input-wrapper"},E={key:1,class:"editable-cell-text-wrapper"},L={key:0},$=["onClick"],J=["onClick"],O={key:1},B=["onClick"];function N(e,t,n,b,S,j){const u=m("Input"),v=m("Table"),f=m("Empty");return e.tableColumns?(s(),l(v,{key:0,class:"ant-table-striped",columns:e.tableColumns,"data-source":e.propertyList,"row-key":(o,a)=>a,pagination:!1,bordered:"",size:"small",scroll:{x:!0},"row-class-name":(o,a)=>a%2===1?"table-striped":null,"custom-row":e.rowEvents},{property:y(({text:o,column:a,index:r})=>[e.editableData[r]?(s(),d("div",T,[typeof e.editableData[r][a.dataIndex]=="string"?(s(),l(u,{key:0,value:e.editableData[r][a.dataIndex],"onUpdate:value":p=>e.editableData[r][a.dataIndex]=p,onClick:t[0]||(t[0]=i(()=>{},["stop"]))},null,8,["value","onUpdate:value"])):typeof e.editableData[r][a.dataIndex]=="number"?(s(),l(u,{key:1,value:e.editableData[r][a.dataIndex],"onUpdate:value":p=>e.editableData[r][a.dataIndex]=p,valueModifiers:{number:!0},onClick:t[1]||(t[1]=i(()=>{},["stop"]))},null,8,["value","onUpdate:value"])):(s(),l(u,{key:2,value:JSON.stringify(e.editableData[r][a.dataIndex]),onClick:t[2]||(t[2]=i(()=>{},["stop"])),onChange:p=>e.saveToEditableData(p,e.editableData[r],a.dataIndex)},null,8,["value","onChange"]))])):(s(),d("div",E,C(typeof o=="object"?JSON.stringify(o):o),1))]),operation:y(({index:o})=>[e.editableData[o]?(s(),d("span",L,[c("a",{onClick:i(a=>e.save(o),["stop"])}," \u4FDD\u5B58\u5C5E\u6027 ",8,$),c("a",{onClick:i(a=>e.cancel(o),["stop"])}," \u53D6\u6D88\u7F16\u8F91 ",8,J)])):(s(),d("span",O,[c("a",{onClick:i(a=>e.edit(o),["stop"])}," \u7F16\u8F91\u5C5E\u6027 ",8,B)]))]),_:1},8,["columns","data-source","row-key","row-class-name","custom-row"])):(s(),l(f,{key:1}))}var ue=_(w,[["render",N],["__scopeId","data-v-8f49b0ae"]]);export{ue as default};