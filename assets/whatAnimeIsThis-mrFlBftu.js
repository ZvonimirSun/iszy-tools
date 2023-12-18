import{j as F,B as l,l as H,a4 as b,aa as f,o as Q,c,b as A,ay as a,W as o,y as t,U as T,a as N,t as E,F as h,g as K,e as P,aA as x,az as L,a$ as q,b4 as Z,br as G,bl as X,bm as W,aG as V,aH as O,a3 as $}from"./vendor-Ru-BxWlB.js";import{c as AA,a as eA,_ as aA}from"./ant-design-vue-MAwBXcQi.js";import"./common-K04dNQ2-.js";import"./vanilla-jsoneditor-_koh3yF9.js";const oA=r=>(V("data-v-988b1803"),r=r(),O(),r),tA={key:0},nA=oA(()=>N("span",{class:"i-icon-park-outline-loading"},null,-1)),sA={key:1},lA=["src","poster"],EA=F({__name:"whatAnimeIsThis",setup(r){const u=l(""),J=l(void 0),y=l(""),k=l(""),B=l(0),I=l(0),p=l(!1),_=l([]);H(()=>{v()});function R(e){if(e.size/1024/1024>=10)return f.error("图片大小不能超过10MB!"),!1;const s=new FileReader;return s.onload=()=>{J.value=e,y.value=e.name,u.value=s.result},s.readAsDataURL(e),!1}async function U(){try{p.value=!0;const e=new FormData;e.append("image",J.value);const s=await b.post("https://api.trace.moe/search?anilistInfo",e,{headers:{"Content-Type":"multipart/form-data"}});p.value=!1,await v(),s.data.error||(_.value=s.data.result||[])}catch{p.value=!1,f.error("请求失败，请检查网络连接")}}async function v(){try{const e=await b.get("https://api.trace.moe/me");k.value=e.data.id||"",I.value=e.data.quotaUsed||0,B.value=e.data.quota||0}catch{f.error("请求失败，请检查网络连接")}}function S(e){const s=Math.floor(e/3600),i=Math.floor(e/60%60),m=(e%60).toFixed(2);return s+":"+i+":"+m}return(e,s)=>{const i=AA,m=x,w=L,D=q,d=eA,Y=aA,C=Z,j=G,g=X,z=W;return Q(),c(h,null,[A(i,{level:3},{default:a(()=>[o(" 请选择要识别动漫截图 ")]),_:1}),A(D,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":R},{default:a(()=>[A(w,{readonly:"",placeholder:"点击这里上传图片",value:t(y)},{append:a(()=>[A(m,{block:"",disabled:!t(u)||t(B)===0||t(B)-t(I)<=0,onClick:T(U,["stop"])},{default:a(()=>[t(p)?(Q(),c("span",tA,[nA,o("识别中")])):(Q(),c("span",sA,"开始识别"))]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),A(Y,null,{default:a(()=>[N("blockquote",null,[o(" 使用 trace.moe API，有使用次数限制。用户ID： "),A(d,{code:""},{default:a(()=>[o(E(t(k)),1)]),_:1}),o(" ，每月次数剩余： "),A(d,{code:""},{default:a(()=>[o(E(t(B)),1)]),_:1}),o(" ，已使用次数： "),A(d,{code:""},{default:a(()=>[o(E(t(I)),1)]),_:1})])]),_:1}),t(u)?(Q(),c(h,{key:0},[A(C),A(i,{level:3},{default:a(()=>[o(" 预览 ")]),_:1}),A(j,{style:{"max-width":"100%"},src:t(u),fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="},null,8,["src"])],64)):K("",!0),t(_).length>0?(Q(),c(h,{key:1},[A(C),A(i,{level:3},{default:a(()=>[o(" 结果 ")]),_:1}),(Q(!0),c(h,null,P(t(_),(n,M)=>(Q(),c("div",{key:M},[A(C),A(z,{title:n.anilist.title.native+(n.episode?" EP#"+n.episode:""),bordered:"",size:"small",layout:"vertical"},{default:a(()=>[A(g,{label:"罗马音"},{default:a(()=>[o(E(n.anilist.title.romaji),1)]),_:2},1024),A(g,{label:"文件名"},{default:a(()=>[o(E(n.filename),1)]),_:2},1024),A(g,{label:"相似度"},{default:a(()=>[o(E((n.similarity*100).toFixed(2)+"%"),1)]),_:2},1024),A(g,{label:"匹配位置"},{default:a(()=>[A(d,{code:""},{default:a(()=>[o(E(S(n.from)),1)]),_:2},1024),o(" ~ "),A(d,{code:""},{default:a(()=>[o(E(S(n.to)),1)]),_:2},1024)]),_:2},1024),A(g,{label:"预览",span:3},{default:a(()=>[N("video",{controls:"",style:{"max-width":"100%"},src:n.video,poster:n.image},null,8,lA)]),_:2},1024)]),_:2},1032,["title"])]))),128))],64)):K("",!0)],64)}}}),gA=$(EA,[["__scopeId","data-v-988b1803"]]);export{gA as default};
