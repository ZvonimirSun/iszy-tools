import{D as N,Q as H,cV as G,bu as R,J as O,A,R as E,a$ as M,aA as P,aF as Y,t as a,o as l,h as f,j as h,F as b,r as C,H as z,s as F,N as T,bO as Z,aC as x,aV as ee,U as te,q as se,a3 as _,K as j,z as K,C as W,a4 as le,aH as ae,aE as ne,aX as re}from"./index-6zGE5DCB.js";const V=Symbol("elDescriptions");var k=N({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup(){return{descriptions:H(V,{})}},render(){var g,o,t,w,n,c,D;const i=G(this.cell),e=(((g=this.cell)==null?void 0:g.dirs)||[]).map(q=>{const{dir:J,arg:L,modifiers:Q,value:X}=q;return[J,X,L,Q]}),{border:d,direction:r}=this.descriptions,s=r==="vertical",v=((w=(t=(o=this.cell)==null?void 0:o.children)==null?void 0:t.label)==null?void 0:w.call(t))||i.label,u=(D=(c=(n=this.cell)==null?void 0:n.children)==null?void 0:c.default)==null?void 0:D.call(c),m=i.span,S=i.align?`is-${i.align}`:"",y=i.labelAlign?`is-${i.labelAlign}`:S,$=i.className,B=i.labelClassName,I={width:R(i.width),minWidth:R(i.minWidth)},p=O("descriptions");switch(this.type){case"label":return A(E(this.tag,{style:I,class:[p.e("cell"),p.e("label"),p.is("bordered-label",d),p.is("vertical-label",s),y,B],colSpan:s?m:1},v),e);case"content":return A(E(this.tag,{style:I,class:[p.e("cell"),p.e("content"),p.is("bordered-content",d),p.is("vertical-content",s),S,$],colSpan:s?m:m*2-1},u),e);default:return A(E("td",{style:I,class:[p.e("cell"),S],colSpan:m},[M(v)?void 0:E("span",{class:[p.e("label"),B]},v),E("span",{class:[p.e("content"),$]},u)]),e)}}});const ie=P({row:{type:Y(Array),default:()=>[]}}),oe={key:1},ce=N({name:"ElDescriptionsRow"}),pe=N({...ce,props:ie,setup(g){const o=H(V,{});return(t,w)=>a(o).direction==="vertical"?(l(),f(b,{key:0},[h("tr",null,[(l(!0),f(b,null,C(t.row,(n,c)=>(l(),z(a(k),{key:`tr1-${c}`,cell:n,tag:"th",type:"label"},null,8,["cell"]))),128))]),h("tr",null,[(l(!0),f(b,null,C(t.row,(n,c)=>(l(),z(a(k),{key:`tr2-${c}`,cell:n,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(l(),f("tr",oe,[(l(!0),f(b,null,C(t.row,(n,c)=>(l(),f(b,{key:`tr3-${c}`},[a(o).border?(l(),f(b,{key:0},[F(a(k),{cell:n,tag:"td",type:"label"},null,8,["cell"]),F(a(k),{cell:n,tag:"td",type:"content"},null,8,["cell"])],64)):(l(),z(a(k),{key:1,cell:n,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var de=T(pe,[["__file","descriptions-row.vue"]]);const ue=P({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:Z,title:{type:String,default:""},extra:{type:String,default:""}}),me=N({name:"ElDescriptions"}),fe=N({...me,props:ue,setup(g){const o=g,t=O("descriptions"),w=x(),n=ee();te(V,o);const c=se(()=>[t.b(),t.m(w.value)]),D=(e,d,r,s=!1)=>(e.props||(e.props={}),d>r&&(e.props.span=r),s&&(e.props.span=d),e),i=()=>{if(!n.default)return[];const e=ae(n.default()).filter(u=>{var m;return((m=u==null?void 0:u.type)==null?void 0:m.name)==="ElDescriptionsItem"}),d=[];let r=[],s=o.column,v=0;return e.forEach((u,m)=>{var S;const y=((S=u.props)==null?void 0:S.span)||1;if(m<e.length-1&&(v+=y>s?s:y),m===e.length-1){const $=o.column-v%o.column;r.push(D(u,$,s,!0)),d.push(r);return}y<s?(s-=y,r.push(u)):(r.push(D(u,y,s)),d.push(r),s=o.column,r=[])}),d};return(e,d)=>(l(),f("div",{class:_(a(c))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(l(),f("div",{key:0,class:_(a(t).e("header"))},[h("div",{class:_(a(t).e("title"))},[j(e.$slots,"title",{},()=>[K(W(e.title),1)])],2),h("div",{class:_(a(t).e("extra"))},[j(e.$slots,"extra",{},()=>[K(W(e.extra),1)])],2)],2)):le("v-if",!0),h("div",{class:_(a(t).e("body"))},[h("table",{class:_([a(t).e("table"),a(t).is("bordered",e.border)])},[h("tbody",null,[(l(!0),f(b,null,C(i(),(r,s)=>(l(),z(de,{key:s,row:r},null,8,["row"]))),128))])],2)],2)],2))}});var ye=T(fe,[["__file","description.vue"]]);const be=P({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}),U=N({name:"ElDescriptionsItem",props:be}),ge=ne(ye,{DescriptionsItem:U}),ve=re(U);export{ve as E,ge as a};