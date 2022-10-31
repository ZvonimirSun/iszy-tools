import{f as q,j as Ee,U as ye,ai as Ce,aj as qe,ak as se,al as Se,am as Ae,r as we,Z as te,an as X,ao as ke,ap as Re,m as G,p as N,aq as Te,ar as Ie,a6 as Le,as as de,at as Pe,au as ee,d as We,av as _e,e as Ne,aw as Be,g as xe,h as K,a as ze,y as ce,P as ne,t as fe,a5 as ae,ag as De}from"./index.0076ae71.js";import{v as He,d as je,_ as $e,u as Ue,c as ve,t as re,g as he,a as Xe}from"./FormItem.64437d2d.js";import{a as Ye,b as Ze}from"./_arrayIncludesWith.91d14080.js";var Qe=Symbol("SizeProvider"),Ke=function(e){var t=e?q(function(){return e.size}):Ee(Qe,q(function(){return"default"}));return t};function Oe(r){var e=!1,t=r.length,u=[];return r.length?new Promise(function(n,i){r.forEach(function(d,y){d.catch(function(j){return e=!0,j}).then(function(j){t-=1,u[y]=j,!(t>0)&&(e&&i(u),n(u))})})}):Promise.resolve([])}function me(r){return typeof r=="object"&&r!=null&&r.nodeType===1}function ge(r,e){return(!e||r!=="hidden")&&r!=="visible"&&r!=="clip"}function ie(r,e){if(r.clientHeight<r.scrollHeight||r.clientWidth<r.scrollWidth){var t=getComputedStyle(r,null);return ge(t.overflowY,e)||ge(t.overflowX,e)||function(u){var n=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(u);return!!n&&(n.clientHeight<u.scrollHeight||n.clientWidth<u.scrollWidth)}(r)}return!1}function J(r,e,t,u,n,i,d,y){return i<r&&d>e||i>r&&d<e?0:i<=r&&y<=t||d>=e&&y>=t?i-r-u:d>e&&y<t||i<r&&y>t?d-e+n:0}function pe(r,e){var t=window,u=e.scrollMode,n=e.block,i=e.inline,d=e.boundary,y=e.skipOverflowHiddenElements,j=typeof d=="function"?d:function(U){return U!==d};if(!me(r))throw new TypeError("Invalid target");for(var S=document.scrollingElement||document.documentElement,O=[],F=r;me(F)&&j(F);){if((F=F.parentElement)===S){O.push(F);break}F!=null&&F===document.body&&ie(F)&&!ie(document.documentElement)||F!=null&&ie(F,y)&&O.push(F)}for(var A=t.visualViewport?t.visualViewport.width:innerWidth,M=t.visualViewport?t.visualViewport.height:innerHeight,V=window.scrollX||pageXOffset,R=window.scrollY||pageYOffset,B=r.getBoundingClientRect(),T=B.height,z=B.width,w=B.top,a=B.right,s=B.bottom,m=B.left,c=n==="start"||n==="nearest"?w:n==="end"?s:w+T/2,f=i==="center"?m+z/2:i==="end"?a:m,g=[],I=0;I<O.length;I++){var p=O[I],P=p.getBoundingClientRect(),D=P.height,L=P.width,H=P.top,E=P.right,o=P.bottom,l=P.left;if(u==="if-needed"&&w>=0&&m>=0&&s<=M&&a<=A&&w>=H&&s<=o&&m>=l&&a<=E)return g;var v=getComputedStyle(p),h=parseInt(v.borderLeftWidth,10),b=parseInt(v.borderTopWidth,10),k=parseInt(v.borderRightWidth,10),x=parseInt(v.borderBottomWidth,10),W=0,C=0,$="offsetWidth"in p?p.offsetWidth-p.clientWidth-h-k:0,_="offsetHeight"in p?p.offsetHeight-p.clientHeight-b-x:0;if(S===p)W=n==="start"?c:n==="end"?c-M:n==="nearest"?J(R,R+M,M,b,x,R+c,R+c+T,T):c-M/2,C=i==="start"?f:i==="center"?f-A/2:i==="end"?f-A:J(V,V+A,A,h,k,V+f,V+f+z,z),W=Math.max(0,W+R),C=Math.max(0,C+V);else{W=n==="start"?c-H-b:n==="end"?c-o+x+_:n==="nearest"?J(H,o,D,b,x+_,c,c+T,T):c-(H+D/2)+_/2,C=i==="start"?f-l-h:i==="center"?f-(l+L/2)+$/2:i==="end"?f-E+k+$:J(l,E,L,h,k+$,f,f+z,z);var Y=p.scrollLeft,Z=p.scrollTop;c+=Z-(W=Math.max(0,Math.min(Z+W,p.scrollHeight-D+_))),f+=Y-(C=Math.max(0,Math.min(Y+C,p.scrollWidth-L+$)))}g.push({el:p,top:W,left:C})}return g}function Me(r){return r===Object(r)&&Object.keys(r).length!==0}function Je(r,e){e===void 0&&(e="auto");var t="scrollBehavior"in document.body.style;r.forEach(function(u){var n=u.el,i=u.top,d=u.left;n.scroll&&t?n.scroll({top:i,left:d,behavior:e}):(n.scrollTop=i,n.scrollLeft=d)})}function Ge(r){return r===!1?{block:"end",inline:"nearest"}:Me(r)?r:{block:"start",inline:"nearest"}}function er(r,e){var t=r.isConnected||r.ownerDocument.documentElement.contains(r);if(Me(e)&&typeof e.behavior=="function")return e.behavior(t?pe(r,e):[]);if(!!t){var u=Ge(e);return Je(pe(r,u),u.behavior)}}var rr=Math.min;function tr(r,e,t){for(var u=t?Ye:Ze,n=r[0].length,i=r.length,d=i,y=Array(i),j=1/0,S=[];d--;){var O=r[d];d&&e&&(O=ye(O,Ce(e))),j=rr(O.length,j),y[d]=!t&&(e||n>=120&&O.length>=120)?new qe(d&&O):void 0}O=r[0];var F=-1,A=y[0];e:for(;++F<n&&S.length<j;){var M=O[F],V=e?e(M):M;if(M=t||M!==0?M:0,!(A?se(A,V):u(S,V,t))){for(d=i;--d;){var R=y[d];if(!(R?se(R,V):u(r[d],V,t)))continue e}A&&A.push(V),S.push(M)}}return S}function nr(r){return Se(r)?r:[]}var ar=Ae(function(r){var e=ye(r,nr);return e.length&&e[0]===r[0]?tr(e):[]});const ir=ar;function Fe(r){var e=!1;return r&&r.length&&r.every(function(t){return t.required?(e=!0,!1):!0}),e}function be(r){return r==null?[]:Array.isArray(r)?r:[r]}function le(r,e,t){var u=r;e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,"");for(var n=e.split("."),i=0,d=n.length;i<d-1&&!(!u&&!t);++i){var y=n[i];if(y in u)u=u[y];else{if(t)throw new Error("please transfer a valid name path to validate!");break}}return{o:u,k:n[i],v:u?u[n[i]]:null,isValid:u&&n[i]in u}}function lr(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:we({}),t=arguments.length>2?arguments[2]:void 0,u=te(X(r)),n=ke({}),i=Re([]),d=function(a){N(X(r),N(N({},te(u)),a)),Le(function(){Object.keys(n).forEach(function(s){n[s]={autoLink:!1,required:Fe(X(e)[s])}})})},y=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;return s.length?a.filter(function(m){var c=be(m.trigger||"change");return ir(c,s).length}):a},j=null,S=function(a){for(var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=arguments.length>2?arguments[2]:void 0,c=[],f={},g=function(H){var E=a[H],o=le(X(r),E,m);if(!o.isValid)return"continue";f[E]=o.v;var l=y(X(e)[E],be(s&&s.trigger));l.length&&c.push(O(E,o.v,l,s||{}).then(function(){return{name:E,errors:[],warnings:[]}}).catch(function(v){var h=[],b=[];return v.forEach(function(k){var x=k.rule.warningOnly,W=k.errors;x?b.push.apply(b,ee(W)):h.push.apply(h,ee(W))}),h.length?Promise.reject({name:E,errors:h,warnings:b}):{name:E,errors:h,warnings:b}}))},I=0;I<a.length;I++)var p=g(I);var P=Oe(c);j=P;var D=P.then(function(){return j===P?Promise.resolve(f):Promise.reject([])}).catch(function(L){var H=L.filter(function(E){return E&&E.errors.length});return Promise.reject({values:f,errorFields:H,outOfDate:j!==P})});return D.catch(function(L){return L}),D},O=function(a,s,m){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},f=He([a],s,m,N({validateMessages:je},c),!!c.validateFirst);return n[a]?(n[a].validateStatus="validating",f.catch(function(g){return g}).then(function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],I;if(n[a].validateStatus==="validating"){var p=g.filter(function(P){return P&&P.errors.length});n[a].validateStatus=p.length?"error":"success",n[a].help=p.length?p.map(function(P){return P.errors}):null,(I=t==null?void 0:t.onValidate)===null||I===void 0||I.call(t,a,!p.length,p.length?de(n[a].help[0]):null)}}),f):f.catch(function(g){return g})},F=function(a,s){var m=[],c=!0;a?Array.isArray(a)?m=a:m=[a]:(c=!1,m=i.value);var f=S(m,s||{},c);return f.catch(function(g){return g}),f},A=function(a){var s=[];a?Array.isArray(a)?s=a:s=[a]:s=i.value,s.forEach(function(m){n[m]&&N(n[m],{validateStatus:"",help:null})})},M=function(a){for(var s={autoLink:!1},m=[],c=Array.isArray(a)?a:[a],f=0;f<c.length;f++){var g=c[f];(g==null?void 0:g.validateStatus)==="error"&&(s.validateStatus="error",g.help&&m.push(g.help)),s.required=s.required||(g==null?void 0:g.required)}return s.help=m,s},V=u,R=!0,B=function(a){var s=[];i.value.forEach(function(m){var c=le(a,m,!1),f=le(V,m,!1),g=R&&(t==null?void 0:t.immediate)&&c.isValid;(g||!Pe(c.v,f.v))&&s.push(m)}),F(s,{trigger:"change"}),R=!1,V=te(de(a))},T=t==null?void 0:t.debounce,z=!0;return G(e,function(){i.value=e?Object.keys(X(e)):[],!z&&t&&t.validateOnRuleChange&&F(),z=!1},{deep:!0,immediate:!0}),G(i,function(){var w={};i.value.forEach(function(s){w[s]=N({},n[s],{autoLink:!1,required:Fe(X(e)[s])}),delete n[s]});for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&delete n[a];N(n,w)},{immediate:!0}),G(r,T&&T.wait?Te(B,T.wait,Ie(T,["wait"])):B,{immediate:t&&!!t.immediate,deep:!0}),{modelRef:r,rulesRef:e,initialModel:u,validateInfos:n,resetFields:d,validate:F,validateField:O,mergeValidateInfo:M,clearValidate:A}}var ur=function(){return{layout:ne.oneOf(fe("horizontal","inline","vertical")),labelCol:{type:Object},wrapperCol:{type:Object},colon:{type:Boolean,default:void 0},labelAlign:ne.oneOf(fe("left","right")),labelWrap:{type:Boolean,default:void 0},prefixCls:String,requiredMark:{type:[String,Boolean],default:void 0},hideRequiredMark:{type:Boolean,default:void 0},model:ne.object,rules:{type:Object},validateMessages:{type:Object,default:void 0},validateOnRuleChange:{type:Boolean,default:void 0},scrollToFirstError:{type:[Boolean,Object]},onSubmit:Function,name:String,validateTrigger:{type:[String,Array]},size:{type:String},onValuesChange:{type:Function},onFieldsChange:{type:Function},onFinish:{type:Function},onFinishFailed:{type:Function},onValidate:{type:Function}}};function or(r,e){return Pe(re(r),re(e))}var sr=We({name:"AForm",inheritAttrs:!1,props:_e(ur(),{layout:"horizontal",hideRequiredMark:!1,colon:!0}),Item:$e,useForm:lr,setup:function(e,t){var u=t.emit,n=t.slots,i=t.expose,d=t.attrs,y=Ke(e),j=Ne("form",e),S=j.prefixCls,O=j.direction,F=j.form,A=q(function(){return e.requiredMark===""||e.requiredMark}),M=q(function(){var o;return A.value!==void 0?A.value:F&&((o=F.value)===null||o===void 0?void 0:o.requiredMark)!==void 0?F.value.requiredMark:!e.hideRequiredMark}),V=q(function(){var o,l;return(o=e.colon)!==null&&o!==void 0?o:(l=F.value)===null||l===void 0?void 0:l.colon}),R=Be(),B=R.validateMessages,T=q(function(){return N(N(N({},je),B.value),e.validateMessages)}),z=q(function(){var o;return xe(S.value,(o={},K(o,"".concat(S.value,"-").concat(e.layout),!0),K(o,"".concat(S.value,"-hide-required-mark"),M.value===!1),K(o,"".concat(S.value,"-rtl"),O.value==="rtl"),K(o,"".concat(S.value,"-").concat(y.value),y.value),o))}),w=we(),a={},s=function(l,v){a[l]=v},m=function(l){delete a[l]},c=function(l){var v=!!l,h=v?re(l).map(he):[];return v?Object.values(a).filter(function(b){return h.findIndex(function(k){return or(k,b.fieldName.value)})>-1}):Object.values(a)},f=function(l){if(!e.model){ae(!1,"Form","model is required for resetFields to work.");return}c(l).forEach(function(v){v.resetField()})},g=function(l){c(l).forEach(function(v){v.clearValidate()})},I=function(l){var v=e.scrollToFirstError;if(u("finishFailed",l),v&&l.errorFields.length){var h={};De(v)==="object"&&(h=v),P(l.errorFields[0].name,h)}},p=function(){return H.apply(void 0,arguments)},P=function(l){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=c(l?[l]:void 0);if(h.length){var b=h[0].fieldId.value,k=b?document.getElementById(b):null;k&&er(k,N({scrollMode:"if-needed",block:"nearest"},v))}},D=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(l===!0){var v=[];return Object.values(a).forEach(function(h){var b=h.namePath;v.push(b.value)}),ve(e.model,v)}else return ve(e.model,l)},L=function(l,v){if(ae(!(l instanceof Function),"Form","validateFields/validateField/validate not support callback, please use promise instead"),!e.model)return ae(!1,"Form","model is required for validateFields to work."),Promise.reject("Form `model` is required for validateFields to work.");var h=!!l,b=h?re(l).map(he):[],k=[];Object.values(a).forEach(function(C){var $;if(h||b.push(C.namePath.value),!!(!(($=C.rules)===null||$===void 0)&&$.value.length)){var _=C.namePath.value;if(!h||Xe(b,_)){var Y=C.validateRules(N({validateMessages:T.value},v));k.push(Y.then(function(){return{name:_,errors:[],warnings:[]}}).catch(function(Z){var U=[],Q=[];return Z.forEach(function(ue){var Ve=ue.rule.warningOnly,oe=ue.errors;Ve?Q.push.apply(Q,ee(oe)):U.push.apply(U,ee(oe))}),U.length?Promise.reject({name:_,errors:U,warnings:Q}):{name:_,errors:U,warnings:Q}}))}}});var x=Oe(k);w.value=x;var W=x.then(function(){return w.value===x?Promise.resolve(D(b)):Promise.reject([])}).catch(function(C){var $=C.filter(function(_){return _&&_.errors.length});return Promise.reject({values:D(b),errorFields:$,outOfDate:w.value!==x})});return W.catch(function(C){return C}),W},H=function(){return L.apply(void 0,arguments)},E=function(l){if(l.preventDefault(),l.stopPropagation(),u("submit",l),e.model){var v=L();v.then(function(h){u("finish",h)}).catch(function(h){I(h)})}};return i({resetFields:f,clearValidate:g,validateFields:L,getFieldsValue:D,validate:p,scrollToField:P}),Ue({model:q(function(){return e.model}),name:q(function(){return e.name}),labelAlign:q(function(){return e.labelAlign}),labelCol:q(function(){return e.labelCol}),labelWrap:q(function(){return e.labelWrap}),wrapperCol:q(function(){return e.wrapperCol}),vertical:q(function(){return e.layout==="vertical"}),colon:V,requiredMark:M,validateTrigger:q(function(){return e.validateTrigger}),rules:q(function(){return e.rules}),addField:s,removeField:m,onValidate:function(l,v,h){u("validate",l,v,h)},validateMessages:T}),G(function(){return e.rules},function(){e.validateOnRuleChange&&L()}),function(){var o;return ze("form",ce(ce({},d),{},{onSubmit:E,class:[z.value,d.class]}),[(o=n.default)===null||o===void 0?void 0:o.call(n)])}}});const vr=sr;export{vr as F};
