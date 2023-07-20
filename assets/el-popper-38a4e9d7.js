import{b_ as Bt,a5 as M,k as A,bz as De,D as F,R as Ue,ac as gn,bQ as Oe,bC as It,n as c,a0 as mn,y as _,Z as Se,b$ as ht,c0 as hn,ba as bn,c1 as yn,c2 as wn,g as ee,ar as On,am as Ce,h as L,r as se,v as ie,j as ke,a4 as le,o as Z,l as Ne,p as _t,a1 as Tn,bn as Ze,T as jt,b8 as En,aL as Cn,H as Rn,a$ as An,a_ as xn,a as Re,c3 as Ft,bR as He,bm as Dt,c as ce,w as te,bx as Ge,s as Ae,c4 as Pn,bE as bt,c5 as Sn,x as Lt,ak as yt,aA as kn,b9 as we,U as Mn,aU as Bn,b0 as In,c6 as _n,bF as jn,c7 as Fn,c8 as Dn,t as Ln}from"./index.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},qr=e=>t=>t.pointerType==="mouse"?e(t):void 0;function $n(e){return e===void 0}const Nn=Bt({type:M(Boolean),default:null}),Hn=Bt({type:M(Function)}),$t=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Nn,[n]:Hn};return{useModelToggle:({indicator:s,toggleReason:u,shouldHideWhenRouteChanges:i,shouldProceed:l,onShow:f,onHide:d})=>{const h=gn(),{emit:g}=h,m=h.props,v=A(()=>De(m[n])),T=A(()=>m[e]===null),p=O=>{s.value!==!0&&(s.value=!0,u&&(u.value=O),De(f)&&f(O))},w=O=>{s.value!==!1&&(s.value=!1,u&&(u.value=O),De(d)&&d(O))},E=O=>{if(m.disabled===!0||De(l)&&!l())return;const R=v.value&&Oe;R&&g(t,!0),(T.value||!R)&&p(O)},b=O=>{if(m.disabled===!0||!Oe)return;const R=v.value&&Oe;R&&g(t,!1),(T.value||!R)&&w(O)},C=O=>{It(O)&&(m.disabled&&O?v.value&&g(t,!1):s.value!==O&&(O?p():w()))},x=()=>{s.value?b():E()};return F(()=>m[e],C),i&&h.appContext.config.globalProperties.$route!==void 0&&F(()=>({...h.proxy.$route}),()=>{i.value&&s.value&&b()}),Ue(()=>{C(m[e])}),{hide:b,show:E,toggle:x,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:o}};$t("modelValue");var H="top",q="bottom",K="right",W="left",Xe="auto",Me=[H,q,K,W],fe="start",xe="end",Wn="clippingParents",Nt="viewport",ye="popper",Un="reference",wt=Me.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+xe])},[]),Ye=[].concat(Me,[Xe]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+xe])},[]),qn="beforeRead",Kn="read",zn="afterRead",Vn="beforeMain",Zn="main",Jn="afterMain",Gn="beforeWrite",Xn="write",Yn="afterWrite",Qn=[qn,Kn,zn,Vn,Zn,Jn,Gn,Xn,Yn];function G(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=z(e).Element;return e instanceof t||e instanceof Element}function U(e){var t=z(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Qe(e){if(typeof ShadowRoot>"u")return!1;var t=z(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function eo(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!U(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(s){var u=r[s];u===!1?a.removeAttribute(s):a.setAttribute(s,u===!0?"":u)}))})}function to(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},s=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=s.reduce(function(i,l){return i[l]="",i},{});!U(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(i){r.removeAttribute(i)}))})}}var Ht={name:"applyStyles",enabled:!0,phase:"write",fn:eo,effect:to,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(U(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(o=ve(n.width)/s||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function et(e){var t=ge(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Wt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Qe(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Q(e){return z(e).getComputedStyle(e)}function no(e){return["table","td","th"].indexOf(G(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(Qe(e)?e.host:null)||ne(e)}function Ot(e){return!U(e)||Q(e).position==="fixed"?null:e.offsetParent}function oo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&U(e)){var o=Q(e);if(o.position==="fixed")return null}var r=qe(e);for(Qe(r)&&(r=r.host);U(r)&&["html","body"].indexOf(G(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Be(e){for(var t=z(e),n=Ot(e);n&&no(n)&&Q(n).position==="static";)n=Ot(n);return n&&(G(n)==="html"||G(n)==="body"&&Q(n).position==="static")?t:n||oo(e)||t}function tt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,n){return ae(e,We(t,n))}function ro(e,t,n){var o=Te(e,t,n);return o>n?n:o}function Ut(){return{top:0,right:0,bottom:0,left:0}}function qt(e){return Object.assign({},Ut(),e)}function Kt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var ao=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,qt(typeof e!="number"?e:Kt(e,Me))};function so(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,u=J(n.placement),i=tt(u),l=[W,K].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!s)){var d=ao(r.padding,n),h=et(a),g=i==="y"?H:W,m=i==="y"?q:K,v=n.rects.reference[f]+n.rects.reference[i]-s[i]-n.rects.popper[f],T=s[i]-n.rects.reference[i],p=Be(a),w=p?i==="y"?p.clientHeight||0:p.clientWidth||0:0,E=v/2-T/2,b=d[g],C=w-h[f]-d[m],x=w/2-h[f]/2+E,O=Te(b,x,C),R=i;n.modifiersData[o]=(t={},t[R]=O,t.centerOffset=O-x,t)}}function io(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Wt(t.elements.popper,r)||(t.elements.arrow=r))}var lo={name:"arrow",enabled:!0,phase:"main",fn:so,effect:io,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var uo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Tt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,s=e.offsets,u=e.position,i=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,h=s.x,g=h===void 0?0:h,m=s.y,v=m===void 0?0:m,T=typeof f=="function"?f({x:g,y:v}):{x:g,y:v};g=T.x,v=T.y;var p=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),E=W,b=H,C=window;if(l){var x=Be(n),O="clientHeight",R="clientWidth";if(x===z(n)&&(x=ne(n),Q(x).position!=="static"&&u==="absolute"&&(O="scrollHeight",R="scrollWidth")),x=x,r===H||(r===W||r===K)&&a===xe){b=q;var I=d&&x===C&&C.visualViewport?C.visualViewport.height:x[O];v-=I-o.height,v*=i?1:-1}if(r===W||(r===H||r===q)&&a===xe){E=K;var P=d&&x===C&&C.visualViewport?C.visualViewport.width:x[R];g-=P-o.width,g*=i?1:-1}}var k=Object.assign({position:u},l&&uo),D=f===!0?po({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,i){var S;return Object.assign({},k,(S={},S[b]=w?"0":"",S[E]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},k,(t={},t[b]=w?v+"px":"",t[E]=p?g+"px":"",t.transform="",t))}function co(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,s=a===void 0?!0:a,u=n.roundOffsets,i=u===void 0?!0:u,l={placement:J(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}},Le={passive:!0};function fo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,s=o.resize,u=s===void 0?!0:s,i=z(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",n.update,Le)}),u&&i.addEventListener("resize",n.update,Le),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",n.update,Le)}),u&&i.removeEventListener("resize",n.update,Le)}}var Vt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fo,data:{}},vo={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var go={start:"end",end:"start"};function Et(e){return e.replace(/start|end/g,function(t){return go[t]})}function nt(e){var t=z(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function ot(e){return ge(ne(e)).left+nt(e).scrollLeft}function mo(e){var t=z(e),n=ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,s=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:s+ot(e),y:u}}function ho(e){var t,n=ne(e),o=nt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+ot(e),i=-o.scrollTop;return Q(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:s,x:u,y:i}}function rt(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Zt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:U(e)&&rt(e)?e:Zt(qe(e))}function Ee(e,t){var n;t===void 0&&(t=[]);var o=Zt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=z(o),s=r?[a].concat(a.visualViewport||[],rt(o)?o:[]):o,u=t.concat(s);return r?u:u.concat(Ee(qe(s)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function bo(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ct(e,t){return t===Nt?Je(mo(e)):de(t)?bo(t):Je(ho(ne(e)))}function yo(e){var t=Ee(qe(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0,o=n&&U(e)?Be(e):e;return de(o)?t.filter(function(r){return de(r)&&Wt(r,o)&&G(r)!=="body"}):[]}function wo(e,t,n){var o=t==="clippingParents"?yo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],s=r.reduce(function(u,i){var l=Ct(e,i);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Ct(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Jt(e){var t=e.reference,n=e.element,o=e.placement,r=o?J(o):null,a=o?me(o):null,s=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,i;switch(r){case H:i={x:s,y:t.y-n.height};break;case q:i={x:s,y:t.y+t.height};break;case K:i={x:t.x+t.width,y:u};break;case W:i={x:t.x-n.width,y:u};break;default:i={x:t.x,y:t.y}}var l=r?tt(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:i[l]=i[l]-(t[f]/2-n[f]/2);break;case xe:i[l]=i[l]+(t[f]/2-n[f]/2);break}}return i}function Pe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,s=a===void 0?Wn:a,u=n.rootBoundary,i=u===void 0?Nt:u,l=n.elementContext,f=l===void 0?ye:l,d=n.altBoundary,h=d===void 0?!1:d,g=n.padding,m=g===void 0?0:g,v=qt(typeof m!="number"?m:Kt(m,Me)),T=f===ye?Un:ye,p=e.rects.popper,w=e.elements[h?T:f],E=wo(de(w)?w:w.contextElement||ne(e.elements.popper),s,i),b=ge(e.elements.reference),C=Jt({reference:b,element:p,strategy:"absolute",placement:r}),x=Je(Object.assign({},p,C)),O=f===ye?x:b,R={top:E.top-O.top+v.top,bottom:O.bottom-E.bottom+v.bottom,left:E.left-O.left+v.left,right:O.right-E.right+v.right},I=e.modifiersData.offset;if(f===ye&&I){var P=I[r];Object.keys(R).forEach(function(k){var D=[K,q].indexOf(k)>=0?1:-1,S=[H,q].indexOf(k)>=0?"y":"x";R[k]+=P[S]*D})}return R}function Oo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,i=n.allowedAutoPlacements,l=i===void 0?Ye:i,f=me(o),d=f?u?wt:wt.filter(function(m){return me(m)===f}):Me,h=d.filter(function(m){return l.indexOf(m)>=0});h.length===0&&(h=d);var g=h.reduce(function(m,v){return m[v]=Pe(e,{placement:v,boundary:r,rootBoundary:a,padding:s})[J(v)],m},{});return Object.keys(g).sort(function(m,v){return g[m]-g[v]})}function To(e){if(J(e)===Xe)return[];var t=$e(e);return[Et(e),t,Et(t)]}function Eo(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,s=n.altAxis,u=s===void 0?!0:s,i=n.fallbackPlacements,l=n.padding,f=n.boundary,d=n.rootBoundary,h=n.altBoundary,g=n.flipVariations,m=g===void 0?!0:g,v=n.allowedAutoPlacements,T=t.options.placement,p=J(T),w=p===T,E=i||(w||!m?[$e(T)]:To(T)),b=[T].concat(E).reduce(function(oe,X){return oe.concat(J(X)===Xe?Oo(t,{placement:X,boundary:f,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,I=b[0],P=0;P<b.length;P++){var k=b[P],D=J(k),S=me(k)===fe,$=[H,q].indexOf(D)>=0,j=$?"width":"height",B=Pe(t,{placement:k,boundary:f,rootBoundary:d,altBoundary:h,padding:l}),y=$?S?K:W:S?q:H;C[j]>x[j]&&(y=$e(y));var N=$e(y),V=[];if(a&&V.push(B[D]<=0),u&&V.push(B[y]<=0,B[N]<=0),V.every(function(oe){return oe})){I=k,R=!1;break}O.set(k,V)}if(R)for(var Ie=m?3:1,Ke=function(oe){var X=b.find(function(je){var be=O.get(je);if(be)return be.slice(0,oe).every(function(ue){return ue})});if(X)return I=X,"break"},he=Ie;he>0;he--){var _e=Ke(he);if(_e==="break")break}t.placement!==I&&(t.modifiersData[o]._skip=!0,t.placement=I,t.reset=!0)}}var Co={name:"flip",enabled:!0,phase:"main",fn:Eo,requiresIfExists:["offset"],data:{_skip:!1}};function Rt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function At(e){return[H,K,q,W].some(function(t){return e[t]>=0})}function Ro(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,s=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),i=Rt(s,o),l=Rt(u,r,a),f=At(i),d=At(l);t.modifiersData[n]={referenceClippingOffsets:i,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var Ao={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ro};function xo(e,t,n){var o=J(e),r=[W,H].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=a[0],u=a[1];return s=s||0,u=(u||0)*r,[W,K].indexOf(o)>=0?{x:u,y:s}:{x:s,y:u}}function Po(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,s=Ye.reduce(function(f,d){return f[d]=xo(d,t.rects,a),f},{}),u=s[t.placement],i=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=s}var So={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function ko(e){var t=e.state,n=e.name;t.modifiersData[n]=Jt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Gt={name:"popperOffsets",enabled:!0,phase:"read",fn:ko,data:{}};function Mo(e){return e==="x"?"y":"x"}function Bo(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,s=n.altAxis,u=s===void 0?!1:s,i=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.padding,h=n.tether,g=h===void 0?!0:h,m=n.tetherOffset,v=m===void 0?0:m,T=Pe(t,{boundary:i,rootBoundary:l,padding:d,altBoundary:f}),p=J(t.placement),w=me(t.placement),E=!w,b=tt(p),C=Mo(b),x=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,I=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var S,$=b==="y"?H:W,j=b==="y"?q:K,B=b==="y"?"height":"width",y=x[b],N=y+T[$],V=y-T[j],Ie=g?-R[B]/2:0,Ke=w===fe?O[B]:R[B],he=w===fe?-R[B]:-O[B],_e=t.elements.arrow,oe=g&&_e?et(_e):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ut(),je=X[$],be=X[j],ue=Te(0,O[B],oe[B]),ln=E?O[B]/2-Ie-ue-je-P.mainAxis:Ke-ue-je-P.mainAxis,un=E?-O[B]/2+Ie+ue+be+P.mainAxis:he+ue+be+P.mainAxis,ze=t.elements.arrow&&Be(t.elements.arrow),pn=ze?b==="y"?ze.clientTop||0:ze.clientLeft||0:0,lt=(S=k==null?void 0:k[b])!=null?S:0,cn=y+ln-lt-pn,fn=y+un-lt,ut=Te(g?We(N,cn):N,y,g?ae(V,fn):V);x[b]=ut,D[b]=ut-y}if(u){var pt,dn=b==="x"?H:W,vn=b==="x"?q:K,re=x[C],Fe=C==="y"?"height":"width",ct=re+T[dn],ft=re-T[vn],Ve=[H,W].indexOf(p)!==-1,dt=(pt=k==null?void 0:k[C])!=null?pt:0,vt=Ve?ct:re-O[Fe]-R[Fe]-dt+P.altAxis,gt=Ve?re+O[Fe]+R[Fe]-dt-P.altAxis:ft,mt=g&&Ve?ro(vt,re,gt):Te(g?vt:ct,re,g?gt:ft);x[C]=mt,D[C]=mt-re}t.modifiersData[o]=D}}var Io={name:"preventOverflow",enabled:!0,phase:"main",fn:Bo,requiresIfExists:["offset"]};function _o(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jo(e){return e===z(e)||!U(e)?nt(e):_o(e)}function Fo(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Do(e,t,n){n===void 0&&(n=!1);var o=U(t),r=U(t)&&Fo(t),a=ne(t),s=ge(e,r),u={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||rt(a))&&(u=jo(t)),U(t)?(i=ge(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=ot(a))),{x:s.left+u.scrollLeft-i.x,y:s.top+u.scrollTop-i.y,width:s.width,height:s.height}}function Lo(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(u){if(!n.has(u)){var i=t.get(u);i&&r(i)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function $o(e){var t=Lo(e);return Qn.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function No(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ho(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var xt={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function at(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?xt:r;return function(s,u,i){i===void 0&&(i=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},f=[],d=!1,h={state:l,setOptions:function(v){var T=typeof v=="function"?v(l.options):v;m(),l.options=Object.assign({},a,l.options,T),l.scrollParents={reference:de(s)?Ee(s):s.contextElement?Ee(s.contextElement):[],popper:Ee(u)};var p=$o(Ho([].concat(o,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),g(),h.update()},forceUpdate:function(){if(!d){var v=l.elements,T=v.reference,p=v.popper;if(Pt(T,p)){l.rects={reference:Do(T,Be(p),l.options.strategy==="fixed"),popper:et(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],b=E.fn,C=E.options,x=C===void 0?{}:C,O=E.name;typeof b=="function"&&(l=b({state:l,options:x,name:O,instance:h})||l)}}}},update:No(function(){return new Promise(function(v){h.forceUpdate(),v(l)})}),destroy:function(){m(),d=!0}};if(!Pt(s,u))return h;h.setOptions(i).then(function(v){!d&&i.onFirstUpdate&&i.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var T=v.name,p=v.options,w=p===void 0?{}:p,E=v.effect;if(typeof E=="function"){var b=E({state:l,name:T,instance:h,options:w}),C=function(){};f.push(b||C)}})}function m(){f.forEach(function(v){return v()}),f=[]}return h}}at();var Wo=[Vt,Gt,zt,Ht];at({defaultModifiers:Wo});var Uo=[Vt,Gt,zt,Ht,So,Co,Io,lo,Ao],qo=at({defaultModifiers:Uo});const Ko=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:i})=>{const l=zo(i);Object.assign(s.value,l)},requires:["computeStyles"]},r=A(()=>{const{onFirstUpdate:i,placement:l,strategy:f,modifiers:d}=c(n);return{onFirstUpdate:i,placement:l||"bottom",strategy:f||"absolute",modifiers:[...d||[],o,{name:"applyStyles",enabled:!1}]}}),a=mn(),s=_({styles:{popper:{position:c(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return F(r,i=>{const l=c(a);l&&l.setOptions(i)},{deep:!0}),F([e,t],([i,l])=>{u(),!(!i||!l)&&(a.value=qo(i,l,c(r)))}),Se(()=>{u()}),{state:A(()=>{var i;return{...((i=c(a))==null?void 0:i.state)||{}}}),styles:A(()=>c(s).styles),attributes:A(()=>c(s).attributes),update:()=>{var i;return(i=c(a))==null?void 0:i.update()},forceUpdate:()=>{var i;return(i=c(a))==null?void 0:i.forceUpdate()},instanceRef:A(()=>c(a))}};function zo(e){const t=Object.keys(e.elements),n=ht(t.map(r=>[r,e.styles[r]||{}])),o=ht(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function St(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return hn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let kt;const Xt=()=>{const e=yn(),t=wn(),n=A(()=>`${e.value}-popper-container-${t.prefix}`),o=A(()=>`#${n.value}`);return{id:n,selector:o}},Vo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Zo=()=>{const{id:e,selector:t}=Xt();return bn(()=>{Oe&&!kt&&!document.body.querySelector(t.value)&&(kt=Vo(e.value))}),{id:e,selector:t}},Jo=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Go=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=St(),{registerTimeout:s,cancelTimeout:u}=St();return{onOpen:f=>{a(()=>{o(f);const d=c(n);On(d)&&d>0&&s(()=>{r(f)},d)},c(e))},onClose:f=>{u(),a(()=>{r(f)},c(t))}}},Yt=Symbol("elForwardRef"),Xo=e=>{Ce(Yt,{setForwardRef:n=>{e.value=n}})},Yo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),st=Symbol("popper"),Qt=Symbol("popperContent"),Qo=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],en=ee({role:{type:String,values:Qo,default:"tooltip"}}),er=L({name:"ElPopper",inheritAttrs:!1}),tr=L({...er,props:en,setup(e,{expose:t}){const n=e,o=_(),r=_(),a=_(),s=_(),u=A(()=>n.role),i={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:s,role:u};return t(i),Ce(st,i),(l,f)=>se(l.$slots,"default")}});var nr=ie(tr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const tn=ee({arrowOffset:{type:Number,default:5}}),or=L({name:"ElPopperArrow",inheritAttrs:!1}),rr=L({...or,props:tn,setup(e,{expose:t}){const n=e,o=ke("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:s}=le(Qt,void 0);return F(()=>n.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,i)=>(Z(),Ne("span",{ref_key:"arrowRef",ref:a,class:_t(c(o).e("arrow")),style:Tn(c(s)),"data-popper-arrow":""},null,6))}});var ar=ie(rr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const sr="ElOnlyChild",ir=L({name:sr,setup(e,{slots:t,attrs:n}){var o;const r=le(Yt),a=Yo((o=r==null?void 0:r.setForwardRef)!=null?o:Ze);return()=>{var s;const u=(s=t.default)==null?void 0:s.call(t,n);if(!u||u.length>1)return null;const i=nn(u);return i?jt(En(i,n),[[a]]):null}}});function nn(e){if(!e)return null;const t=e;for(const n of t){if(Cn(n))switch(n.type){case xn:continue;case An:case"svg":return Mt(n);case Rn:return nn(n.children);default:return n}return Mt(n)}return null}function Mt(e){const t=ke("only-child");return Re("span",{class:t.e("content")},[e])}const on=ee({virtualRef:{type:M(Object)},virtualTriggering:Boolean,onMouseenter:{type:M(Function)},onMouseleave:{type:M(Function)},onClick:{type:M(Function)},onKeydown:{type:M(Function)},onFocus:{type:M(Function)},onBlur:{type:M(Function)},onContextmenu:{type:M(Function)},id:String,open:Boolean}),lr=L({name:"ElPopperTrigger",inheritAttrs:!1}),ur=L({...lr,props:on,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(st,void 0);Xo(r);const a=A(()=>u.value?n.id:void 0),s=A(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=A(()=>{if(o&&o.value!=="tooltip")return o.value}),i=A(()=>u.value?`${n.open}`:void 0);let l;return Ue(()=>{F(()=>n.virtualRef,f=>{f&&(r.value=Ft(f))},{immediate:!0}),F(r,(f,d)=>{l==null||l(),l=void 0,He(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(h=>{var g;const m=n[h];m&&(f.addEventListener(h.slice(2).toLowerCase(),m),(g=d==null?void 0:d.removeEventListener)==null||g.call(d,h.slice(2).toLowerCase(),m))}),l=F([a,s,u,i],h=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Dt(h[m])?f.removeAttribute(g):f.setAttribute(g,h[m])})},{immediate:!0})),He(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(h=>d.removeAttribute(h))},{immediate:!0})}),Se(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(f,d)=>f.virtualTriggering?Ae("v-if",!0):(Z(),ce(c(ir),Ge({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(s),"aria-expanded":c(i),"aria-haspopup":c(u)}),{default:te(()=>[se(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var pr=ie(ur,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const cr=["fixed","absolute"],fr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:M(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ye,default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),rn=ee({...fr,id:String,style:{type:M([String,Array,Object])},className:{type:M([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:M([String,Array,Object])},popperStyle:{type:M([String,Array,Object])},referenceEl:{type:M(Object)},triggerTargetEl:{type:M(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},vr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...mr(e),...t]};return hr(a,r==null?void 0:r.modifiers),a},gr=e=>{if(Oe)return Ft(e)};function mr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const br=0,yr=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(st,void 0),a=_(),s=_(),u=A(()=>({name:"eventListeners",enabled:!!e.visible})),i=A(()=>{var p;const w=c(a),E=(p=c(s))!=null?p:br;return{name:"arrow",enabled:!$n(w),options:{element:w,padding:E}}}),l=A(()=>({onFirstUpdate:()=>{m()},...vr(e,[c(i),c(u)])})),f=A(()=>gr(e.referenceEl)||c(o)),{attributes:d,state:h,styles:g,update:m,forceUpdate:v,instanceRef:T}=Ko(f,n,l);return F(T,p=>t.value=p),Ue(()=>{F(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:T,state:h,styles:g,role:r,forceUpdate:v,update:m}},wr=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=Pn(),a=ke("popper"),s=A(()=>c(t).popper),u=_(e.zIndex||r()),i=A(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=A(()=>[{zIndex:c(u)},c(n).popper,e.popperStyle||{}]),f=A(()=>o.value==="dialog"?"false":void 0),d=A(()=>c(n).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:s,contentClass:i,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=e.zIndex||r()}}},Or=(e,t)=>{const n=_(!1),o=_();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Tr=L({name:"ElPopperContent"}),Er=L({...Tr,props:rn,emits:dr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:s,onFocusAfterTrapped:u,onFocusInTrap:i,onFocusoutPrevented:l,onReleaseRequested:f}=Or(o,n),{attributes:d,arrowRef:h,contentRef:g,styles:m,instanceRef:v,role:T,update:p}=yr(o),{ariaModal:w,arrowStyle:E,contentAttrs:b,contentClass:C,contentStyle:x,updateZIndex:O}=wr(o,{styles:m,attributes:d,role:T}),R=le(bt,void 0),I=_();Ce(Qt,{arrowStyle:E,arrowRef:h,arrowOffset:I}),R&&(R.addInputId||R.removeInputId)&&Ce(bt,{...R,addInputId:Ze,removeInputId:Ze});let P;const k=(S=!0)=>{p(),S&&O()},D=()=>{k(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return Ue(()=>{F(()=>o.triggerTargetEl,(S,$)=>{P==null||P(),P=void 0;const j=c(S||g.value),B=c($||g.value);He(j)&&(P=F([T,()=>o.ariaLabel,w,()=>o.id],y=>{["role","aria-label","aria-modal","id"].forEach((N,V)=>{Dt(y[V])?j.removeAttribute(N):j.setAttribute(N,y[V])})},{immediate:!0})),B!==j&&He(B)&&["role","aria-label","aria-modal","id"].forEach(y=>{B.removeAttribute(y)})},{immediate:!0}),F(()=>o.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:k,contentStyle:x}),(S,$)=>(Z(),Ne("div",Ge({ref_key:"contentRef",ref:g},c(b),{style:c(x),class:c(C),tabindex:"-1",onMouseenter:$[0]||($[0]=j=>S.$emit("mouseenter",j)),onMouseleave:$[1]||($[1]=j=>S.$emit("mouseleave",j))}),[Re(c(Sn),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(g),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(s),onFocusin:c(i),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:te(()=>[se(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Cr=ie(Er,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const Rr=Lt(nr),it=Symbol("elTooltip"),an=ee({...Jo,...rn,appendTo:{type:M([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:M(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),sn=ee({...on,disabled:Boolean,trigger:{type:M([String,Array]),default:"hover"},triggerKeys:{type:M(Array),default:()=>[yt.enter,yt.space]}}),{useModelToggleProps:Ar,useModelToggleEmits:xr,useModelToggle:Pr}=$t("visible"),Sr=ee({...en,...Ar,...an,...sn,...tn,showArrow:{type:Boolean,default:!0}}),kr=[...xr,"before-show","before-hide","show","hide","open","close"],Mr=(e,t)=>kn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Mr(c(e),t)&&n(o)},Br=L({name:"ElTooltipTrigger"}),Ir=L({...Br,props:sn,setup(e,{expose:t}){const n=e,o=ke("tooltip"),{controlled:r,id:a,open:s,onOpen:u,onClose:i,onToggle:l}=le(it,void 0),f=_(null),d=()=>{if(c(r)||n.disabled)return!0},h=we(n,"trigger"),g=Y(d,pe(h,"hover",u)),m=Y(d,pe(h,"hover",i)),v=Y(d,pe(h,"click",b=>{b.button===0&&l(b)})),T=Y(d,pe(h,"focus",u)),p=Y(d,pe(h,"focus",i)),w=Y(d,pe(h,"contextmenu",b=>{b.preventDefault(),l(b)})),E=Y(d,b=>{const{code:C}=b;n.triggerKeys.includes(C)&&(b.preventDefault(),l(b))});return t({triggerRef:f}),(b,C)=>(Z(),ce(c(pr),{id:c(a),"virtual-ref":b.virtualRef,open:c(s),"virtual-triggering":b.virtualTriggering,class:_t(c(o).e("trigger")),onBlur:c(p),onClick:c(v),onContextmenu:c(w),onFocus:c(T),onMouseenter:c(g),onMouseleave:c(m),onKeydown:c(E)},{default:te(()=>[se(b.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var _r=ie(Ir,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const jr=L({name:"ElTooltipContent",inheritAttrs:!1}),Fr=L({...jr,props:an,setup(e,{expose:t}){const n=e,{selector:o}=Xt(),r=ke("tooltip"),a=_(null),s=_(!1),{controlled:u,id:i,open:l,trigger:f,onClose:d,onOpen:h,onShow:g,onHide:m,onBeforeShow:v,onBeforeHide:T}=le(it,void 0),p=A(()=>n.transition||`${r.namespace.value}-fade-in-linear`),w=A(()=>n.persistent);Se(()=>{s.value=!0});const E=A(()=>c(w)?!0:c(l)),b=A(()=>n.disabled?!1:c(l)),C=A(()=>n.appendTo||o.value),x=A(()=>{var y;return(y=n.style)!=null?y:{}}),O=A(()=>!c(l)),R=()=>{m()},I=()=>{if(c(u))return!0},P=Y(I,()=>{n.enterable&&c(f)==="hover"&&h()}),k=Y(I,()=>{c(f)==="hover"&&d()}),D=()=>{var y,N;(N=(y=a.value)==null?void 0:y.updatePopper)==null||N.call(y),v==null||v()},S=()=>{T==null||T()},$=()=>{g(),B=_n(A(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef}),()=>{if(c(u))return;c(f)!=="hover"&&d()})},j=()=>{n.virtualTriggering||d()};let B;return F(()=>c(l),y=>{y||B==null||B()},{flush:"post"}),F(()=>n.content,()=>{var y,N;(N=(y=a.value)==null?void 0:y.updatePopper)==null||N.call(y)}),t({contentRef:a}),(y,N)=>(Z(),ce(In,{disabled:!y.teleported,to:c(C)},[Re(Bn,{name:c(p),onAfterLeave:R,onBeforeEnter:D,onAfterEnter:$,onBeforeLeave:S},{default:te(()=>[c(E)?jt((Z(),ce(c(Cr),Ge({key:0,id:c(i),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":c(O),"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,c(x)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:c(b),"z-index":y.zIndex,onMouseenter:c(P),onMouseleave:c(k),onBlur:j,onClose:c(d)}),{default:te(()=>[s.value?Ae("v-if",!0):se(y.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Mn,c(b)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Dr=ie(Fr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Lr=["innerHTML"],$r={key:1},Nr=L({name:"ElTooltip"}),Hr=L({...Nr,props:Sr,emits:kr,setup(e,{expose:t,emit:n}){const o=e;Zo();const r=jn(),a=_(),s=_(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},i=_(!1),l=_(),{show:f,hide:d,hasUpdateHandler:h}=Pr({indicator:i,toggleReason:l}),{onOpen:g,onClose:m}=Go({showAfter:we(o,"showAfter"),hideAfter:we(o,"hideAfter"),autoClose:we(o,"autoClose"),open:f,close:d}),v=A(()=>It(o.visible)&&!h.value);Ce(it,{controlled:v,id:r,open:Fn(i),trigger:we(o,"trigger"),onOpen:p=>{g(p)},onClose:p=>{m(p)},onToggle:p=>{c(i)?m(p):g(p)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),F(()=>o.disabled,p=>{p&&i.value&&(i.value=!1)});const T=()=>{var p,w;const E=(w=(p=s.value)==null?void 0:p.contentRef)==null?void 0:w.popperContentRef;return E&&E.contains(document.activeElement)};return Dn(()=>i.value&&d()),t({popperRef:a,contentRef:s,isFocusInsideContent:T,updatePopper:u,onOpen:g,onClose:m,hide:d}),(p,w)=>(Z(),ce(c(Rr),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Re(_r,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?se(p.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re(Dr,{ref_key:"contentRef",ref:s,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[se(p.$slots,"content",{},()=>[p.rawContent?(Z(),Ne("span",{key:0,innerHTML:p.content},null,8,Lr)):(Z(),Ne("span",$r,Ln(p.content),1))]),p.showArrow?(Z(),ce(c(ar),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Wr=ie(Hr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const Kr=Lt(Wr);export{Ye as E,ir as O,it as T,Kr as a,sn as b,Y as c,Go as d,an as u,qr as w,qo as y};
