import{C as I}from"./vue-codemirror.2217e02f.js";import{$ as g,ab as j,_ as m,aj as y,a as n,o as B,c as N,w as a,T as S,b as i,g as r,U as u,p as k,h as C,e as F}from"./vendor.af973e49.js";/* empty css               *//* empty css              *//* empty css               *//* empty css                */import{_ as T}from"./index.0296a399.js";const{Item:V}=m,{Title:$,Paragraph:L,Link:P}=S,U={name:"bilibiliBv2av",components:{Container:I,Input:g,InputNumber:j,Form:m,FormItem:V,Title:$,Paragraph:L,Link:P,Space:y},data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let e=0;e<58;e++)this.tr[this.table[e]]=e;this.enc(this.aid)},dec(e){try{let t=0;for(let o=0;o<6;o++)t+=this.tr[e[this.s[o]]]*58**o;this.aid=t-this.add^this.xor}catch{this.aid=""}},enc(e){try{if(e=parseInt(e),isNaN(e))this.bvid="";else{e=(e^this.xor)+this.add;const t=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let o=0;o<6;o++)t[this.s[o]]=this.table[Math.floor(e/58**o)%58];this.bvid=t.join("")}}catch{this.bvid=""}}}},q=e=>(k("data-v-3197bbc9"),e=e(),C(),e),A=r("\u8F6C\u6362"),D=q(()=>F("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),M=r("\u4FE1\u606F");function z(e,t,o,E,G,d){const l=n("Title"),v=n("Paragraph"),b=n("InputNumber"),p=n("FormItem"),_=n("Input"),h=n("Form"),c=n("Link"),f=n("Space"),w=n("container");return B(),N(w,null,{default:a(()=>[i(l,{level:3},{default:a(()=>[A]),_:1}),i(v,null,{default:a(()=>[D]),_:1}),i(h,{layout:"vertical"},{default:a(()=>[i(p,{label:"AV\u53F7"},{default:a(()=>[i(b,{value:e.aid,"onUpdate:value":t[0]||(t[0]=s=>e.aid=s),onChange:t[1]||(t[1]=s=>d.enc(e.aid))},null,8,["value"])]),_:1}),i(p,{label:"BV\u53F7"},{default:a(()=>[i(_,{value:e.bvid,"onUpdate:value":t[2]||(t[2]=s=>e.bvid=s),onChange:t[3]||(t[3]=s=>d.dec(e.bvid))},null,8,["value"])]),_:1})]),_:1}),i(l,{level:3},{default:a(()=>[M]),_:1}),i(f,{direction:"vertical"},{default:a(()=>[i(c,{href:"https://www.bilibili.com/video/av"+e.aid},{default:a(()=>[r(u("https://www.bilibili.com/video/av"+e.aid),1)]),_:1},8,["href"]),i(c,{href:"https://www.bilibili.com/video/"+e.bvid},{default:a(()=>[r(u("https://www.bilibili.com/video/"+e.bvid),1)]),_:1},8,["href"])]),_:1})]),_:1})}var Y=T(U,[["render",z],["__scopeId","data-v-3197bbc9"]]);export{Y as default};
