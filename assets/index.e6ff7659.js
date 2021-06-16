import{p as e,a as t,z as n,L as a,C as o,B as i,r,o as s,c,b as m,T as l,w as d,d as p,l as h,e as u,f as g,g as f,h as _,i as b,j as v,k}from"./vendor.d392dd47.js";const w=function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),o(c)},onload(){n(self[t].moduleMap[r]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}};w("/assets/");var y='@charset "UTF-8";\n/*字号统一控制*/\nhtml {\n  font-size: 62.5%;\n}\n/*滚动条样式*/\n::-webkit-scrollbar {\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: rgba(249, 249, 249, 0.98);\n}\n/*定义滚动条轨道 内阴影+圆角*/\n::-webkit-scrollbar-track {\n  width: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(248, 255, 111, 0);\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0);\n}\n/*定义滑块 内阴影+圆角*/\n::-webkit-scrollbar-thumb {\n  z-index: 100;\n  border-radius: 1rem;\n  box-shadow: inset 0 0 0.6rem rgba(246, 246, 246, 0.76);\n  background-color: #d2d4d6;\n}\nhtml, body, #app {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#app {\n  font-variant-numeric: tabular-nums;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: Lora, "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  color: #333333;\n  background: #f4f8fb;\n}\n#app pre,\n#app code, #app kbd, #app samp, #app input, #app textarea {\n  font-family: JetBrains Mono, monospace;\n}',E=".ant-layout[data-v-0bf21efb] {\n  background: transparent;\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  overflow: hidden;\n}\n.ant-layout-header[data-v-0bf21efb], .ant-layout-layout[data-v-0bf21efb], .ant-layout-footer[data-v-0bf21efb] {\n  background: transparent;\n}\n.ant-layout-header[data-v-0bf21efb] {\n  padding: 3.2rem 0 2.4rem;\n  text-align: center;\n  height: 13.4rem;\n  line-height: unset;\n}\n.ant-layout-header .header[data-v-0bf21efb] {\n  height: 4.6rem;\n  line-height: 4.6rem;\n  font-size: 3.8rem;\n  color: #333333;\n  font-weight: 600;\n}\n.ant-layout-header .header a[data-v-0bf21efb] {\n  color: #333333;\n}\n.ant-layout-header .desc[data-v-0bf21efb] {\n  height: 2.2rem;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  margin-top: 1.2rem;\n  color: #999999;\n}\n.ant-layout-content[data-v-0bf21efb] {\n  max-width: 120rem;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem 1.6rem;\n  overflow-y: auto;\n}\n.ant-layout-footer[data-v-0bf21efb] {\n  height: 7rem;\n  text-align: center;\n}";const{Header:T,Content:I,Footer:L}=a,{Link:A}=l,S={data:()=>({locale:n}),components:{Layout:a,Header:T,Content:I,Footer:L,ConfigProvider:o,BackTop:i,Link:A},methods:{getPopupContainer:e=>e?e.parentNode:document.body}},R=d();e("data-v-0bf21efb");const j={class:"header"},P=p("ISZY工具集合"),O=m("div",{class:"desc"},"一个轻量的工具集合",-1),x=m("span",null,"© 2021 ",-1),C=p(" 随遇而安Blog "),D=m("br",null,null,-1),V=p(" 苏ICP备18047890号-2 ");t();const F=R(((e,t,n,a,o,i)=>{const l=r("BackTop"),d=r("router-link"),p=r("Header"),h=r("router-view"),u=r("Content"),g=r("Link"),f=r("Footer"),_=r("layout"),b=r("config-provider");return s(),c(b,{locale:e.locale,getPopupContainer:i.getPopupContainer},{default:R((()=>[m(l),m(_,null,{default:R((()=>[m(p,null,{default:R((()=>[m("div",j,[m(d,{to:"/"},{default:R((()=>[P])),_:1})]),O])),_:1}),m(u,null,{default:R((()=>[m(h)])),_:1}),m(f,null,{default:R((()=>[x,m(g,{href:"https://www.iszy.cc",target:"_blank"},{default:R((()=>[C])),_:1}),D,m(g,{href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_blank"},{default:R((()=>[V])),_:1})])),_:1})])),_:1})])),_:1},8,["locale","getPopupContainer"])}));let z;S.render=F,S.__scopeId="data-v-0bf21efb";const B={},M=function(e,t){if(!t)return e();if(void 0===z){const e=document.createElement("link").relList;z=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in B)return;B[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":z,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};var U={login:()=>M((()=>__import__("./index.21ec4ea7.js")),["/assets/index.21ec4ea7.js","/assets/index.891788b1.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),imgHosting:()=>M((()=>__import__("./imgHosting.2aac70a7.js")),["/assets/imgHosting.2aac70a7.js","/assets/imgHosting.59d4552d.css","/assets/index.1800f0a6.css","/assets/index.9aaefc65.css","/assets/index.7538a265.css","/assets/index.568ce6f4.css","/assets/index.828b5239.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),uuid:()=>M((()=>__import__("./uuid.985d6f92.js")),["/assets/uuid.985d6f92.js","/assets/uuid.257fb316.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.7538a265.css","/assets/index.44d7ddd0.css","/assets/index.568ce6f4.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),mtqLoans:()=>M((()=>__import__("./mtqLoans.14002806.js")),["/assets/mtqLoans.14002806.js","/assets/mtqLoans.b5520493.css","/assets/index.1800f0a6.css","/assets/index.9aaefc65.css","/assets/index.7538a265.css","/assets/index.b87fca9a.css","/assets/index.316f411b.css","/assets/index.568ce6f4.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css"]),timeCompute:()=>M((()=>__import__("./timeCompute.eda20ba5.js")),["/assets/timeCompute.eda20ba5.js","/assets/timeCompute.9439d3d2.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.316f411b.css","/assets/index.7538a265.css","/assets/index.568ce6f4.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css"]),colorTransform:()=>M((()=>__import__("./colorTransform.f1e2be8d.js")),["/assets/colorTransform.f1e2be8d.js","/assets/timeCompute.9439d3d2.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css"]),jsonEditor:()=>M((()=>__import__("./jsonEditor.6b16c1b2.js")),["/assets/jsonEditor.6b16c1b2.js","/assets/jsonEditor.ef016db3.css","/assets/index.568ce6f4.css","/assets/index.1800f0a6.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css"]),settings:()=>M((()=>__import__("./index.6a4250cd.js")),["/assets/index.6a4250cd.js","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/index.b87fca9a.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css"]),whatAnimeIsThis:()=>M((()=>__import__("./whatAnimeIsThis.5366c3b4.js")),["/assets/whatAnimeIsThis.5366c3b4.js","/assets/whatAnimeIsThis.27aa785c.css","/assets/index.828b5239.css","/assets/index.568ce6f4.css","/assets/index.1800f0a6.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),bilibiliBv2av:()=>M((()=>__import__("./bilibiliBv2av.da05bcb1.js")),["/assets/bilibiliBv2av.da05bcb1.js","/assets/bilibiliBv2av.cd471374.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/index.44d7ddd0.css","/assets/index.87718197.css","/assets/index.568ce6f4.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),oreooo:()=>M((()=>__import__("./index.99cd2106.js")),["/assets/index.99cd2106.js","/assets/index.ac5d92fb.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),2048:()=>M((()=>__import__("./index.5a767c87.js")),["/assets/index.5a767c87.js","/assets/index.0c7abd86.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),urlEncode:()=>M((()=>__import__("./urlEncode.9bc16234.js")),["/assets/urlEncode.9bc16234.js","/assets/urlEncode.33049452.css","/assets/index.87718197.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/container.7ff6849b.js","/assets/container.10d153c5.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"])},N=[{type:"其他",icon:"icon-t-stack-fill",children:[{name:"淘宝优惠券精选",link:"https://taobao.iszy.xyz",legend:"新功能"},{name:"这是什么动漫",link:"/anime/whatAnimeIsThis",legend:"需要联网"},{name:"哔哩哔哩AV、BV号转换",link:"/anime/bilibiliBv2av"},{name:"奥利奥生成器",link:"/others/oreooo"},{name:"资源包",link:"https://lib.iszy.xyz"}]},{type:"编程开发",link:"/program",icon:"icon-t-code",children:[{name:"时间计算",link:"/timeCompute"},{name:"颜色转换",link:"/colorTransform"},{name:"JSON编辑器",link:"/jsonEditor"},{name:"URL编码/解码",link:"/urlEncode"}]},{type:"加密解密",link:"/encrypt",children:[{name:"UUID在线生成",link:"/uuid"}]},{type:"游戏",link:"/games",icon:"icon-t-game",children:[{name:"2048",link:"/2048"}]},{type:"理财",link:"/money",icon:"icon-t-licai",children:[{name:"多次提前还贷计算器",link:"/mtqLoans"}]},{type:"网站相关",icon:"icon-t-settings",children:[{name:"网站设置",link:"/settings",statistics:!1}]}],$={namespaced:!0,state:()=>({settings:{showMost:!0,showRecent:!1,showSearch:!0,showType:!0,openInNewTab:!1}}),mutations:{triggerMost(e){e.settings.showMost=!e.settings.showMost},triggerRecent(e){e.settings.showRecent=!e.settings.showRecent},triggerSearch(e){e.settings.showSearch=!e.settings.showSearch},triggerType(e){e.settings.showType=!e.settings.showType},triggerNewTab(e){e.settings.openInNewTab=!e.settings.openInNewTab}},actions:{triggerMost({commit:e}){e("triggerMost")},triggerRecent({commit:e}){e("triggerRecent")},triggerSearch({commit:e}){e("triggerSearch")},triggerType({commit:e}){e("triggerType")},triggerNewTab({commit:e}){e("triggerNewTab")}}},q={namespaced:!0,state:()=>({favorite:[],statistics:[]}),getters:{isFav:e=>t=>e.favorite.filter((e=>e.name===t)).length>0,recent:e=>[...e.statistics].sort((function(e,t){return t.lastAccessTime-e.lastAccessTime})).slice(0,3),most:e=>[...e.statistics].sort((function(e,t){return t.times-e.times})).slice(0,3)},mutations:{updateFav(e,{name:t,link:n,add:a}){const o=e.favorite.filter((e=>e.name!==t));a?o.length===e.favorite.length&&e.favorite.push({name:t,link:n}):e.favorite=o},access(e,{name:t,link:n}){if(Array.isArray(e.statistics)){const a=e.statistics.filter((e=>e.name===t));a.length>0?(a[0].times++,a[0].lastAccessTime=(new Date).getTime(),a[0].link=n):e.statistics.push({name:t,link:n,times:1,lastAccessTime:(new Date).getTime()})}else e.statistics=[{name:t,link:n,times:1,lastAccessTime:(new Date).getTime()}]},clearHistory(e){e.statistics=[]}},actions:{addFav({commit:e},{name:t,link:n}){e("updateFav",{name:t,link:n,add:!0})},removeFav({commit:e},{name:t,link:n}){e("updateFav",{name:t,link:n})},access({commit:e},{name:t,link:n}){e("access",{name:t,link:n})},clearHistory({commit:e}){e("clearHistory")}}},H={namespaced:!0,state:()=>({content:void 0}),mutations:{saveContent(e,t){e.content=t}},actions:{saveContent({commit:e},t){e("saveContent",t)}}},Y={namespaced:!0,state:()=>({bestScore:0,gameState:void 0}),mutations:{setBestScore(e,t){e.bestScore=t},setGameState(e,t){e.gameState=t}},actions:{setBestScore({commit:e},t){e("setBestScore",t||0)},setGameState({commit:e},t){e("setGameState",t||{})},clearGameState({commit:e}){e("setGameState",void 0)}}},Z=(e={})=>{const t=e.storage||window&&window.localStorage,n=e.key||"vuex";return e=>{const a=h.exports.merge({},e.state,((e,t)=>{const n=t.getItem(e);try{return void 0!==n?JSON.parse(n):void 0}catch(a){}})(n,t));a&&e.replaceState(a),e.subscribe(((e,a)=>{((e,t,n)=>{n.setItem(e,JSON.stringify(t))})(n,a,t)}))}},G=u({modules:{settings:$,favorite:q,jsonEditor:H,g2048:Y},plugins:[Z()]});let J=[{path:"/",name:"ISZY工具集合",component:()=>M((()=>__import__("./Home.75a071b5.js")),["/assets/Home.75a071b5.js","/assets/Home.ced08292.css","/assets/index.1800f0a6.css","/assets/index.568ce6f4.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),meta:{requiresAuth:!1}}];for(const ne of N)if(Array.isArray(ne.children)&&ne.children.length>0)for(const e of ne.children)if(!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(e.link)&&0===J.filter((t=>t.name===e.name)).length){const t=(ne.link||"")+(e.link||""),n=t.match("[^/]+(?!.*/)");n.length>0&&U[n[0]]&&J.push({path:t,name:e.name,component:U[n[0]],meta:{requiresAuth:!1,statistics:!1!==e.statistics}})}J=J.concat([{path:"/login",name:"登录",component:()=>M((()=>__import__("./index.21ec4ea7.js")),["/assets/index.21ec4ea7.js","/assets/index.891788b1.css","/assets/index.9aaefc65.css","/assets/index.1800f0a6.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),meta:{title:"ISZY 工具集合",requiresAuth:!1}},{path:"/404",name:"404",component:()=>M((()=>__import__("./404.86009df0.js")),["/assets/404.86009df0.js","/assets/404.ed8e1166.css","/assets/vendor.d392dd47.js","/assets/vendor.88a3ab7f.css"]),hidden:!0},{path:"/401",name:"401",redirect:"/login",hidden:!0},{path:"/redirect",name:"redirect",beforeEnter(e){e.query.url&&(window.location.href=e.query.url)}},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}]);const Q=g({history:f("/"),routes:J});Q.afterEach(((e,t,n)=>{e.name&&e.meta.statistics&&G.dispatch("favorite/access",{name:e.name,link:e.path})}));const W="ISZY工具集合";function K(e){return e&&e!==W?`${e} - ISZY工具集合`:"ISZY工具集合"}const X=["/login","/auth-redirect"];Q.beforeEach((async(e,t,n)=>{document.title=K(e.meta.title||e.name);G.getters.currentUser?n():-1===X.indexOf(e.path)&&e.meta.requiresAuth?n(`/login?redirect=${e.path}`):n()}));const ee=_(S),te=b({scriptUrl:"//at.alicdn.com/t/font_1621893_9j8fud3lbbm.js"});v.config({duration:2,maxCount:3}),ee.config.globalProperties.$axios=k,ee.config.globalProperties.$msg=v,ee.use(G).use(Q).component("IconFont",te),ee.mount("#app");export{N as t};
