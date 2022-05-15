import{e as I,aj as V,L as F,I as U,f as O,Q as R,$ as J,h as z,i as S,b as m,Z as T,P as B,T as K,J as L,K as Q,ar as Z}from"./index.41cdb11f.js";import{V as q}from"./Checkbox.d7467989.js";var D=globalThis&&globalThis.__rest||function(n,e){var u={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(u[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(n);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(n,a[o])&&(u[a[o]]=n[a[o]]);return u},A=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:B.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}},d=I({name:"ARadio",props:A(),setup:function(e,u){var a=u.emit,o=u.expose,h=u.slots,c=V(),s=F(),r=U("radioGroupContext",void 0),y=O("radio",e),l=y.prefixCls,x=y.direction,G=function(){s.value.focus()},v=function(){s.value.blur()};o({focus:G,blur:v});var g=function(i){var C=i.target.checked;a("update:checked",C),a("update:value",C),a("change",i),c.onFieldChange()},b=function(i){a("change",i),r&&r.onRadioChange&&r.onRadioChange(i)};return function(){var t,i=r;e.prefixCls;var C=e.id,P=C===void 0?c.id.value:C,k=D(e,["prefixCls","id"]),f=R({prefixCls:l.value,id:P},J(k,["onUpdate:checked","onUpdate:value"]));i?(f.name=i.props.name,f.onChange=b,f.checked=e.value===i.stateValue.value,f.disabled=e.disabled||i.props.disabled):f.onChange=g;var _=z((t={},S(t,"".concat(l.value,"-wrapper"),!0),S(t,"".concat(l.value,"-wrapper-checked"),f.checked),S(t,"".concat(l.value,"-wrapper-disabled"),f.disabled),S(t,"".concat(l.value,"-wrapper-rtl"),x.value==="rtl"),t));return m("label",{class:_},[m(q,T(T({},f),{},{type:"radio",ref:s}),null),h.default&&m("span",null,[h.default()])])}}}),H=Q("large","default","small"),M=function(){return{prefixCls:String,value:B.any,size:B.oneOf(H).def("default"),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}},W=I({name:"ARadioGroup",props:M(),setup:function(e,u){var a=u.slots,o=u.emit,h=V(),c=O("radio",e),s=c.prefixCls,r=c.direction,y=c.size,l=F(e.value),x=F(!1);K(function(){return e.value},function(v){l.value=v,x.value=!1});var G=function(g){var b=l.value,t=g.target.value;"value"in e||(l.value=t),!x.value&&t!==b&&(x.value=!0,o("update:value",t),o("change",g),h.onFieldChange()),Z(function(){x.value=!1})};return L("radioGroupContext",{onRadioChange:G,stateValue:l,props:e}),function(){var v,g,b=e.options,t=e.optionType,i=e.buttonStyle,C=e.id,P=C===void 0?h.id.value:C,k="".concat(s.value,"-group"),f=z(k,"".concat(k,"-").concat(i),(v={},S(v,"".concat(k,"-").concat(y.value),y.value),S(v,"".concat(k,"-rtl"),r.value==="rtl"),v)),_=null;if(b&&b.length>0){var w=t==="button"?"".concat(s.value,"-button"):s.value;_=b.map(function(p){if(typeof p=="string"||typeof p=="number")return m(d,{key:p,prefixCls:w,disabled:e.disabled,value:p,checked:l.value===p},{default:function(){return[p]}});var j=p.value,N=p.disabled,$=p.label;return m(d,{key:"radio-group-value-options-".concat(j),prefixCls:w,disabled:N||e.disabled,value:j,checked:l.value===j},{default:function(){return[$]}})})}else _=(g=a.default)===null||g===void 0?void 0:g.call(a);return m("div",{class:f,id:P},[_])}}}),X=I({name:"ARadioButton",props:A(),setup:function(e,u){var a=u.slots,o=O("radio-button",e),h=o.prefixCls,c=U("radioGroupContext",void 0);return function(){var s,r=R(R({},e),{prefixCls:h.value});return c&&(r.onChange=c.onRadioChange,r.checked=r.value===c.stateValue.value,r.disabled=r.disabled||c.props.disabled),m(d,r,{default:function(){return[(s=a.default)===null||s===void 0?void 0:s.call(a)]}})}}});d.Group=W;d.Button=X;d.install=function(n){return n.component(d.name,d),n.component(d.Group.name,d.Group),n.component(d.Button.name,d.Button),n};export{d as R};