import{a as S,A as je,b9 as _e,ba as Oe,d as be,r as E,U as Be,g as T,h,y as M,aL as Re,bb as we,p as A,Y as qe,f as le,n as $e,m as J,b8 as oe,a9 as ze,e as He,z as Le,x as Ge,P as ve}from"./index.5c2f2cc3.js";import{D as We}from"./DownOutlined.fbc362d9.js";import{i as Ke}from"./isMobile.47354675.js";var Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const Ye=Xe;function xe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){Je(n,i,t[i])})}return n}function Je(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ye=function(e,t){var r=xe({},e,t.attrs);return S(je,xe({},r,{icon:Ye}),null)};ye.displayName="UpOutlined";ye.inheritAttrs=!1;const Qe=ye;function ge(){return typeof BigInt=="function"}function Q(n){var e=n.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var r=e||"0",i=r.split("."),c=i[0]||"0",m=i[1]||"0";c==="0"&&m==="0"&&(t=!1);var v=t?"-":"";return{negative:t,negativeStr:v,trimStr:r,integerStr:c,decimalStr:m,fullStr:"".concat(v).concat(r)}}function he(n){var e=String(n);return!Number.isNaN(Number(e))&&e.includes("e")}function Z(n){var e=String(n);if(he(n)){var t=Number(e.slice(e.indexOf("e-")+2)),r=e.match(/\.(\d+)/);return r!=null&&r[1]&&(t+=r[1].length),t}return e.includes(".")&&Ne(e)?e.length-e.indexOf(".")-1:0}function Se(n){var e=String(n);if(he(n)){if(n>Number.MAX_SAFE_INTEGER)return String(ge()?BigInt(n).toString():Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return String(ge()?BigInt(n).toString():Number.MIN_SAFE_INTEGER);e=n.toFixed(Z(e))}return Q(e).fullStr}function Ne(n){return typeof n=="number"?!Number.isNaN(n):n?/^\s*-?\d+(\.\d+)?\s*$/.test(n)||/^\s*-?\d+\.\s*$/.test(n)||/^\s*-?\.\d+\s*$/.test(n):!1}var Ze=function(){function n(e){if(Oe(this,n),this.origin="",!e&&e!==0||!String(e).trim()){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return _e(n,[{key:"negate",value:function(){return new n(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var r=Number(t);if(Number.isNaN(r))return this;var i=this.number+r;if(i>Number.MAX_SAFE_INTEGER)return new n(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new n(Number.MIN_SAFE_INTEGER);var c=Math.max(Z(this.number),Z(r));return new n(i.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Se(this.number):this.origin}}]),n}(),et=function(){function n(e){if(Oe(this,n),this.origin="",!e&&e!==0||!String(e).trim()){this.empty=!0;return}if(this.origin=String(e),e==="-"){this.nan=!0;return}var t=e;if(he(t)&&(t=Number(t)),t=typeof t=="string"?t:Se(t),Ne(t)){var r=Q(t);this.negative=r.negative;var i=r.trimStr.split(".");this.integer=BigInt(i[0]);var c=i[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return _e(n,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(r)}},{key:"negate",value:function(){var t=new n(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var r=new n(t);if(r.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),c=this.alignDecimal(i),m=r.alignDecimal(i),v=(c+m).toString(),f=Q(v),p=f.negativeStr,g=f.trimStr,l="".concat(p).concat(g.padStart(i+1,"0"));return new n("".concat(l.slice(0,-i),".").concat(l.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Q("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),n}();function V(n){return ge()?new et(n):new Ze(n)}function pe(n,e,t){if(n==="")return"";var r=Q(n),i=r.negativeStr,c=r.integerStr,m=r.decimalStr,v="".concat(e).concat(m),f="".concat(i).concat(c);if(t>=0){var p=Number(m[t]);if(p>=5){var g=V(n).add("".concat(i,"0.").concat("0".repeat(t)).concat(10-p));return pe(g.toString(),e,t)}return t===0?f:"".concat(f).concat(e).concat(m.padEnd(t,"0").slice(0,t))}return v===".0"?f:"".concat(f).concat(v)}var tt=200,nt=600;const at=be({name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var r=t.slots,i=t.emit,c=E(),m=function(p,g){p.preventDefault(),i("step",g);function l(){i("step",g),c.value=setTimeout(l,tt)}c.value=setTimeout(l,nt)},v=function(){clearTimeout(c.value)};return Be(function(){v()}),function(){if(Ke())return null;var f=e.prefixCls,p=e.upDisabled,g=e.downDisabled,l="".concat(f,"-handler"),O=T(l,"".concat(l,"-up"),h({},"".concat(l,"-up-disabled"),p)),B=T(l,"".concat(l,"-down"),h({},"".concat(l,"-down-disabled"),g)),D={unselectable:"on",role:"button",onMouseup:v,onMouseleave:v},w=r.upNode,P=r.downNode;return S("div",{class:"".concat(l,"-wrap")},[S("span",M(M({},D),{},{onMousedown:function(C){m(C,!0)},"aria-label":"Increase Value","aria-disabled":p,class:O}),[(w==null?void 0:w())||S("span",{unselectable:"on",class:"".concat(f,"-handler-up-inner")},null)]),S("span",M(M({},D),{},{onMousedown:function(C){m(C,!1)},"aria-label":"Decrease Value","aria-disabled":g,class:B}),[(P==null?void 0:P())||S("span",{unselectable:"on",class:"".concat(f,"-handler-down-inner")},null)])])}}});function rt(n,e){var t=E(null);function r(){try{var c=n.value,m=c.selectionStart,v=c.selectionEnd,f=c.value,p=f.substring(0,m),g=f.substring(v);t.value={start:m,end:v,value:f,beforeTxt:p,afterTxt:g}}catch{}}function i(){if(n.value&&t.value&&e.value)try{var c=n.value.value,m=t.value,v=m.beforeTxt,f=m.afterTxt,p=m.start,g=c.length;if(c.endsWith(f))g=c.length-t.value.afterTxt.length;else if(c.startsWith(v))g=v.length;else{var l=v[p-1],O=c.indexOf(l,p-1);O!==-1&&(g=O+1)}n.value.setSelectionRange(g,g)}catch(B){Re(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(B.message))}}return[r,i]}const it=function(){var n=E(0),e=function(){we.cancel(n.value)};return Be(function(){e()}),function(t){e(),n.value=we(function(){t()})}};var ut=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t},Ee=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},De=function(e){var t=V(e);return t.isInvalidate()?null:t},Ve=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const lt=be({name:"InnerInputNumber",inheritAttrs:!1,props:A(A({},Ve()),{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var r=t.attrs,i=t.slots,c=t.emit,m=t.expose,v=E(),f=E(!1),p=E(!1),g=E(!1),l=E(V(e.value));function O(o){e.value===void 0&&(l.value=o)}var B=function(a,s){if(!s)return e.precision>=0?e.precision:Math.max(Z(a),Z(e.step))},D=function(a){var s=String(a);if(e.parser)return e.parser(s);var u=s;return e.decimalSeparator&&(u=u.replace(e.decimalSeparator,".")),u.replace(/[^\w.-]+/g,"")},w=E(""),P=function(a,s){if(e.formatter)return e.formatter(a,{userTyping:s,input:String(w.value)});var u=typeof a=="number"?Se(a):a;if(!s){var d=B(u,s);if(Ne(u)&&(e.decimalSeparator||d>=0)){var I=e.decimalSeparator||".";u=pe(u,I,d)}}return u},H=function(){var o=e.value;return l.value.isInvalidate()&&["string","number"].includes(qe(o))?Number.isNaN(o)?"":o:P(l.value.toString(),!1)}();w.value=H;function C(o,a){w.value=P(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var F=le(function(){return De(e.max)}),N=le(function(){return De(e.min)}),y=le(function(){return!F.value||!l.value||l.value.isInvalidate()?!1:F.value.lessEquals(l.value)}),U=le(function(){return!N.value||!l.value||l.value.isInvalidate()?!1:l.value.lessEquals(N.value)}),L=rt(v,f),x=$e(L,2),j=x[0],ee=x[1],R=function(a){return F.value&&!a.lessEquals(F.value)?F.value:N.value&&!N.value.lessEquals(a)?N.value:null},q=function(a){return!R(a)},$=function(a,s){var u,d=a,I=q(d)||d.isEmpty();if(!d.isEmpty()&&!s&&(d=R(d)||d,I=!0),!e.readonly&&!e.disabled&&I){var _=d.toString(),k=B(_,s);return k>=0&&(d=V(pe(_,".",k))),d.equals(l.value)||(O(d),(u=e.onChange)===null||u===void 0||u.call(e,d.isEmpty()?null:Ee(e.stringMode,d)),e.value===void 0&&C(d,s)),d}return l.value},G=it(),W=function o(a){var s;if(j(),w.value=a,!g.value){var u=D(a),d=V(u);d.isNaN()||$(d,!0)}(s=e.onInput)===null||s===void 0||s.call(e,a),G(function(){var I=a;e.parser||(I=a.replace(/。/g,".")),I!==a&&o(I)})},K=function(){g.value=!0},te=function(){g.value=!1,W(v.value.value)},X=function(a){W(a.target.value)},Y=function(a){var s,u;if(!(a&&y.value||!a&&U.value)){p.value=!1;var d=V(e.step);a||(d=d.negate());var I=(l.value||V(0)).add(d.toString()),_=$(I,!1);(s=e.onStep)===null||s===void 0||s.call(e,Ee(e.stringMode,_),{offset:e.step,type:a?"up":"down"}),(u=v.value)===null||u===void 0||u.focus()}},ne=function(a){var s=V(D(w.value)),u=s;s.isNaN()?u=l.value:u=$(s,a),e.value!==void 0?C(l.value,!1):u.isNaN()||C(u,!1)},se=function(a){var s,u=a.which;p.value=!0,u===oe.ENTER&&(g.value||(p.value=!1),ne(!1),(s=e.onPressEnter)===null||s===void 0||s.call(e,a)),e.keyboard!==!1&&!g.value&&[oe.UP,oe.DOWN].includes(u)&&(Y(oe.UP===u),a.preventDefault())},b=function(){p.value=!1},z=function(a){ne(!1),f.value=!1,p.value=!1,c("blur",a)};return J(function(){return e.precision},function(){l.value.isInvalidate()||C(l.value,!1)},{flush:"post"}),J(function(){return e.value},function(){var o=V(e.value);l.value=o;var a=V(D(w.value));(!o.equals(a)||!p.value||e.formatter)&&C(o,p.value)},{flush:"post"}),J(w,function(){e.formatter&&ee()},{flush:"post"}),J(function(){return e.disabled},function(o){o&&(f.value=!1)}),m({focus:function(){var a;(a=v.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=v.value)===null||a===void 0||a.blur()}}),function(){var o,a=A(A({},r),e),s=a.prefixCls,u=s===void 0?"rc-input-number":s,d=a.min,I=a.max,_=a.step,k=_===void 0?1:_;a.defaultValue,a.value;var ae=a.disabled,re=a.readonly;a.keyboard;var ie=a.controls,ce=ie===void 0?!0:ie,ue=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var Me=a.lazy,Ae=a.class,Pe=a.style,Fe=ut(a,["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"]),ke=i.upHandler,Te=i.downHandler,Ie="".concat(u,"-input"),fe={};return Me?fe.onChange=X:fe.onInput=X,S("div",{class:T(u,Ae,(o={},h(o,"".concat(u,"-focused"),f.value),h(o,"".concat(u,"-disabled"),ae),h(o,"".concat(u,"-readonly"),re),h(o,"".concat(u,"-not-a-number"),l.value.isNaN()),h(o,"".concat(u,"-out-of-range"),!l.value.isInvalidate()&&!q(l.value)),o)),style:Pe,onKeydown:se,onKeyup:b},[ce&&S(at,{prefixCls:u,upDisabled:y.value,downDisabled:U.value,onStep:Y},{upNode:ke,downNode:Te}),S("div",{class:"".concat(Ie,"-wrap")},[S("input",M(M(M({autofocus:ue,autocomplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":I,"aria-valuenow":l.value.isInvalidate()?null:l.value.toString(),step:k},Fe),{},{ref:v,class:Ie,value:w.value,disabled:ae,readonly:re,onFocus:function(Ue){f.value=!0,c("focus",Ue)}},fe),{},{onBlur:z,onCompositionstart:K,onCompositionend:te}),null)])])}}});function de(n){return n!=null}var ot=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t},Ce=Ve(),st=function(){return A(A({},Ce),{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:ve.any,addonAfter:ve.any,prefix:ve.any,"onUpdate:value":Ce.onChange,valueModifiers:Object})},me=be({name:"AInputNumber",inheritAttrs:!1,props:st(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var r=t.emit,i=t.expose,c=t.attrs,m=t.slots,v=ze(),f=He("input-number",e),p=f.prefixCls,g=f.size,l=f.direction,O=E(e.value===void 0?e.defaultValue:e.value),B=E(!1);J(function(){return e.value},function(){O.value=e.value});var D=E(null),w=function(){var y;(y=D.value)===null||y===void 0||y.focus()},P=function(){var y;(y=D.value)===null||y===void 0||y.blur()};i({focus:w,blur:P});var H=function(y){e.value===void 0&&(O.value=y),r("update:value",y),r("change",y),v.onFieldChange()},C=function(y){B.value=!1,r("blur",y),v.onFieldBlur()},F=function(y){B.value=!0,r("focus",y)};return function(){var N,y,U,L,x=A(A({},c),e),j=x.class,ee=x.bordered,R=x.readonly,q=x.style,$=x.addonBefore,G=$===void 0?(y=m.addonBefore)===null||y===void 0?void 0:y.call(m):$,W=x.addonAfter,K=W===void 0?(U=m.addonAfter)===null||U===void 0?void 0:U.call(m):W,te=x.prefix,X=te===void 0?(L=m.prefix)===null||L===void 0?void 0:L.call(m):te,Y=x.valueModifiers,ne=Y===void 0?{}:Y,se=ot(x,["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"]),b=p.value,z=g.value,o=T((N={},h(N,"".concat(b,"-lg"),z==="large"),h(N,"".concat(b,"-sm"),z==="small"),h(N,"".concat(b,"-rtl"),l.value==="rtl"),h(N,"".concat(b,"-readonly"),R),h(N,"".concat(b,"-borderless"),!ee),N),j),a=S(lt,M(M({},Le(se,["size","defaultValue"])),{},{ref:D,lazy:!!ne.lazy,value:O.value,class:o,prefixCls:b,readonly:R,onChange:H,onBlur:C,onFocus:F}),{upHandler:function(){return S(Qe,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return S(We,{class:"".concat(b,"-handler-down-inner")},null)}}),s=de(G)||de(K);if(de(X)){var u,d=T("".concat(b,"-affix-wrapper"),(u={},h(u,"".concat(b,"-affix-wrapper-focused"),B.value),h(u,"".concat(b,"-affix-wrapper-disabled"),e.disabled),h(u,"".concat(b,"-affix-wrapper-rtl"),l.value==="rtl"),h(u,"".concat(b,"-affix-wrapper-readonly"),R),h(u,"".concat(b,"-affix-wrapper-borderless"),!ee),h(u,"".concat(j),!s&&j),u));a=S("div",{class:d,style:q,onMouseup:function(){return D.value.focus()}},[S("span",{class:"".concat(b,"-prefix")},[X]),a])}if(s){var I,_="".concat(b,"-group"),k="".concat(_,"-addon"),ae=G?S("div",{class:k},[G]):null,re=K?S("div",{class:k},[K]):null,ie=T("".concat(b,"-wrapper"),_,h({},"".concat(_,"-rtl"),l.value==="rtl")),ce=T("".concat(b,"-group-wrapper"),(I={},h(I,"".concat(b,"-group-wrapper-sm"),z==="small"),h(I,"".concat(b,"-group-wrapper-lg"),z==="large"),h(I,"".concat(b,"-group-wrapper-rtl"),l.value==="rtl"),I),j);a=S("div",{class:ce,style:q},[S("div",{class:ie},[ae,a,re])])}return Ge(a,{style:q})}}});const mt=A(me,{install:function(e){return e.component(me.name,me),e}});export{mt as _};