import{bb as G,aO as J,F as K,aE as X,m as R,w as H,J as w,K as j,ap as I,X as n,a1 as i,u as p,T as P,ax as S,ar as C,a0 as Q,a3 as W,ai as Z,aw as U,bt as T,az as ee,as as te,aA as ne,aB as ae,aC as le}from"./index-Tr-dY9sd.js";import{E as oe,a as me}from"./el-table-column-qvRZx_Il.js";import"./el-checkbox-E9SsA0Z9.js";import"./Router-twqYWQ-l.js";/* empty css               */import{a as re,E as ue}from"./el-form-item-o0AvrUqD.js";import{E as ie}from"./el-space-CHUIqsDE.js";import{E as pe}from"./el-divider-ywyLe9hS.js";import{E as se}from"./el-date-picker-6pFGqAxz.js";import{E as de,a as fe}from"./el-select-y8RnV9rs.js";import{E as ye}from"./el-input-number-l_ffA9_G.js";import{d as _}from"./dayjs.min-ibOCvbiK.js";import"./map-o9Z89zK1.js";import"./_baseIteratee-ZOUb0Lyv.js";import"./hasIn-H5lpYK--.js";import"./_baseEach-hKCo7tDB.js";import"./index-8CKH-yii.js";import"./raf-YnYdwPCo.js";import"./castArray-7k1-08SJ.js";import"./index-34TzeCuF.js";import"./index-aUgguFfQ.js";import"./strings-zrX5CzRm.js";import"./toInteger-27wOpi3m.js";import"./toFinite-SeW4l2Nd.js";var $={exports:{}};(function(v,t){(function(b,a){v.exports=a()})(G,function(){return function(b,a,h){a.prototype.isBetween=function(M,N,c,D){var A=h(M),g=h(N),k=(D=D||"()")[0]==="(",L=D[1]===")";return(k?this.isAfter(A,c):!this.isBefore(A,c))&&(L?this.isBefore(g,c):!this.isAfter(g,c))||(k?this.isBefore(A,c):!this.isAfter(A,c))&&(L?this.isAfter(g,c):!this.isBefore(g,c))}}})})($);var ce=$.exports;const be=J(ce);function Y(v,t,b,a,h){if(a=typeof a<"u"?a:0,h=typeof h<"u"?h:0,v!==0){const M=(1+v)**t;return-(v*(a+M*b))/((-1+M)*(1+v*h))}else if(t!==0)return-(a+b)/t;return 0}const ve=v=>(ne("data-v-681d6937"),v=v(),ae(),v),he={"h-full":"",flex:"","flex-col":"","overflow-auto":""},Re=ve(()=>I("span",{class:"tips"},"计算仅供参考，请以银行数据为准!",-1)),_e={flex:"","flex-1":"","overflow-auto":"",class:"panel-wrapper"},Ae={class:"panel"},ge={class:"panel",flex:"","flex-1":"","flex-col":""},E="YYYY/MM/DD",Me=K({__name:"mtqLoans",setup(v){_.extend(be);const t=X({loanAmount:15e4,repaymentPeriod:2,loanMonth:24,lendingRates:4.5,repayment:"equalLoan",firstRepaymentDate:new Date,prepayment:[]}),b=R(()=>{const l={};if(!Number.isNaN(t.loanAmount)&&t.loanAmount>0&&(l.loanAmount=t.loanAmount),Number.isInteger(t.loanMonth)&&t.loanMonth>0&&(l.loanMonth=t.loanMonth),!Number.isNaN(t.lendingRates)&&t.lendingRates>0&&(l.lendingRates=t.lendingRates),t.firstRepaymentDate)if(l.firstRepaymentDate=_(t.firstRepaymentDate),t.prepayment.length===0)l.prepayment=t.prepayment;else{let e=!0;for(const r in t.prepayment)if(r==="0"){if(!(t.prepayment[r].repaymentDate&&_(t.prepayment[r].repaymentDate).diff(_(t.firstRepaymentDate).subtract(1,"M"),"days")>=0)){e=!1;break}}else if(!(t.prepayment[r].repaymentDate&&_(t.prepayment[r].repaymentDate).diff(t.prepayment[Number.parseInt(r)-1].repaymentDate,"days")>=0)){e=!1;break}e&&(l.prepayment=t.prepayment)}return l}),a=R(()=>b.value.loanAmount!=null&&b.value.loanMonth!=null&&b.value.lendingRates!=null&&b.value.firstRepaymentDate&&b.value.prepayment?b.value:null),h=R(()=>{if(a.value){const l=[];if(l.push({key:0,times:0,remainingPrincipal:b.value.loanAmount}),t.repayment==="equalLoan"){const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth,lendingRates:a.value.lendingRates};for(let r=1;r<=a.value.loanMonth;r++){const m=Number((-Y(e.lendingRates/100/12,e.loanMonth,e.loanAmount)).toFixed(2)),s=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2)),u=Number((m-s).toFixed(2));e.loanAmount-=u,e.loanMonth--,l.push({key:r,times:r,repaymentDate:a.value.firstRepaymentDate.clone().add(r-1,"M").format(E),monthlyAmount:m,interestRepayment:s,principalRepayment:u,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}else{const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth};for(let r=1;r<=a.value.loanMonth;r++){const m=Number((e.loanAmount/e.loanMonth).toFixed(2)),s=Number((e.loanAmount*a.value.lendingRates/100/12).toFixed(2)),u=Number((m+s).toFixed(2));e.loanAmount-=m,e.loanMonth--,l.push({key:r,times:r,repaymentDate:a.value.firstRepaymentDate.clone().add(r-1,"M").format(E),monthlyAmount:u,interestRepayment:s,principalRepayment:m,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}return l}else return[]}),M=R(()=>{if(a.value){const l=[];if(l.push({key:0,times:0,remainingPrincipal:a.value.loanAmount}),t.repayment==="equalLoan"){const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth,lendingRates:a.value.lendingRates};let r=0,m=0;const s=T(a.value.prepayment);for(let u=1;u<=a.value.loanMonth-r;u++){if(u>0)for(;s.length>0&&_(s[0].repaymentDate).isBetween(a.value.firstRepaymentDate.clone().add(u-2,"M").subtract(1,"days"),a.value.firstRepaymentDate.clone().add(u-1,"M"),"[)");){const d=s.shift();e.loanAmount-=Number(d.repaymentAmount),e.lendingRates=Number(d.lendingRates||0),e.loanMonth-=Number(d.adjustLoanMonth||0),r+=Number(d.adjustLoanMonth||0),l.push({repaymentDate:_(d.repaymentDate).format(E),principalRepayment:d.repaymentAmount,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}const f=Number((-Y(e.lendingRates/100/12,e.loanMonth,e.loanAmount)).toFixed(2));let y=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2));m+=e.loanAmount*e.lendingRates/100/12-y;const V=Number((f-y).toFixed(2));e.loanAmount-=V,e.loanMonth--,e.loanMonth===0&&(y=Number((y+m).toFixed(2))),l.push({key:u,times:u,repaymentDate:a.value.firstRepaymentDate.clone().add(u-1,"M").format(E),monthlyAmount:f,interestRepayment:y,principalRepayment:V,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}else{const e={loanAmount:a.value.loanAmount,loanMonth:a.value.loanMonth,lendingRates:a.value.lendingRates};let r=0,m=0;const s=T(a.value.prepayment);for(let u=1;u<=a.value.loanMonth-r;u++){if(s.length>0&&u>1&&_(s[0].repaymentDate).isBetween(a.value.firstRepaymentDate.clone().add(u-2,"M").subtract(1,"days"),a.value.firstRepaymentDate.clone().add(u-1,"M"),"[)")){const d=s.shift();e.loanAmount-=Number(d.repaymentAmount),e.lendingRates=Number(d.lendingRates||0),e.loanMonth-=Number(d.adjustLoanMonth||0),r+=Number(d.adjustLoanMonth||0),l.push({repaymentDate:_(d.repaymentDate).format(E),principalRepayment:d.repaymentAmount,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}const f=Number((e.loanAmount/e.loanMonth).toFixed(2));let y=Number((e.loanAmount*e.lendingRates/100/12).toFixed(2));m+=e.loanAmount*e.lendingRates/100/12-y;const V=Number((f+y).toFixed(2));e.loanAmount-=f,e.loanMonth--,e.loanMonth===0&&(y=Number((y+m).toFixed(2))),l.push({key:u,times:u,repaymentDate:a.value.firstRepaymentDate.clone().add(u-1,"M").format(E),monthlyAmount:V,interestRepayment:y,principalRepayment:f,remainingPrincipal:Number(e.loanAmount.toFixed(2))})}}return l}else return[]}),N=R(()=>{let l=0;if(a.value)for(const e of h.value)l+=e.interestRepayment||0;return Number(l.toFixed(2))}),c=R(()=>{let l=0;if(a.value)for(const e of M.value)l+=e.interestRepayment||0;return Number(l.toFixed(2))}),D=R(()=>{let l=0;if(a.value)for(const e of t.prepayment)l+=Number(e.repaymentAmount||0);return l.toFixed(2)}),A=R(()=>{let l=0;if(a.value)for(const e of t.prepayment)l+=Number(e.adjustLoanMonth||0);return l.toFixed(2)}),g=R(()=>(N.value-c.value).toFixed(2));H(()=>t.repaymentPeriod,l=>{l!==0?t.loanMonth=l*12:t.loanMonth=120});function k(){let l,e;t.prepayment.length===0?(l=t.firstRepaymentDate?t.firstRepaymentDate:new Date,e=t.lendingRates||0):(l=t.prepayment[t.prepayment.length-1].repaymentDate||new Date,e=t.prepayment[t.prepayment.length-1].lendingRates||0),t.prepayment.push({repaymentDate:l,repaymentAmount:0,adjustLoanMonth:0,lendingRates:e})}function L(){t.prepayment.pop()}return(l,e)=>{const r=ye,m=re,s=de,u=fe,f=ee,y=se,V=pe,d=te,O=ie,q=ue,F=oe,z=me;return w(),j("div",he,[Re,I("div",_e,[I("div",Ae,[n(q,{"label-width":120,"label-align":"left"},{default:i(()=>[n(m,{label:"贷款金额"},{default:i(()=>[n(r,{modelValue:p(t).loanAmount,"onUpdate:modelValue":e[0]||(e[0]=o=>p(t).loanAmount=o),"addon-after":"元","controls-position":"right"},null,8,["modelValue"])]),_:1}),n(m,{label:"贷款期限"},{default:i(()=>[n(u,{modelValue:p(t).repaymentPeriod,"onUpdate:modelValue":e[1]||(e[1]=o=>p(t).repaymentPeriod=o),type:"number"},{default:i(()=>[n(s,{value:0,label:"自定义贷款期限"}),(w(),j(P,null,S(30,(o,B)=>n(s,{key:`repaymentPeriod${B}`,value:o,label:`${o}年(${o*12}月)`},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),n(m,{label:"贷款月数"},{default:i(()=>[n(f,{modelValue:p(t).loanMonth,"onUpdate:modelValue":e[2]||(e[2]=o=>p(t).loanMonth=o),modelModifiers:{number:!0},"addon-after":"月",disabled:p(t).repaymentPeriod!==0},null,8,["modelValue","disabled"])]),_:1}),n(m,{label:"贷款利率"},{default:i(()=>[n(f,{modelValue:p(t).lendingRates,"onUpdate:modelValue":e[3]||(e[3]=o=>p(t).lendingRates=o),"addon-after":"%"},null,8,["modelValue"])]),_:1}),n(m,{label:"还款方式"},{default:i(()=>[n(u,{modelValue:p(t).repayment,"onUpdate:modelValue":e[4]||(e[4]=o=>p(t).repayment=o)},{default:i(()=>[n(s,{value:"equalLoan",label:"等额本息"}),n(s,{value:"equalPrincipal",label:"等额本金"})]),_:1},8,["modelValue"])]),_:1}),n(m,{label:"首次还款"},{default:i(()=>[n(y,{modelValue:p(t).firstRepaymentDate,"onUpdate:modelValue":e[5]||(e[5]=o=>p(t).firstRepaymentDate=o),type:"date"},null,8,["modelValue"])]),_:1}),n(V),n(m,null,{default:i(()=>[n(O,null,{default:i(()=>[n(d,{type:"primary",disabled:!p(t).firstRepaymentDate,onClick:k},{default:i(()=>[C(" 添加提前还款 ")]),_:1},8,["disabled"]),p(t).prepayment.length>0?(w(),Q(d,{key:0,onClick:L},{default:i(()=>[C(" 移除 ")]),_:1})):W("",!0)]),_:1})]),_:1}),(w(!0),j(P,null,S(p(t).prepayment,(o,B)=>(w(),j(P,{key:B},[n(V,{orientation:"left"},{default:i(()=>[C(" 第"+Z(B+1)+"次提前还款 ",1)]),_:2},1024),n(m,{label:"还款日期"},{default:i(()=>[n(y,{modelValue:o.repaymentDate,"onUpdate:modelValue":x=>o.repaymentDate=x,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n(m,{label:"提前还款金额"},{default:i(()=>[n(r,{modelValue:o.repaymentAmount,"onUpdate:modelValue":x=>o.repaymentAmount=x},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n(m,{label:"调整期数"},{default:i(()=>[n(r,{modelValue:o.adjustLoanMonth,"onUpdate:modelValue":x=>o.adjustLoanMonth=x},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n(m,{label:"调整利率"},{default:i(()=>[n(f,{modelValue:o.lendingRates,"onUpdate:modelValue":x=>o.lendingRates=x,"addon-after":"%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)],64))),128))]),_:1})]),I("div",ge,[n(q,{"label-width":120,"label-align":"left"},{default:i(()=>[n(m,{label:"累计提前还款"},{default:i(()=>[n(f,{modelValue:p(D),"onUpdate:modelValue":e[6]||(e[6]=o=>U(D)?D.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(m,{label:"累计调整期数"},{default:i(()=>[n(f,{modelValue:p(A),"onUpdate:modelValue":e[7]||(e[7]=o=>U(A)?A.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(m,{label:"原累计利息"},{default:i(()=>[n(f,{modelValue:p(N),"onUpdate:modelValue":e[8]||(e[8]=o=>U(N)?N.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(m,{label:"累计缴息"},{default:i(()=>[n(f,{modelValue:p(c),"onUpdate:modelValue":e[9]||(e[9]=o=>U(c)?c.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1}),n(m,{label:"累计节省利息"},{default:i(()=>[n(f,{modelValue:p(g),"onUpdate:modelValue":e[10]||(e[10]=o=>U(g)?g.value=o:null),"addon-after":"元",readonly:""},null,8,["modelValue"])]),_:1})]),_:1}),n(z,{"flex-1":"",data:p(M)},{default:i(()=>[n(F,{prop:"times",label:"期次"}),n(F,{prop:"repaymentDate",label:"还款日期"}),n(F,{prop:"monthlyAmount",label:"每月还款"}),n(F,{prop:"interestRepayment",label:"偿还利息"}),n(F,{prop:"principalRepayment",label:"偿还本金"}),n(F,{prop:"remainingPrincipal",label:"剩余本金"})]),_:1},8,["data"])])])])}}}),Ke=le(Me,[["__scopeId","data-v-681d6937"]]);export{Ke as default};
