import{cG as fe,cH as ke,ca as pe,cI as he,cJ as ge,cF as Y,bD as z,b7 as H,D as J,r as T,I as $,m as p,bq as R,cp as Ce,cK as O,w as Z,cy as _,aN as ee,p as le,t as U,a9 as N,cL as K,R as xe,aS as W,bp as Q,cM as ae,cm as P,F as L,bE as te,H as A,J as y,a0 as ne,a1 as oe,u as n,L as x,aw as F,ay as G,K as S,cN as w,P as D,ap as X,G as j,T as ye,ai as se,ar as ue,a3 as M,aj as ie,_ as q,N as Se,C as Ve,l as Le,E as Be,bK as Ee,a7 as Ie,bG as re}from"./index-KGscBgKV.js";import{ad as Ne,aa as $e}from"./Router-BOUSwADD.js";import{h as Fe}from"./hasIn-tCR7GWyB.js";function Ge(e){return fe(ke(e,void 0,Ne),e+"")}function we(e,r,d){for(var a=-1,m=r.length,c={};++a<m;){var v=r[a],o=pe(e,v);d(o,v)&&he(c,ge(v,e),o)}return c}function De(e,r){return we(e,r,function(d,a){return Fe(e,a)})}var ze=Ge(function(e,r){return e==null?{}:De(e,r)});const de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Y,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ce={[z]:e=>H(e)||J(e)||T(e),change:e=>H(e)||J(e)||T(e)},B=Symbol("checkboxGroupContextKey"),Pe=({model:e,isChecked:r})=>{const d=$(B,void 0),a=p(()=>{var c,v;const o=(c=d==null?void 0:d.max)==null?void 0:c.value,f=(v=d==null?void 0:d.min)==null?void 0:v.value;return!R(o)&&e.value.length>=o&&!r.value||!R(f)&&e.value.length<=f&&r.value});return{isDisabled:Ce(p(()=>(d==null?void 0:d.disabled.value)||a.value)),isLimitDisabled:a}},Te=(e,{model:r,isLimitExceeded:d,hasOwnLabel:a,isDisabled:m,isLabeledByFormItem:c})=>{const v=$(B,void 0),{formItem:o}=O(),{emit:f}=le();function b(l){var u,h,i,t;return[!0,e.trueValue,e.trueLabel].includes(l)?(h=(u=e.trueValue)!=null?u:e.trueLabel)!=null?h:!0:(t=(i=e.falseValue)!=null?i:e.falseLabel)!=null?t:!1}function s(l,u){f("change",b(l),u)}function k(l){if(d.value)return;const u=l.target;f("change",b(u.checked),l)}async function g(l){d.value||!a.value&&!m.value&&c.value&&(l.composedPath().some(i=>i.tagName==="LABEL")||(r.value=b([!1,e.falseValue,e.falseLabel].includes(r.value)),await ee(),s(r.value,l)))}const V=p(()=>(v==null?void 0:v.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{V.value&&(o==null||o.validate("change").catch(l=>_()))}),{handleChange:k,onClickRoot:g}},Re=e=>{const r=U(!1),{emit:d}=le(),a=$(B,void 0),m=p(()=>R(a)===!1),c=U(!1),v=p({get(){var o,f;return m.value?(o=a==null?void 0:a.modelValue)==null?void 0:o.value:(f=e.modelValue)!=null?f:r.value},set(o){var f,b;m.value&&N(o)?(c.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&o.length>(a==null?void 0:a.max.value)&&o.length>v.value.length,c.value===!1&&((b=a==null?void 0:a.changeEvent)==null||b.call(a,o))):(d(z,o),r.value=o)}});return{model:v,isGroup:m,isLimitExceeded:c}},Ue=(e,r,{model:d})=>{const a=$(B,void 0),m=U(!1),c=p(()=>K(e.value)?e.label:e.value),v=p(()=>{const s=d.value;return T(s)?s:N(s)?xe(c.value)?s.map(W).some(k=>$e(k,c.value)):s.map(W).includes(c.value):s!=null?s===e.trueValue||s===e.trueLabel:!!s}),o=Q(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),f=Q(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),b=p(()=>!!r.default||!K(c.value));return{checkboxButtonSize:o,isChecked:v,isFocused:m,checkboxSize:f,hasOwnLabel:b,actualValue:c}},be=(e,r)=>{const{formItem:d}=O(),{model:a,isGroup:m,isLimitExceeded:c}=Re(e),{isFocused:v,isChecked:o,checkboxButtonSize:f,checkboxSize:b,hasOwnLabel:s,actualValue:k}=Ue(e,r,{model:a}),{isDisabled:g}=Pe({model:a,isChecked:o}),{inputId:V,isLabeledByFormItem:l}=ae(e,{formItemContext:d,disableIdGeneration:s,disableIdManagement:m}),{handleChange:u,onClickRoot:h}=Te(e,{model:a,isLimitExceeded:c,hasOwnLabel:s,isDisabled:g,isLabeledByFormItem:l});return(()=>{function t(){var E,I;N(a.value)&&!a.value.includes(k.value)?a.value.push(k.value):a.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&t()})(),P({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>m.value&&K(e.value))),P({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>!!e.trueLabel)),P({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},p(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:l,isChecked:o,isDisabled:g,isFocused:v,checkboxButtonSize:f,checkboxSize:b,hasOwnLabel:s,model:a,actualValue:k,handleChange:u,onClickRoot:h}},Ke=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Me=["id","indeterminate","disabled","value","name","tabindex"],Oe=L({name:"ElCheckbox"}),Ae=L({...Oe,props:de,emits:ce,setup(e){const r=e,d=te(),{inputId:a,isLabeledByFormItem:m,isChecked:c,isDisabled:v,isFocused:o,checkboxSize:f,hasOwnLabel:b,model:s,actualValue:k,handleChange:g,onClickRoot:V}=be(r,d),l=A("checkbox"),u=p(()=>[l.b(),l.m(f.value),l.is("disabled",v.value),l.is("bordered",r.border),l.is("checked",c.value)]),h=p(()=>[l.e("input"),l.is("disabled",v.value),l.is("checked",c.value),l.is("indeterminate",r.indeterminate),l.is("focus",o.value)]);return(i,t)=>(y(),ne(ie(!n(b)&&n(m)?"span":"label"),{class:x(n(u)),"aria-controls":i.indeterminate?i.controls:null,onClick:n(V)},{default:oe(()=>{var E,I;return[X("span",{class:x(n(h))},[i.trueValue||i.falseValue||i.trueLabel||i.falseLabel?D((y(),S("input",{key:0,id:n(a),"onUpdate:modelValue":t[0]||(t[0]=C=>F(s)?s.value=C:null),class:x(n(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,name:i.name,tabindex:i.tabindex,disabled:n(v),"true-value":(E=i.trueValue)!=null?E:i.trueLabel,"false-value":(I=i.falseValue)!=null?I:i.falseLabel,onChange:t[1]||(t[1]=(...C)=>n(g)&&n(g)(...C)),onFocus:t[2]||(t[2]=C=>o.value=!0),onBlur:t[3]||(t[3]=C=>o.value=!1),onClick:t[4]||(t[4]=G(()=>{},["stop"]))},null,42,Ke)),[[w,n(s)]]):D((y(),S("input",{key:1,id:n(a),"onUpdate:modelValue":t[5]||(t[5]=C=>F(s)?s.value=C:null),class:x(n(l).e("original")),type:"checkbox",indeterminate:i.indeterminate,disabled:n(v),value:n(k),name:i.name,tabindex:i.tabindex,onChange:t[6]||(t[6]=(...C)=>n(g)&&n(g)(...C)),onFocus:t[7]||(t[7]=C=>o.value=!0),onBlur:t[8]||(t[8]=C=>o.value=!1),onClick:t[9]||(t[9]=G(()=>{},["stop"]))},null,42,Me)),[[w,n(s)]]),X("span",{class:x(n(l).e("inner"))},null,2)],2),n(b)?(y(),S("span",{key:0,class:x(n(l).e("label"))},[j(i.$slots,"default"),i.$slots.default?M("v-if",!0):(y(),S(ye,{key:0},[ue(se(i.label),1)],64))],2)):M("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var je=q(Ae,[["__file","checkbox.vue"]]);const qe=["name","tabindex","disabled","true-value","false-value"],He=["name","tabindex","disabled","value"],Je=L({name:"ElCheckboxButton"}),We=L({...Je,props:de,emits:ce,setup(e){const r=e,d=te(),{isFocused:a,isChecked:m,isDisabled:c,checkboxButtonSize:v,model:o,actualValue:f,handleChange:b}=be(r,d),s=$(B,void 0),k=A("checkbox"),g=p(()=>{var l,u,h,i;const t=(u=(l=s==null?void 0:s.fill)==null?void 0:l.value)!=null?u:"";return{backgroundColor:t,borderColor:t,color:(i=(h=s==null?void 0:s.textColor)==null?void 0:h.value)!=null?i:"",boxShadow:t?`-1px 0 0 0 ${t}`:void 0}}),V=p(()=>[k.b("button"),k.bm("button",v.value),k.is("disabled",c.value),k.is("checked",m.value),k.is("focus",a.value)]);return(l,u)=>{var h,i;return y(),S("label",{class:x(n(V))},[l.trueValue||l.falseValue||l.trueLabel||l.falseLabel?D((y(),S("input",{key:0,"onUpdate:modelValue":u[0]||(u[0]=t=>F(o)?o.value=t:null),class:x(n(k).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:n(c),"true-value":(h=l.trueValue)!=null?h:l.trueLabel,"false-value":(i=l.falseValue)!=null?i:l.falseLabel,onChange:u[1]||(u[1]=(...t)=>n(b)&&n(b)(...t)),onFocus:u[2]||(u[2]=t=>a.value=!0),onBlur:u[3]||(u[3]=t=>a.value=!1),onClick:u[4]||(u[4]=G(()=>{},["stop"]))},null,42,qe)),[[w,n(o)]]):D((y(),S("input",{key:1,"onUpdate:modelValue":u[5]||(u[5]=t=>F(o)?o.value=t:null),class:x(n(k).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:n(c),value:n(f),onChange:u[6]||(u[6]=(...t)=>n(b)&&n(b)(...t)),onFocus:u[7]||(u[7]=t=>a.value=!0),onBlur:u[8]||(u[8]=t=>a.value=!1),onClick:u[9]||(u[9]=G(()=>{},["stop"]))},null,42,He)),[[w,n(o)]]),l.$slots.default||l.label?(y(),S("span",{key:2,class:x(n(k).be("button","inner")),style:Se(n(m)?n(g):void 0)},[j(l.$slots,"default",{},()=>[ue(se(l.label),1)])],6)):M("v-if",!0)],2)}}});var ve=q(We,[["__file","checkbox-button.vue"]]);const Qe=Ve({modelValue:{type:Le(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Y,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Xe={[z]:e=>N(e),change:e=>N(e)},Ye=L({name:"ElCheckboxGroup"}),Ze=L({...Ye,props:Qe,emits:Xe,setup(e,{emit:r}){const d=e,a=A("checkbox"),{formItem:m}=O(),{inputId:c,isLabeledByFormItem:v}=ae(d,{formItemContext:m}),o=async b=>{r(z,b),await ee(),r("change",b)},f=p({get(){return d.modelValue},set(b){o(b)}});return Be(B,{...ze(Ee(d),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:o}),Z(()=>d.modelValue,()=>{d.validateEvent&&(m==null||m.validate("change").catch(b=>_()))}),(b,s)=>{var k;return y(),ne(ie(b.tag),{id:n(c),class:x(n(a).b("group")),role:"group","aria-label":n(v)?void 0:b.label||"checkbox-group","aria-labelledby":n(v)?(k=n(m))==null?void 0:k.labelId:void 0},{default:oe(()=>[j(b.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var me=q(Ze,[["__file","checkbox-group.vue"]]);const al=Ie(je,{CheckboxButton:ve,CheckboxGroup:me});re(ve);const tl=re(me);export{al as E,tl as a};
