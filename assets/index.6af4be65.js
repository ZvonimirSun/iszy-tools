var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,o)=>{for(var s in o||(o={}))n.call(o,s)&&r(e,s,o[s]);if(t)for(var s of t(o))a.call(o,s)&&r(e,s,o[s]);return e};import{E as s,_ as i,a9 as c,ag as d,a as g,o as l,c as h,w as f,T as u,b as p,g as m}from"./vendor.588f181b.js";import{C as b}from"./container.d6ed78ed.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as C}from"./index.dad6b4ad.js";const{mapState:_,mapActions:k}=s("settings"),{Item:j}=i,{Title:w}=u,v={name:"设置",components:{Container:b,Form:i,Divider:c,Checkbox:d,Item:j,Title:w},computed:o({},_({settings:e=>e.settings})),methods:o({},k(["triggerMost","triggerRecent","triggerSearch","triggerType","triggerNewTab"]))},y=m("访问统计"),T=m("最常访问"),x=m("最近访问"),O=m("其他设置"),I=m("显示搜索"),S=m("显示分类"),M=m("新标签页打开工具");function N(e,t,n,a,r,o){const s=g("Title"),i=g("Checkbox"),c=g("Item"),d=g("Form"),u=g("Divider"),m=g("container");return l(),h(m,null,{default:f((()=>[p(s,{level:3},{default:f((()=>[y])),_:1}),p(d,null,{default:f((()=>[p(c,null,{default:f((()=>[p(i,{checked:e.settings.showMost,onChange:e.triggerMost},{default:f((()=>[T])),_:1},8,["checked","onChange"]),p(i,{checked:e.settings.showRecent,onChange:e.triggerRecent},{default:f((()=>[x])),_:1},8,["checked","onChange"])])),_:1})])),_:1}),p(u),p(s,{level:3},{default:f((()=>[O])),_:1}),p(d,null,{default:f((()=>[p(c,null,{default:f((()=>[p(i,{checked:e.settings.showSearch,onChange:e.triggerSearch},{default:f((()=>[I])),_:1},8,["checked","onChange"]),p(i,{checked:e.settings.showType,onChange:e.triggerType},{default:f((()=>[S])),_:1},8,["checked","onChange"]),p(i,{checked:e.settings.openInNewTab,onChange:e.triggerNewTab},{default:f((()=>[M])),_:1},8,["checked","onChange"])])),_:1})])),_:1})])),_:1})}var P=C(v,[["render",N]]);export{P as default};
