import{C as I}from"./vue-codemirror.a2ad42b5.js";import{$ as g,ab as j,_ as m,aj as y,a as n,o as B,c as N,w as a,T as S,b as i,g as d,U as u,p as k,h as C,e as F}from"./vendor.3bd2b7e4.js";/* empty css               *//* empty css              *//* empty css               *//* empty css                */import{_ as T}from"./index.8932276d.js";const{Item:V}=m,{Title:$,Paragraph:L,Link:P}=S,U={name:"bilibiliBv2av",components:{Container:I,Input:g,InputNumber:j,Form:m,FormItem:V,Title:$,Paragraph:L,Link:P,Space:y},data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let e=0;for(let o=0;o<6;o++)e+=this.tr[t[this.s[o]]]*58**o;this.aid=e-this.add^this.xor}catch(e){this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const e=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let o=0;o<6;o++)e[this.s[o]]=this.table[Math.floor(t/58**o)%58];this.bvid=e.join("")}}catch(e){this.bvid=""}}}},q=t=>(k("data-v-3197bbc9"),t=t(),C(),t),A=d("\u8F6C\u6362"),D=q(()=>F("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),M=d("\u4FE1\u606F");function z(t,e,o,E,G,r){const l=n("Title"),v=n("Paragraph"),b=n("InputNumber"),p=n("FormItem"),_=n("Input"),h=n("Form"),c=n("Link"),f=n("Space"),w=n("container");return B(),N(w,null,{default:a(()=>[i(l,{level:3},{default:a(()=>[A]),_:1}),i(v,null,{default:a(()=>[D]),_:1}),i(h,{layout:"vertical"},{default:a(()=>[i(p,{label:"AV\u53F7"},{default:a(()=>[i(b,{value:t.aid,"onUpdate:value":e[0]||(e[0]=s=>t.aid=s),onChange:e[1]||(e[1]=s=>r.enc(t.aid))},null,8,["value"])]),_:1}),i(p,{label:"BV\u53F7"},{default:a(()=>[i(_,{value:t.bvid,"onUpdate:value":e[2]||(e[2]=s=>t.bvid=s),onChange:e[3]||(e[3]=s=>r.dec(t.bvid))},null,8,["value"])]),_:1})]),_:1}),i(l,{level:3},{default:a(()=>[M]),_:1}),i(f,{direction:"vertical"},{default:a(()=>[i(c,{href:"https://www.bilibili.com/video/av"+t.aid},{default:a(()=>[d(u("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),i(c,{href:"https://www.bilibili.com/video/"+t.bvid},{default:a(()=>[d(u("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})]),_:1})}var Y=T(U,[["render",z],["__scopeId","data-v-3197bbc9"]]);export{Y as default};
