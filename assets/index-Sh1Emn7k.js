import{a3 as q,aM as J,o as g,c as v,a as f,t as E,y as c,aN as X,b as l,d as A,aO as Y,j as O,aP as ee,B as L,l as te,a9 as B,q as C,aQ as ae,r as M,az as d,w as R,f as D,W as y,F,g as H,ay as se,aR as ne,aB as oe,aS as ie,aT as ce,aU as re,aV as le,aW as ue,aH as fe,aI as de,aX as P,aa as me,$ as _e,aY as pe,aZ as ge,a2 as he,a4 as x,ae as ye}from"./vendor-_H2Zizob.js";import{u as ve,N as T,O as we,P as ke,G as Se,S as Ie,Q}from"./common-ad37U__l.js";import"./ant-design-vue-VLD91q-I.js";import"./vanilla-jsoneditor--Y_UqYYL.js";const Ee={class:"containerAll"},$e={class:"containerTitle"},be={class:"typeName"},Ne={class:"main"},Be={__name:"container",props:{fullScreenStatus:{type:Boolean,default:!1}},emits:["fullScreen"],setup(a,{emit:s}){const i=s,n=J();function o(){i("fullScreen")}return(e,r)=>{var h;const m=Y;return g(),v("div",{ref:"container",class:A(["containerBase",{"full-screen":a.fullScreenStatus}])},[f("div",Ee,[f("div",$e,[f("div",be,[f("span",null,E(((h=c(n).meta)==null?void 0:h.title)||c(n).name),1),f("span",{class:"i-icon-park-outline-full-screen fullScreen",title:"全屏",onClick:o})])]),f("div",Ne,[X(e.$slots,"default",{},void 0,!0),l(m,{"visibility-height":100})])])],2)}}},Ce=q(Be,[["__scopeId","data-v-a803953d"]]);async function Pe(a,s="script",i=!1){if(s==="script"){const n=document.getElementsByTagName("script");let o=!1;for(let e=0;e<n.length;e++)o=n[e].src===a,o&&i&&n[e].remove();if(!o||i){const e=document.createElement("script");e.type="text/javascript",e.src=a,e.defer=!0,document.head.appendChild(e)}}else if(s==="style"){const n=document.getElementsByTagName("link");let o=!1;for(let e=0;e<n.length;e++)o=n[e].href===a,o&&i&&n[e].remove();if(!o||i){const e=document.createElement("link");e.rel="stylesheet",e.href=a,document.head.appendChild(e)}}}const I=a=>(fe("data-v-8564fcb3"),a=a(),de(),a),xe={class:"global-wrapper"},Te=I(()=>f("i",{class:"dark:i-icon-park-outline-moon i-icon-park-outline-sun-one"},null,-1)),Ae={class:"header"},Ve={key:0,class:"desc"},ze={key:1,class:"desc"},je=I(()=>f("span",{class:"i-icon-park-outline:return"},null,-1)),Le={key:0,class:"container"},Me=I(()=>f("a",{href:"https://www.iszy.cc",target:"_blank"}," 随遇而安Blog ",-1)),Re=I(()=>f("br",null,null,-1)),De=I(()=>f("a",{href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_blank"}," 苏ICP备18047890号-2 ",-1)),Fe=O({__name:"App",setup(a){const{offlineReady:s,needRefresh:i,updateServiceWorker:n}=ee(),o=J(),e=ve()._user,r=L(!1),m=L("2021"),h=new Date().getFullYear().toString();h!==m.value&&(m.value+=` - ${h}`);let k=!1;te(()=>{Pe("https://fonts.cdn.iszy.xyz/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif+SC:wght@300;400;700&display=swap","style"),window.addEventListener("keydown",function(t){r.value&&t.key==="Escape"&&(t.repeat?u():k||(k=!0,setTimeout(()=>{k=!1},3e3),B.info("长按Esc以退出全屏")))},!1)});function u(){r.value&&T("fullScreen")?we("fullScreen"):!r.value&&!T("fullScreen")&&ke("fullScreen"),r.value=!r.value,r.value&&B.info("长按Esc以退出全屏")}return C(s,function(t){t&&B.success("离线使用已准备好~")}),C(i,function(t){t&&ae.confirm("存在新内容，请点击 重载 更新~","更新",{confirmButtonText:"重载",cancelButtonText:"取消",type:"info"}).then(()=>{n()})}),C(()=>o.path,()=>{r.value=T("fullScreen")}),(t,w)=>{const $=oe,_=M("router-link"),b=ie,p=Y,S=M("router-view"),N=Ce,K=ce,U=re,Z=le,G=ue;return g(),v("div",xe,[l(G,{locale:c(ne)},{default:d(()=>[l(Z,{class:"main"},{default:d(()=>{var V,z;return[l($,{type:"primary",class:"dark-mode-trigger",circle:"",onClick:c(Se)().toggleTheme},{default:d(()=>[Te]),_:1},8,["onClick"]),R(l(b,{class:A(["main-header",{"in-tool":((V=c(o).meta)==null?void 0:V.type)==="tool"}])},{default:d(()=>[f("div",Ae,[l(_,{to:"/"},{default:d(()=>[y(" ISZY工具集合 ")]),_:1})]),c(o).path==="/"?(g(),v("div",Ve,[y(" 一个轻量的工具集合 "),c(e).profile.nickName?(g(),v(F,{key:0},[y(" · "),l(_,{to:"/settings"},{default:d(()=>[y(E(c(e).profile.nickName),1)]),_:1})],64)):H("",!0)])):(g(),v("div",ze,[l(_,{to:"/"},{default:d(()=>[je,y("返回首页 ")]),_:1}),c(e).profile.nickName?(g(),v(F,{key:0},[y(" · "),l(_,{to:"/settings"},{default:d(()=>[y(E(c(e).profile.nickName),1)]),_:1})],64)):H("",!0)]))]),_:1},8,["class"]),[[D,!c(r)]]),l(K,{class:A(["main-content",{"full-screen":c(r)}])},{default:d(()=>{var j;return[l(p,{"visibility-height":100}),((j=c(o).meta)==null?void 0:j.type)!=="tool"?(g(),v("div",Le,[l(S)])):(g(),se(N,{key:1,"full-screen-status":c(r),onFullScreen:u},{default:d(()=>[l(S)]),_:1},8,["full-screen-status"]))]}),_:1},8,["class"]),R(l(U,{class:"main-footer"},{default:d(()=>[f("span",null,"© "+E(c(m))+" ",1),Me,Re,De]),_:1},512),[[D,!c(r)&&((z=c(o).meta)==null?void 0:z.type)!=="tool"]])]}),_:1})]),_:1},8,["locale"])])}}}),He=q(Fe,[["__scopeId","data-v-8564fcb3"]]),W=new Ie;async function Qe(a={}){const s=a.name!=null?a.name:"pinia",i=a.storeName!=null?a.storeName:"keyvaluepairs",n=a.version!=null?a.version:1,o=a.debug,e=P.createInstance({name:s,storeName:n!==1?`${i}_${n}`:i}),r=await e.keys();if(!r.length){if(n!==1){const t=P.createInstance({name:s,storeName:n-1!==1?`${i}_${n-1}`:i});(await t.keys()).length&&n===2&&await We(t,e),await P.dropInstance({name:s,storeName:n-1!==1?`${i}_${n-1}`:i})}await e.getItem("version")==null&&await e.setItem("version",n)}sessionStorage.clear();const m=[];for(const u of r)m.push((async()=>{const t=await e.getItem(u);t!=null&&sessionStorage.setItem(u,JSON.stringify(t))})());await Promise.all(m);const h=(u,t)=>{const w=sessionStorage.getItem(u);return w!=null?(t&&sessionStorage.removeItem(u),JSON.parse(w)):null},k=(u,t)=>e.setItem(u,pe(t));return u=>{const{store:t,options:{persist:w}}=u;if(!w)return;const $=h(t.$id,!0);t.$patch(me({},t.$state,$));let _=!0;const b=_e(function(){var p,S;W.enqueue(k(t.$id,t.$state).catch(N=>{o&&console.log(N)})),t.$id==="user"&&((p=t.$state.settings)!=null&&p.autoSync)&&navigator.onLine&&(_?t.$state.syncing?(t.$state.syncing=!1,_=!1):W.enqueue((S=t.uploadSettings)==null?void 0:S.call(t)):_=!0)},100);t.$subscribe(p=>{if(p.storeId==="main"&&!Array.isArray(p.events)&&p.events.key==="clearOfflineCacheTag"){e.clear().then(()=>{window.location.reload()});return}b()},{detached:!0,deep:!0})}}async function We(a,s){await s.clear();const i=await a.keys();for(const n of i)switch(n){case"g2048":await s.setItem("2048",await a.getItem("g2048"));break;case"imgHosting":await s.setItem("imgHosting",await a.getItem("imgHosting"));break;case"jsonEditor":await s.setItem("jsonEditor",await a.getItem("jsonEditor"));break;case"linuxCommand":await s.setItem("linuxCommand",await a.getItem("linuxCommand"));break;case"tinyEditor":await s.setItem("tinyEditor",await a.getItem("tinyEditor"));break;case"user":{const o=await a.getItem("user");delete o.profile,delete o.token,o.modules.jsonEditor=o.settings.jsonEditor,delete o.settings.jsonEditor,o.version=2,await s.setItem("user",o);break}}await s.setItem("version",2)}const qe="https://api.iszy.xyz";(async()=>{const a=ge(),s=he(He);s.config.globalProperties.$axios=x,s.config.globalProperties.$eventBus=Q,s.provide("$axios",x),s.provide("$eventBus",Q),x.$apiBase=qe;const i=await Qe({name:"iszy_tools",storeName:"state",version:2});a.use(i),s.use(a);const n=(await ye(()=>import("./index-zlY8oDa0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))).default;s.use(n),s.mount("#app")})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-zlY8oDa0.js","assets/vendor-_H2Zizob.js","assets/vendor-lgifY5PM.css","assets/common-ad37U__l.js","assets/ant-design-vue-VLD91q-I.js","assets/ant-design-vue-Wm6vTltt.css","assets/vanilla-jsoneditor--Y_UqYYL.js","assets/common-63XevJnB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}