import{k as y,R as i,E as V,r as g,F as m,K as l,w as u,N as r,X as v,x as f,W as w,a0 as x}from"./index-bx-t8jyU.js";import{T as N}from"./Router-D_9zQWnH.js";const k={class:"wrapper"},c={class:"encoded"},b={class:"decoded"},T=y({__name:"jwt",setup(C){const o=i(""),a=i(""),t=i("");function _(){if(o.value)try{const n=o.value.split(".");n.length===3?(a.value=JSON.stringify(JSON.parse(window.atob(n[0])),null,2),t.value=JSON.stringify(JSON.parse(window.atob(n[1].replace(/-/g,"+").replace(/_/g,"/"))),null,2)):(a.value="",t.value="")}catch{a.value="",t.value=""}else a.value="",t.value=""}return(n,e)=>{const d=N,p=w;return g(),V("div",k,[m("div",c,[l(d,{level:3},{default:u(()=>e[3]||(e[3]=[r(" Encoded ")])),_:1}),l(d,{level:4},{default:u(()=>e[4]||(e[4]=[r(" Token ")])),_:1}),l(p,{modelValue:f(o),"onUpdate:modelValue":e[0]||(e[0]=s=>v(o)?o.value=s:null),type:"textarea",label:"Token",onChange:_},null,8,["modelValue"])]),m("div",b,[l(d,{level:3},{default:u(()=>e[5]||(e[5]=[r(" Decoded ")])),_:1}),l(d,{level:4},{default:u(()=>e[6]||(e[6]=[r(" Header ")])),_:1}),l(p,{modelValue:f(a),"onUpdate:modelValue":e[1]||(e[1]=s=>v(a)?a.value=s:null),type:"textarea",label:"Header",readonly:""},null,8,["modelValue"]),l(d,{level:4},{default:u(()=>e[7]||(e[7]=[r(" Payload ")])),_:1}),l(p,{modelValue:f(t),"onUpdate:modelValue":e[2]||(e[2]=s=>v(t)?t.value=s:null),type:"textarea",label:"Payload",readonly:""},null,8,["modelValue"])])])}}}),O=x(T,[["__scopeId","data-v-de185c26"]]);export{O as default};
