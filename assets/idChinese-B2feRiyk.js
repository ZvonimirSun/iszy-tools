import{T as v,P as k}from"./Router-wjsfmgt-.js";import{D as V,bn as w,r as C,q as x,H as d,I as p,V as r,$ as s,aq as c,u as a,aw as N,Q as m,ao as t,ah as l,a1 as W,az as z}from"./index-tHblRTxj.js";import{E as B}from"./el-divider-CKlb2CdA.js";function E(o){return new Worker("/assets/idChinese.worker-DA95NPun.js",{type:"module",name:o==null?void 0:o.name})}const U=V({__name:"idChinese",setup(o){const{post:_,data:e,terminate:h}=w(new E),n=C("");x(()=>{h()});async function y(){n.value.length>=18?(e.value=void 0,_({idData:n.value})):e.value=void 0}return(I,i)=>{const u=v,f=z,D=B,g=k;return d(),p(m,null,[r(u,{level:3},{default:s(()=>[c(" 请输入身份证号码 ")]),_:1}),r(f,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=b=>N(n)?n.value=b:null),placeholder:"3205************",onInput:y},null,8,["modelValue"]),a(e)&&a(e).checkIdCard?(d(),p(m,{key:0},[r(D),r(u,{level:3},{default:s(()=>[c(" 信息 ")]),_:1}),r(g,null,{default:s(()=>[t("ul",null,[t("li",null,"性别："+l(a(e).sex),1),t("li",null,"年龄："+l(a(e).age)+" 岁",1),t("li",null,"住址："+l(a(e).address.all.replace(/-/g,"")),1),t("li",null,"生日："+l(a(e).birthDay.year)+" 年 "+l(a(e).birthDay.month)+" 月 "+l(a(e).birthDay.day)+" 日",1),t("li",null,"农历生日："+l(a(e).birthDay.nong.split("/")[0])+" 年 "+l(a(e).birthDay.nong.split("/")[1])+" 月 "+l(a(e).birthDay.nong.split("/")[2])+" 日",1),t("li",null,"出生周："+l(a(e).birthDay.week),1),t("li",null,"星座："+l(a(e).birthDay.zodiac),1),t("li",null,"生肖："+l(a(e).birthDay.zodiac_zh),1)])]),_:1})],64)):W("",!0)],64)}}});export{U as default};
