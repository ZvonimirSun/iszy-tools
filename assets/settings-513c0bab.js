import{F as $,h as z,u as H,dh as L,I as Q,k as W,y as N,Y as P,o as p,l as h,a as e,w as l,b as n,n as o,m as w,t as x,c as E,G as C,s as S,A as _,E as X,B as Z,J as ee,K as le,_ as oe}from"./index-4338fe84.js";import{E as te}from"./el-checkbox-55194843.js";import{E as ae}from"./el-popover-aa379a9b.js";import"./el-popper-6da3625c.js";import{E as se}from"./el-divider-a2d2fe59.js";import{a as ne,E as de}from"./el-form-item-5c527bec.js";import{E as ue}from"./el-space-bf4ddb72.js";import"./index-219c4487.js";import{_ as re}from"./Title-eb86d58f.js";import"./isEqual-cf808b44.js";import"./hasIn-dc2b3512.js";import"./castArray-8bbfab00.js";import"./ResizeObserver.es-0f9f8adb.js";const ie=$("main",{persist:!0,state:()=>({_cache:{},clearOfflineCacheTag:!1}),getters:{getData:m=>f=>{if(f)return(m._cache||{})[f]}},actions:{setData({key:m,val:f}={}){m&&(this._cache=this._cache||{},this._cache[m]=f)},clear(){this._cache={}},clearOfflineCache(){console.log("clearOfflineCache"),this.clearOfflineCacheTag=!0}}}),b=m=>(ee("data-v-64de78ce"),m=m(),le(),m),me={key:0,flex:"","flex-col":"","text-7":"","gap-4":"","items-start":""},pe={flex:""},fe=b(()=>w("div",{"w-32":""}," 昵称: ",-1)),ce={flex:""},_e=b(()=>w("div",{"w-32":""}," 邮箱: ",-1)),we=z({__name:"settings",setup(m){const f=H(),I=L(),u=Q(),r=W(()=>u.settings),V=N(!1),U=N(),a=P({nickName:"",email:"",passwd:"",rePasswd:"",oldPasswd:""}),F=P({rePasswd:[{validator:(y,t,d)=>{t&&t!==a.passwd?d(new Error("两次输入的密码不一致")):d()}}],oldPasswd:[{validator:(y,t,d)=>{!t&&(a.passwd||a.rePasswd)?d(new Error("请输入旧密码")):d()}}]}),O=()=>ie().clearOfflineCache(),T=()=>u.uploadSettings(),B=()=>u.downloadSettings();async function R(){await T()?_.success("同步成功"):_.error("同步失败")}async function D(){await B()?_.success("同步成功"):_.error("同步失败")}function M(){f.push({path:"/login",query:{redirect:I.fullPath}})}function j(){f.push("/logout")}function J(){a.nickName=u._user.profile.nickName??"",a.email=u._user.profile.email??"",a.passwd="",a.rePasswd="",a.oldPasswd="",V.value=!0}function q(){V.value=!1}async function A(y){y&&await y.validate(async t=>{if(t){const d={};if(a.nickName&&(d.nickName=a.nickName),a.email&&(d.email=a.email),a.passwd&&(d.passwd=a.passwd,d.oldPasswd=a.oldPasswd),Object.keys(d).length===0){_.warning("没有需要修改的信息");return}try{await u.updateUser(d)}catch(i){_.error(i.message)}V.value=!1}else return _.warning("请检查输入"),!1})}return(y,t)=>{const d=re,i=X,g=ue,k=Z,v=ne,G=de,K=se,Y=ae,c=te;return p(),h(C,null,[e(d,{level:3},{default:l(()=>[n(" 账户信息 ")]),_:1}),o(u)._user.token?(p(),h("div",me,[w("div",pe,[fe,w("div",null,x(o(u)._user.profile.nickName),1)]),w("div",ce,[_e,w("div",null,x(o(u)._user.profile.email),1)]),e(g,null,{default:l(()=>[e(i,{type:"primary",onClick:j},{default:l(()=>[n(" 登出 ")]),_:1}),o(V)?(p(),h(C,{key:1},[e(i,{type:"primary",onClick:t[0]||(t[0]=s=>A(o(U)))},{default:l(()=>[n(" 保存 ")]),_:1}),e(i,{onClick:q},{default:l(()=>[n(" 取消 ")]),_:1})],64)):(p(),E(i,{key:0,onClick:J},{default:l(()=>[n(" 修改信息 ")]),_:1}))]),_:1}),o(V)?(p(),E(G,{key:0,ref_key:"ruleFormRef",ref:U,model:o(a),rules:o(F),"label-width":"8rem","label-position":"left"},{default:l(()=>[e(v,{label:"昵称",prop:"nickName"},{default:l(()=>[e(k,{modelValue:o(a).nickName,"onUpdate:modelValue":t[1]||(t[1]=s=>o(a).nickName=s)},null,8,["modelValue"])]),_:1}),e(v,{label:"邮箱",prop:"email"},{default:l(()=>[e(k,{modelValue:o(a).email,"onUpdate:modelValue":t[2]||(t[2]=s=>o(a).email=s)},null,8,["modelValue"])]),_:1}),e(v,{label:"旧密码",prop:"oldPasswd"},{default:l(()=>[e(k,{modelValue:o(a).oldPasswd,"onUpdate:modelValue":t[3]||(t[3]=s=>o(a).oldPasswd=s),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(v,{label:"新密码",prop:"passwd"},{default:l(()=>[e(k,{modelValue:o(a).passwd,"onUpdate:modelValue":t[4]||(t[4]=s=>o(a).passwd=s),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(v,{label:"确认密码",prop:"rePasswd"},{default:l(()=>[e(k,{modelValue:o(a).rePasswd,"onUpdate:modelValue":t[5]||(t[5]=s=>o(a).rePasswd=s),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])):S("",!0)])):(p(),E(i,{key:1,type:"primary",onClick:M},{default:l(()=>[n(" 登录 ")]),_:1})),e(K),e(d,{level:3},{default:l(()=>[n(" 网站设置 ")]),_:1}),e(Y,{title:"您是否确定要清空本地缓存？","confirm-button-text":"清空",onConfirm:O},{reference:l(()=>[e(i,{type:"danger",plain:""},{default:l(()=>[n(" 清空本地缓存 ")]),_:1})]),_:1}),o(u)._user.token?(p(),h(C,{key:2},[e(d,{level:4},{default:l(()=>[n(" 设置云端同步 ")]),_:1}),e(g,null,{default:l(()=>[e(i,{onClick:R},{default:l(()=>[n(" 同步到云端 ")]),_:1}),e(i,{onClick:D},{default:l(()=>[n(" 从云端同步 ")]),_:1}),e(c,{modelValue:o(r).autoSync,"onUpdate:modelValue":t[6]||(t[6]=s=>o(r).autoSync=s)},{default:l(()=>[n(" 自动同步 ")]),_:1},8,["modelValue"])]),_:1})],64)):S("",!0),e(d,{level:4},{default:l(()=>[n(" 全局设置 ")]),_:1}),e(d,{level:5},{default:l(()=>[n(" 访问统计 ")]),_:1}),e(g,null,{default:l(()=>[e(c,{modelValue:o(r).showMost,"onUpdate:modelValue":t[7]||(t[7]=s=>o(r).showMost=s)},{default:l(()=>[n(" 最常访问 ")]),_:1},8,["modelValue"]),e(c,{modelValue:o(r).showRecent,"onUpdate:modelValue":t[8]||(t[8]=s=>o(r).showRecent=s)},{default:l(()=>[n(" 最近访问 ")]),_:1},8,["modelValue"])]),_:1}),e(d,{level:5},{default:l(()=>[n(" 其他设置 ")]),_:1}),e(g,null,{default:l(()=>[e(c,{modelValue:o(r).showSearch,"onUpdate:modelValue":t[9]||(t[9]=s=>o(r).showSearch=s)},{default:l(()=>[n(" 显示搜索 ")]),_:1},8,["modelValue"]),e(c,{modelValue:o(r).showType,"onUpdate:modelValue":t[10]||(t[10]=s=>o(r).showType=s)},{default:l(()=>[n(" 显示分类 ")]),_:1},8,["modelValue"]),e(c,{modelValue:o(r).openInNewTab,"onUpdate:modelValue":t[11]||(t[11]=s=>o(r).openInNewTab=s)},{default:l(()=>[n(" 新标签页打开工具 ")]),_:1},8,["modelValue"])]),_:1}),o(u)._user.token?(p(),h(C,{key:3},[e(d,{level:4},{default:l(()=>[n(" 应用设置 ")]),_:1}),e(d,{level:5},{default:l(()=>[n(" JSON 编辑器 ")]),_:1}),e(g,null,{default:l(()=>[e(c,{modelValue:o(u).modules.jsonEditor.syncCloud,"onUpdate:modelValue":t[12]||(t[12]=s=>o(u).modules.jsonEditor.syncCloud=s)},{default:l(()=>[n(" 从云端获取 ")]),_:1},8,["modelValue"])]),_:1})],64)):S("",!0)],64)}}});const be=oe(we,[["__scopeId","data-v-64de78ce"]]);export{be as default};
