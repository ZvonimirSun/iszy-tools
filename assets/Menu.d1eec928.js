import{d as Q,P as D,r as w,m as U,f as u,v as mn,a as p,p as h,g as he,h as A,b2 as Ge,y as Ce,F as Pe,A as yn,aJ as Me,j as fe,bc as Ee,bm as Re,bn as He,ak as gn,al as bn,av as le,ag as Se,bj as we,ad as Oe,b1 as Xe,a8 as Ne,bo as hn,b7 as Je,aa as Cn,H as Ze,af as Ae,bp as Mn,bq as Kn,a$ as In,b0 as Pn,br as Ve,e as Sn,bs as wn,D as On,aO as ke,ao as Ke,bt as xn}from"./index.58a666b8.js";import{s as ge}from"./shallowequal.b5d8d6b4.js";import{b as _n,a as En}from"./_arrayIncludesWith.91d14080.js";import{O as be}from"./Overflow.189eec12.js";import{c as Rn}from"./collapseMotion.7b9149b7.js";var ce={adjustX:1,adjustY:1},ve=[0,0],An={topLeft:{points:["bl","tl"],overflow:ce,offset:[0,-4],targetOffset:ve},topCenter:{points:["bc","tc"],overflow:ce,offset:[0,-4],targetOffset:ve},topRight:{points:["br","tr"],overflow:ce,offset:[0,-4],targetOffset:ve},bottomLeft:{points:["tl","bl"],overflow:ce,offset:[0,4],targetOffset:ve},bottomCenter:{points:["tc","bc"],overflow:ce,offset:[0,4],targetOffset:ve},bottomRight:{points:["tr","br"],overflow:ce,offset:[0,4],targetOffset:ve}};const kn=An;var Fn=["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"];const vt=Q({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:D.string.def("rc-dropdown"),transitionName:String,overlayClassName:D.string.def(""),openClassName:String,animation:D.any,align:D.object,overlayStyle:{type:Object,default:void 0},placement:D.string.def("bottomLeft"),overlay:D.any,trigger:D.oneOfType([D.string,D.arrayOf(D.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:D.array,hideAction:D.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:D.number.def(.15),mouseLeaveDelay:D.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,i){var l=i.slots,a=i.emit,v=i.expose,r=w(!!e.visible);U(function(){return e.visible},function(g){g!==void 0&&(r.value=g)});var f=w();v({triggerRef:f});var d=function(c){e.visible===void 0&&(r.value=!1),a("overlayClick",c)},O=function(c){e.visible===void 0&&(r.value=c),a("visibleChange",c)},m=function(){var c,K=(c=l.overlay)===null||c===void 0?void 0:c.call(l),k={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:d,getPopupContainer:function(){return f.value.getPopupDomNode()}};return p(Pe,null,[e.arrow&&p("div",{class:"".concat(e.prefixCls,"-arrow")},null),Ce(K,k,!1)])},y=u(function(){var g=e.minOverlayWidthMatchTrigger,c=g===void 0?!e.alignPoint:g;return c}),x=function(){var c,K=(c=l.default)===null||c===void 0?void 0:c.call(l);return r.value&&K?Ce(K[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):K},b=u(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var g=e.prefixCls,c=e.arrow,K=e.showAction,k=e.overlayStyle,q=e.trigger,_=e.placement,I=e.align,T=e.getPopupContainer,G=e.transitionName,F=e.animation,M=e.overlayClassName,P=mn(e,Fn);return p(Ge,h(h({},P),{},{prefixCls:g,ref:f,popupClassName:he(M,A({},"".concat(g,"-show-arrow"),c)),popupStyle:k,builtinPlacements:kn,action:q,showAction:K,hideAction:b.value||[],popupPlacement:_,popupAlign:I,popupTransitionName:G,popupAnimation:F,popupVisible:r.value,stretch:y.value?"minWidth":"",onPopupVisibleChange:O,getPopupContainer:T}),{popup:m,default:x})}}});var Nn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Dn=Nn;function Be(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(i).filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable}))),l.forEach(function(a){Tn(s,a,i[a])})}return s}function Tn(s,e,i){return e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}var De=function(e,i){var l=Be({},e,i.attrs);return p(yn,Be({},l,{icon:Dn}),null)};De.displayName="EllipsisOutlined";De.inheritAttrs=!1;const jn=De;var Qe=Symbol("menuContextKey"),en=function(e){Me(Qe,e)},ue=function(){return fe(Qe)},nn=Symbol("ForceRenderKey"),Ln=function(e){Me(nn,e)},tn=function(){return fe(nn,!1)},an=Symbol("menuFirstLevelContextKey"),ln=function(e){Me(an,e)},$n=function(){return fe(an,!0)},xe=Q({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,i){var l=i.slots,a=ue(),v=h({},a);return e.mode!==void 0&&(v.mode=Ee(e,"mode")),e.isRootMenu!==void 0&&(v.isRootMenu=Ee(e,"isRootMenu")),e.overflowDisabled!==void 0&&(v.overflowDisabled=Ee(e,"overflowDisabled")),en(v),function(){var r;return(r=l.default)===null||r===void 0?void 0:r.call(l)}}});const Vn=en;function Bn(){}var zn=1/0,Wn=Re&&1/He(new Re([,-0]))[1]==zn?function(s){return new Re(s)}:Bn;const Yn=Wn;var Un=200;function qn(s,e,i){var l=-1,a=_n,v=s.length,r=!0,f=[],d=f;if(i)r=!1,a=En;else if(v>=Un){var O=e?null:Yn(s);if(O)return He(O);r=!1,a=bn,d=new gn}else d=e?[]:f;e:for(;++l<v;){var m=s[l],y=e?e(m):m;if(m=i||m!==0?m:0,r&&y===y){for(var x=d.length;x--;)if(d[x]===y)continue e;e&&d.push(y),f.push(m)}else a(d,y,i)||(d!==f&&d.push(y),f.push(m))}return f}function Fe(s){return s&&s.length?qn(s):[]}var Ie="$$__vc-menu-more__key",un=Symbol("KeyPathContext"),Te=function(){return fe(un,{parentEventKeys:u(function(){return[]}),parentKeys:u(function(){return[]}),parentInfo:{}})},Gn=function(e,i,l){var a=Te(),v=a.parentEventKeys,r=a.parentKeys,f=u(function(){return[].concat(le(v.value),[e])}),d=u(function(){return[].concat(le(r.value),[i])});return Me(un,{parentEventKeys:f,parentKeys:d,parentInfo:l}),d},on=Symbol("measure"),ze=Q({compatConfig:{MODE:3},setup:function(e,i){var l=i.slots;return Me(on,!0),function(){var a;return(a=l.default)===null||a===void 0?void 0:a.call(l)}}}),rn=function(){return fe(on,!1)};const Hn=Gn;function sn(s){var e=ue(),i=e.mode,l=e.rtl,a=e.inlineIndent;return u(function(){return i.value!=="inline"?null:l.value?{paddingRight:"".concat(s.value*a.value,"px")}:{paddingLeft:"".concat(s.value*a.value,"px")}})}var Xn=0,Jn=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:D.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const Zn=Q({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:Jn(),slots:["icon","title"],setup:function(e,i){var l=i.slots,a=i.emit,v=i.attrs,r=Je(),f=rn(),d=Se(r.vnode.key)==="symbol"?String(r.vnode.key):r.vnode.key;we(Se(r.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(d),'"` not support Symbol type'));var O="menu_item_".concat(++Xn,"_$$_").concat(d),m=Te(),y=m.parentEventKeys,x=m.parentKeys,b=ue(),g=b.prefixCls,c=b.activeKeys,K=b.disabled,k=b.changeActiveKeys,q=b.rtl,_=b.inlineCollapsed,I=b.siderCollapsed,T=b.onItemClick,G=b.selectedKeys,F=b.registerMenuInfo,M=b.unRegisterMenuInfo,P=$n(),$=w(!1),B=u(function(){return[].concat(le(x.value),[d])}),H={eventKey:O,key:d,parentEventKeys:y,parentKeys:x,isLeaf:!0};F(O,H),Oe(function(){M(O)}),U(c,function(){$.value=!!c.value.find(function(t){return t===d})},{immediate:!0});var Y=u(function(){return K.value||e.disabled}),ee=u(function(){return G.value.includes(d)}),ie=u(function(){var t,n="".concat(g.value,"-item");return t={},A(t,"".concat(n),!0),A(t,"".concat(n,"-danger"),e.danger),A(t,"".concat(n,"-active"),$.value),A(t,"".concat(n,"-selected"),ee.value),A(t,"".concat(n,"-disabled"),Y.value),t}),oe=function(n){return{key:d,eventKey:O,keyPath:B.value,eventKeyPath:[].concat(le(y.value),[O]),domEvent:n,item:h(h({},e),v)}},de=function(n){if(!Y.value){var o=oe(n);a("click",n),T(o)}},pe=function(n){Y.value||(k(B.value),a("mouseenter",n))},X=function(n){Y.value||(k([]),a("mouseleave",n))},re=function(n){if(a("keydown",n),n.which===Cn.ENTER){var o=oe(n);a("click",n),T(o)}},se=function(n){k(B.value),a("focus",n)},V=function(n,o){var E=p("span",{class:"".concat(g.value,"-title-content")},[o]);return(!n||Ze(o)&&o.type==="span")&&o&&_.value&&P&&typeof o=="string"?p("div",{class:"".concat(g.value,"-inline-collapsed-noicon")},[o.charAt(0)]):E},me=sn(u(function(){return B.value.length}));return function(){var t,n,o,E;if(f)return null;var C=(t=e.title)!==null&&t!==void 0?t:(n=l.title)===null||n===void 0?void 0:n.call(l),j=Xe((o=l.default)===null||o===void 0?void 0:o.call(l)),R=j.length,L=C;typeof C>"u"?L=P&&R?j:"":C===!1&&(L="");var z={title:L};!I.value&&!_.value&&(z.title=null,z.visible=!1);var ne={};e.role==="option"&&(ne["aria-selected"]=ee.value);var te=Ne(l,e,"icon");return p(hn,h(h({},z),{},{placement:q.value?"left":"right",overlayClassName:"".concat(g.value,"-inline-collapsed-tooltip")}),{default:function(){return[p(be.Item,h(h(h({component:"li"},v),{},{id:e.id,style:h(h({},v.style||{}),me.value),class:[ie.value,(E={},A(E,"".concat(v.class),!!v.class),A(E,"".concat(g.value,"-item-only-child"),(te?R+1:R)===1),E)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":d,"aria-disabled":e.disabled},ne),{},{onMouseenter:pe,onMouseleave:X,onClick:de,onKeydown:re,onFocus:se,title:typeof C=="string"?C:void 0}),{default:function(){return[Ce(te,{class:"".concat(g.value,"-item-icon")},!1),V(te,j)]}})]}})}}});var Z={adjustX:1,adjustY:1},Qn={topLeft:{points:["bl","tl"],overflow:Z,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Z,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Z,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Z,offset:[4,0]}},et={topLeft:{points:["bl","tl"],overflow:Z,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Z,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Z,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Z,offset:[4,0]}},nt={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const We=Q({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,i){var l=i.slots,a=i.emit,v=w(!1),r=ue(),f=r.getPopupContainer,d=r.rtl,O=r.subMenuOpenDelay,m=r.subMenuCloseDelay,y=r.builtinPlacements,x=r.triggerSubMenuAction,b=r.isRootMenu,g=r.forceSubMenuRender,c=r.motion,K=r.defaultMotions,k=tn(),q=u(function(){return d.value?h(h({},et),y.value):h(h({},Qn),y.value)}),_=u(function(){return nt[e.mode]}),I=w();U(function(){return e.visible},function(F){Ae.cancel(I.value),I.value=Ae(function(){v.value=F})},{immediate:!0}),Oe(function(){Ae.cancel(I.value)});var T=function(M){a("visibleChange",M)},G=u(function(){var F,M,P=c.value||((F=K.value)===null||F===void 0?void 0:F[e.mode])||((M=K.value)===null||M===void 0?void 0:M.other),$=typeof P=="function"?P():P;return $?Mn($.name,{css:!0}):void 0});return function(){var F=e.prefixCls,M=e.popupClassName,P=e.mode,$=e.popupOffset,B=e.disabled;return p(Ge,{prefixCls:F,popupClassName:he("".concat(F,"-popup"),A({},"".concat(F,"-rtl"),d.value),M),stretch:P==="horizontal"?"minWidth":null,getPopupContainer:b.value?f.value:function(H){return H.parentNode},builtinPlacements:q.value,popupPlacement:_.value,popupVisible:v.value,popupAlign:$&&{offset:$},action:B?[]:[x.value],mouseEnterDelay:O.value,mouseLeaveDelay:m.value,onPopupVisibleChange:T,forceRender:k||g.value,popupAnimation:G.value},{popup:l.popup,default:l.default})}}});var cn=function(e,i){var l,a=i.slots,v=i.attrs,r=ue(),f=r.prefixCls,d=r.mode;return p("ul",h(h({},v),{},{class:he(f.value,"".concat(f.value,"-sub"),"".concat(f.value,"-").concat(d.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(l=a.default)===null||l===void 0?void 0:l.call(a)])};cn.displayName="SubMenuList";const vn=cn,tt=Q({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,i){var l=i.slots,a=u(function(){return"inline"}),v=ue(),r=v.motion,f=v.mode,d=v.defaultMotions,O=u(function(){return f.value===a.value}),m=w(!O.value),y=u(function(){return O.value?e.open:!1});U(f,function(){O.value&&(m.value=!1)},{flush:"post"});var x=u(function(){var b,g,c=r.value||((b=d.value)===null||b===void 0?void 0:b[a.value])||((g=d.value)===null||g===void 0?void 0:g.other),K=typeof c=="function"?c():c;return h(h({},K),{},{appear:e.keyPath.length<=1})});return function(){var b;return m.value?null:p(xe,{mode:a.value},{default:function(){return[p(Kn,x.value,{default:function(){return[In(p(vn,{id:e.id},{default:function(){return[(b=l.default)===null||b===void 0?void 0:b.call(l)]}}),[[Pn,y.value]])]}})]}})}}});var Ye=0,at=function(){return{icon:D.any,title:D.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Ue=Q({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:at(),slots:["icon","title","expandIcon"],setup:function(e,i){var l,a,v=i.slots,r=i.attrs,f=i.emit;ln(!1);var d=rn(),O=Je(),m=Se(O.vnode.key)==="symbol"?String(O.vnode.key):O.vnode.key;we(Se(O.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(m),'"` not support Symbol type'));var y=Ve(m)?m:"sub_menu_".concat(++Ye,"_$$_not_set_key"),x=(l=e.eventKey)!==null&&l!==void 0?l:Ve(m)?"sub_menu_".concat(++Ye,"_$$_").concat(m):y,b=Te(),g=b.parentEventKeys,c=b.parentInfo,K=b.parentKeys,k=u(function(){return[].concat(le(K.value),[y])}),q=w([]),_={eventKey:x,key:y,parentEventKeys:g,childrenEventKeys:q,parentKeys:K};(a=c.childrenEventKeys)===null||a===void 0||a.value.push(x),Oe(function(){if(c.childrenEventKeys){var N;c.childrenEventKeys.value=(N=c.childrenEventKeys)===null||N===void 0?void 0:N.value.filter(function(S){return S!=x})}}),Hn(x,y,_);var I=ue(),T=I.prefixCls,G=I.activeKeys,F=I.disabled,M=I.changeActiveKeys,P=I.mode,$=I.inlineCollapsed,B=I.antdMenuTheme,H=I.openKeys,Y=I.overflowDisabled,ee=I.onOpenChange,ie=I.registerMenuInfo,oe=I.unRegisterMenuInfo,de=I.selectedSubMenuKeys,pe=I.expandIcon,X=m!=null,re=!d&&(tn()||!X);Ln(re),(d&&X||!d&&!X||re)&&(ie(x,_),Oe(function(){oe(x)}));var se=u(function(){return"".concat(T.value,"-submenu")}),V=u(function(){return F.value||e.disabled}),me=w(),t=w(),n=u(function(){return H.value.includes(y)}),o=u(function(){return!Y.value&&n.value}),E=u(function(){return de.value.includes(y)}),C=w(!1);U(G,function(){C.value=!!G.value.find(function(N){return N===y})},{immediate:!0});var j=function(S){V.value||(f("titleClick",S,y),P.value==="inline"&&ee(y,!n.value))},R=function(S){V.value||(M(k.value),f("mouseenter",S))},L=function(S){V.value||(M([]),f("mouseleave",S))},z=sn(u(function(){return k.value.length})),ne=function(S){P.value!=="inline"&&ee(y,S)},te=function(){M(k.value)},ye=x&&"".concat(x,"-popup"),je=u(function(){return he(T.value,"".concat(T.value,"-").concat(B.value),e.popupClassName)}),fn=function(S,W){if(!W)return $.value&&!K.value.length&&S&&typeof S=="string"?p("div",{class:"".concat(T.value,"-inline-collapsed-noicon")},[S.charAt(0)]):p("span",{class:"".concat(T.value,"-title-content")},[S]);var J=Ze(S)&&S.type==="span";return p(Pe,null,[Ce(W,{class:"".concat(T.value,"-item-icon")},!1),J?S:p("span",{class:"".concat(T.value,"-title-content")},[S])])},_e=u(function(){return P.value!=="inline"&&k.value.length>1?"vertical":P.value}),dn=u(function(){return P.value==="horizontal"?"vertical":P.value}),pn=u(function(){return _e.value==="horizontal"?"vertical":_e.value}),Le=function(){var S=se.value,W=Ne(v,e,"icon"),J=e.expandIcon||v.expandIcon||pe.value,ae=fn(Ne(v,e,"title"),W);return p("div",{style:z.value,class:"".concat(S,"-title"),tabindex:V.value?null:-1,ref:me,title:typeof ae=="string"?ae:null,"data-menu-id":y,"aria-expanded":o.value,"aria-haspopup":!0,"aria-controls":ye,"aria-disabled":V.value,onClick:j,onFocus:te},[ae,P.value!=="horizontal"&&J?J(h(h({},e),{},{isOpen:o.value})):p("i",{class:"".concat(S,"-arrow")},null)])};return function(){var N;if(d){var S;return X?(S=v.default)===null||S===void 0?void 0:S.call(v):null}var W=se.value,J=function(){return null};return!Y.value&&P.value!=="inline"?J=function(){return p(We,{mode:_e.value,prefixCls:W,visible:!e.internalPopupClose&&o.value,popupClassName:je.value,popupOffset:e.popupOffset,disabled:V.value,onVisibleChange:ne},{default:function(){return[Le()]},popup:function(){return p(xe,{mode:pn.value,isRootMenu:!1},{default:function(){return[p(vn,{id:ye,ref:t},{default:v.default})]}})}})}:J=function(){return p(We,null,{default:Le})},p(xe,{mode:dn.value},{default:function(){return[p(be.Item,h(h({component:"li"},r),{},{role:"none",class:he(W,"".concat(W,"-").concat(P.value),r.class,(N={},A(N,"".concat(W,"-open"),o.value),A(N,"".concat(W,"-active"),C.value),A(N,"".concat(W,"-selected"),E.value),A(N,"".concat(W,"-disabled"),V.value),N)),onMouseenter:R,onMouseleave:L,"data-submenu-id":y}),{default:function(){return p(Pe,null,[J(),!Y.value&&p(tt,{id:ye,open:o.value,keyPath:k.value},{default:v.default})])}})]}})}}});var lt=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},qe=[];const ft=Q({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:lt(),slots:["expandIcon","overflowedIndicator"],setup:function(e,i){var l=i.slots,a=i.emit,v=i.attrs,r=Sn("menu",e),f=r.prefixCls,d=r.direction,O=r.getPrefixCls,m=w({}),y=fe(wn,w(void 0)),x=u(function(){return y.value!==void 0?y.value:e.inlineCollapsed}),b=w(!1);On(function(){b.value=!0}),ke(function(){we(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),we(!(y.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var g=w([]),c=w([]),K=w({});U(m,function(){for(var t={},n=0,o=Object.values(m.value);n<o.length;n++){var E=o[n];t[E.key]=E}K.value=t},{flush:"post"}),ke(function(){if(e.activeKey!==void 0){var t=[],n=e.activeKey?K.value[e.activeKey]:void 0;n&&e.activeKey!==void 0?t=Fe([].concat(Ke(n.parentKeys),e.activeKey)):t=[],ge(g.value,t)||(g.value=t)}}),U(function(){return e.selectedKeys},function(t){t&&(c.value=t.slice())},{immediate:!0,deep:!0});var k=w([]);U([K,c],function(){var t=[];c.value.forEach(function(n){var o=K.value[n];o&&(t=t.concat(Ke(o.parentKeys)))}),t=Fe(t),ge(k.value,t)||(k.value=t)},{immediate:!0});var q=function(n){if(!!e.selectable){var o=n.key,E=c.value.includes(o),C;e.multiple?E?C=c.value.filter(function(R){return R!==o}):C=[].concat(le(c.value),[o]):C=[o];var j=h(h({},n),{},{selectedKeys:C});ge(C,c.value)||(e.selectedKeys===void 0&&(c.value=C),a("update:selectedKeys",C),E&&e.multiple?a("deselect",j):a("select",j)),M.value!=="inline"&&!e.multiple&&_.value.length&&B(qe)}},_=w([]);U(function(){return e.openKeys},function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_.value;ge(_.value,t)||(_.value=t.slice())},{immediate:!0,deep:!0});var I,T=function(n){clearTimeout(I),I=setTimeout(function(){e.activeKey===void 0&&(g.value=n),a("update:activeKey",n[n.length-1])})},G=u(function(){return!!e.disabled}),F=u(function(){return d.value==="rtl"}),M=w("vertical"),P=w(!1);ke(function(){(e.mode==="inline"||e.mode==="vertical")&&x.value?(M.value="vertical",P.value=x.value):(M.value=e.mode,P.value=!1)});var $=u(function(){return M.value==="inline"}),B=function(n){_.value=n,a("update:openKeys",n),a("openChange",n)},H=w(_.value),Y=w(!1);U(_,function(){$.value&&(H.value=_.value)},{immediate:!0}),U($,function(){if(!Y.value){Y.value=!0;return}$.value?_.value=H.value:B(qe)},{immediate:!0});var ee=u(function(){var t;return t={},A(t,"".concat(f.value),!0),A(t,"".concat(f.value,"-root"),!0),A(t,"".concat(f.value,"-").concat(M.value),!0),A(t,"".concat(f.value,"-inline-collapsed"),P.value),A(t,"".concat(f.value,"-rtl"),F.value),A(t,"".concat(f.value,"-").concat(e.theme),!0),t}),ie=u(function(){return O()}),oe=u(function(){return{horizontal:{name:"".concat(ie.value,"-slide-up")},inline:Rn,other:{name:"".concat(ie.value,"-zoom-big")}}});ln(!0);var de=function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=[],E=m.value;return n.forEach(function(C){var j=E[C],R=j.key,L=j.childrenEventKeys;o.push.apply(o,[R].concat(le(t(Ke(L)))))}),o},pe=function(n){a("click",n),q(n)},X=function(n,o){var E=K.value[n].childrenEventKeys,C=_.value.filter(function(R){return R!==n});if(o)C.push(n);else if(M.value!=="inline"){var j=de(Ke(E));C=Fe(C.filter(function(R){return!j.includes(R)}))}ge(_,C)||B(C)},re=function(n,o){m.value=h(h({},m.value),{},A({},n,o))},se=function(n){delete m.value[n],m.value=h({},m.value)},V=w(0),me=u(function(){return e.expandIcon||l.expandIcon?function(t){var n=e.expandIcon||l.expandIcon;return n=typeof n=="function"?n(t):n,Ce(n,{class:"".concat(f.value,"-submenu-expand-icon")},!1)}:null});return Vn({store:m,prefixCls:f,activeKeys:g,openKeys:_,selectedKeys:c,changeActiveKeys:T,disabled:G,rtl:F,mode:M,inlineIndent:u(function(){return e.inlineIndent}),subMenuCloseDelay:u(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:u(function(){return e.subMenuOpenDelay}),builtinPlacements:u(function(){return e.builtinPlacements}),triggerSubMenuAction:u(function(){return e.triggerSubMenuAction}),getPopupContainer:u(function(){return e.getPopupContainer}),inlineCollapsed:P,antdMenuTheme:u(function(){return e.theme}),siderCollapsed:y,defaultMotions:u(function(){return b.value?oe.value:null}),motion:u(function(){return b.value?e.motion:null}),overflowDisabled:w(void 0),onOpenChange:X,onItemClick:pe,registerMenuInfo:re,unRegisterMenuInfo:se,selectedSubMenuKeys:k,isRootMenu:w(!0),expandIcon:me,forceSubMenuRender:u(function(){return e.forceSubMenuRender})}),function(){var t,n,o=Xe((t=l.default)===null||t===void 0?void 0:t.call(l)),E=V.value>=o.length-1||M.value!=="horizontal"||e.disabledOverflow,C=M.value!=="horizontal"||e.disabledOverflow?o:o.map(function(R,L){return p(xe,{key:R.key,overflowDisabled:L>V.value},{default:function(){return R}})}),j=((n=l.overflowedIndicator)===null||n===void 0?void 0:n.call(l))||p(jn,null,null);return p(be,h(h({},v),{},{onMousedown:e.onMousedown,prefixCls:"".concat(f.value,"-overflow"),component:"ul",itemComponent:Zn,class:[ee.value,v.class],role:"menu",id:e.id,data:C,renderRawItem:function(L){return L},renderRawRest:function(L){var z=L.length,ne=z?o.slice(-z):null;return p(Pe,null,[p(Ue,{eventKey:Ie,key:Ie,title:j,disabled:E,internalPopupClose:z===0},{default:function(){return ne}}),p(ze,null,{default:function(){return[p(Ue,{eventKey:Ie,key:Ie,title:j,disabled:E,internalPopupClose:z===0},{default:function(){return ne}})]}})])},maxCount:M.value!=="horizontal"||e.disabledOverflow?be.INVALIDATE:be.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(L){V.value=L}}),{default:function(){return[p(xn,{to:"body"},{default:function(){return[p("div",{style:{display:"none"},"aria-hidden":!0},[p(ze,null,{default:function(){return[C]}})])]}})]}})}}});export{vt as D,jn as E,ft as M,Ue as S,Zn as _,rn as a,ue as u};
