import{c as H}from"./ant-design-vue-_jsSmQ7G.js";import{a5 as R,j as U,B as v,o as d,ay as y,az as a,b as o,y as p,X as h,W as c,c as k,a as _,F as C,e as b,t as g,g as N,aA as z,aB as F,aF as D,aH as j,aI as A,a3 as L}from"./vendor-flbquvym.js";const T=R("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:l,target:e}){l&&e&&this.history.push([l,e])},clearHistory(){this.history=[]}}}),W=l=>(j("data-v-3f831db2"),l=l(),A(),l),X={class:"history-list","w-full":""},$={class:"origin"},q=W(()=>_("span",{class:"middle"}," --> ",-1)),G={class:"target"},J=U({__name:"urlEncode",setup(l){const e=v(""),t=v(""),s=T();function V(){t.value=encodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function x(){t.value=decodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function E(){const u=e.value;e.value=t.value,t.value=u}function w(){e.value="",t.value="",s.clearHistory()}function I(u){e.value=u[0],t.value=u[1]}return(u,i)=>{const m=z,r=F,f=D,S=H;return d(),y(f,{direction:"vertical","w-full":"",fill:!0},{default:a(()=>[o(m,{modelValue:p(e),"onUpdate:modelValue":i[0]||(i[0]=n=>h(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),o(f,null,{default:a(()=>[o(r,{type:"primary",onClick:V},{default:a(()=>[c(" UrlEncode编码 ")]),_:1}),o(r,{type:"primary",onClick:x},{default:a(()=>[c(" UrlDecode解码 ")]),_:1}),o(r,{onClick:E},{default:a(()=>[c(" 交换 ")]),_:1}),o(r,{link:"",type:"primary",onClick:w},{default:a(()=>[c(" 清空结果 ")]),_:1})]),_:1}),o(m,{modelValue:p(t),"onUpdate:modelValue":i[1]||(i[1]=n=>h(t)?t.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),p(s).history.length?(d(),k(C,{key:0},[o(S,{level:5},{default:a(()=>[c(" 历史 ")]),_:1}),_("div",X,[(d(!0),k(C,null,b(p(s).history,(n,B)=>(d(),y(r,{key:B,type:"primary",link:"",onClick:K=>I(n)},{default:a(()=>[_("span",$,g(n[0]),1),q,_("span",G,g(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):N("",!0)]),_:1})}}}),P=L(J,[["__scopeId","data-v-3f831db2"]]);export{P as default};
