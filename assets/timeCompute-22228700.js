import{_ as w,y as u,o as M,c as B,w as t,a as e,b as y,n as m,z as d,B as F}from"./index-36befa60.js";import{E as S,a as j}from"./el-form-item-5a57dbed.js";import"./el-tag-63260d41.js";import{E as z,a as O}from"./el-select-d2f9c943.js";import"./el-scrollbar-e88d9e52.js";import"./el-popper-916d0726.js";import{E as P}from"./el-date-picker-72a1e22f.js";import"./index-d2029fc8.js";import{d as p}from"./dayjs.min-de6b513b.js";import{_ as R}from"./Title-bdaa702d.js";import"./castArray-99bf8dc1.js";import"./index-6392e677.js";import"./strings-a8b9ad4b.js";import"./isEqual-5db5da5d.js";import"./index-cf1c80a5.js";import"./ResizeObserver.es-0f9f8adb.js";const X={__name:"timeCompute",setup(q){const i=new Date,n=u(i),o=u(i.getTime()),r=u("ms"),f=u(i),_=u(100),v=u(p(i).add(100,"days").format("YYYY-MM-DD")),V=u(i),c=u(p(i).add(100,"days").toDate()),b=u(100);function x(){if(o.value&&!isNaN(parseInt(o.value))){const D=p(parseInt(o.value+(r.value==="s"?"000":"")));D.isValid()?n.value=D:n.value=void 0}else n.value=void 0}function E(){if(n.value)switch(r.value){case"ms":o.value=p(n.value).format("x");break;case"s":o.value=p(n.value).format("X");break;default:o.value=void 0;break}else o.value=void 0}function T(){f.value&&!isNaN(parseInt(_.value))?v.value=p(f.value).add(parseInt(_.value),"days").format("YYYY-MM-DD"):v.value=""}function Y(){V.value&&c.value?b.value=p(c.value).diff(p(V.value),"days"):b.value=""}return(D,l)=>{const U=R,g=P,s=j,k=z,I=O,C=F,N=S;return M(),B(N,{"label-position":"top"},{default:t(()=>[e(U,{level:3},{default:t(()=>[y(" 转换时间戳 ")]),_:1}),e(s,{label:"时间"},{default:t(()=>[e(g,{modelValue:m(n),"onUpdate:modelValue":l[0]||(l[0]=a=>d(n)?n.value=a:null),type:"datetime",onChange:E},null,8,["modelValue"])]),_:1}),e(s,{label:"时间戳"},{default:t(()=>[e(C,{modelValue:m(o),"onUpdate:modelValue":l[2]||(l[2]=a=>d(o)?o.value=a:null),onChange:x},{append:t(()=>[e(I,{modelValue:m(r),"onUpdate:modelValue":l[1]||(l[1]=a=>d(r)?r.value=a:null),onChange:E},{default:t(()=>[e(k,{label:"秒",value:"s"}),e(k,{label:"毫秒",value:"ms"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(U,{level:3},{default:t(()=>[y(" 计算几天后的日期 ")]),_:1}),e(s,{label:"日期"},{default:t(()=>[e(g,{modelValue:m(f),"onUpdate:modelValue":l[3]||(l[3]=a=>d(f)?f.value=a:null),onChange:T},null,8,["modelValue"])]),_:1}),e(s,{label:"相差天数（输入负数向前计算）"},{default:t(()=>[e(C,{modelValue:m(_),"onUpdate:modelValue":l[4]||(l[4]=a=>d(_)?_.value=a:null),onChange:T},{append:t(()=>[y(" 天 ")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"目标日期"},{default:t(()=>[e(C,{modelValue:m(v),"onUpdate:modelValue":l[5]||(l[5]=a=>d(v)?v.value=a:null),readonly:""},null,8,["modelValue"])]),_:1}),e(U,{level:3},{default:t(()=>[y(" 计算日期差 ")]),_:1}),e(s,{label:"开始日期"},{default:t(()=>[e(g,{modelValue:m(V),"onUpdate:modelValue":l[6]||(l[6]=a=>d(V)?V.value=a:null),onChange:Y},null,8,["modelValue"])]),_:1}),e(s,{label:"结束日期"},{default:t(()=>[e(g,{modelValue:m(c),"onUpdate:modelValue":l[7]||(l[7]=a=>d(c)?c.value=a:null),onChange:Y},null,8,["modelValue"])]),_:1}),e(s,{label:"相差天数"},{default:t(()=>[e(C,{modelValue:m(b),"onUpdate:modelValue":l[8]||(l[8]=a=>d(b)?b.value=a:null),readonly:""},{append:t(()=>[y(" 天 ")]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},ne=w(X,[["__scopeId","data-v-fb985e6f"]]);export{ne as default};
