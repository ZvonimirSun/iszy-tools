import{F as k,aE as q,t as f,aq as x,aU as I,aY as z,w as B,o as C,K as S,ap as u,X as s,a1 as t,a2 as K,u as r,J as U,bJ as y,ar as F,b0 as g,az as J,as as M,aA as Q,aB as R,aC as A}from"./index-Yw6At5pr.js";import{E as L,a as O}from"./el-form-item-C3YJegE9.js";import"./castArray-PYTYzNpM.js";const v=n=>(Q("data-v-913bc048"),n=n(),R(),n),P={class:"login-container"},T={class:"main"},X=v(()=>u("span",{class:"i-icon-park-outline-user"},null,-1)),Y=v(()=>u("span",{class:"i-icon-park-outline-lock"},null,-1)),j={class:"btn-wrapper"},D=k({__name:"login",setup(n){const a=q({userName:"",password:""}),i=f(),c=f({}),p=f(!1),h=x(),E=I(),w=z();B(E,function(o){const e=o.query;e&&(typeof e.redirect=="string"&&(i.value=e.redirect),c.value=N(e))},{immediate:!0}),C(()=>{w.logged&&h.push({path:i.value||"/",query:c.value})});async function d(){if(!navigator.onLine){g.warning("已离线！");return}if(a.userName!=null&&a.password!=null){p.value=!0;try{await w.login({userName:a.userName,password:a.password}),g.success("登录成功！"),h.push({path:i.value||"/",query:c.value})}catch(o){o instanceof Error&&g.error(o.message)}p.value=!1}}function N(o){const{redirect:e,...l}=o;return l}return(o,e)=>{const l=J,m=O,V=M,b=L;return U(),S("div",P,[u("div",T,[s(b,K({layout:"horizontal",model:r(a)},{wrapperCol:{span:24}}),{default:t(()=>[s(m,{required:""},{default:t(()=>[s(l,{modelValue:r(a).userName,"onUpdate:modelValue":e[0]||(e[0]=_=>r(a).userName=_),placeholder:"账户",size:"large",onKeypress:y(d,["enter"])},{prefix:t(()=>[X]),_:1},8,["modelValue"])]),_:1}),s(m,{required:""},{default:t(()=>[s(l,{modelValue:r(a).password,"onUpdate:modelValue":e[1]||(e[1]=_=>r(a).password=_),type:"password",placeholder:"密码",size:"large","show-password":"",onKeypress:y(d,["enter"])},{prefix:t(()=>[Y]),_:1},8,["modelValue"])]),_:1}),s(m,null,{default:t(()=>[u("div",j,[s(V,{type:"primary",block:"",size:"large",loading:r(p),onClick:d},{default:t(()=>[F(" 登录 ")]),_:1},8,["loading"])])]),_:1})]),_:1},16,["model"])])])}}}),Z=A(D,[["__scopeId","data-v-913bc048"]]);export{Z as default};
