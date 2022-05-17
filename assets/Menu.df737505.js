import{d as ee,P as T,K as S,S as q,f as r,a as d,Y as $,g as Ce,h as R,be as He,X as Me,F as Ke,A as yn,I as Ie,H as de,O as N,ak as Ae,c2 as Re,c3 as Xe,az as gn,aA as bn,a8 as ue,M as Se,al as we,N as xe,ao as Ze,b5 as Ne,D as hn,ag as Je,b7 as Cn,a0 as Qe,ba as Ee,ad as Mn,ab as Kn,s as In,ac as Pn,c4 as Be,e as Sn,c5 as wn,L as xn,ae as ke,at as $e}from"./index.c31bc572.js";import{s as be}from"./shallowequal.078d7f0e.js";import{b as On,a as _n}from"./_arrayIncludesWith.91d14080.js";import{O as he}from"./Overflow.5b0d2d9f.js";import{c as An}from"./collapseMotion.1abac316.js";var ce={adjustX:1,adjustY:1},fe=[0,0],Rn={topLeft:{points:["bl","tl"],overflow:ce,offset:[0,-4],targetOffset:fe},topCenter:{points:["bc","tc"],overflow:ce,offset:[0,-4],targetOffset:fe},topRight:{points:["br","tr"],overflow:ce,offset:[0,-4],targetOffset:fe},bottomLeft:{points:["tl","bl"],overflow:ce,offset:[0,4],targetOffset:fe},bottomCenter:{points:["tc","bc"],overflow:ce,offset:[0,4],targetOffset:fe},bottomRight:{points:["tr","br"],overflow:ce,offset:[0,4],targetOffset:fe}},En=Rn,kn=globalThis&&globalThis.__rest||function(u,e){var i={};for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&e.indexOf(a)<0&&(i[a]=u[a]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(u);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(u,a[l])&&(i[a[l]]=u[a[l]]);return i},vt=ee({props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:T.string.def("rc-dropdown"),transitionName:String,overlayClassName:T.string.def(""),openClassName:String,animation:T.any,align:T.object,overlayStyle:{type:Object,default:void 0},placement:T.string.def("bottomLeft"),overlay:T.any,trigger:T.oneOfType([T.string,T.arrayOf(T.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:T.array,hideAction:T.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:T.number.def(.15),mouseLeaveDelay:T.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,i){var a=i.slots,l=i.emit,p=i.expose,o=S(!!e.visible);q(function(){return e.visible},function(g){g!==void 0&&(o.value=g)});var c=S();p({triggerRef:c});var f=function(v){e.visible===void 0&&(o.value=!1),l("overlayClick",v)},w=function(v){e.visible===void 0&&(o.value=v),l("visibleChange",v)},m=function(){var v,M=(v=a.overlay)===null||v===void 0?void 0:v.call(a),E={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:f,getPopupContainer:function(){return c.value.getPopupDomNode()}};return d(Ke,null,[e.arrow&&d("div",{class:"".concat(e.prefixCls,"-arrow")},null),Me(M,E,!1)])},y=r(function(){var g=e.minOverlayWidthMatchTrigger,v=g===void 0?!e.alignPoint:g;return v}),x=function(){var v,M=(v=a.default)===null||v===void 0?void 0:v.call(a);return o.value&&M?Me(M[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):M},b=r(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var g=e.prefixCls,v=e.arrow,M=e.showAction,E=e.overlayStyle,G=e.trigger,O=e.placement,K=e.align,j=e.getPopupContainer,H=e.transitionName,k=e.animation,C=e.overlayClassName,I=kn(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return d(He,$($({},I),{},{prefixCls:g,ref:c,popupClassName:Ce(C,R({},"".concat(g,"-show-arrow"),v)),popupStyle:E,builtinPlacements:En,action:G,showAction:M,hideAction:b.value||[],popupPlacement:O,popupAlign:K,popupTransitionName:H,popupAnimation:k,popupVisible:o.value,stretch:y.value?"minWidth":"",onPopupVisibleChange:w,getPopupContainer:j}),{popup:m,default:x})}}}),Fn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},Nn=Fn;function ze(u){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),a.forEach(function(l){Tn(u,l,i[l])})}return u}function Tn(u,e,i){return e in u?Object.defineProperty(u,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):u[e]=i,u}var Te=function(e,i){var a=ze({},e,i.attrs);return d(yn,ze({},a,{icon:Nn}),null)};Te.displayName="EllipsisOutlined";Te.inheritAttrs=!1;var jn=Te,en=Symbol("menuContextKey"),nn=function(e){Ie(en,e)},ie=function(){return de(en)},tn=Symbol("ForceRenderKey"),Ln=function(e){Ie(tn,e)},an=function(){return de(tn,!1)},ln=Symbol("menuFirstLevelContextKey"),un=function(e){Ie(ln,e)},Dn=function(){return de(ln,!0)},Oe=ee({name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,i){var a=i.slots,l=ie(),p=N({},l);return e.mode!==void 0&&(p.mode=Ae(e,"mode")),e.isRootMenu!==void 0&&(p.isRootMenu=Ae(e,"isRootMenu")),e.overflowDisabled!==void 0&&(p.overflowDisabled=Ae(e,"overflowDisabled")),nn(p),function(){var o;return(o=a.default)===null||o===void 0?void 0:o.call(a)}}}),Vn=nn;function Bn(){}var $n=1/0,zn=Re&&1/Xe(new Re([,-0]))[1]==$n?function(u){return new Re(u)}:Bn,Wn=zn,Yn=200;function Un(u,e,i){var a=-1,l=On,p=u.length,o=!0,c=[],f=c;if(i)o=!1,l=_n;else if(p>=Yn){var w=e?null:Wn(u);if(w)return Xe(w);o=!1,l=bn,f=new gn}else f=e?[]:c;e:for(;++a<p;){var m=u[a],y=e?e(m):m;if(m=i||m!==0?m:0,o&&y===y){for(var x=f.length;x--;)if(f[x]===y)continue e;e&&f.push(y),c.push(m)}else l(f,y,i)||(f!==c&&f.push(y),c.push(m))}return c}function Fe(u){return u&&u.length?Un(u):[]}var Pe="$$__vc-menu-more__key",rn=Symbol("KeyPathContext"),je=function(){return de(rn,{parentEventKeys:r(function(){return[]}),parentKeys:r(function(){return[]}),parentInfo:{}})},qn=function(e,i,a){var l=je(),p=l.parentEventKeys,o=l.parentKeys,c=r(function(){return[].concat(ue(p.value),[e])}),f=r(function(){return[].concat(ue(o.value),[i])});return Ie(rn,{parentEventKeys:c,parentKeys:f,parentInfo:a}),f},on=Symbol("measure"),We=ee({setup:function(e,i){var a=i.slots;return Ie(on,!0),function(){var l;return(l=a.default)===null||l===void 0?void 0:l.call(a)}}}),sn=function(){return de(on,!1)},Gn=qn;function vn(u){var e=ie(),i=e.mode,a=e.rtl,l=e.inlineIndent;return r(function(){return i.value!=="inline"?null:a.value?{paddingRight:"".concat(u.value*l.value,"px")}:{paddingLeft:"".concat(u.value*l.value,"px")}})}var Hn=0,Xn=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:T.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}},Zn=ee({name:"AMenuItem",inheritAttrs:!1,props:Xn(),slots:["icon","title"],setup:function(e,i){var a=i.slots,l=i.emit,p=i.attrs,o=Je(),c=sn(),f=Se(o.vnode.key)==="symbol"?String(o.vnode.key):o.vnode.key;we(Se(o.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(f),'"` not support Symbol type'));var w="menu_item_".concat(++Hn,"_$$_").concat(f),m=je(),y=m.parentEventKeys,x=m.parentKeys,b=ie(),g=b.prefixCls,v=b.activeKeys,M=b.disabled,E=b.changeActiveKeys,G=b.rtl,O=b.inlineCollapsed,K=b.siderCollapsed,j=b.onItemClick,H=b.selectedKeys,k=b.registerMenuInfo,C=b.unRegisterMenuInfo,I=Dn(),V=S(!1),z=r(function(){return[].concat(ue(x.value),[f])}),X={eventKey:w,key:f,parentEventKeys:y,parentKeys:x,isLeaf:!0};k(w,X),xe(function(){C(w)}),q(v,function(){V.value=!!v.value.find(function(t){return t===f})},{immediate:!0});var Y=r(function(){return M.value||e.disabled}),ne=r(function(){return H.value.includes(f)}),re=r(function(){var t,n="".concat(g.value,"-item");return t={},R(t,"".concat(n),!0),R(t,"".concat(n,"-danger"),e.danger),R(t,"".concat(n,"-active"),V.value),R(t,"".concat(n,"-selected"),ne.value),R(t,"".concat(n,"-disabled"),Y.value),t}),oe=function(n){return{key:f,eventKey:w,keyPath:z.value,eventKeyPath:[].concat(ue(y.value),[w]),domEvent:n,item:N(N({},e),p)}},pe=function(n){if(!Y.value){var s=oe(n);l("click",n),j(s)}},me=function(n){Y.value||(E(z.value),l("mouseenter",n))},Z=function(n){Y.value||(E([]),l("mouseleave",n))},se=function(n){if(l("keydown",n),n.which===Cn.ENTER){var s=oe(n);l("click",n),j(s)}},ve=function(n){E(z.value),l("focus",n)},B=function(n,s){var _=d("span",{class:"".concat(g.value,"-title-content")},[s]);return(!n||Qe(s)&&s.type==="span")&&s&&O.value&&I&&typeof s=="string"?d("div",{class:"".concat(g.value,"-inline-collapsed-noicon")},[s.charAt(0)]):_},ye=vn(r(function(){return z.value.length}));return function(){var t,n,s,_;if(c)return null;var h=(n=e.title)!==null&&n!==void 0?n:(s=a.title)===null||s===void 0?void 0:s.call(a),L=Ze((_=a.default)===null||_===void 0?void 0:_.call(a)),A=L.length,D=h;typeof h=="undefined"?D=I&&A?L:"":h===!1&&(D="");var U={title:D};!K.value&&!O.value&&(U.title=null,U.visible=!1);var te={};e.role==="option"&&(te["aria-selected"]=ne.value);var ae=Ne(a,e,"icon");return d(hn,$($({},U),{},{placement:G.value?"left":"right",overlayClassName:"".concat(g.value,"-inline-collapsed-tooltip")}),{default:function(){return[d(he.Item,$($($({component:"li"},p),{},{id:e.id,style:N(N({},p.style||{}),ye.value),class:[re.value,(t={},R(t,"".concat(p.class),!!p.class),R(t,"".concat(g.value,"-item-only-child"),(ae?A+1:A)===1),t)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":f,"aria-disabled":e.disabled},te),{},{onMouseenter:me,onMouseleave:Z,onClick:pe,onKeydown:se,onFocus:ve,title:typeof h=="string"?h:void 0}),{default:function(){return[Me(ae,{class:"".concat(g.value,"-item-icon")},!1),B(ae,L)]}})]}})}}}),Q={adjustX:1,adjustY:1},Jn={topLeft:{points:["bl","tl"],overflow:Q,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Q,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Q,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Q,offset:[4,0]}},Qn={topLeft:{points:["bl","tl"],overflow:Q,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Q,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Q,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Q,offset:[4,0]}},et={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},Ye=ee({name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,i){var a=i.slots,l=i.emit,p=S(!1),o=ie(),c=o.getPopupContainer,f=o.rtl,w=o.subMenuOpenDelay,m=o.subMenuCloseDelay,y=o.builtinPlacements,x=o.triggerSubMenuAction,b=o.isRootMenu,g=o.forceSubMenuRender,v=o.motion,M=o.defaultMotions,E=an(),G=r(function(){return f.value?N(N({},Qn),y.value):N(N({},Jn),y.value)}),O=r(function(){return et[e.mode]}),K=S();q(function(){return e.visible},function(k){Ee.cancel(K.value),K.value=Ee(function(){p.value=k})},{immediate:!0}),xe(function(){Ee.cancel(K.value)});var j=function(C){l("visibleChange",C)},H=r(function(){var k,C,I=v.value||((k=M.value)===null||k===void 0?void 0:k[e.mode])||((C=M.value)===null||C===void 0?void 0:C.other),V=typeof I=="function"?I():I;return V?Mn(V.name,{css:!0}):void 0});return function(){var k=e.prefixCls,C=e.popupClassName,I=e.mode,V=e.popupOffset,z=e.disabled;return d(He,{prefixCls:k,popupClassName:Ce("".concat(k,"-popup"),R({},"".concat(k,"-rtl"),f.value),C),stretch:I==="horizontal"?"minWidth":null,getPopupContainer:b.value?c.value:function(X){return X.parentNode},builtinPlacements:G.value,popupPlacement:O.value,popupVisible:p.value,popupAlign:V&&{offset:V},action:z?[]:[x.value],mouseEnterDelay:w.value,mouseLeaveDelay:m.value,onPopupVisibleChange:j,forceRender:E||g.value,popupAnimation:H.value},{popup:a.popup,default:a.default})}}}),cn=function(e,i){var a=i.slots,l=i.attrs,p,o=ie(),c=o.prefixCls,f=o.mode;return d("ul",$($({},l),{},{class:Ce(c.value,"".concat(c.value,"-sub"),"".concat(c.value,"-").concat(f.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(p=a.default)===null||p===void 0?void 0:p.call(a)])};cn.displayName="SubMenuList";var fn=cn,nt=ee({name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,i){var a=i.slots,l=r(function(){return"inline"}),p=ie(),o=p.motion,c=p.mode,f=p.defaultMotions,w=r(function(){return c.value===l.value}),m=S(!w.value),y=r(function(){return w.value?e.open:!1});q(c,function(){w.value&&(m.value=!1)},{flush:"post"});var x=r(function(){var b,g,v=o.value||((b=f.value)===null||b===void 0?void 0:b[l.value])||((g=f.value)===null||g===void 0?void 0:g.other),M=typeof v=="function"?v():v;return N(N({},M),{appear:e.keyPath.length<=1})});return function(){var b;return m.value?null:d(Oe,{mode:l.value},{default:function(){return[d(Kn,x.value,{default:function(){return[In(d(fn,{id:e.id},{default:function(){return[(b=a.default)===null||b===void 0?void 0:b.call(a)]}}),[[Pn,y.value]])]}})]}})}}}),Ue=0,tt=function(){return{icon:T.any,title:T.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}},qe=ee({name:"ASubMenu",inheritAttrs:!1,props:tt(),slots:["icon","title","expandIcon"],setup:function(e,i){var a=i.slots,l=i.attrs,p=i.emit,o,c;un(!1);var f=sn(),w=Je(),m=Se(w.vnode.key)==="symbol"?String(w.vnode.key):w.vnode.key;we(Se(w.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(m),'"` not support Symbol type'));var y=Be(m)?m:"sub_menu_".concat(++Ue,"_$$_not_set_key"),x=(o=e.eventKey)!==null&&o!==void 0?o:Be(m)?"sub_menu_".concat(++Ue,"_$$_").concat(m):y,b=je(),g=b.parentEventKeys,v=b.parentInfo,M=b.parentKeys,E=r(function(){return[].concat(ue(M.value),[y])}),G=S([]),O={eventKey:x,key:y,parentEventKeys:g,childrenEventKeys:G,parentKeys:M};(c=v.childrenEventKeys)===null||c===void 0||c.value.push(x),xe(function(){var F;v.childrenEventKeys&&(v.childrenEventKeys.value=(F=v.childrenEventKeys)===null||F===void 0?void 0:F.value.filter(function(P){return P!=x}))}),Gn(x,y,O);var K=ie(),j=K.prefixCls,H=K.activeKeys,k=K.disabled,C=K.changeActiveKeys,I=K.mode,V=K.inlineCollapsed,z=K.antdMenuTheme,X=K.openKeys,Y=K.overflowDisabled,ne=K.onOpenChange,re=K.registerMenuInfo,oe=K.unRegisterMenuInfo,pe=K.selectedSubMenuKeys,me=K.expandIcon,Z=m!=null,se=!f&&(an()||!Z);Ln(se),(f&&Z||!f&&!Z||se)&&(re(x,O),xe(function(){oe(x)}));var ve=r(function(){return"".concat(j.value,"-submenu")}),B=r(function(){return k.value||e.disabled}),ye=S(),t=S(),n=r(function(){return X.value.includes(y)}),s=r(function(){return!Y.value&&n.value}),_=r(function(){return pe.value.includes(y)}),h=S(!1);q(H,function(){h.value=!!H.value.find(function(F){return F===y})},{immediate:!0});var L=function(P){B.value||(p("titleClick",P,y),I.value==="inline"&&ne(y,!n.value))},A=function(P){B.value||(C(E.value),p("mouseenter",P))},D=function(P){B.value||(C([]),p("mouseleave",P))},U=vn(r(function(){return E.value.length})),te=function(P){I.value!=="inline"&&ne(y,P)},ae=function(){C(E.value)},ge=x&&"".concat(x,"-popup"),Le=r(function(){return Ce(j.value,"".concat(j.value,"-").concat(z.value),e.popupClassName)}),dn=function(P,W){if(!W)return V.value&&!M.value.length&&P&&typeof P=="string"?d("div",{class:"".concat(j.value,"-inline-collapsed-noicon")},[P.charAt(0)]):d("span",{class:"".concat(j.value,"-title-content")},[P]);var J=Qe(P)&&P.type==="span";return d(Ke,null,[Me(W,{class:"".concat(j.value,"-item-icon")},!1),J?P:d("span",{class:"".concat(j.value,"-title-content")},[P])])},_e=r(function(){return I.value!=="inline"&&E.value.length>1?"vertical":I.value}),pn=r(function(){return I.value==="horizontal"?"vertical":I.value}),mn=r(function(){return _e.value==="horizontal"?"vertical":_e.value}),De=function(){var P=ve.value,W=Ne(a,e,"icon"),J=e.expandIcon||a.expandIcon||me.value,le=dn(Ne(a,e,"title"),W);return d("div",{style:U.value,class:"".concat(P,"-title"),tabindex:B.value?null:-1,ref:ye,title:typeof le=="string"?le:null,"data-menu-id":y,"aria-expanded":s.value,"aria-haspopup":!0,"aria-controls":ge,"aria-disabled":B.value,onClick:L,onFocus:ae},[le,I.value!=="horizontal"&&J?J(N(N({},e),{isOpen:s.value})):d("i",{class:"".concat(P,"-arrow")},null)])};return function(){var F,P;if(f)return Z?(P=a.default)===null||P===void 0?void 0:P.call(a):null;var W=ve.value,J=function(){return null};return!Y.value&&I.value!=="inline"?J=function(){return d(Ye,{mode:_e.value,prefixCls:W,visible:!e.internalPopupClose&&s.value,popupClassName:Le.value,popupOffset:e.popupOffset,disabled:B.value,onVisibleChange:te},{default:function(){return[De()]},popup:function(){return d(Oe,{mode:mn.value,isRootMenu:!1},{default:function(){return[d(fn,{id:ge,ref:t},{default:a.default})]}})}})}:J=function(){return d(Ye,null,{default:De})},d(Oe,{mode:pn.value},{default:function(){return[d(he.Item,$($({component:"li"},l),{},{role:"none",class:Ce(W,"".concat(W,"-").concat(I.value),l.class,(F={},R(F,"".concat(W,"-open"),s.value),R(F,"".concat(W,"-active"),h.value),R(F,"".concat(W,"-selected"),_.value),R(F,"".concat(W,"-disabled"),B.value),F)),onMouseenter:A,onMouseleave:D,"data-submenu-id":y}),{default:function(){return d(Ke,null,[J(),!Y.value&&d(nt,{id:ge,open:s.value,keyPath:E.value},{default:a.default})])}})]}})}}}),at=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},Ge=[],ct=ee({name:"AMenu",inheritAttrs:!1,props:at(),slots:["expandIcon","overflowedIndicator"],setup:function(e,i){var a=i.slots,l=i.emit,p=i.attrs,o=Sn("menu",e),c=o.prefixCls,f=o.direction,w=o.getPrefixCls,m=S({}),y=de(wn,S(void 0)),x=r(function(){return y.value!==void 0?y.value:e.inlineCollapsed}),b=S(!1);xn(function(){b.value=!0}),ke(function(){we(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),we(!(y.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var g=S([]),v=S([]),M=S({});q(m,function(){for(var t={},n=0,s=Object.values(m.value);n<s.length;n++){var _=s[n];t[_.key]=_}M.value=t},{flush:"post"}),ke(function(){if(e.activeKey!==void 0){var t=[],n=e.activeKey?M.value[e.activeKey]:void 0;n&&e.activeKey!==void 0?t=Fe([].concat($e(n.parentKeys),e.activeKey)):t=[],be(g.value,t)||(g.value=t)}}),q(function(){return e.selectedKeys},function(t){t&&(v.value=t.slice())},{immediate:!0,deep:!0});var E=S([]);q([M,v],function(){var t=[];v.value.forEach(function(n){var s=M.value[n];s&&(t=t.concat($e(s.parentKeys)))}),t=Fe(t),be(E.value,t)||(E.value=t)},{immediate:!0});var G=function(n){if(!!e.selectable){var s=n.key,_=v.value.includes(s),h;e.multiple?_?h=v.value.filter(function(A){return A!==s}):h=[].concat(ue(v.value),[s]):h=[s];var L=N(N({},n),{selectedKeys:h});be(h,v.value)||(e.selectedKeys===void 0&&(v.value=h),l("update:selectedKeys",h),_&&e.multiple?l("deselect",L):l("select",L)),C.value!=="inline"&&!e.multiple&&O.value.length&&z(Ge)}},O=S([]);q(function(){return e.openKeys},function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:O.value;be(O.value,t)||(O.value=t.slice())},{immediate:!0,deep:!0});var K,j=function(n){clearTimeout(K),K=setTimeout(function(){e.activeKey===void 0&&(g.value=n),l("update:activeKey",n[n.length-1])})},H=r(function(){return!!e.disabled}),k=r(function(){return f.value==="rtl"}),C=S("vertical"),I=S(!1);ke(function(){(e.mode==="inline"||e.mode==="vertical")&&x.value?(C.value="vertical",I.value=x.value):(C.value=e.mode,I.value=!1)});var V=r(function(){return C.value==="inline"}),z=function(n){O.value=n,l("update:openKeys",n),l("openChange",n)},X=S(O.value),Y=S(!1);q(O,function(){V.value&&(X.value=O.value)},{immediate:!0}),q(V,function(){if(!Y.value){Y.value=!0;return}V.value?O.value=X.value:z(Ge)},{immediate:!0});var ne=r(function(){var t;return t={},R(t,"".concat(c.value),!0),R(t,"".concat(c.value,"-root"),!0),R(t,"".concat(c.value,"-").concat(C.value),!0),R(t,"".concat(c.value,"-inline-collapsed"),I.value),R(t,"".concat(c.value,"-rtl"),k.value),R(t,"".concat(c.value,"-").concat(e.theme),!0),t}),re=r(function(){return w()}),oe=r(function(){return{horizontal:{name:"".concat(re.value,"-slide-up")},inline:An,other:{name:"".concat(re.value,"-zoom-big")}}});un(!0);var pe=function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=[],_=m.value;return n.forEach(function(h){var L=_[h],A=L.key,D=L.childrenEventKeys;s.push.apply(s,[A].concat(ue(t(D))))}),s},me=function(n){l("click",n),G(n)},Z=function(n,s){var _=M.value[n].childrenEventKeys,h=O.value.filter(function(A){return A!==n});if(s)h.push(n);else if(C.value!=="inline"){var L=pe(_);h=Fe(h.filter(function(A){return!L.includes(A)}))}be(O,h)||z(h)},se=function(n,s){m.value=N(N({},m.value),R({},n,s))},ve=function(n){delete m.value[n],m.value=N({},m.value)},B=S(0),ye=r(function(){return e.expandIcon||a.expandIcon?function(t){var n=e.expandIcon||a.expandIcon;return n=typeof n=="function"?n(t):n,Me(n,{class:"".concat(c.value,"-submenu-expand-icon")},!1)}:null});return Vn({store:m,prefixCls:c,activeKeys:g,openKeys:O,selectedKeys:v,changeActiveKeys:j,disabled:H,rtl:k,mode:C,inlineIndent:r(function(){return e.inlineIndent}),subMenuCloseDelay:r(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:r(function(){return e.subMenuOpenDelay}),builtinPlacements:r(function(){return e.builtinPlacements}),triggerSubMenuAction:r(function(){return e.triggerSubMenuAction}),getPopupContainer:r(function(){return e.getPopupContainer}),inlineCollapsed:I,antdMenuTheme:r(function(){return e.theme}),siderCollapsed:y,defaultMotions:r(function(){return b.value?oe.value:null}),motion:r(function(){return b.value?e.motion:null}),overflowDisabled:S(void 0),onOpenChange:Z,onItemClick:me,registerMenuInfo:se,unRegisterMenuInfo:ve,selectedSubMenuKeys:E,isRootMenu:S(!0),expandIcon:ye,forceSubMenuRender:r(function(){return e.forceSubMenuRender})}),function(){var t,n,s=Ze((t=a.default)===null||t===void 0?void 0:t.call(a)),_=B.value>=s.length-1||C.value!=="horizontal"||e.disabledOverflow,h=C.value!=="horizontal"||e.disabledOverflow?s:s.map(function(A,D){return d(Oe,{key:A.key,overflowDisabled:D>B.value},{default:function(){return A}})}),L=((n=a.overflowedIndicator)===null||n===void 0?void 0:n.call(a))||d(jn,null,null);return d(Ke,null,[d(he,$($({},p),{},{onMousedown:e.onMousedown,prefixCls:"".concat(c.value,"-overflow"),component:"ul",itemComponent:Zn,class:[ne.value,p.class],role:"menu",id:e.id,data:h,renderRawItem:function(D){return D},renderRawRest:function(D){var U=D.length,te=U?s.slice(-U):null;return d(Ke,null,[d(qe,{eventKey:Pe,key:Pe,title:L,disabled:_,internalPopupClose:U===0},{default:function(){return te}}),d(We,null,{default:function(){return[d(qe,{eventKey:Pe,key:Pe,title:L,disabled:_,internalPopupClose:U===0},{default:function(){return te}})]}})])},maxCount:C.value!=="horizontal"||e.disabledOverflow?he.INVALIDATE:he.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(D){B.value=D}}),null),d("div",{style:{display:"none"},"aria-hidden":!0},[d(We,null,{default:function(){return[h]}})])])}}});export{vt as D,jn as E,ct as M,qe as S,Zn as _,sn as a,ie as u};