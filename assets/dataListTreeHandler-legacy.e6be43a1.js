!function(){var e=document.createElement("style");e.innerHTML='.ant-modal{box-sizing:border-box;padding:0 0 24px;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;top:100px;width:auto;margin:0 auto;pointer-events:none}.ant-modal-wrap{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto;outline:0;-webkit-overflow-scrolling:touch}.ant-modal-title{margin:0;color:#000000d9;font-weight:500;font-size:16px;line-height:22px;word-wrap:break-word}.ant-modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:2px;box-shadow:0 4px 12px #00000026;pointer-events:auto}.ant-modal-close{position:absolute;top:0;right:0;z-index:10;padding:0;color:#00000073;font-weight:700;line-height:1;text-decoration:none;background:transparent;border:0;outline:0;cursor:pointer;transition:color .3s}.ant-modal-close-x{display:block;width:56px;height:56px;font-size:16px;font-style:normal;line-height:56px;text-align:center;text-transform:none;text-rendering:auto}.ant-modal-close:focus,.ant-modal-close:hover{color:#000000bf;text-decoration:none}.ant-modal-header{padding:16px 24px;color:#000000d9;background:#fff;border-bottom:1px solid #f0f0f0;border-radius:2px 2px 0 0}.ant-modal-body{padding:24px;font-size:14px;line-height:1.5715;word-wrap:break-word}.ant-modal-footer{padding:10px 16px;text-align:right;background:transparent;border-top:1px solid #f0f0f0;border-radius:0 0 2px 2px}.ant-modal-footer button+button{margin-bottom:0;margin-left:8px}.ant-modal.zoom-enter,.ant-modal.zoom-appear{transform:none;opacity:0;animation-duration:.3s;user-select:none}.ant-modal-mask{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;height:100%;background-color:#00000073;filter:alpha(opacity=50)}.ant-modal-mask-hidden{display:none}.ant-modal-open{overflow:hidden}.ant-modal-centered{text-align:center}.ant-modal-centered:before{display:inline-block;width:0;height:100%;vertical-align:middle;content:""}.ant-modal-centered .ant-modal{top:0;display:inline-block;text-align:left;vertical-align:middle}@media (max-width: 767px){.ant-modal{max-width:calc(100vw - 16px);margin:8px auto}.ant-modal-centered .ant-modal{flex:1}}.ant-modal-confirm .ant-modal-header{display:none}.ant-modal-confirm .ant-modal-body{padding:32px 32px 24px}.ant-modal-confirm-body-wrapper{zoom:1}.ant-modal-confirm-body-wrapper:before,.ant-modal-confirm-body-wrapper:after{display:table;content:""}.ant-modal-confirm-body-wrapper:after{clear:both}.ant-modal-confirm-body .ant-modal-confirm-title{display:block;overflow:hidden;color:#000000d9;font-weight:500;font-size:16px;line-height:1.4}.ant-modal-confirm-body .ant-modal-confirm-content{margin-top:8px;color:#000000d9;font-size:14px}.ant-modal-confirm-body>.anticon{float:left;margin-right:16px;font-size:22px}.ant-modal-confirm-body>.anticon+.ant-modal-confirm-title+.ant-modal-confirm-content{margin-left:38px}.ant-modal-confirm .ant-modal-confirm-btns{float:right;margin-top:24px}.ant-modal-confirm .ant-modal-confirm-btns button+button{margin-bottom:0;margin-left:8px}.ant-modal-confirm-error .ant-modal-confirm-body>.anticon{color:#ff4d4f}.ant-modal-confirm-warning .ant-modal-confirm-body>.anticon,.ant-modal-confirm-confirm .ant-modal-confirm-body>.anticon{color:#faad14}.ant-modal-confirm-info .ant-modal-confirm-body>.anticon{color:#1890ff}.ant-modal-confirm-success .ant-modal-confirm-body>.anticon{color:#52c41a}.jsonEditor[data-v-7e0c288d]{height:calc(100vh - 36.3rem)}.jsonEditor .ace-jsoneditor *[data-v-7e0c288d],.jsonEditor textarea.jsoneditor-text *[data-v-7e0c288d]{font-family:JetBrains Mono,monospace}.ant-btn-group[data-v-7e0c288d]{margin-bottom:.8rem}[data-v-7e0c288d] .jsoneditor-poweredBy{display:none}\n',document.head.appendChild(e),System.register(["./container-legacy.24f6b2b0.js","./createFile-legacy.68ae4219.js","./vendor-legacy.e29cad23.js","./index-legacy.6a2862ef.js","./index-legacy.c3a455d8.js"],(function(e){"use strict";var t,o,a,n,i,r,d,l,s,c,f,p,m,h,u,g,y,b,x,v,w,k,C,j;return{setters:[function(e){t=e._},function(e){o=e.J,a=e.c},function(e){n=e.N,i=e.W,r=e.ac,d=e.ad,l=e.ae,s=e.af,c=e.a7,f=e.l,p=e.p,m=e.a,h=e.T,u=e.r,g=e.c,y=e.w,b=e.o,x=e.b,v=e.x,w=e.$,k=e.d,C=e.G,j=e.e},function(){},function(){}],execute:function(){const{Group:_}=n,{Paragraph:z}=h,L=e("default",{name:"dataListTreeHandler",components:{Container:t,Button:n,Group:_,Upload:i,Modal:r,Paragraph:z,UploadOutlined:d,DownloadOutlined:l,ToolOutlined:s},data:()=>({inited:!1,editor:null,code:void 0,loading:!1,errorLayer:[],showError:!1}),mounted(){this.init()},methods:{init(){this.editor=c(new o(this.$refs.jsonEditor,{mode:"code",modes:["code","tree","view"],onChange:()=>{try{this.code=this.editor.get()}catch(e){}}})),this.inited=!0},upload(e){const t=new FileReader;return t.readAsText(e,"UTF-8"),t.onload=e=>{try{this.code=JSON.parse(e.target.result),this.editor.update(this.code)}catch(e){}},!1},download(){a(this.editor.getText(),"data.json")},async handler(){if(this.errorLayer=[],this.code&&Array.isArray(this.code.layerList)&&this.code.layerList.length>0){const e=this.editor.getMode(),t=setTimeout((()=>{this.loading=!0,this.editor.setMode("preview")}),100),o=f.exports.cloneDeep(this.code);for(const a of o.layerList)await this.checkLayer(a);this.code=o,this.editor.update(this.code),clearTimeout(t),this.editor.setMode(e),this.loading=!1,this.errorLayer.length>0&&(this.showError=!0)}},async checkLayer(e){if("dir"===e.type){if(e.children)for(const t of e.children)await this.checkLayer(t)}else await this.addIdentifyConfig(e)&&e.title&&this.errorLayer.push(e.title)},async addIdentifyConfig(e){let t=0;if(e.serviceConfig&&e.serviceConfig.identify&&e.serviceConfig.type&&e.serviceConfig.type.data)switch(e.serviceConfig.identify.data=e.serviceConfig.identify.data||[],e.serviceConfig.type.data){case"supermap_rest":case"supermap_tile":{const o=e.serviceConfig.relevantUrls&&Array.isArray(e.serviceConfig.relevantUrls.data)?e.serviceConfig.relevantUrls.data.find((e=>"dataUrl"===e.itemKey)):"";if(o)for(const a of e.serviceConfig.identify.data)Array.isArray(a.resultMapping)&&a.resultMapping.length>0||await this.handleSupermapService(a,o.itemValue,a.datasetName)&&(t=1);break}case"arcgis_rest":case"arcgis_tile":{const o=e.serviceConfig.url.data;for(const a of e.serviceConfig.identify.data)Array.isArray(a.resultMapping)&&a.resultMapping.length>0||await this.handleArcgisService(a,o,a.layerId)&&(t=1);break}}return t},async handleSupermapService(e,t,o){try{const a=[],n={datasetNames:[o],getFeatureMode:"ID",ids:[1],hasGeometry:!1},i=t+(t.endsWith("/")?"":"/")+"data/featureResults.json?returnContent=true",r=(await this.$axios.post(i,n)).data;for(const e of r.features[0].fieldNames)a.push({label:e,value:e});return e.resultMapping=a,e.title=e.title||{field:a[0].value,isTemplet:!1,remark:""},0}catch(a){return 1}},async handleArcgisService(e,t,o){try{const a=[];o=parseInt(o);const n=(await this.$axios.get(t+(t.endsWith("/")?"":"/")+o,{params:{f:"json"}})).data,i=n.fields;for(const e of i)a.push({label:e.alias||e.name,value:e.name});return e.layerName=e.layerName||n.name,e.resultMapping=a,e.title=e.title||{field:a[0].value,isTemplet:!1,remark:""},0}catch(a){return 1}}},beforeUnmount(){this.editor&&this.editor.destroy()}});p("data-v-7e0c288d");const M=j(" 上传 "),U=j(" 下载 "),E=j(" 处理 "),T={ref:"jsonEditor",class:"jsonEditor"},A=j("以下图层处理中遇到错误，可能配置有误，需要检查");m(),L.render=function(e,t,o,a,n,i){const r=u("UploadOutlined"),d=u("Button"),l=u("Upload"),s=u("DownloadOutlined"),c=u("ToolOutlined"),f=u("Group"),p=u("Paragraph"),m=u("Modal"),h=u("container");return b(),g(h,null,{default:y((()=>[x(f,null,{default:y((()=>[x(l,{showUploadList:!1,beforeUpload:i.upload,disabled:!e.inited||e.loading},{default:y((()=>[x(d,{type:"primary",disabled:!e.inited||e.loading},{default:y((()=>[x(r),M])),_:1},8,["disabled"])])),_:1},8,["beforeUpload","disabled"]),x(d,{type:"primary",onClick:i.download,disabled:!e.inited||e.loading},{default:y((()=>[x(s),U])),_:1},8,["onClick","disabled"]),x(d,{type:"primary",onClick:i.handler,loading:e.loading,disabled:!e.inited},{default:y((()=>[v(x(c,null,null,512),[[w,!e.loading]]),E])),_:1},8,["onClick","loading","disabled"])])),_:1}),k("div",T,null,512),x(m,{title:"错误提示",visible:e.showError,"onUpdate:visible":t[0]||(t[0]=t=>e.showError=t),onOk:t[1]||(t[1]=t=>e.showError=!1)},{default:y((()=>[x(p,null,{default:y((()=>[A])),_:1}),x(p,null,{default:y((()=>[k("pre",null,C(e.errorLayer.join("\n")),1)])),_:1})])),_:1},8,["visible"])])),_:1})},L.__scopeId="data-v-7e0c288d"}}}))}();