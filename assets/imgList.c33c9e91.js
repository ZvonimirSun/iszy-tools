var $=Object.defineProperty,T=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&_(e,o,t[o]);if(l)for(var o of l(t))B.call(t,o)&&_(e,o,t[o]);return e},d=(e,t)=>T(e,E(t));import{c as D,a$ as G,aP as u,ak as M,az as g,b0 as N,b1 as U,b2 as z,O as F,a as n,o as i,g as f,e as s,w as a,F as H,U as V,b as v,h as y}from"./vendor.06d41b47.js";/* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css                *//* empty css                */import{_ as A}from"./index.3ca3d006.js";const{Meta:O}=u,{PreviewGroup:q}=g,{mapState:J,mapActions:K}=D("imgHosting"),Q={name:"imgList",computed:c({},J(["imgList"])),components:{Empty:G,Card:u,Meta:O,Space:M,Image:g,PreviewGroup:q,CopyLink:N,Delete:U,Popconfirm:z,Tooltip:F},methods:d(c({},K(["removeImage"])),{async copyImgUrl({url:e}){try{await navigator.clipboard.writeText(e),this.$msg.success("\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{this.$msg.error("\u590D\u5236\u5931\u8D25")}},getPopupContainer(){return document.body}})},R={key:0,class:"imgList"},W=y("\u590D\u5236\u94FE\u63A5"),X=y("\u5220\u9664");function Y(e,t,o,Z,ee,p){const C=n("Image"),h=n("CopyLink"),m=n("Tooltip"),x=n("Delete"),k=n("Popconfirm"),L=n("Meta"),P=n("Card"),j=n("Space"),w=n("PreviewGroup"),I=n("Empty");return e.imgList.length?(i(),f("div",R,[s(w,null,{default:a(()=>[s(j,{size:8},{default:a(()=>[(i(!0),f(H,null,V(e.imgList,r=>(i(),v(P,{key:r.id},{cover:a(()=>[s(C,{src:r.url,alt:r.name,width:"20rem",height:"12.36rem"},null,8,["src","alt"])]),actions:a(()=>[s(m,null,{title:a(()=>[W]),default:a(()=>[s(h,{onClick:b=>p.copyImgUrl(r)},null,8,["onClick"])]),_:2},1024),s(m,null,{title:a(()=>[X]),default:a(()=>[s(k,{onConfirm:b=>e.removeImage(r),title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","ok-text":"\u662F","cancel-text":"\u5426",getPopupContainer:p.getPopupContainer},{default:a(()=>[s(x)]),_:2},1032,["onConfirm","getPopupContainer"])]),_:2},1024)]),default:a(()=>[s(L,{title:r.name},null,8,["title"])]),_:2},1024))),128))]),_:1})]),_:1})])):(i(),v(I,{key:1}))}var me=A(Q,[["render",Y],["__scopeId","data-v-1e80d2f0"]]);export{me as default};