import{g as $,v as j,h as P,a4 as Z,j as q,aa as ee,y as u,k as w,$ as te,aC as x,b9 as U,o as k,c as D,w as F,T as ae,m as W,p as T,n as m,a1 as Y,U as le,aU as se,bY as oe,l as J,a as K,G as re,a5 as ne,as as _,bI as X,D as G,ac as ie,ab as I,an as ue,Y as ce,R as ve,ag as fe,r as me,q as de,s as pe,aM as he,x as be}from"./index.js";import{B as ye,r as ge,G as g}from"./el-scrollbar-e88d9e52.js";const Q=Symbol("scrollbarContextKey"),we=$({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Se="Thumb",ze=P({__name:"thumb",props:we,setup(d){const c=d,i=Z(Q),l=q("scrollbar");i||ee(Se,"can not inject scrollbar context");const n=u(),v=u(),o=u({}),f=u(!1);let a=!1,h=!1,b=oe?document.onselectstart:null;const t=w(()=>ye[c.vertical?"vertical":"horizontal"]),S=w(()=>ge({size:c.size,move:c.move,bar:t.value})),z=w(()=>n.value[t.value.offset]**2/i.wrapElement[t.value.scrollSize]/c.ratio/v.value[t.value.offset]),C=s=>{var e;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(e=window.getSelection())==null||e.removeAllRanges(),M(s);const r=s.currentTarget;r&&(o.value[t.value.axis]=r[t.value.offset]-(s[t.value.client]-r.getBoundingClientRect()[t.value.direction]))},L=s=>{if(!v.value||!n.value||!i.wrapElement)return;const e=Math.abs(s.target.getBoundingClientRect()[t.value.direction]-s[t.value.client]),r=v.value[t.value.offset]/2,p=(e-r)*100*z.value/n.value[t.value.offset];i.wrapElement[t.value.scroll]=p*i.wrapElement[t.value.scrollSize]/100},M=s=>{s.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",H),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},H=s=>{if(!n.value||!v.value||a===!1)return;const e=o.value[t.value.axis];if(!e)return;const r=(n.value.getBoundingClientRect()[t.value.direction]-s[t.value.client])*-1,p=v.value[t.value.offset]-e,E=(r-p)*100*z.value/n.value[t.value.offset];i.wrapElement[t.value.scroll]=E*i.wrapElement[t.value.scrollSize]/100},y=()=>{a=!1,o.value[t.value.axis]=0,document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",y),R(),h&&(f.value=!1)},O=()=>{h=!1,f.value=!!c.size},A=()=>{h=!0,f.value=a};te(()=>{R(),document.removeEventListener("mouseup",y)});const R=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return x(U(i,"scrollbarElement"),"mousemove",O),x(U(i,"scrollbarElement"),"mouseleave",A),(s,e)=>(k(),D(se,{name:m(l).b("fade"),persisted:""},{default:F(()=>[ae(W("div",{ref_key:"instance",ref:n,class:T([m(l).e("bar"),m(l).is(m(t).key)]),onMousedown:L},[W("div",{ref_key:"thumb",ref:v,class:T(m(l).e("thumb")),style:Y(m(S)),onMousedown:C},null,38)],34),[[le,s.always||f.value]])]),_:1},8,["name"]))}});var V=j(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Ee=$({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),_e=P({__name:"bar",props:Ee,setup(d,{expose:c}){const i=d,l=u(0),n=u(0);return c({handleScroll:o=>{if(o){const f=o.offsetHeight-g,a=o.offsetWidth-g;n.value=o.scrollTop*100/f*i.ratioY,l.value=o.scrollLeft*100/a*i.ratioX}}}),(o,f)=>(k(),J(re,null,[K(V,{move:l.value,ratio:o.ratioX,size:o.width,always:o.always},null,8,["move","ratio","size","always"]),K(V,{move:n.value,ratio:o.ratioY,size:o.height,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}});var ke=j(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Te=$({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ne([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Ce={scroll:({scrollTop:d,scrollLeft:c})=>[d,c].every(_)},He="ElScrollbar",Re=P({name:He}),Ne=P({...Re,props:Te,emits:Ce,setup(d,{expose:c,emit:i}){const l=d,n=q("scrollbar");let v,o;const f=u(),a=u(),h=u(),b=u("0"),t=u("0"),S=u(),z=u(1),C=u(1),L=w(()=>{const e={};return l.height&&(e.height=X(l.height)),l.maxHeight&&(e.maxHeight=X(l.maxHeight)),[l.wrapStyle,e]}),M=w(()=>[l.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!l.native}]),H=w(()=>[n.e("view"),l.viewClass]),y=()=>{var e;a.value&&((e=S.value)==null||e.handleScroll(a.value),i("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function O(e,r){he(e)?a.value.scrollTo(e):_(e)&&_(r)&&a.value.scrollTo(e,r)}const A=e=>{_(e)&&(a.value.scrollTop=e)},R=e=>{_(e)&&(a.value.scrollLeft=e)},s=()=>{if(!a.value)return;const e=a.value.offsetHeight-g,r=a.value.offsetWidth-g,p=e**2/a.value.scrollHeight,E=r**2/a.value.scrollWidth,N=Math.max(p,l.minSize),B=Math.max(E,l.minSize);z.value=p/(e-p)/(N/(e-N)),C.value=E/(r-E)/(B/(r-B)),t.value=N+g<e?`${N}px`:"",b.value=B+g<r?`${B}px`:""};return G(()=>l.noresize,e=>{e?(v==null||v(),o==null||o()):({stop:v}=ie(h,s),o=x("resize",s))},{immediate:!0}),G(()=>[l.maxHeight,l.height],()=>{l.native||I(()=>{var e;s(),a.value&&((e=S.value)==null||e.handleScroll(a.value))})}),ue(Q,ce({scrollbarElement:f,wrapElement:a})),ve(()=>{l.native||I(()=>{s()})}),fe(()=>s()),c({wrapRef:a,update:s,scrollTo:O,setScrollTop:A,setScrollLeft:R,handleScroll:y}),(e,r)=>(k(),J("div",{ref_key:"scrollbarRef",ref:f,class:T(m(n).b())},[W("div",{ref_key:"wrapRef",ref:a,class:T(m(M)),style:Y(m(L)),onScroll:y},[(k(),D(de(e.tag),{id:e.id,ref_key:"resizeRef",ref:h,class:T(m(H)),style:Y(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:F(()=>[me(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?pe("v-if",!0):(k(),D(ke,{key:0,ref_key:"barRef",ref:S,height:t.value,width:b.value,always:e.always,"ratio-x":C.value,"ratio-y":z.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Be=j(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Me=be(Be);export{Me as E};
