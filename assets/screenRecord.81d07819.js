import{aj as e,a0 as a,ad as t,_ as n,aa as r,aS as i,a as o,o as s,c as l,w as d,T as c,f as u,b as p,e as h,J as b,ag as f,P as m,O as v,U as g,g as S}from"./vendor.47dbce92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{C as y}from"./vue-codemirror.694f8e0e.js";import{_ as w}from"./index.4e0857d2.js";var k="/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-alert {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 8px 15px;\n  word-wrap: break-word;\n  border-radius: 2px;\n}\n.ant-alert-content {\n  flex: 1;\n  min-width: 0;\n}\n.ant-alert-icon {\n  margin-right: 8px;\n}\n.ant-alert-description {\n  display: none;\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-alert-success {\n  background-color: #f6ffed;\n  border: 1px solid #b7eb8f;\n}\n.ant-alert-success .ant-alert-icon {\n  color: #52c41a;\n}\n.ant-alert-info {\n  background-color: #e6f7ff;\n  border: 1px solid #91d5ff;\n}\n.ant-alert-info .ant-alert-icon {\n  color: #1890ff;\n}\n.ant-alert-warning {\n  background-color: #fffbe6;\n  border: 1px solid #ffe58f;\n}\n.ant-alert-warning .ant-alert-icon {\n  color: #faad14;\n}\n.ant-alert-error {\n  background-color: #fff2f0;\n  border: 1px solid #ffccc7;\n}\n.ant-alert-error .ant-alert-icon {\n  color: #ff4d4f;\n}\n.ant-alert-close-icon {\n  margin-left: 8px;\n  padding: 0;\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 12px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.ant-alert-close-icon .anticon-close {\n  color: rgba(0, 0, 0, 0.45);\n  transition: color 0.3s;\n}\n.ant-alert-close-icon .anticon-close:hover {\n  color: rgba(0, 0, 0, 0.75);\n}\n.ant-alert-close-text {\n  color: rgba(0, 0, 0, 0.45);\n  transition: color 0.3s;\n}\n.ant-alert-close-text:hover {\n  color: rgba(0, 0, 0, 0.75);\n}\n.ant-alert-with-description {\n  align-items: flex-start;\n  padding: 15px 15px;\n}\n.ant-alert-with-description.ant-alert-no-icon {\n  padding: 15px 15px;\n}\n.ant-alert-with-description .ant-alert-icon {\n  margin-right: 15px;\n  font-size: 24px;\n}\n.ant-alert-with-description .ant-alert-message {\n  display: block;\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n}\n.ant-alert-message {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-alert-with-description .ant-alert-description {\n  display: block;\n}\n.ant-alert.ant-alert-closing {\n  height: 0 !important;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  transform-origin: 50% 0;\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-alert-slide-up-leave {\n  animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  animation-fill-mode: both;\n}\n.ant-alert-banner {\n  margin-bottom: 0;\n  border: 0;\n  border-radius: 0;\n}\n@keyframes antAlertSlideUpIn {\n  0% {\n    transform: scaleY(0);\n    transform-origin: 0% 0%;\n    opacity: 0;\n  }\n  100% {\n    transform: scaleY(1);\n    transform-origin: 0% 0%;\n    opacity: 1;\n  }\n}\n@keyframes antAlertSlideUpOut {\n  0% {\n    transform: scaleY(1);\n    transform-origin: 0% 0%;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleY(0);\n    transform-origin: 0% 0%;\n    opacity: 0;\n  }\n}\n",x=".previewVideo[data-v-2ffbb492] {\n  background: #dedede;\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n  max-width: 120rem;\n  position: relative;\n}\n.previewVideo video[data-v-2ffbb492] {\n  width: 100%;\n}\n.previewVideo .rec[data-v-2ffbb492] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  height: 2.2rem;\n  width: 4.4rem;\n  background: red;\n  color: #fff;\n  text-align: center;\n}\n.operations[data-v-2ffbb492] {\n  width: 100%;\n  margin-top: 0.8rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}";const{Title:R,Paragraph:C}=c,{Item:M}=n,_="unstart",A="recording",D="paused",O="stopped",U={name:"screenRecord",components:{Container:y,Title:R,Paragraph:C,Space:e,Button:a,Divider:t,Form:n,FormItem:M,Select:r,Alert:i},data:()=>({recorder:null,screenShareVideoElement:null,localScreenShareStream:null,disabled:{open:!1,start:!0,pause:!0,resume:!0,stop:!0,download:!0},status:"unstart",chunks:[],blobUrl:"",recordAudio:"never",recordAudioOptions:[{label:"否",value:"never"},{label:"是",value:"always"}],recordMicro:"never",recordMicroOptions:[{label:"否",value:"never"},{label:"是",value:"always"}],aspectRatio:"default",aspectRatioList:[{label:"默认",value:"default"},{label:"16:9",value:1.77},{label:"4:3",value:1.33},{label:"21:9",value:2.35},{label:"14:10",value:1.4},{label:"19:10",value:1.9}],frameRate:"default",frameRateList:[{label:"默认",value:"default"},{label:"60",value:60},{label:"30",value:30},{label:"25",value:25},{label:"15",value:15},{label:"5",value:5}],resolutions:"default",resolutionsList:[{label:"默认",value:"default"},{label:"屏幕尺寸",value:"fit-screen"},{label:"4K",value:"4k"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"}],cursor:"default",cursorList:[{label:"默认",value:"default"},{label:"总是显示",value:"always"},{label:"移动时显示",value:"motion"},{label:"从不显示",value:"never"}]}),computed:{supportedConstraints:()=>navigator&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{},isScreenShareSupported:()=>Boolean(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia),isWebRTCSupported:()=>Boolean(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),isSupported(){return this.isScreenShareSupported&&this.isWebRTCSupported},showREC(){return"recording"===this.status},displayMediaOptions(){const e={};return"default"!==this.aspectRatio&&(e.aspectRatio=this.aspectRatio),"default"!==this.frameRate&&(e.frameRate=this.frameRate),"default"!==this.cursor&&(e.cursor=this.cursor),"default"!==this.resolutions&&("fit-screen"===this.resolutions&&(e.width=screen.width,e.height=screen.height),"4K"===this.resolutions&&(e.width=3840,e.height=2160),"1080p"===this.resolutions&&(e.width=1920,e.height=1080),"720p"===this.resolutions&&(e.width=1280,e.height=720)),{video:e,audio:"always"===this.recordAudio}},currentDisplayMediaOptions(){if(this.localScreenShareStream){const e=this.localScreenShareStream.getVideoTracks();if(e.length>0){const a=e[0].getSettings(),t={recordAudio:this.recordAudioOptions.find((e=>this.recordAudio===e.value)).label,recordMicro:this.recordMicroOptions.find((e=>this.recordMicro===e.value)).label,frameRate:a.frameRate,width:a.width,height:a.height};if(a.aspectRatio){const e=this.aspectRatioList.find((e=>a.aspectRatio-e.value<=.1));t.aspectRatio=e?e.label:"默认"}if(a.cursor){const e=this.cursorList.find((e=>a.cursor===e.value));t.cursor=e?e.label:"默认"}return{video:t}}}return{video:{},audio:{}}}},mounted(){this.screenShareVideoElement=this.$refs.screenShare},methods:{async openScreenShare(){try{if(this.localScreenShareStream=await navigator.mediaDevices.getDisplayMedia(this.displayMediaOptions),"always"===this.recordMicro){const e=await navigator.mediaDevices.getUserMedia({audio:!0});this.localScreenShareStream.addTrack(e.getAudioTracks()[0])}const e=this.localScreenShareStream.getVideoTracks()[0];e&&(e.onended=this.onScreenShareEnded,e.onmute=this.onScreenShareEnded),this.recorder=new MediaRecorder(this.localScreenShareStream),this.recorder.onstop=this.onRecordStopped,this.recorder.ondataavailable=this.onDataAvailable,this.screenShareVideoElement.srcObject=this.localScreenShareStream,this.screenShareVideoElement.muted=!0,this.disabled.open=!0,this.disabled.start=!1}catch(e){this.$msg.error(e.message)}},start(){this.recorder.start(),this.status="recording",this.disabled.start=!0,this.disabled.pause=!1,this.disabled.stop=!1},pause(){this.recorder.pause(),this.status="paused",this.disabled.pause=!0,this.disabled.resume=!1},resume(){this.recorder.resume(),this.status="recording",this.disabled.pause=!1,this.disabled.resume=!0},stop(){this.recorder&&"inactive"!==this.recorder.state&&this.recorder.stop(),this.status="stopped",this.disabled.start=!1,this.disabled.pause=!0,this.disabled.resume=!0,this.disabled.stop=!0},download(){if(this.blobUrl){const e=document.createElement("a");e.href=this.blobUrl,e.download="screen-record.mp4",e.click()}},onScreenShareEnded(){if(this.stop(),this.localScreenShareStream){this.localScreenShareStream.getTracks().forEach((e=>{e.stop()}));this.$msg.info("屏幕分享结束"),this.localScreenShareStream=null,this.screenShareVideoElement.srcObject=null,this.disabled.open=!1,this.disabled.start=!0}},onRecordStopped(){const e=new Blob(this.chunks,{type:"video/mp4"});this.blobUrl=URL.createObjectURL(e),this.disabled.download=!1,this.chunks=[]},onDataAvailable(e){this.chunks.push(e.data)},selectAudio(){this.recordAudio&&this.recordMicro&&(this.recordMicro="never")},selectMicro(){this.recordAudio&&this.recordMicro&&(this.recordAudio="never")}},beforeUnmount(){this.stop()}},j=S("实时预览"),E={class:"previewVideo"},L={autoplay:"",ref:"screenShare"},T={class:"rec"},V=S("开启屏幕共享"),z=S("开始录制"),B=S("暂停"),I=S("继续"),F=S("停止"),P=S("下载"),Y=S("结果"),W={class:"previewVideo"},$=["src"],K=S("设置"),J=S("当前设置"),q=S("你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。");function G(e,a,t,n,r,i){const c=o("Title"),S=o("Button"),y=o("Space"),w=o("Divider"),k=o("Alert"),x=o("Select"),R=o("FormItem"),C=o("Form"),M=o("Paragraph"),_=o("container");return s(),l(_,null,{default:d((()=>[i.isSupported?(s(),u(m,{key:0},[p(c,{level:3},{default:d((()=>[j])),_:1}),h("div",E,[h("video",L,null,512),b(h("span",T,"REC",512),[[f,i.showREC]])]),p(y,{size:8,class:"operations",align:"center"},{default:d((()=>[p(S,{onClick:i.openScreenShare,type:"primary",disabled:e.disabled.open},{default:d((()=>[V])),_:1},8,["onClick","disabled"]),p(S,{onClick:i.start,type:"primary",disabled:e.disabled.start},{default:d((()=>[z])),_:1},8,["onClick","disabled"]),p(S,{onClick:i.pause,type:"primary",disabled:e.disabled.pause},{default:d((()=>[B])),_:1},8,["onClick","disabled"]),p(S,{onClick:i.resume,type:"primary",disabled:e.disabled.resume},{default:d((()=>[I])),_:1},8,["onClick","disabled"]),p(S,{onClick:i.stop,type:"primary",disabled:e.disabled.stop},{default:d((()=>[F])),_:1},8,["onClick","disabled"]),p(S,{onClick:i.download,type:"primary",disabled:e.disabled.download},{default:d((()=>[P])),_:1},8,["onClick","disabled"])])),_:1}),e.blobUrl?(s(),u(m,{key:0},[p(w),p(c,{level:3},{default:d((()=>[Y])),_:1}),h("div",W,[h("video",{controls:"",src:e.blobUrl},null,8,$)])],64)):v("",!0),p(w),p(c,{level:3},{default:d((()=>[K])),_:1}),p(k,{message:"由于浏览器限制，部分设置可能无法生效",type:"warning","show-icon":"",closable:"",style:{"margin-bottom":".8rem"}}),e.disabled.open?(s(),u(m,{key:2},[p(c,{level:4},{default:d((()=>[J])),_:1}),p(M,null,{default:d((()=>[h("ul",null,[h("li",null,"系统音频: "+g(i.currentDisplayMediaOptions.video.recordAudio),1),h("li",null,"麦克风: "+g(i.currentDisplayMediaOptions.video.recordMicro),1),h("li",null,"长宽比: "+g(i.currentDisplayMediaOptions.video.aspectRatio),1),h("li",null,"帧率: "+g(i.currentDisplayMediaOptions.video.frameRate),1),h("li",null,"视频宽度: "+g(i.currentDisplayMediaOptions.video.width),1),h("li",null,"视频高度: "+g(i.currentDisplayMediaOptions.video.height),1),h("li",null,"显示鼠标: "+g(i.currentDisplayMediaOptions.video.cursor),1)])])),_:1})],64)):(s(),l(C,{key:1,labelCol:{sm:{span:5},md:{span:4},lg:{span:3},xxl:{span:2}}},{default:d((()=>[p(R,{label:"系统音频"},{default:d((()=>[p(x,{value:e.recordAudio,"onUpdate:value":a[0]||(a[0]=a=>e.recordAudio=a),options:e.recordAudioOptions,onChange:i.selectAudio},null,8,["value","options","onChange"])])),_:1}),p(R,{label:"麦克风"},{default:d((()=>[p(x,{value:e.recordMicro,"onUpdate:value":a[1]||(a[1]=a=>e.recordMicro=a),options:e.recordMicroOptions,onChange:i.selectMicro},null,8,["value","options","onChange"])])),_:1}),i.supportedConstraints.aspectRatio?(s(),l(R,{key:0,label:"选择长宽比"},{default:d((()=>[p(x,{value:e.aspectRatio,"onUpdate:value":a[2]||(a[2]=a=>e.aspectRatio=a),options:e.aspectRatioList},null,8,["value","options"])])),_:1})):v("",!0),i.supportedConstraints.frameRate?(s(),l(R,{key:1,label:"选择帧率"},{default:d((()=>[p(x,{value:e.frameRate,"onUpdate:value":a[3]||(a[3]=a=>e.frameRate=a),options:e.frameRateList},null,8,["value","options"])])),_:1})):v("",!0),i.supportedConstraints.width&&i.supportedConstraints.height?(s(),l(R,{key:2,label:"选择分辨率"},{default:d((()=>[p(x,{value:e.resolutions,"onUpdate:value":a[4]||(a[4]=a=>e.resolutions=a),options:e.resolutionsList},null,8,["value","options"])])),_:1})):v("",!0),p(R,{label:"是否显示光标"},{default:d((()=>[p(x,{value:e.cursor,"onUpdate:value":a[5]||(a[5]=a=>e.cursor=a),options:e.cursorList},null,8,["value","options"])])),_:1})])),_:1}))],64)):(s(),l(c,{key:1,level:3},{default:d((()=>[q])),_:1}))])),_:1})}var H=w(U,[["render",G],["__scopeId","data-v-2ffbb492"]]);export{H as default};
