import{g as c,a5 as p,h as n,j as u,k as v,o as s,l as o,p as i,n as r,r as m,s as f,a1 as y,v as S,x as h}from"./index-ae2f467a.js";const _=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),g=n({name:"ElDivider"}),k=n({...g,props:_,setup(a){const l=a,e=u("divider"),d=v(()=>e.cssVar({"border-style":l.borderStyle}));return(t,P)=>(s(),o("div",{class:i([r(e).b(),r(e).m(t.direction)]),style:y(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(s(),o("div",{key:0,class:i([r(e).e("text"),r(e).is(t.contentPosition)])},[m(t.$slots,"default")],2)):f("v-if",!0)],6))}});var b=S(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const D=h(b);export{D as E};