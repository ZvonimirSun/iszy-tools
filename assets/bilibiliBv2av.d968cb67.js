import{_ as b,o as f,m as g,a as o,w as a,F as w,a2 as y,a1 as B,b as s,y as d,$ as V,cd as I,bz as N,bA as $,q as k}from"./index.990579d2.js";import{_ as F}from"./index.8029ec85.js";/* empty css               *//* empty css              */import{_ as S}from"./index.4cb370f9.js";import{F as C}from"./Form.d603feaa.js";import{_ as q}from"./FormItem.8e404dcb.js";import"./useFlexGapSupport.e8901a29.js";import"./DownOutlined.17af5c49.js";import"./isMobile.6491fde5.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./debounce.a7fcd29b.js";import"./Col.061f35a6.js";import"./responsiveObserve.37d831e2.js";import"./toArray.50178d7b.js";import"./get.7858eace.js";import"./hasIn.48d0e63a.js";import"./toInteger.49ec7feb.js";import"./toFinite.46929150.js";import"./collapseMotion.8976f0e9.js";const A={name:"BilibiliBv2av",data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let i=0;for(let e=0;e<6;e++)i+=this.tr[t[this.s[e]]]*58**e;this.aid=i-this.add^this.xor}catch{this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const i=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let e=0;e<6;e++)i[this.s[e]]=this.table[Math.floor(t/58**e)%58];this.bvid=i.join("")}}catch{this.bvid=""}}}},U=t=>(N("data-v-30f3f7c2"),t=t(),$(),t),j=s(" \u8F6C\u6362 "),z=U(()=>k("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),D=s(" \u4FE1\u606F ");function E(t,i,e,M,T,_){const l=y,m=B,u=S,p=q,v=V,c=C,r=I,h=F;return f(),g(w,null,[o(l,{level:3},{default:a(()=>[j]),_:1}),o(m,null,{default:a(()=>[z]),_:1}),o(c,{layout:"vertical"},{default:a(()=>[o(p,{label:"AV\u53F7"},{default:a(()=>[o(u,{value:t.aid,"onUpdate:value":i[0]||(i[0]=n=>t.aid=n),onChange:i[1]||(i[1]=n=>_.enc(t.aid))},null,8,["value"])]),_:1}),o(p,{label:"BV\u53F7"},{default:a(()=>[o(v,{value:t.bvid,"onUpdate:value":i[2]||(i[2]=n=>t.bvid=n),onChange:i[3]||(i[3]=n=>_.dec(t.bvid))},null,8,["value"])]),_:1})]),_:1}),o(l,{level:3},{default:a(()=>[D]),_:1}),o(h,{direction:"vertical"},{default:a(()=>[o(r,{href:"https://www.bilibili.com/video/av"+t.aid},{default:a(()=>[s(d("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),o(r,{href:"https://www.bilibili.com/video/"+t.bvid},{default:a(()=>[s(d("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})],64)}var _t=b(A,[["render",E],["__scopeId","data-v-30f3f7c2"]]);export{_t as default};
