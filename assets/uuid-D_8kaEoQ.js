import{j as h,R as V,a7 as k,o as B,F as D,K as t,w as m,m as p,L as _,ah as g,an as C,W as I,G as U,X as F,N as R,$ as L,a0 as $}from"./index-DZyj1-Eq.js";import{E as A}from"./el-divider-Ds7iMpCz.js";import{a as G,E as j}from"./el-form-item-dYeucJdz.js";import{E as z}from"./el-switch-BxBUebtU.js";import{E as K}from"./el-input-number-D3nZQAgw.js";/* empty css               */import{E as O,a as P}from"./el-select-C_m2epEn.js";import"./el-popper-Dbe9STkn.js";import{r as T,d as W,v as X}from"./Router-DzFaFs_4.js";import"./castArray-BtlJqveF.js";import"./index-DfbZXiWk.js";import"./index-rr_xFPKL.js";import"./strings-CfpEDqZ0.js";import"./_baseIteratee-DlhbFsgR.js";import"./index-hDK7qXxd.js";import"./index-BDN6pmIY.js";import"./isUndefined-DCTLXrZ8.js";const q="00000000-0000-0000-0000-000000000000",x={};function J(e,o,i){let r;{const u=Date.now(),l=T();M(x,u,l),r=Q(l,x.msecs,x.nsecs,x.clockseq,x.node,o,i)}return o?r:W(r)}function M(e,o,i){return e.msecs??(e.msecs=-1/0),e.nsecs??(e.nsecs=0),o===e.msecs?(e.nsecs++,e.nsecs>=1e4&&(e.node=void 0,e.nsecs=0)):o>e.msecs?e.nsecs=0:o<e.msecs&&(e.node=void 0),e.node||(e.node=i.slice(10,16),e.node[0]|=1,e.clockseq=(i[8]<<8|i[9])&16383),e.msecs=o,e}function Q(e,o,i,r,u,l,a=0){l||(l=new Uint8Array(16),a=0),o??(o=Date.now()),i??(i=0),r??(r=(e[8]<<8|e[9])&16383),u??(u=e.slice(10,16)),o+=122192928e5;const s=((o&268435455)*1e4+i)%4294967296;l[a++]=s>>>24&255,l[a++]=s>>>16&255,l[a++]=s>>>8&255,l[a++]=s&255;const n=o/4294967296*1e4&268435455;l[a++]=n>>>8&255,l[a++]=n&255,l[a++]=n>>>24&15|16,l[a++]=n>>>16&255,l[a++]=r>>>8|128,l[a++]=r&255;for(let d=0;d<6;++d)l[a++]=u[d];return l}const Y={class:"btnGroup"},Z={class:"resultPanel"},b=h({__name:"uuid",setup(e){const o=V({count:1,version:"v4",hasHyphen:!0}),i=V(!0),r=V(0),u=V("");k(o,s=>{s.version==="nil"&&s.count!==1&&(s.count=1),i.value&&l()},{deep:!0}),k(i,s=>{s&&l()});function l(){r.value++,u.value="";const s=r.value,n=o.value.version,d=o.value.count,y=o.value.hasHyphen;for(let c=0;c<d&&s===r.value;c++){let v="";switch(n){case"v1":{v=J();break}case"v4":{v=X();break}case"nil":{v=q;break}}y?u.value+=`${v}
`:u.value+=`${v.replaceAll("-","")}
`}}function a(){r.value=0,o.value={count:1,version:"v4",hasHyphen:!0}}return(s,n)=>{const d=O,y=P,c=G,v=K,E=z,N=j,H=A,w=R,S=L;return B(),D(F,null,[t(N,{layout:"inline",model:p(o)},{default:m(()=>[t(c,{label:"版本"},{default:m(()=>[t(y,{modelValue:p(o).version,"onUpdate:modelValue":n[0]||(n[0]=f=>p(o).version=f)},{default:m(()=>[t(d,{value:"v1"},{default:m(()=>n[5]||(n[5]=[_(" Version 1 ")])),_:1}),t(d,{value:"v4"},{default:m(()=>n[6]||(n[6]=[_(" Version 4 ")])),_:1}),t(d,{value:"nil"},{default:m(()=>n[7]||(n[7]=[_(" NIL ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),g(t(c,{label:"数量"},{default:m(()=>[t(v,{modelValue:p(o).count,"onUpdate:modelValue":n[1]||(n[1]=f=>p(o).count=f),max:500,min:1,step:1},null,8,["modelValue"])]),_:1},512),[[C,p(o).version!=="nil"]]),t(c,{label:"连字符"},{default:m(()=>[t(E,{modelValue:p(o).hasHyphen,"onUpdate:modelValue":n[2]||(n[2]=f=>p(o).hasHyphen=f)},null,8,["modelValue"])]),_:1}),t(c,{label:"自动生成"},{default:m(()=>[t(E,{modelValue:p(i),"onUpdate:modelValue":n[3]||(n[3]=f=>I(i)?i.value=f:null)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(H),U("div",Y,[t(w,{type:"primary",onClick:l},{default:m(()=>n[8]||(n[8]=[_(" 生成 ")])),_:1}),t(w,{onClick:a},{default:m(()=>n[9]||(n[9]=[_(" 重置 ")])),_:1})]),U("div",Z,[t(S,{modelValue:p(u),"onUpdate:modelValue":n[4]||(n[4]=f=>I(u)?u.value=f:null),type:"textarea",placeholder:"结果栏",autosize:{minRows:10,maxRows:20}},null,8,["modelValue"])])],64)}}}),xe=$(b,[["__scopeId","data-v-86996254"]]);export{xe as default};
