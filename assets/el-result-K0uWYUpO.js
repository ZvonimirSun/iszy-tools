import{dk as b,bf as g,dl as y,dm as C,aB as $,G as m,K as w,s as B,o as l,j as a,k as f,L as i,v as e,I,a4 as t,a3 as S,a5 as c,D as p,O as E,aF as h}from"./index-o_3zfK9D.js";const o={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[o.success]:b,[o.warning]:g,[o.error]:y,[o.info]:C},D=$({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),N=m({name:"ElResult"}),R=m({...N,props:D,setup(v){const _=v,n=w("result"),r=B(()=>{const s=_.icon,u=s&&o[s]?o[s]:"icon-info",k=d[u]||d["icon-info"];return{class:u,component:k}});return(s,u)=>(l(),a("div",{class:t(e(n).b())},[f("div",{class:t(e(n).e("icon"))},[i(s.$slots,"icon",{},()=>[e(r).component?(l(),I(S(e(r).component),{key:0,class:t(e(r).class)},null,8,["class"])):c("v-if",!0)])],2),s.title||s.$slots.title?(l(),a("div",{key:0,class:t(e(n).e("title"))},[i(s.$slots,"title",{},()=>[f("p",null,p(s.title),1)])],2)):c("v-if",!0),s.subTitle||s.$slots["sub-title"]?(l(),a("div",{key:1,class:t(e(n).e("subtitle"))},[i(s.$slots,"sub-title",{},()=>[f("p",null,p(s.subTitle),1)])],2)):c("v-if",!0),s.$slots.extra?(l(),a("div",{key:2,class:t(e(n).e("extra"))},[i(s.$slots,"extra")],2)):c("v-if",!0)],2))}});var T=E(R,[["__file","result.vue"]]);const P=h(T);export{P as E};
