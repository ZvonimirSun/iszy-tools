import{dC as B,dD as C,B as H,i as V,W as b,v as D,o as F,f as R,l as a,w as f,n as c,x,y as z,z as A,q as I,g as N,F as L,E as M,t as G,e as O}from"./index-82VMCAc5.js";import{E as P}from"./el-divider-HpBPLbXT.js";import{a as T,E as W}from"./el-form-item-IDtfksJw.js";import{E as j}from"./el-switch-7Wzafv-8.js";import{E as J}from"./el-input-number-SHeKTCyg.js";import"./el-tag-aALuT3Cj.js";import{E as K,a as Q}from"./el-select-LKD3ruYV.js";import"./el-scrollbar-vz8xv5bG.js";import"./el-popper-Ag4L26gb.js";import"./castArray-SWj-A0_F.js";import"./index-YbX52PWx.js";import"./index-dfPbIFkj.js";import"./isEqual-6VpC74Y3.js";import"./hasIn-qQWuPzOR.js";import"./strings-f57AACQx.js";import"./toInteger-HmON_Wuj.js";import"./toFinite-murRI7WW.js";import"./isUndefined-IZwZ21d-.js";let S,E,h=0,w=0;function X(u,n,v){let o=n&&v||0;const t=n||new Array(16);u=u||{};let d=u.node||S,i=u.clockseq!==void 0?u.clockseq:E;if(d==null||i==null){const e=u.random||(u.rng||B)();d==null&&(d=S=[e[0]|1,e[1],e[2],e[3],e[4],e[5]]),i==null&&(i=E=(e[6]<<8|e[7])&16383)}let s=u.msecs!==void 0?u.msecs:Date.now(),l=u.nsecs!==void 0?u.nsecs:w+1;const _=s-h+(l-w)/1e4;if(_<0&&u.clockseq===void 0&&(i=i+1&16383),(_<0||s>h)&&u.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");h=s,w=l,E=i,s+=122192928e5;const p=((s&268435455)*1e4+l)%4294967296;t[o++]=p>>>24&255,t[o++]=p>>>16&255,t[o++]=p>>>8&255,t[o++]=p&255;const r=s/4294967296*1e4&268435455;t[o++]=r>>>8&255,t[o++]=r&255,t[o++]=r>>>24&15|16,t[o++]=r>>>16&255,t[o++]=i>>>8|128,t[o++]=i&255;for(let e=0;e<6;++e)t[o+e]=d[e];return n||C(t)}const Y="00000000-0000-0000-0000-000000000000",Z={class:"btnGroup"},$={class:"resultPanel"},ee=H({__name:"uuid",setup(u){const n=V({count:1,version:"v4",hasHyphen:!0}),v=V(!0),o=V(0),t=V("");b(n,function(s){s.version==="nil"&&s.count!==1&&(s.count=1),v.value&&d()},{deep:!0}),b(v,function(s){s&&d()});function d(){o.value++,t.value="";const s=o.value,l=n.value.version,_=n.value.count,p=n.value.hasHyphen;for(let r=0;r<_&&s===o.value;r++){let e="";switch(l){case"v1":{e=X();break}case"v4":{e=D();break}case"nil":{e=Y;break}}p?t.value+=e+`
`:t.value+=e.replaceAll("-","")+`
`}}function i(){o.value=0,n.value={count:1,version:"v4",hasHyphen:!0}}return(s,l)=>{const _=K,p=Q,r=T,e=J,y=j,U=W,g=P,k=M,q=G;return F(),R(L,null,[a(U,{layout:"inline",model:c(n)},{default:f(()=>[a(r,{label:"版本"},{default:f(()=>[a(p,{modelValue:c(n).version,"onUpdate:modelValue":l[0]||(l[0]=m=>c(n).version=m)},{default:f(()=>[a(_,{value:"v1"},{default:f(()=>[x(" Version 1 ")]),_:1}),a(_,{value:"v4"},{default:f(()=>[x(" Version 4 ")]),_:1}),a(_,{value:"nil"},{default:f(()=>[x(" NIL ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),z(a(r,{label:"数量"},{default:f(()=>[a(e,{modelValue:c(n).count,"onUpdate:modelValue":l[1]||(l[1]=m=>c(n).count=m),max:500,min:1,step:1},null,8,["modelValue"])]),_:1},512),[[A,c(n).version!=="nil"]]),a(r,{label:"连字符"},{default:f(()=>[a(y,{modelValue:c(n).hasHyphen,"onUpdate:modelValue":l[2]||(l[2]=m=>c(n).hasHyphen=m)},null,8,["modelValue"])]),_:1}),a(r,{label:"自动生成"},{default:f(()=>[a(y,{modelValue:c(v),"onUpdate:modelValue":l[3]||(l[3]=m=>I(v)?v.value=m:null)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),a(g),N("div",Z,[a(k,{type:"primary",onClick:d},{default:f(()=>[x(" 生成 ")]),_:1}),a(k,{onClick:i},{default:f(()=>[x(" 重置 ")]),_:1})]),N("div",$,[a(q,{modelValue:c(t),"onUpdate:modelValue":l[4]||(l[4]=m=>I(t)?t.value=m:null),type:"textarea",placeholder:"结果栏",autosize:{minRows:10,maxRows:20}},null,8,["modelValue"])])],64)}}}),Ee=O(ee,[["__scopeId","data-v-cac807fc"]]);export{Ee as default};
