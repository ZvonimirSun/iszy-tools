import{c as P,a as E,C as x}from"./index.75f509d0.js";import{aW as K,d as T,aj as H,e as N,K as C,S as j,f as _,I as U,a as G,h as W,a8 as $}from"./index.c31bc572.js";import{D as p,a as k}from"./index.1329273e.js";function q(e,n){var u=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!u){if(Array.isArray(e)||(u=K(e))||n&&e&&typeof e.length=="number"){u&&(e=u);var f=0,s=function(){};return{s,n:function(){return f>=e.length?{done:!0}:{done:!1,value:e[f++]}},e:function(v){throw v},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=!0,m=!1,b;return{s:function(){u=u.call(e)},n:function(){var v=u.next();return y=v.done,v},e:function(v){m=!0,b=v},f:function(){try{!y&&u.return!=null&&u.return()}finally{if(m)throw b}}}}var S=T({name:"ACheckboxGroup",props:P(),setup:function(n,u){var f=u.slots,s=u.emit,y=u.expose,m=H(),b=N("checkbox",n),l=b.prefixCls,v=b.direction,c=C((n.value===void 0?n.defaultValue:n.value)||[]);j(function(){return n.value},function(){c.value=n.value||[]});var g=_(function(){return n.options.map(function(a){return typeof a=="string"||typeof a=="number"?{label:a,value:a}:a})}),I=C(Symbol()),V=C(new Map),M=function(r){V.value.delete(r),I.value=Symbol()},B=function(r,i){V.value.set(r,i),I.value=Symbol()},A=C(new Map);j(I,function(){var a=new Map,r=q(V.value.values()),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;a.set(o,!0)}}catch(d){r.e(d)}finally{r.f()}A.value=a});var D=function(r){var i=c.value.indexOf(r.value),o=$(c.value);i===-1?o.push(r.value):o.splice(i,1),n.value===void 0&&(c.value=o);var d=o.filter(function(t){return A.value.has(t)}).sort(function(t,h){var O=g.value.findIndex(function(w){return w.value===t}),F=g.value.findIndex(function(w){return w.value===h});return O-F});s("update:value",d),s("change",d),m.onFieldChange()};return U(E,{cancelValue:M,registerValue:B,toggleOption:D,mergedValue:c,name:_(function(){return n.name}),disabled:_(function(){return n.disabled})}),y({mergedValue:c}),function(){var a,r=n.id,i=r===void 0?m.id.value:r,o=null,d="".concat(l.value,"-group");return g.value&&g.value.length>0&&(o=g.value.map(function(t){var h;return G(x,{prefixCls:l.value,key:t.value.toString(),disabled:"disabled"in t?t.disabled:n.disabled,indeterminate:t.indeterminate,value:t.value,checked:c.value.indexOf(t.value)!==-1,onChange:t.onChange,class:"".concat(d,"-item")},{default:function(){return[t.label===void 0?(h=f.label)===null||h===void 0?void 0:h.call(f,t):t.label]}})})),G("div",{class:[d,W({},"".concat(d,"-rtl"),v.value==="rtl")],id:i},[o||((a=f.default)===null||a===void 0?void 0:a.call(f))])}}});x.Group=S;x.install=function(e){return e.component(x.name,x),e.component(S.name,S),e};p.Button=k;p.install=function(e){return e.component(p.name,p),e.component(k.name,k),e};