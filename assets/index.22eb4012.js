var v=Object.defineProperty,T=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))j.call(t,a)&&f(e,a,t[a]);return e},k=(e,t)=>T(e,$(t));import{Z as B,al as N,at as M,as as D,ac as F,aF as P,aC as V,aG as A,r as d,o as h,c as C,f as o,y as n,A as y,E,T as I,x as S,D as s}from"./vendor.9bb798a0.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               */import{_ as O}from"./index.ee6ec559.js";const{Title:R}=I,{mapState:U,mapMutations:x}=B("user"),G={name:"\u8BBE\u7F6E",components:{Divider:N,Checkbox:M,Title:R,Space:D,Button:F,Popconfirm:P},computed:c({},U(["_user","settings"])),methods:k(c(c(c({},V(["clearOfflineCache"])),A(["uploadSettings","downloadSettings"])),x(["triggerSetting"])),{async uploadToCloud(){await this.uploadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},async downloadFromCloud(){await this.downloadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},login(){this.$router.push("/login")},logout(){this.$router.push("/logout")}})},H=s("\u7528\u6237"),Z=s("\u767B\u5F55"),q=s("\u767B\u51FA"),z=s("\u6E05\u7A7A\u672C\u5730\u7F13\u5B58"),J=s("\u4E91\u7AEF\u540C\u6B65"),K=s("\u540C\u6B65\u5230\u4E91\u7AEF"),L=s("\u4ECE\u4E91\u7AEF\u540C\u6B65"),Q=s("\u81EA\u52A8\u540C\u6B65"),W=s("\u8BBF\u95EE\u7EDF\u8BA1"),X=s("\u6700\u5E38\u8BBF\u95EE"),Y=s("\u6700\u8FD1\u8BBF\u95EE"),ee=s("\u5176\u4ED6\u8BBE\u7F6E"),te=s("\u663E\u793A\u641C\u7D22"),oe=s("\u663E\u793A\u5206\u7C7B"),ne=s("\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u5DE5\u5177");function se(e,t,a,ae,ie,u){const p=d("Title"),r=d("Button"),w=d("Popconfirm"),g=d("Space"),_=d("Divider"),i=d("Checkbox");return h(),C(y,null,[o(p,{level:3},{default:n(()=>[H]),_:1}),o(g,null,{default:n(()=>[e._user.token?(h(),S(r,{key:1,type:"primary",onClick:u.logout},{default:n(()=>[q]),_:1},8,["onClick"])):(h(),S(r,{key:0,type:"primary",onClick:u.login},{default:n(()=>[Z]),_:1},8,["onClick"])),o(w,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u8981\u6E05\u7A7A\u672C\u5730\u7F13\u5B58\uFF1F",okText:"\u6E05\u7A7A",onConfirm:e.clearOfflineCache},{default:n(()=>[o(r,{danger:""},{default:n(()=>[z]),_:1})]),_:1},8,["onConfirm"])]),_:1}),o(_),e._user.token?(h(),C(y,{key:0},[o(p,{level:3},{default:n(()=>[J]),_:1}),o(g,null,{default:n(()=>[o(r,{type:"primary",onClick:u.uploadToCloud},{default:n(()=>[K]),_:1},8,["onClick"]),o(r,{type:"primary",onClick:u.downloadFromCloud},{default:n(()=>[L]),_:1},8,["onClick"]),o(i,{checked:e.settings.autoSync,onChange:t[0]||(t[0]=l=>e.triggerSetting("autoSync"))},{default:n(()=>[Q]),_:1},8,["checked"])]),_:1}),o(_)],64)):E("",!0),o(p,{level:3},{default:n(()=>[W]),_:1}),o(g,null,{default:n(()=>[o(i,{checked:e.settings.showMost,onChange:t[1]||(t[1]=l=>e.triggerSetting("showMost"))},{default:n(()=>[X]),_:1},8,["checked"]),o(i,{checked:e.settings.showRecent,onChange:t[2]||(t[2]=l=>e.triggerSetting("showRecent"))},{default:n(()=>[Y]),_:1},8,["checked"])]),_:1}),o(_),o(p,{level:3},{default:n(()=>[ee]),_:1}),o(g,null,{default:n(()=>[o(i,{checked:e.settings.showSearch,onChange:t[3]||(t[3]=l=>e.triggerSetting("showSearch"))},{default:n(()=>[te]),_:1},8,["checked"]),o(i,{checked:e.settings.showType,onChange:t[4]||(t[4]=l=>e.triggerSetting("showType"))},{default:n(()=>[oe]),_:1},8,["checked"]),o(i,{checked:e.settings.openInNewTab,onChange:t[5]||(t[5]=l=>e.triggerSetting("openInNewTab"))},{default:n(()=>[ne]),_:1},8,["checked"])]),_:1})],64)}var he=O(G,[["render",se]]);export{he as default};