import{a6 as w,ae as I,a5 as v,an as g,r as n,o as y,c as B,f as i,w as o,x as N,T as j,y as l,g as u,p as F,b as S,a as k}from"./vendor.04422529.js";/* empty css               *//* empty css              *//* empty css               *//* empty css                */import{_ as T}from"./index.620eb340.js";const{Item:V}=v,{Title:C,Paragraph:L,Link:P}=j,$={name:"bilibiliBv2av",components:{Input:w,InputNumber:I,Form:v,FormItem:V,Title:C,Paragraph:L,Link:P,Space:g},data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let e=0;e<58;e++)this.tr[this.table[e]]=e;this.enc(this.aid)},dec(e){try{let t=0;for(let a=0;a<6;a++)t+=this.tr[e[this.s[a]]]*58**a;this.aid=t-this.add^this.xor}catch{this.aid=""}},enc(e){try{if(e=parseInt(e),isNaN(e))this.bvid="";else{e=(e^this.xor)+this.add;const t=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let a=0;a<6;a++)t[this.s[a]]=this.table[Math.floor(e/58**a)%58];this.bvid=t.join("")}}catch{this.bvid=""}}}},U=e=>(F("data-v-ff9105b0"),e=e(),S(),e),q=l("\u8F6C\u6362"),A=U(()=>k("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),D=l("\u4FE1\u606F");function E(e,t,a,M,x,d){const r=n("Title"),c=n("Paragraph"),b=n("InputNumber"),p=n("FormItem"),h=n("Input"),_=n("Form"),m=n("Link"),f=n("Space");return y(),B(N,null,[i(r,{level:3},{default:o(()=>[q]),_:1}),i(c,null,{default:o(()=>[A]),_:1}),i(_,{layout:"vertical"},{default:o(()=>[i(p,{label:"AV\u53F7"},{default:o(()=>[i(b,{value:e.aid,"onUpdate:value":t[0]||(t[0]=s=>e.aid=s),onChange:t[1]||(t[1]=s=>d.enc(e.aid))},null,8,["value"])]),_:1}),i(p,{label:"BV\u53F7"},{default:o(()=>[i(h,{value:e.bvid,"onUpdate:value":t[2]||(t[2]=s=>e.bvid=s),onChange:t[3]||(t[3]=s=>d.dec(e.bvid))},null,8,["value"])]),_:1})]),_:1}),i(r,{level:3},{default:o(()=>[D]),_:1}),i(f,{direction:"vertical"},{default:o(()=>[i(m,{href:"https://www.bilibili.com/video/av"+e.aid},{default:o(()=>[l(u("https://www.bilibili.com/video/av"+e.aid),1)]),_:1},8,["href"]),i(m,{href:"https://www.bilibili.com/video/"+e.bvid},{default:o(()=>[l(u("https://www.bilibili.com/video/"+e.bvid),1)]),_:1},8,["href"])]),_:1})],64)}var R=T($,[["render",E],["__scopeId","data-v-ff9105b0"]]);export{R as default};
