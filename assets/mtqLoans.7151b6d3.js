import{aG as q,S as c,a7 as O,a8 as V,ag as j,af as G,ah as T,aI as w,aH as Y,ae as z,a4 as U,j as P,c as A,f as n,y as i,J as _,r as y,o as g,a as F,ab as x,K as v,g as D,h as E,L as H,p as J,b as K}from"./vendor.83c03505.js";/* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import{_ as Q}from"./index.97cb5792.js";var B={exports:{}};(function(e,t){(function(s,m){e.exports=m()})(q,function(){return function(s,m,u){m.prototype.isBetween=function(a,d,l,r){var p=u(a),h=u(d),b=(r=r||"()")[0]==="(",R=r[1]===")";return(b?this.isAfter(p,l):!this.isBefore(p,l))&&(R?this.isBefore(h,l):!this.isAfter(h,l))||(b?this.isBefore(p,l):!this.isAfter(p,l))&&(R?this.isAfter(h,l):!this.isBefore(h,l))}}})})(B);var W=B.exports;c.extend(W);const{Item:X}=j,{Option:Z}=w,{Group:$}=U,tt={name:"MtqLoans",components:{Row:O,Col:V,Form:j,Table:G,Input:T,Item:X,Select:w,Option:Z,DatePicker:Y,Divider:z,Button:U,Group:$},data:()=>({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:c(),prepayment:[],columns:[{title:"\u671F\u6B21",dataIndex:"times",key:"times"},{title:"\u8FD8\u6B3E\u65E5\u671F",dataIndex:"repaymentDate",key:"repaymentDate"},{title:"\u6BCF\u6708\u8FD8\u6B3E",dataIndex:"monthlyAmount",key:"monthlyAmount"},{title:"\u507F\u8FD8\u5229\u606F",dataIndex:"interestRepayment",key:"interestRepayment"},{title:"\u507F\u8FD8\u672C\u91D1",dataIndex:"principalRepayment",key:"principalRepayment"},{title:"\u5269\u4F59\u672C\u91D1",dataIndex:"remainingPrincipal",key:"remainingPrincipal"}],dateFormat:"YYYY/MM/DD"}),computed:{options:function(){const e={};if(!isNaN(parseFloat(this.loanAmount))&&parseFloat(this.loanAmount)>0&&(e.loanAmount=parseFloat(this.loanAmount)),Number.isInteger(parseFloat(this.loanMonth))&&parseFloat(this.loanMonth)>0&&(e.loanMonth=parseInt(this.loanMonth)),!isNaN(parseFloat(this.lendingRates))&&parseFloat(this.lendingRates)>0&&(e.lendingRates=parseFloat(this.lendingRates)),c.isDayjs(this.firstRepaymentDate))if(e.firstRepaymentDate=this.firstRepaymentDate,this.prepayment.length===0)e.prepayment=this.prepayment;else{let t=!0;for(const s in this.prepayment)if(s==="0"){if(!(c.isDayjs(this.prepayment[s].repaymentDate)&&this.prepayment[s].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1,"M"),"days")>=0)){t=!1;break}}else if(!(c.isDayjs(this.prepayment[s].repaymentDate)&&this.prepayment[s].repaymentDate.diff(this.prepayment[s-1].repaymentDate,"days")>=0)){t=!1;break}t&&(e.prepayment=this.prepayment)}return e},isValidOptions:function(){return Object.keys(this.options).length>=5},originDataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),this.repayment==="equalLoan"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};for(let s=1;s<=this.options.loanMonth;s++){const m=Number((-L(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2)),u=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2)),a=Number((m-u).toFixed(2));t.loanAmount-=a,t.loanMonth--,e.push({key:s,times:s,repaymentDate:this.options.firstRepaymentDate.clone().add(s-1,"M").format(this.dateFormat),monthlyAmount:m,interestRepayment:u,principalRepayment:a,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if(this.repayment==="equalPrincipal"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth};for(let s=1;s<=this.options.loanMonth;s++){const m=Number((t.loanAmount/t.loanMonth).toFixed(2)),u=Number((t.loanAmount*this.options.lendingRates/100/12).toFixed(2)),a=Number((m+u).toFixed(2));t.loanAmount-=m,t.loanMonth--,e.push({key:s,times:s,repaymentDate:this.options.firstRepaymentDate.clone().add(s-1,"M").format(this.dateFormat),monthlyAmount:a,interestRepayment:u,principalRepayment:m,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}else return[]},dataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),this.repayment==="equalLoan"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let s=0,m=0;const u=P(this.options.prepayment);for(let a=1;a<=this.options.loanMonth-s;a++){if(a>0)for(;u.length>0&&u[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(a-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(a-1,"M"),"[)");){const p=u.shift();t.loanAmount-=Number(p.repaymentAmount),t.lendingRates=Number(p.lendingRates||0),t.loanMonth-=Number(p.adjustLoanMonth||0),s+=Number(p.adjustLoanMonth||0),e.push({repaymentDate:p.repaymentDate.format(this.dateFormat),principalRepayment:p.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const d=Number((-L(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2));let l=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));m+=t.loanAmount*t.lendingRates/100/12-l;const r=Number((d-l).toFixed(2));t.loanAmount-=r,t.loanMonth--,t.loanMonth===0&&(l=Number((l+m).toFixed(2))),e.push({key:a,times:a,repaymentDate:this.options.firstRepaymentDate.clone().add(a-1,"M").format(this.dateFormat),monthlyAmount:d,interestRepayment:l,principalRepayment:r,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if(this.repayment==="equalPrincipal"){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let s=0,m=0;const u=P(this.options.prepayment);for(let a=1;a<=this.options.loanMonth-s;a++){if(u.length>0&&a>1&&u[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(a-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(a-1,"M"),"[)")){const p=u.shift();t.loanAmount-=Number(p.repaymentAmount),t.lendingRates=Number(p.lendingRates||0),t.loanMonth-=Number(p.adjustLoanMonth||0),s+=Number(p.adjustLoanMonth||0),e.push({repaymentDate:p.repaymentDate.format(this.dateFormat),principalRepayment:p.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const d=Number((t.loanAmount/t.loanMonth).toFixed(2));let l=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));m+=t.loanAmount*t.lendingRates/100/12-l;const r=Number((d+l).toFixed(2));t.loanAmount-=d,t.loanMonth--,t.loanMonth===0&&(l=Number((l+m).toFixed(2))),e.push({key:a,times:a,repaymentDate:this.options.firstRepaymentDate.clone().add(a-1,"M").format(this.dateFormat),monthlyAmount:r,interestRepayment:l,principalRepayment:d,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}else return[]},originalCumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.originDataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.dataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeRepayment:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.repaymentAmount||0);return e.toFixed(2)},cumulativeAdjustLoanMonth:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.adjustLoanMonth||0);return e.toFixed(2)},savedMoney:function(){return(Number(this.originalCumulativeInterestPayment)-Number(this.cumulativeInterestPayment)).toFixed(2)}},watch:{repaymentPeriod(e){e!==0?this.loanMonth=e*12:this.loanMonth=120}},methods:{addPrepayment(){let e,t;this.prepayment.length===0?(e=this.firstRepaymentDate||c(),t=this.lendingRates||0):(e=this.prepayment[this.prepayment.length-1].repaymentDate||c(),t=this.prepayment[this.prepayment.length-1].lendingRates||0),this.prepayment.push({repaymentDate:e,repaymentAmount:0,adjustLoanMonth:0,lendingRates:t})},removePrepayment(){this.prepayment.pop()}}};function L(e,t,s,m,u){if(m=typeof m!="undefined"?m:0,u=typeof u!="undefined"?u:0,e!==0){const a=Math.pow(1+e,t);return-(e*(m+a*s))/((-1+a)*(1+e*u))}else if(t!==0)return-(m+s)/t;return 0}const et=e=>(J("data-v-f9636234"),e=e(),K(),e),nt=et(()=>F("span",{class:"tips"},"\u8BA1\u7B97\u4EC5\u4F9B\u53C2\u8003\uFF0C\u8BF7\u4EE5\u94F6\u884C\u6570\u636E\u4E3A\u51C6!",-1)),at={class:"panel"},ot=v(" \u81EA\u5B9A\u4E49\u8D37\u6B3E\u671F\u9650 "),it=v(" \u7B49\u989D\u672C\u606F "),lt=v(" \u7B49\u989D\u672C\u91D1 "),st=v(" \u6DFB\u52A0\u63D0\u524D\u8FD8\u6B3E "),rt=v(" \u79FB\u9664 "),mt={class:"panel"};function pt(e,t,s,m,u,a){const d=y("Row"),l=y("Input"),r=y("Item"),p=y("Option"),h=y("Select"),b=y("DatePicker"),R=y("Divider"),N=y("Button"),C=y("Group"),I=y("Form"),k=y("Col"),S=y("Table");return g(),A(_,null,[n(d,null,{default:i(()=>[n(d,{span:24},{default:i(()=>[nt]),_:1})]),_:1}),n(d,null,{default:i(()=>[n(k,{xs:24,lg:6},{default:i(()=>[F("div",at,[n(I,{layout:"horizontal","label-col":{span:8},"wrapper-col":{span:16},"label-align":"left",colon:!1},{default:i(()=>[n(r,{label:"\u8D37\u6B3E\u91D1\u989D"},{default:i(()=>[n(l,{value:e.loanAmount,"onUpdate:value":t[0]||(t[0]=o=>e.loanAmount=o),"addon-after":"\u5143",type:"number"},null,8,["value"])]),_:1}),n(r,{label:"\u8D37\u6B3E\u671F\u9650"},{default:i(()=>[n(h,{value:e.repaymentPeriod,"onUpdate:value":t[1]||(t[1]=o=>e.repaymentPeriod=o),type:"number"},{default:i(()=>[n(p,{value:0},{default:i(()=>[ot]),_:1}),(g(),A(_,null,x(30,(o,M)=>n(p,{key:"repaymentPeriod"+M,value:o},{default:i(()=>[v(D(o)+"\u5E74("+D(o*12)+"\u6708) ",1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),n(r,{label:"\u8D37\u6B3E\u6708\u6570"},{default:i(()=>[n(l,{value:e.loanMonth,"onUpdate:value":t[2]||(t[2]=o=>e.loanMonth=o),"addon-after":"\u6708",disabled:e.repaymentPeriod!==0},null,8,["value","disabled"])]),_:1}),n(r,{label:"\u8D37\u6B3E\u5229\u7387"},{default:i(()=>[n(l,{value:e.lendingRates,"onUpdate:value":t[3]||(t[3]=o=>e.lendingRates=o),"addon-after":"%"},null,8,["value"])]),_:1}),n(r,{label:"\u8FD8\u6B3E\u65B9\u5F0F"},{default:i(()=>[n(h,{value:e.repayment,"onUpdate:value":t[4]||(t[4]=o=>e.repayment=o)},{default:i(()=>[n(p,{value:"equalLoan"},{default:i(()=>[it]),_:1}),n(p,{value:"equalPrincipal"},{default:i(()=>[lt]),_:1})]),_:1},8,["value"])]),_:1}),n(r,{label:"\u9996\u6B21\u8FD8\u6B3E"},{default:i(()=>[n(b,{value:e.firstRepaymentDate,"onUpdate:value":t[5]||(t[5]=o=>e.firstRepaymentDate=o),format:e.dateFormat,style:{width:"100%"}},null,8,["value","format"])]),_:1}),n(R),n(r,null,{default:i(()=>[n(C,null,{default:i(()=>[n(N,{type:"primary",disabled:!e.firstRepaymentDate,onClick:a.addPrepayment},{default:i(()=>[st]),_:1},8,["disabled","onClick"]),e.prepayment.length>0?(g(),E(N,{key:0,onClick:a.removePrepayment},{default:i(()=>[rt]),_:1},8,["onClick"])):H("",!0)]),_:1})]),_:1}),(g(!0),A(_,null,x(e.prepayment,(o,M)=>(g(),A(_,{key:M},[n(R,{orientation:"left"},{default:i(()=>[v(" \u7B2C"+D(M+1)+"\u6B21\u63D0\u524D\u8FD8\u6B3E ",1)]),_:2},1024),n(r,{label:"\u8FD8\u6B3E\u65E5\u671F"},{default:i(()=>[n(b,{value:o.repaymentDate,"onUpdate:value":f=>o.repaymentDate=f,format:e.dateFormat,style:{width:"100%"}},null,8,["value","onUpdate:value","format"])]),_:2},1024),n(r,{label:"\u63D0\u524D\u8FD8\u6B3E\u91D1\u989D"},{default:i(()=>[n(l,{value:o.repaymentAmount,"onUpdate:value":f=>o.repaymentAmount=f,"addon-after":"\u5143",type:"number"},null,8,["value","onUpdate:value"])]),_:2},1024),n(r,{label:"\u8C03\u6574\u671F\u6570"},{default:i(()=>[n(l,{value:o.adjustLoanMonth,"onUpdate:value":f=>o.adjustLoanMonth=f,"addon-after":"\u671F",type:"number"},null,8,["value","onUpdate:value"])]),_:2},1024),n(r,{label:"\u8C03\u6574\u5229\u7387"},{default:i(()=>[n(l,{value:o.lendingRates,"onUpdate:value":f=>o.lendingRates=f,"addon-after":"%"},null,8,["value","onUpdate:value"])]),_:2},1024)],64))),128))]),_:1})])]),_:1}),n(k,{xs:24,lg:18},{default:i(()=>[F("div",mt,[n(I,{"label-col":{span:6},"wrapper-col":{span:18},"label-align":"left",colon:!1},{default:i(()=>[n(r,{label:"\u7D2F\u8BA1\u63D0\u524D\u8FD8\u6B3E"},{default:i(()=>[n(l,{value:a.cumulativeRepayment,"onUpdate:value":t[6]||(t[6]=o=>a.cumulativeRepayment=o),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u7D2F\u8BA1\u8C03\u6574\u671F\u6570"},{default:i(()=>[n(l,{value:a.cumulativeAdjustLoanMonth,"onUpdate:value":t[7]||(t[7]=o=>a.cumulativeAdjustLoanMonth=o),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u539F\u7D2F\u8BA1\u5229\u606F"},{default:i(()=>[n(l,{value:a.originalCumulativeInterestPayment,"onUpdate:value":t[8]||(t[8]=o=>a.originalCumulativeInterestPayment=o),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u7D2F\u8BA1\u7F34\u606F"},{default:i(()=>[n(l,{value:a.cumulativeInterestPayment,"onUpdate:value":t[9]||(t[9]=o=>a.cumulativeInterestPayment=o),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u7D2F\u8BA1\u8282\u7701\u5229\u606F"},{default:i(()=>[n(l,{value:a.savedMoney,"onUpdate:value":t[10]||(t[10]=o=>a.savedMoney=o),"addon-after":"\u5143",readonly:""},null,8,["value"])]),_:1}),n(r,{"wrapper-col":{span:24}},{default:i(()=>[n(S,{"data-source":a.dataSource,columns:e.columns,bordered:"",size:"small",pagination:!1},null,8,["data-source","columns"])]),_:1})]),_:1})])]),_:1})]),_:1})],64)}var It=Q(tt,[["render",pt],["__scopeId","data-v-f9636234"]]);export{It as default};
