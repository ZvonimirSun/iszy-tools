import{k,cL as O,bt as B,u as Y,ai as V,ag as C,bA as U,l as q,h as R,j as Z,_ as G,E as f,x as p,r as c,F as w,Y as g,Z as P,q as A,K as F,bY as J,b2 as M,bi as Q,n as X,G as x,v as D,s as K,N as L,H as T,b8 as ee,I as te,z as se,b6 as le}from"./index-bx-t8jyU.js";const j=Symbol("elDescriptions");var z=k({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup(){return{descriptions:q(j,{})}},render(){var S;const t=O(this.cell),s=(((S=this.cell)==null?void 0:S.dirs)||[]).map(u=>{const{dir:l,arg:n,modifiers:W,value:v}=u;return[l,v,n,W]}),{border:E,direction:b}=this.descriptions,a=b==="vertical",$=()=>{var u,l,n;return((n=(l=(u=this.cell)==null?void 0:u.children)==null?void 0:l.label)==null?void 0:n.call(l))||t.label},I=()=>{var u,l,n;return(n=(l=(u=this.cell)==null?void 0:u.children)==null?void 0:l.default)==null?void 0:n.call(l)},e=t.span,d=t.rowspan,r=t.align?`is-${t.align}`:"",i=t.labelAlign?`is-${t.labelAlign}`:r,N=t.className,h=t.labelClassName,m=this.type==="label"&&(t.labelWidth||this.descriptions.labelWidth)||t.width,y={width:B(m),minWidth:B(t.minWidth)},o=Y("descriptions");switch(this.type){case"label":return V(C(this.tag,{style:y,class:[o.e("cell"),o.e("label"),o.is("bordered-label",E),o.is("vertical-label",a),i,h],colSpan:a?e:1,rowspan:a?1:d},$()),s);case"content":return V(C(this.tag,{style:y,class:[o.e("cell"),o.e("content"),o.is("bordered-content",E),o.is("vertical-content",a),r,N],colSpan:a?e:e*2-1,rowspan:a?d*2-1:d},I()),s);default:{const u=$(),l={},n=B(t.labelWidth||this.descriptions.labelWidth);return n&&(l.width=n,l.display="inline-block"),V(C("td",{style:y,class:[o.e("cell"),r],colSpan:e,rowspan:d},[U(u)?void 0:C("span",{style:l,class:[o.e("label"),h]},u),C("span",{class:[o.e("content"),N]},I())]),s)}}}});const ne=R({row:{type:Z(Array),default:()=>[]}}),re=k({name:"ElDescriptionsRow"}),ae=k({...re,props:ne,setup(S){const t=q(j,{});return(s,E)=>p(t).direction==="vertical"?(c(),f(g,{key:0},[w("tr",null,[(c(!0),f(g,null,P(s.row,(b,a)=>(c(),A(p(z),{key:`tr1-${a}`,cell:b,tag:"th",type:"label"},null,8,["cell"]))),128))]),w("tr",null,[(c(!0),f(g,null,P(s.row,(b,a)=>(c(),A(p(z),{key:`tr2-${a}`,cell:b,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(c(),f("tr",{key:1},[(c(!0),f(g,null,P(s.row,(b,a)=>(c(),f(g,{key:`tr3-${a}`},[p(t).border?(c(),f(g,{key:0},[F(p(z),{cell:b,tag:"td",type:"label"},null,8,["cell"]),F(p(z),{cell:b,tag:"td",type:"content"},null,8,["cell"])],64)):(c(),A(p(z),{key:1,cell:b,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var ie=G(ae,[["__file","descriptions-row.vue"]]);const oe=R({border:Boolean,column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:J,title:{type:String,default:""},extra:{type:String,default:""},labelWidth:{type:[String,Number],default:""}}),ce=k({name:"ElDescriptions"}),pe=k({...ce,props:oe,setup(S){const t=S,s=Y("descriptions"),E=M(),b=Q();te(j,t);const a=X(()=>[s.b(),s.m(E.value)]),$=(e,d,r,i=!1)=>(e.props||(e.props={}),d>r&&(e.props.span=r),i&&(e.props.span=d),e),I=()=>{if(!b.default)return[];const e=ee(b.default()).filter(m=>{var y;return((y=m==null?void 0:m.type)==null?void 0:y.name)==="ElDescriptionsItem"}),d=[];let r=[],i=t.column,N=0;const h=[];return e.forEach((m,y)=>{var o,u,l;const n=((o=m.props)==null?void 0:o.span)||1,W=((u=m.props)==null?void 0:u.rowspan)||1,v=d.length;if(h[v]||(h[v]=0),W>1)for(let _=1;_<W;_++)h[l=v+_]||(h[l]=0),h[v+_]++,N++;if(h[v]>0&&(i-=h[v],h[v]=0),y<e.length-1&&(N+=n>i?i:n),y===e.length-1){const _=t.column-N%t.column;r.push($(m,_,i,!0)),d.push(r);return}n<i?(i-=n,r.push(m)):(r.push($(m,n,i)),d.push(r),i=t.column,r=[])}),d};return(e,d)=>(c(),f("div",{class:D(p(a))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(c(),f("div",{key:0,class:D(p(s).e("header"))},[w("div",{class:D(p(s).e("title"))},[K(e.$slots,"title",{},()=>[L(T(e.title),1)])],2),w("div",{class:D(p(s).e("extra"))},[K(e.$slots,"extra",{},()=>[L(T(e.extra),1)])],2)],2)):x("v-if",!0),w("div",{class:D(p(s).e("body"))},[w("table",{class:D([p(s).e("table"),p(s).is("bordered",e.border)])},[w("tbody",null,[(c(!0),f(g,null,P(I(),(r,i)=>(c(),A(ie,{key:i,row:r},null,8,["row"]))),128))])],2)],2)],2))}});var de=G(pe,[["__file","description.vue"]]);const ue=R({label:{type:String,default:""},span:{type:Number,default:1},rowspan:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},labelWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}),H=k({name:"ElDescriptionsItem",props:ue}),he=se(de,{DescriptionsItem:H}),me=le(H);export{he as E,me as a};
