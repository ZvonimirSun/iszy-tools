var x=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var p=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))w.call(t,s)&&p(e,s,t[s]);if(d)for(var s of d(t))I.call(t,s)&&p(e,s,t[s]);return e},r=(e,t)=>b(e,v(t));import{u as y}from"./index.c152a7ac.js";import{q as j,b8 as U,b9 as $,r as n,o as C,u as R,w as m,f as u,a,aC as S,p as q,b as D,y as l}from"./vendor.04422529.js";/* empty css               *//* empty css                */import{_ as T}from"./index.8bf95aeb.js";const{Dragger:F}=S,{mapGetters:L,mapActions:O}=j("imgHosting"),N={name:"upload",components:{Dragger:F,UploadOne:U,Spin:$},props:["activeKey"],data:()=>({spinning:!1,timeoutIndex:void 0}),computed:o({},L(["config","uploader","commonConfig"])),mounted(){document.addEventListener("paste",this.paste.bind(this))},beforeUnmount(){document.removeEventListener("paste",this.paste.bind(this))},methods:r(o({},O(["addImage"])),{async customRequest({file:e}){if(this.spinning=!0,this.uploader&&this.config(this.uploader)){if(this.commonConfig.renameTimeStamp){const t=e.name||"";e=new File([e],(new Date().getTime()+t.substring(t.lastIndexOf("."))).toLowerCase(),{type:e.type,lastModified:e.lastModified})}try{const t=await y[this.uploader].handle(this.config(this.uploader),e);if(this.addImage(t),this.commonConfig.copyUrlAfterUpload)try{await navigator.clipboard.writeText(t.url),this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{this.$msg.error("\u4E0A\u4F20\u6210\u529F\uFF0C\u4F46\u5730\u5740\u590D\u5236\u5931\u8D25")}else this.$msg.success("\u4E0A\u4F20\u6210\u529F")}catch(t){console.log(t),this.$msg.error("\u4E0A\u4F20\u5931\u8D25")}}else this.$msg.warn("\u8BF7\u5148\u8FDB\u884C\u8BBE\u7F6E");this.spinning=!1},rejectFile(){this.$msg.warning("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF01")},paste(e){if(this.activeKey==="home"&&!this.spinning&&!this.timeoutIndex){this.timeoutIndex=setTimeout(()=>{this.timeoutIndex=void 0},500);const t=e.clipboardData&&e.clipboardData.items;let s;if(t&&t.length)for(const i of t)i.type.indexOf("image")!==-1&&(s=i.getAsFile());s?this.customRequest({file:s}):(this.rejectFile(),clearTimeout(this.timeoutIndex),this.timeoutIndex=void 0)}}})},g=e=>(q("data-v-195a1168"),e=e(),D(),e),A={class:"ant-upload-drag-icon"},B=g(()=>a("p",{class:"ant-upload-text"},[l("\u76F4\u63A5\u7C98\u8D34\u56FE\u7247\u6216\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u91CC\u4E0A\u4F20"),a("br"),l("\u6216\u8005\u76F4\u63A5\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20")],-1)),V=g(()=>a("p",{class:"ant-upload-hint"}," \u6682\u65F6\u4EC5\u652F\u6301\u5355\u6587\u4EF6\u4E0A\u4F20\u3002 ",-1));function k(e,t,s,i,E,c){const h=n("UploadOne"),f=n("Dragger"),_=n("Spin");return C(),R(_,{spinning:e.spinning},{default:m(()=>[u(f,{fileList:[],accept:"image/bmp,image/gif,image/jpeg,image/png,image/webp",onReject:c.rejectFile,showUploadList:!1,customRequest:c.customRequest},{default:m(()=>[a("p",A,[u(h)]),B,V]),_:1},8,["onReject","customRequest"])]),_:1},8,["spinning"])}var P=T(N,[["render",k],["__scopeId","data-v-195a1168"]]);export{P as default};
