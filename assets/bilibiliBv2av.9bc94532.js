import{_ as h,o as f,m as g,a as e,w as a,F as y,a2 as w,a1 as B,b as s,y as d,bx as V,by as I,$ as N,c6 as $,q as k}from"./index.c31bc572.js";import{_ as F}from"./index.b48a6b4c.js";/* empty css               *//* empty css              */import{_ as S}from"./index.d9282318.js";import{F as C}from"./Form.25785928.js";import{_ as q}from"./FormItem.d7b1379d.js";import"./useFlexGapSupport.80b3a253.js";import"./DownOutlined.92ad9bf4.js";import"./isMobile.6491fde5.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./debounce.b10463ff.js";import"./Col.114716f6.js";import"./responsiveObserve.271b6a0c.js";import"./toArray.5ecb8f32.js";import"./get.71b1ef04.js";import"./hasIn.0f4b989f.js";import"./toFinite.b9196501.js";import"./collapseMotion.1abac316.js";const U={name:"BilibiliBv2av",data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let i=0;for(let o=0;o<6;o++)i+=this.tr[t[this.s[o]]]*58**o;this.aid=i-this.add^this.xor}catch{this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const i=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let o=0;o<6;o++)i[this.s[o]]=this.table[Math.floor(t/58**o)%58];this.bvid=i.join("")}}catch{this.bvid=""}}}},j=t=>(V("data-v-7bdda6ea"),t=t(),I(),t),A=s(" \u8F6C\u6362 "),D=j(()=>k("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),E=s(" \u4FE1\u606F ");function M(t,i,o,T,z,_){const l=w,m=B,u=S,p=q,v=N,c=C,r=$,b=F;return f(),g(y,null,[e(l,{level:3},{default:a(()=>[A]),_:1}),e(m,null,{default:a(()=>[D]),_:1}),e(c,{layout:"vertical"},{default:a(()=>[e(p,{label:"AV\u53F7"},{default:a(()=>[e(u,{value:t.aid,"onUpdate:value":i[0]||(i[0]=n=>t.aid=n),onChange:i[1]||(i[1]=n=>_.enc(t.aid))},null,8,["value"])]),_:1}),e(p,{label:"BV\u53F7"},{default:a(()=>[e(v,{value:t.bvid,"onUpdate:value":i[2]||(i[2]=n=>t.bvid=n),onChange:i[3]||(i[3]=n=>_.dec(t.bvid))},null,8,["value"])]),_:1})]),_:1}),e(l,{level:3},{default:a(()=>[E]),_:1}),e(b,{direction:"vertical"},{default:a(()=>[e(r,{href:"https://www.bilibili.com/video/av"+t.aid},{default:a(()=>[s(d("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),e(r,{href:"https://www.bilibili.com/video/"+t.bvid},{default:a(()=>[s(d("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})],64)}var st=h(U,[["render",M],["__scopeId","data-v-7bdda6ea"]]);export{st as default};