import{_ as f,L as i,o as y,n as g,s as c,b as e,a,w as u,ap as h,S as w,d as _}from"./index.fd3c34f7.js";/* empty css               *//* empty css               *//* empty css               */const x={class:"wrapper"},m={class:"encoded"},N=_(" Encoded "),b=_(" Token "),k={class:"decoded"},T=_(" Decoded "),S=_(" Header "),J=_(" Payload "),O={setup(j){const{TextArea:r}=h,{Title:s}=w,v=i(""),l=i(""),t=i("");function p(){if(v.value)try{const n=v.value.split(".");n.length===3?(l.value=JSON.stringify(JSON.parse(window.atob(n[0])),null,2),t.value=JSON.stringify(JSON.parse(window.atob(n[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(l.value="",t.value="")}catch{l.value="",t.value=""}else l.value="",t.value=""}return(n,o)=>(y(),g("div",x,[c("div",m,[e(a(s),{level:3},{default:u(()=>[N]),_:1}),e(a(s),{level:4},{default:u(()=>[b]),_:1}),e(a(r),{value:v.value,"onUpdate:value":o[0]||(o[0]=d=>v.value=d),label:"Token",onChange:p},null,8,["value"])]),c("div",k,[e(a(s),{level:3},{default:u(()=>[T]),_:1}),e(a(s),{level:4},{default:u(()=>[S]),_:1}),e(a(r),{value:l.value,"onUpdate:value":o[1]||(o[1]=d=>l.value=d),label:"Header",readonly:""},null,8,["value"]),e(a(s),{level:4},{default:u(()=>[J]),_:1}),e(a(r),{value:t.value,"onUpdate:value":o[2]||(o[2]=d=>t.value=d),label:"Payload",readonly:""},null,8,["value"])])]))}};var E=f(O,[["__scopeId","data-v-a8a05cd8"]]);export{E as default};
