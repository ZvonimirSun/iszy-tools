import{b as R}from"./ant-design-vue-8684357f.js";import{a5 as B,j as H,B as f,o as i,ad as y,ae as a,b as o,y as _,X as h,W as c,c as k,a as p,F as g,e as U,t as x,g as N,af as z,ag as D,ak as F,am as j,an as L,a3 as T}from"./vendor-c7d095d4.js";import"./common-bad41c28.js";const W=B("urlEncode",{persist:!0,state:()=>({history:[]}),actions:{addHistory({origin:l,target:e}){l&&e&&this.history.push([l,e])},clearHistory(){this.history=[]}}}),X=l=>(j("data-v-7101d2b6"),l=l(),L(),l),$={class:"history-list","w-full":""},q={class:"origin"},A=X(()=>p("span",{class:"middle"}," --> ",-1)),G={class:"target"},J=H({__name:"urlEncode",setup(l){const e=f(""),t=f(""),s=W();function C(){t.value=encodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function E(){t.value=decodeURIComponent(e.value),e.value&&t.value&&s.addHistory({origin:e.value,target:t.value})}function V(){const u=e.value;e.value=t.value,t.value=u}function w(){e.value="",t.value="",s.clearHistory()}function S(u){e.value=u[0],t.value=u[1]}return(u,d)=>{const m=z,r=D,v=F,b=R;return i(),y(v,{direction:"vertical","w-full":"",fill:!0},{default:a(()=>[o(m,{modelValue:_(e),"onUpdate:modelValue":d[0]||(d[0]=n=>h(e)?e.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),o(v,null,{default:a(()=>[o(r,{type:"primary",onClick:C},{default:a(()=>[c(" UrlEncode编码 ")]),_:1}),o(r,{type:"primary",onClick:E},{default:a(()=>[c(" UrlDecode解码 ")]),_:1}),o(r,{onClick:V},{default:a(()=>[c(" 交换 ")]),_:1}),o(r,{link:"",type:"primary",onClick:w},{default:a(()=>[c(" 清空结果 ")]),_:1})]),_:1}),o(m,{modelValue:_(t),"onUpdate:modelValue":d[1]||(d[1]=n=>h(t)?t.value=n:null),type:"textarea",placeholder:"转换的内容粘贴在这里",autosize:{minRows:5,maxRows:8}},null,8,["modelValue"]),_(s).history.length?(i(),k(g,{key:0},[o(b,{level:5},{default:a(()=>[c(" 历史 ")]),_:1}),p("div",$,[(i(!0),k(g,null,U(_(s).history,(n,I)=>(i(),y(r,{key:I,type:"primary",link:"",onClick:K=>S(n)},{default:a(()=>[p("span",q,x(n[0]),1),A,p("span",G,x(n[1]),1)]),_:2},1032,["onClick"]))),128))])],64)):N("",!0)]),_:1})}}});const Q=T(J,[["__scopeId","data-v-7101d2b6"]]);export{Q as default};
