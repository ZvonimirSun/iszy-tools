var q=Object.defineProperty;var z=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>(z(e,typeof t!="symbol"?t+"":t,s),s);import{r as S,v as F,n as U,d as W,z as M,L as P,C as G,B as Q,R as Z,M as Y,a as d,o as b,c as J,w as _,b as m,e as I,f as D,T as K,g as w,p as X,h as ee,i as te,j as C,k as se,l as x,m as ne,q as L,s as O,t as ie,u as oe,x as re,y as ae,A as ce,D as A}from"./vendor.af973e49.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};le();const me={events:new Map,on(e,t){e&&typeof t=="function"&&(this.events.get(e)?this.events.get(e).push(t):this.events.set(e,[t]))},off(e,t){const s=this.events.get(e);if(s)if(typeof t=="function"){for(let i=s.length-1;i>=0;i--)t===s[i]&&s.splice(i,1);s.length===0&&this.events.delete(e)}else this.events.delete(e)},emit(e,...t){const s=this.events.get(e);if(s)for(const i of s)i(...t)}};function ue(e={}){const{immediate:t=!1,onNeedRefresh:s,onOfflineReady:i}=e;let n,o;const a=async(c=!0)=>{c&&(n==null||n.addEventListener("controlling",l=>{l.isUpdate&&window.location.reload()})),o&&o.waiting&&await U(o.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){n=new F("/sw.js",{scope:"/"}),n.addEventListener("activated",c=>{c.isUpdate||i==null||i()});{const c=()=>{s==null||s()};n.addEventListener("waiting",c),n.addEventListener("externalwaiting",c)}n.register({immediate:t}).then(c=>o=c)}return a}function de(e={}){const{immediate:t=!0,onNeedRefresh:s,onOfflineReady:i}=e,n=S(!1),o=S(!1);return{updateServiceWorker:ue({immediate:t,onNeedRefresh(){n.value=!0,s==null||s()},onOfflineReady(){o.value=!0,i==null||i()}}),offlineReady:o,needRefresh:n}}var _e=(e,t)=>{for(const[s,i]of t)e[s]=i;return e};const{offlineReady:fe,needRefresh:pe,updateServiceWorker:ge}=de(),{Header:he,Content:ve,Footer:ye}=P,{Link:ke}=K,Ee=W({data:()=>({locale:M,offlineReady:fe,needRefresh:pe}),components:{Layout:P,Header:he,Content:ve,Footer:ye,ConfigProvider:G,BackTop:Q,Link:ke,Return:Z},watch:{offlineReady:function(e){e&&this.$msg.success("\u79BB\u7EBF\u4F7F\u7528\u5DF2\u51C6\u5907\u597D~")},needRefresh:function(e){e&&Y.info({title:"\u5B58\u5728\u65B0\u5185\u5BB9\uFF0C\u8BF7\u70B9\u51FB \u91CD\u8F7D \u66F4\u65B0~",closable:!0,okText:"\u91CD\u8F7D",maskClosable:!0,onOk(){ge()}})}},methods:{getPopupContainer(e){return e?e.parentNode:document.body}}}),j=e=>(X("data-v-6fe1dbe4"),e=e(),ee(),e),we={class:"header"},Te=w("ISZY\u5DE5\u5177\u96C6\u5408"),be={key:0,class:"desc"},Ie={key:1,class:"desc"},Le=w("\u8FD4\u56DE\u9996\u9875"),Ae=j(()=>I("span",null,"\xA9 2021\xA0",-1)),Re=w(" \u968F\u9047\u800C\u5B89Blog "),Se=j(()=>I("br",null,null,-1)),Pe=w(" \u82CFICP\u590718047890\u53F7-2 ");function De(e,t,s,i,n,o){const a=d("router-link"),c=d("return"),l=d("Header"),E=d("BackTop"),p=d("router-view"),u=d("Content"),h=d("Link"),v=d("Footer"),H=d("Layout"),$=d("config-provider");return b(),J($,{locale:e.locale,getPopupContainer:e.getPopupContainer},{default:_(()=>[m(H,null,{default:_(()=>[m(l,null,{default:_(()=>[I("div",we,[m(a,{to:"/"},{default:_(()=>[Te]),_:1})]),e.$route.path==="/"?(b(),D("div",be,"\u4E00\u4E2A\u8F7B\u91CF\u7684\u5DE5\u5177\u96C6\u5408")):(b(),D("div",Ie,[m(a,{to:"/"},{default:_(()=>[m(c,{theme:"outline"}),Le]),_:1})]))]),_:1}),m(u,{ref:"view"},{default:_(()=>[m(E,{target:()=>e.$refs.view.$el,visibilityHeight:100},null,8,["target"]),m(p)]),_:1},512),m(v,null,{default:_(()=>[Ae,m(h,{href:"https://www.iszy.cc",target:"_blank"},{default:_(()=>[Re]),_:1}),Se,m(h,{href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_blank"},{default:_(()=>[Pe]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","getPopupContainer"])}var Ce=_e(Ee,[["render",De],["__scopeId","data-v-6fe1dbe4"]]);const xe="modulepreload",V={},Oe="/",r=function(t,s){return!s||s.length===0?t():Promise.all(s.map(i=>{if(i=`${Oe}${i}`,i in V)return;V[i]=!0;const n=i.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":xe,n||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),n)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",l)})})).then(()=>t())};var R={login:()=>r(()=>import("./index.7d028d79.js"),["assets/index.7d028d79.js","assets/index.6a7a0a0c.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),imgHosting:()=>r(()=>import("./imgHosting.b941dac6.js"),["assets/imgHosting.b941dac6.js","assets/imgHosting.8fc07071.css","assets/index.c64f5e8c.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),uuid:()=>r(()=>import("./uuid.8aee7e41.js"),["assets/uuid.8aee7e41.js","assets/uuid.5ee643fa.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.5580ceba.css","assets/index.28f6fdd0.css","assets/index.fd6e2063.css","assets/index.290a9536.css","assets/index.f885c713.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),mtqLoans:()=>r(()=>import("./mtqLoans.735d6bbe.js"),["assets/mtqLoans.735d6bbe.js","assets/mtqLoans.cff59d79.css","assets/index.ccc15a38.css","assets/index.d5ecd051.css","assets/index.eb531402.css","assets/index.28f6fdd0.css","assets/index.a361a67d.css","assets/index.414482b4.css","assets/index.e2b8fdb7.css","assets/index.74580095.css","assets/index.4ca0d3d7.css","assets/index.5580ceba.css","assets/index.b56b905d.css","assets/index.eb724f65.css","assets/index.f885c713.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),timeCompute:()=>r(()=>import("./timeCompute.d2b7bc3f.js"),["assets/timeCompute.d2b7bc3f.js","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.b56b905d.css","assets/index.eb724f65.css","assets/index.5580ceba.css","assets/index.28f6fdd0.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),colorTransform:()=>r(()=>import("./colorTransform.25869997.js"),["assets/colorTransform.25869997.js","assets/colorTransform.a6c32331.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.fd6e2063.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/tinycolor.4227ddcb.js"]),jsonEditor:()=>r(()=>import("./jsonEditor.04117271.js"),["assets/jsonEditor.04117271.js","assets/jsonEditor.e3af2854.css","assets/index.cd256673.css","assets/index.414482b4.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/jsoneditor.min.8a192fae.js","assets/jsoneditor.min.333d03ee.css","assets/createFile.dc5a6ec2.js"]),settings:()=>r(()=>import("./index.75bb4847.js"),["assets/index.75bb4847.js","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/index.414482b4.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),whatAnimeIsThis:()=>r(()=>import("./whatAnimeIsThis.9761b94b.js"),["assets/whatAnimeIsThis.9761b94b.js","assets/whatAnimeIsThis.b2df7412.css","assets/index.a133afbf.css","assets/index.f885c713.css","assets/index.5b179dc2.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),bilibiliBv2av:()=>r(()=>import("./bilibiliBv2av.aca81df1.js"),["assets/bilibiliBv2av.aca81df1.js","assets/bilibiliBv2av.156f190d.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.fd6e2063.css","assets/index.cd256673.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),oreooo:()=>r(()=>import("./index.2f9b2326.js"),["assets/index.2f9b2326.js","assets/index.98a2a291.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),2048:()=>r(()=>import("./index.15439afe.js"),["assets/index.15439afe.js","assets/index.69caa8c2.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),urlEncode:()=>r(()=>import("./urlEncode.34ec46ee.js"),["assets/urlEncode.34ec46ee.js","assets/urlEncode.6052a79f.css","assets/index.cd256673.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),tetris:()=>r(()=>import("./index.9cba1be1.js"),["assets/index.9cba1be1.js","assets/index.c6647a8b.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),viewSourceCode:()=>r(()=>import("./viewSourceCode.f9e3adfc.js"),["assets/viewSourceCode.f9e3adfc.js","assets/viewSourceCode.ffa04fc8.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/index.5527443f.js"]),cssFormatter:()=>r(()=>import("./cssFormatter.db3e09d9.js"),["assets/cssFormatter.db3e09d9.js","assets/cssFormatter.c0bdf252.css","assets/index.f885c713.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/index.5527443f.js"]),geoJson:()=>r(()=>import("./geoJson.328caf49.js"),["assets/geoJson.328caf49.js","assets/geoJson.b6d3929d.css","assets/index.c64f5e8c.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),latLng:()=>r(()=>import("./latLng.12261a19.js"),["assets/latLng.12261a19.js","assets/latLng.9b752f91.css","assets/index.cd256673.css","assets/marker-shadow.f50e6270.js","assets/marker-shadow.1e6cfa9a.css","assets/leaflet-src.f5a6478a.js","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),tinyEditor:()=>r(()=>import("./tinyEditor.492cd559.js"),["assets/tinyEditor.492cd559.js","assets/tinyEditor.be937d69.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),idChinese:()=>r(()=>import("./idChinese.f56c7348.js"),["assets/idChinese.f56c7348.js","assets/idChinese.979e67e5.css","assets/index.f885c713.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),cesiumDemo:()=>r(()=>import("./cesiumDemo.229198b0.js"),["assets/cesiumDemo.229198b0.js","assets/cesiumDemo.7cb98846.css","assets/index.ccc15a38.css","assets/index.5206647d.css","assets/index.c64f5e8c.css","assets/index.e2b8fdb7.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),screenRecord:()=>r(()=>import("./screenRecord.3089e409.js"),["assets/screenRecord.3089e409.js","assets/screenRecord.ba457fcb.css","assets/index.cd256673.css","assets/index.f885c713.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.5580ceba.css","assets/index.28f6fdd0.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),anyRule:()=>r(()=>import("./anyRule.524c840f.js"),["assets/anyRule.524c840f.js","assets/anyRule.72219c65.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),linuxCommand:()=>r(()=>import("./linuxCommand.97888d0f.js"),["assets/linuxCommand.97888d0f.js","assets/linuxCommand.708119ce.css","assets/index.f885c713.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css"]),watermark:()=>r(()=>import("./watermark.983374b9.js"),["assets/watermark.983374b9.js","assets/watermark.abc719cf.css","assets/index.a133afbf.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css","assets/createFile.dc5a6ec2.js","assets/tinycolor.4227ddcb.js"]),userAgent:()=>r(()=>import("./userAgent.8c0e1e28.js"),["assets/userAgent.8c0e1e28.js","assets/index.f885c713.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),webssh:()=>r(()=>import("./webssh.5f109249.js"),["assets/webssh.5f109249.js","assets/webssh.1f728a2d.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),cdnQuery:()=>r(()=>import("./cdnQuery.2dccf457.js"),["assets/cdnQuery.2dccf457.js","assets/cdnQuery.3ecac12d.css","assets/index.f885c713.css","assets/index.28f6fdd0.css","assets/index.74580095.css","assets/index.4ca0d3d7.css","assets/index.5580ceba.css","assets/index.ccc15a38.css","assets/index.eb724f65.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),relationship:()=>r(()=>import("./relationship.5265df6a.js"),["assets/relationship.5265df6a.js","assets/relationship.39f08a55.css","assets/index.a361a67d.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.cd256673.css","assets/index.f885c713.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),"3dView":()=>r(()=>import("./3dView.bdfe3435.js"),["assets/3dView.bdfe3435.js","assets/3dView.0ef1523a.css","assets/index.a133afbf.css","assets/vue-codemirror.ca08aa0b.js","assets/vue-codemirror.bdfb82c5.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"])},N=[{type:"\u5176\u4ED6",icon:"all-application",children:[{name:"\u6DD8\u5B9D\u4F18\u60E0\u5238\u7CBE\u9009",link:"https://taobao.iszy.xyz"},{name:"\u8FD9\u662F\u4EC0\u4E48\u52A8\u6F2B",link:"/others/whatAnimeIsThis"},{name:"\u54D4\u54E9\u54D4\u54E9AV\u3001BV\u53F7\u8F6C\u6362",link:"/others/bilibiliBv2av"},{name:"\u5965\u5229\u5965\u751F\u6210\u5668",link:"/others/oreooo"},{name:"\u8EAB\u4EFD\u8BC1\u89E3\u6790",link:"/others/idChinese"},{name:"\u5C4F\u5E55\u5F55\u5236",link:"/others/screenRecord"},{name:"WebSSH",link:"/others/webssh"},{name:"\u4EB2\u621A\u5173\u7CFB\u8BA1\u7B97\u5668",link:"/others/relationship"},{name:"\u6781\u7B80\u56FE\u5E8A",link:"/others/imgHosting",legend:"\u65B0\u529F\u80FD"},{name:"\u5728\u7EBF\u6D41\u7A0B\u56FE",link:"https://draw.iszy.xyz"},{name:"3D\u6A21\u578B\u6D4F\u89C8",link:"/others/3dView"},{name:"\u8D44\u6E90\u5305",link:"https://lib.iszy.xyz"},{name:"Chromium\u4E0B\u8F7D",link:"https://chromium.cypress.io/"}]},{type:"\u5730\u56FE",icon:"map-draw",children:[{name:"\u5730\u56FE\u9009\u62E9\u5668",link:"https://datav.aliyun.com/tools/atlas/index.html"},{name:"GeoJSON",link:"/gis/geoJson"},{name:"\u7ECF\u7EAC\u5EA6\u67E5\u8BE2",link:"/gis/latLng"},{name:"Cesium\u4EE3\u7801\u6837\u4F8B",link:"/gis/cesiumDemo"}]},{type:"\u56FE\u7247\u76F8\u5173",icon:"picture-one",children:[{name:"\u56FE\u7247\u52A0\u6C34\u5370",link:"/image/watermark",legend:"\u65B0\u529F\u80FD"}]},{type:"\u7F16\u7A0B\u5F00\u53D1",icon:"code",children:[{name:"\u65F6\u95F4\u8BA1\u7B97",link:"/program/timeCompute"},{name:"\u989C\u8272\u8F6C\u6362",link:"/program/colorTransform"},{name:"UUID\u5728\u7EBF\u751F\u6210",link:"/program/uuid"},{name:"JSON\u7F16\u8F91\u5668",link:"/program/jsonEditor"},{name:"URL\u7F16\u7801/\u89E3\u7801",link:"/program/urlEncode"},{name:"\u67E5\u770B\u7F51\u9875\u6E90\u7801",link:"/program/viewSourceCode"},{name:"CSS\u683C\u5F0F\u5316/\u538B\u7F29",link:"/program/cssFormatter"},{name:"TinyEditor",link:"/program/tinyEditor"},{name:"\u6B63\u5219\u5927\u5168",link:"/program/anyRule"},{name:"Linux\u547D\u4EE4\u67E5\u8BE2",link:"/program/linuxCommand"},{name:"UserAgent\u89E3\u6790",link:"/program/userAgent"},{name:"\u524D\u7AEFCDN\u641C\u7D22",link:"/program/cdnQuery"}]},{type:"\u5C0F\u6E38\u620F",icon:"game",children:[{name:"2048",link:"/games/2048"},{name:"\u4FC4\u7F57\u65AF\u65B9\u5757",link:"/games/tetris"}]},{type:"\u7406\u8D22",icon:"financing-one",children:[{name:"\u591A\u6B21\u63D0\u524D\u8FD8\u8D37\u8BA1\u7B97\u5668",link:"/money/mtqLoans"}]},{type:"\u7F51\u7AD9\u76F8\u5173",icon:"setting-two",children:[{name:"\u7F51\u7AD9\u8BBE\u7F6E",link:"/settings",statistics:!1},{name:"\u7559\u8A00\u53CD\u9988",link:"https://github.com/ZvonimirSun/iszy-tools/discussions"}]}],je=[],Ve={namespaced:!0,state:()=>({settings:{showMost:!1,showRecent:!1,showSearch:!0,showType:!0,openInNewTab:!1}}),mutations:{triggerMost(e){e.settings.showMost=!e.settings.showMost},triggerRecent(e){e.settings.showRecent=!e.settings.showRecent},triggerSearch(e){e.settings.showSearch=!e.settings.showSearch},triggerType(e){e.settings.showType=!e.settings.showType},triggerNewTab(e){e.settings.openInNewTab=!e.settings.openInNewTab}},actions:{triggerMost({commit:e}){e("triggerMost")},triggerRecent({commit:e}){e("triggerRecent")},triggerSearch({commit:e}){e("triggerSearch")},triggerType({commit:e}){e("triggerType")},triggerNewTab({commit:e}){e("triggerNewTab")}}},Ne={namespaced:!0,state:()=>({favorite:[],statistics:[]}),getters:{isFav:e=>t=>e.favorite.filter(s=>s.name===t).length>0,recent(e){return[...e.statistics].sort(function(t,s){return s.lastAccessTime-t.lastAccessTime}).slice(0,3)},most(e){return[...e.statistics].sort(function(t,s){return s.times-t.times}).slice(0,3)}},mutations:{updateFav(e,{name:t,link:s,add:i}){if(i){const n=e.favorite.filter(o=>o.name===t);n.length>0?n[0].link=s:e.favorite.push({name:t,link:s})}else e.favorite=e.favorite.filter(n=>n.name!==t)},access(e,{name:t,link:s}){if(Array.isArray(e.statistics)){const i=e.statistics.filter(n=>n.name===t);i.length>0?(i[0].times++,i[0].lastAccessTime=new Date().getTime(),i[0].link=s):e.statistics.push({name:t,link:s,times:1,lastAccessTime:new Date().getTime()})}else e.statistics=[{name:t,link:s,times:1,lastAccessTime:new Date().getTime()}]},clearHistory(e){e.statistics=[]},updateHistory(e,{name:t,link:s}){const i=e.statistics.filter(n=>n.name===t);i.length>0&&(i[0].link=s)},removeHistory(e,{name:t}){e.statistics=e.statistics.filter(s=>s.name!==t)}},actions:{addFav({commit:e},{name:t,link:s}){e("updateFav",{name:t,link:s,add:!0})},removeFav({commit:e},{name:t}){e("updateFav",{name:t})},access({commit:e},{name:t,link:s}){e("access",{name:t,link:s})},clearHistory({commit:e}){e("clearHistory")},updateHistory({commit:e},{name:t,link:s}){e("updateHistory",{name:t,link:s})},removeHistory({commit:e},{name:t}){e("removeHistory",{name:t})},fixFavorite({dispatch:e,state:t,getters:s}){const i=te([...N||[]].map(n=>n.children));for(const n of t.favorite){const o=i.filter(a=>a.name===n.name);o.length===0?e("removeFav",{name:n.name}):o[0].link!==n.link&&e("addFav",{name:n.name,link:o[0].link})}for(const n of t.statistics){const o=i.filter(a=>a.name===n.name);o.length===0?e("removeHistory",{name:n.name}):o[0].link!==n.link&&e("updateHistory",{name:n.name,link:o[0].link})}}}},Be={namespaced:!0,state:()=>({bestScore:0,gameState:void 0}),mutations:{setBestScore(e,t){e.bestScore=t},setGameState(e,t){e.gameState=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)},setGameState({commit:e},t){e("setGameState",t||{})},clearGameState({commit:e}){e("setGameState",void 0)}}},He={namespaced:!0,state:()=>({bestScore:0}),mutations:{setBestScore(e,t){e.bestScore=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)}}};const y=C.create();y.CancelToken=C.CancelToken;y.interceptors.request.use(e=>(f.state.user.token&&e.url.includes("https://api.iszy.xyz")&&(e.headers.Authorization="Bearer "+f.state.user.token),e));var $e={namespaced:!0,state:()=>({token:null}),mutations:{setToken(e,t){e.token=t},clearToken(e){e.token=null}},actions:{async login({commit:e},{userName:t,password:s}){try{if(t!=null&&s!=null){const i=await y.post("https://api.iszy.xyz/auth/login",{userName:t.trim(),password:s});return i.data&&i.data.code==="00000"?(e("setToken",i.data.data.token),!0):(e("clearToken"),!1)}else return!1}catch{return e("clearToken"),!1}}}},qe={namespaced:!0,state:()=>({data:{},time:void 0}),mutations:{setData(e,t){e.data=t,e.time=se().format()}},actions:{async getData({commit:e}){try{const t=await this.$axios.get("https://cdn.jsdelivr.net/gh/jaywcjlove/linux-command@1.8.1/dist/data.min.json");e("setData",t.data)}catch{this.$msg.warn("\u83B7\u53D6Linux\u547D\u4EE4\u6570\u636E\u5931\u8D25")}}}},ze={namespaced:!0,state:()=>({data:{}}),getters:{getData:e=>t=>{if(t)return(e.data||{})[t]}},mutations:{setData(e,{key:t,val:s}){t&&(e.data=e.data||{},e.data[t]=s)},clear(e){e.data={}}},actions:{setData({commit:e},t){e("setData",t)},clear({commit:e}){e("clear")}}},Fe={namespaced:!0,state:()=>({uploader:"",imgList:[],configs:{},commonConfig:{renameBeforeUpload:!1,renameTimeStamp:!0,copyUrlAfterUpload:!0}}),getters:{config:e=>t=>e.configs[t]},mutations:{saveConfig(e,{uploader:t,config:s}){t&&(e.uploader=t,e.configs[t]=s)},saveCommonConfig(e,t){e.commonConfig=x(t)},addImage(e,{name:t,url:s}){t&&s&&e.imgList.unshift({name:t,url:s,id:ne()})},removeImage(e,{id:t}){for(const s in e.imgList||[])e.imgList[s].id===t&&e.imgList.splice(parseInt(s),1)},importConfig(e,t){}},actions:{saveConfig({commit:e},t){e("saveConfig",t)},saveCommonConfig({commit:e},t){e("saveCommonConfig",t)},addImage({commit:e},t){e("addImage",t)},removeImage({commit:e},t){e("removeImage",t)},async importConfig({commit:e},{uploader:t="",imgList:s=[],configs:i={},commonConfig:n={renameTimeStamp:!0}}){if(typeof t=="string"&&Array.isArray(s)&&i&&n)e("importConfig",{uploader:t,imgList:s,configs:i,commonConfig:n});else throw new Error("\u914D\u7F6E\u6709\u8BEF")}}};class Ue{constructor(){T(this,"_queue",[]);T(this,"_flushing",!1)}enqueue(t){return this._queue.push(t),this._flushing?Promise.resolve():this._flushQueue()}_flushQueue(){this._flushing=!0;const t=()=>{const s=this._queue.shift();if(s)return s.then(t);this._flushing=!1};return Promise.resolve(t())}}var We=(e={})=>{const t=e.name!=null?e.name:"vuex",s=e.storeName!=null?e.storeName:"keyvaluepairs";L.config({name:t,storeName:s});const i=new Ue,n=e.filter||(()=>!0),o=c=>L.getItem(c),a=(c,l)=>L.setItem(c,x(l));return c=>{const l=c;c.restored=(async()=>{const E=Object.keys(l._modulesNamespaceMap).map(u=>u.slice(0,-1)),p=O({},l.state,await o("root"));for(const u of E)p[u]=O({},p[u],await o(u));p&&l.replaceState(p),l.subscribe((u,h)=>{if(n(u)){const v=u.type.split("/");v.length<=1?i.enqueue(a("root",ie(h,E))):i.enqueue(a(v[0],h[v[0]]))}})})()}},f=oe({modules:{settings:Ve,favorite:Ne,g2048:Be,tetris:He,user:$e,linuxCommand:qe,cache:ze,imgHosting:Fe},plugins:[We({name:"iszy_tools",storeName:"state"})]});let g=[{path:"/",name:"ISZY\u5DE5\u5177\u96C6\u5408",component:()=>r(()=>import("./Home.6255f7b7.js"),["assets/Home.6255f7b7.js","assets/Home.a5847ba1.css","assets/index.ccc15a38.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"])}];for(const e of N)if(Array.isArray(e.children)&&e.children.length>0){for(const t of e.children)if(!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(t.link)&&g.filter(s=>s.name===t.name).length===0){const s=(e.link||"")+(t.link||""),i=s.match("[^/]+(?!.*/)");i.length>0&&R[i[0]]&&g.push({path:s,name:t.name,component:R[i[0]],meta:{statistics:t.statistics!==!1,layout:t.layout}})}}for(const e of je){const t=e.link.match("[^/]+(?!.*/)");g.push({path:e.link,name:e.name,component:R[t[0]],meta:{statistics:!1,layout:e.layout}})}g=g.concat([{path:"/login",name:"\u767B\u5F55",component:()=>r(()=>import("./index.7d028d79.js"),["assets/index.7d028d79.js","assets/index.6a7a0a0c.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),meta:{title:"ISZY \u5DE5\u5177\u96C6\u5408"}},{path:"/404",name:"404",component:()=>r(()=>import("./404.bff79966.js"),["assets/404.bff79966.js","assets/404.389992f4.css","assets/vendor.af973e49.js","assets/vendor.6b12421d.css"]),hidden:!0},{path:"/401",name:"401",redirect:"/login",hidden:!0},{path:"/redirect",name:"redirect",beforeEnter(e,t,s){e.query.url?window.location.href=e.query.url:s("/")},hidden:!0},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}]);const B=re({history:ae("/"),routes:g}),Me=["/login","/auth-redirect"];B.beforeEach(async(e,t,s)=>{await f.restored,f.getters.currentUser||Me.indexOf(e.path)!==-1||!e.meta.requiresAuth?(document.title=Ge(e.meta.title||e.name),e.name&&e.meta.statistics&&await f.dispatch("favorite/access",{name:e.name,link:e.path}),s()):s(`/login?redirect=${e.path}`)});function Ge(e){return e&&e!=="ISZY\u5DE5\u5177\u96C6\u5408"?`${e} - ISZY\u5DE5\u5177\u96C6\u5408`:"ISZY\u5DE5\u5177\u96C6\u5408"}const Qe={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},Ze={mounted(e,t){console.log(e),console.log(t),console.log(Qe)}};var Ye={install:e=>{e.directive("span",Ze)}};const k=ce(Ce);A.config({duration:2,maxCount:3});k.config.globalProperties.$axios=y;k.config.globalProperties.$msg=A;k.config.globalProperties.$eventBus=me;f.$axios=y;f.$msg=A;k.use(f).use(B).use(Ye);k.mount("#app");export{_e as _,r as a,N as t};
