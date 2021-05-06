import{_ as n}from"./container.cadb14aa.js";import{H as t,J as a,R as i,m as e,A as o,E as l,I as s,K as r,D as p,M as d,p as u,a as c,o as g,c as m,w as h,r as f,b,d as x}from"./vendor.d23080cc.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */var y="/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-upload {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  outline: 0;\n}\n.ant-upload p {\n  margin: 0;\n}\n.ant-upload-btn {\n  display: block;\n  width: 100%;\n  outline: none;\n}\n.ant-upload input[type='file'] {\n  cursor: pointer;\n}\n.ant-upload.ant-upload-select {\n  display: inline-block;\n}\n.ant-upload.ant-upload-disabled {\n  cursor: not-allowed;\n}\n.ant-upload.ant-upload-select-picture-card {\n  display: table;\n  float: left;\n  width: 104px;\n  height: 104px;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  text-align: center;\n  vertical-align: top;\n  background-color: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.ant-upload.ant-upload-select-picture-card > .ant-upload {\n  display: table-cell;\n  width: 100%;\n  height: 100%;\n  padding: 8px;\n  text-align: center;\n  vertical-align: middle;\n}\n.ant-upload.ant-upload-select-picture-card:hover {\n  border-color: #1890ff;\n}\n.ant-upload.ant-upload-drag {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: border-color 0.3s;\n}\n.ant-upload.ant-upload-drag .ant-upload {\n  padding: 16px 0;\n}\n.ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {\n  border-color: #096dd9;\n}\n.ant-upload.ant-upload-drag.ant-upload-disabled {\n  cursor: not-allowed;\n}\n.ant-upload.ant-upload-drag .ant-upload-btn {\n  display: table;\n  height: 100%;\n}\n.ant-upload.ant-upload-drag .ant-upload-drag-container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {\n  border-color: #40a9ff;\n}\n.ant-upload.ant-upload-drag p.ant-upload-drag-icon {\n  margin-bottom: 20px;\n}\n.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {\n  color: #40a9ff;\n  font-size: 48px;\n}\n.ant-upload.ant-upload-drag p.ant-upload-text {\n  margin: 0 0 4px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n}\n.ant-upload.ant-upload-drag p.ant-upload-hint {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-upload.ant-upload-drag .anticon-plus {\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 30px;\n  transition: all 0.3s;\n}\n.ant-upload.ant-upload-drag .anticon-plus:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload.ant-upload-drag:hover .anticon-plus {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload-picture-card-wrapper {\n  zoom: 1;\n  display: inline-block;\n  width: 100%;\n}\n.ant-upload-picture-card-wrapper::before,\n.ant-upload-picture-card-wrapper::after {\n  display: table;\n  content: '';\n}\n.ant-upload-picture-card-wrapper::after {\n  clear: both;\n}\n.ant-upload-list {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  zoom: 1;\n}\n.ant-upload-list::before,\n.ant-upload-list::after {\n  display: table;\n  content: '';\n}\n.ant-upload-list::after {\n  clear: both;\n}\n.ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-1 {\n  padding-right: 14px;\n}\n.ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-2 {\n  padding-right: 28px;\n}\n.ant-upload-list-item {\n  position: relative;\n  height: 22px;\n  margin-top: 8px;\n  font-size: 14px;\n}\n.ant-upload-list-item-name {\n  display: inline-block;\n  width: 100%;\n  padding-left: 22px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-upload-list-item-name-icon-count-1 {\n  padding-right: 14px;\n}\n.ant-upload-list-item-card-actions {\n  position: absolute;\n  right: 0;\n  opacity: 0;\n}\n.ant-upload-list-item-card-actions.picture {\n  top: 25px;\n  line-height: 1;\n  opacity: 1;\n}\n.ant-upload-list-item-card-actions .anticon {\n  padding-right: 6px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload-list-item-info {\n  height: 100%;\n  padding: 0 12px 0 4px;\n  transition: background-color 0.3s;\n}\n.ant-upload-list-item-info > span {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.ant-upload-list-item-info .anticon-loading,\n.ant-upload-list-item-info .anticon-paper-clip {\n  position: absolute;\n  top: 5px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-upload-list-item .anticon-close {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  position: absolute;\n  top: 6px;\n  right: 4px;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 0;\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.3s;\n}\n:root .ant-upload-list-item .anticon-close {\n  font-size: 12px;\n}\n.ant-upload-list-item .anticon-close:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-upload-list-item:hover .ant-upload-list-item-info {\n  background-color: #f5f5f5;\n}\n.ant-upload-list-item:hover .anticon-close {\n  opacity: 1;\n}\n.ant-upload-list-item:hover .ant-upload-list-item-card-actions {\n  opacity: 1;\n}\n.ant-upload-list-item-error,\n.ant-upload-list-item-error .anticon-paper-clip,\n.ant-upload-list-item-error .ant-upload-list-item-name {\n  color: #ff4d4f;\n}\n.ant-upload-list-item-error .ant-upload-list-item-card-actions {\n  opacity: 1;\n}\n.ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {\n  color: #ff4d4f;\n}\n.ant-upload-list-item-progress {\n  position: absolute;\n  bottom: -12px;\n  width: 100%;\n  padding-left: 26px;\n  font-size: 14px;\n  line-height: 0;\n}\n.ant-upload-list-picture .ant-upload-list-item,\n.ant-upload-list-picture-card .ant-upload-list-item {\n  position: relative;\n  height: 66px;\n  padding: 8px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n}\n.ant-upload-list-picture .ant-upload-list-item:hover,\n.ant-upload-list-picture-card .ant-upload-list-item:hover {\n  background: transparent;\n}\n.ant-upload-list-picture .ant-upload-list-item-error,\n.ant-upload-list-picture-card .ant-upload-list-item-error {\n  border-color: #ff4d4f;\n}\n.ant-upload-list-picture .ant-upload-list-item-info,\n.ant-upload-list-picture-card .ant-upload-list-item-info {\n  padding: 0;\n}\n.ant-upload-list-picture .ant-upload-list-item:hover .ant-upload-list-item-info,\n.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info {\n  background: transparent;\n}\n.ant-upload-list-picture .ant-upload-list-item-uploading,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading {\n  border-style: dashed;\n}\n.ant-upload-list-picture .ant-upload-list-item-thumbnail,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  width: 48px;\n  height: 48px;\n  font-size: 26px;\n  line-height: 54px;\n  text-align: center;\n  opacity: 0.8;\n}\n.ant-upload-list-picture .ant-upload-list-item-icon,\n.ant-upload-list-picture-card .ant-upload-list-item-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 26px;\n  transform: translate(-50%, -50%);\n}\n.ant-upload-list-picture .ant-upload-list-item-image,\n.ant-upload-list-picture-card .ant-upload-list-item-image {\n  max-width: 100%;\n}\n.ant-upload-list-picture .ant-upload-list-item-thumbnail img,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {\n  display: block;\n  width: 48px;\n  height: 48px;\n  overflow: hidden;\n}\n.ant-upload-list-picture .ant-upload-list-item-name,\n.ant-upload-list-picture-card .ant-upload-list-item-name {\n  display: inline-block;\n  box-sizing: border-box;\n  max-width: 100%;\n  margin: 0 0 0 8px;\n  padding-right: 8px;\n  padding-left: 48px;\n  overflow: hidden;\n  line-height: 44px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.ant-upload-list-picture .ant-upload-list-item-name-icon-count-1,\n.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-1 {\n  padding-right: 18px;\n}\n.ant-upload-list-picture .ant-upload-list-item-name-icon-count-2,\n.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-2 {\n  padding-right: 36px;\n}\n.ant-upload-list-picture .ant-upload-list-item-uploading .ant-upload-list-item-name,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-name {\n  line-height: 28px;\n}\n.ant-upload-list-picture .ant-upload-list-item-progress,\n.ant-upload-list-picture-card .ant-upload-list-item-progress {\n  bottom: 14px;\n  width: calc(100% - 24px);\n  margin-top: 0;\n  padding-left: 56px;\n}\n.ant-upload-list-picture .anticon-close,\n.ant-upload-list-picture-card .anticon-close {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  line-height: 1;\n  opacity: 1;\n}\n.ant-upload-list-picture-card.ant-upload-list::after {\n  display: none;\n}\n.ant-upload-list-picture-card-container {\n  float: left;\n  width: 104px;\n  height: 104px;\n  margin: 0 8px 8px 0;\n}\n.ant-upload-list-picture-card .ant-upload-list-item {\n  float: left;\n  width: 104px;\n  height: 104px;\n  margin: 0 8px 8px 0;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-info {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-info::before {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition: all 0.3s;\n  content: ' ';\n}\n.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info::before {\n  opacity: 1;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-actions {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  white-space: nowrap;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye,\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download,\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete {\n  z-index: 10;\n  width: 16px;\n  margin: 0 4px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye:hover,\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download:hover,\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete:hover {\n  color: #fff;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-info:hover + .ant-upload-list-item-actions,\n.ant-upload-list-picture-card .ant-upload-list-item-actions:hover {\n  opacity: 1;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {\n  position: static;\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-name {\n  display: none;\n  margin: 8px 0 0;\n  padding: 0;\n  line-height: 1.5715;\n  text-align: center;\n}\n.ant-upload-list-picture-card .anticon-picture + .ant-upload-list-item-name {\n  position: absolute;\n  bottom: 10px;\n  display: block;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading.ant-upload-list-item {\n  background-color: #fafafa;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info {\n  height: auto;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info::before,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-eye-o,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-delete {\n  display: none;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading-text {\n  margin-top: 18px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload-list-picture-card .ant-upload-list-item-progress {\n  bottom: 32px;\n  padding-left: 0;\n}\n.ant-upload-list .ant-upload-success-icon {\n  color: #52c41a;\n  font-weight: bold;\n}\n.ant-upload-list .ant-upload-animate-enter,\n.ant-upload-list .ant-upload-animate-leave,\n.ant-upload-list .ant-upload-animate-inline-enter,\n.ant-upload-list .ant-upload-animate-inline-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-upload-list .ant-upload-animate-enter {\n  animation-name: uploadAnimateIn;\n}\n.ant-upload-list .ant-upload-animate-leave {\n  animation-name: uploadAnimateOut;\n}\n.ant-upload-list .ant-upload-animate-inline-enter {\n  animation-name: uploadAnimateInlineIn;\n}\n.ant-upload-list .ant-upload-animate-inline-leave {\n  animation-name: uploadAnimateInlineOut;\n}\n@keyframes uploadAnimateIn {\n  from {\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n@keyframes uploadAnimateOut {\n  to {\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n@keyframes uploadAnimateInlineIn {\n  from {\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n@keyframes uploadAnimateInlineOut {\n  to {\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n",v="/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-progress {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n}\n.ant-progress-line {\n  position: relative;\n  width: 100%;\n  font-size: 14px;\n}\n.ant-progress-small.ant-progress-line,\n.ant-progress-small.ant-progress-line .ant-progress-text .anticon {\n  font-size: 12px;\n}\n.ant-progress-outer {\n  display: inline-block;\n  width: 100%;\n  margin-right: 0;\n  padding-right: 0;\n}\n.ant-progress-show-info .ant-progress-outer {\n  margin-right: calc(-2em - 8px);\n  padding-right: calc(2em + 8px);\n}\n.ant-progress-inner {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  vertical-align: middle;\n  background-color: #f5f5f5;\n  border-radius: 100px;\n}\n.ant-progress-circle-trail {\n  stroke: #f5f5f5;\n}\n.ant-progress-circle-path {\n  animation: ant-progress-appear 0.3s;\n}\n.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {\n  stroke: #1890ff;\n}\n.ant-progress-success-bg,\n.ant-progress-bg {\n  position: relative;\n  background-color: #1890ff;\n  border-radius: 100px;\n  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;\n}\n.ant-progress-success-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #52c41a;\n}\n.ant-progress-text {\n  display: inline-block;\n  width: 2em;\n  margin-left: 8px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 1em;\n  line-height: 1;\n  white-space: nowrap;\n  text-align: left;\n  vertical-align: middle;\n  word-break: normal;\n}\n.ant-progress-text .anticon {\n  font-size: 14px;\n}\n.ant-progress-status-active .ant-progress-bg::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  border-radius: 10px;\n  opacity: 0;\n  animation: ant-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;\n  content: '';\n}\n.ant-progress-status-exception .ant-progress-bg {\n  background-color: #ff4d4f;\n}\n.ant-progress-status-exception .ant-progress-text {\n  color: #ff4d4f;\n}\n.ant-progress-status-exception .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {\n  stroke: #ff4d4f;\n}\n.ant-progress-status-success .ant-progress-bg {\n  background-color: #52c41a;\n}\n.ant-progress-status-success .ant-progress-text {\n  color: #52c41a;\n}\n.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {\n  stroke: #52c41a;\n}\n.ant-progress-circle .ant-progress-inner {\n  position: relative;\n  line-height: 1;\n  background-color: transparent;\n}\n.ant-progress-circle .ant-progress-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1;\n  white-space: normal;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n.ant-progress-circle .ant-progress-text .anticon {\n  font-size: 1.16666667em;\n}\n.ant-progress-circle.ant-progress-status-exception .ant-progress-text {\n  color: #ff4d4f;\n}\n.ant-progress-circle.ant-progress-status-success .ant-progress-text {\n  color: #52c41a;\n}\n@keyframes ant-progress-active {\n  0% {\n    width: 0;\n    opacity: 0.1;\n  }\n  20% {\n    width: 0;\n    opacity: 0.5;\n  }\n  100% {\n    width: 100%;\n    opacity: 0;\n  }\n}\n",w=".container[data-v-0361f053] {\n  width: 100%;\n  height: 100%;\n}\n.imgUploaderContent[data-v-0361f053] {\n  user-select: none;\n  height: 250px;\n  padding-top: 78px;\n}\n.ant-upload[data-v-0361f053] {\n  cursor: pointer;\n}";const{Item:O}=o,{Option:k}=r,{Password:z}=s,{Dragger:_}=d,I={components:{Container:n,InboxOutlined:t,SettingOutlined:a,Row:i,Col:e,Form:o,Button:l,Input:s,Select:r,Divider:p,Item:O,Option:k,Password:z,Dragger:_},name:"极简图床",data:()=>({mode:"aliOss",setting:!1,fileList:[],aliOssOptions:{bucket:"",endpoint:"",accessKey:"",secretKey:""}}),mounted(){},methods:{changeSettings(){this.setting=!this.setting},rejectFile(){this.$msg.warning("不支持的文件类型！")},async beforeUpload(n){}},watch:{},computed:{isValid:function(){switch(this.mode){case"aliOss":return Boolean(""!==this.aliOssOptions.bucket&&""!==this.aliOssOptions.endpoint&&""!==this.aliOssOptions.accessKey&&""!==this.aliOssOptions.secretKey);default:return!1}},host:function(){if(this.isValid)switch(this.mode){case"aliOss":return"https://"+this.aliOssOptions.bucket+"."+this.aliOssOptions.endpoint+".aliyuncs.com"}return""},httpMethod:function(){if(this.isValid)switch(this.mode){case"aliOss":return"post"}return"post"},httpHeaders:function(){if(this.isValid)switch(this.mode){case"aliOss":return{OSSAccessKeyId:this.aliOssOptions.accessKey}}return{}}}},C=h();u("data-v-0361f053");const K={class:"container"},U=x("阿里云 OSS"),S=x("保存"),A={class:"imgUploaderContent"},j={class:"ant-upload-drag-icon"},B=b("p",{class:"ant-upload-text"},"点击或拖拽图片到这里上传",-1);c();const D=C(((n,t,a,i,e,o)=>{const l=f("Option"),s=f("Select"),r=f("Item"),p=f("Divider"),d=f("Input"),u=f("Password"),c=f("Form"),h=f("Col"),x=f("Button"),y=f("Row"),v=f("SettingOutlined"),w=f("inbox-outlined"),O=f("Dragger"),k=f("container");return g(),m(k,null,{default:C((()=>[b("div",K,[n.setting?(g(),m(y,{key:0},{default:C((()=>[b(h,{xs:24,sm:20},{default:C((()=>[b(c,{"label-col":{xs:24,sm:6,md:5,xl:3}},{default:C((()=>[b(r,{label:"上传方式",wrapperCol:{sm:6,md:5,xl:3}},{default:C((()=>[b(s,{value:n.mode,"onUpdate:value":t[1]||(t[1]=t=>n.mode=t),compact:""},{default:C((()=>[b(l,{value:"aliOss"},{default:C((()=>[U])),_:1})])),_:1},8,["value"])])),_:1}),b(p),b(r,{label:"设定KeyId",wrapperCol:{sm:12,md:9,xl:6},required:!0},{default:C((()=>[b(d,{value:n.aliOssOptions.accessKey,"onUpdate:value":t[2]||(t[2]=t=>n.aliOssOptions.accessKey=t),placeholder:"AccessKeyId","allow-clear":""},null,8,["value"])])),_:1}),b(r,{label:"设定KeySecret",wrapperCol:{sm:11,md:8,xl:5},required:!0},{default:C((()=>[b(u,{value:n.aliOssOptions.secretKey,"onUpdate:value":t[3]||(t[3]=t=>n.aliOssOptions.secretKey=t),placeholder:"AccessKeySecret","allow-clear":""},null,8,["value"])])),_:1}),b(r,{label:"设定存储空间",wrapperCol:{sm:8,md:6,xl:4},required:!0},{default:C((()=>[b(d,{value:n.aliOssOptions.bucket,"onUpdate:value":t[4]||(t[4]=t=>n.aliOssOptions.bucket=t),placeholder:"Bucket","allow-clear":""},null,8,["value"])])),_:1}),b(r,{label:"确认存储区域",wrapperCol:{sm:18,md:12,xl:8},required:!0},{default:C((()=>[b(d,{value:n.aliOssOptions.endpoint,"onUpdate:value":t[5]||(t[5]=t=>n.aliOssOptions.endpoint=t),placeholder:"例如oss-cn-shanghai","allow-clear":""},null,8,["value"])])),_:1}),b(r,{label:"指定存储路径",wrapperCol:{sm:18,md:12,xl:8}},{default:C((()=>[b(d,{value:n.aliOssOptions.path,"onUpdate:value":t[6]||(t[6]=t=>n.aliOssOptions.path=t),placeholder:"例如img/","allow-clear":""},null,8,["value"])])),_:1}),b(r,{label:"设定网址后缀",wrapperCol:{sm:18,md:12,xl:8}},{default:C((()=>[b(d,{value:n.aliOssOptions.addon,"onUpdate:value":t[7]||(t[7]=t=>n.aliOssOptions.addon=t),placeholder:"例如?x-oss-process=xxx","allow-clear":""},null,8,["value"])])),_:1}),b(r,{label:"设定自定义域名",wrapperCol:{sm:18,md:12,xl:8}},{default:C((()=>[b(d,{value:n.aliOssOptions.domain,"onUpdate:value":t[8]||(t[8]=t=>n.aliOssOptions.domain=t),placeholder:"例如https://xxx.com","allow-clear":""},null,8,["value"])])),_:1})])),_:1})])),_:1}),b(h,{xs:24,sm:4},{default:C((()=>[b(x,{type:"primary",onClick:o.changeSettings,style:{float:"right","margin-bottom":"16px"}},{default:C((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1})):(g(),m(y,{key:1},{default:C((()=>[b(h,{span:"24"},{default:C((()=>[b(x,{shape:"circle",style:{float:"right",margin:"16px"},onClick:o.changeSettings},{icon:C((()=>[b(v)])),_:1},8,["onClick"])])),_:1})])),_:1})),b(O,{fileList:n.fileList,"onUpdate:fileList":t[9]||(t[9]=t=>n.fileList=t),accept:"image/*",action:o.host,method:o.httpMethod,disabled:!o.isValid,headers:o.httpHeaders,onBeforeUpload:o.beforeUpload,onReject:o.rejectFile},{default:C((()=>[b("div",A,[b("p",j,[b(w)]),B])])),_:1},8,["fileList","action","method","disabled","headers","onBeforeUpload","onReject"])])])),_:1})}));I.render=D,I.__scopeId="data-v-0361f053";export default I;
