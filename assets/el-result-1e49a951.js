import{d as _,e as y,f as b,i as w,g as C,h as m,j as $,k as h,o as l,l as a,m as p,r as i,n as s,c as S,p as t,q as B,s as c,t as f,v as E,x as I}from"./index-36befa60.js";const n={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[n.success]:_,[n.warning]:y,[n.error]:b,[n.info]:w},R=C({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),N=m({name:"ElResult"}),T=m({...N,props:R,setup(v){const g=v,o=$("result"),r=h(()=>{const e=g.icon,u=e&&n[e]?n[e]:"icon-info",k=d[u]||d["icon-info"];return{class:u,component:k}});return(e,u)=>(l(),a("div",{class:t(s(o).b())},[p("div",{class:t(s(o).e("icon"))},[i(e.$slots,"icon",{},()=>[s(r).component?(l(),S(B(s(r).component),{key:0,class:t(s(r).class)},null,8,["class"])):c("v-if",!0)])],2),e.title||e.$slots.title?(l(),a("div",{key:0,class:t(s(o).e("title"))},[i(e.$slots,"title",{},()=>[p("p",null,f(e.title),1)])],2)):c("v-if",!0),e.subTitle||e.$slots["sub-title"]?(l(),a("div",{key:1,class:t(s(o).e("subtitle"))},[i(e.$slots,"sub-title",{},()=>[p("p",null,f(e.subTitle),1)])],2)):c("v-if",!0),e.$slots.extra?(l(),a("div",{key:2,class:t(s(o).e("extra"))},[i(e.$slots,"extra")],2)):c("v-if",!0)],2))}});var D=E(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const P=I(D);export{P as E};
