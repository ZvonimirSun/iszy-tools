import{_ as f,r as p,j as x,o as g,c as y,w as c,a as n,b as l,k as h,B as C}from"./index.1093e7bf.js";import{_ as b}from"./index.3e25c266.js";import"./index.069d8c65.js";import"./useFlexGapSupport.626c524d.js";import"./SearchOutlined.f4763153.js";import"./Password.296cc8b3.js";import"./EyeOutlined.0af838f3.js";const w=l(" \u7F16\u7801 (Encode) "),k=l(" \u89E3\u7801 (Decode) "),B=l(" \u2195\u4EA4\u6362 "),U={__name:"base64",setup(j){const e=p(""),t=p(""),d=x("$msg");function i(){t.value=btoa(encodeURIComponent(e.value).replace(/%([0-9A-F]{2})/g,function(o,a){return String.fromCharCode("0x"+a)}))}function m(){try{t.value=decodeURIComponent(atob(e.value).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch{d.error("\u89E3\u7801\u5931\u8D25")}}function v(){const o=e.value;e.value=t.value,t.value=o}return(o,a)=>{const r=h,s=C,u=b;return g(),y(u,{direction:"vertical",style:{width:"100%"}},{default:c(()=>[n(r,{value:e.value,"onUpdate:value":a[0]||(a[0]=_=>e.value=_),rows:5,placeholder:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u5B57\u7B26"},null,8,["value"]),n(u,{style:{"flex-wrap":"wrap"}},{default:c(()=>[n(s,{type:"primary",onClick:i},{default:c(()=>[w]),_:1}),n(s,{onClick:m},{default:c(()=>[k]),_:1}),n(s,{onClick:v},{default:c(()=>[B]),_:1})]),_:1}),n(r,{value:t.value,"onUpdate:value":a[1]||(a[1]=_=>t.value=_),rows:5,readonly:"",placeholder:"Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u7ED3\u679C"},null,8,["value"])]),_:1})}}},E=f(U,[["__scopeId","data-v-3c32249c"]]);export{E as default};
