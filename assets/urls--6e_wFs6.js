import{C as R,ba as X,F as M,H as q,m as O,J as p,K as _,a0 as B,a1 as i,aj as W,u as n,b5 as Z,a3 as V,L as D,G as L,_ as ee,a7 as ae,t as $,aE as S,o as te,aQ as le,w as se,be as y,b0 as c,ap as U,X as s,P as oe,ax as T,az as re,as as ne,aA as ie,aB as de,ar as k,ai as I,T as z,aC as ue}from"./index-Yw6At5pr.js";import{v as ce}from"./el-loading-1D8Eif3X.js";import{E as pe}from"./el-pagination-JzbwS42j.js";import"./el-tag-vw67aK6x.js";import"./el-select-GcrQoWpq.js";import"./el-scrollbar-vz8xv5bG.js";import"./Router-FyJ0Ie4e.js";import{E as fe,a as me}from"./el-table-column-vq0XkF5X.js";import"./el-checkbox-c6KRqS-H.js";import{E as ye}from"./el-popover--mxYHfM7.js";import{d as A}from"./dayjs.min-B54vEFbt.js";import"./index-YdrmI0Ct.js";import"./hasIn-gsGgcA6w.js";import"./strings-N41-WuGQ.js";import"./toInteger-8l-7wA8F.js";import"./toFinite-nE02_ED6.js";import"./map-0lPg4dfb.js";import"./_baseEach-Gc0N7WKm.js";import"./raf-Bfoj-J6U.js";const ke=R({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:X}}),_e={click:m=>m instanceof MouseEvent},ge=["href","target"],ve=M({name:"ElLink"}),we=M({...ve,props:ke,emits:_e,setup(m,{emit:C}){const o=m,r=q("link"),E=O(()=>[r.b(),r.m(o.type),r.is("disabled",o.disabled),r.is("underline",o.underline&&!o.disabled)]);function v(t){o.disabled||C("click",t)}return(t,g)=>(p(),_("a",{class:D(n(E)),href:t.disabled||!t.href?void 0:t.href,target:t.disabled||!t.href?void 0:t.target,onClick:v},[t.icon?(p(),B(n(Z),{key:0},{default:i(()=>[(p(),B(W(t.icon)))]),_:1})):V("v-if",!0),t.$slots.default?(p(),_("span",{key:1,class:D(n(r).e("inner"))},[L(t.$slots,"default")],2)):V("v-if",!0),t.$slots.icon?L(t.$slots,"icon",{key:2}):V("v-if",!0)],10,ge))}});var he=ee(we,[["__file","link.vue"]]);const be=ae(he),P=m=>(ie("data-v-25af66dd"),m=m(),de(),m),$e={flex:"","flex-col":"","gap-4":"","h-full":""},Ce={class:"new-url-form"},Ee=P(()=>U("span",null," 输入链接: ",-1)),ze=P(()=>U("span",null," 自定义短网址(选): ",-1)),Ve=P(()=>U("br",null,null,-1)),Be="https://url.iszy.xyz",Ue=M({__name:"urls",setup(m){const C=$([]),o=$(10),r=$(1),E=$(0),v=$(!1),t=S({}),g=S({}),f=S({keyword:"",url:""});te(()=>{w(r.value-1,o.value)}),le(()=>{w(r.value-1,o.value)}),se(o,()=>{r.value=1});async function w(a,l){const h=setTimeout(()=>{v.value=!0},300);try{const u=(await y.get(`${y.$apiBase}/urls/admin/urls`,{params:{pageIndex:a,pageSize:l}})).data;u.success?(E.value=u.data.count,C.value=u.data.rows.map(d=>(d.createdAt=A(d.createdAt).format("YYYY年MM月DD日 HH:mm"),d.updatedAt=A(d.updatedAt).format("YYYY年MM月DD日 HH:mm"),d))):c.error(u.message)}catch(u){c.error(u.message)}clearTimeout(h),v.value=!1}async function H(){if(f.url)try{const a=(await y.post(`${y.$apiBase}/urls/admin/url`,{url:f.url,keyword:f.keyword})).data;a.success?(c.success("创建成功"),f.url="",f.keyword="",await w(r.value-1,o.value)):c.error(a.message)}catch(a){c.error(a.message)}}async function N(a){try{const l=(await y.put(`${y.$apiBase}/urls/admin/url/${a.keyword}`,{url:g[a.keyword]})).data;l.success?(c.success("更新成功"),a.url=g[a.keyword],t[a.keyword]=!1,await w(r.value-1,o.value)):c.error(l.message)}catch(l){c.error(l.message)}}async function j(a){try{const l=(await y.delete(`${y.$apiBase}/urls/admin/url/${a.keyword}`,{params:{keyword:a.keyword}})).data;l.success?(await w(r.value-1,o.value),c.success("删除成功")):c.error(l.message)}catch(l){c.error(l.message)}}function Y(a){t[a.keyword]=!t[a.keyword],t[a.keyword]&&(g[a.keyword]=a.url)}function F(a){return(r.value-1)*o.value+a+1}return(a,l)=>{const h=re,u=ne,d=me,x=be,K=ye,G=fe,J=pe,Q=ce;return p(),_("div",$e,[U("div",Ce,[Ee,s(h,{modelValue:n(f).url,"onUpdate:modelValue":l[0]||(l[0]=e=>n(f).url=e),placeholder:"https",clearable:"","flex-1":""},null,8,["modelValue"]),ze,s(h,{modelValue:n(f).keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>n(f).keyword=e),clearable:""},null,8,["modelValue"]),s(u,{type:"primary",onClick:H},{default:i(()=>[k(" 缩短 ")]),_:1})]),oe((p(),B(G,{data:n(C),border:!0,stripe:!0,size:"small","flex-1":""},{default:i(()=>[s(d,{type:"index",index:F,fixed:"left"}),s(d,{prop:"keyword",label:"短网址",width:"100",fixed:"left"},{default:i(({row:e})=>[s(x,{href:Be+"/"+e.keyword,target:"_blank",style:{"white-space":"nowrap"}},{default:i(()=>[k(I(e.keyword),1)]),_:2},1032,["href"])]),_:1}),s(d,{prop:"url",label:"原网址","min-width":"300"},{default:i(({row:e})=>[n(t)[e.keyword]?(p(),B(h,{key:1,modelValue:n(g)[e.keyword],"onUpdate:modelValue":b=>n(g)[e.keyword]=b},null,8,["modelValue","onUpdate:modelValue"])):(p(),_(z,{key:0},[e.title?(p(),_(z,{key:0},[s(x,{href:e.url,target:"_blank"},{default:i(()=>[k(I(e.title),1)]),_:2},1032,["href"]),Ve],64)):V("",!0),s(x,{href:e.url,target:"_blank"},{default:i(()=>[k(I(e.url),1)]),_:2},1032,["href"])],64))]),_:1}),s(d,{prop:"createdAt",label:"日期",width:"180"}),s(d,{prop:"ip",label:"IP",width:"130"}),s(d,{prop:"clicks",label:"点击次数",width:"80"}),s(d,{label:"操作",width:"140",fixed:"right"},{default:i(({row:e})=>[n(t)[e.keyword]?(p(),_(z,{key:1},[s(u,{size:"small",onClick:b=>Y(e)},{default:i(()=>[k(" 取消 ")]),_:2},1032,["onClick"]),s(u,{size:"small",type:"primary",onClick:b=>N(e)},{default:i(()=>[k(" 更新 ")]),_:2},1032,["onClick"])],64)):(p(),_(z,{key:0},[s(u,{size:"small",onClick:b=>Y(e)},{default:i(()=>[k(" 编辑 ")]),_:2},1032,["onClick"]),s(K,{width:"160",title:"删除后无法恢复！","confirm-button-type":"danger","confirm-button-text":"删除",onConfirm:b=>j(e)},{reference:i(()=>[s(u,{size:"small",type:"danger"},{default:i(()=>[k(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])],64))]),_:1})]),_:1},8,["data"])),[[Q,n(v)]]),s(J,{"current-page":n(r),"onUpdate:currentPage":l[2]||(l[2]=e=>T(r)?r.value=e:null),"page-size":n(o),"onUpdate:pageSize":l[3]||(l[3]=e=>T(o)?o.value=e:null),small:"",background:"",layout:"prev, pager, next",total:n(E)},null,8,["current-page","page-size","total"])])}}}),Xe=ue(Ue,[["__scopeId","data-v-25af66dd"]]);export{Xe as default};
