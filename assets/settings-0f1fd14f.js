import{F as H,h as L,u as Q,dh as W,K as X,k as Z,y as P,Y as b,o as p,l as h,a as e,w as l,b as a,n as o,m as V,t as x,c as S,G as C,s as U,A as c,E as ee,B as le,I as oe,J as te,_ as ae}from"./index-7ac1d585.js";import{E as se,a as ne}from"./el-radio-group-91af0500.js";/* empty css                 */import{E as de}from"./el-checkbox-337234e7.js";import{E as ue}from"./el-popover-fb5b81db.js";import"./el-popper-4afc5fc3.js";import{E as re}from"./el-divider-c1edf769.js";import{a as ie,E as me}from"./el-form-item-bdd1f35b.js";import{E as pe}from"./el-space-838ba511.js";import"./index-46f8c975.js";import{_ as fe}from"./Title-0c766b15.js";import"./isEqual-c0239d53.js";import"./hasIn-56a02e48.js";import"./castArray-c120884d.js";import"./ResizeObserver.es-0f9f8adb.js";const _e=H("main",{persist:!0,state:()=>({_cache:{},clearOfflineCacheTag:!1}),getters:{getData:m=>f=>{if(f)return(m._cache||{})[f]}},actions:{setData({key:m,val:f}={}){m&&(this._cache=this._cache||{},this._cache[m]=f)},clear(){this._cache={}},clearOfflineCache(){console.log("clearOfflineCache"),this.clearOfflineCacheTag=!0}}}),I=m=>(oe("data-v-61575c77"),m=m(),te(),m),ce={key:0,flex:"","flex-col":"","text-7":"","gap-4":"","items-start":""},we={flex:""},Ve=I(()=>V("div",{"w-32":""}," 昵称: ",-1)),ge={flex:""},ye=I(()=>V("div",{"w-32":""}," 邮箱: ",-1)),ve=L({__name:"settings",setup(m){const f=Q(),T=W(),u=X(),r=Z(()=>u.settings),g=P(!1),N=P(),s=b({nickName:"",email:"",passwd:"",rePasswd:"",oldPasswd:""}),F=b({rePasswd:[{validator:(y,t,d)=>{t&&t!==s.passwd?d(new Error("两次输入的密码不一致")):d()}}],oldPasswd:[{validator:(y,t,d)=>{!t&&(s.passwd||s.rePasswd)?d(new Error("请输入旧密码")):d()}}]}),O=()=>_e().clearOfflineCache(),R=()=>u.uploadSettings(),B=()=>u.downloadSettings();async function D(){await R()?c.success("同步成功"):c.error("同步失败")}async function M(){await B()?c.success("同步成功"):c.error("同步失败")}function j(){f.push({path:"/login",query:{redirect:T.fullPath}})}function G(){f.push("/logout")}function J(){s.nickName=u._user.profile.nickName??"",s.email=u._user.profile.email??"",s.passwd="",s.rePasswd="",s.oldPasswd="",g.value=!0}function q(){g.value=!1}async function A(y){y&&await y.validate(async t=>{if(t){const d={};if(s.nickName&&(d.nickName=s.nickName),s.email&&(d.email=s.email),s.passwd&&(d.passwd=s.passwd,d.oldPasswd=s.oldPasswd),Object.keys(d).length===0){c.warning("没有需要修改的信息");return}try{await u.updateUser(d)}catch(i){c.error(i.message)}g.value=!1}else return c.warning("请检查输入"),!1})}return(y,t)=>{const d=fe,i=ee,w=pe,v=le,k=ie,K=me,Y=re,$=ue,_=de,E=se,z=ne;return p(),h(C,null,[e(d,{level:3},{default:l(()=>[a(" 账户信息 ")]),_:1}),o(u)._user.token?(p(),h("div",ce,[V("div",we,[Ve,V("div",null,x(o(u)._user.profile.nickName),1)]),V("div",ge,[ye,V("div",null,x(o(u)._user.profile.email),1)]),e(w,null,{default:l(()=>[e(i,{type:"primary",onClick:G},{default:l(()=>[a(" 登出 ")]),_:1}),o(g)?(p(),h(C,{key:1},[e(i,{type:"primary",onClick:t[0]||(t[0]=n=>A(o(N)))},{default:l(()=>[a(" 保存 ")]),_:1}),e(i,{onClick:q},{default:l(()=>[a(" 取消 ")]),_:1})],64)):(p(),S(i,{key:0,onClick:J},{default:l(()=>[a(" 修改信息 ")]),_:1}))]),_:1}),o(g)?(p(),S(K,{key:0,ref_key:"ruleFormRef",ref:N,model:o(s),rules:o(F),"label-width":"8rem","label-position":"left"},{default:l(()=>[e(k,{label:"昵称",prop:"nickName"},{default:l(()=>[e(v,{modelValue:o(s).nickName,"onUpdate:modelValue":t[1]||(t[1]=n=>o(s).nickName=n)},null,8,["modelValue"])]),_:1}),e(k,{label:"邮箱",prop:"email"},{default:l(()=>[e(v,{modelValue:o(s).email,"onUpdate:modelValue":t[2]||(t[2]=n=>o(s).email=n)},null,8,["modelValue"])]),_:1}),e(k,{label:"旧密码",prop:"oldPasswd"},{default:l(()=>[e(v,{modelValue:o(s).oldPasswd,"onUpdate:modelValue":t[3]||(t[3]=n=>o(s).oldPasswd=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(k,{label:"新密码",prop:"passwd"},{default:l(()=>[e(v,{modelValue:o(s).passwd,"onUpdate:modelValue":t[4]||(t[4]=n=>o(s).passwd=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(k,{label:"确认密码",prop:"rePasswd"},{default:l(()=>[e(v,{modelValue:o(s).rePasswd,"onUpdate:modelValue":t[5]||(t[5]=n=>o(s).rePasswd=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])):U("",!0)])):(p(),S(i,{key:1,type:"primary",onClick:j},{default:l(()=>[a(" 登录 ")]),_:1})),e(Y),e(d,{level:3},{default:l(()=>[a(" 网站设置 ")]),_:1}),e($,{title:"您是否确定要清空本地缓存？","confirm-button-text":"清空",onConfirm:O},{reference:l(()=>[e(i,{type:"danger",plain:""},{default:l(()=>[a(" 清空本地缓存 ")]),_:1})]),_:1}),o(u)._user.token?(p(),h(C,{key:2},[e(d,{level:4},{default:l(()=>[a(" 设置云端同步 ")]),_:1}),e(w,null,{default:l(()=>[e(i,{onClick:D},{default:l(()=>[a(" 同步到云端 ")]),_:1}),e(i,{onClick:M},{default:l(()=>[a(" 从云端同步 ")]),_:1}),e(_,{modelValue:o(r).autoSync,"onUpdate:modelValue":t[6]||(t[6]=n=>o(r).autoSync=n)},{default:l(()=>[a(" 自动同步 ")]),_:1},8,["modelValue"])]),_:1})],64)):U("",!0),e(d,{level:4},{default:l(()=>[a(" 全局设置 ")]),_:1}),e(d,{level:5},{default:l(()=>[a(" 外观 ")]),_:1}),e(w,null,{default:l(()=>[e(z,{"model-value":o(r).theme.mode,onChange:o(u).setTheme},{default:l(()=>[e(E,{label:"auto"},{default:l(()=>[a(" 跟随系统 ")]),_:1}),e(E,{label:"light"},{default:l(()=>[a(" 浅色 ")]),_:1}),e(E,{label:"dark"},{default:l(()=>[a(" 深色 ")]),_:1})]),_:1},8,["model-value","onChange"])]),_:1}),e(d,{level:5},{default:l(()=>[a(" 访问统计 ")]),_:1}),e(w,null,{default:l(()=>[e(_,{modelValue:o(r).showMost,"onUpdate:modelValue":t[7]||(t[7]=n=>o(r).showMost=n)},{default:l(()=>[a(" 最常访问 ")]),_:1},8,["modelValue"]),e(_,{modelValue:o(r).showRecent,"onUpdate:modelValue":t[8]||(t[8]=n=>o(r).showRecent=n)},{default:l(()=>[a(" 最近访问 ")]),_:1},8,["modelValue"])]),_:1}),e(d,{level:5},{default:l(()=>[a(" 其他设置 ")]),_:1}),e(w,null,{default:l(()=>[e(_,{modelValue:o(r).showSearch,"onUpdate:modelValue":t[9]||(t[9]=n=>o(r).showSearch=n)},{default:l(()=>[a(" 显示搜索 ")]),_:1},8,["modelValue"]),e(_,{modelValue:o(r).showType,"onUpdate:modelValue":t[10]||(t[10]=n=>o(r).showType=n)},{default:l(()=>[a(" 显示分类 ")]),_:1},8,["modelValue"]),e(_,{modelValue:o(r).openInNewTab,"onUpdate:modelValue":t[11]||(t[11]=n=>o(r).openInNewTab=n)},{default:l(()=>[a(" 新标签页打开工具 ")]),_:1},8,["modelValue"])]),_:1}),o(u)._user.token?(p(),h(C,{key:3},[e(d,{level:4},{default:l(()=>[a(" 应用设置 ")]),_:1}),e(d,{level:5},{default:l(()=>[a(" JSON 编辑器 ")]),_:1}),e(w,null,{default:l(()=>[e(_,{modelValue:o(u).modules.jsonEditor.syncCloud,"onUpdate:modelValue":t[12]||(t[12]=n=>o(u).modules.jsonEditor.syncCloud=n)},{default:l(()=>[a(" 从云端获取 ")]),_:1},8,["modelValue"])]),_:1})],64)):U("",!0)],64)}}});const Be=ae(ve,[["__scopeId","data-v-61575c77"]]);export{Be as default};
