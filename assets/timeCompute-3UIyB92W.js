import{l as n,H as w,w as o,o as M,s as e,z as y,t as m,v as d,y as B}from"./index-6zGE5DCB.js";import{E as F,a as S}from"./el-form-item-NN1yQRXH.js";import"./el-tag-EY9nNPhk.js";import{E as j,a as z}from"./el-select-uCNzHCk_.js";import"./el-scrollbar-vz8xv5bG.js";import"./el-popper-eQgDHU9l.js";import{E as H}from"./el-date-picker-0onn6oiQ.js";import"./index-_kLejrJI.js";import{d as i}from"./dayjs.min-9hzSS0GQ.js";import{_ as O}from"./Title-0mPfXoKw.js";import"./castArray-gABIQ50e.js";import"./index-NQ00la_Z.js";import"./isEqual-xESWA3Y_.js";import"./hasIn-lgsnO1s2.js";import"./strings-2kcWSpwp.js";import"./toInteger--1QioUwv.js";import"./toFinite-tbsrRPt8.js";import"./isUndefined-IZwZ21d-.js";import"./index-N2T5sIdy.js";import"./index-lPu0chFm.js";const me={__name:"timeCompute",setup(P){const p=new Date,u=n(p),t=n(p.getTime()),r=n("ms"),f=n(p),v=n(100),_=n(i(p).add(100,"days").format("YYYY-MM-DD")),V=n(p),b=n(i(p).add(100,"days").toDate()),c=n(100);function I(){if(t.value&&!isNaN(parseInt(t.value))){const U=i(parseInt(t.value+(r.value==="s"?"000":"")));U.isValid()?u.value=U:u.value=void 0}else u.value=void 0}function E(){if(u.value)switch(r.value){case"ms":t.value=i(u.value).format("x");break;case"s":t.value=i(u.value).format("X");break;default:t.value=void 0;break}else t.value=void 0}function T(){f.value&&!isNaN(parseInt(v.value))?_.value=i(f.value).add(parseInt(v.value),"days").format("YYYY-MM-DD"):_.value=""}function Y(){V.value&&b.value?c.value=i(b.value).diff(i(V.value),"days"):c.value=""}return(U,l)=>{const C=O,g=H,s=S,k=j,N=z,D=B,x=F;return M(),w(x,{"label-position":"top"},{default:o(()=>[e(C,{level:3},{default:o(()=>[y(" 转换时间戳 ")]),_:1}),e(s,{label:"时间"},{default:o(()=>[e(g,{modelValue:m(u),"onUpdate:modelValue":l[0]||(l[0]=a=>d(u)?u.value=a:null),type:"datetime",onChange:E},null,8,["modelValue"])]),_:1}),e(s,{label:"时间戳"},{default:o(()=>[e(D,{modelValue:m(t),"onUpdate:modelValue":l[2]||(l[2]=a=>d(t)?t.value=a:null),onChange:I},{append:o(()=>[e(N,{modelValue:m(r),"onUpdate:modelValue":l[1]||(l[1]=a=>d(r)?r.value=a:null),onChange:E},{default:o(()=>[e(k,{label:"秒",value:"s"}),e(k,{label:"毫秒",value:"ms"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(C,{level:3},{default:o(()=>[y(" 计算几天后的日期 ")]),_:1}),e(s,{label:"日期"},{default:o(()=>[e(g,{modelValue:m(f),"onUpdate:modelValue":l[3]||(l[3]=a=>d(f)?f.value=a:null),onChange:T},null,8,["modelValue"])]),_:1}),e(s,{label:"相差天数（输入负数向前计算）"},{default:o(()=>[e(D,{modelValue:m(v),"onUpdate:modelValue":l[4]||(l[4]=a=>d(v)?v.value=a:null),onChange:T},{append:o(()=>[y(" 天 ")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"目标日期"},{default:o(()=>[e(D,{modelValue:m(_),"onUpdate:modelValue":l[5]||(l[5]=a=>d(_)?_.value=a:null),readonly:""},null,8,["modelValue"])]),_:1}),e(C,{level:3},{default:o(()=>[y(" 计算日期差 ")]),_:1}),e(s,{label:"开始日期"},{default:o(()=>[e(g,{modelValue:m(V),"onUpdate:modelValue":l[6]||(l[6]=a=>d(V)?V.value=a:null),onChange:Y},null,8,["modelValue"])]),_:1}),e(s,{label:"结束日期"},{default:o(()=>[e(g,{modelValue:m(b),"onUpdate:modelValue":l[7]||(l[7]=a=>d(b)?b.value=a:null),onChange:Y},null,8,["modelValue"])]),_:1}),e(s,{label:"相差天数"},{default:o(()=>[e(D,{modelValue:m(c),"onUpdate:modelValue":l[8]||(l[8]=a=>d(c)?c.value=a:null),readonly:""},{append:o(()=>[y(" 天 ")]),_:1},8,["modelValue"])]),_:1})]),_:1})}}};export{me as default};