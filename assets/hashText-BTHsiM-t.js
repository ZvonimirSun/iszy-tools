const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hashText.service-BoAHvMui.js","assets/index-C55o5gC9.js","assets/index-CYDKG0Vj.js","assets/index-C4IV_3vA.css"])))=>i.map(i=>d[i]);
import{h as H,b1 as U,_ as R,k as B,R as C,b2 as A,u as D,n as I,aG as T,b3 as P,T as $,a5 as F,q as L,r as v,w as c,s as O,t as j,v as G,x as a,y as K,z as M,a$ as q,ao as X,ay as Y,a6 as Z,E as h,F as w,K as o,G as J,N as S,X as N,W as Q,Y as V,Z as W,L as ee,H as te}from"./index-CYDKG0Vj.js";/* empty css               */import{E as le,a as ae}from"./el-select-Dxtf5KJP.js";import"./el-popper-DowZ8oU-.js";import{E as ne}from"./el-divider-GPr-f2Jp.js";import{u as oe}from"./useCopy-C3KZbM8W.js";import"./index-CTlk43C1.js";import"./strings-DPTSlBDo.js";import"./castArray-C0nndKXD.js";import"./Router-T3FaHp3l.js";import"./_baseIteratee-DVy7T6la.js";import"./index-BTTb9sln.js";import"./index-CQ2NuwAO.js";import"./isUndefined-DCTLXrZ8.js";const se=H({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:U,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),re=B({name:"ElText"}),ue=B({...re,props:se,setup(p){const s=p,e=C(),g=A(),r=D("text"),x=I(()=>[r.b(),r.m(s.type),r.m(g.value),r.is("truncated",s.truncated),r.is("line-clamp",!T(s.lineClamp))]),f=P().title,u=()=>{var n,i,b,t,y;if(f)return;let _=!1;const k=((n=e.value)==null?void 0:n.textContent)||"";if(s.truncated){const d=(i=e.value)==null?void 0:i.offsetWidth,m=(b=e.value)==null?void 0:b.scrollWidth;d&&m&&m>d&&(_=!0)}else if(!T(s.lineClamp)){const d=(t=e.value)==null?void 0:t.offsetHeight,m=(y=e.value)==null?void 0:y.scrollHeight;d&&m&&m>d&&(_=!0)}_?e.value.setAttribute("title",k):e.value.removeAttribute("title")};return $(u),F(u),(n,i)=>(v(),L(K(n.tag),{ref_key:"textRef",ref:e,class:G(a(x)),style:j({"-webkit-line-clamp":n.lineClamp})},{default:c(()=>[O(n.$slots,"default")]),_:3},8,["class","style"]))}});var ie=R(ue,[["__file","text.vue"]]);const de=M(ie);function me(p){return new Worker("/assets/hashText.worker-r7jdbx5m.js",{type:"module",name:p==null?void 0:p.name})}const ce={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","overflow-auto":""},pe={"max-w-full":"","w-250":"",flex:"","flex-col":""},fe={"mb-10":""},_e={"w-32":"","select-none":""},Ne=B({__name:"hashText",setup(p){const{post:s,data:e,terminate:g}=q(new me),{copy:r}=oe({text:"复制成功"});let x=[];const f=C(""),u=C("Hex"),n=[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64url (base 64 with url safe chars)",value:"Base64url"}];i(),X(async()=>{x=(await Y(async()=>{const{algoNames:b}=await import("./hashText.service-BoAHvMui.js");return{algoNames:b}},__vite__mapDeps([0,1,2,3]))).algoNames}),Z(()=>{g()});function i(){s({value:f.value,encoding:u.value})}return(b,t)=>{const y=de,_=Q,k=ne,d=le,m=ae,z=ee;return v(),h("div",ce,[w("div",pe,[o(y,{"mb-2":""},{default:c(()=>t[2]||(t[2]=[S(" 待计算的内容 ")])),_:1}),o(_,{modelValue:a(f),"onUpdate:modelValue":t[0]||(t[0]=l=>N(f)?f.value=l:null),autosize:{minRows:3},type:"textarea",autofocus:"",placeholder:"待计算的内容...",onInput:i},null,8,["modelValue"]),a(e)&&a(x)?(v(),h(V,{key:0},[o(k),o(y,{"mb-2":""},{default:c(()=>t[3]||(t[3]=[S(" Digest 编码 ")])),_:1}),w("div",fe,[o(m,{modelValue:a(u),"onUpdate:modelValue":t[1]||(t[1]=l=>N(u)?u.value=l:null),"w-full":"",onChange:i},{default:c(()=>[(v(),h(V,null,W(n,l=>o(d,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),(v(!0),h(V,null,W(a(x),l=>(v(),h("div",{key:l,"mb-4":""},[o(_,{modelValue:a(e)[l],"onUpdate:modelValue":E=>a(e)[l]=E,readonly:""},{prepend:c(()=>[w("span",_e,te(l),1)]),append:c(()=>[o(z,{onClick:E=>a(r)(a(e)[l])},{default:c(()=>t[4]||(t[4]=[w("i",{class:"i-icon-park-outline-copy"},null,-1)])),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))],64)):J("",!0)])])}}});export{Ne as default};
