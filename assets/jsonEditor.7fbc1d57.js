var vt=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var Ct=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable;var Q=(t,i,n)=>i in t?vt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,D=(t,i)=>{for(var n in i||(i={}))Ct.call(i,n)&&Q(t,n,i[n]);if(Y)for(var n of Y(i))wt.call(i,n)&&Q(t,n,i[n]);return t};import{b as e,_ as yt,k as jt,B as Mt,bM as St,ao as It,bN as W,l as $,aq as Rt,bO as bt,bP as Dt,r as c,o as C,n as M,s as l,y as P,bh as tt,w as o,v as w,F as et,T as Wt,d as h,z,c as Pt,p as it,aV as y,bi as xt,bj as Et}from"./index.db910b6a.js";import{J as ot}from"./jsoneditor.min.4b652a05.js";import{c as nt}from"./createFile.79822b1d.js";/* empty css               */import{C as zt}from"./index.4065b28a.js";import"./index.14d6db8f.js";/* empty css               *//* empty css               *//* empty css               */import{L as rt}from"./index.1f05be64.js";import"./index.9521065f.js";import"./index.402958bc.js";/* empty css               */import{S as Ot}from"./index.695d8609.js";import{I as u}from"./index.52a053b9.js";import{D as Bt}from"./dropdown.87429284.js";import{M as dt}from"./index.e34bb40c.js";import{d as st}from"./debounce.4182d5d0.js";import{g as lt}from"./get.d7945527.js";import"./Checkbox.bbbe65fb.js";import"./index.b280691e.js";import"./Col.617a8404.js";import"./responsiveObserve.d6ab1be2.js";import"./useFlexGapSupport.e1f3909d.js";import"./toArray.36c0fc60.js";import"./Overflow.4899eecc.js";import"./isMobile.6491fde5.js";import"./useMergedState.0f9c8df8.js";import"./useState.48f51fc8.js";import"./DownOutlined.17496dec.js";import"./SearchOutlined.0af33f04.js";import"./shallowequal.3e5fd7e6.js";import"./_arrayIncludesWith.40afec22.js";import"./collapseMotion.d3ce0eae.js";var Ht=u("computer",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("rect",{x:"19",y:"32",width:"10",height:"9",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("rect",{x:"5",y:"8",width:"38",height:"24",rx:"2",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth},null),e("path",{d:"M22 27H26",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M14 41L34 41",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Tt=u("delete",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M9 10V44H39V10H9Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M20 20V33",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M28 20V33",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M4 10H44",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M16 10L19.289 4H28.7771L32 10H16Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null)])}),Nt=u("down",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M37 18L25 30L13 18",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Vt=u("file-addition-one",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M33 29V43",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M26 36H33H40",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M30 4V14H40",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Ft=u("folder-open",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M40 41L44 21H8.8125L4 41H40Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Ut=u("history",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M5.81824 6.72729V14H13.091",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M24.005 12L24.0038 24.0088L32.4832 32.4882",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),pt=u("indent-right",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M42 9H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M29 19H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M29 29H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M37 19L42 24L37 29",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M42 39H6",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Jt=u("info",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z",fill:t.colors[2]},null),e("path",{d:"M24.5 34V20H23.5H22.5",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M21 34H28",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Zt=u("left",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M31 36L19 24L31 12",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),At=u("link-three",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("rect",{x:"34.6074",y:"3.4939",width:"14",height:"18",rx:"2",transform:"rotate(45 34.6074 3.4939)",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("rect",{x:"16.2227",y:"21.8787",width:"14",height:"18",rx:"2",transform:"rotate(45 16.2227 21.8787)",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M31.0723 16.929L16.9301 31.0711",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Xt=u("right",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M19 12L31 24L19 36",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),qt=u("save",!0,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",fill:t.colors[3]},null),e("path",{d:"M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M9 6H34.2814",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M14 26H34",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M14 34H24.0083",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Gt=u("setting-two",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M18.2838 43.1712C14.9327 42.1735 11.9498 40.3212 9.58787 37.8669C10.469 36.8226 11 35.4733 11 34C11 30.6863 8.31371 28 5 28C4.79955 28 4.60139 28.0098 4.40599 28.029C4.13979 26.7276 4 25.3801 4 24C4 21.9094 4.32077 19.8937 4.91579 17.9994C4.94381 17.9998 4.97188 18 5 18C8.31371 18 11 15.3137 11 12C11 11.0487 10.7786 10.1491 10.3846 9.34999C12.6975 7.19937 15.5205 5.5899 18.6521 4.72302C19.6444 6.66807 21.6667 8.00001 24 8.00001C26.3333 8.00001 28.3556 6.66807 29.3479 4.72302C32.4795 5.5899 35.3025 7.19937 37.6154 9.34999C37.2214 10.1491 37 11.0487 37 12C37 15.3137 39.6863 18 43 18C43.0281 18 43.0562 17.9998 43.0842 17.9994C43.6792 19.8937 44 21.9094 44 24C44 25.3801 43.8602 26.7276 43.594 28.029C43.3986 28.0098 43.2005 28 43 28C39.6863 28 37 30.6863 37 34C37 35.4733 37.531 36.8226 38.4121 37.8669C36.0502 40.3212 33.0673 42.1735 29.7162 43.1712C28.9428 40.7518 26.676 39 24 39C21.324 39 19.0572 40.7518 18.2838 43.1712Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",fill:t.colors[3],stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null)])}),Kt=u("up",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M13 30L25 18L37 30",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])});function at(t,i=2){if(t===0)return"0 Bytes";const n=1024,m=i<0?0:i,f=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(n));return parseFloat((t/Math.pow(n,s)).toFixed(m))+" "+f[s]}const{Item:Yt}=dt,{Paragraph:Qt,Text:$t}=Wt,{Item:ht}=rt,{Meta:te}=ht,{mapState:ee,mapGetters:ie,mapMutations:oe}=jt("jsonEditor");let r,d,O=0,x=0,B=!1;const ne={name:"JsonEditor",components:{Button:Mt,Space:Ot,Checkbox:zt,Right:Xt,Left:Zt,Dropdown:Bt,Menu:dt,MenuItem:Yt,Down:Nt,Modal:St,Input:It,Paragraph:Qt,List:rt,ListItem:ht,ListItemMeta:te,FileAdditionOne:Vt,FolderOpen:Ft,Save:qt,History:Ut,Computer:Ht,LinkThree:At,SettingTwo:Gt,Info:Jt,Delete:Tt,IndentRight:pt,Text:$t,Up:Kt},data:()=>({codeLeft:{array:[1,2,3],boolean:!0,color:"gold",null:null,number:123,object:{a:"b",c:"d"},string:"Hello World"},codeRight:{},diff:!1,modalStatus:{type:"",leftOrRight:""},url:"",keyword:"",selectId:"",indent:2,currentName:"",diffMap:{},leftMode:"code",rightMode:"tree",fullPanel:""}),computed:D(D({dataListAfterSearch:function(){return this.dataList(this.keyword)},codeLeftString:function(){return typeof this.codeLeft=="string"?this.codeLeft:JSON.stringify(this.codeLeft,null,this.indent)},codeRightString:function(){return typeof this.codeRight=="string"?this.codeRight:JSON.stringify(this.codeRight,null,this.indent)},documentProperties:function(){var t,i,n,m;if(this.modalStatus.leftOrRight==="left"){let f;return typeof this.codeLeft=="string"?f="\u5B57\u7B26\u4E32\u7C7B\u578B":typeof this.codeLeft=="number"?f="\u6570\u5B57\u7C7B\u578B":typeof this.codeLeft=="boolean"?f="\u5E03\u5C14\u7C7B\u578B":Array.isArray(this.codeLeft)?f=`\u6570\u7EC4\u7C7B\u578B\uFF0C\u5305\u542B ${this.codeLeft.length} \u4E2A\u5BF9\u8C61`:typeof this.codeLeft=="object"&&(f=`\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B ${Object.keys(this.codeLeft).length} \u4E2A\u5C5E\u6027`),{name:(t=this.leftData)==null?void 0:t.name,storage:this.leftData?"\u6D4F\u89C8\u5668\u672C\u5730":"",updated:(i=this.leftData)==null?void 0:i.updated,content:f,size:at(this.codeLeftString.length)}}else if(this.modalStatus.leftOrRight==="right"){let f;return typeof this.codeRight=="string"?f="\u5B57\u7B26\u4E32\u7C7B\u578B":typeof this.codeRight=="number"?f="\u6570\u5B57\u7C7B\u578B":typeof this.codeRight=="boolean"?f="\u5E03\u5C14\u7C7B\u578B":Array.isArray(this.codeRight)?f=`\u6570\u7EC4\u7C7B\u578B\uFF0C\u5305\u542B ${this.codeRight.length} \u4E2A\u5BF9\u8C61`:typeof this.codeRight=="object"&&(f=`\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B ${Object.keys(this.codeRight).length} \u4E2A\u5C5E\u6027`),{name:(n=this.rightData)==null?void 0:n.name,storage:this.rightData?"\u6D4F\u89C8\u5668\u672C\u5730":"",updated:(m=this.rightData)==null?void 0:m.updated,content:f,size:at(this.codeRightString.length)}}else return{}}},ee(["leftId","rightId","splitterValue","fullStatus"])),ie(["dataList","data","leftData","rightData"])),watch:{leftId:{handler:function(t){this.handleHashParams("left",t)}},rightId:{handler:function(t){this.handleHashParams("right",t)}}},mounted(){this.init()},beforeUnmount(){r&&r.destroy(),d&&d.destroy(),window.removeEventListener("hashchange",this.hashChange)},methods:D({init(){if(this.fullPanel=this.fullStatus,r=new ot(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree"],onClassName:this.onClassName,onChangeText:st(n=>{this.diffMap={};try{this.codeLeft=JSON.parse(n)}catch{this.codeLeft=n}r.refresh(),d.refresh(),this.save("left")},100),onModeChange:n=>{this.leftMode=n,n==="code"&&typeof this.codeLeft!="string"&&r.updateText(this.codeLeftString),this.save("left")},onError:n=>{this.$msg.error(n.message)}}),d=new ot(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree"],onClassName:this.onClassName,onChangeText:st(n=>{this.diffMap={};try{this.codeRight=JSON.parse(n)}catch{this.codeRight=n}r.refresh(),d.refresh(),this.save("right")},100),onModeChange:n=>{this.rightMode=n,n==="code"&&typeof this.codeRight!="string"&&d.updateText(this.codeRightString),this.save("right")},onError:n=>{this.$msg.error(n.message)}}),this.leftData&&this.leftData.content){if(this.leftData.content.json)this.codeLeft=this.leftData.content.json,r.set(this.leftData.content.json),r.setMode("tree");else if(this.leftData.content.text){try{this.codeLeft=JSON.parse(this.leftData.content.text)}catch{this.codeLeft=this.leftData.content.text}r.setText(this.leftData.content.text),r.setMode("code")}}else r.set(this.codeLeft);if(this.rightData&&this.rightData.content){if(this.rightData.content.json)this.codeRight=this.rightData.content.json,d.set(this.rightData.content.json),d.setMode("tree");else if(this.rightData.content.text){try{this.codeRight=JSON.parse(this.rightData.content.text)}catch{this.codeRight=this.rightData.content.text}d.setText(this.rightData.content.text),d.setMode("code")}}else d.set(this.codeRight);const t=W("left"),i=W("right");t&&t!==this.leftId&&(this.selectId=t,this.modalStatus.leftOrRight="left",this.openRecent()),i&&i!==this.rightId&&(this.selectId=i,this.modalStatus.leftOrRight="right",this.openRecent()),this.$nextTick(()=>{this.handleHashParams("left",this.leftId),this.handleHashParams("right",this.rightId),window.addEventListener("hashchange",this.hashChange)})},copyRight(){typeof this.codeLeft=="string"?(d.setMode("code"),d.updateText(this.codeLeft),this.codeRight=this.codeLeft):(this.leftMode==="code"?d.updateText(r.getText()):d.updateText(this.codeLeftString),this.codeRight=$(this.codeLeft)),r.refresh(),d.refresh(),this.save("right")},copyLeft(){typeof this.codeRight=="string"?(r.setMode("code"),r.updateText(this.codeRight),this.codeLeft=this.codeRight):(this.rightMode==="code"?r.updateText(d.getText()):r.updateText(this.codeRightString),this.codeLeft=$(this.codeRight)),r.refresh(),d.refresh(),this.save("left")},save(t){(!t||t==="left")&&(this.leftMode==="tree"?this.saveData({left:!0,id:this.leftId,content:r.get()}):this.saveData({left:!0,id:this.leftId,content:r.getText()})),(!t||t==="right")&&(this.rightMode==="tree"?this.saveData({right:!0,id:this.rightId,content:d.get()}):this.saveData({right:!0,id:this.rightId,content:d.getText()}))},create(t){t==="left"?(r.set({}),this.codeLeft={},this.saveData({left:!0})):t==="right"&&(d.set({}),this.codeRight={},this.saveData({right:!0}))},open(t,i){switch(this.modalStatus.leftOrRight=i,t.key){case"recent":this.modalStatus.type="openRecent";break;case"file":this.$refs.uploader.click();break;case"url":this.modalStatus.type="openUrl";break}},openRecent(){if(this.selectId&&this.data(this.selectId)&&this.data(this.selectId).content){const t=this.data(this.selectId).content;if(this.modalStatus.leftOrRight==="left"){if(this.saveData({left:!0,id:this.selectId}),t.json)this.codeLeft=t.json,r.set(t.json),r.setMode("tree");else if(t.text){try{this.codeLeft=JSON.parse(t.text)}catch{this.codeLeft=t.text}r.setText(t.text),r.setMode("code")}}else if(this.modalStatus.leftOrRight==="right"){if(this.saveData({right:!0,id:this.selectId}),t.json)this.codeRight=t.json,d.set(t.json),d.setMode("tree");else if(t.text){try{this.codeRight=JSON.parse(t.text)}catch{this.codeRight=t.text}d.setText(t.text),d.setMode("code")}}}this.selectId="",this.closeModal()},openFile(t){if(t.target.files.length){const i=t.target.files[0],n=new FileReader;n.onload=()=>{n.result&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(this.codeLeft=n.result,r.setText(n.result),this.save("left")):this.modalStatus.leftOrRight==="right"&&(this.codeRight=n.result,d.setText(n.result),this.save("right")))},n.readAsText(i)}t.target.value=""},async openUrl(t){try{const i=(await this.$axios.get(t)).data;i&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(this.codeLeft=i,r.set(i),this.save("left")):this.modalStatus.leftOrRight==="right"&&(this.codeRight=i,d.set(i),this.save("right")),this.url="",this.closeModal())}catch(i){this.$msg.error(i.message)}},download(t){var i,n;t==="left"?nt(r.getText(),`${((i=this.leftData)==null?void 0:i.name)||"left"}.json`):t==="right"&&nt(d.getText(),`${((n=this.rightData)==null?void 0:n.name)||"right"}.json`)},changeOption(t,i){switch(this.modalStatus.leftOrRight=i,t.key){case"indentation":this.modalStatus.type="setIndentation";break;case"properties":this.modalStatus.type="documentProperties";break;case"delete":i==="left"?this.deleteData({id:this.leftId}):i==="right"&&this.deleteData({id:this.rightId});break}},changeIndentation(){r.indentation=this.indent,d.indentation=this.indent,typeof this.codeLeft=="object"&&r.updateText(this.codeLeftString),typeof this.codeRight=="object"&&d.updateText(this.codeRightString),this.closeModal()},onEditStartLeft(){this.onEditStart("left")},onEditStartRight(){this.onEditStart("right")},onEditStart(t,i){this.currentName=this.documentProperties.name,this.modalStatus.leftOrRight=t||this.modalStatus.leftOrRight},onEditChange(t){this.currentName=t},onEditEnd(){this.modalStatus.leftOrRight==="left"?this.saveData({id:this.leftId,name:this.currentName}):this.modalStatus.leftOrRight==="right"&&this.saveData({id:this.rightId,name:this.currentName}),this.currentName=""},changeDiff(){if(!this.diff){if(typeof this.codeLeft=="string"||typeof this.codeRight=="string"){this.$msg.error("JSON\u5B58\u5728\u9519\u8BEF");return}(this.leftMode!=="tree"||this.rightMode!=="tree")&&this.$msg.warn("\u5BF9\u6BD4\u6A21\u5F0F\u4EC5\u5728\u300C\u6811\u300D\u6A21\u5F0F\u4E0B\u751F\u6548\uFF0C\u8BF7\u5207\u6362\u4E3A\u6811\u6A21\u5F0F")}this.diff=!this.diff,r.refresh(),d.refresh()},onClassName({path:t}){if(this.diff&&!this.fullPanel){const i=lt(this.codeLeft,t),n=lt(this.codeRight,t);return Rt(i,n)?(delete this.diffMap[t],""):(this.diffMap[t]=!0,"differentElement")}else return""},closeModal(){this.modalStatus.type="",this.modalStatus.leftOrRight=""},handleHashParams(t,i){i!=null?bt(t,i):Dt(t)},hashChange(){const t=W("left"),i=W("right");t&&t!==this.leftId&&(this.selectId=t,this.modalStatus.leftOrRight="left",this.openRecent()),i&&i!==this.rightId&&(this.selectId=i,this.modalStatus.leftOrRight="right",this.openRecent())},startDrag(t){t.button===0&&(B=!1,x=parseFloat(window.getComputedStyle(this.$refs.editorPanelContainerLeft).width),isNaN(x)&&(x=0),t.touches?(O=t.touches[0].clientX,document.addEventListener("touchend",this.endDrag),document.addEventListener("touchmove",this.dragMove)):(O=t.clientX,document.addEventListener("mouseup",this.endDrag),document.addEventListener("mousemove",this.dragMove)))},dragMove(t){B=!0;let i=0;t.touches?i=t.touches[0].clientX:i=t.clientX;const n=x-O+i,m=parseFloat(window.getComputedStyle(this.$refs.editorPanel).width);n<435?(this.fullPanel="right",this.fullPanel!==this.fullStatus&&this.setFullStatus("right")):m-100-n<435?(this.fullPanel="left",this.fullPanel!==this.fullStatus&&this.setFullStatus("left")):(this.fullPanel="",this.setSplitter(n/(m-100)),this.fullPanel!==this.fullStatus&&this.setFullStatus())},endDrag(){document.removeEventListener("mousemove",this.dragMove),document.removeEventListener("touchmove",this.dragMove),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchend",this.endDrag)},clickDragger(){B||(this.fullPanel==="left"?(this.setSplitter(1-435/(parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)-100)),this.fullPanel=""):this.fullPanel==="right"&&(this.setSplitter(435/(parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)-100)),this.fullPanel=""))}},oe(["saveData","deleteData","setSplitter","setFullStatus"]))},_=t=>(xt("data-v-5a137184"),t=t(),Et(),t),se={ref:"editorPanel",class:"editorPanel"},le={class:"editorController editorControllerLeft"},ae={class:"editorTitle"},re={class:"buttonWithIcon"},de=h("\xA0\u65B0\u5EFA"),he={class:"buttonWithIcon"},ce=h("\xA0\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),fe={class:"buttonWithIcon"},ue=h("\xA0\u6253\u5F00\u672C\u5730\u6587\u4EF6"),ke={class:"buttonWithIcon"},ge=h("\xA0\u6253\u5F00URL"),me={class:"buttonWithIcon"},_e=h("\xA0\u6253\u5F00"),Le={class:"buttonWithIcon"},ve=h("\xA0\u4FDD\u5B58"),Ce={class:"buttonWithIcon"},we={class:"buttonWithIcon"},ye=h("\xA0\u6587\u6863\u5C5E\u6027"),je={class:"buttonWithIcon"},Me=h("\xA0\u5220\u9664\u6587\u6863"),Se={class:"buttonWithIcon"},Ie=h("\xA0\u9009\u9879"),Re={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},be=_(()=>l("div",{class:"emptySpace"},null,-1)),De=h(" \u590D\u5236 "),We=h(" \u590D\u5236 "),Pe=h(" \u5BF9\u6BD4 "),xe={class:"dragIcon"},Ee={key:0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},ze=_(()=>l("path",{fill:"currentColor",d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"},null,-1)),Oe=[ze],Be={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},He=_(()=>l("path",{fill:"currentColor",d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"},null,-1)),Te=[He],Ne={key:2,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-vertical",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512"},Ve=_(()=>l("path",{fill:"currentColor",d:"M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"},null,-1)),Fe=[Ve],Ue={class:"editorController editorControllerRight"},pe={class:"editorTitle"},Je={class:"buttonWithIcon"},Ze=h("\xA0\u65B0\u5EFA"),Ae={class:"buttonWithIcon"},Xe=h("\xA0\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),qe={class:"buttonWithIcon"},Ge=h("\xA0\u6253\u5F00\u672C\u5730\u6587\u4EF6"),Ke={class:"buttonWithIcon"},Ye=h("\xA0\u6253\u5F00URL"),Qe={class:"buttonWithIcon"},$e=h("\xA0\u6253\u5F00"),ti={class:"buttonWithIcon"},ei=h("\xA0\u4FDD\u5B58"),ii={class:"buttonWithIcon"},oi={class:"buttonWithIcon"},ni=h("\xA0\u6587\u6863\u5C5E\u6027"),si={class:"buttonWithIcon"},li=h("\xA0\u5220\u9664\u6587\u6863"),ai={class:"buttonWithIcon"},ri=h("\xA0\u9009\u9879"),di={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight"},hi=h("\u641C\u7D22"),ci=h(" \u5220\u9664 "),fi=h("\u4E0D\u652F\u6301\u9700\u8981\u9A8C\u8BC1\u6216\u5F00\u542FCORS\u7684\u5730\u5740"),ui=h("\u914D\u7F6E\u4EE3\u7801\u6A21\u5F0F\u4E0B\u7528\u4E8E\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u3002 \u7F29\u8FDB\u540C\u65F6\u5E94\u7528\u4E8E\u4E24\u4E2A\u9762\u677F\u3002"),ki=_(()=>l("strong",null,"\u540D\u79F0\uFF1A",-1)),gi=_(()=>l("strong",null,"\u5B58\u50A8\uFF1A",-1)),mi=_(()=>l("strong",null,"\u66F4\u65B0\uFF1A",-1)),_i=_(()=>l("strong",null,"\u5185\u5BB9\uFF1A",-1)),Li=_(()=>l("strong",null,"\u5927\u5C0F\uFF1A",-1));function vi(t,i,n,m,f,s){var X,q,G,K;const v=c("Text"),H=c("FileAdditionOne"),k=c("Button"),T=c("History"),g=c("MenuItem"),N=c("Computer"),V=c("LinkThree"),S=c("Menu"),F=c("FolderOpen"),j=c("Down"),I=c("Dropdown"),U=c("Save"),p=c("IndentRight"),J=c("Info"),Z=c("Delete"),A=c("SettingTwo"),R=c("Space"),ct=c("Right"),ft=c("Left"),ut=c("Checkbox"),kt=c("Up"),L=c("Paragraph"),E=c("Input"),gt=c("ListItemMeta"),mt=c("ListItem"),_t=c("List"),b=c("Modal");return C(),M(et,null,[l("div",se,[l("div",{ref:"editorPanelContainerLeft",class:P(["editorPanelContainer editorPanelContainerLeft",{full:t.fullPanel==="left",hide:t.fullPanel==="right"}]),style:tt({flex:t.splitterValue+" 1 0"})},[l("div",le,[l("div",ae,[e(v,{content:(X=t.leftData)==null?void 0:X.name,editable:(q=t.leftData)!=null&&q.name?{onStart:s.onEditStartLeft,onChange:s.onEditChange,onEnd:s.onEditEnd}:!1},null,8,["content","editable"])]),e(R,{class:"editorControlButtons"},{default:o(()=>[e(k,{size:"small",type:"primary",onClick:i[0]||(i[0]=a=>s.create("left"))},{default:o(()=>[l("span",re,[e(H,{theme:"outline"}),de])]),_:1}),e(I,null,{overlay:o(()=>[e(S,{trigger:["click","hover"],onClick:i[1]||(i[1]=a=>s.open(a,"left"))},{default:o(()=>[e(g,{key:"recent"},{default:o(()=>[l("span",he,[e(T,{theme:"outline"}),ce])]),_:1}),e(g,{key:"file"},{default:o(()=>[l("span",fe,[e(N,{theme:"outline"}),ue])]),_:1}),e(g,{key:"url"},{default:o(()=>[l("span",ke,[e(V,{theme:"outline"}),ge])]),_:1})]),_:1})]),default:o(()=>[e(k,{size:"small",type:"primary"},{default:o(()=>[l("span",me,[e(F,{theme:"outline"}),_e,e(j,{theme:"outline"})])]),_:1})]),_:1}),e(k,{size:"small",type:"primary",onClick:i[2]||(i[2]=a=>s.download("left"))},{default:o(()=>[l("span",Le,[e(U,{theme:"outline"}),ve])]),_:1}),e(I,null,{overlay:o(()=>[e(S,{trigger:["click","hover"],onClick:i[3]||(i[3]=a=>s.changeOption(a,"left"))},{default:o(()=>[e(g,{key:"indentation"},{default:o(()=>[l("span",Ce,[e(p,{theme:"outline"}),h("\xA0\u7F29\u8FDB("+z(t.indent)+")",1)])]),_:1}),e(g,{key:"properties"},{default:o(()=>[l("span",we,[e(J,{theme:"outline"}),ye])]),_:1}),e(g,{key:"delete",disabled:!Boolean(t.leftId)},{default:o(()=>[l("span",je,[e(Z,{theme:"outline"}),Me])]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[e(k,{size:"small",type:"primary"},{default:o(()=>[l("span",Se,[e(A,{theme:"outline"}),Ie,e(j,{theme:"outline"})])]),_:1})]),_:1})]),_:1})]),l("div",Re,null,512)],6),l("div",{class:P(["controller noShowMobile",{full:t.fullPanel}])},[e(R,{direction:"vertical"},{default:o(()=>[t.fullPanel?it("",!0):(C(),M(et,{key:0},[be,e(k,{type:"primary",block:"",onClick:s.copyRight},{default:o(()=>[De,e(ct,{theme:"outline"})]),_:1},8,["onClick"]),e(k,{type:"primary",block:"",onClick:s.copyLeft},{default:o(()=>[e(ft,{theme:"outline"}),We]),_:1},8,["onClick"]),e(ut,{checked:t.diff,onChange:s.changeDiff},{default:o(()=>[Pe]),_:1},8,["checked","onChange"]),t.diff?(C(),Pt(R,{key:0},{default:o(()=>[e(k,{type:"primary",class:"diffBtn"},{default:o(()=>[e(kt,{theme:"outline"})]),_:1}),e(k,{type:"primary",class:"diffBtn"},{default:o(()=>[e(j,{theme:"outline"})]),_:1})]),_:1})):it("",!0)],64)),l("div",{class:"drag",onMousedown:i[4]||(i[4]=(...a)=>s.startDrag&&s.startDrag(...a)),onTouchstart:i[5]||(i[5]=(...a)=>s.startDrag&&s.startDrag(...a)),onClick:i[6]||(i[6]=(...a)=>s.clickDragger&&s.clickDragger(...a))},[l("div",xe,[t.fullPanel==="right"?(C(),M("svg",Ee,Oe)):t.fullPanel==="left"?(C(),M("svg",Be,Te)):(C(),M("svg",Ne,Fe))])],32)]),_:1})],2),l("div",{class:P(["editorPanelContainer editorPanelContainerRight noShowMobile",{full:t.fullPanel==="right",hide:t.fullPanel==="left"}]),style:tt({flex:1-t.splitterValue+" 1 0"})},[l("div",Ue,[l("div",pe,[e(v,{content:(G=t.rightData)==null?void 0:G.name,editable:(K=t.rightData)!=null&&K.name?{onStart:s.onEditStartRight,onChange:s.onEditChange,onEnd:s.onEditEnd}:!1},null,8,["content","editable"])]),e(R,{class:"editorControlButtons"},{default:o(()=>[e(k,{size:"small",type:"primary",onClick:i[7]||(i[7]=a=>s.create("right"))},{default:o(()=>[l("span",Je,[e(H,{theme:"outline"}),Ze])]),_:1}),e(I,null,{overlay:o(()=>[e(S,{trigger:["click","hover"],onClick:i[8]||(i[8]=a=>s.open(a,"right"))},{default:o(()=>[e(g,{key:"recent"},{default:o(()=>[l("span",Ae,[e(T,{theme:"outline"}),Xe])]),_:1}),e(g,{key:"file"},{default:o(()=>[l("span",qe,[e(N,{theme:"outline"}),Ge])]),_:1}),e(g,{key:"url"},{default:o(()=>[l("span",Ke,[e(V,{theme:"outline"}),Ye])]),_:1})]),_:1})]),default:o(()=>[e(k,{size:"small",type:"primary"},{default:o(()=>[l("span",Qe,[e(F,{theme:"outline"}),$e,e(j,{theme:"outline"})])]),_:1})]),_:1}),e(k,{size:"small",type:"primary",onClick:i[9]||(i[9]=a=>s.download("right"))},{default:o(()=>[l("span",ti,[e(U,{theme:"outline"}),ei])]),_:1}),e(I,null,{overlay:o(()=>[e(S,{trigger:["click","hover"],onClick:i[10]||(i[10]=a=>s.changeOption(a,"right"))},{default:o(()=>[e(g,{key:"indentation"},{default:o(()=>[l("span",ii,[e(p,{theme:"outline"}),h("\xA0\u7F29\u8FDB("+z(t.indent)+")",1)])]),_:1}),e(g,{key:"properties"},{default:o(()=>[l("span",oi,[e(J,{theme:"outline"}),ni])]),_:1}),e(g,{key:"delete",disabled:!Boolean(t.rightId)},{default:o(()=>[l("span",si,[e(Z,{theme:"outline"}),li])]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[e(k,{size:"small",type:"primary"},{default:o(()=>[l("span",ai,[e(A,{theme:"outline"}),ri,e(j,{theme:"outline"})])]),_:1})]),_:1})]),_:1})]),l("div",di,null,512)],6)],512),e(b,{visible:t.modalStatus.type==="openRecent",title:"\u6253\u5F00\u6700\u8FD1",onCancel:s.closeModal,onOk:s.openRecent},{default:o(()=>[e(L,null,{default:o(()=>[hi]),_:1}),e(E,{value:t.keyword,"onUpdate:value":i[11]||(i[11]=a=>t.keyword=a),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0"},null,8,["value"]),e(_t,{class:"dataList","item-layout":"horizontal","data-source":s.dataListAfterSearch},{renderItem:o(({item:a})=>[e(mt,{class:P({selected:a._id===t.selectId}),onClick:Lt=>t.selectId=a._id},{actions:o(()=>[e(k,{type:"primary",danger:"",onClick:Lt=>t.deleteData({id:a._id})},{default:o(()=>[ci]),_:2},1032,["onClick"])]),default:o(()=>[e(gt,{description:"\u6700\u540E\u4FEE\u6539: "+a.updated},{title:o(()=>[h(z(a.name),1)]),_:2},1032,["description"])]),_:2},1032,["class","onClick"])]),_:1},8,["data-source"])]),_:1},8,["visible","onCancel","onOk"]),w(l("input",{ref:"uploader",type:"file",accept:".json,.JSON",onChange:i[12]||(i[12]=(...a)=>s.openFile&&s.openFile(...a))},null,544),[[y,!1]]),e(b,{visible:t.modalStatus.type==="openUrl",title:"\u6253\u5F00URL",onCancel:s.closeModal,onOk:i[14]||(i[14]=a=>s.openUrl(t.url))},{default:o(()=>[e(L,null,{default:o(()=>[fi]),_:1}),e(E,{value:t.url,"onUpdate:value":i[13]||(i[13]=a=>t.url=a),placeholder:"\u8BF7\u8F93\u5165URL\u5730\u5740"},null,8,["value"])]),_:1},8,["visible","onCancel"]),e(b,{visible:t.modalStatus.type==="setIndentation",title:"\u8BBE\u7F6E\u7F29\u8FDB",onCancel:s.closeModal,onOk:s.changeIndentation},{default:o(()=>[e(L,null,{default:o(()=>[ui]),_:1}),e(E,{value:t.indent,"onUpdate:value":i[15]||(i[15]=a=>t.indent=a),valueModifiers:{number:!0}},null,8,["value"])]),_:1},8,["visible","onCancel","onOk"]),e(b,{visible:t.modalStatus.type==="documentProperties",title:"\u6587\u6863\u5C5E\u6027",class:"documentProperties",onCancel:s.closeModal,onOk:s.closeModal},{default:o(()=>[e(L,null,{default:o(()=>[ki,w(e(v,{editable:{onStart:s.onEditStart,onChange:s.onEditChange,onEnd:s.onEditEnd},content:s.documentProperties.name},null,8,["editable","content"]),[[y,s.documentProperties.name]])]),_:1}),e(L,null,{default:o(()=>[gi,w(e(v,{content:s.documentProperties.storage},null,8,["content"]),[[y,s.documentProperties.storage]])]),_:1}),e(L,null,{default:o(()=>[mi,w(e(v,{content:s.documentProperties.updated},null,8,["content"]),[[y,s.documentProperties.updated]])]),_:1}),e(L,null,{default:o(()=>[_i,w(e(v,{content:s.documentProperties.content},null,8,["content"]),[[y,s.documentProperties.content]])]),_:1}),e(L,null,{default:o(()=>[Li,w(e(v,{content:s.documentProperties.size},null,8,["content"]),[[y,s.documentProperties.size]])]),_:1})]),_:1},8,["visible","onCancel","onOk"])],64)}var eo=yt(ne,[["render",vi],["__scopeId","data-v-5a137184"]]);export{eo as default};
