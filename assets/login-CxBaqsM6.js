import{k as B,a4 as z,R as w,J as K,at as U,aw as F,a7 as I,T as P,ab as R,aA as v,E as S,r as T,F as i,K as t,w as a,W as M,bk as E,x as n,L as O,N as b,aB as Q,ax as A,a0 as D}from"./index-CYDKG0Vj.js";import{E as G}from"./el-space-m6twJOWp.js";import{E as H}from"./el-divider-GPr-f2Jp.js";import{E as J,a as W}from"./el-form-item-jJyGq_ZE.js";import"./castArray-C0nndKXD.js";const $={class:"login-container"},j={class:"main"},X=B({__name:"login",setup(Y){const s=z({userName:"",password:""}),u=w(),d=w({}),l=w(!1),p=K(),h=U(),c=F();I(h,o=>{const e=o.query;e&&(typeof e.redirect=="string"&&(u.value=e.redirect),d.value=L(e))},{immediate:!0}),P(()=>{c.logged&&p.push({path:u.value||"/",query:d.value})}),R(()=>{window.removeEventListener("message",f)});async function m(){if(!navigator.onLine){v.warning("已离线！");return}if(s.userName!=null&&s.password!=null){l.value=!0;try{await c.login({userName:s.userName,password:s.password}),y()}catch(o){o instanceof Error&&v.error(o.message)}l.value=!1}}function N(){p.push("/register")}function x(){window.addEventListener("message",f),window.open(`${A.apiOrigin}/auth/github`,"_blank")}async function f(o){var r;const e=o.source;((r=o.data)==null?void 0:r.type)==="oauth_complete"&&(window.removeEventListener("message",f),e.close(),await c.checkThirdPartyLogin(),y())}function y(){v.success("登录成功！"),p.push({path:u.value||"/",query:d.value})}function L(o){const{redirect:e,...r}=o;return r}return(o,e)=>{const r=M,g=J,k=O,V=W,C=H,q=G;return T(),S("div",$,[i("div",j,[t(V,Q({layout:"horizontal",model:n(s)},{wrapperCol:{span:24}}),{default:a(()=>[t(g,{required:""},{default:a(()=>[t(r,{modelValue:n(s).userName,"onUpdate:modelValue":e[0]||(e[0]=_=>n(s).userName=_),placeholder:"账户",size:"large",onKeypress:E(m,["enter"])},{prefix:a(()=>e[2]||(e[2]=[i("span",{class:"i-icon-park-outline-user"},null,-1)])),_:1},8,["modelValue"])]),_:1}),t(g,{required:""},{default:a(()=>[t(r,{modelValue:n(s).password,"onUpdate:modelValue":e[1]||(e[1]=_=>n(s).password=_),type:"password",placeholder:"密码",size:"large","show-password":"",onKeypress:E(m,["enter"])},{prefix:a(()=>e[3]||(e[3]=[i("span",{class:"i-icon-park-outline-lock"},null,-1)])),_:1},8,["modelValue"])]),_:1}),t(g,null,{default:a(()=>[t(k,{type:"primary",block:"",size:"large",loading:n(l),onClick:m},{default:a(()=>e[4]||(e[4]=[b(" 登录 ")])),_:1},8,["loading"]),t(k,{block:"",size:"large",disabled:n(l),onClick:N},{default:a(()=>e[5]||(e[5]=[b(" 注册 ")])),_:1},8,["disabled"])]),_:1})]),_:1},16,["model"]),t(C),t(q,null,{default:a(()=>[i("div",{class:"third-party",title:"GitHub登录",onClick:x},e[6]||(e[6]=[i("i",{class:"i-icon-park-outline:github"},null,-1)]))]),_:1})])])}}}),ae=D(X,[["__scopeId","data-v-41dd2e51"]]);export{ae as default};
