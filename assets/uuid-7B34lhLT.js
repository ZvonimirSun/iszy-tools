import{k as D,R as V,a7 as U,E as H,r as R,K as i,F as g,w as m,ai as S,x as p,N as _,an as B,X as h,L as C,W as F,Y as $,a0 as b}from"./index-CCkNfQfc.js";import{E as L}from"./el-divider-B17vEZLr.js";import{E as A,a as z}from"./el-form-item-B1V_hAdw.js";import{E as G}from"./el-switch-u0Ep641u.js";import{E as K}from"./el-input-number-B0jKd6l-.js";/* empty css               */import{a as O,E as P}from"./el-select-CDpcS1tE.js";import"./el-popper-DTu6Qm0A.js";import{r as T,e as W,v as X}from"./Router-C3XbF8WZ.js";import"./castArray-CLK-FRoT.js";import"./clone-ASGjF3R-.js";import"./index-DfZXvdhB.js";import"./index-87KBNoaX.js";import"./strings-FHZ87uGg.js";import"./_baseIteratee-DkuC7_VU.js";import"./index-Bo1UUUup.js";import"./index-B-u4G1c_.js";import"./isUndefined-DCTLXrZ8.js";const Y="00000000-0000-0000-0000-000000000000",x={};function j(e,o,r){let s;{const u=Date.now(),l=T();q(x,u,l),s=J(l,x.msecs,x.nsecs,x.clockseq,x.node,o,r)}return o??W(s)}function q(e,o,r){return e.msecs??(e.msecs=-1/0),e.nsecs??(e.nsecs=0),o===e.msecs?(e.nsecs++,e.nsecs>=1e4&&(e.node=void 0,e.nsecs=0)):o>e.msecs?e.nsecs=0:o<e.msecs&&(e.node=void 0),e.node||(e.node=r.slice(10,16),e.node[0]|=1,e.clockseq=(r[8]<<8|r[9])&16383),e.msecs=o,e}function J(e,o,r,s,u,l,t=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!l)l=new Uint8Array(16),t=0;else if(t<0||t+16>l.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);o??(o=Date.now()),r??(r=0),s??(s=(e[8]<<8|e[9])&16383),u??(u=e.slice(10,16)),o+=122192928e5;const a=((o&268435455)*1e4+r)%4294967296;l[t++]=a>>>24&255,l[t++]=a>>>16&255,l[t++]=a>>>8&255,l[t++]=a&255;const n=o/4294967296*1e4&268435455;l[t++]=n>>>8&255,l[t++]=n&255,l[t++]=n>>>24&15|16,l[t++]=n>>>16&255,l[t++]=s>>>8|128,l[t++]=s&255;for(let d=0;d<6;++d)l[t++]=u[d];return l}const M={class:"btnGroup"},Q={class:"resultPanel"},Z=D({__name:"uuid",setup(e){const o=V({count:1,version:"v4",hasHyphen:!0}),r=V(!0),s=V(0),u=V("");U(o,a=>{a.version==="nil"&&a.count!==1&&(a.count=1),r.value&&l()},{deep:!0}),U(r,a=>{a&&l()});function l(){s.value++,u.value="";const a=s.value,n=o.value.version,d=o.value.count,E=o.value.hasHyphen;for(let c=0;c<d&&a===s.value;c++){let v="";switch(n){case"v1":{v=j();break}case"v4":{v=X();break}case"nil":{v=Y;break}}E?u.value+=`${v}
`:u.value+=`${v.replaceAll("-","")}
`}}function t(){s.value=0,o.value={count:1,version:"v4",hasHyphen:!0}}return(a,n)=>{const d=P,E=O,c=A,v=K,y=G,k=z,I=L,w=C,N=F;return R(),H($,null,[i(k,{layout:"inline",model:p(o)},{default:m(()=>[i(c,{label:"版本"},{default:m(()=>[i(E,{modelValue:p(o).version,"onUpdate:modelValue":n[0]||(n[0]=f=>p(o).version=f)},{default:m(()=>[i(d,{value:"v1"},{default:m(()=>n[5]||(n[5]=[_(" Version 1 ")])),_:1}),i(d,{value:"v4"},{default:m(()=>n[6]||(n[6]=[_(" Version 4 ")])),_:1}),i(d,{value:"nil"},{default:m(()=>n[7]||(n[7]=[_(" NIL ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),S(i(c,{label:"数量"},{default:m(()=>[i(v,{modelValue:p(o).count,"onUpdate:modelValue":n[1]||(n[1]=f=>p(o).count=f),max:500,min:1,step:1},null,8,["modelValue"])]),_:1},512),[[B,p(o).version!=="nil"]]),i(c,{label:"连字符"},{default:m(()=>[i(y,{modelValue:p(o).hasHyphen,"onUpdate:modelValue":n[2]||(n[2]=f=>p(o).hasHyphen=f)},null,8,["modelValue"])]),_:1}),i(c,{label:"自动生成"},{default:m(()=>[i(y,{modelValue:p(r),"onUpdate:modelValue":n[3]||(n[3]=f=>h(r)?r.value=f:null)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),i(I),g("div",M,[i(w,{type:"primary",onClick:l},{default:m(()=>n[8]||(n[8]=[_(" 生成 ")])),_:1}),i(w,{onClick:t},{default:m(()=>n[9]||(n[9]=[_(" 重置 ")])),_:1})]),g("div",Q,[i(N,{modelValue:p(u),"onUpdate:modelValue":n[4]||(n[4]=f=>h(u)?u.value=f:null),type:"textarea",placeholder:"结果栏",autosize:{minRows:10,maxRows:20}},null,8,["modelValue"])])],64)}}}),Ve=b(Z,[["__scopeId","data-v-86996254"]]);export{Ve as default};
