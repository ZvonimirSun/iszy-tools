import{_ as w,r as B,j as h,o as _,J as i,a as s,w as t,c as l,K as r,F as x,L as m,M as b,N as k,b as n,O as N,B as V}from"./index.a40670cb.js";import{_ as C}from"./index.9b16a1c2.js";import{_ as F}from"./index.5528ec39.js";import"./index.c2001418.js";import"./useFlexGapSupport.781cf2d0.js";import"./FormItem.fc464a3a.js";import"./Col.18eeff77.js";import"./responsiveObserve.62e84787.js";import"./toArray.6c63221b.js";import"./get.c9f6b968.js";import"./hasIn.e6063cdf.js";import"./toInteger.023bb216.js";import"./toFinite.465e29d1.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.5cfd3e26.js";import"./EyeOutlined.8466a4e2.js";import"./index.33c6e733.js";import"./Form.93045777.js";import"./_arrayIncludesWith.91d14080.js";import"./useRefs.efc2df05.js";const $={class:"wrapper"},j=["src"],D={__name:"imageBase64",setup(L){const e=B(""),p=h("$msg");function u(a){const o=new FileReader;return o.onload=()=>{e.value=o.result},o.readAsDataURL(a),!1}async function d(){try{await window.navigator.clipboard.writeText(e.value),p.success("\u590D\u5236\u6210\u529F")}catch(a){p.error(a)}}return(a,o)=>{const c=V,f=F,g=C,v=b,y=k;return _(),i("div",$,[s(g,null,{default:t(()=>[s(f,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":u},{default:t(()=>[s(c,{type:"primary"},{default:t(()=>[n(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1}),e.value?(_(),l(c,{key:0,onClick:d},{default:t(()=>[n(" \u590D\u5236 ")]),_:1})):r("",!0)]),_:1}),e.value?(_(),l(v,{key:0},{default:t(()=>[m("pre",null,N(e.value),1)]),_:1})):r("",!0),e.value?(_(),i(x,{key:1},[s(y,{level:4},{default:t(()=>[n(" \u9884\u89C8 ")]),_:1}),m("img",{class:"preview",src:e.value,alt:"preview"},null,8,j)],64)):r("",!0)])}}},Z=w(D,[["__scopeId","data-v-73efb293"]]);export{Z as default};
