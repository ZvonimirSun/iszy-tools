import{h as f,y as r,o as y,l as g,m,a as e,w as u,b as _,n as i,z as c,B as V,_ as w}from"./index-2d447dfc.js";import"./default-5df60f68.js";import"./index-7db2b7cc.js";import{_ as x}from"./Title-ca644414.js";import"./index-175fedb0.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-a7019869.js";import"./Link-2398b083.js";import"./Paragraph-d3fb1d07.js";import"./Text-5b5e5745.js";const N={class:"wrapper"},b={class:"encoded"},h={class:"decoded"},k=f({__name:"jwt",setup(j){const o=r(""),l=r(""),t=r("");function v(){if(o.value)try{const n=o.value.split(".");n.length===3?(l.value=JSON.stringify(JSON.parse(window.atob(n[0])),null,2),t.value=JSON.stringify(JSON.parse(window.atob(n[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(l.value="",t.value="")}catch{l.value="",t.value=""}else l.value="",t.value=""}return(n,a)=>{const s=x,p=V;return y(),g("div",N,[m("div",b,[e(s,{level:3},{default:u(()=>[_(" Encoded ")]),_:1}),e(s,{level:4},{default:u(()=>[_(" Token ")]),_:1}),e(p,{modelValue:i(o),"onUpdate:modelValue":a[0]||(a[0]=d=>c(o)?o.value=d:null),type:"textarea",label:"Token",onChange:v},null,8,["modelValue"])]),m("div",h,[e(s,{level:3},{default:u(()=>[_(" Decoded ")]),_:1}),e(s,{level:4},{default:u(()=>[_(" Header ")]),_:1}),e(p,{modelValue:i(l),"onUpdate:modelValue":a[1]||(a[1]=d=>c(l)?l.value=d:null),type:"textarea",label:"Header",readonly:""},null,8,["modelValue"]),e(s,{level:4},{default:u(()=>[_(" Payload ")]),_:1}),e(p,{modelValue:i(t),"onUpdate:modelValue":a[2]||(a[2]=d=>c(t)?t.value=d:null),type:"textarea",label:"Payload",readonly:""},null,8,["modelValue"])])])}}});const P=w(k,[["__scopeId","data-v-602d2e0f"]]);export{P as default};
