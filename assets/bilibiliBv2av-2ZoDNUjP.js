import{g as b,h as v,s as o,w as a,F as g,o as w,z as n,C as p,j as V,y}from"./index-j7kdK-H8.js";import{E}from"./el-space-DoOMkzt3.js";import"./index-dxjtCMVP.js";import{E as B,a as N}from"./el-form-item-pniwTBoV.js";import{E as k}from"./el-input-number-4bU3Y8F0.js";import{_ as C}from"./Title-3ELbEFym.js";import{_ as F}from"./Paragraph-ieMrMDB6.js";import{_ as $}from"./Link-HdmLC-lC.js";import"./isEqual-Z5C-wM-O.js";import"./castArray-RcvnJ037.js";import"./index-RZ9jihLr.js";const I={name:"BilibiliBv2av",data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let e=0;for(let i=0;i<6;i++)e+=this.tr[t[this.s[i]]]*58**i;this.aid=e-this.add^this.xor}catch{this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const e=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let i=0;i<6;i++)e[this.s[i]]=this.table[Math.floor(t/58**i)%58];this.bvid=e.join("")}}catch{this.bvid=""}}}},j=V("blockquote",null,"实时计算，直接输入即可",-1);function S(t,e,i,U,q,s){const r=C,_=F,u=k,d=N,h=y,f=B,m=$,c=E;return w(),v(g,null,[o(r,{level:3},{default:a(()=>[n(" 转换 ")]),_:1}),o(_,null,{default:a(()=>[j]),_:1}),o(f,{layout:"vertical"},{default:a(()=>[o(d,{label:"AV号"},{default:a(()=>[o(u,{modelValue:t.aid,"onUpdate:modelValue":e[0]||(e[0]=l=>t.aid=l),"controls-position":"right",onChange:e[1]||(e[1]=l=>s.enc(t.aid))},null,8,["modelValue"])]),_:1}),o(d,{label:"BV号"},{default:a(()=>[o(h,{modelValue:t.bvid,"onUpdate:modelValue":e[2]||(e[2]=l=>t.bvid=l),onChange:e[3]||(e[3]=l=>s.dec(t.bvid))},null,8,["modelValue"])]),_:1})]),_:1}),o(r,{level:3},{default:a(()=>[n(" 信息 ")]),_:1}),o(c,{direction:"vertical",alignment:"normal"},{default:a(()=>[o(m,{href:"https://www.bilibili.com/video/av"+t.aid},{default:a(()=>[n(p("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),o(m,{href:"https://www.bilibili.com/video/"+t.bvid},{default:a(()=>[n(p("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})],64)}const Q=b(I,[["render",S]]);export{Q as default};
