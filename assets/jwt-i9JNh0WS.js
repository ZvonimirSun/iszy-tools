import{j as m,B as _,o as y,c as V,a as v,b as e,az as u,W as r,y as c,X as i,aA as g,a3 as b}from"./vendor-flbquvym.js";import{c as w}from"./ant-design-vue-_jsSmQ7G.js";const x={class:"wrapper"},N={class:"encoded"},k={class:"decoded"},h=m({__name:"jwt",setup(B){const o=_(""),l=_(""),a=_("");function f(){if(o.value)try{const n=o.value.split(".");n.length===3?(l.value=JSON.stringify(JSON.parse(window.atob(n[0])),null,2),a.value=JSON.stringify(JSON.parse(window.atob(n[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(l.value="",a.value="")}catch{l.value="",a.value=""}else l.value="",a.value=""}return(n,t)=>{const s=w,p=g;return y(),V("div",x,[v("div",N,[e(s,{level:3},{default:u(()=>[r(" Encoded ")]),_:1}),e(s,{level:4},{default:u(()=>[r(" Token ")]),_:1}),e(p,{modelValue:c(o),"onUpdate:modelValue":t[0]||(t[0]=d=>i(o)?o.value=d:null),type:"textarea",label:"Token",onChange:f},null,8,["modelValue"])]),v("div",k,[e(s,{level:3},{default:u(()=>[r(" Decoded ")]),_:1}),e(s,{level:4},{default:u(()=>[r(" Header ")]),_:1}),e(p,{modelValue:c(l),"onUpdate:modelValue":t[1]||(t[1]=d=>i(l)?l.value=d:null),type:"textarea",label:"Header",readonly:""},null,8,["modelValue"]),e(s,{level:4},{default:u(()=>[r(" Payload ")]),_:1}),e(p,{modelValue:c(a),"onUpdate:modelValue":t[2]||(t[2]=d=>i(a)?a.value=d:null),type:"textarea",label:"Payload",readonly:""},null,8,["modelValue"])])])}}}),O=b(h,[["__scopeId","data-v-4b09ffbb"]]);export{O as default};
