import{h as k,y as u,u as I,dh as q,K,D as b,R as z,o as B,l as S,m as c,a,w as t,n as r,a3 as h,b as C,bz as R,A as g,B as U,E as F,I as L,J as M,_ as Q}from"./index-2bd8319e.js";import{a as A,E as D}from"./el-form-item-dcf93c2d.js";import"./castArray-a9356298.js";const w=n=>(L("data-v-ca7636ac"),n=n(),M(),n),J={class:"login-container"},O={class:"main"},P=w(()=>c("span",{class:"i-icon-park-outline-user"},null,-1)),T=w(()=>c("span",{class:"i-icon-park-outline-lock"},null,-1)),j={class:"btn-wrapper"},G=k({__name:"login",setup(n){const s=u({userName:"",password:""}),i=u(),p=u({}),d=u(!1),y=I(),x=q(),v=K();b(x,function(o){const e=o.query;e&&(typeof e.redirect=="string"&&(i.value=e.redirect),p.value=E(e))},{immediate:!0}),z(()=>{v.isLogged&&y.push({path:i.value||"/",query:p.value})});async function _(){if(!navigator.onLine){g.warning("已离线！");return}if(s.value.userName!=null&&s.value.password!=null){d.value=!0;try{await v.login({userName:s.value.userName,password:s.value.password}),g.success("登录成功！"),y.push({path:i.value||"/",query:p.value})}catch(o){o instanceof Error&&g.error(o.message)}d.value=!1}}function E(o){const{redirect:e,...l}=o;return l}return(o,e)=>{const l=U,m=A,N=F,V=D;return B(),S("div",J,[c("div",O,[a(V,R({layout:"horizontal",model:r(s)},{wrapperCol:{span:24}}),{default:t(()=>[a(m,{required:""},{default:t(()=>[a(l,{modelValue:r(s).userName,"onUpdate:modelValue":e[0]||(e[0]=f=>r(s).userName=f),placeholder:"账户",size:"large",onKeypress:h(_,["enter"])},{prefix:t(()=>[P]),_:1},8,["modelValue","onKeypress"])]),_:1}),a(m,{required:""},{default:t(()=>[a(l,{modelValue:r(s).password,"onUpdate:modelValue":e[1]||(e[1]=f=>r(s).password=f),type:"password",placeholder:"密码",size:"large","show-password":"",onKeypress:h(_,["enter"])},{prefix:t(()=>[T]),_:1},8,["modelValue","onKeypress"])]),_:1}),a(m,null,{default:t(()=>[c("div",j,[a(N,{type:"primary",block:"",size:"large",loading:r(d),onClick:_},{default:t(()=>[C(" 登录 ")]),_:1},8,["loading"])])]),_:1})]),_:1},16,["model"])])])}}});const Y=Q(G,[["__scopeId","data-v-ca7636ac"]]);export{Y as default};
