import{k as y,c as d,f as r,x as a,y as t,ag as h,u,H as l,E as x,a as _,T as w,D as k,o as c,aw as B,a0 as p,g as j,G as n}from"./vendor.c45c2a3c.js";/* empty css               *//* empty css                */import{_ as T}from"./index.29b6224a.js";const N={class:"container"},V=n("\u70B9\u51FB\u4E0A\u4F20"),b=n("\u590D\u5236"),C=n("\u9884\u89C8"),D=["src"],L={setup(U){const{Paragraph:f,Title:m}=w,e=y(""),i=k("$msg");function v(s){const o=new FileReader;return o.onload=()=>{e.value=o.result},o.readAsDataURL(s),!1}async function g(){try{await window.navigator.clipboard.writeText(e.value),i.success("\u590D\u5236\u6210\u529F")}catch(s){i.error(s)}}return(s,o)=>(c(),d("div",N,[r(t(h),null,{default:a(()=>[r(t(B),{fileList:[],showUploadList:!1,accept:"image/*","before-upload":v},{default:a(()=>[r(t(p),{type:"primary"},{default:a(()=>[V]),_:1})]),_:1}),e.value?(c(),u(t(p),{key:0,onClick:g},{default:a(()=>[b]),_:1})):l("",!0)]),_:1}),e.value?(c(),u(t(f),{key:0},{default:a(()=>[_("pre",null,j(e.value),1)]),_:1})):l("",!0),e.value?(c(),d(x,{key:1},[r(t(m),{level:4},{default:a(()=>[C]),_:1}),_("img",{class:"preview",src:e.value,alt:"preview"},null,8,D)],64)):l("",!0)]))}};var $=T(L,[["__scopeId","data-v-2168357e"]]);export{$ as default};
