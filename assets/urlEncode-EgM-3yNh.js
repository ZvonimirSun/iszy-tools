import{b as B}from"./Router-PHx4o7pj.js";import{at as H,F as U,t as v,J as d,a0 as y,a1 as a,X as o,u as p,aw as h,ar as c,K as k,ap as _,T as C,ax as N,ai as x,a3 as z,az as b,as as D,aA as F,aB as T,aC as A}from"./index-vT3yfe1z.js";import{E as J}from"./el-space-eLSyzYIi.js";const K=H("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:l,target:e}){l&&e&&this.history.push([l,e])},clearHistory(){this.history=[]}}}),L=l=>(F("data-v-d1e60acf"),l=l(),T(),l),X={class:"history-list","w-full":""},$={class:"origin"},j=L(()=>_("span",{class:"middle"}," --> ",-1)),q={class:"target"},G=U({__name:"urlEncode",setup(l){const e=v(""),t=v(""),s=K();function E(){t.value=encodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function V(){t.value=decodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function g(){const r=e.value;e.value=t.value,t.value=r}function w(){e.value="",t.value="",s.clearHistory()}function S(r){e.value=r[0],t.value=r[1]}return(r,i)=>{const m=b,u=D,f=J,I=B;return d(),y(f,{direction:"vertical","w-full":"",fill:!0},{default:a(()=>[o(m,{modelValue:p(e),"onUpdate:modelValue":i[0]||(i[0]=n=>h(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),o(f,null,{default:a(()=>[o(u,{type:"primary",onClick:E},{default:a(()=>[c(" UrlEncode编码 ")]),_:1}),o(u,{type:"primary",onClick:V},{default:a(()=>[c(" UrlDecode解码 ")]),_:1}),o(u,{onClick:g},{default:a(()=>[c(" 交换 ")]),_:1}),o(u,{link:"",type:"primary",onClick:w},{default:a(()=>[c(" 清空结果 ")]),_:1})]),_:1}),o(m,{modelValue:p(t),"onUpdate:modelValue":i[1]||(i[1]=n=>h(t)?t.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),p(s).history.length?(d(),k(C,{key:0},[o(I,{level:5},{default:a(()=>[c(" 历史 ")]),_:1}),_("div",X,[(d(!0),k(C,null,N(p(s).history,(n,R)=>(d(),y(u,{key:R,type:"primary",link:"",onClick:M=>S(n)},{default:a(()=>[_("span",$,x(n[0]),1),j,_("span",q,x(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):z("",!0)]),_:1})}}}),W=A(G,[["__scopeId","data-v-d1e60acf"]]);export{W as default};