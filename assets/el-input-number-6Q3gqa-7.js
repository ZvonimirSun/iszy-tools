import{aA as oe,bO as ie,aU as p,cj as Z,ck as A,a$ as y,aT as h,D as Q,ae as ce,J as de,l as me,G as pe,bU as be,q as V,aD as E,aC as fe,b1 as ve,Z as Ne,n as Ve,aa as he,o as b,h as B,A as R,t,a3 as K,b2 as _,s as M,w as Y,bK as ye,H as S,cl as Ie,X as j,a4 as q,bL as ge,aS as we,x as z,y as Ee,N as _e,aK as Se,a8 as Ae,bc as J,aE as Pe}from"./index-6zGE5DCB.js";import{v as X}from"./index-lPu0chFm.js";const Fe=oe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ie,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Ce={[Z]:(l,P)=>P!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[A]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},ke=["aria-label","onKeydown"],xe=["aria-label","onKeydown"],De=Q({name:"ElInputNumber"}),Te=Q({...De,props:Fe,emits:Ce,setup(l,{expose:P,emit:c}){const r=l,{t:O}=ce(),d=de("input-number"),v=me(),u=pe({currentValue:r.modelValue,userInput:null}),{formItem:f}=be(),U=V(()=>p(r.modelValue)&&r.modelValue<=r.min),$=V(()=>p(r.modelValue)&&r.modelValue>=r.max),ee=V(()=>{const e=L(r.step);return E(r.precision)?Math.max(L(r.modelValue),e):(e>r.precision,r.precision)}),F=V(()=>r.controls&&r.controlsPosition==="right"),G=fe(),N=ve(),C=V(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),k=(e,n)=>{if(E(n)&&(n=ee.value),n===0)return Math.round(e);let a=String(e);const s=a.indexOf(".");if(s===-1||!a.replace(".","").split("")[s+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},L=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let s=0;return a!==-1&&(s=n.length-a-1),s},W=(e,n=1)=>p(e)?k(e+r.step*n):u.currentValue,x=()=>{if(r.readonly||N.value||$.value)return;const e=Number(C.value)||0,n=W(e);I(n),c(A,u.currentValue),T()},D=()=>{if(r.readonly||N.value||U.value)return;const e=Number(C.value)||0,n=W(e,-1);I(n),c(A,u.currentValue),T()},H=(e,n)=>{const{max:a,min:s,step:o,precision:m,stepStrictly:g,valueOnClear:w}=r;a<s&&Se("InputNumber","min should not be greater than max.");let i=Number(e);if(y(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=Ae(w)?{min:s,max:a}[w]:w}return g&&(i=k(Math.round(i/o)*o,m)),E(m)||(i=k(i,m)),(i>a||i<s)&&(i=i>a?a:s,n&&c(h,i)),i},I=(e,n=!0)=>{var a;const s=u.currentValue,o=H(e);if(!n){c(h,o);return}s!==o&&(u.userInput=null,c(h,o),c(Z,o,s),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(m=>J())),u.currentValue=o)},ne=e=>{u.userInput=e;const n=e===""?null:Number(e);c(A,n),I(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&I(n),T(),u.userInput=null},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},le=e=>{c("focus",e)},ue=e=>{var n;u.userInput=null,c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>J()))},T=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},se=e=>{document.activeElement===e.target&&e.preventDefault()};return Ne(()=>r.modelValue,(e,n)=>{const a=H(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),Ve(()=>{var e;const{min:n,max:a,modelValue:s}=r,o=(e=v.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(a)?o.setAttribute("aria-valuemax",String(a)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(N.value)),!p(s)&&s!=null){let m=Number(s);Number.isNaN(m)&&(m=null),c(h,m)}}),he(()=>{var e,n;const a=(e=v.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),P({focus:ae,blur:re}),(e,n)=>(b(),B("div",{class:K([t(d).b(),t(d).m(t(G)),t(d).is("disabled",t(N)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(F))]),onDragstart:n[0]||(n[0]=z(()=>{},["prevent"]))},[e.controls?R((b(),B("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(d).e("decrease"),t(d).is("disabled",t(U))]),onKeydown:_(D,["enter"])},[M(t(j),null,{default:Y(()=>[t(F)?(b(),S(t(ye),{key:0})):(b(),S(t(Ie),{key:1}))]),_:1})],42,ke)),[[t(X),D]]):q("v-if",!0),e.controls?R((b(),B("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(d).e("increase"),t(d).is("disabled",t($))]),onKeydown:_(x,["enter"])},[M(t(j),null,{default:Y(()=>[t(F)?(b(),S(t(ge),{key:0})):(b(),S(t(we),{key:1}))]),_:1})],42,xe)),[[t(X),x]]):q("v-if",!0),M(t(Ee),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(G),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:se,onKeydown:[_(z(x,["prevent"]),["up"]),_(z(D,["prevent"]),["down"])],onBlur:ue,onFocus:le,onInput:ne,onChange:te},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Be=_e(Te,[["__file","input-number.vue"]]);const ze=Pe(Be);export{ze as E};