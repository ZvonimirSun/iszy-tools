import{_ as g,L as h,I as w,o as s,n as _,b as i,a as t,w as a,c as m,p,F as B,s as n,T as x,B as u,z as k,d as l}from"./index.dce6f2f8.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{U as T}from"./index.06b3da7a.js";import{S as N}from"./index.bdac5992.js";import"./Form.920197a1.js";import"./Col.406223f1.js";import"./responsiveObserve.6ddd218f.js";import"./useFlexGapSupport.8b07d630.js";import"./toArray.3d44d93e.js";import"./get.dc551394.js";import"./hasIn.64aa3bcd.js";import"./_arrayIncludesWith.40afec22.js";import"./toFinite.8727ea2e.js";import"./collapseMotion.5f9ffa4e.js";import"./debounce.706e94e5.js";import"./EyeOutlined.ace96c89.js";import"./index.c045f0cc.js";import"./useRefs.7e576fb2.js";import"./useMergedState.9ef6251f.js";import"./index.3e01a1ce.js";const V={class:"wrapper"},b=l(" \u70B9\u51FB\u4E0A\u4F20 "),C=l(" \u590D\u5236 "),F=l(" \u9884\u89C8 "),S=["src"],U={setup(D){const{Paragraph:d,Title:f}=x,e=h(""),c=w("$msg");function v(r){const o=new FileReader;return o.onload=()=>{e.value=o.result},o.readAsDataURL(r),!1}async function y(){try{await window.navigator.clipboard.writeText(e.value),c.success("\u590D\u5236\u6210\u529F")}catch(r){c.error(r)}}return(r,o)=>(s(),_("div",V,[i(t(N),null,{default:a(()=>[i(t(T),{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":v},{default:a(()=>[i(t(u),{type:"primary"},{default:a(()=>[b]),_:1})]),_:1}),e.value?(s(),m(t(u),{key:0,onClick:y},{default:a(()=>[C]),_:1})):p("",!0)]),_:1}),e.value?(s(),m(t(d),{key:0},{default:a(()=>[n("pre",null,k(e.value),1)]),_:1})):p("",!0),e.value?(s(),_(B,{key:1},[i(t(f),{level:4},{default:a(()=>[F]),_:1}),n("img",{class:"preview",src:e.value,alt:"preview"},null,8,S)],64)):p("",!0)]))}};var oe=g(U,[["__scopeId","data-v-7e65900e"]]);export{oe as default};