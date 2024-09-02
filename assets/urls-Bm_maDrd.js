import{A as R,ba as Z,D,F as G,k as O,H as p,I as _,Z as B,$ as i,ai as W,u as n,b5 as X,a1 as z,J as A,E as L,_ as ee,a6 as ae,r as $,aE as I,o as te,aQ as le,w as se,be as y,a$ as c,ao as U,V as s,aq as k,L as oe,ah as S,Q as V,aw as P,az as re,ar as ne,aA as ie,aB as de,aC as ue}from"./index-AbLOts5N.js";import{v as ce}from"./el-loading-Cjwp2JF4.js";import{E as pe}from"./el-pagination-CwSHruXL.js";/* empty css               */import"./el-select-SuLL4oSc.js";import"./Router-C2dwVSTg.js";import{E as fe,a as me}from"./el-table-column-CmP43xpE.js";import"./el-checkbox-Bs07rLZp.js";import{E as ye}from"./el-popover-CGSy74Mb.js";import{d as T}from"./dayjs.min-D2p_XDDO.js";import"./index-B0Yd4pe0.js";import"./strings-CrKT-Vfg.js";import"./castArray-CUQkfLHh.js";import"./_baseIteratee-d1PEby5D.js";import"./index-ob1Ektc6.js";import"./map-DZrW2S8G.js";import"./_baseEach-Dji9RMfC.js";import"./raf-LWftCPvr.js";const ke=R({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:Z}}),_e={click:m=>m instanceof MouseEvent},ge=D({name:"ElLink"}),ve=D({...ge,props:ke,emits:_e,setup(m,{emit:E}){const o=m,r=G("link"),C=O(()=>[r.b(),r.m(o.type),r.is("disabled",o.disabled),r.is("underline",o.underline&&!o.disabled)]);function v(t){o.disabled||E("click",t)}return(t,g)=>(p(),_("a",{class:A(n(C)),href:t.disabled||!t.href?void 0:t.href,target:t.disabled||!t.href?void 0:t.target,onClick:v},[t.icon?(p(),B(n(X),{key:0},{default:i(()=>[(p(),B(W(t.icon)))]),_:1})):z("v-if",!0),t.$slots.default?(p(),_("span",{key:1,class:A(n(r).e("inner"))},[L(t.$slots,"default")],2)):z("v-if",!0),t.$slots.icon?L(t.$slots,"icon",{key:2}):z("v-if",!0)],10,["href","target"]))}});var we=ee(ve,[["__file","link.vue"]]);const he=ae(we),M=m=>(ie("data-v-8cfcbc85"),m=m(),de(),m),be={"h-full":"",flex:"","flex-col":"","gap-4":""},$e={class:"new-url-form"},Ee=M(()=>U("span",null," 输入链接: ",-1)),Ce=M(()=>U("span",null," 自定义短网址(选): ",-1)),Ve=M(()=>U("br",null,null,-1)),ze="https://url.iszy.xyz",Be=D({__name:"urls",setup(m){const E=$([]),o=$(10),r=$(1),C=$(0),v=$(!1),t=I({}),g=I({}),f=I({keyword:"",url:""});te(()=>{w(r.value-1,o.value)}),le(()=>{w(r.value-1,o.value)}),se(o,()=>{r.value=1});async function w(a,l){const h=setTimeout(()=>{v.value=!0},300);try{const u=(await y.get(`${y.$apiBase}/urls/admin/urls`,{params:{pageIndex:a,pageSize:l}})).data;u.success?(C.value=u.data.count,E.value=u.data.rows.map(d=>(d.createdAt=T(d.createdAt).format("YYYY年MM月DD日 HH:mm"),d.updatedAt=T(d.updatedAt).format("YYYY年MM月DD日 HH:mm"),d))):c.error(u.message)}catch(u){c.error(u.message)}clearTimeout(h),v.value=!1}async function H(){if(f.url)try{const a=(await y.post(`${y.$apiBase}/urls/admin/url`,{url:f.url,keyword:f.keyword})).data;a.success?(c.success("创建成功"),f.url="",f.keyword="",await w(r.value-1,o.value)):c.error(a.message)}catch(a){c.error(a.message)}}async function N(a){try{const l=(await y.put(`${y.$apiBase}/urls/admin/url/${a.keyword}`,{url:g[a.keyword]})).data;l.success?(c.success("更新成功"),a.url=g[a.keyword],t[a.keyword]=!1,await w(r.value-1,o.value)):c.error(l.message)}catch(l){c.error(l.message)}}async function F(a){try{const l=(await y.delete(`${y.$apiBase}/urls/admin/url/${a.keyword}`,{params:{keyword:a.keyword}})).data;l.success?(await w(r.value-1,o.value),c.success("删除成功")):c.error(l.message)}catch(l){c.error(l.message)}}function Y(a){t[a.keyword]=!t[a.keyword],t[a.keyword]&&(g[a.keyword]=a.url)}function Q(a){return(r.value-1)*o.value+a+1}return(a,l)=>{const h=re,u=ne,d=fe,x=he,j=ye,q=me,J=pe,K=ce;return p(),_("div",be,[U("div",$e,[Ee,s(h,{modelValue:n(f).url,"onUpdate:modelValue":l[0]||(l[0]=e=>n(f).url=e),placeholder:"https",clearable:"","flex-1":""},null,8,["modelValue"]),Ce,s(h,{modelValue:n(f).keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>n(f).keyword=e),clearable:""},null,8,["modelValue"]),s(u,{type:"primary",onClick:H},{default:i(()=>[k(" 缩短 ")]),_:1})]),oe((p(),B(q,{data:n(E),border:!0,stripe:!0,size:"small","flex-1":""},{default:i(()=>[s(d,{type:"index",index:Q,fixed:"left"}),s(d,{prop:"keyword",label:"短网址",width:"100",fixed:"left"},{default:i(({row:e})=>[s(x,{href:`${ze}/${e.keyword}`,target:"_blank",style:{"white-space":"nowrap"}},{default:i(()=>[k(S(e.keyword),1)]),_:2},1032,["href"])]),_:1}),s(d,{prop:"url",label:"原网址","min-width":"300"},{default:i(({row:e})=>[n(t)[e.keyword]?(p(),B(h,{key:1,modelValue:n(g)[e.keyword],"onUpdate:modelValue":b=>n(g)[e.keyword]=b},null,8,["modelValue","onUpdate:modelValue"])):(p(),_(V,{key:0},[e.title?(p(),_(V,{key:0},[s(x,{href:e.url,target:"_blank"},{default:i(()=>[k(S(e.title),1)]),_:2},1032,["href"]),Ve],64)):z("",!0),s(x,{href:e.url,target:"_blank"},{default:i(()=>[k(S(e.url),1)]),_:2},1032,["href"])],64))]),_:1}),s(d,{prop:"createdAt",label:"日期",width:"180"}),s(d,{prop:"ip",label:"IP",width:"130"}),s(d,{prop:"clicks",label:"点击次数",width:"80"}),s(d,{label:"操作",width:"140",fixed:"right"},{default:i(({row:e})=>[n(t)[e.keyword]?(p(),_(V,{key:1},[s(u,{size:"small",onClick:b=>Y(e)},{default:i(()=>[k(" 取消 ")]),_:2},1032,["onClick"]),s(u,{size:"small",type:"primary",onClick:b=>N(e)},{default:i(()=>[k(" 更新 ")]),_:2},1032,["onClick"])],64)):(p(),_(V,{key:0},[s(u,{size:"small",onClick:b=>Y(e)},{default:i(()=>[k(" 编辑 ")]),_:2},1032,["onClick"]),s(j,{width:"160",title:"删除后无法恢复！","confirm-button-type":"danger","confirm-button-text":"删除",onConfirm:b=>F(e)},{reference:i(()=>[s(u,{size:"small",type:"danger"},{default:i(()=>[k(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])],64))]),_:1})]),_:1},8,["data"])),[[K,n(v)]]),s(J,{"current-page":n(r),"onUpdate:currentPage":l[2]||(l[2]=e=>P(r)?r.value=e:null),"page-size":n(o),"onUpdate:pageSize":l[3]||(l[3]=e=>P(o)?o.value=e:null),small:"",background:"",layout:"prev, pager, next",total:n(C)},null,8,["current-page","page-size","total"])])}}}),Ke=ue(Be,[["__scopeId","data-v-8cfcbc85"]]);export{Ke as default};
