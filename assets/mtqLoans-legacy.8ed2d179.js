!function(){var e=document.createElement("style");e.innerHTML=".tips[data-v-05e5f8e4]{width:100%;height:100%;padding:.5rem .8rem;color:red}.panel[data-v-05e5f8e4]{width:100%;height:100%;padding:.5rem .8rem}.panel .ant-calendar-picker[data-v-05e5f8e4]{width:100%}\n",document.head.appendChild(e),System.register(["./vendor-legacy.354fb519.js","./container-legacy.9c36a3b2.js","./index-legacy.a000b4fb.js","./index-legacy.307817a4.js","./index-legacy.d96abe93.js","./index-legacy.a72b0b5f.js","./index-legacy.7738458e.js","./index-legacy.1401bf57.js","./index-legacy.c3a455d8.js"],(function(e){"use strict";var t,n,a,o,l,i,r,u,s,m,p,d,y,h,c,f,v,b,g,R,M,A,D,F,x,N;return{setters:[function(e){t=e.R,n=e.y,a=e.O,o=e.a3,l=e.P,i=e.Y,r=e.a4,u=e.D,s=e.Q,m=e.a5,p=e.i,d=e.p,y=e.a,h=e.r,c=e.c,f=e.w,v=e.o,b=e.b,g=e.d,R=e.A,M=e.I,A=e.H,D=e.G,F=e.e,x=e.J},function(e){N=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const{Item:_}=a,{Option:P}=i,{Group:k}=s,I=e("default",{name:"多次提前还贷计算器",components:{Container:N,Row:t,Col:n,Form:a,Table:o,Input:l,Item:_,Select:i,Option:P,DatePicker:r,Divider:u,Button:s,Group:k},data:()=>({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:m(),prepayment:[],columns:[{title:"期次",dataIndex:"times",key:"times"},{title:"还款日期",dataIndex:"repaymentDate",key:"repaymentDate"},{title:"每月还款",dataIndex:"monthlyAmount",key:"monthlyAmount"},{title:"偿还利息",dataIndex:"interestRepayment",key:"interestRepayment"},{title:"偿还本金",dataIndex:"principalRepayment",key:"principalRepayment"},{title:"剩余本金",dataIndex:"remainingPrincipal",key:"remainingPrincipal"}],dateFormat:"YYYY/MM/DD"}),watch:{repaymentPeriod(e){this.loanMonth=0!==e?12*e:120}},computed:{options:function(){const e={};if(!isNaN(parseFloat(this.loanAmount))&&parseFloat(this.loanAmount)>0&&(e.loanAmount=parseFloat(this.loanAmount)),Number.isInteger(parseFloat(this.loanMonth))&&parseFloat(this.loanMonth)>0&&(e.loanMonth=parseInt(this.loanMonth)),!isNaN(parseFloat(this.lendingRates))&&parseFloat(this.lendingRates)>0&&(e.lendingRates=parseFloat(this.lendingRates)),m.isMoment(this.firstRepaymentDate))if(e.firstRepaymentDate=this.firstRepaymentDate,0===this.prepayment.length)e.prepayment=this.prepayment;else{let t=!0;for(const e in this.prepayment)if("0"===e){if(!(m.isMoment(this.prepayment[e].repaymentDate)&&this.prepayment[e].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1,"M"),"days")>=0)){t=!1;break}}else if(!(m.isMoment(this.prepayment[e].repaymentDate)&&this.prepayment[e].repaymentDate.diff(this.prepayment[e-1].repaymentDate,"days")>=0)){t=!1;break}t&&(e.prepayment=this.prepayment)}return e},isValidOptions:function(){return Object.keys(this.options).length>=5},originDataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),"equalLoan"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};for(let n=1;n<=this.options.loanMonth;n++){const a=Number((-j(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2)),o=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2)),l=Number((a-o).toFixed(2));t.loanAmount-=l,t.loanMonth--,e.push({key:n,times:n,repaymentDate:this.options.firstRepaymentDate.clone().add(n-1,"M").format(this.dateFormat),monthlyAmount:a,interestRepayment:o,principalRepayment:l,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if("equalPrincipal"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth};for(let n=1;n<=this.options.loanMonth;n++){const a=Number((t.loanAmount/t.loanMonth).toFixed(2)),o=Number((t.loanAmount*this.options.lendingRates/100/12).toFixed(2)),l=Number((a+o).toFixed(2));t.loanAmount-=a,t.loanMonth--,e.push({key:n,times:n,repaymentDate:this.options.firstRepaymentDate.clone().add(n-1,"M").format(this.dateFormat),monthlyAmount:l,interestRepayment:o,principalRepayment:a,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}return[]},dataSource:function(){try{if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),"equalLoan"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let n=0,a=0;const o=p(this.options.prepayment);for(let l=1;l<=this.options.loanMonth-n;l++){if(l>0)for(;o.length>0&&o[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(l-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(l-1,"M"),"[)");){const a=o.shift();Number(a.repaymentAmount||0)>0&&(t.loanAmount-=Number(a.repaymentAmount),t.lendingRates=Number(a.lendingRates||0),t.loanMonth-=Number(a.adjustLoanMonth||0),n+=Number(a.adjustLoanMonth||0),e.push({repaymentDate:a.repaymentDate.format(this.dateFormat),principalRepayment:a.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))}))}const i=Number((-j(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2));let r=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));a+=t.loanAmount*t.lendingRates/100/12-r;const u=Number((i-r).toFixed(2));t.loanAmount-=u,t.loanMonth--,0===t.loanMonth&&(r=Number((r+a).toFixed(2))),e.push({key:l,times:l,repaymentDate:this.options.firstRepaymentDate.clone().add(l-1,"M").format(this.dateFormat),monthlyAmount:i,interestRepayment:r,principalRepayment:u,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if("equalPrincipal"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let n=0,a=0;const o=p(this.options.prepayment);for(let l=1;l<=this.options.loanMonth-n;l++){if(o.length>0&&l>1&&o[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(l-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(l-1,"M"),"[)")){const a=o.shift();Number(a.repaymentAmount||0)>0&&(t.loanAmount-=Number(a.repaymentAmount),t.lendingRates=Number(a.lendingRates||0),t.loanMonth-=Number(a.adjustLoanMonth||0),n+=Number(a.adjustLoanMonth||0),e.push({repaymentDate:a.repaymentDate.format(this.dateFormat),principalRepayment:a.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))}))}const i=Number((t.loanAmount/t.loanMonth).toFixed(2));let r=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));a+=t.loanAmount*t.lendingRates/100/12-r;const u=Number((i+r).toFixed(2));t.loanAmount-=i,t.loanMonth--,0===t.loanMonth&&(r=Number((r+a).toFixed(2))),e.push({key:l,times:l,repaymentDate:this.options.firstRepaymentDate.clone().add(l-1,"M").format(this.dateFormat),monthlyAmount:u,interestRepayment:r,principalRepayment:i,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}return[]}catch(e){return[]}},originalCumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.originDataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.dataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeRepayment:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.repaymentAmount||0);return e.toFixed(2)},cumulativeAdjustLoanMonth:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.adjustLoanMonth||0);return e.toFixed(2)},savedMoney:function(){return(Number(this.originalCumulativeInterestPayment)-Number(this.cumulativeInterestPayment)).toFixed(2)}},methods:{addPrepayment(){let e,t;0===this.prepayment.length?(e=this.firstRepaymentDate||m(),t=this.lendingRates||0):(e=this.prepayment[this.prepayment.length-1].repaymentDate||m(),t=this.prepayment[this.prepayment.length-1].lendingRates||0),this.prepayment.push({repaymentDate:e,repaymentAmount:0,adjustLoanMonth:0,lendingRates:t})},removePrepayment(){this.prepayment.pop()}}});function j(e,t,n,a,o){if(a=void 0!==a?a:0,o=void 0!==o?o:0,0!==e){const l=Math.pow(1+e,t);return-e*(a+l*n)/((-1+l)*(1+e*o))}return 0!==t?-(a+n)/t:0}d("data-v-05e5f8e4");const U=g("span",{class:"tips"},"计算仅供参考，请以银行数据为准!",-1),L={class:"panel"},w=F("自定义贷款期限"),C=F(" 等额本息 "),O=F(" 等额本金 "),S=F("添加提前还款"),q=F("移除"),V={class:"panel"};y(),I.render=function(e,t,n,a,o,l){const i=h("Row"),r=h("Input"),u=h("Item"),s=h("Option"),m=h("Select"),p=h("DatePicker"),d=h("Divider"),y=h("Button"),N=h("Group"),_=h("Form"),P=h("Col"),k=h("Table"),I=h("container");return v(),c(I,null,{default:f((()=>[b(i,null,{default:f((()=>[b(i,{span:24},{default:f((()=>[U])),_:1})])),_:1}),b(i,null,{default:f((()=>[b(P,{xs:24,lg:6},{default:f((()=>[g("div",L,[b(_,{layout:"horizontal","label-col":{span:8},"wrapper-col":{span:16},labelAlign:"left",colon:!1},{default:f((()=>[b(u,{label:"贷款金额"},{default:f((()=>[b(r,{"addon-after":"元",value:e.loanAmount,"onUpdate:value":t[0]||(t[0]=t=>e.loanAmount=t),type:"number"},null,8,["value"])])),_:1}),b(u,{label:"贷款期限"},{default:f((()=>[b(m,{value:e.repaymentPeriod,"onUpdate:value":t[1]||(t[1]=t=>e.repaymentPeriod=t),type:"number"},{default:f((()=>[b(s,{value:0},{default:f((()=>[w])),_:1}),(v(),R(A,null,M(30,((e,t)=>b(s,{key:"repaymentPeriod"+t,value:e},{default:f((()=>[F(x(e)+"年("+x(12*e)+"月) ",1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),b(u,{label:"贷款月数"},{default:f((()=>[b(r,{"addon-after":"月",value:e.loanMonth,"onUpdate:value":t[2]||(t[2]=t=>e.loanMonth=t),disabled:0!==e.repaymentPeriod},null,8,["value","disabled"])])),_:1}),b(u,{label:"贷款利率"},{default:f((()=>[b(r,{"addon-after":"%",value:e.lendingRates,"onUpdate:value":t[3]||(t[3]=t=>e.lendingRates=t)},null,8,["value"])])),_:1}),b(u,{label:"还款方式"},{default:f((()=>[b(m,{value:e.repayment,"onUpdate:value":t[4]||(t[4]=t=>e.repayment=t)},{default:f((()=>[b(s,{value:"equalLoan"},{default:f((()=>[C])),_:1}),b(s,{value:"equalPrincipal"},{default:f((()=>[O])),_:1})])),_:1},8,["value"])])),_:1}),b(u,{label:"首次还款"},{default:f((()=>[b(p,{value:e.firstRepaymentDate,"onUpdate:value":t[5]||(t[5]=t=>e.firstRepaymentDate=t),format:e.dateFormat,style:{width:"100%"}},null,8,["value","format"])])),_:1}),b(d),b(u,null,{default:f((()=>[b(N,null,{default:f((()=>[b(y,{type:"primary",onClick:l.addPrepayment,disabled:!e.firstRepaymentDate},{default:f((()=>[S])),_:1},8,["onClick","disabled"]),e.prepayment.length>0?(v(),c(y,{key:0,onClick:l.removePrepayment},{default:f((()=>[q])),_:1},8,["onClick"])):D("",!0)])),_:1})])),_:1}),(v(!0),R(A,null,M(e.prepayment,((t,n)=>(v(),R(A,{key:n},[b(d,{orientation:"left"},{default:f((()=>[F("第"+x(n+1)+"次提前还款",1)])),_:2},1024),b(u,{label:"还款日期"},{default:f((()=>[b(p,{value:t.repaymentDate,"onUpdate:value":e=>t.repaymentDate=e,format:e.dateFormat,style:{width:"100%"}},null,8,["value","onUpdate:value","format"])])),_:2},1024),b(u,{label:"提前还款金额"},{default:f((()=>[b(r,{"addon-after":"元",value:t.repaymentAmount,"onUpdate:value":e=>t.repaymentAmount=e,type:"number"},null,8,["value","onUpdate:value"])])),_:2},1024),b(u,{label:"调整期数"},{default:f((()=>[b(r,{"addon-after":"期",value:t.adjustLoanMonth,"onUpdate:value":e=>t.adjustLoanMonth=e,type:"number"},null,8,["value","onUpdate:value"])])),_:2},1024),b(u,{label:"调整利率"},{default:f((()=>[b(r,{"addon-after":"%",value:t.lendingRates,"onUpdate:value":e=>t.lendingRates=e},null,8,["value","onUpdate:value"])])),_:2},1024)],64)))),128))])),_:1})])])),_:1}),b(P,{xs:24,lg:18},{default:f((()=>[g("div",V,[b(_,{"label-col":{span:6},"wrapper-col":{span:18},labelAlign:"left",colon:!1},{default:f((()=>[b(u,{label:"累计提前还款"},{default:f((()=>[b(r,{"addon-after":"元",value:l.cumulativeRepayment,"onUpdate:value":t[6]||(t[6]=e=>l.cumulativeRepayment=e),readonly:""},null,8,["value"])])),_:1}),b(u,{label:"累计调整期数"},{default:f((()=>[b(r,{"addon-after":"元",value:l.cumulativeAdjustLoanMonth,"onUpdate:value":t[7]||(t[7]=e=>l.cumulativeAdjustLoanMonth=e),readonly:""},null,8,["value"])])),_:1}),b(u,{label:"原累计利息"},{default:f((()=>[b(r,{"addon-after":"元",value:l.originalCumulativeInterestPayment,"onUpdate:value":t[8]||(t[8]=e=>l.originalCumulativeInterestPayment=e),readonly:""},null,8,["value"])])),_:1}),b(u,{label:"累计缴息"},{default:f((()=>[b(r,{"addon-after":"元",value:l.cumulativeInterestPayment,"onUpdate:value":t[9]||(t[9]=e=>l.cumulativeInterestPayment=e),readonly:""},null,8,["value"])])),_:1}),b(u,{label:"累计节省利息"},{default:f((()=>[b(r,{"addon-after":"元",value:l.savedMoney,"onUpdate:value":t[10]||(t[10]=e=>l.savedMoney=e),readonly:""},null,8,["value"])])),_:1}),b(u,{"wrapper-col":{span:24}},{default:f((()=>[b(k,{dataSource:l.dataSource,columns:e.columns,bordered:"",size:"small",pagination:!1},null,8,["dataSource","columns"])])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})},I.__scopeId="data-v-05e5f8e4"}}}))}();
