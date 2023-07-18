import{h as Q,y as _,R as j,a6 as S,D as J,Q as K,o as p,l as i,a as e,w as l,b as c,m as U,n as r,z as k,H as w,I as R,c as E,s as I,A as q,B as W,E as X,_ as Y}from"./index-8b7a132d.js";import{E as Z,a as ee}from"./el-tab-pane-78ee0c1b.js";import{a as oe,E as le}from"./el-form-item-1833fc6c.js";import{E as te}from"./el-divider-5d755fc2.js";import{E as ae,a as ne}from"./el-radio-group-40be5437.js";import"./index-d70601d2.js";import{E as se}from"./el-switch-fa627a50.js";import{u as A}from"./index-da2fa0f9.js";import{u as h}from"./imgHosting-e065f919.js";import{_ as ue}from"./Title-a5250867.js";import{_ as re}from"./Text-dbd169e9.js";import"./strings-2c79c491.js";import"./castArray-6c2541d8.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-6bda30ff.js";import"./v4-fcc3550a.js";const de={class:"commonConfigPanel"},pe={key:0,class:"configPanel"},ce={class:"configTable"},me={class:"configOperator"},_e=Q({__name:"settings",setup(ie){const x=h(),t=x.commonConfig,D=x.config,N={renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},d=_("standard"),m=_("$url"),u=_("aliyun"),f=_([]);j(()=>{const s=h().uploader;switch(s!=null&&(u.value=s),S(t,S({},N,t)),t.customCopyContent){case"$url":d.value="standard";break;case"![]($url)":d.value="markdown";break;default:d.value="custom",m.value=t.customCopyContent}T()});function F(s){switch(s){case"standard":t.customCopyContent="$url";break;case"markdown":t.customCopyContent="![]($url)";break;case"custom":t.customCopyContent=m.value;break}}J(m,s=>{d.value==="custom"&&(t.customCopyContent=s)});function T(){u.value==="aliyun"&&(f.value=K(A[u.value].config(D(u.value))))}function H(){const s={};for(const o of f.value){if(o.required&&(o.default==null||o.default==="")){q.warning("必填项未填写完整");return}s[o.name]=o.default}h().saveConfig({uploader:u.value,config:s}),q.success("保存成功")}return(s,o)=>{const g=ue,$=se,y=oe,B=re,C=ae,v=W,M=ne,P=te,L=le,z=X,G=Z,O=ee;return p(),i(w,null,[e(g,{level:4},{default:l(()=>[c(" 通用配置 ")]),_:1}),U("div",de,[e(y,{label:"时间戳重命名"},{default:l(()=>[e($,{modelValue:r(t).renameTimeStamp,"onUpdate:modelValue":o[0]||(o[0]=a=>r(t).renameTimeStamp=a)},null,8,["modelValue"])]),_:1}),e(y,{label:"上传后自动复制URL"},{default:l(()=>[e($,{modelValue:r(t).copyUrlAfterUpload,"onUpdate:modelValue":o[1]||(o[1]=a=>r(t).copyUrlAfterUpload=a)},null,8,["modelValue"])]),_:1}),e(g,{level:5},{default:l(()=>[c(" 链接复制格式 ")]),_:1}),e(M,{modelValue:r(d),"onUpdate:modelValue":o[3]||(o[3]=a=>k(d)?d.value=a:null),class:"custom-copy-wrapper",onChange:F},{default:l(()=>[e(C,{label:"standard"},{default:l(()=>[c(" 标准 "),e(B,{code:"",content:"$url"})]),_:1}),e(C,{label:"markdown"},{default:l(()=>[c(" MarkDown "),e(B,{code:"",content:"![]($url)"})]),_:1}),e(C,{label:"custom"},{default:l(()=>[c(" 自定义 "),e(v,{modelValue:r(m),"onUpdate:modelValue":o[2]||(o[2]=a=>k(m)?m.value=a:null),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),e(P),e(g,{level:4},{default:l(()=>[c(" 图床设置 ")]),_:1}),e(O,{modelValue:r(u),"onUpdate:modelValue":o[4]||(o[4]=a=>k(u)?u.value=a:null),type:"card",onTabChange:T},{default:l(()=>[(p(),i(w,null,R(A,(a,b)=>e(G,{key:b,name:b,label:a.name},{default:l(()=>[r(u)===b?(p(),i("div",pe,[U("div",ce,[e(L,{"label-position":"top"},{default:l(()=>[(p(!0),i(w,null,R(r(f),n=>(p(),E(y,{key:n.name,label:n.label,required:n.required},{default:l(()=>[n.type==="input"?(p(),E(v,{key:0,modelValue:n.default,"onUpdate:modelValue":V=>n.default=V,"allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):n.type==="password"?(p(),E(v,{key:1,modelValue:n.default,"onUpdate:modelValue":V=>n.default=V,type:"password","allow-clear":"",placeholder:n.hint},null,8,["modelValue","onUpdate:modelValue","placeholder"])):I("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),U("div",me,[e(z,{type:"primary",onClick:H},{default:l(()=>[c(" 保存 ")]),_:1})])])):I("",!0)]),_:2},1032,["name","label"])),64))]),_:1},8,["modelValue"])],64)}}});const Se=Y(_e,[["__scopeId","data-v-b9ad3ef1"]]);export{Se as default};
