var E=Object.defineProperty,G=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(o,e,s)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,h=(o,e)=>{for(var s in e||(e={}))O.call(e,s)&&w(o,s,e[s]);if(b)for(var s of b(e))j.call(e,s)&&w(o,s,e[s]);return o},$=(o,e)=>G(o,M(e));import{_ as J,k as Q,ap as F,B as W,cH as X,l as B,r as a,o as u,n as _,b as t,w as r,s as c,F as y,S as Y,bi as v,q as I,c as p,p as P,d as m}from"./index.fd3c34f7.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{S as Z}from"./index.2cc02c22.js";/* empty css               */import{D as x}from"./index.21c04a9a.js";/* empty css               */import{R as ee}from"./index.86477da5.js";import{u as D}from"./index.7cbf6957.js";import{d as oe}from"./debounce.f0dc985b.js";import{T as q}from"./Tabs.fdb91136.js";import{F as H}from"./Form.970fc2ed.js";import{S as te}from"./index.213a54a3.js";import"./Checkbox.31cbd35b.js";import"./index.821ccc70.js";import"./shallowequal.e8028b1c.js";import"./_arrayIncludesWith.40afec22.js";import"./Overflow.572add81.js";import"./collapseMotion.69c5a13a.js";import"./useState.70c61dce.js";import"./useRefs.aacf5ee1.js";import"./hasIn.d219cb93.js";import"./isMobile.6491fde5.js";import"./useMergedState.fcf9d1e6.js";import"./Col.165062d6.js";import"./responsiveObserve.3bea7b2a.js";import"./useFlexGapSupport.5d23bcb4.js";import"./toArray.f0b52048.js";import"./get.cd8ee735.js";import"./toFinite.5a5e99db.js";const{Title:ne,Text:re}=Y,{TabPane:ae}=q,{Item:se}=H,{Password:le}=F,{mapGetters:ie,mapActions:ue}=Q("imgHosting"),me={name:"ImgHostingSettings",components:{Tabs:q,TabPane:ae,Form:H,Item:se,Input:F,Password:le,Button:W,Switch:Z,Divider:x,Space:te,Radio:ee,Title:ne,Text:re},data:()=>({uploaders:D,currentUploader:"aliyun",currentConfig:[],currentCommonConfig:{renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},radioStyle:{display:"flex",height:"32px",lineHeight:"32px"},customContent:"$url"}),computed:h({},ie(["config","uploader","commonConfig"])),mounted(){this.uploader&&(this.currentUploader=this.uploader),this.changeUploader(),this.currentCommonConfig=X(this.currentCommonConfig,B(this.commonConfig||{})),this.currentCommonConfig.customCopyContent!=="$url"&&this.currentCommonConfig.customCopyContent!=="![]($url)"&&(this.customContent=this.currentCommonConfig.customCopyContent)},methods:$(h({},ue(["saveConfig","saveCommonConfig","importConfig"])),{changeUploader(){this.currentConfig=B(D[this.currentUploader].config(this.config(this.currentUploader)))},save(){const o={};for(const e of this.currentConfig){if(e.required&&(e.default==null||e.default==="")){this.$msg.warn("\u5FC5\u586B\u9879\u672A\u586B\u5199\u5B8C\u6574");return}o[e.name]=e.default}this.saveConfig({uploader:this.currentUploader,config:o}),this.$msg.success("\u4FDD\u5B58\u6210\u529F")},handler(){this.$refs.file.click()},updateConfig:oe(function(){this.saveCommonConfig(this.currentCommonConfig)},100),updateCustomCopyContent(o){this.currentCommonConfig.customCopyContent=o,this.updateConfig()}})},pe=m(" \u901A\u7528\u914D\u7F6E "),ce={class:"commonConfigPanel"},de=m(" \u94FE\u63A5\u590D\u5236\u683C\u5F0F "),Ce=m(" \u6807\u51C6"),fe=m(" MarkDown"),ge=m(" \u81EA\u5B9A\u4E49"),he=m(" \u56FE\u5E8A\u8BBE\u7F6E "),_e={class:"configPanel"},ye={class:"configTable"},ve={class:"configOperator"},Ue=m(" \u4FDD\u5B58 ");function ke(o,e,s,Te,Se,i){const d=a("Title"),U=a("Switch"),C=a("Item"),k=a("Text"),f=a("Radio"),T=a("Input"),N=a("Space"),R=a("Divider"),A=a("Password"),V=a("Form"),K=a("Button"),L=a("TabPane"),z=a("Tabs");return u(),_(y,null,[t(d,{level:4},{default:r(()=>[pe]),_:1}),c("div",ce,[t(C,{label:"\u65F6\u95F4\u6233\u91CD\u547D\u540D"},{default:r(()=>[t(U,{checked:o.currentCommonConfig.renameTimeStamp,"onUpdate:checked":e[0]||(e[0]=n=>o.currentCommonConfig.renameTimeStamp=n),onChange:i.updateConfig},null,8,["checked","onChange"])]),_:1}),t(C,{label:"\u4E0A\u4F20\u540E\u81EA\u52A8\u590D\u5236URL"},{default:r(()=>[t(U,{checked:o.currentCommonConfig.copyUrlAfterUpload,"onUpdate:checked":e[1]||(e[1]=n=>o.currentCommonConfig.copyUrlAfterUpload=n),onChange:i.updateConfig},null,8,["checked","onChange"])]),_:1}),t(d,{level:5},{default:r(()=>[de]),_:1}),t(N,null,{default:r(()=>[t(f,{style:v(o.radioStyle),checked:o.currentCommonConfig.customCopyContent==="$url",onChange:e[2]||(e[2]=n=>i.updateCustomCopyContent("$url"))},{default:r(()=>[Ce,t(k,{code:"",content:"$url"})]),_:1},8,["style","checked"]),t(f,{style:v(o.radioStyle),checked:o.currentCommonConfig.customCopyContent==="![]($url)",onChange:e[3]||(e[3]=n=>i.updateCustomCopyContent("![]($url)"))},{default:r(()=>[fe,t(k,{code:"",content:"![]($url)"})]),_:1},8,["style","checked"]),t(f,{style:v(o.radioStyle),checked:o.currentCommonConfig.customCopyContent===o.customContent,onChange:e[6]||(e[6]=n=>i.updateCustomCopyContent(o.customContent))},{default:r(()=>[ge,t(T,{value:o.customContent,"onUpdate:value":e[4]||(e[4]=n=>o.customContent=n),style:{width:"100px","margin-left":"10px"},onChange:e[5]||(e[5]=n=>i.updateCustomCopyContent(n.target.value))},null,8,["value"])]),_:1},8,["style","checked"])]),_:1})]),t(R),t(d,{level:4},{default:r(()=>[he]),_:1}),t(z,{activeKey:o.currentUploader,"onUpdate:activeKey":e[7]||(e[7]=n=>o.currentUploader=n),type:"card",onChange:i.changeUploader},{default:r(()=>[(u(!0),_(y,null,I(o.uploaders,(n,S)=>(u(),p(L,{key:S,tab:n.name},{default:r(()=>[c("div",_e,[c("div",ye,[o.currentUploader===S?(u(),p(V,{key:0,layout:"vertical"},{default:r(()=>[(u(!0),_(y,null,I(o.currentConfig,l=>(u(),p(C,{key:l.name,label:l.label,required:l.required},{default:r(()=>[l.type==="input"?(u(),p(T,{key:0,value:l.default,"onUpdate:value":g=>l.default=g,"allow-clear":"",placeholder:l.hint},null,8,["value","onUpdate:value","placeholder"])):l.type==="password"?(u(),p(A,{key:1,value:l.default,"onUpdate:value":g=>l.default=g,"allow-clear":"",placeholder:l.hint},null,8,["value","onUpdate:value","placeholder"])):P("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)):P("",!0)]),c("div",ve,[t(K,{type:"primary",onClick:i.save},{default:r(()=>[Ue]),_:1},8,["onClick"])])])]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey","onChange"])],64)}var ao=J(me,[["render",ke],["__scopeId","data-v-85afc652"]]);export{ao as default};
