import{j as y,B as I,k as x,o as _,c as m,a as o,F as k,e as B,t as f,y as l,b as s,aj as i,W as b,X as D,by as N,ak as $,al as F,am as O,aI as S,aN as U,aO as L,aP as q,ad as M}from"./vendor-1PeLGBgx.js";import{b as R,f as T,p as W,h as X,u as z,i as A}from"./mock-wRW5oUuz.js";import"./common-qko3TBVm.js";const r=c=>(L("data-v-5f158659"),c=c(),q(),c),G={class:"prj-wrapper"},H={"w-full":"",class:"prj-list"},J={class:"prj-title"},K={class:"prj-path"},Q={class:"prj-desc"},Y={class:"prj-control"},Z=["onClick"],ee=r(()=>o("i",{class:"i-icon-park-outline-preview-open"},null,-1)),te=[ee],oe=["onClick"],le=r(()=>o("i",{class:"i-icon-park-outline-edit-two"},null,-1)),ae=[le],se=r(()=>o("div",{class:"prj-control-btn prj-btn-delete"},[o("i",{class:"i-icon-park-outline-delete"})],-1)),ne=r(()=>o("i",{class:"i-icon-park-outline-plus"},null,-1)),ie=[ne],de={class:"dialog-footer"},ce=y({__name:"mockList",setup(c){const d=I(!1),a=x({id:"",name:"",path:"",description:""});function j(){Object.assign(a,X()),d.value=!0}function V(n){Object.assign(a,{id:n.id??"",name:n.name,path:n.path,description:n.description??""}),d.value=!0}async function w(n){let e;n.id?e=await z(n):e=await A(n),e&&(d.value=!1)}return(n,e)=>{const C=N,p=$,u=F,g=O,v=S,P=U;return _(),m(k,null,[o("div",G,[o("div",H,[(_(!0),m(k,null,B(l(W),(t,E)=>(_(),m("div",{key:E,class:"prj-item"},[o("div",J,f(t.name),1),o("div",K,f(t.path),1),o("div",Q,f(t.description),1),o("div",Y,[o("div",{class:"prj-control-btn prj-btn-open",onClick:h=>l(R)(t)},te,8,Z),o("div",{class:"prj-control-btn prj-btn-edit",onClick:h=>V(t)},ae,8,oe),s(C,{title:"确认要删除该项目吗？删除后无法恢复！",onConfirm:h=>l(T)(t)},{reference:i(()=>[se]),_:2},1032,["onConfirm"])])]))),128)),o("div",{class:"prj-add",onClick:j},ie)])]),s(P,{modelValue:l(d),"onUpdate:modelValue":e[5]||(e[5]=t=>D(d)?d.value=t:null),title:l(a).id?"修改项目":"添加项目"},{footer:i(()=>[o("span",de,[s(v,{onClick:e[3]||(e[3]=t=>d.value=!1)},{default:i(()=>[b("取消")]),_:1}),s(v,{type:"primary",onClick:e[4]||(e[4]=t=>w(l(a)))},{default:i(()=>[b(" 提交 ")]),_:1})])]),default:i(()=>[s(g,{model:l(a)},{default:i(()=>[s(u,{label:"项目名称","label-width":120,required:!0},{default:i(()=>[s(p,{modelValue:l(a).name,"onUpdate:modelValue":e[0]||(e[0]=t=>l(a).name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),s(u,{label:"接口基础路径","label-width":120,required:!0},{default:i(()=>[s(p,{modelValue:l(a).path,"onUpdate:modelValue":e[1]||(e[1]=t=>l(a).path=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),s(u,{label:"项目描述","label-width":120},{default:i(()=>[s(p,{modelValue:l(a).description,"onUpdate:modelValue":e[2]||(e[2]=t=>l(a).description=t),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),_e=M(ce,[["__scopeId","data-v-5f158659"]]);export{_e as default};
