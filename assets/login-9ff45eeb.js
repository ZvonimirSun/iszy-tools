import{n as k,D as u,d as q,dm as I,b,J as K,V as S,o as z,r as B,s as i,f as a,w as t,v as r,aa as h,g as C,bD as U,G as g,H as D,E as F,N as L,O as M,_ as O}from"./index.js";import{a as Q,E as R}from"./el-form-item-ee26a29f.js";import"./vite-8235fac6.js";import"./castArray-552f9086.js";const w=n=>(L("data-v-406f164d"),n=n(),M(),n),G={class:"login-container"},H={class:"main"},J=w(()=>i("span",{class:"i-icon-park-outline-user"},null,-1)),P=w(()=>i("span",{class:"i-icon-park-outline-lock"},null,-1)),T={class:"btn-wrapper"},j=k({__name:"login",setup(n){const s=u({userName:"",password:""}),d=u(),c=u({}),p=u(!1),v=q(),N=I(),y=b();K(N,function(o){const e=o.query;e&&(typeof e.redirect=="string"&&(d.value=e.redirect),c.value=V(e))},{immediate:!0}),S(()=>{y.isLogged&&v.push({path:d.value||"/",query:c.value})});async function _(){if(!navigator.onLine){g.warning("已离线！");return}if(s.value.userName!=null&&s.value.password!=null){p.value=!0;try{await y.login({userName:s.value.userName,password:s.value.password}),g.success("登录成功！"),v.push({path:d.value||"/",query:c.value})}catch(o){o instanceof Error&&g.error(o.message)}p.value=!1}}function V(o){const{redirect:e,...l}=o;return l}return(o,e)=>{const l=D,m=Q,x=F,E=R;return z(),B("div",G,[i("div",H,[a(E,U({layout:"horizontal",model:r(s)},{wrapperCol:{span:24}}),{default:t(()=>[a(m,{required:""},{default:t(()=>[a(l,{modelValue:r(s).userName,"onUpdate:modelValue":e[0]||(e[0]=f=>r(s).userName=f),placeholder:"账户",size:"large",onKeypress:h(_,["enter"])},{prefix:t(()=>[J]),_:1},8,["modelValue","onKeypress"])]),_:1}),a(m,{required:""},{default:t(()=>[a(l,{modelValue:r(s).password,"onUpdate:modelValue":e[1]||(e[1]=f=>r(s).password=f),type:"password",placeholder:"密码",size:"large","show-password":"",onKeypress:h(_,["enter"])},{prefix:t(()=>[P]),_:1},8,["modelValue","onKeypress"])]),_:1}),a(m,null,{default:t(()=>[i("div",T,[a(x,{type:"primary",block:"",size:"large",loading:r(p),onClick:_},{default:t(()=>[C(" 登录 ")]),_:1},8,["loading"])])]),_:1})]),_:1},16,["model"])])])}}});const Z=O(j,[["__scopeId","data-v-406f164d"]]);export{Z as default};
