import"./index-qiUVPPGS.js";import{L as H,B as j,I as G,i as C,Q as le,O as D,j as Ke,n as v,ad as be,ay as me,aD as Y,a9 as $,k as P,c5 as xe,bb as re,W as he,a8 as eo,Z as F,o as K,D as x,w as s,cB as oo,cC as no,l as r,br as Ae,X as to,aa as lo,E as we,U as Ve,bK as so,H as Ie,ab as ao,bt as ro,aA as io,f as Z,ax as uo,J as ie,a0 as fe,a1 as te,a3 as ze,g as _,$ as co,s as _e,F as po,cD as fo,a2 as mo,aC as vo,aV as Ge,bv as Ne,cA as Fe,a7 as go,x as V,A as Re,q as ce,y as oe,z as ne,t as _o,p as bo,h as ho,e as wo}from"./index.js";import{c as Ue,E as Io}from"./el-dialog-epLcs4qj.js";import{E as yo}from"./el-space-BnsyAJTn.js";import{c as U,b as Co,u as Be,E as Eo,O as To,w as De}from"./el-popper-Ff1rQQUh.js";import"./el-scrollbar-vz8xv5bG.js";import{E as $o,g as pe}from"./jse-theme-dark-KFEKseXt.js";import{c as Pe}from"./createFile-0-klzpmE.js";import{f as ko}from"./formatBytes-KQaxC_6_.js";import{E as So}from"./index-m_IIyYV3.js";import{c as Oo}from"./castArray-d3CJQxAY.js";import{_ as No}from"./Paragraph-QdlxZtfJ.js";import{_ as Fo}from"./Text-ssN_mwgf.js";const Ro=j({inheritAttrs:!1});function Bo(e,o,g,a,b,h){return G(e.$slots,"default")}var Do=H(Ro,[["render",Bo],["__file","collection.vue"]]);const Po=j({name:"ElCollectionItem",inheritAttrs:!1});function Lo(e,o,g,a,b,h){return G(e.$slots,"default")}var Mo=H(Po,[["render",Lo],["__file","collection-item.vue"]]);const Je="data-el-collection-item",Ye=e=>{const o=`El${e}Collection`,g=`${o}Item`,a=Symbol(o),b=Symbol(g),h={...Do,name:o,setup(){const n=C(null),f=new Map;le(a,{itemMap:f,getItems:()=>{const I=v(n);if(!I)return[];const w=Array.from(I.querySelectorAll(`[${Je}]`));return[...f.values()].sort((t,u)=>w.indexOf(t.ref)-w.indexOf(u.ref))},collectionRef:n})}},i={...Mo,name:g,setup(n,{attrs:f}){const m=C(null),I=D(a,void 0);le(b,{collectionItemRef:m}),Ke(()=>{const w=v(m);w&&I.itemMap.set(w,{ref:w,...f})}),be(()=>{const w=v(m);I.itemMap.delete(w)})}};return{COLLECTION_INJECTION_KEY:a,COLLECTION_ITEM_INJECTION_KEY:b,ElCollection:h,ElCollectionItem:i}},Ko=me({style:{type:Y([String,Array,Object])},currentTabId:{type:Y(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:Y(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Ao,ElCollectionItem:Vo,COLLECTION_INJECTION_KEY:ye,COLLECTION_ITEM_INJECTION_KEY:zo}=Ye("RovingFocusGroup"),Ce=Symbol("elRovingFocusGroup"),je=Symbol("elRovingFocusGroupItem"),Go={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Uo=(e,o)=>{if(o!=="rtl")return e;switch(e){case $.right:return $.left;case $.left:return $.right;default:return e}},Jo=(e,o,g)=>{const a=Uo(e.key,g);if(!(o==="vertical"&&[$.left,$.right].includes(a))&&!(o==="horizontal"&&[$.up,$.down].includes(a)))return Go[a]},Yo=(e,o)=>e.map((g,a)=>e[(a+o)%e.length]),Ee=e=>{const{activeElement:o}=document;for(const g of e)if(g===o||(g.focus(),o!==document.activeElement))return},Le="currentTabIdChange",Me="rovingFocusGroup.entryFocus",jo={bubbles:!1,cancelable:!0},Wo=j({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Ko,emits:[Le,"entryFocus"],setup(e,{emit:o}){var g;const a=C((g=e.currentTabId||e.defaultCurrentTabId)!=null?g:null),b=C(!1),h=C(!1),i=C(null),{getItems:n}=D(ye,void 0),f=P(()=>[{outline:"none"},e.style]),m=d=>{o(Le,d)},I=()=>{b.value=!0},w=U(d=>{var y;(y=e.onMousedown)==null||y.call(e,d)},()=>{h.value=!0}),T=U(d=>{var y;(y=e.onFocus)==null||y.call(e,d)},d=>{const y=!v(h),{target:k,currentTarget:O}=d;if(k===O&&y&&!v(b)){const J=new Event(Me,jo);if(O==null||O.dispatchEvent(J),!J.defaultPrevented){const N=n().filter(L=>L.focusable),R=N.find(L=>L.active),B=N.find(L=>L.id===v(a)),W=[R,B,...N].filter(Boolean).map(L=>L.ref);Ee(W)}}h.value=!1}),t=U(d=>{var y;(y=e.onBlur)==null||y.call(e,d)},()=>{b.value=!1}),u=(...d)=>{o("entryFocus",...d)};le(Ce,{currentTabbedId:xe(a),loop:re(e,"loop"),tabIndex:P(()=>v(b)?-1:0),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:f,orientation:re(e,"orientation"),dir:re(e,"dir"),onItemFocus:m,onItemShiftTab:I,onBlur:t,onFocus:T,onMousedown:w}),he(()=>e.currentTabId,d=>{a.value=d??null}),eo(i,Me,u)}});function Ho(e,o,g,a,b,h){return G(e.$slots,"default")}var qo=H(Wo,[["render",Ho],["__file","roving-focus-group-impl.vue"]]);const Qo=j({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Ao,ElRovingFocusGroupImpl:qo}});function Xo(e,o,g,a,b,h){const i=F("el-roving-focus-group-impl"),n=F("el-focus-group-collection");return K(),x(n,null,{default:s(()=>[r(i,no(oo(e.$attrs)),{default:s(()=>[G(e.$slots,"default")]),_:3},16)]),_:3})}var Zo=H(Qo,[["render",Xo],["__file","roving-focus-group.vue"]]);const xo=j({components:{ElRovingFocusCollectionItem:Vo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:g,loop:a,onItemFocus:b,onItemShiftTab:h}=D(Ce,void 0),{getItems:i}=D(ye,void 0),n=Ae(),f=C(null),m=U(t=>{o("mousedown",t)},t=>{e.focusable?b(v(n)):t.preventDefault()}),I=U(t=>{o("focus",t)},()=>{b(v(n))}),w=U(t=>{o("keydown",t)},t=>{const{key:u,shiftKey:d,target:y,currentTarget:k}=t;if(u===$.tab&&d){h();return}if(y!==k)return;const O=Jo(t);if(O){t.preventDefault();let N=i().filter(R=>R.focusable).map(R=>R.ref);switch(O){case"last":{N.reverse();break}case"prev":case"next":{O==="prev"&&N.reverse();const R=N.indexOf(k);N=a.value?Yo(N,R+1):N.slice(R+1);break}}to(()=>{Ee(N)})}}),T=P(()=>g.value===v(n));return le(je,{rovingFocusGroupItemRef:f,tabIndex:P(()=>v(T)?0:-1),handleMousedown:m,handleFocus:I,handleKeydown:w}),{id:n,handleKeydown:w,handleFocus:I,handleMousedown:m}}});function en(e,o,g,a,b,h){const i=F("el-roving-focus-collection-item");return K(),x(i,{id:e.id,focusable:e.focusable,active:e.active},{default:s(()=>[G(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var on=H(xo,[["render",en],["__file","roving-focus-item.vue"]]);const nn=me({trigger:Co.trigger,effect:{...Be.effect,default:"light"},type:{type:Y(String)},placement:{type:Y(String),default:"bottom"},popperOptions:{type:Y(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:Y([Number,String]),default:0},maxHeight:{type:Y([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:Y(Object)},teleported:Be.teleported}),We=me({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:lo}}),tn=me({onKeydown:{type:Y(Function)}}),ln=[$.down,$.pageDown,$.home],He=[$.up,$.pageUp,$.end],sn=[...ln,...He],{ElCollection:an,ElCollectionItem:rn,COLLECTION_INJECTION_KEY:un,COLLECTION_ITEM_INJECTION_KEY:dn}=Ye("Dropdown"),ve=Symbol("elDropdown"),{ButtonGroup:cn}=we,pn=j({name:"ElDropdown",components:{ElButton:we,ElButtonGroup:cn,ElScrollbar:So,ElDropdownCollection:an,ElTooltip:Eo,ElRovingFocusGroup:Zo,ElOnlyChild:To,ElIcon:Ve,ArrowDown:so},props:nn,emits:["visible-change","click","command"],setup(e,{emit:o}){const g=ze(),a=Ie("dropdown"),{t:b}=ao(),h=C(),i=C(),n=C(null),f=C(null),m=C(null),I=C(null),w=C(!1),T=[$.enter,$.space,$.down],t=P(()=>({maxHeight:ro(e.maxHeight)})),u=P(()=>[a.m(R.value)]),d=P(()=>Oo(e.trigger)),y=Ae().value,k=P(()=>e.id||y);he([h,d],([c,M],[l])=>{var p,E,S;(p=l==null?void 0:l.$el)!=null&&p.removeEventListener&&l.$el.removeEventListener("pointerenter",z),(E=c==null?void 0:c.$el)!=null&&E.removeEventListener&&c.$el.removeEventListener("pointerenter",z),(S=c==null?void 0:c.$el)!=null&&S.addEventListener&&M.includes("hover")&&c.$el.addEventListener("pointerenter",z)},{immediate:!0}),be(()=>{var c,M;(M=(c=h.value)==null?void 0:c.$el)!=null&&M.removeEventListener&&h.value.$el.removeEventListener("pointerenter",z)});function O(){J()}function J(){var c;(c=n.value)==null||c.onClose()}function N(){var c;(c=n.value)==null||c.onOpen()}const R=io();function B(...c){o("command",...c)}function z(){var c,M;(M=(c=h.value)==null?void 0:c.$el)==null||M.focus()}function W(){}function L(){const c=v(f);d.value.includes("hover")&&(c==null||c.focus()),I.value=null}function ue(c){I.value=c}function q(c){w.value||(c.preventDefault(),c.stopImmediatePropagation())}function Q(){o("visible-change",!0)}function de(c){(c==null?void 0:c.type)==="keydown"&&f.value.focus()}function ge(){o("visible-change",!1)}return le(ve,{contentRef:f,role:P(()=>e.role),triggerId:k,isUsingKeyboard:w,onItemEnter:W,onItemLeave:L}),le("elDropdown",{instance:g,dropdownSize:R,handleClick:O,commandHandler:B,trigger:re(e,"trigger"),hideOnClick:re(e,"hideOnClick")}),{t:b,ns:a,scrollbar:m,wrapStyle:t,dropdownTriggerKls:u,dropdownSize:R,triggerId:k,triggerKeys:T,currentTabId:I,handleCurrentTabIdChange:ue,handlerMainButtonClick:c=>{o("click",c)},handleEntryFocus:q,handleClose:J,handleOpen:N,handleBeforeShowTooltip:Q,handleShowTooltip:de,handleBeforeHideTooltip:ge,onFocusAfterTrapped:c=>{var M,l;c.preventDefault(),(l=(M=f.value)==null?void 0:M.focus)==null||l.call(M,{preventScroll:!0})},popperRef:n,contentRef:f,triggeringElementRef:h,referenceElementRef:i}}});function fn(e,o,g,a,b,h){var i;const n=F("el-dropdown-collection"),f=F("el-roving-focus-group"),m=F("el-scrollbar"),I=F("el-only-child"),w=F("el-tooltip"),T=F("el-button"),t=F("arrow-down"),u=F("el-icon"),d=F("el-button-group");return K(),Z("div",{class:fe([e.ns.b(),e.ns.is("disabled",e.disabled)])},[r(w,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(i=e.referenceElementRef)==null?void 0:i.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},uo({content:s(()=>[r(m,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:s(()=>[r(f,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:s(()=>[r(n,null,{default:s(()=>[G(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:s(()=>[r(I,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:s(()=>[G(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(K(),x(d,{key:0},{default:s(()=>[r(T,ie({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:s(()=>[G(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),r(T,ie({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:s(()=>[r(u,{class:fe(e.ns.e("icon"))},{default:s(()=>[r(t)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):te("v-if",!0)],2)}var mn=H(pn,[["render",fn],["__file","dropdown.vue"]]);const vn=j({name:"DropdownItemImpl",components:{ElIcon:Ve},props:We,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const g=Ie("dropdown"),{role:a}=D(ve,void 0),{collectionItemRef:b}=D(dn,void 0),{collectionItemRef:h}=D(zo,void 0),{rovingFocusGroupItemRef:i,tabIndex:n,handleFocus:f,handleKeydown:m,handleMousedown:I}=D(je,void 0),w=Ue(b,h,i),T=P(()=>a.value==="menu"?"menuitem":a.value==="navigation"?"link":"button"),t=U(u=>{const{code:d}=u;if(d===$.enter||d===$.space)return u.preventDefault(),u.stopImmediatePropagation(),o("clickimpl",u),!0},m);return{ns:g,itemRef:w,dataset:{[Je]:""},role:T,tabIndex:n,handleFocus:f,handleKeydown:t,handleMousedown:I}}}),gn=["aria-disabled","tabindex","role"];function _n(e,o,g,a,b,h){const i=F("el-icon");return K(),Z(po,null,[e.divided?(K(),Z("li",ie({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):te("v-if",!0),_("li",ie({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=n=>e.$emit("clickimpl",n)),onFocus:o[1]||(o[1]=(...n)=>e.handleFocus&&e.handleFocus(...n)),onKeydown:o[2]||(o[2]=_e((...n)=>e.handleKeydown&&e.handleKeydown(...n),["self"])),onMousedown:o[3]||(o[3]=(...n)=>e.handleMousedown&&e.handleMousedown(...n)),onPointermove:o[4]||(o[4]=n=>e.$emit("pointermove",n)),onPointerleave:o[5]||(o[5]=n=>e.$emit("pointerleave",n))}),[e.icon?(K(),x(i,{key:0},{default:s(()=>[(K(),x(co(e.icon)))]),_:1})):te("v-if",!0),G(e.$slots,"default")],16,gn)],64)}var bn=H(vn,[["render",_n],["__file","dropdown-item-impl.vue"]]);const qe=()=>{const e=D("elDropdown",{}),o=P(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},hn=j({name:"ElDropdownItem",components:{ElDropdownCollectionItem:rn,ElRovingFocusItem:on,ElDropdownItemImpl:bn},inheritAttrs:!1,props:We,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:g}){const{elDropdown:a}=qe(),b=ze(),h=C(null),i=P(()=>{var t,u;return(u=(t=v(h))==null?void 0:t.textContent)!=null?u:""}),{onItemEnter:n,onItemLeave:f}=D(ve,void 0),m=U(t=>(o("pointermove",t),t.defaultPrevented),De(t=>{if(e.disabled){f(t);return}const u=t.currentTarget;u===document.activeElement||u.contains(document.activeElement)||(n(t),t.defaultPrevented||u==null||u.focus())})),I=U(t=>(o("pointerleave",t),t.defaultPrevented),De(t=>{f(t)})),w=U(t=>{if(!e.disabled)return o("click",t),t.type!=="keydown"&&t.defaultPrevented},t=>{var u,d,y;if(e.disabled){t.stopImmediatePropagation();return}(u=a==null?void 0:a.hideOnClick)!=null&&u.value&&((d=a.handleClick)==null||d.call(a)),(y=a.commandHandler)==null||y.call(a,e.command,b,t)}),T=P(()=>({...e,...g}));return{handleClick:w,handlePointerMove:m,handlePointerLeave:I,textContent:i,propsAndAttrs:T}}});function wn(e,o,g,a,b,h){var i;const n=F("el-dropdown-item-impl"),f=F("el-roving-focus-item"),m=F("el-dropdown-collection-item");return K(),x(m,{disabled:e.disabled,"text-value":(i=e.textValue)!=null?i:e.textContent},{default:s(()=>[r(f,{focusable:!e.disabled},{default:s(()=>[r(n,ie(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:s(()=>[G(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Qe=H(hn,[["render",wn],["__file","dropdown-item.vue"]]);const In=j({name:"ElDropdownMenu",props:tn,setup(e){const o=Ie("dropdown"),{_elDropdownSize:g}=qe(),a=g.value,{focusTrapRef:b,onKeydown:h}=D(fo,void 0),{contentRef:i,role:n,triggerId:f}=D(ve,void 0),{collectionRef:m,getItems:I}=D(un,void 0),{rovingFocusGroupRef:w,rovingFocusGroupRootStyle:T,tabIndex:t,onBlur:u,onFocus:d,onMousedown:y}=D(Ce,void 0),{collectionRef:k}=D(ye,void 0),O=P(()=>[o.b("menu"),o.bm("menu",a==null?void 0:a.value)]),J=Ue(i,m,b,w,k),N=U(B=>{var z;(z=e.onKeydown)==null||z.call(e,B)},B=>{const{currentTarget:z,code:W,target:L}=B;if(z.contains(L),$.tab===W&&B.stopImmediatePropagation(),B.preventDefault(),L!==v(i)||!sn.includes(W))return;const q=I().filter(Q=>!Q.disabled).map(Q=>Q.ref);He.includes(W)&&q.reverse(),Ee(q)});return{size:a,rovingFocusGroupRootStyle:T,tabIndex:t,dropdownKls:O,role:n,triggerId:f,dropdownListWrapperRef:J,handleKeydown:B=>{N(B),h(B)},onBlur:u,onFocus:d,onMousedown:y}}}),yn=["role","aria-labelledby"];function Cn(e,o,g,a,b,h){return K(),Z("ul",{ref:e.dropdownListWrapperRef,class:fe(e.dropdownKls),style:mo(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...i)=>e.onBlur&&e.onBlur(...i)),onFocus:o[1]||(o[1]=(...i)=>e.onFocus&&e.onFocus(...i)),onKeydown:o[2]||(o[2]=_e((...i)=>e.handleKeydown&&e.handleKeydown(...i),["self"])),onMousedown:o[3]||(o[3]=_e((...i)=>e.onMousedown&&e.onMousedown(...i),["self"]))},[G(e.$slots,"default")],46,yn)}var Xe=H(In,[["render",Cn],["__file","dropdown-menu.vue"]]);const En=vo(mn,{DropdownItem:Qe,DropdownMenu:Xe}),Tn=Ge(Qe),$n=Ge(Xe),A=e=>(bo("data-v-5eb3d97a"),e=e(),ho(),e),kn={key:0,class:"json-editor-menu"},Sn={key:0,class:"editorTitle"},On=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-file-addition-one"}),V(" 新建")],-1)),Nn=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-history"}),V(" 打开最近记录")],-1)),Fn=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-computer"}),V(" 打开本地文件")],-1)),Rn=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-folder-open"}),V(" 打开"),_("span",{class:"i-icon-park-outline-down"})],-1)),Bn=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-save"}),V(" 保存")],-1)),Dn={class:"buttonWithIcon"},Pn=A(()=>_("span",{class:"i-icon-park-outline-indent-right"},null,-1)),Ln=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-info"}),V(" 文档属性")],-1)),Mn=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-delete"}),V(" 删除文档")],-1)),Kn=A(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-setting-two"}),V(" 选项"),_("span",{class:"i-icon-park-outline-down"})],-1)),An={class:"dialog-footer"},Vn=A(()=>_("strong",null,"名称：",-1)),zn=A(()=>_("strong",null,"存储：",-1)),Gn=A(()=>_("strong",null,"更新：",-1)),Un=A(()=>_("strong",null,"内容：",-1)),Jn=A(()=>_("strong",null,"大小：",-1)),Yn=j({__name:"VanillaJsonEditor",props:{content:{default:void 0},config:{default:()=>({mode:"text"})},showMenuBar:{type:Boolean,default:!1},name:{default:""}},emits:["change","create","changeName","open","openRecent","delete"],setup(e,{expose:o,emit:g}){const a=["content","mode","mainMenuBar","navigationBar","statusBar","readOnly","indentation","tabSize","escapeControlCharacters","escapeUnicodeCharacters","validator","onError","onChange","onChangeMode","onClassName","onRenderValue","onRenderMenu","queryLanguages","queryLanguageId","onChangeQueryLanguage","onFocus","onBlur"],b=C(),h=C(),i=C();let n;const f=C(""),m=C(2),I=C(!1),w=C(!1),T=C(!1),t=C(""),u=P(()=>{if(w){const l=n.get();let p,E;return pe(l)?E=l.json:E=l.text,typeof E=="string"?p="字符串类型":Array.isArray(E)?p=`数组类型，包含 ${E.length} 个对象`:E&&typeof E=="object"?p=`对象类型，包含 ${Object.keys(E).length} 个属性`:p="其他类型",{name:f.value,storage:f.value?"浏览器本地":"",updated:"",content:p,size:ko(typeof E=="string"?E.length:JSON.stringify(E,null,m.value).length)}}else return{}}),d=g;let y=!1;o({container:h,update:B,set:z,refresh:L,get:W});const k=e;let O={};Ke(()=>{b.value&&(O=Ne(k.config),n=new $o({target:b.value,props:{content:{json:{}},onChange:l=>{y||(pe(l)?d("change",l.json):d("change",l.text))},indentation:m.value,...M(O,a)}}),k.config.indentation&&(m.value=k.config.indentation))}),be(()=>{n==null||n.destroy()}),he(()=>Fe().isDark,()=>{n==null||n.refresh()}),go(()=>{let l=!1;for(const p in k.config)if(k.config[p]!==O[p]){l=!0;break}l&&(O=Ne(k.config),n==null||n.updateProps(M(O,a))),k.content!=null&&B(k.content),f.value=k.name,n==null||n.refresh()});function J(){n.set({json:{}}),d("create")}function N(l){var p;switch(l){case"file":(p=i.value)==null||p.click();break;case"recent":d("openRecent");break}}function R(l){const p=l.target;if(p.files&&p.files.length){const E=p.files[0],S=new FileReader;S.onload=()=>{S.result&&d("open",{name:E.name,content:S.result})},S.readAsText(E)}p.value=""}function B(l){y=!0;let p;l!=null&&(typeof l=="string"?p=l:p=JSON.stringify(l,null,m.value),n.update({text:p})),setTimeout(()=>{y=!1},0)}function z(l){y=!0,l!=null&&(typeof l=="string"?n.set({text:l}):n.set({json:l})),setTimeout(()=>{y=!1},0)}function W(){const l=n.get();return pe(l)?l.json:l.text}function L(){n==null||n.refresh()}function ue(){const l=n.get(),p=f.value?f.value+".json":"未命名.json";pe(l)?Pe(JSON.stringify(l.json),p):Pe(l.text,p)}let q=m.value;function Q(l){switch(l){case"indentation":q=m.value,I.value=!0;break;case"properties":w.value=!0;break;case"delete":d("delete");break}}function de(){m.value=q,I.value=!1}function ge(){n.updateProps({indentation:m.value}),I.value=!1}function Te(){t.value=f.value,T.value=!0}function $e(){T.value=!1}function c(){t.value&&d("changeName",t.value),T.value=!1}function M(l,p){const E={};for(const S of p)l[S]!==void 0&&(E[S]=l[S]);return E}return(l,p)=>{const E=_o,S=we,se=Tn,ke=$n,Se=En,Ze=yo,ee=No,Oe=Io,ae=Fo;return K(),Z("div",{ref_key:"container",ref:h,class:"json-editor-wrapper"},[l.showMenuBar?(K(),Z("div",kn,[v(f)&&!v(T)?(K(),Z("div",Sn,[V(Re(v(f))+" ",1),_("i",{class:"i-icon-park-outline-edit",onClick:Te})])):te("",!0),v(T)?(K(),x(E,{key:1,modelValue:v(t),"onUpdate:modelValue":p[0]||(p[0]=X=>ce(t)?t.value=X:null),class:"name-editor",placeholder:"请输入名称"},{suffix:s(()=>[_("i",{class:"i-icon-park-outline-close",onClick:$e}),_("i",{class:"i-icon-park-outline-check",onClick:c})]),_:1},8,["modelValue"])):te("",!0),r(Ze,{class:"editorControlButtons"},{default:s(()=>[r(S,{size:"small",type:"primary",onClick:J},{default:s(()=>[On]),_:1}),r(Se,{onCommand:N},{dropdown:s(()=>[r(ke,null,{default:s(()=>[r(se,{command:"recent"},{default:s(()=>[Nn]),_:1}),r(se,{command:"file"},{default:s(()=>[Fn]),_:1})]),_:1})]),default:s(()=>[r(S,{size:"small",type:"primary"},{default:s(()=>[Rn]),_:1})]),_:1}),r(S,{size:"small",type:"primary",onClick:ue},{default:s(()=>[Bn]),_:1}),r(Se,{onCommand:Q},{dropdown:s(()=>[r(ke,null,{default:s(()=>[r(se,{command:"indentation"},{default:s(()=>[_("span",Dn,[Pn,V(" 缩进("+Re(v(m))+")",1)])]),_:1}),r(se,{command:"properties"},{default:s(()=>[Ln]),_:1}),r(se,{command:"delete"},{default:s(()=>[Mn]),_:1})]),_:1})]),default:s(()=>[r(S,{size:"small",type:"primary"},{default:s(()=>[Kn]),_:1})]),_:1})]),_:1})])):te("",!0),_("div",{ref_key:"jsonEditorDiv",ref:b,class:fe(["json-editor",{"jse-theme-dark":("useStyleStore"in l?l.useStyleStore:v(Fe))().isDark}])},null,2),oe(_("input",{ref_key:"uploader",ref:i,type:"file",accept:".json,.geojson,.txt",onChange:R},null,544),[[ne,!1]]),r(Oe,{modelValue:v(I),"onUpdate:modelValue":p[2]||(p[2]=X=>ce(I)?I.value=X:null),title:"设置缩进","before-close":de},{footer:s(()=>[_("span",An,[r(S,{onClick:de},{default:s(()=>[V("取消")]),_:1}),r(S,{type:"primary",onClick:ge},{default:s(()=>[V(" 确定 ")]),_:1})])]),default:s(()=>[r(ee,null,{default:s(()=>[V("配置代码模式下用于缩进的空格数。 缩进同时应用于两个面板。")]),_:1}),r(E,{modelValue:v(m),"onUpdate:modelValue":p[1]||(p[1]=X=>ce(m)?m.value=X:null),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["modelValue"]),r(Oe,{modelValue:v(w),"onUpdate:modelValue":p[3]||(p[3]=X=>ce(w)?w.value=X:null),title:"文档属性",class:"documentProperties"},{default:s(()=>[r(ee,null,{default:s(()=>[Vn,oe(r(ae,{content:v(u).name},null,8,["content"]),[[ne,v(u).name]])]),_:1}),r(ee,null,{default:s(()=>[zn,oe(r(ae,{content:v(u).storage},null,8,["content"]),[[ne,v(u).storage]])]),_:1}),r(ee,null,{default:s(()=>[Gn,oe(r(ae,{content:v(u).updated},null,8,["content"]),[[ne,v(u).updated]])]),_:1}),r(ee,null,{default:s(()=>[Un,oe(r(ae,{content:v(u).content},null,8,["content"]),[[ne,v(u).content]])]),_:1}),r(ee,null,{default:s(()=>[Jn,oe(r(ae,{content:v(u).size},null,8,["content"]),[[ne,v(u).size]])]),_:1})]),_:1},8,["modelValue"])],512)}}}),st=wo(Yn,[["__scopeId","data-v-5eb3d97a"]]);export{st as V};
