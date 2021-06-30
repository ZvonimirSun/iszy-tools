import{_ as n}from"./container.3a17fa3b.js";import{J as e,c as t}from"./createFile.143d8ea4.js";import{H as a,O as o,a6 as i,a7 as r,a8 as d,a9 as l,$ as s,l as c,T as p,p as m,a as f,o as g,c as h,b as u,t as b,W as y,y as x,w as v,d as w,r as k}from"./vendor.b29574fd.js";/* empty css              *//* empty css              *//* empty css              */var C="/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-modal {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  top: 100px;\n  width: auto;\n  margin: 0 auto;\n  padding-bottom: 24px;\n  pointer-events: none;\n}\n.ant-modal-wrap {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n.ant-modal-title {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  word-wrap: break-word;\n}\n.ant-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-radius: 2px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: auto;\n}\n.ant-modal-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.45);\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.ant-modal-close-x {\n  display: block;\n  width: 56px;\n  height: 56px;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 56px;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n}\n.ant-modal-close:focus,\n.ant-modal-close:hover {\n  color: rgba(0, 0, 0, 0.75);\n  text-decoration: none;\n}\n.ant-modal-header {\n  padding: 16px 24px;\n  color: rgba(0, 0, 0, 0.85);\n  background: #fff;\n  border-bottom: 1px solid #f0f0f0;\n  border-radius: 2px 2px 0 0;\n}\n.ant-modal-body {\n  padding: 24px;\n  font-size: 14px;\n  line-height: 1.5715;\n  word-wrap: break-word;\n}\n.ant-modal-footer {\n  padding: 10px 16px;\n  text-align: right;\n  background: transparent;\n  border-top: 1px solid #f0f0f0;\n  border-radius: 0 0 2px 2px;\n}\n.ant-modal-footer button + button {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n.ant-modal.zoom-enter,\n.ant-modal.zoom-appear {\n  transform: none;\n  opacity: 0;\n  animation-duration: 0.3s;\n  user-select: none;\n}\n.ant-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  filter: alpha(opacity=50);\n}\n.ant-modal-mask-hidden {\n  display: none;\n}\n.ant-modal-open {\n  overflow: hidden;\n}\n.ant-modal-centered {\n  text-align: center;\n}\n.ant-modal-centered::before {\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.ant-modal-centered .ant-modal {\n  top: 0;\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n}\n@media (max-width: 767px) {\n  .ant-modal {\n    max-width: calc(100vw - 16px);\n    margin: 8px auto;\n  }\n  .ant-modal-centered .ant-modal {\n    flex: 1;\n  }\n}\n.ant-modal-confirm .ant-modal-header {\n  display: none;\n}\n.ant-modal-confirm .ant-modal-body {\n  padding: 32px 32px 24px;\n}\n.ant-modal-confirm-body-wrapper {\n  zoom: 1;\n}\n.ant-modal-confirm-body-wrapper::before,\n.ant-modal-confirm-body-wrapper::after {\n  display: table;\n  content: '';\n}\n.ant-modal-confirm-body-wrapper::after {\n  clear: both;\n}\n.ant-modal-confirm-body .ant-modal-confirm-title {\n  display: block;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n}\n.ant-modal-confirm-body .ant-modal-confirm-content {\n  margin-top: 8px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n}\n.ant-modal-confirm-body > .anticon {\n  float: left;\n  margin-right: 16px;\n  font-size: 22px;\n}\n.ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {\n  margin-left: 38px;\n}\n.ant-modal-confirm .ant-modal-confirm-btns {\n  float: right;\n  margin-top: 24px;\n}\n.ant-modal-confirm .ant-modal-confirm-btns button + button {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n.ant-modal-confirm-error .ant-modal-confirm-body > .anticon {\n  color: #ff4d4f;\n}\n.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,\n.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {\n  color: #faad14;\n}\n.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {\n  color: #1890ff;\n}\n.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {\n  color: #52c41a;\n}\n",j=".jsonEditor[data-v-7e0c288d] {\n  height: calc(100vh - 36.3rem);\n}\n.jsonEditor .ace-jsoneditor *[data-v-7e0c288d], .jsonEditor textarea.jsoneditor-text *[data-v-7e0c288d] {\n  font-family: JetBrains Mono, monospace;\n}\n.ant-btn-group[data-v-7e0c288d] {\n  margin-bottom: 0.8rem;\n}\n[data-v-7e0c288d] .jsoneditor-poweredBy {\n  display: none;\n}";const{Group:_}=a,{Paragraph:z}=p,U={name:"dataListTreeHandler",components:{Container:n,Button:a,Group:_,Upload:o,Modal:i,Paragraph:z,UploadOutlined:r,DownloadOutlined:d,ToolOutlined:l},data:()=>({inited:!1,editor:null,code:void 0,loading:!1,errorLayer:[],showError:!1}),mounted(){this.init()},methods:{init(){this.editor=s(new e(this.$refs.jsonEditor,{mode:"code",modes:["code","tree","view"],onChange:()=>{try{this.code=this.editor.get()}catch(n){}}})),this.inited=!0},upload(n){const e=new FileReader;return e.readAsText(n,"UTF-8"),e.onload=n=>{try{this.code=JSON.parse(n.target.result),this.editor.update(this.code)}catch(e){}},!1},download(){t(this.editor.getText(),"data.json")},async handler(){if(this.errorLayer=[],this.code&&Array.isArray(this.code.layerList)&&this.code.layerList.length>0){const n=this.editor.getMode(),e=setTimeout((()=>{this.loading=!0,this.editor.setMode("preview")}),100),t=c.exports.cloneDeep(this.code);for(const a of t.layerList)await this.checkLayer(a);this.code=t,this.editor.update(this.code),clearTimeout(e),this.editor.setMode(n),this.loading=!1,this.errorLayer.length>0&&(this.showError=!0)}},async checkLayer(n){if("dir"===n.type){if(n.children)for(const e of n.children)await this.checkLayer(e)}else await this.addIdentifyConfig(n)&&n.title&&this.errorLayer.push(n.title)},async addIdentifyConfig(n){let e=0;if(n.serviceConfig&&n.serviceConfig.identify&&n.serviceConfig.type&&n.serviceConfig.type.data)switch(n.serviceConfig.identify.data=n.serviceConfig.identify.data||[],n.serviceConfig.type.data){case"supermap_rest":case"supermap_tile":{const t=n.serviceConfig.relevantUrls&&Array.isArray(n.serviceConfig.relevantUrls.data)?n.serviceConfig.relevantUrls.data.find((n=>"dataUrl"===n.itemKey)):"";if(t)for(const a of n.serviceConfig.identify.data)Array.isArray(a.resultMapping)&&a.resultMapping.length>0||await this.handleSupermapService(a,t.itemValue,a.datasetName)&&(e=1);break}case"arcgis_rest":case"arcgis_tile":{const t=n.serviceConfig.url.data;for(const a of n.serviceConfig.identify.data)Array.isArray(a.resultMapping)&&a.resultMapping.length>0||await this.handleArcgisService(a,t,a.layerId)&&(e=1);break}}return e},async handleSupermapService(n,e,t){try{const a=[],o={datasetNames:[t],getFeatureMode:"ID",ids:[1],hasGeometry:!1},i=e+(e.endsWith("/")?"":"/")+"data/featureResults.json?returnContent=true",r=(await this.$axios.post(i,o)).data;for(const n of r.features[0].fieldNames)a.push({label:n,value:n});return n.resultMapping=a,n.title=n.title||{field:a[0].value,isTemplet:!1,remark:""},0}catch(a){return 1}},async handleArcgisService(n,e,t){try{const a=[];t=parseInt(t);const o=(await this.$axios.get(e+(e.endsWith("/")?"":"/")+t,{params:{f:"json"}})).data,i=o.fields;for(const n of i)a.push({label:n.alias||n.name,value:n.name});return n.layerName=n.layerName||o.name,n.resultMapping=a,n.title=n.title||{field:a[0].value,isTemplet:!1,remark:""},0}catch(a){return 1}}},beforeUnmount(){this.editor&&this.editor.destroy()}},L=v();m("data-v-7e0c288d");const M=w(" 上传 "),A=w(" 下载 "),E=w(" 处理 "),T={ref:"jsonEditor",class:"jsonEditor"},O=w("以下图层处理中遇到错误，可能配置有误，需要检查");f();const S=L(((n,e,t,a,o,i)=>{const r=k("UploadOutlined"),d=k("Button"),l=k("Upload"),s=k("DownloadOutlined"),c=k("ToolOutlined"),p=k("Group"),m=k("Paragraph"),f=k("Modal"),v=k("container");return g(),h(v,null,{default:L((()=>[u(p,null,{default:L((()=>[u(l,{showUploadList:!1,beforeUpload:i.upload,disabled:!n.inited||n.loading},{default:L((()=>[u(d,{type:"primary",disabled:!n.inited||n.loading},{default:L((()=>[u(r),M])),_:1},8,["disabled"])])),_:1},8,["beforeUpload","disabled"]),u(d,{type:"primary",onClick:i.download,disabled:!n.inited||n.loading},{default:L((()=>[u(s),A])),_:1},8,["onClick","disabled"]),u(d,{type:"primary",onClick:i.handler,loading:n.loading,disabled:!n.inited},{default:L((()=>[b(u(c,null,null,512),[[y,!n.loading]]),E])),_:1},8,["onClick","loading","disabled"])])),_:1}),u("div",T,null,512),u(f,{title:"错误提示",visible:n.showError,"onUpdate:visible":e[1]||(e[1]=e=>n.showError=e),onOk:e[2]||(e[2]=e=>n.showError=!1)},{default:L((()=>[u(m,null,{default:L((()=>[O])),_:1}),u(m,null,{default:L((()=>[u("pre",null,x(n.errorLayer.join("\n")),1)])),_:1})])),_:1},8,["visible"])])),_:1})}));U.render=S,U.__scopeId="data-v-7e0c288d";export default U;
