import{g as J,h as N,j as M,k as i,a8 as W,o as c,c as C,w as d,r as P,p as E,n as r,ax as q,q as A,v as U,x as G,ak as b,al as $,a3 as X,aJ as T,am as Y,y as V,G as z,aZ as ee,a_ as O,Q as te,R as se,aq as ne,l as y,a as x,m as u,z as ae,s as B,H as F,I as K,t as D,av as H,B as oe,J as le,K as re,_ as ce}from"./index-64dd3e12.js";import"./el-tooltip-4ed993c7.js";import{E as ie}from"./el-popper-39616f65.js";import{v}from"./v4-fcc3550a.js";const Q=Symbol("rowContextKey"),ue=["start","center","end","space-around","space-between","space-evenly"],pe=["top","middle","bottom"],de=J({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:ue,default:"start"},align:{type:String,values:pe,default:"top"}}),_e=N({name:"ElRow"}),fe=N({..._e,props:de,setup(_){const s=_,p=M("row"),n=i(()=>s.gutter);W(Q,{gutter:n});const g=i(()=>{const e={};return s.gutter&&(e.marginRight=e.marginLeft=`-${s.gutter/2}px`),e}),f=i(()=>[p.b(),p.is(`justify-${s.justify}`,s.justify!=="start"),p.is(`align-${s.align}`,s.align!=="top")]);return(e,S)=>(c(),C(A(e.tag),{class:E(r(f)),style:q(r(g))},{default:d(()=>[P(e.$slots,"default")]),_:3},8,["class","style"]))}});var me=U(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const he=G(me),ye=J({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:b([Number,Object]),default:()=>$({})},sm:{type:b([Number,Object]),default:()=>$({})},md:{type:b([Number,Object]),default:()=>$({})},lg:{type:b([Number,Object]),default:()=>$({})},xl:{type:b([Number,Object]),default:()=>$({})}}),ve=N({name:"ElCol"}),ge=N({...ve,props:ye,setup(_){const s=_,{gutter:p}=X(Q,{gutter:i(()=>0)}),n=M("col"),g=i(()=>{const e={};return p.value&&(e.paddingLeft=e.paddingRight=`${p.value/2}px`),e}),f=i(()=>{const e=[];return["span","offset","pull","push"].forEach(a=>{const t=s[a];T(t)&&(a==="span"?e.push(n.b(`${s[a]}`)):t>0&&e.push(n.b(`${a}-${s[a]}`)))}),["xs","sm","md","lg","xl"].forEach(a=>{T(s[a])?e.push(n.b(`${a}-${s[a]}`)):Y(s[a])&&Object.entries(s[a]).forEach(([t,o])=>{e.push(t!=="span"?n.b(`${a}-${t}-${o}`):n.b(`${a}-${o}`))})}),p.value&&e.push(n.is("guttered")),[n.b(),e]});return(e,S)=>(c(),C(A(e.tag),{class:E(r(f)),style:q(r(g))},{default:d(()=>[P(e.$slots,"default")]),_:3},8,["class","style"]))}});var ke=U(ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const we=G(ke);const R=_=>(le("data-v-66633467"),_=_(),re(),_),be={class:"search-wrapper"},$e=R(()=>u("span",{class:"i-icon-park-outline-search"},null,-1)),xe={class:"typeName"},Ce={class:"toolName"},Ne=["onClick"],Se=R(()=>u("span",{class:"i-icon-park-solid-star"},null,-1)),je=[Se],Ee=["onClick"],Re=R(()=>u("span",{class:"nonHover"},[u("span",{class:"i-icon-park-outline-star"})],-1)),Ie=R(()=>u("span",{class:"hovered"},[u("span",{class:"i-icon-park-solid-star"})],-1)),Oe=[Re,Ie],Fe=N({__name:"index",setup(_){const s=V(""),p=V(6),n=z(),g=i(()=>ee([...O||[]].map(t=>t.children)));for(const t of O)if(t.id=t.id||v(),t.children)for(const o of t.children)o.id=o.id||v();const f=i(()=>n.settings),e=i(()=>n.isFav),S=i(()=>{let t;return f.value.showType?t=[...O||[]]:t=[{id:v(),type:"工具",icon:"i-icon-park-solid-all-application",children:g.value}],f.value.showRecent&&n.recent().length>0&&t.unshift({id:v(),type:"最近访问",icon:"i-icon-park-outline-history",children:n.recent(p.value)}),n.settings.showMost&&n.most().length>0&&t.unshift({id:v(),type:"最常访问",icon:"i-icon-park-solid-concern",children:n.most(p.value)}),n.favorite.length>0&&t.unshift({id:v(),type:"收藏",icon:"i-icon-park-solid-folder-focus",children:n.favorite}),t.filter(o=>o.children?.length)}),L=i(()=>{const t=S.value;return s.value?t.map(o=>{const k=te(o);return k.children=(k.children||[]).filter(m=>{const j=m.tags||[],w=s.value.toLowerCase();return m.name.toLowerCase().includes(w)||m.link.toLowerCase().includes(w)||j.some(I=>I.includes(w))}),k}).filter(o=>o.children?.length):t}),a=n.updateFav;return se(()=>{n.fixFavorite()}),(t,o)=>{const k=oe,m=we,j=he,w=ie,I=ne("router-link");return c(),y(F,null,[r(f).showSearch?(c(),C(j,{key:0,gutter:8},{default:d(()=>[x(m,null,{default:d(()=>[u("div",be,[$e,x(k,{modelValue:r(s),"onUpdate:modelValue":o[0]||(o[0]=h=>ae(s)?s.value=h:null),placeholder:"搜索工具"},null,8,["modelValue"])])]),_:1})]),_:1})):B("",!0),(c(!0),y(F,null,K(r(L),h=>(c(),C(j,{key:h.id,gutter:16,style:{padding:"0 .8rem .4rem"}},{default:d(()=>[x(m,{span:24,class:"typeNameCol"},{default:d(()=>[u("div",xe,[h.icon?(c(),y("span",{key:0,class:E(h.icon)},null,2)):B("",!0),u("div",null,D(h.type),1)])]),_:2},1024),(c(!0),y(F,null,K(h.children,l=>(c(),C(m,{key:l.id,xs:12,sm:8,md:6,lg:4,xl:3},{default:d(()=>[x(I,{target:r(f).openInNewTab||/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(l.link)?"_blank":"",to:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(l.link)?"/redirect?url="+l.link:l.link||""},{default:d(()=>[x(w,{placement:"top","show-after":200,content:l.name},{default:d(()=>[u("div",{class:E(["tool",{toolCollected:r(e)(l.name)}])},[u("span",Ce,D(l.name),1),r(e)(l.name)?(c(),y("span",{key:0,class:"fav collected",onClick:H(Z=>r(a)({name:l.name,link:l.link||"",add:!1}),["prevent"])},je,8,Ne)):(c(),y("span",{key:1,class:"fav",onClick:H(Z=>r(a)({name:l.name,link:l.link||"",add:!0}),["prevent"])},Oe,8,Ee))],2)]),_:2},1032,["content"])]),_:2},1032,["target","to"])]),_:2},1024))),128))]),_:2},1024))),128))],64)}}});const Ke=ce(Fe,[["__scopeId","data-v-66633467"]]);export{Ke as default};
