import{_ as x,L as i,I as y,o as h,c as C,w as l,a as e,b as r,B as u,d as c,S as g}from"./index.41cdb11f.js";/* empty css               *//* empty css               */import{S as p}from"./index.680070f3.js";import"./index.b18502fd.js";import"./useFlexGapSupport.07774eee.js";import"./SearchOutlined.636d4a7d.js";import"./EyeOutlined.ec372014.js";const w=c(" \u7F16\u7801 (Encode) "),b=c(" \u89E3\u7801 (Decode) "),B=c(" \u2195\u4EA4\u6362 "),k={setup(I){const{TextArea:d}=g,t=i(""),a=i(""),_=y("$msg");function v(){a.value=btoa(encodeURIComponent(t.value).replace(/%([0-9A-F]{2})/g,function(o,n){return String.fromCharCode("0x"+n)}))}function m(){try{a.value=decodeURIComponent(atob(t.value).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch{_.error("\u89E3\u7801\u5931\u8D25")}}function f(){const o=t.value;t.value=a.value,a.value=o}return(o,n)=>(h(),C(e(p),{direction:"vertical",style:{width:"100%"}},{default:l(()=>[r(e(d),{value:t.value,"onUpdate:value":n[0]||(n[0]=s=>t.value=s),rows:5,placeholder:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u5B57\u7B26"},null,8,["value"]),r(e(p),{style:{"flex-wrap":"wrap"}},{default:l(()=>[r(e(u),{type:"primary",onClick:v},{default:l(()=>[w]),_:1}),r(e(u),{onClick:m},{default:l(()=>[b]),_:1}),r(e(u),{onClick:f},{default:l(()=>[B]),_:1})]),_:1}),r(e(d),{value:a.value,"onUpdate:value":n[1]||(n[1]=s=>a.value=s),rows:5,readonly:"",placeholder:"Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u7ED3\u679C"},null,8,["value"])]),_:1}))}};var D=x(k,[["__scopeId","data-v-9914ac52"]]);export{D as default};