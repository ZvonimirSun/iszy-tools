import{C as a}from"./container.dadd0a63.js";import{$ as t,a7 as i,_ as e,af as d,a as l,o as s,c as n,w as o,T as r,b as h,g as b,U as u,p as v,h as c,e as f}from"./vendor.588f181b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as m}from"./index.2f118d73.js";var p=".ant-input-number[data-v-5e26b4ea] {\n  width: 100%;\n}";const{Item:w}=e,{Title:_,Paragraph:x,Link:j}=r,I={name:"bilibiliBv2av",components:{Container:a,Input:t,InputNumber:i,Form:e,FormItem:w,Title:_,Paragraph:x,Link:j,Space:d},data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let a=0;a<58;a++)this.tr[this.table[a]]=a;this.enc(this.aid)},dec(a){try{let t=0;for(let i=0;i<6;i++)t+=this.tr[a[this.s[i]]]*58**i;this.aid=t-this.add^this.xor}catch(t){this.aid=""}},enc(a){try{if(a=parseInt(a),isNaN(a))this.bvid="";else{a=(a^this.xor)+this.add;const t=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let i=0;i<6;i++)t[this.s[i]]=this.table[Math.floor(a/58**i)%58];this.bvid=t.join("")}}catch(t){this.bvid=""}}}},g=a=>(v("data-v-5e26b4ea"),a=a(),c(),a),k=b("转换"),C=g((()=>f("blockquote",null,"实时计算，直接输入即可",-1))),F=b("信息");function N(a,t,i,e,d,r){const v=l("Title"),c=l("Paragraph"),f=l("InputNumber"),m=l("FormItem"),p=l("Input"),w=l("Form"),_=l("Link"),x=l("Space"),j=l("container");return s(),n(j,null,{default:o((()=>[h(v,{level:3},{default:o((()=>[k])),_:1}),h(c,null,{default:o((()=>[C])),_:1}),h(w,{layout:"vertical"},{default:o((()=>[h(m,{label:"AV号"},{default:o((()=>[h(f,{value:a.aid,"onUpdate:value":t[0]||(t[0]=t=>a.aid=t),onChange:t[1]||(t[1]=t=>r.enc(a.aid))},null,8,["value"])])),_:1}),h(m,{label:"BV号"},{default:o((()=>[h(p,{value:a.bvid,"onUpdate:value":t[2]||(t[2]=t=>a.bvid=t),onChange:t[3]||(t[3]=t=>r.dec(a.bvid))},null,8,["value"])])),_:1})])),_:1}),h(v,{level:3},{default:o((()=>[F])),_:1}),h(x,{direction:"vertical"},{default:o((()=>[h(_,{href:"https://www.bilibili.com/video/av"+a.aid},{default:o((()=>[b(u("https://www.bilibili.com/video/av"+a.aid),1)])),_:1},8,["href"]),h(_,{href:"https://www.bilibili.com/video/"+a.bvid},{default:o((()=>[b(u("https://www.bilibili.com/video/"+a.bvid),1)])),_:1},8,["href"])])),_:1})])),_:1})}var T=m(I,[["render",N],["__scopeId","data-v-5e26b4ea"]]);export{T as default};
