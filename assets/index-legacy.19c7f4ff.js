System.register(["./vendor-legacy.a14b489d.js","./container-legacy.ce565eab.js","./index-legacy.307817a4.js","./index-legacy.a000b4fb.js","./index-legacy.c3a455d8.js","./index-legacy.7738458e.js"],(function(e){"use strict";var t,n,c,a,g,o,i,r,s,d,l,u,h,f;return{setters:[function(e){t=e.n,n=e.G,c=e.D,a=e.a1,g=e.T,o=e.p,i=e.a,r=e.o,s=e.c,d=e.b,l=e.w,u=e.d,h=e.r},function(e){f=e._},function(){},function(){},function(){},function(){}],execute:function(){const{mapState:_,mapActions:C}=t("settings"),{Item:k}=n,{Title:m}=g,b=e("default",{name:"设置",components:{Container:f,Form:n,Divider:c,Checkbox:a,Item:k,Title:m},computed:{..._({settings:e=>e.settings})},methods:{...C(["triggerMost","triggerRecent","triggerSearch","triggerType","triggerNewTab"])}}),p=l();o("data-v-00c59cff");const y=u("访问统计"),T=u("最常访问"),v=u("最近访问"),w=u("其他设置"),x=u("显示搜索"),j=u("显示分类"),I=u("新标签页打开工具");i();const S=p(((e,t,n,c,a,g)=>{const o=h("Title"),i=h("Checkbox"),l=h("Item"),u=h("Form"),f=h("Divider"),_=h("container");return r(),s(_,null,{default:p((()=>[d(o,{level:3},{default:p((()=>[y])),_:1}),d(u,null,{default:p((()=>[d(l,null,{default:p((()=>[d(i,{checked:e.settings.showMost,onChange:e.triggerMost},{default:p((()=>[T])),_:1},8,["checked","onChange"]),d(i,{checked:e.settings.showRecent,onChange:e.triggerRecent},{default:p((()=>[v])),_:1},8,["checked","onChange"])])),_:1})])),_:1}),d(f),d(o,{level:3},{default:p((()=>[w])),_:1}),d(u,null,{default:p((()=>[d(l,null,{default:p((()=>[d(i,{checked:e.settings.showSearch,onChange:e.triggerSearch},{default:p((()=>[x])),_:1},8,["checked","onChange"]),d(i,{checked:e.settings.showType,onChange:e.triggerType},{default:p((()=>[j])),_:1},8,["checked","onChange"]),d(i,{checked:e.settings.openInNewTab,onChange:e.triggerNewTab},{default:p((()=>[I])),_:1},8,["checked","onChange"])])),_:1})])),_:1})])),_:1})}));b.render=S,b.__scopeId="data-v-00c59cff"}}}));
