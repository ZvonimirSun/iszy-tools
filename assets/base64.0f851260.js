import{l as i,h,y as u,u as e,aj as p,G as x,o as y,f as l,a4 as s,K as c,ah as C}from"./vendor.a724c08c.js";/* empty css                */const g=c(" \u7F16\u7801 (Encode) "),w=c(" \u89E3\u7801 (Decode) "),k=c(" \u2195\u4EA4\u6362 "),j={setup(B){const{TextArea:d}=C,a=i(""),t=i(""),v=x("$msg");function _(){t.value=btoa(encodeURIComponent(a.value).replace(/%([0-9A-F]{2})/g,function(o,n){return String.fromCharCode("0x"+n)}))}function f(){try{t.value=decodeURIComponent(atob(a.value).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch{v.error("\u89E3\u7801\u5931\u8D25")}}function m(){const o=a.value;a.value=t.value,t.value=o}return(o,n)=>(y(),h(e(p),{direction:"vertical",style:{width:"100%"}},{default:u(()=>[l(e(d),{value:a.value,"onUpdate:value":n[0]||(n[0]=r=>a.value=r),rows:5,placeholder:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u5B57\u7B26"},null,8,["value"]),l(e(p),{style:{"flex-wrap":"wrap"}},{default:u(()=>[l(e(s),{type:"primary",onClick:_},{default:u(()=>[g]),_:1}),l(e(s),{onClick:f},{default:u(()=>[w]),_:1}),l(e(s),{onClick:m},{default:u(()=>[k]),_:1})]),_:1}),l(e(d),{value:t.value,"onUpdate:value":n[1]||(n[1]=r=>t.value=r),rows:5,readonly:"",placeholder:"Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u7ED3\u679C"},null,8,["value"])]),_:1}))}};export{j as default};