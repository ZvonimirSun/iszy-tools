var e=Object.defineProperty,t=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,n=(e,n,a)=>(t(e,"symbol"!=typeof n?n+"":n,a),a);import("data:text/javascript;base64,Cg==");import{r as a,v as o,n as i,d as s,p as r,a as l,B as c,b as m,c as d,e as u,f as p,w as g,g as h,h as f,o as _,i as y,z as k,L as v,C as w,j as b,T as E,F as T,k as R,l as x,m as S,q as I,s as L,t as A,u as P,x as j,y as O,A as C,D,E as N,G as V,H}from"./vendor.8f1f5d06.js";const z=function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}};function F(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a}=e;let s,r;if("serviceWorker"in navigator){s=new o("/sw.js",{scope:"/"}),s.addEventListener("activated",(e=>{e.isUpdate||null==a||a()}));{const e=()=>{null==n||n()};s.addEventListener("waiting",e),s.addEventListener("externalwaiting",e)}s.register({immediate:t}).then((e=>r=e))}return async(e=!0)=>{e&&(null==s||s.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()}))),r&&r.waiting&&await i(r.waiting,{type:"SKIP_WAITING"})}}function B(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:o}=e,i=a(!1),s=a(!1);return{updateServiceWorker:F({immediate:t,onNeedRefresh(){i.value=!0,null==n||n()},onOfflineReady(){s.value=!0,null==o||o()}}),offlineReady:s,needRefresh:i}}z();var q=".pwa-toast[data-v-4b534042] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin: 16px;\n  padding: 12px;\n  border: 1px solid #8885;\n  border-radius: 4px;\n  z-index: 1;\n  text-align: left;\n  box-shadow: 3px 4px 5px 0 #8885;\n  background-color: white;\n}\n.pwa-toast .message[data-v-4b534042] {\n  margin-bottom: 8px;\n}\n.pwa-toast button[data-v-4b534042] {\n  border: 1px solid #8885;\n  outline: none;\n  margin-right: 5px;\n  border-radius: 2px;\n  padding: 3px 10px;\n}";const{offlineReady:$,needRefresh:M,updateServiceWorker:G}=B(),U=s({name:"pwaReloadPrompt",components:{Button:c},data:()=>({offlineReady:$,needRefresh:M}),methods:{updateServiceWorker:G,async close(){this.offlineReady=!1,this.needRefresh=!1}}});r("data-v-4b534042");const W={key:0,class:"pwa-toast"},Y={class:"message"},J={key:0},Z={key:1},Q=y(" 重载 "),K=y(" 关闭 ");function X(e,t,n,a,o,i){const s=m("Button");return e.offlineReady||e.needRefresh?(_(),d("div",W,[u("div",Y,[e.offlineReady?(_(),d("span",J," 已经准备好离线运行~ ")):(_(),d("span",Z," 存在新内容，点击按钮重载来更新 "))]),e.needRefresh?(_(),p(s,{key:0,onClick:t[0]||(t[0]=t=>e.updateServiceWorker())},{default:g((()=>[Q])),_:1})):h("",!0),f(s,{onClick:e.close},{default:g((()=>[K])),_:1},8,["onClick"])])):h("",!0)}l(),U.render=X,U.__scopeId="data-v-4b534042";var ee='@charset "UTF-8";\n/*字号统一控制*/\nhtml {\n  font-size: 62.5%;\n}\n@media screen and (max-width: 426px) {\nhtml {\n    font-size: 45%;\n}\n}\n/*滚动条样式*/\n::-webkit-scrollbar {\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: rgba(249, 249, 249, 0.98);\n}\n/*定义滚动条轨道 内阴影+圆角*/\n::-webkit-scrollbar-track {\n  width: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(248, 255, 111, 0);\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0);\n}\n/*定义滑块 内阴影+圆角*/\n::-webkit-scrollbar-thumb {\n  z-index: 100;\n  border-radius: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(246, 246, 246, 0.76);\n  background-color: #d2d4d6;\n}\nhtml, body, #app {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#app {\n  font-variant-numeric: tabular-nums;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: Lora, "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  color: #333333;\n  background: #f4f8fb;\n}\n#app pre,\n#app code, #app kbd, #app samp {\n  font-family: JetBrains Mono, monospace;\n}',te=".ant-layout[data-v-57483c98] {\n  background: transparent;\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  overflow: hidden;\n}\n.ant-layout-header[data-v-57483c98], .ant-layout-layout[data-v-57483c98], .ant-layout-footer[data-v-57483c98] {\n  background: transparent;\n}\n.ant-layout-header[data-v-57483c98] {\n  padding: 3.2rem 0 2.4rem;\n  text-align: center;\n  height: 13.4rem;\n  line-height: unset;\n}\n.ant-layout-header .header[data-v-57483c98] {\n  height: 4.6rem;\n  line-height: 4.6rem;\n  font-size: 3.8rem;\n  color: #333333;\n  font-weight: 600;\n}\n.ant-layout-header .header a[data-v-57483c98] {\n  color: #333333;\n}\n.ant-layout-header .desc[data-v-57483c98] {\n  height: 2.2rem;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  margin-top: 1.2rem;\n  color: #999999;\n}\n.ant-layout-content[data-v-57483c98] {\n  max-width: 120rem;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem 1.6rem;\n  overflow-y: auto;\n}\n.ant-layout-content.layout-wide[data-v-57483c98] {\n  max-width: 180rem;\n}\n.ant-layout-footer[data-v-57483c98] {\n  height: 7rem;\n  text-align: center;\n}";const{Header:ne,Content:ae,Footer:oe}=v,{Link:ie}=E,se=s({data:()=>({locale:k}),components:{PwaReloadPrompt:U,Layout:v,Header:ne,Content:ae,Footer:oe,ConfigProvider:w,BackTop:b,Link:ie},methods:{getPopupContainer:e=>e?e.parentNode:document.body}});r("data-v-57483c98");const re={class:"header"},le=y("ISZY工具集合"),ce=u("div",{class:"desc"},"一个轻量的工具集合",-1),me=u("span",null,"© 2021 ",-1),de=y(" 随遇而安Blog "),ue=u("br",null,null,-1),pe=y(" 苏ICP备18047890号-2 ");function ge(e,t,n,a,o,i){const s=m("router-link"),r=m("Header"),l=m("BackTop"),c=m("router-view"),p=m("Content"),h=m("Link"),y=m("Footer"),k=m("Layout"),v=m("config-provider"),w=m("pwa-reload-prompt");return _(),d(T,null,[f(v,{locale:e.locale,getPopupContainer:e.getPopupContainer},{default:g((()=>[f(k,null,{default:g((()=>[f(r,null,{default:g((()=>[u("div",re,[f(s,{to:"/"},{default:g((()=>[le])),_:1})]),ce])),_:1}),f(p,{ref:"view",class:R((e.$route.meta||{}).layout?["layout-"+(e.$route.meta||{}).layout]:[])},{default:g((()=>[f(l,{target:()=>e.$refs.view.$el,visibilityHeight:100},null,8,["target"]),f(c)])),_:1},8,["class"]),f(y,null,{default:g((()=>[me,f(h,{href:"https://www.iszy.cc",target:"_blank"},{default:g((()=>[de])),_:1}),ue,f(h,{href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_blank"},{default:g((()=>[pe])),_:1})])),_:1})])),_:1})])),_:1},8,["locale","getPopupContainer"]),f(w)],64)}l(),se.render=ge,se.__scopeId="data-v-57483c98";const he="modulepreload",fe={},_e="/",ye=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in fe)return;fe[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":he,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var ke={login:x((()=>ye((()=>import("./index.c771400e.js")),["assets/index.c771400e.js","assets/index.9e873301.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),imgHosting:x((()=>ye((()=>import("./imgHosting.99290ec2.js")),["assets/imgHosting.99290ec2.js","assets/imgHosting.6f3b7102.css","assets/index.ccc15a38.css","assets/index.d5ecd051.css","assets/index.3a313787.css","assets/index.f885c713.css","assets/index.dc706ce3.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),uuid:x((()=>ye((()=>import("./uuid.ef7a59c3.js")),["assets/uuid.ef7a59c3.js","assets/uuid.027a9c37.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.3a313787.css","assets/index.fd6e2063.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),mtqLoans:x((()=>ye((()=>import("./mtqLoans.6b9214cd.js")),["assets/mtqLoans.6b9214cd.js","assets/mtqLoans.97e03da4.css","assets/index.ccc15a38.css","assets/index.d5ecd051.css","assets/index.09466242.css","assets/index.3a313787.css","assets/index.414482b4.css","assets/index.98f7360a.css","assets/index.f885c713.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/container.5a706178.js","assets/container.1e4ae840.css"]))),timeCompute:x((()=>ye((()=>import("./timeCompute.6744c7d3.js")),["assets/timeCompute.6744c7d3.js","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.98f7360a.css","assets/index.3a313787.css","assets/index.f885c713.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/container.5a706178.js","assets/container.1e4ae840.css"]))),colorTransform:x((()=>ye((()=>import("./colorTransform.4a6a59d7.js")),["assets/colorTransform.4a6a59d7.js","assets/index.f885c713.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/container.5a706178.js","assets/container.1e4ae840.css"]))),jsonEditor:x((()=>ye((()=>import("./jsonEditor.975d3140.js")),["assets/jsonEditor.975d3140.js","assets/jsonEditor.0a24463d.css","assets/index.cd256673.css","assets/index.414482b4.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/jsoneditor.min.0393547a.js","assets/jsoneditor.min.333d03ee.css"]))),settings:x((()=>ye((()=>import("./index.4ee52489.js")),["assets/index.4ee52489.js","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/index.414482b4.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/container.5a706178.js","assets/container.1e4ae840.css"]))),whatAnimeIsThis:x((()=>ye((()=>import("./whatAnimeIsThis.57160644.js")),["assets/whatAnimeIsThis.57160644.js","assets/whatAnimeIsThis.c39747bc.css","assets/index.dc706ce3.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),bilibiliBv2av:x((()=>ye((()=>import("./bilibiliBv2av.718dd97e.js")),["assets/bilibiliBv2av.718dd97e.js","assets/bilibiliBv2av.2b5f40b0.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.fd6e2063.css","assets/index.cd256673.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),oreooo:x((()=>ye((()=>import("./index.a6ced45d.js")),["assets/index.a6ced45d.js","assets/index.98a2a291.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),2048:x((()=>ye((()=>import("./index.2ceae049.js")),["assets/index.2ceae049.js","assets/index.ab651cec.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),urlEncode:x((()=>ye((()=>import("./urlEncode.e12201c4.js")),["assets/urlEncode.e12201c4.js","assets/urlEncode.9f15cd91.css","assets/index.cd256673.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),tetris:x((()=>ye((()=>import("./index.1f7adced.js")),["assets/index.1f7adced.js","assets/index.c7c3d162.css","assets/index.f885c713.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),viewSourceCode:x((()=>ye((()=>import("./viewSourceCode.f35d5e01.js")),["assets/viewSourceCode.f35d5e01.js","assets/viewSourceCode.ffa04fc8.css","assets/index.f885c713.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/index.5527443f.js"]))),cssFormatter:x((()=>ye((()=>import("./cssFormatter.2928a6f9.js")),["assets/cssFormatter.2928a6f9.js","assets/cssFormatter.f44c5c4c.css","assets/index.f885c713.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/index.5527443f.js","assets/index.1a7d0101.js"]))),geoJson:x((()=>ye((()=>import("./geoJson.76ad56f9.js")),["assets/geoJson.76ad56f9.js","assets/geoJson.600bc300.css","assets/index.09466242.css","assets/index.3a313787.css","assets/index.414482b4.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/leaflet-src.esm.1d06475d.js","assets/leaflet-src.esm.360933b5.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/jsoneditor.min.0393547a.js","assets/jsoneditor.min.333d03ee.css"]))),latLng:x((()=>ye((()=>import("./latLng.fc80be87.js")),["assets/latLng.fc80be87.js","assets/latLng.03c8d1b5.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/leaflet-src.esm.1d06475d.js","assets/leaflet-src.esm.360933b5.css","assets/container.5a706178.js","assets/container.1e4ae840.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"])))},ve=[{type:"其他",icon:"icon-t-stack-fill",children:[{name:"淘宝优惠券精选",link:"https://taobao.iszy.xyz",legend:"外部"},{name:"这是什么动漫",link:"/anime/whatAnimeIsThis",legend:"在线"},{name:"哔哩哔哩AV、BV号转换",link:"/anime/bilibiliBv2av"},{name:"奥利奥生成器",link:"/others/oreooo"},{name:"资源包",link:"https://lib.iszy.xyz",legend:"外部"}]},{type:"编程开发",icon:"icon-t-code",children:[{name:"时间计算",link:"/program/timeCompute"},{name:"颜色转换",link:"/program/colorTransform"},{name:"UUID在线生成",link:"/program/uuid"},{name:"JSON编辑器",link:"/program/jsonEditor",layout:"wide"},{name:"URL编码/解码",link:"/program/urlEncode"},{name:"查看网页源码",link:"/program/viewSourceCode",legend:"新功能"},{name:"CSS格式化/压缩",link:"/program/cssFormatter"}]},{type:"地图相关",icon:"icon-t-map",children:[{name:"地图选择器",link:"https://datav.aliyun.com/tools/atlas/index.html",legend:"外部"},{name:"GeoJSON",link:"/gis/geoJson",legend:"新功能",layout:"wide"},{name:"经纬度查询",link:"/gis/latLng",legend:"新功能",layout:"wide"}]},{type:"小游戏",icon:"icon-t-game",children:[{name:"2048",link:"/games/2048"},{name:"俄罗斯方块",link:"/games/tetris",legend:"新功能"}]},{type:"理财",icon:"icon-t-licai",children:[{name:"多次提前还贷计算器",link:"/money/mtqLoans"}]},{type:"网站相关",icon:"icon-t-settings",children:[{name:"网站设置",link:"/settings",statistics:!1}]}],we=[],be={namespaced:!0,state:()=>({settings:{showMost:!0,showRecent:!1,showSearch:!0,showType:!0,openInNewTab:!1}}),mutations:{triggerMost(e){e.settings.showMost=!e.settings.showMost},triggerRecent(e){e.settings.showRecent=!e.settings.showRecent},triggerSearch(e){e.settings.showSearch=!e.settings.showSearch},triggerType(e){e.settings.showType=!e.settings.showType},triggerNewTab(e){e.settings.openInNewTab=!e.settings.openInNewTab}},actions:{triggerMost({commit:e}){e("triggerMost")},triggerRecent({commit:e}){e("triggerRecent")},triggerSearch({commit:e}){e("triggerSearch")},triggerType({commit:e}){e("triggerType")},triggerNewTab({commit:e}){e("triggerNewTab")}}},Ee={namespaced:!0,state:()=>({favorite:[],statistics:[]}),getters:{isFav:e=>t=>e.favorite.filter((e=>e.name===t)).length>0,recent:e=>[...e.statistics].sort((function(e,t){return t.lastAccessTime-e.lastAccessTime})).slice(0,3),most:e=>[...e.statistics].sort((function(e,t){return t.times-e.times})).slice(0,3)},mutations:{updateFav(e,{name:t,link:n,add:a}){if(a){const a=e.favorite.filter((e=>e.name===t));a.length>0?a[0].link=n:e.favorite.push({name:t,link:n})}else e.favorite=e.favorite.filter((e=>e.name!==t))},access(e,{name:t,link:n}){if(Array.isArray(e.statistics)){const a=e.statistics.filter((e=>e.name===t));a.length>0?(a[0].times++,a[0].lastAccessTime=(new Date).getTime(),a[0].link=n):e.statistics.push({name:t,link:n,times:1,lastAccessTime:(new Date).getTime()})}else e.statistics=[{name:t,link:n,times:1,lastAccessTime:(new Date).getTime()}]},clearHistory(e){e.statistics=[]},updateHistory(e,{name:t,link:n}){const a=e.statistics.filter((e=>e.name===t));a.length>0&&(a[0].link=n)},removeHistory(e,{name:t}){e.statistics=e.statistics.filter((e=>e.name!==t))}},actions:{addFav({commit:e},{name:t,link:n}){e("updateFav",{name:t,link:n,add:!0})},removeFav({commit:e},{name:t}){e("updateFav",{name:t})},access({commit:e},{name:t,link:n}){e("access",{name:t,link:n})},clearHistory({commit:e}){e("clearHistory")},updateHistory({commit:e},{name:t,link:n}){e("updateHistory",{name:t,link:n})},removeHistory({commit:e},{name:t}){e("removeHistory",{name:t})},fixFavorite({dispatch:e,state:t,getters:n}){const a=S([...ve||[]].map((e=>e.children)));for(const o of t.favorite){const t=a.filter((e=>e.name===o.name));0===t.length?e("removeFav",{name:o.name}):t[0].link!==o.link&&e("addFav",{name:o.name,link:t[0].link})}for(const o of t.statistics){const t=a.filter((e=>e.name===o.name));0===t.length?e("removeHistory",{name:o.name}):t[0].link!==o.link&&e("updateHistory",{name:o.name,link:t[0].link})}}}},Te={namespaced:!0,state:()=>({bestScore:0,gameState:void 0}),mutations:{setBestScore(e,t){e.bestScore=t},setGameState(e,t){e.gameState=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)},setGameState({commit:e},t){e("setGameState",t||{})},clearGameState({commit:e}){e("setGameState",void 0)}}},Re={namespaced:!0,state:()=>({bestScore:0}),mutations:{setBestScore(e,t){e.bestScore=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)}}};const xe=I.create();xe.CancelToken=I.CancelToken,xe.interceptors.request.use((e=>(Ae.state.user.token&&(e.headers.Authorization="Bearer "+Ae.state.user.token),e)));var Se={namespaced:!0,state:()=>({token:null}),mutations:{setToken(e,t){e.token=t},clearToken(e){e.token=null}},actions:{async login({commit:e},{userName:t,password:n}){try{if(null!=t&&null!=n){const a=await xe.post("https://api.iszy.xyz/auth/login",{userName:t.trim(),password:n});return a.data&&200===a.data.code?(e("setToken",a.data.data.token),!0):(e("clearToken"),!1)}return!1}catch(a){return e("clearToken"),!1}}}};class Ie{constructor(){n(this,"_queue",[]),n(this,"_flushing",!1)}enqueue(e){return this._queue.push(e),this._flushing?Promise.resolve():this._flushQueue()}_flushQueue(){this._flushing=!0;const e=()=>{const t=this._queue.shift();if(t)return t.then(e);this._flushing=!1};return Promise.resolve(e())}}var Le=(e={})=>{const t=null!=e.name?e.name:"vuex",n=null!=e.storeName?e.storeName:"keyvaluepairs";L.config({name:t,storeName:n});const a=new Ie,o=e.filter||(()=>!0),i=e=>L.getItem(e),s=(e,t)=>L.setItem(e,j(t));return e=>{const t=e;e.restored=(async()=>{const e=Object.keys(t._modulesNamespaceMap).map((e=>e.slice(0,-1))),n=A({},t.state,await i("root"));for(const t of e)n[t]=A({},n[t],await i(t));n&&t.replaceState(n),t.subscribe(((t,n)=>{if(o(t)){const o=t.type.split("/");o.length<=1?a.enqueue(s("root",P(n,e))):a.enqueue(s(o[0],n[o[0]]))}}))})()}},Ae=O({modules:{settings:be,favorite:Ee,g2048:Te,tetris:Re,user:Se},plugins:[Le({name:"iszy_tools",storeName:"state"})]});let Pe=[{path:"/",name:"ISZY工具集合",component:()=>ye((()=>import("./Home.f90d2805.js")),["assets/Home.f90d2805.js","assets/Home.00560c89.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css","assets/index.1a7d0101.js"])}];for(const Ve of ve)if(Array.isArray(Ve.children)&&Ve.children.length>0)for(const e of Ve.children)if(!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(e.link)&&0===Pe.filter((t=>t.name===e.name)).length){const t=(Ve.link||"")+(e.link||""),n=t.match("[^/]+(?!.*/)");n.length>0&&ke[n[0]]&&Pe.push({path:t,name:e.name,component:ke[n[0]],meta:{statistics:!1!==e.statistics,layout:e.layout}})}for(const Ve of we){const e=Ve.link.match("[^/]+(?!.*/)");Pe.push({path:Ve.link,name:Ve.name,component:ke[e[0]],meta:{statistics:!1,layout:Ve.layout}})}Pe=Pe.concat([{path:"/login",name:"登录",component:x((()=>ye((()=>import("./index.c771400e.js")),["assets/index.c771400e.js","assets/index.9e873301.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),meta:{title:"ISZY 工具集合"}},{path:"/404",name:"404",component:x((()=>ye((()=>import("./404.032039f3.js")),["assets/404.032039f3.js","assets/404.389992f4.css","assets/vendor.8f1f5d06.js","assets/vendor.0e23943e.css"]))),hidden:!0},{path:"/401",name:"401",redirect:"/login",hidden:!0},{path:"/redirect",name:"redirect",beforeEnter(e,t,n){e.query.url?(window.location.href=e.query.url,n()):n("/")},hidden:!0},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}]);const je=C({history:D("/"),routes:Pe}),Oe=["/login","/auth-redirect"];function Ce(e){return e&&"ISZY工具集合"!==e?`${e} - ISZY工具集合`:"ISZY工具集合"}je.beforeEach((async(e,t,n)=>{await Ae.restored;Ae.getters.currentUser||-1!==Oe.indexOf(e.path)||!e.meta.requiresAuth?(document.title=Ce(e.meta.title||e.name),e.name&&e.meta.statistics&&await Ae.dispatch("favorite/access",{name:e.name,link:e.path}),n()):n(`/login?redirect=${e.path}`)}));const De=N(se),Ne=V({scriptUrl:"//at.alicdn.com/t/font_1621893_xd2ds9wt5hf.js"});H.config({duration:2,maxCount:3}),De.config.globalProperties.$axios=xe,De.config.globalProperties.$msg=H,De.use(Ae).use(je).component("IconFont",Ne),De.mount("#app");export{ve as t};
