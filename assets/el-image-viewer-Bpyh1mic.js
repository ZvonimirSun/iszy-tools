import{ch as Te,a_ as xe,bU as F,o as fe,h as Ie,j as Z,m as Ce,_ as Le,k as oe,bp as we,dg as $e,dh as Pe,aS as _e,u as ze,c6 as Ae,R as b,di as Be,a9 as Me,n as p,a7 as ve,T as Ee,q as me,r as h,w as g,K as f,ah as Ve,F as y,t as he,v as m,x as a,c7 as Fe,G as I,E as z,s as x,$ as Ye,aN as T,bf as Xe,Y as ne,bd as De,be as He,N as je,H as Se,dj as Ke,bG as We,y as qe,dk as Ze,dl as Ge,Z as Ue,ai as Qe,an as Je,aP as Y,db as ea,aQ as V,al as Ne,z as Oe,b3 as aa,c5 as ta,dm as sa,aF as na,aB as ye,b5 as be,br as ke,bX as oa,aI as la,dn as ra,dp as ia}from"./index-BYYPt2FS.js";import{E as ca}from"./index-8vXge_Gi.js";var ua="Expected a function";function de(c,C,l){var n=!0,o=!0;if(typeof c!="function")throw new TypeError(ua);return Te(l)&&(n="leading"in l?!!l.leading:n,o="trailing"in l?!!l.trailing:o),xe(c,C,{leading:n,maxWait:C,trailing:o})}const da=(c,C)=>{if(!F||!c||!C)return!1;const l=c.getBoundingClientRect();let n;return C instanceof Element?n=C.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right},fa=Ie({urlList:{type:Z(Array),default:()=>Ce([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:Z(String)}}),va={close:()=>!0,switch:c=>fe(c),rotate:c=>fe(c)},ma=oe({name:"ElImageViewer"}),pa=oe({...ma,props:fa,emits:va,setup(c,{expose:C,emit:l}){var n;const o=c,$={CONTAIN:{name:"contain",icon:we(Pe)},ORIGINAL:{name:"original",icon:we($e)}},{t:E}=_e(),r=ze("image-viewer"),{nextZIndex:G}=Ae(),X=b(),P=b([]),N=Be(),w=b(!0),v=b(o.initialIndex),S=Me($.CONTAIN),s=b({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=b((n=o.zIndex)!=null?n:G()),D=p(()=>{const{urlList:t}=o;return t.length<=1}),A=p(()=>v.value===0),U=p(()=>v.value===o.urlList.length-1),re=p(()=>o.urlList[v.value]),H=p(()=>[r.e("btn"),r.e("prev"),r.is("disabled",!o.infinite&&A.value)]),ie=p(()=>[r.e("btn"),r.e("next"),r.is("disabled",!o.infinite&&U.value)]),Q=p(()=>{const{scale:t,deg:d,offsetX:i,offsetY:k,enableTransition:L}=s.value;let _=i/t,R=k/t;const q=d*Math.PI/180,pe=Math.cos(q),ge=Math.sin(q);_=_*pe+R*ge,R=R*pe-i/t*ge;const ue={transform:`scale(${t}) rotate(${d}deg) translate(${_}px, ${R}px)`,transition:L?"transform .3s":""};return S.value.name===$.CONTAIN.name&&(ue.maxWidth=ue.maxHeight="100%"),ue}),j=p(()=>`${v.value+1} / ${o.urlList.length}`);function B(){J(),l("close")}function ce(){const t=de(i=>{switch(i.code){case V.esc:o.closeOnPressEscape&&B();break;case V.space:M();break;case V.left:W();break;case V.up:u("zoomIn");break;case V.right:e();break;case V.down:u("zoomOut");break}}),d=de(i=>{const k=i.deltaY||i.deltaX;u(k<0?"zoomIn":"zoomOut",{zoomRate:o.zoomRate,enableTransition:!1})});N.run(()=>{Y(document,"keydown",t),Y(document,"wheel",d)})}function J(){N.stop()}function ee(){w.value=!1}function ae(t){w.value=!1,t.target.alt=E("el.image.error")}function te(t){if(w.value||t.button!==0||!X.value)return;s.value.enableTransition=!1;const{offsetX:d,offsetY:i}=s.value,k=t.pageX,L=t.pageY,_=de(q=>{s.value={...s.value,offsetX:d+q.pageX-k,offsetY:i+q.pageY-L}}),R=Y(document,"mousemove",_);Y(document,"mouseup",()=>{R()}),t.preventDefault()}function se(){s.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function M(){if(w.value)return;const t=ea($),d=Object.values($),i=S.value.name,L=(d.findIndex(_=>_.name===i)+1)%t.length;S.value=$[t[L]],se()}function K(t){const d=o.urlList.length;v.value=(t+d)%d}function W(){A.value&&!o.infinite||K(v.value-1)}function e(){U.value&&!o.infinite||K(v.value+1)}function u(t,d={}){if(w.value)return;const{minScale:i,maxScale:k}=o,{zoomRate:L,rotateDeg:_,enableTransition:R}={zoomRate:o.zoomRate,rotateDeg:90,enableTransition:!0,...d};switch(t){case"zoomOut":s.value.scale>i&&(s.value.scale=Number.parseFloat((s.value.scale/L).toFixed(3)));break;case"zoomIn":s.value.scale<k&&(s.value.scale=Number.parseFloat((s.value.scale*L).toFixed(3)));break;case"clockwise":s.value.deg+=_,l("rotate",s.value.deg);break;case"anticlockwise":s.value.deg-=_,l("rotate",s.value.deg);break}s.value.enableTransition=R}function O(t){var d;((d=t.detail)==null?void 0:d.focusReason)==="pointer"&&t.preventDefault()}function Re(){o.closeOnPressEscape&&B()}return ve(re,()=>{Ne(()=>{const t=P.value[0];t!=null&&t.complete||(w.value=!0)})}),ve(v,t=>{se(),l("switch",t)}),Ee(()=>{ce()}),C({setActiveItem:K}),(t,d)=>(h(),me(a(ca),{to:"body",disabled:!t.teleported},{default:g(()=>[f(Ve,{name:"viewer-fade",appear:""},{default:g(()=>[y("div",{ref_key:"wrapper",ref:X,tabindex:-1,class:m(a(r).e("wrapper")),style:he({zIndex:le.value})},[f(a(Fe),{loop:"",trapped:"","focus-trap-el":X.value,"focus-start-el":"container",onFocusoutPrevented:O,onReleaseRequested:Re},{default:g(()=>[y("div",{class:m(a(r).e("mask")),onClick:Ye(i=>t.hideOnClickModal&&B(),["self"])},null,10,["onClick"]),I(" CLOSE "),y("span",{class:m([a(r).e("btn"),a(r).e("close")]),onClick:B},[f(a(T),null,{default:g(()=>[f(a(Xe))]),_:1})],2),I(" ARROW "),a(D)?I("v-if",!0):(h(),z(ne,{key:0},[y("span",{class:m(a(H)),onClick:W},[f(a(T),null,{default:g(()=>[f(a(De))]),_:1})],2),y("span",{class:m(a(ie)),onClick:e},[f(a(T),null,{default:g(()=>[f(a(He))]),_:1})],2)],64)),t.showProgress?(h(),z("div",{key:1,class:m([a(r).e("btn"),a(r).e("progress")])},[x(t.$slots,"progress",{activeIndex:v.value,total:t.urlList.length},()=>[je(Se(a(j)),1)])],2)):I("v-if",!0),I(" ACTIONS "),y("div",{class:m([a(r).e("btn"),a(r).e("actions")])},[y("div",{class:m(a(r).e("actions__inner"))},[x(t.$slots,"toolbar",{actions:u,prev:W,next:e,reset:M,activeIndex:v.value},()=>[f(a(T),{onClick:i=>u("zoomOut")},{default:g(()=>[f(a(Ke))]),_:1},8,["onClick"]),f(a(T),{onClick:i=>u("zoomIn")},{default:g(()=>[f(a(We))]),_:1},8,["onClick"]),y("i",{class:m(a(r).e("actions__divider"))},null,2),f(a(T),{onClick:M},{default:g(()=>[(h(),me(qe(a(S).icon)))]),_:1}),y("i",{class:m(a(r).e("actions__divider"))},null,2),f(a(T),{onClick:i=>u("anticlockwise")},{default:g(()=>[f(a(Ze))]),_:1},8,["onClick"]),f(a(T),{onClick:i=>u("clockwise")},{default:g(()=>[f(a(Ge))]),_:1},8,["onClick"])])],2)],2),I(" CANVAS "),y("div",{class:m(a(r).e("canvas"))},[(h(!0),z(ne,null,Ue(t.urlList,(i,k)=>Qe((h(),z("img",{ref_for:!0,ref:L=>P.value[k]=L,key:i,src:i,style:he(a(Q)),class:m(a(r).e("img")),crossorigin:t.crossorigin,onLoad:ee,onError:ae,onMousedown:te},null,46,["src","crossorigin"])),[[Je,k===v.value]])),128))],2),x(t.$slots,"default")]),_:3},8,["focus-trap-el"])],6)]),_:3})]),_:3},8,["disabled"]))}});var ga=Le(pa,[["__file","image-viewer.vue"]]);const wa=Oe(ga),ha=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>Ce([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:Z(String)}}),ya={load:c=>c instanceof Event,error:c=>c instanceof Event,switch:c=>fe(c),close:()=>!0,show:()=>!0},ba=oe({name:"ElImage",inheritAttrs:!1}),ka=oe({...ba,props:ha,emits:ya,setup(c,{expose:C,emit:l}){const n=c;let o="";const{t:$}=_e(),E=ze("image"),r=aa(),G=p(()=>ta(Object.entries(r).filter(([e])=>/^(data-|on[A-Z])/i.test(e)||["id","style"].includes(e)))),X=sa({excludeListeners:!0,excludeKeys:p(()=>Object.keys(G.value))}),P=b(),N=b(!1),w=b(!0),v=b(!1),S=b(),s=b(),le=F&&"loading"in HTMLImageElement.prototype;let D,A;const U=p(()=>[E.e("inner"),H.value&&E.e("preview"),w.value&&E.is("loading")]),re=p(()=>{const{fit:e}=n;return F&&e?{objectFit:e}:{}}),H=p(()=>{const{previewSrcList:e}=n;return na(e)&&e.length>0}),ie=p(()=>{const{previewSrcList:e,initialIndex:u}=n;let O=u;return u>e.length-1&&(O=0),O}),Q=p(()=>n.loading==="eager"?!1:!le&&n.loading==="lazy"||n.lazy),j=()=>{F&&(w.value=!0,N.value=!1,P.value=n.src)};function B(e){w.value=!1,N.value=!1,l("load",e)}function ce(e){w.value=!1,N.value=!0,l("error",e)}function J(){da(S.value,s.value)&&(j(),te())}const ee=ia(J,200,!0);async function ae(){var e;if(!F)return;await Ne();const{scrollContainer:u}=n;oa(u)?s.value=u:la(u)&&u!==""?s.value=(e=document.querySelector(u))!=null?e:void 0:S.value&&(s.value=ra(S.value)),s.value&&(D=Y(s,"scroll",ee),setTimeout(()=>J(),100))}function te(){!F||!s.value||!ee||(D==null||D(),s.value=void 0)}function se(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function M(){H.value&&(A=Y("wheel",se,{passive:!1}),o=document.body.style.overflow,document.body.style.overflow="hidden",v.value=!0,l("show"))}function K(){A==null||A(),document.body.style.overflow=o,v.value=!1,l("close")}function W(e){l("switch",e)}return ve(()=>n.src,()=>{Q.value?(w.value=!0,N.value=!1,te(),ae()):j()}),Ee(()=>{Q.value?ae():j()}),C({showPreview:M}),(e,u)=>(h(),z("div",ye({ref_key:"container",ref:S},a(G),{class:[a(E).b(),e.$attrs.class]}),[N.value?x(e.$slots,"error",{key:0},()=>[y("div",{class:m(a(E).e("error"))},Se(a($)("el.image.error")),3)]):(h(),z(ne,{key:1},[P.value!==void 0?(h(),z("img",ye({key:0},a(X),{src:P.value,loading:e.loading,style:a(re),class:a(U),crossorigin:e.crossorigin,onClick:M,onLoad:B,onError:ce}),null,16,["src","loading","crossorigin"])):I("v-if",!0),w.value?(h(),z("div",{key:1,class:m(a(E).e("wrapper"))},[x(e.$slots,"placeholder",{},()=>[y("div",{class:m(a(E).e("placeholder"))},null,2)])],2)):I("v-if",!0)],64)),a(H)?(h(),z(ne,{key:2},[v.value?(h(),me(a(wa),{key:0,"z-index":e.zIndex,"initial-index":a(ie),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"show-progress":e.showProgress,"url-list":e.previewSrcList,crossorigin:e.crossorigin,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:K,onSwitch:W},{progress:g(O=>[x(e.$slots,"progress",be(ke(O)))]),toolbar:g(O=>[x(e.$slots,"toolbar",be(ke(O)))]),default:g(()=>[e.$slots.viewer?(h(),z("div",{key:0},[x(e.$slots,"viewer")])):I("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","show-progress","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):I("v-if",!0)],64)):I("v-if",!0)],16))}});var Ia=Le(ka,[["__file","image.vue"]]);const _a=Oe(Ia);export{_a as E};
