import{ad as w,ae as I,ac as v,af as g,c as y,f as i,x as o,F as B,T as F,r as s,o as N,E as l,g as u,p as S,b as k,a as T}from"./vendor.744634da.js";/* empty css                *//* empty css               *//* empty css                *//* empty css                */import{_ as V}from"./index.d4691755.js";const{Item:C}=v,{Title:L,Paragraph:P,Link:$}=F,E={name:"bilibiliBv2av",components:{Input:w,InputNumber:I,Form:v,FormItem:C,Title:L,Paragraph:P,Link:$,Space:g},data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let e=0;for(let a=0;a<6;a++)e+=this.tr[t[this.s[a]]]*58**a;this.aid=e-this.add^this.xor}catch{this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const e=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let a=0;a<6;a++)e[this.s[a]]=this.table[Math.floor(t/58**a)%58];this.bvid=e.join("")}}catch{this.bvid=""}}}},U=t=>(S("data-v-ff9105b0"),t=t(),k(),t),j=l("\u8F6C\u6362"),q=U(()=>T("blockquote",null,"\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u76F4\u63A5\u8F93\u5165\u5373\u53EF",-1)),A=l("\u4FE1\u606F");function D(t,e,a,M,z,r){const d=s("Title"),c=s("Paragraph"),b=s("InputNumber"),p=s("FormItem"),h=s("Input"),_=s("Form"),m=s("Link"),f=s("Space");return N(),y(B,null,[i(d,{level:3},{default:o(()=>[j]),_:1}),i(c,null,{default:o(()=>[q]),_:1}),i(_,{layout:"vertical"},{default:o(()=>[i(p,{label:"AV\u53F7"},{default:o(()=>[i(b,{value:t.aid,"onUpdate:value":e[0]||(e[0]=n=>t.aid=n),onChange:e[1]||(e[1]=n=>r.enc(t.aid))},null,8,["value"])]),_:1}),i(p,{label:"BV\u53F7"},{default:o(()=>[i(h,{value:t.bvid,"onUpdate:value":e[2]||(e[2]=n=>t.bvid=n),onChange:e[3]||(e[3]=n=>r.dec(t.bvid))},null,8,["value"])]),_:1})]),_:1}),i(d,{level:3},{default:o(()=>[A]),_:1}),i(f,{direction:"vertical"},{default:o(()=>[i(m,{href:"https://www.bilibili.com/video/av"+t.aid},{default:o(()=>[l(u("https://www.bilibili.com/video/av"+t.aid),1)]),_:1},8,["href"]),i(m,{href:"https://www.bilibili.com/video/"+t.bvid},{default:o(()=>[l(u("https://www.bilibili.com/video/"+t.bvid),1)]),_:1},8,["href"])]),_:1})],64)}var W=V(E,[["render",D],["__scopeId","data-v-ff9105b0"]]);export{W as default};
