import{c1 as qe,c2 as Je,r as P,b0 as me,s as o,H as be,Q as _e,as as Ve,h as Z,T as Qe,j as Ke,f as s,d as se,a5 as Oe,a6 as Ae,q as ue,p as J,S as et,bZ as tt,a as u,F as Ee,c3 as rt,g as re,bJ as te,b5 as Ge,aN as nt,c4 as at,R as je,P as it,y as ot,A as de,a7 as lt,bY as ut,bA as st,e as Ue,bx as Le,ar as vt}from"./index.471dd628.js";import{a as ct,g as Ze}from"./css.1dd79e5e.js";import{E as ft}from"./EyeOutlined.2f12ad7c.js";var mt="[object Number]";function dt(r){return typeof r=="number"||qe(r)&&Je(r)==mt}function gt(r){var e=P(null),t=me(o({},r)),n=P([]),a=function(p){e.value===null&&(n.value=[],e.value=_e(function(){var d;n.value.forEach(function(R){d=o(o({},d),R)}),Ve(t,d),e.value=null})),n.value.push(p)};return be(function(){e.value&&_e.cancel(e.value)}),[t,a]}function ke(r,e,t,n){var a=e+t,i=(t-n)/2;if(t>n){if(e>0)return Z({},r,i);if(e<0&&a<n)return Z({},r,-i)}else if(e<0||a>n)return Z({},r,e<0?i:-i);return{}}function pt(r,e,t,n){var a=ct(),i=a.width,p=a.height,d=null;return r<=i&&e<=p?d={x:0,y:0}:(r>i||e>p)&&(d=o(o({},ke("x",t,r,i)),ke("y",n,e,p))),d}var Ie=Symbol("previewGroupContext"),ye={provide:function(e){Qe(Ie,e)},inject:function(){return Ke(Ie,{isPreviewGroup:P(!1),previewUrls:s(function(){return new Map}),setPreviewUrls:function(){},current:P(null),setCurrent:function(){},setShowPreview:function(){},setMousePosition:function(){},registerImage:null,rootClassName:""})}},wt=se({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:{previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:function(){return{}}}},setup:function(e,t){var n=t.slots,a=s(function(){var m={visible:void 0,onVisibleChange:function(){},getContainer:void 0,current:0};return Oe(e.preview)==="object"?Ye(e.preview,m):m}),i=me(new Map),p=P(),d=s(function(){return a.value.visible}),R=s(function(){return a.value.getContainer}),G=function(v,M){var C,I;(C=(I=a.value).onVisibleChange)===null||C===void 0||C.call(I,v,M)},b=Ae(!!d.value,{value:d,onChange:G}),h=ue(b,2),U=h[0],g=h[1],y=P(null),Q=s(function(){return d.value!==void 0}),F=s(function(){return Array.from(i.keys())}),O=s(function(){return F.value[a.value.current]}),L=s(function(){return new Map(Array.from(i).filter(function(m){var v=ue(m,2),M=v[1].canPreview;return!!M}).map(function(m){var v=ue(m,2),M=v[0],C=v[1].url;return[M,C]}))}),z=function(v,M){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;i.set(v,{url:M,canPreview:C})},k=function(v){p.value=v},x=function(v){y.value=v},S=function(v,M){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,I=function(){i.delete(v)};return i.set(v,{url:M,canPreview:C}),I},D=function(v){v?.stopPropagation(),g(!1),x(null)};return J(O,function(m){k(m)},{immediate:!0,flush:"post"}),et(function(){U.value&&Q.value&&k(O.value)},{flush:"post"}),ye.provide({isPreviewGroup:P(!0),previewUrls:L,setPreviewUrls:z,current:p,setCurrent:k,setShowPreview:g,setMousePosition:x,registerImage:S}),function(){var m=Ve({},(tt(a.value),a.value));return u(Ee,null,[n.default&&n.default(),u(Fe,o(o({},m),{},{"ria-hidden":!U.value,visible:U.value,prefixCls:e.previewPrefixCls,onClose:D,mousePosition:y.value,src:L.value.get(p.value),icons:e.icons,getContainer:R.value}),null)])}}});const Te=wt;var X={x:0,y:0},ht=o(o({},rt()),{},{src:String,alt:String,rootClassName:String,icons:{type:Object,default:function(){return{}}}}),Ct=se({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:ht,emits:["close","afterClose"],setup:function(e,t){var n=t.emit,a=t.attrs,i=me(e.icons),p=i.rotateLeft,d=i.rotateRight,R=i.zoomIn,G=i.zoomOut,b=i.close,h=i.left,U=i.right,g=P(1),y=P(0),Q=gt(X),F=ue(Q,2),O=F[0],L=F[1],z=function(){return n("close")},k=P(),x=me({originX:0,originY:0,deltaX:0,deltaY:0}),S=P(!1),D=ye.inject(),m=D.previewUrls,v=D.current,M=D.isPreviewGroup,C=D.setCurrent,I=s(function(){return m.value.size}),_=s(function(){return Array.from(m.value.keys())}),j=s(function(){return _.value.indexOf(v.value)}),ge=s(function(){return M.value?m.value.get(v.value):e.src}),ne=s(function(){return M.value&&I.value>1}),ae=P({wheelDirection:0}),H=function(){g.value=1,y.value=0,L(X),n("afterClose")},Y=function(){g.value++,L(X)},ie=function(){g.value>1&&g.value--,L(X)},f=function(){y.value+=90},w=function(){y.value-=90},$=function(l){l.preventDefault(),l.stopPropagation(),j.value>0&&C(_.value[j.value-1])},V=function(l){l.preventDefault(),l.stopPropagation(),j.value<I.value-1&&C(_.value[j.value+1])},A=re(Z({},"".concat(e.prefixCls,"-moving"),S.value)),pe="".concat(e.prefixCls,"-operations-operation"),ve="".concat(e.prefixCls,"-operations-icon"),we=[{icon:b,onClick:z,type:"close"},{icon:R,onClick:Y,type:"zoomIn"},{icon:G,onClick:ie,type:"zoomOut",disabled:s(function(){return g.value===1})},{icon:d,onClick:f,type:"rotateRight"},{icon:p,onClick:w,type:"rotateLeft"}],oe=function(){if(e.visible&&S.value){var l=k.value.offsetWidth*g.value,N=k.value.offsetHeight*g.value,W=Ze(k.value),E=W.left,B=W.top,T=y.value%180!==0;S.value=!1;var K=pt(T?N:l,T?l:N,E,B);K&&L(o({},K))}},he=function(l){l.button===0&&(l.preventDefault(),l.stopPropagation(),x.deltaX=l.pageX-O.x,x.deltaY=l.pageY-O.y,x.originX=O.x,x.originY=O.y,S.value=!0)},ce=function(l){e.visible&&S.value&&L({x:l.pageX-x.deltaX,y:l.pageY-x.deltaY})},fe=function(l){if(!!e.visible){l.preventDefault();var N=l.deltaY;ae.value={wheelDirection:N}}},Ce=function(l){!e.visible||!ne.value||(l.preventDefault(),l.keyCode===je.LEFT?j.value>0&&C(_.value[j.value-1]):l.keyCode===je.RIGHT&&j.value<I.value-1&&C(_.value[j.value+1]))},Pe=function(){e.visible&&(g.value!==1&&(g.value=1),(O.x!==X.x||O.y!==X.y)&&L(X))},le=function(){};return be(function(){J([function(){return e.visible},S],function(){le();var c,l,N=te(window,"mouseup",oe,!1),W=te(window,"mousemove",ce,!1),E=te(window,"wheel",fe,{passive:!1}),B=te(window,"keydown",Ce,!1);try{window.top!==window.self&&(c=te(window.top,"mouseup",oe,!1),l=te(window.top,"mousemove",ce,!1))}catch{}le=function(){N.remove(),W.remove(),E.remove(),B.remove(),c&&c.remove(),l&&l.remove()}},{flush:"post",immediate:!0}),J([ae],function(){var c=ae.value.wheelDirection;c>0?ie():c<0&&Y()})}),Ge(function(){le()}),function(){var c=e.visible,l=e.prefixCls,N=e.rootClassName;return u(at,o(o({},a),{},{transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:l,onClose:z,afterClose:H,visible:c,wrapClassName:A,rootClassName:N,getContainer:e.getContainer}),{default:function(){return[u("ul",{class:"".concat(e.prefixCls,"-operations")},[we.map(function(E){var B=E.icon,T=E.onClick,K=E.type,ee=E.disabled;return u("li",{class:re(pe,Z({},"".concat(e.prefixCls,"-operations-operation-disabled"),ee&&ee?.value)),onClick:T,key:K},[nt(B,{class:ve})])})]),u("div",{class:"".concat(e.prefixCls,"-img-wrapper"),style:{transform:"translate3d(".concat(O.x,"px, ").concat(O.y,"px, 0)")}},[u("img",{onMousedown:he,onDblclick:Pe,ref:k,class:"".concat(e.prefixCls,"-img"),src:ge.value,alt:e.alt,style:{transform:"scale3d(".concat(g.value,", ").concat(g.value,", 1) rotate(").concat(y.value,"deg)")}},null)]),ne.value&&u("div",{class:re("".concat(e.prefixCls,"-switch-left"),Z({},"".concat(e.prefixCls,"-switch-left-disabled"),j.value<=0)),onClick:$},[h]),ne.value&&u("div",{class:re("".concat(e.prefixCls,"-switch-right"),Z({},"".concat(e.prefixCls,"-switch-right-disabled"),j.value>=I.value-1)),onClick:V},[U])]}})}}});const Fe=Ct;var Pt=["icons","maskClassName"],He=function(){return{src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,previewMask:{type:[Boolean,Function],default:void 0},placeholder:it.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}},Ye=function(e,t){var n=o({},e);return Object.keys(t).forEach(function(a){e[a]===void 0&&(n[a]=t[a])}),n},bt=0,We=se({compatConfig:{MODE:3},name:"Image",inheritAttrs:!1,props:He(),emits:["click","error"],setup:function(e,t){var n=t.attrs,a=t.slots,i=t.emit,p=s(function(){return e.prefixCls}),d=s(function(){return"".concat(p.value,"-preview")}),R=s(function(){var f={visible:void 0,onVisibleChange:function(){},getContainer:void 0};return Oe(e.preview)==="object"?Ye(e.preview,f):f}),G=s(function(){var f;return(f=R.value.src)!==null&&f!==void 0?f:e.src}),b=s(function(){return e.placeholder&&e.placeholder!==!0||a.placeholder}),h=s(function(){return R.value.visible}),U=s(function(){return R.value.getContainer}),g=s(function(){return h.value!==void 0}),y=function(w,$){var V,A;(V=(A=R.value).onVisibleChange)===null||V===void 0||V.call(A,w,$)},Q=Ae(!!h.value,{value:h,onChange:y}),F=ue(Q,2),O=F[0],L=F[1];J(O,function(f,w){y(f,w)});var z=P(b.value?"loading":"normal");J(function(){return e.src},function(){z.value=b.value?"loading":"normal"});var k=P(null),x=s(function(){return z.value==="error"}),S=ye.inject(),D=S.isPreviewGroup,m=S.setCurrent,v=S.setShowPreview,M=S.setMousePosition,C=S.registerImage,I=P(bt++),_=s(function(){return e.preview&&!x.value}),j=function(){z.value="normal"},ge=function(w){z.value="error",i("error",w)},ne=function(w){if(!g.value){var $=Ze(w.target),V=$.left,A=$.top;D.value?(m(I.value),M({x:V,y:A})):k.value={x:V,y:A}}D.value?v(!0):L(!0),i("click",w)},ae=function(){L(!1),g.value||(k.value=null)},H=P(null);J(function(){return H},function(){z.value==="loading"&&H.value.complete&&(H.value.naturalWidth||H.value.naturalHeight)&&j()});var Y=function(){};be(function(){J([G,_],function(){if(Y(),!D.value)return function(){};Y=C(I.value,G.value,_.value),_.value||Y()},{flush:"post",immediate:!0})}),Ge(function(){Y()});var ie=function(w){return dt(w)?w+"px":w};return function(){var f=e.prefixCls,w=e.wrapperClassName,$=e.fallback,V=e.src,A=e.placeholder,pe=e.wrapperStyle,ve=e.rootClassName,we=n.width,oe=n.height,he=n.crossorigin,ce=n.decoding,fe=n.alt,Ce=n.sizes,Pe=n.srcset,le=n.usemap,c=n.class,l=n.style,N=R.value,W=N.icons,E=N.maskClassName,B=ot(N,Pt),T=re(f,w,ve,Z({},"".concat(f,"-error"),x.value)),K=x.value&&$?$:G.value,ee={crossorigin:he,decoding:ce,alt:fe,sizes:Ce,srcset:Pe,usemap:le,class:re("".concat(f,"-img"),Z({},"".concat(f,"-img-placeholder"),A===!0),c),style:o({height:oe},l)};return u(Ee,null,[u("div",{class:T,onClick:_.value?ne:function(Xe){i("click",Xe)},style:o({width:ie(we),height:ie(oe)},pe)},[u("img",o(o(o({},ee),x.value&&$?{src:$}:{onLoad:j,onError:ge,src:V}),{},{ref:H}),null),z.value==="loading"&&u("div",{"aria-hidden":"true",class:"".concat(f,"-placeholder")},[A||a.placeholder&&a.placeholder()]),a.previewMask&&_.value&&u("div",{class:["".concat(f,"-mask"),E]},[a.previewMask()])]),!D.value&&_.value&&u(Fe,o(o({},B),{},{"aria-hidden":!O.value,visible:O.value,prefixCls:d.value,onClose:ae,mousePosition:k.value,src:K,alt:fe,getContainer:U.value,icons:W,rootClassName:ve}),null)])}}});We.PreviewGroup=Te;const Ot=We;var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const xt=yt;function Ne(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){St(r,a,t[a])})}return r}function St(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var xe=function(e,t){var n=Ne({},e,t.attrs);return u(de,Ne({},n,{icon:xt}),null)};xe.displayName="RotateLeftOutlined";xe.inheritAttrs=!1;const Mt=xe;var Rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const _t=Rt;function ze(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){jt(r,a,t[a])})}return r}function jt(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Se=function(e,t){var n=ze({},e,t.attrs);return u(de,ze({},n,{icon:_t}),null)};Se.displayName="RotateRightOutlined";Se.inheritAttrs=!1;const Lt=Se;var kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const It=kt;function De(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){Nt(r,a,t[a])})}return r}function Nt(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Me=function(e,t){var n=De({},e,t.attrs);return u(de,De({},n,{icon:It}),null)};Me.displayName="ZoomInOutlined";Me.inheritAttrs=!1;const zt=Me;var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const $t=Dt;function $e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){Vt(r,a,t[a])})}return r}function Vt(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Re=function(e,t){var n=$e({},e,t.attrs);return u(de,$e({},n,{icon:$t}),null)};Re.displayName="ZoomOutOutlined";Re.inheritAttrs=!1;const At=Re;var Be={rotateLeft:u(Mt,null,null),rotateRight:u(Lt,null,null),zoomIn:u(zt,null,null),zoomOut:u(At,null,null),close:u(lt,null,null),left:u(ut,null,null),right:u(st,null,null)},Et=se({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:{previewPrefixCls:String},setup:function(e,t){var n=t.attrs,a=t.slots,i=Ue("image",e),p=i.getPrefixCls,d=s(function(){return p("image-preview",e.previewPrefixCls)});return function(){return u(Te,o(o({},o(o({},n),e)),{},{icons:Be,previewPrefixCls:d.value}),a)}}});const Gt=Et;var q=se({name:"AImage",inheritAttrs:!1,props:He(),setup:function(e,t){var n=t.slots,a=t.attrs,i=Ue("image",e),p=i.prefixCls,d=i.rootPrefixCls,R=i.configProvider,G=s(function(){var b=e.preview;if(b===!1)return b;var h=Oe(b)==="object"?b:{};return o(o({icons:Be},h),{},{transitionName:Le(d.value,"zoom",h.transitionName),maskTransitionName:Le(d.value,"fade",h.maskTransitionName)})});return function(){var b,h=((b=R.locale)===null||b===void 0?void 0:b.Image)||vt.Image,U=function(){return u("div",{class:"".concat(p.value,"-mask-info")},[u(ft,null,null),h?.preview])},g=e.previewMask,y=g===void 0?n.previewMask||U:g;return u(Ot,o(o({},o(o(o({},a),e),{},{prefixCls:p.value})),{},{preview:G.value}),o(o({},n),{},{previewMask:typeof y=="function"?y:null}))}}});q.PreviewGroup=Gt;q.install=function(r){return r.component(q.name,q),r.component(q.PreviewGroup.name,q.PreviewGroup),r};const Ft=q;export{Ft as _,Gt as a};
