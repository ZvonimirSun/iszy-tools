import{_ as e}from"./container.0385a2c2.js";import{J as a,K as s,R as t,q as l,E as i,G as o,I as n,M as d,D as r,N as p,p as c,a as u,o as m,c as h,w as O,r as f,b as v,d as g}from"./vendor.220318bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */var b=".container[data-v-151bd365] {\n  width: 100%;\n  height: 100%;\n}\n.imgUploaderContent[data-v-151bd365] {\n  user-select: none;\n  height: 25rem;\n  padding-top: 7.8rem;\n}\n.ant-upload[data-v-151bd365] {\n  cursor: pointer;\n}";const{Item:w}=i,{Option:x}=d,{Password:_}=n,{Dragger:y}=p,C={components:{Container:e,InboxOutlined:a,SettingOutlined:s,Row:t,Col:l,Form:i,Button:o,Input:n,Select:d,Divider:r,Item:w,Option:x,Password:_,Dragger:y},name:"极简图床",data:()=>({mode:"aliOss",setting:!1,fileList:[],aliOssOptions:{bucket:"",endpoint:"",accessKey:"",secretKey:""}}),mounted(){},methods:{changeSettings(){this.setting=!this.setting},rejectFile(){this.$msg.warning("不支持的文件类型！")},async beforeUpload(e){}},watch:{},computed:{isValid:function(){switch(this.mode){case"aliOss":return Boolean(""!==this.aliOssOptions.bucket&&""!==this.aliOssOptions.endpoint&&""!==this.aliOssOptions.accessKey&&""!==this.aliOssOptions.secretKey);default:return!1}},host:function(){if(this.isValid)switch(this.mode){case"aliOss":return"https://"+this.aliOssOptions.bucket+"."+this.aliOssOptions.endpoint+".aliyuncs.com"}return""},httpMethod:function(){if(this.isValid)switch(this.mode){case"aliOss":return"post"}return"post"},httpHeaders:function(){if(this.isValid)switch(this.mode){case"aliOss":return{OSSAccessKeyId:this.aliOssOptions.accessKey}}return{}}}},K=O();c("data-v-151bd365");const U={class:"container"},S=g("阿里云 OSS"),k=g("保存"),j={class:"imgUploaderContent"},I={class:"ant-upload-drag-icon"},B=v("p",{class:"ant-upload-text"},"点击或拖拽图片到这里上传",-1);u();const D=K(((e,a,s,t,l,i)=>{const o=f("Option"),n=f("Select"),d=f("Item"),r=f("Divider"),p=f("Input"),c=f("Password"),u=f("Form"),O=f("Col"),g=f("Button"),b=f("Row"),w=f("SettingOutlined"),x=f("inbox-outlined"),_=f("Dragger"),y=f("container");return m(),h(y,null,{default:K((()=>[v("div",U,[e.setting?(m(),h(b,{key:0},{default:K((()=>[v(O,{xs:24,sm:20},{default:K((()=>[v(u,{"label-col":{xs:24,sm:6,md:5,xl:3}},{default:K((()=>[v(d,{label:"上传方式",wrapperCol:{sm:6,md:5,xl:3}},{default:K((()=>[v(n,{value:e.mode,"onUpdate:value":a[1]||(a[1]=a=>e.mode=a),compact:""},{default:K((()=>[v(o,{value:"aliOss"},{default:K((()=>[S])),_:1})])),_:1},8,["value"])])),_:1}),v(r),v(d,{label:"设定KeyId",wrapperCol:{sm:12,md:9,xl:6},required:!0},{default:K((()=>[v(p,{value:e.aliOssOptions.accessKey,"onUpdate:value":a[2]||(a[2]=a=>e.aliOssOptions.accessKey=a),placeholder:"AccessKeyId","allow-clear":""},null,8,["value"])])),_:1}),v(d,{label:"设定KeySecret",wrapperCol:{sm:11,md:8,xl:5},required:!0},{default:K((()=>[v(c,{value:e.aliOssOptions.secretKey,"onUpdate:value":a[3]||(a[3]=a=>e.aliOssOptions.secretKey=a),placeholder:"AccessKeySecret","allow-clear":""},null,8,["value"])])),_:1}),v(d,{label:"设定存储空间",wrapperCol:{sm:8,md:6,xl:4},required:!0},{default:K((()=>[v(p,{value:e.aliOssOptions.bucket,"onUpdate:value":a[4]||(a[4]=a=>e.aliOssOptions.bucket=a),placeholder:"Bucket","allow-clear":""},null,8,["value"])])),_:1}),v(d,{label:"确认存储区域",wrapperCol:{sm:18,md:12,xl:8},required:!0},{default:K((()=>[v(p,{value:e.aliOssOptions.endpoint,"onUpdate:value":a[5]||(a[5]=a=>e.aliOssOptions.endpoint=a),placeholder:"例如oss-cn-shanghai","allow-clear":""},null,8,["value"])])),_:1}),v(d,{label:"指定存储路径",wrapperCol:{sm:18,md:12,xl:8}},{default:K((()=>[v(p,{value:e.aliOssOptions.path,"onUpdate:value":a[6]||(a[6]=a=>e.aliOssOptions.path=a),placeholder:"例如img/","allow-clear":""},null,8,["value"])])),_:1}),v(d,{label:"设定网址后缀",wrapperCol:{sm:18,md:12,xl:8}},{default:K((()=>[v(p,{value:e.aliOssOptions.addon,"onUpdate:value":a[7]||(a[7]=a=>e.aliOssOptions.addon=a),placeholder:"例如?x-oss-process=xxx","allow-clear":""},null,8,["value"])])),_:1}),v(d,{label:"设定自定义域名",wrapperCol:{sm:18,md:12,xl:8}},{default:K((()=>[v(p,{value:e.aliOssOptions.domain,"onUpdate:value":a[8]||(a[8]=a=>e.aliOssOptions.domain=a),placeholder:"例如https://xxx.com","allow-clear":""},null,8,["value"])])),_:1})])),_:1})])),_:1}),v(O,{xs:24,sm:4},{default:K((()=>[v(g,{type:"primary",onClick:i.changeSettings,style:{float:"right","margin-bottom":"1.6rem"}},{default:K((()=>[k])),_:1},8,["onClick"])])),_:1})])),_:1})):(m(),h(b,{key:1},{default:K((()=>[v(O,{span:"24"},{default:K((()=>[v(g,{shape:"circle",style:{float:"right",margin:"1.6rem"},onClick:i.changeSettings},{icon:K((()=>[v(w)])),_:1},8,["onClick"])])),_:1})])),_:1})),v(_,{fileList:e.fileList,"onUpdate:fileList":a[9]||(a[9]=a=>e.fileList=a),accept:"image/*",action:i.host,method:i.httpMethod,disabled:!i.isValid,headers:i.httpHeaders,onBeforeUpload:i.beforeUpload,onReject:i.rejectFile},{default:K((()=>[v("div",j,[v("p",I,[v(x)]),B])])),_:1},8,["fileList","action","method","disabled","headers","onBeforeUpload","onReject"])])])),_:1})}));C.render=D,C.__scopeId="data-v-151bd365";export default C;
