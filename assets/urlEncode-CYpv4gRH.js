import{P as N,k as S,R as y,q as _,r as d,w as o,K as a,E as k,G as I,W as T,X as E,x as p,L as z,N as i,Y as C,F as c,Z as D,H as x,a0 as F}from"./index-bx-t8jyU.js";import{E as L}from"./el-space-C6GRMIm6.js";import{T as b}from"./Router-D_9zQWnH.js";const q=N("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:m,target:e}){m&&e&&this.history.push([m,e])},clearHistory(){this.history=[]}}}),G={class:"history-list","w-full":""},K={class:"origin"},P={class:"target"},W=S({__name:"urlEncode",setup(m){const e=y(""),l=y(""),s=q();function V(){l.value=encodeURIComponent(e.value),e.value&&l.value&&s.addHistory({origin:e.value,target:l.value})}function g(){l.value=decodeURIComponent(e.value),e.value&&l.value&&s.addHistory({origin:e.value,target:l.value})}function w(){const r=e.value;e.value=l.value,l.value=r}function R(){e.value="",l.value="",s.clearHistory()}function H(r){e.value=r[0],l.value=r[1]}return(r,t)=>{const f=T,u=z,v=L,U=b;return d(),_(v,{direction:"vertical","w-full":"",fill:!0},{default:o(()=>[a(f,{modelValue:p(e),"onUpdate:modelValue":t[0]||(t[0]=n=>E(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),a(v,null,{default:o(()=>[a(u,{type:"primary",onClick:V},{default:o(()=>t[2]||(t[2]=[i(" UrlEncode编码 ")])),_:1}),a(u,{type:"primary",onClick:g},{default:o(()=>t[3]||(t[3]=[i(" UrlDecode解码 ")])),_:1}),a(u,{onClick:w},{default:o(()=>t[4]||(t[4]=[i(" 交换 ")])),_:1}),a(u,{link:"",type:"primary",onClick:R},{default:o(()=>t[5]||(t[5]=[i(" 清空结果 ")])),_:1})]),_:1}),a(f,{modelValue:p(l),"onUpdate:modelValue":t[1]||(t[1]=n=>E(l)?l.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),p(s).history.length?(d(),k(C,{key:0},[a(U,{level:5},{default:o(()=>t[6]||(t[6]=[i(" 历史 ")])),_:1}),c("div",G,[(d(!0),k(C,null,D(p(s).history,(n,B)=>(d(),_(u,{key:B,type:"primary",link:"",onClick:X=>H(n)},{default:o(()=>[c("span",K,x(n[0]),1),t[7]||(t[7]=c("span",{class:"middle"}," --> ",-1)),c("span",P,x(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):I("",!0)]),_:1})}}}),j=F(W,[["__scopeId","data-v-c63f77a7"]]);export{j as default};
