var x=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&c(e,s,t[s]);if(p)for(var s of p(t))w.call(t,s)&&c(e,s,t[s]);return e},r=(e,t)=>b(e,v(t));import{u as y}from"./index.097f343b.js";import{Z as j,ba as U,bb as $,r as n,o as D,x as R,y as m,f as u,a,aH as S,p as C,b as T,D as l}from"./vendor.9bb798a0.js";/* empty css               *//* empty css                */import{_ as q}from"./index.382ba815.js";const{Dragger:F}=S,{mapGetters:L,mapActions:O}=j("imgHosting"),N={name:"upload",components:{Dragger:F,UploadOne:U,Spin:$},props:["activeKey"],data:()=>({spinning:!1,timeoutIndex:void 0}),computed:o({},L(["config","uploader","commonConfig"])),mounted(){document.addEventListener("paste",this.paste.bind(this))},beforeUnmount(){document.removeEventListener("paste",this.paste.bind(this))},methods:r(o({},O(["addImage"])),{async customRequest({file:e}){if(this.spinning=!0,this.uploader&&this.config(this.uploader)){if(this.commonConfig.renameTimeStamp){const t=e.name||"";e=new File([e],(new Date().getTime()+t.substring(t.lastIndexOf("."))).toLowerCase(),{type:e.type,lastModified:e.lastModified})}try{const t=await y[this.uploader].handle(this.config(this.uploader),e);if(this.addImage(t),this.commonConfig.copyUrlAfterUpload)try{await navigator.clipboard.writeText(t.url),this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{this.$msg.error("\u4E0A\u4F20\u6210\u529F\uFF0C\u4F46\u5730\u5740\u590D\u5236\u5931\u8D25")}else this.$msg.success("\u4E0A\u4F20\u6210\u529F")}catch(t){console.log(t),this.$msg.error("\u4E0A\u4F20\u5931\u8D25")}}else this.$msg.warn("\u8BF7\u5148\u8FDB\u884C\u8BBE\u7F6E");this.spinning=!1},rejectFile(){this.$msg.warning("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF01")},paste(e){if(this.activeKey==="home"&&!this.spinning&&!this.timeoutIndex){this.timeoutIndex=setTimeout(()=>{this.timeoutIndex=void 0},500);const t=e.clipboardData&&e.clipboardData.items;let s;if(t&&t.length)for(const i of t)i.type.indexOf("image")!==-1&&(s=i.getAsFile());s?this.customRequest({file:s}):(this.rejectFile(),clearTimeout(this.timeoutIndex),this.timeoutIndex=void 0)}}})},g=e=>(C("data-v-195a1168"),e=e(),T(),e),A={class:"ant-upload-drag-icon"},B=g(()=>a("p",{class:"ant-upload-text"},[l("\u76F4\u63A5\u7C98\u8D34\u56FE\u7247\u6216\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC\u4E0A\u4F20"),a("br"),l("\u6216\u8005\u76F4\u63A5\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20")],-1)),H=g(()=>a("p",{class:"ant-upload-hint"}," \u6682\u65F6\u4EC5\u652F\u6301\u5355\u6587\u4EF6\u4E0A\u4F20\u3002 ",-1));function V(e,t,s,i,k,d){const h=n("UploadOne"),f=n("Dragger"),_=n("Spin");return D(),R(_,{spinning:e.spinning},{default:m(()=>[u(f,{fileList:[],accept:"image/bmp,image/gif,image/jpeg,image/png,image/webp",onReject:d.rejectFile,showUploadList:!1,customRequest:d.customRequest},{default:m(()=>[a("p",A,[u(h)]),B,H]),_:1},8,["onReject","customRequest"])]),_:1},8,["spinning"])}var J=q(N,[["render",V],["__scopeId","data-v-195a1168"]]);export{J as default};
