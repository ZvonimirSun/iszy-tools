import{j as G,B as _,l as W,a9 as S,q as X,a$ as J,o as c,c as i,b as e,az as a,W as p,a as k,y as r,X as U,F as w,e as q,ay as h,g as N,a8 as A,bv as K,aN as Q,bw as Y,aA as Z,bx as ee,b4 as oe,aO as ae,aB as le,bj as te,bk as ne,ac as ue}from"./vendor-keZiW3mP.js";import{c as se,a as re}from"./ant-design-vue-27QvX385.js";import{u as E,a as F}from"./imgHosting-pSjVHoyj.js";import"./common-S1YgBFb3.js";import"./vanilla-jsoneditor-qva85DqO.js";const de={class:"commonConfigPanel"},ce={key:0,class:"configPanel"},pe={class:"configTable"},me={class:"configOperator"},_e=G({__name:"settings",setup(ie){const x=E(),l=x.commonConfig,I=x.config,R={renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},d=_("standard"),m=_("$url"),s=_("aliyun"),f=_([]);W(()=>{const u=E().uploader;switch(u!=null&&(s.value=u),S(l,S({},R,l)),l.customCopyContent){case"$url":d.value="standard";break;case"![]($url)":d.value="markdown";break;default:d.value="custom",m.value=l.customCopyContent}T()});function D(u){switch(u){case"standard":l.customCopyContent="$url";break;case"markdown":l.customCopyContent="![]($url)";break;case"custom":l.customCopyContent=m.value;break}}X(m,u=>{d.value==="custom"&&(l.customCopyContent=u)});function T(){s.value==="aliyun"&&(f.value=J(F[s.value].config(I(s.value))))}function M(){const u={};for(const o of f.value){if(o.required&&(o.default==null||o.default==="")){A.warning("必填项未填写完整");return}u[o.name]=o.default}E().saveConfig({uploader:s.value,config:u}),A.success("保存成功")}return(u,o)=>{const g=se,$=K,y=Q,B=re,C=Y,b=Z,P=ee,j=oe,H=ae,L=le,O=te,z=ne;return c(),i(w,null,[e(g,{level:4},{default:a(()=>[p(" 通用配置 ")]),_:1}),k("div",de,[e(y,{label:"时间戳重命名"},{default:a(()=>[e($,{modelValue:r(l).renameTimeStamp,"onUpdate:modelValue":o[0]||(o[0]=t=>r(l).renameTimeStamp=t)},null,8,["modelValue"])]),_:1}),e(y,{label:"上传后自动复制URL"},{default:a(()=>[e($,{modelValue:r(l).copyUrlAfterUpload,"onUpdate:modelValue":o[1]||(o[1]=t=>r(l).copyUrlAfterUpload=t)},null,8,["modelValue"])]),_:1}),e(g,{level:5},{default:a(()=>[p(" 链接复制格式 ")]),_:1}),e(P,{modelValue:r(d),"onUpdate:modelValue":o[3]||(o[3]=t=>U(d)?d.value=t:null),class:"custom-copy-wrapper",onChange:D},{default:a(()=>[e(C,{label:"standard"},{default:a(()=>[p(" 标准 "),e(B,{code:"",content:"$url"})]),_:1}),e(C,{label:"markdown"},{default:a(()=>[p(" MarkDown "),e(B,{code:"",content:"![]($url)"})]),_:1}),e(C,{label:"custom"},{default:a(()=>[p(" 自定义 "),e(b,{modelValue:r(m),"onUpdate:modelValue":o[2]||(o[2]=t=>U(m)?m.value=t:null),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),e(j),e(g,{level:4},{default:a(()=>[p(" 图床设置 ")]),_:1}),e(z,{modelValue:r(s),"onUpdate:modelValue":o[4]||(o[4]=t=>U(s)?s.value=t:null),type:"card",onTabChange:T},{default:a(()=>[(c(),i(w,null,q(F,(t,v)=>e(O,{key:v,name:v,label:t.name},{default:a(()=>[r(s)===v?(c(),i("div",ce,[k("div",pe,[e(H,{"label-position":"top"},{default:a(()=>[(c(!0),i(w,null,q(r(f),n=>(c(),h(y,{key:n.name,label:n.label,required:n.required},{default:a(()=>[n.type==="input"?(c(),h(b,{key:0,modelValue:n.default,"onUpdate:modelValue":V=>n.default=V,"allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):n.type==="password"?(c(),h(b,{key:1,modelValue:n.default,"onUpdate:modelValue":V=>n.default=V,type:"password","allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):N("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),k("div",me,[e(L,{type:"primary",onClick:M},{default:a(()=>[p(" 保存 ")]),_:1})])])):N("",!0)]),_:2},1032,["name","label"])),64))]),_:1},8,["modelValue"])],64)}}}),ve=ue(_e,[["__scopeId","data-v-901c86f9"]]);export{ve as default};
