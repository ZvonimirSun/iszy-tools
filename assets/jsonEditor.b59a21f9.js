var vt=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var Z=(t,e,o)=>e in t?vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,M=(t,e)=>{for(var o in e||(e={}))yt.call(e,o)&&Z(t,o,e[o]);if(Y)for(var o of Y(e))St.call(e,o)&&Z(t,o,e[o]);return t};import{_ as Ct,g as w,s as It,d as Lt}from"./index.2bce698b.js";import{a5 as kt,a4 as Dt,aj as Rt,ak as Mt,al as wt,am as bt,an as Pt,ao as lt,ap as Et,N as Ot,ah as Tt,aq as dt,ar as xt,as as Nt,at as jt,au as Bt,av as Wt,aw as zt,ax as Ft,ay as Ut,az as Jt,aA as Ht,aB as Vt,aC as Q,j as $,aD as tt,aE as At,c as S,a,k as b,n as et,f as s,y as i,H as C,J as st,T as Xt,r as c,o as v,K as h,g as O,h as qt,L as it,I,p as Gt,b as Kt}from"./vendor.53be07e2.js";import{J as ot}from"./jsoneditor.min.9da9fe96.js";import{c as nt}from"./createFile.ae770435.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */function at(t,e=2){if(t===0)return"0 Bytes";const o=1024,g=e<0?0:e,N=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(o));return parseFloat((t/Math.pow(o,n)).toFixed(g))+" "+N[n]}const{Item:Yt}=lt,{Paragraph:Zt,Text:Qt}=Xt,{Item:rt}=dt,{Meta:$t}=rt,{mapState:te,mapGetters:ee,mapMutations:se}=kt("jsonEditor");let d,r,T=0,P=0,x=!1;const ie={name:"JsonEditor",components:{Button:Dt,Space:Rt,Checkbox:Mt,Right:wt,Left:bt,Dropdown:Pt,Menu:lt,MenuItem:Yt,Down:Et,Modal:Ot,Input:Tt,Paragraph:Zt,List:dt,ListItem:rt,ListItemMeta:$t,FileAdditionOne:xt,FolderOpen:Nt,Save:jt,History:Bt,Computer:Wt,LinkThree:zt,SettingTwo:Ft,Info:Ut,Delete:Jt,IndentRight:Ht,Text:Qt,Up:Vt},data:()=>({codeLeft:{array:[1,2,3],boolean:!0,color:"gold",null:null,number:123,object:{a:"b",c:"d"},string:"Hello World"},codeRight:{},diff:!1,modalStatus:{type:"",leftOrRight:""},url:"",keyword:"",selectId:"",indent:2,currentName:"",diffMap:{},leftMode:"code",rightMode:"tree",fullPanel:""}),watch:{leftId:{handler:function(t){this.handleHashParams("left",t)}},rightId:{handler:function(t){this.handleHashParams("right",t)}}},computed:M(M({dataListAfterSearch:function(){return this.dataList(this.keyword)},codeLeftString:function(){return typeof this.codeLeft=="string"?this.codeLeft:JSON.stringify(this.codeLeft,null,this.indent)},codeRightString:function(){return typeof this.codeRight=="string"?this.codeRight:JSON.stringify(this.codeRight,null,this.indent)},documentProperties:function(){var t,e,o,g;return this.modalStatus.leftOrRight==="left"?{name:(t=this.leftData)==null?void 0:t.name,storage:this.leftData?"\u6D4F\u89C8\u5668\u672C\u5730":"",updated:(e=this.leftData)==null?void 0:e.updated,size:at(this.codeLeftString.length)}:this.modalStatus.leftOrRight==="right"?{name:(o=this.rightData)==null?void 0:o.name,storage:this.rightData?"\u6D4F\u89C8\u5668\u672C\u5730":"",updated:(g=this.rightData)==null?void 0:g.updated,size:at(this.codeRightString.length)}:{}}},te(["leftId","rightId","splitterValue","fullStatus"])),ee(["dataList","data","leftData","rightData"])),mounted(){this.init()},methods:M({init(){if(this.fullPanel=this.fullStatus,d=new ot(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree"],onClassName:this.onClassName,onChangeText:Q(o=>{this.diffMap={};try{this.codeLeft=JSON.parse(o)}catch{this.codeLeft=o}d.refresh(),r.refresh(),this.save("left")},100),onModeChange:o=>{this.leftMode=o,o==="code"&&typeof this.codeLeft!="string"&&d.updateText(this.codeLeftString),this.save("left")},onError:o=>{this.$msg.error(o.message)}}),r=new ot(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree"],onClassName:this.onClassName,onChangeText:Q(o=>{this.diffMap={};try{this.codeRight=JSON.parse(o)}catch{this.codeRight=o}d.refresh(),r.refresh(),this.save("right")},100),onModeChange:o=>{this.rightMode=o,o==="code"&&typeof this.codeRight!="string"&&r.updateText(this.codeRightString),this.save("right")},onError:o=>{this.$msg.error(o.message)}}),this.leftData&&this.leftData.content){if(this.leftData.content.json)this.codeLeft=this.leftData.content.json,d.set(this.leftData.content.json),d.setMode("tree");else if(this.leftData.content.text){try{this.codeLeft=JSON.parse(this.leftData.content.text)}catch{this.codeLeft=this.leftData.content.text}d.setText(this.leftData.content.text),d.setMode("code")}}else d.set(this.codeLeft);if(this.rightData&&this.rightData.content){if(this.rightData.content.json)this.codeRight=this.rightData.content.json,r.set(this.rightData.content.json),r.setMode("tree");else if(this.rightData.content.text){try{this.codeRight=JSON.parse(this.rightData.content.text)}catch{this.codeRight=this.rightData.content.text}r.setText(this.rightData.content.text),r.setMode("code")}}else r.set(this.codeRight);const t=w("left"),e=w("right");t&&t!==this.leftId&&(this.selectId=t,this.modalStatus.leftOrRight="left",this.openRecent()),e&&e!==this.rightId&&(this.selectId=e,this.modalStatus.leftOrRight="right",this.openRecent()),this.$nextTick(()=>{this.handleHashParams("left",this.leftId),this.handleHashParams("right",this.rightId),window.addEventListener("hashchange",this.hashChange)})},copyRight(){typeof this.codeLeft=="string"?(r.setMode("code"),r.updateText(this.codeLeft),this.codeRight=this.codeLeft):(this.leftMode==="code"?r.updateText(d.getText()):r.updateText(this.codeLeftString),this.codeRight=$(this.codeLeft)),d.refresh(),r.refresh(),this.save("right")},copyLeft(){typeof this.codeRight=="string"?(d.setMode("code"),d.updateText(this.codeRight),this.codeLeft=this.codeRight):(this.rightMode==="code"?d.updateText(r.getText()):d.updateText(this.codeRightString),this.codeLeft=$(this.codeRight)),d.refresh(),r.refresh(),this.save("left")},save(t){(!t||t==="left")&&(this.leftMode==="tree"?this.saveData({left:!0,id:this.leftId,content:d.get()}):this.saveData({left:!0,id:this.leftId,content:d.getText()})),(!t||t==="right")&&(this.rightMode==="tree"?this.saveData({right:!0,id:this.rightId,content:r.get()}):this.saveData({right:!0,id:this.rightId,content:r.getText()}))},create(t){t==="left"?(d.set({}),this.codeLeft={},this.saveData({left:!0})):t==="right"&&(r.set({}),this.codeRight={},this.saveData({right:!0}))},open(t,e){switch(this.modalStatus.leftOrRight=e,t.key){case"recent":this.modalStatus.type="openRecent";break;case"file":this.$refs.uploader.click();break;case"url":this.modalStatus.type="openUrl";break}},openRecent(){if(this.selectId&&this.data(this.selectId)&&this.data(this.selectId).content){const t=this.data(this.selectId).content;if(this.modalStatus.leftOrRight==="left"){if(this.saveData({left:!0,id:this.selectId}),t.json)this.codeLeft=t.json,d.set(t.json),d.setMode("tree");else if(t.text){try{this.codeLeft=JSON.parse(t.text)}catch{this.codeLeft=t.text}d.setText(t.text),d.setMode("code")}}else if(this.modalStatus.leftOrRight==="right"){if(this.saveData({right:!0,id:this.selectId}),t.json)this.codeRight=t.json,r.set(t.json),r.setMode("tree");else if(t.text){try{this.codeRight=JSON.parse(t.text)}catch{this.codeRight=t.text}r.setText(t.text),r.setMode("code")}}}this.selectId="",this.closeModal()},openFile(t){if(t.target.files.length){const e=t.target.files[0],o=new FileReader;o.onload=()=>{o.result&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(this.codeLeft=o.result,d.setText(o.result),this.save("left")):this.modalStatus.leftOrRight==="right"&&(this.codeRight=o.result,r.setText(o.result),this.save("right")))},o.readAsText(e)}t.target.value=""},async openUrl(t){try{const e=(await this.$axios.get(t)).data;e&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(this.codeLeft=e,d.set(e),this.save("left")):this.modalStatus.leftOrRight==="right"&&(this.codeRight=e,r.set(e),this.save("right")),this.url="",this.closeModal())}catch(e){this.$msg.error(e.message)}},download(t){var e,o;t==="left"?nt(d.getText(),`${((e=this.leftData)==null?void 0:e.name)||"left"}.json`):t==="right"&&nt(r.getText(),`${((o=this.rightData)==null?void 0:o.name)||"right"}.json`)},changeOption(t,e){switch(this.modalStatus.leftOrRight=e,t.key){case"indentation":this.modalStatus.type="setIndentation";break;case"properties":this.modalStatus.type="documentProperties";break;case"delete":e==="left"?this.deleteData({id:this.leftId}):e==="right"&&this.deleteData({id:this.rightId});break}},changeIndentation(){d.indentation=this.indent,r.indentation=this.indent,typeof this.codeLeft=="object"&&d.updateText(this.codeLeftString),typeof this.codeRight=="object"&&r.updateText(this.codeRightString),this.closeModal()},onEditStartLeft(){this.onEditStart("left")},onEditStartRight(){this.onEditStart("right")},onEditStart(t,e){this.currentName=this.documentProperties.name,this.modalStatus.leftOrRight=t||this.modalStatus.leftOrRight},onEditChange(t){this.currentName=t},onEditEnd(){this.modalStatus.leftOrRight==="left"?this.saveData({id:this.leftId,name:this.currentName}):this.modalStatus.leftOrRight==="right"&&this.saveData({id:this.rightId,name:this.currentName}),this.currentName=""},changeDiff(){if(!this.diff){if(typeof this.codeLeft=="string"||typeof this.codeRight=="string"){this.$msg.error("JSON\u5B58\u5728\u9519\u8BEF");return}(this.leftMode!=="tree"||this.rightMode!=="tree")&&this.$msg.warn("\u5BF9\u6BD4\u6A21\u5F0F\u4EC5\u5728\u300C\u6811\u300D\u6A21\u5F0F\u4E0B\u751F\u6548\uFF0C\u8BF7\u5207\u6362\u4E3A\u6811\u6A21\u5F0F")}this.diff=!this.diff,d.refresh(),r.refresh()},onClassName({path:t}){if(this.diff&&!this.fullPanel){const e=tt(this.codeLeft,t),o=tt(this.codeRight,t);return At(e,o)?(delete this.diffMap[t],""):(this.diffMap[t]=!0,"differentElement")}else return""},closeModal(){this.modalStatus.type="",this.modalStatus.leftOrRight=""},handleHashParams(t,e){e!=null?It(t,e):Lt(t)},hashChange(){const t=w("left"),e=w("right");t&&t!==this.leftId&&(this.selectId=t,this.modalStatus.leftOrRight="left",this.openRecent()),e&&e!==this.rightId&&(this.selectId=e,this.modalStatus.leftOrRight="right",this.openRecent())},startDrag(t){x=!1,P=parseFloat(window.getComputedStyle(this.$refs.editorPanelContainerLeft).width),isNaN(P)&&(P=0),t.touches?(T=t.touches[0].clientX,document.addEventListener("touchend",this.endDrag),document.addEventListener("touchmove",this.dragMove)):(T=t.clientX,document.addEventListener("mouseup",this.endDrag),document.addEventListener("mousemove",this.dragMove))},dragMove(t){x=!0;let e=0;t.touches?e=t.touches[0].clientX:e=t.clientX;const o=P-T+e,g=parseFloat(window.getComputedStyle(this.$refs.editorPanel).width);o<435?(this.fullPanel="right",this.fullPanel!==this.fullStatus&&this.setFullStatus("right")):g-100-o<435?(this.fullPanel="left",this.fullPanel!==this.fullStatus&&this.setFullStatus("left")):(this.fullPanel="",this.setSplitter(o/(g-100)),this.fullPanel!==this.fullStatus&&this.setFullStatus())},endDrag(){document.removeEventListener("mousemove",this.dragMove),document.removeEventListener("touchmove",this.dragMove),document.removeEventListener("mouseup",this.endDrag),document.removeEventListener("touchend",this.endDrag)},clickDragger(){x||(this.fullPanel==="left"?(this.setSplitter(1-435/(parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)-100)),this.fullPanel=""):this.fullPanel==="right"&&(this.setSplitter(435/(parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)-100)),this.fullPanel=""))}},se(["saveData","deleteData","setSplitter","setFullStatus"])),beforeUnmount(){d&&d.destroy(),r&&r.destroy(),window.removeEventListener("hashchange",this.hashChange)}},m=t=>(Gt("data-v-6883ea82"),t=t(),Kt(),t),oe={class:"editorPanel",ref:"editorPanel"},ne={class:"editorController editorControllerLeft"},ae={class:"editorTitle"},le={class:"buttonWithIcon"},de=h("\xA0\u65B0\u5EFA"),re={class:"buttonWithIcon"},he=h("\xA0\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),ce={class:"buttonWithIcon"},fe=h("\xA0\u6253\u5F00\u672C\u5730\u6587\u4EF6"),ue={class:"buttonWithIcon"},ge=h("\xA0\u6253\u5F00URL"),me={class:"buttonWithIcon"},pe=h("\xA0\u6253\u5F00"),_e={class:"buttonWithIcon"},ve=h("\xA0\u4FDD\u5B58"),ye={class:"buttonWithIcon"},Se={class:"buttonWithIcon"},Ce=h("\xA0\u6587\u6863\u5C5E\u6027"),Ie={class:"buttonWithIcon"},Le=h("\xA0\u5220\u9664\u6587\u6863"),ke={class:"buttonWithIcon"},De=h("\xA0\u9009\u9879"),Re={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},Me=m(()=>a("div",{class:"emptySpace"},null,-1)),we=h(" \u590D\u5236 "),be=h(" \u590D\u5236 "),Pe=h("\u5BF9\u6BD4"),Ee={class:"dragIcon"},Oe={key:0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Te=m(()=>a("path",{fill:"currentColor",d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"},null,-1)),xe=[Te],Ne={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},je=m(()=>a("path",{fill:"currentColor",d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"},null,-1)),Be=[je],We={key:2,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-vertical",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512"},ze=m(()=>a("path",{fill:"currentColor",d:"M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"},null,-1)),Fe=[ze],Ue={class:"editorController editorControllerRight"},Je={class:"editorTitle"},He={class:"buttonWithIcon"},Ve=h("\xA0\u65B0\u5EFA"),Ae={class:"buttonWithIcon"},Xe=h("\xA0\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),qe={class:"buttonWithIcon"},Ge=h("\xA0\u6253\u5F00\u672C\u5730\u6587\u4EF6"),Ke={class:"buttonWithIcon"},Ye=h("\xA0\u6253\u5F00URL"),Ze={class:"buttonWithIcon"},Qe=h("\xA0\u6253\u5F00"),$e={class:"buttonWithIcon"},ts=h("\xA0\u4FDD\u5B58"),es={class:"buttonWithIcon"},ss={class:"buttonWithIcon"},is=h("\xA0\u6587\u6863\u5C5E\u6027"),os={class:"buttonWithIcon"},ns=h("\xA0\u5220\u9664\u6587\u6863"),as={class:"buttonWithIcon"},ls=h("\xA0\u9009\u9879"),ds={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight"},rs=h("\u641C\u7D22"),hs=h("\u5220\u9664"),cs=h("\u4E0D\u652F\u6301\u9700\u8981\u9A8C\u8BC1\u6216\u5F00\u542FCORS\u7684\u5730\u5740"),fs=h("\u914D\u7F6E\u4EE3\u7801\u6A21\u5F0F\u4E0B\u7528\u4E8E\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u3002 \u7F29\u8FDB\u540C\u65F6\u5E94\u7528\u4E8E\u4E24\u4E2A\u9762\u677F\u3002"),us=m(()=>a("strong",null,"\u540D\u79F0\uFF1A",-1)),gs=m(()=>a("strong",null,"\u5B58\u50A8\uFF1A",-1)),ms=m(()=>a("strong",null,"\u66F4\u65B0\uFF1A",-1)),ps=m(()=>a("strong",null,"\u5927\u5C0F\uFF1A",-1));function _s(t,e,o,g,N,n){var X,q,G,K;const _=c("Text"),j=c("FileAdditionOne"),f=c("Button"),B=c("History"),u=c("MenuItem"),W=c("Computer"),z=c("LinkThree"),L=c("Menu"),F=c("FolderOpen"),y=c("Down"),k=c("Dropdown"),U=c("Save"),J=c("IndentRight"),H=c("Info"),V=c("Delete"),A=c("SettingTwo"),D=c("Space"),ht=c("Right"),ct=c("Left"),ft=c("Checkbox"),ut=c("Up"),p=c("Paragraph"),E=c("Input"),gt=c("ListItemMeta"),mt=c("ListItem"),pt=c("List"),R=c("Modal");return v(),S(st,null,[a("div",oe,[a("div",{class:b(["editorPanelContainer editorPanelContainerLeft",{full:t.fullPanel==="left",hide:t.fullPanel==="right"}]),ref:"editorPanelContainerLeft",style:et({flex:t.splitterValue+" 1 0"})},[a("div",ne,[a("div",ae,[s(_,{content:(X=t.leftData)==null?void 0:X.name,editable:((q=t.leftData)==null?void 0:q.name)?{onStart:n.onEditStartLeft,onChange:n.onEditChange,onEnd:n.onEditEnd}:!1},null,8,["content","editable"])]),s(D,{class:"editorControlButtons"},{default:i(()=>[s(f,{size:"small",type:"primary",onClick:e[0]||(e[0]=l=>n.create("left"))},{default:i(()=>[a("span",le,[s(j,{theme:"outline"}),de])]),_:1}),s(k,null,{overlay:i(()=>[s(L,{onClick:e[1]||(e[1]=l=>n.open(l,"left")),trigger:["click","hover"]},{default:i(()=>[s(u,{key:"recent"},{default:i(()=>[a("span",re,[s(B,{theme:"outline"}),he])]),_:1}),s(u,{key:"file"},{default:i(()=>[a("span",ce,[s(W,{theme:"outline"}),fe])]),_:1}),s(u,{key:"url"},{default:i(()=>[a("span",ue,[s(z,{theme:"outline"}),ge])]),_:1})]),_:1})]),default:i(()=>[s(f,{size:"small",type:"primary"},{default:i(()=>[a("span",me,[s(F,{theme:"outline"}),pe,s(y,{theme:"outline"})])]),_:1})]),_:1}),s(f,{size:"small",type:"primary",onClick:e[2]||(e[2]=l=>n.download("left"))},{default:i(()=>[a("span",_e,[s(U,{theme:"outline"}),ve])]),_:1}),s(k,null,{overlay:i(()=>[s(L,{onClick:e[3]||(e[3]=l=>n.changeOption(l,"left")),trigger:["click","hover"]},{default:i(()=>[s(u,{key:"indentation"},{default:i(()=>[a("span",ye,[s(J,{theme:"outline"}),h("\xA0\u7F29\u8FDB("+O(t.indent)+")",1)])]),_:1}),s(u,{key:"properties"},{default:i(()=>[a("span",Se,[s(H,{theme:"outline"}),Ce])]),_:1}),s(u,{key:"delete",disabled:!Boolean(t.leftId)},{default:i(()=>[a("span",Ie,[s(V,{theme:"outline"}),Le])]),_:1},8,["disabled"])]),_:1})]),default:i(()=>[s(f,{size:"small",type:"primary"},{default:i(()=>[a("span",ke,[s(A,{theme:"outline"}),De,s(y,{theme:"outline"})])]),_:1})]),_:1})]),_:1})]),a("div",Re,null,512)],6),a("div",{class:b(["controller noShowMobile",{full:t.fullPanel}])},[s(D,{direction:"vertical"},{default:i(()=>[t.fullPanel?it("",!0):(v(),S(st,{key:0},[Me,s(f,{type:"primary",onClick:n.copyRight,block:""},{default:i(()=>[we,s(ht,{theme:"outline"})]),_:1},8,["onClick"]),s(f,{type:"primary",onClick:n.copyLeft,block:""},{default:i(()=>[s(ct,{theme:"outline"}),be]),_:1},8,["onClick"]),s(ft,{checked:t.diff,onChange:n.changeDiff},{default:i(()=>[Pe]),_:1},8,["checked","onChange"]),t.diff?(v(),qt(D,{key:0},{default:i(()=>[s(f,{type:"primary",class:"diffBtn"},{default:i(()=>[s(ut,{theme:"outline"})]),_:1}),s(f,{type:"primary",class:"diffBtn"},{default:i(()=>[s(y,{theme:"outline"})]),_:1})]),_:1})):it("",!0)],64)),a("div",{class:"drag",onMousedown:e[4]||(e[4]=(...l)=>n.startDrag&&n.startDrag(...l)),onTouchstart:e[5]||(e[5]=(...l)=>n.startDrag&&n.startDrag(...l)),onClick:e[6]||(e[6]=(...l)=>n.clickDragger&&n.clickDragger(...l))},[a("div",Ee,[t.fullPanel==="right"?(v(),S("svg",Oe,xe)):t.fullPanel==="left"?(v(),S("svg",Ne,Be)):(v(),S("svg",We,Fe))])],32)]),_:1})],2),a("div",{class:b(["editorPanelContainer editorPanelContainerRight noShowMobile",{full:t.fullPanel==="right",hide:t.fullPanel==="left"}]),style:et({flex:1-t.splitterValue+" 1 0"})},[a("div",Ue,[a("div",Je,[s(_,{content:(G=t.rightData)==null?void 0:G.name,editable:((K=t.rightData)==null?void 0:K.name)?{onStart:n.onEditStartRight,onChange:n.onEditChange,onEnd:n.onEditEnd}:!1},null,8,["content","editable"])]),s(D,{class:"editorControlButtons"},{default:i(()=>[s(f,{size:"small",type:"primary",onClick:e[7]||(e[7]=l=>n.create("right"))},{default:i(()=>[a("span",He,[s(j,{theme:"outline"}),Ve])]),_:1}),s(k,null,{overlay:i(()=>[s(L,{onClick:e[8]||(e[8]=l=>n.open(l,"right")),trigger:["click","hover"]},{default:i(()=>[s(u,{key:"recent"},{default:i(()=>[a("span",Ae,[s(B,{theme:"outline"}),Xe])]),_:1}),s(u,{key:"file"},{default:i(()=>[a("span",qe,[s(W,{theme:"outline"}),Ge])]),_:1}),s(u,{key:"url"},{default:i(()=>[a("span",Ke,[s(z,{theme:"outline"}),Ye])]),_:1})]),_:1})]),default:i(()=>[s(f,{size:"small",type:"primary"},{default:i(()=>[a("span",Ze,[s(F,{theme:"outline"}),Qe,s(y,{theme:"outline"})])]),_:1})]),_:1}),s(f,{size:"small",type:"primary",onClick:e[9]||(e[9]=l=>n.download("right"))},{default:i(()=>[a("span",$e,[s(U,{theme:"outline"}),ts])]),_:1}),s(k,null,{overlay:i(()=>[s(L,{onClick:e[10]||(e[10]=l=>n.changeOption(l,"right")),trigger:["click","hover"]},{default:i(()=>[s(u,{key:"indentation"},{default:i(()=>[a("span",es,[s(J,{theme:"outline"}),h("\xA0\u7F29\u8FDB("+O(t.indent)+")",1)])]),_:1}),s(u,{key:"properties"},{default:i(()=>[a("span",ss,[s(H,{theme:"outline"}),is])]),_:1}),s(u,{key:"delete",disabled:!Boolean(t.rightId)},{default:i(()=>[a("span",os,[s(V,{theme:"outline"}),ns])]),_:1},8,["disabled"])]),_:1})]),default:i(()=>[s(f,{size:"small",type:"primary"},{default:i(()=>[a("span",as,[s(A,{theme:"outline"}),ls,s(y,{theme:"outline"})])]),_:1})]),_:1})]),_:1})]),a("div",ds,null,512)],6)],512),s(R,{visible:t.modalStatus.type==="openRecent",title:"\u6253\u5F00\u6700\u8FD1",onCancel:n.closeModal,onOk:n.openRecent},{default:i(()=>[s(p,null,{default:i(()=>[rs]),_:1}),s(E,{value:t.keyword,"onUpdate:value":e[11]||(e[11]=l=>t.keyword=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0"},null,8,["value"]),s(pt,{class:"dataList","item-layout":"horizontal","data-source":n.dataListAfterSearch},{renderItem:i(({item:l})=>[s(mt,{onClick:_t=>t.selectId=l._id,class:b({selected:l._id===t.selectId})},{actions:i(()=>[s(f,{onClick:_t=>t.deleteData({id:l._id}),type:"primary",danger:""},{default:i(()=>[hs]),_:2},1032,["onClick"])]),default:i(()=>[s(gt,{description:"\u6700\u540E\u4FEE\u6539: "+l.updated},{title:i(()=>[h(O(l.name),1)]),_:2},1032,["description"])]),_:2},1032,["onClick","class"])]),_:1},8,["data-source"])]),_:1},8,["visible","onCancel","onOk"]),C(a("input",{type:"file",ref:"uploader",onChange:e[12]||(e[12]=(...l)=>n.openFile&&n.openFile(...l)),accept:".json,.JSON"},null,544),[[I,!1]]),s(R,{visible:t.modalStatus.type==="openUrl",title:"\u6253\u5F00URL",onCancel:n.closeModal,onOk:e[14]||(e[14]=l=>n.openUrl(t.url))},{default:i(()=>[s(p,null,{default:i(()=>[cs]),_:1}),s(E,{value:t.url,"onUpdate:value":e[13]||(e[13]=l=>t.url=l),placeholder:"\u8BF7\u8F93\u5165URL\u5730\u5740"},null,8,["value"])]),_:1},8,["visible","onCancel"]),s(R,{visible:t.modalStatus.type==="setIndentation",title:"\u8BBE\u7F6E\u7F29\u8FDB",onCancel:n.closeModal,onOk:n.changeIndentation},{default:i(()=>[s(p,null,{default:i(()=>[fs]),_:1}),s(E,{value:t.indent,"onUpdate:value":e[15]||(e[15]=l=>t.indent=l),valueModifiers:{number:!0}},null,8,["value"])]),_:1},8,["visible","onCancel","onOk"]),s(R,{visible:t.modalStatus.type==="documentProperties",title:"\u6587\u6863\u5C5E\u6027",onCancel:n.closeModal,onOk:n.closeModal,class:"documentProperties"},{default:i(()=>[s(p,null,{default:i(()=>[us,C(s(_,{editable:{onStart:n.onEditStart,onChange:n.onEditChange,onEnd:n.onEditEnd},content:n.documentProperties.name},null,8,["editable","content"]),[[I,n.documentProperties.name]])]),_:1}),s(p,null,{default:i(()=>[gs,C(s(_,{content:n.documentProperties.storage},null,8,["content"]),[[I,n.documentProperties.storage]])]),_:1}),s(p,null,{default:i(()=>[ms,C(s(_,{content:n.documentProperties.updated},null,8,["content"]),[[I,n.documentProperties.updated]])]),_:1}),s(p,null,{default:i(()=>[ps,C(s(_,{content:n.documentProperties.size},null,8,["content"]),[[I,n.documentProperties.size]])]),_:1})]),_:1},8,["visible","onCancel","onOk"])],64)}var Os=Ct(ie,[["render",_s],["__scopeId","data-v-6883ea82"]]);export{Os as default};
