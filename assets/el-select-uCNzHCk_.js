import{aA as nt,aB as xt,D as Q,aC as st,J as x,q as d,o as f,h as O,j as T,K as B,a3 as u,t as R,H as D,w as k,aQ as xe,s as N,x as F,X as Te,a4 as E,a5 as Y,T as _t,N as ie,aE as ot,Q as ge,P as X,av as at,bI as j,Z as q,a6 as Ve,bs as it,G as ye,bq as rt,ag as el,$ as H,A as ae,B as Ee,C as P,l as I,n as ke,aL as G,cm as tl,a7 as Z,ae as ll,aR as nl,cn as sl,bU as ol,bV as al,a_ as z,co as il,bc as rl,bJ as ul,aD as dl,aU as cl,ah as pl,cp as we,au as fl,aT as K,ac as vl,a8 as ut,cq as ml,cj as dt,bO as bl,aF as be,ad as _e,bf as gl,bK as hl,y as yl,U as ct,a1 as U,bF as Sl,F as et,r as tt,b2 as oe,an as Cl,a2 as Ie,cr as Ol,aX as pt}from"./index-6zGE5DCB.js";import{u as wl,a as Il,E as Tl}from"./el-popper-eQgDHU9l.js";import{a as Vl,E as El}from"./index-NQ00la_Z.js";import{e as kl}from"./strings-2kcWSpwp.js";import{i as he}from"./isEqual-xESWA3Y_.js";import{t as $l}from"./toInteger--1QioUwv.js";import{C as Ml}from"./el-tag-EY9nNPhk.js";function Rl(e,n,o,v){for(var i=e.length,p=o+(v?1:-1);v?p--:++p<i;)if(n(e[p],p,e))return p;return-1}var Bl=Math.max,Dl=Math.min;function Ll(e,n,o){var v=e==null?0:e.length;if(!v)return-1;var i=v-1;return o!==void 0&&(i=$l(o),i=o<0?Bl(v+i,0):Dl(i,v-1)),Rl(e,Vl(n),i,!0)}const ft=nt({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:xt},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Fl={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},zl=Q({name:"ElTag"}),Nl=Q({...zl,props:ft,emits:Fl,setup(e,{emit:n}){const o=e,v=st(),i=x("tag"),p=d(()=>{const{type:r,hit:h,effect:c,closable:V,round:w}=o;return[i.b(),i.is("closable",V),i.m(r||"primary"),i.m(v.value),i.m(c),i.is("hit",h),i.is("round",w)]}),l=r=>{n("close",r)},b=r=>{n("click",r)};return(r,h)=>r.disableTransitions?(f(),O("span",{key:0,class:u(R(p)),style:Y({backgroundColor:r.color}),onClick:b},[T("span",{class:u(R(i).e("content"))},[B(r.$slots,"default")],2),r.closable?(f(),D(R(Te),{key:0,class:u(R(i).e("close")),onClick:F(l,["stop"])},{default:k(()=>[N(R(xe))]),_:1},8,["class","onClick"])):E("v-if",!0)],6)):(f(),D(_t,{key:1,name:`${R(i).namespace.value}-zoom-in-center`,appear:""},{default:k(()=>[T("span",{class:u(R(p)),style:Y({backgroundColor:r.color}),onClick:b},[T("span",{class:u(R(i).e("content"))},[B(r.$slots,"default")],2),r.closable?(f(),D(R(Te),{key:0,class:u(R(i).e("close")),onClick:F(l,["stop"])},{default:k(()=>[N(R(xe))]),_:1},8,["class","onClick"])):E("v-if",!0)],6)]),_:3},8,["name"]))}});var Wl=ie(Nl,[["__file","tag.vue"]]);const Kl=ot(Wl),vt=Symbol("ElSelectGroup"),Se=Symbol("ElSelect");function Pl(e,n){const o=ge(Se),v=ge(vt,{disabled:!1}),i=d(()=>o.props.multiple?c(o.props.modelValue,e.value):c([o.props.modelValue],e.value)),p=d(()=>{if(o.props.multiple){const g=o.props.modelValue||[];return!i.value&&g.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),l=d(()=>e.label||(X(e.value)?"":e.value)),b=d(()=>e.value||e.label||""),r=d(()=>e.disabled||n.groupDisabled||p.value),h=Ve(),c=(g=[],y)=>{if(X(e.value)){const a=o.props.valueKey;return g&&g.some($=>at(j($,a))===j(y,a))}else return g&&g.includes(y)},V=()=>{!e.disabled&&!v.disabled&&(o.states.hoveringIndex=o.optionsArray.indexOf(h.proxy))},w=g=>{const y=new RegExp(kl(g),"i");n.visible=y.test(l.value)||e.created};return q(()=>l.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),q(()=>e.value,(g,y)=>{const{remote:a,valueKey:$}=o.props;if(he(g,y)||(o.onOptionDestroy(y,h.proxy),o.onOptionCreate(h.proxy)),!e.created&&!a){if($&&X(g)&&X(y)&&g[$]===y[$])return;o.setSelected()}}),q(()=>v.disabled,()=>{n.groupDisabled=v.disabled},{immediate:!0}),{select:o,currentLabel:l,currentValue:b,itemSelected:i,isDisabled:r,hoverItem:V,updateOption:w}}const Al=Q({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=x("select"),o=it(),v=d(()=>[n.be("dropdown","item"),n.is("disabled",R(b)),n.is("selected",R(l)),n.is("hovering",R(w))]),i=ye({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:p,itemSelected:l,isDisabled:b,select:r,hoverItem:h,updateOption:c}=Pl(e,i),{visible:V,hover:w}=rt(i),g=Ve().proxy;r.onOptionCreate(g),el(()=>{const a=g.value,{selected:$}=r.states,re=(r.props.multiple?$:[$]).some(ue=>ue.value===g.value);H(()=>{r.states.cachedOptions.get(a)===g&&!re&&r.states.cachedOptions.delete(a)}),r.onOptionDestroy(a,g)});function y(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(g)}return{ns:n,id:o,containerKls:v,currentLabel:p,itemSelected:l,isDisabled:b,select:r,hoverItem:h,updateOption:c,visible:V,hover:w,selectOptionClick:y,states:i}}}),Ul=["id","aria-disabled","aria-selected"];function Hl(e,n,o,v,i,p){return ae((f(),O("li",{id:e.id,class:u(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:n[1]||(n[1]=F((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[B(e.$slots,"default",{},()=>[T("span",null,P(e.currentLabel),1)])],42,Ul)),[[Ee,e.visible]])}var $e=ie(Al,[["render",Hl],["__file","option.vue"]]);const Gl=Q({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ge(Se),n=x("select"),o=d(()=>e.props.popperClass),v=d(()=>e.props.multiple),i=d(()=>e.props.fitInputWidth),p=I("");function l(){var b;p.value=`${(b=e.selectRef)==null?void 0:b.offsetWidth}px`}return ke(()=>{l(),G(e.selectRef,l)}),{ns:n,minWidth:p,popperClass:o,isMultiple:v,isFitInputWidth:i}}});function jl(e,n,o,v,i,p){return f(),O("div",{class:u([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:Y({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(f(),O("div",{key:0,class:u(e.ns.be("dropdown","header"))},[B(e.$slots,"header")],2)):E("v-if",!0),B(e.$slots,"default"),e.$slots.footer?(f(),O("div",{key:1,class:u(e.ns.be("dropdown","footer"))},[B(e.$slots,"footer")],2)):E("v-if",!0)],6)}var ql=ie(Gl,[["render",jl],["__file","select-dropdown.vue"]]);function Ql(e){const n=I(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:p=>{const l=p.target.value,b=l[l.length-1]||"";n.value=!tl(b)},handleCompositionEnd:p=>{n.value&&(n.value=!1,Z(e)&&e(p))}}}const Jl=11,Xl=(e,n)=>{const{t:o}=ll(),v=it(),i=x("select"),p=x("input"),l=ye({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1});nl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},d(()=>e.suffixTransition===!1));const b=I(null),r=I(null),h=I(null),c=I(null),V=I(null),w=I(null),g=I(null),y=I(null),a=I(null),$=I(null),_=I(null),re=I(null),{wrapperRef:ue,isFocused:Me,handleFocus:bt,handleBlur:Re}=sl(V,{afterFocus(){e.automaticDropdown&&!C.value&&(C.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var s,m;return((s=h.value)==null?void 0:s.isFocusInsideContent(t))||((m=c.value)==null?void 0:m.isFocusInsideContent(t))},afterBlur(){C.value=!1,l.menuVisibleOnFocus=!1}}),C=I(!1),ee=I(),{form:Be,formItem:te}=ol(),{inputId:gt}=al(e,{formItemContext:te}),de=d(()=>e.disabled||(Be==null?void 0:Be.disabled)),Ce=d(()=>e.multiple?z(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!==""),ht=d(()=>e.clearable&&!de.value&&l.inputHovering&&Ce.value),De=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),yt=d(()=>i.is("reverse",De.value&&C.value&&e.suffixTransition)),Le=d(()=>(te==null?void 0:te.validateState)||""),St=d(()=>il[Le.value]),Ct=d(()=>e.remote?300:0),Fe=d(()=>e.loading?e.loadingText||o("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&le.value===0?e.noMatchText||o("el.select.noMatch"):l.options.size===0?e.noDataText||o("el.select.noData"):null),le=d(()=>M.value.filter(t=>t.visible).length),M=d(()=>{const t=Array.from(l.options.values()),s=[];return l.optionValues.forEach(m=>{const S=t.findIndex(W=>W.value===m);S>-1&&s.push(t[S])}),s.length>=t.length?s:t}),Ot=d(()=>Array.from(l.cachedOptions.values())),wt=d(()=>{const t=M.value.filter(s=>!s.created).some(s=>s.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),ze=()=>{e.filterable&&Z(e.filterMethod)||e.filterable&&e.remote&&Z(e.remoteMethod)||M.value.forEach(t=>{t.updateOption(l.inputValue)})},Ne=st(),It=d(()=>["small"].includes(Ne.value)?"small":"default"),Tt=d({get(){return C.value&&Fe.value!==!1},set(t){C.value=t}}),Vt=d(()=>z(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),Et=d(()=>{var t;const s=(t=e.placeholder)!=null?t:o("el.select.placeholder");return e.multiple||!Ce.value?s:l.selectedLabel});q(()=>e.modelValue,(t,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",ce("")),pe(),!he(t,s)&&e.validateEvent&&(te==null||te.validate("change").catch(m=>rl()))},{flush:"post",deep:!0}),q(()=>C.value,t=>{t?ce(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),n("visible-change",t)}),q(()=>l.options.entries(),()=>{var t;if(!ul)return;const s=((t=b.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!dl(e.modelValue)||!Array.from(s).includes(document.activeElement))&&pe(),e.defaultFirstOption&&(e.filterable||e.remote)&&le.value&&We()},{flush:"post"}),q(()=>l.hoveringIndex,t=>{cl(t)&&t>-1?ee.value=M.value[t]||{}:ee.value={},M.value.forEach(s=>{s.hover=ee.value===s})}),pl(()=>{l.isBeforeHide||ze()});const ce=t=>{l.previousQuery!==t&&(l.previousQuery=t,e.filterable&&Z(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&Z(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&le.value?H(We):H(kt))},We=()=>{const t=M.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),s=t.find(S=>S.created),m=t[0];l.hoveringIndex=Qe(M.value,s||m)},pe=()=>{if(e.multiple)l.selectedLabel="";else{const s=Ke(e.modelValue);l.selectedLabel=s.currentLabel,l.selected=s;return}const t=[];z(e.modelValue)&&e.modelValue.forEach(s=>{t.push(Ke(s))}),l.selected=t},Ke=t=>{let s;const m=we(t).toLowerCase()==="object",S=we(t).toLowerCase()==="null",W=we(t).toLowerCase()==="undefined";for(let A=l.cachedOptions.size-1;A>=0;A--){const L=Ot.value[A];if(m?j(L.value,e.valueKey)===j(t,e.valueKey):L.value===t){s={value:t,currentLabel:L.currentLabel,isDisabled:L.isDisabled};break}}if(s)return s;const J=m?t.label:!S&&!W?t:"";return{value:t,currentLabel:J}},kt=()=>{e.multiple?l.selected.length>0?l.hoveringIndex=Math.min(...l.selected.map(t=>M.value.findIndex(s=>se(s)===se(t)))):l.hoveringIndex=-1:l.hoveringIndex=M.value.findIndex(t=>se(t)===se(l.selected))},$t=()=>{l.selectionWidth=r.value.getBoundingClientRect().width},Pe=()=>{l.calculatorWidth=w.value.getBoundingClientRect().width},Mt=()=>{l.collapseItemWidth=_.value.getBoundingClientRect().width},Oe=()=>{var t,s;(s=(t=h.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ae=()=>{var t,s;(s=(t=c.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ue=()=>{l.inputValue.length>0&&!C.value&&(C.value=!0),ce(l.inputValue)},He=t=>{if(l.inputValue=t.target.value,e.remote)Ge();else return Ue()},Ge=fl(()=>{Ue()},Ct.value),ne=t=>{he(e.modelValue,t)||n(dt,t)},Rt=t=>Ll(t,s=>!l.disabledOptions.has(s)),Bt=t=>{if(e.multiple&&t.code!==vl.delete&&t.target.value.length<=0){const s=e.modelValue.slice(),m=Rt(s);if(m<0)return;s.splice(m,1),n(K,s),ne(s)}},Dt=(t,s)=>{const m=l.selected.indexOf(s);if(m>-1&&!de.value){const S=e.modelValue.slice();S.splice(m,1),n(K,S),ne(S),n("remove-tag",s.value)}t.stopPropagation(),ve()},je=t=>{t.stopPropagation();const s=e.multiple?[]:"";if(!ut(s))for(const m of l.selected)m.isDisabled&&s.push(m.value);n(K,s),ne(s),l.hoveringIndex=-1,C.value=!1,n("clear"),ve()},qe=t=>{if(e.multiple){const s=(e.modelValue||[]).slice(),m=Qe(s,t.value);m>-1?s.splice(m,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(t.value),n(K,s),ne(s),t.created&&ce(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else n(K,t.value),ne(t.value),C.value=!1;ve(),!C.value&&H(()=>{fe(t)})},Qe=(t=[],s)=>{if(!X(s))return t.indexOf(s);const m=e.valueKey;let S=-1;return t.some((W,J)=>at(j(W,m))===j(s,m)?(S=J,!0):!1),S},fe=t=>{var s,m,S,W,J;const me=z(t)?t[0]:t;let A=null;if(me!=null&&me.value){const L=M.value.filter(Ye=>Ye.value===me.value);L.length>0&&(A=L[0].$el)}if(h.value&&A){const L=(W=(S=(m=(s=h.value)==null?void 0:s.popperRef)==null?void 0:m.contentRef)==null?void 0:S.querySelector)==null?void 0:W.call(S,`.${i.be("dropdown","wrap")}`);L&&ml(L,A)}(J=re.value)==null||J.handleScroll()},Lt=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},Ft=(t,s)=>{l.options.get(t)===s&&l.options.delete(t)},{handleCompositionStart:zt,handleCompositionUpdate:Nt,handleCompositionEnd:Wt}=Ql(t=>He(t)),Kt=d(()=>{var t,s;return(s=(t=h.value)==null?void 0:t.popperRef)==null?void 0:s.contentRef}),Pt=()=>{H(()=>fe(l.selected))},ve=()=>{var t;(t=V.value)==null||t.focus()},At=()=>{Je()},Ut=t=>{je(t)},Je=t=>{if(C.value=!1,Me.value){const s=new FocusEvent("focus",t);H(()=>Re(s))}},Ht=()=>{l.inputValue.length>0?l.inputValue="":C.value=!1},Xe=()=>{de.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:C.value=!C.value)},Gt=()=>{C.value?M.value[l.hoveringIndex]&&qe(M.value[l.hoveringIndex]):Xe()},se=t=>X(t.value)?j(t.value,e.valueKey):t.value,jt=d(()=>M.value.filter(t=>t.visible).every(t=>t.disabled)),qt=d(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),Qt=d(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),Ze=t=>{if(!C.value){C.value=!0;return}if(!(l.options.size===0||le.value===0)&&!jt.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const s=M.value[l.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Ze(t),H(()=>fe(ee.value))}},Jt=()=>{if(!r.value)return 0;const t=window.getComputedStyle(r.value);return Number.parseFloat(t.gap||"6px")},Xt=d(()=>{const t=Jt();return{maxWidth:`${_.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),Zt=d(()=>({maxWidth:`${l.selectionWidth}px`})),Yt=d(()=>({width:`${Math.max(l.calculatorWidth,Jl)}px`}));return e.multiple&&!z(e.modelValue)&&n(K,[]),!e.multiple&&z(e.modelValue)&&n(K,""),G(r,$t),G(w,Pe),G(a,Oe),G(ue,Oe),G($,Ae),G(_,Mt),ke(()=>{pe()}),{inputId:gt,contentId:v,nsSelect:i,nsInput:p,states:l,isFocused:Me,expanded:C,optionsArray:M,hoverOption:ee,selectSize:Ne,filteredOptionsCount:le,resetCalculatorWidth:Pe,updateTooltip:Oe,updateTagTooltip:Ae,debouncedOnInputChange:Ge,onInput:He,deletePrevTag:Bt,deleteTag:Dt,deleteSelected:je,handleOptionSelect:qe,scrollToOption:fe,hasModelValue:Ce,shouldShowPlaceholder:Vt,currentPlaceholder:Et,showClose:ht,iconComponent:De,iconReverse:yt,validateState:Le,validateIcon:St,showNewOption:wt,updateOptions:ze,collapseTagSize:It,setSelected:pe,selectDisabled:de,emptyText:Fe,handleCompositionStart:zt,handleCompositionUpdate:Nt,handleCompositionEnd:Wt,onOptionCreate:Lt,onOptionDestroy:Ft,handleMenuEnter:Pt,handleFocus:bt,focus:ve,blur:At,handleBlur:Re,handleClearClick:Ut,handleClickOutside:Je,handleEsc:Ht,toggleMenu:Xe,selectOption:Gt,getValueKey:se,navigateOptions:Ze,dropdownMenuVisible:Tt,showTagList:qt,collapseTagList:Qt,tagStyle:Xt,collapseTagStyle:Zt,inputStyle:Yt,popperRef:Kt,inputRef:V,tooltipRef:h,tagTooltipRef:c,calculatorRef:w,prefixRef:g,suffixRef:y,selectRef:b,wrapperRef:ue,selectionRef:r,scrollbarRef:re,menuRef:a,tagMenuRef:$,collapseItemRef:_}};var Zl=Q({name:"ElOptions",setup(e,{slots:n}){const o=ge(Se);let v=[];return()=>{var i,p;const l=(i=n.default)==null?void 0:i.call(n),b=[];function r(h){z(h)&&h.forEach(c=>{var V,w,g,y;const a=(V=(c==null?void 0:c.type)||{})==null?void 0:V.name;a==="ElOptionGroup"?r(!ut(c.children)&&!z(c.children)&&Z((w=c.children)==null?void 0:w.default)?(g=c.children)==null?void 0:g.default():c.children):a==="ElOption"?b.push((y=c.props)==null?void 0:y.value):z(c.children)&&r(c.children)})}return l.length&&r((p=l[0])==null?void 0:p.children),he(b,v)||(v=b,o&&(o.states.optionValues=b)),l}}});const Yl=nt({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:bl,effect:{type:be(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:be(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:wl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:_e,default:gl},fitInputWidth:Boolean,suffixIcon:{type:_e,default:hl},tagType:{...ft.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:be(String),values:Il,default:"bottom-start"},fallbackPlacements:{type:be(Array),default:["bottom-start","top-start","right","left"]},ariaLabel:{type:String,default:void 0}}),lt="ElSelect",xl=Q({name:lt,componentName:lt,components:{ElInput:yl,ElSelectMenu:ql,ElOption:$e,ElOptions:Zl,ElTag:Kl,ElScrollbar:El,ElTooltip:Tl,ElIcon:Te},directives:{ClickOutside:Ml},props:Yl,emits:[K,dt,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const o=Xl(e,n);return ct(Se,ye({props:e,states:o.states,optionsArray:o.optionsArray,handleOptionSelect:o.handleOptionSelect,onOptionCreate:o.onOptionCreate,onOptionDestroy:o.onOptionDestroy,selectRef:o.selectRef,setSelected:o.setSelected})),{...o}}}),_l=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],en=["textContent"];function tn(e,n,o,v,i,p){const l=U("el-tag"),b=U("el-tooltip"),r=U("el-icon"),h=U("el-option"),c=U("el-options"),V=U("el-scrollbar"),w=U("el-select-menu"),g=Sl("click-outside");return ae((f(),O("div",{ref:"selectRef",class:u([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[14]||(n[14]=y=>e.states.inputHovering=!0),onMouseleave:n[15]||(n[15]=y=>e.states.inputHovering=!1),onClick:n[16]||(n[16]=F((...y)=>e.toggleMenu&&e.toggleMenu(...y),["stop"]))},[N(b,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[13]||(n[13]=y=>e.states.isBeforeHide=!1)},{default:k(()=>{var y;return[T("div",{ref:"wrapperRef",class:u([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(f(),O("div",{key:0,ref:"prefixRef",class:u(e.nsSelect.e("prefix"))},[B(e.$slots,"prefix")],2)):E("v-if",!0),T("div",{ref:"selectionRef",class:u([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?B(e.$slots,"tag",{key:0},()=>[(f(!0),O(et,null,tt(e.showTagList,a=>(f(),O("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[N(l,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:Y(e.tagStyle),onClose:$=>e.deleteTag($,a)},{default:k(()=>[T("span",{class:u(e.nsSelect.e("tags-text"))},P(a.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(f(),D(b,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:k(()=>[T("div",{ref:"collapseItemRef",class:u(e.nsSelect.e("selected-item"))},[N(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:Y(e.collapseTagStyle)},{default:k(()=>[T("span",{class:u(e.nsSelect.e("tags-text"))}," + "+P(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:k(()=>[T("div",{ref:"tagMenuRef",class:u(e.nsSelect.e("selection"))},[(f(!0),O(et,null,tt(e.collapseTagList,a=>(f(),O("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[N(l,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:$=>e.deleteTag($,a)},{default:k(()=>[T("span",{class:u(e.nsSelect.e("tags-text"))},P(a.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):E("v-if",!0)]):E("v-if",!0),e.selectDisabled?E("v-if",!0):(f(),O("div",{key:1,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ae(T("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",class:u([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:Y(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((y=e.hoverOption)==null?void 0:y.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=oe(F(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=oe(F(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=oe(F((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=oe(F((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=oe(F((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=F((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,_l),[[Cl,e.states.inputValue]]),e.filterable?(f(),O("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:u(e.nsSelect.e("input-calculator")),textContent:P(e.states.inputValue)},null,10,en)):E("v-if",!0)],2)),e.shouldShowPlaceholder?(f(),O("div",{key:2,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[T("span",null,P(e.currentPlaceholder),1)],2)):E("v-if",!0)],2),T("div",{ref:"suffixRef",class:u(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(f(),D(r,{key:0,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:k(()=>[(f(),D(Ie(e.iconComponent)))]),_:1},8,["class"])):E("v-if",!0),e.showClose&&e.clearIcon?(f(),D(r,{key:1,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:k(()=>[(f(),D(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):E("v-if",!0),e.validateState&&e.validateIcon?(f(),D(r,{key:2,class:u([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:k(()=>[(f(),D(Ie(e.validateIcon)))]),_:1},8,["class"])):E("v-if",!0)],2)],2)]}),content:k(()=>[N(w,{ref:"menuRef"},{default:k(()=>[e.$slots.header?(f(),O("div",{key:0,class:u(e.nsSelect.be("dropdown","header"))},[B(e.$slots,"header")],2)):E("v-if",!0),ae(N(V,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:u([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:k(()=>[e.showNewOption?(f(),D(h,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):E("v-if",!0),N(c,null,{default:k(()=>[B(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ee,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(f(),O("div",{key:1,class:u(e.nsSelect.be("dropdown","loading"))},[B(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(f(),O("div",{key:2,class:u(e.nsSelect.be("dropdown","empty"))},[B(e.$slots,"empty",{},()=>[T("span",null,P(e.emptyText),1)])],2)):E("v-if",!0),e.$slots.footer?(f(),O("div",{key:3,class:u(e.nsSelect.be("dropdown","footer"))},[B(e.$slots,"footer")],2)):E("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[g,e.handleClickOutside,e.popperRef]])}var ln=ie(xl,[["render",tn],["__file","select.vue"]]);const nn=Q({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=x("select"),o=I(null),v=Ve(),i=I([]);ct(vt,ye({...rt(e)}));const p=d(()=>i.value.some(r=>r.visible===!0)),l=r=>{const h=[];return z(r.children)&&r.children.forEach(c=>{var V,w;c.type&&c.type.name==="ElOption"&&c.component&&c.component.proxy?h.push(c.component.proxy):(V=c.children)!=null&&V.length?h.push(...l(c)):(w=c.component)!=null&&w.subTree&&h.push(...l(c.component.subTree))}),h},b=()=>{i.value=l(v.subTree)};return ke(()=>{b()}),Ol(o,b,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:p,ns:n}}});function sn(e,n,o,v,i,p){return ae((f(),O("ul",{ref:"groupRef",class:u(e.ns.be("group","wrap"))},[T("li",{class:u(e.ns.be("group","title"))},P(e.label),3),T("li",null,[T("ul",{class:u(e.ns.b("group"))},[B(e.$slots,"default")],2)])],2)),[[Ee,e.visible]])}var mt=ie(nn,[["render",sn],["__file","option-group.vue"]]);const fn=ot(ln,{Option:$e,OptionGroup:mt}),vn=pt($e);pt(mt);export{vn as E,fn as a,Kl as b};