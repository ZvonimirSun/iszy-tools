var e=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,r=(e,r)=>{for(var l in r||(r={}))a.call(r,l)&&o(e,l,r[l]);if(n)for(var l of n(r))t.call(r,l)&&o(e,l,r[l]);return e},l="undefined"!=typeof require?require:e=>{throw new Error('Dynamic require of "'+e+'" is not supported')};import{D as s,S as i,E as d,F as c,T as f,G as m,N as h,H as p,s as v,i as u,p as g,a as y,b,o as w,g as k,c as x,w as N,e as C,f as _,I as S,J as F,K as T,O as j,P as I,h as O,Q as P,U as z,V as D,W as H}from"./vendor.11098cc6.js";/* empty css              */import{t as q}from"./index.21526412.js";var A=[{label:"新功能",color:"#52c41a"}],E=".ant-row[data-v-606fa442] {\n  background: #fff;\n  box-shadow: 0 0.8rem 1rem rgba(36, 159, 253, 0.3);\n  border-radius: 0.8rem;\n}\n.ant-row[data-v-606fa442]:not(:first-child) {\n  margin-top: 3.3rem;\n}\n.typeNameCol[data-v-606fa442] {\n  padding: 0.8rem;\n  margin-top: -2.5rem;\n}\n.typeNameCol .typeName[data-v-606fa442] {\n  margin-left: 3rem;\n  padding: 0.5rem 1.6rem;\n  height: 3.2rem;\n  display: inline-flex;\n  align-items: center;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2.4rem;\n  color: #fff;\n  background-color: #16b0f6;\n  box-shadow: 0 0.8rem 1rem #16B0F64D;\n  border-radius: 0.8rem;\n}\n.typeNameCol .typeName .i-icon[data-v-606fa442] {\n  font-size: 2.4rem;\n}\n.typeNameCol .typeName .i-icon + *[data-v-606fa442] {\n  margin-left: 0.5rem;\n}\n.typeNameCol .typeName * + .i-icon[data-v-606fa442] {\n  margin-left: 0.5rem;\n}\n.tool[data-v-606fa442] {\n  color: #333333;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 600;\n  box-shadow: 0 0.5rem 0.8rem #16B0F64D;\n  border-radius: 0.8rem;\n  margin: 0.8rem 0;\n  padding: 0.8rem 1.6rem;\n  background-color: #fff;\n  transform: translateZ(0);\n  transition: transform 0.2s, color 0.2s, background-color 0.2s;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n  position: relative;\n}\n.tool.toolCollected[data-v-606fa442] {\n  padding-right: 3rem;\n}\n.tool .fav[data-v-606fa442] {\n  display: none;\n  position: absolute;\n  right: 1.5rem;\n  overflow: hidden;\n}\n.tool .fav.collected[data-v-606fa442] {\n  display: unset;\n  color: #16b0f6;\n}\n.tool .fav .hovered[data-v-606fa442] {\n  display: none;\n}\n.tool sup[data-v-606fa442] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.1rem #fff;\n}\n@media (any-hover: hover) {\n.tool[data-v-606fa442]:hover {\n    background-color: #16b0f6;\n    color: #fff;\n    padding-right: 3rem;\n}\n.tool:hover .fav[data-v-606fa442] {\n    display: unset;\n}\n.tool:hover .fav.collected[data-v-606fa442] {\n    color: white;\n}\n.tool:hover .fav:hover .nonHover[data-v-606fa442] {\n    display: none;\n}\n.tool:hover .fav:hover .hovered[data-v-606fa442] {\n    display: unset;\n    color: white;\n}\n.tool:hover sup[data-v-606fa442] {\n    display: none;\n}\n}\n@media (any-hover: none) {\n.tool[data-v-606fa442] {\n    padding-right: 3rem;\n}\n.tool .fav[data-v-606fa442] {\n    display: unset;\n}\n.tool[data-v-606fa442]:active {\n    background-color: #16b0f6;\n    color: #fff;\n}\n.tool:active .fav.collected[data-v-606fa442] {\n    color: white;\n}\n.tool:active .fav .nonHover[data-v-606fa442] {\n    display: none;\n}\n.tool:active .fav .hovered[data-v-606fa442] {\n    display: unset;\n    color: white;\n}\n.tool:active sup[data-v-606fa442] {\n    display: none;\n}\n}\n.announcement[data-v-606fa442] {\n  display: block;\n  width: 100%;\n  padding: 1.6rem;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 700;\n}\n.announcement .legendInfo[data-v-606fa442] {\n  display: flex;\n  align-items: center;\n}\n.announcement .legendInfo .legendName + sup[data-v-606fa442] {\n  margin: 0 0.8rem 0 0.5rem;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.1rem #fff;\n}\n.search[data-v-606fa442] {\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 700;\n  padding: 1.6rem 0.8rem;\n  color: #666666;\n}\n.search .i-icon[data-v-606fa442] {\n  font-size: 2.4rem;\n  margin-right: 1.6rem;\n}\n.search input[data-v-606fa442] {\n  flex: 1;\n  outline: none;\n  border: none;\n}";const{Paragraph:R}=f,{mapActions:B,mapGetters:G,mapState:L}=s("favorite"),{mapState:U}=s("settings"),V={name:"首页",components:{Star:i,Row:d,Col:c,Paragraph:R,Typography:f,Search:m,Notes:h,Tooltip:p},computed:r(r(r({tools(){let e;return e=this.settings.showType?[...q||[]]:[{type:"工具",icon:"all-application",children:this.allTools}],this.settings.showRecent&&this.recent.length>0&&e.unshift({type:"最近访问",icon:"history",children:this.recent}),this.settings.showMost&&this.most.length>0&&e.unshift({type:"最常访问",icon:"concern",children:this.most}),this.favorite.length>0&&e.unshift({type:"收藏",icon:"folder-focus",children:this.favorite}),this.searchStr&&(e=e.map((e=>{const n=v(e);return n.children=n.children.filter((e=>e.name.includes(this.searchStr))),n}))),e.filter((e=>Array.isArray(e.children)&&e.children.length>0))},allTools:()=>u([...q||[]].map((e=>e.children)))},U(["settings"])),L(["favorite"])),G(["most","recent","isFav"])),data:()=>({searchStr:"",legends:A}),mounted(){this.fixFavorite()},methods:r({getLegendColor(e){const n=A.filter((n=>n.label===e));return n.length>0?n[0].color:""}},B(["addFav","removeFav","fixFavorite"]))};g("data-v-606fa442");const $={class:"search"},J={class:"typeName"},K=["name"],M={class:"toolName"},Q=["onClick"],W=["onClick"],Z={class:"nonHover"},X={class:"hovered"},Y={class:"typeName"},ee=_("div",null,"公告",-1),ne={class:"announcement"},ae={class:"legendInfo"},te=O("图例： "),oe={class:"legendName"};function re(e,n,a,t,o,r){const l=b("search"),s=b("Col"),i=b("Row"),d=b("Star"),c=b("Tooltip"),f=b("router-link"),m=b("notes"),h=b("Paragraph"),p=b("Typography");return w(),k(j,null,[e.settings.showSearch?(w(),x(i,{key:0,gutter:{xs:8,sm:16,md:24},class:"noName"},{default:N((()=>[C(s,{span:24},{default:N((()=>[_("div",$,[C(l,{theme:"outline"}),S(_("input",{type:"search",placeholder:"搜索工具","onUpdate:modelValue":n[0]||(n[0]=n=>e.searchStr=n)},null,512),[[F,e.searchStr]])])])),_:1})])),_:1})):T("",!0),(w(!0),k(j,null,I(r.tools,((n,a)=>(w(),x(i,{key:"type"+a,gutter:{xs:8,sm:16}},{default:N((()=>[C(s,{span:24,class:"typeNameCol"},{default:N((()=>[_("div",J,[n.icon?(w(),k("iconpark-icon",{key:0,class:"i-icon",name:n.icon,color:"#fff"},null,8,K)):T("",!0),_("div",null,P(n.type),1)])])),_:2},1024),(w(!0),k(j,null,I(n.children,((n,a)=>(w(),x(s,{xs:12,sm:12,md:8,lg:6,xl:4,xxl:3,key:"tool"+a},{default:N((()=>[C(f,{target:e.settings.openInNewTab||/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(n.link)?"_blank":"",to:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(n.link)?"/redirect?url="+n.link:n.link||""},{default:N((()=>[C(c,null,{title:N((()=>[O(P(n.name),1)])),default:N((()=>[_("div",{class:H(["tool",{toolCollected:e.isFav(n.name)}])},[_("span",M,P(n.name),1),e.isFav(n.name)?(w(),k("span",{key:0,class:"fav collected",onClick:z((a=>e.removeFav({name:n.name})),["prevent"])},[C(d,{theme:"filled"})],8,Q)):(w(),k("span",{key:1,class:"fav",onClick:z((a=>e.addFav({name:n.name,link:n.link||""})),["prevent"])},[_("span",Z,[C(d,{theme:"outline"})]),_("span",X,[C(d,{theme:"filled"})])],8,W)),n.legend?(w(),k("sup",{key:2,style:D({background:r.getLegendColor(n.legend)})},null,4)):T("",!0)],2)])),_:2},1024)])),_:2},1032,["target","to"])])),_:2},1024)))),128))])),_:2},1024)))),128)),C(i,{gutter:{xs:8,sm:16,md:24}},{default:N((()=>[C(s,{span:24,class:"typeNameCol"},{default:N((()=>[_("div",Y,[C(m,{theme:"outline"}),ee])])),_:1}),C(s,{span:24},{default:N((()=>[_("div",ne,[C(p,null,{default:N((()=>[C(h,null,{default:N((()=>[_("ul",null,[_("li",null,[_("div",ae,[te,(w(!0),k(j,null,I(e.legends,((e,n)=>(w(),k(j,{key:n},[_("span",oe,P(e.label),1),_("sup",{style:D({background:e.color})},null,4)],64)))),128))])])])])),_:1})])),_:1})])])),_:1})])),_:1})],64)}y(),V.render=re,V.__scopeId="data-v-606fa442";export{V as default};
