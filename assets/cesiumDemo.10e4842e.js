import{_ as M,a as b}from"./index.8bf95aeb.js";import{ab as k,W as w,X as I,aU as l,aV as _,r as a,o as m,u,w as i,c as E,f as c,a as r,A as $,x as D,g as A,p as N,b as V}from"./vendor.04422529.js";/* empty css              *//* empty css                *//* empty css               *//* empty css                */async function f(t,o="script",d=!1){if(o==="script"){const s=document.getElementsByTagName("script");let n=!1;for(let e=0;e<s.length;e++)n=s[e].src===t,n&&d&&s[e].remove();if(!n||d){const e=document.createElement("script");e.type="text/javascript",e.src=t,e.defer=!0,document.head.appendChild(e)}}else if(o==="style"){const s=document.getElementsByTagName("link");let n=!1;for(let e=0;e<s.length;e++)n=s[e].href===t,n&&d&&s[e].remove();if(!n||d){const e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)}}}const{Meta:L}=l,{Item:R}=_,S={name:"cesiumDemo",components:{BingMap:k(()=>b(()=>import("./BingMap.50f946e6.js"),["assets/BingMap.50f946e6.js","assets/BingMap.754257c7.css","assets/index.8bf95aeb.js","assets/index.1aa312ea.css","assets/vendor.04422529.js","assets/vendor.e522b290.css"])),Row:w,Col:I,Card:l,Meta:L,Breadcrumb:_,Item:R},data:()=>({demo:""}),async created(){await f("https://cdn.jsdelivr.net/npm/cesium@1.85.0/Build/Cesium/Cesium.js"),await f("https://cdn.jsdelivr.net/npm/cesium@1.85.0/Build/Cesium/Widgets/widgets.css","style")}},g=t=>(N("data-v-503aaae8"),t=t(),V(),t),T=g(()=>r("img",{src:"https://lib.iszy.xyz/iClient3D_28443/examples/webgl/img/bingMap.jpg",alt:"BingMap"},null,-1)),z=g(()=>r("span",null,"\u9996\u9875",-1)),P={style:{"user-select":"none"}},W={class:"demo"};function F(t,o,d,s,n,e){const v=a("Meta"),h=a("Card"),B=a("Col"),y=a("Row"),p=a("Item"),C=a("Breadcrumb"),x=a("BingMap");return t.demo?(m(),E(D,{key:1},[c(C,null,{default:i(()=>[c(p,{onClick:o[1]||(o[1]=j=>t.demo=""),href:""},{default:i(()=>[z]),_:1}),c(p,null,{default:i(()=>[r("span",P,A(t.demo),1)]),_:1})]),_:1}),r("div",W,[t.demo==="BingMap"?(m(),u(x,{key:0})):$("",!0)])],64)):(m(),u(y,{key:0,gutter:[{xs:8,sm:16},{xs:8,sm:16}]},{default:i(()=>[c(B,{xs:12,sm:8,md:6,lg:4,xl:3},{default:i(()=>[c(h,{hoverable:"",onClick:o[0]||(o[0]=j=>t.demo="BingMap")},{cover:i(()=>[T]),default:i(()=>[c(v,{title:"BingMap"})]),_:1})]),_:1})]),_:1}))}var J=M(S,[["render",F],["__scopeId","data-v-503aaae8"]]);export{J as default};
