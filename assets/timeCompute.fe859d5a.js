import{_ as h,aj as g,$ as D,ab as C,m as s,a as m,o as b,b as y,w as i,T as k,e,h as u}from"./vendor.06d41b47.js";import"./vue-codemirror.a18b2e75.js";import{C as U}from"./container.9c830cd9.js";/* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css               *//* empty css               */import{_ as x}from"./index.3ca3d006.js";const{Item:O}=h,{Title:j}=k,{Option:I}=C,w={name:"\u65F6\u95F4\u8BA1\u7B97",components:{Container:U,Form:h,DatePicker:g,Input:D,Item:O,Select:C,Title:j,Option:I},data(){return{moment:s,time:s(),timestamp:s().valueOf(),timestampUnit:"ms",baseTime:s(),addDays:100,resultTime:s().add(100,"days").format("YYYY-MM-DD"),startTime:s(),endTime:s().add(100,"days"),duration:100}},methods:{getContainer(r){return r.parentElement},toTime(){if(this.timestamp&&!isNaN(parseInt(this.timestamp))){const r=s(parseInt(this.timestamp+(this.timestampUnit==="s"?"000":"")));r.isValid()?this.time=r:this.time=void 0}else this.time=void 0},toTimeStamp(){if(s.isMoment(this.time))switch(this.timestampUnit){case"ms":this.timestamp=this.time.format("x");break;case"s":this.timestamp=this.time.format("X");break;default:this.timestamp=void 0;break}else this.timestamp=void 0},calculateDate(){s.isMoment(this.baseTime)&&!isNaN(parseInt(this.addDays))?this.resultTime=this.baseTime.clone().add(parseInt(this.addDays),"days").format("YYYY-MM-DD"):this.resultTime=""},calculateDuration(){s.isMoment(this.startTime)&&s.isMoment(this.endTime)?this.duration=this.endTime.diff(this.startTime,"days"):this.duration=""}}},M=u("\u8F6C\u6362\u65F6\u95F4\u6233"),Y=u("\u79D2"),S=u("\u6BEB\u79D2"),N=u("\u8BA1\u7B97\u51E0\u5929\u540E\u7684\u65E5\u671F"),F=u("\u8BA1\u7B97\u65E5\u671F\u5DEE");function P(r,t,V,B,a,l){const f=m("Title"),d=m("DatePicker"),o=m("Item"),c=m("Option"),v=m("Select"),p=m("Input"),_=m("Form"),T=m("container");return b(),y(T,null,{default:i(()=>[e(_,{layout:"vertical"},{default:i(()=>[e(f,{level:3},{default:i(()=>[M]),_:1}),e(o,{label:"\u65F6\u95F4"},{default:i(()=>[e(d,{value:a.time,"onUpdate:value":t[0]||(t[0]=n=>a.time=n),showTime:!0,style:{width:"100%"},onChange:l.toTimeStamp,onOk:l.toTimeStamp,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])]),_:1}),e(o,{label:"\u65F6\u95F4\u6233"},{default:i(()=>[e(p,{value:a.timestamp,"onUpdate:value":t[2]||(t[2]=n=>a.timestamp=n),onChange:l.toTime},{addonAfter:i(()=>[e(v,{value:a.timestampUnit,"onUpdate:value":t[1]||(t[1]=n=>a.timestampUnit=n),onChange:l.toTimeStamp},{default:i(()=>[e(c,{value:"s"},{default:i(()=>[Y]),_:1}),e(c,{value:"ms"},{default:i(()=>[S]),_:1})]),_:1},8,["value","onChange"])]),_:1},8,["value","onChange"])]),_:1}),e(f,{level:3},{default:i(()=>[N]),_:1}),e(o,{label:"\u65E5\u671F"},{default:i(()=>[e(d,{value:a.baseTime,"onUpdate:value":t[3]||(t[3]=n=>a.baseTime=n),style:{width:"100%"},onChange:l.calculateDate,onOk:l.calculateDate,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])]),_:1}),e(o,{label:"\u76F8\u5DEE\u5929\u6570\uFF08\u8F93\u5165\u8D1F\u6570\u5411\u524D\u8BA1\u7B97\uFF09"},{default:i(()=>[e(p,{value:a.addDays,"onUpdate:value":t[4]||(t[4]=n=>a.addDays=n),"addon-after":"\u5929",onChange:l.calculateDate},null,8,["value","onChange"])]),_:1}),e(o,{label:"\u76EE\u6807\u65E5\u671F"},{default:i(()=>[e(p,{value:a.resultTime,"onUpdate:value":t[5]||(t[5]=n=>a.resultTime=n),readonly:""},null,8,["value"])]),_:1}),e(f,{level:3},{default:i(()=>[F]),_:1}),e(o,{label:"\u5F00\u59CB\u65E5\u671F"},{default:i(()=>[e(d,{value:a.startTime,"onUpdate:value":t[6]||(t[6]=n=>a.startTime=n),style:{width:"100%"},onChange:l.calculateDuration,onOk:l.calculateDuration,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])]),_:1}),e(o,{label:"\u7ED3\u675F\u65E5\u671F"},{default:i(()=>[e(d,{value:a.endTime,"onUpdate:value":t[7]||(t[7]=n=>a.endTime=n),style:{width:"100%"},onChange:l.calculateDuration,onOk:l.calculateDuration,getCalendarContainer:l.getContainer},null,8,["value","onChange","onOk","getCalendarContainer"])]),_:1}),e(o,{label:"\u76F8\u5DEE\u5929\u6570"},{default:i(()=>[e(p,{value:a.duration,"onUpdate:value":t[8]||(t[8]=n=>a.duration=n),"addon-after":"\u5929",readonly:""},null,8,["value"])]),_:1})]),_:1})]),_:1})}var Q=x(w,[["render",P]]);export{Q as default};
