import{bC as It,v as B,k as x,aK as De,a7 as F,T as Ke,a8 as go,bE as Oe,c2 as kt,m as p,a9 as mo,R as _,ab as Se,cD as yt,cE as ho,ao as yo,cF as bo,cG as wo,h as ee,z as Ge,p as Re,j as L,r as ie,_ as se,u as Me,y as le,o as V,F as $e,n as _t,q as Oo,cd as Ze,ah as jt,ak as Eo,A as To,X as Co,a3 as Ro,a2 as Ao,K as Ae,cH as Ft,cv as Ee,cc as Dt,l as pe,w as Y,aB as Xe,H as He,cy as Lt,c3 as xo,aQ as bt,ca as Po,t as Nt,aN as wt,bG as So,am as we,aj as Mo,an as Bo,cI as Io,br as ko,bo as _o,cJ as jo,I as Fo}from"./index-Abyzm83G.js";import{E as Do}from"./index-CgHVEuY3.js";import{i as Lo}from"./isUndefined-DCTLXrZ8.js";const X=(e,t,{checkForDefaultPrevented:o=!0}={})=>r=>{const a=e==null?void 0:e(r);if(o===!1||!a)return t==null?void 0:t(r)},qr=e=>t=>t.pointerType==="mouse"?e(t):void 0,No=It({type:B(Boolean),default:null}),$o=It({type:B(Function)}),Ho=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,n=[t],r={[e]:No,[o]:$o};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:f,onHide:d})=>{const h=go(),{emit:g}=h,y=h.props,v=x(()=>De(y[o])),E=x(()=>y[e]===null),c=w=>{i.value!==!0&&(i.value=!0,u&&(u.value=w),De(f)&&f(w))},O=w=>{i.value!==!1&&(i.value=!1,u&&(u.value=w),De(d)&&d(w))},T=w=>{if(y.disabled===!0||De(l)&&!l())return;const A=v.value&&Oe;A&&g(t,!0),(E.value||!A)&&c(w)},m=w=>{if(y.disabled===!0||!Oe)return;const A=v.value&&Oe;A&&g(t,!1),(E.value||!A)&&O(w)},C=w=>{kt(w)&&(y.disabled&&w?v.value&&g(t,!1):i.value!==w&&(w?c():O()))},R=()=>{i.value?m():T()};return F(()=>y[e],C),s&&h.appContext.config.globalProperties.$route!==void 0&&F(()=>({...h.proxy.$route}),()=>{s.value&&i.value&&m()}),Ke(()=>{C(y[e])}),{hide:m,show:T,toggle:R,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:n}};var N="top",W="bottom",K="right",$="left",Ye="auto",Be=[N,W,K,$],fe="start",xe="end",Wo="clippingParents",$t="viewport",be="popper",Ko="reference",Ot=Be.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+xe])},[]),Qe=[].concat(Be,[Ye]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+xe])},[]),qo="beforeRead",zo="read",Uo="afterRead",Vo="beforeMain",Go="main",Zo="afterMain",Jo="beforeWrite",Xo="write",Yo="afterWrite",Qo=[qo,zo,Uo,Vo,Go,Zo,Jo,Xo,Yo];function Z(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=q(e).Element;return e instanceof t||e instanceof Element}function H(e){var t=q(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function et(e){if(typeof ShadowRoot>"u")return!1;var t=q(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function en(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},a=t.elements[o];!H(a)||!Z(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function tn(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],a=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),u=i.reduce(function(s,l){return s[l]="",s},{});!H(r)||!Z(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var Ht={name:"applyStyles",enabled:!0,phase:"write",fn:en,effect:tn,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var o=e.getBoundingClientRect(),n=1,r=1;if(H(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(n=ve(o.width)/i||1),a>0&&(r=ve(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function tt(e){var t=ge(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function Wt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&et(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Q(e){return q(e).getComputedStyle(e)}function on(e){return["table","td","th"].indexOf(Z(e))>=0}function te(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(et(e)?e.host:null)||te(e)}function Et(e){return!H(e)||Q(e).position==="fixed"?null:e.offsetParent}function nn(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&H(e)){var n=Q(e);if(n.position==="fixed")return null}var r=qe(e);for(et(r)&&(r=r.host);H(r)&&["html","body"].indexOf(Z(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Ie(e){for(var t=q(e),o=Et(e);o&&on(o)&&Q(o).position==="static";)o=Et(o);return o&&(Z(o)==="html"||Z(o)==="body"&&Q(o).position==="static")?t:o||nn(e)||t}function ot(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,o){return ae(e,We(t,o))}function rn(e,t,o){var n=Te(e,t,o);return n>o?o:n}function Kt(){return{top:0,right:0,bottom:0,left:0}}function qt(e){return Object.assign({},Kt(),e)}function zt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var an=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,qt(typeof e!="number"?e:zt(e,Be))};function sn(e){var t,o=e.state,n=e.name,r=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,u=G(o.placement),s=ot(u),l=[$,K].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!i)){var d=an(r.padding,o),h=tt(a),g=s==="y"?N:$,y=s==="y"?W:K,v=o.rects.reference[f]+o.rects.reference[s]-i[s]-o.rects.popper[f],E=i[s]-o.rects.reference[s],c=Ie(a),O=c?s==="y"?c.clientHeight||0:c.clientWidth||0:0,T=v/2-E/2,m=d[g],C=O-h[f]-d[y],R=O/2-h[f]/2+T,w=Te(m,R,C),A=s;o.modifiersData[n]=(t={},t[A]=w,t.centerOffset=w-R,t)}}function ln(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Wt(t.elements.popper,r)||(t.elements.arrow=r))}var un={name:"arrow",enabled:!0,phase:"main",fn:sn,effect:ln,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var cn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pn(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(o*r)/r||0}}function Tt(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,h=i.x,g=h===void 0?0:h,y=i.y,v=y===void 0?0:y,E=typeof f=="function"?f({x:g,y:v}):{x:g,y:v};g=E.x,v=E.y;var c=i.hasOwnProperty("x"),O=i.hasOwnProperty("y"),T=$,m=N,C=window;if(l){var R=Ie(o),w="clientHeight",A="clientWidth";if(R===q(o)&&(R=te(o),Q(R).position!=="static"&&u==="absolute"&&(w="scrollHeight",A="scrollWidth")),R=R,r===N||(r===$||r===K)&&a===xe){m=W;var k=d&&R===C&&C.visualViewport?C.visualViewport.height:R[w];v-=k-n.height,v*=s?1:-1}if(r===$||(r===N||r===W)&&a===xe){T=K;var P=d&&R===C&&C.visualViewport?C.visualViewport.width:R[A];g-=P-n.width,g*=s?1:-1}}var I=Object.assign({position:u},l&&cn),D=f===!0?pn({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,s){var S;return Object.assign({},I,(S={},S[m]=O?"0":"",S[T]=c?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},I,(t={},t[m]=O?v+"px":"",t[T]=c?g+"px":"",t.transform="",t))}function fn(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,i=a===void 0?!0:a,u=o.roundOffsets,s=u===void 0?!0:u,l={placement:G(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Ut={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn,data:{}},Le={passive:!0};function dn(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=r===void 0?!0:r,i=n.resize,u=i===void 0?!0:i,s=q(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",o.update,Le)}),u&&s.addEventListener("resize",o.update,Le),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",o.update,Le)}),u&&s.removeEventListener("resize",o.update,Le)}}var Vt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dn,data:{}},vn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return vn[t]})}var gn={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return gn[t]})}function nt(e){var t=q(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function rt(e){return ge(te(e)).left+nt(e).scrollLeft}function mn(e){var t=q(e),o=te(e),n=t.visualViewport,r=o.clientWidth,a=o.clientHeight,i=0,u=0;return n&&(r=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,u=n.offsetTop)),{width:r,height:a,x:i+rt(e),y:u}}function hn(e){var t,o=te(e),n=nt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ae(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-n.scrollLeft+rt(e),s=-n.scrollTop;return Q(r||o).direction==="rtl"&&(u+=ae(o.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function at(e){var t=Q(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function Gt(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:H(e)&&at(e)?e:Gt(qe(e))}function Ce(e,t){var o;t===void 0&&(t=[]);var n=Gt(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),a=q(n),i=r?[a].concat(a.visualViewport||[],at(n)?n:[]):n,u=t.concat(i);return r?u:u.concat(Ce(qe(i)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yn(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Rt(e,t){return t===$t?Je(mn(e)):de(t)?yn(t):Je(hn(te(e)))}function bn(e){var t=Ce(qe(e)),o=["absolute","fixed"].indexOf(Q(e).position)>=0,n=o&&H(e)?Ie(e):e;return de(n)?t.filter(function(r){return de(r)&&Wt(r,n)&&Z(r)!=="body"}):[]}function wn(e,t,o){var n=t==="clippingParents"?bn(e):[].concat(t),r=[].concat(n,[o]),a=r[0],i=r.reduce(function(u,s){var l=Rt(e,s);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Rt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Zt(e){var t=e.reference,o=e.element,n=e.placement,r=n?G(n):null,a=n?me(n):null,i=t.x+t.width/2-o.width/2,u=t.y+t.height/2-o.height/2,s;switch(r){case N:s={x:i,y:t.y-o.height};break;case W:s={x:i,y:t.y+t.height};break;case K:s={x:t.x+t.width,y:u};break;case $:s={x:t.x-o.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?ot(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:s[l]=s[l]-(t[f]/2-o[f]/2);break;case xe:s[l]=s[l]+(t[f]/2-o[f]/2);break}}return s}function Pe(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,a=o.boundary,i=a===void 0?Wo:a,u=o.rootBoundary,s=u===void 0?$t:u,l=o.elementContext,f=l===void 0?be:l,d=o.altBoundary,h=d===void 0?!1:d,g=o.padding,y=g===void 0?0:g,v=qt(typeof y!="number"?y:zt(y,Be)),E=f===be?Ko:be,c=e.rects.popper,O=e.elements[h?E:f],T=wn(de(O)?O:O.contextElement||te(e.elements.popper),i,s),m=ge(e.elements.reference),C=Zt({reference:m,element:c,strategy:"absolute",placement:r}),R=Je(Object.assign({},c,C)),w=f===be?R:m,A={top:T.top-w.top+v.top,bottom:w.bottom-T.bottom+v.bottom,left:T.left-w.left+v.left,right:w.right-T.right+v.right},k=e.modifiersData.offset;if(f===be&&k){var P=k[r];Object.keys(A).forEach(function(I){var D=[K,W].indexOf(I)>=0?1:-1,S=[N,W].indexOf(I)>=0?"y":"x";A[I]+=P[S]*D})}return A}function On(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,a=o.rootBoundary,i=o.padding,u=o.flipVariations,s=o.allowedAutoPlacements,l=s===void 0?Qe:s,f=me(n),d=f?u?Ot:Ot.filter(function(y){return me(y)===f}):Be,h=d.filter(function(y){return l.indexOf(y)>=0});h.length===0&&(h=d);var g=h.reduce(function(y,v){return y[v]=Pe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[G(v)],y},{});return Object.keys(g).sort(function(y,v){return g[y]-g[v]})}function En(e){if(G(e)===Ye)return[];var t=Ne(e);return[Ct(e),t,Ct(t)]}function Tn(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!0:i,s=o.fallbackPlacements,l=o.padding,f=o.boundary,d=o.rootBoundary,h=o.altBoundary,g=o.flipVariations,y=g===void 0?!0:g,v=o.allowedAutoPlacements,E=t.options.placement,c=G(E),O=c===E,T=s||(O||!y?[Ne(E)]:En(E)),m=[E].concat(T).reduce(function(ne,J){return ne.concat(G(J)===Ye?On(t,{placement:J,boundary:f,rootBoundary:d,padding:l,flipVariations:y,allowedAutoPlacements:v}):J)},[]),C=t.rects.reference,R=t.rects.popper,w=new Map,A=!0,k=m[0],P=0;P<m.length;P++){var I=m[P],D=G(I),S=me(I)===fe,z=[N,W].indexOf(D)>=0,j=z?"width":"height",b=Pe(t,{placement:I,boundary:f,rootBoundary:d,altBoundary:h,padding:l}),M=z?S?K:$:S?W:N;C[j]>R[j]&&(M=Ne(M));var oe=Ne(M),U=[];if(a&&U.push(b[D]<=0),u&&U.push(b[M]<=0,b[oe]<=0),U.every(function(ne){return ne})){k=I,A=!1;break}w.set(I,U)}if(A)for(var ke=y?3:1,ze=function(ne){var J=m.find(function(je){var ye=w.get(je);if(ye)return ye.slice(0,ne).every(function(ue){return ue})});if(J)return k=J,"break"},he=ke;he>0;he--){var _e=ze(he);if(_e==="break")break}t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}}var Cn={name:"flip",enabled:!0,phase:"main",fn:Tn,requiresIfExists:["offset"],data:{_skip:!1}};function At(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function xt(e){return[N,K,W,$].some(function(t){return e[t]>=0})}function Rn(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),s=At(i,n),l=At(u,r,a),f=xt(s),d=xt(l);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var An={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Rn};function xn(e,t,o){var n=G(e),r=[$,N].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[$,K].indexOf(n)>=0?{x:u,y:i}:{x:i,y:u}}function Pn(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=r===void 0?[0,0]:r,i=Qe.reduce(function(f,d){return f[d]=xn(d,t.rects,a),f},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=i}var Sn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Pn};function Mn(e){var t=e.state,o=e.name;t.modifiersData[o]=Zt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Jt={name:"popperOffsets",enabled:!0,phase:"read",fn:Mn,data:{}};function Bn(e){return e==="x"?"y":"x"}function In(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!1:i,s=o.boundary,l=o.rootBoundary,f=o.altBoundary,d=o.padding,h=o.tether,g=h===void 0?!0:h,y=o.tetherOffset,v=y===void 0?0:y,E=Pe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:f}),c=G(t.placement),O=me(t.placement),T=!O,m=ot(c),C=Bn(m),R=t.modifiersData.popperOffsets,w=t.rects.reference,A=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(R){if(a){var S,z=m==="y"?N:$,j=m==="y"?W:K,b=m==="y"?"height":"width",M=R[m],oe=M+E[z],U=M-E[j],ke=g?-A[b]/2:0,ze=O===fe?w[b]:A[b],he=O===fe?-A[b]:-w[b],_e=t.elements.arrow,ne=g&&_e?tt(_e):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Kt(),je=J[z],ye=J[j],ue=Te(0,w[b],ne[b]),so=T?w[b]/2-ke-ue-je-P.mainAxis:ze-ue-je-P.mainAxis,lo=T?-w[b]/2+ke+ue+ye+P.mainAxis:he+ue+ye+P.mainAxis,Ue=t.elements.arrow&&Ie(t.elements.arrow),uo=Ue?m==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,ut=(S=I==null?void 0:I[m])!=null?S:0,co=M+so-ut-uo,po=M+lo-ut,ct=Te(g?We(oe,co):oe,M,g?ae(U,po):U);R[m]=ct,D[m]=ct-M}if(u){var pt,fo=m==="x"?N:$,vo=m==="x"?W:K,re=R[C],Fe=C==="y"?"height":"width",ft=re+E[fo],dt=re-E[vo],Ve=[N,$].indexOf(c)!==-1,vt=(pt=I==null?void 0:I[C])!=null?pt:0,gt=Ve?ft:re-w[Fe]-A[Fe]-vt+P.altAxis,mt=Ve?re+w[Fe]+A[Fe]-vt-P.altAxis:dt,ht=g&&Ve?rn(gt,re,mt):Te(g?gt:ft,re,g?mt:dt);R[C]=ht,D[C]=ht-re}t.modifiersData[n]=D}}var kn={name:"preventOverflow",enabled:!0,phase:"main",fn:In,requiresIfExists:["offset"]};function _n(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jn(e){return e===q(e)||!H(e)?nt(e):_n(e)}function Fn(e){var t=e.getBoundingClientRect(),o=ve(t.width)/e.offsetWidth||1,n=ve(t.height)/e.offsetHeight||1;return o!==1||n!==1}function Dn(e,t,o){o===void 0&&(o=!1);var n=H(t),r=H(t)&&Fn(t),a=te(t),i=ge(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((Z(t)!=="body"||at(a))&&(u=jn(t)),H(t)?(s=ge(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=rt(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function Ln(e){var t=new Map,o=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function r(a){o.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!o.has(u)){var s=t.get(u);s&&r(s)}}),n.push(a)}return e.forEach(function(a){o.has(a.name)||r(a)}),n}function Nn(e){var t=Ln(e);return Qo.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function $n(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Hn(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function it(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,a=r===void 0?Pt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},f=[],d=!1,h={state:l,setOptions:function(v){var E=typeof v=="function"?v(l.options):v;y(),l.options=Object.assign({},a,l.options,E),l.scrollParents={reference:de(i)?Ce(i):i.contextElement?Ce(i.contextElement):[],popper:Ce(u)};var c=Nn(Hn([].concat(n,l.options.modifiers)));return l.orderedModifiers=c.filter(function(O){return O.enabled}),g(),h.update()},forceUpdate:function(){if(!d){var v=l.elements,E=v.reference,c=v.popper;if(St(E,c)){l.rects={reference:Dn(E,Ie(c),l.options.strategy==="fixed"),popper:tt(c)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(A){return l.modifiersData[A.name]=Object.assign({},A.data)});for(var O=0;O<l.orderedModifiers.length;O++){if(l.reset===!0){l.reset=!1,O=-1;continue}var T=l.orderedModifiers[O],m=T.fn,C=T.options,R=C===void 0?{}:C,w=T.name;typeof m=="function"&&(l=m({state:l,options:R,name:w,instance:h})||l)}}}},update:$n(function(){return new Promise(function(v){h.forceUpdate(),v(l)})}),destroy:function(){y(),d=!0}};if(!St(i,u))return h;h.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var E=v.name,c=v.options,O=c===void 0?{}:c,T=v.effect;if(typeof T=="function"){var m=T({state:l,name:E,instance:h,options:O}),C=function(){};f.push(m||C)}})}function y(){f.forEach(function(v){return v()}),f=[]}return h}}it();var Wn=[Vt,Jt,Ut,Ht];it({defaultModifiers:Wn});var Kn=[Vt,Jt,Ut,Ht,Sn,Cn,kn,un,An],qn=it({defaultModifiers:Kn});const zn=(e,t,o={})=>{const n={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Un(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=x(()=>{const{onFirstUpdate:s,placement:l,strategy:f,modifiers:d}=p(o);return{onFirstUpdate:s,placement:l||"bottom",strategy:f||"absolute",modifiers:[...d||[],n,{name:"applyStyles",enabled:!1}]}}),a=mo(),i=_({styles:{popper:{position:p(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return F(r,s=>{const l=p(a);l&&l.setOptions(s)},{deep:!0}),F([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=qn(s,l,p(r)))}),Se(()=>{u()}),{state:x(()=>{var s;return{...((s=p(a))==null?void 0:s.state)||{}}}),styles:x(()=>p(i).styles),attributes:x(()=>p(i).attributes),update:()=>{var s;return(s=p(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=p(a))==null?void 0:s.forceUpdate()},instanceRef:x(()=>p(a))}};function Un(e){const t=Object.keys(e.elements),o=yt(t.map(r=>[r,e.styles[r]||{}])),n=yt(t.map(r=>[r,e.attributes[r]]));return{styles:o,attributes:n}}function Mt(){let e;const t=(n,r)=>{o(),e=window.setTimeout(n,r)},o=()=>window.clearTimeout(e);return ho(()=>o()),{registerTimeout:t,cancelTimeout:o}}const Xt=()=>{const e=bo(),t=wo(),o=x(()=>`${e.value}-popper-container-${t.prefix}`),n=x(()=>`#${o.value}`);return{id:o,selector:n}},Vn=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Gn=()=>{const{id:e,selector:t}=Xt();return yo(()=>{Oe&&(document.body.querySelector(t.value)||Vn(e.value))}),{id:e,selector:t}},Zn=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Jn=({showAfter:e,hideAfter:t,autoClose:o,open:n,close:r})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:u}=Mt();return{onOpen:f=>{a(()=>{n(f);const d=p(o);Ge(d)&&d>0&&i(()=>{r(f)},d)},p(e))},onClose:f=>{u(),a(()=>{r(f)},p(t))}}},Yt=Symbol("elForwardRef"),Xn=e=>{Re(Yt,{setForwardRef:o=>{e.value=o}})},Yn=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),st=Symbol("popper"),Qt=Symbol("popperContent"),Qn=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],eo=ee({role:{type:String,values:Qn,default:"tooltip"}}),er=L({name:"ElPopper",inheritAttrs:!1}),tr=L({...er,props:eo,setup(e,{expose:t}){const o=e,n=_(),r=_(),a=_(),i=_(),u=x(()=>o.role),s={triggerRef:n,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Re(st,s),(l,f)=>ie(l.$slots,"default")}});var or=se(tr,[["__file","popper.vue"]]);const to=ee({arrowOffset:{type:Number,default:5}}),nr=L({name:"ElPopperArrow",inheritAttrs:!1}),rr=L({...nr,props:to,setup(e,{expose:t}){const o=e,n=Me("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=le(Qt,void 0);return F(()=>o.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(V(),$e("span",{ref_key:"arrowRef",ref:a,class:_t(p(n).e("arrow")),style:Oo(p(i)),"data-popper-arrow":""},null,6))}});var ar=se(rr,[["__file","arrow.vue"]]);const ir="ElOnlyChild",sr=L({name:ir,setup(e,{slots:t,attrs:o}){var n;const r=le(Yt),a=Yn((n=r==null?void 0:r.setForwardRef)!=null?n:Ze);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,o);if(!u||u.length>1)return null;const s=oo(u);return s?jt(Eo(s,o),[[a]]):null}}});function oo(e){if(!e)return null;const t=e;for(const o of t){if(To(o))switch(o.type){case Ao:continue;case Ro:case"svg":return Bt(o);case Co:return oo(o.children);default:return o}return Bt(o)}return null}function Bt(e){const t=Me("only-child");return Ae("span",{class:t.e("content")},[e])}const no=ee({virtualRef:{type:B(Object)},virtualTriggering:Boolean,onMouseenter:{type:B(Function)},onMouseleave:{type:B(Function)},onClick:{type:B(Function)},onKeydown:{type:B(Function)},onFocus:{type:B(Function)},onBlur:{type:B(Function)},onContextmenu:{type:B(Function)},id:String,open:Boolean}),lr=L({name:"ElPopperTrigger",inheritAttrs:!1}),ur=L({...lr,props:no,setup(e,{expose:t}){const o=e,{role:n,triggerRef:r}=le(st,void 0);Xn(r);const a=x(()=>u.value?o.id:void 0),i=x(()=>{if(n&&n.value==="tooltip")return o.open&&o.id?o.id:void 0}),u=x(()=>{if(n&&n.value!=="tooltip")return n.value}),s=x(()=>u.value?`${o.open}`:void 0);let l;const f=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return Ke(()=>{F(()=>o.virtualRef,d=>{d&&(r.value=Ft(d))},{immediate:!0}),F(r,(d,h)=>{l==null||l(),l=void 0,Ee(d)&&(f.forEach(g=>{var y;const v=o[g];v&&(d.addEventListener(g.slice(2).toLowerCase(),v),(y=h==null?void 0:h.removeEventListener)==null||y.call(h,g.slice(2).toLowerCase(),v))}),l=F([a,i,u,s],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((y,v)=>{Dt(g[v])?d.removeAttribute(y):d.setAttribute(y,g[v])})},{immediate:!0})),Ee(h)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>h.removeAttribute(g))},{immediate:!0})}),Se(()=>{if(l==null||l(),l=void 0,r.value&&Ee(r.value)){const d=r.value;f.forEach(h=>{const g=o[h];g&&d.removeEventListener(h.slice(2).toLowerCase(),g)}),r.value=void 0}}),t({triggerRef:r}),(d,h)=>d.virtualTriggering?He("v-if",!0):(V(),pe(p(sr),Xe({key:0},d.$attrs,{"aria-controls":p(a),"aria-describedby":p(i),"aria-expanded":p(s),"aria-haspopup":p(u)}),{default:Y(()=>[ie(d.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var cr=se(ur,[["__file","trigger.vue"]]);const pr=["fixed","absolute"],fr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:B(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Qe,default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},strategy:{type:String,values:pr,default:"absolute"}}),ro=ee({...fr,id:String,style:{type:B([String,Array,Object])},className:{type:B([String,Array,Object])},effect:{type:B(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:B([String,Array,Object])},popperStyle:{type:B([String,Array,Object])},referenceEl:{type:B(Object)},triggerTargetEl:{type:B(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Lt(["ariaLabel"])}),dr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},vr=(e,t=[])=>{const{placement:o,strategy:n,popperOptions:r}=e,a={placement:o,strategy:n,...r,modifiers:[...mr(e),...t]};return hr(a,r==null?void 0:r.modifiers),a},gr=e=>{if(Oe)return Ft(e)};function mr(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:n}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:o}}]}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const yr=0,br=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:n,role:r}=le(st,void 0),a=_(),i=_(),u=x(()=>({name:"eventListeners",enabled:!!e.visible})),s=x(()=>{var c;const O=p(a),T=(c=p(i))!=null?c:yr;return{name:"arrow",enabled:!Lo(O),options:{element:O,padding:T}}}),l=x(()=>({onFirstUpdate:()=>{y()},...vr(e,[p(s),p(u)])})),f=x(()=>gr(e.referenceEl)||p(n)),{attributes:d,state:h,styles:g,update:y,forceUpdate:v,instanceRef:E}=zn(f,o,l);return F(E,c=>t.value=c),Ke(()=>{F(()=>{var c;return(c=p(f))==null?void 0:c.getBoundingClientRect()},()=>{y()})}),{attributes:d,arrowRef:a,contentRef:o,instanceRef:E,state:h,styles:g,role:r,forceUpdate:v,update:y}},wr=(e,{attributes:t,styles:o,role:n})=>{const{nextZIndex:r}=xo(),a=Me("popper"),i=x(()=>p(t).popper),u=_(Ge(e.zIndex)?e.zIndex:r()),s=x(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=x(()=>[{zIndex:p(u)},p(o).popper,e.popperStyle||{}]),f=x(()=>n.value==="dialog"?"false":void 0),d=x(()=>p(o).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ge(e.zIndex)?e.zIndex:r()}}},Or=(e,t)=>{const o=_(!1),n=_();return{focusStartRef:n,trapped:o,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(n.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!o.value&&(l.target&&(n.value=l.target),o.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),o.value=!1)},onReleaseRequested:()=>{o.value=!1,t("close")}}},Er=L({name:"ElPopperContent"}),Tr=L({...Er,props:ro,emits:dr,setup(e,{expose:t,emit:o}){const n=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:f}=Or(n,o),{attributes:d,arrowRef:h,contentRef:g,styles:y,instanceRef:v,role:E,update:c}=br(n),{ariaModal:O,arrowStyle:T,contentAttrs:m,contentClass:C,contentStyle:R,updateZIndex:w}=wr(n,{styles:y,attributes:d,role:E}),A=le(bt,void 0),k=_();Re(Qt,{arrowStyle:T,arrowRef:h,arrowOffset:k}),A&&Re(bt,{...A,addInputId:Ze,removeInputId:Ze});let P;const I=(S=!0)=>{c(),S&&w()},D=()=>{I(!1),n.visible&&n.focusOnShow?a.value=!0:n.visible===!1&&(a.value=!1)};return Ke(()=>{F(()=>n.triggerTargetEl,(S,z)=>{P==null||P(),P=void 0;const j=p(S||g.value),b=p(z||g.value);Ee(j)&&(P=F([E,()=>n.ariaLabel,O,()=>n.id],M=>{["role","aria-label","aria-modal","id"].forEach((oe,U)=>{Dt(M[U])?j.removeAttribute(oe):j.setAttribute(oe,M[U])})},{immediate:!0})),b!==j&&Ee(b)&&["role","aria-label","aria-modal","id"].forEach(M=>{b.removeAttribute(M)})},{immediate:!0}),F(()=>n.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:I,contentStyle:R}),(S,z)=>(V(),$e("div",Xe({ref_key:"contentRef",ref:g},p(m),{style:p(R),class:p(C),tabindex:"-1",onMouseenter:j=>S.$emit("mouseenter",j),onMouseleave:j=>S.$emit("mouseleave",j)}),[Ae(p(Po),{trapped:p(a),"trap-on-focus-in":!0,"focus-trap-el":p(g),"focus-start-el":p(r),onFocusAfterTrapped:p(u),onFocusAfterReleased:p(i),onFocusin:p(s),onFocusoutPrevented:p(l),onReleaseRequested:p(f)},{default:Y(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}});var Cr=se(Tr,[["__file","content.vue"]]);const Rr=Nt(or),lt=Symbol("elTooltip"),ao=ee({...Zn,...ro,appendTo:{type:B([String,Object])},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:B(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Lt(["ariaLabel"])}),io=ee({...no,disabled:Boolean,trigger:{type:B([String,Array]),default:"hover"},triggerKeys:{type:B(Array),default:()=>[wt.enter,wt.space]}}),{useModelToggleProps:Ar,useModelToggleEmits:xr,useModelToggle:Pr}=Ho("visible"),Sr=ee({...eo,...Ar,...ao,...io,...to,showArrow:{type:Boolean,default:!0}}),Mr=[...xr,"before-show","before-hide","show","hide","open","close"],Br=(e,t)=>So(e)?e.includes(t):e===t,ce=(e,t,o)=>n=>{Br(p(e),t)&&o(n)},Ir=L({name:"ElTooltipTrigger"}),kr=L({...Ir,props:io,setup(e,{expose:t}){const o=e,n=Me("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=le(lt,void 0),f=_(null),d=()=>{if(p(r)||o.disabled)return!0},h=we(o,"trigger"),g=X(d,ce(h,"hover",u)),y=X(d,ce(h,"hover",s)),v=X(d,ce(h,"click",m=>{m.button===0&&l(m)})),E=X(d,ce(h,"focus",u)),c=X(d,ce(h,"focus",s)),O=X(d,ce(h,"contextmenu",m=>{m.preventDefault(),l(m)})),T=X(d,m=>{const{code:C}=m;o.triggerKeys.includes(C)&&(m.preventDefault(),l(m))});return t({triggerRef:f}),(m,C)=>(V(),pe(p(cr),{id:p(a),"virtual-ref":m.virtualRef,open:p(i),"virtual-triggering":m.virtualTriggering,class:_t(p(n).e("trigger")),onBlur:p(c),onClick:p(v),onContextmenu:p(O),onFocus:p(E),onMouseenter:p(g),onMouseleave:p(y),onKeydown:p(T)},{default:Y(()=>[ie(m.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var _r=se(kr,[["__file","trigger.vue"]]);const jr=L({name:"ElTooltipContent",inheritAttrs:!1}),Fr=L({...jr,props:ao,setup(e,{expose:t}){const o=e,{selector:n}=Xt(),r=Me("tooltip"),a=_(null);let i;const{controlled:u,id:s,open:l,trigger:f,onClose:d,onOpen:h,onShow:g,onHide:y,onBeforeShow:v,onBeforeHide:E}=le(lt,void 0),c=x(()=>o.transition||`${r.namespace.value}-fade-in-linear`),O=x(()=>o.persistent);Se(()=>{i==null||i()});const T=x(()=>p(O)?!0:p(l)),m=x(()=>o.disabled?!1:p(l)),C=x(()=>o.appendTo||n.value),R=x(()=>{var b;return(b=o.style)!=null?b:{}}),w=_(!0),A=()=>{y(),w.value=!0},k=()=>{if(p(u))return!0},P=X(k,()=>{o.enterable&&p(f)==="hover"&&h()}),I=X(k,()=>{p(f)==="hover"&&d()}),D=()=>{var b,M;(M=(b=a.value)==null?void 0:b.updatePopper)==null||M.call(b),v==null||v()},S=()=>{E==null||E()},z=()=>{g(),i=Io(x(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef}),()=>{if(p(u))return;p(f)!=="hover"&&d()})},j=()=>{o.virtualTriggering||d()};return F(()=>p(l),b=>{b?w.value=!1:i==null||i()},{flush:"post"}),F(()=>o.content,()=>{var b,M;(M=(b=a.value)==null?void 0:b.updatePopper)==null||M.call(b)}),t({contentRef:a}),(b,M)=>(V(),pe(p(Do),{disabled:!b.teleported,to:p(C)},{default:Y(()=>[Ae(Mo,{name:p(c),onAfterLeave:A,onBeforeEnter:D,onAfterEnter:z,onBeforeLeave:S},{default:Y(()=>[p(T)?jt((V(),pe(p(Cr),Xe({key:0,id:p(s),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":w.value,"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,p(R)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:p(m),"z-index":b.zIndex,onMouseenter:p(P),onMouseleave:p(I),onBlur:j,onClose:p(d)}),{default:Y(()=>[ie(b.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Bo,p(m)]]):He("v-if",!0)]),_:3},8,["name"])]),_:3},8,["disabled","to"]))}});var Dr=se(Fr,[["__file","content.vue"]]);const Lr=L({name:"ElTooltip"}),Nr=L({...Lr,props:Sr,emits:Mr,setup(e,{expose:t,emit:o}){const n=e;Gn();const r=ko(),a=_(),i=_(),u=()=>{var c;const O=p(a);O&&((c=O.popperInstanceRef)==null||c.update())},s=_(!1),l=_(),{show:f,hide:d,hasUpdateHandler:h}=Pr({indicator:s,toggleReason:l}),{onOpen:g,onClose:y}=Jn({showAfter:we(n,"showAfter"),hideAfter:we(n,"hideAfter"),autoClose:we(n,"autoClose"),open:f,close:d}),v=x(()=>kt(n.visible)&&!h.value);Re(lt,{controlled:v,id:r,open:_o(s),trigger:we(n,"trigger"),onOpen:c=>{g(c)},onClose:c=>{y(c)},onToggle:c=>{p(s)?y(c):g(c)},onShow:()=>{o("show",l.value)},onHide:()=>{o("hide",l.value)},onBeforeShow:()=>{o("before-show",l.value)},onBeforeHide:()=>{o("before-hide",l.value)},updatePopper:u}),F(()=>n.disabled,c=>{c&&s.value&&(s.value=!1)});const E=c=>{var O,T;const m=(T=(O=i.value)==null?void 0:O.contentRef)==null?void 0:T.popperContentRef,C=(c==null?void 0:c.relatedTarget)||document.activeElement;return m&&m.contains(C)};return jo(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:E,updatePopper:u,onOpen:g,onClose:y,hide:d}),(c,O)=>(V(),pe(p(Rr),{ref_key:"popperRef",ref:a,role:c.role},{default:Y(()=>[Ae(_r,{disabled:c.disabled,trigger:c.trigger,"trigger-keys":c.triggerKeys,"virtual-ref":c.virtualRef,"virtual-triggering":c.virtualTriggering},{default:Y(()=>[c.$slots.default?ie(c.$slots,"default",{key:0}):He("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ae(Dr,{ref_key:"contentRef",ref:i,"aria-label":c.ariaLabel,"boundaries-padding":c.boundariesPadding,content:c.content,disabled:c.disabled,effect:c.effect,enterable:c.enterable,"fallback-placements":c.fallbackPlacements,"hide-after":c.hideAfter,"gpu-acceleration":c.gpuAcceleration,offset:c.offset,persistent:c.persistent,"popper-class":c.popperClass,"popper-style":c.popperStyle,placement:c.placement,"popper-options":c.popperOptions,pure:c.pure,"raw-content":c.rawContent,"reference-el":c.referenceEl,"trigger-target-el":c.triggerTargetEl,"show-after":c.showAfter,strategy:c.strategy,teleported:c.teleported,transition:c.transition,"virtual-triggering":c.virtualTriggering,"z-index":c.zIndex,"append-to":c.appendTo},{default:Y(()=>[ie(c.$slots,"content",{},()=>[c.rawContent?(V(),$e("span",{key:0,innerHTML:c.content},null,8,["innerHTML"])):(V(),$e("span",{key:1},Fo(c.content),1))]),c.showArrow?(V(),pe(p(ar),{key:0,"arrow-offset":c.arrowOffset},null,8,["arrow-offset"])):He("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var $r=se(Nr,[["__file","tooltip.vue"]]);const zr=Nt($r);export{zr as E,sr as O,lt as T,ao as a,Qe as b,X as c,io as u,qr as w};
