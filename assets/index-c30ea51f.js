import{j as M,B as T,x as $,l as R,r as U,o as t,c as l,y as n,ad as m,ae as o,b as c,a as s,X as z,g,F as h,e as b,d as x,t as w,U as C,n as j,af as D,bf as H,bg as L,bh as X,am as q,an as A,a3 as G}from"./vendor-7c5ae7bf.js";import{u as J,a as K}from"./common-cdf83cfa.js";import"./ant-design-vue-67d75677.js";const d=r=>(q("data-v-151915bb"),r=r(),A(),r),O={class:"search-wrapper"},P=d(()=>s("span",{class:"i-icon-park-outline-search"},null,-1)),Q={class:"typeName"},W={class:"toolName"},Y=["onClick"],Z=d(()=>s("span",{class:"i-icon-park-solid-star"},null,-1)),ee=[Z],se=["onClick"],te=d(()=>s("span",{class:"nonHover"},[s("span",{class:"i-icon-park-outline-star"})],-1)),ne=d(()=>s("span",{class:"hovered"},[s("span",{class:"i-icon-park-solid-star"})],-1)),ae=[te,ne],oe=M({__name:"index",setup(r){const i=T(""),_=J(),S=K(),F=$(()=>S.toolMenusFilter(i.value)),p=_.settings,k=_.isFav,v=_.updateFav;return R(()=>{_.fixFavorite()}),(le,f)=>{const N=D,u=H,y=L,I=X,V=U("router-link");return t(),l(h,null,[n(p).showSearch?(t(),m(y,{key:0,gutter:8},{default:o(()=>[c(u,null,{default:o(()=>[s("div",O,[P,c(N,{modelValue:n(i),"onUpdate:modelValue":f[0]||(f[0]=a=>z(i)?i.value=a:null),placeholder:"搜索工具"},null,8,["modelValue"])])]),_:1})]),_:1})):g("",!0),(t(!0),l(h,null,b(n(F),(a,B)=>(t(),m(y,{key:a.id,gutter:16,style:j({padding:"0 .8rem .4rem",marginTop:B===0&&n(p).showSearch?"3.3rem":"2.5rem"})},{default:o(()=>[c(u,{span:24,class:"typeNameCol"},{default:o(()=>[s("div",Q,[a.icon?(t(),l("span",{key:0,class:x(a.icon)},null,2)):g("",!0),s("div",null,w(a.type),1)])]),_:2},1024),(t(!0),l(h,null,b(a.children,e=>(t(),m(u,{key:e.id,xs:12,sm:8,md:6,lg:4,xl:3},{default:o(()=>[c(V,{target:n(p).openInNewTab||/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(e.link)?"_blank":"",to:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(e.link)?"/redirect?url="+e.link:e.link||""},{default:o(()=>[c(I,{placement:"top","show-after":200,content:e.name},{default:o(()=>[s("div",{class:x(["tool",{toolCollected:n(k)(e.name)}])},[s("span",W,w(e.name),1),n(k)(e.name)?(t(),l("span",{key:0,class:"fav collected",onClick:C(E=>n(v)({name:e.name,link:e.link||"",add:!1}),["prevent"])},ee,8,Y)):(t(),l("span",{key:1,class:"fav",onClick:C(E=>n(v)({name:e.name,link:e.link||"",add:!0}),["prevent"])},ae,8,se))],2)]),_:2},1032,["content"])]),_:2},1032,["target","to"])]),_:2},1024))),128))]),_:2},1032,["style"]))),128))],64)}}});const _e=G(oe,[["__scopeId","data-v-151915bb"]]);export{_e as default};
