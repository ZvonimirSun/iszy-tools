import{l as te,d as ae,Z as le,p as l,c7 as ie,D as re,ac as se,r as ce,aa as ue,ab as ve,n as $,e as de,f as g,ad as fe,ae as pe,z as me,g as be,a as s,c8 as Ce,y as z,bm as ye,a3 as ge,P as f,c9 as Pe,ca as E,E as _e,B as xe,cb as Te,b8 as ke}from"./index.be9348fa.js";var Be=globalThis&&globalThis.__rest||function(i,n){var c={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&n.indexOf(o)<0&&(c[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(i);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(i,o[r])&&(c[o[r]]=i[o[r]]);return c},he=function(){return l(l({},Pe()),{prefixCls:String,content:f.any,title:f.any,okType:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},okText:f.any,cancelText:f.any,icon:f.any,okButtonProps:{type:Object,default:void 0},cancelButtonProps:{type:Object,default:void 0},showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function})},Ne=ae({name:"APopconfirm",props:le(he(),l(l({},ie()),{trigger:"click",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:["title","content","okText","icon","cancelText","cancelButton","okButton"],emits:["update:visible","visibleChange"],setup:function(n,c){var o=c.slots,r=c.emit,R=c.expose;re(function(){se(n.defaultVisible===void 0,"Popconfirm","'defaultVisible' is deprecated, please use 'v-model:visible'")});var P=ce();R({getPopupDomNode:function(){var e,t;return(t=(e=P.value)===null||e===void 0?void 0:e.getPopupDomNode)===null||t===void 0?void 0:t.call(e)}});var A=ue(!1,{value:ve(n,"visible"),defaultValue:n.defaultVisible}),_=$(A,2),x=_[0],K=_[1],p=function(e,t){n.visible===void 0&&K(e),r("update:visible",e),r("visibleChange",e,t)},F=function(e){p(!1,e)},T=function(e){var t;return(t=n.onConfirm)===null||t===void 0?void 0:t.call(n,e)},I=function(e){var t;p(!1,e),(t=n.onCancel)===null||t===void 0||t.call(n,e)},M=function(e){e.keyCode===ke.ESC&&x&&p(!1,e)},q=function(e){var t=n.disabled;t||p(e)},k=de("popconfirm",n),U=k.prefixCls,b=k.getPrefixCls,W=g(function(){return b()}),u=g(function(){return b("popover")}),Z=g(function(){return b("btn")}),G=fe("Popconfirm",pe.Popconfirm),H=$(G,1),B=H[0],J=function(){var e,t,v,d,m=n.okButtonProps,h=n.cancelButtonProps,C=n.title,y=C===void 0?(e=o.title)===null||e===void 0?void 0:e.call(o):C,N=n.cancelText,Q=N===void 0?(t=o.cancel)===null||t===void 0?void 0:t.call(o):N,O=n.okText,X=O===void 0?(v=o.okText)===null||v===void 0?void 0:v.call(o):O,w=n.okType,V=n.icon,Y=V===void 0?(d=o.icon)===null||d===void 0?void 0:d.call(o):V,j=n.showCancel,ee=j===void 0?!0:j,D=o.cancelButton,S=o.okButton,L=l({onClick:I,size:"small"},h),ne=l(l(l({onClick:T},E(w)),{size:"small"}),m);return s("div",{class:"".concat(u.value,"-inner-content")},[s("div",{class:"".concat(u.value,"-message")},[Y||s(_e,null,null),s("div",{class:"".concat(u.value,"-message-title")},[y])]),s("div",{class:"".concat(u.value,"-buttons")},[ee?D?D(L):s(xe,L,{default:function(){return[Q||B.value.cancelText]}}):null,S?S(ne):s(Te,{buttonProps:l(l({size:"small"},E(w)),m),actionFn:T,close:F,prefixCls:Z.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:function(){return[X||B.value.okText]}})])])};return function(){var a,e=n.placement,t=n.overlayClassName,v=Be(n,["placement","overlayClassName"]),d=me(v,["title","content","cancelText","okText","onUpdate:visible","onConfirm","onCancel"]),m=be(U.value,t);return s(ge,z(z({},d),{},{prefixCls:u.value,placement:e,onVisibleChange:q,visible:x.value,overlayClassName:m,transitionName:ye(W.value,"zoom-big",n.transitionName),ref:P}),{default:function(){return[Ce(((a=o.default)===null||a===void 0?void 0:a.call(o))||[],{onKeydown:function(y){M(y)}},!1)]},title:J})}}});const we=te(Ne);export{we as _};
