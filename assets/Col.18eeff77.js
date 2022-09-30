import{aK as E,j as L,f as l,t as P,d as F,e as I,r as T,D as U,Y as y,U as V,g as B,h as o,a as K,p as A}from"./index.a40670cb.js";import{R as O,r as G}from"./responsiveObserve.62e84787.js";import{u as W}from"./useFlexGapSupport.781cf2d0.js";var $=Symbol("rowContextKey"),D=function(r){E($,r)},M=function(){return L($,{gutter:l(function(){}),wrap:l(function(){}),supportFlexGap:l(function(){})})};const Y=D;P("top","middle","bottom","stretch");P("start","end","center","space-around","space-between");var k=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},q=F({name:"ARow",props:k(),setup:function(r,h){var g=h.slots,v=I("row",r),d=v.prefixCls,C=v.direction,j,x=T({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=W();U(function(){j=O.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),V(function(){O.unsubscribe(j)});var S=l(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(i,b){if(y(i)==="object")for(var a=0;a<G.length;a++){var p=G[a];if(x.value[p]&&i[p]!==void 0){e[b]=i[p];break}}else e[b]=i||0}),e});Y({gutter:S,supportFlexGap:w,wrap:l(function(){return r.wrap})});var R=l(function(){var e;return B(d.value,(e={},o(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),o(e,"".concat(d.value,"-").concat(r.justify),r.justify),o(e,"".concat(d.value,"-").concat(r.align),r.align),o(e,"".concat(d.value,"-rtl"),C.value==="rtl"),e))}),_=l(function(){var e=S.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),w.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return K("div",{class:R.value,style:_.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});const z=q;function H(c){return typeof c=="number"?"".concat(c," ").concat(c," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(c)?"0 0 ".concat(c):c}var J=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const ee=F({name:"ACol",props:J(),setup:function(r,h){var g=h.slots,v=M(),d=v.gutter,C=v.supportFlexGap,j=v.wrap,x=I("col",r),w=x.prefixCls,S=x.direction,R=l(function(){var e,t=r.span,n=r.order,s=r.offset,i=r.push,b=r.pull,a=w.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(m){var f,u={},N=r[m];typeof N=="number"?u.span=N:y(N)==="object"&&(u=N||{}),p=A(A({},p),(f={},o(f,"".concat(a,"-").concat(m,"-").concat(u.span),u.span!==void 0),o(f,"".concat(a,"-").concat(m,"-order-").concat(u.order),u.order||u.order===0),o(f,"".concat(a,"-").concat(m,"-offset-").concat(u.offset),u.offset||u.offset===0),o(f,"".concat(a,"-").concat(m,"-push-").concat(u.push),u.push||u.push===0),o(f,"".concat(a,"-").concat(m,"-pull-").concat(u.pull),u.pull||u.pull===0),o(f,"".concat(a,"-rtl"),S.value==="rtl"),f))}),B(a,(e={},o(e,"".concat(a,"-").concat(t),t!==void 0),o(e,"".concat(a,"-order-").concat(n),n),o(e,"".concat(a,"-offset-").concat(s),s),o(e,"".concat(a,"-push-").concat(i),i),o(e,"".concat(a,"-pull-").concat(b),b),e),p)}),_=l(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!C.value){var i="".concat(t[1]/2,"px");n.paddingTop=i,n.paddingBottom=i}return e&&(n.flex=H(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return K("div",{class:R.value,style:_.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});export{ee as C,z as R};