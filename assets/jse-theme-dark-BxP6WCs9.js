import{i as e,t}from"./chunk-62oNxeRG.js";import{_ as n,c as r,g as i,h as a}from"./_getPrototype-DI9X0-LS.js";import{t as o}from"./toInteger-Cd0xHZvH.js";import{n as s,t as c}from"./last-BIug9lc_.js";import{t as l}from"./_baseIteratee-B3rtFdzd.js";import{n as u,r as d,t as f}from"./_baseEach-Bybaz2ue.js";import{t as p}from"./_castFunction-Dj5PV5jN.js";import{n as m,t as h}from"./map-CEGlxT0t.js";import{t as g}from"./range-C_RjIOX5.js";import{t as _}from"./memoize-one.esm-BcU0cZu1.js";import{Bn as v,Cr as y,Hn as b,Jn as x,Wn as S,Yn as C,_r as w,dr as T,fr as E,gr as ee,h as te,hr as ne,lr as re,mr as ie,or as ae,pr as oe,qn as se,rr as D,tr as ce,ur as le,vr as O,yr as ue}from"./index-BW5Y3H8V.js";import{A as de,B as fe,C as pe,D as me,E as he,F as ge,G as _e,H as k,I as ve,L as A,N as j,Q as M,R as ye,St as be,T as N,U as P,V as xe,W as Se,X as Ce,Y as we,Z as Te,_ as Ee,_t as De,a as Oe,at as ke,b as Ae,bt as je,c as Me,ct as Ne,dt as Pe,f as Fe,ft as Ie,g as F,gt as Le,h as Re,ht as ze,it as Be,k as Ve,l as He,lt as Ue,mt as We,nt as Ge,o as Ke,ot as qe,q as Je,r as Ye,rt as Xe,s as Ze,st as Qe,u as $e,ut as et,v as tt,vt as nt,w as rt,xt as it,y as at,yt as ot,z as st}from"./dist-rygzhLxp.js";function ct(){}var lt=1,ut=4;function dt(e,t){return t=typeof t==`function`?t:void 0,x(e,lt|ut,t)}function ft(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function pt(e,t,n,r){return f(e,function(e,i,a){t(r,e,n(e),a)}),r}function mt(e,t){return function(n,r){var i=a(n)?ft:pt,o=t?t():{};return i(n,e,l(r,2),o)}}function ht(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}var gt=S(!0);function _t(e,t){return e&&gt(e,t,re)}var vt=u(_t,!0);function yt(e,t){return(a(e)?ht:vt)(e,p(t))}function bt(e){return e&&e.length?e[0]:void 0}var xt=Object.prototype.hasOwnProperty,St=mt(function(e,t,n){xt.call(e,n)?e[n].push(t):r(e,n,[t])});function Ct(e){return e!=null&&e.length?s(e,0,-1):[]}var wt=`[object Map]`,Tt=`[object Set]`,Et=Object.prototype.hasOwnProperty;function Dt(e){if(e==null)return!0;if(O(e)&&(a(e)||typeof e==`string`||typeof e.splice==`function`||oe(e)||T(e)||ie(e)))return!e.length;var t=C(e);if(t==wt||t==Tt)return!e.size;if(ee(e))return!le(e).length;for(var n in e)if(Et.call(e,n))return!1;return!0}function Ot(e,t){return e<t}function kt(e,t){var n={};return t=l(t,3),d(e,function(e,i,a){r(n,i,t(e,i,a))}),n}function At(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===void 0?s===s&&!n(s):r(s,c)))var c=s,l=o}return l}function jt(e,t){return e&&e.length?At(e,l(t,2),Ot):void 0}function Mt(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function Nt(e,t){if(e!==t){var r=e!==void 0,i=e===null,a=e===e,o=n(e),s=t!==void 0,c=t===null,l=t===t,u=n(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function Pt(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=Nt(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Ft(e,t,n){t=t.length?i(t,function(e){return a(e)?function(t){return D(t,e.length===1?e[0]:e)}:e}):[y];var r=-1;return t=i(t,E(l)),Mt(m(e,function(e,n,a){return{criteria:i(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Pt(e,t,n)})}var It=mt(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]}),Lt=ue(function(e,t){if(e==null)return[];var n=t.length;return n>1&&w(e,t[0],t[1])?t=[]:n>2&&w(t[0],t[1],t[2])&&(t=[t[0]]),Ft(e,ce(t,1),[])}),Rt=9007199254740991,zt=4294967295,Bt=Math.min;function Vt(e,t){if(e=o(e),e<1||e>Rt)return[];var n=zt,r=Bt(e,zt);t=p(t),e-=zt;for(var i=ne(r,t);++n<e;)t(n);return i}var Ht=0;function Ut(e){var t=++Ht;return ae(e)+t}function Wt(e){return Array.isArray(e)}function Gt(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function Kt(e){return e&&typeof e==`object`?e.op===`add`:!1}function qt(e){return e&&typeof e==`object`?e.op===`remove`:!1}function Jt(e){return e&&typeof e==`object`?e.op===`replace`:!1}function Yt(e){return e&&typeof e==`object`?e.op===`copy`:!1}function Xt(e){return e&&typeof e==`object`?e.op===`move`:!1}function Zt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Qt(e,t){return e===t}function $t(e){return e.slice(0,e.length-1)}function en(e){return e[e.length-1]}function tn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Qt;if(e.length<t.length)return!1;for(let r=0;r<t.length;r++)if(!n(e[r],t[r]))return!1;return!0}function nn(e){return typeof e==`object`&&!!e}function rn(e){if(Wt(e)){let t=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}if(Gt(e)){let t={...e};return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}return e}function an(e,t,n){if(e[t]===n)return e;let r=rn(e);return r[t]=n,r}function I(e,t){let n=e,r=0;for(;r<t.length;)n=Gt(n)?n[t[r]]:Wt(n)?n[Number.parseInt(t[r])]:void 0,r++;return n}function on(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return n;let i=t[0],a=on(e?e[i]:void 0,t.slice(1),n,r);if(Gt(e)||Wt(e))return an(e,i,a);if(r){let e=sn.test(i)?[]:{};return e[i]=a,e}throw Error(`Path does not exist`)}var sn=/^\d+$/;function cn(e,t,n){if(t.length===0)return n(e);if(!nn(e))throw Error(`Path doesn't exist`);let r=t[0];return an(e,r,cn(e[r],t.slice(1),n))}function ln(e,t){if(t.length===0)return e;if(!nn(e))throw Error(`Path does not exist`);if(t.length===1){let n=t[0];if(!(n in e))return e;let r=rn(e);return Wt(r)&&r.splice(Number.parseInt(n),1),Gt(r)&&delete r[n],r}let n=t[0];return an(e,n,ln(e[n],t.slice(1)))}function un(e,t,n){let r=t.slice(0,t.length-1),i=t[t.length-1];return cn(e,r,e=>{if(!Array.isArray(e))throw TypeError(`Array expected at path ${JSON.stringify(r)}`);let t=rn(e);return t.splice(Number.parseInt(i),0,n),t})}function dn(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:dn(e[t[0]],t.slice(1))}function fn(e){let t=e.split(`/`);return t.shift(),t.map(e=>e.replace(/~1/g,`/`).replace(/~0/g,`~`))}function pn(e){return e.map(mn).join(``)}function mn(e){return`/${String(e).replace(/~/g,`~0`).replace(/\//g,`~1`)}`}function hn(e,t){return e+mn(t)}function gn(e,t,n){let r=e;for(let e=0;e<t.length;e++){Tn(t[e]);let i=t[e];if(n?.before){let e=n.before(r,i);if(e!==void 0){if(e.document!==void 0&&(r=e.document),e.json!==void 0)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`);e.operation!==void 0&&(i=e.operation)}}let a=r,o=En(r,i.path);if(i.op===`add`)r=yn(r,o,i.value);else if(i.op===`remove`)r=vn(r,o);else if(i.op===`replace`)r=_n(r,o,i.value);else if(i.op===`copy`)r=bn(r,o,Dn(i.from));else if(i.op===`move`)r=xn(r,o,Dn(i.from));else if(i.op===`test`)Sn(r,o,i.value);else throw Error(`Unknown JSONPatch operation ${JSON.stringify(i)}`);if(n?.after){let e=n.after(r,i,a);e!==void 0&&(r=e)}}return r}function _n(e,t,n){return dn(e,t)?on(e,t,n):e}function vn(e,t){return ln(e,t)}function yn(e,t,n){return Cn(e,t)?un(e,t,n):on(e,t,n)}function bn(e,t,n){let r=I(e,n);return Cn(e,t)?un(e,t,r):on(e,t,r)}function xn(e,t,n){let r=I(e,n),i=ln(e,n);return Cn(i,t)?un(i,t,r):on(i,t,r)}function Sn(e,t,n){if(n===void 0)throw Error(`Test failed: no value provided (path: "${pn(t)}")`);if(!dn(e,t))throw Error(`Test failed: path not found (path: "${pn(t)}")`);if(!Zt(I(e,t),n))throw Error(`Test failed, value differs (path: "${pn(t)}")`)}function Cn(e,t){if(t.length===0)return!1;let n=I(e,$t(t));return Array.isArray(n)}function wn(e,t){if(en(t)!==`-`)return t;let n=$t(t),r=I(e,n);return n.concat(r.length)}function Tn(e){if(![`add`,`remove`,`replace`,`copy`,`move`,`test`].includes(e.op))throw Error(`Unknown JSONPatch op ${JSON.stringify(e.op)}`);if(typeof e.path!=`string`)throw Error(`Required property "path" missing or not a string in operation ${JSON.stringify(e)}`);if((e.op===`copy`||e.op===`move`)&&typeof e.from!=`string`)throw Error(`Required property "from" missing or not a string in operation ${JSON.stringify(e)}`)}function En(e,t){return wn(e,fn(t))}function Dn(e){return fn(e)}function On(e,t,n){let r=[];return gn(e,t,{before:(e,t)=>{let i,a=En(e,t.path);if(t.op===`add`)i=jn(e,a);else if(t.op===`remove`)i=An(e,a);else if(t.op===`replace`)i=kn(e,a);else if(t.op===`copy`)i=Mn(e,a);else if(t.op===`move`)i=Nn(e,a,Dn(t.from));else if(t.op===`test`)i=[];else throw Error(`Unknown JSONPatch operation ${JSON.stringify(t)}`);let o;if(n?.before){let r=n.before(e,t,i);if(r?.revertOperations&&(i=r.revertOperations),r?.document&&(o=r.document),r?.json)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`)}if(r=i.concat(r),o!==void 0)return{document:o}}}),r}function kn(e,t){return dn(e,t)?[{op:`replace`,path:pn(t),value:I(e,t)}]:[]}function An(e,t){return[{op:`add`,path:pn(t),value:I(e,t)}]}function jn(e,t){return Cn(e,t)||!dn(e,t)?[{op:`remove`,path:pn(t)}]:kn(e,t)}function Mn(e,t){return jn(e,t)}function Nn(e,t,n){if(t.length<n.length&&tn(n,t))return[{op:`replace`,path:pn(t),value:e}];let r={op:`move`,from:pn(t),path:pn(n)};return!Cn(e,t)&&dn(e,t)?[r,...An(e,t)]:[r]}var Pn=t((e=>{var t={b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`,'"':`"`,"/":`/`,"\\":`\\`},n=97;e.parse=function(e,r,i){var o={},s=0,c=0,l=0,u=i&&i.bigint&&typeof BigInt<`u`;return{data:d(``,!0),pointers:o};function d(t,n){f();var r;S(t,`value`);var i=v();switch(i){case`t`:_(`rue`),r=!0;break;case`f`:_(`alse`),r=!1;break;case`n`:_(`ull`),r=null;break;case`"`:r=p();break;case`[`:r=h(t);break;case`{`:r=g(t);break;default:y(),`-0123456789`.indexOf(i)>=0?r=m():T()}return S(t,`valueEnd`),f(),n&&l<e.length&&T(),r}function f(){loop:for(;l<e.length;){switch(e[l]){case` `:c++;break;case`	`:c+=4;break;case`\r`:c=0;break;case`
`:c=0,s++;break;default:break loop}l++}}function p(){for(var e=``,n;n=v(),n!=`"`;)n==`\\`?(n=v(),n in t?e+=t[n]:n==`u`?e+=b():E()):e+=n;return e}function m(){var t=``,n=!0;e[l]==`-`&&(t+=v()),t+=e[l]==`0`?v():x(),e[l]==`.`&&(t+=v()+x(),n=!1),(e[l]==`e`||e[l]==`E`)&&(t+=v(),(e[l]==`+`||e[l]==`-`)&&(t+=v()),t+=x(),n=!1);var r=+t;return u&&n&&(r>2**53-1||r<-(2**53-1))?BigInt(t):r}function h(e){f();var t=[],n=0;if(v()==`]`)return t;for(y();;){var r=e+`/`+n;t.push(d(r)),f();var i=v();if(i==`]`)break;i!=`,`&&E(),f(),n++}return t}function g(e){f();var t={};if(v()==`}`)return t;for(y();;){var n=w();v()!=`"`&&E();var r=p(),i=e+`/`+a(r);C(i,`key`,n),S(i,`keyEnd`),f(),v()!=`:`&&E(),f(),t[r]=d(i),f();var o=v();if(o==`}`)break;o!=`,`&&E(),f()}return t}function _(e){for(var t=0;t<e.length;t++)v()!==e[t]&&E()}function v(){ee();var t=e[l];return l++,c++,t}function y(){l--,c--}function b(){for(var e=4,t=0;e--;){t<<=4;var r=v().toLowerCase();r>=`a`&&r<=`f`?t+=r.charCodeAt()-n+10:r>=`0`&&r<=`9`?t+=+r:E()}return String.fromCharCode(t)}function x(){for(var t=``;e[l]>=`0`&&e[l]<=`9`;)t+=v();if(t.length)return t;ee(),T()}function S(e,t){C(e,t,w())}function C(e,t,n){o[e]=o[e]||{},o[e][t]=n}function w(){return{line:s,column:c,pos:l}}function T(){throw SyntaxError(`Unexpected token `+e[l]+` in JSON at position `+l)}function E(){y(),T()}function ee(){if(l>=e.length)throw SyntaxError(`Unexpected end of JSON input`)}};var r=/~/g,i=/\//g;function a(e){return e.replace(r,`~0`).replace(i,`~1`)}})),Fn=class extends Error{constructor(e,t){super(`${e} at position ${t}`),this.position=t}},In=32,Ln=10,Rn=9,zn=13,Bn=160,Vn=6158,Hn=8192,Un=8203,Wn=8239,Gn=8287,Kn=12288,qn=65279;function Jn(e){return/^[0-9A-Fa-f]$/.test(e)}function Yn(e){return e>=`0`&&e<=`9`}function Xn(e){return e>=` `}function Zn(e){return`,:[]/{}()
+`.includes(e)}function Qn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`}function $n(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`||e>=`0`&&e<=`9`}var er=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,tr=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function nr(e){return`,[]/{}
+`.includes(e)}function rr(e){return lr(e)||ir.test(e)}var ir=/^[[{\w-]$/;function ar(e){return e===`
`||e===`\r`||e===`	`||e===`\b`||e===`\f`}function or(e,t){let n=e.charCodeAt(t);return n===In||n===Ln||n===Rn||n===zn}function sr(e,t){let n=e.charCodeAt(t);return n===In||n===Rn||n===zn}function cr(e,t){let n=e.charCodeAt(t);return n===Bn||n===Vn||n>=Hn&&n<=Un||n===Wn||n===Gn||n===Kn||n===qn}function lr(e){return ur(e)||fr(e)}function ur(e){return e===`"`||e===`“`||e===`”`}function dr(e){return e===`"`}function fr(e){return e===`'`||e===`‘`||e===`’`||e==="`"||e===`´`}function pr(e){return e===`'`}function mr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=e.lastIndexOf(t);return r===-1?e:e.substring(0,r)+(n?``:e.substring(r+1))}function hr(e,t){let n=e.length;if(!or(e,n-1))return e+t;for(;or(e,n-1);)n--;return e.substring(0,n)+t+e.substring(n)}function gr(e,t,n){return e.substring(0,t)+e.substring(t+n)}function _r(e){return/[,\n][ \t\r]*$/.test(e)}var vr={"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},yr={'"':`"`,"\\":`\\`,"/":`/`,b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`};function br(e){let t=0,n=``;c(["```","[```","{```"]),i()||ne(),c(["```","```]","```}"]);let r=u(`,`);for(r&&a(),rr(e[t])&&_r(n)?(r||(n=hr(n,`,`)),g()):r&&(n=mr(n,`,`));e[t]===`}`||e[t]===`]`;)t++,a();if(t>=e.length)return n;te();function i(){a();let e=m()||h()||_()||y()||b()||S(!1)||C();return a(),e}function a(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=t,r=o(e);do r=s(),r&&=o(e);while(r);return t>n}function o(r){let i=r?or:sr,a=``;for(;;)if(i(e,t))a+=e[t],t++;else if(cr(e,t))a+=` `,t++;else break;return a.length>0?(n+=a,!0):!1}function s(){if(e[t]===`/`&&e[t+1]===`*`){for(;t<e.length&&!xr(e,t);)t++;return t+=2,!0}if(e[t]===`/`&&e[t+1]===`/`){for(;t<e.length&&e[t]!==`
`;)t++;return!0}return!1}function c(n){if(l(n)){if(Qn(e[t]))for(;t<e.length&&$n(e[t]);)t++;return a(),!0}return!1}function l(n){o(!0);for(let r of n){let n=t+r.length;if(e.slice(t,n)===r)return t=n,!0}return!1}function u(r){return e[t]===r?(n+=e[t],t++,!0):!1}function d(n){return e[t]===n?(t++,!0):!1}function f(){return d(`\\`)}function p(){return a(),e[t]===`.`&&e[t+1]===`.`&&e[t+2]===`.`?(t+=3,a(),d(`,`),!0):!1}function m(){if(e[t]===`{`){n+=`{`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`}`;){let o;if(r?(o=!0,r=!1):(o=u(`,`),o||(n=hr(n,`,`)),a()),p(),!(_()||S(!0))){e[t]===`}`||e[t]===`{`||e[t]===`]`||e[t]===`[`||e[t]===void 0?n=mr(n,`,`):re();break}a();let s=u(`:`),c=t>=e.length;s||(rr(e[t])||c?n=hr(n,`:`):ie()),i()||(s||c?n+=`null`:ie())}return e[t]===`}`?(n+=`}`,t++):n=hr(n,`}`),!0}return!1}function h(){if(e[t]===`[`){n+=`[`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`]`;)if(r?r=!1:u(`,`)||(n=hr(n,`,`)),p(),!i()){n=mr(n,`,`);break}return e[t]===`]`?(n+=`]`,t++):n=hr(n,`]`),!0}return!1}function g(){let e=!0,t=!0;for(;t;)e?e=!1:u(`,`)||(n=hr(n,`,`)),t=i();t||(n=mr(n,`,`)),n=`[\n${n}\n]`}function _(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=e[t]===`\\`;if(o&&=(t++,!0),lr(e[t])){let s=dr(e[t])?dr:pr(e[t])?pr:fr(e[t])?fr:ur,c=t,l=n.length,u=`"`;for(t++;;){if(t>=e.length){let i=w(t-1);return!r&&Zn(e.charAt(i))?(t=c,n=n.substring(0,l),_(!0)):(u=hr(u,`"`),n+=u,!0)}if(t===i)return u=hr(u,`"`),n+=u,!0;if(s(e[t])){let i=t,o=u.length;if(u+=`"`,t++,n+=u,a(!1),r||t>=e.length||Zn(e[t])||lr(e[t])||Yn(e[t]))return v(),!0;let s=w(i-1),d=e.charAt(s);if(d===`,`)return t=c,n=n.substring(0,l),_(!1,s);if(Zn(d))return t=c,n=n.substring(0,l),_(!0);n=n.substring(0,l),t=i+1,u=`${u.substring(0,o)}\\${u.substring(o)}`}else if(r&&nr(e[t])){if(e[t-1]===`:`&&er.test(e.substring(c+1,t+2)))for(;t<e.length&&tr.test(e[t]);)u+=e[t],t++;return u=hr(u,`"`),n+=u,v(),!0}else if(e[t]===`\\`){let n=e.charAt(t+1);if(yr[n]!==void 0)u+=e.slice(t,t+2),t+=2;else if(n===`u`){let n=2;for(;n<6&&Jn(e[t+n]);)n++;n===6?(u+=e.slice(t,t+6),t+=6):t+n>=e.length?t=e.length:ae()}else u+=n,t+=2}else{let n=e.charAt(t);n===`"`&&e[t-1]!==`\\`?(u+=`\\${n}`,t++):ar(n)?(u+=vr[n],t++):(Xn(n)||ee(n),u+=n,t++)}o&&f()}}return!1}function v(){let r=!1;for(a();e[t]===`+`;){r=!0,t++,a(),n=mr(n,`"`,!0);let e=n.length;n=_()?gr(n,e,1):hr(n,`"`)}return r}function y(){let r=t;if(e[t]===`-`){if(t++,T())return E(r),!0;if(!Yn(e[t]))return t=r,!1}for(;Yn(e[t]);)t++;if(e[t]===`.`){if(t++,T())return E(r),!0;if(!Yn(e[t]))return t=r,!1;for(;Yn(e[t]);)t++}if(e[t]===`e`||e[t]===`E`){if(t++,(e[t]===`-`||e[t]===`+`)&&t++,T())return E(r),!0;if(!Yn(e[t]))return t=r,!1;for(;Yn(e[t]);)t++}if(!T())return t=r,!1;if(t>r){let i=e.slice(r,t),a=/^0\d/.test(i);return n+=a?`"${i}"`:i,!0}return!1}function b(){return x(`true`,`true`)||x(`false`,`false`)||x(`null`,`null`)||x(`True`,`true`)||x(`False`,`false`)||x(`None`,`null`)}function x(r,i){return e.slice(t,t+r.length)===r?(n+=i,t+=r.length,!0):!1}function S(r){let a=t;if(Qn(e[t])){for(;t<e.length&&$n(e[t]);)t++;let n=t;for(;or(e,n);)n++;if(e[n]===`(`)return t=n+1,i(),e[t]===`)`&&(t++,e[t]===`;`&&t++),!0}for(;t<e.length&&!nr(e[t])&&!lr(e[t])&&(!r||e[t]!==`:`);)t++;if(e[t-1]===`:`&&er.test(e.substring(a,t+2)))for(;t<e.length&&tr.test(e[t]);)t++;if(t>a){for(;or(e,t-1)&&t>0;)t--;let r=e.slice(a,t);return n+=r===`undefined`?`null`:JSON.stringify(r),e[t]===`"`&&t++,!0}}function C(){if(e[t]===`/`){let r=t;for(t++;t<e.length&&(e[t]!==`/`||e[t-1]===`\\`);)t++;return t++,n+=JSON.stringify(e.substring(r,t)),!0}}function w(t){let n=t;for(;n>0&&or(e,n);)n--;return n}function T(){return t>=e.length||Zn(e[t])||or(e,t)}function E(r){n+=`${e.slice(r,t)}0`}function ee(e){throw new Fn(`Invalid character ${JSON.stringify(e)}`,t)}function te(){throw new Fn(`Unexpected character ${JSON.stringify(e[t])}`,t)}function ne(){throw new Fn(`Unexpected end of json string`,e.length)}function re(){throw new Fn(`Object key expected`,t)}function ie(){throw new Fn(`Colon expected`,t)}function ae(){throw new Fn(`Invalid unicode character "${e.slice(t,t+6)}"`,t)}}function xr(e,t){return e[t]===`*`&&e[t+1]===`/`}var Sr=e(Pn(),1),Cr=e=>Array.isArray(e),wr=e=>typeof e==`object`&&!!e&&!Cr(e),Tr=e=>typeof e==`string`,Er=(e,t)=>e===t?!0:e!==null&&t!==null&&typeof e==`object`&&typeof t==`object`&&Object.keys(e).length===Object.keys(t).length&&Object.entries(e).every(([e,n])=>Er(n,t[e])),Dr=(e,t)=>{let n=e?.[t];if(n!==void 0){if(!Object.hasOwn(e,t)||Array.isArray(e)&&!/^\d+$/.test(t)||typeof e!=`object`)throw TypeError(`Unsupported property "${t}"`);return n}};function Or(e){return(...t)=>{let n=t.map(e=>Vr(e)),r=n[0],i=n[1];return n.length===1?t=>e(r(t)):n.length===2?t=>e(r(t),i(t)):t=>e(...n.map(e=>e(t)))}}var kr={boolean:0,number:1,string:2},Ar=3,jr=(e,t)=>typeof e==typeof t&&typeof e in kr?e>t:!1,Mr=(e,t)=>Er(e,t)||jr(e,t),Nr=(e,t)=>typeof e==typeof t&&typeof e in kr?e<t:!1,Pr={pipe:(...e)=>{let t=e.map(e=>Vr(e));return e=>t.reduce((e,t)=>t(e),e)},object:e=>{let t=Object.keys(e).map(t=>[t,Vr(e[t])]);return e=>{let n={};for(let[r,i]of t)n[r]=i(e);return n}},array:(...e)=>{let t=e.map(e=>Vr(e));return e=>t.map(t=>t(e))},get:(...e)=>{if(e.length===0)return e=>e??null;if(e.length===1){let t=e[0];return e=>Dr(e,t)??null}return t=>{let n=t;for(let t of e)n=Dr(n,t);return n??null}},map:e=>{let t=Vr(e);return e=>e.map(t)},mapObject:e=>{let t=Vr(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t({key:r,value:e[r]});n[i.key]=i.value}return n}},mapKeys:e=>{let t=Vr(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t(r);n[i]=e[r]}return n}},mapValues:e=>{let t=Vr(e);return e=>{let n={};for(let r of Object.keys(e))n[r]=t(e[r]);return n}},filter:e=>{let t=Vr(e);return e=>e.filter(e=>Fr(t(e)))},sort:(e=[`get`],t)=>{let n=Vr(e),r=t===`desc`?-1:1;function i(e,t){let i=n(e),a=n(t);if(typeof i!=typeof a){let e=kr[typeof i]??Ar,t=kr[typeof a]??Ar;return e>t?r:e<t?-r:0}return typeof i in kr?i>a?r:i<a?-r:0:0}return e=>e.slice().sort(i)},reverse:()=>e=>e.toReversed(),pick:(...e)=>{let t=e.map(([e,...t])=>[t[t.length-1],Pr.get(...t)]),n=(e,t)=>{let n={};for(let[r,i]of t)n[r]=i(e);return n};return e=>Cr(e)?e.map(e=>n(e,t)):n(e,t)},groupBy:e=>{let t=Vr(e);return e=>{let n={};for(let r of e){let e=t(r);n[e]?n[e].push(r):n[e]=[r]}return n}},keyBy:e=>{let t=Vr(e);return e=>{let n={};for(let r of e){let e=t(r);e in n||(n[e]=r)}return n}},flatten:()=>e=>e.flat(),join:(e=``)=>t=>t.join(e),split:Or((e,t)=>t===void 0?e.trim().split(/\s+/):e.split(t)),substring:Or((e,t,n)=>e.slice(Math.max(t,0),n)),uniq:()=>e=>{let t=[];for(let n of e)t.findIndex(e=>Er(e,n))===-1&&t.push(n);return t},uniqBy:e=>t=>Object.values(Pr.keyBy(e)(t)),limit:e=>t=>t.slice(0,Math.max(e,0)),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>Ir(e,(e,t)=>e*t),sum:()=>e=>Cr(e)?e.reduce((e,t)=>e+t,0):Rr(),average:()=>e=>Cr(e)?e.length>0?e.reduce((e,t)=>e+t)/e.length:null:Rr(),min:()=>e=>Ir(e,(e,t)=>Math.min(e,t)),max:()=>e=>Ir(e,(e,t)=>Math.max(e,t)),and:Or((...e)=>Ir(e,(e,t)=>!!(e&&t))),or:Or((...e)=>Ir(e,(e,t)=>!!(e||t))),not:Or(e=>!e),exists:e=>{let t=e.slice(1),n=t.pop(),r=Pr.get(...t);return e=>{let t=r(e);return!!t&&Object.hasOwnProperty.call(t,n)}},if:(e,t,n)=>{let r=Vr(e),i=Vr(t),a=Vr(n);return e=>Fr(r(e))?i(e):a(e)},in:(e,t)=>{let n=Vr(e),r=Vr(t);return e=>{let t=n(e);return r(e).findIndex(e=>Er(e,t))!==-1}},"not in":(e,t)=>{let n=Pr.in(e,t);return e=>!n(e)},regex:(e,t,n)=>{let r=new RegExp(t,n),i=Vr(e);return e=>r.test(i(e))},match:(e,t,n)=>{let r=new RegExp(t,n),i=Vr(e);return e=>{let t=i(e).match(r);return t?Lr(t):null}},matchAll:(e,t,n)=>{let r=new RegExp(t,`${n??``}g`),i=Vr(e);return e=>Array.from(i(e).matchAll(r)).map(Lr)},eq:Or(Er),gt:Or(jr),gte:Or(Mr),lt:Or(Nr),lte:Or((e,t)=>Er(e,t)||Nr(e,t)),ne:Or((e,t)=>!Er(e,t)),add:Or((e,t)=>e+t),subtract:Or((e,t)=>e-t),multiply:Or((e,t)=>e*t),divide:Or((e,t)=>e/t),mod:Or((e,t)=>e%t),pow:Or((e,t)=>e**t),abs:Or(Math.abs),round:Or((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`),number:Or(e=>{let t=Number(e);return Number.isNaN(Number(e))?null:t}),string:Or(String)},Fr=e=>e!==null&&e!==0&&e!==!1,Ir=(e,t)=>(Cr(e)||Rr(),e.length===0?null:e.reduce(t)),Lr=e=>{let[t,...n]=e,r=e.groups;return n.length?r?{value:t,groups:n,namedGroups:r}:{value:t,groups:n}:{value:t}},Rr=()=>{zr(`Array expected`)},zr=e=>{throw TypeError(e)},Br=[];function Vr(e,t){Br.unshift({...Pr,...Br[0],...t?.functions});try{let t=Cr(e)?Hr(e,Br[0]):wr(e)?zr(`Function notation ["object", {...}] expected but got ${JSON.stringify(e)}`):()=>e;return n=>{try{return t(n)}catch(t){throw t.jsonquery=[{data:n,query:e},...t.jsonquery??[]],t}}}finally{Br.shift()}}function Hr(e,t){let[n,...r]=e,i=t[n];return i||zr(`Unknown function '${n}'`),i(...r)}var Ur=[{pow:`^`},{multiply:`*`,divide:`/`,mod:`%`},{add:`+`,subtract:`-`},{gt:`>`,gte:`>=`,lt:`<`,lte:`<=`,in:`in`,"not in":`not in`},{eq:`==`,ne:`!=`},{and:`and`},{or:`or`},{pipe:`|`}],Wr=[`|`,`and`,`or`],Gr=[`|`,`and`,`or`,`*`,`/`,`%`,`+`,`-`];function Kr(e,t){if(!Cr(t))throw Error(`Invalid custom operators`);return t.reduce(qr,e)}function qr(e,{name:t,op:n,at:r,after:i,before:a}){if(r)return e.map(e=>Object.values(e).includes(r)?{...e,[t]:n}:e);let o=i??a,s=e.findIndex(e=>Object.values(e).includes(o));if(s!==-1)return e.toSpliced(s+ +!!i,0,{[t]:n});throw Error(`Invalid custom operator`)}var Jr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Yr=/^[a-zA-Z_$][a-zA-Z\d_$]*/,Xr=/^"(?:[^"\\]|\\.)*"/,Zr=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Qr=/^(0|[1-9][0-9]*)/,$r=/^(true|false|null)/,ei=/^[ \n\t\r]+/;function ti(e,t){let n=t?.operators??[],r=Kr(Ur,n),i=Object.assign({},...r),a=Wr.concat(n.filter(e=>e.vararg).map(e=>e.op)),o=Gr.concat(n.filter(e=>e.leftAssociative).map(e=>e.op)),s=(t=r.length-1)=>{let n=r[t];if(!n)return l();let d=e[w]===`(`,f=s(t-1);for(;;){if(x(),e[w]===`.`&&`pipe`in n){let e=u();f=f[0]===`pipe`?[...f,e]:[`pipe`,f,e];continue}let r=w,l=c(n);if(!l)break;let p=s(t-1),m=l===f[0]&&!d;if(m&&!o.includes(i[l])){w=r;break}f=m&&a.includes(i[l])?[...f,p]:[l,f,p]}return f},c=t=>{let n=Object.keys(t).sort((e,t)=>t.length-e.length);for(let r of n){let n=t[r];if(e.substring(w,w+n.length)===n)return w+=n.length,x(),r}},l=()=>{if(x(),e[w]===`(`){w++;let e=s();return S(`)`),e}return u()},u=()=>{if(e[w]===`.`){let t=[];for(;e[w]===`.`;)w++,t.push(m()??h()??_()??C(`Property expected`)),x();return[`get`,...t]}return d()},d=()=>{let t=w,n=h();if(x(),!n||e[w]!==`(`)return w=t,f();w++,x();let r=e[w]===`)`?[]:[s()];for(;w<e.length&&e[w]!==`)`;)x(),S(`,`),r.push(s());return S(`)`),[n,...r]},f=()=>{if(e[w]===`{`){w++,x();let t={},n=!0;for(;w<e.length&&e[w]!==`}`;){n?n=!1:(S(`,`),x());let e=m()??h()??_()??C(`Key expected`);x(),S(`:`),t[e]=s()}return S(`}`),[`object`,t]}return p()},p=()=>{if(e[w]===`[`){w++,x();let t=[],n=!0;for(;w<e.length&&e[w]!==`]`;)n?n=!1:(S(`,`),x()),t.push(s());return S(`]`),[`array`,...t]}return m()??g()??v()},m=()=>b(Xr,JSON.parse),h=()=>b(Yr,e=>e),g=()=>b(Zr,JSON.parse),_=()=>b(Qr,JSON.parse),v=()=>{let e=b($r,JSON.parse);if(e!==void 0)return e;C(`Value expected`)},y=()=>{x(),w<e.length&&C(`Unexpected part '${e.substring(w)}'`)},b=(t,n)=>{let r=e.substring(w).match(t);if(r)return w+=r[0].length,n(r[0])},x=()=>b(ei,e=>e),S=t=>{e[w]!==t&&C(`Character '${t}' expected`),w++},C=(e,t=w)=>{throw SyntaxError(`${e} (pos: ${t})`)},w=0,T=s();return y(),T}var ni=40,ri=`  `,ii=(e,t)=>{let n=t?.indentation??ri,r=t?.operators??[],i=Kr(Ur,r),a=Object.assign({},...i),o=Gr.concat(r.filter(e=>e.leftAssociative).map(e=>e.op)),s=(e,t,n=!1)=>Cr(e)?c(e,t,n):JSON.stringify(e),c=(e,t,r)=>{let[c,...d]=e;if(c===`get`&&d.length>0)return u(d);if(c===`object`)return l(d[0],t);if(c===`array`)return f(d.map(e=>s(e,t)),[`[`,`, `,`]`],[`[
${t+n}`,`,
${t+n}`,`
${t}]`]);let p=a[c];if(p){let e=r?`(`:``,a=r?`)`:``;return f(d.map((e,r)=>{let a=e?.[0],l=i.findIndex(e=>c in e),u=i.findIndex(e=>a in e),d=l<u||l===u&&r>0||c===a&&!o.includes(p);return s(e,t+n,d)}),[e,` ${p} `,a],[e,`
${t+n}${p} `,a])}let m=d.length===1?t:t+n;return f(d.map(e=>s(e,m)),[`${c}(`,`, `,`)`],d.length===1?[`${c}(`,`,
${t}`,`)`]:[`${c}(
${m}`,`,
${m}`,`
${t})`])},l=(e,t)=>{let r=t+n;return f(Object.entries(e).map(([e,t])=>`${d(e)}: ${s(t,r)}`),[`{ `,`, `,` }`],[`{
${r}`,`,
${r}`,`
${t}}`])},u=e=>e.map(e=>`.${d(e)}`).join(``),d=e=>Jr.test(e)?e:JSON.stringify(e),f=(e,[n,r,i],[a,o,s])=>n.length+e.reduce((e,t)=>e+t.length+r.length,0)-r.length+i.length<=(t?.maxLineLength??ni)?n+e.join(r)+i:a+e.join(o)+s;return s(e,``)};function ai(e,t,n){return Vr(Tr(t)?ti(t,n):t,n)(e)}var oi={prefix:`far`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},si={prefix:`far`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z`]},ci={prefix:`far`,iconName:`lightbulb`,icon:[384,512,[128161],`f0eb`,`M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z`]},li={prefix:`far`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},ui={prefix:`fas`,iconName:`rotate`,icon:[512,512,[128260,`sync-alt`],`f2f1`,`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`]},di={prefix:`fas`,iconName:`paste`,icon:[512,512,[`file-clipboard`],`f0ea`,`M64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l112 0 0-224c0-61.9 50.1-112 112-112l64 0 0-48c0-35.3-28.7-64-64-64L64 0zM248 112l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm40 48c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.3-18.7-45.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7L288 160z`]},fi={prefix:`fas`,iconName:`crop-simple`,icon:[512,512,[`crop-alt`],`f565`,`M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32-32 0C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l208 0 0-64-208 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64l-208 0 0 64 208 0 0 352z`]},pi={prefix:`fas`,iconName:`filter`,icon:[512,512,[],`f0b0`,`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`]},mi={prefix:`fas`,iconName:`square-caret-down`,icon:[448,512,[`caret-square-down`],`f150`,`M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9S110.5 192 120 192l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z`]},hi={prefix:`fas`,iconName:`caret-right`,icon:[256,512,[],`f0da`,`M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z`]},gi={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},_i={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},vi={prefix:`fas`,iconName:`caret-left`,icon:[256,512,[],`f0d9`,`M7.7 235.8c-10.3 12.6-9.5 31.1 2.2 42.8l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128-2.2 2.4z`]},yi={prefix:`fas`,iconName:`chevron-up`,icon:[448,512,[],`f077`,`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`]},bi={prefix:`fas`,iconName:`circle-notch`,icon:[512,512,[],`f1ce`,`M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8-79.3 23.6-137.1 97.1-137.1 184.1 0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256 512 397.4 397.4 512 256 512S0 397.4 0 256c0-116 77.1-213.9 182.9-245.4 16.9-5 34.8 4.6 39.8 21.5z`]},xi={prefix:`fas`,iconName:`ellipsis-vertical`,icon:[128,512,[`ellipsis-v`],`f142`,`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`]},Si={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},Ci={prefix:`fas`,iconName:`clone`,icon:[512,512,[],`f24d`,`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`]},wi={prefix:`fas`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Ti={prefix:`fas`,iconName:`square-caret-up`,icon:[448,512,[`caret-square-up`],`f151`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S337.5 320 328 320l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z`]},Ei={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Di={prefix:`fas`,iconName:`angle-right`,icon:[256,512,[8250],`f105`,`M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z`]},Oi={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},ki={prefix:`fas`,iconName:`up-right-and-down-left-from-center`,icon:[512,512,[`expand-alt`],`f424`,`M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z`]},Ai={prefix:`fas`,iconName:`wrench`,icon:[576,512,[128295],`f0ad`,`M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z`]},ji={prefix:`fas`,iconName:`trash-can`,icon:[448,512,[61460,`trash-alt`],`f2ed`,`M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z`]},Mi={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},Ni={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},Pi=Ni,Fi=Ni,Ii={prefix:`fas`,iconName:`pen`,icon:[512,512,[128394],`f304`,`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`]},Li={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},Ri={prefix:`fas`,iconName:`angle-down`,icon:[384,512,[8964],`f107`,`M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},zi={prefix:`fas`,iconName:`arrow-down-short-wide`,icon:[576,512,[`sort-amount-desc`,`sort-amount-down-alt`],`f884`,`M246.6 374.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`]},Bi={prefix:`fas`,iconName:`triangle-exclamation`,icon:[512,512,[9888,`exclamation-triangle`,`warning`],`f071`,`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},Vi={prefix:`fas`,iconName:`scissors`,icon:[512,512,[9984,9986,9988,`cut`],`f0c4`,`M192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L256 192 216.5 152.5c4.9-12.6 7.5-26.2 7.5-40.5 0-61.9-50.1-112-112-112S0 50.1 0 112 50.1 224 112 224c14.3 0 27.9-2.7 40.5-7.5L192 256zm97.9 97.9L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6l-145.3-145.3-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z`]},Hi={prefix:`fas`,iconName:`arrow-right-arrow-left`,icon:[512,512,[8644,`exchange`],`f0ec`,`M502.6 150.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 160 32 160c-17.7 0-32-14.3-32-32S14.3 96 32 96l370.7 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 352 480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z`]},Ui={prefix:`fas`,iconName:`caret-up`,icon:[320,512,[],`f0d8`,`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`]},Wi={prefix:`fas`,iconName:`down-left-and-up-right-to-center`,icon:[512,512,[`compress-alt`],`f422`,`M439.5 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S450.2 240 440.5 240l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87zM72.5 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S62.8 272 72.5 272z`]},Gi={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]},Ki={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]},qi={prefix:`fas`,iconName:`arrow-rotate-right`,icon:[512,512,[8635,`arrow-right-rotate`,`arrow-rotate-forward`,`redo`],`f01e`,`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`]},Ji={prefix:`fas`,iconName:`caret-down`,icon:[320,512,[],`f0d7`,`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`]},Yi={prefix:`fas`,iconName:`arrow-rotate-left`,icon:[512,512,[8634,`arrow-left-rotate`,`arrow-rotate-back`,`arrow-rotate-backward`,`undo`],`f0e2`,`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`]},Xi={prefix:`fas`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z`]},Zi={prefix:`fas`,iconName:`arrow-down`,icon:[384,512,[8595],`f063`,`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},Qi=t(((e,t)=>{var n=function(e,t){var n,r,i=1,a=0,o=0,s=String.alphabet;function c(e,t,r){if(r){for(n=t;r=c(e,n),r<76&&r>65;)++n;return+e.slice(t-1,n)}return r=s&&s.indexOf(e.charAt(t)),r>-1?r+76:(r=e.charCodeAt(t)||0,r<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63)}if((e+=``)!=(t+=``)){for(;i;)if(r=c(e,a++),i=c(t,o++),r<76&&i<76&&r>66&&i>66&&(r=c(e,a,a),i=c(t,o,a=n),o=n),r!=i)return r<i?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}})),$i=t((e=>{(function(e){function t(e){return e===null?!1:Object.prototype.toString.call(e)===`[object Array]`}function n(e){return e===null?!1:Object.prototype.toString.call(e)===`[object Object]`}function r(e,i){if(e===i)return!0;if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(i))return!1;if(t(e)===!0){if(e.length!==i.length)return!1;for(var a=0;a<e.length;a++)if(r(e[a],i[a])===!1)return!1;return!0}if(n(e)===!0){var o={};for(var s in e)if(hasOwnProperty.call(e,s)){if(r(e[s],i[s])===!1)return!1;o[s]=!0}for(var c in i)if(hasOwnProperty.call(i,c)&&o[c]!==!0)return!1;return!0}return!1}function i(e){if(e===``||e===!1||e===null||t(e)&&e.length===0)return!0;if(n(e)){for(var r in e)if(e.hasOwnProperty(r))return!1;return!0}else return!1}function a(e){for(var t=Object.keys(e),n=[],r=0;r<t.length;r++)n.push(e[t[r]]);return n}var o=typeof String.prototype.trimLeft==`function`?function(e){return e.trimLeft()}:function(e){return e.match(/^\s*(.*)/)[1]},s=0,c=1,l=2,u=3,d=4,f=5,p=6,m=7,h=8,g=9,_={0:`number`,1:`any`,2:`string`,3:`array`,4:`object`,5:`boolean`,6:`expression`,7:`null`,8:`Array<number>`,9:`Array<string>`},v=`EOF`,y=`UnquotedIdentifier`,b=`QuotedIdentifier`,x=`Rbracket`,S=`Rparen`,C=`Comma`,w=`Colon`,T=`Rbrace`,E=`Number`,ee=`Current`,te=`Expref`,ne=`Pipe`,re=`Or`,ie=`And`,ae=`EQ`,oe=`GT`,se=`LT`,D=`GTE`,ce=`LTE`,le=`NE`,O=`Flatten`,ue=`Star`,de=`Filter`,fe=`Dot`,pe=`Not`,me=`Lbrace`,he=`Lbracket`,ge=`Lparen`,_e=`Literal`,k={".":fe,"*":ue,",":C,":":w,"{":me,"}":T,"]":x,"(":ge,")":S,"@":ee},ve={"<":!0,">":!0,"=":!0,"!":!0},A={" ":!0,"	":!0,"\n":!0};function j(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`}function M(e){return e>=`0`&&e<=`9`||e===`-`}function ye(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`_`}function be(){}be.prototype={tokenize:function(e){var t=[];this._current=0;for(var n,r,i;this._current<e.length;)if(j(e[this._current]))n=this._current,r=this._consumeUnquotedIdentifier(e),t.push({type:y,value:r,start:n});else if(k[e[this._current]]!==void 0)t.push({type:k[e[this._current]],value:e[this._current],start:this._current}),this._current++;else if(M(e[this._current]))i=this._consumeNumber(e),t.push(i);else if(e[this._current]===`[`)i=this._consumeLBracket(e),t.push(i);else if(e[this._current]===`"`)n=this._current,r=this._consumeQuotedIdentifier(e),t.push({type:b,value:r,start:n});else if(e[this._current]===`'`)n=this._current,r=this._consumeRawStringLiteral(e),t.push({type:_e,value:r,start:n});else if(e[this._current]==="`"){n=this._current;var a=this._consumeLiteral(e);t.push({type:_e,value:a,start:n})}else if(ve[e[this._current]]!==void 0)t.push(this._consumeOperator(e));else if(A[e[this._current]]!==void 0)this._current++;else if(e[this._current]===`&`)n=this._current,this._current++,e[this._current]===`&`?(this._current++,t.push({type:ie,value:`&&`,start:n})):t.push({type:te,value:`&`,start:n});else if(e[this._current]===`|`)n=this._current,this._current++,e[this._current]===`|`?(this._current++,t.push({type:re,value:`||`,start:n})):t.push({type:ne,value:`|`,start:n});else{var o=Error(`Unknown character:`+e[this._current]);throw o.name=`LexerError`,o}return t},_consumeUnquotedIdentifier:function(e){var t=this._current;for(this._current++;this._current<e.length&&ye(e[this._current]);)this._current++;return e.slice(t,this._current)},_consumeQuotedIdentifier:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`"`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`"`)?r+=2:r++,this._current=r}return this._current++,JSON.parse(e.slice(t,this._current))},_consumeRawStringLiteral:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`'`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`'`)?r+=2:r++,this._current=r}return this._current++,e.slice(t+1,this._current-1).replace(`\\'`,`'`)},_consumeNumber:function(e){var t=this._current;this._current++;for(var n=e.length;M(e[this._current])&&this._current<n;)this._current++;return{type:E,value:parseInt(e.slice(t,this._current)),start:t}},_consumeLBracket:function(e){var t=this._current;return this._current++,e[this._current]===`?`?(this._current++,{type:de,value:`[?`,start:t}):e[this._current]===`]`?(this._current++,{type:O,value:`[]`,start:t}):{type:he,value:`[`,start:t}},_consumeOperator:function(e){var t=this._current,n=e[t];if(this._current++,n===`!`)return e[this._current]===`=`?(this._current++,{type:le,value:`!=`,start:t}):{type:pe,value:`!`,start:t};if(n===`<`)return e[this._current]===`=`?(this._current++,{type:ce,value:`<=`,start:t}):{type:se,value:`<`,start:t};if(n===`>`)return e[this._current]===`=`?(this._current++,{type:D,value:`>=`,start:t}):{type:oe,value:`>`,start:t};if(n===`=`&&e[this._current]===`=`)return this._current++,{type:ae,value:`==`,start:t}},_consumeLiteral:function(e){this._current++;for(var t=this._current,n=e.length,r;e[this._current]!=="`"&&this._current<n;){var i=this._current;e[i]===`\\`&&(e[i+1]===`\\`||e[i+1]==="`")?i+=2:i++,this._current=i}var a=o(e.slice(t,this._current));return a=a.replace("\\`","`"),r=this._looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"`+a+`"`),this._current++,r},_looksLikeJSON:function(e){var t=`[{"`,n=[`true`,`false`,`null`],r=`-0123456789`;if(e===``)return!1;if(t.indexOf(e[0])>=0||n.indexOf(e)>=0)return!0;if(r.indexOf(e[0])>=0)try{return JSON.parse(e),!0}catch{return!1}else return!1}};var N={};N[v]=0,N[y]=0,N[b]=0,N[x]=0,N[S]=0,N[C]=0,N[T]=0,N[E]=0,N[ee]=0,N[te]=0,N[ne]=1,N[re]=2,N[ie]=3,N[ae]=5,N[oe]=5,N[se]=5,N[D]=5,N[ce]=5,N[le]=5,N[O]=9,N[ue]=20,N[de]=21,N[fe]=40,N[pe]=45,N[me]=50,N[he]=55,N[ge]=60;function P(){}P.prototype={parse:function(e){this._loadTokens(e),this.index=0;var t=this.expression(0);if(this._lookahead(0)!==v){var n=this._lookaheadToken(0),r=Error(`Unexpected token type: `+n.type+`, value: `+n.value);throw r.name=`ParserError`,r}return t},_loadTokens:function(e){var t=new be().tokenize(e);t.push({type:v,value:``,start:e.length}),this.tokens=t},expression:function(e){var t=this._lookaheadToken(0);this._advance();for(var n=this.nud(t),r=this._lookahead(0);e<N[r];)this._advance(),n=this.led(r,n),r=this._lookahead(0);return n},_lookahead:function(e){return this.tokens[this.index+e].type},_lookaheadToken:function(e){return this.tokens[this.index+e]},_advance:function(){this.index++},nud:function(e){var t,n,r;switch(e.type){case _e:return{type:`Literal`,value:e.value};case y:return{type:`Field`,name:e.value};case b:var i={type:`Field`,name:e.value};if(this._lookahead(0)===ge)throw Error(`Quoted identifier not allowed for function names.`);return i;case pe:return n=this.expression(N.Not),{type:`NotExpression`,children:[n]};case ue:return t={type:`Identity`},n=null,n=this._lookahead(0)===x?{type:`Identity`}:this._parseProjectionRHS(N.Star),{type:`ValueProjection`,children:[t,n]};case de:return this.led(e.type,{type:`Identity`});case me:return this._parseMultiselectHash();case O:return t={type:O,children:[{type:`Identity`}]},n=this._parseProjectionRHS(N.Flatten),{type:`Projection`,children:[t,n]};case he:return this._lookahead(0)===E||this._lookahead(0)===w?(n=this._parseIndexExpression(),this._projectIfSlice({type:`Identity`},n)):this._lookahead(0)===ue&&this._lookahead(1)===x?(this._advance(),this._advance(),n=this._parseProjectionRHS(N.Star),{type:`Projection`,children:[{type:`Identity`},n]}):this._parseMultiselectList();case ee:return{type:ee};case te:return r=this.expression(N.Expref),{type:`ExpressionReference`,children:[r]};case ge:for(var a=[];this._lookahead(0)!==S;)this._lookahead(0)===ee?(r={type:ee},this._advance()):r=this.expression(0),a.push(r);return this._match(S),a[0];default:this._errorToken(e)}},led:function(e,t){var n;switch(e){case fe:var r=N.Dot;return this._lookahead(0)===ue?(this._advance(),n=this._parseProjectionRHS(r),{type:`ValueProjection`,children:[t,n]}):(n=this._parseDotRHS(r),{type:`Subexpression`,children:[t,n]});case ne:return n=this.expression(N.Pipe),{type:ne,children:[t,n]};case re:return n=this.expression(N.Or),{type:`OrExpression`,children:[t,n]};case ie:return n=this.expression(N.And),{type:`AndExpression`,children:[t,n]};case ge:for(var i=t.name,a=[],o,s;this._lookahead(0)!==S;)this._lookahead(0)===ee?(o={type:ee},this._advance()):o=this.expression(0),this._lookahead(0)===C&&this._match(C),a.push(o);return this._match(S),s={type:`Function`,name:i,children:a},s;case de:var c=this.expression(0);return this._match(x),n=this._lookahead(0)===O?{type:`Identity`}:this._parseProjectionRHS(N.Filter),{type:`FilterProjection`,children:[t,n,c]};case O:return{type:`Projection`,children:[{type:O,children:[t]},this._parseProjectionRHS(N.Flatten)]};case ae:case le:case oe:case D:case se:case ce:return this._parseComparator(t,e);case he:var l=this._lookaheadToken(0);return l.type===E||l.type===w?(n=this._parseIndexExpression(),this._projectIfSlice(t,n)):(this._match(ue),this._match(x),n=this._parseProjectionRHS(N.Star),{type:`Projection`,children:[t,n]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(e){if(this._lookahead(0)===e)this._advance();else{var t=this._lookaheadToken(0),n=Error(`Expected `+e+`, got: `+t.type);throw n.name=`ParserError`,n}},_errorToken:function(e){var t=Error(`Invalid token (`+e.type+`): "`+e.value+`"`);throw t.name=`ParserError`,t},_parseIndexExpression:function(){if(this._lookahead(0)===w||this._lookahead(1)===w)return this._parseSliceExpression();var e={type:`Index`,value:this._lookaheadToken(0).value};return this._advance(),this._match(x),e},_projectIfSlice:function(e,t){var n={type:`IndexExpression`,children:[e,t]};return t.type===`Slice`?{type:`Projection`,children:[n,this._parseProjectionRHS(N.Star)]}:n},_parseSliceExpression:function(){for(var e=[null,null,null],t=0,n=this._lookahead(0);n!==x&&t<3;){if(n===w)t++,this._advance();else if(n===E)e[t]=this._lookaheadToken(0).value,this._advance();else{var r=this._lookahead(0),i=Error(`Syntax error, unexpected token: `+r.value+`(`+r.type+`)`);throw i.name=`Parsererror`,i}n=this._lookahead(0)}return this._match(x),{type:`Slice`,children:e}},_parseComparator:function(e,t){return{type:`Comparator`,name:t,children:[e,this.expression(N[t])]}},_parseDotRHS:function(e){var t=this._lookahead(0);if([y,b,ue].indexOf(t)>=0)return this.expression(e);if(t===he)return this._match(he),this._parseMultiselectList();if(t===me)return this._match(me),this._parseMultiselectHash()},_parseProjectionRHS:function(e){var t;if(N[this._lookahead(0)]<10)t={type:`Identity`};else if(this._lookahead(0)===he)t=this.expression(e);else if(this._lookahead(0)===de)t=this.expression(e);else if(this._lookahead(0)===fe)this._match(fe),t=this._parseDotRHS(e);else{var n=this._lookaheadToken(0),r=Error(`Sytanx error, unexpected token: `+n.value+`(`+n.type+`)`);throw r.name=`ParserError`,r}return t},_parseMultiselectList:function(){for(var e=[];this._lookahead(0)!==x;){var t=this.expression(0);if(e.push(t),this._lookahead(0)===C&&(this._match(C),this._lookahead(0)===x))throw Error(`Unexpected token Rbracket`)}return this._match(x),{type:`MultiSelectList`,children:e}},_parseMultiselectHash:function(){for(var e=[],t=[y,b],n,r,i,a;;){if(n=this._lookaheadToken(0),t.indexOf(n.type)<0)throw Error(`Expecting an identifier token, got: `+n.type);if(r=n.value,this._advance(),this._match(w),i=this.expression(0),a={type:`KeyValuePair`,name:r,value:i},e.push(a),this._lookahead(0)===C)this._match(C);else if(this._lookahead(0)===T){this._match(T);break}}return{type:`MultiSelectHash`,children:e}}};function xe(e){this.runtime=e}xe.prototype={search:function(e,t){return this.visit(e,t)},visit:function(e,o){var s,c,l,u,d,f,p,m,h,g;switch(e.type){case`Field`:return o!==null&&n(o)?(f=o[e.name],f===void 0?null:f):null;case`Subexpression`:for(l=this.visit(e.children[0],o),g=1;g<e.children.length;g++)if(l=this.visit(e.children[1],l),l===null)return null;return l;case`IndexExpression`:return p=this.visit(e.children[0],o),m=this.visit(e.children[1],p),m;case`Index`:if(!t(o))return null;var _=e.value;return _<0&&(_=o.length+_),l=o[_],l===void 0&&(l=null),l;case`Slice`:if(!t(o))return null;var v=e.children.slice(0),y=this.computeSliceParams(o.length,v),b=y[0],x=y[1],S=y[2];if(l=[],S>0)for(g=b;g<x;g+=S)l.push(o[g]);else for(g=b;g>x;g+=S)l.push(o[g]);return l;case`Projection`:var C=this.visit(e.children[0],o);if(!t(C))return null;for(h=[],g=0;g<C.length;g++)c=this.visit(e.children[1],C[g]),c!==null&&h.push(c);return h;case`ValueProjection`:if(C=this.visit(e.children[0],o),!n(C))return null;h=[];var w=a(C);for(g=0;g<w.length;g++)c=this.visit(e.children[1],w[g]),c!==null&&h.push(c);return h;case`FilterProjection`:if(C=this.visit(e.children[0],o),!t(C))return null;var T=[],E=[];for(g=0;g<C.length;g++)s=this.visit(e.children[2],C[g]),i(s)||T.push(C[g]);for(var re=0;re<T.length;re++)c=this.visit(e.children[1],T[re]),c!==null&&E.push(c);return E;case`Comparator`:switch(u=this.visit(e.children[0],o),d=this.visit(e.children[1],o),e.name){case ae:l=r(u,d);break;case le:l=!r(u,d);break;case oe:l=u>d;break;case D:l=u>=d;break;case se:l=u<d;break;case ce:l=u<=d;break;default:throw Error(`Unknown comparator: `+e.name)}return l;case O:var ie=this.visit(e.children[0],o);if(!t(ie))return null;var ue=[];for(g=0;g<ie.length;g++)c=ie[g],t(c)?ue.push.apply(ue,c):ue.push(c);return ue;case`Identity`:return o;case`MultiSelectList`:if(o===null)return null;for(h=[],g=0;g<e.children.length;g++)h.push(this.visit(e.children[g],o));return h;case`MultiSelectHash`:if(o===null)return null;h={};var de;for(g=0;g<e.children.length;g++)de=e.children[g],h[de.name]=this.visit(de.value,o);return h;case`OrExpression`:return s=this.visit(e.children[0],o),i(s)&&(s=this.visit(e.children[1],o)),s;case`AndExpression`:return u=this.visit(e.children[0],o),i(u)===!0?u:this.visit(e.children[1],o);case`NotExpression`:return u=this.visit(e.children[0],o),i(u);case`Literal`:return e.value;case ne:return p=this.visit(e.children[0],o),this.visit(e.children[1],p);case ee:return o;case`Function`:var fe=[];for(g=0;g<e.children.length;g++)fe.push(this.visit(e.children[g],o));return this.runtime.callFunction(e.name,fe);case`ExpressionReference`:var pe=e.children[0];return pe.jmespathType=te,pe;default:throw Error(`Unknown node type: `+e.type)}},computeSliceParams:function(e,t){var n=t[0],r=t[1],i=t[2],a=[null,null,null];if(i===null)i=1;else if(i===0){var o=Error(`Invalid slice, step cannot be 0`);throw o.name=`RuntimeError`,o}var s=i<0;return n=n===null?s?e-1:0:this.capSliceRange(e,n,i),r=r===null?s?-1:e:this.capSliceRange(e,r,i),a[0]=n,a[1]=r,a[2]=i,a},capSliceRange:function(e,t,n){return t<0?(t+=e,t<0&&(t=n<0?-1:0)):t>=e&&(t=n<0?e-1:e),t}};function Se(e){this._interpreter=e,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[s]}]},avg:{_func:this._functionAvg,_signature:[{types:[h]}]},ceil:{_func:this._functionCeil,_signature:[{types:[s]}]},contains:{_func:this._functionContains,_signature:[{types:[l,u]},{types:[c]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[l]},{types:[l]}]},floor:{_func:this._functionFloor,_signature:[{types:[s]}]},length:{_func:this._functionLength,_signature:[{types:[l,u,d]}]},map:{_func:this._functionMap,_signature:[{types:[p]},{types:[u]}]},max:{_func:this._functionMax,_signature:[{types:[h,g]}]},merge:{_func:this._functionMerge,_signature:[{types:[d],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[u]},{types:[p]}]},sum:{_func:this._functionSum,_signature:[{types:[h]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[l]},{types:[l]}]},min:{_func:this._functionMin,_signature:[{types:[h,g]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[u]},{types:[p]}]},type:{_func:this._functionType,_signature:[{types:[c]}]},keys:{_func:this._functionKeys,_signature:[{types:[d]}]},values:{_func:this._functionValues,_signature:[{types:[d]}]},sort:{_func:this._functionSort,_signature:[{types:[g,h]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[u]},{types:[p]}]},join:{_func:this._functionJoin,_signature:[{types:[l]},{types:[g]}]},reverse:{_func:this._functionReverse,_signature:[{types:[l,u]}]},to_array:{_func:this._functionToArray,_signature:[{types:[c]}]},to_string:{_func:this._functionToString,_signature:[{types:[c]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[c]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[c],variadic:!0}]}}}Se.prototype={callFunction:function(e,t){var n=this.functionTable[e];if(n===void 0)throw Error(`Unknown function: `+e+`()`);return this._validateArgs(e,t,n._signature),n._func.call(this,t)},_validateArgs:function(e,t,n){var r;if(n[n.length-1].variadic){if(t.length<n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes at least`+n.length+r+` but received `+t.length)}else if(t.length!==n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes `+n.length+r+` but received `+t.length);for(var i,a,o,s=0;s<n.length;s++){o=!1,i=n[s].types,a=this._getTypeName(t[s]);for(var c=0;c<i.length;c++)if(this._typeMatches(a,i[c],t[s])){o=!0;break}if(!o){var l=i.map(function(e){return _[e]}).join(`,`);throw Error(`TypeError: `+e+`() expected argument `+(s+1)+` to be type `+l+` but received type `+_[a]+` instead.`)}}},_typeMatches:function(e,t,n){if(t===c)return!0;if(t===g||t===h||t===u){if(t===u)return e===u;if(e===u){var r;t===h?r=s:t===g&&(r=l);for(var i=0;i<n.length;i++)if(!this._typeMatches(this._getTypeName(n[i]),r,n[i]))return!1;return!0}}else return e===t},_getTypeName:function(e){switch(Object.prototype.toString.call(e)){case`[object String]`:return l;case`[object Number]`:return s;case`[object Array]`:return u;case`[object Boolean]`:return f;case`[object Null]`:return m;case`[object Object]`:return e.jmespathType===te?p:d}},_functionStartsWith:function(e){return e[0].lastIndexOf(e[1])===0},_functionEndsWith:function(e){var t=e[0],n=e[1];return t.indexOf(n,t.length-n.length)!==-1},_functionReverse:function(e){if(this._getTypeName(e[0])===l){for(var t=e[0],n=``,r=t.length-1;r>=0;r--)n+=t[r];return n}else{var i=e[0].slice(0);return i.reverse(),i}},_functionAbs:function(e){return Math.abs(e[0])},_functionCeil:function(e){return Math.ceil(e[0])},_functionAvg:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t/n.length},_functionContains:function(e){return e[0].indexOf(e[1])>=0},_functionFloor:function(e){return Math.floor(e[0])},_functionLength:function(e){return n(e[0])?Object.keys(e[0]).length:e[0].length},_functionMap:function(e){for(var t=[],n=this._interpreter,r=e[0],i=e[1],a=0;a<i.length;a++)t.push(n.visit(r,i[a]));return t},_functionMerge:function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var i in r)t[i]=r[i]}return t},_functionMax:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.max.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)n.localeCompare(t[r])<0&&(n=t[r]);return n}else return null},_functionMin:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.min.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)t[r].localeCompare(n)<0&&(n=t[r]);return n}else return null},_functionSum:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t},_functionType:function(e){switch(this._getTypeName(e[0])){case s:return`number`;case l:return`string`;case u:return`array`;case d:return`object`;case f:return`boolean`;case p:return`expref`;case m:return`null`}},_functionKeys:function(e){return Object.keys(e[0])},_functionValues:function(e){for(var t=e[0],n=Object.keys(t),r=[],i=0;i<n.length;i++)r.push(t[n[i]]);return r},_functionJoin:function(e){var t=e[0];return e[1].join(t)},_functionToArray:function(e){return this._getTypeName(e[0])===u?e[0]:[e[0]]},_functionToString:function(e){return this._getTypeName(e[0])===l?e[0]:JSON.stringify(e[0])},_functionToNumber:function(e){var t=this._getTypeName(e[0]),n;return t===s?e[0]:t===l&&(n=+e[0],!isNaN(n))?n:null},_functionNotNull:function(e){for(var t=0;t<e.length;t++)if(this._getTypeName(e[t])!==m)return e[t];return null},_functionSort:function(e){var t=e[0].slice(0);return t.sort(),t},_functionSortBy:function(e){var t=e[0].slice(0);if(t.length===0)return t;var n=this._interpreter,r=e[1],i=this._getTypeName(n.visit(r,t[0]));if([s,l].indexOf(i)<0)throw Error(`TypeError`);for(var a=this,o=[],c=0;c<t.length;c++)o.push([c,t[c]]);o.sort(function(e,t){var o=n.visit(r,e[1]),s=n.visit(r,t[1]);if(a._getTypeName(o)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(o));if(a._getTypeName(s)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(s));return o>s?1:o<s?-1:e[0]-t[0]});for(var u=0;u<o.length;u++)t[u]=o[u][1];return t},_functionMaxBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=-1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o>i&&(i=o,a=n[c]);return a},_functionMinBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o<i&&(i=o,a=n[c]);return a},createKeyFunction:function(e,t){var n=this,r=this._interpreter;return function(i){var a=r.visit(e,i);if(t.indexOf(n._getTypeName(a))<0){var o=`TypeError: expected one of `+t+`, received `+n._getTypeName(a);throw Error(o)}return a}}};function Ce(e){return new P().parse(e)}function we(e){return new be().tokenize(e)}function Te(e,t){var n=new P,r=new Se,i=new xe(r);r._interpreter=i;var a=n.parse(t);return i.search(a,e)}e.tokenize=we,e.compile=Ce,e.search=Te,e.strictDeepEqual=r})(e===void 0?e.jmespath={}:e)})),ea=e(Qi(),1);$i();var ta=class{add(e,t,n){if(typeof arguments[0]!=`string`)for(let e in arguments[0])this.add(e,arguments[0][e],arguments[1]);else (Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},na=class{constructor(e){this.jsep=e,this.registered={}}register(){[...arguments].forEach(e=>{if(typeof e!=`object`||!e.name||!e.init)throw Error(`Invalid JSEP plugin format`);this.registered[e.name]||(e.init(this.jsep),this.registered[e.name]=e)})}},ra=class e{static get version(){return`1.4.0`}static toString(){return`JavaScript Expression Parser (JSEP) v`+e.version}static addUnaryOp(t){return e.max_unop_len=Math.max(t.length,e.max_unop_len),e.unary_ops[t]=1,e}static addBinaryOp(t,n,r){return e.max_binop_len=Math.max(t.length,e.max_binop_len),e.binary_ops[t]=n,r?e.right_associative.add(t):e.right_associative.delete(t),e}static addIdentifierChar(t){return e.additional_identifier_chars.add(t),e}static addLiteral(t,n){return e.literals[t]=n,e}static removeUnaryOp(t){return delete e.unary_ops[t],t.length===e.max_unop_len&&(e.max_unop_len=e.getMaxKeyLen(e.unary_ops)),e}static removeAllUnaryOps(){return e.unary_ops={},e.max_unop_len=0,e}static removeIdentifierChar(t){return e.additional_identifier_chars.delete(t),e}static removeBinaryOp(t){return delete e.binary_ops[t],t.length===e.max_binop_len&&(e.max_binop_len=e.getMaxKeyLen(e.binary_ops)),e.right_associative.delete(t),e}static removeAllBinaryOps(){return e.binary_ops={},e.max_binop_len=0,e}static removeLiteral(t){return delete e.literals[t],e}static removeAllLiterals(){return e.literals={},e}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(e){this.expr=e,this.index=0}static parse(t){return new e(t).parse()}static getMaxKeyLen(e){return Math.max(0,...Object.keys(e).map(e=>e.length))}static isDecimalDigit(e){return e>=48&&e<=57}static binaryPrecedence(t){return e.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!e.binary_ops[String.fromCharCode(t)]||e.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return e.isIdentifierStart(t)||e.isDecimalDigit(t)}throwError(e){let t=Error(e+` at character `+this.index);throw t.index=this.index,t.description=e,t}runHook(t,n){if(e.hooks[t]){let r={context:this,node:n};return e.hooks.run(t,r),r.node}return n}searchHook(t){if(e.hooks[t]){let n={context:this};return e.hooks[t].find(function(e){return e.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let t=this.code;for(;t===e.SPACE_CODE||t===e.TAB_CODE||t===e.LF_CODE||t===e.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook(`gobble-spaces`)}parse(){this.runHook(`before-all`);let t=this.gobbleExpressions(),n=t.length===1?t[0]:{type:e.COMPOUND,body:t};return this.runHook(`after-all`,n)}gobbleExpressions(t){let n=[],r,i;for(;this.index<this.expr.length;)if(r=this.code,r===e.SEMCOL_CODE||r===e.COMMA_CODE)this.index++;else if(i=this.gobbleExpression())n.push(i);else if(this.index<this.expr.length){if(r===t)break;this.throwError(`Unexpected "`+this.char+`"`)}return n}gobbleExpression(){let e=this.searchHook(`gobble-expression`)||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook(`after-expression`,e)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,e.max_binop_len),n=t.length;for(;n>0;){if(e.binary_ops.hasOwnProperty(t)&&(!e.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=n,t;t=t.substr(0,--n)}return!1}gobbleBinaryExpression(){let t,n,r,i,a,o,s,c,l;if(o=this.gobbleToken(),!o||(n=this.gobbleBinaryOp(),!n))return o;for(a={value:n,prec:e.binaryPrecedence(n),right_a:e.right_associative.has(n)},s=this.gobbleToken(),s||this.throwError(`Expected expression after `+n),i=[o,a,s];n=this.gobbleBinaryOp();){if(r=e.binaryPrecedence(n),r===0){this.index-=n.length;break}a={value:n,prec:r,right_a:e.right_associative.has(n)},l=n;let c=e=>a.right_a&&e.right_a?r>e.prec:r<=e.prec;for(;i.length>2&&c(i[i.length-2]);)s=i.pop(),n=i.pop().value,o=i.pop(),t={type:e.BINARY_EXP,operator:n,left:o,right:s},i.push(t);t=this.gobbleToken(),t||this.throwError(`Expected expression after `+l),i.push(a,t)}for(c=i.length-1,t=i[c];c>1;)t={type:e.BINARY_EXP,operator:i[c-1].value,left:i[c-2],right:t},c-=2;return t}gobbleToken(){let t,n,r,i;if(this.gobbleSpaces(),i=this.searchHook(`gobble-token`),i)return this.runHook(`after-token`,i);if(t=this.code,e.isDecimalDigit(t)||t===e.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===e.SQUOTE_CODE||t===e.DQUOTE_CODE)i=this.gobbleStringLiteral();else if(t===e.OBRACK_CODE)i=this.gobbleArray();else{for(n=this.expr.substr(this.index,e.max_unop_len),r=n.length;r>0;){if(e.unary_ops.hasOwnProperty(n)&&(!e.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=r;let t=this.gobbleToken();return t||this.throwError(`missing unaryOp argument`),this.runHook(`after-token`,{type:e.UNARY_EXP,operator:n,argument:t,prefix:!0})}n=n.substr(0,--r)}e.isIdentifierStart(t)?(i=this.gobbleIdentifier(),e.literals.hasOwnProperty(i.name)?i={type:e.LITERAL,value:e.literals[i.name],raw:i.name}:i.name===e.this_str&&(i={type:e.THIS_EXP})):t===e.OPAREN_CODE&&(i=this.gobbleGroup())}return i?(i=this.gobbleTokenProperty(i),this.runHook(`after-token`,i)):this.runHook(`after-token`,!1)}gobbleTokenProperty(t){this.gobbleSpaces();let n=this.code;for(;n===e.PERIOD_CODE||n===e.OBRACK_CODE||n===e.OPAREN_CODE||n===e.QUMARK_CODE;){let r;if(n===e.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==e.PERIOD_CODE)break;r=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===e.OBRACK_CODE?(t={type:e.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError(`Unexpected "`+this.char+`"`),this.gobbleSpaces(),n=this.code,n!==e.CBRACK_CODE&&this.throwError(`Unclosed [`),this.index++):n===e.OPAREN_CODE?t={type:e.CALL_EXP,arguments:this.gobbleArguments(e.CPAREN_CODE),callee:t}:(n===e.PERIOD_CODE||r)&&(r&&this.index--,this.gobbleSpaces(),t={type:e.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),r&&(t.optional=!0),this.gobbleSpaces(),n=this.code}return t}gobbleNumericLiteral(){let t=``,n,r;for(;e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===e.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(n=this.char,n===`e`||n===`E`){for(t+=this.expr.charAt(this.index++),n=this.char,(n===`+`||n===`-`)&&(t+=this.expr.charAt(this.index++));e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError(`Expected exponent (`+t+this.char+`)`)}return r=this.code,e.isIdentifierStart(r)?this.throwError(`Variable names cannot start with a number (`+t+this.char+`)`):(r===e.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===e.PERIOD_CODE)&&this.throwError(`Unexpected period`),{type:e.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t=``,n=this.index,r=this.expr.charAt(this.index++),i=!1;for(;this.index<this.expr.length;){let e=this.expr.charAt(this.index++);if(e===r){i=!0;break}else if(e===`\\`)switch(e=this.expr.charAt(this.index++),e){case`n`:t+=`
`;break;case`r`:t+=`\r`;break;case`t`:t+=`	`;break;case`b`:t+=`\b`;break;case`f`:t+=`\f`;break;case`v`:t+=`\v`;break;default:t+=e}else t+=e}return i||this.throwError(`Unclosed quote after "`+t+`"`),{type:e.LITERAL,value:t,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let t=this.code,n=this.index;for(e.isIdentifierStart(t)?this.index++:this.throwError(`Unexpected `+this.char);this.index<this.expr.length&&(t=this.code,e.isIdentifierPart(t));)this.index++;return{type:e.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(t){let n=[],r=!1,i=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){r=!0,this.index++,t===e.CPAREN_CODE&&i&&i>=n.length&&this.throwError(`Unexpected token `+String.fromCharCode(t));break}else if(a===e.COMMA_CODE){if(this.index++,i++,i!==n.length){if(t===e.CPAREN_CODE)this.throwError(`Unexpected token ,`);else if(t===e.CBRACK_CODE)for(let e=n.length;e<i;e++)n.push(null)}}else if(n.length!==i&&i!==0)this.throwError(`Expected comma`);else{let t=this.gobbleExpression();(!t||t.type===e.COMPOUND)&&this.throwError(`Expected comma`),n.push(t)}}return r||this.throwError(`Expected `+String.fromCharCode(t)),n}gobbleGroup(){this.index++;let t=this.gobbleExpressions(e.CPAREN_CODE);if(this.code===e.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:e.SEQUENCE_EXP,expressions:t}:!1;this.throwError(`Unclosed (`)}gobbleArray(){return this.index++,{type:e.ARRAY_EXP,elements:this.gobbleArguments(e.CBRACK_CODE)}}},ia=new ta;Object.assign(ra,{hooks:ia,plugins:new na(ra),COMPOUND:`Compound`,SEQUENCE_EXP:`SequenceExpression`,IDENTIFIER:`Identifier`,MEMBER_EXP:`MemberExpression`,LITERAL:`Literal`,THIS_EXP:`ThisExpression`,CALL_EXP:`CallExpression`,UNARY_EXP:`UnaryExpression`,BINARY_EXP:`BinaryExpression`,ARRAY_EXP:`ArrayExpression`,TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set([`**`]),additional_identifier_chars:new Set([`$`,`_`]),literals:{true:!0,false:!1,null:null},this_str:`this`}),ra.max_unop_len=ra.getMaxKeyLen(ra.unary_ops),ra.max_binop_len=ra.getMaxKeyLen(ra.binary_ops);var aa=e=>new ra(e).parse(),oa=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(ra).filter(e=>!oa.includes(e)&&aa[e]===void 0).forEach(e=>{aa[e]=ra[e]}),aa.Jsep=ra;var sa=`ConditionalExpression`;aa.plugins.register({name:`ternary`,init(e){e.hooks.add(`after-expression`,function(t){if(t.node&&this.code===e.QUMARK_CODE){this.index++;let n=t.node,r=this.gobbleExpression();if(r||this.throwError(`Expected expression`),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError(`Expected expression`),t.node={type:sa,test:n,consequent:r,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let r=n;for(;r.right.operator&&e.binary_ops[r.right.operator]<=.9;)r=r.right;t.node.test=r.right,r.right=t.node,t.node=n}}else this.throwError(`Expected :`)}})}});var ca=47,la=92,ua={name:`regex`,init(e){e.hooks.add(`gobble-token`,function(t){if(this.code===ca){let n=++this.index,r=!1;for(;this.index<this.expr.length;){if(this.code===ca&&!r){let r=this.expr.slice(n,this.index),i=``;for(;++this.index<this.expr.length;){let e=this.code;if(e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57)i+=this.char;else break}let a;try{a=new RegExp(r,i)}catch(e){this.throwError(e.message)}return t.node={type:e.LITERAL,value:a,raw:this.expr.slice(n-1,this.index)},t.node=this.gobbleTokenProperty(t.node),t.node}this.code===e.OBRACK_CODE?r=!0:r&&this.code===e.CBRACK_CODE&&(r=!1),this.index+=this.code===la?2:1}this.throwError(`Unclosed Regex`)}})}},da=43,fa={name:`assignment`,assignmentOperators:new Set([`=`,`*=`,`**=`,`/=`,`%=`,`+=`,`-=`,`<<=`,`>>=`,`>>>=`,`&=`,`^=`,`|=`,`||=`,`&&=`,`??=`]),updateOperators:[da,45],assignmentPrecedence:.9,init(e){let t=[e.IDENTIFIER,e.MEMBER_EXP];fa.assignmentOperators.forEach(t=>e.addBinaryOp(t,fa.assignmentPrecedence,!0)),e.hooks.add(`gobble-token`,function(e){let n=this.code;fa.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(this.index+=2,e.node={type:`UpdateExpression`,operator:n===da?`++`:`--`,argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!e.node.argument||!t.includes(e.node.argument.type))&&this.throwError(`Unexpected ${e.node.operator}`))}),e.hooks.add(`after-token`,function(e){if(e.node){let n=this.code;fa.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(t.includes(e.node.type)||this.throwError(`Unexpected ${e.node.operator}`),this.index+=2,e.node={type:`UpdateExpression`,operator:n===da?`++`:`--`,argument:e.node,prefix:!1})}}),e.hooks.add(`after-expression`,function(e){e.node&&n(e.node)});function n(e){fa.assignmentOperators.has(e.operator)?(e.type=`AssignmentExpression`,n(e.left),n(e.right)):e.operator||Object.values(e).forEach(e=>{e&&typeof e==`object`&&n(e)})}}};aa.plugins.register(ua,fa),aa.addUnaryOp(`typeof`),aa.addUnaryOp(`void`),aa.addLiteral(`null`,null),aa.addLiteral(`undefined`,void 0);var pa=new Set([`constructor`,`__proto__`,`__defineGetter__`,`__defineSetter__`,`__lookupGetter__`,`__lookupSetter__`]),ma={evalAst(e,t){switch(e.type){case`BinaryExpression`:case`LogicalExpression`:return ma.evalBinaryExpression(e,t);case`Compound`:return ma.evalCompound(e,t);case`ConditionalExpression`:return ma.evalConditionalExpression(e,t);case`Identifier`:return ma.evalIdentifier(e,t);case`Literal`:return ma.evalLiteral(e,t);case`MemberExpression`:return ma.evalMemberExpression(e,t);case`UnaryExpression`:return ma.evalUnaryExpression(e,t);case`ArrayExpression`:return ma.evalArrayExpression(e,t);case`CallExpression`:return ma.evalCallExpression(e,t);case`AssignmentExpression`:return ma.evalAssignmentExpression(e,t);default:throw SyntaxError(`Unexpected expression`,e)}},evalBinaryExpression(e,t){return{"||":(e,t)=>e||t(),"&&":(e,t)=>e&&t(),"|":(e,t)=>e|t(),"^":(e,t)=>e^t(),"&":(e,t)=>e&t(),"==":(e,t)=>e==t(),"!=":(e,t)=>e!=t(),"===":(e,t)=>e===t(),"!==":(e,t)=>e!==t(),"<":(e,t)=>e<t(),">":(e,t)=>e>t(),"<=":(e,t)=>e<=t(),">=":(e,t)=>e>=t(),"<<":(e,t)=>e<<t(),">>":(e,t)=>e>>t(),">>>":(e,t)=>e>>>t(),"+":(e,t)=>e+t(),"-":(e,t)=>e-t(),"*":(e,t)=>e*t(),"/":(e,t)=>e/t(),"%":(e,t)=>e%t()}[e.operator](ma.evalAst(e.left,t),()=>ma.evalAst(e.right,t))},evalCompound(e,t){let n;for(let r=0;r<e.body.length;r++){e.body[r].type===`Identifier`&&[`var`,`let`,`const`].includes(e.body[r].name)&&e.body[r+1]&&e.body[r+1].type===`AssignmentExpression`&&(r+=1);let i=e.body[r];n=ma.evalAst(i,t)}return n},evalConditionalExpression(e,t){return ma.evalAst(e.test,t)?ma.evalAst(e.consequent,t):ma.evalAst(e.alternate,t)},evalIdentifier(e,t){if(Object.hasOwn(t,e.name))return t[e.name];throw ReferenceError(`${e.name} is not defined`)},evalLiteral(e){return e.value},evalMemberExpression(e,t){let n=String(e.computed?ma.evalAst(e.property):e.property.name),r=ma.evalAst(e.object,t);if(r==null||!Object.hasOwn(r,n)&&pa.has(n))throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);let i=r[n];return typeof i==`function`?i.bind(r):i},evalUnaryExpression(e,t){return{"-":e=>-ma.evalAst(e,t),"!":e=>!ma.evalAst(e,t),"~":e=>~ma.evalAst(e,t),"+":e=>+ma.evalAst(e,t),typeof:e=>typeof ma.evalAst(e,t),void:e=>void ma.evalAst(e,t)}[e.operator](e.argument)},evalArrayExpression(e,t){return e.elements.map(e=>ma.evalAst(e,t))},evalCallExpression(e,t){let n=e.arguments.map(e=>ma.evalAst(e,t)),r=ma.evalAst(e.callee,t);if(r===Function)throw Error(`Function constructor is disabled`);return r(...n)},evalAssignmentExpression(e,t){if(e.left.type!==`Identifier`)throw SyntaxError(`Invalid left-hand side in assignment`);let n=e.left.name;return t[n]=ma.evalAst(e.right,t),t[n]}},ha=class{constructor(e){this.code=e,this.ast=aa(this.code)}runInNewContext(e){let t=Object.assign(Object.create(null),e);return ma.evalAst(this.ast,t)}};function ga(e,t){return e=e.slice(),e.push(t),e}function _a(e,t){return t=t.slice(),t.unshift(e),t}var va=class extends Error{constructor(e){super(`JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)`),this.avoidNew=!0,this.value=e,this.name=`NewError`}};function ya(e,t,n,r,i){if(!(this instanceof ya))try{return new ya(e,t,n,r,i)}catch(e){if(!e.avoidNew)throw e;return e.value}typeof e==`string`&&(i=r,r=n,n=t,t=e,e=null);let a=e&&typeof e==`object`;if(e||={},this.json=e.json||n,this.path=e.path||t,this.resultType=e.resultType||`value`,this.flatten=e.flatten||!1,this.wrap=Object.hasOwn(e,`wrap`)?e.wrap:!0,this.sandbox=e.sandbox||{},this.eval=e.eval===void 0?`safe`:e.eval,this.ignoreEvalErrors=e.ignoreEvalErrors===void 0?!1:e.ignoreEvalErrors,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||r||null,this.otherTypeCallback=e.otherTypeCallback||i||function(){throw TypeError(`You must supply an otherTypeCallback callback option with the @other() operator.`)},e.autostart!==!1){let r={path:a?e.path:t};a?`json`in e&&(r.json=e.json):r.json=n;let i=this.evaluate(r);if(!i||typeof i!=`object`)throw new va(i);return i}}ya.prototype.evaluate=function(e,t,n,r){let i=this.parent,a=this.parentProperty,{flatten:o,wrap:s}=this;if(this.currResultType=this.resultType,this.currEval=this.eval,this.currSandbox=this.sandbox,n||=this.callback,this.currOtherTypeCallback=r||this.otherTypeCallback,t||=this.json,e||=this.path,e&&typeof e==`object`&&!Array.isArray(e)){if(!e.path&&e.path!==``)throw TypeError(`You must supply a "path" property when providing an object argument to JSONPath.evaluate().`);if(!Object.hasOwn(e,`json`))throw TypeError(`You must supply a "json" property when providing an object argument to JSONPath.evaluate().`);({json:t}=e),o=Object.hasOwn(e,`flatten`)?e.flatten:o,this.currResultType=Object.hasOwn(e,`resultType`)?e.resultType:this.currResultType,this.currSandbox=Object.hasOwn(e,`sandbox`)?e.sandbox:this.currSandbox,s=Object.hasOwn(e,`wrap`)?e.wrap:s,this.currEval=Object.hasOwn(e,`eval`)?e.eval:this.currEval,n=Object.hasOwn(e,`callback`)?e.callback:n,this.currOtherTypeCallback=Object.hasOwn(e,`otherTypeCallback`)?e.otherTypeCallback:this.currOtherTypeCallback,i=Object.hasOwn(e,`parent`)?e.parent:i,a=Object.hasOwn(e,`parentProperty`)?e.parentProperty:a,e=e.path}if(i||=null,a||=null,Array.isArray(e)&&(e=ya.toPathString(e)),!e&&e!==``||!t)return;let c=ya.toPathArray(e);c[0]===`$`&&c.length>1&&c.shift(),this._hasParentSelector=null;let l=this._trace(c,t,[`$`],i,a,n).filter(function(e){return e&&!e.isParentSelector});return l.length?!s&&l.length===1&&!l[0].hasArrExpr?this._getPreferredOutput(l[0]):l.reduce((e,t)=>{let n=this._getPreferredOutput(t);return o&&Array.isArray(n)?e=e.concat(n):e.push(n),e},[]):s?[]:void 0},ya.prototype._getPreferredOutput=function(e){let t=this.currResultType;switch(t){case`all`:{let t=Array.isArray(e.path)?e.path:ya.toPathArray(e.path);return e.pointer=ya.toPointer(t),e.path=typeof e.path==`string`?e.path:ya.toPathString(e.path),e}case`value`:case`parent`:case`parentProperty`:return e[t];case`path`:return ya.toPathString(e[t]);case`pointer`:return ya.toPointer(e.path);default:throw TypeError(`Unknown result type`)}},ya.prototype._handleCallback=function(e,t,n){if(t){let r=this._getPreferredOutput(e);e.path=typeof e.path==`string`?e.path:ya.toPathString(e.path),t(r,n,e)}},ya.prototype._trace=function(e,t,n,r,i,a,o,s){let c;if(!e.length)return c={path:n,value:t,parent:r,parentProperty:i,hasArrExpr:o},this._handleCallback(c,a,`value`),c;let l=e[0],u=e.slice(1),d=[];function f(e){Array.isArray(e)?e.forEach(e=>{d.push(e)}):d.push(e)}if((typeof l!=`string`||s)&&t&&Object.hasOwn(t,l))f(this._trace(u,t[l],ga(n,l),t,l,a,o));else if(l===`*`)this._walk(t,e=>{f(this._trace(u,t[e],ga(n,e),t,e,a,!0,!0))});else if(l===`..`)f(this._trace(u,t,n,r,i,a,o)),this._walk(t,r=>{typeof t[r]==`object`&&f(this._trace(e.slice(),t[r],ga(n,r),t,r,a,!0))});else if(l===`^`)return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:u,isParentSelector:!0};else if(l===`~`)return c={path:ga(n,l),value:i,parent:r,parentProperty:null},this._handleCallback(c,a,`property`),c;else if(l===`$`)f(this._trace(u,t,n,null,null,a,o));else if(/^(-?\d*):(-?\d*):?(\d*)$/u.test(l))f(this._slice(l,u,t,n,r,i,a));else if(l.indexOf(`?(`)===0){if(this.currEval===!1)throw Error(`Eval [?(expr)] prevented in JSONPath expression.`);let e=l.replace(/^\?\((.*?)\)$/u,`$1`),o=/@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(e);o?this._walk(t,e=>{let s=[o[2]],c=o[1]?t[e][o[1]]:t[e];this._trace(s,c,n,r,i,a,!0).length>0&&f(this._trace(u,t[e],ga(n,e),t,e,a,!0))}):this._walk(t,o=>{this._eval(e,t[o],o,n,r,i)&&f(this._trace(u,t[o],ga(n,o),t,o,a,!0))})}else if(l[0]===`(`){if(this.currEval===!1)throw Error(`Eval [(expr)] prevented in JSONPath expression.`);f(this._trace(_a(this._eval(l,t,n.at(-1),n.slice(0,-1),r,i),u),t,n,r,i,a,o))}else if(l[0]===`@`){let e=!1,o=l.slice(1,-2);switch(o){case`scalar`:(!t||![`object`,`function`].includes(typeof t))&&(e=!0);break;case`boolean`:case`string`:case`undefined`:case`function`:typeof t===o&&(e=!0);break;case`integer`:Number.isFinite(t)&&!(t%1)&&(e=!0);break;case`number`:Number.isFinite(t)&&(e=!0);break;case`nonFinite`:typeof t==`number`&&!Number.isFinite(t)&&(e=!0);break;case`object`:t&&typeof t===o&&(e=!0);break;case`array`:Array.isArray(t)&&(e=!0);break;case`other`:e=this.currOtherTypeCallback(t,n,r,i);break;case`null`:t===null&&(e=!0);break;default:throw TypeError(`Unknown value type `+o)}if(e)return c={path:n,value:t,parent:r,parentProperty:i},this._handleCallback(c,a,`value`),c}else if(l[0]==="`"&&t&&Object.hasOwn(t,l.slice(1))){let e=l.slice(1);f(this._trace(u,t[e],ga(n,e),t,e,a,o,!0))}else if(l.includes(`,`)){let e=l.split(`,`);for(let o of e)f(this._trace(_a(o,u),t,n,r,i,a,!0))}else !s&&t&&Object.hasOwn(t,l)&&f(this._trace(u,t[l],ga(n,l),t,l,a,o,!0));if(this._hasParentSelector)for(let e=0;e<d.length;e++){let n=d[e];if(n&&n.isParentSelector){let s=this._trace(n.expr,t,n.path,r,i,a,o);if(Array.isArray(s)){d[e]=s[0];let t=s.length;for(let n=1;n<t;n++)e++,d.splice(e,0,s[n])}else d[e]=s}}return d},ya.prototype._walk=function(e,t){if(Array.isArray(e)){let n=e.length;for(let e=0;e<n;e++)t(e)}else e&&typeof e==`object`&&Object.keys(e).forEach(e=>{t(e)})},ya.prototype._slice=function(e,t,n,r,i,a,o){if(!Array.isArray(n))return;let s=n.length,c=e.split(`:`),l=c[2]&&Number.parseInt(c[2])||1,u=c[0]&&Number.parseInt(c[0])||0,d=c[1]&&Number.parseInt(c[1])||s;u=u<0?Math.max(0,u+s):Math.min(s,u),d=d<0?Math.max(0,d+s):Math.min(s,d);let f=[];for(let e=u;e<d;e+=l)this._trace(_a(e,t),n,r,i,a,o,!0).forEach(e=>{f.push(e)});return f},ya.prototype._eval=function(e,t,n,r,i,a){this.currSandbox._$_parentProperty=a,this.currSandbox._$_parent=i,this.currSandbox._$_property=n,this.currSandbox._$_root=this.json,this.currSandbox._$_v=t;let o=e.includes(`@path`);o&&(this.currSandbox._$_path=ya.toPathString(r.concat([n])));let s=this.currEval+`Script:`+e;if(!ya.cache[s]){let t=e.replaceAll(`@parentProperty`,`_$_parentProperty`).replaceAll(`@parent`,`_$_parent`).replaceAll(`@property`,`_$_property`).replaceAll(`@root`,`_$_root`).replaceAll(/@([.\s)[])/gu,`_$_v$1`);if(o&&(t=t.replaceAll(`@path`,`_$_path`)),this.currEval===`safe`||this.currEval===!0||this.currEval===void 0)ya.cache[s]=new this.safeVm.Script(t);else if(this.currEval===`native`)ya.cache[s]=new this.vm.Script(t);else if(typeof this.currEval==`function`&&this.currEval.prototype&&Object.hasOwn(this.currEval.prototype,`runInNewContext`)){let e=this.currEval;ya.cache[s]=new e(t)}else if(typeof this.currEval==`function`)ya.cache[s]={runInNewContext:e=>this.currEval(t,e)};else throw TypeError(`Unknown "eval" property "${this.currEval}"`)}try{return ya.cache[s].runInNewContext(this.currSandbox)}catch(t){if(this.ignoreEvalErrors)return!1;throw Error(`jsonPath: `+t.message+`: `+e)}},ya.cache={},ya.toPathString=function(e){let t=e,n=t.length,r=`$`;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=/^[0-9*]+$/u.test(t[e])?`[`+t[e]+`]`:`['`+t[e]+`']`);return r},ya.toPointer=function(e){let t=e,n=t.length,r=``;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=`/`+t[e].toString().replaceAll(`~`,`~0`).replaceAll(`/`,`~1`));return r},ya.toPathArray=function(e){let{cache:t}=ya;if(t[e])return t[e].concat();let n=[];return t[e]=e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu,`;$&;`).replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu,function(e,t){return`[#`+(n.push(t)-1)+`]`}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu,function(e,t){return`['`+t.replaceAll(`.`,`%@%`).replaceAll(`~`,`%%@@%%`)+`']`}).replaceAll(`~`,`;~;`).replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu,`;`).replaceAll(`%@%`,`.`).replaceAll(`%%@@%%`,`~`).replaceAll(/(?:;)?(\^+)(?:;)?/gu,function(e,t){return`;`+t.split(``).join(`;`)+`;`}).replaceAll(/;;;|;;/gu,`;..;`).replaceAll(/;$|'?\]|'$/gu,``).split(`;`).map(function(e){let t=e.match(/#(\d+)/u);return!t||!t[1]?e:n[t[1]]}),t[e].concat()},ya.prototype.safeVm={Script:ha};var ba=function(e,t,n){let r=e.length;for(let i=0;i<r;i++){let r=e[i];n(r)&&t.push(e.splice(i--,1)[0])}},xa=class{constructor(e){this.code=e}runInNewContext(e){let t=this.code,n=Object.keys(e),r=[];ba(n,r,t=>typeof e[t]==`function`);let i=n.map(t=>e[t]);t=r.reduce((t,n)=>{let r=e[n].toString();return/function/u.test(r)||(r=`function `+r),`var `+n+`=`+r+`;`+t},``)+t,!/(['"])use strict\1/u.test(t)&&!n.includes(`arguments`)&&(t=`var arguments = undefined;`+t),t=t.replace(/;\s*$/u,``);let a=t.lastIndexOf(`;`),o=a===-1?` return `+t:t.slice(0,a+1)+` return `+t.slice(a+1);return Function(...n,o)(...i)}};ya.prototype.vm={Script:xa};var Sa=Te({String:M.string,Number:M.number,"True False":M.bool,PropertyName:M.propertyName,Null:M.null,", :":M.separator,"[ ]":M.squareBracket,"{ }":M.brace}),Ca=Ye.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",stateData:`#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O`,goto:"!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:`⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array`,maxTerm:25,nodeProps:[[`isolate`,-2,6,11,``],[`openedBy`,7,`{`,14,`[`],[`closedBy`,8,`}`,15,`]`]],propSources:[Sa],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),wa=N.define({name:`json`,parser:Ca.configure({props:[P.add({Object:Ve({except:/^\s*\}/}),Array:Ve({except:/^\s*\]/})}),st.add({"Object Array":A})]}),languageData:{closeBrackets:{brackets:[`[`,`{`,`"`]},indentOnInput:/^\s*[\}\]]$/}});function Ta(){return new he(wa)}function Ea(e,t=e.state){let n=new Set;for(let{from:r,to:i}of e.visibleRanges){let e=r;for(;e<=i;){let r=t.doc.lineAt(e);n.has(r)||n.add(r),e=r.to+1}}return n}function Da(e){let t=e.selection.main.head;return e.doc.lineAt(t)}function Oa(e,t){let n=0;loop:for(let r=0;r<e.length;r++)switch(e[r]){case` `:case`\xA0`:n+=1;continue loop;case`	`:n+=t-n%t;continue loop;case`\r`:continue loop;default:break loop}return n}var ka=je.define({combine(e){return be(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:`fullScope`,thickness:1})}}),Aa=class{constructor(e,t,n,r){this.lines=e,this.state=t,this.map=new Map,this.unitWidth=n,this.markerType=r;for(let e of this.lines)this.add(e);this.state.facet(ka).highlightActiveBlock&&this.findAndSetActiveLines()}has(e){return this.map.has(typeof e==`number`?e:e.number)}get(e){let t=this.map.get(typeof e==`number`?e:e.number);if(!t)throw Error(`Line not found in indentation map`);return t}set(e,t,n){let r={line:e,col:t,level:n,empty:!e.text.trim().length};return this.map.set(r.line.number,r),r}add(e){if(this.has(e))return this.get(e);if(!e.length||!e.text.trim().length){if(e.number===1)return this.set(e,0,0);if(e.number===this.state.doc.lines){let t=this.closestNonEmpty(e,-1);return this.set(e,0,t.level)}let t=this.closestNonEmpty(e,-1),n=this.closestNonEmpty(e,1);return t.level>=n.level&&this.markerType!==`codeOnly`?this.set(e,0,t.level):t.empty&&t.level===0&&n.level!==0?this.set(e,0,0):n.level>t.level?this.set(e,0,t.level+1):this.set(e,0,n.level)}let t=Oa(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}closestNonEmpty(e,t){let n=e.number+t;for(;t===-1?n>=1:n<=this.state.doc.lines;){if(this.has(n)){let e=this.get(n);if(!e.empty)return e}let e=this.state.doc.line(n);if(e.text.trim().length){let t=Oa(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}n+=t}let r=this.state.doc.line(t===-1?1:this.state.doc.lines);return this.set(r,0,0)}findAndSetActiveLines(){let e=Da(this.state);if(!this.has(e))return;let t=this.get(e);if(this.has(t.line.number+1)){let e=this.get(t.line.number+1);e.level>t.level&&(t=e)}if(this.has(t.line.number-1)){let e=this.get(t.line.number-1);e.level>t.level&&(t=e)}if(t.level===0)return;t.active=t.level;let n,r;for(n=t.line.number;n>1;n--){if(!this.has(n-1))continue;let e=this.get(n-1);if(e.level<t.level)break;e.active=t.level}for(r=t.line.number;r<this.state.doc.lines;r++){if(!this.has(r+1))continue;let e=this.get(r+1);if(e.level<t.level)break;e.active=t.level}}};function ja(e){let t={light:`#F0F1F2`,dark:`#2B3245`,activeLight:`#E4E5E6`,activeDark:`#3C445C`},n=t;return e&&(n=Object.assign(Object.assign({},t),e)),Xe.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:`relative`},".cm-indent-markers::before":{content:`""`,position:`absolute`,top:0,left:`2px`,right:0,bottom:0,background:`var(--indent-markers)`,pointerEvents:`none`,zIndex:`-1`}})}function Ma(e,t,n,r,i){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${n}ch)`} ${r*n}.5ch/calc(${n*i}ch - 1px) no-repeat`}function Na(e,t,n,r,i){let{level:a,active:o}=e;if(i??=r,n&&a===0)return[];let s=+!!n,c=[];if(o!==void 0){let e=o-s-1;e>0&&c.push(Ma(`--indent-marker-bg-color`,r,t,s,e)),c.push(Ma(`--indent-marker-active-bg-color`,i,t,o-1,1)),o!==a&&c.push(Ma(`--indent-marker-bg-color`,r,t,o,a-o))}else c.push(Ma(`--indent-marker-bg-color`,r,t,s,a-s));return c.join(`,`)}var Pa=class{constructor(e){this.view=e,this.unitWidth=k(e.state),this.currentLineNumber=Da(e.state).number,this.generate(e.state)}update(e){let t=k(e.state),n=t!==this.unitWidth;n&&(this.unitWidth=t);let r=Da(e.state).number,i=r!==this.currentLineNumber;this.currentLineNumber=r;let a=e.state.facet(ka).highlightActiveBlock&&i;(e.docChanged||e.viewportChanged||n||a)&&this.generate(e.state)}generate(e){let t=new it,n=Ea(this.view,e),{hideFirstIndent:r,markerType:i,thickness:a,activeThickness:o}=e.facet(ka),s=new Aa(n,e,this.unitWidth,i);for(let e of n){let n=s.get(e.number);if(!n?.level)continue;let i=Na(n,this.unitWidth,r,a,o);t.add(e.from,e.from,Ge.line({class:`cm-indent-markers`,attributes:{style:`--indent-markers: ${i}`}}))}this.decorations=t.finish()}};function Fa(e={}){return[ka.of(e),ja(e.colors),Be.fromClass(Pa,{decorations:e=>e.decorations})]}var Ia,La,Ra,za=[`mainAxis`,`crossAxis`,`fallbackPlacements`,`fallbackStrategy`,`fallbackAxisSideDirection`,`flipAlignment`],Ba=[`mainAxis`,`crossAxis`,`limiter`];function Va(e,t){if(e==null)return{};var n,r,i=function(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ha(Object(n),!0).forEach(function(t){Xa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ua(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Wa(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Ua(a,r,i,o,s,`next`,e)}function s(e){Ua(a,r,i,o,s,`throw`,e)}o(void 0)})}}function Ga(e,t){qa(e,t),t.add(e)}function Ka(e,t,n){qa(e,t),t.set(e,n)}function qa(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function Ja(e,t,n){return e.set(Ya(e,t),n),n}function R(e,t){return e.get(Ya(e,t))}function Ya(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function Xa(e,t,n){return(t=function(e){var t=function(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}(e,`string`);return typeof t==`symbol`?t:t+``}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Za,Qa;typeof window<`u`&&((Za=(Qa=window).__svelte??(Qa.__svelte={})).v??(Za.v=new Set)).add(`5`);var $a=!1;$a=!0;var eo=Symbol(),to=`http://www.w3.org/1999/xhtml`,no=Array.isArray,ro=Array.prototype.indexOf,io=Array.prototype.includes,ao=Array.from,oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,co=Object.getOwnPropertyDescriptors,lo=Object.prototype,uo=Array.prototype,fo=Object.getPrototypeOf,po=Object.isExtensible;function mo(e){return typeof e==`function`}var ho=()=>{};function go(e){return e()}function _o(e){for(var t=0;t<e.length;t++)e[t]()}function vo(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var yo=1<<24,bo=16,xo=32,So=64,Co=512,wo=1024,To=2048,Eo=4096,Do=8192,Oo=16384,ko=32768,Ao=1<<25,jo=65536,Mo=1<<17,No=1<<19,Po=1<<25,Fo=65536,Io=1<<21,Lo=1<<23,Ro=Symbol(`$state`),zo=Symbol(`legacy props`),Bo=Symbol(``),Vo=new class extends Error{constructor(){super(...arguments),Xa(this,`name`,`StaleReactionError`),Xa(this,`message`,"The reaction that called `getAbortSignal()` was re-run or destroyed")}},Ho=!((Ia=globalThis.document)==null||!Ia.contentType)&&globalThis.document.contentType.includes(`xml`);function Uo(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function Wo(e){return e===this.v}function Go(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Ko(e){return!Go(e,this.v)}var qo=null;function Jo(e){qo=e}function Yo(e){return $o().get(e)}function Xo(e){qo={p:qo,i:!1,c:null,e:null,s:e,x:null,r:Tl,l:$a&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function Zo(e){var t=qo,n=t.e;if(n!==null)for(var r of(t.e=null,n))nl(r);return e!==void 0&&(t.x=e),t.i=!0,qo=t.p,e??{}}function Qo(){return!$a||qo!==null&&qo.l===null}function $o(e){var t;return qo===null&&Uo(),(t=qo).c??(t.c=new Map(function(e){for(var t=e.p;t!==null;){var n=t.c;if(n!==null)return n;t=t.p}return null}(qo)||void 0))}var es=[];function ts(){var e=es;es=[],_o(e)}function ns(e){if(es.length===0&&!gs){var t=es;queueMicrotask(()=>{t===es&&ts()})}es.push(e)}function rs(){for(;es.length>0;)ts()}function is(e){var t=Tl;if(t===null)return Sl.f|=Lo,e;if((t.f&ko)===0&&!(4&t.f))throw e;as(e,t)}function as(e,t){for(;t!==null;){if(128&t.f){if((t.f&ko)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var os=-7169;function ss(e,t){e.f=e.f&os|t}function cs(e){(e.f&Co)!==0||e.deps===null?ss(e,wo):ss(e,Eo)}function ls(e){if(e!==null)for(var t of e)2&t.f&&(t.f&Fo)!==0&&(t.f^=Fo,ls(t.deps))}function us(e,t,n){(e.f&To)===0?(e.f&Eo)!==0&&n.add(e):t.add(e),ls(e.deps),ss(e,wo)}var ds=!1,fs=new Set,ps=null,ms=null,hs=null,gs=!1,_s=!1,vs=null,ys=null,bs=0,xs=1,Ss=new WeakMap,Cs=new WeakMap,ws=new WeakMap,Ts=new WeakMap,Es=new WeakMap,Ds=new WeakMap,Os=new WeakMap,ks=new WeakMap,As=new WeakMap,js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakSet,Fs=class e{constructor(){Ga(this,Ps),Xa(this,`id`,xs++),Xa(this,`current`,new Map),Xa(this,`previous`,new Map),Ka(this,Ss,new Set),Ka(this,Cs,new Set),Ka(this,ws,new Map),Ka(this,Ts,new Map),Ka(this,Es,null),Ka(this,Ds,[]),Ka(this,Os,[]),Ka(this,ks,new Set),Ka(this,As,new Set),Ka(this,js,new Map),Xa(this,`is_fork`,!1),Ka(this,Ms,!1),Ka(this,Ns,new Set)}skip_effect(e){R(js,this).has(e)||R(js,this).set(e,{d:[],m:[]})}unskip_effect(e){var t=R(js,this).get(e);if(t){for(var n of(R(js,this).delete(e),t.d))ss(n,To),this.schedule(n);for(n of t.m)ss(n,Eo),this.schedule(n)}}capture(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];(t===eo||this.previous.has(e)||this.previous.set(e,t),(e.f&Lo)===0)&&(this.current.set(e,[e.v,r]),(n=ms)==null||n.set(e,e.v))}activate(){ps=this}deactivate(){ps=null,ms=null}flush(){try{_s=!0,ps=this,Ya(Ps,this,Rs).call(this)}finally{bs=0,hs=null,vs=null,ys=null,_s=!1,ps=null,ms=null,jc.clear()}}discard(){for(var e of R(Cs,this))e(this);R(Cs,this).clear(),fs.delete(this)}register_created_effect(e){R(Os,this).push(e)}increment(e,t){var n=R(ws,this).get(t)??0;if(R(ws,this).set(t,n+1),e){var r=R(Ts,this).get(t)??0;R(Ts,this).set(t,r+1)}}decrement(e,t,n){var r=R(ws,this).get(t)??0;if(r===1?R(ws,this).delete(t):R(ws,this).set(t,r-1),e){var i=R(Ts,this).get(t)??0;i===1?R(Ts,this).delete(t):R(Ts,this).set(t,i-1)}R(Ms,this)||n||(Ja(Ms,this,!0),ns(()=>{Ja(Ms,this,!1),this.flush()}))}transfer_effects(e,t){for(var n of e)R(ks,this).add(n);for(var r of t)R(As,this).add(r);e.clear(),t.clear()}oncommit(e){R(Ss,this).add(e)}ondiscard(e){R(Cs,this).add(e)}settled(){return(R(Es,this)??Ja(Es,this,vo())).promise}static ensure(){if(ps===null){var t=ps=new e;_s||(fs.add(ps),gs||ns(()=>{ps===t&&t.flush()}))}return ps}apply(){ms=null}schedule(e){var t;if(hs=e,(t=e.b)!=null&&t.is_pending&&16777228&e.f&&(e.f&ko)===0)e.b.defer_effect(e);else{for(var n=e;n.parent!==null;){var r=(n=n.parent).f;if(!(vs===null||n!==Tl||Sl!==null&&2&Sl.f))return;if(96&r){if((r&wo)===0)return;n.f^=wo}}R(Ds,this).push(n)}}};function Is(){return this.is_fork||R(Ts,this).size>0}function Ls(){for(var e of R(Ns,this))for(var t of R(Ts,e).keys()){for(var n=!1,r=t;r.parent!==null;){if(R(js,this).has(r)){n=!0;break}r=r.parent}if(!n)return!0}return!1}function Rs(){if(bs++>1e3&&(fs.delete(this),function(){try{(function(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)})()}catch(e){as(e,hs)}}()),!Ya(Ps,this,Is).call(this)){for(var e of R(ks,this))R(As,this).delete(e),ss(e,To),this.schedule(e);for(var t of R(As,this))ss(t,Eo),this.schedule(t)}var n=R(Ds,this);Ja(Ds,this,[]),this.apply();var r=vs=[],i=[],a=ys=[];for(var o of n)try{Ya(Ps,this,zs).call(this,o,r,i)}catch(e){throw Ys(o),e}if(ps=null,a.length>0){var s=La.ensure();for(var c of a)s.schedule(c)}if(vs=null,ys=null,Ya(Ps,this,Is).call(this)||Ya(Ps,this,Ls).call(this))for(var[l,u]of(Ya(Ps,this,Bs).call(this,i),Ya(Ps,this,Bs).call(this,r),R(js,this)))Js(l,u);else{var d;for(var f of(R(ws,this).size===0&&fs.delete(this),R(ks,this).clear(),R(As,this).clear(),R(Ss,this)))f(this);R(Ss,this).clear(),Ws(i),Ws(r),(d=R(Es,this))==null||d.resolve()}var p,m=ps;if(R(Ds,this).length>0){var h=m??=this;R(Ds,h).push(...R(Ds,this).filter(e=>!R(Ds,h).includes(e)))}m!==null&&(fs.add(m),Ya(Ps,p=m,Rs).call(p)),fs.has(this)||Ya(Ps,this,Vs).call(this)}function zs(e,t,n){e.f^=wo;for(var r=e.first;r!==null;){var i=r.f,a=!!(96&i);if(!(a&&(i&wo)!==0||(i&Do)!==0||R(js,this).has(r))&&r.fn!==null){a?r.f^=wo:4&i?t.push(r):Ll(r)&&((i&bo)!==0&&R(As,this).add(r),Hl(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}function Bs(e){for(var t=0;t<e.length;t+=1)us(e[t],R(ks,this),R(As,this))}function Vs(){for(var e of fs){var t=e.id<this.id,n=[];for(var[r,[i,a]]of this.current){if(e.current.has(r)){var o=e.current.get(r)[0];if(!t||i===o)continue;e.current.set(r,[i,a])}n.push(r)}var s=[...e.current.keys()].filter(e=>!this.current.has(e));if(s.length===0)t&&e.discard();else if(n.length>0){e.activate();var c=new Set,l=new Map;for(var u of n)Gs(u,s,c,l);l=new Map;var d=[...e.current.keys()].filter(e=>!this.current.has(e)||this.current.get(e)[0]!==e);for(var f of R(Os,this))155648&f.f||!Ks(f,d,l)||(4194320&f.f?(ss(f,To),e.schedule(f)):R(ks,e).add(f));if(R(Ds,e).length>0){for(var p of(e.apply(),R(Ds,e)))Ya(Ps,e,zs).call(e,p,[],[]);Ja(Ds,e,[])}e.deactivate()}}for(var m of fs)R(Ns,m).has(this)&&(R(Ns,m).delete(this),R(Ns,m).size!==0||Ya(Ps,m,Is).call(m)||(m.activate(),Ya(Ps,m,Rs).call(m)))}function Hs(e){var t=gs;gs=!0;try{for(;;){if(rs(),ps===null)return;ps.flush()}}finally{gs=t}}La=Fs;var Us=null;function Ws(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(24576&r.f)&&Ll(r)&&(Us=new Set,Hl(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&pl(r),Us?.size>0)){for(var i of(jc.clear(),Us))if(!(24576&i.f)){for(var a=[i],o=i.parent;o!==null;)Us.has(o)&&(Us.delete(o),a.push(o)),o=o.parent;for(var s=a.length-1;s>=0;s--){var c=a[s];24576&c.f||Hl(c)}}Us.clear()}}Us=null}}function Gs(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(var i of e.reactions){var a=i.f;2&a?Gs(i,t,n,r):4194320&a&&(a&To)===0&&Ks(i,t,r)&&(ss(i,To),qs(i))}}function Ks(e,t,n){var r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(var i of e.deps){if(io.call(t,i))return!0;if(2&i.f&&Ks(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function qs(e){ps.schedule(e)}function Js(e,t){if((e.f&xo)===0||(e.f&wo)===0){(e.f&To)===0?(e.f&Eo)!==0&&t.m.push(e):t.d.push(e),ss(e,wo);for(var n=e.first;n!==null;)Js(n,t),n=n.next}}function Ys(e){ss(e,wo);for(var t=e.first;t!==null;)Ys(t),t=t.next}var Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,$s=new WeakMap,ec=new WeakMap,tc=new WeakMap,nc=new WeakMap,rc=new WeakMap,ic=new WeakMap,ac=new WeakMap,oc=new WeakMap,sc=new WeakMap,cc=new WeakMap,lc=new WeakMap,uc=new WeakMap,dc=new WeakMap,fc=new WeakSet,pc=class{constructor(e,t,n,r){var i,a,o,s;Ga(this,fc),Xa(this,`parent`,void 0),Xa(this,`is_pending`,!1),Xa(this,`transform_error`,void 0),Ka(this,Xs,void 0),Ka(this,Zs,null),Ka(this,Qs,void 0),Ka(this,$s,void 0),Ka(this,ec,void 0),Ka(this,tc,null),Ka(this,nc,null),Ka(this,rc,null),Ka(this,ic,null),Ka(this,ac,0),Ka(this,oc,0),Ka(this,sc,!1),Ka(this,cc,new Set),Ka(this,lc,new Set),Ka(this,uc,null),Ka(this,dc,(i=()=>(Ja(uc,this,Nc(R(ac,this))),()=>{Ja(uc,this,null)}),o=0,s=Nc(0),()=>{$c()&&(K(s),al(()=>(o===0&&(a=q(()=>i(()=>Rc(s)))),o+=1,()=>{ns(()=>{var e;--o==0&&((e=a)==null||e(),a=void 0,Rc(s))})})))})),Ja(Xs,this,e),Ja(Qs,this,t),Ja($s,this,e=>{var t=Tl;t.b=this,t.f|=128,n(e)}),this.parent=Tl.b,this.transform_error=r??this.parent?.transform_error??(e=>e),Ja(ec,this,ol(()=>{Ya(fc,this,mc).call(this)},589824))}defer_effect(e){us(e,R(cc,this),R(lc,this))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!R(Qs,this).pending}update_pending_count(e,t){Ya(fc,this,_c).call(this,e,t),Ja(ac,this,R(ac,this)+e),R(uc,this)&&!R(sc,this)&&(Ja(sc,this,!0),ns(()=>{Ja(sc,this,!1),R(uc,this)&&Ic(R(uc,this),R(ac,this))}))}get_effect_pending(){return R(dc,this).call(this),K(R(uc,this))}error(e){var t=R(Qs,this).onerror,n=R(Qs,this).failed;if(!t&&!n)throw e;R(tc,this)&&(dl(R(tc,this)),Ja(tc,this,null)),R(nc,this)&&(dl(R(nc,this)),Ja(nc,this,null)),R(rc,this)&&(dl(R(rc,this)),Ja(rc,this,null));var r=!1,i=!1,a=()=>{r?console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`):(r=!0,i&&function(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}(),R(rc,this)!==null&&ml(R(rc,this),()=>{Ja(rc,this,null)}),Ya(fc,this,gc).call(this,()=>{Ya(fc,this,mc).call(this)}))},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){as(e,R(ec,this)&&R(ec,this).parent)}n&&Ja(rc,this,Ya(fc,this,gc).call(this,()=>{try{return cl(()=>{var t=Tl;t.b=this,t.f|=128,n(R(Xs,this),()=>e,()=>a)})}catch(e){return as(e,R(ec,this).parent),null}}))};ns(()=>{var t;try{t=this.transform_error(e)}catch(e){as(e,R(ec,this)&&R(ec,this).parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>as(e,R(ec,this)&&R(ec,this).parent)):o(t)})}};function mc(){try{if(this.is_pending=this.has_pending_snippet(),Ja(oc,this,0),Ja(ac,this,0),Ja(tc,this,cl(()=>{R($s,this).call(this,R(Xs,this))})),R(oc,this)>0){var e=Ja(ic,this,document.createDocumentFragment());vl(R(tc,this),e);var t=R(Qs,this).pending;Ja(nc,this,cl(()=>t(R(Xs,this))))}else Ya(fc,this,hc).call(this,ps)}catch(e){this.error(e)}}function hc(e){this.is_pending=!1,e.transfer_effects(R(cc,this),R(lc,this))}function gc(e){var t=Tl,n=Sl,r=qo;El(R(ec,this)),wl(R(ec,this)),Jo(R(ec,this).ctx);try{return Fs.ensure(),e()}catch(e){return is(e),null}finally{El(t),wl(n),Jo(r)}}function _c(e,t){var n;this.has_pending_snippet()?(Ja(oc,this,R(oc,this)+e),R(oc,this)===0&&(Ya(fc,this,hc).call(this,t),R(nc,this)&&ml(R(nc,this),()=>{Ja(nc,this,null)}),R(ic,this)&&(R(Xs,this).before(R(ic,this)),Ja(ic,this,null)))):this.parent&&Ya(fc,n=this.parent,_c).call(n,e,t)}function vc(e,t,n,r){var i=Qo()?xc:z,a=e.filter(e=>!e.settled);if(n.length!==0||a.length!==0){var o,s,c,l,u=Tl,d=(o=Tl,s=Sl,c=qo,l=ps,function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];El(o),wl(s),Jo(c),e&&(o.f&Oo)===0&&(l?.activate(),l?.apply())}),f=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;if(n.length!==0){var p=bc();f?f.then(()=>{d(),h(),yc()}):h()}else f.then(()=>m(t.map(i)))}else r(t.map(i));function m(e){d();try{r(e)}catch(e){(u.f&Oo)===0&&as(e,u)}yc()}function h(){Promise.all(n.map(e=>function(e){var t=Tl;t===null&&function(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}();var n=void 0,r=Nc(eo),i=!Sl,a=new Map;return function(e){Qc(4718592,e)}(()=>{var o=Tl,s=vo();n=s.promise;try{Promise.resolve(e()).then(s.resolve,s.reject).finally(yc)}catch(e){s.reject(e),yc()}var c=ps;if(i){if((o.f&ko)!==0)var l=bc();if(t.b.is_rendered()){var u;(u=a.get(c))==null||u.reject(Vo),a.delete(c)}else{for(var d of a.values())d.reject(Vo);a.clear()}a.set(c,s)}var f=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(l&&l(t===Vo),t!==Vo&&(o.f&Oo)===0){if(c.activate(),t)r.f|=Lo,Ic(r,t);else for(var[n,i]of((r.f&Lo)!==0&&(r.f^=Lo),Ic(r,e),a)){if(a.delete(n),n===c)break;i.reject(Vo)}c.deactivate()}};s.promise.then(f,e=>f(null,e||`unknown`))}),el(()=>{for(var e of a.values())e.reject(Vo)}),new Promise(e=>{function t(i){function a(){i===n?e(r):t(n)}i.then(a,a)}t(n)})}(e))).then(e=>m([...t.map(i),...e])).catch(e=>as(e,u)).finally(()=>p())}}function yc(){var e,t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];El(null),wl(null),Jo(null),t&&((e=ps)==null||e.deactivate())}function bc(){var e=Tl,t=e.b,n=ps,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0];t.update_pending_count(-1,n),n.decrement(r,e,i)}}function xc(e){var t=Sl!==null&&2&Sl.f?Sl:null;return Tl!==null&&(Tl.f|=No),{ctx:qo,deps:null,effects:null,equals:Wo,f:2050,fn:e,reactions:null,rv:0,v:eo,wv:0,parent:t??Tl,ac:null}}function Sc(e){var t=xc(e);return Ol(t),t}function z(e){var t=xc(e);return t.equals=Ko,t}function Cc(e){var t,n=Tl;El(function(e){for(var t=e.parent;t!==null;){if(!(2&t.f))return(t.f&Oo)===0?t:null;t=t.parent}return null}(e));try{e.f&=-65537,function(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)dl(t[n])}}(e),t=zl(e)}finally{El(n)}return t}function wc(e){var t,n,r,i=e.v,a=Cc(e);if(!e.equals(a)&&(e.wv=Il(),!((t=ps)!=null&&t.is_fork&&e.deps!==null||(e.v=a,(n=ps)==null||n.capture(e,i,!0),e.deps!==null))))return void ss(e,wo);bl||(ms===null?cs(e):($c()||(r=ps)!=null&&r.is_fork)&&ms.set(e,a))}function Tc(e){if(e.effects!==null)for(var t of e.effects)t.teardown&&Hl(t)}var Ec,Dc,Oc,kc,Ac=new Set,jc=new Map,Mc=!1;function Nc(e,t){return{f:0,v:e,reactions:null,equals:Wo,rv:0,wv:0}}function Pc(e,t){var n=Nc(e);return Ol(n),n}function B(e){var t,n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=Nc(e);return(n||(i.equals=Ko),$a&&r&&qo!==null&&qo.l!==null)&&((t=qo.l).s??(t.s=[])).push(i),i}function Fc(e,t){return V(e,q(()=>K(e))),t}function V(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Sl===null||Cl&&(Sl.f&Mo)===0||!Qo()||!(4325394&Sl.f)||Dl!==null&&io.call(Dl,e)||function(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}(),Ic(e,n?Bc(t):t,ys)}function Ic(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.equals(t)){var r=e.v;bl?jc.set(e,t):jc.set(e,r),e.v=t;var i=Fs.ensure();if(i.capture(e,r),2&e.f){var a=e;(e.f&To)!==0&&Cc(a),ms===null&&cs(a)}e.wv=Il(),zc(e,To,n),!Qo()||Tl===null||(Tl.f&wo)===0||96&Tl.f||(jl===null?function(e){jl=e}([e]):jl.push(e)),!i.is_fork&&Ac.size>0&&!Mc&&function(){for(var e of(Mc=!1,Ac))(e.f&wo)!==0&&ss(e,Eo),Ll(e)&&Hl(e);Ac.clear()}()}return t}function Lc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=K(e),r=t===1?n++:n--;return V(e,n),r}function Rc(e){V(e,e.v+1)}function zc(e,t,n){var r=e.reactions;if(r!==null)for(var i=Qo(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==Tl){var l=(c&To)===0;if(l&&ss(s,t),2&c){var u,d=s;(u=ms)==null||u.delete(d),(c&Fo)===0&&(c&Co&&(s.f|=Fo),zc(d,Eo,n))}else if(l){var f=s;(c&bo)!==0&&Us!==null&&Us.add(f),n===null?qs(f):n.push(f)}}}}function Bc(e){if(typeof e!=`object`||!e||Ro in e)return e;var t=fo(e);if(t!==lo&&t!==uo)return e;var n=new Map,r=no(e),i=Pc(0),a=Pl,o=e=>{if(Pl===a)return e();var t=Sl,n=Pl;wl(null),Fl(a);var r=e();return wl(t),Fl(n),r};return r&&n.set(`length`,Pc(e.length)),new Proxy(e,{defineProperty(e,t,r){`value`in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}();var i=n.get(t);return i===void 0?o(()=>{var e=Pc(r.value);return n.set(t,e),e}):V(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t);if(r===void 0){if(t in e){var a=o(()=>Pc(eo));n.set(t,a),Rc(i)}}else V(r,eo),Rc(i);return!0},get(t,r,i){var a;if(r===Ro)return e;var s=n.get(r),c=r in t;if(s===void 0&&(!c||(a=so(t,r))!=null&&a.writable)&&(s=o(()=>Pc(Bc(c?t[r]:eo))),n.set(r,s)),s!==void 0){var l=K(s);return l===eo?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&`value`in r){var i=n.get(t);i&&(r.value=K(i))}else if(r===void 0){var a=n.get(t),o=a?.v;if(a!==void 0&&o!==eo)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){var r;if(t===Ro)return!0;var i=n.get(t),a=i!==void 0&&i.v!==eo||Reflect.has(e,t);return(i!==void 0||Tl!==null&&(!a||(r=so(e,t))!=null&&r.writable))&&(i===void 0&&(i=o(()=>Pc(a?Bc(e[t]):eo)),n.set(t,i)),K(i)===eo)?!1:a},set(e,t,a,s){var c,l=n.get(t),u=t in e;if(r&&t===`length`)for(var d=a;d<l.v;d+=1){var f=n.get(d+``);f===void 0?d in e&&(f=o(()=>Pc(eo)),n.set(d+``,f)):V(f,eo)}l===void 0?(!u||(c=so(e,t))!=null&&c.writable)&&(V(l=o(()=>Pc(void 0)),Bc(a)),n.set(t,l)):(u=l.v!==eo,V(l,o(()=>Bc(a))));var p=Reflect.getOwnPropertyDescriptor(e,t);if(p!=null&&p.set&&p.set.call(s,a),!u){if(r&&typeof t==`string`){var m=n.get(`length`),h=Number(t);Number.isInteger(h)&&h>=m.v&&V(m,h+1)}Rc(i)}return!0},ownKeys(e){K(i);var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e);return t===void 0||t.v!==eo});for(var[r,a]of n)a.v===eo||r in e||t.push(r);return t},setPrototypeOf(){(function(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)})()}})}function Vc(e){try{if(typeof e==`object`&&e&&Ro in e)return e[Ro]}catch{}return e}function Hc(e,t){return Object.is(Vc(e),Vc(t))}function Uc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:``;return document.createTextNode(e)}function Wc(e){return Oc.call(e)}function Gc(e){return kc.call(e)}function H(e,t){return Wc(e)}function Kc(e){var t=Wc(e);return t instanceof Comment&&t.data===``?Gc(t):t}function U(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;t--;)n=Gc(n);return n}function qc(e,t,n){return document.createElementNS(t??to,e,void 0)}var Jc=!1;function Yc(e){var t=Sl,n=Tl;wl(null),El(null);try{return e()}finally{wl(t),El(n)}}function Xc(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(t,()=>Yc(n));var i=e.__on_r;e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),Jc||(Jc=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(var t of e.target.elements){var n;(n=t.__on_r)==null||n.call(t)}})},{capture:!0}))}function Zc(e){Tl===null&&(Sl===null&&function(){throw Error(`https://svelte.dev/e/effect_orphan`)}(),function(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}()),bl&&function(){throw Error(`https://svelte.dev/e/effect_in_teardown`)}()}function Qc(e,t){var n,r=Tl;r!==null&&(r.f&Do)!==0&&(e|=Do);var i={ctx:qo,deps:null,nodes:null,f:e|To|Co,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};(n=ps)==null||n.register_created_effect(i);var a=i;if(4&e)vs===null?Fs.ensure().schedule(i):vs.push(i);else if(t!==null){try{Hl(i)}catch(e){throw dl(i),e}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&No)===0&&(a=a.first,(e&bo)!==0&&(e&jo)!==0&&a!==null&&(a.f|=jo))}if(a!==null&&(a.parent=r,r!==null&&function(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(a,r),Sl!==null&&2&Sl.f&&(e&So)===0)){var o=Sl;(o.effects??=[]).push(a)}return i}function $c(){return Sl!==null&&!Cl}function el(e){var t=Qc(8,null);return ss(t,wo),t.teardown=e,t}function tl(e){Zc();var t=Tl.f;if(!(!Sl&&(t&xo)!==0&&(t&ko)===0))return nl(e);var n=qo;(n.e??=[]).push(e)}function nl(e){return Qc(1048580,e)}function rl(e){return Qc(4,e)}function W(e,t){var n={effect:null,ran:!1,deps:e};qo.l.$.push(n),n.effect=al(()=>{if(e(),!n.ran){n.ran=!0;var r=Tl;try{El(r.parent),q(t)}finally{El(r)}}})}function il(){var e=qo;al(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&wo)!==0&&n.deps!==null&&ss(n,Eo),Ll(n)&&Hl(n),t.ran=!1}})}function al(e){return Qc(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function G(e){vc(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{Qc(8,()=>e(...t.map(K)))})}function ol(e){return Qc(bo|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function sl(e){return Qc(yo|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e)}function cl(e){return Qc(524320,e)}function ll(e){var t=e.teardown;if(t!==null){var n=bl,r=Sl;xl(!0),wl(null);try{t.call(null)}finally{xl(n),wl(r)}}}function ul(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var r,i=function(){var e=n.ac;e!==null&&Yc(()=>{e.abort(Vo)}),r=n.next,(n.f&So)===0?dl(n,t):n.parent=null,n=r};n!==null;)i()}function dl(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;(t||262144&e.f)&&e.nodes!==null&&e.nodes.end!==null&&(fl(e.nodes.start,e.nodes.end),n=!0),ss(e,Ao),ul(e,t&&!n),Vl(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)i.stop();ll(e),e.f^=Ao,e.f|=Oo;var a=e.parent;a!==null&&a.first!==null&&pl(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function fl(e,t){for(;e!==null;){var n=e===t?null:Gc(e);e.remove(),e=n}}function pl(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ml(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];hl(e,r,!0);var i=()=>{n&&dl(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function hl(e,t,n){if((e.f&Do)===0){e.f^=Do;var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)(i.is_global||n)&&t.push(i);for(var a=e.first;a!==null;){var o=a.next;hl(a,t,((a.f&jo)!==0||(a.f&xo)!==0&&(e.f&bo)!==0)&&n),a=o}}}function gl(e){_l(e,!0)}function _l(e,t){if((e.f&Do)!==0){e.f^=Do,(e.f&wo)===0&&(ss(e,To),Fs.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next;_l(n,((n.f&jo)!==0||(n.f&xo)!==0)&&t),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(var a of i)(a.is_global||t)&&a.in()}}function vl(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Gc(n);t.append(n),n=i}}var yl=!1,bl=!1;function xl(e){bl=e}var Sl=null,Cl=!1;function wl(e){Sl=e}var Tl=null;function El(e){Tl=e}var Dl=null;function Ol(e){Sl!==null&&(Dl===null?Dl=[e]:Dl.push(e))}var kl=null,Al=0,jl=null,Ml=1,Nl=0,Pl=Nl;function Fl(e){Pl=e}function Il(){return++Ml}function Ll(e){var t=e.f;if((t&To)!==0)return!0;if(2&t&&(e.f&=-65537),(t&Eo)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Ll(a)&&wc(a),a.wv>e.wv)return!0}(t&Co)!==0&&ms===null&&ss(e,wo)}return!1}function Rl(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=e.reactions;if(r!==null&&(Dl===null||!io.call(Dl,e)))for(var i=0;i<r.length;i++){var a=r[i];2&a.f?Rl(a,t,!1):t===a&&(n?ss(a,To):(a.f&wo)!==0&&ss(a,Eo),qs(a))}}function zl(e){var t=kl,n=Al,r=jl,i=Sl,a=Dl,o=qo,s=Cl,c=Pl,l=e.f;kl=null,Al=0,jl=null,Sl=96&l?null:e,Dl=null,Jo(e.ctx),Cl=!1,Pl=++Nl,e.ac!==null&&(Yc(()=>{e.ac.abort(Vo)}),e.ac=null);try{e.f|=Io;var u=(0,e.fn)();e.f|=ko;var d=e.deps,f=ps?.is_fork;if(kl!==null){var p;if(f||Vl(e,Al),d!==null&&Al>0)for(d.length=Al+kl.length,p=0;p<kl.length;p++)d[Al+p]=kl[p];else e.deps=d=kl;if($c()&&(e.f&Co)!==0)for(p=Al;p<d.length;p++){var m;((m=d[p]).reactions??(m.reactions=[])).push(e)}}else !f&&d!==null&&Al<d.length&&(Vl(e,Al),d.length=Al);if(Qo()&&jl!==null&&!Cl&&d!==null&&!(6146&e.f))for(p=0;p<jl.length;p++)Rl(jl[p],e);if(i!==null&&i!==e){if(Nl++,i.deps!==null)for(var h=0;h<n;h+=1)i.deps[h].rv=Nl;if(t!==null)for(var g of t)g.rv=Nl;jl!==null&&(r===null?r=jl:r.push(...jl))}return(e.f&Lo)!==0&&(e.f^=Lo),u}catch(e){return is(e)}finally{e.f^=Io,kl=t,Al=n,jl=r,Sl=i,Dl=a,Jo(o),Cl=s,Pl=c}}function Bl(e,t){var n=t.reactions;if(n!==null){var r=ro.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&2&t.f&&(kl===null||!io.call(kl,t))){var a=t;(a.f&Co)!==0&&(a.f^=Co,a.f&=-65537),cs(a),function(e){if(e.effects!==null)for(var t of e.effects){var n,r;(t.teardown||t.ac)&&((n=t.teardown)==null||n.call(t),(r=t.ac)==null||r.abort(Vo),t.teardown=ho,t.ac=null,Vl(t,0),ul(t))}}(a),Vl(a,0)}}function Vl(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Bl(e,n[r])}function Hl(e){var t=e.f;if((t&Oo)===0){ss(e,wo);var n=Tl,r=yl;Tl=e,yl=!0;try{16777232&t?function(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&xo)===0&&dl(t),t=n}}(e):ul(e),ll(e);var i=zl(e);e.teardown=typeof i==`function`?i:null,e.wv=Ml}finally{yl=r,Tl=n}}}function Ul(){return Wl.apply(this,arguments)}function Wl(){return(Wl=Wa(function*(){yield Promise.resolve(),Hs()})).apply(this,arguments)}function K(e){var t,n=!!(2&e.f);if(Sl!==null&&!Cl&&!(Tl!==null&&(Tl.f&Oo)!==0||Dl!==null&&io.call(Dl,e))){var r=Sl.deps;if((Sl.f&Io)!==0)e.rv<Nl&&(e.rv=Nl,kl===null&&r!==null&&r[Al]===e?Al++:kl===null?kl=[e]:kl.push(e));else{var i;((i=Sl).deps??(i.deps=[])).push(e);var a=e.reactions;a===null?e.reactions=[Sl]:io.call(a,Sl)||a.push(Sl)}}if(bl&&jc.has(e))return jc.get(e);if(n){var o=e;if(bl){var s=o.v;return((o.f&wo)===0&&o.reactions!==null||Kl(o))&&(s=Cc(o)),jc.set(o,s),s}var c=(o.f&Co)===0&&!Cl&&Sl!==null&&(yl||(Sl.f&Co)!==0),l=(o.f&ko)===0;Ll(o)&&(c&&(o.f|=Co),wc(o)),c&&!l&&(Tc(o),Gl(o))}if((t=ms)!=null&&t.has(e))return ms.get(e);if((e.f&Lo)!==0)throw e.v;return e.v}function Gl(e){if(e.f|=Co,e.deps!==null)for(var t of e.deps)(t.reactions??=[]).push(e),2&t.f&&(t.f&Co)===0&&(Tc(t),Gl(t))}function Kl(e){if(e.v===eo)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(jc.has(t)||2&t.f&&Kl(t))return!0;return!1}function q(e){var t=Cl;try{return Cl=!0,e()}finally{Cl=t}}function J(e){if(typeof e==`object`&&e&&!(e instanceof EventTarget)){if(Ro in e)ql(e);else if(!Array.isArray(e))for(var t in e){var n=e[t];typeof n==`object`&&n&&Ro in n&&ql(n)}}}function ql(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!=`object`||!e||e instanceof EventTarget||t.has(e))){for(var n in t.add(e),e instanceof Date&&e.getTime(),e)try{ql(e[n],t)}catch{}var r=fo(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){var i=co(r);for(var a in i){var o=i[a].get;if(o)try{o.call(e)}catch{}}}}}var Jl=Symbol(`events`),Yl=new Set,Xl=new Set;function Zl(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function i(e){if(r.capture||eu.call(t,e),!e.cancelBubble)return Yc(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?ns(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function Y(e,t,n,r,i){var a={capture:r,passive:i},o=Zl(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&el(()=>{t.removeEventListener(e,o,a)})}function Ql(e,t,n){(t[Jl]??(t[Jl]={}))[e]=n}function $l(e){for(var t=0;t<e.length;t++)Yl.add(e[t]);for(var n of Xl)n(e)}function eu(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.call(e)||[],a=i[0]||e.target,o=0,s=e===e&&e[Jl];if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window))return void(e[Jl]=t);var l=i.indexOf(t);if(l===-1)return;c<=l&&(o=c)}if((a=i[o]||e.target)!==t){oo(e,`currentTarget`,{configurable:!0,get:()=>a||n});var u=Sl,d=Tl;wl(null),El(null);try{for(var f,p=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var h=a[Jl]?.[r];h==null||a.disabled&&e.target!==a||h.call(a,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||m===t||m===null)break;a=m}if(f){var g=function(e){queueMicrotask(()=>{throw e})};for(var _ of p)g(_);throw f}}finally{e[Jl]=t,delete e.currentTarget,wl(u),El(d)}}}var tu=(globalThis==null||(Ra=globalThis.window)==null?void 0:Ra.trustedTypes)&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function nu(e){var t=qc(`template`);return t.innerHTML=function(e){return tu?.createHTML(e)??e}(e.replaceAll(`<!>`,`<!---->`)),t.content}function ru(e,t){var n=Tl;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function X(e,t){var n,r=!!(1&t),i=!!(2&t),a=!e.startsWith(`<!>`);return()=>{n===void 0&&(n=nu(a?e:`<!>`+e),r||(n=Wc(n)));var t=i||Dc?document.importNode(n,!0):n.cloneNode(!0);return r?ru(Wc(t),t.lastChild):ru(t,t),t}}function iu(e,t){return function(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`svg`,i=!e.startsWith(`<!>`),a=!!(1&t),o=`<${r}>${i?e:`<!>`+e}</${r}>`;return()=>{if(!n){var e=Wc(nu(o));if(a)for(n=document.createDocumentFragment();Wc(e);)n.appendChild(Wc(e));else n=Wc(e)}var t=n.cloneNode(!0);return a?ru(Wc(t),t.lastChild):ru(t,t),t}}(e,t,`svg`)}function au(){var e=Uc((arguments.length>0&&arguments[0]!==void 0?arguments[0]:``)+``);return ru(e,e),e}function ou(){var e=document.createDocumentFragment(),t=document.createComment(``),n=Uc();return e.append(t,n),ru(t,n),e}function Z(e,t){e!==null&&e.before(t)}var su=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`],cu={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`},lu=[`touchstart`,`touchmove`];function uu(e){return lu.includes(e)}function du(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function fu(e,t){return function(e,t){var{target:n,anchor:r,props:i={},events:a,context:o,intro:s=!0,transformError:c}=t;(function(){if(Ec===void 0){Ec=window,Dc=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Oc=so(t,`firstChild`).get,kc=so(t,`nextSibling`).get,po(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),po(n)&&(n.__t=void 0)}})();var l=void 0,u=function(e){Fs.ensure();var t=Qc(524352,e);return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(n=>{e.outro?ml(t,()=>{dl(t),n(void 0)}):(dl(t),n(void 0))})}}(()=>{var t=r??n.appendChild(Uc());(function(e,t,n,r){new pc(e,t,n,r)})(t,{pending:()=>{}},t=>{Xo({}),o&&(qo.c=o),a&&(i.$$events=a),l=e(t,i)||{},Zo()},c);var s=new Set,u=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!s.has(r)){s.add(r);var i=uu(r);for(var a of[n,document]){var o=pu.get(a);o===void 0&&(o=new Map,pu.set(a,o));var c=o.get(r);c===void 0?(a.addEventListener(r,eu,{passive:i}),o.set(r,1)):o.set(r,c+1)}}}};return u(ao(Yl)),Xl.add(u),()=>{for(var e of s)for(var i of[n,document]){var a=pu.get(i),o=a.get(e);--o==0?(i.removeEventListener(e,eu),a.delete(e),a.size===0&&pu.delete(i)):a.set(e,o)}var c;(Xl.delete(u),t!==r)&&((c=t.parentNode)==null||c.removeChild(t))}});return mu.set(l,u),l}(e,t)}var pu=new Map,mu=new WeakMap,hu=new WeakMap,gu=new WeakMap,_u=new WeakMap,vu=new WeakMap,yu=new WeakMap,bu=new WeakMap,xu=new WeakMap,Su=class{constructor(e){var t=this,n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];Xa(this,`anchor`,void 0),Ka(this,hu,new Map),Ka(this,gu,new Map),Ka(this,_u,new Map),Ka(this,vu,new Set),Ka(this,yu,!0),Ka(this,bu,e=>{if(R(hu,this).has(e)){var n=R(hu,this).get(e),r=R(gu,this).get(n);if(r)gl(r),R(vu,this).delete(n);else{var i=R(_u,this).get(n);i&&(R(gu,this).set(n,i.effect),R(_u,this).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(var[a,o]of R(hu,this)){if(R(hu,this).delete(a),a===e)break;var s=R(_u,this).get(o);s&&(dl(s.effect),R(_u,this).delete(o))}var c=function(e,i){if(e===n||R(vu,t).has(e))return 1;var a=()=>{if(Array.from(R(hu,t).values()).includes(e)){var n=document.createDocumentFragment();vl(i,n),n.append(Uc()),R(_u,t).set(e,{effect:i,fragment:n})}else dl(i);R(vu,t).delete(e),R(gu,t).delete(e)};R(yu,t)||!r?(R(vu,t).add(e),ml(i,a,!1)):a()};for(var[l,u]of R(gu,this))c(l,u)}}),Ka(this,xu,e=>{R(hu,this).delete(e);var t=Array.from(R(hu,this).values());for(var[n,r]of R(_u,this))t.includes(n)||(dl(r.effect),R(_u,this).delete(n))}),this.anchor=e,Ja(yu,this,n)}ensure(e,t){var n=ps;!t||R(gu,this).has(e)||R(_u,this).has(e)||R(gu,this).set(e,cl(()=>t(this.anchor))),R(hu,this).set(n,e),R(bu,this).call(this,n)}};function Cu(e){qo===null&&Uo(),$a&&qo.l!==null?Du(qo).m.push(e):tl(()=>{var t=q(e);if(typeof t==`function`)return t})}function wu(e){qo===null&&Uo(),Cu(()=>()=>q(e))}function Tu(){var e=qo;return e===null&&Uo(),(t,n,r)=>{var i=e.s.$$events?.[t];if(i){var a=no(i)?i.slice():[i],o=function(e,t){var{bubbles:n=!1,cancelable:r=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}(t,n,r);for(var s of a)s.call(e.x,o);return!o.defaultPrevented}return!0}}function Eu(e){qo===null&&Uo(),qo.l===null&&function(){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}(),Du(qo).b.push(e)}function Du(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}function Q(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=new Su(e);function i(e,t){r.ensure(e,t)}ol(()=>{var e=!1;t(function(t){e=!0,i(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t)}),e||i(-1,null)},n?jo:0)}var Ou,ku=Symbol(`NaN`);function Au(e,t,n){var r=new Su(e),i=!Qo();ol(()=>{var e=t();e!=e&&(e=ku),i&&typeof e==`object`&&e&&(e={}),r.ensure(e,n)})}function ju(e,t){return t}function Mu(e,t){var n,r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(e.pending.size>0)for(var i of(n=new Set,e.pending.values()))for(var a of i)n.add(e.items.get(a).e);for(var o=0;o<t.length;o++){var s,c=t[o];(s=n)!=null&&s.has(c)?(c.f|=Po,vl(c,document.createDocumentFragment())):dl(t[o],r)}}function Nu(e,t,n,r,i){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=e,s=new Map;!(4&t)||(o=e.appendChild(Uc()));var c,l=null,u=z(()=>{var e=n();return no(e)?e:e==null?[]:ao(e)}),d=new Map,f=!0;function p(e){(m.effect.f&Oo)===0&&(m.pending.delete(e),m.fallback=l,function(e,t,n,r,i){var a,o,s,c,l,u=!!(8&r),d=t.length,f=e.items,p=Pu(e.effect.first),m=null,h=[],g=[];if(u)for(l=0;l<d;l+=1){var _;s=i(t[l],l),((c=f.get(s).e).f&Po)===0&&((_=c.nodes)==null||(_=_.a)==null||_.measure(),(o??=new Set).add(c))}for(l=0;l<d;l+=1){if(s=i(t[l],l),c=f.get(s).e,e.outrogroups!==null)for(var v of e.outrogroups)v.pending.delete(c),v.done.delete(c);var y;if((c.f&Do)!==0&&(gl(c),u&&((y=c.nodes)==null||(y=y.a)==null||y.unfix(),(o??=new Set).delete(c))),(c.f&Po)!==0){if(c.f^=Po,c!==p){var b=m?m.next:p;c===e.effect.last&&(e.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),Lu(e,m,c),Lu(e,c,b),Iu(c,b,n),h=[],g=[],p=Pu((m=c).next);continue}Iu(c,null,n)}if(c!==p){if(a!==void 0&&a.has(c)){if(h.length<g.length){var x,S=g[0];m=S.prev;var C=h[0],w=h[h.length-1];for(x=0;x<h.length;x+=1)Iu(h[x],S,n);for(x=0;x<g.length;x+=1)a.delete(g[x]);Lu(e,C.prev,w.next),Lu(e,m,C),Lu(e,w,S),p=S,m=w,--l,h=[],g=[]}else a.delete(c),Iu(c,p,n),Lu(e,c.prev,c.next),Lu(e,c,m===null?e.effect.first:m.next),Lu(e,m,c),m=c;continue}for(h=[],g=[];p!==null&&p!==c;)(a??=new Set).add(p),g.push(p),p=Pu(p.next);if(p===null)continue}(c.f&Po)===0&&h.push(c),m=c,p=Pu(c.next)}if(e.outrogroups!==null){for(var T of e.outrogroups){var E;T.pending.size===0&&(Mu(e,ao(T.done)),(E=e.outrogroups)==null||E.delete(T))}e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||a!==void 0){var ee=[];if(a!==void 0)for(c of a)(c.f&Do)===0&&ee.push(c);for(;p!==null;)(p.f&Do)===0&&p!==e.fallback&&ee.push(p),p=Pu(p.next);var te=ee.length;if(te>0){var ne=4&r&&d===0?n:null;if(u){for(l=0;l<te;l+=1){var re;(re=ee[l].nodes)==null||(re=re.a)==null||re.measure()}for(l=0;l<te;l+=1){var ie;(ie=ee[l].nodes)==null||(ie=ie.a)==null||ie.fix()}}(function(e,t,n){for(var r,i=t.length,a=t.length,o=function(){var n=t[s];ml(n,()=>{if(r){if(r.pending.delete(n),r.done.add(n),r.pending.size===0){var t=e.outrogroups;Mu(e,ao(r.done)),t.delete(r),t.size===0&&(e.outrogroups=null)}}else --a},!1)},s=0;s<i;s++)o();if(a===0){var c=n!==null;if(c){var l=n,u=l.parentNode;u.textContent=``,u.append(l),e.items.clear()}Mu(e,t,!c)}else r={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(r)})(e,ee,ne)}}u&&ns(()=>{if(o!==void 0)for(c of o){var e;(e=c.nodes)==null||(e=e.a)==null||e.apply()}})}(m,c,o,t,r),l!==null&&(c.length===0?(l.f&Po)===0?gl(l):(l.f^=Po,Iu(l,null,o)):ml(l,()=>{l=null})))}var m={effect:ol(()=>{for(var e=(c=K(u)).length,m=new Set,h=ps,g=0;g<e;g+=1){var _=c[g],v=r(_,g),y=f?null:s.get(v);y?(y.v&&Ic(y.v,_),y.i&&Ic(y.i,g)):(y=Fu(s,f?o:Ou??=Uc(),_,v,g,i,t,n),f||(y.e.f|=Po),s.set(v,y)),m.add(v)}(e===0&&a&&!l&&(f?l=cl(()=>a(o)):(l=cl(()=>a(Ou??=Uc()))).f|=Po),e>m.size&&function(){throw Error(`https://svelte.dev/e/each_key_duplicate`)}(),f)||(d.set(h,m),p(h)),K(u)}),items:s,pending:d,outrogroups:null,fallback:l};f=!1}function Pu(e){for(;e!==null&&(e.f&xo)===0;)e=e.next;return e}function Fu(e,t,n,r,i,a,o,s){var c=1&o?16&o?Nc(n):B(n,!1,!1):null,l=2&o?Nc(i):null;return{v:c,i:l,e:cl(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Iu(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Po)===0?t.nodes.start:n;r!==null;){var o=Gc(r);if(a.before(r),r===i)return;r=o}}function Lu(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Ru(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=arguments.length>4&&arguments[4]!==void 0&&arguments[4],a=e,o=``;if(n)var s=e;G(()=>{var e=Tl;if(o!==(o=t()??``)){if(n)return e.nodes=null,s.innerHTML=o,void(o!==``&&ru(Wc(s),s.lastChild));if(e.nodes!==null&&(fl(e.nodes.start,e.nodes.end),e.nodes=null),o!==``){var c=qc(r?`svg`:i?`math`:`template`,r?`http://www.w3.org/2000/svg`:i?`http://www.w3.org/1998/Math/MathML`:void 0);c.innerHTML=o;var l=r||i?c:c.content;if(ru(Wc(l),l.lastChild),r||i)for(;Wc(l);)a.before(Wc(l));else a.before(l)}}})}function zu(e,t,n,r,i){var a=t.$$slots?.[n],o=!1;!0===a&&(a=t[n===`default`?`children`:n],o=!0),a===void 0?i!==null&&i(e):a(e,o?()=>r:r)}function Bu(e,t,n){var r=new Su(e);ol(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},jo)}function Vu(e,t,n){rl(()=>{var r=q(()=>t(e,n?.())||{});if(n&&r!=null&&r.update){var i=!1,a={};al(()=>{var e=n();J(e),i&&Go(a,e)&&(a=e,r.update(e))}),i=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function Hu(e,t){var n,r=void 0;sl(()=>{r!==(r=t())&&(n&&=(dl(n),null),r&&(n=cl(()=>{rl(()=>r(e))})))})}function Uu(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Uu(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Wu(e){return typeof e==`object`?function(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Uu(e))&&(r&&(r+=` `),r+=t);return r}(e):e??``}var Gu=[...` 	
\r\f\xA0\v﻿`];function Ku(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?` !important;`:`;`,n=``;for(var r of Object.keys(e)){var i=e[r];i!=null&&i!==``&&(n+=` `+r+`: `+i+t)}return n}function qu(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Ju(e,t,n,r,i,a){var o=e.__className;if(o!==n||o===void 0){var s=function(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;o!==0&&!Gu.includes(r[o-1])||s!==r.length&&!Gu.includes(r[s])?o=s:r=(o===0?``:r.substring(0,o))+r.substring(s+1)}}return r===``?null:r}(n,r,a);s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];i!=null&&l===!!i[c]||e.classList.toggle(c,l)}return a}function Yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Xu(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=``;if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];n&&c.push(...Object.keys(n).map(qu)),r&&c.push(...Object.keys(r).map(qu));for(var l=0,u=-1,d=e.length,f=0;f<d;f++){var p=e[f];if(s?p===`/`&&e[f-1]===`*`&&(s=!1):a?a===p&&(a=!1):p===`/`&&e[f+1]===`*`?s=!0:p===`"`||p===`'`?a=p:p===`(`?o++:p===`)`&&o--,!s&&!1===a&&o===0){if(p===`:`&&u===-1)u=f;else if(p===`;`||f===d-1){if(u!==-1){var m=qu(e.substring(l,u).trim());c.includes(m)||(p!==`;`&&f++,i+=` `+e.substring(l,f).trim()+`;`)}l=f+1,u=-1}}}}return n&&(i+=Ku(n)),r&&(i+=Ku(r,!0)),(i=i.trim())===``?null:i}return e==null?null:String(e)}(t,r);i==null?e.removeAttribute(`style`):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Yu(e,n?.[0],r[0]),Yu(e,n?.[1],r[1],`important`)):Yu(e,n,r));return r}function Zu(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!no(t))return void console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);for(var r of e.options)r.selected=t.includes($u(r))}else{for(r of e.options)if(Hc($u(r),t))return void(r.selected=!0);n&&t===void 0||(e.selectedIndex=-1)}}function Qu(e){var t=new MutationObserver(()=>{Zu(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),el(()=>{t.disconnect()})}function $u(e){return`__value`in e?e.__value:e.value}var ed=Symbol(`class`),td=Symbol(`style`),nd=Symbol(`is custom element`),rd=Symbol(`is html`),id=Ho?`option`:`OPTION`,ad=Ho?`select`:`SELECT`,od=Ho?`progress`:`PROGRESS`;function sd(e,t){var n=dd(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===od)&&(e.value=t??``)}function cd(e,t,n,r){var i=dd(e);i[t]!==(i[t]=n)&&(t===`loading`&&(e[Bo]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&pd(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function ld(e,t,n,r){var i=dd(e),a=i[nd],o=!i[rd],s=t||{},c=e.nodeName===id;for(var l in t)l in n||(n[l]=null);(n.class?n.class=Wu(n.class):(r||n[ed])&&(n.class=null),n[td])&&(n.style??=null);var u,d,f,p,m,h,g=pd(e),_=function(l){var _=n[l];if(c&&l===`value`&&_==null)return e.value=e.__value=``,s[l]=_,0;if(l===`class`)return u=e.namespaceURI===`http://www.w3.org/1999/xhtml`,Ju(e,u,_,r,t?.[ed],n[ed]),s[l]=_,s[ed]=n[ed],0;if(l===`style`)return Xu(e,_,t?.[td],n[td]),s[l]=_,s[td]=n[td],0;if(_===(d=s[l])&&(_!==void 0||!e.hasAttribute(l))||(s[l]=_,(f=l[0]+l[1])===`$$`))return 0;if(f===`on`){var v={},y=`$$`+l,b=l.slice(2);if(p=function(e){return su.includes(e)}(b),function(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}(b)&&(b=b.slice(0,-7),v.capture=!0),!p&&d){if(_!=null)return 0;e.removeEventListener(b,s[y],v),s[y]=null}if(p)Ql(b,e,_),$l([b]);else if(_!=null){function t(e){s[l].call(this,e)}s[y]=Zl(b,e,t,v)}}else if(l===`style`)cd(e,l,_);else if(l===`autofocus`)(function(e,t){if(t){var n=document.body;e.autofocus=!0,ns(()=>{document.activeElement===n&&e.focus()})}})(e,!!_);else if(a||l!==`__value`&&(l!==`value`||_==null))if(l===`selected`&&c)(function(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)})(e,_);else if(m=l,o||(m=function(e){return e=e.toLowerCase(),cu[e]??e}(m)),h=m===`defaultValue`||m===`defaultChecked`,_!=null||a||h)h||g.includes(m)&&(a||typeof _!=`string`)?(e[m]=_,m in i&&(i[m]=eo)):typeof _!=`function`&&cd(e,m,_);else if(i[l]=null,m===`value`||m===`checked`){var x=e,S=t===void 0;if(m===`value`){var C=x.defaultValue;x.removeAttribute(m),x.defaultValue=C,x.value=x.__value=S?C:null}else{var w=x.defaultChecked;x.removeAttribute(m),x.defaultChecked=w,x.checked=!!S&&w}}else e.removeAttribute(l);else e.value=e.__value=_};for(var v in n)_(v);return s}function ud(e,t){var n=arguments.length>5?arguments[5]:void 0,r=arguments.length>6&&arguments[6]!==void 0&&arguments[6],i=arguments.length>7&&arguments[7]!==void 0&&arguments[7];vc(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var o=void 0,s={},c=e.nodeName===ad,l=!1;if(sl(()=>{var u=t(...a.map(K)),d=ld(e,o,u,n,r,i);for(var f of(l&&c&&`value`in u&&Zu(e,u.value),Object.getOwnPropertySymbols(s)))u[f]||dl(s[f]);for(var p of Object.getOwnPropertySymbols(u)){var m=u[p];p.description!==`@attach`||o&&m===o[p]||(s[p]&&dl(s[p]),s[p]=cl(()=>Hu(e,()=>m))),d[p]=m}o=d}),c){var u=e;rl(()=>{Zu(u,o.value,!0),Qu(u)})}l=!0})}function dd(e){return e.__attributes??={[nd]:e.nodeName.includes(`-`),[rd]:e.namespaceURI===to}}var fd=new Map;function pd(e){var t,n=e.getAttribute(`is`)||e.nodeName,r=fd.get(n);if(r)return r;fd.set(n,r=[]);for(var i=e,a=Element.prototype;a!==i;){for(var o in t=co(i))t[o].set&&r.push(o);i=fo(i)}return r}function md(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,r=new WeakSet;Xc(e,`input`,function(){var i=Wa(function*(i){var a=i?e.defaultValue:e.value;if(a=hd(e)?gd(a):a,n(a),ps!==null&&r.add(ps),yield Ul(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}});return function(e){return i.apply(this,arguments)}}()),q(t)==null&&e.value&&(n(hd(e)?gd(e.value):e.value),ps!==null&&r.add(ps)),al(()=>{var n=t();if(e===document.activeElement){var i=ps;if(r.has(i))return}hd(e)&&n===gd(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function hd(e){var t=e.type;return t===`number`||t===`range`}function gd(e){return e===``?null:+e}function _d(e,t,n){var r=so(e,t);r&&r.set&&(e[t]=n,el(()=>{e[t]=null}))}function vd(e,t){return e===t||e?.[Ro]===t}function yd(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=qo.r,i=Tl;return rl(()=>{var a,o;return al(()=>{a=o,o=[],q(()=>{e!==n(...o)&&(t(e,...o),a&&vd(n(...a),e)&&t(null,...a))})}),()=>{for(var a=i;a!==r&&a.parent!==null&&a.parent.f&Ao;)a=a.parent;var s=a.teardown;a.teardown=()=>{o&&vd(n(...o),e)&&t(null,...o),s?.()}}}),e}function bd(e){return function(){var t=[...arguments];return t[0].stopPropagation(),e?.apply(this,t)}}function xd(e){return function(){var t=[...arguments];return t[0].preventDefault(),e?.apply(this,t)}}function Sd(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=qo,n=t.l.u;if(n){var r,i=()=>J(t.s);if(e){var a=0,o={},s=xc(()=>{var e=!1,n=t.s;for(var r in n)n[r]!==o[r]&&(o[r]=n[r],e=!0);return e&&a++,a});i=()=>K(s)}n.b.length&&(r=()=>{Cd(t,i),_o(n.b)},Zc(),Qc(1048584,r)),tl(()=>{var e=q(()=>n.m.map(go));return()=>{for(var t of e)typeof t==`function`&&t()}}),n.a.length&&tl(()=>{Cd(t,i),_o(n.a)})}}function Cd(e,t){if(e.l.s)for(var n of e.l.s)K(n);t()}function wd(e){var t=Nc(0);return function(){return arguments.length===1?(V(t,K(t)+1),arguments[0]):(K(t),e())}}function Td(e,t){var n=e.$$events?.[t.type];for(var r of no(n)?n.slice():n==null?[]:[n])r.call(this,t)}var Ed={get(e,t){if(!e.exclude.includes(t))return K(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=Tl;try{El(e.parent_effect),e.special[t]=$({get[t](){return e.props[t]}},t,4)}finally{El(r)}}return e.special[t](n),Lc(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Lc(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function Dd(e,t){return new Proxy({props:e,exclude:t,special:{},version:Nc(0),parent_effect:Tl},Ed)}var Od={get(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(mo(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){for(var r=e.props.length;r--;){var i=e.props[r];mo(i)&&(i=i());var a=so(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(mo(r)&&(r=r()),typeof r==`object`&&r&&t in r){var i=so(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Ro||t===zo)return!1;for(var n of e.props)if(mo(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){var t=[];for(var n of e.props)if(mo(n)&&(n=n()),n){for(var r in n)t.includes(r)||t.push(r);for(var i of Object.getOwnPropertySymbols(n))t.includes(i)||t.push(i)}return t}};function kd(){return new Proxy({props:[...arguments]},Od)}function $(e,t,n,r){var i,a,o=!$a||!!(2&n),s=!!(8&n),c=!!(16&n),l=r,u=!0,d=()=>(u&&(u=!1,l=c?q(r):r),l);if(s){var f=Ro in e||zo in e;i=so(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;if(s?[a,m]=function(e){var t=ds;try{return ds=!1,[e(),ds]}finally{ds=t}}(()=>e[t]):a=e[t],a===void 0&&r!==void 0&&(a=d(),i&&(o&&function(){throw Error(`https://svelte.dev/e/props_invalid_value`)}(),i(a))),p=o?()=>{var n=e[t];return n===void 0?d():(u=!0,n)}:()=>{var n=e[t];return n!==void 0&&(l=void 0),n===void 0?l:n},o&&!(4&n))return p;if(i){var h=e.$$legacy;return function(e,t){return arguments.length>0?(o&&t&&!h&&!m||i(t?p():e),e):p()}}var g=!1,_=(1&n?xc:z)(()=>(g=!1,p()));s&&K(_);var v=Tl;return function(e,t){if(arguments.length>0){var n=t?K(_):o&&s?Bc(e):e;return V(_,n),g=!0,l!==void 0&&(l=n),e}return bl&&g||(v.f&Oo)!==0?_.v:K(_)}}function Ad(e){if(!(arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(e){var t=function(e){try{if(typeof window<`u`&&window.localStorage!==void 0)return window.localStorage[e]}catch{}}(`debug`);return t!=null&&t.endsWith(`*`)?e.startsWith(t.slice(0,-1)):e===t}(e)))return jd;var t=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Md[Math.abs(t)%Md.length]}(e);return function(){var n=[...arguments];console.log(`%c${e}`,`color:${t}`,...n)}}function jd(){}var Md=[`#0000CC`,`#0099FF`,`#009400`,`#8dd200`,`#CCCC00`,`#CC9933`,`#ae04e7`,`#ff35d7`,`#FF3333`,`#FF6600`,`#FF9933`,`#FFCC33`],Nd=0;function Pd(){return++Nd}function Fd(e){return parseInt(e,10)}function Id(e){return Ld.test(e)}var Ld=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function Rd(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function zd(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`||e.constructor.name===`Array`)}function Bd(e){return!0===e||!1===e}function Vd(e){if(typeof e==`number`)return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e==`bigint`)return Vd(Number(e));try{var t=e&&e.valueOf();if(t!==e)return Vd(t)}catch{return!1}return!1}function Hd(e){(Ud||=window.document.createElement(`div`)).style.color=``,Ud.style.color=e;var t=Ud.style.color;return t===``?void 0:t.replace(/\s+/g,``).toLowerCase()}var Ud=void 0;function Wd(e){return typeof e==`string`&&e.length<99&&!!Hd(e)}function Gd(e,t){if(typeof e==`number`||typeof e==`string`||typeof e==`boolean`||e===void 0)return typeof e;if(typeof e==`bigint`)return`number`;if(e===null)return`null`;if(Array.isArray(e))return`array`;if(Rd(e))return`object`;var n=t.stringify(e);return n&&Id(n)?`number`:n===`true`||n===`false`?`boolean`:n===`null`?`null`:`unknown`}var Kd=/^https?:\/\/\S+$/;function qd(e){return typeof e==`string`&&Kd.test(e)}function Jd(e,t){if(e===``)return``;var n=e.trim();return n===`null`?null:n===`true`||n!==`false`&&(Id(n)?t.parse(n):e)}var Yd=[];function Xd(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Zd(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw TypeError(`Array expected`);function r(e,i){(!Array.isArray(e)&&!Rd(e)||t&&i.length>0)&&(n[pn(i)]=!0),Rd(e)&&Object.keys(e).forEach(t=>{r(e[t],i.concat(t))})}for(var i=Math.min(e.length,1e4),a=0;a<i;a++)r(e[a],Yd);return Object.keys(n).sort().map(fn)}function Qd(e,t,n){if(!(t<=e))for(var r=e;r<t;r++)n(r)}function $d(e,t){return e.length>t?e.slice(0,t):e}function ef(e){return L({},e)}function tf(e){return Object.values(e)}function nf(e,t,n,r){var i=e.slice(0),a=i.splice(t,n);return i.splice.apply(i,[t+r,0,...a]),i}function rf(e,t,n){return e.slice(0,t).concat(n).concat(e.slice(t))}function af(e,t){try{return t.parse(e)}catch{return t.parse(br(e))}}function of(e,t){try{return af(e,t)}catch{return}}function sf(e,t){e=e.replace(lf,``);try{return t(e)}catch{}try{return t(`{`+e+`}`)}catch{}try{return t(`[`+e+`]`)}catch{}throw Error(`Failed to parse partial JSON`)}function cf(e){e=e.replace(lf,``);try{return br(e)}catch{}try{var t=br(`[`+e+`]`);return t.substring(1,t.length-1)}catch{}try{var n=br(`{`+e+`}`);return n.substring(1,n.length-1)}catch{}throw Error(`Failed to repair partial JSON`)}var lf=/,\s*$/;function uf(e,t){var n=bf.exec(t);if(n){var r=Fd(n[2]),i=function(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.length,i=0,a=n;a<r;a++)e.charAt(a)===t&&i++;return i}(e,`
`,0,r),a=r-e.lastIndexOf(`
`,r)-1;return{position:r,line:i,column:a,message:t.replace(bf,()=>`line ${i+1} column ${a+1}`)}}var o=xf.exec(t),s=o?Fd(o[1]):void 0,c=s===void 0?void 0:s-1,l=Sf.exec(t),u=l?Fd(l[1]):void 0,d=u===void 0?void 0:u-1;return{position:c!==void 0&&d!==void 0?function(e,t,n){for(var r=e.indexOf(`
`),i=1;i<t&&r!==-1;)r=e.indexOf(`
`,r+1),i++;return r===-1?void 0:r+n+1}(e,c,d):void 0,line:c,column:d,message:t.replace(/^JSON.parse: /,``).replace(/ of the JSON data$/,``)}}function df(e,t){try{var n=Sr.parse(e),r=pn(t),i=n.pointers[r];if(i)return{path:t,line:i.key?i.key.line:i.value?i.value.line:0,column:i.key?i.key.column:i.value?i.value.column:0,from:i.key?i.key.pos:i.value?i.value.pos:0,to:i.keyEnd?i.keyEnd.pos:i.valueEnd?i.valueEnd.pos:0}}catch(e){console.error(e)}return{path:t,line:0,column:0,from:0,to:0}}function ff(e){return Rd(e)?e.json===void 0?e.text===void 0?`Content must contain either a property "json" or a property "text"`:typeof e.text==`string`?void 0:`Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?`:e.text===void 0?void 0:`Content must contain either a property "json" or a property "text" but not both`:`Content must be an object`}function pf(e){return Rd(e)&&typeof e.text==`string`}function mf(e){return Rd(e)&&e.json!==void 0}function hf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return pf(e)?e:{text:n.stringify(e.json,null,t)}}function gf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return mf(e)?e:{json:t.parse(e.text)}}function _f(e,t,n){return hf(e,t,n).text}function vf(e,t){return yf(e,t)>t}function yf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(pf(e))return e.text.length;var n=e.json,r=0;return function e(n){if(Array.isArray(n)){if((r+=n.length-1+2)>t)return;for(var i=0;i<n.length;i++)if(e(n[i]),r>t)return}else if(Rd(n)){var a=Object.keys(n);r+=2+a.length+(a.length-1);for(var o=0;o<a.length;o++){var s=a[o],c=n[s];r+=s.length+2,e(c)}}else r+=typeof n==`string`?n.length+2:String(n).length}(n),r}var bf=/(position|char) (\d+)/,xf=/line (\d+)/,Sf=/column (\d+)/;function Cf(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function wf(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&Mf.test(t)}var Tf,Ef,Df,Of,kf,Af,jf,Mf=/[,:]\S/;function Nf(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:n}=e;return t?n?Pf:Ff:n?If:Lf}(function(e){e.text=`text`,e.tree=`tree`,e.table=`table`})(Tf||={}),function(e){e.after=`after`,e.inside=`inside`,e.key=`key`,e.value=`value`,e.multi=`multi`,e.text=`text`}(Ef||={}),function(e){e.after=`after`,e.key=`key`,e.value=`value`,e.inside=`inside`}(Df||={}),function(e){e.info=`info`,e.warning=`warning`,e.error=`error`}(Of||={}),function(e){e.key=`key`,e.value=`value`}(kf||={}),function(e){e.asc=`asc`,e.desc=`desc`}(Af||={}),function(e){e.no=`no`,e.self=`self`,e.nextInside=`nextInside`}(jf||={});var Pf={escapeValue:e=>Rf(Hf(String(e))),unescapeValue:e=>Uf(zf(e))},Ff={escapeValue:e=>Hf(String(e)),unescapeValue:e=>Uf(e)},If={escapeValue:e=>Rf(String(e)),unescapeValue:e=>zf(e)},Lf={escapeValue:e=>String(e),unescapeValue:e=>e};function Rf(e){return e.replace(/[^\x20-\x7F]/g,e=>e===`\b`||e===`\f`||e===`
`||e===`\r`||e===`	`?e:`\\u`+(`000`+e.codePointAt(0)?.toString(16)).slice(-4))}function zf(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,e=>{try{var t=JSON.parse(`"`+e+`"`);return Bf[t]||t}catch{return e}})}var Bf={'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},Vf={'\\"':`"`,"\\\\":`\\`,"\\/":`/`,"\\b":`\b`,"\\f":`\f`,"\\n":`
`,"\\r":`\r`,"\\t":`	`};function Hf(e){return e.replace(/["\b\f\n\r\t\\]/g,e=>Bf[e]||e)}function Uf(e){return e.replace(/\\["bfnrt\\]/g,e=>Vf[e]||e)}function Wf(e){return typeof e==`string`?e.endsWith(`
`)?e+`
`:e:String(e)}function Gf(e,t){return qf(e,e=>e.nodeName.toUpperCase()===t.toUpperCase())}function Kf(e,t,n){return qf(e,e=>function(e,t,n){return typeof e.getAttribute==`function`&&e.getAttribute(t)===n}(e,t,n))}function qf(e,t){return!!Jf(e,t)}function Jf(e,t){for(var n=e;n&&!t(n);)n=n.parentNode;return n}function Yf(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)??void 0}function Xf(e){var t=Yf(e)?.document.activeElement;return!!t&&qf(t,t=>t===e)}function Zf(e,t){return Jf(e,e=>e.nodeName===t)}function Qf(e){return Kf(e,`data-type`,`selectable-key`)?Ef.key:Kf(e,`data-type`,`selectable-value`)?Ef.value:Kf(e,`data-type`,`insert-selection-area-inside`)?Ef.inside:Kf(e,`data-type`,`insert-selection-area-after`)?Ef.after:Ef.multi}function $f(e){return encodeURIComponent(pn(e))}function ep(e){var t=Jf(e,e=>!(e==null||!e.hasAttribute)&&e.hasAttribute(`data-path`))?.getAttribute(`data-path`)??void 0;return t?fn(decodeURIComponent(t)):void 0}function tp(e){var{allElements:t,currentElement:n,direction:r,hasPrio:i=()=>!0,margin:a=10}=e,o=h(t.filter(function(e){var t=e.getBoundingClientRect();return t.width>0&&t.height>0}),c),s=c(n);function c(e){var t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2,rect:t,element:e}}function l(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e.x-t.x,i=(e.y-t.y)*n;return Math.sqrt(r*r+i*i)}var u=e=>l(e,s);if(r===`Left`||r===`Right`){var d=r===`Left`?o.filter(e=>{return t=s,e.rect.left+a<t.rect.left;var t}):o.filter(e=>{return t=s,e.rect.right>t.rect.right+a;var t});return(jt(d.filter(e=>{return t=e,n=s,Math.abs(t.y-n.y)<a;var t,n}),u)||jt(d,e=>l(e,s,10)))?.element}if(r===`Up`||r===`Down`){var f=r===`Up`?o.filter(e=>{return t=s,e.y+a<t.y;var t}):o.filter(e=>{return t=s,e.y>t.y+a;var t});return(jt(f.filter(e=>i(e.element)),u)||jt(f,u))?.element}}function np(){var e,t,n;return typeof navigator<`u`&&(e=((t=navigator)==null||(t=t.platform)==null?void 0:t.toUpperCase().includes(`MAC`))??((n=navigator)==null||(n=n.userAgentData)==null||(n=n.platform)==null?void 0:n.toUpperCase().includes(`MAC`)))!=null&&e}function rp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`+`,n=[];ip(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:np)&&n.push(`Ctrl`),e.altKey&&n.push(`Alt`),e.shiftKey&&n.push(`Shift`);var r=e.key.length===1?e.key.toUpperCase():e.key;return r in ap||n.push(r),n.join(t)}function ip(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:np;return e.ctrlKey||e.metaKey&&t()}var ap={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function op(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}op(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var sp=X(`<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>`),cp=X(`<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>`);function lp(e,t){Xo(t,!1);var n=$(t,`popup`,8),r=$(t,`closeAbsolutePopup`,8),i=B(),a=B();function o(e){n().options&&n().options.closeOnOuterClick&&!qf(e.target,e=>e===K(i))&&r()(n().id)}function s(e){rp(e)===`Escape`&&(e.preventDefault(),e.stopPropagation(),r()(n().id))}Cu(function(){K(a)&&K(a).focus()}),Sd();var c=cp();Y(`mousedown`,Ec,function(e){o(e)},!0),Y(`keydown`,Ec,s,!0),Y(`wheel`,Ec,function(e){o(e)},!0);var l=H(c),u=e=>{var t=sp(),r=H(t);yd(r,e=>V(a,e),()=>K(a)),Bu(U(r,2),()=>n().component,(e,t)=>{t(e,kd(()=>n().props))}),G(e=>Xu(t,e),[()=>(K(i),J(n()),q(()=>function(e,t){var n=e.getBoundingClientRect(),{left:r,top:i,positionAbove:a,positionLeft:o}=function(){if(t.anchor){var{anchor:e,width:n=0,height:r=0,offsetTop:i=0,offsetLeft:a=0,position:o}=t,{left:s,top:c,bottom:l,right:u}=e.getBoundingClientRect(),d=o===`top`||c+r>window.innerHeight&&c>r,f=o===`left`||s+n>window.innerWidth&&s>n;return{left:f?u-a:s+a,top:d?c-i:l+i,positionAbove:d,positionLeft:f}}if(typeof t.left==`number`&&typeof t.top==`number`){var{left:p,top:m,width:h=0,height:g=0}=t;return{left:p,top:m,positionAbove:m+g>window.innerHeight&&m>g,positionLeft:p+h>window.innerWidth&&p>h}}throw Error(`Invalid config: pass either "left" and "top", or pass "anchor"`)}();return(a?`bottom: ${n.top-i}px;`:`top: ${i-n.top}px;`)+(o?`right: ${n.left-r}px;`:`left: ${r-n.left}px;`)}(K(i),n().options)))]),Z(e,t)};Q(l,e=>{K(i)&&e(u)}),yd(c,e=>V(i,e),()=>K(i)),Y(`mousedown`,c,function(e){e.stopPropagation()}),Y(`keydown`,c,s),Z(e,c),Zo()}var up=X(`<!> <!>`,1);function dp(e,t){Xo(t,!1);var n=Ad(`jsoneditor:AbsolutePopup`),r=B([],!0);function i(e){var t=K(r).findIndex(t=>t.id===e);if(t!==-1){var n=K(r)[t];n.options.onClose&&n.options.onClose(),V(r,K(r).filter(t=>t.id!==e))}}(function(e,t){$o().set(e,t)})(`absolute-popup`,{openAbsolutePopup:function(e,t,i){n(`open...`,t,i);var a={id:Pd(),component:e,props:t||{},options:i||{}};return V(r,[...K(r),a]),a.id},closeAbsolutePopup:i}),W(()=>K(r),()=>{n(`popups`,K(r))}),il(),Sd(!0);var a=up(),o=Kc(a);Nu(o,1,()=>K(r),ju,(e,t)=>{lp(e,{get popup(){return K(t)},closeAbsolutePopup:i})}),zu(U(o,2),t,`default`,{},null),Z(e,a),Zo()}function fp(e,t){for(var n=new Set(t),r=e.replace(/ \(copy( \d+)?\)$/,``),i=e,a=1;n.has(i);)i=`${r} (${`copy`+(a>1?` `+a:``)})`,a++;return i}function pp(e,t){var n=t-3;return e.length>t?e.substring(0,n)+`...`:e}function mp(e){if(e===``)return``;var t=e.toLowerCase();if(t===`null`)return null;if(t===`true`)return!0;if(t===`false`)return!1;if(t!==`undefined`){var n=Number(e);return isNaN(n)||isNaN(parseFloat(e))?e:n}}var hp={id:`jsonquery`,name:`JSONQuery`,description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:n,sort:r,projection:i}=t,a=[];n&&n.path&&n.relation&&n.value&&a.push([`filter`,[(o=n.relation,ti(`1 ${o} 1`)[0]),gp(n.path),mp(n.value)]]);var o;return r&&r.path&&r.direction&&a.push([`sort`,gp(r.path),r.direction===`desc`?`desc`:`asc`]),i&&i.paths&&(i.paths.length>1?a.push([`pick`,...i.paths.map(gp)]):a.push([`map`,gp(i.paths[0])])),ii([`pipe`,...a])},executeQuery:function(e,t,n){var r=Cf(n,JSON)?e:function(e){var t=n.stringify(e);return t===void 0?void 0:JSON.parse(t)}(e);return t.trim()===``?r:ai(r,t)}};function gp(e){return[`get`,...e]}var _p=iu(`<g></g>`);function vp(e,t){Xo(t,!1);var n=870711,r=B(``),i=$(t,`data`,8);function a(e){if(!e||!e.raw)return``;var t=e.raw,r={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(e,t)=>{var i=`fa-${(n+=1).toString(16)}`;return r[t]=i,` id="${i}"`}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(e,t,n,i)=>{var a=t||i;return a&&r[a]?`#${r[a]}`:e}),t}W(()=>J(i()),()=>{V(r,a(i()))}),il();var o=_p();Ru(o,()=>K(r),!0),Z(e,o),Zo()}op(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var yp=iu(`<svg><!></svg>`),bp=iu(`<path></path>`),xp=iu(`<polygon></polygon>`),Sp=iu(`<!><!><!>`,1);function Cp(e,t){var n=Dd(Dd(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`data`,`scale`,`spin`,`inverse`,`pulse`,`flip`,`label`,`style`]);Xo(t,!1);var r=$(t,`class`,8,``),i=$(t,`data`,8),a=B(),o=$(t,`scale`,8,1),s=$(t,`spin`,8,!1),c=$(t,`inverse`,8,!1),l=$(t,`pulse`,8,!1),u=$(t,`flip`,8,void 0),d=$(t,`label`,8,``),f=$(t,`style`,8,``),p=B(10),m=B(10),h=B(),g=B();function _(){var e=1;return o()!==void 0&&(e=Number(o())),isNaN(e)||e<=0?(console.warn(`Invalid prop: prop "scale" should be a number over 0.`),1):1*e}function v(){return K(a)?Math.max(K(a).width,K(a).height)/16:1}W(()=>(J(i()),J(f()),J(o())),()=>{V(a,function(e){var t;if(e){if(!(`definition`in e)){if(`iconName`in e&&`icon`in e){e.iconName;var[n,r,,,i]=e.icon;t={width:n,height:r,paths:(Array.isArray(i)?i:[i]).map(e=>({d:e}))}}else t=e[Object.keys(e)[0]];return t}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(i())),f(),o(),V(p,K(a)?K(a).width/v()*_():0),V(m,K(a)?K(a).height/v()*_():0),V(h,function(){var e=``;f()!==null&&(e+=f());var t=_();return t===1?e.length===0?``:e:(e===``||e.endsWith(`;`)||(e+=`; `),`${e}font-size: ${t}em`)}()),V(g,K(a)?`0 0 ${K(a).width} ${K(a).height}`:`0 0 ${K(p)} ${K(m)}`)}),il(),Sd(),function(e,t){var n=Dd(Dd(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`width`,`height`,`box`,`spin`,`inverse`,`pulse`,`flip`,`style`,`label`]),r=$(t,`class`,8,``),i=$(t,`width`,8),a=$(t,`height`,8),o=$(t,`box`,8,`0 0 0 0`),s=$(t,`spin`,8,!1),c=$(t,`inverse`,8,!1),l=$(t,`pulse`,8,!1),u=$(t,`flip`,8,`none`),d=$(t,`style`,8,``),f=$(t,`label`,8,``),p=yp();ud(p,()=>L(L({version:`1.1`,class:`fa-icon ${r()??``}`,width:i(),height:a(),"aria-label":f(),role:f()?`img`:`presentation`,viewBox:o(),style:d()},n),{},{[ed]:{"fa-spin":s(),"fa-pulse":l(),"fa-inverse":c(),"fa-flip-horizontal":u()===`horizontal`,"fa-flip-vertical":u()===`vertical`}}),void 0,void 0,void 0,`svelte-v67cny`),zu(H(p),t,`default`,{},null),Z(e,p)}(e,kd({get label(){return d()},get width(){return K(p)},get height(){return K(m)},get box(){return K(g)},get style(){return K(h)},get spin(){return s()},get flip(){return u()},get inverse(){return c()},get pulse(){return l()},get class(){return r()}},()=>n,{children:(e,n)=>{var r=ou();zu(Kc(r),t,`default`,{},e=>{var t=Sp(),n=Kc(t);Nu(n,1,()=>(K(a),q(()=>K(a)?.paths||[])),ju,(e,t)=>{var n=bp();ud(n,()=>L({},K(t))),Z(e,n)});var r=U(n);Nu(r,1,()=>(K(a),q(()=>K(a)?.polygons||[])),ju,(e,t)=>{var n=xp();ud(n,()=>L({},K(t))),Z(e,n)});var i=U(r),o=e=>{vp(e,{get data(){return K(a)},set data(e){V(a,e)},$$legacy:!0})};Q(i,e=>{K(a),q(()=>K(a)?.raw)&&e(o)}),Z(e,t)}),Z(e,r)},$$slots:{default:!0}})),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var wp=X(`<div role="checkbox" tabindex="-1"><!></div>`);function Tp(e,t){Xo(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`readOnly`,9),a=$(t,`onPatch`,9),o=$(t,`focus`,9);Sd(!0);var s,c=wp(),l=H(c),u=z(()=>!0===r()?si:li);Cp(l,{get data(){return K(u)}}),G(()=>{cd(c,`aria-checked`,!0===r()),s=Ju(c,1,`jse-boolean-toggle svelte-eli4ob`,null,s,{"jse-readonly":i()}),cd(c,`title`,i()?`Boolean value ${r()}`:`Click to toggle this boolean value`)}),Y(`mousedown`,c,function(e){e.stopPropagation(),i()||(a()([{op:`replace`,path:pn(n()),value:!r()}]),o()())}),Z(e,c),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var Ep=X(`<div class="jse-color-picker-popup svelte-v77py2"></div>`);function Dp(e,t){Xo(t,!1);var n=$(t,`color`,8),r=$(t,`onChange`,8),i=$(t,`showOnTop`,8),a=B(),o=()=>{};Cu(Wa(function*(){var e=new((yield te(()=>import(`./vanilla-picker-B0M5CSQx.js`),[]))?.default)({parent:K(a),color:n(),popup:i()?`top`:`bottom`,onDone(e){var t=e.rgba[3]===1?e.hex.substring(0,7):e.hex;r()(t)}});e.show(),o=()=>{e.destroy()}})),wu(()=>{o()}),Sd();var s=Ep();yd(s,e=>V(a,e),()=>K(a)),Z(e,s),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var Op=X(`<button type="button"></button>`);function kp(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),{openAbsolutePopup:i}=Yo(`absolute-popup`),a=$(t,`path`,9),o=$(t,`value`,9),s=$(t,`readOnly`,9),c=$(t,`onPatch`,9),l=$(t,`focus`,9);function u(e){c()([{op:`replace`,path:pn(a()),value:e}]),d()}function d(){l()()}W(()=>J(o()),()=>{V(n,Hd(o()))}),W(()=>(J(s()),J(o())),()=>{V(r,s()?`Color ${o()}`:`Click to open a color picker`)}),il(),Sd(!0);var f,p=Op();G(()=>{f=Ju(p,1,`jse-color-picker-button svelte-13mgyo6`,null,f,{"jse-readonly":s()}),Xu(p,`background: ${K(n)??``}`),cd(p,`title`,K(r)),cd(p,`aria-label`,K(r))}),Y(`click`,p,function(e){if(!s()){var t=e.target,n=t.getBoundingClientRect().top,r=(Yf(t)?.innerHeight??0)-n<300&&n>300;i(Dp,{color:o(),onChange:u,showOnTop:r},{anchor:t,closeOnOuterClick:!0,onClose:d,offsetTop:18,offsetLeft:-8,height:300})}}),Z(e,p),Zo()}var Ap=1e3,jp=100,Mp=100,Np=2e4,Pp=[{start:0,end:jp}],Fp=1048576,Ip=1048576,Lp=`Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value`,Rp=`Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)`,zp=`hover-insert-inside`,Bp=`hover-insert-after`,Vp=`hover-collection`,Hp=`valid`,Up=`repairable`,Wp=336,Gp=260,Kp=100,qp={[Af.asc]:`ascending`,[Af.desc]:`descending`};function Jp(e){for(var t=Lt(e,e=>e.start),n=[t[0]],r=0;r<t.length;r++){var i=n.length-1,a=n[i],o=t[r];o.start<=a.end?n[i]={start:Math.min(a.start,o.start),end:Math.max(a.end,o.end)}:n.push(o)}return n}function Yp(e){return Xp(e)+jp}function Xp(e){return Math.floor(e/jp)*jp}function Zp(e){return!!e&&(e.type===`space`||!0===e.space)}function Qp(e){return!!e&&(e.type===`separator`||!0===e.separator)}function $p(e){return!!e&&e.type===`label`&&typeof e.text==`string`}function em(e){return!!e&&typeof e.onClick==`function`}function tm(e){return!!e&&e.type===`dropdown-button`&&em(e.main)&&Array.isArray(e.items)}function nm(e){return!!e&&e.type===`row`&&Array.isArray(e.items)}function rm(e){return!!e&&e.type===`column`&&Array.isArray(e.items)}function im(e){return Rd(e)&&Rd(e.parseError)}function am(e){return Rd(e)&&Array.isArray(e.validationErrors)}function om(e){return Rd(e)&&Array.isArray(e.path)&&typeof e.message==`string`&&`severity`in e}function sm(e){return Rd(e)&&om(e)&&typeof e.isChildError==`boolean`}function cm(e){return Rd(e)&&typeof e.action==`function`&&Rd(e.props)}function lm(e){return e!==void 0&&e.type===`object`}function um(e){return e!==void 0&&e.type===`array`}function dm(e){return e!==void 0&&e.type===`value`}function fm(e){return lm(e)||um(e)}function pm(e){return e!==void 0&&Array.isArray(e.searchResults)}function mm(e){return!!e&&e.type===`tree`}function hm(e){return!!e&&e.type===`text`}function gm(e){return!!e&&e.type===`mode`}function _m(e){var{json:t,expand:n}=e,r=function(e){var{json:t,factory:n}=e;return Array.isArray(t)?n.createArrayDocumentState():Rd(t)?n.createObjectDocumentState():t===void 0?void 0:n.createValueDocumentState()}({json:t,factory:bm});return n&&r?Em(t,r,[],n):r}function vm(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:`array`,expanded:e,visibleSections:Pp,items:[]}}function ym(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:`object`,expanded:e,properties:{}}}var bm={createObjectDocumentState:ym,createArrayDocumentState:vm,createValueDocumentState:function(){return{type:`value`}}};function xm(e,t,n,r){var{createObjectDocumentState:i,createArrayDocumentState:a,createValueDocumentState:o}=r;return function e(t,n,r){if(Array.isArray(t)){var s=um(n)?n:a();if(r.length===0)return s;var c=Fd(r[0]),l=e(t[c],s.items[c],r.slice(1));return on(s,[`items`,r[0]],l)}if(Rd(t)){var u=lm(n)?n:i();if(r.length===0)return u;var d=r[0],f=e(t[d],u.properties[d],r.slice(1));return on(u,[`properties`,d],f)}return dm(n)?n:o()}(e,t,n)}function Sm(e,t){return Cm(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(e,t)=>{if(e!==void 0&&t!==void 0)return Array.isArray(e)?um(t)?t:vm({expanded:!!fm(t)&&t.expanded}):Rd(e)?lm(t)?t:ym({expanded:!!fm(t)&&t.expanded}):dm(t)?t:void 0},()=>!0)}function Cm(e,t,n,r,i){var a=r(e,t,n);if(Array.isArray(e)&&um(a)&&i(a)){var o=[];return wm(e,a.visibleSections,t=>{var s=n.concat(String(t)),c=Cm(e[t],a.items[t],s,r,i);c!==void 0&&(o[t]=c)}),Xd(o,a.items)?a:L(L({},a),{},{items:o})}if(Rd(e)&&lm(a)&&i(a)){var s={};return Object.keys(e).forEach(t=>{var o=n.concat(t),c=Cm(e[t],a.properties[t],o,r,i);c!==void 0&&(s[t]=c)}),Xd(Object.values(s),Object.values(a.properties))?a:L(L({},a),{},{properties:s})}return a}function wm(e,t,n){t.forEach(t=>{var{start:r,end:i}=t;Qd(r,Math.min(e.length,i),n)})}function Tm(e,t){for(var n=e,r=[],i=0;i<t.length;){if(Array.isArray(n)){var a=t[i];r.push(`items`,a),n=n[Fd(a)]}else{if(!Rd(n))throw Error(`Cannot convert path: Object or Array expected at index ${i}`);var o=t[i];r.push(`properties`,o),n=n[o]}i++}return r}function Em(e,t,n,r){for(var i=t,a=function(t){var r=n.slice(0,t);i=Pm(e,i,r,(e,r)=>{var i=fm(r)&&!r.expanded?L(L({},r),{},{expanded:!0}):r;return um(i)?function(e,t){if(function(e,t){return e.some(e=>t>=e.start&&t<e.end)}(e.visibleSections,t))return e;var n=Xp(t),r={start:n,end:Yp(n)};return L(L({},e),{},{visibleSections:Jp(e.visibleSections.concat(r))})}(i,Fd(n[t])):i})},o=0;o<n.length;o++)a(o);return Pm(e,i,n,(e,t)=>function(e,t,n,r){return Cm(e,t,n,(e,t,n)=>Array.isArray(e)&&r(n)?um(t)?t.expanded?t:L(L({},t),{},{expanded:!0}):vm({expanded:!0}):Rd(e)&&r(n)?lm(t)?t.expanded?t:L(L({},t),{},{expanded:!0}):ym({expanded:!0}):t,e=>fm(e)&&e.expanded)}(e,t,[],r))}function Dm(e,t,n,r){return Pm(e,t,n,(e,t)=>r?function(e,t,n){return Cm(e,t,n,(e,t)=>Om(t),()=>!0)}(e,t,n):Om(t))}function Om(e){return um(e)&&e.expanded?L(L({},e),{},{expanded:!1,visibleSections:Pp}):lm(e)&&e.expanded?L(L({},e),{},{expanded:!1}):e}function km(e,t,n){var r={json:e,documentState:t},i=n.reduce((e,t)=>({json:gn(e.json,[t]),documentState:Am(e.json,e.documentState,t)}),r);return{json:i.json,documentState:Sm(i.json,i.documentState)}}function Am(e,t,n){if(Kt(n))return Fm(e,t,n,void 0);if(qt(n))return Im(e,t,n);if(Jt(n)){var r=En(e,n.path),i=Rm(e,t,r);return i?Nm(e,t,r,{type:`value`,enforceString:i}):t}return Yt(n)||Xt(n)?function(e,t,n){if(Xt(n)&&n.from===n.path)return t;var r=t,i=En(e,n.from),a=jm(e,r,i);return Xt(n)&&(r=Im(e,r,{path:n.from})),r=Fm(e,r,{path:n.path},a),r}(e,t,n):t}function jm(e,t,n){try{return I(t,Tm(e,n))}catch{return}}function Mm(e,t,n,r,i){return cn(xm(e,t,n,i),Tm(e,n),t=>r(I(e,n),t))}function Nm(e,t,n,r){return function(e,t,n,r,i){return on(xm(e,t,n,i),Tm(e,n),r)}(e,t,n,r,bm)}function Pm(e,t,n,r){return Mm(e,t,n,r,bm)}function Fm(e,t,n,r){var i=En(e,n.path),a=t;return a=Pm(e,a,Ct(i),(e,t)=>{if(!um(t))return t;var n=Fd(c(i)),{items:a,visibleSections:o}=t;return L(L({},t),{},{items:n<a.length?rf(a,n,r===void 0?[,]:[r]):a,visibleSections:Lm(o,n,1)})}),Nm(e,a,i,r)}function Im(e,t,n){var r=En(e,n.path),i=Ct(r),a=I(e,i);return Array.isArray(a)?Pm(e,t,i,(e,t)=>{if(!um(t))return t;var n=Fd(c(r)),{items:i,visibleSections:a}=t;return L(L({},t),{},{items:i.slice(0,n).concat(i.slice(n+1)),visibleSections:Lm(a,n,-1)})}):function(e,t,n){return dn(t,Tm(e,n))?ln(t,Tm(e,n)):t}(e,t,r)}function Lm(e,t,n){return function(e){for(var t=e.slice(0),n=1;n<t.length;)t[n-1].end===t[n].start&&(t[n-1]={start:t[n-1].start,end:t[n].end},t.splice(n)),n++;return t}(e.map(e=>({start:e.start>t?e.start+n:e.start,end:e.end>t?e.end+n:e.end})))}function Rm(e,t,n){var r,i=I(e,n),a=jm(e,t,n),o=dm(a)?a.enforceString:void 0;return typeof o==`boolean`?o:typeof(r=i)==`string`&&typeof Jd(r,JSON)!=`string`}function zm(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=e.indexOf(t);return r===-1?[]:n?e.slice(r):e.slice(r+1)}function Bm(e,t){var n=[];return function e(t,r,i){n.push(i),Wt(t)&&um(r)&&r.expanded&&wm(t,r.visibleSections,n=>{e(t[n],r.items[n],i.concat(String(n)))}),Gt(t)&&lm(r)&&r.expanded&&Object.keys(t).forEach(n=>{e(t[n],r.properties[n],i.concat(n))})}(e,t,[]),n}function Vm(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];return function i(a,o){r.push({path:o,type:Df.value});var s=jm(e,t,o);a&&fm(s)&&s.expanded&&(n&&r.push({path:o,type:Df.inside}),Wt(a)&&wm(a,um(s)?s.visibleSections:Pp,e=>{var t=o.concat(String(e));i(a[e],t),n&&r.push({path:t,type:Df.after})}),Gt(a)&&Object.keys(a).forEach(e=>{var t=o.concat(e);r.push({path:t,type:Df.key}),i(a[e],t),n&&r.push({path:t,type:Df.after})}))}(e,[]),r}function Hm(e,t,n){var r=Bm(e,t),i=r.map(pn).indexOf(pn(n));if(i!==-1&&i<r.length-1)return r[i+1]}function Um(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Em(e,t,n,vf({json:I(e,n)},r)?Gm:qm)}function Wm(e,t,n){var r=jm(e,t,n);return fm(r)&&r.expanded?t:Um(e,t,n)}function Gm(e){return e.length===0||e.length===1&&e[0]===`0`}function Km(e){return e.length===0}function qm(){return!0}function Jm(){return!1}function Ym(e){return e&&e.type===Ef.after||!1}function Xm(e){return e&&e.type===Ef.inside||!1}function Zm(e){return e&&e.type===Ef.key||!1}function Qm(e){return e&&e.type===Ef.value||!1}function $m(e){return e&&e.type===Ef.multi||!1}function eh(e){return $m(e)&&v(e.focusPath,e.anchorPath)}function th(e){return $m(e)||Ym(e)||Xm(e)||Zm(e)||Qm(e)}function nh(e){return e&&e.type===Ef.text||!1}function rh(e,t){var n=[];return function(e,t,n){if(t){var r=Nh(t),i=Mh(t);if(v(r,i))return n(r);if(e!==void 0){var a=dh(r,i);if(r.length===a.length||i.length===a.length)return n(a);var o=Sh(r,i),s=ah(e,o),c=oh(e,o),l=jh(e,o,s),u=jh(e,o,c);if(!(l===-1||u===-1)){var d=I(e,a);if(Gt(d)){for(var f=Object.keys(d),p=l;p<=u;p++){var m=n(a.concat(f[p]));if(m!==void 0)return m}return}if(Wt(d)){for(var h=l;h<=u;h++){var g=n(a.concat(String(h)));if(g!==void 0)return g}return}throw Error(`Failed to create selection`)}}}}(e,t,e=>{n.push(e)}),n}function ih(e){return Xm(e)?e.path:Ct(Mh(e))}function ah(e,t){if(!$m(t))return t.path;var n=jh(e,t,t.anchorPath);return jh(e,t,t.focusPath)<n?t.focusPath:t.anchorPath}function oh(e,t){if(!$m(t))return t.path;var n=jh(e,t,t.anchorPath);return jh(e,t,t.focusPath)>n?t.focusPath:t.anchorPath}function sh(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?Mh(n):ah(e,n),a=function(e,t,n){var r=Bm(e,t),i=r.map(pn),a=pn(n),o=i.indexOf(a);if(o!==-1&&o>0)return r[o-1]}(e,t,i);if(r)return Xm(n)||Ym(n)?a===void 0?void 0:Sh(i,i):a===void 0?void 0:Sh(Nh(n),a);if(Ym(n)||Xm(n))return vh(i);if(Zm(n)){if(a===void 0||a.length===0)return;var o=I(e,Ct(a));return Array.isArray(o)||Dt(a)?vh(a):gh(a)}return Qm(n),a===void 0?void 0:vh(a)}}function ch(e,t,n,r){if(!n)return{caret:void 0,previous:void 0,next:void 0};var i=Vm(e,t,r),a=i.findIndex(e=>v(e.path,Mh(n))&&String(e.type)===String(n.type));return{caret:a===-1?void 0:i[a],previous:a!==-1&&a>0?i[a-1]:void 0,next:a!==-1&&a<i.length-1?i[a+1]:void 0}}function lh(e,t){for(var n=Bm(e,t),r=0;r<n.length-1&&n[r+1].length>n[r].length;)r++;var i=n[r];return i===void 0||i.length===0||Array.isArray(I(e,Ct(i)))?vh(i):gh(i)}function uh(e,t){if(t.length===1){var n=bt(t);if(n.op===`replace`)return vh(En(e,n.path))}if(!Dt(t)&&t.every(e=>e.op===`move`)){var r=bt(t),i=t.slice(1);if((Yt(r)||Xt(r))&&r.from!==r.path&&i.every(e=>(Yt(e)||Xt(e))&&e.from===e.path))return gh(En(e,r.path))}var a=t.filter(e=>e.op!==`test`&&e.op!==`remove`&&(e.op!==`move`||e.from!==e.path)&&typeof e.path==`string`).map(t=>En(e,t.path));if(!Dt(a))return{type:Ef.multi,anchorPath:bt(a),focusPath:c(a)}}function dh(e,t){for(var n=0;n<e.length&&n<t.length&&e[n]===t[n];)n++;return e.slice(0,n)}function fh(e){return Zm(e)||Qm(e)||eh(e)}function ph(e,t){return fh(t)&&zd(I(e,Mh(t)))?Mh(t):Ct(Mh(t))}function mh(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function hh(e){if(wh(e)){var{type:t,path:n}=e;return{type:t,path:n}}return e}function gh(e){return{type:Ef.key,path:e}}function _h(e,t){return{type:Ef.key,path:e,edit:!0,initialValue:t}}function vh(e){return{type:Ef.value,path:e}}function yh(e,t){return{type:Ef.value,path:e,edit:!0,initialValue:t}}function bh(e){return{type:Ef.inside,path:e}}function xh(e){return{type:Ef.after,path:e}}function Sh(e,t){var n=dh(e,t),r=e.length>n.length&&t.length>n.length;return{type:Ef.multi,anchorPath:r?n.concat(e[n.length]):n,focusPath:r?n.concat(t[n.length]):n}}function Ch(e,t,n,r){if(Zm(t))return String(c(t.path));if(Qm(t)){var i=I(e,t.path);return typeof i==`string`?i:r.stringify(i,null,n)}if($m(t)){if(Dt(t.focusPath))return r.stringify(e,null,n);var a=I(e,ih(t));if(Array.isArray(a)){if(eh(t)){var o=I(e,t.focusPath);return r.stringify(o,null,n)}return rh(e,t).map(t=>{var i=I(e,t);return`${r.stringify(i,null,n)},`}).join(`
`)}return rh(e,t).map(t=>{var i=c(t),a=I(e,t);return`${r.stringify(i)}: ${r.stringify(a,null,n)},`}).join(`
`)}}function wh(e){return(Zm(e)||Qm(e))&&!0===e.edit}function Th(e){return Zm(e)||Qm(e)||$m(e)}function Eh(e){return Zm(e)||Qm(e)||eh(e)}function Dh(e){switch(e.type){case Df.key:return gh(e.path);case Df.value:return vh(e.path);case Df.after:return xh(e.path);case Df.inside:return bh(e.path)}}function Oh(e,t){switch(e){case Ef.key:return gh(t);case Ef.value:return vh(t);case Ef.after:return xh(t);case Ef.inside:return bh(t);case Ef.multi:case Ef.text:return Sh(t,t)}}function kh(e,t,n){if(t)return Ah(e,t,n)||mh($m(t)?Ct(t.focusPath):t.path,n)?t:void 0}function Ah(e,t,n){if(e===void 0||!t)return!1;if(Zm(t)||Xm(t)||Ym(t))return v(t.path,n);if(Qm(t))return mh(n,t.path);if($m(t)){var r=ah(e,t),i=oh(e,t),a=Ct(t.focusPath);if(!mh(n,a)||n.length<=a.length)return!1;var o=jh(e,t,r),s=jh(e,t,i),c=jh(e,t,n);return c!==-1&&c>=o&&c<=s}return!1}function jh(e,t,n){var r=Ct(t.focusPath);if(!mh(n,r)||n.length<=r.length)return-1;var i=n[r.length],a=I(e,r);if(Gt(a))return Object.keys(a).indexOf(i);if(Wt(a)){var o=Fd(i);if(o<a.length)return o}return-1}function Mh(e){return $m(e)?e.focusPath:e.path}function Nh(e){return $m(e)?e.anchorPath:e.path}function Ph(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i of n)if(typeof i==`string`&&e.push(i),i&&typeof i==`object`)for(var a in i)Object.hasOwnProperty.call(i,a)&&i[a]&&e.push(a);return e.join(` `)}function Fh(e,t,n){return Ph(`jse-value`,`jse-`+Gd(e,n),{"jse-url":qd(e),"jse-empty":typeof e==`string`&&e.length===0,"jse-table-cell":t===Tf.table})}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var Ih=X(`<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>`);function Lh(e,t){Xo(t,!1);var n=Ad(`jsoneditor:EditableDiv`),r=$(t,`value`,9),i=$(t,`initialValue`,9),a=$(t,`shortText`,9,!1),o=$(t,`label`,9),s=$(t,`onChange`,9),c=$(t,`onCancel`,9),l=$(t,`onFind`,9),u=$(t,`onPaste`,9,ct),d=$(t,`onValueClass`,9,()=>``),f=B(void 0,!0),p=B(void 0,!0),m=!1;function h(){return K(f)?function(e){return e.replace(/\n$/,``)}(K(f).innerText):``}function g(e){K(f)&&Fc(f,K(f).innerText=Wf(e))}Cu(()=>{n(`onMount`,{value:r(),initialValue:i()}),g(i()===void 0?r():i()),K(f)&&function(e){if(e.firstChild!=null){var t=document.createRange(),n=window.getSelection();t.setStart(e,1),t.collapse(!0),n?.removeAllRanges(),n?.addRange(t)}else e.focus()}(K(f))}),wu(()=>{var e=h();n(`onDestroy`,{closed:m,value:r(),newValue:e}),m||e===r()||s()(e,jf.no)}),W(()=>(J(d()),J(r())),()=>{V(p,d()(r()))}),il(),Sd(!0);var _=Ih();yd(_,e=>V(f,e),()=>K(f)),G(e=>{cd(_,`aria-label`,o()),Ju(_,1,e,`svelte-1r0oryi`)},[()=>Wu((J(Ph),K(p),J(a()),q(()=>Ph(`jse-editable-div`,K(p),{"jse-short-text":a()}))))]),Y(`input`,_,function(){var e=h();e===``&&g(``),V(p,d()(e))}),Y(`keydown`,_,function(e){e.stopPropagation();var t=rp(e);if(t===`Escape`&&(e.preventDefault(),m=!0,c()()),t===`Enter`||t===`Tab`){e.preventDefault(),m=!0;var n=h();s()(n,jf.nextInside)}t===`Ctrl+F`&&(e.preventDefault(),l()(!1)),t===`Ctrl+H`&&(e.preventDefault(),l()(!0))}),Y(`paste`,_,function(e){if(e.stopPropagation(),u()&&e.clipboardData){var t=e.clipboardData.getData(`text/plain`);u()(t)}}),Y(`blur`,_,function(){var e=document.hasFocus(),t=h();n(`handleBlur`,{hasFocus:e,closed:m,value:r(),newValue:t}),document.hasFocus()&&!m&&(m=!0,t!==r()&&s()(t,jf.self))}),Z(e,_),Zo()}function Rh(e,t){Xo(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`selection`,9),a=$(t,`mode`,9),o=$(t,`parser`,9),s=$(t,`normalization`,9),c=$(t,`enforceString`,9),l=$(t,`onPatch`,9),u=$(t,`onPasteJson`,9),d=$(t,`onSelect`,9),f=$(t,`onFind`,9),p=$(t,`focus`,9),m=$(t,`findNextInside`,9);function h(e){return c()?e:Jd(e,o())}function g(){d()(vh(n())),p()()}Sd(!0);var _=z(()=>(J(s()),J(r()),q(()=>s().escapeValue(r())))),y=z(()=>(J(wh),J(i()),q(()=>wh(i())?i().initialValue:void 0)));Lh(e,{get value(){return K(_)},get initialValue(){return K(y)},label:`Edit value`,onChange:function(e,t){l()([{op:`replace`,path:pn(n()),value:h(s().unescapeValue(e))}],(e,r,i)=>{if(!i||v(n(),Mh(i)))return{state:r,selection:t===jf.nextInside?m()(n()):vh(n())}}),p()()},onCancel:g,onPaste:function(e){try{var t=o().parse(e);zd(t)&&u()({path:n(),contents:t,onPasteAsJson:()=>{g();var e=[{op:`replace`,path:pn(n()),value:t}];l()(e,(e,t)=>({state:Um(e,t,n())}))}})}catch{}},get onFind(){return f()},onValueClass:function(e){return Fh(h(s().unescapeValue(e)),a(),o())}}),Zo()}function zh(e,t,n){var r=Ct(t),i=I(e,r);if(Wt(i)){var a=Fd(c(t));return n.map((e,t)=>({op:`add`,path:pn(r.concat(String(a+t))),value:e.value}))}if(Gt(i)){var o=c(t),s=Object.keys(i),l=o===void 0?[]:zm(s,o,!0);return[...n.map(e=>{var t=fp(e.key,s);return{op:`add`,path:pn(r.concat(t)),value:e.value}}),...l.map(e=>Kh(r,e))]}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}function Bh(e,t,n){var r=I(e,t);if(Array.isArray(r)){var i=r.length;return n.map((e,n)=>({op:`add`,path:pn(t.concat(String(i+n))),value:e.value}))}return n.map(e=>{var n=fp(e.key,Object.keys(r));return{op:`add`,path:pn(t.concat(n)),value:e.value}})}function Vh(e,t,n,r){var i=fp(r,t.filter(e=>e!==n)),a=zm(t,n,!1);return[{op:`move`,from:pn(e.concat(n)),path:pn(e.concat(i))},...a.map(t=>Kh(e,t))]}function Hh(e,t){var n=c(t);if(Dt(n))throw Error(`Cannot duplicate root object`);var r=Ct(n),i=c(n),a=I(e,r);if(Wt(a)){var o=c(t),s=o?Fd(c(o))+1:0;return[...t.map((e,t)=>({op:`copy`,from:pn(e),path:pn(r.concat(String(t+s)))}))]}if(Gt(a)){var l=Object.keys(a),u=i===void 0?[]:zm(l,i,!1);return[...t.map(e=>{var t=fp(c(e),l);return{op:`copy`,from:pn(e),path:pn(r.concat(t))}}),...u.map(e=>Kh(r,e))]}throw Error(`Cannot create duplicate operations: parent must be an Object or Array`)}function Uh(e,t){if(Qm(t))return[{op:`move`,from:pn(t.path),path:``}];if(!$m(t))throw Error(`Cannot create extract operations: parent must be an Object or Array`);var n=I(e,Ct(t.focusPath));if(Wt(n))return[{op:`replace`,path:``,value:rh(e,t).map(e=>n[Fd(c(e))])}];if(Gt(n)){var r={};return rh(e,t).forEach(e=>{var t=String(c(e));r[t]=n[t]}),[{op:`replace`,path:``,value:r}]}throw Error(`Cannot extract: unsupported type of selection `+JSON.stringify(t))}function Wh(e,t,n,r){if(Zm(t)){var i=of(n,r),a=Ct(t.path),o=I(e,a);return Vh(a,Object.keys(o),c(t.path),typeof i==`string`?i:n)}if(Qm(t)||$m(t)&&Dt(t.focusPath))try{return[{op:`replace`,path:pn(Mh(t)),value:sf(n,e=>af(e,r))}]}catch{return[{op:`replace`,path:pn(Mh(t)),value:n}]}if($m(t)){var s=qh(n,r);return function(e,t,n){var r=Ct(bt(t)),i=I(e,r);if(Wt(i)){var a=bt(t),o=a?Fd(c(a)):0;return[...Gh(t),...n.map((e,t)=>({op:`add`,path:pn(r.concat(String(t+o))),value:e.value}))]}if(Gt(i)){var s=c(t),l=Ct(s),u=c(s),d=Object.keys(i),f=u===void 0?[]:zm(d,u,!1),p=new Set(t.map(e=>c(e))),m=d.filter(e=>!p.has(e));return[...Gh(t),...n.map(e=>{var t=fp(e.key,m);return{op:`add`,path:pn(l.concat(t)),value:e.value}}),...f.map(e=>Kh(l,e))]}throw Error(`Cannot create replace operations: parent must be an Object or Array`)}(e,rh(e,t),s)}if(Ym(t)){var l=qh(n,r),u=t.path,d=Ct(u),f=I(e,d);if(Wt(f)){var p=Fd(c(u));return zh(e,d.concat(String(p+1)),l)}if(Gt(f)){var m=String(c(u)),h=Object.keys(f);if(Dt(h)||c(h)===m)return Bh(e,d,l);var g=h[h.indexOf(m)+1];return zh(e,d.concat(g),l)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}if(Xm(t)){var _=qh(n,r),v=t.path,y=I(e,v);if(Wt(y))return zh(e,v.concat(`0`),_);if(Gt(y)){var b=Object.keys(y);if(Dt(b))return Bh(e,v,_);var x=bt(b);return zh(e,v.concat(x),_)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}throw Error(`Cannot insert: unsupported type of selection `+JSON.stringify(t))}function Gh(e){return e.map(e=>({op:`remove`,path:pn(e)})).reverse()}function Kh(e,t){return{op:`move`,from:pn(e.concat(t)),path:pn(e.concat(t))}}function qh(e,t){var n=/^\s*{/.test(e),r=/^\s*\[/.test(e),i=of(e,t),a=i===void 0?sf(e,e=>af(e,t)):i;return n&&Rd(a)||r&&Array.isArray(a)?[{key:`New item`,value:a}]:Array.isArray(a)?a.map((e,t)=>({key:`New item `+t,value:e})):Rd(a)?Object.keys(a).map(e=>({key:e,value:a[e]})):[{key:`New item`,value:a}]}function Jh(e,t){if(Zm(t)){var n=Ct(t.path),r=I(e,n),i=Vh(n,Object.keys(r),c(t.path),``);return{operations:i,newSelection:uh(e,i)}}if(Qm(t))return{operations:[{op:`replace`,path:pn(t.path),value:``}],newSelection:t};if($m(t)){var a=rh(e,t),o=Gh(a),s=c(a);if(Dt(s))return{operations:[{op:`replace`,path:``,value:``}],newSelection:vh([])};var l=Ct(s),u=I(e,l);if(Wt(u)){var d=Fd(c(bt(a)));return{operations:o,newSelection:d===0?bh(l):xh(l.concat(String(d-1)))}}if(Gt(u)){var f=Object.keys(u),p=c(bt(a)),m=f.indexOf(p),h=f[m-1];return{operations:o,newSelection:m===0?bh(l):xh(l.concat(h))}}throw Error(`Cannot create remove operations: parent must be an Object or Array`)}throw Error(`Cannot remove: unsupported type of selection `+JSON.stringify(t))}function Yh(e,t){return On(e,function(e,t){if(Dt(t)||!t.every(Xt))return t;var n=[];for(var r of t){var i=Xh(fn(r.from)),a=Xh(fn(r.path));if(!i||!a)return t;n.push({from:i,path:a,operation:r})}var o=n[0].path.parent;if(!Gt(I(e,o))||!n.every(e=>function(e,t){return v(e.from.parent,t)&&v(e.path.parent,t)}(e,o)))return t;var s=function(e,t){var n=Object.keys(t),r=n.slice();for(var i of e){var a=r.indexOf(i.from.key);a!==-1&&(r.splice(a,1),r.push(i.path.key))}for(var o=0;o<n.length&&n[o]===r[o];)o++;return r[o]}(n,e),c=e=>e.operation,l=n.filter(e=>e.operation.from!==e.operation.path);return l.some(e=>e.path.key===s)?l.map(c):[Kh(o,s),...l.map(c)]}(e,t),{before:(e,t,n)=>{if(qt(t)){var r=fn(t.path);return{revertOperations:[...n,...Zh(e,r)]}}if(Xt(t)){var i=fn(t.from);return{revertOperations:t.from===t.path?[t,...Zh(e,i)]:[...n,...Zh(e,i)]}}return{document:e}}})}function Xh(e){return e.length>0?{parent:Ct(e),key:c(e)}:void 0}function Zh(e,t){var n=Ct(t),r=c(t),i=I(e,n);return Gt(i)?zm(Object.keys(i),r,!1).map(e=>Kh(n,e)):[]}function Qh(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[t],r=e.items.map((e,n)=>L(L({},e),{},{active:n===t}));return L(L({},e),{},{items:r,activeItem:n,activeIndex:t})}function $h(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.toLowerCase(),i=n?.maxResults??1/0,a=n?.columns,o=[],s=[];function c(e){o.length>=i||o.push(e)}function l(e,t){if(Wt(t)){var n=s.length;s.push(`0`);for(var r=0;r<t.length;r++)if(s[n]=String(r),l(e,t[r]),o.length>=i)return;s.pop()}else if(Gt(t)){var a=Object.keys(t),u=s.length;for(var d of(s.push(``),a))if(s[u]=d,eg(d,e,s,kf.key,c),l(e,t[d]),o.length>=i)return;s.pop()}else eg(String(t),e,s,kf.value,c)}if(e===``)return[];if(a){if(!Array.isArray(t))throw Error(`json must be an Array when option columns is defined`);for(var u=0;u<t.length;u++){s[0]=String(u);for(var d=t[u],f=0;f<a.length;f++){var p=a[f];if(p.length===1)s[1]=p[0];else for(var m=0;m<p.length;m++)s[m+1]=p[m];for(;s.length>p.length+1;)s.pop();l(r,I(d,p))}if(o.length>=i)break}return o}return l(r,t),o}function eg(e,t,n,r,i){var a=e.toLowerCase(),o=0,s=-1,c=-1;do(c=a.indexOf(t,s))!==-1&&(s=c+t.length,i({path:n.slice(0),field:r,fieldIndex:o,start:c,end:s}),o++);while(c!==-1)}function tg(e,t,n,r){return e.substring(0,n)+t+e.substring(r)}function ng(e,t,n){var r=e;return yt(n,e=>{r=tg(r,t,e.start,e.end)}),r}function rg(e,t,n,r,i){var{field:a,path:o,start:s,end:l}=r;if(a===kf.key){var u=Ct(o),d=I(e,u),f=c(o),p=Vh(u,Object.keys(d),f,tg(f,n,s,l));return{newSelection:uh(e,p),operations:p}}if(a===kf.value){var m=I(e,o);if(m===void 0)throw Error(`Cannot replace: path not found ${pn(o)}`);var h=typeof m==`string`?m:String(m),g=Rm(e,t,o),_=tg(h,n,s,l),v=[{op:`replace`,path:pn(o),value:g?_:Jd(_,i)}];return{newSelection:uh(e,v),operations:v}}throw Error(`Cannot replace: unknown type of search result field ${a}`)}function ig(e){return e.path.concat(e.field,String(e.fieldIndex))}function ag(e){var t=pm(e)?e.searchResults.filter(e=>e.field===kf.key):void 0;return t&&t.length>0?t:void 0}function og(e){var t=pm(e)?e.searchResults.filter(e=>e.field===kf.value):void 0;return t&&t.length>0?t:void 0}var sg={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function cg(e,t){return t.reduce((t,n)=>function(e,t,n,r){return Mm(e,t,n,r,sg)}(e,t,n.path,(e,t)=>L(L({},t),{},{searchResults:t.searchResults?t.searchResults.concat(n):[n]})),void 0)}function lg(e){var t=e?.searchResults??[],n=lm(e)?Object.values(e.properties).flatMap(lg):um(e)?e.items.flatMap(lg):[];return t.concat(n)}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var ug=X(`<span> </span>`);function dg(e,t){Xo(t,!1);var n=B(),r=$(t,`text`,8),i=$(t,`searchResultItems`,8);W(()=>(J(r()),J(i())),()=>{V(n,function(e,t){var n=[],r=0;for(var i of t){var a=e.slice(r,i.start);a!==``&&n.push({resultIndex:void 0,type:`normal`,text:a,active:!1});var o=e.slice(i.start,i.end);n.push({resultIndex:i.resultIndex,type:`highlight`,text:o,active:i.active}),r=i.end}var s=c(t);return s&&s.end<e.length&&n.push({type:`normal`,text:e.slice(s.end),resultIndex:void 0,active:!1}),n}(String(r()),i()))}),il(),Sd();var a=ou();Nu(Kc(a),1,()=>K(n),ju,(e,t)=>{var n=ou(),r=Kc(n),i=e=>{var n=au();G(()=>du(n,(K(t),q(()=>K(t).text)))),Z(e,n)},a=e=>{var n,r=ug(),i=H(r);G((e,a)=>{n=Ju(r,1,`jse-highlight svelte-19qyvy6`,null,n,{"jse-active":K(t).active}),cd(r,`data-search-result-index`,e),du(i,a)},[()=>(K(t),q(()=>String(K(t).resultIndex))),()=>(J(Wf),K(t),q(()=>Wf(K(t).text)))]),Z(e,r)};Q(r,e=>{K(t),q(()=>K(t).type===`normal`)?e(i):e(a,-1)}),Z(e,n)}),Z(e,a),Zo()}function fg(e){var t=1e3;if(e<900)return e.toFixed()+` B`;var n=e/t;if(n<900)return n.toFixed(1)+` KB`;var r=n/t;if(r<900)return r.toFixed(1)+` MB`;var i=r/t;return i<900?i.toFixed(1)+` GB`:(i/t).toFixed(1)+` TB`}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var pg=X(`<button type="button"><!></button>`);function mg(e,t){Xo(t,!0);var n,r=Sc(()=>t.onclick?e=>{e.preventDefault(),e.stopPropagation(),t.onclick()}:void 0),i=pg();(function(e,t){var n=[...arguments].slice(2),r=new Su(e);ol(()=>{var e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},jo)})(H(i),()=>t.children??ho),G(()=>n=Ju(i,1,`jse-tag svelte-ubve9r`,null,n,{disabled:!t.onclick})),Ql(`click`,i,function(){for(var e,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=K(r))==null||e.apply(this,n)}),Z(e,i),Zo()}$l([`click`]),op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var hg=X(`<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>`);function gg(e,t){Xo(t,!0);var n=Pc(!0),r=Sc(()=>K(n)&&typeof t.value==`string`&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(e=>e.active&&e.end>t.truncateTextSize))),i=Sc(()=>K(r)&&typeof t.value==`string`?t.value.substring(0,t.truncateTextSize).trim():t.value),a=Sc(()=>qd(t.value));function o(){V(n,!1)}var s=hg(),c=H(s),l=e=>{var n=Sc(()=>t.normalization.escapeValue(K(i)));dg(e,{get text(){return K(n)},get searchResultItems(){return t.searchResultItems}})},u=e=>{var n=au();G(e=>du(n,e),[()=>Wf(t.normalization.escapeValue(K(i)))]),Z(e,n)};Q(c,e=>{t.searchResultItems?e(l):e(u,-1)});var d=U(c,2),f=e=>{mg(e,{onclick:o,children:(e,n)=>{var r=au();G(e=>du(r,`Show more (${e??``})`),[()=>fg(t.value.length)]),Z(e,r)},$$slots:{default:!0}})};Q(d,e=>{K(r)&&typeof t.value==`string`&&e(f)}),G(e=>{Ju(s,1,e,`svelte-1saqp8c`),cd(s,`title`,K(a)?`Ctrl+Click or Ctrl+Enter to open url in new window`:void 0)},[()=>Wu(Fh(t.value,t.mode,t.parser))]),Ql(`click`,s,function(e){typeof t.value==`string`&&K(a)&&ip(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,`_blank`))}),Ql(`dblclick`,s,function(e){t.readOnly||(e.preventDefault(),t.onSelect(yh(t.path)))}),Z(e,s),Zo()}$l([`click`,`dblclick`]),op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var _g=X(`<div class="jse-tooltip svelte-brt1mq"> </div>`);function vg(e,t){var n=$(t,`text`,8),r=_g(),i=H(r);G(()=>du(i,n())),Z(e,r)}function yg(e,t){var n,{text:r,openAbsolutePopup:i,closeAbsolutePopup:a}=t;function o(){n=i(vg,{text:r},{position:`top`,width:10*r.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function s(){a(n)}return e.addEventListener(`mouseenter`,o),e.addEventListener(`mouseleave`,s),{destroy(){e.removeEventListener(`mouseenter`,o),e.removeEventListener(`mouseleave`,s)}}}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var bg=X(`<div class="jse-timestamp svelte-1jcpman"><!></div>`);function xg(e,t){Xo(t,!1);var n=B(void 0,!0),r=Yo(`absolute-popup`),i=$(t,`value`,9);W(()=>J(i()),()=>{V(n,`Time: ${new Date(i()).toString()}`)}),il(),Sd(!0);var a=bg();Cp(H(a),{get data(){return oi}}),Vu(a,(e,t)=>yg?.(e,t),()=>L({text:K(n)},r)),Z(e,a),Zo()}function Sg(e){var t=[];return!e.isEditing&&Bd(e.value)&&t.push({component:Tp,props:e}),!e.isEditing&&Wd(e.value)&&t.push({component:kp,props:e}),e.isEditing&&t.push({component:Rh,props:e}),e.isEditing||t.push({component:gg,props:e}),!e.isEditing&&Vd(e.value)&&t.push({component:xg,props:e}),t}function Cg(e){return e.map((e,t)=>Eg.test(e)?`[`+e+`]`:/[.[\]]/.test(e)||e===``?`["`+function(e){return e.replace(/"/g,`\\"`)}(e)+`"]`:(t>0?`.`:``)+e).join(``)}function wg(e){for(var t=[],n=0;n<e.length;)e[n]===`.`&&n++,e[n]===`[`?(n++,e[n]===`"`?(n++,t.push(r(e=>e===`"`,!0)),i(`"`)):t.push(r(e=>e===`]`)),i(`]`)):t.push(r(e=>e===`.`||e===`[`));function r(t){for(var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],i=``;n<e.length&&!t(e[n]);)r&&e[n]===`\\`&&e[n+1]===`"`?(i+=`"`,n+=2):(i+=e[n],n++);return i}function i(t){if(e[n]!==t)throw SyntaxError(`Invalid JSON path: ${t} expected at position ${n}`);n++}return t}function Tg(e){return{value:e,label:Dt(e)?`(item root)`:Cg(e)}}var Eg=/^\d+$/,Dg={},Og={showWizard:!0,showOriginal:!0},kg=Math.min,Ag=Math.max,jg=Math.round,Mg=Math.floor,Ng=e=>({x:e,y:e}),Pg={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Fg(e,t,n){return Ag(e,kg(t,n))}function Ig(e,t){return typeof e==`function`?e(t):e}function Lg(e){return e.split(`-`)[0]}function Rg(e){return e.split(`-`)[1]}function zg(e){return e===`x`?`y`:`x`}function Bg(e){return e===`y`?`height`:`width`}function Vg(e){var t=e[0];return t===`t`||t===`b`?`y`:`x`}function Hg(e){return zg(Vg(e))}function Ug(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Wg=[`left`,`right`],Gg=[`right`,`left`],Kg=[`top`,`bottom`],qg=[`bottom`,`top`];function Jg(e,t,n,r){var i=Rg(e),a=function(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Gg:Wg:t?Wg:Gg;case`left`:case`right`:return t?Kg:qg;default:return[]}}(Lg(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ug)))),a}function Yg(e){var t=Lg(e);return Pg[t]+e.slice(t.length)}function Xg(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:function(e){return L({top:0,right:0,bottom:0,left:0},e)}(e)}function Zg(e){var{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Qg(e,t,n){var r,{reference:i,floating:a}=e,o=Vg(t),s=Hg(t),c=Bg(s),l=Lg(t),u=o===`y`,d=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2,p=i[c]/2-a[c]/2;switch(l){case`top`:r={x:d,y:i.y-a.height};break;case`bottom`:r={x:d,y:i.y+i.height};break;case`right`:r={x:i.x+i.width,y:f};break;case`left`:r={x:i.x-a.width,y:f};break;default:r={x:i.x,y:i.y}}switch(Rg(t)){case`start`:r[s]-=p*(n&&u?-1:1);break;case`end`:r[s]+=p*(n&&u?-1:1)}return r}function $g(e,t){return e_.apply(this,arguments)}function e_(){return e_=Wa(function*(e,t){var n;t===void 0&&(t={});var{x:r,y:i,platform:a,rects:o,elements:s,strategy:c}=e,{boundary:l=`clippingAncestors`,rootBoundary:u=`viewport`,elementContext:d=`floating`,altBoundary:f=!1,padding:p=0}=Ig(t,e),m=Xg(p),h=s[f?d===`floating`?`reference`:`floating`:d],g=Zg(yield a.getClippingRect({element:(n=yield a.isElement==null?void 0:a.isElement(h))==null||n?h:h.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:l,rootBoundary:u,strategy:c})),_=d===`floating`?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=yield a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating),y=(yield a.isElement==null?void 0:a.isElement(v))&&(yield a.getScale==null?void 0:a.getScale(v))||{x:1,y:1},b=Zg(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:_,offsetParent:v,strategy:c}):_);return{top:(g.top-b.top+m.top)/y.y,bottom:(b.bottom-g.bottom+m.bottom)/y.y,left:(g.left-b.left+m.left)/y.x,right:(b.right-g.right+m.right)/y.x}}),e_.apply(this,arguments)}var t_=function(){var e=Wa(function*(e,t,n){for(var{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:L(L({},o),{},{detectOverflow:$g}),c=yield o.isRTL==null?void 0:o.isRTL(t),l=yield o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Qg(l,r,c),f=r,p=0,m={},h=0;h<a.length;h++){var g=a[h];if(g){var{name:_,fn:v}=g,{x:y,y:b,data:x,reset:S}=yield v({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=y??u,d=b??d,m[_]=L(L({},m[_]),x),S&&p<50&&(p++,typeof S==`object`&&(S.placement&&(f=S.placement),S.rects&&(l=!0===S.rects?yield o.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:u,y:d}=Qg(l,f,c)),h=-1)}}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}});return function(t,n,r){return e.apply(this,arguments)}}(),n_=new Set([`left`,`top`]);function r_(){return r_=Wa(function*(e,t){var{placement:n,platform:r,elements:i}=e,a=yield r.isRTL==null?void 0:r.isRTL(i.floating),o=Lg(n),s=Rg(n),c=Vg(n)===`y`,l=n_.has(o)?-1:1,u=a&&c?-1:1,d=Ig(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?-1*m:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}),r_.apply(this,arguments)}function i_(){return typeof window<`u`}function a_(e){return c_(e)?(e.nodeName||``).toLowerCase():`#document`}function o_(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function s_(e){return((c_(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function c_(e){return!!i_()&&(e instanceof Node||e instanceof o_(e).Node)}function l_(e){return!!i_()&&(e instanceof Element||e instanceof o_(e).Element)}function u_(e){return!!i_()&&(e instanceof HTMLElement||e instanceof o_(e).HTMLElement)}function d_(e){return!(!i_()||typeof ShadowRoot>`u`)&&(e instanceof ShadowRoot||e instanceof o_(e).ShadowRoot)}function f_(e){var{overflow:t,overflowX:n,overflowY:r,display:i}=S_(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function p_(e){return/^(table|td|th)$/.test(a_(e))}function m_(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var h_,g_=/transform|translate|scale|rotate|perspective|filter/,__=/paint|layout|strict|content/,v_=e=>!!e&&e!==`none`;function y_(e){var t=l_(e)?S_(e):e;return v_(t.transform)||v_(t.translate)||v_(t.scale)||v_(t.rotate)||v_(t.perspective)||!b_()&&(v_(t.backdropFilter)||v_(t.filter))||g_.test(t.willChange||``)||__.test(t.contain||``)}function b_(){return h_??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),h_}function x_(e){return/^(html|body|#document)$/.test(a_(e))}function S_(e){return o_(e).getComputedStyle(e)}function C_(e){return l_(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function w_(e){if(a_(e)===`html`)return e;var t=e.assignedSlot||e.parentNode||d_(e)&&e.host||s_(e);return d_(t)?t.host:t}function T_(e){var t=w_(e);return x_(t)?e.ownerDocument?e.ownerDocument.body:e.body:u_(t)&&f_(t)?t:T_(t)}function E_(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);var r=T_(e),i=r===e.ownerDocument?.body,a=o_(r);if(i){var o=D_(a);return t.concat(a,a.visualViewport||[],f_(r)?r:[],o&&n?E_(o):[])}return t.concat(r,E_(r,[],n))}function D_(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function O_(e){var t=S_(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=u_(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=jg(n)!==a||jg(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function k_(e){return l_(e)?e:e.contextElement}function A_(e){var t=k_(e);if(!u_(t))return Ng(1);var n=t.getBoundingClientRect(),{width:r,height:i,$:a}=O_(t),o=(a?jg(n.width):n.width)/r,s=(a?jg(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var j_=Ng(0);function M_(e){var t=o_(e);return b_()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:j_}function N_(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),a=k_(e),o=Ng(1);t&&(r?l_(r)&&(o=A_(r)):o=A_(e));var s=function(e,t,n){return t===void 0&&(t=!1),!(!n||t&&n!==o_(e))&&t}(a,n,r)?M_(a):Ng(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a)for(var f=o_(a),p=r&&l_(r)?o_(r):r,m=f,h=D_(m);h&&r&&p!==m;){var g=A_(h),_=h.getBoundingClientRect(),v=S_(h),y=_.left+(h.clientLeft+parseFloat(v.paddingLeft))*g.x,b=_.top+(h.clientTop+parseFloat(v.paddingTop))*g.y;c*=g.x,l*=g.y,u*=g.x,d*=g.y,c+=y,l+=b,h=D_(m=o_(h))}return Zg({width:u,height:d,x:c,y:l})}function P_(e,t){var n=C_(e).scrollLeft;return t?t.left+n:N_(s_(e)).left+n}function F_(e,t){var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-P_(e,n),y:n.top+t.scrollTop}}function I_(e,t,n){var r;if(t===`viewport`)r=function(e,t){var n=o_(e),r=s_(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=b_();(!l||l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}var u=P_(r);if(u<=0){var d=r.ownerDocument,f=d.body,p=getComputedStyle(f),m=d.compatMode===`CSS1Compat`&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,h=Math.abs(r.clientWidth-f.clientWidth-m);h<=25&&(a-=h)}else u<=25&&(a+=u);return{width:a,height:o,x:s,y:c}}(e,n);else if(t===`document`)r=function(e){var t=s_(e),n=C_(e),r=e.ownerDocument.body,i=Ag(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Ag(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+P_(e),s=-n.scrollTop;return S_(r).direction===`rtl`&&(o+=Ag(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}(s_(e));else if(l_(t))r=function(e,t){var n=N_(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=u_(e)?A_(e):Ng(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}(t,n);else{var i=M_(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Zg(r)}function L_(e,t){var n=w_(e);return!(n===t||!l_(n)||x_(n))&&(S_(n).position===`fixed`||L_(n,t))}function R_(e,t,n){var r=u_(t),i=s_(t),a=n===`fixed`,o=N_(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Ng(0);function l(){c.x=P_(i)}if(r||!r&&!a)if((a_(t)!==`body`||f_(i))&&(s=C_(t)),r){var u=N_(t,!0,a,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else i&&l();a&&!r&&i&&l();var d=!i||r||a?Ng(0):F_(i,s);return{x:o.left+s.scrollLeft-c.x-d.x,y:o.top+s.scrollTop-c.y-d.y,width:o.width,height:o.height}}function z_(e){return S_(e).position===`static`}function B_(e,t){if(!u_(e)||S_(e).position===`fixed`)return null;if(t)return t(e);var n=e.offsetParent;return s_(e)===n&&(n=n.ownerDocument.body),n}function V_(e,t){var n=o_(e);if(m_(e))return n;if(!u_(e)){for(var r=w_(e);r&&!x_(r);){if(l_(r)&&!z_(r))return r;r=w_(r)}return n}for(var i=B_(e,t);i&&p_(i)&&z_(i);)i=B_(i,t);return i&&x_(i)&&z_(i)&&!y_(i)?n:i||function(e){for(var t=w_(e);u_(t)&&!x_(t);){if(y_(t))return t;if(m_(t))return null;t=w_(t)}return null}(e)||n}var H_={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=s_(r),s=!!t&&m_(t.floating);if(r===o||s&&a)return n;var c={scrollLeft:0,scrollTop:0},l=Ng(1),u=Ng(0),d=u_(r);if((d||!d&&!a)&&((a_(r)!==`body`||f_(o))&&(c=C_(r)),d)){var f=N_(r);l=A_(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}var p=!o||d||a?Ng(0):F_(o,c);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+p.x,y:n.y*l.y-c.scrollTop*l.y+u.y+p.y}},getDocumentElement:s_,getClippingRect:function(e){for(var{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?m_(t)?[]:function(e,t){var n=t.get(e);if(n)return n;for(var r=E_(e,[],!1).filter(e=>l_(e)&&a_(e)!==`body`),i=null,a=S_(e).position===`fixed`,o=a?w_(e):e;l_(o)&&!x_(o);){var s=S_(o),c=y_(o);c||s.position!==`fixed`||(i=null),(a?!c&&!i:!c&&s.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||f_(o)&&!c&&L_(e,o))?r=r.filter(e=>e!==o):i=s,o=w_(o)}return t.set(e,r),r}(t,this._c):[].concat(n),r],o=I_(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left,d=1;d<a.length;d++){var f=I_(t,a[d],i);s=Ag(f.top,s),c=kg(f.right,c),l=kg(f.bottom,l),u=Ag(f.left,u)}return{width:c-u,height:l-s,x:u,y:s}},getOffsetParent:V_,getElementRects:function(){var e=Wa(function*(e){var t=this.getOffsetParent||V_,n=this.getDimensions,r=yield n(e.floating);return{reference:R_(e.reference,yield t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:n}=O_(e);return{width:t,height:n}},getScale:A_,isElement:l_,isRTL:function(e){return S_(e).direction===`rtl`}};function U_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function W_(e,t,n,r){r===void 0&&(r={});var{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=k_(e),u=i||a?[...l?E_(l):[],...t?E_(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});var d,f=l&&s?function(e,t){var n,r=null,i=s_(e);function a(){var e;clearTimeout(n),(e=r)==null||e.disconnect(),r=null}return function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();var l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),f&&p){var m={rootMargin:-Mg(d)+`px `+-Mg(i.clientWidth-(u+f))+`px `+-Mg(i.clientHeight-(d+p))+`px `+-Mg(u)+`px`,threshold:Ag(0,kg(1,c))||1},h=!0;try{r=new IntersectionObserver(g,L(L({},m),{},{root:i.ownerDocument}))}catch{r=new IntersectionObserver(g,m)}r.observe(e)}function g(t){var r=t[0].intersectionRatio;if(r!==c){if(!h)return o();r?o(!1,r):n=setTimeout(()=>{o(!1,1e-7)},1e3)}r!==1||U_(l,e.getBoundingClientRect())||o(),h=!1}}(!0),a}(l,n):null,p=-1,m=null;o&&(m=new ResizeObserver(e=>{var[r]=e;r&&r.target===l&&m&&t&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;(e=m)==null||e.observe(t)})),n()}),l&&!c&&m.observe(l),t&&m.observe(t));var h=c?N_(e):null;return c&&function t(){var r=N_(e);h&&!U_(h,r)&&n(),h=r,d=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),f?.(),(e=m)==null||e.disconnect(),m=null,c&&cancelAnimationFrame(d)}}var G_=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,fn:t=>Wa(function*(){var n,{x:r,y:i,placement:a,middlewareData:o}=t,s=yield function(e,t){return r_.apply(this,arguments)}(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:L(L({},s),{},{placement:a})}})()}},K_=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,fn:t=>Wa(function*(){var{x:n,y:r,placement:i,platform:a}=t,o=Ig(e,t),{mainAxis:s=!0,crossAxis:c=!1,limiter:l={fn:e=>{var{x:t,y:n}=e;return{x:t,y:n}}}}=o,u=Va(o,Ba),d={x:n,y:r},f=yield a.detectOverflow(t,u),p=Vg(Lg(i)),m=zg(p),h=d[m],g=d[p];if(s){var _=m===`y`?`bottom`:`right`;h=Fg(h+f[m===`y`?`top`:`left`],h,h-f[_])}if(c){var v=p===`y`?`bottom`:`right`;g=Fg(g+f[p===`y`?`top`:`left`],g,g-f[v])}var y=l.fn(L(L({},t),{},{[m]:h,[p]:g}));return L(L({},y),{},{data:{x:y.x-n,y:y.y-r,enabled:{[m]:s,[p]:c}}})})()}},q_=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,fn:t=>Wa(function*(){var n,{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,l=Ig(e,t),{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p=`bestFit`,fallbackAxisSideDirection:m=`none`,flipAlignment:h=!0}=l,g=Va(l,za);if((n=i.arrow)!=null&&n.alignmentOffset)return{};var _=Lg(r),v=Vg(o),y=Lg(o)===o,b=yield s.isRTL==null?void 0:s.isRTL(c.floating),x=f||(y||!h?[Yg(o)]:function(e){var t=Yg(e);return[Ug(e),t,Ug(t)]}(o)),S=m!==`none`;!f&&S&&x.push(...Jg(o,h,m,b));var C=[o,...x],w=yield s.detectOverflow(t,g),T=[],E=i.flip?.overflows||[];if(u&&T.push(w[_]),d){var ee=function(e,t,n){n===void 0&&(n=!1);var r=Rg(e),i=Hg(e),a=Bg(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Yg(o)),[o,Yg(o)]}(r,a,b);T.push(w[ee[0]],w[ee[1]])}if(E=[...E,{placement:r,overflows:T}],!T.every(e=>e<=0)){var te=(i.flip?.index||0)+1,ne=C[te];if(ne&&(!(d===`alignment`&&v!==Vg(ne))||E.every(e=>Vg(e.placement)!==v||e.overflows[0]>0)))return{data:{index:te,overflows:E},reset:{placement:ne}};var re=E.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!re)switch(p){case`bestFit`:var ie=E.filter(e=>{if(S){var t=Vg(e.placement);return t===v||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];ie&&(re=ie);break;case`initialPlacement`:re=o}if(r!==re)return{reset:{placement:re}}}return{}})()}};function J_(e){var t,n,r={autoUpdate:!0},i=e,a=t=>L(L(L({},r),e||{}),t||{}),o=e=>{t&&n&&(i=a(e),((e,t,n)=>{var r=new Map,i=L({platform:H_},n),a=L(L({},i.platform),{},{_c:r});return t_(e,t,L(L({},i),{},{platform:a}))})(t,n,i).then(e=>{var t;Object.assign(n.style,{position:e.strategy,left:`${e.x}px`,top:`${e.y}px`}),(t=i)!=null&&t.onComputed&&i.onComputed(e)}))},s=e=>{wu(e.subscribe(e=>{t===void 0?(t=e,o()):(Object.assign(t,e),o())}))};return[e=>{if(`subscribe`in e)return s(e),{};t=e,o()},(e,r)=>{var s;n=e,i=a(r),setTimeout(()=>o(r),0),o(r);var c=()=>{s&&=(s(),void 0)},l=function(){var{autoUpdate:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i||{};c(),!1!==e&&Ul().then(()=>W_(t,n,()=>o(i),!0===e?{}:e))};return s=l(),{update(e){o(e),s=l(e)},destroy(){c()}}},o]}function Y_(e){var{loadOptions:t,filterText:n,items:r,multiple:i,value:a,itemId:o,groupBy:s,filterSelectedItems:c,itemFilter:l,convertStringItemsToObjects:u,filterGroupedItems:d,label:f}=e;if(r&&t)return r;if(!r)return[];r&&r.length>0&&typeof r[0]!=`object`&&(r=u(r));var p=r.filter(e=>{var t=l(e[f],n,e);return t&&i&&a!=null&&a.length&&(t=!a.some(t=>!!c&&t[o]===e[o])),t});return s&&(p=d(p)),p}function X_(e){return Z_.apply(this,arguments)}function Z_(){return(Z_=Wa(function*(e){var{dispatch:t,loadOptions:n,convertStringItemsToObjects:r,filterText:i}=e,a=yield n(i).catch(e=>{console.warn(`svelte-select loadOptions error :>> `,e),t(`error`,{type:`loadOptions`,details:e})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!=`object`&&(a=r(a)),t(`loaded`,{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}op(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var Q_=iu(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);op(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var $_=iu(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function ev(e){Z(e,$_())}op(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var tv=iu(`<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`);op(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var nv=X(`<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>`),rv=X(`<div class="empty svelte-1ul7oo4">No options</div>`),iv=X(`<div role="none"><!> <!> <!></div>`),av=X(`<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>`,1),ov=X(`<div class="multi-item-clear svelte-1ul7oo4"><!></div>`),sv=X(`<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>`),cv=X(`<div><!></div>`),lv=X(`<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>`),uv=X(`<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>`),dv=X(`<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>`),fv=X(`<input type="hidden" class="svelte-1ul7oo4"/>`),pv=X(`<select class="required svelte-1ul7oo4" required="" tabindex="-1" aria-hidden="true"></select>`),mv=X(`<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>`);function hv(e,t){var n=function(e){var t={};for(var n in e.children&&(t.default=!0),e.$$slots)t[n]=!0;return t}(t);Xo(t,!1);var r,i=B(),a=B(),o=B(),s=B(),c=B(),l=B(),u=B(),d=B(),f=B(),p=Tu(),m=$(t,`justValue`,12,null),h=$(t,`filter`,8,Y_),g=$(t,`getItems`,8,X_),_=$(t,`id`,8,null),v=$(t,`name`,8,null),y=$(t,`container`,12,void 0),b=$(t,`input`,12,void 0),x=$(t,`multiple`,8,!1),S=$(t,`multiFullItemClearable`,8,!1),C=$(t,`disabled`,8,!1),w=$(t,`focused`,12,!1),T=$(t,`value`,12,null),E=$(t,`filterText`,12,``),ee=$(t,`placeholder`,8,`Please select`),te=$(t,`placeholderAlwaysShow`,8,!1),ne=$(t,`items`,12,null),re=$(t,`label`,8,`label`),ie=$(t,`itemFilter`,8,(e,t,n)=>`${e}`.toLowerCase().includes(t.toLowerCase())),ae=$(t,`groupBy`,8,void 0),oe=$(t,`groupFilter`,8,e=>e),se=$(t,`groupHeaderSelectable`,8,!1),D=$(t,`itemId`,8,`value`),ce=$(t,`loadOptions`,8,void 0),le=$(t,`containerStyles`,8,``),O=$(t,`hasError`,8,!1),ue=$(t,`filterSelectedItems`,8,!0),de=$(t,`required`,8,!1),fe=$(t,`closeListOnChange`,8,!0),pe=$(t,`clearFilterTextOnBlur`,8,!0),me=$(t,`createGroupHeaderItem`,8,(e,t)=>({value:e,[re()]:e})),he=()=>K(u),ge=$(t,`searchable`,8,!0),_e=$(t,`inputStyles`,8,``),k=$(t,`clearable`,8,!0),ve=$(t,`loading`,12,!1),A=$(t,`listOpen`,12,!1),j=$(t,`debounce`,8,function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(r),r=setTimeout(e,t)}),M=$(t,`debounceWait`,8,300),ye=$(t,`hideEmptyState`,8,!1),be=$(t,`inputAttributes`,24,()=>({})),N=$(t,`listAutoWidth`,8,!0),P=$(t,`showChevron`,8,!1),xe=$(t,`listOffset`,8,5),Se=$(t,`hoverItemIndex`,12,0),Ce=$(t,`floatingConfig`,24,()=>({})),we=$(t,`class`,8,``),Te=B(),Ee=B(),De=B(),Oe=B(),ke=B();function Ae(e){return e.map((e,t)=>({index:t,value:e,label:`${e}`}))}function je(e){var t=[],n={};e.forEach(e=>{var r=ae()(e);t.includes(r)||(t.push(r),n[r]=[],r&&n[r].push(Object.assign(me()(r,e),{id:r,groupHeader:!0,selectable:se()}))),n[r].push(Object.assign({groupItem:!!r},e))});var r=[];return oe()(t).forEach(e=>{n[e]&&r.push(...n[e])}),r}function Me(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;Se(e<0?0:e),!t&&ae()&&K(u)[Se()]&&!K(u)[Se()].selectable&&Qe(1)}function Ne(){var e=!0;if(T()){var t=[],n=[];T().forEach(r=>{t.includes(r[D()])?e=!1:(t.push(r[D()]),n.push(r))}),e||T(n)}return e}function Pe(e){var t=e?e[D()]:T()[D()];return ne().find(e=>e[D()]===t)}function Fe(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Wa(function*(e){var t=T()[e];T().length===1?T(void 0):T(T().filter(e=>e!==t)),p(`clear`,t)})).apply(this,arguments)}function F(e){if(w())switch(e.stopPropagation(),e.key){case`Escape`:e.preventDefault(),He();break;case`Enter`:if(e.preventDefault(),A()){if(K(u).length===0)break;var t=K(u)[Se()];if(T()&&!x()&&T()[D()]===t[D()]){He();break}Xe(K(u)[Se()])}break;case`ArrowDown`:e.preventDefault(),A()?Qe(1):(A(!0),V(Te,void 0));break;case`ArrowUp`:e.preventDefault(),A()?Qe(-1):(A(!0),V(Te,void 0));break;case`Tab`:if(A()&&w()){if(K(u).length===0||T()&&T()[D()]===K(u)[Se()][D()])return He();e.preventDefault(),Xe(K(u)[Se()]),He()}break;case`Backspace`:if(!x()||E().length>0)return;if(x()&&T()&&T().length>0){if(Fe(K(Te)===void 0?T().length-1:K(Te)),K(Te)===0||K(Te)===void 0)break;V(Te,T().length>K(Te)?K(Te)-1:void 0)}break;case`ArrowLeft`:if(!T()||!x()||E().length>0)return;K(Te)===void 0?V(Te,T().length-1):T().length>K(Te)&&K(Te)!==0&&V(Te,K(Te)-1);break;case`ArrowRight`:if(!T()||!x()||E().length>0||K(Te)===void 0)return;K(Te)===T().length-1?V(Te,void 0):K(Te)<T().length-1&&V(Te,K(Te)+1)}}function Le(e){var t;w()&&b()===document?.activeElement||(e&&p(`focus`,e),(t=b())==null||t.focus(),w(!0))}function Re(e){return ze.apply(this,arguments)}function ze(){return(ze=Wa(function*(e){var t;Ye||(A()||w())&&(p(`blur`,e),He(),w(!1),V(Te,void 0),(t=b())==null||t.blur())})).apply(this,arguments)}function Be(){if(!C())return E().length>0?A(!0):void A(!A())}function Ve(){p(`clear`,T()),T(void 0),He(),Le()}function He(){pe()&&E(``),A(!1)}Eu(Wa(function*(){V(Ee,T()),V(De,E()),V(Oe,x())})),Cu(()=>{A()&&w(!0),w()&&b()&&b().focus()});var Ue=$(t,`ariaValues`,8,e=>`Option ${e}, selected.`),We=$(t,`ariaListOpen`,8,(e,t)=>`You are currently focused on option ${e}. There are ${t} results available.`),Ge=$(t,`ariaFocused`,8,()=>`Select is focused, type to refine list, press down to open the menu.`),Ke,qe=B(null);function Je(){clearTimeout(Ke),Ke=setTimeout(()=>{Ye=!1},100)}wu(()=>{var e;(e=K(qe))==null||e.remove()});var Ye=!1;function Xe(e){e&&!1!==e.selectable&&function(e){if(e){E(``);var t=Object.assign({},e);if(t.groupHeader&&!t.selectable)return;T(x()?T()?T().concat([t]):[t]:T(t)),setTimeout(()=>{fe()&&He(),V(Te,void 0),p(`change`,T()),p(`select`,e)})}}(e)}function Ze(e){Ye||Se(e)}function Qe(e){if(K(u).filter(e=>!Object.hasOwn(e,`selectable`)||!0===e.selectable).length===0)return Se(0);e>0&&Se()===K(u).length-1?Se(0):e<0&&Se()===0?Se(K(u).length-1):Se(Se()+e);var t=K(u)[Se()];t&&!1===t.selectable&&(e!==1&&e!==-1||Qe(e))}function $e(e,t,n){if(!x())return t&&t[n]===e[n]}var et=nt,tt=nt;function nt(e){return{update(t){t.scroll&&(Je(),e.scrollIntoView({behavior:`auto`,block:`nearest`}))}}}var rt=B({strategy:`absolute`,placement:`bottom-start`,middleware:[G_(xe()),q_(),K_()],autoUpdate:!1}),[it,at,ot]=J_(K(rt)),st=B(!0);W(()=>(J(ne()),J(T())),()=>{ne(),T()&&function(){typeof T()==`string`?T((ne()||[]).find(e=>e[D()]===T())||{[D()]:T(),label:T()}):x()&&Array.isArray(T())&&T().length>0&&T(T().map(e=>typeof e==`string`?{value:e,label:e}:e))}()}),W(()=>(J(be()),J(ge())),()=>{!be()&&ge()||(V(ke,Object.assign({autocapitalize:`none`,autocomplete:`off`,autocorrect:`off`,spellcheck:!1,tabindex:0,type:`text`,"aria-autocomplete":`list`},be())),_()&&Fc(ke,K(ke).id=_()),ge()||Fc(ke,K(ke).readonly=!0))}),W(()=>J(x()),()=>{x()&&T()&&(Array.isArray(T())?T([...T()]):T([T()]))}),W(()=>(K(Oe),J(x())),()=>{K(Oe)&&!x()&&T()&&T(null)}),W(()=>(J(x()),J(T())),()=>{x()&&T()&&T().length>1&&Ne()}),W(()=>J(T()),()=>{T()&&(x()?JSON.stringify(T())!==JSON.stringify(K(Ee))&&Ne()&&p(`input`,T()):K(Ee)&&JSON.stringify(T()[D()])===JSON.stringify(K(Ee)[D()])||p(`input`,T()))}),W(()=>(J(T()),J(x()),K(Ee)),()=>{!T()&&x()&&K(Ee)&&p(`input`,T())}),W(()=>(J(w()),J(b())),()=>{!w()&&b()&&He()}),W(()=>(J(E()),K(De)),()=>{E()!==K(De)&&(ce()||E().length!==0)&&(ce()?j()(Wa(function*(){ve(!0);var e=yield g()({dispatch:p,loadOptions:ce(),convertStringItemsToObjects:Ae,filterText:E()});e?(ve(e.loading),A(A()?e.listOpen:E().length>0),w(A()&&e.focused),ne(ae()?je(e.filteredItems):e.filteredItems)):(ve(!1),w(!0),A(!0))}),M()):(A(!0),x()&&V(Te,void 0)))}),W(()=>(J(h()),J(ce()),J(E()),J(ne()),J(x()),J(T()),J(D()),J(ae()),J(re()),J(ue()),J(ie())),()=>{V(u,h()({loadOptions:ce(),filterText:E(),items:ne(),multiple:x(),value:T(),itemId:D(),groupBy:ae(),label:re(),filterSelectedItems:ue(),itemFilter:ie(),convertStringItemsToObjects:Ae,filterGroupedItems:je}))}),W(()=>(J(x()),J(A()),J(T()),K(u)),()=>{!x()&&A()&&T()&&K(u)&&Me(K(u).findIndex(e=>e[D()]===T()[D()]),!0)}),W(()=>(J(A()),J(x())),()=>{A()&&x()&&Se(0)}),W(()=>J(E()),()=>{E()&&Se(0)}),W(()=>J(Se()),()=>{p(`hoverItem`,Se())}),W(()=>(J(x()),J(T())),()=>{V(i,x()?T()&&T().length>0:T())}),W(()=>(K(i),J(E())),()=>{V(a,K(i)&&E().length>0)}),W(()=>(K(i),J(k()),J(C()),J(ve())),()=>{V(o,K(i)&&k()&&!C()&&!ve())}),W(()=>(J(te()),J(x()),J(ee()),J(T())),()=>{V(s,te()&&x()||x()&&T()?.length===0?ee():T()?``:ee())}),W(()=>(J(T()),J(x())),()=>{var e,t;V(c,T()?(e=x(),t=void 0,t=e&&T().length>0?T().map(e=>e[re()]).join(`, `):T()[re()],Ue()(t)):``)}),W(()=>(K(u),J(Se()),J(w()),J(A())),()=>{V(l,function(){if(!K(u)||K(u).length===0)return``;var e=K(u)[Se()];if(A()&&e){var t=K(u)?K(u).length:0;return We()(e[re()],t)}return Ge()()}((K(u),Se(),w(),A())))}),W(()=>J(ne()),()=>{(function(e){e&&e.length!==0&&!e.some(e=>typeof e!=`object`)&&T()&&(x()?!T().some(e=>!e||!e[D()]):T()[D()])&&(Array.isArray(T())?T(T().map(e=>Pe(e)||e)):T(Pe()||T()))})(ne())}),W(()=>(J(x()),J(T()),J(D())),()=>{m((x(),T(),D(),x()?T()?T().map(e=>e[D()]):null:T()?T()[D()]:T()))}),W(()=>(J(x()),K(Ee),J(T())),()=>{x()||!K(Ee)||T()||p(`input`,T())}),W(()=>(J(A()),K(u),J(x()),J(T())),()=>{A()&&K(u)&&!x()&&!T()&&Me()}),W(()=>K(u),()=>{(function(e){A()&&p(`filter`,e)})(K(u))}),W(()=>(J(y()),J(Ce()),K(rt)),()=>{y()&&Ce()&&ot(Object.assign(K(rt),Ce()))}),W(()=>K(qe),()=>{V(d,!!K(qe))}),W(()=>(K(qe),J(A())),()=>{(function(e,t){if(!e||!t)return V(st,!0);setTimeout(()=>{V(st,!1)},0)})(K(qe),A())}),W(()=>(J(A()),J(y()),K(qe)),()=>{A()&&y()&&K(qe)&&function(){var{width:e}=y().getBoundingClientRect();Fc(qe,K(qe).style.width=N()?e+`px`:`auto`)}()}),W(()=>J(Se()),()=>{V(f,Se())}),W(()=>(J(b()),J(A()),J(w())),()=>{b()&&A()&&!w()&&Le()}),W(()=>(J(y()),J(Ce())),()=>{y()&&Ce()?.autoUpdate===void 0&&Fc(rt,K(rt).autoUpdate=!0)}),il();var ct={getFilteredItems:he,handleClear:Ve};Sd();var lt,ut=mv();Y(`click`,Ec,function(e){var t;A()||w()||!y()||y().contains(e.target)||(t=K(qe))!=null&&t.contains(e.target)||Re()}),Y(`keydown`,Ec,F);var dt=H(ut),ft=e=>{var r,i=iv(),a=H(i),o=e=>{var n=ou();zu(Kc(n),t,`list-prepend`,{},null),Z(e,n)};Q(a,e=>{q(()=>n[`list-prepend`])&&e(o)});var s=U(a,2),c=e=>{var n=ou();zu(Kc(n),t,`list`,{get filteredItems(){return K(u)}},null),Z(e,n)},l=e=>{var n=ou();Nu(Kc(n),1,()=>K(u),ju,(e,n,r)=>{var i,a=nv(),o=H(a);zu(H(o),t,`item`,{get item(){return K(n)},index:r},e=>{var t=au();G(()=>du(t,(K(n),J(re()),q(()=>K(n)?.[re()])))),Z(e,t)}),Vu(o,(e,t)=>et?.(e),()=>({scroll:$e(K(n),T(),D()),listDom:K(d)})),Vu(o,(e,t)=>tt?.(e),()=>({scroll:K(f)===r,listDom:K(d)})),G(e=>i=Ju(o,1,`item svelte-1ul7oo4`,null,i,e),[()=>{var e;return{"list-group-title":K(n).groupHeader,active:$e(K(n),T(),D()),first:(e=r,e===0),hover:Se()===r,"group-item":K(n).groupItem,"not-selectable":!1===K(n)?.selectable}}]),Y(`mouseover`,a,()=>Ze(r)),Y(`focus`,a,()=>Ze(r)),Y(`click`,a,bd(()=>function(e){var{item:t,i:n}=e;if(!1!==t?.selectable)return T()&&!x()&&T()[D()]===t[D()]?He():void(function(e){return e.groupHeader&&e.selectable||e.selectable||!e.hasOwnProperty(`selectable`)}(t)&&(Se(n),Xe(t)))}({item:K(n),i:r}))),Y(`keydown`,a,xd(bd(function(e){Td.call(this,t,e)}))),Z(e,a)}),Z(e,n)},p=e=>{var n=ou();zu(Kc(n),t,`empty`,{},e=>{Z(e,rv())}),Z(e,n)};Q(s,e=>{q(()=>n.list)?e(c):(K(u),q(()=>K(u).length>0)?e(l,1):ye()||e(p,2))});var m=U(s,2),h=e=>{var n=ou();zu(Kc(n),t,`list-append`,{},null),Z(e,n)};Q(m,e=>{q(()=>n[`list-append`])&&e(h)}),Vu(i,e=>at?.(e)),yd(i,e=>V(qe,e),()=>K(qe)),rl(()=>Y(`scroll`,i,Je)),rl(()=>Y(`pointerup`,i,xd(bd(function(e){Td.call(this,t,e)})))),rl(()=>Y(`mousedown`,i,xd(bd(function(e){Td.call(this,t,e)})))),G(()=>r=Ju(i,1,`svelte-select-list svelte-1ul7oo4`,null,r,{prefloat:K(st)})),Z(e,i)};Q(dt,e=>{A()&&e(ft)});var pt=U(dt,2),mt=H(pt),ht=e=>{var t=av(),n=Kc(t),r=H(n),i=H(U(n,2));G(()=>{du(r,K(c)),du(i,K(l))}),Z(e,t)};Q(mt,e=>{w()&&e(ht)});var gt=U(pt,2);zu(H(gt),t,`prepend`,{},null);var _t=U(gt,2),vt=H(_t),yt=e=>{var n=ou(),r=Kc(n),i=e=>{var n=ou();Nu(Kc(n),1,T,ju,(e,n,r)=>{var i,a=sv(),o=H(a);zu(H(o),t,`selection`,{get selection(){return K(n)},index:r},e=>{var t=au();G(()=>du(t,(K(n),J(re()),q(()=>K(n)[re()])))),Z(e,t)});var s=U(o,2),c=e=>{var n=ov();zu(H(n),t,`multi-clear-icon`,{},e=>{ev(e)}),Y(`pointerup`,n,xd(bd(()=>Fe(r)))),Z(e,n)};Q(s,e=>{C()||S()||!ev||e(c)}),G(()=>i=Ju(a,1,`multi-item svelte-1ul7oo4`,null,i,{active:K(Te)===r,disabled:C()})),Y(`click`,a,xd(()=>S()?Fe(r):{})),Y(`keydown`,a,xd(bd(function(e){Td.call(this,t,e)}))),Z(e,a)}),Z(e,n)},o=e=>{var n,r=cv();zu(H(r),t,`selection`,{get selection(){return T()}},e=>{var t=au();G(()=>du(t,(J(T()),J(re()),q(()=>T()[re()])))),Z(e,t)}),G(()=>n=Ju(r,1,`selected-item svelte-1ul7oo4`,null,n,{"hide-selected-item":K(a)})),Z(e,r)};Q(r,e=>{x()?e(i):e(o,-1)}),Z(e,n)};Q(vt,e=>{K(i)&&e(yt)});var bt=U(vt,2);ud(bt,()=>L(L({readOnly:!ge()},K(ke)),{},{placeholder:K(s),style:_e(),disabled:C()}),void 0,void 0,void 0,`svelte-1ul7oo4`,!0),yd(bt,e=>b(e),()=>b());var xt=U(_t,2),St=H(xt),Ct=e=>{var n=lv();zu(H(n),t,`loading-icon`,{},e=>{(function(e){Z(e,tv())})(e)}),Z(e,n)};Q(St,e=>{ve()&&e(Ct)});var wt=U(St,2),Tt=e=>{var n=uv();zu(H(n),t,`clear-icon`,{},e=>{ev(e)}),Y(`click`,n,Ve),Z(e,n)};Q(wt,e=>{K(o)&&e(Tt)});var Et=U(wt,2),Dt=e=>{var n=dv();zu(H(n),t,`chevron-icon`,{get listOpen(){return A()}},e=>{(function(e){Z(e,Q_())})(e)}),Z(e,n)};Q(Et,e=>{P()&&e(Dt)});var Ot=U(xt,2);zu(Ot,t,`input-hidden`,{get value(){return T()}},e=>{var t=fv();G(e=>{cd(t,`name`,v()),sd(t,e)},[()=>(J(T()),q(()=>T()?JSON.stringify(T()):null))]),Z(e,t)});var kt=U(Ot,2),At=e=>{var n=ou();zu(Kc(n),t,`required`,{get value(){return T()}},e=>{Z(e,pv())}),Z(e,n)};return Q(kt,e=>{J(de()),J(T()),q(()=>de()&&(!T()||T().length===0))&&e(At)}),rl(()=>Y(`pointerup`,ut,xd(Be))),yd(ut,e=>y(e),()=>y()),Vu(ut,e=>it?.(e)),G(()=>{lt=Ju(ut,1,`svelte-select ${we()??``}`,`svelte-1ul7oo4`,lt,{multi:x(),disabled:C(),focused:w(),"list-open":A(),"show-chevron":P(),error:O()}),Xu(ut,le())}),Y(`keydown`,bt,F),Y(`blur`,bt,Re),Y(`focus`,bt,Le),md(bt,E),Z(e,ut),_d(t,`getFilteredItems`,he),_d(t,`handleClear`,Ve),Zo(ct)}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var gv=X(`<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>`);function _v(e,t){var n,r,i;Xo(t,!1);var a=B(void 0,!0),o=B(void 0,!0),s=B(void 0,!0),c=B(void 0,!0),l=B(void 0,!0),u=B(void 0,!0),d=Ad(`jsoneditor:TransformWizard`),f=$(t,`json`,9),p=$(t,`queryOptions`,29,()=>({})),m=$(t,`onChange`,9),h=[`==`,`!=`,`<`,`<=`,`>`,`>=`].map(e=>({value:e,label:e})),g=[{value:`asc`,label:`ascending`},{value:`desc`,label:`descending`}],_=B((n=p())!=null&&(n=n.filter)!=null&&n.path?Tg(p().filter.path):void 0,!0),y=B(h.find(e=>e.value===p().filter?.relation)??h[0],!0),b=B(((r=p())==null||(r=r.filter)==null?void 0:r.value)||``,!0),x=B((i=p())!=null&&(i=i.sort)!=null&&i.path?Tg(p().sort.path):void 0,!0),S=B(g.find(e=>e.value===p().sort?.direction)??g[0],!0);W(()=>J(f()),()=>{V(a,Array.isArray(f()))}),W(()=>(K(a),J(f())),()=>{V(o,K(a)?Zd(f()):[])}),W(()=>(K(a),J(f())),()=>{V(s,K(a)?Zd(f(),!0):[])}),W(()=>(K(o),Tg),()=>{V(c,K(o).map(Tg))}),W(()=>(K(s),Tg),()=>{V(l,K(s)?K(s).map(Tg):[])}),W(()=>(J(p()),K(l),v),()=>{var e;V(u,(e=p())!=null&&(e=e.projection)!=null&&e.paths&&K(l)?p().projection.paths.map(e=>K(l).find(t=>v(t.value,e))).filter(e=>!!e):void 0)}),W(()=>K(_),()=>{var e=K(_)?.value,t;v((t=p())==null||(t=t.filter)==null?void 0:t.path,e)||(d(`changeFilterPath`,e),p(on(p(),[`filter`,`path`],e,!0)),m()(p()))}),W(()=>K(y),()=>{var e=K(y)?.value,t;v((t=p())==null||(t=t.filter)==null?void 0:t.relation,e)||(d(`changeFilterRelation`,e),p(on(p(),[`filter`,`relation`],e,!0)),m()(p()))}),W(()=>K(b),()=>{var e=K(b),t;v((t=p())==null||(t=t.filter)==null?void 0:t.value,e)||(d(`changeFilterValue`,e),p(on(p(),[`filter`,`value`],e,!0)),m()(p()))}),W(()=>K(x),()=>{var e=K(x)?.value,t;v((t=p())==null||(t=t.sort)==null?void 0:t.path,e)||(d(`changeSortPath`,e),p(on(p(),[`sort`,`path`],e,!0)),m()(p()))}),W(()=>K(S),()=>{var e=K(S)?.value,t;v((t=p())==null||(t=t.sort)==null?void 0:t.direction,e)||(d(`changeSortDirection`,e),p(on(p(),[`sort`,`direction`],e,!0)),m()(p()))}),W(()=>K(u),()=>{(function(e){var t;v((t=p())==null||(t=t.projection)==null?void 0:t.paths,e)||(d(`changeProjectionPaths`,e),p(on(p(),[`projection`,`paths`],e,!0)),m()(p()))})(K(u)?K(u).map(e=>e.value):void 0)}),il(),Sd(!0);var C=gv(),w=H(H(C)),T=H(H(U(H(w))));hv(T,{class:`jse-filter-path`,showChevron:!0,get items(){return K(c)},get value(){return K(_)},set value(e){V(_,e)},$$legacy:!0});var E=U(T,2);hv(E,{class:`jse-filter-relation`,showChevron:!0,clearable:!1,get items(){return h},get value(){return K(y)},set value(e){V(y,e)},$$legacy:!0});var ee=U(E,2),te=U(w),ne=H(H(U(H(te))));hv(ne,{class:`jse-sort-path`,showChevron:!0,get items(){return K(c)},get value(){return K(x)},set value(e){V(x,e)},$$legacy:!0}),hv(U(ne,2),{class:`jse-sort-direction`,showChevron:!0,clearable:!1,get items(){return g},get value(){return K(S)},set value(e){V(S,e)},$$legacy:!0}),hv(H(H(U(H(U(te))))),{class:`jse-projection-paths`,multiple:!0,showChevron:!0,get items(){return K(l)},get value(){return K(u)},set value(e){V(u,e)},$$legacy:!0}),md(ee,()=>K(b),e=>V(b,e)),Z(e,C),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var vv=X(`<button type="button"><!> </button>`),yv=X(`<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>`);function bv(e,t){Xo(t,!1);var n=$(t,`queryLanguages`,8),r=$(t,`queryLanguageId`,12),i=$(t,`onChangeQueryLanguage`,8);Sd();var a=yv();Nu(H(a),5,n,ju,(e,t)=>{var n,a=vv(),o=H(a),s=e=>{Cp(e,{get data(){return si}})},c=e=>{Cp(e,{get data(){return li}})};Q(o,e=>{K(t),J(r()),q(()=>K(t).id===r())?e(s):e(c,-1)});var l=U(o);G(()=>{var e;n=Ju(a,1,`jse-query-language svelte-jrd4q2`,null,n,{selected:K(t).id===r()}),cd(a,`title`,(K(t),q(()=>`Select ${K(t).name} as query language`))),du(l,` ${(K(t),e=q(()=>K(t).name))!==null&&e!==void 0?e:``}`)}),Y(`click`,a,()=>{e=K(t).id,r(e),i()(e);return;var e}),Z(e,a)}),Z(e,a),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var xv=X(`<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>`),Sv=X(`<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>`);function Cv(e,t){Xo(t,!1);var n=$(t,`title`,9,`Modal`),r=$(t,`fullScreenButton`,9,!1),i=$(t,`fullscreen`,13,!1),a=$(t,`onClose`,9,void 0);Sd(!0);var o=Sv(),s=H(o),c=H(s),l=U(s,2);zu(l,t,`actions`,{},null);var u=U(l,2),d=e=>{var t=xv(),n=H(t),r=z(()=>i()?Wi:ki);Cp(n,{get data(){return K(r)}}),Y(`click`,t,()=>i(!i())),Z(e,t)};Q(u,e=>{r()&&e(d)});var f=U(u,2);Cp(H(f),{get data(){return Fi}}),G(()=>du(c,n())),Y(`click`,f,()=>a()?.()),Z(e,o),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var wv=X(`<button slot="actions" type="button" title="Select a query language"><!></button>`),Tv=Ad(`jsoneditor:AutoScrollHandler`);function Ev(e){var t,n;function r(e){return e<20?200:e<50?400:1200}function i(){if(e){var n=.05*(t||0);e.scrollTop+=n}}function a(e){n&&e===t||(o(),Tv(`startAutoScroll`,e),t=e,n=setInterval(i,50))}function o(){n&&(Tv(`stopAutoScroll`),clearInterval(n),n=void 0,t=void 0)}return Tv(`createAutoScrollHandler`,e),{onDrag:function(t){if(e){var n=t.clientY,{top:i,bottom:s}=e.getBoundingClientRect();n<i?a(-r(i-n)):n>s?a(r(n-s)):o()}},onDragEnd:function(){o()}}}var Dv=(e,t,n,r)=>(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t,Ov=()=>{var e,t,n,r,i,a,o,s,c,l,u,d,f;function p(t){return t.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function m(t){e.scrollTo?e.scrollTo(e.scrollLeft,t):e.scrollTop=t}function h(e){l||=e,m(a(u=e-l,n,s,c)),f=!0,u<c?requestAnimationFrame(h):function(){m(n+s),t&&o&&(t.setAttribute(`tabindex`,`-1`),t.focus()),typeof d==`function`&&d(),l=0,f=!1}()}return function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,i=m.offset||0,d=m.callback,a=m.easing||Dv,o=m.a11y||!1,typeof m.container){case`object`:e=m.container;break;case`string`:e=document.querySelector(m.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof u){case`number`:t=void 0,o=!1,r=n+u;break;case`object`:r=p(t=u);break;case`string`:t=document.querySelector(u),r=p(t)}switch(s=r-n+i,typeof m.duration){case`number`:c=m.duration;break;case`function`:c=m.duration(s)}f?l=0:requestAnimationFrame(h)}};function kv(e,t){var n=Date.now(),r=e();return t(Date.now()-n),r}var Av=Ad(`validation`),jv={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function Mv(e,t,n,r){return Mm(e,t,n,r,jv)}function Nv(e,t,n,r){if(Av(`validateJSON`),!t)return[];if(n!==r){var i=n.stringify(e);return t(i===void 0?void 0:r.parse(i))}return t(e)}function Pv(e,t,n,r){if(Av(`validateText`),e.length>104857600)return{validationErrors:[{path:[],message:`Validation turned off: the document is too large`,severity:Of.info}]};if(e.length!==0)try{var i=kv(()=>n.parse(e),e=>Av(`validate: parsed json in ${e} ms`));if(!t)return;var a=n===r?i:kv(()=>r.parse(e),e=>Av(`validate: parsed json with the validationParser in ${e} ms`)),o=kv(()=>t(a),e=>Av(`validate: validated json in ${e} ms`));return Dt(o)?void 0:{validationErrors:o}}catch(t){var s=kv(()=>function(e,t){if(e.length>Fp)return!1;try{return t.parse(br(e)),!0}catch{return!1}}(e,n),e=>Av(`validate: checked whether repairable in ${e} ms`));return{parseError:uf(e,t.message||t.toString()),isRepairable:s}}}var Fv=Ad(`jsoneditor:FocusTracker`);function Iv(e){var t,{onMount:n,onDestroy:r,getWindow:i,hasFocus:a,onFocus:o,onBlur:s}=e,c=!1;function l(){var e=a();e&&(clearTimeout(t),c||=(Fv(`focus`),o(),e))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(Fv(`blur`),c=!1,s())}))}n(()=>{Fv(`mount FocusTracker`);var e=i();e&&(e.addEventListener(`focusin`,l,!0),e.addEventListener(`focusout`,u,!0))}),r(()=>{Fv(`destroy FocusTracker`);var e=i();e&&(e.removeEventListener(`focusin`,l,!0),e.removeEventListener(`focusout`,u,!0))})}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var Lv=X(`<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>`),Rv=X(`<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>`);function zv(e,t){Xo(t,!1);var n=$(t,`type`,9,`success`),r=$(t,`icon`,9,void 0),i=$(t,`message`,9,void 0),a=$(t,`actions`,25,()=>[]),o=$(t,`onClick`,9,void 0),s=$(t,`onClose`,9,void 0);s()&&wu(s()),Sd(!0);var c,l=Rv(),u=H(l),d=H(H(u)),f=e=>{Cp(e,{get data(){return r()}})};Q(d,e=>{r()&&e(f)});var p=U(d);Nu(U(u,2),5,a,ju,(e,t)=>{var n=Lv(),r=H(n),i=e=>{Cp(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(r,e=>{K(t),q(()=>K(t).icon)&&e(i)});var a=U(r);G(()=>{var e;cd(n,`title`,(K(t),q(()=>K(t).title))),n.disabled=(K(t),q(()=>K(t).disabled)),du(a,` ${(K(t),e=q(()=>K(t).text))!==null&&e!==void 0?e:``}`)}),Y(`click`,n,()=>{K(t).onClick&&K(t).onClick()}),Y(`mousedown`,n,()=>{K(t).onMouseDown&&K(t).onMouseDown()}),Z(e,n)}),G(()=>{Ju(l,1,`jse-message jse-${n()??``}`,`svelte-cbvd26`),c=Ju(u,1,`jse-text svelte-cbvd26`,null,c,{"jse-clickable":!!o()}),du(p,` ${i()??``}`)}),Y(`click`,u,function(){o()&&o()()}),Z(e,l),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var Bv=X(`<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>`),Vv=X(`<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>`),Hv=X(`<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>`),Uv=X(`<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>`),Wv=X(`<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>`),Gv=X(`<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>`);function Kv(e,t){Xo(t,!1);var n=B(void 0,!0),r=$(t,`validationErrors`,9),i=$(t,`selectError`,9),a=B(!0,!0);function o(){V(a,!1)}function s(){V(a,!0)}W(()=>J(r()),()=>{V(n,r().length)}),il(),Sd(!0);var c=ou(),l=Kc(c),u=e=>{var t=Gv(),c=H(t),l=e=>{var t=Uv(),a=H(H(t));Nu(a,1,()=>(J($d),J(r()),J(Mp),q(()=>$d(r(),Mp))),ju,(e,t,n)=>{var a=Vv(),s=H(a);Cp(H(s),{get data(){return Bi}});var c=U(s),l=H(c),u=U(c),d=H(u),f=H(U(u)),p=e=>{var t=Bv();Cp(H(t),{get data(){return Ri}}),Y(`click`,t,bd(o)),Z(e,t)};Q(f,e=>{J(r()),q(()=>n===0&&r().length>1)&&e(p)}),G(e=>{var n;Ju(a,1,`jse-validation-${(K(t),n=q(()=>K(t).severity))!==null&&n!==void 0?n:``}`,`svelte-1342rh4`),du(l,e),du(d,(K(t),q(()=>K(t).message)))},[()=>(J(Cg),K(t),q(()=>Cg(K(t).path)))]),Y(`click`,a,()=>{setTimeout(()=>i()(K(t)))}),Z(e,a)});var s=U(a),c=e=>{var t=Hv(),r=H(U(H(t),2));G(()=>du(r,`(and ${K(n)-Mp} more errors)`)),Z(e,t)};Q(s,e=>{K(n)>Mp&&e(c)}),Z(e,t)},u=e=>{var t=Wv(),i=H(H(t)),a=H(i);Cp(H(a),{get data(){return Bi}});var o=H(U(a));Cp(H(U(o)),{get data(){return Di}}),G(e=>{Ju(i,1,`jse-validation-${e??``}`,`svelte-1342rh4`),du(o,`${K(n)??``} validation errors `)},[()=>(J(r()),q(()=>{return e=r(),[Of.error,Of.warning,Of.info].find(t=>e.some(e=>e.severity===t));var e}))]),Y(`click`,i,s),Z(e,t)};Q(c,e=>{K(a)||K(n)===1?e(l):e(u,-1)}),Z(e,t)},d=Sc(()=>(J(Dt),J(r()),q(()=>!Dt(r()))));Q(l,e=>{K(d)&&e(u)}),Z(e,c),Zo()}function qv(e,t){if(e)return e.addEventListener(`keydown`,n),{destroy(){e.removeEventListener(`keydown`,n)}};function n(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),t())}}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var Jv=X(`<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>`);function Yv(e,t){Xo(t,!1);var n=$(t,`className`,8,void 0),r=$(t,`fullscreen`,8,!1),i=$(t,`onClose`,8),a=B();function o(){i()()}Cu(()=>K(a).showModal()),wu(()=>K(a).close()),Sd();var s,c=Jv();zu(H(H(c)),t,`default`,{},null),yd(c,e=>V(a,e),()=>K(a)),rl(()=>Y(`close`,c,o)),rl(()=>{return Y(`pointerdown`,c,(e=o,function(){var t=[...arguments];t[0].target===this&&e?.apply(this,t)}));var e}),rl(()=>Y(`cancel`,c,xd(function(e){Td.call(this,t,e)}))),Vu(c,(e,t)=>qv?.(e,t),()=>o),G(e=>s=Ju(c,1,e,`svelte-2aoco4`,s,{"jse-fullscreen":r()}),[()=>Wu((J(Ph),J(n()),q(()=>Ph(`jse-modal`,n()))))]),Z(e,c),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var Xv=X(`<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>`,1);function Zv(e,t){Xo(t,!1);var n=$(t,`onClose`,9),r=np()?`⌘`:`Ctrl`;Sd(!0),Yv(e,{get onClose(){return n()},className:`jse-copy-paste`,children:(e,t)=>{var i=Xv(),a=Kc(i);Cv(a,{title:`Copying and pasting`,get onClose(){return n()}});var o=U(H(U(a,2)),2),s=H(o),c=H(H(s)),l=U(s,2),u=H(H(l)),d=H(H(U(l,2))),f=H(U(o,2));G(()=>{du(c,`${r}+C`),du(u,`${r}+X`),du(d,`${r}+V`)}),Y(`click`,f,function(){for(var e,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];(e=n())==null||e.apply(this,r)}),Z(e,i)},$$slots:{default:!0}}),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var Qv=X(`<div class="jse-separator svelte-3erbu0"></div>`),$v=X(`<div class="jse-space svelte-3erbu0"></div>`),ey=X(`<button type="button"><!> <!></button>`),ty=X(`<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>`);function ny(e,t){Xo(t,!1);var n=$(t,`items`,25,()=>[]);Sd(!0);var r=ty(),i=H(r);zu(i,t,`left`,{},null);var a=U(i,2);Nu(a,1,n,ju,(e,t)=>{var n=ou(),r=Kc(n),i=e=>{Z(e,Qv())},a=Sc(()=>(J(Qp),K(t),q(()=>Qp(K(t))))),o=e=>{Z(e,$v())},s=Sc(()=>(J(Zp),K(t),q(()=>Zp(K(t))))),c=e=>{var n=ey(),r=H(n),i=e=>{Cp(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(r,e=>{K(t),q(()=>K(t).icon)&&e(i)});var a=U(r,2),o=e=>{var n=au();G(()=>du(n,(K(t),q(()=>K(t).text)))),Z(e,n)};Q(a,e=>{K(t),q(()=>K(t).text)&&e(o)}),G(()=>{var e;Ju(n,1,`jse-button ${(K(t),e=q(()=>K(t).className))!==null&&e!==void 0?e:``}`,`svelte-3erbu0`),cd(n,`title`,(K(t),q(()=>K(t).title))),n.disabled=(K(t),q(()=>K(t).disabled||!1))}),Y(`click`,n,function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=K(t).onClick)==null||e.apply(this,r)}),Z(e,n)},l=Sc(()=>(J(em),K(t),q(()=>em(K(t))))),u=e=>{var n=au();G(e=>du(n,e),[()=>(K(t),q(()=>function(e){return console.error(`Unknown type of menu item`,e),`???`}(K(t))))]),Z(e,n)};Q(r,e=>{K(a)?e(i):K(s)?e(o,1):K(l)?e(c,2):e(u,-1)}),Z(e,n)}),zu(U(a,2),t,`right`,{},null),Z(e,r),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var ry=X(`<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>`),iy=X(`<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>`);function ay(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=B(void 0,!0),s=B(void 0,!0),c=$(t,`text`,13,``),l=$(t,`readOnly`,9,!1),u=$(t,`onParse`,9),d=$(t,`onRepair`,9),f=$(t,`onChange`,9,void 0),p=$(t,`onApply`,9),m=$(t,`onCancel`,9),h=Ad(`jsoneditor:JSONRepair`),g=B(void 0,!0);function _(){if(K(g)&&K(n)){var e=K(n).position===void 0?0:K(n).position;K(g).setSelectionRange(e,e),K(g).focus()}}function v(){p()(c())}function y(){try{c(d()(c())),f()&&f()(c())}catch{}}var b=B(void 0,!0);W(()=>J(c()),()=>{V(n,function(e){try{u()(e);return}catch(t){return uf(e,t.message)}}(c()))}),W(()=>J(c()),()=>{V(r,function(e){try{return d()(e),!0}catch{return!1}}(c()))}),W(()=>K(n),()=>{h(`error`,K(n))}),W(()=>J(m()),()=>{V(b,[{type:`space`},{type:`button`,icon:Fi,title:`Cancel repair`,className:`jse-cancel`,onClick:m()}])}),W(()=>Zi,()=>{V(i,{icon:Zi,text:`Show me`,title:`Scroll to the error location`,onClick:_})}),W(()=>Ai,()=>{V(a,{icon:Ai,text:`Auto repair`,title:`Automatically repair JSON`,onClick:y})}),W(()=>(K(r),K(i),K(a)),()=>{V(o,K(r)?[K(i),K(a)]:[K(i)])}),W(()=>J(l()),()=>{V(s,[{icon:Mi,text:`Apply`,title:`Apply fixed JSON`,disabled:l(),onClick:v}])}),il(),Sd(!0);var x=iy(),S=H(x);ny(S,{get items(){return K(b)},$$slots:{left:(e,t)=>{Z(e,ry())}}});var C=U(S,2),w=e=>{var t=z(()=>(K(n),q(()=>`Cannot parse JSON: ${K(n).message}`)));zv(e,{type:`error`,get icon(){return Bi},get message(){return K(t)},get actions(){return K(o)}})},T=e=>{zv(e,{type:`success`,message:`JSON is valid now and can be parsed.`,get actions(){return K(s)}})};Q(C,e=>{K(n)?e(w):e(T,-1)});var E=U(C,2);yd(E,e=>V(g,e),()=>K(g)),G(()=>{E.readOnly=l(),sd(E,c())}),Y(`input`,E,function(e){h(`handleChange`);var t=e.target.value;c()!==t&&(c(t),f()&&f()(c()))}),Z(e,x),Zo()}function oy(e,t){Xo(t,!1);var n=$(t,`text`,13),r=$(t,`onParse`,9),i=$(t,`onRepair`,9),a=$(t,`onApply`,9),o=$(t,`onClose`,9);function s(e){a()(e),o()()}function c(){o()()}Sd(!0),Yv(e,{get onClose(){return o()},className:`jse-repair-modal`,children:(e,t)=>{ay(e,{get onParse(){return r()},get onRepair(){return i()},onApply:s,onCancel:c,get text(){return n()},set text(e){n(e)},$$legacy:!0})},$$slots:{default:!0}}),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var sy=X(`<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>`),cy=X(`<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>`);function ly(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=B(void 0,!0),s=$(t,`visibleSections`,9),c=$(t,`sectionIndex`,9),l=$(t,`total`,9),u=$(t,`path`,9),d=$(t,`selection`,9),f=$(t,`onExpandSection`,9),p=$(t,`context`,9);W(()=>(J(s()),J(c())),()=>{V(n,s()[c()])}),W(()=>K(n),()=>{V(r,K(n).end)}),W(()=>(J(s()),J(c()),J(l())),()=>{V(i,s()[c()+1]?s()[c()+1].start:l())}),W(()=>(J(p()),J(d()),J(u()),K(r)),()=>{V(a,Ah(p().getJson(),d(),u().concat(String(K(r)))))}),W(()=>(K(r),K(i)),()=>{V(o,function(e,t){var n={start:e,end:Math.min(Yp(e),t)},r=Math.max(Xp((e+t)/2),e),i={start:r,end:Math.min(Yp(r),t)},a=Xp(t),o=a===t?a-jp:a,s={start:Math.max(o,e),end:t},c=[n],l=i.start>=n.end&&i.end<=s.start;return l&&c.push(i),s.start>=(l?i.end:n.end)&&c.push(s),c}(K(r),K(i)))}),il(),Sd(!0);var m,h,g=cy(),_=H(H(g)),v=H(_);Nu(U(_,2),1,()=>K(o),ju,(e,t)=>{var n=sy(),r=H(n);G(()=>{var e,n;return du(r,`show ${(K(t),e=q(()=>K(t).start))!==null&&e!==void 0?e:``}-${(K(t),n=q(()=>K(t).end))!==null&&n!==void 0?n:``}`)}),Y(`click`,n,()=>f()(u(),K(t))),Z(e,n)}),G(()=>{m=Ju(g,1,`jse-collapsed-items svelte-1v6dhm4`,null,m,{"jse-selected":K(a)}),h=Xu(g,``,h,{"--level":(J(u()),q(()=>u().length+2))}),du(v,`Items ${K(r)??``}-${K(i)??``}`)}),Y(`mousemove`,g,function(e){e.stopPropagation()}),Z(e,g),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var uy=X(`<button type="button"><!></button>`);function dy(e,t){Xo(t,!1);var n=$(t,`root`,9,!1),r=$(t,`insert`,9,!1),i=$(t,`selected`,9),a=$(t,`onContextMenu`,9);Sd(!0);var o,s=uy();Cp(H(s),{get data(){return Ji}}),G(()=>{o=Ju(s,1,`jse-context-menu-pointer svelte-10ijtzr`,null,o,{"jse-root":n(),"jse-insert":r(),"jse-selected":i()}),cd(s,`title`,Rp)}),Y(`click`,s,function(e){for(var t=e.target;t&&t.nodeName!==`BUTTON`;)t=t.parentNode;t&&a()({anchor:t,left:0,top:0,width:Gp,height:Wp,offsetTop:2,offsetLeft:0,showTip:!0})}),Z(e,s),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var fy=X(`<div role="none" data-type="selectable-key"><!></div>`),py=X(`<!> <!>`,1),my=X(`<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>`);function hy(e,t){Xo(t,!0);var n=Sc(()=>Qm(t.selection)&&wh(t.selection)),r=Sc(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:K(n),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),i=ou();Nu(Kc(i),17,()=>K(r),ju,(e,t)=>{var n=ou(),r=Kc(n),i=e=>{var n=Sc(()=>K(t).action),r=my();Vu(r,(e,t)=>K(n)?.(e,t),()=>K(t).props),Z(e,r)},a=Sc(()=>cm(K(t))),o=e=>{var n=Sc(()=>K(t).component),r=ou();Bu(Kc(r),()=>K(n),(e,n)=>{n(e,kd(()=>K(t).props))}),Z(e,r)};Q(r,e=>{K(a)?e(i):e(o,-1)}),Z(e,n)}),Z(e,i),Zo()}var gy={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function _y(e){var{json:t,selection:n,deltaY:r,items:i}=e;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var a=r<0?function(e){for(var{json:t,items:n,selection:r,deltaY:i}=e,a=ah(t,r),o=n.findIndex(e=>v(e.path,a)),s=()=>n[c-1]?.height,c=o,l=0;s()!==void 0&&Math.abs(i)>l+s()/2;)l+=s(),--c;var u=n[c].path,d=c-o;return c!==o&&n[c]!==void 0?{beforePath:u,offset:d}:void 0}({json:t,selection:n,deltaY:r,items:i}):function(e){for(var{json:t,items:n,selection:r,deltaY:i}=e,a=oh(t,r),o=n.findIndex(e=>v(e.path,a)),s=0,c=o,l=()=>n[c+1]?.height;l()!==void 0&&Math.abs(i)>s+l()/2;)s+=l(),c+=1;var u=I(t,Ct(a)),d=n[Array.isArray(u)?c:c+1]?.path,f=c-o;return d?{beforePath:d,offset:f}:{append:!0,offset:f}}({json:t,selection:n,deltaY:r,items:i});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var o=function(e,t,n){if(!t)return[];var r=`beforePath`in n?n.beforePath:void 0,i=`append`in n?n.append:void 0,a=Ct(Mh(t)),o=I(e,a);if(!(i||r&&mh(r,a)&&r.length>a.length))return[];var s=ah(e,t),l=oh(e,t),u=c(s),d=c(l),f=r?r[a.length]:void 0;if(!Gt(o)){if(Wt(o)){var p=Fd(u),m=Fd(d),h=f===void 0?o.length:Fd(f);return Vt(m-p+1,h<p?e=>({op:`move`,from:pn(a.concat(String(p+e))),path:pn(a.concat(String(h+e)))}):()=>({op:`move`,from:pn(a.concat(String(p))),path:pn(a.concat(String(h)))}))}throw Error(`Cannot create move operations: parent must be an Object or Array`)}var g=Object.keys(o),_=g.indexOf(u),v=g.indexOf(d),y=i?g.length:f===void 0?-1:g.indexOf(f);return _!==-1&&v!==-1&&y!==-1?y>_?[...g.slice(_,v+1),...g.slice(y,g.length)].map(e=>Kh(a,e)):[...g.slice(y,_),...g.slice(v+1,g.length)].map(e=>Kh(a,e)):[]}(t,n,a),s=I(t,Ct(ah(t,n)));return Array.isArray(s)?{operations:o,updatedSelection:function(e){var{items:t,json:n,selection:r,offset:i}=e,a=ah(n,r),o=oh(n,r),s=t.findIndex(e=>v(e.path,a)),c=t.findIndex(e=>v(e.path,o));return Sh(t[s+i]?.path,t[c+i]?.path)}({items:i,json:t,selection:n,offset:a.offset}),offset:a.offset}:{operations:o,updatedSelection:void 0,offset:a.offset}}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var vy=X(`<button type="button"><!></button>`);function yy(e,t){Xo(t,!1);var n=B(),r=Yo(`absolute-popup`),i=$(t,`validationError`,8),a=$(t,`onExpand`,8);W(()=>J(i()),()=>{V(n,sm(i())&&i().isChildError?`Contains invalid data`:i().message)}),il(),Sd();var o=vy();Cp(H(o),{get data(){return Bi}}),rl(()=>Y(`click`,o,function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=a())==null||e.apply(this,n)})),Vu(o,(e,t)=>yg?.(e,t),()=>L({text:K(n)},r)),G(()=>{var e;return Ju(o,1,`jse-validation-${(J(i()),e=q(()=>i().severity))!==null&&e!==void 0?e:``}`,`svelte-q6a061`)}),Z(e,o),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var by=wd(()=>gy),xy=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),Sy=X(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;`,1),Cy=X(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>`,1),wy=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Ty=X(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),Ey=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Dy=X(`<div data-type="insert-selection-area-inside"><!></div>`),Oy=X(`<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>`),ky=X(`<!> <!>`,1),Ay=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),jy=X(`<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>`,1),My=X(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>`,1),Ny=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),Py=X(`<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>`),Fy=X(`<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>`,1),Iy=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Ly=X(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),Ry=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),zy=X(`<div data-type="insert-selection-area-inside"><!></div>`),By=X(`<div slot="identifier"><!></div>`),Vy=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Hy=X(`<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>`,1),Uy=X(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>`,1),Wy=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),Gy=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Ky=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),qy=X(`<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>`),Jy=X(`<div data-type="insert-selection-area-after"><!></div>`),Yy=X(`<div role="treeitem" tabindex="-1"><!> <!></div>`);function Xy(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`pointer`,9),a=$(t,`value`,9),o=$(t,`state`,9),s=$(t,`validationErrors`,9),l=$(t,`searchResults`,9),u=$(t,`selection`,9),d=$(t,`context`,9),f=$(t,`onDragSelectionStart`,9),p=Ad(`jsoneditor:JSONNode`),m=B(void 0,!0),h=void 0,_=B(void 0,!0),y=B(void 0,!0),b=B(void 0,!0),x=B(void 0,!0),S=B(void 0,!0),C=B(void 0,!0),w=B(void 0,!0);function T(e){e.stopPropagation();var t=ip(e);d().onExpand(K(y),!K(b),t)}function E(){d().onExpand(K(y),!0)}function ee(e,t){var n=Vh(K(y),Object.keys(a()),e,t);return d().onPatch(n),c(fn(n[0].path))}function te(e){d().onDrag(e)}function ne(e){by().selecting&&(by(by().selecting=!1),e.stopPropagation()),d().onDragEnd(),document.removeEventListener(`mousemove`,te,!0),document.removeEventListener(`mouseup`,ne)}function re(){var e;return((e=d().findElement([]))==null||(e=e.getBoundingClientRect())==null?void 0:e.top)||0}function ie(e,t){var n=re()-e.initialContentTop;return t.clientY-e.initialClientY-n}function ae(e){if(!d().readOnly&&u()){var t=Ct(Mh(u()));if(v(K(y),t)){var n=function(e,t){var n=[];function r(e){var t=K(y).concat(e),r=d().findElement(t);r!==void 0&&n.push({path:t,height:r.clientHeight})}if(Array.isArray(a())){var i=d().getJson();if(i===void 0)return;var o=ah(i,e),s=oh(i,e),l=parseInt(c(o),10),u=parseInt(c(s),10),f=t.find(e=>l>=e.start&&u<=e.end);if(!f)return;var{start:p,end:m}=f;Qd(p,Math.min(a().length,m),e=>r(String(e)))}else Object.keys(a()).forEach(r);return n}(u(),K(S)||Pp);if(p(`dragSelectionStart`,{selection:u(),items:n}),n){var r=d().getJson();if(r!==void 0){var i=ah(r,u()),o=n.findIndex(e=>v(e.path,i)),{offset:s}=_y({json:r,selection:d().getSelection(),deltaY:0,items:n});V(_,{initialTarget:e.target,initialClientY:e.clientY,initialContentTop:re(),selectionStartIndex:o,selectionItemsCount:rh(r,u()).length,items:n,offset:s,didMoveItems:!1}),by(by().dragging=!0),document.addEventListener(`mousemove`,oe,!0),document.addEventListener(`mouseup`,se)}}else p(`Cannot drag the current selection (probably spread over multiple sections)`)}else f()(e)}}function oe(e){if(K(_)){var t=d().getJson();if(t===void 0)return;var n=ie(K(_),e),{offset:r}=_y({json:t,selection:d().getSelection(),deltaY:n,items:K(_).items});r!==K(_).offset&&(p(`drag selection`,r,n),V(_,L(L({},K(_)),{},{offset:r,didMoveItems:!0})))}}function se(e){if(K(_)){var t=d().getJson();if(t===void 0)return;var n=ie(K(_),e),{operations:r,updatedSelection:i}=_y({json:t,selection:d().getSelection(),deltaY:n,items:K(_).items});if(r)d().onPatch(r,(e,t)=>({state:t,selection:i??u()}));else if(e.target===K(_).initialTarget&&!K(_).didMoveItems){var a=Qf(e.target),o=ep(e.target);o&&d().onSelect(Oh(a,o))}V(_,void 0),by(by().dragging=!1),document.removeEventListener(`mousemove`,oe,!0),document.removeEventListener(`mouseup`,se)}}function D(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),d().onSelect(bh(K(y))))}function ce(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),d().onSelect(xh(K(y))))}function le(e){d().onSelect(bh(K(y))),Hs(),d().onContextMenu(e)}function O(e){d().onSelect(xh(K(y))),Hs(),d().onContextMenu(e)}W(()=>J(i()),()=>{V(y,fn(i()))}),W(()=>J(i()),()=>{V(n,encodeURIComponent(i()))}),W(()=>J(o()),()=>{V(b,!!fm(o())&&o().expanded)}),W(()=>(J(a()),J(o())),()=>{V(x,Rm(a(),o(),[]))}),W(()=>J(o()),()=>{V(S,um(o())?o().visibleSections:void 0)}),W(()=>J(s()),()=>{V(C,s()?.validationError)}),W(()=>(J(d()),J(u()),K(y)),()=>{V(w,Ah(d().getJson(),u(),K(y)))}),W(()=>K(y),()=>{V(r,K(y).length===0)}),il(),Sd(!0);var ue,de,fe=Yy(),pe=H(fe),me=e=>{var n=My(),c=Kc(n),f=H(c),p=H(f),h=H(p),x=e=>{Cp(e,{get data(){return Ji}})},ee=e=>{Cp(e,{get data(){return hi}})};Q(h,e=>{K(b)?e(x):e(ee,-1)});var te=U(p,2);zu(te,t,`identifier`,{},null);var ne=U(te,2),re=e=>{Z(e,xy())};Q(ne,e=>{K(r)||e(re)});var ie=U(ne,2),oe=H(H(ie)),se=e=>{var t=Sy();mg(U(Kc(t),2),{children:(e,t)=>{var n=au();G(()=>{var e,t;return du(n,`${(J(a()),e=q(()=>a().length))!==null&&e!==void 0?e:``}
                ${(J(a()),t=q(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),Z(e,n)},$$slots:{default:!0}}),Z(e,t)},O=e=>{var t=Cy();mg(U(Kc(t),2),{onclick:E,children:(e,t)=>{var n=au();G(()=>{var e,t;return du(n,`${(J(a()),e=q(()=>a().length))!==null&&e!==void 0?e:``}
                ${(J(a()),t=q(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),Z(e,n)},$$slots:{default:!0}}),Z(e,t)};Q(oe,e=>{K(b)?e(se):e(O,-1)});var ue=U(ie,2),de=e=>{var t=wy();dy(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(d()),q(()=>d().onContextMenu)}}),Z(e,t)},fe=Sc(()=>(J(d()),K(w),J(u()),J(Qm),J($m),J(wh),J(v),J(Mh),K(y),q(()=>!d().readOnly&&K(w)&&u()&&(Qm(u())||$m(u()))&&!wh(u())&&v(Mh(u()),K(y)))));Q(ue,e=>{K(fe)&&e(de)});var pe=U(f,2),me=e=>{yy(e,{get validationError(){return K(C)},onExpand:E})};Q(pe,e=>{K(C),K(b),q(()=>K(C)&&(!K(b)||!K(C).isChildError))&&e(me)});var he=U(pe,2),ge=e=>{var t=Ty();Y(`click`,t,D),Z(e,t)},_e=e=>{var t=Ey();Y(`click`,t,ce),Z(e,t)};Q(he,e=>{K(b)?e(ge):e(_e,-1)});var k=U(c,2),ve=e=>{var t=jy(),n=Kc(t),c=H(n),f=e=>{var t,n,r=Dy(),i=H(r),a=z(()=>(K(w),J(Xm),J(u()),q(()=>K(w)&&Xm(u()))));dy(i,{insert:!0,get selected(){return K(a)},onContextMenu:le}),G(e=>{t=Ju(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),cd(r,`title`,Lp),n=Xu(r,``,n,{"--level":(K(y),q(()=>K(y).length+1))})},[()=>({"jse-hovered":K(m)===zp,"jse-selected":K(w)&&Xm(u())})]),Z(e,r)},p=Sc(()=>(J(d()),K(m),J(zp),K(w),J(Xm),J(u()),q(()=>!d().readOnly&&(K(m)===zp||K(w)&&Xm(u())))));Q(c,e=>{K(p)&&e(f)}),Nu(U(c,2),1,()=>K(S)||Pp,ju,(e,t,n)=>{var r=ky(),c=Kc(r);Nu(c,1,()=>(J(a()),K(t),K(_),q(()=>function(e,t,n){var r=t.start,i=g(r,Math.min(t.end,e.length));return n&&n.offset!==0?nf(i,n.selectionStartIndex,n.selectionItemsCount,n.offset).map((e,t)=>({index:e,gutterIndex:t})):i.map(e=>({index:e,gutterIndex:e}))}(a(),K(t),K(_)))),e=>e.index,(e,t)=>{var n=z(()=>(J(um),J(s()),K(t),q(()=>um(s())?s().items[K(t).index]:void 0))),r=z(()=>(J(kh),J(d()),J(u()),K(y),K(t),q(()=>kh(d().getJson(),u(),K(y).concat(String(K(t).index)))))),c=ou(),f=Kc(c),p=z(()=>(J(hn),J(i()),K(t),q(()=>hn(i(),K(t).index)))),m=z(()=>(J(um),J(o()),K(t),q(()=>um(o())?o().items[K(t).index]:void 0))),h=z(()=>(J(um),J(l()),K(t),q(()=>um(l())?l().items[K(t).index]:void 0)));Xy(f,{get value(){return J(a()),K(t),q(()=>a()[K(t).index])},get pointer(){return K(p)},get state(){return K(m)},get validationErrors(){return K(n)},get searchResults(){return K(h)},get selection(){return K(r)},get context(){return d()},onDragSelectionStart:ae,$$slots:{identifier:(e,n)=>{var r=Oy(),i=H(H(r));G(()=>du(i,(K(t),q(()=>K(t).gutterIndex)))),Z(e,r)}}}),Z(e,c)});var f=U(c,2),p=e=>{var t=z(()=>K(S)||Pp);ly(e,{get visibleSections(){return K(t)},sectionIndex:n,get total(){return J(a()),q(()=>a().length)},get path(){return K(y)},get onExpandSection(){return J(d()),q(()=>d().onExpandSection)},get selection(){return u()},get context(){return d()}})};Q(f,e=>{K(t),J(a()),q(()=>K(t).end<a().length)&&e(p)}),Z(e,r)});var h=U(H(U(n,2)),2),v=e=>{var t=Ay();Y(`click`,t,ce),Z(e,t)};Q(h,e=>{K(r)||e(v)}),Z(e,t)};Q(k,e=>{K(b)&&e(ve)}),Y(`click`,p,T),Z(e,n)},he=Sc(()=>(J(a()),q(()=>Array.isArray(a())))),ge=e=>{var n=Uy(),c=Kc(n),f=H(c),p=H(f),h=H(p),g=e=>{Cp(e,{get data(){return Ji}})},x=e=>{Cp(e,{get data(){return hi}})};Q(h,e=>{K(b)?e(g):e(x,-1)});var S=U(p,2);zu(S,t,`identifier`,{},null);var te=U(S,2),ne=e=>{Z(e,Ny())};Q(te,e=>{K(r)||e(ne)});var re=U(te,2),ie=H(H(re)),oe=e=>{Z(e,Py())},se=e=>{var t=Fy();mg(U(Kc(t),2),{onclick:E,children:(e,t)=>{var n=au();G((e,t)=>du(n,`${e??``}
                ${t??``}`),[()=>(J(a()),q(()=>Object.keys(a()).length)),()=>(J(a()),q(()=>Object.keys(a()).length===1?`prop`:`props`))]),Z(e,n)},$$slots:{default:!0}}),Z(e,t)};Q(ie,e=>{K(b)?e(oe):e(se,-1)});var O=U(re,2),ue=e=>{var t=Iy();dy(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(d()),q(()=>d().onContextMenu)}}),Z(e,t)},de=Sc(()=>(J(d()),K(w),J(u()),J(Qm),J($m),J(wh),J(v),J(Mh),K(y),q(()=>!d().readOnly&&K(w)&&u()&&(Qm(u())||$m(u()))&&!wh(u())&&v(Mh(u()),K(y)))));Q(O,e=>{K(de)&&e(ue)});var fe=U(f,2),pe=e=>{yy(e,{get validationError(){return K(C)},onExpand:E})};Q(fe,e=>{K(C),K(b),q(()=>K(C)&&(!K(b)||!K(C).isChildError))&&e(pe)});var me=U(fe,2),he=e=>{var t=Ly();Y(`click`,t,D),Z(e,t)},ge=e=>{var t=Ry();Y(`click`,t,ce),Z(e,t)};Q(me,e=>{K(b)?e(he):K(r)||e(ge,1)});var _e=U(c,2),k=e=>{var t=Hy(),n=Kc(t),c=H(n),f=e=>{var t,n,r=zy(),i=H(r),a=z(()=>(K(w),J(Xm),J(u()),q(()=>K(w)&&Xm(u()))));dy(i,{insert:!0,get selected(){return K(a)},onContextMenu:le}),G(e=>{t=Ju(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),cd(r,`title`,Lp),n=Xu(r,``,n,{"--level":(K(y),q(()=>K(y).length+1))})},[()=>({"jse-hovered":K(m)===zp,"jse-selected":K(w)&&Xm(u())})]),Z(e,r)},p=Sc(()=>(J(d()),K(m),J(zp),K(w),J(Xm),J(u()),q(()=>!d().readOnly&&(K(m)===zp||K(w)&&Xm(u())))));Q(c,e=>{K(p)&&e(f)}),Nu(U(c,2),1,()=>(J(a()),K(_),q(()=>function(e,t){var n=Object.keys(e);return t&&t.offset!==0?nf(n,t.selectionStartIndex,t.selectionItemsCount,t.offset):n}(a(),K(_)))),ju,(e,t)=>{var n=z(()=>(J(hn),J(i()),K(t),q(()=>hn(i(),K(t))))),r=z(()=>(J(lm),J(l()),K(t),q(()=>lm(l())?l().properties[K(t)]:void 0))),c=z(()=>(J(lm),J(s()),K(t),q(()=>lm(s())?s().properties[K(t)]:void 0))),f=z(()=>(K(y),K(t),q(()=>K(y).concat(K(t))))),p=z(()=>(J(kh),J(d()),J(u()),J(K(f)),q(()=>kh(d().getJson(),u(),K(f))))),m=ou(),h=Kc(m),g=z(()=>(J(lm),J(o()),K(t),q(()=>lm(o())?o().properties[K(t)]:void 0)));Xy(h,{get value(){return J(a()),K(t),q(()=>a()[K(t)])},get pointer(){return K(n)},get state(){return K(g)},get validationErrors(){return K(c)},get searchResults(){return K(r)},get selection(){return K(p)},get context(){return d()},onDragSelectionStart:ae,$$slots:{identifier:(e,i)=>{var a,o=By(),s=H(o),c=z(()=>(J(ag),J(K(r)),q(()=>ag(K(r)))));(function(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`pointer`,9),a=$(t,`key`,9),o=$(t,`selection`,9),s=$(t,`searchResultItems`,9),c=$(t,`onUpdateKey`,9),l=$(t,`context`,9),u=B(void 0,!0);function d(e){K(r)||l().readOnly||(e.preventDefault(),l().onSelect(_h(K(u))))}function f(e,t){var n=c()(a(),l().normalization.unescapeValue(e)),r=Ct(K(u)).concat(n);l().onSelect(t===jf.nextInside?vh(r):gh(r)),t!==jf.self&&l().focus()}function p(){l().onSelect(gh(K(u))),l().focus()}W(()=>J(i()),()=>{V(u,fn(i()))}),W(()=>(J(o()),K(u)),()=>{V(n,Zm(o())&&v(o().path,K(u)))}),W(()=>(K(n),J(o())),()=>{V(r,K(n)&&wh(o()))}),il(),Sd(!0);var m=py(),h=Kc(m),g=e=>{var t=z(()=>(J(l()),J(a()),q(()=>l().normalization.escapeValue(a())))),n=z(()=>(J(wh),J(o()),q(()=>wh(o())?o().initialValue:void 0)));Lh(e,{get value(){return K(t)},get initialValue(){return K(n)},label:`Edit key`,shortText:!0,onChange:f,onCancel:p,get onFind(){return J(l()),q(()=>l().onFind)}})},_=e=>{var t,n=fy(),r=H(n),i=e=>{var t=z(()=>(J(l()),J(a()),q(()=>l().normalization.escapeValue(a()))));dg(e,{get text(){return K(t)},get searchResultItems(){return s()}})},o=e=>{var t=au();G(e=>du(t,e),[()=>(J(Wf),J(l()),J(a()),q(()=>Wf(l().normalization.escapeValue(a()))))]),Z(e,t)};Q(r,e=>{s()?e(i):e(o,-1)}),G(()=>t=Ju(n,1,`jse-key svelte-1n4cez4`,null,t,{"jse-empty":a()===``})),Y(`dblclick`,n,d),Z(e,n)};Q(h,e=>{J(l()),K(r),q(()=>!l().readOnly&&K(r))?e(g):e(_,-1)});var y=U(h,2),b=e=>{dy(e,{selected:!0,get onContextMenu(){return J(l()),q(()=>l().onContextMenu)}})};Q(y,e=>{J(l()),K(n),K(r),q(()=>!l().readOnly&&K(n)&&!K(r))&&e(b)}),Z(e,m),Zo()})(s,{get pointer(){return K(n)},get key(){return K(t)},get selection(){return K(p)},get searchResultItems(){return K(c)},get context(){return d()},onUpdateKey:ee}),G(e=>a=Ju(o,1,`jse-key-outer svelte-1qi6rc1`,null,a,e),[()=>({"jse-selected-key":Zm(K(p))&&v(K(p).path,K(f))})]),Z(e,o)}}}),Z(e,m)});var h=U(H(U(n,2)),2),g=e=>{var t=Vy();Y(`click`,t,ce),Z(e,t)};Q(h,e=>{K(r)||e(g)}),Z(e,t)};Q(_e,e=>{K(b)&&e(k)}),Y(`click`,p,T),Z(e,n)},_e=Sc(()=>(J(Rd),J(a()),q(()=>Rd(a())))),k=e=>{var n=qy(),i=H(n),o=H(i);zu(o,t,`identifier`,{},null);var s=U(o,2),c=e=>{Z(e,Wy())};Q(s,e=>{K(r)||e(c)});var f=U(s,2),p=H(f),m=z(()=>K(w)?u():void 0),h=z(()=>(J(og),J(l()),q(()=>og(l()))));hy(p,{get path(){return K(y)},get value(){return a()},get enforceString(){return K(x)},get selection(){return K(m)},get searchResultItems(){return K(h)},get context(){return d()}});var g=U(f,2),_=e=>{var t=Gy();dy(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(d()),q(()=>d().onContextMenu)}}),Z(e,t)},b=Sc(()=>(J(d()),K(w),J(u()),J(Qm),J($m),J(wh),J(v),J(Mh),K(y),q(()=>!d().readOnly&&K(w)&&u()&&(Qm(u())||$m(u()))&&!wh(u())&&v(Mh(u()),K(y)))));Q(g,e=>{K(b)&&e(_)});var S=U(i,2),T=e=>{yy(e,{get validationError(){return K(C)},onExpand:E})};Q(S,e=>{K(C)&&e(T)});var ee=U(S,2),te=e=>{var t=Ky();Y(`click`,t,ce),Z(e,t)};Q(ee,e=>{K(r)||e(te)}),Z(e,n)};Q(pe,e=>{K(he)?e(me):K(_e)?e(ge,1):e(k,-1)});var ve=U(pe,2),A=e=>{var t,n=Jy(),r=H(n),i=z(()=>(K(w),J(Ym),J(u()),q(()=>K(w)&&Ym(u()))));dy(r,{insert:!0,get selected(){return K(i)},onContextMenu:O}),G(e=>{t=Ju(n,1,`jse-insert-area jse-after svelte-1qi6rc1`,null,t,e),cd(n,`title`,Lp)},[()=>({"jse-hovered":K(m)===Bp,"jse-selected":K(w)&&Ym(u())})]),Z(e,n)},j=Sc(()=>(J(d()),K(m),J(Bp),K(w),J(Ym),J(u()),q(()=>!d().readOnly&&(K(m)===Bp||K(w)&&Ym(u())))));Q(ve,e=>{K(j)&&e(A)}),G((e,t)=>{ue=Ju(fe,1,e,`svelte-1qi6rc1`,ue,t),cd(fe,`data-path`,K(n)),cd(fe,`aria-selected`,K(w)),de=Xu(fe,``,de,{"--level":(K(y),q(()=>K(y).length))})},[()=>Wu((J(Ph),K(b),J(d()),K(y),J(a()),q(()=>Ph(`jse-json-node`,{"jse-expanded":K(b)},d().onClassName(K(y),a()))))),()=>({"jse-root":K(r),"jse-selected":K(w)&&$m(u()),"jse-selected-value":K(w)&&Qm(u()),"jse-readonly":d().readOnly,"jse-hovered":K(m)===Vp})]),Y(`mousedown`,fe,function(e){if((e.buttons===1||e.buttons===2)&&!((t=e.target).nodeName===`DIV`&&t.contentEditable===`true`||e.buttons===1&&Gf(e.target,`BUTTON`))){var t;e.stopPropagation(),e.preventDefault(),d().focus(),document.addEventListener(`mousemove`,te,!0),document.addEventListener(`mouseup`,ne);var n=Qf(e.target),i=d().getJson(),o=d().getDocumentState();if(!u()||n===Ef.after||n===Ef.inside||u().type!==n&&u().type!==Ef.multi||!Ah(i,u(),K(y)))if(by(by().selecting=!0),by(by().selectionAnchor=K(y)),by(by().selectionAnchorType=n),by(by().selectionFocus=K(y)),e.shiftKey){var s=d().getSelection();s&&d().onSelect(Sh(Nh(s),K(y)))}else if(n===Ef.multi)if(K(r)&&e.target.hasAttribute(`data-path`)){var l=c(Vm(a(),o));d().onSelect(Dh(l))}else d().onSelect(Sh(K(y),K(y)));else i!==void 0&&d().onSelect(Oh(n,K(y)));else e.button===0&&f()(e)}}),Y(`mousemove`,fe,function(e){if(by().selecting){e.preventDefault(),e.stopPropagation(),by().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var t=Qf(e.target);v(K(y),by().selectionFocus)&&t===by().selectionAnchorType||(by(by().selectionFocus=K(y)),by(by().selectionAnchorType=t),d().onSelect(Sh(by().selectionAnchor||by().selectionFocus,by().selectionFocus)))}}),Y(`mouseover`,fe,function(e){by().selecting||by().dragging||(e.stopPropagation(),Kf(e.target,`data-type`,`selectable-value`)?V(m,Vp):Kf(e.target,`data-type`,`selectable-key`)?V(m,void 0):Kf(e.target,`data-type`,`insert-selection-area-inside`)?V(m,zp):Kf(e.target,`data-type`,`insert-selection-area-after`)&&V(m,Bp),clearTimeout(h))}),Y(`mouseout`,fe,function(e){e.stopPropagation(),h=window.setTimeout(()=>V(m,void 0))}),Z(e,fe),Zo()}var Zy={prefix:`fas`,iconName:`jsoneditor-expand`,icon:[512,512,[],``,`M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z`]},Qy={prefix:`fas`,iconName:`jsoneditor-collapse`,icon:[512,512,[],``,`m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z`]},$y={prefix:`fas`,iconName:`jsoneditor-format`,icon:[512,512,[],``,`M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z`]},eb={prefix:`fas`,iconName:`jsoneditor-compact`,icon:[512,512,[],``,`M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z`]};op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var tb=X(`<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>`,1),nb=X(`<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>`);function rb(e,t){return(0,ea.default)(typeof e==`string`?e.toLowerCase():e,typeof t==`string`?t.toLowerCase():t)}function ib(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=I(e,t);if(Wt(i)){if(n===void 0)throw Error(`Cannot sort: no property selected by which to sort the array`);return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=function(e,t){var n={boolean:0,number:1,string:2,undefined:4},r=3;return function(i,a){var o=I(i,e),s=I(a,e);if(typeof o!=typeof s){var c=n[typeof o]??r,l=n[typeof s]??r;return c>l?t:c<l?-t:0}return typeof o==`number`||typeof o==`boolean`?o>s?t:o<s?-t:0:zd(o)?0:t*rb(o,s)}}(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:1),r=I(e,t);return[{op:`replace`,path:pn(t),value:r.slice(0).sort(n)}]}(e,t,n,r)}if(Rd(i))return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=I(e,t),i=Object.keys(r).slice();i.sort((e,t)=>n*rb(e,t));var a={};return i.forEach(e=>a[e]=r[e]),[{op:`replace`,path:pn(t),value:a}]}(e,t,r);throw Error(`Cannot sort: no array or object`)}$l([`click`]),op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var ab=X(`<button type="button"> </button>`),ob=X(`<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>`),sb=X(`<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>`);function cb(e,t){Xo(t,!1);var n=$(t,`items`,9),r=$(t,`selectedItem`,9),i=$(t,`onSelect`,9);Sd(!0);var a=sb(),o=H(a);Nu(o,1,()=>(J($d),J(n()),q(()=>$d(n(),100))),e=>e,(e,t)=>{var n,a=ab(),o=H(a);G((e,i)=>{n=Ju(a,1,`jse-navigation-bar-dropdown-item svelte-1k47orx`,null,n,{"jse-selected":K(t)===r()}),cd(a,`title`,e),du(o,i)},[()=>(K(t),q(()=>K(t).toString())),()=>(J(pp),K(t),q(()=>pp(K(t).toString(),30)))]),Y(`click`,a,bd(()=>i()(K(t)))),Z(e,a)});var s=U(o,2),c=e=>{var t=ob();cd(t,`title`,`Limited to 100 items`),Z(e,t)};Q(s,e=>{J(n()),q(()=>n().length>100)&&e(c)}),Z(e,a),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var lb=X(`<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>`),ub=X(`<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>`);function db(e,t){Xo(t,!1);var n,r=B(void 0,!0),i=B(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:o}=Yo(`absolute-popup`),s=$(t,`path`,9),c=$(t,`index`,9),l=$(t,`onSelect`,9),u=$(t,`getItems`,9),d=B(void 0,!0),f=B(!1,!0);function p(e){o(n),l()(K(r).concat(e))}W(()=>(J(s()),J(c())),()=>{V(r,s().slice(0,c()))}),W(()=>(J(s()),J(c())),()=>{V(i,s()[c()])}),il(),Sd(!0);var m,h=ub(),g=H(h);Cp(H(g),{get data(){return Di}});var _=U(g,2),v=e=>{var t=lb(),n=H(t);G(()=>du(n,K(i))),Y(`click`,t,()=>p(K(i))),Z(e,t)};Q(_,e=>{K(i)!==void 0&&e(v)}),yd(h,e=>V(d,e),()=>K(d)),G(()=>m=Ju(g,1,`jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb`,null,m,{"jse-open":K(f)})),Y(`click`,g,function(){K(d)&&(V(f,!0),n=a(cb,{items:u()(K(r)),selectedItem:K(i),onSelect:p},{anchor:K(d),closeOnOuterClick:!0,onClose:()=>{V(f,!1)}}))}),Z(e,h),Zo()}function fb(e){var t,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(n=document).queryCommandSupported)!=null&&t.call(n,`copy`)){var r=document.createElement(`textarea`);r.value=e,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{document.execCommand(`copy`)}catch(e){console.error(e)}finally{document.body.removeChild(r)}return Promise.resolve()}return console.error(`Copy failed.`),Promise.resolve()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var pb=X(`<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>`),mb=X(`<div class="jse-copied-text svelte-uyexy4">Copied!</div>`),hb=X(`<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>`);function gb(e,t){Xo(t,!1);var n=B(),r=Yo(`absolute-popup`),i=$(t,`path`,8),a=$(t,`pathParser`,8),o=$(t,`onChange`,8),s=$(t,`onClose`,8),c=$(t,`onError`,8),l=$(t,`pathExists`,8),u=B(),d=B(),f=B(!1),p=void 0,m=B(!1);function h(){K(u).focus()}function g(e){try{var t=a().parse(e);return function(e){if(!l()(e))throw Error(`Path does not exist in current document`)}(t),{path:t,error:void 0}}catch(e){return{path:void 0,error:e}}}Cu(()=>{h()}),wu(()=>{clearTimeout(p)}),W(()=>(J(a()),J(i())),()=>{V(d,a().stringify(i()))}),W(()=>(K(f),K(d)),()=>{V(n,K(f)?g(K(d)).error:void 0)}),il(),Sd();var _,v=hb(),y=H(v);yd(y,e=>V(u,e),()=>K(u));var b=U(y,2),x=e=>{var t=pb();Cp(H(t),{get data(){return Bi}}),Vu(t,(e,t)=>yg?.(e,t),()=>L({text:String(K(n)||``)},r)),Z(e,t)};Q(b,e=>{K(n)&&e(x)});var S=U(b,2),C=e=>{Z(e,mb())};Q(S,e=>{K(m)&&e(C)});var w,T=U(S,2);Cp(H(T),{get data(){return Ki}}),G(()=>{_=Ju(v,1,`jse-navigation-bar-path-editor svelte-uyexy4`,null,_,{error:K(n)}),sd(y,K(d)),w=Ju(T,1,`jse-navigation-bar-copy svelte-uyexy4`,null,w,{copied:K(m)})}),Y(`keydown`,y,bd(function(e){var t=rp(e);if(t===`Escape`&&(e.preventDefault(),s()()),t===`Enter`){e.preventDefault(),V(f,!0);var n=g(K(d));n.path===void 0?c()(n.error):o()(n.path)}})),Y(`input`,y,function(e){V(d,e.currentTarget.value)}),Y(`click`,T,function(){fb(K(d)),V(m,!0),p=window.setTimeout(()=>V(m,!1),1e3),h()}),Z(e,v),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var _b=X(`<!> <!>`,1),vb=X(`<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>`);function yb(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=Ad(`jsoneditor:NavigationBar`),a=$(t,`json`,9),o=$(t,`selection`,9),s=$(t,`onSelect`,9),c=$(t,`onError`,9),l=$(t,`pathParser`,9),u=B(void 0,!0),d=B(!1,!0);function f(e){i(`get items for path`,e);var t=I(a(),e);if(Array.isArray(t))return g(0,t.length).map(String);if(Rd(t)){var n=Object.keys(t).slice(0);return n.sort(rb),n}return[]}function p(e){return dn(a(),e)}function m(e){i(`select path`,JSON.stringify(e)),s()(Sh(e,e))}function h(){V(d,!1)}function _(e){h(),m(e)}W(()=>(J(o()),Mh),()=>{V(n,o()?Mh(o()):[])}),W(()=>(J(a()),K(n)),()=>{V(r,zd(I(a(),K(n))))}),W(()=>K(n),()=>{K(n),setTimeout(()=>{if(K(u)&&K(u).scrollTo){var e=K(u).scrollWidth-K(u).clientWidth;e>0&&(i(`scrollTo `,e),K(u).scrollTo({left:e,behavior:`smooth`}))}})}),il(),Sd(!0);var v=vb(),y=H(v),b=e=>{var t=_b(),i=Kc(t);Nu(i,1,()=>K(n),ju,(e,t,r)=>{db(e,{getItems:f,get path(){return K(n)},index:r,onSelect:m})});var a=U(i,2),o=e=>{db(e,{getItems:f,get path(){return K(n)},get index(){return K(n),q(()=>K(n).length)},onSelect:m})};Q(a,e=>{K(r)&&e(o)}),Z(e,t)},x=e=>{gb(e,{get path(){return K(n)},onClose:h,onChange:_,get onError(){return c()},pathExists:p,get pathParser(){return l()}})};Q(y,e=>{K(d)?e(x,-1):e(b)});var S,C=U(y,2),w=H(C),T=H(w),E=U(w,2),ee=z(()=>K(d)?Pi:Si);Cp(E,{get data(){return K(ee)}}),yd(v,e=>V(u,e),()=>K(u)),G(e=>{S=Ju(C,1,`jse-navigation-bar-edit svelte-hjhal6`,null,S,{flex:!K(d),editing:K(d)}),cd(C,`title`,K(d)?`Cancel editing the selected path`:`Edit the selected path`),du(T,e)},[()=>(J(zd),J(a()),K(d),q(()=>zd(a())||K(d)?`\xA0`:`Navigation bar`))]),Y(`click`,C,function(){V(d,!K(d))}),Z(e,v),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var bb=X(`<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>`),xb=X(`<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>`),Sb=X(`<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>`);function Cb(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=Ad(`jsoneditor:SearchBox`),o=$(t,`json`,9),s=$(t,`documentState`,9),l=$(t,`parser`,9),u=$(t,`showSearch`,9),d=$(t,`showReplace`,13),f=$(t,`readOnly`,9),p=$(t,`columns`,9),m=$(t,`onSearch`,9),h=$(t,`onFocus`,9),g=$(t,`onPatch`,9),_=$(t,`onClose`,9),y=B(``,!0),x=``,S=B(``,!0),C=B(!1,!0),w=B(void 0,!0),T=b(function(e){return he.apply(this,arguments)},300),E=b(function(e){return ge.apply(this,arguments)},300);function ee(){d(!d()&&!f())}function te(e){e.stopPropagation();var t=rp(e);t===`Enter`&&(e.preventDefault(),K(y)===x?le():T.flush()),t===`Shift+Enter`&&(e.preventDefault(),ue()),t===`Ctrl+Enter`&&(e.preventDefault(),d()?ae():le()),t===`Ctrl+H`&&(e.preventDefault(),ee()),t===`Escape`&&(e.preventDefault(),ve())}function ne(e){rp(e)===`Enter`&&(e.preventDefault(),e.stopPropagation(),ae())}function re(){return ie.apply(this,arguments)}function ie(){return(ie=Wa(function*(){Hs(),yield T.flush()})).apply(this,arguments)}function ae(){return oe.apply(this,arguments)}function oe(){return(oe=Wa(function*(){if(!f()){var e=K(w)?.activeItem;if(a(`handleReplace`,{replaceText:K(S),activeItem:e}),K(w)&&e&&o()!==void 0){V(w,L(L({},Qh(K(w))),{},{activeIndex:K(r)}));var{operations:t,newSelection:n}=rg(o(),s(),K(S),e,l());g()(t,(e,t)=>({state:t,selection:n})),Hs(),yield E.flush(),yield fe()}}})).apply(this,arguments)}function se(){return D.apply(this,arguments)}function D(){return(D=Wa(function*(){if(!f()){a(`handleReplaceAll`,{text:K(y),replaceText:K(S)});var{operations:e,newSelection:t}=function(e,t,n,r,i){for(var a=$h(n,e,{maxResults:1/0}),o=[],s=0;s<a.length;s++){var l=a[s-1],u=a[s];s!==0&&u.field===l.field&&v(u.path,l.path)?c(o).items.push(u):o.push({path:u.path,field:u.field,items:[u]})}o.sort((e,t)=>e.field===t.field?t.path.length-e.path.length:e.field===kf.key?1:-1);var d,f=[];return o.forEach(n=>{var{field:a,path:o,items:s}=n;if(a===kf.key){var l=Ct(o),u=I(e,l),p=c(o),m=Vh(l,Object.keys(u),p,ng(p,r,s));f=f.concat(m),d=uh(e,m)}else{if(a!==kf.value)throw Error(`Cannot replace: unknown type of search result field ${a}`);var h=I(e,o);if(h===void 0)throw Error(`Cannot replace: path not found ${pn(o)}`);var g=typeof h==`string`?h:String(h),_=Rm(e,t,o),v=ng(g,r,s),y=[{op:`replace`,path:pn(o),value:_?v:Jd(v,i)}];f=f.concat(y),d=uh(e,y)}}),{operations:f,newSelection:d}}(o(),s(),K(y),K(S),l());g()(e,(e,n)=>({state:n,selection:t})),yield fe()}})).apply(this,arguments)}function ce(e){e.select()}function le(){return O.apply(this,arguments)}function O(){return(O=Wa(function*(){V(w,K(w)?Qh(K(w)):void 0),yield fe()})).apply(this,arguments)}function ue(){return de.apply(this,arguments)}function de(){return de=Wa(function*(){V(w,K(w)?function(e){var t=e.activeIndex>0?e.activeIndex-1:e.items.length-1,n=e.items[t],r=e.items.map((e,n)=>L(L({},e),{},{active:n===t}));return L(L({},e),{},{items:r,activeItem:n,activeIndex:t})}(K(w)):void 0),yield fe()}),de.apply(this,arguments)}function fe(){return pe.apply(this,arguments)}function pe(){return(pe=Wa(function*(){a(`handleFocus`,K(w));var e=K(w)?.activeItem;e&&o()!==void 0&&(yield h()(e.path,e.resultIndex))})).apply(this,arguments)}function me(){return me=Wa(function*(e){yield _e(e,K(y),o())}),me.apply(this,arguments)}function he(){return he=Wa(function*(e){yield _e(u(),e,o()),yield fe()}),he.apply(this,arguments)}function ge(){return ge=Wa(function*(e){yield _e(u(),K(y),e)}),ge.apply(this,arguments)}function _e(e,t,n){return k.apply(this,arguments)}function k(){return k=Wa(function*(e,t,n){return e?(a(`applySearch`,{showSearch:e,text:t}),t===``?(a(`clearing search result`),K(w)!==void 0&&V(w,void 0),Promise.resolve()):(x=t,V(C,!0),new Promise(e=>{setTimeout(()=>{V(w,function(e,t){var n=t!=null&&t.activeItem?ig(t.activeItem):void 0,r=e.findIndex(e=>v(n,ig(e))),i=r===-1?t?.activeIndex!==void 0&&t?.activeIndex<e.length?t?.activeIndex:e.length>0?0:-1:r,a=e.map((e,t)=>L(L({resultIndex:t},e),{},{active:t===i}));return{items:a,activeItem:a[i],activeIndex:i}}($h(t,n,{maxResults:Ap,columns:p()}),K(w))),V(C,!1),e()})}))):(K(w)&&V(w,void 0),Promise.resolve())}),k.apply(this,arguments)}function ve(){a(`handleClose`),T.cancel(),E.cancel(),_e(!1,K(y),o()),_()()}W(()=>K(w),()=>{var e;V(n,((e=K(w))==null||(e=e.items)==null?void 0:e.length)||0)}),W(()=>K(w),()=>{V(r,K(w)?.activeIndex||0)}),W(()=>(K(n),Ap),()=>{V(i,K(n)>=Ap?`999+`:String(K(n)))}),W(()=>(J(m()),K(w)),()=>{m()(K(w))}),W(()=>J(u()),()=>{(function(e){me.apply(this,arguments)})(u())}),W(()=>K(y),()=>{T(K(y))}),W(()=>J(o()),()=>{E(o())}),il(),Sd(!0);var A=ou(),j=Kc(A),M=e=>{var t=Sb(),a=H(t),o=H(a),s=e=>{var t=bb(),n=H(t),r=z(()=>d()?Ji:hi);Cp(n,{get data(){return K(r)}}),Y(`click`,t,ee),Z(e,t)};Q(o,e=>{f()||e(s)});var c=H(U(o,2)),l=H(c),u=H(l),p=e=>{Cp(e,{get data(){return bi},spin:!0})},m=e=>{Cp(e,{get data(){return gi}})};Q(u,e=>{K(C)?e(p):e(m,-1)});var h=U(l,2),g=H(h);rl(()=>md(g,()=>K(y),e=>V(y,e))),Vu(g,e=>ce?.(e)),rl(()=>Y(`paste`,g,re));var _,v=U(h,2),b=H(v),x=U(v,2);Cp(H(x),{get data(){return Li}});var w=U(x,2);Cp(H(w),{get data(){return yi}});var T=U(w,2);Cp(H(T),{get data(){return Fi}});var E=U(c,2),ie=e=>{var t=xb(),n=H(t),r=U(n,2),i=U(r,2);md(n,()=>K(S),e=>V(S,e)),Y(`keydown`,n,ne),Y(`click`,r,ae),Y(`click`,i,se),Z(e,t)};Q(E,e=>{d()&&!f()&&e(ie)}),G(()=>{_=Ju(v,1,`jse-search-count svelte-1x1x8q0`,null,_,{"jse-visible":K(y)!==``}),du(b,`${K(r)!==-1&&K(r)<K(n)?`${K(r)+1}/`:``}${K(i)??``}`)}),Y(`click`,x,le),Y(`click`,w,ue),Y(`click`,T,ve),Y(`keydown`,a,te),Z(e,t)};Q(j,e=>{u()&&e(M)}),Z(e,A),Zo()}var wb=Symbol(`path`);function Tb(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,r={};Array.isArray(e)&&function(e,t,n){if(e.length<t)e.forEach(n);else for(var r=t>1?(e.length-1)/(t-1):e.length,i=0;i<t;i++){var a=Math.floor(i*r);n(e[a],a,e)}}(e,n,e=>{Rd(e)?Eb(e,r,t):r[wb]=!0});var i=[];return wb in r&&i.push([]),Db(r,[],i,t),i}function Eb(e,t,n){for(var r in e){var i=e[r],a=t[r]||(t[r]={});Rd(i)&&n?Eb(i,a,n):a[wb]===void 0&&(a[wb]=!0)}}function Db(e,t,n,r){for(var i in e){var a=t.concat(i),o=e[i];o&&!0===o[wb]&&n.push(a),Gt(o)&&r&&Db(o,a,n,r)}}function Ob(e,t,n,r,i,a){for(var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,s=Wt(n)?n.length:0,c=function(e,t){var n=Object.values(e);return Dt(n)?t:n.reduce((e,t)=>e+t)/n.length}(r,i),l=e-o,u=t+2*o,d=e=>r[e]||i,f=0,p=a;p<l&&f<s;)p+=d(f),f++;f>0&&(p-=d(--f));for(var m=f,h=0;h<u&&m<s;)h+=d(m),m++;for(var g=0,_=m;_<s;_++)g+=d(_);return{startIndex:f,endIndex:m,startHeight:p,endHeight:g,averageItemHeight:c,visibleHeight:h,visibleItems:Wt(n)?n.slice(f,m):[]}}function kb(e,t,n,r){for(var{rowIndex:i}=Ab(e,t),a=0,o=0;o<i;o++)a+=n[o]||r;return a}function Ab(e,t){var[n,...r]=e,i=parseInt(n,10);return{rowIndex:isNaN(i)?-1:i,columnIndex:t.findIndex(e=>mh(r,e))}}function jb(e,t){var{rowIndex:n,columnIndex:r}=e;return[String(n),...t[r]]}function Mb(e,t){var[n,r]=It(e,e=>Id(e.path[0]));return{root:r,rows:kt(St(n,Pb),e=>{var n={row:[],columns:{}};return e.forEach(e=>{var r=function(e,t){var n=Ab(e.path,t);return n.columnIndex===-1?-1:n.columnIndex}(e,t);r===-1?n.row.push(e):(n.columns[r]===void 0&&(n.columns[r]=[]),n.columns[r].push(e))}),n})}}function Nb(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:`Multiple validation issues: `+t.map(e=>Cg(e.path)+` `+e.message).join(`, `),severity:Of.warning}}function Pb(e){return parseInt(e.path[0],10)}function Fb(e,t,n){return t.some(t=>function(e,t,n){if(!e)return!1;if(t.op===`replace`){var{rowIndex:r,columnIndex:i}=Ab(fn(t.path),n),a=n.findIndex(t=>v(t,e.path));if(r!==-1&&i!==-1&&i!==a)return!1}return!0}(e,t,n))?void 0:e}var Ib=Ad(`jsoneditor:actions`);function Lb(e){return Rb.apply(this,arguments)}function Rb(){return Rb=Wa(function*(e){var{json:t,selection:n,indentation:r,readOnly:i,parser:a,onPatch:o}=e;if(!i&&t!==void 0&&n&&Th(n)){var s=Ch(t,n,r,a);if(s!==void 0){Ib(`cut`,{selection:n,clipboard:s,indentation:r}),yield fb(s);var{operations:c,newSelection:l}=Jh(t,n);o(c,(e,t)=>({state:t,selection:l}))}}}),Rb.apply(this,arguments)}function zb(e){return Bb.apply(this,arguments)}function Bb(){return Bb=Wa(function*(e){var{json:t,selection:n,indentation:r,parser:i}=e,a=Ch(t,n,r,i);a!==void 0&&(Ib(`copy`,{clipboard:a,indentation:r}),yield fb(a))}),Bb.apply(this,arguments)}function Vb(e){var{clipboardText:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onChangeText:s,onPasteMultilineText:c,openRepairModal:l}=e;if(!i)try{u(t)}catch{l(t,e=>{Ib(`repaired pasted text: `,e),u(e)})}function u(e){if(n!==void 0){var i=r||vh([]),l=Wh(n,i,e,a),u=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ip;if(e.length>r||!/\n/.test(e))return!1;var i=t.some(e=>e.op===`replace`&&Array.isArray(e.value)),a=t.filter(e=>e.op===`add`).length>1;if(!i&&!a)return!1;try{return sf(e,n.parse),!1}catch{return!0}}(t,l,a);Ib(`paste`,{pastedText:e,operations:l,ensureSelection:i,pasteMultilineText:u}),o(l,(e,t)=>{var r=t;return l.filter(e=>(Kt(e)||Jt(e))&&zd(e.value)).forEach(t=>{var i=En(n,t.path);r=Um(e,r,i)}),{state:r}}),u&&c(e)}else Ib(`paste text`,{pastedText:e}),s(t,(e,t)=>{if(e)return{state:Um(e,t,[])}})}}function Hb(e){var{json:t,text:n,selection:r,keepSelection:i,readOnly:a,onChange:o,onPatch:s}=e;if(!a&&r){var c=t!==void 0&&(Zm(r)||Qm(r))?Sh(r.path,r.path):r;if(Dt(Mh(r)))Ib(`remove root`,{selection:r}),o&&o({text:``,json:void 0},t===void 0?{text:n||``,json:t}:{text:void 0,json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:l,newSelection:u}=Jh(t,c);Ib(`remove`,{operations:l,selection:r,newSelection:u}),s(l,(e,t)=>({state:t,selection:i?r:u}))}}}function Ub(e){var{insertType:t,selectInside:n,initialValue:r,json:i,selection:a,readOnly:o,parser:s,onPatch:l,onReplaceJson:u}=e;if(!o){var d=function(e,t,n){if(n===`object`)return{};if(n===`array`)return[];if(n===`structure`&&e!==void 0){var r=I(e,t?ih(t):[]);if(Array.isArray(r)&&!Dt(r)){var i=bt(r);return zd(i)?dt(i,e=>Array.isArray(e)?[]:Rd(e)?void 0:``):``}}return``}(i,a,t);if(i!==void 0){var f=s.stringify(d),p=Wh(i,a,f,s);Ib(`onInsert`,{insertType:t,operations:p,newValue:d,data:f});var m=c(p.filter(e=>e.op===`add`||e.op===`replace`));l(p,(e,t,i)=>{if(m){var a=En(e,m.path);if(zd(d))return{state:Em(e,t,a,qm),selection:n?bh(a):i};if(d===``){var o=Dt(a)?void 0:I(e,Ct(a));return{state:Em(e,t,a,Jm),selection:Rd(o)?_h(a,r):yh(a,r)}}}}),Ib(`after patch`)}else{Ib(`onInsert`,{insertType:t,newValue:d});var h=[];u(d,(e,t)=>({state:Um(e,t,h),selection:zd(d)?bh(h):yh(h)}))}}}function Wb(e){return Gb.apply(this,arguments)}function Gb(){return Gb=Wa(function*(e){var{char:t,selectInside:n,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c,onSelect:l}=e;a||(Zm(i)?l(L(L({},i),{},{edit:!0,initialValue:t})):t===`{`?Ub({insertType:`object`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):t===`[`?Ub({insertType:`array`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):Qm(i)&&r!==void 0?zd(I(r,i.path))||l(L(L({},i),{},{edit:!0,initialValue:t})):(Ib(`onInsertValueWithCharacter`,{char:t}),yield function(e){return Kb.apply(this,arguments)}({char:t,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c})))}),Gb.apply(this,arguments)}function Kb(){return Kb=Wa(function*(e){var{char:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s}=e;i||Ub({insertType:`value`,selectInside:!1,initialValue:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s})}),Kb.apply(this,arguments)}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var qb=X(`<div class="jse-json-preview svelte-25xmyd"> </div>`);function Jb(e,t){Xo(t,!1);var n=B(),r=B(),i=$(t,`text`,8),a=$(t,`json`,8),o=$(t,`indentation`,8),s=$(t,`parser`,8);W(()=>(J(a()),J(i())),()=>{V(n,a()===void 0?{text:i()||``}:{json:a()})}),W(()=>(K(n),J(o()),J(s()),Np),()=>{V(r,pp(_f(K(n),o(),s()),Np))}),il(),Sd();var c=qb(),l=H(c);G(()=>du(l,K(r))),Z(e,c),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var Yb=X(`<button type="button"><!> <!></button>`);function Xb(e,t){Xo(t,!1);var n=$(t,`item`,8),r=$(t,`className`,8,void 0),i=$(t,`onRequestClose`,8);Sd();var a=Yb(),o=H(a),s=e=>{Cp(e,{get data(){return J(n()),q(()=>n().icon)}})};Q(o,e=>{J(n()),q(()=>n().icon)&&e(s)});var c=U(o,2),l=e=>{var t=au();G(()=>du(t,(J(n()),q(()=>n().text)))),Z(e,t)};Q(c,e=>{J(n()),q(()=>n().text)&&e(l)}),G(e=>{Ju(a,1,e,`svelte-16jz6ui`),cd(a,`title`,(J(n()),q(()=>n().title))),a.disabled=(J(n()),q(()=>n().disabled||!1))},[()=>Wu((J(Ph),J(r()),J(n()),q(()=>Ph(`jse-context-menu-button`,r(),n().className))))]),Y(`click`,a,e=>{i()(),n().onClick(e)}),Z(e,a),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var Zb=X(`<li class="svelte-bov1j6"><button type="button"><!> </button></li>`),Qb=X(`<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>`);op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var $b=X(`<button type="button" slot="defaultItem"><!> </button>`);function ex(e,t){Xo(t,!1);var n=B(),r=$(t,`item`,8),i=$(t,`className`,8,void 0),a=$(t,`onRequestClose`,8);W(()=>(J(r()),J(a())),()=>{V(n,r().items.map(e=>L(L({},e),{},{onClick:t=>{a()(),e.onClick(t)}})))}),il(),Sd(),function(e,t){Xo(t,!1);var n=B(void 0,!0),r=$(t,`items`,25,()=>[]),i=$(t,`title`,9,void 0),a=$(t,`width`,9,`120px`),o=B(!1,!0);function s(){V(o,!1)}function c(e){rp(e)===`Escape`&&(e.preventDefault(),V(o,!1))}Cu(()=>{document.addEventListener(`click`,s),document.addEventListener(`keydown`,c)}),wu(()=>{document.removeEventListener(`click`,s),document.removeEventListener(`keydown`,c)}),W(()=>J(r()),()=>{V(n,r().every(e=>!0===e.disabled))}),il(),Sd(!0);var l=Qb(),u=H(l);zu(u,t,`defaultItem`,{},null);var d,f=U(u,2);Cp(H(f),{get data(){return Ji}});var p,m=U(f,2);Nu(H(m),5,r,ju,(e,t)=>{var n=Zb(),r=H(n),i=H(r),a=e=>{Cp(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(i,e=>{K(t),q(()=>K(t).icon)&&e(a)});var o=U(i);G(()=>{var e;cd(r,`title`,(K(t),q(()=>K(t).title))),r.disabled=(K(t),q(()=>K(t).disabled)),Ju(r,1,Wu((K(t),q(()=>K(t).className))),`svelte-bov1j6`),du(o,` ${(K(t),e=q(()=>K(t).text))!==null&&e!==void 0?e:``}`)}),Y(`click`,r,e=>K(t).onClick(e)),Z(e,n)}),G(()=>{cd(l,`title`,i()),d=Ju(f,1,`jse-open-dropdown svelte-bov1j6`,null,d,{"jse-visible":K(o)}),f.disabled=K(n),p=Ju(m,1,`jse-dropdown-items svelte-bov1j6`,null,p,{"jse-visible":K(o)}),Xu(m,`width: ${a()??``};`)}),Y(`click`,f,function(){var e=K(o);setTimeout(()=>V(o,!e))}),Y(`click`,l,s),Z(e,l),Zo()}(e,{get width(){return J(r()),q(()=>r().width)},get items(){return K(n)},$$slots:{defaultItem:(e,t)=>{var n=$b(),o=H(n),s=e=>{Cp(e,{get data(){return J(r()),q(()=>r().main.icon)}})};Q(o,e=>{J(r()),q(()=>r().main.icon)&&e(s)});var c=U(o);G(e=>{var t;Ju(n,1,e,`svelte-1y5l9l1`),cd(n,`title`,(J(r()),q(()=>r().main.title))),n.disabled=(J(r()),q(()=>r().main.disabled||!1)),du(c,` ${(J(r()),t=q(()=>r().main.text))!==null&&t!==void 0?t:``}`)},[()=>Wu((J(Ph),J(i()),J(r()),q(()=>Ph(`jse-context-menu-button`,i(),r().main.className))))]),Y(`click`,n,e=>{a()(),r().main.onClick(e)}),Z(e,n)}}}),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var tx=X(`<div class="jse-separator svelte-1shjn02"></div>`),nx=X(`<div class="jse-label svelte-1shjn02"> </div>`),rx=X(`<div class="jse-column svelte-1shjn02"></div>`),ix=X(`<div class="jse-separator svelte-1shjn02"></div>`),ax=X(`<div class="jse-row svelte-1shjn02"></div>`),ox=X(`<div class="jse-separator svelte-1shjn02"></div>`),sx=X(`<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>`),cx=X(`<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>`);function lx(e,t){Xo(t,!1);var n=$(t,`items`,9),r=$(t,`onRequestClose`,9),i=$(t,`tip`,9),a=B(void 0,!0);Cu(()=>{var e=Array.from(K(a).querySelectorAll(`button`)).find(e=>!e.disabled);e&&e.focus()});var o={ArrowUp:`Up`,ArrowDown:`Down`,ArrowLeft:`Left`,ArrowRight:`Right`};function s(e){return console.error(`Unknown type of context menu item`,e),`???`}Sd(!0);var c=cx(),l=H(c);Nu(l,1,n,ju,(e,t)=>{var n=ou(),i=Kc(n),a=e=>{Xb(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=Sc(()=>(J(em),K(t),q(()=>em(K(t))))),c=e=>{ex(e,{get item(){return K(t)},get onRequestClose(){return r()}})},l=Sc(()=>(J(tm),K(t),q(()=>tm(K(t))))),u=e=>{var n=ax();Nu(n,5,()=>(K(t),q(()=>K(t).items)),ju,(e,t)=>{var n=ou(),i=Kc(n),a=e=>{Xb(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=Sc(()=>(J(em),K(t),q(()=>em(K(t))))),c=e=>{ex(e,{get item(){return K(t)},get onRequestClose(){return r()}})},l=Sc(()=>(J(tm),K(t),q(()=>tm(K(t))))),u=e=>{var n=rx();Nu(n,5,()=>(K(t),q(()=>K(t).items)),ju,(e,t)=>{var n=ou(),i=Kc(n),a=e=>{Xb(e,{className:`left`,get item(){return K(t)},get onRequestClose(){return r()}})},o=Sc(()=>(J(em),K(t),q(()=>em(K(t))))),c=e=>{ex(e,{className:`left`,get item(){return K(t)},get onRequestClose(){return r()}})},l=Sc(()=>(J(tm),K(t),q(()=>tm(K(t))))),u=e=>{Z(e,tx())},d=Sc(()=>(J(Qp),K(t),q(()=>Qp(K(t))))),f=e=>{var n=nx(),r=H(n);G(()=>du(r,(K(t),q(()=>K(t).text)))),Z(e,n)},p=Sc(()=>(J($p),K(t),q(()=>$p(K(t))))),m=e=>{var n=au();G(e=>du(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(i,e=>{K(o)?e(a):K(l)?e(c,1):K(d)?e(u,2):K(p)?e(f,3):e(m,-1)}),Z(e,n)}),Z(e,n)},d=Sc(()=>(J(rm),K(t),q(()=>rm(K(t))))),f=e=>{Z(e,ix())},p=Sc(()=>(J(Qp),K(t),q(()=>Qp(K(t))))),m=e=>{var n=au();G(e=>du(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(i,e=>{K(o)?e(a):K(l)?e(c,1):K(d)?e(u,2):K(p)?e(f,3):e(m,-1)}),Z(e,n)}),Z(e,n)},d=Sc(()=>(J(nm),K(t),q(()=>nm(K(t))))),f=e=>{Z(e,ox())},p=Sc(()=>(J(Qp),K(t),q(()=>Qp(K(t))))),m=e=>{var n=au();G(e=>du(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(i,e=>{K(o)?e(a):K(l)?e(c,1):K(d)?e(u,2):K(p)?e(f,3):e(m,-1)}),Z(e,n)});var u=U(l,2),d=e=>{var t=sx(),n=H(H(t));Cp(H(n),{get data(){return ci}});var r=H(U(n,2));G(()=>du(r,i())),Z(e,t)};Q(u,e=>{i()&&e(d)}),yd(c,e=>V(a,e),()=>K(a)),Y(`keydown`,c,function(e){var t=o[rp(e)];if(t&&e.target){e.preventDefault();var n=tp({allElements:Array.from(K(a).querySelectorAll(`button:not([disabled])`)),currentElement:e.target,direction:t,hasPrio:e=>e.getAttribute(`data-type`)!==`jse-open-dropdown`});n&&n.focus()}}),Z(e,c),Zo()}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`),X(`<option> </option>`),X(`<select></select>`);var ux,dx;function fx(e,t){return ux||=(dx=new WeakMap,new ResizeObserver(e=>{for(var t of e){var n=dx.get(t.target);n&&n(t.target)}})),dx.set(e,t),ux.observe(e),{destroy:()=>{dx.delete(e),ux.unobserve(e)}}}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var px=X(`<!> <!>`,1),mx=X(`<div class="jse-search-box-background svelte-10mlrw4"></div>`),hx=X(`<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>`,1),gx=X(`<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>`,1),_x=X(`<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>`),vx=X(`<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>`,1);function yx(e,t){Xo(t,!1);var n=B(void 0,!0),r=Ad(`jsoneditor:TreeMode`),i=typeof window>`u`;r(`isSSR:`,i);var a=Ut(),o=Ut(),{openAbsolutePopup:s,closeAbsolutePopup:l}=Yo(`absolute-popup`),u=B(void 0,!0),d=B(void 0,!0),f=B(void 0,!0),p=!1,m=Ov(),h=$(t,`readOnly`,9),g=$(t,`externalContent`,9),y=$(t,`externalSelection`,9),b=$(t,`history`,9),x=$(t,`truncateTextSize`,9),S=$(t,`mainMenuBar`,9),C=$(t,`navigationBar`,9),w=$(t,`escapeControlCharacters`,9),T=$(t,`escapeUnicodeCharacters`,9),E=$(t,`parser`,9),ee=$(t,`parseMemoizeOne`,9),te=$(t,`validator`,9),ne=$(t,`validationParser`,9),re=$(t,`pathParser`,9),ie=$(t,`indentation`,9),ae=$(t,`onError`,9),oe=$(t,`onChange`,9),se=$(t,`onChangeMode`,9),D=$(t,`onSelect`,9),ce=$(t,`onUndo`,9),le=$(t,`onRedo`,9),O=$(t,`onRenderValue`,9),ue=$(t,`onRenderMenu`,9),de=$(t,`onRenderContextMenu`,9),fe=$(t,`onClassName`,9),pe=$(t,`onFocus`,9),me=$(t,`onBlur`,9),he=$(t,`onSortModal`,9),ge=$(t,`onTransformModal`,9),_e=$(t,`onJSONEditorModal`,9),k=!1,ve=B(!1,!0),A=B(void 0,!0);Iv({onMount:Cu,onDestroy:wu,getWindow:()=>Yf(K(f)),hasFocus:()=>k&&document.hasFocus()||Xf(K(f)),onFocus:()=>{p=!0,pe()&&pe()()},onBlur:()=>{p=!1,me()&&me()()}});var j=B(void 0,!0),M=B(void 0,!0),ye=void 0,be=!1,N=B(_m({json:K(j)}),!0),P=B(th(y())?y():void 0,!0);function xe(e){V(P,e)}Cu(()=>{if(K(P)){var e=Mh(K(P));V(N,Em(K(j),K(N),e,Jm)),setTimeout(()=>Nt(e))}});var Se,Ce=B(void 0,!0),we=B(void 0,!0),Te=B(void 0,!0),Ee=B(void 0,!0),De=B(!1,!0),Oe=B(!1,!0);function ke(e){V(Ee,(Se=e)?cg(K(j),Se.items):void 0)}function Ae(e,t){return je.apply(this,arguments)}function je(){return(je=Wa(function*(e,t){V(N,Em(K(j),K(N),e,Jm)),yield kt(e,{element:Mt(t)})})).apply(this,arguments)}function Me(){V(De,!1),V(Oe,!1),rn()}function Ne(e){r(`select validation error`,e),V(P,vh(e.path)),kt(e.path)}function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Km;r(`expand`),V(N,Em(K(j),K(N),e,t))}function Fe(e,t){V(N,Dm(K(j),K(N),e,t)),K(P)&&function(e,t){return mh(Mh(e),t)&&(Mh(e).length>t.length||Xm(e))}(K(P),e)&&V(P,void 0)}var Ie=B(!1,!0),F=B([],!0),Le=B(void 0,!0),Re=_(Nv);function ze(e,t,n,i){kv(()=>{var a;try{a=Re(e,t,n,i)}catch(e){a=[{path:[],message:`Failed to validate: `+e.message,severity:Of.warning}]}v(a,K(F))||(r(`validationErrors changed:`,a),V(F,a),V(Le,function(e,t){var n;return t.forEach(t=>{n=Mv(e,n,t.path,(e,n)=>L(L({},n),{},{validationError:t}))}),t.forEach(t=>{for(var r=t.path;r.length>0;)r=Ct(r),n=Mv(e,n,r,(e,t)=>t.validationError?t:L(L({},t),{},{validationError:{isChildError:!0,path:r,message:`Contains invalid data`,severity:Of.warning}}))}),n}(e,K(F))))},e=>r(`validationErrors updated in ${e} ms`))}function Be(){return r(`validate`),ye?{parseError:ye,isRepairable:!1}:(ze(K(j),te(),E(),ne()),Dt(K(F))?void 0:{validationErrors:K(F)})}function Ve(){return K(j)}function He(){return K(N)}function Ue(){return K(P)}function We(e){r(`applyExternalContent`,{updatedContent:e}),mf(e)?function(e){if(e!==void 0){var t=!v(K(j),e);if(r(`update external json`,{isChanged:t,currentlyText:K(j)===void 0}),t){var n={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ie)};V(j,e),V(N,Sm(e,K(N))),Ge(K(j)),V(M,void 0),V(Ie,!1),ye=void 0,Ke(K(j)),qe(n)}}}(e.json):pf(e)&&function(e){if(!(e===void 0||mf(g()))){var t=e!==K(M);if(r(`update external text`,{isChanged:t}),t){var n={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ie)};try{V(j,ee()(e)),V(N,Sm(K(j),K(N))),Ge(K(j)),V(M,e),V(Ie,!1),ye=void 0}catch(t){try{V(j,ee()(br(e))),V(N,Sm(K(j),K(N))),Ge(K(j)),V(M,e),V(Ie,!0),ye=void 0,Ke(K(j))}catch{V(j,void 0),V(N,void 0),V(M,g().text),V(Ie,!1),ye=K(M)!==void 0&&K(M)!==``?uf(K(M),t.message||String(t)):void 0}}Ke(K(j)),qe(n)}}}(e.text)}function Ge(e){be||(be=!0,V(N,Um(e,K(N),[])))}function Ke(e){K(P)&&(dn(e,Nh(K(P)))&&dn(e,Mh(K(P)))||(r(`clearing selection: path does not exist anymore`,K(P)),V(P,lh(e,K(N)))))}function qe(e){if(e.json!==void 0||e.text!==void 0){var t=K(j)!==void 0&&e.json!==void 0;b().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:hh(e.selection),sortedColumn:void 0},redo:{patch:t?[{op:`replace`,path:``,value:K(j)}]:void 0,json:K(j),text:K(M),documentState:K(N),textIsRepaired:K(Ie),selection:hh(K(P)),sortedColumn:void 0}})}}function Je(e,t){if(r(`patch`,e,t),K(j)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=K(j),i={json:void 0,text:K(M),documentState:K(N),selection:hh(K(P)),textIsRepaired:K(Ie),sortedColumn:void 0},a=Yh(K(j),e),o=km(K(j),K(N),e),s=uh(K(j),e)??K(P),c=typeof t==`function`?t(o.json,o.documentState,s):void 0;return V(j,c?.json===void 0?o.json:c.json),V(N,c?.state===void 0?o.documentState:c.state),V(P,c?.selection===void 0?s:c.selection),V(M,void 0),V(Ie,!1),V(we,void 0),V(Te,void 0),ye=void 0,Ke(K(j)),b().add({type:`tree`,undo:L({patch:a},i),redo:{patch:e,json:void 0,text:K(M),documentState:K(N),selection:hh(K(P)),sortedColumn:void 0,textIsRepaired:K(Ie)}}),{json:K(j),previousJson:n,undo:a,redo:e}}function Ye(){!h()&&K(P)&&V(P,_h(Mh(K(P))))}function Xe(){if(!h()&&K(P)){var e=Mh(K(P)),t=I(K(j),e);zd(t)?function(e,t){r(`openJSONEditorModal`,{path:e,value:t}),k=!0,_e()({content:{json:t},path:e,onPatch:K(cn).onPatch,onClose:()=>{k=!1,setTimeout(rn)}})}(e,t):V(P,yh(e))}}function Ze(){if(!h()&&Qm(K(P))){var e=Mh(K(P)),t=pn(e),n=I(K(j),e),i=!Rm(K(j),K(N),e),a=i?String(n):Jd(String(n),E());r(`handleToggleEnforceString`,{enforceString:i,value:n,updatedValue:a}),Ft([{op:`replace`,path:t,value:a}],(t,n)=>({state:Nm(K(j),n,e,{type:`value`,enforceString:i})}))}}function Qe(){return K(Ie)&&K(j)!==void 0&&It(K(j)),K(j)===void 0?{text:K(M)||``}:{json:K(j)}}function $e(){return et.apply(this,arguments)}function et(){return et=Wa(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Lb({json:K(j),selection:K(P),indentation:e?ie():void 0,readOnly:h(),parser:E(),onPatch:Ft})}),et.apply(this,arguments)}function tt(){return nt.apply(this,arguments)}function nt(){return nt=Wa(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];K(j)!==void 0&&(yield zb({json:K(j),selection:K(P),indentation:e?ie():void 0,parser:E()}))}),nt.apply(this,arguments)}function rt(e){e.preventDefault(),ot(e.clipboardData?.getData(`text/plain`))}function it(){return at.apply(this,arguments)}function at(){return(at=Wa(function*(){try{ot(yield navigator.clipboard.readText())}catch(e){console.error(e),V(ve,!0)}})).apply(this,arguments)}function ot(e){e!==void 0&&Vb({clipboardText:e,json:K(j),selection:K(P),readOnly:h(),parser:E(),onPatch:Ft,onChangeText:Lt,onPasteMultilineText:Gt,openRepairModal:st})}function st(e,t){V(A,{text:e,onParse:e=>sf(e,e=>af(e,E())),onRepair:cf,onApply:t,onClose:rn})}function lt(){Hb({json:K(j),text:K(M),selection:K(P),keepSelection:!1,readOnly:h(),onChange:oe(),onPatch:Ft})}function ut(){!h()&&K(j)!==void 0&&K(P)&&Th&&!Dt(Mh(K(P)))&&(r(`duplicate`,{selection:K(P)}),Ft(Hh(K(j),rh(K(j),K(P)))))}function dt(){h()||!K(P)||!$m(K(P))&&!Qm(K(P))||Dt(Mh(K(P)))||(r(`extract`,{selection:K(P)}),Ft(Uh(K(j),K(P)),(e,t)=>{if(zd(e))return{state:Wm(e,t,[])}}))}function ft(e){Ub({insertType:e,selectInside:!0,initialValue:void 0,json:K(j),selection:K(P),readOnly:h(),parser:E(),onPatch:Ft,onReplaceJson:It})}function pt(e){Zm(K(P))&&V(P,vh(K(P).path)),K(P)||V(P,lh(K(j),K(N))),ft(e)}function mt(e){if(!h()&&K(P))if(Eh(K(P)))try{var t=Nh(K(P)),n=I(K(j),t),i=function(e,t,n){if(t===`array`){if(Array.isArray(e))return e;if(Rd(e))return tf(e);if(typeof e==`string`)try{var r=n.parse(e);if(Array.isArray(r))return r;if(Rd(r))return tf(r)}catch{return[e]}return[e]}if(t===`object`){if(Array.isArray(e))return ef(e);if(Rd(e))return e;if(typeof e==`string`)try{var i=n.parse(e);if(Rd(i))return i;if(Array.isArray(i))return ef(i)}catch{return{value:e}}return{value:e}}if(t===`value`)return zd(e)?n.stringify(e):e;throw Error(`Cannot convert ${Gd(e,n)} to ${t}`)}(n,e,E());if(i===n)return;var a=[{op:`replace`,path:pn(t),value:i}];r(`handleConvert`,{selection:K(P),path:t,type:e,operations:a}),Ft(a,(e,t)=>({state:K(P)?Um(e,t,Mh(K(P))):K(N)}))}catch(e){ae()(e)}else ae()(Error(`Cannot convert current selection to ${e}`))}function ht(){if(K(P)){var e=sh(K(j),K(N),K(P),!1),t=Ct(Mh(K(P)));e&&!Dt(Mh(e))&&v(t,Ct(Mh(e)))?V(P,xh(Mh(e))):V(P,bh(t)),r(`insert before`,{selection:K(P),selectionBefore:e,parentPath:t}),Hs(),qt()}}function gt(){if(K(P)){var e=oh(K(j),K(P));r(`insert after`,e),V(P,xh(e)),Hs(),qt()}}function _t(e){return vt.apply(this,arguments)}function vt(){return(vt=Wa(function*(e){yield Wb({char:e,selectInside:!0,json:K(j),selection:K(P),readOnly:h(),parser:E(),onPatch:Ft,onReplaceJson:It,onSelect:xe})})).apply(this,arguments)}function yt(){if(!h()&&b().canUndo){var e=b().undo();if(mm(e)){var t={json:K(j),text:K(M)};V(j,e.undo.patch?gn(K(j),e.undo.patch):e.undo.json),V(N,e.undo.documentState),V(P,e.undo.selection),V(M,e.undo.text),V(Ie,e.undo.textIsRepaired),ye=void 0,r(`undo`,{item:e,json:K(j),documentState:K(N),selection:K(P)}),Pt(t,e.undo.patch&&e.redo.patch?{json:K(j),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),rn(),K(P)&&kt(Mh(K(P)),{scrollToWhenVisible:!1})}else ce()(e)}}function bt(){if(!h()&&b().canRedo){var e=b().redo();if(mm(e)){var t={json:K(j),text:K(M)};V(j,e.redo.patch?gn(K(j),e.redo.patch):e.redo.json),V(N,e.redo.documentState),V(P,e.redo.selection),V(M,e.redo.text),V(Ie,e.redo.textIsRepaired),ye=void 0,r(`redo`,{item:e,json:K(j),documentState:K(N),selection:K(P)}),Pt(t,e.undo.patch&&e.redo.patch?{json:K(j),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),rn(),K(P)&&kt(Mh(K(P)),{scrollToWhenVisible:!1})}else le()(e)}}function xt(e){var t;h()||K(j)===void 0||(k=!0,he()({id:a,json:K(j),rootPath:e,onSort:(t=Wa(function*(t){var{operations:n}=t;r(`onSort`,e,n),Ft(n,(t,n)=>({state:Wm(t,n,e),selection:vh(e)}))}),function(e){return t.apply(this,arguments)}),onClose:()=>{k=!1,setTimeout(rn)}}))}function St(){K(P)&&xt(ph(K(j),K(P)))}function wt(){xt([])}function Tt(e){if(K(j)!==void 0){var{id:t,onTransform:n,onClose:i}=e,a=e.rootPath||[];k=!0,ge()({id:t||o,json:K(j),rootPath:a,onTransform:e=>{n?n({operations:e,json:K(j),transformedJson:gn(K(j),e)}):(r(`onTransform`,a,e),Ft(e,(e,t)=>({state:Wm(e,t,a),selection:vh(a)})))},onClose:()=>{k=!1,setTimeout(rn),i&&i()}})}}function Et(){K(P)&&Tt({rootPath:ph(K(j),K(P))})}function Ot(){Tt({rootPath:[]})}function kt(e){return At.apply(this,arguments)}function At(){return At=Wa(function*(e){var{scrollToWhenVisible:t=!0,element:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};V(N,Em(K(j),K(N),e,Jm));var i=n??jt(e);if(r(`scrollTo`,{path:e,elem:i,refContents:K(u)}),!i||!K(u))return Promise.resolve();var a=K(u).getBoundingClientRect(),o=i.getBoundingClientRect();if(!t&&o.bottom>a.top&&o.top<a.bottom)return Promise.resolve();var s=-a.height/4;return new Promise(e=>{m(i,{container:K(u),offset:s,duration:300,callback:()=>e()})})}),At.apply(this,arguments)}function jt(e){return Hs(),K(u)?.querySelector(`div[data-path="${$f(e)}"]`)??void 0}function Mt(e){return Hs(),K(u)?.querySelector(`span[data-search-result-index="${e}"]`)??void 0}function Nt(e){var t=jt(e);if(t&&K(u)){var n=K(u).getBoundingClientRect(),r=t.getBoundingClientRect(),i=zd(I(K(j),e))?20:r.height;r.top<n.top+20?m(t,{container:K(u),offset:-20,duration:0}):r.top+i>n.bottom-20&&m(t,{container:K(u),offset:-(n.height-i-20),duration:0})}}function Pt(e,t){if(e.json!==void 0||e?.text!==void 0){if(K(M)!==void 0){var n,r={text:K(M),json:void 0};(n=oe())==null||n(r,e,{contentErrors:Be(),patchResult:t})}else if(K(j)!==void 0){var i,a={text:void 0,json:K(j)};(i=oe())==null||i(a,e,{contentErrors:Be(),patchResult:t})}}}function Ft(e,t){r(`handlePatch`,e,t);var n={json:K(j),text:K(M)},i=Je(e,t);return Pt(n,i),i}function It(e,t){var n={json:K(j),text:K(M)},r={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ie)},i=Em(K(j),Sm(e,K(N)),[],Gm),a=typeof t==`function`?t(e,i,K(P)):void 0;V(j,a?.json===void 0?e:a.json),V(N,a?.state===void 0?i:a.state),V(P,a?.selection===void 0?K(P):a.selection),V(M,void 0),V(Ie,!1),ye=void 0,Ke(K(j)),qe(r),Pt(n,void 0)}function Lt(e,t){r(`handleChangeText`);var n={json:K(j),text:K(M)},i={documentState:K(N),selection:K(P),json:K(j),text:K(M),textIsRepaired:K(Ie)};try{V(j,ee()(e)),V(N,Em(K(j),Sm(K(j),K(N)),[],Gm)),V(M,void 0),V(Ie,!1),ye=void 0}catch(t){try{V(j,ee()(br(e))),V(N,Em(K(j),Sm(K(j),K(N)),[],Gm)),V(M,e),V(Ie,!0),ye=void 0}catch{V(j,void 0),V(N,_m({json:K(j),expand:Gm})),V(M,e),V(Ie,!1),ye=K(M)===``?void 0:uf(K(M),t.message||String(t))}}if(typeof t==`function`){var a=t(K(j),K(N),K(P));V(j,a?.json===void 0?K(j):a.json),V(N,a?.state===void 0?K(N):a.state),V(P,a?.selection===void 0?K(P):a.selection)}Ke(K(j)),qe(i),Pt(n,void 0)}function Rt(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];r(`handleExpand`,{path:e,expanded:t,recursive:n}),t?Pe(e,n?qm:Km):Fe(e,n),rn()}function zt(){Rt([],!0,!0)}function Bt(){Rt([],!1,!0)}function Vt(e){r(`openFind`,{findAndReplace:e}),V(De,!1),V(Oe,!1),Hs(),V(De,!0),V(Oe,e)}function Ht(e,t){r(`handleExpandSection`,e,t),V(N,function(e,t,n,r){return Pm(e,t,n,(e,t)=>{if(!um(t))return t;var n=Jp(t.visibleSections.concat(r));return L(L({},t),{},{visibleSections:n})})}(K(j),K(N),e,t))}function Wt(e){r(`pasted json as text`,e),V(we,e)}function Gt(e){r(`pasted multiline text`,{pastedText:e}),V(Te,e)}function Kt(e){var{anchor:t,left:n,top:r,width:i,height:a,offsetTop:o,offsetLeft:c,showTip:u}=e,d=function(e){var{json:t,documentState:n,selection:r,readOnly:i,onEditKey:a,onEditValue:o,onToggleEnforceString:s,onCut:c,onCopy:l,onPaste:u,onRemove:d,onDuplicate:f,onExtract:p,onInsertBefore:m,onInsert:h,onConvert:g,onInsertAfter:_,onSort:v,onTransform:y}=e,b=t!==void 0,x=!!r,S=!!r&&Dt(Mh(r)),C=r?I(t,Mh(r)):void 0,w=Array.isArray(C)?`Edit array`:Rd(C)?`Edit object`:`Edit value`,T=b&&($m(r)||Zm(r)||Qm(r)),E=r&&!S?I(t,Ct(Mh(r))):void 0,ee=!i&&b&&fh(r)&&!S&&!Array.isArray(E),te=!i&&b&&r!==void 0&&fh(r),ne=te&&!zd(C),re=!i&&T,ie=T,ae=!i&&x,oe=!i&&b&&T&&!S,se=!i&&b&&r!==void 0&&($m(r)||Qm(r))&&!S,D=T,ce=D?`Convert to:`:`Insert:`,le=!i&&(Xm(r)&&Array.isArray(C)||Ym(r)&&Array.isArray(E)),O=!i&&(D?Eh(r)&&!Rd(C):x),ue=!i&&(D?Eh(r)&&!Array.isArray(C):x),de=!i&&(D?Eh(r)&&zd(C):x),fe=r!==void 0&&Rm(t,n,Mh(r));function pe(e){T?e!==`structure`&&g(e):h(e)}return[{type:`row`,items:[{type:`button`,onClick:()=>a(),icon:Ii,text:`Edit key`,title:`Edit the key (Double-click on the key)`,disabled:!ee},{type:`dropdown-button`,main:{type:`button`,onClick:()=>o(),icon:Ii,text:w,title:`Edit the value (Double-click on the value)`,disabled:!te},width:`11em`,items:[{type:`button`,icon:Ii,text:w,title:`Edit the value (Double-click on the value)`,onClick:()=>o(),disabled:!te},{type:`button`,icon:fe?wi:Xi,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!ne}]}]},{type:`separator`},{type:`row`,items:[{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:Vi,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!re},width:`10em`,items:[{type:`button`,icon:Vi,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:!re},{type:`button`,icon:Vi,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:!re}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:Ki,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!ie},width:`12em`,items:[{type:`button`,icon:Ki,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!0),disabled:!ie},{type:`button`,icon:Ki,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!ie}]},{type:`button`,onClick:()=>u(),icon:di,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:!ae}]},{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`button`,onClick:()=>f(),icon:Ci,text:`Duplicate`,title:`Duplicate selected contents (Ctrl+D)`,disabled:!oe},{type:`button`,onClick:()=>p(),icon:fi,text:`Extract`,title:`Extract selected contents`,disabled:!se},{type:`button`,onClick:()=>v(),icon:zi,text:`Sort`,title:`Sort array or object contents`,disabled:i||!T},{type:`button`,onClick:()=>y(),icon:pi,text:`Transform`,title:`Transform array or object contents (filter, sort, project)`,disabled:i||!T},{type:`button`,onClick:()=>d(),icon:ji,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!T}]},{type:`column`,items:[{type:`label`,text:ce},{type:`button`,onClick:()=>pe(`structure`),icon:D?Hi:Gi,text:`Structure`,title:ce+` structure like the first item in the array`,disabled:!le},{type:`button`,onClick:()=>pe(`object`),icon:D?Hi:Gi,text:`Object`,title:ce+` object`,disabled:!O},{type:`button`,onClick:()=>pe(`array`),icon:D?Hi:Gi,text:`Array`,title:ce+` array`,disabled:!ue},{type:`button`,onClick:()=>pe(`value`),icon:D?Hi:Gi,text:`Value`,title:ce+` value`,disabled:!de}]}]},{type:`separator`},{type:`row`,items:[{type:`button`,onClick:()=>m(),icon:Ti,text:`Insert before`,title:`Select area before current entry to insert or paste contents`,disabled:i||!T||S},{type:`button`,onClick:()=>_(),icon:mi,text:`Insert after`,title:`Select area after current entry to insert or paste contents`,disabled:i||!T||S}]}]}({json:K(j),documentState:K(N),selection:K(P),readOnly:h(),onEditKey:Ye,onEditValue:Xe,onToggleEnforceString:Ze,onCut:$e,onCopy:tt,onPaste:it,onRemove:lt,onDuplicate:ut,onExtract:dt,onInsertBefore:ht,onInsert:pt,onInsertAfter:gt,onConvert:mt,onSort:St,onTransform:Et}),f=de()(d)??d;if(!1!==f){var p={left:n,top:r,offsetTop:o,offsetLeft:c,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{k=!1,rn()}};k=!0;var m=s(lx,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:f,onRequestClose:()=>l(m)},p)}}function qt(e){if(!wh(K(P)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==K(d))Kt({left:e.clientX,top:e.clientY,width:Gp,height:Wp,showTip:!1});else{var t=K(u)?.querySelector(`.jse-context-menu-pointer.jse-selected`);if(t)Kt({anchor:t,offsetTop:2,width:Gp,height:Wp,showTip:!1});else{var n=K(u)?.getBoundingClientRect();n&&Kt({top:n.top+2,left:n.left+2,width:Gp,height:Wp,showTip:!1})}}}function Jt(e){Kt({anchor:Zf(e.target,`BUTTON`),offsetTop:0,width:Gp,height:Wp,showTip:!0})}function Yt(){return Xt.apply(this,arguments)}function Xt(){return(Xt=Wa(function*(){if(r(`apply pasted json`,K(we)),K(we)){var{onPasteAsJson:e}=K(we);V(we,void 0),e(),setTimeout(rn)}})).apply(this,arguments)}function Zt(){return Qt.apply(this,arguments)}function Qt(){return(Qt=Wa(function*(){r(`apply pasted multiline text`,K(Te)),K(Te)&&(ot(JSON.stringify(K(Te))),setTimeout(rn))})).apply(this,arguments)}function $t(){r(`clear pasted json`),V(we,void 0),rn()}function en(){r(`clear pasted multiline text`),V(Te,void 0),rn()}function tn(){se()(Tf.text)}function nn(e){V(P,e),rn(),kt(Mh(e))}function rn(){r(`focus`),K(d)&&(K(d).focus(),K(d).select())}function an(e){return function(e,t,n){var r=Ct(n),i=[c(n)],a=I(e,r),o=a?Hm(a,t,i):void 0;return o?vh(r.concat(o)):xh(n)}(K(j),K(N),e)}function on(e){K(n)&&K(n).onDrag(e)}function sn(){K(n)&&K(n).onDragEnd()}var cn=B(void 0,!0);W(()=>K(P),()=>{var e=K(P);v(e,y())||(r(`onSelect`,e),D()(e))}),W(()=>(J(w()),J(T())),()=>{V(Ce,Nf({escapeControlCharacters:w(),escapeUnicodeCharacters:T()}))}),W(()=>K(De),()=>{(function(e){K(u)&&e&&K(u).scrollTop===0&&(Fc(u,K(u).style.overflowAnchor=`none`),Fc(u,K(u).scrollTop+=Kp),setTimeout(()=>{K(u)&&Fc(u,K(u).style.overflowAnchor=``)}))})(K(De))}),W(()=>J(g()),()=>{We(g())}),W(()=>J(y()),()=>{(function(e){v(K(P),e)||(r(`applyExternalSelection`,{selection:K(P),externalSelection:e}),th(e)&&V(P,e))})(y())}),W(()=>(K(j),J(te()),J(E()),J(ne())),()=>{ze(K(j),te(),E(),ne())}),W(()=>(K(u),Ev),()=>{V(n,K(u)?Ev(K(u)):void 0)}),W(()=>(J(h()),J(x()),J(E()),K(Ce),J(O()),J(fe())),()=>{V(cn,{mode:Tf.tree,readOnly:h(),truncateTextSize:x(),parser:E(),normalization:K(Ce),getJson:Ve,getDocumentState:He,getSelection:Ue,findElement:jt,findNextInside:an,focus:rn,onPatch:Ft,onInsert:ft,onExpand:Rt,onSelect:xe,onFind:Vt,onExpandSection:Ht,onPasteJson:Wt,onRenderValue:O(),onContextMenu:Kt,onClassName:fe()||(()=>{}),onDrag:on,onDragEnd:sn})}),W(()=>K(cn),()=>{r(`context changed`,K(cn))}),il();var ln={expand:Pe,collapse:Fe,validate:Be,getJson:Ve,patch:Je,acceptAutoRepair:Qe,openTransformModal:Tt,scrollTo:kt,findElement:jt,findSearchResult:Mt,focus:rn};Sd(!0);var un=vx();Y(`mousedown`,Ec,function(e){!qf(e.target,e=>e===K(f))&&wh(K(P))&&(r(`click outside the editor, exit edit mode`),V(P,hh(K(P))),p&&K(d)&&(K(d).focus(),K(d).blur()),r(`blur (outside editor)`),K(d)&&K(d).blur())});var fn,mn=Kc(un),hn=H(mn),_n=e=>{(function(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=$(t,`json`,9),o=$(t,`selection`,9),s=$(t,`readOnly`,9),c=$(t,`showSearch`,13,!1),l=$(t,`history`,9),u=$(t,`onExpandAll`,9),d=$(t,`onCollapseAll`,9),f=$(t,`onUndo`,9),p=$(t,`onRedo`,9),m=$(t,`onSort`,9),h=$(t,`onTransform`,9),g=$(t,`onContextMenu`,9),_=$(t,`onCopy`,9),v=$(t,`onRenderMenu`,9);function y(){c(!c())}var b=B(void 0,!0),x=B(void 0,!0),S=B(void 0,!0),C=B(void 0,!0);W(()=>J(a()),()=>{V(n,a()!==void 0)}),W(()=>(K(n),J(o()),Qm),()=>{V(r,K(n)&&($m(o())||Zm(o())||Qm(o())))}),W(()=>(J(u()),J(a())),()=>{V(b,{type:`button`,icon:Zy,title:`Expand all`,className:`jse-expand-all`,onClick:u(),disabled:!zd(a())})}),W(()=>(J(d()),J(a())),()=>{V(x,{type:`button`,icon:Qy,title:`Collapse all`,className:`jse-collapse-all`,onClick:d(),disabled:!zd(a())})}),W(()=>J(a()),()=>{V(S,{type:`button`,icon:gi,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:y,disabled:a()===void 0})}),W(()=>(J(s()),K(b),K(x),J(m()),J(a()),J(h()),K(S),J(g()),J(f()),J(l()),J(p()),J(_()),K(r)),()=>{V(C,s()?[K(b),K(x),{type:`separator`},{type:`button`,icon:Ki,title:`Copy (Ctrl+C)`,className:`jse-copy`,onClick:_(),disabled:!K(r)},{type:`separator`},K(S),{type:`space`}]:[K(b),K(x),{type:`separator`},{type:`button`,icon:zi,title:`Sort`,className:`jse-sort`,onClick:m(),disabled:s()||a()===void 0},{type:`button`,icon:pi,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:h(),disabled:s()||a()===void 0},K(S),{type:`button`,icon:xi,title:Rp,className:`jse-contextmenu`,onClick:g()},{type:`separator`},{type:`button`,icon:Yi,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:f(),disabled:!l().canUndo},{type:`button`,icon:qi,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:p(),disabled:!l().canRedo},{type:`space`}])}),W(()=>(J(v()),K(C)),()=>{V(i,v()(K(C))||K(C))}),il(),Sd(!0),ny(e,{get items(){return K(i)}}),Zo()})(e,{get json(){return K(j)},get selection(){return K(P)},get readOnly(){return h()},get history(){return b()},onExpandAll:zt,onCollapseAll:Bt,onUndo:yt,onRedo:bt,onSort:wt,onTransform:Ot,onContextMenu:Jt,onCopy:tt,get onRenderMenu(){return ue()},get showSearch(){return K(De)},set showSearch(e){V(De,e)},$$legacy:!0})};Q(hn,e=>{S()&&e(_n)});var vn=U(hn,2),yn=e=>{yb(e,{get json(){return K(j)},get selection(){return K(P)},onSelect:nn,get onError(){return ae()},get pathParser(){return re()}})};Q(vn,e=>{C()&&e(yn)});var bn=U(vn,2),xn=e=>{var t=gx(),n=Kc(t),r=H(n);r.readOnly=!0,yd(r,e=>V(d,e),()=>K(d));var i=U(n,2),a=e=>{var t=ou(),n=Kc(t),r=e=>{(function(e,t){function n(e){e.stopPropagation(),t.onCreateObject()}function r(e){e.stopPropagation(),t.onCreateArray()}Xo(t,!0);var i=nb(),a=U(H(U(H(i),2)),2),o=e=>{var t=tb(),i=U(Kc(t),2);cd(i,`title`,`Create an empty JSON object (press '{')`);var a=U(i,2);cd(a,`title`,`Create an empty JSON array (press '[')`),Ql(`click`,i,n),Ql(`click`,a,r),Z(e,t)};Q(a,e=>{t.readOnly||e(o)}),Ql(`click`,i,()=>t.onClick()),Z(e,i),Zo()})(e,{get readOnly(){return h()},onCreateObject:()=>{rn(),_t(`{`)},onCreateArray:()=>{rn(),_t(`[`)},onClick:()=>{rn()}})},i=e=>{var t=px(),n=Kc(t),r=z(()=>h()?[]:[{icon:Ei,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:tn}]);zv(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return K(r)}}),Jb(U(n,2),{get text(){return K(M)},get json(){return K(j)},get indentation(){return ie()},get parser(){return E()}}),Z(e,t)};Q(n,e=>{K(M)===``||K(M)===void 0?e(r):e(i,-1)}),Z(e,t)},o=e=>{var t=hx(),n=Kc(t);Cb(H(n),{get json(){return K(j)},get documentState(){return K(N)},get parser(){return E()},get showSearch(){return K(De)},get showReplace(){return K(Oe)},get readOnly(){return h()},columns:void 0,onSearch:ke,onFocus:Ae,onPatch:Ft,onClose:Me});var r=U(n,2);cd(r,`data-jsoneditor-scrollable-contents`,!0);var i=H(r),a=e=>{Z(e,mx())};Q(i,e=>{K(De)&&e(a)}),Xy(U(i,2),{get value(){return K(j)},pointer:``,get state(){return K(N)},get validationErrors(){return K(Le)},get searchResults(){return K(Ee)},get selection(){return K(P)},get context(){return K(cn)},get onDragSelectionStart(){return ct}}),yd(r,e=>V(u,e),()=>K(u));var o=U(r,2),s=e=>{var t=z(()=>(K(we),q(()=>`You pasted a JSON ${Array.isArray(K(we).contents)?`array`:`object`} as text`))),n=z(()=>[{icon:Ai,text:`Paste as JSON instead`,title:`Replace the value with the pasted JSON`,onMouseDown:Yt},{text:`Leave as is`,title:`Keep the JSON embedded in the value`,onClick:$t}]);zv(e,{type:`info`,get message(){return K(t)},get actions(){return K(n)}})};Q(o,e=>{K(we)&&e(s)});var c=U(o,2),l=e=>{var t=z(()=>[{icon:Ai,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:Zt},{text:`Leave as is`,title:`Keep the pasted array`,onClick:en}]);zv(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return K(t)}})};Q(c,e=>{K(Te)&&e(l)});var d=U(c,2),f=e=>{var t=z(()=>h()?[]:[{icon:Mi,text:`Ok`,title:`Accept the repaired document`,onClick:Qe},{icon:Ei,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:tn}]);zv(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return K(t)},onClose:rn})};Q(d,e=>{K(Ie)&&e(f)}),Kv(U(d,2),{get validationErrors(){return K(F)},selectError:Ne}),Z(e,t)};Q(i,e=>{K(j)===void 0?e(a):e(o,-1)}),Y(`paste`,r,rt),Z(e,t)},Sn=e=>{Z(e,_x())};Q(bn,e=>{i?e(Sn,-1):e(xn)}),yd(mn,e=>V(f,e),()=>K(f));var Cn=U(mn,2),wn=e=>{Zv(e,{onClose:()=>V(ve,!1)})};Q(Cn,e=>{K(ve)&&e(wn)});var Tn=U(Cn,2),En=e=>{oy(e,kd(()=>K(A),{onClose:()=>{var e;(e=K(A))==null||e.onClose(),V(A,void 0)}}))};return Q(Tn,e=>{K(A)&&e(En)}),G(()=>fn=Ju(mn,1,`jse-tree-mode svelte-10mlrw4`,null,fn,{"no-main-menu":!S()})),Y(`keydown`,mn,function(e){var t=rp(e),n=e.shiftKey;if(r(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),$e(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),$e(!1)),t===`Ctrl+C`&&(e.preventDefault(),tt(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),tt(!1)),t===`Ctrl+D`&&(e.preventDefault(),ut()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),lt()),t===`Insert`&&(e.preventDefault(),ft(`structure`)),t===`Ctrl+A`&&(e.preventDefault(),V(P,vh([]))),t===`Ctrl+Q`&&qt(e),t===`ArrowUp`||t===`Shift+ArrowUp`){e.preventDefault();var i=K(P)?sh(K(j),K(N),K(P),n)||K(P):lh(K(j),K(N));V(P,i),Nt(Mh(i))}if(t===`ArrowDown`||t===`Shift+ArrowDown`){e.preventDefault();var a=K(P)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?Mh(n):oh(e,n),a=zd(I(e,i))?Dm(e,t,i,!0):t,o=Hm(e,t,i),s=Hm(e,a,i);if(r)return Xm(n)?o===void 0?void 0:Sh(o,o):Ym(n)?s===void 0?void 0:Sh(s,s):s===void 0?void 0:Sh(Nh(n),s);if(Ym(n))return s===void 0?void 0:vh(s);if(Xm(n)||Qm(n))return o===void 0?void 0:vh(o);if(Zm(n)){if(o===void 0||o.length===0)return;var c=I(e,Ct(o));return Array.isArray(c)?vh(o):gh(o)}return $m(n)?s===void 0?o===void 0?void 0:vh(o):vh(s):void 0}}(K(j),K(N),K(P),n)||K(P):lh(K(j),K(N));V(P,a),Nt(Mh(a))}if(t===`ArrowLeft`||t===`Shift+ArrowLeft`){e.preventDefault();var o=K(P)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(n){var{caret:a,previous:o}=ch(e,t,n,i);if(r)return $m(n)?void 0:Sh(n.path,n.path);if(a&&o)return Dh(o);var s=I(e,Ct(Mh(n)));return Qm(n)&&Array.isArray(s)?Sh(n.path,n.path):$m(n)&&!Array.isArray(s)?gh(n.focusPath):void 0}}(K(j),K(N),K(P),n,!h())||K(P):lh(K(j),K(N));V(P,o),Nt(Mh(o))}if(t===`ArrowRight`||t===`Shift+ArrowRight`){e.preventDefault();var s=K(P)&&K(j)!==void 0?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(n){var{caret:a,next:o}=ch(e,t,n,i);return r?$m(n)?void 0:Sh(n.path,n.path):a&&o?Dh(o):$m(n)?vh(n.focusPath):void 0}}(K(j),K(N),K(P),n,!h())||K(P):lh(K(j),K(N));V(P,s),Nt(Mh(s))}if(t===`Enter`&&K(P)){if(eh(K(P))){var c=K(P).focusPath,l=I(K(j),Ct(c));Array.isArray(l)&&(e.preventDefault(),V(P,vh(c)))}Zm(K(P))&&(e.preventDefault(),V(P,L(L({},K(P)),{},{edit:!0}))),Qm(K(P))&&(e.preventDefault(),zd(I(K(j),K(P).path))?Rt(K(P).path,!0):V(P,L(L({},K(P)),{},{edit:!0})))}if(t.replace(/^Shift\+/,``).length===1&&K(P))return e.preventDefault(),void _t(e.key);if(t===`Enter`&&(Ym(K(P))||Xm(K(P))))return e.preventDefault(),void _t(``);if(t===`Ctrl+Enter`&&Qm(K(P))){var u=I(K(j),K(P).path);qd(u)&&window.open(String(u),`_blank`)}t===`Escape`&&K(P)&&(e.preventDefault(),V(P,void 0)),t===`Ctrl+F`&&(e.preventDefault(),Vt(!1)),t===`Ctrl+H`&&(e.preventDefault(),Vt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),yt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),bt())}),Y(`mousedown`,mn,function(e){r(`handleMouseDown`,e);var t=e.target;Gf(t,`BUTTON`)||t.isContentEditable||(rn(),K(P)||K(j)!==void 0||K(M)!==``&&K(M)!==void 0||(r(`createDefaultSelection`),V(P,vh([]))))}),Y(`contextmenu`,mn,qt),Z(e,un),_d(t,`expand`,Pe),_d(t,`collapse`,Fe),_d(t,`validate`,Be),_d(t,`getJson`,Ve),_d(t,`patch`,Je),_d(t,`acceptAutoRepair`,Qe),_d(t,`openTransformModal`,Tt),_d(t,`scrollTo`,kt),_d(t,`findElement`,jt),_d(t,`findSearchResult`,Mt),_d(t,`focus`,rn),Zo(ln)}function bx(e){return typeof(t=e)!=`object`||t===null?e:new Proxy(e,{get:(e,t,n)=>bx(Reflect.get(e,t,n)),set:()=>!1,deleteProperty:()=>!1});var t}var xx=Ad(`jsoneditor:History`);function Sx(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,n=[],r=0;function i(){return r<n.length}function a(){return r>0}function o(){return{canUndo:i(),canRedo:a(),items:()=>n.slice().reverse(),add:c,undo:u,redo:d,clear:l}}function s(){e.onChange&&e.onChange(o())}function c(e){xx(`add`,e),n=[e].concat(n.slice(r)).slice(0,t),r=0,s()}function l(){xx(`clear`),n=[],r=0,s()}function u(){if(i()){var e=n[r];return r+=1,xx(`undo`,e),s(),e}}function d(){if(a())return xx(`redo`,n[--r]),s(),n[r]}return{get:o}}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm),
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
    flex: unset;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var Cx=wd(()=>Dg),wx=wd(()=>Og),Tx=X(`<div class="query-error svelte-lta8xm"> </div>`),Ex=X(`<!> <!>`,1),Dx=X(`<div class="jse-preview jse-error svelte-lta8xm"> </div>`),Ox=X(`<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>`,1),kx=X(`<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>`);function Ax(e,t){var n;Xo(t,!1);var r=Ad(`jsoneditor:TransformModal`),i=$(t,`id`,25,()=>`transform-modal-`+Pd()),a=$(t,`json`,9),o=$(t,`rootPath`,25,()=>[]),s=$(t,`indentation`,9),c=$(t,`truncateTextSize`,9),l=$(t,`escapeControlCharacters`,9),u=$(t,`escapeUnicodeCharacters`,9),d=$(t,`parser`,9),f=$(t,`parseMemoizeOne`,9),p=$(t,`validationParser`,9),m=$(t,`pathParser`,9),h=$(t,`queryLanguages`,9),g=$(t,`queryLanguageId`,13),_=$(t,`onChangeQueryLanguage`,9),v=$(t,`onRenderValue`,9),y=$(t,`onRenderMenu`,9),x=$(t,`onRenderContextMenu`,9),S=$(t,`onClassName`,9),C=$(t,`onTransform`,9),w=$(t,`onClose`,9),T=B(void 0,!0),E=B(Sx({onChange:e=>V(E,e)}).get(),!0),ee=B(void 0,!0),te=B(void 0,!0),ne=B(!1,!0),re=`${i()}:${pn(o())}`,ie=Cx()[re]??{},ae=B(!1!==wx().showWizard,!0),oe=B(!1!==wx().showOriginal,!0),se=B(ie.queryOptions??{},!0),D=B(g()===ie.queryLanguageId&&ie.query?ie.query:``,!0),ce=B((n=ie.isManual)!=null&&n,!0),le=B(void 0,!0),O=B(void 0,!0),ue=B({text:``},!0);function de(e){return h().find(t=>t.id===e)??h()[0]}function fe(e){try{V(se,e),V(D,de(g()).createQuery(K(ee),e)),V(le,void 0),V(ce,!1),r(`updateQueryByWizard`,{queryOptions:K(se),query:K(D),isManual:K(ce)})}catch(e){V(le,String(e))}}function pe(e){V(D,e.target.value),V(ce,!0),r(`handleChangeQuery`,{query:K(D),isManual:K(ce)})}K(ce)||fe(K(se)),Cu(()=>{var e;(e=K(T))==null||e.focus()});var me=b(function(e,t){if(e===void 0)return V(ue,{text:``}),void V(O,`Error: No JSON`);if(t.trim()!==``)try{r(`previewTransform`,{query:t}),V(ue,{json:de(g()).executeQuery(e,t,d())}),V(O,void 0)}catch(e){V(ue,{text:``}),V(O,String(e))}else V(ue,{json:e})},300);function he(){if(K(ee)===void 0)return V(ue,{text:``}),void V(O,`Error: No JSON`);try{r(`handleTransform`,{query:K(D)});var e=de(g()).executeQuery(K(ee),K(D),d());C()([{op:`replace`,path:pn(o()),value:e}]),w()()}catch(e){console.error(e),V(ue,{text:``}),V(O,String(e))}}function ge(){V(ae,!K(ae)),wx(wx().showWizard=K(ae))}function _e(){V(oe,!K(oe)),wx(wx().showOriginal=K(oe))}function k(e){e.focus()}function ve(e){r(`handleChangeQueryLanguage`,e),g(e),_()(e),fe(K(se))}function A(){K(ne)?V(ne,!K(ne)):w()()}W(()=>(J(a()),J(o())),()=>{V(ee,bx(I(a(),o())))}),W(()=>K(ee),()=>{V(te,K(ee)?{json:K(ee)}:{text:``})}),W(()=>(K(ee),K(D)),()=>{me(K(ee),K(D))}),W(()=>(Cx(),K(se),K(D),J(g()),K(ce)),()=>{Cx(Cx()[re]={queryOptions:K(se),query:K(D),queryLanguageId:g(),isManual:K(ce)}),r(`store state in memory`,re,Cx()[re])}),il(),Sd(!0),Yv(e,{get onClose(){return w()},className:`jse-transform-modal`,get fullscreen(){return K(ne)},children:(e,t)=>{var n=kx();dp(H(n),{children:(e,t)=>{var n=Ox(),r=Kc(n);(function(e,t){Xo(t,!1);var n,r=$(t,`queryLanguages`,9),i=$(t,`queryLanguageId`,9),a=$(t,`fullscreen`,13),o=$(t,`onChangeQueryLanguage`,9),s=$(t,`onClose`,9),c=B(void 0,!0),{openAbsolutePopup:l,closeAbsolutePopup:u}=Yo(`absolute-popup`);function d(){n=l(bv,{queryLanguages:r(),queryLanguageId:i(),onChangeQueryLanguage:e=>{u(n),o()(e)}},{offsetTop:-2,offsetLeft:0,anchor:K(c),closeOnOuterClick:!0})}Sd(!0),Cv(e,{title:`Transform`,fullScreenButton:!0,get onClose(){return s()},get fullscreen(){return a()},set fullscreen(e){a(e)},$$slots:{actions:(e,t)=>{var n,i=wv();Cp(H(i),{get data(){return Oi}}),yd(i,e=>V(c,e),()=>K(c)),G(()=>n=Ju(i,1,`jse-config svelte-5gkegr`,null,n,{hide:r().length<=1})),Y(`click`,i,d),Z(e,i)}},$$legacy:!0}),Zo()})(r,{get queryLanguages(){return h()},get queryLanguageId(){return g()},onChangeQueryLanguage:ve,get onClose(){return w()},get fullscreen(){return K(ne)},set fullscreen(e){V(ne,e)},$$legacy:!0});var i=H(U(r,2)),a=H(i),_=U(H(a),2);Ru(_,()=>(J(g()),q(()=>de(g()).description)),!0);var b=U(_,4),C=U(b,2),re=H(H(C)),ie=H(re),ce=z(()=>K(ae)?Ji:hi);Cp(ie,{get data(){return K(ce)}});var me=U(C,2),A=e=>{var t=ou(),n=Kc(t),r=e=>{var t=Ex(),n=Kc(t);_v(n,{get queryOptions(){return K(se)},get json(){return K(ee)},onChange:fe});var r=U(n,2),i=e=>{var t=Tx(),n=H(t);G(()=>du(n,K(le))),Z(e,t)};Q(r,e=>{K(le)&&e(i)}),Z(e,t)},i=Sc(()=>(K(ee),q(()=>Array.isArray(K(ee))))),a=e=>{Z(e,au(`(Only available for arrays, not for objects)`))};Q(n,e=>{K(i)?e(r):e(a,-1)}),Z(e,t)};Q(me,e=>{K(ae)&&e(A)});var j=U(me,4);yd(j,e=>V(T,e),()=>K(T));var M,ye,be=U(a,2),N=H(be),P=H(N),xe=H(H(P)),Se=H(xe),Ce=z(()=>K(oe)?Ji:hi);Cp(Se,{get data(){return K(Ce)}});var we=U(P,2),Te=e=>{yx(e,{get externalContent(){return K(te)},externalSelection:void 0,get history(){return K(E)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return x()},onError:q(()=>console.error),get onChange(){return ct},get onChangeMode(){return ct},get onSelect(){return ct},get onUndo(){return ct},get onRedo(){return ct},get onFocus(){return ct},get onBlur(){return ct},get onSortModal(){return ct},get onTransformModal(){return ct},get onJSONEditorModal(){return ct},get onClassName(){return S()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})};Q(we,e=>{K(oe)&&e(Te)});var Ee=U(H(U(N,2)),2),De=e=>{yx(e,{get externalContent(){return K(ue)},externalSelection:void 0,get history(){return K(E)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return x()},onError:q(()=>console.error),get onChange(){return ct},get onChangeMode(){return ct},get onSelect(){return ct},get onUndo(){return ct},get onRedo(){return ct},get onFocus(){return ct},get onBlur(){return ct},get onSortModal(){return ct},get onTransformModal(){return ct},get onJSONEditorModal(){return ct},get onClassName(){return S()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})},Oe=e=>{var t=Dx(),n=H(t);G(()=>du(n,K(O))),Z(e,t)};Q(Ee,e=>{K(O)?e(Oe,-1):e(De)});var ke=H(U(i,2));rl(()=>Y(`click`,ke,he)),Vu(ke,e=>k?.(e)),G(e=>{sd(b,e),sd(j,K(D)),M=Ju(be,1,`jse-data-contents svelte-lta8xm`,null,M,{"jse-hide-original-data":!K(oe)}),ye=Ju(N,1,`jse-original-data svelte-lta8xm`,null,ye,{"jse-hide":!K(oe)}),ke.disabled=!!K(O)},[()=>(J(Dt),J(o()),J(Cg),q(()=>Dt(o())?`(document root)`:Cg(o())))]),Y(`click`,re,ge),Y(`input`,j,pe),Y(`click`,xe,_e),Z(e,n)},$$slots:{default:!0}}),Vu(n,(e,t)=>qv?.(e,t),()=>A),Z(e,n)},$$slots:{default:!0}}),Zo()}function jx(){}var Mx=0,Nx=class{constructor(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=Mx++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=Ix.match(e)),t=>{var n=e(t);return n===void 0?null:[this,n]}}};Nx.closedBy=new Nx({deserialize:e=>e.split(` `)}),Nx.openedBy=new Nx({deserialize:e=>e.split(` `)}),Nx.group=new Nx({deserialize:e=>e.split(` `)}),Nx.isolate=new Nx({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),Nx.contextHash=new Nx({perNode:!0}),Nx.lookAhead=new Nx({perNode:!0}),Nx.mounted=new Nx({perNode:!0});var Px,Fx=Object.create(null),Ix=class e{constructor(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){var n=t.props&&t.props.length?Object.create(null):Fx,r=!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(i)),a){if(a[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[a[0].id]=a[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;var t=this.prop(Nx.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){var t=Object.create(null);for(var n in e)for(var r of n.split(` `))t[r]=e[n];return e=>{for(var n=e.prop(Nx.group),r=-1;r<(n?n.length:0);r++){var i=t[r<0?e.name:n[r]];if(i)return i}}}};Ix.none=new Ix(``,Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`}(Px||={}),new Nx({perNode:!0}),op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var Lx=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),Rx=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),zx=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),Bx=X(`<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>`),Vx=rt.define([{tag:M.propertyName,color:`var(--internal-key-color)`},{tag:M.number,color:`var(--internal-value-color-number)`},{tag:M.bool,color:`var(--internal-value-color-boolean)`},{tag:M.string,color:`var(--internal-value-color-string)`},{tag:M.keyword,color:`var(--internal-value-color-null)`}]),Hx=Je(Vx),Ux=Vx.style;Vx.style=e=>Ux(e||[]);var Wx=[Be.fromClass(class{constructor(e){this.view=e,this.indentUnit=k(e.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes(`Chrome`),this.generate(e.state)}update(e){var t=k(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new it;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:e=>{var n=e.contentDOM.querySelector(`.cm-line`);n&&(this.initialPaddingLeft=window.getComputedStyle(n).getPropertyValue(`padding-left`),this.addStyleToBuilder(t,e.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,n){for(var r of this.getVisibleLines(t)){var{numColumns:i,containsTab:a}=this.numColumns(r.text,t.tabSize),o=`calc(${i+this.indentUnit}ch + ${n})`,s=this.isChrome?`calc(-${i+this.indentUnit}ch - ${+!!a}px)`:`-${i+this.indentUnit}ch`;e.add(r.from,r.from,Ge.line({attributes:{style:`padding-left: ${o}; text-indent: ${s};`}}))}}getVisibleLines(e){var t=new Set,n=null;for(var{from:r,to:i}of this.view.visibleRanges)for(var a=r;a<=i;){var o=e.doc.lineAt(a);n!==o&&(t.add(o),n=o),a=o.to+1}return t}numColumns(e,t){var n=0,r=!1;e:for(var i=0;i<e.length;i++)switch(e[i]){case` `:n+=1;continue e;case`	`:n+=t-n%t,r=!0;continue e;case`\r`:continue e;default:break e}return{numColumns:n,containsTab:r}}},{decorations:e=>e.decorations})];op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name='close'] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var Gx=X(`<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>`),Kx=X(`<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>`,1),qx=X(`<!> <!> <!> <!>`,1),Jx=X(`<div></div> <!> <!>`,1),Yx=X(`<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>`),Xx=X(`<div><!> <!> <!></div>`);function Zx(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`readOnly`,9),a=$(t,`mainMenuBar`,9),o=$(t,`statusBar`,9),s=$(t,`askToFormat`,9),c=$(t,`externalContent`,9),l=$(t,`externalSelection`,9),u=$(t,`history`,9),d=$(t,`indentation`,9),f=$(t,`tabSize`,9),p=$(t,`escapeUnicodeCharacters`,9),m=$(t,`maxDocumentSize`,9),h=$(t,`parser`,9),g=$(t,`validator`,9),y=$(t,`validationParser`,9),x=$(t,`onChange`,9),S=$(t,`onChangeMode`,9),C=$(t,`onSelect`,9),w=$(t,`onUndo`,9),T=$(t,`onRedo`,9),E=$(t,`onError`,9),ee=$(t,`onFocus`,9),te=$(t,`onBlur`,9),ne=$(t,`onRenderMenu`,9),re=$(t,`onSortModal`,9),ie=$(t,`onTransformModal`,9),ae=Ad(`jsoneditor:TextMode`),oe={key:`Mod-i`,run:Tt,shift:Et,preventDefault:!0},se=typeof window>`u`;ae(`isSSR:`,se);var D,ce=B(void 0,!0),le=B(void 0,!0),O=B(void 0,!0),ue=B(!1,!0),he=B(s(),!0),k=B([],!0),A=B(!1,!0),M=B(0,!0),be=B(0,!0),N=null,P=new De,Te=new De,je=new De,Be=new De,Ve=new De,Ge=c(),Ye=B(_f(Ge,d(),h()),!0),rt=ze.define(),it=null;function ct(){if(!it||it.length===0)return!1;var e=it[0].startState,t=it[it.length-1].state,n=it.map(e=>e.changes).reduce((e,t)=>e.compose(t)),r={type:`text`,undo:{changes:n.invert(e.doc).toJSON(),selection:rn(e.selection)},redo:{changes:n.toJSON(),selection:rn(t.selection)}};return ae(`add history item`,r),u().add(r),it=null,!0}var lt=B(p(),!0);Cu(Wa(function*(){if(!se)try{D=function(e){var{target:t,initialText:n,readOnly:r,indentation:i}=e;ae(`Create CodeMirror editor`,{readOnly:r,indentation:i});var a=function(e,t){return nh(e)?e.ranges.every(e=>e.anchor<t.length&&e.head<t.length):!1}(l(),n)?qt(l()):void 0;return D=new Xe({state:ot.create({doc:n,selection:a,extensions:[Pe.of([pe,oe]),P.of(Bt()),Oe(),Ie(),Ue(),et(),ve(),mt(),qe(),Qe(),ot.allowMultipleSelections.of(!0),Se(),Je(de,{fallback:!0}),me(),He(),Me(),We(),ke(),Ne(),F(),Pe.of([...$e,...Ae,...at,{key:`Mod-z`,run:Mt,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:Nt,preventDefault:!0},{key:`Ctrl-Shift-z`,run:Nt,preventDefault:!0},...ye,...Fe,...Ke]),Hx,Fa({hideFirstIndent:!0}),Xe.domEventHandlers({dblclick:zt}),Xe.updateListener.of(e=>{(V(O,e.state),e.docChanged)&&(e.transactions.some(e=>!!e.annotation(rt))||(it=[...it??[],e]),$t()),e.selectionSet&&nn()}),Ta(),tt({top:!0}),Xe.lineWrapping,Te.of(ot.readOnly.of(r)),Be.of(ot.tabSize.of(f())),je.of(Qt(i)),Ve.of(Xe.theme({},{dark:Vt()}))]}),parent:t}),a&&D.dispatch(D.state.update({selection:a.main,scrollIntoView:!0})),D}({target:K(ce),initialText:an(K(Ye),m(),K(ue))?``:K(n).escapeValue(K(Ye)),readOnly:i(),indentation:d()})}catch(e){console.error(e)}})),wu(()=>{en(),D&&(ae(`Destroy CodeMirror editor`),D.destroy()),vt()});var ut=Ut(),dt=Ut();function ft(){D&&(ae(`focus`),D.focus())}function pt(e,t){if(D)try{(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=D.state,i=r.doc.length,a=j(r,i,1/0);if(a){var o=[];if(e.length===0)o=gt(a,r,void 0,t);else{var{from:s}=df(K(n).escapeValue(K(Ye)),e);s!==void 0&&s!==0&&(o=gt(a,r,s,t))}o.length>0&&function(e){_t.apply(this,arguments)}(o)}})(e,t)}catch(e){E()(e)}}function mt(){return fe.of((e,t,n)=>{var r=j(e,e.doc.length,1/0);if(!r||r.length<n)return null;for(var i=null,a=r.resolveStack(n,1);a;a=a.next){var o=a.node;if(!(o.to<=n||o.from>n)){if(i&&o.from<t)break;var s=o.type.prop(st);if(s&&(o.to<r.length-50||r.length==e.doc.length||!ht(o))){var c=s(o,e);c&&c.from<=n&&c.from>=t&&c.to>n&&(i=c)}}}return i})}function ht(e){var t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function gt(e,t,n){var r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],i=[],a=new Set;return e.iterate({enter(e){if(n===void 0||e.from>=n){var o=xe(t,e.from,e.to);if(o){var s=`${o.from}-${o.to}`;a.has(s)||(r?(i.push({from:o.from,to:o.to}),a.add(s)):i.some(e=>e.from<=o.from&&e.to>=o.to)||(i.push({from:o.from,to:o.to}),a.add(s)))}}}}),i}function _t(){return _t=Wa(function*(e){if(e.length!==0){var t=e.length>5e3;t&&(V(A,!0),V(M,0),V(be,e.length),N=new AbortController);var n=r=>new Promise(i=>{var a;t&&(a=N)!=null&&a.signal.aborted?i():requestAnimationFrame(()=>{var a=Math.min(r+100,e.length),o=e.slice(r,a);D.dispatch({effects:o.map(e=>ge.of({from:e.from,to:e.to}))}),t&&V(M,a),a<e.length?n(a).then(i):i()})});yield n(0),t&&(V(A,!1),V(M,0),V(be,0),N=null)}}),_t.apply(this,arguments)}function vt(){N&&N.abort()}function yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Km;if(D)try{if(e&&e.length>0){var{from:r}=df(K(n).escapeValue(K(Ye)),e);r!==void 0&&(D.dispatch({selection:{anchor:r,head:r}}),Ce(D))}else we(D);t?.(e)}catch(e){E()(e)}}function bt(){yt([],()=>!0)}function xt(){pt([],!0)}var St=!1;function Ct(e){return wt(e,!1)}function wt(e,t){ae(`handlePatch`,e,t);var n=h().parse(K(Ye)),r=gn(n,e),i=On(n,e);return Kt({text:h().stringify(r,null,d())},t,!1),{json:r,previousJson:n,undo:i,redo:e}}function Tt(){if(ae(`format`),i())return!1;try{var e=h().parse(K(Ye));return Kt({text:h().stringify(e,null,d())},!0,!1),V(he,s()),!0}catch(e){E()(e)}return!1}function Et(){if(ae(`compact`),i())return!1;try{var e=h().parse(K(Ye));return Kt({text:h().stringify(e)},!0,!1),V(he,!1),!0}catch(e){E()(e)}return!1}function Dt(){if(ae(`repair`),!i())try{Kt({text:br(K(Ye))},!0,!1),V(I,Hp),V(on,void 0)}catch(e){E()(e)}}function Ot(){var e;if(!i())try{var t=h().parse(K(Ye));St=!0,re()({id:ut,json:t,rootPath:[],onSort:(e=Wa(function*(e){var{operations:t}=e;ae(`onSort`,t),wt(t,!0)}),function(t){return e.apply(this,arguments)}),onClose:()=>{St=!1,ft()}})}catch(e){E()(e)}}function kt(e){var{id:t,rootPath:n,onTransform:r,onClose:i}=e;try{var a=h().parse(K(Ye));St=!0,ie()({id:t||dt,json:a,rootPath:n||[],onTransform:e=>{r?r({operations:e,json:a,transformedJson:gn(a,e)}):(ae(`onTransform`,e),wt(e,!0))},onClose:()=>{St=!1,ft(),i&&i()}})}catch(e){E()(e)}}function At(){i()||kt({rootPath:[]})}function jt(){D&&(K(ce)&&K(ce).querySelector(`.cm-search`)?Re(D):Ee(D))}function Mt(){if(i())return!1;en();var e=u().undo();return ae(`undo`,e),hm(e)?(D.dispatch({annotations:rt.of(`undo`),changes:Le.fromJSON(e.undo.changes),selection:nt.fromJSON(e.undo.selection),scrollIntoView:!0}),!0):(w()(e),!1)}function Nt(){if(i())return!1;en();var e=u().redo();return ae(`redo`,e),hm(e)?(D.dispatch({annotations:rt.of(`redo`),changes:Le.fromJSON(e.redo.changes),selection:nt.fromJSON(e.redo.selection),scrollIntoView:!0}),!0):(T()(e),!1)}function Pt(){V(ue,!0),Kt(c(),!0,!0)}function Ft(){S()(Tf.tree)}function It(){Xt()}function Lt(e){ae(`select validation error`,e);var{from:t,to:n}=Ht(e);t!==void 0&&n!==void 0&&(Rt(t,n),ft())}function Rt(e,t){ae(`setSelection`,{anchor:e,head:t}),D&&D.dispatch(D.state.update({selection:{anchor:e,head:t},scrollIntoView:!0}))}function zt(e,t){if(t.state.selection.ranges.length===1){var n=t.state.selection.ranges[0],r=K(Ye).slice(n.from,n.to);if(r===`{`||r===`[`){var i=Sr.parse(K(Ye)),a=Object.keys(i.pointers).find(e=>i.pointers[e].value?.pos===n.from),o=i.pointers[a];a&&o&&o.value&&o.valueEnd&&(ae(`pointer found, selecting inner contents of path:`,a,o),Rt(o.value.pos+1,o.valueEnd.pos-1))}}}function Bt(){return Ze(sn,{delay:300})}function Vt(){return!!K(ce)&&getComputedStyle(K(ce)).getPropertyValue(`--jse-theme`).includes(`dark`)}function Ht(e){var{path:t,message:r,severity:i}=e,{line:a,column:o,from:s,to:c}=df(K(n).escapeValue(K(Ye)),t);return{path:t,line:a,column:o,from:s,to:c,message:r,severity:i,actions:[]}}function Wt(e,t){var{line:n,column:r,position:a,message:o}=e;return{path:[],line:n,column:r,from:a,to:a,severity:Of.error,message:o,actions:t&&!i()?[{name:`Auto repair`,apply:()=>Dt()}]:void 0}}function Gt(e){return{from:e.from||0,to:e.to||0,message:e.message||``,actions:e.actions,severity:e.severity}}function Kt(e,t,r){var i=_f(e,d(),h()),a=!v(e,Ge),o=Ge;ae(`setCodeMirrorContent`,{isChanged:a,emitChange:t,forceUpdate:r}),D&&(a||r)&&(Ge=e,V(Ye,i),an(K(Ye),m(),K(ue))||D.dispatch({changes:{from:0,to:D.state.doc.length,insert:K(n).escapeValue(K(Ye))}}),ct(),a&&t&&tn(Ge,o))}function qt(e){return nh(e)?nt.fromJSON(e):void 0}function Jt(){return Yt.apply(this,arguments)}function Yt(){return Yt=Wa(function*(){ae(`refresh`),yield function(){return Zt.apply(this,arguments)}()}),Yt.apply(this,arguments)}function Xt(){if(D){var e=D?K(n).unescapeValue(D.state.doc.toString()):``,t=e!==K(Ye);if(ae(`onChangeCodeMirrorValue`,{isChanged:t}),t){var r=Ge;V(Ye,e),Ge={text:K(Ye)},ct(),tn(Ge,r),Hs(),nn()}}}function Zt(){return(Zt=Wa(function*(){if(Hs(),D){var e=Vt();return ae(`updateTheme`,{dark:e}),D.dispatch({effects:[Ve.reconfigure(Xe.theme({},{dark:e}))]}),new Promise(e=>setTimeout(e))}return Promise.resolve()})).apply(this,arguments)}function Qt(e){var t=_e.of(typeof e==`number`?` `.repeat(e):e);return e===`	`?[t]:[t,Wx]}Iv({onMount:Cu,onDestroy:wu,getWindow:()=>Yf(K(le)),hasFocus:()=>St&&document.hasFocus()||Xf(K(le)),onFocus:ee(),onBlur:()=>{en(),te()()}});var $t=b(Xt,300);function en(){$t.flush()}function tn(e,t){x()&&x()(e,t,{contentErrors:cn(),patchResult:void 0})}function nn(){C()(rn(K(O).selection))}function rn(e){return L({type:Ef.text},e.toJSON())}function an(e,t,n){return!!e&&e.length>t&&!n}var I=B(Hp,!0),on=B(void 0,!0);function sn(){if(an(K(Ye),m(),K(ue)))return[];var e=cn();if(im(e)){var{parseError:t,isRepairable:n}=e;return[Gt(Wt(t,n))]}return am(e)?e.validationErrors.map(Ht).map(Gt):[]}function cn(){ae(`validate:start`),en();var e=ln(K(n).escapeValue(K(Ye)),g(),h(),y());return im(e)?(V(I,e.isRepairable?Up:`invalid`),V(on,e.parseError),V(k,[])):(V(I,Hp),V(on,void 0),V(k,e?.validationErrors||[])),ae(`validate:end`),e}var ln=_(Pv);function un(){K(on)&&function(e){ae(`select parse error`,e);var t=Wt(e,!1);Rt(t.from==null?0:t.from,t.to==null?0:t.to),ft()}(K(on))}var dn={icon:_i,text:`Show me`,title:`Move to the parse error location`,onClick:un};W(()=>J(p()),()=>{V(n,Nf({escapeControlCharacters:!1,escapeUnicodeCharacters:p()}))}),W(()=>J(c()),()=>{Kt(c(),!1,!1)}),W(()=>J(l()),()=>{(function(e){if(nh(e)){var t=qt(e);!D||!t||K(O)&&K(O).selection.eq(t)||(ae(`applyExternalSelection`,t),D.dispatch({selection:t}))}})(l())}),W(()=>J(g()),()=>{(function(e){ae(`updateLinter`,e),D&&D.dispatch({effects:P.reconfigure(Bt())})})(g())}),W(()=>J(d()),()=>{(function(e){D&&(ae(`updateIndentation`,e),D.dispatch({effects:je.reconfigure(Qt(e))}))})(d())}),W(()=>J(f()),()=>{(function(e){D&&(ae(`updateTabSize`,e),D.dispatch({effects:Be.reconfigure(ot.tabSize.of(e))}))})(f())}),W(()=>J(i()),()=>{(function(e){D&&(ae(`updateReadOnly`,e),D.dispatch({effects:[Te.reconfigure(ot.readOnly.of(e))]}))})(i())}),W(()=>(K(lt),J(p())),()=>{K(lt)!==p()&&(V(lt,p()),ae(`forceUpdateText`,{escapeUnicodeCharacters:p()}),D&&D.dispatch({changes:{from:0,to:D.state.doc.length,insert:K(n).escapeValue(K(Ye))}}))}),W(()=>(K(I),J(i()),Ai),()=>{V(r,K(I)!==Up||i()?[dn]:[{icon:Ai,text:`Auto repair`,title:`Automatically repair JSON`,onClick:Dt},dn])}),il();var fn={focus:ft,collapse:pt,expand:yt,patch:Ct,handlePatch:wt,openTransformModal:kt,refresh:Jt,flush:en,validate:cn};Sd(!0);var pn,mn=Xx(),hn=H(mn),_n=e=>{var t=z(()=>(K(Ye),q(()=>K(Ye).length===0))),n=z(()=>!K(t)),r=z(()=>!K(t)),a=z(()=>!K(t)),o=z(()=>!K(t)),s=z(()=>!K(t)),c=z(()=>!K(t));(function(e,t){Xo(t,!1);var n=B(void 0,!0),r=$(t,`readOnly`,9,!1),i=$(t,`onExpandAll`,9),a=$(t,`onCollapseAll`,9),o=$(t,`onFormat`,9),s=$(t,`onCompact`,9),c=$(t,`onSort`,9),l=$(t,`onTransform`,9),u=$(t,`onToggleSearch`,9),d=$(t,`onUndo`,9),f=$(t,`onRedo`,9),p=$(t,`canExpandAll`,9),m=$(t,`canCollapseAll`,9),h=$(t,`canUndo`,9),g=$(t,`canRedo`,9),_=$(t,`canFormat`,9),v=$(t,`canCompact`,9),y=$(t,`canSort`,9),b=$(t,`canTransform`,9),x=$(t,`onRenderMenu`,9),S=B(void 0,!0),C=B(void 0,!0),w={type:`button`,icon:gi,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:u()},T=B(void 0,!0);W(()=>(J(i()),J(p())),()=>{V(S,{type:`button`,icon:Zy,title:`Expand all`,className:`jse-expand-all`,onClick:i(),disabled:!p()})}),W(()=>(J(a()),J(m())),()=>{V(C,{type:`button`,icon:Qy,title:`Collapse all`,className:`jse-collapse-all`,onClick:a(),disabled:!m()})}),W(()=>(J(r()),K(S),K(C),J(o()),J(_()),J(s()),J(v()),J(c()),J(y()),J(l()),J(b()),J(d()),J(h()),J(f()),J(g())),()=>{V(T,r()?[K(S),K(C),{type:`separator`},w,{type:`space`}]:[K(S),K(C),{type:`separator`},{type:`button`,icon:$y,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,className:`jse-format`,onClick:o(),disabled:r()||!_()},{type:`button`,icon:eb,title:`Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)`,className:`jse-compact`,onClick:s(),disabled:r()||!v()},{type:`separator`},{type:`button`,icon:zi,title:`Sort`,className:`jse-sort`,onClick:c(),disabled:r()||!y()},{type:`button`,icon:pi,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:l(),disabled:r()||!b()},w,{type:`separator`},{type:`button`,icon:Yi,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:d(),disabled:!h()},{type:`button`,icon:qi,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:f(),disabled:!g()},{type:`space`}])}),W(()=>(J(x()),K(T)),()=>{V(n,x()(K(T))||K(T))}),il(),Sd(!0),ny(e,{get items(){return K(n)}}),Zo()})(e,{get readOnly(){return i()},onExpandAll:bt,onCollapseAll:xt,onFormat:Tt,onCompact:Et,onSort:Ot,onTransform:At,onToggleSearch:jt,onUndo:Mt,onRedo:Nt,get canExpandAll(){return K(n)},get canCollapseAll(){return K(r)},get canFormat(){return K(a)},get canCompact(){return K(o)},get canSort(){return K(s)},get canTransform(){return K(c)},get canUndo(){return J(u()),q(()=>u().canUndo)},get canRedo(){return J(u()),q(()=>u().canRedo)},get onRenderMenu(){return ne()}})};Q(hn,e=>{a()&&e(_n)});var vn=U(hn,2),yn=e=>{var t=Gx(),n=U(H(t),2),r=H(n),i=U(n,2);G(()=>Xu(r,`width: ${K(be)>0?K(M)/K(be)*100:0}%`)),Y(`click`,i,vt),Z(e,t)};Q(vn,e=>{K(A)&&e(yn)});var bn=U(vn,2),xn=e=>{var t,n=z(()=>(K(Ye),J(m()),K(ue),q(()=>an(K(Ye),m(),K(ue))))),i=Jx(),a=Kc(i);yd(a,e=>V(ce,e),()=>K(ce));var s=U(a,2),c=e=>{var t=Kx(),n=Kc(t),r=z(()=>(J(fg),J(m()),K(Ye),q(()=>`The JSON document is larger than ${fg(m())}, and may crash your browser when loading it in text mode. Actual size: ${fg(K(Ye).length)}.`)));zv(n,{get icon(){return Bi},type:`error`,get message(){return K(r)},actions:[{text:`Open anyway`,title:`Open the document in text mode. This may freeze or crash your browser.`,onClick:Pt},{text:`Open in tree mode`,title:`Open the document in tree mode. Tree mode can handle large documents.`,onClick:Ft},{text:`Cancel`,title:`Cancel opening this large document.`,onClick:It}],onClose:ft});var i=H(U(n,2));G(e=>du(i,e),[()=>(J(pp),K(Ye),J(Np),q(()=>pp(K(Ye)||``,Np)))]),Z(e,t)};Q(s,e=>{K(n)&&e(c)});var l=U(s,2),u=e=>{var t=qx(),n=Kc(t),i=e=>{(function(e,t){Xo(t,!1);var n=$(t,`editorState`,8),r=B(),i=B(),a=B(),o=B(),s=B();W(()=>J(n()),()=>{var e;V(r,(e=n())==null||(e=e.selection)==null||(e=e.main)==null?void 0:e.head)}),W(()=>(K(r),J(n())),()=>{var e;V(i,K(r)===void 0||(e=n())==null||(e=e.doc)==null?void 0:e.lineAt(K(r)))}),W(()=>K(i),()=>{V(a,K(i)===void 0?void 0:K(i).number)}),W(()=>(K(i),K(r)),()=>{V(o,K(i)!==void 0&&K(r)!==void 0?K(r)-K(i).from+1:void 0)}),W(()=>J(n()),()=>{var e;V(s,(e=n())==null||(e=e.selection)==null||(e=e.ranges)==null?void 0:e.reduce((e,t)=>e+t.to-t.from,0))}),il(),Sd();var c=Bx(),l=H(c),u=e=>{var t=Lx(),n=H(t);G(()=>du(n,`Line: ${K(a)??``}`)),Z(e,t)};Q(l,e=>{K(a)!==void 0&&e(u)});var d=U(l,2),f=e=>{var t=Rx(),n=H(t);G(()=>du(n,`Column: ${K(o)??``}`)),Z(e,t)};Q(d,e=>{K(o)!==void 0&&e(f)});var p=U(d,2),m=e=>{var t=zx(),n=H(t);G(()=>du(n,`Selection: ${K(s)??``} characters`)),Z(e,t)};Q(p,e=>{K(s)!==void 0&&K(s)>0&&e(m)}),Z(e,c),Zo()})(e,{get editorState(){return K(O)}})};Q(n,e=>{o()&&e(i)});var a=U(n,2),s=e=>{zv(e,{type:`error`,get icon(){return Bi},get message(){return K(on),q(()=>K(on).message)},get actions(){return K(r)},onClick:un,onClose:ft})};Q(a,e=>{K(on)&&e(s)});var c=U(a,2),l=e=>{var t=z(()=>[{icon:$y,text:`Format`,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,onClick:Tt},{icon:Fi,text:`No thanks`,title:`Close this message`,onClick:()=>V(he,!1)}]);zv(e,{type:`success`,message:`Do you want to format the JSON?`,get actions(){return K(t)},onClose:ft})},u=Sc(()=>(K(on),K(he),J(wf),K(Ye),q(()=>!K(on)&&K(he)&&wf(K(Ye)))));Q(c,e=>{K(u)&&e(l)}),Kv(U(c,2),{get validationErrors(){return K(k)},selectError:Lt}),Z(e,t)};Q(l,e=>{K(n)||e(u)}),G(()=>t=Ju(a,1,`jse-contents svelte-k2b9e6`,null,t,{"jse-hidden":K(n)})),Z(e,i)},Sn=e=>{Z(e,Yx())};return Q(bn,e=>{se?e(Sn,-1):e(xn)}),yd(mn,e=>V(le,e),()=>K(le)),G(()=>pn=Ju(mn,1,`jse-text-mode svelte-k2b9e6`,null,pn,{"no-main-menu":!a()})),Z(e,mn),_d(t,`focus`,ft),_d(t,`collapse`,pt),_d(t,`expand`,yt),_d(t,`patch`,Ct),_d(t,`handlePatch`,wt),_d(t,`openTransformModal`,kt),_d(t,`refresh`,Jt),_d(t,`flush`,en),_d(t,`validate`,cn),Zo(fn)}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var Qx=X(`<button type="button"> </button>`);op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var $x=X(`<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>`),eS=X(`<button type="button"><span class="jse-column-name"> </span> <!></button>`);op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var tS=X(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),nS=X(`<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>`),rS=X(`<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>`),iS=X(`<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>`);function aS(e,t){Xo(t,!0);var n=Sc(()=>t.json?function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=[];return function e(r,i){Gt(r)&&i.length<t&&Object.keys(r).forEach(t=>{e(r[t],i.concat(t))}),Wt(r)&&n.push(i)}(e,[]),n}(t.json).slice(0,99).filter(e=>e.length>0):[]),r=Sc(()=>!Dt(K(n))),i=Sc(()=>t.json===void 0&&(t.text===``||t.text===void 0)),a=Sc(()=>K(r)?`Object with nested arrays`:K(i)?`An empty document`:Gt(t.json)?`An object`:Wt(t.json)?`An empty array`:`A ${Gd(t.json,t.parser)}`),o=iS(),s=H(U(H(o),2)),c=H(s),l=U(s,2),u=H(l),d=e=>{Z(e,au(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},f=e=>{Z(e,tS())},p=e=>{var t=au();G(()=>du(t,`${K(a)??``} cannot be opened in table mode. You can open the document in tree mode instead.`)),Z(e,t)};Q(u,e=>{K(r)?e(d):K(i)&&!t.readOnly?e(f,1):e(p,-1)});var m=U(l,2);Nu(m,17,()=>K(n),ju,(e,n)=>{var r=Sc(()=>function(e){return I(t.json,e).length}(K(n))),i=rS(),a=H(i),o=H(a),s=H(U(o)),c=U(a,2),l=H(c),u=U(c,2),d=e=>{var r=nS();Ql(`click`,r,()=>t.extractPath(K(n))),Z(e,r)};Q(u,e=>{t.readOnly||e(d)}),G(e=>{du(o,`"${e??``}" `),du(s,`(${K(r)??``} ${K(r)===1?`item`:`items`})`),du(l,t.readOnly?`View`:`Edit`)},[()=>Cg(K(n))]),Ql(`click`,c,()=>t.openJSONEditorModal(K(n))),Z(e,i)});var h=U(m,2);G(()=>du(c,K(a))),Ql(`click`,o,()=>t.onClick()),Ql(`click`,h,()=>t.onChangeMode(Tf.tree)),Z(e,o),Zo()}$l([`click`]),op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var oS=X(`<button type="button"><!></button>`);op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var sS=X(`<div class="jse-table-root-error svelte-1p86y3c"><!></div>`),cS=X(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),lS=X(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),uS=X(`<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>`),dS=X(`<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>`),fS=X(`<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>`),pS=X(`<td class="jse-table-cell svelte-1p86y3c"></td>`),mS=X(`<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>`),hS=X(`<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>`,1),gS=X(`<!> <!>`,1),_S=X(`<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>`,1),vS=X(`<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>`),yS=X(`<div role="table"><!> <!></div> <!> <!>`,1);function bS(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=Ad(`jsoneditor:TableMode`),{openAbsolutePopup:o,closeAbsolutePopup:s}=Yo(`absolute-popup`),c=Ov(),l=Ut(),u=Ut(),d=typeof window>`u`;a(`isSSR:`,d);var f=$(t,`readOnly`,9),p=$(t,`externalContent`,9),m=$(t,`externalSelection`,9),h=$(t,`history`,9),g=$(t,`truncateTextSize`,9),y=$(t,`mainMenuBar`,9),b=$(t,`escapeControlCharacters`,9),x=$(t,`escapeUnicodeCharacters`,9),S=$(t,`flattenColumns`,9),C=$(t,`parser`,9),w=$(t,`parseMemoizeOne`,9),T=$(t,`validator`,9),E=$(t,`validationParser`,9),ee=$(t,`indentation`,9),te=$(t,`onChange`,9),ne=$(t,`onChangeMode`,9),re=$(t,`onSelect`,9),ie=$(t,`onUndo`,9),ae=$(t,`onRedo`,9),oe=$(t,`onRenderValue`,9),se=$(t,`onRenderMenu`,9),D=$(t,`onRenderContextMenu`,9),ce=$(t,`onFocus`,9),le=$(t,`onBlur`,9),O=$(t,`onSortModal`,9),ue=$(t,`onTransformModal`,9),de=$(t,`onJSONEditorModal`,9),fe=B(void 0,!0),pe=B(void 0,!0),me=B(void 0,!0),he=B(void 0,!0),ge=B(void 0,!0);Iv({onMount:Cu,onDestroy:wu,getWindow:()=>Yf(K(pe)),hasFocus:()=>De&&document.hasFocus()||Xf(K(pe)),onFocus:()=>{Oe=!0,ce()&&ce()()},onBlur:()=>{Oe=!1,le()&&le()()}});var _e,k=B(void 0,!0),ve=B(void 0,!0),A=B(void 0,!0),j=B(void 0,!0),M=B(void 0,!0),ye=B(void 0,!0),be=B(!1,!0),N=B(!1,!0);function P(e){V(ye,(_e=e)?cg(K(k),_e.items):void 0)}function xe(e){return Se.apply(this,arguments)}function Se(){return(Se=Wa(function*(e){V(F,void 0),yield nt(e)})).apply(this,arguments)}function Ce(){V(be,!1),V(N,!1),Qe()}var we=B(1e4,!0),Te=B([],!0),Ee=B(void 0,!0),De=!1,Oe=!1,ke=B(!1,!0),Ae=B({},!0),je=B(600,!0),Me=B(0,!0),Ne=18;function Pe(e){V(F,e)}function Fe(e){K(F)&&e!==void 0&&(dn(e,Nh(K(F)))&&dn(e,Mh(K(F)))||(a(`clearing selection: path does not exist anymore`,K(F)),V(F,void 0)))}var Ie=B(K(k)===void 0?void 0:_m({json:K(k)}),!0),F=B(th(m())?m():void 0,!0),Le=B(void 0,!0),Re=B(!1,!0);function ze(e){if(!f()){a(`onSortByHeader`,e);var t=e.sortDirection===Af.desc?-1:1;qe(ib(K(k),[],e.path,t),(t,n)=>({state:n,sortedColumn:e}))}}Cu(()=>{K(F)&&it(Mh(K(F)))});var Be=B(void 0,!0);function Ve(e){if(e.json!==void 0||e.text!==void 0){var t=K(k)!==void 0&&e.json!==void 0;h().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:hh(e.selection),sortedColumn:e.sortedColumn},redo:{patch:t?[{op:`replace`,path:``,value:K(k)}]:void 0,json:K(k),text:K(ve),documentState:K(Ie),textIsRepaired:K(Re),selection:hh(K(F)),sortedColumn:K(Le)}})}}var He=B([],!0),Ue=_(Nv);function We(e,t,n,r){kv(()=>{var i;try{i=Ue(e,t,n,r)}catch(e){i=[{path:[],message:`Failed to validate: `+e.message,severity:Of.warning}]}v(i,K(He))||(a(`validationErrors changed:`,i),V(He,i))},e=>a(`validationErrors updated in ${e} ms`))}function Ge(){return a(`validate`),K(A)?{parseError:K(A),isRepairable:!1}:(We(K(k),T(),C(),E()),Dt(K(He))?void 0:{validationErrors:K(He)})}function Ke(e,t){if(a(`patch`,e,t),K(k)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=K(k),r={json:void 0,text:K(ve),documentState:K(Ie),selection:hh(K(F)),sortedColumn:K(Le),textIsRepaired:K(Re)},i=Yh(K(k),e),o=km(K(k),K(Ie),e),s=Fb(K(Le),e,K(Te)),c=typeof t==`function`?t(o.json,o.documentState,K(F)):void 0;return V(k,c?.json===void 0?o.json:c.json),V(Ie,c?.state===void 0?o.documentState:c.state),V(F,c?.selection===void 0?K(F):c.selection),V(Le,c?.sortedColumn===void 0?s:c.sortedColumn),V(ve,void 0),V(Re,!1),V(j,void 0),V(M,void 0),V(A,void 0),h().add({type:`tree`,undo:L({patch:i},r),redo:{patch:e,json:void 0,text:void 0,documentState:K(Ie),selection:hh(K(F)),sortedColumn:K(Le),textIsRepaired:K(Re)}}),{json:K(k),previousJson:n,undo:i,redo:e}}function qe(e,t){a(`handlePatch`,e,t);var n={json:K(k),text:K(ve)},r=Ke(e,t);return Je(n,r),r}function Je(e,t){if((e.json!==void 0||e?.text!==void 0)&&te()){if(K(ve)!==void 0){var n={text:K(ve),json:void 0};te()(n,e,{contentErrors:Ge(),patchResult:t})}else if(K(k)!==void 0){var r={text:void 0,json:K(k)};te()(r,e,{contentErrors:Ge(),patchResult:t})}}}function Ye(e){a(`pasted json as text`,e),V(j,e)}function Xe(e){a(`pasted multiline text`,{pastedText:e}),V(M,e)}function Ze(e){var t=parseInt(e[0],10),n=[String(t+1),...e.slice(1)];return dn(K(k),n)?vh(n):vh(e)}function Qe(){a(`focus`),K(he)&&(K(he).focus(),K(he).select())}function $e(e){V(Me,e.target.scrollTop)}function et(){K(F)||V(F,function(){if(Wt(K(k))&&!Dt(K(k))&&!Dt(K(Te)))return vh([`0`,...K(Te)[0]])}())}function tt(){if(K(Re)&&K(k)!==void 0){var e={json:K(k),text:K(ve)},t={json:K(k),documentState:K(Ie),selection:K(F),sortedColumn:K(Le),text:K(ve),textIsRepaired:K(Re)};V(ve,void 0),V(Re,!1),Fe(K(k)),Ve(t),Je(e,void 0)}return{json:K(k),text:K(ve)}}function nt(e){var{scrollToWhenVisible:t=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=K(be)?Kp:0,r=kb(e,K(Te),Ae,Ne),i=r-K(Me)+n+Ne,o=at(e);if(a(`scrollTo`,{path:e,top:r,scrollTop:K(Me),elem:o}),!K(me))return Promise.resolve();var s=K(me).getBoundingClientRect();if(o&&!t){var l=o.getBoundingClientRect();if(l.bottom>s.top&&l.top<s.bottom)return Promise.resolve()}var u=-Math.max(n+2*Ne,s.height/4);return new Promise(o?t=>{c(o,{container:K(me),offset:u,duration:300,callback:()=>{rt(e),t()}})}:t=>{c(i,{container:K(me),offset:u,duration:300,callback:()=>{Hs(),rt(e),t()}})})}function rt(e){var t=at(e);if(t&&K(me)){var n=K(me).getBoundingClientRect(),r=t.getBoundingClientRect();if(r.right>n.right){var i=r.right-n.right;Fc(me,K(me).scrollLeft+=i)}if(r.left<n.left){var a=n.left-r.left;Fc(me,K(me).scrollLeft-=a)}}}function it(e){(function(e){if(K(me)){var{rowIndex:t}=Ab(e,K(Te)),n=kb(e,K(Te),Ae,Ne),r=n+(Ae[t]||Ne),i=Ne,a=K(me).getBoundingClientRect(),o=K(Me),s=K(Me)+a.height-i;if(r>s){var c=r-s;Fc(me,K(me).scrollTop+=c)}if(n<o){var l=o-n;Fc(me,K(me).scrollTop-=l)}}})(e),rt(e)}function at(e){var t=K(Te).find(t=>mh(e.slice(1),t)),n=t?e.slice(0,1).concat(t):e;return K(me)?.querySelector(`td[data-path="${$f(n)}"]`)??void 0}function ot(e){var{anchor:t,left:n,top:r,width:i,height:a,offsetTop:c,offsetLeft:l,showTip:u}=e,d=function(e){var{json:t,documentState:n,selection:r,readOnly:i,onEditValue:a,onEditRow:o,onToggleEnforceString:s,onCut:c,onCopy:l,onPaste:u,onRemove:d,onDuplicateRow:f,onInsertBeforeRow:p,onInsertAfterRow:m,onRemoveRow:h}=e,g=t!==void 0,_=!!r,v=t!==void 0&&r?I(t,Mh(r)):void 0,y=g&&($m(r)||Zm(r)||Qm(r)),b=!i&&g&&r!==void 0&&fh(r),x=b&&!zd(v),S=!i&&y,C=r!==void 0&&Rm(t,n,Mh(r));return[{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`label`,text:`Table cell:`},{type:`dropdown-button`,main:{type:`button`,onClick:()=>a(),icon:Ii,text:`Edit`,title:`Edit the value (Double-click on the value)`,disabled:!b},width:`11em`,items:[{type:`button`,icon:Ii,text:`Edit`,title:`Edit the value (Double-click on the value)`,onClick:()=>a(),disabled:!b},{type:`button`,icon:C?wi:Xi,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!x}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:Vi,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!S},width:`10em`,items:[{type:`button`,icon:Vi,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:i||!y},{type:`button`,icon:Vi,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:i||!y}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:Ki,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!y},width:`12em`,items:[{type:`button`,icon:Ki,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!1),disabled:!y},{type:`button`,icon:Ki,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!y}]},{type:`button`,onClick:()=>u(),icon:di,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:i||!_},{type:`button`,onClick:()=>d(),icon:ji,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!y}]},{type:`column`,items:[{type:`label`,text:`Table row:`},{type:`button`,onClick:()=>o(),icon:Ii,text:`Edit row`,title:`Edit the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>f(),icon:Ci,text:`Duplicate row`,title:`Duplicate the current row (Ctrl+D)`,disabled:i||!_||!g},{type:`button`,onClick:()=>p(),icon:Gi,text:`Insert before`,title:`Insert a row before the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>m(),icon:Gi,text:`Insert after`,title:`Insert a row after the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>h(),icon:ji,text:`Remove row`,title:`Remove current row`,disabled:i||!_||!g}]}]}]}({json:K(k),documentState:K(Ie),selection:K(F),readOnly:f(),onEditValue:lt,onEditRow:ut,onToggleEnforceString:dt,onCut:xt,onCopy:wt,onPaste:mt,onRemove:Et,onDuplicateRow:kt,onInsertBeforeRow:At,onInsertAfterRow:jt,onRemoveRow:Mt}),p=D()(d)??d;if(!1!==p){var m={left:n,top:r,offsetTop:c,offsetLeft:l,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{De=!1,Qe()}};De=!0;var h=o(lx,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:p,onRequestClose(){s(h),Qe()}},m)}}function st(e){if(!wh(K(F)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==K(he))ot({left:e.clientX,top:e.clientY,width:Gp,height:Wp,showTip:!1});else{var t=K(me)?.querySelector(`.jse-table-cell.jse-selected-value`);if(t)ot({anchor:t,offsetTop:2,width:Gp,height:Wp,showTip:!1});else{var n=K(me)?.getBoundingClientRect();n&&ot({top:n.top+2,left:n.left+2,width:Gp,height:Wp,showTip:!1})}}}function ct(e){ot({anchor:Zf(e.target,`BUTTON`),offsetTop:0,width:Gp,height:Wp,showTip:!0})}function lt(){if(!f()&&K(F)){var e=Mh(K(F));zd(I(K(k),e))?Bt(e):V(F,vh(e))}}function ut(){!f()&&K(F)&&Bt(Mh(K(F)).slice(0,1))}function dt(){if(!f()&&Qm(K(F))){var e=K(F).path,t=pn(e),n=I(K(k),e),r=!Rm(K(k),K(Ie),e),i=r?String(n):Jd(String(n),C());a(`handleToggleEnforceString`,{enforceString:r,value:n,updatedValue:i}),qe([{op:`replace`,path:t,value:i}],(t,n)=>({state:Nm(K(k),n,e,{type:`value`,enforceString:r})}))}}function ft(){return pt.apply(this,arguments)}function pt(){return(pt=Wa(function*(){if(a(`apply pasted json`,K(j)),K(j)){var{onPasteAsJson:e}=K(j);e(),setTimeout(Qe)}})).apply(this,arguments)}function mt(){return ht.apply(this,arguments)}function ht(){return(ht=Wa(function*(){try{Ft(yield navigator.clipboard.readText())}catch(e){console.error(e),V(ke,!0)}})).apply(this,arguments)}function gt(){return _t.apply(this,arguments)}function _t(){return(_t=Wa(function*(){a(`apply pasted multiline text`,K(M)),K(M)&&(Ft(JSON.stringify(K(M))),setTimeout(Qe))})).apply(this,arguments)}function vt(){a(`clear pasted json`),V(j,void 0),Qe()}function yt(){a(`clear pasted multiline text`),V(M,void 0),Qe()}function bt(){ne()(Tf.text)}function xt(e){return St.apply(this,arguments)}function St(){return(St=Wa(function*(e){yield Lb({json:K(k),selection:K(F),indentation:e?ee():void 0,readOnly:f(),parser:C(),onPatch:qe})})).apply(this,arguments)}function wt(){return Tt.apply(this,arguments)}function Tt(){return Tt=Wa(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];K(k)!==void 0&&(yield zb({json:K(k),selection:K(F),indentation:e?ee():void 0,parser:C()}))}),Tt.apply(this,arguments)}function Et(){Hb({json:K(k),text:K(ve),selection:K(F),keepSelection:!0,readOnly:f(),onChange:te(),onPatch:qe})}function Ot(e){f()||(a(`extract`,{path:e}),qe(Uh(K(k),vh(e))))}function kt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Th(n)){var{rowIndex:o,columnIndex:s}=Ab(Mh(n),r);Ib(`duplicate row`,{rowIndex:o}),a(Hh(t,[[String(o)]]),(e,n)=>({state:n,selection:vh(jb({rowIndex:o<t.length?o+1:o,columnIndex:s},r))}))}})({json:K(k),selection:K(F),columns:K(Te),readOnly:f(),onPatch:qe})}function At(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Th(n)){var{rowIndex:o}=Ab(Mh(n),r);Ib(`insert before row`,{rowIndex:o}),a(zh(t,[String(o)],[{key:``,value:Gt(t[0])?{}:``}]))}})({json:K(k),selection:K(F),columns:K(Te),readOnly:f(),onPatch:qe})}function jt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Th(n)){var{rowIndex:o,columnIndex:s}=Ab(Mh(n),r);Ib(`insert after row`,{rowIndex:o});var c=o+1,l=[String(c)],u=[{key:``,value:Gt(t[0])?{}:``}];a(c<t.length?zh(t,l,u):Bh(t,[],u),(e,t)=>({state:t,selection:vh(jb({rowIndex:c,columnIndex:s},r))}))}})({json:K(k),selection:K(F),columns:K(Te),readOnly:f(),onPatch:qe})}function Mt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&Th(n)){var{rowIndex:o,columnIndex:s}=Ab(Mh(n),r);Ib(`remove row`,{rowIndex:o}),a(Gh([[String(o)]]),(e,t)=>{var n=o<e.length?o:o>0?o-1:void 0,i=n===void 0?void 0:vh(jb({rowIndex:n,columnIndex:s},r));return Ib(`remove row new selection`,{rowIndex:o,newRowIndex:n,newSelection:i}),{state:t,selection:i}})}})({json:K(k),selection:K(F),columns:K(Te),readOnly:f(),onPatch:qe})}function Nt(){return(Nt=Wa(function*(e){yield Wb({char:e,selectInside:!1,json:K(k),selection:K(F),readOnly:f(),parser:C(),onPatch:qe,onReplaceJson:It,onSelect:Pe})})).apply(this,arguments)}function Pt(e){e.preventDefault(),Ft(e.clipboardData?.getData(`text/plain`))}function Ft(e){e!==void 0&&Vb({clipboardText:e,json:K(k),selection:K(F),readOnly:f(),parser:C(),onPatch:qe,onChangeText:Lt,onPasteMultilineText:Xe,openRepairModal:Vt})}function It(e,t){var n={json:K(k),text:K(ve)},r={json:K(k),documentState:K(Ie),selection:K(F),sortedColumn:K(Le),text:K(ve),textIsRepaired:K(Re)},i=Sm(e,K(Ie)),a=typeof t==`function`?t(e,i,K(F)):void 0;V(k,a?.json===void 0?e:a.json),V(Ie,a?.state===void 0?i:a.state),V(F,a?.selection===void 0?K(F):a.selection),V(Le,void 0),V(ve,void 0),V(Re,!1),V(A,void 0),Fe(K(k)),Ve(r),Je(n,void 0)}function Lt(e,t){a(`handleChangeText`);var n={json:K(k),text:K(ve)},r={json:K(k),documentState:K(Ie),selection:K(F),sortedColumn:K(Le),text:K(ve),textIsRepaired:K(Re)};try{V(k,w()(e)),V(Ie,Sm(K(k),K(Ie))),V(ve,void 0),V(Re,!1),V(A,void 0)}catch(t){try{V(k,w()(br(e))),V(Ie,Sm(K(k),K(Ie))),V(ve,e),V(Re,!0),V(A,void 0)}catch{V(k,void 0),V(Ie,void 0),V(ve,e),V(Re,!1),V(A,K(ve)===``?void 0:uf(K(ve),t.message||String(t)))}}if(typeof t==`function`){var i=t(K(k),K(Ie),K(F));V(k,i?.json===void 0?K(k):i.json),V(Ie,i?.state===void 0?K(Ie):i.state),V(F,i?.selection===void 0?K(F):i.selection)}Fe(K(k)),Ve(r),Je(n,void 0)}function Rt(e){a(`select validation error`,e),V(F,vh(e.path)),nt(e.path)}function zt(e){if(K(k)!==void 0){var{id:t,onTransform:n,onClose:r}=e,i=e.rootPath||[];De=!0,ue()({id:t||u,json:K(k),rootPath:i||[],onTransform:e=>{n?n({operations:e,json:K(k),transformedJson:gn(K(k),e)}):(a(`onTransform`,i,e),qe(e))},onClose:()=>{De=!1,setTimeout(Qe),r&&r()}})}}function Bt(e){a(`openJSONEditorModal`,{path:e}),De=!0,de()({content:{json:I(K(k),e)},path:e,onPatch:qe,onClose:()=>{De=!1,setTimeout(Qe)}})}function Vt(e,t){V(ge,{text:e,onParse:e=>sf(e,e=>af(e,C())),onRepair:cf,onApply:t,onClose:Qe})}function Ht(){(function(e){f()||K(k)===void 0||(De=!0,O()({id:l,json:K(k),rootPath:e,onSort:t=>{var{operations:n,itemPath:r,direction:i}=t;a(`onSort`,n,e,r,i),qe(n,(e,t)=>({state:t,sortedColumn:{path:r,sortDirection:i===-1?Af.desc:Af.asc}}))},onClose:()=>{De=!1,setTimeout(Qe)}}))})([])}function Kt(){zt({rootPath:[]})}function qt(e){a(`openFind`,{findAndReplace:e}),V(be,!1),V(N,!1),Hs(),V(be,!0),V(N,e)}function Yt(){if(!f()&&h().canUndo){var e=h().undo();if(mm(e)){var t={json:K(k),text:K(ve)};V(k,e.undo.patch?gn(K(k),e.undo.patch):e.undo.json),V(Ie,e.undo.documentState),V(F,e.undo.selection),V(Le,e.undo.sortedColumn),V(ve,e.undo.text),V(Re,e.undo.textIsRepaired),V(A,void 0),a(`undo`,{item:e,json:K(k)}),Je(t,e.undo.patch&&e.redo.patch?{json:K(k),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),Qe(),K(F)&&nt(Mh(K(F)),{scrollToWhenVisible:!1})}else ie()(e)}}function Xt(){if(!f()&&h().canRedo){var e=h().redo();if(mm(e)){var t={json:K(k),text:K(ve)};V(k,e.redo.patch?gn(K(k),e.redo.patch):e.redo.json),V(Ie,e.redo.documentState),V(F,e.redo.selection),V(Le,e.redo.sortedColumn),V(ve,e.redo.text),V(Re,e.redo.textIsRepaired),V(A,void 0),a(`redo`,{item:e,json:K(k)}),Je(t,e.undo.patch&&e.redo.patch?{json:K(k),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),Qe(),K(F)&&nt(Mh(K(F)),{scrollToWhenVisible:!1})}else ae()(e)}}function Zt(e){V(je,e.getBoundingClientRect().height)}W(()=>(J(b()),J(x())),()=>{V(fe,Nf({escapeControlCharacters:b(),escapeUnicodeCharacters:x()}))}),W(()=>K(be),()=>{(function(e){if(K(me)){var t=e?Kp:-100;K(me).scrollTo({top:Fc(me,K(me).scrollTop+=t),left:K(me).scrollLeft})}})(K(be))}),W(()=>J(p()),()=>{(function(e){var t={json:K(k)},n=pf(e)?e.text!==K(ve):!v(t.json,e.json);if(a(`update external content`,{isChanged:n}),n){var r={json:K(k),documentState:K(Ie),selection:K(F),sortedColumn:K(Le),text:K(ve),textIsRepaired:K(Re)};if(pf(e))try{V(k,w()(e.text)),V(Ie,Sm(K(k),K(Ie))),V(ve,e.text),V(Re,!1),V(A,void 0)}catch(t){try{V(k,w()(br(e.text))),V(Ie,Sm(K(k),K(Ie))),V(ve,e.text),V(Re,!0),V(A,void 0)}catch{V(k,void 0),V(Ie,void 0),V(ve,e.text),V(Re,!1),V(A,K(ve)===``?void 0:uf(K(ve),t.message||String(t)))}}else V(k,e.json),V(Ie,Sm(K(k),K(Ie))),V(ve,void 0),V(Re,!1),V(A,void 0);Fe(K(k)),V(Le,void 0),Ve(r)}})(p())}),W(()=>J(m()),()=>{(function(e){v(K(F),e)||(a(`applyExternalSelection`,{selection:K(F),externalSelection:e}),th(e)&&V(F,e))})(m())}),W(()=>(K(Te),K(k),J(S()),K(we)),()=>{V(Te,Wt(K(k))?function(e,t){var n=new Set(t.map(pn)),r=new Set(e.map(pn));for(var i of n)r.has(i)||n.delete(i);for(var a of r)n.has(a)||n.add(a);return[...n].map(fn)}(Tb(K(k),S(),K(we)),K(Te)):[])}),W(()=>(K(k),K(Te)),()=>{V(Ee,!(!K(k)||Dt(K(Te))))}),W(()=>(K(k),K(we)),()=>{V(n,Array.isArray(K(k))&&K(k).length>K(we))}),W(()=>(K(Me),K(je),K(k),K(be),Kp),()=>{V(r,Ob(K(Me),K(je),K(k),Ae,Ne,K(be)?Kp:0))}),W(()=>K(k),()=>{K(k),K(me)&&K(me).scrollTo({top:K(me).scrollTop,left:K(me).scrollLeft})}),W(()=>K(F),()=>{var e=K(F);v(e,m())||(a(`onSelect`,e),re()(e))}),W(()=>(J(f()),J(g()),J(C()),K(fe),K(k),K(Ie),J(oe())),()=>{V(Be,{mode:Tf.table,readOnly:f(),truncateTextSize:g(),parser:C(),normalization:K(fe),getJson:()=>K(k),getDocumentState:()=>K(Ie),findElement:at,findNextInside:Ze,focus:Qe,onPatch:(e,t)=>qe(function(e,t){return e.flatMap(e=>{if(Jt(e)){var n=fn(e.path);if(n.length>0){for(var r=[e],i=Ct(n);i.length>0&&!dn(t,i);)r.unshift({op:`add`,path:pn(i),value:{}}),i=Ct(i);return r}}return e})}(e,K(k)),t),onSelect:Pe,onFind:qt,onPasteJson:Ye,onRenderValue:oe()})}),W(()=>(K(k),J(T()),J(C()),J(E())),()=>{We(K(k),T(),C(),E())}),W(()=>(K(He),K(Te)),()=>{V(i,Mb(K(He),K(Te)))}),il();var Qt={validate:Ge,patch:Ke,focus:Qe,acceptAutoRepair:tt,scrollTo:nt,findElement:at,openTransformModal:zt};Sd(!0);var $t=yS();Y(`mousedown`,Ec,function(e){!qf(e.target,e=>e===K(pe))&&wh(K(F))&&(a(`click outside the editor, exit edit mode`),V(F,hh(K(F))),Oe&&K(he)&&(K(he).focus(),K(he).blur()),a(`blur (outside editor)`),K(he)&&K(he).blur())});var en,tn=Kc($t),nn=H(tn),rn=e=>{(function(e,t){Xo(t,!1);var n=$(t,`containsValidArray`,9),r=$(t,`readOnly`,9),i=$(t,`showSearch`,13,!1),a=$(t,`history`,9),o=$(t,`onSort`,9),s=$(t,`onTransform`,9),c=$(t,`onContextMenu`,9),l=$(t,`onUndo`,9),u=$(t,`onRedo`,9),d=$(t,`onRenderMenu`,9);function f(){i(!i())}var p=B(void 0,!0),m=B(void 0,!0);W(()=>(J(r()),J(o()),J(n()),J(s()),J(c()),J(l()),J(a()),J(u())),()=>{V(p,r()?[{type:`space`}]:[{type:`button`,icon:zi,title:`Sort`,className:`jse-sort`,onClick:o(),disabled:r()||!n()},{type:`button`,icon:pi,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:s(),disabled:r()||!n()},{type:`button`,icon:gi,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:f,disabled:!n()},{type:`button`,icon:xi,title:Rp,className:`jse-contextmenu`,onClick:c()},{type:`separator`},{type:`button`,icon:Yi,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:l(),disabled:!a().canUndo},{type:`button`,icon:qi,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:u(),disabled:!a().canRedo},{type:`space`}])}),W(()=>(J(d()),K(p)),()=>{V(m,d()(K(p))||K(p))}),il(),Sd(!0),ny(e,{get items(){return K(m)}}),Zo()})(e,{get containsValidArray(){return K(Ee)},get readOnly(){return f()},get history(){return h()},onSort:Ht,onTransform:Kt,onUndo:Yt,onRedo:Xt,onContextMenu:ct,get onRenderMenu(){return se()},get showSearch(){return K(be)},set showSearch(e){V(be,e)},$$legacy:!0})};Q(nn,e=>{y()&&e(rn)});var an=U(nn,2),on=e=>{var t=_S(),a=Kc(t),o=H(a);o.readOnly=!0,yd(o,e=>V(he,e),()=>K(he));var s=U(a,2),c=e=>{var t=hS(),a=Kc(t);Cb(H(a),{get json(){return K(k)},get documentState(){return K(Ie)},get parser(){return C()},get showSearch(){return K(be)},get showReplace(){return K(N)},get readOnly(){return f()},get columns(){return K(Te)},onSearch:P,onFocus:xe,onPatch:qe,onClose:Ce});var o=U(a,2),s=H(H(H(o))),c=H(s),l=H(c),u=e=>{var t=z(()=>(J(Nb),K(i),q(()=>Nb([],K(i)?.root)))),n=ou(),r=Kc(n),a=e=>{var n=sS();yy(H(n),{get validationError(){return K(t)},get onExpand(){return jx}}),Z(e,n)};Q(r,e=>{K(t)&&e(a)}),Z(e,n)},d=Sc(()=>(J(Dt),K(i),q(()=>!Dt(K(i)?.root))));Q(l,e=>{K(d)&&e(u)});var p=U(c);Nu(p,1,()=>K(Te),ju,(e,t)=>{var n=cS();(function(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=$(t,`path`,9),o=$(t,`sortedColumn`,9),s=$(t,`readOnly`,9),c=$(t,`onSort`,9);W(()=>(J(a()),Cg),()=>{V(n,Dt(a())?`values`:Cg(a()))}),W(()=>(J(o()),J(a())),()=>{V(r,o()&&v(a(),o()?.path)?o().sortDirection:void 0)}),W(()=>(K(r),qp),()=>{V(i,K(r)?qp[K(r)]:void 0)}),il(),Sd(!0);var l,u=eS(),d=H(u),f=H(d),p=U(d,2),m=e=>{var t=$x(),n=H(t),a=z(()=>(K(r),J(Af),J(Ji),J(Ui),q(()=>K(r)===Af.asc?Ji:Ui)));Cp(n,{get data(){return K(a)}}),G(()=>cd(t,`title`,`Currently sorted in ${K(i)} order`)),Z(e,t)};Q(p,e=>{K(r)!==void 0&&e(m)}),G(e=>{l=Ju(u,1,`jse-column-header svelte-5pxwfq`,null,l,{"jse-readonly":s()}),cd(u,`title`,s()?K(n):K(n)+` (Click to sort the data by this column)`),du(f,e)},[()=>(J(pp),K(n),J(50),q(()=>pp(K(n),50)))]),Y(`click`,u,function(){s()||c()({path:a(),sortDirection:K(r)===Af.asc?Af.desc:Af.asc})}),Z(e,u),Zo()})(H(n),{get path(){return K(t)},get sortedColumn(){return K(Le)},get readOnly(){return f()},onSort:ze}),Z(e,n)});var m=U(p),h=e=>{var t=lS(),n=H(t),r=z(()=>(K(k),q(()=>Array.isArray(K(k))?K(k).length:0)));(function(e,t){Xo(t,!1);var n=$(t,`count`,9),r=$(t,`maxSampleCount`,9),i=$(t,`readOnly`,9),a=$(t,`onRefresh`,9);Sd(!0);var o,s=oS();Cp(H(s),{get data(){return ui}}),G(()=>{o=Ju(s,1,`jse-column-header svelte-1wgrwv3`,null,o,{"jse-readonly":i()}),cd(s,`title`,`The Columns are created by sampling ${r()} items out of ${n()}. If you're missing a column, click here to sample all of the items instead of a subset. This is slower.`)}),Y(`click`,s,()=>a()()),Z(e,s),Zo()})(n,{get count(){return K(r)},get maxSampleCount(){return K(we)},get readOnly(){return f()},onRefresh:()=>V(we,1/0)}),Z(e,t)};Q(m,e=>{K(n)&&e(h)});var g,_,y=U(s),b=H(y),x=U(y);Nu(x,1,()=>(K(r),q(()=>K(r).visibleItems)),ju,(e,t,a)=>{var o=z(()=>(K(r),q(()=>K(r).startIndex+a))),s=z(()=>(K(i),J(K(o)),q(()=>K(i).rows[K(o)]))),c=z(()=>(J(Nb),J(K(o)),J(K(s)),q(()=>Nb([String(K(o))],K(s)?.row)))),l=z(()=>(J(jm),K(k),K(ye),J(K(o)),q(()=>jm(K(k),K(ye),[String(K(o))])))),u=mS(),d=H(u);Au(d,()=>K(o),e=>{var t=uS(),n=H(t),r=U(n),i=e=>{yy(e,{get validationError(){return K(c)},get onExpand(){return jx}})};Q(r,e=>{K(c)&&e(i)}),Vu(t,(e,t)=>fx?.(e,t),()=>e=>function(e,t){Ae[t]=e.getBoundingClientRect().height}(e,K(o))),G(()=>du(n,`${K(o)??``} `)),Z(e,t)});var p=U(d);Nu(p,1,()=>K(Te),ju,(e,n,r,i)=>{var a,c=z(()=>(J(K(o)),K(n),q(()=>[String(K(o))].concat(K(n))))),u=z(()=>(J(I),K(t),K(n),q(()=>I(K(t),K(n))))),d=z(()=>(J(Qm),K(F),J(mh),J(K(c)),q(()=>Qm(K(F))&&mh(K(F).path,K(c))))),p=z(()=>(J(K(s)),q(()=>K(s)?.columns[r]))),m=z(()=>(J(Nb),J(K(c)),J(K(p)),q(()=>Nb(K(c),K(p))))),h=fS(),g=H(h),_=H(g),v=e=>{var r=z(()=>(J(lg),J(jm),K(t),J(K(l)),K(n),q(()=>lg(jm(K(t),K(l),K(n)))))),i=z(()=>(J(K(r)),q(()=>!!K(r)&&K(r).some(e=>e.active)))),a=z(()=>(J(Dt),J(K(r)),q(()=>!Dt(K(r)))));(function(e,t){Xo(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`parser`,9),a=$(t,`isSelected`,9),o=$(t,`containsSearchResult`,9),s=$(t,`containsActiveSearchResult`,9),c=$(t,`onEdit`,9);Sd(!0);var l,u=Qx(),d=H(u);G(e=>{l=Ju(u,1,`jse-inline-value svelte-1jv89ui`,null,l,{"jse-selected":a(),"jse-highlight":o(),"jse-active":s()}),du(d,e)},[()=>(J(pp),J(i()),J(r()),J(50),q(()=>pp(i().stringify(r())??``,50)))]),Y(`dblclick`,u,()=>c()(n())),Z(e,u),Zo()})(e,{get path(){return K(c)},get value(){return K(u)},get parser(){return C()},get isSelected(){return K(d)},get containsSearchResult(){return K(a)},get containsActiveSearchResult(){return K(i)},onEdit:Bt})},y=Sc(()=>(J(zd),J(K(u)),q(()=>zd(K(u))))),b=e=>{var t=z(()=>(J(jm),K(k),K(ye),J(K(c)),q(()=>jm(K(k),K(ye),K(c))?.searchResults))),n=z(()=>K(u)===void 0?``:K(u)),r=z(()=>(J(Rm),K(k),K(Ie),J(K(c)),q(()=>Rm(K(k),K(Ie),K(c))))),i=z(()=>K(d)?K(F):void 0);hy(e,{get path(){return K(c)},get value(){return K(n)},get enforceString(){return K(r)},get selection(){return K(i)},get searchResultItems(){return K(t)},get context(){return K(Be)}})};Q(_,e=>{K(y)?e(v):e(b,-1)});var x=U(_),S=e=>{var t=dS();dy(H(t),{selected:!0,onContextMenu:ot}),Z(e,t)},w=Sc(()=>(J(f()),J(K(d)),J(wh),K(F),q(()=>!f()&&K(d)&&!wh(K(F)))));Q(x,e=>{K(w)&&e(S)});var T=U(g,2),E=e=>{yy(e,{get validationError(){return K(m)},get onExpand(){return jx}})};Q(T,e=>{K(m)&&e(E)}),G(e=>{cd(h,`data-path`,e),a=Ju(g,1,`jse-value-outer svelte-1p86y3c`,null,a,{"jse-selected-value":K(d)})},[()=>(J($f),J(K(c)),q(()=>$f(K(c))))]),Z(e,h)});var m=U(p),h=e=>{Z(e,pS())};Q(m,e=>{K(n)&&e(h)}),Z(e,u)});var S,w=H(U(x));yd(o,e=>V(me,e),()=>K(me)),Vu(o,(e,t)=>fx?.(e,t),()=>Zt),rl(()=>Y(`scroll`,o,$e));var T=U(o,2),E=e=>{var t=z(()=>(K(j),q(()=>`You pasted a JSON ${Array.isArray(K(j).contents)?`array`:`object`} as text`))),n=z(()=>[{icon:Ai,text:`Paste as JSON instead`,title:`Paste the text as JSON instead of a single value`,onMouseDown:ft},{text:`Leave as is`,title:`Keep the pasted content as a single value`,onClick:vt}]);zv(e,{type:`info`,get message(){return K(t)},get actions(){return K(n)}})};Q(T,e=>{K(j)&&e(E)});var ee=U(T,2),te=e=>{var t=z(()=>[{icon:Ai,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:gt},{text:`Leave as is`,title:`Keep the pasted array`,onClick:yt}]);zv(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return K(t)}})};Q(ee,e=>{K(M)&&e(te)});var ne=U(ee,2),re=e=>{var t=z(()=>f()?[]:[{icon:Mi,text:`Ok`,title:`Accept the repaired document`,onClick:tt},{icon:Ei,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:bt}]);zv(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return K(t)},onClose:Qe})};Q(ne,e=>{K(Re)&&e(re)}),Kv(U(ne,2),{get validationErrors(){return K(He)},selectError:Rt}),G(()=>{g=Ju(y,1,`jse-table-invisible-start-section svelte-1p86y3c`,null,g,{"jse-search-box-background":K(be)}),cd(b,`colspan`,(K(Te),q(()=>K(Te).length))),_=Xu(b,``,_,{height:(K(r),q(()=>K(r).startHeight+`px`))}),cd(w,`colspan`,(K(Te),q(()=>K(Te).length))),S=Xu(w,``,S,{height:(K(r),q(()=>K(r).endHeight+`px`))})}),Z(e,t)},l=e=>{var t=gS(),n=Kc(t),r=z(()=>f()?[]:[{icon:Ei,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:bt}]);zv(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return K(r)}}),Jb(U(n,2),{get text(){return K(ve)},get json(){return K(k)},get indentation(){return ee()},get parser(){return C()}}),Z(e,t)},u=e=>{aS(e,{get text(){return K(ve)},get json(){return K(k)},get readOnly(){return f()},get parser(){return C()},openJSONEditorModal:Bt,extractPath:Ot,get onChangeMode(){return ne()},onClick:()=>{Qe()}})};Q(s,e=>{K(Ee)?e(c):K(A)&&K(ve)!==void 0&&K(ve)!==``?e(l,1):e(u,-1)}),Y(`paste`,o,Pt),Z(e,t)},sn=e=>{Z(e,vS())};Q(an,e=>{d?e(sn,-1):e(on)}),yd(tn,e=>V(pe,e),()=>K(pe));var cn=U(tn,2),ln=e=>{Zv(e,{onClose:()=>V(ke,!1)})};Q(cn,e=>{K(ke)&&e(ln)});var un=U(cn,2),mn=e=>{oy(e,kd(()=>K(ge),{onClose:()=>{var e;(e=K(ge))==null||e.onClose(),V(ge,void 0)}}))};return Q(un,e=>{K(ge)&&e(mn)}),G(()=>en=Ju(tn,1,`jse-table-mode svelte-1p86y3c`,null,en,{"no-main-menu":!y()})),Y(`mousedown`,tn,function(e){if(e.buttons===1||e.buttons===2){var t=e.target;t.isContentEditable||Qe();var n=ep(t);if(n){if(wh(K(F))&&Ah(K(k),K(F),n))return;V(F,vh(n)),e.preventDefault()}}}),Y(`keydown`,tn,function(e){var t=rp(e);if(a(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),xt(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),xt(!1)),t===`Ctrl+C`&&(e.preventDefault(),wt(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),wt(!1)),t===`Ctrl+D`&&(e.preventDefault(),kt()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),Et()),t===`Insert`&&e.preventDefault(),t===`Ctrl+A`&&e.preventDefault(),t===`Ctrl+Q`&&st(e),t===`ArrowLeft`&&(e.preventDefault(),et(),K(F))){var n=function(e,t){var{rowIndex:n,columnIndex:r}=Ab(Mh(t),e);return r>0?vh(jb({rowIndex:n,columnIndex:r-1},e)):t}(K(Te),K(F));V(F,n),it(Mh(n))}if(t===`ArrowRight`&&(e.preventDefault(),et(),K(F))){var r=function(e,t){var{rowIndex:n,columnIndex:r}=Ab(Mh(t),e);return r<e.length-1?vh(jb({rowIndex:n,columnIndex:r+1},e)):t}(K(Te),K(F));V(F,r),it(Mh(r))}if(t===`ArrowUp`&&(e.preventDefault(),et(),K(F))){var i=function(e,t){var{rowIndex:n,columnIndex:r}=Ab(Mh(t),e);return n>0?vh(jb({rowIndex:n-1,columnIndex:r},e)):t}(K(Te),K(F));V(F,i),it(Mh(i))}if(t===`ArrowDown`&&(e.preventDefault(),et(),K(F))){var o=function(e,t,n){var{rowIndex:r,columnIndex:i}=Ab(Mh(n),t);return r<e.length-1?vh(jb({rowIndex:r+1,columnIndex:i},t)):n}(K(k),K(Te),K(F));V(F,o),it(Mh(o))}if(t===`Enter`&&K(F)&&Qm(K(F))){e.preventDefault();var s=K(F).path;zd(I(K(k),s))?Bt(s):f()||V(F,L(L({},K(F)),{},{edit:!0}))}if(t.replace(/^Shift\+/,``).length===1&&K(F))return e.preventDefault(),void function(e){Nt.apply(this,arguments)}(e.key);if(t===`Ctrl+Enter`&&Qm(K(F))){e.preventDefault();var c=I(K(k),K(F).path);qd(c)&&window.open(String(c),`_blank`)}t===`Escape`&&K(F)&&(e.preventDefault(),V(F,void 0)),t===`Ctrl+F`&&(e.preventDefault(),qt(!1)),t===`Ctrl+H`&&(e.preventDefault(),qt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),Yt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),Xt())}),Y(`contextmenu`,tn,st),Z(e,$t),_d(t,`validate`,Ge),_d(t,`patch`,Ke),_d(t,`focus`,Qe),_d(t,`acceptAutoRepair`,tt),_d(t,`scrollTo`,nt),_d(t,`findElement`,at),_d(t,`openTransformModal`,zt),Zo(Qt)}function xS(e,t){Xo(t,!1);var n=$(t,`content`,8),r=$(t,`selection`,12),i=$(t,`readOnly`,8),a=$(t,`indentation`,8),o=$(t,`tabSize`,8),s=$(t,`truncateTextSize`,8),c=$(t,`externalMode`,8),l=$(t,`mainMenuBar`,8),u=$(t,`navigationBar`,8),d=$(t,`statusBar`,8),f=$(t,`askToFormat`,8),p=$(t,`escapeControlCharacters`,8),m=$(t,`escapeUnicodeCharacters`,8),h=$(t,`maxDocumentSizeTextMode`,8),g=$(t,`flattenColumns`,8),_=$(t,`parser`,8),v=$(t,`parseMemoizeOne`,8),y=$(t,`validator`,8),b=$(t,`validationParser`,8),x=$(t,`pathParser`,8),S=$(t,`insideModal`,8),C=$(t,`onChange`,8),w=$(t,`onChangeMode`,8),T=$(t,`onSelect`,8),E=$(t,`onRenderValue`,8),ee=$(t,`onClassName`,8),te=$(t,`onRenderMenu`,8),ne=$(t,`onRenderContextMenu`,8),re=$(t,`onError`,8),ie=$(t,`onFocus`,8),ae=$(t,`onBlur`,8),oe=$(t,`onSortModal`,8),D=$(t,`onTransformModal`,8),ce=$(t,`onJSONEditorModal`,8),le=B(),O=B(),ue=B(),de=Ad(`jsoneditor:JSONEditorRoot`),fe=B(Sx({onChange:e=>V(fe,e)}).get()),pe=B(c());function me(e){if(gm(e)){V(pe,e.undo.mode);var t=K(fe).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n-1];de(`handleUndo`,{index:n,item:e,items:t,prevItem:i}),i&&r(i.redo.selection),w()(K(pe))}}function he(e){if(gm(e)){V(pe,e.redo.mode);var t=K(fe).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n+1];de(`handleRedo`,{index:n,item:e,items:t,nextItem:i}),i&&r(i.undo.selection),w()(K(pe))}}var ge=B(),_e={type:`separator`},k=B(),ve=B();function A(e){if(K(le))return K(le).patch(e);if(K(O))return K(O).patch(e);if(K(ue))return K(ue).patch(e);throw Error(`Method patch is not available in mode "${K(pe)}"`)}function j(e,t){if(K(le))return K(le).expand(e,t);if(K(ue))return K(ue).expand(e,t);throw Error(`Method expand is not available in mode "${K(pe)}"`)}function M(e,t){if(K(le))return K(le).collapse(e,t);if(K(ue))return K(ue).collapse(e,t);throw Error(`Method collapse is not available in mode "${K(pe)}"`)}function ye(e){if(K(ue))K(ue).openTransformModal(e);else if(K(le))K(le).openTransformModal(e);else{if(!K(O))throw Error(`Method transform is not available in mode "${K(pe)}"`);K(O).openTransformModal(e)}}function be(){if(K(ue))return K(ue).validate();if(K(le))return K(le).validate();if(K(O))return K(O).validate();throw Error(`Method validate is not available in mode "${K(pe)}"`)}function N(){return K(le)?K(le).acceptAutoRepair():n()}function P(e){if(K(le))return K(le).scrollTo(e);if(K(O))return K(O).scrollTo(e);throw Error(`Method scrollTo is not available in mode "${K(pe)}"`)}function xe(e){if(K(le))return K(le).findElement(e);if(K(O))return K(O).findElement(e);throw Error(`Method findElement is not available in mode "${K(pe)}"`)}function Se(){K(ue)?K(ue).focus():K(le)?K(le).focus():K(O)&&K(O).focus()}function Ce(){return we.apply(this,arguments)}function we(){return(we=Wa(function*(){K(ue)&&(yield K(ue).refresh())})).apply(this,arguments)}W(()=>J(c()),()=>{(function(e){if(e!==K(pe)){var t={type:`mode`,undo:{mode:K(pe),selection:void 0},redo:{mode:e,selection:void 0}};K(pe)===`text`&&K(ue)&&K(ue).flush(),de(`add history item`,t),K(fe).add(t),V(pe,e)}})(c())}),W(()=>(K(pe),J(w())),()=>{V(ge,[{type:`button`,text:`text`,title:`Switch to text mode (current mode: ${K(pe)})`,className:`jse-group-button jse-first`+(K(pe)===Tf.text?` jse-selected`:``),onClick:()=>w()(Tf.text)},{type:`button`,text:`tree`,title:`Switch to tree mode (current mode: ${K(pe)})`,className:`jse-group-button `+(K(pe)===Tf.tree?` jse-selected`:``),onClick:()=>w()(Tf.tree)},{type:`button`,text:`table`,title:`Switch to table mode (current mode: ${K(pe)})`,className:`jse-group-button jse-last`+(K(pe)===Tf.table?` jse-selected`:``),onClick:()=>w()(Tf.table)}])}),W(()=>(K(ge),J(te()),K(pe),J(S()),J(i())),()=>{V(k,e=>{var t=Zp(e[0])?K(ge).concat(e):K(ge).concat(_e,e),n=se(t);return te()(t,{mode:K(pe),modal:S(),readOnly:i()})||n})}),W(()=>(J(ne()),K(pe),J(S()),J(i()),J(r())),()=>{V(ve,e=>{var t=se(e);return ne()(e,{mode:K(pe),modal:S(),readOnly:i(),selection:r()})??(!i()&&t)})}),il();var Te={patch:A,expand:j,collapse:M,transform:ye,validate:be,acceptAutoRepair:N,scrollTo:P,findElement:xe,focus:Se,refresh:Ce};Sd();var Ee=ou(),De=Kc(Ee),Oe=e=>{yd(Zx(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(fe)},get readOnly(){return i()},get indentation(){return a()},get tabSize(){return o()},get mainMenuBar(){return l()},get statusBar(){return d()},get askToFormat(){return f()},get escapeUnicodeCharacters(){return m()},get maxDocumentSize(){return h()},get parser(){return _()},get validator(){return y()},get validationParser(){return b()},get onChange(){return C()},get onChangeMode(){return w()},get onSelect(){return T()},onUndo:me,onRedo:he,get onError(){return re()},get onFocus(){return ie()},get onBlur(){return ae()},get onRenderMenu(){return K(k)},get onSortModal(){return oe()},get onTransformModal(){return D()},$$legacy:!0}),e=>V(ue,e),()=>K(ue))},ke=Sc(()=>(K(pe),J(Tf),q(()=>K(pe)===Tf.text||String(K(pe))===`code`))),Ae=e=>{yd(bS(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(fe)},get readOnly(){return i()},get truncateTextSize(){return s()},get mainMenuBar(){return l()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return g()},get parser(){return _()},get parseMemoizeOne(){return v()},get validator(){return y()},get validationParser(){return b()},get indentation(){return a()},get onChange(){return C()},get onChangeMode(){return w()},get onSelect(){return T()},onUndo:me,onRedo:he,get onRenderValue(){return E()},get onFocus(){return ie()},get onBlur(){return ae()},get onRenderMenu(){return K(k)},get onRenderContextMenu(){return K(ve)},get onSortModal(){return oe()},get onTransformModal(){return D()},get onJSONEditorModal(){return ce()},$$legacy:!0}),e=>V(O,e),()=>K(O))},je=e=>{yd(yx(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(fe)},get readOnly(){return i()},get indentation(){return a()},get truncateTextSize(){return s()},get mainMenuBar(){return l()},get navigationBar(){return u()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get parser(){return _()},get parseMemoizeOne(){return v()},get validator(){return y()},get validationParser(){return b()},get pathParser(){return x()},get onError(){return re()},get onChange(){return C()},get onChangeMode(){return w()},get onSelect(){return T()},onUndo:me,onRedo:he,get onRenderValue(){return E()},get onClassName(){return ee()},get onFocus(){return ie()},get onBlur(){return ae()},get onRenderMenu(){return K(k)},get onRenderContextMenu(){return K(ve)},get onSortModal(){return oe()},get onTransformModal(){return D()},get onJSONEditorModal(){return ce()},$$legacy:!0}),e=>V(le,e),()=>K(le))};return Q(De,e=>{K(ke)?e(Oe):(K(pe),J(Tf),q(()=>K(pe)===Tf.table)?e(Ae,1):e(je,-1))}),Z(e,Ee),_d(t,`patch`,A),_d(t,`expand`,j),_d(t,`collapse`,M),_d(t,`transform`,ye),_d(t,`validate`,be),_d(t,`acceptAutoRepair`,N),_d(t,`scrollTo`,P),_d(t,`findElement`,xe),_d(t,`focus`,Se),_d(t,`refresh`,Ce),Zo(Te)}op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var SS=X(`<div class="jse-error svelte-t4zsk3"> </div>`),CS=X(`<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>`),wS=X(`<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>`),TS=X(`<button type="button" class="jse-primary svelte-t4zsk3">Close</button>`),ES=X(`<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>`,1),DS=X(`<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>`),OS={};op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var kS=wd(()=>OS),AS=X(`<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>`),jS=X(`<div class="jse-error svelte-lwzlls"> </div>`),MS=X(`<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>`,1);op(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var NS=X(`<div role="none"><!></div> <!> <!> <!>`,1);function PS(e,t){Xo(t,!1);var n=B(void 0,!0),r=Ad(`jsoneditor:JSONEditor`),i={text:``},a=void 0,o=!1,s=Tf.tree,l=!0,u=!0,d=!0,f=!0,p=!1,m=!1,h=10485760,g=!0,v=JSON,y=void 0,b=JSON,x={parse:wg,stringify:Cg},S=[hp],C=S[0].id,w=jx,T=void 0,E=void 0,ee=Sg,te=jx,ne=jx,re=jx,ie=jx,ae=e=>{console.error(e),alert(e.toString())},oe=jx,D=jx,ce=$(t,`content`,13,i),le=$(t,`selection`,13,a),O=$(t,`readOnly`,13,o),ue=$(t,`indentation`,13,2),de=$(t,`tabSize`,13,4),fe=$(t,`truncateTextSize`,13,1e3),pe=$(t,`mode`,13,s),me=$(t,`mainMenuBar`,13,l),he=$(t,`navigationBar`,13,u),ge=$(t,`statusBar`,13,d),_e=$(t,`askToFormat`,13,f),k=$(t,`escapeControlCharacters`,13,p),ve=$(t,`escapeUnicodeCharacters`,13,m),A=$(t,`maxDocumentSizeTextMode`,13,h),j=$(t,`flattenColumns`,13,g),M=$(t,`parser`,13,v),ye=$(t,`validator`,13,y),be=$(t,`validationParser`,13,b),N=$(t,`pathParser`,13,x),P=$(t,`queryLanguages`,13,S),xe=$(t,`queryLanguageId`,13,C),Se=$(t,`onChangeQueryLanguage`,13,w),Ce=$(t,`onChange`,13,T),we=$(t,`onSelect`,13,E),Te=$(t,`onRenderValue`,13,ee),Ee=$(t,`onClassName`,13,te),De=$(t,`onRenderMenu`,13,ne),Oe=$(t,`onRenderContextMenu`,13,re),ke=$(t,`onChangeMode`,13,ie),Ae=$(t,`onError`,13,ae),je=$(t,`onFocus`,13,oe),Me=$(t,`onBlur`,13,D),Ne=B(Pd(),!0),Pe=B(!1,!0),Fe=B(void 0,!0),Ie=B(void 0,!0),F=B(void 0,!0),Le=B(void 0,!0),Re=B(M(),!0);function ze(){return ce()}function Be(e){r(`set`);var t=ff(e);if(t)throw Error(t);V(Ne,Pd()),ce(e),Hs()}function Ve(e){r(`update`);var t=ff(e);if(t)throw Error(t);ce(e),Hs()}function He(e){var t=K(Fe).patch(e);return Hs(),t}function Ue(e){le(e),Hs()}function We(e,t){K(Fe).expand(e,t),Hs()}function Ge(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];K(Fe).collapse(e,t),Hs()}function Ke(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};K(Fe).transform(e),Hs()}function qe(){return K(Fe).validate()}function Je(){var e=K(Fe).acceptAutoRepair();return Hs(),e}function Ye(e){return Xe.apply(this,arguments)}function Xe(){return(Xe=Wa(function*(e){yield K(Fe).scrollTo(e)})).apply(this,arguments)}function Ze(e){return K(Fe).findElement(e)}function Qe(){K(Fe).focus(),Hs()}function $e(){return et.apply(this,arguments)}function et(){return(et=Wa(function*(){yield K(Fe).refresh()})).apply(this,arguments)}function tt(e){for(var t of Object.keys(e))switch(t){case`content`:ce(e[t]??i);break;case`selection`:le(e[t]??a);break;case`readOnly`:O(e[t]??o);break;case`indentation`:ue(e[t]??2);break;case`tabSize`:de(e[t]??4);break;case`truncateTextSize`:fe(e[t]??1e3);break;case`mode`:pe(e[t]??s);break;case`mainMenuBar`:me(e[t]??l);break;case`navigationBar`:he(e[t]??u);break;case`statusBar`:ge(e[t]??d);break;case`askToFormat`:_e(e[t]??f);break;case`escapeControlCharacters`:k(e[t]??p);break;case`escapeUnicodeCharacters`:ve(e[t]??m);break;case`maxDocumentSizeTextMode`:A(e[t]??h);break;case`flattenColumns`:j(e[t]??g);break;case`parser`:M(e[t]??v);break;case`validator`:ye(e[t]??y);break;case`validationParser`:be(e[t]??b);break;case`pathParser`:N(e[t]??x);break;case`queryLanguages`:P(e[t]??S);break;case`queryLanguageId`:xe(e[t]??C);break;case`onChangeQueryLanguage`:Se(e[t]??w);break;case`onChange`:Ce(e[t]??T);break;case`onRenderValue`:Te(e[t]??ee);break;case`onClassName`:Ee(e[t]??te);break;case`onRenderMenu`:De(e[t]??ne);break;case`onRenderContextMenu`:Oe(e[t]??re);break;case`onChangeMode`:ke(e[t]??ie);break;case`onSelect`:we(e[t]??E);break;case`onError`:Ae(e[t]??ae);break;case`onFocus`:je(e[t]??oe);break;case`onBlur`:Me(e[t]??D);break;default:n(t)}function n(e){r(`Unknown property "${e}"`)}P().some(e=>e.id===xe())||xe(P()[0].id),Hs()}function nt(){return rt.apply(this,arguments)}function rt(){return(rt=Wa(function*(){throw Error(`class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.`)})).apply(this,arguments)}function it(e,t,n){ce(e),Ce()&&Ce()(e,t,n)}function at(e){le(e),we()&&we()(se(e))}function ot(){V(Pe,!0),je()&&je()()}function st(){V(Pe,!1),Me()&&Me()()}function ct(e){return lt.apply(this,arguments)}function lt(){return(lt=Wa(function*(e){pe()!==e&&(pe(e),Hs(),Qe(),ke()(e))})).apply(this,arguments)}function ut(e){r(`handleChangeQueryLanguage`,e),xe(e),Se()(e)}function dt(e){var{id:t,json:r,rootPath:i,onTransform:a,onClose:o}=e;O()||V(Le,{id:t,json:r,rootPath:i,indentation:ue(),truncateTextSize:fe(),escapeControlCharacters:k(),escapeUnicodeCharacters:ve(),parser:M(),parseMemoizeOne:K(n),validationParser:be(),pathParser:N(),queryLanguages:P(),queryLanguageId:xe(),onChangeQueryLanguage:ut,onRenderValue:Te(),onRenderMenu:e=>De()(e,{mode:pe(),modal:!0,readOnly:O()}),onRenderContextMenu:e=>Oe()(e,{mode:pe(),modal:!0,readOnly:O(),selection:le()}),onClassName:Ee(),onTransform:a,onClose:o})}function ft(e){O()||V(F,e)}function pt(e){var{content:t,path:n,onPatch:i,onClose:a}=e;r(`onJSONEditorModal`,{content:t,path:n}),V(Ie,{content:t,path:n,onPatch:i,readOnly:O(),indentation:ue(),tabSize:de(),truncateTextSize:fe(),mainMenuBar:me(),navigationBar:he(),statusBar:ge(),askToFormat:_e(),escapeControlCharacters:k(),escapeUnicodeCharacters:ve(),maxDocumentSizeTextMode:A(),flattenColumns:j(),parser:M(),validator:void 0,validationParser:be(),pathParser:N(),onRenderValue:Te(),onClassName:Ee(),onRenderMenu:De(),onRenderContextMenu:Oe(),onSortModal:ft,onTransformModal:dt,onClose:a})}function mt(e){e.stopPropagation()}W(()=>(J(M()),K(Re),J(ce()),Pd),()=>{if(!Cf(M(),K(Re))){if(r(`parser changed, recreate editor`),mf(ce())){var e=K(Re).stringify(ce().json);ce({json:e===void 0?void 0:M().parse(e)})}V(Re,M()),V(Ne,Pd())}}),W(()=>J(ce()),()=>{var e=ff(ce());e&&console.error(`Error: `+e)}),W(()=>J(le()),()=>{le()===null&&console.warn(`selection is invalid: it is null but should be undefined`)}),W(()=>J(M()),()=>{V(n,_(M().parse))}),W(()=>J(pe()),()=>{r(`mode changed to`,pe())}),il();var ht={get:ze,set:Be,update:Ve,patch:He,select:Ue,expand:We,collapse:Ge,transform:Ke,validate:qe,acceptAutoRepair:Je,scrollTo:Ye,findElement:Ze,focus:Qe,refresh:$e,updateProps:tt,destroy:nt};return Sd(!0),dp(e,{children:(e,t)=>{var r,i=NS(),a=Kc(i);Au(H(a),()=>K(Ne),e=>{yd(xS(e,{get externalMode(){return pe()},get content(){return ce()},get selection(){return le()},get readOnly(){return O()},get indentation(){return ue()},get tabSize(){return de()},get truncateTextSize(){return fe()},get statusBar(){return ge()},get askToFormat(){return _e()},get mainMenuBar(){return me()},get navigationBar(){return he()},get maxDocumentSizeTextMode(){return A()},get escapeControlCharacters(){return k()},get escapeUnicodeCharacters(){return ve()},get flattenColumns(){return j()},get parser(){return M()},get parseMemoizeOne(){return K(n)},get validator(){return ye()},get validationParser(){return be()},get pathParser(){return N()},insideModal:!1,get onError(){return Ae()},onChange:it,onChangeMode:ct,onSelect:at,get onRenderValue(){return Te()},get onClassName(){return Ee()},onFocus:ot,onBlur:st,get onRenderMenu(){return De()},get onRenderContextMenu(){return Oe()},onSortModal:ft,onTransformModal:dt,onJSONEditorModal:pt,$$legacy:!0}),e=>V(Fe,e),()=>K(Fe))});var o=U(a,2),s=e=>{(function(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=Ad(`jsoneditor:SortModal`),s=$(t,`id`,9),c=$(t,`json`,9),l=$(t,`rootPath`,9),u=$(t,`onSort`,9),d=$(t,`onClose`,9),f={value:1,label:`ascending`},p=[f,{value:-1,label:`descending`}],m=`${s()}:${pn(l())}`,h=B(kS()[m]?.selectedProperty,!0),g=B(kS()[m]?.selectedDirection||f,!0),_=B(void 0,!0);function v(){try{var e;V(_,void 0);var t=K(h)?.value||((e=K(a))==null||(e=e[0])==null?void 0:e.value)||[],n=K(g)?.value,r=ib(c(),l(),t,n);u()!==void 0&&l()!==void 0&&u()({operations:r,rootPath:l(),itemPath:t,direction:n}),d()()}catch(e){V(_,String(e))}}function y(e){e.focus()}W(()=>(J(c()),J(l())),()=>{V(n,I(c(),l()))}),W(()=>K(n),()=>{V(r,Array.isArray(K(n)))}),W(()=>(K(r),K(n)),()=>{V(i,K(r)?Zd(K(n)):void 0)}),W(()=>(K(i),Tg),()=>{V(a,K(i)?K(i).map(Tg):void 0)}),W(()=>(kS(),K(h),K(g)),()=>{kS(kS()[m]={selectedProperty:K(h),selectedDirection:K(g)}),o(`store state in memory`,m,kS()[m])}),il(),Sd(!0),Yv(e,{get onClose(){return d()},className:`jse-sort-modal`,children:(e,t)=>{var n=MS(),i=Kc(n),o=z(()=>K(r)?`Sort array items`:`Sort object keys`);Cv(i,{get title(){return K(o)},get onClose(){return d()}});var s=H(U(i,2)),c=H(U(H(s))),u=H(U(H(c))),f=U(c),m=e=>{var t=AS();hv(H(U(H(t))),{showChevron:!0,get items(){return K(a)},get value(){return K(h)},set value(e){V(h,e)},$$legacy:!0}),Z(e,t)};Q(f,e=>{K(r),K(a),q(()=>K(r)&&K(a)&&K(a)?.length>1)&&e(m)}),hv(H(U(H(U(f)))),{showChevron:!0,clearable:!1,get items(){return p},get value(){return K(g)},set value(e){V(g,e)},$$legacy:!0});var b=U(s,2),x=H(b),S=e=>{var t=jS(),n=H(t);G(()=>du(n,K(_))),Z(e,t)};Q(x,e=>{K(_)&&e(S)});var C=H(U(b,2));rl(()=>Y(`click`,C,v)),Vu(C,e=>y?.(e)),G(e=>{sd(u,e),C.disabled=(K(r),K(a),K(h),q(()=>!!(K(r)&&K(a)&&K(a)?.length>1)&&!K(h)))},[()=>(J(l()),J(Dt),J(Cg),q(()=>l()&&!Dt(l())?Cg(l()):`(document root)`))]),Z(e,n)},$$slots:{default:!0}}),Zo()})(e,kd(()=>K(F),{onClose:()=>{var e;(e=K(F))==null||e.onClose(),V(F,void 0)}}))};Q(o,e=>{K(F)&&e(s)});var l=U(o,2),u=e=>{Ax(e,kd(()=>K(Le),{onClose:()=>{var e;(e=K(Le))==null||e.onClose(),V(Le,void 0)}}))};Q(l,e=>{K(Le)&&e(u)});var d=U(l,2),f=e=>{(function(e,t){Xo(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=Ad(`jsoneditor:JSONEditorModal`),s=$(t,`content`,9),l=$(t,`path`,9),u=$(t,`onPatch`,9),d=$(t,`readOnly`,9),f=$(t,`indentation`,9),p=$(t,`tabSize`,9),m=$(t,`truncateTextSize`,9),h=$(t,`mainMenuBar`,9),g=$(t,`navigationBar`,9),v=$(t,`statusBar`,9),y=$(t,`askToFormat`,9),b=$(t,`escapeControlCharacters`,9),x=$(t,`escapeUnicodeCharacters`,9),S=$(t,`maxDocumentSizeTextMode`,9),C=$(t,`flattenColumns`,9),w=$(t,`parser`,9),T=$(t,`validator`,9),E=$(t,`validationParser`,9),ee=$(t,`pathParser`,9),te=$(t,`onRenderValue`,9),ne=$(t,`onClassName`,9),re=$(t,`onRenderMenu`,9),ie=$(t,`onRenderContextMenu`,9),ae=$(t,`onSortModal`,9),oe=$(t,`onTransformModal`,9),se=$(t,`onClose`,9),D=B(void 0,!0),ce=B(void 0,!0),le={mode:de(s()),content:s(),selection:void 0,relativePath:l()},O=B([le],!0),ue=B(void 0,!0);function de(e){return mf(e)&&Wt(e.json)?Tf.table:Tf.tree}function fe(){var e=c(K(O))?.selection;th(e)&&K(D).scrollTo(Mh(e))}function pe(){if(o(`handleApply`),!d())try{V(ue,void 0);var e=K(n).relativePath,t=K(n).content,r=[{op:`replace`,path:pn(e),value:gf(t,w()).json}];if(K(O).length>1){var i=gf(K(O)[K(O).length-2].content,w()).json,a={json:gn(i,r)},s=L(L({},K(O)[K(O).length-2]||le),{},{content:a});V(O,[...K(O).slice(0,K(O).length-2),s]),Hs(),fe()}else u()(r),se()()}catch(e){V(ue,String(e))}}function me(){var e;o(`handleClose`),K(O).length>1?(V(O,Ct(K(O))),Hs(),(e=K(D))==null||e.focus(),fe(),V(ue,void 0)):se()()}function he(e){o(`handleChange`,e),k(t=>L(L({},t),{},{content:e}))}function ge(e){o(`handleChangeSelection`,e),k(t=>L(L({},t),{},{selection:e}))}function _e(e){o(`handleChangeMode`,e),k(t=>L(L({},t),{},{mode:e}))}function k(e){var t=e(c(K(O)));V(O,[...Ct(K(O)),t])}function ve(e){V(ue,e.toString()),console.error(e)}function A(e){var t,{content:n,path:r}=e;o(`handleJSONEditorModal`,{content:n,path:r});var i={mode:de(n),content:n,selection:void 0,relativePath:r};V(O,[...K(O),i]),Hs(),(t=K(D))==null||t.focus()}function j(e){e.focus()}Cu(()=>{var e;(e=K(D))==null||e.focus()}),W(()=>K(O),()=>{V(n,c(K(O))||le)}),W(()=>K(O),()=>{V(r,K(O).flatMap(e=>e.relativePath))}),W(()=>(K(r),Cg),()=>{V(i,Dt(K(r))?`(document root)`:Cg(K(r)))}),W(()=>J(w()),()=>{V(a,_(w().parse))}),il(),Sd(!0),Yv(e,{onClose:me,className:`jse-jsoneditor-modal`,get fullscreen(){return K(ce)},children:(e,t)=>{var r=DS();dp(H(r),{children:(e,t)=>{var r=ES(),o=Kc(r),s=z(()=>(K(O),q(()=>K(O).length>1?` (${K(O).length})`:``)));Cv(o,{get title(){return`Edit nested content ${K(s)??``}`},fullScreenButton:!0,onClose:me,get fullscreen(){return K(ce)},set fullscreen(e){V(ce,e)},$$legacy:!0});var c=U(H(U(o,2)),2),l=U(c,4);yd(xS(H(l),{get externalMode(){return K(n),q(()=>K(n).mode)},get content(){return K(n),q(()=>K(n).content)},get selection(){return K(n),q(()=>K(n).selection)},get readOnly(){return d()},get indentation(){return f()},get tabSize(){return p()},get truncateTextSize(){return m()},get statusBar(){return v()},get askToFormat(){return y()},get mainMenuBar(){return h()},get navigationBar(){return g()},get escapeControlCharacters(){return b()},get escapeUnicodeCharacters(){return x()},get maxDocumentSizeTextMode(){return S()},get flattenColumns(){return C()},get parser(){return w()},get parseMemoizeOne(){return K(a)},get validator(){return T()},get validationParser(){return E()},get pathParser(){return ee()},insideModal:!0,onError:ve,onChange:he,onChangeMode:_e,onSelect:ge,get onRenderValue(){return te()},get onClassName(){return ne()},get onFocus(){return jx},get onBlur(){return jx},get onRenderMenu(){return re()},get onRenderContextMenu(){return ie()},get onSortModal(){return ae()},get onTransformModal(){return oe()},onJSONEditorModal:A,$$legacy:!0}),e=>V(D,e),()=>K(D));var u=H(U(l,2)),_=e=>{var t=SS(),n=H(t);G(()=>du(n,K(ue))),Z(e,t)};Q(u,e=>{K(ue)&&e(_)});var se=U(u,2),le=e=>{var t=CS();Cp(H(t),{get data(){return vi}}),Y(`click`,t,me),Z(e,t)};Q(se,e=>{K(O),q(()=>K(O).length>1)&&e(le)});var de=U(se,2),fe=e=>{var t=wS();rl(()=>Y(`click`,t,pe)),Vu(t,e=>j?.(e)),Z(e,t)},k=e=>{var t=TS();Y(`click`,t,me),Z(e,t)};Q(de,e=>{d()?e(k,-1):e(fe)}),G(()=>sd(c,K(i))),Z(e,r)},$$slots:{default:!0}}),Z(e,r)},$$slots:{default:!0}}),Zo()})(e,kd(()=>K(Ie),{onClose:()=>{var e;(e=K(Ie))==null||e.onClose(),V(Ie,void 0)}}))};Q(d,e=>{K(Ie)&&e(f)}),G(()=>r=Ju(a,1,`jse-main svelte-1l55585`,null,r,{"jse-focus":K(Pe)})),Y(`keydown`,a,mt),Z(e,i)},$$slots:{default:!0}}),_d(t,`get`,ze),_d(t,`set`,Be),_d(t,`update`,Ve),_d(t,`patch`,He),_d(t,`select`,Ue),_d(t,`expand`,We),_d(t,`collapse`,Ge),_d(t,`transform`,Ke),_d(t,`validate`,qe),_d(t,`acceptAutoRepair`,Je),_d(t,`scrollTo`,Ye),_d(t,`findElement`,Ze),_d(t,`focus`,Qe),_d(t,`refresh`,$e),_d(t,`updateProps`,tt),_d(t,`destroy`,nt),Zo(ht)}function FS(e){var{target:t,props:n}=e,r=fu(PS,{target:t,props:n});return r.destroy=Wa(function*(){return function(e,t){var n=mu.get(e);return n?(mu.delete(e),n(t)):Promise.resolve()}(r)}),Hs(),r}export{mf as n,FS as r,Tf as t};