var e=Object.defineProperty,t=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,n=(e,n,a)=>(t(e,"symbol"!=typeof n?n+"":n,a),a);import{r as a,v as i,n as o,d as s,z as r,L as m,C as l,B as c,R as d,M as u,a as g,o as h,c as p,w as f,b as _,e as y,f as k,T as b,g as v,p as w,h as E,i as T,j as L,k as I,l as R,m as A,q as S,s as x,t as D,u as P,x as j,y as C,A as O,D as V}from"./vendor.18d196da.js";const z=function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}};function N(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a}=e;let s,r;if("serviceWorker"in navigator){s=new i("/sw.js",{scope:"/"}),s.addEventListener("activated",(e=>{e.isUpdate||null==a||a()}));{const e=()=>{null==n||n()};s.addEventListener("waiting",e),s.addEventListener("externalwaiting",e)}s.register({immediate:t}).then((e=>r=e))}return async(e=!0)=>{e&&(null==s||s.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()}))),r&&r.waiting&&await o(r.waiting,{type:"SKIP_WAITING"})}}function H(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:i}=e,o=a(!1),s=a(!1);return{updateServiceWorker:N({immediate:t,onNeedRefresh(){o.value=!0,null==n||n()},onOfflineReady(){s.value=!0,null==i||i()}}),offlineReady:s,needRefresh:o}}z();var F='@charset "UTF-8";\n:root {\n  --main-bg-color: #f4f8fb;\n  --global-font-size: 62.5%;\n  --global-mobile-font-size: 45%;\n}\n/*字号统一控制*/\nhtml {\n  font-size: var(--global-font-size);\n}\n@media screen and (max-width: 480px) {\nhtml {\n    font-size: var(--global-mobile-font-size);\n}\n}\n/*滚动条样式*/\n::-webkit-scrollbar {\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: rgba(249, 249, 249, 0.98);\n}\n/*定义滚动条轨道 内阴影+圆角*/\n::-webkit-scrollbar-track {\n  width: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(248, 255, 111, 0);\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0);\n}\n/*定义滑块 内阴影+圆角*/\n::-webkit-scrollbar-thumb {\n  z-index: 100;\n  border-radius: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(246, 246, 246, 0.76);\n  background-color: #d2d4d6;\n}\nhtml, body, #app {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#app {\n  font-variant-numeric: tabular-nums;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: Lora, "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  color: #333333;\n  background: var(--main-bg-color);\n}\n#app pre,\n#app code, #app kbd, #app samp {\n  font-family: JetBrains Mono, monospace;\n}\n.i-icon {\n  line-height: 0;\n}',q=".ant-layout[data-v-6fe1dbe4] {\n  background: transparent;\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  overflow: hidden;\n}\n.ant-layout-header[data-v-6fe1dbe4], .ant-layout-layout[data-v-6fe1dbe4], .ant-layout-footer[data-v-6fe1dbe4] {\n  background: transparent;\n}\n.ant-layout-header[data-v-6fe1dbe4] {\n  padding: 1.6rem 0 0.8rem;\n  text-align: center;\n  height: 8.4rem;\n  line-height: unset;\n}\n.ant-layout-header .header[data-v-6fe1dbe4] {\n  height: 3.2rem;\n  line-height: 3.2rem;\n  font-size: 2.4rem;\n  color: #333333;\n  font-weight: 600;\n}\n.ant-layout-header .header a[data-v-6fe1dbe4] {\n  color: #333333;\n}\n.ant-layout-header .desc[data-v-6fe1dbe4] {\n  height: 2.2rem;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  margin-top: 0.8rem;\n  color: #999999;\n}\n.ant-layout-content[data-v-6fe1dbe4] {\n  max-width: 180rem;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 1.6rem 1.6rem;\n  overflow-y: auto;\n}\n.ant-layout-footer[data-v-6fe1dbe4] {\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  padding: 0.8rem 0;\n  height: 6rem;\n  text-align: center;\n}\n.ant-layout-footer *[data-v-6fe1dbe4] {\n  height: 2.2rem;\n}",B=(e,t)=>{for(const[n,a]of t)e[n]=a;return e};const{offlineReady:$,needRefresh:M,updateServiceWorker:U}=H(),{Header:G,Content:Y,Footer:Z}=m,{Link:J}=b,Q=s({data:()=>({locale:r,offlineReady:$,needRefresh:M}),components:{Layout:m,Header:G,Content:Y,Footer:Z,ConfigProvider:l,BackTop:c,Link:J,Return:d},watch:{offlineReady:function(e){e&&this.$msg.success("离线使用已准备好~")},needRefresh:function(e){e&&u.info({title:"存在新内容，请点击 重载 更新~",closable:!0,okText:"重载",maskClosable:!0,onOk(){U()}})}},methods:{getPopupContainer:e=>e?e.parentNode:document.body}}),W=e=>(w("data-v-6fe1dbe4"),e=e(),E(),e),K={class:"header"},X=v("ISZY工具集合"),ee={key:0,class:"desc"},te={key:1,class:"desc"},ne=v("返回首页"),ae=W((()=>y("span",null,"© 2021 ",-1))),ie=v(" 随遇而安Blog "),oe=W((()=>y("br",null,null,-1))),se=v(" 苏ICP备18047890号-2 ");function re(e,t,n,a,i,o){const s=g("router-link"),r=g("return"),m=g("Header"),l=g("BackTop"),c=g("router-view"),d=g("Content"),u=g("Link"),b=g("Footer"),v=g("Layout"),w=g("config-provider");return h(),p(w,{locale:e.locale,getPopupContainer:e.getPopupContainer},{default:f((()=>[_(v,null,{default:f((()=>[_(m,null,{default:f((()=>[y("div",K,[_(s,{to:"/"},{default:f((()=>[X])),_:1})]),"/"===e.$route.path?(h(),k("div",ee,"一个轻量的工具集合")):(h(),k("div",te,[_(s,{to:"/"},{default:f((()=>[_(r,{theme:"outline"}),ne])),_:1})]))])),_:1}),_(d,{ref:"view"},{default:f((()=>[_(l,{target:()=>e.$refs.view.$el,visibilityHeight:100},null,8,["target"]),_(c)])),_:1},512),_(b,null,{default:f((()=>[ae,_(u,{href:"https://www.iszy.cc",target:"_blank"},{default:f((()=>[ie])),_:1}),oe,_(u,{href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_blank"},{default:f((()=>[se])),_:1})])),_:1})])),_:1})])),_:1},8,["locale","getPopupContainer"])}var me=B(Q,[["render",re],["__scopeId","data-v-6fe1dbe4"]]);const le="modulepreload",ce={},de="/",ue=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in ce)return;ce[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":le,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var ge={login:()=>ue((()=>import("./index.56a1e365.js")),["assets/index.56a1e365.js","assets/index.6a7a0a0c.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),imgHosting:()=>ue((()=>import("./imgHosting.10e2211f.js")),["assets/imgHosting.10e2211f.js","assets/imgHosting.90cfcb9d.css","assets/index.c64f5e8c.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),uuid:()=>ue((()=>import("./uuid.e4a03fa8.js")),["assets/uuid.e4a03fa8.js","assets/uuid.b58a557b.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.5580ceba.css","assets/index.28f6fdd0.css","assets/index.fd6e2063.css","assets/index.290a9536.css","assets/index.f885c713.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),mtqLoans:()=>ue((()=>import("./mtqLoans.e6bfd843.js")),["assets/mtqLoans.e6bfd843.js","assets/mtqLoans.e74004f7.css","assets/index.ccc15a38.css","assets/index.d5ecd051.css","assets/index.eb531402.css","assets/index.28f6fdd0.css","assets/index.a361a67d.css","assets/index.414482b4.css","assets/index.e2b8fdb7.css","assets/index.74580095.css","assets/index.4ca0d3d7.css","assets/index.5580ceba.css","assets/index.b56b905d.css","assets/index.eb724f65.css","assets/index.f885c713.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),timeCompute:()=>ue((()=>import("./timeCompute.c1767765.js")),["assets/timeCompute.c1767765.js","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.b56b905d.css","assets/index.eb724f65.css","assets/index.5580ceba.css","assets/index.28f6fdd0.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),colorTransform:()=>ue((()=>import("./colorTransform.86c19478.js")),["assets/colorTransform.86c19478.js","assets/vue-color.esm.879073eb.js","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),jsonEditor:()=>ue((()=>import("./jsonEditor.80dd6033.js")),["assets/jsonEditor.80dd6033.js","assets/jsonEditor.9e2f540b.css","assets/index.cd256673.css","assets/index.414482b4.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/jsoneditor.min.87ee7f55.js","assets/jsoneditor.min.333d03ee.css","assets/createFile.9c121861.js"]),settings:()=>ue((()=>import("./index.9c6089eb.js")),["assets/index.9c6089eb.js","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/index.414482b4.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),whatAnimeIsThis:()=>ue((()=>import("./whatAnimeIsThis.c5c39af9.js")),["assets/whatAnimeIsThis.c5c39af9.js","assets/whatAnimeIsThis.0518a789.css","assets/index.a133afbf.css","assets/index.f885c713.css","assets/index.5b179dc2.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),bilibiliBv2av:()=>ue((()=>import("./bilibiliBv2av.a8524f35.js")),["assets/bilibiliBv2av.a8524f35.js","assets/bilibiliBv2av.b32660ce.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.fd6e2063.css","assets/index.cd256673.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),oreooo:()=>ue((()=>import("./index.10630c4f.js")),["assets/index.10630c4f.js","assets/index.98a2a291.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),2048:()=>ue((()=>import("./index.1ea68130.js")),["assets/index.1ea68130.js","assets/index.ab651cec.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),urlEncode:()=>ue((()=>import("./urlEncode.b2b89c13.js")),["assets/urlEncode.b2b89c13.js","assets/urlEncode.9f15cd91.css","assets/index.cd256673.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),tetris:()=>ue((()=>import("./index.3df526cf.js")),["assets/index.3df526cf.js","assets/index.d69837cc.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),viewSourceCode:()=>ue((()=>import("./viewSourceCode.dbde78d4.js")),["assets/viewSourceCode.dbde78d4.js","assets/viewSourceCode.ffa04fc8.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/index.5527443f.js"]),cssFormatter:()=>ue((()=>import("./cssFormatter.04339db7.js")),["assets/cssFormatter.04339db7.js","assets/cssFormatter.09cfb18f.css","assets/index.f885c713.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/index.5527443f.js"]),geoJson:()=>ue((()=>import("./geoJson.035d3885.js")),["assets/geoJson.035d3885.js","assets/geoJson.95adf479.css","assets/index.c64f5e8c.css","assets/index.eb531402.css","assets/index.28f6fdd0.css","assets/index.a361a67d.css","assets/index.414482b4.css","assets/index.e2b8fdb7.css","assets/index.74580095.css","assets/index.4ca0d3d7.css","assets/index.5580ceba.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/leaflet.ChineseLayer.b8f3e177.js","assets/leaflet.ChineseLayer.80e2805b.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/jsoneditor.min.87ee7f55.js","assets/jsoneditor.min.333d03ee.css"]),latLng:()=>ue((()=>import("./latLng.cec3badb.js")),["assets/latLng.cec3badb.js","assets/latLng.c5e07b62.css","assets/index.cd256673.css","assets/leaflet.ChineseLayer.b8f3e177.js","assets/leaflet.ChineseLayer.80e2805b.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),tinyEditor:()=>ue((()=>import("./tinyEditor.f4b6b163.js")),["assets/tinyEditor.f4b6b163.js","assets/tinyEditor.2a000628.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),idChinese:()=>ue((()=>import("./idChinese.0fdfc508.js")),["assets/idChinese.0fdfc508.js","assets/idChinese.b0148a0e.css","assets/index.f885c713.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),cesiumDemo:()=>ue((()=>import("./cesiumDemo.8b195c58.js")),["assets/cesiumDemo.8b195c58.js","assets/cesiumDemo.dc8ac956.css","assets/index.ccc15a38.css","assets/index.5206647d.css","assets/index.c64f5e8c.css","assets/index.e2b8fdb7.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),screenRecord:()=>ue((()=>import("./screenRecord.8edc9009.js")),["assets/screenRecord.8edc9009.js","assets/screenRecord.8b69fd67.css","assets/index.cd256673.css","assets/index.f885c713.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.5580ceba.css","assets/index.28f6fdd0.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),anyRule:()=>ue((()=>import("./anyRule.9c4b3e14.js")),["assets/anyRule.9c4b3e14.js","assets/anyRule.4cef944b.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.f885c713.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),linuxCommand:()=>ue((()=>import("./linuxCommand.7fa74600.js")),["assets/linuxCommand.7fa74600.js","assets/linuxCommand.92c91aad.css","assets/index.f885c713.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/container.5ad8adce.js","assets/container.25a00a02.css"]),watermark:()=>ue((()=>import("./watermark.fe817781.js")),["assets/watermark.fe817781.js","assets/watermark.2d14b3be.css","assets/index.a133afbf.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css","assets/vue-color.esm.879073eb.js","assets/createFile.9c121861.js"]),userAgent:()=>ue((()=>import("./userAgent.78d10703.js")),["assets/userAgent.78d10703.js","assets/index.f885c713.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),webssh:()=>ue((()=>import("./webssh.3b743dbb.js")),["assets/webssh.3b743dbb.js","assets/webssh.81ad0fc9.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),cdnQuery:()=>ue((()=>import("./cdnQuery.dab8f8d9.js")),["assets/cdnQuery.dab8f8d9.js","assets/cdnQuery.5d033dc1.css","assets/index.f885c713.css","assets/index.28f6fdd0.css","assets/index.74580095.css","assets/index.4ca0d3d7.css","assets/index.5580ceba.css","assets/index.ccc15a38.css","assets/index.eb724f65.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),relationship:()=>ue((()=>import("./relationship.b74d5c0f.js")),["assets/relationship.b74d5c0f.js","assets/relationship.aa7efbb5.css","assets/index.a361a67d.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/index.cd256673.css","assets/index.f885c713.css","assets/container.5ad8adce.js","assets/container.25a00a02.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"])},he=[{type:"其他",icon:"all-application",children:[{name:"淘宝优惠券精选",link:"https://taobao.iszy.xyz"},{name:"这是什么动漫",link:"/others/whatAnimeIsThis"},{name:"哔哩哔哩AV、BV号转换",link:"/others/bilibiliBv2av"},{name:"奥利奥生成器",link:"/others/oreooo"},{name:"身份证解析",link:"/others/idChinese",legend:"新功能"},{name:"屏幕录制",link:"/others/screenRecord",legend:"新功能"},{name:"WebSSH",link:"/others/webssh",legend:"新功能"},{name:"亲戚关系计算器",link:"/others/relationship",legend:"新功能"},{name:"极简图床",link:"/others/imgHosting"},{name:"资源包",link:"https://lib.iszy.xyz"}]},{type:"地图",icon:"map-draw",children:[{name:"地图选择器",link:"https://datav.aliyun.com/tools/atlas/index.html"},{name:"GeoJSON",link:"/gis/geoJson"},{name:"经纬度查询",link:"/gis/latLng"},{name:"Cesium代码样例",link:"/gis/cesiumDemo"}]},{type:"图片相关",icon:"picture-one",children:[{name:"图片加水印",link:"/image/watermark",legend:"新功能"}]},{type:"编程开发",icon:"code",children:[{name:"时间计算",link:"/program/timeCompute"},{name:"颜色转换",link:"/program/colorTransform"},{name:"UUID在线生成",link:"/program/uuid"},{name:"JSON编辑器",link:"/program/jsonEditor"},{name:"URL编码/解码",link:"/program/urlEncode"},{name:"查看网页源码",link:"/program/viewSourceCode"},{name:"CSS格式化/压缩",link:"/program/cssFormatter"},{name:"TinyEditor",link:"/program/tinyEditor"},{name:"正则大全",link:"/program/anyRule"},{name:"Linux命令查询",link:"/program/linuxCommand"},{name:"UserAgent解析",link:"/program/userAgent",legend:"新功能"},{name:"前端CDN搜索",link:"/program/cdnQuery",legend:"新功能"}]},{type:"小游戏",icon:"game",children:[{name:"2048",link:"/games/2048"},{name:"俄罗斯方块",link:"/games/tetris"}]},{type:"理财",icon:"financing-one",children:[{name:"多次提前还贷计算器",link:"/money/mtqLoans"}]},{type:"网站相关",icon:"setting-two",children:[{name:"网站设置",link:"/settings",statistics:!1},{name:"留言反馈",link:"https://github.com/ZvonimirSun/iszy-tools/discussions"}]}],pe=[],fe={namespaced:!0,state:()=>({settings:{showMost:!1,showRecent:!1,showSearch:!0,showType:!0,openInNewTab:!1}}),mutations:{triggerMost(e){e.settings.showMost=!e.settings.showMost},triggerRecent(e){e.settings.showRecent=!e.settings.showRecent},triggerSearch(e){e.settings.showSearch=!e.settings.showSearch},triggerType(e){e.settings.showType=!e.settings.showType},triggerNewTab(e){e.settings.openInNewTab=!e.settings.openInNewTab}},actions:{triggerMost({commit:e}){e("triggerMost")},triggerRecent({commit:e}){e("triggerRecent")},triggerSearch({commit:e}){e("triggerSearch")},triggerType({commit:e}){e("triggerType")},triggerNewTab({commit:e}){e("triggerNewTab")}}},_e={namespaced:!0,state:()=>({favorite:[],statistics:[]}),getters:{isFav:e=>t=>e.favorite.filter((e=>e.name===t)).length>0,recent:e=>[...e.statistics].sort((function(e,t){return t.lastAccessTime-e.lastAccessTime})).slice(0,3),most:e=>[...e.statistics].sort((function(e,t){return t.times-e.times})).slice(0,3)},mutations:{updateFav(e,{name:t,link:n,add:a}){if(a){const a=e.favorite.filter((e=>e.name===t));a.length>0?a[0].link=n:e.favorite.push({name:t,link:n})}else e.favorite=e.favorite.filter((e=>e.name!==t))},access(e,{name:t,link:n}){if(Array.isArray(e.statistics)){const a=e.statistics.filter((e=>e.name===t));a.length>0?(a[0].times++,a[0].lastAccessTime=(new Date).getTime(),a[0].link=n):e.statistics.push({name:t,link:n,times:1,lastAccessTime:(new Date).getTime()})}else e.statistics=[{name:t,link:n,times:1,lastAccessTime:(new Date).getTime()}]},clearHistory(e){e.statistics=[]},updateHistory(e,{name:t,link:n}){const a=e.statistics.filter((e=>e.name===t));a.length>0&&(a[0].link=n)},removeHistory(e,{name:t}){e.statistics=e.statistics.filter((e=>e.name!==t))}},actions:{addFav({commit:e},{name:t,link:n}){e("updateFav",{name:t,link:n,add:!0})},removeFav({commit:e},{name:t}){e("updateFav",{name:t})},access({commit:e},{name:t,link:n}){e("access",{name:t,link:n})},clearHistory({commit:e}){e("clearHistory")},updateHistory({commit:e},{name:t,link:n}){e("updateHistory",{name:t,link:n})},removeHistory({commit:e},{name:t}){e("removeHistory",{name:t})},fixFavorite({dispatch:e,state:t,getters:n}){const a=T([...he||[]].map((e=>e.children)));for(const i of t.favorite){const t=a.filter((e=>e.name===i.name));0===t.length?e("removeFav",{name:i.name}):t[0].link!==i.link&&e("addFav",{name:i.name,link:t[0].link})}for(const i of t.statistics){const t=a.filter((e=>e.name===i.name));0===t.length?e("removeHistory",{name:i.name}):t[0].link!==i.link&&e("updateHistory",{name:i.name,link:t[0].link})}}}},ye={namespaced:!0,state:()=>({bestScore:0,gameState:void 0}),mutations:{setBestScore(e,t){e.bestScore=t},setGameState(e,t){e.gameState=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)},setGameState({commit:e},t){e("setGameState",t||{})},clearGameState({commit:e}){e("setGameState",void 0)}}},ke={namespaced:!0,state:()=>({bestScore:0}),mutations:{setBestScore(e,t){e.bestScore=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)}}};const be=L.create();be.CancelToken=L.CancelToken,be.interceptors.request.use((e=>(Re.state.user.token&&e.url.includes("https://api.iszy.xyz")&&(e.headers.Authorization="Bearer "+Re.state.user.token),e)));var ve={namespaced:!0,state:()=>({token:null}),mutations:{setToken(e,t){e.token=t},clearToken(e){e.token=null}},actions:{async login({commit:e},{userName:t,password:n}){try{if(null!=t&&null!=n){const a=await be.post("https://api.iszy.xyz/auth/login",{userName:t.trim(),password:n});return a.data&&200===a.data.code?(e("setToken",a.data.data.token),!0):(e("clearToken"),!1)}return!1}catch(a){return e("clearToken"),!1}}}},we={namespaced:!0,state:()=>({data:{},time:void 0}),mutations:{setData(e,t){e.data=t,e.time=I().format()}},actions:{async getData({commit:e}){try{e("setData",(await this.$axios.get("https://cdn.jsdelivr.net/gh/jaywcjlove/linux-command@1.8.1/dist/data.min.json")).data)}catch(t){this.$msg.warn("获取Linux命令数据失败")}}}},Ee={namespaced:!0,state:()=>({data:{}}),getters:{getData:e=>t=>t?(e.data||{})[t]:void 0},mutations:{setData(e,{key:t,val:n}){t&&(e.data=e.data||{},e.data[t]=n)},clear(e){e.data={}}},actions:{setData({commit:e},t){e("setData",t)},clear({commit:e}){e("clear")}}},Te={namespaced:!0,state:()=>({uploader:"",imgList:[],configs:{},commonConfig:{renameTimeStamp:!0}}),getters:{config:e=>t=>e.configs[t]},mutations:{saveConfig(e,{uploader:t,config:n}){t&&(e.uploader=t,e.configs[t]=n)},saveCommonConfig(e,t){e.commonConfig=R(t)},addImage(e,{name:t,url:n}){t&&n&&e.imgList.unshift({name:t,url:n,id:A()})},removeImage(e,{id:t}){for(const n in e.imgList||[])e.imgList[n].id===t&&e.imgList.splice(parseInt(n),1)}},actions:{saveConfig({commit:e},t){e("saveConfig",t)},saveCommonConfig({commit:e},t){e("saveCommonConfig",t)},addImage({commit:e},t){e("addImage",t)},removeImage({commit:e},t){e("removeImage",t)}}};class Le{constructor(){n(this,"_queue",[]),n(this,"_flushing",!1)}enqueue(e){return this._queue.push(e),this._flushing?Promise.resolve():this._flushQueue()}_flushQueue(){this._flushing=!0;const e=()=>{const t=this._queue.shift();if(t)return t.then(e);this._flushing=!1};return Promise.resolve(e())}}var Ie=(e={})=>{const t=null!=e.name?e.name:"vuex",n=null!=e.storeName?e.storeName:"keyvaluepairs";S.config({name:t,storeName:n});const a=new Le,i=e.filter||(()=>!0),o=e=>S.getItem(e),s=(e,t)=>S.setItem(e,R(t));return e=>{const t=e;e.restored=(async()=>{const e=Object.keys(t._modulesNamespaceMap).map((e=>e.slice(0,-1))),n=x({},t.state,await o("root"));for(const t of e)n[t]=x({},n[t],await o(t));n&&t.replaceState(n),t.subscribe(((t,n)=>{if(i(t)){const i=t.type.split("/");i.length<=1?a.enqueue(s("root",D(n,e))):a.enqueue(s(i[0],n[i[0]]))}}))})()}},Re=P({modules:{settings:fe,favorite:_e,g2048:ye,tetris:ke,user:ve,linuxCommand:we,cache:Ee,imgHosting:Te},plugins:[Ie({name:"iszy_tools",storeName:"state"})]});let Ae=[{path:"/",name:"ISZY工具集合",component:()=>ue((()=>import("./Home.05e39f6d.js")),["assets/Home.05e39f6d.js","assets/Home.a5847ba1.css","assets/index.ccc15a38.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"])}];for(const Ve of he)if(Array.isArray(Ve.children)&&Ve.children.length>0)for(const e of Ve.children)if(!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(e.link)&&0===Ae.filter((t=>t.name===e.name)).length){const t=(Ve.link||"")+(e.link||""),n=t.match("[^/]+(?!.*/)");n.length>0&&ge[n[0]]&&Ae.push({path:t,name:e.name,component:ge[n[0]],meta:{statistics:!1!==e.statistics,layout:e.layout}})}for(const Ve of pe){const e=Ve.link.match("[^/]+(?!.*/)");Ae.push({path:Ve.link,name:Ve.name,component:ge[e[0]],meta:{statistics:!1,layout:Ve.layout}})}Ae=Ae.concat([{path:"/login",name:"登录",component:()=>ue((()=>import("./index.56a1e365.js")),["assets/index.56a1e365.js","assets/index.6a7a0a0c.css","assets/index.d5ecd051.css","assets/index.ccc15a38.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),meta:{title:"ISZY 工具集合"}},{path:"/404",name:"404",component:()=>ue((()=>import("./404.e3c38f98.js")),["assets/404.e3c38f98.js","assets/404.389992f4.css","assets/vendor.18d196da.js","assets/vendor.6b12421d.css"]),hidden:!0},{path:"/401",name:"401",redirect:"/login",hidden:!0},{path:"/redirect",name:"redirect",beforeEnter(e,t,n){e.query.url?window.location.href=e.query.url:n("/")},hidden:!0},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}]);const Se=j({history:C("/"),routes:Ae}),xe=["/login","/auth-redirect"];function De(e){return e&&"ISZY工具集合"!==e?`${e} - ISZY工具集合`:"ISZY工具集合"}Se.beforeEach((async(e,t,n)=>{await Re.restored;Re.getters.currentUser||-1!==xe.indexOf(e.path)||!e.meta.requiresAuth?(document.title=De(e.meta.title||e.name),e.name&&e.meta.statistics&&await Re.dispatch("favorite/access",{name:e.name,link:e.path}),n()):n(`/login?redirect=${e.path}`)}));const Pe={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},je={mounted(e,t){}};var Ce={install:e=>{e.directive("span",je)}};const Oe=O(me);V.config({duration:2,maxCount:3}),Oe.config.globalProperties.$axios=be,Oe.config.globalProperties.$msg=V,Re.$axios=be,Re.$msg=V,Oe.use(Re).use(Se).use(Ce),Oe.mount("#app");export{B as _,ue as a,he as t};
