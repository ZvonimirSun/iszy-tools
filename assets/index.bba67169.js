import{G as te,d as ae,aa as le,O as l,cG as ie,L as re,am as se,K as ce,ak as ue,al as ve,T as K,e as fe,f as g,an as de,ao as pe,Z as me,g as be,a as s,cH as Ce,Y as E,bn as ye,D as ge,P as d,cI as Pe,cJ as R,E as _e,B as xe,cK as Te,b9 as ke}from"./index.990579d2.js";var Be=globalThis&&globalThis.__rest||function(i,n){var c={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&n.indexOf(o)<0&&(c[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(i);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(i,o[r])&&(c[o[r]]=i[o[r]]);return c},he=function(){return l(l({},Pe()),{prefixCls:String,content:d.any,title:d.any,okType:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},okText:d.any,cancelText:d.any,icon:d.any,okButtonProps:{type:Object,default:void 0},cancelButtonProps:{type:Object,default:void 0},showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function})},Ne=ae({name:"APopconfirm",props:le(he(),l(l({},ie()),{trigger:"click",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:["title","content","okText","icon","cancelText","cancelButton","okButton"],emits:["update:visible","visibleChange"],setup:function(n,c){var o=c.slots,r=c.emit,$=c.expose;re(function(){se(n.defaultVisible===void 0,"Popconfirm","'defaultVisible' is deprecated, please use 'v-model:visible'")});var P=ce();$({getPopupDomNode:function(){var e,t;return(t=(e=P.value)===null||e===void 0?void 0:e.getPopupDomNode)===null||t===void 0?void 0:t.call(e)}});var z=ue(!1,{value:ve(n,"visible"),defaultValue:n.defaultVisible}),_=K(z,2),x=_[0],A=_[1],p=function(e,t){n.visible===void 0&&A(e),r("update:visible",e),r("visibleChange",e,t)},I=function(e){p(!1,e)},T=function(e){var t;return(t=n.onConfirm)===null||t===void 0?void 0:t.call(n,e)},F=function(e){var t;p(!1,e),(t=n.onCancel)===null||t===void 0||t.call(n,e)},M=function(e){e.keyCode===ke.ESC&&x&&p(!1,e)},G=function(e){var t=n.disabled;t||p(e)},k=fe("popconfirm",n),q=k.prefixCls,b=k.getPrefixCls,H=g(function(){return b()}),u=g(function(){return b("popover")}),J=g(function(){return b("btn")}),U=de("Popconfirm",pe.Popconfirm),W=K(U,1),B=W[0],Y=function(){var e,t,v,f,m=n.okButtonProps,h=n.cancelButtonProps,C=n.title,y=C===void 0?(e=o.title)===null||e===void 0?void 0:e.call(o):C,N=n.cancelText,Z=N===void 0?(t=o.cancel)===null||t===void 0?void 0:t.call(o):N,O=n.okText,Q=O===void 0?(v=o.okText)===null||v===void 0?void 0:v.call(o):O,w=n.okType,V=n.icon,X=V===void 0?(f=o.icon)===null||f===void 0?void 0:f.call(o):V,j=n.showCancel,ee=j===void 0?!0:j,D=o.cancelButton,S=o.okButton,L=l({onClick:F,size:"small"},h),ne=l(l(l({onClick:T},R(w)),{size:"small"}),m);return s("div",{class:"".concat(u.value,"-inner-content")},[s("div",{class:"".concat(u.value,"-message")},[X||s(_e,null,null),s("div",{class:"".concat(u.value,"-message-title")},[y])]),s("div",{class:"".concat(u.value,"-buttons")},[ee?D?D(L):s(xe,L,{default:function(){return[Z||B.value.cancelText]}}):null,S?S(ne):s(Te,{buttonProps:l(l({size:"small"},R(w)),m),actionFn:T,close:I,prefixCls:J.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:function(){return[Q||B.value.okText]}})])])};return function(){var a,e=n.placement,t=n.overlayClassName,v=Be(n,["placement","overlayClassName"]),f=me(v,["title","content","cancelText","okText","onUpdate:visible","onConfirm","onCancel"]),m=be(q.value,t);return s(ge,E(E({},f),{},{prefixCls:u.value,placement:e,onVisibleChange:G,visible:x.value,overlayClassName:m,transitionName:ye(H.value,"zoom-big",n.transitionName),ref:P}),{default:function(){return[Ce(((a=o.default)===null||a===void 0?void 0:a.call(o))||[],{onKeydown:function(y){M(y)}},!1)]},title:Y})}}}),we=te(Ne);export{we as _};
