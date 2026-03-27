import{i as e,t}from"./chunk-DseTPa7n.js";import{A as n,N as r}from"./css-Dnva1Wb9.js";import{_ as i,c as a,g as o,h as s}from"./_getPrototype-CshsP0t-.js";import{t as c}from"./toInteger-Ok9tk-0B.js";import{_ as l,b as u}from"./use-form-item-7S73dYsb.js";import{_ as d,f,g as p,h as m,l as h,m as g,n as _,u as v,v as y,y as b}from"./_Uint8Array-BvokRuwn.js";import{t as x}from"./_baseClone-DfUCAval.js";import{t as S}from"./_baseRest-DrJycGCR.js";import{t as C}from"./_isIterateeCall-B09a8Uw7.js";import{n as w,t as T}from"./last-DXnZCoYt.js";import{t as E}from"./cloneDeep-D25QIx_V.js";import{t as D}from"./isEqual-Zapd6qAV.js";import{t as ee}from"./_baseIteratee-FtsI7Euh.js";import{n as te,r as ne,t as re}from"./_baseEach-B2KccANW.js";import{t as ie}from"./debounce-4Wg3DT3P.js";import{t as O}from"./_castFunction-DZcrdWTQ.js";import{n as ae,t as k}from"./map-CS6gjNss.js";import{t as A}from"./range-CHhvxCYz.js";import{t as oe}from"./memoize-one.esm-2CKf1xws.js";import{S as se,c as ce}from"./index-BCG3RyRq.js";import{$ as le,A as ue,B as de,C as fe,D as pe,E as me,F as he,G as j,H as ge,I as M,L as N,N as _e,Q as ve,R as ye,T as P,U as F,V as be,W as xe,X as Se,Y as Ce,Z as we,_ as Te,_t as Ee,a as De,at as Oe,b as ke,c as Ae,ct as je,dt as Me,et as Ne,f as Pe,ft as Fe,g as I,gt as Ie,h as Le,ht as Re,it as ze,k as Be,l as Ve,lt as He,mt as Ue,nt as We,o as Ge,ot as Ke,pt as qe,q as Je,r as Ye,rt as Xe,s as Ze,st as Qe,tt as $e,u as et,v as tt,vt as nt,w as rt,y as it,yt as at,z as ot}from"./dist-C73UvG06.js";function st(){}var ct=1,lt=4;function ut(e,t){return t=typeof t==`function`?t:void 0,x(e,ct|lt,t)}function dt(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function ft(e,t,n,r){return re(e,function(e,i,a){t(r,e,n(e),a)}),r}function pt(e,t){return function(n,r){var i=s(n)?dt:ft,a=t?t():{};return i(n,e,ee(r,2),a)}}function mt(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}var ht=se(!0);function gt(e,t){return e&&ht(e,t,h)}var _t=te(gt,!0);function vt(e,t){return(s(e)?mt:_t)(e,O(t))}function yt(e){return e&&e.length?e[0]:void 0}var bt=Object.prototype.hasOwnProperty,xt=pt(function(e,t,n){bt.call(e,n)?e[n].push(t):a(e,n,[t])});function St(e){return e!=null&&e.length?w(e,0,-1):[]}var Ct=`[object Map]`,wt=`[object Set]`,Tt=Object.prototype.hasOwnProperty;function Et(e){if(e==null)return!0;if(b(e)&&(s(e)||typeof e==`string`||typeof e.splice==`function`||m(e)||f(e)||p(e)))return!e.length;var t=_(e);if(t==Ct||t==wt)return!e.size;if(y(e))return!v(e).length;for(var n in e)if(Tt.call(e,n))return!1;return!0}function Dt(e,t){return e<t}function Ot(e,t){var n={};return t=ee(t,3),ne(e,function(e,r,i){a(n,r,t(e,r,i))}),n}function kt(e,t,n){for(var r=-1,a=e.length;++r<a;){var o=e[r],s=t(o);if(s!=null&&(c===void 0?s===s&&!i(s):n(s,c)))var c=s,l=o}return l}function At(e,t){return e&&e.length?kt(e,ee(t,2),Dt):void 0}function jt(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function Mt(e,t){if(e!==t){var n=e!==void 0,r=e===null,a=e===e,o=i(e),s=t!==void 0,c=t===null,l=t===t,u=i(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||r&&s&&l||!n&&l||!a)return 1;if(!r&&!o&&!u&&e<t||u&&n&&a&&!r&&!o||c&&n&&a||!s&&a||!l)return-1}return 0}function Nt(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=Mt(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Pt(e,t,r){t=t.length?o(t,function(e){return s(e)?function(t){return n(t,e.length===1?e[0]:e)}:e}):[u];var i=-1;return t=o(t,g(ee)),jt(ae(e,function(e,n,r){return{criteria:o(t,function(t){return t(e)}),index:++i,value:e}}),function(e,t){return Nt(e,t,r)})}var Ft=pt(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),It=S(function(e,t){if(e==null)return[];var n=t.length;return n>1&&C(e,t[0],t[1])?t=[]:n>2&&C(t[0],t[1],t[2])&&(t=[t[0]]),Pt(e,l(t,1),[])}),Lt=9007199254740991,Rt=4294967295,zt=Math.min;function Bt(e,t){if(e=c(e),e<1||e>Lt)return[];var n=Rt,r=zt(e,Rt);t=O(t),e-=Rt;for(var i=d(r,t);++n<e;)t(n);return i}var Vt=0;function Ht(e){var t=++Vt;return r(e)+t}function Ut(e){return Array.isArray(e)}function Wt(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function Gt(e){return e&&typeof e==`object`?e.op===`add`:!1}function Kt(e){return e&&typeof e==`object`?e.op===`remove`:!1}function qt(e){return e&&typeof e==`object`?e.op===`replace`:!1}function Jt(e){return e&&typeof e==`object`?e.op===`copy`:!1}function Yt(e){return e&&typeof e==`object`?e.op===`move`:!1}function Xt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Zt(e,t){return e===t}function Qt(e){return e.slice(0,e.length-1)}function $t(e){return e[e.length-1]}function en(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zt;if(e.length<t.length)return!1;for(let r=0;r<t.length;r++)if(!n(e[r],t[r]))return!1;return!0}function tn(e){return typeof e==`object`&&!!e}function nn(e){if(Ut(e)){let t=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}if(Wt(e)){let t={...e};return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}return e}function rn(e,t,n){if(e[t]===n)return e;let r=nn(e);return r[t]=n,r}function L(e,t){let n=e,r=0;for(;r<t.length;)n=Wt(n)?n[t[r]]:Ut(n)?n[Number.parseInt(t[r])]:void 0,r++;return n}function an(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return n;let i=t[0],a=an(e?e[i]:void 0,t.slice(1),n,r);if(Wt(e)||Ut(e))return rn(e,i,a);if(r){let e=on.test(i)?[]:{};return e[i]=a,e}throw Error(`Path does not exist`)}var on=/^\d+$/;function sn(e,t,n){if(t.length===0)return n(e);if(!tn(e))throw Error(`Path doesn't exist`);let r=t[0];return rn(e,r,sn(e[r],t.slice(1),n))}function cn(e,t){if(t.length===0)return e;if(!tn(e))throw Error(`Path does not exist`);if(t.length===1){let n=t[0];if(!(n in e))return e;let r=nn(e);return Ut(r)&&r.splice(Number.parseInt(n),1),Wt(r)&&delete r[n],r}let n=t[0];return rn(e,n,cn(e[n],t.slice(1)))}function ln(e,t,n){let r=t.slice(0,t.length-1),i=t[t.length-1];return sn(e,r,e=>{if(!Array.isArray(e))throw TypeError(`Array expected at path ${JSON.stringify(r)}`);let t=nn(e);return t.splice(Number.parseInt(i),0,n),t})}function un(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:un(e[t[0]],t.slice(1))}function dn(e){let t=e.split(`/`);return t.shift(),t.map(e=>e.replace(/~1/g,`/`).replace(/~0/g,`~`))}function fn(e){return e.map(pn).join(``)}function pn(e){return`/${String(e).replace(/~/g,`~0`).replace(/\//g,`~1`)}`}function mn(e,t){return e+pn(t)}function hn(e,t,n){let r=e;for(let e=0;e<t.length;e++){wn(t[e]);let i=t[e];if(n?.before){let e=n.before(r,i);if(e!==void 0){if(e.document!==void 0&&(r=e.document),e.json!==void 0)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`);e.operation!==void 0&&(i=e.operation)}}let a=r,o=Tn(r,i.path);if(i.op===`add`)r=vn(r,o,i.value);else if(i.op===`remove`)r=_n(r,o);else if(i.op===`replace`)r=gn(r,o,i.value);else if(i.op===`copy`)r=yn(r,o,En(i.from));else if(i.op===`move`)r=bn(r,o,En(i.from));else if(i.op===`test`)xn(r,o,i.value);else throw Error(`Unknown JSONPatch operation ${JSON.stringify(i)}`);if(n?.after){let e=n.after(r,i,a);e!==void 0&&(r=e)}}return r}function gn(e,t,n){return un(e,t)?an(e,t,n):e}function _n(e,t){return cn(e,t)}function vn(e,t,n){return Sn(e,t)?ln(e,t,n):an(e,t,n)}function yn(e,t,n){let r=L(e,n);return Sn(e,t)?ln(e,t,r):an(e,t,r)}function bn(e,t,n){let r=L(e,n),i=cn(e,n);return Sn(i,t)?ln(i,t,r):an(i,t,r)}function xn(e,t,n){if(n===void 0)throw Error(`Test failed: no value provided (path: "${fn(t)}")`);if(!un(e,t))throw Error(`Test failed: path not found (path: "${fn(t)}")`);if(!Xt(L(e,t),n))throw Error(`Test failed, value differs (path: "${fn(t)}")`)}function Sn(e,t){if(t.length===0)return!1;let n=L(e,Qt(t));return Array.isArray(n)}function Cn(e,t){if($t(t)!==`-`)return t;let n=Qt(t),r=L(e,n);return n.concat(r.length)}function wn(e){if(![`add`,`remove`,`replace`,`copy`,`move`,`test`].includes(e.op))throw Error(`Unknown JSONPatch op ${JSON.stringify(e.op)}`);if(typeof e.path!=`string`)throw Error(`Required property "path" missing or not a string in operation ${JSON.stringify(e)}`);if((e.op===`copy`||e.op===`move`)&&typeof e.from!=`string`)throw Error(`Required property "from" missing or not a string in operation ${JSON.stringify(e)}`)}function Tn(e,t){return Cn(e,dn(t))}function En(e){return dn(e)}function Dn(e,t,n){let r=[];return hn(e,t,{before:(e,t)=>{let i,a=Tn(e,t.path);if(t.op===`add`)i=An(e,a);else if(t.op===`remove`)i=kn(e,a);else if(t.op===`replace`)i=On(e,a);else if(t.op===`copy`)i=jn(e,a);else if(t.op===`move`)i=Mn(e,a,En(t.from));else if(t.op===`test`)i=[];else throw Error(`Unknown JSONPatch operation ${JSON.stringify(t)}`);let o;if(n?.before){let r=n.before(e,t,i);if(r?.revertOperations&&(i=r.revertOperations),r?.document&&(o=r.document),r?.json)throw Error(`Deprecation warning: returned object property ".json" has been renamed to ".document"`)}if(r=i.concat(r),o!==void 0)return{document:o}}}),r}function On(e,t){return un(e,t)?[{op:`replace`,path:fn(t),value:L(e,t)}]:[]}function kn(e,t){return[{op:`add`,path:fn(t),value:L(e,t)}]}function An(e,t){return Sn(e,t)||!un(e,t)?[{op:`remove`,path:fn(t)}]:On(e,t)}function jn(e,t){return An(e,t)}function Mn(e,t,n){if(t.length<n.length&&en(n,t))return[{op:`replace`,path:fn(t),value:e}];let r={op:`move`,from:fn(t),path:fn(n)};return!Sn(e,t)&&un(e,t)?[r,...kn(e,t)]:[r]}var Nn=t((e=>{var t={b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`,'"':`"`,"/":`/`,"\\":`\\`},n=97;e.parse=function(e,r,i){var o={},s=0,c=0,l=0,u=i&&i.bigint&&typeof BigInt<`u`;return{data:d(``,!0),pointers:o};function d(t,n){f();var r;S(t,`value`);var i=v();switch(i){case`t`:_(`rue`),r=!0;break;case`f`:_(`alse`),r=!1;break;case`n`:_(`ull`),r=null;break;case`"`:r=p();break;case`[`:r=h(t);break;case`{`:r=g(t);break;default:y(),`-0123456789`.indexOf(i)>=0?r=m():T()}return S(t,`valueEnd`),f(),n&&l<e.length&&T(),r}function f(){loop:for(;l<e.length;){switch(e[l]){case` `:c++;break;case`	`:c+=4;break;case`\r`:c=0;break;case`
`:c=0,s++;break;default:break loop}l++}}function p(){for(var e=``,n;n=v(),n!=`"`;)n==`\\`?(n=v(),n in t?e+=t[n]:n==`u`?e+=b():E()):e+=n;return e}function m(){var t=``,n=!0;e[l]==`-`&&(t+=v()),t+=e[l]==`0`?v():x(),e[l]==`.`&&(t+=v()+x(),n=!1),(e[l]==`e`||e[l]==`E`)&&(t+=v(),(e[l]==`+`||e[l]==`-`)&&(t+=v()),t+=x(),n=!1);var r=+t;return u&&n&&(r>2**53-1||r<-(2**53-1))?BigInt(t):r}function h(e){f();var t=[],n=0;if(v()==`]`)return t;for(y();;){var r=e+`/`+n;t.push(d(r)),f();var i=v();if(i==`]`)break;i!=`,`&&E(),f(),n++}return t}function g(e){f();var t={};if(v()==`}`)return t;for(y();;){var n=w();v()!=`"`&&E();var r=p(),i=e+`/`+a(r);C(i,`key`,n),S(i,`keyEnd`),f(),v()!=`:`&&E(),f(),t[r]=d(i),f();var o=v();if(o==`}`)break;o!=`,`&&E(),f()}return t}function _(e){for(var t=0;t<e.length;t++)v()!==e[t]&&E()}function v(){D();var t=e[l];return l++,c++,t}function y(){l--,c--}function b(){for(var e=4,t=0;e--;){t<<=4;var r=v().toLowerCase();r>=`a`&&r<=`f`?t+=r.charCodeAt()-n+10:r>=`0`&&r<=`9`?t+=+r:E()}return String.fromCharCode(t)}function x(){for(var t=``;e[l]>=`0`&&e[l]<=`9`;)t+=v();if(t.length)return t;D(),T()}function S(e,t){C(e,t,w())}function C(e,t,n){o[e]=o[e]||{},o[e][t]=n}function w(){return{line:s,column:c,pos:l}}function T(){throw SyntaxError(`Unexpected token `+e[l]+` in JSON at position `+l)}function E(){y(),T()}function D(){if(l>=e.length)throw SyntaxError(`Unexpected end of JSON input`)}};var r=/~/g,i=/\//g;function a(e){return e.replace(r,`~0`).replace(i,`~1`)}})),Pn=class extends Error{constructor(e,t){super(`${e} at position ${t}`),this.position=t}},Fn=32,In=10,Ln=9,Rn=13,zn=160,Bn=6158,Vn=8192,Hn=8203,Un=8239,Wn=8287,Gn=12288,Kn=65279;function qn(e){return/^[0-9A-Fa-f]$/.test(e)}function Jn(e){return e>=`0`&&e<=`9`}function Yn(e){return e>=` `}function Xn(e){return`,:[]/{}()
+`.includes(e)}function Zn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`}function Qn(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`||e>=`0`&&e<=`9`}var $n=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,er=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function tr(e){return`,[]/{}
+`.includes(e)}function nr(e){return cr(e)||rr.test(e)}var rr=/^[[{\w-]$/;function ir(e){return e===`
`||e===`\r`||e===`	`||e===`\b`||e===`\f`}function ar(e,t){let n=e.charCodeAt(t);return n===Fn||n===In||n===Ln||n===Rn}function or(e,t){let n=e.charCodeAt(t);return n===Fn||n===Ln||n===Rn}function sr(e,t){let n=e.charCodeAt(t);return n===zn||n===Bn||n>=Vn&&n<=Hn||n===Un||n===Wn||n===Gn||n===Kn}function cr(e){return lr(e)||dr(e)}function lr(e){return e===`"`||e===`“`||e===`”`}function ur(e){return e===`"`}function dr(e){return e===`'`||e===`‘`||e===`’`||e==="`"||e===`´`}function fr(e){return e===`'`}function pr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=e.lastIndexOf(t);return r===-1?e:e.substring(0,r)+(n?``:e.substring(r+1))}function mr(e,t){let n=e.length;if(!ar(e,n-1))return e+t;for(;ar(e,n-1);)n--;return e.substring(0,n)+t+e.substring(n)}function hr(e,t,n){return e.substring(0,t)+e.substring(t+n)}function gr(e){return/[,\n][ \t\r]*$/.test(e)}var _r={"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},vr={'"':`"`,"\\":`\\`,"/":`/`,b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`};function yr(e){let t=0,n=``;c(["```","[```","{```"]),i()||te(),c(["```","```]","```}"]);let r=u(`,`);for(r&&a(),nr(e[t])&&gr(n)?(r||(n=mr(n,`,`)),g()):r&&(n=pr(n,`,`));e[t]===`}`||e[t]===`]`;)t++,a();if(t>=e.length)return n;ee();function i(){a();let e=m()||h()||_()||y()||b()||S(!1)||C();return a(),e}function a(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=t,r=o(e);do r=s(),r&&=o(e);while(r);return t>n}function o(r){let i=r?ar:or,a=``;for(;;)if(i(e,t))a+=e[t],t++;else if(sr(e,t))a+=` `,t++;else break;return a.length>0?(n+=a,!0):!1}function s(){if(e[t]===`/`&&e[t+1]===`*`){for(;t<e.length&&!br(e,t);)t++;return t+=2,!0}if(e[t]===`/`&&e[t+1]===`/`){for(;t<e.length&&e[t]!==`
`;)t++;return!0}return!1}function c(n){if(l(n)){if(Zn(e[t]))for(;t<e.length&&Qn(e[t]);)t++;return a(),!0}return!1}function l(n){o(!0);for(let r of n){let n=t+r.length;if(e.slice(t,n)===r)return t=n,!0}return!1}function u(r){return e[t]===r?(n+=e[t],t++,!0):!1}function d(n){return e[t]===n?(t++,!0):!1}function f(){return d(`\\`)}function p(){return a(),e[t]===`.`&&e[t+1]===`.`&&e[t+2]===`.`?(t+=3,a(),d(`,`),!0):!1}function m(){if(e[t]===`{`){n+=`{`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`}`;){let o;if(r?(o=!0,r=!1):(o=u(`,`),o||(n=mr(n,`,`)),a()),p(),!(_()||S(!0))){e[t]===`}`||e[t]===`{`||e[t]===`]`||e[t]===`[`||e[t]===void 0?n=pr(n,`,`):ne();break}a();let s=u(`:`),c=t>=e.length;s||(nr(e[t])||c?n=mr(n,`:`):re()),i()||(s||c?n+=`null`:re())}return e[t]===`}`?(n+=`}`,t++):n=mr(n,`}`),!0}return!1}function h(){if(e[t]===`[`){n+=`[`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`]`;)if(r?r=!1:u(`,`)||(n=mr(n,`,`)),p(),!i()){n=pr(n,`,`);break}return e[t]===`]`?(n+=`]`,t++):n=mr(n,`]`),!0}return!1}function g(){let e=!0,t=!0;for(;t;)e?e=!1:u(`,`)||(n=mr(n,`,`)),t=i();t||(n=pr(n,`,`)),n=`[\n${n}\n]`}function _(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=e[t]===`\\`;if(o&&=(t++,!0),cr(e[t])){let s=ur(e[t])?ur:fr(e[t])?fr:dr(e[t])?dr:lr,c=t,l=n.length,u=`"`;for(t++;;){if(t>=e.length){let i=w(t-1);return!r&&Xn(e.charAt(i))?(t=c,n=n.substring(0,l),_(!0)):(u=mr(u,`"`),n+=u,!0)}if(t===i)return u=mr(u,`"`),n+=u,!0;if(s(e[t])){let i=t,o=u.length;if(u+=`"`,t++,n+=u,a(!1),r||t>=e.length||Xn(e[t])||cr(e[t])||Jn(e[t]))return v(),!0;let s=w(i-1),d=e.charAt(s);if(d===`,`)return t=c,n=n.substring(0,l),_(!1,s);if(Xn(d))return t=c,n=n.substring(0,l),_(!0);n=n.substring(0,l),t=i+1,u=`${u.substring(0,o)}\\${u.substring(o)}`}else if(r&&tr(e[t])){if(e[t-1]===`:`&&$n.test(e.substring(c+1,t+2)))for(;t<e.length&&er.test(e[t]);)u+=e[t],t++;return u=mr(u,`"`),n+=u,v(),!0}else if(e[t]===`\\`){let n=e.charAt(t+1);if(vr[n]!==void 0)u+=e.slice(t,t+2),t+=2;else if(n===`u`){let n=2;for(;n<6&&qn(e[t+n]);)n++;n===6?(u+=e.slice(t,t+6),t+=6):t+n>=e.length?t=e.length:ie()}else u+=n,t+=2}else{let n=e.charAt(t);n===`"`&&e[t-1]!==`\\`?(u+=`\\${n}`,t++):ir(n)?(u+=_r[n],t++):(Yn(n)||D(n),u+=n,t++)}o&&f()}}return!1}function v(){let r=!1;for(a();e[t]===`+`;){r=!0,t++,a(),n=pr(n,`"`,!0);let e=n.length;n=_()?hr(n,e,1):mr(n,`"`)}return r}function y(){let r=t;if(e[t]===`-`){if(t++,T())return E(r),!0;if(!Jn(e[t]))return t=r,!1}for(;Jn(e[t]);)t++;if(e[t]===`.`){if(t++,T())return E(r),!0;if(!Jn(e[t]))return t=r,!1;for(;Jn(e[t]);)t++}if(e[t]===`e`||e[t]===`E`){if(t++,(e[t]===`-`||e[t]===`+`)&&t++,T())return E(r),!0;if(!Jn(e[t]))return t=r,!1;for(;Jn(e[t]);)t++}if(!T())return t=r,!1;if(t>r){let i=e.slice(r,t),a=/^0\d/.test(i);return n+=a?`"${i}"`:i,!0}return!1}function b(){return x(`true`,`true`)||x(`false`,`false`)||x(`null`,`null`)||x(`True`,`true`)||x(`False`,`false`)||x(`None`,`null`)}function x(r,i){return e.slice(t,t+r.length)===r?(n+=i,t+=r.length,!0):!1}function S(r){let a=t;if(Zn(e[t])){for(;t<e.length&&Qn(e[t]);)t++;let n=t;for(;ar(e,n);)n++;if(e[n]===`(`)return t=n+1,i(),e[t]===`)`&&(t++,e[t]===`;`&&t++),!0}for(;t<e.length&&!tr(e[t])&&!cr(e[t])&&(!r||e[t]!==`:`);)t++;if(e[t-1]===`:`&&$n.test(e.substring(a,t+2)))for(;t<e.length&&er.test(e[t]);)t++;if(t>a){for(;ar(e,t-1)&&t>0;)t--;let r=e.slice(a,t);return n+=r===`undefined`?`null`:JSON.stringify(r),e[t]===`"`&&t++,!0}}function C(){if(e[t]===`/`){let r=t;for(t++;t<e.length&&(e[t]!==`/`||e[t-1]===`\\`);)t++;return t++,n+=JSON.stringify(e.substring(r,t)),!0}}function w(t){let n=t;for(;n>0&&ar(e,n);)n--;return n}function T(){return t>=e.length||Xn(e[t])||ar(e,t)}function E(r){n+=`${e.slice(r,t)}0`}function D(e){throw new Pn(`Invalid character ${JSON.stringify(e)}`,t)}function ee(){throw new Pn(`Unexpected character ${JSON.stringify(e[t])}`,t)}function te(){throw new Pn(`Unexpected end of json string`,e.length)}function ne(){throw new Pn(`Object key expected`,t)}function re(){throw new Pn(`Colon expected`,t)}function ie(){throw new Pn(`Invalid unicode character "${e.slice(t,t+6)}"`,t)}}function br(e,t){return e[t]===`*`&&e[t+1]===`/`}var xr=e=>Array.isArray(e),Sr=e=>typeof e==`object`&&!!e&&!xr(e),Cr=e=>typeof e==`string`,wr=(e,t)=>e===t?!0:e!==null&&t!==null&&typeof e==`object`&&typeof t==`object`&&Object.keys(e).length===Object.keys(t).length&&Object.entries(e).every(([e,n])=>wr(n,t[e])),Tr=(e,t)=>{let n=e?.[t];if(n!==void 0){if(!Object.hasOwn(e,t)||Array.isArray(e)&&!/^\d+$/.test(t)||typeof e!=`object`)throw TypeError(`Unsupported property "${t}"`);return n}};function Er(e){return(...t)=>{let n=t.map(e=>Br(e)),r=n[0],i=n[1];return n.length===1?t=>e(r(t)):n.length===2?t=>e(r(t),i(t)):t=>e(...n.map(e=>e(t)))}}var Dr={boolean:0,number:1,string:2},Or=3,kr=(e,t)=>typeof e==typeof t&&typeof e in Dr?e>t:!1,Ar=(e,t)=>wr(e,t)||kr(e,t),jr=(e,t)=>typeof e==typeof t&&typeof e in Dr?e<t:!1,Mr=(e,t)=>wr(e,t)||jr(e,t),Nr={pipe:(...e)=>{let t=e.map(e=>Br(e));return e=>t.reduce((e,t)=>t(e),e)},object:e=>{let t=Object.keys(e).map(t=>[t,Br(e[t])]);return e=>{let n={};for(let[r,i]of t)n[r]=i(e);return n}},array:(...e)=>{let t=e.map(e=>Br(e));return e=>t.map(t=>t(e))},get:(...e)=>{if(e.length===0)return e=>e??null;if(e.length===1){let t=e[0];return e=>Tr(e,t)??null}return t=>{let n=t;for(let t of e)n=Tr(n,t);return n??null}},map:e=>{let t=Br(e);return e=>e.map(t)},mapObject:e=>{let t=Br(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t({key:r,value:e[r]});n[i.key]=i.value}return n}},mapKeys:e=>{let t=Br(e);return e=>{let n={};for(let r of Object.keys(e)){let i=t(r);n[i]=e[r]}return n}},mapValues:e=>{let t=Br(e);return e=>{let n={};for(let r of Object.keys(e))n[r]=t(e[r]);return n}},filter:e=>{let t=Br(e);return e=>e.filter(e=>Pr(t(e)))},sort:(e=[`get`],t)=>{let n=Br(e),r=t===`desc`?-1:1;function i(e,t){let i=n(e),a=n(t);if(typeof i!=typeof a){let e=Dr[typeof i]??Or,t=Dr[typeof a]??Or;return e>t?r:e<t?-r:0}return typeof i in Dr?i>a?r:i<a?-r:0:0}return e=>e.slice().sort(i)},reverse:()=>e=>e.toReversed(),pick:(...e)=>{let t=e.map(([e,...t])=>[t[t.length-1],Nr.get(...t)]),n=(e,t)=>{let n={};for(let[r,i]of t)n[r]=i(e);return n};return e=>xr(e)?e.map(e=>n(e,t)):n(e,t)},groupBy:e=>{let t=Br(e);return e=>{let n={};for(let r of e){let e=t(r);n[e]?n[e].push(r):n[e]=[r]}return n}},keyBy:e=>{let t=Br(e);return e=>{let n={};for(let r of e){let e=t(r);e in n||(n[e]=r)}return n}},flatten:()=>e=>e.flat(),join:(e=``)=>t=>t.join(e),split:Er((e,t)=>t===void 0?e.trim().split(/\s+/):e.split(t)),substring:Er((e,t,n)=>e.slice(Math.max(t,0),n)),uniq:()=>e=>{let t=[];for(let n of e)t.findIndex(e=>wr(e,n))===-1&&t.push(n);return t},uniqBy:e=>t=>Object.values(Nr.keyBy(e)(t)),limit:e=>t=>t.slice(0,Math.max(e,0)),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>Fr(e,(e,t)=>e*t),sum:()=>e=>xr(e)?e.reduce((e,t)=>e+t,0):Lr(),average:()=>e=>xr(e)?e.length>0?e.reduce((e,t)=>e+t)/e.length:null:Lr(),min:()=>e=>Fr(e,(e,t)=>Math.min(e,t)),max:()=>e=>Fr(e,(e,t)=>Math.max(e,t)),and:Er((...e)=>Fr(e,(e,t)=>!!(e&&t))),or:Er((...e)=>Fr(e,(e,t)=>!!(e||t))),not:Er(e=>!e),exists:e=>{let t=e.slice(1),n=t.pop(),r=Nr.get(...t);return e=>{let t=r(e);return!!t&&Object.hasOwnProperty.call(t,n)}},if:(e,t,n)=>{let r=Br(e),i=Br(t),a=Br(n);return e=>Pr(r(e))?i(e):a(e)},in:(e,t)=>{let n=Br(e),r=Br(t);return e=>{let t=n(e);return r(e).findIndex(e=>wr(e,t))!==-1}},"not in":(e,t)=>{let n=Nr.in(e,t);return e=>!n(e)},regex:(e,t,n)=>{let r=new RegExp(t,n),i=Br(e);return e=>r.test(i(e))},match:(e,t,n)=>{let r=new RegExp(t,n),i=Br(e);return e=>{let t=i(e).match(r);return t?Ir(t):null}},matchAll:(e,t,n)=>{let r=new RegExp(t,`${n??``}g`),i=Br(e);return e=>Array.from(i(e).matchAll(r)).map(Ir)},eq:Er(wr),gt:Er(kr),gte:Er(Ar),lt:Er(jr),lte:Er(Mr),ne:Er((e,t)=>!wr(e,t)),add:Er((e,t)=>e+t),subtract:Er((e,t)=>e-t),multiply:Er((e,t)=>e*t),divide:Er((e,t)=>e/t),mod:Er((e,t)=>e%t),pow:Er((e,t)=>e**t),abs:Er(Math.abs),round:Er((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`),number:Er(e=>{let t=Number(e);return Number.isNaN(Number(e))?null:t}),string:Er(String)},Pr=e=>e!==null&&e!==0&&e!==!1,Fr=(e,t)=>(xr(e)||Lr(),e.length===0?null:e.reduce(t)),Ir=e=>{let[t,...n]=e,r=e.groups;return n.length?r?{value:t,groups:n,namedGroups:r}:{value:t,groups:n}:{value:t}},Lr=()=>{Rr(`Array expected`)},Rr=e=>{throw TypeError(e)},zr=[];function Br(e,t){zr.unshift({...Nr,...zr[0],...t?.functions});try{let t=xr(e)?Vr(e,zr[0]):Sr(e)?Rr(`Function notation ["object", {...}] expected but got ${JSON.stringify(e)}`):()=>e;return n=>{try{return t(n)}catch(t){throw t.jsonquery=[{data:n,query:e},...t.jsonquery??[]],t}}}finally{zr.shift()}}function Vr(e,t){let[n,...r]=e,i=t[n];return i||Rr(`Unknown function '${n}'`),i(...r)}var Hr=[{pow:`^`},{multiply:`*`,divide:`/`,mod:`%`},{add:`+`,subtract:`-`},{gt:`>`,gte:`>=`,lt:`<`,lte:`<=`,in:`in`,"not in":`not in`},{eq:`==`,ne:`!=`},{and:`and`},{or:`or`},{pipe:`|`}],Ur=[`|`,`and`,`or`],Wr=[`|`,`and`,`or`,`*`,`/`,`%`,`+`,`-`];function Gr(e,t){if(!xr(t))throw Error(`Invalid custom operators`);return t.reduce(Kr,e)}function Kr(e,{name:t,op:n,at:r,after:i,before:a}){if(r)return e.map(e=>Object.values(e).includes(r)?{...e,[t]:n}:e);let o=i??a,s=e.findIndex(e=>Object.values(e).includes(o));if(s!==-1)return e.toSpliced(s+(i?1:0),0,{[t]:n});throw Error(`Invalid custom operator`)}var qr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Jr=/^[a-zA-Z_$][a-zA-Z\d_$]*/,Yr=/^"(?:[^"\\]|\\.)*"/,Xr=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Zr=/^(0|[1-9][0-9]*)/,Qr=/^(true|false|null)/,$r=/^[ \n\t\r]+/;function ei(e,t){let n=t?.operators??[],r=Gr(Hr,n),i=Object.assign({},...r),a=Ur.concat(n.filter(e=>e.vararg).map(e=>e.op)),o=Wr.concat(n.filter(e=>e.leftAssociative).map(e=>e.op)),s=(t=r.length-1)=>{let n=r[t];if(!n)return l();let d=e[w]===`(`,f=s(t-1);for(;;){if(x(),e[w]===`.`&&`pipe`in n){let e=u();f=f[0]===`pipe`?[...f,e]:[`pipe`,f,e];continue}let r=w,l=c(n);if(!l)break;let p=s(t-1),m=l===f[0]&&!d;if(m&&!o.includes(i[l])){w=r;break}f=m&&a.includes(i[l])?[...f,p]:[l,f,p]}return f},c=t=>{let n=Object.keys(t).sort((e,t)=>t.length-e.length);for(let r of n){let n=t[r];if(e.substring(w,w+n.length)===n)return w+=n.length,x(),r}},l=()=>{if(x(),e[w]===`(`){w++;let e=s();return S(`)`),e}return u()},u=()=>{if(e[w]===`.`){let t=[];for(;e[w]===`.`;)w++,t.push(m()??h()??_()??C(`Property expected`)),x();return[`get`,...t]}return d()},d=()=>{let t=w,n=h();if(x(),!n||e[w]!==`(`)return w=t,f();w++,x();let r=e[w]===`)`?[]:[s()];for(;w<e.length&&e[w]!==`)`;)x(),S(`,`),r.push(s());return S(`)`),[n,...r]},f=()=>{if(e[w]===`{`){w++,x();let t={},n=!0;for(;w<e.length&&e[w]!==`}`;){n?n=!1:(S(`,`),x());let e=m()??h()??_()??C(`Key expected`);x(),S(`:`),t[e]=s()}return S(`}`),[`object`,t]}return p()},p=()=>{if(e[w]===`[`){w++,x();let t=[],n=!0;for(;w<e.length&&e[w]!==`]`;)n?n=!1:(S(`,`),x()),t.push(s());return S(`]`),[`array`,...t]}return m()??g()??v()},m=()=>b(Yr,JSON.parse),h=()=>b(Jr,e=>e),g=()=>b(Xr,JSON.parse),_=()=>b(Zr,JSON.parse),v=()=>{let e=b(Qr,JSON.parse);if(e!==void 0)return e;C(`Value expected`)},y=()=>{x(),w<e.length&&C(`Unexpected part '${e.substring(w)}'`)},b=(t,n)=>{let r=e.substring(w).match(t);if(r)return w+=r[0].length,n(r[0])},x=()=>b($r,e=>e),S=t=>{e[w]!==t&&C(`Character '${t}' expected`),w++},C=(e,t=w)=>{throw SyntaxError(`${e} (pos: ${t})`)},w=0,T=s();return y(),T}var ti=40,ni=`  `,ri=(e,t)=>{let n=t?.indentation??ni,r=t?.operators??[],i=Gr(Hr,r),a=Object.assign({},...i),o=Wr.concat(r.filter(e=>e.leftAssociative).map(e=>e.op)),s=(e,t,n=!1)=>xr(e)?c(e,t,n):JSON.stringify(e),c=(e,t,r)=>{let[c,...d]=e;if(c===`get`&&d.length>0)return u(d);if(c===`object`)return l(d[0],t);if(c===`array`)return f(d.map(e=>s(e,t)),[`[`,`, `,`]`],[`[
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
${t}}`])},u=e=>e.map(e=>`.${d(e)}`).join(``),d=e=>qr.test(e)?e:JSON.stringify(e),f=(e,[n,r,i],[a,o,s])=>n.length+e.reduce((e,t)=>e+t.length+r.length,0)-r.length+i.length<=(t?.maxLineLength??ti)?n+e.join(r)+i:a+e.join(o)+s;return s(e,``)};function ii(e,t,n){return Br(Cr(t)?ei(t,n):t,n)(e)}var ai={prefix:`far`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},oi={prefix:`far`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z`]},si={prefix:`far`,iconName:`lightbulb`,icon:[384,512,[128161],`f0eb`,`M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z`]},ci={prefix:`far`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},li={prefix:`fas`,iconName:`rotate`,icon:[512,512,[128260,`sync-alt`],`f2f1`,`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`]},ui={prefix:`fas`,iconName:`paste`,icon:[512,512,[`file-clipboard`],`f0ea`,`M64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l112 0 0-224c0-61.9 50.1-112 112-112l64 0 0-48c0-35.3-28.7-64-64-64L64 0zM248 112l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm40 48c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-165.5c0-17-6.7-33.3-18.7-45.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7L288 160z`]},di={prefix:`fas`,iconName:`crop-simple`,icon:[512,512,[`crop-alt`],`f565`,`M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32-32 0C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l208 0 0-64-208 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64l-208 0 0 64 208 0 0 352z`]},fi={prefix:`fas`,iconName:`filter`,icon:[512,512,[],`f0b0`,`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`]},pi={prefix:`fas`,iconName:`square-caret-down`,icon:[448,512,[`caret-square-down`],`f150`,`M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9S110.5 192 120 192l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z`]},mi={prefix:`fas`,iconName:`caret-right`,icon:[256,512,[],`f0da`,`M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z`]},hi={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},gi={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},_i={prefix:`fas`,iconName:`caret-left`,icon:[256,512,[],`f0d9`,`M7.7 235.8c-10.3 12.6-9.5 31.1 2.2 42.8l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128-2.2 2.4z`]},vi={prefix:`fas`,iconName:`chevron-up`,icon:[448,512,[],`f077`,`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`]},yi={prefix:`fas`,iconName:`circle-notch`,icon:[512,512,[],`f1ce`,`M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8-79.3 23.6-137.1 97.1-137.1 184.1 0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256 512 397.4 397.4 512 256 512S0 397.4 0 256c0-116 77.1-213.9 182.9-245.4 16.9-5 34.8 4.6 39.8 21.5z`]},bi={prefix:`fas`,iconName:`ellipsis-vertical`,icon:[128,512,[`ellipsis-v`],`f142`,`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`]},xi={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},Si={prefix:`fas`,iconName:`clone`,icon:[512,512,[],`f24d`,`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`]},Ci={prefix:`fas`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},wi={prefix:`fas`,iconName:`square-caret-up`,icon:[448,512,[`caret-square-up`],`f151`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S337.5 320 328 320l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z`]},Ti={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Ei={prefix:`fas`,iconName:`angle-right`,icon:[256,512,[8250],`f105`,`M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z`]},Di={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},Oi={prefix:`fas`,iconName:`up-right-and-down-left-from-center`,icon:[512,512,[`expand-alt`],`f424`,`M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2S34.1 320.2 41 327l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S177.7 512 168 512z`]},ki={prefix:`fas`,iconName:`wrench`,icon:[576,512,[128295],`f0ad`,`M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z`]},Ai={prefix:`fas`,iconName:`trash-can`,icon:[448,512,[61460,`trash-alt`],`f2ed`,`M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z`]},ji={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},Mi={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},Ni=Mi,Pi=Mi,Fi={prefix:`fas`,iconName:`pen`,icon:[512,512,[128394],`f304`,`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`]},Ii={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},Li={prefix:`fas`,iconName:`angle-down`,icon:[384,512,[8964],`f107`,`M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},Ri={prefix:`fas`,iconName:`arrow-down-short-wide`,icon:[576,512,[`sort-amount-desc`,`sort-amount-down-alt`],`f884`,`M246.6 374.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`]},zi={prefix:`fas`,iconName:`triangle-exclamation`,icon:[512,512,[9888,`exclamation-triangle`,`warning`],`f071`,`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},Bi={prefix:`fas`,iconName:`scissors`,icon:[512,512,[9984,9986,9988,`cut`],`f0c4`,`M192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6-28.3-28.3-74.1-28.3-102.4 0L256 192 216.5 152.5c4.9-12.6 7.5-26.2 7.5-40.5 0-61.9-50.1-112-112-112S0 50.1 0 112 50.1 224 112 224c14.3 0 27.9-2.7 40.5-7.5L192 256zm97.9 97.9L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0 7.1-7.1 7.1-18.5 0-25.6l-145.3-145.3-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z`]},Vi={prefix:`fas`,iconName:`arrow-right-arrow-left`,icon:[512,512,[8644,`exchange`],`f0ec`,`M502.6 150.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 160 32 160c-17.7 0-32-14.3-32-32S14.3 96 32 96l370.7 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 352 480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z`]},Hi={prefix:`fas`,iconName:`caret-up`,icon:[320,512,[],`f0d8`,`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`]},Ui={prefix:`fas`,iconName:`down-left-and-up-right-to-center`,icon:[512,512,[`compress-alt`],`f422`,`M439.5 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2S450.2 240 440.5 240l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87zM72.5 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S62.8 272 72.5 272z`]},Wi={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]},Gi={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]},Ki={prefix:`fas`,iconName:`arrow-rotate-right`,icon:[512,512,[8635,`arrow-right-rotate`,`arrow-rotate-forward`,`redo`],`f01e`,`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`]},qi={prefix:`fas`,iconName:`caret-down`,icon:[320,512,[],`f0d7`,`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`]},Ji={prefix:`fas`,iconName:`arrow-rotate-left`,icon:[512,512,[8634,`arrow-left-rotate`,`arrow-rotate-back`,`arrow-rotate-backward`,`undo`],`f0e2`,`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`]},Yi={prefix:`fas`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z`]},Xi={prefix:`fas`,iconName:`arrow-down`,icon:[384,512,[8595],`f063`,`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},Zi=t(((e,t)=>{var n=function(e,t){var n,r,i=1,a=0,o=0,s=String.alphabet;function c(e,t,r){if(r){for(n=t;r=c(e,n),r<76&&r>65;)++n;return+e.slice(t-1,n)}return r=s&&s.indexOf(e.charAt(t)),r>-1?r+76:(r=e.charCodeAt(t)||0,r<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63)}if((e+=``)!=(t+=``)){for(;i;)if(r=c(e,a++),i=c(t,o++),r<76&&i<76&&r>66&&i>66&&(r=c(e,a,a),i=c(t,o,a=n),o=n),r!=i)return r<i?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}})),Qi=t((e=>{(function(e){function t(e){return e===null?!1:Object.prototype.toString.call(e)===`[object Array]`}function n(e){return e===null?!1:Object.prototype.toString.call(e)===`[object Object]`}function r(e,i){if(e===i)return!0;if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(i))return!1;if(t(e)===!0){if(e.length!==i.length)return!1;for(var a=0;a<e.length;a++)if(r(e[a],i[a])===!1)return!1;return!0}if(n(e)===!0){var o={};for(var s in e)if(hasOwnProperty.call(e,s)){if(r(e[s],i[s])===!1)return!1;o[s]=!0}for(var c in i)if(hasOwnProperty.call(i,c)&&o[c]!==!0)return!1;return!0}return!1}function i(e){if(e===``||e===!1||e===null||t(e)&&e.length===0)return!0;if(n(e)){for(var r in e)if(e.hasOwnProperty(r))return!1;return!0}else return!1}function a(e){for(var t=Object.keys(e),n=[],r=0;r<t.length;r++)n.push(e[t[r]]);return n}var o=typeof String.prototype.trimLeft==`function`?function(e){return e.trimLeft()}:function(e){return e.match(/^\s*(.*)/)[1]},s=0,c=1,l=2,u=3,d=4,f=5,p=6,m=7,h=8,g=9,_={0:`number`,1:`any`,2:`string`,3:`array`,4:`object`,5:`boolean`,6:`expression`,7:`null`,8:`Array<number>`,9:`Array<string>`},v=`EOF`,y=`UnquotedIdentifier`,b=`QuotedIdentifier`,x=`Rbracket`,S=`Rparen`,C=`Comma`,w=`Colon`,T=`Rbrace`,E=`Number`,D=`Current`,ee=`Expref`,te=`Pipe`,ne=`Or`,re=`And`,ie=`EQ`,O=`GT`,ae=`LT`,k=`GTE`,A=`LTE`,oe=`NE`,se=`Flatten`,ce=`Star`,le=`Filter`,ue=`Dot`,de=`Not`,fe=`Lbrace`,pe=`Lbracket`,me=`Lparen`,he=`Literal`,j={".":ue,"*":ce,",":C,":":w,"{":fe,"}":T,"]":x,"(":me,")":S,"@":D},ge={"<":!0,">":!0,"=":!0,"!":!0},M={" ":!0,"	":!0,"\n":!0};function N(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`}function _e(e){return e>=`0`&&e<=`9`||e===`-`}function ve(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`_`}function ye(){}ye.prototype={tokenize:function(e){var t=[];this._current=0;for(var n,r,i;this._current<e.length;)if(N(e[this._current]))n=this._current,r=this._consumeUnquotedIdentifier(e),t.push({type:y,value:r,start:n});else if(j[e[this._current]]!==void 0)t.push({type:j[e[this._current]],value:e[this._current],start:this._current}),this._current++;else if(_e(e[this._current]))i=this._consumeNumber(e),t.push(i);else if(e[this._current]===`[`)i=this._consumeLBracket(e),t.push(i);else if(e[this._current]===`"`)n=this._current,r=this._consumeQuotedIdentifier(e),t.push({type:b,value:r,start:n});else if(e[this._current]===`'`)n=this._current,r=this._consumeRawStringLiteral(e),t.push({type:he,value:r,start:n});else if(e[this._current]==="`"){n=this._current;var a=this._consumeLiteral(e);t.push({type:he,value:a,start:n})}else if(ge[e[this._current]]!==void 0)t.push(this._consumeOperator(e));else if(M[e[this._current]]!==void 0)this._current++;else if(e[this._current]===`&`)n=this._current,this._current++,e[this._current]===`&`?(this._current++,t.push({type:re,value:`&&`,start:n})):t.push({type:ee,value:`&`,start:n});else if(e[this._current]===`|`)n=this._current,this._current++,e[this._current]===`|`?(this._current++,t.push({type:ne,value:`||`,start:n})):t.push({type:te,value:`|`,start:n});else{var o=Error(`Unknown character:`+e[this._current]);throw o.name=`LexerError`,o}return t},_consumeUnquotedIdentifier:function(e){var t=this._current;for(this._current++;this._current<e.length&&ve(e[this._current]);)this._current++;return e.slice(t,this._current)},_consumeQuotedIdentifier:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`"`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`"`)?r+=2:r++,this._current=r}return this._current++,JSON.parse(e.slice(t,this._current))},_consumeRawStringLiteral:function(e){var t=this._current;this._current++;for(var n=e.length;e[this._current]!==`'`&&this._current<n;){var r=this._current;e[r]===`\\`&&(e[r+1]===`\\`||e[r+1]===`'`)?r+=2:r++,this._current=r}return this._current++,e.slice(t+1,this._current-1).replace(`\\'`,`'`)},_consumeNumber:function(e){var t=this._current;this._current++;for(var n=e.length;_e(e[this._current])&&this._current<n;)this._current++;return{type:E,value:parseInt(e.slice(t,this._current)),start:t}},_consumeLBracket:function(e){var t=this._current;return this._current++,e[this._current]===`?`?(this._current++,{type:le,value:`[?`,start:t}):e[this._current]===`]`?(this._current++,{type:se,value:`[]`,start:t}):{type:pe,value:`[`,start:t}},_consumeOperator:function(e){var t=this._current,n=e[t];if(this._current++,n===`!`)return e[this._current]===`=`?(this._current++,{type:oe,value:`!=`,start:t}):{type:de,value:`!`,start:t};if(n===`<`)return e[this._current]===`=`?(this._current++,{type:A,value:`<=`,start:t}):{type:ae,value:`<`,start:t};if(n===`>`)return e[this._current]===`=`?(this._current++,{type:k,value:`>=`,start:t}):{type:O,value:`>`,start:t};if(n===`=`&&e[this._current]===`=`)return this._current++,{type:ie,value:`==`,start:t}},_consumeLiteral:function(e){this._current++;for(var t=this._current,n=e.length,r;e[this._current]!=="`"&&this._current<n;){var i=this._current;e[i]===`\\`&&(e[i+1]===`\\`||e[i+1]==="`")?i+=2:i++,this._current=i}var a=o(e.slice(t,this._current));return a=a.replace("\\`","`"),r=this._looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"`+a+`"`),this._current++,r},_looksLikeJSON:function(e){var t=`[{"`,n=[`true`,`false`,`null`],r=`-0123456789`;if(e===``)return!1;if(t.indexOf(e[0])>=0||n.indexOf(e)>=0)return!0;if(r.indexOf(e[0])>=0)try{return JSON.parse(e),!0}catch{return!1}else return!1}};var P={};P[v]=0,P[y]=0,P[b]=0,P[x]=0,P[S]=0,P[C]=0,P[T]=0,P[E]=0,P[D]=0,P[ee]=0,P[te]=1,P[ne]=2,P[re]=3,P[ie]=5,P[O]=5,P[ae]=5,P[k]=5,P[A]=5,P[oe]=5,P[se]=9,P[ce]=20,P[le]=21,P[ue]=40,P[de]=45,P[fe]=50,P[pe]=55,P[me]=60;function F(){}F.prototype={parse:function(e){this._loadTokens(e),this.index=0;var t=this.expression(0);if(this._lookahead(0)!==v){var n=this._lookaheadToken(0),r=Error(`Unexpected token type: `+n.type+`, value: `+n.value);throw r.name=`ParserError`,r}return t},_loadTokens:function(e){var t=new ye().tokenize(e);t.push({type:v,value:``,start:e.length}),this.tokens=t},expression:function(e){var t=this._lookaheadToken(0);this._advance();for(var n=this.nud(t),r=this._lookahead(0);e<P[r];)this._advance(),n=this.led(r,n),r=this._lookahead(0);return n},_lookahead:function(e){return this.tokens[this.index+e].type},_lookaheadToken:function(e){return this.tokens[this.index+e]},_advance:function(){this.index++},nud:function(e){var t,n,r;switch(e.type){case he:return{type:`Literal`,value:e.value};case y:return{type:`Field`,name:e.value};case b:var i={type:`Field`,name:e.value};if(this._lookahead(0)===me)throw Error(`Quoted identifier not allowed for function names.`);return i;case de:return n=this.expression(P.Not),{type:`NotExpression`,children:[n]};case ce:return t={type:`Identity`},n=null,n=this._lookahead(0)===x?{type:`Identity`}:this._parseProjectionRHS(P.Star),{type:`ValueProjection`,children:[t,n]};case le:return this.led(e.type,{type:`Identity`});case fe:return this._parseMultiselectHash();case se:return t={type:se,children:[{type:`Identity`}]},n=this._parseProjectionRHS(P.Flatten),{type:`Projection`,children:[t,n]};case pe:return this._lookahead(0)===E||this._lookahead(0)===w?(n=this._parseIndexExpression(),this._projectIfSlice({type:`Identity`},n)):this._lookahead(0)===ce&&this._lookahead(1)===x?(this._advance(),this._advance(),n=this._parseProjectionRHS(P.Star),{type:`Projection`,children:[{type:`Identity`},n]}):this._parseMultiselectList();case D:return{type:D};case ee:return r=this.expression(P.Expref),{type:`ExpressionReference`,children:[r]};case me:for(var a=[];this._lookahead(0)!==S;)this._lookahead(0)===D?(r={type:D},this._advance()):r=this.expression(0),a.push(r);return this._match(S),a[0];default:this._errorToken(e)}},led:function(e,t){var n;switch(e){case ue:var r=P.Dot;return this._lookahead(0)===ce?(this._advance(),n=this._parseProjectionRHS(r),{type:`ValueProjection`,children:[t,n]}):(n=this._parseDotRHS(r),{type:`Subexpression`,children:[t,n]});case te:return n=this.expression(P.Pipe),{type:te,children:[t,n]};case ne:return n=this.expression(P.Or),{type:`OrExpression`,children:[t,n]};case re:return n=this.expression(P.And),{type:`AndExpression`,children:[t,n]};case me:for(var i=t.name,a=[],o,s;this._lookahead(0)!==S;)this._lookahead(0)===D?(o={type:D},this._advance()):o=this.expression(0),this._lookahead(0)===C&&this._match(C),a.push(o);return this._match(S),s={type:`Function`,name:i,children:a},s;case le:var c=this.expression(0);return this._match(x),n=this._lookahead(0)===se?{type:`Identity`}:this._parseProjectionRHS(P.Filter),{type:`FilterProjection`,children:[t,n,c]};case se:return{type:`Projection`,children:[{type:se,children:[t]},this._parseProjectionRHS(P.Flatten)]};case ie:case oe:case O:case k:case ae:case A:return this._parseComparator(t,e);case pe:var l=this._lookaheadToken(0);return l.type===E||l.type===w?(n=this._parseIndexExpression(),this._projectIfSlice(t,n)):(this._match(ce),this._match(x),n=this._parseProjectionRHS(P.Star),{type:`Projection`,children:[t,n]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(e){if(this._lookahead(0)===e)this._advance();else{var t=this._lookaheadToken(0),n=Error(`Expected `+e+`, got: `+t.type);throw n.name=`ParserError`,n}},_errorToken:function(e){var t=Error(`Invalid token (`+e.type+`): "`+e.value+`"`);throw t.name=`ParserError`,t},_parseIndexExpression:function(){if(this._lookahead(0)===w||this._lookahead(1)===w)return this._parseSliceExpression();var e={type:`Index`,value:this._lookaheadToken(0).value};return this._advance(),this._match(x),e},_projectIfSlice:function(e,t){var n={type:`IndexExpression`,children:[e,t]};return t.type===`Slice`?{type:`Projection`,children:[n,this._parseProjectionRHS(P.Star)]}:n},_parseSliceExpression:function(){for(var e=[null,null,null],t=0,n=this._lookahead(0);n!==x&&t<3;){if(n===w)t++,this._advance();else if(n===E)e[t]=this._lookaheadToken(0).value,this._advance();else{var r=this._lookahead(0),i=Error(`Syntax error, unexpected token: `+r.value+`(`+r.type+`)`);throw i.name=`Parsererror`,i}n=this._lookahead(0)}return this._match(x),{type:`Slice`,children:e}},_parseComparator:function(e,t){return{type:`Comparator`,name:t,children:[e,this.expression(P[t])]}},_parseDotRHS:function(e){var t=this._lookahead(0);if([y,b,ce].indexOf(t)>=0)return this.expression(e);if(t===pe)return this._match(pe),this._parseMultiselectList();if(t===fe)return this._match(fe),this._parseMultiselectHash()},_parseProjectionRHS:function(e){var t;if(P[this._lookahead(0)]<10)t={type:`Identity`};else if(this._lookahead(0)===pe)t=this.expression(e);else if(this._lookahead(0)===le)t=this.expression(e);else if(this._lookahead(0)===ue)this._match(ue),t=this._parseDotRHS(e);else{var n=this._lookaheadToken(0),r=Error(`Sytanx error, unexpected token: `+n.value+`(`+n.type+`)`);throw r.name=`ParserError`,r}return t},_parseMultiselectList:function(){for(var e=[];this._lookahead(0)!==x;){var t=this.expression(0);if(e.push(t),this._lookahead(0)===C&&(this._match(C),this._lookahead(0)===x))throw Error(`Unexpected token Rbracket`)}return this._match(x),{type:`MultiSelectList`,children:e}},_parseMultiselectHash:function(){for(var e=[],t=[y,b],n,r,i,a;;){if(n=this._lookaheadToken(0),t.indexOf(n.type)<0)throw Error(`Expecting an identifier token, got: `+n.type);if(r=n.value,this._advance(),this._match(w),i=this.expression(0),a={type:`KeyValuePair`,name:r,value:i},e.push(a),this._lookahead(0)===C)this._match(C);else if(this._lookahead(0)===T){this._match(T);break}}return{type:`MultiSelectHash`,children:e}}};function be(e){this.runtime=e}be.prototype={search:function(e,t){return this.visit(e,t)},visit:function(e,o){var s,c,l,u,d,f,p,m,h,g;switch(e.type){case`Field`:return o!==null&&n(o)?(f=o[e.name],f===void 0?null:f):null;case`Subexpression`:for(l=this.visit(e.children[0],o),g=1;g<e.children.length;g++)if(l=this.visit(e.children[1],l),l===null)return null;return l;case`IndexExpression`:return p=this.visit(e.children[0],o),m=this.visit(e.children[1],p),m;case`Index`:if(!t(o))return null;var _=e.value;return _<0&&(_=o.length+_),l=o[_],l===void 0&&(l=null),l;case`Slice`:if(!t(o))return null;var v=e.children.slice(0),y=this.computeSliceParams(o.length,v),b=y[0],x=y[1],S=y[2];if(l=[],S>0)for(g=b;g<x;g+=S)l.push(o[g]);else for(g=b;g>x;g+=S)l.push(o[g]);return l;case`Projection`:var C=this.visit(e.children[0],o);if(!t(C))return null;for(h=[],g=0;g<C.length;g++)c=this.visit(e.children[1],C[g]),c!==null&&h.push(c);return h;case`ValueProjection`:if(C=this.visit(e.children[0],o),!n(C))return null;h=[];var w=a(C);for(g=0;g<w.length;g++)c=this.visit(e.children[1],w[g]),c!==null&&h.push(c);return h;case`FilterProjection`:if(C=this.visit(e.children[0],o),!t(C))return null;var T=[],E=[];for(g=0;g<C.length;g++)s=this.visit(e.children[2],C[g]),i(s)||T.push(C[g]);for(var ne=0;ne<T.length;ne++)c=this.visit(e.children[1],T[ne]),c!==null&&E.push(c);return E;case`Comparator`:switch(u=this.visit(e.children[0],o),d=this.visit(e.children[1],o),e.name){case ie:l=r(u,d);break;case oe:l=!r(u,d);break;case O:l=u>d;break;case k:l=u>=d;break;case ae:l=u<d;break;case A:l=u<=d;break;default:throw Error(`Unknown comparator: `+e.name)}return l;case se:var re=this.visit(e.children[0],o);if(!t(re))return null;var ce=[];for(g=0;g<re.length;g++)c=re[g],t(c)?ce.push.apply(ce,c):ce.push(c);return ce;case`Identity`:return o;case`MultiSelectList`:if(o===null)return null;for(h=[],g=0;g<e.children.length;g++)h.push(this.visit(e.children[g],o));return h;case`MultiSelectHash`:if(o===null)return null;h={};var le;for(g=0;g<e.children.length;g++)le=e.children[g],h[le.name]=this.visit(le.value,o);return h;case`OrExpression`:return s=this.visit(e.children[0],o),i(s)&&(s=this.visit(e.children[1],o)),s;case`AndExpression`:return u=this.visit(e.children[0],o),i(u)===!0?u:this.visit(e.children[1],o);case`NotExpression`:return u=this.visit(e.children[0],o),i(u);case`Literal`:return e.value;case te:return p=this.visit(e.children[0],o),this.visit(e.children[1],p);case D:return o;case`Function`:var ue=[];for(g=0;g<e.children.length;g++)ue.push(this.visit(e.children[g],o));return this.runtime.callFunction(e.name,ue);case`ExpressionReference`:var de=e.children[0];return de.jmespathType=ee,de;default:throw Error(`Unknown node type: `+e.type)}},computeSliceParams:function(e,t){var n=t[0],r=t[1],i=t[2],a=[null,null,null];if(i===null)i=1;else if(i===0){var o=Error(`Invalid slice, step cannot be 0`);throw o.name=`RuntimeError`,o}var s=i<0;return n=n===null?s?e-1:0:this.capSliceRange(e,n,i),r=r===null?s?-1:e:this.capSliceRange(e,r,i),a[0]=n,a[1]=r,a[2]=i,a},capSliceRange:function(e,t,n){return t<0?(t+=e,t<0&&(t=n<0?-1:0)):t>=e&&(t=n<0?e-1:e),t}};function xe(e){this._interpreter=e,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[s]}]},avg:{_func:this._functionAvg,_signature:[{types:[h]}]},ceil:{_func:this._functionCeil,_signature:[{types:[s]}]},contains:{_func:this._functionContains,_signature:[{types:[l,u]},{types:[c]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[l]},{types:[l]}]},floor:{_func:this._functionFloor,_signature:[{types:[s]}]},length:{_func:this._functionLength,_signature:[{types:[l,u,d]}]},map:{_func:this._functionMap,_signature:[{types:[p]},{types:[u]}]},max:{_func:this._functionMax,_signature:[{types:[h,g]}]},merge:{_func:this._functionMerge,_signature:[{types:[d],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[u]},{types:[p]}]},sum:{_func:this._functionSum,_signature:[{types:[h]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[l]},{types:[l]}]},min:{_func:this._functionMin,_signature:[{types:[h,g]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[u]},{types:[p]}]},type:{_func:this._functionType,_signature:[{types:[c]}]},keys:{_func:this._functionKeys,_signature:[{types:[d]}]},values:{_func:this._functionValues,_signature:[{types:[d]}]},sort:{_func:this._functionSort,_signature:[{types:[g,h]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[u]},{types:[p]}]},join:{_func:this._functionJoin,_signature:[{types:[l]},{types:[g]}]},reverse:{_func:this._functionReverse,_signature:[{types:[l,u]}]},to_array:{_func:this._functionToArray,_signature:[{types:[c]}]},to_string:{_func:this._functionToString,_signature:[{types:[c]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[c]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[c],variadic:!0}]}}}xe.prototype={callFunction:function(e,t){var n=this.functionTable[e];if(n===void 0)throw Error(`Unknown function: `+e+`()`);return this._validateArgs(e,t,n._signature),n._func.call(this,t)},_validateArgs:function(e,t,n){var r;if(n[n.length-1].variadic){if(t.length<n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes at least`+n.length+r+` but received `+t.length)}else if(t.length!==n.length)throw r=n.length===1?` argument`:` arguments`,Error(`ArgumentError: `+e+`() takes `+n.length+r+` but received `+t.length);for(var i,a,o,s=0;s<n.length;s++){o=!1,i=n[s].types,a=this._getTypeName(t[s]);for(var c=0;c<i.length;c++)if(this._typeMatches(a,i[c],t[s])){o=!0;break}if(!o){var l=i.map(function(e){return _[e]}).join(`,`);throw Error(`TypeError: `+e+`() expected argument `+(s+1)+` to be type `+l+` but received type `+_[a]+` instead.`)}}},_typeMatches:function(e,t,n){if(t===c)return!0;if(t===g||t===h||t===u){if(t===u)return e===u;if(e===u){var r;t===h?r=s:t===g&&(r=l);for(var i=0;i<n.length;i++)if(!this._typeMatches(this._getTypeName(n[i]),r,n[i]))return!1;return!0}}else return e===t},_getTypeName:function(e){switch(Object.prototype.toString.call(e)){case`[object String]`:return l;case`[object Number]`:return s;case`[object Array]`:return u;case`[object Boolean]`:return f;case`[object Null]`:return m;case`[object Object]`:return e.jmespathType===ee?p:d}},_functionStartsWith:function(e){return e[0].lastIndexOf(e[1])===0},_functionEndsWith:function(e){var t=e[0],n=e[1];return t.indexOf(n,t.length-n.length)!==-1},_functionReverse:function(e){if(this._getTypeName(e[0])===l){for(var t=e[0],n=``,r=t.length-1;r>=0;r--)n+=t[r];return n}else{var i=e[0].slice(0);return i.reverse(),i}},_functionAbs:function(e){return Math.abs(e[0])},_functionCeil:function(e){return Math.ceil(e[0])},_functionAvg:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t/n.length},_functionContains:function(e){return e[0].indexOf(e[1])>=0},_functionFloor:function(e){return Math.floor(e[0])},_functionLength:function(e){return n(e[0])?Object.keys(e[0]).length:e[0].length},_functionMap:function(e){for(var t=[],n=this._interpreter,r=e[0],i=e[1],a=0;a<i.length;a++)t.push(n.visit(r,i[a]));return t},_functionMerge:function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var i in r)t[i]=r[i]}return t},_functionMax:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.max.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)n.localeCompare(t[r])<0&&(n=t[r]);return n}else return null},_functionMin:function(e){if(e[0].length>0){if(this._getTypeName(e[0][0])===s)return Math.min.apply(Math,e[0]);for(var t=e[0],n=t[0],r=1;r<t.length;r++)t[r].localeCompare(n)<0&&(n=t[r]);return n}else return null},_functionSum:function(e){for(var t=0,n=e[0],r=0;r<n.length;r++)t+=n[r];return t},_functionType:function(e){switch(this._getTypeName(e[0])){case s:return`number`;case l:return`string`;case u:return`array`;case d:return`object`;case f:return`boolean`;case p:return`expref`;case m:return`null`}},_functionKeys:function(e){return Object.keys(e[0])},_functionValues:function(e){for(var t=e[0],n=Object.keys(t),r=[],i=0;i<n.length;i++)r.push(t[n[i]]);return r},_functionJoin:function(e){var t=e[0];return e[1].join(t)},_functionToArray:function(e){return this._getTypeName(e[0])===u?e[0]:[e[0]]},_functionToString:function(e){return this._getTypeName(e[0])===l?e[0]:JSON.stringify(e[0])},_functionToNumber:function(e){var t=this._getTypeName(e[0]),n;return t===s?e[0]:t===l&&(n=+e[0],!isNaN(n))?n:null},_functionNotNull:function(e){for(var t=0;t<e.length;t++)if(this._getTypeName(e[t])!==m)return e[t];return null},_functionSort:function(e){var t=e[0].slice(0);return t.sort(),t},_functionSortBy:function(e){var t=e[0].slice(0);if(t.length===0)return t;var n=this._interpreter,r=e[1],i=this._getTypeName(n.visit(r,t[0]));if([s,l].indexOf(i)<0)throw Error(`TypeError`);for(var a=this,o=[],c=0;c<t.length;c++)o.push([c,t[c]]);o.sort(function(e,t){var o=n.visit(r,e[1]),s=n.visit(r,t[1]);if(a._getTypeName(o)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(o));if(a._getTypeName(s)!==i)throw Error(`TypeError: expected `+i+`, received `+a._getTypeName(s));return o>s?1:o<s?-1:e[0]-t[0]});for(var u=0;u<o.length;u++)t[u]=o[u][1];return t},_functionMaxBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=-1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o>i&&(i=o,a=n[c]);return a},_functionMinBy:function(e){for(var t=e[1],n=e[0],r=this.createKeyFunction(t,[s,l]),i=1/0,a,o,c=0;c<n.length;c++)o=r(n[c]),o<i&&(i=o,a=n[c]);return a},createKeyFunction:function(e,t){var n=this,r=this._interpreter;return function(i){var a=r.visit(e,i);if(t.indexOf(n._getTypeName(a))<0){var o=`TypeError: expected one of `+t+`, received `+n._getTypeName(a);throw Error(o)}return a}}};function Se(e){return new F().parse(e)}function Ce(e){return new ye().tokenize(e)}function we(e,t){var n=new F,r=new xe,i=new be(r);r._interpreter=i;var a=n.parse(t);return i.search(a,e)}e.tokenize=Ce,e.compile=Se,e.search=we,e.strictDeepEqual=r})(e===void 0?e.jmespath={}:e)})),$i=class{add(e,t,n){if(typeof arguments[0]!=`string`)for(let e in arguments[0])this.add(e,arguments[0][e],arguments[1]);else (Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},ea=class{constructor(e){this.jsep=e,this.registered={}}register(){[...arguments].forEach(e=>{if(typeof e!=`object`||!e.name||!e.init)throw Error(`Invalid JSEP plugin format`);this.registered[e.name]||(e.init(this.jsep),this.registered[e.name]=e)})}},ta=class e{static get version(){return`1.4.0`}static toString(){return`JavaScript Expression Parser (JSEP) v`+e.version}static addUnaryOp(t){return e.max_unop_len=Math.max(t.length,e.max_unop_len),e.unary_ops[t]=1,e}static addBinaryOp(t,n,r){return e.max_binop_len=Math.max(t.length,e.max_binop_len),e.binary_ops[t]=n,r?e.right_associative.add(t):e.right_associative.delete(t),e}static addIdentifierChar(t){return e.additional_identifier_chars.add(t),e}static addLiteral(t,n){return e.literals[t]=n,e}static removeUnaryOp(t){return delete e.unary_ops[t],t.length===e.max_unop_len&&(e.max_unop_len=e.getMaxKeyLen(e.unary_ops)),e}static removeAllUnaryOps(){return e.unary_ops={},e.max_unop_len=0,e}static removeIdentifierChar(t){return e.additional_identifier_chars.delete(t),e}static removeBinaryOp(t){return delete e.binary_ops[t],t.length===e.max_binop_len&&(e.max_binop_len=e.getMaxKeyLen(e.binary_ops)),e.right_associative.delete(t),e}static removeAllBinaryOps(){return e.binary_ops={},e.max_binop_len=0,e}static removeLiteral(t){return delete e.literals[t],e}static removeAllLiterals(){return e.literals={},e}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(e){this.expr=e,this.index=0}static parse(t){return new e(t).parse()}static getMaxKeyLen(e){return Math.max(0,...Object.keys(e).map(e=>e.length))}static isDecimalDigit(e){return e>=48&&e<=57}static binaryPrecedence(t){return e.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!e.binary_ops[String.fromCharCode(t)]||e.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return e.isIdentifierStart(t)||e.isDecimalDigit(t)}throwError(e){let t=Error(e+` at character `+this.index);throw t.index=this.index,t.description=e,t}runHook(t,n){if(e.hooks[t]){let r={context:this,node:n};return e.hooks.run(t,r),r.node}return n}searchHook(t){if(e.hooks[t]){let n={context:this};return e.hooks[t].find(function(e){return e.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let t=this.code;for(;t===e.SPACE_CODE||t===e.TAB_CODE||t===e.LF_CODE||t===e.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook(`gobble-spaces`)}parse(){this.runHook(`before-all`);let t=this.gobbleExpressions(),n=t.length===1?t[0]:{type:e.COMPOUND,body:t};return this.runHook(`after-all`,n)}gobbleExpressions(t){let n=[],r,i;for(;this.index<this.expr.length;)if(r=this.code,r===e.SEMCOL_CODE||r===e.COMMA_CODE)this.index++;else if(i=this.gobbleExpression())n.push(i);else if(this.index<this.expr.length){if(r===t)break;this.throwError(`Unexpected "`+this.char+`"`)}return n}gobbleExpression(){let e=this.searchHook(`gobble-expression`)||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook(`after-expression`,e)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,e.max_binop_len),n=t.length;for(;n>0;){if(e.binary_ops.hasOwnProperty(t)&&(!e.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=n,t;t=t.substr(0,--n)}return!1}gobbleBinaryExpression(){let t,n,r,i,a,o,s,c,l;if(o=this.gobbleToken(),!o||(n=this.gobbleBinaryOp(),!n))return o;for(a={value:n,prec:e.binaryPrecedence(n),right_a:e.right_associative.has(n)},s=this.gobbleToken(),s||this.throwError(`Expected expression after `+n),i=[o,a,s];n=this.gobbleBinaryOp();){if(r=e.binaryPrecedence(n),r===0){this.index-=n.length;break}a={value:n,prec:r,right_a:e.right_associative.has(n)},l=n;let c=e=>a.right_a&&e.right_a?r>e.prec:r<=e.prec;for(;i.length>2&&c(i[i.length-2]);)s=i.pop(),n=i.pop().value,o=i.pop(),t={type:e.BINARY_EXP,operator:n,left:o,right:s},i.push(t);t=this.gobbleToken(),t||this.throwError(`Expected expression after `+l),i.push(a,t)}for(c=i.length-1,t=i[c];c>1;)t={type:e.BINARY_EXP,operator:i[c-1].value,left:i[c-2],right:t},c-=2;return t}gobbleToken(){let t,n,r,i;if(this.gobbleSpaces(),i=this.searchHook(`gobble-token`),i)return this.runHook(`after-token`,i);if(t=this.code,e.isDecimalDigit(t)||t===e.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===e.SQUOTE_CODE||t===e.DQUOTE_CODE)i=this.gobbleStringLiteral();else if(t===e.OBRACK_CODE)i=this.gobbleArray();else{for(n=this.expr.substr(this.index,e.max_unop_len),r=n.length;r>0;){if(e.unary_ops.hasOwnProperty(n)&&(!e.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=r;let t=this.gobbleToken();return t||this.throwError(`missing unaryOp argument`),this.runHook(`after-token`,{type:e.UNARY_EXP,operator:n,argument:t,prefix:!0})}n=n.substr(0,--r)}e.isIdentifierStart(t)?(i=this.gobbleIdentifier(),e.literals.hasOwnProperty(i.name)?i={type:e.LITERAL,value:e.literals[i.name],raw:i.name}:i.name===e.this_str&&(i={type:e.THIS_EXP})):t===e.OPAREN_CODE&&(i=this.gobbleGroup())}return i?(i=this.gobbleTokenProperty(i),this.runHook(`after-token`,i)):this.runHook(`after-token`,!1)}gobbleTokenProperty(t){this.gobbleSpaces();let n=this.code;for(;n===e.PERIOD_CODE||n===e.OBRACK_CODE||n===e.OPAREN_CODE||n===e.QUMARK_CODE;){let r;if(n===e.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==e.PERIOD_CODE)break;r=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===e.OBRACK_CODE?(t={type:e.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError(`Unexpected "`+this.char+`"`),this.gobbleSpaces(),n=this.code,n!==e.CBRACK_CODE&&this.throwError(`Unclosed [`),this.index++):n===e.OPAREN_CODE?t={type:e.CALL_EXP,arguments:this.gobbleArguments(e.CPAREN_CODE),callee:t}:(n===e.PERIOD_CODE||r)&&(r&&this.index--,this.gobbleSpaces(),t={type:e.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),r&&(t.optional=!0),this.gobbleSpaces(),n=this.code}return t}gobbleNumericLiteral(){let t=``,n,r;for(;e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===e.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(n=this.char,n===`e`||n===`E`){for(t+=this.expr.charAt(this.index++),n=this.char,(n===`+`||n===`-`)&&(t+=this.expr.charAt(this.index++));e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError(`Expected exponent (`+t+this.char+`)`)}return r=this.code,e.isIdentifierStart(r)?this.throwError(`Variable names cannot start with a number (`+t+this.char+`)`):(r===e.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===e.PERIOD_CODE)&&this.throwError(`Unexpected period`),{type:e.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t=``,n=this.index,r=this.expr.charAt(this.index++),i=!1;for(;this.index<this.expr.length;){let e=this.expr.charAt(this.index++);if(e===r){i=!0;break}else if(e===`\\`)switch(e=this.expr.charAt(this.index++),e){case`n`:t+=`
`;break;case`r`:t+=`\r`;break;case`t`:t+=`	`;break;case`b`:t+=`\b`;break;case`f`:t+=`\f`;break;case`v`:t+=`\v`;break;default:t+=e}else t+=e}return i||this.throwError(`Unclosed quote after "`+t+`"`),{type:e.LITERAL,value:t,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let t=this.code,n=this.index;for(e.isIdentifierStart(t)?this.index++:this.throwError(`Unexpected `+this.char);this.index<this.expr.length&&(t=this.code,e.isIdentifierPart(t));)this.index++;return{type:e.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(t){let n=[],r=!1,i=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){r=!0,this.index++,t===e.CPAREN_CODE&&i&&i>=n.length&&this.throwError(`Unexpected token `+String.fromCharCode(t));break}else if(a===e.COMMA_CODE){if(this.index++,i++,i!==n.length){if(t===e.CPAREN_CODE)this.throwError(`Unexpected token ,`);else if(t===e.CBRACK_CODE)for(let e=n.length;e<i;e++)n.push(null)}}else if(n.length!==i&&i!==0)this.throwError(`Expected comma`);else{let t=this.gobbleExpression();(!t||t.type===e.COMPOUND)&&this.throwError(`Expected comma`),n.push(t)}}return r||this.throwError(`Expected `+String.fromCharCode(t)),n}gobbleGroup(){this.index++;let t=this.gobbleExpressions(e.CPAREN_CODE);if(this.code===e.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:e.SEQUENCE_EXP,expressions:t}:!1;this.throwError(`Unclosed (`)}gobbleArray(){return this.index++,{type:e.ARRAY_EXP,elements:this.gobbleArguments(e.CBRACK_CODE)}}},na=new $i;Object.assign(ta,{hooks:na,plugins:new ea(ta),COMPOUND:`Compound`,SEQUENCE_EXP:`SequenceExpression`,IDENTIFIER:`Identifier`,MEMBER_EXP:`MemberExpression`,LITERAL:`Literal`,THIS_EXP:`ThisExpression`,CALL_EXP:`CallExpression`,UNARY_EXP:`UnaryExpression`,BINARY_EXP:`BinaryExpression`,ARRAY_EXP:`ArrayExpression`,TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set([`**`]),additional_identifier_chars:new Set([`$`,`_`]),literals:{true:!0,false:!1,null:null},this_str:`this`}),ta.max_unop_len=ta.getMaxKeyLen(ta.unary_ops),ta.max_binop_len=ta.getMaxKeyLen(ta.binary_ops);var ra=e=>new ta(e).parse(),ia=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(ta).filter(e=>!ia.includes(e)&&ra[e]===void 0).forEach(e=>{ra[e]=ta[e]}),ra.Jsep=ta;var aa=`ConditionalExpression`;ra.plugins.register({name:`ternary`,init(e){e.hooks.add(`after-expression`,function(t){if(t.node&&this.code===e.QUMARK_CODE){this.index++;let n=t.node,r=this.gobbleExpression();if(r||this.throwError(`Expected expression`),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError(`Expected expression`),t.node={type:aa,test:n,consequent:r,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let r=n;for(;r.right.operator&&e.binary_ops[r.right.operator]<=.9;)r=r.right;t.node.test=r.right,r.right=t.node,t.node=n}}else this.throwError(`Expected :`)}})}});var oa=47,sa=92,ca={name:`regex`,init(e){e.hooks.add(`gobble-token`,function(t){if(this.code===oa){let n=++this.index,r=!1;for(;this.index<this.expr.length;){if(this.code===oa&&!r){let r=this.expr.slice(n,this.index),i=``;for(;++this.index<this.expr.length;){let e=this.code;if(e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57)i+=this.char;else break}let a;try{a=new RegExp(r,i)}catch(e){this.throwError(e.message)}return t.node={type:e.LITERAL,value:a,raw:this.expr.slice(n-1,this.index)},t.node=this.gobbleTokenProperty(t.node),t.node}this.code===e.OBRACK_CODE?r=!0:r&&this.code===e.CBRACK_CODE&&(r=!1),this.index+=this.code===sa?2:1}this.throwError(`Unclosed Regex`)}})}},la=43,ua={name:`assignment`,assignmentOperators:new Set([`=`,`*=`,`**=`,`/=`,`%=`,`+=`,`-=`,`<<=`,`>>=`,`>>>=`,`&=`,`^=`,`|=`,`||=`,`&&=`,`??=`]),updateOperators:[la,45],assignmentPrecedence:.9,init(e){let t=[e.IDENTIFIER,e.MEMBER_EXP];ua.assignmentOperators.forEach(t=>e.addBinaryOp(t,ua.assignmentPrecedence,!0)),e.hooks.add(`gobble-token`,function(e){let n=this.code;ua.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(this.index+=2,e.node={type:`UpdateExpression`,operator:n===la?`++`:`--`,argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!e.node.argument||!t.includes(e.node.argument.type))&&this.throwError(`Unexpected ${e.node.operator}`))}),e.hooks.add(`after-token`,function(e){if(e.node){let n=this.code;ua.updateOperators.some(e=>e===n&&e===this.expr.charCodeAt(this.index+1))&&(t.includes(e.node.type)||this.throwError(`Unexpected ${e.node.operator}`),this.index+=2,e.node={type:`UpdateExpression`,operator:n===la?`++`:`--`,argument:e.node,prefix:!1})}}),e.hooks.add(`after-expression`,function(e){e.node&&n(e.node)});function n(e){ua.assignmentOperators.has(e.operator)?(e.type=`AssignmentExpression`,n(e.left),n(e.right)):e.operator||Object.values(e).forEach(e=>{e&&typeof e==`object`&&n(e)})}}};ra.plugins.register(ca,ua),ra.addUnaryOp(`typeof`),ra.addUnaryOp(`void`),ra.addLiteral(`null`,null),ra.addLiteral(`undefined`,void 0);var da=new Set([`constructor`,`__proto__`,`__defineGetter__`,`__defineSetter__`,`__lookupGetter__`,`__lookupSetter__`]),fa={evalAst(e,t){switch(e.type){case`BinaryExpression`:case`LogicalExpression`:return fa.evalBinaryExpression(e,t);case`Compound`:return fa.evalCompound(e,t);case`ConditionalExpression`:return fa.evalConditionalExpression(e,t);case`Identifier`:return fa.evalIdentifier(e,t);case`Literal`:return fa.evalLiteral(e,t);case`MemberExpression`:return fa.evalMemberExpression(e,t);case`UnaryExpression`:return fa.evalUnaryExpression(e,t);case`ArrayExpression`:return fa.evalArrayExpression(e,t);case`CallExpression`:return fa.evalCallExpression(e,t);case`AssignmentExpression`:return fa.evalAssignmentExpression(e,t);default:throw SyntaxError(`Unexpected expression`,e)}},evalBinaryExpression(e,t){return{"||":(e,t)=>e||t(),"&&":(e,t)=>e&&t(),"|":(e,t)=>e|t(),"^":(e,t)=>e^t(),"&":(e,t)=>e&t(),"==":(e,t)=>e==t(),"!=":(e,t)=>e!=t(),"===":(e,t)=>e===t(),"!==":(e,t)=>e!==t(),"<":(e,t)=>e<t(),">":(e,t)=>e>t(),"<=":(e,t)=>e<=t(),">=":(e,t)=>e>=t(),"<<":(e,t)=>e<<t(),">>":(e,t)=>e>>t(),">>>":(e,t)=>e>>>t(),"+":(e,t)=>e+t(),"-":(e,t)=>e-t(),"*":(e,t)=>e*t(),"/":(e,t)=>e/t(),"%":(e,t)=>e%t()}[e.operator](fa.evalAst(e.left,t),()=>fa.evalAst(e.right,t))},evalCompound(e,t){let n;for(let r=0;r<e.body.length;r++){e.body[r].type===`Identifier`&&[`var`,`let`,`const`].includes(e.body[r].name)&&e.body[r+1]&&e.body[r+1].type===`AssignmentExpression`&&(r+=1);let i=e.body[r];n=fa.evalAst(i,t)}return n},evalConditionalExpression(e,t){return fa.evalAst(e.test,t)?fa.evalAst(e.consequent,t):fa.evalAst(e.alternate,t)},evalIdentifier(e,t){if(Object.hasOwn(t,e.name))return t[e.name];throw ReferenceError(`${e.name} is not defined`)},evalLiteral(e){return e.value},evalMemberExpression(e,t){let n=String(e.computed?fa.evalAst(e.property):e.property.name),r=fa.evalAst(e.object,t);if(r==null||!Object.hasOwn(r,n)&&da.has(n))throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);let i=r[n];return typeof i==`function`?i.bind(r):i},evalUnaryExpression(e,t){return{"-":e=>-fa.evalAst(e,t),"!":e=>!fa.evalAst(e,t),"~":e=>~fa.evalAst(e,t),"+":e=>+fa.evalAst(e,t),typeof:e=>typeof fa.evalAst(e,t),void:e=>void fa.evalAst(e,t)}[e.operator](e.argument)},evalArrayExpression(e,t){return e.elements.map(e=>fa.evalAst(e,t))},evalCallExpression(e,t){let n=e.arguments.map(e=>fa.evalAst(e,t)),r=fa.evalAst(e.callee,t);if(r===Function)throw Error(`Function constructor is disabled`);return r(...n)},evalAssignmentExpression(e,t){if(e.left.type!==`Identifier`)throw SyntaxError(`Invalid left-hand side in assignment`);let n=e.left.name;return t[n]=fa.evalAst(e.right,t),t[n]}},pa=class{constructor(e){this.code=e,this.ast=ra(this.code)}runInNewContext(e){let t=Object.assign(Object.create(null),e);return fa.evalAst(this.ast,t)}};function ma(e,t){return e=e.slice(),e.push(t),e}function ha(e,t){return t=t.slice(),t.unshift(e),t}var ga=class extends Error{constructor(e){super(`JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)`),this.avoidNew=!0,this.value=e,this.name=`NewError`}};function _a(e,t,n,r,i){if(!(this instanceof _a))try{return new _a(e,t,n,r,i)}catch(e){if(!e.avoidNew)throw e;return e.value}typeof e==`string`&&(i=r,r=n,n=t,t=e,e=null);let a=e&&typeof e==`object`;if(e||={},this.json=e.json||n,this.path=e.path||t,this.resultType=e.resultType||`value`,this.flatten=e.flatten||!1,this.wrap=Object.hasOwn(e,`wrap`)?e.wrap:!0,this.sandbox=e.sandbox||{},this.eval=e.eval===void 0?`safe`:e.eval,this.ignoreEvalErrors=e.ignoreEvalErrors===void 0?!1:e.ignoreEvalErrors,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||r||null,this.otherTypeCallback=e.otherTypeCallback||i||function(){throw TypeError(`You must supply an otherTypeCallback callback option with the @other() operator.`)},e.autostart!==!1){let r={path:a?e.path:t};a?`json`in e&&(r.json=e.json):r.json=n;let i=this.evaluate(r);if(!i||typeof i!=`object`)throw new ga(i);return i}}_a.prototype.evaluate=function(e,t,n,r){let i=this.parent,a=this.parentProperty,{flatten:o,wrap:s}=this;if(this.currResultType=this.resultType,this.currEval=this.eval,this.currSandbox=this.sandbox,n||=this.callback,this.currOtherTypeCallback=r||this.otherTypeCallback,t||=this.json,e||=this.path,e&&typeof e==`object`&&!Array.isArray(e)){if(!e.path&&e.path!==``)throw TypeError(`You must supply a "path" property when providing an object argument to JSONPath.evaluate().`);if(!Object.hasOwn(e,`json`))throw TypeError(`You must supply a "json" property when providing an object argument to JSONPath.evaluate().`);({json:t}=e),o=Object.hasOwn(e,`flatten`)?e.flatten:o,this.currResultType=Object.hasOwn(e,`resultType`)?e.resultType:this.currResultType,this.currSandbox=Object.hasOwn(e,`sandbox`)?e.sandbox:this.currSandbox,s=Object.hasOwn(e,`wrap`)?e.wrap:s,this.currEval=Object.hasOwn(e,`eval`)?e.eval:this.currEval,n=Object.hasOwn(e,`callback`)?e.callback:n,this.currOtherTypeCallback=Object.hasOwn(e,`otherTypeCallback`)?e.otherTypeCallback:this.currOtherTypeCallback,i=Object.hasOwn(e,`parent`)?e.parent:i,a=Object.hasOwn(e,`parentProperty`)?e.parentProperty:a,e=e.path}if(i||=null,a||=null,Array.isArray(e)&&(e=_a.toPathString(e)),!e&&e!==``||!t)return;let c=_a.toPathArray(e);c[0]===`$`&&c.length>1&&c.shift(),this._hasParentSelector=null;let l=this._trace(c,t,[`$`],i,a,n).filter(function(e){return e&&!e.isParentSelector});return l.length?!s&&l.length===1&&!l[0].hasArrExpr?this._getPreferredOutput(l[0]):l.reduce((e,t)=>{let n=this._getPreferredOutput(t);return o&&Array.isArray(n)?e=e.concat(n):e.push(n),e},[]):s?[]:void 0},_a.prototype._getPreferredOutput=function(e){let t=this.currResultType;switch(t){case`all`:{let t=Array.isArray(e.path)?e.path:_a.toPathArray(e.path);return e.pointer=_a.toPointer(t),e.path=typeof e.path==`string`?e.path:_a.toPathString(e.path),e}case`value`:case`parent`:case`parentProperty`:return e[t];case`path`:return _a.toPathString(e[t]);case`pointer`:return _a.toPointer(e.path);default:throw TypeError(`Unknown result type`)}},_a.prototype._handleCallback=function(e,t,n){if(t){let r=this._getPreferredOutput(e);e.path=typeof e.path==`string`?e.path:_a.toPathString(e.path),t(r,n,e)}},_a.prototype._trace=function(e,t,n,r,i,a,o,s){let c;if(!e.length)return c={path:n,value:t,parent:r,parentProperty:i,hasArrExpr:o},this._handleCallback(c,a,`value`),c;let l=e[0],u=e.slice(1),d=[];function f(e){Array.isArray(e)?e.forEach(e=>{d.push(e)}):d.push(e)}if((typeof l!=`string`||s)&&t&&Object.hasOwn(t,l))f(this._trace(u,t[l],ma(n,l),t,l,a,o));else if(l===`*`)this._walk(t,e=>{f(this._trace(u,t[e],ma(n,e),t,e,a,!0,!0))});else if(l===`..`)f(this._trace(u,t,n,r,i,a,o)),this._walk(t,r=>{typeof t[r]==`object`&&f(this._trace(e.slice(),t[r],ma(n,r),t,r,a,!0))});else if(l===`^`)return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:u,isParentSelector:!0};else if(l===`~`)return c={path:ma(n,l),value:i,parent:r,parentProperty:null},this._handleCallback(c,a,`property`),c;else if(l===`$`)f(this._trace(u,t,n,null,null,a,o));else if(/^(-?\d*):(-?\d*):?(\d*)$/u.test(l))f(this._slice(l,u,t,n,r,i,a));else if(l.indexOf(`?(`)===0){if(this.currEval===!1)throw Error(`Eval [?(expr)] prevented in JSONPath expression.`);let e=l.replace(/^\?\((.*?)\)$/u,`$1`),o=/@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(e);o?this._walk(t,e=>{let s=[o[2]],c=o[1]?t[e][o[1]]:t[e];this._trace(s,c,n,r,i,a,!0).length>0&&f(this._trace(u,t[e],ma(n,e),t,e,a,!0))}):this._walk(t,o=>{this._eval(e,t[o],o,n,r,i)&&f(this._trace(u,t[o],ma(n,o),t,o,a,!0))})}else if(l[0]===`(`){if(this.currEval===!1)throw Error(`Eval [(expr)] prevented in JSONPath expression.`);f(this._trace(ha(this._eval(l,t,n.at(-1),n.slice(0,-1),r,i),u),t,n,r,i,a,o))}else if(l[0]===`@`){let e=!1,o=l.slice(1,-2);switch(o){case`scalar`:(!t||![`object`,`function`].includes(typeof t))&&(e=!0);break;case`boolean`:case`string`:case`undefined`:case`function`:typeof t===o&&(e=!0);break;case`integer`:Number.isFinite(t)&&!(t%1)&&(e=!0);break;case`number`:Number.isFinite(t)&&(e=!0);break;case`nonFinite`:typeof t==`number`&&!Number.isFinite(t)&&(e=!0);break;case`object`:t&&typeof t===o&&(e=!0);break;case`array`:Array.isArray(t)&&(e=!0);break;case`other`:e=this.currOtherTypeCallback(t,n,r,i);break;case`null`:t===null&&(e=!0);break;default:throw TypeError(`Unknown value type `+o)}if(e)return c={path:n,value:t,parent:r,parentProperty:i},this._handleCallback(c,a,`value`),c}else if(l[0]==="`"&&t&&Object.hasOwn(t,l.slice(1))){let e=l.slice(1);f(this._trace(u,t[e],ma(n,e),t,e,a,o,!0))}else if(l.includes(`,`)){let e=l.split(`,`);for(let o of e)f(this._trace(ha(o,u),t,n,r,i,a,!0))}else !s&&t&&Object.hasOwn(t,l)&&f(this._trace(u,t[l],ma(n,l),t,l,a,o,!0));if(this._hasParentSelector)for(let e=0;e<d.length;e++){let n=d[e];if(n&&n.isParentSelector){let s=this._trace(n.expr,t,n.path,r,i,a,o);if(Array.isArray(s)){d[e]=s[0];let t=s.length;for(let n=1;n<t;n++)e++,d.splice(e,0,s[n])}else d[e]=s}}return d},_a.prototype._walk=function(e,t){if(Array.isArray(e)){let n=e.length;for(let e=0;e<n;e++)t(e)}else e&&typeof e==`object`&&Object.keys(e).forEach(e=>{t(e)})},_a.prototype._slice=function(e,t,n,r,i,a,o){if(!Array.isArray(n))return;let s=n.length,c=e.split(`:`),l=c[2]&&Number.parseInt(c[2])||1,u=c[0]&&Number.parseInt(c[0])||0,d=c[1]&&Number.parseInt(c[1])||s;u=u<0?Math.max(0,u+s):Math.min(s,u),d=d<0?Math.max(0,d+s):Math.min(s,d);let f=[];for(let e=u;e<d;e+=l)this._trace(ha(e,t),n,r,i,a,o,!0).forEach(e=>{f.push(e)});return f},_a.prototype._eval=function(e,t,n,r,i,a){this.currSandbox._$_parentProperty=a,this.currSandbox._$_parent=i,this.currSandbox._$_property=n,this.currSandbox._$_root=this.json,this.currSandbox._$_v=t;let o=e.includes(`@path`);o&&(this.currSandbox._$_path=_a.toPathString(r.concat([n])));let s=this.currEval+`Script:`+e;if(!_a.cache[s]){let t=e.replaceAll(`@parentProperty`,`_$_parentProperty`).replaceAll(`@parent`,`_$_parent`).replaceAll(`@property`,`_$_property`).replaceAll(`@root`,`_$_root`).replaceAll(/@([.\s)[])/gu,`_$_v$1`);if(o&&(t=t.replaceAll(`@path`,`_$_path`)),this.currEval===`safe`||this.currEval===!0||this.currEval===void 0)_a.cache[s]=new this.safeVm.Script(t);else if(this.currEval===`native`)_a.cache[s]=new this.vm.Script(t);else if(typeof this.currEval==`function`&&this.currEval.prototype&&Object.hasOwn(this.currEval.prototype,`runInNewContext`)){let e=this.currEval;_a.cache[s]=new e(t)}else if(typeof this.currEval==`function`)_a.cache[s]={runInNewContext:e=>this.currEval(t,e)};else throw TypeError(`Unknown "eval" property "${this.currEval}"`)}try{return _a.cache[s].runInNewContext(this.currSandbox)}catch(t){if(this.ignoreEvalErrors)return!1;throw Error(`jsonPath: `+t.message+`: `+e)}},_a.cache={},_a.toPathString=function(e){let t=e,n=t.length,r=`$`;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=/^[0-9*]+$/u.test(t[e])?`[`+t[e]+`]`:`['`+t[e]+`']`);return r},_a.toPointer=function(e){let t=e,n=t.length,r=``;for(let e=1;e<n;e++)/^(~|\^|@.*?\(\))$/u.test(t[e])||(r+=`/`+t[e].toString().replaceAll(`~`,`~0`).replaceAll(`/`,`~1`));return r},_a.toPathArray=function(e){let{cache:t}=_a;if(t[e])return t[e].concat();let n=[];return t[e]=e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu,`;$&;`).replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu,function(e,t){return`[#`+(n.push(t)-1)+`]`}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu,function(e,t){return`['`+t.replaceAll(`.`,`%@%`).replaceAll(`~`,`%%@@%%`)+`']`}).replaceAll(`~`,`;~;`).replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu,`;`).replaceAll(`%@%`,`.`).replaceAll(`%%@@%%`,`~`).replaceAll(/(?:;)?(\^+)(?:;)?/gu,function(e,t){return`;`+t.split(``).join(`;`)+`;`}).replaceAll(/;;;|;;/gu,`;..;`).replaceAll(/;$|'?\]|'$/gu,``).split(`;`).map(function(e){let t=e.match(/#(\d+)/u);return!t||!t[1]?e:n[t[1]]}),t[e].concat()},_a.prototype.safeVm={Script:pa};var va=function(e,t,n){let r=e.length;for(let i=0;i<r;i++){let r=e[i];n(r)&&t.push(e.splice(i--,1)[0])}},ya=class{constructor(e){this.code=e}runInNewContext(e){let t=this.code,n=Object.keys(e),r=[];va(n,r,t=>typeof e[t]==`function`);let i=n.map(t=>e[t]);t=r.reduce((t,n)=>{let r=e[n].toString();return/function/u.test(r)||(r=`function `+r),`var `+n+`=`+r+`;`+t},``)+t,!/(['"])use strict\1/u.test(t)&&!n.includes(`arguments`)&&(t=`var arguments = undefined;`+t),t=t.replace(/;\s*$/u,``);let a=t.lastIndexOf(`;`),o=a===-1?` return `+t:t.slice(0,a+1)+` return `+t.slice(a+1);return Function(...n,o)(...i)}};_a.prototype.vm={Script:ya};var ba=we({String:ve.string,Number:ve.number,"True False":ve.bool,PropertyName:ve.propertyName,Null:ve.null,", :":ve.separator,"[ ]":ve.squareBracket,"{ }":ve.brace}),xa=Ye.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",stateData:`#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O`,goto:"!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:`⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array`,maxTerm:25,nodeProps:[[`isolate`,-2,6,11,``],[`openedBy`,7,`{`,14,`[`],[`closedBy`,8,`}`,15,`]`]],propSources:[ba],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),Sa=P.define({name:`json`,parser:xa.configure({props:[F.add({Object:Be({except:/^\s*\}/}),Array:Be({except:/^\s*\]/})}),ot.add({"Object Array":N})]}),languageData:{closeBrackets:{brackets:[`[`,`{`,`"`]},indentOnInput:/^\s*[\}\]]$/}});function Ca(){return new me(Sa)}function wa(e,t=e.state){let n=new Set;for(let{from:r,to:i}of e.visibleRanges){let e=r;for(;e<=i;){let r=t.doc.lineAt(e);n.has(r)||n.add(r),e=r.to+1}}return n}function Ta(e){let t=e.selection.main.head;return e.doc.lineAt(t)}function Ea(e,t){let n=0;loop:for(let r=0;r<e.length;r++)switch(e[r]){case` `:case`\xA0`:n+=1;continue loop;case`	`:n+=t-n%t;continue loop;case`\r`:continue loop;default:break loop}return n}var Da=Ee.define({combine(e){return at(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:`fullScope`,thickness:1})}}),Oa=class{constructor(e,t,n,r){this.lines=e,this.state=t,this.map=new Map,this.unitWidth=n,this.markerType=r;for(let e of this.lines)this.add(e);this.state.facet(Da).highlightActiveBlock&&this.findAndSetActiveLines()}has(e){return this.map.has(typeof e==`number`?e:e.number)}get(e){let t=this.map.get(typeof e==`number`?e:e.number);if(!t)throw Error(`Line not found in indentation map`);return t}set(e,t,n){let r={line:e,col:t,level:n,empty:!e.text.trim().length};return this.map.set(r.line.number,r),r}add(e){if(this.has(e))return this.get(e);if(!e.length||!e.text.trim().length){if(e.number===1)return this.set(e,0,0);if(e.number===this.state.doc.lines){let t=this.closestNonEmpty(e,-1);return this.set(e,0,t.level)}let t=this.closestNonEmpty(e,-1),n=this.closestNonEmpty(e,1);return t.level>=n.level&&this.markerType!==`codeOnly`?this.set(e,0,t.level):t.empty&&t.level===0&&n.level!==0?this.set(e,0,0):n.level>t.level?this.set(e,0,t.level+1):this.set(e,0,n.level)}let t=Ea(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}closestNonEmpty(e,t){let n=e.number+t;for(;t===-1?n>=1:n<=this.state.doc.lines;){if(this.has(n)){let e=this.get(n);if(!e.empty)return e}let e=this.state.doc.line(n);if(e.text.trim().length){let t=Ea(e.text,this.state.tabSize),n=Math.floor(t/this.unitWidth);return this.set(e,t,n)}n+=t}let r=this.state.doc.line(t===-1?1:this.state.doc.lines);return this.set(r,0,0)}findAndSetActiveLines(){let e=Ta(this.state);if(!this.has(e))return;let t=this.get(e);if(this.has(t.line.number+1)){let e=this.get(t.line.number+1);e.level>t.level&&(t=e)}if(this.has(t.line.number-1)){let e=this.get(t.line.number-1);e.level>t.level&&(t=e)}if(t.level===0)return;t.active=t.level;let n,r;for(n=t.line.number;n>1;n--){if(!this.has(n-1))continue;let e=this.get(n-1);if(e.level<t.level)break;e.active=t.level}for(r=t.line.number;r<this.state.doc.lines;r++){if(!this.has(r+1))continue;let e=this.get(r+1);if(e.level<t.level)break;e.active=t.level}}};function ka(e){let t={light:`#F0F1F2`,dark:`#2B3245`,activeLight:`#E4E5E6`,activeDark:`#3C445C`},n=t;return e&&(n=Object.assign(Object.assign({},t),e)),Ne.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:`relative`},".cm-indent-markers::before":{content:`""`,position:`absolute`,top:0,left:`2px`,right:0,bottom:0,background:`var(--indent-markers)`,pointerEvents:`none`,zIndex:`-1`}})}function Aa(e,t,n,r,i){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${n}ch)`} ${r*n}.5ch/calc(${n*i}ch - 1px) no-repeat`}function ja(e,t,n,r,i){let{level:a,active:o}=e;if(i??=r,n&&a===0)return[];let s=n?1:0,c=[];if(o!==void 0){let e=o-s-1;e>0&&c.push(Aa(`--indent-marker-bg-color`,r,t,s,e)),c.push(Aa(`--indent-marker-active-bg-color`,i,t,o-1,1)),o!==a&&c.push(Aa(`--indent-marker-bg-color`,r,t,o,a-o))}else c.push(Aa(`--indent-marker-bg-color`,r,t,s,a-s));return c.join(`,`)}var Ma=class{constructor(e){this.view=e,this.unitWidth=ge(e.state),this.currentLineNumber=Ta(e.state).number,this.generate(e.state)}update(e){let t=ge(e.state),n=t!==this.unitWidth;n&&(this.unitWidth=t);let r=Ta(e.state).number,i=r!==this.currentLineNumber;this.currentLineNumber=r;let a=e.state.facet(Da).highlightActiveBlock&&i;(e.docChanged||e.viewportChanged||n||a)&&this.generate(e.state)}generate(e){let t=new nt,n=wa(this.view,e),{hideFirstIndent:r,markerType:i,thickness:a,activeThickness:o}=e.facet(Da),s=new Oa(n,e,this.unitWidth,i);for(let e of n){let n=s.get(e.number);if(!n?.level)continue;let i=ja(n,this.unitWidth,r,a,o);t.add(e.from,e.from,le.line({class:`cm-indent-markers`,attributes:{style:`--indent-markers: ${i}`}}))}this.decorations=t.finish()}};function Na(e={}){return[Da.of(e),ka(e.colors),$e.fromClass(Ma,{decorations:e=>e.decorations})]}var Pa=e(Nn(),1),Fa=e(Zi(),1);Qi();var Ia=[`mainAxis`,`crossAxis`,`fallbackPlacements`,`fallbackStrategy`,`fallbackAxisSideDirection`,`flipAlignment`],La=[`mainAxis`,`crossAxis`,`limiter`];function Ra(e,t){if(e==null)return{};var n,r,i=function(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function za(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?za(Object(n),!0).forEach(function(t){qa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):za(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ba(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Va(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Ba(a,r,i,o,s,`next`,e)}function s(e){Ba(a,r,i,o,s,`throw`,e)}o(void 0)})}}function Ha(e,t){Wa(e,t),t.add(e)}function Ua(e,t,n){Wa(e,t),t.set(e,n)}function Wa(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function Ga(e,t,n){return e.set(Ka(e,t),n),n}function z(e,t){return e.get(Ka(e,t))}function Ka(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function qa(e,t,n){return(t=function(e){var t=function(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}(e,`string`);return typeof t==`symbol`?t:t+``}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ja,Ya;typeof window<`u`&&((Ja=(Ya=window).__svelte??(Ya.__svelte={})).v??(Ja.v=new Set)).add(`5`);var Xa=!1;Xa=!0;var Za=Symbol(),Qa=Array.isArray,$a=Array.prototype.indexOf,eo=Array.from,to=Object.defineProperty,no=Object.getOwnPropertyDescriptor,ro=Object.getOwnPropertyDescriptors,io=Object.prototype,ao=Array.prototype,oo=Object.getPrototypeOf,so=Object.isExtensible;function co(e){return typeof e==`function`}var lo=()=>{};function uo(e){return e()}function fo(e){for(var t=0;t<e.length;t++)e[t]()}function po(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var mo=1<<24,ho=16,go=32,_o=64,vo=128,yo=512,bo=1024,xo=2048,So=4096,Co=8192,wo=16384,To=32768,Eo=65536,Do=1<<17,Oo=1<<18,ko=1<<19,Ao=1<<25,jo=32768,Mo=1<<21,No=1<<23,Po=Symbol(`$state`),Fo=Symbol(`legacy props`),Io=Symbol(``),Lo=new class extends Error{constructor(){super(...arguments),qa(this,`name`,`StaleReactionError`),qa(this,`message`,"The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Ro(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function zo(e){return e===this.v}function Bo(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Vo(e){return!Bo(e,this.v)}var Ho=null;function Uo(e){Ho=e}function Wo(e){return Jo().get(e)}function Go(e){Ho={p:Ho,i:!1,c:null,e:null,s:e,x:null,l:Xa&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function Ko(e){var t=Ho,n=t.e;if(n!==null)for(var r of(t.e=null,n))Ic(r);return e!==void 0&&(t.x=e),t.i=!0,Ho=t.p,e??{}}function qo(){return!Xa||Ho!==null&&Ho.l===null}function Jo(e){var t;return Ho===null&&Ro(),(t=Ho).c??(t.c=new Map(function(e){for(var t=e.p;t!==null;){var n=t.c;if(n!==null)return n;t=t.p}return null}(Ho)||void 0))}var Yo=[];function Xo(){var e=Yo;Yo=[],fo(e)}function Zo(e){if(Yo.length===0&&!cs){var t=Yo;queueMicrotask(()=>{t===Yo&&Xo()})}Yo.push(e)}function Qo(){for(;Yo.length>0;)Xo()}function $o(e){var t=sl;if(t===null)return il.f|=No,e;if((t.f&To)===0){if((t.f&vo)===0)throw e;t.b.error(e)}else es(e,t)}function es(e,t){for(;t!==null;){if((t.f&vo)!==0)try{t.b.error(e);return}catch(t){e=t}t=t.parent}throw e}var ts=new Set,ns=null,rs=null,is=null,as=[],os=null,ss=!1,cs=!1,ls=new WeakMap,us=new WeakMap,ds=new WeakMap,fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,hs=new WeakMap,gs=new WeakSet,_s=class e{constructor(){Ha(this,gs),qa(this,`committed`,!1),qa(this,`current`,new Map),qa(this,`previous`,new Map),Ua(this,ls,new Set),Ua(this,us,new Set),Ua(this,ds,0),Ua(this,fs,0),Ua(this,ps,null),Ua(this,ms,[]),Ua(this,hs,[]),qa(this,`skipped_effects`,new Set),qa(this,`is_fork`,!1)}is_deferred(){return this.is_fork||z(fs,this)>0}process(e){as=[],rs=null,this.apply();var t,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var r of e)Ka(gs,this,vs).call(this,r,n);this.is_fork||Ka(gs,this,xs).call(this),this.is_deferred()?(Ka(gs,this,ys).call(this,n.effects),Ka(gs,this,ys).call(this,n.render_effects),Ka(gs,this,ys).call(this,n.block_effects)):(rs=this,ns=null,Ds(n.render_effects),Ds(n.effects),rs=null,(t=z(ps,this))==null||t.resolve()),is=null}capture(e,t){var n;(this.previous.has(e)||this.previous.set(e,t),(e.f&No)===0)&&(this.current.set(e,e.v),(n=is)==null||n.set(e,e.v))}activate(){ns=this,this.apply()}deactivate(){ns===this&&(ns=null,is=null)}flush(){if(this.activate(),as.length>0){if(ws(),ns!==null&&ns!==this)return}else z(ds,this)===0&&this.process([]);this.deactivate()}discard(){for(var e of z(us,this))e(this);z(us,this).clear()}increment(e){Ga(ds,this,z(ds,this)+1),e&&Ga(fs,this,z(fs,this)+1)}decrement(e){Ga(ds,this,z(ds,this)-1),e&&Ga(fs,this,z(fs,this)-1),this.revive()}revive(){for(var e of z(ms,this))Al(e,xo),As(e);for(var t of z(hs,this))Al(t,So),As(t);Ga(ms,this,[]),Ga(hs,this,[]),this.flush()}oncommit(e){z(ls,this).add(e)}ondiscard(e){z(us,this).add(e)}settled(){return(z(ps,this)??Ga(ps,this,po())).promise}static ensure(){if(ns===null){var t=ns=new e;ts.add(ns),cs||e.enqueue(()=>{ns===t&&t.flush()})}return ns}static enqueue(e){Zo(e)}apply(){}};function vs(e,t){e.f^=bo;for(var n=e.first;n!==null;){var r,i=n.f,a=!!(96&i),o=a&&(i&bo)!==0||(i&Co)!==0||this.skipped_effects.has(n);if((n.f&vo)!==0&&(r=n.b)!=null&&r.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!o&&n.fn!==null){a?n.f^=bo:4&i?t.effects.push(n):yl(n)&&((n.f&ho)!==0&&t.block_effects.push(n),wl(n));var s=n.first;if(s!==null){n=s;continue}}var c=n.parent;for(n=n.next;n===null&&c!==null;)c===t.effect&&(Ka(gs,this,ys).call(this,t.effects),Ka(gs,this,ys).call(this,t.render_effects),Ka(gs,this,ys).call(this,t.block_effects),t=t.parent),n=c.next,c=c.parent}}function ys(e){for(var t of e)((t.f&xo)===0?z(hs,this):z(ms,this)).push(t),Ka(gs,this,bs).call(this,t.deps),Al(t,bo)}function bs(e){if(e!==null)for(var t of e)2&t.f&&(t.f&jo)!==0&&(t.f^=jo,Ka(gs,this,bs).call(this,t.deps))}function xs(){if(z(fs,this)===0){for(var e of z(ls,this))e();z(ls,this).clear()}z(ds,this)===0&&Ka(gs,this,Ss).call(this)}function Ss(){if(ts.size>1){this.previous.clear();var e=is,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var r of ts)if(r!==this){var i=[];for(var[a,o]of this.current){if(r.current.has(a)){if(!t||o===r.current.get(a))continue;r.current.set(a,o)}i.push(a)}if(i.length!==0){var s=[...r.current.keys()].filter(e=>!this.current.has(e));if(s.length>0){var c=as;as=[];var l=new Set,u=new Map;for(var d of i)Os(d,s,l,u);if(as.length>0){for(var f of(ns=r,r.apply(),as))Ka(gs,r,vs).call(r,f,n);r.deactivate()}as=c}}}else t=!1;ns=null,is=e}this.committed=!0,ts.delete(this)}function Cs(e){var t=cs;cs=!0;try{for(;;){var n;if(Qo(),as.length===0&&((n=ns)==null||n.flush(),as.length===0))return void(os=null);ws()}}finally{cs=t}}function ws(){var e=el;ss=!0;try{var t=0;for(tl(!0);as.length>0;){var n=_s.ensure();t++>1e3&&Ts(),n.process(as),fc.clear()}}finally{ss=!1,tl(e),os=null}}function Ts(){try{(function(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)})()}catch(e){es(e,os)}}var Es=null;function Ds(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(24576&r.f)&&yl(r)&&(Es=new Set,wl(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null&&r.ac===null?qc(r):r.fn=null),Es?.size>0)){for(var i of(fc.clear(),Es))if(!(24576&i.f)){for(var a=[i],o=i.parent;o!==null;)Es.has(o)&&(Es.delete(o),a.push(o)),o=o.parent;for(var s=a.length-1;s>=0;s--){var c=a[s];24576&c.f||wl(c)}}Es.clear()}}Es=null}}function Os(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(var i of e.reactions){var a=i.f;2&a?Os(i,t,n,r):4194320&a&&(a&xo)===0&&ks(i,t,r)&&(Al(i,xo),As(i))}}function ks(e,t,n){var r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(var i of e.deps){if(t.includes(i))return!0;if(2&i.f&&ks(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function As(e){for(var t=os=e;t.parent!==null;){var n=(t=t.parent).f;if(ss&&t===sl&&(n&ho)!==0&&(n&Oo)===0)return;if(96&n){if((n&bo)===0)return;t.f^=bo}}as.push(t)}var js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,Fs=new WeakMap,Is=new WeakMap,Ls=new WeakMap,Rs=new WeakMap,zs=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Hs=new WeakMap,Us=new WeakMap,Ws=new WeakMap,Gs=new WeakMap,Ks=new WeakMap,qs=new WeakSet,Js=class{constructor(e,t,n){var r,i,a,o;Ha(this,qs),qa(this,`parent`,void 0),Ua(this,js,!1),Ua(this,Ms,void 0),Ua(this,Ns,null),Ua(this,Ps,void 0),Ua(this,Fs,void 0),Ua(this,Is,void 0),Ua(this,Ls,null),Ua(this,Rs,null),Ua(this,zs,null),Ua(this,Bs,null),Ua(this,Vs,null),Ua(this,Hs,0),Ua(this,Us,0),Ua(this,Ws,!1),Ua(this,Gs,null),Ua(this,Ks,(r=()=>(Ga(Gs,this,mc(z(Hs,this))),()=>{Ga(Gs,this,null)}),a=0,o=mc(0),()=>{Nc()&&(K(o),zc(()=>(a===0&&(i=q(()=>r(()=>yc(o)))),a+=1,()=>{Zo(()=>{var e;--a==0&&((e=i)==null||e(),i=void 0,yc(o))})})))})),Ga(Ms,this,e),Ga(Ps,this,t),Ga(Fs,this,n),this.parent=sl.b,Ga(js,this,!!z(Ps,this).pending),Ga(Is,this,Bc(()=>{sl.b=this;var e=Ka(qs,this,Ys).call(this);try{Ga(Ls,this,Hc(()=>n(e)))}catch(e){this.error(e)}return z(Us,this)>0?Ka(qs,this,Zs).call(this):Ga(js,this,!1),()=>{var e;(e=z(Vs,this))==null||e.remove()}},589952))}is_pending(){return z(js,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!z(Ps,this).pending}update_pending_count(e){Ka(qs,this,Qs).call(this,e),Ga(Hs,this,z(Hs,this)+e),z(Gs,this)&&_c(z(Gs,this),z(Hs,this))}get_effect_pending(){return z(Ks,this).call(this),K(z(Gs,this))}error(e){var t=z(Ps,this).onerror,n=z(Ps,this).failed;if(z(Ws,this)||!t&&!n)throw e;z(Ls,this)&&(Gc(z(Ls,this)),Ga(Ls,this,null)),z(Rs,this)&&(Gc(z(Rs,this)),Ga(Rs,this,null)),z(zs,this)&&(Gc(z(zs,this)),Ga(zs,this,null));var r=!1,i=!1,a=()=>{r?console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`):(r=!0,i&&function(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}(),_s.ensure(),Ga(Hs,this,0),z(zs,this)!==null&&Jc(z(zs,this),()=>{Ga(zs,this,null)}),Ga(js,this,this.has_pending_snippet()),Ga(Ls,this,Ka(qs,this,Xs).call(this,()=>(Ga(Ws,this,!1),Hc(()=>z(Fs,this).call(this,z(Ms,this)))))),z(Us,this)>0?Ka(qs,this,Zs).call(this):Ga(js,this,!1))},o=il;try{ol(null),i=!0,t?.(e,a),i=!1}catch(e){es(e,z(Is,this)&&z(Is,this).parent)}finally{ol(o)}n&&Zo(()=>{Ga(zs,this,Ka(qs,this,Xs).call(this,()=>{_s.ensure(),Ga(Ws,this,!0);try{return Hc(()=>{n(z(Ms,this),()=>e,()=>a)})}catch(e){return es(e,z(Is,this).parent),null}finally{Ga(Ws,this,!1)}}))})}};function Ys(){var e=z(Ms,this);return z(js,this)&&(Ga(Vs,this,wc()),z(Ms,this).before(z(Vs,this)),e=z(Vs,this)),e}function Xs(e){var t=sl,n=il,r=Ho;cl(z(Is,this)),ol(z(Is,this)),Uo(z(Is,this).ctx);try{return e()}catch(e){return $o(e),null}finally{cl(t),ol(n),Uo(r)}}function Zs(){var e=z(Ps,this).pending;z(Ls,this)!==null&&(Ga(Bs,this,document.createDocumentFragment()),z(Bs,this).append(z(Vs,this)),Qc(z(Ls,this),z(Bs,this))),z(Rs,this)===null&&Ga(Rs,this,Hc(()=>e(z(Ms,this))))}function Qs(e){var t;this.has_pending_snippet()?(Ga(Us,this,z(Us,this)+e),z(Us,this)===0&&(Ga(js,this,!1),z(Rs,this)&&Jc(z(Rs,this),()=>{Ga(Rs,this,null)}),z(Bs,this)&&(z(Ms,this).before(z(Bs,this)),Ga(Bs,this,null)))):this.parent&&Ka(qs,t=this.parent,Qs).call(t,e)}function $s(e,t,n,r){var i=qo()?tc:rc;if(n.length!==0||e.length!==0){var a=ns,o=sl,s=function(){var e=sl,t=il,n=Ho,r=ns;return function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];cl(e),ol(t),Uo(n),i&&r?.activate()}}();e.length>0?Promise.all(e).then(()=>{s();try{return c()}finally{a?.deactivate(),ec()}}):c()}else r(t.map(i));function c(){Promise.all(n.map(e=>function(e){var t=sl;t===null&&function(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}();var n=t.b,r=void 0,i=mc(Za),a=!il,o=new Map;return function(e){Mc(4718592,e,!0)}(()=>{var t=po();r=t.promise;try{Promise.resolve(e()).then(t.resolve,t.reject).then(()=>{s===ns&&s.committed&&s.deactivate(),ec()})}catch(e){t.reject(e),ec()}var s=ns;if(a){var c,l=!n.is_pending();n.update_pending_count(1),s.increment(l),(c=o.get(s))==null||c.reject(Lo),o.delete(s),o.set(s,t)}var u=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(s.activate(),t)t!==Lo&&(i.f|=No,_c(i,t));else for(var[r,c]of((i.f&No)!==0&&(i.f^=No),_c(i,e),o)){if(o.delete(r),r===s)break;c.reject(Lo)}a&&(n.update_pending_count(-1),s.decrement(l))};t.promise.then(u,e=>u(null,e||`unknown`))}),Pc(()=>{for(var e of o.values())e.reject(Lo)}),new Promise(e=>{function t(n){function a(){n===r?e(i):t(r)}n.then(a,a)}t(r)})}(e))).then(e=>{s();try{r([...t.map(i),...e])}catch(e){(o.f&wo)===0&&es(e,o)}a?.deactivate(),ec()}).catch(e=>{es(e,o)})}}function ec(){cl(null),ol(null),Uo(null)}function tc(e){var t=il!==null&&2&il.f?il:null;return sl!==null&&(sl.f|=ko),{ctx:Ho,deps:null,effects:null,equals:zo,f:2050,fn:e,reactions:null,rv:0,v:Za,wv:0,parent:t??sl,ac:null}}function nc(e){var t=tc(e);return ul(t),t}function rc(e){var t=tc(e);return t.equals=Vo,t}function ic(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Gc(t[n])}}function ac(e){var t,n=sl;cl(function(e){for(var t=e.parent;t!==null;){if(!(2&t.f))return(t.f&wo)===0?t:null;t=t.parent}return null}(e));try{e.f&=-32769,ic(e),t=xl(e)}finally{cl(n)}return t}function oc(e){var t,n,r=ac(e);e.equals(r)||((t=ns)!=null&&t.is_fork||(e.v=r),e.wv=vl()),nl||(is===null?Al(e,(e.f&yo)===0?So:bo):(Nc()||(n=ns)!=null&&n.is_fork)&&is.set(e,r))}var sc,cc,lc,uc,dc=new Set,fc=new Map,pc=!1;function mc(e,t){return{f:0,v:e,reactions:null,equals:zo,rv:0,wv:0}}function hc(e,t){var n=mc(e);return ul(n),n}function B(e){var t,n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=mc(e);return(n||(i.equals=Vo),Xa&&r&&Ho!==null&&Ho.l!==null)&&((t=Ho.l).s??(t.s=[])).push(i),i}function gc(e,t){return V(e,q(()=>K(e))),t}function V(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return il===null||al&&(il.f&Do)===0||!qo()||!(4325394&il.f)||(n=ll)!=null&&n.includes(e)||function(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}(),_c(e,r?xc(t):t)}function _c(e,t){if(!e.equals(t)){var n=e.v;nl?fc.set(e,t):fc.set(e,n),e.v=t;var r=_s.ensure();r.capture(e,n),2&e.f&&((e.f&xo)!==0&&ac(e),Al(e,(e.f&yo)===0?So:bo)),e.wv=vl(),bc(e,xo),!qo()||sl===null||(sl.f&bo)===0||96&sl.f||(pl===null?function(e){pl=e}([e]):pl.push(e)),!r.is_fork&&dc.size>0&&!pc&&function(){pc=!1;var e=el;tl(!0);var t=Array.from(dc);try{for(var n of t)(n.f&bo)!==0&&Al(n,So),yl(n)&&wl(n)}finally{tl(e)}dc.clear()}()}return t}function vc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=K(e),r=t===1?n++:n--;return V(e,n),r}function yc(e){V(e,e.v+1)}function bc(e,t){var n=e.reactions;if(n!==null)for(var r=qo(),i=n.length,a=0;a<i;a++){var o=n[a],s=o.f;if(r||o!==sl){var c=(s&xo)===0;if(c&&Al(o,t),2&s){var l,u=o;(l=is)==null||l.delete(u),(s&jo)===0&&(s&yo&&(o.f|=jo),bc(u,So))}else c&&((s&ho)!==0&&Es!==null&&Es.add(o),As(o))}}}function xc(e){if(typeof e!=`object`||!e||Po in e)return e;var t=oo(e);if(t!==io&&t!==ao)return e;var n=new Map,r=Qa(e),i=hc(0),a=gl,o=e=>{if(gl===a)return e();var t=il,n=gl;ol(null),_l(a);var r=e();return ol(t),_l(n),r};return r&&n.set(`length`,hc(e.length)),new Proxy(e,{defineProperty(e,t,r){`value`in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}();var i=n.get(t);return i===void 0?i=o(()=>{var e=hc(r.value);return n.set(t,e),e}):V(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t);if(r===void 0){if(t in e){var a=o(()=>hc(Za));n.set(t,a),yc(i)}}else V(r,Za),yc(i);return!0},get(t,r,i){var a;if(r===Po)return e;var s=n.get(r),c=r in t;if(s===void 0&&(!c||(a=no(t,r))!=null&&a.writable)&&(s=o(()=>hc(xc(c?t[r]:Za))),n.set(r,s)),s!==void 0){var l=K(s);return l===Za?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&`value`in r){var i=n.get(t);i&&(r.value=K(i))}else if(r===void 0){var a=n.get(t),o=a?.v;if(a!==void 0&&o!==Za)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){var r;if(t===Po)return!0;var i=n.get(t),a=i!==void 0&&i.v!==Za||Reflect.has(e,t);return(i!==void 0||sl!==null&&(!a||(r=no(e,t))!=null&&r.writable))&&(i===void 0&&(i=o(()=>hc(a?xc(e[t]):Za)),n.set(t,i)),K(i)===Za)?!1:a},set(e,t,a,s){var c,l=n.get(t),u=t in e;if(r&&t===`length`)for(var d=a;d<l.v;d+=1){var f=n.get(d+``);f===void 0?d in e&&(f=o(()=>hc(Za)),n.set(d+``,f)):V(f,Za)}l===void 0?(!u||(c=no(e,t))!=null&&c.writable)&&(V(l=o(()=>hc(void 0)),xc(a)),n.set(t,l)):(u=l.v!==Za,V(l,o(()=>xc(a))));var p=Reflect.getOwnPropertyDescriptor(e,t);if(p!=null&&p.set&&p.set.call(s,a),!u){if(r&&typeof t==`string`){var m=n.get(`length`),h=Number(t);Number.isInteger(h)&&h>=m.v&&V(m,h+1)}yc(i)}return!0},ownKeys(e){K(i);var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e);return t===void 0||t.v!==Za});for(var[r,a]of n)a.v===Za||r in e||t.push(r);return t},setPrototypeOf(){(function(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)})()}})}function Sc(e){try{if(typeof e==`object`&&e&&Po in e)return e[Po]}catch{}return e}function Cc(e,t){return Object.is(Sc(e),Sc(t))}function wc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:``;return document.createTextNode(e)}function Tc(e){return lc.call(e)}function Ec(e){return uc.call(e)}function H(e,t){return Tc(e)}function Dc(e){var t=Tc(e);return t instanceof Comment&&t.data===``?Ec(t):t}function U(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;t--;)n=Ec(n);return n}var Oc=!1;function kc(e){var t=il,n=sl;ol(null),cl(null);try{return e()}finally{ol(t),cl(n)}}function Ac(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(t,()=>kc(n));var i=e.__on_r;e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),Oc||(Oc=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(var t of e.target.elements){var n;(n=t.__on_r)==null||n.call(t)}})},{capture:!0}))}function jc(e){sl===null&&(il===null&&function(){throw Error(`https://svelte.dev/e/effect_orphan`)}(),function(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}()),nl&&function(){throw Error(`https://svelte.dev/e/effect_in_teardown`)}()}function Mc(e,t,n){var r=sl;r!==null&&(r.f&Co)!==0&&(e|=Co);var i={ctx:Ho,deps:null,nodes:null,f:e|xo|yo,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(n)try{wl(i),i.f|=To}catch(e){throw Gc(i),e}else t!==null&&As(i);var a=i;if(n&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&ko)===0&&(a=a.first,(e&ho)!==0&&(e&Eo)!==0&&a!==null&&(a.f|=Eo)),a!==null&&(a.parent=r,r!==null&&function(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(a,r),il!==null&&2&il.f&&(e&_o)===0)){var o=il;(o.effects??=[]).push(a)}return i}function Nc(){return il!==null&&!al}function Pc(e){var t=Mc(8,null,!1);return Al(t,bo),t.teardown=e,t}function Fc(e){jc();var t=sl.f;if(!(!il&&(t&go)!==0&&(t&To)===0))return Ic(e);var n=Ho;(n.e??=[]).push(e)}function Ic(e){return Mc(1048580,e,!1)}function Lc(e){return Mc(4,e,!1)}function W(e,t){var n={effect:null,ran:!1,deps:e};Ho.l.$.push(n),n.effect=zc(()=>{e(),n.ran||(n.ran=!0,q(t))})}function Rc(){var e=Ho;zc(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&bo)!==0&&Al(n,So),yl(n)&&wl(n),t.ran=!1}})}function zc(e){return Mc(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function G(e){$s(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{Mc(8,()=>e(...t.map(K)),!0)})}function Bc(e){return Mc(ho|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Vc(e){return Mc(mo|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Hc(e){return Mc(524320,e,!0)}function Uc(e){var t=e.teardown;if(t!==null){var n=nl,r=il;rl(!0),ol(null);try{t.call(null)}finally{rl(n),ol(r)}}}function Wc(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var r,i=function(){var e=n.ac;e!==null&&kc(()=>{e.abort(Lo)}),r=n.next,(n.f&_o)===0?Gc(n,t):n.parent=null,n=r};n!==null;)i()}function Gc(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;!t&&(e.f&Oo)===0||e.nodes===null||e.nodes.end===null||(Kc(e.nodes.start,e.nodes.end),n=!0),Wc(e,t&&!n),Cl(e,0),Al(e,wo);var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)i.stop();Uc(e);var a=e.parent;a!==null&&a.first!==null&&qc(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Kc(e,t){for(;e!==null;){var n=e===t?null:Ec(e);e.remove(),e=n}}function qc(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Jc(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];Yc(e,r,!0);var i=()=>{n&&Gc(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Yc(e,t,n){if((e.f&Co)===0){e.f^=Co;var r=e.nodes&&e.nodes.t;if(r!==null)for(var i of r)(i.is_global||n)&&t.push(i);for(var a=e.first;a!==null;){var o=a.next;Yc(a,t,((a.f&Eo)!==0||(a.f&go)!==0&&(e.f&ho)!==0)&&n),a=o}}}function Xc(e){Zc(e,!0)}function Zc(e,t){if((e.f&Co)!==0){e.f^=Co,(e.f&bo)===0&&(Al(e,xo),As(e));for(var n=e.first;n!==null;){var r=n.next;Zc(n,((n.f&Eo)!==0||(n.f&go)!==0)&&t),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(var a of i)(a.is_global||t)&&a.in()}}function Qc(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Ec(n);t.append(n),n=i}}var $c=null,el=!1;function tl(e){el=e}var nl=!1;function rl(e){nl=e}var il=null,al=!1;function ol(e){il=e}var sl=null;function cl(e){sl=e}var ll=null;function ul(e){il!==null&&(ll===null?ll=[e]:ll.push(e))}var dl=null,fl=0,pl=null,ml=1,hl=0,gl=hl;function _l(e){gl=e}function vl(){return++ml}function yl(e){var t=e.f;if((t&xo)!==0)return!0;if(2&t&&(e.f&=-32769),(t&So)!==0){var n=e.deps;if(n!==null)for(var r=n.length,i=0;i<r;i++){var a=n[i];if(yl(a)&&oc(a),a.wv>e.wv)return!0}(t&yo)!==0&&is===null&&Al(e,bo)}return!1}function bl(e,t){var n,r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=e.reactions;if(i!==null&&((n=ll)==null||!n.includes(e)))for(var a=0;a<i.length;a++){var o=i[a];2&o.f?bl(o,t,!1):t===o&&(r?Al(o,xo):(o.f&bo)!==0&&Al(o,So),As(o))}}function xl(e){var t=dl,n=fl,r=pl,i=il,a=ll,o=Ho,s=al,c=gl,l=e.f;dl=null,fl=0,pl=null,il=96&l?null:e,ll=null,Uo(e.ctx),al=!1,gl=++hl,e.ac!==null&&(kc(()=>{e.ac.abort(Lo)}),e.ac=null);try{e.f|=Mo;var u=(0,e.fn)(),d=e.deps;if(dl!==null){var f;if(Cl(e,fl),d!==null&&fl>0)for(d.length=fl+dl.length,f=0;f<dl.length;f++)d[fl+f]=dl[f];else e.deps=d=dl;if(Nc()&&(e.f&yo)!==0)for(f=fl;f<d.length;f++){var p;((p=d[f]).reactions??(p.reactions=[])).push(e)}}else d!==null&&fl<d.length&&(Cl(e,fl),d.length=fl);if(qo()&&pl!==null&&!al&&d!==null&&!(6146&e.f))for(f=0;f<pl.length;f++)bl(pl[f],e);return i!==null&&i!==e&&(hl++,pl!==null&&(r===null?r=pl:r.push(...pl))),(e.f&No)!==0&&(e.f^=No),u}catch(e){return $o(e)}finally{e.f^=Mo,dl=t,fl=n,pl=r,il=i,ll=a,Uo(o),al=s,gl=c}}function Sl(e,t){var n=t.reactions;if(n!==null){var r=$a.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&2&t.f&&(dl===null||!dl.includes(t))&&(Al(t,So),(t.f&yo)!==0&&(t.f^=yo,t.f&=-32769),ic(t),Cl(t,0))}function Cl(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Sl(e,n[r])}function wl(e){var t=e.f;if((t&wo)===0){Al(e,bo);var n=sl,r=el;sl=e,el=!0;try{16777232&t?function(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&go)===0&&Gc(t),t=n}}(e):Wc(e),Uc(e);var i=xl(e);e.teardown=typeof i==`function`?i:null,e.wv=ml}finally{el=r,sl=n}}}function Tl(){return El.apply(this,arguments)}function El(){return(El=Va(function*(){yield Promise.resolve(),Cs()})).apply(this,arguments)}function K(e){var t,n,r,i,a,o=!!(2&e.f);if(((t=$c)==null||t.add(e),il!==null&&!al)&&!(sl!==null&&(sl.f&wo)!==0||(a=ll)!=null&&a.includes(e))){var s=il.deps;if((il.f&Mo)!==0)e.rv<hl&&(e.rv=hl,dl===null&&s!==null&&s[fl]===e?fl++:dl===null?dl=[e]:dl.includes(e)||dl.push(e));else{var c;((c=il).deps??(c.deps=[])).push(e);var l=e.reactions;l===null?e.reactions=[il]:l.includes(il)||l.push(il)}}if(nl){if(fc.has(e))return fc.get(e);if(o){var u=e,d=u.v;return((u.f&bo)===0&&u.reactions!==null||Ol(u))&&(d=ac(u)),fc.set(u,d),d}}else o&&((n=is)==null||!n.has(e)||(r=ns)!=null&&r.is_fork&&!Nc())&&(yl(u=e)&&oc(u),el&&Nc()&&(u.f&yo)===0&&Dl(u));if((i=is)!=null&&i.has(e))return is.get(e);if((e.f&No)!==0)throw e.v;return e.v}function Dl(e){if(e.deps!==null)for(var t of(e.f^=yo,e.deps))(t.reactions??=[]).push(e),2&t.f&&(t.f&yo)===0&&Dl(t)}function Ol(e){if(e.v===Za)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(fc.has(t)||2&t.f&&Ol(t))return!0;return!1}function q(e){var t=al;try{return al=!0,e()}finally{al=t}}var kl=-7169;function Al(e,t){e.f=e.f&kl|t}function J(e){if(typeof e==`object`&&e&&!(e instanceof EventTarget)){if(Po in e)jl(e);else if(!Array.isArray(e))for(var t in e){var n=e[t];typeof n==`object`&&n&&Po in n&&jl(n)}}}function jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!=`object`||!e||e instanceof EventTarget||t.has(e))){for(var n in t.add(e),e instanceof Date&&e.getTime(),e)try{jl(e[n],t)}catch{}var r=oo(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){var i=ro(r);for(var a in i){var o=i[a].get;if(o)try{o.call(e)}catch{}}}}}var Ml=new Set,Nl=new Set;function Pl(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function i(e){if(r.capture||Il.call(t,e),!e.cancelBubble)return kc(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Zo(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function Y(e,t,n,r,i){var a={capture:r,passive:i},o=Pl(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Pc(()=>{t.removeEventListener(e,o,a)})}function Fl(e){for(var t=0;t<e.length;t++)Ml.add(e[t]);for(var n of Nl)n(e)}function Il(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.call(e)||[],a=i[0]||e.target,o=0,s=e===e&&e.__root;if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window))return void(e.__root=t);var l=i.indexOf(t);if(l===-1)return;c<=l&&(o=c)}if((a=i[o]||e.target)!==t){to(e,`currentTarget`,{configurable:!0,get:()=>a||n});var u=il,d=sl;ol(null),cl(null);try{for(var f,p=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var h=a[`__`+r];h==null||a.disabled&&e.target!==a||h.call(a,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||m===t||m===null)break;a=m}if(f){var g=function(e){queueMicrotask(()=>{throw e})};for(var _ of p)g(_);throw f}}finally{e.__root=t,delete e.currentTarget,ol(u),cl(d)}}}function Ll(e){var t=document.createElement(`template`);return t.innerHTML=e.replaceAll(`<!>`,`<!---->`),t.content}function Rl(e,t){var n=sl;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function X(e,t){var n,r=!!(1&t),i=!!(2&t),a=!e.startsWith(`<!>`);return()=>{n===void 0&&(n=Ll(a?e:`<!>`+e),r||(n=Tc(n)));var t=i||cc?document.importNode(n,!0):n.cloneNode(!0);return r?Rl(Tc(t),t.lastChild):Rl(t,t),t}}function zl(e,t){return function(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`svg`,i=!e.startsWith(`<!>`),a=!!(1&t),o=`<${r}>${i?e:`<!>`+e}</${r}>`;return()=>{if(!n){var e=Tc(Ll(o));if(a)for(n=document.createDocumentFragment();Tc(e);)n.appendChild(Tc(e));else n=Tc(e)}var t=n.cloneNode(!0);return a?Rl(Tc(t),t.lastChild):Rl(t,t),t}}(e,t,`svg`)}function Bl(){var e=wc((arguments.length>0&&arguments[0]!==void 0?arguments[0]:``)+``);return Rl(e,e),e}function Vl(){var e=document.createDocumentFragment(),t=document.createComment(``),n=wc();return e.append(t,n),Rl(t,n),e}function Z(e,t){e!==null&&e.before(t)}var Hl=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`],Ul={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`},Wl=[`touchstart`,`touchmove`];function Gl(e){return Wl.includes(e)}function Kl(e,t){var n=t==null?``:typeof t==`object`?t+``:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+``)}function ql(e,t){return function(e,t){var{target:n,anchor:r,props:i={},events:a,context:o,intro:s=!0}=t;(function(){if(sc===void 0){sc=window,cc=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;lc=no(t,`firstChild`).get,uc=no(t,`nextSibling`).get,so(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),so(n)&&(n.__t=void 0)}})();var c=new Set,l=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!c.has(r)){c.add(r);var i=Gl(r);n.addEventListener(r,Il,{passive:i});var a=Jl.get(r);a===void 0?(document.addEventListener(r,Il,{passive:i}),Jl.set(r,1)):Jl.set(r,a+1)}}};l(eo(Ml)),Nl.add(l);var u=void 0,d=function(e){_s.ensure();var t=Mc(524352,e,!0);return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(n=>{e.outro?Jc(t,()=>{Gc(t),n(void 0)}):(Gc(t),n(void 0))})}}(()=>{var t=r??n.appendChild(wc());return function(e,t,n){new Js(e,t,n)}(t,{pending:()=>{}},t=>{o&&(Go({}),Ho.c=o),a&&(i.$$events=a),u=e(t,i)||{},o&&Ko()}),()=>{for(var e of c){n.removeEventListener(e,Il);var i=Jl.get(e);--i===0?(document.removeEventListener(e,Il),Jl.delete(e)):Jl.set(e,i)}var a;(Nl.delete(l),t!==r)&&((a=t.parentNode)==null||a.removeChild(t))}});return Yl.set(u,d),u}(e,t)}var Jl=new Map,Yl=new WeakMap,Xl,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=class{constructor(e){var t=this,n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];qa(this,`anchor`,void 0),Ua(this,Zl,new Map),Ua(this,Ql,new Map),Ua(this,$l,new Map),Ua(this,eu,new Set),Ua(this,tu,!0),Ua(this,nu,()=>{var e=ns;if(z(Zl,this).has(e)){var n=z(Zl,this).get(e),r=z(Ql,this).get(n);if(r)Xc(r),z(eu,this).delete(n);else{var i=z($l,this).get(n);i&&(z(Ql,this).set(n,i.effect),z($l,this).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(var[a,o]of z(Zl,this)){if(z(Zl,this).delete(a),a===e)break;var s=z($l,this).get(o);s&&(Gc(s.effect),z($l,this).delete(o))}var c=function(e,i){if(e===n||z(eu,t).has(e))return 1;var a=()=>{if(Array.from(z(Zl,t).values()).includes(e)){var n=document.createDocumentFragment();Qc(i,n),n.append(wc()),z($l,t).set(e,{effect:i,fragment:n})}else Gc(i);z(eu,t).delete(e),z(Ql,t).delete(e)};z(tu,t)||!r?(z(eu,t).add(e),Jc(i,a,!1)):a()};for(var[l,u]of z(Ql,this))c(l,u)}}),Ua(this,ru,e=>{z(Zl,this).delete(e);var t=Array.from(z(Zl,this).values());for(var[n,r]of z($l,this))t.includes(n)||(Gc(r.effect),z($l,this).delete(n))}),this.anchor=e,Ga(tu,this,n)}ensure(e,t){var n=ns;!t||z(Ql,this).has(e)||z($l,this).has(e)||z(Ql,this).set(e,Hc(()=>t(this.anchor))),z(Zl,this).set(n,e),z(nu,this).call(this)}};function au(e){Ho===null&&Ro(),Xa&&Ho.l!==null?lu(Ho).m.push(e):Fc(()=>{var t=q(e);if(typeof t==`function`)return t})}function ou(e){Ho===null&&Ro(),au(()=>()=>q(e))}function su(){var e=Ho;return e===null&&Ro(),(t,n,r)=>{var i=e.s.$$events?.[t];if(i){var a=Qa(i)?i.slice():[i],o=function(e,t){var{bubbles:n=!1,cancelable:r=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}(t,n,r);for(var s of a)s.call(e.x,o);return!o.defaultPrevented}return!0}}function cu(e){Ho===null&&Ro(),Ho.l===null&&function(){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}(),lu(Ho).b.push(e)}function lu(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}function Q(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=new iu(e);function i(e,t){r.ensure(e,t)}Bc(()=>{var e=!1;t(function(t){e=!0,i(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],t)}),e||i(!1,null)},n?Eo:0)}function uu(e,t,n){var r=new iu(e),i=!qo();Bc(()=>{var e=t();i&&typeof e==`object`&&e&&(e={}),r.ensure(e,n)})}function du(e,t){return t}function fu(e){for(var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=0;n<e.length;n++)Gc(e[n],t)}function pu(e,t,n,r,i){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=e,s=new Map;!(4&t)||(o=e.appendChild(wc()));var c,l=null,u=rc(()=>{var e=n();return Qa(e)?e:e==null?[]:eo(e)}),d=!0;function f(){p.fallback=l,function(e,t,n,r,i){var a,o,s,c,l,u=!!(8&r),d=t.length,f=e.items,p=e.effect.first,m=null,h=[],g=[];if(u)for(l=0;l<d;l+=1){var _;s=i(t[l],l),((c=f.get(s).e).f&Ao)===0&&((_=c.nodes)==null||(_=_.a)==null||_.measure(),(o??=new Set).add(c))}for(l=0;l<d;l+=1){if(s=i(t[l],l),c=f.get(s).e,e.outrogroups!==null)for(var v of e.outrogroups)v.pending.delete(c),v.done.delete(c);if((c.f&Ao)!==0){if(c.f^=Ao,c!==p){var y=m?m.next:p;c===e.effect.last&&(e.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),gu(e,m,c),gu(e,c,y),hu(c,y,n),h=[],g=[],p=(m=c).next;continue}hu(c,null,n)}var b;if((c.f&Co)!==0&&(Xc(c),u&&((b=c.nodes)==null||(b=b.a)==null||b.unfix(),(o??=new Set).delete(c))),c!==p){if(a!==void 0&&a.has(c)){if(h.length<g.length){var x,S=g[0];m=S.prev;var C=h[0],w=h[h.length-1];for(x=0;x<h.length;x+=1)hu(h[x],S,n);for(x=0;x<g.length;x+=1)a.delete(g[x]);gu(e,C.prev,w.next),gu(e,m,C),gu(e,w,S),p=S,m=w,--l,h=[],g=[]}else a.delete(c),hu(c,p,n),gu(e,c.prev,c.next),gu(e,c,m===null?e.effect.first:m.next),gu(e,m,c),m=c;continue}for(h=[],g=[];p!==null&&p!==c;)(a??=new Set).add(p),g.push(p),p=p.next;if(p===null)continue}(c.f&Ao)===0&&h.push(c),m=c,p=c.next}if(e.outrogroups!==null){for(var T of e.outrogroups){var E;T.pending.size===0&&(fu(eo(T.done)),(E=e.outrogroups)==null||E.delete(T))}e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||a!==void 0){var D=[];if(a!==void 0)for(c of a)(c.f&Co)===0&&D.push(c);for(;p!==null;)(p.f&Co)===0&&p!==e.fallback&&D.push(p),p=p.next;var ee=D.length;if(ee>0){var te=4&r&&d===0?n:null;if(u){for(l=0;l<ee;l+=1){var ne;(ne=D[l].nodes)==null||(ne=ne.a)==null||ne.measure()}for(l=0;l<ee;l+=1){var re;(re=D[l].nodes)==null||(re=re.a)==null||re.fix()}}(function(e,t,n){for(var r,i=t.length,a=t.length,o=function(){var n=t[s];Jc(n,()=>{if(r){if(r.pending.delete(n),r.done.add(n),r.pending.size===0){var t=e.outrogroups;fu(eo(r.done)),t.delete(r),t.size===0&&(e.outrogroups=null)}}else --a},!1)},s=0;s<i;s++)o();if(a===0){var c=n!==null;if(c){var l=n,u=l.parentNode;u.textContent=``,u.append(l),e.items.clear()}fu(t,!c)}else r={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(r)})(e,D,te)}}u&&Zo(()=>{if(o!==void 0)for(c of o){var e;(e=c.nodes)==null||(e=e.a)==null||e.apply()}})}(p,c,o,t,r),l!==null&&(c.length===0?(l.f&Ao)===0?Xc(l):(l.f^=Ao,hu(l,null,o)):Jc(l,()=>{l=null}))}var p={effect:Bc(()=>{for(var e=(c=K(u)).length,p=new Set,m=0;m<e;m+=1){var h=c[m],g=r(h,m),_=d?null:s.get(g);_?(_.v&&_c(_.v,h),_.i&&_c(_.i,m)):(_=mu(s,d?o:Xl??=wc(),h,g,m,i,t,n),d||(_.e.f|=Ao),s.set(g,_)),p.add(g)}(e===0&&a&&!l&&(d?l=Hc(()=>a(o)):(l=Hc(()=>a(Xl??=wc()))).f|=Ao),d)||f(),K(u)}),items:s,outrogroups:null,fallback:l};d=!1}function mu(e,t,n,r,i,a,o,s){var c=1&o?16&o?mc(n):B(n,!1,!1):null,l=2&o?mc(i):null;return{v:c,i:l,e:Hc(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function hu(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Ao)===0?t.nodes.start:n;r!==null;){var o=Ec(r);if(a.before(r),r===i)return;r=o}}function gu(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function _u(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=e,a=``;G(()=>{var e=sl;if(a!==(a=t()??``)&&(e.nodes!==null&&(Kc(e.nodes.start,e.nodes.end),e.nodes=null),a!==``)){var o=a+``;n?o=`<svg>${o}</svg>`:r&&(o=`<math>${o}</math>`);var s=Ll(o);if((n||r)&&(s=Tc(s)),Rl(Tc(s),s.lastChild),n||r)for(;Tc(s);)i.before(Tc(s));else i.before(s)}})}function vu(e,t,n,r,i){var a=t.$$slots?.[n],o=!1;!0===a&&(a=t[n===`default`?`children`:n],o=!0),a===void 0?i!==null&&i(e):a(e,o?()=>r:r)}function yu(e,t,n){var r=new iu(e);Bc(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},Eo)}function bu(e,t,n){Lc(()=>{var r=q(()=>t(e,n?.())||{});if(n&&r!=null&&r.update){var i=!1,a={};zc(()=>{var e=n();J(e),i&&Bo(a,e)&&(a=e,r.update(e))}),i=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function xu(e,t){var n,r=void 0;Vc(()=>{r!==(r=t())&&(n&&=(Gc(n),null),r&&(n=Hc(()=>{Lc(()=>r(e))})))})}function Su(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Su(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Cu(e){return typeof e==`object`?function(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Su(e))&&(r&&(r+=` `),r+=t);return r}(e):e??``}var wu=[...` 	
\r\f\xA0\v﻿`];function Tu(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?` !important;`:`;`,n=``;for(var r in e){var i=e[r];i!=null&&i!==``&&(n+=` `+r+`: `+i+t)}return n}function Eu(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Du(e,t,n,r,i,a){var o=e.__className;if(o!==n||o===void 0){var s=function(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i in n)if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;o!==0&&!wu.includes(r[o-1])||s!==r.length&&!wu.includes(r[s])?o=s:r=(o===0?``:r.substring(0,o))+r.substring(s+1)}}return r===``?null:r}(n,r,a);s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];i!=null&&l===!!i[c]||e.classList.toggle(c,l)}return a}function Ou(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function ku(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=``;if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];n&&c.push(...Object.keys(n).map(Eu)),r&&c.push(...Object.keys(r).map(Eu));for(var l=0,u=-1,d=e.length,f=0;f<d;f++){var p=e[f];if(s?p===`/`&&e[f-1]===`*`&&(s=!1):a?a===p&&(a=!1):p===`/`&&e[f+1]===`*`?s=!0:p===`"`||p===`'`?a=p:p===`(`?o++:p===`)`&&o--,!s&&!1===a&&o===0){if(p===`:`&&u===-1)u=f;else if(p===`;`||f===d-1){if(u!==-1){var m=Eu(e.substring(l,u).trim());c.includes(m)||(p!==`;`&&f++,i+=` `+e.substring(l,f).trim()+`;`)}l=f+1,u=-1}}}}return n&&(i+=Tu(n)),r&&(i+=Tu(r,!0)),(i=i.trim())===``?null:i}return e==null?null:String(e)}(t,r);i==null?e.removeAttribute(`style`):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Ou(e,n?.[0],r[0]),Ou(e,n?.[1],r[1],`important`)):Ou(e,n,r));return r}function Au(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!Qa(t))return void console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);for(var r of e.options)r.selected=t.includes(Mu(r))}else{for(r of e.options)if(Cc(Mu(r),t))return void(r.selected=!0);n&&t===void 0||(e.selectedIndex=-1)}}function ju(e){var t=new MutationObserver(()=>{Au(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),Pc(()=>{t.disconnect()})}function Mu(e){return`__value`in e?e.__value:e.value}var Nu=Symbol(`class`),Pu=Symbol(`style`),Fu=Symbol(`is custom element`),Iu=Symbol(`is html`);function Lu(e,t){var n=Vu(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===`PROGRESS`)&&(e.value=t??``)}function Ru(e,t,n,r){var i=Vu(e);i[t]!==(i[t]=n)&&(t===`loading`&&(e[Io]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Uu(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zu(e,t,n,r){var i=Vu(e),a=i[Fu],o=!i[Iu],s=t||{},c=e.tagName===`OPTION`;for(var l in t)l in n||(n[l]=null);(n.class?n.class=Cu(n.class):(r||n[Nu])&&(n.class=null),n[Pu])&&(n.style??=null);var u,d,f,p,m,h,g=Uu(e),_=function(l){var _=n[l];if(c&&l===`value`&&_==null)return e.value=e.__value=``,s[l]=_,0;if(l===`class`)return u=e.namespaceURI===`http://www.w3.org/1999/xhtml`,Du(e,u,_,r,t?.[Nu],n[Nu]),s[l]=_,s[Nu]=n[Nu],0;if(l===`style`)return ku(e,_,t?.[Pu],n[Pu]),s[l]=_,s[Pu]=n[Pu],0;if(_===(d=s[l])&&(_!==void 0||!e.hasAttribute(l))||(s[l]=_,(f=l[0]+l[1])===`$$`))return 0;if(f===`on`){var v={},y=`$$`+l,b=l.slice(2);if(p=function(e){return Hl.includes(e)}(b),function(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}(b)&&(b=b.slice(0,-7),v.capture=!0),!p&&d){if(_!=null)return 0;e.removeEventListener(b,s[y],v),s[y]=null}if(_!=null)if(p)e[`__${b}`]=_,Fl([b]);else{function t(e){s[l].call(this,e)}s[y]=Pl(b,e,t,v)}else p&&(e[`__${b}`]=void 0)}else if(l===`style`)Ru(e,l,_);else if(l===`autofocus`)(function(e,t){if(t){var n=document.body;e.autofocus=!0,Zo(()=>{document.activeElement===n&&e.focus()})}})(e,!!_);else if(a||l!==`__value`&&(l!==`value`||_==null))if(l===`selected`&&c)(function(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)})(e,_);else if(m=l,o||(m=function(e){return e=e.toLowerCase(),Ul[e]??e}(m)),h=m===`defaultValue`||m===`defaultChecked`,_!=null||a||h)h||g.includes(m)&&(a||typeof _!=`string`)?(e[m]=_,m in i&&(i[m]=Za)):typeof _!=`function`&&Ru(e,m,_);else if(i[l]=null,m===`value`||m===`checked`){var x=e,S=t===void 0;if(m===`value`){var C=x.defaultValue;x.removeAttribute(m),x.defaultValue=C,x.value=x.__value=S?C:null}else{var w=x.defaultChecked;x.removeAttribute(m),x.defaultChecked=w,x.checked=!!S&&w}}else e.removeAttribute(l);else e.value=e.__value=_};for(var v in n)_(v);return s}function Bu(e,t){var n=arguments.length>5?arguments[5]:void 0,r=arguments.length>6&&arguments[6]!==void 0&&arguments[6],i=arguments.length>7&&arguments[7]!==void 0&&arguments[7];$s(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var o=void 0,s={},c=e.nodeName===`SELECT`,l=!1;if(Vc(()=>{var u=t(...a.map(K)),d=zu(e,o,u,n,r,i);for(var f of(l&&c&&`value`in u&&Au(e,u.value),Object.getOwnPropertySymbols(s)))u[f]||Gc(s[f]);for(var p of Object.getOwnPropertySymbols(u)){var m=u[p];p.description!==`@attach`||o&&m===o[p]||(s[p]&&Gc(s[p]),s[p]=Hc(()=>xu(e,()=>m))),d[p]=m}o=d}),c){var u=e;Lc(()=>{Au(u,o.value,!0),ju(u)})}l=!0})}function Vu(e){return e.__attributes??={[Fu]:e.nodeName.includes(`-`),[Iu]:e.namespaceURI===`http://www.w3.org/1999/xhtml`}}var Hu=new Map;function Uu(e){var t,n=e.getAttribute(`is`)||e.nodeName,r=Hu.get(n);if(r)return r;Hu.set(n,r=[]);for(var i=e,a=Element.prototype;a!==i;){for(var o in t=ro(i))t[o].set&&r.push(o);i=oo(i)}return r}function Wu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,r=new WeakSet;Ac(e,`input`,function(){var i=Va(function*(i){var a=i?e.defaultValue:e.value;if(a=Gu(e)?Ku(a):a,n(a),ns!==null&&r.add(ns),yield Tl(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}});return function(e){return i.apply(this,arguments)}}()),q(t)==null&&e.value&&(n(Gu(e)?Ku(e.value):e.value),ns!==null&&r.add(ns)),zc(()=>{var n=t();if(e===document.activeElement){var i=rs??ns;if(r.has(i))return}Gu(e)&&n===Ku(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function Gu(e){var t=e.type;return t===`number`||t===`range`}function Ku(e){return e===``?null:+e}function qu(e,t,n){var r=no(e,t);r&&r.set&&(e[t]=n,Pc(()=>{e[t]=null}))}function Ju(e,t){return e===t||e?.[Po]===t}function Yu(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return Lc(()=>{var r,i;return zc(()=>{r=i,i=[],q(()=>{e!==n(...i)&&(t(e,...i),r&&Ju(n(...r),e)&&t(null,...r))})}),()=>{Zo(()=>{i&&Ju(n(...i),e)&&t(null,...i)})}}),e}function Xu(e){return function(){var t=[...arguments];return t[0].stopPropagation(),e?.apply(this,t)}}function Zu(e){return function(){var t=[...arguments];return t[0].preventDefault(),e?.apply(this,t)}}function Qu(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Ho,n=t.l.u;if(n){var r,i=()=>J(t.s);if(e){var a=0,o={},s=tc(()=>{var e=!1,n=t.s;for(var r in n)n[r]!==o[r]&&(o[r]=n[r],e=!0);return e&&a++,a});i=()=>K(s)}n.b.length&&(r=()=>{$u(t,i),fo(n.b)},jc(),Mc(1048584,r,!0)),Fc(()=>{var e=q(()=>n.m.map(uo));return()=>{for(var t of e)typeof t==`function`&&t()}}),n.a.length&&Fc(()=>{$u(t,i),fo(n.a)})}}function $u(e,t){if(e.l.s)for(var n of e.l.s)K(n);t()}function ed(e){var t=mc(0);return function(){return arguments.length===1?(V(t,K(t)+1),arguments[0]):(K(t),e())}}function td(e,t){var n=e.$$events?.[t.type];for(var r of Qa(n)?n.slice():n==null?[]:[n])r.call(this,t)}var nd=!1,rd={get(e,t){if(!e.exclude.includes(t))return K(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=sl;try{cl(e.parent_effect),e.special[t]=$({get[t](){return e.props[t]}},t,4)}finally{cl(r)}}return e.special[t](n),vc(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),vc(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function id(e,t){return new Proxy({props:e,exclude:t,special:{},version:mc(0),parent_effect:sl},rd)}var ad={get(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(co(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){for(var r=e.props.length;r--;){var i=e.props[r];co(i)&&(i=i());var a=no(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){for(var n=e.props.length;n--;){var r=e.props[n];if(co(r)&&(r=r()),typeof r==`object`&&r&&t in r){var i=no(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Po||t===Fo)return!1;for(var n of e.props)if(co(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){var t=[];for(var n of e.props)if(co(n)&&(n=n()),n){for(var r in n)t.includes(r)||t.push(r);for(var i of Object.getOwnPropertySymbols(n))t.includes(i)||t.push(i)}return t}};function od(){return new Proxy({props:[...arguments]},ad)}function $(e,t,n,r){var i,a,o=!Xa||!!(2&n),s=!!(8&n),c=!!(16&n),l=r,u=!0,d=()=>(u&&(u=!1,l=c?q(r):r),l);if(s){var f=Po in e||Fo in e;i=no(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;if(s?[a,m]=function(e){var t=nd;try{return nd=!1,[e(),nd]}finally{nd=t}}(()=>e[t]):a=e[t],a===void 0&&r!==void 0&&(a=d(),i&&(o&&function(){throw Error(`https://svelte.dev/e/props_invalid_value`)}(),i(a))),p=o?()=>{var n=e[t];return n===void 0?d():(u=!0,n)}:()=>{var n=e[t];return n!==void 0&&(l=void 0),n===void 0?l:n},o&&!(4&n))return p;if(i){var h=e.$$legacy;return function(e,t){return arguments.length>0?(o&&t&&!h&&!m||i(t?p():e),e):p()}}var g=!1,_=(1&n?tc:rc)(()=>(g=!1,p()));s&&K(_);var v=sl;return function(e,t){if(arguments.length>0){var n=t?K(_):o&&s?xc(e):e;return V(_,n),g=!0,l!==void 0&&(l=n),e}return nl&&g||(v.f&wo)!==0?_.v:K(_)}}function sd(e){if(!(arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(e){var t=function(e){try{if(typeof window<`u`&&window.localStorage!==void 0)return window.localStorage[e]}catch{}}(`debug`);return t!=null&&t.endsWith(`*`)?e.startsWith(t.slice(0,-1)):e===t}(e)))return cd;var t=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return ld[Math.abs(t)%ld.length]}(e);return function(){var n=[...arguments];console.log(`%c${e}`,`color:${t}`,...n)}}function cd(){}var ld=[`#0000CC`,`#0099FF`,`#009400`,`#8dd200`,`#CCCC00`,`#CC9933`,`#ae04e7`,`#ff35d7`,`#FF3333`,`#FF6600`,`#FF9933`,`#FFCC33`],ud=0;function dd(){return++ud}function fd(e){return parseInt(e,10)}function pd(e){return md.test(e)}var md=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function hd(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`)}function gd(e){return typeof e==`object`&&!!e&&(e.constructor===void 0||e.constructor.name===`Object`||e.constructor.name===`Array`)}function _d(e){return!0===e||!1===e}function vd(e){if(typeof e==`number`)return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e==`bigint`)return vd(Number(e));try{var t=e&&e.valueOf();if(t!==e)return vd(t)}catch{return!1}return!1}function yd(e){(bd||=window.document.createElement(`div`)).style.color=``,bd.style.color=e;var t=bd.style.color;return t===``?void 0:t.replace(/\s+/g,``).toLowerCase()}var bd=void 0;function xd(e){return typeof e==`string`&&e.length<99&&!!yd(e)}function Sd(e,t){if(typeof e==`number`||typeof e==`string`||typeof e==`boolean`||e===void 0)return typeof e;if(typeof e==`bigint`)return`number`;if(e===null)return`null`;if(Array.isArray(e))return`array`;if(hd(e))return`object`;var n=t.stringify(e);return n&&pd(n)?`number`:n===`true`||n===`false`?`boolean`:n===`null`?`null`:`unknown`}var Cd=/^https?:\/\/\S+$/;function wd(e){return typeof e==`string`&&Cd.test(e)}function Td(e,t){if(e===``)return``;var n=e.trim();return n===`null`?null:n===`true`||n!==`false`&&(pd(n)?t.parse(n):e)}var Ed=[];function Dd(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Od(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw TypeError(`Array expected`);function r(e,i){(!Array.isArray(e)&&!hd(e)||t&&i.length>0)&&(n[fn(i)]=!0),hd(e)&&Object.keys(e).forEach(t=>{r(e[t],i.concat(t))})}for(var i=Math.min(e.length,1e4),a=0;a<i;a++)r(e[a],Ed);return Object.keys(n).sort().map(dn)}function kd(e,t,n){if(!(t<=e))for(var r=e;r<t;r++)n(r)}function Ad(e,t){return e.length>t?e.slice(0,t):e}function jd(e){return R({},e)}function Md(e){return Object.values(e)}function Nd(e,t,n,r){var i=e.slice(0),a=i.splice(t,n);return i.splice.apply(i,[t+r,0,...a]),i}function Pd(e,t,n){return e.slice(0,t).concat(n).concat(e.slice(t))}function Fd(e,t){try{return t.parse(e)}catch{return t.parse(yr(e))}}function Id(e,t){try{return Fd(e,t)}catch{return}}function Ld(e,t){e=e.replace(zd,``);try{return t(e)}catch{}try{return t(`{`+e+`}`)}catch{}try{return t(`[`+e+`]`)}catch{}throw Error(`Failed to parse partial JSON`)}function Rd(e){e=e.replace(zd,``);try{return yr(e)}catch{}try{var t=yr(`[`+e+`]`);return t.substring(1,t.length-1)}catch{}try{var n=yr(`{`+e+`}`);return n.substring(1,n.length-1)}catch{}throw Error(`Failed to repair partial JSON`)}var zd=/,\s*$/;function Bd(e,t){var n=Xd.exec(t);if(n){var r=fd(n[2]),i=function(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.length,i=0,a=n;a<r;a++)e.charAt(a)===t&&i++;return i}(e,`
`,0,r),a=r-e.lastIndexOf(`
`,r)-1;return{position:r,line:i,column:a,message:t.replace(Xd,()=>`line ${i+1} column ${a+1}`)}}var o=Zd.exec(t),s=o?fd(o[1]):void 0,c=s===void 0?void 0:s-1,l=Qd.exec(t),u=l?fd(l[1]):void 0,d=u===void 0?void 0:u-1;return{position:c!==void 0&&d!==void 0?function(e,t,n){for(var r=e.indexOf(`
`),i=1;i<t&&r!==-1;)r=e.indexOf(`
`,r+1),i++;return r===-1?void 0:r+n+1}(e,c,d):void 0,line:c,column:d,message:t.replace(/^JSON.parse: /,``).replace(/ of the JSON data$/,``)}}function Vd(e,t){try{var n=Pa.parse(e),r=fn(t),i=n.pointers[r];if(i)return{path:t,line:i.key?i.key.line:i.value?i.value.line:0,column:i.key?i.key.column:i.value?i.value.column:0,from:i.key?i.key.pos:i.value?i.value.pos:0,to:i.keyEnd?i.keyEnd.pos:i.valueEnd?i.valueEnd.pos:0}}catch(e){console.error(e)}return{path:t,line:0,column:0,from:0,to:0}}function Hd(e){return hd(e)?e.json===void 0?e.text===void 0?`Content must contain either a property "json" or a property "text"`:typeof e.text==`string`?void 0:`Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?`:e.text===void 0?void 0:`Content must contain either a property "json" or a property "text" but not both`:`Content must be an object`}function Ud(e){return hd(e)&&typeof e.text==`string`}function Wd(e){return hd(e)&&e.json!==void 0}function Gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Ud(e)?e:{text:n.stringify(e.json,null,t)}}function Kd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Wd(e)?e:{json:t.parse(e.text)}}function qd(e,t,n){return Gd(e,t,n).text}function Jd(e,t){return Yd(e,t)>t}function Yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Ud(e))return e.text.length;var n=e.json,r=0;return function e(n){if(Array.isArray(n)){if((r+=n.length-1+2)>t)return;for(var i=0;i<n.length;i++)if(e(n[i]),r>t)return}else if(hd(n)){var a=Object.keys(n);r+=2+a.length+(a.length-1);for(var o=0;o<a.length;o++){var s=a[o],c=n[s];r+=s.length+2,e(c)}}else r+=typeof n==`string`?n.length+2:String(n).length}(n),r}var Xd=/(position|char) (\d+)/,Zd=/line (\d+)/,Qd=/column (\d+)/;function $d(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function ef(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&lf.test(t)}var tf,nf,rf,af,of,sf,cf,lf=/[,:]\S/;function uf(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:n}=e;return t?n?df:ff:n?pf:mf}(function(e){e.text=`text`,e.tree=`tree`,e.table=`table`})(tf||={}),function(e){e.after=`after`,e.inside=`inside`,e.key=`key`,e.value=`value`,e.multi=`multi`,e.text=`text`}(nf||={}),function(e){e.after=`after`,e.key=`key`,e.value=`value`,e.inside=`inside`}(rf||={}),function(e){e.info=`info`,e.warning=`warning`,e.error=`error`}(af||={}),function(e){e.key=`key`,e.value=`value`}(of||={}),function(e){e.asc=`asc`,e.desc=`desc`}(sf||={}),function(e){e.no=`no`,e.self=`self`,e.nextInside=`nextInside`}(cf||={});var df={escapeValue:e=>hf(yf(String(e))),unescapeValue:e=>bf(gf(e))},ff={escapeValue:e=>yf(String(e)),unescapeValue:e=>bf(e)},pf={escapeValue:e=>hf(String(e)),unescapeValue:e=>gf(e)},mf={escapeValue:e=>String(e),unescapeValue:e=>e};function hf(e){return e.replace(/[^\x20-\x7F]/g,e=>e===`\b`||e===`\f`||e===`
`||e===`\r`||e===`	`?e:`\\u`+(`000`+e.codePointAt(0)?.toString(16)).slice(-4))}function gf(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,e=>{try{var t=JSON.parse(`"`+e+`"`);return _f[t]||t}catch{return e}})}var _f={'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},vf={'\\"':`"`,"\\\\":`\\`,"\\/":`/`,"\\b":`\b`,"\\f":`\f`,"\\n":`
`,"\\r":`\r`,"\\t":`	`};function yf(e){return e.replace(/["\b\f\n\r\t\\]/g,e=>_f[e]||e)}function bf(e){return e.replace(/\\["bfnrt\\]/g,e=>vf[e]||e)}function xf(e){return typeof e==`string`?e.endsWith(`
`)?e+`
`:e:String(e)}function Sf(e,t){return wf(e,e=>e.nodeName.toUpperCase()===t.toUpperCase())}function Cf(e,t,n){return wf(e,e=>function(e,t,n){return typeof e.getAttribute==`function`&&e.getAttribute(t)===n}(e,t,n))}function wf(e,t){return!!Tf(e,t)}function Tf(e,t){for(var n=e;n&&!t(n);)n=n.parentNode;return n}function Ef(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)??void 0}function Df(e){var t=Ef(e)?.document.activeElement;return!!t&&wf(t,t=>t===e)}function Of(e,t){return Tf(e,e=>e.nodeName===t)}function kf(e){return Cf(e,`data-type`,`selectable-key`)?nf.key:Cf(e,`data-type`,`selectable-value`)?nf.value:Cf(e,`data-type`,`insert-selection-area-inside`)?nf.inside:Cf(e,`data-type`,`insert-selection-area-after`)?nf.after:nf.multi}function Af(e){return encodeURIComponent(fn(e))}function jf(e){var t=Tf(e,e=>!(e==null||!e.hasAttribute)&&e.hasAttribute(`data-path`))?.getAttribute(`data-path`)??void 0;return t?dn(decodeURIComponent(t)):void 0}function Mf(e){var{allElements:t,currentElement:n,direction:r,hasPrio:i=()=>!0,margin:a=10}=e,o=k(t.filter(function(e){var t=e.getBoundingClientRect();return t.width>0&&t.height>0}),c),s=c(n);function c(e){var t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2,rect:t,element:e}}function l(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e.x-t.x,i=(e.y-t.y)*n;return Math.sqrt(r*r+i*i)}var u=e=>l(e,s);if(r===`Left`||r===`Right`){var d=r===`Left`?o.filter(e=>{return t=s,e.rect.left+a<t.rect.left;var t}):o.filter(e=>{return t=s,e.rect.right>t.rect.right+a;var t});return(At(d.filter(e=>{return t=e,n=s,Math.abs(t.y-n.y)<a;var t,n}),u)||At(d,e=>l(e,s,10)))?.element}if(r===`Up`||r===`Down`){var f=r===`Up`?o.filter(e=>{return t=s,e.y+a<t.y;var t}):o.filter(e=>{return t=s,e.y>t.y+a;var t});return(At(f.filter(e=>i(e.element)),u)||At(f,u))?.element}}function Nf(){var e,t,n;return typeof navigator<`u`&&(e=((t=navigator)==null||(t=t.platform)==null?void 0:t.toUpperCase().includes(`MAC`))??((n=navigator)==null||(n=n.userAgentData)==null||(n=n.platform)==null?void 0:n.toUpperCase().includes(`MAC`)))!=null&&e}function Pf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`+`,n=[];Ff(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nf)&&n.push(`Ctrl`),e.altKey&&n.push(`Alt`),e.shiftKey&&n.push(`Shift`);var r=e.key.length===1?e.key.toUpperCase():e.key;return r in If||n.push(r),n.join(t)}function Ff(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nf;return e.ctrlKey||e.metaKey&&t()}var If={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function Lf(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Lf(`.jse-absolute-popup.svelte-enkkpn {
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
}`);var Rf=X(`<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>`),zf=X(`<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>`);function Bf(e,t){Go(t,!1);var n=$(t,`popup`,8),r=$(t,`closeAbsolutePopup`,8),i=B(),a=B();function o(e){n().options&&n().options.closeOnOuterClick&&!wf(e.target,e=>e===K(i))&&r()(n().id)}function s(e){Pf(e)===`Escape`&&(e.preventDefault(),e.stopPropagation(),r()(n().id))}au(function(){K(a)&&K(a).focus()}),Qu();var c=zf();Y(`mousedown`,sc,function(e){o(e)},!0),Y(`keydown`,sc,s,!0),Y(`wheel`,sc,function(e){o(e)},!0);var l=H(c),u=e=>{var t=Rf(),r=H(t);Yu(r,e=>V(a,e),()=>K(a)),yu(U(r,2),()=>n().component,(e,t)=>{t(e,od(()=>n().props))}),G(e=>ku(t,e),[()=>(K(i),J(n()),q(()=>function(e,t){var n=e.getBoundingClientRect(),{left:r,top:i,positionAbove:a,positionLeft:o}=function(){if(t.anchor){var{anchor:e,width:n=0,height:r=0,offsetTop:i=0,offsetLeft:a=0,position:o}=t,{left:s,top:c,bottom:l,right:u}=e.getBoundingClientRect(),d=o===`top`||c+r>window.innerHeight&&c>r,f=o===`left`||s+n>window.innerWidth&&s>n;return{left:f?u-a:s+a,top:d?c-i:l+i,positionAbove:d,positionLeft:f}}if(typeof t.left==`number`&&typeof t.top==`number`){var{left:p,top:m,width:h=0,height:g=0}=t;return{left:p,top:m,positionAbove:m+g>window.innerHeight&&m>g,positionLeft:p+h>window.innerWidth&&p>h}}throw Error(`Invalid config: pass either "left" and "top", or pass "anchor"`)}();return(a?`bottom: ${n.top-i}px;`:`top: ${i-n.top}px;`)+(o?`right: ${n.left-r}px;`:`left: ${r-n.left}px;`)}(K(i),n().options)))]),Z(e,t)};Q(l,e=>{K(i)&&e(u)}),Yu(c,e=>V(i,e),()=>K(i)),Y(`mousedown`,c,function(e){e.stopPropagation()}),Y(`keydown`,c,s),Z(e,c),Ko()}var Vf=X(`<!> <!>`,1);function Hf(e,t){Go(t,!1);var n=sd(`jsoneditor:AbsolutePopup`),r=B([],!0);function i(e){var t=K(r).findIndex(t=>t.id===e);if(t!==-1){var n=K(r)[t];n.options.onClose&&n.options.onClose(),V(r,K(r).filter(t=>t.id!==e))}}(function(e,t){Jo().set(e,t)})(`absolute-popup`,{openAbsolutePopup:function(e,t,i){n(`open...`,t,i);var a={id:dd(),component:e,props:t||{},options:i||{}};return V(r,[...K(r),a]),a.id},closeAbsolutePopup:i}),W(()=>K(r),()=>{n(`popups`,K(r))}),Rc(),Qu(!0);var a=Vf(),o=Dc(a);pu(o,1,()=>K(r),du,(e,t)=>{Bf(e,{get popup(){return K(t)},closeAbsolutePopup:i})}),vu(U(o,2),t,`default`,{},null),Z(e,a),Ko()}function Uf(e,t){for(var n=new Set(t),r=e.replace(/ \(copy( \d+)?\)$/,``),i=e,a=1;n.has(i);)i=`${r} (${`copy`+(a>1?` `+a:``)})`,a++;return i}function Wf(e,t){var n=t-3;return e.length>t?e.substring(0,n)+`...`:e}function Gf(e){if(e===``)return``;var t=e.toLowerCase();if(t===`null`)return null;if(t===`true`)return!0;if(t===`false`)return!1;if(t!==`undefined`){var n=Number(e);return isNaN(n)||isNaN(parseFloat(e))?e:n}}var Kf={id:`jsonquery`,name:`JSONQuery`,description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:n,sort:r,projection:i}=t,a=[];n&&n.path&&n.relation&&n.value&&a.push([`filter`,[(o=n.relation,ei(`1 ${o} 1`)[0]),qf(n.path),Gf(n.value)]]);var o;return r&&r.path&&r.direction&&a.push([`sort`,qf(r.path),r.direction===`desc`?`desc`:`asc`]),i&&i.paths&&(i.paths.length>1?a.push([`pick`,...i.paths.map(qf)]):a.push([`map`,qf(i.paths[0])])),ri([`pipe`,...a])},executeQuery:function(e,t,n){var r=$d(n,JSON)?e:function(e){var t=n.stringify(e);return t===void 0?void 0:JSON.parse(t)}(e);return t.trim()===``?r:ii(r,t)}};function qf(e){return[`get`,...e]}var Jf=zl(`<g><!></g>`);function Yf(e,t){Go(t,!1);var n=870711,r=B(``),i=$(t,`data`,8);function a(e){if(!e||!e.raw)return``;var t=e.raw,r={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(e,t)=>{var i=`fa-${(n+=1).toString(16)}`;return r[t]=i,` id="${i}"`}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(e,t,n,i)=>{var a=t||i;return a&&r[a]?`#${r[a]}`:e}),t}W(()=>J(i()),()=>{V(r,a(i()))}),Rc();var o=Jf();_u(H(o),()=>K(r),!0),Z(e,o),Ko()}Lf(`
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
`);var Xf=zl(`<svg><!></svg>`),Zf=zl(`<path></path>`),Qf=zl(`<polygon></polygon>`),$f=zl(`<!><!><!>`,1);function ep(e,t){var n=id(id(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`data`,`scale`,`spin`,`inverse`,`pulse`,`flip`,`label`,`style`]);Go(t,!1);var r=$(t,`class`,8,``),i=$(t,`data`,8),a=B(),o=$(t,`scale`,8,1),s=$(t,`spin`,8,!1),c=$(t,`inverse`,8,!1),l=$(t,`pulse`,8,!1),u=$(t,`flip`,8,void 0),d=$(t,`label`,8,``),f=$(t,`style`,8,``),p=B(10),m=B(10),h=B(),g=B();function _(){var e=1;return o()!==void 0&&(e=Number(o())),isNaN(e)||e<=0?(console.warn(`Invalid prop: prop "scale" should be a number over 0.`),1):1*e}function v(){return K(a)?Math.max(K(a).width,K(a).height)/16:1}W(()=>(J(i()),J(f()),J(o())),()=>{V(a,function(e){var t;if(e){if(!(`definition`in e)){if(`iconName`in e&&`icon`in e){e.iconName;var[n,r,,,i]=e.icon;t={width:n,height:r,paths:(Array.isArray(i)?i:[i]).map(e=>({d:e}))}}else t=e[Object.keys(e)[0]];return t}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(i())),f(),o(),V(p,K(a)?K(a).width/v()*_():0),V(m,K(a)?K(a).height/v()*_():0),V(h,function(){var e=``;f()!==null&&(e+=f());var t=_();return t===1?e.length===0?``:e:(e===``||e.endsWith(`;`)||(e+=`; `),`${e}font-size: ${t}em`)}()),V(g,K(a)?`0 0 ${K(a).width} ${K(a).height}`:`0 0 ${K(p)} ${K(m)}`)}),Rc(),Qu(),function(e,t){var n=id(id(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),[`class`,`width`,`height`,`box`,`spin`,`inverse`,`pulse`,`flip`,`style`,`label`]),r=$(t,`class`,8,``),i=$(t,`width`,8),a=$(t,`height`,8),o=$(t,`box`,8,`0 0 0 0`),s=$(t,`spin`,8,!1),c=$(t,`inverse`,8,!1),l=$(t,`pulse`,8,!1),u=$(t,`flip`,8,`none`),d=$(t,`style`,8,``),f=$(t,`label`,8,``),p=Xf();Bu(p,()=>R(R({version:`1.1`,class:`fa-icon ${r()??``}`,width:i(),height:a(),"aria-label":f(),role:f()?`img`:`presentation`,viewBox:o(),style:d()},n),{},{[Nu]:{"fa-spin":s(),"fa-pulse":l(),"fa-inverse":c(),"fa-flip-horizontal":u()===`horizontal`,"fa-flip-vertical":u()===`vertical`}}),void 0,void 0,void 0,`svelte-v67cny`),vu(H(p),t,`default`,{},null),Z(e,p)}(e,od({get label(){return d()},get width(){return K(p)},get height(){return K(m)},get box(){return K(g)},get style(){return K(h)},get spin(){return s()},get flip(){return u()},get inverse(){return c()},get pulse(){return l()},get class(){return r()}},()=>n,{children:(e,n)=>{var r=Vl();vu(Dc(r),t,`default`,{},e=>{var t=$f(),n=Dc(t);pu(n,1,()=>(K(a),q(()=>K(a)?.paths||[])),du,(e,t)=>{var n=Zf();Bu(n,()=>R({},K(t))),Z(e,n)});var r=U(n);pu(r,1,()=>(K(a),q(()=>K(a)?.polygons||[])),du,(e,t)=>{var n=Qf();Bu(n,()=>R({},K(t))),Z(e,n)});var i=U(r),o=e=>{Yf(e,{get data(){return K(a)},set data(e){V(a,e)},$$legacy:!0})};Q(i,e=>{K(a),q(()=>K(a)?.raw)&&e(o)}),Z(e,t)}),Z(e,r)},$$slots:{default:!0}})),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var tp=X(`<div role="checkbox" tabindex="-1"><!></div>`);function np(e,t){Go(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`readOnly`,9),a=$(t,`onPatch`,9),o=$(t,`focus`,9);Qu(!0);var s,c=tp(),l=H(c),u=rc(()=>!0===r()?oi:ci);ep(l,{get data(){return K(u)}}),G(()=>{Ru(c,`aria-checked`,!0===r()),s=Du(c,1,`jse-boolean-toggle svelte-eli4ob`,null,s,{"jse-readonly":i()}),Ru(c,`title`,i()?`Boolean value ${r()}`:`Click to toggle this boolean value`)}),Y(`mousedown`,c,function(e){e.stopPropagation(),i()||(a()([{op:`replace`,path:fn(n()),value:!r()}]),o()())}),Z(e,c),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var rp=X(`<div class="jse-color-picker-popup svelte-v77py2"></div>`);function ip(e,t){Go(t,!1);var n=$(t,`color`,8),r=$(t,`onChange`,8),i=$(t,`showOnTop`,8),a=B(),o=()=>{};au(Va(function*(){var e=new((yield ce(()=>import(`./vanilla-picker-BEh5-WZ9.js`),[]))?.default)({parent:K(a),color:n(),popup:i()?`top`:`bottom`,onDone(e){var t=e.rgba[3]===1?e.hex.substring(0,7):e.hex;r()(t)}});e.show(),o=()=>{e.destroy()}})),ou(()=>{o()}),Qu();var s=rp();Yu(s,e=>V(a,e),()=>K(a)),Z(e,s),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var ap=X(`<button type="button"></button>`);function op(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),{openAbsolutePopup:i}=Wo(`absolute-popup`),a=$(t,`path`,9),o=$(t,`value`,9),s=$(t,`readOnly`,9),c=$(t,`onPatch`,9),l=$(t,`focus`,9);function u(e){c()([{op:`replace`,path:fn(a()),value:e}]),d()}function d(){l()()}W(()=>J(o()),()=>{V(n,yd(o()))}),W(()=>(J(s()),J(o())),()=>{V(r,s()?`Color ${o()}`:`Click to open a color picker`)}),Rc(),Qu(!0);var f,p=ap();G(()=>{f=Du(p,1,`jse-color-picker-button svelte-13mgyo6`,null,f,{"jse-readonly":s()}),ku(p,`background: ${K(n)??``}`),Ru(p,`title`,K(r)),Ru(p,`aria-label`,K(r))}),Y(`click`,p,function(e){if(!s()){var t=e.target,n=t.getBoundingClientRect().top,r=(Ef(t)?.innerHeight??0)-n<300&&n>300;i(ip,{color:o(),onChange:u,showOnTop:r},{anchor:t,closeOnOuterClick:!0,onClose:d,offsetTop:18,offsetLeft:-8,height:300})}}),Z(e,p),Ko()}var sp=1e3,cp=100,lp=100,up=2e4,dp=[{start:0,end:cp}],fp=1048576,pp=1048576,mp=10485760,hp=`Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value`,gp=`Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)`,_p=`hover-insert-inside`,vp=`hover-insert-after`,yp=`hover-collection`,bp=`valid`,xp=`repairable`,Sp=336,Cp=260,wp=100,Tp={[sf.asc]:`ascending`,[sf.desc]:`descending`};function Ep(e){for(var t=It(e,e=>e.start),n=[t[0]],r=0;r<t.length;r++){var i=n.length-1,a=n[i],o=t[r];o.start<=a.end?n[i]={start:Math.min(a.start,o.start),end:Math.max(a.end,o.end)}:n.push(o)}return n}function Dp(e){return Op(e)+cp}function Op(e){return Math.floor(e/cp)*cp}function kp(e){return!!e&&(e.type===`space`||!0===e.space)}function Ap(e){return!!e&&(e.type===`separator`||!0===e.separator)}function jp(e){return!!e&&e.type===`label`&&typeof e.text==`string`}function Mp(e){return!!e&&typeof e.onClick==`function`}function Np(e){return!!e&&e.type===`dropdown-button`&&Mp(e.main)&&Array.isArray(e.items)}function Pp(e){return!!e&&e.type===`row`&&Array.isArray(e.items)}function Fp(e){return!!e&&e.type===`column`&&Array.isArray(e.items)}function Ip(e){return hd(e)&&hd(e.parseError)}function Lp(e){return hd(e)&&Array.isArray(e.validationErrors)}function Rp(e){return hd(e)&&Array.isArray(e.path)&&typeof e.message==`string`&&`severity`in e}function zp(e){return hd(e)&&Rp(e)&&typeof e.isChildError==`boolean`}function Bp(e){return hd(e)&&typeof e.action==`function`&&hd(e.props)}function Vp(e){return e!==void 0&&e.type===`object`}function Hp(e){return e!==void 0&&e.type===`array`}function Up(e){return e!==void 0&&e.type===`value`}function Wp(e){return Vp(e)||Hp(e)}function Gp(e){return e!==void 0&&Array.isArray(e.searchResults)}function Kp(e){return!!e&&e.type===`tree`}function qp(e){return!!e&&e.type===`text`}function Jp(e){return!!e&&e.type===`mode`}function Yp(e){var{json:t,expand:n}=e,r=function(e){var{json:t,factory:n}=e;return Array.isArray(t)?n.createArrayDocumentState():hd(t)?n.createObjectDocumentState():t===void 0?void 0:n.createValueDocumentState()}({json:t,factory:Qp});return n&&r?im(t,r,[],n):r}function Xp(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:`array`,expanded:e,visibleSections:dp,items:[]}}function Zp(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:`object`,expanded:e,properties:{}}}var Qp={createObjectDocumentState:Zp,createArrayDocumentState:Xp,createValueDocumentState:function(){return{type:`value`}}};function $p(e,t,n,r){var{createObjectDocumentState:i,createArrayDocumentState:a,createValueDocumentState:o}=r;return function e(t,n,r){if(Array.isArray(t)){var s=Hp(n)?n:a();if(r.length===0)return s;var c=fd(r[0]),l=e(t[c],s.items[c],r.slice(1));return an(s,[`items`,r[0]],l)}if(hd(t)){var u=Vp(n)?n:i();if(r.length===0)return u;var d=r[0],f=e(t[d],u.properties[d],r.slice(1));return an(u,[`properties`,d],f)}return Up(n)?n:o()}(e,t,n)}function em(e,t){return tm(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(e,t)=>{if(e!==void 0&&t!==void 0)return Array.isArray(e)?Hp(t)?t:Xp({expanded:!!Wp(t)&&t.expanded}):hd(e)?Vp(t)?t:Zp({expanded:!!Wp(t)&&t.expanded}):Up(t)?t:void 0},()=>!0)}function tm(e,t,n,r,i){var a=r(e,t,n);if(Array.isArray(e)&&Hp(a)&&i(a)){var o=[];return nm(e,a.visibleSections,t=>{var s=n.concat(String(t)),c=tm(e[t],a.items[t],s,r,i);c!==void 0&&(o[t]=c)}),Dd(o,a.items)?a:R(R({},a),{},{items:o})}if(hd(e)&&Vp(a)&&i(a)){var s={};return Object.keys(e).forEach(t=>{var o=n.concat(t),c=tm(e[t],a.properties[t],o,r,i);c!==void 0&&(s[t]=c)}),Dd(Object.values(s),Object.values(a.properties))?a:R(R({},a),{},{properties:s})}return a}function nm(e,t,n){t.forEach(t=>{var{start:r,end:i}=t;kd(r,Math.min(e.length,i),n)})}function rm(e,t){for(var n=e,r=[],i=0;i<t.length;){if(Array.isArray(n)){var a=t[i];r.push(`items`,a),n=n[fd(a)]}else{if(!hd(n))throw Error(`Cannot convert path: Object or Array expected at index ${i}`);var o=t[i];r.push(`properties`,o),n=n[o]}i++}return r}function im(e,t,n,r){for(var i=t,a=function(t){var r=n.slice(0,t);i=fm(e,i,r,(e,r)=>{var i=Wp(r)&&!r.expanded?R(R({},r),{},{expanded:!0}):r;return Hp(i)?function(e,t){if(function(e,t){return e.some(e=>t>=e.start&&t<e.end)}(e.visibleSections,t))return e;var n=Op(t),r={start:n,end:Dp(n)};return R(R({},e),{},{visibleSections:Ep(e.visibleSections.concat(r))})}(i,fd(n[t])):i})},o=0;o<n.length;o++)a(o);return fm(e,i,n,(e,t)=>function(e,t,n,r){return tm(e,t,n,(e,t,n)=>Array.isArray(e)&&r(n)?Hp(t)?t.expanded?t:R(R({},t),{},{expanded:!0}):Xp({expanded:!0}):hd(e)&&r(n)?Vp(t)?t.expanded?t:R(R({},t),{},{expanded:!0}):Zp({expanded:!0}):t,e=>Wp(e)&&e.expanded)}(e,t,[],r))}function am(e,t,n,r){return fm(e,t,n,(e,t)=>r?function(e,t,n){return tm(e,t,n,(e,t)=>om(t),()=>!0)}(e,t,n):om(t))}function om(e){return Hp(e)&&e.expanded?R(R({},e),{},{expanded:!1,visibleSections:dp}):Vp(e)&&e.expanded?R(R({},e),{},{expanded:!1}):e}function sm(e,t,n){var r={json:e,documentState:t},i=n.reduce((e,t)=>({json:hn(e.json,[t]),documentState:cm(e.json,e.documentState,t)}),r);return{json:i.json,documentState:em(i.json,i.documentState)}}function cm(e,t,n){if(Gt(n))return pm(e,t,n,void 0);if(Kt(n))return mm(e,t,n);if(qt(n)){var r=Tn(e,n.path),i=gm(e,t,r);return i?dm(e,t,r,{type:`value`,enforceString:i}):t}return Jt(n)||Yt(n)?function(e,t,n){if(Yt(n)&&n.from===n.path)return t;var r=t,i=Tn(e,n.from),a=lm(e,r,i);return Yt(n)&&(r=mm(e,r,{path:n.from})),r=pm(e,r,{path:n.path},a),r}(e,t,n):t}function lm(e,t,n){try{return L(t,rm(e,n))}catch{return}}function um(e,t,n,r,i){return sn($p(e,t,n,i),rm(e,n),t=>r(L(e,n),t))}function dm(e,t,n,r){return function(e,t,n,r,i){return an($p(e,t,n,i),rm(e,n),r)}(e,t,n,r,Qp)}function fm(e,t,n,r){return um(e,t,n,r,Qp)}function pm(e,t,n,r){var i=Tn(e,n.path),a=t;return a=fm(e,a,St(i),(e,t)=>{if(!Hp(t))return t;var n=fd(T(i)),{items:a,visibleSections:o}=t;return R(R({},t),{},{items:n<a.length?Pd(a,n,r===void 0?[,]:[r]):a,visibleSections:hm(o,n,1)})}),dm(e,a,i,r)}function mm(e,t,n){var r=Tn(e,n.path),i=St(r),a=L(e,i);return Array.isArray(a)?fm(e,t,i,(e,t)=>{if(!Hp(t))return t;var n=fd(T(r)),{items:i,visibleSections:a}=t;return R(R({},t),{},{items:i.slice(0,n).concat(i.slice(n+1)),visibleSections:hm(a,n,-1)})}):function(e,t,n){return un(t,rm(e,n))?cn(t,rm(e,n)):t}(e,t,r)}function hm(e,t,n){return function(e){for(var t=e.slice(0),n=1;n<t.length;)t[n-1].end===t[n].start&&(t[n-1]={start:t[n-1].start,end:t[n].end},t.splice(n)),n++;return t}(e.map(e=>({start:e.start>t?e.start+n:e.start,end:e.end>t?e.end+n:e.end})))}function gm(e,t,n){var r,i=L(e,n),a=lm(e,t,n),o=Up(a)?a.enforceString:void 0;return typeof o==`boolean`?o:typeof(r=i)==`string`&&typeof Td(r,JSON)!=`string`}function _m(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=e.indexOf(t);return r===-1?[]:n?e.slice(r):e.slice(r+1)}function vm(e,t){var n=[];return function e(t,r,i){n.push(i),Ut(t)&&Hp(r)&&r.expanded&&nm(t,r.visibleSections,n=>{e(t[n],r.items[n],i.concat(String(n)))}),Wt(t)&&Vp(r)&&r.expanded&&Object.keys(t).forEach(n=>{e(t[n],r.properties[n],i.concat(n))})}(e,t,[]),n}function ym(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=[];return function i(a,o){r.push({path:o,type:rf.value});var s=lm(e,t,o);a&&Wp(s)&&s.expanded&&(n&&r.push({path:o,type:rf.inside}),Ut(a)&&nm(a,Hp(s)?s.visibleSections:dp,e=>{var t=o.concat(String(e));i(a[e],t),n&&r.push({path:t,type:rf.after})}),Wt(a)&&Object.keys(a).forEach(e=>{var t=o.concat(e);r.push({path:t,type:rf.key}),i(a[e],t),n&&r.push({path:t,type:rf.after})}))}(e,[]),r}function bm(e,t,n){var r=vm(e,t),i=r.map(fn).indexOf(fn(n));if(i!==-1&&i<r.length-1)return r[i+1]}function xm(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return im(e,t,n,Jd({json:L(e,n)},r)?Cm:Tm)}function Sm(e,t,n){var r=lm(e,t,n);return Wp(r)&&r.expanded?t:xm(e,t,n)}function Cm(e){return e.length===0||e.length===1&&e[0]===`0`}function wm(e){return e.length===0}function Tm(){return!0}function Em(){return!1}function Dm(e){return e&&e.type===nf.after||!1}function Om(e){return e&&e.type===nf.inside||!1}function km(e){return e&&e.type===nf.key||!1}function Am(e){return e&&e.type===nf.value||!1}function jm(e){return e&&e.type===nf.multi||!1}function Mm(e){return jm(e)&&D(e.focusPath,e.anchorPath)}function Nm(e){return jm(e)||Dm(e)||Om(e)||km(e)||Am(e)}function Pm(e){return e&&e.type===nf.text||!1}function Fm(e,t){var n=[];return function(e,t,n){if(t){var r=dh(t),i=uh(t);if(D(r,i))return n(r);if(e!==void 0){var a=Um(r,i);if(r.length===a.length||i.length===a.length)return n(a);var o=eh(r,i),s=Lm(e,o),c=Rm(e,o),l=lh(e,o,s),u=lh(e,o,c);if(!(l===-1||u===-1)){var d=L(e,a);if(Wt(d)){for(var f=Object.keys(d),p=l;p<=u;p++){var m=n(a.concat(f[p]));if(m!==void 0)return m}return}if(Ut(d)){for(var h=l;h<=u;h++){var g=n(a.concat(String(h)));if(g!==void 0)return g}return}throw Error(`Failed to create selection`)}}}}(e,t,e=>{n.push(e)}),n}function Im(e){return Om(e)?e.path:St(uh(e))}function Lm(e,t){if(!jm(t))return t.path;var n=lh(e,t,t.anchorPath);return lh(e,t,t.focusPath)<n?t.focusPath:t.anchorPath}function Rm(e,t){if(!jm(t))return t.path;var n=lh(e,t,t.anchorPath);return lh(e,t,t.focusPath)>n?t.focusPath:t.anchorPath}function zm(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?uh(n):Lm(e,n),a=function(e,t,n){var r=vm(e,t),i=r.map(fn),a=fn(n),o=i.indexOf(a);if(o!==-1&&o>0)return r[o-1]}(e,t,i);if(r)return Om(n)||Dm(n)?a===void 0?void 0:eh(i,i):a===void 0?void 0:eh(dh(n),a);if(Dm(n)||Om(n))return Xm(i);if(km(n)){if(a===void 0||a.length===0)return;var o=L(e,St(a));return Array.isArray(o)||Et(a)?Xm(a):Jm(a)}return Am(n),a===void 0?void 0:Xm(a)}}function Bm(e,t,n,r){if(!n)return{caret:void 0,previous:void 0,next:void 0};var i=ym(e,t,r),a=i.findIndex(e=>D(e.path,uh(n))&&String(e.type)===String(n.type));return{caret:a===-1?void 0:i[a],previous:a!==-1&&a>0?i[a-1]:void 0,next:a!==-1&&a<i.length-1?i[a+1]:void 0}}function Vm(e,t){for(var n=vm(e,t),r=0;r<n.length-1&&n[r+1].length>n[r].length;)r++;var i=n[r];return i===void 0||i.length===0||Array.isArray(L(e,St(i)))?Xm(i):Jm(i)}function Hm(e,t){if(t.length===1){var n=yt(t);if(n.op===`replace`)return Xm(Tn(e,n.path))}if(!Et(t)&&t.every(e=>e.op===`move`)){var r=yt(t),i=t.slice(1);if((Jt(r)||Yt(r))&&r.from!==r.path&&i.every(e=>(Jt(e)||Yt(e))&&e.from===e.path))return Jm(Tn(e,r.path))}var a=t.filter(e=>e.op!==`test`&&e.op!==`remove`&&(e.op!==`move`||e.from!==e.path)&&typeof e.path==`string`).map(t=>Tn(e,t.path));if(!Et(a))return{type:nf.multi,anchorPath:yt(a),focusPath:T(a)}}function Um(e,t){for(var n=0;n<e.length&&n<t.length&&e[n]===t[n];)n++;return e.slice(0,n)}function Wm(e){return km(e)||Am(e)||Mm(e)}function Gm(e,t){return Wm(t)&&gd(L(e,uh(t)))?uh(t):St(uh(t))}function Km(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function qm(e){if(nh(e)){var{type:t,path:n}=e;return{type:t,path:n}}return e}function Jm(e){return{type:nf.key,path:e}}function Ym(e,t){return{type:nf.key,path:e,edit:!0,initialValue:t}}function Xm(e){return{type:nf.value,path:e}}function Zm(e,t){return{type:nf.value,path:e,edit:!0,initialValue:t}}function Qm(e){return{type:nf.inside,path:e}}function $m(e){return{type:nf.after,path:e}}function eh(e,t){var n=Um(e,t),r=e.length>n.length&&t.length>n.length;return{type:nf.multi,anchorPath:r?n.concat(e[n.length]):n,focusPath:r?n.concat(t[n.length]):n}}function th(e,t,n,r){if(km(t))return String(T(t.path));if(Am(t)){var i=L(e,t.path);return typeof i==`string`?i:r.stringify(i,null,n)}if(jm(t)){if(Et(t.focusPath))return r.stringify(e,null,n);var a=L(e,Im(t));if(Array.isArray(a)){if(Mm(t)){var o=L(e,t.focusPath);return r.stringify(o,null,n)}return Fm(e,t).map(t=>{var i=L(e,t);return`${r.stringify(i,null,n)},`}).join(`
`)}return Fm(e,t).map(t=>{var i=T(t),a=L(e,t);return`${r.stringify(i)}: ${r.stringify(a,null,n)},`}).join(`
`)}}function nh(e){return(km(e)||Am(e))&&!0===e.edit}function rh(e){return km(e)||Am(e)||jm(e)}function ih(e){return km(e)||Am(e)||Mm(e)}function ah(e){switch(e.type){case rf.key:return Jm(e.path);case rf.value:return Xm(e.path);case rf.after:return $m(e.path);case rf.inside:return Qm(e.path)}}function oh(e,t){switch(e){case nf.key:return Jm(t);case nf.value:return Xm(t);case nf.after:return $m(t);case nf.inside:return Qm(t);case nf.multi:case nf.text:return eh(t,t)}}function sh(e,t,n){if(t)return ch(e,t,n)||Km(jm(t)?St(t.focusPath):t.path,n)?t:void 0}function ch(e,t,n){if(e===void 0||!t)return!1;if(km(t)||Om(t)||Dm(t))return D(t.path,n);if(Am(t))return Km(n,t.path);if(jm(t)){var r=Lm(e,t),i=Rm(e,t),a=St(t.focusPath);if(!Km(n,a)||n.length<=a.length)return!1;var o=lh(e,t,r),s=lh(e,t,i),c=lh(e,t,n);return c!==-1&&c>=o&&c<=s}return!1}function lh(e,t,n){var r=St(t.focusPath);if(!Km(n,r)||n.length<=r.length)return-1;var i=n[r.length],a=L(e,r);if(Wt(a))return Object.keys(a).indexOf(i);if(Ut(a)){var o=fd(i);if(o<a.length)return o}return-1}function uh(e){return jm(e)?e.focusPath:e.path}function dh(e){return jm(e)?e.anchorPath:e.path}function fh(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i of n)if(typeof i==`string`&&e.push(i),i&&typeof i==`object`)for(var a in i)Object.hasOwnProperty.call(i,a)&&i[a]&&e.push(a);return e.join(` `)}function ph(e,t,n){return fh(`jse-value`,`jse-`+Sd(e,n),{"jse-url":wd(e),"jse-empty":typeof e==`string`&&e.length===0,"jse-table-cell":t===tf.table})}Lf(`/* over all fonts, sizes, and colors */
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
}`);var mh=X(`<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>`);function hh(e,t){Go(t,!1);var n=sd(`jsoneditor:EditableDiv`),r=$(t,`value`,9),i=$(t,`initialValue`,9),a=$(t,`shortText`,9,!1),o=$(t,`label`,9),s=$(t,`onChange`,9),c=$(t,`onCancel`,9),l=$(t,`onFind`,9),u=$(t,`onPaste`,9,st),d=$(t,`onValueClass`,9,()=>``),f=B(void 0,!0),p=B(void 0,!0),m=!1;function h(){return K(f)?function(e){return e.replace(/\n$/,``)}(K(f).innerText):``}function g(e){K(f)&&gc(f,K(f).innerText=xf(e))}au(()=>{n(`onMount`,{value:r(),initialValue:i()}),g(i()===void 0?r():i()),K(f)&&function(e){if(e.firstChild!=null){var t=document.createRange(),n=window.getSelection();t.setStart(e,1),t.collapse(!0),n?.removeAllRanges(),n?.addRange(t)}else e.focus()}(K(f))}),ou(()=>{var e=h();n(`onDestroy`,{closed:m,value:r(),newValue:e}),m||e===r()||s()(e,cf.no)}),W(()=>(J(d()),J(r())),()=>{V(p,d()(r()))}),Rc(),Qu(!0);var _=mh();Yu(_,e=>V(f,e),()=>K(f)),G(e=>{Ru(_,`aria-label`,o()),Du(_,1,e,`svelte-1r0oryi`)},[()=>Cu((J(fh),K(p),J(a()),q(()=>fh(`jse-editable-div`,K(p),{"jse-short-text":a()}))))]),Y(`input`,_,function(){var e=h();e===``&&g(``),V(p,d()(e))}),Y(`keydown`,_,function(e){e.stopPropagation();var t=Pf(e);if(t===`Escape`&&(e.preventDefault(),m=!0,c()()),t===`Enter`||t===`Tab`){e.preventDefault(),m=!0;var n=h();s()(n,cf.nextInside)}t===`Ctrl+F`&&(e.preventDefault(),l()(!1)),t===`Ctrl+H`&&(e.preventDefault(),l()(!0))}),Y(`paste`,_,function(e){if(e.stopPropagation(),u()&&e.clipboardData){var t=e.clipboardData.getData(`text/plain`);u()(t)}}),Y(`blur`,_,function(){var e=document.hasFocus(),t=h();n(`handleBlur`,{hasFocus:e,closed:m,value:r(),newValue:t}),document.hasFocus()&&!m&&(m=!0,t!==r()&&s()(t,cf.self))}),Z(e,_),Ko()}function gh(e,t){Go(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`selection`,9),a=$(t,`mode`,9),o=$(t,`parser`,9),s=$(t,`normalization`,9),c=$(t,`enforceString`,9),l=$(t,`onPatch`,9),u=$(t,`onPasteJson`,9),d=$(t,`onSelect`,9),f=$(t,`onFind`,9),p=$(t,`focus`,9),m=$(t,`findNextInside`,9);function h(e){return c()?e:Td(e,o())}function g(){d()(Xm(n())),p()()}Qu(!0);var _=rc(()=>(J(s()),J(r()),q(()=>s().escapeValue(r())))),v=rc(()=>(J(nh),J(i()),q(()=>nh(i())?i().initialValue:void 0)));hh(e,{get value(){return K(_)},get initialValue(){return K(v)},label:`Edit value`,onChange:function(e,t){l()([{op:`replace`,path:fn(n()),value:h(s().unescapeValue(e))}],(e,r,i)=>{if(!i||D(n(),uh(i)))return{state:r,selection:t===cf.nextInside?m()(n()):Xm(n())}}),p()()},onCancel:g,onPaste:function(e){try{var t=o().parse(e);gd(t)&&u()({path:n(),contents:t,onPasteAsJson:()=>{g();var e=[{op:`replace`,path:fn(n()),value:t}];l()(e,(e,t)=>({state:xm(e,t,n())}))}})}catch{}},get onFind(){return f()},onValueClass:function(e){return ph(h(s().unescapeValue(e)),a(),o())}}),Ko()}function _h(e,t,n){var r=St(t),i=L(e,r);if(Ut(i)){var a=fd(T(t));return n.map((e,t)=>({op:`add`,path:fn(r.concat(String(a+t))),value:e.value}))}if(Wt(i)){var o=T(t),s=Object.keys(i),c=o===void 0?[]:_m(s,o,!0);return[...n.map(e=>{var t=Uf(e.key,s);return{op:`add`,path:fn(r.concat(t)),value:e.value}}),...c.map(e=>wh(r,e))]}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}function vh(e,t,n){var r=L(e,t);if(Array.isArray(r)){var i=r.length;return n.map((e,n)=>({op:`add`,path:fn(t.concat(String(i+n))),value:e.value}))}return n.map(e=>{var n=Uf(e.key,Object.keys(r));return{op:`add`,path:fn(t.concat(n)),value:e.value}})}function yh(e,t,n,r){var i=Uf(r,t.filter(e=>e!==n)),a=_m(t,n,!1);return[{op:`move`,from:fn(e.concat(n)),path:fn(e.concat(i))},...a.map(t=>wh(e,t))]}function bh(e,t){var n=T(t);if(Et(n))throw Error(`Cannot duplicate root object`);var r=St(n),i=T(n),a=L(e,r);if(Ut(a)){var o=T(t),s=o?fd(T(o))+1:0;return[...t.map((e,t)=>({op:`copy`,from:fn(e),path:fn(r.concat(String(t+s)))}))]}if(Wt(a)){var c=Object.keys(a),l=i===void 0?[]:_m(c,i,!1);return[...t.map(e=>{var t=Uf(T(e),c);return{op:`copy`,from:fn(e),path:fn(r.concat(t))}}),...l.map(e=>wh(r,e))]}throw Error(`Cannot create duplicate operations: parent must be an Object or Array`)}function xh(e,t){if(Am(t))return[{op:`move`,from:fn(t.path),path:``}];if(!jm(t))throw Error(`Cannot create extract operations: parent must be an Object or Array`);var n=L(e,St(t.focusPath));if(Ut(n))return[{op:`replace`,path:``,value:Fm(e,t).map(e=>n[fd(T(e))])}];if(Wt(n)){var r={};return Fm(e,t).forEach(e=>{var t=String(T(e));r[t]=n[t]}),[{op:`replace`,path:``,value:r}]}throw Error(`Cannot extract: unsupported type of selection `+JSON.stringify(t))}function Sh(e,t,n,r){if(km(t)){var i=Id(n,r),a=St(t.path),o=L(e,a);return yh(a,Object.keys(o),T(t.path),typeof i==`string`?i:n)}if(Am(t)||jm(t)&&Et(t.focusPath))try{return[{op:`replace`,path:fn(uh(t)),value:Ld(n,e=>Fd(e,r))}]}catch{return[{op:`replace`,path:fn(uh(t)),value:n}]}if(jm(t)){var s=Th(n,r);return function(e,t,n){var r=St(yt(t)),i=L(e,r);if(Ut(i)){var a=yt(t),o=a?fd(T(a)):0;return[...Ch(t),...n.map((e,t)=>({op:`add`,path:fn(r.concat(String(t+o))),value:e.value}))]}if(Wt(i)){var s=T(t),c=St(s),l=T(s),u=Object.keys(i),d=l===void 0?[]:_m(u,l,!1),f=new Set(t.map(e=>T(e))),p=u.filter(e=>!f.has(e));return[...Ch(t),...n.map(e=>{var t=Uf(e.key,p);return{op:`add`,path:fn(c.concat(t)),value:e.value}}),...d.map(e=>wh(c,e))]}throw Error(`Cannot create replace operations: parent must be an Object or Array`)}(e,Fm(e,t),s)}if(Dm(t)){var c=Th(n,r),l=t.path,u=St(l),d=L(e,u);if(Ut(d)){var f=fd(T(l));return _h(e,u.concat(String(f+1)),c)}if(Wt(d)){var p=String(T(l)),m=Object.keys(d);if(Et(m)||T(m)===p)return vh(e,u,c);var h=m[m.indexOf(p)+1];return _h(e,u.concat(h),c)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}if(Om(t)){var g=Th(n,r),_=t.path,v=L(e,_);if(Ut(v))return _h(e,_.concat(`0`),g);if(Wt(v)){var y=Object.keys(v);if(Et(y))return vh(e,_,g);var b=yt(y);return _h(e,_.concat(b),g)}throw Error(`Cannot create insert operations: parent must be an Object or Array`)}throw Error(`Cannot insert: unsupported type of selection `+JSON.stringify(t))}function Ch(e){return e.map(e=>({op:`remove`,path:fn(e)})).reverse()}function wh(e,t){return{op:`move`,from:fn(e.concat(t)),path:fn(e.concat(t))}}function Th(e,t){var n=/^\s*{/.test(e),r=/^\s*\[/.test(e),i=Id(e,t),a=i===void 0?Ld(e,e=>Fd(e,t)):i;return n&&hd(a)||r&&Array.isArray(a)?[{key:`New item`,value:a}]:Array.isArray(a)?a.map((e,t)=>({key:`New item `+t,value:e})):hd(a)?Object.keys(a).map(e=>({key:e,value:a[e]})):[{key:`New item`,value:a}]}function Eh(e,t){if(km(t)){var n=St(t.path),r=L(e,n),i=yh(n,Object.keys(r),T(t.path),``);return{operations:i,newSelection:Hm(e,i)}}if(Am(t))return{operations:[{op:`replace`,path:fn(t.path),value:``}],newSelection:t};if(jm(t)){var a=Fm(e,t),o=Ch(a),s=T(a);if(Et(s))return{operations:[{op:`replace`,path:``,value:``}],newSelection:Xm([])};var c=St(s),l=L(e,c);if(Ut(l)){var u=fd(T(yt(a)));return{operations:o,newSelection:u===0?Qm(c):$m(c.concat(String(u-1)))}}if(Wt(l)){var d=Object.keys(l),f=T(yt(a)),p=d.indexOf(f),m=d[p-1];return{operations:o,newSelection:p===0?Qm(c):$m(c.concat(m))}}throw Error(`Cannot create remove operations: parent must be an Object or Array`)}throw Error(`Cannot remove: unsupported type of selection `+JSON.stringify(t))}function Dh(e,t){return Dn(e,function(e,t){if(Et(t)||!t.every(Yt))return t;var n=[];for(var r of t){var i=Oh(dn(r.from)),a=Oh(dn(r.path));if(!i||!a)return t;n.push({from:i,path:a,operation:r})}var o=n[0].path.parent;if(!Wt(L(e,o))||!n.every(e=>function(e,t){return D(e.from.parent,t)&&D(e.path.parent,t)}(e,o)))return t;var s=function(e,t){var n=Object.keys(t),r=n.slice();for(var i of e){var a=r.indexOf(i.from.key);a!==-1&&(r.splice(a,1),r.push(i.path.key))}for(var o=0;o<n.length&&n[o]===r[o];)o++;return r[o]}(n,e),c=e=>e.operation,l=n.filter(e=>e.operation.from!==e.operation.path);return l.some(e=>e.path.key===s)?l.map(c):[wh(o,s),...l.map(c)]}(e,t),{before:(e,t,n)=>{if(Kt(t)){var r=dn(t.path);return{revertOperations:[...n,...kh(e,r)]}}if(Yt(t)){var i=dn(t.from);return{revertOperations:t.from===t.path?[t,...kh(e,i)]:[...n,...kh(e,i)]}}return{document:e}}})}function Oh(e){return e.length>0?{parent:St(e),key:T(e)}:void 0}function kh(e,t){var n=St(t),r=T(t),i=L(e,n);return Wt(i)?_m(Object.keys(i),r,!1).map(e=>wh(n,e)):[]}function Ah(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[t],r=e.items.map((e,n)=>R(R({},e),{},{active:n===t}));return R(R({},e),{},{items:r,activeItem:n,activeIndex:t})}function jh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.toLowerCase(),i=n?.maxResults??1/0,a=n?.columns,o=[],s=[];function c(e){o.length>=i||o.push(e)}function l(e,t){if(Ut(t)){var n=s.length;s.push(`0`);for(var r=0;r<t.length;r++)if(s[n]=String(r),l(e,t[r]),o.length>=i)return;s.pop()}else if(Wt(t)){var a=Object.keys(t),u=s.length;for(var d of(s.push(``),a))if(s[u]=d,Mh(d,e,s,of.key,c),l(e,t[d]),o.length>=i)return;s.pop()}else Mh(String(t),e,s,of.value,c)}if(e===``)return[];if(a){if(!Array.isArray(t))throw Error(`json must be an Array when option columns is defined`);for(var u=0;u<t.length;u++){s[0]=String(u);for(var d=t[u],f=0;f<a.length;f++){var p=a[f];if(p.length===1)s[1]=p[0];else for(var m=0;m<p.length;m++)s[m+1]=p[m];for(;s.length>p.length+1;)s.pop();l(r,L(d,p))}if(o.length>=i)break}return o}return l(r,t),o}function Mh(e,t,n,r,i){var a=e.toLowerCase(),o=0,s=-1,c=-1;do(c=a.indexOf(t,s))!==-1&&(s=c+t.length,i({path:n.slice(0),field:r,fieldIndex:o,start:c,end:s}),o++);while(c!==-1)}function Nh(e,t,n,r){return e.substring(0,n)+t+e.substring(r)}function Ph(e,t,n){var r=e;return vt(n,e=>{r=Nh(r,t,e.start,e.end)}),r}function Fh(e,t,n,r,i){var{field:a,path:o,start:s,end:c}=r;if(a===of.key){var l=St(o),u=L(e,l),d=T(o),f=yh(l,Object.keys(u),d,Nh(d,n,s,c));return{newSelection:Hm(e,f),operations:f}}if(a===of.value){var p=L(e,o);if(p===void 0)throw Error(`Cannot replace: path not found ${fn(o)}`);var m=typeof p==`string`?p:String(p),h=gm(e,t,o),g=Nh(m,n,s,c),_=[{op:`replace`,path:fn(o),value:h?g:Td(g,i)}];return{newSelection:Hm(e,_),operations:_}}throw Error(`Cannot replace: unknown type of search result field ${a}`)}function Ih(e){return e.path.concat(e.field,String(e.fieldIndex))}function Lh(e){var t=Gp(e)?e.searchResults.filter(e=>e.field===of.key):void 0;return t&&t.length>0?t:void 0}function Rh(e){var t=Gp(e)?e.searchResults.filter(e=>e.field===of.value):void 0;return t&&t.length>0?t:void 0}var zh={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function Bh(e,t){return t.reduce((t,n)=>function(e,t,n,r){return um(e,t,n,r,zh)}(e,t,n.path,(e,t)=>R(R({},t),{},{searchResults:t.searchResults?t.searchResults.concat(n):[n]})),void 0)}function Vh(e){var t=e?.searchResults??[],n=Vp(e)?Object.values(e.properties).flatMap(Vh):Hp(e)?e.items.flatMap(Vh):[];return t.concat(n)}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Hh=X(`<span> </span>`);function Uh(e,t){Go(t,!1);var n=B(),r=$(t,`text`,8),i=$(t,`searchResultItems`,8);W(()=>(J(r()),J(i())),()=>{V(n,function(e,t){var n=[],r=0;for(var i of t){var a=e.slice(r,i.start);a!==``&&n.push({resultIndex:void 0,type:`normal`,text:a,active:!1});var o=e.slice(i.start,i.end);n.push({resultIndex:i.resultIndex,type:`highlight`,text:o,active:i.active}),r=i.end}var s=T(t);return s&&s.end<e.length&&n.push({type:`normal`,text:e.slice(s.end),resultIndex:void 0,active:!1}),n}(String(r()),i()))}),Rc(),Qu();var a=Vl();pu(Dc(a),1,()=>K(n),du,(e,t)=>{var n=Vl(),r=Dc(n),i=e=>{var n=Bl();G(()=>Kl(n,(K(t),q(()=>K(t).text)))),Z(e,n)},a=e=>{var n,r=Hh(),i=H(r);G((e,a)=>{n=Du(r,1,`jse-highlight svelte-19qyvy6`,null,n,{"jse-active":K(t).active}),Ru(r,`data-search-result-index`,e),Kl(i,a)},[()=>(K(t),q(()=>String(K(t).resultIndex))),()=>(J(xf),K(t),q(()=>xf(K(t).text)))]),Z(e,r)};Q(r,e=>{K(t),q(()=>K(t).type===`normal`)?e(i):e(a,!1)}),Z(e,n)}),Z(e,a),Ko()}function Wh(e){var t=1e3;if(e<900)return e.toFixed()+` B`;var n=e/t;if(n<900)return n.toFixed(1)+` KB`;var r=n/t;if(r<900)return r.toFixed(1)+` MB`;var i=r/t;return i<900?i.toFixed(1)+` GB`:(i/t).toFixed(1)+` TB`}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Gh=X(`<button type="button"><!></button>`);function Kh(e,t){Go(t,!0);var n,r=nc(()=>t.onclick?e=>{e.preventDefault(),e.stopPropagation(),t.onclick()}:void 0),i=Gh();i.__click=function(){for(var e,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=K(r))==null||e.apply(this,n)},function(e,t){var n=[...arguments].slice(2),r=new iu(e);Bc(()=>{var e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},Eo)}(H(i),()=>t.children??lo),G(()=>n=Du(i,1,`jse-tag svelte-ubve9r`,null,n,{disabled:!t.onclick})),Z(e,i),Ko()}Fl([`click`]),Lf(`/* over all fonts, sizes, and colors */
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
}`);var qh=X(`<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>`);function Jh(e,t){Go(t,!0);var n=hc(!0),r=nc(()=>K(n)&&typeof t.value==`string`&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(e=>e.active&&e.end>t.truncateTextSize))),i=nc(()=>K(r)&&typeof t.value==`string`?t.value.substring(0,t.truncateTextSize).trim():t.value),a=nc(()=>wd(t.value));function o(){V(n,!1)}var s=qh();s.__click=function(e){typeof t.value==`string`&&K(a)&&Ff(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,`_blank`))},s.__dblclick=function(e){t.readOnly||(e.preventDefault(),t.onSelect(Zm(t.path)))};var c=H(s),l=e=>{var n=nc(()=>t.normalization.escapeValue(K(i)));Uh(e,{get text(){return K(n)},get searchResultItems(){return t.searchResultItems}})},u=e=>{var n=Bl();G(e=>Kl(n,e),[()=>xf(t.normalization.escapeValue(K(i)))]),Z(e,n)};Q(c,e=>{t.searchResultItems?e(l):e(u,!1)});var d=U(c,2),f=e=>{Kh(e,{onclick:o,children:(e,n)=>{var r=Bl();G(e=>Kl(r,`Show more (${e??``})`),[()=>Wh(t.value.length)]),Z(e,r)},$$slots:{default:!0}})};Q(d,e=>{K(r)&&typeof t.value==`string`&&e(f)}),G(e=>{Du(s,1,e,`svelte-1saqp8c`),Ru(s,`title`,K(a)?`Ctrl+Click or Ctrl+Enter to open url in new window`:void 0)},[()=>Cu(ph(t.value,t.mode,t.parser))]),Z(e,s),Ko()}Fl([`click`,`dblclick`]),Lf(`/* over all fonts, sizes, and colors */
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
}`);var Yh=X(`<div class="jse-tooltip svelte-brt1mq"> </div>`);function Xh(e,t){var n=$(t,`text`,8),r=Yh(),i=H(r);G(()=>Kl(i,n())),Z(e,r)}function Zh(e,t){var n,{text:r,openAbsolutePopup:i,closeAbsolutePopup:a}=t;function o(){n=i(Xh,{text:r},{position:`top`,width:10*r.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function s(){a(n)}return e.addEventListener(`mouseenter`,o),e.addEventListener(`mouseleave`,s),{destroy(){e.removeEventListener(`mouseenter`,o),e.removeEventListener(`mouseleave`,s)}}}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Qh=X(`<div class="jse-timestamp svelte-1jcpman"><!></div>`);function $h(e,t){Go(t,!1);var n=B(void 0,!0),r=Wo(`absolute-popup`),i=$(t,`value`,9);W(()=>J(i()),()=>{V(n,`Time: ${new Date(i()).toString()}`)}),Rc(),Qu(!0);var a=Qh();ep(H(a),{get data(){return ai}}),bu(a,(e,t)=>Zh?.(e,t),()=>R({text:K(n)},r)),Z(e,a),Ko()}function eg(e){var t=[];return!e.isEditing&&_d(e.value)&&t.push({component:np,props:e}),!e.isEditing&&xd(e.value)&&t.push({component:op,props:e}),e.isEditing&&t.push({component:gh,props:e}),e.isEditing||t.push({component:Jh,props:e}),!e.isEditing&&vd(e.value)&&t.push({component:$h,props:e}),t}function tg(e){return e.map((e,t)=>ig.test(e)?`[`+e+`]`:/[.[\]]/.test(e)||e===``?`["`+function(e){return e.replace(/"/g,`\\"`)}(e)+`"]`:(t>0?`.`:``)+e).join(``)}function ng(e){for(var t=[],n=0;n<e.length;)e[n]===`.`&&n++,e[n]===`[`?(n++,e[n]===`"`?(n++,t.push(r(e=>e===`"`,!0)),i(`"`)):t.push(r(e=>e===`]`)),i(`]`)):t.push(r(e=>e===`.`||e===`[`));function r(t){for(var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],i=``;n<e.length&&!t(e[n]);)r&&e[n]===`\\`&&e[n+1]===`"`?(i+=`"`,n+=2):(i+=e[n],n++);return i}function i(t){if(e[n]!==t)throw SyntaxError(`Invalid JSON path: ${t} expected at position ${n}`);n++}return t}function rg(e){return{value:e,label:Et(e)?`(item root)`:tg(e)}}var ig=/^\d+$/,ag={},og={showWizard:!0,showOriginal:!0},sg=Math.min,cg=Math.max,lg=Math.round,ug=Math.floor,dg=e=>({x:e,y:e}),fg={left:`right`,right:`left`,bottom:`top`,top:`bottom`},pg={start:`end`,end:`start`};function mg(e,t,n){return cg(e,sg(t,n))}function hg(e,t){return typeof e==`function`?e(t):e}function gg(e){return e.split(`-`)[0]}function _g(e){return e.split(`-`)[1]}function vg(e){return e===`x`?`y`:`x`}function yg(e){return e===`y`?`height`:`width`}var bg=new Set([`top`,`bottom`]);function xg(e){return bg.has(gg(e))?`y`:`x`}function Sg(e){return vg(xg(e))}function Cg(e){return e.replace(/start|end/g,e=>pg[e])}var wg=[`left`,`right`],Tg=[`right`,`left`],Eg=[`top`,`bottom`],Dg=[`bottom`,`top`];function Og(e,t,n,r){var i=_g(e),a=function(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Tg:wg:t?wg:Tg;case`left`:case`right`:return t?Eg:Dg;default:return[]}}(gg(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Cg)))),a}function kg(e){return e.replace(/left|right|bottom|top/g,e=>fg[e])}function Ag(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:function(e){return R({top:0,right:0,bottom:0,left:0},e)}(e)}function jg(e){var{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Mg(e,t,n){var r,{reference:i,floating:a}=e,o=xg(t),s=Sg(t),c=yg(s),l=gg(t),u=o===`y`,d=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2,p=i[c]/2-a[c]/2;switch(l){case`top`:r={x:d,y:i.y-a.height};break;case`bottom`:r={x:d,y:i.y+i.height};break;case`right`:r={x:i.x+i.width,y:f};break;case`left`:r={x:i.x-a.width,y:f};break;default:r={x:i.x,y:i.y}}switch(_g(t)){case`start`:r[s]-=p*(n&&u?-1:1);break;case`end`:r[s]+=p*(n&&u?-1:1)}return r}var Ng=function(){var e=Va(function*(e,t,n){for(var{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=yield o.isRTL==null?void 0:o.isRTL(t),l=yield o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Mg(l,r,c),f=r,p={},m=0,h=0;h<s.length;h++){var{name:g,fn:_}=s[h],{x:v,y,data:b,reset:x}=yield _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=v??u,d=y??d,p=R(R({},p),{},{[g]:R(R({},p[g]),b)}),x&&m<=50&&(m++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=!0===x.rects?yield o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Mg(l,f,c)),h=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}});return function(t,n,r){return e.apply(this,arguments)}}();function Pg(e,t){return Fg.apply(this,arguments)}function Fg(){return Fg=Va(function*(e,t){var n;t===void 0&&(t={});var{x:r,y:i,platform:a,rects:o,elements:s,strategy:c}=e,{boundary:l=`clippingAncestors`,rootBoundary:u=`viewport`,elementContext:d=`floating`,altBoundary:f=!1,padding:p=0}=hg(t,e),m=Ag(p),h=s[f?d===`floating`?`reference`:`floating`:d],g=jg(yield a.getClippingRect({element:(n=yield a.isElement==null?void 0:a.isElement(h))==null||n?h:h.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:l,rootBoundary:u,strategy:c})),_=d===`floating`?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=yield a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating),y=(yield a.isElement==null?void 0:a.isElement(v))&&(yield a.getScale==null?void 0:a.getScale(v))||{x:1,y:1},b=jg(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:_,offsetParent:v,strategy:c}):_);return{top:(g.top-b.top+m.top)/y.y,bottom:(b.bottom-g.bottom+m.bottom)/y.y,left:(g.left-b.left+m.left)/y.x,right:(b.right-g.right+m.right)/y.x}}),Fg.apply(this,arguments)}var Ig=new Set([`left`,`top`]);function Lg(){return Lg=Va(function*(e,t){var{placement:n,platform:r,elements:i}=e,a=yield r.isRTL==null?void 0:r.isRTL(i.floating),o=gg(n),s=_g(n),c=xg(n)===`y`,l=Ig.has(o)?-1:1,u=a&&c?-1:1,d=hg(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?-1*m:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}),Lg.apply(this,arguments)}function Rg(){return typeof window<`u`}function zg(e){return Hg(e)?(e.nodeName||``).toLowerCase():`#document`}function Bg(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Vg(e){return((Hg(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Hg(e){return!!Rg()&&(e instanceof Node||e instanceof Bg(e).Node)}function Ug(e){return!!Rg()&&(e instanceof Element||e instanceof Bg(e).Element)}function Wg(e){return!!Rg()&&(e instanceof HTMLElement||e instanceof Bg(e).HTMLElement)}function Gg(e){return!(!Rg()||typeof ShadowRoot>`u`)&&(e instanceof ShadowRoot||e instanceof Bg(e).ShadowRoot)}var Kg=new Set([`inline`,`contents`]);function qg(e){var{overflow:t,overflowX:n,overflowY:r,display:i}=a_(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Kg.has(i)}var Jg=new Set([`table`,`td`,`th`]);function Yg(e){return Jg.has(zg(e))}var Xg=[`:popover-open`,`:modal`];function Zg(e){return Xg.some(t=>{try{return e.matches(t)}catch{return!1}})}var Qg=[`transform`,`translate`,`scale`,`rotate`,`perspective`],$g=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],e_=[`paint`,`layout`,`strict`,`content`];function t_(e){var t=n_(),n=Ug(e)?a_(e):e;return Qg.some(e=>!!n[e]&&n[e]!==`none`)||!!n.containerType&&n.containerType!==`normal`||!t&&!!n.backdropFilter&&n.backdropFilter!==`none`||!t&&!!n.filter&&n.filter!==`none`||$g.some(e=>(n.willChange||``).includes(e))||e_.some(e=>(n.contain||``).includes(e))}function n_(){return!(typeof CSS>`u`||!CSS.supports)&&CSS.supports(`-webkit-backdrop-filter`,`none`)}var r_=new Set([`html`,`body`,`#document`]);function i_(e){return r_.has(zg(e))}function a_(e){return Bg(e).getComputedStyle(e)}function o_(e){return Ug(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function s_(e){if(zg(e)===`html`)return e;var t=e.assignedSlot||e.parentNode||Gg(e)&&e.host||Vg(e);return Gg(t)?t.host:t}function c_(e){var t=s_(e);return i_(t)?e.ownerDocument?e.ownerDocument.body:e.body:Wg(t)&&qg(t)?t:c_(t)}function l_(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);var r=c_(e),i=r===e.ownerDocument?.body,a=Bg(r);if(i){var o=u_(a);return t.concat(a,a.visualViewport||[],qg(r)?r:[],o&&n?l_(o):[])}return t.concat(r,l_(r,[],n))}function u_(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function d_(e){var t=a_(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Wg(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=lg(n)!==a||lg(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function f_(e){return Ug(e)?e:e.contextElement}function p_(e){var t=f_(e);if(!Wg(t))return dg(1);var n=t.getBoundingClientRect(),{width:r,height:i,$:a}=d_(t),o=(a?lg(n.width):n.width)/r,s=(a?lg(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var m_=dg(0);function h_(e){var t=Bg(e);return n_()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:m_}function g_(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),a=f_(e),o=dg(1);t&&(r?Ug(r)&&(o=p_(r)):o=p_(e));var s=function(e,t,n){return t===void 0&&(t=!1),!(!n||t&&n!==Bg(e))&&t}(a,n,r)?h_(a):dg(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a)for(var f=Bg(a),p=r&&Ug(r)?Bg(r):r,m=f,h=u_(m);h&&r&&p!==m;){var g=p_(h),_=h.getBoundingClientRect(),v=a_(h),y=_.left+(h.clientLeft+parseFloat(v.paddingLeft))*g.x,b=_.top+(h.clientTop+parseFloat(v.paddingTop))*g.y;c*=g.x,l*=g.y,u*=g.x,d*=g.y,c+=y,l+=b,h=u_(m=Bg(h))}return jg({width:u,height:d,x:c,y:l})}function __(e,t){var n=o_(e).scrollLeft;return t?t.left+n:g_(Vg(e)).left+n}function v_(e,t){var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-__(e,n),y:n.top+t.scrollTop}}var y_=new Set([`absolute`,`fixed`]);function b_(e,t,n){var r;if(t===`viewport`)r=function(e,t){var n=Bg(e),r=Vg(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=n_();(!l||l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}var u=__(r);if(u<=0){var d=r.ownerDocument,f=d.body,p=getComputedStyle(f),m=d.compatMode===`CSS1Compat`&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,h=Math.abs(r.clientWidth-f.clientWidth-m);h<=25&&(a-=h)}else u<=25&&(a+=u);return{width:a,height:o,x:s,y:c}}(e,n);else if(t===`document`)r=function(e){var t=Vg(e),n=o_(e),r=e.ownerDocument.body,i=cg(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=cg(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+__(e),s=-n.scrollTop;return a_(r).direction===`rtl`&&(o+=cg(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}(Vg(e));else if(Ug(t))r=function(e,t){var n=g_(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Wg(e)?p_(e):dg(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}(t,n);else{var i=h_(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return jg(r)}function x_(e,t){var n=s_(e);return!(n===t||!Ug(n)||i_(n))&&(a_(n).position===`fixed`||x_(n,t))}function S_(e,t,n){var r=Wg(t),i=Vg(t),a=n===`fixed`,o=g_(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=dg(0);function l(){c.x=__(i)}if(r||!r&&!a)if((zg(t)!==`body`||qg(i))&&(s=o_(t)),r){var u=g_(t,!0,a,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else i&&l();a&&!r&&i&&l();var d=!i||r||a?dg(0):v_(i,s);return{x:o.left+s.scrollLeft-c.x-d.x,y:o.top+s.scrollTop-c.y-d.y,width:o.width,height:o.height}}function C_(e){return a_(e).position===`static`}function w_(e,t){if(!Wg(e)||a_(e).position===`fixed`)return null;if(t)return t(e);var n=e.offsetParent;return Vg(e)===n&&(n=n.ownerDocument.body),n}function T_(e,t){var n=Bg(e);if(Zg(e))return n;if(!Wg(e)){for(var r=s_(e);r&&!i_(r);){if(Ug(r)&&!C_(r))return r;r=s_(r)}return n}for(var i=w_(e,t);i&&Yg(i)&&C_(i);)i=w_(i,t);return i&&i_(i)&&C_(i)&&!t_(i)?n:i||function(e){for(var t=s_(e);Wg(t)&&!i_(t);){if(t_(t))return t;if(Zg(t))return null;t=s_(t)}return null}(e)||n}var E_={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Vg(r),s=!!t&&Zg(t.floating);if(r===o||s&&a)return n;var c={scrollLeft:0,scrollTop:0},l=dg(1),u=dg(0),d=Wg(r);if((d||!d&&!a)&&((zg(r)!==`body`||qg(o))&&(c=o_(r)),Wg(r))){var f=g_(r);l=p_(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}var p=!o||d||a?dg(0):v_(o,c);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+p.x,y:n.y*l.y-c.scrollTop*l.y+u.y+p.y}},getDocumentElement:Vg,getClippingRect:function(e){var{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Zg(t)?[]:function(e,t){var n=t.get(e);if(n)return n;for(var r=l_(e,[],!1).filter(e=>Ug(e)&&zg(e)!==`body`),i=null,a=a_(e).position===`fixed`,o=a?s_(e):e;Ug(o)&&!i_(o);){var s=a_(o),c=t_(o);c||s.position!==`fixed`||(i=null),(a?!c&&!i:!c&&s.position===`static`&&i&&y_.has(i.position)||qg(o)&&!c&&x_(e,o))?r=r.filter(e=>e!==o):i=s,o=s_(o)}return t.set(e,r),r}(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{var r=b_(t,n,i);return e.top=cg(r.top,e.top),e.right=sg(r.right,e.right),e.bottom=sg(r.bottom,e.bottom),e.left=cg(r.left,e.left),e},b_(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:T_,getElementRects:function(){var e=Va(function*(e){var t=this.getOffsetParent||T_,n=this.getDimensions,r=yield n(e.floating);return{reference:S_(e.reference,yield t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:n}=d_(e);return{width:t,height:n}},getScale:p_,isElement:Ug,isRTL:function(e){return a_(e).direction===`rtl`}};function D_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function O_(e,t,n,r){r===void 0&&(r={});var{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=f_(e),u=i||a?[...l?l_(l):[],...l_(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});var d,f=l&&s?function(e,t){var n,r=null,i=Vg(e);function a(){var e;clearTimeout(n),(e=r)==null||e.disconnect(),r=null}return function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();var l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),f&&p){var m={rootMargin:-ug(d)+`px `+-ug(i.clientWidth-(u+f))+`px `+-ug(i.clientHeight-(d+p))+`px `+-ug(u)+`px`,threshold:cg(0,sg(1,c))||1},h=!0;try{r=new IntersectionObserver(g,R(R({},m),{},{root:i.ownerDocument}))}catch{r=new IntersectionObserver(g,m)}r.observe(e)}function g(t){var r=t[0].intersectionRatio;if(r!==c){if(!h)return o();r?o(!1,r):n=setTimeout(()=>{o(!1,1e-7)},1e3)}r!==1||D_(l,e.getBoundingClientRect())||o(),h=!1}}(!0),a}(l,n):null,p=-1,m=null;o&&(m=new ResizeObserver(e=>{var[r]=e;r&&r.target===l&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;(e=m)==null||e.observe(t)})),n()}),l&&!c&&m.observe(l),m.observe(t));var h=c?g_(e):null;return c&&function t(){var r=g_(e);h&&!D_(h,r)&&n(),h=r,d=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),f?.(),(e=m)==null||e.disconnect(),m=null,c&&cancelAnimationFrame(d)}}var k_=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,fn:t=>Va(function*(){var n,{x:r,y:i,placement:a,middlewareData:o}=t,s=yield function(e,t){return Lg.apply(this,arguments)}(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:R(R({},s),{},{placement:a})}})()}},A_=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,fn:t=>Va(function*(){var{x:n,y:r,placement:i}=t,a=hg(e,t),{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{var{x:t,y:n}=e;return{x:t,y:n}}}}=a,l=Ra(a,La),u={x:n,y:r},d=yield Pg(t,l),f=xg(gg(i)),p=vg(f),m=u[p],h=u[f];if(o){var g=p===`y`?`bottom`:`right`;m=mg(m+d[p===`y`?`top`:`left`],m,m-d[g])}if(s){var _=f===`y`?`bottom`:`right`;h=mg(h+d[f===`y`?`top`:`left`],h,h-d[_])}var v=c.fn(R(R({},t),{},{[p]:m,[f]:h}));return R(R({},v),{},{data:{x:v.x-n,y:v.y-r,enabled:{[p]:o,[f]:s}}})})()}},j_=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,fn:t=>Va(function*(){var n,{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,l=hg(e,t),{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p=`bestFit`,fallbackAxisSideDirection:m=`none`,flipAlignment:h=!0}=l,g=Ra(l,Ia);if((n=i.arrow)!=null&&n.alignmentOffset)return{};var _=gg(r),v=xg(o),y=gg(o)===o,b=yield s.isRTL==null?void 0:s.isRTL(c.floating),x=f||(y||!h?[kg(o)]:function(e){var t=kg(e);return[Cg(e),t,Cg(t)]}(o)),S=m!==`none`;!f&&S&&x.push(...Og(o,h,m,b));var C=[o,...x],w=yield Pg(t,g),T=[],E=i.flip?.overflows||[];if(u&&T.push(w[_]),d){var D=function(e,t,n){n===void 0&&(n=!1);var r=_g(e),i=Sg(e),a=yg(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=kg(o)),[o,kg(o)]}(r,a,b);T.push(w[D[0]],w[D[1]])}if(E=[...E,{placement:r,overflows:T}],!T.every(e=>e<=0)){var ee=(i.flip?.index||0)+1,te=C[ee];if(te&&(!(d===`alignment`&&v!==xg(te))||E.every(e=>xg(e.placement)!==v||e.overflows[0]>0)))return{data:{index:ee,overflows:E},reset:{placement:te}};var ne=E.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!ne)switch(p){case`bestFit`:var re=E.filter(e=>{if(S){var t=xg(e.placement);return t===v||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];re&&(ne=re);break;case`initialPlacement`:ne=o}if(r!==ne)return{reset:{placement:ne}}}return{}})()}};function M_(e){var t,n,r={autoUpdate:!0},i=e,a=t=>R(R(R({},r),e||{}),t||{}),o=e=>{t&&n&&(i=a(e),((e,t,n)=>{var r=new Map,i=R({platform:E_},n),a=R(R({},i.platform),{},{_c:r});return Ng(e,t,R(R({},i),{},{platform:a}))})(t,n,i).then(e=>{var t;Object.assign(n.style,{position:e.strategy,left:`${e.x}px`,top:`${e.y}px`}),(t=i)!=null&&t.onComputed&&i.onComputed(e)}))},s=e=>{ou(e.subscribe(e=>{t===void 0?(t=e,o()):(Object.assign(t,e),o())}))};return[e=>{if(`subscribe`in e)return s(e),{};t=e,o()},(e,r)=>{var s;n=e,i=a(r),setTimeout(()=>o(r),0),o(r);var c=()=>{s&&=(s(),void 0)},l=function(){var{autoUpdate:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i||{};c(),!1!==e&&Tl().then(()=>O_(t,n,()=>o(i),!0===e?{}:e))};return s=l(),{update(e){o(e),s=l(e)},destroy(){c()}}},o]}function N_(e){var{loadOptions:t,filterText:n,items:r,multiple:i,value:a,itemId:o,groupBy:s,filterSelectedItems:c,itemFilter:l,convertStringItemsToObjects:u,filterGroupedItems:d,label:f}=e;if(r&&t)return r;if(!r)return[];r&&r.length>0&&typeof r[0]!=`object`&&(r=u(r));var p=r.filter(e=>{var t=l(e[f],n,e);return t&&i&&a!=null&&a.length&&(t=!a.some(t=>!!c&&t[o]===e[o])),t});return s&&(p=d(p)),p}function P_(e){return F_.apply(this,arguments)}function F_(){return(F_=Va(function*(e){var{dispatch:t,loadOptions:n,convertStringItemsToObjects:r,filterText:i}=e,a=yield n(i).catch(e=>{console.warn(`svelte-select loadOptions error :>> `,e),t(`error`,{type:`loadOptions`,details:e})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!=`object`&&(a=r(a)),t(`loaded`,{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}Lf(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var I_=zl(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);Lf(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var L_=zl(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function R_(e){Z(e,L_())}Lf(`
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
`);var z_=zl(`<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`);Lf(`
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
`);var B_=X(`<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>`),V_=X(`<div class="empty svelte-1ul7oo4">No options</div>`),H_=X(`<div role="none"><!> <!> <!></div>`),U_=X(`<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>`,1),W_=X(`<div class="multi-item-clear svelte-1ul7oo4"><!></div>`),G_=X(`<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>`),K_=X(`<div><!></div>`),q_=X(`<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>`),J_=X(`<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>`),Y_=X(`<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>`),X_=X(`<input type="hidden" class="svelte-1ul7oo4"/>`),Z_=X(`<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>`),Q_=X(`<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>`);function $_(e,t){var n=function(e){var t={};for(var n in e.children&&(t.default=!0),e.$$slots)t[n]=!0;return t}(t);Go(t,!1);var r,i=B(),a=B(),o=B(),s=B(),c=B(),l=B(),u=B(),d=B(),f=B(),p=su(),m=$(t,`justValue`,12,null),h=$(t,`filter`,8,N_),g=$(t,`getItems`,8,P_),_=$(t,`id`,8,null),v=$(t,`name`,8,null),y=$(t,`container`,12,void 0),b=$(t,`input`,12,void 0),x=$(t,`multiple`,8,!1),S=$(t,`multiFullItemClearable`,8,!1),C=$(t,`disabled`,8,!1),w=$(t,`focused`,12,!1),T=$(t,`value`,12,null),E=$(t,`filterText`,12,``),D=$(t,`placeholder`,8,`Please select`),ee=$(t,`placeholderAlwaysShow`,8,!1),te=$(t,`items`,12,null),ne=$(t,`label`,8,`label`),re=$(t,`itemFilter`,8,(e,t,n)=>`${e}`.toLowerCase().includes(t.toLowerCase())),ie=$(t,`groupBy`,8,void 0),O=$(t,`groupFilter`,8,e=>e),ae=$(t,`groupHeaderSelectable`,8,!1),k=$(t,`itemId`,8,`value`),A=$(t,`loadOptions`,8,void 0),oe=$(t,`containerStyles`,8,``),se=$(t,`hasError`,8,!1),ce=$(t,`filterSelectedItems`,8,!0),le=$(t,`required`,8,!1),ue=$(t,`closeListOnChange`,8,!0),de=$(t,`clearFilterTextOnBlur`,8,!0),fe=$(t,`createGroupHeaderItem`,8,(e,t)=>({value:e,[ne()]:e})),pe=()=>K(u),me=$(t,`searchable`,8,!0),he=$(t,`inputStyles`,8,``),j=$(t,`clearable`,8,!0),ge=$(t,`loading`,12,!1),M=$(t,`listOpen`,12,!1),N=$(t,`debounce`,8,function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(r),r=setTimeout(e,t)}),_e=$(t,`debounceWait`,8,300),ve=$(t,`hideEmptyState`,8,!1),ye=$(t,`inputAttributes`,24,()=>({})),P=$(t,`listAutoWidth`,8,!0),F=$(t,`showChevron`,8,!1),be=$(t,`listOffset`,8,5),xe=$(t,`hoverItemIndex`,12,0),Se=$(t,`floatingConfig`,24,()=>({})),Ce=$(t,`class`,8,``),we=B(),Te=B(),Ee=B(),De=B(),Oe=B();function ke(e){return e.map((e,t)=>({index:t,value:e,label:`${e}`}))}function Ae(e){var t=[],n={};e.forEach(e=>{var r=ie()(e);t.includes(r)||(t.push(r),n[r]=[],r&&n[r].push(Object.assign(fe()(r,e),{id:r,groupHeader:!0,selectable:ae()}))),n[r].push(Object.assign({groupItem:!!r},e))});var r=[];return O()(t).forEach(e=>{n[e]&&r.push(...n[e])}),r}function je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;xe(e<0?0:e),!t&&ie()&&K(u)[xe()]&&!K(u)[xe()].selectable&&Ze(1)}function Me(){var e=!0;if(T()){var t=[],n=[];T().forEach(r=>{t.includes(r[k()])?e=!1:(t.push(r[k()]),n.push(r))}),e||T(n)}return e}function Ne(e){var t=e?e[k()]:T()[k()];return te().find(e=>e[k()]===t)}function Pe(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Va(function*(e){var t=T()[e];T().length===1?T(void 0):T(T().filter(e=>e!==t)),p(`clear`,t)})).apply(this,arguments)}function I(e){if(w())switch(e.stopPropagation(),e.key){case`Escape`:e.preventDefault(),Ve();break;case`Enter`:if(e.preventDefault(),M()){if(K(u).length===0)break;var t=K(u)[xe()];if(T()&&!x()&&T()[k()]===t[k()]){Ve();break}Ye(K(u)[xe()])}break;case`ArrowDown`:e.preventDefault(),M()?Ze(1):(M(!0),V(we,void 0));break;case`ArrowUp`:e.preventDefault(),M()?Ze(-1):(M(!0),V(we,void 0));break;case`Tab`:if(M()&&w()){if(K(u).length===0||T()&&T()[k()]===K(u)[xe()][k()])return Ve();e.preventDefault(),Ye(K(u)[xe()]),Ve()}break;case`Backspace`:if(!x()||E().length>0)return;if(x()&&T()&&T().length>0){if(Pe(K(we)===void 0?T().length-1:K(we)),K(we)===0||K(we)===void 0)break;V(we,T().length>K(we)?K(we)-1:void 0)}break;case`ArrowLeft`:if(!T()||!x()||E().length>0)return;K(we)===void 0?V(we,T().length-1):T().length>K(we)&&K(we)!==0&&V(we,K(we)-1);break;case`ArrowRight`:if(!T()||!x()||E().length>0||K(we)===void 0)return;K(we)===T().length-1?V(we,void 0):K(we)<T().length-1&&V(we,K(we)+1)}}function Ie(e){var t;w()&&b()===document?.activeElement||(e&&p(`focus`,e),(t=b())==null||t.focus(),w(!0))}function Le(e){return Re.apply(this,arguments)}function Re(){return(Re=Va(function*(e){var t;Je||(M()||w())&&(p(`blur`,e),Ve(),w(!1),V(we,void 0),(t=b())==null||t.blur())})).apply(this,arguments)}function ze(){if(!C())return E().length>0?M(!0):void M(!M())}function Be(){p(`clear`,T()),T(void 0),Ve(),Ie()}function Ve(){de()&&E(``),M(!1)}cu(Va(function*(){V(Te,T()),V(Ee,E()),V(De,x())})),au(()=>{M()&&w(!0),w()&&b()&&b().focus()});var He=$(t,`ariaValues`,8,e=>`Option ${e}, selected.`),Ue=$(t,`ariaListOpen`,8,(e,t)=>`You are currently focused on option ${e}. There are ${t} results available.`),We=$(t,`ariaFocused`,8,()=>`Select is focused, type to refine list, press down to open the menu.`),Ge,Ke=B(null);function qe(){clearTimeout(Ge),Ge=setTimeout(()=>{Je=!1},100)}ou(()=>{var e;(e=K(Ke))==null||e.remove()});var Je=!1;function Ye(e){e&&!1!==e.selectable&&function(e){if(e){E(``);var t=Object.assign({},e);if(t.groupHeader&&!t.selectable)return;T(x()?T()?T().concat([t]):[t]:T(t)),setTimeout(()=>{ue()&&Ve(),V(we,void 0),p(`change`,T()),p(`select`,e)})}}(e)}function Xe(e){Je||xe(e)}function Ze(e){if(K(u).filter(e=>!Object.hasOwn(e,`selectable`)||!0===e.selectable).length===0)return xe(0);e>0&&xe()===K(u).length-1?xe(0):e<0&&xe()===0?xe(K(u).length-1):xe(xe()+e);var t=K(u)[xe()];t&&!1===t.selectable&&(e!==1&&e!==-1||Ze(e))}function Qe(e,t,n){if(!x())return t&&t[n]===e[n]}var $e=tt,et=tt;function tt(e){return{update(t){t.scroll&&(qe(),e.scrollIntoView({behavior:`auto`,block:`nearest`}))}}}var nt=B({strategy:`absolute`,placement:`bottom-start`,middleware:[k_(be()),j_(),A_()],autoUpdate:!1}),[rt,it,at]=M_(K(nt)),ot=B(!0);W(()=>(J(te()),J(T())),()=>{te(),T()&&function(){typeof T()==`string`?T((te()||[]).find(e=>e[k()]===T())||{[k()]:T(),label:T()}):x()&&Array.isArray(T())&&T().length>0&&T(T().map(e=>typeof e==`string`?{value:e,label:e}:e))}()}),W(()=>(J(ye()),J(me())),()=>{!ye()&&me()||(V(Oe,Object.assign({autocapitalize:`none`,autocomplete:`off`,autocorrect:`off`,spellcheck:!1,tabindex:0,type:`text`,"aria-autocomplete":`list`},ye())),_()&&gc(Oe,K(Oe).id=_()),me()||gc(Oe,K(Oe).readonly=!0))}),W(()=>J(x()),()=>{x()&&T()&&(Array.isArray(T())?T([...T()]):T([T()]))}),W(()=>(K(De),J(x())),()=>{K(De)&&!x()&&T()&&T(null)}),W(()=>(J(x()),J(T())),()=>{x()&&T()&&T().length>1&&Me()}),W(()=>J(T()),()=>{T()&&(x()?JSON.stringify(T())!==JSON.stringify(K(Te))&&Me()&&p(`input`,T()):K(Te)&&JSON.stringify(T()[k()])===JSON.stringify(K(Te)[k()])||p(`input`,T()))}),W(()=>(J(T()),J(x()),K(Te)),()=>{!T()&&x()&&K(Te)&&p(`input`,T())}),W(()=>(J(w()),J(b())),()=>{!w()&&b()&&Ve()}),W(()=>(J(E()),K(Ee)),()=>{E()!==K(Ee)&&(A()||E().length!==0)&&(A()?N()(Va(function*(){ge(!0);var e=yield g()({dispatch:p,loadOptions:A(),convertStringItemsToObjects:ke,filterText:E()});e?(ge(e.loading),M(M()?e.listOpen:E().length>0),w(M()&&e.focused),te(ie()?Ae(e.filteredItems):e.filteredItems)):(ge(!1),w(!0),M(!0))}),_e()):(M(!0),x()&&V(we,void 0)))}),W(()=>(J(h()),J(A()),J(E()),J(te()),J(x()),J(T()),J(k()),J(ie()),J(ne()),J(ce()),J(re())),()=>{V(u,h()({loadOptions:A(),filterText:E(),items:te(),multiple:x(),value:T(),itemId:k(),groupBy:ie(),label:ne(),filterSelectedItems:ce(),itemFilter:re(),convertStringItemsToObjects:ke,filterGroupedItems:Ae}))}),W(()=>(J(x()),J(M()),J(T()),K(u)),()=>{!x()&&M()&&T()&&K(u)&&je(K(u).findIndex(e=>e[k()]===T()[k()]),!0)}),W(()=>(J(M()),J(x())),()=>{M()&&x()&&xe(0)}),W(()=>J(E()),()=>{E()&&xe(0)}),W(()=>J(xe()),()=>{p(`hoverItem`,xe())}),W(()=>(J(x()),J(T())),()=>{V(i,x()?T()&&T().length>0:T())}),W(()=>(K(i),J(E())),()=>{V(a,K(i)&&E().length>0)}),W(()=>(K(i),J(j()),J(C()),J(ge())),()=>{V(o,K(i)&&j()&&!C()&&!ge())}),W(()=>(J(ee()),J(x()),J(D()),J(T())),()=>{V(s,ee()&&x()||x()&&T()?.length===0?D():T()?``:D())}),W(()=>(J(T()),J(x())),()=>{var e,t;V(c,T()?(e=x(),t=void 0,t=e&&T().length>0?T().map(e=>e[ne()]).join(`, `):T()[ne()],He()(t)):``)}),W(()=>(K(u),J(xe()),J(w()),J(M())),()=>{V(l,function(){if(!K(u)||K(u).length===0)return``;var e=K(u)[xe()];if(M()&&e){var t=K(u)?K(u).length:0;return Ue()(e[ne()],t)}return We()()}((K(u),xe(),w(),M())))}),W(()=>J(te()),()=>{(function(e){e&&e.length!==0&&!e.some(e=>typeof e!=`object`)&&T()&&(x()?!T().some(e=>!e||!e[k()]):T()[k()])&&(Array.isArray(T())?T(T().map(e=>Ne(e)||e)):T(Ne()||T()))})(te())}),W(()=>(J(x()),J(T()),J(k())),()=>{m((x(),T(),k(),x()?T()?T().map(e=>e[k()]):null:T()?T()[k()]:T()))}),W(()=>(J(x()),K(Te),J(T())),()=>{x()||!K(Te)||T()||p(`input`,T())}),W(()=>(J(M()),K(u),J(x()),J(T())),()=>{M()&&K(u)&&!x()&&!T()&&je()}),W(()=>K(u),()=>{(function(e){M()&&p(`filter`,e)})(K(u))}),W(()=>(J(y()),J(Se()),K(nt)),()=>{y()&&Se()&&at(Object.assign(K(nt),Se()))}),W(()=>K(Ke),()=>{V(d,!!K(Ke))}),W(()=>(K(Ke),J(M())),()=>{(function(e,t){if(!e||!t)return V(ot,!0);setTimeout(()=>{V(ot,!1)},0)})(K(Ke),M())}),W(()=>(J(M()),J(y()),K(Ke)),()=>{M()&&y()&&K(Ke)&&function(){var{width:e}=y().getBoundingClientRect();gc(Ke,K(Ke).style.width=P()?e+`px`:`auto`)}()}),W(()=>J(xe()),()=>{V(f,xe())}),W(()=>(J(b()),J(M()),J(w())),()=>{b()&&M()&&!w()&&Ie()}),W(()=>(J(y()),J(Se())),()=>{y()&&Se()?.autoUpdate===void 0&&gc(nt,K(nt).autoUpdate=!0)}),Rc();var st={getFilteredItems:pe,handleClear:Be};Qu();var ct,lt=Q_();Y(`click`,sc,function(e){var t;M()||w()||!y()||y().contains(e.target)||(t=K(Ke))!=null&&t.contains(e.target)||Le()}),Y(`keydown`,sc,I);var ut=H(lt),dt=e=>{var r,i=H_(),a=H(i),o=e=>{var n=Vl();vu(Dc(n),t,`list-prepend`,{},null),Z(e,n)};Q(a,e=>{q(()=>n[`list-prepend`])&&e(o)});var s=U(a,2),c=e=>{var n=Vl();vu(Dc(n),t,`list`,{get filteredItems(){return K(u)}},null),Z(e,n)},l=e=>{var n=Vl(),r=Dc(n),i=e=>{var n=Vl();pu(Dc(n),1,()=>K(u),du,(e,n,r)=>{var i,a=B_(),o=H(a);vu(H(o),t,`item`,{get item(){return K(n)},index:r},e=>{var t=Bl();G(()=>Kl(t,(K(n),J(ne()),q(()=>K(n)?.[ne()])))),Z(e,t)}),bu(o,(e,t)=>$e?.(e),()=>({scroll:Qe(K(n),T(),k()),listDom:K(d)})),bu(o,(e,t)=>et?.(e),()=>({scroll:K(f)===r,listDom:K(d)})),G(e=>i=Du(o,1,`item svelte-1ul7oo4`,null,i,e),[()=>{var e;return{"list-group-title":K(n).groupHeader,active:Qe(K(n),T(),k()),first:(e=r,e===0),hover:xe()===r,"group-item":K(n).groupItem,"not-selectable":!1===K(n)?.selectable}}]),Y(`mouseover`,a,()=>Xe(r)),Y(`focus`,a,()=>Xe(r)),Y(`click`,a,Xu(()=>function(e){var{item:t,i:n}=e;if(!1!==t?.selectable)return T()&&!x()&&T()[k()]===t[k()]?Ve():void(function(e){return e.groupHeader&&e.selectable||e.selectable||!e.hasOwnProperty(`selectable`)}(t)&&(xe(n),Ye(t)))}({item:K(n),i:r}))),Y(`keydown`,a,Zu(Xu(function(e){td.call(this,t,e)}))),Z(e,a)}),Z(e,n)},a=e=>{var n=Vl(),r=Dc(n),i=e=>{var n=Vl();vu(Dc(n),t,`empty`,{},e=>{Z(e,V_())}),Z(e,n)};Q(r,e=>{ve()||e(i)},!0),Z(e,n)};Q(r,e=>{K(u),q(()=>K(u).length>0)?e(i):e(a,!1)},!0),Z(e,n)};Q(s,e=>{q(()=>n.list)?e(c):e(l,!1)});var p=U(s,2),m=e=>{var n=Vl();vu(Dc(n),t,`list-append`,{},null),Z(e,n)};Q(p,e=>{q(()=>n[`list-append`])&&e(m)}),bu(i,e=>it?.(e)),Yu(i,e=>V(Ke,e),()=>K(Ke)),Lc(()=>Y(`scroll`,i,qe)),Lc(()=>Y(`pointerup`,i,Zu(Xu(function(e){td.call(this,t,e)})))),Lc(()=>Y(`mousedown`,i,Zu(Xu(function(e){td.call(this,t,e)})))),G(()=>r=Du(i,1,`svelte-select-list svelte-1ul7oo4`,null,r,{prefloat:K(ot)})),Z(e,i)};Q(ut,e=>{M()&&e(dt)});var ft=U(ut,2),pt=H(ft),mt=e=>{var t=U_(),n=Dc(t),r=H(n),i=H(U(n,2));G(()=>{Kl(r,K(c)),Kl(i,K(l))}),Z(e,t)};Q(pt,e=>{w()&&e(mt)});var ht=U(ft,2);vu(H(ht),t,`prepend`,{},null);var gt=U(ht,2),_t=H(gt),vt=e=>{var n=Vl(),r=Dc(n),i=e=>{var n=Vl();pu(Dc(n),1,T,du,(e,n,r)=>{var i,a=G_(),o=H(a);vu(H(o),t,`selection`,{get selection(){return K(n)},index:r},e=>{var t=Bl();G(()=>Kl(t,(K(n),J(ne()),q(()=>K(n)[ne()])))),Z(e,t)});var s=U(o,2),c=e=>{var n=W_();vu(H(n),t,`multi-clear-icon`,{},e=>{R_(e)}),Y(`pointerup`,n,Zu(Xu(()=>Pe(r)))),Z(e,n)};Q(s,e=>{C()||S()||!R_||e(c)}),G(()=>i=Du(a,1,`multi-item svelte-1ul7oo4`,null,i,{active:K(we)===r,disabled:C()})),Y(`click`,a,Zu(()=>S()?Pe(r):{})),Y(`keydown`,a,Zu(Xu(function(e){td.call(this,t,e)}))),Z(e,a)}),Z(e,n)},o=e=>{var n,r=K_();vu(H(r),t,`selection`,{get selection(){return T()}},e=>{var t=Bl();G(()=>Kl(t,(J(T()),J(ne()),q(()=>T()[ne()])))),Z(e,t)}),G(()=>n=Du(r,1,`selected-item svelte-1ul7oo4`,null,n,{"hide-selected-item":K(a)})),Z(e,r)};Q(r,e=>{x()?e(i):e(o,!1)}),Z(e,n)};Q(_t,e=>{K(i)&&e(vt)});var yt=U(_t,2);Bu(yt,()=>R(R({readOnly:!me()},K(Oe)),{},{placeholder:K(s),style:he(),disabled:C()}),void 0,void 0,void 0,`svelte-1ul7oo4`,!0),Yu(yt,e=>b(e),()=>b());var bt=U(gt,2),xt=H(bt),St=e=>{var n=q_();vu(H(n),t,`loading-icon`,{},e=>{(function(e){Z(e,z_())})(e)}),Z(e,n)};Q(xt,e=>{ge()&&e(St)});var Ct=U(xt,2),wt=e=>{var n=J_();vu(H(n),t,`clear-icon`,{},e=>{R_(e)}),Y(`click`,n,Be),Z(e,n)};Q(Ct,e=>{K(o)&&e(wt)});var Tt=U(Ct,2),Et=e=>{var n=Y_();vu(H(n),t,`chevron-icon`,{get listOpen(){return M()}},e=>{(function(e){Z(e,I_())})(e)}),Z(e,n)};Q(Tt,e=>{F()&&e(Et)});var Dt=U(bt,2);vu(Dt,t,`input-hidden`,{get value(){return T()}},e=>{var t=X_();G(e=>{Ru(t,`name`,v()),Lu(t,e)},[()=>(J(T()),q(()=>T()?JSON.stringify(T()):null))]),Z(e,t)});var Ot=U(Dt,2),kt=e=>{var n=Vl();vu(Dc(n),t,`required`,{get value(){return T()}},e=>{Z(e,Z_())}),Z(e,n)};return Q(Ot,e=>{J(le()),J(T()),q(()=>le()&&(!T()||T().length===0))&&e(kt)}),Lc(()=>Y(`pointerup`,lt,Zu(ze))),Yu(lt,e=>y(e),()=>y()),bu(lt,e=>rt?.(e)),G(()=>{ct=Du(lt,1,`svelte-select ${Ce()??``}`,`svelte-1ul7oo4`,ct,{multi:x(),disabled:C(),focused:w(),"list-open":M(),"show-chevron":F(),error:se()}),ku(lt,oe())}),Y(`keydown`,yt,I),Y(`blur`,yt,Le),Y(`focus`,yt,Ie),Wu(yt,E),Z(e,lt),qu(t,`getFilteredItems`,pe),qu(t,`handleClear`,Be),Ko(st)}Lf(`/* over all fonts, sizes, and colors */
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
}`);var ev=X(`<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>`);function tv(e,t){var n,r,i;Go(t,!1);var a=B(void 0,!0),o=B(void 0,!0),s=B(void 0,!0),c=B(void 0,!0),l=B(void 0,!0),u=B(void 0,!0),d=sd(`jsoneditor:TransformWizard`),f=$(t,`json`,9),p=$(t,`queryOptions`,29,()=>({})),m=$(t,`onChange`,9),h=[`==`,`!=`,`<`,`<=`,`>`,`>=`].map(e=>({value:e,label:e})),g=[{value:`asc`,label:`ascending`},{value:`desc`,label:`descending`}],_=B((n=p())!=null&&(n=n.filter)!=null&&n.path?rg(p().filter.path):void 0,!0),v=B(h.find(e=>e.value===p().filter?.relation)??h[0],!0),y=B(((r=p())==null||(r=r.filter)==null?void 0:r.value)||``,!0),b=B((i=p())!=null&&(i=i.sort)!=null&&i.path?rg(p().sort.path):void 0,!0),x=B(g.find(e=>e.value===p().sort?.direction)??g[0],!0);W(()=>J(f()),()=>{V(a,Array.isArray(f()))}),W(()=>(K(a),J(f())),()=>{V(o,K(a)?Od(f()):[])}),W(()=>(K(a),J(f())),()=>{V(s,K(a)?Od(f(),!0):[])}),W(()=>(K(o),rg),()=>{V(c,K(o).map(rg))}),W(()=>(K(s),rg),()=>{V(l,K(s)?K(s).map(rg):[])}),W(()=>(J(p()),K(l),D),()=>{var e;V(u,(e=p())!=null&&(e=e.projection)!=null&&e.paths&&K(l)?p().projection.paths.map(e=>K(l).find(t=>D(t.value,e))).filter(e=>!!e):void 0)}),W(()=>K(_),()=>{var e=K(_)?.value,t;D((t=p())==null||(t=t.filter)==null?void 0:t.path,e)||(d(`changeFilterPath`,e),p(an(p(),[`filter`,`path`],e,!0)),m()(p()))}),W(()=>K(v),()=>{var e=K(v)?.value,t;D((t=p())==null||(t=t.filter)==null?void 0:t.relation,e)||(d(`changeFilterRelation`,e),p(an(p(),[`filter`,`relation`],e,!0)),m()(p()))}),W(()=>K(y),()=>{var e=K(y),t;D((t=p())==null||(t=t.filter)==null?void 0:t.value,e)||(d(`changeFilterValue`,e),p(an(p(),[`filter`,`value`],e,!0)),m()(p()))}),W(()=>K(b),()=>{var e=K(b)?.value,t;D((t=p())==null||(t=t.sort)==null?void 0:t.path,e)||(d(`changeSortPath`,e),p(an(p(),[`sort`,`path`],e,!0)),m()(p()))}),W(()=>K(x),()=>{var e=K(x)?.value,t;D((t=p())==null||(t=t.sort)==null?void 0:t.direction,e)||(d(`changeSortDirection`,e),p(an(p(),[`sort`,`direction`],e,!0)),m()(p()))}),W(()=>K(u),()=>{(function(e){var t;D((t=p())==null||(t=t.projection)==null?void 0:t.paths,e)||(d(`changeProjectionPaths`,e),p(an(p(),[`projection`,`paths`],e,!0)),m()(p()))})(K(u)?K(u).map(e=>e.value):void 0)}),Rc(),Qu(!0);var S=ev(),C=H(H(S)),w=H(H(U(H(C))));$_(w,{class:`jse-filter-path`,showChevron:!0,get items(){return K(c)},get value(){return K(_)},set value(e){V(_,e)},$$legacy:!0});var T=U(w,2);$_(T,{class:`jse-filter-relation`,showChevron:!0,clearable:!1,get items(){return h},get value(){return K(v)},set value(e){V(v,e)},$$legacy:!0});var E=U(T,2),ee=U(C),te=H(H(U(H(ee))));$_(te,{class:`jse-sort-path`,showChevron:!0,get items(){return K(c)},get value(){return K(b)},set value(e){V(b,e)},$$legacy:!0}),$_(U(te,2),{class:`jse-sort-direction`,showChevron:!0,clearable:!1,get items(){return g},get value(){return K(x)},set value(e){V(x,e)},$$legacy:!0}),$_(H(H(U(H(U(ee))))),{class:`jse-projection-paths`,multiple:!0,showChevron:!0,get items(){return K(l)},get value(){return K(u)},set value(e){V(u,e)},$$legacy:!0}),Wu(E,()=>K(y),e=>V(y,e)),Z(e,S),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var nv=X(`<button type="button"><!> </button>`),rv=X(`<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>`);function iv(e,t){Go(t,!1);var n=$(t,`queryLanguages`,8),r=$(t,`queryLanguageId`,12),i=$(t,`onChangeQueryLanguage`,8);Qu();var a=rv();pu(H(a),5,n,du,(e,t)=>{var n,a=nv(),o=H(a),s=e=>{ep(e,{get data(){return oi}})},c=e=>{ep(e,{get data(){return ci}})};Q(o,e=>{K(t),J(r()),q(()=>K(t).id===r())?e(s):e(c,!1)});var l=U(o);G(()=>{var e;n=Du(a,1,`jse-query-language svelte-jrd4q2`,null,n,{selected:K(t).id===r()}),Ru(a,`title`,(K(t),q(()=>`Select ${K(t).name} as query language`))),Kl(l,` ${(K(t),e=q(()=>K(t).name))!==null&&e!==void 0?e:``}`)}),Y(`click`,a,()=>{e=K(t).id,r(e),i()(e);return;var e}),Z(e,a)}),Z(e,a),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var av=X(`<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>`),ov=X(`<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>`);function sv(e,t){Go(t,!1);var n=$(t,`title`,9,`Modal`),r=$(t,`fullScreenButton`,9,!1),i=$(t,`fullscreen`,13,!1),a=$(t,`onClose`,9,void 0);Qu(!0);var o=ov(),s=H(o),c=H(s),l=U(s,2);vu(l,t,`actions`,{},null);var u=U(l,2),d=e=>{var t=av(),n=H(t),r=rc(()=>i()?Ui:Oi);ep(n,{get data(){return K(r)}}),Y(`click`,t,()=>i(!i())),Z(e,t)};Q(u,e=>{r()&&e(d)});var f=U(u,2);ep(H(f),{get data(){return Pi}}),G(()=>Kl(c,n())),Y(`click`,f,()=>a()?.()),Z(e,o),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var cv=X(`<button slot="actions" type="button" title="Select a query language"><!></button>`),lv=sd(`jsoneditor:AutoScrollHandler`);function uv(e){var t,n;function r(e){return e<20?200:e<50?400:1200}function i(){if(e){var n=.05*(t||0);e.scrollTop+=n}}function a(e){n&&e===t||(o(),lv(`startAutoScroll`,e),t=e,n=setInterval(i,50))}function o(){n&&(lv(`stopAutoScroll`),clearInterval(n),n=void 0,t=void 0)}return lv(`createAutoScrollHandler`,e),{onDrag:function(t){if(e){var n=t.clientY,{top:i,bottom:s}=e.getBoundingClientRect();n<i?a(-r(i-n)):n>s?a(r(n-s)):o()}},onDragEnd:function(){o()}}}var dv=(e,t,n,r)=>(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t,fv=()=>{var e,t,n,r,i,a,o,s,c,l,u,d,f;function p(t){return t.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function m(t){e.scrollTo?e.scrollTo(e.scrollLeft,t):e.scrollTop=t}function h(e){l||=e,m(a(u=e-l,n,s,c)),f=!0,u<c?requestAnimationFrame(h):function(){m(n+s),t&&o&&(t.setAttribute(`tabindex`,`-1`),t.focus()),typeof d==`function`&&d(),l=0,f=!1}()}return function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,i=m.offset||0,d=m.callback,a=m.easing||dv,o=m.a11y||!1,typeof m.container){case`object`:e=m.container;break;case`string`:e=document.querySelector(m.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof u){case`number`:t=void 0,o=!1,r=n+u;break;case`object`:r=p(t=u);break;case`string`:t=document.querySelector(u),r=p(t)}switch(s=r-n+i,typeof m.duration){case`number`:c=m.duration;break;case`function`:c=m.duration(s)}f?l=0:requestAnimationFrame(h)}};function pv(e,t){var n=Date.now(),r=e();return t(Date.now()-n),r}var mv=sd(`validation`),hv={createObjectDocumentState:()=>({type:`object`,properties:{}}),createArrayDocumentState:()=>({type:`array`,items:[]}),createValueDocumentState:()=>({type:`value`})};function gv(e,t,n,r){return um(e,t,n,r,hv)}function _v(e,t,n,r){if(mv(`validateJSON`),!t)return[];if(n!==r){var i=n.stringify(e);return t(i===void 0?void 0:r.parse(i))}return t(e)}function vv(e,t,n,r){if(mv(`validateText`),e.length>104857600)return{validationErrors:[{path:[],message:`Validation turned off: the document is too large`,severity:af.info}]};if(e.length!==0)try{var i=pv(()=>n.parse(e),e=>mv(`validate: parsed json in ${e} ms`));if(!t)return;var a=n===r?i:pv(()=>r.parse(e),e=>mv(`validate: parsed json with the validationParser in ${e} ms`)),o=pv(()=>t(a),e=>mv(`validate: validated json in ${e} ms`));return Et(o)?void 0:{validationErrors:o}}catch(t){var s=pv(()=>function(e,t){if(e.length>fp)return!1;try{return t.parse(yr(e)),!0}catch{return!1}}(e,n),e=>mv(`validate: checked whether repairable in ${e} ms`));return{parseError:Bd(e,t.message||t.toString()),isRepairable:s}}}var yv=sd(`jsoneditor:FocusTracker`);function bv(e){var t,{onMount:n,onDestroy:r,getWindow:i,hasFocus:a,onFocus:o,onBlur:s}=e,c=!1;function l(){var e=a();e&&(clearTimeout(t),c||=(yv(`focus`),o(),e))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(yv(`blur`),c=!1,s())}))}n(()=>{yv(`mount FocusTracker`);var e=i();e&&(e.addEventListener(`focusin`,l,!0),e.addEventListener(`focusout`,u,!0))}),r(()=>{yv(`destroy FocusTracker`);var e=i();e&&(e.removeEventListener(`focusin`,l,!0),e.removeEventListener(`focusout`,u,!0))})}Lf(`/* over all fonts, sizes, and colors */
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
}`);var xv=X(`<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>`),Sv=X(`<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>`);function Cv(e,t){Go(t,!1);var n=$(t,`type`,9,`success`),r=$(t,`icon`,9,void 0),i=$(t,`message`,9,void 0),a=$(t,`actions`,25,()=>[]),o=$(t,`onClick`,9,void 0),s=$(t,`onClose`,9,void 0);s()&&ou(s()),Qu(!0);var c,l=Sv(),u=H(l),d=H(H(u)),f=e=>{ep(e,{get data(){return r()}})};Q(d,e=>{r()&&e(f)});var p=U(d);pu(U(u,2),5,a,du,(e,t)=>{var n=xv(),r=H(n),i=e=>{ep(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(r,e=>{K(t),q(()=>K(t).icon)&&e(i)});var a=U(r);G(()=>{var e;Ru(n,`title`,(K(t),q(()=>K(t).title))),n.disabled=(K(t),q(()=>K(t).disabled)),Kl(a,` ${(K(t),e=q(()=>K(t).text))!==null&&e!==void 0?e:``}`)}),Y(`click`,n,()=>{K(t).onClick&&K(t).onClick()}),Y(`mousedown`,n,()=>{K(t).onMouseDown&&K(t).onMouseDown()}),Z(e,n)}),G(()=>{Du(l,1,`jse-message jse-${n()??``}`,`svelte-cbvd26`),c=Du(u,1,`jse-text svelte-cbvd26`,null,c,{"jse-clickable":!!o()}),Kl(p,` ${i()??``}`)}),Y(`click`,u,function(){o()&&o()()}),Z(e,l),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var wv=X(`<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>`),Tv=X(`<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>`),Ev=X(`<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>`),Dv=X(`<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>`),Ov=X(`<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>`),kv=X(`<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>`);function Av(e,t){Go(t,!1);var n=B(void 0,!0),r=$(t,`validationErrors`,9),i=$(t,`selectError`,9),a=B(!0,!0);function o(){V(a,!1)}function s(){V(a,!0)}W(()=>J(r()),()=>{V(n,r().length)}),Rc(),Qu(!0);var c=Vl(),l=Dc(c),u=e=>{var t=kv(),c=H(t),l=e=>{var t=Dv(),a=H(H(t));pu(a,1,()=>(J(Ad),J(r()),J(lp),q(()=>Ad(r(),lp))),du,(e,t,n)=>{var a=Tv(),s=H(a);ep(H(s),{get data(){return zi}});var c=U(s),l=H(c),u=U(c),d=H(u),f=H(U(u)),p=e=>{var t=wv();ep(H(t),{get data(){return Li}}),Y(`click`,t,Xu(o)),Z(e,t)};Q(f,e=>{J(r()),q(()=>n===0&&r().length>1)&&e(p)}),G(e=>{var n;Du(a,1,`jse-validation-${(K(t),n=q(()=>K(t).severity))!==null&&n!==void 0?n:``}`,`svelte-1342rh4`),Kl(l,e),Kl(d,(K(t),q(()=>K(t).message)))},[()=>(J(tg),K(t),q(()=>tg(K(t).path)))]),Y(`click`,a,()=>{setTimeout(()=>i()(K(t)))}),Z(e,a)});var s=U(a),c=e=>{var t=Ev(),r=H(U(H(t),2));G(()=>Kl(r,`(and ${K(n)-lp} more errors)`)),Z(e,t)};Q(s,e=>{K(n)>lp&&e(c)}),Z(e,t)},u=e=>{var t=Ov(),i=H(H(t)),a=H(i);ep(H(a),{get data(){return zi}});var o=H(U(a));ep(H(U(o)),{get data(){return Ei}}),G(e=>{Du(i,1,`jse-validation-${e??``}`,`svelte-1342rh4`),Kl(o,`${K(n)??``} validation errors `)},[()=>(J(r()),q(()=>{return e=r(),[af.error,af.warning,af.info].find(t=>e.some(e=>e.severity===t));var e}))]),Y(`click`,i,s),Z(e,t)};Q(c,e=>{K(a)||K(n)===1?e(l):e(u,!1)}),Z(e,t)};Q(l,e=>{J(Et),J(r()),q(()=>!Et(r()))&&e(u)}),Z(e,c),Ko()}function jv(e,t){if(e)return e.addEventListener(`keydown`,n),{destroy(){e.removeEventListener(`keydown`,n)}};function n(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),t())}}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Mv=X(`<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>`);function Nv(e,t){Go(t,!1);var n=$(t,`className`,8,void 0),r=$(t,`fullscreen`,8,!1),i=$(t,`onClose`,8),a=B();function o(){i()()}au(()=>K(a).showModal()),ou(()=>K(a).close()),Qu();var s,c=Mv();vu(H(H(c)),t,`default`,{},null),Yu(c,e=>V(a,e),()=>K(a)),Lc(()=>Y(`close`,c,o)),Lc(()=>{return Y(`pointerdown`,c,(e=o,function(){var t=[...arguments];t[0].target===this&&e?.apply(this,t)}));var e}),Lc(()=>Y(`cancel`,c,Zu(function(e){td.call(this,t,e)}))),bu(c,(e,t)=>jv?.(e,t),()=>o),G(e=>s=Du(c,1,e,`svelte-2aoco4`,s,{"jse-fullscreen":r()}),[()=>Cu((J(fh),J(n()),q(()=>fh(`jse-modal`,n()))))]),Z(e,c),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Pv=X(`<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>`,1);function Fv(e,t){Go(t,!1);var n=$(t,`onClose`,9),r=Nf()?`⌘`:`Ctrl`;Qu(!0),Nv(e,{get onClose(){return n()},className:`jse-copy-paste`,children:(e,t)=>{var i=Pv(),a=Dc(i);sv(a,{title:`Copying and pasting`,get onClose(){return n()}});var o=U(H(U(a,2)),2),s=H(o),c=H(H(s)),l=U(s,2),u=H(H(l)),d=H(H(U(l,2))),f=H(U(o,2));G(()=>{Kl(c,`${r}+C`),Kl(u,`${r}+X`),Kl(d,`${r}+V`)}),Y(`click`,f,function(){for(var e,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];(e=n())==null||e.apply(this,r)}),Z(e,i)},$$slots:{default:!0}}),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Iv=X(`<div class="jse-separator svelte-3erbu0"></div>`),Lv=X(`<div class="jse-space svelte-3erbu0"></div>`),Rv=X(`<button type="button"><!> <!></button>`),zv=X(`<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>`);function Bv(e,t){Go(t,!1);var n=$(t,`items`,25,()=>[]);Qu(!0);var r=zv(),i=H(r);vu(i,t,`left`,{},null);var a=U(i,2);pu(a,1,n,du,(e,t)=>{var n=Vl(),r=Dc(n),i=e=>{Z(e,Iv())},a=e=>{var n=Vl(),r=Dc(n),i=e=>{Z(e,Lv())},a=e=>{var n=Vl(),r=Dc(n),i=e=>{var n=Rv(),r=H(n),i=e=>{ep(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(r,e=>{K(t),q(()=>K(t).icon)&&e(i)});var a=U(r,2),o=e=>{var n=Bl();G(()=>Kl(n,(K(t),q(()=>K(t).text)))),Z(e,n)};Q(a,e=>{K(t),q(()=>K(t).text)&&e(o)}),G(()=>{var e;Du(n,1,`jse-button ${(K(t),e=q(()=>K(t).className))!==null&&e!==void 0?e:``}`,`svelte-3erbu0`),Ru(n,`title`,(K(t),q(()=>K(t).title))),n.disabled=(K(t),q(()=>K(t).disabled||!1))}),Y(`click`,n,function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=K(t).onClick)==null||e.apply(this,r)}),Z(e,n)},a=e=>{var n=Bl();G(e=>Kl(n,e),[()=>(K(t),q(()=>function(e){return console.error(`Unknown type of menu item`,e),`???`}(K(t))))]),Z(e,n)};Q(r,e=>{J(Mp),K(t),q(()=>Mp(K(t)))?e(i):e(a,!1)},!0),Z(e,n)};Q(r,e=>{J(kp),K(t),q(()=>kp(K(t)))?e(i):e(a,!1)},!0),Z(e,n)};Q(r,e=>{J(Ap),K(t),q(()=>Ap(K(t)))?e(i):e(a,!1)}),Z(e,n)}),vu(U(a,2),t,`right`,{},null),Z(e,r),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Vv=X(`<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>`),Hv=X(`<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>`);function Uv(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=B(void 0,!0),s=B(void 0,!0),c=$(t,`text`,13,``),l=$(t,`readOnly`,9,!1),u=$(t,`onParse`,9),d=$(t,`onRepair`,9),f=$(t,`onChange`,9,void 0),p=$(t,`onApply`,9),m=$(t,`onCancel`,9),h=sd(`jsoneditor:JSONRepair`),g=B(void 0,!0);function _(){if(K(g)&&K(n)){var e=K(n).position===void 0?0:K(n).position;K(g).setSelectionRange(e,e),K(g).focus()}}function v(){p()(c())}function y(){try{c(d()(c())),f()&&f()(c())}catch{}}var b=B(void 0,!0);W(()=>J(c()),()=>{V(n,function(e){try{u()(e);return}catch(t){return Bd(e,t.message)}}(c()))}),W(()=>J(c()),()=>{V(r,function(e){try{return d()(e),!0}catch{return!1}}(c()))}),W(()=>K(n),()=>{h(`error`,K(n))}),W(()=>J(m()),()=>{V(b,[{type:`space`},{type:`button`,icon:Pi,title:`Cancel repair`,className:`jse-cancel`,onClick:m()}])}),W(()=>Xi,()=>{V(i,{icon:Xi,text:`Show me`,title:`Scroll to the error location`,onClick:_})}),W(()=>ki,()=>{V(a,{icon:ki,text:`Auto repair`,title:`Automatically repair JSON`,onClick:y})}),W(()=>(K(r),K(i),K(a)),()=>{V(o,K(r)?[K(i),K(a)]:[K(i)])}),W(()=>J(l()),()=>{V(s,[{icon:ji,text:`Apply`,title:`Apply fixed JSON`,disabled:l(),onClick:v}])}),Rc(),Qu(!0);var x=Hv(),S=H(x);Bv(S,{get items(){return K(b)},$$slots:{left:(e,t)=>{Z(e,Vv())}}});var C=U(S,2),w=e=>{var t=rc(()=>(K(n),q(()=>`Cannot parse JSON: ${K(n).message}`)));Cv(e,{type:`error`,get icon(){return zi},get message(){return K(t)},get actions(){return K(o)}})},T=e=>{Cv(e,{type:`success`,message:`JSON is valid now and can be parsed.`,get actions(){return K(s)}})};Q(C,e=>{K(n)?e(w):e(T,!1)});var E=U(C,2);Yu(E,e=>V(g,e),()=>K(g)),G(()=>{E.readOnly=l(),Lu(E,c())}),Y(`input`,E,function(e){h(`handleChange`);var t=e.target.value;c()!==t&&(c(t),f()&&f()(c()))}),Z(e,x),Ko()}function Wv(e,t){Go(t,!1);var n=$(t,`text`,13),r=$(t,`onParse`,9),i=$(t,`onRepair`,9),a=$(t,`onApply`,9),o=$(t,`onClose`,9);function s(e){a()(e),o()()}function c(){o()()}Qu(!0),Nv(e,{get onClose(){return o()},className:`jse-repair-modal`,children:(e,t)=>{Uv(e,{get onParse(){return r()},get onRepair(){return i()},onApply:s,onCancel:c,get text(){return n()},set text(e){n(e)},$$legacy:!0})},$$slots:{default:!0}}),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Gv=X(`<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>`),Kv=X(`<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>`);function qv(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=B(void 0,!0),s=$(t,`visibleSections`,9),c=$(t,`sectionIndex`,9),l=$(t,`total`,9),u=$(t,`path`,9),d=$(t,`selection`,9),f=$(t,`onExpandSection`,9),p=$(t,`context`,9);W(()=>(J(s()),J(c())),()=>{V(n,s()[c()])}),W(()=>K(n),()=>{V(r,K(n).end)}),W(()=>(J(s()),J(c()),J(l())),()=>{V(i,s()[c()+1]?s()[c()+1].start:l())}),W(()=>(J(p()),J(d()),J(u()),K(r)),()=>{V(a,ch(p().getJson(),d(),u().concat(String(K(r)))))}),W(()=>(K(r),K(i)),()=>{V(o,function(e,t){var n={start:e,end:Math.min(Dp(e),t)},r=Math.max(Op((e+t)/2),e),i={start:r,end:Math.min(Dp(r),t)},a=Op(t),o=a===t?a-cp:a,s={start:Math.max(o,e),end:t},c=[n],l=i.start>=n.end&&i.end<=s.start;return l&&c.push(i),s.start>=(l?i.end:n.end)&&c.push(s),c}(K(r),K(i)))}),Rc(),Qu(!0);var m,h,g=Kv(),_=H(H(g)),v=H(_);pu(U(_,2),1,()=>K(o),du,(e,t)=>{var n=Gv(),r=H(n);G(()=>{var e,n;return Kl(r,`show ${(K(t),e=q(()=>K(t).start))!==null&&e!==void 0?e:``}-${(K(t),n=q(()=>K(t).end))!==null&&n!==void 0?n:``}`)}),Y(`click`,n,()=>f()(u(),K(t))),Z(e,n)}),G(()=>{m=Du(g,1,`jse-collapsed-items svelte-1v6dhm4`,null,m,{"jse-selected":K(a)}),h=ku(g,``,h,{"--level":(J(u()),q(()=>u().length+2))}),Kl(v,`Items ${K(r)??``}-${K(i)??``}`)}),Y(`mousemove`,g,function(e){e.stopPropagation()}),Z(e,g),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Jv=X(`<button type="button"><!></button>`);function Yv(e,t){Go(t,!1);var n=$(t,`root`,9,!1),r=$(t,`insert`,9,!1),i=$(t,`selected`,9),a=$(t,`onContextMenu`,9);Qu(!0);var o,s=Jv();ep(H(s),{get data(){return qi}}),G(()=>{o=Du(s,1,`jse-context-menu-pointer svelte-10ijtzr`,null,o,{"jse-root":n(),"jse-insert":r(),"jse-selected":i()}),Ru(s,`title`,gp)}),Y(`click`,s,function(e){for(var t=e.target;t&&t.nodeName!==`BUTTON`;)t=t.parentNode;t&&a()({anchor:t,left:0,top:0,width:Cp,height:Sp,offsetTop:2,offsetLeft:0,showTip:!0})}),Z(e,s),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Xv=X(`<div role="none" data-type="selectable-key"><!></div>`),Zv=X(`<!> <!>`,1),Qv=X(`<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>`);function $v(e,t){Go(t,!0);var n=nc(()=>Am(t.selection)&&nh(t.selection)),r=nc(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:K(n),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),i=Vl();pu(Dc(i),17,()=>K(r),du,(e,t)=>{var n=Vl(),r=Dc(n),i=e=>{var n=nc(()=>K(t).action),r=Qv();bu(r,(e,t)=>K(n)?.(e,t),()=>K(t).props),Z(e,r)},a=e=>{var n=nc(()=>K(t).component),r=Vl();yu(Dc(r),()=>K(n),(e,n)=>{n(e,od(()=>K(t).props))}),Z(e,r)};Q(r,e=>{Bp(K(t))?e(i):e(a,!1)}),Z(e,n)}),Z(e,i),Ko()}var ey={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function ty(e){var{json:t,selection:n,deltaY:r,items:i}=e;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var a=r<0?function(e){for(var{json:t,items:n,selection:r,deltaY:i}=e,a=Lm(t,r),o=n.findIndex(e=>D(e.path,a)),s=()=>n[c-1]?.height,c=o,l=0;s()!==void 0&&Math.abs(i)>l+s()/2;)l+=s(),--c;var u=n[c].path,d=c-o;return c!==o&&n[c]!==void 0?{beforePath:u,offset:d}:void 0}({json:t,selection:n,deltaY:r,items:i}):function(e){for(var{json:t,items:n,selection:r,deltaY:i}=e,a=Rm(t,r),o=n.findIndex(e=>D(e.path,a)),s=0,c=o,l=()=>n[c+1]?.height;l()!==void 0&&Math.abs(i)>s+l()/2;)s+=l(),c+=1;var u=L(t,St(a)),d=n[Array.isArray(u)?c:c+1]?.path,f=c-o;return d?{beforePath:d,offset:f}:{append:!0,offset:f}}({json:t,selection:n,deltaY:r,items:i});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var o=function(e,t,n){if(!t)return[];var r=`beforePath`in n?n.beforePath:void 0,i=`append`in n?n.append:void 0,a=St(uh(t)),o=L(e,a);if(!(i||r&&Km(r,a)&&r.length>a.length))return[];var s=Lm(e,t),c=Rm(e,t),l=T(s),u=T(c),d=r?r[a.length]:void 0;if(!Wt(o)){if(Ut(o)){var f=fd(l),p=fd(u),m=d===void 0?o.length:fd(d);return Bt(p-f+1,m<f?e=>({op:`move`,from:fn(a.concat(String(f+e))),path:fn(a.concat(String(m+e)))}):()=>({op:`move`,from:fn(a.concat(String(f))),path:fn(a.concat(String(m)))}))}throw Error(`Cannot create move operations: parent must be an Object or Array`)}var h=Object.keys(o),g=h.indexOf(l),_=h.indexOf(u),v=i?h.length:d===void 0?-1:h.indexOf(d);return g!==-1&&_!==-1&&v!==-1?v>g?[...h.slice(g,_+1),...h.slice(v,h.length)].map(e=>wh(a,e)):[...h.slice(v,g),...h.slice(_+1,h.length)].map(e=>wh(a,e)):[]}(t,n,a),s=L(t,St(Lm(t,n)));return Array.isArray(s)?{operations:o,updatedSelection:function(e){var{items:t,json:n,selection:r,offset:i}=e,a=Lm(n,r),o=Rm(n,r),s=t.findIndex(e=>D(e.path,a)),c=t.findIndex(e=>D(e.path,o));return eh(t[s+i]?.path,t[c+i]?.path)}({items:i,json:t,selection:n,offset:a.offset}),offset:a.offset}:{operations:o,updatedSelection:void 0,offset:a.offset}}Lf(`/* over all fonts, sizes, and colors */
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
}`);var ny=X(`<button type="button"><!></button>`);function ry(e,t){Go(t,!1);var n=B(),r=Wo(`absolute-popup`),i=$(t,`validationError`,8),a=$(t,`onExpand`,8);W(()=>J(i()),()=>{V(n,zp(i())&&i().isChildError?`Contains invalid data`:i().message)}),Rc(),Qu();var o=ny();ep(H(o),{get data(){return zi}}),Lc(()=>Y(`click`,o,function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=a())==null||e.apply(this,n)})),bu(o,(e,t)=>Zh?.(e,t),()=>R({text:K(n)},r)),G(()=>{var e;return Du(o,1,`jse-validation-${(J(i()),e=q(()=>i().severity))!==null&&e!==void 0?e:``}`,`svelte-q6a061`)}),Z(e,o),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var iy=ed(()=>ey),ay=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),oy=X(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;`,1),sy=X(`<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>`,1),cy=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),ly=X(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),uy=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),dy=X(`<div data-type="insert-selection-area-inside"><!></div>`),fy=X(`<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>`),py=X(`<!> <!>`,1),my=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),hy=X(`<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>`,1),gy=X(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>`,1),_y=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),vy=X(`<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>`),yy=X(`<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>`,1),by=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),xy=X(`<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>`),Sy=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Cy=X(`<div data-type="insert-selection-area-inside"><!></div>`),wy=X(`<div slot="identifier"><!></div>`),Ty=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),Ey=X(`<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>`,1),Dy=X(`<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>`,1),Oy=X(`<div class="jse-separator svelte-1qi6rc1">:</div>`),ky=X(`<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>`),Ay=X(`<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>`),jy=X(`<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>`),My=X(`<div data-type="insert-selection-area-after"><!></div>`),Ny=X(`<div role="treeitem" tabindex="-1"><!> <!></div>`);function Py(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`pointer`,9),a=$(t,`value`,9),o=$(t,`state`,9),s=$(t,`validationErrors`,9),c=$(t,`searchResults`,9),l=$(t,`selection`,9),u=$(t,`context`,9),d=$(t,`onDragSelectionStart`,9),f=sd(`jsoneditor:JSONNode`),p=B(void 0,!0),m=void 0,h=B(void 0,!0),g=B(void 0,!0),_=B(void 0,!0),v=B(void 0,!0),y=B(void 0,!0),b=B(void 0,!0),x=B(void 0,!0);function S(e){e.stopPropagation();var t=Ff(e);u().onExpand(K(g),!K(_),t)}function C(){u().onExpand(K(g),!0)}function w(e,t){var n=yh(K(g),Object.keys(a()),e,t);return u().onPatch(n),T(dn(n[0].path))}function E(e){u().onDrag(e)}function ee(e){iy().selecting&&(iy(iy().selecting=!1),e.stopPropagation()),u().onDragEnd(),document.removeEventListener(`mousemove`,E,!0),document.removeEventListener(`mouseup`,ee)}function te(){var e;return((e=u().findElement([]))==null||(e=e.getBoundingClientRect())==null?void 0:e.top)||0}function ne(e,t){var n=te()-e.initialContentTop;return t.clientY-e.initialClientY-n}function re(e){if(!u().readOnly&&l()){var t=St(uh(l()));if(D(K(g),t)){var n=function(e,t){var n=[];function r(e){var t=K(g).concat(e),r=u().findElement(t);r!==void 0&&n.push({path:t,height:r.clientHeight})}if(Array.isArray(a())){var i=u().getJson();if(i===void 0)return;var o=Lm(i,e),s=Rm(i,e),c=parseInt(T(o),10),l=parseInt(T(s),10),d=t.find(e=>c>=e.start&&l<=e.end);if(!d)return;var{start:f,end:p}=d;kd(f,Math.min(a().length,p),e=>r(String(e)))}else Object.keys(a()).forEach(r);return n}(l(),K(y)||dp);if(f(`dragSelectionStart`,{selection:l(),items:n}),n){var r=u().getJson();if(r!==void 0){var i=Lm(r,l()),o=n.findIndex(e=>D(e.path,i)),{offset:s}=ty({json:r,selection:u().getSelection(),deltaY:0,items:n});V(h,{initialTarget:e.target,initialClientY:e.clientY,initialContentTop:te(),selectionStartIndex:o,selectionItemsCount:Fm(r,l()).length,items:n,offset:s,didMoveItems:!1}),iy(iy().dragging=!0),document.addEventListener(`mousemove`,ie,!0),document.addEventListener(`mouseup`,O)}}else f(`Cannot drag the current selection (probably spread over multiple sections)`)}else d()(e)}}function ie(e){if(K(h)){var t=u().getJson();if(t===void 0)return;var n=ne(K(h),e),{offset:r}=ty({json:t,selection:u().getSelection(),deltaY:n,items:K(h).items});r!==K(h).offset&&(f(`drag selection`,r,n),V(h,R(R({},K(h)),{},{offset:r,didMoveItems:!0})))}}function O(e){if(K(h)){var t=u().getJson();if(t===void 0)return;var n=ne(K(h),e),{operations:r,updatedSelection:i}=ty({json:t,selection:u().getSelection(),deltaY:n,items:K(h).items});if(r)u().onPatch(r,(e,t)=>({state:t,selection:i??l()}));else if(e.target===K(h).initialTarget&&!K(h).didMoveItems){var a=kf(e.target),o=jf(e.target);o&&u().onSelect(oh(a,o))}V(h,void 0),iy(iy().dragging=!1),document.removeEventListener(`mousemove`,ie,!0),document.removeEventListener(`mouseup`,O)}}function ae(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),u().onSelect(Qm(K(g))))}function k(e){e.shiftKey||(e.stopPropagation(),e.preventDefault(),u().onSelect($m(K(g))))}function oe(e){u().onSelect(Qm(K(g))),Cs(),u().onContextMenu(e)}function se(e){u().onSelect($m(K(g))),Cs(),u().onContextMenu(e)}W(()=>J(i()),()=>{V(g,dn(i()))}),W(()=>J(i()),()=>{V(n,encodeURIComponent(i()))}),W(()=>J(o()),()=>{V(_,!!Wp(o())&&o().expanded)}),W(()=>(J(a()),J(o())),()=>{V(v,gm(a(),o(),[]))}),W(()=>J(o()),()=>{V(y,Hp(o())?o().visibleSections:void 0)}),W(()=>J(s()),()=>{V(b,s()?.validationError)}),W(()=>(J(u()),J(l()),K(g)),()=>{V(x,ch(u().getJson(),l(),K(g)))}),W(()=>K(g),()=>{V(r,K(g).length===0)}),Rc(),Qu(!0);var ce,le,ue=Ny(),de=H(ue),fe=e=>{var n=gy(),d=Dc(n),f=H(d),m=H(f),v=H(m),w=e=>{ep(e,{get data(){return qi}})},T=e=>{ep(e,{get data(){return mi}})};Q(v,e=>{K(_)?e(w):e(T,!1)});var E=U(m,2);vu(E,t,`identifier`,{},null);var ee=U(E,2),te=e=>{Z(e,ay())};Q(ee,e=>{K(r)||e(te)});var ne=U(ee,2),ie=H(H(ne)),O=e=>{var t=oy();Kh(U(Dc(t),2),{children:(e,t)=>{var n=Bl();G(()=>{var e,t;return Kl(n,`${(J(a()),e=q(()=>a().length))!==null&&e!==void 0?e:``}
                ${(J(a()),t=q(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),Z(e,n)},$$slots:{default:!0}}),Z(e,t)},se=e=>{var t=sy();Kh(U(Dc(t),2),{onclick:C,children:(e,t)=>{var n=Bl();G(()=>{var e,t;return Kl(n,`${(J(a()),e=q(()=>a().length))!==null&&e!==void 0?e:``}
                ${(J(a()),t=q(()=>a().length===1?`item`:`items`))!==null&&t!==void 0?t:``}`)}),Z(e,n)},$$slots:{default:!0}}),Z(e,t)};Q(ie,e=>{K(_)?e(O):e(se,!1)});var ce=U(ne,2),le=e=>{var t=cy();Yv(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(u()),q(()=>u().onContextMenu)}}),Z(e,t)};Q(ce,e=>{J(u()),K(x),J(l()),J(Am),J(jm),J(nh),J(D),J(uh),K(g),q(()=>!u().readOnly&&K(x)&&l()&&(Am(l())||jm(l()))&&!nh(l())&&D(uh(l()),K(g)))&&e(le)});var ue=U(f,2),de=e=>{ry(e,{get validationError(){return K(b)},onExpand:C})};Q(ue,e=>{K(b),K(_),q(()=>K(b)&&(!K(_)||!K(b).isChildError))&&e(de)});var fe=U(ue,2),pe=e=>{var t=ly();Y(`click`,t,ae),Z(e,t)},me=e=>{var t=uy();Y(`click`,t,k),Z(e,t)};Q(fe,e=>{K(_)?e(pe):e(me,!1)});var he=U(d,2),j=e=>{var t=hy(),n=Dc(t),d=H(n),f=e=>{var t,n,r=dy(),i=H(r),a=rc(()=>(K(x),J(Om),J(l()),q(()=>K(x)&&Om(l()))));Yv(i,{insert:!0,get selected(){return K(a)},onContextMenu:oe}),G(e=>{t=Du(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),Ru(r,`title`,hp),n=ku(r,``,n,{"--level":(K(g),q(()=>K(g).length+1))})},[()=>({"jse-hovered":K(p)===_p,"jse-selected":K(x)&&Om(l())})]),Z(e,r)};Q(d,e=>{J(u()),K(p),J(_p),K(x),J(Om),J(l()),q(()=>!u().readOnly&&(K(p)===_p||K(x)&&Om(l())))&&e(f)}),pu(U(d,2),1,()=>K(y)||dp,du,(e,t,n)=>{var r=py(),d=Dc(r);pu(d,1,()=>(J(a()),K(t),K(h),q(()=>function(e,t,n){var r=t.start,i=A(r,Math.min(t.end,e.length));return n&&n.offset!==0?Nd(i,n.selectionStartIndex,n.selectionItemsCount,n.offset).map((e,t)=>({index:e,gutterIndex:t})):i.map(e=>({index:e,gutterIndex:e}))}(a(),K(t),K(h)))),e=>e.index,(e,t)=>{var n=rc(()=>(J(Hp),J(s()),K(t),q(()=>Hp(s())?s().items[K(t).index]:void 0))),r=rc(()=>(J(sh),J(u()),J(l()),K(g),K(t),q(()=>sh(u().getJson(),l(),K(g).concat(String(K(t).index)))))),d=Vl(),f=Dc(d),p=rc(()=>(J(mn),J(i()),K(t),q(()=>mn(i(),K(t).index)))),m=rc(()=>(J(Hp),J(o()),K(t),q(()=>Hp(o())?o().items[K(t).index]:void 0))),h=rc(()=>(J(Hp),J(c()),K(t),q(()=>Hp(c())?c().items[K(t).index]:void 0)));Py(f,{get value(){return J(a()),K(t),q(()=>a()[K(t).index])},get pointer(){return K(p)},get state(){return K(m)},get validationErrors(){return K(n)},get searchResults(){return K(h)},get selection(){return K(r)},get context(){return u()},onDragSelectionStart:re,$$slots:{identifier:(e,n)=>{var r=fy(),i=H(H(r));G(()=>Kl(i,(K(t),q(()=>K(t).gutterIndex)))),Z(e,r)}}}),Z(e,d)});var f=U(d,2),p=e=>{var t=rc(()=>K(y)||dp);qv(e,{get visibleSections(){return K(t)},sectionIndex:n,get total(){return J(a()),q(()=>a().length)},get path(){return K(g)},get onExpandSection(){return J(u()),q(()=>u().onExpandSection)},get selection(){return l()},get context(){return u()}})};Q(f,e=>{K(t),J(a()),q(()=>K(t).end<a().length)&&e(p)}),Z(e,r)});var m=U(H(U(n,2)),2),_=e=>{var t=my();Y(`click`,t,k),Z(e,t)};Q(m,e=>{K(r)||e(_)}),Z(e,t)};Q(he,e=>{K(_)&&e(j)}),Y(`click`,m,S),Z(e,n)},pe=e=>{var n=Vl(),d=Dc(n),f=e=>{var n=Dy(),d=Dc(n),f=H(d),m=H(f),v=H(m),y=e=>{ep(e,{get data(){return qi}})},T=e=>{ep(e,{get data(){return mi}})};Q(v,e=>{K(_)?e(y):e(T,!1)});var E=U(m,2);vu(E,t,`identifier`,{},null);var ee=U(E,2),te=e=>{Z(e,_y())};Q(ee,e=>{K(r)||e(te)});var ne=U(ee,2),ie=H(H(ne)),O=e=>{Z(e,vy())},A=e=>{var t=yy();Kh(U(Dc(t),2),{onclick:C,children:(e,t)=>{var n=Bl();G((e,t)=>Kl(n,`${e??``}
                ${t??``}`),[()=>(J(a()),q(()=>Object.keys(a()).length)),()=>(J(a()),q(()=>Object.keys(a()).length===1?`prop`:`props`))]),Z(e,n)},$$slots:{default:!0}}),Z(e,t)};Q(ie,e=>{K(_)?e(O):e(A,!1)});var se=U(ne,2),ce=e=>{var t=by();Yv(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(u()),q(()=>u().onContextMenu)}}),Z(e,t)};Q(se,e=>{J(u()),K(x),J(l()),J(Am),J(jm),J(nh),J(D),J(uh),K(g),q(()=>!u().readOnly&&K(x)&&l()&&(Am(l())||jm(l()))&&!nh(l())&&D(uh(l()),K(g)))&&e(ce)});var le=U(f,2),ue=e=>{ry(e,{get validationError(){return K(b)},onExpand:C})};Q(le,e=>{K(b),K(_),q(()=>K(b)&&(!K(_)||!K(b).isChildError))&&e(ue)});var de=U(le,2),fe=e=>{var t=xy();Y(`click`,t,ae),Z(e,t)},pe=e=>{var t=Vl(),n=Dc(t),i=e=>{var t=Sy();Y(`click`,t,k),Z(e,t)};Q(n,e=>{K(r)||e(i)},!0),Z(e,t)};Q(de,e=>{K(_)?e(fe):e(pe,!1)});var me=U(d,2),he=e=>{var t=Ey(),n=Dc(t),d=H(n),f=e=>{var t,n,r=Cy(),i=H(r),a=rc(()=>(K(x),J(Om),J(l()),q(()=>K(x)&&Om(l()))));Yv(i,{insert:!0,get selected(){return K(a)},onContextMenu:oe}),G(e=>{t=Du(r,1,`jse-insert-area jse-inside svelte-1qi6rc1`,null,t,e),Ru(r,`title`,hp),n=ku(r,``,n,{"--level":(K(g),q(()=>K(g).length+1))})},[()=>({"jse-hovered":K(p)===_p,"jse-selected":K(x)&&Om(l())})]),Z(e,r)};Q(d,e=>{J(u()),K(p),J(_p),K(x),J(Om),J(l()),q(()=>!u().readOnly&&(K(p)===_p||K(x)&&Om(l())))&&e(f)}),pu(U(d,2),1,()=>(J(a()),K(h),q(()=>function(e,t){var n=Object.keys(e);return t&&t.offset!==0?Nd(n,t.selectionStartIndex,t.selectionItemsCount,t.offset):n}(a(),K(h)))),du,(e,t)=>{var n=rc(()=>(J(mn),J(i()),K(t),q(()=>mn(i(),K(t))))),r=rc(()=>(J(Vp),J(c()),K(t),q(()=>Vp(c())?c().properties[K(t)]:void 0))),d=rc(()=>(J(Vp),J(s()),K(t),q(()=>Vp(s())?s().properties[K(t)]:void 0))),f=rc(()=>(K(g),K(t),q(()=>K(g).concat(K(t))))),p=rc(()=>(J(sh),J(u()),J(l()),J(K(f)),q(()=>sh(u().getJson(),l(),K(f))))),m=Vl(),h=Dc(m),_=rc(()=>(J(Vp),J(o()),K(t),q(()=>Vp(o())?o().properties[K(t)]:void 0)));Py(h,{get value(){return J(a()),K(t),q(()=>a()[K(t)])},get pointer(){return K(n)},get state(){return K(_)},get validationErrors(){return K(d)},get searchResults(){return K(r)},get selection(){return K(p)},get context(){return u()},onDragSelectionStart:re,$$slots:{identifier:(e,i)=>{var a,o=wy(),s=H(o),c=rc(()=>(J(Lh),J(K(r)),q(()=>Lh(K(r)))));(function(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`pointer`,9),a=$(t,`key`,9),o=$(t,`selection`,9),s=$(t,`searchResultItems`,9),c=$(t,`onUpdateKey`,9),l=$(t,`context`,9),u=B(void 0,!0);function d(e){K(r)||l().readOnly||(e.preventDefault(),l().onSelect(Ym(K(u))))}function f(e,t){var n=c()(a(),l().normalization.unescapeValue(e)),r=St(K(u)).concat(n);l().onSelect(t===cf.nextInside?Xm(r):Jm(r)),t!==cf.self&&l().focus()}function p(){l().onSelect(Jm(K(u))),l().focus()}W(()=>J(i()),()=>{V(u,dn(i()))}),W(()=>(J(o()),K(u)),()=>{V(n,km(o())&&D(o().path,K(u)))}),W(()=>(K(n),J(o())),()=>{V(r,K(n)&&nh(o()))}),Rc(),Qu(!0);var m=Zv(),h=Dc(m),g=e=>{var t=rc(()=>(J(l()),J(a()),q(()=>l().normalization.escapeValue(a())))),n=rc(()=>(J(nh),J(o()),q(()=>nh(o())?o().initialValue:void 0)));hh(e,{get value(){return K(t)},get initialValue(){return K(n)},label:`Edit key`,shortText:!0,onChange:f,onCancel:p,get onFind(){return J(l()),q(()=>l().onFind)}})},_=e=>{var t,n=Xv(),r=H(n),i=e=>{var t=rc(()=>(J(l()),J(a()),q(()=>l().normalization.escapeValue(a()))));Uh(e,{get text(){return K(t)},get searchResultItems(){return s()}})},o=e=>{var t=Bl();G(e=>Kl(t,e),[()=>(J(xf),J(l()),J(a()),q(()=>xf(l().normalization.escapeValue(a()))))]),Z(e,t)};Q(r,e=>{s()?e(i):e(o,!1)}),G(()=>t=Du(n,1,`jse-key svelte-1n4cez4`,null,t,{"jse-empty":a()===``})),Y(`dblclick`,n,d),Z(e,n)};Q(h,e=>{J(l()),K(r),q(()=>!l().readOnly&&K(r))?e(g):e(_,!1)});var v=U(h,2),y=e=>{Yv(e,{selected:!0,get onContextMenu(){return J(l()),q(()=>l().onContextMenu)}})};Q(v,e=>{J(l()),K(n),K(r),q(()=>!l().readOnly&&K(n)&&!K(r))&&e(y)}),Z(e,m),Ko()})(s,{get pointer(){return K(n)},get key(){return K(t)},get selection(){return K(p)},get searchResultItems(){return K(c)},get context(){return u()},onUpdateKey:w}),G(e=>a=Du(o,1,`jse-key-outer svelte-1qi6rc1`,null,a,e),[()=>({"jse-selected-key":km(K(p))&&D(K(p).path,K(f))})]),Z(e,o)}}}),Z(e,m)});var m=U(H(U(n,2)),2),_=e=>{var t=Ty();Y(`click`,t,k),Z(e,t)};Q(m,e=>{K(r)||e(_)}),Z(e,t)};Q(me,e=>{K(_)&&e(he)}),Y(`click`,m,S),Z(e,n)},m=e=>{var n=jy(),i=H(n),o=H(i);vu(o,t,`identifier`,{},null);var s=U(o,2),d=e=>{Z(e,Oy())};Q(s,e=>{K(r)||e(d)});var f=U(s,2),p=H(f),m=rc(()=>K(x)?l():void 0),h=rc(()=>(J(Rh),J(c()),q(()=>Rh(c()))));$v(p,{get path(){return K(g)},get value(){return a()},get enforceString(){return K(v)},get selection(){return K(m)},get searchResultItems(){return K(h)},get context(){return u()}});var _=U(f,2),y=e=>{var t=ky();Yv(H(t),{get root(){return K(r)},selected:!0,get onContextMenu(){return J(u()),q(()=>u().onContextMenu)}}),Z(e,t)};Q(_,e=>{J(u()),K(x),J(l()),J(Am),J(jm),J(nh),J(D),J(uh),K(g),q(()=>!u().readOnly&&K(x)&&l()&&(Am(l())||jm(l()))&&!nh(l())&&D(uh(l()),K(g)))&&e(y)});var S=U(i,2),w=e=>{ry(e,{get validationError(){return K(b)},onExpand:C})};Q(S,e=>{K(b)&&e(w)});var T=U(S,2),E=e=>{var t=Ay();Y(`click`,t,k),Z(e,t)};Q(T,e=>{K(r)||e(E)}),Z(e,n)};Q(d,e=>{J(hd),J(a()),q(()=>hd(a()))?e(f):e(m,!1)},!0),Z(e,n)};Q(de,e=>{J(a()),q(()=>Array.isArray(a()))?e(fe):e(pe,!1)});var me=U(de,2),he=e=>{var t,n=My(),r=H(n),i=rc(()=>(K(x),J(Dm),J(l()),q(()=>K(x)&&Dm(l()))));Yv(r,{insert:!0,get selected(){return K(i)},onContextMenu:se}),G(e=>{t=Du(n,1,`jse-insert-area jse-after svelte-1qi6rc1`,null,t,e),Ru(n,`title`,hp)},[()=>({"jse-hovered":K(p)===vp,"jse-selected":K(x)&&Dm(l())})]),Z(e,n)};Q(me,e=>{J(u()),K(p),J(vp),K(x),J(Dm),J(l()),q(()=>!u().readOnly&&(K(p)===vp||K(x)&&Dm(l())))&&e(he)}),G((e,t)=>{ce=Du(ue,1,e,`svelte-1qi6rc1`,ce,t),Ru(ue,`data-path`,K(n)),Ru(ue,`aria-selected`,K(x)),le=ku(ue,``,le,{"--level":(K(g),q(()=>K(g).length))})},[()=>Cu((J(fh),K(_),J(u()),K(g),J(a()),q(()=>fh(`jse-json-node`,{"jse-expanded":K(_)},u().onClassName(K(g),a()))))),()=>({"jse-root":K(r),"jse-selected":K(x)&&jm(l()),"jse-selected-value":K(x)&&Am(l()),"jse-readonly":u().readOnly,"jse-hovered":K(p)===yp})]),Y(`mousedown`,ue,function(e){if((e.buttons===1||e.buttons===2)&&!((t=e.target).nodeName===`DIV`&&t.contentEditable===`true`||e.buttons===1&&Sf(e.target,`BUTTON`))){var t;e.stopPropagation(),e.preventDefault(),u().focus(),document.addEventListener(`mousemove`,E,!0),document.addEventListener(`mouseup`,ee);var n=kf(e.target),i=u().getJson(),o=u().getDocumentState();if(!l()||n===nf.after||n===nf.inside||l().type!==n&&l().type!==nf.multi||!ch(i,l(),K(g)))if(iy(iy().selecting=!0),iy(iy().selectionAnchor=K(g)),iy(iy().selectionAnchorType=n),iy(iy().selectionFocus=K(g)),e.shiftKey){var s=u().getSelection();s&&u().onSelect(eh(dh(s),K(g)))}else if(n===nf.multi)if(K(r)&&e.target.hasAttribute(`data-path`)){var c=T(ym(a(),o));u().onSelect(ah(c))}else u().onSelect(eh(K(g),K(g)));else i!==void 0&&u().onSelect(oh(n,K(g)));else e.button===0&&d()(e)}}),Y(`mousemove`,ue,function(e){if(iy().selecting){e.preventDefault(),e.stopPropagation(),iy().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var t=kf(e.target);D(K(g),iy().selectionFocus)&&t===iy().selectionAnchorType||(iy(iy().selectionFocus=K(g)),iy(iy().selectionAnchorType=t),u().onSelect(eh(iy().selectionAnchor||iy().selectionFocus,iy().selectionFocus)))}}),Y(`mouseover`,ue,function(e){iy().selecting||iy().dragging||(e.stopPropagation(),Cf(e.target,`data-type`,`selectable-value`)?V(p,yp):Cf(e.target,`data-type`,`selectable-key`)?V(p,void 0):Cf(e.target,`data-type`,`insert-selection-area-inside`)?V(p,_p):Cf(e.target,`data-type`,`insert-selection-area-after`)&&V(p,vp),clearTimeout(m))}),Y(`mouseout`,ue,function(e){e.stopPropagation(),m=window.setTimeout(()=>V(p,void 0))}),Z(e,ue),Ko()}var Fy={prefix:`fas`,iconName:`jsoneditor-expand`,icon:[512,512,[],``,`M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z`]},Iy={prefix:`fas`,iconName:`jsoneditor-collapse`,icon:[512,512,[],``,`m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z`]},Ly={prefix:`fas`,iconName:`jsoneditor-format`,icon:[512,512,[],``,`M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z`]},Ry={prefix:`fas`,iconName:`jsoneditor-compact`,icon:[512,512,[],``,`M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z`]};Lf(`/* over all fonts, sizes, and colors */
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
}`);var zy=X(`<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>`,1),By=X(`<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>`);function Vy(e,t){return(0,Fa.default)(typeof e==`string`?e.toLowerCase():e,typeof t==`string`?t.toLowerCase():t)}function Hy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=L(e,t);if(Ut(i)){if(n===void 0)throw Error(`Cannot sort: no property selected by which to sort the array`);return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=function(e,t){var n={boolean:0,number:1,string:2,undefined:4},r=3;return function(i,a){var o=L(i,e),s=L(a,e);if(typeof o!=typeof s){var c=n[typeof o]??r,l=n[typeof s]??r;return c>l?t:c<l?-t:0}return typeof o==`number`||typeof o==`boolean`?o>s?t:o<s?-t:0:gd(o)?0:t*Vy(o,s)}}(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:1),r=L(e,t);return[{op:`replace`,path:fn(t),value:r.slice(0).sort(n)}]}(e,t,n,r)}if(hd(i))return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=L(e,t),i=Object.keys(r).slice();i.sort((e,t)=>n*Vy(e,t));var a={};return i.forEach(e=>a[e]=r[e]),[{op:`replace`,path:fn(t),value:a}]}(e,t,r);throw Error(`Cannot sort: no array or object`)}Fl([`click`]),Lf(`/* over all fonts, sizes, and colors */
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
}`);var Uy=X(`<button type="button"> </button>`),Wy=X(`<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>`),Gy=X(`<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>`);function Ky(e,t){Go(t,!1);var n=$(t,`items`,9),r=$(t,`selectedItem`,9),i=$(t,`onSelect`,9);Qu(!0);var a=Gy(),o=H(a);pu(o,1,()=>(J(Ad),J(n()),q(()=>Ad(n(),100))),e=>e,(e,t)=>{var n,a=Uy(),o=H(a);G((e,i)=>{n=Du(a,1,`jse-navigation-bar-dropdown-item svelte-1k47orx`,null,n,{"jse-selected":K(t)===r()}),Ru(a,`title`,e),Kl(o,i)},[()=>(K(t),q(()=>K(t).toString())),()=>(J(Wf),K(t),q(()=>Wf(K(t).toString(),30)))]),Y(`click`,a,Xu(()=>i()(K(t)))),Z(e,a)});var s=U(o,2),c=e=>{var t=Wy();Ru(t,`title`,`Limited to 100 items`),Z(e,t)};Q(s,e=>{J(n()),q(()=>n().length>100)&&e(c)}),Z(e,a),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var qy=X(`<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>`),Jy=X(`<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>`);function Yy(e,t){Go(t,!1);var n,r=B(void 0,!0),i=B(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:o}=Wo(`absolute-popup`),s=$(t,`path`,9),c=$(t,`index`,9),l=$(t,`onSelect`,9),u=$(t,`getItems`,9),d=B(void 0,!0),f=B(!1,!0);function p(e){o(n),l()(K(r).concat(e))}W(()=>(J(s()),J(c())),()=>{V(r,s().slice(0,c()))}),W(()=>(J(s()),J(c())),()=>{V(i,s()[c()])}),Rc(),Qu(!0);var m,h=Jy(),g=H(h);ep(H(g),{get data(){return Ei}});var _=U(g,2),v=e=>{var t=qy(),n=H(t);G(()=>Kl(n,K(i))),Y(`click`,t,()=>p(K(i))),Z(e,t)};Q(_,e=>{K(i)!==void 0&&e(v)}),Yu(h,e=>V(d,e),()=>K(d)),G(()=>m=Du(g,1,`jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb`,null,m,{"jse-open":K(f)})),Y(`click`,g,function(){K(d)&&(V(f,!0),n=a(Ky,{items:u()(K(r)),selectedItem:K(i),onSelect:p},{anchor:K(d),closeOnOuterClick:!0,onClose:()=>{V(f,!1)}}))}),Z(e,h),Ko()}function Xy(e){var t,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(n=document).queryCommandSupported)!=null&&t.call(n,`copy`)){var r=document.createElement(`textarea`);r.value=e,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{document.execCommand(`copy`)}catch(e){console.error(e)}finally{document.body.removeChild(r)}return Promise.resolve()}return console.error(`Copy failed.`),Promise.resolve()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Zy=X(`<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>`),Qy=X(`<div class="jse-copied-text svelte-uyexy4">Copied!</div>`),$y=X(`<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>`);function eb(e,t){Go(t,!1);var n=B(),r=Wo(`absolute-popup`),i=$(t,`path`,8),a=$(t,`pathParser`,8),o=$(t,`onChange`,8),s=$(t,`onClose`,8),c=$(t,`onError`,8),l=$(t,`pathExists`,8),u=B(),d=B(),f=B(!1),p=void 0,m=B(!1);function h(){K(u).focus()}function g(e){try{var t=a().parse(e);return function(e){if(!l()(e))throw Error(`Path does not exist in current document`)}(t),{path:t,error:void 0}}catch(e){return{path:void 0,error:e}}}au(()=>{h()}),ou(()=>{clearTimeout(p)}),W(()=>(J(a()),J(i())),()=>{V(d,a().stringify(i()))}),W(()=>(K(f),K(d)),()=>{V(n,K(f)?g(K(d)).error:void 0)}),Rc(),Qu();var _,v=$y(),y=H(v);Yu(y,e=>V(u,e),()=>K(u));var b=U(y,2),x=e=>{var t=Zy();ep(H(t),{get data(){return zi}}),bu(t,(e,t)=>Zh?.(e,t),()=>R({text:String(K(n)||``)},r)),Z(e,t)};Q(b,e=>{K(n)&&e(x)});var S=U(b,2),C=e=>{Z(e,Qy())};Q(S,e=>{K(m)&&e(C)});var w,T=U(S,2);ep(H(T),{get data(){return Gi}}),G(()=>{_=Du(v,1,`jse-navigation-bar-path-editor svelte-uyexy4`,null,_,{error:K(n)}),Lu(y,K(d)),w=Du(T,1,`jse-navigation-bar-copy svelte-uyexy4`,null,w,{copied:K(m)})}),Y(`keydown`,y,Xu(function(e){var t=Pf(e);if(t===`Escape`&&(e.preventDefault(),s()()),t===`Enter`){e.preventDefault(),V(f,!0);var n=g(K(d));n.path===void 0?c()(n.error):o()(n.path)}})),Y(`input`,y,function(e){V(d,e.currentTarget.value)}),Y(`click`,T,function(){Xy(K(d)),V(m,!0),p=window.setTimeout(()=>V(m,!1),1e3),h()}),Z(e,v),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var tb=X(`<!> <!>`,1),nb=X(`<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>`);function rb(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=sd(`jsoneditor:NavigationBar`),a=$(t,`json`,9),o=$(t,`selection`,9),s=$(t,`onSelect`,9),c=$(t,`onError`,9),l=$(t,`pathParser`,9),u=B(void 0,!0),d=B(!1,!0);function f(e){i(`get items for path`,e);var t=L(a(),e);if(Array.isArray(t))return A(0,t.length).map(String);if(hd(t)){var n=Object.keys(t).slice(0);return n.sort(Vy),n}return[]}function p(e){return un(a(),e)}function m(e){i(`select path`,JSON.stringify(e)),s()(eh(e,e))}function h(){V(d,!1)}function g(e){h(),m(e)}W(()=>(J(o()),uh),()=>{V(n,o()?uh(o()):[])}),W(()=>(J(a()),K(n)),()=>{V(r,gd(L(a(),K(n))))}),W(()=>K(n),()=>{K(n),setTimeout(()=>{if(K(u)&&K(u).scrollTo){var e=K(u).scrollWidth-K(u).clientWidth;e>0&&(i(`scrollTo `,e),K(u).scrollTo({left:e,behavior:`smooth`}))}})}),Rc(),Qu(!0);var _=nb(),v=H(_),y=e=>{var t=tb(),i=Dc(t);pu(i,1,()=>K(n),du,(e,t,r)=>{Yy(e,{getItems:f,get path(){return K(n)},index:r,onSelect:m})});var a=U(i,2),o=e=>{Yy(e,{getItems:f,get path(){return K(n)},get index(){return K(n),q(()=>K(n).length)},onSelect:m})};Q(a,e=>{K(r)&&e(o)}),Z(e,t)},b=e=>{eb(e,{get path(){return K(n)},onClose:h,onChange:g,get onError(){return c()},pathExists:p,get pathParser(){return l()}})};Q(v,e=>{K(d)?e(b,!1):e(y)});var x,S=U(v,2),C=H(S),w=H(C),T=U(C,2),E=rc(()=>K(d)?Ni:xi);ep(T,{get data(){return K(E)}}),Yu(_,e=>V(u,e),()=>K(u)),G(e=>{x=Du(S,1,`jse-navigation-bar-edit svelte-hjhal6`,null,x,{flex:!K(d),editing:K(d)}),Ru(S,`title`,K(d)?`Cancel editing the selected path`:`Edit the selected path`),Kl(w,e)},[()=>(J(gd),J(a()),K(d),q(()=>gd(a())||K(d)?`\xA0`:`Navigation bar`))]),Y(`click`,S,function(){V(d,!K(d))}),Z(e,_),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var ib=X(`<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>`),ab=X(`<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>`),ob=X(`<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>`);function sb(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=sd(`jsoneditor:SearchBox`),o=$(t,`json`,9),s=$(t,`documentState`,9),c=$(t,`parser`,9),l=$(t,`showSearch`,9),u=$(t,`showReplace`,13),d=$(t,`readOnly`,9),f=$(t,`columns`,9),p=$(t,`onSearch`,9),m=$(t,`onFocus`,9),h=$(t,`onPatch`,9),g=$(t,`onClose`,9),_=B(``,!0),v=``,y=B(``,!0),b=B(!1,!0),x=B(void 0,!0),S=ie(function(e){return pe.apply(this,arguments)},300),C=ie(function(e){return me.apply(this,arguments)},300);function w(){u(!u()&&!d())}function E(e){e.stopPropagation();var t=Pf(e);t===`Enter`&&(e.preventDefault(),K(_)===v?oe():S.flush()),t===`Shift+Enter`&&(e.preventDefault(),ce()),t===`Ctrl+Enter`&&(e.preventDefault(),u()?re():oe()),t===`Ctrl+H`&&(e.preventDefault(),w()),t===`Escape`&&(e.preventDefault(),ge())}function ee(e){Pf(e)===`Enter`&&(e.preventDefault(),e.stopPropagation(),re())}function te(){return ne.apply(this,arguments)}function ne(){return(ne=Va(function*(){Cs(),yield S.flush()})).apply(this,arguments)}function re(){return O.apply(this,arguments)}function O(){return(O=Va(function*(){if(!d()){var e=K(x)?.activeItem;if(a(`handleReplace`,{replaceText:K(y),activeItem:e}),K(x)&&e&&o()!==void 0){V(x,R(R({},Ah(K(x))),{},{activeIndex:K(r)}));var{operations:t,newSelection:n}=Fh(o(),s(),K(y),e,c());h()(t,(e,t)=>({state:t,selection:n})),Cs(),yield C.flush(),yield ue()}}})).apply(this,arguments)}function ae(){return k.apply(this,arguments)}function k(){return(k=Va(function*(){if(!d()){a(`handleReplaceAll`,{text:K(_),replaceText:K(y)});var{operations:e,newSelection:t}=function(e,t,n,r,i){for(var a=jh(n,e,{maxResults:1/0}),o=[],s=0;s<a.length;s++){var c=a[s-1],l=a[s];s!==0&&l.field===c.field&&D(l.path,c.path)?T(o).items.push(l):o.push({path:l.path,field:l.field,items:[l]})}o.sort((e,t)=>e.field===t.field?t.path.length-e.path.length:e.field===of.key?1:-1);var u,d=[];return o.forEach(n=>{var{field:a,path:o,items:s}=n;if(a===of.key){var c=St(o),l=L(e,c),f=T(o),p=yh(c,Object.keys(l),f,Ph(f,r,s));d=d.concat(p),u=Hm(e,p)}else{if(a!==of.value)throw Error(`Cannot replace: unknown type of search result field ${a}`);var m=L(e,o);if(m===void 0)throw Error(`Cannot replace: path not found ${fn(o)}`);var h=typeof m==`string`?m:String(m),g=gm(e,t,o),_=Ph(h,r,s),v=[{op:`replace`,path:fn(o),value:g?_:Td(_,i)}];d=d.concat(v),u=Hm(e,v)}}),{operations:d,newSelection:u}}(o(),s(),K(_),K(y),c());h()(e,(e,n)=>({state:n,selection:t})),yield ue()}})).apply(this,arguments)}function A(e){e.select()}function oe(){return se.apply(this,arguments)}function se(){return(se=Va(function*(){V(x,K(x)?Ah(K(x)):void 0),yield ue()})).apply(this,arguments)}function ce(){return le.apply(this,arguments)}function le(){return le=Va(function*(){V(x,K(x)?function(e){var t=e.activeIndex>0?e.activeIndex-1:e.items.length-1,n=e.items[t],r=e.items.map((e,n)=>R(R({},e),{},{active:n===t}));return R(R({},e),{},{items:r,activeItem:n,activeIndex:t})}(K(x)):void 0),yield ue()}),le.apply(this,arguments)}function ue(){return de.apply(this,arguments)}function de(){return(de=Va(function*(){a(`handleFocus`,K(x));var e=K(x)?.activeItem;e&&o()!==void 0&&(yield m()(e.path,e.resultIndex))})).apply(this,arguments)}function fe(){return fe=Va(function*(e){yield he(e,K(_),o())}),fe.apply(this,arguments)}function pe(){return pe=Va(function*(e){yield he(l(),e,o()),yield ue()}),pe.apply(this,arguments)}function me(){return me=Va(function*(e){yield he(l(),K(_),e)}),me.apply(this,arguments)}function he(e,t,n){return j.apply(this,arguments)}function j(){return j=Va(function*(e,t,n){return e?(a(`applySearch`,{showSearch:e,text:t}),t===``?(a(`clearing search result`),K(x)!==void 0&&V(x,void 0),Promise.resolve()):(v=t,V(b,!0),new Promise(e=>{setTimeout(()=>{V(x,function(e,t){var n=t!=null&&t.activeItem?Ih(t.activeItem):void 0,r=e.findIndex(e=>D(n,Ih(e))),i=r===-1?t?.activeIndex!==void 0&&t?.activeIndex<e.length?t?.activeIndex:e.length>0?0:-1:r,a=e.map((e,t)=>R(R({resultIndex:t},e),{},{active:t===i}));return{items:a,activeItem:a[i],activeIndex:i}}(jh(t,n,{maxResults:sp,columns:f()}),K(x))),V(b,!1),e()})}))):(K(x)&&V(x,void 0),Promise.resolve())}),j.apply(this,arguments)}function ge(){a(`handleClose`),S.cancel(),C.cancel(),he(!1,K(_),o()),g()()}W(()=>K(x),()=>{var e;V(n,((e=K(x))==null||(e=e.items)==null?void 0:e.length)||0)}),W(()=>K(x),()=>{V(r,K(x)?.activeIndex||0)}),W(()=>(K(n),sp),()=>{V(i,K(n)>=sp?`999+`:String(K(n)))}),W(()=>(J(p()),K(x)),()=>{p()(K(x))}),W(()=>J(l()),()=>{(function(e){fe.apply(this,arguments)})(l())}),W(()=>K(_),()=>{S(K(_))}),W(()=>J(o()),()=>{C(o())}),Rc(),Qu(!0);var M=Vl(),N=Dc(M),_e=e=>{var t=ob(),a=H(t),o=H(a),s=e=>{var t=ib(),n=H(t),r=rc(()=>u()?qi:mi);ep(n,{get data(){return K(r)}}),Y(`click`,t,w),Z(e,t)};Q(o,e=>{d()||e(s)});var c=H(U(o,2)),l=H(c),f=H(l),p=e=>{ep(e,{get data(){return yi},spin:!0})},m=e=>{ep(e,{get data(){return hi}})};Q(f,e=>{K(b)?e(p):e(m,!1)});var h=U(l,2),g=H(h);Lc(()=>Wu(g,()=>K(_),e=>V(_,e))),bu(g,e=>A?.(e)),Lc(()=>Y(`paste`,g,te));var v,x=U(h,2),S=H(x),C=U(x,2);ep(H(C),{get data(){return Ii}});var T=U(C,2);ep(H(T),{get data(){return vi}});var D=U(T,2);ep(H(D),{get data(){return Pi}});var ne=U(c,2),ie=e=>{var t=ab(),n=H(t),r=U(n,2),i=U(r,2);Wu(n,()=>K(y),e=>V(y,e)),Y(`keydown`,n,ee),Y(`click`,r,re),Y(`click`,i,ae),Z(e,t)};Q(ne,e=>{u()&&!d()&&e(ie)}),G(()=>{v=Du(x,1,`jse-search-count svelte-1x1x8q0`,null,v,{"jse-visible":K(_)!==``}),Kl(S,`${K(r)!==-1&&K(r)<K(n)?`${K(r)+1}/`:``}${K(i)??``}`)}),Y(`click`,C,oe),Y(`click`,T,ce),Y(`click`,D,ge),Y(`keydown`,a,E),Z(e,t)};Q(N,e=>{l()&&e(_e)}),Z(e,M),Ko()}var cb=Symbol(`path`);function lb(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,r={};Array.isArray(e)&&function(e,t,n){if(e.length<t)e.forEach(n);else for(var r=t>1?(e.length-1)/(t-1):e.length,i=0;i<t;i++){var a=Math.floor(i*r);n(e[a],a,e)}}(e,n,e=>{hd(e)?ub(e,r,t):r[cb]=!0});var i=[];return cb in r&&i.push([]),db(r,[],i,t),i}function ub(e,t,n){for(var r in e){var i=e[r],a=t[r]||(t[r]={});hd(i)&&n?ub(i,a,n):a[cb]===void 0&&(a[cb]=!0)}}function db(e,t,n,r){for(var i in e){var a=t.concat(i),o=e[i];o&&!0===o[cb]&&n.push(a),Wt(o)&&r&&db(o,a,n,r)}}function fb(e,t,n,r,i,a){for(var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,s=Ut(n)?n.length:0,c=function(e,t){var n=Object.values(e);return Et(n)?t:n.reduce((e,t)=>e+t)/n.length}(r,i),l=e-o,u=t+2*o,d=e=>r[e]||i,f=0,p=a;p<l&&f<s;)p+=d(f),f++;f>0&&(p-=d(--f));for(var m=f,h=0;h<u&&m<s;)h+=d(m),m++;for(var g=0,_=m;_<s;_++)g+=d(_);return{startIndex:f,endIndex:m,startHeight:p,endHeight:g,averageItemHeight:c,visibleHeight:h,visibleItems:Ut(n)?n.slice(f,m):[]}}function pb(e,t,n,r){for(var{rowIndex:i}=mb(e,t),a=0,o=0;o<i;o++)a+=n[o]||r;return a}function mb(e,t){var[n,...r]=e,i=parseInt(n,10);return{rowIndex:isNaN(i)?-1:i,columnIndex:t.findIndex(e=>Km(r,e))}}function hb(e,t){var{rowIndex:n,columnIndex:r}=e;return[String(n),...t[r]]}function gb(e,t){var[n,r]=Ft(e,e=>pd(e.path[0]));return{root:r,rows:Ot(xt(n,vb),e=>{var n={row:[],columns:{}};return e.forEach(e=>{var r=function(e,t){var n=mb(e.path,t);return n.columnIndex===-1?-1:n.columnIndex}(e,t);r===-1?n.row.push(e):(n.columns[r]===void 0&&(n.columns[r]=[]),n.columns[r].push(e))}),n})}}function _b(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:`Multiple validation issues: `+t.map(e=>tg(e.path)+` `+e.message).join(`, `),severity:af.warning}}function vb(e){return parseInt(e.path[0],10)}function yb(e,t,n){return t.some(t=>function(e,t,n){if(!e)return!1;if(t.op===`replace`){var{rowIndex:r,columnIndex:i}=mb(dn(t.path),n),a=n.findIndex(t=>D(t,e.path));if(r!==-1&&i!==-1&&i!==a)return!1}return!0}(e,t,n))?void 0:e}var bb=sd(`jsoneditor:actions`);function xb(e){return Sb.apply(this,arguments)}function Sb(){return Sb=Va(function*(e){var{json:t,selection:n,indentation:r,readOnly:i,parser:a,onPatch:o}=e;if(!i&&t!==void 0&&n&&rh(n)){var s=th(t,n,r,a);if(s!==void 0){bb(`cut`,{selection:n,clipboard:s,indentation:r}),yield Xy(s);var{operations:c,newSelection:l}=Eh(t,n);o(c,(e,t)=>({state:t,selection:l}))}}}),Sb.apply(this,arguments)}function Cb(e){return wb.apply(this,arguments)}function wb(){return wb=Va(function*(e){var{json:t,selection:n,indentation:r,parser:i}=e,a=th(t,n,r,i);a!==void 0&&(bb(`copy`,{clipboard:a,indentation:r}),yield Xy(a))}),wb.apply(this,arguments)}function Tb(e){var{clipboardText:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onChangeText:s,onPasteMultilineText:c,openRepairModal:l}=e;if(!i)try{u(t)}catch{l(t,e=>{bb(`repaired pasted text: `,e),u(e)})}function u(e){if(n!==void 0){var i=r||Xm([]),l=Sh(n,i,e,a),u=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:pp;if(e.length>r||!/\n/.test(e))return!1;var i=t.some(e=>e.op===`replace`&&Array.isArray(e.value)),a=t.filter(e=>e.op===`add`).length>1;if(!i&&!a)return!1;try{return Ld(e,n.parse),!1}catch{return!0}}(t,l,a);bb(`paste`,{pastedText:e,operations:l,ensureSelection:i,pasteMultilineText:u}),o(l,(e,t)=>{var r=t;return l.filter(e=>(Gt(e)||qt(e))&&gd(e.value)).forEach(t=>{var i=Tn(n,t.path);r=xm(e,r,i)}),{state:r}}),u&&c(e)}else bb(`paste text`,{pastedText:e}),s(t,(e,t)=>{if(e)return{state:xm(e,t,[])}})}}function Eb(e){var{json:t,text:n,selection:r,keepSelection:i,readOnly:a,onChange:o,onPatch:s}=e;if(!a&&r){var c=t!==void 0&&(km(r)||Am(r))?eh(r.path,r.path):r;if(Et(uh(r)))bb(`remove root`,{selection:r}),o&&o({text:``,json:void 0},t===void 0?{text:n||``,json:t}:{text:void 0,json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:l,newSelection:u}=Eh(t,c);bb(`remove`,{operations:l,selection:r,newSelection:u}),s(l,(e,t)=>({state:t,selection:i?r:u}))}}}function Db(e){var{insertType:t,selectInside:n,initialValue:r,json:i,selection:a,readOnly:o,parser:s,onPatch:c,onReplaceJson:l}=e;if(!o){var u=function(e,t,n){if(n===`object`)return{};if(n===`array`)return[];if(n===`structure`&&e!==void 0){var r=L(e,t?Im(t):[]);if(Array.isArray(r)&&!Et(r)){var i=yt(r);return gd(i)?ut(i,e=>Array.isArray(e)?[]:hd(e)?void 0:``):``}}return``}(i,a,t);if(i!==void 0){var d=s.stringify(u),f=Sh(i,a,d,s);bb(`onInsert`,{insertType:t,operations:f,newValue:u,data:d});var p=T(f.filter(e=>e.op===`add`||e.op===`replace`));c(f,(e,t,i)=>{if(p){var a=Tn(e,p.path);if(gd(u))return{state:im(e,t,a,Tm),selection:n?Qm(a):i};if(u===``){var o=Et(a)?void 0:L(e,St(a));return{state:im(e,t,a,Em),selection:hd(o)?Ym(a,r):Zm(a,r)}}}}),bb(`after patch`)}else{bb(`onInsert`,{insertType:t,newValue:u});var m=[];l(u,(e,t)=>({state:xm(e,t,m),selection:gd(u)?Qm(m):Zm(m)}))}}}function Ob(e){return kb.apply(this,arguments)}function kb(){return kb=Va(function*(e){var{char:t,selectInside:n,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c,onSelect:l}=e;a||(km(i)?l(R(R({},i),{},{edit:!0,initialValue:t})):t===`{`?Db({insertType:`object`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):t===`[`?Db({insertType:`array`,selectInside:n,initialValue:void 0,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c}):Am(i)&&r!==void 0?gd(L(r,i.path))||l(R(R({},i),{},{edit:!0,initialValue:t})):(bb(`onInsertValueWithCharacter`,{char:t}),yield function(e){return Ab.apply(this,arguments)}({char:t,json:r,selection:i,readOnly:a,parser:o,onPatch:s,onReplaceJson:c})))}),kb.apply(this,arguments)}function Ab(){return Ab=Va(function*(e){var{char:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s}=e;i||Db({insertType:`value`,selectInside:!1,initialValue:t,json:n,selection:r,readOnly:i,parser:a,onPatch:o,onReplaceJson:s})}),Ab.apply(this,arguments)}Lf(`/* over all fonts, sizes, and colors */
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
}`);var jb=X(`<div class="jse-json-preview svelte-25xmyd"> </div>`);function Mb(e,t){Go(t,!1);var n=B(),r=B(),i=$(t,`text`,8),a=$(t,`json`,8),o=$(t,`indentation`,8),s=$(t,`parser`,8);W(()=>(J(a()),J(i())),()=>{V(n,a()===void 0?{text:i()||``}:{json:a()})}),W(()=>(K(n),J(o()),J(s()),up),()=>{V(r,Wf(qd(K(n),o(),s()),up))}),Rc(),Qu();var c=jb(),l=H(c);G(()=>Kl(l,K(r))),Z(e,c),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Nb=X(`<button type="button"><!> <!></button>`);function Pb(e,t){Go(t,!1);var n=$(t,`item`,8),r=$(t,`className`,8,void 0),i=$(t,`onRequestClose`,8);Qu();var a=Nb(),o=H(a),s=e=>{ep(e,{get data(){return J(n()),q(()=>n().icon)}})};Q(o,e=>{J(n()),q(()=>n().icon)&&e(s)});var c=U(o,2),l=e=>{var t=Bl();G(()=>Kl(t,(J(n()),q(()=>n().text)))),Z(e,t)};Q(c,e=>{J(n()),q(()=>n().text)&&e(l)}),G(e=>{Du(a,1,e,`svelte-16jz6ui`),Ru(a,`title`,(J(n()),q(()=>n().title))),a.disabled=(J(n()),q(()=>n().disabled||!1))},[()=>Cu((J(fh),J(r()),J(n()),q(()=>fh(`jse-context-menu-button`,r(),n().className))))]),Y(`click`,a,e=>{i()(),n().onClick(e)}),Z(e,a),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Fb=X(`<li class="svelte-bov1j6"><button type="button"><!> </button></li>`),Ib=X(`<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>`);Lf(`/* over all fonts, sizes, and colors */
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
}`);var Lb=X(`<button type="button" slot="defaultItem"><!> </button>`);function Rb(e,t){Go(t,!1);var n=B(),r=$(t,`item`,8),i=$(t,`className`,8,void 0),a=$(t,`onRequestClose`,8);W(()=>(J(r()),J(a())),()=>{V(n,r().items.map(e=>R(R({},e),{},{onClick:t=>{a()(),e.onClick(t)}})))}),Rc(),Qu(),function(e,t){Go(t,!1);var n=B(void 0,!0),r=$(t,`items`,25,()=>[]),i=$(t,`title`,9,void 0),a=$(t,`width`,9,`120px`),o=B(!1,!0);function s(){V(o,!1)}function c(e){Pf(e)===`Escape`&&(e.preventDefault(),V(o,!1))}au(()=>{document.addEventListener(`click`,s),document.addEventListener(`keydown`,c)}),ou(()=>{document.removeEventListener(`click`,s),document.removeEventListener(`keydown`,c)}),W(()=>J(r()),()=>{V(n,r().every(e=>!0===e.disabled))}),Rc(),Qu(!0);var l=Ib(),u=H(l);vu(u,t,`defaultItem`,{},null);var d,f=U(u,2);ep(H(f),{get data(){return qi}});var p,m=U(f,2);pu(H(m),5,r,du,(e,t)=>{var n=Fb(),r=H(n),i=H(r),a=e=>{ep(e,{get data(){return K(t),q(()=>K(t).icon)}})};Q(i,e=>{K(t),q(()=>K(t).icon)&&e(a)});var o=U(i);G(()=>{var e;Ru(r,`title`,(K(t),q(()=>K(t).title))),r.disabled=(K(t),q(()=>K(t).disabled)),Du(r,1,Cu((K(t),q(()=>K(t).className))),`svelte-bov1j6`),Kl(o,` ${(K(t),e=q(()=>K(t).text))!==null&&e!==void 0?e:``}`)}),Y(`click`,r,e=>K(t).onClick(e)),Z(e,n)}),G(()=>{Ru(l,`title`,i()),d=Du(f,1,`jse-open-dropdown svelte-bov1j6`,null,d,{"jse-visible":K(o)}),f.disabled=K(n),p=Du(m,1,`jse-dropdown-items svelte-bov1j6`,null,p,{"jse-visible":K(o)}),ku(m,`width: ${a()??``};`)}),Y(`click`,f,function(){var e=K(o);setTimeout(()=>V(o,!e))}),Y(`click`,l,s),Z(e,l),Ko()}(e,{get width(){return J(r()),q(()=>r().width)},get items(){return K(n)},$$slots:{defaultItem:(e,t)=>{var n=Lb(),o=H(n),s=e=>{ep(e,{get data(){return J(r()),q(()=>r().main.icon)}})};Q(o,e=>{J(r()),q(()=>r().main.icon)&&e(s)});var c=U(o);G(e=>{var t;Du(n,1,e,`svelte-1y5l9l1`),Ru(n,`title`,(J(r()),q(()=>r().main.title))),n.disabled=(J(r()),q(()=>r().main.disabled||!1)),Kl(c,` ${(J(r()),t=q(()=>r().main.text))!==null&&t!==void 0?t:``}`)},[()=>Cu((J(fh),J(i()),J(r()),q(()=>fh(`jse-context-menu-button`,i(),r().main.className))))]),Y(`click`,n,e=>{a()(),r().main.onClick(e)}),Z(e,n)}}}),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`);var zb=X(`<div class="jse-separator svelte-1shjn02"></div>`),Bb=X(`<div class="jse-label svelte-1shjn02"> </div>`),Vb=X(`<div class="jse-column svelte-1shjn02"></div>`),Hb=X(`<div class="jse-separator svelte-1shjn02"></div>`),Ub=X(`<div class="jse-row svelte-1shjn02"></div>`),Wb=X(`<div class="jse-separator svelte-1shjn02"></div>`),Gb=X(`<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>`),Kb=X(`<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>`);function qb(e,t){Go(t,!1);var n=$(t,`items`,9),r=$(t,`onRequestClose`,9),i=$(t,`tip`,9),a=B(void 0,!0);au(()=>{var e=Array.from(K(a).querySelectorAll(`button`)).find(e=>!e.disabled);e&&e.focus()});var o={ArrowUp:`Up`,ArrowDown:`Down`,ArrowLeft:`Left`,ArrowRight:`Right`};function s(e){return console.error(`Unknown type of context menu item`,e),`???`}Qu(!0);var c=Kb(),l=H(c);pu(l,1,n,du,(e,t)=>{var n=Vl(),i=Dc(n),a=e=>{Pb(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=e=>{var n=Vl(),i=Dc(n),a=e=>{Rb(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=e=>{var n=Vl(),i=Dc(n),a=e=>{var n=Ub();pu(n,5,()=>(K(t),q(()=>K(t).items)),du,(e,t)=>{var n=Vl(),i=Dc(n),a=e=>{Pb(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=e=>{var n=Vl(),i=Dc(n),a=e=>{Rb(e,{get item(){return K(t)},get onRequestClose(){return r()}})},o=e=>{var n=Vl(),i=Dc(n),a=e=>{var n=Vb();pu(n,5,()=>(K(t),q(()=>K(t).items)),du,(e,t)=>{var n=Vl(),i=Dc(n),a=e=>{Pb(e,{className:`left`,get item(){return K(t)},get onRequestClose(){return r()}})},o=e=>{var n=Vl(),i=Dc(n),a=e=>{Rb(e,{className:`left`,get item(){return K(t)},get onRequestClose(){return r()}})},o=e=>{var n=Vl(),r=Dc(n),i=e=>{Z(e,zb())},a=e=>{var n=Vl(),r=Dc(n),i=e=>{var n=Bb(),r=H(n);G(()=>Kl(r,(K(t),q(()=>K(t).text)))),Z(e,n)},a=e=>{var n=Bl();G(e=>Kl(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(r,e=>{J(jp),K(t),q(()=>jp(K(t)))?e(i):e(a,!1)},!0),Z(e,n)};Q(r,e=>{J(Ap),K(t),q(()=>Ap(K(t)))?e(i):e(a,!1)},!0),Z(e,n)};Q(i,e=>{J(Np),K(t),q(()=>Np(K(t)))?e(a):e(o,!1)},!0),Z(e,n)};Q(i,e=>{J(Mp),K(t),q(()=>Mp(K(t)))?e(a):e(o,!1)}),Z(e,n)}),Z(e,n)},o=e=>{var n=Vl(),r=Dc(n),i=e=>{Z(e,Hb())},a=e=>{var n=Bl();G(e=>Kl(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(r,e=>{J(Ap),K(t),q(()=>Ap(K(t)))?e(i):e(a,!1)},!0),Z(e,n)};Q(i,e=>{J(Fp),K(t),q(()=>Fp(K(t)))?e(a):e(o,!1)},!0),Z(e,n)};Q(i,e=>{J(Np),K(t),q(()=>Np(K(t)))?e(a):e(o,!1)},!0),Z(e,n)};Q(i,e=>{J(Mp),K(t),q(()=>Mp(K(t)))?e(a):e(o,!1)}),Z(e,n)}),Z(e,n)},o=e=>{var n=Vl(),r=Dc(n),i=e=>{Z(e,Wb())},a=e=>{var n=Bl();G(e=>Kl(n,e),[()=>(K(t),q(()=>s(K(t))))]),Z(e,n)};Q(r,e=>{J(Ap),K(t),q(()=>Ap(K(t)))?e(i):e(a,!1)},!0),Z(e,n)};Q(i,e=>{J(Pp),K(t),q(()=>Pp(K(t)))?e(a):e(o,!1)},!0),Z(e,n)};Q(i,e=>{J(Np),K(t),q(()=>Np(K(t)))?e(a):e(o,!1)},!0),Z(e,n)};Q(i,e=>{J(Mp),K(t),q(()=>Mp(K(t)))?e(a):e(o,!1)}),Z(e,n)});var u=U(l,2),d=e=>{var t=Gb(),n=H(H(t));ep(H(n),{get data(){return si}});var r=H(U(n,2));G(()=>Kl(r,i())),Z(e,t)};Q(u,e=>{i()&&e(d)}),Yu(c,e=>V(a,e),()=>K(a)),Y(`keydown`,c,function(e){var t=o[Pf(e)];if(t&&e.target){e.preventDefault();var n=Mf({allElements:Array.from(K(a).querySelectorAll(`button:not([disabled])`)),currentElement:e.target,direction:t,hasPrio:e=>e.getAttribute(`data-type`)!==`jse-open-dropdown`});n&&n.focus()}}),Z(e,c),Ko()}Lf(`/* over all fonts, sizes, and colors */
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
}`),X(`<option> </option>`),X(`<select></select>`);var Jb,Yb;function Xb(e,t){return Jb||=(Yb=new WeakMap,new ResizeObserver(e=>{for(var t of e){var n=Yb.get(t.target);n&&n(t.target)}})),Yb.set(e,t),Jb.observe(e),{destroy:()=>{Yb.delete(e),Jb.unobserve(e)}}}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Zb=X(`<!> <!>`,1),Qb=X(`<div class="jse-search-box-background svelte-10mlrw4"></div>`),$b=X(`<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>`,1),ex=X(`<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>`,1),tx=X(`<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>`),nx=X(`<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>`,1);function rx(e,t){Go(t,!1);var n=B(void 0,!0),r=sd(`jsoneditor:TreeMode`),i=typeof window>`u`;r(`isSSR:`,i);var a=Ht(),o=Ht(),{openAbsolutePopup:s,closeAbsolutePopup:c}=Wo(`absolute-popup`),l=B(void 0,!0),u=B(void 0,!0),d=B(void 0,!0),f=!1,p=fv(),m=$(t,`readOnly`,9),h=$(t,`externalContent`,9),g=$(t,`externalSelection`,9),_=$(t,`history`,9),v=$(t,`truncateTextSize`,9),y=$(t,`mainMenuBar`,9),b=$(t,`navigationBar`,9),x=$(t,`escapeControlCharacters`,9),S=$(t,`escapeUnicodeCharacters`,9),C=$(t,`parser`,9),w=$(t,`parseMemoizeOne`,9),E=$(t,`validator`,9),ee=$(t,`validationParser`,9),te=$(t,`pathParser`,9),ne=$(t,`indentation`,9),re=$(t,`onError`,9),ie=$(t,`onChange`,9),O=$(t,`onChangeMode`,9),ae=$(t,`onSelect`,9),k=$(t,`onUndo`,9),A=$(t,`onRedo`,9),se=$(t,`onRenderValue`,9),ce=$(t,`onRenderMenu`,9),le=$(t,`onRenderContextMenu`,9),ue=$(t,`onClassName`,9),de=$(t,`onFocus`,9),fe=$(t,`onBlur`,9),pe=$(t,`onSortModal`,9),me=$(t,`onTransformModal`,9),he=$(t,`onJSONEditorModal`,9),j=!1,ge=B(!1,!0),M=B(void 0,!0);bv({onMount:au,onDestroy:ou,getWindow:()=>Ef(K(d)),hasFocus:()=>j&&document.hasFocus()||Df(K(d)),onFocus:()=>{f=!0,de()&&de()()},onBlur:()=>{f=!1,fe()&&fe()()}});var N=B(void 0,!0),_e=B(void 0,!0),ve=void 0,ye=!1,P=B(Yp({json:K(N)}),!0),F=B(Nm(g())?g():void 0,!0);function be(e){V(F,e)}au(()=>{if(K(F)){var e=uh(K(F));V(P,im(K(N),K(P),e,Em)),setTimeout(()=>Mt(e))}});var xe,Se=B(void 0,!0),Ce=B(void 0,!0),we=B(void 0,!0),Te=B(void 0,!0),Ee=B(!1,!0),De=B(!1,!0);function Oe(e){V(Te,(xe=e)?Bh(K(N),xe.items):void 0)}function ke(e,t){return Ae.apply(this,arguments)}function Ae(){return(Ae=Va(function*(e,t){V(P,im(K(N),K(P),e,Em)),yield Ot(e,{element:jt(t)})})).apply(this,arguments)}function je(){V(Ee,!1),V(De,!1),nn()}function Me(e){r(`select validation error`,e),V(F,Xm(e.path)),Ot(e.path)}function Ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wm;r(`expand`),V(P,im(K(N),K(P),e,t))}function Pe(e,t){V(P,am(K(N),K(P),e,t)),K(F)&&function(e,t){return Km(uh(e),t)&&(uh(e).length>t.length||Om(e))}(K(F),e)&&V(F,void 0)}var Fe=B(!1,!0),I=B([],!0),Ie=B(void 0,!0),Le=oe(_v);function Re(e,t,n,i){pv(()=>{var a;try{a=Le(e,t,n,i)}catch(e){a=[{path:[],message:`Failed to validate: `+e.message,severity:af.warning}]}D(a,K(I))||(r(`validationErrors changed:`,a),V(I,a),V(Ie,function(e,t){var n;return t.forEach(t=>{n=gv(e,n,t.path,(e,n)=>R(R({},n),{},{validationError:t}))}),t.forEach(t=>{for(var r=t.path;r.length>0;)r=St(r),n=gv(e,n,r,(e,t)=>t.validationError?t:R(R({},t),{},{validationError:{isChildError:!0,path:r,message:`Contains invalid data`,severity:af.warning}}))}),n}(e,K(I))))},e=>r(`validationErrors updated in ${e} ms`))}function ze(){return r(`validate`),ve?{parseError:ve,isRepairable:!1}:(Re(K(N),E(),C(),ee()),Et(K(I))?void 0:{validationErrors:K(I)})}function Be(){return K(N)}function Ve(){return K(P)}function He(){return K(F)}function Ue(e){r(`applyExternalContent`,{updatedContent:e}),Wd(e)?function(e){if(e!==void 0){var t=!D(K(N),e);if(r(`update external json`,{isChanged:t,currentlyText:K(N)===void 0}),t){var n={documentState:K(P),selection:K(F),json:K(N),text:K(_e),textIsRepaired:K(Fe)};V(N,e),V(P,em(e,K(P))),We(K(N)),V(_e,void 0),V(Fe,!1),ve=void 0,Ge(K(N)),Ke(n)}}}(e.json):Ud(e)&&function(e){if(!(e===void 0||Wd(h()))){var t=e!==K(_e);if(r(`update external text`,{isChanged:t}),t){var n={documentState:K(P),selection:K(F),json:K(N),text:K(_e),textIsRepaired:K(Fe)};try{V(N,w()(e)),V(P,em(K(N),K(P))),We(K(N)),V(_e,e),V(Fe,!1),ve=void 0}catch(t){try{V(N,w()(yr(e))),V(P,em(K(N),K(P))),We(K(N)),V(_e,e),V(Fe,!0),ve=void 0,Ge(K(N))}catch{V(N,void 0),V(P,void 0),V(_e,h().text),V(Fe,!1),ve=K(_e)!==void 0&&K(_e)!==``?Bd(K(_e),t.message||String(t)):void 0}}Ge(K(N)),Ke(n)}}}(e.text)}function We(e){ye||(ye=!0,V(P,xm(e,K(P),[])))}function Ge(e){K(F)&&(un(e,dh(K(F)))&&un(e,uh(K(F)))||(r(`clearing selection: path does not exist anymore`,K(F)),V(F,Vm(e,K(P)))))}function Ke(e){if(e.json!==void 0||e.text!==void 0){var t=K(N)!==void 0&&e.json!==void 0;_().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:qm(e.selection),sortedColumn:void 0},redo:{patch:t?[{op:`replace`,path:``,value:K(N)}]:void 0,json:K(N),text:K(_e),documentState:K(P),textIsRepaired:K(Fe),selection:qm(K(F)),sortedColumn:void 0}})}}function qe(e,t){if(r(`patch`,e,t),K(N)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=K(N),i={json:void 0,text:K(_e),documentState:K(P),selection:qm(K(F)),textIsRepaired:K(Fe),sortedColumn:void 0},a=Dh(K(N),e),o=sm(K(N),K(P),e),s=Hm(K(N),e)??K(F),c=typeof t==`function`?t(o.json,o.documentState,s):void 0;return V(N,c?.json===void 0?o.json:c.json),V(P,c?.state===void 0?o.documentState:c.state),V(F,c?.selection===void 0?s:c.selection),V(_e,void 0),V(Fe,!1),V(Ce,void 0),V(we,void 0),ve=void 0,Ge(K(N)),_().add({type:`tree`,undo:R({patch:a},i),redo:{patch:e,json:void 0,text:K(_e),documentState:K(P),selection:qm(K(F)),sortedColumn:void 0,textIsRepaired:K(Fe)}}),{json:K(N),previousJson:n,undo:a,redo:e}}function Je(){!m()&&K(F)&&V(F,Ym(uh(K(F))))}function Ye(){if(!m()&&K(F)){var e=uh(K(F)),t=L(K(N),e);gd(t)?function(e,t){r(`openJSONEditorModal`,{path:e,value:t}),j=!0,he()({content:{json:t},path:e,onPatch:K(sn).onPatch,onClose:()=>{j=!1,setTimeout(nn)}})}(e,t):V(F,Zm(e))}}function Xe(){if(!m()&&Am(K(F))){var e=uh(K(F)),t=fn(e),n=L(K(N),e),i=!gm(K(N),K(P),e),a=i?String(n):Td(String(n),C());r(`handleToggleEnforceString`,{enforceString:i,value:n,updatedValue:a}),Pt([{op:`replace`,path:t,value:a}],(t,n)=>({state:dm(K(N),n,e,{type:`value`,enforceString:i})}))}}function Ze(){return K(Fe)&&K(N)!==void 0&&Ft(K(N)),K(N)===void 0?{text:K(_e)||``}:{json:K(N)}}function Qe(){return $e.apply(this,arguments)}function $e(){return $e=Va(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield xb({json:K(N),selection:K(F),indentation:e?ne():void 0,readOnly:m(),parser:C(),onPatch:Pt})}),$e.apply(this,arguments)}function et(){return tt.apply(this,arguments)}function tt(){return tt=Va(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];K(N)!==void 0&&(yield Cb({json:K(N),selection:K(F),indentation:e?ne():void 0,parser:C()}))}),tt.apply(this,arguments)}function nt(e){e.preventDefault(),at(e.clipboardData?.getData(`text/plain`))}function rt(){return it.apply(this,arguments)}function it(){return(it=Va(function*(){try{at(yield navigator.clipboard.readText())}catch(e){console.error(e),V(ge,!0)}})).apply(this,arguments)}function at(e){e!==void 0&&Tb({clipboardText:e,json:K(N),selection:K(F),readOnly:m(),parser:C(),onPatch:Pt,onChangeText:It,onPasteMultilineText:Wt,openRepairModal:ot})}function ot(e,t){V(M,{text:e,onParse:e=>Ld(e,e=>Fd(e,C())),onRepair:Rd,onApply:t,onClose:nn})}function ct(){Eb({json:K(N),text:K(_e),selection:K(F),keepSelection:!1,readOnly:m(),onChange:ie(),onPatch:Pt})}function lt(){!m()&&K(N)!==void 0&&K(F)&&rh&&!Et(uh(K(F)))&&(r(`duplicate`,{selection:K(F)}),Pt(bh(K(N),Fm(K(N),K(F)))))}function ut(){m()||!K(F)||!jm(K(F))&&!Am(K(F))||Et(uh(K(F)))||(r(`extract`,{selection:K(F)}),Pt(xh(K(N),K(F)),(e,t)=>{if(gd(e))return{state:Sm(e,t,[])}}))}function dt(e){Db({insertType:e,selectInside:!0,initialValue:void 0,json:K(N),selection:K(F),readOnly:m(),parser:C(),onPatch:Pt,onReplaceJson:Ft})}function ft(e){km(K(F))&&V(F,Xm(K(F).path)),K(F)||V(F,Vm(K(N),K(P))),dt(e)}function pt(e){if(!m()&&K(F))if(ih(K(F)))try{var t=dh(K(F)),n=L(K(N),t),i=function(e,t,n){if(t===`array`){if(Array.isArray(e))return e;if(hd(e))return Md(e);if(typeof e==`string`)try{var r=n.parse(e);if(Array.isArray(r))return r;if(hd(r))return Md(r)}catch{return[e]}return[e]}if(t===`object`){if(Array.isArray(e))return jd(e);if(hd(e))return e;if(typeof e==`string`)try{var i=n.parse(e);if(hd(i))return i;if(Array.isArray(i))return jd(i)}catch{return{value:e}}return{value:e}}if(t===`value`)return gd(e)?n.stringify(e):e;throw Error(`Cannot convert ${Sd(e,n)} to ${t}`)}(n,e,C());if(i===n)return;var a=[{op:`replace`,path:fn(t),value:i}];r(`handleConvert`,{selection:K(F),path:t,type:e,operations:a}),Pt(a,(e,t)=>({state:K(F)?xm(e,t,uh(K(F))):K(P)}))}catch(e){re()(e)}else re()(Error(`Cannot convert current selection to ${e}`))}function mt(){if(K(F)){var e=zm(K(N),K(P),K(F),!1),t=St(uh(K(F)));e&&!Et(uh(e))&&D(t,St(uh(e)))?V(F,$m(uh(e))):V(F,Qm(t)),r(`insert before`,{selection:K(F),selectionBefore:e,parentPath:t}),Cs(),Kt()}}function ht(){if(K(F)){var e=Rm(K(N),K(F));r(`insert after`,e),V(F,$m(e)),Cs(),Kt()}}function gt(e){return _t.apply(this,arguments)}function _t(){return(_t=Va(function*(e){yield Ob({char:e,selectInside:!0,json:K(N),selection:K(F),readOnly:m(),parser:C(),onPatch:Pt,onReplaceJson:Ft,onSelect:be})})).apply(this,arguments)}function vt(){if(!m()&&_().canUndo){var e=_().undo();if(Kp(e)){var t={json:K(N),text:K(_e)};V(N,e.undo.patch?hn(K(N),e.undo.patch):e.undo.json),V(P,e.undo.documentState),V(F,e.undo.selection),V(_e,e.undo.text),V(Fe,e.undo.textIsRepaired),ve=void 0,r(`undo`,{item:e,json:K(N),documentState:K(P),selection:K(F)}),Nt(t,e.undo.patch&&e.redo.patch?{json:K(N),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),nn(),K(F)&&Ot(uh(K(F)),{scrollToWhenVisible:!1})}else k()(e)}}function yt(){if(!m()&&_().canRedo){var e=_().redo();if(Kp(e)){var t={json:K(N),text:K(_e)};V(N,e.redo.patch?hn(K(N),e.redo.patch):e.redo.json),V(P,e.redo.documentState),V(F,e.redo.selection),V(_e,e.redo.text),V(Fe,e.redo.textIsRepaired),ve=void 0,r(`redo`,{item:e,json:K(N),documentState:K(P),selection:K(F)}),Nt(t,e.undo.patch&&e.redo.patch?{json:K(N),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),nn(),K(F)&&Ot(uh(K(F)),{scrollToWhenVisible:!1})}else A()(e)}}function bt(e){var t;m()||K(N)===void 0||(j=!0,pe()({id:a,json:K(N),rootPath:e,onSort:(t=Va(function*(t){var{operations:n}=t;r(`onSort`,e,n),Pt(n,(t,n)=>({state:Sm(t,n,e),selection:Xm(e)}))}),function(e){return t.apply(this,arguments)}),onClose:()=>{j=!1,setTimeout(nn)}}))}function xt(){K(F)&&bt(Gm(K(N),K(F)))}function Ct(){bt([])}function wt(e){if(K(N)!==void 0){var{id:t,onTransform:n,onClose:i}=e,a=e.rootPath||[];j=!0,me()({id:t||o,json:K(N),rootPath:a,onTransform:e=>{n?n({operations:e,json:K(N),transformedJson:hn(K(N),e)}):(r(`onTransform`,a,e),Pt(e,(e,t)=>({state:Sm(e,t,a),selection:Xm(a)})))},onClose:()=>{j=!1,setTimeout(nn),i&&i()}})}}function Tt(){K(F)&&wt({rootPath:Gm(K(N),K(F))})}function Dt(){wt({rootPath:[]})}function Ot(e){return kt.apply(this,arguments)}function kt(){return kt=Va(function*(e){var{scrollToWhenVisible:t=!0,element:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};V(P,im(K(N),K(P),e,Em));var i=n??At(e);if(r(`scrollTo`,{path:e,elem:i,refContents:K(l)}),!i||!K(l))return Promise.resolve();var a=K(l).getBoundingClientRect(),o=i.getBoundingClientRect();if(!t&&o.bottom>a.top&&o.top<a.bottom)return Promise.resolve();var s=-a.height/4;return new Promise(e=>{p(i,{container:K(l),offset:s,duration:300,callback:()=>e()})})}),kt.apply(this,arguments)}function At(e){return Cs(),K(l)?.querySelector(`div[data-path="${Af(e)}"]`)??void 0}function jt(e){return Cs(),K(l)?.querySelector(`span[data-search-result-index="${e}"]`)??void 0}function Mt(e){var t=At(e);if(t&&K(l)){var n=K(l).getBoundingClientRect(),r=t.getBoundingClientRect(),i=gd(L(K(N),e))?20:r.height;r.top<n.top+20?p(t,{container:K(l),offset:-20,duration:0}):r.top+i>n.bottom-20&&p(t,{container:K(l),offset:-(n.height-i-20),duration:0})}}function Nt(e,t){if(e.json!==void 0||e?.text!==void 0){if(K(_e)!==void 0){var n,r={text:K(_e),json:void 0};(n=ie())==null||n(r,e,{contentErrors:ze(),patchResult:t})}else if(K(N)!==void 0){var i,a={text:void 0,json:K(N)};(i=ie())==null||i(a,e,{contentErrors:ze(),patchResult:t})}}}function Pt(e,t){r(`handlePatch`,e,t);var n={json:K(N),text:K(_e)},i=qe(e,t);return Nt(n,i),i}function Ft(e,t){var n={json:K(N),text:K(_e)},r={documentState:K(P),selection:K(F),json:K(N),text:K(_e),textIsRepaired:K(Fe)},i=im(K(N),em(e,K(P)),[],Cm),a=typeof t==`function`?t(e,i,K(F)):void 0;V(N,a?.json===void 0?e:a.json),V(P,a?.state===void 0?i:a.state),V(F,a?.selection===void 0?K(F):a.selection),V(_e,void 0),V(Fe,!1),ve=void 0,Ge(K(N)),Ke(r),Nt(n,void 0)}function It(e,t){r(`handleChangeText`);var n={json:K(N),text:K(_e)},i={documentState:K(P),selection:K(F),json:K(N),text:K(_e),textIsRepaired:K(Fe)};try{V(N,w()(e)),V(P,im(K(N),em(K(N),K(P)),[],Cm)),V(_e,void 0),V(Fe,!1),ve=void 0}catch(t){try{V(N,w()(yr(e))),V(P,im(K(N),em(K(N),K(P)),[],Cm)),V(_e,e),V(Fe,!0),ve=void 0}catch{V(N,void 0),V(P,Yp({json:K(N),expand:Cm})),V(_e,e),V(Fe,!1),ve=K(_e)===``?void 0:Bd(K(_e),t.message||String(t))}}if(typeof t==`function`){var a=t(K(N),K(P),K(F));V(N,a?.json===void 0?K(N):a.json),V(P,a?.state===void 0?K(P):a.state),V(F,a?.selection===void 0?K(F):a.selection)}Ge(K(N)),Ke(i),Nt(n,void 0)}function Lt(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];r(`handleExpand`,{path:e,expanded:t,recursive:n}),t?Ne(e,n?Tm:wm):Pe(e,n),nn()}function Rt(){Lt([],!0,!0)}function zt(){Lt([],!1,!0)}function Bt(e){r(`openFind`,{findAndReplace:e}),V(Ee,!1),V(De,!1),Cs(),V(Ee,!0),V(De,e)}function Vt(e,t){r(`handleExpandSection`,e,t),V(P,function(e,t,n,r){return fm(e,t,n,(e,t)=>{if(!Hp(t))return t;var n=Ep(t.visibleSections.concat(r));return R(R({},t),{},{visibleSections:n})})}(K(N),K(P),e,t))}function Ut(e){r(`pasted json as text`,e),V(Ce,e)}function Wt(e){r(`pasted multiline text`,{pastedText:e}),V(we,e)}function Gt(e){var{anchor:t,left:n,top:r,width:i,height:a,offsetTop:o,offsetLeft:l,showTip:u}=e,d=function(e){var{json:t,documentState:n,selection:r,readOnly:i,onEditKey:a,onEditValue:o,onToggleEnforceString:s,onCut:c,onCopy:l,onPaste:u,onRemove:d,onDuplicate:f,onExtract:p,onInsertBefore:m,onInsert:h,onConvert:g,onInsertAfter:_,onSort:v,onTransform:y}=e,b=t!==void 0,x=!!r,S=!!r&&Et(uh(r)),C=r?L(t,uh(r)):void 0,w=Array.isArray(C)?`Edit array`:hd(C)?`Edit object`:`Edit value`,T=b&&(jm(r)||km(r)||Am(r)),E=r&&!S?L(t,St(uh(r))):void 0,D=!i&&b&&Wm(r)&&!S&&!Array.isArray(E),ee=!i&&b&&r!==void 0&&Wm(r),te=ee&&!gd(C),ne=!i&&T,re=T,ie=!i&&x,O=!i&&b&&T&&!S,ae=!i&&b&&r!==void 0&&(jm(r)||Am(r))&&!S,k=T,A=k?`Convert to:`:`Insert:`,oe=!i&&(Om(r)&&Array.isArray(C)||Dm(r)&&Array.isArray(E)),se=!i&&(k?ih(r)&&!hd(C):x),ce=!i&&(k?ih(r)&&!Array.isArray(C):x),le=!i&&(k?ih(r)&&gd(C):x),ue=r!==void 0&&gm(t,n,uh(r));function de(e){T?e!==`structure`&&g(e):h(e)}return[{type:`row`,items:[{type:`button`,onClick:()=>a(),icon:Fi,text:`Edit key`,title:`Edit the key (Double-click on the key)`,disabled:!D},{type:`dropdown-button`,main:{type:`button`,onClick:()=>o(),icon:Fi,text:w,title:`Edit the value (Double-click on the value)`,disabled:!ee},width:`11em`,items:[{type:`button`,icon:Fi,text:w,title:`Edit the value (Double-click on the value)`,onClick:()=>o(),disabled:!ee},{type:`button`,icon:ue?Ci:Yi,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!te}]}]},{type:`separator`},{type:`row`,items:[{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:Bi,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!ne},width:`10em`,items:[{type:`button`,icon:Bi,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:!ne},{type:`button`,icon:Bi,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:!ne}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:Gi,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!re},width:`12em`,items:[{type:`button`,icon:Gi,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!0),disabled:!re},{type:`button`,icon:Gi,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!re}]},{type:`button`,onClick:()=>u(),icon:ui,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:!ie}]},{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`button`,onClick:()=>f(),icon:Si,text:`Duplicate`,title:`Duplicate selected contents (Ctrl+D)`,disabled:!O},{type:`button`,onClick:()=>p(),icon:di,text:`Extract`,title:`Extract selected contents`,disabled:!ae},{type:`button`,onClick:()=>v(),icon:Ri,text:`Sort`,title:`Sort array or object contents`,disabled:i||!T},{type:`button`,onClick:()=>y(),icon:fi,text:`Transform`,title:`Transform array or object contents (filter, sort, project)`,disabled:i||!T},{type:`button`,onClick:()=>d(),icon:Ai,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!T}]},{type:`column`,items:[{type:`label`,text:A},{type:`button`,onClick:()=>de(`structure`),icon:k?Vi:Wi,text:`Structure`,title:A+` structure like the first item in the array`,disabled:!oe},{type:`button`,onClick:()=>de(`object`),icon:k?Vi:Wi,text:`Object`,title:A+` object`,disabled:!se},{type:`button`,onClick:()=>de(`array`),icon:k?Vi:Wi,text:`Array`,title:A+` array`,disabled:!ce},{type:`button`,onClick:()=>de(`value`),icon:k?Vi:Wi,text:`Value`,title:A+` value`,disabled:!le}]}]},{type:`separator`},{type:`row`,items:[{type:`button`,onClick:()=>m(),icon:wi,text:`Insert before`,title:`Select area before current entry to insert or paste contents`,disabled:i||!T||S},{type:`button`,onClick:()=>_(),icon:pi,text:`Insert after`,title:`Select area after current entry to insert or paste contents`,disabled:i||!T||S}]}]}({json:K(N),documentState:K(P),selection:K(F),readOnly:m(),onEditKey:Je,onEditValue:Ye,onToggleEnforceString:Xe,onCut:Qe,onCopy:et,onPaste:rt,onRemove:ct,onDuplicate:lt,onExtract:ut,onInsertBefore:mt,onInsert:ft,onInsertAfter:ht,onConvert:pt,onSort:xt,onTransform:Tt}),f=le()(d)??d;if(!1!==f){var p={left:n,top:r,offsetTop:o,offsetLeft:l,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{j=!1,nn()}};j=!0;var h=s(qb,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:f,onRequestClose:()=>c(h)},p)}}function Kt(e){if(!nh(K(F)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==K(u))Gt({left:e.clientX,top:e.clientY,width:Cp,height:Sp,showTip:!1});else{var t=K(l)?.querySelector(`.jse-context-menu-pointer.jse-selected`);if(t)Gt({anchor:t,offsetTop:2,width:Cp,height:Sp,showTip:!1});else{var n=K(l)?.getBoundingClientRect();n&&Gt({top:n.top+2,left:n.left+2,width:Cp,height:Sp,showTip:!1})}}}function qt(e){Gt({anchor:Of(e.target,`BUTTON`),offsetTop:0,width:Cp,height:Sp,showTip:!0})}function Jt(){return Yt.apply(this,arguments)}function Yt(){return(Yt=Va(function*(){if(r(`apply pasted json`,K(Ce)),K(Ce)){var{onPasteAsJson:e}=K(Ce);V(Ce,void 0),e(),setTimeout(nn)}})).apply(this,arguments)}function Xt(){return Zt.apply(this,arguments)}function Zt(){return(Zt=Va(function*(){r(`apply pasted multiline text`,K(we)),K(we)&&(at(JSON.stringify(K(we))),setTimeout(nn))})).apply(this,arguments)}function Qt(){r(`clear pasted json`),V(Ce,void 0),nn()}function $t(){r(`clear pasted multiline text`),V(we,void 0),nn()}function en(){O()(tf.text)}function tn(e){V(F,e),nn(),Ot(uh(e))}function nn(){r(`focus`),K(u)&&(K(u).focus(),K(u).select())}function rn(e){return function(e,t,n){var r=St(n),i=[T(n)],a=L(e,r),o=a?bm(a,t,i):void 0;return o?Xm(r.concat(o)):$m(n)}(K(N),K(P),e)}function an(e){K(n)&&K(n).onDrag(e)}function on(){K(n)&&K(n).onDragEnd()}var sn=B(void 0,!0);W(()=>K(F),()=>{var e=K(F);D(e,g())||(r(`onSelect`,e),ae()(e))}),W(()=>(J(x()),J(S())),()=>{V(Se,uf({escapeControlCharacters:x(),escapeUnicodeCharacters:S()}))}),W(()=>K(Ee),()=>{(function(e){K(l)&&e&&K(l).scrollTop===0&&(gc(l,K(l).style.overflowAnchor=`none`),gc(l,K(l).scrollTop+=wp),setTimeout(()=>{K(l)&&gc(l,K(l).style.overflowAnchor=``)}))})(K(Ee))}),W(()=>J(h()),()=>{Ue(h())}),W(()=>J(g()),()=>{(function(e){D(K(F),e)||(r(`applyExternalSelection`,{selection:K(F),externalSelection:e}),Nm(e)&&V(F,e))})(g())}),W(()=>(K(N),J(E()),J(C()),J(ee())),()=>{Re(K(N),E(),C(),ee())}),W(()=>(K(l),uv),()=>{V(n,K(l)?uv(K(l)):void 0)}),W(()=>(J(m()),J(v()),J(C()),K(Se),J(se()),J(ue())),()=>{V(sn,{mode:tf.tree,readOnly:m(),truncateTextSize:v(),parser:C(),normalization:K(Se),getJson:Be,getDocumentState:Ve,getSelection:He,findElement:At,findNextInside:rn,focus:nn,onPatch:Pt,onInsert:dt,onExpand:Lt,onSelect:be,onFind:Bt,onExpandSection:Vt,onPasteJson:Ut,onRenderValue:se(),onContextMenu:Gt,onClassName:ue()||(()=>{}),onDrag:an,onDragEnd:on})}),W(()=>K(sn),()=>{r(`context changed`,K(sn))}),Rc();var cn={expand:Ne,collapse:Pe,validate:ze,getJson:Be,patch:qe,acceptAutoRepair:Ze,openTransformModal:wt,scrollTo:Ot,findElement:At,findSearchResult:jt,focus:nn};Qu(!0);var ln=nx();Y(`mousedown`,sc,function(e){!wf(e.target,e=>e===K(d))&&nh(K(F))&&(r(`click outside the editor, exit edit mode`),V(F,qm(K(F))),f&&K(u)&&(K(u).focus(),K(u).blur()),r(`blur (outside editor)`),K(u)&&K(u).blur())});var dn,pn=Dc(ln),mn=H(pn),gn=e=>{(function(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=$(t,`json`,9),o=$(t,`selection`,9),s=$(t,`readOnly`,9),c=$(t,`showSearch`,13,!1),l=$(t,`history`,9),u=$(t,`onExpandAll`,9),d=$(t,`onCollapseAll`,9),f=$(t,`onUndo`,9),p=$(t,`onRedo`,9),m=$(t,`onSort`,9),h=$(t,`onTransform`,9),g=$(t,`onContextMenu`,9),_=$(t,`onCopy`,9),v=$(t,`onRenderMenu`,9);function y(){c(!c())}var b=B(void 0,!0),x=B(void 0,!0),S=B(void 0,!0),C=B(void 0,!0);W(()=>J(a()),()=>{V(n,a()!==void 0)}),W(()=>(K(n),J(o()),Am),()=>{V(r,K(n)&&(jm(o())||km(o())||Am(o())))}),W(()=>(J(u()),J(a())),()=>{V(b,{type:`button`,icon:Fy,title:`Expand all`,className:`jse-expand-all`,onClick:u(),disabled:!gd(a())})}),W(()=>(J(d()),J(a())),()=>{V(x,{type:`button`,icon:Iy,title:`Collapse all`,className:`jse-collapse-all`,onClick:d(),disabled:!gd(a())})}),W(()=>J(a()),()=>{V(S,{type:`button`,icon:hi,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:y,disabled:a()===void 0})}),W(()=>(J(s()),K(b),K(x),J(m()),J(a()),J(h()),K(S),J(g()),J(f()),J(l()),J(p()),J(_()),K(r)),()=>{V(C,s()?[K(b),K(x),{type:`separator`},{type:`button`,icon:Gi,title:`Copy (Ctrl+C)`,className:`jse-copy`,onClick:_(),disabled:!K(r)},{type:`separator`},K(S),{type:`space`}]:[K(b),K(x),{type:`separator`},{type:`button`,icon:Ri,title:`Sort`,className:`jse-sort`,onClick:m(),disabled:s()||a()===void 0},{type:`button`,icon:fi,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:h(),disabled:s()||a()===void 0},K(S),{type:`button`,icon:bi,title:gp,className:`jse-contextmenu`,onClick:g()},{type:`separator`},{type:`button`,icon:Ji,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:f(),disabled:!l().canUndo},{type:`button`,icon:Ki,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:p(),disabled:!l().canRedo},{type:`space`}])}),W(()=>(J(v()),K(C)),()=>{V(i,v()(K(C))||K(C))}),Rc(),Qu(!0),Bv(e,{get items(){return K(i)}}),Ko()})(e,{get json(){return K(N)},get selection(){return K(F)},get readOnly(){return m()},get history(){return _()},onExpandAll:Rt,onCollapseAll:zt,onUndo:vt,onRedo:yt,onSort:Ct,onTransform:Dt,onContextMenu:qt,onCopy:et,get onRenderMenu(){return ce()},get showSearch(){return K(Ee)},set showSearch(e){V(Ee,e)},$$legacy:!0})};Q(mn,e=>{y()&&e(gn)});var _n=U(mn,2),vn=e=>{rb(e,{get json(){return K(N)},get selection(){return K(F)},onSelect:tn,get onError(){return re()},get pathParser(){return te()}})};Q(_n,e=>{b()&&e(vn)});var yn=U(_n,2),bn=e=>{var t=ex(),n=Dc(t),r=H(n);r.readOnly=!0,Yu(r,e=>V(u,e),()=>K(u));var i=U(n,2),a=e=>{var t=Vl(),n=Dc(t),r=e=>{(function(e,t){function n(e){e.stopPropagation(),t.onCreateObject()}function r(e){e.stopPropagation(),t.onCreateArray()}Go(t,!0);var i=By();i.__click=()=>t.onClick();var a=U(H(U(H(i),2)),2),o=e=>{var t=zy(),i=U(Dc(t),2);Ru(i,`title`,`Create an empty JSON object (press '{')`),i.__click=n;var a=U(i,2);Ru(a,`title`,`Create an empty JSON array (press '[')`),a.__click=r,Z(e,t)};Q(a,e=>{t.readOnly||e(o)}),Z(e,i),Ko()})(e,{get readOnly(){return m()},onCreateObject:()=>{nn(),gt(`{`)},onCreateArray:()=>{nn(),gt(`[`)},onClick:()=>{nn()}})},i=e=>{var t=Zb(),n=Dc(t),r=rc(()=>m()?[]:[{icon:Ti,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:en}]);Cv(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return K(r)}}),Mb(U(n,2),{get text(){return K(_e)},get json(){return K(N)},get indentation(){return ne()},get parser(){return C()}}),Z(e,t)};Q(n,e=>{K(_e)===``||K(_e)===void 0?e(r):e(i,!1)}),Z(e,t)},o=e=>{var t=$b(),n=Dc(t);sb(H(n),{get json(){return K(N)},get documentState(){return K(P)},get parser(){return C()},get showSearch(){return K(Ee)},get showReplace(){return K(De)},get readOnly(){return m()},columns:void 0,onSearch:Oe,onFocus:ke,onPatch:Pt,onClose:je});var r=U(n,2);Ru(r,`data-jsoneditor-scrollable-contents`,!0);var i=H(r),a=e=>{Z(e,Qb())};Q(i,e=>{K(Ee)&&e(a)}),Py(U(i,2),{get value(){return K(N)},pointer:``,get state(){return K(P)},get validationErrors(){return K(Ie)},get searchResults(){return K(Te)},get selection(){return K(F)},get context(){return K(sn)},get onDragSelectionStart(){return st}}),Yu(r,e=>V(l,e),()=>K(l));var o=U(r,2),s=e=>{var t=rc(()=>(K(Ce),q(()=>`You pasted a JSON ${Array.isArray(K(Ce).contents)?`array`:`object`} as text`))),n=rc(()=>[{icon:ki,text:`Paste as JSON instead`,title:`Replace the value with the pasted JSON`,onMouseDown:Jt},{text:`Leave as is`,title:`Keep the JSON embedded in the value`,onClick:Qt}]);Cv(e,{type:`info`,get message(){return K(t)},get actions(){return K(n)}})};Q(o,e=>{K(Ce)&&e(s)});var c=U(o,2),u=e=>{var t=rc(()=>[{icon:ki,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:Xt},{text:`Leave as is`,title:`Keep the pasted array`,onClick:$t}]);Cv(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return K(t)}})};Q(c,e=>{K(we)&&e(u)});var d=U(c,2),f=e=>{var t=rc(()=>m()?[]:[{icon:ji,text:`Ok`,title:`Accept the repaired document`,onClick:Ze},{icon:Ti,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:en}]);Cv(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return K(t)},onClose:nn})};Q(d,e=>{K(Fe)&&e(f)}),Av(U(d,2),{get validationErrors(){return K(I)},selectError:Me}),Z(e,t)};Q(i,e=>{K(N)===void 0?e(a):e(o,!1)}),Y(`paste`,r,nt),Z(e,t)},xn=e=>{Z(e,tx())};Q(yn,e=>{i?e(xn,!1):e(bn)}),Yu(pn,e=>V(d,e),()=>K(d));var Sn=U(pn,2),Cn=e=>{Fv(e,{onClose:()=>V(ge,!1)})};Q(Sn,e=>{K(ge)&&e(Cn)});var wn=U(Sn,2),Tn=e=>{Wv(e,od(()=>K(M),{onClose:()=>{var e;(e=K(M))==null||e.onClose(),V(M,void 0)}}))};return Q(wn,e=>{K(M)&&e(Tn)}),G(()=>dn=Du(pn,1,`jse-tree-mode svelte-10mlrw4`,null,dn,{"no-main-menu":!y()})),Y(`keydown`,pn,function(e){var t=Pf(e),n=e.shiftKey;if(r(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),Qe(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),Qe(!1)),t===`Ctrl+C`&&(e.preventDefault(),et(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),et(!1)),t===`Ctrl+D`&&(e.preventDefault(),lt()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),ct()),t===`Insert`&&(e.preventDefault(),dt(`structure`)),t===`Ctrl+A`&&(e.preventDefault(),V(F,Xm([]))),t===`Ctrl+Q`&&Kt(e),t===`ArrowUp`||t===`Shift+ArrowUp`){e.preventDefault();var i=K(F)?zm(K(N),K(P),K(F),n)||K(F):Vm(K(N),K(P));V(F,i),Mt(uh(i))}if(t===`ArrowDown`||t===`Shift+ArrowDown`){e.preventDefault();var a=K(F)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var i=r?uh(n):Rm(e,n),a=gd(L(e,i))?am(e,t,i,!0):t,o=bm(e,t,i),s=bm(e,a,i);if(r)return Om(n)?o===void 0?void 0:eh(o,o):Dm(n)?s===void 0?void 0:eh(s,s):s===void 0?void 0:eh(dh(n),s);if(Dm(n))return s===void 0?void 0:Xm(s);if(Om(n)||Am(n))return o===void 0?void 0:Xm(o);if(km(n)){if(o===void 0||o.length===0)return;var c=L(e,St(o));return Array.isArray(c)?Xm(o):Jm(o)}return jm(n)?s===void 0?o===void 0?void 0:Xm(o):Xm(s):void 0}}(K(N),K(P),K(F),n)||K(F):Vm(K(N),K(P));V(F,a),Mt(uh(a))}if(t===`ArrowLeft`||t===`Shift+ArrowLeft`){e.preventDefault();var o=K(F)?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(n){var{caret:a,previous:o}=Bm(e,t,n,i);if(r)return jm(n)?void 0:eh(n.path,n.path);if(a&&o)return ah(o);var s=L(e,St(uh(n)));return Am(n)&&Array.isArray(s)?eh(n.path,n.path):jm(n)&&!Array.isArray(s)?Jm(n.focusPath):void 0}}(K(N),K(P),K(F),n,!m())||K(F):Vm(K(N),K(P));V(F,o),Mt(uh(o))}if(t===`ArrowRight`||t===`Shift+ArrowRight`){e.preventDefault();var s=K(F)&&K(N)!==void 0?function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3],i=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(n){var{caret:a,next:o}=Bm(e,t,n,i);return r?jm(n)?void 0:eh(n.path,n.path):a&&o?ah(o):jm(n)?Xm(n.focusPath):void 0}}(K(N),K(P),K(F),n,!m())||K(F):Vm(K(N),K(P));V(F,s),Mt(uh(s))}if(t===`Enter`&&K(F)){if(Mm(K(F))){var c=K(F).focusPath,l=L(K(N),St(c));Array.isArray(l)&&(e.preventDefault(),V(F,Xm(c)))}km(K(F))&&(e.preventDefault(),V(F,R(R({},K(F)),{},{edit:!0}))),Am(K(F))&&(e.preventDefault(),gd(L(K(N),K(F).path))?Lt(K(F).path,!0):V(F,R(R({},K(F)),{},{edit:!0})))}if(t.replace(/^Shift\+/,``).length===1&&K(F))return e.preventDefault(),void gt(e.key);if(t===`Enter`&&(Dm(K(F))||Om(K(F))))return e.preventDefault(),void gt(``);if(t===`Ctrl+Enter`&&Am(K(F))){var u=L(K(N),K(F).path);wd(u)&&window.open(String(u),`_blank`)}t===`Escape`&&K(F)&&(e.preventDefault(),V(F,void 0)),t===`Ctrl+F`&&(e.preventDefault(),Bt(!1)),t===`Ctrl+H`&&(e.preventDefault(),Bt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),vt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),yt())}),Y(`mousedown`,pn,function(e){r(`handleMouseDown`,e);var t=e.target;Sf(t,`BUTTON`)||t.isContentEditable||(nn(),K(F)||K(N)!==void 0||K(_e)!==``&&K(_e)!==void 0||(r(`createDefaultSelection`),V(F,Xm([]))))}),Y(`contextmenu`,pn,Kt),Z(e,ln),qu(t,`expand`,Ne),qu(t,`collapse`,Pe),qu(t,`validate`,ze),qu(t,`getJson`,Be),qu(t,`patch`,qe),qu(t,`acceptAutoRepair`,Ze),qu(t,`openTransformModal`,wt),qu(t,`scrollTo`,Ot),qu(t,`findElement`,At),qu(t,`findSearchResult`,jt),qu(t,`focus`,nn),Ko(cn)}function ix(e){return typeof(t=e)!=`object`||t===null?e:new Proxy(e,{get:(e,t,n)=>ix(Reflect.get(e,t,n)),set:()=>!1,deleteProperty:()=>!1});var t}var ax=sd(`jsoneditor:History`);function ox(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,n=[],r=0;function i(){return r<n.length}function a(){return r>0}function o(){return{canUndo:i(),canRedo:a(),items:()=>n.slice().reverse(),add:c,undo:u,redo:d,clear:l}}function s(){e.onChange&&e.onChange(o())}function c(e){ax(`add`,e),n=[e].concat(n.slice(r)).slice(0,t),r=0,s()}function l(){ax(`clear`),n=[],r=0,s()}function u(){if(i()){var e=n[r];return r+=1,ax(`undo`,e),s(),e}}function d(){if(a())return ax(`redo`,n[--r]),s(),n[r]}return{get:o}}Lf(`/* over all fonts, sizes, and colors */
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
}`);var sx=ed(()=>ag),cx=ed(()=>og),lx=X(`<div class="query-error svelte-lta8xm"> </div>`),ux=X(`<!> <!>`,1),dx=X(`<div class="jse-preview jse-error svelte-lta8xm"> </div>`),fx=X(`<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>`,1),px=X(`<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>`);function mx(e,t){var n;Go(t,!1);var r=sd(`jsoneditor:TransformModal`),i=$(t,`id`,25,()=>`transform-modal-`+dd()),a=$(t,`json`,9),o=$(t,`rootPath`,25,()=>[]),s=$(t,`indentation`,9),c=$(t,`truncateTextSize`,9),l=$(t,`escapeControlCharacters`,9),u=$(t,`escapeUnicodeCharacters`,9),d=$(t,`parser`,9),f=$(t,`parseMemoizeOne`,9),p=$(t,`validationParser`,9),m=$(t,`pathParser`,9),h=$(t,`queryLanguages`,9),g=$(t,`queryLanguageId`,13),_=$(t,`onChangeQueryLanguage`,9),v=$(t,`onRenderValue`,9),y=$(t,`onRenderMenu`,9),b=$(t,`onRenderContextMenu`,9),x=$(t,`onClassName`,9),S=$(t,`onTransform`,9),C=$(t,`onClose`,9),w=B(void 0,!0),T=B(ox({onChange:e=>V(T,e)}).get(),!0),E=B(void 0,!0),D=B(void 0,!0),ee=B(!1,!0),te=`${i()}:${fn(o())}`,ne=sx()[te]??{},re=B(!1!==cx().showWizard,!0),O=B(!1!==cx().showOriginal,!0),ae=B(ne.queryOptions??{},!0),k=B(g()===ne.queryLanguageId&&ne.query?ne.query:``,!0),A=B((n=ne.isManual)!=null&&n,!0),oe=B(void 0,!0),se=B(void 0,!0),ce=B({text:``},!0);function le(e){return h().find(t=>t.id===e)??h()[0]}function ue(e){try{V(ae,e),V(k,le(g()).createQuery(K(E),e)),V(oe,void 0),V(A,!1),r(`updateQueryByWizard`,{queryOptions:K(ae),query:K(k),isManual:K(A)})}catch(e){V(oe,String(e))}}function de(e){V(k,e.target.value),V(A,!0),r(`handleChangeQuery`,{query:K(k),isManual:K(A)})}K(A)||ue(K(ae)),au(()=>{var e;(e=K(w))==null||e.focus()});var fe=ie(function(e,t){if(e===void 0)return V(ce,{text:``}),void V(se,`Error: No JSON`);if(t.trim()!==``)try{r(`previewTransform`,{query:t}),V(ce,{json:le(g()).executeQuery(e,t,d())}),V(se,void 0)}catch(e){V(ce,{text:``}),V(se,String(e))}else V(ce,{json:e})},300);function pe(){if(K(E)===void 0)return V(ce,{text:``}),void V(se,`Error: No JSON`);try{r(`handleTransform`,{query:K(k)});var e=le(g()).executeQuery(K(E),K(k),d());S()([{op:`replace`,path:fn(o()),value:e}]),C()()}catch(e){console.error(e),V(ce,{text:``}),V(se,String(e))}}function me(){V(re,!K(re)),cx(cx().showWizard=K(re))}function he(){V(O,!K(O)),cx(cx().showOriginal=K(O))}function j(e){e.focus()}function ge(e){r(`handleChangeQueryLanguage`,e),g(e),_()(e),ue(K(ae))}function M(){K(ee)?V(ee,!K(ee)):C()()}W(()=>(J(a()),J(o())),()=>{V(E,ix(L(a(),o())))}),W(()=>K(E),()=>{V(D,K(E)?{json:K(E)}:{text:``})}),W(()=>(K(E),K(k)),()=>{fe(K(E),K(k))}),W(()=>(sx(),K(ae),K(k),J(g()),K(A)),()=>{sx(sx()[te]={queryOptions:K(ae),query:K(k),queryLanguageId:g(),isManual:K(A)}),r(`store state in memory`,te,sx()[te])}),Rc(),Qu(!0),Nv(e,{get onClose(){return C()},className:`jse-transform-modal`,get fullscreen(){return K(ee)},children:(e,t)=>{var n=px();Hf(H(n),{children:(e,t)=>{var n=fx(),r=Dc(n);(function(e,t){Go(t,!1);var n,r=$(t,`queryLanguages`,9),i=$(t,`queryLanguageId`,9),a=$(t,`fullscreen`,13),o=$(t,`onChangeQueryLanguage`,9),s=$(t,`onClose`,9),c=B(void 0,!0),{openAbsolutePopup:l,closeAbsolutePopup:u}=Wo(`absolute-popup`);function d(){n=l(iv,{queryLanguages:r(),queryLanguageId:i(),onChangeQueryLanguage:e=>{u(n),o()(e)}},{offsetTop:-2,offsetLeft:0,anchor:K(c),closeOnOuterClick:!0})}Qu(!0),sv(e,{title:`Transform`,fullScreenButton:!0,get onClose(){return s()},get fullscreen(){return a()},set fullscreen(e){a(e)},$$slots:{actions:(e,t)=>{var n,i=cv();ep(H(i),{get data(){return Di}}),Yu(i,e=>V(c,e),()=>K(c)),G(()=>n=Du(i,1,`jse-config svelte-5gkegr`,null,n,{hide:r().length<=1})),Y(`click`,i,d),Z(e,i)}},$$legacy:!0}),Ko()})(r,{get queryLanguages(){return h()},get queryLanguageId(){return g()},onChangeQueryLanguage:ge,get onClose(){return C()},get fullscreen(){return K(ee)},set fullscreen(e){V(ee,e)},$$legacy:!0});var i=H(U(r,2)),a=H(i),_=U(H(a),2);_u(H(_),()=>(J(g()),q(()=>le(g()).description)));var S=U(_,4),te=U(S,2),ne=H(H(te)),ie=H(ne),A=rc(()=>K(re)?qi:mi);ep(ie,{get data(){return K(A)}});var fe=U(te,2),M=e=>{var t=Vl(),n=Dc(t),r=e=>{var t=ux(),n=Dc(t);tv(n,{get queryOptions(){return K(ae)},get json(){return K(E)},onChange:ue});var r=U(n,2),i=e=>{var t=lx(),n=H(t);G(()=>Kl(n,K(oe))),Z(e,t)};Q(r,e=>{K(oe)&&e(i)}),Z(e,t)},i=e=>{Z(e,Bl(`(Only available for arrays, not for objects)`))};Q(n,e=>{K(E),q(()=>Array.isArray(K(E)))?e(r):e(i,!1)}),Z(e,t)};Q(fe,e=>{K(re)&&e(M)});var N=U(fe,4);Yu(N,e=>V(w,e),()=>K(w));var _e,ve,ye=U(a,2),P=H(ye),F=H(P),be=H(H(F)),xe=H(be),Se=rc(()=>K(O)?qi:mi);ep(xe,{get data(){return K(Se)}});var Ce=U(F,2),we=e=>{rx(e,{get externalContent(){return K(D)},externalSelection:void 0,get history(){return K(T)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return b()},onError:q(()=>console.error),get onChange(){return st},get onChangeMode(){return st},get onSelect(){return st},get onUndo(){return st},get onRedo(){return st},get onFocus(){return st},get onBlur(){return st},get onSortModal(){return st},get onTransformModal(){return st},get onJSONEditorModal(){return st},get onClassName(){return x()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})};Q(Ce,e=>{K(O)&&e(we)});var Te=U(H(U(P,2)),2),Ee=e=>{rx(e,{get externalContent(){return K(ce)},externalSelection:void 0,get history(){return K(T)},readOnly:!0,get truncateTextSize(){return c()},mainMenuBar:!1,navigationBar:!1,get indentation(){return s()},get escapeControlCharacters(){return l()},get escapeUnicodeCharacters(){return u()},get parser(){return d()},get parseMemoizeOne(){return f()},get onRenderValue(){return v()},get onRenderMenu(){return y()},get onRenderContextMenu(){return b()},onError:q(()=>console.error),get onChange(){return st},get onChangeMode(){return st},get onSelect(){return st},get onUndo(){return st},get onRedo(){return st},get onFocus(){return st},get onBlur(){return st},get onSortModal(){return st},get onTransformModal(){return st},get onJSONEditorModal(){return st},get onClassName(){return x()},validator:void 0,get validationParser(){return p()},get pathParser(){return m()}})},De=e=>{var t=dx(),n=H(t);G(()=>Kl(n,K(se))),Z(e,t)};Q(Te,e=>{K(se)?e(De,!1):e(Ee)});var Oe=H(U(i,2));Lc(()=>Y(`click`,Oe,pe)),bu(Oe,e=>j?.(e)),G(e=>{Lu(S,e),Lu(N,K(k)),_e=Du(ye,1,`jse-data-contents svelte-lta8xm`,null,_e,{"jse-hide-original-data":!K(O)}),ve=Du(P,1,`jse-original-data svelte-lta8xm`,null,ve,{"jse-hide":!K(O)}),Oe.disabled=!!K(se)},[()=>(J(Et),J(o()),J(tg),q(()=>Et(o())?`(document root)`:tg(o())))]),Y(`click`,ne,me),Y(`input`,N,de),Y(`click`,be,he),Z(e,n)},$$slots:{default:!0}}),bu(n,(e,t)=>jv?.(e,t),()=>M),Z(e,n)},$$slots:{default:!0}}),Ko()}function hx(){}var gx=0,_x=class{constructor(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=gx++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=bx.match(e)),t=>{var n=e(t);return n===void 0?null:[this,n]}}};_x.closedBy=new _x({deserialize:e=>e.split(` `)}),_x.openedBy=new _x({deserialize:e=>e.split(` `)}),_x.group=new _x({deserialize:e=>e.split(` `)}),_x.isolate=new _x({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),_x.contextHash=new _x({perNode:!0}),_x.lookAhead=new _x({perNode:!0}),_x.mounted=new _x({perNode:!0});var vx,yx=Object.create(null),bx=class e{constructor(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){var n=t.props&&t.props.length?Object.create(null):yx,r=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(i)),a){if(a[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[a[0].id]=a[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;var t=this.prop(_x.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){var t=Object.create(null);for(var n in e)for(var r of n.split(` `))t[r]=e[n];return e=>{for(var n=e.prop(_x.group),r=-1;r<(n?n.length:0);r++){var i=t[r<0?e.name:n[r]];if(i)return i}}}};bx.none=new bx(``,Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`}(vx||={}),new _x({perNode:!0}),Lf(`/* over all fonts, sizes, and colors */
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
}`);var xx=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),Sx=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),Cx=X(`<div class="jse-status-bar-info svelte-1pmgv9j"> </div>`),wx=X(`<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>`),Tx=rt.define([{tag:ve.propertyName,color:`var(--internal-key-color)`},{tag:ve.number,color:`var(--internal-value-color-number)`},{tag:ve.bool,color:`var(--internal-value-color-boolean)`},{tag:ve.string,color:`var(--internal-value-color-string)`},{tag:ve.keyword,color:`var(--internal-value-color-null)`}]),Ex=Je(Tx),Dx=Tx.style;Tx.style=e=>Dx(e||[]);var Ox=[$e.fromClass(class{constructor(e){this.view=e,this.indentUnit=ge(e.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes(`Chrome`),this.generate(e.state)}update(e){var t=ge(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new nt;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:e=>{var n=e.contentDOM.querySelector(`.cm-line`);n&&(this.initialPaddingLeft=window.getComputedStyle(n).getPropertyValue(`padding-left`),this.addStyleToBuilder(t,e.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,n){for(var r of this.getVisibleLines(t)){var{numColumns:i,containsTab:a}=this.numColumns(r.text,t.tabSize),o=`calc(${i+this.indentUnit}ch + ${n})`,s=this.isChrome?`calc(-${i+this.indentUnit}ch - ${a?1:0}px)`:`-${i+this.indentUnit}ch`;e.add(r.from,r.from,le.line({attributes:{style:`padding-left: ${o}; text-indent: ${s};`}}))}}getVisibleLines(e){var t=new Set,n=null;for(var{from:r,to:i}of this.view.visibleRanges)for(var a=r;a<=i;){var o=e.doc.lineAt(a);n!==o&&(t.add(o),n=o),a=o.to+1}return t}numColumns(e,t){var n=0,r=!1;e:for(var i=0;i<e.length;i++)switch(e[i]){case` `:n+=1;continue e;case`	`:n+=t-n%t,r=!0;continue e;case`\r`:continue e;default:break e}return{numColumns:n,containsTab:r}}},{decorations:e=>e.decorations})];Lf(`/* over all fonts, sizes, and colors */
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
}`);var kx=X(`<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>`),Ax=X(`<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>`,1),jx=X(`<!> <!> <!> <!>`,1),Mx=X(`<div></div> <!> <!>`,1),Nx=X(`<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>`),Px=X(`<div><!> <!> <!></div>`);function Fx(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=$(t,`readOnly`,9),a=$(t,`mainMenuBar`,9),o=$(t,`statusBar`,9),s=$(t,`askToFormat`,9),c=$(t,`externalContent`,9),l=$(t,`externalSelection`,9),u=$(t,`history`,9),d=$(t,`indentation`,9),f=$(t,`tabSize`,9),p=$(t,`escapeUnicodeCharacters`,9),m=$(t,`parser`,9),h=$(t,`validator`,9),g=$(t,`validationParser`,9),_=$(t,`onChange`,9),v=$(t,`onChangeMode`,9),y=$(t,`onSelect`,9),b=$(t,`onUndo`,9),x=$(t,`onRedo`,9),S=$(t,`onError`,9),C=$(t,`onFocus`,9),w=$(t,`onBlur`,9),T=$(t,`onRenderMenu`,9),E=$(t,`onSortModal`,9),ee=$(t,`onTransformModal`,9),te=sd(`jsoneditor:TextMode`),ne={key:`Mod-i`,run:Ct,shift:wt,preventDefault:!0},re=typeof window>`u`;te(`isSSR:`,re);var O,ae=B(void 0,!0),k=B(void 0,!0),A=B(void 0,!0),se=B(!1,!0),ce=B(s(),!0),le=B([],!0),me=B(!1,!0),ge=B(0,!0),N=B(0,!0),ve=null,P=new Ue,F=new Ue,we=new Ue,Ee=new Ue,Be=new Ue,Ye=c(),$e=B(qd(Ye,d(),m()),!0),nt=Fe.define(),rt=null;function at(){if(!rt||rt.length===0)return!1;var e=rt[0].startState,t=rt[rt.length-1].state,n=rt.map(e=>e.changes).reduce((e,t)=>e.compose(t)),r={type:`text`,undo:{changes:n.invert(e.doc).toJSON(),selection:tn(e.selection)},redo:{changes:n.toJSON(),selection:tn(t.selection)}};return te(`add history item`,r),u().add(r),rt=null,!0}var st=B(p(),!0);au(Va(function*(){if(!re)try{O=function(e){var{target:t,initialText:n,readOnly:r,indentation:i}=e;te(`Create CodeMirror editor`,{readOnly:r,indentation:i});var a=function(e,t){return Pm(e)?e.ranges.every(e=>e.anchor<t.length&&e.head<t.length):!1}(l(),n)?Gt(l()):void 0;return O=new Ne({state:Ie.create({doc:n,selection:a,extensions:[je.of([fe,ne]),P.of(Rt()),De(),He(),Ke(),Qe(),M(),ft(),Xe(),ze(),Ie.allowMultipleSelections.of(!0),xe(),Je(ue,{fallback:!0}),pe(),Ve(),Ae(),Me(),We(),Oe(),I(),je.of([...et,...ke,...it,{key:`Mod-z`,run:At,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:jt,preventDefault:!0},{key:`Ctrl-Shift-z`,run:jt,preventDefault:!0},...ye,...Pe,...Ge]),Ex,Na({hideFirstIndent:!0}),Ne.domEventHandlers({dblclick:Lt}),Ne.updateListener.of(e=>{(V(A,e.state),e.docChanged)&&(e.transactions.some(e=>!!e.annotation(nt))||(rt=[...rt??[],e]),Zt()),e.selectionSet&&en()}),Ca(),tt({top:!0}),Ne.lineWrapping,F.of(Ie.readOnly.of(r)),Ee.of(Ie.tabSize.of(f())),we.of(Xt(i)),Be.of(Ne.theme({},{dark:zt()}))]}),parent:t}),a&&O.dispatch(O.state.update({selection:a.main,scrollIntoView:!0})),O}({target:K(ae),initialText:nn(K($e),K(se))?``:K(n).escapeValue(K($e)),readOnly:i(),indentation:d()})}catch(e){console.error(e)}})),ou(()=>{Qt(),O&&(te(`Destroy CodeMirror editor`),O.destroy()),gt()});var ct=Ht(),lt=Ht();function ut(){O&&(te(`focus`),O.focus())}function dt(e,t){if(O)try{(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=O.state,i=r.doc.length,a=_e(r,i,1/0);if(a){var o=[];if(e.length===0)o=mt(a,r,void 0,t);else{var{from:s}=Vd(K(n).escapeValue(K($e)),e);s!==void 0&&s!==0&&(o=mt(a,r,s,t))}o.length>0&&function(e){ht.apply(this,arguments)}(o)}})(e,t)}catch(e){S()(e)}}function ft(){return de.of((e,t,n)=>{var r=_e(e,e.doc.length,1/0);if(!r||r.length<n)return null;for(var i=null,a=r.resolveStack(n,1);a;a=a.next){var o=a.node;if(!(o.to<=n||o.from>n)){if(i&&o.from<t)break;var s=o.type.prop(ot);if(s&&(o.to<r.length-50||r.length==e.doc.length||!pt(o))){var c=s(o,e);c&&c.from<=n&&c.from>=t&&c.to>n&&(i=c)}}}return i})}function pt(e){var t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function mt(e,t,n){var r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],i=[],a=new Set;return e.iterate({enter(e){if(n===void 0||e.from>=n){var o=be(t,e.from,e.to);if(o){var s=`${o.from}-${o.to}`;a.has(s)||(r?(i.push({from:o.from,to:o.to}),a.add(s)):i.some(e=>e.from<=o.from&&e.to>=o.to)||(i.push({from:o.from,to:o.to}),a.add(s)))}}}}),i}function ht(){return ht=Va(function*(e){if(e.length!==0){var t=e.length>5e3;t&&(V(me,!0),V(ge,0),V(N,e.length),ve=new AbortController);var n=r=>new Promise(i=>{var a;t&&(a=ve)!=null&&a.signal.aborted?i():requestAnimationFrame(()=>{var a=Math.min(r+100,e.length),o=e.slice(r,a);O.dispatch({effects:o.map(e=>he.of({from:e.from,to:e.to}))}),t&&V(ge,a),a<e.length?n(a).then(i):i()})});yield n(0),t&&(V(me,!1),V(ge,0),V(N,0),ve=null)}}),ht.apply(this,arguments)}function gt(){ve&&ve.abort()}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wm;if(O)try{if(e&&e.length>0){var{from:r}=Vd(K(n).escapeValue(K($e)),e);r!==void 0&&(O.dispatch({selection:{anchor:r,head:r}}),Se(O))}else Ce(O);t?.(e)}catch(e){S()(e)}}function vt(){_t([],()=>!0)}function yt(){dt([],!0)}var bt=!1;function xt(e){return St(e,!1)}function St(e,t){te(`handlePatch`,e,t);var n=m().parse(K($e)),r=hn(n,e),i=Dn(n,e);return Wt({text:m().stringify(r,null,d())},t,!1),{json:r,previousJson:n,undo:i,redo:e}}function Ct(){if(te(`format`),i())return!1;try{var e=m().parse(K($e));return Wt({text:m().stringify(e,null,d())},!0,!1),V(ce,s()),!0}catch(e){S()(e)}return!1}function wt(){if(te(`compact`),i())return!1;try{var e=m().parse(K($e));return Wt({text:m().stringify(e)},!0,!1),V(ce,!1),!0}catch(e){S()(e)}return!1}function Tt(){if(te(`repair`),!i())try{Wt({text:yr(K($e))},!0,!1),V(rn,bp),V(L,void 0)}catch(e){S()(e)}}function Et(){var e;if(!i())try{var t=m().parse(K($e));bt=!0,E()({id:ct,json:t,rootPath:[],onSort:(e=Va(function*(e){var{operations:t}=e;te(`onSort`,t),St(t,!0)}),function(t){return e.apply(this,arguments)}),onClose:()=>{bt=!1,ut()}})}catch(e){S()(e)}}function Dt(e){var{id:t,rootPath:n,onTransform:r,onClose:i}=e;try{var a=m().parse(K($e));bt=!0,ee()({id:t||lt,json:a,rootPath:n||[],onTransform:e=>{r?r({operations:e,json:a,transformedJson:hn(a,e)}):(te(`onTransform`,e),St(e,!0))},onClose:()=>{bt=!1,ut(),i&&i()}})}catch(e){S()(e)}}function Ot(){i()||Dt({rootPath:[]})}function kt(){O&&(K(ae)&&K(ae).querySelector(`.cm-search`)?Le(O):Te(O))}function At(){if(i())return!1;Qt();var e=u().undo();return te(`undo`,e),qp(e)?(O.dispatch({annotations:nt.of(`undo`),changes:qe.fromJSON(e.undo.changes),selection:Re.fromJSON(e.undo.selection),scrollIntoView:!0}),!0):(b()(e),!1)}function jt(){if(i())return!1;Qt();var e=u().redo();return te(`redo`,e),qp(e)?(O.dispatch({annotations:nt.of(`redo`),changes:qe.fromJSON(e.redo.changes),selection:Re.fromJSON(e.redo.selection),scrollIntoView:!0}),!0):(x()(e),!1)}function Mt(){V(se,!0),Wt(c(),!0,!0)}function Nt(){v()(tf.tree)}function Pt(){Jt()}function Ft(e){te(`select validation error`,e);var{from:t,to:n}=Bt(e);t!==void 0&&n!==void 0&&(It(t,n),ut())}function It(e,t){te(`setSelection`,{anchor:e,head:t}),O&&O.dispatch(O.state.update({selection:{anchor:e,head:t},scrollIntoView:!0}))}function Lt(e,t){if(t.state.selection.ranges.length===1){var n=t.state.selection.ranges[0],r=K($e).slice(n.from,n.to);if(r===`{`||r===`[`){var i=Pa.parse(K($e)),a=Object.keys(i.pointers).find(e=>i.pointers[e].value?.pos===n.from),o=i.pointers[a];a&&o&&o.value&&o.valueEnd&&(te(`pointer found, selecting inner contents of path:`,a,o),It(o.value.pos+1,o.valueEnd.pos-1))}}}function Rt(){return Ze(an,{delay:300})}function zt(){return!!K(ae)&&getComputedStyle(K(ae)).getPropertyValue(`--jse-theme`).includes(`dark`)}function Bt(e){var{path:t,message:r,severity:i}=e,{line:a,column:o,from:s,to:c}=Vd(K(n).escapeValue(K($e)),t);return{path:t,line:a,column:o,from:s,to:c,message:r,severity:i,actions:[]}}function Vt(e,t){var{line:n,column:r,position:a,message:o}=e;return{path:[],line:n,column:r,from:a,to:a,severity:af.error,message:o,actions:t&&!i()?[{name:`Auto repair`,apply:()=>Tt()}]:void 0}}function Ut(e){return{from:e.from||0,to:e.to||0,message:e.message||``,actions:e.actions,severity:e.severity}}function Wt(e,t,r){var i=qd(e,d(),m()),a=!D(e,Ye),o=Ye;te(`setCodeMirrorContent`,{isChanged:a,emitChange:t,forceUpdate:r}),O&&(a||r)&&(Ye=e,V($e,i),nn(K($e),K(se))||O.dispatch({changes:{from:0,to:O.state.doc.length,insert:K(n).escapeValue(K($e))}}),at(),a&&t&&$t(Ye,o))}function Gt(e){return Pm(e)?Re.fromJSON(e):void 0}function Kt(){return qt.apply(this,arguments)}function qt(){return qt=Va(function*(){te(`refresh`),yield function(){return Yt.apply(this,arguments)}()}),qt.apply(this,arguments)}function Jt(){if(O){var e=O?K(n).unescapeValue(O.state.doc.toString()):``,t=e!==K($e);if(te(`onChangeCodeMirrorValue`,{isChanged:t}),t){var r=Ye;V($e,e),Ye={text:K($e)},at(),$t(Ye,r),Cs(),en()}}}function Yt(){return(Yt=Va(function*(){if(Cs(),O){var e=zt();return te(`updateTheme`,{dark:e}),O.dispatch({effects:[Be.reconfigure(Ne.theme({},{dark:e}))]}),new Promise(e=>setTimeout(e))}return Promise.resolve()})).apply(this,arguments)}function Xt(e){var t=j.of(typeof e==`number`?` `.repeat(e):e);return e===`	`?[t]:[t,Ox]}bv({onMount:au,onDestroy:ou,getWindow:()=>Ef(K(k)),hasFocus:()=>bt&&document.hasFocus()||Df(K(k)),onFocus:C(),onBlur:()=>{Qt(),w()()}});var Zt=ie(Jt,300);function Qt(){Zt.flush()}function $t(e,t){_()&&_()(e,t,{contentErrors:on(),patchResult:void 0})}function en(){y()(tn(K(A).selection))}function tn(e){return R({type:nf.text},e.toJSON())}function nn(e,t){return!!e&&e.length>mp&&!t}var rn=B(bp,!0),L=B(void 0,!0);function an(){if(nn(K($e),K(se)))return[];var e=on();if(Ip(e)){var{parseError:t,isRepairable:n}=e;return[Ut(Vt(t,n))]}return Lp(e)?e.validationErrors.map(Bt).map(Ut):[]}function on(){te(`validate:start`),Qt();var e=sn(K(n).escapeValue(K($e)),h(),m(),g());return Ip(e)?(V(rn,e.isRepairable?xp:`invalid`),V(L,e.parseError),V(le,[])):(V(rn,bp),V(L,void 0),V(le,e?.validationErrors||[])),te(`validate:end`),e}var sn=oe(vv);function cn(){K(L)&&function(e){te(`select parse error`,e);var t=Vt(e,!1);It(t.from==null?0:t.from,t.to==null?0:t.to),ut()}(K(L))}var ln={icon:gi,text:`Show me`,title:`Move to the parse error location`,onClick:cn};W(()=>J(p()),()=>{V(n,uf({escapeControlCharacters:!1,escapeUnicodeCharacters:p()}))}),W(()=>J(c()),()=>{Wt(c(),!1,!1)}),W(()=>J(l()),()=>{(function(e){if(Pm(e)){var t=Gt(e);!O||!t||K(A)&&K(A).selection.eq(t)||(te(`applyExternalSelection`,t),O.dispatch({selection:t}))}})(l())}),W(()=>J(h()),()=>{(function(e){te(`updateLinter`,e),O&&O.dispatch({effects:P.reconfigure(Rt())})})(h())}),W(()=>J(d()),()=>{(function(e){O&&(te(`updateIndentation`,e),O.dispatch({effects:we.reconfigure(Xt(e))}))})(d())}),W(()=>J(f()),()=>{(function(e){O&&(te(`updateTabSize`,e),O.dispatch({effects:Ee.reconfigure(Ie.tabSize.of(e))}))})(f())}),W(()=>J(i()),()=>{(function(e){O&&(te(`updateReadOnly`,e),O.dispatch({effects:[F.reconfigure(Ie.readOnly.of(e))]}))})(i())}),W(()=>(K(st),J(p())),()=>{K(st)!==p()&&(V(st,p()),te(`forceUpdateText`,{escapeUnicodeCharacters:p()}),O&&O.dispatch({changes:{from:0,to:O.state.doc.length,insert:K(n).escapeValue(K($e))}}))}),W(()=>(K(rn),J(i()),ki),()=>{V(r,K(rn)!==xp||i()?[ln]:[{icon:ki,text:`Auto repair`,title:`Automatically repair JSON`,onClick:Tt},ln])}),Rc();var un={focus:ut,collapse:dt,expand:_t,patch:xt,handlePatch:St,openTransformModal:Dt,refresh:Kt,flush:Qt,validate:on};Qu(!0);var dn,fn=Px(),pn=H(fn),mn=e=>{var t=rc(()=>(K($e),q(()=>K($e).length===0))),n=rc(()=>!K(t)),r=rc(()=>!K(t)),a=rc(()=>!K(t)),o=rc(()=>!K(t)),s=rc(()=>!K(t)),c=rc(()=>!K(t));(function(e,t){Go(t,!1);var n=B(void 0,!0),r=$(t,`readOnly`,9,!1),i=$(t,`onExpandAll`,9),a=$(t,`onCollapseAll`,9),o=$(t,`onFormat`,9),s=$(t,`onCompact`,9),c=$(t,`onSort`,9),l=$(t,`onTransform`,9),u=$(t,`onToggleSearch`,9),d=$(t,`onUndo`,9),f=$(t,`onRedo`,9),p=$(t,`canExpandAll`,9),m=$(t,`canCollapseAll`,9),h=$(t,`canUndo`,9),g=$(t,`canRedo`,9),_=$(t,`canFormat`,9),v=$(t,`canCompact`,9),y=$(t,`canSort`,9),b=$(t,`canTransform`,9),x=$(t,`onRenderMenu`,9),S=B(void 0,!0),C=B(void 0,!0),w={type:`button`,icon:hi,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:u()},T=B(void 0,!0);W(()=>(J(i()),J(p())),()=>{V(S,{type:`button`,icon:Fy,title:`Expand all`,className:`jse-expand-all`,onClick:i(),disabled:!p()})}),W(()=>(J(a()),J(m())),()=>{V(C,{type:`button`,icon:Iy,title:`Collapse all`,className:`jse-collapse-all`,onClick:a(),disabled:!m()})}),W(()=>(J(r()),K(S),K(C),J(o()),J(_()),J(s()),J(v()),J(c()),J(y()),J(l()),J(b()),J(d()),J(h()),J(f()),J(g())),()=>{V(T,r()?[K(S),K(C),{type:`separator`},w,{type:`space`}]:[K(S),K(C),{type:`separator`},{type:`button`,icon:Ly,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,className:`jse-format`,onClick:o(),disabled:r()||!_()},{type:`button`,icon:Ry,title:`Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)`,className:`jse-compact`,onClick:s(),disabled:r()||!v()},{type:`separator`},{type:`button`,icon:Ri,title:`Sort`,className:`jse-sort`,onClick:c(),disabled:r()||!y()},{type:`button`,icon:fi,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:l(),disabled:r()||!b()},w,{type:`separator`},{type:`button`,icon:Ji,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:d(),disabled:!h()},{type:`button`,icon:Ki,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:f(),disabled:!g()},{type:`space`}])}),W(()=>(J(x()),K(T)),()=>{V(n,x()(K(T))||K(T))}),Rc(),Qu(!0),Bv(e,{get items(){return K(n)}}),Ko()})(e,{get readOnly(){return i()},onExpandAll:vt,onCollapseAll:yt,onFormat:Ct,onCompact:wt,onSort:Et,onTransform:Ot,onToggleSearch:kt,onUndo:At,onRedo:jt,get canExpandAll(){return K(n)},get canCollapseAll(){return K(r)},get canFormat(){return K(a)},get canCompact(){return K(o)},get canSort(){return K(s)},get canTransform(){return K(c)},get canUndo(){return J(u()),q(()=>u().canUndo)},get canRedo(){return J(u()),q(()=>u().canRedo)},get onRenderMenu(){return T()}})};Q(pn,e=>{a()&&e(mn)});var gn=U(pn,2),_n=e=>{var t=kx(),n=U(H(t),2),r=H(n),i=U(n,2);G(()=>ku(r,`width: ${K(N)>0?K(ge)/K(N)*100:0}%`)),Y(`click`,i,gt),Z(e,t)};Q(gn,e=>{K(me)&&e(_n)});var vn=U(gn,2),yn=e=>{var t,n=rc(()=>(K($e),K(se),q(()=>nn(K($e),K(se))))),i=Mx(),a=Dc(i);Yu(a,e=>V(ae,e),()=>K(ae));var s=U(a,2),c=e=>{var t=Ax(),n=Dc(t),r=rc(()=>(J(Wh),J(mp),K($e),q(()=>`The JSON document is larger than ${Wh(mp)}, and may crash your browser when loading it in text mode. Actual size: ${Wh(K($e).length)}.`)));Cv(n,{get icon(){return zi},type:`error`,get message(){return K(r)},actions:[{text:`Open anyway`,title:`Open the document in text mode. This may freeze or crash your browser.`,onClick:Mt},{text:`Open in tree mode`,title:`Open the document in tree mode. Tree mode can handle large documents.`,onClick:Nt},{text:`Cancel`,title:`Cancel opening this large document.`,onClick:Pt}],onClose:ut});var i=H(U(n,2));G(e=>Kl(i,e),[()=>(J(Wf),K($e),J(up),q(()=>Wf(K($e)||``,up)))]),Z(e,t)};Q(s,e=>{K(n)&&e(c)});var l=U(s,2),u=e=>{var t=jx(),n=Dc(t),i=e=>{(function(e,t){Go(t,!1);var n=$(t,`editorState`,8),r=B(),i=B(),a=B(),o=B(),s=B();W(()=>J(n()),()=>{var e;V(r,(e=n())==null||(e=e.selection)==null||(e=e.main)==null?void 0:e.head)}),W(()=>(K(r),J(n())),()=>{var e;V(i,K(r)===void 0||(e=n())==null||(e=e.doc)==null?void 0:e.lineAt(K(r)))}),W(()=>K(i),()=>{V(a,K(i)===void 0?void 0:K(i).number)}),W(()=>(K(i),K(r)),()=>{V(o,K(i)!==void 0&&K(r)!==void 0?K(r)-K(i).from+1:void 0)}),W(()=>J(n()),()=>{var e;V(s,(e=n())==null||(e=e.selection)==null||(e=e.ranges)==null?void 0:e.reduce((e,t)=>e+t.to-t.from,0))}),Rc(),Qu();var c=wx(),l=H(c),u=e=>{var t=xx(),n=H(t);G(()=>Kl(n,`Line: ${K(a)??``}`)),Z(e,t)};Q(l,e=>{K(a)!==void 0&&e(u)});var d=U(l,2),f=e=>{var t=Sx(),n=H(t);G(()=>Kl(n,`Column: ${K(o)??``}`)),Z(e,t)};Q(d,e=>{K(o)!==void 0&&e(f)});var p=U(d,2),m=e=>{var t=Cx(),n=H(t);G(()=>Kl(n,`Selection: ${K(s)??``} characters`)),Z(e,t)};Q(p,e=>{K(s)!==void 0&&K(s)>0&&e(m)}),Z(e,c),Ko()})(e,{get editorState(){return K(A)}})};Q(n,e=>{o()&&e(i)});var a=U(n,2),s=e=>{Cv(e,{type:`error`,get icon(){return zi},get message(){return K(L),q(()=>K(L).message)},get actions(){return K(r)},onClick:cn,onClose:ut})};Q(a,e=>{K(L)&&e(s)});var c=U(a,2),l=e=>{var t=rc(()=>[{icon:Ly,text:`Format`,title:`Format JSON: add proper indentation and new lines (Ctrl+I)`,onClick:Ct},{icon:Pi,text:`No thanks`,title:`Close this message`,onClick:()=>V(ce,!1)}]);Cv(e,{type:`success`,message:`Do you want to format the JSON?`,get actions(){return K(t)},onClose:ut})};Q(c,e=>{K(L),K(ce),J(ef),K($e),q(()=>!K(L)&&K(ce)&&ef(K($e)))&&e(l)}),Av(U(c,2),{get validationErrors(){return K(le)},selectError:Ft}),Z(e,t)};Q(l,e=>{K(n)||e(u)}),G(()=>t=Du(a,1,`jse-contents svelte-k2b9e6`,null,t,{"jse-hidden":K(n)})),Z(e,i)},bn=e=>{Z(e,Nx())};return Q(vn,e=>{re?e(bn,!1):e(yn)}),Yu(fn,e=>V(k,e),()=>K(k)),G(()=>dn=Du(fn,1,`jse-text-mode svelte-k2b9e6`,null,dn,{"no-main-menu":!a()})),Z(e,fn),qu(t,`focus`,ut),qu(t,`collapse`,dt),qu(t,`expand`,_t),qu(t,`patch`,xt),qu(t,`handlePatch`,St),qu(t,`openTransformModal`,Dt),qu(t,`refresh`,Kt),qu(t,`flush`,Qt),qu(t,`validate`,on),Ko(un)}Lf(`/* over all fonts, sizes, and colors */
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
}`);var Ix=X(`<button type="button"> </button>`);Lf(`/* over all fonts, sizes, and colors */
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
}`);var Lx=X(`<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>`),Rx=X(`<button type="button"><span class="jse-column-name"> </span> <!></button>`);Lf(`/* over all fonts, sizes, and colors */
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
}`);var zx=X(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),Bx=X(`<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>`),Vx=X(`<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>`),Hx=X(`<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>`);function Ux(e,t){Go(t,!0);var n=nc(()=>t.json?function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=[];return function e(r,i){Wt(r)&&i.length<t&&Object.keys(r).forEach(t=>{e(r[t],i.concat(t))}),Ut(r)&&n.push(i)}(e,[]),n}(t.json).slice(0,99).filter(e=>e.length>0):[]),r=nc(()=>!Et(K(n))),i=nc(()=>t.json===void 0&&(t.text===``||t.text===void 0)),a=nc(()=>K(r)?`Object with nested arrays`:K(i)?`An empty document`:Wt(t.json)?`An object`:Ut(t.json)?`An empty array`:`A ${Sd(t.json,t.parser)}`),o=Hx();o.__click=()=>t.onClick();var s=H(U(H(o),2)),c=H(s),l=U(s,2),u=H(l),d=e=>{Z(e,Bl(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},f=e=>{var n=Vl(),r=Dc(n),o=e=>{Z(e,zx())},s=e=>{var t=Bl();G(()=>Kl(t,`${K(a)??``} cannot be opened in table mode. You can open the document in tree mode instead.`)),Z(e,t)};Q(r,e=>{K(i)&&!t.readOnly?e(o):e(s,!1)},!0),Z(e,n)};Q(u,e=>{K(r)?e(d):e(f,!1)});var p=U(l,2);pu(p,17,()=>K(n),du,(e,n)=>{var r=nc(()=>function(e){return L(t.json,e).length}(K(n))),i=Vx(),a=H(i),o=H(a),s=H(U(o)),c=U(a,2);c.__click=()=>t.openJSONEditorModal(K(n));var l=H(c),u=U(c,2),d=e=>{var r=Bx();r.__click=()=>t.extractPath(K(n)),Z(e,r)};Q(u,e=>{t.readOnly||e(d)}),G(e=>{Kl(o,`"${e??``}" `),Kl(s,`(${K(r)??``} ${K(r)===1?`item`:`items`})`),Kl(l,t.readOnly?`View`:`Edit`)},[()=>tg(K(n))]),Z(e,i)}),U(p,2).__click=()=>t.onChangeMode(tf.tree),G(()=>Kl(c,K(a))),Z(e,o),Ko()}Fl([`click`]),Lf(`/* over all fonts, sizes, and colors */
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
}`);var Wx=X(`<button type="button"><!></button>`);Lf(`/* over all fonts, sizes, and colors */
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
}`);var Gx=X(`<div class="jse-table-root-error svelte-1p86y3c"><!></div>`),Kx=X(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),qx=X(`<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>`),Jx=X(`<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>`),Yx=X(`<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>`),Xx=X(`<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>`),Zx=X(`<td class="jse-table-cell svelte-1p86y3c"></td>`),Qx=X(`<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>`),$x=X(`<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>`,1),eS=X(`<!> <!>`,1),tS=X(`<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>`,1),nS=X(`<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>`),rS=X(`<div role="table"><!> <!></div> <!> <!>`,1);function iS(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=sd(`jsoneditor:TableMode`),{openAbsolutePopup:o,closeAbsolutePopup:s}=Wo(`absolute-popup`),c=fv(),l=Ht(),u=Ht(),d=typeof window>`u`;a(`isSSR:`,d);var f=$(t,`readOnly`,9),p=$(t,`externalContent`,9),m=$(t,`externalSelection`,9),h=$(t,`history`,9),g=$(t,`truncateTextSize`,9),_=$(t,`mainMenuBar`,9),v=$(t,`escapeControlCharacters`,9),y=$(t,`escapeUnicodeCharacters`,9),b=$(t,`flattenColumns`,9),x=$(t,`parser`,9),S=$(t,`parseMemoizeOne`,9),C=$(t,`validator`,9),w=$(t,`validationParser`,9),T=$(t,`indentation`,9),E=$(t,`onChange`,9),ee=$(t,`onChangeMode`,9),te=$(t,`onSelect`,9),ne=$(t,`onUndo`,9),re=$(t,`onRedo`,9),ie=$(t,`onRenderValue`,9),O=$(t,`onRenderMenu`,9),ae=$(t,`onRenderContextMenu`,9),k=$(t,`onFocus`,9),A=$(t,`onBlur`,9),se=$(t,`onSortModal`,9),ce=$(t,`onTransformModal`,9),le=$(t,`onJSONEditorModal`,9),ue=B(void 0,!0),de=B(void 0,!0),fe=B(void 0,!0),pe=B(void 0,!0),me=B(void 0,!0);bv({onMount:au,onDestroy:ou,getWindow:()=>Ef(K(de)),hasFocus:()=>Ee&&document.hasFocus()||Df(K(de)),onFocus:()=>{De=!0,k()&&k()()},onBlur:()=>{De=!1,A()&&A()()}});var he,j=B(void 0,!0),ge=B(void 0,!0),M=B(void 0,!0),N=B(void 0,!0),_e=B(void 0,!0),ve=B(void 0,!0),ye=B(!1,!0),P=B(!1,!0);function F(e){V(ve,(he=e)?Bh(K(j),he.items):void 0)}function be(e){return xe.apply(this,arguments)}function xe(){return(xe=Va(function*(e){V(I,void 0),yield tt(e)})).apply(this,arguments)}function Se(){V(ye,!1),V(P,!1),Ze()}var Ce=B(1e4,!0),we=B([],!0),Te=B(void 0,!0),Ee=!1,De=!1,Oe=B(!1,!0),ke=B({},!0),Ae=B(600,!0),je=B(0,!0),Me=18;function Ne(e){V(I,e)}function Pe(e){K(I)&&e!==void 0&&(un(e,dh(K(I)))&&un(e,uh(K(I)))||(a(`clearing selection: path does not exist anymore`,K(I)),V(I,void 0)))}var Fe=B(K(j)===void 0?void 0:Yp({json:K(j)}),!0),I=B(Nm(m())?m():void 0,!0),Ie=B(void 0,!0),Le=B(!1,!0);function Re(e){if(!f()){a(`onSortByHeader`,e);var t=e.sortDirection===sf.desc?-1:1;Ke(Hy(K(j),[],e.path,t),(t,n)=>({state:n,sortedColumn:e}))}}au(()=>{K(I)&&rt(uh(K(I)))});var ze=B(void 0,!0);function Be(e){if(e.json!==void 0||e.text!==void 0){var t=K(j)!==void 0&&e.json!==void 0;h().add({type:`tree`,undo:{patch:t?[{op:`replace`,path:``,value:e.json}]:void 0,json:e.json,text:e.text,documentState:e.documentState,textIsRepaired:e.textIsRepaired,selection:qm(e.selection),sortedColumn:e.sortedColumn},redo:{patch:t?[{op:`replace`,path:``,value:K(j)}]:void 0,json:K(j),text:K(ge),documentState:K(Fe),textIsRepaired:K(Le),selection:qm(K(I)),sortedColumn:K(Ie)}})}}var Ve=B([],!0),He=oe(_v);function Ue(e,t,n,r){pv(()=>{var i;try{i=He(e,t,n,r)}catch(e){i=[{path:[],message:`Failed to validate: `+e.message,severity:af.warning}]}D(i,K(Ve))||(a(`validationErrors changed:`,i),V(Ve,i))},e=>a(`validationErrors updated in ${e} ms`))}function We(){return a(`validate`),K(M)?{parseError:K(M),isRepairable:!1}:(Ue(K(j),C(),x(),w()),Et(K(Ve))?void 0:{validationErrors:K(Ve)})}function Ge(e,t){if(a(`patch`,e,t),K(j)===void 0)throw Error(`Cannot apply patch: no JSON`);var n=K(j),r={json:void 0,text:K(ge),documentState:K(Fe),selection:qm(K(I)),sortedColumn:K(Ie),textIsRepaired:K(Le)},i=Dh(K(j),e),o=sm(K(j),K(Fe),e),s=yb(K(Ie),e,K(we)),c=typeof t==`function`?t(o.json,o.documentState,K(I)):void 0;return V(j,c?.json===void 0?o.json:c.json),V(Fe,c?.state===void 0?o.documentState:c.state),V(I,c?.selection===void 0?K(I):c.selection),V(Ie,c?.sortedColumn===void 0?s:c.sortedColumn),V(ge,void 0),V(Le,!1),V(N,void 0),V(_e,void 0),V(M,void 0),h().add({type:`tree`,undo:R({patch:i},r),redo:{patch:e,json:void 0,text:void 0,documentState:K(Fe),selection:qm(K(I)),sortedColumn:K(Ie),textIsRepaired:K(Le)}}),{json:K(j),previousJson:n,undo:i,redo:e}}function Ke(e,t){a(`handlePatch`,e,t);var n={json:K(j),text:K(ge)},r=Ge(e,t);return qe(n,r),r}function qe(e,t){if((e.json!==void 0||e?.text!==void 0)&&E()){if(K(ge)!==void 0){var n={text:K(ge),json:void 0};E()(n,e,{contentErrors:We(),patchResult:t})}else if(K(j)!==void 0){var r={text:void 0,json:K(j)};E()(r,e,{contentErrors:We(),patchResult:t})}}}function Je(e){a(`pasted json as text`,e),V(N,e)}function Ye(e){a(`pasted multiline text`,{pastedText:e}),V(_e,e)}function Xe(e){var t=parseInt(e[0],10),n=[String(t+1),...e.slice(1)];return un(K(j),n)?Xm(n):Xm(e)}function Ze(){a(`focus`),K(pe)&&(K(pe).focus(),K(pe).select())}function Qe(e){V(je,e.target.scrollTop)}function $e(){K(I)||V(I,function(){if(Ut(K(j))&&!Et(K(j))&&!Et(K(we)))return Xm([`0`,...K(we)[0]])}())}function et(){if(K(Le)&&K(j)!==void 0){var e={json:K(j),text:K(ge)},t={json:K(j),documentState:K(Fe),selection:K(I),sortedColumn:K(Ie),text:K(ge),textIsRepaired:K(Le)};V(ge,void 0),V(Le,!1),Pe(K(j)),Be(t),qe(e,void 0)}return{json:K(j),text:K(ge)}}function tt(e){var{scrollToWhenVisible:t=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=K(ye)?wp:0,r=pb(e,K(we),ke,Me),i=r-K(je)+n+Me,o=it(e);if(a(`scrollTo`,{path:e,top:r,scrollTop:K(je),elem:o}),!K(fe))return Promise.resolve();var s=K(fe).getBoundingClientRect();if(o&&!t){var l=o.getBoundingClientRect();if(l.bottom>s.top&&l.top<s.bottom)return Promise.resolve()}var u=-Math.max(n+2*Me,s.height/4);return new Promise(o?t=>{c(o,{container:K(fe),offset:u,duration:300,callback:()=>{nt(e),t()}})}:t=>{c(i,{container:K(fe),offset:u,duration:300,callback:()=>{Cs(),nt(e),t()}})})}function nt(e){var t=it(e);if(t&&K(fe)){var n=K(fe).getBoundingClientRect(),r=t.getBoundingClientRect();if(r.right>n.right){var i=r.right-n.right;gc(fe,K(fe).scrollLeft+=i)}if(r.left<n.left){var a=n.left-r.left;gc(fe,K(fe).scrollLeft-=a)}}}function rt(e){(function(e){if(K(fe)){var{rowIndex:t}=mb(e,K(we)),n=pb(e,K(we),ke,Me),r=n+(ke[t]||Me),i=Me,a=K(fe).getBoundingClientRect(),o=K(je),s=K(je)+a.height-i;if(r>s){var c=r-s;gc(fe,K(fe).scrollTop+=c)}if(n<o){var l=o-n;gc(fe,K(fe).scrollTop-=l)}}})(e),nt(e)}function it(e){var t=K(we).find(t=>Km(e.slice(1),t)),n=t?e.slice(0,1).concat(t):e;return K(fe)?.querySelector(`td[data-path="${Af(n)}"]`)??void 0}function at(e){var{anchor:t,left:n,top:r,width:i,height:a,offsetTop:c,offsetLeft:l,showTip:u}=e,d=function(e){var{json:t,documentState:n,selection:r,readOnly:i,onEditValue:a,onEditRow:o,onToggleEnforceString:s,onCut:c,onCopy:l,onPaste:u,onRemove:d,onDuplicateRow:f,onInsertBeforeRow:p,onInsertAfterRow:m,onRemoveRow:h}=e,g=t!==void 0,_=!!r,v=t!==void 0&&r?L(t,uh(r)):void 0,y=g&&(jm(r)||km(r)||Am(r)),b=!i&&g&&r!==void 0&&Wm(r),x=b&&!gd(v),S=!i&&y,C=r!==void 0&&gm(t,n,uh(r));return[{type:`separator`},{type:`row`,items:[{type:`column`,items:[{type:`label`,text:`Table cell:`},{type:`dropdown-button`,main:{type:`button`,onClick:()=>a(),icon:Fi,text:`Edit`,title:`Edit the value (Double-click on the value)`,disabled:!b},width:`11em`,items:[{type:`button`,icon:Fi,text:`Edit`,title:`Edit the value (Double-click on the value)`,onClick:()=>a(),disabled:!b},{type:`button`,icon:C?Ci:Yi,text:`Enforce string`,title:`Enforce keeping the value as string when it contains a numeric value`,onClick:()=>s(),disabled:!x}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>c(!0),icon:Bi,text:`Cut`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,disabled:!S},width:`10em`,items:[{type:`button`,icon:Bi,text:`Cut formatted`,title:`Cut selected contents, formatted with indentation (Ctrl+X)`,onClick:()=>c(!0),disabled:i||!y},{type:`button`,icon:Bi,text:`Cut compacted`,title:`Cut selected contents, without indentation (Ctrl+Shift+X)`,onClick:()=>c(!1),disabled:i||!y}]},{type:`dropdown-button`,main:{type:`button`,onClick:()=>l(!0),icon:Gi,text:`Copy`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,disabled:!y},width:`12em`,items:[{type:`button`,icon:Gi,text:`Copy formatted`,title:`Copy selected contents, formatted with indentation (Ctrl+C)`,onClick:()=>l(!1),disabled:!y},{type:`button`,icon:Gi,text:`Copy compacted`,title:`Copy selected contents, without indentation (Ctrl+Shift+C)`,onClick:()=>l(!1),disabled:!y}]},{type:`button`,onClick:()=>u(),icon:ui,text:`Paste`,title:`Paste clipboard contents (Ctrl+V)`,disabled:i||!_},{type:`button`,onClick:()=>d(),icon:Ai,text:`Remove`,title:`Remove selected contents (Delete)`,disabled:i||!y}]},{type:`column`,items:[{type:`label`,text:`Table row:`},{type:`button`,onClick:()=>o(),icon:Fi,text:`Edit row`,title:`Edit the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>f(),icon:Si,text:`Duplicate row`,title:`Duplicate the current row (Ctrl+D)`,disabled:i||!_||!g},{type:`button`,onClick:()=>p(),icon:Wi,text:`Insert before`,title:`Insert a row before the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>m(),icon:Wi,text:`Insert after`,title:`Insert a row after the current row`,disabled:i||!_||!g},{type:`button`,onClick:()=>h(),icon:Ai,text:`Remove row`,title:`Remove current row`,disabled:i||!_||!g}]}]}]}({json:K(j),documentState:K(Fe),selection:K(I),readOnly:f(),onEditValue:ct,onEditRow:lt,onToggleEnforceString:ut,onCut:bt,onCopy:Ct,onPaste:pt,onRemove:Tt,onDuplicateRow:Ot,onInsertBeforeRow:kt,onInsertAfterRow:At,onRemoveRow:jt}),p=ae()(d)??d;if(!1!==p){var m={left:n,top:r,offsetTop:c,offsetLeft:l,width:i,height:a,anchor:t,closeOnOuterClick:!0,onClose:()=>{Ee=!1,Ze()}};Ee=!0;var h=o(qb,{tip:u?`Tip: you can open this context menu via right-click or with Ctrl+Q`:void 0,items:p,onRequestClose(){s(h),Ze()}},m)}}function ot(e){if(!nh(K(I)))if(e&&(e.stopPropagation(),e.preventDefault()),e&&e.type===`contextmenu`&&e.target!==K(pe))at({left:e.clientX,top:e.clientY,width:Cp,height:Sp,showTip:!1});else{var t=K(fe)?.querySelector(`.jse-table-cell.jse-selected-value`);if(t)at({anchor:t,offsetTop:2,width:Cp,height:Sp,showTip:!1});else{var n=K(fe)?.getBoundingClientRect();n&&at({top:n.top+2,left:n.left+2,width:Cp,height:Sp,showTip:!1})}}}function st(e){at({anchor:Of(e.target,`BUTTON`),offsetTop:0,width:Cp,height:Sp,showTip:!0})}function ct(){if(!f()&&K(I)){var e=uh(K(I));gd(L(K(j),e))?zt(e):V(I,Xm(e))}}function lt(){!f()&&K(I)&&zt(uh(K(I)).slice(0,1))}function ut(){if(!f()&&Am(K(I))){var e=K(I).path,t=fn(e),n=L(K(j),e),r=!gm(K(j),K(Fe),e),i=r?String(n):Td(String(n),x());a(`handleToggleEnforceString`,{enforceString:r,value:n,updatedValue:i}),Ke([{op:`replace`,path:t,value:i}],(t,n)=>({state:dm(K(j),n,e,{type:`value`,enforceString:r})}))}}function dt(){return ft.apply(this,arguments)}function ft(){return(ft=Va(function*(){if(a(`apply pasted json`,K(N)),K(N)){var{onPasteAsJson:e}=K(N);e(),setTimeout(Ze)}})).apply(this,arguments)}function pt(){return mt.apply(this,arguments)}function mt(){return(mt=Va(function*(){try{Pt(yield navigator.clipboard.readText())}catch(e){console.error(e),V(Oe,!0)}})).apply(this,arguments)}function ht(){return gt.apply(this,arguments)}function gt(){return(gt=Va(function*(){a(`apply pasted multiline text`,K(_e)),K(_e)&&(Pt(JSON.stringify(K(_e))),setTimeout(Ze))})).apply(this,arguments)}function _t(){a(`clear pasted json`),V(N,void 0),Ze()}function vt(){a(`clear pasted multiline text`),V(_e,void 0),Ze()}function yt(){ee()(tf.text)}function bt(e){return xt.apply(this,arguments)}function xt(){return(xt=Va(function*(e){yield xb({json:K(j),selection:K(I),indentation:e?T():void 0,readOnly:f(),parser:x(),onPatch:Ke})})).apply(this,arguments)}function Ct(){return wt.apply(this,arguments)}function wt(){return wt=Va(function*(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];K(j)!==void 0&&(yield Cb({json:K(j),selection:K(I),indentation:e?T():void 0,parser:x()}))}),wt.apply(this,arguments)}function Tt(){Eb({json:K(j),text:K(ge),selection:K(I),keepSelection:!0,readOnly:f(),onChange:E(),onPatch:Ke})}function Dt(e){f()||(a(`extract`,{path:e}),Ke(xh(K(j),Xm(e))))}function Ot(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&rh(n)){var{rowIndex:o,columnIndex:s}=mb(uh(n),r);bb(`duplicate row`,{rowIndex:o}),a(bh(t,[[String(o)]]),(e,n)=>({state:n,selection:Xm(hb({rowIndex:o<t.length?o+1:o,columnIndex:s},r))}))}})({json:K(j),selection:K(I),columns:K(we),readOnly:f(),onPatch:Ke})}function kt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&rh(n)){var{rowIndex:o}=mb(uh(n),r);bb(`insert before row`,{rowIndex:o}),a(_h(t,[String(o)],[{key:``,value:Wt(t[0])?{}:``}]))}})({json:K(j),selection:K(I),columns:K(we),readOnly:f(),onPatch:Ke})}function At(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&rh(n)){var{rowIndex:o,columnIndex:s}=mb(uh(n),r);bb(`insert after row`,{rowIndex:o});var c=o+1,l=[String(c)],u=[{key:``,value:Wt(t[0])?{}:``}];a(c<t.length?_h(t,l,u):vh(t,[],u),(e,t)=>({state:t,selection:Xm(hb({rowIndex:c,columnIndex:s},r))}))}})({json:K(j),selection:K(I),columns:K(we),readOnly:f(),onPatch:Ke})}function jt(){(function(e){var{json:t,selection:n,columns:r,readOnly:i,onPatch:a}=e;if(!i&&t!==void 0&&n&&rh(n)){var{rowIndex:o,columnIndex:s}=mb(uh(n),r);bb(`remove row`,{rowIndex:o}),a(Ch([[String(o)]]),(e,t)=>{var n=o<e.length?o:o>0?o-1:void 0,i=n===void 0?void 0:Xm(hb({rowIndex:n,columnIndex:s},r));return bb(`remove row new selection`,{rowIndex:o,newRowIndex:n,newSelection:i}),{state:t,selection:i}})}})({json:K(j),selection:K(I),columns:K(we),readOnly:f(),onPatch:Ke})}function Mt(){return(Mt=Va(function*(e){yield Ob({char:e,selectInside:!1,json:K(j),selection:K(I),readOnly:f(),parser:x(),onPatch:Ke,onReplaceJson:Ft,onSelect:Ne})})).apply(this,arguments)}function Nt(e){e.preventDefault(),Pt(e.clipboardData?.getData(`text/plain`))}function Pt(e){e!==void 0&&Tb({clipboardText:e,json:K(j),selection:K(I),readOnly:f(),parser:x(),onPatch:Ke,onChangeText:It,onPasteMultilineText:Ye,openRepairModal:Bt})}function Ft(e,t){var n={json:K(j),text:K(ge)},r={json:K(j),documentState:K(Fe),selection:K(I),sortedColumn:K(Ie),text:K(ge),textIsRepaired:K(Le)},i=em(e,K(Fe)),a=typeof t==`function`?t(e,i,K(I)):void 0;V(j,a?.json===void 0?e:a.json),V(Fe,a?.state===void 0?i:a.state),V(I,a?.selection===void 0?K(I):a.selection),V(Ie,void 0),V(ge,void 0),V(Le,!1),V(M,void 0),Pe(K(j)),Be(r),qe(n,void 0)}function It(e,t){a(`handleChangeText`);var n={json:K(j),text:K(ge)},r={json:K(j),documentState:K(Fe),selection:K(I),sortedColumn:K(Ie),text:K(ge),textIsRepaired:K(Le)};try{V(j,S()(e)),V(Fe,em(K(j),K(Fe))),V(ge,void 0),V(Le,!1),V(M,void 0)}catch(t){try{V(j,S()(yr(e))),V(Fe,em(K(j),K(Fe))),V(ge,e),V(Le,!0),V(M,void 0)}catch{V(j,void 0),V(Fe,void 0),V(ge,e),V(Le,!1),V(M,K(ge)===``?void 0:Bd(K(ge),t.message||String(t)))}}if(typeof t==`function`){var i=t(K(j),K(Fe),K(I));V(j,i?.json===void 0?K(j):i.json),V(Fe,i?.state===void 0?K(Fe):i.state),V(I,i?.selection===void 0?K(I):i.selection)}Pe(K(j)),Be(r),qe(n,void 0)}function Lt(e){a(`select validation error`,e),V(I,Xm(e.path)),tt(e.path)}function Rt(e){if(K(j)!==void 0){var{id:t,onTransform:n,onClose:r}=e,i=e.rootPath||[];Ee=!0,ce()({id:t||u,json:K(j),rootPath:i||[],onTransform:e=>{n?n({operations:e,json:K(j),transformedJson:hn(K(j),e)}):(a(`onTransform`,i,e),Ke(e))},onClose:()=>{Ee=!1,setTimeout(Ze),r&&r()}})}}function zt(e){a(`openJSONEditorModal`,{path:e}),Ee=!0,le()({content:{json:L(K(j),e)},path:e,onPatch:Ke,onClose:()=>{Ee=!1,setTimeout(Ze)}})}function Bt(e,t){V(me,{text:e,onParse:e=>Ld(e,e=>Fd(e,x())),onRepair:Rd,onApply:t,onClose:Ze})}function Vt(){(function(e){f()||K(j)===void 0||(Ee=!0,se()({id:l,json:K(j),rootPath:e,onSort:t=>{var{operations:n,itemPath:r,direction:i}=t;a(`onSort`,n,e,r,i),Ke(n,(e,t)=>({state:t,sortedColumn:{path:r,sortDirection:i===-1?sf.desc:sf.asc}}))},onClose:()=>{Ee=!1,setTimeout(Ze)}}))})([])}function Gt(){Rt({rootPath:[]})}function Kt(e){a(`openFind`,{findAndReplace:e}),V(ye,!1),V(P,!1),Cs(),V(ye,!0),V(P,e)}function Jt(){if(!f()&&h().canUndo){var e=h().undo();if(Kp(e)){var t={json:K(j),text:K(ge)};V(j,e.undo.patch?hn(K(j),e.undo.patch):e.undo.json),V(Fe,e.undo.documentState),V(I,e.undo.selection),V(Ie,e.undo.sortedColumn),V(ge,e.undo.text),V(Le,e.undo.textIsRepaired),V(M,void 0),a(`undo`,{item:e,json:K(j)}),qe(t,e.undo.patch&&e.redo.patch?{json:K(j),previousJson:t.json,redo:e.undo.patch,undo:e.redo.patch}:void 0),Ze(),K(I)&&tt(uh(K(I)),{scrollToWhenVisible:!1})}else ne()(e)}}function Yt(){if(!f()&&h().canRedo){var e=h().redo();if(Kp(e)){var t={json:K(j),text:K(ge)};V(j,e.redo.patch?hn(K(j),e.redo.patch):e.redo.json),V(Fe,e.redo.documentState),V(I,e.redo.selection),V(Ie,e.redo.sortedColumn),V(ge,e.redo.text),V(Le,e.redo.textIsRepaired),V(M,void 0),a(`redo`,{item:e,json:K(j)}),qe(t,e.undo.patch&&e.redo.patch?{json:K(j),previousJson:t.json,redo:e.redo.patch,undo:e.undo.patch}:void 0),Ze(),K(I)&&tt(uh(K(I)),{scrollToWhenVisible:!1})}else re()(e)}}function Xt(e){V(Ae,e.getBoundingClientRect().height)}W(()=>(J(v()),J(y())),()=>{V(ue,uf({escapeControlCharacters:v(),escapeUnicodeCharacters:y()}))}),W(()=>K(ye),()=>{(function(e){if(K(fe)){var t=e?wp:-100;K(fe).scrollTo({top:gc(fe,K(fe).scrollTop+=t),left:K(fe).scrollLeft})}})(K(ye))}),W(()=>J(p()),()=>{(function(e){var t={json:K(j)},n=Ud(e)?e.text!==K(ge):!D(t.json,e.json);if(a(`update external content`,{isChanged:n}),n){var r={json:K(j),documentState:K(Fe),selection:K(I),sortedColumn:K(Ie),text:K(ge),textIsRepaired:K(Le)};if(Ud(e))try{V(j,S()(e.text)),V(Fe,em(K(j),K(Fe))),V(ge,e.text),V(Le,!1),V(M,void 0)}catch(t){try{V(j,S()(yr(e.text))),V(Fe,em(K(j),K(Fe))),V(ge,e.text),V(Le,!0),V(M,void 0)}catch{V(j,void 0),V(Fe,void 0),V(ge,e.text),V(Le,!1),V(M,K(ge)===``?void 0:Bd(K(ge),t.message||String(t)))}}else V(j,e.json),V(Fe,em(K(j),K(Fe))),V(ge,void 0),V(Le,!1),V(M,void 0);Pe(K(j)),V(Ie,void 0),Be(r)}})(p())}),W(()=>J(m()),()=>{(function(e){D(K(I),e)||(a(`applyExternalSelection`,{selection:K(I),externalSelection:e}),Nm(e)&&V(I,e))})(m())}),W(()=>(K(we),K(j),J(b()),K(Ce)),()=>{V(we,Ut(K(j))?function(e,t){var n=new Set(t.map(fn)),r=new Set(e.map(fn));for(var i of n)r.has(i)||n.delete(i);for(var a of r)n.has(a)||n.add(a);return[...n].map(dn)}(lb(K(j),b(),K(Ce)),K(we)):[])}),W(()=>(K(j),K(we)),()=>{V(Te,!(!K(j)||Et(K(we))))}),W(()=>(K(j),K(Ce)),()=>{V(n,Array.isArray(K(j))&&K(j).length>K(Ce))}),W(()=>(K(je),K(Ae),K(j),K(ye),wp),()=>{V(r,fb(K(je),K(Ae),K(j),ke,Me,K(ye)?wp:0))}),W(()=>K(j),()=>{K(j),K(fe)&&K(fe).scrollTo({top:K(fe).scrollTop,left:K(fe).scrollLeft})}),W(()=>K(I),()=>{var e=K(I);D(e,m())||(a(`onSelect`,e),te()(e))}),W(()=>(J(f()),J(g()),J(x()),K(ue),K(j),K(Fe),J(ie())),()=>{V(ze,{mode:tf.table,readOnly:f(),truncateTextSize:g(),parser:x(),normalization:K(ue),getJson:()=>K(j),getDocumentState:()=>K(Fe),findElement:it,findNextInside:Xe,focus:Ze,onPatch:(e,t)=>Ke(function(e,t){return e.flatMap(e=>{if(qt(e)){var n=dn(e.path);if(n.length>0){for(var r=[e],i=St(n);i.length>0&&!un(t,i);)r.unshift({op:`add`,path:fn(i),value:{}}),i=St(i);return r}}return e})}(e,K(j)),t),onSelect:Ne,onFind:Kt,onPasteJson:Je,onRenderValue:ie()})}),W(()=>(K(j),J(C()),J(x()),J(w())),()=>{Ue(K(j),C(),x(),w())}),W(()=>(K(Ve),K(we)),()=>{V(i,gb(K(Ve),K(we)))}),Rc();var Zt={validate:We,patch:Ge,focus:Ze,acceptAutoRepair:et,scrollTo:tt,findElement:it,openTransformModal:Rt};Qu(!0);var Qt=rS();Y(`mousedown`,sc,function(e){!wf(e.target,e=>e===K(de))&&nh(K(I))&&(a(`click outside the editor, exit edit mode`),V(I,qm(K(I))),De&&K(pe)&&(K(pe).focus(),K(pe).blur()),a(`blur (outside editor)`),K(pe)&&K(pe).blur())});var $t,en=Dc(Qt),tn=H(en),nn=e=>{(function(e,t){Go(t,!1);var n=$(t,`containsValidArray`,9),r=$(t,`readOnly`,9),i=$(t,`showSearch`,13,!1),a=$(t,`history`,9),o=$(t,`onSort`,9),s=$(t,`onTransform`,9),c=$(t,`onContextMenu`,9),l=$(t,`onUndo`,9),u=$(t,`onRedo`,9),d=$(t,`onRenderMenu`,9);function f(){i(!i())}var p=B(void 0,!0),m=B(void 0,!0);W(()=>(J(r()),J(o()),J(n()),J(s()),J(c()),J(l()),J(a()),J(u())),()=>{V(p,r()?[{type:`space`}]:[{type:`button`,icon:Ri,title:`Sort`,className:`jse-sort`,onClick:o(),disabled:r()||!n()},{type:`button`,icon:fi,title:`Transform contents (filter, sort, project)`,className:`jse-transform`,onClick:s(),disabled:r()||!n()},{type:`button`,icon:hi,title:`Search (Ctrl+F)`,className:`jse-search`,onClick:f,disabled:!n()},{type:`button`,icon:bi,title:gp,className:`jse-contextmenu`,onClick:c()},{type:`separator`},{type:`button`,icon:Ji,title:`Undo (Ctrl+Z)`,className:`jse-undo`,onClick:l(),disabled:!a().canUndo},{type:`button`,icon:Ki,title:`Redo (Ctrl+Shift+Z)`,className:`jse-redo`,onClick:u(),disabled:!a().canRedo},{type:`space`}])}),W(()=>(J(d()),K(p)),()=>{V(m,d()(K(p))||K(p))}),Rc(),Qu(!0),Bv(e,{get items(){return K(m)}}),Ko()})(e,{get containsValidArray(){return K(Te)},get readOnly(){return f()},get history(){return h()},onSort:Vt,onTransform:Gt,onUndo:Jt,onRedo:Yt,onContextMenu:st,get onRenderMenu(){return O()},get showSearch(){return K(ye)},set showSearch(e){V(ye,e)},$$legacy:!0})};Q(tn,e=>{_()&&e(nn)});var rn=U(tn,2),an=e=>{var t=tS(),a=Dc(t),o=H(a);o.readOnly=!0,Yu(o,e=>V(pe,e),()=>K(pe));var s=U(a,2),c=e=>{var t=$x(),a=Dc(t);sb(H(a),{get json(){return K(j)},get documentState(){return K(Fe)},get parser(){return x()},get showSearch(){return K(ye)},get showReplace(){return K(P)},get readOnly(){return f()},get columns(){return K(we)},onSearch:F,onFocus:be,onPatch:Ke,onClose:Se});var o=U(a,2),s=H(H(H(o))),c=H(s),l=H(c),u=e=>{var t=rc(()=>(J(_b),K(i),q(()=>_b([],K(i)?.root)))),n=Vl(),r=Dc(n),a=e=>{var n=Gx();ry(H(n),{get validationError(){return K(t)},get onExpand(){return hx}}),Z(e,n)};Q(r,e=>{K(t)&&e(a)}),Z(e,n)};Q(l,e=>{J(Et),K(i),q(()=>!Et(K(i)?.root))&&e(u)});var d=U(c);pu(d,1,()=>K(we),du,(e,t)=>{var n=Kx();(function(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=$(t,`path`,9),o=$(t,`sortedColumn`,9),s=$(t,`readOnly`,9),c=$(t,`onSort`,9);W(()=>(J(a()),tg),()=>{V(n,Et(a())?`values`:tg(a()))}),W(()=>(J(o()),J(a())),()=>{V(r,o()&&D(a(),o()?.path)?o().sortDirection:void 0)}),W(()=>(K(r),Tp),()=>{V(i,K(r)?Tp[K(r)]:void 0)}),Rc(),Qu(!0);var l,u=Rx(),d=H(u),f=H(d),p=U(d,2),m=e=>{var t=Lx(),n=H(t),a=rc(()=>(K(r),J(sf),J(qi),J(Hi),q(()=>K(r)===sf.asc?qi:Hi)));ep(n,{get data(){return K(a)}}),G(()=>Ru(t,`title`,`Currently sorted in ${K(i)} order`)),Z(e,t)};Q(p,e=>{K(r)!==void 0&&e(m)}),G(e=>{l=Du(u,1,`jse-column-header svelte-5pxwfq`,null,l,{"jse-readonly":s()}),Ru(u,`title`,s()?K(n):K(n)+` (Click to sort the data by this column)`),Kl(f,e)},[()=>(J(Wf),K(n),J(50),q(()=>Wf(K(n),50)))]),Y(`click`,u,function(){s()||c()({path:a(),sortDirection:K(r)===sf.asc?sf.desc:sf.asc})}),Z(e,u),Ko()})(H(n),{get path(){return K(t)},get sortedColumn(){return K(Ie)},get readOnly(){return f()},onSort:Re}),Z(e,n)});var p=U(d),m=e=>{var t=qx(),n=H(t),r=rc(()=>(K(j),q(()=>Array.isArray(K(j))?K(j).length:0)));(function(e,t){Go(t,!1);var n=$(t,`count`,9),r=$(t,`maxSampleCount`,9),i=$(t,`readOnly`,9),a=$(t,`onRefresh`,9);Qu(!0);var o,s=Wx();ep(H(s),{get data(){return li}}),G(()=>{o=Du(s,1,`jse-column-header svelte-1wgrwv3`,null,o,{"jse-readonly":i()}),Ru(s,`title`,`The Columns are created by sampling ${r()} items out of ${n()}. If you're missing a column, click here to sample all of the items instead of a subset. This is slower.`)}),Y(`click`,s,()=>a()()),Z(e,s),Ko()})(n,{get count(){return K(r)},get maxSampleCount(){return K(Ce)},get readOnly(){return f()},onRefresh:()=>V(Ce,1/0)}),Z(e,t)};Q(p,e=>{K(n)&&e(m)});var h,g,_=U(s),v=H(_),y=U(_);pu(y,1,()=>(K(r),q(()=>K(r).visibleItems)),du,(e,t,a)=>{var o=rc(()=>(K(r),q(()=>K(r).startIndex+a))),s=rc(()=>(K(i),J(K(o)),q(()=>K(i).rows[K(o)]))),c=rc(()=>(J(_b),J(K(o)),J(K(s)),q(()=>_b([String(K(o))],K(s)?.row)))),l=rc(()=>(J(lm),K(j),K(ve),J(K(o)),q(()=>lm(K(j),K(ve),[String(K(o))])))),u=Qx(),d=H(u);uu(d,()=>K(o),e=>{var t=Jx(),n=H(t),r=U(n),i=e=>{ry(e,{get validationError(){return K(c)},get onExpand(){return hx}})};Q(r,e=>{K(c)&&e(i)}),bu(t,(e,t)=>Xb?.(e,t),()=>e=>function(e,t){ke[t]=e.getBoundingClientRect().height}(e,K(o))),G(()=>Kl(n,`${K(o)??``} `)),Z(e,t)});var p=U(d);pu(p,1,()=>K(we),du,(e,n,r,i)=>{var a,c=rc(()=>(J(K(o)),K(n),q(()=>[String(K(o))].concat(K(n))))),u=rc(()=>(J(L),K(t),K(n),q(()=>L(K(t),K(n))))),d=rc(()=>(J(Am),K(I),J(Km),J(K(c)),q(()=>Am(K(I))&&Km(K(I).path,K(c))))),p=rc(()=>(J(K(s)),q(()=>K(s)?.columns[r]))),m=rc(()=>(J(_b),J(K(c)),J(K(p)),q(()=>_b(K(c),K(p))))),h=Xx(),g=H(h),_=H(g),v=e=>{var r=rc(()=>(J(Vh),J(lm),K(t),J(K(l)),K(n),q(()=>Vh(lm(K(t),K(l),K(n)))))),i=rc(()=>(J(K(r)),q(()=>!!K(r)&&K(r).some(e=>e.active)))),a=rc(()=>(J(Et),J(K(r)),q(()=>!Et(K(r)))));(function(e,t){Go(t,!1);var n=$(t,`path`,9),r=$(t,`value`,9),i=$(t,`parser`,9),a=$(t,`isSelected`,9),o=$(t,`containsSearchResult`,9),s=$(t,`containsActiveSearchResult`,9),c=$(t,`onEdit`,9);Qu(!0);var l,u=Ix(),d=H(u);G(e=>{l=Du(u,1,`jse-inline-value svelte-1jv89ui`,null,l,{"jse-selected":a(),"jse-highlight":o(),"jse-active":s()}),Kl(d,e)},[()=>(J(Wf),J(i()),J(r()),J(50),q(()=>Wf(i().stringify(r())??``,50)))]),Y(`dblclick`,u,()=>c()(n())),Z(e,u),Ko()})(e,{get path(){return K(c)},get value(){return K(u)},get parser(){return x()},get isSelected(){return K(d)},get containsSearchResult(){return K(a)},get containsActiveSearchResult(){return K(i)},onEdit:zt})},y=e=>{var t=rc(()=>(J(lm),K(j),K(ve),J(K(c)),q(()=>lm(K(j),K(ve),K(c))?.searchResults))),n=rc(()=>K(u)===void 0?``:K(u)),r=rc(()=>(J(gm),K(j),K(Fe),J(K(c)),q(()=>gm(K(j),K(Fe),K(c))))),i=rc(()=>K(d)?K(I):void 0);$v(e,{get path(){return K(c)},get value(){return K(n)},get enforceString(){return K(r)},get selection(){return K(i)},get searchResultItems(){return K(t)},get context(){return K(ze)}})};Q(_,e=>{J(gd),J(K(u)),q(()=>gd(K(u)))?e(v):e(y,!1)});var b=U(_),S=e=>{var t=Yx();Yv(H(t),{selected:!0,onContextMenu:at}),Z(e,t)};Q(b,e=>{J(f()),J(K(d)),J(nh),K(I),q(()=>!f()&&K(d)&&!nh(K(I)))&&e(S)});var C=U(g,2),w=e=>{ry(e,{get validationError(){return K(m)},get onExpand(){return hx}})};Q(C,e=>{K(m)&&e(w)}),G(e=>{Ru(h,`data-path`,e),a=Du(g,1,`jse-value-outer svelte-1p86y3c`,null,a,{"jse-selected-value":K(d)})},[()=>(J(Af),J(K(c)),q(()=>Af(K(c))))]),Z(e,h)});var m=U(p),h=e=>{Z(e,Zx())};Q(m,e=>{K(n)&&e(h)}),Z(e,u)});var b,S=H(U(y));Yu(o,e=>V(fe,e),()=>K(fe)),bu(o,(e,t)=>Xb?.(e,t),()=>Xt),Lc(()=>Y(`scroll`,o,Qe));var C=U(o,2),w=e=>{var t=rc(()=>(K(N),q(()=>`You pasted a JSON ${Array.isArray(K(N).contents)?`array`:`object`} as text`))),n=rc(()=>[{icon:ki,text:`Paste as JSON instead`,title:`Paste the text as JSON instead of a single value`,onMouseDown:dt},{text:`Leave as is`,title:`Keep the pasted content as a single value`,onClick:_t}]);Cv(e,{type:`info`,get message(){return K(t)},get actions(){return K(n)}})};Q(C,e=>{K(N)&&e(w)});var T=U(C,2),E=e=>{var t=rc(()=>[{icon:ki,text:`Paste as string instead`,title:`Paste the clipboard data as a single string value instead of an array`,onClick:ht},{text:`Leave as is`,title:`Keep the pasted array`,onClick:vt}]);Cv(e,{type:`info`,message:`Multiline text was pasted as array`,get actions(){return K(t)}})};Q(T,e=>{K(_e)&&e(E)});var ee=U(T,2),te=e=>{var t=rc(()=>f()?[]:[{icon:ji,text:`Ok`,title:`Accept the repaired document`,onClick:et},{icon:Ti,text:`Repair manually instead`,title:`Leave the document unchanged and repair it manually instead`,onClick:yt}]);Cv(e,{type:`success`,message:`The loaded JSON document was invalid but is successfully repaired.`,get actions(){return K(t)},onClose:Ze})};Q(ee,e=>{K(Le)&&e(te)}),Av(U(ee,2),{get validationErrors(){return K(Ve)},selectError:Lt}),G(()=>{h=Du(_,1,`jse-table-invisible-start-section svelte-1p86y3c`,null,h,{"jse-search-box-background":K(ye)}),Ru(v,`colspan`,(K(we),q(()=>K(we).length))),g=ku(v,``,g,{height:(K(r),q(()=>K(r).startHeight+`px`))}),Ru(S,`colspan`,(K(we),q(()=>K(we).length))),b=ku(S,``,b,{height:(K(r),q(()=>K(r).endHeight+`px`))})}),Z(e,t)},l=e=>{var t=Vl(),n=Dc(t),r=e=>{var t=eS(),n=Dc(t),r=rc(()=>f()?[]:[{icon:Ti,text:`Repair manually`,title:`Open the document in "code" mode and repair it manually`,onClick:yt}]);Cv(n,{type:`error`,message:`The loaded JSON document is invalid and could not be repaired automatically.`,get actions(){return K(r)}}),Mb(U(n,2),{get text(){return K(ge)},get json(){return K(j)},get indentation(){return T()},get parser(){return x()}}),Z(e,t)},i=e=>{Ux(e,{get text(){return K(ge)},get json(){return K(j)},get readOnly(){return f()},get parser(){return x()},openJSONEditorModal:zt,extractPath:Dt,get onChangeMode(){return ee()},onClick:()=>{Ze()}})};Q(n,e=>{K(M)&&K(ge)!==void 0&&K(ge)!==``?e(r):e(i,!1)},!0),Z(e,t)};Q(s,e=>{K(Te)?e(c):e(l,!1)}),Y(`paste`,o,Nt),Z(e,t)},on=e=>{Z(e,nS())};Q(rn,e=>{d?e(on,!1):e(an)}),Yu(en,e=>V(de,e),()=>K(de));var sn=U(en,2),cn=e=>{Fv(e,{onClose:()=>V(Oe,!1)})};Q(sn,e=>{K(Oe)&&e(cn)});var ln=U(sn,2),pn=e=>{Wv(e,od(()=>K(me),{onClose:()=>{var e;(e=K(me))==null||e.onClose(),V(me,void 0)}}))};return Q(ln,e=>{K(me)&&e(pn)}),G(()=>$t=Du(en,1,`jse-table-mode svelte-1p86y3c`,null,$t,{"no-main-menu":!_()})),Y(`mousedown`,en,function(e){if(e.buttons===1||e.buttons===2){var t=e.target;t.isContentEditable||Ze();var n=jf(t);if(n){if(nh(K(I))&&ch(K(j),K(I),n))return;V(I,Xm(n)),e.preventDefault()}}}),Y(`keydown`,en,function(e){var t=Pf(e);if(a(`keydown`,{combo:t,key:e.key}),t===`Ctrl+X`&&(e.preventDefault(),bt(!0)),t===`Ctrl+Shift+X`&&(e.preventDefault(),bt(!1)),t===`Ctrl+C`&&(e.preventDefault(),Ct(!0)),t===`Ctrl+Shift+C`&&(e.preventDefault(),Ct(!1)),t===`Ctrl+D`&&(e.preventDefault(),Ot()),t!==`Delete`&&t!==`Backspace`||(e.preventDefault(),Tt()),t===`Insert`&&e.preventDefault(),t===`Ctrl+A`&&e.preventDefault(),t===`Ctrl+Q`&&ot(e),t===`ArrowLeft`&&(e.preventDefault(),$e(),K(I))){var n=function(e,t){var{rowIndex:n,columnIndex:r}=mb(uh(t),e);return r>0?Xm(hb({rowIndex:n,columnIndex:r-1},e)):t}(K(we),K(I));V(I,n),rt(uh(n))}if(t===`ArrowRight`&&(e.preventDefault(),$e(),K(I))){var r=function(e,t){var{rowIndex:n,columnIndex:r}=mb(uh(t),e);return r<e.length-1?Xm(hb({rowIndex:n,columnIndex:r+1},e)):t}(K(we),K(I));V(I,r),rt(uh(r))}if(t===`ArrowUp`&&(e.preventDefault(),$e(),K(I))){var i=function(e,t){var{rowIndex:n,columnIndex:r}=mb(uh(t),e);return n>0?Xm(hb({rowIndex:n-1,columnIndex:r},e)):t}(K(we),K(I));V(I,i),rt(uh(i))}if(t===`ArrowDown`&&(e.preventDefault(),$e(),K(I))){var o=function(e,t,n){var{rowIndex:r,columnIndex:i}=mb(uh(n),t);return r<e.length-1?Xm(hb({rowIndex:r+1,columnIndex:i},t)):n}(K(j),K(we),K(I));V(I,o),rt(uh(o))}if(t===`Enter`&&K(I)&&Am(K(I))){e.preventDefault();var s=K(I).path;gd(L(K(j),s))?zt(s):f()||V(I,R(R({},K(I)),{},{edit:!0}))}if(t.replace(/^Shift\+/,``).length===1&&K(I))return e.preventDefault(),void function(e){Mt.apply(this,arguments)}(e.key);if(t===`Ctrl+Enter`&&Am(K(I))){e.preventDefault();var c=L(K(j),K(I).path);wd(c)&&window.open(String(c),`_blank`)}t===`Escape`&&K(I)&&(e.preventDefault(),V(I,void 0)),t===`Ctrl+F`&&(e.preventDefault(),Kt(!1)),t===`Ctrl+H`&&(e.preventDefault(),Kt(!0)),t===`Ctrl+Z`&&(e.preventDefault(),Jt()),t===`Ctrl+Shift+Z`&&(e.preventDefault(),Yt())}),Y(`contextmenu`,en,ot),Z(e,Qt),qu(t,`validate`,We),qu(t,`patch`,Ge),qu(t,`focus`,Ze),qu(t,`acceptAutoRepair`,et),qu(t,`scrollTo`,tt),qu(t,`findElement`,it),qu(t,`openTransformModal`,Rt),Ko(Zt)}function aS(e,t){Go(t,!1);var n=$(t,`content`,8),r=$(t,`selection`,12),i=$(t,`readOnly`,8),a=$(t,`indentation`,8),o=$(t,`tabSize`,8),s=$(t,`truncateTextSize`,8),c=$(t,`externalMode`,8),l=$(t,`mainMenuBar`,8),u=$(t,`navigationBar`,8),d=$(t,`statusBar`,8),f=$(t,`askToFormat`,8),p=$(t,`escapeControlCharacters`,8),m=$(t,`escapeUnicodeCharacters`,8),h=$(t,`flattenColumns`,8),g=$(t,`parser`,8),_=$(t,`parseMemoizeOne`,8),v=$(t,`validator`,8),y=$(t,`validationParser`,8),b=$(t,`pathParser`,8),x=$(t,`insideModal`,8),S=$(t,`onChange`,8),C=$(t,`onChangeMode`,8),w=$(t,`onSelect`,8),T=$(t,`onRenderValue`,8),D=$(t,`onClassName`,8),ee=$(t,`onRenderMenu`,8),te=$(t,`onRenderContextMenu`,8),ne=$(t,`onError`,8),re=$(t,`onFocus`,8),ie=$(t,`onBlur`,8),O=$(t,`onSortModal`,8),ae=$(t,`onTransformModal`,8),k=$(t,`onJSONEditorModal`,8),A=B(),oe=B(),se=B(),ce=sd(`jsoneditor:JSONEditorRoot`),le=B(ox({onChange:e=>V(le,e)}).get()),ue=B(c());function de(e){if(Jp(e)){V(ue,e.undo.mode);var t=K(le).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n-1];ce(`handleUndo`,{index:n,item:e,items:t,prevItem:i}),i&&r(i.redo.selection),C()(K(ue))}}function fe(e){if(Jp(e)){V(ue,e.redo.mode);var t=K(le).items(),n=t.findIndex(t=>t===e),i=n===-1?void 0:t[n+1];ce(`handleRedo`,{index:n,item:e,items:t,nextItem:i}),i&&r(i.undo.selection),C()(K(ue))}}var pe=B(),me={type:`separator`},he=B(),j=B();function ge(e){if(K(A))return K(A).patch(e);if(K(oe))return K(oe).patch(e);if(K(se))return K(se).patch(e);throw Error(`Method patch is not available in mode "${K(ue)}"`)}function M(e,t){if(K(A))return K(A).expand(e,t);if(K(se))return K(se).expand(e,t);throw Error(`Method expand is not available in mode "${K(ue)}"`)}function N(e,t){if(K(A))return K(A).collapse(e,t);if(K(se))return K(se).collapse(e,t);throw Error(`Method collapse is not available in mode "${K(ue)}"`)}function _e(e){if(K(se))K(se).openTransformModal(e);else if(K(A))K(A).openTransformModal(e);else{if(!K(oe))throw Error(`Method transform is not available in mode "${K(ue)}"`);K(oe).openTransformModal(e)}}function ve(){if(K(se))return K(se).validate();if(K(A))return K(A).validate();if(K(oe))return K(oe).validate();throw Error(`Method validate is not available in mode "${K(ue)}"`)}function ye(){return K(A)?K(A).acceptAutoRepair():n()}function P(e){if(K(A))return K(A).scrollTo(e);if(K(oe))return K(oe).scrollTo(e);throw Error(`Method scrollTo is not available in mode "${K(ue)}"`)}function F(e){if(K(A))return K(A).findElement(e);if(K(oe))return K(oe).findElement(e);throw Error(`Method findElement is not available in mode "${K(ue)}"`)}function be(){K(se)?K(se).focus():K(A)?K(A).focus():K(oe)&&K(oe).focus()}function xe(){return Se.apply(this,arguments)}function Se(){return(Se=Va(function*(){K(se)&&(yield K(se).refresh())})).apply(this,arguments)}W(()=>J(c()),()=>{(function(e){if(e!==K(ue)){var t={type:`mode`,undo:{mode:K(ue),selection:void 0},redo:{mode:e,selection:void 0}};K(ue)===`text`&&K(se)&&K(se).flush(),ce(`add history item`,t),K(le).add(t),V(ue,e)}})(c())}),W(()=>(K(ue),J(C())),()=>{V(pe,[{type:`button`,text:`text`,title:`Switch to text mode (current mode: ${K(ue)})`,className:`jse-group-button jse-first`+(K(ue)===tf.text?` jse-selected`:``),onClick:()=>C()(tf.text)},{type:`button`,text:`tree`,title:`Switch to tree mode (current mode: ${K(ue)})`,className:`jse-group-button `+(K(ue)===tf.tree?` jse-selected`:``),onClick:()=>C()(tf.tree)},{type:`button`,text:`table`,title:`Switch to table mode (current mode: ${K(ue)})`,className:`jse-group-button jse-last`+(K(ue)===tf.table?` jse-selected`:``),onClick:()=>C()(tf.table)}])}),W(()=>(K(pe),J(ee()),K(ue),J(x()),J(i())),()=>{V(he,e=>{var t=kp(e[0])?K(pe).concat(e):K(pe).concat(me,e),n=E(t);return ee()(t,{mode:K(ue),modal:x(),readOnly:i()})||n})}),W(()=>(J(te()),K(ue),J(x()),J(i()),J(r())),()=>{V(j,e=>{var t=E(e);return te()(e,{mode:K(ue),modal:x(),readOnly:i(),selection:r()})??(!i()&&t)})}),Rc();var Ce={patch:ge,expand:M,collapse:N,transform:_e,validate:ve,acceptAutoRepair:ye,scrollTo:P,findElement:F,focus:be,refresh:xe};Qu();var we=Vl(),Te=Dc(we),Ee=e=>{Yu(Fx(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(le)},get readOnly(){return i()},get indentation(){return a()},get tabSize(){return o()},get mainMenuBar(){return l()},get statusBar(){return d()},get askToFormat(){return f()},get escapeUnicodeCharacters(){return m()},get parser(){return g()},get validator(){return v()},get validationParser(){return y()},get onChange(){return S()},get onChangeMode(){return C()},get onSelect(){return w()},onUndo:de,onRedo:fe,get onError(){return ne()},get onFocus(){return re()},get onBlur(){return ie()},get onRenderMenu(){return K(he)},get onSortModal(){return O()},get onTransformModal(){return ae()},$$legacy:!0}),e=>V(se,e),()=>K(se))},De=e=>{var t=Vl(),o=Dc(t),c=e=>{Yu(iS(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(le)},get readOnly(){return i()},get truncateTextSize(){return s()},get mainMenuBar(){return l()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return h()},get parser(){return g()},get parseMemoizeOne(){return _()},get validator(){return v()},get validationParser(){return y()},get indentation(){return a()},get onChange(){return S()},get onChangeMode(){return C()},get onSelect(){return w()},onUndo:de,onRedo:fe,get onRenderValue(){return T()},get onFocus(){return re()},get onBlur(){return ie()},get onRenderMenu(){return K(he)},get onRenderContextMenu(){return K(j)},get onSortModal(){return O()},get onTransformModal(){return ae()},get onJSONEditorModal(){return k()},$$legacy:!0}),e=>V(oe,e),()=>K(oe))},d=e=>{Yu(rx(e,{get externalContent(){return n()},get externalSelection(){return r()},get history(){return K(le)},get readOnly(){return i()},get indentation(){return a()},get truncateTextSize(){return s()},get mainMenuBar(){return l()},get navigationBar(){return u()},get escapeControlCharacters(){return p()},get escapeUnicodeCharacters(){return m()},get parser(){return g()},get parseMemoizeOne(){return _()},get validator(){return v()},get validationParser(){return y()},get pathParser(){return b()},get onError(){return ne()},get onChange(){return S()},get onChangeMode(){return C()},get onSelect(){return w()},onUndo:de,onRedo:fe,get onRenderValue(){return T()},get onClassName(){return D()},get onFocus(){return re()},get onBlur(){return ie()},get onRenderMenu(){return K(he)},get onRenderContextMenu(){return K(j)},get onSortModal(){return O()},get onTransformModal(){return ae()},get onJSONEditorModal(){return k()},$$legacy:!0}),e=>V(A,e),()=>K(A))};Q(o,e=>{K(ue),J(tf),q(()=>K(ue)===tf.table)?e(c):e(d,!1)},!0),Z(e,t)};return Q(Te,e=>{K(ue),J(tf),q(()=>K(ue)===tf.text||String(K(ue))===`code`)?e(Ee):e(De,!1)}),Z(e,we),qu(t,`patch`,ge),qu(t,`expand`,M),qu(t,`collapse`,N),qu(t,`transform`,_e),qu(t,`validate`,ve),qu(t,`acceptAutoRepair`,ye),qu(t,`scrollTo`,P),qu(t,`findElement`,F),qu(t,`focus`,be),qu(t,`refresh`,xe),Ko(Ce)}Lf(`/* over all fonts, sizes, and colors */
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
}`);var oS=X(`<div class="jse-error svelte-t4zsk3"> </div>`),sS=X(`<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>`),cS=X(`<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>`),lS=X(`<button type="button" class="jse-primary svelte-t4zsk3">Close</button>`),uS=X(`<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>`,1),dS=X(`<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>`),fS={};Lf(`/* over all fonts, sizes, and colors */
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
}`);var pS=ed(()=>fS),mS=X(`<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>`),hS=X(`<div class="jse-error svelte-lwzlls"> </div>`),gS=X(`<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>`,1);Lf(`/* over all fonts, sizes, and colors */
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
}`);var _S=X(`<div role="none"><!></div> <!> <!> <!>`,1);function vS(e,t){Go(t,!1);var n=B(void 0,!0),r=sd(`jsoneditor:JSONEditor`),i={text:``},a=void 0,o=!1,s=tf.tree,c=!0,l=!0,u=!0,d=!0,f=!1,p=!1,m=!0,h=JSON,g=void 0,_=JSON,v={parse:ng,stringify:tg},y=[Kf],b=y[0].id,x=hx,S=void 0,C=void 0,w=eg,D=hx,ee=hx,te=hx,ne=hx,re=e=>{console.error(e),alert(e.toString())},ie=hx,O=hx,ae=$(t,`content`,13,i),k=$(t,`selection`,13,a),A=$(t,`readOnly`,13,o),se=$(t,`indentation`,13,2),ce=$(t,`tabSize`,13,4),le=$(t,`truncateTextSize`,13,1e3),ue=$(t,`mode`,13,s),de=$(t,`mainMenuBar`,13,c),fe=$(t,`navigationBar`,13,l),pe=$(t,`statusBar`,13,u),me=$(t,`askToFormat`,13,d),he=$(t,`escapeControlCharacters`,13,f),j=$(t,`escapeUnicodeCharacters`,13,p),ge=$(t,`flattenColumns`,13,m),M=$(t,`parser`,13,h),N=$(t,`validator`,13,g),_e=$(t,`validationParser`,13,_),ve=$(t,`pathParser`,13,v),ye=$(t,`queryLanguages`,13,y),P=$(t,`queryLanguageId`,13,b),F=$(t,`onChangeQueryLanguage`,13,x),be=$(t,`onChange`,13,S),xe=$(t,`onSelect`,13,C),Se=$(t,`onRenderValue`,13,w),Ce=$(t,`onClassName`,13,D),we=$(t,`onRenderMenu`,13,ee),Te=$(t,`onRenderContextMenu`,13,te),Ee=$(t,`onChangeMode`,13,ne),De=$(t,`onError`,13,re),Oe=$(t,`onFocus`,13,ie),ke=$(t,`onBlur`,13,O),Ae=B(dd(),!0),je=B(!1,!0),Me=B(void 0,!0),Ne=B(void 0,!0),Pe=B(void 0,!0),Fe=B(void 0,!0),I=B(M(),!0);function Ie(){return ae()}function Le(e){r(`set`);var t=Hd(e);if(t)throw Error(t);V(Ae,dd()),ae(e),Cs()}function Re(e){r(`update`);var t=Hd(e);if(t)throw Error(t);ae(e),Cs()}function ze(e){var t=K(Me).patch(e);return Cs(),t}function Be(e){k(e),Cs()}function Ve(e,t){K(Me).expand(e,t),Cs()}function He(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];K(Me).collapse(e,t),Cs()}function Ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};K(Me).transform(e),Cs()}function We(){return K(Me).validate()}function Ge(){var e=K(Me).acceptAutoRepair();return Cs(),e}function Ke(e){return qe.apply(this,arguments)}function qe(){return(qe=Va(function*(e){yield K(Me).scrollTo(e)})).apply(this,arguments)}function Je(e){return K(Me).findElement(e)}function Ye(){K(Me).focus(),Cs()}function Xe(){return Ze.apply(this,arguments)}function Ze(){return(Ze=Va(function*(){yield K(Me).refresh()})).apply(this,arguments)}function Qe(e){for(var t of Object.keys(e))switch(t){case`content`:ae(e[t]??i);break;case`selection`:k(e[t]??a);break;case`readOnly`:A(e[t]??o);break;case`indentation`:se(e[t]??2);break;case`tabSize`:ce(e[t]??4);break;case`truncateTextSize`:le(e[t]??1e3);break;case`mode`:ue(e[t]??s);break;case`mainMenuBar`:de(e[t]??c);break;case`navigationBar`:fe(e[t]??l);break;case`statusBar`:pe(e[t]??u);break;case`askToFormat`:me(e[t]??d);break;case`escapeControlCharacters`:he(e[t]??f);break;case`escapeUnicodeCharacters`:j(e[t]??p);break;case`flattenColumns`:ge(e[t]??m);break;case`parser`:M(e[t]??h);break;case`validator`:N(e[t]??g);break;case`validationParser`:_e(e[t]??_);break;case`pathParser`:ve(e[t]??v);break;case`queryLanguages`:ye(e[t]??y);break;case`queryLanguageId`:P(e[t]??b);break;case`onChangeQueryLanguage`:F(e[t]??x);break;case`onChange`:be(e[t]??S);break;case`onRenderValue`:Se(e[t]??w);break;case`onClassName`:Ce(e[t]??D);break;case`onRenderMenu`:we(e[t]??ee);break;case`onRenderContextMenu`:Te(e[t]??te);break;case`onChangeMode`:Ee(e[t]??ne);break;case`onSelect`:xe(e[t]??C);break;case`onError`:De(e[t]??re);break;case`onFocus`:Oe(e[t]??ie);break;case`onBlur`:ke(e[t]??O);break;default:n(t)}function n(e){r(`Unknown property "${e}"`)}ye().some(e=>e.id===P())||P(ye()[0].id),Cs()}function $e(){return et.apply(this,arguments)}function et(){return(et=Va(function*(){throw Error(`class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.`)})).apply(this,arguments)}function tt(e,t,n){ae(e),be()&&be()(e,t,n)}function nt(e){k(e),xe()&&xe()(E(e))}function rt(){V(je,!0),Oe()&&Oe()()}function it(){V(je,!1),ke()&&ke()()}function at(e){return ot.apply(this,arguments)}function ot(){return(ot=Va(function*(e){ue()!==e&&(ue(e),Cs(),Ye(),Ee()(e))})).apply(this,arguments)}function st(e){r(`handleChangeQueryLanguage`,e),P(e),F()(e)}function ct(e){var{id:t,json:r,rootPath:i,onTransform:a,onClose:o}=e;A()||V(Fe,{id:t,json:r,rootPath:i,indentation:se(),truncateTextSize:le(),escapeControlCharacters:he(),escapeUnicodeCharacters:j(),parser:M(),parseMemoizeOne:K(n),validationParser:_e(),pathParser:ve(),queryLanguages:ye(),queryLanguageId:P(),onChangeQueryLanguage:st,onRenderValue:Se(),onRenderMenu:e=>we()(e,{mode:ue(),modal:!0,readOnly:A()}),onRenderContextMenu:e=>Te()(e,{mode:ue(),modal:!0,readOnly:A(),selection:k()}),onClassName:Ce(),onTransform:a,onClose:o})}function lt(e){A()||V(Pe,e)}function ut(e){var{content:t,path:n,onPatch:i,onClose:a}=e;r(`onJSONEditorModal`,{content:t,path:n}),V(Ne,{content:t,path:n,onPatch:i,readOnly:A(),indentation:se(),tabSize:ce(),truncateTextSize:le(),mainMenuBar:de(),navigationBar:fe(),statusBar:pe(),askToFormat:me(),escapeControlCharacters:he(),escapeUnicodeCharacters:j(),flattenColumns:ge(),parser:M(),validator:void 0,validationParser:_e(),pathParser:ve(),onRenderValue:Se(),onClassName:Ce(),onRenderMenu:we(),onRenderContextMenu:Te(),onSortModal:lt,onTransformModal:ct,onClose:a})}function dt(e){e.stopPropagation()}W(()=>(J(M()),K(I),J(ae()),dd),()=>{if(!$d(M(),K(I))){if(r(`parser changed, recreate editor`),Wd(ae())){var e=K(I).stringify(ae().json);ae({json:e===void 0?void 0:M().parse(e)})}V(I,M()),V(Ae,dd())}}),W(()=>J(ae()),()=>{var e=Hd(ae());e&&console.error(`Error: `+e)}),W(()=>J(k()),()=>{k()===null&&console.warn(`selection is invalid: it is null but should be undefined`)}),W(()=>J(M()),()=>{V(n,oe(M().parse))}),W(()=>J(ue()),()=>{r(`mode changed to`,ue())}),Rc();var ft={get:Ie,set:Le,update:Re,patch:ze,select:Be,expand:Ve,collapse:He,transform:Ue,validate:We,acceptAutoRepair:Ge,scrollTo:Ke,findElement:Je,focus:Ye,refresh:Xe,updateProps:Qe,destroy:$e};return Qu(!0),Hf(e,{children:(e,t)=>{var r,i=_S(),a=Dc(i);uu(H(a),()=>K(Ae),e=>{Yu(aS(e,{get externalMode(){return ue()},get content(){return ae()},get selection(){return k()},get readOnly(){return A()},get indentation(){return se()},get tabSize(){return ce()},get truncateTextSize(){return le()},get statusBar(){return pe()},get askToFormat(){return me()},get mainMenuBar(){return de()},get navigationBar(){return fe()},get escapeControlCharacters(){return he()},get escapeUnicodeCharacters(){return j()},get flattenColumns(){return ge()},get parser(){return M()},get parseMemoizeOne(){return K(n)},get validator(){return N()},get validationParser(){return _e()},get pathParser(){return ve()},insideModal:!1,get onError(){return De()},onChange:tt,onChangeMode:at,onSelect:nt,get onRenderValue(){return Se()},get onClassName(){return Ce()},onFocus:rt,onBlur:it,get onRenderMenu(){return we()},get onRenderContextMenu(){return Te()},onSortModal:lt,onTransformModal:ct,onJSONEditorModal:ut,$$legacy:!0}),e=>V(Me,e),()=>K(Me))});var o=U(a,2),s=e=>{(function(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=sd(`jsoneditor:SortModal`),s=$(t,`id`,9),c=$(t,`json`,9),l=$(t,`rootPath`,9),u=$(t,`onSort`,9),d=$(t,`onClose`,9),f={value:1,label:`ascending`},p=[f,{value:-1,label:`descending`}],m=`${s()}:${fn(l())}`,h=B(pS()[m]?.selectedProperty,!0),g=B(pS()[m]?.selectedDirection||f,!0),_=B(void 0,!0);function v(){try{var e;V(_,void 0);var t=K(h)?.value||((e=K(a))==null||(e=e[0])==null?void 0:e.value)||[],n=K(g)?.value,r=Hy(c(),l(),t,n);u()!==void 0&&l()!==void 0&&u()({operations:r,rootPath:l(),itemPath:t,direction:n}),d()()}catch(e){V(_,String(e))}}function y(e){e.focus()}W(()=>(J(c()),J(l())),()=>{V(n,L(c(),l()))}),W(()=>K(n),()=>{V(r,Array.isArray(K(n)))}),W(()=>(K(r),K(n)),()=>{V(i,K(r)?Od(K(n)):void 0)}),W(()=>(K(i),rg),()=>{V(a,K(i)?K(i).map(rg):void 0)}),W(()=>(pS(),K(h),K(g)),()=>{pS(pS()[m]={selectedProperty:K(h),selectedDirection:K(g)}),o(`store state in memory`,m,pS()[m])}),Rc(),Qu(!0),Nv(e,{get onClose(){return d()},className:`jse-sort-modal`,children:(e,t)=>{var n=gS(),i=Dc(n),o=rc(()=>K(r)?`Sort array items`:`Sort object keys`);sv(i,{get title(){return K(o)},get onClose(){return d()}});var s=H(U(i,2)),c=H(U(H(s))),u=H(U(H(c))),f=U(c),m=e=>{var t=mS();$_(H(U(H(t))),{showChevron:!0,get items(){return K(a)},get value(){return K(h)},set value(e){V(h,e)},$$legacy:!0}),Z(e,t)};Q(f,e=>{K(r),K(a),q(()=>K(r)&&K(a)&&K(a)?.length>1)&&e(m)}),$_(H(U(H(U(f)))),{showChevron:!0,clearable:!1,get items(){return p},get value(){return K(g)},set value(e){V(g,e)},$$legacy:!0});var b=U(s,2),x=H(b),S=e=>{var t=hS(),n=H(t);G(()=>Kl(n,K(_))),Z(e,t)};Q(x,e=>{K(_)&&e(S)});var C=H(U(b,2));Lc(()=>Y(`click`,C,v)),bu(C,e=>y?.(e)),G(e=>{Lu(u,e),C.disabled=(K(r),K(a),K(h),q(()=>!!(K(r)&&K(a)&&K(a)?.length>1)&&!K(h)))},[()=>(J(l()),J(Et),J(tg),q(()=>l()&&!Et(l())?tg(l()):`(document root)`))]),Z(e,n)},$$slots:{default:!0}}),Ko()})(e,od(()=>K(Pe),{onClose:()=>{var e;(e=K(Pe))==null||e.onClose(),V(Pe,void 0)}}))};Q(o,e=>{K(Pe)&&e(s)});var c=U(o,2),l=e=>{mx(e,od(()=>K(Fe),{onClose:()=>{var e;(e=K(Fe))==null||e.onClose(),V(Fe,void 0)}}))};Q(c,e=>{K(Fe)&&e(l)});var u=U(c,2),d=e=>{(function(e,t){Go(t,!1);var n=B(void 0,!0),r=B(void 0,!0),i=B(void 0,!0),a=B(void 0,!0),o=sd(`jsoneditor:JSONEditorModal`),s=$(t,`content`,9),c=$(t,`path`,9),l=$(t,`onPatch`,9),u=$(t,`readOnly`,9),d=$(t,`indentation`,9),f=$(t,`tabSize`,9),p=$(t,`truncateTextSize`,9),m=$(t,`mainMenuBar`,9),h=$(t,`navigationBar`,9),g=$(t,`statusBar`,9),_=$(t,`askToFormat`,9),v=$(t,`escapeControlCharacters`,9),y=$(t,`escapeUnicodeCharacters`,9),b=$(t,`flattenColumns`,9),x=$(t,`parser`,9),S=$(t,`validator`,9),C=$(t,`validationParser`,9),w=$(t,`pathParser`,9),E=$(t,`onRenderValue`,9),D=$(t,`onClassName`,9),ee=$(t,`onRenderMenu`,9),te=$(t,`onRenderContextMenu`,9),ne=$(t,`onSortModal`,9),re=$(t,`onTransformModal`,9),ie=$(t,`onClose`,9),O=B(void 0,!0),ae=B(void 0,!0),k={mode:ce(s()),content:s(),selection:void 0,relativePath:c()},A=B([k],!0),se=B(void 0,!0);function ce(e){return Wd(e)&&Ut(e.json)?tf.table:tf.tree}function le(){var e=T(K(A))?.selection;Nm(e)&&K(O).scrollTo(uh(e))}function ue(){if(o(`handleApply`),!u())try{V(se,void 0);var e=K(n).relativePath,t=K(n).content,r=[{op:`replace`,path:fn(e),value:Kd(t,x()).json}];if(K(A).length>1){var i=Kd(K(A)[K(A).length-2].content,x()).json,a={json:hn(i,r)},s=R(R({},K(A)[K(A).length-2]||k),{},{content:a});V(A,[...K(A).slice(0,K(A).length-2),s]),Cs(),le()}else l()(r),ie()()}catch(e){V(se,String(e))}}function de(){if(o(`handleClose`),K(ae))V(ae,!1);else if(K(A).length>1){var e;V(A,St(K(A))),Cs(),(e=K(O))==null||e.focus(),le(),V(se,void 0)}else ie()()}function fe(e){o(`handleChange`,e),he(t=>R(R({},t),{},{content:e}))}function pe(e){o(`handleChangeSelection`,e),he(t=>R(R({},t),{},{selection:e}))}function me(e){o(`handleChangeMode`,e),he(t=>R(R({},t),{},{mode:e}))}function he(e){var t=e(T(K(A)));V(A,[...St(K(A)),t])}function j(e){V(se,e.toString()),console.error(e)}function ge(e){var t,{content:n,path:r}=e;o(`handleJSONEditorModal`,{content:n,path:r});var i={mode:ce(n),content:n,selection:void 0,relativePath:r};V(A,[...K(A),i]),Cs(),(t=K(O))==null||t.focus()}function M(e){e.focus()}au(()=>{var e;(e=K(O))==null||e.focus()}),W(()=>K(A),()=>{V(n,T(K(A))||k)}),W(()=>K(A),()=>{V(r,K(A).flatMap(e=>e.relativePath))}),W(()=>(K(r),tg),()=>{V(i,Et(K(r))?`(document root)`:tg(K(r)))}),W(()=>J(x()),()=>{V(a,oe(x().parse))}),Rc(),Qu(!0),Nv(e,{onClose:de,className:`jse-jsoneditor-modal`,get fullscreen(){return K(ae)},children:(e,t)=>{var r=dS();Hf(H(r),{children:(e,t)=>{var r=uS(),o=Dc(r),s=rc(()=>(K(A),q(()=>K(A).length>1?` (${K(A).length})`:``)));sv(o,{get title(){return`Edit nested content ${K(s)??``}`},fullScreenButton:!0,onClose:de,get fullscreen(){return K(ae)},set fullscreen(e){V(ae,e)},$$legacy:!0});var c=U(H(U(o,2)),2),l=U(c,4);Yu(aS(H(l),{get externalMode(){return K(n),q(()=>K(n).mode)},get content(){return K(n),q(()=>K(n).content)},get selection(){return K(n),q(()=>K(n).selection)},get readOnly(){return u()},get indentation(){return d()},get tabSize(){return f()},get truncateTextSize(){return p()},get statusBar(){return g()},get askToFormat(){return _()},get mainMenuBar(){return m()},get navigationBar(){return h()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return y()},get flattenColumns(){return b()},get parser(){return x()},get parseMemoizeOne(){return K(a)},get validator(){return S()},get validationParser(){return C()},get pathParser(){return w()},insideModal:!0,onError:j,onChange:fe,onChangeMode:me,onSelect:pe,get onRenderValue(){return E()},get onClassName(){return D()},get onFocus(){return hx},get onBlur(){return hx},get onRenderMenu(){return ee()},get onRenderContextMenu(){return te()},get onSortModal(){return ne()},get onTransformModal(){return re()},onJSONEditorModal:ge,$$legacy:!0}),e=>V(O,e),()=>K(O));var T=H(U(l,2)),ie=e=>{var t=oS(),n=H(t);G(()=>Kl(n,K(se))),Z(e,t)};Q(T,e=>{K(se)&&e(ie)});var k=U(T,2),oe=e=>{var t=sS();ep(H(t),{get data(){return _i}}),Y(`click`,t,de),Z(e,t)};Q(k,e=>{K(A),q(()=>K(A).length>1)&&e(oe)});var ce=U(k,2),le=e=>{var t=cS();Lc(()=>Y(`click`,t,ue)),bu(t,e=>M?.(e)),Z(e,t)},he=e=>{var t=lS();Y(`click`,t,de),Z(e,t)};Q(ce,e=>{u()?e(he,!1):e(le)}),G(()=>Lu(c,K(i))),Z(e,r)},$$slots:{default:!0}}),Z(e,r)},$$slots:{default:!0}}),Ko()})(e,od(()=>K(Ne),{onClose:()=>{var e;(e=K(Ne))==null||e.onClose(),V(Ne,void 0)}}))};Q(u,e=>{K(Ne)&&e(d)}),G(()=>r=Du(a,1,`jse-main svelte-1l55585`,null,r,{"jse-focus":K(je)})),Y(`keydown`,a,dt),Z(e,i)},$$slots:{default:!0}}),qu(t,`get`,Ie),qu(t,`set`,Le),qu(t,`update`,Re),qu(t,`patch`,ze),qu(t,`select`,Be),qu(t,`expand`,Ve),qu(t,`collapse`,He),qu(t,`transform`,Ue),qu(t,`validate`,We),qu(t,`acceptAutoRepair`,Ge),qu(t,`scrollTo`,Ke),qu(t,`findElement`,Je),qu(t,`focus`,Ye),qu(t,`refresh`,Xe),qu(t,`updateProps`,Qe),qu(t,`destroy`,$e),Ko(ft)}function yS(e){var{target:t,props:n}=e,r=ql(vS,{target:t,props:n});return r.destroy=Va(function*(){return function(e,t){var n=Yl.get(e);return n?(Yl.delete(e),n(t)):Promise.resolve()}(r)}),Cs(),r}export{Wd as n,yS as r,tf as t};