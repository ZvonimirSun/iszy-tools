import{d as G,r as i,H as J,cc as x,p as Q,a0 as W,o as p,L as d,a as e,w as t,b as _,M as k,k as s,l as U,F as b,U as T,c as h,a1 as S,c2 as N,N as X,cd as Y,I as Z,B as ee,_ as oe}from"./index.90f5032a.js";import{_ as te,T as ne}from"./index.e4371e38.js";/* empty css              *//* empty css               */import{_ as ae}from"./index.24d5b188.js";import{R as ue,_ as le}from"./index.83e58dff.js";import{_ as re}from"./index.3f42e919.js";import{u as q}from"./index.23fea1a0.js";import{u as w}from"./imgHosting.6ee39fdc.js";import{_ as se}from"./Password.e8bed401.js";import"./index.3e4be8f9.js";import{_ as ce,F as pe}from"./Form.27a73f78.js";import"./index.d6d0f062.js";import"./Menu.75931fc2.js";import"./shallowequal.e1fa1a00.js";import"./_arrayIncludesWith.15e56e3a.js";import"./Overflow.6e996dbb.js";import"./collapseMotion.f3aeeb33.js";import"./useState.e7186d5e.js";import"./useRefs.f61b7c85.js";import"./_baseGet.b363a9de.js";import"./toString.515e9072.js";import"./_arrayMap.dc1f124f.js";import"./_flatRest.a1f05edd.js";import"./isMobile.481c1aec.js";import"./Checkbox.e9de8cb4.js";import"./v4.0e237c76.js";import"./EyeOutlined.8487eeda.js";import"./SearchOutlined.275b010b.js";import"./Col.1f632adf.js";import"./responsiveObserve.b057c2c3.js";import"./useFlexGapSupport.a1ac5c07.js";import"./toArray.3d58d565.js";import"./get.87de599b.js";import"./toInteger.b3d61924.js";import"./toFinite.7cc9644f.js";const _e={class:"commonConfigPanel"},me={key:0,class:"configPanel"},ie={class:"configTable"},de={class:"configOperator"},fe=G({__name:"settings",setup(ve){const F=w(),n=F.commonConfig,I=F.config,R={renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},c=i("standard"),m=i("$url"),r=i("aliyun"),f=i([]);J(()=>{const l=w().uploader;switch(l!=null&&(r.value=l),x(n,x({},R,n)),n.customCopyContent){case"$url":c.value="standard";break;case"![]($url)":c.value="markdown";break;default:c.value="custom",m.value=n.customCopyContent}B()});function V(l){switch(l.target.value){case"standard":n.customCopyContent="$url";break;case"markdown":n.customCopyContent="![]($url)";break;case"custom":n.customCopyContent=m.value;break}}Q(m,l=>{c.value==="custom"&&(n.customCopyContent=l)});function B(){r.value==="aliyun"&&(f.value=W(q[r.value].config(I(r.value))))}function H(){const l={};for(const o of f.value){if(o.required&&(o.default==null||o.default==="")){N.warn("\u5FC5\u586B\u9879\u672A\u586B\u5199\u5B8C\u6574");return}l[o.name]=o.default}w().saveConfig({uploader:r.value,config:l}),N.success("\u4FDD\u5B58\u6210\u529F")}return(l,o)=>{const v=X,$=re,g=ce,A=Y,y=ue,D=Z,K=le,L=ae,M=se,P=pe,O=ee,j=te,z=ne;return p(),d(b,null,[e(v,{level:4},{default:t(()=>[_(" \u901A\u7528\u914D\u7F6E ")]),_:1}),k("div",_e,[e(g,{label:"\u65F6\u95F4\u6233\u91CD\u547D\u540D"},{default:t(()=>[e($,{checked:s(n).renameTimeStamp,"onUpdate:checked":o[0]||(o[0]=a=>s(n).renameTimeStamp=a)},null,8,["checked"])]),_:1}),e(g,{label:"\u4E0A\u4F20\u540E\u81EA\u52A8\u590D\u5236URL"},{default:t(()=>[e($,{checked:s(n).copyUrlAfterUpload,"onUpdate:checked":o[1]||(o[1]=a=>s(n).copyUrlAfterUpload=a)},null,8,["checked"])]),_:1}),e(v,{level:5},{default:t(()=>[_(" \u94FE\u63A5\u590D\u5236\u683C\u5F0F ")]),_:1}),e(K,{value:s(c),"onUpdate:value":o[3]||(o[3]=a=>U(c)?c.value=a:null),class:"custom-copy-wrapper",onChange:V},{default:t(()=>[e(y,{value:"standard"},{default:t(()=>[_(" \u6807\u51C6 "),e(A,{code:"",content:"$url"})]),_:1}),e(y,{value:"markdown"},{default:t(()=>[_(" MarkDown "),e(A,{code:"",content:"![]($url)"})]),_:1}),e(y,{value:"custom"},{default:t(()=>[_(" \u81EA\u5B9A\u4E49 "),e(D,{value:s(m),"onUpdate:value":o[2]||(o[2]=a=>U(m)?m.value=a:null),style:{width:"100px","margin-left":"10px"}},null,8,["value"])]),_:1})]),_:1},8,["value"])]),e(L),e(v,{level:4},{default:t(()=>[_(" \u56FE\u5E8A\u8BBE\u7F6E ")]),_:1}),e(z,{activeKey:s(r),"onUpdate:activeKey":o[4]||(o[4]=a=>U(r)?r.value=a:null),type:"card",onChange:B},{default:t(()=>[(p(),d(b,null,T(q,(a,E)=>e(j,{key:E,tab:a.name},{default:t(()=>[s(r)===E?(p(),d("div",me,[k("div",ie,[e(P,{layout:"vertical"},{default:t(()=>[(p(!0),d(b,null,T(s(f),u=>(p(),h(g,{key:u.name,label:u.label,required:u.required},{default:t(()=>[u.type==="input"?(p(),h(D,{key:0,value:u.default,"onUpdate:value":C=>u.default=C,"allow-clear":"",placeholder:u.hint},null,8,["value","onUpdate:value","placeholder"])):u.type==="password"?(p(),h(M,{key:1,value:u.default,"onUpdate:value":C=>u.default=C,"allow-clear":"",placeholder:u.hint},null,8,["value","onUpdate:value","placeholder"])):S("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),k("div",de,[e(O,{type:"primary",onClick:H},{default:t(()=>[_(" \u4FDD\u5B58 ")]),_:1})])])):S("",!0)]),_:2},1032,["tab"])),64))]),_:1},8,["activeKey"])],64)}}});const Ze=oe(fe,[["__scopeId","data-v-95a7ccce"]]);export{Ze as default};