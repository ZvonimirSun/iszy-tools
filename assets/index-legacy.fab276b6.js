System.register(["./vendor-legacy.a9b3a1e2.js","./container-legacy.6fdc350e.js","./index-legacy.307817a4.js","./index-legacy.a000b4fb.js","./index-legacy.c3a455d8.js","./index-legacy.7738458e.js"],(function(e){"use strict";var t,n,c,a,g,i,o,r,s,l,d,u;return{setters:[function(e){t=e.s,n=e.K,c=e.D,a=e.a3,g=e.T,i=e.r,o=e.c,r=e.w,s=e.o,l=e.b,d=e.e},function(e){u=e._},function(){},function(){},function(){},function(){}],execute:function(){const{mapState:h,mapActions:f}=t("settings"),{Item:C}=n,{Title:_}=g,k=e("default",{name:"设置",components:{Container:u,Form:n,Divider:c,Checkbox:a,Item:C,Title:_},computed:{...h({settings:e=>e.settings})},methods:{...f(["triggerMost","triggerRecent","triggerSearch","triggerType","triggerNewTab"])}}),m=d("访问统计"),y=d("最常访问"),T=d("最近访问"),b=d("其他设置"),p=d("显示搜索"),w=d("显示分类"),x=d("新标签页打开工具");k.render=function(e,t,n,c,a,g){const d=i("Title"),u=i("Checkbox"),h=i("Item"),f=i("Form"),C=i("Divider"),_=i("container");return s(),o(_,null,{default:r((()=>[l(d,{level:3},{default:r((()=>[m])),_:1}),l(f,null,{default:r((()=>[l(h,null,{default:r((()=>[l(u,{checked:e.settings.showMost,onChange:e.triggerMost},{default:r((()=>[y])),_:1},8,["checked","onChange"]),l(u,{checked:e.settings.showRecent,onChange:e.triggerRecent},{default:r((()=>[T])),_:1},8,["checked","onChange"])])),_:1})])),_:1}),l(C),l(d,{level:3},{default:r((()=>[b])),_:1}),l(f,null,{default:r((()=>[l(h,null,{default:r((()=>[l(u,{checked:e.settings.showSearch,onChange:e.triggerSearch},{default:r((()=>[p])),_:1},8,["checked","onChange"]),l(u,{checked:e.settings.showType,onChange:e.triggerType},{default:r((()=>[w])),_:1},8,["checked","onChange"]),l(u,{checked:e.settings.openInNewTab,onChange:e.triggerNewTab},{default:r((()=>[x])),_:1},8,["checked","onChange"])])),_:1})])),_:1})])),_:1})}}}}));
