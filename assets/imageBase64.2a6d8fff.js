import{_ as w,K as C,H as _,o,m,a as r,w as a,c as p,n as s,F as E,q as c,a1 as b,a2 as x,y as M,b as n,B as y}from"./index.82f4337f.js";import{_ as z}from"./index.fcac9384.js";import{_ as B}from"./index.c661649a.js";import"./index.f7a417d3.js";import"./useFlexGapSupport.9c189fa5.js";import"./FormItem.1d204d98.js";import"./Col.0248fc1e.js";import"./responsiveObserve.e6e652ae.js";import"./toArray.90044492.js";import"./get.ba78fff4.js";import"./hasIn.cf92122f.js";import"./toInteger.f473e073.js";import"./toFinite.060ef74d.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.72f7dd5b.js";import"./EyeOutlined.89a34815.js";import"./index.22a52520.js";import"./Form.888097fd.js";import"./_arrayIncludesWith.91d14080.js";import"./debounce.e2258692.js";import"./useRefs.53ce97ab.js";const H={class:"wrapper"},D=n(" \u70B9\u51FB\u4E0A\u4F20 "),I=n(" \u590D\u5236 "),A=n(" \u9884\u89C8 "),Z=["src"],V={__name:"imageBase64",setup(j){const e=C(""),l=_("$msg");function k(t){const i=new FileReader;return i.onload=()=>{e.value=i.result},i.readAsDataURL(t),!1}async function u(){try{await window.navigator.clipboard.writeText(e.value),l.success("\u590D\u5236\u6210\u529F")}catch(t){l.error(t)}}return(t,i)=>{const d=y,v=B,f=z,g=b,h=x;return o(),m("div",H,[r(f,null,{default:a(()=>[r(v,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":k},{default:a(()=>[r(d,{type:"primary"},{default:a(()=>[D]),_:1})]),_:1}),e.value?(o(),p(d,{key:0,onClick:u},{default:a(()=>[I]),_:1})):s("",!0)]),_:1}),e.value?(o(),p(g,{key:0},{default:a(()=>[c("pre",null,M(e.value),1)]),_:1})):s("",!0),e.value?(o(),m(E,{key:1},[r(h,{level:4},{default:a(()=>[A]),_:1}),c("img",{class:"preview",src:e.value,alt:"preview"},null,8,Z)],64)):s("",!0)])}}};var ie=w(V,[["__scopeId","data-v-58df89b9"]]);export{ie as default};
