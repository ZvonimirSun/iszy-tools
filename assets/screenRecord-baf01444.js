import"./index-be0fce22.js";import{g as we,cz as Ce,d4 as re,h as Q,as as Ee,j as Te,y as m,k as B,o as n,c as R,w as o,T as j,m as c,p as D,n as e,ag as ae,q as Ve,s as T,l as p,r as te,b as _,t as k,H as S,a as s,U as z,aU as De,v as Ae,d5 as Ue,x as Me,z as M,I as O,A as oe,E as Oe,_ as Be}from"./index.js";import{a as Ie,E as Ne}from"./el-form-item-9f3cdc7d.js";import"./el-tag-fc83d0f3.js";import{E as Le,a as $e}from"./el-select-4918ccb1.js";import"./el-scrollbar-e88d9e52.js";import"./el-popper-38a4e9d7.js";import{_ as Pe}from"./Title-2da8800e.js";import{_ as je}from"./Paragraph-76984cb8.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-16073b58.js";import"./castArray-88ad293b.js";import"./index-dbd7f777.js";import"./strings-c6a8f271.js";const ze=["light","dark"],Fe=we({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:Ce(re),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:ze,default:"light"}}),He={close:F=>F instanceof MouseEvent},Ke=Q({name:"ElAlert"}),We=Q({...Ke,props:Fe,emits:He,setup(F,{emit:A}){const w=F,{Close:v}=Ue,i=Ee(),t=Te("alert"),U=m(!0),b=B(()=>re[w.type]),I=B(()=>[t.e("icon"),{[t.is("big")]:!!w.description||!!i.default}]),H=B(()=>({[t.is("bold")]:w.description||i.default})),y=u=>{U.value=!1,A("close",u)};return(u,C)=>(n(),R(De,{name:e(t).b("fade"),persisted:""},{default:o(()=>[j(c("div",{class:D([e(t).b(),e(t).m(u.type),e(t).is("center",u.center),e(t).is(u.effect)]),role:"alert"},[u.showIcon&&e(b)?(n(),R(e(ae),{key:0,class:D(e(I))},{default:o(()=>[(n(),R(Ve(e(b))))]),_:1},8,["class"])):T("v-if",!0),c("div",{class:D(e(t).e("content"))},[u.title||u.$slots.title?(n(),p("span",{key:0,class:D([e(t).e("title"),e(H)])},[te(u.$slots,"title",{},()=>[_(k(u.title),1)])],2)):T("v-if",!0),u.$slots.default||u.description?(n(),p("p",{key:1,class:D(e(t).e("description"))},[te(u.$slots,"default",{},()=>[_(k(u.description),1)])],2)):T("v-if",!0),u.closable?(n(),p(S,{key:2},[u.closeText?(n(),p("div",{key:0,class:D([e(t).e("close-btn"),e(t).is("customed")]),onClick:y},k(u.closeText),3)):(n(),R(e(ae),{key:1,class:D(e(t).e("close-btn")),onClick:y},{default:o(()=>[s(e(v))]),_:1},8,["class"]))],64)):T("v-if",!0)],2)],2),[[z,U.value]])]),_:3},8,["name"]))}});var qe=Ae(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const Ge=Me(qe);const Je={key:0,class:"wrapper"},Qe={class:"video-wrapper"},Xe={class:"previewVideo"},Ye=["src"],Ze={class:"operations"},xe={class:"settings-wrapper"},se="unshare",el="unstart",P="recording",G="paused",ne="stopped",ll=Q({__name:"screenRecord",setup(F){const A=m(),w=m();let v=null,i=null;const t=m(se);let U=[];const b=m(""),I=m(!1),H=[{label:"否",value:"never"},{label:"是",value:"always"}],y=m("never"),u=[{label:"否",value:"never"},{label:"是",value:"always"}],C=m("never"),X=[{label:"默认",value:"default"},{label:"16:9",value:1.77},{label:"4:3",value:1.33},{label:"21:9",value:2.35},{label:"14:10",value:1.4},{label:"19:10",value:1.9}],N=m("default"),ue=[{label:"默认",value:"default"},{label:"60",value:60},{label:"30",value:30},{label:"25",value:25},{label:"15",value:15},{label:"5",value:5}],L=m("default"),ie=[{label:"默认",value:"default"},{label:"屏幕尺寸",value:"fit-screen"},{label:"4K",value:"4k"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"}],K=m("default"),J=[{label:"默认",value:"default"},{label:"总是显示",value:"always"},{label:"移动时显示",value:"motion"},{label:"从不显示",value:"never"}],$=m("default"),W=(()=>navigator&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{})(),ce=(()=>!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia))(),de=(()=>!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia))(),pe=ce&&de,Y=B(()=>{switch(t.value){case P:return"REC";case G:return"PAUSE";default:return!1}}),ve=B(()=>{const a={};switch(typeof N.value=="number"&&(a.aspectRatio=N.value),typeof L.value=="number"&&(a.frameRate=L.value),$.value!=="default"&&(a.cursor=$.value),K.value){case"fit-screen":a.width=screen.width,a.height=screen.height;break;case"4K":a.width=3840,a.height=2160;break;case"1080p":a.width=1920,a.height=1080;break;case"720p":a.width=1280,a.height=720;break}return{video:a,audio:y.value==="always"}}),V=B(()=>{var a,r;if(v){const g=v.getVideoTracks();if(g.length>0){const E=g[0].getSettings(),f={recordAudio:(a=H.find(d=>y.value===d.value))==null?void 0:a.label,recordMicro:(r=u.find(d=>C.value===d.value))==null?void 0:r.label,frameRate:E.frameRate,width:E.width,height:E.height,aspectRatio:"默认",cursor:""};if(E.aspectRatio){const d=E.aspectRatio,h=X.find(q=>typeof q.value=="number"?d-q.value<=.1:!1);h?f.aspectRatio=h.label:f.aspectRatio="默认"}if(E.cursor){const d=J.find(h=>E.cursor===h.value);d?f.cursor=d.label:f.cursor="默认"}return{video:f}}}return{video:{},audio:{}}});async function fe(){try{if(v=await navigator.mediaDevices.getDisplayMedia(ve.value),C.value==="always"){const r=await navigator.mediaDevices.getUserMedia({audio:!0});v.addTrack(r.getAudioTracks()[0])}const a=v.getVideoTracks()[0];a&&(a.onended=ee,a.onmute=ee),i=new MediaRecorder(v),i.onstop=ge,i.ondataavailable=he,A.value.srcObject=v,A.value.muted=!0,t.value="unstart"}catch(a){oe.error(a.message)}}function me(){x(),i==null||i.start(),t.value=P}function _e(){i==null||i.pause(),t.value=G}function be(){i==null||i.resume(),t.value=P}function Z(){i&&i.state!=="inactive"&&i.stop(),t.value=ne}function x(){b.value=""}function ye(){if(b.value){const a=document.createElement("a");a.href=b.value,a.download="screen-record.mp4",a.click()}}function ee(){if(Z(),v)v.getTracks().forEach(r=>{r.stop()});else return;oe.info("屏幕分享结束"),v=null,A.value.srcObject=null,t.value="unshare"}function ge(){const a=new Blob(U,{type:"video/mp4"});b.value=URL.createObjectURL(a),U=[];const r=setInterval(async()=>{w.value.readyState>0&&(w.value.duration===1/0?w.value.currentTime=1e7*Math.random():(clearInterval(r),w.value.currentTime=0))},200)}function he(a){U.push(a.data)}function ke(){y.value&&C.value&&(C.value="never")}function Se(){y.value&&C.value&&(y.value="never")}return(a,r)=>{const g=Oe,E=Ge,f=Le,d=$e,h=Ie,q=Ne,le=Pe,Re=je;return e(pe)?(n(),p("div",Je,[c("div",Qe,[c("div",Xe,[j(c("video",{ref_key:"screenShareVideoElement",ref:A,autoplay:""},null,512),[[z,!e(b)]]),j(c("video",{ref_key:"recordVideoElement",ref:w,controls:"",src:e(b)},null,8,Ye),[[z,e(b)]]),j(c("span",{class:"rec"},k(e(Y)),513),[[z,e(Y)]])]),c("div",Ze,[s(g,{type:"primary",onClick:r[0]||(r[0]=l=>I.value=!e(I))},{default:o(()=>[_(" 设置 ")]),_:1}),e(t)===se?(n(),R(g,{key:0,type:"primary",onClick:fe},{default:o(()=>[_(" 开启屏幕共享 ")]),_:1})):(n(),p(S,{key:1},[s(g,{type:"primary",disabled:e(t)===P||e(t)===G,onClick:me},{default:o(()=>[_(" 开始录制 ")]),_:1},8,["disabled"]),s(g,{type:"primary",disabled:e(t)!==P,onClick:_e},{default:o(()=>[_(" 暂停 ")]),_:1},8,["disabled"]),s(g,{type:"primary",disabled:e(t)!==G,onClick:be},{default:o(()=>[_(" 继续 ")]),_:1},8,["disabled"]),s(g,{type:"primary",disabled:e(t)===el||e(t)===ne,onClick:Z},{default:o(()=>[_(" 停止 ")]),_:1},8,["disabled"])],64)),e(b)?(n(),p(S,{key:2},[s(g,{type:"primary",onClick:x},{default:o(()=>[_(" 清除 ")]),_:1}),s(g,{type:"primary",onClick:ye},{default:o(()=>[_(" 下载 ")]),_:1})],64)):T("",!0)])]),j(c("div",xe,[s(E,{title:"由于浏览器限制，部分设置可能无法生效",type:"warning","show-icon":"",style:{"margin-bottom":".8rem"}}),e(t)==="unshare"?(n(),R(q,{key:0,"label-position":"top"},{default:o(()=>[s(h,{label:"系统音频"},{default:o(()=>[s(d,{modelValue:e(y),"onUpdate:modelValue":r[1]||(r[1]=l=>M(y)?y.value=l:null),onChange:ke},{default:o(()=>[(n(),p(S,null,O(H,l=>s(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),s(h,{label:"麦克风"},{default:o(()=>[s(d,{modelValue:e(C),"onUpdate:modelValue":r[2]||(r[2]=l=>M(C)?C.value=l:null),onChange:Se},{default:o(()=>[(n(),p(S,null,O(u,l=>s(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(W).aspectRatio?(n(),R(h,{key:0,label:"选择长宽比"},{default:o(()=>[s(d,{modelValue:e(N),"onUpdate:modelValue":r[3]||(r[3]=l=>M(N)?N.value=l:null)},{default:o(()=>[(n(),p(S,null,O(X,l=>s(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):T("",!0),e(W).frameRate?(n(),R(h,{key:1,label:"选择帧率"},{default:o(()=>[s(d,{modelValue:e(L),"onUpdate:modelValue":r[4]||(r[4]=l=>M(L)?L.value=l:null)},{default:o(()=>[(n(),p(S,null,O(ue,l=>s(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):T("",!0),e(W).width&&e(W).height?(n(),R(h,{key:2,label:"选择分辨率"},{default:o(()=>[s(d,{modelValue:e(K),"onUpdate:modelValue":r[5]||(r[5]=l=>M(K)?K.value=l:null)},{default:o(()=>[(n(),p(S,null,O(ie,l=>s(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):T("",!0),s(h,{label:"是否显示光标"},{default:o(()=>[s(d,{modelValue:e($),"onUpdate:modelValue":r[6]||(r[6]=l=>M($)?$.value=l:null),options:J},{default:o(()=>[(n(),p(S,null,O(J,l=>s(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})):(n(),p(S,{key:1},[s(le,{level:4},{default:o(()=>[_(" 当前设置 ")]),_:1}),s(Re,null,{default:o(()=>[c("ul",null,[c("li",null,"系统音频: "+k(e(V).video.recordAudio),1),c("li",null,"麦克风: "+k(e(V).video.recordMicro),1),c("li",null,"长宽比: "+k(e(V).video.aspectRatio),1),c("li",null,"帧率: "+k(e(V).video.frameRate),1),c("li",null,"视频宽度: "+k(e(V).video.width),1),c("li",null,"视频高度: "+k(e(V).video.height),1),c("li",null,"显示鼠标: "+k(e(V).video.cursor),1)])]),_:1})],64))],512),[[z,e(I)]])])):(n(),R(le,{key:1,level:3},{default:o(()=>[_(" 你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。 ")]),_:1}))}}});const _l=Be(ll,[["__scopeId","data-v-fb2b1046"]]);export{_l as default};
