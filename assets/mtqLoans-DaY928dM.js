import{aU as O,k as W,a4 as X,n as R,bx as Y,a7 as Z,E as j,r as E,F as P,K as n,w as i,x as p,Y as q,Z as $,W as z,q as J,G as Q,L as ee,N as C,H as te,X as U,a0 as ne}from"./index-CCHXUW6W.js";import{E as ae,a as le}from"./el-table-column-CmyqA7c9.js";import"./el-checkbox-0RyUOyrz.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-D7uO62g1.js";/* empty css               */import{E as oe,a as re}from"./el-form-item-DVvjP_4C.js";import{E as me}from"./el-space-DX8IPkN-.js";import{E as ue}from"./el-divider-CmWP3uyq.js";import{E as ie}from"./el-date-picker-B9ZF996b.js";import{a as pe,E as se}from"./el-select-DWFpuwd8.js";import{E as de}from"./el-input-number-CCZycv4E.js";import{d as h}from"./dayjs.min-CIEYE9A9.js";import"./map-DaK8oRzA.js";import"./_baseIteratee-jBbSyueY.js";import"./Router-DUIpt0HJ.js";import"./_baseEach-Cx6rcBVl.js";import"./index-B9ROuUt4.js";import"./raf-DWxpJFW2.js";import"./index-VwAMpcpz.js";import"./isUndefined-DCTLXrZ8.js";import"./castArray-DGYX5zrV.js";import"./clone-VaB1VCni.js";import"./index-BQyZLjVJ.js";import"./index-BvrITQOB.js";import"./strings-C0XhqU0o.js";var I={exports:{}},fe=I.exports,T;function ye(){return T||(T=1,function(M,t){(function(b,a){M.exports=a()})(fe,function(){return function(b,a,v){a.prototype.isBetween=function(_,N,c,D){var g=v(_),A=v(N),k=(D=D||"()")[0]==="(",L=D[1]===")";return(k?this.isAfter(g,c):!this.isBefore(g,c))&&(L?this.isBefore(A,c):!this.isAfter(A,c))||(k?this.isBefore(g,c):!this.isAfter(g,c))&&(L?this.isAfter(A,c):!this.isBefore(A,c))}}})}(I)),I.exports}var ce=ye();const be=O(ce);function G(M,t,b,a,v){if(a=typeof a<"u"?a:0,v=typeof v<"u"?v:0,M!==0){const _=(1+M)**t;return-(M*(a+_*b))/((-1+_)*(1+M*v))}else if(t!==0)return-(a+b)/t;return 0}const ve={"h-full":"",flex:"","flex-col":"","overflow-auto":""},Re={flex:"","flex-1":"","overflow-auto":"",class:"panel-wrapper"},he={class:"panel"},ge={class:"panel",flex:"","flex-1":"","flex-col":""},w="YYYY/MM/DD",Ae=W({__name:"mtqLoans",setup(M){h.extend(be);const t=X({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:new Date,prepayment:[]}),b=R(()=>{const l={};if(!Number.isNaN(t.loanAmount)&&t.loanAmount>0&&(l.loanAmount=t.loanAmount),Number.isInteger(t.loanMonth)&&t.loanMonth>0&&(l.loanMonth=t.loanMonth),!Number.isNaN(t.lendingRates)&&t.lendingRates>0&&(l.lendingRates=t.lendingRates),t.firstRepaymentDate)if(l.firstRepaymentDate=h(t.firstRepaymentDate),t.prepayment.length===0)l.prepayment=t.prepayment;else{let e=!0;for(const m in t.prepayment)if(m==="0"){if(!(t.prepayment[m].repaymentDate&&h(t.prepayment[m].repaymentDate).diff(h(t.firstRepaymentDate).subtract(1,"M"),"days")>=0)){e=!1;break}}else if(!(t.prepayment[m].repaymentDate&&h(t.prepayment[m].repaymentDate).diff(t.prepayment[Number.parseInt(m)-1].repaymentDate,"days")>=0)){e=!1;break}e&&(l.prepayment=t.prepayment)}return l}),a=R(()=>b.value.loanAmount!=null&&b.value.loanMonth!=null&&b.value.lendingRates!=null&&b.value.firstRepaymentDate&&b.value.prepayment?b.value:null),v=R(()=>{if(a.value){const l=[];if(l.push({key:0,times:0,remainingPrincipal:b.value.loanAmount}),t.repayment==="equalLoan"){const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth,lendingRates:a.value.lendingRates};for(let m=1;m<=a.value.loanMonth;m++){const r=Number((-G(e.lendingRates/100/12,e.loanMonth,e.loanAmount)).toFixed(2)),s=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2)),u=Number((r-s).toFixed(2));e.loanAmount-=u,e.loanMonth--,l.push({key:m,times:m,repaymentDate:a.value.firstRepaymentDate.clone().add(m-1,"M").format(w),monthlyAmount:r,interestRepayment:s,principalRepayment:u,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}else{const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth};for(let m=1;m<=a.value.loanMonth;m++){const r=Number((e.loanAmount/e.loanMonth).toFixed(2)),s=Number((e.loanAmount*a.value.lendingRates/100/12).toFixed(2)),u=Number((r+s).toFixed(2));e.loanAmount-=r,e.loanMonth--,l.push({key:m,times:m,repaymentDate:a.value.firstRepaymentDate.clone().add(m-1,"M").format(w),monthlyAmount:u,interestRepayment:s,principalRepayment:r,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}return l}else return[]}),_=R(()=>{if(a.value){const l=[];if(l.push({key:0,times:0,remainingPrincipal:a.value.loanAmount}),t.repayment==="equalLoan"){const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth,lendingRates:a.value.lendingRates};let m=0,r=0;const s=Y(a.value.prepayment);for(let u=1;u<=a.value.loanMonth-m;u++){if(u>0)for(;s.length>0&&h(s[0].repaymentDate).isBetween(a.value.firstRepaymentDate.clone().add(u-2,"M").subtract(1,"days"),a.value.firstRepaymentDate.clone().add(u-1,"M"),"[)");){const d=s.shift();e.loanAmount-=Number(d.repaymentAmount),e.lendingRates=Number(d.lendingRates||0),e.loanMonth-=Number(d.adjustLoanMonth||0),m+=Number(d.adjustLoanMonth||0),l.push({repaymentDate:h(d.repaymentDate).format(w),principalRepayment:d.repaymentAmount,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}const f=Number((-G(e.lendingRates/100/12,e.loanMonth,e.loanAmount)).toFixed(2));let y=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2));r+=e.loanAmount*e.lendingRates/100/12-y;const x=Number((f-y).toFixed(2));e.loanAmount-=x,e.loanMonth--,e.loanMonth===0&&(y=Number((y+r).toFixed(2))),l.push({key:u,times:u,repaymentDate:a.value.firstRepaymentDate.clone().add(u-1,"M").format(w),monthlyAmount:f,interestRepayment:y,principalRepayment:x,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}else{const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth,lendingRates:a.value.lendingRates};let m=0,r=0;const s=Y(a.value.prepayment);for(let u=1;u<=a.value.loanMonth-m;u++){if(s.length>0&&u>1&&h(s[0].repaymentDate).isBetween(a.value.firstRepaymentDate.clone().add(u-2,"M").subtract(1,"days"),a.value.firstRepaymentDate.clone().add(u-1,"M"),"[)")){const d=s.shift();e.loanAmount-=Number(d.repaymentAmount),e.lendingRates=Number(d.lendingRates||0),e.loanMonth-=Number(d.adjustLoanMonth||0),m+=Number(d.adjustLoanMonth||0),l.push({repaymentDate:h(d.repaymentDate).format(w),principalRepayment:d.repaymentAmount,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}const f=Number((e.loanAmount/e.loanMonth).toFixed(2));let y=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2));r+=e.loanAmount*e.lendingRates/100/12-y;const x=Number((f+y).toFixed(2));e.loanAmount-=f,e.loanMonth--,e.loanMonth===0&&(y=Number((y+r).toFixed(2))),l.push({key:u,times:u,repaymentDate:a.value.firstRepaymentDate.clone().add(u-1,"M").format(w),monthlyAmount:x,interestRepayment:y,principalRepayment:f,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}return l}else return[]}),N=R(()=>{let l=0;if(a.value)for(const e of v.value)l+=e.interestRepayment||0;return Number(l.toFixed(2))}),c=R(()=>{let l=0;if(a.value)for(const e of _.value)l+=e.interestRepayment||0;return Number(l.toFixed(2))}),D=R(()=>{let l=0;if(a.value)for(const e of t.prepayment)l+=Number(e.repaymentAmount||0);return l.toFixed(2)}),g=R(()=>{let l=0;if(a.value)for(const e of t.prepayment)l+=Number(e.adjustLoanMonth||0);return l.toFixed(2)}),A=R(()=>(N.value-c.value).toFixed(2));Z(()=>t.repaymentPeriod,l=>{l!==0?t.loanMonth=l*12:t.loanMonth=120});function k(){let l,e;t.prepayment.length===0?(l=t.firstRepaymentDate?t.firstRepaymentDate:new Date,e=t.lendingRates||0):(l=t.prepayment[t.prepayment.length-1].repaymentDate||new Date,e=t.prepayment[t.prepayment.length-1].lendingRates||0),t.prepayment.push({repaymentDate:l,repaymentAmount:0,adjustLoanMonth:0,lendingRates:e})}function L(){t.prepayment.pop()}return(l,e)=>{const m=de,r=oe,s=se,u=pe,f=z,y=ie,x=ue,d=ee,H=me,S=re,F=ae,K=le;return E(),j("div",ve,[e[13]||(e[13]=P("span",{class:"tips"},"计算仅供参考，请以银行数据为准!",-1)),P("div",Re,[P("div",he,[n(S,{"label-width":120,"label-align":"left"},{default:i(()=>[n(r,{label:"贷款金额"},{default:i(()=>[n(m,{modelValue:p(t).loanAmount,"onUpdate:modelValue":e[0]||(e[0]=o=>p(t).loanAmount=o),"addon-after":"元","controls-position":"right"},null,8,["modelValue"])]),_:1}),n(r,{label:"贷款期限"},{default:i(()=>[n(u,{modelValue:p(t).repaymentPeriod,"onUpdate:modelValue":e[1]||(e[1]=o=>p(t).repaymentPeriod=o),type:"number"},{default:i(()=>[n(s,{value:0,label:"自定义贷款期限"}),(E(),j(q,null,$(30,(o,B)=>n(s,{key:`repaymentPeriod${B}`,value:o,label:`${o}年(${o*12}月)`},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),n(r,{label:"贷款月数"},{default:i(()=>[n(f,{modelValue:p(t).loanMonth,"onUpdate:modelValue":e[2]||(e[2]=o=>p(t).loanMonth=o),modelModifiers:{number:!0},"addon-after":"月",disabled:p(t).repaymentPeriod!==0},null,8,["modelValue","disabled"])]),_:1}),n(r,{label:"贷款利率"},{default:i(()=>[n(f,{modelValue:p(t).lendingRates,"onUpdate:modelValue":e[3]||(e[3]=o=>p(t).lendingRates=o),"addon-after":"%"},null,8,["modelValue"])]),_:1}),n(r,{label:"还款方式"},{default:i(()=>[n(u,{modelValue:p(t).repayment,"onUpdate:modelValue":e[4]||(e[4]=o=>p(t).repayment=o)},{default:i(()=>[n(s,{value:"equalLoan",label:"等额本息"}),n(s,{value:"equalPrincipal",label:"等额本金"})]),_:1},8,["modelValue"])]),_:1}),n(r,{label:"首次还款"},{default:i(()=>[n(y,{modelValue:p(t).firstRepaymentDate,"onUpdate:modelValue":e[5]||(e[5]=o=>p(t).firstRepaymentDate=o),type:"date"},null,8,["modelValue"])]),_:1}),n(x),n(r,null,{default:i(()=>[n(H,null,{default:i(()=>[n(d,{type:"primary",disabled:!p(t).firstRepaymentDate,onClick:k},{default:i(()=>e[11]||(e[11]=[C(" 添加提前还款 ")])),_:1},8,["disabled"]),p(t).prepayment.length>0?(E(),J(d,{key:0,onClick:L},{default:i(()=>e[12]||(e[12]=[C(" 移除 ")])),_:1})):Q("",!0)]),_:1})]),_:1}),(E(!0),j(q,null,$(p(t).prepayment,(o,B)=>(E(),j(q,{key:B},[n(x,{orientation:"left"},{default:i(()=>[C(" 第"+te(B+1)+"次提前还款 ",1)]),_:2},1024),n(r,{label:"还款日期"},{default:i(()=>[n(y,{modelValue:o.repaymentDate,"onUpdate:modelValue":V=>o.repaymentDate=V,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n(r,{label:"提前还款金额"},{default:i(()=>[n(m,{modelValue:o.repaymentAmount,"onUpdate:modelValue":V=>o.repaymentAmount=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n(r,{label:"调整期数"},{default:i(()=>[n(m,{modelValue:o.adjustLoanMonth,"onUpdate:modelValue":V=>o.adjustLoanMonth=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n(r,{label:"调整利率"},{default:i(()=>[n(f,{modelValue:o.lendingRates,"onUpdate:modelValue":V=>o.lendingRates=V,"addon-after":"%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)],64))),128))]),_:1})]),P("div",ge,[n(S,{"label-width":120,"label-align":"left"},{default:i(()=>[n(r,{label:"累计提前还款"},{default:i(()=>[n(f,{modelValue:p(D),"onUpdate:modelValue":e[6]||(e[6]=o=>U(D)?D.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(r,{label:"累计调整期数"},{default:i(()=>[n(f,{modelValue:p(g),"onUpdate:modelValue":e[7]||(e[7]=o=>U(g)?g.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(r,{label:"原累计利息"},{default:i(()=>[n(f,{modelValue:p(N),"onUpdate:modelValue":e[8]||(e[8]=o=>U(N)?N.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(r,{label:"累计缴息"},{default:i(()=>[n(f,{modelValue:p(c),"onUpdate:modelValue":e[9]||(e[9]=o=>U(c)?c.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(r,{label:"累计节省利息"},{default:i(()=>[n(f,{modelValue:p(A),"onUpdate:modelValue":e[10]||(e[10]=o=>U(A)?A.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1})]),_:1}),n(K,{"flex-1":"",data:p(_)},{default:i(()=>[n(F,{prop:"times",label:"期次"}),n(F,{prop:"repaymentDate",label:"还款日期"}),n(F,{prop:"monthlyAmount",label:"每月还款"}),n(F,{prop:"interestRepayment",label:"偿还利息"}),n(F,{prop:"principalRepayment",label:"偿还本金"}),n(F,{prop:"remainingPrincipal",label:"剩余本金"})]),_:1},8,["data"])])])])}}}),We=ne(Ae,[["__scopeId","data-v-f41d357d"]]);export{We as default};
