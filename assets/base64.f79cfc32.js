import{_ as f,K as p,H as x,o as g,c as y,w as _,a as n,b as r,R as b,B as h}from"./index.990579d2.js";import{_ as C}from"./index.8029ec85.js";import"./index.6885169e.js";import"./useFlexGapSupport.e8901a29.js";import"./SearchOutlined.002554e0.js";import"./Password.ef5aa21f.js";import"./EyeOutlined.63de4511.js";const w=r(" \u7F16\u7801 (Encode) "),B=r(" \u89E3\u7801 (Decode) "),k=r(" \u2195\u4EA4\u6362 "),U={__name:"base64",setup(I){const e=p(""),t=p(""),d=x("$msg");function i(){t.value=btoa(encodeURIComponent(e.value).replace(/%([0-9A-F]{2})/g,function(a,o){return String.fromCharCode("0x"+o)}))}function v(){try{t.value=decodeURIComponent(atob(e.value).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch{d.error("\u89E3\u7801\u5931\u8D25")}}function m(){const a=e.value;e.value=t.value,t.value=a}return(a,o)=>{const c=b,l=h,u=C;return g(),y(u,{direction:"vertical",style:{width:"100%"}},{default:_(()=>[n(c,{value:e.value,"onUpdate:value":o[0]||(o[0]=s=>e.value=s),rows:5,placeholder:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u5B57\u7B26"},null,8,["value"]),n(u,{style:{"flex-wrap":"wrap"}},{default:_(()=>[n(l,{type:"primary",onClick:i},{default:_(()=>[w]),_:1}),n(l,{onClick:v},{default:_(()=>[B]),_:1}),n(l,{onClick:m},{default:_(()=>[k]),_:1})]),_:1}),n(c,{value:t.value,"onUpdate:value":o[1]||(o[1]=s=>t.value=s),rows:5,readonly:"",placeholder:"Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u7ED3\u679C"},null,8,["value"])]),_:1})}}};var E=f(U,[["__scopeId","data-v-e75b6a6e"]]);export{E as default};
