import{_ as k,K as v,o as u,m as h,q as c,a as e,w as s,a2 as g,R as f,b as r}from"./index.82f4337f.js";const w={class:"wrapper"},C={class:"encoded"},E=r(" Encoded "),b=r(" Token "),_={class:"decoded"},x=r(" Decoded "),M=r(" Header "),y=r(" Payload "),z={__name:"jwt",setup(H){const d=v(""),a=v(""),t=v("");function m(){if(d.value)try{const i=d.value.split(".");i.length===3?(a.value=JSON.stringify(JSON.parse(window.atob(i[0])),null,2),t.value=JSON.stringify(JSON.parse(window.atob(i[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(a.value="",t.value="")}catch{a.value="",t.value=""}else a.value="",t.value=""}return(i,o)=>{const l=g,p=f;return u(),h("div",w,[c("div",C,[e(l,{level:3},{default:s(()=>[E]),_:1}),e(l,{level:4},{default:s(()=>[b]),_:1}),e(p,{value:d.value,"onUpdate:value":o[0]||(o[0]=n=>d.value=n),label:"Token",onChange:m},null,8,["value"])]),c("div",_,[e(l,{level:3},{default:s(()=>[x]),_:1}),e(l,{level:4},{default:s(()=>[M]),_:1}),e(p,{value:a.value,"onUpdate:value":o[1]||(o[1]=n=>a.value=n),label:"Header",readonly:""},null,8,["value"]),e(l,{level:4},{default:s(()=>[y]),_:1}),e(p,{value:t.value,"onUpdate:value":o[2]||(o[2]=n=>t.value=n),label:"Payload",readonly:""},null,8,["value"])])])}}};var I=k(z,[["__scopeId","data-v-489b78d1"]]);export{I as default};
