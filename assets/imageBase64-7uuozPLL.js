import{b as V}from"./Router-PHx4o7pj.js";import{F as C,t as p,I as U,m as N,J as i,K as _,X as n,a1 as l,ar as c,u as o,a0 as f,a3 as d,aw as $,T as z,ap as F,N as I,a$ as m,as as T,az as L,aC as P}from"./index-vT3yfe1z.js";import{E as S}from"./el-space-eLSyzYIi.js";import{E as W}from"./el-upload-3X3lp-R5.js";import"./el-progress-bKXeLjPI.js";const A={class:"wrapper"},D=["src"],j=C({__name:"imageBase64",setup(H){const e=p(""),h=U("$axios"),r=p(),s=p({width:"",height:""}),w=N(()=>e.value&&(e.value.startsWith("http://")||e.value.startsWith("https://")));function v(a){const t=new FileReader;return t.onloadend=()=>{e.value=t.result},t.readAsDataURL(a),!1}async function g(){try{await window.navigator.clipboard.writeText(e.value),m.success("复制成功")}catch(a){m.error(a==null?void 0:a.message)}}async function y(){try{const a=await h.get(e.value,{responseType:"blob"}),t=new FileReader;t.onloadend=()=>{e.value=t.result},t.readAsDataURL(a.data)}catch(a){m.error(a==null?void 0:a.message)}}function x(){r.value&&(s.value.height=`${r.value.naturalHeight}px`,s.value.width=`${r.value.naturalWidth}px`)}return(a,t)=>{const u=T,k=W,B=S,E=L,b=V;return i(),_("div",A,[n(B,null,{default:l(()=>[n(k,{"file-list":[],"show-file-list":!1,accept:"image/*","before-upload":v},{default:l(()=>[n(u,{type:"primary"},{default:l(()=>[c(" 点击上传图片 ")]),_:1})]),_:1}),o(w)?(i(),f(u,{key:0,onClick:y},{default:l(()=>[c(" 转换为Base64 ")]),_:1})):d("",!0),o(e)?(i(),f(u,{key:1,onClick:g},{default:l(()=>[c(" 复制内容 ")]),_:1})):d("",!0)]),_:1}),n(E,{modelValue:o(e),"onUpdate:modelValue":t[0]||(t[0]=R=>$(e)?e.value=R:null),type:"textarea","allow-clear":"",autosize:{minRows:5,maxRows:10},placeholder:"请输入 图片地址 或 Base64格式的图片"},null,8,["modelValue"]),o(e)?(i(),_(z,{key:0},[n(b,{level:4},{default:l(()=>[c(" 预览 ")]),_:1}),F("img",{ref_key:"imgPreview",ref:r,class:"preview",src:o(e),alt:"preview",style:I({width:o(s).width?o(s).width:"",height:o(s).height?o(s).height:""}),onLoad:x},null,44,D)],64)):d("",!0)])}}}),G=P(j,[["__scopeId","data-v-134c025b"]]);export{G as default};