const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hashFile.service-DSR_fTP9.js","assets/index-B6-7D-sG.js","assets/index-B64UzQ7O.js","assets/index-Cso2_8Il.css"])))=>i.map(i=>d[i]);
import{j as R,a$ as U,R as v,k as S,aq as F,aA as G,a8 as O,o as a,F as d,G as s,K as c,w as n,m as e,l as k,X as h,Y as V,W as C,H as y,aj as P,b0 as T,I as q,L as z,as as H,N as J,$ as K}from"./index-B64UzQ7O.js";import{v as X}from"./el-loading-Cs9Uyc_d.js";import{E as Y}from"./el-divider-BgDs0RYf.js";import{E as Q,a as Z}from"./el-checkbox-DY96hLlt.js";import{E as ee}from"./el-upload-DTNEawvM.js";import"./el-progress-BNIX-jwU.js";import{E as oe}from"./el-alert-DNVUAbWC.js";import{f as te}from"./formatBytes-aAslYXQD.js";import{u as le}from"./useCopy-uFtC6b6Z.js";import"./Router-C0aDl8pN.js";function ae(p){return new Worker("/assets/hashFile.worker-DCMSavJV.js",{type:"module",name:p==null?void 0:p.name})}const ne={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","overflow-auto":""},se={"max-w-full":"","w-250":"",flex:"","flex-col":"","gap-4":""},re=s("i",{class:"el-icon--upload i-icon-park-outline-upload-one"},null,-1),ue=s("div",{class:"el-upload__text"},[z(" 将文件拖拽到此处 或 "),s("em",null,"点击选择文件")],-1),ie={key:1},de=s("span",{"w-32":"","select-none":""},"文件名称",-1),ce=s("i",{class:"i-icon-park-outline-copy"},null,-1),pe={flex:"","flex-col":"","gap-4":""},me={"w-32":"","select-none":""},_e=s("i",{class:"i-icon-park-outline-copy"},null,-1),Ce=R({__name:"hashFile",setup(p){const{post:N,data:u,terminate:B}=U(new ae),{copy:x}=le({text:"复制成功"});let m;const _=v([]),t=v(["MD5"]),l=v(""),f=S(()=>l.value?u.value?Object.keys(u.value).length!==t.value.length:!0:!1);F(async()=>{_.value=(await G(async()=>{const{algoNames:r}=await import("./hashFile.service-DSR_fTP9.js");return{algoNames:r}},__vite__mapDeps([0,1,2,3]))).algoNames}),O(()=>{B()});function D(){m=void 0,u.value=void 0,l.value="",t.value.length===0&&(t.value=["MD5"])}function $(r){return m=r,l.value=`${r.name} (类型: ${r.type}, 大小: ${te(r.size)})`,N({value:m,algos:H(t.value)}),!1}return(r,i)=>{const W=oe,j=ee,A=Q,I=Z,b=J,g=K,L=Y,M=X;return a(),d("div",ne,[s("div",se,[c(W,{title:"文件不会被上传",type:"info","show-icon":"",center:""}),c(j,{class:"upload-demo",drag:"",multiple:"","before-upload":$,disabled:e(f),"show-file-list":!1},{default:n(()=>[re,ue]),_:1},8,["disabled"]),e(_)?(a(),k(I,{key:0,modelValue:e(t),"onUpdate:modelValue":i[0]||(i[0]=o=>C(t)?t.value=o:null),disabled:e(f),onChange:D},{default:n(()=>[(a(!0),d(h,null,V(e(_),o=>(a(),k(A,{key:o,label:o},null,8,["label"]))),128))]),_:1},8,["modelValue","disabled"])):y("",!0),e(l)?(a(),d("div",ie,[c(g,{modelValue:e(l),"onUpdate:modelValue":i[2]||(i[2]=o=>C(l)?l.value=o:null),readonly:""},{prepend:n(()=>[de]),append:n(()=>[c(b,{onClick:i[1]||(i[1]=o=>e(x)(e(l)))},{default:n(()=>[ce]),_:1})]),_:1},8,["modelValue"])])):y("",!0),e(t)&&e(l)?(a(),d(h,{key:2},[c(L,{"mb-4":"","mt-4":""}),P((a(),d("div",pe,[(a(!0),d(h,null,V(e(t),o=>{var w,E;return a(),k(g,{key:o,"model-value":(w=e(u))==null?void 0:w[o],readonly:""},T({prepend:n(()=>[s("span",me,q(o),1)]),_:2},[(E=e(u))!=null&&E[o]?{name:"append",fn:n(()=>[c(b,{onClick:fe=>e(x)(e(u)[o])},{default:n(()=>[_e]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1032,["model-value"])}),128))])),[[M,e(f)]])],64)):y("",!0)])])}}});export{Ce as default};