var _=Object.defineProperty,w=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,t,i)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,a=(e,t)=>{for(var i in t||(t={}))j.call(t,i)&&m(e,i,t[i]);if(d)for(var i of d(t))x.call(t,i)&&m(e,i,t[i]);return e},l=(e,t)=>w(e,C(t));import{u as v}from"./index.8ee21fd7.js";import{I,b as o,j as L,k as b,c as y,w as p,q as r,o as S,s,bR as U,bS as $,d as u}from"./index.7e728817.js";import{U as M}from"./index.60e6161a.js";import"./index.dc1f9bba.js";/* empty css               */import{S as T}from"./index.f49aa613.js";import"./Form.41ba48a9.js";import"./Col.fdc7c50d.js";import"./responsiveObserve.cc80a954.js";import"./useFlexGapSupport.605984bb.js";import"./toArray.44f743d7.js";import"./get.ce0f27ed.js";import"./hasIn.b550d00f.js";import"./_arrayIncludesWith.40afec22.js";import"./toFinite.196b2311.js";import"./collapseMotion.ccdd79cf.js";import"./EyeOutlined.539ab358.js";import"./useMergedState.c2ccf9b0.js";import"./index.98b7851d.js";import"./useRefs.0b02d73a.js";var q=I("upload-one",!0,function(e){return o("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[o("path",{d:"M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),o("path",{d:"M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40V40C32.785 40 31.8684 39.8683 30.9999 39.6221",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),o("path",{d:"M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),o("path",{d:"M17.0654 27.881L23.9999 20.9236L31.1318 28",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),o("path",{d:"M24 38V24.4618",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});const{Dragger:D}=M,{mapGetters:R,mapActions:W}=b("imgHosting"),F={name:"ImgHostingUpload",components:{Dragger:D,UploadOne:q,Spin:T},props:{activeKey:{type:String,default:""}},data:()=>({spinning:!1,timeoutIndex:void 0}),computed:a({},R(["config","uploader","commonConfig"])),mounted(){document.addEventListener("paste",this.paste.bind(this))},beforeUnmount(){document.removeEventListener("paste",this.paste.bind(this))},methods:l(a({},W(["addImage"])),{async customRequest({file:e}){if(this.spinning=!0,this.uploader&&this.config(this.uploader)){if(this.commonConfig.renameTimeStamp){const t=e.name||"";e=new File([e],(new Date().getTime()+t.substring(t.lastIndexOf("."))).toLowerCase(),{type:e.type,lastModified:e.lastModified})}try{const t=await v[this.uploader].handle(this.config(this.uploader),e);if(this.addImage(t),this.commonConfig.copyUrlAfterUpload)try{this.commonConfig.customCopyContent?await navigator.clipboard.writeText(this.commonConfig.customCopyContent.replace(/\$url/g,t.url)):await navigator.clipboard.writeText(t.url),this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{this.$msg.error("\u4E0A\u4F20\u6210\u529F\uFF0C\u4F46\u5730\u5740\u590D\u5236\u5931\u8D25")}else this.$msg.success("\u4E0A\u4F20\u6210\u529F")}catch(t){console.log(t),this.$msg.error("\u4E0A\u4F20\u5931\u8D25")}}else this.$msg.warn("\u8BF7\u5148\u8FDB\u884C\u8BBE\u7F6E");this.spinning=!1},rejectFile(){this.$msg.warning("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF01")},paste(e){if(this.activeKey==="home"&&!this.spinning&&!this.timeoutIndex){this.timeoutIndex=setTimeout(()=>{this.timeoutIndex=void 0},500);const t=e.clipboardData&&e.clipboardData.items;let i;if(t&&t.length)for(const n of t)n.type.indexOf("image")!==-1&&(i=n.getAsFile());i?this.customRequest({file:i}):(this.rejectFile(),clearTimeout(this.timeoutIndex),this.timeoutIndex=void 0)}}})},h=e=>(U("data-v-05d90104"),e=e(),$(),e),O={class:"ant-upload-drag-icon"},V=h(()=>s("p",{class:"ant-upload-text"},[u(" \u76F4\u63A5\u7C98\u8D34\u56FE\u7247\u6216\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC\u4E0A\u4F20"),s("br"),u("\u6216\u8005\u76F4\u63A5\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20 ")],-1)),B=h(()=>s("p",{class:"ant-upload-hint"}," \u6682\u65F6\u4EC5\u652F\u6301\u5355\u6587\u4EF6\u4E0A\u4F20\u3002 ",-1));function N(e,t,i,n,A,c){const g=r("UploadOne"),f=r("Dragger"),k=r("Spin");return S(),y(k,{spinning:e.spinning},{default:p(()=>[o(f,{"file-list":[],accept:"image/bmp,image/gif,image/jpeg,image/png,image/webp","show-upload-list":!1,"custom-request":c.customRequest,onReject:c.rejectFile},{default:p(()=>[s("p",O,[o(g)]),V,B]),_:1},8,["custom-request","onReject"])]),_:1},8,["spinning"])}var me=L(F,[["render",N],["__scopeId","data-v-05d90104"]]);export{me as default};
