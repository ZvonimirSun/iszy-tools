import{C as N,d6 as I,d7 as h,F as S,bF as V,H as $,t as A,m as p,J as a,a0 as l,a1 as d,u as e,L as o,b5 as b,aj as D,a3 as n,ai as u,ar as k,G as C,K as i,T as F,X as P,ap as g,ab as M,P as j,ac as z,_ as G,d8 as H,a7 as J}from"./index-Yw6At5pr.js";const K=["light","dark"],L=N({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:I(h),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:K,default:"light"}}),O={close:r=>r instanceof MouseEvent},X=S({name:"ElAlert"}),_=S({...X,props:L,emits:O,setup(r,{emit:T}){const c=r,{Close:B}=H,f=V(),t=$("alert"),m=A(!0),y=p(()=>h[c.type]),E=p(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!f.default}]),w=p(()=>({[t.is("bold")]:c.description||f.default})),v=s=>{m.value=!1,T("close",s)};return(s,Q)=>(a(),l(z,{name:e(t).b("fade"),persisted:""},{default:d(()=>[j(g("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(y)?(a(),l(e(b),{key:0,class:o(e(E))},{default:d(()=>[(a(),l(D(e(y))))]),_:1},8,["class"])):n("v-if",!0),g("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),e(w)])},[C(s.$slots,"title",{},()=>[k(u(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(a(),i("p",{key:1,class:o(e(t).e("description"))},[C(s.$slots,"default",{},()=>[k(u(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i(F,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:v},u(s.closeText),3)):(a(),l(e(b),{key:1,class:o(e(t).e("close-btn")),onClick:v},{default:d(()=>[P(e(B))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[M,m.value]])]),_:3},8,["name"]))}});var q=G(_,[["__file","alert.vue"]]);const U=J(q);export{U as E};
