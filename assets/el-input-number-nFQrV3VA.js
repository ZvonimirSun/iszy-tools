import{C as oe,cG as ie,D as p,cX as j,cY as F,$ as y,bF as h,F as Q,ba as ce,H as de,t as me,aE as pe,cL as be,m as V,br as E,bq as fe,cq as ve,w as Ne,o as Ve,aF as he,J as b,K as T,P as Y,u as t,L as z,bJ as _,X as K,a1 as q,bR as ye,a0 as S,cZ as Ie,b4 as H,a3 as J,cE as ge,bE as we,ay as M,az as Ee,_ as _e,bw as Se,b7 as Fe,cz as X,a7 as Pe}from"./index-VsbXgykr.js";import{v as Z}from"./index-Ihs5xIxC.js";const Ae=oe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ie,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Ce={[j]:(l,P)=>P!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[F]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},ke=["aria-label","onKeydown"],xe=["aria-label","onKeydown"],Be=Q({name:"ElInputNumber"}),De=Q({...Be,props:Ae,emits:Ce,setup(l,{expose:P,emit:c}){const r=l,{t:O}=ce(),d=de("input-number"),v=me(),u=pe({currentValue:r.modelValue,userInput:null}),{formItem:f}=be(),L=V(()=>p(r.modelValue)&&r.modelValue<=r.min),U=V(()=>p(r.modelValue)&&r.modelValue>=r.max),ee=V(()=>{const e=G(r.step);return E(r.precision)?Math.max(G(r.modelValue),e):(e>r.precision,r.precision)}),A=V(()=>r.controls&&r.controlsPosition==="right"),$=fe(),N=ve(),C=V(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),k=(e,n)=>{if(E(n)&&(n=ee.value),n===0)return Math.round(e);let a=String(e);const s=a.indexOf(".");if(s===-1||!a.replace(".","").split("")[s+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},G=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let s=0;return a!==-1&&(s=n.length-a-1),s},R=(e,n=1)=>p(e)?k(e+r.step*n):u.currentValue,x=()=>{if(r.readonly||N.value||U.value)return;const e=Number(C.value)||0,n=R(e);I(n),c(F,u.currentValue),D()},B=()=>{if(r.readonly||N.value||L.value)return;const e=Number(C.value)||0,n=R(e,-1);I(n),c(F,u.currentValue),D()},W=(e,n)=>{const{max:a,min:s,step:o,precision:m,stepStrictly:g,valueOnClear:w}=r;a<s&&Se("InputNumber","min should not be greater than max.");let i=Number(e);if(y(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=Fe(w)?{min:s,max:a}[w]:w}return g&&(i=k(Math.round(i/o)*o,m)),E(m)||(i=k(i,m)),(i>a||i<s)&&(i=i>a?a:s,n&&c(h,i)),i},I=(e,n=!0)=>{var a;const s=u.currentValue,o=W(e);if(!n){c(h,o);return}s!==o&&(u.userInput=null,c(h,o),c(j,o,s),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(m=>X())),u.currentValue=o)},ne=e=>{u.userInput=e;const n=e===""?null:Number(e);c(F,n),I(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&I(n),D(),u.userInput=null},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},le=e=>{c("focus",e)},ue=e=>{var n;u.userInput=null,c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>X()))},D=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},se=e=>{document.activeElement===e.target&&e.preventDefault()};return Ne(()=>r.modelValue,(e,n)=>{const a=W(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),Ve(()=>{var e;const{min:n,max:a,modelValue:s}=r,o=(e=v.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(a)?o.setAttribute("aria-valuemax",String(a)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(N.value)),!p(s)&&s!=null){let m=Number(s);Number.isNaN(m)&&(m=null),c(h,m)}}),he(()=>{var e,n;const a=(e=v.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),P({focus:ae,blur:re}),(e,n)=>(b(),T("div",{class:z([t(d).b(),t(d).m(t($)),t(d).is("disabled",t(N)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(A))]),onDragstart:n[0]||(n[0]=M(()=>{},["prevent"]))},[e.controls?Y((b(),T("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:z([t(d).e("decrease"),t(d).is("disabled",t(L))]),onKeydown:_(B,["enter"])},[K(t(H),null,{default:q(()=>[t(A)?(b(),S(t(ye),{key:0})):(b(),S(t(Ie),{key:1}))]),_:1})],42,ke)),[[t(Z),B]]):J("v-if",!0),e.controls?Y((b(),T("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:z([t(d).e("increase"),t(d).is("disabled",t(U))]),onKeydown:_(x,["enter"])},[K(t(H),null,{default:q(()=>[t(A)?(b(),S(t(ge),{key:0})):(b(),S(t(we),{key:1}))]),_:1})],42,xe)),[[t(Z),x]]):J("v-if",!0),K(t(Ee),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t($),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:se,onKeydown:[_(M(x,["prevent"]),["up"]),_(M(B,["prevent"]),["down"])],onBlur:ue,onFocus:le,onInput:ne,onChange:te},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Te=_e(De,[["__file","input-number.vue"]]);const Me=Pe(Te);export{Me as E};
