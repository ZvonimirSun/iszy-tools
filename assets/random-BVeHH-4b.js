import{d8 as c,a2 as N,j as R,l as E,w as n,aD as y,o as h,K as o,L as f,N as v,$ as C}from"./index-CReUdWLV.js";import{E as M,a as k}from"./el-form-item-JgszK9Qb.js";import{E as $}from"./el-space--5JJRynj.js";import{E as F}from"./el-switch-DESex24S.js";import{E as I}from"./el-input-number-B_Oyf9GG.js";import{b as U}from"./_baseRandom-CgWnUD7v.js";import{t as r}from"./toFinite-DOCs6pkH.js";import"./castArray-DEQpzWzP.js";import"./index-Bm-0nW6y.js";var B=parseFloat,S=Math.min,j=Math.random;function z(e,a,t){if(t&&typeof t!="boolean"&&c(e,a,t)&&(a=t=void 0),t===void 0&&(typeof a=="boolean"?(t=a,a=void 0):typeof e=="boolean"&&(t=e,e=void 0)),e===void 0&&a===void 0?(e=0,a=1):(e=r(e),a===void 0?(a=e,e=0):a=r(a)),e>a){var i=e;e=a,a=i}if(t||e%1||a%1){var s=j();return S(e+s*(a-e+B("1e-"+((s+"").length-1))),a)}return U(e,a)}const D=R({name:"RandomNumber",data:()=>({min:0,max:10,times:1,float:!1,randomNumResult:""}),methods:{randomNum(){try{for(let e=0;e<this.times;e++)this.randomNumResult=z(this.min,this.max,this.float)+(this.randomNumResult===""?"":`
`)+this.randomNumResult}catch{y.error("计算错误")}},clearRandomNum(){this.randomNumResult=""}}});function K(e,a,t,i,s,L){const d=I,l=k,_=F,u=v,p=$,b=C,V=M;return h(),E(V,{"label-col":{sm:{span:2}},"wrapper-col":{sm:{span:3}}},{default:n(()=>[o(l,{label:"最小数字"},{default:n(()=>[o(d,{modelValue:e.min,"onUpdate:modelValue":a[0]||(a[0]=m=>e.min=m),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),o(l,{label:"最大数字"},{default:n(()=>[o(d,{modelValue:e.max,"onUpdate:modelValue":a[1]||(a[1]=m=>e.max=m),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),o(l,{label:"次数"},{default:n(()=>[o(d,{modelValue:e.times,"onUpdate:modelValue":a[2]||(a[2]=m=>e.times=m),modelModifiers:{number:!0},step:1},null,8,["modelValue"])]),_:1}),o(l,{label:"小数"},{default:n(()=>[o(_,{modelValue:e.float,"onUpdate:modelValue":a[3]||(a[3]=m=>e.float=m)},null,8,["modelValue"])]),_:1}),o(l,{"wrapper-col":{sm:{span:3,offset:2}}},{default:n(()=>[o(p,null,{default:n(()=>[o(u,{type:"primary",onClick:e.randomNum},{default:n(()=>[f(" 生成 ")]),_:1},8,["onClick"]),o(u,{onClick:e.clearRandomNum},{default:n(()=>[f(" 清空 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),o(l,{"wrapper-col":{sm:{span:5}}},{default:n(()=>[o(b,{modelValue:e.randomNumResult,"onUpdate:modelValue":a[4]||(a[4]=m=>e.randomNumResult=m),type:"textarea",readonly:"",autosize:{minRows:2,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1})}const W=N(D,[["render",K],["__scopeId","data-v-c8f4fec6"]]);export{W as default};
