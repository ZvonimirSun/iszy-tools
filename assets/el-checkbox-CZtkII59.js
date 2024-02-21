import{bQ as de,bR as be,bS as ve,bT as ce,bU as me,bP as Q,aU as w,a9 as K,aV as M,bq as N,R as I,s as g,aE as z,b2 as fe,bV as R,$ as j,bd as X,a0 as Y,a7 as H,n as D,a$ as E,Q as ke,aw as A,aD as W,b0 as pe,bW as J,G as L,aW as Z,K as T,o as x,I as _,w as ee,v as o,a4 as C,x as V,y as $,j as y,bX as F,B as G,k as q,L as U,F as ge,D as ae,A as le,a5 as P,a3 as ne,O,a6 as he,aB as Ce,aG as xe,V as ye,br as Se,aF as Le,aY as te}from"./index-o_3zfK9D.js";import{i as Be}from"./isEqual-ZXEvp1IW.js";import{h as Ee}from"./hasIn-5_bzPVsS.js";import{f as Ie}from"./index-7eWOsffA.js";function Ve(e){return de(be(e,void 0,Ie),e+"")}function $e(e,i,u){for(var a=-1,k=i.length,v={};++a<k;){var d=i[a],n=ve(e,d);u(n,d)&&ce(v,me(d,e),n)}return v}function Fe(e,i){return $e(e,i,function(u,a){return Ee(e,a)})}var Ge=Ve(function(e,i){return e==null?{}:Fe(e,i)});const oe={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Q,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},se={[w]:e=>K(e)||M(e)||N(e),change:e=>K(e)||M(e)||N(e)},B=Symbol("checkboxGroupContextKey"),we=({model:e,isChecked:i})=>{const u=I(B,void 0),a=g(()=>{var v,d;const n=(v=u==null?void 0:u.max)==null?void 0:v.value,c=(d=u==null?void 0:u.min)==null?void 0:d.value;return!z(n)&&e.value.length>=n&&!i.value||!z(c)&&e.value.length<=c&&i.value});return{isDisabled:fe(g(()=>(u==null?void 0:u.disabled.value)||a.value)),isLimitDisabled:a}},Ne=(e,{model:i,isLimitExceeded:u,hasOwnLabel:a,isDisabled:k,isLabeledByFormItem:v})=>{const d=I(B,void 0),{formItem:n}=R(),{emit:c}=H();function l(t){var b,f;return t===e.trueLabel||t===!0?(b=e.trueLabel)!=null?b:!0:(f=e.falseLabel)!=null?f:!1}function m(t,b){c("change",l(t),b)}function p(t){if(u.value)return;const b=t.target;c("change",l(b.checked),t)}async function S(t){u.value||!a.value&&!k.value&&v.value&&(t.composedPath().some(r=>r.tagName==="LABEL")||(i.value=l([!1,e.falseLabel].includes(i.value)),await Y(),m(i.value,t)))}const s=g(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return j(()=>e.modelValue,()=>{s.value&&(n==null||n.validate("change").catch(t=>X()))}),{handleChange:p,onClickRoot:S}},ze=e=>{const i=D(!1),{emit:u}=H(),a=I(B,void 0),k=g(()=>z(a)===!1),v=D(!1),d=g({get(){var n,c;return k.value?(n=a==null?void 0:a.modelValue)==null?void 0:n.value:(c=e.modelValue)!=null?c:i.value},set(n){var c,l;k.value&&E(n)?(v.value=((c=a==null?void 0:a.max)==null?void 0:c.value)!==void 0&&n.length>(a==null?void 0:a.max.value)&&n.length>d.value.length,v.value===!1&&((l=a==null?void 0:a.changeEvent)==null||l.call(a,n))):(u(w,n),i.value=n)}});return{model:d,isGroup:k,isLimitExceeded:v}},De=(e,i,{model:u})=>{const a=I(B,void 0),k=D(!1),v=g(()=>{const l=u.value;return N(l)?l:E(l)?ke(e.label)?l.map(A).some(m=>Be(m,e.label)):l.map(A).includes(e.label):l!=null?l===e.trueLabel:!!l}),d=W(g(()=>{var l;return(l=a==null?void 0:a.size)==null?void 0:l.value}),{prop:!0}),n=W(g(()=>{var l;return(l=a==null?void 0:a.size)==null?void 0:l.value})),c=g(()=>!!i.default||!pe(e.label));return{checkboxButtonSize:d,isChecked:v,isFocused:k,checkboxSize:n,hasOwnLabel:c}},Pe=(e,{model:i})=>{function u(){E(i.value)&&!i.value.includes(e.label)?i.value.push(e.label):i.value=e.trueLabel||!0}e.checked&&u()},ie=(e,i)=>{const{formItem:u}=R(),{model:a,isGroup:k,isLimitExceeded:v}=ze(e),{isFocused:d,isChecked:n,checkboxButtonSize:c,checkboxSize:l,hasOwnLabel:m}=De(e,i,{model:a}),{isDisabled:p}=we({model:a,isChecked:n}),{inputId:S,isLabeledByFormItem:s}=J(e,{formItemContext:u,disableIdGeneration:m,disableIdManagement:k}),{handleChange:t,onClickRoot:b}=Ne(e,{model:a,isLimitExceeded:v,hasOwnLabel:m,isDisabled:p,isLabeledByFormItem:s});return Pe(e,{model:a}),{inputId:S,isLabeledByFormItem:s,isChecked:n,isDisabled:p,isFocused:d,checkboxButtonSize:c,checkboxSize:l,hasOwnLabel:m,model:a,handleChange:t,onClickRoot:b}},Re=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Te=["id","indeterminate","disabled","value","name","tabindex"],Ue=L({name:"ElCheckbox"}),Oe=L({...Ue,props:oe,emits:se,setup(e){const i=e,u=Z(),{inputId:a,isLabeledByFormItem:k,isChecked:v,isDisabled:d,isFocused:n,checkboxSize:c,hasOwnLabel:l,model:m,handleChange:p,onClickRoot:S}=ie(i,u),s=T("checkbox"),t=g(()=>[s.b(),s.m(c.value),s.is("disabled",d.value),s.is("bordered",i.border),s.is("checked",v.value)]),b=g(()=>[s.e("input"),s.is("disabled",d.value),s.is("checked",v.value),s.is("indeterminate",i.indeterminate),s.is("focus",n.value)]);return(f,r)=>(x(),_(ne(!o(l)&&o(k)?"span":"label"),{class:C(o(t)),"aria-controls":f.indeterminate?f.controls:null,onClick:o(S)},{default:ee(()=>[q("span",{class:C(o(b))},[f.trueLabel||f.falseLabel?G((x(),y("input",{key:0,id:o(a),"onUpdate:modelValue":r[0]||(r[0]=h=>V(m)?m.value=h:null),class:C(o(s).e("original")),type:"checkbox",indeterminate:f.indeterminate,name:f.name,tabindex:f.tabindex,disabled:o(d),"true-value":f.trueLabel,"false-value":f.falseLabel,onChange:r[1]||(r[1]=(...h)=>o(p)&&o(p)(...h)),onFocus:r[2]||(r[2]=h=>n.value=!0),onBlur:r[3]||(r[3]=h=>n.value=!1),onClick:r[4]||(r[4]=$(()=>{},["stop"]))},null,42,Re)),[[F,o(m)]]):G((x(),y("input",{key:1,id:o(a),"onUpdate:modelValue":r[5]||(r[5]=h=>V(m)?m.value=h:null),class:C(o(s).e("original")),type:"checkbox",indeterminate:f.indeterminate,disabled:o(d),value:f.label,name:f.name,tabindex:f.tabindex,onChange:r[6]||(r[6]=(...h)=>o(p)&&o(p)(...h)),onFocus:r[7]||(r[7]=h=>n.value=!0),onBlur:r[8]||(r[8]=h=>n.value=!1),onClick:r[9]||(r[9]=$(()=>{},["stop"]))},null,42,Te)),[[F,o(m)]]),q("span",{class:C(o(s).e("inner"))},null,2)],2),o(l)?(x(),y("span",{key:0,class:C(o(s).e("label"))},[U(f.$slots,"default"),f.$slots.default?P("v-if",!0):(x(),y(ge,{key:0},[le(ae(f.label),1)],64))],2)):P("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Ke=O(Oe,[["__file","checkbox.vue"]]);const Me=["name","tabindex","disabled","true-value","false-value"],Ae=["name","tabindex","disabled","value"],We=L({name:"ElCheckboxButton"}),qe=L({...We,props:oe,emits:se,setup(e){const i=e,u=Z(),{isFocused:a,isChecked:k,isDisabled:v,checkboxButtonSize:d,model:n,handleChange:c}=ie(i,u),l=I(B,void 0),m=T("checkbox"),p=g(()=>{var s,t,b,f;const r=(t=(s=l==null?void 0:l.fill)==null?void 0:s.value)!=null?t:"";return{backgroundColor:r,borderColor:r,color:(f=(b=l==null?void 0:l.textColor)==null?void 0:b.value)!=null?f:"",boxShadow:r?`-1px 0 0 0 ${r}`:void 0}}),S=g(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",v.value),m.is("checked",k.value),m.is("focus",a.value)]);return(s,t)=>(x(),y("label",{class:C(o(S))},[s.trueLabel||s.falseLabel?G((x(),y("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=b=>V(n)?n.value=b:null),class:C(o(m).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:o(v),"true-value":s.trueLabel,"false-value":s.falseLabel,onChange:t[1]||(t[1]=(...b)=>o(c)&&o(c)(...b)),onFocus:t[2]||(t[2]=b=>a.value=!0),onBlur:t[3]||(t[3]=b=>a.value=!1),onClick:t[4]||(t[4]=$(()=>{},["stop"]))},null,42,Me)),[[F,o(n)]]):G((x(),y("input",{key:1,"onUpdate:modelValue":t[5]||(t[5]=b=>V(n)?n.value=b:null),class:C(o(m).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:o(v),value:s.label,onChange:t[6]||(t[6]=(...b)=>o(c)&&o(c)(...b)),onFocus:t[7]||(t[7]=b=>a.value=!0),onBlur:t[8]||(t[8]=b=>a.value=!1),onClick:t[9]||(t[9]=$(()=>{},["stop"]))},null,42,Ae)),[[F,o(n)]]),s.$slots.default||s.label?(x(),y("span",{key:2,class:C(o(m).be("button","inner")),style:he(o(k)?o(p):void 0)},[U(s.$slots,"default",{},()=>[le(ae(s.label),1)])],6)):P("v-if",!0)],2))}});var ue=O(qe,[["__file","checkbox-button.vue"]]);const Qe=Ce({modelValue:{type:xe(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Q,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),je={[w]:e=>E(e),change:e=>E(e)},Xe=L({name:"ElCheckboxGroup"}),Ye=L({...Xe,props:Qe,emits:je,setup(e,{emit:i}){const u=e,a=T("checkbox"),{formItem:k}=R(),{inputId:v,isLabeledByFormItem:d}=J(u,{formItemContext:k}),n=async l=>{i(w,l),await Y(),i("change",l)},c=g({get(){return u.modelValue},set(l){n(l)}});return ye(B,{...Ge(Se(u),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:c,changeEvent:n}),j(()=>u.modelValue,()=>{u.validateEvent&&(k==null||k.validate("change").catch(l=>X()))}),(l,m)=>{var p;return x(),_(ne(l.tag),{id:o(v),class:C(o(a).b("group")),role:"group","aria-label":o(d)?void 0:l.label||"checkbox-group","aria-labelledby":o(d)?(p=o(k))==null?void 0:p.labelId:void 0},{default:ee(()=>[U(l.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var re=O(Ye,[["__file","checkbox-group.vue"]]);const ea=Le(Ke,{CheckboxButton:ue,CheckboxGroup:re});te(ue);const aa=te(re);export{ea as E,aa as a};
