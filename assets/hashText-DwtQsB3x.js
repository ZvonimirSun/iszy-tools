const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hashText.service-Bh5CJ8w2.js","assets/index-UmiykiiV.js","assets/index-BYYPt2FS.js","assets/index-JCloQ_PT.css"])))=>i.map(i=>d[i]);
import{h as H,b1 as U,_ as D,k as B,R as C,b2 as R,u as A,n as I,aG as T,b3 as P,T as $,a5 as F,q as G,r as v,w as m,s as L,t as O,v as K,x as a,y as M,z as Y,a$ as j,ao as q,ay as X,a6 as Z,E as h,F as w,K as o,G as J,N as S,X as N,W as Q,Y as V,Z as W,L as ee,H as te}from"./index-BYYPt2FS.js";/* empty css               */import{E as le,a as ae}from"./el-select-DqAH5SX9.js";import"./el-popper-BsVAa-qG.js";import{E as ne}from"./el-divider-DjlWHqaO.js";import{u as oe}from"./useCopy-Bttjwt5L.js";import"./index-Dw-R0s4g.js";import"./strings-DXBnrk7y.js";import"./castArray-BPLL3HGV.js";import"./Router-DwfDHa_U.js";import"./_baseIteratee-jefOlSfW.js";import"./index-Bjs45jko.js";import"./index-8vXge_Gi.js";import"./isUndefined-DCTLXrZ8.js";const se=H({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:U,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),re=B({name:"ElText"}),ue=B({...re,props:se,setup(p){const s=p,e=C(),g=R(),r=A("text"),x=I(()=>[r.b(),r.m(s.type),r.m(g.value),r.is("truncated",s.truncated),r.is("line-clamp",!T(s.lineClamp))]),f=P().title,u=()=>{var n,i,b,t,y;if(f)return;let _=!1;const k=((n=e.value)==null?void 0:n.textContent)||"";if(s.truncated){const d=(i=e.value)==null?void 0:i.offsetWidth,c=(b=e.value)==null?void 0:b.scrollWidth;d&&c&&c>d&&(_=!0)}else if(!T(s.lineClamp)){const d=(t=e.value)==null?void 0:t.offsetHeight,c=(y=e.value)==null?void 0:y.scrollHeight;d&&c&&c>d&&(_=!0)}_?e.value.setAttribute("title",k):e.value.removeAttribute("title")};return $(u),F(u),(n,i)=>(v(),G(M(n.tag),{ref_key:"textRef",ref:e,class:K(a(x)),style:O({"-webkit-line-clamp":n.lineClamp})},{default:m(()=>[L(n.$slots,"default")]),_:3},8,["class","style"]))}});var ie=D(ue,[["__file","text.vue"]]);const de=Y(ie);function ce(p){return new Worker("/assets/hashText.worker-DTetY3Gk.js",{type:"module",name:p==null?void 0:p.name})}const me={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","overflow-auto":""},pe={"max-w-full":"","w-250":"",flex:"","flex-col":""},fe={"mb-10":""},_e={"w-32":"","select-none":""},Ne=B({__name:"hashText",setup(p){const{post:s,data:e,terminate:g}=j(new ce),{copy:r}=oe({text:"复制成功"});let x=[];const f=C(""),u=C("Hex"),n=[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64url (base 64 with url safe chars)",value:"Base64url"}];i(),q(async()=>{x=(await X(async()=>{const{algoNames:b}=await import("./hashText.service-Bh5CJ8w2.js");return{algoNames:b}},__vite__mapDeps([0,1,2,3]))).algoNames}),Z(()=>{g()});function i(){s({value:f.value,encoding:u.value})}return(b,t)=>{const y=de,_=Q,k=ne,d=le,c=ae,z=ee;return v(),h("div",me,[w("div",pe,[o(y,{"mb-2":""},{default:m(()=>t[2]||(t[2]=[S(" 待计算的内容 ")])),_:1}),o(_,{modelValue:a(f),"onUpdate:modelValue":t[0]||(t[0]=l=>N(f)?f.value=l:null),autosize:{minRows:3},type:"textarea",autofocus:"",placeholder:"待计算的内容...",onInput:i},null,8,["modelValue"]),a(e)&&a(x)?(v(),h(V,{key:0},[o(k),o(y,{"mb-2":""},{default:m(()=>t[3]||(t[3]=[S(" Digest 编码 ")])),_:1}),w("div",fe,[o(c,{modelValue:a(u),"onUpdate:modelValue":t[1]||(t[1]=l=>N(u)?u.value=l:null),"w-full":"",onChange:i},{default:m(()=>[(v(),h(V,null,W(n,l=>o(d,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),(v(!0),h(V,null,W(a(x),l=>(v(),h("div",{key:l,"mb-4":""},[o(_,{modelValue:a(e)[l],"onUpdate:modelValue":E=>a(e)[l]=E,readonly:""},{prepend:m(()=>[w("span",_e,te(l),1)]),append:m(()=>[o(z,{onClick:E=>a(r)(a(e)[l])},{default:m(()=>t[4]||(t[4]=[w("i",{class:"i-icon-park-outline-copy"},null,-1)])),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))],64)):J("",!0)])])}}});export{Ne as default};
