import{L,j as M,B as v,o as w,ad as S,ae as s,b as c,y as i,X as p,af as N,aS as $,aQ as j,a3 as E}from"./vendor-c7d095d4.js";import{s as b,u as U}from"./nzh-fcc139a4.js";var _=b,C=U;function F(r,u){return{encodeS:function(n,e){return e=C.extend({ww:!0,tenMin:!0},e),_.CL.call(r,n,e)},encodeB:function(n,e){return e=C.extend({ww:!0},e),_.CL.call(u,n,e)},decodeS:function(){return _.unCL.apply(r,arguments)},decodeB:function(){return _.unCL.apply(u,arguments)},toMoney:function(n,e){return e=C.extend({ww:!0},e),_.toMoney.call(u,n,e)}}}var I=F,O={ch:"零一二三四五六七八九",ch_u:"个十百千万亿",ch_f:"负",ch_d:"点"},D={ch:"零壹贰叁肆伍陆柒捌玖",ch_u:"个拾佰仟万亿",ch_f:"负",ch_d:"点",m_t:"人民币",m_z:"整",m_u:"元角分"},G={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"},Q={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"},V=b,z=I,f={s:O,b:D,hk_s:G,hk_b:Q},y=function(r){this.lang=r,this.encode=function(){return V.CL.apply(r,arguments)},this.decode=function(){return V.unCL.apply(r,arguments)},this.toMoney=function(){return V.toMoney.apply(r,arguments)}};y.langs=f;y.cn=z(f.s,f.b);y.hk=z(f.hk_s,f.hk_b);var R=y;const o=L(R),X=M({__name:"nzh",setup(r){const u=v(""),n=v(""),e=v(""),l=v("");function g(t){if(t)try{n.value=o.cn.encodeS(t),e.value=o.cn.encodeB(t),u.value=o.cn.toMoney(t)}catch{}}function B(t){if(t)try{l.value=o.cn.decodeS(t),e.value=o.cn.encodeB(l.value),u.value=o.cn.toMoney(l.value)}catch{}}function k(t){if(t)try{l.value=o.cn.decodeB(t),n.value=o.cn.encodeS(l.value),u.value=o.cn.toMoney(l.value)}catch{}}return(t,a)=>{const m=N,h=$,x=j;return w(),S(x,{"label-position":"top"},{default:s(()=>[c(h,{label:"小写"},{default:s(()=>[c(m,{modelValue:i(l),"onUpdate:modelValue":a[0]||(a[0]=d=>p(l)?l.value=d:null),onChange:g},null,8,["modelValue"])]),_:1}),c(h,{label:"中文小写"},{default:s(()=>[c(m,{modelValue:i(n),"onUpdate:modelValue":a[1]||(a[1]=d=>p(n)?n.value=d:null),onChange:B},null,8,["modelValue"])]),_:1}),c(h,{label:"中文大写"},{default:s(()=>[c(m,{modelValue:i(e),"onUpdate:modelValue":a[2]||(a[2]=d=>p(e)?e.value=d:null),onChange:k},null,8,["modelValue"])]),_:1}),c(h,{label:"中文金额"},{default:s(()=>[c(m,{modelValue:i(u),"onUpdate:modelValue":a[3]||(a[3]=d=>p(u)?u.value=d:null),readonly:""},null,8,["modelValue"])]),_:1})]),_:1})}}});const H=E(X,[["__scopeId","data-v-e12fed31"]]);export{H as default};
