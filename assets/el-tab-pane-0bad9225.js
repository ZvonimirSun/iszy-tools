import{a0 as _e,a7 as Ne,a8 as Ce,g as I,a5 as G,a9 as ne,h as F,a4 as J,aa as Q,j as U,y as T,D as R,$ as Z,ab as le,o as oe,l as re,p as ie,n as k,a1 as Te,v as ce,ac as K,ad as Pe,ae as we,k as M,R as ue,af as Se,a as b,ag as V,ah as $e,ai as Ee,aj as xe,ak as D,al as ke,am as Be,an as Oe,r as de,ao as be,ap as te,aq as Re,ar as ze,as as Ae,at as ae,X as Fe,au as Me,T as Le,U as Ve,s as De,x as Ie,av as Ue}from"./index.js";import{c as O}from"./strings-c6a8f271.js";const Ke=(e,n,v)=>Ne(e.subTree).filter(t=>{var l;return Ce(t)&&((l=t.type)==null?void 0:l.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>v[t]).filter(t=>!!t),je=(e,n)=>{const v={},P=_e([]);return{children:P,addChild:l=>{v[l.uid]=l,P.value=Ke(e,n,v)},removeChild:l=>{delete v[l],P.value=P.value.filter($=>$.uid!==l)}}},j=Symbol("tabsRootContextKey"),qe=I({tabs:{type:G(Array),default:()=>ne([])}}),ve="ElTabBar",He=F({name:ve}),We=F({...He,props:qe,setup(e,{expose:n}){const v=e,P=K(),i=J(j);i||Q(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=U("tabs"),l=T(),$=T(),u=()=>{let f=0,m=0;const d=["top","bottom"].includes(i.props.tabPosition)?"width":"height",o=d==="width"?"x":"y",B=o==="x"?"left":"top";return v.tabs.every(E=>{var S,a;const h=(a=(S=P.parent)==null?void 0:S.refs)==null?void 0:a[`tab-${E.uid}`];if(!h)return!1;if(!E.active)return!0;f=h[`offset${O(B)}`],m=h[`client${O(d)}`];const _=window.getComputedStyle(h);return d==="width"&&(v.tabs.length>1&&(m-=Number.parseFloat(_.paddingLeft)+Number.parseFloat(_.paddingRight)),f+=Number.parseFloat(_.paddingLeft)),!1}),{[d]:`${m}px`,transform:`translate${O(o)}(${f}px)`}},y=()=>$.value=u();return R(()=>v.tabs,async()=>{await Z(),y()},{immediate:!0}),le(l,()=>y()),n({ref:l,update:y}),(f,m)=>(oe(),re("div",{ref_key:"barRef",ref:l,class:ie([k(t).e("active-bar"),k(t).is(k(i).props.tabPosition)]),style:Te($.value)},null,6))}});var Xe=ce(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ye=I({panes:{type:G(Array),default:()=>ne([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ge={tabClick:(e,n,v)=>v instanceof Event,tabRemove:(e,n)=>n instanceof Event},se="ElTabNav",Je=F({name:se,props:Ye,emits:Ge,setup(e,{expose:n,emit:v}){const P=K(),i=J(j);i||Q(se,"<el-tabs><tab-nav /></el-tabs>");const t=U("tabs"),l=Pe(),$=we(),u=T(),y=T(),f=T(),m=T(),d=T(!1),o=T(0),B=T(!1),E=T(!0),S=M(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),a=M(()=>({transform:`translate${S.value==="width"?"X":"Y"}(-${o.value}px)`})),h=()=>{if(!u.value)return;const r=u.value[`offset${O(S.value)}`],c=o.value;if(!c)return;const s=c>r?c-r:0;o.value=s},_=()=>{if(!u.value||!y.value)return;const r=y.value[`offset${O(S.value)}`],c=u.value[`offset${O(S.value)}`],s=o.value;if(r-s<=c)return;const N=r-s>c*2?s+c:r-c;o.value=N},z=async()=>{const r=y.value;if(!d.value||!f.value||!u.value||!r)return;await Z();const c=f.value.querySelector(".is-active");if(!c)return;const s=u.value,N=["top","bottom"].includes(i.props.tabPosition),C=c.getBoundingClientRect(),g=s.getBoundingClientRect(),x=N?r.offsetWidth-g.width:r.offsetHeight-g.height,w=o.value;let p=w;N?(C.left<g.left&&(p=w-(g.left-C.left)),C.right>g.right&&(p=w+C.right-g.right)):(C.top<g.top&&(p=w-(g.top-C.top)),C.bottom>g.bottom&&(p=w+(C.bottom-g.bottom))),p=Math.max(p,0),o.value=Math.min(p,x)},L=()=>{var r;if(!y.value||!u.value)return;e.stretch&&((r=m.value)==null||r.update());const c=y.value[`offset${O(S.value)}`],s=u.value[`offset${O(S.value)}`],N=o.value;s<c?(d.value=d.value||{},d.value.prev=N,d.value.next=N+s<c,c-N<s&&(o.value=c-s)):(d.value=!1,N>0&&(o.value=0))},pe=r=>{const c=r.code,{up:s,down:N,left:C,right:g}=D;if(![s,N,C,g].includes(c))return;const x=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=x.indexOf(r.target);let p;c===C||c===s?w===0?p=x.length-1:p=w-1:w<x.length-1?p=w+1:p=0,x[p].focus({preventScroll:!0}),x[p].click(),ee()},ee=()=>{E.value&&(B.value=!0)},q=()=>B.value=!1;return R(l,r=>{r==="hidden"?E.value=!1:r==="visible"&&setTimeout(()=>E.value=!0,50)}),R($,r=>{r?setTimeout(()=>E.value=!0,50):E.value=!1}),le(f,L),ue(()=>setTimeout(()=>z(),0)),Se(()=>L()),n({scrollToActiveTab:z,removeFocus:q}),R(()=>e.panes,()=>P.update(),{flush:"post",deep:!0}),()=>{const r=d.value?[b("span",{class:[t.e("nav-prev"),t.is("disabled",!d.value.prev)],onClick:h},[b(V,null,{default:()=>[b($e,null,null)]})]),b("span",{class:[t.e("nav-next"),t.is("disabled",!d.value.next)],onClick:_},[b(V,null,{default:()=>[b(Ee,null,null)]})])]:null,c=e.panes.map((s,N)=>{var C,g,x,w;const p=s.uid,H=s.props.disabled,W=(g=(C=s.props.name)!=null?C:s.index)!=null?g:`${N}`,X=!H&&(s.isClosable||e.editable);s.index=`${N}`;const he=X?b(V,{class:"is-icon-close",onClick:A=>v("tabRemove",s,A)},{default:()=>[b(xe,null,null)]}):null,ye=((w=(x=s.slots).label)==null?void 0:w.call(x))||s.props.label,ge=!H&&s.active?0:-1;return b("div",{ref:`tab-${p}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",H),t.is("closable",X),t.is("focus",B.value)],id:`tab-${W}`,key:`tab-${p}`,"aria-controls":`pane-${W}`,role:"tab","aria-selected":s.active,tabindex:ge,onFocus:()=>ee(),onBlur:()=>q(),onClick:A=>{q(),v("tabClick",s,W,A)},onKeydown:A=>{X&&(A.code===D.delete||A.code===D.backspace)&&v("tabRemove",s,A)}},[ye,he])});return b("div",{ref:f,class:[t.e("nav-wrap"),t.is("scrollable",!!d.value),t.is(i.props.tabPosition)]},[r,b("div",{class:t.e("nav-scroll"),ref:u},[b("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:y,style:a.value,role:"tablist",onKeydown:pe},[e.type?null:b(Xe,{ref:m,tabs:[...e.panes]},null),c])])])}}}),Qe=I({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:G(Function),default:()=>!0},stretch:Boolean}),Y=e=>Re(e)||ze(e),Ze={[be]:e=>Y(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>Y(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>Y(e),tabAdd:()=>!0};var et=F({name:"ElTabs",props:Qe,emits:Ze,setup(e,{emit:n,slots:v,expose:P}){var i,t;const l=U("tabs"),{children:$,addChild:u,removeChild:y}=je(K(),"ElTabPane"),f=T(),m=T((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),d=a=>{m.value=a,n(be,a),n("tabChange",a)},o=async a=>{var h,_,z;if(!(m.value===a||te(a)))try{await((h=e.beforeLeave)==null?void 0:h.call(e,a,m.value))!==!1&&(d(a),(z=(_=f.value)==null?void 0:_.removeFocus)==null||z.call(_))}catch{}},B=(a,h,_)=>{a.props.disabled||(o(h),n("tabClick",a,_))},E=(a,h)=>{a.props.disabled||te(a.props.name)||(h.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},S=()=>{n("edit",void 0,"add"),n("tabAdd")};return ke({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!e.activeName)),R(()=>e.activeName,a=>o(a)),R(()=>e.modelValue,a=>o(a)),R(m,async()=>{var a;await Z(),(a=f.value)==null||a.scrollToActiveTab()}),Be(j,{props:e,currentName:m,registerPane:u,unregisterPane:y}),P({currentName:m}),()=>{const a=e.editable||e.addable?b("span",{class:l.e("new-tab"),tabindex:"0",onClick:S,onKeydown:z=>{z.code===D.enter&&S()}},[b(V,{class:l.is("icon-plus")},{default:()=>[b(Oe,null,null)]})]):null,h=b("div",{class:[l.e("header"),l.is(e.tabPosition)]},[a,b(Je,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:$.value,stretch:e.stretch,onTabClick:B,onTabRemove:E},null)]),_=b("div",{class:l.e("content")},[de(v,"default")]);return b("div",{class:[l.b(),l.m(e.tabPosition),{[l.m("card")]:e.type==="card",[l.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[h,_]:[_,h]])}}});const tt=I({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),at=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",st=F({name:fe}),nt=F({...st,props:tt,setup(e){const n=e,v=K(),P=Ae(),i=J(j);i||Q(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=U("tab-pane"),l=T(),$=M(()=>n.closable||i.props.closable),u=ae(()=>{var o;return i.currentName.value===((o=n.name)!=null?o:l.value)}),y=T(u.value),f=M(()=>{var o;return(o=n.name)!=null?o:l.value}),m=ae(()=>!n.lazy||y.value||u.value);R(u,o=>{o&&(y.value=!0)});const d=Fe({uid:v.uid,slots:P,props:n,paneName:f,active:u,index:l,isClosable:$});return ue(()=>{i.registerPane(d)}),Me(()=>{i.unregisterPane(d.uid)}),(o,B)=>k(m)?Le((oe(),re("div",{key:0,id:`pane-${k(f)}`,class:ie(k(t).b()),role:"tabpanel","aria-hidden":!k(u),"aria-labelledby":`tab-${k(f)}`},[de(o.$slots,"default")],10,at)),[[Ve,k(u)]]):De("v-if",!0)}});var me=ce(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const rt=Ie(et,{TabPane:me}),it=Ue(me);export{it as E,rt as a};
