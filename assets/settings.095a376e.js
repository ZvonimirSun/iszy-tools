var J=Object.defineProperty,K=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(o,e,a)=>e in o?J(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,u=(o,e)=>{for(var a in e||(e={}))L.call(e,a)&&S(o,a,e[a]);if(P)for(var a of P(e))R.call(e,a)&&S(o,a,e[a]);return o},T=(o,e)=>K(o,E(e));import{c as z}from"./createFile.43ce4571.js";import{E as G,a3 as j,_ as A,$ as I,a0 as Q,ac as M,aj as W,T as X,ad as Y,b2 as Z,l as $,a as s,o as i,f as C,b as t,w as n,J as ee,e as c,P as _,Q as x,p as oe,h as te,g as v,ag as ne,c as p,O as B}from"./vendor.3bd2b7e4.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css                */import{u as F}from"./index.cfb972a9.js";import{_ as ae}from"./index.20d3c8f6.js";const{TabPane:re}=j,{Item:se}=A,{Password:le}=I,{mapGetters:ie,mapState:ce,mapActions:de}=G("imgHosting"),pe={name:"settings",components:{Tabs:j,TabPane:re,Form:A,Item:se,Input:I,Password:le,Button:Q,Switch:M,Space:W,Typography:X,Divider:Y,Popconfirm:Z},data:()=>({uploaders:F,currentUploader:"aliyun",currentConfig:[],currentCommonConfig:{renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0}}),computed:u(u({},ie(["config"])),ce(["uploader","commonConfig"])),mounted(){this.uploader&&(this.currentUploader=this.uploader),this.changeUploader(),this.currentCommonConfig=$(this.commonConfig||{})},methods:T(u({},de(["saveConfig","saveCommonConfig","importConfig"])),{changeUploader(){this.currentConfig=$(F[this.currentUploader].config(this.config(this.currentUploader)))},save(){const o={};for(const e of this.currentConfig){if(e.required&&(e.default==null||e.default==="")){this.$msg.warn("\u5FC5\u586B\u9879\u672A\u586B\u5199\u5B8C\u6574");return}o[e.name]=e.default}this.saveConfig({uploader:this.currentUploader,config:o}),this.$msg.success("\u4FDD\u5B58\u6210\u529F")},exportAll(){const o=JSON.stringify(this.$store.state.imgHosting);z(o,"allConfig.json")},importAll(){if(!this.$refs.file.value||!this.$refs.file.files||!this.$refs.file.files.length)return;const o=this.$refs.file.files[0];if(o.type==="application/json"||o.type==="text/plain"){const e=new FileReader;e.onload=async()=>{if(e.result)try{const a=JSON.parse(e.result);await this.importConfig(a),this.$msg.success("\u5BFC\u5165\u6210\u529F")}catch(a){this.$msg.error("\u5BFC\u5165\u5931\u8D25")}},e.readAsText(o)}},handler(){this.$refs.file.click()},getPopupContainer(){return document.body}})},y=o=>(oe("data-v-7ccdc7d2"),o=o(),te(),o),ue=y(()=>c("h4",null,"\u5BFC\u5165\u5BFC\u51FA",-1)),fe=v("\u5BFC\u51FA\u6240\u6709"),me=v("\u5BFC\u5165\u6240\u6709"),ge=y(()=>c("h4",null,"\u901A\u7528\u914D\u7F6E",-1)),he={class:"commonConfigPanel"},Ce=y(()=>c("h4",null,"\u56FE\u5E8A\u8BBE\u7F6E",-1)),_e={class:"configPanel"},ve={class:"configTable"},ye={class:"configOperator"},Ue=v("\u4FDD\u5B58");function ke(o,e,a,be,we,d){const f=s("Typography"),m=s("Button"),N=s("Popconfirm"),D=s("Space"),U=s("Divider"),k=s("Switch"),g=s("Item"),b=s("Form"),q=s("Input"),O=s("Password"),V=s("TabPane"),H=s("Tabs");return i(),C(_,null,[t(f,null,{default:n(()=>[ue]),_:1}),t(D,{size:8},{default:n(()=>[t(m,{type:"primary",onClick:d.exportAll},{default:n(()=>[fe]),_:1},8,["onClick"]),t(N,{onConfirm:d.handler,title:"\u662F\u5426\u5BFC\u5165\u6240\u6709\u914D\u7F6E\uFF1F\u5C06\u4F1A\u5B8C\u5168\u8986\u76D6\u6B64\u529F\u80FD\u8BB0\u5F55","ok-text":"\u662F","cancel-text":"\u5426",getPopupContainer:d.getPopupContainer},{default:n(()=>[t(m,{type:"primary"},{default:n(()=>[me]),_:1})]),_:1},8,["onConfirm","getPopupContainer"]),ee(c("input",{type:"file",ref:"file",onClick:e[0]||(e[0]=r=>{r.target.value=""}),onChange:e[1]||(e[1]=(...r)=>d.importAll&&d.importAll(...r))},null,544),[[ne,!1]])]),_:1}),t(U),t(f,null,{default:n(()=>[ge]),_:1}),c("div",he,[t(b,{layout:"inline"},{default:n(()=>[t(g,{label:"\u65F6\u95F4\u6233\u91CD\u547D\u540D"},{default:n(()=>[t(k,{checked:o.currentCommonConfig.renameTimeStamp,"onUpdate:checked":e[2]||(e[2]=r=>o.currentCommonConfig.renameTimeStamp=r),onChange:e[3]||(e[3]=r=>o.saveCommonConfig(o.currentCommonConfig))},null,8,["checked"])]),_:1}),t(g,{label:"\u4E0A\u4F20\u540E\u81EA\u52A8\u590D\u5236URL"},{default:n(()=>[t(k,{checked:o.currentCommonConfig.copyUrlAfterUpload,"onUpdate:checked":e[4]||(e[4]=r=>o.currentCommonConfig.copyUrlAfterUpload=r),onChange:e[5]||(e[5]=r=>o.saveCommonConfig(o.currentCommonConfig))},null,8,["checked"])]),_:1})]),_:1})]),t(U),t(f,null,{default:n(()=>[Ce]),_:1}),t(H,{activeKey:o.currentUploader,"onUpdate:activeKey":e[6]||(e[6]=r=>o.currentUploader=r),type:"card",onChange:d.changeUploader},{default:n(()=>[(i(!0),C(_,null,x(o.uploaders,(r,w)=>(i(),p(V,{key:w,tab:r.name},{default:n(()=>[c("div",_e,[c("div",ve,[o.currentUploader===w?(i(),p(b,{key:0,layout:"vertical"},{default:n(()=>[(i(!0),C(_,null,x(o.currentConfig,l=>(i(),p(g,{key:l.name,label:l.label,required:l.required},{default:n(()=>[l.type==="input"?(i(),p(q,{key:0,value:l.default,"onUpdate:value":h=>l.default=h,"allow-clear":"",placeholder:l.hint},null,8,["value","onUpdate:value","placeholder"])):l.type==="password"?(i(),p(O,{key:1,value:l.default,"onUpdate:value":h=>l.default=h,"allow-clear":"",placeholder:l.hint},null,8,["value","onUpdate:value","placeholder"])):B("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)):B("",!0)]),c("div",ye,[t(m,{type:"primary",onClick:d.save},{default:n(()=>[Ue]),_:1},8,["onClick"])])])]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey","onChange"])],64)}var qe=ae(pe,[["render",ke],["__scopeId","data-v-7ccdc7d2"]]);export{qe as default};
