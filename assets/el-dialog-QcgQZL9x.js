import{a4 as ae,ay as Q,aa as se,B as N,ab as te,O as J,cD as ne,k as E,cE as re,o as B,f as K,g as O,I as k,a0 as g,n as e,A as ie,l as M,w as D,$ as de,D as j,U as ue,a1 as q,a2 as W,L as X,cF as ce,aD as _,aR as Y,bo as fe,c2 as ve,br as G,i as w,cG as ye,bt as pe,cH as ge,W as H,X as me,j as be,a3 as Ce,cI as he,cJ as Z,bJ as De,aT as ke,aP as we,H as Ee,Q as Ie,cK as Te,c3 as Be,J as Fe,ax as Ae,z as Se,y as $e,T as Le,by as Pe,cL as Re,aC as Oe}from"./index-OZ4YkFZA.js";import{i as Me}from"./isUndefined-IZwZ21d-.js";const Ne=(...o)=>a=>{o.forEach(r=>{ae(r)?r(a):r.value=a})},x=Symbol("dialogInjectionKey"),ee=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:se},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ve=["aria-level"],Ue=["aria-label"],Ke=["id"],je=N({name:"ElDialogContent"}),qe=N({...je,props:ee,emits:ze,setup(o){const a=o,{t:r}=te(),{Close:S}=ce,{dialogRef:n,headerRef:c,bodyId:I,ns:t,style:m}=J(x),{focusTrapRef:i}=J(ne),f=E(()=>[t.b(),t.is("fullscreen",a.fullscreen),t.is("draggable",a.draggable),t.is("align-center",a.alignCenter),{[t.m("center")]:a.center}]),v=Ne(i,n),b=E(()=>a.draggable),u=E(()=>a.overflow);return re(n,c,b,u),(s,T)=>(B(),K("div",{ref:e(v),class:g(e(f)),style:W(e(m)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:c,class:g([e(t).e("header"),{"show-close":s.showClose}])},[k(s.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":s.ariaLevel,class:g(e(t).e("title"))},ie(s.title),11,Ve)]),s.showClose?(B(),K("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:g(e(t).e("headerbtn")),type:"button",onClick:T[0]||(T[0]=$=>s.$emit("close"))},[M(e(ue),{class:g(e(t).e("close"))},{default:D(()=>[(B(),j(de(s.closeIcon||e(S))))]),_:1},8,["class"])],10,Ue)):q("v-if",!0)],2),O("div",{id:e(I),class:g(e(t).e("body"))},[k(s.$slots,"default")],10,Ke),s.$slots.footer?(B(),K("footer",{key:0,class:g(e(t).e("footer"))},[k(s.$slots,"footer")],2)):q("v-if",!0)],6))}});var Je=X(qe,[["__file","dialog-content.vue"]]);const _e=Q({...ee,appendToBody:Boolean,appendTo:{type:_(String),default:"body"},beforeClose:{type:_(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Y]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},He=(o,a)=>{var r;const n=Ce().emit,{nextZIndex:c}=ve();let I="";const t=G(),m=G(),i=w(!1),f=w(!1),v=w(!1),b=w((r=o.zIndex)!=null?r:c());let u,s;const T=ye("namespace",he),$=E(()=>{const d={},h=`--${T.value}-dialog`;return o.fullscreen||(o.top&&(d[`${h}-margin-top`]=o.top),o.width&&(d[`${h}-width`]=pe(o.width))),d}),z=E(()=>o.alignCenter?{display:"flex"}:{});function L(){n("opened")}function V(){n("closed"),n(Y,!1),o.destroyOnClose&&(v.value=!1)}function U(){n("close")}function P(){s==null||s(),u==null||u(),o.openDelay&&o.openDelay>0?{stop:u}=Z(()=>R(),o.openDelay):R()}function F(){u==null||u(),s==null||s(),o.closeDelay&&o.closeDelay>0?{stop:s}=Z(()=>l(),o.closeDelay):l()}function A(){function d(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(d):F()}function y(){o.closeOnClickModal&&A()}function R(){De&&(i.value=!0)}function l(){i.value=!1}function p(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(d){var h;((h=d.detail)==null?void 0:h.focusReason)==="pointer"&&d.preventDefault()}o.lockScroll&&ge(i);function le(){o.closeOnPressEscape&&A()}return H(()=>o.modelValue,d=>{d?(f.value=!1,P(),v.value=!0,b.value=Me(o.zIndex)?c():b.value++,me(()=>{n("open"),a.value&&(a.value.scrollTop=0)})):i.value&&F()}),H(()=>o.fullscreen,d=>{a.value&&(d?(I=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=I)}),be(()=>{o.modelValue&&(i.value=!0,v.value=!0,P())}),{afterEnter:L,afterLeave:V,beforeLeave:U,handleClose:A,onModalClick:y,close:F,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:t,bodyId:m,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:i,zIndex:b}},Ze=["aria-label","aria-labelledby","aria-describedby"],Qe=N({name:"ElDialog",inheritAttrs:!1}),We=N({...Qe,props:_e,emits:Ge,setup(o,{expose:a}){const r=o,S=ke();we({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},E(()=>!!S.title));const n=Ee("dialog"),c=w(),I=w(),t=w(),{visible:m,titleId:i,bodyId:f,style:v,overlayDialogStyle:b,rendered:u,zIndex:s,afterEnter:T,afterLeave:$,beforeLeave:z,handleClose:L,onModalClick:V,onOpenAutoFocus:U,onCloseAutoFocus:P,onCloseRequested:F,onFocusoutPrevented:A}=He(r,c);Ie(x,{dialogRef:c,headerRef:I,bodyId:f,ns:n,rendered:u,style:v});const y=Re(V),R=E(()=>r.draggable&&!r.fullscreen);return a({visible:m,dialogContentRef:t}),(l,p)=>(B(),j(Pe,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(Le,{name:"dialog-fade",onAfterEnter:e(T),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:D(()=>[$e(M(e(Te),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(s)},{default:D(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:g(`${e(n).namespace.value}-overlay-dialog`),style:W(e(b)),onClick:p[0]||(p[0]=(...C)=>e(y).onClick&&e(y).onClick(...C)),onMousedown:p[1]||(p[1]=(...C)=>e(y).onMousedown&&e(y).onMousedown(...C)),onMouseup:p[2]||(p[2]=(...C)=>e(y).onMouseup&&e(y).onMouseup(...C))},[M(e(Be),{loop:"",trapped:e(m),"focus-start-el":"container",onFocusAfterTrapped:e(U),onFocusAfterReleased:e(P),onFocusoutPrevented:e(A),onReleaseRequested:e(F)},{default:D(()=>[e(u)?(B(),j(Je,Fe({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(L)}),Ae({header:D(()=>[l.$slots.title?k(l.$slots,"title",{key:1}):k(l.$slots,"header",{key:0,close:e(L),titleId:e(i),titleClass:e(n).e("title")})]),default:D(()=>[k(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:D(()=>[k(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ze)]),_:3},8,["mask","overlay-class","z-index"]),[[Se,e(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Xe=X(We,[["__file","dialog.vue"]]);const eo=Oe(Xe);export{eo as E,Ne as c};
