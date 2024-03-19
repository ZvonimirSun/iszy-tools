import{X as s,ar as l,as as f,F as I,aE as g,o as B,aY as p,bd as E,a$ as o,J as x,K as b,a1 as L,u as h}from"./index-vT3yfe1z.js";import"./el-empty-C_CVCUUw.js";import{F as C,E as N,a as Y}from"./el-table-v2-k_gLLG3Z.js";import"./el-scrollbar-vz8xv5bG.js";import{d as D}from"./dayjs.min-qkfpuL3M.js";/* empty css               */import{E as m}from"./index-vbiEZMAP.js";import"./raf-mLeKyG55.js";import"./memoize-one.esm-JaOscZgY.js";import"./castArray-NgwCDOe_.js";var c=function(a){return a[a.DELETED=-1]="DELETED",a[a.DEACTIVATED=0]="DEACTIVATED",a[a.ENABLED=1]="ENABLED",a[a.DISABLED=2]="DISABLED",a}(c||{});function v(a){return[{key:"userId",dataKey:"userId",width:150,hidden:!0},{key:"userName",dataKey:"userName",title:"用户名",width:150,align:"center"},{key:"nickName",dataKey:"nickName",title:"昵称",width:150,align:"center"},{key:"email",dataKey:"email",title:"邮箱",width:150,align:"center"},{key:"roles",title:"角色",width:150,align:"center",cellRenderer:({rowData:e})=>{var d;const n=((d=e.roles)==null?void 0:d.map(u=>u.name).join(", "))||"";return s("span",null,[n])}},{key:"status",title:"状态",width:100,align:"center",cellRenderer:({rowData:e})=>{switch(e.status){case c.ENABLED:return s(m,{type:"success"},{default:()=>[l("正常")]});case c.DISABLED:return s(m,{type:"info"},{default:()=>[l("禁用")]});case c.DEACTIVATED:return s(m,{type:"info"},{default:()=>[l("待激活")]});default:return s(m,{type:"warning"},{default:()=>[l("未知")]})}}},{key:"createdAt",title:"创建时间",width:200,align:"center",cellRenderer:({rowData:e})=>s("span",null,[D(e.createdAt).format("YYYY-MM-DD HH:mm:ss")])},{key:"updatedAt",title:"更新时间",width:200,align:"center",cellRenderer:({rowData:e})=>s("span",null,[D(e.updatedAt).format("YYYY-MM-DD HH:mm:ss")])},{key:"operations",title:"操作",width:150,fixed:C.RIGHT,cellRenderer:({rowData:e})=>e.status===c.DEACTIVATED||e.status===c.DISABLED?s(f,{size:"small",plain:!0,onClick:()=>a(e,"activate")},{default:()=>[l("启用")]}):s(f,{size:"small",plain:!0,onClick:()=>a(e,"disable")},{default:()=>[l("禁用")]})}]}const z={"h-full":"","w-full":""},J=I({__name:"userManager",setup(a){const e=g([]),n=g({index:1,size:10}),d=v(y);B(()=>{u(1,n.size)});async function u(r,t){try{const i=(await E.get(`${p.apiOrigin}/user/list`,{params:{pageIndex:r,pageSize:t}})).data;if(i.success)e.splice(0,e.length,...i.data);else throw new Error(i.message)}catch(i){o.error(i.message)}}function y(r,t){switch(t){case"disable":w(r);break;case"activate":A(r);break}}async function w(r){try{const t=(await E.post(`${p.apiOrigin}/user/ban`,null,{params:{id:r.userId}})).data;if(t.success)o.success(t.message),await u(n.index,n.size);else throw new Error(t.message)}catch(t){o.error(t.message)}}async function A(r){try{const t=(await E.post(`${p.apiOrigin}/user/activate`,null,{params:{id:r.userId}})).data;if(t.success)o.success(t.message),await u(n.index,n.size);else throw new Error(t.message)}catch(t){o.error(t.message)}}return(r,t)=>{const i=N,_=Y;return x(),b("div",z,[s(_,null,{default:L(({width:k,height:T})=>[s(i,{columns:h(d),data:h(e),width:k,height:T,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}});export{J as default};
