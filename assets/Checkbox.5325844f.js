import{d as I,av as R,r as h,m as z,p as l,g as G,h as m,a as b,y as H,P as J}from"./index.0076ae71.js";var L=globalThis&&globalThis.__rest||function(o,e){var r={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(o);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(r[n[t]]=o[n[t]]);return r},M={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:J.any,required:Boolean};const U=I({name:"Checkbox",inheritAttrs:!1,props:R(M,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,r){var n=r.attrs,t=r.emit,x=r.expose,i=h(e.checked===void 0?e.defaultChecked:e.checked),d=h();z(function(){return e.checked},function(){i.value=e.checked}),x({focus:function(){var a;(a=d.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=d.value)===null||a===void 0||a.blur()}});var s=h(),p=function(a){if(!e.disabled){e.checked===void 0&&(i.value=a.target.checked),a.shiftKey=s.value;var f={target:l(l({},e),{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a};e.checked!==void 0&&(d.value.checked=!!e.checked),t("change",f),s.value=!1}},C=function(a){t("click",a),s.value=a.shiftKey};return function(){var c,a=e.prefixCls,f=e.name,v=e.id,P=e.type,y=e.disabled,K=e.readonly,O=e.tabindex,S=e.autofocus,B=e.value,_=e.required,j=L(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),w=n.class,N=n.onFocus,q=n.onBlur,D=n.onKeydown,A=n.onKeypress,F=n.onKeyup,k=l(l({},j),n),T=Object.keys(k).reduce(function(g,u){return(u.substr(0,5)==="aria-"||u.substr(0,5)==="data-"||u==="role")&&(g[u]=k[u]),g},{}),V=G(a,w,(c={},m(c,"".concat(a,"-checked"),i.value),m(c,"".concat(a,"-disabled"),y),c)),E=l(l({name:f,id:v,type:P,readonly:K,disabled:y,tabindex:O,class:"".concat(a,"-input"),checked:!!i.value,autofocus:S,value:B},T),{onChange:p,onClick:C,onFocus:N,onBlur:q,onKeydown:D,onKeypress:A,onKeyup:F,required:_});return b("span",{class:V},[b("input",H({ref:d},E),null),b("span",{class:"".concat(a,"-inner")},null)])}}});export{U as V};
