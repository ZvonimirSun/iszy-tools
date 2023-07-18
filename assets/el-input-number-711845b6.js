import{g as ue,ax as se,ar as d,az as J,ay as k,bm as y,ao as h,h as Q,aG as oe,j as ie,y as ce,X as de,aC as me,k as V,ap as E,aI as pe,bo as be,D as fe,R as ve,af as Ne,o as b,l as z,T as W,n as t,p as K,a3 as _,a as M,w as Y,c as S,bN as Ve,bO as he,ag as j,s as q,bP as ye,an as Ie,aK as P,B as ge,v as we,aa as Ee,aq as _e,aD as H,x as Se}from"./index-ae2f467a.js";import{v as X}from"./index-d6c96cf3.js";const Pe=ue({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:se,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||d(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),ke={[J]:(l,F)=>F!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[k]:l=>d(l)||y(l),[h]:l=>d(l)||y(l)},Fe=["aria-label","onKeydown"],xe=["aria-label","onKeydown"],Ae=Q({name:"ElInputNumber"}),Ce=Q({...Ae,props:Pe,emits:ke,setup(l,{expose:F,emit:c}){const r=l,{t:O}=oe(),m=ie("input-number"),v=ce(),o=de({currentValue:r.modelValue,userInput:null}),{formItem:f}=me(),U=V(()=>d(r.modelValue)&&r.modelValue<=r.min),G=V(()=>d(r.modelValue)&&r.modelValue>=r.max),Z=V(()=>{const e=$(r.step);return E(r.precision)?Math.max($(r.modelValue),e):(e>r.precision,r.precision)}),x=V(()=>r.controls&&r.controlsPosition==="right"),R=pe(),N=be(),A=V(()=>{if(o.userInput!==null)return o.userInput;let e=o.currentValue;if(y(e))return"";if(d(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),C=(e,n)=>{if(E(n)&&(n=Z.value),n===0)return Math.round(e);let a=String(e);const u=a.indexOf(".");if(u===-1||!a.replace(".","").split("")[u+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},$=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let u=0;return a!==-1&&(u=n.length-a-1),u},L=(e,n=1)=>d(e)?C(e+r.step*n):o.currentValue,B=()=>{if(r.readonly||N.value||G.value)return;const e=Number(A.value)||0,n=L(e);I(n),c(k,o.currentValue)},D=()=>{if(r.readonly||N.value||U.value)return;const e=Number(A.value)||0,n=L(e,-1);I(n),c(k,o.currentValue)},T=(e,n)=>{const{max:a,min:u,step:s,precision:p,stepStrictly:g,valueOnClear:w}=r;a<u&&Ee("InputNumber","min should not be greater than max.");let i=Number(e);if(y(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=_e(w)?{min:u,max:a}[w]:w}return g&&(i=C(Math.round(i/s)*s,p)),E(p)||(i=C(i,p)),(i>a||i<u)&&(i=i>a?a:u,n&&c(h,i)),i},I=(e,n=!0)=>{var a;const u=o.currentValue,s=T(e);if(!n){c(h,s);return}u!==s&&(o.userInput=null,c(h,s),c(J,s,u),r.validateEvent&&((a=f?.validate)==null||a.call(f,"change").catch(p=>H())),o.currentValue=s)},ee=e=>{o.userInput=e;const n=e===""?null:Number(e);c(k,n),I(n,!1)},ne=e=>{const n=e!==""?Number(e):"";(d(n)&&!Number.isNaN(n)||e==="")&&I(n),o.userInput=null},te=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},re=e=>{c("focus",e)},le=e=>{var n;c("blur",e),r.validateEvent&&((n=f?.validate)==null||n.call(f,"blur").catch(a=>H()))};return fe(()=>r.modelValue,e=>{const n=T(o.userInput),a=T(e,!0);!d(n)&&(!n||n!==a)&&(o.currentValue=a,o.userInput=null)},{immediate:!0}),ve(()=>{var e;const{min:n,max:a,modelValue:u}=r,s=(e=v.value)==null?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(a)?s.setAttribute("aria-valuemax",String(a)):s.removeAttribute("aria-valuemax"),Number.isFinite(n)?s.setAttribute("aria-valuemin",String(n)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",String(o.currentValue)),s.setAttribute("aria-disabled",String(N.value)),!d(u)&&u!=null){let p=Number(u);Number.isNaN(p)&&(p=null),c(h,p)}}),Ne(()=>{var e;const n=(e=v.value)==null?void 0:e.input;n?.setAttribute("aria-valuenow",`${o.currentValue}`)}),F({focus:te,blur:ae}),(e,n)=>(b(),z("div",{class:K([t(m).b(),t(m).m(t(R)),t(m).is("disabled",t(N)),t(m).is("without-controls",!e.controls),t(m).is("controls-right",t(x))]),onDragstart:n[1]||(n[1]=P(()=>{},["prevent"]))},[e.controls?W((b(),z("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(m).e("decrease"),t(m).is("disabled",t(U))]),onKeydown:_(D,["enter"])},[M(t(j),null,{default:Y(()=>[t(x)?(b(),S(t(Ve),{key:0})):(b(),S(t(he),{key:1}))]),_:1})],42,Fe)),[[t(X),D]]):q("v-if",!0),e.controls?W((b(),z("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(m).e("increase"),t(m).is("disabled",t(G))]),onKeydown:_(B,["enter"])},[M(t(j),null,{default:Y(()=>[t(x)?(b(),S(t(ye),{key:0})):(b(),S(t(Ie),{key:1}))]),_:1})],42,xe)),[[t(X),B]]):q("v-if",!0),M(t(ge),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(A),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(R),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=P(()=>{},["prevent"])),onKeydown:[_(P(B,["prevent"]),["up"]),_(P(D,["prevent"]),["down"])],onBlur:le,onFocus:re,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Be=we(Ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const ze=Se(Be);export{ze as E};