var D=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(o,e,a)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,f=(o,e)=>{for(var a in e||(e={}))P.call(e,a)&&w(o,a,e[a]);if($)for(var a of $(e))j.call(e,a)&&w(o,a,e[a]);return o},S=(o,e)=>L(o,M(e));import{_ as z,j as E,cM as G,k as B,o as u,m as g,a as t,w as r,q as m,F as h,a2 as O,bw as y,p as T,c as p,n as q,b as i,ch as J,$ as Q,B as W}from"./index.c31bc572.js";import{T as X,_ as Y}from"./index.76b987ce.js";/* empty css               *//* empty css              */import{_ as Z}from"./index.89dc8315.js";import{_ as x}from"./index.b48a6b4c.js";import{R as ee}from"./index.ad4bc194.js";import{_ as oe}from"./index.b93e8bff.js";import{u as N}from"./index.e78e43c2.js";import{d as te}from"./debounce.b10463ff.js";import{_ as ne}from"./FormItem.d7b1379d.js";import{_ as re}from"./Password.3a2df2da.js";import{F as ae}from"./Form.25785928.js";import"./index.6111417b.js";import"./Menu.df737505.js";import"./shallowequal.078d7f0e.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Overflow.5b0d2d9f.js";import"./collapseMotion.1abac316.js";import"./useState.af66e3a4.js";import"./useRefs.8095e168.js";import"./hasIn.0f4b989f.js";import"./isMobile.6491fde5.js";import"./useMergedState.03348d2b.js";import"./useFlexGapSupport.80b3a253.js";import"./Checkbox.be77c372.js";import"./Col.114716f6.js";import"./responsiveObserve.271b6a0c.js";import"./toArray.5ecb8f32.js";import"./get.71b1ef04.js";import"./toFinite.b9196501.js";import"./EyeOutlined.a8b131c7.js";const{mapGetters:se,mapActions:le}=E("imgHosting"),ue={name:"ImgHostingSettings",data:()=>({uploaders:N,currentUploader:"aliyun",currentConfig:[],currentCommonConfig:{renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0,customCopyContent:"$url"},radioStyle:{display:"flex",height:"32px",lineHeight:"32px"},customContent:"$url"}),computed:f({},se(["config","uploader","commonConfig"])),mounted(){this.uploader&&(this.currentUploader=this.uploader),this.changeUploader(),this.currentCommonConfig=G(this.currentCommonConfig,B(this.commonConfig||{})),this.currentCommonConfig.customCopyContent!=="$url"&&this.currentCommonConfig.customCopyContent!=="![]($url)"&&(this.customContent=this.currentCommonConfig.customCopyContent)},methods:S(f({},le(["saveConfig","saveCommonConfig","importConfig"])),{changeUploader(){this.currentConfig=B(N[this.currentUploader].config(this.config(this.currentUploader)))},save(){const o={};for(const e of this.currentConfig){if(e.required&&(e.default==null||e.default==="")){this.$msg.warn("\u5FC5\u586B\u9879\u672A\u586B\u5199\u5B8C\u6574");return}o[e.name]=e.default}this.saveConfig({uploader:this.currentUploader,config:o}),this.$msg.success("\u4FDD\u5B58\u6210\u529F")},handler(){this.$refs.file.click()},updateConfig:te(function(){this.saveCommonConfig(this.currentCommonConfig)},100),updateCustomCopyContent(o){this.currentCommonConfig.customCopyContent=o,this.updateConfig()}})},ie=i(" \u901A\u7528\u914D\u7F6E "),pe={class:"commonConfigPanel"},me=i(" \u94FE\u63A5\u590D\u5236\u683C\u5F0F "),ce=i(" \u6807\u51C6"),de=i(" MarkDown"),_e=i(" \u81EA\u5B9A\u4E49"),Ce=i(" \u56FE\u5E8A\u8BBE\u7F6E "),fe={class:"configPanel"},ge={class:"configTable"},he={class:"configOperator"},ye=i(" \u4FDD\u5B58 ");function ve(o,e,a,Ue,ke,l){const c=O,v=oe,d=ne,U=J,_=ee,k=Q,A=x,F=Z,H=re,V=ae,I=W,K=Y,R=X;return u(),g(h,null,[t(c,{level:4},{default:r(()=>[ie]),_:1}),m("div",pe,[t(d,{label:"\u65F6\u95F4\u6233\u91CD\u547D\u540D"},{default:r(()=>[t(v,{checked:o.currentCommonConfig.renameTimeStamp,"onUpdate:checked":e[0]||(e[0]=n=>o.currentCommonConfig.renameTimeStamp=n),onChange:l.updateConfig},null,8,["checked","onChange"])]),_:1}),t(d,{label:"\u4E0A\u4F20\u540E\u81EA\u52A8\u590D\u5236URL"},{default:r(()=>[t(v,{checked:o.currentCommonConfig.copyUrlAfterUpload,"onUpdate:checked":e[1]||(e[1]=n=>o.currentCommonConfig.copyUrlAfterUpload=n),onChange:l.updateConfig},null,8,["checked","onChange"])]),_:1}),t(c,{level:5},{default:r(()=>[me]),_:1}),t(A,null,{default:r(()=>[t(_,{style:y(o.radioStyle),checked:o.currentCommonConfig.customCopyContent==="$url",onChange:e[2]||(e[2]=n=>l.updateCustomCopyContent("$url"))},{default:r(()=>[ce,t(U,{code:"",content:"$url"})]),_:1},8,["style","checked"]),t(_,{style:y(o.radioStyle),checked:o.currentCommonConfig.customCopyContent==="![]($url)",onChange:e[3]||(e[3]=n=>l.updateCustomCopyContent("![]($url)"))},{default:r(()=>[de,t(U,{code:"",content:"![]($url)"})]),_:1},8,["style","checked"]),t(_,{style:y(o.radioStyle),checked:o.currentCommonConfig.customCopyContent===o.customContent,onChange:e[6]||(e[6]=n=>l.updateCustomCopyContent(o.customContent))},{default:r(()=>[_e,t(k,{value:o.customContent,"onUpdate:value":e[4]||(e[4]=n=>o.customContent=n),style:{width:"100px","margin-left":"10px"},onChange:e[5]||(e[5]=n=>l.updateCustomCopyContent(n.target.value))},null,8,["value"])]),_:1},8,["style","checked"])]),_:1})]),t(F),t(c,{level:4},{default:r(()=>[Ce]),_:1}),t(R,{activeKey:o.currentUploader,"onUpdate:activeKey":e[7]||(e[7]=n=>o.currentUploader=n),type:"card",onChange:l.changeUploader},{default:r(()=>[(u(!0),g(h,null,T(o.uploaders,(n,b)=>(u(),p(K,{key:b,tab:n.name},{default:r(()=>[m("div",fe,[m("div",ge,[o.currentUploader===b?(u(),p(V,{key:0,layout:"vertical"},{default:r(()=>[(u(!0),g(h,null,T(o.currentConfig,s=>(u(),p(d,{key:s.name,label:s.label,required:s.required},{default:r(()=>[s.type==="input"?(u(),p(k,{key:0,value:s.default,"onUpdate:value":C=>s.default=C,"allow-clear":"",placeholder:s.hint},null,8,["value","onUpdate:value","placeholder"])):s.type==="password"?(u(),p(H,{key:1,value:s.default,"onUpdate:value":C=>s.default=C,"allow-clear":"",placeholder:s.hint},null,8,["value","onUpdate:value","placeholder"])):q("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)):q("",!0)]),m("div",he,[t(I,{type:"primary",onClick:l.save},{default:r(()=>[ye]),_:1},8,["onClick"])])])]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey","onChange"])],64)}var no=z(ue,[["render",ve],["__scopeId","data-v-7e9da807"]]);export{no as default};
