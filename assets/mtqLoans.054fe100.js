import{a7 as V,m as c,I as G,J as T,_ as I,ai as Y,$ as z,ab as k,aj as E,ae as J,a0 as P,q as w,a as d,o as g,b as L,w as o,e as n,f as M,g as _,U,F as D,i as H,p as K,j as Q,h as v,t as F}from"./vendor.1b700cf6.js";import"./vue-codemirror.925150f4.js";import{C as W}from"./container.c240f2bd.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{_ as X}from"./index.8792d47d.js";var B={exports:{}};(function(t,e){(function(s,m){t.exports=m()})(V,function(){return function(s,m,u){m.prototype.isBetween=function(a,y,l,r){var p=u(a),f=u(y),b=(r=r||"()")[0]==="(",R=r[1]===")";return(b?this.isAfter(p,l):!this.isBefore(p,l))&&(R?this.isBefore(f,l):!this.isAfter(f,l))||(b?this.isBefore(p,l):!this.isAfter(p,l))&&(R?this.isAfter(f,l):!this.isBefore(f,l))}}})})(B);var Z=B.exports;c.extend(Z);const{Item:$}=I,{Option:ee}=k,{Group:te}=P,ne={name:"\u591A\u6B21\u63D0\u524D\u8FD8\u8D37\u8BA1\u7B97\u5668",components:{Container:W,Row:G,Col:T,Form:I,Table:Y,Input:z,Item:$,Select:k,Option:ee,DatePicker:E,Divider:J,Button:P,Group:te},data:()=>({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:c(),prepayment:[],columns:[{title:"\u671F\u6B21",dataIndex:"times",key:"times"},{title:"\u8FD8\u6B3E\u65E5\u671F",dataIndex:"repaymentDate",key:"repaymentDate"},{title:"\u6BCF\u6708\u8FD8\u6B3E",dataIndex:"monthlyAmount",key:"monthlyAmount"},{title:"\u507F\u8FD8\u5229\u606F",dataIndex:"interestRepayment",key:"interestRepayment"},{title:"\u507F\u8FD8\u672C\u91D1",dataIndex:"principalRepayment",key:"principalRepayment"},{title:"\u5269\u4F59\u672C\u91D1",dataIndex:"remainingPrincipal",key:"remainingPrincipal"}],dateFormat:"YYYY/MM/DD"}),watch:{repaymentPeriod(t){t!==0?this.loanMonth=t*12:this.loanMonth=120}},computed:{options:function(){const t={};if(!isNaN(parseFloat(this.loanAmount))&&parseFloat(this.loanAmount)>0&&(t.loanAmount=parseFloat(this.loanAmount)),Number.isInteger(parseFloat(this.loanMonth))&&parseFloat(this.loanMonth)>0&&(t.loanMonth=parseInt(this.loanMonth)),!isNaN(parseFloat(this.lendingRates))&&parseFloat(this.lendingRates)>0&&(t.lendingRates=parseFloat(this.lendingRates)),c.isDayjs(this.firstRepaymentDate))if(t.firstRepaymentDate=this.firstRepaymentDate,this.prepayment.length===0)t.prepayment=this.prepayment;else{let e=!0;for(const s in this.prepayment)if(s==="0"){if(!(c.isDayjs(this.prepayment[s].repaymentDate)&&this.prepayment[s].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1,"M"),"days")>=0)){e=!1;break}}else if(!(c.isDayjs(this.prepayment[s].repaymentDate)&&this.prepayment[s].repaymentDate.diff(this.prepayment[s-1].repaymentDate,"days")>=0)){e=!1;break}e&&(t.prepayment=this.prepayment)}return t},isValidOptions:function(){return Object.keys(this.options).length>=5},originDataSource:function(){if(this.isValidOptions){const t=[];if(t.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),this.repayment==="equalLoan"){const e={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};for(let s=1;s<=this.options.loanMonth;s++){const m=Number((-C(e.lendingRates/100/12,e.loanMonth,e.loanAmount)).toFixed(2)),u=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2)),a=Number((m-u).toFixed(2));e.loanAmount-=a,e.loanMonth--,t.push({key:s,times:s,repaymentDate:this.options.firstRepaymentDate.clone().add(s-1,"M").format(this.dateFormat),monthlyAmount:m,interestRepayment:u,principalRepayment:a,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}if(this.repayment==="equalPrincipal"){const e={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth};for(let s=1;s<=this.options.loanMonth;s++){const m=Number((e.loanAmount/e.loanMonth).toFixed(2)),u=Number((e.loanAmount*this.options.lendingRates/100/12).toFixed(2)),a=Number((m+u).toFixed(2));e.loanAmount-=m,e.loanMonth--,t.push({key:s,times:s,repaymentDate:this.options.firstRepaymentDate.clone().add(s-1,"M").format(this.dateFormat),monthlyAmount:a,interestRepayment:u,principalRepayment:m,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}return t}else return[]},dataSource:function(){if(this.isValidOptions){const t=[];if(t.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),this.repayment==="equalLoan"){const e={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let s=0,m=0;const u=w(this.options.prepayment);for(let a=1;a<=this.options.loanMonth-s;a++){if(a>0)for(;u.length>0&&u[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(a-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(a-1,"M"),"[)");){const p=u.shift();e.loanAmount-=Number(p.repaymentAmount),e.lendingRates=Number(p.lendingRates||0),e.loanMonth-=Number(p.adjustLoanMonth||0),s+=Number(p.adjustLoanMonth||0),t.push({repaymentDate:p.repaymentDate.format(this.dateFormat),principalRepayment:p.repaymentAmount,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}const y=Number((-C(e.lendingRates/100/12,e.loanMonth,e.loanAmount)).toFixed(2));let l=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2));m+=e.loanAmount*e.lendingRates/100/12-l;const r=Number((y-l).toFixed(2));e.loanAmount-=r,e.loanMonth--,e.loanMonth===0&&(l=Number((l+m).toFixed(2))),t.push({key:a,times:a,repaymentDate:this.options.firstRepaymentDate.clone().add(a-1,"M").format(this.dateFormat),monthlyAmount:y,interestRepayment:l,principalRepayment:r,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}if(this.repayment==="equalPrincipal"){const e={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let s=0,m=0;const u=w(this.options.prepayment);for(let a=1;a<=this.options.loanMonth-s;a++){if(u.length>0&&a>1&&u[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(a-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(a-1,"M"),"[)")){const p=u.shift();e.loanAmount-=Number(p.repaymentAmount),e.lendingRates=Number(p.lendingRates||0),e.loanMonth-=Number(p.adjustLoanMonth||0),s+=Number(p.adjustLoanMonth||0),t.push({repaymentDate:p.repaymentDate.format(this.dateFormat),principalRepayment:p.repaymentAmount,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}const y=Number((e.loanAmount/e.loanMonth).toFixed(2));let l=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2));m+=e.loanAmount*e.lendingRates/100/12-l;const r=Number((y+l).toFixed(2));e.loanAmount-=y,e.loanMonth--,e.loanMonth===0&&(l=Number((l+m).toFixed(2))),t.push({key:a,times:a,repaymentDate:this.options.firstRepaymentDate.clone().add(a-1,"M").format(this.dateFormat),monthlyAmount:r,interestRepayment:l,principalRepayment:y,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}return t}else return[]},originalCumulativeInterestPayment:function(){let t=0;if(this.isValidOptions)for(const e of this.originDataSource)t+=e.interestRepayment||0;return Number(t.toFixed(2))},cumulativeInterestPayment:function(){let t=0;if(this.isValidOptions)for(const e of this.dataSource)t+=e.interestRepayment||0;return Number(t.toFixed(2))},cumulativeRepayment:function(){let t=0;if(this.isValidOptions)for(const e of this.prepayment)t+=Number(e.repaymentAmount||0);return t.toFixed(2)},cumulativeAdjustLoanMonth:function(){let t=0;if(this.isValidOptions)for(const e of this.prepayment)t+=Number(e.adjustLoanMonth||0);return t.toFixed(2)},savedMoney:function(){return(Number(this.originalCumulativeInterestPayment)-Number(this.cumulativeInterestPayment)).toFixed(2)}},methods:{addPrepayment(){let t,e;this.prepayment.length===0?(t=this.firstRepaymentDate||c(),e=this.lendingRates||0):(t=this.prepayment[this.prepayment.length-1].repaymentDate||c(),e=this.prepayment[this.prepayment.length-1].lendingRates||0),this.prepayment.push({repaymentDate:t,repaymentAmount:0,adjustLoanMonth:0,lendingRates:e})},removePrepayment(){this.prepayment.pop()}}};function C(t,e,s,m,u){if(m=typeof m!="undefined"?m:0,u=typeof u!="undefined"?u:0,t!==0){const a=Math.pow(1+t,e);return-(t*(m+a*s))/((-1+a)*(1+t*u))}else if(e!==0)return-(m+s)/e;return 0}const ae=t=>(K("data-v-7dbe7e76"),t=t(),Q(),t),oe=ae(()=>M("span",{class:"tips"},"\u8BA1\u7B97\u4EC5\u4F9B\u53C2\u8003\uFF0C\u8BF7\u4EE5\u94F6\u884C\u6570\u636E\u4E3A\u51C6!",-1)),ie={class:"panel"},le=v("\u81EA\u5B9A\u4E49\u8D37\u6B3E\u671F\u9650"),se=v(" \u7B49\u989D\u672C\u606F "),re=v(" \u7B49\u989D\u672C\u91D1 "),me=v("\u6DFB\u52A0\u63D0\u524D\u8FD8\u6B3E"),pe=v("\u79FB\u9664"),ue={class:"panel"};function de(t,e,s,m,u,a){const y=d("Row"),l=d("Input"),r=d("Item"),p=d("Option"),f=d("Select"),b=d("DatePicker"),R=d("Divider"),N=d("Button"),S=d("Group"),j=d("Form"),x=d("Col"),q=d("Table"),O=d("container");return g(),L(O,null,{default:o(()=>[n(y,null,{default:o(()=>[n(y,{span:24},{default:o(()=>[oe]),_:1})]),_:1}),n(y,null,{default:o(()=>[n(x,{xs:24,lg:6},{default:o(()=>[M("div",ie,[n(j,{layout:"horizontal","label-col":{span:8},"wrapper-col":{span:16},labelAlign:"left",colon:!1},{default:o(()=>[n(r,{label:"\u8D37\u6B3E\u91D1\u989D"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:t.loanAmount,"onUpdate:value":e[0]||(e[0]=i=>t.loanAmount=i),type:"number"},null,8,["value"])]),_:1}),n(r,{label:"\u8D37\u6B3E\u671F\u9650"},{default:o(()=>[n(f,{value:t.repaymentPeriod,"onUpdate:value":e[1]||(e[1]=i=>t.repaymentPeriod=i),type:"number"},{default:o(()=>[n(p,{value:0},{default:o(()=>[le]),_:1}),(g(),_(D,null,U(30,(i,A)=>n(p,{key:"repaymentPeriod"+A,value:i},{default:o(()=>[v(F(i)+"\u5E74("+F(i*12)+"\u6708) ",1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),n(r,{label:"\u8D37\u6B3E\u6708\u6570"},{default:o(()=>[n(l,{"addon-after":"\u6708",value:t.loanMonth,"onUpdate:value":e[2]||(e[2]=i=>t.loanMonth=i),disabled:t.repaymentPeriod!==0},null,8,["value","disabled"])]),_:1}),n(r,{label:"\u8D37\u6B3E\u5229\u7387"},{default:o(()=>[n(l,{"addon-after":"%",value:t.lendingRates,"onUpdate:value":e[3]||(e[3]=i=>t.lendingRates=i)},null,8,["value"])]),_:1}),n(r,{label:"\u8FD8\u6B3E\u65B9\u5F0F"},{default:o(()=>[n(f,{value:t.repayment,"onUpdate:value":e[4]||(e[4]=i=>t.repayment=i)},{default:o(()=>[n(p,{value:"equalLoan"},{default:o(()=>[se]),_:1}),n(p,{value:"equalPrincipal"},{default:o(()=>[re]),_:1})]),_:1},8,["value"])]),_:1}),n(r,{label:"\u9996\u6B21\u8FD8\u6B3E"},{default:o(()=>[n(b,{value:t.firstRepaymentDate,"onUpdate:value":e[5]||(e[5]=i=>t.firstRepaymentDate=i),format:t.dateFormat,style:{width:"100%"}},null,8,["value","format"])]),_:1}),n(R),n(r,null,{default:o(()=>[n(S,null,{default:o(()=>[n(N,{type:"primary",onClick:a.addPrepayment,disabled:!t.firstRepaymentDate},{default:o(()=>[me]),_:1},8,["onClick","disabled"]),t.prepayment.length>0?(g(),L(N,{key:0,onClick:a.removePrepayment},{default:o(()=>[pe]),_:1},8,["onClick"])):H("",!0)]),_:1})]),_:1}),(g(!0),_(D,null,U(t.prepayment,(i,A)=>(g(),_(D,{key:A},[n(R,{orientation:"left"},{default:o(()=>[v("\u7B2C"+F(A+1)+"\u6B21\u63D0\u524D\u8FD8\u6B3E",1)]),_:2},1024),n(r,{label:"\u8FD8\u6B3E\u65E5\u671F"},{default:o(()=>[n(b,{value:i.repaymentDate,"onUpdate:value":h=>i.repaymentDate=h,format:t.dateFormat,style:{width:"100%"}},null,8,["value","onUpdate:value","format"])]),_:2},1024),n(r,{label:"\u63D0\u524D\u8FD8\u6B3E\u91D1\u989D"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:i.repaymentAmount,"onUpdate:value":h=>i.repaymentAmount=h,type:"number"},null,8,["value","onUpdate:value"])]),_:2},1024),n(r,{label:"\u8C03\u6574\u671F\u6570"},{default:o(()=>[n(l,{"addon-after":"\u671F",value:i.adjustLoanMonth,"onUpdate:value":h=>i.adjustLoanMonth=h,type:"number"},null,8,["value","onUpdate:value"])]),_:2},1024),n(r,{label:"\u8C03\u6574\u5229\u7387"},{default:o(()=>[n(l,{"addon-after":"%",value:i.lendingRates,"onUpdate:value":h=>i.lendingRates=h},null,8,["value","onUpdate:value"])]),_:2},1024)],64))),128))]),_:1})])]),_:1}),n(x,{xs:24,lg:18},{default:o(()=>[M("div",ue,[n(j,{"label-col":{span:6},"wrapper-col":{span:18},labelAlign:"left",colon:!1},{default:o(()=>[n(r,{label:"\u7D2F\u8BA1\u63D0\u524D\u8FD8\u6B3E"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:a.cumulativeRepayment,"onUpdate:value":e[6]||(e[6]=i=>a.cumulativeRepayment=i),readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u7D2F\u8BA1\u8C03\u6574\u671F\u6570"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:a.cumulativeAdjustLoanMonth,"onUpdate:value":e[7]||(e[7]=i=>a.cumulativeAdjustLoanMonth=i),readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u539F\u7D2F\u8BA1\u5229\u606F"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:a.originalCumulativeInterestPayment,"onUpdate:value":e[8]||(e[8]=i=>a.originalCumulativeInterestPayment=i),readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u7D2F\u8BA1\u7F34\u606F"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:a.cumulativeInterestPayment,"onUpdate:value":e[9]||(e[9]=i=>a.cumulativeInterestPayment=i),readonly:""},null,8,["value"])]),_:1}),n(r,{label:"\u7D2F\u8BA1\u8282\u7701\u5229\u606F"},{default:o(()=>[n(l,{"addon-after":"\u5143",value:a.savedMoney,"onUpdate:value":e[10]||(e[10]=i=>a.savedMoney=i),readonly:""},null,8,["value"])]),_:1}),n(r,{"wrapper-col":{span:24}},{default:o(()=>[n(q,{dataSource:a.dataSource,columns:t.columns,bordered:"",size:"small",pagination:!1},null,8,["dataSource","columns"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})}var ke=X(ne,[["render",de],["__scopeId","data-v-7dbe7e76"]]);export{ke as default};
