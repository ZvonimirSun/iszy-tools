import{j as E,R as k,a6 as v,J as F,aw as K,T as P,o as U,F as q,G as u,K as s,w as r,m as l,bk as m,L as b,aC as y,$ as C,N as I,a0 as S,a1 as B,a2 as R}from"./index-B64UzQ7O.js";import{a as $,E as M}from"./el-form-item-kovEj_mb.js";import"./castArray-0GIcrlWO.js";const f=c=>(S("data-v-d9568009"),c=c(),B(),c),T={class:"login-container"},j={class:"main"},G=f(()=>u("span",{class:"i-icon-park-outline-user"},null,-1)),J=f(()=>u("span",{class:"i-icon-park-outline-user"},null,-1)),L=f(()=>u("span",{class:"i-icon-park-outline-lock"},null,-1)),A=f(()=>u("span",{class:"i-icon-park-outline-lock"},null,-1)),D=f(()=>u("span",{class:"i-icon-park-outline-phone"},null,-1)),H=f(()=>u("span",{class:"i-icon-park-outline-mail"},null,-1)),O=E({__name:"register",setup(c){const p=k(),a=v({userName:"",nickName:"",password:"",rePassword:"",mobile:"",email:""}),N=v({userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],nickName:[{required:!0,message:"请输入昵称",trigger:"blur"}],password:[{trigger:"blur",validator:(i,e,o)=>{if(e==="")o(new Error("请输入密码"));else{if(a.rePassword!==""){if(!p.value)return;p.value.validateField("rePassword",()=>{})}o()}}}],rePassword:[{trigger:"blur",validator:(i,e,o)=>{e===""?o(new Error("请再次输入密码")):e!==a.password?o("两次输入密码不一致!"):o()}}],mobile:[{trigger:"blur",validator:(i,e,o)=>{e===""||/^1[3-9]\d{9}$/.test(e)?o():o("请输入正确的手机号码")}}],email:[{trigger:"blur",validator:(i,e,o)=>{e===""||/^[\w-]+@[\w-]+(?:\.[\w-]+)+$/.test(e)?o():o("请输入正确的邮箱")}}]}),_=k(!1),g=F(),V=K();P(()=>{V.logged&&g.back()});function n(){p.value&&p.value.validate(i=>{i&&(_.value=!0,V.register(a).then(()=>{y.success("注册成功，请等待管理员审批"),g.push("/")}).catch(e=>{y.error(e.message)}).finally(()=>{_.value=!1}))})}function x(){var i;(i=p.value)==null||i.resetFields()}function h(){g.push("/login")}return(i,e)=>{const o=C,d=$,w=I,z=M;return U(),q("div",T,[u("div",j,[s(z,{ref_key:"registerFormRef",ref:p,layout:"horizontal",model:l(a),rules:l(N),"status-icon":"","label-width":"auto"},{default:r(()=>[s(d,{required:"",label:"用户名",prop:"userName"},{default:r(()=>[s(o,{modelValue:l(a).userName,"onUpdate:modelValue":e[0]||(e[0]=t=>l(a).userName=t),size:"large",onKeydown:m(n,["enter"])},{prefix:r(()=>[G]),_:1},8,["modelValue"])]),_:1}),s(d,{required:"",label:"昵称",prop:"nickName"},{default:r(()=>[s(o,{modelValue:l(a).nickName,"onUpdate:modelValue":e[1]||(e[1]=t=>l(a).nickName=t),size:"large",onKeydown:m(n,["enter"])},{prefix:r(()=>[J]),_:1},8,["modelValue"])]),_:1}),s(d,{required:"",label:"密码",prop:"password"},{default:r(()=>[s(o,{modelValue:l(a).password,"onUpdate:modelValue":e[2]||(e[2]=t=>l(a).password=t),type:"password",size:"large","show-password":"",autocomplete:"off",onKeydown:m(n,["enter"])},{prefix:r(()=>[L]),_:1},8,["modelValue"])]),_:1}),s(d,{required:"",label:"重复密码",prop:"rePassword"},{default:r(()=>[s(o,{modelValue:l(a).rePassword,"onUpdate:modelValue":e[3]||(e[3]=t=>l(a).rePassword=t),type:"password",size:"large","show-password":"",autocomplete:"off",onKeydown:m(n,["enter"])},{prefix:r(()=>[A]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"手机号",prop:"mobile"},{default:r(()=>[s(o,{modelValue:l(a).mobile,"onUpdate:modelValue":e[4]||(e[4]=t=>l(a).mobile=t),size:"large",onKeydown:m(n,["enter"])},{prefix:r(()=>[D]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"邮箱",prop:"email"},{default:r(()=>[s(o,{modelValue:l(a).email,"onUpdate:modelValue":e[5]||(e[5]=t=>l(a).email=t),size:"large",onKeydown:m(n,["enter"])},{prefix:r(()=>[H]),_:1},8,["modelValue"])]),_:1}),s(d,null,{default:r(()=>[s(w,{type:"primary",block:"",size:"large",loading:l(_),onClick:n},{default:r(()=>[b(" 注册 ")]),_:1},8,["loading"]),s(w,{block:"",size:"large",disabled:l(_),onClick:x},{default:r(()=>[b(" 重置 ")]),_:1},8,["disabled"]),s(w,{block:"",size:"large",disabled:l(_),onClick:h},{default:r(()=>[b(" 返回登录 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model","rules"])])])}}}),Y=R(O,[["__scopeId","data-v-d9568009"]]);export{Y as default};