import{aA as N,d0 as A,d1 as h,D as B,aV as V,J as D,l as I,q as d,o as a,H as l,w as p,t as e,a3 as o,X as k,a2 as $,a4 as n,C as f,z as C,K as b,h as i,F as z,s as F,j as g,B as M,A as P,T as j,N as q,d2 as H,aE as J}from"./index-j7kdK-H8.js";const K=["light","dark"],O=N({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:A(h),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:K,default:"light"}}),X={close:r=>r instanceof MouseEvent},G=B({name:"ElAlert"}),L=B({...G,props:O,emits:X,setup(r,{emit:E}){const c=r,{Close:S}=H,u=V(),t=D("alert"),m=I(!0),y=d(()=>h[c.type]),T=d(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!u.default}]),w=d(()=>({[t.is("bold")]:c.description||u.default})),v=s=>{m.value=!1,E("close",s)};return(s,R)=>(a(),l(j,{name:e(t).b("fade"),persisted:""},{default:p(()=>[P(g("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(y)?(a(),l(e(k),{key:0,class:o(e(T))},{default:p(()=>[(a(),l($(e(y))))]),_:1},8,["class"])):n("v-if",!0),g("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),e(w)])},[b(s.$slots,"title",{},()=>[C(f(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(a(),i("p",{key:1,class:o(e(t).e("description"))},[b(s.$slots,"default",{},()=>[C(f(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i(z,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:v},f(s.closeText),3)):(a(),l(e(k),{key:1,class:o(e(t).e("close-btn")),onClick:v},{default:p(()=>[F(e(S))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[M,m.value]])]),_:3},8,["name"]))}});var Q=q(L,[["__file","alert.vue"]]);const W=J(Q);export{W as E};
