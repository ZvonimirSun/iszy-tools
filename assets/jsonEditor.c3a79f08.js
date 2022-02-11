var I=Object.defineProperty;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var M=(t,e,a)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,g=(t,e)=>{for(var a in e||(e={}))R.call(e,a)&&M(t,a,e[a]);if(k)for(var a of k(e))$.call(e,a)&&M(t,a,e[a]);return t};import{a0 as B,$ as O,af as z,ag as P,ah as V,ai as U,aj as W,ak as b,al as H,am as N,an as j,ao as q,c as F,a as c,g as E,f as o,x as s,r as f,o as G,E as r}from"./vendor.744634da.js";import{J as S}from"./jsoneditor.min.83f1b6f7.js";import{c as T}from"./createFile.b517f7cd.js";/* empty css                *//* empty css               *//* empty css               */import{_ as A}from"./index.d4691755.js";const{Item:K}=b,{mapState:Q,mapGetters:X,mapMutations:Y}=B("jsonEditor");let n,i,l={array:[1,2,3],boolean:!0,color:"gold",null:null,number:123,object:{a:"b",c:"d"},string:"Hello World"},d={};const Z={name:"JsonEditor",components:{Button:O,Space:z,Checkbox:P,Right:V,Left:U,Dropdown:W,Menu:b,MenuItem:K,Down:H},data:()=>({diff:!1}),computed:g(g({},Q(["leftId","rightId"])),X(["data","leftData","rightData"])),mounted(){this.init()},methods:g({init(){if(n=new S(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree"],onClassName:this.onClassName,onChangeText:N(t=>{try{l=JSON.parse(t)}catch{l=t}n.refresh(),i.refresh(),this.save("left")},100),onModeChange:t=>{t==="code"&&typeof l!="string"&&n.updateText(JSON.stringify(l,null,2)),this.save("left")},onError:t=>{this.$msg.error(t.message)}}),i=new S(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree"],onClassName:this.onClassName,onChangeText:N(t=>{try{d=JSON.parse(t)}catch{d=t}n.refresh(),i.refresh(),this.save("right")},100),onModeChange:t=>{t==="code"&&typeof d!="string"&&i.updateText(JSON.stringify(d,null,2)),this.save("right")},onError:t=>{this.$msg.error(t.message)}}),this.leftData&&this.leftData.content){if(this.leftData.content.json)l=this.leftData.content.json,n.set(this.leftData.content.json),n.setMode("tree");else if(this.leftData.content.text){try{l=JSON.parse(this.leftData.content.text)}catch{l=this.leftData.content.text}n.setText(this.leftData.content.text),n.setMode("code")}}else n.set(l);if(this.rightData&&this.rightData.content){if(this.rightData.content.json)d=this.rightData.content.json,i.set(this.rightData.content.json),i.setMode("tree");else if(this.rightData.content.text){try{d=JSON.parse(this.rightData.content.text)}catch{d=this.rightData.content.text}i.setText(this.rightData.content.text),i.setMode("code")}}else i.set(d)},copyRight(){const t=n.getText();let e;try{e=JSON.parse(t),i.updateText(JSON.stringify(e,null,2))}catch{i.setMode("code"),i.updateText(t)}n.refresh(),i.refresh(),d=e||l,this.save("right")},copyLeft(){const t=i.getText();let e;try{e=JSON.parse(t),n.updateText(JSON.stringify(e,null,2))}catch{n.setMode("code"),n.updateText(t)}n.refresh(),i.refresh(),l=e||d,this.save("left")},save(t){(!t||t==="left")&&(n.getMode()==="tree"?this.saveData({left:!0,id:this.leftId,content:n.get()}):this.saveData({left:!0,id:this.leftId,content:n.getText()})),(!t||t==="right")&&(i.getMode()==="tree"?this.saveData({right:!0,id:this.rightId,content:i.get()}):this.saveData({right:!0,id:this.rightId,content:i.getText()}))},create(t){t==="left"?(n.set({}),l={},this.saveData({left:!0})):t==="right"&&(i.set({}),d={},this.saveData({right:!0}))},open(t,e){console.log(t,e),this.$msg.info("\u6B63\u5728\u5EFA\u8BBE\u4E2D")},download(t){var e,a;t==="left"?T(n.getText(),`${((e=this.leftData)==null?void 0:e.name)||"left"}.json`):t==="right"&&T(i.getText(),`${((a=this.rightData)==null?void 0:a.name)||"right"}.json`)},changeDiff(){if(!this.diff){if(typeof l=="string"||typeof d=="string"){this.$msg.error("JSON\u5B58\u5728\u9519\u8BEF");return}(n.getMode()!=="tree"||i.getMode()!=="tree")&&this.$msg.warn("\u5BF9\u6BD4\u6A21\u5F0F\u4EC5\u5728\u300C\u6811\u300D\u6A21\u5F0F\u4E0B\u751F\u6548\uFF0C\u8BF7\u5207\u6362\u4E3A\u6811\u6A21\u5F0F")}this.diff=!this.diff,n.refresh(),i.refresh()},onClassName({path:t}){const e=j(l,t),a=j(d,t);return this.diff?q(e,a)?"":"differentElement":""}},Y(["saveData"])),beforeUnmount(){n&&n.destroy(),i&&i.destroy()}},tt={class:"editorPanel"},et={class:"editorPanelContainer editorPanelContainerLeft"},ot={class:"editorController editorControllerLeft"},st={class:"editorTitle"},nt=r("\u65B0\u5EFA"),it=r("\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),at=r("\u6253\u5F00\u672C\u5730\u6587\u4EF6"),rt=r("\u6253\u5F00URL"),lt={class:"buttonWithIcon"},dt=r("\u6253\u5F00"),ct=r("\u4FDD\u5B58"),ht={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},ft={class:"controller noShowMobile"},_t=r(" \u590D\u5236 "),ut=r(" \u590D\u5236 "),mt=r("\u5BF9\u6BD4"),gt={class:"editorPanelContainer editorPanelContainerRight noShowMobile"},pt={class:"editorController editorControllerRight"},yt={class:"editorTitle"},Dt=r("\u65B0\u5EFA"),vt=r("\u6253\u5F00\u6700\u8FD1\u8BB0\u5F55"),Ct=r("\u6253\u5F00\u672C\u5730\u6587\u4EF6"),xt=r("\u6253\u5F00URL"),kt={class:"buttonWithIcon"},Mt=r("\u6253\u5F00"),Nt=r("\u4FDD\u5B58"),jt={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight"};function Et(t,e,a,St,Tt,h){var C,x;const _=f("Button"),m=f("MenuItem"),y=f("Menu"),D=f("Down"),v=f("Dropdown"),p=f("Space"),w=f("Right"),J=f("Left"),L=f("Checkbox");return G(),F("div",tt,[c("div",et,[c("div",ot,[c("div",st,E((C=t.leftData)==null?void 0:C.name),1),o(p,{class:"editorControlButtons"},{default:s(()=>[o(_,{size:"small",type:"primary",onClick:e[0]||(e[0]=u=>h.create("left"))},{default:s(()=>[nt]),_:1}),o(v,null,{overlay:s(()=>[o(y,{onClick:e[1]||(e[1]=u=>h.open(u,"left"))},{default:s(()=>[o(m,{key:"recent"},{default:s(()=>[it]),_:1}),o(m,{key:"file"},{default:s(()=>[at]),_:1}),o(m,{key:"url"},{default:s(()=>[rt]),_:1})]),_:1})]),default:s(()=>[o(_,{size:"small",type:"primary"},{default:s(()=>[c("span",lt,[dt,o(D,{theme:"outline"})])]),_:1})]),_:1}),o(_,{size:"small",type:"primary",onClick:e[2]||(e[2]=u=>h.download("left"))},{default:s(()=>[ct]),_:1})]),_:1})]),c("div",ht,null,512)]),c("div",ft,[o(p,{direction:"vertical"},{default:s(()=>[o(_,{type:"primary",onClick:h.copyRight,block:""},{default:s(()=>[_t,o(w,{theme:"outline"})]),_:1},8,["onClick"]),o(_,{type:"primary",onClick:h.copyLeft,block:""},{default:s(()=>[o(J,{theme:"outline"}),ut]),_:1},8,["onClick"]),o(L,{checked:t.diff,onChange:h.changeDiff},{default:s(()=>[mt]),_:1},8,["checked","onChange"])]),_:1})]),c("div",gt,[c("div",pt,[c("div",yt,E((x=t.rightData)==null?void 0:x.name),1),o(p,{class:"editorControlButtons"},{default:s(()=>[o(_,{size:"small",type:"primary",onClick:e[3]||(e[3]=u=>h.create("right"))},{default:s(()=>[Dt]),_:1}),o(v,null,{overlay:s(()=>[o(y,{onClick:e[4]||(e[4]=u=>h.open(u,"right"))},{default:s(()=>[o(m,{key:"recent"},{default:s(()=>[vt]),_:1}),o(m,{key:"file"},{default:s(()=>[Ct]),_:1}),o(m,{key:"url"},{default:s(()=>[xt]),_:1})]),_:1})]),default:s(()=>[o(_,{size:"small",type:"primary"},{default:s(()=>[c("span",kt,[Mt,o(D,{theme:"outline"})])]),_:1})]),_:1}),o(_,{size:"small",type:"primary",onClick:e[5]||(e[5]=u=>h.download("right"))},{default:s(()=>[Nt]),_:1})]),_:1})]),c("div",jt,null,512)])])}var Ot=A(Z,[["render",Et],["__scopeId","data-v-4709cc34"]]);export{Ot as default};
