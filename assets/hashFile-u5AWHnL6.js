import{F as M,bo as P,t as v,m as R,z as S,a_ as T,aG as j,K as i,ap as s,X as d,a1 as n,u as e,a0 as k,ax as V,a3 as h,T as y,P as F,av as C,aS as G,az as K,J as a,bp as O,ai as X,ar as J,as as q}from"./index-Yw6At5pr.js";import{v as H}from"./el-loading-1D8Eif3X.js";import{E as Q}from"./el-divider-BypUU6x8.js";import{a as Y,E as Z}from"./el-checkbox-c6KRqS-H.js";import{E as ee}from"./el-upload-lhTFTEBw.js";import"./el-progress-OLght3ai.js";import{E as oe}from"./el-alert-dnJsguIu.js";import{f as te}from"./formatBytes-KQaxC_6_.js";import{u as le}from"./useCopy-c55EmC2u.js";import"./Router-FyJ0Ie4e.js";import"./hasIn-gsGgcA6w.js";function ae(p){return new Worker("/assets/hashFile.worker-D_VK-1Xe.js",{type:"module",name:p==null?void 0:p.name})}const ne={"w-full":"","h-full":"","overflow-auto":"",flex:"","flex-col":"","items-center":""},se={"w-250":"","max-w-full":"",flex:"","flex-col":"","gap-4":""},re=s("i",{class:"i-icon-park-outline-upload-one el-icon--upload"},null,-1),ue=s("div",{class:"el-upload__text"},[J(" 将文件拖拽到此处 或 "),s("em",null,"点击选择文件")],-1),ie={key:1},de=s("span",{"w-32":"","select-none":""},"文件名称",-1),ce=s("i",{class:"i-icon-park-outline-copy"},null,-1),pe={flex:"","flex-col":"","gap-4":""},_e={"w-32":"","select-none":""},me=s("i",{class:"i-icon-park-outline-copy"},null,-1),Be=M({__name:"hashFile",setup(p){const{post:B,data:r,terminate:D}=P(new ae),{copy:x}=le({text:"复制成功"});let _;const m=v([]),t=v(["MD5"]),l=v(""),f=R(()=>l.value?r.value?Object.keys(r.value).length!==t.value.length:!0:!1);S(async()=>{m.value=(await T(()=>import("./hashFile.service-WcZgukgC.js"),__vite__mapDeps([0,1,2,3]))).algoNames}),j(()=>{D()});function N(){_=void 0,r.value=void 0,l.value="",t.value.length===0&&(t.value=["MD5"])}function W(c){return _=c,l.value=`${c.name} (类型: ${c.type}, 大小: ${te(c.size)})`,B({value:_,algos:G(t.value)}),!1}return(c,u)=>{const $=oe,U=ee,z=Z,A=Y,b=q,E=K,I=Q,L=H;return a(),i("div",ne,[s("div",se,[d($,{title:"文件不会被上传",type:"info","show-icon":"",center:""}),d(U,{class:"upload-demo",drag:"",multiple:"","before-upload":W,disabled:e(f),"show-file-list":!1},{default:n(()=>[re,ue]),_:1},8,["disabled"]),e(m)?(a(),k(A,{key:0,modelValue:e(t),"onUpdate:modelValue":u[0]||(u[0]=o=>V(t)?t.value=o:null),disabled:e(f),onChange:N},{default:n(()=>[(a(!0),i(y,null,C(e(m),o=>(a(),k(z,{key:o,label:o},null,8,["label"]))),128))]),_:1},8,["modelValue","disabled"])):h("",!0),e(l)?(a(),i("div",ie,[d(E,{modelValue:e(l),"onUpdate:modelValue":u[2]||(u[2]=o=>V(l)?l.value=o:null),readonly:""},{prepend:n(()=>[de]),append:n(()=>[d(b,{onClick:u[1]||(u[1]=o=>e(x)(e(l)))},{default:n(()=>[ce]),_:1})]),_:1},8,["modelValue"])])):h("",!0),e(t)&&e(l)?(a(),i(y,{key:2},[d(I,{"mt-4":"","mb-4":""}),F((a(),i("div",pe,[(a(!0),i(y,null,C(e(t),o=>{var g,w;return a(),k(E,{key:o,"model-value":(g=e(r))==null?void 0:g[o],readonly:""},O({prepend:n(()=>[s("span",_e,X(o),1)]),_:2},[(w=e(r))!=null&&w[o]?{name:"append",fn:n(()=>[d(b,{onClick:fe=>e(x)(e(r)[o])},{default:n(()=>[me]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1032,["model-value"])}),128))])),[[L,e(f)]])],64)):h("",!0)])])}}});export{Be as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/hashFile.service-WcZgukgC.js","assets/index-EJr7162z.js","assets/index-Yw6At5pr.js","assets/index-Z50kJ3jh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
