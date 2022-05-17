import{d as S,e as $,f as h,g as j,h as d,a as i,c0 as O,c1 as V,P as F,K as q,ae as z,F as D,b6 as G,ar as H}from"./index.c31bc572.js";var J=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},L=S({name:"ACheckableTag",props:J(),setup:function(e,r){var l=r.slots,s=r.emit,g=$("tag",e),u=g.prefixCls,o=function(C){var v=e.checked;s("update:checked",!v),s("change",!v),s("click",C)},k=h(function(){var n;return j(u.value,(n={},d(n,"".concat(u.value,"-checkable"),!0),d(n,"".concat(u.value,"-checkable-checked"),e.checked),n))});return function(){var n;return i("span",{class:k.value,onClick:o},[(n=l.default)===null||n===void 0?void 0:n.call(l)])}}}),b=L,M=new RegExp("^(".concat(O.join("|"),")(-inverse)?$")),Q=new RegExp("^(".concat(V.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:F.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:F.any}},f=S({name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(e,r){var l=r.slots,s=r.emit,g=r.attrs,u=$("tag",e),o=u.prefixCls,k=u.direction,n=q(!0);z(function(){e.visible!==void 0&&(n.value=e.visible)});var C=function(t){t.stopPropagation(),s("update:visible",!1),s("close",t),!t.defaultPrevented&&e.visible===void 0&&(n.value=!1)},v=h(function(){var a=e.color;return a?M.test(a)||Q.test(a):!1}),R=h(function(){var a;return j(o.value,(a={},d(a,"".concat(o.value,"-").concat(e.color),v.value),d(a,"".concat(o.value,"-has-color"),e.color&&!v.value),d(a,"".concat(o.value,"-hidden"),!n.value),d(a,"".concat(o.value,"-rtl"),k.value==="rtl"),a))});return function(){var a,t,p,m=e.icon,w=m===void 0?(a=l.icon)===null||a===void 0?void 0:a.call(l):m,y=e.color,_=e.closeIcon,P=_===void 0?(t=l.closeIcon)===null||t===void 0?void 0:t.call(l):_,x=e.closable,B=x===void 0?!1:x,E=function(){return B?P?i("div",{class:"".concat(o.value,"-close-icon"),onClick:C},[P]):i(H,{class:"".concat(o.value,"-close-icon"),onClick:C},null):null},A={backgroundColor:y&&!v.value?y:void 0},I=w||null,T=(p=l.default)===null||p===void 0?void 0:p.call(l),U=I?i(D,null,[I,i("span",null,[T])]):T,W="onClick"in g,N=i("span",{class:R.value,style:A},[U,E()]);return W?i(G,null,{default:function(){return[N]}}):N}}});f.CheckableTag=b;f.install=function(c){return c.component(f.name,f),c.component(b.name,b),c};var Z=f;export{Z as _};
