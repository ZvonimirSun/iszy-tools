import{_ as q,j as Y,r as U,R as E,p as ae,y as R,T as Ae,m as f,ad as he,h as ve,v as J,k as P,bq as eo,ao as ie,a9 as we,aO as oo,V as O,o as M,l as x,w as l,K as r,br as no,bs as to,bt as Ve,aP as z,an as lo,aQ as ao,N as Ie,bm as so,aJ as Ge,bu as ro,u as ye,aR as io,bv as co,b2 as uo,F as Z,b0 as po,aD as ce,n as me,H as le,aa as ze,G as _,s as fo,Z as be,X as mo,bw as vo,q as _o,t as go,bj as Ue,bl as Fe,bx as Re,a7 as bo,L as G,I as Pe,W as pe,aj as ne,ap as te,$ as ho,a0 as wo,a1 as Io,a2 as yo}from"./index-CQU3zzuo.js";import{c as je,E as Co}from"./el-dialog-T1RIrJCF.js";import{E as Eo}from"./el-space-BEOoLCa0.js";import{c as j,u as To,a as Be,E as $o,O as ko,w as De}from"./el-popper-qFUMb2Bk.js";import{H as So,w as fe}from"./jse-theme-dark-CSxYs82S.js";import{c as Le}from"./createFile-B6uAoBOc.js";import{f as Oo}from"./formatBytes-aAslYXQD.js";import{c as No}from"./castArray-k8IsmlT3.js";import{P as Fo,a as Ro}from"./Router-DyhZE3F6.js";const Po=Y({inheritAttrs:!1});function Bo(e,a,g,n,d,b){return U(e.$slots,"default")}var Do=q(Po,[["render",Bo],["__file","collection.vue"]]);const Lo=Y({name:"ElCollectionItem",inheritAttrs:!1});function Mo(e,a,g,n,d,b){return U(e.$slots,"default")}var Ko=q(Lo,[["render",Mo],["__file","collection-item.vue"]]);const Je="data-el-collection-item",Ye=e=>{const a=`El${e}Collection`,g=`${a}Item`,n=Symbol(a),d=Symbol(g),b={...Do,name:a,setup(){const u=E(null),w=new Map;ae(n,{itemMap:w,getItems:()=>{const t=f(u);if(!t)return[];const m=Array.from(t.querySelectorAll(`[${Je}]`));return[...w.values()].sort((o,v)=>m.indexOf(o.ref)-m.indexOf(v.ref))},collectionRef:u})}},h={...Ko,name:g,setup(u,{attrs:w}){const C=E(null),t=R(n,void 0);ae(d,{collectionItemRef:C}),Ae(()=>{const m=f(C);m&&t.itemMap.set(m,{ref:m,...w})}),he(()=>{const m=f(C);t.itemMap.delete(m)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:b,ElCollectionItem:h}},Ao=ve({style:{type:J([String,Array,Object])},currentTabId:{type:J(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:J(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Vo,ElCollectionItem:Go,COLLECTION_INJECTION_KEY:Ce,COLLECTION_ITEM_INJECTION_KEY:zo}=Ye("RovingFocusGroup"),Ee=Symbol("elRovingFocusGroup"),He=Symbol("elRovingFocusGroupItem"),Uo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},jo=(e,a)=>e,Jo=(e,a,g)=>{const n=jo(e.key);return Uo[n]},Yo=(e,a)=>e.map((g,n)=>e[(n+a)%e.length]),Te=e=>{const{activeElement:a}=document;for(const g of e)if(g===a||(g.focus(),a!==document.activeElement))return},Me="currentTabIdChange",Ke="rovingFocusGroup.entryFocus",Ho={bubbles:!1,cancelable:!0},Wo=Y({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Ao,emits:[Me,"entryFocus"],setup(e,{emit:a}){var g;const n=E((g=e.currentTabId||e.defaultCurrentTabId)!=null?g:null),d=E(!1),b=E(!1),h=E(null),{getItems:u}=R(Ce,void 0),w=P(()=>[{outline:"none"},e.style]),C=p=>{a(Me,p)},t=()=>{d.value=!0},m=j(p=>{var y;(y=e.onMousedown)==null||y.call(e,p)},()=>{b.value=!0}),I=j(p=>{var y;(y=e.onFocus)==null||y.call(e,p)},p=>{const y=!f(b),{target:$,currentTarget:k}=p;if($===k&&y&&!f(d)){const B=new Event(Ke,Ho);if(k==null||k.dispatchEvent(B),!B.defaultPrevented){const S=u().filter(L=>L.focusable),N=S.find(L=>L.active),D=S.find(L=>L.id===f(n)),H=[N,D,...S].filter(Boolean).map(L=>L.ref);Te(H)}}b.value=!1}),o=j(p=>{var y;(y=e.onBlur)==null||y.call(e,p)},()=>{d.value=!1}),v=(...p)=>{a("entryFocus",...p)};ae(Ee,{currentTabbedId:eo(n),loop:ie(e,"loop"),tabIndex:P(()=>f(d)?-1:0),rovingFocusGroupRef:h,rovingFocusGroupRootStyle:w,orientation:ie(e,"orientation"),dir:ie(e,"dir"),onItemFocus:C,onItemShiftTab:t,onBlur:o,onFocus:I,onMousedown:m}),we(()=>e.currentTabId,p=>{n.value=p??null}),oo(h,Ke,v)}});function qo(e,a,g,n,d,b){return U(e.$slots,"default")}var Qo=q(Wo,[["render",qo],["__file","roving-focus-group-impl.vue"]]);const Xo=Y({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Vo,ElRovingFocusGroupImpl:Qo}});function Zo(e,a,g,n,d,b){const h=O("el-roving-focus-group-impl"),u=O("el-focus-group-collection");return M(),x(u,null,{default:l(()=>[r(h,no(to(e.$attrs)),{default:l(()=>[U(e.$slots,"default")]),_:3},16)]),_:3})}var xo=q(Xo,[["render",Zo],["__file","roving-focus-group.vue"]]);const en=Y({components:{ElRovingFocusCollectionItem:Go},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:a}){const{currentTabbedId:g,loop:n,onItemFocus:d,onItemShiftTab:b}=R(Ee,void 0),{getItems:h}=R(Ce,void 0),u=Ve(),w=E(null),C=j(o=>{a("mousedown",o)},o=>{e.focusable?d(f(u)):o.preventDefault()}),t=j(o=>{a("focus",o)},()=>{d(f(u))}),m=j(o=>{a("keydown",o)},o=>{const{key:v,shiftKey:p,target:y,currentTarget:$}=o;if(v===z.tab&&p){b();return}if(y!==$)return;const k=Jo(o);if(k){o.preventDefault();let S=h().filter(N=>N.focusable).map(N=>N.ref);switch(k){case"last":{S.reverse();break}case"prev":case"next":{k==="prev"&&S.reverse();const N=S.indexOf($);S=n.value?Yo(S,N+1):S.slice(N+1);break}}lo(()=>{Te(S)})}}),I=P(()=>g.value===f(u));return ae(He,{rovingFocusGroupItemRef:w,tabIndex:P(()=>f(I)?0:-1),handleMousedown:C,handleFocus:t,handleKeydown:m}),{id:u,handleKeydown:m,handleFocus:t,handleMousedown:C}}});function on(e,a,g,n,d,b){const h=O("el-roving-focus-collection-item");return M(),x(h,{id:e.id,focusable:e.focusable,active:e.active},{default:l(()=>[U(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var nn=q(en,[["render",on],["__file","roving-focus-item.vue"]]);const tn=ve({trigger:To.trigger,effect:{...Be.effect,default:"light"},type:{type:J(String)},placement:{type:J(String),default:"bottom"},popperOptions:{type:J(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:J([Number,String]),default:0},maxHeight:{type:J([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:J(Object)},teleported:Be.teleported}),We=ve({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ao}}),ln=ve({onKeydown:{type:J(Function)}}),an=[z.down,z.pageDown,z.home],qe=[z.up,z.pageUp,z.end],sn=[...an,...qe],{ElCollection:rn,ElCollectionItem:cn,COLLECTION_INJECTION_KEY:un,COLLECTION_ITEM_INJECTION_KEY:dn}=Ye("Dropdown"),_e=Symbol("elDropdown"),{ButtonGroup:pn}=Ie,fn=Y({name:"ElDropdown",components:{ElButton:Ie,ElButtonGroup:pn,ElScrollbar:so,ElDropdownCollection:rn,ElTooltip:$o,ElRovingFocusGroup:xo,ElOnlyChild:ko,ElIcon:Ge,ArrowDown:ro},props:tn,emits:["visible-change","click","command"],setup(e,{emit:a}){const g=ze(),n=ye("dropdown"),{t:d}=io(),b=E(),h=E(),u=E(null),w=E(null),C=E(null),t=E(null),m=E(!1),I=[z.enter,z.space,z.down],o=P(()=>({maxHeight:co(e.maxHeight)})),v=P(()=>[n.m(N.value)]),p=P(()=>No(e.trigger)),y=Ve().value,$=P(()=>e.id||y);we([b,p],([i,V],[W])=>{var s,c,T;(s=W==null?void 0:W.$el)!=null&&s.removeEventListener&&W.$el.removeEventListener("pointerenter",A),(c=i==null?void 0:i.$el)!=null&&c.removeEventListener&&i.$el.removeEventListener("pointerenter",A),(T=i==null?void 0:i.$el)!=null&&T.addEventListener&&V.includes("hover")&&i.$el.addEventListener("pointerenter",A)},{immediate:!0}),he(()=>{var i,V;(V=(i=b.value)==null?void 0:i.$el)!=null&&V.removeEventListener&&b.value.$el.removeEventListener("pointerenter",A)});function k(){B()}function B(){var i;(i=u.value)==null||i.onClose()}function S(){var i;(i=u.value)==null||i.onOpen()}const N=uo();function D(...i){a("command",...i)}function A(){var i,V;(V=(i=b.value)==null?void 0:i.$el)==null||V.focus()}function H(){}function L(){const i=f(w);p.value.includes("hover")&&(i==null||i.focus()),t.value=null}function ue(i){t.value=i}function ee(i){m.value||(i.preventDefault(),i.stopImmediatePropagation())}function Q(){a("visible-change",!0)}function ge(i){(i==null?void 0:i.type)==="keydown"&&w.value.focus()}function de(){a("visible-change",!1)}return ae(_e,{contentRef:w,role:P(()=>e.role),triggerId:$,isUsingKeyboard:m,onItemEnter:H,onItemLeave:L}),ae("elDropdown",{instance:g,dropdownSize:N,handleClick:k,commandHandler:D,trigger:ie(e,"trigger"),hideOnClick:ie(e,"hideOnClick")}),{t:d,ns:n,scrollbar:C,wrapStyle:o,dropdownTriggerKls:v,dropdownSize:N,triggerId:$,triggerKeys:I,currentTabId:t,handleCurrentTabIdChange:ue,handlerMainButtonClick:i=>{a("click",i)},handleEntryFocus:ee,handleClose:B,handleOpen:S,handleBeforeShowTooltip:Q,handleShowTooltip:ge,handleBeforeHideTooltip:de,onFocusAfterTrapped:i=>{var V,W;i.preventDefault(),(W=(V=w.value)==null?void 0:V.focus)==null||W.call(V,{preventScroll:!0})},popperRef:u,contentRef:w,triggeringElementRef:b,referenceElementRef:h}}});function mn(e,a,g,n,d,b){var h;const u=O("el-dropdown-collection"),w=O("el-roving-focus-group"),C=O("el-scrollbar"),t=O("el-only-child"),m=O("el-tooltip"),I=O("el-button"),o=O("arrow-down"),v=O("el-icon"),p=O("el-button-group");return M(),Z("div",{class:me([e.ns.b(),e.ns.is("disabled",e.disabled)])},[r(m,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(h=e.referenceElementRef)==null?void 0:h.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},po({content:l(()=>[r(C,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:l(()=>[r(w,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:l(()=>[r(u,null,{default:l(()=>[U(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:l(()=>[r(t,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:l(()=>[U(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(M(),x(p,{key:0},{default:l(()=>[r(I,ce({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:l(()=>[U(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),r(I,ce({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:l(()=>[r(v,{class:me(e.ns.e("icon"))},{default:l(()=>[r(o)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):le("v-if",!0)],2)}var vn=q(fn,[["render",mn],["__file","dropdown.vue"]]);const _n=Y({name:"DropdownItemImpl",components:{ElIcon:Ge},props:We,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:a}){const g=ye("dropdown"),{role:n}=R(_e,void 0),{collectionItemRef:d}=R(dn,void 0),{collectionItemRef:b}=R(zo,void 0),{rovingFocusGroupItemRef:h,tabIndex:u,handleFocus:w,handleKeydown:C,handleMousedown:t}=R(He,void 0),m=je(d,b,h),I=P(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),o=j(v=>{const{code:p}=v;if(p===z.enter||p===z.space)return v.preventDefault(),v.stopImmediatePropagation(),a("clickimpl",v),!0},C);return{ns:g,itemRef:m,dataset:{[Je]:""},role:I,tabIndex:u,handleFocus:w,handleKeydown:o,handleMousedown:t}}});function gn(e,a,g,n,d,b){const h=O("el-icon");return M(),Z(mo,null,[e.divided?(M(),Z("li",ce({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):le("v-if",!0),_("li",ce({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:u=>e.$emit("clickimpl",u),onFocus:e.handleFocus,onKeydown:be(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:u=>e.$emit("pointermove",u),onPointerleave:u=>e.$emit("pointerleave",u)}),[e.icon?(M(),x(h,{key:0},{default:l(()=>[(M(),x(fo(e.icon)))]),_:1})):le("v-if",!0),U(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var bn=q(_n,[["render",gn],["__file","dropdown-item-impl.vue"]]);const Qe=()=>{const e=R("elDropdown",{}),a=P(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:a}},hn=Y({name:"ElDropdownItem",components:{ElDropdownCollectionItem:cn,ElRovingFocusItem:nn,ElDropdownItemImpl:bn},inheritAttrs:!1,props:We,emits:["pointermove","pointerleave","click"],setup(e,{emit:a,attrs:g}){const{elDropdown:n}=Qe(),d=ze(),b=E(null),h=P(()=>{var o,v;return(v=(o=f(b))==null?void 0:o.textContent)!=null?v:""}),{onItemEnter:u,onItemLeave:w}=R(_e,void 0),C=j(o=>(a("pointermove",o),o.defaultPrevented),De(o=>{if(e.disabled){w(o);return}const v=o.currentTarget;v===document.activeElement||v.contains(document.activeElement)||(u(o),o.defaultPrevented||v==null||v.focus())})),t=j(o=>(a("pointerleave",o),o.defaultPrevented),De(w)),m=j(o=>{if(!e.disabled)return a("click",o),o.type!=="keydown"&&o.defaultPrevented},o=>{var v,p,y;if(e.disabled){o.stopImmediatePropagation();return}(v=n==null?void 0:n.hideOnClick)!=null&&v.value&&((p=n.handleClick)==null||p.call(n)),(y=n.commandHandler)==null||y.call(n,e.command,d,o)}),I=P(()=>({...e,...g}));return{handleClick:m,handlePointerMove:C,handlePointerLeave:t,textContent:h,propsAndAttrs:I}}});function wn(e,a,g,n,d,b){var h;const u=O("el-dropdown-item-impl"),w=O("el-roving-focus-item"),C=O("el-dropdown-collection-item");return M(),x(C,{disabled:e.disabled,"text-value":(h=e.textValue)!=null?h:e.textContent},{default:l(()=>[r(w,{focusable:!e.disabled},{default:l(()=>[r(u,ce(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:l(()=>[U(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Xe=q(hn,[["render",wn],["__file","dropdown-item.vue"]]);const In=Y({name:"ElDropdownMenu",props:ln,setup(e){const a=ye("dropdown"),{_elDropdownSize:g}=Qe(),n=g.value,{focusTrapRef:d,onKeydown:b}=R(vo,void 0),{contentRef:h,role:u,triggerId:w}=R(_e,void 0),{collectionRef:C,getItems:t}=R(un,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:I,tabIndex:o,onBlur:v,onFocus:p,onMousedown:y}=R(Ee,void 0),{collectionRef:$}=R(Ce,void 0),k=P(()=>[a.b("menu"),a.bm("menu",n==null?void 0:n.value)]),B=je(h,C,d,m,$),S=j(D=>{var A;(A=e.onKeydown)==null||A.call(e,D)},D=>{const{currentTarget:A,code:H,target:L}=D;if(A.contains(L),z.tab===H&&D.stopImmediatePropagation(),D.preventDefault(),L!==f(h)||!sn.includes(H))return;const ee=t().filter(Q=>!Q.disabled).map(Q=>Q.ref);qe.includes(H)&&ee.reverse(),Te(ee)});return{size:n,rovingFocusGroupRootStyle:I,tabIndex:o,dropdownKls:k,role:u,triggerId:w,dropdownListWrapperRef:B,handleKeydown:D=>{S(D),b(D)},onBlur:v,onFocus:p,onMousedown:y}}});function yn(e,a,g,n,d,b){return M(),Z("ul",{ref:e.dropdownListWrapperRef,class:me(e.dropdownKls),style:_o(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:be(e.handleKeydown,["self"]),onMousedown:be(e.onMousedown,["self"])},[U(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var Ze=q(In,[["render",yn],["__file","dropdown-menu.vue"]]);const Cn=go(vn,{DropdownItem:Xe,DropdownMenu:Ze}),En=Ue(Xe),Tn=Ue(Ze),K=e=>(wo("data-v-45ed3f12"),e=e(),Io(),e),$n={key:0,class:"json-editor-menu"},kn={key:0,class:"editorTitle"},Sn=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-file-addition-one"}),G(" 新建")],-1)),On=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-history"}),G(" 打开最近记录")],-1)),Nn=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-computer"}),G(" 打开本地文件")],-1)),Fn=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-folder-open"}),G(" 打开"),_("span",{class:"i-icon-park-outline-down"})],-1)),Rn=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-save"}),G(" 保存")],-1)),Pn={class:"buttonWithIcon"},Bn=K(()=>_("span",{class:"i-icon-park-outline-indent-right"},null,-1)),Dn=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-info"}),G(" 文档属性")],-1)),Ln=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-delete"}),G(" 删除文档")],-1)),Mn=K(()=>_("span",{class:"buttonWithIcon"},[_("span",{class:"i-icon-park-outline-setting-two"}),G(" 选项"),_("span",{class:"i-icon-park-outline-down"})],-1)),Kn={class:"dialog-footer"},An=K(()=>_("strong",null,"名称：",-1)),Vn=K(()=>_("strong",null,"存储：",-1)),Gn=K(()=>_("strong",null,"更新：",-1)),zn=K(()=>_("strong",null,"内容：",-1)),Un=K(()=>_("strong",null,"大小：",-1)),jn=Y({__name:"VanillaJsonEditor",props:{content:{default:void 0},config:{default:()=>({mode:"text"})},showMenuBar:{type:Boolean,default:!1},name:{default:""}},emits:["change","create","changeName","open","openRecent","delete"],setup(e,{expose:a,emit:g}){const n=e,d=g,b=Fe(),h=["content","mode","mainMenuBar","navigationBar","statusBar","readOnly","indentation","tabSize","escapeControlCharacters","escapeUnicodeCharacters","validator","onError","onChange","onChangeMode","onClassName","onRenderValue","onRenderMenu","queryLanguages","queryLanguageId","onChangeQueryLanguage","onFocus","onBlur"],u=E(),w=E(),C=E();let t;const m=E(""),I=E(2),o=E(!1),v=E(!1),p=E(!1),y=E(""),$=P(()=>{if(v.value){const s=t.get();let c,T;return fe(s)?T=s.json:T=s.text,typeof T=="string"?c="字符串类型":Array.isArray(T)?c=`数组类型，包含 ${T.length} 个对象`:T&&typeof T=="object"?c=`对象类型，包含 ${Object.keys(T).length} 个属性`:c="其他类型",{name:m.value,storage:m.value?"浏览器本地":"",updated:"",content:c,size:Oo(typeof T=="string"?T.length:JSON.stringify(T,null,I.value).length)}}else return{}});let k=!1;a({container:w,update:A,set:H,refresh:ue,get:L});let B={};Ae(()=>{u.value&&(B=Re(n.config),t=new So({target:u.value,props:{content:{json:{}},onChange:s=>{k||(fe(s)?d("change",s.json):d("change",s.text))},indentation:I.value,...W(B,h)}}),n.config.indentation&&(I.value=n.config.indentation))}),he(()=>{t==null||t.destroy()}),we(()=>Fe().isDark,()=>{t==null||t.refresh()}),bo(()=>{let s=!1;for(const c in n.config)if(n.config[c]!==B[c]){s=!0;break}s&&(B=Re(n.config),t==null||t.updateProps(W(B,h))),n.content!=null&&A(n.content),m.value=n.name,t==null||t.refresh()});function S(){t.set({json:{}}),d("create")}function N(s){var c;switch(s){case"file":(c=C.value)==null||c.click();break;case"recent":d("openRecent");break}}function D(s){const c=s.target;if(c.files&&c.files.length){const T=c.files[0],F=new FileReader;F.onload=()=>{F.result&&d("open",{name:T.name,content:F.result})},F.readAsText(T)}c.value=""}function A(s){k=!0;let c;s!=null&&(typeof s=="string"?c=s:c=JSON.stringify(s,null,I.value),t.update({text:c})),setTimeout(()=>{k=!1},0)}function H(s){k=!0,s!=null&&(typeof s=="string"?t.set({text:s}):t.set({json:s})),setTimeout(()=>{k=!1},0)}function L(){const s=t.get();return fe(s)?s.json:s.text}function ue(){t==null||t.refresh()}function ee(){const s=t.get(),c=m.value?`${m.value}.json`:"未命名.json";fe(s)?Le(JSON.stringify(s.json),c):Le(s.text,c)}let Q=I.value;function ge(s){switch(s){case"indentation":Q=I.value,o.value=!0;break;case"properties":v.value=!0;break;case"delete":d("delete");break}}function de(){I.value=Q,o.value=!1}function $e(){t.updateProps({indentation:I.value}),o.value=!1}function ke(){y.value=m.value,p.value=!0}function i(){p.value=!1}function V(){y.value&&d("changeName",y.value),p.value=!1}function W(s,c){const T={};for(const F of c)s[F]!==void 0&&(T[F]=s[F]);return T}return(s,c)=>{const T=ho,F=Ie,se=En,Se=Tn,Oe=Cn,xe=Eo,oe=Fo,Ne=Co,re=Ro;return M(),Z("div",{ref_key:"container",ref:w,class:"json-editor-wrapper"},[s.showMenuBar?(M(),Z("div",$n,[f(m)&&!f(p)?(M(),Z("div",kn,[G(Pe(f(m))+" ",1),_("i",{class:"i-icon-park-outline-edit",onClick:ke})])):le("",!0),f(p)?(M(),x(T,{key:1,modelValue:f(y),"onUpdate:modelValue":c[0]||(c[0]=X=>pe(y)?y.value=X:null),class:"name-editor",placeholder:"请输入名称"},{suffix:l(()=>[_("i",{class:"i-icon-park-outline-close",onClick:i}),_("i",{class:"i-icon-park-outline-check",onClick:V})]),_:1},8,["modelValue"])):le("",!0),r(xe,{class:"editorControlButtons"},{default:l(()=>[r(F,{size:"small",type:"primary",onClick:S},{default:l(()=>[Sn]),_:1}),r(Oe,{onCommand:N},{dropdown:l(()=>[r(Se,null,{default:l(()=>[r(se,{command:"recent"},{default:l(()=>[On]),_:1}),r(se,{command:"file"},{default:l(()=>[Nn]),_:1})]),_:1})]),default:l(()=>[r(F,{size:"small",type:"primary"},{default:l(()=>[Fn]),_:1})]),_:1}),r(F,{size:"small",type:"primary",onClick:ee},{default:l(()=>[Rn]),_:1}),r(Oe,{onCommand:ge},{dropdown:l(()=>[r(Se,null,{default:l(()=>[r(se,{command:"indentation"},{default:l(()=>[_("span",Pn,[Bn,G(" 缩进("+Pe(f(I))+")",1)])]),_:1}),r(se,{command:"properties"},{default:l(()=>[Dn]),_:1}),r(se,{command:"delete"},{default:l(()=>[Ln]),_:1})]),_:1})]),default:l(()=>[r(F,{size:"small",type:"primary"},{default:l(()=>[Mn]),_:1})]),_:1})]),_:1})])):le("",!0),_("div",{ref_key:"jsonEditorDiv",ref:u,class:me(["json-editor",{"jse-theme-dark":f(b).isDark}])},null,2),ne(_("input",{ref_key:"uploader",ref:C,type:"file",accept:".json,.geojson,.txt",onChange:D},null,544),[[te,!1]]),r(Ne,{modelValue:f(o),"onUpdate:modelValue":c[2]||(c[2]=X=>pe(o)?o.value=X:null),title:"设置缩进","before-close":de},{footer:l(()=>[_("span",Kn,[r(F,{onClick:de},{default:l(()=>[G("取消")]),_:1}),r(F,{type:"primary",onClick:$e},{default:l(()=>[G(" 确定 ")]),_:1})])]),default:l(()=>[r(oe,null,{default:l(()=>[G("配置代码模式下用于缩进的空格数。 缩进同时应用于两个面板。")]),_:1}),r(T,{modelValue:f(I),"onUpdate:modelValue":c[1]||(c[1]=X=>pe(I)?I.value=X:null),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["modelValue"]),r(Ne,{modelValue:f(v),"onUpdate:modelValue":c[3]||(c[3]=X=>pe(v)?v.value=X:null),title:"文档属性",class:"documentProperties"},{default:l(()=>[r(oe,null,{default:l(()=>[An,ne(r(re,{content:f($).name},null,8,["content"]),[[te,f($).name]])]),_:1}),r(oe,null,{default:l(()=>[Vn,ne(r(re,{content:f($).storage},null,8,["content"]),[[te,f($).storage]])]),_:1}),r(oe,null,{default:l(()=>[Gn,ne(r(re,{content:f($).updated},null,8,["content"]),[[te,f($).updated]])]),_:1}),r(oe,null,{default:l(()=>[zn,ne(r(re,{content:f($).content},null,8,["content"]),[[te,f($).content]])]),_:1}),r(oe,null,{default:l(()=>[Un,ne(r(re,{content:f($).size},null,8,["content"]),[[te,f($).size]])]),_:1})]),_:1},8,["modelValue"])],512)}}}),et=yo(jn,[["__scopeId","data-v-45ed3f12"]]);export{et as V};