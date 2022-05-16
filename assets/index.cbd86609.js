import{d as w,aj as T,K as F,H as U,e as B,O as R,Z as H,g as z,h as k,a as m,Y as V,P as O,S as J,I as K,J as Y,aw as Z}from"./index.93620b04.js";import{V as q}from"./Checkbox.fce75e26.js";var D=globalThis&&globalThis.__rest||function(n,e){var u={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(u[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(n);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(n,a[o])&&(u[a[o]]=n[a[o]]);return u},A=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:O.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}},d=w({name:"ARadio",props:A(),setup:function(e,u){var a=u.emit,o=u.expose,h=u.slots,s=T(),c=F(),r=U("radioGroupContext",void 0),y=B("radio",e),l=y.prefixCls,x=y.direction,G=function(){c.value.focus()},f=function(){c.value.blur()};o({focus:G,blur:f});var g=function(i){var C=i.target.checked;a("update:checked",C),a("update:value",C),a("change",i),s.onFieldChange()},b=function(i){a("change",i),r&&r.onRadioChange&&r.onRadioChange(i)};return function(){var t,i=r;e.prefixCls;var C=e.id,P=C===void 0?s.id.value:C,_=D(e,["prefixCls","id"]),v=R({prefixCls:l.value,id:P},H(_,["onUpdate:checked","onUpdate:value"]));i?(v.name=i.props.name,v.onChange=b,v.checked=e.value===i.stateValue.value,v.disabled=e.disabled||i.props.disabled):v.onChange=g;var S=z((t={},k(t,"".concat(l.value,"-wrapper"),!0),k(t,"".concat(l.value,"-wrapper-checked"),v.checked),k(t,"".concat(l.value,"-wrapper-disabled"),v.disabled),k(t,"".concat(l.value,"-wrapper-rtl"),x.value==="rtl"),t));return m("label",{class:S},[m(q,V(V({},v),{},{type:"radio",ref:c}),null),h.default&&m("span",null,[h.default()])])}}}),L=Y("large","default","small"),M=function(){return{prefixCls:String,value:O.any,size:O.oneOf(L).def("default"),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}},Q=w({name:"ARadioGroup",props:M(),setup:function(e,u){var a=u.slots,o=u.emit,h=T(),s=B("radio",e),c=s.prefixCls,r=s.direction,y=s.size,l=F(e.value),x=F(!1);J(function(){return e.value},function(f){l.value=f,x.value=!1});var G=function(g){var b=l.value,t=g.target.value;"value"in e||(l.value=t),!x.value&&t!==b&&(x.value=!0,o("update:value",t),o("change",g),h.onFieldChange()),Z(function(){x.value=!1})};return K("radioGroupContext",{onRadioChange:G,stateValue:l,props:e}),function(){var f,g,b=e.options,t=e.optionType,i=e.buttonStyle,C=e.id,P=C===void 0?h.id.value:C,_="".concat(c.value,"-group"),v=z(_,"".concat(_,"-").concat(i),(f={},k(f,"".concat(_,"-").concat(y.value),y.value),k(f,"".concat(_,"-rtl"),r.value==="rtl"),f)),S=null;if(b&&b.length>0){var I=t==="button"?"".concat(c.value,"-button"):c.value;S=b.map(function(p){if(typeof p=="string"||typeof p=="number")return m(d,{key:p,prefixCls:I,disabled:e.disabled,value:p,checked:l.value===p},{default:function(){return[p]}});var j=p.value,N=p.disabled,$=p.label;return m(d,{key:"radio-group-value-options-".concat(j),prefixCls:I,disabled:N||e.disabled,value:j,checked:l.value===j},{default:function(){return[$]}})})}else S=(g=a.default)===null||g===void 0?void 0:g.call(a);return m("div",{class:v,id:P},[S])}}}),W=w({name:"ARadioButton",props:A(),setup:function(e,u){var a=u.slots,o=B("radio-button",e),h=o.prefixCls,s=U("radioGroupContext",void 0);return function(){var c,r=R(R({},e),{prefixCls:h.value});return s&&(r.onChange=s.onRadioChange,r.checked=r.value===s.stateValue.value,r.disabled=r.disabled||s.props.disabled),m(d,r,{default:function(){return[(c=a.default)===null||c===void 0?void 0:c.call(a)]}})}}});d.Group=Q;d.Button=W;d.install=function(n){return n.component(d.name,d),n.component(d.Group.name,d.Group),n.component(d.Button.name,d.Button),n};export{d as R,W as _,Q as a};
