import"./index-852b4aa9.js";import{p as V,F as u,ac as U,r as C,o as r,s as m,g as n,w as l,h as i,x as o,f,A as p,G as F,M as I,t as N,a9 as z,H as d,E as A,I as L,d as P}from"./index.js";import{E as S}from"./el-space-c7bf86f9.js";import{E as T}from"./el-upload-ef2c41eb.js";import"./el-progress-f764d4bd.js";import{_ as W}from"./Title-7ddcb60e.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-ac423b5b.js";const D={class:"wrapper"},H=["src"],M=V({__name:"imageBase64",setup($){const e=u(""),h=U("$axios"),c=u(),s=u({width:"",height:""}),g=C(()=>e.value&&(e.value.startsWith("http://")||e.value.startsWith("https://")));function v(a){const t=new FileReader;return t.onloadend=()=>{e.value=t.result},t.readAsDataURL(a),!1}async function w(){try{await window.navigator.clipboard.writeText(e.value),d.success("复制成功")}catch(a){d.error(a==null?void 0:a.message)}}async function y(){try{const a=await h.get(e.value,{responseType:"blob"}),t=new FileReader;t.onloadend=()=>{e.value=t.result},t.readAsDataURL(a.data)}catch(a){d.error(a==null?void 0:a.message)}}function x(){s.value.height=c.value.naturalHeight+"px",s.value.width=c.value.naturalWidth+"px"}return(a,t)=>{const _=A,B=T,k=S,E=L,b=W;return r(),m("div",D,[n(k,null,{default:l(()=>[n(B,{"file-list":[],"show-file-list":!1,accept:"image/*","before-upload":v},{default:l(()=>[n(_,{type:"primary"},{default:l(()=>[i(" 点击上传图片 ")]),_:1})]),_:1}),o(g)?(r(),f(_,{key:0,onClick:y},{default:l(()=>[i(" 转换为Base64 ")]),_:1})):p("",!0),o(e)?(r(),f(_,{key:1,onClick:w},{default:l(()=>[i(" 复制内容 ")]),_:1})):p("",!0)]),_:1}),n(E,{modelValue:o(e),"onUpdate:modelValue":t[0]||(t[0]=R=>F(e)?e.value=R:null),type:"textarea","allow-clear":"",autosize:{minRows:5,maxRows:10},placeholder:"请输入 图片地址 或 Base64格式的图片"},null,8,["modelValue"]),o(e)?(r(),m(I,{key:0},[n(b,{level:4},{default:l(()=>[i(" 预览 ")]),_:1}),N("img",{ref_key:"imgPreview",ref:c,class:"preview",src:o(e),alt:"preview",style:z({width:o(s).width?o(s).width:"",height:o(s).height?o(s).height:""}),onLoad:x},null,44,H)],64)):p("",!0)])}}});const Y=P(M,[["__scopeId","data-v-3ba772c0"]]);export{Y as default};
