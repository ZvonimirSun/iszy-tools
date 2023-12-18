import{g as ue,s as pe,_ as me}from"./common-K04dNQ2-.js";import{j as fe,B as j,k as A,bC as R,b as a,bD as M,aA as E,W as f,bs as z,F as P,l as _e,a4 as s,aa as d,o as k,c as w,y as l,a as i,e as ve,t as C,ay as n,X as K,i as he,bi as be,bE as ye,bn as ge,bo as je,az as ke,b3 as we,b2 as Ve,aF as De,ba as $e,bb as Ee,bu as Ce,aG as Be,aH as xe,a3 as Ie}from"./vendor-Ru-BxWlB.js";import{C as F}from"./mock-wyXGza7V.js";import"./ant-design-vue-MAwBXcQi.js";import"./vanilla-jsoneditor-_koh3yF9.js";const y=_=>(Be("data-v-9a2f6967"),_=_(),xe(),_),Pe={key:0,class:"prj-wrapper"},Fe={"w-full":"",class:"prj-list"},Te={class:"prj-title"},Ue={class:"prj-path"},Oe={class:"prj-desc"},Se={class:"prj-control"},Ae=["onClick"],Re=y(()=>i("i",{class:"i-icon-park-outline-preview-open"},null,-1)),Me=[Re],ze=["onClick"],Ke=y(()=>i("i",{class:"i-icon-park-outline-edit-two"},null,-1)),qe=[Ke],He=y(()=>i("div",{class:"prj-control-btn prj-btn-delete"},[i("i",{class:"i-icon-park-outline-delete"})],-1)),Le=y(()=>i("i",{class:"i-icon-park-outline-plus"},null,-1)),Ne=[Le],Ye={key:1,class:"prj-detail"},Ge={class:"prj-meta-wrapper"},Je={class:"prj-meta"},We=y(()=>i("div",{class:"prj-meta-name"}," 接口根地址 ",-1)),Xe={class:"prj-meta"},Qe=y(()=>i("div",{class:"prj-meta-name"}," 项目ID ",-1)),Ze={class:"prj-data-control"},et={class:"prj-data-wrapper"},tt={class:"dialog-footer"},at={class:"edit-data-wrapper"},lt={class:"dialog-footer"};function ot(_){return typeof _=="function"||Object.prototype.toString.call(_)==="[object Object]"&&!he(_)}const st=fe({__name:"mock",setup(_){const B=j([]),c=j(null),x=j([]),v=j(!1),h=j(!1),u=A({id:"",name:"",path:"",description:""}),r=A({id:-1,name:"",type:"get",enabled:!0,path:"",description:"",delay:0,response:"",projectId:""}),q=[{title:"名称",key:"name",dataKey:"name",width:300,fixed:R.LEFT},{title:"请求类型",key:"type",dataKey:"type",width:100,align:"center",cellRenderer:({cellData:e})=>a(M,null,ot(e)?e:{default:()=>[e]})},{title:"请求状态",key:"enabled",dataKey:"enabled",width:100,align:"center",cellRenderer:({cellData:e})=>a(M,{type:"success"},{default:()=>[e?"开启":"关闭"]})},{title:"接口地址",key:"path",dataKey:"path",width:300,cellRenderer:({cellData:e})=>a(F,{val:e},null)},{title:"接口描述",key:"description",dataKey:"description",width:300},{title:"创建时间",key:"createdAt",dataKey:"createdAt",width:200},{title:"操作",key:"operations",fixed:R.RIGHT,cellRenderer:({rowData:e})=>a(P,null,[a(E,{size:"small",onClick:()=>oe(e.url??"")},{default:()=>[f("复制")]}),a(E,{size:"small",onClick:()=>X(e)},{default:()=>[f("编辑")]}),a(z,{title:"确认要删除该数据吗？删除后无法恢复！",onConfirm:()=>ae(e)},{reference:()=>a(E,{size:"small",type:"danger"},{default:()=>[f("删除")]})})]),width:200,align:"center"}];_e(async()=>{await V();const e=ue("prjId");if(e){const t=B.value.find(p=>p.id===e);t&&T(t)}});function H(){Object.assign(u,{id:"",name:"",path:"",description:""}),v.value=!0}function L(e){Object.assign(u,{id:e.id??"",name:e.name,path:e.path,description:e.description??""}),v.value=!0}function N(e){e.id?G(e):Y(e)}function Y(e){s.post(`${s.$apiBase}/mock/api/prj`,{...e,id:void 0}).then(s.getData).then(t=>{t.success?(d.success("创建项目成功"),V(),v.value=!1):d.error("创建项目失败")})}function G(e){s.put(`${s.$apiBase}/mock/api/prj/${e.id}`,e).then(s.getData).then(t=>{t.success?(d.success("修改项目成功"),V(),v.value=!1):d.error("修改项目失败")})}async function J(e){try{(await s.delete(`${s.$apiBase}/mock/api/prj/${e.id}`).then(s.getData)).success?(d.success("删除项目成功"),await V()):d.error("删除项目失败")}catch{d.error("删除项目失败")}}async function V(){try{const e=await s.get(`${s.$apiBase}/mock/api/prj/list`).then(s.getData);e.success?B.value=e.data||[]:d.error("获取项目列表失败")}catch{d.error("获取项目列表失败")}}function D(e){s.get(`${s.$apiBase}/mock/api/prj/${e.id}/list`).then(s.getData).then(t=>{t.success?x.value=(t.data||[]).map(p=>(p.createdAt=be(p.createdAt).format("YYYY-MM-DD HH:mm:ss"),p.url=`${s.$apiBase}/mock/${e.id}${e.path}${p.path}`,p)):d.error("获取接口列表失败")})}function T(e){c.value=e,pe("prjId",e.id),D(e)}function W(){Object.assign(r,{id:-1,name:"",type:"get",enabled:!0,path:"",description:"",delay:0,response:"",projectId:""}),h.value=!0}function X(e){Object.assign(r,{id:e.id,name:e.name,type:e.type,enabled:e.enabled,path:e.path,description:e.description,delay:e.delay,response:e.response,projectId:e.projectId}),h.value=!0}function Q(e){r.response=e}function Z(e){e.id>-1?ee(e):te(e)}async function ee(e){try{(await s.put(`${s.$apiBase}/mock/api/data/${e.id}`,{...e,id:void 0,projectId:void 0}).then(s.getData)).success?(d.success("修改数据成功"),D(c.value),h.value=!1):d.error("修改数据失败")}catch{d.error("修改数据失败")}}async function te(e){var t;try{(await s.post(`${s.$apiBase}/mock/api/data`,{...e,id:void 0,projectId:(t=c.value)==null?void 0:t.id}).then(s.getData)).success?(d.success("创建数据成功"),D(c.value),h.value=!1):d.error("创建数据失败")}catch{d.error("创建数据失败")}}async function ae(e){try{(await s.delete(`${s.$apiBase}/mock/api/data/${e.id}`).then(s.getData)).success?(d.success("删除数据成功"),D(c.value)):d.error("删除数据失败")}catch{d.error("删除数据失败")}}function le(){c.value=null,x.value=[]}async function oe(e){try{await navigator.clipboard.writeText(e),d.success("复制成功")}catch{d.error("复制失败")}}return(e,t)=>{const p=z,se=ye,g=E,ne=ge,ie=je,b=ke,m=we,U=Ve,O=De,$=$e,de=Ee,re=Ce,ce=me;return k(),w(P,null,[l(c)?(k(),w("div",Ye,[a(se,{onBack:le},{content:n(()=>[f(C(l(c).name),1)]),_:1}),i("div",Ge,[i("div",Je,[We,a(F,{val:l(s).$apiBase+"/mock/"+l(c).id+l(c).path,class:"prj-meta-content"},null,8,["val"])]),i("div",Xe,[Qe,a(F,{val:l(c).id,class:"prj-meta-content"},null,8,["val"])])]),i("div",Ze,[a(g,{type:"primary",onClick:W},{default:n(()=>[f(" 新增接口 ")]),_:1})]),i("div",et,[a(ie,null,{default:n(({height:o,width:I})=>[a(ne,{columns:q,data:l(x),width:I,height:o,fixed:""},null,8,["data","width","height"])]),_:1})])])):(k(),w("div",Pe,[i("div",Fe,[(k(!0),w(P,null,ve(l(B),(o,I)=>(k(),w("div",{key:I,class:"prj-item"},[i("div",Te,C(o.name),1),i("div",Ue,C(o.path),1),i("div",Oe,C(o.description),1),i("div",Se,[i("div",{class:"prj-control-btn prj-btn-open",onClick:S=>T(o)},Me,8,Ae),i("div",{class:"prj-control-btn prj-btn-edit",onClick:S=>L(o)},qe,8,ze),a(p,{title:"确认要删除该项目吗？删除后无法恢复！",onConfirm:S=>J(o)},{reference:n(()=>[He]),_:2},1032,["onConfirm"])])]))),128)),i("div",{class:"prj-add",onClick:H},Ne)])])),a(O,{modelValue:l(v),"onUpdate:modelValue":t[5]||(t[5]=o=>K(v)?v.value=o:null),title:l(u).id?"修改项目":"添加项目"},{footer:n(()=>[i("span",tt,[a(g,{onClick:t[3]||(t[3]=o=>v.value=!1)},{default:n(()=>[f("取消")]),_:1}),a(g,{type:"primary",onClick:t[4]||(t[4]=o=>N(l(u)))},{default:n(()=>[f(" 提交 ")]),_:1})])]),default:n(()=>[a(U,{model:l(u)},{default:n(()=>[a(m,{label:"项目名称","label-width":120,required:!0},{default:n(()=>[a(b,{modelValue:l(u).name,"onUpdate:modelValue":t[0]||(t[0]=o=>l(u).name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"接口基础路径","label-width":120,required:!0},{default:n(()=>[a(b,{modelValue:l(u).path,"onUpdate:modelValue":t[1]||(t[1]=o=>l(u).path=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"项目描述","label-width":120},{default:n(()=>[a(b,{modelValue:l(u).description,"onUpdate:modelValue":t[2]||(t[2]=o=>l(u).description=o),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),a(O,{modelValue:l(h),"onUpdate:modelValue":t[14]||(t[14]=o=>K(h)?h.value=o:null),fullscreen:"",title:l(r).id>-1?"修改接口":"添加接口","destroy-on-close":""},{footer:n(()=>[i("span",lt,[a(g,{onClick:t[12]||(t[12]=o=>h.value=!1)},{default:n(()=>[f("取消")]),_:1}),a(g,{type:"primary",onClick:t[13]||(t[13]=o=>Z(l(r)))},{default:n(()=>[f(" 提交 ")]),_:1})])]),default:n(()=>[i("div",at,[a(U,{model:l(r),class:"edit-data-form"},{default:n(()=>[a(m,{label:"接口名","label-width":120,required:!0},{default:n(()=>[a(b,{modelValue:l(r).name,"onUpdate:modelValue":t[6]||(t[6]=o=>l(r).name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"类型(method)","label-width":120,required:!0},{default:n(()=>[a(de,{modelValue:l(r).type,"onUpdate:modelValue":t[7]||(t[7]=o=>l(r).type=o)},{default:n(()=>[a($,{label:"GET",value:"get"}),a($,{label:"POST",value:"post"}),a($,{label:"DELETE",value:"delete"}),a($,{label:"PUT",value:"put"})]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"返回延时(单位毫秒)","label-width":120},{default:n(()=>[a(b,{modelValue:l(r).delay,"onUpdate:modelValue":t[8]||(t[8]=o=>l(r).delay=o),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"接口","label-width":120,required:!0},{default:n(()=>[a(b,{modelValue:l(r).path,"onUpdate:modelValue":t[9]||(t[9]=o=>l(r).path=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"接口描述","label-width":120},{default:n(()=>[a(b,{modelValue:l(r).description,"onUpdate:modelValue":t[10]||(t[10]=o=>l(r).description=o),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"接口状态","label-width":120},{default:n(()=>[a(re,{modelValue:l(r).enabled,"onUpdate:modelValue":t[11]||(t[11]=o=>l(r).enabled=o),"inline-prompt":"","active-text":"开","inactive-text":"关"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),a(ce,{class:"edit-data-json",config:{mode:"text"},content:l(r).response,onChange:Q},null,8,["content"])])]),_:1},8,["modelValue","title"])],64)}}}),ut=Ie(st,[["__scopeId","data-v-9a2f6967"]]);export{ut as default};
