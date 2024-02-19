import{bm as re,c6 as ne,c7 as se,c8 as J,c9 as X,bI as le,bR as oe,ca as ie,i as ue,aA as D,N as x,D as T,Q as Y,J as Q,aK as ce,l as d,q as P,ag as fe,ab as H,bd as K,o as L,H as N,w as Z,t as g,a3 as O,a5 as B,j as k,B as ve,A as me,T as de,bJ as pe,h as V,s as G,F as he,aF as be,aU as C,bu as U,Z as F,aL as ye,$ as W,U as ge,G as Se,n as we,aa as _e,K as Ee,a2 as ze,a4 as Re,P as Pe,aE as Ae}from"./index-6l7JmGjn.js";import{b as j}from"./isEqual-QHYQE6zg.js";import{h as Ce}from"./hasIn-8DTOdWPL.js";import{B as Le,r as Oe,G as R}from"./el-scrollbar-vz8xv5bG.js";var Te=1,Me=2;function He(e,a,n,r){var o=n.length,c=o,p=!r;if(e==null)return!c;for(e=Object(e);o--;){var u=n[o];if(p&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<c;){u=n[o];var l=u[0],m=e[l],h=u[1];if(p&&u[2]){if(m===void 0&&!(l in e))return!1}else{var s=new re;if(r)var i=r(m,h,l,e,a,s);if(!(i===void 0?j(h,m,Te|Me,r,s):i))return!1}}return!0}function ee(e){return e===e&&!ne(e)}function Ne(e){for(var a=se(e),n=a.length;n--;){var r=a[n],o=e[r];a[n]=[r,o,ee(o)]}return a}function te(e,a){return function(n){return n==null?!1:n[e]===a&&(a!==void 0||e in Object(n))}}function Be(e){var a=Ne(e);return a.length==1&&a[0][2]?te(a[0][0],a[0][1]):function(n){return n===e||He(n,e,a)}}var ke=1,De=2;function xe(e,a){return J(e)&&ee(a)?te(X(e),a):function(n){var r=le(n,e);return r===void 0&&r===a?Ce(n,e):j(a,r,ke|De)}}function $e(e){return function(a){return a==null?void 0:a[e]}}function Ie(e){return function(a){return oe(a,e)}}function Ke(e){return J(e)?$e(X(e)):Ie(e)}function nt(e){return typeof e=="function"?e:e==null?ie:typeof e=="object"?ue(e)?xe(e[0],e[1]):Be(e):Ke(e)}const $=Symbol("scrollbarContextKey"),Ge=D({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Ue="Thumb",Fe=T({__name:"thumb",props:Ge,setup(e){const a=e,n=Y($),r=Q("scrollbar");n||ce(Ue,"can not inject scrollbar context");const o=d(),c=d(),p=d({}),u=d(!1);let l=!1,m=!1,h=pe?document.onselectstart:null;const s=P(()=>Le[a.vertical?"vertical":"horizontal"]),i=P(()=>Oe({size:a.size,move:a.move,bar:s.value})),b=P(()=>o.value[s.value.offset]**2/n.wrapElement[s.value.scrollSize]/a.ratio/c.value[s.value.offset]),y=v=>{var w;if(v.stopPropagation(),v.ctrlKey||[1,2].includes(v.button))return;(w=window.getSelection())==null||w.removeAllRanges(),E(v);const z=v.currentTarget;z&&(p.value[s.value.axis]=z[s.value.offset]-(v[s.value.client]-z.getBoundingClientRect()[s.value.direction]))},_=v=>{if(!c.value||!o.value||!n.wrapElement)return;const w=Math.abs(v.target.getBoundingClientRect()[s.value.direction]-v[s.value.client]),z=c.value[s.value.offset]/2,M=(w-z)*100*b.value/o.value[s.value.offset];n.wrapElement[s.value.scroll]=M*n.wrapElement[s.value.scrollSize]/100},E=v=>{v.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",f),h=document.onselectstart,document.onselectstart=()=>!1},S=v=>{if(!o.value||!c.value||l===!1)return;const w=p.value[s.value.axis];if(!w)return;const z=(o.value.getBoundingClientRect()[s.value.direction]-v[s.value.client])*-1,M=c.value[s.value.offset]-w,ae=(z-M)*100*b.value/o.value[s.value.offset];n.wrapElement[s.value.scroll]=ae*n.wrapElement[s.value.scrollSize]/100},f=()=>{l=!1,p.value[s.value.axis]=0,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",f),I(),m&&(u.value=!1)},t=()=>{m=!1,u.value=!!a.size},A=()=>{m=!0,u.value=l};fe(()=>{I(),document.removeEventListener("mouseup",f)});const I=()=>{document.onselectstart!==h&&(document.onselectstart=h)};return H(K(n,"scrollbarElement"),"mousemove",t),H(K(n,"scrollbarElement"),"mouseleave",A),(v,w)=>(L(),N(de,{name:g(r).b("fade"),persisted:""},{default:Z(()=>[me(k("div",{ref_key:"instance",ref:o,class:O([g(r).e("bar"),g(r).is(g(s).key)]),onMousedown:_},[k("div",{ref_key:"thumb",ref:c,class:O(g(r).e("thumb")),style:B(g(i)),onMousedown:y},null,38)],34),[[ve,v.always||u.value]])]),_:1},8,["name"]))}});var q=x(Fe,[["__file","thumb.vue"]]);const We=D({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),qe=T({__name:"bar",props:We,setup(e,{expose:a}){const n=e,r=Y($),o=d(0),c=d(0),p=d(""),u=d(""),l=d(1),m=d(1);return a({handleScroll:i=>{if(i){const b=i.offsetHeight-R,y=i.offsetWidth-R;c.value=i.scrollTop*100/b*l.value,o.value=i.scrollLeft*100/y*m.value}},update:()=>{const i=r==null?void 0:r.wrapElement;if(!i)return;const b=i.offsetHeight-R,y=i.offsetWidth-R,_=b**2/i.scrollHeight,E=y**2/i.scrollWidth,S=Math.max(_,n.minSize),f=Math.max(E,n.minSize);l.value=_/(b-_)/(S/(b-S)),m.value=E/(y-E)/(f/(y-f)),u.value=S+R<b?`${S}px`:"",p.value=f+R<y?`${f}px`:""}}),(i,b)=>(L(),V(he,null,[G(q,{move:o.value,ratio:m.value,size:p.value,always:i.always},null,8,["move","ratio","size","always"]),G(q,{move:c.value,ratio:l.value,size:u.value,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Je=x(qe,[["__file","bar.vue"]]);const Xe=D({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:be([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Ye={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(C)},Qe="ElScrollbar",Ze=T({name:Qe}),Ve=T({...Ze,props:Xe,emits:Ye,setup(e,{expose:a,emit:n}){const r=e,o=Q("scrollbar");let c,p;const u=d(),l=d(),m=d(),h=d(),s=P(()=>{const t={};return r.height&&(t.height=U(r.height)),r.maxHeight&&(t.maxHeight=U(r.maxHeight)),[r.wrapStyle,t]}),i=P(()=>[r.wrapClass,o.e("wrap"),{[o.em("wrap","hidden-default")]:!r.native}]),b=P(()=>[o.e("view"),r.viewClass]),y=()=>{var t;l.value&&((t=h.value)==null||t.handleScroll(l.value),n("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function _(t,A){Pe(t)?l.value.scrollTo(t):C(t)&&C(A)&&l.value.scrollTo(t,A)}const E=t=>{C(t)&&(l.value.scrollTop=t)},S=t=>{C(t)&&(l.value.scrollLeft=t)},f=()=>{var t;(t=h.value)==null||t.update()};return F(()=>r.noresize,t=>{t?(c==null||c(),p==null||p()):({stop:c}=ye(m,f),p=H("resize",f))},{immediate:!0}),F(()=>[r.maxHeight,r.height],()=>{r.native||W(()=>{var t;f(),l.value&&((t=h.value)==null||t.handleScroll(l.value))})}),ge($,Se({scrollbarElement:u,wrapElement:l})),we(()=>{r.native||W(()=>{f()})}),_e(()=>f()),a({wrapRef:l,update:f,scrollTo:_,setScrollTop:E,setScrollLeft:S,handleScroll:y}),(t,A)=>(L(),V("div",{ref_key:"scrollbarRef",ref:u,class:O(g(o).b())},[k("div",{ref_key:"wrapRef",ref:l,class:O(g(i)),style:B(g(s)),onScroll:y},[(L(),N(ze(t.tag),{id:t.id,ref_key:"resizeRef",ref:m,class:O(g(b)),style:B(t.viewStyle),role:t.role,"aria-label":t.ariaLabel,"aria-orientation":t.ariaOrientation},{default:Z(()=>[Ee(t.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),t.native?Re("v-if",!0):(L(),N(Je,{key:0,ref_key:"barRef",ref:h,always:t.always,"min-size":t.minSize},null,8,["always","min-size"]))],2))}});var je=x(Ve,[["__file","scrollbar.vue"]]);const st=Ae(je);export{st as E,nt as a,$e as b};
