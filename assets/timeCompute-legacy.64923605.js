System.register(["./vendor-legacy.e29cad23.js","./container-legacy.24f6b2b0.js","./index-legacy.307817a4.js","./index-legacy.a000b4fb.js","./index-legacy.1401bf57.js","./index-legacy.a72b0b5f.js","./index-legacy.c3a455d8.js"],(function(e){"use strict";var t,a,n,i,l,s,o,u,d,m,r,c,h;return{setters:[function(e){t=e.K,a=e.a1,n=e.M,i=e.V,l=e.a2,s=e.T,o=e.r,u=e.c,d=e.w,m=e.o,r=e.b,c=e.e},function(e){h=e._},function(){},function(){},function(){},function(){},function(){}],execute:function(){const{Item:f}=t,{Title:v}=s,{Option:p}=i,C=e("default",{name:"时间计算",components:{Container:h,Form:t,DatePicker:a,Input:n,Item:f,Select:i,Title:v,Option:p},data:()=>({moment:l,time:l(),timestamp:l().valueOf(),timestampUnit:"ms",baseTime:l(),addDays:100,resultTime:l().add(100,"days").format("YYYY-MM-DD"),startTime:l(),endTime:l().add(100,"days"),duration:100}),methods:{getContainer:e=>e.parentElement,toTime(){if(this.timestamp&&!isNaN(parseInt(this.timestamp))){const e=l(parseInt(this.timestamp+("s"===this.timestampUnit?"000":"")));e.isValid()?this.time=e:this.time=void 0}else this.time=void 0},toTimeStamp(){if(l.isMoment(this.time))switch(this.timestampUnit){case"ms":this.timestamp=this.time.format("x");break;case"s":this.timestamp=this.time.format("X");break;default:this.timestamp=void 0;break}else this.timestamp=void 0},calculateDate(){l.isMoment(this.baseTime)&&!isNaN(parseInt(this.addDays))?this.resultTime=this.baseTime.clone().add(parseInt(this.addDays),"days").format("YYYY-MM-DD"):this.resultTime=""},calculateDuration(){l.isMoment(this.startTime)&&l.isMoment(this.endTime)?this.duration=this.endTime.diff(this.startTime,"days"):this.duration=""}}}),g=c("转换时间戳"),T=c("秒"),b=c("毫秒"),y=c("计算几天后的日期"),D=c("计算日期差");C.render=function(e,t,a,n,i,l){const s=o("Title"),c=o("DatePicker"),h=o("Item"),f=o("Option"),v=o("Select"),p=o("Input"),C=o("Form"),_=o("container");return m(),u(_,null,{default:d((()=>[r(C,{layout:"vertical"},{default:d((()=>[r(s,{level:3},{default:d((()=>[g])),_:1}),r(h,{label:"时间"},{default:d((()=>[r(c,{value:i.time,"onUpdate:value":t[0]||(t[0]=e=>i.time=e),showTime:!0,style:{width:"100%"},onChange:l.toTimeStamp,onOk:l.toTimeStamp,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(h,{label:"时间戳"},{default:d((()=>[r(p,{value:i.timestamp,"onUpdate:value":t[2]||(t[2]=e=>i.timestamp=e),onChange:l.toTime},{addonAfter:d((()=>[r(v,{value:i.timestampUnit,"onUpdate:value":t[1]||(t[1]=e=>i.timestampUnit=e),onChange:l.toTimeStamp},{default:d((()=>[r(f,{value:"s"},{default:d((()=>[T])),_:1}),r(f,{value:"ms"},{default:d((()=>[b])),_:1})])),_:1},8,["value","onChange"])])),_:1},8,["value","onChange"])])),_:1}),r(s,{level:3},{default:d((()=>[y])),_:1}),r(h,{label:"日期"},{default:d((()=>[r(c,{value:i.baseTime,"onUpdate:value":t[3]||(t[3]=e=>i.baseTime=e),style:{width:"100%"},onChange:l.calculateDate,onOk:l.calculateDate,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(h,{label:"相差天数（输入负数向前计算）"},{default:d((()=>[r(p,{value:i.addDays,"onUpdate:value":t[4]||(t[4]=e=>i.addDays=e),"addon-after":"天",onChange:l.calculateDate},null,8,["value","onChange"])])),_:1}),r(h,{label:"目标日期"},{default:d((()=>[r(p,{value:i.resultTime,"onUpdate:value":t[5]||(t[5]=e=>i.resultTime=e),readonly:""},null,8,["value"])])),_:1}),r(s,{level:3},{default:d((()=>[D])),_:1}),r(h,{label:"开始日期"},{default:d((()=>[r(c,{value:i.startTime,"onUpdate:value":t[6]||(t[6]=e=>i.startTime=e),style:{width:"100%"},onChange:l.calculateDuration,onOk:l.calculateDuration,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(h,{label:"结束日期"},{default:d((()=>[r(c,{value:i.endTime,"onUpdate:value":t[7]||(t[7]=e=>i.endTime=e),style:{width:"100%"},onChange:l.calculateDuration,onOk:l.calculateDuration,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])])),_:1}),r(h,{label:"相差天数"},{default:d((()=>[r(p,{value:i.duration,"onUpdate:value":t[8]||(t[8]=e=>i.duration=e),"addon-after":"天",readonly:""},null,8,["value"])])),_:1})])),_:1})])),_:1})}}}}));