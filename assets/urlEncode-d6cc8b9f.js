import"./index-c2ff1332.js";import{F as R,h as b,y as f,o as d,c as y,w as o,a,n as _,z as h,b as c,l as k,m as p,G as E,H as B,t as g,s as U,B as N,E as z,I as D,J as F,_ as G}from"./index-2bd8319e.js";import{E as J}from"./el-space-54f8680b.js";import{_ as L}from"./Title-b3bfa7dc.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-5dbd1878.js";const T=R("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:l,target:e}){l&&e&&this.history.push([l,e])},clearHistory(){this.history=[]}}}),$=l=>(D("data-v-1ef0eb2d"),l=l(),F(),l),j={class:"history-list","w-full":""},q={class:"origin"},A=$(()=>p("span",{class:"middle"}," --> ",-1)),K={class:"target"},M=b({__name:"urlEncode",setup(l){const e=f(""),t=f(""),s=T();function x(){t.value=encodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function C(){t.value=decodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function V(){const r=e.value;e.value=t.value,t.value=r}function w(){e.value="",t.value="",s.clearHistory()}function I(r){e.value=r[0],t.value=r[1]}return(r,i)=>{const m=N,u=z,v=J,S=L;return d(),y(v,{direction:"vertical","w-full":"",fill:!0},{default:o(()=>[a(m,{modelValue:_(e),"onUpdate:modelValue":i[0]||(i[0]=n=>h(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),a(v,null,{default:o(()=>[a(u,{type:"primary",onClick:x},{default:o(()=>[c(" UrlEncode编码 ")]),_:1}),a(u,{type:"primary",onClick:C},{default:o(()=>[c(" UrlDecode解码 ")]),_:1}),a(u,{onClick:V},{default:o(()=>[c(" 交换 ")]),_:1}),a(u,{link:"",type:"primary",onClick:w},{default:o(()=>[c(" 清空结果 ")]),_:1})]),_:1}),a(m,{modelValue:_(t),"onUpdate:modelValue":i[1]||(i[1]=n=>h(t)?t.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),_(s).history.length?(d(),k(E,{key:0},[a(S,{level:5},{default:o(()=>[c(" 历史 ")]),_:1}),p("div",j,[(d(!0),k(E,null,B(_(s).history,(n,H)=>(d(),y(u,{key:H,type:"primary",link:"",onClick:O=>I(n)},{default:o(()=>[p("span",q,g(n[0]),1),A,p("span",K,g(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):U("",!0)]),_:1})}}});const ee=G(M,[["__scopeId","data-v-1ef0eb2d"]]);export{ee as default};
