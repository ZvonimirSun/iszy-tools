import{c3 as jl,n as Gl,a$ as Ul,p as se,aQ as zl,q as ae,r as p,o as h,s as $,t as M,v as le,y as g,x as m,f as P,w as T,g as x,ar as Ll,aS as j,ao as gl,A as W,a9 as X,bc as yl,C as Te,D as Kl,ac as Ne,aT as we,aa as Re,b_ as N,K as R,ak as Cl,bL as Bl,a5 as He,aM as Sl,a7 as Jl,ai as K,$ as Ie,a0 as Ol,B as _,F as B,W as wl,aj as Al,aO as Il,at as Xl,a8 as El,aK as Yl,c4 as Zl,aL as xl,bB as ie,c5 as Oe,c1 as _l,ax as en,az as ln,c6 as bl,a6 as Ml,as as kl,aw as ee,ay as ql,c7 as nn,c8 as on,aH as Wl,I as tn,bQ as an,bR as Vl,bF as sn,bU as rn,au as Fl,c9 as un,aR as Z,bb as dn,M as Fe,N as hl,ab as F,ca as cn,bD as pn,z as $l,aD as Nl}from"./index.js";import{a as fn,u as vn,E as mn}from"./el-popper-66ed4f9c.js";import{E as bn}from"./index-f0cb3f64.js";import{e as hn}from"./strings-98730f23.js";import{i as Dl}from"./isEqual-ac423b5b.js";import{a as gn,C as yn}from"./el-tag-1d085a2f.js";import{t as Cn}from"./toFinite-0e801d2e.js";function Sn(e){var l=Cn(e),a=l%1;return l===l?a?l-a:l:0}function On(e,l,a,v){for(var r=e.length,c=a+(v?1:-1);v?c--:++c<r;)if(l(e[c],c,e))return c;return-1}var wn=Math.max,In=Math.min;function Tn(e,l,a){var v=e==null?0:e.length;if(!v)return-1;var r=v-1;return a!==void 0&&(r=Sn(a),r=a<0?wn(v+r,0):In(r,v-1)),On(e,gn(l),r,!0)}const Ln=e=>jl[e||"default"],Rl=Gl({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:Ul,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),En={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Mn=se({name:"ElTag"}),kn=se({...Mn,props:Rl,emits:En,setup(e,{emit:l}){const a=e,v=zl(),r=ae("tag"),c=p(()=>{const{type:s,hit:w,effect:y,closable:C,round:I}=a;return[r.b(),r.is("closable",C),r.m(s),r.m(v.value),r.m(y),r.is("hit",w),r.is("round",I)]}),u=s=>{l("close",s)},b=s=>{l("click",s)};return(s,w)=>s.disableTransitions?(h(),$("span",{key:0,class:g(m(c)),style:X({backgroundColor:s.color}),onClick:b},[M("span",{class:g(m(r).e("content"))},[le(s.$slots,"default")],2),s.closable?(h(),P(m(gl),{key:0,class:g(m(r).e("close")),onClick:j(u,["stop"])},{default:T(()=>[x(m(Ll))]),_:1},8,["class","onClick"])):W("v-if",!0)],6)):(h(),P(yl,{key:1,name:`${m(r).namespace.value}-zoom-in-center`,appear:""},{default:T(()=>[M("span",{class:g(m(c)),style:X({backgroundColor:s.color}),onClick:b},[M("span",{class:g(m(r).e("content"))},[le(s.$slots,"default")],2),s.closable?(h(),P(m(gl),{key:0,class:g(m(r).e("close")),onClick:j(u,["stop"])},{default:T(()=>[x(m(Ll))]),_:1},8,["class","onClick"])):W("v-if",!0)],6)]),_:3},8,["name"]))}});var Vn=Te(kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const $n=Kl(Vn),Hl=Symbol("ElSelectGroup"),Qe=Symbol("ElSelect");function Dn(e,l){const a=Ne(Qe),v=Ne(Hl,{disabled:!1}),r=p(()=>we(e.value)),c=p(()=>a.props.multiple?C(a.props.modelValue,e.value):I(e.value,a.props.modelValue)),u=p(()=>{if(a.props.multiple){const f=a.props.modelValue||[];return!c.value&&f.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),b=p(()=>e.label||(r.value?"":e.value)),s=p(()=>e.value||e.label||""),w=p(()=>e.disabled||l.groupDisabled||u.value),y=Cl(),C=(f=[],S)=>{if(r.value){const t=a.props.valueKey;return f&&f.some(O=>Re(N(O,t))===N(S,t))}else return f&&f.includes(S)},I=(f,S)=>{if(r.value){const{valueKey:t}=a.props;return N(f,t)===N(S,t)}else return f===S},E=()=>{!e.disabled&&!v.disabled&&(a.hoverIndex=a.optionsArray.indexOf(y.proxy))};R(()=>b.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),R(()=>e.value,(f,S)=>{const{remote:t,valueKey:O}=a.props;if(Object.is(f,S)||(a.onOptionDestroy(S,y.proxy),a.onOptionCreate(y.proxy)),!e.created&&!t){if(O&&we(f)&&we(S)&&f[O]===S[O])return;a.setSelected()}}),R(()=>v.disabled,()=>{l.groupDisabled=v.disabled},{immediate:!0});const{queryChange:L}=Re(a);return R(L,f=>{const{query:S}=m(f),t=new RegExp(hn(S),"i");l.visible=t.test(b.value)||e.created,l.visible||a.filteredOptionsCount--},{immediate:!0}),{select:a,currentLabel:b,currentValue:s,itemSelected:c,isDisabled:w,hoverItem:E}}const Pn=se({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const l=ae("select"),a=Bl(),v=p(()=>[l.be("dropdown","item"),l.is("disabled",m(b)),{selected:m(u),hover:m(C)}]),r=He({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:c,itemSelected:u,isDisabled:b,select:s,hoverItem:w}=Dn(e,r),{visible:y,hover:C}=Sl(r),I=Cl().proxy;s.onOptionCreate(I),Jl(()=>{const L=I.value,{selected:f}=s,t=(s.props.multiple?f:[f]).some(O=>O.value===I.value);K(()=>{s.cachedOptions.get(L)===I&&!t&&s.cachedOptions.delete(L)}),s.onOptionDestroy(L,I)});function E(){e.disabled!==!0&&r.groupDisabled!==!0&&s.handleOptionSelect(I)}return{ns:l,id:a,containerKls:v,currentLabel:c,itemSelected:u,isDisabled:b,select:s,hoverItem:w,visible:y,hover:C,selectOptionClick:E,states:r}}}),zn=["id","aria-disabled","aria-selected"];function Kn(e,l,a,v,r,c){return Ie((h(),$("li",{id:e.id,class:g(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...u)=>e.hoverItem&&e.hoverItem(...u)),onClick:l[1]||(l[1]=j((...u)=>e.selectOptionClick&&e.selectOptionClick(...u),["stop"]))},[le(e.$slots,"default",{},()=>[M("span",null,_(e.currentLabel),1)])],42,zn)),[[Ol,e.visible]])}var Tl=Te(Pn,[["render",Kn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Bn=se({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Ne(Qe),l=ae("select"),a=p(()=>e.props.popperClass),v=p(()=>e.props.multiple),r=p(()=>e.props.fitInputWidth),c=B("");function u(){var b;c.value=`${(b=e.selectWrapper)==null?void 0:b.offsetWidth}px`}return wl(()=>{u(),Al(e.selectWrapper,u)}),{ns:l,minWidth:c,popperClass:a,isMultiple:v,isFitInputWidth:r}}});function An(e,l,a,v,r,c){return h(),$("div",{class:g([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:X({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[le(e.$slots,"default")],6)}var qn=Te(Bn,[["render",An],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function Wn(e){const{t:l}=Il();return He({options:new Map,cachedOptions:new Map,disabledOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1,focused:!1})}const Fn=(e,l,a)=>{const{t:v}=Il(),r=ae("select");Xl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},p(()=>e.suffixTransition===!1));const c=B(null),u=B(null),b=B(null),s=B(null),w=B(null),y=B(null),C=B(null),I=B(null),E=B(),L=El({query:""}),f=El(""),S=B([]);let t=0;const{form:O,formItem:G}=Yl(),je=p(()=>!e.filterable||e.multiple||!l.visible),U=p(()=>e.disabled||(O==null?void 0:O.disabled)),Le=p(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!U.value&&l.inputHovering&&n}),Ee=p(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ge=p(()=>r.is("reverse",Ee.value&&l.visible&&e.suffixTransition)),pe=p(()=>(O==null?void 0:O.statusIcon)&&(G==null?void 0:G.validateState)&&Zl[G==null?void 0:G.validateState]),Me=p(()=>e.remote?300:0),fe=p(()=>e.loading?e.loadingText||v("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||v("el.select.noMatch"):l.options.size===0?e.noDataText||v("el.select.noData"):null),k=p(()=>{const n=Array.from(l.options.values()),o=[];return S.value.forEach(i=>{const d=n.findIndex(V=>V.currentLabel===i);d>-1&&o.push(n[d])}),o.length>=n.length?o:n}),Ue=p(()=>Array.from(l.cachedOptions.values())),Je=p(()=>{const n=k.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ne=zl(),Xe=p(()=>["small"].includes(ne.value)?"small":"default"),Ye=p({get(){return l.visible&&fe.value!==!1},set(n){l.visible=n}});R([()=>U.value,()=>ne.value,()=>O==null?void 0:O.size],()=>{K(()=>{H()})}),R(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),R(()=>e.modelValue,(n,o)=>{e.multiple&&(H(),n&&n.length>0||u.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",Y(l.query))),ve(),e.filterable&&!e.multiple&&(l.inputLength=20),!Dl(n,o)&&e.validateEvent&&(G==null||G.validate("change").catch(i=>xl()))},{flush:"post",deep:!0}),R(()=>l.visible,n=>{var o,i,d,V,D;n?((i=(o=s.value)==null?void 0:o.updatePopper)==null||i.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(V=(d=b.value)==null?void 0:d.focus)==null||V.call(d),e.multiple?(D=u.value)==null||D.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),Y(l.query),!e.multiple&&!e.remote&&(L.value.query="",Oe(L),Oe(f)))):(e.filterable&&(ie(e.filterMethod)&&e.filterMethod(""),ie(e.remoteMethod)&&e.remoteMethod("")),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ze(),K(()=>{u.value&&u.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),a.emit("visible-change",n)}),R(()=>l.options.entries(),()=>{var n,o,i;if(!_l)return;(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&H();const d=((i=C.value)==null?void 0:i.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!en(e.modelValue)||!Array.from(d).includes(document.activeElement))&&ve(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ve()},{flush:"post"}),R(()=>l.hoverIndex,n=>{ln(n)&&n>-1?E.value=k.value[n]||{}:E.value={},k.value.forEach(o=>{o.hover=E.value===o})});const H=()=>{K(()=>{var n,o;if(!c.value)return;const i=c.value.$el.querySelector("input");t=t||(i.clientHeight>0?i.clientHeight+2:0);const d=y.value,V=getComputedStyle(i).getPropertyValue(r.cssVarName("input-height")),D=Number.parseFloat(V)||Ln(ne.value||(O==null?void 0:O.size)),A=ne.value||D===t||t<=0?D:t;!(i.offsetParent===null)&&(i.style.height=`${(l.selected.length===0?A:Math.max(d?d.clientHeight+(d.clientHeight>A?6:0):0,A))-2}px`),l.visible&&fe.value!==!1&&((o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n))})},Y=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(ie(e.filterMethod)||ie(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,K(()=>{var o,i;l.visible&&((i=(o=s.value)==null?void 0:o.updatePopper)==null||i.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&K(()=>{if(!U.value){const o=u.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,ke()}H()}),e.remote&&ie(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):ie(e.filterMethod)?(e.filterMethod(n),Oe(f)):(l.filteredOptionsCount=l.optionsCount,L.value.query=n,Oe(L),Oe(f)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await K(),Ve())}},ke=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=u.value.value?"":l.cachedPlaceHolder)},Ve=()=>{const n=k.value.filter(d=>d.visible&&!d.disabled&&!d.states.groupDisabled),o=n.find(d=>d.created),i=n[0];l.hoverIndex=me(k.value,o||i)},ve=()=>{var n;if(e.multiple)l.selectedLabel="";else{const i=$e(e.modelValue);(n=i.props)!=null&&n.created?(l.createdLabel=i.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=i.currentLabel,l.selected=i,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(i=>{o.push($e(i))}),l.selected=o,K(()=>{H()})},$e=n=>{let o;const i=bl(n).toLowerCase()==="object",d=bl(n).toLowerCase()==="null",V=bl(n).toLowerCase()==="undefined";for(let Q=l.cachedOptions.size-1;Q>=0;Q--){const q=Ue.value[Q];if(i?N(q.value,e.valueKey)===N(n,e.valueKey):q.value===n){o={value:n,currentLabel:q.currentLabel,isDisabled:q.isDisabled};break}}if(o)return o;const D=i?n.label:!d&&!V?n:"",A={value:n,currentLabel:D};return e.multiple&&(A.hitState=!1),A},Ze=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>k.value.findIndex(i=>N(i,n)===N(o,n)))):l.hoverIndex=-1:l.hoverIndex=k.value.findIndex(o=>ce(o)===ce(l.selected))},300)},xe=()=>{var n,o;_e(),(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&H()},_e=()=>{var n;l.inputWidth=(n=c.value)==null?void 0:n.$el.offsetWidth},el=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,Y(l.query))},ll=Ml(()=>{el()},Me.value),nl=Ml(n=>{Y(n.target.value)},Me.value),oe=n=>{Dl(e.modelValue,n)||a.emit(Wl,n)},De=n=>Tn(n,o=>!l.disabledOptions.has(o)),ol=n=>{if(n.code!==kl.delete){if(n.target.value.length<=0&&!he()){const o=e.modelValue.slice(),i=De(o);if(i<0)return;o.splice(i,1),a.emit(ee,o),oe(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},re=(n,o)=>{const i=l.selected.indexOf(o);if(i>-1&&!U.value){const d=e.modelValue.slice();d.splice(i,1),a.emit(ee,d),oe(d),a.emit("remove-tag",o.value)}n.stopPropagation(),de()},Pe=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!ql(o))for(const i of l.selected)i.isDisabled&&o.push(i.value);a.emit(ee,o),oe(o),l.hoverIndex=-1,l.visible=!1,a.emit("clear"),de()},ze=n=>{var o;if(e.multiple){const i=(e.modelValue||[]).slice(),d=me(i,n.value);d>-1?i.splice(d,1):(e.multipleLimit<=0||i.length<e.multipleLimit)&&i.push(n.value),a.emit(ee,i),oe(i),n.created&&(l.query="",Y(""),l.inputLength=20),e.filterable&&((o=u.value)==null||o.focus())}else a.emit(ee,n.value),oe(n.value),l.visible=!1;tl(),!l.visible&&K(()=>{ue(n)})},me=(n=[],o)=>{if(!we(o))return n.indexOf(o);const i=e.valueKey;let d=-1;return n.some((V,D)=>Re(N(V,i))===N(o,i)?(d=D,!0):!1),d},tl=()=>{const n=u.value||c.value;n&&(n==null||n.focus())},ue=n=>{var o,i,d,V,D;const A=Array.isArray(n)?n[0]:n;let Q=null;if(A!=null&&A.value){const q=k.value.filter(We=>We.value===A.value);q.length>0&&(Q=q[0].$el)}if(s.value&&Q){const q=(V=(d=(i=(o=s.value)==null?void 0:o.popperRef)==null?void 0:i.contentRef)==null?void 0:d.querySelector)==null?void 0:V.call(d,`.${r.be("dropdown","wrap")}`);q&&nn(q,Q)}(D=I.value)==null||D.handleScroll()},be=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n),n.disabled&&l.disabledOptions.set(n.value,n)},il=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},al=n=>{n.code!==kl.backspace&&he(!1),l.inputLength=u.value.value.length*15+20,H()},he=n=>{if(!Array.isArray(l.selected))return;const o=De(l.selected.map(d=>d.value)),i=l.selected[o];if(i)return n===!0||n===!1?(i.hitState=n,n):(i.hitState=!i.hitState,i.hitState)},sl=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,K(()=>Y(o));else{const i=o[o.length-1]||"";l.isOnComposition=!on(i)}},rl=()=>{K(()=>ue(l.selected))},ul=n=>{l.focused||((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),l.focused=!0,a.emit("focus",n))},de=()=>{var n,o;l.visible?(n=u.value||c.value)==null||n.focus():(o=c.value)==null||o.focus()},dl=()=>{var n,o,i;l.visible=!1,(n=c.value)==null||n.blur(),(i=(o=b.value)==null?void 0:o.blur)==null||i.call(o)},J=n=>{var o,i,d;(o=s.value)!=null&&o.isFocusInsideContent(n)||(i=w.value)!=null&&i.isFocusInsideContent(n)||(d=C.value)!=null&&d.contains(n.relatedTarget)||(l.visible&&ye(),l.focused=!1,a.emit("blur",n))},ge=n=>{Pe(n)},ye=()=>{l.visible=!1},Ce=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ke=n=>{n&&!l.mouseEnter||U.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!s.value||!s.value.isFocusInsideContent())&&(l.visible=!l.visible),de())},cl=()=>{l.visible?k.value[l.hoverIndex]&&ze(k.value[l.hoverIndex]):Ke()},ce=n=>we(n.value)?N(n.value,e.valueKey):n.value,Be=p(()=>k.value.filter(n=>n.visible).every(n=>n.disabled)),pl=p(()=>e.multiple?l.selected.slice(0,e.maxCollapseTags):[]),Se=p(()=>e.multiple?l.selected.slice(e.maxCollapseTags):[]),Ae=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!Be.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=k.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ae(n),K(()=>ue(E.value))}},fl=()=>{l.mouseEnter=!0},qe=()=>{l.mouseEnter=!1},vl=(n,o)=>{var i,d;re(n,o),(d=(i=w.value)==null?void 0:i.updatePopper)==null||d.call(i)},ml=p(()=>({maxWidth:`${m(l.inputWidth)-32-(pe.value?22:0)}px`,width:"100%"}));return{optionList:S,optionsArray:k,hoverOption:E,selectSize:ne,handleResize:xe,debouncedOnInputChange:ll,debouncedQueryChange:nl,deletePrevTag:ol,deleteTag:re,deleteSelected:Pe,handleOptionSelect:ze,scrollToOption:ue,readonly:je,resetInputHeight:H,showClose:Le,iconComponent:Ee,iconReverse:Ge,showNewOption:Je,collapseTagSize:Xe,setSelected:ve,managePlaceholder:ke,selectDisabled:U,emptyText:fe,toggleLastOptionHitState:he,resetInputState:al,handleComposition:sl,onOptionCreate:be,onOptionDestroy:il,handleMenuEnter:rl,handleFocus:ul,focus:de,blur:dl,handleBlur:J,handleClearClick:ge,handleClose:ye,handleKeydownEscape:Ce,toggleMenu:Ke,selectOption:cl,getValueKey:ce,navigateOptions:Ae,handleDeleteTooltipTag:vl,dropMenuVisible:Ye,queryChange:L,groupQueryChange:f,showTagList:pl,collapseTagList:Se,selectTagsStyle:ml,reference:c,input:u,iOSInput:b,tooltipRef:s,tagTooltipRef:w,tags:y,selectWrapper:C,scrollbar:I,handleMouseEnter:fl,handleMouseLeave:qe}};var Nn=se({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:a}){let v=[];function r(c,u){if(c.length!==u.length)return!1;for(const[b]of c.entries())if(c[b]!=u[b])return!1;return!0}return()=>{var c,u;const b=(c=l.default)==null?void 0:c.call(l),s=[];function w(y){Array.isArray(y)&&y.forEach(C=>{var I,E,L,f;const S=(I=(C==null?void 0:C.type)||{})==null?void 0:I.name;S==="ElOptionGroup"?w(!ql(C.children)&&!Array.isArray(C.children)&&ie((E=C.children)==null?void 0:E.default)?(L=C.children)==null?void 0:L.default():C.children):S==="ElOption"?s.push((f=C.props)==null?void 0:f.label):Array.isArray(C.children)&&w(C.children)})}return b.length&&w((u=b[0])==null?void 0:u.children),r(s,v)||(v=s,a("update-options",s)),b}}});const Pl="ElSelect",Rn=se({name:Pl,componentName:Pl,components:{ElInput:tn,ElSelectMenu:qn,ElOption:Tl,ElOptions:Nn,ElTag:$n,ElScrollbar:bn,ElTooltip:fn,ElIcon:gl},directives:{ClickOutside:yn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:an},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:vn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Vl,default:sn},fitInputWidth:Boolean,suffixIcon:{type:Vl,default:rn},tagType:{...Rl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:mn,default:"bottom-start"},ariaLabel:{type:String,default:void 0}},emits:[ee,Wl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const a=ae("select"),v=ae("input"),{t:r}=Il(),c=Bl(),u=Wn(e),{optionList:b,optionsArray:s,hoverOption:w,selectSize:y,readonly:C,handleResize:I,collapseTagSize:E,debouncedOnInputChange:L,debouncedQueryChange:f,deletePrevTag:S,deleteTag:t,deleteSelected:O,handleOptionSelect:G,scrollToOption:je,setSelected:U,resetInputHeight:Le,managePlaceholder:Ee,showClose:Ge,selectDisabled:pe,iconComponent:Me,iconReverse:fe,showNewOption:k,emptyText:Ue,toggleLastOptionHitState:Je,resetInputState:ne,handleComposition:Xe,onOptionCreate:Ye,onOptionDestroy:H,handleMenuEnter:Y,handleFocus:ke,focus:Ve,blur:ve,handleBlur:$e,handleClearClick:Ze,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:oe,handleDeleteTooltipTag:De,dropMenuVisible:ol,reference:re,input:Pe,iOSInput:ze,tooltipRef:me,tagTooltipRef:tl,tags:ue,selectWrapper:be,scrollbar:il,queryChange:al,groupQueryChange:he,handleMouseEnter:sl,handleMouseLeave:rl,showTagList:ul,collapseTagList:de,selectTagsStyle:dl}=Fn(e,u,l),{inputWidth:J,selected:ge,inputLength:ye,filteredOptionsCount:Ce,visible:Ke,selectedLabel:cl,hoverIndex:ce,query:Be,inputHovering:pl,currentPlaceholder:Se,menuVisibleOnFocus:Ae,isOnComposition:fl,options:qe,cachedOptions:vl,optionsCount:ml,prefixWidth:n}=Sl(u),o=p(()=>{const z=[a.b()],te=m(y);return te&&z.push(a.m(te)),e.disabled&&z.push(a.m("disabled")),z}),i=p(()=>[a.e("tags"),a.is("disabled",m(pe))]),d=p(()=>[a.b("tags-wrapper"),{"has-prefix":m(n)&&m(ge).length}]),V=p(()=>[a.e("input"),a.is(m(y)),a.is("disabled",m(pe))]),D=p(()=>[a.e("input"),a.is(m(y)),a.em("input","iOS")]),A=p(()=>[a.is("empty",!e.allowCreate&&!!m(Be)&&m(Ce)===0)]),Q=p(()=>({maxWidth:`${m(J)>123?m(J)-123:m(J)-75}px`})),q=p(()=>({marginLeft:`${m(n)}px`,flexGrow:1,width:`${m(ye)/(m(J)-32)}%`,maxWidth:`${m(J)-42}px`}));Fl(Qe,He({props:e,options:qe,optionsArray:s,cachedOptions:vl,optionsCount:ml,filteredOptionsCount:Ce,hoverIndex:ce,handleOptionSelect:G,onOptionCreate:Ye,onOptionDestroy:H,selectWrapper:be,selected:ge,setSelected:U,queryChange:al,groupQueryChange:he})),wl(()=>{u.cachedPlaceHolder=Se.value=e.placeholder||(()=>r("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Se.value=""),Al(be,I),e.remote&&e.multiple&&Le(),K(()=>{const z=re.value&&re.value.$el;if(z&&(J.value=z.getBoundingClientRect().width,l.slots.prefix)){const te=z.querySelector(`.${v.e("prefix")}`);n.value=Math.max(te.getBoundingClientRect().width+11,30)}}),U()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(ee,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(ee,"");const We=p(()=>{var z,te;return(te=(z=me.value)==null?void 0:z.popperRef)==null?void 0:te.contentRef});return{isIOS:un,onOptionsRendered:z=>{b.value=z},prefixWidth:n,selectSize:y,readonly:C,handleResize:I,collapseTagSize:E,debouncedOnInputChange:L,debouncedQueryChange:f,deletePrevTag:S,deleteTag:t,handleDeleteTooltipTag:De,deleteSelected:O,handleOptionSelect:G,scrollToOption:je,inputWidth:J,selected:ge,inputLength:ye,filteredOptionsCount:Ce,visible:Ke,selectedLabel:cl,hoverIndex:ce,query:Be,inputHovering:pl,currentPlaceholder:Se,menuVisibleOnFocus:Ae,isOnComposition:fl,options:qe,resetInputHeight:Le,managePlaceholder:Ee,showClose:Ge,selectDisabled:pe,iconComponent:Me,iconReverse:fe,showNewOption:k,emptyText:Ue,toggleLastOptionHitState:Je,resetInputState:ne,handleComposition:Xe,handleMenuEnter:Y,handleFocus:ke,focus:Ve,blur:ve,handleBlur:$e,handleClearClick:Ze,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:oe,dropMenuVisible:ol,reference:re,input:Pe,iOSInput:ze,tooltipRef:me,popperPaneRef:We,tags:ue,selectWrapper:be,scrollbar:il,wrapperKls:o,tagsKls:i,tagWrapperKls:d,inputKls:V,iOSInputKls:D,scrollbarKls:A,selectTagsStyle:dl,nsSelect:a,tagTextStyle:Q,inputStyle:q,handleMouseEnter:sl,handleMouseLeave:rl,showTagList:ul,collapseTagList:de,tagTooltipRef:tl,contentId:c,hoverOption:w}}}),Hn=["disabled","autocomplete","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Qn=["disabled"],jn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Gn(e,l,a,v,r,c){const u=Z("el-tag"),b=Z("el-tooltip"),s=Z("el-icon"),w=Z("el-input"),y=Z("el-option"),C=Z("el-options"),I=Z("el-scrollbar"),E=Z("el-select-menu"),L=dn("click-outside");return Ie((h(),$("div",{ref:"selectWrapper",class:g(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...f)=>e.handleMouseEnter&&e.handleMouseEnter(...f)),onMouseleave:l[23]||(l[23]=(...f)=>e.handleMouseLeave&&e.handleMouseLeave(...f)),onClick:l[24]||(l[24]=j((...f)=>e.toggleMenu&&e.toggleMenu(...f),["stop"]))},[x(b,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:T(()=>{var f,S;return[M("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},[e.multiple?(h(),$("div",{key:0,ref:"tags",tabindex:"-1",class:g(e.tagsKls),style:X(e.selectTagsStyle),onClick:l[15]||(l[15]=(...t)=>e.focus&&e.focus(...t))},[e.collapseTags&&e.selected.length?(h(),P(yl,{key:0,onAfterLeave:e.resetInputHeight},{default:T(()=>[M("span",{class:g(e.tagWrapperKls)},[(h(!0),$(Fe,null,hl(e.showTagList,t=>(h(),P(u,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,t)},{default:T(()=>[M("span",{class:g(e.nsSelect.e("tags-text")),style:X(e.tagTextStyle)},_(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(h(),P(u,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:T(()=>[e.collapseTagsTooltip?(h(),P(b,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:T(()=>[M("span",{class:g(e.nsSelect.e("tags-text"))},"+ "+_(e.selected.length-e.maxCollapseTags),3)]),content:T(()=>[M("div",{class:g(e.nsSelect.e("collapse-tags"))},[(h(!0),$(Fe,null,hl(e.collapseTagList,t=>(h(),$("div",{key:e.getValueKey(t),class:g(e.nsSelect.e("collapse-tag"))},[x(u,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:O=>e.handleDeleteTooltipTag(O,t)},{default:T(()=>[M("span",{class:g(e.nsSelect.e("tags-text")),style:X({maxWidth:e.inputWidth-75+"px"})},_(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(h(),$("span",{key:1,class:g(e.nsSelect.e("tags-text"))},"+ "+_(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):W("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):W("v-if",!0),e.collapseTags?W("v-if",!0):(h(),P(yl,{key:1,onAfterLeave:e.resetInputHeight},{default:T(()=>[M("span",{class:g(e.tagWrapperKls),style:X(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(h(!0),$(Fe,null,hl(e.selected,t=>(h(),P(u,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,t)},{default:T(()=>[M("span",{class:g(e.nsSelect.e("tags-text")),style:X({maxWidth:e.inputWidth-75+"px"})},_(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],6)]),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?Ie((h(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:g(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:X(e.inputStyle),role:"combobox","aria-activedescendant":((f=e.hoverOption)==null?void 0:f.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=F(j(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=F(j(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=F((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=F(j((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=F((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=F(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,Hn)),[[cn,e.query]]):W("v-if",!0)],6)):W("v-if",!0),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(h(),$("input",{key:1,ref:"iOSInput",class:g(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Qn)):W("v-if",!0),x(w,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:g([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,role:"combobox","aria-activedescendant":((S=e.hoverOption)==null?void 0:S.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,label:e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=F(j(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=F(j(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),F(j(e.selectOption,["stop","prevent"]),["enter"]),F(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=F(t=>e.visible=!1,["tab"]))]},pn({suffix:T(()=>[e.iconComponent&&!e.showClose?(h(),P(s,{key:0,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:T(()=>[(h(),P($l(e.iconComponent)))]),_:1},8,["class"])):W("v-if",!0),e.showClose&&e.clearIcon?(h(),P(s,{key:1,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:T(()=>[(h(),P($l(e.clearIcon)))]),_:1},8,["class","onClick"])):W("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:T(()=>[M("div",jn,[le(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","aria-activedescendant","aria-controls","aria-expanded","label","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]}),content:T(()=>[x(E,null,{default:T(()=>[Ie(x(I,{id:e.contentId,ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:g(e.scrollbarKls),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:T(()=>[e.showNewOption?(h(),P(y,{key:0,value:e.query,created:!0},null,8,["value"])):W("v-if",!0),x(C,{onUpdateOptions:e.onOptionsRendered},{default:T(()=>[le(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ol,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(h(),$(Fe,{key:0},[e.$slots.empty?le(e.$slots,"empty",{key:0}):(h(),$("p",{key:1,class:g(e.nsSelect.be("dropdown","empty"))},_(e.emptyText),3))],64)):W("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[L,e.handleClose,e.popperPaneRef]])}var Un=Te(Rn,[["render",Gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const Jn=se({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const l=ae("select"),a=B(!0),v=Cl(),r=B([]);Fl(Hl,He({...Sl(e)}));const c=Ne(Qe);wl(()=>{r.value=u(v.subTree)});const u=s=>{const w=[];return Array.isArray(s.children)&&s.children.forEach(y=>{var C;y.type&&y.type.name==="ElOption"&&y.component&&y.component.proxy?w.push(y.component.proxy):(C=y.children)!=null&&C.length&&w.push(...u(y))}),w},{groupQueryChange:b}=Re(c);return R(b,()=>{a.value=r.value.some(s=>s.visible===!0)},{flush:"post"}),{visible:a,ns:l}}});function Xn(e,l,a,v,r,c){return Ie((h(),$("ul",{class:g(e.ns.be("group","wrap"))},[M("li",{class:g(e.ns.be("group","title"))},_(e.label),3),M("li",null,[M("ul",{class:g(e.ns.b("group"))},[le(e.$slots,"default")],2)])],2)),[[Ol,e.visible]])}var Ql=Te(Jn,[["render",Xn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const to=Kl(Un,{Option:Tl,OptionGroup:Ql}),io=Nl(Tl);Nl(Ql);export{io as E,to as a,$n as b,Sn as t};
