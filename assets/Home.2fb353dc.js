var n=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(n,r)=>{for(var l in r||(r={}))t.call(r,l)&&o(n,l,r[l]);if(e)for(var l of e(r))a.call(r,l)&&o(n,l,r[l]);return n};import{m as l,S as s,n as i,R as d,q as c,D as h,T as m,l as p,p as f,a as v,r as g,o as u,c as y,b,s as k,v as w,t as x,F as _,u as S,x as F,y as N,w as j,d as O}from"./vendor.78251fc9.js";/* empty css              *//* empty css              */import{t as C}from"./index.bf04d4a5.js";var I=[{label:"新功能",color:"lightskyblue"},{label:"需要联网",color:"lightpink"}],z=".ant-row[data-v-44260e9c] {\n  background: #fff;\n  box-shadow: 0 0.8rem 1rem rgba(36, 159, 253, 0.3);\n  border-radius: 0.8rem;\n}\n.ant-row[data-v-44260e9c]:not(:first-child) {\n  margin-top: 3.5rem;\n}\n.ant-row:not(.noName) .ant-col[data-v-44260e9c]:first-child {\n  margin-top: -3.5rem;\n}\n.typeName[data-v-44260e9c] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  background-color: #16b0f6;\n  padding: 0.48rem 1.28rem;\n  color: #fff;\n  box-shadow: 0 0.8rem 1rem rgba(36, 159, 253, 0.3);\n  border-radius: 0.8rem;\n}\n.typeName .anticon[data-v-44260e9c] {\n  font-size: 2.4rem;\n  margin-right: 0.5rem;\n}\n.tool[data-v-44260e9c] {\n  color: #666666;\n  font-size: 1.8rem;\n  line-height: 2.672rem;\n  font-weight: 600;\n  box-shadow: 0 0 0.1rem 0 rgba(8, 11, 14, 0.06), 0 0.3rem 0.3rem -0.1rem rgba(8, 11, 14, 0.1), 0 0 0.3rem 0 rgba(8, 11, 14, 0.02);\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin: 0.7rem;\n  padding: 1rem 1.5rem;\n  white-space: nowrap;\n  background-color: #fff;\n  transform: translateZ(0);\n  transition: transform 0.2s, color 0.2s, background-color 0.2s;\n  text-align: center;\n  text-overflow: ellipsis;\n  position: relative;\n}\n.tool .fav[data-v-44260e9c] {\n  display: none;\n  position: absolute;\n  right: 1.5rem;\n  overflow: hidden;\n}\n.tool .fav.collected[data-v-44260e9c] {\n  display: unset;\n  color: #16b0f6;\n}\n.tool .fav .hovered[data-v-44260e9c] {\n  display: none;\n}\n.tool sup[data-v-44260e9c] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.1rem #fff;\n}\n@media (any-hover: hover) {\n.tool[data-v-44260e9c]:hover {\n    background-color: #16b0f6;\n    color: #fff;\n    transform: scale3d(1.1, 1.1, 1.1);\n    padding-right: 3rem;\n}\n.tool:hover .fav[data-v-44260e9c] {\n    display: unset;\n}\n.tool:hover .fav.collected[data-v-44260e9c] {\n    color: white;\n}\n.tool:hover .fav:hover .nonHover[data-v-44260e9c] {\n    display: none;\n}\n.tool:hover .fav:hover .hovered[data-v-44260e9c] {\n    display: unset;\n    color: white;\n}\n.tool:hover sup[data-v-44260e9c] {\n    display: none;\n}\n}\n@media (any-hover: none) {\n.tool[data-v-44260e9c] {\n    padding-right: 3rem;\n}\n.tool .fav[data-v-44260e9c] {\n    display: unset;\n}\n.tool[data-v-44260e9c]:active {\n    background-color: #16b0f6;\n    color: #fff;\n    transform: scale3d(1.1, 1.1, 1.1);\n}\n.tool:active .fav.collected[data-v-44260e9c] {\n    color: white;\n}\n.tool:active .fav .nonHover[data-v-44260e9c] {\n    display: none;\n}\n.tool:active .fav .hovered[data-v-44260e9c] {\n    display: unset;\n    color: white;\n}\n.tool:active sup[data-v-44260e9c] {\n    display: none;\n}\n}\n.announcement[data-v-44260e9c] {\n  display: block;\n  width: 100%;\n  padding: 1.6rem;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 700;\n}\n.announcement .legendInfo[data-v-44260e9c] {\n  display: flex;\n  align-items: center;\n}\n.announcement .legendInfo .legendName + sup[data-v-44260e9c] {\n  margin: 0 0.8rem 0 0.5rem;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.1rem #fff;\n}\n.search[data-v-44260e9c] {\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 700;\n  padding: 1.6rem 0.8rem;\n  color: #666666;\n}\n.search .anticon[data-v-44260e9c] {\n  font-size: 2.4rem;\n  margin-right: 1.6rem;\n}\n.search input[data-v-44260e9c] {\n  flex: 1;\n  outline: none;\n  border: none;\n}";const{Paragraph:P}=m,{mapActions:T,mapGetters:D,mapState:R}=l("favorite"),{mapState:A}=l("settings"),H={name:"首页",components:{StarOutlined:s,StarFilled:i,Row:d,Col:c,Divider:h,Paragraph:P,Typography:m},computed:r(r(r({tools(){let n;if(this.settings.showType)n=[...C||[]];else{n=[{type:"工具",icon:"icon-t-changyong",children:[]}];for(const e of[...C||[]])for(const t of e.children)n[0].children.push(Object.assign({},t,{link:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1+}$/.test(t.link)?t.link:(e.link||"")+(t.link||"")}))}return this.settings.showRecent&&this.recent.length>0&&n.unshift({type:"最近访问",icon:"icon-t-recent",children:this.recent}),this.settings.showMost&&this.most.length>0&&n.unshift({type:"最常访问",icon:"icon-t-changyong",children:this.most}),this.favorite.length>0&&n.unshift({type:"收藏",icon:"icon-t-star-filled",children:this.favorite}),this.searchStr&&(n=n.map((n=>{const e=p.exports.cloneDeep(n);return e.children=e.children.filter((n=>n.name.includes(this.searchStr))),e}))),n.filter((n=>Array.isArray(n.children)&&n.children.length>0))}},A(["settings"])),R(["favorite"])),D(["most","recent","isFav"])),data:()=>({searchStr:"",legends:I}),methods:r({getLegendColor(n){const e=I.filter((e=>e.label===n));return e.length>0?e[0].color:""}},T(["addFav","removeFav"]))},$=j();f("data-v-44260e9c");const L={class:"search"},q={class:"typeName"},E={class:"tool"},G={class:"toolName"},M={class:"nonHover"},U={class:"hovered"},V={class:"typeName"},Z=b("div",null,"公告",-1),B={class:"announcement"},J={class:"legendInfo"},K=O("图例： "),Q={class:"legendName"};v();const W=$(((n,e,t,a,o,r)=>{const l=g("IconFont"),s=g("Col"),i=g("Row"),d=g("Divider"),c=g("StarFilled"),h=g("StarOutlined"),m=g("router-link"),p=g("Paragraph"),f=g("Typography");return u(),y(_,null,[n.settings.showSearch?(u(),y(i,{key:0,gutter:{xs:8,sm:16,md:24},class:"noName"},{default:$((()=>[b(s,{span:24},{default:$((()=>[b("div",L,[b(l,{type:"icon-t-search"}),k(b("input",{type:"search",placeholder:"搜索工具","onUpdate:modelValue":e[1]||(e[1]=e=>n.searchStr=e)},null,512),[[w,n.searchStr]])])])),_:1})])),_:1})):x("",!0),(u(!0),y(_,null,S(r.tools,((e,t)=>(u(),y(i,{key:"type"+t,gutter:{xs:8,sm:16,md:24}},{default:$((()=>[b(s,{span:24},{default:$((()=>[b(d,{orientation:"left"},{default:$((()=>[b("span",q,[e.icon?(u(),y(l,{key:0,type:e.icon},null,8,["type"])):x("",!0),b("div",null,F(e.type),1)])])),_:2},1024)])),_:2},1024),(u(!0),y(_,null,S(e.children,((t,a)=>(u(),y(s,{xs:12,sm:12,md:8,lg:6,key:"tool"+a},{default:$((()=>[b(m,{target:n.settings.openInNewTab||/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(t.link)?"_blank":"",to:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(t.link)?"/redirect?url="+t.link:(e.link||"")+(t.link||"")},{default:$((()=>[b("div",E,[b("span",G,F(t.name),1),n.isFav(t.name)?(u(),y("span",{key:0,class:"fav collected",onClick:N((e=>n.removeFav({name:t.name})),["prevent"])},[b(c)],8,["onClick"])):(u(),y("span",{key:1,class:"fav",onClick:N((a=>n.addFav({name:t.name,link:(e.link||"")+(t.link||"")})),["prevent"])},[b("span",M,[b(h)]),b("span",U,[b(c)])],8,["onClick"])),t.legend?(u(),y("sup",{key:2,style:{background:r.getLegendColor(t.legend)}},null,4)):x("",!0)])])),_:2},1032,["target","to"])])),_:2},1024)))),128))])),_:2},1024)))),128)),b(i,{gutter:{xs:8,sm:16,md:24}},{default:$((()=>[b(s,{span:24},{default:$((()=>[b(d,{orientation:"left"},{default:$((()=>[b("span",V,[b(l,{type:"icon-t-gonggao"}),Z])])),_:1})])),_:1}),b(s,{span:24},{default:$((()=>[b("div",B,[b(f,null,{default:$((()=>[b(p,null,{default:$((()=>[b("ul",null,[b("li",null,[b("div",J,[K,(u(!0),y(_,null,S(n.legends,((n,e)=>(u(),y(_,{key:e},[b("span",Q,F(n.label),1),b("sup",{style:{background:n.color}},null,4)],64)))),128))])])])])),_:1})])),_:1})])])),_:1})])),_:1})],64)}));H.render=W,H.__scopeId="data-v-44260e9c";export default H;
