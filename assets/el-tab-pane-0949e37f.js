import{a7 as _e,ad as Ne,ae as Ce,l as I,ac as Z,af as le,n as F,ab as G,ag as Q,p as K,D as C,J as R,ah as ee,ai as oe,o as re,r as ie,x as ce,v as B,a8 as Te,B as ue,aj as U,ak as we,al as Pe,q as M,V as de,am as Se,f as v,an as L,ao as $e,ap as Ee,aq as xe,ar as D,as as Be,at as ke,t as Y,au as Oe,av as be,aw as ae,ax as Re,ay as ze,az as Ae,aA as se,a4 as Fe,aB as Me,Z as Ve,$ as Le,z as De,C as Ie,aC as Ke}from"./index.js";import{c as O}from"./strings-9f65aa13.js";const Ue=(e,n,d)=>Ne(e.subTree).filter(t=>{var l;return Ce(t)&&((l=t.type)==null?void 0:l.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>d[t]).filter(t=>!!t),qe=(e,n)=>{const d={},T=_e([]);return{children:T,addChild:l=>{d[l.uid]=l,T.value=Ue(e,n,d)},removeChild:l=>{delete d[l],T.value=T.value.filter(E=>E.uid!==l)}}},q=Symbol("tabsRootContextKey"),je=I({tabs:{type:Z(Array),default:()=>le([])}}),ve="ElTabBar",He=F({name:ve}),We=F({...He,props:je,setup(e,{expose:n}){const d=e,T=U(),i=G(q);i||Q(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=K("tabs"),l=C(),E=C(),b=()=>{let f=0,m=0;const c=["top","bottom"].includes(i.props.tabPosition)?"width":"height",o=c==="width"?"x":"y",k=o==="x"?"left":"top";return d.tabs.every($=>{var a,P;const g=(P=(a=T.parent)==null?void 0:a.refs)==null?void 0:P[`tab-${$.uid}`];if(!g)return!1;if(!$.active)return!0;f=g[`offset${O(k)}`],m=g[`client${O(c)}`];const S=window.getComputedStyle(g);return c==="width"&&(d.tabs.length>1&&(m-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight)),f+=Number.parseFloat(S.paddingLeft)),!1}),{[c]:`${m}px`,transform:`translate${O(o)}(${f}px)`}},h=()=>E.value=b();return R(()=>d.tabs,async()=>{await ee(),h()},{immediate:!0}),oe(l,()=>h()),n({ref:l,update:h}),(f,m)=>(re(),ie("div",{ref_key:"barRef",ref:l,class:ce([B(t).e("active-bar"),B(t).is(B(i).props.tabPosition)]),style:Te(E.value)},null,6))}});var Je=ue(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Xe=I({panes:{type:Z(Array),default:()=>le([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ye={tabClick:(e,n,d)=>d instanceof Event,tabRemove:(e,n)=>n instanceof Event},ne="ElTabNav",Ze=F({name:ne,props:Xe,emits:Ye,setup(e,{expose:n,emit:d}){const T=U(),i=G(q);i||Q(ne,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),l=we(),E=Pe(),b=C(),h=C(),f=C(),m=C(),c=C(!1),o=C(0),k=C(!1),$=C(!0),a=M(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),P=M(()=>({transform:`translate${a.value==="width"?"X":"Y"}(-${o.value}px)`})),g=()=>{if(!b.value)return;const r=b.value[`offset${O(a.value)}`],u=o.value;if(!u)return;const s=u>r?u-r:0;o.value=s},S=()=>{if(!b.value||!h.value)return;const r=h.value[`offset${O(a.value)}`],u=b.value[`offset${O(a.value)}`],s=o.value;if(r-s<=u)return;const _=r-s>u*2?s+u:r-u;o.value=_},z=async()=>{const r=h.value;if(!c.value||!f.value||!b.value||!r)return;await ee();const u=f.value.querySelector(".is-active");if(!u)return;const s=b.value,_=["top","bottom"].includes(i.props.tabPosition),N=u.getBoundingClientRect(),y=s.getBoundingClientRect(),x=_?r.offsetWidth-y.width:r.offsetHeight-y.height,w=o.value;let p=w;_?(N.left<y.left&&(p=w-(y.left-N.left)),N.right>y.right&&(p=w+N.right-y.right)):(N.top<y.top&&(p=w-(y.top-N.top)),N.bottom>y.bottom&&(p=w+(N.bottom-y.bottom))),p=Math.max(p,0),o.value=Math.min(p,x)},V=()=>{var r;if(!h.value||!b.value)return;e.stretch&&((r=m.value)==null||r.update());const u=h.value[`offset${O(a.value)}`],s=b.value[`offset${O(a.value)}`],_=o.value;s<u?(c.value=c.value||{},c.value.prev=_,c.value.next=_+s<u,u-_<s&&(o.value=u-s)):(c.value=!1,_>0&&(o.value=0))},pe=r=>{const u=r.code,{up:s,down:_,left:N,right:y}=D;if(![s,_,N,y].includes(u))return;const x=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=x.indexOf(r.target);let p;u===N||u===s?w===0?p=x.length-1:p=w-1:w<x.length-1?p=w+1:p=0,x[p].focus({preventScroll:!0}),x[p].click(),te()},te=()=>{$.value&&(k.value=!0)},j=()=>k.value=!1;return R(l,r=>{r==="hidden"?$.value=!1:r==="visible"&&setTimeout(()=>$.value=!0,50)}),R(E,r=>{r?setTimeout(()=>$.value=!0,50):$.value=!1}),oe(f,V),de(()=>setTimeout(()=>z(),0)),Se(()=>V()),n({scrollToActiveTab:z,removeFocus:j}),R(()=>e.panes,()=>T.update(),{flush:"post",deep:!0}),()=>{const r=c.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!c.value.prev)],onClick:g},[v(L,null,{default:()=>[v($e,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!c.value.next)],onClick:S},[v(L,null,{default:()=>[v(Ee,null,null)]})])]:null,u=e.panes.map((s,_)=>{var N,y,x,w;const p=s.uid,H=s.props.disabled,W=(y=(N=s.props.name)!=null?N:s.index)!=null?y:`${_}`,J=!H&&(s.isClosable||e.editable);s.index=`${_}`;const he=J?v(L,{class:"is-icon-close",onClick:A=>d("tabRemove",s,A)},{default:()=>[v(xe,null,null)]}):null,ye=((w=(x=s.slots).label)==null?void 0:w.call(x))||s.props.label,ge=!H&&s.active?0:-1;return v("div",{ref:`tab-${p}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",H),t.is("closable",J),t.is("focus",k.value)],id:`tab-${W}`,key:`tab-${p}`,"aria-controls":`pane-${W}`,role:"tab","aria-selected":s.active,tabindex:ge,onFocus:()=>te(),onBlur:()=>j(),onClick:A=>{j(),d("tabClick",s,W,A)},onKeydown:A=>{J&&(A.code===D.delete||A.code===D.backspace)&&d("tabRemove",s,A)}},[ye,he])});return v("div",{ref:f,class:[t.e("nav-wrap"),t.is("scrollable",!!c.value),t.is(i.props.tabPosition)]},[r,v("div",{class:t.e("nav-scroll"),ref:b},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:h,style:P.value,role:"tablist",onKeydown:pe},[e.type?null:v(Je,{ref:m,tabs:[...e.panes]},null),u])])])}}}),Ge=I({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),X=e=>Re(e)||ze(e),Qe={[be]:e=>X(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>X(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>X(e),tabAdd:()=>!0},et=F({name:"ElTabs",props:Ge,emits:Qe,setup(e,{emit:n,slots:d,expose:T}){var i,t;const l=K("tabs"),{children:E,addChild:b,removeChild:h}=qe(U(),"ElTabPane"),f=C(),m=C((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),c=async(a,P=!1)=>{var g,S,z;if(!(m.value===a||ae(a)))try{await((g=e.beforeLeave)==null?void 0:g.call(e,a,m.value))!==!1&&(m.value=a,P&&(n(be,a),n("tabChange",a)),(z=(S=f.value)==null?void 0:S.removeFocus)==null||z.call(S))}catch{}},o=(a,P,g)=>{a.props.disabled||(c(P,!0),n("tabClick",a,g))},k=(a,P)=>{a.props.disabled||ae(a.props.name)||(P.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},$=()=>{n("edit",void 0,"add"),n("tabAdd")};return Be({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!e.activeName)),R(()=>e.activeName,a=>c(a)),R(()=>e.modelValue,a=>c(a)),R(m,async()=>{var a;await ee(),(a=f.value)==null||a.scrollToActiveTab()}),ke(q,{props:e,currentName:m,registerPane:b,unregisterPane:h}),T({currentName:m}),()=>{const a=d.addIcon,P=e.editable||e.addable?v("span",{class:l.e("new-tab"),tabindex:"0",onClick:$,onKeydown:z=>{z.code===D.enter&&$()}},[a?Y(d,"addIcon"):v(L,{class:l.is("icon-plus")},{default:()=>[v(Oe,null,null)]})]):null,g=v("div",{class:[l.e("header"),l.is(e.tabPosition)]},[P,v(Ze,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:E.value,stretch:e.stretch,onTabClick:o,onTabRemove:k},null)]),S=v("div",{class:l.e("content")},[Y(d,"default")]);return v("div",{class:[l.b(),l.m(e.tabPosition),{[l.m("card")]:e.type==="card",[l.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[g,S]:[S,g]])}}}),tt=I({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),at=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",st=F({name:fe}),nt=F({...st,props:tt,setup(e){const n=e,d=U(),T=Ae(),i=G(q);i||Q(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=K("tab-pane"),l=C(),E=M(()=>n.closable||i.props.closable),b=se(()=>{var o;return i.currentName.value===((o=n.name)!=null?o:l.value)}),h=C(b.value),f=M(()=>{var o;return(o=n.name)!=null?o:l.value}),m=se(()=>!n.lazy||h.value||b.value);R(b,o=>{o&&(h.value=!0)});const c=Fe({uid:d.uid,slots:T,props:n,paneName:f,active:b,index:l,isClosable:E});return de(()=>{i.registerPane(c)}),Me(()=>{i.unregisterPane(c.uid)}),(o,k)=>B(m)?Ve((re(),ie("div",{key:0,id:`pane-${B(f)}`,class:ce(B(t).b()),role:"tabpanel","aria-hidden":!B(b),"aria-labelledby":`tab-${B(f)}`},[Y(o.$slots,"default")],10,at)),[[Le,B(b)]]):De("v-if",!0)}});var me=ue(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const rt=Ie(et,{TabPane:me}),it=Ke(me);export{it as E,rt as a};
