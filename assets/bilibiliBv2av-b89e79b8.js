import{_ as b,o as v,l as w,a as o,w as a,H as g,b as n,t as m,B as y,J as V,K as B,m as E}from"./index-64dd3e12.js";import{E as I}from"./el-space-2486797b.js";import"./index-4ece5731.js";import{E as N,a as S}from"./el-form-item-2b30cbd1.js";import{E as k}from"./el-input-number-ac5d763c.js";import{_ as $}from"./Link-45ecf6dd.js";import"./index-3e6149d6.js";import{_ as C}from"./Title-fa4202ec.js";import{_ as F}from"./Paragraph-8c8ec686.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-b7755aa5.js";import"./index-f48aacd3.js";import"./Text-3d72a6d3.js";const U={name:"BilibiliBv2av",data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let e=0;for(let i=0;i<6;i++)e+=this.tr[t[this.s[i]]]*58**i;this.aid=e-this.add^this.xor}catch{this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const e=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let i=0;i<6;i++)e[this.s[i]]=this.table[Math.floor(t/58**i)%58];this.bvid=e.join("")}}catch{this.bvid=""}}}},j=t=>(V("data-v-f459c2f8"),t=t(),B(),t),q=j(()=>E("blockquote",null,"实时计算，直接输入即可",-1));function A(t,e,i,D,H,s){const r=C,_=F,u=k,d=S,c=y,f=N,p=$,h=I;return v(),w(g,null,[o(r,{level:3},{default:a(()=>[n(" 转换 ")]),_:1}),o(_,null,{default:a(()=>[q]),_:1}),o(f,{layout:"vertical"},{default:a(()=>[o(d,{label:"AV号"},{default:a(()=>[o(u,{modelValue:t.aid,"onUpdate:modelValue":e[0]||(e[0]=l=>t.aid=l),"controls-position":"right",onChange:e[1]||(e[1]=l=>s.enc(t.aid))},null,8,["modelValue"])]),_:1}),o(d,{label:"BV号"},{default:a(()=>[o(c,{modelValue:t.bvid,"onUpdate:modelValue":e[2]||(e[2]=l=>t.bvid=l),onChange:e[3]||(e[3]=l=>s.dec(t.bvid))},null,8,["modelValue"])]),_:1})]),_:1}),o(r,{level:3},{default:a(()=>[n(" 信息 ")]),_:1}),o(h,{direction:"vertical",alignment:"normal"},{default:a(()=>[o(p,{href:"https://www.bilibili.com/video/av"+t.aid},{default:a(()=>[n(m("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),o(p,{href:"https://www.bilibili.com/video/"+t.bvid},{default:a(()=>[n(m("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})],64)}const Z=b(U,[["render",A],["__scopeId","data-v-f459c2f8"]]);export{Z as default};