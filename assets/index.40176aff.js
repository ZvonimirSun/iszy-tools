import{G as ae,e as ne,as as le,Q as l,P as d,ct as ie,cu as re,M as se,a1 as ce,L as ue,a9 as ve,ac as $,f as fe,g as P,at as de,au as me,av as pe,h as be,b as s,cv as Ce,a3 as E,aV as ye,T as Pe,cw as R,E as xe,B as ge,cx as Te,aP as _e}from"./index.fd3c34f7.js";import{u as ke}from"./useMergedState.fcf9d1e6.js";var he=globalThis&&globalThis.__rest||function(i,o){var c={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&o.indexOf(t)<0&&(c[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(i);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(i,t[r])&&(c[t[r]]=i[t[r]]);return c},Be=function(){return l(l({},ie()),{prefixCls:String,content:d.any,title:d.any,okType:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},okText:d.any,cancelText:d.any,icon:d.any,okButtonProps:{type:Object,default:void 0},cancelButtonProps:{type:Object,default:void 0},showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function})},Ne=ne({name:"APopconfirm",props:le(Be(),l(l({},re()),{trigger:"click",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:["title","content","okText","icon","cancelText","cancelButton","okButton"],emits:["update:visible","visibleChange"],setup:function(o,c){var t=c.slots,r=c.emit,z=c.expose;se(function(){ce(o.defaultVisible===void 0,"Popconfirm","'defaultVisible' is deprecated, please use 'v-model:visible'")});var x=ue();z({getPopupDomNode:function(){var e,a;return(a=(e=x.value)===null||e===void 0?void 0:e.getPopupDomNode)===null||a===void 0?void 0:a.call(e)}});var A=ke(!1,{value:ve(o,"visible"),defaultValue:o.defaultVisible}),g=$(A,2),T=g[0],K=g[1],m=function(e,a){o.visible===void 0&&K(e),r("update:visible",e),r("visibleChange",e,a)},M=function(e){m(!1,e)},_=function(e){var a;return(a=o.onConfirm)===null||a===void 0?void 0:a.call(o,e)},F=function(e){var a;m(!1,e),(a=o.onCancel)===null||a===void 0||a.call(o,e)},I=function(e){e.keyCode===_e.ESC&&T&&m(!1,e)},q=function(e){var a=o.disabled;a||m(e)},k=fe("popconfirm",o),G=k.prefixCls,b=k.getPrefixCls,Q=P(function(){return b()}),u=P(function(){return b("popover")}),U=P(function(){return b("btn")}),W=de("Popconfirm",me.Popconfirm),H=$(W,1),h=H[0],J=function(){var e,a,v,f,p=o.okButtonProps,B=o.cancelButtonProps,C=o.title,y=C===void 0?(e=t.title)===null||e===void 0?void 0:e.call(t):C,N=o.cancelText,X=N===void 0?(a=t.cancel)===null||a===void 0?void 0:a.call(t):N,w=o.okText,Y=w===void 0?(v=t.okText)===null||v===void 0?void 0:v.call(t):w,O=o.okType,V=o.icon,Z=V===void 0?(f=t.icon)===null||f===void 0?void 0:f.call(t):V,j=o.showCancel,ee=j===void 0?!0:j,D=t.cancelButton,S=t.okButton,L=l({onClick:F,size:"small"},B),oe=l(l(l({onClick:_},R(O)),{size:"small"}),p);return s("div",{class:"".concat(u.value,"-inner-content")},[s("div",{class:"".concat(u.value,"-message")},[Z||s(xe,null,null),s("div",{class:"".concat(u.value,"-message-title")},[y])]),s("div",{class:"".concat(u.value,"-buttons")},[ee?D?D(L):s(ge,L,{default:function(){return[X||h.value.cancelText]}}):null,S?S(oe):s(Te,{buttonProps:l(l({size:"small"},R(O)),p),actionFn:_,close:M,prefixCls:U.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:function(){return[Y||h.value.okText]}})])])};return function(){var n,e=o.placement,a=o.overlayClassName,v=he(o,["placement","overlayClassName"]),f=pe(v,["title","content","cancelText","okText","onUpdate:visible","onConfirm","onCancel"]),p=be(G.value,a);return s(Pe,E(E({},f),{},{prefixCls:u.value,placement:e,onVisibleChange:q,visible:T.value,overlayClassName:p,transitionName:ye(Q.value,"zoom-big",o.transitionName),ref:x}),{default:function(){return[Ce(((n=t.default)===null||n===void 0?void 0:n.call(t))||[],{onKeydown:function(y){I(y)}},!1)]},title:J})}}}),Ve=ae(Ne);export{Ve as P};
