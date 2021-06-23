!function(){var e=document.createElement("style");e.innerHTML="",document.head.appendChild(e),System.register(["./vendor-legacy.18c9575e.js","./container-legacy.fbe7a9dc.js","./index-legacy.307817a4.js","./index-legacy.a000b4fb.js","./index-legacy.e4224cfd.js","./index-legacy.bcd8fb0e.js","./index-legacy.c3a455d8.js"],(function(e){"use strict";var t,a,n,i,l,s,o,d,u,m,r,c,h,f,p;return{setters:[function(e){t=e.G,a=e.Y,n=e.I,i=e.N,l=e.Z,s=e.T,o=e.p,d=e.a,u=e.o,m=e.c,r=e.b,c=e.w,h=e.d,f=e.r},function(e){p=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){const{Item:v}=t,{Title:C}=s,{Option:g}=i,T=e("default",{name:"时间计算",components:{Container:p,Form:t,DatePicker:a,Input:n,Item:v,Select:i,Title:C,Option:g},data:()=>({moment:l,time:l(),timestamp:l().valueOf(),timestampUnit:"ms",baseTime:l(),addDays:100,resultTime:l().add(100,"days").format("YYYY-MM-DD"),startTime:l(),endTime:l().add(100,"days"),duration:100}),methods:{getContainer:e=>e.parentElement,toTime(){if(this.timestamp&&!isNaN(parseInt(this.timestamp))){const e=l(parseInt(this.timestamp+("s"===this.timestampUnit?"000":"")));e.isValid()?this.time=e:this.time=void 0}else this.time=void 0},toTimeStamp(){if(l.isMoment(this.time))switch(this.timestampUnit){case"ms":this.timestamp=this.time.format("x");break;case"s":this.timestamp=this.time.format("X");break;default:this.timestamp=void 0;break}else this.timestamp=void 0},calculateDate(){l.isMoment(this.baseTime)&&!isNaN(parseInt(this.addDays))?this.resultTime=this.baseTime.clone().add(parseInt(this.addDays),"days").format("YYYY-MM-DD"):this.resultTime=""},calculateDuration(){l.isMoment(this.startTime)&&l.isMoment(this.endTime)?this.duration=this.endTime.diff(this.startTime,"days"):this.duration=""}}}),y=c();o("data-v-c248af36");const b=h("转换时间戳"),D=h("秒"),_=h("毫秒"),U=h("计算几天后的日期"),k=h("计算日期差");d();const O=y(((e,t,a,n,i,l)=>{const s=f("Title"),o=f("DatePicker"),d=f("Item"),c=f("Option"),h=f("Select"),p=f("Input"),v=f("Form"),C=f("container");return u(),m(C,null,{default:y((()=>[r(v,{layout:"vertical"},{default:y((()=>[r(s,{level:3},{default:y((()=>[b])),_:1}),r(d,{label:"时间"},{default:y((()=>[r(o,{value:i.time,"onUpdate:value":t[1]||(t[1]=e=>i.time=e),showTime:!0,style:{width:"100%"},onChange:l.toTimeStamp,onOk:l.toTimeStamp,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(d,{label:"时间戳"},{default:y((()=>[r(p,{value:i.timestamp,"onUpdate:value":t[3]||(t[3]=e=>i.timestamp=e),onChange:l.toTime},{addonAfter:y((()=>[r(h,{value:i.timestampUnit,"onUpdate:value":t[2]||(t[2]=e=>i.timestampUnit=e),onChange:l.toTimeStamp},{default:y((()=>[r(c,{value:"s"},{default:y((()=>[D])),_:1}),r(c,{value:"ms"},{default:y((()=>[_])),_:1})])),_:1},8,["value","onChange"])])),_:1},8,["value","onChange"])])),_:1}),r(s,{level:3},{default:y((()=>[U])),_:1}),r(d,{label:"日期"},{default:y((()=>[r(o,{value:i.baseTime,"onUpdate:value":t[4]||(t[4]=e=>i.baseTime=e),style:{width:"100%"},onChange:l.calculateDate,onOk:l.calculateDate,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(d,{label:"相差天数（输入负数向前计算）"},{default:y((()=>[r(p,{value:i.addDays,"onUpdate:value":t[5]||(t[5]=e=>i.addDays=e),"addon-after":"天",onChange:l.calculateDate},null,8,["value","onChange"])])),_:1}),r(d,{label:"目标日期"},{default:y((()=>[r(p,{value:i.resultTime,"onUpdate:value":t[6]||(t[6]=e=>i.resultTime=e),readonly:""},null,8,["value"])])),_:1}),r(s,{level:3},{default:y((()=>[k])),_:1}),r(d,{label:"开始日期"},{default:y((()=>[r(o,{value:i.startTime,"onUpdate:value":t[7]||(t[7]=e=>i.startTime=e),style:{width:"100%"},onChange:l.calculateDuration,onOk:l.calculateDuration,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(d,{label:"结束日期"},{default:y((()=>[r(o,{value:i.endTime,"onUpdate:value":t[8]||(t[8]=e=>i.endTime=e),style:{width:"100%"},onChange:l.calculateDuration,onOk:l.calculateDuration,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(d,{label:"相差天数"},{default:y((()=>[r(p,{value:i.duration,"onUpdate:value":t[9]||(t[9]=e=>i.duration=e),"addon-after":"天",readonly:""},null,8,["value"])])),_:1})])),_:1})])),_:1})}));T.render=O,T.__scopeId="data-v-c248af36"}}}))}();
