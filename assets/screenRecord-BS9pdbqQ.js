import{k as _e,R as f,n as H,E as b,q as C,x as a,r as u,F as d,ai as L,an as P,H as w,K as o,G as x,w as n,N as y,L as ge,Y as g,X as T,Z as D,aA as Q,a0 as ke}from"./index-bx-t8jyU.js";import{E as Re,a as Se}from"./el-form-item-DsfNvFcV.js";/* empty css               */import{a as we,E as he}from"./el-select-DAHoVo8M.js";import"./el-popper-D14-QpSy.js";import{E as Ee}from"./el-alert-BRJ_m1UK.js";import{T as Ve,P as Ce}from"./Router-D_9zQWnH.js";import"./castArray-_6gdgg0Z.js";import"./index-B3JSG2Tp.js";import"./strings-DMofn3aw.js";import"./_baseIteratee-CZmDkc-S.js";import"./index-SLKfeuEO.js";import"./index-DzLyO20E.js";import"./isUndefined-DCTLXrZ8.js";const Te={key:0,class:"wrapper"},De={class:"video-wrapper"},Ue={class:"previewVideo"},Ae=["src"],Oe={class:"operations"},Me={class:"settings-wrapper"},ee="unshare",Ne="unstart",M="recording",F="paused",le="stopped",Ie=_e({__name:"screenRecord",setup(Be){const E=f(),V=f();let m=null,r=null;const s=f(ee);let j=[];const k=f(""),K=f(!1),W=[{label:"否",value:"never"},{label:"是",value:"always"}],R=f("never"),Y=[{label:"否",value:"never"},{label:"是",value:"always"}],S=f("never"),q=[{label:"默认",value:"default"},{label:"16:9",value:1.77},{label:"4:3",value:1.33},{label:"21:9",value:2.35},{label:"14:10",value:1.4},{label:"19:10",value:1.9}],U=f("default"),ae=[{label:"默认",value:"default"},{label:"60",value:60},{label:"30",value:30},{label:"25",value:25},{label:"15",value:15},{label:"5",value:5}],A=f("default"),te=[{label:"默认",value:"default"},{label:"屏幕尺寸",value:"fit-screen"},{label:"4K",value:"4k"},{label:"1080p",value:"1080p"},{label:"720p",value:"720p"}],N=f("default"),G=[{label:"默认",value:"default"},{label:"总是显示",value:"always"},{label:"移动时显示",value:"motion"},{label:"从不显示",value:"never"}],O=f("default"),I=navigator&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{},oe=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia),ne=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),ue=oe&&ne,X=H(()=>{switch(s.value){case M:return"REC";case F:return"PAUSE";default:return!1}}),re=H(()=>{const t={};switch(typeof U.value=="number"&&(t.aspectRatio=U.value),typeof A.value=="number"&&(t.frameRate=A.value),O.value!=="default"&&(t.cursor=O.value),N.value){case"fit-screen":t.width=screen.width,t.height=screen.height;break;case"4K":t.width=3840,t.height=2160;break;case"1080p":t.width=1920,t.height=1080;break;case"720p":t.width=1280,t.height=720;break}return{video:t,audio:R.value==="always"}}),h=H(()=>{var t,e;if(m){const c=m.getVideoTracks();if(c.length>0){const _=c[0].getSettings(),v={recordAudio:(t=W.find(i=>R.value===i.value))==null?void 0:t.label,recordMicro:(e=Y.find(i=>S.value===i.value))==null?void 0:e.label,frameRate:_.frameRate,width:_.width,height:_.height,aspectRatio:"默认",cursor:""};if(_.aspectRatio){const i=_.aspectRatio,p=q.find(B=>typeof B.value=="number"?i-B.value<=.1:!1);p?v.aspectRatio=p.label:v.aspectRatio="默认"}if(_.cursor){const i=G.find(p=>_.cursor===p.value);i?v.cursor=i.label:v.cursor="默认"}return{video:v}}}return{video:{},audio:{}}});async function se(){try{if(m=await navigator.mediaDevices.getDisplayMedia(re.value),S.value==="always"){const e=await navigator.mediaDevices.getUserMedia({audio:!0});m.addTrack(e.getAudioTracks()[0])}const t=m.getVideoTracks()[0];t&&(t.onended=z,t.onmute=z),r=new MediaRecorder(m),r.onstop=pe,r.ondataavailable=fe,E.value&&(E.value.srcObject=m,E.value.muted=!0),s.value="unstart"}catch(t){Q.error(t.message)}}function ie(){$(),r==null||r.start(),s.value=M}function de(){r==null||r.pause(),s.value=F}function ve(){r==null||r.resume(),s.value=M}function Z(){r&&r.state!=="inactive"&&r.stop(),s.value=le}function $(){k.value=""}function ce(){if(k.value){const t=document.createElement("a");t.href=k.value,t.download="screen-record.mp4",t.click()}}function z(){if(Z(),m)m.getTracks().forEach(e=>{e.stop()});else return;Q.info("屏幕分享结束"),m=null,E.value&&(E.value.srcObject=null),s.value="unshare"}function pe(){const t=new Blob(j,{type:"video/mp4"});k.value=URL.createObjectURL(t),j=[];const e=window.setInterval(async()=>{V.value&&V.value.readyState>0&&(V.value.duration===Number.POSITIVE_INFINITY?V.value.currentTime=1e7*Math.random():(window.clearInterval(e),V.value.currentTime=0))},200)}function fe(t){j.push(t.data)}function me(){R.value&&S.value&&(S.value="never")}function be(){R.value&&S.value&&(R.value="never")}return(t,e)=>{const c=ge,_=Ee,v=he,i=we,p=Re,B=Se,J=Ve,ye=Ce;return a(ue)?(u(),b("div",Te,[d("div",De,[d("div",Ue,[L(d("video",{ref_key:"screenShareVideoElement",ref:E,autoplay:""},null,512),[[P,!a(k)]]),L(d("video",{ref_key:"recordVideoElement",ref:V,controls:"",src:a(k)},null,8,Ae),[[P,a(k)]]),L(d("span",{class:"rec"},w(a(X)),513),[[P,a(X)]])]),d("div",Oe,[o(c,{type:"primary",onClick:e[0]||(e[0]=l=>K.value=!a(K))},{default:n(()=>e[7]||(e[7]=[y(" 设置 ")])),_:1}),a(s)===ee?(u(),C(c,{key:0,type:"primary",onClick:se},{default:n(()=>e[8]||(e[8]=[y(" 开启屏幕共享 ")])),_:1})):(u(),b(g,{key:1},[o(c,{type:"primary",disabled:a(s)===M||a(s)===F,onClick:ie},{default:n(()=>e[9]||(e[9]=[y(" 开始录制 ")])),_:1},8,["disabled"]),o(c,{type:"primary",disabled:a(s)!==M,onClick:de},{default:n(()=>e[10]||(e[10]=[y(" 暂停 ")])),_:1},8,["disabled"]),o(c,{type:"primary",disabled:a(s)!==F,onClick:ve},{default:n(()=>e[11]||(e[11]=[y(" 继续 ")])),_:1},8,["disabled"]),o(c,{type:"primary",disabled:a(s)===Ne||a(s)===le,onClick:Z},{default:n(()=>e[12]||(e[12]=[y(" 停止 ")])),_:1},8,["disabled"])],64)),a(k)?(u(),b(g,{key:2},[o(c,{type:"primary",onClick:$},{default:n(()=>e[13]||(e[13]=[y(" 清除 ")])),_:1}),o(c,{type:"primary",onClick:ce},{default:n(()=>e[14]||(e[14]=[y(" 下载 ")])),_:1})],64)):x("",!0)])]),L(d("div",Me,[o(_,{title:"由于浏览器限制，部分设置可能无法生效",type:"warning","show-icon":"",style:{"margin-bottom":".8rem"}}),a(s)==="unshare"?(u(),C(B,{key:0,"label-position":"top"},{default:n(()=>[o(p,{label:"系统音频"},{default:n(()=>[o(i,{modelValue:a(R),"onUpdate:modelValue":e[1]||(e[1]=l=>T(R)?R.value=l:null),onChange:me},{default:n(()=>[(u(),b(g,null,D(W,l=>o(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"麦克风"},{default:n(()=>[o(i,{modelValue:a(S),"onUpdate:modelValue":e[2]||(e[2]=l=>T(S)?S.value=l:null),onChange:be},{default:n(()=>[(u(),b(g,null,D(Y,l=>o(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(I).aspectRatio?(u(),C(p,{key:0,label:"选择长宽比"},{default:n(()=>[o(i,{modelValue:a(U),"onUpdate:modelValue":e[3]||(e[3]=l=>T(U)?U.value=l:null)},{default:n(()=>[(u(),b(g,null,D(q,l=>o(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):x("",!0),a(I).frameRate?(u(),C(p,{key:1,label:"选择帧率"},{default:n(()=>[o(i,{modelValue:a(A),"onUpdate:modelValue":e[4]||(e[4]=l=>T(A)?A.value=l:null)},{default:n(()=>[(u(),b(g,null,D(ae,l=>o(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):x("",!0),a(I).width&&a(I).height?(u(),C(p,{key:2,label:"选择分辨率"},{default:n(()=>[o(i,{modelValue:a(N),"onUpdate:modelValue":e[5]||(e[5]=l=>T(N)?N.value=l:null)},{default:n(()=>[(u(),b(g,null,D(te,l=>o(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})):x("",!0),o(p,{label:"是否显示光标"},{default:n(()=>[o(i,{modelValue:a(O),"onUpdate:modelValue":e[6]||(e[6]=l=>T(O)?O.value=l:null),options:G},{default:n(()=>[(u(),b(g,null,D(G,l=>o(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})):(u(),b(g,{key:1},[o(J,{level:4},{default:n(()=>e[15]||(e[15]=[y(" 当前设置 ")])),_:1}),o(ye,null,{default:n(()=>[d("ul",null,[d("li",null,"系统音频: "+w(a(h).video.recordAudio),1),d("li",null,"麦克风: "+w(a(h).video.recordMicro),1),d("li",null,"长宽比: "+w(a(h).video.aspectRatio),1),d("li",null,"帧率: "+w(a(h).video.frameRate),1),d("li",null,"视频宽度: "+w(a(h).video.width),1),d("li",null,"视频高度: "+w(a(h).video.height),1),d("li",null,"显示鼠标: "+w(a(h).video.cursor),1)])]),_:1})],64))],512),[[P,a(K)]])])):(u(),C(J,{key:1,level:3},{default:n(()=>e[16]||(e[16]=[y(" 你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。 ")])),_:1}))}}}),ze=ke(Ie,[["__scopeId","data-v-d97d9c37"]]);export{ze as default};
