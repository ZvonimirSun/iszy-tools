import{d as G,e as J,a as n,P as I,H as de,K as D,ao as ie,X as se,Y as H,g as fe,h as C,cn as ge,co as me,aa as ye,I as _e,ak as ae,f as j,M as te,S as he,O as K,a8 as ne}from"./index.c31bc572.js";import{S as Se}from"./index.f48ebfba.js";import{u as be,e as pe,P as xe}from"./index.1e9bbae6.js";import{C as Ce,R as Ie}from"./Col.114716f6.js";import{r as re}from"./responsiveObserve.271b6a0c.js";var Pe=function(){return{avatar:I.any,description:I.any,prefixCls:String,title:I.any}},je=G({name:"AListItemMeta",props:Pe(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,_){var a=_.slots,c=J("list",e),f=c.prefixCls;return function(){var P,h,r,M,O,v,g="".concat(f.value,"-item-meta"),i=(P=e.title)!==null&&P!==void 0?P:(h=a.title)===null||h===void 0?void 0:h.call(a),u=(r=e.description)!==null&&r!==void 0?r:(M=a.description)===null||M===void 0?void 0:M.call(a),d=(O=e.avatar)!==null&&O!==void 0?O:(v=a.avatar)===null||v===void 0?void 0:v.call(a),S=n("div",{class:"".concat(f.value,"-item-meta-content")},[i&&n("h4",{class:"".concat(f.value,"-item-meta-title")},[i]),u&&n("div",{class:"".concat(f.value,"-item-meta-description")},[u])]);return n("div",{class:g},[d&&n("div",{class:"".concat(f.value,"-item-meta-avatar")},[d]),(i||u)&&S])}}}),le=Symbol("ListContextKey"),Le=globalThis&&globalThis.__rest||function(o,e){var _={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&e.indexOf(a)<0&&(_[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(o);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(o,a[c])&&(_[a[c]]=o[a[c]]);return _},Me=function(){return{prefixCls:String,extra:I.any,actions:I.array,grid:Object,colStyle:{type:Object,default:void 0}}},Oe=G({name:"AListItem",inheritAttrs:!1,Meta:je,props:Me(),slots:["actions","extra"],setup:function(e,_){var a=_.slots,c=_.attrs,f=de(le,{grid:D(),itemLayout:D()}),P=f.itemLayout,h=f.grid,r=J("list",e),M=r.prefixCls,O=function(){var i,u=((i=a.default)===null||i===void 0?void 0:i.call(a))||[],d;return u.forEach(function(S){ge(S)&&!me(S)&&(d=!0)}),d&&u.length>1},v=function(){var i,u,d=(i=e.extra)!==null&&i!==void 0?i:(u=a.extra)===null||u===void 0?void 0:u.call(a);return P.value==="vertical"?!!d:!O()};return function(){var g,i,u,d,S,V=c.class,W=Le(c,["class"]),m=M.value,w=(g=e.extra)!==null&&g!==void 0?g:(i=a.extra)===null||i===void 0?void 0:i.call(a),k=(u=a.default)===null||u===void 0?void 0:u.call(a),y=(d=e.actions)!==null&&d!==void 0?d:ie((S=a.actions)===null||S===void 0?void 0:S.call(a));y=y&&!Array.isArray(y)?[y]:y;var b=y&&y.length>0&&n("ul",{class:"".concat(m,"-item-action"),key:"actions"},[y.map(function(z,F){return n("li",{key:"".concat(m,"-item-action-").concat(F)},[z,F!==y.length-1&&n("em",{class:"".concat(m,"-item-action-split")},null)])})]),N=h.value?"div":"li",B=n(N,H(H({},W),{},{class:fe("".concat(m,"-item"),C({},"".concat(m,"-item-no-flex"),!v()),V)}),{default:function(){return[P.value==="vertical"&&w?[n("div",{class:"".concat(m,"-item-main"),key:"content"},[k,b]),n("div",{class:"".concat(m,"-item-extra"),key:"extra"},[w])]:[k,b,se(w,{key:"extra"})]]}});return h.value?n(Ce,{flex:1,style:e.colStyle},{default:function(){return[B]}}):B}}}),we=function(){return{bordered:{type:Boolean,default:void 0},dataSource:I.array,extra:I.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:I.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:I.any,footer:I.any,locale:{type:Object}}},L=G({name:"AList",Item:Oe,props:ye(we(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,_){var a=_.slots,c,f;_e(le,{grid:ae(e,"grid"),itemLayout:ae(e,"itemLayout")});var P={current:1,total:0},h=J("list",e),r=h.prefixCls,M=h.direction,O=h.renderEmpty,v=j(function(){return e.pagination&&te(e.pagination)==="object"?e.pagination:{}}),g=D((c=v.value.defaultCurrent)!==null&&c!==void 0?c:1),i=D((f=v.value.defaultPageSize)!==null&&f!==void 0?f:10);he(v,function(){"current"in v.value&&(g.value=v.value.current),"pageSize"in v.value&&(i.value=v.value.pageSize)});var u=[],d=function(l){return function(s,p){g.value=s,i.value=p,v.value[l]&&v.value[l](s,p)}},S=d("onChange"),V=d("onShowSizeChange"),W=function(l){var s;return n("div",{class:"".concat(r.value,"-empty-text")},[((s=e.locale)===null||s===void 0?void 0:s.emptyText)||l("List")])},m=j(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),w=j(function(){return m.value&&m.value.spinning}),k=j(function(){var t="";switch(e.size){case"large":t="lg";break;case"small":t="sm";break}return t}),y=j(function(){var t;return t={},C(t,"".concat(r.value),!0),C(t,"".concat(r.value,"-vertical"),e.itemLayout==="vertical"),C(t,"".concat(r.value,"-").concat(k.value),k.value),C(t,"".concat(r.value,"-split"),e.split),C(t,"".concat(r.value,"-bordered"),e.bordered),C(t,"".concat(r.value,"-loading"),w.value),C(t,"".concat(r.value,"-grid"),!!e.grid),C(t,"".concat(r.value,"-rtl"),M.value==="rtl"),t}),b=j(function(){var t=K(K(K({},P),{total:e.dataSource.length,current:g.value,pageSize:i.value}),e.pagination||{}),l=Math.ceil(t.total/t.pageSize);return t.current>l&&(t.current=l),t}),N=j(function(){var t=ne(e.dataSource);return e.pagination&&e.dataSource.length>(b.value.current-1)*b.value.pageSize&&(t=ne(e.dataSource).splice((b.value.current-1)*b.value.pageSize,b.value.pageSize)),t}),B=be(),z=pe(function(){for(var t=0;t<re.length;t+=1){var l=re[t];if(B.value[l])return l}}),F=j(function(){if(!!e.grid){var t=z.value&&e.grid[z.value]?e.grid[z.value]:e.grid.column;if(t)return{width:"".concat(100/t,"%"),maxWidth:"".concat(100/t,"%")}}}),oe=function(l,s){var p,E=(p=e.renderItem)!==null&&p!==void 0?p:a.renderItem;if(!E)return null;var x,A=te(e.rowKey);return A==="function"?x=e.rowKey(l):A==="string"||A==="number"?x=l[e.rowKey]:x=l.key,x||(x="list-item-".concat(s)),u[s]=x,E({item:l,index:s})};return function(){var t,l,s,p,E,x,A,Q=(t=e.loadMore)!==null&&t!==void 0?t:(l=a.loadMore)===null||l===void 0?void 0:l.call(a),X=(s=e.footer)!==null&&s!==void 0?s:(p=a.footer)===null||p===void 0?void 0:p.call(a),U=(E=e.header)!==null&&E!==void 0?E:(x=a.header)===null||x===void 0?void 0:x.call(a),Z=ie((A=a.default)===null||A===void 0?void 0:A.call(a)),ue=!!(Q||e.pagination||X),ce=K(K({},y.value),C({},"".concat(r.value,"-something-after-last-item"),ue)),$=e.pagination?n("div",{class:"".concat(r.value,"-pagination")},[n(xe,H(H({},b.value),{},{onChange:S,onShowSizeChange:V}),null)]):null,Y=w.value&&n("div",{style:{minHeight:"53px"}},null);if(N.value.length>0){u.length=0;var ee=N.value.map(function(T,q){return oe(T,q)}),ve=ee.map(function(T,q){return n("div",{key:u[q],style:F.value},[T])});Y=e.grid?n(Ie,{gutter:e.grid.gutter},{default:function(){return[ve]}}):n("ul",{class:"".concat(r.value,"-items")},[ee])}else!Z.length&&!w.value&&(Y=W(O.value));var R=b.value.position||"bottom";return n("div",{class:ce},[(R==="top"||R==="both")&&$,U&&n("div",{class:"".concat(r.value,"-header")},[U]),n(Se,m.value,{default:function(){return[Y,Z]}}),X&&n("div",{class:"".concat(r.value,"-footer")},[X]),Q||(R==="bottom"||R==="both")&&$])}}});L.install=function(o){return o.component(L.name,L),o.component(L.Item.name,L.Item),o.component(L.Item.Meta.name,L.Item.Meta),o};var Ke=L;export{Ke as _,Oe as a,je as b};