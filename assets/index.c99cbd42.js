import{p as e,a as t,z as n,L as a,C as o,B as i,r,o as s,c as m,b as c,T as l,w as d,d as p,l as g,e as h,f,g as u,h as _,i as v,j as b,k,m as y}from"./vendor.8de19cf0.js";const w=function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),o(m)},onload(){n(self[t].moduleMap[r]),o(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}};w("/assets/");var E='@charset "UTF-8";\n/*字号统一控制*/\nhtml {\n  font-size: 62.5%;\n}\n/*滚动条样式*/\n::-webkit-scrollbar {\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: rgba(249, 249, 249, 0.98);\n}\n/*定义滚动条轨道 内阴影+圆角*/\n::-webkit-scrollbar-track {\n  width: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(248, 255, 111, 0);\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0);\n}\n/*定义滑块 内阴影+圆角*/\n::-webkit-scrollbar-thumb {\n  z-index: 100;\n  border-radius: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(246, 246, 246, 0.76);\n  background-color: #d2d4d6;\n}\nhtml, body, #app {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#app {\n  font-variant-numeric: tabular-nums;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: Lora, "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  color: #333333;\n  background: #f4f8fb;\n}\n#app pre,\n#app code, #app kbd, #app samp {\n  font-family: JetBrains Mono, monospace;\n}',T=".ant-layout[data-v-6ff951e7] {\n  background: transparent;\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  overflow: hidden;\n}\n.ant-layout-header[data-v-6ff951e7], .ant-layout-layout[data-v-6ff951e7], .ant-layout-footer[data-v-6ff951e7] {\n  background: transparent;\n}\n.ant-layout-header[data-v-6ff951e7] {\n  padding: 3.2rem 0 2.4rem;\n  text-align: center;\n  height: 13.4rem;\n  line-height: unset;\n}\n.ant-layout-header .header[data-v-6ff951e7] {\n  height: 4.6rem;\n  line-height: 4.6rem;\n  font-size: 3.8rem;\n  color: #333333;\n  font-weight: 600;\n}\n.ant-layout-header .header a[data-v-6ff951e7] {\n  color: #333333;\n}\n.ant-layout-header .desc[data-v-6ff951e7] {\n  height: 2.2rem;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  margin-top: 1.2rem;\n  color: #999999;\n}\n.ant-layout-content[data-v-6ff951e7] {\n  max-width: 120rem;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem 1.6rem;\n  overflow-y: auto;\n}\n.ant-layout-footer[data-v-6ff951e7] {\n  height: 7rem;\n  text-align: center;\n}";const{Header:L,Content:I,Footer:A}=a,{Link:S}=l,j={data:()=>({locale:n}),components:{Layout:a,Header:L,Content:I,Footer:A,ConfigProvider:o,BackTop:i,Link:S},methods:{getPopupContainer:e=>e?e.parentNode:document.body}},R=d();e("data-v-6ff951e7");const P={class:"header"},x=p("ISZY工具集合"),O=c("div",{class:"desc"},"一个轻量的工具集合",-1),C=c("span",null,"© 2021 ",-1),D=p(" 随遇而安Blog "),H=c("br",null,null,-1),V=p(" 苏ICP备18047890号-2 ");t();const F=R(((e,t,n,a,o,i)=>{const l=r("router-link"),d=r("Header"),p=r("BackTop"),g=r("router-view"),h=r("Content"),f=r("Link"),u=r("Footer"),_=r("Layout"),v=r("config-provider");return s(),m(v,{locale:e.locale,getPopupContainer:i.getPopupContainer},{default:R((()=>[c(_,null,{default:R((()=>[c(d,null,{default:R((()=>[c("div",P,[c(l,{to:"/"},{default:R((()=>[x])),_:1})]),O])),_:1}),c(h,{ref:"view"},{default:R((()=>[c(p,{target:()=>e.$refs.view.$el,visibilityHeight:100},null,8,["target"]),c(g)])),_:1},512),c(u,null,{default:R((()=>[C,c(f,{href:"https://www.iszy.cc",target:"_blank"},{default:R((()=>[D])),_:1}),H,c(f,{href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_blank"},{default:R((()=>[V])),_:1})])),_:1})])),_:1})])),_:1},8,["locale","getPopupContainer"])}));let z;j.render=F,j.__scopeId="data-v-6ff951e7";const M={},B=function(e,t){if(!t)return e();if(void 0===z){const e=document.createElement("link").relList;z=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in M)return;M[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":z,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};var $={login:()=>B((()=>__import__("./index.4f396d71.js")),["/assets/index.4f396d71.js","/assets/index.891788b1.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),imgHosting:()=>B((()=>__import__("./imgHosting.c0106d35.js")),["/assets/imgHosting.c0106d35.js","/assets/imgHosting.59d4552d.css","/assets/index.1800f0a6.css","/assets/index.9aaefc65.css","/assets/index.7538a265.css","/assets/index.568ce6f4.css","/assets/index.828b5239.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),uuid:()=>B((()=>__import__("./uuid.381e3304.js")),["/assets/uuid.381e3304.js","/assets/uuid.9194a4ee.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.7538a265.css","/assets/index.44d7ddd0.css","/assets/index.568ce6f4.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),mtqLoans:()=>B((()=>__import__("./mtqLoans.4e6cdb0d.js")),["/assets/mtqLoans.4e6cdb0d.js","/assets/mtqLoans.b5520493.css","/assets/index.1800f0a6.css","/assets/index.9aaefc65.css","/assets/index.7538a265.css","/assets/index.b87fca9a.css","/assets/index.316f411b.css","/assets/index.568ce6f4.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css"]),timeCompute:()=>B((()=>__import__("./timeCompute.df32665a.js")),["/assets/timeCompute.df32665a.js","/assets/timeCompute.9439d3d2.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.316f411b.css","/assets/index.7538a265.css","/assets/index.568ce6f4.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css"]),colorTransform:()=>B((()=>__import__("./colorTransform.c19d4fd1.js")),["/assets/colorTransform.c19d4fd1.js","/assets/timeCompute.9439d3d2.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css"]),jsonEditor:()=>B((()=>__import__("./jsonEditor.7d446977.js")),["/assets/jsonEditor.7d446977.js","/assets/jsonEditor.f2c44afd.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css"]),settings:()=>B((()=>__import__("./index.c913e0c4.js")),["/assets/index.c913e0c4.js","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/index.b87fca9a.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css"]),whatAnimeIsThis:()=>B((()=>__import__("./whatAnimeIsThis.fdf24ca7.js")),["/assets/whatAnimeIsThis.fdf24ca7.js","/assets/whatAnimeIsThis.925500ed.css","/assets/index.828b5239.css","/assets/index.568ce6f4.css","/assets/index.1800f0a6.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),bilibiliBv2av:()=>B((()=>__import__("./bilibiliBv2av.b5f9617d.js")),["/assets/bilibiliBv2av.b5f9617d.js","/assets/bilibiliBv2av.cd471374.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.44d7ddd0.css","/assets/index.87718197.css","/assets/index.568ce6f4.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),oreooo:()=>B((()=>__import__("./index.0d1bde65.js")),["/assets/index.0d1bde65.js","/assets/index.ac5d92fb.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),2048:()=>B((()=>__import__("./index.3d5a3598.js")),["/assets/index.3d5a3598.js","/assets/index.0c7abd86.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),urlEncode:()=>B((()=>__import__("./urlEncode.0d5f5d3b.js")),["/assets/urlEncode.0d5f5d3b.js","/assets/urlEncode.33049452.css","/assets/index.87718197.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/container.e2e797af.js","/assets/container.10d153c5.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"])},U=[{type:"其他",icon:"icon-t-stack-fill",children:[{name:"淘宝优惠券精选",link:"https://taobao.iszy.xyz",legend:"外部"},{name:"这是什么动漫",link:"/anime/whatAnimeIsThis",legend:"在线"},{name:"哔哩哔哩AV、BV号转换",link:"/anime/bilibiliBv2av"},{name:"奥利奥生成器",link:"/others/oreooo"},{name:"资源包",link:"https://lib.iszy.xyz",legend:"外部"}]},{type:"编程开发",icon:"icon-t-code",children:[{name:"时间计算",link:"/program/timeCompute"},{name:"颜色转换",link:"/program/colorTransform"},{name:"UUID在线生成",link:"/program/uuid"},{name:"JSON编辑器",link:"/program/jsonEditor"},{name:"URL编码/解码",link:"/program/urlEncode",legend:"新功能"}]},{type:"游戏",icon:"icon-t-game",children:[{name:"2048",link:"/games/2048"}]},{type:"理财",icon:"icon-t-licai",children:[{name:"多次提前还贷计算器",link:"/money/mtqLoans"}]},{type:"网站相关",icon:"icon-t-settings",children:[{name:"网站设置",link:"/settings",statistics:!1}]}],N={namespaced:!0,state:()=>({settings:{showMost:!0,showRecent:!1,showSearch:!0,showType:!0,openInNewTab:!1}}),mutations:{triggerMost(e){e.settings.showMost=!e.settings.showMost},triggerRecent(e){e.settings.showRecent=!e.settings.showRecent},triggerSearch(e){e.settings.showSearch=!e.settings.showSearch},triggerType(e){e.settings.showType=!e.settings.showType},triggerNewTab(e){e.settings.openInNewTab=!e.settings.openInNewTab}},actions:{triggerMost({commit:e}){e("triggerMost")},triggerRecent({commit:e}){e("triggerRecent")},triggerSearch({commit:e}){e("triggerSearch")},triggerType({commit:e}){e("triggerType")},triggerNewTab({commit:e}){e("triggerNewTab")}}},q={namespaced:!0,state:()=>({favorite:[],statistics:[]}),getters:{isFav:e=>t=>e.favorite.filter((e=>e.name===t)).length>0,recent:e=>[...e.statistics].sort((function(e,t){return t.lastAccessTime-e.lastAccessTime})).slice(0,3),most:e=>[...e.statistics].sort((function(e,t){return t.times-e.times})).slice(0,3)},mutations:{updateFav(e,{name:t,link:n,add:a}){if(a){const a=e.favorite.filter((e=>e.name===t));a.length>0?a[0].link=n:e.favorite.push({name:t,link:n})}else e.favorite=e.favorite.filter((e=>e.name!==t))},access(e,{name:t,link:n}){if(Array.isArray(e.statistics)){const a=e.statistics.filter((e=>e.name===t));a.length>0?(a[0].times++,a[0].lastAccessTime=(new Date).getTime(),a[0].link=n):e.statistics.push({name:t,link:n,times:1,lastAccessTime:(new Date).getTime()})}else e.statistics=[{name:t,link:n,times:1,lastAccessTime:(new Date).getTime()}]},clearHistory(e){e.statistics=[]},updateHistory(e,{name:t,link:n}){const a=e.statistics.filter((e=>e.name===t));a.length>0&&(a[0].link=n)},removeHistory(e,{name:t}){e.statistics=e.statistics.filter((e=>e.name!==t))}},actions:{addFav({commit:e},{name:t,link:n}){e("updateFav",{name:t,link:n,add:!0})},removeFav({commit:e},{name:t}){e("updateFav",{name:t})},access({commit:e},{name:t,link:n}){e("access",{name:t,link:n})},clearHistory({commit:e}){e("clearHistory")},updateHistory({commit:e},{name:t,link:n}){e("updateHistory",{name:t,link:n})},removeHistory({commit:e},{name:t}){e("removeHistory",{name:t})},fixFavorite({dispatch:e,state:t,getters:n}){const a=g.exports.flatten([...U||[]].map((e=>e.children)));for(const o of t.favorite){const t=a.filter((e=>e.name===o.name));0===t.length?e("removeFav",{name:o.name}):t[0].link!==o.link&&e("addFav",{name:o.name,link:t[0].link})}for(const o of t.statistics){const t=a.filter((e=>e.name===o.name));0===t.length?e("removeHistory",{name:o.name}):t[0].link!==o.link&&e("updateHistory",{name:o.name,link:t[0].link})}}}},Y={namespaced:!0,state:()=>({content:void 0}),mutations:{saveContent(e,t){e.content=t}},actions:{saveContent({commit:e},t){e("saveContent",t)}}},Z={namespaced:!0,state:()=>({bestScore:0,gameState:void 0}),mutations:{setBestScore(e,t){e.bestScore=t},setGameState(e,t){e.gameState=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)},setGameState({commit:e},t){e("setGameState",t||{})},clearGameState({commit:e}){e("setGameState",void 0)}}},G=(e={})=>{h.config(e);const t=async e=>await h.getItem(e),n=(e,t)=>h.setItem(e,g.exports.cloneDeep(t));return async e=>{const a=Object.keys(e._modulesNamespaceMap).map((e=>e.slice(0,-1))),o=g.exports.merge({},e.state,await t("root"));for(const n of a)o[n]=g.exports.merge({},o[n],await t(n));o&&e.replaceState(o),e.subscribe(((e,t)=>{const o=e.type.split("/");o.length<=1?n("root",g.exports.omit(t,a)):n(o[0],t[o[0]])}))}},J=f({modules:{settings:N,favorite:q,jsonEditor:Y,g2048:Z},plugins:[G({name:"iszy_tools",storeName:"state"})]});let Q=[{path:"/",name:"ISZY工具集合",component:()=>B((()=>__import__("./Home.9d842521.js")),["/assets/Home.9d842521.js","/assets/Home.bfd30e35.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),meta:{requiresAuth:!1}}];for(const ae of U)if(Array.isArray(ae.children)&&ae.children.length>0)for(const e of ae.children)if(!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(e.link)&&0===Q.filter((t=>t.name===e.name)).length){const t=(ae.link||"")+(e.link||""),n=t.match("[^/]+(?!.*/)");n.length>0&&$[n[0]]&&Q.push({path:t,name:e.name,component:$[n[0]],meta:{requiresAuth:!1,statistics:!1!==e.statistics}})}Q=Q.concat([{path:"/login",name:"登录",component:()=>B((()=>__import__("./index.4f396d71.js")),["/assets/index.4f396d71.js","/assets/index.891788b1.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),meta:{title:"ISZY 工具集合",requiresAuth:!1}},{path:"/404",name:"404",component:()=>B((()=>__import__("./404.67be508c.js")),["/assets/404.67be508c.js","/assets/404.ed8e1166.css","/assets/vendor.8de19cf0.js","/assets/vendor.88a3ab7f.css"]),hidden:!0},{path:"/401",name:"401",redirect:"/login",hidden:!0},{path:"/redirect",name:"redirect",beforeEnter(e){e.query.url&&(window.location.href=e.query.url)}},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}]);const W=u({history:_("/"),routes:Q});W.afterEach(((e,t,n)=>{e.name&&e.meta.statistics&&J.dispatch("favorite/access",{name:e.name,link:e.path})}));const K="ISZY工具集合";function X(e){return e&&e!==K?`${e} - ISZY工具集合`:"ISZY工具集合"}const ee=["/login","/auth-redirect"];W.beforeEach((async(e,t,n)=>{document.title=X(e.meta.title||e.name);J.getters.currentUser?n():-1===ee.indexOf(e.path)&&e.meta.requiresAuth?n(`/login?redirect=${e.path}`):n()}));const te=v(j),ne=b({scriptUrl:"//at.alicdn.com/t/font_1621893_9j8fud3lbbm.js"});k.config({duration:2,maxCount:3}),te.config.globalProperties.$axios=y,te.config.globalProperties.$msg=k,te.use(J).use(W).component("IconFont",ne),te.mount("#app");export{U as t};
