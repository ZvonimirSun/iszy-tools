var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,o)=>{for(var s in o||(o={}))n.call(o,s)&&a(e,s,o[s]);if(t)for(var s of t(o))r.call(o,s)&&a(e,s,o[s]);return e};import{v as s,O as c,D as i,a8 as g,T as l,r as d,c as h,w as u,o as f,b as p,e as m}from"./vendor.03c54d76.js";import{_ as b}from"./container.0c5c7edf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const{mapState:C,mapActions:_}=s("settings"),{Item:k}=c,{Title:w}=l,j={name:"设置",components:{Container:b,Form:c,Divider:i,Checkbox:g,Item:k,Title:w},computed:o({},C({settings:e=>e.settings})),methods:o({},_(["triggerMost","triggerRecent","triggerSearch","triggerType","triggerNewTab"]))},v=m("访问统计"),y=m("最常访问"),T=m("最近访问"),x=m("其他设置"),O=m("显示搜索"),I=m("显示分类"),S=m("新标签页打开工具");function D(e,t,n,r,a,o){const s=d("Title"),c=d("Checkbox"),i=d("Item"),g=d("Form"),l=d("Divider"),m=d("container");return f(),h(m,null,{default:u((()=>[p(s,{level:3},{default:u((()=>[v])),_:1}),p(g,null,{default:u((()=>[p(i,null,{default:u((()=>[p(c,{checked:e.settings.showMost,onChange:e.triggerMost},{default:u((()=>[y])),_:1},8,["checked","onChange"]),p(c,{checked:e.settings.showRecent,onChange:e.triggerRecent},{default:u((()=>[T])),_:1},8,["checked","onChange"])])),_:1})])),_:1}),p(l),p(s,{level:3},{default:u((()=>[x])),_:1}),p(g,null,{default:u((()=>[p(i,null,{default:u((()=>[p(c,{checked:e.settings.showSearch,onChange:e.triggerSearch},{default:u((()=>[O])),_:1},8,["checked","onChange"]),p(c,{checked:e.settings.showType,onChange:e.triggerType},{default:u((()=>[I])),_:1},8,["checked","onChange"]),p(c,{checked:e.settings.openInNewTab,onChange:e.triggerNewTab},{default:u((()=>[S])),_:1},8,["checked","onChange"])])),_:1})])),_:1})])),_:1})}j.render=D;export{j as default};
