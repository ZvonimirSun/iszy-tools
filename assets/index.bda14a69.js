import{U as e,y as t,A as r,I as a,E as o,p as s,a as n,o as i,c as d,b as l,G as u,w as c,d as m,r as p}from"./vendor.d23080cc.js";/* empty css              *//* empty css              */var h=".login-container[data-v-25123f56] {\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  padding: 50px 0 144px;\n}\n.login-container .main[data-v-25123f56] {\n  min-width: 260px;\n  width: 368px;\n  margin: 0 auto;\n}\n.login-container .footer[data-v-25123f56] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 0 16px;\n  margin: 48px 0 24px;\n  text-align: center;\n  color: #999999;\n}";const{Item:g}=r,{Password:f}=a,y={name:"Login",components:{UserOutlined:e,LockOutlined:t,Form:r,Input:a,Button:o,Item:g,Password:f},watch:{$route:{handler:function(e){const t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},data:()=>({form:{layout:"horizontal",username:"",password:""},redirect:void 0,otherQuery:{},loading:!1}),methods:{login(){""!==this.form.username&&""!==this.form.password&&(this.loading=!0,this.$store.dispatch("user/login",{username:this.form.username,password:this.form.password}).then((()=>{this.$msg.success("登录成功！"),this.$router.push({path:this.redirect||"/",query:this.otherQuery}),this.loading=!1})).catch((()=>{this.$msg.error("用户名或密码错误！")})).finally((()=>{this.loading=!1})))},getOtherQuery:e=>Object.keys(e).reduce(((t,r)=>("redirect"!==r&&(t[r]=e[r]),t)),{})}},v=c();s("data-v-25123f56");const w={class:"login-container"},x={class:"main"},_=m(" 确定 "),I=l("div",{class:"footer"},[l("div",{class:"copyright"}," Copyright © 2020 ISZY")],-1);n();const b=v(((e,t,r,a,o,s)=>{const n=p("UserOutlined"),c=p("Input"),m=p("Item"),h=p("LockOutlined"),g=p("Password"),f=p("Button"),y=p("Form");return i(),d("div",w,[l("div",x,[l(y,u({layout:e.form.layout,model:e.form},{wrapperCol:{span:24}}),{default:v((()=>[l(m,{required:""},{default:v((()=>[l(c,{value:e.form.username,"onUpdate:value":t[1]||(t[1]=t=>e.form.username=t),placeholder:"账户",size:"large"},{prefix:v((()=>[l(n,{style:{color:"rgba(0,0,0,.25)"}})])),_:1},8,["value"])])),_:1}),l(m,{required:""},{default:v((()=>[l(g,{value:e.form.password,"onUpdate:value":t[2]||(t[2]=t=>e.form.password=t),placeholder:"密码",size:"large"},{prefix:v((()=>[l(h,{style:{color:"rgba(0,0,0,.25)"}})])),_:1},8,["value"])])),_:1}),l(m,null,{default:v((()=>[l(f,{type:"primary",block:"",size:"large",onClick:s.login,loading:e.loading},{default:v((()=>[_])),_:1},8,["onClick","loading"])])),_:1})])),_:1},16,["layout","model"])]),I])}));y.render=b,y.__scopeId="data-v-25123f56";export default y;