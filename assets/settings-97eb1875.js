import{h as Q,y as _,R as j,a6 as S,D as J,Q as K,o as p,l as i,a as e,w as t,b as m,m as U,n as r,z as k,G as w,H as R,c as E,s as q,A,B as W,E as X,_ as Y}from"./index-7ac1d585.js";import{E as Z,a as ee}from"./el-tab-pane-b898c1a5.js";import{a as oe,E as te}from"./el-form-item-bdd1f35b.js";import{E as le}from"./el-divider-c1edf769.js";import{E as ae,a as ne}from"./el-radio-group-91af0500.js";/* empty css                 */import"./index-46f8c975.js";import{E as se}from"./el-switch-ce14800d.js";import{u as D}from"./index-5efa0e92.js";import{u as h}from"./imgHosting-5746057c.js";import{_ as ue}from"./Title-0c766b15.js";import{_ as re}from"./Text-ff7385d7.js";import"./strings-97c30425.js";import"./castArray-c120884d.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-c0239d53.js";import"./v4-c87ad79c.js";const de={class:"commonConfigPanel"},pe={key:0,class:"configPanel"},me={class:"configTable"},ce={class:"configOperator"},_e=Q({__name:"settings",setup(ie){const x=h(),l=x.commonConfig,I=x.config,N={renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},d=_("standard"),c=_("$url"),u=_("aliyun"),f=_([]);j(()=>{const s=h().uploader;switch(s!=null&&(u.value=s),S(l,S({},N,l)),l.customCopyContent){case"$url":d.value="standard";break;case"![]($url)":d.value="markdown";break;default:d.value="custom",c.value=l.customCopyContent}T()});function F(s){switch(s){case"standard":l.customCopyContent="$url";break;case"markdown":l.customCopyContent="![]($url)";break;case"custom":l.customCopyContent=c.value;break}}J(c,s=>{d.value==="custom"&&(l.customCopyContent=s)});function T(){u.value==="aliyun"&&(f.value=K(D[u.value].config(I(u.value))))}function H(){const s={};for(const o of f.value){if(o.required&&(o.default==null||o.default==="")){A.warning("必填项未填写完整");return}s[o.name]=o.default}h().saveConfig({uploader:u.value,config:s}),A.success("保存成功")}return(s,o)=>{const g=ue,$=se,y=oe,B=re,C=ae,v=W,M=ne,P=le,G=te,L=X,z=Z,O=ee;return p(),i(w,null,[e(g,{level:4},{default:t(()=>[m(" 通用配置 ")]),_:1}),U("div",de,[e(y,{label:"时间戳重命名"},{default:t(()=>[e($,{modelValue:r(l).renameTimeStamp,"onUpdate:modelValue":o[0]||(o[0]=a=>r(l).renameTimeStamp=a)},null,8,["modelValue"])]),_:1}),e(y,{label:"上传后自动复制URL"},{default:t(()=>[e($,{modelValue:r(l).copyUrlAfterUpload,"onUpdate:modelValue":o[1]||(o[1]=a=>r(l).copyUrlAfterUpload=a)},null,8,["modelValue"])]),_:1}),e(g,{level:5},{default:t(()=>[m(" 链接复制格式 ")]),_:1}),e(M,{modelValue:r(d),"onUpdate:modelValue":o[3]||(o[3]=a=>k(d)?d.value=a:null),class:"custom-copy-wrapper",onChange:F},{default:t(()=>[e(C,{label:"standard"},{default:t(()=>[m(" 标准 "),e(B,{code:"",content:"$url"})]),_:1}),e(C,{label:"markdown"},{default:t(()=>[m(" MarkDown "),e(B,{code:"",content:"![]($url)"})]),_:1}),e(C,{label:"custom"},{default:t(()=>[m(" 自定义 "),e(v,{modelValue:r(c),"onUpdate:modelValue":o[2]||(o[2]=a=>k(c)?c.value=a:null),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),e(P),e(g,{level:4},{default:t(()=>[m(" 图床设置 ")]),_:1}),e(O,{modelValue:r(u),"onUpdate:modelValue":o[4]||(o[4]=a=>k(u)?u.value=a:null),type:"card",onTabChange:T},{default:t(()=>[(p(),i(w,null,R(D,(a,b)=>e(z,{key:b,name:b,label:a.name},{default:t(()=>[r(u)===b?(p(),i("div",pe,[U("div",me,[e(G,{"label-position":"top"},{default:t(()=>[(p(!0),i(w,null,R(r(f),n=>(p(),E(y,{key:n.name,label:n.label,required:n.required},{default:t(()=>[n.type==="input"?(p(),E(v,{key:0,modelValue:n.default,"onUpdate:modelValue":V=>n.default=V,"allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):n.type==="password"?(p(),E(v,{key:1,modelValue:n.default,"onUpdate:modelValue":V=>n.default=V,type:"password","allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):q("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),U("div",ce,[e(L,{type:"primary",onClick:H},{default:t(()=>[m(" 保存 ")]),_:1})])])):q("",!0)]),_:2},1032,["name","label"])),64))]),_:1},8,["modelValue"])],64)}}});const Re=Y(_e,[["__scopeId","data-v-b9ad3ef1"]]);export{Re as default};
