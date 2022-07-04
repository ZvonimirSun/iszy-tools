import{a as t,_ as Z,j as D,k as j,l as N,t as E,r as k,o,m as l,c as u,w as i,n as b,F as p,p as y,q as n,s as B,v as S,x,y as g,b as V,z as _,D as Y}from"./index.6b075e9a.js";/* empty css              */import{I as M}from"./index.8bd331fe.js";import{_ as R,a as F}from"./index.af739891.js";import"./Col.a9a9e3f5.js";import"./responsiveObserve.b9846712.js";import"./useFlexGapSupport.961efcb4.js";var $=M("search",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),T=M("star",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])});const{mapActions:W,mapGetters:X,mapState:q,mapMutations:G}=D("user"),P={name:"HomePage",components:{Star:T,Search:$},data:()=>({searchStr:"",count:6}),computed:{tools(){let e;return this.settings.showType?e=[...E||[]]:e=[{type:"\u5DE5\u5177",icon:"i-icon-park-solid-all-application",children:this.allTools}],this.settings.showRecent&&this.recent.length>0&&e.unshift({type:"\u6700\u8FD1\u8BBF\u95EE",icon:"i-icon-park-outline-history",children:this.recent(this.count)}),this.settings.showMost&&this.most.length>0&&e.unshift({type:"\u6700\u5E38\u8BBF\u95EE",icon:"i-icon-park-solid-concern",children:this.most(this.count)}),this.favorite.length>0&&e.unshift({type:"\u6536\u85CF",icon:"i-icon-park-solid-folder-focus",children:this.favorite}),this.searchStr&&(e=e.map(r=>{const c=j(r);return c.children=c.children.filter(m=>{const w=m.tags||[],d=this.searchStr.toLowerCase();return m.name.toLowerCase().includes(d)||m.link.toLowerCase().includes(d)||w.some(f=>f.includes(d))}),c})),e.filter(r=>Array.isArray(r.children)&&r.children.length>0)},allTools(){return N([...E||[]].map(e=>e.children))},...q(["settings","favorite"]),...X(["most","recent","isFav"])},mounted(){this.fixFavorite()},methods:{...G(["updateFav"]),...W(["fixFavorite"])}},U={class:"search"},J={class:"typeName"},K={class:"toolName"},O=["onClick"],Q=["onClick"],ee={class:"nonHover"},te={class:"hovered"};function ae(e,r,c,m,w,d){const f=k("search"),h=F,C=R,v=k("Star"),z=Y,L=k("router-link");return o(),l(p,null,[e.settings.showSearch?(o(),u(C,{key:0,gutter:{xs:8,sm:16,md:24},class:"noName"},{default:i(()=>[t(h,{span:24},{default:i(()=>[n("div",U,[t(f,{theme:"outline"}),B(n("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>e.searchStr=s),type:"search",placeholder:"\u641C\u7D22\u5DE5\u5177"},null,512),[[S,e.searchStr]])])]),_:1})]),_:1})):b("",!0),(o(!0),l(p,null,y(d.tools,(s,H)=>(o(),u(C,{key:"type"+H,gutter:{xs:8,sm:16}},{default:i(()=>[t(h,{span:24,class:"typeNameCol"},{default:i(()=>[n("div",J,[s.icon?(o(),l("span",{key:0,class:x(s.icon)},null,2)):b("",!0),n("div",null,g(s.type),1)])]),_:2},1024),(o(!0),l(p,null,y(s.children,(a,I)=>(o(),u(h,{key:"tool"+I,xs:12,sm:12,md:8,lg:6,xl:4,xxl:3},{default:i(()=>[t(L,{target:e.settings.openInNewTab||/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(a.link)?"_blank":"",to:/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(a.link)?"/redirect?url="+a.link:a.link||""},{default:i(()=>[t(z,null,{title:i(()=>[V(g(a.name),1)]),default:i(()=>[n("div",{class:x(["tool",{toolCollected:e.isFav(a.name)}])},[n("span",K,g(a.name),1),e.isFav(a.name)?(o(),l("span",{key:0,class:"fav collected",onClick:_(A=>e.updateFav({name:a.name}),["prevent"])},[t(v,{theme:"filled"})],8,O)):(o(),l("span",{key:1,class:"fav",onClick:_(A=>e.updateFav({name:a.name,link:a.link||"",add:!0}),["prevent"])},[n("span",ee,[t(v,{theme:"outline"})]),n("span",te,[t(v,{theme:"filled"})])],8,Q))],2)]),_:2},1024)]),_:2},1032,["target","to"])]),_:2},1024))),128))]),_:2},1024))),128))],64)}var ce=Z(P,[["render",ae],["__scopeId","data-v-5022cf10"]]);export{ce as default};
