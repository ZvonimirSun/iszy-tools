import{d as $,r as E,T as U,f as v,ck as x,H as A,ch as H,o as i,L as u,k as l,c as w,w as c,a as k,M as n,b2 as R,cl as q,l as z,a1 as b,F as C,U as D,a3 as T,a2 as F,b as W,bx as V,b0 as j,a0 as G,bq as J,V as K,W as O,_ as P}from"./index.d08f4dd8.js";/* empty css               */import{v as p}from"./v4.0e237c76.js";import{a as Q,_ as X}from"./index.a0bab7cf.js";import"./Col.52aa12d4.js";import"./responsiveObserve.810e48d4.js";import"./useFlexGapSupport.7ca861a1.js";const y=f=>(K("data-v-dee3f43a"),f=f(),O(),f),Y={class:"search"},Z=y(()=>n("span",{class:"i-icon-park-outline-search"},null,-1)),ee={class:"typeName"},se={class:"toolName"},ne=["onClick"],te=y(()=>n("span",{class:"i-icon-park-solid-star"},null,-1)),ae=[te],oe=["onClick"],ie=y(()=>n("span",{class:"nonHover"},[n("span",{class:"i-icon-park-outline-star"})],-1)),le=y(()=>n("span",{class:"hovered"},[n("span",{class:"i-icon-park-solid-star"})],-1)),ce=[ie,le],re=$({__name:"index",setup(f){const _=E(""),S=E(6),t=U(),I=v(()=>j([...x||[]].map(e=>e.children)));for(const e of x)if(e.id=e.id||p(),e.children)for(const a of e.children)a.id=a.id||p();const m=v(()=>t.settings),N=v(()=>t.isFav),L=v(()=>{let e;return m.value.showType?e=[...x||[]]:e=[{id:p(),type:"\u5DE5\u5177",icon:"i-icon-park-solid-all-application",children:I.value}],m.value.showRecent&&t.recent().length>0&&e.unshift({id:p(),type:"\u6700\u8FD1\u8BBF\u95EE",icon:"i-icon-park-outline-history",children:t.recent(S.value)}),t.settings.showMost&&t.most().length>0&&e.unshift({id:p(),type:"\u6700\u5E38\u8BBF\u95EE",icon:"i-icon-park-solid-concern",children:t.most(S.value)}),t.favorite.length>0&&e.unshift({id:p(),type:"\u6536\u85CF",icon:"i-icon-park-solid-folder-focus",children:t.favorite}),_.value&&(e=e.map(a=>{const r=G(a);return r.children=(r.children||[]).filter(d=>{const g=d.tags||[],h=_.value.toLowerCase();return d.name.toLowerCase().includes(h)||d.link.toLowerCase().includes(h)||g.some(o=>o.includes(h))}),r})),e.filter(a=>Array.isArray(a.children)&&a.children.length>0)}),B=t.updateFav;return A(()=>{t.fixFavorite()}),(e,a)=>{const r=Q,d=X,g=J,h=H("router-link");return i(),u(C,null,[l(m).showSearch?(i(),w(d,{key:0,gutter:{xs:8,sm:16,md:24},class:"noName"},{default:c(()=>[k(r,{span:24},{default:c(()=>[n("div",Y,[Z,R(n("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>z(_)?_.value=o:null),type:"search",placeholder:"\u641C\u7D22\u5DE5\u5177"},null,512),[[q,l(_)]])])]),_:1})]),_:1})):b("",!0),(i(!0),u(C,null,D(l(L),o=>(i(),w(d,{key:o.id,gutter:{xs:8,sm:16}},{default:c(()=>[k(r,{span:24,class:"typeNameCol"},{default:c(()=>[n("div",ee,[o.icon?(i(),u("span",{key:0,class:T(o.icon)},null,2)):b("",!0),n("div",null,F(o.type),1)])]),_:2},1024),(i(!0),u(C,null,D(o.children,s=>(i(),w(r,{key:s.id,xs:12,sm:12,md:8,lg:6,xl:4,xxl:3},{default:c(()=>[k(h,{target:l(m).openInNewTab||/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(s.link)?"_blank":"",to:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(s.link)?"/redirect?url="+s.link:s.link||""},{default:c(()=>[k(g,null,{title:c(()=>[W(F(s.name),1)]),default:c(()=>[n("div",{class:T(["tool",{toolCollected:l(N)(s.name)}])},[n("span",se,F(s.name),1),l(N)(s.name)?(i(),u("span",{key:0,class:"fav collected",onClick:V(M=>l(B)({name:s.name,link:s.link||"",add:!1}),["prevent"])},ae,8,ne)):(i(),u("span",{key:1,class:"fav",onClick:V(M=>l(B)({name:s.name,link:s.link||"",add:!0}),["prevent"])},ce,8,oe))],2)]),_:2},1024)]),_:2},1032,["target","to"])]),_:2},1024))),128))]),_:2},1024))),128))],64)}}});const ve=P(re,[["__scopeId","data-v-dee3f43a"]]);export{ve as default};
