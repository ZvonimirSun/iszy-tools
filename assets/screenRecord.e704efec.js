import{l as ee,t as ae,d as te,e as se,r as U,a8 as I,g as oe,h as g,a as t,bf as ie,H as re,y as le,bp as ne,a$ as G,b0 as J,p as z,bq as ce,P as C,C as de,cB as ue,i as pe,E as he,cC as ve,cD as me,cE as fe,cF as be,_ as _e,o as f,J as N,w as o,K as c,F as j,$ as L,c as O,L as ge,ci as Se,b as u,a0 as S,B as ye}from"./index.61200789.js";/* empty css              *//* empty css               */import{_ as Ce}from"./index.fa9edfb3.js";/* empty css               */import{_ as Re}from"./index.9a8f6590.js";import{_ as we}from"./index.329ebb3e.js";import{F as ke}from"./Form.6a117f54.js";import{_ as Oe}from"./FormItem.a5b7c418.js";import"./toArray.7af313c6.js";import"./Overflow.48f9985f.js";import"./isMobile.47354675.js";import"./useState.90de7f04.js";import"./DownOutlined.3d2c52cf.js";import"./SearchOutlined.9c8eab56.js";import"./useFlexGapSupport.f58d4104.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Col.8b6acf8e.js";import"./responsiveObserve.1611b292.js";import"./get.a40d87c6.js";import"./hasIn.297367f4.js";import"./toInteger.3db158e9.js";import"./toFinite.9dd3502f.js";import"./collapseMotion.45da9e8a.js";var De={success:de,info:ue,error:pe,warning:he},Me={success:ve,info:me,error:fe,warning:be},Ee=ae("success","info","warning","error"),Ae=function(){return{type:C.oneOf(Ee),closable:{type:Boolean,default:void 0},closeText:C.any,message:C.any,description:C.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:C.any,closeIcon:C.any,onClose:Function}},Te=te({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:Ae(),setup:function(a,d){var i=d.slots,y=d.emit,s=d.attrs,b=d.expose,p=se("alert",a),B=p.prefixCls,D=p.direction,_=U(!1),h=U(!1),v=U(),V=function(l){l.preventDefault();var m=v.value;m.style.height="".concat(m.offsetHeight,"px"),m.style.height="".concat(m.offsetHeight,"px"),_.value=!0,y("close",l)},M=function(){var l;_.value=!1,h.value=!0,(l=a.afterClose)===null||l===void 0||l.call(a)};b({animationEnd:M});var n=U({});return function(){var R,l,m=a.banner,K=a.closeIcon,W=K===void 0?(R=i.closeIcon)===null||R===void 0?void 0:R.call(i):K,F=a.closable,w=a.type,k=a.showIcon,P=I(i,a,"closeText"),E=I(i,a,"description"),x=I(i,a,"message"),A=I(i,a,"icon");k=m&&k===void 0?!0:k,w=m&&w===void 0?"warning":w||"info";var Q=(E?Me:De)[w]||null;P&&(F=!0);var r=B.value,X=oe(r,(l={},g(l,"".concat(r,"-").concat(w),!0),g(l,"".concat(r,"-closing"),_.value),g(l,"".concat(r,"-with-description"),!!E),g(l,"".concat(r,"-no-icon"),!k),g(l,"".concat(r,"-banner"),!!m),g(l,"".concat(r,"-closable"),F),g(l,"".concat(r,"-rtl"),D.value==="rtl"),l)),Y=F?t("button",{type:"button",onClick:V,class:"".concat(r,"-close-icon"),tabindex:0},[P?t("span",{class:"".concat(r,"-close-text")},[P]):W===void 0?t(ie,null,null):W]):null,Z=A&&(re(A)?le(A,{class:"".concat(r,"-icon")}):t("span",{class:"".concat(r,"-icon")},[A]))||t(Q,{class:"".concat(r,"-icon")},null),$=ne("".concat(r,"-motion"),{appear:!1,css:!0,onAfterLeave:M,onBeforeLeave:function(T){T.style.maxHeight="".concat(T.offsetHeight,"px")},onLeave:function(T){T.style.maxHeight="0px"}});return h.value?null:t(ce,$,{default:function(){return[G(t("div",z(z({role:"alert"},s),{},{style:[s.style,n.value],class:[s.class,X],"data-show":!_.value,ref:v}),[k?Z:null,t("div",{class:"".concat(r,"-content")},[x?t("div",{class:"".concat(r,"-message")},[x]):null,E?t("div",{class:"".concat(r,"-description")},[E]):null]),Y]),[[J,!_.value]])]}})}}});const Ue=ee(Te);const Ie="unstart",H="recording",Le="paused",Be="stopped",Ve={name:"ScreenRecord",data:()=>({recorder:null,screenShareVideoElement:null,localScreenShareStream:null,disabled:{open:!1,start:!0,pause:!0,resume:!0,stop:!0,download:!0},status:Ie,chunks:[],blobUrl:"",recordAudio:"never",recordAudioOptions:[{label:"\u5426",value:"never"},{label:"\u662F",value:"always"}],recordMicro:"never",recordMicroOptions:[{label:"\u5426",value:"never"},{label:"\u662F",value:"always"}],aspectRatio:"default",aspectRatioList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"16:9",value:1.77},{label:"4:3",value:1.33},{label:"21:9",value:2.35},{label:"14:10",value:1.4},{label:"19:10",value:1.9}],frameRate:"default",frameRateList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"60",value:60},{label:"30",value:30},{label:"25",value:25},{label:"15",value:15},{label:"5",value:5}],resolutions:"default",resolutionsList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u5C4F\u5E55\u5C3A\u5BF8",value:"fit-screen"},{label:"4K",value:"4k"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"}],cursor:"default",cursorList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u603B\u662F\u663E\u793A",value:"always"},{label:"\u79FB\u52A8\u65F6\u663E\u793A",value:"motion"},{label:"\u4ECE\u4E0D\u663E\u793A",value:"never"}]}),computed:{supportedConstraints(){return navigator&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{}},isScreenShareSupported(){return Boolean(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)},isWebRTCSupported(){return Boolean(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)},isSupported(){return this.isScreenShareSupported&&this.isWebRTCSupported},showREC(){return this.status===H},displayMediaOptions(){const e={};return this.aspectRatio!=="default"&&(e.aspectRatio=this.aspectRatio),this.frameRate!=="default"&&(e.frameRate=this.frameRate),this.cursor!=="default"&&(e.cursor=this.cursor),this.resolutions!=="default"&&(this.resolutions==="fit-screen"&&(e.width=screen.width,e.height=screen.height),this.resolutions==="4K"&&(e.width=3840,e.height=2160),this.resolutions==="1080p"&&(e.width=1920,e.height=1080),this.resolutions==="720p"&&(e.width=1280,e.height=720)),{video:e,audio:this.recordAudio==="always"}},currentDisplayMediaOptions(){if(this.localScreenShareStream){const e=this.localScreenShareStream.getVideoTracks();if(e.length>0){const a=e[0].getSettings(),d={recordAudio:this.recordAudioOptions.find(i=>this.recordAudio===i.value).label,recordMicro:this.recordMicroOptions.find(i=>this.recordMicro===i.value).label,frameRate:a.frameRate,width:a.width,height:a.height};if(a.aspectRatio){const i=this.aspectRatioList.find(y=>a.aspectRatio-y.value<=.1);i?d.aspectRatio=i.label:d.aspectRatio="\u9ED8\u8BA4"}if(a.cursor){const i=this.cursorList.find(y=>a.cursor===y.value);i?d.cursor=i.label:d.cursor="\u9ED8\u8BA4"}return{video:d}}}return{video:{},audio:{}}}},mounted(){this.screenShareVideoElement=this.$refs.screenShare},beforeUnmount(){this.stop()},methods:{async openScreenShare(){try{if(this.localScreenShareStream=await navigator.mediaDevices.getDisplayMedia(this.displayMediaOptions),this.recordMicro==="always"){const a=await navigator.mediaDevices.getUserMedia({audio:!0});this.localScreenShareStream.addTrack(a.getAudioTracks()[0])}const e=this.localScreenShareStream.getVideoTracks()[0];e&&(e.onended=this.onScreenShareEnded,e.onmute=this.onScreenShareEnded),this.recorder=new MediaRecorder(this.localScreenShareStream),this.recorder.onstop=this.onRecordStopped,this.recorder.ondataavailable=this.onDataAvailable,this.screenShareVideoElement.srcObject=this.localScreenShareStream,this.screenShareVideoElement.muted=!0,this.disabled.open=!0,this.disabled.start=!1}catch(e){this.$msg.error(e.message)}},start(){this.recorder.start(),this.status=H,this.disabled.start=!0,this.disabled.pause=!1,this.disabled.stop=!1},pause(){this.recorder.pause(),this.status=Le,this.disabled.pause=!0,this.disabled.resume=!1},resume(){this.recorder.resume(),this.status=H,this.disabled.pause=!1,this.disabled.resume=!0},stop(){this.recorder&&this.recorder.state!=="inactive"&&this.recorder.stop(),this.status=Be,this.disabled.start=!1,this.disabled.pause=!0,this.disabled.resume=!0,this.disabled.stop=!0},download(){if(this.blobUrl){const e=document.createElement("a");e.href=this.blobUrl,e.download="screen-record.mp4",e.click()}},onScreenShareEnded(){if(this.stop(),this.localScreenShareStream)this.localScreenShareStream.getTracks().forEach(a=>{a.stop()});else return;this.$msg.info("\u5C4F\u5E55\u5206\u4EAB\u7ED3\u675F"),this.localScreenShareStream=null,this.screenShareVideoElement.srcObject=null,this.disabled.open=!1,this.disabled.start=!0},onRecordStopped(){const e=new Blob(this.chunks,{type:"video/mp4"});this.blobUrl=URL.createObjectURL(e),this.disabled.download=!1,this.chunks=[]},onDataAvailable(e){this.chunks.push(e.data)},selectAudio(){this.recordAudio&&this.recordMicro&&(this.recordMicro="never")},selectMicro(){this.recordAudio&&this.recordMicro&&(this.recordAudio="never")}}},Fe={class:"previewVideo"},Pe={ref:"screenShare",autoplay:""},Ne={class:"rec"},je={class:"previewVideo"},He=["src"];function Ke(e,a,d,i,y,s){const b=ge,p=ye,B=we,D=Re,_=Ue,h=Ce,v=Oe,V=ke,M=Se;return s.isSupported?(f(),N(j,{key:0},[t(b,{level:3},{default:o(()=>[u(" \u5B9E\u65F6\u9884\u89C8 ")]),_:1}),c("div",Fe,[c("video",Pe,null,512),G(c("span",Ne,"REC",512),[[J,s.showREC]])]),t(B,{size:8,class:"operations",align:"center"},{default:o(()=>[t(p,{type:"primary",disabled:e.disabled.open,onClick:s.openScreenShare},{default:o(()=>[u(" \u5F00\u542F\u5C4F\u5E55\u5171\u4EAB ")]),_:1},8,["disabled","onClick"]),t(p,{type:"primary",disabled:e.disabled.start,onClick:s.start},{default:o(()=>[u(" \u5F00\u59CB\u5F55\u5236 ")]),_:1},8,["disabled","onClick"]),t(p,{type:"primary",disabled:e.disabled.pause,onClick:s.pause},{default:o(()=>[u(" \u6682\u505C ")]),_:1},8,["disabled","onClick"]),t(p,{type:"primary",disabled:e.disabled.resume,onClick:s.resume},{default:o(()=>[u(" \u7EE7\u7EED ")]),_:1},8,["disabled","onClick"]),t(p,{type:"primary",disabled:e.disabled.stop,onClick:s.stop},{default:o(()=>[u(" \u505C\u6B62 ")]),_:1},8,["disabled","onClick"]),t(p,{type:"primary",disabled:e.disabled.download,onClick:s.download},{default:o(()=>[u(" \u4E0B\u8F7D ")]),_:1},8,["disabled","onClick"])]),_:1}),e.blobUrl?(f(),N(j,{key:0},[t(D),t(b,{level:3},{default:o(()=>[u(" \u7ED3\u679C ")]),_:1}),c("div",je,[c("video",{controls:"",src:e.blobUrl},null,8,He)])],64)):L("",!0),t(D),t(b,{level:3},{default:o(()=>[u(" \u8BBE\u7F6E ")]),_:1}),t(_,{message:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u90E8\u5206\u8BBE\u7F6E\u53EF\u80FD\u65E0\u6CD5\u751F\u6548",type:"warning","show-icon":"",closable:"",style:{"margin-bottom":".8rem"}}),e.disabled.open?(f(),N(j,{key:2},[t(b,{level:4},{default:o(()=>[u(" \u5F53\u524D\u8BBE\u7F6E ")]),_:1}),t(M,null,{default:o(()=>[c("ul",null,[c("li",null,"\u7CFB\u7EDF\u97F3\u9891: "+S(s.currentDisplayMediaOptions.video.recordAudio),1),c("li",null,"\u9EA6\u514B\u98CE: "+S(s.currentDisplayMediaOptions.video.recordMicro),1),c("li",null,"\u957F\u5BBD\u6BD4: "+S(s.currentDisplayMediaOptions.video.aspectRatio),1),c("li",null,"\u5E27\u7387: "+S(s.currentDisplayMediaOptions.video.frameRate),1),c("li",null,"\u89C6\u9891\u5BBD\u5EA6: "+S(s.currentDisplayMediaOptions.video.width),1),c("li",null,"\u89C6\u9891\u9AD8\u5EA6: "+S(s.currentDisplayMediaOptions.video.height),1),c("li",null,"\u663E\u793A\u9F20\u6807: "+S(s.currentDisplayMediaOptions.video.cursor),1)])]),_:1})],64)):(f(),O(V,{key:1,"label-col":{sm:{span:5},md:{span:4},lg:{span:3},xxl:{span:2}}},{default:o(()=>[t(v,{label:"\u7CFB\u7EDF\u97F3\u9891"},{default:o(()=>[t(h,{value:e.recordAudio,"onUpdate:value":a[0]||(a[0]=n=>e.recordAudio=n),options:e.recordAudioOptions,onChange:s.selectAudio},null,8,["value","options","onChange"])]),_:1}),t(v,{label:"\u9EA6\u514B\u98CE"},{default:o(()=>[t(h,{value:e.recordMicro,"onUpdate:value":a[1]||(a[1]=n=>e.recordMicro=n),options:e.recordMicroOptions,onChange:s.selectMicro},null,8,["value","options","onChange"])]),_:1}),s.supportedConstraints.aspectRatio?(f(),O(v,{key:0,label:"\u9009\u62E9\u957F\u5BBD\u6BD4"},{default:o(()=>[t(h,{value:e.aspectRatio,"onUpdate:value":a[2]||(a[2]=n=>e.aspectRatio=n),options:e.aspectRatioList},null,8,["value","options"])]),_:1})):L("",!0),s.supportedConstraints.frameRate?(f(),O(v,{key:1,label:"\u9009\u62E9\u5E27\u7387"},{default:o(()=>[t(h,{value:e.frameRate,"onUpdate:value":a[3]||(a[3]=n=>e.frameRate=n),options:e.frameRateList},null,8,["value","options"])]),_:1})):L("",!0),s.supportedConstraints.width&&s.supportedConstraints.height?(f(),O(v,{key:2,label:"\u9009\u62E9\u5206\u8FA8\u7387"},{default:o(()=>[t(h,{value:e.resolutions,"onUpdate:value":a[4]||(a[4]=n=>e.resolutions=n),options:e.resolutionsList},null,8,["value","options"])]),_:1})):L("",!0),t(v,{label:"\u662F\u5426\u663E\u793A\u5149\u6807"},{default:o(()=>[t(h,{value:e.cursor,"onUpdate:value":a[5]||(a[5]=n=>e.cursor=n),options:e.cursorList},null,8,["value","options"])]),_:1})]),_:1}))],64)):(f(),O(b,{key:1,level:3},{default:o(()=>[u(" \u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebRTC\uFF0C\u8BF7\u5B89\u88C5\u6700\u65B0\u7248\u672CChrome\u540E\u91CD\u8BD5\u3002 ")]),_:1}))}const va=_e(Ve,[["render",Ke],["__scopeId","data-v-d889e691"]]);export{va as default};
