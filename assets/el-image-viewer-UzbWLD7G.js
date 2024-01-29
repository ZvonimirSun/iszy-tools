import{bJ as B,ay as me,aD as F,aH as pe,aS as ue,B as ne,d7 as ve,d8 as Ie,d9 as _e,ab as ge,H as we,c2 as ze,i as h,da as Le,a6 as Se,k as g,W as ce,X as ye,j as be,o as b,D as de,l as f,w as S,n as e,a0 as v,a2 as fe,s as Ce,g as y,a1 as C,U as O,aO as Ee,F as te,aM as Ne,aN as xe,f as x,db as Oe,b4 as Te,$ as $e,dc as Ae,dd as Re,z as Be,y as Me,r as Ve,I as ae,T as De,by as Ye,L as he,a9 as R,a8 as M,d2 as He,aC as ke,de as Xe,df as Pe,A as Fe,J as We,bM as je,a5 as Ke,dg as Je,dh as Ze}from"./index-Qxs6HJco.js";import{t as ie}from"./throttle-pqDtvcmB.js";const qe=(c,k)=>{if(!B||!c||!k)return!1;const l=c.getBoundingClientRect();let w;return k instanceof Element?w=k.getBoundingClientRect():w={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<w.bottom&&l.bottom>w.top&&l.right>w.left&&l.left<w.right},Ge=me({urlList:{type:F(Array),default:()=>pe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:F(String)}}),Ue={close:()=>!0,switch:c=>ue(c),rotate:c=>ue(c)},Qe=["src","crossorigin"],ea=ne({name:"ElImageViewer"}),aa=ne({...ea,props:Ge,emits:Ue,setup(c,{expose:k,emit:l}){var w;const d=c,p={CONTAIN:{name:"contain",icon:ve(Ie)},ORIGINAL:{name:"original",icon:ve(_e)}},{t:se}=ge(),r=we("image-viewer"),{nextZIndex:V}=ze(),E=h(),N=h([]),T=Le(),I=h(!0),i=h(d.initialIndex),$=Se(p.CONTAIN),s=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=h((w=d.zIndex)!=null?w:V()),oe=g(()=>{const{urlList:t}=d;return t.length<=1}),W=g(()=>i.value===0),j=g(()=>i.value===d.urlList.length-1),Y=g(()=>d.urlList[i.value]),le=g(()=>[r.e("btn"),r.e("prev"),r.is("disabled",!d.infinite&&W.value)]),K=g(()=>[r.e("btn"),r.e("next"),r.is("disabled",!d.infinite&&j.value)]),H=g(()=>{const{scale:t,deg:n,offsetX:o,offsetY:_,enableTransition:L}=s.value;let m=o/t,z=_/t;switch(n%360){case 90:case-270:[m,z]=[z,-m];break;case 180:case-180:[m,z]=[-m,-z];break;case 270:case-90:[m,z]=[-z,m];break}const A={transform:`scale(${t}) rotate(${n}deg) translate(${m}px, ${z}px)`,transition:L?"transform .3s":""};return $.value.name===p.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A});function X(){J(),l("close")}function re(){const t=ie(o=>{switch(o.code){case R.esc:d.closeOnPressEscape&&X();break;case R.space:Q();break;case R.left:ee();break;case R.up:u("zoomIn");break;case R.right:a();break;case R.down:u("zoomOut");break}}),n=ie(o=>{const _=o.deltaY||o.deltaX;u(_<0?"zoomIn":"zoomOut",{zoomRate:d.zoomRate,enableTransition:!1})});T.run(()=>{M(document,"keydown",t),M(document,"wheel",n)})}function J(){T.stop()}function Z(){I.value=!1}function q(t){I.value=!1,t.target.alt=se("el.image.error")}function G(t){if(I.value||t.button!==0||!E.value)return;s.value.enableTransition=!1;const{offsetX:n,offsetY:o}=s.value,_=t.pageX,L=t.pageY,m=ie(A=>{s.value={...s.value,offsetX:n+A.pageX-_,offsetY:o+A.pageY-L}}),z=M(document,"mousemove",m);M(document,"mouseup",()=>{z()}),t.preventDefault()}function U(){s.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function Q(){if(I.value)return;const t=He(p),n=Object.values(p),o=$.value.name,L=(n.findIndex(m=>m.name===o)+1)%t.length;$.value=p[t[L]],U()}function P(t){const n=d.urlList.length;i.value=(t+n)%n}function ee(){W.value&&!d.infinite||P(i.value-1)}function a(){j.value&&!d.infinite||P(i.value+1)}function u(t,n={}){if(I.value)return;const{minScale:o,maxScale:_}=d,{zoomRate:L,rotateDeg:m,enableTransition:z}={zoomRate:d.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(t){case"zoomOut":s.value.scale>o&&(s.value.scale=Number.parseFloat((s.value.scale/L).toFixed(3)));break;case"zoomIn":s.value.scale<_&&(s.value.scale=Number.parseFloat((s.value.scale*L).toFixed(3)));break;case"clockwise":s.value.deg+=m,l("rotate",s.value.deg);break;case"anticlockwise":s.value.deg-=m,l("rotate",s.value.deg);break}s.value.enableTransition=z}return ce(Y,()=>{ye(()=>{const t=N.value[0];t!=null&&t.complete||(I.value=!0)})}),ce(i,t=>{U(),l("switch",t)}),be(()=>{var t,n;re(),(n=(t=E.value)==null?void 0:t.focus)==null||n.call(t)}),k({setActiveItem:P}),(t,n)=>(b(),de(Ye,{to:"body",disabled:!t.teleported},[f(De,{name:"viewer-fade",appear:""},{default:S(()=>[y("div",{ref_key:"wrapper",ref:E,tabindex:-1,class:v(e(r).e("wrapper")),style:fe({zIndex:D.value})},[y("div",{class:v(e(r).e("mask")),onClick:n[0]||(n[0]=Ce(o=>t.hideOnClickModal&&X(),["self"]))},null,2),C(" CLOSE "),y("span",{class:v([e(r).e("btn"),e(r).e("close")]),onClick:X},[f(e(O),null,{default:S(()=>[f(e(Ee))]),_:1})],2),C(" ARROW "),e(oe)?C("v-if",!0):(b(),x(te,{key:0},[y("span",{class:v(e(le)),onClick:ee},[f(e(O),null,{default:S(()=>[f(e(Ne))]),_:1})],2),y("span",{class:v(e(K)),onClick:a},[f(e(O),null,{default:S(()=>[f(e(xe))]),_:1})],2)],64)),C(" ACTIONS "),y("div",{class:v([e(r).e("btn"),e(r).e("actions")])},[y("div",{class:v(e(r).e("actions__inner"))},[f(e(O),{onClick:n[1]||(n[1]=o=>u("zoomOut"))},{default:S(()=>[f(e(Oe))]),_:1}),f(e(O),{onClick:n[2]||(n[2]=o=>u("zoomIn"))},{default:S(()=>[f(e(Te))]),_:1}),y("i",{class:v(e(r).e("actions__divider"))},null,2),f(e(O),{onClick:Q},{default:S(()=>[(b(),de($e(e($).icon)))]),_:1}),y("i",{class:v(e(r).e("actions__divider"))},null,2),f(e(O),{onClick:n[3]||(n[3]=o=>u("anticlockwise"))},{default:S(()=>[f(e(Ae))]),_:1}),f(e(O),{onClick:n[4]||(n[4]=o=>u("clockwise"))},{default:S(()=>[f(e(Re))]),_:1})],2)],2),C(" CANVAS "),y("div",{class:v(e(r).e("canvas"))},[(b(!0),x(te,null,Ve(t.urlList,(o,_)=>Me((b(),x("img",{ref_for:!0,ref:L=>N.value[_]=L,key:o,src:o,style:fe(e(H)),class:v(e(r).e("img")),crossorigin:t.crossorigin,onLoad:Z,onError:q,onMousedown:G},null,46,Qe)),[[Be,_===i.value]])),128))],2),ae(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ta=he(aa,[["__file","image-viewer.vue"]]);const na=ke(ta),sa=me({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:F([String,Object])},previewSrcList:{type:F(Array),default:()=>pe([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:F(String)}}),oa={load:c=>c instanceof Event,error:c=>c instanceof Event,switch:c=>ue(c),close:()=>!0,show:()=>!0},la=["src","loading","crossorigin"],ra={key:0},ia=ne({name:"ElImage",inheritAttrs:!1}),ua=ne({...ia,props:sa,emits:oa,setup(c,{emit:k}){const l=c;let w="";const{t:d}=ge(),p=we("image"),se=Xe(),r=Pe(),V=h(),E=h(!1),N=h(!0),T=h(!1),I=h(),i=h(),$=B&&"loading"in HTMLImageElement.prototype;let s,D;const oe=g(()=>[p.e("inner"),Y.value&&p.e("preview"),N.value&&p.is("loading")]),W=g(()=>se.style),j=g(()=>{const{fit:a}=l;return B&&a?{objectFit:a}:{}}),Y=g(()=>{const{previewSrcList:a}=l;return Array.isArray(a)&&a.length>0}),le=g(()=>{const{previewSrcList:a,initialIndex:u}=l;let t=u;return u>a.length-1&&(t=0),t}),K=g(()=>l.loading==="eager"?!1:!$&&l.loading==="lazy"||l.lazy),H=()=>{B&&(N.value=!0,E.value=!1,V.value=l.src)};function X(a){N.value=!1,E.value=!1,k("load",a)}function re(a){N.value=!1,E.value=!0,k("error",a)}function J(){qe(I.value,i.value)&&(H(),G())}const Z=Ze(J,200,!0);async function q(){var a;if(!B)return;await ye();const{scrollContainer:u}=l;je(u)?i.value=u:Ke(u)&&u!==""?i.value=(a=document.querySelector(u))!=null?a:void 0:I.value&&(i.value=Je(I.value)),i.value&&(s=M(i,"scroll",Z),setTimeout(()=>J(),100))}function G(){!B||!i.value||!Z||(s==null||s(),i.value=void 0)}function U(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function Q(){Y.value&&(D=M("wheel",U,{passive:!1}),w=document.body.style.overflow,document.body.style.overflow="hidden",T.value=!0,k("show"))}function P(){D==null||D(),document.body.style.overflow=w,T.value=!1,k("close")}function ee(a){k("switch",a)}return ce(()=>l.src,()=>{K.value?(N.value=!0,E.value=!1,G(),q()):H()}),be(()=>{K.value?q():H()}),(a,u)=>(b(),x("div",{ref_key:"container",ref:I,class:v([e(p).b(),a.$attrs.class]),style:fe(e(W))},[E.value?ae(a.$slots,"error",{key:0},()=>[y("div",{class:v(e(p).e("error"))},Fe(e(d)("el.image.error")),3)]):(b(),x(te,{key:1},[V.value!==void 0?(b(),x("img",We({key:0},e(r),{src:V.value,loading:a.loading,style:e(j),class:e(oe),crossorigin:a.crossorigin,onClick:Q,onLoad:X,onError:re}),null,16,la)):C("v-if",!0),N.value?(b(),x("div",{key:1,class:v(e(p).e("wrapper"))},[ae(a.$slots,"placeholder",{},()=>[y("div",{class:v(e(p).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),e(Y)?(b(),x(te,{key:2},[T.value?(b(),de(e(na),{key:0,"z-index":a.zIndex,"initial-index":e(le),infinite:a.infinite,"zoom-rate":a.zoomRate,"min-scale":a.minScale,"max-scale":a.maxScale,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:P,onSwitch:ee},{default:S(()=>[a.$slots.viewer?(b(),x("div",ra,[ae(a.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var ca=he(ua,[["__file","image.vue"]]);const va=ke(ca);export{va as E};
