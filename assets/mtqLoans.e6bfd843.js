import{F as e,G as t,_ as n,ad as a,$ as o,a6 as i,ae as l,a9 as s,a0 as r,k as m,l as u,a as p,o as d,c as h,w as y,b as f,e as c,f as v,Q as b,P as R,O as g,p as M,h as A,g as x,U as D}from"./vendor.18d196da.js";import{C as F}from"./container.5ad8adce.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as N}from"./index.f91f87a2.js";var _=".tips[data-v-c364a264] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem 0.8rem;\n  color: red;\n}\n.panel[data-v-c364a264] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem 0.8rem;\n}\n.panel .ant-calendar-picker[data-v-c364a264] {\n  width: 100%;\n}";const{Item:P}=n,{Option:j}=i,{Group:k}=r,I={name:"多次提前还贷计算器",components:{Container:F,Row:e,Col:t,Form:n,Table:a,Input:o,Item:P,Select:i,Option:j,DatePicker:l,Divider:s,Button:r,Group:k},data:()=>({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:m(),prepayment:[],columns:[{title:"期次",dataIndex:"times",key:"times"},{title:"还款日期",dataIndex:"repaymentDate",key:"repaymentDate"},{title:"每月还款",dataIndex:"monthlyAmount",key:"monthlyAmount"},{title:"偿还利息",dataIndex:"interestRepayment",key:"interestRepayment"},{title:"偿还本金",dataIndex:"principalRepayment",key:"principalRepayment"},{title:"剩余本金",dataIndex:"remainingPrincipal",key:"remainingPrincipal"}],dateFormat:"YYYY/MM/DD"}),watch:{repaymentPeriod(e){this.loanMonth=0!==e?12*e:120}},computed:{options:function(){const e={};if(!isNaN(parseFloat(this.loanAmount))&&parseFloat(this.loanAmount)>0&&(e.loanAmount=parseFloat(this.loanAmount)),Number.isInteger(parseFloat(this.loanMonth))&&parseFloat(this.loanMonth)>0&&(e.loanMonth=parseInt(this.loanMonth)),!isNaN(parseFloat(this.lendingRates))&&parseFloat(this.lendingRates)>0&&(e.lendingRates=parseFloat(this.lendingRates)),m.isMoment(this.firstRepaymentDate))if(e.firstRepaymentDate=this.firstRepaymentDate,0===this.prepayment.length)e.prepayment=this.prepayment;else{let t=!0;for(const e in this.prepayment)if("0"===e){if(!(m.isMoment(this.prepayment[e].repaymentDate)&&this.prepayment[e].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1,"M"),"days")>=0)){t=!1;break}}else if(!(m.isMoment(this.prepayment[e].repaymentDate)&&this.prepayment[e].repaymentDate.diff(this.prepayment[e-1].repaymentDate,"days")>=0)){t=!1;break}t&&(e.prepayment=this.prepayment)}return e},isValidOptions:function(){return Object.keys(this.options).length>=5},originDataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),"equalLoan"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};for(let n=1;n<=this.options.loanMonth;n++){const a=Number((-U(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2)),o=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2)),i=Number((a-o).toFixed(2));t.loanAmount-=i,t.loanMonth--,e.push({key:n,times:n,repaymentDate:this.options.firstRepaymentDate.clone().add(n-1,"M").format(this.dateFormat),monthlyAmount:a,interestRepayment:o,principalRepayment:i,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if("equalPrincipal"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth};for(let n=1;n<=this.options.loanMonth;n++){const a=Number((t.loanAmount/t.loanMonth).toFixed(2)),o=Number((t.loanAmount*this.options.lendingRates/100/12).toFixed(2)),i=Number((a+o).toFixed(2));t.loanAmount-=a,t.loanMonth--,e.push({key:n,times:n,repaymentDate:this.options.firstRepaymentDate.clone().add(n-1,"M").format(this.dateFormat),monthlyAmount:i,interestRepayment:o,principalRepayment:a,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}return[]},dataSource:function(){try{if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),"equalLoan"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let n=0,a=0;const o=u(this.options.prepayment);for(let i=1;i<=this.options.loanMonth-n;i++){if(i>0)for(;o.length>0&&o[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(i-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(i-1,"M"),"[)");){const a=o.shift();t.loanAmount-=Number(a.repaymentAmount),t.lendingRates=Number(a.lendingRates||0),t.loanMonth-=Number(a.adjustLoanMonth||0),n+=Number(a.adjustLoanMonth||0),e.push({repaymentDate:a.repaymentDate.format(this.dateFormat),principalRepayment:a.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const l=Number((-U(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2));let s=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));a+=t.loanAmount*t.lendingRates/100/12-s;const r=Number((l-s).toFixed(2));t.loanAmount-=r,t.loanMonth--,0===t.loanMonth&&(s=Number((s+a).toFixed(2))),e.push({key:i,times:i,repaymentDate:this.options.firstRepaymentDate.clone().add(i-1,"M").format(this.dateFormat),monthlyAmount:l,interestRepayment:s,principalRepayment:r,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if("equalPrincipal"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let n=0,a=0;const o=u(this.options.prepayment);for(let i=1;i<=this.options.loanMonth-n;i++){if(o.length>0&&i>1&&o[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(i-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(i-1,"M"),"[)")){const a=o.shift();t.loanAmount-=Number(a.repaymentAmount),t.lendingRates=Number(a.lendingRates||0),t.loanMonth-=Number(a.adjustLoanMonth||0),n+=Number(a.adjustLoanMonth||0),e.push({repaymentDate:a.repaymentDate.format(this.dateFormat),principalRepayment:a.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const l=Number((t.loanAmount/t.loanMonth).toFixed(2));let s=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));a+=t.loanAmount*t.lendingRates/100/12-s;const r=Number((l+s).toFixed(2));t.loanAmount-=l,t.loanMonth--,0===t.loanMonth&&(s=Number((s+a).toFixed(2))),e.push({key:i,times:i,repaymentDate:this.options.firstRepaymentDate.clone().add(i-1,"M").format(this.dateFormat),monthlyAmount:r,interestRepayment:s,principalRepayment:l,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}return[]}catch(e){return[]}},originalCumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.originDataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.dataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeRepayment:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.repaymentAmount||0);return e.toFixed(2)},cumulativeAdjustLoanMonth:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.adjustLoanMonth||0);return e.toFixed(2)},savedMoney:function(){return(Number(this.originalCumulativeInterestPayment)-Number(this.cumulativeInterestPayment)).toFixed(2)}},methods:{addPrepayment(){let e,t;0===this.prepayment.length?(e=this.firstRepaymentDate||m(),t=this.lendingRates||0):(e=this.prepayment[this.prepayment.length-1].repaymentDate||m(),t=this.prepayment[this.prepayment.length-1].lendingRates||0),this.prepayment.push({repaymentDate:e,repaymentAmount:0,adjustLoanMonth:0,lendingRates:t})},removePrepayment(){this.prepayment.pop()}}};function U(e,t,n,a,o){if(a=void 0!==a?a:0,o=void 0!==o?o:0,0!==e){const i=Math.pow(1+e,t);return-e*(a+i*n)/((-1+i)*(1+e*o))}return 0!==t?-(a+n)/t:0}const w=e=>(M("data-v-c364a264"),e=e(),A(),e),L=w((()=>c("span",{class:"tips"},"计算仅供参考，请以银行数据为准!",-1))),C={class:"panel"},O=x("自定义贷款期限"),S=x(" 等额本息 "),q=x(" 等额本金 "),V=x("添加提前还款"),B=x("移除"),G={class:"panel"};function Y(e,t,n,a,o,i){const l=p("Row"),s=p("Input"),r=p("Item"),m=p("Option"),u=p("Select"),M=p("DatePicker"),A=p("Divider"),F=p("Button"),N=p("Group"),_=p("Form"),P=p("Col"),j=p("Table"),k=p("container");return d(),h(k,null,{default:y((()=>[f(l,null,{default:y((()=>[f(l,{span:24},{default:y((()=>[L])),_:1})])),_:1}),f(l,null,{default:y((()=>[f(P,{xs:24,lg:6},{default:y((()=>[c("div",C,[f(_,{layout:"horizontal","label-col":{span:8},"wrapper-col":{span:16},labelAlign:"left",colon:!1},{default:y((()=>[f(r,{label:"贷款金额"},{default:y((()=>[f(s,{"addon-after":"元",value:e.loanAmount,"onUpdate:value":t[0]||(t[0]=t=>e.loanAmount=t),type:"number"},null,8,["value"])])),_:1}),f(r,{label:"贷款期限"},{default:y((()=>[f(u,{value:e.repaymentPeriod,"onUpdate:value":t[1]||(t[1]=t=>e.repaymentPeriod=t),type:"number"},{default:y((()=>[f(m,{value:0},{default:y((()=>[O])),_:1}),(d(),v(R,null,b(30,((e,t)=>f(m,{key:"repaymentPeriod"+t,value:e},{default:y((()=>[x(D(e)+"年("+D(12*e)+"月) ",1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),f(r,{label:"贷款月数"},{default:y((()=>[f(s,{"addon-after":"月",value:e.loanMonth,"onUpdate:value":t[2]||(t[2]=t=>e.loanMonth=t),disabled:0!==e.repaymentPeriod},null,8,["value","disabled"])])),_:1}),f(r,{label:"贷款利率"},{default:y((()=>[f(s,{"addon-after":"%",value:e.lendingRates,"onUpdate:value":t[3]||(t[3]=t=>e.lendingRates=t)},null,8,["value"])])),_:1}),f(r,{label:"还款方式"},{default:y((()=>[f(u,{value:e.repayment,"onUpdate:value":t[4]||(t[4]=t=>e.repayment=t)},{default:y((()=>[f(m,{value:"equalLoan"},{default:y((()=>[S])),_:1}),f(m,{value:"equalPrincipal"},{default:y((()=>[q])),_:1})])),_:1},8,["value"])])),_:1}),f(r,{label:"首次还款"},{default:y((()=>[f(M,{value:e.firstRepaymentDate,"onUpdate:value":t[5]||(t[5]=t=>e.firstRepaymentDate=t),format:e.dateFormat,style:{width:"100%"}},null,8,["value","format"])])),_:1}),f(A),f(r,null,{default:y((()=>[f(N,null,{default:y((()=>[f(F,{type:"primary",onClick:i.addPrepayment,disabled:!e.firstRepaymentDate},{default:y((()=>[V])),_:1},8,["onClick","disabled"]),e.prepayment.length>0?(d(),h(F,{key:0,onClick:i.removePrepayment},{default:y((()=>[B])),_:1},8,["onClick"])):g("",!0)])),_:1})])),_:1}),(d(!0),v(R,null,b(e.prepayment,((t,n)=>(d(),v(R,{key:n},[f(A,{orientation:"left"},{default:y((()=>[x("第"+D(n+1)+"次提前还款",1)])),_:2},1024),f(r,{label:"还款日期"},{default:y((()=>[f(M,{value:t.repaymentDate,"onUpdate:value":e=>t.repaymentDate=e,format:e.dateFormat,style:{width:"100%"}},null,8,["value","onUpdate:value","format"])])),_:2},1024),f(r,{label:"提前还款金额"},{default:y((()=>[f(s,{"addon-after":"元",value:t.repaymentAmount,"onUpdate:value":e=>t.repaymentAmount=e,type:"number"},null,8,["value","onUpdate:value"])])),_:2},1024),f(r,{label:"调整期数"},{default:y((()=>[f(s,{"addon-after":"期",value:t.adjustLoanMonth,"onUpdate:value":e=>t.adjustLoanMonth=e,type:"number"},null,8,["value","onUpdate:value"])])),_:2},1024),f(r,{label:"调整利率"},{default:y((()=>[f(s,{"addon-after":"%",value:t.lendingRates,"onUpdate:value":e=>t.lendingRates=e},null,8,["value","onUpdate:value"])])),_:2},1024)],64)))),128))])),_:1})])])),_:1}),f(P,{xs:24,lg:18},{default:y((()=>[c("div",G,[f(_,{"label-col":{span:6},"wrapper-col":{span:18},labelAlign:"left",colon:!1},{default:y((()=>[f(r,{label:"累计提前还款"},{default:y((()=>[f(s,{"addon-after":"元",value:i.cumulativeRepayment,"onUpdate:value":t[6]||(t[6]=e=>i.cumulativeRepayment=e),readonly:""},null,8,["value"])])),_:1}),f(r,{label:"累计调整期数"},{default:y((()=>[f(s,{"addon-after":"元",value:i.cumulativeAdjustLoanMonth,"onUpdate:value":t[7]||(t[7]=e=>i.cumulativeAdjustLoanMonth=e),readonly:""},null,8,["value"])])),_:1}),f(r,{label:"原累计利息"},{default:y((()=>[f(s,{"addon-after":"元",value:i.originalCumulativeInterestPayment,"onUpdate:value":t[8]||(t[8]=e=>i.originalCumulativeInterestPayment=e),readonly:""},null,8,["value"])])),_:1}),f(r,{label:"累计缴息"},{default:y((()=>[f(s,{"addon-after":"元",value:i.cumulativeInterestPayment,"onUpdate:value":t[9]||(t[9]=e=>i.cumulativeInterestPayment=e),readonly:""},null,8,["value"])])),_:1}),f(r,{label:"累计节省利息"},{default:y((()=>[f(s,{"addon-after":"元",value:i.savedMoney,"onUpdate:value":t[10]||(t[10]=e=>i.savedMoney=e),readonly:""},null,8,["value"])])),_:1}),f(r,{"wrapper-col":{span:24}},{default:y((()=>[f(j,{dataSource:i.dataSource,columns:e.columns,bordered:"",size:"small",pagination:!1},null,8,["dataSource","columns"])])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})}var z=N(I,[["render",Y],["__scopeId","data-v-c364a264"]]);export{z as default};
