import{_ as g,S as D,bA as m,r as l,o as y,c as C,w as n,a2 as b,b as e,d as u}from"./index.41cdb11f.js";/* empty css                *//* empty css                *//* empty css               */import{D as k}from"./index.cd3547ec.js";import"./index.2e041008.js";/* empty css               *//* empty css               */import{S as _}from"./index.6850d136.js";import{F as v}from"./Form.308e1db7.js";import"./useMergedState.37c962af.js";import"./shallowequal.d7f2b3d6.js";import"./useState.57baf64c.js";import"./toArray.09ef8734.js";import"./Overflow.00a4787a.js";import"./isMobile.6491fde5.js";import"./DownOutlined.f6bbac97.js";import"./SearchOutlined.636d4a7d.js";import"./Col.02153a99.js";import"./responsiveObserve.4a2d86ec.js";import"./useFlexGapSupport.07774eee.js";import"./get.01c3a585.js";import"./hasIn.c3b88e88.js";import"./_arrayIncludesWith.15e56e3a.js";import"./toFinite.44c8dd4a.js";import"./collapseMotion.e6bf9a06.js";import"./debounce.d67c9d94.js";const{Item:U}=v,{Title:O}=b,{Option:I}=_,S={name:"TimeCompute",components:{Form:v,DatePicker:k,Input:D,Item:U,Select:_,Title:O,Option:I},data(){return{dayjs:m,time:m(),timestamp:m().valueOf(),timestampUnit:"ms",baseTime:m(),addDays:100,resultTime:m().add(100,"days").format("YYYY-MM-DD"),startTime:m(),endTime:m().add(100,"days"),duration:100}},methods:{getContainer(r){return r.parentElement},toTime(){if(this.timestamp&&!isNaN(parseInt(this.timestamp))){const r=m(parseInt(this.timestamp+(this.timestampUnit==="s"?"000":"")));r.isValid()?this.time=r:this.time=void 0}else this.time=void 0},toTimeStamp(){if(m.isDayjs(this.time))switch(this.timestampUnit){case"ms":this.timestamp=this.time.format("x");break;case"s":this.timestamp=this.time.format("X");break;default:this.timestamp=void 0;break}else this.timestamp=void 0},calculateDate(){m.isDayjs(this.baseTime)&&!isNaN(parseInt(this.addDays))?this.resultTime=this.baseTime.clone().add(parseInt(this.addDays),"days").format("YYYY-MM-DD"):this.resultTime=""},calculateDuration(){m.isDayjs(this.startTime)&&m.isDayjs(this.endTime)?this.duration=this.endTime.diff(this.startTime,"days"):this.duration=""}}},w=u(" \u8F6C\u6362\u65F6\u95F4\u6233 "),Y=u(" \u79D2 "),x=u(" \u6BEB\u79D2 "),N=u(" \u8BA1\u7B97\u51E0\u5929\u540E\u7684\u65E5\u671F "),j=u(" \u8BA1\u7B97\u65E5\u671F\u5DEE ");function F(r,t,M,P,a,o){const f=l("Title"),p=l("DatePicker"),s=l("Item"),c=l("Option"),h=l("Select"),d=l("Input"),T=l("Form");return y(),C(T,{layout:"vertical"},{default:n(()=>[e(f,{level:3},{default:n(()=>[w]),_:1}),e(s,{label:"\u65F6\u95F4"},{default:n(()=>[e(p,{value:a.time,"onUpdate:value":t[0]||(t[0]=i=>a.time=i),"show-time":!0,style:{width:"100%"},"get-popup-container":o.getContainer,onChange:o.toTimeStamp,onOk:o.toTimeStamp},null,8,["value","get-popup-container","onChange","onOk"])]),_:1}),e(s,{label:"\u65F6\u95F4\u6233"},{default:n(()=>[e(d,{value:a.timestamp,"onUpdate:value":t[2]||(t[2]=i=>a.timestamp=i),onChange:o.toTime},{addonAfter:n(()=>[e(h,{value:a.timestampUnit,"onUpdate:value":t[1]||(t[1]=i=>a.timestampUnit=i),onChange:o.toTimeStamp},{default:n(()=>[e(c,{value:"s"},{default:n(()=>[Y]),_:1}),e(c,{value:"ms"},{default:n(()=>[x]),_:1})]),_:1},8,["value","onChange"])]),_:1},8,["value","onChange"])]),_:1}),e(f,{level:3},{default:n(()=>[N]),_:1}),e(s,{label:"\u65E5\u671F"},{default:n(()=>[e(p,{value:a.baseTime,"onUpdate:value":t[3]||(t[3]=i=>a.baseTime=i),style:{width:"100%"},"get-popup-container":o.getContainer,onChange:o.calculateDate,onOk:o.calculateDate},null,8,["value","get-popup-container","onChange","onOk"])]),_:1}),e(s,{label:"\u76F8\u5DEE\u5929\u6570\uFF08\u8F93\u5165\u8D1F\u6570\u5411\u524D\u8BA1\u7B97\uFF09"},{default:n(()=>[e(d,{value:a.addDays,"onUpdate:value":t[4]||(t[4]=i=>a.addDays=i),"addon-after":"\u5929",onChange:o.calculateDate},null,8,["value","onChange"])]),_:1}),e(s,{label:"\u76EE\u6807\u65E5\u671F"},{default:n(()=>[e(d,{value:a.resultTime,"onUpdate:value":t[5]||(t[5]=i=>a.resultTime=i),readonly:""},null,8,["value"])]),_:1}),e(f,{level:3},{default:n(()=>[j]),_:1}),e(s,{label:"\u5F00\u59CB\u65E5\u671F"},{default:n(()=>[e(p,{value:a.startTime,"onUpdate:value":t[6]||(t[6]=i=>a.startTime=i),style:{width:"100%"},"get-popup-container":o.getContainer,onChange:o.calculateDuration,onOk:o.calculateDuration},null,8,["value","get-popup-container","onChange","onOk"])]),_:1}),e(s,{label:"\u7ED3\u675F\u65E5\u671F"},{default:n(()=>[e(p,{value:a.endTime,"onUpdate:value":t[7]||(t[7]=i=>a.endTime=i),style:{width:"100%"},"get-popup-container":o.getContainer,onChange:o.calculateDuration,onOk:o.calculateDuration},null,8,["value","get-popup-container","onChange","onOk"])]),_:1}),e(s,{label:"\u76F8\u5DEE\u5929\u6570"},{default:n(()=>[e(d,{value:a.duration,"onUpdate:value":t[8]||(t[8]=i=>a.duration=i),"addon-after":"\u5929",readonly:""},null,8,["value"])]),_:1})]),_:1})}var ue=g(S,[["render",F],["__scopeId","data-v-5cf48aa8"]]);export{ue as default};
