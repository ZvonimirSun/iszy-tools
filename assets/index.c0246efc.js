var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,o)=>{for(var c in o||(o={}))n.call(o,c)&&a(e,c,o[c]);if(t)for(var c of t(o))r.call(o,c)&&a(e,c,o[c]);return e};import{G as c,W as s,I as i,a7 as g,T as l,r as d,c as h,w as f,o as u,b as p,e as m}from"./vendor.d3bbf6cc.js";import{_ as b}from"./container.2c25302f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.ee08bccc.js";const{mapState:C,mapActions:_}=c("settings"),{Item:k}=s,{Title:j}=l,w={name:"设置",components:{Container:b,Form:s,Divider:i,Checkbox:g,Item:k,Title:j},computed:o({},C({settings:e=>e.settings})),methods:o({},_(["triggerMost","triggerRecent","triggerSearch","triggerType","triggerNewTab"]))},y=m("访问统计"),T=m("最常访问"),v=m("最近访问"),x=m("其他设置"),I=m("显示搜索"),O=m("显示分类"),S=m("新标签页打开工具");function M(e,t,n,r,a,o){const c=d("Title"),s=d("Checkbox"),i=d("Item"),g=d("Form"),l=d("Divider"),m=d("container");return u(),h(m,null,{default:f((()=>[p(c,{level:3},{default:f((()=>[y])),_:1}),p(g,null,{default:f((()=>[p(i,null,{default:f((()=>[p(s,{checked:e.settings.showMost,onChange:e.triggerMost},{default:f((()=>[T])),_:1},8,["checked","onChange"]),p(s,{checked:e.settings.showRecent,onChange:e.triggerRecent},{default:f((()=>[v])),_:1},8,["checked","onChange"])])),_:1})])),_:1}),p(l),p(c,{level:3},{default:f((()=>[x])),_:1}),p(g,null,{default:f((()=>[p(i,null,{default:f((()=>[p(s,{checked:e.settings.showSearch,onChange:e.triggerSearch},{default:f((()=>[I])),_:1},8,["checked","onChange"]),p(s,{checked:e.settings.showType,onChange:e.triggerType},{default:f((()=>[O])),_:1},8,["checked","onChange"]),p(s,{checked:e.settings.openInNewTab,onChange:e.triggerNewTab},{default:f((()=>[S])),_:1},8,["checked","onChange"])])),_:1})])),_:1})])),_:1})}w.render=M;export{w as default};
