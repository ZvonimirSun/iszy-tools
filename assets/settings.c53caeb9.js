var K=Object.defineProperty,H=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,o,n)=>o in e?K(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,m=(e,o)=>{for(var n in o||(o={}))x.call(o,n)&&b(e,n,o[n]);if(U)for(var n of U(o))E.call(o,n)&&b(e,n,o[n]);return e},k=(e,o)=>H(e,L(o));import{q as G,ab as T,a5 as w,a6 as I,a7 as O,ae as R,T as z,af as J,i as S,r as t,o as d,c as f,f as r,w as s,a as c,x as g,a1 as j,u as i,A as B,p as M,b as Q,y as W}from"./vendor.9a544344.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{u as P}from"./index.8b96d040.js";import{_ as X}from"./index.c8d8c84d.js";const{TabPane:Y}=T,{Item:Z}=w,{Password:ee}=I,{mapGetters:oe,mapActions:ne}=G("imgHosting"),ae={name:"settings",components:{Tabs:T,TabPane:Y,Form:w,Item:Z,Input:I,Password:ee,Button:O,Switch:R,Typography:z,Divider:J},data:()=>({uploaders:P,currentUploader:"aliyun",currentConfig:[],currentCommonConfig:{renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0}}),computed:m({},oe(["config","uploader","commonConfig"])),mounted(){this.uploader&&(this.currentUploader=this.uploader),this.changeUploader(),this.currentCommonConfig=S(this.commonConfig||{})},methods:k(m({},ne(["saveConfig","saveCommonConfig","importConfig"])),{changeUploader(){this.currentConfig=S(P[this.currentUploader].config(this.config(this.currentUploader)))},save(){const e={};for(const o of this.currentConfig){if(o.required&&(o.default==null||o.default==="")){this.$msg.warn("\u5FC5\u586B\u9879\u672A\u586B\u5199\u5B8C\u6574");return}e[o.name]=o.default}this.saveConfig({uploader:this.currentUploader,config:e}),this.$msg.success("\u4FDD\u5B58\u6210\u529F")},handler(){this.$refs.file.click()}})},$=e=>(M("data-v-0dfb4ce4"),e=e(),Q(),e),te=$(()=>c("h4",null,"\u901A\u7528\u914D\u7F6E",-1)),re={class:"commonConfigPanel"},se=$(()=>c("h4",null,"\u56FE\u5E8A\u8BBE\u7F6E",-1)),le={class:"configPanel"},de={class:"configTable"},ce={class:"configOperator"},ie=W("\u4FDD\u5B58");function ue(e,o,n,pe,me,h){const _=t("Typography"),C=t("Switch"),u=t("Item"),v=t("Form"),q=t("Divider"),A=t("Input"),N=t("Password"),D=t("Button"),F=t("TabPane"),V=t("Tabs");return d(),f(g,null,[r(_,null,{default:s(()=>[te]),_:1}),c("div",re,[r(v,{layout:"inline"},{default:s(()=>[r(u,{label:"\u65F6\u95F4\u6233\u91CD\u547D\u540D"},{default:s(()=>[r(C,{checked:e.currentCommonConfig.renameTimeStamp,"onUpdate:checked":o[0]||(o[0]=l=>e.currentCommonConfig.renameTimeStamp=l),onChange:o[1]||(o[1]=l=>e.saveCommonConfig(e.currentCommonConfig))},null,8,["checked"])]),_:1}),r(u,{label:"\u4E0A\u4F20\u540E\u81EA\u52A8\u590D\u5236URL"},{default:s(()=>[r(C,{checked:e.currentCommonConfig.copyUrlAfterUpload,"onUpdate:checked":o[2]||(o[2]=l=>e.currentCommonConfig.copyUrlAfterUpload=l),onChange:o[3]||(o[3]=l=>e.saveCommonConfig(e.currentCommonConfig))},null,8,["checked"])]),_:1})]),_:1})]),r(q),r(_,null,{default:s(()=>[se]),_:1}),r(V,{activeKey:e.currentUploader,"onUpdate:activeKey":o[4]||(o[4]=l=>e.currentUploader=l),type:"card",onChange:h.changeUploader},{default:s(()=>[(d(!0),f(g,null,j(e.uploaders,(l,y)=>(d(),i(F,{key:y,tab:l.name},{default:s(()=>[c("div",le,[c("div",de,[e.currentUploader===y?(d(),i(v,{key:0,layout:"vertical"},{default:s(()=>[(d(!0),f(g,null,j(e.currentConfig,a=>(d(),i(u,{key:a.name,label:a.label,required:a.required},{default:s(()=>[a.type==="input"?(d(),i(A,{key:0,value:a.default,"onUpdate:value":p=>a.default=p,"allow-clear":"",placeholder:a.hint},null,8,["value","onUpdate:value","placeholder"])):a.type==="password"?(d(),i(N,{key:1,value:a.default,"onUpdate:value":p=>a.default=p,"allow-clear":"",placeholder:a.hint},null,8,["value","onUpdate:value","placeholder"])):B("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)):B("",!0)]),c("div",ce,[r(D,{type:"primary",onClick:h.save},{default:s(()=>[ie]),_:1},8,["onClick"])])])]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey","onChange"])],64)}var ke=X(ae,[["render",ue],["__scopeId","data-v-0dfb4ce4"]]);export{ke as default};
