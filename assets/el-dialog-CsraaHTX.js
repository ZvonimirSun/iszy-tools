import{aK as ae,h as Y,aO as se,j as N,aP as te,y as U,bu as ne,k as w,c0 as re,o as D,F as V,G as O,r as E,n as p,m as e,I as ie,K as M,w as m,l as j,s as ce,aH as ue,H as K,q as Q,_ as W,c1 as de,v as G,be as X,c2 as fe,c3 as ve,br as H,R as k,c4 as ye,c5 as pe,bt as me,c6 as ge,a7 as Z,al as be,T as Ce,a8 as he,c7 as J,bE as Ee,bf as ke,c8 as we,u as De,p as Ie,aj as Be,ah as Te,c9 as Fe,ca as Ae,aB as Pe,a_ as Se,an as $e,cb as Re,t as Le}from"./index-Abyzm83G.js";import{E as Oe}from"./index-CgHVEuY3.js";import{i as Me}from"./isUndefined-DCTLXrZ8.js";const Ne=(...o)=>n=>{o.forEach(a=>{ae(a)?a(n):a.value=n})},x=Symbol("dialogInjectionKey"),ee=Y({center:Boolean,alignCenter:Boolean,closeIcon:{type:se},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},_e=N({name:"ElDialogContent"}),Ve=N({..._e,props:ee,emits:ze,setup(o,{expose:n}){const a=o,{t:P}=te(),{Close:r}=de,{dialogRef:f,headerRef:g,bodyId:b,ns:s,style:i}=U(x),{focusTrapRef:v}=U(ne),y=w(()=>[s.b(),s.is("fullscreen",a.fullscreen),s.is("draggable",a.draggable),s.is("align-center",a.alignCenter),{[s.m("center")]:a.center}]),C=Ne(v,f),u=w(()=>a.draggable),d=w(()=>a.overflow),{resetPosition:I}=re(f,g,u,d);return n({resetPosition:I}),(t,S)=>(D(),V("div",{ref:e(C),class:p(e(y)),style:Q(e(i)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:g,class:p([e(s).e("header"),{"show-close":t.showClose}])},[E(t.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":t.ariaLevel,class:p(e(s).e("title"))},ie(t.title),11,["aria-level"])]),t.showClose?(D(),V("button",{key:0,"aria-label":e(P)("el.dialog.close"),class:p(e(s).e("headerbtn")),type:"button",onClick:B=>t.$emit("close")},[M(e(ue),{class:p(e(s).e("close"))},{default:m(()=>[(D(),j(ce(t.closeIcon||e(r))))]),_:1},8,["class"])],10,["aria-label","onClick"])):K("v-if",!0)],2),O("div",{id:e(b),class:p(e(s).e("body"))},[E(t.$slots,"default")],10,["id"]),t.$slots.footer?(D(),V("footer",{key:0,class:p(e(s).e("footer"))},[E(t.$slots,"footer")],2)):K("v-if",!0)],6))}});var je=W(Ve,[["__file","dialog-content.vue"]]);const Ke=Y({...ee,appendToBody:Boolean,appendTo:{type:G([String,Object]),default:"body"},beforeClose:{type:G(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ue=(o,n)=>{var a;const r=he().emit,{nextZIndex:f}=ve();let g="";const b=H(),s=H(),i=k(!1),v=k(!1),y=k(!1),C=k((a=o.zIndex)!=null?a:f());let u,d;const I=ye("namespace",pe),t=w(()=>{const c={},h=`--${I.value}-dialog`;return o.fullscreen||(o.top&&(c[`${h}-margin-top`]=o.top),o.width&&(c[`${h}-width`]=me(o.width))),c}),S=w(()=>o.alignCenter?{display:"flex"}:{});function B(){r("opened")}function z(){r("closed"),r(X,!1),o.destroyOnClose&&(y.value=!1)}function _(){r("close")}function $(){d==null||d(),u==null||u(),o.openDelay&&o.openDelay>0?{stop:u}=J(()=>R(),o.openDelay):R()}function T(){u==null||u(),d==null||d(),o.closeDelay&&o.closeDelay>0?{stop:d}=J(()=>L(),o.closeDelay):L()}function F(){function c(h){h||(v.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(c):T()}function A(){o.closeOnClickModal&&F()}function R(){Ee&&(i.value=!0)}function L(){i.value=!1}function l(){r("openAutoFocus")}function q(){r("closeAutoFocus")}function oe(c){var h;((h=c.detail)==null?void 0:h.focusReason)==="pointer"&&c.preventDefault()}o.lockScroll&&ge(i);function le(){o.closeOnPressEscape&&F()}return Z(()=>o.modelValue,c=>{c?(v.value=!1,$(),y.value=!0,C.value=Me(o.zIndex)?f():C.value++,be(()=>{r("open"),n.value&&(n.value.scrollTop=0)})):i.value&&T()}),Z(()=>o.fullscreen,c=>{n.value&&(c?(g=n.value.style.transform,n.value.style.transform=""):n.value.style.transform=g)}),Ce(()=>{o.modelValue&&(i.value=!0,y.value=!0,$())}),{afterEnter:B,afterLeave:z,beforeLeave:_,handleClose:F,onModalClick:A,close:T,doClose:L,onOpenAutoFocus:l,onCloseAutoFocus:q,onCloseRequested:le,onFocusoutPrevented:oe,titleId:b,bodyId:s,closed:v,style:t,overlayDialogStyle:S,rendered:y,visible:i,zIndex:C}},Ge=N({name:"ElDialog",inheritAttrs:!1}),He=N({...Ge,props:Ke,emits:qe,setup(o,{expose:n}){const a=o,P=ke();we({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},w(()=>!!P.title));const r=De("dialog"),f=k(),g=k(),b=k(),{visible:s,titleId:i,bodyId:v,style:y,overlayDialogStyle:C,rendered:u,zIndex:d,afterEnter:I,afterLeave:t,beforeLeave:S,handleClose:B,onModalClick:z,onOpenAutoFocus:_,onCloseAutoFocus:$,onCloseRequested:T,onFocusoutPrevented:F}=Ue(a,f);Ie(x,{dialogRef:f,headerRef:g,bodyId:v,ns:r,rendered:u,style:y});const A=Re(z),R=w(()=>a.draggable&&!a.fullscreen);return n({visible:s,dialogContentRef:b,resetPosition:()=>{var l;(l=b.value)==null||l.resetPosition()}}),(l,q)=>(D(),j(e(Oe),{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},{default:m(()=>[M(Be,{name:"dialog-fade",onAfterEnter:e(I),onAfterLeave:e(t),onBeforeLeave:e(S),persisted:""},{default:m(()=>[Te(M(e(Fe),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(d)},{default:m(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(v),class:p(`${e(r).namespace.value}-overlay-dialog`),style:Q(e(C)),onClick:e(A).onClick,onMousedown:e(A).onMousedown,onMouseup:e(A).onMouseup},[M(e(Ae),{loop:"",trapped:e(s),"focus-start-el":"container",onFocusAfterTrapped:e(_),onFocusAfterReleased:e($),onFocusoutPrevented:e(F),onReleaseRequested:e(T)},{default:m(()=>[e(u)?(D(),j(je,Pe({key:0,ref_key:"dialogContentRef",ref:b},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(B)}),Se({header:m(()=>[l.$slots.title?E(l.$slots,"title",{key:1}):E(l.$slots,"header",{key:0,close:e(B),titleId:e(i),titleClass:e(r).e("title")})]),default:m(()=>[E(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:m(()=>[E(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[$e,e(s)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var Ze=W(He,[["__file","dialog.vue"]]);const We=Le(Ze);export{We as E,Ne as c};