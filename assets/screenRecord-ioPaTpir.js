import"./index-_kLejrJI.js";import{D as ye,l as f,q as W,t as a,o as u,h as b,j as c,A as L,B as x,C as S,s as t,w as o,z as _,H as C,F as g,a4 as j,v as D,r as T,I as Z,E as ge,g as he}from"./index-6zGE5DCB.js";import{a as ke,E as Re}from"./el-form-item-NN1yQRXH.js";import"./el-tag-EY9nNPhk.js";import{E as Se,a as we}from"./el-select-uCNzHCk_.js";import"./el-scrollbar-vz8xv5bG.js";import"./el-popper-eQgDHU9l.js";import{E as Ee}from"./el-alert-NTlHAfUJ.js";import{_ as Ve}from"./Title-0mPfXoKw.js";import{_ as Ce}from"./Paragraph-JjA1hXAC.js";import"./isEqual-xESWA3Y_.js";import"./castArray-gABIQ50e.js";import"./index-NQ00la_Z.js";import"./hasIn-lgsnO1s2.js";import"./strings-2kcWSpwp.js";import"./toInteger--1QioUwv.js";import"./toFinite-tbsrRPt8.js";import"./isUndefined-IZwZ21d-.js";const De={key:0,class:"wrapper"},Te={class:"video-wrapper"},Ue={class:"previewVideo"},Ae=["src"],Oe={class:"operations"},Me={class:"settings-wrapper"},ee="unshare",Be="unstart",M="recording",F="paused",ae="stopped",Ne=ye({__name:"screenRecord",setup(Ie){const E=f(),V=f();let m=null,r=null;const s=f(ee);let P=[];const h=f(""),H=f(!1),q=[{label:"否",value:"never"},{label:"是",value:"always"}],k=f("never"),z=[{label:"否",value:"never"},{label:"是",value:"always"}],R=f("never"),G=[{label:"默认",value:"default"},{label:"16:9",value:1.77},{label:"4:3",value:1.33},{label:"21:9",value:2.35},{label:"14:10",value:1.4},{label:"19:10",value:1.9}],U=f("default"),le=[{label:"默认",value:"default"},{label:"60",value:60},{label:"30",value:30},{label:"25",value:25},{label:"15",value:15},{label:"5",value:5}],A=f("default"),te=[{label:"默认",value:"default"},{label:"屏幕尺寸",value:"fit-screen"},{label:"4K",value:"4k"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"}],B=f("default"),K=[{label:"默认",value:"default"},{label:"总是显示",value:"always"},{label:"移动时显示",value:"motion"},{label:"从不显示",value:"never"}],O=f("default"),N=navigator&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{},oe=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia),ne=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),ue=oe&&ne,$=W(()=>{switch(s.value){case M:return"REC";case F:return"PAUSE";default:return!1}}),re=W(()=>{const l={};switch(typeof U.value=="number"&&(l.aspectRatio=U.value),typeof A.value=="number"&&(l.frameRate=A.value),O.value!=="default"&&(l.cursor=O.value),B.value){case"fit-screen":l.width=screen.width,l.height=screen.height;break;case"4K":l.width=3840,l.height=2160;break;case"1080p":l.width=1920,l.height=1080;break;case"720p":l.width=1280,l.height=720;break}return{video:l,audio:k.value==="always"}}),w=W(()=>{var l,n;if(m){const v=m.getVideoTracks();if(v.length>0){const y=v[0].getSettings(),d={recordAudio:(l=q.find(i=>k.value===i.value))==null?void 0:l.label,recordMicro:(n=z.find(i=>R.value===i.value))==null?void 0:n.label,frameRate:y.frameRate,width:y.width,height:y.height,aspectRatio:"默认",cursor:""};if(y.aspectRatio){const i=y.aspectRatio,p=G.find(I=>typeof I.value=="number"?i-I.value<=.1:!1);p?d.aspectRatio=p.label:d.aspectRatio="默认"}if(y.cursor){const i=K.find(p=>y.cursor===p.value);i?d.cursor=i.label:d.cursor="默认"}return{video:d}}}return{video:{},audio:{}}});async function se(){try{if(m=await navigator.mediaDevices.getDisplayMedia(re.value),R.value==="always"){const n=await navigator.mediaDevices.getUserMedia({audio:!0});m.addTrack(n.getAudioTracks()[0])}const l=m.getVideoTracks()[0];l&&(l.onended=X,l.onmute=X),r=new MediaRecorder(m),r.onstop=pe,r.ondataavailable=fe,E.value&&(E.value.srcObject=m,E.value.muted=!0),s.value="unstart"}catch(l){Z.error(l.message)}}function ie(){Q(),r==null||r.start(),s.value=M}function ce(){r==null||r.pause(),s.value=F}function de(){r==null||r.resume(),s.value=M}function J(){r&&r.state!=="inactive"&&r.stop(),s.value=ae}function Q(){h.value=""}function ve(){if(h.value){const l=document.createElement("a");l.href=h.value,l.download="screen-record.mp4",l.click()}}function X(){if(J(),m)m.getTracks().forEach(n=>{n.stop()});else return;Z.info("屏幕分享结束"),m=null,E.value&&(E.value.srcObject=null),s.value="unshare"}function pe(){const l=new Blob(P,{type:"video/mp4"});h.value=URL.createObjectURL(l),P=[];const n=setInterval(async()=>{V.value&&V.value.readyState>0&&(V.value.duration===1/0?V.value.currentTime=1e7*Math.random():(clearInterval(n),V.value.currentTime=0))},200)}function fe(l){P.push(l.data)}function me(){k.value&&R.value&&(R.value="never")}function be(){k.value&&R.value&&(k.value="never")}return(l,n)=>{const v=ge,y=Ee,d=Se,i=we,p=ke,I=Re,Y=Ve,_e=Ce;return a(ue)?(u(),b("div",De,[c("div",Te,[c("div",Ue,[L(c("video",{ref_key:"screenShareVideoElement",ref:E,autoplay:""},null,512),[[x,!a(h)]]),L(c("video",{ref_key:"recordVideoElement",ref:V,controls:"",src:a(h)},null,8,Ae),[[x,a(h)]]),L(c("span",{class:"rec"},S(a($)),513),[[x,a($)]])]),c("div",Oe,[t(v,{type:"primary",onClick:n[0]||(n[0]=e=>H.value=!a(H))},{default:o(()=>[_(" 设置 ")]),_:1}),a(s)===ee?(u(),C(v,{key:0,type:"primary",onClick:se},{default:o(()=>[_(" 开启屏幕共享 ")]),_:1})):(u(),b(g,{key:1},[t(v,{type:"primary",disabled:a(s)===M||a(s)===F,onClick:ie},{default:o(()=>[_(" 开始录制 ")]),_:1},8,["disabled"]),t(v,{type:"primary",disabled:a(s)!==M,onClick:ce},{default:o(()=>[_(" 暂停 ")]),_:1},8,["disabled"]),t(v,{type:"primary",disabled:a(s)!==F,onClick:de},{default:o(()=>[_(" 继续 ")]),_:1},8,["disabled"]),t(v,{type:"primary",disabled:a(s)===Be||a(s)===ae,onClick:J},{default:o(()=>[_(" 停止 ")]),_:1},8,["disabled"])],64)),a(h)?(u(),b(g,{key:2},[t(v,{type:"primary",onClick:Q},{default:o(()=>[_(" 清除 ")]),_:1}),t(v,{type:"primary",onClick:ve},{default:o(()=>[_(" 下载 ")]),_:1})],64)):j("",!0)])]),L(c("div",Me,[t(y,{title:"由于浏览器限制，部分设置可能无法生效",type:"warning","show-icon":"",style:{"margin-bottom":".8rem"}}),a(s)==="unshare"?(u(),C(I,{key:0,"label-position":"top"},{default:o(()=>[t(p,{label:"系统音频"},{default:o(()=>[t(i,{modelValue:a(k),"onUpdate:modelValue":n[1]||(n[1]=e=>D(k)?k.value=e:null),onChange:me},{default:o(()=>[(u(),b(g,null,T(q,e=>t(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(p,{label:"麦克风"},{default:o(()=>[t(i,{modelValue:a(R),"onUpdate:modelValue":n[2]||(n[2]=e=>D(R)?R.value=e:null),onChange:be},{default:o(()=>[(u(),b(g,null,T(z,e=>t(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(N).aspectRatio?(u(),C(p,{key:0,label:"选择长宽比"},{default:o(()=>[t(i,{modelValue:a(U),"onUpdate:modelValue":n[3]||(n[3]=e=>D(U)?U.value=e:null)},{default:o(()=>[(u(),b(g,null,T(G,e=>t(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):j("",!0),a(N).frameRate?(u(),C(p,{key:1,label:"选择帧率"},{default:o(()=>[t(i,{modelValue:a(A),"onUpdate:modelValue":n[4]||(n[4]=e=>D(A)?A.value=e:null)},{default:o(()=>[(u(),b(g,null,T(le,e=>t(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):j("",!0),a(N).width&&a(N).height?(u(),C(p,{key:2,label:"选择分辨率"},{default:o(()=>[t(i,{modelValue:a(B),"onUpdate:modelValue":n[5]||(n[5]=e=>D(B)?B.value=e:null)},{default:o(()=>[(u(),b(g,null,T(te,e=>t(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):j("",!0),t(p,{label:"是否显示光标"},{default:o(()=>[t(i,{modelValue:a(O),"onUpdate:modelValue":n[6]||(n[6]=e=>D(O)?O.value=e:null),options:K},{default:o(()=>[(u(),b(g,null,T(K,e=>t(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})):(u(),b(g,{key:1},[t(Y,{level:4},{default:o(()=>[_(" 当前设置 ")]),_:1}),t(_e,null,{default:o(()=>[c("ul",null,[c("li",null,"系统音频: "+S(a(w).video.recordAudio),1),c("li",null,"麦克风: "+S(a(w).video.recordMicro),1),c("li",null,"长宽比: "+S(a(w).video.aspectRatio),1),c("li",null,"帧率: "+S(a(w).video.frameRate),1),c("li",null,"视频宽度: "+S(a(w).video.width),1),c("li",null,"视频高度: "+S(a(w).video.height),1),c("li",null,"显示鼠标: "+S(a(w).video.cursor),1)])]),_:1})],64))],512),[[x,a(H)]])])):(u(),C(Y,{key:1,level:3},{default:o(()=>[_(" 你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。 ")]),_:1}))}}}),aa=he(Ne,[["__scopeId","data-v-a0e79c68"]]);export{aa as default};