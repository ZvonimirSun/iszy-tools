import"./index-852b4aa9.js";import{L as B,p as H,F as f,o as d,f as y,w as o,g as a,x as _,G as h,h as c,s as k,t as p,M as E,N as U,B as g,A as b,I as N,E as z,O as D,P as F,d as L}from"./index.js";import{E as A}from"./el-space-c7bf86f9.js";import{_ as G}from"./Title-7ddcb60e.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-ac423b5b.js";const M=B("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:l,target:e}){l&&e&&this.history.push([l,e])},clearHistory(){this.history=[]}}}),O=l=>(D("data-v-7101d2b6"),l=l(),F(),l),P={class:"history-list","w-full":""},T={class:"origin"},$=O(()=>p("span",{class:"middle"}," --> ",-1)),j={class:"target"},q=H({__name:"urlEncode",setup(l){const e=f(""),t=f(""),s=M();function x(){t.value=encodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function C(){t.value=decodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function V(){const r=e.value;e.value=t.value,t.value=r}function w(){e.value="",t.value="",s.clearHistory()}function I(r){e.value=r[0],t.value=r[1]}return(r,i)=>{const m=N,u=z,v=A,S=G;return d(),y(v,{direction:"vertical","w-full":"",fill:!0},{default:o(()=>[a(m,{modelValue:_(e),"onUpdate:modelValue":i[0]||(i[0]=n=>h(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),a(v,null,{default:o(()=>[a(u,{type:"primary",onClick:x},{default:o(()=>[c(" UrlEncode编码 ")]),_:1}),a(u,{type:"primary",onClick:C},{default:o(()=>[c(" UrlDecode解码 ")]),_:1}),a(u,{onClick:V},{default:o(()=>[c(" 交换 ")]),_:1}),a(u,{link:"",type:"primary",onClick:w},{default:o(()=>[c(" 清空结果 ")]),_:1})]),_:1}),a(m,{modelValue:_(t),"onUpdate:modelValue":i[1]||(i[1]=n=>h(t)?t.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),_(s).history.length?(d(),k(E,{key:0},[a(S,{level:5},{default:o(()=>[c(" 历史 ")]),_:1}),p("div",P,[(d(!0),k(E,null,U(_(s).history,(n,R)=>(d(),y(u,{key:R,type:"primary",link:"",onClick:J=>I(n)},{default:o(()=>[p("span",T,g(n[0]),1),$,p("span",j,g(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):b("",!0)]),_:1})}}});const ee=L(q,[["__scopeId","data-v-7101d2b6"]]);export{ee as default};
