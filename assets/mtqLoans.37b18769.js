import{E as e,F as t,Z as n,ab as a,_ as o,a3 as i,ac as l,a4 as s,$ as r,k as u,s as m,p,a as d,b as h,c as y,w as f,o as c,e as v,f as b,g as R,P as g,O as M,K as A,h as D,Q as x}from"./vendor.63c7f986.js";import{_ as F}from"./container.e990a2aa.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */var N=".tips[data-v-c364a264] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem 0.8rem;\n  color: red;\n}\n.panel[data-v-c364a264] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem 0.8rem;\n}\n.panel .ant-calendar-picker[data-v-c364a264] {\n  width: 100%;\n}";const{Item:_}=n,{Option:P}=i,{Group:k}=r,j={name:"多次提前还贷计算器",components:{Container:F,Row:e,Col:t,Form:n,Table:a,Input:o,Item:_,Select:i,Option:P,DatePicker:l,Divider:s,Button:r,Group:k},data:()=>({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:u(),prepayment:[],columns:[{title:"期次",dataIndex:"times",key:"times"},{title:"还款日期",dataIndex:"repaymentDate",key:"repaymentDate"},{title:"每月还款",dataIndex:"monthlyAmount",key:"monthlyAmount"},{title:"偿还利息",dataIndex:"interestRepayment",key:"interestRepayment"},{title:"偿还本金",dataIndex:"principalRepayment",key:"principalRepayment"},{title:"剩余本金",dataIndex:"remainingPrincipal",key:"remainingPrincipal"}],dateFormat:"YYYY/MM/DD"}),watch:{repaymentPeriod(e){this.loanMonth=0!==e?12*e:120}},computed:{options:function(){const e={};if(!isNaN(parseFloat(this.loanAmount))&&parseFloat(this.loanAmount)>0&&(e.loanAmount=parseFloat(this.loanAmount)),Number.isInteger(parseFloat(this.loanMonth))&&parseFloat(this.loanMonth)>0&&(e.loanMonth=parseInt(this.loanMonth)),!isNaN(parseFloat(this.lendingRates))&&parseFloat(this.lendingRates)>0&&(e.lendingRates=parseFloat(this.lendingRates)),u.isMoment(this.firstRepaymentDate))if(e.firstRepaymentDate=this.firstRepaymentDate,0===this.prepayment.length)e.prepayment=this.prepayment;else{let t=!0;for(const e in this.prepayment)if("0"===e){if(!(u.isMoment(this.prepayment[e].repaymentDate)&&this.prepayment[e].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1,"M"),"days")>=0)){t=!1;break}}else if(!(u.isMoment(this.prepayment[e].repaymentDate)&&this.prepayment[e].repaymentDate.diff(this.prepayment[e-1].repaymentDate,"days")>=0)){t=!1;break}t&&(e.prepayment=this.prepayment)}return e},isValidOptions:function(){return Object.keys(this.options).length>=5},originDataSource:function(){if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),"equalLoan"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};for(let n=1;n<=this.options.loanMonth;n++){const a=Number((-I(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2)),o=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2)),i=Number((a-o).toFixed(2));t.loanAmount-=i,t.loanMonth--,e.push({key:n,times:n,repaymentDate:this.options.firstRepaymentDate.clone().add(n-1,"M").format(this.dateFormat),monthlyAmount:a,interestRepayment:o,principalRepayment:i,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if("equalPrincipal"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth};for(let n=1;n<=this.options.loanMonth;n++){const a=Number((t.loanAmount/t.loanMonth).toFixed(2)),o=Number((t.loanAmount*this.options.lendingRates/100/12).toFixed(2)),i=Number((a+o).toFixed(2));t.loanAmount-=a,t.loanMonth--,e.push({key:n,times:n,repaymentDate:this.options.firstRepaymentDate.clone().add(n-1,"M").format(this.dateFormat),monthlyAmount:i,interestRepayment:o,principalRepayment:a,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}return[]},dataSource:function(){try{if(this.isValidOptions){const e=[];if(e.push({key:0,times:0,remainingPrincipal:this.options.loanAmount}),"equalLoan"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let n=0,a=0;const o=m(this.options.prepayment);for(let i=1;i<=this.options.loanMonth-n;i++){if(i>0)for(;o.length>0&&o[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(i-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(i-1,"M"),"[)");){const a=o.shift();t.loanAmount-=Number(a.repaymentAmount),t.lendingRates=Number(a.lendingRates||0),t.loanMonth-=Number(a.adjustLoanMonth||0),n+=Number(a.adjustLoanMonth||0),e.push({repaymentDate:a.repaymentDate.format(this.dateFormat),principalRepayment:a.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const l=Number((-I(t.lendingRates/100/12,t.loanMonth,t.loanAmount)).toFixed(2));let s=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));a+=t.loanAmount*t.lendingRates/100/12-s;const r=Number((l-s).toFixed(2));t.loanAmount-=r,t.loanMonth--,0===t.loanMonth&&(s=Number((s+a).toFixed(2))),e.push({key:i,times:i,repaymentDate:this.options.firstRepaymentDate.clone().add(i-1,"M").format(this.dateFormat),monthlyAmount:l,interestRepayment:s,principalRepayment:r,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}if("equalPrincipal"===this.repayment){const t={loanAmount:this.options.loanAmount,loanMonth:this.options.loanMonth,lendingRates:this.options.lendingRates};let n=0,a=0;const o=m(this.options.prepayment);for(let i=1;i<=this.options.loanMonth-n;i++){if(o.length>0&&i>1&&o[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(i-2,"M").subtract(1,"days"),this.options.firstRepaymentDate.clone().add(i-1,"M"),"[)")){const a=o.shift();t.loanAmount-=Number(a.repaymentAmount),t.lendingRates=Number(a.lendingRates||0),t.loanMonth-=Number(a.adjustLoanMonth||0),n+=Number(a.adjustLoanMonth||0),e.push({repaymentDate:a.repaymentDate.format(this.dateFormat),principalRepayment:a.repaymentAmount,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}const l=Number((t.loanAmount/t.loanMonth).toFixed(2));let s=Number((t.loanAmount*t.lendingRates/100/12).toFixed(2));a+=t.loanAmount*t.lendingRates/100/12-s;const r=Number((l+s).toFixed(2));t.loanAmount-=l,t.loanMonth--,0===t.loanMonth&&(s=Number((s+a).toFixed(2))),e.push({key:i,times:i,repaymentDate:this.options.firstRepaymentDate.clone().add(i-1,"M").format(this.dateFormat),monthlyAmount:r,interestRepayment:s,principalRepayment:l,remainingPrincipal:Number(t.loanAmount.toFixed(2))})}}return e}return[]}catch(e){return[]}},originalCumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.originDataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeInterestPayment:function(){let e=0;if(this.isValidOptions)for(const t of this.dataSource)e+=t.interestRepayment||0;return Number(e.toFixed(2))},cumulativeRepayment:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.repaymentAmount||0);return e.toFixed(2)},cumulativeAdjustLoanMonth:function(){let e=0;if(this.isValidOptions)for(const t of this.prepayment)e+=Number(t.adjustLoanMonth||0);return e.toFixed(2)},savedMoney:function(){return(Number(this.originalCumulativeInterestPayment)-Number(this.cumulativeInterestPayment)).toFixed(2)}},methods:{addPrepayment(){let e,t;0===this.prepayment.length?(e=this.firstRepaymentDate||u(),t=this.lendingRates||0):(e=this.prepayment[this.prepayment.length-1].repaymentDate||u(),t=this.prepayment[this.prepayment.length-1].lendingRates||0),this.prepayment.push({repaymentDate:e,repaymentAmount:0,adjustLoanMonth:0,lendingRates:t})},removePrepayment(){this.prepayment.pop()}}};function I(e,t,n,a,o){if(a=void 0!==a?a:0,o=void 0!==o?o:0,0!==e){const i=Math.pow(1+e,t);return-e*(a+i*n)/((-1+i)*(1+e*o))}return 0!==t?-(a+n)/t:0}p("data-v-c364a264");const U=b("span",{class:"tips"},"计算仅供参考，请以银行数据为准!",-1),w={class:"panel"},L=D("自定义贷款期限"),O=D(" 等额本息 "),C=D(" 等额本金 "),S=D("添加提前还款"),q=D("移除"),V={class:"panel"};function B(e,t,n,a,o,i){const l=h("Row"),s=h("Input"),r=h("Item"),u=h("Option"),m=h("Select"),p=h("DatePicker"),d=h("Divider"),F=h("Button"),N=h("Group"),_=h("Form"),P=h("Col"),k=h("Table"),j=h("container");return c(),y(j,null,{default:f((()=>[v(l,null,{default:f((()=>[v(l,{span:24},{default:f((()=>[U])),_:1})])),_:1}),v(l,null,{default:f((()=>[v(P,{xs:24,lg:6},{default:f((()=>[b("div",w,[v(_,{layout:"horizontal","label-col":{span:8},"wrapper-col":{span:16},labelAlign:"left",colon:!1},{default:f((()=>[v(r,{label:"贷款金额"},{default:f((()=>[v(s,{"addon-after":"元",value:e.loanAmount,"onUpdate:value":t[0]||(t[0]=t=>e.loanAmount=t),type:"number"},null,8,["value"])])),_:1}),v(r,{label:"贷款期限"},{default:f((()=>[v(m,{value:e.repaymentPeriod,"onUpdate:value":t[1]||(t[1]=t=>e.repaymentPeriod=t),type:"number"},{default:f((()=>[v(u,{value:0},{default:f((()=>[L])),_:1}),(c(),R(M,null,g(30,((e,t)=>v(u,{key:"repaymentPeriod"+t,value:e},{default:f((()=>[D(x(e)+"年("+x(12*e)+"月) ",1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),v(r,{label:"贷款月数"},{default:f((()=>[v(s,{"addon-after":"月",value:e.loanMonth,"onUpdate:value":t[2]||(t[2]=t=>e.loanMonth=t),disabled:0!==e.repaymentPeriod},null,8,["value","disabled"])])),_:1}),v(r,{label:"贷款利率"},{default:f((()=>[v(s,{"addon-after":"%",value:e.lendingRates,"onUpdate:value":t[3]||(t[3]=t=>e.lendingRates=t)},null,8,["value"])])),_:1}),v(r,{label:"还款方式"},{default:f((()=>[v(m,{value:e.repayment,"onUpdate:value":t[4]||(t[4]=t=>e.repayment=t)},{default:f((()=>[v(u,{value:"equalLoan"},{default:f((()=>[O])),_:1}),v(u,{value:"equalPrincipal"},{default:f((()=>[C])),_:1})])),_:1},8,["value"])])),_:1}),v(r,{label:"首次还款"},{default:f((()=>[v(p,{value:e.firstRepaymentDate,"onUpdate:value":t[5]||(t[5]=t=>e.firstRepaymentDate=t),format:e.dateFormat,style:{width:"100%"}},null,8,["value","format"])])),_:1}),v(d),v(r,null,{default:f((()=>[v(N,null,{default:f((()=>[v(F,{type:"primary",onClick:i.addPrepayment,disabled:!e.firstRepaymentDate},{default:f((()=>[S])),_:1},8,["onClick","disabled"]),e.prepayment.length>0?(c(),y(F,{key:0,onClick:i.removePrepayment},{default:f((()=>[q])),_:1},8,["onClick"])):A("",!0)])),_:1})])),_:1}),(c(!0),R(M,null,g(e.prepayment,((t,n)=>(c(),R(M,{key:n},[v(d,{orientation:"left"},{default:f((()=>[D("第"+x(n+1)+"次提前还款",1)])),_:2},1024),v(r,{label:"还款日期"},{default:f((()=>[v(p,{value:t.repaymentDate,"onUpdate:value":e=>t.repaymentDate=e,format:e.dateFormat,style:{width:"100%"}},null,8,["value","onUpdate:value","format"])])),_:2},1024),v(r,{label:"提前还款金额"},{default:f((()=>[v(s,{"addon-after":"元",value:t.repaymentAmount,"onUpdate:value":e=>t.repaymentAmount=e,type:"number"},null,8,["value","onUpdate:value"])])),_:2},1024),v(r,{label:"调整期数"},{default:f((()=>[v(s,{"addon-after":"期",value:t.adjustLoanMonth,"onUpdate:value":e=>t.adjustLoanMonth=e,type:"number"},null,8,["value","onUpdate:value"])])),_:2},1024),v(r,{label:"调整利率"},{default:f((()=>[v(s,{"addon-after":"%",value:t.lendingRates,"onUpdate:value":e=>t.lendingRates=e},null,8,["value","onUpdate:value"])])),_:2},1024)],64)))),128))])),_:1})])])),_:1}),v(P,{xs:24,lg:18},{default:f((()=>[b("div",V,[v(_,{"label-col":{span:6},"wrapper-col":{span:18},labelAlign:"left",colon:!1},{default:f((()=>[v(r,{label:"累计提前还款"},{default:f((()=>[v(s,{"addon-after":"元",value:i.cumulativeRepayment,"onUpdate:value":t[6]||(t[6]=e=>i.cumulativeRepayment=e),readonly:""},null,8,["value"])])),_:1}),v(r,{label:"累计调整期数"},{default:f((()=>[v(s,{"addon-after":"元",value:i.cumulativeAdjustLoanMonth,"onUpdate:value":t[7]||(t[7]=e=>i.cumulativeAdjustLoanMonth=e),readonly:""},null,8,["value"])])),_:1}),v(r,{label:"原累计利息"},{default:f((()=>[v(s,{"addon-after":"元",value:i.originalCumulativeInterestPayment,"onUpdate:value":t[8]||(t[8]=e=>i.originalCumulativeInterestPayment=e),readonly:""},null,8,["value"])])),_:1}),v(r,{label:"累计缴息"},{default:f((()=>[v(s,{"addon-after":"元",value:i.cumulativeInterestPayment,"onUpdate:value":t[9]||(t[9]=e=>i.cumulativeInterestPayment=e),readonly:""},null,8,["value"])])),_:1}),v(r,{label:"累计节省利息"},{default:f((()=>[v(s,{"addon-after":"元",value:i.savedMoney,"onUpdate:value":t[10]||(t[10]=e=>i.savedMoney=e),readonly:""},null,8,["value"])])),_:1}),v(r,{"wrapper-col":{span:24}},{default:f((()=>[v(k,{dataSource:i.dataSource,columns:e.columns,bordered:"",size:"small",pagination:!1},null,8,["dataSource","columns"])])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})}d(),j.render=B,j.__scopeId="data-v-c364a264";export{j as default};
