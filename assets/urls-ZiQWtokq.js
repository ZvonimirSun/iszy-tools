import{h as q,aR as G,k as Y,u as X,n as J,q as m,E as k,r as B,w as i,y as O,v as n,aM as Q,G as U,t as I,s as L,_ as Z,z as ee,R as $,a4 as M,T as te,aa as ae,a7 as le,aW as c,aA as p,F as z,K as s,L as y,ah as se,H as S,X as V,W as P,$ as re,N as oe,a0 as ne}from"./index-DfRcp7P5.js";import{v as ie}from"./el-loading-CciwfBEC.js";import{E as de}from"./el-pagination-hdvQABTL.js";/* empty css               */import"./el-select-jrtk5-eY.js";import"./el-popper-O-EP-Abw.js";import{E as ue,a as pe}from"./el-table-column-CZYd344w.js";import"./el-checkbox-CjAo-nAh.js";import"./el-tooltip-l0sNRNKZ.js";import{E as me}from"./el-popover-CE2FvSaS.js";import{d as T}from"./dayjs.min-DcjMmR0X.js";import"./Router-DMyAjHEA.js";import"./index-BS373hqr.js";import"./strings-DRKjoRQ8.js";import"./castArray-C8c5ecoO.js";import"./_baseIteratee-CEN0TtuM.js";import"./index-C5X8a1QT.js";import"./index-71wzHy7q.js";import"./isUndefined-DCTLXrZ8.js";import"./map-DCdXLPnK.js";import"./_baseEach-BkmXm37m.js";import"./raf-Clbh-EsQ.js";const fe=q({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:G}}),ce={click:h=>h instanceof MouseEvent},ye=Y({name:"ElLink"}),ke=Y({...ye,props:fe,emits:ce,setup(h,{emit:E}){const r=h,o=X("link"),C=J(()=>[o.b(),o.m(r.type),o.is("disabled",r.disabled),o.is("underline",r.underline&&!r.disabled)]);function v(l){r.disabled||E("click",l)}return(l,g)=>(m(),k("a",{class:I(n(C)),href:l.disabled||!l.href?void 0:l.href,target:l.disabled||!l.href?void 0:l.target,onClick:v},[l.icon?(m(),B(n(Q),{key:0},{default:i(()=>[(m(),B(O(l.icon)))]),_:1})):U("v-if",!0),l.$slots.default?(m(),k("span",{key:1,class:I(n(o).e("inner"))},[L(l.$slots,"default")],2)):U("v-if",!0),l.$slots.icon?L(l.$slots,"icon",{key:2}):U("v-if",!0)],10,["href","target"]))}});var ge=Z(ke,[["__file","link.vue"]]);const ve=ee(ge),we={"h-full":"",flex:"","flex-col":"","gap-4":""},_e={class:"new-url-form"},be="https://url.iszy.xyz",$e=Y({__name:"urls",setup(h){const E=$([]),r=$(10),o=$(1),C=$(0),v=$(!1),l=M({}),g=M({}),f=M({keyword:"",url:""});te(()=>{w(o.value-1,r.value)}),ae(()=>{w(o.value-1,r.value)}),le(r,()=>{o.value=1});async function w(a,e){const _=setTimeout(()=>{v.value=!0},300);try{const u=(await c.get(`${c.$apiBase}/urls/admin/urls`,{params:{pageIndex:a,pageSize:e}})).data;u.success?(C.value=u.data.count,E.value=u.data.rows.map(d=>(d.createdAt=T(d.createdAt).format("YYYY年MM月DD日 HH:mm"),d.updatedAt=T(d.updatedAt).format("YYYY年MM月DD日 HH:mm"),d))):p.error(u.message)}catch(u){p.error(u.message)}clearTimeout(_),v.value=!1}async function A(){if(f.url)try{const a=(await c.post(`${c.$apiBase}/urls/admin/url`,{url:f.url,keyword:f.keyword})).data;a.success?(p.success("创建成功"),f.url="",f.keyword="",await w(o.value-1,r.value)):p.error(a.message)}catch(a){p.error(a.message)}}async function N(a){try{const e=(await c.put(`${c.$apiBase}/urls/admin/url/${a.keyword}`,{url:g[a.keyword]})).data;e.success?(p.success("更新成功"),a.url=g[a.keyword],l[a.keyword]=!1,await w(o.value-1,r.value)):p.error(e.message)}catch(e){p.error(e.message)}}async function H(a){try{const e=(await c.delete(`${c.$apiBase}/urls/admin/url/${a.keyword}`,{params:{keyword:a.keyword}})).data;e.success?(await w(o.value-1,r.value),p.success("删除成功")):p.error(e.message)}catch(e){p.error(e.message)}}function D(a){l[a.keyword]=!l[a.keyword],l[a.keyword]&&(g[a.keyword]=a.url)}function R(a){return(o.value-1)*r.value+a+1}return(a,e)=>{const _=re,u=oe,d=ue,x=ve,F=me,K=pe,W=de,j=ie;return m(),k("div",we,[z("div",_e,[e[5]||(e[5]=z("span",null," 输入链接: ",-1)),s(_,{modelValue:n(f).url,"onUpdate:modelValue":e[0]||(e[0]=t=>n(f).url=t),placeholder:"https",clearable:"","flex-1":""},null,8,["modelValue"]),e[6]||(e[6]=z("span",null," 自定义短网址(选): ",-1)),s(_,{modelValue:n(f).keyword,"onUpdate:modelValue":e[1]||(e[1]=t=>n(f).keyword=t),clearable:""},null,8,["modelValue"]),s(u,{type:"primary",onClick:A},{default:i(()=>e[4]||(e[4]=[y(" 缩短 ")])),_:1})]),se((m(),B(K,{data:n(E),border:!0,stripe:!0,size:"small","flex-1":""},{default:i(()=>[s(d,{type:"index",index:R,fixed:"left"}),s(d,{prop:"keyword",label:"短网址",width:"100",fixed:"left"},{default:i(({row:t})=>[s(x,{href:`${be}/${t.keyword}`,target:"_blank",style:{"white-space":"nowrap"}},{default:i(()=>[y(S(t.keyword),1)]),_:2},1032,["href"])]),_:1}),s(d,{prop:"url",label:"原网址","min-width":"300"},{default:i(({row:t})=>[n(l)[t.keyword]?(m(),B(_,{key:1,modelValue:n(g)[t.keyword],"onUpdate:modelValue":b=>n(g)[t.keyword]=b},null,8,["modelValue","onUpdate:modelValue"])):(m(),k(V,{key:0},[t.title?(m(),k(V,{key:0},[s(x,{href:t.url,target:"_blank"},{default:i(()=>[y(S(t.title),1)]),_:2},1032,["href"]),e[7]||(e[7]=z("br",null,null,-1))],64)):U("",!0),s(x,{href:t.url,target:"_blank"},{default:i(()=>[y(S(t.url),1)]),_:2},1032,["href"])],64))]),_:1}),s(d,{prop:"createdAt",label:"日期",width:"180"}),s(d,{prop:"ip",label:"IP",width:"130"}),s(d,{prop:"clicks",label:"点击次数",width:"80"}),s(d,{label:"操作",width:"140",fixed:"right"},{default:i(({row:t})=>[n(l)[t.keyword]?(m(),k(V,{key:1},[s(u,{size:"small",onClick:b=>D(t)},{default:i(()=>e[10]||(e[10]=[y(" 取消 ")])),_:2},1032,["onClick"]),s(u,{size:"small",type:"primary",onClick:b=>N(t)},{default:i(()=>e[11]||(e[11]=[y(" 更新 ")])),_:2},1032,["onClick"])],64)):(m(),k(V,{key:0},[s(u,{size:"small",onClick:b=>D(t)},{default:i(()=>e[8]||(e[8]=[y(" 编辑 ")])),_:2},1032,["onClick"]),s(F,{width:"160",title:"删除后无法恢复！","confirm-button-type":"danger","confirm-button-text":"删除",onConfirm:b=>H(t)},{reference:i(()=>[s(u,{size:"small",type:"danger"},{default:i(()=>e[9]||(e[9]=[y(" 删除 ")])),_:1})]),_:2},1032,["onConfirm"])],64))]),_:1})]),_:1},8,["data"])),[[j,n(v)]]),s(W,{"current-page":n(o),"onUpdate:currentPage":e[2]||(e[2]=t=>P(o)?o.value=t:null),"page-size":n(r),"onUpdate:pageSize":e[3]||(e[3]=t=>P(r)?r.value=t:null),small:"",background:"",layout:"prev, pager, next",total:n(C)},null,8,["current-page","page-size","total"])])}}}),We=ne($e,[["__scopeId","data-v-f2928ba1"]]);export{We as default};
