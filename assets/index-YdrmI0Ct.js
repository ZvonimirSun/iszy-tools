import{f as re,cd as ne,ce as se,cf as X,cg as Y,c0 as le,c7 as oe,ch as ie,i as ue,C as D,_ as x,F as T,I as J,H as Z,bv as ce,t as d,m as P,v as fe,b9 as N,aa as G,J as L,a0 as H,a1 as Q,u as g,L as O,N as B,ap as k,ab as ve,P as me,ac as de,q as pe,K as V,X as K,T as he,l as be,D as A,bZ as F,w as W,bw as ye,aN as U,E as ge,aE as we,o as Se,aF as _e,G as Ee,aj as ze,a3 as Re,R as Pe,a7 as Ce}from"./index-Yw6At5pr.js";import{s as j}from"./Router-FyJ0Ie4e.js";import{h as Ae}from"./hasIn-gsGgcA6w.js";import{B as Le,r as Oe,G as R}from"./el-scrollbar-vz8xv5bG.js";var Te=1,Me=2;function Ne(e,a,n,r){var o=n.length,c=o,p=!r;if(e==null)return!c;for(e=Object(e);o--;){var u=n[o];if(p&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<c;){u=n[o];var l=u[0],m=e[l],h=u[1];if(p&&u[2]){if(m===void 0&&!(l in e))return!1}else{var s=new re;if(r)var i=r(m,h,l,e,a,s);if(!(i===void 0?j(h,m,Te|Me,r,s):i))return!1}}return!0}function ee(e){return e===e&&!ne(e)}function He(e){for(var a=se(e),n=a.length;n--;){var r=a[n],o=e[r];a[n]=[r,o,ee(o)]}return a}function te(e,a){return function(n){return n==null?!1:n[e]===a&&(a!==void 0||e in Object(n))}}function Be(e){var a=He(e);return a.length==1&&a[0][2]?te(a[0][0],a[0][1]):function(n){return n===e||Ne(n,e,a)}}var ke=1,De=2;function xe(e,a){return X(e)&&ee(a)?te(Y(e),a):function(n){var r=le(n,e);return r===void 0&&r===a?Ae(n,e):j(a,r,ke|De)}}function Ie(e){return function(a){return a==null?void 0:a[e]}}function $e(e){return function(a){return oe(a,e)}}function Ge(e){return X(e)?Ie(Y(e)):$e(e)}function nt(e){return typeof e=="function"?e:e==null?ie:typeof e=="object"?ue(e)?xe(e[0],e[1]):Be(e):Ge(e)}const I=Symbol("scrollbarContextKey"),Ke=D({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Fe="Thumb",We=T({__name:"thumb",props:Ke,setup(e){const a=e,n=J(I),r=Z("scrollbar");n||ce(Fe,"can not inject scrollbar context");const o=d(),c=d(),p=d({}),u=d(!1);let l=!1,m=!1,h=pe?document.onselectstart:null;const s=P(()=>Le[a.vertical?"vertical":"horizontal"]),i=P(()=>Oe({size:a.size,move:a.move,bar:s.value})),b=P(()=>o.value[s.value.offset]**2/n.wrapElement[s.value.scrollSize]/a.ratio/c.value[s.value.offset]),y=v=>{var S;if(v.stopPropagation(),v.ctrlKey||[1,2].includes(v.button))return;(S=window.getSelection())==null||S.removeAllRanges(),E(v);const z=v.currentTarget;z&&(p.value[s.value.axis]=z[s.value.offset]-(v[s.value.client]-z.getBoundingClientRect()[s.value.direction]))},_=v=>{if(!c.value||!o.value||!n.wrapElement)return;const S=Math.abs(v.target.getBoundingClientRect()[s.value.direction]-v[s.value.client]),z=c.value[s.value.offset]/2,M=(S-z)*100*b.value/o.value[s.value.offset];n.wrapElement[s.value.scroll]=M*n.wrapElement[s.value.scrollSize]/100},E=v=>{v.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",w),document.addEventListener("mouseup",f),h=document.onselectstart,document.onselectstart=()=>!1},w=v=>{if(!o.value||!c.value||l===!1)return;const S=p.value[s.value.axis];if(!S)return;const z=(o.value.getBoundingClientRect()[s.value.direction]-v[s.value.client])*-1,M=c.value[s.value.offset]-S,ae=(z-M)*100*b.value/o.value[s.value.offset];n.wrapElement[s.value.scroll]=ae*n.wrapElement[s.value.scrollSize]/100},f=()=>{l=!1,p.value[s.value.axis]=0,document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",f),$(),m&&(u.value=!1)},t=()=>{m=!1,u.value=!!a.size},C=()=>{m=!0,u.value=l};fe(()=>{$(),document.removeEventListener("mouseup",f)});const $=()=>{document.onselectstart!==h&&(document.onselectstart=h)};return N(G(n,"scrollbarElement"),"mousemove",t),N(G(n,"scrollbarElement"),"mouseleave",C),(v,S)=>(L(),H(de,{name:g(r).b("fade"),persisted:""},{default:Q(()=>[me(k("div",{ref_key:"instance",ref:o,class:O([g(r).e("bar"),g(r).is(g(s).key)]),onMousedown:_},[k("div",{ref_key:"thumb",ref:c,class:O(g(r).e("thumb")),style:B(g(i)),onMousedown:y},null,38)],34),[[ve,v.always||u.value]])]),_:1},8,["name"]))}});var q=x(We,[["__file","thumb.vue"]]);const Ue=D({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),qe=T({__name:"bar",props:Ue,setup(e,{expose:a}){const n=e,r=J(I),o=d(0),c=d(0),p=d(""),u=d(""),l=d(1),m=d(1);return a({handleScroll:i=>{if(i){const b=i.offsetHeight-R,y=i.offsetWidth-R;c.value=i.scrollTop*100/b*l.value,o.value=i.scrollLeft*100/y*m.value}},update:()=>{const i=r==null?void 0:r.wrapElement;if(!i)return;const b=i.offsetHeight-R,y=i.offsetWidth-R,_=b**2/i.scrollHeight,E=y**2/i.scrollWidth,w=Math.max(_,n.minSize),f=Math.max(E,n.minSize);l.value=_/(b-_)/(w/(b-w)),m.value=E/(y-E)/(f/(y-f)),u.value=w+R<b?`${w}px`:"",p.value=f+R<y?`${f}px`:""}}),(i,b)=>(L(),V(he,null,[K(q,{move:o.value,ratio:m.value,size:p.value,always:i.always},null,8,["move","ratio","size","always"]),K(q,{move:c.value,ratio:l.value,size:u.value,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Xe=x(qe,[["__file","bar.vue"]]);const Ye=D({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:be([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Je={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(A)},Ze="ElScrollbar",Qe=T({name:Ze}),Ve=T({...Qe,props:Ye,emits:Je,setup(e,{expose:a,emit:n}){const r=e,o=Z("scrollbar");let c,p;const u=d(),l=d(),m=d(),h=d(),s=P(()=>{const t={};return r.height&&(t.height=F(r.height)),r.maxHeight&&(t.maxHeight=F(r.maxHeight)),[r.wrapStyle,t]}),i=P(()=>[r.wrapClass,o.e("wrap"),{[o.em("wrap","hidden-default")]:!r.native}]),b=P(()=>[o.e("view"),r.viewClass]),y=()=>{var t;l.value&&((t=h.value)==null||t.handleScroll(l.value),n("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function _(t,C){Pe(t)?l.value.scrollTo(t):A(t)&&A(C)&&l.value.scrollTo(t,C)}const E=t=>{A(t)&&(l.value.scrollTop=t)},w=t=>{A(t)&&(l.value.scrollLeft=t)},f=()=>{var t;(t=h.value)==null||t.update()};return W(()=>r.noresize,t=>{t?(c==null||c(),p==null||p()):({stop:c}=ye(m,f),p=N("resize",f))},{immediate:!0}),W(()=>[r.maxHeight,r.height],()=>{r.native||U(()=>{var t;f(),l.value&&((t=h.value)==null||t.handleScroll(l.value))})}),ge(I,we({scrollbarElement:u,wrapElement:l})),Se(()=>{r.native||U(()=>{f()})}),_e(()=>f()),a({wrapRef:l,update:f,scrollTo:_,setScrollTop:E,setScrollLeft:w,handleScroll:y}),(t,C)=>(L(),V("div",{ref_key:"scrollbarRef",ref:u,class:O(g(o).b())},[k("div",{ref_key:"wrapRef",ref:l,class:O(g(i)),style:B(g(s)),onScroll:y},[(L(),H(ze(t.tag),{id:t.id,ref_key:"resizeRef",ref:m,class:O(g(b)),style:B(t.viewStyle),role:t.role,"aria-label":t.ariaLabel,"aria-orientation":t.ariaOrientation},{default:Q(()=>[Ee(t.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),t.native?Re("v-if",!0):(L(),H(Xe,{key:0,ref_key:"barRef",ref:h,always:t.always,"min-size":t.minSize},null,8,["always","min-size"]))],2))}});var je=x(Ve,[["__file","scrollbar.vue"]]);const st=Ce(je);export{st as E,nt as a,Ie as b};
