import{Q as w,_ as B,cs as c,a0 as x,o as b,L as R,a as n,w as l,F as M,M as D,b as h,T as I,a2 as A,c as q,a1 as S,I as C,B as O,U as V,V as Y}from"./index.5225add7.js";import{_ as z}from"./index.f2e94529.js";/* empty css               */import"./index.5685a773.js";import"./index.ef8e500e.js";import"./index.e549b933.js";import"./index.84d0e78f.js";import"./index.1c9f68c4.js";import{S as T,_ as E}from"./index.405fbb5c.js";import"./index.9790d9e2.js";/* empty css              *//* empty css               */import{_ as G}from"./index.11b29ebb.js";import{_ as Q}from"./index.88ce7c47.js";import{D as H}from"./index.3b8e1129.js";import"./index.65913dc2.js";import{_ as J,a as K}from"./index.644aabd5.js";import{_ as W}from"./FormItem.2fec0685.js";import{F as X}from"./Form.3121af8c.js";import"./css.1dd79e5e.js";import"./useState.90c9e9c5.js";import"./toArray.1be0410b.js";import"./DownOutlined.b214cb59.js";import"./index.6d9cfe6b.js";import"./index.c8dc48cb.js";import"./index.f4b84ce8.js";import"./Menu.ee3efe1f.js";import"./shallowequal.05a05f98.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Overflow.8a0d7c87.js";import"./collapseMotion.450b64d3.js";import"./SearchOutlined.9e529e46.js";import"./index.4a052f07.js";import"./Password.ae24f417.js";import"./EyeOutlined.8276209c.js";import"./Checkbox.761cc3ac.js";import"./responsiveObserve.b8aa4967.js";import"./isMobile.481c1aec.js";import"./useFlexGapSupport.08dd27fd.js";import"./Col.6da9c2a9.js";import"./get.af123360.js";import"./hasIn.47b3f0c3.js";import"./toInteger.b3f7ff85.js";import"./toFinite.f1c80f15.js";var L={exports:{}};(function(e,t){(function(s,r){e.exports=r()})(w,function(){return function(s,r,p){r.prototype.isBetween=function(a,d,m,u){var o=p(a),y=p(d),_=(u=u||"()")[0]==="(",v=u[1]===")";return(_?this.isAfter(o,m):!this.isBefore(o,m))&&(v?this.isBefore(y,m):!this.isAfter(y,m))||(_?this.isBefore(o,m):!this.isAfter(o,m))&&(v?this.isAfter(y,m):!this.isBefore(y,m))}}})})(L);const Z=L.exports;c.extend(Z);const $={name:"MtqLoans",data:()=>({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:c(),prepayment:[],columns:[{title:"\u671F\u6B21",dataIndex:"times",key:"times"},{title:"\u8FD8\u6B3E\u65E5\u671F",dataIndex:"repaymentDate",key:"repaymentDate"},{title:"\u6BCF\u6708\u8FD8\u6B3E",dataIndex:"monthlyAmount",key:"monthlyAmount"},{title:"\u507F\u8FD8\u5229\u606F",dataIndex:"interestRepayment",key:"interestRepayment"},{title:"\u507F\u8FD8\u672C\u91D1",dataIndex:"principalRepayment",key:"principalRepayment"},{title:"\u5269\u4F59\u672C\u91D1",dataIndex:"remainingPrincipal",key:"remainingPrincipal"}],dateFormat:"YYYY/MM/DD"}),computed:{options:function(){const e={};if(!isNaN(parseFloat(this.loanAmount))&&parseFloat(this.loanAmount)>0&&(e.loanAmount=parseFloat(this.loanAmount)),Number.isInteger(parseFloat(this.loanMonth))&&parseFloat(this.loanMonth)>0&&(e.loanMonth=parseInt(this.loanMonth)),!isNaN(parseFloat(this.lendingRates))&&parseFloat(this.lendingRates)>0&&(e.lendingRates=parseFloat(this.lendingRates)),c.isDayjs(this.firstRepaymentDate))if(e.firstRepaymentDate=this.firstRepaymentDate,this.prepayment.length===0)e.prepayment=this.prepayment;else{let t=!0;for(const s in this.prepayment)if(s==="0"){if(!(c.isDayjs(this.prepayment[s].repaymentDate)&&this.prepayment[s].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1,"M"),"days")>=0)){t=!1;break}}else if(!(c.isDayjs(this.prepayment[s].repaymentDate)&&this.prepayment[s].repaymentDate.diff(this.prepayment[s-1].repaymentDate,"days")>=0)){t=!1;break}t&&(e.prepayment=this.prepayment)}return e},isValidOptions:function(){return Object.keys(this.options).length>=5},originDataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),this.repayment==="equalLoan"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};for(let s=1;s<=this.options.loanMonth;s++){const r=Number((-P(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2)),p=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2)),a=Number((r-p).toFixed(2));t.loanAmount-=a,t.loanMonth--,e.push({key:s,times:s,repaymentDate:this.options.firstRepaymentDate.clone().add(s-1,"M").format(this.dateFormat),monthlyAmount:r,interestRepayment:p,principalRepayment:a,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if(this.repayment==="equalPrincipal"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth};for(let s=1;s<=this.options.loanMonth;s++){const r=Number((t.loanAmount/t.loanMonth).toFixed(2)),p=Number((t.loanAmount*this.options.lendingRates/100/12).toFixed(2)),a=Number((r+p).toFixed(2));t.loanAmount-=r,t.loanMonth--,e.push({key:s,times:s,repaymentDate:this.options.firstRepaymentDate.clone().add(s-1,"M").format(this.dateFormat),monthlyAmount:a,interestRepayment:p,principalRepayment:r,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}else return[]},dataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),this.repayment==="equalLoan"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let s=0,r=0;const p=x(this.options.prepayment);for(let a=1;a<=this.options.loanMonth-s;a++){if(a>0)for(;p.length>0&&p[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(a-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(a-1,"M"),"[)");){const o=p.shift();t.loanAmount-=Number(o.repaymentAmount),t.lendingRates=Number(o.lendingRates||0),t.loanMonth-=Number(o.adjustLoanMonth||0),s+=Number(o.adjustLoanMonth||0),e.push({repaymentDate:o.repaymentDate.format(this.dateFormat),principalRepayment:o.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const d=Number((-P(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2));let m=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));r+=t.loanAmount*t.lendingRates/100/12-m;const u=Number((d-m).toFixed(2));t.loanAmount-=u,t.loanMonth--,t.loanMonth===0&&(m=Number((m+r).toFixed(2))),e.push({key:a,times:a,repaymentDate:this.options.firstRepaymentDate.clone().add(a-1,"M").format(this.dateFormat),monthlyAmount:d,interestRepayment:m,principalRepayment:u,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if(this.repayment==="equalPrincipal"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let s=0,r=0;const p=x(this.options.prepayment);for(let a=1;a<=this.options.loanMonth-s;a++){if(p.length>0&&a>1&&p[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(a-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(a-1,"M"),"[)")){const o=p.shift();t.loanAmount-=Number(o.repaymentAmount),t.lendingRates=Number(o.lendingRates||0),t.loanMonth-=Number(o.adjustLoanMonth||0),s+=Number(o.adjustLoanMonth||0),e.push({repaymentDate:o.repaymentDate.format(this.dateFormat),principalRepayment:o.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const d=Number((t.loanAmount/t.loanMonth).toFixed(2));let m=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));r+=t.loanAmount*t.lendingRates/100/12-m;const u=Number((d+m).toFixed(2));t.loanAmount-=d,t.loanMonth--,t.loanMonth===0&&(m=Number((m+r).toFixed(2))),e.push({key:a,times:a,repaymentDate:this.options.firstRepaymentDate.clone().add(a-1,"M").format(this.dateFormat),monthlyAmount:u,interestRepayment:m,principalRepayment:d,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}else return[]},originalCumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.originDataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.dataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeRepayment:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.repaymentAmount||0);return e.toFixed(2)},cumulativeAdjustLoanMonth:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.adjustLoanMonth||0);return e.toFixed(2)},savedMoney:function(){return(Number(this.originalCumulativeInterestPayment)-Number(this.cumulativeInterestPayment)).toFixed(2)}},watch:{repaymentPeriod(e){e!==0?this.loanMonth=e*12:this.loanMonth=120}},methods:{addPrepayment(){let e,t;this.prepayment.length===0?(e=this.firstRepaymentDate||c(),t=this.lendingRates||0):(e=this.prepayment[this.prepayment.length-1].repaymentDate||c(),t=this.prepayment[this.prepayment.length-1].lendingRates||0),this.prepayment.push({repaymentDate:e,repaymentAmount:0,adjustLoanMonth:0,lendingRates:t})},removePrepayment(){this.prepayment.pop()}}};function P(e,t,s,r,p){if(r=typeof r<"u"?r:0,p=typeof p<"u"?p:0,e!==0){const a=Math.pow(1+e,t);return-(e*(r+a*s))/((-1+a)*(1+e*p))}else if(t!==0)return-(r+s)/t;return 0}const tt=e=>(V("data-v-75c01b2e"),e=e(),Y(),e),et=tt(()=>D("span",{class:"tips"},"\u8BA1\u7B97\u4EC5\u4F9B\u53C2\u8003\uFF0C\u8BF7\u4EE5\u94F6\u884C\u6570\u636E\u4E3A\u51C6!",-1)),nt={class:"panel"},at={class:"panel"};function ot(e,t,s,r,p,a){const d=K,m=J,u=C,o=W,y=T,_=E,v=H,F=Q,N=O,U=G,k=X,j=z;return b(),R(M,null,[n(m,null,{default:l(()=>[n(d,{span:24},{default:l(()=>[et]),_:1})]),_:1}),n(m,null,{default:l(()=>[n(d,{xs:24,lg:6},{default:l(()=>[D("div",nt,[n(k,{layout:"horizontal","label-col":{span:8},"wrapper-col":{span:16},"label-align":"left",colon:!1},{default:l(()=>[n(o,{label:"\u8D37\u6B3E\u91D1\u989D"},{default:l(()=>[n(u,{value:e.loanAmount,"onUpdate:value":t[0]||(t[0]=i=>e.loanAmount=i),"addon-after":"\u5143",type:"number"},null,8,["value"])]),_:1}),n(o,{label:"\u8D37\u6B3E\u671F\u9650"},{default:l(()=>[n(_,{value:e.repaymentPeriod,"onUpdate:value":t[1]||(t[1]=i=>e.repaymentPeriod=i),type:"number"},{default:l(()=>[n(y,{value:0},{default:l(()=>[h(" \u81EA\u5B9A\u4E49\u8D37\u6B3E\u671F\u9650 ")]),_:1}),(b(),R(M,null,I(30,(i,g)=>n(y,{key:"repaymentPeriod"+g,value:i},{default:l(()=>[h(A(i)+"\u5E74("+A(i*12)+"\u6708) ",1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),n(o,{label:"\u8D37\u6B3E\u6708\u6570"},{default:l(()=>[n(u,{value:e.loanMonth,"onUpdate:value":t[2]||(t[2]=i=>e.loanMonth=i),"addon-after":"\u6708",disabled:e.repaymentPeriod!==0},null,8,["value","disabled"])]),_:1}),n(o,{label:"\u8D37\u6B3E\u5229\u7387"},{default:l(()=>[n(u,{value:e.lendingRates,"onUpdate:value":t[3]||(t[3]=i=>e.lendingRates=i),"addon-after":"%"},null,8,["value"])]),_:1}),n(o,{label:"\u8FD8\u6B3E\u65B9\u5F0F"},{default:l(()=>[n(_,{value:e.repayment,"onUpdate:value":t[4]||(t[4]=i=>e.repayment=i)},{default:l(()=>[n(y,{value:"equalLoan"},{default:l(()=>[h(" \u7B49\u989D\u672C\u606F ")]),_:1}),n(y,{value:"equalPrincipal"},{default:l(()=>[h(" \u7B49\u989D\u672C\u91D1 ")]),_:1})]),_:1},8,["value"])]),_:1}),n(o,{label:"\u9996\u6B21\u8FD8\u6B3E"},{default:l(()=>[n(v,{value:e.firstRepaymentDate,"onUpdate:value":t[5]||(t[5]=i=>e.firstRepaymentDate=i),format:e.dateFormat,style:{width:"100%"}},null,8,["value","format"])]),_:1}),n(F),n(o,null,{default:l(()=>[n(U,null,{default:l(()=>[n(N,{type:"primary",disabled:!e.firstRepaymentDate,onClick:a.addPrepayment},{default:l(()=>[h(" \u6DFB\u52A0\u63D0\u524D\u8FD8\u6B3E ")]),_:1},8,["disabled","onClick"]),e.prepayment.length>0?(b(),q(N,{key:0,onClick:a.removePrepayment},{default:l(()=>[h(" \u79FB\u9664 ")]),_:1},8,["onClick"])):S("",!0)]),_:1})]),_:1}),(b(!0),R(M,null,I(e.prepayment,(i,g)=>(b(),R(M,{key:g},[n(F,{orientation:"left"},{default:l(()=>[h(" \u7B2C"+A(g+1)+"\u6B21\u63D0\u524D\u8FD8\u6B3E ",1)]),_:2},1024),n(o,{label:"\u8FD8\u6B3E\u65E5\u671F"},{default:l(()=>[n(v,{value:i.repaymentDate,"onUpdate:value":f=>i.repaymentDate=f,format:e.dateFormat,style:{width:"100%"}},null,8,["value","onUpdate:value","format"])]),_:2},1024),n(o,{label:"\u63D0\u524D\u8FD8\u6B3E\u91D1\u989D"},{default:l(()=>[n(u,{value:i.repaymentAmount,"onUpdate:value":f=>i.repaymentAmount=f,"addon-after":"\u5143",type:"number"},null,8,["value","onUpdate:value"])]),_:2},1024),n(o,{label:"\u8C03\u6574\u671F\u6570"},{default:l(()=>[n(u,{value:i.adjustLoanMonth,"onUpdate:value":f=>i.adjustLoanMonth=f,"addon-after":"\u671F",type:"number"},null,8,["value","onUpdate:value"])]),_:2},1024),n(o,{label:"\u8C03\u6574\u5229\u7387"},{default:l(()=>[n(u,{value:i.lendingRates,"onUpdate:value":f=>i.lendingRates=f,"addon-after":"%"},null,8,["value","onUpdate:value"])]),_:2},1024)],64))),128))]),_:1})])]),_:1}),n(d,{xs:24,lg:18},{default:l(()=>[D("div",at,[n(k,{"label-col":{span:6},"wrapper-col":{span:18},"label-align":"left",colon:!1},{default:l(()=>[n(o,{label:"\u7D2F\u8BA1\u63D0\u524D\u8FD8\u6B3E"},{default:l(()=>[n(u,{value:a.cumulativeRepayment,"onUpdate:value":t[6]||(t[6]=i=>a.cumulativeRepayment=i),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(o,{label:"\u7D2F\u8BA1\u8C03\u6574\u671F\u6570"},{default:l(()=>[n(u,{value:a.cumulativeAdjustLoanMonth,"onUpdate:value":t[7]||(t[7]=i=>a.cumulativeAdjustLoanMonth=i),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(o,{label:"\u539F\u7D2F\u8BA1\u5229\u606F"},{default:l(()=>[n(u,{value:a.originalCumulativeInterestPayment,"onUpdate:value":t[8]||(t[8]=i=>a.originalCumulativeInterestPayment=i),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(o,{label:"\u7D2F\u8BA1\u7F34\u606F"},{default:l(()=>[n(u,{value:a.cumulativeInterestPayment,"onUpdate:value":t[9]||(t[9]=i=>a.cumulativeInterestPayment=i),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(o,{label:"\u7D2F\u8BA1\u8282\u7701\u5229\u606F"},{default:l(()=>[n(u,{value:a.savedMoney,"onUpdate:value":t[10]||(t[10]=i=>a.savedMoney=i),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(o,{"wrapper-col":{span:24}},{default:l(()=>[n(j,{"data-source":a.dataSource,columns:e.columns,bordered:"",size:"small",pagination:!1},null,8,["data-source","columns"])]),_:1})]),_:1})])]),_:1})]),_:1})],64)}const Wt=B($,[["render",ot],["__scopeId","data-v-75c01b2e"]]);export{Wt as default};
