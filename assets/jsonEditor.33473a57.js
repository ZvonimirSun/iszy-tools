var V=Object.defineProperty;var L=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var j=(t,e,n)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))A.call(e,n)&&j(t,n,e[n]);if(L)for(var n of L(e))W.call(e,n)&&j(t,n,e[n]);return t};import{a0 as q,$ as H,af as G,ag as K,ah as Q,ai as X,aj as Y,ak as N,al as Z,M as tt,ad as et,am as b,an as R,ao as T,ap as st,c as ot,a as u,g as y,f as s,x as o,a7 as at,F as it,T as nt,r as f,o as rt,j as lt,E as l,aq as dt}from"./vendor.58e84331.js";import{J as O}from"./jsoneditor.min.ac57e0e3.js";import{c as w}from"./createFile.6683124a.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{_ as ct}from"./index.378b7aa1.js";const{Item:ht}=N,{Paragraph:ft}=nt,{Item:E}=b,{Meta:ut}=E,{mapState:pt,mapGetters:mt,mapMutations:gt}=q("jsonEditor");let a,i,d={array:[1,2,3],boolean:!0,color:"gold",null:null,number:123,object:{a:"b",c:"d"},string:"Hello World"},c={};const _t={name:"JsonEditor",components:{Button:H,Space:G,Checkbox:K,Right:Q,Left:X,Dropdown:Y,Menu:N,MenuItem:ht,Down:Z,Modal:tt,Input:et,Paragraph:ft,List:b,ListItem:E,ListItemMeta:ut},data:()=>({diff:!1,modalStatus:{type:"",leftOrRight:""},url:"",keyword:"",selectId:""}),computed:g(g({dataListAfterSearch:function(){return this.dataList(this.keyword)}},pt(["leftId","rightId"])),mt(["dataList","data","leftData","rightData"])),mounted(){this.init()},methods:g({init(){if(a=new O(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree"],onClassName:this.onClassName,onChangeText:R(t=>{try{d=JSON.parse(t)}catch{d=t}a.refresh(),i.refresh(),this.save("left")},100),onModeChange:t=>{t==="code"&&typeof d!="string"&&a.updateText(JSON.stringify(d,null,2)),this.save("left")},onError:t=>{this.$msg.error(t.message)}}),i=new O(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree"],onClassName:this.onClassName,onChangeText:R(t=>{try{c=JSON.parse(t)}catch{c=t}a.refresh(),i.refresh(),this.save("right")},100),onModeChange:t=>{t==="code"&&typeof c!="string"&&i.updateText(JSON.stringify(c,null,2)),this.save("right")},onError:t=>{this.$msg.error(t.message)}}),this.leftData&&this.leftData.content){if(this.leftData.content.json)d=this.leftData.content.json,a.set(this.leftData.content.json),a.setMode("tree");else if(this.leftData.content.text){try{d=JSON.parse(this.leftData.content.text)}catch{d=this.leftData.content.text}a.setText(this.leftData.content.text),a.setMode("code")}}else a.set(d);if(this.rightData&&this.rightData.content){if(this.rightData.content.json)c=this.rightData.content.json,i.set(this.rightData.content.json),i.setMode("tree");else if(this.rightData.content.text){try{c=JSON.parse(this.rightData.content.text)}catch{c=this.rightData.content.text}i.setText(this.rightData.content.text),i.setMode("code")}}else i.set(c)},copyRight(){const t=a.getText();let e;try{e=JSON.parse(t),i.updateText(JSON.stringify(e,null,2))}catch{i.setMode("code"),i.updateText(t)}a.refresh(),i.refresh(),c=e||d,this.save("right")},copyLeft(){const t=i.getText();let e;try{e=JSON.parse(t),a.updateText(JSON.stringify(e,null,2))}catch{a.setMode("code"),a.updateText(t)}a.refresh(),i.refresh(),d=e||c,this.save("left")},save(t){(!t||t==="left")&&(a.getMode()==="tree"?this.saveData({left:!0,id:this.leftId,content:a.get()}):this.saveData({left:!0,id:this.leftId,content:a.getText()})),(!t||t==="right")&&(i.getMode()==="tree"?this.saveData({right:!0,id:this.rightId,content:i.get()}):this.saveData({right:!0,id:this.rightId,content:i.getText()}))},create(t){t==="left"?(a.set({}),d={},this.saveData({left:!0})):t==="right"&&(i.set({}),c={},this.saveData({right:!0}))},open(t,e){switch(this.modalStatus.leftOrRight=e,t.key){case"recent":this.modalStatus.type="openRecent";break;case"file":this.$refs.uploader.click();break;case"url":this.modalStatus.type="openUrl";break}},openRecent(){if(this.selectId&&this.data(this.selectId)&&this.data(this.selectId).content){const t=this.data(this.selectId).content;if(this.modalStatus.leftOrRight==="left"){if(this.saveData({left:!0,id:this.selectId}),t.json)d=t.json,a.set(t.json),a.setMode("tree");else if(t.text){try{d=JSON.parse(t.text)}catch{d=t.text}a.setText(t.text),a.setMode("code")}}else if(this.modalStatus.leftOrRight==="right"){if(this.saveData({right:!0,id:this.selectId}),t.json)c=t.json,i.set(t.json),i.setMode("tree");else if(t.text){try{c=JSON.parse(t.text)}catch{c=t.text}i.setText(t.text),i.setMode("code")}}}this.selectId="",this.closeModal()},openFile(t){if(t.target.files.length){const e=t.target.files[0],n=new FileReader;n.onload=()=>{n.result&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(d=n.result,a.setText(n.result),this.save("left")):this.modalStatus.leftOrRight==="right"&&(c=n.result,i.setText(n.result),this.save("right")))},n.readAsText(e)}t.target.value=""},async openUrl(t){try{const e=(await this.$axios.get(t)).data;e&&(this.create(this.modalStatus.leftOrRight),this.modalStatus.leftOrRight==="left"?(d=e,a.set(e),this.save("left")):this.modalStatus.leftOrRight==="right"&&(c=e,i.set(e),this.save("right")),this.url="",this.closeModal())}catch(e){this.$msg.error(e.message)}},download(t){var e,n;t==="left"?w(a.getText(),`${((e=this.leftData)==null?void 0:e.name)||"left"}.json`):t==="right"&&w(i.getText(),`${((n=this.rightData)==null?void 0:n.name)||"right"}.json`)},changeDiff(){if(!this.diff){if(typeof d=="string"||typeof c=="string"){this.$msg.error("JSON\u5B58\u5728\u9519\u8BEF");return}(a.getMode()!=="tree"||i.getMode()!=="tree")&&this.$msg.warn("\u5BF9\u6BD4\u6A21\u5F0F\u4EC5\u5728\u300C\u6811\u300D\u6A21\u5F0F\u4E0B\u751F\u6548\uFF0C\u8BF7\u5207\u6362\u4E3A\u6811\u6A21\u5F0F")}this.diff=!this.diff,a.refresh(),i.refresh()},onClassName({path:t}){const e=T(d,t),n=T(c,t);return this.diff?st(e,n)?"":"differentElement":""},closeModal(){this.modalStatus.type="",this.modalStatus.leftOrRight=""}},gt(["saveData","deleteData"])),beforeUnmount(){a&&a.destroy(),i&&i.destroy()}},yt={class:"editorPanel"},vt={class:"editorPanelContainer editorPanelContainerLeft"},Ct={class:"editorController editorControllerLeft"},Dt={class:"editorTitle"},kt=l("\u65B0\u5EFA"),St=l("\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),Mt=l("\u6253\u5F00\u672C\u5730\u6587\u4EF6"),xt=l("\u6253\u5F00URL"),It={class:"buttonWithIcon"},Lt=l("\u6253\u5F00"),jt=l("\u4FDD\u5B58"),Rt={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},Tt={class:"controller noShowMobile"},Ot=l(" \u590D\u5236 "),wt=l(" \u590D\u5236 "),Nt=l("\u5BF9\u6BD4"),bt={class:"editorPanelContainer editorPanelContainerRight noShowMobile"},Et={class:"editorController editorControllerRight"},Jt={class:"editorTitle"},Ut=l("\u65B0\u5EFA"),zt=l("\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),Bt=l("\u6253\u5F00\u672C\u5730\u6587\u4EF6"),Pt=l("\u6253\u5F00URL"),Ft={class:"buttonWithIcon"},$t=l("\u6253\u5F00"),Vt=l("\u4FDD\u5B58"),At={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight"},Wt=l("\u641C\u7D22"),qt=l("\u5220\u9664"),Ht=l("\u4E0D\u652F\u6301\u9700\u8981\u9A8C\u8BC1\u6216\u5F00\u542FCORS\u7684\u5730\u5740");function Gt(t,e,n,Kt,Qt,h){var x,I;const p=f("Button"),m=f("MenuItem"),v=f("Menu"),C=f("Down"),D=f("Dropdown"),_=f("Space"),J=f("Right"),U=f("Left"),z=f("Checkbox"),k=f("Paragraph"),S=f("Input"),B=f("ListItemMeta"),P=f("ListItem"),F=f("List"),M=f("Modal");return rt(),ot(it,null,[u("div",yt,[u("div",vt,[u("div",Ct,[u("div",Dt,y((x=t.leftData)==null?void 0:x.name),1),s(_,{class:"editorControlButtons"},{default:o(()=>[s(p,{size:"small",type:"primary",onClick:e[0]||(e[0]=r=>h.create("left"))},{default:o(()=>[kt]),_:1}),s(D,null,{overlay:o(()=>[s(v,{onClick:e[1]||(e[1]=r=>h.open(r,"left")),trigger:["click","hover"]},{default:o(()=>[s(m,{key:"recent"},{default:o(()=>[St]),_:1}),s(m,{key:"file"},{default:o(()=>[Mt]),_:1}),s(m,{key:"url"},{default:o(()=>[xt]),_:1})]),_:1})]),default:o(()=>[s(p,{size:"small",type:"primary"},{default:o(()=>[u("span",It,[Lt,s(C,{theme:"outline"})])]),_:1})]),_:1}),s(p,{size:"small",type:"primary",onClick:e[2]||(e[2]=r=>h.download("left"))},{default:o(()=>[jt]),_:1})]),_:1})]),u("div",Rt,null,512)]),u("div",Tt,[s(_,{direction:"vertical"},{default:o(()=>[s(p,{type:"primary",onClick:h.copyRight,block:""},{default:o(()=>[Ot,s(J,{theme:"outline"})]),_:1},8,["onClick"]),s(p,{type:"primary",onClick:h.copyLeft,block:""},{default:o(()=>[s(U,{theme:"outline"}),wt]),_:1},8,["onClick"]),s(z,{checked:t.diff,onChange:h.changeDiff},{default:o(()=>[Nt]),_:1},8,["checked","onChange"])]),_:1})]),u("div",bt,[u("div",Et,[u("div",Jt,y((I=t.rightData)==null?void 0:I.name),1),s(_,{class:"editorControlButtons"},{default:o(()=>[s(p,{size:"small",type:"primary",onClick:e[3]||(e[3]=r=>h.create("right"))},{default:o(()=>[Ut]),_:1}),s(D,null,{overlay:o(()=>[s(v,{onClick:e[4]||(e[4]=r=>h.open(r,"right")),trigger:["click","hover"]},{default:o(()=>[s(m,{key:"recent"},{default:o(()=>[zt]),_:1}),s(m,{key:"file"},{default:o(()=>[Bt]),_:1}),s(m,{key:"url"},{default:o(()=>[Pt]),_:1})]),_:1})]),default:o(()=>[s(p,{size:"small",type:"primary"},{default:o(()=>[u("span",Ft,[$t,s(C,{theme:"outline"})])]),_:1})]),_:1}),s(p,{size:"small",type:"primary",onClick:e[5]||(e[5]=r=>h.download("right"))},{default:o(()=>[Vt]),_:1})]),_:1})]),u("div",At,null,512)])]),s(M,{visible:t.modalStatus.type==="openRecent",title:"\u6253\u5F00\u6700\u8FD1",onCancel:h.closeModal,onOk:h.openRecent},{default:o(()=>[s(k,null,{default:o(()=>[Wt]),_:1}),s(S,{value:t.keyword,"onUpdate:value":e[6]||(e[6]=r=>t.keyword=r),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0"},null,8,["value"]),s(F,{class:"dataList","item-layout":"horizontal","data-source":h.dataListAfterSearch},{renderItem:o(({item:r})=>[s(P,{onClick:$=>t.selectId=r._id,class:lt({selected:r._id===t.selectId})},{actions:o(()=>[s(p,{onClick:$=>t.deleteData({id:r._id}),type:"primary",danger:""},{default:o(()=>[qt]),_:2},1032,["onClick"])]),default:o(()=>[s(B,{description:"\u6700\u540E\u4FEE\u6539: "+r.updated},{title:o(()=>[l(y(r.name),1)]),_:2},1032,["description"])]),_:2},1032,["onClick","class"])]),_:1},8,["data-source"])]),_:1},8,["visible","onCancel","onOk"]),at(u("input",{type:"file",ref:"uploader",onChange:e[7]||(e[7]=(...r)=>h.openFile&&h.openFile(...r)),accept:".json,.JSON"},null,544),[[dt,!1]]),s(M,{visible:t.modalStatus.type==="openUrl",title:"\u6253\u5F00URL",onCancel:h.closeModal,onOk:e[9]||(e[9]=r=>h.openUrl(t.url))},{default:o(()=>[s(k,null,{default:o(()=>[Ht]),_:1}),s(S,{value:t.url,"onUpdate:value":e[8]||(e[8]=r=>t.url=r)},null,8,["value"])]),_:1},8,["visible","onCancel"])],64)}var he=ct(_t,[["render",Gt],["__scopeId","data-v-40f82b5a"]]);export{he as default};
