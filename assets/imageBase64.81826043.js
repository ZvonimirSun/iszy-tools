import{d as h,r as k,j as c,f as C,o as u,J as p,a as s,w as o,b as n,ao as b,c as i,$ as l,F as E,K as R,B as $,k as U,L as A,_ as D}from"./index.835879a6.js";import{_ as N}from"./index.c9d847e2.js";import{_ as V}from"./index.d9624e7d.js";import"./index.b4445822.js";import"./useFlexGapSupport.76ee8404.js";import"./FormItem.8edb878e.js";import"./Col.7668b766.js";import"./responsiveObserve.378fea9a.js";import"./toArray.a6cd9ad1.js";import"./get.8ef605e8.js";import"./hasIn.5fcc058e.js";import"./toInteger.fc4eccd6.js";import"./toFinite.e2283828.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.22ffcffa.js";import"./EyeOutlined.7218d55d.js";import"./index.6e42409b.js";import"./Form.348dace7.js";import"./_arrayIncludesWith.91d14080.js";import"./useRefs.b1cbba9d.js";const L={class:"wrapper"},T=["src"],j=h({__name:"imageBase64",setup(W){const e=k(""),r=c("$msg"),m=c("$axios"),d=C(()=>e.value&&(e.value.startsWith("http://")||e.value.startsWith("https://")));function v(t){const a=new FileReader;return a.onloadend=()=>{e.value=a.result},a.readAsDataURL(t),!1}async function f(){try{await window.navigator.clipboard.writeText(e.value),r.success("\u590D\u5236\u6210\u529F")}catch(t){r.error(t==null?void 0:t.message)}}async function g(){try{const t=await m.get(e.value,{responseType:"blob"}),a=new FileReader;a.onloadend=()=>{e.value=a.result},a.readAsDataURL(t.data)}catch(t){r.error(t==null?void 0:t.message)}}return(t,a)=>{const _=$,y=V,B=N,w=U,F=A;return u(),p("div",L,[s(B,null,{default:o(()=>[s(y,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":v},{default:o(()=>[s(_,{type:"primary"},{default:o(()=>[n(" \u70B9\u51FB\u4E0A\u4F20\u56FE\u7247 ")]),_:1})]),_:1}),b(d)?(u(),i(_,{key:0,onClick:g},{default:o(()=>[n(" \u8F6C\u6362\u4E3ABase64 ")]),_:1})):l("",!0),e.value?(u(),i(_,{key:1,onClick:f},{default:o(()=>[n(" \u590D\u5236\u5185\u5BB9 ")]),_:1})):l("",!0)]),_:1}),s(w,{value:e.value,"onUpdate:value":a[0]||(a[0]=x=>e.value=x),"allow-clear":"","auto-size":{minRows:5,maxRows:10},placeholder:"\u8BF7\u8F93\u5165 \u56FE\u7247\u5730\u5740 \u6216 Base64\u683C\u5F0F\u7684\u56FE\u7247"},null,8,["value"]),e.value?(u(),p(E,{key:0},[s(F,{level:4},{default:o(()=>[n(" \u9884\u89C8 ")]),_:1}),R("img",{class:"preview",src:e.value,alt:"preview"},null,8,T)],64)):l("",!0)])}}});const ue=D(j,[["__scopeId","data-v-57008570"]]);export{ue as default};
