import{b as B}from"./Router-FyJ0Ie4e.js";import{at as H,F as U,t as f,a0 as y,a1 as a,J as d,X as o,u as p,ax as h,ar as i,K as k,ap as _,T as C,av as b,ai as x,a3 as N,az as z,as as D,aA as F,aB as T,aC as A}from"./index-Yw6At5pr.js";import{E as J}from"./el-space-pmoGsUqu.js";const K=H("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:l,target:e}){l&&e&&this.history.push([l,e])},clearHistory(){this.history=[]}}}),L=l=>(F("data-v-8d77d5b8"),l=l(),T(),l),X={class:"history-list","w-full":""},$={class:"origin"},j=L(()=>_("span",{class:"middle"}," --> ",-1)),q={class:"target"},G=U({__name:"urlEncode",setup(l){const e=f(""),t=f(""),s=K();function E(){t.value=encodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function V(){t.value=decodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function g(){const r=e.value;e.value=t.value,t.value=r}function w(){e.value="",t.value="",s.clearHistory()}function S(r){e.value=r[0],t.value=r[1]}return(r,c)=>{const m=z,u=D,v=J,I=B;return d(),y(v,{direction:"vertical","w-full":"",fill:!0},{default:a(()=>[o(m,{modelValue:p(e),"onUpdate:modelValue":c[0]||(c[0]=n=>h(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),o(v,null,{default:a(()=>[o(u,{type:"primary",onClick:E},{default:a(()=>[i(" UrlEncode编码 ")]),_:1}),o(u,{type:"primary",onClick:V},{default:a(()=>[i(" UrlDecode解码 ")]),_:1}),o(u,{onClick:g},{default:a(()=>[i(" 交换 ")]),_:1}),o(u,{link:"",type:"primary",onClick:w},{default:a(()=>[i(" 清空结果 ")]),_:1})]),_:1}),o(m,{modelValue:p(t),"onUpdate:modelValue":c[1]||(c[1]=n=>h(t)?t.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),p(s).history.length?(d(),k(C,{key:0},[o(I,{level:5},{default:a(()=>[i(" 历史 ")]),_:1}),_("div",X,[(d(!0),k(C,null,b(p(s).history,(n,R)=>(d(),y(u,{key:R,type:"primary",link:"",onClick:M=>S(n)},{default:a(()=>[_("span",$,x(n[0]),1),j,_("span",q,x(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):N("",!0)]),_:1})}}}),W=A(G,[["__scopeId","data-v-8d77d5b8"]]);export{W as default};
