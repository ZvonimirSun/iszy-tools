import{T as b}from"./Router-wjsfmgt-.js";import{D as R,r as d,k as C,H as i,I as _,V as r,$ as l,aq as c,u as o,Z as f,a1 as p,aw as U,Q as T,ao as z,K as I,a$ as m,be as N,ar as $,az as D,aC as F}from"./index-tHblRTxj.js";import{E as L}from"./el-space-COobc8k7.js";import{E as P}from"./el-upload-B3kE6Q77.js";import"./el-progress-DmbyA6kL.js";const S={class:"wrapper"},W=["src"],A=R({__name:"imageBase64",setup(H){const e=d(""),n=d(),s=d({width:"",height:""}),h=C(()=>e.value&&(e.value.startsWith("http://")||e.value.startsWith("https://")));function w(a){const t=new FileReader;return t.onloadend=()=>{e.value=t.result},t.readAsDataURL(a),!1}async function v(){try{await window.navigator.clipboard.writeText(e.value),m.success("复制成功")}catch(a){m.error(a==null?void 0:a.message)}}async function g(){try{const a=await N.get(e.value,{responseType:"blob"}),t=new FileReader;t.onloadend=()=>{e.value=t.result},t.readAsDataURL(a.data)}catch(a){m.error(a==null?void 0:a.message)}}function y(){n.value&&(s.value.height=`${n.value.naturalHeight}px`,s.value.width=`${n.value.naturalWidth}px`)}return(a,t)=>{const u=$,x=P,k=L,B=D,E=b;return i(),_("div",S,[r(k,null,{default:l(()=>[r(x,{"file-list":[],"show-file-list":!1,accept:"image/*","before-upload":w},{default:l(()=>[r(u,{type:"primary"},{default:l(()=>[c(" 点击上传图片 ")]),_:1})]),_:1}),o(h)?(i(),f(u,{key:0,onClick:g},{default:l(()=>[c(" 转换为Base64 ")]),_:1})):p("",!0),o(e)?(i(),f(u,{key:1,onClick:v},{default:l(()=>[c(" 复制内容 ")]),_:1})):p("",!0)]),_:1}),r(B,{modelValue:o(e),"onUpdate:modelValue":t[0]||(t[0]=V=>U(e)?e.value=V:null),type:"textarea","allow-clear":"",autosize:{minRows:5,maxRows:10},placeholder:"请输入 图片地址 或 Base64格式的图片"},null,8,["modelValue"]),o(e)?(i(),_(T,{key:0},[r(E,{level:4},{default:l(()=>[c(" 预览 ")]),_:1}),z("img",{ref_key:"imgPreview",ref:n,class:"preview",src:o(e),alt:"preview",style:I({width:o(s).width?o(s).width:"",height:o(s).height?o(s).height:""}),onLoad:y},null,44,W)],64)):p("",!0)])}}}),j=F(A,[["__scopeId","data-v-a510d9bd"]]);export{j as default};
