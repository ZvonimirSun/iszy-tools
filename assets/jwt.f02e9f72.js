import{_ as i,K as r,o as f,m as y,q as c,a as e,w as _,a2 as g,R as h,b as u}from"./index.93620b04.js";const w={class:"wrapper"},m={class:"encoded"},x=u(" Encoded "),b=u(" Token "),N={class:"decoded"},k=u(" Decoded "),J=u(" Header "),O=u(" Payload "),S={setup(j){const d=r(""),a=r(""),l=r("");function p(){if(d.value)try{const o=d.value.split(".");o.length===3?(a.value=JSON.stringify(JSON.parse(window.atob(o[0])),null,2),l.value=JSON.stringify(JSON.parse(window.atob(o[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(a.value="",l.value="")}catch{a.value="",l.value=""}else a.value="",l.value=""}return(o,t)=>{const n=g,v=h;return f(),y("div",w,[c("div",m,[e(n,{level:3},{default:_(()=>[x]),_:1}),e(n,{level:4},{default:_(()=>[b]),_:1}),e(v,{value:d.value,"onUpdate:value":t[0]||(t[0]=s=>d.value=s),label:"Token",onChange:p},null,8,["value"])]),c("div",N,[e(n,{level:3},{default:_(()=>[k]),_:1}),e(n,{level:4},{default:_(()=>[J]),_:1}),e(v,{value:a.value,"onUpdate:value":t[1]||(t[1]=s=>a.value=s),label:"Header",readonly:""},null,8,["value"]),e(n,{level:4},{default:_(()=>[O]),_:1}),e(v,{value:l.value,"onUpdate:value":t[2]||(t[2]=s=>l.value=s),label:"Payload",readonly:""},null,8,["value"])])])}}};var C=i(S,[["__scopeId","data-v-55cb4f3d"]]);export{C as default};
