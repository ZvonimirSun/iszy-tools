import{D as C,r as p,H as x,Z as V,$ as n,V as l,u as m,aw as i,aq as s,a$ as w,az as y,ar as E}from"./index-tHblRTxj.js";import{E as b}from"./el-space-COobc8k7.js";const B=C({__name:"base64",setup(g){const e=p(""),a=p("");function f(){a.value=btoa(encodeURIComponent(e.value).replace(/%([0-9A-F]{2})/g,(t,o)=>String.fromCharCode(Number.parseInt(`0x${o}`))))}function _(){try{a.value=decodeURIComponent(atob(e.value).split("").map(t=>`%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""))}catch{w.error("解码失败")}}function v(){const t=e.value;e.value=a.value,a.value=t}return(t,o)=>{const c=y,r=E,d=b;return x(),V(d,{direction:"vertical","w-full":"",fill:!0},{default:n(()=>[l(c,{modelValue:m(e),"onUpdate:modelValue":o[0]||(o[0]=u=>i(e)?e.value=u:null),type:"textarea",rows:5,placeholder:"请输入要进行 Base64 编码或解码的字符"},null,8,["modelValue"]),l(d,{style:{"flex-wrap":"wrap"}},{default:n(()=>[l(r,{type:"primary",onClick:f},{default:n(()=>[s(" 编码 (Encode) ")]),_:1}),l(r,{onClick:_},{default:n(()=>[s(" 解码 (Decode) ")]),_:1}),l(r,{onClick:v},{default:n(()=>[s(" ↕交换 ")]),_:1})]),_:1}),l(c,{modelValue:m(a),"onUpdate:modelValue":o[1]||(o[1]=u=>i(a)?a.value=u:null),type:"textarea",rows:5,readonly:"",placeholder:"Base64 编码或解码的结果"},null,8,["modelValue"])]),_:1})}}});export{B as default};
