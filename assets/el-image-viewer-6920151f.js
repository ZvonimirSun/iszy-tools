import{bQ as V,g as ve,a5 as re,a9 as me,ar as de,h as J,S as fe,ct as be,cu as Ie,aG as pe,j as ge,c4 as _e,y as k,cv as ze,a0 as Le,k as f,D as ie,$ as we,R as ye,o as w,c as ce,a as c,w as I,m as g,p as u,n as a,a1 as ue,aK as Ce,s as _,ag as N,aj as Ee,l as x,H as Q,ah as xe,ai as Se,cw as Ne,bs as Oe,q as Te,cx as $e,cy as Re,I as Ae,T as Be,U as Ve,r as U,aU as Me,b0 as De,v as he,ak as B,aB as M,cz as Ye,x as ke,cA as He,cB as Pe,t as Xe,bx as Fe,bR as je,aq as Ke,cC as We,cD as qe}from"./index-e710c703.js";import{t as le}from"./throttle-5b434855.js";const Ze=(d,y)=>{if(!V||!d||!y)return!1;const r=d.getBoundingClientRect();let s;return y instanceof Element?s=y.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},r.top<s.bottom&&r.bottom>s.top&&r.right>s.left&&r.left<s.right},Ge=ve({urlList:{type:re(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Ue={close:()=>!0,switch:d=>de(d)},Qe=["src"],Je=J({name:"ElImageViewer"}),et=J({...Je,props:Ge,emits:Ue,setup(d,{expose:y,emit:r}){const s=d,O={CONTAIN:{name:"contain",icon:fe(be)},ORIGINAL:{name:"original",icon:fe(Ie)}},{t:z}=pe(),l=ge("image-viewer"),{nextZIndex:ee}=_e(),T=k(),S=k([]),L=ze(),b=k(!0),v=k(s.initialIndex),m=Le(O.CONTAIN),i=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=f(()=>{const{urlList:e}=s;return e.length<=1}),R=f(()=>v.value===0),X=f(()=>v.value===s.urlList.length-1),te=f(()=>s.urlList[v.value]),ae=f(()=>[l.e("btn"),l.e("prev"),l.is("disabled",!s.infinite&&R.value)]),Y=f(()=>[l.e("btn"),l.e("next"),l.is("disabled",!s.infinite&&X.value)]),ne=f(()=>{const{scale:e,deg:n,offsetX:o,offsetY:p,enableTransition:C}=i.value;let h=o/e,E=p/e;switch(n%360){case 90:case-270:[h,E]=[E,-h];break;case 180:case-180:[h,E]=[-h,-E];break;case 270:case-90:[h,E]=[-E,h];break}const A={transform:`scale(${e}) rotate(${n}deg) translate(${h}px, ${E}px)`,transition:C?"transform .3s":""};return m.value.name===O.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),F=f(()=>de(s.zIndex)?s.zIndex:ee());function $(){oe(),r("close")}function se(){const e=le(o=>{switch(o.code){case B.esc:s.closeOnPressEscape&&$();break;case B.space:q();break;case B.left:Z();break;case B.up:t("zoomIn");break;case B.right:G();break;case B.down:t("zoomOut");break}}),n=le(o=>{const p=o.deltaY||o.deltaX;t(p<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});L.run(()=>{M(document,"keydown",e),M(document,"wheel",n)})}function oe(){L.stop()}function j(){b.value=!1}function K(e){b.value=!1,e.target.alt=z("el.image.error")}function W(e){if(b.value||e.button!==0||!T.value)return;i.value.enableTransition=!1;const{offsetX:n,offsetY:o}=i.value,p=e.pageX,C=e.pageY,h=le(A=>{i.value={...i.value,offsetX:n+A.pageX-p,offsetY:o+A.pageY-C}}),E=M(document,"mousemove",h);M(document,"mouseup",()=>{E()}),e.preventDefault()}function H(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function q(){if(b.value)return;const e=Ye(O),n=Object.values(O),o=m.value.name,C=(n.findIndex(h=>h.name===o)+1)%e.length;m.value=O[e[C]],H()}function P(e){const n=s.urlList.length;v.value=(e+n)%n}function Z(){R.value&&!s.infinite||P(v.value-1)}function G(){X.value&&!s.infinite||P(v.value+1)}function t(e,n={}){if(b.value)return;const{zoomRate:o,rotateDeg:p,enableTransition:C}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(e){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/o).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*o).toFixed(3)));break;case"clockwise":i.value.deg+=p;break;case"anticlockwise":i.value.deg-=p;break}i.value.enableTransition=C}return ie(te,()=>{we(()=>{const e=S.value[0];e?.complete||(b.value=!0)})}),ie(v,e=>{H(),r("switch",e)}),ye(()=>{var e,n;se(),(n=(e=T.value)==null?void 0:e.focus)==null||n.call(e)}),y({setActiveItem:P}),(e,n)=>(w(),ce(De,{to:"body",disabled:!e.teleported},[c(Me,{name:"viewer-fade",appear:""},{default:I(()=>[g("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:u(a(l).e("wrapper")),style:ue({zIndex:a(F)})},[g("div",{class:u(a(l).e("mask")),onClick:n[0]||(n[0]=Ce(o=>e.hideOnClickModal&&$(),["self"]))},null,2),_(" CLOSE "),g("span",{class:u([a(l).e("btn"),a(l).e("close")]),onClick:$},[c(a(N),null,{default:I(()=>[c(a(Ee))]),_:1})],2),_(" ARROW "),a(D)?_("v-if",!0):(w(),x(Q,{key:0},[g("span",{class:u(a(ae)),onClick:Z},[c(a(N),null,{default:I(()=>[c(a(xe))]),_:1})],2),g("span",{class:u(a(Y)),onClick:G},[c(a(N),null,{default:I(()=>[c(a(Se))]),_:1})],2)],64)),_(" ACTIONS "),g("div",{class:u([a(l).e("btn"),a(l).e("actions")])},[g("div",{class:u(a(l).e("actions__inner"))},[c(a(N),{onClick:n[1]||(n[1]=o=>t("zoomOut"))},{default:I(()=>[c(a(Ne))]),_:1}),c(a(N),{onClick:n[2]||(n[2]=o=>t("zoomIn"))},{default:I(()=>[c(a(Oe))]),_:1}),g("i",{class:u(a(l).e("actions__divider"))},null,2),c(a(N),{onClick:q},{default:I(()=>[(w(),ce(Te(a(m).icon)))]),_:1}),g("i",{class:u(a(l).e("actions__divider"))},null,2),c(a(N),{onClick:n[3]||(n[3]=o=>t("anticlockwise"))},{default:I(()=>[c(a($e))]),_:1}),c(a(N),{onClick:n[4]||(n[4]=o=>t("clockwise"))},{default:I(()=>[c(a(Re))]),_:1})],2)],2),_(" CANVAS "),g("div",{class:u(a(l).e("canvas"))},[(w(!0),x(Q,null,Ae(e.urlList,(o,p)=>Be((w(),x("img",{ref_for:!0,ref:C=>S.value[p]=C,key:o,src:o,style:ue(a(ne)),class:u(a(l).e("img")),onLoad:j,onError:K,onMousedown:W},null,46,Qe)),[[Ve,p===v.value]])),128))],2),U(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var tt=he(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const at=ke(tt),nt=ve({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:re([String,Object])},previewSrcList:{type:re(Array),default:()=>me([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),st={load:d=>d instanceof Event,error:d=>d instanceof Event,switch:d=>de(d),close:()=>!0,show:()=>!0},ot=["src","loading"],lt={key:0},rt=J({name:"ElImage",inheritAttrs:!1}),it=J({...rt,props:nt,emits:st,setup(d,{emit:y}){const r=d;let s="";const{t:O}=pe(),z=ge("image"),l=He(),ee=Pe(),T=k(),S=k(!1),L=k(!0),b=k(!1),v=k(),m=k(),i=V&&"loading"in HTMLImageElement.prototype;let D,R;const X=f(()=>[z.e("inner"),Y.value&&z.e("preview"),L.value&&z.is("loading")]),te=f(()=>l.style),ae=f(()=>{const{fit:t}=r;return V&&t?{objectFit:t}:{}}),Y=f(()=>{const{previewSrcList:t}=r;return Array.isArray(t)&&t.length>0}),ne=f(()=>{const{previewSrcList:t,initialIndex:e}=r;let n=e;return e>t.length-1&&(n=0),n}),F=f(()=>r.loading==="eager"?!1:!i&&r.loading==="lazy"||r.lazy),$=()=>{V&&(L.value=!0,S.value=!1,T.value=r.src)};function se(t){L.value=!1,S.value=!1,y("load",t)}function oe(t){L.value=!1,S.value=!0,y("error",t)}function j(){Ze(v.value,m.value)&&($(),H())}const K=qe(j,200,!0);async function W(){var t;if(!V)return;await we();const{scrollContainer:e}=r;je(e)?m.value=e:Ke(e)&&e!==""?m.value=(t=document.querySelector(e))!=null?t:void 0:v.value&&(m.value=We(v.value)),m.value&&(D=M(m,"scroll",K),setTimeout(()=>j(),100))}function H(){!V||!m.value||!K||(D?.(),m.value=void 0)}function q(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function P(){Y.value&&(R=M("wheel",q,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",b.value=!0,y("show"))}function Z(){R?.(),document.body.style.overflow=s,b.value=!1,y("close")}function G(t){y("switch",t)}return ie(()=>r.src,()=>{F.value?(L.value=!0,S.value=!1,H(),W()):$()}),ye(()=>{F.value?W():$()}),(t,e)=>(w(),x("div",{ref_key:"container",ref:v,class:u([a(z).b(),t.$attrs.class]),style:ue(a(te))},[S.value?U(t.$slots,"error",{key:0},()=>[g("div",{class:u(a(z).e("error"))},Xe(a(O)("el.image.error")),3)]):(w(),x(Q,{key:1},[T.value!==void 0?(w(),x("img",Fe({key:0},a(ee),{src:T.value,loading:t.loading,style:a(ae),class:a(X),onClick:P,onLoad:se,onError:oe}),null,16,ot)):_("v-if",!0),L.value?(w(),x("div",{key:1,class:u(a(z).e("wrapper"))},[U(t.$slots,"placeholder",{},()=>[g("div",{class:u(a(z).e("placeholder"))},null,2)])],2)):_("v-if",!0)],64)),a(Y)?(w(),x(Q,{key:2},[b.value?(w(),ce(a(at),{key:0,"z-index":t.zIndex,"initial-index":a(ne),infinite:t.infinite,"zoom-rate":t.zoomRate,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:Z,onSwitch:G},{default:I(()=>[t.$slots.viewer?(w(),x("div",lt,[U(t.$slots,"viewer")])):_("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):_("v-if",!0)],64)):_("v-if",!0)],6))}});var ct=he(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const ft=ke(ct);export{ft as E};
