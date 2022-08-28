import{d as ee,P as T,r as S,m as q,f as o,a as d,y as $,g as Ce,h as A,bf as He,x as Me,F as Se,A as yn,aJ as Ke,j as de,p as N,ab as Ae,br as Ee,bs as Xe,ao as gn,ap as bn,W as ue,Y as we,ac as _e,U as xe,af as Je,b6 as Te,a3 as hn,a7 as Ze,b8 as Cn,H as Qe,bb as ke,$ as Mn,a0 as Kn,a1 as In,a2 as Pn,bt as $e,e as Sn,bu as wn,D as _n,a4 as Fe,at as Ie,bv as xn}from"./index.be9348fa.js";import{s as be}from"./shallowequal.ef3f5804.js";import{b as On,a as Rn}from"./_arrayIncludesWith.91d14080.js";import{O as he}from"./Overflow.9c7d9675.js";import{c as An}from"./collapseMotion.ac7ef052.js";var ve={adjustX:1,adjustY:1},fe=[0,0],En={topLeft:{points:["bl","tl"],overflow:ve,offset:[0,-4],targetOffset:fe},topCenter:{points:["bc","tc"],overflow:ve,offset:[0,-4],targetOffset:fe},topRight:{points:["br","tr"],overflow:ve,offset:[0,-4],targetOffset:fe},bottomLeft:{points:["tl","bl"],overflow:ve,offset:[0,4],targetOffset:fe},bottomCenter:{points:["tc","bc"],overflow:ve,offset:[0,4],targetOffset:fe},bottomRight:{points:["tr","br"],overflow:ve,offset:[0,4],targetOffset:fe}};const kn=En;var Fn=globalThis&&globalThis.__rest||function(u,e){var i={};for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&e.indexOf(a)<0&&(i[a]=u[a]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(u);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(u,a[l])&&(i[a[l]]=u[a[l]]);return i};const vt=ee({props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:T.string.def("rc-dropdown"),transitionName:String,overlayClassName:T.string.def(""),openClassName:String,animation:T.any,align:T.object,overlayStyle:{type:Object,default:void 0},placement:T.string.def("bottomLeft"),overlay:T.any,trigger:T.oneOfType([T.string,T.arrayOf(T.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:T.array,hideAction:T.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:T.number.def(.15),mouseLeaveDelay:T.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,i){var a=i.slots,l=i.emit,p=i.expose,r=S(!!e.visible);q(function(){return e.visible},function(g){g!==void 0&&(r.value=g)});var v=S();p({triggerRef:v});var f=function(c){e.visible===void 0&&(r.value=!1),l("overlayClick",c)},w=function(c){e.visible===void 0&&(r.value=c),l("visibleChange",c)},m=function(){var c,M=(c=a.overlay)===null||c===void 0?void 0:c.call(a),E={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:f,getPopupContainer:function(){return v.value.getPopupDomNode()}};return d(Se,null,[e.arrow&&d("div",{class:"".concat(e.prefixCls,"-arrow")},null),Me(M,E,!1)])},y=o(function(){var g=e.minOverlayWidthMatchTrigger,c=g===void 0?!e.alignPoint:g;return c}),_=function(){var c,M=(c=a.default)===null||c===void 0?void 0:c.call(a);return r.value&&M?Me(M[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):M},b=o(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var g=e.prefixCls,c=e.arrow,M=e.showAction,E=e.overlayStyle,G=e.trigger,x=e.placement,K=e.align,j=e.getPopupContainer,H=e.transitionName,k=e.animation,C=e.overlayClassName,I=Fn(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return d(He,$($({},I),{},{prefixCls:g,ref:v,popupClassName:Ce(C,A({},"".concat(g,"-show-arrow"),c)),popupStyle:E,builtinPlacements:kn,action:G,showAction:M,hideAction:b.value||[],popupPlacement:x,popupAlign:K,popupTransitionName:H,popupAnimation:k,popupVisible:r.value,stretch:y.value?"minWidth":"",onPopupVisibleChange:w,getPopupContainer:j}),{popup:m,default:_})}}});var Nn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Tn=Nn;function ze(u){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),a.forEach(function(l){jn(u,l,i[l])})}return u}function jn(u,e,i){return e in u?Object.defineProperty(u,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):u[e]=i,u}var je=function(e,i){var a=ze({},e,i.attrs);return d(yn,ze({},a,{icon:Tn}),null)};je.displayName="EllipsisOutlined";je.inheritAttrs=!1;const Dn=je;var en=Symbol("menuContextKey"),nn=function(e){Ke(en,e)},ie=function(){return de(en)},tn=Symbol("ForceRenderKey"),Ln=function(e){Ke(tn,e)},an=function(){return de(tn,!1)},ln=Symbol("menuFirstLevelContextKey"),un=function(e){Ke(ln,e)},Vn=function(){return de(ln,!0)},Oe=ee({name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,i){var a=i.slots,l=ie(),p=N({},l);return e.mode!==void 0&&(p.mode=Ae(e,"mode")),e.isRootMenu!==void 0&&(p.isRootMenu=Ae(e,"isRootMenu")),e.overflowDisabled!==void 0&&(p.overflowDisabled=Ae(e,"overflowDisabled")),nn(p),function(){var r;return(r=a.default)===null||r===void 0?void 0:r.call(a)}}});const Bn=nn;function $n(){}var zn=1/0,Wn=Ee&&1/Xe(new Ee([,-0]))[1]==zn?function(u){return new Ee(u)}:$n;const Yn=Wn;var Un=200;function qn(u,e,i){var a=-1,l=On,p=u.length,r=!0,v=[],f=v;if(i)r=!1,l=Rn;else if(p>=Un){var w=e?null:Yn(u);if(w)return Xe(w);r=!1,l=bn,f=new gn}else f=e?[]:v;e:for(;++a<p;){var m=u[a],y=e?e(m):m;if(m=i||m!==0?m:0,r&&y===y){for(var _=f.length;_--;)if(f[_]===y)continue e;e&&f.push(y),v.push(m)}else l(f,y,i)||(f!==v&&f.push(y),v.push(m))}return v}function Ne(u){return u&&u.length?qn(u):[]}var Pe="$$__vc-menu-more__key",on=Symbol("KeyPathContext"),De=function(){return de(on,{parentEventKeys:o(function(){return[]}),parentKeys:o(function(){return[]}),parentInfo:{}})},Gn=function(e,i,a){var l=De(),p=l.parentEventKeys,r=l.parentKeys,v=o(function(){return[].concat(ue(p.value),[e])}),f=o(function(){return[].concat(ue(r.value),[i])});return Ke(on,{parentEventKeys:v,parentKeys:f,parentInfo:a}),f},rn=Symbol("measure"),We=ee({setup:function(e,i){var a=i.slots;return Ke(rn,!0),function(){var l;return(l=a.default)===null||l===void 0?void 0:l.call(a)}}}),sn=function(){return de(rn,!1)};const Hn=Gn;function cn(u){var e=ie(),i=e.mode,a=e.rtl,l=e.inlineIndent;return o(function(){return i.value!=="inline"?null:a.value?{paddingRight:"".concat(u.value*l.value,"px")}:{paddingLeft:"".concat(u.value*l.value,"px")}})}var Xn=0,Jn=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:T.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const Zn=ee({name:"AMenuItem",inheritAttrs:!1,props:Jn(),slots:["icon","title"],setup:function(e,i){var a=i.slots,l=i.emit,p=i.attrs,r=Ze(),v=sn(),f=we(r.vnode.key)==="symbol"?String(r.vnode.key):r.vnode.key;_e(we(r.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(f),'"` not support Symbol type'));var w="menu_item_".concat(++Xn,"_$$_").concat(f),m=De(),y=m.parentEventKeys,_=m.parentKeys,b=ie(),g=b.prefixCls,c=b.activeKeys,M=b.disabled,E=b.changeActiveKeys,G=b.rtl,x=b.inlineCollapsed,K=b.siderCollapsed,j=b.onItemClick,H=b.selectedKeys,k=b.registerMenuInfo,C=b.unRegisterMenuInfo,I=Vn(),V=S(!1),z=o(function(){return[].concat(ue(_.value),[f])}),X={eventKey:w,key:f,parentEventKeys:y,parentKeys:_,isLeaf:!0};k(w,X),xe(function(){C(w)}),q(c,function(){V.value=!!c.value.find(function(t){return t===f})},{immediate:!0});var U=o(function(){return M.value||e.disabled}),ne=o(function(){return H.value.includes(f)}),oe=o(function(){var t,n="".concat(g.value,"-item");return t={},A(t,"".concat(n),!0),A(t,"".concat(n,"-danger"),e.danger),A(t,"".concat(n,"-active"),V.value),A(t,"".concat(n,"-selected"),ne.value),A(t,"".concat(n,"-disabled"),U.value),t}),re=function(n){return{key:f,eventKey:w,keyPath:z.value,eventKeyPath:[].concat(ue(y.value),[w]),domEvent:n,item:N(N({},e),p)}},pe=function(n){if(!U.value){var s=re(n);l("click",n),j(s)}},me=function(n){U.value||(E(z.value),l("mouseenter",n))},J=function(n){U.value||(E([]),l("mouseleave",n))},se=function(n){if(l("keydown",n),n.which===Cn.ENTER){var s=re(n);l("click",n),j(s)}},ce=function(n){E(z.value),l("focus",n)},B=function(n,s){var O=d("span",{class:"".concat(g.value,"-title-content")},[s]);return(!n||Qe(s)&&s.type==="span")&&s&&x.value&&I&&typeof s=="string"?d("div",{class:"".concat(g.value,"-inline-collapsed-noicon")},[s.charAt(0)]):O},ye=cn(o(function(){return z.value.length}));return function(){var t,n,s,O;if(v)return null;var h=(n=e.title)!==null&&n!==void 0?n:(s=a.title)===null||s===void 0?void 0:s.call(a),D=Je((O=a.default)===null||O===void 0?void 0:O.call(a)),R=D.length,L=h;typeof h>"u"?L=I&&R?D:"":h===!1&&(L="");var W={title:L};!K.value&&!x.value&&(W.title=null,W.visible=!1);var te={};e.role==="option"&&(te["aria-selected"]=ne.value);var ae=Te(a,e,"icon");return d(hn,$($({},W),{},{placement:G.value?"left":"right",overlayClassName:"".concat(g.value,"-inline-collapsed-tooltip")}),{default:function(){return[d(he.Item,$($($({component:"li"},p),{},{id:e.id,style:N(N({},p.style||{}),ye.value),class:[oe.value,(t={},A(t,"".concat(p.class),!!p.class),A(t,"".concat(g.value,"-item-only-child"),(ae?R+1:R)===1),t)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":f,"aria-disabled":e.disabled},te),{},{onMouseenter:me,onMouseleave:J,onClick:pe,onKeydown:se,onFocus:ce,title:typeof h=="string"?h:void 0}),{default:function(){return[Me(ae,{class:"".concat(g.value,"-item-icon")},!1),B(ae,D)]}})]}})}}});var Q={adjustX:1,adjustY:1},Qn={topLeft:{points:["bl","tl"],overflow:Q,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Q,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Q,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Q,offset:[4,0]}},et={topLeft:{points:["bl","tl"],overflow:Q,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Q,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Q,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Q,offset:[4,0]}},nt={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const Ye=ee({name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,i){var a=i.slots,l=i.emit,p=S(!1),r=ie(),v=r.getPopupContainer,f=r.rtl,w=r.subMenuOpenDelay,m=r.subMenuCloseDelay,y=r.builtinPlacements,_=r.triggerSubMenuAction,b=r.isRootMenu,g=r.forceSubMenuRender,c=r.motion,M=r.defaultMotions,E=an(),G=o(function(){return f.value?N(N({},et),y.value):N(N({},Qn),y.value)}),x=o(function(){return nt[e.mode]}),K=S();q(function(){return e.visible},function(k){ke.cancel(K.value),K.value=ke(function(){p.value=k})},{immediate:!0}),xe(function(){ke.cancel(K.value)});var j=function(C){l("visibleChange",C)},H=o(function(){var k,C,I=c.value||((k=M.value)===null||k===void 0?void 0:k[e.mode])||((C=M.value)===null||C===void 0?void 0:C.other),V=typeof I=="function"?I():I;return V?Mn(V.name,{css:!0}):void 0});return function(){var k=e.prefixCls,C=e.popupClassName,I=e.mode,V=e.popupOffset,z=e.disabled;return d(He,{prefixCls:k,popupClassName:Ce("".concat(k,"-popup"),A({},"".concat(k,"-rtl"),f.value),C),stretch:I==="horizontal"?"minWidth":null,getPopupContainer:b.value?v.value:function(X){return X.parentNode},builtinPlacements:G.value,popupPlacement:x.value,popupVisible:p.value,popupAlign:V&&{offset:V},action:z?[]:[_.value],mouseEnterDelay:w.value,mouseLeaveDelay:m.value,onPopupVisibleChange:j,forceRender:E||g.value,popupAnimation:H.value},{popup:a.popup,default:a.default})}}});var vn=function(e,i){var a=i.slots,l=i.attrs,p,r=ie(),v=r.prefixCls,f=r.mode;return d("ul",$($({},l),{},{class:Ce(v.value,"".concat(v.value,"-sub"),"".concat(v.value,"-").concat(f.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(p=a.default)===null||p===void 0?void 0:p.call(a)])};vn.displayName="SubMenuList";const fn=vn,tt=ee({name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,i){var a=i.slots,l=o(function(){return"inline"}),p=ie(),r=p.motion,v=p.mode,f=p.defaultMotions,w=o(function(){return v.value===l.value}),m=S(!w.value),y=o(function(){return w.value?e.open:!1});q(v,function(){w.value&&(m.value=!1)},{flush:"post"});var _=o(function(){var b,g,c=r.value||((b=f.value)===null||b===void 0?void 0:b[l.value])||((g=f.value)===null||g===void 0?void 0:g.other),M=typeof c=="function"?c():c;return N(N({},M),{appear:e.keyPath.length<=1})});return function(){var b;return m.value?null:d(Oe,{mode:l.value},{default:function(){return[d(Kn,_.value,{default:function(){return[In(d(fn,{id:e.id},{default:function(){return[(b=a.default)===null||b===void 0?void 0:b.call(a)]}}),[[Pn,y.value]])]}})]}})}}});var Ue=0,at=function(){return{icon:T.any,title:T.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const qe=ee({name:"ASubMenu",inheritAttrs:!1,props:at(),slots:["icon","title","expandIcon"],setup:function(e,i){var a=i.slots,l=i.attrs,p=i.emit,r,v;un(!1);var f=sn(),w=Ze(),m=we(w.vnode.key)==="symbol"?String(w.vnode.key):w.vnode.key;_e(we(w.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(m),'"` not support Symbol type'));var y=$e(m)?m:"sub_menu_".concat(++Ue,"_$$_not_set_key"),_=(r=e.eventKey)!==null&&r!==void 0?r:$e(m)?"sub_menu_".concat(++Ue,"_$$_").concat(m):y,b=De(),g=b.parentEventKeys,c=b.parentInfo,M=b.parentKeys,E=o(function(){return[].concat(ue(M.value),[y])}),G=S([]),x={eventKey:_,key:y,parentEventKeys:g,childrenEventKeys:G,parentKeys:M};(v=c.childrenEventKeys)===null||v===void 0||v.value.push(_),xe(function(){var F;c.childrenEventKeys&&(c.childrenEventKeys.value=(F=c.childrenEventKeys)===null||F===void 0?void 0:F.value.filter(function(P){return P!=_}))}),Hn(_,y,x);var K=ie(),j=K.prefixCls,H=K.activeKeys,k=K.disabled,C=K.changeActiveKeys,I=K.mode,V=K.inlineCollapsed,z=K.antdMenuTheme,X=K.openKeys,U=K.overflowDisabled,ne=K.onOpenChange,oe=K.registerMenuInfo,re=K.unRegisterMenuInfo,pe=K.selectedSubMenuKeys,me=K.expandIcon,J=m!=null,se=!f&&(an()||!J);Ln(se),(f&&J||!f&&!J||se)&&(oe(_,x),xe(function(){re(_)}));var ce=o(function(){return"".concat(j.value,"-submenu")}),B=o(function(){return k.value||e.disabled}),ye=S(),t=S(),n=o(function(){return X.value.includes(y)}),s=o(function(){return!U.value&&n.value}),O=o(function(){return pe.value.includes(y)}),h=S(!1);q(H,function(){h.value=!!H.value.find(function(F){return F===y})},{immediate:!0});var D=function(P){B.value||(p("titleClick",P,y),I.value==="inline"&&ne(y,!n.value))},R=function(P){B.value||(C(E.value),p("mouseenter",P))},L=function(P){B.value||(C([]),p("mouseleave",P))},W=cn(o(function(){return E.value.length})),te=function(P){I.value!=="inline"&&ne(y,P)},ae=function(){C(E.value)},ge=_&&"".concat(_,"-popup"),Le=o(function(){return Ce(j.value,"".concat(j.value,"-").concat(z.value),e.popupClassName)}),dn=function(P,Y){if(!Y)return V.value&&!M.value.length&&P&&typeof P=="string"?d("div",{class:"".concat(j.value,"-inline-collapsed-noicon")},[P.charAt(0)]):d("span",{class:"".concat(j.value,"-title-content")},[P]);var Z=Qe(P)&&P.type==="span";return d(Se,null,[Me(Y,{class:"".concat(j.value,"-item-icon")},!1),Z?P:d("span",{class:"".concat(j.value,"-title-content")},[P])])},Re=o(function(){return I.value!=="inline"&&E.value.length>1?"vertical":I.value}),pn=o(function(){return I.value==="horizontal"?"vertical":I.value}),mn=o(function(){return Re.value==="horizontal"?"vertical":Re.value}),Ve=function(){var P=ce.value,Y=Te(a,e,"icon"),Z=e.expandIcon||a.expandIcon||me.value,le=dn(Te(a,e,"title"),Y);return d("div",{style:W.value,class:"".concat(P,"-title"),tabindex:B.value?null:-1,ref:ye,title:typeof le=="string"?le:null,"data-menu-id":y,"aria-expanded":s.value,"aria-haspopup":!0,"aria-controls":ge,"aria-disabled":B.value,onClick:D,onFocus:ae},[le,I.value!=="horizontal"&&Z?Z(N(N({},e),{isOpen:s.value})):d("i",{class:"".concat(P,"-arrow")},null)])};return function(){var F,P;if(f)return J?(P=a.default)===null||P===void 0?void 0:P.call(a):null;var Y=ce.value,Z=function(){return null};return!U.value&&I.value!=="inline"?Z=function(){return d(Ye,{mode:Re.value,prefixCls:Y,visible:!e.internalPopupClose&&s.value,popupClassName:Le.value,popupOffset:e.popupOffset,disabled:B.value,onVisibleChange:te},{default:function(){return[Ve()]},popup:function(){return d(Oe,{mode:mn.value,isRootMenu:!1},{default:function(){return[d(fn,{id:ge,ref:t},{default:a.default})]}})}})}:Z=function(){return d(Ye,null,{default:Ve})},d(Oe,{mode:pn.value},{default:function(){return[d(he.Item,$($({component:"li"},l),{},{role:"none",class:Ce(Y,"".concat(Y,"-").concat(I.value),l.class,(F={},A(F,"".concat(Y,"-open"),s.value),A(F,"".concat(Y,"-active"),h.value),A(F,"".concat(Y,"-selected"),O.value),A(F,"".concat(Y,"-disabled"),B.value),F)),onMouseenter:R,onMouseleave:L,"data-submenu-id":y}),{default:function(){return d(Se,null,[Z(),!U.value&&d(tt,{id:ge,open:s.value,keyPath:E.value},{default:a.default})])}})]}})}}});var lt=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},Ge=[];const ft=ee({name:"AMenu",inheritAttrs:!1,props:lt(),slots:["expandIcon","overflowedIndicator"],setup:function(e,i){var a=i.slots,l=i.emit,p=i.attrs,r=Sn("menu",e),v=r.prefixCls,f=r.direction,w=r.getPrefixCls,m=S({}),y=de(wn,S(void 0)),_=o(function(){return y.value!==void 0?y.value:e.inlineCollapsed}),b=S(!1);_n(function(){b.value=!0}),Fe(function(){_e(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),_e(!(y.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var g=S([]),c=S([]),M=S({});q(m,function(){for(var t={},n=0,s=Object.values(m.value);n<s.length;n++){var O=s[n];t[O.key]=O}M.value=t},{flush:"post"}),Fe(function(){if(e.activeKey!==void 0){var t=[],n=e.activeKey?M.value[e.activeKey]:void 0;n&&e.activeKey!==void 0?t=Ne([].concat(Ie(n.parentKeys),e.activeKey)):t=[],be(g.value,t)||(g.value=t)}}),q(function(){return e.selectedKeys},function(t){t&&(c.value=t.slice())},{immediate:!0,deep:!0});var E=S([]);q([M,c],function(){var t=[];c.value.forEach(function(n){var s=M.value[n];s&&(t=t.concat(Ie(s.parentKeys)))}),t=Ne(t),be(E.value,t)||(E.value=t)},{immediate:!0});var G=function(n){if(!!e.selectable){var s=n.key,O=c.value.includes(s),h;e.multiple?O?h=c.value.filter(function(R){return R!==s}):h=[].concat(ue(c.value),[s]):h=[s];var D=N(N({},n),{selectedKeys:h});be(h,c.value)||(e.selectedKeys===void 0&&(c.value=h),l("update:selectedKeys",h),O&&e.multiple?l("deselect",D):l("select",D)),C.value!=="inline"&&!e.multiple&&x.value.length&&z(Ge)}},x=S([]);q(function(){return e.openKeys},function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x.value;be(x.value,t)||(x.value=t.slice())},{immediate:!0,deep:!0});var K,j=function(n){clearTimeout(K),K=setTimeout(function(){e.activeKey===void 0&&(g.value=n),l("update:activeKey",n[n.length-1])})},H=o(function(){return!!e.disabled}),k=o(function(){return f.value==="rtl"}),C=S("vertical"),I=S(!1);Fe(function(){(e.mode==="inline"||e.mode==="vertical")&&_.value?(C.value="vertical",I.value=_.value):(C.value=e.mode,I.value=!1)});var V=o(function(){return C.value==="inline"}),z=function(n){x.value=n,l("update:openKeys",n),l("openChange",n)},X=S(x.value),U=S(!1);q(x,function(){V.value&&(X.value=x.value)},{immediate:!0}),q(V,function(){if(!U.value){U.value=!0;return}V.value?x.value=X.value:z(Ge)},{immediate:!0});var ne=o(function(){var t;return t={},A(t,"".concat(v.value),!0),A(t,"".concat(v.value,"-root"),!0),A(t,"".concat(v.value,"-").concat(C.value),!0),A(t,"".concat(v.value,"-inline-collapsed"),I.value),A(t,"".concat(v.value,"-rtl"),k.value),A(t,"".concat(v.value,"-").concat(e.theme),!0),t}),oe=o(function(){return w()}),re=o(function(){return{horizontal:{name:"".concat(oe.value,"-slide-up")},inline:An,other:{name:"".concat(oe.value,"-zoom-big")}}});un(!0);var pe=function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=[],O=m.value;return n.forEach(function(h){var D=O[h],R=D.key,L=D.childrenEventKeys;s.push.apply(s,[R].concat(ue(t(Ie(L)))))}),s},me=function(n){l("click",n),G(n)},J=function(n,s){var O=M.value[n].childrenEventKeys,h=x.value.filter(function(R){return R!==n});if(s)h.push(n);else if(C.value!=="inline"){var D=pe(Ie(O));h=Ne(h.filter(function(R){return!D.includes(R)}))}be(x,h)||z(h)},se=function(n,s){m.value=N(N({},m.value),A({},n,s))},ce=function(n){delete m.value[n],m.value=N({},m.value)},B=S(0),ye=o(function(){return e.expandIcon||a.expandIcon?function(t){var n=e.expandIcon||a.expandIcon;return n=typeof n=="function"?n(t):n,Me(n,{class:"".concat(v.value,"-submenu-expand-icon")},!1)}:null});return Bn({store:m,prefixCls:v,activeKeys:g,openKeys:x,selectedKeys:c,changeActiveKeys:j,disabled:H,rtl:k,mode:C,inlineIndent:o(function(){return e.inlineIndent}),subMenuCloseDelay:o(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:o(function(){return e.subMenuOpenDelay}),builtinPlacements:o(function(){return e.builtinPlacements}),triggerSubMenuAction:o(function(){return e.triggerSubMenuAction}),getPopupContainer:o(function(){return e.getPopupContainer}),inlineCollapsed:I,antdMenuTheme:o(function(){return e.theme}),siderCollapsed:y,defaultMotions:o(function(){return b.value?re.value:null}),motion:o(function(){return b.value?e.motion:null}),overflowDisabled:S(void 0),onOpenChange:J,onItemClick:me,registerMenuInfo:se,unRegisterMenuInfo:ce,selectedSubMenuKeys:E,isRootMenu:S(!0),expandIcon:ye,forceSubMenuRender:o(function(){return e.forceSubMenuRender})}),function(){var t,n,s=Je((t=a.default)===null||t===void 0?void 0:t.call(a)),O=B.value>=s.length-1||C.value!=="horizontal"||e.disabledOverflow,h=C.value!=="horizontal"||e.disabledOverflow?s:s.map(function(R,L){return d(Oe,{key:R.key,overflowDisabled:L>B.value},{default:function(){return R}})}),D=((n=a.overflowedIndicator)===null||n===void 0?void 0:n.call(a))||d(Dn,null,null);return d(he,$($({},p),{},{onMousedown:e.onMousedown,prefixCls:"".concat(v.value,"-overflow"),component:"ul",itemComponent:Zn,class:[ne.value,p.class],role:"menu",id:e.id,data:h,renderRawItem:function(L){return L},renderRawRest:function(L){var W=L.length,te=W?s.slice(-W):null;return d(Se,null,[d(qe,{eventKey:Pe,key:Pe,title:D,disabled:O,internalPopupClose:W===0},{default:function(){return te}}),d(We,null,{default:function(){return[d(qe,{eventKey:Pe,key:Pe,title:D,disabled:O,internalPopupClose:W===0},{default:function(){return te}})]}})])},maxCount:C.value!=="horizontal"||e.disabledOverflow?he.INVALIDATE:he.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(L){B.value=L}}),{default:function(){return[d(xn,{to:"body"},{default:function(){return[d("div",{style:{display:"none"},"aria-hidden":!0},[d(We,null,{default:function(){return[h]}})])]}})]}})}}});export{vt as D,Dn as E,ft as M,qe as S,Zn as _,sn as a,ie as u};
