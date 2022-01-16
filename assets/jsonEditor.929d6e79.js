var N=Object.defineProperty;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&C(e,o,t[o]);if(y)for(var o of y(t))L.call(t,o)&&C(e,o,t[o]);return e};import{ac as O,as as R,at as B,au as T,av as q,aw as J,ax as M,i as E,ay as v,az as U,aA as V,aB as W,aC as A,r as f,o as F,c as P,a as m,f as s,y as c,A as H,aD as z,D as h}from"./vendor.9bb798a0.js";import{J as b}from"./jsoneditor.min.21c5b379.js";import{c as G}from"./createFile.f783c569.js";/* empty css                *//* empty css                */import{_ as I}from"./index.ee6ec559.js";let a,i,l={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"},d={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"};const $={name:"JsonEditor",components:{Button:O,Space:R,Checkbox:B,Right:T,Left:q,CodeDownload:J},data:()=>({diff:!1}),computed:g({},M(["getData"])),mounted(){this.init()},methods:g({init(){this.getData("jsonEditor")&&(this.getData("jsonEditor").left&&(l=this.getData("jsonEditor").left),this.getData("jsonEditor").right&&(d=this.getData("jsonEditor").right)),a=new b(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree","text","preview"],onClassName:this.onClassName,onChangeText:e=>{try{l=JSON.parse(e),i.refresh(),this.save()}catch{}},autocomplete:{applyTo:["value"],filter:"contain",trigger:"focus",getOptions:(e,t,o,p)=>new Promise((u,n)=>{const r=this.extractUniqueWords(p.get());r.length>0?u(r):n(new Error("noOptions"))})}},l),i=new b(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree","text","preview"],onClassName:this.onClassName,onChangeText:e=>{try{d=JSON.parse(e),a.refresh(),this.save()}catch{}},autocomplete:{applyTo:["value"],filter:"contain",trigger:"focus",getOptions:(e,t,o,p)=>new Promise((u,n)=>{const r=this.extractUniqueWords(p.get());r.length>0?u(r):n(new Error("noOptions"))})}},d)},copyRight(){d=E(l),i.update(d),a.refresh(),this.save()},copyLeft(){l=E(d),a.update(l),i.refresh(),this.save()},async save(){try{await this.setData({key:"jsonEditor",val:{left:a.get(),right:i.get()}})}catch{}},download(){G(a.getText(),"left.json")},changeDiff(){a.refresh(),i.refresh()},onClassName({path:e}){const t=v(l,e),o=v(d,e);return this.diff?U(t,o)?"":"differentElement":""},extractUniqueWords(e){return V(W(e,function(t,o){return z(t)?[o]:[o,String(t)]}))}},A(["setData"])),beforeUnmount(){a&&a.destroy(),i&&i.destroy()}},K={class:"editorPanel"},Q={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},X={class:"controller noShowMobile"},Y=h(" \u590D\u5236 "),Z=h(" \u590D\u5236 "),ee=h(" \u4E0B\u8F7D "),te=h("Diff"),oe={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight noShowMobile"},se=h(" \u4E0B\u8F7D ");function ne(e,t,o,p,u,n){const r=f("Right"),_=f("Button"),x=f("Left"),w=f("CodeDownload"),k=f("Checkbox"),j=f("Space");return F(),P(H,null,[m("div",K,[m("div",Q,null,512),m("div",X,[s(j,{direction:"vertical"},{default:c(()=>[s(_,{type:"primary",onClick:n.copyRight,block:""},{default:c(()=>[s(r,{theme:"outline"}),Y]),_:1},8,["onClick"]),s(_,{type:"primary",onClick:n.copyLeft,block:""},{default:c(()=>[s(x,{theme:"outline"}),Z]),_:1},8,["onClick"]),s(_,{type:"primary",onClick:n.download,block:""},{default:c(()=>[s(w,{theme:"outline"}),ee]),_:1},8,["onClick"]),s(k,{checked:e.diff,"onUpdate:checked":t[0]||(t[0]=D=>e.diff=D),onChange:n.changeDiff},{default:c(()=>[te]),_:1},8,["checked","onChange"])]),_:1})]),m("div",oe,null,512)]),s(j,{class:"showMobile",align:"center"},{default:c(()=>[s(_,{type:"primary",onClick:n.download},{default:c(()=>[se]),_:1},8,["onClick"])]),_:1})],64)}var he=I($,[["render",ne],["__scopeId","data-v-b819ff6e"]]);export{he as default};