var $=Object.defineProperty,T=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&m(e,a,t[a]);if(_)for(var a of _(t))B.call(t,a)&&m(e,a,t[a]);return e},f=(e,t)=>T(e,b(t));import{a5 as M,ae as P,ak as D,aj as F,a4 as I,bc as V,bd as H,be as O,c as k,f as o,y as n,J as C,L as R,T as U,r,o as S,H as w,I as y,K as s}from"./vendor.9bf0bfaf.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              */import{_ as j}from"./index.ab8ef166.js";const{Title:q}=U,{mapState:A,mapMutations:E}=M("user"),J={name:"SettingsPage",components:{Divider:P,Checkbox:D,Title:q,Space:F,Button:I,Popconfirm:V},computed:c({},A(["_user","settings"])),methods:f(c(c(c({},H(["clearOfflineCache"])),O(["uploadSettings","downloadSettings"])),E(["triggerSetting"])),{async uploadToCloud(){await this.uploadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},async downloadFromCloud(){await this.downloadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},login(){this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}})},logout(){this.$router.push("/logout")}})},K=s(" \u7528\u6237 "),L=s(" \u767B\u5F55 "),z=s(" \u767B\u51FA "),G=s(" \u6E05\u7A7A\u672C\u5730\u7F13\u5B58 "),Q=s(" \u4E91\u7AEF\u540C\u6B65 "),W=s(" \u540C\u6B65\u5230\u4E91\u7AEF "),X=s(" \u4ECE\u4E91\u7AEF\u540C\u6B65 "),Y=s(" \u81EA\u52A8\u540C\u6B65 "),Z=s(" \u8BBF\u95EE\u7EDF\u8BA1 "),x=s(" \u6700\u5E38\u8BBF\u95EE "),ee=s(" \u6700\u8FD1\u8BBF\u95EE "),te=s(" \u5176\u4ED6\u8BBE\u7F6E "),oe=s(" \u663E\u793A\u641C\u7D22 "),ne=s(" \u663E\u793A\u5206\u7C7B "),se=s(" \u65B0\u6807\u7B7E\u9875\u6253\u5F00\u5DE5\u5177 ");function ae(e,t,a,ie,re,u){const h=r("Title"),l=r("Button"),v=r("Popconfirm"),g=r("Space"),p=r("Divider"),i=r("Checkbox");return S(),k(C,null,[o(h,{level:3},{default:n(()=>[K]),_:1}),o(g,null,{default:n(()=>[w(o(l,{type:"primary",onClick:u.login},{default:n(()=>[L]),_:1},8,["onClick"]),[[y,!e._user.token]]),w(o(l,{type:"primary",onClick:u.logout},{default:n(()=>[z]),_:1},8,["onClick"]),[[y,e._user.token]]),o(v,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u8981\u6E05\u7A7A\u672C\u5730\u7F13\u5B58\uFF1F","ok-text":"\u6E05\u7A7A",onConfirm:e.clearOfflineCache},{default:n(()=>[o(l,{danger:""},{default:n(()=>[G]),_:1})]),_:1},8,["onConfirm"])]),_:1}),o(p),e._user.token?(S(),k(C,{key:0},[o(h,{level:3},{default:n(()=>[Q]),_:1}),o(g,null,{default:n(()=>[o(l,{type:"primary",onClick:u.uploadToCloud},{default:n(()=>[W]),_:1},8,["onClick"]),o(l,{type:"primary",onClick:u.downloadFromCloud},{default:n(()=>[X]),_:1},8,["onClick"]),o(i,{checked:e.settings.autoSync,onChange:t[0]||(t[0]=d=>e.triggerSetting("autoSync"))},{default:n(()=>[Y]),_:1},8,["checked"])]),_:1}),o(p)],64)):R("",!0),o(h,{level:3},{default:n(()=>[Z]),_:1}),o(g,null,{default:n(()=>[o(i,{checked:e.settings.showMost,onChange:t[1]||(t[1]=d=>e.triggerSetting("showMost"))},{default:n(()=>[x]),_:1},8,["checked"]),o(i,{checked:e.settings.showRecent,onChange:t[2]||(t[2]=d=>e.triggerSetting("showRecent"))},{default:n(()=>[ee]),_:1},8,["checked"])]),_:1}),o(p),o(h,{level:3},{default:n(()=>[te]),_:1}),o(g,null,{default:n(()=>[o(i,{checked:e.settings.showSearch,onChange:t[3]||(t[3]=d=>e.triggerSetting("showSearch"))},{default:n(()=>[oe]),_:1},8,["checked"]),o(i,{checked:e.settings.showType,onChange:t[4]||(t[4]=d=>e.triggerSetting("showType"))},{default:n(()=>[ne]),_:1},8,["checked"]),o(i,{checked:e.settings.openInNewTab,onChange:t[5]||(t[5]=d=>e.triggerSetting("openInNewTab"))},{default:n(()=>[se]),_:1},8,["checked"])]),_:1})],64)}var _e=j(J,[["render",ae]]);export{_e as default};
