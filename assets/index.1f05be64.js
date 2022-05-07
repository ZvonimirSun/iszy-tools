import{e as q,f as G,b as n,P as p,I as de,L as D,W as ie,ay as se,a2 as W,h as fe,i as I,bR as me,bS as ge,ar as ye,J as he,a8 as te,g as L,ae as _e,Q as N,N as ae,a7 as ne}from"./index.db910b6a.js";import{S as Se}from"./index.b280691e.js";import{u as be,e as xe,P as Ce}from"./index.402958bc.js";import{C as Ie,R as pe}from"./Col.617a8404.js";import{r as re}from"./responsiveObserve.d6ab1be2.js";var Pe=function(){return{avatar:p.any,description:p.any,prefixCls:String,title:p.any}},Le=q({name:"AListItemMeta",props:Pe(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,h){var t=h.slots,c=G("list",e),f=c.prefixCls;return function(){var P,_,r,M,O,v,m="".concat(f.value,"-item-meta"),i=(P=e.title)!==null&&P!==void 0?P:(_=t.title)===null||_===void 0?void 0:_.call(t),u=(r=e.description)!==null&&r!==void 0?r:(M=t.description)===null||M===void 0?void 0:M.call(t),d=(O=e.avatar)!==null&&O!==void 0?O:(v=t.avatar)===null||v===void 0?void 0:v.call(t),S=n("div",{class:"".concat(f.value,"-item-meta-content")},[i&&n("h4",{class:"".concat(f.value,"-item-meta-title")},[i]),u&&n("div",{class:"".concat(f.value,"-item-meta-description")},[u])]);return n("div",{class:m},[d&&n("div",{class:"".concat(f.value,"-item-meta-avatar")},[d]),(i||u)&&S])}}}),le=Symbol("ListContextKey"),je=globalThis&&globalThis.__rest||function(o,e){var h={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(h[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,t=Object.getOwnPropertySymbols(o);c<t.length;c++)e.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(o,t[c])&&(h[t[c]]=o[t[c]]);return h},Me=function(){return{prefixCls:String,extra:p.any,actions:p.array,grid:Object,colStyle:{type:Object,default:void 0}}},Oe=q({name:"AListItem",inheritAttrs:!1,Meta:Le,props:Me(),slots:["actions","extra"],setup:function(e,h){var t=h.slots,c=h.attrs,f=de(le,{grid:D(),itemLayout:D()}),P=f.itemLayout,_=f.grid,r=G("list",e),M=r.prefixCls,O=function(){var i,u=((i=t.default)===null||i===void 0?void 0:i.call(t))||[],d;return u.forEach(function(S){me(S)&&!ge(S)&&(d=!0)}),d&&u.length>1},v=function(){var i,u,d=(i=e.extra)!==null&&i!==void 0?i:(u=t.extra)===null||u===void 0?void 0:u.call(t);return P.value==="vertical"?!!d:!O()};return function(){var m,i,u,d,S,H=c.class,J=je(c,["class"]),g=M.value,w=(m=e.extra)!==null&&m!==void 0?m:(i=t.extra)===null||i===void 0?void 0:i.call(t),k=(u=t.default)===null||u===void 0?void 0:u.call(t),y=(d=e.actions)!==null&&d!==void 0?d:ie((S=t.actions)===null||S===void 0?void 0:S.call(t));y=y&&!Array.isArray(y)?[y]:y;var b=y&&y.length>0&&n("ul",{class:"".concat(g,"-item-action"),key:"actions"},[y.map(function(z,F){return n("li",{key:"".concat(g,"-item-action-").concat(F)},[z,F!==y.length-1&&n("em",{class:"".concat(g,"-item-action-split")},null)])})]),K=_.value?"div":"li",B=n(K,W(W({},J),{},{class:fe("".concat(g,"-item"),I({},"".concat(g,"-item-no-flex"),!v()),H)}),{default:function(){return[P.value==="vertical"&&w?[n("div",{class:"".concat(g,"-item-main"),key:"content"},[k,b]),n("div",{class:"".concat(g,"-item-extra"),key:"extra"},[w])]:[k,b,se(w,{key:"extra"})]]}});return _.value?n(Ie,{flex:1,style:e.colStyle},{default:function(){return[B]}}):B}}}),we=function(){return{bordered:{type:Boolean,default:void 0},dataSource:p.array,extra:p.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:p.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:p.any,footer:p.any,locale:{type:Object}}},j=q({name:"AList",Item:Oe,props:ye(we(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,h){var t=h.slots,c,f;he(le,{grid:te(e,"grid"),itemLayout:te(e,"itemLayout")});var P={current:1,total:0},_=G("list",e),r=_.prefixCls,M=_.direction,O=_.renderEmpty,v=L(function(){return e.pagination&&ae(e.pagination)==="object"?e.pagination:{}}),m=D((c=v.value.defaultCurrent)!==null&&c!==void 0?c:1),i=D((f=v.value.defaultPageSize)!==null&&f!==void 0?f:10);_e(v,function(){"current"in v.value&&(m.value=v.value.current),"pageSize"in v.value&&(i.value=v.value.pageSize)});var u=[],d=function(l){return function(s,x){m.value=s,i.value=x,v.value[l]&&v.value[l](s,x)}},S=d("onChange"),H=d("onShowSizeChange"),J=function(l){var s;return n("div",{class:"".concat(r.value,"-empty-text")},[((s=e.locale)===null||s===void 0?void 0:s.emptyText)||l("List")])},g=L(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),w=L(function(){return g.value&&g.value.spinning}),k=L(function(){var a="";switch(e.size){case"large":a="lg";break;case"small":a="sm";break}return a}),y=L(function(){var a;return a={},I(a,"".concat(r.value),!0),I(a,"".concat(r.value,"-vertical"),e.itemLayout==="vertical"),I(a,"".concat(r.value,"-").concat(k.value),k.value),I(a,"".concat(r.value,"-split"),e.split),I(a,"".concat(r.value,"-bordered"),e.bordered),I(a,"".concat(r.value,"-loading"),w.value),I(a,"".concat(r.value,"-grid"),!!e.grid),I(a,"".concat(r.value,"-rtl"),M.value==="rtl"),a}),b=L(function(){var a=N(N(N({},P),{total:e.dataSource.length,current:m.value,pageSize:i.value}),e.pagination||{}),l=Math.ceil(a.total/a.pageSize);return a.current>l&&(a.current=l),a}),K=L(function(){var a=ne(e.dataSource);return e.pagination&&e.dataSource.length>(b.value.current-1)*b.value.pageSize&&(a=ne(e.dataSource).splice((b.value.current-1)*b.value.pageSize,b.value.pageSize)),a}),B=be(),z=xe(function(){for(var a=0;a<re.length;a+=1){var l=re[a];if(B.value[l])return l}}),F=L(function(){if(!!e.grid){var a=z.value&&e.grid[z.value]?e.grid[z.value]:e.grid.column;if(a)return{width:"".concat(100/a,"%"),maxWidth:"".concat(100/a,"%")}}}),oe=function(l,s){var x,E=(x=e.renderItem)!==null&&x!==void 0?x:t.renderItem;if(!E)return null;var C,A=ae(e.rowKey);return A==="function"?C=e.rowKey(l):A==="string"||A==="number"?C=l[e.rowKey]:C=l.key,C||(C="list-item-".concat(s)),u[s]=C,E({item:l,index:s})};return function(){var a,l,s,x,E,C,A,U=(a=e.loadMore)!==null&&a!==void 0?a:(l=t.loadMore)===null||l===void 0?void 0:l.call(t),Q=(s=e.footer)!==null&&s!==void 0?s:(x=t.footer)===null||x===void 0?void 0:x.call(t),X=(E=e.header)!==null&&E!==void 0?E:(C=t.header)===null||C===void 0?void 0:C.call(t),Y=ie((A=t.default)===null||A===void 0?void 0:A.call(t)),ue=!!(U||e.pagination||Q),ce=N(N({},y.value),I({},"".concat(r.value,"-something-after-last-item"),ue)),Z=e.pagination?n("div",{class:"".concat(r.value,"-pagination")},[n(Ce,W(W({},b.value),{},{onChange:S,onShowSizeChange:H}),null)]):null,V=w.value&&n("div",{style:{minHeight:"53px"}},null);if(K.value.length>0){u.length=0;var ee=K.value.map(function(T,$){return oe(T,$)}),ve=ee.map(function(T,$){return n("div",{key:u[$],style:F.value},[T])});V=e.grid?n(pe,{gutter:e.grid.gutter},{default:function(){return[ve]}}):n("ul",{class:"".concat(r.value,"-items")},[ee])}else!Y.length&&!w.value&&(V=J(O.value));var R=b.value.position||"bottom";return n("div",{class:ce},[(R==="top"||R==="both")&&Z,X&&n("div",{class:"".concat(r.value,"-header")},[X]),n(Se,g.value,{default:function(){return[V,Y]}}),Q&&n("div",{class:"".concat(r.value,"-footer")},[Q]),U||(R==="bottom"||R==="both")&&Z])}}});j.install=function(o){return o.component(j.name,j),o.component(j.Item.name,j.Item),o.component(j.Item.Meta.name,j.Item.Meta),o};var Ne=j;export{Ne as L};