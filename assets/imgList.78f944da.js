import{d as F,e as H,c2 as B,b1 as kt,h as u,a as t,bj as Pt,bz as At,P as b,bA as ut,c3 as Bt,x as Et,a8 as R,f as It,_ as Lt,Q as Dt,o as D,J as dt,w as f,c as pt,F as wt,R as Gt,b as _t,K as w,bo as Kt,S as jt,T as Mt,bx as Nt}from"./index.61200789.js";/* empty css               */import{_ as zt,a as Ot}from"./index.582510d7.js";import{_ as Rt}from"./index.329ebb3e.js";import{T as vt}from"./index.eb515cec.js";/* empty css               */import{_ as Vt}from"./index.84ec73b1.js";import"./index.f748a99b.js";import{_ as E,a as m}from"./index.c2a50e9b.js";import"./css.b1edd3c8.js";import"./EyeOutlined.c4702179.js";import"./useFlexGapSupport.f58d4104.js";import"./index.19805e75.js";import"./Menu.01edf755.js";import"./shallowequal.7c855da4.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Overflow.48f9985f.js";import"./collapseMotion.45da9e8a.js";import"./useState.90de7f04.js";import"./useRefs.da4e582a.js";import"./hasIn.297367f4.js";import"./isMobile.47354675.js";import"./Col.8b6acf8e.js";import"./responsiveObserve.1611b292.js";var Ft=vt.TabPane,Ht=function(){return{prefixCls:String,title:b.any,extra:b.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:b.any,tabList:{type:Array},tabBarExtraContent:b.any,activeTabKey:String,defaultActiveTabKey:String,cover:b.any,onTabChange:{type:Function}}},Ut=F({compatConfig:{MODE:3},name:"ACard",props:Ht(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,h){var a=h.slots,g=H("card",e),d=g.prefixCls,y=g.direction,i=g.size,x=function(s){var l=s.map(function(o,C){return ut(o)&&!Bt(o)||!ut(o)?t("li",{style:{width:"".concat(100/s.length,"%")},key:"action-".concat(C)},[t("span",null,[o])]):null});return l},S=function(s){var l;(l=e.onTabChange)===null||l===void 0||l.call(e,s)},T=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l;return s.forEach(function(o){o&&Et(o.type)&&o.type.__ANT_CARD_GRID&&(l=!0)}),l};return function(){var p,s,l,o,C,K,_,k,U=e.headStyle,ft=U===void 0?{}:U,W=e.bodyStyle,j=W===void 0?{}:W,J=e.loading,Q=e.bordered,mt=Q===void 0?!0:Q,q=e.type,P=e.tabList,gt=e.hoverable,X=e.activeTabKey,bt=e.defaultActiveTabKey,Y=e.tabBarExtraContent,Z=Y===void 0?B((p=a.tabBarExtraContent)===null||p===void 0?void 0:p.call(a)):Y,tt=e.title,M=tt===void 0?B((s=a.title)===null||s===void 0?void 0:s.call(a)):tt,et=e.extra,N=et===void 0?B((l=a.extra)===null||l===void 0?void 0:l.call(a)):et,at=e.actions,z=at===void 0?B((o=a.actions)===null||o===void 0?void 0:o.call(a)):at,nt=e.cover,ot=nt===void 0?B((C=a.cover)===null||C===void 0?void 0:C.call(a)):nt,I=kt((K=a.default)===null||K===void 0?void 0:K.call(a)),r=d.value,yt=(_={},u(_,"".concat(r),!0),u(_,"".concat(r,"-loading"),J),u(_,"".concat(r,"-bordered"),mt),u(_,"".concat(r,"-hoverable"),!!gt),u(_,"".concat(r,"-contain-grid"),T(I)),u(_,"".concat(r,"-contain-tabs"),P&&P.length),u(_,"".concat(r,"-").concat(i.value),i.value),u(_,"".concat(r,"-type-").concat(q),!!q),u(_,"".concat(r,"-rtl"),y.value==="rtl"),_),Ct=j.padding===0||j.padding==="0px"?{padding:"24px"}:void 0,v=t("div",{class:"".concat(r,"-loading-block")},null),ht=t("div",{class:"".concat(r,"-loading-content"),style:Ct},[t(E,{gutter:8},{default:function(){return[t(m,{span:22},{default:function(){return[v]}})]}}),t(E,{gutter:8},{default:function(){return[t(m,{span:8},{default:function(){return[v]}}),t(m,{span:15},{default:function(){return[v]}})]}}),t(E,{gutter:8},{default:function(){return[t(m,{span:6},{default:function(){return[v]}}),t(m,{span:18},{default:function(){return[v]}})]}}),t(E,{gutter:8},{default:function(){return[t(m,{span:13},{default:function(){return[v]}}),t(m,{span:9},{default:function(){return[v]}})]}}),t(E,{gutter:8},{default:function(){return[t(m,{span:4},{default:function(){return[v]}}),t(m,{span:3},{default:function(){return[v]}}),t(m,{span:16},{default:function(){return[v]}})]}})]),rt=X!==void 0,xt=(k={size:"large"},u(k,rt?"activeKey":"defaultActiveKey",rt?X:bt),u(k,"onChange",S),u(k,"class","".concat(r,"-head-tabs")),k),it,lt=P&&P.length?t(vt,xt,{default:function(){return[P.map(function(c){var ct=c.tab,L=c.slots,st=L==null?void 0:L.tab;Pt(!L,"Card","tabList slots is deprecated, Please use `customTab` instead.");var O=ct!==void 0?ct:a[st]?a[st](c):null;return O=At(a,"customTab",c,function(){return[O]}),t(Ft,{tab:O,key:c.key,disabled:c.disabled},null)})]},rightExtra:Z?function(){return Z}:null}):null;(M||N||lt)&&(it=t("div",{class:"".concat(r,"-head"),style:ft},[t("div",{class:"".concat(r,"-head-wrapper")},[M&&t("div",{class:"".concat(r,"-head-title")},[M]),N&&t("div",{class:"".concat(r,"-extra")},[N])]),lt]));var St=ot?t("div",{class:"".concat(r,"-cover")},[ot]):null,$t=t("div",{class:"".concat(r,"-body"),style:j},[J?ht:I]),Tt=z&&z.length?t("ul",{class:"".concat(r,"-actions")},[x(z)]):null;return t("div",{class:yt,ref:"cardContainerRef"},[it,St,I&&I.length?$t:null,Tt])}}});const $=Ut;var Wt=function(){return{prefixCls:String,title:b.any,description:b.any,avatar:b.any}};const G=F({compatConfig:{MODE:3},name:"ACardMeta",props:Wt(),slots:["title","description","avatar"],setup:function(e,h){var a=h.slots,g=H("card",e),d=g.prefixCls;return function(){var y=u({},"".concat(d.value,"-meta"),!0),i=R(a,e,"avatar"),x=R(a,e,"title"),S=R(a,e,"description"),T=i?t("div",{class:"".concat(d.value,"-meta-avatar")},[i]):null,p=x?t("div",{class:"".concat(d.value,"-meta-title")},[x]):null,s=S?t("div",{class:"".concat(d.value,"-meta-description")},[S]):null,l=p||s?t("div",{class:"".concat(d.value,"-meta-detail")},[p,s]):null;return t("div",{class:y},[T,l])}}});var Jt=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}};const V=F({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:Jt(),setup:function(e,h){var a=h.slots,g=H("card",e),d=g.prefixCls,y=It(function(){var i;return i={},u(i,"".concat(d.value,"-grid"),!0),u(i,"".concat(d.value,"-grid-hoverable"),e.hoverable),i});return function(){var i;return t("div",{class:y.value},[(i=a.default)===null||i===void 0?void 0:i.call(a)])}}});$.Meta=G;$.Grid=V;$.install=function(n){return n.component($.name,$),n.component(G.name,G),n.component(V.name,V),n};const{mapState:Qt,mapActions:qt,mapGetters:Xt}=Dt("imgHosting"),Yt={name:"ImgHostingList",computed:{...Qt(["imgList"]),...Xt(["commonConfig"])},methods:{...qt(["removeImage"]),async copyImgUrl({url:n}){try{this.commonConfig.customCopyContent?await navigator.clipboard.writeText(this.commonConfig.customCopyContent.replace(/\$url/g,n)):await navigator.clipboard.writeText(n),this.$msg.success("\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{this.$msg.error("\u590D\u5236\u5931\u8D25")}},getPopupContainer(){return document.body}}},Zt=n=>(jt("data-v-318c4bd4"),n=n(),Mt(),n),te={key:0,class:"imgList"},ee={class:"py-3 flex"},ae=["onClick"],ne=Zt(()=>w("span",{class:"py-3 flex"},[w("span",{class:"i-icon-park-outline-delete"})],-1));function oe(n,e,h,a,g,d){const y=Ot,i=Kt,x=Vt,S=G,T=$,p=Rt,s=zt,l=Nt;return n.imgList.length?(D(),dt("div",te,[t(s,null,{default:f(()=>[t(p,{size:8},{default:f(()=>[(D(!0),dt(wt,null,Gt(n.imgList,o=>(D(),pt(T,{key:o.id},{cover:f(()=>[t(y,{src:o.url,alt:o.name,width:"20rem",height:"12.36rem"},null,8,["src","alt"])]),actions:f(()=>[t(i,null,{title:f(()=>[_t(" \u590D\u5236\u94FE\u63A5 ")]),default:f(()=>[w("span",ee,[w("span",{class:"i-icon-park-outline-copy-link",onClick:C=>d.copyImgUrl(o)},null,8,ae)])]),_:2},1024),t(i,null,{title:f(()=>[_t(" \u5220\u9664 ")]),default:f(()=>[t(x,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","ok-text":"\u662F","cancel-text":"\u5426","get-popup-container":d.getPopupContainer,onConfirm:C=>n.removeImage(o)},{default:f(()=>[ne]),_:2},1032,["get-popup-container","onConfirm"])]),_:2},1024)]),default:f(()=>[t(S,{title:o.name},null,8,["title"])]),_:2},1024))),128))]),_:1})]),_:1})])):(D(),pt(l,{key:1}))}const Ee=Lt(Yt,[["render",oe],["__scopeId","data-v-318c4bd4"]]);export{Ee as default};
