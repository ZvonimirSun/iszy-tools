import{_ as t}from"./container.a9b709d4.js";import{M as a,Z as i,K as e,a9 as d,p as l,a as s,T as n,r as o,c as r,w as h,o as u,b,e as c,G as v,d as f}from"./vendor.79c8a073.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */var p=".ant-input-number[data-v-8391f650] {\n  width: 100%;\n}";const{Item:m}=e,{Title:w,Paragraph:_,Link:x}=n,j={name:"bilibiliBv2av",components:{Container:t,Input:a,InputNumber:i,Form:e,FormItem:m,Title:w,Paragraph:_,Link:x,Space:d},data:()=>({aid:"19390801",bvid:"",table:"fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",tr:{},s:[11,10,3,8,4,6],xor:177451812,add:8728348608}),mounted(){this.init()},methods:{init(){for(let t=0;t<58;t++)this.tr[this.table[t]]=t;this.enc(this.aid)},dec(t){try{let a=0;for(let i=0;i<6;i++)a+=this.tr[t[this.s[i]]]*58**i;this.aid=a-this.add^this.xor}catch(a){this.aid=""}},enc(t){try{if(t=parseInt(t),isNaN(t))this.bvid="";else{t=(t^this.xor)+this.add;const a=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let i=0;i<6;i++)a[this.s[i]]=this.table[Math.floor(t/58**i)%58];this.bvid=a.join("")}}catch(a){this.bvid=""}}}};l("data-v-8391f650");const I=c("转换"),g=f("blockquote",null,"实时计算，直接输入即可",-1),k=c("信息");function F(t,a,i,e,d,l){const s=o("Title"),n=o("Paragraph"),f=o("InputNumber"),p=o("FormItem"),m=o("Input"),w=o("Form"),_=o("Link"),x=o("Space"),j=o("container");return u(),r(j,null,{default:h((()=>[b(s,{level:3},{default:h((()=>[I])),_:1}),b(n,null,{default:h((()=>[g])),_:1}),b(w,{layout:"vertical"},{default:h((()=>[b(p,{label:"AV号"},{default:h((()=>[b(f,{value:t.aid,"onUpdate:value":a[0]||(a[0]=a=>t.aid=a),onChange:a[1]||(a[1]=a=>l.enc(t.aid))},null,8,["value"])])),_:1}),b(p,{label:"BV号"},{default:h((()=>[b(m,{value:t.bvid,"onUpdate:value":a[2]||(a[2]=a=>t.bvid=a),onChange:a[3]||(a[3]=a=>l.dec(t.bvid))},null,8,["value"])])),_:1})])),_:1}),b(s,{level:3},{default:h((()=>[k])),_:1}),b(x,{direction:"vertical"},{default:h((()=>[b(_,{href:"https://www.bilibili.com/video/av"+t.aid},{default:h((()=>[c(v("https://www.bilibili.com/video/av"+t.aid),1)])),_:1},8,["href"]),b(_,{href:"https://www.bilibili.com/video/"+t.bvid},{default:h((()=>[c(v("https://www.bilibili.com/video/"+t.bvid),1)])),_:1},8,["href"])])),_:1})])),_:1})}s(),j.render=F,j.__scopeId="data-v-8391f650";export{j as default};
