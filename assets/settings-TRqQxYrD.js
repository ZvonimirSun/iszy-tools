import{D as O,l as i,n as Z,m as B,Z as J,aG as K,o as m,h as _,s as e,w as a,z as p,j as U,t as s,v as k,F as w,r as I,H as E,a4 as q,I as D,y as Q,E as W,g as X}from"./index-6zGE5DCB.js";import{E as Y,a as ee}from"./el-tab-pane-TCZRwAaI.js";import{a as oe,E as ae}from"./el-form-item-NN1yQRXH.js";import{E as le}from"./el-divider-8HOkBY8M.js";import{E as te,a as ne}from"./el-radio-group-F0m6ARDN.js";/* empty css                 */import"./index-_kLejrJI.js";import{E as ue}from"./el-switch-8sTS4R4K.js";import{u as F}from"./index-A1bgMebM.js";import{u as h}from"./imgHosting-k55x__mt.js";import{_ as re}from"./Title-0mPfXoKw.js";import{_ as se}from"./Text-fP_eV6c-.js";import"./strings-2kcWSpwp.js";import"./castArray-gABIQ50e.js";import"./isEqual-xESWA3Y_.js";import"./index-N2T5sIdy.js";const de={class:"commonConfigPanel"},me={key:0,class:"configPanel"},pe={class:"configTable"},ce={class:"configOperator"},ie=O({__name:"settings",setup(_e){const T=h(),l=T.commonConfig,N=T.config,R={renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},d=i("standard"),c=i("$url"),r=i("aliyun"),f=i([]);Z(()=>{const u=h().uploader;switch(u!=null&&(r.value=u),B(l,B({},R,l)),l.customCopyContent){case"$url":d.value="standard";break;case"![]($url)":d.value="markdown";break;default:d.value="custom",c.value=l.customCopyContent}x()});function A(u){switch(u){case"standard":l.customCopyContent="$url";break;case"markdown":l.customCopyContent="![]($url)";break;case"custom":l.customCopyContent=c.value;break}}J(c,u=>{d.value==="custom"&&(l.customCopyContent=u)});function x(){r.value==="aliyun"&&(f.value=K(F[r.value].config(N(r.value))))}function H(){const u={};for(const o of f.value){if(o.required&&(o.default==null||o.default==="")){D.warning("必填项未填写完整");return}u[o.name]=o.default}h().saveConfig({uploader:r.value,config:u}),D.success("保存成功")}return(u,o)=>{const g=re,$=ue,y=oe,S=se,C=te,v=Q,M=ne,P=le,G=ae,L=W,j=Y,z=ee;return m(),_(w,null,[e(g,{level:4},{default:a(()=>[p(" 通用配置 ")]),_:1}),U("div",de,[e(y,{label:"时间戳重命名"},{default:a(()=>[e($,{modelValue:s(l).renameTimeStamp,"onUpdate:modelValue":o[0]||(o[0]=t=>s(l).renameTimeStamp=t)},null,8,["modelValue"])]),_:1}),e(y,{label:"上传后自动复制URL"},{default:a(()=>[e($,{modelValue:s(l).copyUrlAfterUpload,"onUpdate:modelValue":o[1]||(o[1]=t=>s(l).copyUrlAfterUpload=t)},null,8,["modelValue"])]),_:1}),e(g,{level:5},{default:a(()=>[p(" 链接复制格式 ")]),_:1}),e(M,{modelValue:s(d),"onUpdate:modelValue":o[3]||(o[3]=t=>k(d)?d.value=t:null),class:"custom-copy-wrapper",onChange:A},{default:a(()=>[e(C,{label:"standard"},{default:a(()=>[p(" 标准 "),e(S,{code:"",content:"$url"})]),_:1}),e(C,{label:"markdown"},{default:a(()=>[p(" MarkDown "),e(S,{code:"",content:"![]($url)"})]),_:1}),e(C,{label:"custom"},{default:a(()=>[p(" 自定义 "),e(v,{modelValue:s(c),"onUpdate:modelValue":o[2]||(o[2]=t=>k(c)?c.value=t:null),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),e(P),e(g,{level:4},{default:a(()=>[p(" 图床设置 ")]),_:1}),e(z,{modelValue:s(r),"onUpdate:modelValue":o[4]||(o[4]=t=>k(r)?r.value=t:null),type:"card",onTabChange:x},{default:a(()=>[(m(),_(w,null,I(F,(t,V)=>e(j,{key:V,name:V,label:t.name},{default:a(()=>[s(r)===V?(m(),_("div",me,[U("div",pe,[e(G,{"label-position":"top"},{default:a(()=>[(m(!0),_(w,null,I(s(f),n=>(m(),E(y,{key:n.name,label:n.label,required:n.required},{default:a(()=>[n.type==="input"?(m(),E(v,{key:0,modelValue:n.default,"onUpdate:modelValue":b=>n.default=b,"allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):n.type==="password"?(m(),E(v,{key:1,modelValue:n.default,"onUpdate:modelValue":b=>n.default=b,type:"password","allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):q("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),U("div",ce,[e(L,{type:"primary",onClick:H},{default:a(()=>[p(" 保存 ")]),_:1})])])):q("",!0)]),_:2},1032,["name","label"])),64))]),_:1},8,["modelValue"])],64)}}}),Be=X(ie,[["__scopeId","data-v-acb91aee"]]);export{Be as default};