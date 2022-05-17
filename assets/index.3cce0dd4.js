var v=Object.defineProperty,$=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var h=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&h(e,a,t[a]);if(g)for(var a of g(t))N.call(t,a)&&h(e,a,t[a]);return e},m=(e,t)=>$(e,T(t));import{_ as M,j as B,cy as F,cz as I,o as f,m as k,a as o,w as n,F as C,n as V,a2 as O,s as y,ac as w,b as s,B as P}from"./index.c31bc572.js";import{C as R}from"./index.75f509d0.js";import{_ as U}from"./index.89dc8315.js";import{_ as j}from"./index.b48a6b4c.js";import{_ as q}from"./index.c6731c3b.js";import"./Checkbox.be77c372.js";import"./useFlexGapSupport.80b3a253.js";import"./useMergedState.03348d2b.js";const{mapState:z,mapMutations:A}=B("user"),D={name:"SettingsPage",computed:d({},z(["_user","settings"])),methods:m(d(d(d({},F(["clearOfflineCache"])),I(["uploadSettings","downloadSettings"])),A(["triggerSetting"])),{async uploadToCloud(){await this.uploadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},async downloadFromCloud(){await this.downloadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},login(){this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}})},logout(){this.$router.push("/logout")}})},E=s(" \u7528\u6237 "),H=s(" \u767B\u5F55 "),G=s(" \u767B\u51FA "),J=s(" \u6E05\u7A7A\u672C\u5730\u7F13\u5B58 "),K=s(" \u4E91\u7AEF\u540C\u6B65 "),L=s(" \u540C\u6B65\u5230\u4E91\u7AEF "),Q=s(" \u4ECE\u4E91\u7AEF\u540C\u6B65 "),W=s(" \u81EA\u52A8\u540C\u6B65 "),X=s(" \u8BBF\u95EE\u7EDF\u8BA1 "),Y=s(" \u6700\u5E38\u8BBF\u95EE "),Z=s(" \u6700\u8FD1\u8BBF\u95EE "),x=s(" \u5176\u4ED6\u8BBE\u7F6E "),ee=s(" \u663E\u793A\u641C\u7D22 "),te=s(" \u663E\u793A\u5206\u7C7B "),oe=s(" \u65B0\u6807\u7B7E\u9875\u6253\u5F00\u5DE5\u5177 ");function ne(e,t,a,se,ae,_){const u=O,r=P,S=q,c=j,p=U,i=R;return f(),k(C,null,[o(u,{level:3},{default:n(()=>[E]),_:1}),o(c,null,{default:n(()=>[y(o(r,{type:"primary",onClick:_.login},{default:n(()=>[H]),_:1},8,["onClick"]),[[w,!e._user.token]]),y(o(r,{type:"primary",onClick:_.logout},{default:n(()=>[G]),_:1},8,["onClick"]),[[w,e._user.token]]),o(S,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u8981\u6E05\u7A7A\u672C\u5730\u7F13\u5B58\uFF1F","ok-text":"\u6E05\u7A7A",onConfirm:e.clearOfflineCache},{default:n(()=>[o(r,{danger:""},{default:n(()=>[J]),_:1})]),_:1},8,["onConfirm"])]),_:1}),o(p),e._user.token?(f(),k(C,{key:0},[o(u,{level:3},{default:n(()=>[K]),_:1}),o(c,null,{default:n(()=>[o(r,{type:"primary",onClick:_.uploadToCloud},{default:n(()=>[L]),_:1},8,["onClick"]),o(r,{type:"primary",onClick:_.downloadFromCloud},{default:n(()=>[Q]),_:1},8,["onClick"]),o(i,{checked:e.settings.autoSync,onChange:t[0]||(t[0]=l=>e.triggerSetting("autoSync"))},{default:n(()=>[W]),_:1},8,["checked"])]),_:1}),o(p)],64)):V("",!0),o(u,{level:3},{default:n(()=>[X]),_:1}),o(c,null,{default:n(()=>[o(i,{checked:e.settings.showMost,onChange:t[1]||(t[1]=l=>e.triggerSetting("showMost"))},{default:n(()=>[Y]),_:1},8,["checked"]),o(i,{checked:e.settings.showRecent,onChange:t[2]||(t[2]=l=>e.triggerSetting("showRecent"))},{default:n(()=>[Z]),_:1},8,["checked"])]),_:1}),o(p),o(u,{level:3},{default:n(()=>[x]),_:1}),o(c,null,{default:n(()=>[o(i,{checked:e.settings.showSearch,onChange:t[3]||(t[3]=l=>e.triggerSetting("showSearch"))},{default:n(()=>[ee]),_:1},8,["checked"]),o(i,{checked:e.settings.showType,onChange:t[4]||(t[4]=l=>e.triggerSetting("showType"))},{default:n(()=>[te]),_:1},8,["checked"]),o(i,{checked:e.settings.openInNewTab,onChange:t[5]||(t[5]=l=>e.triggerSetting("openInNewTab"))},{default:n(()=>[oe]),_:1},8,["checked"])]),_:1})],64)}var he=M(D,[["render",ne],["__scopeId","data-v-42367dee"]]);export{he as default};