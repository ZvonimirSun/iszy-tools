import{k as c,o as f,c as y,a as i,f as e,b4 as a,w as u,a6 as g,T as h,y as v}from"./vendor.dc36df7c.js";import{_ as w}from"./index.76782ccf.js";const x={class:"container"},k={class:"encoded"},N=v("Encoded"),T=v("Token"),b={class:"decoded"},m=v("Decoded"),j=v("Header"),J=v("Payload"),O={setup(S){const{TextArea:_}=g,{Title:s}=h,r=c(""),l=c(""),t=c("");function p(){if(r.value)try{const n=r.value.split(".");n.length===3?(l.value=JSON.stringify(JSON.parse(window.atob(n[0])),null,2),t.value=JSON.stringify(JSON.parse(window.atob(n[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(l.value="",t.value="")}catch{l.value="",t.value=""}else l.value="",t.value=""}return(n,o)=>(f(),y("div",x,[i("div",k,[e(a(s),{level:3},{default:u(()=>[N]),_:1}),e(a(s),{level:4},{default:u(()=>[T]),_:1}),e(a(_),{value:r.value,"onUpdate:value":o[0]||(o[0]=d=>r.value=d),label:"Token",onChange:p},null,8,["value"])]),i("div",b,[e(a(s),{level:3},{default:u(()=>[m]),_:1}),e(a(s),{level:4},{default:u(()=>[j]),_:1}),e(a(_),{value:l.value,"onUpdate:value":o[1]||(o[1]=d=>l.value=d),label:"Header",readonly:""},null,8,["value"]),e(a(s),{level:4},{default:u(()=>[J]),_:1}),e(a(_),{value:t.value,"onUpdate:value":o[2]||(o[2]=d=>t.value=d),label:"Payload",readonly:""},null,8,["value"])])]))}};var U=w(O,[["__scopeId","data-v-74050859"]]);export{U as default};