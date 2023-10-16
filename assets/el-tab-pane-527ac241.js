import{a0 as _e,a7 as Ne,a8 as Te,g as I,a5 as J,a9 as le,h as F,a4 as Q,aa as Z,j as U,y as T,D as R,ab as ee,ac as oe,o as re,l as ie,p as ce,n as k,a1 as Ce,v as ue,ad as K,ae as we,af as Pe,k as M,R as de,ag as Se,a as v,ah as V,ai as Ee,aj as $e,ak as xe,al as D,am as ke,an as Be,r as G,ao as Oe,ap as be,aq as ae,ar as Re,as as ze,at as Ae,au as se,Y as Fe,av as Me,T as Le,U as Ve,s as De,x as Ie,aw as Ue}from"./index-4338fe84.js";import{c as O}from"./strings-227a197f.js";const Ke=(e,n,d)=>Ne(e.subTree).filter(t=>{var l;return Te(t)&&((l=t.type)==null?void 0:l.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>d[t]).filter(t=>!!t),je=(e,n)=>{const d={},C=_e([]);return{children:C,addChild:l=>{d[l.uid]=l,C.value=Ke(e,n,d)},removeChild:l=>{delete d[l],C.value=C.value.filter($=>$.uid!==l)}}},j=Symbol("tabsRootContextKey"),qe=I({tabs:{type:J(Array),default:()=>le([])}}),ve="ElTabBar",He=F({name:ve}),We=F({...He,props:qe,setup(e,{expose:n}){const d=e,C=K(),i=Q(j);i||Z(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=U("tabs"),l=T(),$=T(),b=()=>{let f=0,m=0;const c=["top","bottom"].includes(i.props.tabPosition)?"width":"height",o=c==="width"?"x":"y",B=o==="x"?"left":"top";return d.tabs.every(E=>{var a,P;const g=(P=(a=C.parent)==null?void 0:a.refs)==null?void 0:P[`tab-${E.uid}`];if(!g)return!1;if(!E.active)return!0;f=g[`offset${O(B)}`],m=g[`client${O(c)}`];const S=window.getComputedStyle(g);return c==="width"&&(d.tabs.length>1&&(m-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight)),f+=Number.parseFloat(S.paddingLeft)),!1}),{[c]:`${m}px`,transform:`translate${O(o)}(${f}px)`}},h=()=>$.value=b();return R(()=>d.tabs,async()=>{await ee(),h()},{immediate:!0}),oe(l,()=>h()),n({ref:l,update:h}),(f,m)=>(re(),ie("div",{ref_key:"barRef",ref:l,class:ce([k(t).e("active-bar"),k(t).is(k(i).props.tabPosition)]),style:Ce($.value)},null,6))}});var Ye=ue(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Xe=I({panes:{type:J(Array),default:()=>le([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ge={tabClick:(e,n,d)=>d instanceof Event,tabRemove:(e,n)=>n instanceof Event},ne="ElTabNav",Je=F({name:ne,props:Xe,emits:Ge,setup(e,{expose:n,emit:d}){const C=K(),i=Q(j);i||Z(ne,"<el-tabs><tab-nav /></el-tabs>");const t=U("tabs"),l=we(),$=Pe(),b=T(),h=T(),f=T(),m=T(),c=T(!1),o=T(0),B=T(!1),E=T(!0),a=M(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),P=M(()=>({transform:`translate${a.value==="width"?"X":"Y"}(-${o.value}px)`})),g=()=>{if(!b.value)return;const r=b.value[`offset${O(a.value)}`],u=o.value;if(!u)return;const s=u>r?u-r:0;o.value=s},S=()=>{if(!b.value||!h.value)return;const r=h.value[`offset${O(a.value)}`],u=b.value[`offset${O(a.value)}`],s=o.value;if(r-s<=u)return;const _=r-s>u*2?s+u:r-u;o.value=_},z=async()=>{const r=h.value;if(!c.value||!f.value||!b.value||!r)return;await ee();const u=f.value.querySelector(".is-active");if(!u)return;const s=b.value,_=["top","bottom"].includes(i.props.tabPosition),N=u.getBoundingClientRect(),y=s.getBoundingClientRect(),x=_?r.offsetWidth-y.width:r.offsetHeight-y.height,w=o.value;let p=w;_?(N.left<y.left&&(p=w-(y.left-N.left)),N.right>y.right&&(p=w+N.right-y.right)):(N.top<y.top&&(p=w-(y.top-N.top)),N.bottom>y.bottom&&(p=w+(N.bottom-y.bottom))),p=Math.max(p,0),o.value=Math.min(p,x)},L=()=>{var r;if(!h.value||!b.value)return;e.stretch&&((r=m.value)==null||r.update());const u=h.value[`offset${O(a.value)}`],s=b.value[`offset${O(a.value)}`],_=o.value;s<u?(c.value=c.value||{},c.value.prev=_,c.value.next=_+s<u,u-_<s&&(o.value=u-s)):(c.value=!1,_>0&&(o.value=0))},pe=r=>{const u=r.code,{up:s,down:_,left:N,right:y}=D;if(![s,_,N,y].includes(u))return;const x=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=x.indexOf(r.target);let p;u===N||u===s?w===0?p=x.length-1:p=w-1:w<x.length-1?p=w+1:p=0,x[p].focus({preventScroll:!0}),x[p].click(),te()},te=()=>{E.value&&(B.value=!0)},q=()=>B.value=!1;return R(l,r=>{r==="hidden"?E.value=!1:r==="visible"&&setTimeout(()=>E.value=!0,50)}),R($,r=>{r?setTimeout(()=>E.value=!0,50):E.value=!1}),oe(f,L),de(()=>setTimeout(()=>z(),0)),Se(()=>L()),n({scrollToActiveTab:z,removeFocus:q}),R(()=>e.panes,()=>C.update(),{flush:"post",deep:!0}),()=>{const r=c.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!c.value.prev)],onClick:g},[v(V,null,{default:()=>[v(Ee,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!c.value.next)],onClick:S},[v(V,null,{default:()=>[v($e,null,null)]})])]:null,u=e.panes.map((s,_)=>{var N,y,x,w;const p=s.uid,H=s.props.disabled,W=(y=(N=s.props.name)!=null?N:s.index)!=null?y:`${_}`,Y=!H&&(s.isClosable||e.editable);s.index=`${_}`;const he=Y?v(V,{class:"is-icon-close",onClick:A=>d("tabRemove",s,A)},{default:()=>[v(xe,null,null)]}):null,ye=((w=(x=s.slots).label)==null?void 0:w.call(x))||s.props.label,ge=!H&&s.active?0:-1;return v("div",{ref:`tab-${p}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",H),t.is("closable",Y),t.is("focus",B.value)],id:`tab-${W}`,key:`tab-${p}`,"aria-controls":`pane-${W}`,role:"tab","aria-selected":s.active,tabindex:ge,onFocus:()=>te(),onBlur:()=>q(),onClick:A=>{q(),d("tabClick",s,W,A)},onKeydown:A=>{Y&&(A.code===D.delete||A.code===D.backspace)&&d("tabRemove",s,A)}},[ye,he])});return v("div",{ref:f,class:[t.e("nav-wrap"),t.is("scrollable",!!c.value),t.is(i.props.tabPosition)]},[r,v("div",{class:t.e("nav-scroll"),ref:b},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:h,style:P.value,role:"tablist",onKeydown:pe},[e.type?null:v(Ye,{ref:m,tabs:[...e.panes]},null),u])])])}}}),Qe=I({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:J(Function),default:()=>!0},stretch:Boolean}),X=e=>Re(e)||ze(e),Ze={[be]:e=>X(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>X(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>X(e),tabAdd:()=>!0},et=F({name:"ElTabs",props:Qe,emits:Ze,setup(e,{emit:n,slots:d,expose:C}){var i,t;const l=U("tabs"),{children:$,addChild:b,removeChild:h}=je(K(),"ElTabPane"),f=T(),m=T((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),c=async(a,P=!1)=>{var g,S,z;if(!(m.value===a||ae(a)))try{await((g=e.beforeLeave)==null?void 0:g.call(e,a,m.value))!==!1&&(m.value=a,P&&(n(be,a),n("tabChange",a)),(z=(S=f.value)==null?void 0:S.removeFocus)==null||z.call(S))}catch{}},o=(a,P,g)=>{a.props.disabled||(c(P,!0),n("tabClick",a,g))},B=(a,P)=>{a.props.disabled||ae(a.props.name)||(P.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},E=()=>{n("edit",void 0,"add"),n("tabAdd")};return ke({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!e.activeName)),R(()=>e.activeName,a=>c(a)),R(()=>e.modelValue,a=>c(a)),R(m,async()=>{var a;await ee(),(a=f.value)==null||a.scrollToActiveTab()}),Be(j,{props:e,currentName:m,registerPane:b,unregisterPane:h}),C({currentName:m}),()=>{const a=d.addIcon,P=e.editable||e.addable?v("span",{class:l.e("new-tab"),tabindex:"0",onClick:E,onKeydown:z=>{z.code===D.enter&&E()}},[a?G(d,"addIcon"):v(V,{class:l.is("icon-plus")},{default:()=>[v(Oe,null,null)]})]):null,g=v("div",{class:[l.e("header"),l.is(e.tabPosition)]},[P,v(Je,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:$.value,stretch:e.stretch,onTabClick:o,onTabRemove:B},null)]),S=v("div",{class:l.e("content")},[G(d,"default")]);return v("div",{class:[l.b(),l.m(e.tabPosition),{[l.m("card")]:e.type==="card",[l.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[g,S]:[S,g]])}}}),tt=I({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),at=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",st=F({name:fe}),nt=F({...st,props:tt,setup(e){const n=e,d=K(),C=Ae(),i=Q(j);i||Z(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=U("tab-pane"),l=T(),$=M(()=>n.closable||i.props.closable),b=se(()=>{var o;return i.currentName.value===((o=n.name)!=null?o:l.value)}),h=T(b.value),f=M(()=>{var o;return(o=n.name)!=null?o:l.value}),m=se(()=>!n.lazy||h.value||b.value);R(b,o=>{o&&(h.value=!0)});const c=Fe({uid:d.uid,slots:C,props:n,paneName:f,active:b,index:l,isClosable:$});return de(()=>{i.registerPane(c)}),Me(()=>{i.unregisterPane(c.uid)}),(o,B)=>k(m)?Le((re(),ie("div",{key:0,id:`pane-${k(f)}`,class:ce(k(t).b()),role:"tabpanel","aria-hidden":!k(b),"aria-labelledby":`tab-${k(f)}`},[G(o.$slots,"default")],10,at)),[[Ve,k(b)]]):De("v-if",!0)}});var me=ue(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const rt=Ie(et,{TabPane:me}),it=Ue(me);export{it as E,rt as a};
