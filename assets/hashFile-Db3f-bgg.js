const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hashFile.service-BD-0t4uJ.js","assets/index-udkl0rb4.js","assets/index-Df3kmF7M.js","assets/index-Cso2_8Il.css"])))=>i.map(i=>d[i]);
import{j,aZ as A,R as v,k as S,ao as F,ay as G,a6 as O,o as n,F as d,G as s,K as p,w as r,L as P,m as e,l as k,X as y,Y as C,W as h,H as x,ah as T,a_ as q,I as z,aq as H,N as J,$ as K}from"./index-Df3kmF7M.js";import{v as X}from"./el-loading-D-aI2PzM.js";import{E as Y}from"./el-divider-DmgKHFuK.js";import{E as Z,a as Q}from"./el-checkbox-CEHS4tRA.js";import{E as ee}from"./el-upload-Ca8yVCuf.js";import"./el-progress-cIEmTz7n.js";import{E as oe}from"./el-alert-CulUNuCL.js";import{f as le}from"./formatBytes-aAslYXQD.js";import{u as te}from"./useCopy-C-ykZM0T.js";import"./Router-BtkmO_hc.js";function ae(m){return new Worker("/assets/hashFile.worker-DCMSavJV.js",{type:"module",name:m==null?void 0:m.name})}const ne={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","overflow-auto":""},se={"max-w-full":"","w-250":"",flex:"","flex-col":"","gap-4":""},re={key:1},ue={flex:"","flex-col":"","gap-4":""},ie={"w-32":"","select-none":""},ge=j({__name:"hashFile",setup(m){const{post:N,data:i,terminate:B}=A(new ae),{copy:b}=te({text:"复制成功"});let c;const f=v([]),t=v(["MD5"]),a=v(""),_=S(()=>a.value?i.value?Object.keys(i.value).length!==t.value.length:!0:!1);F(async()=>{f.value=(await G(async()=>{const{algoNames:u}=await import("./hashFile.service-BD-0t4uJ.js");return{algoNames:u}},__vite__mapDeps([0,1,2,3]))).algoNames}),O(()=>{B()});function D(){c=void 0,i.value=void 0,a.value="",t.value.length===0&&(t.value=["MD5"])}function W(u){return c=u,a.value=`${u.name} (类型: ${u.type}, 大小: ${le(u.size)})`,N({value:c,algos:H(t.value)}),!1}return(u,o)=>{const $=oe,I=ee,L=Z,M=Q,g=J,w=K,R=Y,U=X;return n(),d("div",ne,[s("div",se,[p($,{title:"文件不会被上传",type:"info","show-icon":"",center:""}),p(I,{class:"upload-demo",drag:"",multiple:"","before-upload":W,disabled:e(_),"show-file-list":!1},{default:r(()=>o[3]||(o[3]=[s("i",{class:"el-icon--upload i-icon-park-outline-upload-one"},null,-1),s("div",{class:"el-upload__text"},[P(" 将文件拖拽到此处 或 "),s("em",null,"点击选择文件")],-1)])),_:1},8,["disabled"]),e(f)?(n(),k(M,{key:0,modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=l=>h(t)?t.value=l:null),disabled:e(_),onChange:D},{default:r(()=>[(n(!0),d(y,null,C(e(f),l=>(n(),k(L,{key:l,label:l},null,8,["label"]))),128))]),_:1},8,["modelValue","disabled"])):x("",!0),e(a)?(n(),d("div",re,[p(w,{modelValue:e(a),"onUpdate:modelValue":o[2]||(o[2]=l=>h(a)?a.value=l:null),readonly:""},{prepend:r(()=>o[4]||(o[4]=[s("span",{"w-32":"","select-none":""},"文件名称",-1)])),append:r(()=>[p(g,{onClick:o[1]||(o[1]=l=>e(b)(e(a)))},{default:r(()=>o[5]||(o[5]=[s("i",{class:"i-icon-park-outline-copy"},null,-1)])),_:1})]),_:1},8,["modelValue"])])):x("",!0),e(t)&&e(a)?(n(),d(y,{key:2},[p(R,{"mb-4":"","mt-4":""}),T((n(),d("div",ue,[(n(!0),d(y,null,C(e(t),l=>{var E,V;return n(),k(w,{key:l,"model-value":(E=e(i))==null?void 0:E[l],readonly:""},q({prepend:r(()=>[s("span",ie,z(l),1)]),_:2},[(V=e(i))!=null&&V[l]?{name:"append",fn:r(()=>[p(g,{onClick:de=>e(b)(e(i)[l])},{default:r(()=>o[6]||(o[6]=[s("i",{class:"i-icon-park-outline-copy"},null,-1)])),_:2},1032,["onClick"])]),key:"0"}:void 0]),1032,["model-value"])}),128))])),[[U,e(_)]])],64)):x("",!0)])])}}});export{ge as default};
