!function(){var e=document.createElement("style");e.innerHTML=".container[data-v-151bd365]{width:100%;height:100%}.imgUploaderContent[data-v-151bd365]{user-select:none;height:25rem;padding-top:7.8rem}.ant-upload[data-v-151bd365]{cursor:pointer}\n",document.head.appendChild(e),System.register(["./container-legacy.717cbb33.js","./vendor-legacy.81d355e9.js","./index-legacy.a000b4fb.js","./index-legacy.307817a4.js","./index-legacy.a72b0b5f.js","./index-legacy.c3a455d8.js","./index-legacy.6a2862ef.js"],(function(e){"use strict";var t,a,l,s,i,n,o,d,c,r,u,p,h,m,O,f,g,v,b,y;return{setters:[function(e){t=e._},function(e){a=e.P,l=e.Q,s=e.R,i=e.u,n=e.K,o=e.N,d=e.M,c=e.V,r=e.D,u=e.p,p=e.a,h=e.W,m=e.r,O=e.c,f=e.w,g=e.o,v=e.d,b=e.b,y=e.e},function(){},function(){},function(){},function(){},function(){}],execute:function(){const{Item:w}=n,{Option:x}=c,{Password:_}=d,{Dragger:C}=h,K=e("default",{components:{Container:t,InboxOutlined:a,SettingOutlined:l,Row:s,Col:i,Form:n,Button:o,Input:d,Select:c,Divider:r,Item:w,Option:x,Password:_,Dragger:C},name:"极简图床",data:()=>({mode:"aliOss",setting:!1,fileList:[],aliOssOptions:{bucket:"",endpoint:"",accessKey:"",secretKey:""}}),mounted(){},methods:{changeSettings(){this.setting=!this.setting},rejectFile(){this.$msg.warning("不支持的文件类型！")},async beforeUpload(e){}},watch:{},computed:{isValid:function(){switch(this.mode){case"aliOss":return Boolean(""!==this.aliOssOptions.bucket&&""!==this.aliOssOptions.endpoint&&""!==this.aliOssOptions.accessKey&&""!==this.aliOssOptions.secretKey);default:return!1}},host:function(){if(this.isValid)switch(this.mode){case"aliOss":return"https://"+this.aliOssOptions.bucket+"."+this.aliOssOptions.endpoint+".aliyuncs.com"}return""},httpMethod:function(){if(this.isValid)switch(this.mode){case"aliOss":return"post"}return"post"},httpHeaders:function(){if(this.isValid)switch(this.mode){case"aliOss":return{OSSAccessKeyId:this.aliOssOptions.accessKey}}return{}}}});u("data-v-151bd365");const U={class:"container"},S=y("阿里云 OSS"),k=y("保存"),j={class:"imgUploaderContent"},I={class:"ant-upload-drag-icon"},L=v("p",{class:"ant-upload-text"},"点击或拖拽图片到这里上传",-1);p(),K.render=function(e,t,a,l,s,i){const n=m("Option"),o=m("Select"),d=m("Item"),c=m("Divider"),r=m("Input"),u=m("Password"),p=m("Form"),h=m("Col"),y=m("Button"),w=m("Row"),x=m("SettingOutlined"),_=m("inbox-outlined"),C=m("Dragger"),K=m("container");return g(),O(K,null,{default:f((()=>[v("div",U,[e.setting?(g(),O(w,{key:0},{default:f((()=>[b(h,{xs:24,sm:20},{default:f((()=>[b(p,{"label-col":{xs:24,sm:6,md:5,xl:3}},{default:f((()=>[b(d,{label:"上传方式",wrapperCol:{sm:6,md:5,xl:3}},{default:f((()=>[b(o,{value:e.mode,"onUpdate:value":t[0]||(t[0]=t=>e.mode=t),compact:""},{default:f((()=>[b(n,{value:"aliOss"},{default:f((()=>[S])),_:1})])),_:1},8,["value"])])),_:1}),b(c),b(d,{label:"设定KeyId",wrapperCol:{sm:12,md:9,xl:6},required:!0},{default:f((()=>[b(r,{value:e.aliOssOptions.accessKey,"onUpdate:value":t[1]||(t[1]=t=>e.aliOssOptions.accessKey=t),placeholder:"AccessKeyId","allow-clear":""},null,8,["value"])])),_:1}),b(d,{label:"设定KeySecret",wrapperCol:{sm:11,md:8,xl:5},required:!0},{default:f((()=>[b(u,{value:e.aliOssOptions.secretKey,"onUpdate:value":t[2]||(t[2]=t=>e.aliOssOptions.secretKey=t),placeholder:"AccessKeySecret","allow-clear":""},null,8,["value"])])),_:1}),b(d,{label:"设定存储空间",wrapperCol:{sm:8,md:6,xl:4},required:!0},{default:f((()=>[b(r,{value:e.aliOssOptions.bucket,"onUpdate:value":t[3]||(t[3]=t=>e.aliOssOptions.bucket=t),placeholder:"Bucket","allow-clear":""},null,8,["value"])])),_:1}),b(d,{label:"确认存储区域",wrapperCol:{sm:18,md:12,xl:8},required:!0},{default:f((()=>[b(r,{value:e.aliOssOptions.endpoint,"onUpdate:value":t[4]||(t[4]=t=>e.aliOssOptions.endpoint=t),placeholder:"例如oss-cn-shanghai","allow-clear":""},null,8,["value"])])),_:1}),b(d,{label:"指定存储路径",wrapperCol:{sm:18,md:12,xl:8}},{default:f((()=>[b(r,{value:e.aliOssOptions.path,"onUpdate:value":t[5]||(t[5]=t=>e.aliOssOptions.path=t),placeholder:"例如img/","allow-clear":""},null,8,["value"])])),_:1}),b(d,{label:"设定网址后缀",wrapperCol:{sm:18,md:12,xl:8}},{default:f((()=>[b(r,{value:e.aliOssOptions.addon,"onUpdate:value":t[6]||(t[6]=t=>e.aliOssOptions.addon=t),placeholder:"例如?x-oss-process=xxx","allow-clear":""},null,8,["value"])])),_:1}),b(d,{label:"设定自定义域名",wrapperCol:{sm:18,md:12,xl:8}},{default:f((()=>[b(r,{value:e.aliOssOptions.domain,"onUpdate:value":t[7]||(t[7]=t=>e.aliOssOptions.domain=t),placeholder:"例如https://xxx.com","allow-clear":""},null,8,["value"])])),_:1})])),_:1})])),_:1}),b(h,{xs:24,sm:4},{default:f((()=>[b(y,{type:"primary",onClick:i.changeSettings,style:{float:"right","margin-bottom":"1.6rem"}},{default:f((()=>[k])),_:1},8,["onClick"])])),_:1})])),_:1})):(g(),O(w,{key:1},{default:f((()=>[b(h,{span:"24"},{default:f((()=>[b(y,{shape:"circle",style:{float:"right",margin:"1.6rem"},onClick:i.changeSettings},{icon:f((()=>[b(x)])),_:1},8,["onClick"])])),_:1})])),_:1})),b(C,{fileList:e.fileList,"onUpdate:fileList":t[8]||(t[8]=t=>e.fileList=t),accept:"image/*",action:i.host,method:i.httpMethod,disabled:!i.isValid,headers:i.httpHeaders,onBeforeUpload:i.beforeUpload,onReject:i.rejectFile},{default:f((()=>[v("div",j,[v("p",I,[b(_)]),L])])),_:1},8,["fileList","action","method","disabled","headers","onBeforeUpload","onReject"])])])),_:1})},K.__scopeId="data-v-151bd365"}}}))}();
