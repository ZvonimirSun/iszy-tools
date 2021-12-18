var B=Object.defineProperty;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var y=(e,t,o)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))q.call(t,o)&&y(e,o,t[o]);if(k)for(var o of k(t))J.call(t,o)&&y(e,o,t[o]);return e};import{c as T,a0 as U,ak as V,al as A,am as W,an as M,ao as H,ap as P,aq as F,q as E,ar as S,as as G,at as I,au as z,a as i,o as b,b as D,w as n,av as K,f as _,e as a,i as Q,h as c}from"./vendor.06d41b47.js";import"./vue-codemirror.e4bf27bd.js";import{C as X}from"./container.af53ac81.js";import{J as w}from"./jsoneditor.min.e9e9cafa.js";import{c as Y}from"./createFile.775168e6.js";/* empty css                *//* empty css                */import{_ as Z}from"./index.3e8bde9e.js";const{mapGetters:$,mapActions:ee}=T("cache");let r,l,h={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"},f={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"};const te={name:"JsonEditor",components:{Container:X,Button:U,Space:V,Checkbox:A,Right:W,Left:M,CodeDownload:H,Save:P,Clear:F},data:()=>({autoSave:!1,diff:!0}),computed:v({},$(["getData"])),mounted(){this.init()},methods:v({init(){this.getData("jsonEditor")&&(this.autoSave=Boolean(this.getData("jsonEditor").autoSave),this.getData("jsonEditor").left&&(h=this.getData("jsonEditor").left),this.getData("jsonEditor").right&&(f=this.getData("jsonEditor").right)),r=new w(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree","text","preview"],onClassName:this.onClassName,onChangeText:e=>{try{h=JSON.parse(e),l.refresh(),this.autoSave&&this.save()}catch{}},autocomplete:{applyTo:["value"],filter:"contain",trigger:"focus",getOptions:(e,t,o,p)=>new Promise((m,s)=>{const d=this.extractUniqueWords(p.get());d.length>0?m(d):s(new Error("noOptions"))})}},h),l=new w(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree","text","preview"],onClassName:this.onClassName,onChangeText:e=>{try{f=JSON.parse(e),r.refresh(),this.autoSave&&this.save()}catch{}},autocomplete:{applyTo:["value"],filter:"contain",trigger:"focus",getOptions:(e,t,o,p)=>new Promise((m,s)=>{const d=this.extractUniqueWords(p.get());d.length>0?m(d):s(new Error("noOptions"))})}},f)},copyRight(){f=E(h),l.update(f),r.refresh(),this.autoSave&&this.save()},copyLeft(){h=E(f),r.update(h),l.refresh(),this.autoSave&&this.save()},async save(){if(this.autoSave)try{await this.setData({key:"jsonEditor",val:{autoSave:!0,left:r.get(),right:l.get()}})}catch{this.$msg.warn("JSON\u5B58\u5728\u9519\u8BEF\uFF0C\u4FDD\u5B58\u5931\u8D25"),await this.setData({key:"jsonEditor",val:{autoSave:!0,left:this.getData("jsonEditor").left,right:this.getData("jsonEditor").right}})}else await this.setData({key:"jsonEditor",val:{autoSave:!1,left:this.getData("jsonEditor").left,right:this.getData("jsonEditor").right}})},async clear(){await this.setData({key:"jsonEditor",val:void 0}),this.autoSave=!1,this.$msg.success("\u6E05\u9664\u6210\u529F")},download(){Y(r.getText(),"left.json")},changeDiff(){r.refresh(),l.refresh()},changeAutoSave(){this.save()},onClassName({path:e}){const t=S(h,e),o=S(f,e);return this.diff?G(t,o)?"":"differentElement":""},extractUniqueWords(e){return I(z(e,function(t,o){return K(t)?[o]:[o,String(t)]}))}},ee(["setData"])),beforeUnmount(){r&&r.destroy(),l&&l.destroy()}},oe={class:"editorPanel"},ae={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},se={class:"controller noShowMobile"},ne=c(" \u590D\u5236 "),ie=c(" \u590D\u5236 "),re=c(" \u4FDD\u5B58 "),ce=c("\u81EA\u52A8"),le=c(" \u6E05\u9664 "),de=c(" \u4E0B\u8F7D "),he=c("Diff"),fe={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight noShowMobile"},ue=c(" \u4E0B\u8F7D ");function pe(e,t,o,p,m,s){const d=i("Right"),u=i("Button"),N=i("Left"),x=i("Save"),j=i("Checkbox"),O=i("Clear"),L=i("CodeDownload"),C=i("Space"),R=i("container");return b(),D(R,null,{default:n(()=>[_("div",oe,[_("div",ae,null,512),_("div",se,[a(C,{direction:"vertical"},{default:n(()=>[a(u,{type:"primary",onClick:s.copyRight,block:""},{default:n(()=>[a(d,{theme:"outline"}),ne]),_:1},8,["onClick"]),a(u,{type:"primary",onClick:s.copyLeft,block:""},{default:n(()=>[a(N,{theme:"outline"}),ie]),_:1},8,["onClick"]),a(u,{type:"primary",onClick:s.save,block:""},{default:n(()=>[a(x,{theme:"outline"}),re]),_:1},8,["onClick"]),a(j,{checked:e.autoSave,"onUpdate:checked":t[0]||(t[0]=g=>e.autoSave=g),onChange:s.changeAutoSave},{default:n(()=>[ce]),_:1},8,["checked","onChange"]),e.getData("jsonEditor")?(b(),D(u,{key:0,type:"primary",onClick:s.clear,block:""},{default:n(()=>[a(O,{theme:"outline"}),le]),_:1},8,["onClick"])):Q("",!0),a(u,{type:"primary",onClick:s.download,block:""},{default:n(()=>[a(L,{theme:"outline"}),de]),_:1},8,["onClick"]),a(j,{checked:e.diff,"onUpdate:checked":t[1]||(t[1]=g=>e.diff=g),onChange:s.changeDiff},{default:n(()=>[he]),_:1},8,["checked","onChange"])]),_:1})]),_("div",fe,null,512)]),a(C,{class:"showMobile",align:"center"},{default:n(()=>[a(u,{type:"primary",onClick:s.download},{default:n(()=>[ue]),_:1},8,["onClick"])]),_:1})]),_:1})}var Se=Z(te,[["render",pe],["__scopeId","data-v-4764b7ca"]]);export{Se as default};
