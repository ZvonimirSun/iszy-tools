import{r as o,o as r,c as d,f as l,a as i,a5 as c}from"./vendor.db920537.js";import{_ as p}from"./index.c26a5e36.js";const{TextArea:u}=c,m={name:"tinyEditor",components:{TextArea:u},data:()=>({html:"",css:"",js:""}),computed:{doc:function(){return this.html+this.css+this.js===""?"\u8F93\u5165\u5185\u5BB9\u4EE5\u5728\u6B64\u5C55\u793A":this.html+"<style>"+this.css+"</style><script>"+this.js+"<\/script>"}},methods:{}},v={class:"panel"},_=["srcdoc"];function h(e,s,f,y,j,n){const a=o("TextArea");return r(),d("div",v,[l(a,{class:"inputPanel",placeholder:"\u8BF7\u8F93\u5165HTML\u5185\u5BB9",title:"HTML",value:e.html,"onUpdate:value":s[0]||(s[0]=t=>e.html=t)},null,8,["value"]),l(a,{class:"inputPanel",placeholder:"\u8BF7\u8F93\u5165CSS\u5185\u5BB9",title:"CSS",value:e.css,"onUpdate:value":s[1]||(s[1]=t=>e.css=t)},null,8,["value"]),l(a,{class:"inputPanel",placeholder:"\u8BF7\u8F93\u5165JS\u5185\u5BB9",title:"JS",value:e.js,"onUpdate:value":s[2]||(s[2]=t=>e.js=t)},null,8,["value"]),i("iframe",{class:"displayPanel",srcdoc:n.doc,seamless:"",title:"\u5C55\u793A\u9762\u677F"},null,8,_)])}var E=p(m,[["render",h],["__scopeId","data-v-dc8a7536"]]);export{E as default};
