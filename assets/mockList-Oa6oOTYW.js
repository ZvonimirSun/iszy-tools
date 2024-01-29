import{i as E,du as M,G as r,ai as l,B as S,C as O,o as h,f as v,g as a,F as b,r as F,A as k,n as i,l as c,w as u,x as y,q as L,t as N,E as U,p as q,h as T,e as z}from"./index-Qxs6HJco.js";import{E as A}from"./el-dialog-LmcMATAJ.js";import{a as G,E as R}from"./el-form-item-eyirOErV.js";import{E as H}from"./el-popover-BAToGgWL.js";import"./el-popper-SBB3fo40.js";import{a as J}from"./mockData.service-udyuGLu1.js";const K={id:"",name:"",path:"",description:""},g=E([]);async function ye(){try{await p();const e=M("prjId");e&&P(e)}catch{throw new Error("获取项目列表失败")}}function Q(){return{...K}}function P(e){if(typeof e=="string"){const t=g.value.find(n=>n.id===e);if(t)e=t;else{r.error("未找到项目");return}}J(e).then()}async function W(e){try{if((await l.post(`${l.$apiBase}/mock/api/prj`,{...e,id:void 0}).then(l.getData)).success)return r.success("创建项目成功"),p().then(),!0;r.error("创建项目失败")}catch{r.error("创建项目失败")}return!1}async function X(e){try{if((await l.put(`${l.$apiBase}/mock/api/prj/${e.id}`,e).then(l.getData)).success)return r.success("更新项目成功"),p().then(),!0;r.error("更新项目失败")}catch{r.error("更新项目失败")}return!1}async function Y(e){try{if((await l.delete(`${l.$apiBase}/mock/api/prj/${e.id}`).then(l.getData)).success)return r.success("删除项目成功"),p().then(),!0;r.error("删除项目失败")}catch{r.error("删除项目失败")}return!1}async function p(){try{const e=await l.get(`${l.$apiBase}/mock/api/prj/list`).then(l.getData);e.success?g.value=e.data||[]:r.error("获取项目列表失败")}catch(e){console.log(e),r.error("获取项目列表失败")}}const m=e=>(q("data-v-63b7de69"),e=e(),T(),e),Z={class:"prj-wrapper"},ee={"w-full":"",class:"prj-list"},te={class:"prj-title"},oe={class:"prj-path"},se={class:"prj-desc"},ae={class:"prj-control"},ne=["onClick"],ie=m(()=>a("i",{class:"i-icon-park-outline-preview-open"},null,-1)),re=[ie],le=["onClick"],ce=m(()=>a("i",{class:"i-icon-park-outline-edit-two"},null,-1)),de=[ce],ue=m(()=>a("div",{class:"prj-control-btn prj-btn-delete"},[a("i",{class:"i-icon-park-outline-delete"})],-1)),pe=m(()=>a("i",{class:"i-icon-park-outline-plus"},null,-1)),me=[pe],fe={class:"dialog-footer"},_e=S({__name:"mockList",setup(e){const t=E(!1),n=O({id:"",name:"",path:"",description:""});function V(){Object.assign(n,Q()),t.value=!0}function $(d){Object.assign(n,{id:d.id??"",name:d.name,path:d.path,description:d.description??""}),t.value=!0}async function C(d){let o;d.id?o=await X(d):o=await W(d),o&&(t.value=!1)}return(d,o)=>{const B=H,f=N,_=G,D=R,j=U,x=A;return h(),v(b,null,[a("div",Z,[a("div",ee,[(h(!0),v(b,null,F(i(g),(s,I)=>(h(),v("div",{key:I,class:"prj-item"},[a("div",te,k(s.name),1),a("div",oe,k(s.path),1),a("div",se,k(s.description),1),a("div",ae,[a("div",{class:"prj-control-btn prj-btn-open",onClick:w=>i(P)(s)},re,8,ne),a("div",{class:"prj-control-btn prj-btn-edit",onClick:w=>$(s)},de,8,le),c(B,{title:"确认要删除该项目吗？删除后无法恢复！",onConfirm:w=>i(Y)(s)},{reference:u(()=>[ue]),_:2},1032,["onConfirm"])])]))),128)),a("div",{class:"prj-add",onClick:V},me)])]),c(x,{modelValue:i(t),"onUpdate:modelValue":o[5]||(o[5]=s=>L(t)?t.value=s:null),title:i(n).id?"修改项目":"添加项目"},{footer:u(()=>[a("span",fe,[c(j,{onClick:o[3]||(o[3]=s=>t.value=!1)},{default:u(()=>[y("取消")]),_:1}),c(j,{type:"primary",onClick:o[4]||(o[4]=s=>C(i(n)))},{default:u(()=>[y(" 提交 ")]),_:1})])]),default:u(()=>[c(D,{model:i(n)},{default:u(()=>[c(_,{label:"项目名称","label-width":120,required:!0},{default:u(()=>[c(f,{modelValue:i(n).name,"onUpdate:modelValue":o[0]||(o[0]=s=>i(n).name=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),c(_,{label:"接口基础路径","label-width":120,required:!0},{default:u(()=>[c(f,{modelValue:i(n).path,"onUpdate:modelValue":o[1]||(o[1]=s=>i(n).path=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),c(_,{label:"项目描述","label-width":120},{default:u(()=>[c(f,{modelValue:i(n).description,"onUpdate:modelValue":o[2]||(o[2]=s=>i(n).description=s),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),he=z(_e,[["__scopeId","data-v-63b7de69"]]),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{he as M,ye as i,Ee as m};
