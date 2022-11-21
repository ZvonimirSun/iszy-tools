import{a as S,A as Te,ad as Ce,ae as Me,h as g,d as ge,r as D,af as Be,g as O,s as N,ag as Ue,ah as Ie,ai as qe,f as ue,q as He,p as Y,y as Ve,ac as le,aj as ze,a5 as je,e as Ge,G as Le,D as We,P as fe}from"./index.357cc62b.js";import{D as Ke}from"./DownOutlined.08a5c6ad.js";import{i as Xe}from"./isMobile.481c1aec.js";var Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const Je=Ye;function xe(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),u.forEach(function(s){Qe(a,s,t[s])})}return a}function Qe(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var be=function(e,t){var u=xe({},e,t.attrs);return S(Te,xe({},u,{icon:Je}),null)};be.displayName="UpOutlined";be.inheritAttrs=!1;const Ze=be;function me(){return typeof BigInt=="function"}function J(a){var e=a.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var u=e||"0",s=u.split("."),c=s[0]||"0",d=s[1]||"0";c==="0"&&d==="0"&&(t=!1);var v=t?"-":"";return{negative:t,negativeStr:v,trimStr:u,integerStr:c,decimalStr:d,fullStr:"".concat(v).concat(u)}}function he(a){var e=String(a);return!Number.isNaN(Number(e))&&e.includes("e")}function Q(a){var e=String(a);if(he(a)){var t=Number(e.slice(e.indexOf("e-")+2)),u=e.match(/\.(\d+)/);return u!=null&&u[1]&&(t+=u[1].length),t}return e.includes(".")&&ye(e)?e.length-e.indexOf(".")-1:0}function Se(a){var e=String(a);if(he(a)){if(a>Number.MAX_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MIN_SAFE_INTEGER);e=a.toFixed(Q(e))}return J(e).fullStr}function ye(a){return typeof a=="number"?!Number.isNaN(a):a?/^\s*-?\d+(\.\d+)?\s*$/.test(a)||/^\s*-?\d+\.\s*$/.test(a)||/^\s*-?\.\d+\s*$/.test(a):!1}var et=function(){function a(e){if(Me(this,a),g(this,"origin",""),!e&&e!==0||!String(e).trim()){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Ce(a,[{key:"negate",value:function(){return new a(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var u=Number(t);if(Number.isNaN(u))return this;var s=this.number+u;if(s>Number.MAX_SAFE_INTEGER)return new a(Number.MAX_SAFE_INTEGER);if(s<Number.MIN_SAFE_INTEGER)return new a(Number.MIN_SAFE_INTEGER);var c=Math.max(Q(this.number),Q(u));return new a(s.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Se(this.number):this.origin}}]),a}(),tt=function(){function a(e){if(Me(this,a),g(this,"origin",""),!e&&e!==0||!String(e).trim()){this.empty=!0;return}if(this.origin=String(e),e==="-"){this.nan=!0;return}var t=e;if(he(t)&&(t=Number(t)),t=typeof t=="string"?t:Se(t),ye(t)){var u=J(t);this.negative=u.negative;var s=u.trimStr.split(".");this.integer=BigInt(s[0]);var c=s[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return Ce(a,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var u="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(u)}},{key:"negate",value:function(){var t=new a(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var u=new a(t);if(u.isInvalidate())return this;var s=Math.max(this.getDecimalStr().length,u.getDecimalStr().length),c=this.alignDecimal(s),d=u.alignDecimal(s),v=(c+d).toString(),f=J(v),p=f.negativeStr,m=f.trimStr,i="".concat(p).concat(m.padStart(s+1,"0"));return new a("".concat(i.slice(0,-s),".").concat(i.slice(-s)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":J("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),a}();function A(a){return me()?new tt(a):new et(a)}function pe(a,e,t){if(a==="")return"";var u=J(a),s=u.negativeStr,c=u.integerStr,d=u.decimalStr,v="".concat(e).concat(d),f="".concat(s).concat(c);if(t>=0){var p=Number(d[t]);if(p>=5){var m=A(a).add("".concat(s,"0.").concat("0".repeat(t)).concat(10-p));return pe(m.toString(),e,t)}return t===0?f:"".concat(f).concat(e).concat(d.padEnd(t,"0").slice(0,t))}return v===".0"?f:"".concat(f).concat(v)}var nt=200,at=600;const rt=ge({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var u=t.slots,s=t.emit,c=D(),d=function(p,m){p.preventDefault(),s("step",m);function i(){s("step",m),c.value=setTimeout(i,nt)}c.value=setTimeout(i,at)},v=function(){clearTimeout(c.value)};return Be(function(){v()}),function(){if(Xe())return null;var f=e.prefixCls,p=e.upDisabled,m=e.downDisabled,i="".concat(f,"-handler"),V=O(i,"".concat(i,"-up"),g({},"".concat(i,"-up-disabled"),p)),_=O(i,"".concat(i,"-down"),g({},"".concat(i,"-down-disabled"),m)),C={unselectable:"on",role:"button",onMouseup:v,onMouseleave:v},x=u.upNode,k=u.downNode;return S("div",{class:"".concat(i,"-wrap")},[S("span",N(N({},C),{},{onMousedown:function(M){d(M,!0)},"aria-label":"Increase Value","aria-disabled":p,class:V}),[(x==null?void 0:x())||S("span",{unselectable:"on",class:"".concat(f,"-handler-up-inner")},null)]),S("span",N(N({},C),{},{onMousedown:function(M){d(M,!1)},"aria-label":"Decrease Value","aria-disabled":m,class:_}),[(k==null?void 0:k())||S("span",{unselectable:"on",class:"".concat(f,"-handler-down-inner")},null)])])}}});function it(a,e){var t=D(null);function u(){try{var c=a.value,d=c.selectionStart,v=c.selectionEnd,f=c.value,p=f.substring(0,d),m=f.substring(v);t.value={start:d,end:v,value:f,beforeTxt:p,afterTxt:m}}catch{}}function s(){if(a.value&&t.value&&e.value)try{var c=a.value.value,d=t.value,v=d.beforeTxt,f=d.afterTxt,p=d.start,m=c.length;if(c.endsWith(f))m=c.length-t.value.afterTxt.length;else if(c.startsWith(v))m=v.length;else{var i=v[p-1],V=c.indexOf(i,p-1);V!==-1&&(m=V+1)}a.value.setSelectionRange(m,m)}catch(_){Ue(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(_.message))}}return[u,s]}const ut=function(){var a=D(0),e=function(){Ie.cancel(a.value)};return Be(function(){e()}),function(t){e(),a.value=Ie(function(){t()})}};var lt=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],we=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},Ee=function(e){var t=A(e);return t.isInvalidate()?null:t},_e=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const ot=ge({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:N(N({},_e()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var u=t.attrs,s=t.slots,c=t.emit,d=t.expose,v=D(),f=D(!1),p=D(!1),m=D(!1),i=D(A(e.value));function V(l){e.value===void 0&&(i.value=l)}var _=function(n,o){if(!o)return e.precision>=0?e.precision:Math.max(Q(n),Q(e.step))},C=function(n){var o=String(n);if(e.parser)return e.parser(o);var r=o;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},x=D(""),k=function(n,o){if(e.formatter)return e.formatter(n,{userTyping:o,input:String(x.value)});var r=typeof n=="number"?Se(n):n;if(!o){var I=_(r,o);if(ye(r)&&(e.decimalSeparator||I>=0)){var y=e.decimalSeparator||".";r=pe(r,y,I)}}return r},j=function(){var l=e.value;return i.value.isInvalidate()&&["string","number"].includes(qe(l))?Number.isNaN(l)?"":l:k(i.value.toString(),!1)}();x.value=j;function M(l,n){x.value=k(l.isInvalidate()?l.toString(!1):l.toString(!n),n)}var P=ue(function(){return Ee(e.max)}),w=ue(function(){return Ee(e.min)}),h=ue(function(){return!P.value||!i.value||i.value.isInvalidate()?!1:P.value.lessEquals(i.value)}),R=ue(function(){return!w.value||!i.value||i.value.isInvalidate()?!1:i.value.lessEquals(w.value)}),F=it(v,f),E=He(F,2),T=E[0],Z=E[1],U=function(n){return P.value&&!n.lessEquals(P.value)?P.value:w.value&&!w.value.lessEquals(n)?w.value:null},q=function(n){return!U(n)},H=function(n,o){var r=n,I=q(r)||r.isEmpty();if(!r.isEmpty()&&!o&&(r=U(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var y=r.toString(),B=_(y,o);if(B>=0&&(r=A(pe(y,".",B))),!r.equals(i.value)){var $;V(r),($=e.onChange)===null||$===void 0||$.call(e,r.isEmpty()?null:we(e.stringMode,r)),e.value===void 0&&M(r,o)}return r}return i.value},G=ut(),L=function l(n){var o;if(T(),x.value=n,!m.value){var r=C(n),I=A(r);I.isNaN()||H(I,!0)}(o=e.onInput)===null||o===void 0||o.call(e,n),G(function(){var y=n;e.parser||(y=n.replace(/。/g,".")),y!==n&&l(y)})},W=function(){m.value=!0},ee=function(){m.value=!1,L(v.value.value)},K=function(n){L(n.target.value)},X=function(n){var o,r;if(!(n&&h.value||!n&&R.value)){p.value=!1;var I=A(e.step);n||(I=I.negate());var y=(i.value||A(0)).add(I.toString()),B=H(y,!1);(o=e.onStep)===null||o===void 0||o.call(e,we(e.stringMode,B),{offset:e.step,type:n?"up":"down"}),(r=v.value)===null||r===void 0||r.focus()}},te=function(n){var o=A(C(x.value)),r=o;o.isNaN()?r=i.value:r=H(o,n),e.value!==void 0?M(i.value,!1):r.isNaN()||M(r,!1)},oe=function(n){var o=n.which;if(p.value=!0,o===le.ENTER){var r;m.value||(p.value=!1),te(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,n)}e.keyboard!==!1&&!m.value&&[le.UP,le.DOWN].includes(o)&&(X(le.UP===o),n.preventDefault())},b=function(){p.value=!1},z=function(n){te(!1),f.value=!1,p.value=!1,c("blur",n)};return Y(function(){return e.precision},function(){i.value.isInvalidate()||M(i.value,!1)},{flush:"post"}),Y(function(){return e.value},function(){var l=A(e.value);i.value=l;var n=A(C(x.value));(!l.equals(n)||!p.value||e.formatter)&&M(l,p.value)},{flush:"post"}),Y(x,function(){e.formatter&&Z()},{flush:"post"}),Y(function(){return e.disabled},function(l){l&&(f.value=!1)}),d({focus:function(){var n;(n=v.value)===null||n===void 0||n.focus()},blur:function(){var n;(n=v.value)===null||n===void 0||n.blur()}}),function(){var l,n=N(N({},u),e),o=n.prefixCls,r=o===void 0?"rc-input-number":o,I=n.min,y=n.max,B=n.step,$=B===void 0?1:B;n.defaultValue,n.value;var ne=n.disabled,ae=n.readonly;n.keyboard;var re=n.controls,se=re===void 0?!0:re,ie=n.autofocus;n.stringMode,n.parser,n.formatter,n.precision,n.decimalSeparator,n.onChange,n.onInput,n.onPressEnter,n.onStep;var Ae=n.lazy,Fe=n.class,ke=n.style,$e=Ve(n,lt),Pe=s.upHandler,Oe=s.downHandler,Ne="".concat(r,"-input"),ce={};return Ae?ce.onChange=K:ce.onInput=K,S("div",{class:O(r,Fe,(l={},g(l,"".concat(r,"-focused"),f.value),g(l,"".concat(r,"-disabled"),ne),g(l,"".concat(r,"-readonly"),ae),g(l,"".concat(r,"-not-a-number"),i.value.isNaN()),g(l,"".concat(r,"-out-of-range"),!i.value.isInvalidate()&&!q(i.value)),l)),style:ke,onKeydown:oe,onKeyup:b},[se&&S(rt,{prefixCls:r,upDisabled:h.value,downDisabled:R.value,onStep:X},{upNode:Pe,downNode:Oe}),S("div",{class:"".concat(Ne,"-wrap")},[S("input",N(N(N({autofocus:ie,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":y,"aria-valuenow":i.value.isInvalidate()?null:i.value.toString(),step:$},$e),{},{ref:v,class:Ne,value:x.value,disabled:ne,readonly:ae,onFocus:function(Re){f.value=!0,c("focus",Re)}},ce),{},{onBlur:z,onCompositionstart:W,onCompositionend:ee}),null)])])}}});function ve(a){return a!=null}var st=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],De=_e(),ct=function(){return N(N({},De),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:fe.any,addonAfter:fe.any,prefix:fe.any,"onUpdate:value":De.onChange,valueModifiers:Object})},de=ge({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:ct(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var u=t.emit,s=t.expose,c=t.attrs,d=t.slots,v=je(),f=Ge("input-number",e),p=f.prefixCls,m=f.size,i=f.direction,V=D(e.value===void 0?e.defaultValue:e.value),_=D(!1);Y(function(){return e.value},function(){V.value=e.value});var C=D(null),x=function(){var h;(h=C.value)===null||h===void 0||h.focus()},k=function(){var h;(h=C.value)===null||h===void 0||h.blur()};s({focus:x,blur:k});var j=function(h){e.value===void 0&&(V.value=h),u("update:value",h),u("change",h),v.onFieldChange()},M=function(h){_.value=!1,u("blur",h),v.onFieldBlur()},P=function(h){_.value=!0,u("focus",h)};return function(){var w,h,R,F,E=N(N({},c),e),T=E.class,Z=E.bordered,U=E.readonly,q=E.style,H=E.addonBefore,G=H===void 0?(w=d.addonBefore)===null||w===void 0?void 0:w.call(d):H,L=E.addonAfter,W=L===void 0?(h=d.addonAfter)===null||h===void 0?void 0:h.call(d):L,ee=E.prefix,K=ee===void 0?(R=d.prefix)===null||R===void 0?void 0:R.call(d):ee,X=E.valueModifiers,te=X===void 0?{}:X,oe=Ve(E,st),b=p.value,z=m.value,l=O((F={},g(F,"".concat(b,"-lg"),z==="large"),g(F,"".concat(b,"-sm"),z==="small"),g(F,"".concat(b,"-rtl"),i.value==="rtl"),g(F,"".concat(b,"-readonly"),U),g(F,"".concat(b,"-borderless"),!Z),F),T),n=S(ot,N(N({},Le(oe,["size","defaultValue"])),{},{ref:C,lazy:!!te.lazy,value:V.value,class:l,prefixCls:b,readonly:U,onChange:j,onBlur:M,onFocus:P}),{upHandler:function(){return S(Ze,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return S(Ke,{class:"".concat(b,"-handler-down-inner")},null)}}),o=ve(G)||ve(W);if(ve(K)){var r,I=O("".concat(b,"-affix-wrapper"),(r={},g(r,"".concat(b,"-affix-wrapper-focused"),_.value),g(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),g(r,"".concat(b,"-affix-wrapper-rtl"),i.value==="rtl"),g(r,"".concat(b,"-affix-wrapper-readonly"),U),g(r,"".concat(b,"-affix-wrapper-borderless"),!Z),g(r,"".concat(T),!o&&T),r));n=S("div",{class:I,style:q,onMouseup:function(){return C.value.focus()}},[S("span",{class:"".concat(b,"-prefix")},[K]),n])}if(o){var y,B="".concat(b,"-group"),$="".concat(B,"-addon"),ne=G?S("div",{class:$},[G]):null,ae=W?S("div",{class:$},[W]):null,re=O("".concat(b,"-wrapper"),B,g({},"".concat(B,"-rtl"),i.value==="rtl")),se=O("".concat(b,"-group-wrapper"),(y={},g(y,"".concat(b,"-group-wrapper-sm"),z==="small"),g(y,"".concat(b,"-group-wrapper-lg"),z==="large"),g(y,"".concat(b,"-group-wrapper-rtl"),i.value==="rtl"),y),T);n=S("div",{class:se,style:q},[S("div",{class:re},[ne,n,ae])])}return We(n,{style:q})}}});const pt=ze(de,{install:function(e){return e.component(de.name,de),e}});export{pt as _};
