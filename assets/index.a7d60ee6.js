import{n as ne,d as te,a1 as ae,s as l,c5 as le,H as ie,a4 as se,r as ce,a6 as re,ap as ue,q as L,e as ve,f as b,aq as de,ar as fe,y as pe,G as me,g as Ce,a as i,c6 as be,bx as ye,aj as xe,P as u,c7 as Pe,c8 as O,E as ge,B as _e,c9 as ke,R as Te}from"./index.01eeedf2.js";var Be=["placement","overlayClassName"],$e=function(){return l(l({},Pe()),{},{prefixCls:String,content:u.any,title:u.any,okType:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},okText:u.any,cancelText:u.any,icon:u.any,okButtonProps:{type:Object,default:void 0},cancelButtonProps:{type:Object,default:void 0},showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function})},Ne=te({compatConfig:{MODE:3},name:"APopconfirm",props:ae($e(),l(l({},le()),{},{trigger:"click",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:["title","content","okText","icon","cancelText","cancelButton","okButton"],emits:["update:visible","visibleChange"],setup:function(o,f){var t=f.slots,y=f.emit,E=f.expose;ie(function(){se(o.defaultVisible===void 0,"Popconfirm","'defaultVisible' is deprecated, please use 'v-model:visible'")});var x=ce();E({getPopupDomNode:function(){var e,n;return(e=x.value)===null||e===void 0||(n=e.getPopupDomNode)===null||n===void 0?void 0:n.call(e)}});var z=re(!1,{value:ue(o,"visible"),defaultValue:o.defaultVisible}),P=L(z,2),g=P[0],A=P[1],v=function(e,n){o.visible===void 0&&A(e),y("update:visible",e),y("visibleChange",e,n)},K=function(e){v(!1,e)},_=function(e){var n;return(n=o.onConfirm)===null||n===void 0?void 0:n.call(o,e)},M=function(e){var n;v(!1,e),(n=o.onCancel)===null||n===void 0||n.call(o,e)},F=function(e){e.keyCode===Te.ESC&&g&&v(!1,e)},q=function(e){var n=o.disabled;n||v(e)},k=ve("popconfirm",o),I=k.prefixCls,p=k.getPrefixCls,W=b(function(){return p()}),s=b(function(){return p("popover")}),G=b(function(){return p("btn")}),H=de("Popconfirm",fe.Popconfirm),U=L(H,1),T=U[0],J=function(){var e,n,c,r,d=o.okButtonProps,B=o.cancelButtonProps,m=o.title,C=m===void 0?(e=t.title)===null||e===void 0?void 0:e.call(t):m,$=o.cancelText,Q=$===void 0?(n=t.cancel)===null||n===void 0?void 0:n.call(t):$,N=o.okText,X=N===void 0?(c=t.okText)===null||c===void 0?void 0:c.call(t):N,h=o.okType,V=o.icon,Y=V===void 0?(r=t.icon)===null||r===void 0?void 0:r.call(t):V,w=o.showCancel,Z=w===void 0?!0:w,D=t.cancelButton,R=t.okButton,j=l({onClick:M,size:"small"},B),ee=l(l({onClick:_},O(h)),{},{size:"small"},d);return i("div",{class:"".concat(s.value,"-inner-content")},[i("div",{class:"".concat(s.value,"-message")},[Y||i(ge,null,null),i("div",{class:"".concat(s.value,"-message-title")},[C])]),i("div",{class:"".concat(s.value,"-buttons")},[Z?D?D(j):i(_e,j,{default:function(){return[Q||T.value.cancelText]}}):null,R?R(ee):i(ke,{buttonProps:l(l({size:"small"},O(h)),d),actionFn:_,close:K,prefixCls:G.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:function(){return[X||T.value.okText]}})])])};return function(){var a,e=o.placement,n=o.overlayClassName,c=pe(o,Be),r=me(c,["title","content","cancelText","okText","onUpdate:visible","onConfirm","onCancel"]),d=Ce(I.value,n);return i(xe,l(l({},r),{},{prefixCls:s.value,placement:e,onVisibleChange:q,visible:g.value,overlayClassName:d,transitionName:ye(W.value,"zoom-big",o.transitionName),ref:x}),{default:function(){return[be(((a=t.default)===null||a===void 0?void 0:a.call(t))||[],{onKeydown:function(C){F(C)}},!1)]},title:J})}}});const Ve=ne(Ne);export{Ve as _};
