var yt=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var Z=(t,s,o)=>s in t?yt(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,M=(t,s)=>{for(var o in s||(s={}))vt.call(s,o)&&Z(t,o,s[o]);if(Y)for(var o of Y(s))St.call(s,o)&&Z(t,o,s[o]);return t};import{_ as Ct,g as w,s as Lt,d as It}from"./index.39a22d96.js";import{a5 as Rt,a4 as kt,aj as bt,ak as Dt,al as Mt,am as wt,an as Pt,ao as lt,ap as Et,N as Ot,ah as Tt,aq as dt,ar as xt,as as jt,at as Nt,au as Bt,av as Wt,aw as zt,ax as Ft,ay as Ut,az as Jt,aA as At,aB as Ht,aC as Q,j as $,aD as tt,aE as Vt,c as I,a,k as P,n as et,f as e,y as i,H as v,J as st,T as Xt,r as c,o as S,K as h,g as T,h as qt,L as it,I as C,p as Gt,b as Kt}from"./vendor.a724c08c.js";import{J as ot}from"./jsoneditor.min.2fbb844b.js";import{c as nt}from"./createFile.c5da6ee9.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */function at(t,s=2){if(t===0)return"0 Bytes";const o=1024,m=s<0?0:s,f=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(o));return parseFloat((t/Math.pow(o,n)).toFixed(m))+" "+f[n]}const{Item:Yt}=lt,{Paragraph:Zt,Text:Qt}=Xt,{Item:rt}=dt,{Meta:$t}=rt,{mapState:te,mapGetters:ee,mapMutations:se}=Rt("jsonEditor");let d,r,x=0,E=0,j=!1;const ie={name:"JsonEditor",components:{Button:kt,Space:bt,Checkbox:Dt,Right:Mt,Left:wt,Dropdown:Pt,Menu:lt,MenuItem:Yt,Down:Et,Modal:Ot,Input:Tt,Paragraph:Zt,List:dt,ListItem:rt,ListItemMeta:$t,FileAdditionOne:xt,FolderOpen:jt,Save:Nt,History:Bt,Computer:Wt,LinkThree:zt,SettingTwo:Ft,Info:Ut,Delete:Jt,IndentRight:At,Text:Qt,Up:Ht},data:()=>({codeLeft:{array:[1,2,3],boolean:!0,color:"gold",null:null,number:123,object:{a:"b",c:"d"},string:"Hello World"},codeRight:{},diff:!1,modalStatus:{type:"",leftOrRight:""},url:"",keyword:"",selectId:"",indent:2,currentName:"",diffMap:{},leftMode:"code",rightMode:"tree",fullPanel:""}),computed:M(M({dataListAfterSearch:function(){return this.dataList(this.keyword)},codeLeftString:function(){return typeof this.codeLeft=="string"?this.codeLeft:JSON.stringify(this.codeLeft,null,this.indent)},codeRightString:function(){return typeof this.codeRight=="string"?this.codeRight:JSON.stringify(this.codeRight,null,this.indent)},documentProperties:function(){var t,s,o,m;if(this.modalStatus.leftOrRight==="left"){let f;return typeof this.codeLeft=="string"?f="\u5B57\u7B26\u4E32\u7C7B\u578B":typeof this.codeLeft=="number"?f="\u6570\u5B57\u7C7B\u578B":typeof this.codeLeft=="boolean"?f="\u5E03\u5C14\u7C7B\u578B":Array.isArray(this.codeLeft)?f=`\u6570\u7EC4\u7C7B\u578B\uFF0C\u5305\u542B ${this.codeLeft.length} \u4E2A\u5BF9\u8C61`:typeof this.codeLeft=="object"&&(f=`\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B ${Object.keys(this.codeLeft).length} \u4E2A\u5C5E\u6027`),{name:(t=this.leftData)==null?void 0:t.name,storage:this.leftData?"\u6D4F\u89C8\u5668\u672C\u5730":"",updated:(s=this.leftData)==null?void 0:s.updated,content:f,size:at(this.codeLeftString.length)}}else if(this.modalStatus.leftOrRight==="right"){let f;return typeof this.codeRight=="string"?f="\u5B57\u7B26\u4E32\u7C7B\u578B":typeof this.codeRight=="number"?f="\u6570\u5B57\u7C7B\u578B":typeof this.codeRight=="boolean"?f="\u5E03\u5C14\u7C7B\u578B":Array.isArray(this.codeRight)?f=`\u6570\u7EC4\u7C7B\u578B\uFF0C\u5305\u542B ${this.codeRight.length} \u4E2A\u5BF9\u8C61`:typeof this.codeRight=="object"&&(f=`\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B ${Object.keys(this.codeRight).length} \u4E2A\u5C5E\u6027`),{name:(o=this.rightData)==null?void 0:o.name,storage:this.rightData?"\u6D4F\u89C8\u5668\u672C\u5730":"",updated:(m=this.rightData)==null?void 0:m.updated,content:f,size:at(this.codeRightString.length)}}else return{}}},te(["leftId","rightId","splitterValue","fullStatus"])),ee(["dataList","data","leftData","rightData"])),watch:{leftId:{handler:function(t){this.handleHashParams("left",t)}},rightId:{handler:function(t){this.handleHashParams("right",t)}}},mounted(){this.init()},beforeUnmount(){d&&d.destroy(),r&&r.destroy(),window.removeEventListener("hashchange",this.hashChange)},methods:M({init(){if(this.fullPanel=this.fullStatus,d=new ot(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree"],onClassName:this.onClassName,onChangeText:Q(o=>{this.diffMap={};try{this.codeLeft=JSON.parse(o)}catch{this.codeLeft=o}d.refresh(),r.refresh(),this.save("left")},100),onModeChange:o=>{this.leftMode=o,o==="code"&&typeof this.codeLeft!="string"&&d.updateText(this.codeLeftString),this.save("left")},onError:o=>{this.$msg.error(o.message)}}),r=new ot(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree"],onClassName:this.onClassName,onChangeText:Q(o=>{this.diffMap={};try{this.codeRight=JSON.parse(o)}catch{this.codeRight=o}d.refresh(),r.refresh(),this.save("right")},100),onModeChange:o=>{this.rightMode=o,o==="code"&&typeof this.codeRight!="string"&&r.updateText(this.codeRightString),this.save("right")},onError:o=>{this.$msg.error(o.message)}}),this.leftData&&this.leftData.content){if(this.leftData.content.json)this.codeLeft=this.leftData.content.json,d.set(this.leftData.content.json),d.setMode("tree");else if(this.leftData.content.text){try{this.codeLeft=JSON.parse(this.leftData.content.text)}catch{this.codeLeft=this.leftData.content.text}d.setText(this.leftData.content.text),d.setMode("code")}}else d.set(this.codeLeft);if(this.rightData&&this.rightData.content){if(this.rightData.content.json)this.codeRight=this.rightData.content.json,r.set(this.rightData.content.json),r.setMode("tree");else if(this.rightData.content.text){try{this.codeRight=JSON.parse(this.rightData.content.text)}catch{this.codeRight=this.rightData.content.text}r.setText(this.rightData.content.text),r.setMode("code")}}else r.set(this.codeRight);const t=w("left"),s=w("right");t&&t!==this.leftId&&(this.selectId=t,this.modalStatus.leftOrRight="left",this.openRecent()),s&&s!==this.rightId&&(this.selectId=s,this.modalStatus.leftOrRight="right",this.openRecent()),this.$nextTick(()=>{this.handleHashParams("left",this.leftId),this.handleHashParams("right",this.rightId),window.addEventListener("hashchange",this.hashChange)})},copyRight(){typeof this.codeLeft=="string"?(r.setMode("code"),r.updateText(this.codeLeft),this.codeRight=this.codeLeft):(this.leftMode==="code"?r.updateText(d.getText()):r.updateText(this.codeLeftString),this.codeRight=$(this.codeLeft)),d.refresh(),r.refresh(),this.save("right")},copyLeft(){typeof this.codeRight=="string"?(d.setMode("code"),d.updateText(this.codeRight),this.codeLeft=this.codeRight):(this.rightMode==="code"?d.updateText(r.getText()):d.updateText(this.codeRightString),this.codeLeft=$(this.codeRight)),d.refresh(),r.refresh(),this.save("left")},save(t){(!t||t==="left")&&(this.leftMode==="tree"?this.saveData({left:!0,id:this.leftId,content:d.get()}):this.saveData({left:!0,id:this.leftId,content:d.getText()})),(!t||t==="right")&&(this.rightMode==="tree"?this.saveData({right:!0,id:this.rightId,content:r.get()}):this.saveData({right:!0,id:this.rightId,content:r.getText()}))},create(t){t==="left"?(d.set({}),this.codeLeft={},this.saveData({left:!0})):t==="right"&&(r.set({}),this.codeRight={},this.saveData({right:!0}))},open(t,s){switch(this.modalStatus.leftOrRight=s,t.key){case"recent":this.modalStatus.type="openRecent";break;case"file":this.$refs.uploader.click();break;case"url":this.modalStatus.type="openUrl";break}},openRecent(){if(this.selectId&&this.data(this.selectId)&&this.data(this.selectId).content){const t=this.data(this.selectId).content;if(this.modalStatus.leftOrRight==="left"){if(this.saveData({left:!0,id:this.selectId}),t.json)this.codeLeft=t.json,d.set(t.json),d.setMode("tree");else if(t.text){try{this.codeLeft=JSON.parse(t.text)}catch{this.codeLeft=t.text}d.setText(t.text),d.setMode("code")}}else if(this.modalStatus.leftOrRight==="right"){if(this.saveData({right:!0,id:this.selectId}),t.json)this.codeRight=t.json,r.set(t.json),r.setMode("tree");else if(t.text){try{this.codeRight=JSON.parse(t.text)}catch{this.codeRight=t.text}r.setText(t.text),r.setMode("code")}}}this.selectId="",this.closeModal()},openFile(t){if(t.target.files.length){const s=t.target.files[0],o=new FileReader;o.onload=()=>{o.result&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(this.codeLeft=o.result,d.setText(o.result),this.save("left")):this.modalStatus.leftOrRight==="right"&&(this.codeRight=o.result,r.setText(o.result),this.save("right")))},o.readAsText(s)}t.target.value=""},async openUrl(t){try{const s=(await this.$axios.get(t)).data;s&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(this.codeLeft=s,d.set(s),this.save("left")):this.modalStatus.leftOrRight==="right"&&(this.codeRight=s,r.set(s),this.save("right")),this.url="",this.closeModal())}catch(s){this.$msg.error(s.message)}},download(t){var s,o;t==="left"?nt(d.getText(),`${((s=this.leftData)==null?void 0:s.name)||"left"}.json`):t==="right"&&nt(r.getText(),`${((o=this.rightData)==null?void 0:o.name)||"right"}.json`)},changeOption(t,s){switch(this.modalStatus.leftOrRight=s,t.key){case"indentation":this.modalStatus.type="setIndentation";break;case"properties":this.modalStatus.type="documentProperties";break;case"delete":s==="left"?this.deleteData({id:this.leftId}):s==="right"&&this.deleteData({id:this.rightId});break}},changeIndentation(){d.indentation=this.indent,r.indentation=this.indent,typeof this.codeLeft=="object"&&d.updateText(this.codeLeftString),typeof this.codeRight=="object"&&r.updateText(this.codeRightString),this.closeModal()},onEditStartLeft(){this.onEditStart("left")},onEditStartRight(){this.onEditStart("right")},onEditStart(t,s){this.currentName=this.documentProperties.name,this.modalStatus.leftOrRight=t||this.modalStatus.leftOrRight},onEditChange(t){this.currentName=t},onEditEnd(){this.modalStatus.leftOrRight==="left"?this.saveData({id:this.leftId,name:this.currentName}):this.modalStatus.leftOrRight==="right"&&this.saveData({id:this.rightId,name:this.currentName}),this.currentName=""},changeDiff(){if(!this.diff){if(typeof this.codeLeft=="string"||typeof this.codeRight=="string"){this.$msg.error("JSON\u5B58\u5728\u9519\u8BEF");return}(this.leftMode!=="tree"||this.rightMode!=="tree")&&this.$msg.warn("\u5BF9\u6BD4\u6A21\u5F0F\u4EC5\u5728\u300C\u6811\u300D\u6A21\u5F0F\u4E0B\u751F\u6548\uFF0C\u8BF7\u5207\u6362\u4E3A\u6811\u6A21\u5F0F")}this.diff=!this.diff,d.refresh(),r.refresh()},onClassName({path:t}){if(this.diff&&!this.fullPanel){const s=tt(this.codeLeft,t),o=tt(this.codeRight,t);return Vt(s,o)?(delete this.diffMap[t],""):(this.diffMap[t]=!0,"differentElement")}else return""},closeModal(){this.modalStatus.type="",this.modalStatus.leftOrRight=""},handleHashParams(t,s){s!=null?Lt(t,s):It(t)},hashChange(){const t=w("left"),s=w("right");t&&t!==this.leftId&&(this.selectId=t,this.modalStatus.leftOrRight="left",this.openRecent()),s&&s!==this.rightId&&(this.selectId=s,this.modalStatus.leftOrRight="right",this.openRecent())},startDrag(t){t.button===0&&(j=!1,E=parseFloat(window.getComputedStyle(this.$refs.editorPanelContainerLeft).width),isNaN(E)&&(E=0),t.touches?(x=t.touches[0].clientX,document.addEventListener("touchend",this.endDrag),document.addEventListener("touchmove",this.dragMove)):(x=t.clientX,document.addEventListener("mouseup",this.endDrag),document.addEventListener("mousemove",this.dragMove)))},dragMove(t){j=!0;let s=0;t.touches?s=t.touches[0].clientX:s=t.clientX;const o=E-x+s,m=parseFloat(window.getComputedStyle(this.$refs.editorPanel).width);o<435?(this.fullPanel="right",this.fullPanel!==this.fullStatus&&this.setFullStatus("right")):m-100-o<435?(this.fullPanel="left",this.fullPanel!==this.fullStatus&&this.setFullStatus("left")):(this.fullPanel="",this.setSplitter(o/(m-100)),this.fullPanel!==this.fullStatus&&this.setFullStatus())},endDrag(){document.removeEventListener("mousemove",this.dragMove),document.removeEventListener("touchmove",this.dragMove),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchend",this.endDrag)},clickDragger(){j||(this.fullPanel==="left"?(this.setSplitter(1-435/(parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)-100)),this.fullPanel=""):this.fullPanel==="right"&&(this.setSplitter(435/(parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)-100)),this.fullPanel=""))}},se(["saveData","deleteData","setSplitter","setFullStatus"]))},p=t=>(Gt("data-v-38432b0b"),t=t(),Kt(),t),oe={ref:"editorPanel",class:"editorPanel"},ne={class:"editorController editorControllerLeft"},ae={class:"editorTitle"},le={class:"buttonWithIcon"},de=h("\xA0\u65B0\u5EFA"),re={class:"buttonWithIcon"},he=h("\xA0\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),ce={class:"buttonWithIcon"},fe=h("\xA0\u6253\u5F00\u672C\u5730\u6587\u4EF6"),ue={class:"buttonWithIcon"},ge=h("\xA0\u6253\u5F00URL"),me={class:"buttonWithIcon"},pe=h("\xA0\u6253\u5F00"),_e={class:"buttonWithIcon"},ye=h("\xA0\u4FDD\u5B58"),ve={class:"buttonWithIcon"},Se={class:"buttonWithIcon"},Ce=h("\xA0\u6587\u6863\u5C5E\u6027"),Le={class:"buttonWithIcon"},Ie=h("\xA0\u5220\u9664\u6587\u6863"),Re={class:"buttonWithIcon"},ke=h("\xA0\u9009\u9879"),be={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},De=p(()=>a("div",{class:"emptySpace"},null,-1)),Me=h(" \u590D\u5236 "),we=h(" \u590D\u5236 "),Pe=h(" \u5BF9\u6BD4 "),Ee={class:"dragIcon"},Oe={key:0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Te=p(()=>a("path",{fill:"currentColor",d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"},null,-1)),xe=[Te],je={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Ne=p(()=>a("path",{fill:"currentColor",d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"},null,-1)),Be=[Ne],We={key:2,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-vertical",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512"},ze=p(()=>a("path",{fill:"currentColor",d:"M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"},null,-1)),Fe=[ze],Ue={class:"editorController editorControllerRight"},Je={class:"editorTitle"},Ae={class:"buttonWithIcon"},He=h("\xA0\u65B0\u5EFA"),Ve={class:"buttonWithIcon"},Xe=h("\xA0\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),qe={class:"buttonWithIcon"},Ge=h("\xA0\u6253\u5F00\u672C\u5730\u6587\u4EF6"),Ke={class:"buttonWithIcon"},Ye=h("\xA0\u6253\u5F00URL"),Ze={class:"buttonWithIcon"},Qe=h("\xA0\u6253\u5F00"),$e={class:"buttonWithIcon"},ts=h("\xA0\u4FDD\u5B58"),es={class:"buttonWithIcon"},ss={class:"buttonWithIcon"},is=h("\xA0\u6587\u6863\u5C5E\u6027"),os={class:"buttonWithIcon"},ns=h("\xA0\u5220\u9664\u6587\u6863"),as={class:"buttonWithIcon"},ls=h("\xA0\u9009\u9879"),ds={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight"},rs=h("\u641C\u7D22"),hs=h(" \u5220\u9664 "),cs=h("\u4E0D\u652F\u6301\u9700\u8981\u9A8C\u8BC1\u6216\u5F00\u542FCORS\u7684\u5730\u5740"),fs=h("\u914D\u7F6E\u4EE3\u7801\u6A21\u5F0F\u4E0B\u7528\u4E8E\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u3002 \u7F29\u8FDB\u540C\u65F6\u5E94\u7528\u4E8E\u4E24\u4E2A\u9762\u677F\u3002"),us=p(()=>a("strong",null,"\u540D\u79F0\uFF1A",-1)),gs=p(()=>a("strong",null,"\u5B58\u50A8\uFF1A",-1)),ms=p(()=>a("strong",null,"\u66F4\u65B0\uFF1A",-1)),ps=p(()=>a("strong",null,"\u5185\u5BB9\uFF1A",-1)),_s=p(()=>a("strong",null,"\u5927\u5C0F\uFF1A",-1));function ys(t,s,o,m,f,n){var X,q,G,K;const y=c("Text"),N=c("FileAdditionOne"),u=c("Button"),B=c("History"),g=c("MenuItem"),W=c("Computer"),z=c("LinkThree"),R=c("Menu"),F=c("FolderOpen"),L=c("Down"),k=c("Dropdown"),U=c("Save"),J=c("IndentRight"),A=c("Info"),H=c("Delete"),V=c("SettingTwo"),b=c("Space"),ht=c("Right"),ct=c("Left"),ft=c("Checkbox"),ut=c("Up"),_=c("Paragraph"),O=c("Input"),gt=c("ListItemMeta"),mt=c("ListItem"),pt=c("List"),D=c("Modal");return S(),I(st,null,[a("div",oe,[a("div",{ref:"editorPanelContainerLeft",class:P(["editorPanelContainer editorPanelContainerLeft",{full:t.fullPanel==="left",hide:t.fullPanel==="right"}]),style:et({flex:t.splitterValue+" 1 0"})},[a("div",ne,[a("div",ae,[e(y,{content:(X=t.leftData)==null?void 0:X.name,editable:(q=t.leftData)!=null&&q.name?{onStart:n.onEditStartLeft,onChange:n.onEditChange,onEnd:n.onEditEnd}:!1},null,8,["content","editable"])]),e(b,{class:"editorControlButtons"},{default:i(()=>[e(u,{size:"small",type:"primary",onClick:s[0]||(s[0]=l=>n.create("left"))},{default:i(()=>[a("span",le,[e(N,{theme:"outline"}),de])]),_:1}),e(k,null,{overlay:i(()=>[e(R,{trigger:["click","hover"],onClick:s[1]||(s[1]=l=>n.open(l,"left"))},{default:i(()=>[e(g,{key:"recent"},{default:i(()=>[a("span",re,[e(B,{theme:"outline"}),he])]),_:1}),e(g,{key:"file"},{default:i(()=>[a("span",ce,[e(W,{theme:"outline"}),fe])]),_:1}),e(g,{key:"url"},{default:i(()=>[a("span",ue,[e(z,{theme:"outline"}),ge])]),_:1})]),_:1})]),default:i(()=>[e(u,{size:"small",type:"primary"},{default:i(()=>[a("span",me,[e(F,{theme:"outline"}),pe,e(L,{theme:"outline"})])]),_:1})]),_:1}),e(u,{size:"small",type:"primary",onClick:s[2]||(s[2]=l=>n.download("left"))},{default:i(()=>[a("span",_e,[e(U,{theme:"outline"}),ye])]),_:1}),e(k,null,{overlay:i(()=>[e(R,{trigger:["click","hover"],onClick:s[3]||(s[3]=l=>n.changeOption(l,"left"))},{default:i(()=>[e(g,{key:"indentation"},{default:i(()=>[a("span",ve,[e(J,{theme:"outline"}),h("\xA0\u7F29\u8FDB("+T(t.indent)+")",1)])]),_:1}),e(g,{key:"properties"},{default:i(()=>[a("span",Se,[e(A,{theme:"outline"}),Ce])]),_:1}),e(g,{key:"delete",disabled:!Boolean(t.leftId)},{default:i(()=>[a("span",Le,[e(H,{theme:"outline"}),Ie])]),_:1},8,["disabled"])]),_:1})]),default:i(()=>[e(u,{size:"small",type:"primary"},{default:i(()=>[a("span",Re,[e(V,{theme:"outline"}),ke,e(L,{theme:"outline"})])]),_:1})]),_:1})]),_:1})]),a("div",be,null,512)],6),a("div",{class:P(["controller noShowMobile",{full:t.fullPanel}])},[e(b,{direction:"vertical"},{default:i(()=>[t.fullPanel?it("",!0):(S(),I(st,{key:0},[De,e(u,{type:"primary",block:"",onClick:n.copyRight},{default:i(()=>[Me,e(ht,{theme:"outline"})]),_:1},8,["onClick"]),e(u,{type:"primary",block:"",onClick:n.copyLeft},{default:i(()=>[e(ct,{theme:"outline"}),we]),_:1},8,["onClick"]),e(ft,{checked:t.diff,onChange:n.changeDiff},{default:i(()=>[Pe]),_:1},8,["checked","onChange"]),t.diff?(S(),qt(b,{key:0},{default:i(()=>[e(u,{type:"primary",class:"diffBtn"},{default:i(()=>[e(ut,{theme:"outline"})]),_:1}),e(u,{type:"primary",class:"diffBtn"},{default:i(()=>[e(L,{theme:"outline"})]),_:1})]),_:1})):it("",!0)],64)),a("div",{class:"drag",onMousedown:s[4]||(s[4]=(...l)=>n.startDrag&&n.startDrag(...l)),onTouchstart:s[5]||(s[5]=(...l)=>n.startDrag&&n.startDrag(...l)),onClick:s[6]||(s[6]=(...l)=>n.clickDragger&&n.clickDragger(...l))},[a("div",Ee,[t.fullPanel==="right"?(S(),I("svg",Oe,xe)):t.fullPanel==="left"?(S(),I("svg",je,Be)):(S(),I("svg",We,Fe))])],32)]),_:1})],2),a("div",{class:P(["editorPanelContainer editorPanelContainerRight noShowMobile",{full:t.fullPanel==="right",hide:t.fullPanel==="left"}]),style:et({flex:1-t.splitterValue+" 1 0"})},[a("div",Ue,[a("div",Je,[e(y,{content:(G=t.rightData)==null?void 0:G.name,editable:(K=t.rightData)!=null&&K.name?{onStart:n.onEditStartRight,onChange:n.onEditChange,onEnd:n.onEditEnd}:!1},null,8,["content","editable"])]),e(b,{class:"editorControlButtons"},{default:i(()=>[e(u,{size:"small",type:"primary",onClick:s[7]||(s[7]=l=>n.create("right"))},{default:i(()=>[a("span",Ae,[e(N,{theme:"outline"}),He])]),_:1}),e(k,null,{overlay:i(()=>[e(R,{trigger:["click","hover"],onClick:s[8]||(s[8]=l=>n.open(l,"right"))},{default:i(()=>[e(g,{key:"recent"},{default:i(()=>[a("span",Ve,[e(B,{theme:"outline"}),Xe])]),_:1}),e(g,{key:"file"},{default:i(()=>[a("span",qe,[e(W,{theme:"outline"}),Ge])]),_:1}),e(g,{key:"url"},{default:i(()=>[a("span",Ke,[e(z,{theme:"outline"}),Ye])]),_:1})]),_:1})]),default:i(()=>[e(u,{size:"small",type:"primary"},{default:i(()=>[a("span",Ze,[e(F,{theme:"outline"}),Qe,e(L,{theme:"outline"})])]),_:1})]),_:1}),e(u,{size:"small",type:"primary",onClick:s[9]||(s[9]=l=>n.download("right"))},{default:i(()=>[a("span",$e,[e(U,{theme:"outline"}),ts])]),_:1}),e(k,null,{overlay:i(()=>[e(R,{trigger:["click","hover"],onClick:s[10]||(s[10]=l=>n.changeOption(l,"right"))},{default:i(()=>[e(g,{key:"indentation"},{default:i(()=>[a("span",es,[e(J,{theme:"outline"}),h("\xA0\u7F29\u8FDB("+T(t.indent)+")",1)])]),_:1}),e(g,{key:"properties"},{default:i(()=>[a("span",ss,[e(A,{theme:"outline"}),is])]),_:1}),e(g,{key:"delete",disabled:!Boolean(t.rightId)},{default:i(()=>[a("span",os,[e(H,{theme:"outline"}),ns])]),_:1},8,["disabled"])]),_:1})]),default:i(()=>[e(u,{size:"small",type:"primary"},{default:i(()=>[a("span",as,[e(V,{theme:"outline"}),ls,e(L,{theme:"outline"})])]),_:1})]),_:1})]),_:1})]),a("div",ds,null,512)],6)],512),e(D,{visible:t.modalStatus.type==="openRecent",title:"\u6253\u5F00\u6700\u8FD1",onCancel:n.closeModal,onOk:n.openRecent},{default:i(()=>[e(_,null,{default:i(()=>[rs]),_:1}),e(O,{value:t.keyword,"onUpdate:value":s[11]||(s[11]=l=>t.keyword=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0"},null,8,["value"]),e(pt,{class:"dataList","item-layout":"horizontal","data-source":n.dataListAfterSearch},{renderItem:i(({item:l})=>[e(mt,{class:P({selected:l._id===t.selectId}),onClick:_t=>t.selectId=l._id},{actions:i(()=>[e(u,{type:"primary",danger:"",onClick:_t=>t.deleteData({id:l._id})},{default:i(()=>[hs]),_:2},1032,["onClick"])]),default:i(()=>[e(gt,{description:"\u6700\u540E\u4FEE\u6539: "+l.updated},{title:i(()=>[h(T(l.name),1)]),_:2},1032,["description"])]),_:2},1032,["class","onClick"])]),_:1},8,["data-source"])]),_:1},8,["visible","onCancel","onOk"]),v(a("input",{ref:"uploader",type:"file",accept:".json,.JSON",onChange:s[12]||(s[12]=(...l)=>n.openFile&&n.openFile(...l))},null,544),[[C,!1]]),e(D,{visible:t.modalStatus.type==="openUrl",title:"\u6253\u5F00URL",onCancel:n.closeModal,onOk:s[14]||(s[14]=l=>n.openUrl(t.url))},{default:i(()=>[e(_,null,{default:i(()=>[cs]),_:1}),e(O,{value:t.url,"onUpdate:value":s[13]||(s[13]=l=>t.url=l),placeholder:"\u8BF7\u8F93\u5165URL\u5730\u5740"},null,8,["value"])]),_:1},8,["visible","onCancel"]),e(D,{visible:t.modalStatus.type==="setIndentation",title:"\u8BBE\u7F6E\u7F29\u8FDB",onCancel:n.closeModal,onOk:n.changeIndentation},{default:i(()=>[e(_,null,{default:i(()=>[fs]),_:1}),e(O,{value:t.indent,"onUpdate:value":s[15]||(s[15]=l=>t.indent=l),valueModifiers:{number:!0}},null,8,["value"])]),_:1},8,["visible","onCancel","onOk"]),e(D,{visible:t.modalStatus.type==="documentProperties",title:"\u6587\u6863\u5C5E\u6027",class:"documentProperties",onCancel:n.closeModal,onOk:n.closeModal},{default:i(()=>[e(_,null,{default:i(()=>[us,v(e(y,{editable:{onStart:n.onEditStart,onChange:n.onEditChange,onEnd:n.onEditEnd},content:n.documentProperties.name},null,8,["editable","content"]),[[C,n.documentProperties.name]])]),_:1}),e(_,null,{default:i(()=>[gs,v(e(y,{content:n.documentProperties.storage},null,8,["content"]),[[C,n.documentProperties.storage]])]),_:1}),e(_,null,{default:i(()=>[ms,v(e(y,{content:n.documentProperties.updated},null,8,["content"]),[[C,n.documentProperties.updated]])]),_:1}),e(_,null,{default:i(()=>[ps,v(e(y,{content:n.documentProperties.content},null,8,["content"]),[[C,n.documentProperties.content]])]),_:1}),e(_,null,{default:i(()=>[_s,v(e(y,{content:n.documentProperties.size},null,8,["content"]),[[C,n.documentProperties.size]])]),_:1})]),_:1},8,["visible","onCancel","onOk"])],64)}var Ts=Ct(ie,[["render",ys],["__scopeId","data-v-38432b0b"]]);export{Ts as default};