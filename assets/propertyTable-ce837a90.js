import{h as J,R as N,V as f,a0 as C,X as R,k as m,Y as G,n as g,o as b,l as V,a as d,w as x,a1 as z,c as j,B as A,a2 as L,_ as P}from"./index-8b7a132d.js";import{E as F}from"./el-empty-a9be0219.js";import{E as M,a as X}from"./el-table-v2-7dd887c3.js";import"./el-scrollbar-e88d9e52.js";import"./castArray-6c2541d8.js";const Y=J({__name:"propertyTable",props:{height:{default:null}},setup(q){N(()=>{f.on("updateGeojsonLayer",v),f.on("updateEditor",v)});const r=C(null),e=R({row:null,col:null,value:null,changed:!1});let p=!1;const h=m(()=>r.value?.features?.length?r.value.features.map(t=>t.properties||{}):[]),_=m(()=>{if(r.value?.features?.length){const t=S(h.value);return t.length?t.map(a=>({title:a,dataKey:a,key:a,width:150,cellRenderer:({rowData:n,column:l,rowIndex:i,columnIndex:c})=>{let u,y;n[l.dataKey]!=null?(y=typeof n[l.dataKey],~["boolean","number","string"].indexOf(y)?u=n[l.dataKey].toString():u=JSON.stringify(n[l.dataKey])):u="";const K=()=>{e.row=i,e.col=c,e.value=u},O=()=>{if(e.changed){let o;if(e.value!=null?o=e.value.trim():o="",y!=="string")try{o=JSON.parse(o)}catch{}k(i,c,o)}e.row=null,e.col=null,e.value=null,e.changed=!1},T=o=>{e.value=o,e.changed=!0},B=o=>{o?.focus?.()};return e.row===i&&e.col===c?d(A,{ref:B,modelValue:e.value,onInput:T,onBlur:O},null):d("div",{class:"table-v2-inline-editing-trigger",onClick:K,title:u},[u])}})):null}else return null}),E=G(w,500);function k(t,s,a){const n=r.value?.features?.[t];if(n){n.properties||(n.properties={});const l=_.value?.[s]?.dataKey;l&&(n.properties[l]=a)}r.value&&E(L(r.value))}function w(t){p||(p=!0,f.emit("updateEditor",t),p=!1)}function v(){p||f.emit("getGeoJson",function(t){r.value=t})}function S(t){return[...t.reduce((s,a)=>(Object.keys(a).forEach(n=>s.add(n)),s),new Set)]}return(t,s)=>{const a=M,n=X,l=F;return g(_)?(b(),V("div",{key:0,"w-full":"",style:z({height:t.height?t.height+"px":void 0})},[d(n,null,{default:x(({height:i,width:c})=>[d(a,{columns:g(_),data:g(h),width:c,height:i,fixed:""},null,8,["columns","data","width","height"])]),_:1})],4)):(b(),j(l,{key:1}))}}});const I=P(Y,[["__scopeId","data-v-3f556491"]]);export{I as default};
