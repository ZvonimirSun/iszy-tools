var n=Object.defineProperty,e=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,o=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,r=(n,r)=>{for(var s in r||(r={}))e.call(r,s)&&o(n,s,r[s]);if(a)for(var s of a(r))t.call(r,s)&&o(n,s,r[s]);return n};import{S as s,l as i,R as l,m as c,D as d,n as v,q as f,s as p,p as m,a as b,r as h,o as u,c as g,t as y,F as k,w,b as x,u as F,v as _,x as j}from"./vendor.4bdd04a3.js";/* empty css              *//* empty css              */import{t as O}from"./index.9a892658.js";var C=".ant-row[data-v-0ca4c60b] {\n  margin-top: 35px;\n  background: #fff;\n  box-shadow: 0 0.5rem 0.625rem rgba(36, 159, 253, 0.3);\n  border-radius: 0.5rem;\n}\n.ant-row .ant-col[data-v-0ca4c60b]:first-child {\n  margin-top: -35px;\n}\n.typeName[data-v-0ca4c60b] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  background-color: #16b0f6;\n  padding: 0.3rem 0.8rem;\n  color: #fff;\n  box-shadow: 0 0.5rem 0.625rem rgba(36, 159, 253, 0.3);\n  border-radius: 0.5rem;\n}\n.typeName .anticon[data-v-0ca4c60b] {\n  font-size: 1.5rem;\n  margin-right: 5px;\n}\n.tool[data-v-0ca4c60b] {\n  color: #666666;\n  font-size: 1.125rem;\n  line-height: 1.67rem;\n  font-weight: 600;\n  box-shadow: 0 0 0.0625rem 0 rgba(8, 11, 14, 0.06), 0 0.1875rem 0.1875rem -0.0625rem rgba(8, 11, 14, 0.1), 0 0 0.1875rem 0 rgba(8, 11, 14, 0.02);\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin: 0.4375rem;\n  padding: 0.625rem 0.9375rem;\n  white-space: nowrap;\n  background-color: #fff;\n  transform: translateZ(0);\n  transition: transform 0.2s, color 0.2s, background-color 0.2s;\n  text-align: center;\n  text-overflow: ellipsis;\n  position: relative;\n}\n.tool .fav[data-v-0ca4c60b] {\n  display: none;\n  position: absolute;\n  right: 0.9375rem;\n  overflow: hidden;\n}\n.tool .fav.collected[data-v-0ca4c60b] {\n  display: unset;\n  color: #16b0f6;\n}\n.tool .fav .hovered[data-v-0ca4c60b] {\n  display: none;\n}\n.tool sup[data-v-0ca4c60b] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 6px;\n  height: 6px;\n  background: #ff4d4f;\n  border-radius: 100%;\n  box-shadow: 0 0 0 1px #fff;\n}\n.tool[data-v-0ca4c60b]:hover {\n  background-color: #16b0f6;\n  color: #fff;\n  transform: scale3d(1.1, 1.1, 1.1);\n  padding-right: 1.875rem;\n}\n.tool:hover .fav[data-v-0ca4c60b] {\n  display: unset;\n}\n.tool:hover .fav.collected[data-v-0ca4c60b] {\n  color: yellow;\n}\n.tool:hover .fav:hover .nonHover[data-v-0ca4c60b] {\n  display: none;\n}\n.tool:hover .fav:hover .hovered[data-v-0ca4c60b] {\n  display: unset;\n  color: yellow;\n}\n.tool:hover sup[data-v-0ca4c60b] {\n  display: none;\n}";const S={name:"首页",components:{StarOutlined:s,StarFilled:i,Row:l,Col:c,Divider:d},methods:r({},v({addFav:"favorite/addFav",removeFav:"favorite/removeFav"})),computed:r(r({tools(){const n=[...O];return this.settings.showRecent&&this.recent.length>0&&n.unshift({type:"最近访问",icon:"icon-t-recent",children:this.recent}),this.settings.showMost&&this.most.length>0&&n.unshift({type:"最常访问",icon:"icon-t-changyong",children:this.most}),this.favorite.length>0&&n.unshift({type:"收藏",icon:"icon-t-star-filled",children:this.favorite}),n}},f({settings:n=>n.settings.settings,favorite:n=>n.favorite.favorite})),p({most:"statistics/most",recent:"statistics/recent",isFav:"favorite/isFav"}))},N=w();m("data-v-0ca4c60b");const R={class:"typeName"},z={class:"tool"},D={class:"tool"},I={class:"toolName"},P={class:"nonHover"},H={class:"hovered"};b();const q=N(((n,e,a,t,o,r)=>{const s=h("IconFont"),i=h("Divider"),l=h("Col"),c=h("router-link"),d=h("StarFilled"),v=h("StarOutlined"),f=h("Row");return u(!0),g(k,null,y(r.tools,((e,a)=>(u(),g(f,{key:"type"+a,gutter:{xs:8,sm:16,md:24}},{default:N((()=>[x(l,{span:24},{default:N((()=>[x(i,{orientation:"left"},{default:N((()=>[x("span",R,[e.icon?(u(),g(s,{key:0,type:e.icon},null,8,["type"])):F("",!0),x("div",null,_(e.type),1)])])),_:2},1024)])),_:2},1024),(u(!0),g(k,null,y(e.children,((a,t)=>(u(),g(l,{xs:12,sm:12,md:8,lg:6,key:"tool"+t},{default:N((()=>[/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/.test(a.link)?(u(),g(c,{key:0,target:"_blank",to:"/redirect?url="+a.link},{default:N((()=>[x("div",z,_(a.name),1)])),_:2},1032,["to"])):(u(),g(c,{key:1,to:(e.link||"")+(a.link||"")},{default:N((()=>[x("div",D,[x("span",I,_(a.name),1),n.isFav(a.name)?(u(),g("span",{key:0,class:"fav collected",onClick:j((e=>n.removeFav({name:a.name})),["prevent"])},[x(d)],8,["onClick"])):(u(),g("span",{key:1,class:"fav",onClick:j((t=>n.addFav({name:a.name,link:(e.link||"")+(a.link||"")})),["prevent"])},[x("span",P,[x(v)]),x("span",H,[x(d)])],8,["onClick"])),a.color?(u(),g("sup",{key:2,style:{color:a.color}},null,4)):F("",!0)])])),_:2},1032,["to"]))])),_:2},1024)))),128))])),_:2},1024)))),128)}));S.render=q,S.__scopeId="data-v-0ca4c60b";export default S;
