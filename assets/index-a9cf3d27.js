import{F as O,h as N,u as B,de as M,G as R,k as D,o as m,l as V,a as e,w as o,b as t,n as l,c as g,H as h,s as C,A as p,E as F,_ as I}from"./index-bce8d3cc.js";import{E as j}from"./el-checkbox-ac1ceb77.js";import{E as P}from"./el-divider-6a6496ec.js";import{E as q}from"./el-space-0ac22b8f.js";import{E as A}from"./el-popover-876b6071.js";import"./el-popper-771ad1d7.js";import"./index-00ba3440.js";import{_ as G}from"./Title-f372ed13.js";import"./isEqual-a4cb1e56.js";import"./ResizeObserver.es-0f9f8adb.js";const H=O("main",{persist:!0,state:()=>({_cache:{},clearOfflineCacheTag:!1}),getters:{getData:c=>r=>{if(r)return(c._cache||{})[r]}},actions:{setData({key:c,val:r}={}){c&&(this._cache=this._cache||{},this._cache[c]=r)},clear(){this._cache={}},clearOfflineCache(){console.log("clearOfflineCache"),this.clearOfflineCacheTag=!0}}}),z=N({__name:"index",setup(c){const r=B(),w=M(),u=R(),s=D(()=>u.settings),k=()=>H().clearOfflineCache(),E=()=>u.uploadSettings(),S=()=>u.downloadSettings();async function v(){await E()?p.success("同步成功"):p.error("同步失败")}async function x(){await S()?p.success("同步成功"):p.error("同步失败")}function b(){r.push({path:"/login",query:{redirect:w.fullPath}})}function T(){r.push("/logout")}return(J,a)=>{const i=G,_=F,U=A,f=q,y=P,d=j;return m(),V(h,null,[e(i,{level:3},{default:o(()=>[t(" 用户 ")]),_:1}),e(f,null,{default:o(()=>[l(u)._user.token?(m(),g(_,{key:1,type:"primary",onClick:T},{default:o(()=>[t(" 登出 ")]),_:1})):(m(),g(_,{key:0,type:"primary",onClick:b},{default:o(()=>[t(" 登录 ")]),_:1})),e(U,{title:"您是否确定要清空本地缓存？","confirm-button-text":"清空",onConfirm:k},{reference:o(()=>[e(_,{type:"danger",plain:""},{default:o(()=>[t(" 清空本地缓存 ")]),_:1})]),_:1})]),_:1}),e(y),l(u)._user.token?(m(),V(h,{key:0},[e(i,{level:3},{default:o(()=>[t(" 云端同步 ")]),_:1}),e(f,null,{default:o(()=>[e(_,{type:"primary",onClick:v},{default:o(()=>[t(" 同步到云端 ")]),_:1}),e(_,{type:"primary",onClick:x},{default:o(()=>[t(" 从云端同步 ")]),_:1}),e(d,{modelValue:l(s).autoSync,"onUpdate:modelValue":a[0]||(a[0]=n=>l(s).autoSync=n)},{default:o(()=>[t(" 自动同步 ")]),_:1},8,["modelValue"])]),_:1}),e(y)],64)):C("",!0),e(i,{level:3},{default:o(()=>[t(" 全局设置 ")]),_:1}),e(i,{level:4},{default:o(()=>[t(" 访问统计 ")]),_:1}),e(f,null,{default:o(()=>[e(d,{modelValue:l(s).showMost,"onUpdate:modelValue":a[1]||(a[1]=n=>l(s).showMost=n)},{default:o(()=>[t(" 最常访问 ")]),_:1},8,["modelValue"]),e(d,{modelValue:l(s).showRecent,"onUpdate:modelValue":a[2]||(a[2]=n=>l(s).showRecent=n)},{default:o(()=>[t(" 最近访问 ")]),_:1},8,["modelValue"])]),_:1}),e(i,{level:4},{default:o(()=>[t(" 其他设置 ")]),_:1}),e(f,null,{default:o(()=>[e(d,{modelValue:l(s).showSearch,"onUpdate:modelValue":a[3]||(a[3]=n=>l(s).showSearch=n)},{default:o(()=>[t(" 显示搜索 ")]),_:1},8,["modelValue"]),e(d,{modelValue:l(s).showType,"onUpdate:modelValue":a[4]||(a[4]=n=>l(s).showType=n)},{default:o(()=>[t(" 显示分类 ")]),_:1},8,["modelValue"]),e(d,{modelValue:l(s).openInNewTab,"onUpdate:modelValue":a[5]||(a[5]=n=>l(s).openInNewTab=n)},{default:o(()=>[t(" 新标签页打开工具 ")]),_:1},8,["modelValue"])]),_:1}),l(u)._user.token?(m(),V(h,{key:1},[e(y),e(i,{level:3},{default:o(()=>[t(" 应用设置 ")]),_:1}),e(f,null,{default:o(()=>[e(d,{modelValue:l(u).modules.jsonEditor.syncCloud,"onUpdate:modelValue":a[6]||(a[6]=n=>l(u).modules.jsonEditor.syncCloud=n)},{default:o(()=>[t(" 从云端获取 ")]),_:1},8,["modelValue"])]),_:1})],64)):C("",!0)],64)}}});const te=I(z,[["__scopeId","data-v-2fc6b0da"]]);export{te as default};
