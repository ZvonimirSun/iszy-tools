import{g as E,ax as C,ao as B,aq as $,ar as h,bC as z,az as x,y as S,a4 as O,k as v,aI as W,bo as X,h as y,j as k,o as I,l as G,m as g,T as w,cF as N,n as e,z as F,p as b,r as V,b as D,t as P,aK as T,v as _,$ as K,a1 as J,bF as Q,aC as Y,aH as Z,R as ee,am as ae,X as oe,aE as le,D as se,aD as ne,x as te,av as A}from"./index.js";const M=E({size:C,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),re=E({...M,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),L={[B]:s=>$(s)||h(s)||z(s),[x]:s=>$(s)||h(s)||z(s)},U=Symbol("radioGroupKey"),j=(s,m)=>{const n=S(),o=O(U,void 0),d=v(()=>!!o),c=v({get(){return d.value?o.modelValue:s.modelValue},set(i){d.value?o.changeEvent(i):m&&m(B,i),n.value.checked=s.modelValue===s.label}}),r=W(v(()=>o==null?void 0:o.size)),u=X(v(()=>o==null?void 0:o.disabled)),l=S(!1),p=v(()=>u.value||d.value&&c.value!==s.label?-1:0);return{radioRef:n,isGroup:d,radioGroup:o,focus:l,size:r,disabled:u,tabIndex:p,modelValue:c}},ie=["value","name","disabled"],de=y({name:"ElRadio"}),ue=y({...de,props:re,emits:L,setup(s,{emit:m}){const n=s,o=k("radio"),{radioRef:d,radioGroup:c,focus:r,size:u,disabled:l,modelValue:p}=j(n,m);function i(){K(()=>m("change",p.value))}return(a,t)=>{var f;return I(),G("label",{class:b([e(o).b(),e(o).is("disabled",e(l)),e(o).is("focus",e(r)),e(o).is("bordered",a.border),e(o).is("checked",e(p)===a.label),e(o).m(e(u))])},[g("span",{class:b([e(o).e("input"),e(o).is("disabled",e(l)),e(o).is("checked",e(p)===a.label)])},[w(g("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":t[0]||(t[0]=R=>F(p)?p.value=R:null),class:b(e(o).e("original")),value:a.label,name:a.name||((f=e(c))==null?void 0:f.name),disabled:e(l),type:"radio",onFocus:t[1]||(t[1]=R=>r.value=!0),onBlur:t[2]||(t[2]=R=>r.value=!1),onChange:i},null,42,ie),[[N,e(p)]]),g("span",{class:b(e(o).e("inner"))},null,2)],2),g("span",{class:b(e(o).e("label")),onKeydown:t[3]||(t[3]=T(()=>{},["stop"]))},[V(a.$slots,"default",{},()=>[D(P(a.label),1)])],34)],2)}}});var pe=_(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const me=E({...M,name:{type:String,default:""}}),ce=["value","name","disabled"],be=y({name:"ElRadioButton"}),fe=y({...be,props:me,setup(s){const m=s,n=k("radio"),{radioRef:o,focus:d,size:c,disabled:r,modelValue:u,radioGroup:l}=j(m),p=v(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(i,a)=>{var t;return I(),G("label",{class:b([e(n).b("button"),e(n).is("active",e(u)===i.label),e(n).is("disabled",e(r)),e(n).is("focus",e(d)),e(n).bm("button",e(c))])},[w(g("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=f=>F(u)?u.value=f:null),class:b(e(n).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((t=e(l))==null?void 0:t.name),disabled:e(r),onFocus:a[1]||(a[1]=f=>d.value=!0),onBlur:a[2]||(a[2]=f=>d.value=!1)},null,42,ce),[[N,e(u)]]),g("span",{class:b(e(n).be("button","inner")),style:J(e(u)===i.label?e(p):{}),onKeydown:a[3]||(a[3]=T(()=>{},["stop"]))},[V(i.$slots,"default",{},()=>[D(P(i.label),1)])],38)],2)}}});var q=_(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ve=E({id:{type:String,default:void 0},size:C,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=L,ye=["id","aria-label","aria-labelledby"],Ee=y({name:"ElRadioGroup"}),Re=y({...Ee,props:ve,emits:ge,setup(s,{emit:m}){const n=s,o=k("radio"),d=Q(),c=S(),{formItem:r}=Y(),{inputId:u,isLabeledByFormItem:l}=Z(n,{formItemContext:r}),p=a=>{m(B,a),K(()=>m("change",a))};ee(()=>{const a=c.value.querySelectorAll("[type=radio]"),t=a[0];!Array.from(a).some(f=>f.checked)&&t&&(t.tabIndex=0)});const i=v(()=>n.name||d.value);return ae(U,oe({...le(n),changeEvent:p,name:i})),se(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(a=>ne()))}),(a,t)=>(I(),G("div",{id:e(u),ref_key:"radioGroupRef",ref:c,class:b(e(o).b("group")),role:"radiogroup","aria-label":e(l)?void 0:a.label||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[V(a.$slots,"default")],10,ye))}});var H=_(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Be=te(pe,{RadioButton:q,RadioGroup:H}),ke=A(H),Ie=A(q);export{Be as E,ke as a,Ie as b};
