import{bw as se,g as J,bM as ae,h as O,aH as te,a4 as K,cn as ne,k as I,cp as re,o as A,l as _,m as L,r as D,p as g,n as e,t as ie,a as M,w as k,c as q,q as ue,ah as ce,s as j,a1 as Q,v as W,cq as de,a5 as fe,ap as X,bD as me,cc as ve,bG as G,y as E,cr as pe,bI as ge,cs as ye,D as Y,ab as be,R as Ce,ad as he,ct as ke,cu as Z,bY as De,at as Ee,am as H,j as Ie,an as we,T as Ae,cv as Be,cd as Fe,bz as Se,by as Te,U as $e,aU as Pe,b0 as Re,cw as Le,x as Me}from"./index.js";import{i as Oe}from"./isUndefined-aa0326a0.js";const Ne=(...o)=>s=>{o.forEach(r=>{se(r)?r(s):r.value=s})},x=Symbol("dialogInjectionKey"),ee=J({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ue=["aria-level"],Ve=["aria-label"],_e=["id"],qe=O({name:"ElDialogContent"}),je=O({...qe,props:ee,emits:ze,setup(o){const s=o,{t:r}=te(),{Close:S}=de,{dialogRef:n,headerRef:d,bodyId:w,ns:t,style:y}=K(x),{focusTrapRef:i}=K(ne),f=I(()=>[t.b(),t.is("fullscreen",s.fullscreen),t.is("draggable",s.draggable),t.is("align-center",s.alignCenter),{[t.m("center")]:s.center},s.customClass]),m=Ne(i,n),b=I(()=>s.draggable);return re(n,d,b),(a,c)=>(A(),_("div",{ref:e(m),class:g(e(f)),style:Q(e(y)),tabindex:"-1"},[L("header",{ref_key:"headerRef",ref:d,class:g(e(t).e("header"))},[D(a.$slots,"header",{},()=>[L("span",{role:"heading","aria-level":a.ariaLevel,class:g(e(t).e("title"))},ie(a.title),11,Ue)]),a.showClose?(A(),_("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:g(e(t).e("headerbtn")),type:"button",onClick:c[0]||(c[0]=T=>a.$emit("close"))},[M(e(ce),{class:g(e(t).e("close"))},{default:k(()=>[(A(),q(ue(a.closeIcon||e(S))))]),_:1},8,["class"])],10,Ve)):j("v-if",!0)],2),L("div",{id:e(w),class:g(e(t).e("body"))},[D(a.$slots,"default")],10,_e),a.$slots.footer?(A(),_("footer",{key:0,class:g(e(t).e("footer"))},[D(a.$slots,"footer")],2)):j("v-if",!0)],6))}});var Ke=W(je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ge=J({...ee,appendToBody:Boolean,beforeClose:{type:fe(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ye={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>me(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ze=(o,s)=>{var r;const n=he().emit,{nextZIndex:d}=ve();let w="";const t=G(),y=G(),i=E(!1),f=E(!1),m=E(!1),b=E((r=o.zIndex)!=null?r:d());let a,c;const T=pe("namespace",ke),N=I(()=>{const u={},h=`--${T.value}-dialog`;return o.fullscreen||(o.top&&(u[`${h}-margin-top`]=o.top),o.width&&(u[`${h}-width`]=ge(o.width))),u}),z=I(()=>o.alignCenter?{display:"flex"}:{});function $(){n("opened")}function U(){n("closed"),n(X,!1),o.destroyOnClose&&(m.value=!1)}function V(){n("close")}function P(){c==null||c(),a==null||a(),o.openDelay&&o.openDelay>0?{stop:a}=Z(()=>R(),o.openDelay):R()}function B(){a==null||a(),c==null||c(),o.closeDelay&&o.closeDelay>0?{stop:c}=Z(()=>l(),o.closeDelay):l()}function F(){function u(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(u):B()}function v(){o.closeOnClickModal&&F()}function R(){De&&(i.value=!0)}function l(){i.value=!1}function p(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(u){var h;((h=u.detail)==null?void 0:h.focusReason)==="pointer"&&u.preventDefault()}o.lockScroll&&ye(i);function le(){o.closeOnPressEscape&&F()}return Y(()=>o.modelValue,u=>{u?(f.value=!1,P(),m.value=!0,b.value=Oe(o.zIndex)?d():b.value++,be(()=>{n("open"),s.value&&(s.value.scrollTop=0)})):i.value&&B()}),Y(()=>o.fullscreen,u=>{s.value&&(u?(w=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=w)}),Ce(()=>{o.modelValue&&(i.value=!0,m.value=!0,P())}),{afterEnter:$,afterLeave:U,beforeLeave:V,handleClose:F,onModalClick:v,close:B,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:t,bodyId:y,closed:f,style:N,overlayDialogStyle:z,rendered:m,visible:i,zIndex:b}},He=["aria-label","aria-labelledby","aria-describedby"],Je=O({name:"ElDialog",inheritAttrs:!1}),Qe=O({...Je,props:Ge,emits:Ye,setup(o,{expose:s}){const r=o,S=Ee();H({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!S.title)),H({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!r.customClass));const n=Ie("dialog"),d=E(),w=E(),t=E(),{visible:y,titleId:i,bodyId:f,style:m,overlayDialogStyle:b,rendered:a,zIndex:c,afterEnter:T,afterLeave:N,beforeLeave:z,handleClose:$,onModalClick:U,onOpenAutoFocus:V,onCloseAutoFocus:P,onCloseRequested:B,onFocusoutPrevented:F}=Ze(r,d);we(x,{dialogRef:d,headerRef:w,bodyId:f,ns:n,rendered:a,style:m});const v=Le(U),R=I(()=>r.draggable&&!r.fullscreen);return s({visible:y,dialogContentRef:t}),(l,p)=>(A(),q(Re,{to:"body",disabled:!l.appendToBody},[M(Pe,{name:"dialog-fade",onAfterEnter:e(T),onAfterLeave:e(N),onBeforeLeave:e(z),persisted:""},{default:k(()=>[Ae(M(e(Be),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(c)},{default:k(()=>[L("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:g(`${e(n).namespace.value}-overlay-dialog`),style:Q(e(b)),onClick:p[0]||(p[0]=(...C)=>e(v).onClick&&e(v).onClick(...C)),onMousedown:p[1]||(p[1]=(...C)=>e(v).onMousedown&&e(v).onMousedown(...C)),onMouseup:p[2]||(p[2]=(...C)=>e(v).onMouseup&&e(v).onMouseup(...C))},[M(e(Fe),{loop:"",trapped:e(y),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e(P),onFocusoutPrevented:e(F),onReleaseRequested:e(B)},{default:k(()=>[e(a)?(A(),q(Ke,Se({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e($)}),Te({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e($),titleId:e(i),titleClass:e(n).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):j("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,He)]),_:3},8,["mask","overlay-class","z-index"]),[[$e,e(y)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var We=W(Qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const eo=Me(We);export{eo as E,Ne as c};
