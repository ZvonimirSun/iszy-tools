import{U as e,G as r,H as t,I as a,J as o,p as s,a as n,o as i,c as d,b as l,K as m,w as u,d as c,r as h}from"./vendor.a698f461.js";/* empty css              *//* empty css              */var p=".login-container[data-v-d5715bce] {\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  padding: 5rem 0 14.4rem;\n}\n.login-container .main[data-v-d5715bce] {\n  min-width: 26rem;\n  width: 36.8rem;\n  margin: 0 auto;\n}\n.login-container .footer[data-v-d5715bce] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 0 1.6rem;\n  margin: 4.8rem 0 2.4rem;\n  text-align: center;\n  color: #999999;\n}";const{Item:g}=t,{Password:f}=a,v={name:"Login",components:{UserOutlined:e,LockOutlined:r,Form:t,Input:a,Button:o,Item:g,Password:f},watch:{$route:{handler:function(e){const r=e.query;r&&(this.redirect=r.redirect,this.otherQuery=this.getOtherQuery(r))},immediate:!0}},data:()=>({form:{layout:"horizontal",username:"",password:""},redirect:void 0,otherQuery:{},loading:!1}),methods:{login(){""!==this.form.username&&""!==this.form.password&&(this.loading=!0,this.$store.dispatch("user/login",{username:this.form.username,password:this.form.password}).then((()=>{this.$msg.success("登录成功！"),this.$router.push({path:this.redirect||"/",query:this.otherQuery}),this.loading=!1})).catch((()=>{this.$msg.error("用户名或密码错误！")})).finally((()=>{this.loading=!1})))},getOtherQuery:e=>Object.keys(e).reduce(((r,t)=>("redirect"!==t&&(r[t]=e[t]),r)),{})}},y=u();s("data-v-d5715bce");const w={class:"login-container"},b={class:"main"},_=c(" 确定 "),I=l("div",{class:"footer"},[l("div",{class:"copyright"}," Copyright © 2020 ISZY")],-1);n();const O=y(((e,r,t,a,o,s)=>{const n=h("UserOutlined"),u=h("Input"),c=h("Item"),p=h("LockOutlined"),g=h("Password"),f=h("Button"),v=h("Form");return i(),d("div",w,[l("div",b,[l(v,m({layout:e.form.layout,model:e.form},{wrapperCol:{span:24}}),{default:y((()=>[l(c,{required:""},{default:y((()=>[l(u,{value:e.form.username,"onUpdate:value":r[1]||(r[1]=r=>e.form.username=r),placeholder:"账户",size:"large"},{prefix:y((()=>[l(n,{style:{color:"rgba(0,0,0,.25)"}})])),_:1},8,["value"])])),_:1}),l(c,{required:""},{default:y((()=>[l(g,{value:e.form.password,"onUpdate:value":r[2]||(r[2]=r=>e.form.password=r),placeholder:"密码",size:"large"},{prefix:y((()=>[l(p,{style:{color:"rgba(0,0,0,.25)"}})])),_:1},8,["value"])])),_:1}),l(c,null,{default:y((()=>[l(f,{type:"primary",block:"",size:"large",onClick:s.login,loading:e.loading},{default:y((()=>[_])),_:1},8,["onClick","loading"])])),_:1})])),_:1},16,["layout","model"])]),I])}));v.render=O,v.__scopeId="data-v-d5715bce";export default v;
