import{C as a}from"./container.dadd0a63.js";import{a as e,o as l,c as n,w as s,$ as t,e as c,b as d}from"./vendor.588f181b.js";import{_ as i}from"./index.2f118d73.js";var r=".panel[data-v-2119bc2c] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.panel .inputPanel[data-v-2119bc2c] {\n  height: 50%;\n  width: 33.3333333333%;\n  resize: none;\n}\n.panel .displayPanel[data-v-2119bc2c] {\n  flex: 1;\n  height: 50%;\n  border: 1px solid #d9d9d9;\n}\n.panel .displayPanel[data-v-2119bc2c]:hover {\n  border-color: #16b0f6;\n}";const{TextArea:o}=t,p={name:"tinyEditor",components:{Container:a,TextArea:o},data:()=>({html:"",css:"",js:""}),computed:{doc:function(){return this.html+this.css+this.js===""?"输入内容以在此展示":this.html+"<style>"+this.css+"</style><script>"+this.js+"<\/script>"}},methods:{}},u={class:"panel"},h=["srcdoc"];function v(a,t,i,r,o,p){const v=e("TextArea"),m=e("container");return l(),n(m,null,{default:s((()=>[c("div",u,[d(v,{class:"inputPanel",placeholder:"请输入HTML内容",title:"HTML",value:a.html,"onUpdate:value":t[0]||(t[0]=e=>a.html=e)},null,8,["value"]),d(v,{class:"inputPanel",placeholder:"请输入CSS内容",title:"CSS",value:a.css,"onUpdate:value":t[1]||(t[1]=e=>a.css=e)},null,8,["value"]),d(v,{class:"inputPanel",placeholder:"请输入JS内容",title:"JS",value:a.js,"onUpdate:value":t[2]||(t[2]=e=>a.js=e)},null,8,["value"]),c("iframe",{class:"displayPanel",srcdoc:p.doc,seamless:"",title:"展示面板"},null,8,h)])])),_:1})}var m=i(p,[["render",v],["__scopeId","data-v-2119bc2c"]]);export{m as default};
