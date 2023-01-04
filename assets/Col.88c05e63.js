import{j as M,f as l,T,v as P,d as F,e as I,r as D,H as K,a5 as y,O as L,g as $,h as o,a as B,s as _}from"./index.01eeedf2.js";import{r as A,a as G}from"./responsiveObserve.aefbe707.js";import{u as V}from"./useFlexGapSupport.1a62627e.js";var E=Symbol("rowContextKey"),W=function(r){T(E,r)},H=function(){return M(E,{gutter:l(function(){}),wrap:l(function(){}),supportFlexGap:l(function(){})})};P("top","middle","bottom","stretch");P("start","end","center","space-around","space-between");var U=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},k=F({compatConfig:{MODE:3},name:"ARow",props:U(),setup:function(r,N){var g=N.slots,v=I("row",r),d=v.prefixCls,h=v.direction,j,x=D({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=V();K(function(){j=A.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),L(function(){A.unsubscribe(j)});var S=l(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(i,b){if(y(i)==="object")for(var a=0;a<G.length;a++){var p=G[a];if(x.value[p]&&i[p]!==void 0){e[b]=i[p];break}}else e[b]=i||0}),e});W({gutter:S,supportFlexGap:w,wrap:l(function(){return r.wrap})});var O=l(function(){var e;return $(d.value,(e={},o(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),o(e,"".concat(d.value,"-").concat(r.justify),r.justify),o(e,"".concat(d.value,"-").concat(r.align),r.align),o(e,"".concat(d.value,"-rtl"),h.value==="rtl"),e))}),R=l(function(){var e=S.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),w.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return B("div",{class:O.value,style:R.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});const Z=k;function q(c){return typeof c=="number"?"".concat(c," ").concat(c," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(c)?"0 0 ".concat(c):c}var J=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const z=F({compatConfig:{MODE:3},name:"ACol",props:J(),setup:function(r,N){var g=N.slots,v=H(),d=v.gutter,h=v.supportFlexGap,j=v.wrap,x=I("col",r),w=x.prefixCls,S=x.direction,O=l(function(){var e,t=r.span,n=r.order,s=r.offset,i=r.push,b=r.pull,a=w.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(m){var f,u={},C=r[m];typeof C=="number"?u.span=C:y(C)==="object"&&(u=C||{}),p=_(_({},p),{},(f={},o(f,"".concat(a,"-").concat(m,"-").concat(u.span),u.span!==void 0),o(f,"".concat(a,"-").concat(m,"-order-").concat(u.order),u.order||u.order===0),o(f,"".concat(a,"-").concat(m,"-offset-").concat(u.offset),u.offset||u.offset===0),o(f,"".concat(a,"-").concat(m,"-push-").concat(u.push),u.push||u.push===0),o(f,"".concat(a,"-").concat(m,"-pull-").concat(u.pull),u.pull||u.pull===0),o(f,"".concat(a,"-rtl"),S.value==="rtl"),f))}),$(a,(e={},o(e,"".concat(a,"-").concat(t),t!==void 0),o(e,"".concat(a,"-order-").concat(n),n),o(e,"".concat(a,"-offset-").concat(s),s),o(e,"".concat(a,"-push-").concat(i),i),o(e,"".concat(a,"-pull-").concat(b),b),e),p)}),R=l(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!h.value){var i="".concat(t[1]/2,"px");n.paddingTop=i,n.paddingBottom=i}return e&&(n.flex=q(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return B("div",{class:O.value,style:R.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});export{z as C,Z as R};
