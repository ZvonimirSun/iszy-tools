import{D as G,n as T,as as p,a9 as z,G as A,q as w,au as L,t as m,o as k,h as V,s as h,w as j,a5 as q,H as F,y as P,av as H,g as I}from"./index-j7kdK-H8.js";import{E as M}from"./el-empty-kPaPTccR.js";import{E as Q,a as U}from"./el-table-v2-ysAlh-6P.js";import"./el-scrollbar-vz8xv5bG.js";import"./raf-hnhz1r9e.js";import"./memoize-one.esm-JaOscZgY.js";import"./castArray-RcvnJ037.js";const W=G({__name:"propertyTable",props:{height:{default:null}},setup(X){T(()=>{p.on("updateGeojsonLayer",E),p.on("updateEditor",E)});const u=z(),n=A({row:null,col:null,value:null,changed:!1});let y=!1;const b=w(()=>{var t,e;return(e=(t=u.value)==null?void 0:t.features)!=null&&e.length?u.value.features.map(a=>a.properties||{}):[]}),g=w(()=>{var t,e;if((e=(t=u.value)==null?void 0:t.features)!=null&&e.length){const a=C(b.value);if(!a.length)return null;const l=a.map(r=>({title:r,dataKey:r,key:r,width:150,cellRenderer:({rowData:s,column:i,rowIndex:c,columnIndex:d})=>{let f,_;s[i.dataKey]!=null?(_=typeof s[i.dataKey],~["boolean","number","string"].indexOf(_)?f=s[i.dataKey].toString():f=JSON.stringify(s[i.dataKey])):f="";const R=()=>{n.row=c,n.col=d,n.value=f},J=()=>{if(n.changed){let o;if(n.value!=null?o=n.value.trim():o="",_!=="string")try{o=JSON.parse(o)}catch{}K(c,d,o)}n.row=null,n.col=null,n.value=null,n.changed=!1},N=o=>{n.value=o,n.changed=!0},B=o=>{var v;(v=o==null?void 0:o.focus)==null||v.call(o)};return n.row===c&&n.col===d?h(P,{ref:B,modelValue:n.value,onInput:N,onBlur:J},null):h("div",{class:"table-v2-inline-editing-trigger",onClick:R,title:f},[f])}}));return l.unshift({title:"序号",dataKey:"index",key:"index",width:50,fixed:!0,cellRenderer:({rowIndex:r})=>h("span",{class:"_index"},[r+1])}),l}else return null}),x=L(O,500);function S(t){var a;let e=t.target;if(e.classList.contains("el-table-v2__row")||(e=e.closest(".el-table-v2__row")),e&&e.parentElement){const l=[].indexOf.call(e.parentElement.children,e),r=(a=e.closest(".el-table-v2__root"))==null?void 0:a.querySelectorAll("._index")[l];if(r){const s=parseInt(r.textContent||"1")-1;p.emit("selectFeature",s)}}}function K(t,e,a){var r,s,i,c;const l=(s=(r=u.value)==null?void 0:r.features)==null?void 0:s[t];if(l){l.properties||(l.properties={});const d=(c=(i=g.value)==null?void 0:i[e])==null?void 0:c.dataKey;d&&(l.properties[d]=a)}u.value&&x(H(u.value))}function O(t){y||(y=!0,p.emit("updateEditor",t),y=!1)}function E(){y||p.emit("getGeoJson",function(t){u.value=t})}function C(t){return[...t.reduce((e,a)=>(Object.keys(a).forEach(l=>e.add(l)),e),new Set)]}return(t,e)=>{const a=Q,l=U,r=M;return m(g)?(k(),V("div",{key:0,"w-full":"",style:q({height:t.height?t.height+"px":void 0})},[h(l,null,{default:j(({height:s,width:i})=>[h(a,{columns:m(g),data:m(b),width:i,height:s,fixed:"",onClick:S},null,8,["columns","data","width","height"])]),_:1})],4)):(k(),F(r,{key:1}))}}}),ae=I(W,[["__scopeId","data-v-bb1c1a0c"]]);export{ae as default};
