import{d as j,cU as R,u as V,cV as I,j as J,f as h,o as p,L as E,a as e,w as u,b as t,k as n,F as g,c as M,a1 as y,N as O,B as q,_ as L}from"./index.b28822d7.js";import{C as P}from"./index.52113cec.js";import{_ as U}from"./index.04dfe1c7.js";import{_ as z}from"./index.7f31b588.js";import{_ as G}from"./index.07e5e7e5.js";import"./Checkbox.2a3bab71.js";import"./useFlexGapSupport.c4292b34.js";const H=j({__name:"index",setup(K){const s=R(),C=V(),F=I(),f=J("$msg"),B=h(()=>s.state.user._user),a=h(()=>s.state.user.settings),A=()=>s.commit("clearOfflineCache"),v=()=>s.dispatch("uploadSettings"),w=()=>s.dispatch("downloadSettings"),l=m=>s.commit("user/triggerSetting",m),S=m=>s.commit("user/jsonEditor/triggerJsonEditorSetting",m);async function x(){await v()?f.success("\u540C\u6B65\u6210\u529F"):f.error("\u540C\u6B65\u5931\u8D25")}async function $(){await w()?f.success("\u540C\u6B65\u6210\u529F"):f.error("\u540C\u6B65\u5931\u8D25")}function b(){C.push({path:"/login",query:{redirect:F.fullPath}})}function D(){C.push("/register")}function N(){C.push("/logout")}return(m,o)=>{const r=O,d=q,T=G,_=z,k=U,c=P;return p(),E(g,null,[e(r,{level:3},{default:u(()=>[t(" \u7528\u6237 ")]),_:1}),e(_,null,{default:u(()=>[n(B).token?(p(),M(d,{key:1,type:"primary",onClick:N},{default:u(()=>[t(" \u767B\u51FA ")]),_:1})):(p(),E(g,{key:0},[e(d,{type:"primary",onClick:b},{default:u(()=>[t(" \u767B\u5F55 ")]),_:1}),e(d,{type:"primary",onClick:D},{default:u(()=>[t(" \u6CE8\u518C ")]),_:1})],64)),e(T,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u8981\u6E05\u7A7A\u672C\u5730\u7F13\u5B58\uFF1F","ok-text":"\u6E05\u7A7A",onConfirm:A},{default:u(()=>[e(d,{danger:""},{default:u(()=>[t(" \u6E05\u7A7A\u672C\u5730\u7F13\u5B58 ")]),_:1})]),_:1})]),_:1}),e(k),n(B).token?(p(),E(g,{key:0},[e(r,{level:3},{default:u(()=>[t(" \u4E91\u7AEF\u540C\u6B65 ")]),_:1}),e(_,null,{default:u(()=>[e(d,{type:"primary",onClick:x},{default:u(()=>[t(" \u540C\u6B65\u5230\u4E91\u7AEF ")]),_:1}),e(d,{type:"primary",onClick:$},{default:u(()=>[t(" \u4ECE\u4E91\u7AEF\u540C\u6B65 ")]),_:1}),e(c,{checked:n(a).autoSync,onChange:o[0]||(o[0]=i=>l("autoSync"))},{default:u(()=>[t(" \u81EA\u52A8\u540C\u6B65 ")]),_:1},8,["checked"])]),_:1}),e(k)],64)):y("",!0),e(r,{level:3},{default:u(()=>[t(" \u5168\u5C40\u8BBE\u7F6E ")]),_:1}),e(r,{level:4},{default:u(()=>[t(" \u8BBF\u95EE\u7EDF\u8BA1 ")]),_:1}),e(_,null,{default:u(()=>[e(c,{checked:n(a).showMost,onChange:o[1]||(o[1]=i=>l("showMost"))},{default:u(()=>[t(" \u6700\u5E38\u8BBF\u95EE ")]),_:1},8,["checked"]),e(c,{checked:n(a).showRecent,onChange:o[2]||(o[2]=i=>l("showRecent"))},{default:u(()=>[t(" \u6700\u8FD1\u8BBF\u95EE ")]),_:1},8,["checked"])]),_:1}),e(r,{level:4},{default:u(()=>[t(" \u5176\u4ED6\u8BBE\u7F6E ")]),_:1}),e(_,null,{default:u(()=>[e(c,{checked:n(a).showSearch,onChange:o[3]||(o[3]=i=>l("showSearch"))},{default:u(()=>[t(" \u663E\u793A\u641C\u7D22 ")]),_:1},8,["checked"]),e(c,{checked:n(a).showType,onChange:o[4]||(o[4]=i=>l("showType"))},{default:u(()=>[t(" \u663E\u793A\u5206\u7C7B ")]),_:1},8,["checked"]),e(c,{checked:n(a).openInNewTab,onChange:o[5]||(o[5]=i=>l("openInNewTab"))},{default:u(()=>[t(" \u65B0\u6807\u7B7E\u9875\u6253\u5F00\u5DE5\u5177 ")]),_:1},8,["checked"])]),_:1}),n(B).token?(p(),E(g,{key:1},[e(k),e(r,{level:3},{default:u(()=>[t(" \u5E94\u7528\u8BBE\u7F6E ")]),_:1}),e(_,null,{default:u(()=>[e(c,{checked:n(a).jsonEditor.syncCloud,onChange:o[6]||(o[6]=i=>S("syncCloud"))},{default:u(()=>[t(" \u4ECE\u4E91\u7AEF\u83B7\u53D6 ")]),_:1},8,["checked"])]),_:1})],64)):y("",!0)],64)}}});const te=L(H,[["__scopeId","data-v-b7ff3c59"]]);export{te as default};
