import{ac as v,ar as C,ad as g,as as T,K as l,u as D,x as i,T as y,r as m,o as b,f as e,E as r}from"./vendor.744634da.js";/* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import{_ as k}from"./index.d4691755.js";const{Item:U}=v,{Title:O}=y,{Option:P}=T,I={name:"\u65F6\u95F4\u8BA1\u7B97",components:{Form:v,DatePicker:C,Input:g,Item:U,Select:T,Title:O,Option:P},data(){return{dayjs:l,time:l(),timestamp:l().valueOf(),timestampUnit:"ms",baseTime:l(),addDays:100,resultTime:l().add(100,"days").format("YYYY-MM-DD"),startTime:l(),endTime:l().add(100,"days"),duration:100}},methods:{getContainer(u){return u.parentElement},toTime(){if(this.timestamp&&!isNaN(parseInt(this.timestamp))){const u=l(parseInt(this.timestamp+(this.timestampUnit==="s"?"000":"")));u.isValid()?this.time=u:this.time=void 0}else this.time=void 0},toTimeStamp(){if(l.isDayjs(this.time))switch(this.timestampUnit){case"ms":this.timestamp=this.time.format("x");break;case"s":this.timestamp=this.time.format("X");break;default:this.timestamp=void 0;break}else this.timestamp=void 0},calculateDate(){l.isDayjs(this.baseTime)&&!isNaN(parseInt(this.addDays))?this.resultTime=this.baseTime.clone().add(parseInt(this.addDays),"days").format("YYYY-MM-DD"):this.resultTime=""},calculateDuration(){l.isDayjs(this.startTime)&&l.isDayjs(this.endTime)?this.duration=this.endTime.diff(this.startTime,"days"):this.duration=""}}},Y=r("\u8F6C\u6362\u65F6\u95F4\u6233"),w=r("\u79D2"),x=r("\u6BEB\u79D2"),S=r("\u8BA1\u7B97\u51E0\u5929\u540E\u7684\u65E5\u671F"),j=r("\u8BA1\u7B97\u65E5\u671F\u5DEE");function N(u,t,M,F,a,s){const f=m("Title"),d=m("DatePicker"),o=m("Item"),h=m("Option"),c=m("Select"),p=m("Input"),_=m("Form");return b(),D(_,{layout:"vertical"},{default:i(()=>[e(f,{level:3},{default:i(()=>[Y]),_:1}),e(o,{label:"\u65F6\u95F4"},{default:i(()=>[e(d,{value:a.time,"onUpdate:value":t[0]||(t[0]=n=>a.time=n),showTime:!0,style:{width:"100%"},onChange:s.toTimeStamp,onOk:s.toTimeStamp,getPopupContainer:s.getContainer},null,8,["value","onChange","onOk","getPopupContainer"])]),_:1}),e(o,{label:"\u65F6\u95F4\u6233"},{default:i(()=>[e(p,{value:a.timestamp,"onUpdate:value":t[2]||(t[2]=n=>a.timestamp=n),onChange:s.toTime},{addonAfter:i(()=>[e(c,{value:a.timestampUnit,"onUpdate:value":t[1]||(t[1]=n=>a.timestampUnit=n),onChange:s.toTimeStamp},{default:i(()=>[e(h,{value:"s"},{default:i(()=>[w]),_:1}),e(h,{value:"ms"},{default:i(()=>[x]),_:1})]),_:1},8,["value","onChange"])]),_:1},8,["value","onChange"])]),_:1}),e(f,{level:3},{default:i(()=>[S]),_:1}),e(o,{label:"\u65E5\u671F"},{default:i(()=>[e(d,{value:a.baseTime,"onUpdate:value":t[3]||(t[3]=n=>a.baseTime=n),style:{width:"100%"},onChange:s.calculateDate,onOk:s.calculateDate,getPopupContainer:s.getContainer},null,8,["value","onChange","onOk","getPopupContainer"])]),_:1}),e(o,{label:"\u76F8\u5DEE\u5929\u6570\uFF08\u8F93\u5165\u8D1F\u6570\u5411\u524D\u8BA1\u7B97\uFF09"},{default:i(()=>[e(p,{value:a.addDays,"onUpdate:value":t[4]||(t[4]=n=>a.addDays=n),"addon-after":"\u5929",onChange:s.calculateDate},null,8,["value","onChange"])]),_:1}),e(o,{label:"\u76EE\u6807\u65E5\u671F"},{default:i(()=>[e(p,{value:a.resultTime,"onUpdate:value":t[5]||(t[5]=n=>a.resultTime=n),readonly:""},null,8,["value"])]),_:1}),e(f,{level:3},{default:i(()=>[j]),_:1}),e(o,{label:"\u5F00\u59CB\u65E5\u671F"},{default:i(()=>[e(d,{value:a.startTime,"onUpdate:value":t[6]||(t[6]=n=>a.startTime=n),style:{width:"100%"},onChange:s.calculateDuration,onOk:s.calculateDuration,getPopupContainer:s.getContainer},null,8,["value","onChange","onOk","getPopupContainer"])]),_:1}),e(o,{label:"\u7ED3\u675F\u65E5\u671F"},{default:i(()=>[e(d,{value:a.endTime,"onUpdate:value":t[7]||(t[7]=n=>a.endTime=n),style:{width:"100%"},onChange:s.calculateDuration,onOk:s.calculateDuration,getPopupContainer:s.getContainer},null,8,["value","onChange","onOk","getPopupContainer"])]),_:1}),e(o,{label:"\u76F8\u5DEE\u5929\u6570"},{default:i(()=>[e(p,{value:a.duration,"onUpdate:value":t[8]||(t[8]=n=>a.duration=n),"addon-after":"\u5929",readonly:""},null,8,["value"])]),_:1})]),_:1})}var G=k(I,[["render",N]]);export{G as default};
