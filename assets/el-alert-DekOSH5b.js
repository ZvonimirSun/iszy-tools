import{h as I,dd as N,de as g,j as w,bh as D,u as V,R as $,k as p,o as a,l,w as d,ah as A,G as h,n as o,m as e,aM as k,s as M,H as n,F as i,r as C,L as b,I as f,X as j,K as F,an as P,aj as z,_ as G,df as H,t as K}from"./index-DZyj1-Eq.js";const L=["light","dark"],O=I({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:N(g),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:L,default:"light"}}),R={close:r=>r instanceof MouseEvent},X=w({name:"ElAlert"}),_=w({...X,props:O,emits:R,setup(r,{emit:S}){const c=r,{Close:E}=H,u=D(),t=V("alert"),m=$(!0),y=p(()=>g[c.type]),B=p(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!u.default}]),T=p(()=>({"with-description":c.description||u.default})),v=s=>{m.value=!1,S("close",s)};return(s,J)=>(a(),l(z,{name:e(t).b("fade"),persisted:""},{default:d(()=>[A(h("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(y)?(a(),l(e(k),{key:0,class:o(e(B))},{default:d(()=>[(a(),l(M(e(y))))]),_:1},8,["class"])):n("v-if",!0),h("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),e(T)])},[C(s.$slots,"title",{},()=>[b(f(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(a(),i("p",{key:1,class:o(e(t).e("description"))},[C(s.$slots,"default",{},()=>[b(f(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i(j,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:v},f(s.closeText),3)):(a(),l(e(k),{key:1,class:o(e(t).e("close-btn")),onClick:v},{default:d(()=>[F(e(E))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[P,m.value]])]),_:3},8,["name"]))}});var q=G(_,[["__file","alert.vue"]]);const U=K(q);export{U as E};