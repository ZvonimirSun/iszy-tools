var v=Object.defineProperty,T=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))B.call(t,a)&&f(e,a,t[a]);return e},k=(e,t)=>T(e,$(t));import{a5 as N,ae as M,ak as D,aj as F,a4 as P,ba as V,bb as I,bc as O,c as C,f as o,y as n,J as y,L as R,T as U,r,o as h,h as S,K as s}from"./vendor.a14e91db.js";/* empty css               *//* empty css               *//* empty css                *//* empty css               */import{_ as j}from"./index.907b2bb2.js";const{Title:A}=U,{mapState:E,mapMutations:H}=N("user"),J={name:"\u8BBE\u7F6E",components:{Divider:M,Checkbox:D,Title:A,Space:F,Button:P,Popconfirm:V},computed:c({},E(["_user","settings"])),methods:k(c(c(c({},I(["clearOfflineCache"])),O(["uploadSettings","downloadSettings"])),H(["triggerSetting"])),{async uploadToCloud(){await this.uploadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},async downloadFromCloud(){await this.downloadSettings()?this.$msg.success("\u540C\u6B65\u6210\u529F"):this.$msg.error("\u540C\u6B65\u5931\u8D25")},login(){this.$router.push("/login")},logout(){this.$router.push("/logout")}})},K=s("\u7528\u6237"),L=s("\u767B\u5F55"),q=s("\u767B\u51FA"),z=s("\u6E05\u7A7A\u672C\u5730\u7F13\u5B58"),G=s("\u4E91\u7AEF\u540C\u6B65"),Q=s("\u540C\u6B65\u5230\u4E91\u7AEF"),W=s("\u4ECE\u4E91\u7AEF\u540C\u6B65"),X=s("\u81EA\u52A8\u540C\u6B65"),Y=s("\u8BBF\u95EE\u7EDF\u8BA1"),Z=s("\u6700\u5E38\u8BBF\u95EE"),x=s("\u6700\u8FD1\u8BBF\u95EE"),ee=s("\u5176\u4ED6\u8BBE\u7F6E"),te=s("\u663E\u793A\u641C\u7D22"),oe=s("\u663E\u793A\u5206\u7C7B"),ne=s("\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u5DE5\u5177");function se(e,t,a,ae,ie,u){const p=r("Title"),l=r("Button"),w=r("Popconfirm"),g=r("Space"),_=r("Divider"),i=r("Checkbox");return h(),C(y,null,[o(p,{level:3},{default:n(()=>[K]),_:1}),o(g,null,{default:n(()=>[e._user.token?(h(),S(l,{key:1,type:"primary",onClick:u.logout},{default:n(()=>[q]),_:1},8,["onClick"])):(h(),S(l,{key:0,type:"primary",onClick:u.login},{default:n(()=>[L]),_:1},8,["onClick"])),o(w,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u8981\u6E05\u7A7A\u672C\u5730\u7F13\u5B58\uFF1F",okText:"\u6E05\u7A7A",onConfirm:e.clearOfflineCache},{default:n(()=>[o(l,{danger:""},{default:n(()=>[z]),_:1})]),_:1},8,["onConfirm"])]),_:1}),o(_),e._user.token?(h(),C(y,{key:0},[o(p,{level:3},{default:n(()=>[G]),_:1}),o(g,null,{default:n(()=>[o(l,{type:"primary",onClick:u.uploadToCloud},{default:n(()=>[Q]),_:1},8,["onClick"]),o(l,{type:"primary",onClick:u.downloadFromCloud},{default:n(()=>[W]),_:1},8,["onClick"]),o(i,{checked:e.settings.autoSync,onChange:t[0]||(t[0]=d=>e.triggerSetting("autoSync"))},{default:n(()=>[X]),_:1},8,["checked"])]),_:1}),o(_)],64)):R("",!0),o(p,{level:3},{default:n(()=>[Y]),_:1}),o(g,null,{default:n(()=>[o(i,{checked:e.settings.showMost,onChange:t[1]||(t[1]=d=>e.triggerSetting("showMost"))},{default:n(()=>[Z]),_:1},8,["checked"]),o(i,{checked:e.settings.showRecent,onChange:t[2]||(t[2]=d=>e.triggerSetting("showRecent"))},{default:n(()=>[x]),_:1},8,["checked"])]),_:1}),o(_),o(p,{level:3},{default:n(()=>[ee]),_:1}),o(g,null,{default:n(()=>[o(i,{checked:e.settings.showSearch,onChange:t[3]||(t[3]=d=>e.triggerSetting("showSearch"))},{default:n(()=>[te]),_:1},8,["checked"]),o(i,{checked:e.settings.showType,onChange:t[4]||(t[4]=d=>e.triggerSetting("showType"))},{default:n(()=>[oe]),_:1},8,["checked"]),o(i,{checked:e.settings.openInNewTab,onChange:t[5]||(t[5]=d=>e.triggerSetting("openInNewTab"))},{default:n(()=>[ne]),_:1},8,["checked"])]),_:1})],64)}var he=j(J,[["render",se]]);export{he as default};
