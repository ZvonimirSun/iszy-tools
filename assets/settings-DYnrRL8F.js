import{j as x,au as T,J as N,k as O,m as n,r as D,aB as I,H as y,P as M,at as P,bl as G,Q as H,V as $,o as k,F as V,l as E,w as o,L as l,I as F,K as t,G as b,X as J,N as q,a0 as K}from"./index-DZyj1-Eq.js";import{E as L}from"./el-checkbox-n1rdo0wr.js";import{E as Q,a as X}from"./el-radio-group-KgG7VkuC.js";/* empty css                 */import{E as z}from"./el-divider-Ds7iMpCz.js";import{E as W}from"./el-space-BrdYBLiy.js";import{E as Y}from"./el-popover-CHAVdth7.js";import"./el-popper-Dbe9STkn.js";import{u as Z,T as ee}from"./Router-DzFaFs_4.js";import"./index-BDN6pmIY.js";import"./isUndefined-DCTLXrZ8.js";const te=x({inheritAttrs:!1,__name:"HaveAccess",props:{auth:{type:[Boolean,Object],default:!1},link:{default:""}},setup(u){const s=u,m=T(),v=Z(),f=N(),g=O(()=>s.auth?typeof s.auth=="boolean"?m.logged:m.checkAccess(s.auth):s.link?m.checkAccess(v.getAuth(s.link)):!0);function a(){s.link&&f.push(s.link)}return(_,S)=>n(g)?D(_.$slots,"default",I({key:0},_.$attrs,{goto:a})):y("",!0)}}),oe=M("main",{persist:!0,state:()=>({_cache:{},clearOfflineCacheTag:!1}),getters:{getData:u=>s=>{if(s)return(u._cache||{})[s]}},actions:{setData({key:u,val:s}={}){u&&(this._cache=this._cache||{},this._cache[u]=s)},clear(){this._cache={}},clearOfflineCache(){console.log("clearOfflineCache"),this.clearOfflineCacheTag=!0}}}),le={key:1,flex:"","items-center":"","gap-4":""},ne={flex:"","flex-wrap":"","items-start":"","gap-4":"","text-7":"",class:"settings-container"},se={class:"settings-wrapper"},ae={key:0,class:"settings-wrapper"},re=x({__name:"settings",setup(u){const s=N(),m=P(),v=G(),f=T(),g=H(),a=O(()=>g.general),_=()=>oe().clearOfflineCache();function S(){s.push({path:"/login",query:{redirect:m.fullPath}})}function h(){s.push("/register")}function A(){s.push("/logout")}return(ue,e)=>{const i=ee,d=q,B=$("router-link"),U=te,w=Y,c=W,R=z,C=Q,j=X,p=L;return k(),V(J,null,[n(f).logged?(k(),E(i,{key:0,level:3},{default:o(()=>[l(F(n(f).profile.nickName)+" 欢迎你~ ",1)]),_:1})):y("",!0),n(f).logged?(k(),V("div",le,[t(d,{type:"primary",onClick:A},{default:o(()=>e[6]||(e[6]=[l(" 登出 ")])),_:1}),t(B,{to:"/personalCenter"},{default:o(()=>[t(d,null,{default:o(()=>e[7]||(e[7]=[l(" 个人中心 ")])),_:1})]),_:1}),t(U,{link:"/userManager"},{default:o(({goto:r})=>[t(d,{onClick:r},{default:o(()=>e[8]||(e[8]=[l(" 用户权限中心 ")])),_:2},1032,["onClick"])]),_:1}),t(w,{title:"您是否确定要清空本地缓存？","confirm-button-text":"清空",onConfirm:_},{reference:o(()=>[t(d,{type:"danger",plain:""},{default:o(()=>e[9]||(e[9]=[l(" 清空本地缓存 ")])),_:1})]),_:1})])):(k(),E(c,{key:2,"mt-4":""},{default:o(()=>[t(d,{type:"primary",onClick:S},{default:o(()=>e[10]||(e[10]=[l(" 登录 ")])),_:1}),t(d,{onClick:h},{default:o(()=>e[11]||(e[11]=[l(" 注册 ")])),_:1}),t(w,{title:"您是否确定要清空本地缓存？","confirm-button-text":"清空",onConfirm:_},{reference:o(()=>[t(d,{type:"danger",plain:""},{default:o(()=>e[12]||(e[12]=[l(" 清空本地缓存 ")])),_:1})]),_:1})]),_:1})),t(R),b("div",ne,[b("div",se,[t(i,{level:4},{default:o(()=>e[13]||(e[13]=[l(" 全局设置 ")])),_:1}),t(i,{level:5},{default:o(()=>e[14]||(e[14]=[l(" 外观 ")])),_:1}),t(c,null,{default:o(()=>[t(j,{"model-value":n(a).theme.mode,onChange:n(v).setTheme},{default:o(()=>[t(C,{value:"auto",label:"跟随系统"}),t(C,{value:"light",label:"浅色"}),t(C,{value:"dark",label:"深色"})]),_:1},8,["model-value","onChange"])]),_:1}),t(i,{level:5},{default:o(()=>e[15]||(e[15]=[l(" 访问统计 ")])),_:1}),t(c,null,{default:o(()=>[t(p,{modelValue:n(a).showMost,"onUpdate:modelValue":e[0]||(e[0]=r=>n(a).showMost=r)},{default:o(()=>e[16]||(e[16]=[l(" 最常访问 ")])),_:1},8,["modelValue"]),t(p,{modelValue:n(a).showRecent,"onUpdate:modelValue":e[1]||(e[1]=r=>n(a).showRecent=r)},{default:o(()=>e[17]||(e[17]=[l(" 最近访问 ")])),_:1},8,["modelValue"])]),_:1}),t(i,{level:5},{default:o(()=>e[18]||(e[18]=[l(" 其他设置 ")])),_:1}),t(c,null,{default:o(()=>[t(p,{modelValue:n(a).showSearch,"onUpdate:modelValue":e[2]||(e[2]=r=>n(a).showSearch=r)},{default:o(()=>e[19]||(e[19]=[l(" 显示搜索 ")])),_:1},8,["modelValue"]),t(p,{modelValue:n(a).showType,"onUpdate:modelValue":e[3]||(e[3]=r=>n(a).showType=r)},{default:o(()=>e[20]||(e[20]=[l(" 显示分类 ")])),_:1},8,["modelValue"]),t(p,{modelValue:n(a).openInNewTab,"onUpdate:modelValue":e[4]||(e[4]=r=>n(a).openInNewTab=r)},{default:o(()=>e[21]||(e[21]=[l(" 新标签页打开工具 ")])),_:1},8,["modelValue"])]),_:1})]),n(f).logged?(k(),V("div",ae,[t(i,{level:4},{default:o(()=>e[22]||(e[22]=[l(" 应用设置 ")])),_:1}),t(i,{level:5},{default:o(()=>e[23]||(e[23]=[l(" JSON 编辑器 ")])),_:1}),t(c,null,{default:o(()=>[t(p,{modelValue:n(g).modules.jsonEditor.syncCloud,"onUpdate:modelValue":e[5]||(e[5]=r=>n(g).modules.jsonEditor.syncCloud=r)},{default:o(()=>e[24]||(e[24]=[l(" 从云端获取 ")])),_:1},8,["modelValue"])]),_:1})])):y("",!0)])],64)}}}),Ve=K(re,[["__scopeId","data-v-328055a3"]]);export{Ve as default};