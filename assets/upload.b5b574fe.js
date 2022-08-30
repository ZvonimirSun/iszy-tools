import{_ as d,a_ as u,o as l,c as g,w as p,a as h,b0 as _,b1 as f,L as s,b as r}from"./index.1093e7bf.js";import{S as x}from"./index.94509b8e.js";import{U as y}from"./index.7f09998a.js";import"./index.2c588900.js";import{u as w}from"./index.0a51e713.js";import"./FormItem.41195704.js";import"./Col.3932e7f5.js";import"./responsiveObserve.e8e15761.js";import"./useFlexGapSupport.626c524d.js";import"./toArray.fefbc5d7.js";import"./get.4a7b42c3.js";import"./hasIn.0f4f677c.js";import"./toInteger.61596998.js";import"./toFinite.6730660a.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.c1d10bbb.js";import"./EyeOutlined.0af838f3.js";import"./index.b941b547.js";import"./Form.7b89eda4.js";import"./_arrayIncludesWith.91d14080.js";import"./useRefs.07364fb3.js";const{mapGetters:b,mapActions:I}=u("imgHosting"),v={name:"ImgHostingUpload",props:{activeKey:{type:String,default:""}},data:()=>({spinning:!1,timeoutIndex:void 0}),computed:{...b(["config","uploader","commonConfig"])},mounted(){document.addEventListener("paste",this.paste.bind(this))},beforeUnmount(){document.removeEventListener("paste",this.paste.bind(this))},methods:{...I(["addImage"]),async customRequest({file:t}){if(this.spinning=!0,this.uploader&&this.config(this.uploader)){if(this.commonConfig.renameTimeStamp){const e=t.name||"";t=new File([t],(new Date().getTime()+e.substring(e.lastIndexOf("."))).toLowerCase(),{type:t.type,lastModified:t.lastModified})}try{const e=await w[this.uploader].handle(this.config(this.uploader),t);if(this.addImage(e),this.commonConfig.copyUrlAfterUpload)try{this.commonConfig.customCopyContent?await navigator.clipboard.writeText(this.commonConfig.customCopyContent.replace(/\$url/g,e.url)):await navigator.clipboard.writeText(e.url),this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{this.$msg.error("\u4E0A\u4F20\u6210\u529F\uFF0C\u4F46\u5730\u5740\u590D\u5236\u5931\u8D25")}else this.$msg.success("\u4E0A\u4F20\u6210\u529F")}catch(e){console.log(e),this.$msg.error("\u4E0A\u4F20\u5931\u8D25")}}else this.$msg.warn("\u8BF7\u5148\u8FDB\u884C\u8BBE\u7F6E");this.spinning=!1},rejectFile(){this.$msg.warning("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF01")},paste(t){if(this.activeKey==="home"&&!this.spinning&&!this.timeoutIndex){this.timeoutIndex=setTimeout(()=>{this.timeoutIndex=void 0},500);const e=t.clipboardData&&t.clipboardData.items;let o;if(e&&e.length)for(const i of e)i.type.indexOf("image")!==-1&&(o=i.getAsFile());o?this.customRequest({file:o}):(this.rejectFile(),clearTimeout(this.timeoutIndex),this.timeoutIndex=void 0)}}}},a=t=>(_("data-v-0155df66"),t=t(),f(),t),C=a(()=>s("p",{class:"ant-upload-drag-icon"},[s("span",{class:"i-icon-park-upload-one"})],-1)),$=a(()=>s("p",{class:"ant-upload-text"},[r(" \u76F4\u63A5\u7C98\u8D34\u56FE\u7247\u6216\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC\u4E0A\u4F20"),s("br"),r("\u6216\u8005\u76F4\u63A5\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20 ")],-1)),S=a(()=>s("p",{class:"ant-upload-hint"}," \u6682\u65F6\u4EC5\u652F\u6301\u5355\u6587\u4EF6\u4E0A\u4F20\u3002 ",-1));function T(t,e,o,i,j,n){const m=y,c=x;return l(),g(c,{spinning:t.spinning},{default:p(()=>[h(m,{"file-list":[],accept:"image/bmp,image/gif,image/jpeg,image/png,image/webp","show-upload-list":!1,"custom-request":n.customRequest,onReject:n.rejectFile},{default:p(()=>[C,$,S]),_:1},8,["custom-request","onReject"])]),_:1},8,["spinning"])}const W=d(v,[["render",T],["__scopeId","data-v-0155df66"]]);export{W as default};
