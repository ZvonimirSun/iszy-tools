import{_ as b,o as f,J as g,a as e,w as a,F as w,N as y,M as B,b as s,O as d,I,cx as N,b0 as V,b1 as $,L as k}from"./index.d7a1a0f1.js";import{_ as F}from"./index.2ce98231.js";/* empty css              *//* empty css               */import{_ as S}from"./index.cae9440b.js";import{F as C}from"./Form.add1504d.js";import{_ as M}from"./FormItem.9c22706f.js";import"./useFlexGapSupport.5bbc8dda.js";import"./DownOutlined.d8a6952c.js";import"./isMobile.47354675.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Col.234873ab.js";import"./responsiveObserve.a46000ae.js";import"./toArray.eefe39fa.js";import"./get.0562d879.js";import"./hasIn.84555d25.js";import"./toInteger.1215b7ee.js";import"./toFinite.0157ba3a.js";import"./collapseMotion.f45529ed.js";const U={name:"BilibiliBv2av",data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let i=0;for(let o=0;o<6;o++)i+=this.tr[t[this.s[o]]]*58**o;this.aid=i-this.add^this.xor}catch{this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const i=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let o=0;o<6;o++)i[this.s[o]]=this.table[Math.floor(t/58**o)%58];this.bvid=i.join("")}}catch{this.bvid=""}}}},j=t=>(V("data-v-cfaae0ce"),t=t(),$(),t),q=s(" \u8F6C\u6362 "),A=j(()=>k("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),D=s(" \u4FE1\u606F ");function E(t,i,o,J,L,_){const l=y,m=B,c=S,p=M,u=I,v=C,r=N,h=F;return f(),g(w,null,[e(l,{level:3},{default:a(()=>[q]),_:1}),e(m,null,{default:a(()=>[A]),_:1}),e(v,{layout:"vertical"},{default:a(()=>[e(p,{label:"AV\u53F7"},{default:a(()=>[e(c,{value:t.aid,"onUpdate:value":i[0]||(i[0]=n=>t.aid=n),onChange:i[1]||(i[1]=n=>_.enc(t.aid))},null,8,["value"])]),_:1}),e(p,{label:"BV\u53F7"},{default:a(()=>[e(u,{value:t.bvid,"onUpdate:value":i[2]||(i[2]=n=>t.bvid=n),onChange:i[3]||(i[3]=n=>_.dec(t.bvid))},null,8,["value"])]),_:1})]),_:1}),e(l,{level:3},{default:a(()=>[D]),_:1}),e(h,{direction:"vertical"},{default:a(()=>[e(r,{href:"https://www.bilibili.com/video/av"+t.aid},{default:a(()=>[s(d("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),e(r,{href:"https://www.bilibili.com/video/"+t.bvid},{default:a(()=>[s(d("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})],64)}const st=b(U,[["render",E],["__scopeId","data-v-cfaae0ce"]]);export{st as default};
