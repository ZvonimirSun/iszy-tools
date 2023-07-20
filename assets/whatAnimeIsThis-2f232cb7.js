import{h as F,y as l,R as T,aQ as S,A as C,o as i,l as Q,a as e,w as o,b as a,n as t,aK as H,m as N,t as E,H as _,s as b,I as x,E as P,B as L,J as q,K as Z,_ as G}from"./index-36befa60.js";import{E as X,a as W}from"./el-descriptions-item-826681f3.js";import{E as V}from"./el-image-viewer-0092083c.js";import{E as O}from"./el-divider-26d042ec.js";import"./index-d2029fc8.js";import{E as $}from"./el-upload-73f692ab.js";import"./el-progress-b1f44cd4.js";import{_ as ee}from"./Title-bdaa702d.js";import{_ as Ae}from"./Text-873da8ac.js";import{_ as oe}from"./Paragraph-a1d5d80f.js";import"./throttle-1d8fda18.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-5db5da5d.js";const ae=g=>(q("data-v-bd7af4e0"),g=g(),Z(),g),te={key:0},ne=ae(()=>N("span",{class:"i-icon-park-outline-loading"},null,-1)),se={key:1},le=["src","poster"],Ee=F({__name:"whatAnimeIsThis",setup(g){const u=l(""),y=l(void 0),J=l(""),v=l(""),p=l(0),m=l(0),B=l(!1),h=l([]);T(()=>{k()});function R(A){if(A.size/1024/1024>=10)return C.error("图片大小不能超过10MB!"),!1;const s=new FileReader;return s.onload=()=>{y.value=A,J.value=A.name,u.value=s.result},s.readAsDataURL(A),!1}async function U(){try{B.value=!0;const A=new FormData;A.append("image",y.value);const s=await S.post("https://api.trace.moe/search?anilistInfo",A,{headers:{"Content-Type":"multipart/form-data"}});B.value=!1,await k(),s.data.error||(h.value=s.data.result||[])}catch{B.value=!1,C.error("请求失败，请检查网络连接")}}async function k(){try{const A=await S.get("https://api.trace.moe/me");v.value=A.data.id||"",m.value=A.data.quotaUsed||0,p.value=A.data.quota||0}catch{C.error("请求失败，请检查网络连接")}}function K(A){const s=Math.floor(A/3600),c=Math.floor(A/60%60),I=(A%60).toFixed(2);return s+":"+c+":"+I}return(A,s)=>{const c=ee,I=P,w=L,D=$,r=Ae,Y=oe,f=O,M=V,d=X,j=W;return i(),Q(_,null,[e(c,{level:3},{default:o(()=>[a(" 请选择要识别动漫截图 ")]),_:1}),e(D,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":R},{default:o(()=>[e(w,{readonly:"",placeholder:"点击这里上传图片",value:t(J)},{append:o(()=>[e(I,{block:"",disabled:!t(u)||t(p)===0||t(p)-t(m)<=0,onClick:H(U,["stop"])},{default:o(()=>[t(B)?(i(),Q("span",te,[ne,a("识别中")])):(i(),Q("span",se,"开始识别"))]),_:1},8,["disabled","onClick"])]),_:1},8,["value"])]),_:1}),e(Y,null,{default:o(()=>[N("blockquote",null,[a(" 使用 trace.moe API，有使用次数限制。用户ID： "),e(r,{code:""},{default:o(()=>[a(E(t(v)),1)]),_:1}),a(" ，每月次数剩余： "),e(r,{code:""},{default:o(()=>[a(E(t(p)),1)]),_:1}),a(" ，已使用次数： "),e(r,{code:""},{default:o(()=>[a(E(t(m)),1)]),_:1})])]),_:1}),t(u)?(i(),Q(_,{key:0},[e(f),e(c,{level:3},{default:o(()=>[a(" 预览 ")]),_:1}),e(M,{style:{"max-width":"100%"},src:t(u),fallback:"data:image/png;base64,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"},null,8,["src"])],64)):b("",!0),t(h).length>0?(i(),Q(_,{key:1},[e(f),e(c,{level:3},{default:o(()=>[a(" 结果 ")]),_:1}),(i(!0),Q(_,null,x(t(h),(n,z)=>(i(),Q("div",{key:z},[e(f),e(j,{title:n.anilist.title.native+(n.episode?" EP#"+n.episode:""),bordered:"",size:"small",layout:"vertical"},{default:o(()=>[e(d,{label:"罗马音"},{default:o(()=>[a(E(n.anilist.title.romaji),1)]),_:2},1024),e(d,{label:"文件名"},{default:o(()=>[a(E(n.filename),1)]),_:2},1024),e(d,{label:"相似度"},{default:o(()=>[a(E((n.similarity*100).toFixed(2)+"%"),1)]),_:2},1024),e(d,{label:"匹配位置"},{default:o(()=>[e(r,{code:""},{default:o(()=>[a(E(K(n.from)),1)]),_:2},1024),a(" ~ "),e(r,{code:""},{default:o(()=>[a(E(K(n.to)),1)]),_:2},1024)]),_:2},1024),e(d,{label:"预览",span:3},{default:o(()=>[N("video",{controls:"",style:{"max-width":"100%"},src:n.video,poster:n.image},null,8,le)]),_:2},1024)]),_:2},1032,["title"])]))),128))],64)):b("",!0)],64)}}});const fe=G(Ee,[["__scopeId","data-v-bd7af4e0"]]);export{fe as default};
