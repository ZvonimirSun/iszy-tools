import{h as x,aR as j,_ as C,k as E,aS as S,u as N,R as z,T as L,E as B,r as p,s as F,x as o,v as b,I as q,j as G,l as U,a8 as O,F as W,q as A,w as _,y as J,aN as Q,H as v,b6 as X,z as Z,K as s,L as h,N as d,Y as ee,a4 as T,aW as k,ax as I,aA as m,G as ae,a0 as te}from"./index-PYN4Dtwr.js";import"./el-empty-DlcCxy7u.js";import{F as re,a as se,E as ne}from"./el-table-v2-DuXuLVmi.js";import{d as $}from"./dayjs.min-VpS_oMrp.js";/* empty css               */import{E as le}from"./el-popover-BJUMmVZx.js";import"./el-popper-BbtlpYC7.js";import{E as w}from"./index-DCnB6voC.js";import"./castArray-Eksu3iu2.js";import"./raf-BnjqbfAa.js";import"./memoize-one.esm-BdPwpGay.js";import"./index-D1lF05SS.js";import"./isUndefined-DCTLXrZ8.js";const R=Symbol("breadcrumbKey"),oe=x({separator:{type:String,default:"/"},separatorIcon:{type:j}}),ce=E({name:"ElBreadcrumb"}),ie=E({...ce,props:oe,setup(t){const e=t,{t:l}=S(),c=N("breadcrumb"),n=z();return q(R,e),L(()=>{const i=n.value.querySelectorAll(`.${c.e("item")}`);i.length&&i[i.length-1].setAttribute("aria-current","page")}),(i,y)=>(p(),B("div",{ref_key:"breadcrumb",ref:n,class:b(o(c).b()),"aria-label":o(l)("el.breadcrumb.label"),role:"navigation"},[F(i.$slots,"default")],10,["aria-label"]))}});var ue=C(ie,[["__file","breadcrumb.vue"]]);const de=x({to:{type:G([String,Object]),default:""},replace:Boolean}),me=E({name:"ElBreadcrumbItem"}),pe=E({...me,props:de,setup(t){const e=t,l=O(),c=U(R,void 0),n=N("breadcrumb"),i=l.appContext.config.globalProperties.$router,y=z(),D=()=>{!e.to||!i||(e.replace?i.replace(e.to):i.push(e.to))};return(g,r)=>{var a,u;return p(),B("span",{class:b(o(n).e("item"))},[W("span",{ref_key:"link",ref:y,class:b([o(n).e("inner"),o(n).is("link",!!g.to)]),role:"link",onClick:D},[F(g.$slots,"default")],2),(a=o(c))!=null&&a.separatorIcon?(p(),A(o(Q),{key:0,class:b(o(n).e("separator"))},{default:_(()=>[(p(),A(J(o(c).separatorIcon)))]),_:1},8,["class"])):(p(),B("span",{key:1,class:b(o(n).e("separator")),role:"presentation"},v((u=o(c))==null?void 0:u.separator),3))],2)}}});var V=C(pe,[["__file","breadcrumb-item.vue"]]);const fe=Z(ue,{BreadcrumbItem:V}),be=X(V);var f=function(t){return t[t.DELETED=-1]="DELETED",t[t.DEACTIVATED=0]="DEACTIVATED",t[t.ENABLED=1]="ENABLED",t[t.DISABLED=2]="DISABLED",t}(f||{});function _e(t){return[{key:"userId",dataKey:"userId",width:150,hidden:!0},{key:"userName",dataKey:"userName",title:"用户名",width:150,align:"center"},{key:"nickName",dataKey:"nickName",title:"昵称",width:150,align:"center"},{key:"email",dataKey:"email",title:"邮箱",width:150,align:"center"},{key:"roles",title:"角色",width:150,align:"center",cellRenderer:({rowData:e})=>{var c;const l=((c=e.roles)==null?void 0:c.map(n=>n.name).join(", "))||"";return s("span",null,[l])}},{key:"status",title:"状态",width:100,align:"center",cellRenderer:({rowData:e})=>{switch(e.status){case f.ENABLED:return s(w,{type:"success"},{default:()=>[d("正常")]});case f.DISABLED:return s(w,{type:"info"},{default:()=>[d("禁用")]});case f.DEACTIVATED:return s(w,{type:"info"},{default:()=>[d("待激活")]});default:return s(w,{type:"warning"},{default:()=>[d("未知")]})}}},{key:"createdAt",title:"创建时间",width:200,align:"center",cellRenderer:({rowData:e})=>s("span",null,[$(e.createdAt).format("YYYY-MM-DD HH:mm:ss")])},{key:"updatedAt",title:"更新时间",width:200,align:"center",cellRenderer:({rowData:e})=>s("span",null,[$(e.updatedAt).format("YYYY-MM-DD HH:mm:ss")])},{key:"operations",title:"操作",width:200,fixed:re.RIGHT,cellRenderer:({rowData:e})=>s(ee,null,[s(h,{size:"small",plain:!0,onClick:()=>t(e,"edit")},{default:()=>[d("修改")]}),e.status===f.DEACTIVATED||e.status===f.DISABLED?s(h,{size:"small",plain:!0,onClick:()=>t(e,"activate")},{default:()=>[d("启用")]}):s(h,{size:"small",plain:!0,onClick:()=>t(e,"disable")},{default:()=>[d("禁用")]}),s(le,{title:"确定要删除吗？",onConfirm:()=>t(e,"delete")},{reference:()=>s(h,{size:"small",plain:!0,type:"danger"},{default:()=>[d("删除")]})})])}]}const Ee={"h-full":"","w-full":"",flex:"","flex-col":"","gap-4":"","pa-4":""},ye=E({__name:"userManager",setup(t){const e=T([]),l=T({index:1,size:10}),c=_e(i);L(()=>{n(1,l.size)});async function n(r,a){try{const u=(await k.get(`${I.apiBaseUrl}/user/list`,{params:{pageIndex:r,pageSize:a}})).data;if(u.success)e.splice(0,e.length,...u.data);else throw new Error(u.message)}catch(u){m.error(u.message)}}function i(r,a){switch(a){case"edit":break;case"disable":y(r);break;case"activate":D(r);break;case"delete":g(r);break}}async function y(r){try{const a=(await k.put(`${I.apiBaseUrl}/user/ban`,null,{params:{id:r.userId}})).data;if(a.success)m.success(a.message),await n(l.index,l.size);else throw new Error(a.message)}catch(a){m.error(a.message)}}async function D(r){try{const a=(await k.put(`${I.apiBaseUrl}/user/activate`,null,{params:{id:r.userId}})).data;if(a.success)m.success(a.message),await n(l.index,l.size);else throw new Error(a.message)}catch(a){m.error(a.message)}}async function g(r){try{const a=(await k.delete(`${I.apiBaseUrl}/user/${r.userId}`)).data;if(a.success)m.success(a.message),await n(l.index,l.size);else throw new Error(a.message)}catch(a){m.error(a.message)}}return(r,a)=>{const u=be,Y=fe,M=se,K=ne;return p(),B("div",Ee,[r.$route.meta.parentInfo?(p(),A(Y,{key:0},{default:_(()=>[s(u,{to:r.$route.meta.parentInfo.link},{default:_(()=>[d(v(r.$route.meta.parentInfo.name),1)]),_:1},8,["to"]),s(u,null,{default:_(()=>[d(v(r.$route.name),1)]),_:1})]),_:1})):ae("",!0),s(K,{"flex-1":""},{default:_(({width:P,height:H})=>[s(M,{columns:o(c),data:o(e),width:P,height:H,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}}),Ne=te(ye,[["__scopeId","data-v-4be6c149"]]);export{Ne as default};
