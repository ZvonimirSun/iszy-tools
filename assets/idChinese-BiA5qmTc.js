import{j as b,a$ as k,R as C,ad as V,o as d,F as p,K as r,w as s,L as c,m as a,W as w,X as m,G as t,I as l,H as W,$ as x}from"./index-CQU3zzuo.js";import{E as B}from"./el-divider-CoVL8qOV.js";import{T as E,P as I}from"./Router-DyhZE3F6.js";function N(o){return new Worker("/assets/idChinese.worker-CeQlrtYR.js",{type:"module",name:o==null?void 0:o.name})}const F=b({__name:"idChinese",setup(o){const{post:_,data:e,terminate:h}=k(new N),n=C("");V(()=>{h()});async function y(){n.value.length>=18?(e.value=void 0,_({idData:n.value})):e.value=void 0}return(z,i)=>{const u=E,f=x,D=B,g=I;return d(),p(m,null,[r(u,{level:3},{default:s(()=>[c(" 请输入身份证号码 ")]),_:1}),r(f,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=v=>w(n)?n.value=v:null),placeholder:"3205************",onInput:y},null,8,["modelValue"]),a(e)&&a(e).checkIdCard?(d(),p(m,{key:0},[r(D),r(u,{level:3},{default:s(()=>[c(" 信息 ")]),_:1}),r(g,null,{default:s(()=>[t("ul",null,[t("li",null,"性别："+l(a(e).sex),1),t("li",null,"年龄："+l(a(e).age)+" 岁",1),t("li",null,"住址："+l(a(e).address.all.replace(/-/g,"")),1),t("li",null,"生日："+l(a(e).birthDay.year)+" 年 "+l(a(e).birthDay.month)+" 月 "+l(a(e).birthDay.day)+" 日",1),t("li",null,"农历生日："+l(a(e).birthDay.nong.split("/")[0])+" 年 "+l(a(e).birthDay.nong.split("/")[1])+" 月 "+l(a(e).birthDay.nong.split("/")[2])+" 日",1),t("li",null,"出生周："+l(a(e).birthDay.week),1),t("li",null,"星座："+l(a(e).birthDay.zodiac),1),t("li",null,"生肖："+l(a(e).birthDay.zodiac_zh),1)])]),_:1})],64)):W("",!0)],64)}}});export{F as default};
