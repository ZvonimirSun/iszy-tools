import{v as K,h as L,r as N,y as h,a8 as H,a3 as y,R as Re,n as T,a9 as fe,g as X,ak as P,V as g,k as O,cc as Ne,ap as U,D as me,aS as Be,aq as E,o as D,c as J,w as I,a as F,ce as Pe,cf as De,bM as ve,ao as Ke,ad as Le,E as ge,ac as we,a5 as Me,j as oe,aW as Ae,bO as Ge,aY as ze,l as q,bE as Ye,X as j,p as Z,s as x,ae as be,aR as Ue,m as He,q as Je,av as ee,H as Ve,cg as je,ax as We,x as qe,ar as Ie}from"./index-64dd3e12.js";import{c as B,b as Xe,u as ue,E as Qe,O as Ze,w as de}from"./el-popper-39616f65.js";import{E as xe}from"./el-scrollbar-0f5d8a5e.js";import{c as Ee}from"./refs-592c8044.js";const eo=L({inheritAttrs:!1});function oo(e,o,a,t,d,i){return N(e.$slots,"default")}var no=K(eo,[["render",oo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const to=L({name:"ElCollectionItem",inheritAttrs:!1});function lo(e,o,a,t,d,i){return N(e.$slots,"default")}var ro=K(to,[["render",lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const _e="data-el-collection-item",Ce=e=>{const o=`El${e}Collection`,a=`${o}Item`,t=Symbol(o),d=Symbol(a),i={...no,name:o,setup(){const l=h(null),p=new Map;H(t,{itemMap:p,getItems:()=>{const m=T(l);if(!m)return[];const f=Array.from(m.querySelectorAll(`[${_e}]`));return[...p.values()].sort((n,c)=>f.indexOf(n.ref)-f.indexOf(c.ref))},collectionRef:l})}},r={...ro,name:a,setup(l,{attrs:p}){const v=h(null),m=y(t,void 0);H(d,{collectionItemRef:v}),Re(()=>{const f=T(v);f&&m.itemMap.set(f,{ref:f,...p})}),fe(()=>{const f=T(v);m.itemMap.delete(f)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:i,ElCollectionItem:r}},so=X({style:{type:P([String,Array,Object])},currentTabId:{type:P(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:P(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ao,ElCollectionItem:io,COLLECTION_INJECTION_KEY:ne,COLLECTION_ITEM_INJECTION_KEY:uo}=Ce("RovingFocusGroup"),te=Symbol("elRovingFocusGroup"),he=Symbol("elRovingFocusGroupItem"),co={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},po=(e,o)=>{if(o!=="rtl")return e;switch(e){case g.right:return g.left;case g.left:return g.right;default:return e}},fo=(e,o,a)=>{const t=po(e.key,a);if(!(o==="vertical"&&[g.left,g.right].includes(t))&&!(o==="horizontal"&&[g.up,g.down].includes(t)))return co[t]},mo=(e,o)=>e.map((a,t)=>e[(t+o)%e.length]),le=e=>{const{activeElement:o}=document;for(const a of e)if(a===o||(a.focus(),o!==document.activeElement))return},ce="currentTabIdChange",pe="rovingFocusGroup.entryFocus",vo={bubbles:!1,cancelable:!0},go=L({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:so,emits:[ce,"entryFocus"],setup(e,{emit:o}){var a;const t=h((a=e.currentTabId||e.defaultCurrentTabId)!=null?a:null),d=h(!1),i=h(!1),r=h(null),{getItems:l}=y(ne,void 0),p=O(()=>[{outline:"none"},e.style]),v=u=>{o(ce,u)},m=()=>{d.value=!0},f=B(u=>{var w;(w=e.onMousedown)==null||w.call(e,u)},()=>{i.value=!0}),_=B(u=>{var w;(w=e.onFocus)==null||w.call(e,u)},u=>{const w=!T(i),{target:M,currentTarget:k}=u;if(M===k&&w&&!T(d)){const A=new Event(pe,vo);if(k?.dispatchEvent(A),!A.defaultPrevented){const b=l().filter(S=>S.focusable),R=b.find(S=>S.active),C=b.find(S=>S.id===T(t)),z=[R,C,...b].filter(Boolean).map(S=>S.ref);le(z)}}i.value=!1}),n=B(u=>{var w;(w=e.onBlur)==null||w.call(e,u)},()=>{d.value=!1}),c=(...u)=>{o("entryFocus",...u)};H(te,{currentTabbedId:Ne(t),loop:U(e,"loop"),tabIndex:O(()=>T(d)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:p,orientation:U(e,"orientation"),dir:U(e,"dir"),onItemFocus:v,onItemShiftTab:m,onBlur:n,onFocus:_,onMousedown:f}),me(()=>e.currentTabId,u=>{t.value=u??null}),Be(r,pe,c)}});function wo(e,o,a,t,d,i){return N(e.$slots,"default")}var bo=K(go,[["render",wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Io=L({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ao,ElRovingFocusGroupImpl:bo}});function Eo(e,o,a,t,d,i){const r=E("el-roving-focus-group-impl"),l=E("el-focus-group-collection");return D(),J(l,null,{default:I(()=>[F(r,Pe(De(e.$attrs)),{default:I(()=>[N(e.$slots,"default")]),_:3},16)]),_:3})}var _o=K(Io,[["render",Eo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Co=L({components:{ElRovingFocusCollectionItem:io},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:a,loop:t,onItemFocus:d,onItemShiftTab:i}=y(te,void 0),{getItems:r}=y(ne,void 0),l=ve(),p=h(null),v=B(n=>{o("mousedown",n)},n=>{e.focusable?d(T(l)):n.preventDefault()}),m=B(n=>{o("focus",n)},()=>{d(T(l))}),f=B(n=>{o("keydown",n)},n=>{const{key:c,shiftKey:u,target:w,currentTarget:M}=n;if(c===g.tab&&u){i();return}if(w!==M)return;const k=fo(n);if(k){n.preventDefault();let b=r().filter(R=>R.focusable).map(R=>R.ref);switch(k){case"last":{b.reverse();break}case"prev":case"next":{k==="prev"&&b.reverse();const R=b.indexOf(M);b=t.value?mo(b,R+1):b.slice(R+1);break}}Ke(()=>{le(b)})}}),_=O(()=>a.value===T(l));return H(he,{rovingFocusGroupItemRef:p,tabIndex:O(()=>T(_)?0:-1),handleMousedown:v,handleFocus:m,handleKeydown:f}),{id:l,handleKeydown:f,handleFocus:m,handleMousedown:v}}});function ho(e,o,a,t,d,i){const r=E("el-roving-focus-collection-item");return D(),J(r,{id:e.id,focusable:e.focusable,active:e.active},{default:I(()=>[N(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var yo=K(Co,[["render",ho],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const To=X({trigger:Xe.trigger,effect:{...ue.effect,default:"light"},type:{type:P(String)},placement:{type:P(String),default:"bottom"},popperOptions:{type:P(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:P([Number,String]),default:0},maxHeight:{type:P([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:P(Object)},teleported:ue.teleported}),ye=X({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:Le}}),$o=X({onKeydown:{type:P(Function)}}),Oo=[g.down,g.pageDown,g.home],Te=[g.up,g.pageUp,g.end],ko=[...Oo,...Te],{ElCollection:So,ElCollectionItem:Fo,COLLECTION_INJECTION_KEY:Ro,COLLECTION_ITEM_INJECTION_KEY:No}=Ce("Dropdown"),Q=Symbol("elDropdown"),{ButtonGroup:Bo}=ge,Po=L({name:"ElDropdown",components:{ElButton:ge,ElButtonGroup:Bo,ElScrollbar:xe,ElDropdownCollection:So,ElTooltip:Qe,ElRovingFocusGroup:_o,ElOnlyChild:Ze,ElIcon:we,ArrowDown:Me},props:To,emits:["visible-change","click","command"],setup(e,{emit:o}){const a=be(),t=oe("dropdown"),{t:d}=Ae(),i=h(),r=h(),l=h(null),p=h(null),v=h(null),m=h(null),f=h(!1),_=[g.enter,g.space,g.down],n=O(()=>({maxHeight:Ge(e.maxHeight)})),c=O(()=>[t.m(b.value)]),u=ve().value,w=O(()=>e.id||u);me([i,U(e,"trigger")],([s,$],[Y])=>{var se,ae,ie;const Fe=Ue($)?$:[$];(se=Y?.$el)!=null&&se.removeEventListener&&Y.$el.removeEventListener("pointerenter",C),(ae=s?.$el)!=null&&ae.removeEventListener&&s.$el.removeEventListener("pointerenter",C),(ie=s?.$el)!=null&&ie.addEventListener&&Fe.includes("hover")&&s.$el.addEventListener("pointerenter",C)},{immediate:!0}),fe(()=>{var s,$;($=(s=i.value)==null?void 0:s.$el)!=null&&$.removeEventListener&&i.value.$el.removeEventListener("pointerenter",C)});function M(){k()}function k(){var s;(s=l.value)==null||s.onClose()}function A(){var s;(s=l.value)==null||s.onOpen()}const b=ze();function R(...s){o("command",...s)}function C(){var s,$;($=(s=i.value)==null?void 0:s.$el)==null||$.focus()}function G(){}function z(){const s=T(p);s?.focus(),m.value=null}function S(s){m.value=s}function re(s){f.value||(s.preventDefault(),s.stopImmediatePropagation())}function W(){o("visible-change",!0)}function V(s){s?.type==="keydown"&&p.value.focus()}function Se(){o("visible-change",!1)}return H(Q,{contentRef:p,role:O(()=>e.role),triggerId:w,isUsingKeyboard:f,onItemEnter:G,onItemLeave:z}),H("elDropdown",{instance:a,dropdownSize:b,handleClick:M,commandHandler:R,trigger:U(e,"trigger"),hideOnClick:U(e,"hideOnClick")}),{t:d,ns:t,scrollbar:v,wrapStyle:n,dropdownTriggerKls:c,dropdownSize:b,triggerId:w,triggerKeys:_,currentTabId:m,handleCurrentTabIdChange:S,handlerMainButtonClick:s=>{o("click",s)},handleEntryFocus:re,handleClose:k,handleOpen:A,handleBeforeShowTooltip:W,handleShowTooltip:V,handleBeforeHideTooltip:Se,onFocusAfterTrapped:s=>{var $,Y;s.preventDefault(),(Y=($=p.value)==null?void 0:$.focus)==null||Y.call($,{preventScroll:!0})},popperRef:l,contentRef:p,triggeringElementRef:i,referenceElementRef:r}}});function Do(e,o,a,t,d,i){var r;const l=E("el-dropdown-collection"),p=E("el-roving-focus-group"),v=E("el-scrollbar"),m=E("el-only-child"),f=E("el-tooltip"),_=E("el-button"),n=E("arrow-down"),c=E("el-icon"),u=E("el-button-group");return D(),q("div",{class:Z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[F(f,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ye({content:I(()=>[F(v,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:I(()=>[F(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:I(()=>[F(l,null,{default:I(()=>[N(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:I(()=>[F(m,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:I(()=>[N(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(D(),J(u,{key:0},{default:I(()=>[F(_,j({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:I(()=>[N(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),F(_,j({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:I(()=>[F(c,{class:Z(e.ns.e("icon"))},{default:I(()=>[F(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):x("v-if",!0)],2)}var Ko=K(Po,[["render",Do],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Lo=L({name:"DropdownItemImpl",components:{ElIcon:we},props:ye,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const a=oe("dropdown"),{role:t}=y(Q,void 0),{collectionItemRef:d}=y(No,void 0),{collectionItemRef:i}=y(uo,void 0),{rovingFocusGroupItemRef:r,tabIndex:l,handleFocus:p,handleKeydown:v,handleMousedown:m}=y(he,void 0),f=Ee(d,i,r),_=O(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=B(c=>{const{code:u}=c;if(u===g.enter||u===g.space)return c.preventDefault(),c.stopImmediatePropagation(),o("clickimpl",c),!0},v);return{ns:a,itemRef:f,dataset:{[_e]:""},role:_,tabIndex:l,handleFocus:p,handleKeydown:n,handleMousedown:m}}}),Mo=["aria-disabled","tabindex","role"];function Ao(e,o,a,t,d,i){const r=E("el-icon");return D(),q(Ve,null,[e.divided?(D(),q("li",j({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):x("v-if",!0),He("li",j({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=l=>e.$emit("clickimpl",l)),onFocus:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onKeydown:o[2]||(o[2]=ee((...l)=>e.handleKeydown&&e.handleKeydown(...l),["self"])),onMousedown:o[3]||(o[3]=(...l)=>e.handleMousedown&&e.handleMousedown(...l)),onPointermove:o[4]||(o[4]=l=>e.$emit("pointermove",l)),onPointerleave:o[5]||(o[5]=l=>e.$emit("pointerleave",l))}),[e.icon?(D(),J(r,{key:0},{default:I(()=>[(D(),J(Je(e.icon)))]),_:1})):x("v-if",!0),N(e.$slots,"default")],16,Mo)],64)}var Go=K(Lo,[["render",Ao],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const $e=()=>{const e=y("elDropdown",{}),o=O(()=>e?.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},zo=L({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Fo,ElRovingFocusItem:yo,ElDropdownItemImpl:Go},inheritAttrs:!1,props:ye,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:a}){const{elDropdown:t}=$e(),d=be(),i=h(null),r=O(()=>{var n,c;return(c=(n=T(i))==null?void 0:n.textContent)!=null?c:""}),{onItemEnter:l,onItemLeave:p}=y(Q,void 0),v=B(n=>(o("pointermove",n),n.defaultPrevented),de(n=>{if(e.disabled){p(n);return}const c=n.currentTarget;c===document.activeElement||c.contains(document.activeElement)||(l(n),n.defaultPrevented||c?.focus())})),m=B(n=>(o("pointerleave",n),n.defaultPrevented),de(n=>{p(n)})),f=B(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var c,u,w;if(e.disabled){n.stopImmediatePropagation();return}(c=t?.hideOnClick)!=null&&c.value&&((u=t.handleClick)==null||u.call(t)),(w=t.commandHandler)==null||w.call(t,e.command,d,n)}),_=O(()=>({...e,...a}));return{handleClick:f,handlePointerMove:v,handlePointerLeave:m,textContent:r,propsAndAttrs:_}}});function Yo(e,o,a,t,d,i){var r;const l=E("el-dropdown-item-impl"),p=E("el-roving-focus-item"),v=E("el-dropdown-collection-item");return D(),J(v,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:I(()=>[F(p,{focusable:!e.disabled},{default:I(()=>[F(l,j(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:I(()=>[N(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Oe=K(zo,[["render",Yo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Uo=L({name:"ElDropdownMenu",props:$o,setup(e){const o=oe("dropdown"),{_elDropdownSize:a}=$e(),t=a.value,{focusTrapRef:d,onKeydown:i}=y(je,void 0),{contentRef:r,role:l,triggerId:p}=y(Q,void 0),{collectionRef:v,getItems:m}=y(Ro,void 0),{rovingFocusGroupRef:f,rovingFocusGroupRootStyle:_,tabIndex:n,onBlur:c,onFocus:u,onMousedown:w}=y(te,void 0),{collectionRef:M}=y(ne,void 0),k=O(()=>[o.b("menu"),o.bm("menu",t?.value)]),A=Ee(r,v,d,f,M),b=B(C=>{var G;(G=e.onKeydown)==null||G.call(e,C)},C=>{const{currentTarget:G,code:z,target:S}=C;if(G.contains(S),g.tab===z&&C.stopImmediatePropagation(),C.preventDefault(),S!==T(r)||!ko.includes(z))return;const W=m().filter(V=>!V.disabled).map(V=>V.ref);Te.includes(z)&&W.reverse(),le(W)});return{size:t,rovingFocusGroupRootStyle:_,tabIndex:n,dropdownKls:k,role:l,triggerId:p,dropdownListWrapperRef:A,handleKeydown:C=>{b(C),i(C)},onBlur:c,onFocus:u,onMousedown:w}}}),Ho=["role","aria-labelledby"];function Jo(e,o,a,t,d,i){return D(),q("ul",{ref:e.dropdownListWrapperRef,class:Z(e.dropdownKls),style:We(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:o[1]||(o[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:o[2]||(o[2]=ee((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=ee((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[N(e.$slots,"default")],46,Ho)}var ke=K(Uo,[["render",Jo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Zo=qe(Ko,{DropdownItem:Oe,DropdownMenu:ke}),xo=Ie(Oe),en=Ie(ke);export{Zo as E,xo as a,en as b};