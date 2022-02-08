import{ag as O,a0 as T,ab as U,ad as k,av as E,aI as V,c as g,f as a,x as r,a as i,a8 as L,aB as j,E as R,H as _,u as f,T as B,r as n,o as u,g as c,G as l}from"./vendor.c45c2a3c.js";/* empty css                *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css               */import{_ as F}from"./index.29b6224a.js";const{Title:I,Paragraph:N}=B,{Item:P}=k,W="unstart",y="recording",G="paused",K="stopped",z={name:"screenRecord",components:{Title:I,Paragraph:N,Space:O,Button:T,Divider:U,Form:k,FormItem:P,Select:E,Alert:V},data:()=>({recorder:null,screenShareVideoElement:null,localScreenShareStream:null,disabled:{open:!1,start:!0,pause:!0,resume:!0,stop:!0,download:!0},status:W,chunks:[],blobUrl:"",recordAudio:"never",recordAudioOptions:[{label:"\u5426",value:"never"},{label:"\u662F",value:"always"}],recordMicro:"never",recordMicroOptions:[{label:"\u5426",value:"never"},{label:"\u662F",value:"always"}],aspectRatio:"default",aspectRatioList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"16:9",value:1.77},{label:"4:3",value:1.33},{label:"21:9",value:2.35},{label:"14:10",value:1.4},{label:"19:10",value:1.9}],frameRate:"default",frameRateList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"60",value:60},{label:"30",value:30},{label:"25",value:25},{label:"15",value:15},{label:"5",value:5}],resolutions:"default",resolutionsList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u5C4F\u5E55\u5C3A\u5BF8",value:"fit-screen"},{label:"4K",value:"4k"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"}],cursor:"default",cursorList:[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u603B\u662F\u663E\u793A",value:"always"},{label:"\u79FB\u52A8\u65F6\u663E\u793A",value:"motion"},{label:"\u4ECE\u4E0D\u663E\u793A",value:"never"}]}),computed:{supportedConstraints(){return navigator&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{}},isScreenShareSupported(){return Boolean(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)},isWebRTCSupported(){return Boolean(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)},isSupported(){return this.isScreenShareSupported&&this.isWebRTCSupported},showREC(){return this.status===y},displayMediaOptions(){const e={};return this.aspectRatio!=="default"&&(e.aspectRatio=this.aspectRatio),this.frameRate!=="default"&&(e.frameRate=this.frameRate),this.cursor!=="default"&&(e.cursor=this.cursor),this.resolutions!=="default"&&(this.resolutions==="fit-screen"&&(e.width=screen.width,e.height=screen.height),this.resolutions==="4K"&&(e.width=3840,e.height=2160),this.resolutions==="1080p"&&(e.width=1920,e.height=1080),this.resolutions==="720p"&&(e.width=1280,e.height=720)),{video:e,audio:this.recordAudio==="always"}},currentDisplayMediaOptions(){if(this.localScreenShareStream){const e=this.localScreenShareStream.getVideoTracks();if(e.length>0){const t=e[0].getSettings(),p={recordAudio:this.recordAudioOptions.find(d=>this.recordAudio===d.value).label,recordMicro:this.recordMicroOptions.find(d=>this.recordMicro===d.value).label,frameRate:t.frameRate,width:t.width,height:t.height};if(t.aspectRatio){const d=this.aspectRatioList.find(S=>t.aspectRatio-S.value<=.1);d?p.aspectRatio=d.label:p.aspectRatio="\u9ED8\u8BA4"}if(t.cursor){const d=this.cursorList.find(S=>t.cursor===S.value);d?p.cursor=d.label:p.cursor="\u9ED8\u8BA4"}return{video:p}}}return{video:{},audio:{}}}},mounted(){this.screenShareVideoElement=this.$refs.screenShare},methods:{async openScreenShare(){try{if(this.localScreenShareStream=await navigator.mediaDevices.getDisplayMedia(this.displayMediaOptions),this.recordMicro==="always"){const t=await navigator.mediaDevices.getUserMedia({audio:!0});this.localScreenShareStream.addTrack(t.getAudioTracks()[0])}const e=this.localScreenShareStream.getVideoTracks()[0];e&&(e.onended=this.onScreenShareEnded,e.onmute=this.onScreenShareEnded),this.recorder=new MediaRecorder(this.localScreenShareStream),this.recorder.onstop=this.onRecordStopped,this.recorder.ondataavailable=this.onDataAvailable,this.screenShareVideoElement.srcObject=this.localScreenShareStream,this.screenShareVideoElement.muted=!0,this.disabled.open=!0,this.disabled.start=!1}catch(e){this.$msg.error(e.message)}},start(){this.recorder.start(),this.status=y,this.disabled.start=!0,this.disabled.pause=!1,this.disabled.stop=!1},pause(){this.recorder.pause(),this.status=G,this.disabled.pause=!0,this.disabled.resume=!1},resume(){this.recorder.resume(),this.status=y,this.disabled.pause=!1,this.disabled.resume=!0},stop(){this.recorder&&this.recorder.state!=="inactive"&&this.recorder.stop(),this.status=K,this.disabled.start=!1,this.disabled.pause=!0,this.disabled.resume=!0,this.disabled.stop=!0},download(){if(this.blobUrl){const e=document.createElement("a");e.href=this.blobUrl,e.download="screen-record.mp4",e.click()}},onScreenShareEnded(){if(this.stop(),this.localScreenShareStream)this.localScreenShareStream.getTracks().forEach(t=>{t.stop()});else return;this.$msg.info("\u5C4F\u5E55\u5206\u4EAB\u7ED3\u675F"),this.localScreenShareStream=null,this.screenShareVideoElement.srcObject=null,this.disabled.open=!1,this.disabled.start=!0},onRecordStopped(){const e=new Blob(this.chunks,{type:"video/mp4"});this.blobUrl=URL.createObjectURL(e),this.disabled.download=!1,this.chunks=[]},onDataAvailable(e){this.chunks.push(e.data)},selectAudio(){this.recordAudio&&this.recordMicro&&(this.recordMicro="never")},selectMicro(){this.recordAudio&&this.recordMicro&&(this.recordAudio="never")}},beforeUnmount(){this.stop()}},H=l("\u5B9E\u65F6\u9884\u89C8"),q={class:"previewVideo"},J={autoplay:"",ref:"screenShare"},Q={class:"rec"},X=l("\u5F00\u542F\u5C4F\u5E55\u5171\u4EAB"),Y=l("\u5F00\u59CB\u5F55\u5236"),Z=l("\u6682\u505C"),x=l("\u7EE7\u7EED"),$=l("\u505C\u6B62"),ee=l("\u4E0B\u8F7D"),te=l("\u7ED3\u679C"),ae={class:"previewVideo"},se=["src"],re=l("\u8BBE\u7F6E"),ie=l("\u5F53\u524D\u8BBE\u7F6E"),oe=l("\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebRTC\uFF0C\u8BF7\u5B89\u88C5\u6700\u65B0\u7248\u672CChrome\u540E\u91CD\u8BD5\u3002");function le(e,t,p,d,S,s){const b=n("Title"),h=n("Button"),w=n("Space"),C=n("Divider"),D=n("Alert"),v=n("Select"),m=n("FormItem"),M=n("Form"),A=n("Paragraph");return s.isSupported?(u(),g(R,{key:0},[a(b,{level:3},{default:r(()=>[H]),_:1}),i("div",q,[i("video",J,null,512),L(i("span",Q,"REC",512),[[j,s.showREC]])]),a(w,{size:8,class:"operations",align:"center"},{default:r(()=>[a(h,{onClick:s.openScreenShare,type:"primary",disabled:e.disabled.open},{default:r(()=>[X]),_:1},8,["onClick","disabled"]),a(h,{onClick:s.start,type:"primary",disabled:e.disabled.start},{default:r(()=>[Y]),_:1},8,["onClick","disabled"]),a(h,{onClick:s.pause,type:"primary",disabled:e.disabled.pause},{default:r(()=>[Z]),_:1},8,["onClick","disabled"]),a(h,{onClick:s.resume,type:"primary",disabled:e.disabled.resume},{default:r(()=>[x]),_:1},8,["onClick","disabled"]),a(h,{onClick:s.stop,type:"primary",disabled:e.disabled.stop},{default:r(()=>[$]),_:1},8,["onClick","disabled"]),a(h,{onClick:s.download,type:"primary",disabled:e.disabled.download},{default:r(()=>[ee]),_:1},8,["onClick","disabled"])]),_:1}),e.blobUrl?(u(),g(R,{key:0},[a(C),a(b,{level:3},{default:r(()=>[te]),_:1}),i("div",ae,[i("video",{controls:"",src:e.blobUrl},null,8,se)])],64)):_("",!0),a(C),a(b,{level:3},{default:r(()=>[re]),_:1}),a(D,{message:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u90E8\u5206\u8BBE\u7F6E\u53EF\u80FD\u65E0\u6CD5\u751F\u6548",type:"warning","show-icon":"",closable:"",style:{"margin-bottom":".8rem"}}),e.disabled.open?(u(),g(R,{key:2},[a(b,{level:4},{default:r(()=>[ie]),_:1}),a(A,null,{default:r(()=>[i("ul",null,[i("li",null,"\u7CFB\u7EDF\u97F3\u9891: "+c(s.currentDisplayMediaOptions.video.recordAudio),1),i("li",null,"\u9EA6\u514B\u98CE: "+c(s.currentDisplayMediaOptions.video.recordMicro),1),i("li",null,"\u957F\u5BBD\u6BD4: "+c(s.currentDisplayMediaOptions.video.aspectRatio),1),i("li",null,"\u5E27\u7387: "+c(s.currentDisplayMediaOptions.video.frameRate),1),i("li",null,"\u89C6\u9891\u5BBD\u5EA6: "+c(s.currentDisplayMediaOptions.video.width),1),i("li",null,"\u89C6\u9891\u9AD8\u5EA6: "+c(s.currentDisplayMediaOptions.video.height),1),i("li",null,"\u663E\u793A\u9F20\u6807: "+c(s.currentDisplayMediaOptions.video.cursor),1)])]),_:1})],64)):(u(),f(M,{key:1,labelCol:{sm:{span:5},md:{span:4},lg:{span:3},xxl:{span:2}}},{default:r(()=>[a(m,{label:"\u7CFB\u7EDF\u97F3\u9891"},{default:r(()=>[a(v,{value:e.recordAudio,"onUpdate:value":t[0]||(t[0]=o=>e.recordAudio=o),options:e.recordAudioOptions,onChange:s.selectAudio},null,8,["value","options","onChange"])]),_:1}),a(m,{label:"\u9EA6\u514B\u98CE"},{default:r(()=>[a(v,{value:e.recordMicro,"onUpdate:value":t[1]||(t[1]=o=>e.recordMicro=o),options:e.recordMicroOptions,onChange:s.selectMicro},null,8,["value","options","onChange"])]),_:1}),s.supportedConstraints.aspectRatio?(u(),f(m,{key:0,label:"\u9009\u62E9\u957F\u5BBD\u6BD4"},{default:r(()=>[a(v,{value:e.aspectRatio,"onUpdate:value":t[2]||(t[2]=o=>e.aspectRatio=o),options:e.aspectRatioList},null,8,["value","options"])]),_:1})):_("",!0),s.supportedConstraints.frameRate?(u(),f(m,{key:1,label:"\u9009\u62E9\u5E27\u7387"},{default:r(()=>[a(v,{value:e.frameRate,"onUpdate:value":t[3]||(t[3]=o=>e.frameRate=o),options:e.frameRateList},null,8,["value","options"])]),_:1})):_("",!0),s.supportedConstraints.width&&s.supportedConstraints.height?(u(),f(m,{key:2,label:"\u9009\u62E9\u5206\u8FA8\u7387"},{default:r(()=>[a(v,{value:e.resolutions,"onUpdate:value":t[4]||(t[4]=o=>e.resolutions=o),options:e.resolutionsList},null,8,["value","options"])]),_:1})):_("",!0),a(m,{label:"\u662F\u5426\u663E\u793A\u5149\u6807"},{default:r(()=>[a(v,{value:e.cursor,"onUpdate:value":t[5]||(t[5]=o=>e.cursor=o),options:e.cursorList},null,8,["value","options"])]),_:1})]),_:1}))],64)):(u(),f(b,{key:1,level:3},{default:r(()=>[oe]),_:1}))}var be=F(z,[["render",le],["__scopeId","data-v-877b80e8"]]);export{be as default};
