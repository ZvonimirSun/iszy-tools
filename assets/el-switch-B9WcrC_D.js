import{h as Q,dq as X,aR as g,v as _,bY as x,bh as N,aE as V,aI as w,z as T,cx as P,cC as B,j as O,bZ as ee,b3 as ae,u as ie,b_ as te,bB as ne,k as d,R as E,bu as se,a7 as F,bL as le,T as oe,o as i,F as v,G as S,m as a,n as u,bk as ce,l as c,w as p,s as b,aM as h,H as r,I as C,K as re,aN as ue,r as M,q as de,Z as ve,_ as fe,al as pe,dr as L,b9 as he,t as me}from"./index-D4tPLX5K.js";const be=Q({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:X},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:_(Function)},id:String,tabindex:{type:[String,Number]},...x(["ariaLabel"])}),ye={[N]:l=>V(l)||w(l)||T(l),[P]:l=>V(l)||w(l)||T(l),[B]:l=>V(l)||w(l)||T(l)},R="ElSwitch",ke=O({name:R}),Ie=O({...ke,props:be,emits:ye,setup(l,{expose:U,emit:f}){const n=l,{formItem:y}=ee(),q=ae(),t=ie("switch"),{inputId:G}=te(n,{formItemContext:y}),k=ne(d(()=>n.loading)),A=E(n.modelValue!==!1),m=E(),H=E(),Z=d(()=>[t.b(),t.m(q.value),t.is("disabled",k.value),t.is("checked",s.value)]),$=d(()=>[t.e("label"),t.em("label","left"),t.is("active",!s.value)]),j=d(()=>[t.e("label"),t.em("label","right"),t.is("active",s.value)]),W=d(()=>({width:se(n.width)}));F(()=>n.modelValue,()=>{A.value=!0});const z=d(()=>A.value?n.modelValue:!1),s=d(()=>z.value===n.activeValue);[n.activeValue,n.inactiveValue].includes(z.value)||(f(N,n.inactiveValue),f(P,n.inactiveValue),f(B,n.inactiveValue)),F(s,e=>{var o;m.value.checked=e,n.validateEvent&&((o=y==null?void 0:y.validate)==null||o.call(y,"change").catch(J=>le()))});const I=()=>{const e=s.value?n.inactiveValue:n.activeValue;f(N,e),f(P,e),f(B,e),pe(()=>{m.value.checked=s.value})},K=()=>{if(k.value)return;const{beforeChange:e}=n;if(!e){I();return}const o=e();[L(o),V(o)].includes(!0)||he(R,"beforeChange must return type `Promise<boolean>` or `boolean`"),L(o)?o.then(D=>{D&&I()}).catch(D=>{}):o&&I()},Y=()=>{var e,o;(o=(e=m.value)==null?void 0:e.focus)==null||o.call(e)};return oe(()=>{m.value.checked=s.value}),U({focus:Y,checked:s}),(e,o)=>(i(),v("div",{class:u(a(Z)),onClick:ve(K,["prevent"])},[S("input",{id:a(G),ref_key:"input",ref:m,class:u(a(t).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(k),"aria-label":e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(k),tabindex:e.tabindex,onChange:I,onKeydown:ce(K,["enter"])},null,42,["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"]),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a($))},[e.inactiveIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},C(e.inactiveText),9,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0),S("span",{ref_key:"core",ref:H,class:u(a(t).e("core")),style:de(a(W))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(t).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(h),{key:0,class:u(a(t).is("icon"))},{default:p(()=>[(i(),c(b(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(t).is("text")),"aria-hidden":!a(s)},C(a(s)?e.activeText:e.inactiveText),11,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0),S("div",{class:u(a(t).e("action"))},[e.loading?(i(),c(a(h),{key:0,class:u(a(t).is("loading"))},{default:p(()=>[re(a(ue))]),_:1},8,["class"])):a(s)?M(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):M(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a(j))},[e.activeIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},C(e.activeText),9,["aria-hidden"])):r("v-if",!0)],2)):r("v-if",!0)],10,["onClick"]))}});var ge=fe(Ie,[["__file","switch.vue"]]);const we=me(ge);export{we as E};
