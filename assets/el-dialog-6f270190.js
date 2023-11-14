import{bB as se,n as Y,bR as ae,p as N,aO as te,ac as j,cs as ne,r as A,cu as re,o as I,s as U,t as R,v as D,y as g,x as e,B as ie,g as O,w as k,f as q,z as ue,ao as ce,A as K,a9 as H,C as Q,cv as de,ad as fe,aw as X,bI as me,ch as ve,bL as Z,F as E,cw as pe,bN as ge,cx as ye,K as G,ai as be,W as Ce,ak as he,cy as ke,cz as J,c1 as De,aA as Ee,at as W,q as Ae,au as Be,$ as Ie,cA as Fe,ci as we,bE as Se,bD as $e,a0 as Te,bc as Le,b4 as Pe,cB as Re,D as Oe}from"./index.js";import{i as Ne}from"./isUndefined-aa0326a0.js";const Me=(...o)=>s=>{o.forEach(r=>{se(r)?r(s):r.value=s})},x=Symbol("dialogInjectionKey"),ee=Y({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ve=["aria-level"],_e=["aria-label"],Ue=["id"],qe=N({name:"ElDialogContent"}),Ke=N({...qe,props:ee,emits:ze,setup(o){const s=o,{t:r}=te(),{Close:S}=de,{dialogRef:n,headerRef:d,bodyId:B,ns:t,style:y}=j(x),{focusTrapRef:i}=j(ne),f=A(()=>[t.b(),t.is("fullscreen",s.fullscreen),t.is("draggable",s.draggable),t.is("align-center",s.alignCenter),{[t.m("center")]:s.center},s.customClass]),m=Me(i,n),b=A(()=>s.draggable);return re(n,d,b),(a,c)=>(I(),U("div",{ref:e(m),class:g(e(f)),style:H(e(y)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:d,class:g(e(t).e("header"))},[D(a.$slots,"header",{},()=>[R("span",{role:"heading","aria-level":a.ariaLevel,class:g(e(t).e("title"))},ie(a.title),11,Ve)]),a.showClose?(I(),U("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:g(e(t).e("headerbtn")),type:"button",onClick:c[0]||(c[0]=$=>a.$emit("close"))},[O(e(ce),{class:g(e(t).e("close"))},{default:k(()=>[(I(),q(ue(a.closeIcon||e(S))))]),_:1},8,["class"])],10,_e)):K("v-if",!0)],2),R("div",{id:e(B),class:g(e(t).e("body"))},[D(a.$slots,"default")],10,Ue),a.$slots.footer?(I(),U("footer",{key:0,class:g(e(t).e("footer"))},[D(a.$slots,"footer")],2)):K("v-if",!0)],6))}});var je=Q(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ze=Y({...ee,appendToBody:Boolean,beforeClose:{type:fe(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>me(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Je=(o,s)=>{var r;const n=he().emit,{nextZIndex:d}=ve();let B="";const t=Z(),y=Z(),i=E(!1),f=E(!1),m=E(!1),b=E((r=o.zIndex)!=null?r:d());let a,c;const $=pe("namespace",ke),M=A(()=>{const u={},h=`--${$.value}-dialog`;return o.fullscreen||(o.top&&(u[`${h}-margin-top`]=o.top),o.width&&(u[`${h}-width`]=ge(o.width))),u}),z=A(()=>o.alignCenter?{display:"flex"}:{});function T(){n("opened")}function V(){n("closed"),n(X,!1),o.destroyOnClose&&(m.value=!1)}function _(){n("close")}function L(){c==null||c(),a==null||a(),o.openDelay&&o.openDelay>0?{stop:a}=J(()=>P(),o.openDelay):P()}function F(){a==null||a(),c==null||c(),o.closeDelay&&o.closeDelay>0?{stop:c}=J(()=>l(),o.closeDelay):l()}function w(){function u(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(u):F()}function v(){o.closeOnClickModal&&w()}function P(){De&&(i.value=!0)}function l(){i.value=!1}function p(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(u){var h;((h=u.detail)==null?void 0:h.focusReason)==="pointer"&&u.preventDefault()}o.lockScroll&&ye(i);function le(){o.closeOnPressEscape&&w()}return G(()=>o.modelValue,u=>{u?(f.value=!1,L(),m.value=!0,b.value=Ne(o.zIndex)?d():b.value++,be(()=>{n("open"),s.value&&(s.value.scrollTop=0)})):i.value&&F()}),G(()=>o.fullscreen,u=>{s.value&&(u?(B=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=B)}),Ce(()=>{o.modelValue&&(i.value=!0,m.value=!0,L())}),{afterEnter:T,afterLeave:V,beforeLeave:_,handleClose:w,onModalClick:v,close:F,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:t,bodyId:y,closed:f,style:M,overlayDialogStyle:z,rendered:m,visible:i,zIndex:b}},We=["aria-label","aria-labelledby","aria-describedby"],Ye=N({name:"ElDialog",inheritAttrs:!1}),He=N({...Ye,props:Ze,emits:Ge,setup(o,{expose:s}){const r=o,S=Ee();W({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},A(()=>!!S.title)),W({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},A(()=>!!r.customClass));const n=Ae("dialog"),d=E(),B=E(),t=E(),{visible:y,titleId:i,bodyId:f,style:m,overlayDialogStyle:b,rendered:a,zIndex:c,afterEnter:$,afterLeave:M,beforeLeave:z,handleClose:T,onModalClick:V,onOpenAutoFocus:_,onCloseAutoFocus:L,onCloseRequested:F,onFocusoutPrevented:w}=Je(r,d);Be(x,{dialogRef:d,headerRef:B,bodyId:f,ns:n,rendered:a,style:m});const v=Re(V),P=A(()=>r.draggable&&!r.fullscreen);return s({visible:y,dialogContentRef:t}),(l,p)=>(I(),q(Pe,{to:"body",disabled:!l.appendToBody},[O(Le,{name:"dialog-fade",onAfterEnter:e($),onAfterLeave:e(M),onBeforeLeave:e(z),persisted:""},{default:k(()=>[Ie(O(e(Fe),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(c)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:g(`${e(n).namespace.value}-overlay-dialog`),style:H(e(b)),onClick:p[0]||(p[0]=(...C)=>e(v).onClick&&e(v).onClick(...C)),onMousedown:p[1]||(p[1]=(...C)=>e(v).onMousedown&&e(v).onMousedown(...C)),onMouseup:p[2]||(p[2]=(...C)=>e(v).onMouseup&&e(v).onMouseup(...C))},[O(e(we),{loop:"",trapped:e(y),"focus-start-el":"container",onFocusAfterTrapped:e(_),onFocusAfterReleased:e(L),onFocusoutPrevented:e(w),onReleaseRequested:e(F)},{default:k(()=>[e(a)?(I(),q(je,Se({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(P),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(T)}),$e({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e(T),titleId:e(i),titleClass:e(n).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,We)]),_:3},8,["mask","overlay-class","z-index"]),[[Te,e(y)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Qe=Q(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const eo=Oe(Qe);export{eo as E,Me as c};
