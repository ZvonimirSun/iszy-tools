import{_ as W,j as J,r as z,R as h,p as le,y as R,T as Ke,m as f,ab as be,h as me,v as j,k as P,bq as xe,am as re,a7 as we,aP as eo,V as O,o as M,l as Z,w as s,K as i,br as oo,bs as no,bt as Ae,aQ as G,al as to,aR as lo,N as Ie,bm as so,aM as Ve,bu as ao,u as ye,aS as ro,bv as io,b3 as uo,F as X,b1 as co,aB as fe,n as ie,H as te,a8 as Ge,G as g,s as po,Z as _e,X as fo,bw as mo,q as vo,t as go,bj as ze,bl as Se,bx as Fe,a5 as _o,L as V,I as Re,W as ce,ah as oe,an as ne,$ as bo,a0 as wo}from"./index-DuM7tXsg.js";import{c as Ue,E as Io}from"./el-dialog-CdodWjLr.js";import{E as yo}from"./el-space--0mJjHi_.js";import{c as U,u as Co,a as Pe,E as Eo,O as ho,w as Be}from"./el-popper-DCDR-9o9.js";import{H as To,w as pe}from"./jse-theme-dark-CY5boX9d.js";import{c as De}from"./createFile-2wkzBEzf.js";import{f as $o}from"./formatBytes-aAslYXQD.js";import{c as ko}from"./castArray-zSdiWkRP.js";import{P as No,a as Oo}from"./Router-Djb_z0ZQ.js";const So=J({inheritAttrs:!1});function Fo(e,a,_,t,c,b){return z(e.$slots,"default")}var Ro=W(So,[["render",Fo],["__file","collection.vue"]]);const Po=J({name:"ElCollectionItem",inheritAttrs:!1});function Bo(e,a,_,t,c,b){return z(e.$slots,"default")}var Do=W(Po,[["render",Bo],["__file","collection-item.vue"]]);const je="data-el-collection-item",Je=e=>{const a=`El${e}Collection`,_=`${a}Item`,t=Symbol(a),c=Symbol(_),b={...Ro,name:a,setup(){const d=h(null),I=new Map;le(t,{itemMap:I,getItems:()=>{const l=f(d);if(!l)return[];const m=Array.from(l.querySelectorAll(`[${je}]`));return[...I.values()].sort((n,v)=>m.indexOf(n.ref)-m.indexOf(v.ref))},collectionRef:d})}},w={...Do,name:_,setup(d,{attrs:I}){const E=h(null),l=R(t,void 0);le(c,{collectionItemRef:E}),Ke(()=>{const m=f(E);m&&l.itemMap.set(m,{ref:m,...I})}),be(()=>{const m=f(E);l.itemMap.delete(m)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:c,ElCollection:b,ElCollectionItem:w}},Lo=me({style:{type:j([String,Array,Object])},currentTabId:{type:j(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:j(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Mo,ElCollectionItem:Ko,COLLECTION_INJECTION_KEY:Ce,COLLECTION_ITEM_INJECTION_KEY:Ao}=Je("RovingFocusGroup"),Ee=Symbol("elRovingFocusGroup"),Ye=Symbol("elRovingFocusGroupItem"),Vo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Go=(e,a)=>e,zo=(e,a,_)=>{const t=Go(e.key);return Vo[t]},Uo=(e,a)=>e.map((_,t)=>e[(t+a)%e.length]),he=e=>{const{activeElement:a}=document;for(const _ of e)if(_===a||(_.focus(),a!==document.activeElement))return},Le="currentTabIdChange",Me="rovingFocusGroup.entryFocus",jo={bubbles:!1,cancelable:!0},Jo=J({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Lo,emits:[Le,"entryFocus"],setup(e,{emit:a}){var _;const t=h((_=e.currentTabId||e.defaultCurrentTabId)!=null?_:null),c=h(!1),b=h(!1),w=h(null),{getItems:d}=R(Ce,void 0),I=P(()=>[{outline:"none"},e.style]),E=p=>{a(Le,p)},l=()=>{c.value=!0},m=U(p=>{var C;(C=e.onMousedown)==null||C.call(e,p)},()=>{b.value=!0}),y=U(p=>{var C;(C=e.onFocus)==null||C.call(e,p)},p=>{const C=!f(b),{target:$,currentTarget:k}=p;if($===k&&C&&!f(c)){const B=new Event(Me,jo);if(k==null||k.dispatchEvent(B),!B.defaultPrevented){const N=d().filter(L=>L.focusable),S=N.find(L=>L.active),D=N.find(L=>L.id===f(t)),Y=[S,D,...N].filter(Boolean).map(L=>L.ref);he(Y)}}b.value=!1}),n=U(p=>{var C;(C=e.onBlur)==null||C.call(e,p)},()=>{c.value=!1}),v=(...p)=>{a("entryFocus",...p)};le(Ee,{currentTabbedId:xe(t),loop:re(e,"loop"),tabIndex:P(()=>f(c)?-1:0),rovingFocusGroupRef:w,rovingFocusGroupRootStyle:I,orientation:re(e,"orientation"),dir:re(e,"dir"),onItemFocus:E,onItemShiftTab:l,onBlur:n,onFocus:y,onMousedown:m}),we(()=>e.currentTabId,p=>{t.value=p??null}),eo(w,Me,v)}});function Yo(e,a,_,t,c,b){return z(e.$slots,"default")}var Ho=W(Jo,[["render",Yo],["__file","roving-focus-group-impl.vue"]]);const Wo=J({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Mo,ElRovingFocusGroupImpl:Ho}});function qo(e,a,_,t,c,b){const w=O("el-roving-focus-group-impl"),d=O("el-focus-group-collection");return M(),Z(d,null,{default:s(()=>[i(w,oo(no(e.$attrs)),{default:s(()=>[z(e.$slots,"default")]),_:3},16)]),_:3})}var Qo=W(Wo,[["render",qo],["__file","roving-focus-group.vue"]]);const Xo=J({components:{ElRovingFocusCollectionItem:Ko},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:a}){const{currentTabbedId:_,loop:t,onItemFocus:c,onItemShiftTab:b}=R(Ee,void 0),{getItems:w}=R(Ce,void 0),d=Ae(),I=h(null),E=U(n=>{a("mousedown",n)},n=>{e.focusable?c(f(d)):n.preventDefault()}),l=U(n=>{a("focus",n)},()=>{c(f(d))}),m=U(n=>{a("keydown",n)},n=>{const{key:v,shiftKey:p,target:C,currentTarget:$}=n;if(v===G.tab&&p){b();return}if(C!==$)return;const k=zo(n);if(k){n.preventDefault();let N=w().filter(S=>S.focusable).map(S=>S.ref);switch(k){case"last":{N.reverse();break}case"prev":case"next":{k==="prev"&&N.reverse();const S=N.indexOf($);N=t.value?Uo(N,S+1):N.slice(S+1);break}}to(()=>{he(N)})}}),y=P(()=>_.value===f(d));return le(Ye,{rovingFocusGroupItemRef:I,tabIndex:P(()=>f(y)?0:-1),handleMousedown:E,handleFocus:l,handleKeydown:m}),{id:d,handleKeydown:m,handleFocus:l,handleMousedown:E}}});function Zo(e,a,_,t,c,b){const w=O("el-roving-focus-collection-item");return M(),Z(w,{id:e.id,focusable:e.focusable,active:e.active},{default:s(()=>[z(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var xo=W(Xo,[["render",Zo],["__file","roving-focus-item.vue"]]);const en=me({trigger:Co.trigger,effect:{...Pe.effect,default:"light"},type:{type:j(String)},placement:{type:j(String),default:"bottom"},popperOptions:{type:j(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:j([Number,String]),default:0},maxHeight:{type:j([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:j(Object)},teleported:Pe.teleported}),He=me({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:lo}}),on=me({onKeydown:{type:j(Function)}}),nn=[G.down,G.pageDown,G.home],We=[G.up,G.pageUp,G.end],tn=[...nn,...We],{ElCollection:ln,ElCollectionItem:sn,COLLECTION_INJECTION_KEY:an,COLLECTION_ITEM_INJECTION_KEY:rn}=Je("Dropdown"),ve=Symbol("elDropdown"),{ButtonGroup:un}=Ie,dn=J({name:"ElDropdown",components:{ElButton:Ie,ElButtonGroup:un,ElScrollbar:so,ElDropdownCollection:ln,ElTooltip:Eo,ElRovingFocusGroup:Qo,ElOnlyChild:ho,ElIcon:Ve,ArrowDown:ao},props:en,emits:["visible-change","click","command"],setup(e,{emit:a}){const _=Ge(),t=ye("dropdown"),{t:c}=ro(),b=h(),w=h(),d=h(null),I=h(null),E=h(null),l=h(null),m=h(!1),y=[G.enter,G.space,G.down],n=P(()=>({maxHeight:io(e.maxHeight)})),v=P(()=>[t.m(S.value)]),p=P(()=>ko(e.trigger)),C=Ae().value,$=P(()=>e.id||C);we([b,p],([u,A],[H])=>{var r,o,T;(r=H==null?void 0:H.$el)!=null&&r.removeEventListener&&H.$el.removeEventListener("pointerenter",K),(o=u==null?void 0:u.$el)!=null&&o.removeEventListener&&u.$el.removeEventListener("pointerenter",K),(T=u==null?void 0:u.$el)!=null&&T.addEventListener&&A.includes("hover")&&u.$el.addEventListener("pointerenter",K)},{immediate:!0}),be(()=>{var u,A;(A=(u=b.value)==null?void 0:u.$el)!=null&&A.removeEventListener&&b.value.$el.removeEventListener("pointerenter",K)});function k(){B()}function B(){var u;(u=d.value)==null||u.onClose()}function N(){var u;(u=d.value)==null||u.onOpen()}const S=uo();function D(...u){a("command",...u)}function K(){var u,A;(A=(u=b.value)==null?void 0:u.$el)==null||A.focus()}function Y(){}function L(){const u=f(I);p.value.includes("hover")&&(u==null||u.focus()),l.value=null}function ue(u){l.value=u}function x(u){m.value||(u.preventDefault(),u.stopImmediatePropagation())}function q(){a("visible-change",!0)}function ge(u){(u==null?void 0:u.type)==="keydown"&&I.value.focus()}function de(){a("visible-change",!1)}return le(ve,{contentRef:I,role:P(()=>e.role),triggerId:$,isUsingKeyboard:m,onItemEnter:Y,onItemLeave:L}),le("elDropdown",{instance:_,dropdownSize:S,handleClick:k,commandHandler:D,trigger:re(e,"trigger"),hideOnClick:re(e,"hideOnClick")}),{t:c,ns:t,scrollbar:E,wrapStyle:n,dropdownTriggerKls:v,dropdownSize:S,triggerId:$,triggerKeys:y,currentTabId:l,handleCurrentTabIdChange:ue,handlerMainButtonClick:u=>{a("click",u)},handleEntryFocus:x,handleClose:B,handleOpen:N,handleBeforeShowTooltip:q,handleShowTooltip:ge,handleBeforeHideTooltip:de,onFocusAfterTrapped:u=>{var A,H;u.preventDefault(),(H=(A=I.value)==null?void 0:A.focus)==null||H.call(A,{preventScroll:!0})},popperRef:d,contentRef:I,triggeringElementRef:b,referenceElementRef:w}}});function cn(e,a,_,t,c,b){var w;const d=O("el-dropdown-collection"),I=O("el-roving-focus-group"),E=O("el-scrollbar"),l=O("el-only-child"),m=O("el-tooltip"),y=O("el-button"),n=O("arrow-down"),v=O("el-icon"),p=O("el-button-group");return M(),X("div",{class:ie([e.ns.b(),e.ns.is("disabled",e.disabled)])},[i(m,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(w=e.referenceElementRef)==null?void 0:w.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},co({content:s(()=>[i(E,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:s(()=>[i(I,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:s(()=>[i(d,null,{default:s(()=>[z(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:s(()=>[i(l,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:s(()=>[z(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(M(),Z(p,{key:0},{default:s(()=>[i(y,fe({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:s(()=>[z(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),i(y,fe({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:s(()=>[i(v,{class:ie(e.ns.e("icon"))},{default:s(()=>[i(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):te("v-if",!0)],2)}var pn=W(dn,[["render",cn],["__file","dropdown.vue"]]);const fn=J({name:"DropdownItemImpl",components:{ElIcon:Ve},props:He,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:a}){const _=ye("dropdown"),{role:t}=R(ve,void 0),{collectionItemRef:c}=R(rn,void 0),{collectionItemRef:b}=R(Ao,void 0),{rovingFocusGroupItemRef:w,tabIndex:d,handleFocus:I,handleKeydown:E,handleMousedown:l}=R(Ye,void 0),m=Ue(c,b,w),y=P(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=U(v=>{const{code:p}=v;if(p===G.enter||p===G.space)return v.preventDefault(),v.stopImmediatePropagation(),a("clickimpl",v),!0},E);return{ns:_,itemRef:m,dataset:{[je]:""},role:y,tabIndex:d,handleFocus:I,handleKeydown:n,handleMousedown:l}}});function mn(e,a,_,t,c,b){const w=O("el-icon");return M(),X(fo,null,[e.divided?(M(),X("li",{key:0,role:"separator",class:ie(e.ns.bem("menu","item","divided"))},null,2)):te("v-if",!0),g("li",fe({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:d=>e.$emit("clickimpl",d),onFocus:e.handleFocus,onKeydown:_e(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:d=>e.$emit("pointermove",d),onPointerleave:d=>e.$emit("pointerleave",d)}),[e.icon?(M(),Z(w,{key:0},{default:s(()=>[(M(),Z(po(e.icon)))]),_:1})):te("v-if",!0),z(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var vn=W(fn,[["render",mn],["__file","dropdown-item-impl.vue"]]);const qe=()=>{const e=R("elDropdown",{}),a=P(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:a}},gn=J({name:"ElDropdownItem",components:{ElDropdownCollectionItem:sn,ElRovingFocusItem:xo,ElDropdownItemImpl:vn},inheritAttrs:!1,props:He,emits:["pointermove","pointerleave","click"],setup(e,{emit:a,attrs:_}){const{elDropdown:t}=qe(),c=Ge(),b=h(null),w=P(()=>{var n,v;return(v=(n=f(b))==null?void 0:n.textContent)!=null?v:""}),{onItemEnter:d,onItemLeave:I}=R(ve,void 0),E=U(n=>(a("pointermove",n),n.defaultPrevented),Be(n=>{if(e.disabled){I(n);return}const v=n.currentTarget;v===document.activeElement||v.contains(document.activeElement)||(d(n),n.defaultPrevented||v==null||v.focus())})),l=U(n=>(a("pointerleave",n),n.defaultPrevented),Be(I)),m=U(n=>{if(!e.disabled)return a("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var v,p,C;if(e.disabled){n.stopImmediatePropagation();return}(v=t==null?void 0:t.hideOnClick)!=null&&v.value&&((p=t.handleClick)==null||p.call(t)),(C=t.commandHandler)==null||C.call(t,e.command,c,n)}),y=P(()=>({...e,..._}));return{handleClick:m,handlePointerMove:E,handlePointerLeave:l,textContent:w,propsAndAttrs:y}}});function _n(e,a,_,t,c,b){var w;const d=O("el-dropdown-item-impl"),I=O("el-roving-focus-item"),E=O("el-dropdown-collection-item");return M(),Z(E,{disabled:e.disabled,"text-value":(w=e.textValue)!=null?w:e.textContent},{default:s(()=>[i(I,{focusable:!e.disabled},{default:s(()=>[i(d,fe(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:s(()=>[z(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Qe=W(gn,[["render",_n],["__file","dropdown-item.vue"]]);const bn=J({name:"ElDropdownMenu",props:on,setup(e){const a=ye("dropdown"),{_elDropdownSize:_}=qe(),t=_.value,{focusTrapRef:c,onKeydown:b}=R(mo,void 0),{contentRef:w,role:d,triggerId:I}=R(ve,void 0),{collectionRef:E,getItems:l}=R(an,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:y,tabIndex:n,onBlur:v,onFocus:p,onMousedown:C}=R(Ee,void 0),{collectionRef:$}=R(Ce,void 0),k=P(()=>[a.b("menu"),a.bm("menu",t==null?void 0:t.value)]),B=Ue(w,E,c,m,$),N=U(D=>{var K;(K=e.onKeydown)==null||K.call(e,D)},D=>{const{currentTarget:K,code:Y,target:L}=D;if(K.contains(L),G.tab===Y&&D.stopImmediatePropagation(),D.preventDefault(),L!==f(w)||!tn.includes(Y))return;const x=l().filter(q=>!q.disabled).map(q=>q.ref);We.includes(Y)&&x.reverse(),he(x)});return{size:t,rovingFocusGroupRootStyle:y,tabIndex:n,dropdownKls:k,role:d,triggerId:I,dropdownListWrapperRef:B,handleKeydown:D=>{N(D),b(D)},onBlur:v,onFocus:p,onMousedown:C}}});function wn(e,a,_,t,c,b){return M(),X("ul",{ref:e.dropdownListWrapperRef,class:ie(e.dropdownKls),style:vo(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:_e(e.handleKeydown,["self"]),onMousedown:_e(e.onMousedown,["self"])},[z(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var Xe=W(bn,[["render",wn],["__file","dropdown-menu.vue"]]);const In=go(pn,{DropdownItem:Qe,DropdownMenu:Xe}),yn=ze(Qe),Cn=ze(Xe),En={key:0,class:"json-editor-menu"},hn={key:0,class:"editorTitle"},Tn={class:"buttonWithIcon"},$n={class:"dialog-footer"},kn=J({__name:"VanillaJsonEditor",props:{content:{default:void 0},config:{default:()=>({mode:"text"})},showMenuBar:{type:Boolean,default:!1},name:{default:""}},emits:["change","create","changeName","open","openRecent","delete"],setup(e,{expose:a,emit:_}){const t=e,c=_,b=Se(),w=["content","mode","mainMenuBar","navigationBar","statusBar","readOnly","indentation","tabSize","escapeControlCharacters","escapeUnicodeCharacters","validator","onError","onChange","onChangeMode","onClassName","onRenderValue","onRenderMenu","queryLanguages","queryLanguageId","onChangeQueryLanguage","onFocus","onBlur"],d=h(),I=h(),E=h();let l;const m=h(""),y=h(2),n=h(!1),v=h(!1),p=h(!1),C=h(""),$=P(()=>{if(v.value){const r=l.get();let o,T;return pe(r)?T=r.json:T=r.text,typeof T=="string"?o="字符串类型":Array.isArray(T)?o=`数组类型，包含 ${T.length} 个对象`:T&&typeof T=="object"?o=`对象类型，包含 ${Object.keys(T).length} 个属性`:o="其他类型",{name:m.value,storage:m.value?"浏览器本地":"",updated:"",content:o,size:$o(typeof T=="string"?T.length:JSON.stringify(T,null,y.value).length)}}else return{}});let k=!1;a({container:I,update:K,set:Y,refresh:ue,get:L});let B={};Ke(()=>{d.value&&(B=Fe(t.config),l=new To({target:d.value,props:{content:{json:{}},onChange:r=>{k||(pe(r)?c("change",r.json):c("change",r.text))},indentation:y.value,...H(B,w)}}),t.config.indentation&&(y.value=t.config.indentation))}),be(()=>{l==null||l.destroy()}),we(()=>Se().isDark,()=>{l==null||l.refresh()}),_o(()=>{let r=!1;for(const o in t.config)if(t.config[o]!==B[o]){r=!0;break}r&&(B=Fe(t.config),l==null||l.updateProps(H(B,w))),t.content!=null&&K(t.content),m.value=t.name,l==null||l.refresh()});function N(){l.set({json:{}}),c("create")}function S(r){var o;switch(r){case"file":(o=E.value)==null||o.click();break;case"recent":c("openRecent");break}}function D(r){const o=r.target;if(o.files&&o.files.length){const T=o.files[0],F=new FileReader;F.onload=()=>{F.result&&c("open",{name:T.name,content:F.result})},F.readAsText(T)}o.value=""}function K(r){k=!0;let o;r!=null&&(typeof r=="string"?o=r:o=JSON.stringify(r,null,y.value),l.update({text:o})),setTimeout(()=>{k=!1},0)}function Y(r){k=!0,r!=null&&(typeof r=="string"?l.set({text:r}):l.set({json:r})),setTimeout(()=>{k=!1},0)}function L(){const r=l.get();return pe(r)?r.json:r.text}function ue(){l==null||l.refresh()}function x(){const r=l.get(),o=m.value?`${m.value}.json`:"未命名.json";pe(r)?De(JSON.stringify(r.json),o):De(r.text,o)}let q=y.value;function ge(r){switch(r){case"indentation":q=y.value,n.value=!0;break;case"properties":v.value=!0;break;case"delete":c("delete");break}}function de(){y.value=q,n.value=!1}function Te(){l.updateProps({indentation:y.value}),n.value=!1}function $e(){C.value=m.value,p.value=!0}function u(){p.value=!1}function A(){C.value&&c("changeName",C.value),p.value=!1}function H(r,o){const T={};for(const F of o)r[F]!==void 0&&(T[F]=r[F]);return T}return(r,o)=>{const T=bo,F=Ie,se=yn,ke=Cn,Ne=In,Ze=yo,ee=No,Oe=Io,ae=Oo;return M(),X("div",{ref_key:"container",ref:I,class:"json-editor-wrapper"},[r.showMenuBar?(M(),X("div",En,[f(m)&&!f(p)?(M(),X("div",hn,[V(Re(f(m))+" ",1),g("i",{class:"i-icon-park-outline-edit",onClick:$e})])):te("",!0),f(p)?(M(),Z(T,{key:1,modelValue:f(C),"onUpdate:modelValue":o[0]||(o[0]=Q=>ce(C)?C.value=Q:null),class:"name-editor",placeholder:"请输入名称"},{suffix:s(()=>[g("i",{class:"i-icon-park-outline-close",onClick:u}),g("i",{class:"i-icon-park-outline-check",onClick:A})]),_:1},8,["modelValue"])):te("",!0),i(Ze,{class:"editorControlButtons"},{default:s(()=>[i(F,{size:"small",type:"primary",onClick:N},{default:s(()=>o[4]||(o[4]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-file-addition-one"}),V(" 新建")],-1)])),_:1}),i(Ne,{onCommand:S},{dropdown:s(()=>[i(ke,null,{default:s(()=>[i(se,{command:"recent"},{default:s(()=>o[5]||(o[5]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-history"}),V(" 打开最近记录")],-1)])),_:1}),i(se,{command:"file"},{default:s(()=>o[6]||(o[6]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-computer"}),V(" 打开本地文件")],-1)])),_:1})]),_:1})]),default:s(()=>[i(F,{size:"small",type:"primary"},{default:s(()=>o[7]||(o[7]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-folder-open"}),V(" 打开"),g("span",{class:"i-icon-park-outline-down"})],-1)])),_:1})]),_:1}),i(F,{size:"small",type:"primary",onClick:x},{default:s(()=>o[8]||(o[8]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-save"}),V(" 保存")],-1)])),_:1}),i(Ne,{onCommand:ge},{dropdown:s(()=>[i(ke,null,{default:s(()=>[i(se,{command:"indentation"},{default:s(()=>[g("span",Tn,[o[9]||(o[9]=g("span",{class:"i-icon-park-outline-indent-right"},null,-1)),V(" 缩进("+Re(f(y))+")",1)])]),_:1}),i(se,{command:"properties"},{default:s(()=>o[10]||(o[10]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-info"}),V(" 文档属性")],-1)])),_:1}),i(se,{command:"delete"},{default:s(()=>o[11]||(o[11]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-delete"}),V(" 删除文档")],-1)])),_:1})]),_:1})]),default:s(()=>[i(F,{size:"small",type:"primary"},{default:s(()=>o[12]||(o[12]=[g("span",{class:"buttonWithIcon"},[g("span",{class:"i-icon-park-outline-setting-two"}),V(" 选项"),g("span",{class:"i-icon-park-outline-down"})],-1)])),_:1})]),_:1})]),_:1})])):te("",!0),g("div",{ref_key:"jsonEditorDiv",ref:d,class:ie(["json-editor",{"jse-theme-dark":f(b).isDark}])},null,2),oe(g("input",{ref_key:"uploader",ref:E,type:"file",accept:".json,.geojson,.txt",onChange:D},null,544),[[ne,!1]]),i(Oe,{modelValue:f(n),"onUpdate:modelValue":o[2]||(o[2]=Q=>ce(n)?n.value=Q:null),title:"设置缩进","before-close":de},{footer:s(()=>[g("span",$n,[i(F,{onClick:de},{default:s(()=>o[14]||(o[14]=[V("取消")])),_:1}),i(F,{type:"primary",onClick:Te},{default:s(()=>o[15]||(o[15]=[V(" 确定 ")])),_:1})])]),default:s(()=>[i(ee,null,{default:s(()=>o[13]||(o[13]=[V("配置代码模式下用于缩进的空格数。 缩进同时应用于两个面板。")])),_:1}),i(T,{modelValue:f(y),"onUpdate:modelValue":o[1]||(o[1]=Q=>ce(y)?y.value=Q:null),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["modelValue"]),i(Oe,{modelValue:f(v),"onUpdate:modelValue":o[3]||(o[3]=Q=>ce(v)?v.value=Q:null),title:"文档属性",class:"documentProperties"},{default:s(()=>[i(ee,null,{default:s(()=>[o[16]||(o[16]=g("strong",null,"名称：",-1)),oe(i(ae,{content:f($).name},null,8,["content"]),[[ne,f($).name]])]),_:1}),i(ee,null,{default:s(()=>[o[17]||(o[17]=g("strong",null,"存储：",-1)),oe(i(ae,{content:f($).storage},null,8,["content"]),[[ne,f($).storage]])]),_:1}),i(ee,null,{default:s(()=>[o[18]||(o[18]=g("strong",null,"更新：",-1)),oe(i(ae,{content:f($).updated},null,8,["content"]),[[ne,f($).updated]])]),_:1}),i(ee,null,{default:s(()=>[o[19]||(o[19]=g("strong",null,"内容：",-1)),oe(i(ae,{content:f($).content},null,8,["content"]),[[ne,f($).content]])]),_:1}),i(ee,null,{default:s(()=>[o[20]||(o[20]=g("strong",null,"大小：",-1)),oe(i(ae,{content:f($).size},null,8,["content"]),[[ne,f($).size]])]),_:1})]),_:1},8,["modelValue"])],512)}}}),Mn=wo(kn,[["__scopeId","data-v-45ed3f12"]]);export{Mn as V};
