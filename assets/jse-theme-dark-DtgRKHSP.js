import{bO as s1,aR as cd,bP as i1,bQ as l1,bR as eg,bS as c1,bT as u1,bU as d1,bV as f1,bW as v1,bX as h1,bY as p1,bZ as Of,b_ as Ad,b$ as m1,c0 as g1,c1 as b1,c2 as y1,c3 as oh,c4 as j1,c5 as w1,c6 as x1,aN as tg,ab as Ft,ao as k1,aU as Nu,c7 as $f}from"./index-BrEFJmNm.js";import{m as ql}from"./memoize-one.esm-BdPwpGay.js";import{L as S1,s as _1,t as _o,a as C1,b as E1,i as O1,f as ng,c as ah,d as $1,F as P1,V as rg,e as M1,E as Ds,g as Tu,R as og,D as ag,H as R1,h as sg,j as ui,k as sh,C as bl,l as N1,m as T1,n as A1,o as q1,p as z1,q as I1,r as D1,u as L1,v as U1,w as F1,x as V1,y as B1,z as W1,A as H1,B as K1,G as J1,I as Q1,J as G1,K as Y1,M as X1,N as Z1,O as ey,P as ty,Q as ny,S as ry,T as oy,U as ih,W as qd,X as lh,Y as ay,Z as sy,_ as iy,$ as ly,a0 as cy,a1 as uy,a2 as dy,a3 as fy}from"./index-BMKbNZ4_.js";import{b as vy,l as Wt}from"./last-D-rYfuUG.js";import{b as hy,m as py}from"./map-DCXU-w_n.js";import{b as ud}from"./_baseIteratee-C3s6jKTb.js";import{r as ig}from"./range-VG0RotPx.js";import{c as lg}from"./_castFunction-BdEMzG8D.js";import{t as my}from"./toFinite-B75vLAiu.js";import{b as gy,c as by,a as yy}from"./_baseEach-DC-fgxsx.js";function jy(e){var t=my(e),r=t%1;return t===t?r?t-r:t:0}function Mr(){}var wy=1,xy=4;function ky(e,t){return t=typeof t=="function"?t:void 0,s1(e,wy|xy,t)}function Sy(e,t,r,o){for(var s=-1,a=e==null?0:e.length;++s<a;){var i=e[s];t(o,i,r(i),e)}return o}function _y(e,t,r,o){return gy(e,function(s,a,i){t(o,s,r(s),i)}),o}function cg(e,t){return function(r,o){var s=cd(r)?Sy:_y,a=t?t():{};return s(r,e,ud(o),a)}}function Cy(e,t){for(var r=e==null?0:e.length;r--&&t(e[r],r,e)!==!1;);return e}var Ey=i1(!0);function Oy(e,t){return e&&Ey(e,t,l1)}var $y=by(Oy,!0);function Py(e,t){var r=cd(e)?Cy:$y;return r(e,lg(t))}function Ia(e){return e&&e.length?e[0]:void 0}var My=Object.prototype,Ry=My.hasOwnProperty,Ny=cg(function(e,t,r){Ry.call(e,r)?e[r].push(t):eg(e,r,[t])});function tn(e){var t=e==null?0:e.length;return t?vy(e,0,-1):[]}var Ty="[object Map]",Ay="[object Set]",qy=Object.prototype,zy=qy.hasOwnProperty;function un(e){if(e==null)return!0;if(c1(e)&&(cd(e)||typeof e=="string"||typeof e.splice=="function"||u1(e)||d1(e)||f1(e)))return!e.length;var t=v1(e);if(t==Ty||t==Ay)return!e.size;if(h1(e))return!p1(e).length;for(var r in e)if(zy.call(e,r))return!1;return!0}function Iy(e,t){return e<t}function Dy(e,t){var r={};return t=ud(t),yy(e,function(o,s,a){eg(r,s,t(o,s,a))}),r}function Ly(e,t,r){for(var o=-1,s=e.length;++o<s;){var a=e[o],i=t(a);if(i!=null&&(l===void 0?i===i&&!Of(i):r(i,l)))var l=i,c=a}return c}function dc(e,t){return e&&e.length?Ly(e,ud(t),Iy):void 0}function Uy(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}function Fy(e,t){if(e!==t){var r=e!==void 0,o=e===null,s=e===e,a=Of(e),i=t!==void 0,l=t===null,c=t===t,d=Of(t);if(!l&&!d&&!a&&e>t||a&&i&&c&&!l&&!d||o&&i&&c||!r&&c||!s)return 1;if(!o&&!a&&!d&&e<t||d&&r&&s&&!o&&!a||l&&r&&s||!i&&s||!c)return-1}return 0}function Vy(e,t,r){for(var o=-1,s=e.criteria,a=t.criteria,i=s.length,l=r.length;++o<i;){var c=Fy(s[o],a[o]);if(c){if(o>=l)return c;var d=r[o];return c*(d=="desc"?-1:1)}}return e.index-t.index}function By(e,t,r){t.length?t=Ad(t,function(a){return cd(a)?function(i){return m1(i,a.length===1?a[0]:a)}:a}):t=[g1];var o=-1;t=Ad(t,b1(ud));var s=hy(e,function(a,i,l){var c=Ad(t,function(d){return d(a)});return{criteria:c,index:++o,value:a}});return Uy(s,function(a,i){return Vy(a,i,r)})}var Wy=cg(function(e,t,r){e[r?0:1].push(t)},function(){return[[],[]]}),Hy=y1(function(e,t){if(e==null)return[];var r=t.length;return r>1&&oh(e,t[0],t[1])?t=[]:r>2&&oh(t[0],t[1],t[2])&&(t=[t[0]]),By(e,j1(t),[])}),Ky=9007199254740991,zd=4294967295,Jy=Math.min;function Qy(e,t){if(e=jy(e),e<1||e>Ky)return[];var r=zd,o=Jy(e,zd);t=lg(t),e-=zd;for(var s=w1(o,t);++r<e;)t(r);return s}var Gy=0;function Wi(e){var t=++Gy;return x1(e)+t}var Id,ch;function ug(){return ch||(ch=1,Id=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,s,a;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(s=o;s--!==0;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(a=Object.keys(t),o=a.length,o!==Object.keys(r).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[s]))return!1;for(s=o;s--!==0;){var i=a[s];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}),Id}function hr(e){return Array.isArray(e)}function wr(e){return e!==null&&typeof e=="object"&&(e.constructor===void 0||e.constructor.name==="Object")}function dg(e){return e&&typeof e=="object"?e.op==="add":!1}function fg(e){return e&&typeof e=="object"?e.op==="remove":!1}function vv(e){return e&&typeof e=="object"?e.op==="replace":!1}function Pf(e){return e&&typeof e=="object"?e.op==="copy":!1}function Ws(e){return e&&typeof e=="object"?e.op==="move":!1}function Yy(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Xy(e,t){return e===t}function vg(e){return e.slice(0,e.length-1)}function Zy(e){return e[e.length-1]}function ej(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xy;if(e.length<t.length)return!1;for(let o=0;o<t.length;o++)if(!r(e[o],t[o]))return!1;return!0}function hg(e){return typeof e=="object"&&e!==null}function hv(e){if(hr(e)){const t=e.slice();return Object.getOwnPropertySymbols(e).forEach(r=>{t[r]=e[r]}),t}else if(wr(e)){const t={...e};return Object.getOwnPropertySymbols(e).forEach(r=>{t[r]=e[r]}),t}else return e}function pv(e,t,r){if(e[t]===r)return e;{const o=hv(e);return o[t]=r,o}}function Xe(e,t){let r=e,o=0;for(;o<t.length;)wr(r)?r=r[t[o]]:hr(r)?r=r[parseInt(t[o])]:r=void 0,o++;return r}function fo(e,t,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return r;const s=t[0],a=fo(e?e[s]:void 0,t.slice(1),r,o);if(wr(e)||hr(e))return pv(e,s,a);if(o){const i=tj.test(s)?[]:{};return i[s]=a,i}else throw new Error("Path does not exist")}const tj=/^\d+$/;function mv(e,t,r){if(t.length===0)return r(e);if(!hg(e))throw new Error("Path doesn't exist");const o=t[0],s=mv(e[o],t.slice(1),r);return pv(e,o,s)}function dd(e,t){if(t.length===0)return e;if(!hg(e))throw new Error("Path does not exist");if(t.length===1){const s=t[0];if(s in e){const a=hv(e);return hr(a)&&a.splice(parseInt(s),1),wr(a)&&delete a[s],a}else return e}const r=t[0],o=dd(e[r],t.slice(1));return pv(e,r,o)}function gv(e,t,r){const o=t.slice(0,t.length-1),s=t[t.length-1];return mv(e,o,a=>{if(!Array.isArray(a))throw new TypeError("Array expected at path "+JSON.stringify(o));const i=hv(a);return i.splice(parseInt(s),0,r),i})}function Io(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:Io(e[t[0]],t.slice(1))}function go(e){const t=e.split("/");return t.shift(),t.map(r=>r.replace(/~1/g,"/").replace(/~0/g,"~"))}function mt(e){return e.map(pg).join("")}function pg(e){return"/"+String(e).replace(/~/g,"~0").replace(/\//g,"~1")}function fc(e,t){return e+pg(t)}function Jo(e,t,r){let o=e;for(let s=0;s<t.length;s++){cj(t[s]);let a=t[s];if(r&&r.before){const c=r.before(o,a);if(c!==void 0){if(c.document!==void 0&&(o=c.document),c.json!==void 0)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"');c.operation!==void 0&&(a=c.operation)}}const i=o,l=Qo(o,a.path);if(a.op==="add")o=oj(o,l,a.value);else if(a.op==="remove")o=rj(o,l);else if(a.op==="replace")o=nj(o,l,a.value);else if(a.op==="copy")o=aj(o,l,Mf(a.from));else if(a.op==="move")o=sj(o,l,Mf(a.from));else if(a.op==="test")ij(o,l,a.value);else throw new Error("Unknown JSONPatch operation "+JSON.stringify(a));if(r&&r.after){const c=r.after(o,a,i);c!==void 0&&(o=c)}}return o}function nj(e,t,r){return fo(e,t,r)}function rj(e,t){return dd(e,t)}function oj(e,t,r){return Xl(e,t)?gv(e,t,r):fo(e,t,r)}function aj(e,t,r){const o=Xe(e,r);if(Xl(e,t))return gv(e,t,o);{const s=Xe(e,r);return fo(e,t,s)}}function sj(e,t,r){const o=Xe(e,r),s=dd(e,r);return Xl(s,t)?gv(s,t,o):fo(s,t,o)}function ij(e,t,r){if(r===void 0)throw new Error(`Test failed: no value provided (path: "${mt(t)}")`);if(!Io(e,t))throw new Error(`Test failed: path not found (path: "${mt(t)}")`);const o=Xe(e,t);if(!Yy(o,r))throw new Error(`Test failed, value differs (path: "${mt(t)}")`)}function Xl(e,t){if(t.length===0)return!1;const r=Xe(e,vg(t));return Array.isArray(r)}function lj(e,t){if(Zy(t)!=="-")return t;const r=vg(t),o=Xe(e,r);return r.concat(o.length)}function cj(e){if(!["add","remove","replace","copy","move","test"].includes(e.op))throw new Error("Unknown JSONPatch op "+JSON.stringify(e.op));if(typeof e.path!="string")throw new Error('Required property "path" missing or not a string in operation '+JSON.stringify(e));if((e.op==="copy"||e.op==="move")&&typeof e.from!="string")throw new Error('Required property "from" missing or not a string in operation '+JSON.stringify(e))}function Qo(e,t){return lj(e,go(t))}function Mf(e){return go(e)}function mg(e,t,r){let o=[];return Jo(e,t,{before:(a,i)=>{let l;const c=Qo(a,i.path);if(i.op==="add")l=yg(a,c);else if(i.op==="remove")l=bg(a,c);else if(i.op==="replace")l=gg(a,c);else if(i.op==="copy")l=uj(a,c);else if(i.op==="move")l=dj(a,c,Mf(i.from));else if(i.op==="test")l=[];else throw new Error("Unknown JSONPatch operation "+JSON.stringify(i));let d;if(r&&r.before){const u=r.before(a,i,l);if(u&&u.revertOperations&&(l=u.revertOperations),u&&u.document&&(d=u.document),u&&u.json)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"')}if(o=l.concat(o),d!==void 0)return{document:d}}}),o}function gg(e,t){return[{op:"replace",path:mt(t),value:Xe(e,t)}]}function bg(e,t){return[{op:"add",path:mt(t),value:Xe(e,t)}]}function yg(e,t){return Xl(e,t)||!Io(e,t)?[{op:"remove",path:mt(t)}]:gg(e,t)}function uj(e,t){return yg(e,t)}function dj(e,t,r){if(t.length<r.length&&ej(r,t))return[{op:"replace",path:mt(t),value:e}];const o={op:"move",from:mt(t),path:mt(r)};return!Xl(e,t)&&Io(e,t)?[o,...bg(e,t)]:[o]}var vc={},uh;function fj(){if(uh)return vc;uh=1;var e={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",'"':'"',"/":"/","\\":"\\"},t=97;vc.parse=function(p,y,v){var h={},f=0,g=0,x=0,j=v&&v.bigint&&typeof BigInt<"u";return{data:k("",!0),pointers:h};function k(A,O){C();var M;Re(A,"value");var re=te();switch(re){case"t":F("rue"),M=!0;break;case"f":F("alse"),M=!1;break;case"n":F("ull"),M=null;break;case'"':M=T();break;case"[":M=ne(A);break;case"{":M=ee(A);break;default:ye(),"-0123456789".indexOf(re)>=0?M=R():Q()}return Re(A,"valueEnd"),C(),O&&x<p.length&&Q(),M}function C(){e:for(;x<p.length;){switch(p[x]){case" ":g++;break;case"	":g+=4;break;case"\r":g=0;break;case`
`:g=0,f++;break;default:break e}x++}}function T(){for(var A="",O;O=te(),O!='"';)O=="\\"?(O=te(),O in e?A+=e[O]:O=="u"?A+=W():L()):A+=O;return A}function R(){var A="",O=!0;p[x]=="-"&&(A+=te()),A+=p[x]=="0"?te():we(),p[x]=="."&&(A+=te()+we(),O=!1),(p[x]=="e"||p[x]=="E")&&(A+=te(),(p[x]=="+"||p[x]=="-")&&(A+=te()),A+=we(),O=!1);var M=+A;return j&&O&&(M>Number.MAX_SAFE_INTEGER||M<Number.MIN_SAFE_INTEGER)?BigInt(A):M}function ne(A){C();var O=[],M=0;if(te()=="]")return O;for(ye();;){var re=A+"/"+M;O.push(k(re)),C();var Oe=te();if(Oe=="]")break;Oe!=","&&L(),C(),M++}return O}function ee(A){C();var O={};if(te()=="}")return O;for(ye();;){var M=ge();te()!='"'&&L();var re=T(),Oe=A+"/"+w(re);Ee(Oe,"key",M),Re(Oe,"keyEnd"),C(),te()!=":"&&L(),C(),O[re]=k(Oe),C();var ae=te();if(ae=="}")break;ae!=","&&L(),C()}return O}function F(A){for(var O=0;O<A.length;O++)te()!==A[O]&&L()}function te(){le();var A=p[x];return x++,g++,A}function ye(){x--,g--}function W(){for(var A=4,O=0;A--;){O<<=4;var M=te().toLowerCase();M>="a"&&M<="f"?O+=M.charCodeAt()-t+10:M>="0"&&M<="9"?O+=+M:L()}return String.fromCharCode(O)}function we(){for(var A="";p[x]>="0"&&p[x]<="9";)A+=te();if(A.length)return A;le(),Q()}function Re(A,O){Ee(A,O,ge())}function Ee(A,O,M){h[A]=h[A]||{},h[A][O]=M}function ge(){return{line:f,column:g,pos:x}}function Q(){throw new SyntaxError("Unexpected token "+p[x]+" in JSON at position "+x)}function L(){ye(),Q()}function le(){if(x>=p.length)throw new SyntaxError("Unexpected end of JSON input")}},vc.stringify=function(p,y,v){if(!o(p))return;var h=0,f,g,x=typeof v=="object"?v.space:v;switch(typeof x){case"number":var j=x>10?10:x<0?0:Math.floor(x);x=j&&Ee(j," "),f=j,g=j;break;case"string":x=x.slice(0,10),f=0,g=0;for(var k=0;k<x.length;k++){var C=x[k];switch(C){case" ":g++;break;case"	":g+=4;break;case"\r":g=0;break;case`
`:g=0,h++;break;default:throw new Error("whitespace characters not allowed in JSON")}f++}break;default:x=void 0}var T="",R={},ne=0,ee=0,F=0,te=v&&v.es6&&typeof Map=="function";return ye(p,0,""),{json:T,pointers:R};function ye(ge,Q,L){switch(Re(L,"value"),typeof ge){case"number":case"bigint":case"boolean":W(""+ge);break;case"string":W(u(ge));break;case"object":ge===null?W("null"):typeof ge.toJSON=="function"?W(u(ge.toJSON())):Array.isArray(ge)?le():te?ge.constructor.BYTES_PER_ELEMENT?le():ge instanceof Map?O():ge instanceof Set?O(!0):A():A()}Re(L,"valueEnd");function le(){if(ge.length){W("[");for(var M=Q+1,re=0;re<ge.length;re++){re&&W(","),we(M);var Oe=o(ge[re])?ge[re]:null,ae=L+"/"+re;ye(Oe,M,ae)}we(Q),W("]")}else W("[]")}function A(){var M=Object.keys(ge);if(M.length){W("{");for(var re=Q+1,Oe=0;Oe<M.length;Oe++){var ae=M[Oe],J=ge[ae];if(o(J)){Oe&&W(",");var pe=L+"/"+w(ae);we(re),Re(pe,"key"),W(u(ae)),Re(pe,"keyEnd"),W(":"),x&&W(" "),ye(J,re,pe)}}we(Q),W("}")}else W("{}")}function O(M){if(ge.size){W("{");for(var re=Q+1,Oe=!0,ae=ge.entries(),J=ae.next();!J.done;){var pe=J.value,$=pe[0],I=M?!0:pe[1];if(o(I)){Oe||W(","),Oe=!1;var D=L+"/"+w($);we(re),Re(D,"key"),W(u($)),Re(D,"keyEnd"),W(":"),x&&W(" "),ye(I,re,D)}J=ae.next()}we(Q),W("}")}else W("{}")}}function W(ge){ee+=ge.length,F+=ge.length,T+=ge}function we(ge){if(x){for(T+=`
`+Ee(ge,x),ne++,ee=0;ge--;)h?(ne+=h,ee=g):ee+=g,F+=f;F+=1}}function Re(ge,Q){R[ge]=R[ge]||{},R[ge][Q]={line:ne,column:ee,pos:F}}function Ee(ge,Q){return Array(ge+1).join(Q)}};var r=["number","bigint","boolean","string","object"];function o(p){return r.indexOf(typeof p)>=0}var s=/"|\\/g,a=/[\b]/g,i=/\f/g,l=/\n/g,c=/\r/g,d=/\t/g;function u(p){return p=p.replace(s,"\\$&").replace(i,"\\f").replace(a,"\\b").replace(l,"\\n").replace(c,"\\r").replace(d,"\\t"),'"'+p+'"'}var m=/~/g,b=/\//g;function w(p){return p.replace(m,"~0").replace(b,"~1")}return vc}var vj=fj();const jg=tg(vj);class di extends Error{constructor(t,r){super(t+" at position "+r),this.position=r}}const hc=92,Dd=47,hj=42,dh=123,pc=125,fh=91,mc=93,pj=40,mj=41,gj=32,bv=10,wg=9,xg=13,bj=8,yj=12,Au=34,vh=43,hh=45,kg=39,Sg=48,_g=57,Ms=44,gc=46,jj=58,wj=59,xj=65,kj=97,Sj=69,_j=101,Cj=70,Ej=102,Oj=160,$j=8192,Pj=8202,Mj=8239,Rj=8287,Nj=12288,Tj=8220,Aj=8221,qj=8216,zj=8217,Ij=96,Dj=180;function Lj(e){return e>=Sg&&e<=_g||e>=xj&&e<=Cj||e>=kj&&e<=Ej}function Rs(e){return e>=Sg&&e<=_g}function Uj(e){return e>=32&&e<=1114111}function ki(e){return Fj.test(e)}const Fj=/^[,:[\]/{}()\n+]$/;function Vj(e){return ki(e)&&e!=="/"}function ph(e){return Bj.test(e)||e&&ku(e.charCodeAt(0))}const Bj=/^[[{\w-]$/;function Wj(e){return e===bv||e===xg||e===wg||e===bj||e===yj}function Ei(e){return e===gj||e===bv||e===wg||e===xg}function Hj(e){return e===Oj||e>=$j&&e<=Pj||e===Mj||e===Rj||e===Nj}function ku(e){return Cg(e)||Rf(e)}function Cg(e){return e===Au||e===Tj||e===Aj}function mh(e){return e===Au}function Rf(e){return e===kg||e===qj||e===zj||e===Ij||e===Dj}function gh(e){return e===kg}function yl(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const o=e.lastIndexOf(t);return o!==-1?e.substring(0,o)+(r?"":e.substring(o+1)):e}function ia(e,t){let r=e.length;if(!Ei(e.charCodeAt(r-1)))return e+t;for(;Ei(e.charCodeAt(r-1));)r--;return e.substring(0,r)+t+e.substring(r)}function Kj(e,t,r){return e.substring(0,t)+e.substring(t+r)}function Jj(e){return/[,\n][ \t\r]*$/.test(e)}function Qj(e){return/^\w+$/.test(e)}const Gj={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Yj={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"};function va(e){let t=0,r="";a()||ee();const s=d(Ms);for(s&&i(),ph(e[t])&&Jj(r)?(s||(r=ia(r,",")),y()):s&&(r=yl(r,","));e.charCodeAt(t)===pc||e.charCodeAt(t)===mc;)t++,i();if(t>=e.length)return r;ne();function a(){i();const W=w()||p()||v()||f()||g()||j();return i(),W}function i(){const W=t;let we=l();do we=c(),we&&(we=l());while(we);return t>W}function l(){let W="",we;for(;(we=Ei(e.charCodeAt(t)))||Hj(e.charCodeAt(t));)we?W+=e[t]:W+=" ",t++;return W.length>0?(r+=W,!0):!1}function c(){if(e.charCodeAt(t)===Dd&&e.charCodeAt(t+1)===hj){for(;t<e.length&&!Xj(e,t);)t++;return t+=2,!0}if(e.charCodeAt(t)===Dd&&e.charCodeAt(t+1)===Dd){for(;t<e.length&&e.charCodeAt(t)!==bv;)t++;return!0}return!1}function d(W){return e.charCodeAt(t)===W?(r+=e[t],t++,!0):!1}function u(W){return e.charCodeAt(t)===W?(t++,!0):!1}function m(){return u(hc)}function b(){return i(),e.charCodeAt(t)===gc&&e.charCodeAt(t+1)===gc&&e.charCodeAt(t+2)===gc?(t+=3,i(),u(Ms),!0):!1}function w(){if(e.charCodeAt(t)===dh){r+="{",t++,i(),u(Ms)&&i();let W=!0;for(;t<e.length&&e.charCodeAt(t)!==pc;){let we;if(W?(we=!0,W=!1):(we=d(Ms),we||(r=ia(r,",")),i()),b(),!(v()||j())){e.charCodeAt(t)===pc||e.charCodeAt(t)===dh||e.charCodeAt(t)===mc||e.charCodeAt(t)===fh||e[t]===void 0?r=yl(r,","):F();break}i();const Ee=d(jj),ge=t>=e.length;Ee||(ph(e[t])||ge?r=ia(r,":"):te()),a()||(Ee||ge?r+="null":te())}return e.charCodeAt(t)===pc?(r+="}",t++):r=ia(r,"}"),!0}return!1}function p(){if(e.charCodeAt(t)===fh){r+="[",t++,i(),u(Ms)&&i();let W=!0;for(;t<e.length&&e.charCodeAt(t)!==mc;)if(W?W=!1:d(Ms)||(r=ia(r,",")),b(),!a()){r=yl(r,",");break}return e.charCodeAt(t)===mc?(r+="]",t++):r=ia(r,"]"),!0}return!1}function y(){let W=!0,we=!0;for(;we;)W?W=!1:d(Ms)||(r=ia(r,",")),we=a();we||(r=yl(r,",")),r=`[
`.concat(r,`
]`)}function v(){let W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,we=e.charCodeAt(t)===hc;if(we&&(t++,we=!0),ku(e.charCodeAt(t))){const Re=mh(e.charCodeAt(t))?mh:gh(e.charCodeAt(t))?gh:Rf(e.charCodeAt(t))?Rf:Cg,Ee=t,ge=r.length;let Q='"';for(t++;;){if(t>=e.length){const L=k(t-1);return!W&&ki(e.charAt(L))?(t=Ee,r=r.substring(0,ge),v(!0)):(Q=ia(Q,'"'),r+=Q,!0)}else if(Re(e.charCodeAt(t))){const L=t,le=Q.length;if(Q+='"',t++,r+=Q,i(),W||t>=e.length||ki(e.charAt(t))||ku(e.charCodeAt(t))||Rs(e.charCodeAt(t)))return h(),!0;if(ki(e.charAt(k(L-1))))return t=Ee,r=r.substring(0,ge),v(!0);r=r.substring(0,ge),t=L+1,Q=Q.substring(0,le)+"\\"+Q.substring(le)}else{if(W&&ki(e[t]))return Q=ia(Q,'"'),r+=Q,h(),!0;if(e.charCodeAt(t)===hc){const L=e.charAt(t+1);if(Yj[L]!==void 0)Q+=e.slice(t,t+2),t+=2;else if(L==="u"){let A=2;for(;A<6&&Lj(e.charCodeAt(t+A));)A++;A===6?(Q+=e.slice(t,t+6),t+=6):t+A>=e.length?t=e.length:ye()}else Q+=L,t+=2}else{const L=e.charAt(t),le=e.charCodeAt(t);le===Au&&e.charCodeAt(t-1)!==hc?(Q+="\\"+L,t++):Wj(le)?(Q+=Gj[L],t++):(Uj(le)||R(L),Q+=L,t++)}}we&&m()}}return!1}function h(){let W=!1;for(i();e.charCodeAt(t)===vh;){W=!0,t++,i(),r=yl(r,'"',!0);const we=r.length;v()?r=Kj(r,we,1):r=ia(r,'"')}return W}function f(){const W=t;if(e.charCodeAt(t)===hh){if(t++,C())return T(W),!0;if(!Rs(e.charCodeAt(t)))return t=W,!1}for(;Rs(e.charCodeAt(t));)t++;if(e.charCodeAt(t)===gc){if(t++,C())return T(W),!0;if(!Rs(e.charCodeAt(t)))return t=W,!1;for(;Rs(e.charCodeAt(t));)t++}if(e.charCodeAt(t)===_j||e.charCodeAt(t)===Sj){if(t++,(e.charCodeAt(t)===hh||e.charCodeAt(t)===vh)&&t++,C())return T(W),!0;if(!Rs(e.charCodeAt(t)))return t=W,!1;for(;Rs(e.charCodeAt(t));)t++}if(!C())return t=W,!1;if(t>W){const we=e.slice(W,t),Re=/^0\d/.test(we);return r+=Re?'"'.concat(we,'"'):we,!0}return!1}function g(){return x("true","true")||x("false","false")||x("null","null")||x("True","true")||x("False","false")||x("None","null")}function x(W,we){return e.slice(t,t+W.length)===W?(r+=we,t+=W.length,!0):!1}function j(){const W=t;for(;t<e.length&&!Vj(e[t])&&!ku(e.charCodeAt(t));)t++;if(t>W){if(e.charCodeAt(t)===pj&&Qj(e.slice(W,t).trim()))return t++,a(),e.charCodeAt(t)===mj&&(t++,e.charCodeAt(t)===wj&&t++),!0;{for(;Ei(e.charCodeAt(t-1))&&t>0;)t--;const we=e.slice(W,t);return r+=we==="undefined"?"null":JSON.stringify(we),e.charCodeAt(t)===Au&&t++,!0}}}function k(W){let we=W;for(;we>0&&Ei(e.charCodeAt(we));)we--;return we}function C(){return t>=e.length||ki(e[t])||Ei(e.charCodeAt(t))}function T(W){r+=e.slice(W,t)+"0"}function R(W){throw new di("Invalid character "+JSON.stringify(W),t)}function ne(){throw new di("Unexpected character "+JSON.stringify(e[t]),t)}function ee(){throw new di("Unexpected end of json string",e.length)}function F(){throw new di("Object key expected",t)}function te(){throw new di("Colon expected",t)}function ye(){const W=e.slice(t,t+6);throw new di('Invalid unicode character "'.concat(W,'"'),t)}}function Xj(e,t){return e[t]==="*"&&e[t+1]==="/"}const yv=e=>Array.isArray(e),Zj=e=>typeof e=="string";function Jr(e){return(...t)=>{const r=t.map(a=>ko(a)),o=r[0],s=r[1];return r.length===1?a=>e(o(a)):r.length===2?a=>e(o(a),s(a)):a=>e(...r.map(i=>i(a)))}}const Oi={pipe:(...e)=>{const t=e.map(r=>ko(r));return r=>t.reduce((o,s)=>s(o),r)},object:e=>{const t=Object.keys(e).map(r=>[r,ko(e[r])]);return r=>{const o={};for(const[s,a]of t)o[s]=a(r);return o}},array:(...e)=>{const t=e.map(r=>ko(r));return r=>t.map(o=>o(r))},get:(...e)=>{if(e.length===0)return t=>t;if(e.length===1){const t=e[0];return r=>r?.[t]}return t=>{let r=t;for(const o of e)r=r?.[o];return r}},map:e=>{const t=ko(e);return r=>r.map(t)},filter:e=>{const t=ko(e);return r=>r.filter(t)},sort:(e=["get"],t)=>{const r=ko(e),o=t==="desc"?-1:1;function s(a,i){const l=r(a),c=r(i);return l>c?o:l<c?-o:0}return a=>a.slice().sort(s)},pick:(...e)=>{const t=e.map(([o,...s])=>[s[s.length-1],Oi.get(...s)]),r=(o,s)=>{const a={};for(const[i,l]of s)a[i]=l(o);return a};return o=>yv(o)?o.map(s=>r(s,t)):r(o,t)},groupBy:e=>{const t=ko(e);return r=>{const o={};for(const s of r){const a=t(s);o[a]?o[a].push(s):o[a]=[s]}return o}},keyBy:e=>{const t=ko(e);return r=>{const o={};for(const s of r){const a=t(s);o[a]=o[a]??s}return o}},flatten:()=>e=>e.flat(),uniq:()=>e=>[...new Set(e)],uniqBy:e=>t=>Object.values(Oi.groupBy(e)(t)).map(r=>r[0]),limit:e=>t=>t.slice(0,e),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>e.reduce((t,r)=>t*r),sum:()=>e=>e.reduce((t,r)=>t+r),average:()=>e=>Oi.sum()(e)/e.length,min:()=>e=>Math.min(...e),max:()=>e=>Math.max(...e),in:(e,t)=>{const r=ko(e),o=ko(t);return s=>o(s).includes(r(s))},"not in":(e,t)=>{const r=Oi.in(e,t);return o=>!r(o)},regex:(e,t,r)=>{const o=new RegExp(t,r),s=ko(e);return a=>o.test(s(a))},and:Jr((e,t)=>e&&t),or:Jr((e,t)=>e||t),not:Jr(e=>!e),exists:Jr(e=>e!==void 0),eq:Jr((e,t)=>e===t),gt:Jr((e,t)=>e>t),gte:Jr((e,t)=>e>=t),lt:Jr((e,t)=>e<t),lte:Jr((e,t)=>e<=t),ne:Jr((e,t)=>e!==t),add:Jr((e,t)=>e+t),subtract:Jr((e,t)=>e-t),multiply:Jr((e,t)=>e*t),divide:Jr((e,t)=>e/t),pow:Jr((e,t)=>e**t),mod:Jr((e,t)=>e%t),abs:Jr(Math.abs),round:Jr((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`)},bc=[];function ko(e,t){bc.unshift({...Oi,...bc[0]});try{const r=yv(e)?ew(e,bc[0]):()=>e;return o=>{try{return r(o)}catch(s){throw s.jsonquery=[{data:o,query:e},...s.jsonquery??[]],s}}}finally{bc.shift()}}function ew(e,t){const[r,...o]=e,s=t[r];if(!s)throw new Error(`Unknown function '${r}'`);return s(...o)}const Eg={and:"and",or:"or",eq:"==",gt:">",gte:">=",lt:"<",lte:"<=",ne:"!=",add:"+",subtract:"-",multiply:"*",divide:"/",pow:"^",mod:"%",in:"in","not in":"not in"},tw=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,nw=/^[a-zA-Z_$][a-zA-Z\d_$]*/,rw=/^"(?:[^"\\]|\\.)*"/,ow=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,aw=/^(0|[1-9][0-9]*)/,sw=/^(true|false|null)/,iw=/^[ \n\t\r]+/;function Og(e,t){const r=()=>{v();const j=o();if(v(),e[g]==="|"){const k=[j];for(;e[g]==="|";)g++,v(),k.push(o());return["pipe",...k]}return j},o=()=>{const j={...Eg},k=s();v();for(const C of Object.keys(j).sort((T,R)=>R.length-T.length)){const T=j[C];if(e.substring(g,g+T.length)===T){g+=T.length,v();const R=s();return[C,k,R]}}return k},s=()=>{if(e[g]==="("){g++;const j=r();return h(")"),j}return a()},a=()=>{const j=[];if(e[g]==="."){for(;e[g]===".";)g++,j.push(d()??u()??b()??f("Property expected"));return["get",...j]}return i()},i=()=>{const j=g,k=u();if(v(),!k||e[g]!=="(")return g=j,l();g++,!Oi[k]&&f(`Unknown function '${k}'`),v();const C=e[g]!==")"?[r()]:[];for(;g<e.length&&e[g]!==")";)v(),h(","),C.push(r());return h(")"),[k,...C]},l=()=>{if(e[g]==="{"){g++,v();const j={};let k=!0;for(;g<e.length&&e[g]!=="}";){k?k=!1:(h(","),v());const C=d()??u()??b()??f("Key expected");v(),h(":"),j[C]=r()}return h("}"),["object",j]}return c()},c=()=>{if(e[g]==="["){g++,v();const j=[];let k=!0;for(;g<e.length&&e[g]!=="]";)k?k=!1:(h(","),v()),j.push(r());return h("]"),["array",...j]}return d()??m()??w()},d=()=>y(rw,JSON.parse),u=()=>y(nw,j=>j),m=()=>y(ow,JSON.parse),b=()=>y(aw,JSON.parse),w=()=>{const j=y(sw,JSON.parse);if(j!==void 0)return j;f("Value expected")},p=()=>{v(),g<e.length&&f(`Unexpected part '${e.substring(g)}'`)},y=(j,k)=>{const C=e.substring(g).match(j);if(C)return g+=C[0].length,k(C[0])},v=()=>y(iw,j=>j),h=j=>{e[g]!==j&&f(`Character '${j}' expected`),g++},f=(j,k=g)=>{throw new SyntaxError(`${j} (pos: ${k})`)};let g=0;const x=r();return p(),x}const lw=40,cw="  ",uw=(e,t)=>{const r=cw,o=(d,u)=>yv(d)?s(d,u):JSON.stringify(d),s=(d,u)=>{var m;const[b,...w]=d;if(b==="get"&&w.length>0)return i(w);if(b==="pipe"){const h=w.map(f=>o(f,u+r));return c(h,[""," | ",""],["",`
${u+r}| `,""])}if(b==="object")return a(w[0],u);if(b==="array"){const h=w.map(f=>o(f,u));return c(h,["[",", ","]"],[`[
${u+r}`,`,
${u+r}`,`
${u}]`])}const p=((m=void 0)==null?void 0:m[b])??Eg[b];if(p&&w.length===2){const[h,f]=w,g=o(h,u),x=o(f,u);return`(${g} ${p} ${x})`}const y=w.length===1?u:u+r,v=w.map(h=>o(h,y));return w.length===1&&v[0][0]==="("?`${b}${v}`:c(v,[`${b}(`,", ",")"],w.length===1?[`${b}(`,`,
${u}`,")"]:[`${b}(
${y}`,`,
${y}`,`
${u})`])},a=(d,u)=>{const m=u+r,b=Object.entries(d).map(([w,p])=>`${l(w)}: ${o(p,m)}`);return c(b,["{ ",", "," }"],[`{
${m}`,`,
${m}`,`
${u}}`])},i=d=>d.map(u=>`.${l(u)}`).join(""),l=d=>tw.test(d)?d:JSON.stringify(d),c=(d,[u,m,b],[w,p,y])=>u.length+d.reduce((v,h)=>v+h.length+m.length,0)-m.length+b.length<=lw?u+d.join(m)+b:w+d.join(p)+y;return o(e,"")};function dw(e,t,r){return ko(Zj(t)?Og(t):t)(e)}const fw={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},vw={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},$g=vw,Pg={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},hw={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Nf={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},pw={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z"]},zl={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},Mg={prefix:"fas",iconName:"paste",icon:[512,512,["file-clipboard"],"f0ea","M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},mw={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]},gw={prefix:"fas",iconName:"scissors",icon:[512,512,[9984,9986,9988,"cut"],"f0c4","M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},qi=gw,bw={prefix:"fas",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},yw=bw,jw={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},ww={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Rg=ww,xw={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},kw=xw,Sw={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Ng={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},_w={prefix:"fas",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},Cw=_w,bh={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},Tg={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},qu={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},zu={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},bs={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ew={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},zi={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},Ow={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},jv=Ow,$w={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},wv=$w,Pw={prefix:"fas",iconName:"crop-simple",icon:[512,512,["crop-alt"],"f565","M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l224 0 0-64-224 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64L160 64l0 64 224 0 0 352z"]},Mw=Pw,Rw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Nw=Rw,Ba={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},Tw={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},Ag=Tw,yc={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[448,512,[8644,"exchange"],"f0ec","M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]},Aw={prefix:"fas",iconName:"arrow-down-short-wide",icon:[576,512,["sort-amount-desc","sort-amount-down-alt"],"f884","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Iu=Aw,qw={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},yh={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},zw={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},fd=zw,Iw={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},is={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},$i={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},qg={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Dw=qg,vd=qg,Lw={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"]},Uw={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"]},zg={prefix:"fas",iconName:"clone",icon:[512,512,[],"f24d","M288 448L64 448l0-224 64 0 0-64-64 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-64 0 0 64zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"]},xv={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Fw={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Ys=Fw;var Ld={exports:{}},jh;function Vw(){if(jh)return Ld.exports;jh=1;var e=function(t,r){var o,s,a=1,i=0,l=0,c=String.alphabet;function d(u,m,b){if(b){for(o=m;b=d(u,o),b<76&&b>65;)++o;return+u.slice(m-1,o)}return b=c&&c.indexOf(u.charAt(m)),b>-1?b+76:(b=u.charCodeAt(m)||0,b<45||b>127?b:b<46?65:b<48?b-1:b<58?b+18:b<65?b-11:b<91?b+11:b<97?b-37:b<123?b+5:b-63)}if((t+="")!=(r+="")){for(;a;)if(s=d(t,i++),a=d(r,l++),s<76&&a<76&&s>66&&a>66&&(s=d(t,i,i),a=d(r,l,i=o),l=o),s!=a)return s<a?-1:1}return 0};try{Ld.exports=e}catch{String.naturalCompare=e}return Ld.exports}var Bw=Vw();const Ww=tg(Bw);var jc={exports:{}},Ud={},ka={},Ns={},Fd={},Vd={},Bd={},wh;function Du(){return wh||(wh=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class r extends t{constructor(f){if(super(),!e.IDENTIFIER.test(f))throw new Error("CodeGen: name must be a valid identifier");this.str=f}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=r;class o extends t{constructor(f){super(),this._items=typeof f=="string"?[f]:f}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const f=this._items[0];return f===""||f==='""'}get str(){var f;return(f=this._str)!==null&&f!==void 0?f:this._str=this._items.reduce((g,x)=>`${g}${x}`,"")}get names(){var f;return(f=this._names)!==null&&f!==void 0?f:this._names=this._items.reduce((g,x)=>(x instanceof r&&(g[x.str]=(g[x.str]||0)+1),g),{})}}e._Code=o,e.nil=new o("");function s(h,...f){const g=[h[0]];let x=0;for(;x<f.length;)l(g,f[x]),g.push(h[++x]);return new o(g)}e._=s;const a=new o("+");function i(h,...f){const g=[w(h[0])];let x=0;for(;x<f.length;)g.push(a),l(g,f[x]),g.push(a,w(h[++x]));return c(g),new o(g)}e.str=i;function l(h,f){f instanceof o?h.push(...f._items):f instanceof r?h.push(f):h.push(m(f))}e.addCodeArg=l;function c(h){let f=1;for(;f<h.length-1;){if(h[f]===a){const g=d(h[f-1],h[f+1]);if(g!==void 0){h.splice(f-1,3,g);continue}h[f++]="+"}f++}}function d(h,f){if(f==='""')return h;if(h==='""')return f;if(typeof h=="string")return f instanceof r||h[h.length-1]!=='"'?void 0:typeof f!="string"?`${h.slice(0,-1)}${f}"`:f[0]==='"'?h.slice(0,-1)+f.slice(1):void 0;if(typeof f=="string"&&f[0]==='"'&&!(h instanceof r))return`"${h}${f.slice(1)}`}function u(h,f){return f.emptyStr()?h:h.emptyStr()?f:i`${h}${f}`}e.strConcat=u;function m(h){return typeof h=="number"||typeof h=="boolean"||h===null?h:w(Array.isArray(h)?h.join(","):h)}function b(h){return new o(w(h))}e.stringify=b;function w(h){return JSON.stringify(h).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=w;function p(h){return typeof h=="string"&&e.IDENTIFIER.test(h)?new o(`.${h}`):s`[${h}]`}e.getProperty=p;function y(h){if(typeof h=="string"&&e.IDENTIFIER.test(h))return new o(`${h}`);throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`)}e.getEsmExportName=y;function v(h){return new o(h.toString())}e.regexpCode=v})(Bd)),Bd}var Wd={},xh;function kh(){return xh||(xh=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=Du();class r extends Error{constructor(d){super(`CodeGen: "code" for ${d} not defined`),this.value=d.value}}var o;(function(c){c[c.Started=0]="Started",c[c.Completed=1]="Completed"})(o||(e.UsedValueState=o={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class s{constructor({prefixes:d,parent:u}={}){this._names={},this._prefixes=d,this._parent=u}toName(d){return d instanceof t.Name?d:this.name(d)}name(d){return new t.Name(this._newName(d))}_newName(d){const u=this._names[d]||this._nameGroup(d);return`${d}${u.index++}`}_nameGroup(d){var u,m;if(!((m=(u=this._parent)===null||u===void 0?void 0:u._prefixes)===null||m===void 0)&&m.has(d)||this._prefixes&&!this._prefixes.has(d))throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);return this._names[d]={prefix:d,index:0}}}e.Scope=s;class a extends t.Name{constructor(d,u){super(u),this.prefix=d}setValue(d,{property:u,itemIndex:m}){this.value=d,this.scopePath=(0,t._)`.${new t.Name(u)}[${m}]`}}e.ValueScopeName=a;const i=(0,t._)`\n`;class l extends s{constructor(d){super(d),this._values={},this._scope=d.scope,this.opts={...d,_n:d.lines?i:t.nil}}get(){return this._scope}name(d){return new a(d,this._newName(d))}value(d,u){var m;if(u.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const b=this.toName(d),{prefix:w}=b,p=(m=u.key)!==null&&m!==void 0?m:u.ref;let y=this._values[w];if(y){const f=y.get(p);if(f)return f}else y=this._values[w]=new Map;y.set(p,b);const v=this._scope[w]||(this._scope[w]=[]),h=v.length;return v[h]=u.ref,b.setValue(u,{property:w,itemIndex:h}),b}getValue(d,u){const m=this._values[d];if(m)return m.get(u)}scopeRefs(d,u=this._values){return this._reduceValues(u,m=>{if(m.scopePath===void 0)throw new Error(`CodeGen: name "${m}" has no value`);return(0,t._)`${d}${m.scopePath}`})}scopeCode(d=this._values,u,m){return this._reduceValues(d,b=>{if(b.value===void 0)throw new Error(`CodeGen: name "${b}" has no value`);return b.value.code},u,m)}_reduceValues(d,u,m={},b){let w=t.nil;for(const p in d){const y=d[p];if(!y)continue;const v=m[p]=m[p]||new Map;y.forEach(h=>{if(v.has(h))return;v.set(h,o.Started);let f=u(h);if(f){const g=this.opts.es5?e.varKinds.var:e.varKinds.const;w=(0,t._)`${w}${g} ${h} = ${f};${this.opts._n}`}else if(f=b?.(h))w=(0,t._)`${w}${f}${this.opts._n}`;else throw new r(h);v.set(h,o.Completed)})}return w}}e.ValueScope=l})(Wd)),Wd}var Sh;function mn(){return Sh||(Sh=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=Du(),r=kh();var o=Du();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return o._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return o.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return o.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return o.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return o.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return o.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return o.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return o.Name}});var s=kh();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return s.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return s.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return s.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return s.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class a{optimizeNodes(){return this}optimizeNames(O,M){return this}}class i extends a{constructor(O,M,re){super(),this.varKind=O,this.name=M,this.rhs=re}render({es5:O,_n:M}){const re=O?r.varKinds.var:this.varKind,Oe=this.rhs===void 0?"":` = ${this.rhs}`;return`${re} ${this.name}${Oe};`+M}optimizeNames(O,M){if(O[this.name.str])return this.rhs&&(this.rhs=ye(this.rhs,O,M)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class l extends a{constructor(O,M,re){super(),this.lhs=O,this.rhs=M,this.sideEffects=re}render({_n:O}){return`${this.lhs} = ${this.rhs};`+O}optimizeNames(O,M){if(!(this.lhs instanceof t.Name&&!O[this.lhs.str]&&!this.sideEffects))return this.rhs=ye(this.rhs,O,M),this}get names(){const O=this.lhs instanceof t.Name?{}:{...this.lhs.names};return te(O,this.rhs)}}class c extends l{constructor(O,M,re,Oe){super(O,re,Oe),this.op=M}render({_n:O}){return`${this.lhs} ${this.op}= ${this.rhs};`+O}}class d extends a{constructor(O){super(),this.label=O,this.names={}}render({_n:O}){return`${this.label}:`+O}}class u extends a{constructor(O){super(),this.label=O,this.names={}}render({_n:O}){return`break${this.label?` ${this.label}`:""};`+O}}class m extends a{constructor(O){super(),this.error=O}render({_n:O}){return`throw ${this.error};`+O}get names(){return this.error.names}}class b extends a{constructor(O){super(),this.code=O}render({_n:O}){return`${this.code};`+O}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(O,M){return this.code=ye(this.code,O,M),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class w extends a{constructor(O=[]){super(),this.nodes=O}render(O){return this.nodes.reduce((M,re)=>M+re.render(O),"")}optimizeNodes(){const{nodes:O}=this;let M=O.length;for(;M--;){const re=O[M].optimizeNodes();Array.isArray(re)?O.splice(M,1,...re):re?O[M]=re:O.splice(M,1)}return O.length>0?this:void 0}optimizeNames(O,M){const{nodes:re}=this;let Oe=re.length;for(;Oe--;){const ae=re[Oe];ae.optimizeNames(O,M)||(W(O,ae.names),re.splice(Oe,1))}return re.length>0?this:void 0}get names(){return this.nodes.reduce((O,M)=>F(O,M.names),{})}}class p extends w{render(O){return"{"+O._n+super.render(O)+"}"+O._n}}class y extends w{}class v extends p{}v.kind="else";class h extends p{constructor(O,M){super(M),this.condition=O}render(O){let M=`if(${this.condition})`+super.render(O);return this.else&&(M+="else "+this.else.render(O)),M}optimizeNodes(){super.optimizeNodes();const O=this.condition;if(O===!0)return this.nodes;let M=this.else;if(M){const re=M.optimizeNodes();M=this.else=Array.isArray(re)?new v(re):re}if(M)return O===!1?M instanceof h?M:M.nodes:this.nodes.length?this:new h(we(O),M instanceof h?[M]:M.nodes);if(!(O===!1||!this.nodes.length))return this}optimizeNames(O,M){var re;if(this.else=(re=this.else)===null||re===void 0?void 0:re.optimizeNames(O,M),!!(super.optimizeNames(O,M)||this.else))return this.condition=ye(this.condition,O,M),this}get names(){const O=super.names;return te(O,this.condition),this.else&&F(O,this.else.names),O}}h.kind="if";class f extends p{}f.kind="for";class g extends f{constructor(O){super(),this.iteration=O}render(O){return`for(${this.iteration})`+super.render(O)}optimizeNames(O,M){if(super.optimizeNames(O,M))return this.iteration=ye(this.iteration,O,M),this}get names(){return F(super.names,this.iteration.names)}}class x extends f{constructor(O,M,re,Oe){super(),this.varKind=O,this.name=M,this.from=re,this.to=Oe}render(O){const M=O.es5?r.varKinds.var:this.varKind,{name:re,from:Oe,to:ae}=this;return`for(${M} ${re}=${Oe}; ${re}<${ae}; ${re}++)`+super.render(O)}get names(){const O=te(super.names,this.from);return te(O,this.to)}}class j extends f{constructor(O,M,re,Oe){super(),this.loop=O,this.varKind=M,this.name=re,this.iterable=Oe}render(O){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(O)}optimizeNames(O,M){if(super.optimizeNames(O,M))return this.iterable=ye(this.iterable,O,M),this}get names(){return F(super.names,this.iterable.names)}}class k extends p{constructor(O,M,re){super(),this.name=O,this.args=M,this.async=re}render(O){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(O)}}k.kind="func";class C extends w{render(O){return"return "+super.render(O)}}C.kind="return";class T extends p{render(O){let M="try"+super.render(O);return this.catch&&(M+=this.catch.render(O)),this.finally&&(M+=this.finally.render(O)),M}optimizeNodes(){var O,M;return super.optimizeNodes(),(O=this.catch)===null||O===void 0||O.optimizeNodes(),(M=this.finally)===null||M===void 0||M.optimizeNodes(),this}optimizeNames(O,M){var re,Oe;return super.optimizeNames(O,M),(re=this.catch)===null||re===void 0||re.optimizeNames(O,M),(Oe=this.finally)===null||Oe===void 0||Oe.optimizeNames(O,M),this}get names(){const O=super.names;return this.catch&&F(O,this.catch.names),this.finally&&F(O,this.finally.names),O}}class R extends p{constructor(O){super(),this.error=O}render(O){return`catch(${this.error})`+super.render(O)}}R.kind="catch";class ne extends p{render(O){return"finally"+super.render(O)}}ne.kind="finally";class ee{constructor(O,M={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...M,_n:M.lines?`
`:""},this._extScope=O,this._scope=new r.Scope({parent:O}),this._nodes=[new y]}toString(){return this._root.render(this.opts)}name(O){return this._scope.name(O)}scopeName(O){return this._extScope.name(O)}scopeValue(O,M){const re=this._extScope.value(O,M);return(this._values[re.prefix]||(this._values[re.prefix]=new Set)).add(re),re}getScopeValue(O,M){return this._extScope.getValue(O,M)}scopeRefs(O){return this._extScope.scopeRefs(O,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(O,M,re,Oe){const ae=this._scope.toName(M);return re!==void 0&&Oe&&(this._constants[ae.str]=re),this._leafNode(new i(O,ae,re)),ae}const(O,M,re){return this._def(r.varKinds.const,O,M,re)}let(O,M,re){return this._def(r.varKinds.let,O,M,re)}var(O,M,re){return this._def(r.varKinds.var,O,M,re)}assign(O,M,re){return this._leafNode(new l(O,M,re))}add(O,M){return this._leafNode(new c(O,e.operators.ADD,M))}code(O){return typeof O=="function"?O():O!==t.nil&&this._leafNode(new b(O)),this}object(...O){const M=["{"];for(const[re,Oe]of O)M.length>1&&M.push(","),M.push(re),(re!==Oe||this.opts.es5)&&(M.push(":"),(0,t.addCodeArg)(M,Oe));return M.push("}"),new t._Code(M)}if(O,M,re){if(this._blockNode(new h(O)),M&&re)this.code(M).else().code(re).endIf();else if(M)this.code(M).endIf();else if(re)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(O){return this._elseNode(new h(O))}else(){return this._elseNode(new v)}endIf(){return this._endBlockNode(h,v)}_for(O,M){return this._blockNode(O),M&&this.code(M).endFor(),this}for(O,M){return this._for(new g(O),M)}forRange(O,M,re,Oe,ae=this.opts.es5?r.varKinds.var:r.varKinds.let){const J=this._scope.toName(O);return this._for(new x(ae,J,M,re),()=>Oe(J))}forOf(O,M,re,Oe=r.varKinds.const){const ae=this._scope.toName(O);if(this.opts.es5){const J=M instanceof t.Name?M:this.var("_arr",M);return this.forRange("_i",0,(0,t._)`${J}.length`,pe=>{this.var(ae,(0,t._)`${J}[${pe}]`),re(ae)})}return this._for(new j("of",Oe,ae,M),()=>re(ae))}forIn(O,M,re,Oe=this.opts.es5?r.varKinds.var:r.varKinds.const){if(this.opts.ownProperties)return this.forOf(O,(0,t._)`Object.keys(${M})`,re);const ae=this._scope.toName(O);return this._for(new j("in",Oe,ae,M),()=>re(ae))}endFor(){return this._endBlockNode(f)}label(O){return this._leafNode(new d(O))}break(O){return this._leafNode(new u(O))}return(O){const M=new C;if(this._blockNode(M),this.code(O),M.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(C)}try(O,M,re){if(!M&&!re)throw new Error('CodeGen: "try" without "catch" and "finally"');const Oe=new T;if(this._blockNode(Oe),this.code(O),M){const ae=this.name("e");this._currNode=Oe.catch=new R(ae),M(ae)}return re&&(this._currNode=Oe.finally=new ne,this.code(re)),this._endBlockNode(R,ne)}throw(O){return this._leafNode(new m(O))}block(O,M){return this._blockStarts.push(this._nodes.length),O&&this.code(O).endBlock(M),this}endBlock(O){const M=this._blockStarts.pop();if(M===void 0)throw new Error("CodeGen: not in self-balancing block");const re=this._nodes.length-M;if(re<0||O!==void 0&&re!==O)throw new Error(`CodeGen: wrong number of nodes: ${re} vs ${O} expected`);return this._nodes.length=M,this}func(O,M=t.nil,re,Oe){return this._blockNode(new k(O,M,re)),Oe&&this.code(Oe).endFunc(),this}endFunc(){return this._endBlockNode(k)}optimize(O=1){for(;O-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(O){return this._currNode.nodes.push(O),this}_blockNode(O){this._currNode.nodes.push(O),this._nodes.push(O)}_endBlockNode(O,M){const re=this._currNode;if(re instanceof O||M&&re instanceof M)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${M?`${O.kind}/${M.kind}`:O.kind}"`)}_elseNode(O){const M=this._currNode;if(!(M instanceof h))throw new Error('CodeGen: "else" without "if"');return this._currNode=M.else=O,this}get _root(){return this._nodes[0]}get _currNode(){const O=this._nodes;return O[O.length-1]}set _currNode(O){const M=this._nodes;M[M.length-1]=O}}e.CodeGen=ee;function F(A,O){for(const M in O)A[M]=(A[M]||0)+(O[M]||0);return A}function te(A,O){return O instanceof t._CodeOrName?F(A,O.names):A}function ye(A,O,M){if(A instanceof t.Name)return re(A);if(!Oe(A))return A;return new t._Code(A._items.reduce((ae,J)=>(J instanceof t.Name&&(J=re(J)),J instanceof t._Code?ae.push(...J._items):ae.push(J),ae),[]));function re(ae){const J=M[ae.str];return J===void 0||O[ae.str]!==1?ae:(delete O[ae.str],J)}function Oe(ae){return ae instanceof t._Code&&ae._items.some(J=>J instanceof t.Name&&O[J.str]===1&&M[J.str]!==void 0)}}function W(A,O){for(const M in O)A[M]=(A[M]||0)-(O[M]||0)}function we(A){return typeof A=="boolean"||typeof A=="number"||A===null?!A:(0,t._)`!${le(A)}`}e.not=we;const Re=L(e.operators.AND);function Ee(...A){return A.reduce(Re)}e.and=Ee;const ge=L(e.operators.OR);function Q(...A){return A.reduce(ge)}e.or=Q;function L(A){return(O,M)=>O===t.nil?M:M===t.nil?O:(0,t._)`${le(O)} ${A} ${le(M)}`}function le(A){return A instanceof t.Name?A:(0,t._)`(${A})`}})(Vd)),Vd}var ln={},_h;function qn(){if(_h)return ln;_h=1,Object.defineProperty(ln,"__esModule",{value:!0}),ln.checkStrictMode=ln.getErrorPath=ln.Type=ln.useFunc=ln.setEvaluated=ln.evaluatedPropsToName=ln.mergeEvaluated=ln.eachItem=ln.unescapeJsonPointer=ln.escapeJsonPointer=ln.escapeFragment=ln.unescapeFragment=ln.schemaRefOrVal=ln.schemaHasRulesButRef=ln.schemaHasRules=ln.checkUnknownRules=ln.alwaysValidSchema=ln.toHash=void 0;const e=mn(),t=Du();function r(j){const k={};for(const C of j)k[C]=!0;return k}ln.toHash=r;function o(j,k){return typeof k=="boolean"?k:Object.keys(k).length===0?!0:(s(j,k),!a(k,j.self.RULES.all))}ln.alwaysValidSchema=o;function s(j,k=j.schema){const{opts:C,self:T}=j;if(!C.strictSchema||typeof k=="boolean")return;const R=T.RULES.keywords;for(const ne in k)R[ne]||x(j,`unknown keyword: "${ne}"`)}ln.checkUnknownRules=s;function a(j,k){if(typeof j=="boolean")return!j;for(const C in j)if(k[C])return!0;return!1}ln.schemaHasRules=a;function i(j,k){if(typeof j=="boolean")return!j;for(const C in j)if(C!=="$ref"&&k.all[C])return!0;return!1}ln.schemaHasRulesButRef=i;function l({topSchemaRef:j,schemaPath:k},C,T,R){if(!R){if(typeof C=="number"||typeof C=="boolean")return C;if(typeof C=="string")return(0,e._)`${C}`}return(0,e._)`${j}${k}${(0,e.getProperty)(T)}`}ln.schemaRefOrVal=l;function c(j){return m(decodeURIComponent(j))}ln.unescapeFragment=c;function d(j){return encodeURIComponent(u(j))}ln.escapeFragment=d;function u(j){return typeof j=="number"?`${j}`:j.replace(/~/g,"~0").replace(/\//g,"~1")}ln.escapeJsonPointer=u;function m(j){return j.replace(/~1/g,"/").replace(/~0/g,"~")}ln.unescapeJsonPointer=m;function b(j,k){if(Array.isArray(j))for(const C of j)k(C);else k(j)}ln.eachItem=b;function w({mergeNames:j,mergeToName:k,mergeValues:C,resultToName:T}){return(R,ne,ee,F)=>{const te=ee===void 0?ne:ee instanceof e.Name?(ne instanceof e.Name?j(R,ne,ee):k(R,ne,ee),ee):ne instanceof e.Name?(k(R,ee,ne),ne):C(ne,ee);return F===e.Name&&!(te instanceof e.Name)?T(R,te):te}}ln.mergeEvaluated={props:w({mergeNames:(j,k,C)=>j.if((0,e._)`${C} !== true && ${k} !== undefined`,()=>{j.if((0,e._)`${k} === true`,()=>j.assign(C,!0),()=>j.assign(C,(0,e._)`${C} || {}`).code((0,e._)`Object.assign(${C}, ${k})`))}),mergeToName:(j,k,C)=>j.if((0,e._)`${C} !== true`,()=>{k===!0?j.assign(C,!0):(j.assign(C,(0,e._)`${C} || {}`),y(j,C,k))}),mergeValues:(j,k)=>j===!0?!0:{...j,...k},resultToName:p}),items:w({mergeNames:(j,k,C)=>j.if((0,e._)`${C} !== true && ${k} !== undefined`,()=>j.assign(C,(0,e._)`${k} === true ? true : ${C} > ${k} ? ${C} : ${k}`)),mergeToName:(j,k,C)=>j.if((0,e._)`${C} !== true`,()=>j.assign(C,k===!0?!0:(0,e._)`${C} > ${k} ? ${C} : ${k}`)),mergeValues:(j,k)=>j===!0?!0:Math.max(j,k),resultToName:(j,k)=>j.var("items",k)})};function p(j,k){if(k===!0)return j.var("props",!0);const C=j.var("props",(0,e._)`{}`);return k!==void 0&&y(j,C,k),C}ln.evaluatedPropsToName=p;function y(j,k,C){Object.keys(C).forEach(T=>j.assign((0,e._)`${k}${(0,e.getProperty)(T)}`,!0))}ln.setEvaluated=y;const v={};function h(j,k){return j.scopeValue("func",{ref:k,code:v[k.code]||(v[k.code]=new t._Code(k.code))})}ln.useFunc=h;var f;(function(j){j[j.Num=0]="Num",j[j.Str=1]="Str"})(f||(ln.Type=f={}));function g(j,k,C){if(j instanceof e.Name){const T=k===f.Num;return C?T?(0,e._)`"[" + ${j} + "]"`:(0,e._)`"['" + ${j} + "']"`:T?(0,e._)`"/" + ${j}`:(0,e._)`"/" + ${j}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return C?(0,e.getProperty)(j).toString():"/"+u(j)}ln.getErrorPath=g;function x(j,k,C=j.opts.strictSchema){if(C){if(k=`strict mode: ${k}`,C===!0)throw new Error(k);j.self.logger.warn(k)}}return ln.checkStrictMode=x,ln}var wc={},Ch;function Ss(){if(Ch)return wc;Ch=1,Object.defineProperty(wc,"__esModule",{value:!0});const e=mn(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return wc.default=t,wc}var Eh;function hd(){return Eh||(Eh=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=mn(),r=qn(),o=Ss();e.keywordError={message:({keyword:v})=>(0,t.str)`must pass "${v}" keyword validation`},e.keyword$DataError={message:({keyword:v,schemaType:h})=>h?(0,t.str)`"${v}" keyword must be ${h} ($data)`:(0,t.str)`"${v}" keyword is invalid ($data)`};function s(v,h=e.keywordError,f,g){const{it:x}=v,{gen:j,compositeRule:k,allErrors:C}=x,T=m(v,h,f);g??(k||C)?c(j,T):d(x,(0,t._)`[${T}]`)}e.reportError=s;function a(v,h=e.keywordError,f){const{it:g}=v,{gen:x,compositeRule:j,allErrors:k}=g,C=m(v,h,f);c(x,C),j||k||d(g,o.default.vErrors)}e.reportExtraError=a;function i(v,h){v.assign(o.default.errors,h),v.if((0,t._)`${o.default.vErrors} !== null`,()=>v.if(h,()=>v.assign((0,t._)`${o.default.vErrors}.length`,h),()=>v.assign(o.default.vErrors,null)))}e.resetErrorsCount=i;function l({gen:v,keyword:h,schemaValue:f,data:g,errsCount:x,it:j}){if(x===void 0)throw new Error("ajv implementation error");const k=v.name("err");v.forRange("i",x,o.default.errors,C=>{v.const(k,(0,t._)`${o.default.vErrors}[${C}]`),v.if((0,t._)`${k}.instancePath === undefined`,()=>v.assign((0,t._)`${k}.instancePath`,(0,t.strConcat)(o.default.instancePath,j.errorPath))),v.assign((0,t._)`${k}.schemaPath`,(0,t.str)`${j.errSchemaPath}/${h}`),j.opts.verbose&&(v.assign((0,t._)`${k}.schema`,f),v.assign((0,t._)`${k}.data`,g))})}e.extendErrors=l;function c(v,h){const f=v.const("err",h);v.if((0,t._)`${o.default.vErrors} === null`,()=>v.assign(o.default.vErrors,(0,t._)`[${f}]`),(0,t._)`${o.default.vErrors}.push(${f})`),v.code((0,t._)`${o.default.errors}++`)}function d(v,h){const{gen:f,validateName:g,schemaEnv:x}=v;x.$async?f.throw((0,t._)`new ${v.ValidationError}(${h})`):(f.assign((0,t._)`${g}.errors`,h),f.return(!1))}const u={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function m(v,h,f){const{createErrors:g}=v.it;return g===!1?(0,t._)`{}`:b(v,h,f)}function b(v,h,f={}){const{gen:g,it:x}=v,j=[w(x,f),p(v,f)];return y(v,h,j),g.object(...j)}function w({errorPath:v},{instancePath:h}){const f=h?(0,t.str)`${v}${(0,r.getErrorPath)(h,r.Type.Str)}`:v;return[o.default.instancePath,(0,t.strConcat)(o.default.instancePath,f)]}function p({keyword:v,it:{errSchemaPath:h}},{schemaPath:f,parentSchema:g}){let x=g?h:(0,t.str)`${h}/${v}`;return f&&(x=(0,t.str)`${x}${(0,r.getErrorPath)(f,r.Type.Str)}`),[u.schemaPath,x]}function y(v,{params:h,message:f},g){const{keyword:x,data:j,schemaValue:k,it:C}=v,{opts:T,propertyName:R,topSchemaRef:ne,schemaPath:ee}=C;g.push([u.keyword,x],[u.params,typeof h=="function"?h(v):h||(0,t._)`{}`]),T.messages&&g.push([u.message,typeof f=="function"?f(v):f]),T.verbose&&g.push([u.schema,k],[u.parentSchema,(0,t._)`${ne}${ee}`],[o.default.data,j]),R&&g.push([u.propertyName,R])}})(Fd)),Fd}var Oh;function Hw(){if(Oh)return Ns;Oh=1,Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.boolOrEmptySchema=Ns.topBoolOrEmptySchema=void 0;const e=hd(),t=mn(),r=Ss(),o={message:"boolean schema is false"};function s(l){const{gen:c,schema:d,validateName:u}=l;d===!1?i(l,!1):typeof d=="object"&&d.$async===!0?c.return(r.default.data):(c.assign((0,t._)`${u}.errors`,null),c.return(!0))}Ns.topBoolOrEmptySchema=s;function a(l,c){const{gen:d,schema:u}=l;u===!1?(d.var(c,!1),i(l)):d.var(c,!0)}Ns.boolOrEmptySchema=a;function i(l,c){const{gen:d,data:u}=l,m={gen:d,keyword:"false schema",data:u,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:l};(0,e.reportError)(m,o,void 0,c)}return Ns}var Xr={},Ts={},$h;function Ig(){if($h)return Ts;$h=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.getRules=Ts.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function r(s){return typeof s=="string"&&t.has(s)}Ts.isJSONType=r;function o(){const s={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...s,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},s.number,s.string,s.array,s.object],post:{rules:[]},all:{},keywords:{}}}return Ts.getRules=o,Ts}var Sa={},Ph;function Dg(){if(Ph)return Sa;Ph=1,Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.shouldUseRule=Sa.shouldUseGroup=Sa.schemaHasRulesForType=void 0;function e({schema:o,self:s},a){const i=s.RULES.types[a];return i&&i!==!0&&t(o,i)}Sa.schemaHasRulesForType=e;function t(o,s){return s.rules.some(a=>r(o,a))}Sa.shouldUseGroup=t;function r(o,s){var a;return o[s.keyword]!==void 0||((a=s.definition.implements)===null||a===void 0?void 0:a.some(i=>o[i]!==void 0))}return Sa.shouldUseRule=r,Sa}var Mh;function Lu(){if(Mh)return Xr;Mh=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.reportTypeError=Xr.checkDataTypes=Xr.checkDataType=Xr.coerceAndCheckDataType=Xr.getJSONTypes=Xr.getSchemaTypes=Xr.DataType=void 0;const e=Ig(),t=Dg(),r=hd(),o=mn(),s=qn();var a;(function(f){f[f.Correct=0]="Correct",f[f.Wrong=1]="Wrong"})(a||(Xr.DataType=a={}));function i(f){const g=l(f.type);if(g.includes("null")){if(f.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!g.length&&f.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');f.nullable===!0&&g.push("null")}return g}Xr.getSchemaTypes=i;function l(f){const g=Array.isArray(f)?f:f?[f]:[];if(g.every(e.isJSONType))return g;throw new Error("type must be JSONType or JSONType[]: "+g.join(","))}Xr.getJSONTypes=l;function c(f,g){const{gen:x,data:j,opts:k}=f,C=u(g,k.coerceTypes),T=g.length>0&&!(C.length===0&&g.length===1&&(0,t.schemaHasRulesForType)(f,g[0]));if(T){const R=p(g,j,k.strictNumbers,a.Wrong);x.if(R,()=>{C.length?m(f,g,C):v(f)})}return T}Xr.coerceAndCheckDataType=c;const d=new Set(["string","number","integer","boolean","null"]);function u(f,g){return g?f.filter(x=>d.has(x)||g==="array"&&x==="array"):[]}function m(f,g,x){const{gen:j,data:k,opts:C}=f,T=j.let("dataType",(0,o._)`typeof ${k}`),R=j.let("coerced",(0,o._)`undefined`);C.coerceTypes==="array"&&j.if((0,o._)`${T} == 'object' && Array.isArray(${k}) && ${k}.length == 1`,()=>j.assign(k,(0,o._)`${k}[0]`).assign(T,(0,o._)`typeof ${k}`).if(p(g,k,C.strictNumbers),()=>j.assign(R,k))),j.if((0,o._)`${R} !== undefined`);for(const ee of x)(d.has(ee)||ee==="array"&&C.coerceTypes==="array")&&ne(ee);j.else(),v(f),j.endIf(),j.if((0,o._)`${R} !== undefined`,()=>{j.assign(k,R),b(f,R)});function ne(ee){switch(ee){case"string":j.elseIf((0,o._)`${T} == "number" || ${T} == "boolean"`).assign(R,(0,o._)`"" + ${k}`).elseIf((0,o._)`${k} === null`).assign(R,(0,o._)`""`);return;case"number":j.elseIf((0,o._)`${T} == "boolean" || ${k} === null
              || (${T} == "string" && ${k} && ${k} == +${k})`).assign(R,(0,o._)`+${k}`);return;case"integer":j.elseIf((0,o._)`${T} === "boolean" || ${k} === null
              || (${T} === "string" && ${k} && ${k} == +${k} && !(${k} % 1))`).assign(R,(0,o._)`+${k}`);return;case"boolean":j.elseIf((0,o._)`${k} === "false" || ${k} === 0 || ${k} === null`).assign(R,!1).elseIf((0,o._)`${k} === "true" || ${k} === 1`).assign(R,!0);return;case"null":j.elseIf((0,o._)`${k} === "" || ${k} === 0 || ${k} === false`),j.assign(R,null);return;case"array":j.elseIf((0,o._)`${T} === "string" || ${T} === "number"
              || ${T} === "boolean" || ${k} === null`).assign(R,(0,o._)`[${k}]`)}}}function b({gen:f,parentData:g,parentDataProperty:x},j){f.if((0,o._)`${g} !== undefined`,()=>f.assign((0,o._)`${g}[${x}]`,j))}function w(f,g,x,j=a.Correct){const k=j===a.Correct?o.operators.EQ:o.operators.NEQ;let C;switch(f){case"null":return(0,o._)`${g} ${k} null`;case"array":C=(0,o._)`Array.isArray(${g})`;break;case"object":C=(0,o._)`${g} && typeof ${g} == "object" && !Array.isArray(${g})`;break;case"integer":C=T((0,o._)`!(${g} % 1) && !isNaN(${g})`);break;case"number":C=T();break;default:return(0,o._)`typeof ${g} ${k} ${f}`}return j===a.Correct?C:(0,o.not)(C);function T(R=o.nil){return(0,o.and)((0,o._)`typeof ${g} == "number"`,R,x?(0,o._)`isFinite(${g})`:o.nil)}}Xr.checkDataType=w;function p(f,g,x,j){if(f.length===1)return w(f[0],g,x,j);let k;const C=(0,s.toHash)(f);if(C.array&&C.object){const T=(0,o._)`typeof ${g} != "object"`;k=C.null?T:(0,o._)`!${g} || ${T}`,delete C.null,delete C.array,delete C.object}else k=o.nil;C.number&&delete C.integer;for(const T in C)k=(0,o.and)(k,w(T,g,x,j));return k}Xr.checkDataTypes=p;const y={message:({schema:f})=>`must be ${f}`,params:({schema:f,schemaValue:g})=>typeof f=="string"?(0,o._)`{type: ${f}}`:(0,o._)`{type: ${g}}`};function v(f){const g=h(f);(0,r.reportError)(g,y)}Xr.reportTypeError=v;function h(f){const{gen:g,data:x,schema:j}=f,k=(0,s.schemaRefOrVal)(f,j,"type");return{gen:g,keyword:"type",data:x,schema:j.type,schemaCode:k,schemaValue:k,parentSchema:j,params:{},it:f}}return Xr}var jl={},Rh;function Kw(){if(Rh)return jl;Rh=1,Object.defineProperty(jl,"__esModule",{value:!0}),jl.assignDefaults=void 0;const e=mn(),t=qn();function r(s,a){const{properties:i,items:l}=s.schema;if(a==="object"&&i)for(const c in i)o(s,c,i[c].default);else a==="array"&&Array.isArray(l)&&l.forEach((c,d)=>o(s,d,c.default))}jl.assignDefaults=r;function o(s,a,i){const{gen:l,compositeRule:c,data:d,opts:u}=s;if(i===void 0)return;const m=(0,e._)`${d}${(0,e.getProperty)(a)}`;if(c){(0,t.checkStrictMode)(s,`default is ignored for: ${m}`);return}let b=(0,e._)`${m} === undefined`;u.useDefaults==="empty"&&(b=(0,e._)`${b} || ${m} === null || ${m} === ""`),l.if(b,(0,e._)`${m} = ${(0,e.stringify)(i)}`)}return jl}var Wo={},Jn={},Nh;function ra(){if(Nh)return Jn;Nh=1,Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.validateUnion=Jn.validateArray=Jn.usePattern=Jn.callValidateCode=Jn.schemaProperties=Jn.allSchemaProperties=Jn.noPropertyInData=Jn.propertyInData=Jn.isOwnProperty=Jn.hasPropFunc=Jn.reportMissingProp=Jn.checkMissingProp=Jn.checkReportMissingProp=void 0;const e=mn(),t=qn(),r=Ss(),o=qn();function s(f,g){const{gen:x,data:j,it:k}=f;x.if(u(x,j,g,k.opts.ownProperties),()=>{f.setParams({missingProperty:(0,e._)`${g}`},!0),f.error()})}Jn.checkReportMissingProp=s;function a({gen:f,data:g,it:{opts:x}},j,k){return(0,e.or)(...j.map(C=>(0,e.and)(u(f,g,C,x.ownProperties),(0,e._)`${k} = ${C}`)))}Jn.checkMissingProp=a;function i(f,g){f.setParams({missingProperty:g},!0),f.error()}Jn.reportMissingProp=i;function l(f){return f.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Jn.hasPropFunc=l;function c(f,g,x){return(0,e._)`${l(f)}.call(${g}, ${x})`}Jn.isOwnProperty=c;function d(f,g,x,j){const k=(0,e._)`${g}${(0,e.getProperty)(x)} !== undefined`;return j?(0,e._)`${k} && ${c(f,g,x)}`:k}Jn.propertyInData=d;function u(f,g,x,j){const k=(0,e._)`${g}${(0,e.getProperty)(x)} === undefined`;return j?(0,e.or)(k,(0,e.not)(c(f,g,x))):k}Jn.noPropertyInData=u;function m(f){return f?Object.keys(f).filter(g=>g!=="__proto__"):[]}Jn.allSchemaProperties=m;function b(f,g){return m(g).filter(x=>!(0,t.alwaysValidSchema)(f,g[x]))}Jn.schemaProperties=b;function w({schemaCode:f,data:g,it:{gen:x,topSchemaRef:j,schemaPath:k,errorPath:C},it:T},R,ne,ee){const F=ee?(0,e._)`${f}, ${g}, ${j}${k}`:g,te=[[r.default.instancePath,(0,e.strConcat)(r.default.instancePath,C)],[r.default.parentData,T.parentData],[r.default.parentDataProperty,T.parentDataProperty],[r.default.rootData,r.default.rootData]];T.opts.dynamicRef&&te.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);const ye=(0,e._)`${F}, ${x.object(...te)}`;return ne!==e.nil?(0,e._)`${R}.call(${ne}, ${ye})`:(0,e._)`${R}(${ye})`}Jn.callValidateCode=w;const p=(0,e._)`new RegExp`;function y({gen:f,it:{opts:g}},x){const j=g.unicodeRegExp?"u":"",{regExp:k}=g.code,C=k(x,j);return f.scopeValue("pattern",{key:C.toString(),ref:C,code:(0,e._)`${k.code==="new RegExp"?p:(0,o.useFunc)(f,k)}(${x}, ${j})`})}Jn.usePattern=y;function v(f){const{gen:g,data:x,keyword:j,it:k}=f,C=g.name("valid");if(k.allErrors){const R=g.let("valid",!0);return T(()=>g.assign(R,!1)),R}return g.var(C,!0),T(()=>g.break()),C;function T(R){const ne=g.const("len",(0,e._)`${x}.length`);g.forRange("i",0,ne,ee=>{f.subschema({keyword:j,dataProp:ee,dataPropType:t.Type.Num},C),g.if((0,e.not)(C),R)})}}Jn.validateArray=v;function h(f){const{gen:g,schema:x,keyword:j,it:k}=f;if(!Array.isArray(x))throw new Error("ajv implementation error");if(x.some(ne=>(0,t.alwaysValidSchema)(k,ne))&&!k.opts.unevaluated)return;const T=g.let("valid",!1),R=g.name("_valid");g.block(()=>x.forEach((ne,ee)=>{const F=f.subschema({keyword:j,schemaProp:ee,compositeRule:!0},R);g.assign(T,(0,e._)`${T} || ${R}`),f.mergeValidEvaluated(F,R)||g.if((0,e.not)(T))})),f.result(T,()=>f.reset(),()=>f.error(!0))}return Jn.validateUnion=h,Jn}var Th;function Jw(){if(Th)return Wo;Th=1,Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.validateKeywordUsage=Wo.validSchemaType=Wo.funcKeywordCode=Wo.macroKeywordCode=void 0;const e=mn(),t=Ss(),r=ra(),o=hd();function s(b,w){const{gen:p,keyword:y,schema:v,parentSchema:h,it:f}=b,g=w.macro.call(f.self,v,h,f),x=d(p,y,g);f.opts.validateSchema!==!1&&f.self.validateSchema(g,!0);const j=p.name("valid");b.subschema({schema:g,schemaPath:e.nil,errSchemaPath:`${f.errSchemaPath}/${y}`,topSchemaRef:x,compositeRule:!0},j),b.pass(j,()=>b.error(!0))}Wo.macroKeywordCode=s;function a(b,w){var p;const{gen:y,keyword:v,schema:h,parentSchema:f,$data:g,it:x}=b;c(x,w);const j=!g&&w.compile?w.compile.call(x.self,h,f,x):w.validate,k=d(y,v,j),C=y.let("valid");b.block$data(C,T),b.ok((p=w.valid)!==null&&p!==void 0?p:C);function T(){if(w.errors===!1)ee(),w.modifying&&i(b),F(()=>b.error());else{const te=w.async?R():ne();w.modifying&&i(b),F(()=>l(b,te))}}function R(){const te=y.let("ruleErrs",null);return y.try(()=>ee((0,e._)`await `),ye=>y.assign(C,!1).if((0,e._)`${ye} instanceof ${x.ValidationError}`,()=>y.assign(te,(0,e._)`${ye}.errors`),()=>y.throw(ye))),te}function ne(){const te=(0,e._)`${k}.errors`;return y.assign(te,null),ee(e.nil),te}function ee(te=w.async?(0,e._)`await `:e.nil){const ye=x.opts.passContext?t.default.this:t.default.self,W=!("compile"in w&&!g||w.schema===!1);y.assign(C,(0,e._)`${te}${(0,r.callValidateCode)(b,k,ye,W)}`,w.modifying)}function F(te){var ye;y.if((0,e.not)((ye=w.valid)!==null&&ye!==void 0?ye:C),te)}}Wo.funcKeywordCode=a;function i(b){const{gen:w,data:p,it:y}=b;w.if(y.parentData,()=>w.assign(p,(0,e._)`${y.parentData}[${y.parentDataProperty}]`))}function l(b,w){const{gen:p}=b;p.if((0,e._)`Array.isArray(${w})`,()=>{p.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,o.extendErrors)(b)},()=>b.error())}function c({schemaEnv:b},w){if(w.async&&!b.$async)throw new Error("async keyword in sync schema")}function d(b,w,p){if(p===void 0)throw new Error(`keyword "${w}" failed to compile`);return b.scopeValue("keyword",typeof p=="function"?{ref:p}:{ref:p,code:(0,e.stringify)(p)})}function u(b,w,p=!1){return!w.length||w.some(y=>y==="array"?Array.isArray(b):y==="object"?b&&typeof b=="object"&&!Array.isArray(b):typeof b==y||p&&typeof b>"u")}Wo.validSchemaType=u;function m({schema:b,opts:w,self:p,errSchemaPath:y},v,h){if(Array.isArray(v.keyword)?!v.keyword.includes(h):v.keyword!==h)throw new Error("ajv implementation error");const f=v.dependencies;if(f?.some(g=>!Object.prototype.hasOwnProperty.call(b,g)))throw new Error(`parent schema must have dependencies of ${h}: ${f.join(",")}`);if(v.validateSchema&&!v.validateSchema(b[h])){const x=`keyword "${h}" value is invalid at path "${y}": `+p.errorsText(v.validateSchema.errors);if(w.validateSchema==="log")p.logger.error(x);else throw new Error(x)}}return Wo.validateKeywordUsage=m,Wo}var _a={},Ah;function Qw(){if(Ah)return _a;Ah=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.extendSubschemaMode=_a.extendSubschemaData=_a.getSubschema=void 0;const e=mn(),t=qn();function r(a,{keyword:i,schemaProp:l,schema:c,schemaPath:d,errSchemaPath:u,topSchemaRef:m}){if(i!==void 0&&c!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(i!==void 0){const b=a.schema[i];return l===void 0?{schema:b,schemaPath:(0,e._)`${a.schemaPath}${(0,e.getProperty)(i)}`,errSchemaPath:`${a.errSchemaPath}/${i}`}:{schema:b[l],schemaPath:(0,e._)`${a.schemaPath}${(0,e.getProperty)(i)}${(0,e.getProperty)(l)}`,errSchemaPath:`${a.errSchemaPath}/${i}/${(0,t.escapeFragment)(l)}`}}if(c!==void 0){if(d===void 0||u===void 0||m===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:c,schemaPath:d,topSchemaRef:m,errSchemaPath:u}}throw new Error('either "keyword" or "schema" must be passed')}_a.getSubschema=r;function o(a,i,{dataProp:l,dataPropType:c,data:d,dataTypes:u,propertyName:m}){if(d!==void 0&&l!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:b}=i;if(l!==void 0){const{errorPath:p,dataPathArr:y,opts:v}=i,h=b.let("data",(0,e._)`${i.data}${(0,e.getProperty)(l)}`,!0);w(h),a.errorPath=(0,e.str)`${p}${(0,t.getErrorPath)(l,c,v.jsPropertySyntax)}`,a.parentDataProperty=(0,e._)`${l}`,a.dataPathArr=[...y,a.parentDataProperty]}if(d!==void 0){const p=d instanceof e.Name?d:b.let("data",d,!0);w(p),m!==void 0&&(a.propertyName=m)}u&&(a.dataTypes=u);function w(p){a.data=p,a.dataLevel=i.dataLevel+1,a.dataTypes=[],i.definedProperties=new Set,a.parentData=i.data,a.dataNames=[...i.dataNames,p]}}_a.extendSubschemaData=o;function s(a,{jtdDiscriminator:i,jtdMetadata:l,compositeRule:c,createErrors:d,allErrors:u}){c!==void 0&&(a.compositeRule=c),d!==void 0&&(a.createErrors=d),u!==void 0&&(a.allErrors=u),a.jtdDiscriminator=i,a.jtdMetadata=l}return _a.extendSubschemaMode=s,_a}var co={},Hd={exports:{}},qh;function Gw(){if(qh)return Hd.exports;qh=1;var e=Hd.exports=function(o,s,a){typeof s=="function"&&(a=s,s={}),a=s.cb||a;var i=typeof a=="function"?a:a.pre||function(){},l=a.post||function(){};t(s,i,l,o,"",o)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(o,s,a,i,l,c,d,u,m,b){if(i&&typeof i=="object"&&!Array.isArray(i)){s(i,l,c,d,u,m,b);for(var w in i){var p=i[w];if(Array.isArray(p)){if(w in e.arrayKeywords)for(var y=0;y<p.length;y++)t(o,s,a,p[y],l+"/"+w+"/"+y,c,l,w,i,y)}else if(w in e.propsKeywords){if(p&&typeof p=="object")for(var v in p)t(o,s,a,p[v],l+"/"+w+"/"+r(v),c,l,w,i,v)}else(w in e.keywords||o.allKeys&&!(w in e.skipKeywords))&&t(o,s,a,p,l+"/"+w,c,l,w,i)}a(i,l,c,d,u,m,b)}}function r(o){return o.replace(/~/g,"~0").replace(/\//g,"~1")}return Hd.exports}var zh;function pd(){if(zh)return co;zh=1,Object.defineProperty(co,"__esModule",{value:!0}),co.getSchemaRefs=co.resolveUrl=co.normalizeId=co._getFullPath=co.getFullPath=co.inlineRef=void 0;const e=qn(),t=ug(),r=Gw(),o=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function s(y,v=!0){return typeof y=="boolean"?!0:v===!0?!i(y):v?l(y)<=v:!1}co.inlineRef=s;const a=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function i(y){for(const v in y){if(a.has(v))return!0;const h=y[v];if(Array.isArray(h)&&h.some(i)||typeof h=="object"&&i(h))return!0}return!1}function l(y){let v=0;for(const h in y){if(h==="$ref")return 1/0;if(v++,!o.has(h)&&(typeof y[h]=="object"&&(0,e.eachItem)(y[h],f=>v+=l(f)),v===1/0))return 1/0}return v}function c(y,v="",h){h!==!1&&(v=m(v));const f=y.parse(v);return d(y,f)}co.getFullPath=c;function d(y,v){return y.serialize(v).split("#")[0]+"#"}co._getFullPath=d;const u=/#\/?$/;function m(y){return y?y.replace(u,""):""}co.normalizeId=m;function b(y,v,h){return h=m(h),y.resolve(v,h)}co.resolveUrl=b;const w=/^[a-z_][-a-z0-9._]*$/i;function p(y,v){if(typeof y=="boolean")return{};const{schemaId:h,uriResolver:f}=this.opts,g=m(y[h]||v),x={"":g},j=c(f,g,!1),k={},C=new Set;return r(y,{allKeys:!0},(ne,ee,F,te)=>{if(te===void 0)return;const ye=j+ee;let W=x[te];typeof ne[h]=="string"&&(W=we.call(this,ne[h])),Re.call(this,ne.$anchor),Re.call(this,ne.$dynamicAnchor),x[ee]=W;function we(Ee){const ge=this.opts.uriResolver.resolve;if(Ee=m(W?ge(W,Ee):Ee),C.has(Ee))throw R(Ee);C.add(Ee);let Q=this.refs[Ee];return typeof Q=="string"&&(Q=this.refs[Q]),typeof Q=="object"?T(ne,Q.schema,Ee):Ee!==m(ye)&&(Ee[0]==="#"?(T(ne,k[Ee],Ee),k[Ee]=ne):this.refs[Ee]=ye),Ee}function Re(Ee){if(typeof Ee=="string"){if(!w.test(Ee))throw new Error(`invalid anchor "${Ee}"`);we.call(this,`#${Ee}`)}}}),k;function T(ne,ee,F){if(ee!==void 0&&!t(ne,ee))throw R(F)}function R(ne){return new Error(`reference "${ne}" resolves to more than one schema`)}}return co.getSchemaRefs=p,co}var Ih;function md(){if(Ih)return ka;Ih=1,Object.defineProperty(ka,"__esModule",{value:!0}),ka.getData=ka.KeywordCxt=ka.validateFunctionCode=void 0;const e=Hw(),t=Lu(),r=Dg(),o=Lu(),s=Kw(),a=Jw(),i=Qw(),l=mn(),c=Ss(),d=pd(),u=qn(),m=hd();function b($){if(j($)&&(C($),x($))){v($);return}w($,()=>(0,e.topBoolOrEmptySchema)($))}ka.validateFunctionCode=b;function w({gen:$,validateName:I,schema:D,schemaEnv:ce,opts:G},V){G.code.es5?$.func(I,(0,l._)`${c.default.data}, ${c.default.valCxt}`,ce.$async,()=>{$.code((0,l._)`"use strict"; ${f(D,G)}`),y($,G),$.code(V)}):$.func(I,(0,l._)`${c.default.data}, ${p(G)}`,ce.$async,()=>$.code(f(D,G)).code(V))}function p($){return(0,l._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${$.dynamicRef?(0,l._)`, ${c.default.dynamicAnchors}={}`:l.nil}}={}`}function y($,I){$.if(c.default.valCxt,()=>{$.var(c.default.instancePath,(0,l._)`${c.default.valCxt}.${c.default.instancePath}`),$.var(c.default.parentData,(0,l._)`${c.default.valCxt}.${c.default.parentData}`),$.var(c.default.parentDataProperty,(0,l._)`${c.default.valCxt}.${c.default.parentDataProperty}`),$.var(c.default.rootData,(0,l._)`${c.default.valCxt}.${c.default.rootData}`),I.dynamicRef&&$.var(c.default.dynamicAnchors,(0,l._)`${c.default.valCxt}.${c.default.dynamicAnchors}`)},()=>{$.var(c.default.instancePath,(0,l._)`""`),$.var(c.default.parentData,(0,l._)`undefined`),$.var(c.default.parentDataProperty,(0,l._)`undefined`),$.var(c.default.rootData,c.default.data),I.dynamicRef&&$.var(c.default.dynamicAnchors,(0,l._)`{}`)})}function v($){const{schema:I,opts:D,gen:ce}=$;w($,()=>{D.$comment&&I.$comment&&te($),ne($),ce.let(c.default.vErrors,null),ce.let(c.default.errors,0),D.unevaluated&&h($),T($),ye($)})}function h($){const{gen:I,validateName:D}=$;$.evaluated=I.const("evaluated",(0,l._)`${D}.evaluated`),I.if((0,l._)`${$.evaluated}.dynamicProps`,()=>I.assign((0,l._)`${$.evaluated}.props`,(0,l._)`undefined`)),I.if((0,l._)`${$.evaluated}.dynamicItems`,()=>I.assign((0,l._)`${$.evaluated}.items`,(0,l._)`undefined`))}function f($,I){const D=typeof $=="object"&&$[I.schemaId];return D&&(I.code.source||I.code.process)?(0,l._)`/*# sourceURL=${D} */`:l.nil}function g($,I){if(j($)&&(C($),x($))){k($,I);return}(0,e.boolOrEmptySchema)($,I)}function x({schema:$,self:I}){if(typeof $=="boolean")return!$;for(const D in $)if(I.RULES.all[D])return!0;return!1}function j($){return typeof $.schema!="boolean"}function k($,I){const{schema:D,gen:ce,opts:G}=$;G.$comment&&D.$comment&&te($),ee($),F($);const V=ce.const("_errs",c.default.errors);T($,V),ce.var(I,(0,l._)`${V} === ${c.default.errors}`)}function C($){(0,u.checkUnknownRules)($),R($)}function T($,I){if($.opts.jtd)return we($,[],!1,I);const D=(0,t.getSchemaTypes)($.schema),ce=(0,t.coerceAndCheckDataType)($,D);we($,D,!ce,I)}function R($){const{schema:I,errSchemaPath:D,opts:ce,self:G}=$;I.$ref&&ce.ignoreKeywordsWithRef&&(0,u.schemaHasRulesButRef)(I,G.RULES)&&G.logger.warn(`$ref: keywords ignored in schema at path "${D}"`)}function ne($){const{schema:I,opts:D}=$;I.default!==void 0&&D.useDefaults&&D.strictSchema&&(0,u.checkStrictMode)($,"default is ignored in the schema root")}function ee($){const I=$.schema[$.opts.schemaId];I&&($.baseId=(0,d.resolveUrl)($.opts.uriResolver,$.baseId,I))}function F($){if($.schema.$async&&!$.schemaEnv.$async)throw new Error("async schema in sync schema")}function te({gen:$,schemaEnv:I,schema:D,errSchemaPath:ce,opts:G}){const V=D.$comment;if(G.$comment===!0)$.code((0,l._)`${c.default.self}.logger.log(${V})`);else if(typeof G.$comment=="function"){const rt=(0,l.str)`${ce}/$comment`,ot=$.scopeValue("root",{ref:I.root});$.code((0,l._)`${c.default.self}.opts.$comment(${V}, ${rt}, ${ot}.schema)`)}}function ye($){const{gen:I,schemaEnv:D,validateName:ce,ValidationError:G,opts:V}=$;D.$async?I.if((0,l._)`${c.default.errors} === 0`,()=>I.return(c.default.data),()=>I.throw((0,l._)`new ${G}(${c.default.vErrors})`)):(I.assign((0,l._)`${ce}.errors`,c.default.vErrors),V.unevaluated&&W($),I.return((0,l._)`${c.default.errors} === 0`))}function W({gen:$,evaluated:I,props:D,items:ce}){D instanceof l.Name&&$.assign((0,l._)`${I}.props`,D),ce instanceof l.Name&&$.assign((0,l._)`${I}.items`,ce)}function we($,I,D,ce){const{gen:G,schema:V,data:rt,allErrors:ot,opts:Ce,self:lt}=$,{RULES:qe}=lt;if(V.$ref&&(Ce.ignoreKeywordsWithRef||!(0,u.schemaHasRulesButRef)(V,qe))){G.block(()=>Oe($,"$ref",qe.all.$ref.definition));return}Ce.jtd||Ee($,I),G.block(()=>{for(const it of qe.rules)He(it);He(qe.post)});function He(it){(0,r.shouldUseGroup)(V,it)&&(it.type?(G.if((0,o.checkDataType)(it.type,rt,Ce.strictNumbers)),Re($,it),I.length===1&&I[0]===it.type&&D&&(G.else(),(0,o.reportTypeError)($)),G.endIf()):Re($,it),ot||G.if((0,l._)`${c.default.errors} === ${ce||0}`))}}function Re($,I){const{gen:D,schema:ce,opts:{useDefaults:G}}=$;G&&(0,s.assignDefaults)($,I.type),D.block(()=>{for(const V of I.rules)(0,r.shouldUseRule)(ce,V)&&Oe($,V.keyword,V.definition,I.type)})}function Ee($,I){$.schemaEnv.meta||!$.opts.strictTypes||(ge($,I),$.opts.allowUnionTypes||Q($,I),L($,$.dataTypes))}function ge($,I){if(I.length){if(!$.dataTypes.length){$.dataTypes=I;return}I.forEach(D=>{A($.dataTypes,D)||M($,`type "${D}" not allowed by context "${$.dataTypes.join(",")}"`)}),O($,I)}}function Q($,I){I.length>1&&!(I.length===2&&I.includes("null"))&&M($,"use allowUnionTypes to allow union type keyword")}function L($,I){const D=$.self.RULES.all;for(const ce in D){const G=D[ce];if(typeof G=="object"&&(0,r.shouldUseRule)($.schema,G)){const{type:V}=G.definition;V.length&&!V.some(rt=>le(I,rt))&&M($,`missing type "${V.join(",")}" for keyword "${ce}"`)}}}function le($,I){return $.includes(I)||I==="number"&&$.includes("integer")}function A($,I){return $.includes(I)||I==="integer"&&$.includes("number")}function O($,I){const D=[];for(const ce of $.dataTypes)A(I,ce)?D.push(ce):I.includes("integer")&&ce==="number"&&D.push("integer");$.dataTypes=D}function M($,I){const D=$.schemaEnv.baseId+$.errSchemaPath;I+=` at "${D}" (strictTypes)`,(0,u.checkStrictMode)($,I,$.opts.strictTypes)}class re{constructor(I,D,ce){if((0,a.validateKeywordUsage)(I,D,ce),this.gen=I.gen,this.allErrors=I.allErrors,this.keyword=ce,this.data=I.data,this.schema=I.schema[ce],this.$data=D.$data&&I.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,u.schemaRefOrVal)(I,this.schema,ce,this.$data),this.schemaType=D.schemaType,this.parentSchema=I.schema,this.params={},this.it=I,this.def=D,this.$data)this.schemaCode=I.gen.const("vSchema",pe(this.$data,I));else if(this.schemaCode=this.schemaValue,!(0,a.validSchemaType)(this.schema,D.schemaType,D.allowUndefined))throw new Error(`${ce} value must be ${JSON.stringify(D.schemaType)}`);("code"in D?D.trackErrors:D.errors!==!1)&&(this.errsCount=I.gen.const("_errs",c.default.errors))}result(I,D,ce){this.failResult((0,l.not)(I),D,ce)}failResult(I,D,ce){this.gen.if(I),ce?ce():this.error(),D?(this.gen.else(),D(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(I,D){this.failResult((0,l.not)(I),void 0,D)}fail(I){if(I===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(I),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(I){if(!this.$data)return this.fail(I);const{schemaCode:D}=this;this.fail((0,l._)`${D} !== undefined && (${(0,l.or)(this.invalid$data(),I)})`)}error(I,D,ce){if(D){this.setParams(D),this._error(I,ce),this.setParams({});return}this._error(I,ce)}_error(I,D){(I?m.reportExtraError:m.reportError)(this,this.def.error,D)}$dataError(){(0,m.reportError)(this,this.def.$dataError||m.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,m.resetErrorsCount)(this.gen,this.errsCount)}ok(I){this.allErrors||this.gen.if(I)}setParams(I,D){D?Object.assign(this.params,I):this.params=I}block$data(I,D,ce=l.nil){this.gen.block(()=>{this.check$data(I,ce),D()})}check$data(I=l.nil,D=l.nil){if(!this.$data)return;const{gen:ce,schemaCode:G,schemaType:V,def:rt}=this;ce.if((0,l.or)((0,l._)`${G} === undefined`,D)),I!==l.nil&&ce.assign(I,!0),(V.length||rt.validateSchema)&&(ce.elseIf(this.invalid$data()),this.$dataError(),I!==l.nil&&ce.assign(I,!1)),ce.else()}invalid$data(){const{gen:I,schemaCode:D,schemaType:ce,def:G,it:V}=this;return(0,l.or)(rt(),ot());function rt(){if(ce.length){if(!(D instanceof l.Name))throw new Error("ajv implementation error");const Ce=Array.isArray(ce)?ce:[ce];return(0,l._)`${(0,o.checkDataTypes)(Ce,D,V.opts.strictNumbers,o.DataType.Wrong)}`}return l.nil}function ot(){if(G.validateSchema){const Ce=I.scopeValue("validate$data",{ref:G.validateSchema});return(0,l._)`!${Ce}(${D})`}return l.nil}}subschema(I,D){const ce=(0,i.getSubschema)(this.it,I);(0,i.extendSubschemaData)(ce,this.it,I),(0,i.extendSubschemaMode)(ce,I);const G={...this.it,...ce,items:void 0,props:void 0};return g(G,D),G}mergeEvaluated(I,D){const{it:ce,gen:G}=this;ce.opts.unevaluated&&(ce.props!==!0&&I.props!==void 0&&(ce.props=u.mergeEvaluated.props(G,I.props,ce.props,D)),ce.items!==!0&&I.items!==void 0&&(ce.items=u.mergeEvaluated.items(G,I.items,ce.items,D)))}mergeValidEvaluated(I,D){const{it:ce,gen:G}=this;if(ce.opts.unevaluated&&(ce.props!==!0||ce.items!==!0))return G.if(D,()=>this.mergeEvaluated(I,l.Name)),!0}}ka.KeywordCxt=re;function Oe($,I,D,ce){const G=new re($,D,I);"code"in D?D.code(G,ce):G.$data&&D.validate?(0,a.funcKeywordCode)(G,D):"macro"in D?(0,a.macroKeywordCode)(G,D):(D.compile||D.validate)&&(0,a.funcKeywordCode)(G,D)}const ae=/^\/(?:[^~]|~0|~1)*$/,J=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function pe($,{dataLevel:I,dataNames:D,dataPathArr:ce}){let G,V;if($==="")return c.default.rootData;if($[0]==="/"){if(!ae.test($))throw new Error(`Invalid JSON-pointer: ${$}`);G=$,V=c.default.rootData}else{const lt=J.exec($);if(!lt)throw new Error(`Invalid JSON-pointer: ${$}`);const qe=+lt[1];if(G=lt[2],G==="#"){if(qe>=I)throw new Error(Ce("property/index",qe));return ce[I-qe]}if(qe>I)throw new Error(Ce("data",qe));if(V=D[I-qe],!G)return V}let rt=V;const ot=G.split("/");for(const lt of ot)lt&&(V=(0,l._)`${V}${(0,l.getProperty)((0,u.unescapeJsonPointer)(lt))}`,rt=(0,l._)`${rt} && ${V}`);return rt;function Ce(lt,qe){return`Cannot access ${lt} ${qe} levels up, current level is ${I}`}}return ka.getData=pe,ka}var xc={},Dh;function kv(){if(Dh)return xc;Dh=1,Object.defineProperty(xc,"__esModule",{value:!0});class e extends Error{constructor(r){super("validation failed"),this.errors=r,this.ajv=this.validation=!0}}return xc.default=e,xc}var kc={},Lh;function gd(){if(Lh)return kc;Lh=1,Object.defineProperty(kc,"__esModule",{value:!0});const e=pd();class t extends Error{constructor(o,s,a,i){super(i||`can't resolve reference ${a} from id ${s}`),this.missingRef=(0,e.resolveUrl)(o,s,a),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(o,this.missingRef))}}return kc.default=t,kc}var xo={},Uh;function Sv(){if(Uh)return xo;Uh=1,Object.defineProperty(xo,"__esModule",{value:!0}),xo.resolveSchema=xo.getCompilingSchema=xo.resolveRef=xo.compileSchema=xo.SchemaEnv=void 0;const e=mn(),t=kv(),r=Ss(),o=pd(),s=qn(),a=md();class i{constructor(h){var f;this.refs={},this.dynamicAnchors={};let g;typeof h.schema=="object"&&(g=h.schema),this.schema=h.schema,this.schemaId=h.schemaId,this.root=h.root||this,this.baseId=(f=h.baseId)!==null&&f!==void 0?f:(0,o.normalizeId)(g?.[h.schemaId||"$id"]),this.schemaPath=h.schemaPath,this.localRefs=h.localRefs,this.meta=h.meta,this.$async=g?.$async,this.refs={}}}xo.SchemaEnv=i;function l(v){const h=u.call(this,v);if(h)return h;const f=(0,o.getFullPath)(this.opts.uriResolver,v.root.baseId),{es5:g,lines:x}=this.opts.code,{ownProperties:j}=this.opts,k=new e.CodeGen(this.scope,{es5:g,lines:x,ownProperties:j});let C;v.$async&&(C=k.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const T=k.scopeName("validate");v.validateName=T;const R={gen:k,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:k.scopeValue("schema",this.opts.code.source===!0?{ref:v.schema,code:(0,e.stringify)(v.schema)}:{ref:v.schema}),validateName:T,ValidationError:C,schema:v.schema,schemaEnv:v,rootId:f,baseId:v.baseId||f,schemaPath:e.nil,errSchemaPath:v.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let ne;try{this._compilations.add(v),(0,a.validateFunctionCode)(R),k.optimize(this.opts.code.optimize);const ee=k.toString();ne=`${k.scopeRefs(r.default.scope)}return ${ee}`,this.opts.code.process&&(ne=this.opts.code.process(ne,v));const te=new Function(`${r.default.self}`,`${r.default.scope}`,ne)(this,this.scope.get());if(this.scope.value(T,{ref:te}),te.errors=null,te.schema=v.schema,te.schemaEnv=v,v.$async&&(te.$async=!0),this.opts.code.source===!0&&(te.source={validateName:T,validateCode:ee,scopeValues:k._values}),this.opts.unevaluated){const{props:ye,items:W}=R;te.evaluated={props:ye instanceof e.Name?void 0:ye,items:W instanceof e.Name?void 0:W,dynamicProps:ye instanceof e.Name,dynamicItems:W instanceof e.Name},te.source&&(te.source.evaluated=(0,e.stringify)(te.evaluated))}return v.validate=te,v}catch(ee){throw delete v.validate,delete v.validateName,ne&&this.logger.error("Error compiling schema, function code:",ne),ee}finally{this._compilations.delete(v)}}xo.compileSchema=l;function c(v,h,f){var g;f=(0,o.resolveUrl)(this.opts.uriResolver,h,f);const x=v.refs[f];if(x)return x;let j=b.call(this,v,f);if(j===void 0){const k=(g=v.localRefs)===null||g===void 0?void 0:g[f],{schemaId:C}=this.opts;k&&(j=new i({schema:k,schemaId:C,root:v,baseId:h}))}if(j!==void 0)return v.refs[f]=d.call(this,j)}xo.resolveRef=c;function d(v){return(0,o.inlineRef)(v.schema,this.opts.inlineRefs)?v.schema:v.validate?v:l.call(this,v)}function u(v){for(const h of this._compilations)if(m(h,v))return h}xo.getCompilingSchema=u;function m(v,h){return v.schema===h.schema&&v.root===h.root&&v.baseId===h.baseId}function b(v,h){let f;for(;typeof(f=this.refs[h])=="string";)h=f;return f||this.schemas[h]||w.call(this,v,h)}function w(v,h){const f=this.opts.uriResolver.parse(h),g=(0,o._getFullPath)(this.opts.uriResolver,f);let x=(0,o.getFullPath)(this.opts.uriResolver,v.baseId,void 0);if(Object.keys(v.schema).length>0&&g===x)return y.call(this,f,v);const j=(0,o.normalizeId)(g),k=this.refs[j]||this.schemas[j];if(typeof k=="string"){const C=w.call(this,v,k);return typeof C?.schema!="object"?void 0:y.call(this,f,C)}if(typeof k?.schema=="object"){if(k.validate||l.call(this,k),j===(0,o.normalizeId)(h)){const{schema:C}=k,{schemaId:T}=this.opts,R=C[T];return R&&(x=(0,o.resolveUrl)(this.opts.uriResolver,x,R)),new i({schema:C,schemaId:T,root:v,baseId:x})}return y.call(this,f,k)}}xo.resolveSchema=w;const p=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function y(v,{baseId:h,schema:f,root:g}){var x;if(((x=v.fragment)===null||x===void 0?void 0:x[0])!=="/")return;for(const C of v.fragment.slice(1).split("/")){if(typeof f=="boolean")return;const T=f[(0,s.unescapeFragment)(C)];if(T===void 0)return;f=T;const R=typeof f=="object"&&f[this.opts.schemaId];!p.has(C)&&R&&(h=(0,o.resolveUrl)(this.opts.uriResolver,h,R))}let j;if(typeof f!="boolean"&&f.$ref&&!(0,s.schemaHasRulesButRef)(f,this.RULES)){const C=(0,o.resolveUrl)(this.opts.uriResolver,h,f.$ref);j=w.call(this,g,C)}const{schemaId:k}=this.opts;if(j=j||new i({schema:f,schemaId:k,root:g,baseId:h}),j.schema!==j.root.schema)return j}return xo}const Yw="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",Xw="Meta-schema for $data reference (JSON AnySchema extension proposal)",Zw="object",ex=["$data"],tx={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},nx=!1,rx={$id:Yw,description:Xw,type:Zw,required:ex,properties:tx,additionalProperties:nx};var Sc={},wl={exports:{}},Kd,Fh;function ox(){return Fh||(Fh=1,Kd={HEX:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15}}),Kd}var Jd,Vh;function ax(){if(Vh)return Jd;Vh=1;const{HEX:e}=ox();function t(p){if(i(p,".")<3)return{host:p,isIPV4:!1};const y=p.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[v]=y;return v?{host:a(v,"."),isIPV4:!0}:{host:p,isIPV4:!1}}function r(p,y=!1){let v="",h=!0;for(const f of p){if(e[f]===void 0)return;f!=="0"&&h===!0&&(h=!1),h||(v+=f)}return y&&v.length===0&&(v="0"),v}function o(p){let y=0;const v={error:!1,address:"",zone:""},h=[],f=[];let g=!1,x=!1,j=!1;function k(){if(f.length){if(g===!1){const C=r(f);if(C!==void 0)h.push(C);else return v.error=!0,!1}f.length=0}return!0}for(let C=0;C<p.length;C++){const T=p[C];if(!(T==="["||T==="]"))if(T===":"){if(x===!0&&(j=!0),!k())break;if(y++,h.push(":"),y>7){v.error=!0;break}C-1>=0&&p[C-1]===":"&&(x=!0);continue}else if(T==="%"){if(!k())break;g=!0}else{f.push(T);continue}}return f.length&&(g?v.zone=f.join(""):j?h.push(f.join("")):h.push(r(f))),v.address=h.join(""),v}function s(p,y={}){if(i(p,":")<2)return{host:p,isIPV6:!1};const v=o(p);if(v.error)return{host:p,isIPV6:!1};{let h=v.address,f=v.address;return v.zone&&(h+="%"+v.zone,f+="%25"+v.zone),{host:h,escapedHost:f,isIPV6:!0}}}function a(p,y){let v="",h=!0;const f=p.length;for(let g=0;g<f;g++){const x=p[g];x==="0"&&h?(g+1<=f&&p[g+1]===y||g+1===f)&&(v+=x,h=!1):(x===y?h=!0:h=!1,v+=x)}return v}function i(p,y){let v=0;for(let h=0;h<p.length;h++)p[h]===y&&v++;return v}const l=/^\.\.?\//u,c=/^\/\.(?:\/|$)/u,d=/^\/\.\.(?:\/|$)/u,u=/^\/?(?:.|\n)*?(?=\/|$)/u;function m(p){const y=[];for(;p.length;)if(p.match(l))p=p.replace(l,"");else if(p.match(c))p=p.replace(c,"/");else if(p.match(d))p=p.replace(d,"/"),y.pop();else if(p==="."||p==="..")p="";else{const v=p.match(u);if(v){const h=v[0];p=p.slice(h.length),y.push(h)}else throw new Error("Unexpected dot segment condition")}return y.join("")}function b(p,y){const v=y!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=v(p.scheme)),p.userinfo!==void 0&&(p.userinfo=v(p.userinfo)),p.host!==void 0&&(p.host=v(p.host)),p.path!==void 0&&(p.path=v(p.path)),p.query!==void 0&&(p.query=v(p.query)),p.fragment!==void 0&&(p.fragment=v(p.fragment)),p}function w(p,y){const v=[];if(p.userinfo!==void 0&&(v.push(p.userinfo),v.push("@")),p.host!==void 0){let h=unescape(p.host);const f=t(h);if(f.isIPV4)h=f.host;else{const g=s(f.host,{});g.isIPV6===!0?h=`[${g.escapedHost}]`:h=p.host}v.push(h)}return(typeof p.port=="number"||typeof p.port=="string")&&(v.push(":"),v.push(String(p.port))),v.length?v.join(""):void 0}return Jd={recomposeAuthority:w,normalizeComponentEncoding:b,removeDotSegments:m,normalizeIPv4:t,normalizeIPv6:s,stringArrayToHexStripped:r},Jd}var Qd,Bh;function sx(){if(Bh)return Qd;Bh=1;const e=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function r(f){return typeof f.secure=="boolean"?f.secure:String(f.scheme).toLowerCase()==="wss"}function o(f){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f}function s(f){const g=String(f.scheme).toLowerCase()==="https";return(f.port===(g?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}function a(f){return f.secure=r(f),f.resourceName=(f.path||"/")+(f.query?"?"+f.query:""),f.path=void 0,f.query=void 0,f}function i(f){if((f.port===(r(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){const[g,x]=f.resourceName.split("?");f.path=g&&g!=="/"?g:void 0,f.query=x,f.resourceName=void 0}return f.fragment=void 0,f}function l(f,g){if(!f.path)return f.error="URN can not be parsed",f;const x=f.path.match(t);if(x){const j=g.scheme||f.scheme||"urn";f.nid=x[1].toLowerCase(),f.nss=x[2];const k=`${j}:${g.nid||f.nid}`,C=h[k];f.path=void 0,C&&(f=C.parse(f,g))}else f.error=f.error||"URN can not be parsed.";return f}function c(f,g){const x=g.scheme||f.scheme||"urn",j=f.nid.toLowerCase(),k=`${x}:${g.nid||j}`,C=h[k];C&&(f=C.serialize(f,g));const T=f,R=f.nss;return T.path=`${j||g.nid}:${R}`,g.skipEscape=!0,T}function d(f,g){const x=f;return x.uuid=x.nss,x.nss=void 0,!g.tolerant&&(!x.uuid||!e.test(x.uuid))&&(x.error=x.error||"UUID is not valid."),x}function u(f){const g=f;return g.nss=(f.uuid||"").toLowerCase(),g}const m={scheme:"http",domainHost:!0,parse:o,serialize:s},b={scheme:"https",domainHost:m.domainHost,parse:o,serialize:s},w={scheme:"ws",domainHost:!0,parse:a,serialize:i},p={scheme:"wss",domainHost:w.domainHost,parse:w.parse,serialize:w.serialize},h={http:m,https:b,ws:w,wss:p,urn:{scheme:"urn",parse:l,serialize:c,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:d,serialize:u,skipNormalize:!0}};return Qd=h,Qd}var Wh;function ix(){if(Wh)return wl.exports;Wh=1;const{normalizeIPv6:e,normalizeIPv4:t,removeDotSegments:r,recomposeAuthority:o,normalizeComponentEncoding:s}=ax(),a=sx();function i(v,h){return typeof v=="string"?v=u(p(v,h),h):typeof v=="object"&&(v=p(u(v,h),h)),v}function l(v,h,f){const g=Object.assign({scheme:"null"},f),x=c(p(v,g),p(h,g),g,!0);return u(x,{...g,skipEscape:!0})}function c(v,h,f,g){const x={};return g||(v=p(u(v,f),f),h=p(u(h,f),f)),f=f||{},!f.tolerant&&h.scheme?(x.scheme=h.scheme,x.userinfo=h.userinfo,x.host=h.host,x.port=h.port,x.path=r(h.path||""),x.query=h.query):(h.userinfo!==void 0||h.host!==void 0||h.port!==void 0?(x.userinfo=h.userinfo,x.host=h.host,x.port=h.port,x.path=r(h.path||""),x.query=h.query):(h.path?(h.path.charAt(0)==="/"?x.path=r(h.path):((v.userinfo!==void 0||v.host!==void 0||v.port!==void 0)&&!v.path?x.path="/"+h.path:v.path?x.path=v.path.slice(0,v.path.lastIndexOf("/")+1)+h.path:x.path=h.path,x.path=r(x.path)),x.query=h.query):(x.path=v.path,h.query!==void 0?x.query=h.query:x.query=v.query),x.userinfo=v.userinfo,x.host=v.host,x.port=v.port),x.scheme=v.scheme),x.fragment=h.fragment,x}function d(v,h,f){return typeof v=="string"?(v=unescape(v),v=u(s(p(v,f),!0),{...f,skipEscape:!0})):typeof v=="object"&&(v=u(s(v,!0),{...f,skipEscape:!0})),typeof h=="string"?(h=unescape(h),h=u(s(p(h,f),!0),{...f,skipEscape:!0})):typeof h=="object"&&(h=u(s(h,!0),{...f,skipEscape:!0})),v.toLowerCase()===h.toLowerCase()}function u(v,h){const f={host:v.host,scheme:v.scheme,userinfo:v.userinfo,port:v.port,path:v.path,query:v.query,nid:v.nid,nss:v.nss,uuid:v.uuid,fragment:v.fragment,reference:v.reference,resourceName:v.resourceName,secure:v.secure,error:""},g=Object.assign({},h),x=[],j=a[(g.scheme||f.scheme||"").toLowerCase()];j&&j.serialize&&j.serialize(f,g),f.path!==void 0&&(g.skipEscape?f.path=unescape(f.path):(f.path=escape(f.path),f.scheme!==void 0&&(f.path=f.path.split("%3A").join(":")))),g.reference!=="suffix"&&f.scheme&&(x.push(f.scheme),x.push(":"));const k=o(f,g);if(k!==void 0&&(g.reference!=="suffix"&&x.push("//"),x.push(k),f.path&&f.path.charAt(0)!=="/"&&x.push("/")),f.path!==void 0){let C=f.path;!g.absolutePath&&(!j||!j.absolutePath)&&(C=r(C)),k===void 0&&(C=C.replace(/^\/\//u,"/%2F")),x.push(C)}return f.query!==void 0&&(x.push("?"),x.push(f.query)),f.fragment!==void 0&&(x.push("#"),x.push(f.fragment)),x.join("")}const m=Array.from({length:127},(v,h)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(h)));function b(v){let h=0;for(let f=0,g=v.length;f<g;++f)if(h=v.charCodeAt(f),h>126||m[h])return!0;return!1}const w=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function p(v,h){const f=Object.assign({},h),g={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},x=v.indexOf("%")!==-1;let j=!1;f.reference==="suffix"&&(v=(f.scheme?f.scheme+":":"")+"//"+v);const k=v.match(w);if(k){if(g.scheme=k[1],g.userinfo=k[3],g.host=k[4],g.port=parseInt(k[5],10),g.path=k[6]||"",g.query=k[7],g.fragment=k[8],isNaN(g.port)&&(g.port=k[5]),g.host){const T=t(g.host);if(T.isIPV4===!1){const R=e(T.host,{isIPV4:!1});g.host=R.host.toLowerCase(),j=R.isIPV6}else g.host=T.host,j=!0}g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==g.reference&&(g.error=g.error||"URI is not a "+f.reference+" reference.");const C=a[(f.scheme||g.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!C||!C.unicodeSupport)&&g.host&&(f.domainHost||C&&C.domainHost)&&j===!1&&b(g.host))try{g.host=URL.domainToASCII(g.host.toLowerCase())}catch(T){g.error=g.error||"Host's domain name can not be converted to ASCII: "+T}(!C||C&&!C.skipNormalize)&&(x&&g.scheme!==void 0&&(g.scheme=unescape(g.scheme)),x&&g.userinfo!==void 0&&(g.userinfo=unescape(g.userinfo)),x&&g.host!==void 0&&(g.host=unescape(g.host)),g.path!==void 0&&g.path.length&&(g.path=escape(unescape(g.path))),g.fragment!==void 0&&g.fragment.length&&(g.fragment=encodeURI(decodeURIComponent(g.fragment)))),C&&C.parse&&C.parse(g,f)}else g.error=g.error||"URI can not be parsed.";return g}const y={SCHEMES:a,normalize:i,resolve:l,resolveComponents:c,equal:d,serialize:u,parse:p};return wl.exports=y,wl.exports.default=y,wl.exports.fastUri=y,wl.exports}var Hh;function lx(){if(Hh)return Sc;Hh=1,Object.defineProperty(Sc,"__esModule",{value:!0});const e=ix();return e.code='require("ajv/dist/runtime/uri").default',Sc.default=e,Sc}var Kh;function cx(){return Kh||(Kh=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=md();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var r=mn();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return r.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return r.CodeGen}});const o=kv(),s=gd(),a=Ig(),i=Sv(),l=mn(),c=pd(),d=Lu(),u=qn(),m=rx,b=lx(),w=(Q,L)=>new RegExp(Q,L);w.code="new RegExp";const p=["removeAdditional","useDefaults","coerceTypes"],y=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),v={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},h={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},f=200;function g(Q){var L,le,A,O,M,re,Oe,ae,J,pe,$,I,D,ce,G,V,rt,ot,Ce,lt,qe,He,it,Ve,Et;const P=Q.strict,N=(L=Q.code)===null||L===void 0?void 0:L.optimize,U=N===!0||N===void 0?1:N||0,Y=(A=(le=Q.code)===null||le===void 0?void 0:le.regExp)!==null&&A!==void 0?A:w,me=(O=Q.uriResolver)!==null&&O!==void 0?O:b.default;return{strictSchema:(re=(M=Q.strictSchema)!==null&&M!==void 0?M:P)!==null&&re!==void 0?re:!0,strictNumbers:(ae=(Oe=Q.strictNumbers)!==null&&Oe!==void 0?Oe:P)!==null&&ae!==void 0?ae:!0,strictTypes:(pe=(J=Q.strictTypes)!==null&&J!==void 0?J:P)!==null&&pe!==void 0?pe:"log",strictTuples:(I=($=Q.strictTuples)!==null&&$!==void 0?$:P)!==null&&I!==void 0?I:"log",strictRequired:(ce=(D=Q.strictRequired)!==null&&D!==void 0?D:P)!==null&&ce!==void 0?ce:!1,code:Q.code?{...Q.code,optimize:U,regExp:Y}:{optimize:U,regExp:Y},loopRequired:(G=Q.loopRequired)!==null&&G!==void 0?G:f,loopEnum:(V=Q.loopEnum)!==null&&V!==void 0?V:f,meta:(rt=Q.meta)!==null&&rt!==void 0?rt:!0,messages:(ot=Q.messages)!==null&&ot!==void 0?ot:!0,inlineRefs:(Ce=Q.inlineRefs)!==null&&Ce!==void 0?Ce:!0,schemaId:(lt=Q.schemaId)!==null&&lt!==void 0?lt:"$id",addUsedSchema:(qe=Q.addUsedSchema)!==null&&qe!==void 0?qe:!0,validateSchema:(He=Q.validateSchema)!==null&&He!==void 0?He:!0,validateFormats:(it=Q.validateFormats)!==null&&it!==void 0?it:!0,unicodeRegExp:(Ve=Q.unicodeRegExp)!==null&&Ve!==void 0?Ve:!0,int32range:(Et=Q.int32range)!==null&&Et!==void 0?Et:!0,uriResolver:me}}class x{constructor(L={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,L=this.opts={...L,...g(L)};const{es5:le,lines:A}=this.opts.code;this.scope=new l.ValueScope({scope:{},prefixes:y,es5:le,lines:A}),this.logger=F(L.logger);const O=L.validateFormats;L.validateFormats=!1,this.RULES=(0,a.getRules)(),j.call(this,v,L,"NOT SUPPORTED"),j.call(this,h,L,"DEPRECATED","warn"),this._metaOpts=ne.call(this),L.formats&&T.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),L.keywords&&R.call(this,L.keywords),typeof L.meta=="object"&&this.addMetaSchema(L.meta),C.call(this),L.validateFormats=O}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:L,meta:le,schemaId:A}=this.opts;let O=m;A==="id"&&(O={...m},O.id=O.$id,delete O.$id),le&&L&&this.addMetaSchema(O,O[A],!1)}defaultMeta(){const{meta:L,schemaId:le}=this.opts;return this.opts.defaultMeta=typeof L=="object"?L[le]||L:void 0}validate(L,le){let A;if(typeof L=="string"){if(A=this.getSchema(L),!A)throw new Error(`no schema with key or ref "${L}"`)}else A=this.compile(L);const O=A(le);return"$async"in A||(this.errors=A.errors),O}compile(L,le){const A=this._addSchema(L,le);return A.validate||this._compileSchemaEnv(A)}compileAsync(L,le){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:A}=this.opts;return O.call(this,L,le);async function O(pe,$){await M.call(this,pe.$schema);const I=this._addSchema(pe,$);return I.validate||re.call(this,I)}async function M(pe){pe&&!this.getSchema(pe)&&await O.call(this,{$ref:pe},!0)}async function re(pe){try{return this._compileSchemaEnv(pe)}catch($){if(!($ instanceof s.default))throw $;return Oe.call(this,$),await ae.call(this,$.missingSchema),re.call(this,pe)}}function Oe({missingSchema:pe,missingRef:$}){if(this.refs[pe])throw new Error(`AnySchema ${pe} is loaded but ${$} cannot be resolved`)}async function ae(pe){const $=await J.call(this,pe);this.refs[pe]||await M.call(this,$.$schema),this.refs[pe]||this.addSchema($,pe,le)}async function J(pe){const $=this._loading[pe];if($)return $;try{return await(this._loading[pe]=A(pe))}finally{delete this._loading[pe]}}}addSchema(L,le,A,O=this.opts.validateSchema){if(Array.isArray(L)){for(const re of L)this.addSchema(re,void 0,A,O);return this}let M;if(typeof L=="object"){const{schemaId:re}=this.opts;if(M=L[re],M!==void 0&&typeof M!="string")throw new Error(`schema ${re} must be string`)}return le=(0,c.normalizeId)(le||M),this._checkUnique(le),this.schemas[le]=this._addSchema(L,A,le,O,!0),this}addMetaSchema(L,le,A=this.opts.validateSchema){return this.addSchema(L,le,!0,A),this}validateSchema(L,le){if(typeof L=="boolean")return!0;let A;if(A=L.$schema,A!==void 0&&typeof A!="string")throw new Error("$schema must be a string");if(A=A||this.opts.defaultMeta||this.defaultMeta(),!A)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const O=this.validate(A,L);if(!O&&le){const M="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(M);else throw new Error(M)}return O}getSchema(L){let le;for(;typeof(le=k.call(this,L))=="string";)L=le;if(le===void 0){const{schemaId:A}=this.opts,O=new i.SchemaEnv({schema:{},schemaId:A});if(le=i.resolveSchema.call(this,O,L),!le)return;this.refs[L]=le}return le.validate||this._compileSchemaEnv(le)}removeSchema(L){if(L instanceof RegExp)return this._removeAllSchemas(this.schemas,L),this._removeAllSchemas(this.refs,L),this;switch(typeof L){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const le=k.call(this,L);return typeof le=="object"&&this._cache.delete(le.schema),delete this.schemas[L],delete this.refs[L],this}case"object":{const le=L;this._cache.delete(le);let A=L[this.opts.schemaId];return A&&(A=(0,c.normalizeId)(A),delete this.schemas[A],delete this.refs[A]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(L){for(const le of L)this.addKeyword(le);return this}addKeyword(L,le){let A;if(typeof L=="string")A=L,typeof le=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),le.keyword=A);else if(typeof L=="object"&&le===void 0){if(le=L,A=le.keyword,Array.isArray(A)&&!A.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(ye.call(this,A,le),!le)return(0,u.eachItem)(A,M=>W.call(this,M)),this;Re.call(this,le);const O={...le,type:(0,d.getJSONTypes)(le.type),schemaType:(0,d.getJSONTypes)(le.schemaType)};return(0,u.eachItem)(A,O.type.length===0?M=>W.call(this,M,O):M=>O.type.forEach(re=>W.call(this,M,O,re))),this}getKeyword(L){const le=this.RULES.all[L];return typeof le=="object"?le.definition:!!le}removeKeyword(L){const{RULES:le}=this;delete le.keywords[L],delete le.all[L];for(const A of le.rules){const O=A.rules.findIndex(M=>M.keyword===L);O>=0&&A.rules.splice(O,1)}return this}addFormat(L,le){return typeof le=="string"&&(le=new RegExp(le)),this.formats[L]=le,this}errorsText(L=this.errors,{separator:le=", ",dataVar:A="data"}={}){return!L||L.length===0?"No errors":L.map(O=>`${A}${O.instancePath} ${O.message}`).reduce((O,M)=>O+le+M)}$dataMetaSchema(L,le){const A=this.RULES.all;L=JSON.parse(JSON.stringify(L));for(const O of le){const M=O.split("/").slice(1);let re=L;for(const Oe of M)re=re[Oe];for(const Oe in A){const ae=A[Oe];if(typeof ae!="object")continue;const{$data:J}=ae.definition,pe=re[Oe];J&&pe&&(re[Oe]=ge(pe))}}return L}_removeAllSchemas(L,le){for(const A in L){const O=L[A];(!le||le.test(A))&&(typeof O=="string"?delete L[A]:O&&!O.meta&&(this._cache.delete(O.schema),delete L[A]))}}_addSchema(L,le,A,O=this.opts.validateSchema,M=this.opts.addUsedSchema){let re;const{schemaId:Oe}=this.opts;if(typeof L=="object")re=L[Oe];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof L!="boolean")throw new Error("schema must be object or boolean")}let ae=this._cache.get(L);if(ae!==void 0)return ae;A=(0,c.normalizeId)(re||A);const J=c.getSchemaRefs.call(this,L,A);return ae=new i.SchemaEnv({schema:L,schemaId:Oe,meta:le,baseId:A,localRefs:J}),this._cache.set(ae.schema,ae),M&&!A.startsWith("#")&&(A&&this._checkUnique(A),this.refs[A]=ae),O&&this.validateSchema(L,!0),ae}_checkUnique(L){if(this.schemas[L]||this.refs[L])throw new Error(`schema with key or id "${L}" already exists`)}_compileSchemaEnv(L){if(L.meta?this._compileMetaSchema(L):i.compileSchema.call(this,L),!L.validate)throw new Error("ajv implementation error");return L.validate}_compileMetaSchema(L){const le=this.opts;this.opts=this._metaOpts;try{i.compileSchema.call(this,L)}finally{this.opts=le}}}x.ValidationError=o.default,x.MissingRefError=s.default,e.default=x;function j(Q,L,le,A="error"){for(const O in Q){const M=O;M in L&&this.logger[A](`${le}: option ${O}. ${Q[M]}`)}}function k(Q){return Q=(0,c.normalizeId)(Q),this.schemas[Q]||this.refs[Q]}function C(){const Q=this.opts.schemas;if(Q)if(Array.isArray(Q))this.addSchema(Q);else for(const L in Q)this.addSchema(Q[L],L)}function T(){for(const Q in this.opts.formats){const L=this.opts.formats[Q];L&&this.addFormat(Q,L)}}function R(Q){if(Array.isArray(Q)){this.addVocabulary(Q);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const L in Q){const le=Q[L];le.keyword||(le.keyword=L),this.addKeyword(le)}}function ne(){const Q={...this.opts};for(const L of p)delete Q[L];return Q}const ee={log(){},warn(){},error(){}};function F(Q){if(Q===!1)return ee;if(Q===void 0)return console;if(Q.log&&Q.warn&&Q.error)return Q;throw new Error("logger must implement log, warn and error methods")}const te=/^[a-z_$][a-z0-9_$:-]*$/i;function ye(Q,L){const{RULES:le}=this;if((0,u.eachItem)(Q,A=>{if(le.keywords[A])throw new Error(`Keyword ${A} is already defined`);if(!te.test(A))throw new Error(`Keyword ${A} has invalid name`)}),!!L&&L.$data&&!("code"in L||"validate"in L))throw new Error('$data keyword must have "code" or "validate" function')}function W(Q,L,le){var A;const O=L?.post;if(le&&O)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:M}=this;let re=O?M.post:M.rules.find(({type:ae})=>ae===le);if(re||(re={type:le,rules:[]},M.rules.push(re)),M.keywords[Q]=!0,!L)return;const Oe={keyword:Q,definition:{...L,type:(0,d.getJSONTypes)(L.type),schemaType:(0,d.getJSONTypes)(L.schemaType)}};L.before?we.call(this,re,Oe,L.before):re.rules.push(Oe),M.all[Q]=Oe,(A=L.implements)===null||A===void 0||A.forEach(ae=>this.addKeyword(ae))}function we(Q,L,le){const A=Q.rules.findIndex(O=>O.keyword===le);A>=0?Q.rules.splice(A,0,L):(Q.rules.push(L),this.logger.warn(`rule ${le} is not defined`))}function Re(Q){let{metaSchema:L}=Q;L!==void 0&&(Q.$data&&this.opts.$data&&(L=ge(L)),Q.validateSchema=this.compile(L,!0))}const Ee={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function ge(Q){return{anyOf:[Q,Ee]}}})(Ud)),Ud}var _c={},Cc={},Ec={},Jh;function ux(){if(Jh)return Ec;Jh=1,Object.defineProperty(Ec,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return Ec.default=e,Ec}var Ga={},Qh;function dx(){if(Qh)return Ga;Qh=1,Object.defineProperty(Ga,"__esModule",{value:!0}),Ga.callRef=Ga.getValidate=void 0;const e=gd(),t=ra(),r=mn(),o=Ss(),s=Sv(),a=qn(),i={keyword:"$ref",schemaType:"string",code(d){const{gen:u,schema:m,it:b}=d,{baseId:w,schemaEnv:p,validateName:y,opts:v,self:h}=b,{root:f}=p;if((m==="#"||m==="#/")&&w===f.baseId)return x();const g=s.resolveRef.call(h,f,w,m);if(g===void 0)throw new e.default(b.opts.uriResolver,w,m);if(g instanceof s.SchemaEnv)return j(g);return k(g);function x(){if(p===f)return c(d,y,p,p.$async);const C=u.scopeValue("root",{ref:f});return c(d,(0,r._)`${C}.validate`,f,f.$async)}function j(C){const T=l(d,C);c(d,T,C,C.$async)}function k(C){const T=u.scopeValue("schema",v.code.source===!0?{ref:C,code:(0,r.stringify)(C)}:{ref:C}),R=u.name("valid"),ne=d.subschema({schema:C,dataTypes:[],schemaPath:r.nil,topSchemaRef:T,errSchemaPath:m},R);d.mergeEvaluated(ne),d.ok(R)}}};function l(d,u){const{gen:m}=d;return u.validate?m.scopeValue("validate",{ref:u.validate}):(0,r._)`${m.scopeValue("wrapper",{ref:u})}.validate`}Ga.getValidate=l;function c(d,u,m,b){const{gen:w,it:p}=d,{allErrors:y,schemaEnv:v,opts:h}=p,f=h.passContext?o.default.this:r.nil;b?g():x();function g(){if(!v.$async)throw new Error("async schema referenced by sync schema");const C=w.let("valid");w.try(()=>{w.code((0,r._)`await ${(0,t.callValidateCode)(d,u,f)}`),k(u),y||w.assign(C,!0)},T=>{w.if((0,r._)`!(${T} instanceof ${p.ValidationError})`,()=>w.throw(T)),j(T),y||w.assign(C,!1)}),d.ok(C)}function x(){d.result((0,t.callValidateCode)(d,u,f),()=>k(u),()=>j(u))}function j(C){const T=(0,r._)`${C}.errors`;w.assign(o.default.vErrors,(0,r._)`${o.default.vErrors} === null ? ${T} : ${o.default.vErrors}.concat(${T})`),w.assign(o.default.errors,(0,r._)`${o.default.vErrors}.length`)}function k(C){var T;if(!p.opts.unevaluated)return;const R=(T=m?.validate)===null||T===void 0?void 0:T.evaluated;if(p.props!==!0)if(R&&!R.dynamicProps)R.props!==void 0&&(p.props=a.mergeEvaluated.props(w,R.props,p.props));else{const ne=w.var("props",(0,r._)`${C}.evaluated.props`);p.props=a.mergeEvaluated.props(w,ne,p.props,r.Name)}if(p.items!==!0)if(R&&!R.dynamicItems)R.items!==void 0&&(p.items=a.mergeEvaluated.items(w,R.items,p.items));else{const ne=w.var("items",(0,r._)`${C}.evaluated.items`);p.items=a.mergeEvaluated.items(w,ne,p.items,r.Name)}}}return Ga.callRef=c,Ga.default=i,Ga}var Gh;function fx(){if(Gh)return Cc;Gh=1,Object.defineProperty(Cc,"__esModule",{value:!0});const e=ux(),t=dx(),r=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return Cc.default=r,Cc}var Oc={},$c={},Yh;function vx(){if(Yh)return $c;Yh=1,Object.defineProperty($c,"__esModule",{value:!0});const e=mn(),t=e.operators,r={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},o={message:({keyword:a,schemaCode:i})=>(0,e.str)`must be ${r[a].okStr} ${i}`,params:({keyword:a,schemaCode:i})=>(0,e._)`{comparison: ${r[a].okStr}, limit: ${i}}`},s={keyword:Object.keys(r),type:"number",schemaType:"number",$data:!0,error:o,code(a){const{keyword:i,data:l,schemaCode:c}=a;a.fail$data((0,e._)`${l} ${r[i].fail} ${c} || isNaN(${l})`)}};return $c.default=s,$c}var Pc={},Xh;function hx(){if(Xh)return Pc;Xh=1,Object.defineProperty(Pc,"__esModule",{value:!0});const e=mn(),r={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:o})=>(0,e.str)`must be multiple of ${o}`,params:({schemaCode:o})=>(0,e._)`{multipleOf: ${o}}`},code(o){const{gen:s,data:a,schemaCode:i,it:l}=o,c=l.opts.multipleOfPrecision,d=s.let("res"),u=c?(0,e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}`:(0,e._)`${d} !== parseInt(${d})`;o.fail$data((0,e._)`(${i} === 0 || (${d} = ${a}/${i}, ${u}))`)}};return Pc.default=r,Pc}var Mc={},Rc={},Zh;function px(){if(Zh)return Rc;Zh=1,Object.defineProperty(Rc,"__esModule",{value:!0});function e(t){const r=t.length;let o=0,s=0,a;for(;s<r;)o++,a=t.charCodeAt(s++),a>=55296&&a<=56319&&s<r&&(a=t.charCodeAt(s),(a&64512)===56320&&s++);return o}return Rc.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',Rc}var ep;function mx(){if(ep)return Mc;ep=1,Object.defineProperty(Mc,"__esModule",{value:!0});const e=mn(),t=qn(),r=px(),s={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:i}){const l=a==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${l} than ${i} characters`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:i,data:l,schemaCode:c,it:d}=a,u=i==="maxLength"?e.operators.GT:e.operators.LT,m=d.opts.unicode===!1?(0,e._)`${l}.length`:(0,e._)`${(0,t.useFunc)(a.gen,r.default)}(${l})`;a.fail$data((0,e._)`${m} ${u} ${c}`)}};return Mc.default=s,Mc}var Nc={},tp;function gx(){if(tp)return Nc;tp=1,Object.defineProperty(Nc,"__esModule",{value:!0});const e=ra(),t=mn(),o={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,t.str)`must match pattern "${s}"`,params:({schemaCode:s})=>(0,t._)`{pattern: ${s}}`},code(s){const{data:a,$data:i,schema:l,schemaCode:c,it:d}=s,u=d.opts.unicodeRegExp?"u":"",m=i?(0,t._)`(new RegExp(${c}, ${u}))`:(0,e.usePattern)(s,l);s.fail$data((0,t._)`!${m}.test(${a})`)}};return Nc.default=o,Nc}var Tc={},np;function bx(){if(np)return Tc;np=1,Object.defineProperty(Tc,"__esModule",{value:!0});const e=mn(),r={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:o,schemaCode:s}){const a=o==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${s} properties`},params:({schemaCode:o})=>(0,e._)`{limit: ${o}}`},code(o){const{keyword:s,data:a,schemaCode:i}=o,l=s==="maxProperties"?e.operators.GT:e.operators.LT;o.fail$data((0,e._)`Object.keys(${a}).length ${l} ${i}`)}};return Tc.default=r,Tc}var Ac={},rp;function yx(){if(rp)return Ac;rp=1,Object.defineProperty(Ac,"__esModule",{value:!0});const e=ra(),t=mn(),r=qn(),s={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:a}})=>(0,t.str)`must have required property '${a}'`,params:({params:{missingProperty:a}})=>(0,t._)`{missingProperty: ${a}}`},code(a){const{gen:i,schema:l,schemaCode:c,data:d,$data:u,it:m}=a,{opts:b}=m;if(!u&&l.length===0)return;const w=l.length>=b.loopRequired;if(m.allErrors?p():y(),b.strictRequired){const f=a.parentSchema.properties,{definedProperties:g}=a.it;for(const x of l)if(f?.[x]===void 0&&!g.has(x)){const j=m.schemaEnv.baseId+m.errSchemaPath,k=`required property "${x}" is not defined at "${j}" (strictRequired)`;(0,r.checkStrictMode)(m,k,m.opts.strictRequired)}}function p(){if(w||u)a.block$data(t.nil,v);else for(const f of l)(0,e.checkReportMissingProp)(a,f)}function y(){const f=i.let("missing");if(w||u){const g=i.let("valid",!0);a.block$data(g,()=>h(f,g)),a.ok(g)}else i.if((0,e.checkMissingProp)(a,l,f)),(0,e.reportMissingProp)(a,f),i.else()}function v(){i.forOf("prop",c,f=>{a.setParams({missingProperty:f}),i.if((0,e.noPropertyInData)(i,d,f,b.ownProperties),()=>a.error())})}function h(f,g){a.setParams({missingProperty:f}),i.forOf(f,c,()=>{i.assign(g,(0,e.propertyInData)(i,d,f,b.ownProperties)),i.if((0,t.not)(g),()=>{a.error(),i.break()})},t.nil)}}};return Ac.default=s,Ac}var qc={},op;function jx(){if(op)return qc;op=1,Object.defineProperty(qc,"__esModule",{value:!0});const e=mn(),r={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:o,schemaCode:s}){const a=o==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${s} items`},params:({schemaCode:o})=>(0,e._)`{limit: ${o}}`},code(o){const{keyword:s,data:a,schemaCode:i}=o,l=s==="maxItems"?e.operators.GT:e.operators.LT;o.fail$data((0,e._)`${a}.length ${l} ${i}`)}};return qc.default=r,qc}var zc={},Ic={},ap;function _v(){if(ap)return Ic;ap=1,Object.defineProperty(Ic,"__esModule",{value:!0});const e=ug();return e.code='require("ajv/dist/runtime/equal").default',Ic.default=e,Ic}var sp;function wx(){if(sp)return zc;sp=1,Object.defineProperty(zc,"__esModule",{value:!0});const e=Lu(),t=mn(),r=qn(),o=_v(),a={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i,j:l}})=>(0,t.str)`must NOT have duplicate items (items ## ${l} and ${i} are identical)`,params:({params:{i,j:l}})=>(0,t._)`{i: ${i}, j: ${l}}`},code(i){const{gen:l,data:c,$data:d,schema:u,parentSchema:m,schemaCode:b,it:w}=i;if(!d&&!u)return;const p=l.let("valid"),y=m.items?(0,e.getSchemaTypes)(m.items):[];i.block$data(p,v,(0,t._)`${b} === false`),i.ok(p);function v(){const x=l.let("i",(0,t._)`${c}.length`),j=l.let("j");i.setParams({i:x,j}),l.assign(p,!0),l.if((0,t._)`${x} > 1`,()=>(h()?f:g)(x,j))}function h(){return y.length>0&&!y.some(x=>x==="object"||x==="array")}function f(x,j){const k=l.name("item"),C=(0,e.checkDataTypes)(y,k,w.opts.strictNumbers,e.DataType.Wrong),T=l.const("indices",(0,t._)`{}`);l.for((0,t._)`;${x}--;`,()=>{l.let(k,(0,t._)`${c}[${x}]`),l.if(C,(0,t._)`continue`),y.length>1&&l.if((0,t._)`typeof ${k} == "string"`,(0,t._)`${k} += "_"`),l.if((0,t._)`typeof ${T}[${k}] == "number"`,()=>{l.assign(j,(0,t._)`${T}[${k}]`),i.error(),l.assign(p,!1).break()}).code((0,t._)`${T}[${k}] = ${x}`)})}function g(x,j){const k=(0,r.useFunc)(l,o.default),C=l.name("outer");l.label(C).for((0,t._)`;${x}--;`,()=>l.for((0,t._)`${j} = ${x}; ${j}--;`,()=>l.if((0,t._)`${k}(${c}[${x}], ${c}[${j}])`,()=>{i.error(),l.assign(p,!1).break(C)})))}}};return zc.default=a,zc}var Dc={},ip;function xx(){if(ip)return Dc;ip=1,Object.defineProperty(Dc,"__esModule",{value:!0});const e=mn(),t=qn(),r=_v(),s={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:a})=>(0,e._)`{allowedValue: ${a}}`},code(a){const{gen:i,data:l,$data:c,schemaCode:d,schema:u}=a;c||u&&typeof u=="object"?a.fail$data((0,e._)`!${(0,t.useFunc)(i,r.default)}(${l}, ${d})`):a.fail((0,e._)`${u} !== ${l}`)}};return Dc.default=s,Dc}var Lc={},lp;function kx(){if(lp)return Lc;lp=1,Object.defineProperty(Lc,"__esModule",{value:!0});const e=mn(),t=qn(),r=_v(),s={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:a})=>(0,e._)`{allowedValues: ${a}}`},code(a){const{gen:i,data:l,$data:c,schema:d,schemaCode:u,it:m}=a;if(!c&&d.length===0)throw new Error("enum must have non-empty array");const b=d.length>=m.opts.loopEnum;let w;const p=()=>w??(w=(0,t.useFunc)(i,r.default));let y;if(b||c)y=i.let("valid"),a.block$data(y,v);else{if(!Array.isArray(d))throw new Error("ajv implementation error");const f=i.const("vSchema",u);y=(0,e.or)(...d.map((g,x)=>h(f,x)))}a.pass(y);function v(){i.assign(y,!1),i.forOf("v",u,f=>i.if((0,e._)`${p()}(${l}, ${f})`,()=>i.assign(y,!0).break()))}function h(f,g){const x=d[g];return typeof x=="object"&&x!==null?(0,e._)`${p()}(${l}, ${f}[${g}])`:(0,e._)`${l} === ${x}`}}};return Lc.default=s,Lc}var cp;function Sx(){if(cp)return Oc;cp=1,Object.defineProperty(Oc,"__esModule",{value:!0});const e=vx(),t=hx(),r=mx(),o=gx(),s=bx(),a=yx(),i=jx(),l=wx(),c=xx(),d=kx(),u=[e.default,t.default,r.default,o.default,s.default,a.default,i.default,l.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},c.default,d.default];return Oc.default=u,Oc}var Uc={},fi={},up;function Lg(){if(up)return fi;up=1,Object.defineProperty(fi,"__esModule",{value:!0}),fi.validateAdditionalItems=void 0;const e=mn(),t=qn(),o={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:a}})=>(0,e.str)`must NOT have more than ${a} items`,params:({params:{len:a}})=>(0,e._)`{limit: ${a}}`},code(a){const{parentSchema:i,it:l}=a,{items:c}=i;if(!Array.isArray(c)){(0,t.checkStrictMode)(l,'"additionalItems" is ignored when "items" is not an array of schemas');return}s(a,c)}};function s(a,i){const{gen:l,schema:c,data:d,keyword:u,it:m}=a;m.items=!0;const b=l.const("len",(0,e._)`${d}.length`);if(c===!1)a.setParams({len:i.length}),a.pass((0,e._)`${b} <= ${i.length}`);else if(typeof c=="object"&&!(0,t.alwaysValidSchema)(m,c)){const p=l.var("valid",(0,e._)`${b} <= ${i.length}`);l.if((0,e.not)(p),()=>w(p)),a.ok(p)}function w(p){l.forRange("i",i.length,b,y=>{a.subschema({keyword:u,dataProp:y,dataPropType:t.Type.Num},p),m.allErrors||l.if((0,e.not)(p),()=>l.break())})}}return fi.validateAdditionalItems=s,fi.default=o,fi}var Fc={},vi={},dp;function Ug(){if(dp)return vi;dp=1,Object.defineProperty(vi,"__esModule",{value:!0}),vi.validateTuple=void 0;const e=mn(),t=qn(),r=ra(),o={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(a){const{schema:i,it:l}=a;if(Array.isArray(i))return s(a,"additionalItems",i);l.items=!0,!(0,t.alwaysValidSchema)(l,i)&&a.ok((0,r.validateArray)(a))}};function s(a,i,l=a.schema){const{gen:c,parentSchema:d,data:u,keyword:m,it:b}=a;y(d),b.opts.unevaluated&&l.length&&b.items!==!0&&(b.items=t.mergeEvaluated.items(c,l.length,b.items));const w=c.name("valid"),p=c.const("len",(0,e._)`${u}.length`);l.forEach((v,h)=>{(0,t.alwaysValidSchema)(b,v)||(c.if((0,e._)`${p} > ${h}`,()=>a.subschema({keyword:m,schemaProp:h,dataProp:h},w)),a.ok(w))});function y(v){const{opts:h,errSchemaPath:f}=b,g=l.length,x=g===v.minItems&&(g===v.maxItems||v[i]===!1);if(h.strictTuples&&!x){const j=`"${m}" is ${g}-tuple, but minItems or maxItems/${i} are not specified or different at path "${f}"`;(0,t.checkStrictMode)(b,j,h.strictTuples)}}}return vi.validateTuple=s,vi.default=o,vi}var fp;function _x(){if(fp)return Fc;fp=1,Object.defineProperty(Fc,"__esModule",{value:!0});const e=Ug(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:r=>(0,e.validateTuple)(r,"items")};return Fc.default=t,Fc}var Vc={},vp;function Cx(){if(vp)return Vc;vp=1,Object.defineProperty(Vc,"__esModule",{value:!0});const e=mn(),t=qn(),r=ra(),o=Lg(),a={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:i}})=>(0,e.str)`must NOT have more than ${i} items`,params:({params:{len:i}})=>(0,e._)`{limit: ${i}}`},code(i){const{schema:l,parentSchema:c,it:d}=i,{prefixItems:u}=c;d.items=!0,!(0,t.alwaysValidSchema)(d,l)&&(u?(0,o.validateAdditionalItems)(i,u):i.ok((0,r.validateArray)(i)))}};return Vc.default=a,Vc}var Bc={},hp;function Ex(){if(hp)return Bc;hp=1,Object.defineProperty(Bc,"__esModule",{value:!0});const e=mn(),t=qn(),o={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:s,max:a}})=>a===void 0?(0,e.str)`must contain at least ${s} valid item(s)`:(0,e.str)`must contain at least ${s} and no more than ${a} valid item(s)`,params:({params:{min:s,max:a}})=>a===void 0?(0,e._)`{minContains: ${s}}`:(0,e._)`{minContains: ${s}, maxContains: ${a}}`},code(s){const{gen:a,schema:i,parentSchema:l,data:c,it:d}=s;let u,m;const{minContains:b,maxContains:w}=l;d.opts.next?(u=b===void 0?1:b,m=w):u=1;const p=a.const("len",(0,e._)`${c}.length`);if(s.setParams({min:u,max:m}),m===void 0&&u===0){(0,t.checkStrictMode)(d,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(m!==void 0&&u>m){(0,t.checkStrictMode)(d,'"minContains" > "maxContains" is always invalid'),s.fail();return}if((0,t.alwaysValidSchema)(d,i)){let g=(0,e._)`${p} >= ${u}`;m!==void 0&&(g=(0,e._)`${g} && ${p} <= ${m}`),s.pass(g);return}d.items=!0;const y=a.name("valid");m===void 0&&u===1?h(y,()=>a.if(y,()=>a.break())):u===0?(a.let(y,!0),m!==void 0&&a.if((0,e._)`${c}.length > 0`,v)):(a.let(y,!1),v()),s.result(y,()=>s.reset());function v(){const g=a.name("_valid"),x=a.let("count",0);h(g,()=>a.if(g,()=>f(x)))}function h(g,x){a.forRange("i",0,p,j=>{s.subschema({keyword:"contains",dataProp:j,dataPropType:t.Type.Num,compositeRule:!0},g),x()})}function f(g){a.code((0,e._)`${g}++`),m===void 0?a.if((0,e._)`${g} >= ${u}`,()=>a.assign(y,!0).break()):(a.if((0,e._)`${g} > ${m}`,()=>a.assign(y,!1).break()),u===1?a.assign(y,!0):a.if((0,e._)`${g} >= ${u}`,()=>a.assign(y,!0)))}}};return Bc.default=o,Bc}var Gd={},pp;function Ox(){return pp||(pp=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=mn(),r=qn(),o=ra();e.error={message:({params:{property:c,depsCount:d,deps:u}})=>{const m=d===1?"property":"properties";return(0,t.str)`must have ${m} ${u} when property ${c} is present`},params:({params:{property:c,depsCount:d,deps:u,missingProperty:m}})=>(0,t._)`{property: ${c},
    missingProperty: ${m},
    depsCount: ${d},
    deps: ${u}}`};const s={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(c){const[d,u]=a(c);i(c,d),l(c,u)}};function a({schema:c}){const d={},u={};for(const m in c){if(m==="__proto__")continue;const b=Array.isArray(c[m])?d:u;b[m]=c[m]}return[d,u]}function i(c,d=c.schema){const{gen:u,data:m,it:b}=c;if(Object.keys(d).length===0)return;const w=u.let("missing");for(const p in d){const y=d[p];if(y.length===0)continue;const v=(0,o.propertyInData)(u,m,p,b.opts.ownProperties);c.setParams({property:p,depsCount:y.length,deps:y.join(", ")}),b.allErrors?u.if(v,()=>{for(const h of y)(0,o.checkReportMissingProp)(c,h)}):(u.if((0,t._)`${v} && (${(0,o.checkMissingProp)(c,y,w)})`),(0,o.reportMissingProp)(c,w),u.else())}}e.validatePropertyDeps=i;function l(c,d=c.schema){const{gen:u,data:m,keyword:b,it:w}=c,p=u.name("valid");for(const y in d)(0,r.alwaysValidSchema)(w,d[y])||(u.if((0,o.propertyInData)(u,m,y,w.opts.ownProperties),()=>{const v=c.subschema({keyword:b,schemaProp:y},p);c.mergeValidEvaluated(v,p)},()=>u.var(p,!0)),c.ok(p))}e.validateSchemaDeps=l,e.default=s})(Gd)),Gd}var Wc={},mp;function $x(){if(mp)return Wc;mp=1,Object.defineProperty(Wc,"__esModule",{value:!0});const e=mn(),t=qn(),o={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:s})=>(0,e._)`{propertyName: ${s.propertyName}}`},code(s){const{gen:a,schema:i,data:l,it:c}=s;if((0,t.alwaysValidSchema)(c,i))return;const d=a.name("valid");a.forIn("key",l,u=>{s.setParams({propertyName:u}),s.subschema({keyword:"propertyNames",data:u,dataTypes:["string"],propertyName:u,compositeRule:!0},d),a.if((0,e.not)(d),()=>{s.error(!0),c.allErrors||a.break()})}),s.ok(d)}};return Wc.default=o,Wc}var Hc={},gp;function Fg(){if(gp)return Hc;gp=1,Object.defineProperty(Hc,"__esModule",{value:!0});const e=ra(),t=mn(),r=Ss(),o=qn(),a={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:i})=>(0,t._)`{additionalProperty: ${i.additionalProperty}}`},code(i){const{gen:l,schema:c,parentSchema:d,data:u,errsCount:m,it:b}=i;if(!m)throw new Error("ajv implementation error");const{allErrors:w,opts:p}=b;if(b.props=!0,p.removeAdditional!=="all"&&(0,o.alwaysValidSchema)(b,c))return;const y=(0,e.allSchemaProperties)(d.properties),v=(0,e.allSchemaProperties)(d.patternProperties);h(),i.ok((0,t._)`${m} === ${r.default.errors}`);function h(){l.forIn("key",u,k=>{!y.length&&!v.length?x(k):l.if(f(k),()=>x(k))})}function f(k){let C;if(y.length>8){const T=(0,o.schemaRefOrVal)(b,d.properties,"properties");C=(0,e.isOwnProperty)(l,T,k)}else y.length?C=(0,t.or)(...y.map(T=>(0,t._)`${k} === ${T}`)):C=t.nil;return v.length&&(C=(0,t.or)(C,...v.map(T=>(0,t._)`${(0,e.usePattern)(i,T)}.test(${k})`))),(0,t.not)(C)}function g(k){l.code((0,t._)`delete ${u}[${k}]`)}function x(k){if(p.removeAdditional==="all"||p.removeAdditional&&c===!1){g(k);return}if(c===!1){i.setParams({additionalProperty:k}),i.error(),w||l.break();return}if(typeof c=="object"&&!(0,o.alwaysValidSchema)(b,c)){const C=l.name("valid");p.removeAdditional==="failing"?(j(k,C,!1),l.if((0,t.not)(C),()=>{i.reset(),g(k)})):(j(k,C),w||l.if((0,t.not)(C),()=>l.break()))}}function j(k,C,T){const R={keyword:"additionalProperties",dataProp:k,dataPropType:o.Type.Str};T===!1&&Object.assign(R,{compositeRule:!0,createErrors:!1,allErrors:!1}),i.subschema(R,C)}}};return Hc.default=a,Hc}var Kc={},bp;function Px(){if(bp)return Kc;bp=1,Object.defineProperty(Kc,"__esModule",{value:!0});const e=md(),t=ra(),r=qn(),o=Fg(),s={keyword:"properties",type:"object",schemaType:"object",code(a){const{gen:i,schema:l,parentSchema:c,data:d,it:u}=a;u.opts.removeAdditional==="all"&&c.additionalProperties===void 0&&o.default.code(new e.KeywordCxt(u,o.default,"additionalProperties"));const m=(0,t.allSchemaProperties)(l);for(const v of m)u.definedProperties.add(v);u.opts.unevaluated&&m.length&&u.props!==!0&&(u.props=r.mergeEvaluated.props(i,(0,r.toHash)(m),u.props));const b=m.filter(v=>!(0,r.alwaysValidSchema)(u,l[v]));if(b.length===0)return;const w=i.name("valid");for(const v of b)p(v)?y(v):(i.if((0,t.propertyInData)(i,d,v,u.opts.ownProperties)),y(v),u.allErrors||i.else().var(w,!0),i.endIf()),a.it.definedProperties.add(v),a.ok(w);function p(v){return u.opts.useDefaults&&!u.compositeRule&&l[v].default!==void 0}function y(v){a.subschema({keyword:"properties",schemaProp:v,dataProp:v},w)}}};return Kc.default=s,Kc}var Jc={},yp;function Mx(){if(yp)return Jc;yp=1,Object.defineProperty(Jc,"__esModule",{value:!0});const e=ra(),t=mn(),r=qn(),o=qn(),s={keyword:"patternProperties",type:"object",schemaType:"object",code(a){const{gen:i,schema:l,data:c,parentSchema:d,it:u}=a,{opts:m}=u,b=(0,e.allSchemaProperties)(l),w=b.filter(x=>(0,r.alwaysValidSchema)(u,l[x]));if(b.length===0||w.length===b.length&&(!u.opts.unevaluated||u.props===!0))return;const p=m.strictSchema&&!m.allowMatchingProperties&&d.properties,y=i.name("valid");u.props!==!0&&!(u.props instanceof t.Name)&&(u.props=(0,o.evaluatedPropsToName)(i,u.props));const{props:v}=u;h();function h(){for(const x of b)p&&f(x),u.allErrors?g(x):(i.var(y,!0),g(x),i.if(y))}function f(x){for(const j in p)new RegExp(x).test(j)&&(0,r.checkStrictMode)(u,`property ${j} matches pattern ${x} (use allowMatchingProperties)`)}function g(x){i.forIn("key",c,j=>{i.if((0,t._)`${(0,e.usePattern)(a,x)}.test(${j})`,()=>{const k=w.includes(x);k||a.subschema({keyword:"patternProperties",schemaProp:x,dataProp:j,dataPropType:o.Type.Str},y),u.opts.unevaluated&&v!==!0?i.assign((0,t._)`${v}[${j}]`,!0):!k&&!u.allErrors&&i.if((0,t.not)(y),()=>i.break())})})}}};return Jc.default=s,Jc}var Qc={},jp;function Rx(){if(jp)return Qc;jp=1,Object.defineProperty(Qc,"__esModule",{value:!0});const e=qn(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(r){const{gen:o,schema:s,it:a}=r;if((0,e.alwaysValidSchema)(a,s)){r.fail();return}const i=o.name("valid");r.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},i),r.failResult(i,()=>r.reset(),()=>r.error())},error:{message:"must NOT be valid"}};return Qc.default=t,Qc}var Gc={},wp;function Nx(){if(wp)return Gc;wp=1,Object.defineProperty(Gc,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:ra().validateUnion,error:{message:"must match a schema in anyOf"}};return Gc.default=t,Gc}var Yc={},xp;function Tx(){if(xp)return Yc;xp=1,Object.defineProperty(Yc,"__esModule",{value:!0});const e=mn(),t=qn(),o={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:s})=>(0,e._)`{passingSchemas: ${s.passing}}`},code(s){const{gen:a,schema:i,parentSchema:l,it:c}=s;if(!Array.isArray(i))throw new Error("ajv implementation error");if(c.opts.discriminator&&l.discriminator)return;const d=i,u=a.let("valid",!1),m=a.let("passing",null),b=a.name("_valid");s.setParams({passing:m}),a.block(w),s.result(u,()=>s.reset(),()=>s.error(!0));function w(){d.forEach((p,y)=>{let v;(0,t.alwaysValidSchema)(c,p)?a.var(b,!0):v=s.subschema({keyword:"oneOf",schemaProp:y,compositeRule:!0},b),y>0&&a.if((0,e._)`${b} && ${u}`).assign(u,!1).assign(m,(0,e._)`[${m}, ${y}]`).else(),a.if(b,()=>{a.assign(u,!0),a.assign(m,y),v&&s.mergeEvaluated(v,e.Name)})})}}};return Yc.default=o,Yc}var Xc={},kp;function Ax(){if(kp)return Xc;kp=1,Object.defineProperty(Xc,"__esModule",{value:!0});const e=qn(),t={keyword:"allOf",schemaType:"array",code(r){const{gen:o,schema:s,it:a}=r;if(!Array.isArray(s))throw new Error("ajv implementation error");const i=o.name("valid");s.forEach((l,c)=>{if((0,e.alwaysValidSchema)(a,l))return;const d=r.subschema({keyword:"allOf",schemaProp:c},i);r.ok(i),r.mergeEvaluated(d)})}};return Xc.default=t,Xc}var Zc={},Sp;function qx(){if(Sp)return Zc;Sp=1,Object.defineProperty(Zc,"__esModule",{value:!0});const e=mn(),t=qn(),o={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:a})=>(0,e.str)`must match "${a.ifClause}" schema`,params:({params:a})=>(0,e._)`{failingKeyword: ${a.ifClause}}`},code(a){const{gen:i,parentSchema:l,it:c}=a;l.then===void 0&&l.else===void 0&&(0,t.checkStrictMode)(c,'"if" without "then" and "else" is ignored');const d=s(c,"then"),u=s(c,"else");if(!d&&!u)return;const m=i.let("valid",!0),b=i.name("_valid");if(w(),a.reset(),d&&u){const y=i.let("ifClause");a.setParams({ifClause:y}),i.if(b,p("then",y),p("else",y))}else d?i.if(b,p("then")):i.if((0,e.not)(b),p("else"));a.pass(m,()=>a.error(!0));function w(){const y=a.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},b);a.mergeEvaluated(y)}function p(y,v){return()=>{const h=a.subschema({keyword:y},b);i.assign(m,b),a.mergeValidEvaluated(h,m),v?i.assign(v,(0,e._)`${y}`):a.setParams({ifClause:y})}}}};function s(a,i){const l=a.schema[i];return l!==void 0&&!(0,t.alwaysValidSchema)(a,l)}return Zc.default=o,Zc}var eu={},_p;function zx(){if(_p)return eu;_p=1,Object.defineProperty(eu,"__esModule",{value:!0});const e=qn(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:r,parentSchema:o,it:s}){o.if===void 0&&(0,e.checkStrictMode)(s,`"${r}" without "if" is ignored`)}};return eu.default=t,eu}var Cp;function Ix(){if(Cp)return Uc;Cp=1,Object.defineProperty(Uc,"__esModule",{value:!0});const e=Lg(),t=_x(),r=Ug(),o=Cx(),s=Ex(),a=Ox(),i=$x(),l=Fg(),c=Px(),d=Mx(),u=Rx(),m=Nx(),b=Tx(),w=Ax(),p=qx(),y=zx();function v(h=!1){const f=[u.default,m.default,b.default,w.default,p.default,y.default,i.default,l.default,a.default,c.default,d.default];return h?f.push(t.default,o.default):f.push(e.default,r.default),f.push(s.default),f}return Uc.default=v,Uc}var tu={},nu={},Ep;function Dx(){if(Ep)return nu;Ep=1,Object.defineProperty(nu,"__esModule",{value:!0});const e=mn(),r={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:o})=>(0,e.str)`must match format "${o}"`,params:({schemaCode:o})=>(0,e._)`{format: ${o}}`},code(o,s){const{gen:a,data:i,$data:l,schema:c,schemaCode:d,it:u}=o,{opts:m,errSchemaPath:b,schemaEnv:w,self:p}=u;if(!m.validateFormats)return;l?y():v();function y(){const h=a.scopeValue("formats",{ref:p.formats,code:m.code.formats}),f=a.const("fDef",(0,e._)`${h}[${d}]`),g=a.let("fType"),x=a.let("format");a.if((0,e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`,()=>a.assign(g,(0,e._)`${f}.type || "string"`).assign(x,(0,e._)`${f}.validate`),()=>a.assign(g,(0,e._)`"string"`).assign(x,f)),o.fail$data((0,e.or)(j(),k()));function j(){return m.strictSchema===!1?e.nil:(0,e._)`${d} && !${x}`}function k(){const C=w.$async?(0,e._)`(${f}.async ? await ${x}(${i}) : ${x}(${i}))`:(0,e._)`${x}(${i})`,T=(0,e._)`(typeof ${x} == "function" ? ${C} : ${x}.test(${i}))`;return(0,e._)`${x} && ${x} !== true && ${g} === ${s} && !${T}`}}function v(){const h=p.formats[c];if(!h){j();return}if(h===!0)return;const[f,g,x]=k(h);f===s&&o.pass(C());function j(){if(m.strictSchema===!1){p.logger.warn(T());return}throw new Error(T());function T(){return`unknown format "${c}" ignored in schema at path "${b}"`}}function k(T){const R=T instanceof RegExp?(0,e.regexpCode)(T):m.code.formats?(0,e._)`${m.code.formats}${(0,e.getProperty)(c)}`:void 0,ne=a.scopeValue("formats",{key:c,ref:T,code:R});return typeof T=="object"&&!(T instanceof RegExp)?[T.type||"string",T.validate,(0,e._)`${ne}.validate`]:["string",T,ne]}function C(){if(typeof h=="object"&&!(h instanceof RegExp)&&h.async){if(!w.$async)throw new Error("async format in sync schema");return(0,e._)`await ${x}(${i})`}return typeof g=="function"?(0,e._)`${x}(${i})`:(0,e._)`${x}.test(${i})`}}}};return nu.default=r,nu}var Op;function Lx(){if(Op)return tu;Op=1,Object.defineProperty(tu,"__esModule",{value:!0});const t=[Dx().default];return tu.default=t,tu}var As={},$p;function Ux(){return $p||($p=1,Object.defineProperty(As,"__esModule",{value:!0}),As.contentVocabulary=As.metadataVocabulary=void 0,As.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],As.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),As}var Pp;function Fx(){if(Pp)return _c;Pp=1,Object.defineProperty(_c,"__esModule",{value:!0});const e=fx(),t=Sx(),r=Ix(),o=Lx(),s=Ux(),a=[e.default,t.default,(0,r.default)(),o.default,s.metadataVocabulary,s.contentVocabulary];return _c.default=a,_c}var ru={},xl={},Mp;function Vx(){if(Mp)return xl;Mp=1,Object.defineProperty(xl,"__esModule",{value:!0}),xl.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(xl.DiscrError=e={})),xl}var Rp;function Bx(){if(Rp)return ru;Rp=1,Object.defineProperty(ru,"__esModule",{value:!0});const e=mn(),t=Vx(),r=Sv(),o=gd(),s=qn(),i={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:l,tagName:c}})=>l===t.DiscrError.Tag?`tag "${c}" must be string`:`value of tag "${c}" must be in oneOf`,params:({params:{discrError:l,tag:c,tagName:d}})=>(0,e._)`{error: ${l}, tag: ${d}, tagValue: ${c}}`},code(l){const{gen:c,data:d,schema:u,parentSchema:m,it:b}=l,{oneOf:w}=m;if(!b.opts.discriminator)throw new Error("discriminator: requires discriminator option");const p=u.propertyName;if(typeof p!="string")throw new Error("discriminator: requires propertyName");if(u.mapping)throw new Error("discriminator: mapping is not supported");if(!w)throw new Error("discriminator: requires oneOf keyword");const y=c.let("valid",!1),v=c.const("tag",(0,e._)`${d}${(0,e.getProperty)(p)}`);c.if((0,e._)`typeof ${v} == "string"`,()=>h(),()=>l.error(!1,{discrError:t.DiscrError.Tag,tag:v,tagName:p})),l.ok(y);function h(){const x=g();c.if(!1);for(const j in x)c.elseIf((0,e._)`${v} === ${j}`),c.assign(y,f(x[j]));c.else(),l.error(!1,{discrError:t.DiscrError.Mapping,tag:v,tagName:p}),c.endIf()}function f(x){const j=c.name("valid"),k=l.subschema({keyword:"oneOf",schemaProp:x},j);return l.mergeEvaluated(k,e.Name),j}function g(){var x;const j={},k=T(m);let C=!0;for(let ee=0;ee<w.length;ee++){let F=w[ee];if(F?.$ref&&!(0,s.schemaHasRulesButRef)(F,b.self.RULES)){const ye=F.$ref;if(F=r.resolveRef.call(b.self,b.schemaEnv.root,b.baseId,ye),F instanceof r.SchemaEnv&&(F=F.schema),F===void 0)throw new o.default(b.opts.uriResolver,b.baseId,ye)}const te=(x=F?.properties)===null||x===void 0?void 0:x[p];if(typeof te!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);C=C&&(k||T(F)),R(te,ee)}if(!C)throw new Error(`discriminator: "${p}" must be required`);return j;function T({required:ee}){return Array.isArray(ee)&&ee.includes(p)}function R(ee,F){if(ee.const)ne(ee.const,F);else if(ee.enum)for(const te of ee.enum)ne(te,F);else throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`)}function ne(ee,F){if(typeof ee!="string"||ee in j)throw new Error(`discriminator: "${p}" values must be unique strings`);j[ee]=F}}}};return ru.default=i,ru}const Wx="http://json-schema.org/draft-07/schema#",Hx="http://json-schema.org/draft-07/schema#",Kx="Core schema meta-schema",Jx={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Qx=["object","boolean"],Gx={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},Yx={$schema:Wx,$id:Hx,title:Kx,definitions:Jx,type:Qx,properties:Gx,default:!0};var Np;function Xx(){return Np||(Np=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const r=cx(),o=Fx(),s=Bx(),a=Yx,i=["/properties"],l="http://json-schema.org/draft-07/schema";class c extends r.default{_addVocabularies(){super._addVocabularies(),o.default.forEach(p=>this.addVocabulary(p)),this.opts.discriminator&&this.addKeyword(s.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const p=this.opts.$data?this.$dataMetaSchema(a,i):a;this.addMetaSchema(p,l,!1),this.refs["http://json-schema.org/schema"]=l}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(l)?l:void 0)}}t.Ajv=c,e.exports=t=c,e.exports.Ajv=c,Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var d=md();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return d.KeywordCxt}});var u=mn();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return u._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return u.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return u.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return u.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return u.CodeGen}});var m=kv();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return m.default}});var b=gd();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return b.default}})})(jc,jc.exports)),jc.exports}Xx();var Yd={},Tp;function Zx(){return Tp||(Tp=1,(function(e){(function(t){function r(P){return P!==null?Object.prototype.toString.call(P)==="[object Array]":!1}function o(P){return P!==null?Object.prototype.toString.call(P)==="[object Object]":!1}function s(P,N){if(P===N)return!0;var U=Object.prototype.toString.call(P);if(U!==Object.prototype.toString.call(N))return!1;if(r(P)===!0){if(P.length!==N.length)return!1;for(var Y=0;Y<P.length;Y++)if(s(P[Y],N[Y])===!1)return!1;return!0}if(o(P)===!0){var me={};for(var Ne in P)if(hasOwnProperty.call(P,Ne)){if(s(P[Ne],N[Ne])===!1)return!1;me[Ne]=!0}for(var ze in N)if(hasOwnProperty.call(N,ze)&&me[ze]!==!0)return!1;return!0}return!1}function a(P){if(P===""||P===!1||P===null)return!0;if(r(P)&&P.length===0)return!0;if(o(P)){for(var N in P)if(P.hasOwnProperty(N))return!1;return!0}else return!1}function i(P){for(var N=Object.keys(P),U=[],Y=0;Y<N.length;Y++)U.push(P[N[Y]]);return U}var l;typeof String.prototype.trimLeft=="function"?l=function(P){return P.trimLeft()}:l=function(P){return P.match(/^\s*(.*)/)[1]};var c=0,d=1,u=2,m=3,b=4,w=5,p=6,y=7,v=8,h=9,f={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},g="EOF",x="UnquotedIdentifier",j="QuotedIdentifier",k="Rbracket",C="Rparen",T="Comma",R="Colon",ne="Rbrace",ee="Number",F="Current",te="Expref",ye="Pipe",W="Or",we="And",Re="EQ",Ee="GT",ge="LT",Q="GTE",L="LTE",le="NE",A="Flatten",O="Star",M="Filter",re="Dot",Oe="Not",ae="Lbrace",J="Lbracket",pe="Lparen",$="Literal",I={".":re,"*":O,",":T,":":R,"{":ae,"}":ne,"]":k,"(":pe,")":C,"@":F},D={"<":!0,">":!0,"=":!0,"!":!0},ce={" ":!0,"	":!0,"\n":!0};function G(P){return P>="a"&&P<="z"||P>="A"&&P<="Z"||P==="_"}function V(P){return P>="0"&&P<="9"||P==="-"}function rt(P){return P>="a"&&P<="z"||P>="A"&&P<="Z"||P>="0"&&P<="9"||P==="_"}function ot(){}ot.prototype={tokenize:function(P){var N=[];this._current=0;for(var U,Y,me;this._current<P.length;)if(G(P[this._current]))U=this._current,Y=this._consumeUnquotedIdentifier(P),N.push({type:x,value:Y,start:U});else if(I[P[this._current]]!==void 0)N.push({type:I[P[this._current]],value:P[this._current],start:this._current}),this._current++;else if(V(P[this._current]))me=this._consumeNumber(P),N.push(me);else if(P[this._current]==="[")me=this._consumeLBracket(P),N.push(me);else if(P[this._current]==='"')U=this._current,Y=this._consumeQuotedIdentifier(P),N.push({type:j,value:Y,start:U});else if(P[this._current]==="'")U=this._current,Y=this._consumeRawStringLiteral(P),N.push({type:$,value:Y,start:U});else if(P[this._current]==="`"){U=this._current;var Ne=this._consumeLiteral(P);N.push({type:$,value:Ne,start:U})}else if(D[P[this._current]]!==void 0)N.push(this._consumeOperator(P));else if(ce[P[this._current]]!==void 0)this._current++;else if(P[this._current]==="&")U=this._current,this._current++,P[this._current]==="&"?(this._current++,N.push({type:we,value:"&&",start:U})):N.push({type:te,value:"&",start:U});else if(P[this._current]==="|")U=this._current,this._current++,P[this._current]==="|"?(this._current++,N.push({type:W,value:"||",start:U})):N.push({type:ye,value:"|",start:U});else{var ze=new Error("Unknown character:"+P[this._current]);throw ze.name="LexerError",ze}return N},_consumeUnquotedIdentifier:function(P){var N=this._current;for(this._current++;this._current<P.length&&rt(P[this._current]);)this._current++;return P.slice(N,this._current)},_consumeQuotedIdentifier:function(P){var N=this._current;this._current++;for(var U=P.length;P[this._current]!=='"'&&this._current<U;){var Y=this._current;P[Y]==="\\"&&(P[Y+1]==="\\"||P[Y+1]==='"')?Y+=2:Y++,this._current=Y}return this._current++,JSON.parse(P.slice(N,this._current))},_consumeRawStringLiteral:function(P){var N=this._current;this._current++;for(var U=P.length;P[this._current]!=="'"&&this._current<U;){var Y=this._current;P[Y]==="\\"&&(P[Y+1]==="\\"||P[Y+1]==="'")?Y+=2:Y++,this._current=Y}this._current++;var me=P.slice(N+1,this._current-1);return me.replace("\\'","'")},_consumeNumber:function(P){var N=this._current;this._current++;for(var U=P.length;V(P[this._current])&&this._current<U;)this._current++;var Y=parseInt(P.slice(N,this._current));return{type:ee,value:Y,start:N}},_consumeLBracket:function(P){var N=this._current;return this._current++,P[this._current]==="?"?(this._current++,{type:M,value:"[?",start:N}):P[this._current]==="]"?(this._current++,{type:A,value:"[]",start:N}):{type:J,value:"[",start:N}},_consumeOperator:function(P){var N=this._current,U=P[N];if(this._current++,U==="!")return P[this._current]==="="?(this._current++,{type:le,value:"!=",start:N}):{type:Oe,value:"!",start:N};if(U==="<")return P[this._current]==="="?(this._current++,{type:L,value:"<=",start:N}):{type:ge,value:"<",start:N};if(U===">")return P[this._current]==="="?(this._current++,{type:Q,value:">=",start:N}):{type:Ee,value:">",start:N};if(U==="="&&P[this._current]==="=")return this._current++,{type:Re,value:"==",start:N}},_consumeLiteral:function(P){this._current++;for(var N=this._current,U=P.length,Y;P[this._current]!=="`"&&this._current<U;){var me=this._current;P[me]==="\\"&&(P[me+1]==="\\"||P[me+1]==="`")?me+=2:me++,this._current=me}var Ne=l(P.slice(N,this._current));return Ne=Ne.replace("\\`","`"),this._looksLikeJSON(Ne)?Y=JSON.parse(Ne):Y=JSON.parse('"'+Ne+'"'),this._current++,Y},_looksLikeJSON:function(P){var N='[{"',U=["true","false","null"],Y="-0123456789";if(P==="")return!1;if(N.indexOf(P[0])>=0)return!0;if(U.indexOf(P)>=0)return!0;if(Y.indexOf(P[0])>=0)try{return JSON.parse(P),!0}catch{return!1}else return!1}};var Ce={};Ce[g]=0,Ce[x]=0,Ce[j]=0,Ce[k]=0,Ce[C]=0,Ce[T]=0,Ce[ne]=0,Ce[ee]=0,Ce[F]=0,Ce[te]=0,Ce[ye]=1,Ce[W]=2,Ce[we]=3,Ce[Re]=5,Ce[Ee]=5,Ce[ge]=5,Ce[Q]=5,Ce[L]=5,Ce[le]=5,Ce[A]=9,Ce[O]=20,Ce[M]=21,Ce[re]=40,Ce[Oe]=45,Ce[ae]=50,Ce[J]=55,Ce[pe]=60;function lt(){}lt.prototype={parse:function(P){this._loadTokens(P),this.index=0;var N=this.expression(0);if(this._lookahead(0)!==g){var U=this._lookaheadToken(0),Y=new Error("Unexpected token type: "+U.type+", value: "+U.value);throw Y.name="ParserError",Y}return N},_loadTokens:function(P){var N=new ot,U=N.tokenize(P);U.push({type:g,value:"",start:P.length}),this.tokens=U},expression:function(P){var N=this._lookaheadToken(0);this._advance();for(var U=this.nud(N),Y=this._lookahead(0);P<Ce[Y];)this._advance(),U=this.led(Y,U),Y=this._lookahead(0);return U},_lookahead:function(P){return this.tokens[this.index+P].type},_lookaheadToken:function(P){return this.tokens[this.index+P]},_advance:function(){this.index++},nud:function(P){var N,U,Y;switch(P.type){case $:return{type:"Literal",value:P.value};case x:return{type:"Field",name:P.value};case j:var me={type:"Field",name:P.value};if(this._lookahead(0)===pe)throw new Error("Quoted identifier not allowed for function names.");return me;case Oe:return U=this.expression(Ce.Not),{type:"NotExpression",children:[U]};case O:return N={type:"Identity"},U=null,this._lookahead(0)===k?U={type:"Identity"}:U=this._parseProjectionRHS(Ce.Star),{type:"ValueProjection",children:[N,U]};case M:return this.led(P.type,{type:"Identity"});case ae:return this._parseMultiselectHash();case A:return N={type:A,children:[{type:"Identity"}]},U=this._parseProjectionRHS(Ce.Flatten),{type:"Projection",children:[N,U]};case J:return this._lookahead(0)===ee||this._lookahead(0)===R?(U=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},U)):this._lookahead(0)===O&&this._lookahead(1)===k?(this._advance(),this._advance(),U=this._parseProjectionRHS(Ce.Star),{type:"Projection",children:[{type:"Identity"},U]}):this._parseMultiselectList();case F:return{type:F};case te:return Y=this.expression(Ce.Expref),{type:"ExpressionReference",children:[Y]};case pe:for(var Ne=[];this._lookahead(0)!==C;)this._lookahead(0)===F?(Y={type:F},this._advance()):Y=this.expression(0),Ne.push(Y);return this._match(C),Ne[0];default:this._errorToken(P)}},led:function(P,N){var U;switch(P){case re:var Y=Ce.Dot;return this._lookahead(0)!==O?(U=this._parseDotRHS(Y),{type:"Subexpression",children:[N,U]}):(this._advance(),U=this._parseProjectionRHS(Y),{type:"ValueProjection",children:[N,U]});case ye:return U=this.expression(Ce.Pipe),{type:ye,children:[N,U]};case W:return U=this.expression(Ce.Or),{type:"OrExpression",children:[N,U]};case we:return U=this.expression(Ce.And),{type:"AndExpression",children:[N,U]};case pe:for(var me=N.name,Ne=[],ze,ve;this._lookahead(0)!==C;)this._lookahead(0)===F?(ze={type:F},this._advance()):ze=this.expression(0),this._lookahead(0)===T&&this._match(T),Ne.push(ze);return this._match(C),ve={type:"Function",name:me,children:Ne},ve;case M:var be=this.expression(0);return this._match(k),this._lookahead(0)===A?U={type:"Identity"}:U=this._parseProjectionRHS(Ce.Filter),{type:"FilterProjection",children:[N,U,be]};case A:var ft={type:A,children:[N]},at=this._parseProjectionRHS(Ce.Flatten);return{type:"Projection",children:[ft,at]};case Re:case le:case Ee:case Q:case ge:case L:return this._parseComparator(N,P);case J:var Je=this._lookaheadToken(0);return Je.type===ee||Je.type===R?(U=this._parseIndexExpression(),this._projectIfSlice(N,U)):(this._match(O),this._match(k),U=this._parseProjectionRHS(Ce.Star),{type:"Projection",children:[N,U]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(P){if(this._lookahead(0)===P)this._advance();else{var N=this._lookaheadToken(0),U=new Error("Expected "+P+", got: "+N.type);throw U.name="ParserError",U}},_errorToken:function(P){var N=new Error("Invalid token ("+P.type+'): "'+P.value+'"');throw N.name="ParserError",N},_parseIndexExpression:function(){if(this._lookahead(0)===R||this._lookahead(1)===R)return this._parseSliceExpression();var P={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(k),P},_projectIfSlice:function(P,N){var U={type:"IndexExpression",children:[P,N]};return N.type==="Slice"?{type:"Projection",children:[U,this._parseProjectionRHS(Ce.Star)]}:U},_parseSliceExpression:function(){for(var P=[null,null,null],N=0,U=this._lookahead(0);U!==k&&N<3;){if(U===R)N++,this._advance();else if(U===ee)P[N]=this._lookaheadToken(0).value,this._advance();else{var Y=this._lookahead(0),me=new Error("Syntax error, unexpected token: "+Y.value+"("+Y.type+")");throw me.name="Parsererror",me}U=this._lookahead(0)}return this._match(k),{type:"Slice",children:P}},_parseComparator:function(P,N){var U=this.expression(Ce[N]);return{type:"Comparator",name:N,children:[P,U]}},_parseDotRHS:function(P){var N=this._lookahead(0),U=[x,j,O];if(U.indexOf(N)>=0)return this.expression(P);if(N===J)return this._match(J),this._parseMultiselectList();if(N===ae)return this._match(ae),this._parseMultiselectHash()},_parseProjectionRHS:function(P){var N;if(Ce[this._lookahead(0)]<10)N={type:"Identity"};else if(this._lookahead(0)===J)N=this.expression(P);else if(this._lookahead(0)===M)N=this.expression(P);else if(this._lookahead(0)===re)this._match(re),N=this._parseDotRHS(P);else{var U=this._lookaheadToken(0),Y=new Error("Sytanx error, unexpected token: "+U.value+"("+U.type+")");throw Y.name="ParserError",Y}return N},_parseMultiselectList:function(){for(var P=[];this._lookahead(0)!==k;){var N=this.expression(0);if(P.push(N),this._lookahead(0)===T&&(this._match(T),this._lookahead(0)===k))throw new Error("Unexpected token Rbracket")}return this._match(k),{type:"MultiSelectList",children:P}},_parseMultiselectHash:function(){for(var P=[],N=[x,j],U,Y,me,Ne;;){if(U=this._lookaheadToken(0),N.indexOf(U.type)<0)throw new Error("Expecting an identifier token, got: "+U.type);if(Y=U.value,this._advance(),this._match(R),me=this.expression(0),Ne={type:"KeyValuePair",name:Y,value:me},P.push(Ne),this._lookahead(0)===T)this._match(T);else if(this._lookahead(0)===ne){this._match(ne);break}}return{type:"MultiSelectHash",children:P}}};function qe(P){this.runtime=P}qe.prototype={search:function(P,N){return this.visit(P,N)},visit:function(P,N){var U,Y,me,Ne,ze,ve,be,ft,at,Je;switch(P.type){case"Field":return N!==null&&o(N)?(ve=N[P.name],ve===void 0?null:ve):null;case"Subexpression":for(me=this.visit(P.children[0],N),Je=1;Je<P.children.length;Je++)if(me=this.visit(P.children[1],me),me===null)return null;return me;case"IndexExpression":return be=this.visit(P.children[0],N),ft=this.visit(P.children[1],be),ft;case"Index":if(!r(N))return null;var Ge=P.value;return Ge<0&&(Ge=N.length+Ge),me=N[Ge],me===void 0&&(me=null),me;case"Slice":if(!r(N))return null;var qt=P.children.slice(0),kn=this.computeSliceParams(N.length,qt),En=kn[0],zt=kn[1],dn=kn[2];if(me=[],dn>0)for(Je=En;Je<zt;Je+=dn)me.push(N[Je]);else for(Je=En;Je>zt;Je+=dn)me.push(N[Je]);return me;case"Projection":var Vt=this.visit(P.children[0],N);if(!r(Vt))return null;for(at=[],Je=0;Je<Vt.length;Je++)Y=this.visit(P.children[1],Vt[Je]),Y!==null&&at.push(Y);return at;case"ValueProjection":if(Vt=this.visit(P.children[0],N),!o(Vt))return null;at=[];var Jt=i(Vt);for(Je=0;Je<Jt.length;Je++)Y=this.visit(P.children[1],Jt[Je]),Y!==null&&at.push(Y);return at;case"FilterProjection":if(Vt=this.visit(P.children[0],N),!r(Vt))return null;var cn=[],gt=[];for(Je=0;Je<Vt.length;Je++)U=this.visit(P.children[2],Vt[Je]),a(U)||cn.push(Vt[Je]);for(var fn=0;fn<cn.length;fn++)Y=this.visit(P.children[1],cn[fn]),Y!==null&&gt.push(Y);return gt;case"Comparator":switch(Ne=this.visit(P.children[0],N),ze=this.visit(P.children[1],N),P.name){case Re:me=s(Ne,ze);break;case le:me=!s(Ne,ze);break;case Ee:me=Ne>ze;break;case Q:me=Ne>=ze;break;case ge:me=Ne<ze;break;case L:me=Ne<=ze;break;default:throw new Error("Unknown comparator: "+P.name)}return me;case A:var Ot=this.visit(P.children[0],N);if(!r(Ot))return null;var et=[];for(Je=0;Je<Ot.length;Je++)Y=Ot[Je],r(Y)?et.push.apply(et,Y):et.push(Y);return et;case"Identity":return N;case"MultiSelectList":if(N===null)return null;for(at=[],Je=0;Je<P.children.length;Je++)at.push(this.visit(P.children[Je],N));return at;case"MultiSelectHash":if(N===null)return null;at={};var Qt;for(Je=0;Je<P.children.length;Je++)Qt=P.children[Je],at[Qt.name]=this.visit(Qt.value,N);return at;case"OrExpression":return U=this.visit(P.children[0],N),a(U)&&(U=this.visit(P.children[1],N)),U;case"AndExpression":return Ne=this.visit(P.children[0],N),a(Ne)===!0?Ne:this.visit(P.children[1],N);case"NotExpression":return Ne=this.visit(P.children[0],N),a(Ne);case"Literal":return P.value;case ye:return be=this.visit(P.children[0],N),this.visit(P.children[1],be);case F:return N;case"Function":var It=[];for(Je=0;Je<P.children.length;Je++)It.push(this.visit(P.children[Je],N));return this.runtime.callFunction(P.name,It);case"ExpressionReference":var zn=P.children[0];return zn.jmespathType=te,zn;default:throw new Error("Unknown node type: "+P.type)}},computeSliceParams:function(P,N){var U=N[0],Y=N[1],me=N[2],Ne=[null,null,null];if(me===null)me=1;else if(me===0){var ze=new Error("Invalid slice, step cannot be 0");throw ze.name="RuntimeError",ze}var ve=me<0;return U===null?U=ve?P-1:0:U=this.capSliceRange(P,U,me),Y===null?Y=ve?-1:P:Y=this.capSliceRange(P,Y,me),Ne[0]=U,Ne[1]=Y,Ne[2]=me,Ne},capSliceRange:function(P,N,U){return N<0?(N+=P,N<0&&(N=U<0?-1:0)):N>=P&&(N=U<0?P-1:P),N}};function He(P){this._interpreter=P,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[c]}]},avg:{_func:this._functionAvg,_signature:[{types:[v]}]},ceil:{_func:this._functionCeil,_signature:[{types:[c]}]},contains:{_func:this._functionContains,_signature:[{types:[u,m]},{types:[d]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[u]},{types:[u]}]},floor:{_func:this._functionFloor,_signature:[{types:[c]}]},length:{_func:this._functionLength,_signature:[{types:[u,m,b]}]},map:{_func:this._functionMap,_signature:[{types:[p]},{types:[m]}]},max:{_func:this._functionMax,_signature:[{types:[v,h]}]},merge:{_func:this._functionMerge,_signature:[{types:[b],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[m]},{types:[p]}]},sum:{_func:this._functionSum,_signature:[{types:[v]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[u]},{types:[u]}]},min:{_func:this._functionMin,_signature:[{types:[v,h]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[m]},{types:[p]}]},type:{_func:this._functionType,_signature:[{types:[d]}]},keys:{_func:this._functionKeys,_signature:[{types:[b]}]},values:{_func:this._functionValues,_signature:[{types:[b]}]},sort:{_func:this._functionSort,_signature:[{types:[h,v]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[m]},{types:[p]}]},join:{_func:this._functionJoin,_signature:[{types:[u]},{types:[h]}]},reverse:{_func:this._functionReverse,_signature:[{types:[u,m]}]},to_array:{_func:this._functionToArray,_signature:[{types:[d]}]},to_string:{_func:this._functionToString,_signature:[{types:[d]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[d]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[d],variadic:!0}]}}}He.prototype={callFunction:function(P,N){var U=this.functionTable[P];if(U===void 0)throw new Error("Unknown function: "+P+"()");return this._validateArgs(P,N,U._signature),U._func.call(this,N)},_validateArgs:function(P,N,U){var Y;if(U[U.length-1].variadic){if(N.length<U.length)throw Y=U.length===1?" argument":" arguments",new Error("ArgumentError: "+P+"() takes at least"+U.length+Y+" but received "+N.length)}else if(N.length!==U.length)throw Y=U.length===1?" argument":" arguments",new Error("ArgumentError: "+P+"() takes "+U.length+Y+" but received "+N.length);for(var me,Ne,ze,ve=0;ve<U.length;ve++){ze=!1,me=U[ve].types,Ne=this._getTypeName(N[ve]);for(var be=0;be<me.length;be++)if(this._typeMatches(Ne,me[be],N[ve])){ze=!0;break}if(!ze){var ft=me.map(function(at){return f[at]}).join(",");throw new Error("TypeError: "+P+"() expected argument "+(ve+1)+" to be type "+ft+" but received type "+f[Ne]+" instead.")}}},_typeMatches:function(P,N,U){if(N===d)return!0;if(N===h||N===v||N===m){if(N===m)return P===m;if(P===m){var Y;N===v?Y=c:N===h&&(Y=u);for(var me=0;me<U.length;me++)if(!this._typeMatches(this._getTypeName(U[me]),Y,U[me]))return!1;return!0}}else return P===N},_getTypeName:function(P){switch(Object.prototype.toString.call(P)){case"[object String]":return u;case"[object Number]":return c;case"[object Array]":return m;case"[object Boolean]":return w;case"[object Null]":return y;case"[object Object]":return P.jmespathType===te?p:b}},_functionStartsWith:function(P){return P[0].lastIndexOf(P[1])===0},_functionEndsWith:function(P){var N=P[0],U=P[1];return N.indexOf(U,N.length-U.length)!==-1},_functionReverse:function(P){var N=this._getTypeName(P[0]);if(N===u){for(var U=P[0],Y="",me=U.length-1;me>=0;me--)Y+=U[me];return Y}else{var Ne=P[0].slice(0);return Ne.reverse(),Ne}},_functionAbs:function(P){return Math.abs(P[0])},_functionCeil:function(P){return Math.ceil(P[0])},_functionAvg:function(P){for(var N=0,U=P[0],Y=0;Y<U.length;Y++)N+=U[Y];return N/U.length},_functionContains:function(P){return P[0].indexOf(P[1])>=0},_functionFloor:function(P){return Math.floor(P[0])},_functionLength:function(P){return o(P[0])?Object.keys(P[0]).length:P[0].length},_functionMap:function(P){for(var N=[],U=this._interpreter,Y=P[0],me=P[1],Ne=0;Ne<me.length;Ne++)N.push(U.visit(Y,me[Ne]));return N},_functionMerge:function(P){for(var N={},U=0;U<P.length;U++){var Y=P[U];for(var me in Y)N[me]=Y[me]}return N},_functionMax:function(P){if(P[0].length>0){var N=this._getTypeName(P[0][0]);if(N===c)return Math.max.apply(Math,P[0]);for(var U=P[0],Y=U[0],me=1;me<U.length;me++)Y.localeCompare(U[me])<0&&(Y=U[me]);return Y}else return null},_functionMin:function(P){if(P[0].length>0){var N=this._getTypeName(P[0][0]);if(N===c)return Math.min.apply(Math,P[0]);for(var U=P[0],Y=U[0],me=1;me<U.length;me++)U[me].localeCompare(Y)<0&&(Y=U[me]);return Y}else return null},_functionSum:function(P){for(var N=0,U=P[0],Y=0;Y<U.length;Y++)N+=U[Y];return N},_functionType:function(P){switch(this._getTypeName(P[0])){case c:return"number";case u:return"string";case m:return"array";case b:return"object";case w:return"boolean";case p:return"expref";case y:return"null"}},_functionKeys:function(P){return Object.keys(P[0])},_functionValues:function(P){for(var N=P[0],U=Object.keys(N),Y=[],me=0;me<U.length;me++)Y.push(N[U[me]]);return Y},_functionJoin:function(P){var N=P[0],U=P[1];return U.join(N)},_functionToArray:function(P){return this._getTypeName(P[0])===m?P[0]:[P[0]]},_functionToString:function(P){return this._getTypeName(P[0])===u?P[0]:JSON.stringify(P[0])},_functionToNumber:function(P){var N=this._getTypeName(P[0]),U;return N===c?P[0]:N===u&&(U=+P[0],!isNaN(U))?U:null},_functionNotNull:function(P){for(var N=0;N<P.length;N++)if(this._getTypeName(P[N])!==y)return P[N];return null},_functionSort:function(P){var N=P[0].slice(0);return N.sort(),N},_functionSortBy:function(P){var N=P[0].slice(0);if(N.length===0)return N;var U=this._interpreter,Y=P[1],me=this._getTypeName(U.visit(Y,N[0]));if([c,u].indexOf(me)<0)throw new Error("TypeError");for(var Ne=this,ze=[],ve=0;ve<N.length;ve++)ze.push([ve,N[ve]]);ze.sort(function(ft,at){var Je=U.visit(Y,ft[1]),Ge=U.visit(Y,at[1]);if(Ne._getTypeName(Je)!==me)throw new Error("TypeError: expected "+me+", received "+Ne._getTypeName(Je));if(Ne._getTypeName(Ge)!==me)throw new Error("TypeError: expected "+me+", received "+Ne._getTypeName(Ge));return Je>Ge?1:Je<Ge?-1:ft[0]-at[0]});for(var be=0;be<ze.length;be++)N[be]=ze[be][1];return N},_functionMaxBy:function(P){for(var N=P[1],U=P[0],Y=this.createKeyFunction(N,[c,u]),me=-1/0,Ne,ze,ve=0;ve<U.length;ve++)ze=Y(U[ve]),ze>me&&(me=ze,Ne=U[ve]);return Ne},_functionMinBy:function(P){for(var N=P[1],U=P[0],Y=this.createKeyFunction(N,[c,u]),me=1/0,Ne,ze,ve=0;ve<U.length;ve++)ze=Y(U[ve]),ze<me&&(me=ze,Ne=U[ve]);return Ne},createKeyFunction:function(P,N){var U=this,Y=this._interpreter,me=function(Ne){var ze=Y.visit(P,Ne);if(N.indexOf(U._getTypeName(ze))<0){var ve="TypeError: expected one of "+N+", received "+U._getTypeName(ze);throw new Error(ve)}return ze};return me}};function it(P){var N=new lt,U=N.parse(P);return U}function Ve(P){var N=new ot;return N.tokenize(P)}function Et(P,N){var U=new lt,Y=new He,me=new qe(Y);Y._interpreter=me;var Ne=U.parse(N);return me.search(Ne,P)}t.tokenize=Ve,t.compile=it,t.search=Et,t.strictDeepEqual=s})(e)})(Yd)),Yd}Zx();class e2{add(t,r,o){if(typeof arguments[0]!="string")for(let s in arguments[0])this.add(s,arguments[0][s],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(s){this[s]=this[s]||[],r&&this[s][o?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(o){o.call(r&&r.context?r.context:r,r)})}}class t2{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach(s=>{if(typeof s!="object"||!s.name||!s.init)throw new Error("Invalid JSEP plugin format");this.registered[s.name]||(s.init(this.jsep),this.registered[s.name]=s)})}}class xe{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+xe.version}static addUnaryOp(t){return xe.max_unop_len=Math.max(t.length,xe.max_unop_len),xe.unary_ops[t]=1,xe}static addBinaryOp(t,r,o){return xe.max_binop_len=Math.max(t.length,xe.max_binop_len),xe.binary_ops[t]=r,o?xe.right_associative.add(t):xe.right_associative.delete(t),xe}static addIdentifierChar(t){return xe.additional_identifier_chars.add(t),xe}static addLiteral(t,r){return xe.literals[t]=r,xe}static removeUnaryOp(t){return delete xe.unary_ops[t],t.length===xe.max_unop_len&&(xe.max_unop_len=xe.getMaxKeyLen(xe.unary_ops)),xe}static removeAllUnaryOps(){return xe.unary_ops={},xe.max_unop_len=0,xe}static removeIdentifierChar(t){return xe.additional_identifier_chars.delete(t),xe}static removeBinaryOp(t){return delete xe.binary_ops[t],t.length===xe.max_binop_len&&(xe.max_binop_len=xe.getMaxKeyLen(xe.binary_ops)),xe.right_associative.delete(t),xe}static removeAllBinaryOps(){return xe.binary_ops={},xe.max_binop_len=0,xe}static removeLiteral(t){return delete xe.literals[t],xe}static removeAllLiterals(){return xe.literals={},xe}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new xe(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(r=>r.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return xe.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!xe.binary_ops[String.fromCharCode(t)]||xe.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return xe.isIdentifierStart(t)||xe.isDecimalDigit(t)}throwError(t){const r=new Error(t+" at character "+this.index);throw r.index=this.index,r.description=t,r}runHook(t,r){if(xe.hooks[t]){const o={context:this,node:r};return xe.hooks.run(t,o),o.node}return r}searchHook(t){if(xe.hooks[t]){const r={context:this};return xe.hooks[t].find(function(o){return o.call(r.context,r),r.node}),r.node}}gobbleSpaces(){let t=this.code;for(;t===xe.SPACE_CODE||t===xe.TAB_CODE||t===xe.LF_CODE||t===xe.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),r=t.length===1?t[0]:{type:xe.COMPOUND,body:t};return this.runHook("after-all",r)}gobbleExpressions(t){let r=[],o,s;for(;this.index<this.expr.length;)if(o=this.code,o===xe.SEMCOL_CODE||o===xe.COMMA_CODE)this.index++;else if(s=this.gobbleExpression())r.push(s);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return r}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,xe.max_binop_len),r=t.length;for(;r>0;){if(xe.binary_ops.hasOwnProperty(t)&&(!xe.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!xe.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=r,t;t=t.substr(0,--r)}return!1}gobbleBinaryExpression(){let t,r,o,s,a,i,l,c,d;if(i=this.gobbleToken(),!i||(r=this.gobbleBinaryOp(),!r))return i;for(a={value:r,prec:xe.binaryPrecedence(r),right_a:xe.right_associative.has(r)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+r),s=[i,a,l];r=this.gobbleBinaryOp();){if(o=xe.binaryPrecedence(r),o===0){this.index-=r.length;break}a={value:r,prec:o,right_a:xe.right_associative.has(r)},d=r;const u=m=>a.right_a&&m.right_a?o>m.prec:o<=m.prec;for(;s.length>2&&u(s[s.length-2]);)l=s.pop(),r=s.pop().value,i=s.pop(),t={type:xe.BINARY_EXP,operator:r,left:i,right:l},s.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+d),s.push(a,t)}for(c=s.length-1,t=s[c];c>1;)t={type:xe.BINARY_EXP,operator:s[c-1].value,left:s[c-2],right:t},c-=2;return t}gobbleToken(){let t,r,o,s;if(this.gobbleSpaces(),s=this.searchHook("gobble-token"),s)return this.runHook("after-token",s);if(t=this.code,xe.isDecimalDigit(t)||t===xe.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===xe.SQUOTE_CODE||t===xe.DQUOTE_CODE)s=this.gobbleStringLiteral();else if(t===xe.OBRACK_CODE)s=this.gobbleArray();else{for(r=this.expr.substr(this.index,xe.max_unop_len),o=r.length;o>0;){if(xe.unary_ops.hasOwnProperty(r)&&(!xe.isIdentifierStart(this.code)||this.index+r.length<this.expr.length&&!xe.isIdentifierPart(this.expr.charCodeAt(this.index+r.length)))){this.index+=o;const a=this.gobbleToken();return a||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:xe.UNARY_EXP,operator:r,argument:a,prefix:!0})}r=r.substr(0,--o)}xe.isIdentifierStart(t)?(s=this.gobbleIdentifier(),xe.literals.hasOwnProperty(s.name)?s={type:xe.LITERAL,value:xe.literals[s.name],raw:s.name}:s.name===xe.this_str&&(s={type:xe.THIS_EXP})):t===xe.OPAREN_CODE&&(s=this.gobbleGroup())}return s?(s=this.gobbleTokenProperty(s),this.runHook("after-token",s)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let r=this.code;for(;r===xe.PERIOD_CODE||r===xe.OBRACK_CODE||r===xe.OPAREN_CODE||r===xe.QUMARK_CODE;){let o;if(r===xe.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==xe.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),r=this.code}this.index++,r===xe.OBRACK_CODE?(t={type:xe.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),r=this.code,r!==xe.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):r===xe.OPAREN_CODE?t={type:xe.CALL_EXP,arguments:this.gobbleArguments(xe.CPAREN_CODE),callee:t}:(r===xe.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:xe.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),r=this.code}return t}gobbleNumericLiteral(){let t="",r,o;for(;xe.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===xe.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);xe.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(r=this.char,r==="e"||r==="E"){for(t+=this.expr.charAt(this.index++),r=this.char,(r==="+"||r==="-")&&(t+=this.expr.charAt(this.index++));xe.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);xe.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,xe.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===xe.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===xe.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:xe.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const r=this.index,o=this.expr.charAt(this.index++);let s=!1;for(;this.index<this.expr.length;){let a=this.expr.charAt(this.index++);if(a===o){s=!0;break}else if(a==="\\")switch(a=this.expr.charAt(this.index++),a){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=a}else t+=a}return s||this.throwError('Unclosed quote after "'+t+'"'),{type:xe.LITERAL,value:t,raw:this.expr.substring(r,this.index)}}gobbleIdentifier(){let t=this.code,r=this.index;for(xe.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,xe.isIdentifierPart(t));)this.index++;return{type:xe.IDENTIFIER,name:this.expr.slice(r,this.index)}}gobbleArguments(t){const r=[];let o=!1,s=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){o=!0,this.index++,t===xe.CPAREN_CODE&&s&&s>=r.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(a===xe.COMMA_CODE){if(this.index++,s++,s!==r.length){if(t===xe.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===xe.CBRACK_CODE)for(let i=r.length;i<s;i++)r.push(null)}}else if(r.length!==s&&s!==0)this.throwError("Expected comma");else{const i=this.gobbleExpression();(!i||i.type===xe.COMPOUND)&&this.throwError("Expected comma"),r.push(i)}}return o||this.throwError("Expected "+String.fromCharCode(t)),r}gobbleGroup(){this.index++;let t=this.gobbleExpressions(xe.CPAREN_CODE);if(this.code===xe.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:xe.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:xe.ARRAY_EXP,elements:this.gobbleArguments(xe.CBRACK_CODE)}}}const n2=new e2;Object.assign(xe,{hooks:n2,plugins:new t2(xe),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});xe.max_unop_len=xe.getMaxKeyLen(xe.unary_ops);xe.max_binop_len=xe.getMaxKeyLen(xe.binary_ops);const ys=e=>new xe(e).parse(),r2=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(xe).filter(e=>!r2.includes(e)&&ys[e]===void 0).forEach(e=>{ys[e]=xe[e]});ys.Jsep=xe;const o2="ConditionalExpression";var a2={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===e.QUMARK_CODE){this.index++;const o=r.node,s=this.gobbleExpression();if(s||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const a=this.gobbleExpression();if(a||this.throwError("Expected expression"),r.node={type:o2,test:o,consequent:s,alternate:a},o.operator&&e.binary_ops[o.operator]<=.9){let i=o;for(;i.right.operator&&e.binary_ops[i.right.operator]<=.9;)i=i.right;r.node.test=i.right,i.right=r.node,r.node=o}}else this.throwError("Expected :")}})}};ys.plugins.register(a2);const Ap=47,s2=92;var i2={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===Ap){const o=++this.index;let s=!1;for(;this.index<this.expr.length;){if(this.code===Ap&&!s){const a=this.expr.slice(o,this.index);let i="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)i+=this.char;else break}let l;try{l=new RegExp(a,i)}catch(c){this.throwError(c.message)}return r.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?s=!0:s&&this.code===e.CBRACK_CODE&&(s=!1),this.index+=this.code===s2?2:1}this.throwError("Unclosed Regex")}})}};const Xd=43,l2=45,Si={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[Xd,l2],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];Si.assignmentOperators.forEach(o=>e.addBinaryOp(o,Si.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(s){const a=this.code;Si.updateOperators.some(i=>i===a&&i===this.expr.charCodeAt(this.index+1))&&(this.index+=2,s.node={type:"UpdateExpression",operator:a===Xd?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!s.node.argument||!t.includes(s.node.argument.type))&&this.throwError(`Unexpected ${s.node.operator}`))}),e.hooks.add("after-token",function(s){if(s.node){const a=this.code;Si.updateOperators.some(i=>i===a&&i===this.expr.charCodeAt(this.index+1))&&(t.includes(s.node.type)||this.throwError(`Unexpected ${s.node.operator}`),this.index+=2,s.node={type:"UpdateExpression",operator:a===Xd?"++":"--",argument:s.node,prefix:!1})}}),e.hooks.add("after-expression",function(s){s.node&&r(s.node)});function r(o){Si.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",r(o.left),r(o.right)):o.operator||Object.values(o).forEach(s=>{s&&typeof s=="object"&&r(s)})}}};ys.plugins.register(i2,Si);ys.addUnaryOp("typeof");ys.addLiteral("null",null);ys.addLiteral("undefined",void 0);const c2=_1({String:_o.string,Number:_o.number,"True False":_o.bool,PropertyName:_o.propertyName,Null:_o.null,",":_o.separator,"[ ]":_o.squareBracket,"{ }":_o.brace}),u2=S1.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[c2],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),d2=E1.define({name:"json",parser:u2.configure({props:[O1.add({Object:ah({except:/^\s*\}/}),Array:ah({except:/^\s*\]/})}),ng.add({"Object Array":$1})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function f2(){return new C1(d2)}function v2(e,t=e.state){const r=new Set;for(const{from:o,to:s}of e.visibleRanges){let a=o;for(;a<=s;){const i=t.doc.lineAt(a);r.has(i)||r.add(i),a=i.to+1}}return r}function Tf(e){const t=e.selection.main.head;return e.doc.lineAt(t)}function qp(e,t){let r=0;e:for(let o=0;o<e.length;o++)switch(e[o]){case" ":case" ":{r+=1;continue e}case"	":{r+=t-r%t;continue e}case"\r":continue e;default:break e}return r}const Uu=P1.define({combine(e){return M1(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}});class h2{constructor(t,r,o,s){this.lines=t,this.state=r,this.map=new Map,this.unitWidth=o,this.markerType=s;for(const a of this.lines)this.add(a);this.state.facet(Uu).highlightActiveBlock&&this.findAndSetActiveLines()}has(t){return this.map.has(typeof t=="number"?t:t.number)}get(t){const r=this.map.get(typeof t=="number"?t:t.number);if(!r)throw new Error("Line not found in indentation map");return r}set(t,r,o){const s=!t.text.trim().length,a={line:t,col:r,level:o,empty:s};return this.map.set(a.line.number,a),a}add(t){if(this.has(t))return this.get(t);if(!t.length||!t.text.trim().length){if(t.number===1)return this.set(t,0,0);if(t.number===this.state.doc.lines){const i=this.closestNonEmpty(t,-1);return this.set(t,0,i.level)}const s=this.closestNonEmpty(t,-1),a=this.closestNonEmpty(t,1);return s.level>=a.level&&this.markerType!=="codeOnly"?this.set(t,0,s.level):s.empty&&s.level===0&&a.level!==0?this.set(t,0,0):a.level>s.level?this.set(t,0,s.level+1):this.set(t,0,a.level)}const r=qp(t.text,this.state.tabSize),o=Math.floor(r/this.unitWidth);return this.set(t,r,o)}closestNonEmpty(t,r){let o=t.number+r;for(;r===-1?o>=1:o<=this.state.doc.lines;){if(this.has(o)){const i=this.get(o);if(!i.empty)return i}const a=this.state.doc.line(o);if(a.text.trim().length){const i=qp(a.text,this.state.tabSize),l=Math.floor(i/this.unitWidth);return this.set(a,i,l)}o+=r}const s=this.state.doc.line(r===-1?1:this.state.doc.lines);return this.set(s,0,0)}findAndSetActiveLines(){const t=Tf(this.state);if(!this.has(t))return;let r=this.get(t);if(this.has(r.line.number+1)){const a=this.get(r.line.number+1);a.level>r.level&&(r=a)}if(this.has(r.line.number-1)){const a=this.get(r.line.number-1);a.level>r.level&&(r=a)}if(r.level===0)return;r.active=r.level;let o,s;for(o=r.line.number;o>1;o--){if(!this.has(o-1))continue;const a=this.get(o-1);if(a.level<r.level)break;a.active=r.level}for(s=r.line.number;s<this.state.doc.lines;s++){if(!this.has(s+1))continue;const a=this.get(s+1);if(a.level<r.level)break;a.active=r.level}}}function p2(e){const t={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"};let r=t;return e&&(r=Object.assign(Object.assign({},t),e)),Ds.baseTheme({"&light":{"--indent-marker-bg-color":r.light,"--indent-marker-active-bg-color":r.activeLight},"&dark":{"--indent-marker-bg-color":r.dark,"--indent-marker-active-bg-color":r.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function ou(e,t,r,o,s){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${r}ch)`} ${o*r}.5ch/calc(${r*s}ch - 1px) no-repeat`}function m2(e,t,r,o,s){const{level:a,active:i}=e;if(s=s??o,r&&a===0)return[];const l=r?1:0,c=[];if(i!==void 0){const d=i-l-1;d>0&&c.push(ou("--indent-marker-bg-color",o,t,l,d)),c.push(ou("--indent-marker-active-bg-color",s,t,i-1,1)),i!==a&&c.push(ou("--indent-marker-bg-color",o,t,i,a-i))}else c.push(ou("--indent-marker-bg-color",o,t,l,a-l));return c.join(",")}class g2{constructor(t){this.view=t,this.unitWidth=Tu(t.state),this.currentLineNumber=Tf(t.state).number,this.generate(t.state)}update(t){const r=Tu(t.state),o=r!==this.unitWidth;o&&(this.unitWidth=r);const s=Tf(t.state).number,a=s!==this.currentLineNumber;this.currentLineNumber=s;const i=t.state.facet(Uu).highlightActiveBlock&&a;(t.docChanged||t.viewportChanged||o||i)&&this.generate(t.state)}generate(t){const r=new og,o=v2(this.view,t),{hideFirstIndent:s,markerType:a,thickness:i,activeThickness:l}=t.facet(Uu),c=new h2(o,t,this.unitWidth,a);for(const d of o){const u=c.get(d.number);if(!u?.level)continue;const m=m2(u,this.unitWidth,s,i,l);r.add(d.from,d.from,ag.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${m}`}}))}this.decorations=r.finish()}}function b2(e={}){return[Uu.of(e),p2(e.colors),rg.fromClass(g2,{decorations:t=>t.decorations})]}var y2=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],j2=["mainAxis","crossAxis","limiter"];function Vg(e,t){if(e==null)return{};var r,o,s=(function(i,l){if(i==null)return{};var c={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(l.indexOf(d)!==-1)continue;c[d]=i[d]}return c})(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function zp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?zp(Object(r),!0).forEach(function(o){ca(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Ip(e,t,r,o,s,a,i){try{var l=e[a](i),c=l.value}catch(d){return void r(d)}l.done?t(c):Promise.resolve(c).then(o,s)}function jt(e){return function(){var t=this,r=arguments;return new Promise(function(o,s){var a=e.apply(t,r);function i(c){Ip(a,o,s,i,l,"next",c)}function l(c){Ip(a,o,s,i,l,"throw",c)}i(void 0)})}}function Bg(e,t){Wg(e,t),t.add(e)}function Wn(e,t,r){Wg(e,t),t.set(e,r)}function Wg(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function hn(e,t,r){return e.set(Ir(e,t),r),r}function Ae(e,t){return e.get(Ir(e,t))}function Ir(e,t,r){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}function ca(e,t,r){return(t=(function(o){var s=(function(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var c=l.call(a,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)})(o,"string");return typeof s=="symbol"?s:s+""})(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Dp,Zd,Lp,ef;typeof window<"u"&&((Zd=(Dp=(ef=(Lp=window).__svelte)!==null&&ef!==void 0?ef:Lp.__svelte={}).v)!==null&&Zd!==void 0?Zd:Dp.v=new Set).add("5");var rl=!1;rl=!0;var eo=Symbol(),w2=!1,Zl=Array.isArray,x2=Array.prototype.indexOf,Su=Array.from,k2=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Hg=Object.getOwnPropertyDescriptors,S2=Object.prototype,_2=Array.prototype,Cv=Object.getPrototypeOf,Up=Object.isExtensible;function kl(e){return typeof e=="function"}var C2=()=>{};function E2(e){return e()}function Af(e){for(var t=0;t<e.length;t++)e[t]()}function Kg(){var e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}var O2=1<<24,ol=16,bd=32,Jg=64,Ev=128,ea=512,to=1024,ta=2048,Wa=4096,ha=8192,al=16384,Ov=32768,Xs=65536,$2=1<<17,Qg=1<<18,Gg=1<<19,Oa=1<<25,Fu=32768,qf=1<<21,fs=1<<23,pa=Symbol("$state"),Yg=Symbol("legacy props"),P2=Symbol(""),Pi=new class extends Error{constructor(){super(...arguments),ca(this,"name","StaleReactionError"),ca(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function ec(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Xg(e){return e===this.v}function Zg(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function e0(e){return!Zg(e,this.v)}var Fn=null;function Hi(e){Fn=e}function _s(e){return t0().get(e)}function vt(e){Fn={p:Fn,i:!1,c:null,e:null,s:e,x:null,l:rl&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function ht(e){var t=Fn,r=t.e;if(r!==null)for(var o of(t.e=null,r))b0(o);return e!==void 0&&(t.x=e),t.i=!0,Fn=t.p,e??{}}function sl(){return!rl||Fn!==null&&Fn.l===null}function t0(e){var t,r;return Fn===null&&ec(),(r=(t=Fn).c)!==null&&r!==void 0?r:t.c=new Map((function(o){for(var s=o.p;s!==null;){var a=s.c;if(a!==null)return a;s=s.p}return null})(Fn)||void 0)}var Bs=[];function n0(){var e=Bs;Bs=[],Af(e)}function Zs(e){if(Bs.length===0&&!Tl){var t=Bs;queueMicrotask(()=>{t===Bs&&n0()})}Bs.push(e)}function M2(){for(;Bs.length>0;)n0()}function r0(e){var t=Mn;if(t===null)return Pn.f|=fs,e;if((t.f&Ov)===0){if((t.f&Ev)===0)throw e;t.b.error(e)}else Ki(e,t)}function Ki(e,t){for(;t!==null;){if((t.f&Ev)!==0)try{return void t.b.error(e)}catch(r){e=r}t=t.parent}throw e}var _u=new Set,Zn=null,Nl=null,Do=null,zo=[],yd=null,zf=!1,Tl=!1,Vu=new WeakMap,au=new WeakMap,Ls=new WeakMap,Us=new WeakMap,su=new WeakMap,Cu=new WeakMap,Eu=new WeakMap,Co=new WeakSet;class js{constructor(){Bg(this,Co),ca(this,"committed",!1),ca(this,"current",new Map),ca(this,"previous",new Map),Wn(this,Vu,new Set),Wn(this,au,new Set),Wn(this,Ls,0),Wn(this,Us,0),Wn(this,su,null),Wn(this,Cu,[]),Wn(this,Eu,[]),ca(this,"skipped_effects",new Set),ca(this,"is_fork",!1)}is_deferred(){return this.is_fork||Ae(Us,this)>0}process(t){zo=[],Nl=null,this.apply();var r,o={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var s of t)Ir(Co,this,o0).call(this,s,o);this.is_fork||Ir(Co,this,R2).call(this),this.is_deferred()?(Ir(Co,this,Ii).call(this,o.effects),Ir(Co,this,Ii).call(this,o.render_effects),Ir(Co,this,Ii).call(this,o.block_effects)):(Nl=this,Zn=null,Fp(o.render_effects),Fp(o.effects),Nl=null,(r=Ae(su,this))===null||r===void 0||r.resolve()),Do=null}capture(t,r){var o;this.previous.has(t)||this.previous.set(t,r),(t.f&fs)===0&&(this.current.set(t,t.v),(o=Do)===null||o===void 0||o.set(t,t.v))}activate(){Zn=this,this.apply()}deactivate(){Zn===this&&(Zn=null,Do=null)}flush(){if(this.activate(),zo.length>0){if(s0(),Zn!==null&&Zn!==this)return}else Ae(Ls,this)===0&&this.process([]);this.deactivate()}discard(){for(var t of Ae(au,this))t(this);Ae(au,this).clear()}increment(t){hn(Ls,this,Ae(Ls,this)+1),t&&hn(Us,this,Ae(Us,this)+1)}decrement(t){hn(Ls,this,Ae(Ls,this)-1),t&&hn(Us,this,Ae(Us,this)-1),this.revive()}revive(){for(var t of Ae(Cu,this))ro(t,ta),ei(t);for(var r of Ae(Eu,this))ro(r,Wa),ei(r);hn(Cu,this,[]),hn(Eu,this,[]),this.flush()}oncommit(t){Ae(Vu,this).add(t)}ondiscard(t){Ae(au,this).add(t)}settled(){var t;return((t=Ae(su,this))!==null&&t!==void 0?t:hn(su,this,Kg())).promise}static ensure(){if(Zn===null){var t=Zn=new js;_u.add(Zn),Tl||js.enqueue(()=>{Zn===t&&t.flush()})}return Zn}static enqueue(t){Zs(t)}apply(){}}function o0(e,t){e.f^=to;for(var r=e.first;r!==null;){var o,s=r.f,a=!!(96&s),i=a&&(s&to)!==0||(s&ha)!==0||this.skipped_effects.has(r);if((r.f&Ev)!==0&&(o=r.b)!==null&&o!==void 0&&o.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!i&&r.fn!==null){a?r.f^=to:4&s?t.effects.push(r):cl(r)&&((r.f&ol)!==0&&t.block_effects.push(r),Gi(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===t.effect&&(Ir(Co,this,Ii).call(this,t.effects),Ir(Co,this,Ii).call(this,t.render_effects),Ir(Co,this,Ii).call(this,t.block_effects),t=t.parent),r=c.next,c=c.parent}}function Ii(e){for(var t of e)((t.f&ta)!==0?Ae(Cu,this):Ae(Eu,this)).push(t),Ir(Co,this,a0).call(this,t.deps),ro(t,to)}function a0(e){if(e!==null)for(var t of e)2&t.f&&(t.f&Fu)!==0&&(t.f^=Fu,Ir(Co,this,a0).call(this,t.deps))}function R2(){if(Ae(Us,this)===0){for(var e of Ae(Vu,this))e();Ae(Vu,this).clear()}Ae(Ls,this)===0&&Ir(Co,this,N2).call(this)}function N2(){if(_u.size>1){this.previous.clear();var e=Do,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var o of _u)if(o!==this){var s=[];for(var[a,i]of this.current){if(o.current.has(a)){if(!t||i===o.current.get(a))continue;o.current.set(a,i)}s.push(a)}if(s.length!==0){var l=[...o.current.keys()].filter(w=>!this.current.has(w));if(l.length>0){var c=zo;zo=[];var d=new Set,u=new Map;for(var m of s)i0(m,l,d,u);if(zo.length>0){for(var b of(Zn=o,o.apply(),zo))Ir(Co,o,o0).call(o,b,r);o.deactivate()}zo=c}}}else t=!1;Zn=null,Do=e}this.committed=!0,_u.delete(this)}function Qn(e){var t=Tl;Tl=!0;try{for(;;){var r;if(M2(),zo.length===0&&((r=Zn)===null||r===void 0||r.flush(),zo.length===0))return void(yd=null);s0()}}finally{Tl=t}}function s0(){var e=Ks;zf=!0;try{var t=0;for(Bu(!0);zo.length>0;){var r=js.ensure();t++>1e3&&T2(),r.process(zo),vs.clear()}}finally{zf=!1,Bu(e),yd=null}}function T2(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){Ki(e,yd)}}var Pa=null;function Fp(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var o,s=e[r++];if(!(24576&s.f)&&cl(s)&&(Pa=new Set,Gi(s),s.deps===null&&s.first===null&&s.nodes===null&&(s.teardown===null&&s.ac===null?k0(s):s.fn=null),((o=Pa)===null||o===void 0?void 0:o.size)>0)){for(var a of(vs.clear(),Pa))if(!(24576&a.f)){for(var i=[a],l=a.parent;l!==null;)Pa.has(l)&&(Pa.delete(l),i.push(l)),l=l.parent;for(var c=i.length-1;c>=0;c--){var d=i[c];24576&d.f||Gi(d)}}Pa.clear()}}Pa=null}}function i0(e,t,r,o){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(var s of e.reactions){var a=s.f;2&a?i0(s,t,r,o):4194320&a&&(a&ta)===0&&l0(s,t,o)&&(ro(s,ta),ei(s))}}function l0(e,t,r){var o=r.get(e);if(o!==void 0)return o;if(e.deps!==null)for(var s of e.deps){if(t.includes(s))return!0;if(2&s.f&&l0(s,t,r))return r.set(s,!0),!0}return r.set(e,!1),!1}function ei(e){for(var t=yd=e;t.parent!==null;){var r=(t=t.parent).f;if(zf&&t===Mn&&(r&ol)!==0&&(r&Qg)===0)return;if(96&r){if((r&to)===0)return;t.f^=to}}zo.push(t)}var ns=new WeakMap,ls=new WeakMap,A2=new WeakMap,Fs=new WeakMap,tf=new WeakMap,ss=new WeakMap,rs=new WeakMap,Na=new WeakMap,Ya=new WeakMap,Hs=new WeakMap,Di=new WeakMap,hi=new WeakMap,Li=new WeakMap,Sl=new WeakMap,pi=new WeakMap,Vp=new WeakMap,Za=new WeakSet;class q2{constructor(t,r,o){var s,a,i,l;Bg(this,Za),ca(this,"parent",void 0),Wn(this,ns,!1),Wn(this,ls,void 0),Wn(this,A2,null),Wn(this,Fs,void 0),Wn(this,tf,void 0),Wn(this,ss,void 0),Wn(this,rs,null),Wn(this,Na,null),Wn(this,Ya,null),Wn(this,Hs,null),Wn(this,Di,null),Wn(this,hi,0),Wn(this,Li,0),Wn(this,Sl,!1),Wn(this,pi,null),Wn(this,Vp,(s=()=>(hn(pi,this,Ha(Ae(hi,this))),()=>{hn(pi,this,null)}),i=0,l=Ha(0),()=>{Il()&&(n(l),il(()=>(i===0&&(a=Z(()=>s(()=>Al(l)))),i+=1,()=>{Zs(()=>{var c;(i-=1)==0&&((c=a)===null||c===void 0||c(),a=void 0,Al(l))})})))})),hn(ls,this,t),hn(Fs,this,r),hn(tf,this,o),this.parent=Mn.b,hn(ns,this,!!Ae(Fs,this).pending),hn(ss,this,ll(()=>{Mn.b=this;var c=Ir(Za,this,z2).call(this);try{hn(rs,this,ma(()=>o(c)))}catch(d){this.error(d)}return Ae(Li,this)>0?Ir(Za,this,Wp).call(this):hn(ns,this,!1),()=>{var d;(d=Ae(Di,this))===null||d===void 0||d.remove()}},589952))}is_pending(){return Ae(ns,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!Ae(Fs,this).pending}update_pending_count(t){Ir(Za,this,c0).call(this,t),hn(hi,this,Ae(hi,this)+t),Ae(pi,this)&&Ji(Ae(pi,this),Ae(hi,this))}get_effect_pending(){return Ae(Vp,this).call(this),n(Ae(pi,this))}error(t){var r=Ae(Fs,this).onerror,o=Ae(Fs,this).failed;if(Ae(Sl,this)||!r&&!o)throw t;Ae(rs,this)&&(no(Ae(rs,this)),hn(rs,this,null)),Ae(Na,this)&&(no(Ae(Na,this)),hn(Na,this,null)),Ae(Ya,this)&&(no(Ae(Ya,this)),hn(Ya,this,null));var s=!1,a=!1,i=()=>{s?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(s=!0,a&&(function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")})(),js.ensure(),hn(hi,this,0),Ae(Ya,this)!==null&&Qi(Ae(Ya,this),()=>{hn(Ya,this,null)}),hn(ns,this,this.has_pending_snippet()),hn(rs,this,Ir(Za,this,Bp).call(this,()=>(hn(Sl,this,!1),ma(()=>Ae(tf,this).call(this,Ae(ls,this)))))),Ae(Li,this)>0?Ir(Za,this,Wp).call(this):hn(ns,this,!1))},l=Pn;try{bo(null),a=!0,r?.(t,i),a=!1}catch(c){Ki(c,Ae(ss,this)&&Ae(ss,this).parent)}finally{bo(l)}o&&Zs(()=>{hn(Ya,this,Ir(Za,this,Bp).call(this,()=>{js.ensure(),hn(Sl,this,!0);try{return ma(()=>{o(Ae(ls,this),()=>t,()=>i)})}catch(c){return Ki(c,Ae(ss,this).parent),null}finally{hn(Sl,this,!1)}}))})}}function z2(){var e=Ae(ls,this);return Ae(ns,this)&&(hn(Di,this,hs()),Ae(ls,this).before(Ae(Di,this)),e=Ae(Di,this)),e}function Bp(e){var t=Mn,r=Pn,o=Fn;Uo(Ae(ss,this)),bo(Ae(ss,this)),Hi(Ae(ss,this).ctx);try{return e()}catch(s){return r0(s),null}finally{Uo(t),bo(r),Hi(o)}}function Wp(){var e=Ae(Fs,this).pending;Ae(rs,this)!==null&&(hn(Hs,this,document.createDocumentFragment()),Ae(Hs,this).append(Ae(Di,this)),C0(Ae(rs,this),Ae(Hs,this))),Ae(Na,this)===null&&hn(Na,this,ma(()=>e(Ae(ls,this))))}function c0(e){var t;this.has_pending_snippet()?(hn(Li,this,Ae(Li,this)+e),Ae(Li,this)===0&&(hn(ns,this,!1),Ae(Na,this)&&Qi(Ae(Na,this),()=>{hn(Na,this,null)}),Ae(Hs,this)&&(Ae(ls,this).before(Ae(Hs,this)),hn(Hs,this,null)))):this.parent&&Ir(Za,t=this.parent,c0).call(t,e)}function u0(e,t,r,o){var s=sl()?tc:nt;if(r.length!==0||e.length!==0){var a=Zn,i=Mn,l=(function(){var d=Mn,u=Pn,m=Fn,b=Zn;return function(){var w=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];Uo(d),bo(u),Hi(m),w&&b?.activate()}})();e.length>0?Promise.all(e).then(()=>{l();try{return c()}finally{a?.deactivate(),iu()}}):c()}else o(t.map(s));function c(){Promise.all(r.map(d=>(function(u){var m=Mn;m===null&&(function(){throw new Error("https://svelte.dev/e/async_derived_orphan")})();var b=m.b,w=void 0,p=Ha(eo),y=!Pn,v=new Map;return(function(h){oa(4718592,h,!0)})(()=>{var h=Kg();w=h.promise;try{Promise.resolve(u()).then(h.resolve,h.reject).then(()=>{f===Zn&&f.committed&&f.deactivate(),iu()})}catch(k){h.reject(k),iu()}var f=Zn;if(y){var g,x=!b.is_pending();b.update_pending_count(1),f.increment(x),(g=v.get(f))===null||g===void 0||g.reject(Pi),v.delete(f),v.set(f,h)}var j=function(k){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(f.activate(),C)C!==Pi&&(p.f|=fs,Ji(p,C));else for(var[T,R]of((p.f&fs)!==0&&(p.f^=fs),Ji(p,k),v)){if(v.delete(T),T===f)break;R.reject(Pi)}y&&(b.update_pending_count(-1),f.decrement(x))};h.promise.then(j,k=>j(null,k||"unknown"))}),wd(()=>{for(var h of v.values())h.reject(Pi)}),new Promise(h=>{function f(g){function x(){g===w?h(p):f(w)}g.then(x,x)}f(w)})})(d))).then(d=>{l();try{o([...t.map(s),...d])}catch(u){(i.f&al)===0&&Ki(u,i)}a?.deactivate(),iu()}).catch(d=>{Ki(d,i)})}}function iu(){Uo(null),bo(null),Hi(null)}function tc(e){var t=Pn!==null&&2&Pn.f?Pn:null;return Mn!==null&&(Mn.f|=Gg),{ctx:Fn,deps:null,effects:null,equals:Xg,f:2050,fn:e,reactions:null,rv:0,v:eo,wv:0,parent:t??Mn,ac:null}}function ho(e){var t=tc(e);return E0(t),t}function nt(e){var t=tc(e);return t.equals=e0,t}function d0(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)no(t[r])}}function $v(e){var t,r=Mn;Uo((function(o){for(var s=o.parent;s!==null;){if(!(2&s.f))return(s.f&al)===0?s:null;s=s.parent}return null})(e));try{e.f&=-32769,d0(e),t=M0(e)}finally{Uo(r)}return t}function f0(e){var t,r,o=$v(e);e.equals(o)||((t=Zn)!==null&&t!==void 0&&t.is_fork||(e.v=o),e.wv=$0()),ii||(Do!==null?(Il()||(r=Zn)!==null&&r!==void 0&&r.is_fork)&&Do.set(e,o):ro(e,(e.f&ea)===0?Wa:to))}var La,v0,h0,p0,nf=new Set,vs=new Map,Hp=!1;function Ha(e,t){return{f:0,v:e,reactions:null,equals:Xg,rv:0,wv:0}}function $a(e,t){var r=Ha(e);return E0(r),r}function K(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=Ha(e);return o||(a.equals=e0),rl&&s&&Fn!==null&&Fn.l!==null&&((r=(t=Fn.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function Oo(e,t){return S(e,Z(()=>n(e))),t}function S(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Pn===null||da&&(Pn.f&$2)===0||!sl()||!(4325394&Pn.f)||(r=Ua)!==null&&r!==void 0&&r.includes(e)||(function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")})(),Ji(e,o?Mi(t):t)}function Ji(e,t){if(!e.equals(t)){var r=e.v;ii?vs.set(e,t):vs.set(e,r),e.v=t;var o=js.ensure();o.capture(e,r),2&e.f&&((e.f&ta)!==0&&$v(e),ro(e,(e.f&ea)!==0?to:Wa)),e.wv=$0(),m0(e,ta),!sl()||Mn===null||(Mn.f&to)===0||96&Mn.f||(No===null?(function(s){No=s})([e]):No.push(e)),!o.is_fork&&nf.size>0&&!Hp&&(function(){Hp=!1;var s=Ks;Bu(!0);var a=Array.from(nf);try{for(var i of a)(i.f&to)!==0&&ro(i,Wa),cl(i)&&Gi(i)}finally{Bu(s)}nf.clear()})()}return t}function Kp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return S(e,r),o}function Al(e){S(e,e.v+1)}function m0(e,t){var r=e.reactions;if(r!==null)for(var o=sl(),s=r.length,a=0;a<s;a++){var i=r[a],l=i.f;if(o||i!==Mn){var c=(l&ta)===0;if(c&&ro(i,t),2&l){var d,u=i;(d=Do)===null||d===void 0||d.delete(u),(l&Fu)===0&&(l&ea&&(i.f|=Fu),m0(u,Wa))}else c&&((l&ol)!==0&&Pa!==null&&Pa.add(i),ei(i))}}}function Mi(e){if(typeof e!="object"||e===null||pa in e)return e;var t=Cv(e);if(t!==S2&&t!==_2)return e;var r=new Map,o=Zl(e),s=$a(0),a=Js,i=l=>{if(Js===a)return l();var c=Pn,d=Js;bo(null),Yp(a);var u=l();return bo(c),Yp(d),u};return o&&r.set("length",$a(e.length)),new Proxy(e,{defineProperty(l,c,d){"value"in d&&d.configurable!==!1&&d.enumerable!==!1&&d.writable!==!1||(function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")})();var u=r.get(c);return u===void 0?u=i(()=>{var m=$a(d.value);return r.set(c,m),m}):S(u,d.value,!0),!0},deleteProperty(l,c){var d=r.get(c);if(d===void 0){if(c in l){var u=i(()=>$a(eo));r.set(c,u),Al(s)}}else S(d,eo),Al(s);return!0},get(l,c,d){var u;if(c===pa)return e;var m=r.get(c),b=c in l;if(m===void 0&&(!b||(u=Da(l,c))!==null&&u!==void 0&&u.writable)&&(m=i(()=>$a(Mi(b?l[c]:eo))),r.set(c,m)),m!==void 0){var w=n(m);return w===eo?void 0:w}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var u=r.get(c);u&&(d.value=n(u))}else if(d===void 0){var m=r.get(c),b=m?.v;if(m!==void 0&&b!==eo)return{enumerable:!0,configurable:!0,value:b,writable:!0}}return d},has(l,c){var d;if(c===pa)return!0;var u=r.get(c),m=u!==void 0&&u.v!==eo||Reflect.has(l,c);return(u!==void 0||Mn!==null&&(!m||(d=Da(l,c))!==null&&d!==void 0&&d.writable))&&(u===void 0&&(u=i(()=>$a(m?Mi(l[c]):eo)),r.set(c,u)),n(u)===eo)?!1:m},set(l,c,d,u){var m,b=r.get(c),w=c in l;if(o&&c==="length")for(var p=d;p<b.v;p+=1){var y=r.get(p+"");y!==void 0?S(y,eo):p in l&&(y=i(()=>$a(eo)),r.set(p+"",y))}b===void 0?(!w||(m=Da(l,c))!==null&&m!==void 0&&m.writable)&&(S(b=i(()=>$a(void 0)),Mi(d)),r.set(c,b)):(w=b.v!==eo,S(b,i(()=>Mi(d))));var v=Reflect.getOwnPropertyDescriptor(l,c);if(v!=null&&v.set&&v.set.call(u,d),!w){if(o&&typeof c=="string"){var h=r.get("length"),f=Number(c);Number.isInteger(f)&&f>=h.v&&S(h,f+1)}Al(s)}return!0},ownKeys(l){n(s);var c=Reflect.ownKeys(l).filter(m=>{var b=r.get(m);return b===void 0||b.v!==eo});for(var[d,u]of r)u.v===eo||d in l||c.push(d);return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function Jp(e){try{if(e!==null&&typeof e=="object"&&pa in e)return e[pa]}catch{}return e}function I2(e,t){return Object.is(Jp(e),Jp(t))}function hs(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function $o(e){return h0.call(e)}function nc(e){return p0.call(e)}function H(e,t){return $o(e)}function tt(e){var t=$o(e);return t instanceof Comment&&t.data===""?nc(t):t}function se(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=nc(r);return r}var Qp=!1;function jd(e){var t=Pn,r=Mn;bo(null),Uo(null);try{return e()}finally{bo(t),Uo(r)}}function D2(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>jd(r));var s=e.__on_r;e.__on_r=s?()=>{s(),o(!0)}:()=>o(!0),Qp||(Qp=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{if(!a.defaultPrevented)for(var i of a.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}function g0(e){Mn===null&&(Pn===null&&(function(){throw new Error("https://svelte.dev/e/effect_orphan")})(),(function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")})()),ii&&(function(){throw new Error("https://svelte.dev/e/effect_in_teardown")})()}function oa(e,t,r){var o=Mn;o!==null&&(o.f&ha)!==0&&(e|=ha);var s={ctx:Fn,deps:null,nodes:null,f:e|ta|ea,first:null,fn:t,last:null,next:null,parent:o,b:o&&o.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{Gi(s),s.f|=Ov}catch(c){throw no(s),c}else t!==null&&ei(s);var a=s;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Gg)===0&&(a=a.first,(e&ol)!==0&&(e&Xs)!==0&&a!==null&&(a.f|=Xs)),a!==null&&(a.parent=o,o!==null&&(function(c,d){var u=d.last;u===null?d.last=d.first=c:(u.next=c,c.prev=u,d.last=c)})(a,o),Pn!==null&&2&Pn.f&&(e&Jg)===0)){var i,l=Pn;((i=l.effects)!==null&&i!==void 0?i:l.effects=[]).push(a)}return s}function Il(){return Pn!==null&&!da}function wd(e){var t=oa(8,null,!1);return ro(t,to),t.teardown=e,t}function If(e){g0();var t=Mn.f;if(!(!Pn&&(t&bd)!==0&&(t&Ov)===0))return b0(e);var r,o=Fn;((r=o.e)!==null&&r!==void 0?r:o.e=[]).push(e)}function b0(e){return oa(1048580,e,!1)}function Qr(e){return oa(4,e,!1)}function fe(e,t){var r={effect:null,ran:!1,deps:e};Fn.l.$.push(r),r.effect=il(()=>{e(),r.ran||(r.ran=!0,Z(t))})}function xn(){var e=Fn;il(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&to)!==0&&ro(r,Wa),cl(r)&&Gi(r),t.ran=!1}})}function il(e){return oa(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Le(e){u0(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{oa(8,()=>e(...t.map(n)),!0)})}function ll(e){return oa(ol|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function y0(e){return oa(O2|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function ma(e){return oa(524320,e,!0)}function j0(e){var t=e.teardown;if(t!==null){var r=ii,o=Pn;Gp(!0),bo(null);try{t.call(null)}finally{Gp(r),bo(o)}}}function w0(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;e.first=e.last=null;for(var o,s=function(){var a=r.ac;a!==null&&jd(()=>{a.abort(Pi)}),o=r.next,(r.f&Jg)!==0?r.parent=null:no(r,t),r=o};r!==null;)s()}function no(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;!t&&(e.f&Qg)===0||e.nodes===null||e.nodes.end===null||(x0(e.nodes.start,e.nodes.end),r=!0),w0(e,t&&!r),Wu(e,0),ro(e,al);var o=e.nodes&&e.nodes.t;if(o!==null)for(var s of o)s.stop();j0(e);var a=e.parent;a!==null&&a.first!==null&&k0(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function x0(e,t){for(;e!==null;){var r=e===t?null:nc(e);e.remove(),e=r}}function k0(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function Qi(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];S0(e,o,!0);var s=()=>{r&&no(e),t&&t()},a=o.length;if(a>0){var i=()=>--a||s();for(var l of o)l.out(i)}else s()}function S0(e,t,r){if((e.f&ha)===0){e.f^=ha;var o=e.nodes&&e.nodes.t;if(o!==null)for(var s of o)(s.is_global||r)&&t.push(s);for(var a=e.first;a!==null;){var i=a.next;S0(a,t,((a.f&Xs)!==0||(a.f&bd)!==0&&(e.f&ol)!==0)&&r),a=i}}}function Df(e){_0(e,!0)}function _0(e,t){if((e.f&ha)!==0){e.f^=ha,(e.f&to)===0&&(ro(e,ta),ei(e));for(var r=e.first;r!==null;){var o=r.next;_0(r,((r.f&Xs)!==0||(r.f&bd)!==0)&&t),r=o}var s=e.nodes&&e.nodes.t;if(s!==null)for(var a of s)(a.is_global||t)&&a.in()}}function C0(e,t){if(e.nodes)for(var r=e.nodes.start,o=e.nodes.end;r!==null;){var s=r===o?null:nc(r);t.append(r),r=s}}var L2=null,Ks=!1;function Bu(e){Ks=e}var ii=!1;function Gp(e){ii=e}var Pn=null,da=!1;function bo(e){Pn=e}var Mn=null;function Uo(e){Mn=e}var Ua=null;function E0(e){Pn!==null&&(Ua===null?Ua=[e]:Ua.push(e))}var uo=null,So=0,No=null,O0=1,Dl=0,Js=Dl;function Yp(e){Js=e}function $0(){return++O0}function cl(e){var t=e.f;if((t&ta)!==0)return!0;if(2&t&&(e.f&=-32769),(t&Wa)!==0){var r=e.deps;if(r!==null)for(var o=r.length,s=0;s<o;s++){var a=r[s];if(cl(a)&&f0(a),a.wv>e.wv)return!0}(t&ea)!==0&&Do===null&&ro(e,to)}return!1}function P0(e,t){var r,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],s=e.reactions;if(s!==null&&((r=Ua)===null||r===void 0||!r.includes(e)))for(var a=0;a<s.length;a++){var i=s[a];2&i.f?P0(i,t,!1):t===i&&(o?ro(i,ta):(i.f&to)!==0&&ro(i,Wa),ei(i))}}function M0(e){var t=uo,r=So,o=No,s=Pn,a=Ua,i=Fn,l=da,c=Js,d=e.f;uo=null,So=0,No=null,Pn=96&d?null:e,Ua=null,Hi(e.ctx),da=!1,Js=++Dl,e.ac!==null&&(jd(()=>{e.ac.abort(Pi)}),e.ac=null);try{e.f|=qf;var u=(0,e.fn)(),m=e.deps;if(uo!==null){var b;if(Wu(e,So),m!==null&&So>0)for(m.length=So+uo.length,b=0;b<uo.length;b++)m[So+b]=uo[b];else e.deps=m=uo;if(Il()&&(e.f&ea)!==0)for(b=So;b<m.length;b++){var w,p;((p=(w=m[b]).reactions)!==null&&p!==void 0?p:w.reactions=[]).push(e)}}else m!==null&&So<m.length&&(Wu(e,So),m.length=So);if(sl()&&No!==null&&!da&&m!==null&&!(6146&e.f))for(b=0;b<No.length;b++)P0(No[b],e);return s!==null&&s!==e&&(Dl++,No!==null&&(o===null?o=No:o.push(...No))),(e.f&fs)!==0&&(e.f^=fs),u}catch(y){return r0(y)}finally{e.f^=qf,uo=t,So=r,No=o,Pn=s,Ua=a,Hi(i),da=l,Js=c}}function U2(e,t){var r=t.reactions;if(r!==null){var o=x2.call(r,e);if(o!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[o]=r[s],r.pop())}}r===null&&2&t.f&&(uo===null||!uo.includes(t))&&(ro(t,Wa),(t.f&ea)!==0&&(t.f^=ea,t.f&=-32769),d0(t),Wu(t,0))}function Wu(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)U2(e,r[o])}function Gi(e){var t=e.f;if((t&al)===0){ro(e,to);var r=Mn,o=Ks;Mn=e,Ks=!0;try{16777232&t?(function(a){for(var i=a.first;i!==null;){var l=i.next;(i.f&bd)===0&&no(i),i=l}})(e):w0(e),j0(e);var s=M0(e);e.teardown=typeof s=="function"?s:null,e.wv=O0}finally{Ks=o,Mn=r}}}function R0(){return N0.apply(this,arguments)}function N0(){return(N0=jt(function*(){yield Promise.resolve(),Qn()})).apply(this,arguments)}function n(e){var t,r,o,s,a,i=!!(2&e.f);if((t=L2)===null||t===void 0||t.add(e),Pn!==null&&!da&&!(Mn!==null&&(Mn.f&al)!==0||(a=Ua)!==null&&a!==void 0&&a.includes(e))){var l=Pn.deps;if((Pn.f&qf)!==0)e.rv<Dl&&(e.rv=Dl,uo===null&&l!==null&&l[So]===e?So++:uo===null?uo=[e]:uo.includes(e)||uo.push(e));else{var c,d;((d=(c=Pn).deps)!==null&&d!==void 0?d:c.deps=[]).push(e);var u=e.reactions;u===null?e.reactions=[Pn]:u.includes(Pn)||u.push(Pn)}}if(ii){if(vs.has(e))return vs.get(e);if(i){var m=e,b=m.v;return((m.f&to)===0&&m.reactions!==null||A0(m))&&(b=$v(m)),vs.set(m,b),b}}else i&&((r=Do)===null||r===void 0||!r.has(e)||(o=Zn)!==null&&o!==void 0&&o.is_fork&&!Il())&&(cl(m=e)&&f0(m),Ks&&Il()&&(m.f&ea)===0&&T0(m));if((s=Do)!==null&&s!==void 0&&s.has(e))return Do.get(e);if((e.f&fs)!==0)throw e.v;return e.v}function T0(e){if(e.deps!==null)for(var t of(e.f^=ea,e.deps)){var r;((r=t.reactions)!==null&&r!==void 0?r:t.reactions=[]).push(e),2&t.f&&(t.f&ea)===0&&T0(t)}}function A0(e){if(e.v===eo)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(vs.has(t)||2&t.f&&A0(t))return!0;return!1}function Z(e){var t=da;try{return da=!0,e()}finally{da=t}}var F2=-7169;function ro(e,t){e.f=e.f&F2|t}function E(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(pa in e)Lf(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&pa in r&&Lf(r)}}}function Lf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{Lf(e[r],t)}catch{}var o=Cv(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var s=Hg(o);for(var a in s){var i=s[a].get;if(i)try{i.call(e)}catch{}}}}}var q0=new Set,Uf=new Set;function z0(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function s(a){if(o.capture||$l.call(t,a),!a.cancelBubble)return jd(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Zs(()=>{t.addEventListener(e,s,o)}):t.addEventListener(e,s,o),s}function Te(e,t,r,o,s){var a={capture:o,passive:s},i=z0(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&wd(()=>{t.removeEventListener(e,i,a)})}function rc(e){for(var t=0;t<e.length;t++)q0.add(e[t]);for(var r of Uf)r(e)}function $l(e){var t,r=this,o=r.ownerDocument,s=e.type,a=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=a[0]||e.target,l=0,c=e===e&&e.__root;if(c){var d=a.indexOf(c);if(d!==-1&&(r===document||r===window))return void(e.__root=r);var u=a.indexOf(r);if(u===-1)return;d<=u&&(l=d)}if((i=a[l]||e.target)!==r){k2(e,"currentTarget",{configurable:!0,get:()=>i||o});var m=Pn,b=Mn;bo(null),Uo(null);try{for(var w,p=[];i!==null;){var y=i.assignedSlot||i.parentNode||i.host||null;try{var v=i["__"+s];v==null||i.disabled&&e.target!==i||v.call(i,e)}catch(g){w?p.push(g):w=g}if(e.cancelBubble||y===r||y===null)break;i=y}if(w){var h=function(g){queueMicrotask(()=>{throw g})};for(var f of p)h(f);throw w}}finally{e.__root=r,delete e.currentTarget,bo(m),Uo(b)}}}function Pv(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function ti(e,t){var r=Mn;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function he(e,t){var r,o=!!(1&t),s=!!(2&t),a=!e.startsWith("<!>");return()=>{r===void 0&&(r=Pv(a?e:"<!>"+e),o||(r=$o(r)));var i=s||v0?document.importNode(r,!0):r.cloneNode(!0);return o?ti($o(i),i.lastChild):ti(i,i),i}}function Cs(e,t){return(function(r,o){var s,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",i=!r.startsWith("<!>"),l=!!(1&o),c="<".concat(a,">").concat(i?r:"<!>"+r,"</").concat(a,">");return()=>{if(!s){var d=$o(Pv(c));if(l)for(s=document.createDocumentFragment();$o(d);)s.appendChild($o(d));else s=$o(d)}var u=s.cloneNode(!0);return l?ti($o(u),u.lastChild):ti(u,u),u}})(e,t,"svg")}function Br(){var e=hs((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return ti(e,e),e}function Ut(){var e=document.createDocumentFragment(),t=document.createComment(""),r=hs();return e.append(t,r),ti(t,r),e}function B(e,t){e!==null&&e.before(t)}var V2=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],B2={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},W2=["touchstart","touchmove"];function H2(e){return W2.includes(e)}function pt(e,t){var r,o=t==null?"":typeof t=="object"?t+"":t;o!==((r=e.__t)!==null&&r!==void 0?r:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function K2(e,t){return(function(r,o){var{target:s,anchor:a,props:i={},events:l,context:c}=o;(function(){if(La===void 0){La=window,v0=/Firefox/.test(navigator.userAgent);var w=Element.prototype,p=Node.prototype,y=Text.prototype;h0=Da(p,"firstChild").get,p0=Da(p,"nextSibling").get,Up(w)&&(w.__click=void 0,w.__className=void 0,w.__attributes=null,w.__style=void 0,w.__e=void 0),Up(y)&&(y.__t=void 0)}})();var d=new Set,u=w=>{for(var p=0;p<w.length;p++){var y=w[p];if(!d.has(y)){d.add(y);var v=H2(y);s.addEventListener(y,$l,{passive:v});var h=mi.get(y);h===void 0?(document.addEventListener(y,$l,{passive:v}),mi.set(y,1)):mi.set(y,h+1)}}};u(Su(q0)),Uf.add(u);var m=void 0,b=(function(w){js.ensure();var p=oa(524352,w,!0);return function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(v=>{y.outro?Qi(p,()=>{no(p),v(void 0)}):(no(p),v(void 0))})}})(()=>{var w=a??s.appendChild(hs());return(function(p,y,v){new q2(p,y,v)})(w,{pending:()=>{}},p=>{c&&(vt({}),Fn.c=c),l&&(i.$$events=l),m=r(p,i)||{},c&&ht()}),()=>{for(var p of d){s.removeEventListener(p,$l);var y=mi.get(p);--y===0?(document.removeEventListener(p,$l),mi.delete(p)):mi.set(p,y)}var v;Uf.delete(u),w!==a&&((v=w.parentNode)===null||v===void 0||v.removeChild(w))}});return Ff.set(m,b),m})(e,t)}var mi=new Map,Ff=new WeakMap,gi,Ca=new WeakMap,qs=new WeakMap,Ea=new WeakMap,_l=new WeakMap,rf=new WeakMap,Xp=new WeakMap,J2=new WeakMap;class xd{constructor(t){var r=this,o=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];ca(this,"anchor",void 0),Wn(this,Ca,new Map),Wn(this,qs,new Map),Wn(this,Ea,new Map),Wn(this,_l,new Set),Wn(this,rf,!0),Wn(this,Xp,()=>{var s=Zn;if(Ae(Ca,this).has(s)){var a=Ae(Ca,this).get(s),i=Ae(qs,this).get(a);if(i)Df(i),Ae(_l,this).delete(a);else{var l=Ae(Ea,this).get(a);l&&(Ae(qs,this).set(a,l.effect),Ae(Ea,this).delete(a),l.fragment.lastChild.remove(),this.anchor.before(l.fragment),i=l.effect)}for(var[c,d]of Ae(Ca,this)){if(Ae(Ca,this).delete(c),c===s)break;var u=Ae(Ea,this).get(d);u&&(no(u.effect),Ae(Ea,this).delete(d))}var m=function(p,y){if(p===a||Ae(_l,r).has(p))return 1;var v=()=>{if(Array.from(Ae(Ca,r).values()).includes(p)){var h=document.createDocumentFragment();C0(y,h),h.append(hs()),Ae(Ea,r).set(p,{effect:y,fragment:h})}else no(y);Ae(_l,r).delete(p),Ae(qs,r).delete(p)};Ae(rf,r)||!i?(Ae(_l,r).add(p),Qi(y,v,!1)):v()};for(var[b,w]of Ae(qs,this))m(b,w)}}),Wn(this,J2,s=>{Ae(Ca,this).delete(s);var a=Array.from(Ae(Ca,this).values());for(var[i,l]of Ae(Ea,this))a.includes(i)||(no(l.effect),Ae(Ea,this).delete(i))}),this.anchor=t,hn(rf,this,o)}ensure(t,r){var o=Zn;!r||Ae(qs,this).has(t)||Ae(Ea,this).has(t)||Ae(qs,this).set(t,ma(()=>r(this.anchor))),Ae(Ca,this).set(o,t),Ae(Xp,this).call(this)}}function oo(e){Fn===null&&ec(),rl&&Fn.l!==null?I0(Fn).m.push(e):If(()=>{var t=Z(e);if(typeof t=="function")return t})}function Fo(e){Fn===null&&ec(),oo(()=>()=>Z(e))}function Q2(){var e=Fn;return e===null&&ec(),(t,r,o)=>{var s,a=(s=e.s.$$events)===null||s===void 0?void 0:s[t];if(a){var i=Zl(a)?a.slice():[a],l=(function(d,u){var{bubbles:m=!1,cancelable:b=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(d,{detail:u,bubbles:m,cancelable:b})})(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function G2(e){Fn===null&&ec(),Fn.l===null&&(function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")})(),I0(Fn).b.push(e)}function I0(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}function je(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=new xd(e);function s(a,i){o.ensure(a,i)}ll(()=>{var a=!1;t(function(i){a=!0,s(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i)}),a||s(!1,null)},r?Xs:0)}function D0(e,t,r){var o=new xd(e),s=!sl();ll(()=>{var a=t();s&&a!==null&&typeof a=="object"&&(a={}),o.ensure(a,r)})}function _r(e,t){return t}function of(e){for(var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=0;r<e.length;r++)no(e[r],t)}function pr(e,t,r,o,s){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l=new Map;!(4&t)||(i=e.appendChild(hs()));var c,d=null,u=nt(()=>{var y=r();return Zl(y)?y:y==null?[]:Su(y)}),m=!0;function b(){p.fallback=d,(function(y,v,h,f,g){var x,j,k,C,T,R=!!(8&f),ne=v.length,ee=y.items,F=y.effect.first,te=null,ye=[],W=[];if(R)for(T=0;T<ne;T+=1){var we;k=g(v[T],T),((C=ee.get(k).e).f&Oa)===0&&((we=C.nodes)===null||we===void 0||(we=we.a)===null||we===void 0||we.measure(),(j??(j=new Set)).add(C))}for(T=0;T<ne;T+=1){if(k=g(v[T],T),C=ee.get(k).e,y.outrogroups!==null)for(var Re of y.outrogroups)Re.pending.delete(C),Re.done.delete(C);if((C.f&Oa)!==0){if(C.f^=Oa,C!==F){var Ee=te?te.next:F;C===y.effect.last&&(y.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),Xa(y,te,C),Xa(y,C,Ee),Cl(C,Ee,h),ye=[],W=[],F=(te=C).next;continue}Cl(C,null,h)}var ge;if((C.f&ha)!==0&&(Df(C),R&&((ge=C.nodes)===null||ge===void 0||(ge=ge.a)===null||ge===void 0||ge.unfix(),(j??(j=new Set)).delete(C))),C!==F){if(x!==void 0&&x.has(C)){if(ye.length<W.length){var Q,L=W[0];te=L.prev;var le=ye[0],A=ye[ye.length-1];for(Q=0;Q<ye.length;Q+=1)Cl(ye[Q],L,h);for(Q=0;Q<W.length;Q+=1)x.delete(W[Q]);Xa(y,le.prev,A.next),Xa(y,te,le),Xa(y,A,L),F=L,te=A,T-=1,ye=[],W=[]}else x.delete(C),Cl(C,F,h),Xa(y,C.prev,C.next),Xa(y,C,te===null?y.effect.first:te.next),Xa(y,te,C),te=C;continue}for(ye=[],W=[];F!==null&&F!==C;)(x??(x=new Set)).add(F),W.push(F),F=F.next;if(F===null)continue}(C.f&Oa)===0&&ye.push(C),te=C,F=C.next}if(y.outrogroups!==null){for(var O of y.outrogroups){var M;O.pending.size===0&&(of(Su(O.done)),(M=y.outrogroups)===null||M===void 0||M.delete(O))}y.outrogroups.size===0&&(y.outrogroups=null)}if(F!==null||x!==void 0){var re=[];if(x!==void 0)for(C of x)(C.f&ha)===0&&re.push(C);for(;F!==null;)(F.f&ha)===0&&F!==y.fallback&&re.push(F),F=F.next;var Oe=re.length;if(Oe>0){var ae=4&f&&ne===0?h:null;if(R){for(T=0;T<Oe;T+=1){var J;(J=re[T].nodes)===null||J===void 0||(J=J.a)===null||J===void 0||J.measure()}for(T=0;T<Oe;T+=1){var pe;(pe=re[T].nodes)===null||pe===void 0||(pe=pe.a)===null||pe===void 0||pe.fix()}}(function($,I,D){for(var ce,G=I.length,V=I.length,rt=function(){var it=I[ot];Qi(it,()=>{if(ce){if(ce.pending.delete(it),ce.done.add(it),ce.pending.size===0){var Ve=$.outrogroups;of(Su(ce.done)),Ve.delete(ce),Ve.size===0&&($.outrogroups=null)}}else V-=1},!1)},ot=0;ot<G;ot++)rt();if(V===0){var Ce=D!==null;if(Ce){var lt=D,qe=lt.parentNode;qe.textContent="",qe.append(lt),$.items.clear()}of(I,!Ce)}else{var He;ce={pending:new Set(I),done:new Set},((He=$.outrogroups)!==null&&He!==void 0?He:$.outrogroups=new Set).add(ce)}})(y,re,ae)}}R&&Zs(()=>{if(j!==void 0)for(C of j){var $;($=C.nodes)===null||$===void 0||($=$.a)===null||$===void 0||$.apply()}})})(p,c,i,t,o),d!==null&&(c.length===0?(d.f&Oa)===0?Df(d):(d.f^=Oa,Cl(d,null,i)):Qi(d,()=>{d=null}))}var w=ll(()=>{for(var y=(c=n(u)).length,v=new Set,h=0;h<y;h+=1){var f=c[h],g=o(f,h),x=m?null:l.get(g);x?(x.v&&Ji(x.v,f),x.i&&Ji(x.i,h)):(x=Y2(l,m?i:gi??(gi=hs()),f,g,h,s,t,r),m||(x.e.f|=Oa),l.set(g,x)),v.add(g)}y===0&&a&&!d&&(m?d=ma(()=>a(i)):(d=ma(()=>a(gi??(gi=hs())))).f|=Oa),m||b(),n(u)}),p={effect:w,items:l,outrogroups:null,fallback:d};m=!1}function Y2(e,t,r,o,s,a,i,l){var c=1&i?16&i?Ha(r):K(r,!1,!1):null,d=2&i?Ha(s):null;return{v:c,i:d,e:ma(()=>(a(t,c??r,d??s,l),()=>{e.delete(o)}))}}function Cl(e,t,r){if(e.nodes)for(var o=e.nodes.start,s=e.nodes.end,a=t&&(t.f&Oa)===0?t.nodes.start:r;o!==null;){var i=nc(o);if(a.before(o),o===s)return;o=i}}function Xa(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function L0(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],s=e,a="";Le(()=>{var i,l=Mn;if(a!==(a=(i=t())!==null&&i!==void 0?i:"")&&(l.nodes!==null&&(x0(l.nodes.start,l.nodes.end),l.nodes=null),a!=="")){var c=a+"";r?c="<svg>".concat(c,"</svg>"):o&&(c="<math>".concat(c,"</math>"));var d=Pv(c);if((r||o)&&(d=$o(d)),ti($o(d),d.lastChild),r||o)for(;$o(d);)s.before($o(d));else s.before(d)}})}function vr(e,t,r,o,s){var a,i=(a=t.$$slots)===null||a===void 0?void 0:a[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?s!==null&&s(e):i(e,l?()=>o:o)}function U0(e,t,r){var o=new xd(e);ll(()=>{var s,a=(s=t())!==null&&s!==void 0?s:null;o.ensure(a,a&&(i=>r(i,a)))},Xs)}function lo(e,t,r){Qr(()=>{var o=Z(()=>t(e,r?.())||{});if(r&&o!=null&&o.update){var s=!1,a={};il(()=>{var i=r();E(i),s&&Zg(a,i)&&(a=i,o.update(i))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function X2(e,t){var r,o=void 0;y0(()=>{o!==(o=t())&&(r&&(no(r),r=null),o&&(r=ma(()=>{Qr(()=>o(e))})))})}function F0(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=F0(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function ws(e){return typeof e=="object"?(function(){for(var t,r,o=0,s="",a=arguments.length;o<a;o++)(t=arguments[o])&&(r=F0(t))&&(s&&(s+=" "),s+=r);return s})(e):e??""}var Zp=[...` 	
\r\f \v\uFEFF`];function em(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function af(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mt(e,t,r,o,s,a){var i=e.__className;if(i!==r||i===void 0){var l=(function(u,m,b){var w=u==null?"":""+u;if(m&&(w=w?w+" "+m:m),b){for(var p in b)if(b[p])w=w?w+" "+p:p;else if(w.length)for(var y=p.length,v=0;(v=w.indexOf(p,v))>=0;){var h=v+y;v!==0&&!Zp.includes(w[v-1])||h!==w.length&&!Zp.includes(w[h])?v=h:w=(v===0?"":w.substring(0,v))+w.substring(h+1)}}return w===""?null:w})(r,o,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var d=!!a[c];s!=null&&d===!!s[c]||e.classList.toggle(c,d)}return a}function sf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,o))}}function Lo(e,t,r,o){if(e.__style!==t){var s=(function(a,i){if(i){var l,c,d="";if(Array.isArray(i)?(l=i[0],c=i[1]):l=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,m=0,b=!1,w=[];l&&w.push(...Object.keys(l).map(af)),c&&w.push(...Object.keys(c).map(af));for(var p=0,y=-1,v=a.length,h=0;h<v;h++){var f=a[h];if(b?f==="/"&&a[h-1]==="*"&&(b=!1):u?u===f&&(u=!1):f==="/"&&a[h+1]==="*"?b=!0:f==='"'||f==="'"?u=f:f==="("?m++:f===")"&&m--,!b&&u===!1&&m===0){if(f===":"&&y===-1)y=h;else if(f===";"||h===v-1){if(y!==-1){var g=af(a.substring(p,y).trim());w.includes(g)||(f!==";"&&h++,d+=" "+a.substring(p,h).trim()+";")}p=h+1,y=-1}}}}return l&&(d+=em(l)),c&&(d+=em(c,!0)),(d=d.trim())===""?null:d}return a==null?null:String(a)})(t,o);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else o&&(Array.isArray(o)?(sf(e,r?.[0],o[0]),sf(e,r?.[1],o[1],"important")):sf(e,r,o));return o}function Vf(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!Zl(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(tm(o))}else{for(o of e.options)if(I2(tm(o),t))return void(o.selected=!0);r&&t===void 0||(e.selectedIndex=-1)}}function Z2(e){var t=new MutationObserver(()=>{Vf(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),wd(()=>{t.disconnect()})}function tm(e){return"__value"in e?e.__value:e.value}var _i=Symbol("class"),El=Symbol("style"),V0=Symbol("is custom element"),B0=Symbol("is html");function ni(e,t){var r=Mv(e);r.value!==(r.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function wn(e,t,r,o){var s=Mv(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[P2]=r),r==null?e.removeAttribute(t):typeof r!="string"&&W0(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function ek(e,t,r,o){var s,a=Mv(e),i=a[V0],l=!a[B0],c=t||{},d=e.tagName==="OPTION";for(var u in t)u in r||(r[u]=null);r.class?r.class=ws(r.class):(o||r[_i])&&(r.class=null),r[El]&&((s=r.style)!==null&&s!==void 0||(r.style=null));var m,b,w,p,y,v,h=W0(e),f=function(x){var j=r[x];if(d&&x==="value"&&j==null)return e.value=e.__value="",c[x]=j,0;if(x==="class")return m=e.namespaceURI==="http://www.w3.org/1999/xhtml",Mt(e,m,j,o,t?.[_i],r[_i]),c[x]=j,c[_i]=r[_i],0;if(x==="style")return Lo(e,j,t?.[El],r[El]),c[x]=j,c[El]=r[El],0;if(j===(b=c[x])&&(j!==void 0||!e.hasAttribute(x))||(c[x]=j,(w=x[0]+x[1])==="$$"))return 0;if(w==="on"){var k={},C="$$"+x,T=x.slice(2);if(p=(function(te){return V2.includes(te)})(T),(function(te){return te.endsWith("capture")&&te!=="gotpointercapture"&&te!=="lostpointercapture"})(T)&&(T=T.slice(0,-7),k.capture=!0),!p&&b){if(j!=null)return 0;e.removeEventListener(T,c[C],k),c[C]=null}if(j!=null)if(p)e["__".concat(T)]=j,rc([T]);else{let te=function(ye){c[x].call(this,ye)};c[C]=z0(T,e,te,k)}else p&&(e["__".concat(T)]=void 0)}else if(x==="style")wn(e,x,j);else if(x==="autofocus")(function(te,ye){if(ye){var W=document.body;te.autofocus=!0,Zs(()=>{document.activeElement===W&&te.focus()})}})(e,!!j);else if(i||x!=="__value"&&(x!=="value"||j==null))if(x==="selected"&&d)(function(te,ye){ye?te.hasAttribute("selected")||te.setAttribute("selected",""):te.removeAttribute("selected")})(e,j);else if(y=x,l||(y=(function(te){var ye;return te=te.toLowerCase(),(ye=B2[te])!==null&&ye!==void 0?ye:te})(y)),v=y==="defaultValue"||y==="defaultChecked",j!=null||i||v)v||h.includes(y)&&(i||typeof j!="string")?(e[y]=j,y in a&&(a[y]=eo)):typeof j!="function"&&wn(e,y,j);else if(a[x]=null,y==="value"||y==="checked"){var R=e,ne=t===void 0;if(y==="value"){var ee=R.defaultValue;R.removeAttribute(y),R.defaultValue=ee,R.value=R.__value=ne?ee:null}else{var F=R.defaultChecked;R.removeAttribute(y),R.defaultChecked=F,R.checked=!!ne&&F}}else e.removeAttribute(x);else e.value=e.__value=j};for(var g in r)f(g);return c}function Ou(e,t){var r=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0&&arguments[6],s=arguments.length>7&&arguments[7]!==void 0&&arguments[7];u0(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var i=void 0,l={},c=e.nodeName==="SELECT",d=!1;if(y0(()=>{var m=t(...a.map(n)),b=ek(e,i,m,r,o,s);for(var w of(d&&c&&"value"in m&&Vf(e,m.value),Object.getOwnPropertySymbols(l)))m[w]||no(l[w]);for(var p of Object.getOwnPropertySymbols(m)){var y=m[p];p.description!=="@attach"||i&&y===i[p]||(l[p]&&no(l[p]),l[p]=ma(()=>X2(e,()=>y))),b[p]=y}i=b}),c){var u=e;Qr(()=>{Vf(u,i.value,!0),Z2(u)})}d=!0})}function Mv(e){var t;return(t=e.__attributes)!==null&&t!==void 0?t:e.__attributes={[V0]:e.nodeName.includes("-"),[B0]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var nm=new Map;function W0(e){var t,r=e.getAttribute("is")||e.nodeName,o=nm.get(r);if(o)return o;nm.set(r,o=[]);for(var s=e,a=Element.prototype;a!==s;){for(var i in t=Hg(s))t[i].set&&o.push(i);s=Cv(s)}return o}function Hu(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=new WeakSet;D2(e,"input",(function(){var s=jt(function*(a){var i=a?e.defaultValue:e.value;if(i=lf(e)?cf(i):i,r(i),Zn!==null&&o.add(Zn),yield R0(),i!==(i=t())){var l=e.selectionStart,c=e.selectionEnd,d=e.value.length;if(e.value=i??"",c!==null){var u=e.value.length;l===c&&c===d&&u>d?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(c,u))}}});return function(a){return s.apply(this,arguments)}})()),Z(t)==null&&e.value&&(r(lf(e)?cf(e.value):e.value),Zn!==null&&o.add(Zn)),il(()=>{var s=t();if(e===document.activeElement){var a=Nl??Zn;if(o.has(a))return}lf(e)&&s===cf(e.value)||(e.type!=="date"||s||e.value)&&s!==e.value&&(e.value=s??"")})}function lf(e){var t=e.type;return t==="number"||t==="range"}function cf(e){return e===""?null:+e}function xt(e,t,r){var o=Da(e,t);o&&o.set&&(e[t]=r,wd(()=>{e[t]=null}))}function rm(e,t){return e===t||e?.[pa]===t}function er(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Qr(()=>{var o,s;return il(()=>{o=s,s=[],Z(()=>{e!==r(...s)&&(t(e,...s),o&&rm(r(...o),e)&&t(null,...o))})}),()=>{Zs(()=>{s&&rm(r(...s),e)&&t(null,...s)})}}),e}function Ma(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e?.apply(this,r)}}function es(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e?.apply(this,r)}}function Rt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Fn,r=t.l.u;if(r){var o,s=()=>E(t.s);if(e){var a=0,i={},l=tc(()=>{var c=!1,d=t.s;for(var u in d)d[u]!==i[u]&&(i[u]=d[u],c=!0);return c&&a++,a});s=()=>n(l)}r.b.length&&(o=()=>{om(t,s),Af(r.b)},g0(),oa(1048584,o,!0)),If(()=>{var c=Z(()=>r.m.map(E2));return()=>{for(var d of c)typeof d=="function"&&d()}}),r.a.length&&If(()=>{om(t,s),Af(r.a)})}}function om(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function kd(e){var t=Ha(0);return function(){return arguments.length===1?(S(t,n(t)+1),arguments[0]):(n(t),e())}}function Pl(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],s=Zl(o)?o.slice():o==null?[]:[o];for(var a of s)a.call(this,t)}var lu=!1,tk={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var o=Mn;try{Uo(e.parent_effect),e.special[t]=_({get[t](){return e.props[t]}},t,4)}finally{Uo(o)}}return e.special[t](r),Kp(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Kp(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function cu(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ha(0),parent_effect:Mn},tk)}var nk={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(kl(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var s=e.props[o];kl(s)&&(s=s());var a=Da(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(kl(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var s=Da(o,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===pa||t===Yg)return!1;for(var r of e.props)if(kl(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)if(kl(r)&&(r=r()),r){for(var o in r)t.includes(o)||t.push(o);for(var s of Object.getOwnPropertySymbols(r))t.includes(s)||t.push(s)}return t}};function ps(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},nk)}function _(e,t,r,o){var s,a,i=!rl||!!(2&r),l=!!(8&r),c=!!(16&r),d=o,u=!0,m=()=>(u&&(u=!1,d=c?Z(o):o),d);if(l){var b,w,p=pa in e||Yg in e;s=(b=(w=Da(e,t))===null||w===void 0?void 0:w.set)!==null&&b!==void 0?b:p&&t in e?j=>e[t]=j:void 0}var y,v=!1;if(l?[a,v]=(function(j){var k=lu;try{return lu=!1,[j(),lu]}finally{lu=k}})(()=>e[t]):a=e[t],a===void 0&&o!==void 0&&(a=m(),s&&(i&&(function(){throw new Error("https://svelte.dev/e/props_invalid_value")})(),s(a))),y=i?()=>{var j=e[t];return j===void 0?m():(u=!0,j)}:()=>{var j=e[t];return j!==void 0&&(d=void 0),j===void 0?d:j},i&&!(4&r))return y;if(s){var h=e.$$legacy;return function(j,k){return arguments.length>0?(i&&k&&!h&&!v||s(k?y():j),j):y()}}var f=!1,g=(1&r?tc:nt)(()=>(f=!1,y()));l&&n(g);var x=Mn;return function(j,k){if(arguments.length>0){var C=k?n(g):i&&l?Mi(j):j;return S(g,C),f=!0,d!==void 0&&(d=C),j}return ii&&f||(x.f&al)!==0?g.v:n(g)}}function Fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(function(o){var s=(function(a){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[a]}catch{}})("debug");return s!=null&&s.endsWith("*")?o.startsWith(s.slice(0,-1)):o===s})(e);if(!t)return rk;var r=(function(o){for(var s=0,a=0;a<o.length;a++)s=(s<<5)-s+o.charCodeAt(a),s|=0;return am[Math.abs(s)%am.length]})(e);return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];console.log("%c".concat(e),"color:".concat(r),...s)}}function rk(){}var am=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],ok=0;function Ri(){return++ok}function Gr(e){return parseInt(e,10)}function Rv(e){return ak.test(e)}var ak=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function yn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function cr(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function sk(e){return e===!0||e===!1}function Bf(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return Bf(Number(e));try{var t=e&&e.valueOf();if(t!==e)return Bf(t)}catch{return!1}return!1}function H0(e){(uu=uu||window.document.createElement("div")).style.color="",uu.style.color=e;var t=uu.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var uu=void 0;function ik(e){return typeof e=="string"&&e.length<99&&!!H0(e)}function Nv(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(yn(e))return"object";var r=t.stringify(e);return r&&Rv(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var lk=/^https?:\/\/\S+$/;function Sd(e){return typeof e=="string"&&lk.test(e)}function ul(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(Rv(r)?t.parse(r):e)}var ck=[];function sm(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Wf(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!yn(i)||t&&l.length>0)&&(r[mt(l)]=!0),yn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var s=Math.min(e.length,1e4),a=0;a<s;a++)o(e[a],ck);return Object.keys(r).sort().map(go)}function K0(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function Ku(e,t){return e.length>t?e.slice(0,t):e}function im(e){return De({},e)}function lm(e){return Object.values(e)}function cm(e,t,r,o){var s=e.slice(0),a=s.splice(t,r);return s.splice.apply(s,[t+o,0,...a]),s}function uk(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function oc(e,t){try{return t.parse(e)}catch{return t.parse(va(e))}}function J0(e,t){try{return oc(e,t)}catch{return}}function ac(e,t){e=e.replace(G0,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Q0(e){e=e.replace(G0,"");try{return va(e)}catch{}try{var t=va("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=va("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var G0=/,\s*$/;function Yi(e,t){var r=dm.exec(t);if(r){var o=Gr(r[2]),s=(function(w,p){for(var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:w.length,h=0,f=y;f<v;f++)w.charAt(f)===p&&h++;return h})(e,`
`,0,o),a=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:s,column:a,message:t.replace(dm,()=>"line ".concat(s+1," column ").concat(a+1))}}var i=hk.exec(t),l=i?Gr(i[1]):void 0,c=l!==void 0?l-1:void 0,d=pk.exec(t),u=d?Gr(d[1]):void 0,m=u!==void 0?u-1:void 0,b=c!==void 0&&m!==void 0?(function(w,p,y){for(var v=w.indexOf(`
`),h=1;h<p&&v!==-1;)v=w.indexOf(`
`,v+1),h++;return v!==-1?v+y+1:void 0})(e,c,m):void 0;return{position:b,line:c,column:m,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function uf(e,t){try{var r=jg.parse(e),o=mt(t),s=r.pointers[o];if(s)return{path:t,line:s.key?s.key.line:s.value?s.value.line:0,column:s.key?s.key.column:s.value?s.value.column:0,from:s.key?s.key.pos:s.value?s.value.pos:0,to:s.keyEnd?s.keyEnd.pos:s.valueEnd?s.valueEnd.pos:0}}catch(a){console.error(a)}return{path:t,line:0,column:0,from:0,to:0}}function df(e){return yn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Ll(e){return yn(e)&&typeof e.text=="string"}function Ul(e){return yn(e)&&e.json!==void 0}function dk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Ll(e)?e:{text:r.stringify(e.json,null,t)}}function um(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Ul(e)?e:{json:t.parse(e.text)}}function Hf(e,t,r){return dk(e,t,r).text}function fk(e,t){return vk(e,t)>t}function vk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Ll(e))return e.text.length;var r=e.json,o=0;return(function s(a){if(Array.isArray(a)){if((o+=a.length-1+2)>t)return;for(var i=0;i<a.length;i++)if(s(a[i]),o>t)return}else if(yn(a)){var l=Object.keys(a);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var d=l[c],u=a[d];o+=d.length+2,s(u)}}else o+=typeof a=="string"?a.length+2:String(a).length})(r),o}var dm=/(position|char) (\d+)/,hk=/line (\d+)/,pk=/column (\d+)/;function Y0(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function fm(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&mk.test(t)}var Rr,An,Ko,Go,Yo,qo,ms,mk=/[,:]\S/;function Tv(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:r}=e;return t?r?gk:bk:r?yk:jk}(function(e){e.text="text",e.tree="tree",e.table="table"})(Rr||(Rr={})),(function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"})(An||(An={})),(function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"})(Ko||(Ko={})),(function(e){e.info="info",e.warning="warning",e.error="error"})(Go||(Go={})),(function(e){e.key="key",e.value="value"})(Yo||(Yo={})),(function(e){e.asc="asc",e.desc="desc"})(qo||(qo={})),(function(e){e.no="no",e.self="self",e.nextInside="nextInside"})(ms||(ms={}));var gk={escapeValue:e=>X0(tb(String(e))),unescapeValue:e=>nb(Z0(e))},bk={escapeValue:e=>tb(String(e)),unescapeValue:e=>nb(e)},yk={escapeValue:e=>X0(String(e)),unescapeValue:e=>Z0(e)},jk={escapeValue:e=>String(e),unescapeValue:e=>e};function X0(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function Z0(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return eb[r]||r}catch{return t}})}var eb={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},wk={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function tb(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>eb[t]||t)}function nb(e){return e.replace(/\\["bfnrt\\]/g,t=>wk[t]||t)}function Xi(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function rb(e,t){return dl(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function cs(e,t,r){return dl(e,o=>(function(s,a,i){return typeof s.getAttribute=="function"&&s.getAttribute(a)===i})(o,t,r))}function dl(e,t){return!!Av(e,t)}function Av(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function sc(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function qv(e){var t=sc(e),r=t?.document.activeElement;return!!r&&dl(r,o=>o===e)}function ob(e,t){return Av(e,r=>r.nodeName===t)}function ff(e){return cs(e,"data-type","selectable-key")?An.key:cs(e,"data-type","selectable-value")?An.value:cs(e,"data-type","insert-selection-area-inside")?An.inside:cs(e,"data-type","insert-selection-area-after")?An.after:An.multi}function $u(e){return encodeURIComponent(mt(e))}function ab(e){var t,r=Av(e,s=>!(s==null||!s.hasAttribute)&&s.hasAttribute("data-path")),o=(t=r?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?go(decodeURIComponent(o)):void 0}function xk(e){var{allElements:t,currentElement:r,direction:o,hasPrio:s=()=>!0,margin:a=10}=e,i=py(t.filter(function(h){var f=h.getBoundingClientRect();return f.width>0&&f.height>0}),c),l=c(r);function c(h){var f=h.getBoundingClientRect();return{x:f.left+f.width/2,y:f.top+f.height/2,rect:f,element:h}}function d(h,f){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,x=h.x-f.x,j=(h.y-f.y)*g;return Math.sqrt(x*x+j*j)}var u=h=>d(h,l);if(o==="Left"||o==="Right"){var m=o==="Left"?i.filter(h=>{return f=l,h.rect.left+a<f.rect.left;var f}):i.filter(h=>{return f=l,h.rect.right>f.rect.right+a;var f}),b=m.filter(h=>{return f=h,g=l,Math.abs(f.y-g.y)<a;var f,g}),w=dc(b,u)||dc(m,h=>d(h,l,10));return w?.element}if(o==="Up"||o==="Down"){var p=o==="Up"?i.filter(h=>{return f=l,h.y+a<f.y;var f}):i.filter(h=>{return f=l,h.y>f.y+a;var f}),y=p.filter(h=>s(h.element)),v=dc(y,u)||dc(p,u);return v?.element}}function zv(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];Iv(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:zv)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in kk||r.push(o),r.join(t)}function Iv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zv;return e.ctrlKey||e.metaKey&&t()}var kk={};function Ct(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}Ct(`.jse-absolute-popup.svelte-enkkpn {
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
}`);var Sk=he('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),_k=he('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function Ck(e,t){vt(t,!1);var r=_(t,"popup",8),o=_(t,"closeAbsolutePopup",8),s=K(),a=K();function i(m){r().options&&r().options.closeOnOuterClick&&!dl(m.target,b=>b===n(s))&&o()(r().id)}function l(m){Ka(m)==="Escape"&&(m.preventDefault(),m.stopPropagation(),o()(r().id))}oo(function(){n(a)&&n(a).focus()}),Rt();var c=_k();Te("mousedown",La,function(m){i(m)},!0),Te("keydown",La,l,!0),Te("wheel",La,function(m){i(m)},!0);var d=H(c),u=m=>{var b=Sk(),w=H(b);er(w,p=>S(a,p),()=>n(a)),U0(se(w,2),()=>r().component,(p,y)=>{y(p,ps(()=>r().props))}),Le(p=>Lo(b,p),[()=>(n(s),E(r()),Z(()=>(function(p,y){var v=p.getBoundingClientRect(),{left:h,top:f,positionAbove:g,positionLeft:x}=(function(){if(y.anchor){var{anchor:j,width:k=0,height:C=0,offsetTop:T=0,offsetLeft:R=0,position:ne}=y,{left:ee,top:F,bottom:te,right:ye}=j.getBoundingClientRect(),W=ne==="top"||F+C>window.innerHeight&&F>C,we=ne==="left"||ee+k>window.innerWidth&&ee>k;return{left:we?ye-R:ee+R,top:W?F-T:te+T,positionAbove:W,positionLeft:we}}if(typeof y.left=="number"&&typeof y.top=="number"){var{left:Re,top:Ee,width:ge=0,height:Q=0}=y;return{left:Re,top:Ee,positionAbove:Ee+Q>window.innerHeight&&Ee>Q,positionLeft:Re+ge>window.innerWidth&&Re>ge}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')})();return(g?"bottom: ".concat(v.top-f,"px;"):"top: ".concat(f-v.top,"px;"))+(x?"right: ".concat(v.left-h,"px;"):"left: ".concat(h-v.left,"px;"))})(n(s),r().options)))]),B(m,b)};je(d,m=>{n(s)&&m(u)}),er(c,m=>S(s,m),()=>n(s)),Te("mousedown",c,function(m){m.stopPropagation()}),Te("keydown",c,l),B(e,c),ht()}var Ek=he("<!> <!>",1);function Kf(e,t){vt(t,!1);var r=Fr("jsoneditor:AbsolutePopup"),o=K([],!0);function s(l){var c=n(o).findIndex(u=>u.id===l);if(c!==-1){var d=n(o)[c];d.options.onClose&&d.options.onClose(),S(o,n(o).filter(u=>u.id!==l))}}(function(l,c){t0().set(l,c)})("absolute-popup",{openAbsolutePopup:function(l,c,d){r("open...",c,d);var u={id:Ri(),component:l,props:c||{},options:d||{}};return S(o,[...n(o),u]),u.id},closeAbsolutePopup:s}),fe(()=>n(o),()=>{r("popups",n(o))}),xn(),Rt(!0);var a=Ek(),i=tt(a);pr(i,1,()=>n(o),_r,(l,c)=>{Ck(l,{get popup(){return n(c)},closeAbsolutePopup:s})}),vr(se(i,2),t,"default",{},null),B(e,a),ht()}function ic(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),s=e,a=1;r.has(s);){var i="copy"+(a>1?" "+a:"");s="".concat(o," (").concat(i,")"),a++}return s}function Ta(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function Ok(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var $k={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a=[];r&&r.path&&r.relation&&r.value&&a.push(["filter",[(i=r.relation,Og("1 ".concat(i," 1"))[0]),du(r.path),Ok(r.value)]]);var i;return o&&o.path&&o.direction&&a.push(["sort",du(o.path),o.direction==="desc"?"desc":"asc"]),s&&s.paths&&(s.paths.length>1?a.push(["pick",...s.paths.map(du)]):a.push(["map",du(s.paths[0])])),uw(["pipe",...a])},executeQuery:function(e,t,r){var o=Y0(r,JSON)?e:(function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0})(e);return t.trim()!==""?dw(o,t):o}};function du(e){return["get",...e]}var Pk=Cs("<g><!></g>");function Mk(e,t){vt(t,!1);var r=870711,o=K(""),s=_(t,"data",8);function a(l){if(!l||!l.raw)return"";var c=l.raw,d={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(u,m)=>{var b="fa-".concat((r+=1).toString(16));return d[m]=b,' id="'.concat(b,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(u,m,b,w)=>{var p=m||w;return p&&d[p]?"#".concat(d[p]):u}),c}fe(()=>E(s()),()=>{S(o,a(s()))}),xn();var i=Pk();L0(H(i),()=>n(o),!0),B(e,i),ht()}Ct(`
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
`);var Rk=Cs("<svg><!></svg>"),Nk=Cs("<path></path>"),Tk=Cs("<polygon></polygon>"),Ak=Cs("<!><!><!>",1);function nn(e,t){var r=cu(t,["children","$$slots","$$events","$$legacy"]),o=cu(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);vt(t,!1);var s=_(t,"class",8,""),a=_(t,"data",8),i=K(),l=_(t,"scale",8,1),c=_(t,"spin",8,!1),d=_(t,"inverse",8,!1),u=_(t,"pulse",8,!1),m=_(t,"flip",8,void 0),b=_(t,"label",8,""),w=_(t,"style",8,""),p=K(10),y=K(10),v=K(),h=K();function f(){var x=1;return l()!==void 0&&(x=Number(l())),isNaN(x)||x<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*x}function g(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}fe(()=>(E(a()),E(w()),E(l())),()=>{S(i,(function(x){var j;if(x){if(!("definition"in x)){if("iconName"in x&&"icon"in x){x.iconName;var[k,C,,,T]=x.icon;j={width:k,height:C,paths:(Array.isArray(T)?T:[T]).map(R=>({d:R}))}}else j=x[Object.keys(x)[0]];return j}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}})(a())),w(),l(),S(p,n(i)?n(i).width/g()*f():0),S(y,n(i)?n(i).height/g()*f():0),S(v,(function(){var x="";w()!==null&&(x+=w());var j=f();return j===1?x.length===0?"":x:(x===""||x.endsWith(";")||(x+="; "),"".concat(x,"font-size: ").concat(j,"em"))})()),S(h,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(p)," ").concat(n(y)))}),xn(),Rt(),(function(x,j){var k=cu(j,["children","$$slots","$$events","$$legacy"]),C=cu(k,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),T=_(j,"class",8,""),R=_(j,"width",8),ne=_(j,"height",8),ee=_(j,"box",8,"0 0 0 0"),F=_(j,"spin",8,!1),te=_(j,"inverse",8,!1),ye=_(j,"pulse",8,!1),W=_(j,"flip",8,"none"),we=_(j,"style",8,""),Re=_(j,"label",8,""),Ee=Rk();Ou(Ee,()=>{var ge;return De(De({version:"1.1",class:"fa-icon ".concat((ge=T())!==null&&ge!==void 0?ge:""),width:R(),height:ne(),"aria-label":Re(),role:Re()?"img":"presentation",viewBox:ee(),style:we()},C),{},{[_i]:{"fa-spin":F(),"fa-pulse":ye(),"fa-inverse":te(),"fa-flip-horizontal":W()==="horizontal","fa-flip-vertical":W()==="vertical"}})},void 0,void 0,void 0,"svelte-v67cny"),vr(H(Ee),j,"default",{},null),B(x,Ee)})(e,ps({get label(){return b()},get width(){return n(p)},get height(){return n(y)},get box(){return n(h)},get style(){return n(v)},get spin(){return c()},get flip(){return m()},get inverse(){return d()},get pulse(){return u()},get class(){return s()}},()=>o,{children:(x,j)=>{var k=Ut();vr(tt(k),t,"default",{},C=>{var T=Ak(),R=tt(T);pr(R,1,()=>(n(i),Z(()=>{var te;return((te=n(i))===null||te===void 0?void 0:te.paths)||[]})),_r,(te,ye)=>{var W=Nk();Ou(W,()=>De({},n(ye))),B(te,W)});var ne=se(R);pr(ne,1,()=>(n(i),Z(()=>{var te;return((te=n(i))===null||te===void 0?void 0:te.polygons)||[]})),_r,(te,ye)=>{var W=Tk();Ou(W,()=>De({},n(ye))),B(te,W)});var ee=se(ne),F=te=>{Mk(te,{get data(){return n(i)},set data(ye){S(i,ye)},$$legacy:!0})};je(ee,te=>{n(i),Z(()=>{var ye;return(ye=n(i))===null||ye===void 0?void 0:ye.raw})&&te(F)}),B(C,T)}),B(x,k)},$$slots:{default:!0}})),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var qk=he('<div role="checkbox" tabindex="-1"><!></div>');function zk(e,t){vt(t,!1);var r=_(t,"path",9),o=_(t,"value",9),s=_(t,"readOnly",9),a=_(t,"onPatch",9),i=_(t,"focus",9);Rt(!0);var l,c=qk(),d=H(c),u=nt(()=>o()===!0?$g:Pg);nn(d,{get data(){return n(u)}}),Le(()=>{wn(c,"aria-checked",o()===!0),l=Mt(c,1,"jse-boolean-toggle svelte-eli4ob",null,l,{"jse-readonly":s()}),wn(c,"title",s()?"Boolean value ".concat(o()):"Click to toggle this boolean value")}),Te("mousedown",c,function(m){m.stopPropagation(),s()||(a()([{op:"replace",path:mt(r()),value:!o()}]),i()())}),B(e,c),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Ik=he('<div class="jse-color-picker-popup svelte-v77py2"></div>');function Dk(e,t){vt(t,!1);var r=_(t,"color",8),o=_(t,"onChange",8),s=_(t,"showOnTop",8),a=K(),i=()=>{};oo(jt(function*(){var c,d=new((c=yield k1(()=>import("./vanilla-picker-B3LgXoKV.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(a),color:r(),popup:s()?"top":"bottom",onDone(u){var m=u.rgba[3]===1?u.hex.substring(0,7):u.hex;o()(m)}});d.show(),i=()=>{d.destroy()}})),Fo(()=>{i()}),Rt();var l=Ik();er(l,c=>S(a,c),()=>n(a)),B(e,l),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Lk=he('<button type="button"></button>');function Uk(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),{openAbsolutePopup:s}=_s("absolute-popup"),a=_(t,"path",9),i=_(t,"value",9),l=_(t,"readOnly",9),c=_(t,"onPatch",9),d=_(t,"focus",9);function u(p){c()([{op:"replace",path:mt(a()),value:p}]),m()}function m(){d()()}fe(()=>E(i()),()=>{S(r,H0(i()))}),fe(()=>(E(l()),E(i())),()=>{S(o,l()?"Color ".concat(i()):"Click to open a color picker")}),xn(),Rt(!0);var b,w=Lk();Le(()=>{var p;b=Mt(w,1,"jse-color-picker-button svelte-13mgyo6",null,b,{"jse-readonly":l()}),Lo(w,"background: ".concat((p=n(r))!==null&&p!==void 0?p:"")),wn(w,"title",n(o)),wn(w,"aria-label",n(o))}),Te("click",w,function(p){var y,v;if(!l()){var h=p.target,f=h.getBoundingClientRect().top,g=((y=(v=sc(h))===null||v===void 0?void 0:v.innerHeight)!==null&&y!==void 0?y:0)-f<300&&f>300,x={color:i(),onChange:u,showOnTop:g};s(Dk,x,{anchor:h,closeOnOuterClick:!0,onClose:m,offsetTop:18,offsetLeft:-8,height:300})}}),B(e,w),ht()}var vf=1e3,Fl=100,fu=100,Ju=2e4,Ui=[{start:0,end:Fl}],Fk=1048576,Vk=1048576,hf=10485760,pf="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",Dv="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",zs="hover-insert-inside",vu="hover-insert-after",vm="hover-collection",mf="valid",hm="repairable",Aa=336,qa=260,Ml=100,pm={[qo.asc]:"ascending",[qo.desc]:"descending"};function sb(e){for(var t=Hy(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var s=r.length-1,a=r[s],i=t[o];i.start<=a.end?r[s]={start:Math.min(a.start,i.start),end:Math.max(a.end,i.end)}:r.push(i)}return r}function Jf(e){return Qu(e)+Fl}function Qu(e){return Math.floor(e/Fl)*Fl}function Qf(e){return!!e&&(e.type==="space"||e.space===!0)}function os(e){return!!e&&(e.type==="separator"||e.separator===!0)}function mm(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Ra(e){return!!e&&typeof e.onClick=="function"}function bi(e){return!!e&&e.type==="dropdown-button"&&Ra(e.main)&&Array.isArray(e.items)}function gm(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function bm(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function ym(e){return yn(e)&&yn(e.parseError)}function Bk(e){return yn(e)&&Array.isArray(e.validationErrors)}function Wk(e){return yn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function Hk(e){return yn(e)&&Wk(e)&&typeof e.isChildError=="boolean"}function Kk(e){return yn(e)&&typeof e.action=="function"&&yn(e.props)}function vo(e){return e!==void 0&&e.type==="object"}function Lr(e){return e!==void 0&&e.type==="array"}function Lv(e){return e!==void 0&&e.type==="value"}function ri(e){return vo(e)||Lr(e)}function ib(e){return e!==void 0&&Array.isArray(e.searchResults)}function Gu(e){return!!e&&e.type==="tree"}function jm(e){return!!e&&e.type==="text"}function wm(e){return!!e&&e.type==="mode"}function Gf(e){var{json:t,expand:r}=e,o=(function(s){var{json:a,factory:i}=s;return Array.isArray(a)?i.createArrayDocumentState():yn(a)?i.createObjectDocumentState():a!==void 0?i.createValueDocumentState():void 0})({json:t,factory:Vv});return r&&o?Ho(t,o,[],r):o}function Uv(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:Ui,items:[]}}function Fv(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Vv={createObjectDocumentState:Fv,createArrayDocumentState:Uv,createValueDocumentState:function(){return{type:"value"}}};function lb(e,t,r,o){var{createObjectDocumentState:s,createArrayDocumentState:a,createValueDocumentState:i}=o;return(function l(c,d,u){if(Array.isArray(c)){var m=Lr(d)?d:a();if(u.length===0)return m;var b=Gr(u[0]),w=l(c[b],m.items[b],u.slice(1));return fo(m,["items",u[0]],w)}if(yn(c)){var p=vo(d)?d:s();if(u.length===0)return p;var y=u[0],v=l(c[y],p.properties[y],u.slice(1));return fo(p,["properties",y],v)}return Lv(d)?d:i()})(e,t,r)}function Eo(e,t){return Vl(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?Lr(o)?o:Uv({expanded:!!ri(o)&&o.expanded}):yn(r)?vo(o)?o:Fv({expanded:!!ri(o)&&o.expanded}):Lv(o)?o:void 0},()=>!0)}function Vl(e,t,r,o,s){var a=o(e,t,r);if(Array.isArray(e)&&Lr(a)&&s(a)){var i=[];return Bv(e,a.visibleSections,c=>{var d=r.concat(String(c)),u=Vl(e[c],a.items[c],d,o,s);u!==void 0&&(i[c]=u)}),sm(i,a.items)?a:De(De({},a),{},{items:i})}if(yn(e)&&vo(a)&&s(a)){var l={};return Object.keys(e).forEach(c=>{var d=r.concat(c),u=Vl(e[c],a.properties[c],d,o,s);u!==void 0&&(l[c]=u)}),sm(Object.values(l),Object.values(a.properties))?a:De(De({},a),{},{properties:l})}return a}function Bv(e,t,r){t.forEach(o=>{var{start:s,end:a}=o;K0(s,Math.min(e.length,a),r)})}function Bl(e,t){for(var r=e,o=[],s=0;s<t.length;){if(Array.isArray(r)){var a=t[s];o.push("items",a),r=r[Gr(a)]}else{if(!yn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(s));var i=t[s];o.push("properties",i),r=r[i]}s++}return o}function Ho(e,t,r,o){for(var s=t,a=function(l){var c=r.slice(0,l);s=Zi(e,s,c,(d,u)=>{var m=ri(u)&&!u.expanded?De(De({},u),{},{expanded:!0}):u;return Lr(m)?(function(b,w){if((function(v,h){return v.some(f=>h>=f.start&&h<f.end)})(b.visibleSections,w))return b;var p=Qu(w),y={start:p,end:Jf(p)};return De(De({},b),{},{visibleSections:sb(b.visibleSections.concat(y))})})(m,Gr(r[l])):m})},i=0;i<r.length;i++)a(i);return Zi(e,s,r,(l,c)=>(function(d,u,m,b){return Vl(d,u,m,(w,p,y)=>Array.isArray(w)&&b(y)?Lr(p)?p.expanded?p:De(De({},p),{},{expanded:!0}):Uv({expanded:!0}):yn(w)&&b(y)?vo(p)?p.expanded?p:De(De({},p),{},{expanded:!0}):Fv({expanded:!0}):p,w=>ri(w)&&w.expanded)})(l,c,[],o))}function xm(e,t,r,o){return Zi(e,t,r,(s,a)=>o?(function(i,l,c){return Vl(i,l,c,(d,u)=>km(u),()=>!0)})(s,a,r):km(a))}function km(e){return Lr(e)&&e.expanded?De(De({},e),{},{expanded:!1,visibleSections:Ui}):vo(e)&&e.expanded?De(De({},e),{},{expanded:!1}):e}function cb(e,t,r){var o={json:e,documentState:t},s=r.reduce((a,i)=>({json:Jo(a.json,[i]),documentState:Jk(a.json,a.documentState,i)}),o);return{json:s.json,documentState:Eo(s.json,s.documentState)}}function Jk(e,t,r){if(dg(r))return Sm(e,t,r,void 0);if(fg(r))return _m(e,t,r);if(vv(r)){var o=Qo(e,r.path),s=fa(e,t,o);return s?_d(e,t,o,{type:"value",enforceString:s}):t}return Pf(r)||Ws(r)?(function(a,i,l){if(Ws(l)&&l.from===l.path)return i;var c=i,d=Qo(a,l.from),u=la(a,c,d);return Ws(l)&&(c=_m(a,c,{path:l.from})),c=Sm(a,c,{path:l.path},u),c})(e,t,r):t}function la(e,t,r){try{return Xe(t,Bl(e,r))}catch{return}}function Wv(e,t,r,o,s){var a=lb(e,t,r,s);return mv(a,Bl(e,r),i=>{var l=Xe(e,r);return o(l,i)})}function _d(e,t,r,o){return(function(s,a,i,l,c){var d=lb(s,a,i,c);return fo(d,Bl(s,i),l)})(e,t,r,o,Vv)}function Zi(e,t,r,o){return Wv(e,t,r,o,Vv)}function Sm(e,t,r,o){var s=Qo(e,r.path),a=t;return a=Zi(e,a,tn(s),(i,l)=>{if(!Lr(l))return l;var c=Gr(Wt(s)),{items:d,visibleSections:u}=l;return De(De({},l),{},{items:c<d.length?uk(d,c,o!==void 0?[o]:Array(1)):d,visibleSections:ub(u,c,1)})}),_d(e,a,s,o)}function _m(e,t,r){var o=Qo(e,r.path),s=tn(o),a=Xe(e,s);return Array.isArray(a)?Zi(e,t,s,(i,l)=>{if(!Lr(l))return l;var c=Gr(Wt(o)),{items:d,visibleSections:u}=l;return De(De({},l),{},{items:d.slice(0,c).concat(d.slice(c+1)),visibleSections:ub(u,c,-1)})}):(function(i,l,c){var d=Bl(i,c);return Io(l,d)?dd(l,Bl(i,c)):l})(e,t,o)}function ub(e,t,r){return(function(o){for(var s=o.slice(0),a=1;a<s.length;)s[a-1].end===s[a].start&&(s[a-1]={start:s[a-1].start,end:s[a].end},s.splice(a)),a++;return s})(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function fa(e,t,r){var o,s=Xe(e,r),a=la(e,t,r),i=Lv(a)?a.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=s)=="string"&&typeof ul(o,JSON)!="string"}function lc(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function Hv(e,t){var r=[];return(function o(s,a,i){r.push(i),hr(s)&&Lr(a)&&a.expanded&&Bv(s,a.visibleSections,l=>{o(s[l],a.items[l],i.concat(String(l)))}),wr(s)&&vo(a)&&a.expanded&&Object.keys(s).forEach(l=>{o(s[l],a.properties[l],i.concat(l))})})(e,t,[]),r}function db(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return(function s(a,i){o.push({path:i,type:Ko.value});var l=la(e,t,i);if(a&&ri(l)&&l.expanded){if(r&&o.push({path:i,type:Ko.inside}),hr(a)){var c=Lr(l)?l.visibleSections:Ui;Bv(a,c,d=>{var u=i.concat(String(d));s(a[d],u),r&&o.push({path:u,type:Ko.after})})}wr(a)&&Object.keys(a).forEach(d=>{var u=i.concat(d);o.push({path:u,type:Ko.key}),s(a[d],u),r&&o.push({path:u,type:Ko.after})})}})(e,[]),o}function gf(e,t,r){var o=Hv(e,t),s=o.map(mt).indexOf(mt(r));if(s!==-1&&s<o.length-1)return o[s+1]}function oi(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Ho(e,t,r,fk({json:Xe(e,r)},o)?Rl:Kv)}function bf(e,t,r){var o=la(e,t,r);return ri(o)&&o.expanded?t:oi(e,t,r)}function Rl(e){return e.length===0||e.length===1&&e[0]==="0"}function Yf(e){return e.length===0}function Kv(){return!0}function Pu(){return!1}function po(e){return e&&e.type===An.after||!1}function zr(e){return e&&e.type===An.inside||!1}function Ur(e){return e&&e.type===An.key||!1}function pn(e){return e&&e.type===An.value||!1}function Un(e){return e&&e.type===An.multi||!1}function Cd(e){return Un(e)&&Ft(e.focusPath,e.anchorPath)}function Wl(e){return Un(e)||po(e)||zr(e)||Ur(e)||pn(e)}function yf(e){return e&&e.type===An.text||!1}function xs(e,t){var r=[];return(function(o,s,a){if(s){var i=Qs(s),l=ut(s);if(Ft(i,l))return a(i);if(o!==void 0){var c=vb(i,l);if(i.length===c.length||l.length===c.length)return a(c);var d=so(i,l),u=za(o,d),m=gs(o,d),b=Va(o,d,u),w=Va(o,d,m);if(!(b===-1||w===-1)){var p=Xe(o,c);if(wr(p)){for(var y=Object.keys(p),v=b;v<=w;v++){var h=a(c.concat(y[v]));if(h!==void 0)return h}return}if(hr(p)){for(var f=b;f<=w;f++){var g=a(c.concat(String(f)));if(g!==void 0)return g}return}throw new Error("Failed to create selection")}}}})(e,t,o=>{r.push(o)}),r}function fb(e){return zr(e)?e.path:tn(ut(e))}function za(e,t){if(!Un(t))return t.path;var r=Va(e,t,t.anchorPath);return Va(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function gs(e,t){if(!Un(t))return t.path;var r=Va(e,t,t.anchorPath);return Va(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function Cm(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var s=o?ut(r):za(e,r),a=(function(c,d,u){var m=Hv(c,d),b=m.map(mt),w=mt(u),p=b.indexOf(w);if(p!==-1&&p>0)return m[p-1]})(e,t,s);if(o)return zr(r)||po(r)?a!==void 0?so(s,s):void 0:a!==void 0?so(Qs(r),a):void 0;if(po(r)||zr(r))return Kt(s);if(Ur(r)){if(a===void 0||a.length===0)return;var i=tn(a),l=Xe(e,i);return Array.isArray(l)||un(a)?Kt(a):Ja(a)}return pn(r),a!==void 0?Kt(a):void 0}}function Em(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var s=db(e,t,o),a=s.findIndex(i=>Ft(i.path,ut(r))&&String(i.type)===String(r.type));return{caret:a!==-1?s[a]:void 0,previous:a!==-1&&a>0?s[a-1]:void 0,next:a!==-1&&a<s.length-1?s[a+1]:void 0}}function yi(e,t){for(var r=Hv(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var s=r[o];return s===void 0||s.length===0||Array.isArray(Xe(e,tn(s)))?Kt(s):Ja(s)}function el(e,t){if(t.length===1){var r=Ia(t);if(r.op==="replace")return Kt(Qo(e,r.path))}if(!un(t)&&t.every(i=>i.op==="move")){var o=Ia(t),s=t.slice(1);if((Pf(o)||Ws(o))&&o.from!==o.path&&s.every(i=>(Pf(i)||Ws(i))&&i.from===i.path))return Ja(Qo(e,o.path))}var a=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>Qo(e,i.path));if(!un(a))return{type:An.multi,anchorPath:Ia(a),focusPath:Wt(a)}}function vb(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function Yu(e){return Ur(e)||pn(e)||Cd(e)}function Om(e,t){return Yu(t)&&cr(Xe(e,ut(t)))?ut(t):tn(ut(t))}function ga(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function ua(e){if(Dr(e)){var{type:t,path:r}=e;return{type:t,path:r}}return e}function Ja(e){return{type:An.key,path:e}}function Jv(e,t){return{type:An.key,path:e,edit:!0,initialValue:t}}function Kt(e){return{type:An.value,path:e}}function Xu(e,t){return{type:An.value,path:e,edit:!0,initialValue:t}}function Qa(e){return{type:An.inside,path:e}}function Fa(e){return{type:An.after,path:e}}function so(e,t){var r=vb(e,t),o=e.length>r.length&&t.length>r.length;return{type:An.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function hb(e,t,r,o){if(Ur(t))return String(Wt(t.path));if(pn(t)){var s=Xe(e,t.path);return typeof s=="string"?s:o.stringify(s,null,r)}if(Un(t)){if(un(t.focusPath))return o.stringify(e,null,r);var a=fb(t),i=Xe(e,a);if(Array.isArray(i)){if(Cd(t)){var l=Xe(e,t.focusPath);return o.stringify(l,null,r)}return xs(e,t).map(c=>{var d=Xe(e,c);return"".concat(o.stringify(d,null,r),",")}).join(`
`)}return xs(e,t).map(c=>{var d=Wt(c),u=Xe(e,c);return"".concat(o.stringify(d),": ").concat(o.stringify(u,null,r),",")}).join(`
`)}}function Dr(e){return(Ur(e)||pn(e))&&e.edit===!0}function Ni(e){return Ur(e)||pn(e)||Un(e)}function hu(e){return Ur(e)||pn(e)||Cd(e)}function Xf(e){switch(e.type){case Ko.key:return Ja(e.path);case Ko.value:return Kt(e.path);case Ko.after:return Fa(e.path);case Ko.inside:return Qa(e.path)}}function $m(e,t){switch(e){case An.key:return Ja(t);case An.value:return Kt(t);case An.after:return Fa(t);case An.inside:return Qa(t);case An.multi:case An.text:return so(t,t)}}function pu(e,t,r){if(t)return Hl(e,t,r)||ga(Un(t)?tn(t.focusPath):t.path,r)?t:void 0}function Hl(e,t,r){if(e===void 0||!t)return!1;if(Ur(t)||zr(t)||po(t))return Ft(t.path,r);if(pn(t))return ga(r,t.path);if(Un(t)){var o=za(e,t),s=gs(e,t),a=tn(t.focusPath);if(!ga(r,a)||r.length<=a.length)return!1;var i=Va(e,t,o),l=Va(e,t,s),c=Va(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function Va(e,t,r){var o=tn(t.focusPath);if(!ga(r,o)||r.length<=o.length)return-1;var s=r[o.length],a=Xe(e,o);if(wr(a))return Object.keys(a).indexOf(s);if(hr(a)){var i=Gr(s);if(i<a.length)return i}return-1}function ut(e){return Un(e)?e.focusPath:e.path}function Qs(e){return Un(e)?e.anchorPath:e.path}function na(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var s of r)if(typeof s=="string"&&e.push(s),s&&typeof s=="object")for(var a in s)Object.hasOwnProperty.call(s,a)&&s[a]&&e.push(a);return e.join(" ")}function pb(e,t,r){return na("jse-value","jse-"+Nv(e,r),{"jse-url":Sd(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===Rr.table})}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Qk=he('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function mb(e,t){vt(t,!1);var r=Fr("jsoneditor:EditableDiv"),o=_(t,"value",9),s=_(t,"initialValue",9),a=_(t,"shortText",9,!1),i=_(t,"label",9),l=_(t,"onChange",9),c=_(t,"onCancel",9),d=_(t,"onFind",9),u=_(t,"onPaste",9,Mr),m=_(t,"onValueClass",9,()=>""),b=K(void 0,!0),w=K(void 0,!0),p=!1;function y(){return n(b)?(function(f){return f.replace(/\n$/,"")})(n(b).innerText):""}function v(f){n(b)&&Oo(b,n(b).innerText=Xi(f))}oo(()=>{r("onMount",{value:o(),initialValue:s()}),v(s()!==void 0?s():o()),n(b)&&(function(f){if(f.firstChild!=null){var g=document.createRange(),x=window.getSelection();g.setStart(f,1),g.collapse(!0),x?.removeAllRanges(),x?.addRange(g)}else f.focus()})(n(b))}),Fo(()=>{var f=y();r("onDestroy",{closed:p,value:o(),newValue:f}),p||f===o()||l()(f,ms.no)}),fe(()=>(E(m()),E(o())),()=>{S(w,m()(o()))}),xn(),Rt(!0);var h=Qk();er(h,f=>S(b,f),()=>n(b)),Le(f=>{wn(h,"aria-label",i()),Mt(h,1,f,"svelte-1r0oryi")},[()=>ws((E(na),n(w),E(a()),Z(()=>na("jse-editable-div",n(w),{"jse-short-text":a()}))))]),Te("input",h,function(){var f=y();f===""&&v(""),S(w,m()(f))}),Te("keydown",h,function(f){f.stopPropagation();var g=Ka(f);if(g==="Escape"&&(f.preventDefault(),p=!0,c()()),g==="Enter"||g==="Tab"){f.preventDefault(),p=!0;var x=y();l()(x,ms.nextInside)}g==="Ctrl+F"&&(f.preventDefault(),d()(!1)),g==="Ctrl+H"&&(f.preventDefault(),d()(!0))}),Te("paste",h,function(f){if(f.stopPropagation(),u()&&f.clipboardData){var g=f.clipboardData.getData("text/plain");u()(g)}}),Te("blur",h,function(){var f=document.hasFocus(),g=y();r("handleBlur",{hasFocus:f,closed:p,value:o(),newValue:g}),document.hasFocus()&&!p&&(p=!0,g!==o()&&l()(g,ms.self))}),B(e,h),ht()}function Gk(e,t){vt(t,!1);var r=_(t,"path",9),o=_(t,"value",9),s=_(t,"selection",9),a=_(t,"mode",9),i=_(t,"parser",9),l=_(t,"normalization",9),c=_(t,"enforceString",9),d=_(t,"onPatch",9),u=_(t,"onPasteJson",9),m=_(t,"onSelect",9),b=_(t,"onFind",9),w=_(t,"focus",9),p=_(t,"findNextInside",9);function y(g){return c()?g:ul(g,i())}function v(){m()(Kt(r())),w()()}Rt(!0);var h=nt(()=>(E(l()),E(o()),Z(()=>l().escapeValue(o())))),f=nt(()=>(E(Dr),E(s()),Z(()=>Dr(s())?s().initialValue:void 0)));mb(e,{get value(){return n(h)},get initialValue(){return n(f)},label:"Edit value",onChange:function(g,x){d()([{op:"replace",path:mt(r()),value:y(l().unescapeValue(g))}],(j,k,C)=>{if(!C||Ft(r(),ut(C)))return{state:k,selection:x===ms.nextInside?p()(r()):Kt(r())}}),w()()},onCancel:v,onPaste:function(g){try{var x=i().parse(g);cr(x)&&u()({path:r(),contents:x,onPasteAsJson:()=>{v();var j=[{op:"replace",path:mt(r()),value:x}];d()(j,(k,C)=>({state:oi(k,C,r())}))}})}catch{}},get onFind(){return b()},onValueClass:function(g){return pb(y(l().unescapeValue(g)),a(),i())}}),ht()}function Ti(e,t,r){var o=tn(t),s=Xe(e,o);if(hr(s)){var a=Gr(Wt(t));return r.map((d,u)=>({op:"add",path:mt(o.concat(String(a+u))),value:d.value}))}if(wr(s)){var i=Wt(t),l=Object.keys(s),c=i!==void 0?lc(l,i,!0):[];return[...r.map(d=>{var u=ic(d.key,l);return{op:"add",path:mt(o.concat(u)),value:d.value}}),...c.map(d=>ks(o,d))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Zf(e,t,r){var o=Xe(e,t);if(Array.isArray(o)){var s=o.length;return r.map((a,i)=>({op:"add",path:mt(t.concat(String(s+i))),value:a.value}))}return r.map(a=>{var i=ic(a.key,Object.keys(o));return{op:"add",path:mt(t.concat(i)),value:a.value}})}function cc(e,t,r,o){var s=t.filter(l=>l!==r),a=ic(o,s),i=lc(t,r,!1);return[{op:"move",from:mt(e.concat(r)),path:mt(e.concat(a))},...i.map(l=>ks(e,l))]}function gb(e,t){var r=Wt(t);if(un(r))throw new Error("Cannot duplicate root object");var o=tn(r),s=Wt(r),a=Xe(e,o);if(hr(a)){var i=Wt(t),l=i?Gr(Wt(i))+1:0;return[...t.map((u,m)=>({op:"copy",from:mt(u),path:mt(o.concat(String(m+l)))}))]}if(wr(a)){var c=Object.keys(a),d=s!==void 0?lc(c,s,!1):[];return[...t.map(u=>{var m=ic(Wt(u),c);return{op:"copy",from:mt(u),path:mt(o.concat(m))}}),...d.map(u=>ks(o,u))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function bb(e,t){if(pn(t))return[{op:"move",from:mt(t.path),path:""}];if(!Un(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var r=tn(t.focusPath),o=Xe(e,r);if(hr(o)){var s=xs(e,t).map(i=>{var l=Gr(Wt(i));return o[l]});return[{op:"replace",path:"",value:s}]}if(wr(o)){var a={};return xs(e,t).forEach(i=>{var l=String(Wt(i));a[l]=o[l]}),[{op:"replace",path:"",value:a}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function yb(e,t,r,o){if(Ur(t)){var s=J0(r,o),a=tn(t.path),i=Xe(e,a);return cc(a,Object.keys(i),Wt(t.path),typeof s=="string"?s:r)}if(pn(t)||Un(t)&&un(t.focusPath))try{return[{op:"replace",path:mt(ut(t)),value:ac(r,k=>oc(k,o))}]}catch{return[{op:"replace",path:mt(ut(t)),value:r}]}if(Un(t)){var l=jf(r,o);return(function(k,C,T){var R=Ia(C),ne=tn(R),ee=Xe(k,ne);if(hr(ee)){var F=Ia(C),te=F?Gr(Wt(F)):0;return[...Zu(C),...T.map((L,le)=>({op:"add",path:mt(ne.concat(String(le+te))),value:L.value}))]}if(wr(ee)){var ye=Wt(C),W=tn(ye),we=Wt(ye),Re=Object.keys(ee),Ee=we!==void 0?lc(Re,we,!1):[],ge=new Set(C.map(L=>Wt(L))),Q=Re.filter(L=>!ge.has(L));return[...Zu(C),...T.map(L=>{var le=ic(L.key,Q);return{op:"add",path:mt(W.concat(le)),value:L.value}}),...Ee.map(L=>ks(W,L))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")})(e,xs(e,t),l)}if(po(t)){var c=jf(r,o),d=t.path,u=tn(d),m=Xe(e,u);if(hr(m)){var b=Gr(Wt(d));return Ti(e,u.concat(String(b+1)),c)}if(wr(m)){var w=String(Wt(d)),p=Object.keys(m);if(un(p)||Wt(p)===w)return Zf(e,u,c);var y=p.indexOf(w),v=p[y+1];return Ti(e,u.concat(v),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(zr(t)){var h=jf(r,o),f=t.path,g=Xe(e,f);if(hr(g))return Ti(e,f.concat("0"),h);if(wr(g)){var x=Object.keys(g);if(un(x))return Zf(e,f,h);var j=Ia(x);return Ti(e,f.concat(j),h)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Zu(e){return e.map(t=>({op:"remove",path:mt(t)})).reverse()}function ks(e,t){return{op:"move",from:mt(e.concat(t)),path:mt(e.concat(t))}}function jf(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),s=J0(e,t),a=s!==void 0?s:ac(e,i=>oc(i,t));return r&&yn(a)||o&&Array.isArray(a)?[{key:"New item",value:a}]:Array.isArray(a)?a.map((i,l)=>({key:"New item "+l,value:i})):yn(a)?Object.keys(a).map(i=>({key:i,value:a[i]})):[{key:"New item",value:a}]}function jb(e,t){if(Ur(t)){var r=tn(t.path),o=Xe(e,r),s=cc(r,Object.keys(o),Wt(t.path),"");return{operations:s,newSelection:el(e,s)}}if(pn(t))return{operations:[{op:"replace",path:mt(t.path),value:""}],newSelection:t};if(Un(t)){var a=xs(e,t),i=Zu(a),l=Wt(a);if(un(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Kt([])};var c=tn(l),d=Xe(e,c);if(hr(d)){var u=Ia(a),m=Gr(Wt(u));return{operations:i,newSelection:m===0?Qa(c):Fa(c.concat(String(m-1)))}}if(wr(d)){var b=Object.keys(d),w=Ia(a),p=Wt(w),y=b.indexOf(p),v=b[y-1];return{operations:i,newSelection:y===0?Qa(c):Fa(c.concat(v))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function wb(e,t){var r=(function(o,s){if(un(s)||!s.every(Ws))return s;var a=[];for(var i of s){var l=Pm(go(i.from)),c=Pm(go(i.path));if(!l||!c)return s;a.push({from:l,path:c,operation:i})}var d=a[0].path.parent,u=Xe(o,d);if(!wr(u)||!a.every(p=>(function(y,v){return Ft(y.from.parent,v)&&Ft(y.path.parent,v)})(p,d)))return s;var m=(function(p,y){var v=Object.keys(y),h=v.slice();for(var f of p){var g=h.indexOf(f.from.key);g!==-1&&(h.splice(g,1),h.push(f.path.key))}for(var x=0;x<v.length&&v[x]===h[x];)x++;return h[x]})(a,o),b=p=>p.operation,w=a.filter(p=>p.operation.from!==p.operation.path);return w.some(p=>p.path.key===m)?w.map(b):[ks(d,m),...w.map(b)]})(e,t);return mg(e,r,{before:(o,s,a)=>{if(fg(s)){var i=go(s.path);return{revertOperations:[...a,...wf(o,i)]}}if(Ws(s)){var l=go(s.from);return{revertOperations:s.from===s.path?[s,...wf(o,l)]:[...a,...wf(o,l)]}}return{document:o}}})}function Pm(e){return e.length>0?{parent:tn(e),key:Wt(e)}:void 0}function wf(e,t){var r=tn(t),o=Wt(t),s=Xe(e,r);return wr(s)?lc(Object.keys(s),o,!1).map(a=>ks(r,a)):[]}function Mm(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((s,a)=>De(De({},s),{},{active:a===t}));return De(De({},e),{},{items:o,activeItem:r,activeIndex:t})}function Rm(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.toLowerCase(),a=(r=o?.maxResults)!==null&&r!==void 0?r:1/0,i=o?.columns,l=[],c=[];function d(v){l.length>=a||l.push(v)}function u(v,h){if(hr(h)){var f=c.length;c.push("0");for(var g=0;g<h.length;g++)if(c[f]=String(g),u(v,h[g]),l.length>=a)return;c.pop()}else if(wr(h)){var x=Object.keys(h),j=c.length;for(var k of(c.push(""),x))if(c[j]=k,Nm(k,v,c,Yo.key,d),u(v,h[k]),l.length>=a)return;c.pop()}else Nm(String(h),v,c,Yo.value,d)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var m=0;m<t.length;m++){c[0]=String(m);for(var b=t[m],w=0;w<i.length;w++){var p=i[w];if(p.length===1)c[1]=p[0];else for(var y=0;y<p.length;y++)c[y+1]=p[y];for(;c.length>p.length+1;)c.pop();u(s,Xe(b,p))}if(l.length>=a)break}return l}return u(s,t),l}function Nm(e,t,r,o,s){var a=e.toLowerCase(),i=0,l=-1,c=-1;do(c=a.indexOf(t,l))!==-1&&(l=c+t.length,s({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function ev(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function Tm(e,t,r){var o=e;return Py(r,s=>{o=ev(o,t,s.start,s.end)}),o}function Yk(e,t,r,o,s){var{field:a,path:i,start:l,end:c}=o;if(a===Yo.key){var d=tn(i),u=Xe(e,d),m=Wt(i),b=cc(d,Object.keys(u),m,ev(m,r,l,c));return{newSelection:el(e,b),operations:b}}if(a===Yo.value){var w=Xe(e,i);if(w===void 0)throw new Error("Cannot replace: path not found ".concat(mt(i)));var p=typeof w=="string"?w:String(w),y=fa(e,t,i),v=ev(p,r,l,c),h=[{op:"replace",path:mt(i),value:y?v:ul(v,s)}];return{newSelection:el(e,h),operations:h}}throw new Error("Cannot replace: unknown type of search result field ".concat(a))}function Am(e){return e.path.concat(e.field,String(e.fieldIndex))}function qm(e){var t=ib(e)?e.searchResults.filter(r=>r.field===Yo.key):void 0;return t&&t.length>0?t:void 0}function zm(e){var t=ib(e)?e.searchResults.filter(r=>r.field===Yo.value):void 0;return t&&t.length>0?t:void 0}var Xk={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function xb(e,t){return t.reduce((r,o)=>(function(s,a,i,l){return Wv(s,a,i,l,Xk)})(e,r,o.path,(s,a)=>De(De({},a),{},{searchResults:a.searchResults?a.searchResults.concat(o):[o]})),void 0)}function ed(e){var t,r=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=vo(e)?Object.values(e.properties).flatMap(ed):Lr(e)?e.items.flatMap(ed):[];return r.concat(o)}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Zk=he("<span> </span>");function kb(e,t){vt(t,!1);var r=K(),o=_(t,"text",8),s=_(t,"searchResultItems",8);fe(()=>(E(o()),E(s())),()=>{S(r,(function(i,l){var c=[],d=0;for(var u of l){var m=i.slice(d,u.start);m!==""&&c.push({resultIndex:void 0,type:"normal",text:m,active:!1});var b=i.slice(u.start,u.end);c.push({resultIndex:u.resultIndex,type:"highlight",text:b,active:u.active}),d=u.end}var w=Wt(l);return w&&w.end<i.length&&c.push({type:"normal",text:i.slice(w.end),resultIndex:void 0,active:!1}),c})(String(o()),s()))}),xn(),Rt();var a=Ut();pr(tt(a),1,()=>n(r),_r,(i,l)=>{var c=Ut(),d=tt(c),u=b=>{var w=Br();Le(()=>pt(w,(n(l),Z(()=>n(l).text)))),B(b,w)},m=b=>{var w,p=Zk(),y=H(p);Le((v,h)=>{w=Mt(p,1,"jse-highlight svelte-19qyvy6",null,w,{"jse-active":n(l).active}),wn(p,"data-search-result-index",v),pt(y,h)},[()=>(n(l),Z(()=>String(n(l).resultIndex))),()=>(E(Xi),n(l),Z(()=>Xi(n(l).text)))]),B(b,p)};je(d,b=>{n(l),Z(()=>n(l).type==="normal")?b(u):b(m,!1)}),B(i,c)}),B(e,a),ht()}function Mu(e){var t=1e3;if(e<900)return e.toFixed()+" B";var r=e/t;if(r<900)return r.toFixed(1)+" KB";var o=r/t;if(o<900)return o.toFixed(1)+" MB";var s=o/t;return s<900?s.toFixed(1)+" GB":(s/t).toFixed(1)+" TB"}Ct(`/* over all fonts, sizes, and colors */
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
}`);var e4=he('<button type="button"><!></button>');function Ru(e,t){vt(t,!0);var r,o=ho(()=>t.onclick?a=>{a.preventDefault(),a.stopPropagation(),t.onclick()}:void 0),s=e4();s.__click=function(){for(var a,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];(a=n(o))===null||a===void 0||a.apply(this,l)},(function(a,i){for(var l=arguments.length,c=new Array(l>2?l-2:0),d=2;d<l;d++)c[d-2]=arguments[d];var u=new xd(a);ll(()=>{var m,b=(m=i())!==null&&m!==void 0?m:null;u.ensure(b,b&&(w=>b(w,...c)))},Xs)})(H(s),()=>{var a;return(a=t.children)!==null&&a!==void 0?a:C2}),Le(()=>r=Mt(s,1,"jse-tag svelte-ubve9r",null,r,{disabled:!t.onclick})),B(e,s),ht()}rc(["click"]);Ct(`/* over all fonts, sizes, and colors */
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
}`);var t4=he('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function n4(e,t){vt(t,!0);var r=$a(!0),o=ho(()=>n(r)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(w=>w.active&&w.end>t.truncateTextSize))),s=ho(()=>n(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),a=ho(()=>Sd(t.value));function i(){S(r,!1)}var l=t4();l.__click=function(w){typeof t.value=="string"&&n(a)&&Iv(w)&&(w.preventDefault(),w.stopPropagation(),window.open(t.value,"_blank"))},l.__dblclick=function(w){t.readOnly||(w.preventDefault(),t.onSelect(Xu(t.path)))};var c=H(l),d=w=>{var p=ho(()=>t.normalization.escapeValue(n(s)));kb(w,{get text(){return n(p)},get searchResultItems(){return t.searchResultItems}})},u=w=>{var p=Br();Le(y=>pt(p,y),[()=>Xi(t.normalization.escapeValue(n(s)))]),B(w,p)};je(c,w=>{t.searchResultItems?w(d):w(u,!1)});var m=se(c,2),b=w=>{Ru(w,{onclick:i,children:(p,y)=>{var v=Br();Le(h=>pt(v,"Show more (".concat(h??"",")")),[()=>Mu(t.value.length)]),B(p,v)},$$slots:{default:!0}})};je(m,w=>{n(o)&&typeof t.value=="string"&&w(b)}),Le(w=>{Mt(l,1,w,"svelte-1saqp8c"),wn(l,"title",n(a)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>ws(pb(t.value,t.mode,t.parser))]),B(e,l),ht()}rc(["click","dblclick"]);Ct(`/* over all fonts, sizes, and colors */
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
}`);var r4=he('<div class="jse-tooltip svelte-brt1mq"> </div>');function o4(e,t){var r=_(t,"text",8),o=r4(),s=H(o);Le(()=>pt(s,r())),B(e,o)}function tl(e,t){var r,{text:o,openAbsolutePopup:s,closeAbsolutePopup:a}=t;function i(){r=s(o4,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){a(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}Ct(`/* over all fonts, sizes, and colors */
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
}`);var a4=he('<div class="jse-timestamp svelte-1jcpman"><!></div>');function s4(e,t){vt(t,!1);var r=K(void 0,!0),o=_s("absolute-popup"),s=_(t,"value",9);fe(()=>E(s()),()=>{S(r,"Time: ".concat(new Date(s()).toString()))}),xn(),Rt(!0);var a=a4();nn(H(a),{get data(){return hw}}),lo(a,(i,l)=>tl?.(i,l),()=>De({text:n(r)},o)),B(e,a),ht()}function i4(e){var t=[];return!e.isEditing&&sk(e.value)&&t.push({component:zk,props:e}),!e.isEditing&&ik(e.value)&&t.push({component:Uk,props:e}),e.isEditing&&t.push({component:Gk,props:e}),e.isEditing||t.push({component:n4,props:e}),!e.isEditing&&Bf(e.value)&&t.push({component:s4,props:e}),t}function mo(e){return e.map((t,r)=>c4.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+(function(o){return o.replace(/"/g,'\\"')})(t)+'"]':(r>0?".":"")+t).join("")}function l4(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(a=>a==='"',!0)),s('"')):t.push(o(a=>a==="]")),s("]")):t.push(o(a=>a==="."||a==="["));function o(a){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!a(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function s(a){if(e[r]!==a)throw new SyntaxError("Invalid JSON path: ".concat(a," expected at position ").concat(r));r++}return t}function as(e){return{value:e,label:un(e)?"(item root)":mo(e)}}var c4=/^\d+$/,u4={},d4={showWizard:!0,showOriginal:!0},td=Math.min,Gs=Math.max,nd=Math.round,mu=Math.floor,ba=e=>({x:e,y:e}),f4={left:"right",right:"left",bottom:"top",top:"bottom"},v4={start:"end",end:"start"};function Im(e,t,r){return Gs(e,td(t,r))}function Ed(e,t){return typeof e=="function"?e(t):e}function ai(e){return e.split("-")[0]}function Od(e){return e.split("-")[1]}function Sb(e){return e==="x"?"y":"x"}function _b(e){return e==="y"?"height":"width"}var h4=new Set(["top","bottom"]);function us(e){return h4.has(ai(e))?"y":"x"}function Cb(e){return Sb(us(e))}function tv(e){return e.replace(/start|end/g,t=>v4[t])}var Dm=["left","right"],Lm=["right","left"],p4=["top","bottom"],m4=["bottom","top"];function g4(e,t,r,o){var s=Od(e),a=(function(i,l,c){switch(i){case"top":case"bottom":return c?l?Lm:Dm:l?Dm:Lm;case"left":case"right":return l?p4:m4;default:return[]}})(ai(e),r==="start",o);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(tv)))),a}function gu(e){return e.replace(/left|right|bottom|top/g,t=>f4[t])}function b4(e){return typeof e!="number"?(function(t){return De({top:0,right:0,bottom:0,left:0},t)})(e):{top:e,right:e,bottom:e,left:e}}function rd(e){var{x:t,y:r,width:o,height:s}=e;return{width:o,height:s,top:r,left:t,right:t+o,bottom:r+s,x:t,y:r}}function Um(e,t,r){var o,{reference:s,floating:a}=e,i=us(t),l=Cb(t),c=_b(l),d=ai(t),u=i==="y",m=s.x+s.width/2-a.width/2,b=s.y+s.height/2-a.height/2,w=s[c]/2-a[c]/2;switch(d){case"top":o={x:m,y:s.y-a.height};break;case"bottom":o={x:m,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:b};break;case"left":o={x:s.x-a.width,y:b};break;default:o={x:s.x,y:s.y}}switch(Od(t)){case"start":o[l]-=w*(r&&u?-1:1);break;case"end":o[l]+=w*(r&&u?-1:1)}return o}var y4=(function(){var e=jt(function*(t,r,o){for(var{placement:s="bottom",strategy:a="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),d=yield l.isRTL==null?void 0:l.isRTL(r),u=yield l.getElementRects({reference:t,floating:r,strategy:a}),{x:m,y:b}=Um(u,s,d),w=s,p={},y=0,v=0;v<c.length;v++){var{name:h,fn:f}=c[v],{x:g,y:x,data:j,reset:k}=yield f({x:m,y:b,initialPlacement:s,placement:w,strategy:a,middlewareData:p,rects:u,platform:l,elements:{reference:t,floating:r}});m=g??m,b=x??b,p=De(De({},p),{},{[h]:De(De({},p[h]),j)}),k&&y<=50&&(y++,typeof k=="object"&&(k.placement&&(w=k.placement),k.rects&&(u=k.rects===!0?yield l.getElementRects({reference:t,floating:r,strategy:a}):k.rects),{x:m,y:b}=Um(u,w,d)),v=-1)}return{x:m,y:b,placement:w,strategy:a,middlewareData:p}});return function(t,r,o){return e.apply(this,arguments)}})();function Eb(e,t){return nv.apply(this,arguments)}function nv(){return nv=jt(function*(e,t){var r;t===void 0&&(t={});var{x:o,y:s,platform:a,rects:i,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:b=!1,padding:w=0}=Ed(t,e),p=b4(w),y=l[b?m==="floating"?"reference":"floating":m],v=rd(yield a.getClippingRect({element:(r=yield a.isElement==null?void 0:a.isElement(y))==null||r?y:y.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),h=m==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,f=yield a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating),g=(yield a.isElement==null?void 0:a.isElement(f))&&(yield a.getScale==null?void 0:a.getScale(f))||{x:1,y:1},x=rd(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:h,offsetParent:f,strategy:c}):h);return{top:(v.top-x.top+p.top)/g.y,bottom:(x.bottom-v.bottom+p.bottom)/g.y,left:(v.left-x.left+p.left)/g.x,right:(x.right-v.right+p.right)/g.x}}),nv.apply(this,arguments)}var j4=new Set(["left","top"]);function rv(){return rv=jt(function*(e,t){var{placement:r,platform:o,elements:s}=e,a=yield o.isRTL==null?void 0:o.isRTL(s.floating),i=ai(r),l=Od(r),c=us(r)==="y",d=j4.has(i)?-1:1,u=a&&c?-1:1,m=Ed(t,e),{mainAxis:b,crossAxis:w,alignmentAxis:p}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof p=="number"&&(w=l==="end"?-1*p:p),c?{x:w*u,y:b*d}:{x:b*d,y:w*u}}),rv.apply(this,arguments)}function $d(){return typeof window<"u"}function nl(e){return Ob(e)?(e.nodeName||"").toLowerCase():"#document"}function Po(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ya(e){var t;return(t=(Ob(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ob(e){return!!$d()&&(e instanceof Node||e instanceof Po(e).Node)}function Xo(e){return!!$d()&&(e instanceof Element||e instanceof Po(e).Element)}function ja(e){return!!$d()&&(e instanceof HTMLElement||e instanceof Po(e).HTMLElement)}function Fm(e){return!(!$d()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof Po(e).ShadowRoot)}var w4=new Set(["inline","contents"]);function Kl(e){var{overflow:t,overflowX:r,overflowY:o,display:s}=Zo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!w4.has(s)}var x4=new Set(["table","td","th"]);function k4(e){return x4.has(nl(e))}var S4=[":popover-open",":modal"];function od(e){return S4.some(t=>{try{return e.matches(t)}catch{return!1}})}var _4=["transform","translate","scale","rotate","perspective"],C4=["transform","translate","scale","rotate","perspective","filter"],E4=["paint","layout","strict","content"];function ov(e){var t=Qv(),r=Xo(e)?Zo(e):e;return _4.some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||C4.some(o=>(r.willChange||"").includes(o))||E4.some(o=>(r.contain||"").includes(o))}function Qv(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var O4=new Set(["html","body","#document"]);function Fi(e){return O4.has(nl(e))}function Zo(e){return Po(e).getComputedStyle(e)}function Pd(e){return Xo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ds(e){if(nl(e)==="html")return e;var t=e.assignedSlot||e.parentNode||Fm(e)&&e.host||ya(e);return Fm(t)?t.host:t}function $b(e){var t=ds(e);return Fi(t)?e.ownerDocument?e.ownerDocument.body:e.body:ja(t)&&Kl(t)?t:$b(t)}function Jl(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var s=$b(e),a=s===((o=e.ownerDocument)==null?void 0:o.body),i=Po(s);if(a){var l=av(i);return t.concat(i,i.visualViewport||[],Kl(s)?s:[],l&&r?Jl(l):[])}return t.concat(s,Jl(s,[],r))}function av(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Pb(e){var t=Zo(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,s=ja(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:o,l=nd(r)!==a||nd(o)!==i;return l&&(r=a,o=i),{width:r,height:o,$:l}}function Gv(e){return Xo(e)?e:e.contextElement}function Vi(e){var t=Gv(e);if(!ja(t))return ba(1);var r=t.getBoundingClientRect(),{width:o,height:s,$:a}=Pb(t),i=(a?nd(r.width):r.width)/o,l=(a?nd(r.height):r.height)/s;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var $4=ba(0);function Mb(e){var t=Po(e);return Qv()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:$4}function si(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var s=e.getBoundingClientRect(),a=Gv(e),i=ba(1);t&&(o?Xo(o)&&(i=Vi(o)):i=Vi(e));var l=(function(j,k,C){return k===void 0&&(k=!1),!(!C||k&&C!==Po(j))&&k})(a,r,o)?Mb(a):ba(0),c=(s.left+l.x)/i.x,d=(s.top+l.y)/i.y,u=s.width/i.x,m=s.height/i.y;if(a)for(var b=Po(a),w=o&&Xo(o)?Po(o):o,p=b,y=av(p);y&&o&&w!==p;){var v=Vi(y),h=y.getBoundingClientRect(),f=Zo(y),g=h.left+(y.clientLeft+parseFloat(f.paddingLeft))*v.x,x=h.top+(y.clientTop+parseFloat(f.paddingTop))*v.y;c*=v.x,d*=v.y,u*=v.x,m*=v.y,c+=g,d+=x,y=av(p=Po(y))}return rd({width:u,height:m,x:c,y:d})}function ad(e,t){var r=Pd(e).scrollLeft;return t?t.left+r:si(ya(e)).left+r}function Rb(e,t){var r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-ad(e,r),y:r.top+t.scrollTop}}var P4=new Set(["absolute","fixed"]);function Vm(e,t,r){var o;if(t==="viewport")o=(function(a,i){var l=Po(a),c=ya(a),d=l.visualViewport,u=c.clientWidth,m=c.clientHeight,b=0,w=0;if(d){u=d.width,m=d.height;var p=Qv();(!p||p&&i==="fixed")&&(b=d.offsetLeft,w=d.offsetTop)}var y=ad(c);if(y<=0){var v=c.ownerDocument,h=v.body,f=getComputedStyle(h),g=v.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,x=Math.abs(c.clientWidth-h.clientWidth-g);x<=25&&(u-=x)}else y<=25&&(u+=y);return{width:u,height:m,x:b,y:w}})(e,r);else if(t==="document")o=(function(a){var i=ya(a),l=Pd(a),c=a.ownerDocument.body,d=Gs(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),u=Gs(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),m=-l.scrollLeft+ad(a),b=-l.scrollTop;return Zo(c).direction==="rtl"&&(m+=Gs(i.clientWidth,c.clientWidth)-d),{width:d,height:u,x:m,y:b}})(ya(e));else if(Xo(t))o=(function(a,i){var l=si(a,!0,i==="fixed"),c=l.top+a.clientTop,d=l.left+a.clientLeft,u=ja(a)?Vi(a):ba(1);return{width:a.clientWidth*u.x,height:a.clientHeight*u.y,x:d*u.x,y:c*u.y}})(t,r);else{var s=Mb(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return rd(o)}function Nb(e,t){var r=ds(e);return!(r===t||!Xo(r)||Fi(r))&&(Zo(r).position==="fixed"||Nb(r,t))}function M4(e,t,r){var o=ja(t),s=ya(t),a=r==="fixed",i=si(e,!0,a,t),l={scrollLeft:0,scrollTop:0},c=ba(0);function d(){c.x=ad(s)}if(o||!o&&!a)if((nl(t)!=="body"||Kl(s))&&(l=Pd(t)),o){var u=si(t,!0,a,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else s&&d();a&&!o&&s&&d();var m=!s||o||a?ba(0):Rb(s,l);return{x:i.left+l.scrollLeft-c.x-m.x,y:i.top+l.scrollTop-c.y-m.y,width:i.width,height:i.height}}function xf(e){return Zo(e).position==="static"}function Bm(e,t){if(!ja(e)||Zo(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return ya(e)===r&&(r=r.ownerDocument.body),r}function Wm(e,t){var r=Po(e);if(od(e))return r;if(!ja(e)){for(var o=ds(e);o&&!Fi(o);){if(Xo(o)&&!xf(o))return o;o=ds(o)}return r}for(var s=Bm(e,t);s&&k4(s)&&xf(s);)s=Bm(s,t);return s&&Fi(s)&&xf(s)&&!ov(s)?r:s||(function(a){for(var i=ds(a);ja(i)&&!Fi(i);){if(ov(i))return i;if(od(i))return null;i=ds(i)}return null})(e)||r}var R4={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:r,offsetParent:o,strategy:s}=e,a=s==="fixed",i=ya(o),l=!!t&&od(t.floating);if(o===i||l&&a)return r;var c={scrollLeft:0,scrollTop:0},d=ba(1),u=ba(0),m=ja(o);if((m||!m&&!a)&&((nl(o)!=="body"||Kl(i))&&(c=Pd(o)),ja(o))){var b=si(o);d=Vi(o),u.x=b.x+o.clientLeft,u.y=b.y+o.clientTop}var w=!i||m||a?ba(0):Rb(i,c);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+w.x,y:r.y*d.y-c.scrollTop*d.y+u.y+w.y}},getDocumentElement:ya,getClippingRect:function(e){var{element:t,boundary:r,rootBoundary:o,strategy:s}=e,a=r==="clippingAncestors"?od(t)?[]:(function(d,u){var m=u.get(d);if(m)return m;for(var b=Jl(d,[],!1).filter(f=>Xo(f)&&nl(f)!=="body"),w=null,p=Zo(d).position==="fixed",y=p?ds(d):d;Xo(y)&&!Fi(y);){var v=Zo(y),h=ov(y);h||v.position!=="fixed"||(w=null),(p?!h&&!w:!h&&v.position==="static"&&w&&P4.has(w.position)||Kl(y)&&!h&&Nb(d,y))?b=b.filter(f=>f!==y):w=v,y=ds(y)}return u.set(d,b),b})(t,this._c):[].concat(r),i=[...a,o],l=i[0],c=i.reduce((d,u)=>{var m=Vm(t,u,s);return d.top=Gs(m.top,d.top),d.right=td(m.right,d.right),d.bottom=td(m.bottom,d.bottom),d.left=Gs(m.left,d.left),d},Vm(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:Wm,getElementRects:(function(){var e=jt(function*(t){var r=this.getOffsetParent||Wm,o=this.getDimensions,s=yield o(t.floating);return{reference:M4(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}});return function(t){return e.apply(this,arguments)}})(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:r}=Pb(e);return{width:t,height:r}},getScale:Vi,isElement:Xo,isRTL:function(e){return Zo(e).direction==="rtl"}};function Hm(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function N4(e,t,r,o){o===void 0&&(o={});var{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=Gv(e),u=s||a?[...d?Jl(d):[],...Jl(t)]:[];u.forEach(v=>{s&&v.addEventListener("scroll",r,{passive:!0}),a&&v.addEventListener("resize",r)});var m,b=d&&l?(function(v,h){var f,g=null,x=ya(v);function j(){var k;clearTimeout(f),(k=g)==null||k.disconnect(),g=null}return(function k(C,T){C===void 0&&(C=!1),T===void 0&&(T=1),j();var R=v.getBoundingClientRect(),{left:ne,top:ee,width:F,height:te}=R;if(C||h(),F&&te){var ye={rootMargin:-mu(ee)+"px "+-mu(x.clientWidth-(ne+F))+"px "+-mu(x.clientHeight-(ee+te))+"px "+-mu(ne)+"px",threshold:Gs(0,td(1,T))||1},W=!0;try{g=new IntersectionObserver(we,De(De({},ye),{},{root:x.ownerDocument}))}catch{g=new IntersectionObserver(we,ye)}g.observe(v)}function we(Re){var Ee=Re[0].intersectionRatio;if(Ee!==T){if(!W)return k();Ee?k(!1,Ee):f=setTimeout(()=>{k(!1,1e-7)},1e3)}Ee!==1||Hm(R,v.getBoundingClientRect())||k(),W=!1}})(!0),j})(d,r):null,w=-1,p=null;i&&(p=new ResizeObserver(v=>{var[h]=v;h&&h.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var f;(f=p)==null||f.observe(t)})),r()}),d&&!c&&p.observe(d),p.observe(t));var y=c?si(e):null;return c&&(function v(){var h=si(e);y&&!Hm(y,h)&&r(),y=h,m=requestAnimationFrame(v)})(),r(),()=>{var v;u.forEach(h=>{s&&h.removeEventListener("scroll",r),a&&h.removeEventListener("resize",r)}),b?.(),(v=p)==null||v.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var T4=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>jt(function*(){var r,o,{x:s,y:a,placement:i,middlewareData:l}=t,c=yield(function(d,u){return rv.apply(this,arguments)})(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:De(De({},c),{},{placement:i})}})()}},A4=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>jt(function*(){var{x:r,y:o,placement:s}=t,a=Ed(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:g=>{var{x,y:j}=g;return{x,y:j}}}}=a,d=Vg(a,j2),u={x:r,y:o},m=yield Eb(t,d),b=us(ai(s)),w=Sb(b),p=u[w],y=u[b];if(i){var v=w==="y"?"bottom":"right";p=Im(p+m[w==="y"?"top":"left"],p,p-m[v])}if(l){var h=b==="y"?"bottom":"right";y=Im(y+m[b==="y"?"top":"left"],y,y-m[h])}var f=c.fn(De(De({},t),{},{[w]:p,[b]:y}));return De(De({},f),{},{data:{x:f.x-r,y:f.y-o,enabled:{[w]:i,[b]:l}}})})()}},q4=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>jt(function*(){var r,o,{placement:s,middlewareData:a,rects:i,initialPlacement:l,platform:c,elements:d}=t,u=Ed(e,t),{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:w,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0}=u,h=Vg(u,y2);if((r=a.arrow)!=null&&r.alignmentOffset)return{};var f=ai(s),g=us(l),x=ai(l)===l,j=yield c.isRTL==null?void 0:c.isRTL(d.floating),k=w||(x||!v?[gu(l)]:(function(Q){var L=gu(Q);return[tv(Q),L,tv(L)]})(l)),C=y!=="none";!w&&C&&k.push(...g4(l,v,y,j));var T=[l,...k],R=yield Eb(t,h),ne=[],ee=((o=a.flip)==null?void 0:o.overflows)||[];if(m&&ne.push(R[f]),b){var F=(function(Q,L,le){le===void 0&&(le=!1);var A=Od(Q),O=Cb(Q),M=_b(O),re=O==="x"?A===(le?"end":"start")?"right":"left":A==="start"?"bottom":"top";return L.reference[M]>L.floating[M]&&(re=gu(re)),[re,gu(re)]})(s,i,j);ne.push(R[F[0]],R[F[1]])}if(ee=[...ee,{placement:s,overflows:ne}],!ne.every(Q=>Q<=0)){var te,ye,W=(((te=a.flip)==null?void 0:te.index)||0)+1,we=T[W];if(we&&(!(b==="alignment"&&g!==us(we))||ee.every(Q=>us(Q.placement)!==g||Q.overflows[0]>0)))return{data:{index:W,overflows:ee},reset:{placement:we}};var Re=(ye=ee.filter(Q=>Q.overflows[0]<=0).sort((Q,L)=>Q.overflows[1]-L.overflows[1])[0])==null?void 0:ye.placement;if(!Re)switch(p){case"bestFit":var Ee,ge=(Ee=ee.filter(Q=>{if(C){var L=us(Q.placement);return L===g||L==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(L=>L>0).reduce((L,le)=>L+le,0)]).sort((Q,L)=>Q[1]-L[1])[0])==null?void 0:Ee[0];ge&&(Re=ge);break;case"initialPlacement":Re=l}if(s!==Re)return{reset:{placement:Re}}}return{}})()}};function z4(e){var t,r,o={autoUpdate:!0},s=e,a=c=>De(De(De({},o),e||{}),c||{}),i=c=>{t&&r&&(s=a(c),((d,u,m)=>{var b=new Map,w=De({platform:R4},m),p=De(De({},w.platform),{},{_c:b});return y4(d,u,De(De({},w),{},{platform:p}))})(t,r,s).then(d=>{var u;Object.assign(r.style,{position:d.strategy,left:"".concat(d.x,"px"),top:"".concat(d.y,"px")}),!((u=s)===null||u===void 0)&&u.onComputed&&s.onComputed(d)}))},l=c=>{Fo(c.subscribe(d=>{t===void 0?(t=d,i()):(Object.assign(t,d),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,d)=>{var u;r=c,s=a(d),setTimeout(()=>i(d),0),i(d);var m=()=>{u&&(u(),u=void 0)},b=function(){var{autoUpdate:w}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s||{};m(),w!==!1&&R0().then(()=>N4(t,r,()=>i(s),w===!0?{}:w))};return u=b(),{update(w){i(w),u=b(w)},destroy(){m()}}},i]}function I4(e){var{loadOptions:t,filterText:r,items:o,multiple:s,value:a,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:d,convertStringItemsToObjects:u,filterGroupedItems:m,label:b}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=u(o));var w=o.filter(p=>{var y=d(p[b],r,p);return y&&s&&a!=null&&a.length&&(y=!a.some(v=>!!c&&v[i]===p[i])),y});return l&&(w=m(w)),w}function D4(e){return Tb.apply(this,arguments)}function Tb(){return(Tb=jt(function*(e){var{dispatch:t,loadOptions:r,convertStringItemsToObjects:o,filterText:s}=e,a=yield r(s).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!="object"&&(a=o(a)),t("loaded",{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}Ct(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var L4=Cs(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);Ct(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var U4=Cs(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function kf(e){B(e,U4())}Ct(`
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
`);var F4=Cs('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');Ct(`
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
`);var V4=he('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),B4=he('<div class="empty svelte-1ul7oo4">No options</div>'),W4=he('<div role="none"><!> <!> <!></div>'),H4=he('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),K4=he('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),J4=he('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),Q4=he("<div><!></div>"),G4=he('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),Y4=he('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),X4=he('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),Z4=he('<input type="hidden" class="svelte-1ul7oo4"/>'),e3=he('<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>'),t3=he('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function Vs(e,t){var r=(function(X){var de={};for(var $e in X.children&&(de.default=!0),X.$$slots)de[$e]=!0;return de})(t);vt(t,!1);var o,s=K(),a=K(),i=K(),l=K(),c=K(),d=K(),u=K(),m=K(),b=K(),w=Q2(),p=_(t,"justValue",12,null),y=_(t,"filter",8,I4),v=_(t,"getItems",8,D4),h=_(t,"id",8,null),f=_(t,"name",8,null),g=_(t,"container",12,void 0),x=_(t,"input",12,void 0),j=_(t,"multiple",8,!1),k=_(t,"multiFullItemClearable",8,!1),C=_(t,"disabled",8,!1),T=_(t,"focused",12,!1),R=_(t,"value",12,null),ne=_(t,"filterText",12,""),ee=_(t,"placeholder",8,"Please select"),F=_(t,"placeholderAlwaysShow",8,!1),te=_(t,"items",12,null),ye=_(t,"label",8,"label"),W=_(t,"itemFilter",8,(X,de,$e)=>"".concat(X).toLowerCase().includes(de.toLowerCase())),we=_(t,"groupBy",8,void 0),Re=_(t,"groupFilter",8,X=>X),Ee=_(t,"groupHeaderSelectable",8,!1),ge=_(t,"itemId",8,"value"),Q=_(t,"loadOptions",8,void 0),L=_(t,"containerStyles",8,""),le=_(t,"hasError",8,!1),A=_(t,"filterSelectedItems",8,!0),O=_(t,"required",8,!1),M=_(t,"closeListOnChange",8,!0),re=_(t,"clearFilterTextOnBlur",8,!0),Oe=_(t,"createGroupHeaderItem",8,(X,de)=>({value:X,[ye()]:X})),ae=()=>n(u),J=_(t,"searchable",8,!0),pe=_(t,"inputStyles",8,""),$=_(t,"clearable",8,!0),I=_(t,"loading",12,!1),D=_(t,"listOpen",12,!1),ce=_(t,"debounce",8,function(X){var de=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(X,de)}),G=_(t,"debounceWait",8,300),V=_(t,"hideEmptyState",8,!1),rt=_(t,"inputAttributes",24,()=>({})),ot=_(t,"listAutoWidth",8,!0),Ce=_(t,"showChevron",8,!1),lt=_(t,"listOffset",8,5),qe=_(t,"hoverItemIndex",12,0),He=_(t,"floatingConfig",24,()=>({})),it=_(t,"class",8,""),Ve=K(),Et=K(),P=K(),N=K(),U=K();function Y(X){return X.map((de,$e)=>({index:$e,value:de,label:"".concat(de)}))}function me(X){var de=[],$e={};X.forEach(st=>{var ct=we()(st);de.includes(ct)||(de.push(ct),$e[ct]=[],ct&&$e[ct].push(Object.assign(Oe()(ct,st),{id:ct,groupHeader:!0,selectable:Ee()}))),$e[ct].push(Object.assign({groupItem:!!ct},st))});var We=[];return Re()(de).forEach(st=>{$e[st]&&We.push(...$e[st])}),We}function Ne(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,de=arguments.length>1?arguments[1]:void 0;qe(X<0?0:X),!de&&we()&&n(u)[qe()]&&!n(u)[qe()].selectable&&It(1)}function ze(){var X=!0;if(R()){var de=[],$e=[];R().forEach(We=>{de.includes(We[ge()])?X=!1:(de.push(We[ge()]),$e.push(We))}),X||R($e)}return X}function ve(X){var de=X?X[ge()]:R()[ge()];return te().find($e=>$e[ge()]===de)}function be(X){return ft.apply(this,arguments)}function ft(){return(ft=jt(function*(X){var de=R()[X];R().length===1?R(void 0):R(R().filter($e=>$e!==de)),w("clear",de)})).apply(this,arguments)}function at(X){if(T())switch(X.stopPropagation(),X.key){case"Escape":X.preventDefault(),zt();break;case"Enter":if(X.preventDefault(),D()){if(n(u).length===0)break;var de=n(u)[qe()];if(R()&&!j()&&R()[ge()]===de[ge()]){zt();break}et(n(u)[qe()])}break;case"ArrowDown":X.preventDefault(),D()?It(1):(D(!0),S(Ve,void 0));break;case"ArrowUp":X.preventDefault(),D()?It(-1):(D(!0),S(Ve,void 0));break;case"Tab":if(D()&&T()){if(n(u).length===0||R()&&R()[ge()]===n(u)[qe()][ge()])return zt();X.preventDefault(),et(n(u)[qe()]),zt()}break;case"Backspace":if(!j()||ne().length>0)return;if(j()&&R()&&R().length>0){if(be(n(Ve)!==void 0?n(Ve):R().length-1),n(Ve)===0||n(Ve)===void 0)break;S(Ve,R().length>n(Ve)?n(Ve)-1:void 0)}break;case"ArrowLeft":if(!R()||!j()||ne().length>0)return;n(Ve)===void 0?S(Ve,R().length-1):R().length>n(Ve)&&n(Ve)!==0&&S(Ve,n(Ve)-1);break;case"ArrowRight":if(!R()||!j()||ne().length>0||n(Ve)===void 0)return;n(Ve)===R().length-1?S(Ve,void 0):n(Ve)<R().length-1&&S(Ve,n(Ve)+1)}}function Je(X){var de,$e;T()&&x()===((de=document)===null||de===void 0?void 0:de.activeElement)||(X&&w("focus",X),($e=x())===null||$e===void 0||$e.focus(),T(!0))}function Ge(X){return qt.apply(this,arguments)}function qt(){return(qt=jt(function*(X){var de;Ot||(D()||T())&&(w("blur",X),zt(),T(!1),S(Ve,void 0),(de=x())===null||de===void 0||de.blur())})).apply(this,arguments)}function kn(){if(!C())return ne().length>0?D(!0):void D(!D())}function En(){w("clear",R()),R(void 0),zt(),Je()}function zt(){re()&&ne(""),D(!1)}G2(jt(function*(){S(Et,R()),S(P,ne()),S(N,j())})),oo(()=>{D()&&T(!0),T()&&x()&&x().focus()});var dn=_(t,"ariaValues",8,X=>"Option ".concat(X,", selected.")),Vt=_(t,"ariaListOpen",8,(X,de)=>"You are currently focused on option ".concat(X,". There are ").concat(de," results available.")),Jt=_(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),cn,gt=K(null);function fn(){clearTimeout(cn),cn=setTimeout(()=>{Ot=!1},100)}Fo(()=>{var X;(X=n(gt))===null||X===void 0||X.remove()});var Ot=!1;function et(X){X&&X.selectable!==!1&&(function(de){if(de){ne("");var $e=Object.assign({},de);if($e.groupHeader&&!$e.selectable)return;R(j()?R()?R().concat([$e]):[$e]:R($e)),setTimeout(()=>{M()&&zt(),S(Ve,void 0),w("change",R()),w("select",de)})}})(X)}function Qt(X){Ot||qe(X)}function It(X){if(n(u).filter($e=>!Object.hasOwn($e,"selectable")||$e.selectable===!0).length===0)return qe(0);X>0&&qe()===n(u).length-1?qe(0):X<0&&qe()===0?qe(n(u).length-1):qe(qe()+X);var de=n(u)[qe()];de&&de.selectable===!1&&(X!==1&&X!==-1||It(X))}function zn(X,de,$e){if(!j())return de&&de[$e]===X[$e]}var Hn=ur,Vn=ur;function ur(X){return{update(de){de.scroll&&(fn(),X.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Gn=K({strategy:"absolute",placement:"bottom-start",middleware:[T4(lt()),q4(),A4()],autoUpdate:!1}),[or,mr,tr]=z4(n(Gn)),Cr=K(!0);fe(()=>(E(te()),E(R())),()=>{te(),R()&&(function(){if(typeof R()=="string"){var X=(te()||[]).find(de=>de[ge()]===R());R(X||{[ge()]:R(),label:R()})}else j()&&Array.isArray(R())&&R().length>0&&R(R().map(de=>typeof de=="string"?{value:de,label:de}:de))})()}),fe(()=>(E(rt()),E(J())),()=>{!rt()&&J()||(S(U,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},rt())),h()&&Oo(U,n(U).id=h()),J()||Oo(U,n(U).readonly=!0))}),fe(()=>E(j()),()=>{j()&&R()&&(Array.isArray(R())?R([...R()]):R([R()]))}),fe(()=>(n(N),E(j())),()=>{n(N)&&!j()&&R()&&R(null)}),fe(()=>(E(j()),E(R())),()=>{j()&&R()&&R().length>1&&ze()}),fe(()=>E(R()),()=>{R()&&(j()?JSON.stringify(R())!==JSON.stringify(n(Et))&&ze()&&w("input",R()):n(Et)&&JSON.stringify(R()[ge()])===JSON.stringify(n(Et)[ge()])||w("input",R()))}),fe(()=>(E(R()),E(j()),n(Et)),()=>{!R()&&j()&&n(Et)&&w("input",R())}),fe(()=>(E(T()),E(x())),()=>{!T()&&x()&&zt()}),fe(()=>(E(ne()),n(P)),()=>{ne()!==n(P)&&(Q()||ne().length!==0)&&(Q()?ce()(jt(function*(){I(!0);var X=yield v()({dispatch:w,loadOptions:Q(),convertStringItemsToObjects:Y,filterText:ne()});X?(I(X.loading),D(D()?X.listOpen:ne().length>0),T(D()&&X.focused),te(we()?me(X.filteredItems):X.filteredItems)):(I(!1),T(!0),D(!0))}),G()):(D(!0),j()&&S(Ve,void 0)))}),fe(()=>(E(y()),E(Q()),E(ne()),E(te()),E(j()),E(R()),E(ge()),E(we()),E(ye()),E(A()),E(W())),()=>{S(u,y()({loadOptions:Q(),filterText:ne(),items:te(),multiple:j(),value:R(),itemId:ge(),groupBy:we(),label:ye(),filterSelectedItems:A(),itemFilter:W(),convertStringItemsToObjects:Y,filterGroupedItems:me}))}),fe(()=>(E(j()),E(D()),E(R()),n(u)),()=>{!j()&&D()&&R()&&n(u)&&Ne(n(u).findIndex(X=>X[ge()]===R()[ge()]),!0)}),fe(()=>(E(D()),E(j())),()=>{D()&&j()&&qe(0)}),fe(()=>E(ne()),()=>{ne()&&qe(0)}),fe(()=>E(qe()),()=>{var X;X=qe(),w("hoverItem",X)}),fe(()=>(E(j()),E(R())),()=>{S(s,j()?R()&&R().length>0:R())}),fe(()=>(n(s),E(ne())),()=>{S(a,n(s)&&ne().length>0)}),fe(()=>(n(s),E($()),E(C()),E(I())),()=>{S(i,n(s)&&$()&&!C()&&!I())}),fe(()=>(E(F()),E(j()),E(ee()),E(R())),()=>{var X;S(l,F()&&j()||j()&&((X=R())===null||X===void 0?void 0:X.length)===0?ee():R()?"":ee())}),fe(()=>(E(R()),E(j())),()=>{var X,de;S(c,R()?(X=j(),de=void 0,de=X&&R().length>0?R().map($e=>$e[ye()]).join(", "):R()[ye()],dn()(de)):"")}),fe(()=>(n(u),E(qe()),E(T()),E(D())),()=>{S(d,(function(){if(!n(u)||n(u).length===0)return"";var X=n(u)[qe()];if(D()&&X){var de=n(u)?n(u).length:0;return Vt()(X[ye()],de)}return Jt()()})((n(u),qe(),T(),D())))}),fe(()=>E(te()),()=>{(function(X){X&&X.length!==0&&!X.some(de=>typeof de!="object")&&R()&&(j()?!R().some(de=>!de||!de[ge()]):R()[ge()])&&(Array.isArray(R())?R(R().map(de=>ve(de)||de)):R(ve()||R()))})(te())}),fe(()=>(E(j()),E(R()),E(ge())),()=>{p((j(),R(),ge(),j()?R()?R().map(X=>X[ge()]):null:R()?R()[ge()]:R()))}),fe(()=>(E(j()),n(Et),E(R())),()=>{j()||!n(Et)||R()||w("input",R())}),fe(()=>(E(D()),n(u),E(j()),E(R())),()=>{D()&&n(u)&&!j()&&!R()&&Ne()}),fe(()=>n(u),()=>{(function(X){D()&&w("filter",X)})(n(u))}),fe(()=>(E(g()),E(He()),n(Gn)),()=>{g()&&He()&&tr(Object.assign(n(Gn),He()))}),fe(()=>n(gt),()=>{S(m,!!n(gt))}),fe(()=>(n(gt),E(D())),()=>{(function(X,de){if(!X||!de)return S(Cr,!0);setTimeout(()=>{S(Cr,!1)},0)})(n(gt),D())}),fe(()=>(E(D()),E(g()),n(gt)),()=>{D()&&g()&&n(gt)&&(function(){var{width:X}=g().getBoundingClientRect();Oo(gt,n(gt).style.width=ot()?X+"px":"auto")})()}),fe(()=>E(qe()),()=>{S(b,qe())}),fe(()=>(E(x()),E(D()),E(T())),()=>{x()&&D()&&!T()&&Je()}),fe(()=>(E(g()),E(He())),()=>{var X;g()&&((X=He())===null||X===void 0?void 0:X.autoUpdate)===void 0&&Oo(Gn,n(Gn).autoUpdate=!0)}),xn();var gr={getFilteredItems:ae,handleClear:En};Rt();var xr,nr=t3();Te("click",La,function(X){var de;D()||T()||!g()||g().contains(X.target)||(de=n(gt))!==null&&de!==void 0&&de.contains(X.target)||Ge()}),Te("keydown",La,at);var Pe=H(nr),Dt=X=>{var de,$e=W4(),We=H($e),st=Tt=>{var Xt=Ut();vr(tt(Xt),t,"list-prepend",{},null),B(Tt,Xt)};je(We,Tt=>{Z(()=>r["list-prepend"])&&Tt(st)});var ct=se(We,2),bt=Tt=>{var Xt=Ut();vr(tt(Xt),t,"list",{get filteredItems(){return n(u)}},null),B(Tt,Xt)},Ln=Tt=>{var Xt=Ut(),Tr=tt(Xt),wt=on=>{var vn=Ut();pr(tt(vn),1,()=>n(u),_r,(Kn,On,kt)=>{var Er,yr=V4(),Ar=H(yr);vr(H(Ar),t,"item",{get item(){return n(On)},index:kt},Sn=>{var $n=Br();Le(()=>pt($n,(n(On),E(ye()),Z(()=>{var Sr;return(Sr=n(On))===null||Sr===void 0?void 0:Sr[ye()]})))),B(Sn,$n)}),lo(Ar,(Sn,$n)=>Hn?.(Sn),()=>({scroll:zn(n(On),R(),ge()),listDom:n(m)})),lo(Ar,(Sn,$n)=>Vn?.(Sn),()=>({scroll:n(b)===kt,listDom:n(m)})),Le(Sn=>Er=Mt(Ar,1,"item svelte-1ul7oo4",null,Er,Sn),[()=>{var Sn,$n;return{"list-group-title":n(On).groupHeader,active:zn(n(On),R(),ge()),first:($n=kt,$n===0),hover:qe()===kt,"group-item":n(On).groupItem,"not-selectable":((Sn=n(On))===null||Sn===void 0?void 0:Sn.selectable)===!1}}]),Te("mouseover",yr,()=>Qt(kt)),Te("focus",yr,()=>Qt(kt)),Te("click",yr,Ma(()=>(function(Sn){var{item:$n,i:Sr}=Sn;if($n?.selectable!==!1)return R()&&!j()&&R()[ge()]===$n[ge()]?zt():void((function(z){return z.groupHeader&&z.selectable||z.selectable||!z.hasOwnProperty("selectable")})($n)&&(qe(Sr),et($n)))})({item:n(On),i:kt}))),Te("keydown",yr,es(Ma(function(Sn){Pl.call(this,t,Sn)}))),B(Kn,yr)}),B(on,vn)},gn=on=>{var vn=Ut(),Kn=tt(vn),On=kt=>{var Er=Ut();vr(tt(Er),t,"empty",{},yr=>{B(yr,B4())}),B(kt,Er)};je(Kn,kt=>{V()||kt(On)},!0),B(on,vn)};je(Tr,on=>{n(u),Z(()=>n(u).length>0)?on(wt):on(gn,!1)},!0),B(Tt,Xt)};je(ct,Tt=>{Z(()=>r.list)?Tt(bt):Tt(Ln,!1)});var Yt=se(ct,2),rn=Tt=>{var Xt=Ut();vr(tt(Xt),t,"list-append",{},null),B(Tt,Xt)};je(Yt,Tt=>{Z(()=>r["list-append"])&&Tt(rn)}),lo($e,Tt=>mr?.(Tt)),er($e,Tt=>S(gt,Tt),()=>n(gt)),Qr(()=>Te("scroll",$e,fn)),Qr(()=>Te("pointerup",$e,es(Ma(function(Tt){Pl.call(this,t,Tt)})))),Qr(()=>Te("mousedown",$e,es(Ma(function(Tt){Pl.call(this,t,Tt)})))),Le(()=>de=Mt($e,1,"svelte-select-list svelte-1ul7oo4",null,de,{prefloat:n(Cr)})),B(X,$e)};je(Pe,X=>{D()&&X(Dt)});var jn=se(Pe,2),In=H(jn),dr=X=>{var de=H4(),$e=tt(de),We=H($e),st=H(se($e,2));Le(()=>{pt(We,n(c)),pt(st,n(d))}),B(X,de)};je(In,X=>{T()&&X(dr)});var Nr=se(jn,2);vr(H(Nr),t,"prepend",{},null);var Ht=se(Nr,2),kr=H(Ht),Wr=X=>{var de=Ut(),$e=tt(de),We=ct=>{var bt=Ut();pr(tt(bt),1,R,_r,(Ln,Yt,rn)=>{var Tt,Xt=J4(),Tr=H(Xt);vr(H(Tr),t,"selection",{get selection(){return n(Yt)},index:rn},on=>{var vn=Br();Le(()=>pt(vn,(n(Yt),E(ye()),Z(()=>n(Yt)[ye()])))),B(on,vn)});var wt=se(Tr,2),gn=on=>{var vn=K4();vr(H(vn),t,"multi-clear-icon",{},Kn=>{kf(Kn)}),Te("pointerup",vn,es(Ma(()=>be(rn)))),B(on,vn)};je(wt,on=>{C()||k()||!kf||on(gn)}),Le(()=>Tt=Mt(Xt,1,"multi-item svelte-1ul7oo4",null,Tt,{active:n(Ve)===rn,disabled:C()})),Te("click",Xt,es(()=>k()?be(rn):{})),Te("keydown",Xt,es(Ma(function(on){Pl.call(this,t,on)}))),B(Ln,Xt)}),B(ct,bt)},st=ct=>{var bt,Ln=Q4();vr(H(Ln),t,"selection",{get selection(){return R()}},Yt=>{var rn=Br();Le(()=>pt(rn,(E(R()),E(ye()),Z(()=>R()[ye()])))),B(Yt,rn)}),Le(()=>bt=Mt(Ln,1,"selected-item svelte-1ul7oo4",null,bt,{"hide-selected-item":n(a)})),B(ct,Ln)};je($e,ct=>{j()?ct(We):ct(st,!1)}),B(X,de)};je(kr,X=>{n(s)&&X(Wr)});var rr=se(kr,2);Ou(rr,()=>De(De({readOnly:!J()},n(U)),{},{placeholder:n(l),style:pe(),disabled:C()}),void 0,void 0,void 0,"svelte-1ul7oo4",!0),er(rr,X=>x(X),()=>x());var Vr=se(Ht,2),Dn=H(Vr),Gt=X=>{var de=G4();vr(H(de),t,"loading-icon",{},$e=>{(function(We){B(We,F4())})($e)}),B(X,de)};je(Dn,X=>{I()&&X(Gt)});var Nt=se(Dn,2),Rn=X=>{var de=Y4();vr(H(de),t,"clear-icon",{},$e=>{kf($e)}),Te("click",de,En),B(X,de)};je(Nt,X=>{n(i)&&X(Rn)});var br=se(Nt,2),ar=X=>{var de=X4();vr(H(de),t,"chevron-icon",{get listOpen(){return D()}},$e=>{(function(We){B(We,L4())})($e)}),B(X,de)};je(br,X=>{Ce()&&X(ar)});var ie=se(Vr,2);vr(ie,t,"input-hidden",{get value(){return R()}},X=>{var de=Z4();Le($e=>{wn(de,"name",f()),ni(de,$e)},[()=>(E(R()),Z(()=>R()?JSON.stringify(R()):null))]),B(X,de)});var ke=se(ie,2),Ie=X=>{var de=Ut();vr(tt(de),t,"required",{get value(){return R()}},$e=>{B($e,e3())}),B(X,de)};return je(ke,X=>{E(O()),E(R()),Z(()=>O()&&(!R()||R().length===0))&&X(Ie)}),Qr(()=>Te("pointerup",nr,es(kn))),er(nr,X=>g(X),()=>g()),lo(nr,X=>or?.(X)),Le(()=>{var X;xr=Mt(nr,1,"svelte-select ".concat((X=it())!==null&&X!==void 0?X:""),"svelte-1ul7oo4",xr,{multi:j(),disabled:C(),focused:T(),"list-open":D(),"show-chevron":Ce(),error:le()}),Lo(nr,L())}),Te("keydown",rr,at),Te("blur",rr,Ge),Te("focus",rr,Je),Hu(rr,ne),B(e,nr),xt(t,"getFilteredItems",ae),xt(t,"handleClear",En),ht(gr)}Ct(`/* over all fonts, sizes, and colors */
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
}`);var n3=he('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function r3(e,t){var r,o,s,a,i;vt(t,!1);var l=K(void 0,!0),c=K(void 0,!0),d=K(void 0,!0),u=K(void 0,!0),m=K(void 0,!0),b=K(void 0,!0),w=Fr("jsoneditor:TransformWizard"),p=_(t,"json",9),y=_(t,"queryOptions",29,()=>({})),v=_(t,"onChange",9),h=["==","!=","<","<=",">",">="].map(A=>({value:A,label:A})),f=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],g=K((r=y())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?as(y().filter.path):void 0,!0),x=K((o=h.find(A=>{var O;return A.value===((O=y().filter)===null||O===void 0?void 0:O.relation)}))!==null&&o!==void 0?o:h[0],!0),j=K(((s=y())===null||s===void 0||(s=s.filter)===null||s===void 0?void 0:s.value)||"",!0),k=K((a=y())!==null&&a!==void 0&&(a=a.sort)!==null&&a!==void 0&&a.path?as(y().sort.path):void 0,!0),C=K((i=f.find(A=>{var O;return A.value===((O=y().sort)===null||O===void 0?void 0:O.direction)}))!==null&&i!==void 0?i:f[0],!0);fe(()=>E(p()),()=>{S(l,Array.isArray(p()))}),fe(()=>(n(l),E(p())),()=>{S(c,n(l)?Wf(p()):[])}),fe(()=>(n(l),E(p())),()=>{S(d,n(l)?Wf(p(),!0):[])}),fe(()=>(n(c),as),()=>{S(u,n(c).map(as))}),fe(()=>(n(d),as),()=>{S(m,n(d)?n(d).map(as):[])}),fe(()=>(E(y()),n(m),Ft),()=>{var A;S(b,(A=y())!==null&&A!==void 0&&(A=A.projection)!==null&&A!==void 0&&A.paths&&n(m)?y().projection.paths.map(O=>n(m).find(M=>Ft(M.value,O))).filter(O=>!!O):void 0)}),fe(()=>n(g),()=>{var A,O,M;O=(A=n(g))===null||A===void 0?void 0:A.value,Ft((M=y())===null||M===void 0||(M=M.filter)===null||M===void 0?void 0:M.path,O)||(w("changeFilterPath",O),y(fo(y(),["filter","path"],O,!0)),v()(y()))}),fe(()=>n(x),()=>{var A,O,M;O=(A=n(x))===null||A===void 0?void 0:A.value,Ft((M=y())===null||M===void 0||(M=M.filter)===null||M===void 0?void 0:M.relation,O)||(w("changeFilterRelation",O),y(fo(y(),["filter","relation"],O,!0)),v()(y()))}),fe(()=>n(j),()=>{var A,O;A=n(j),Ft((O=y())===null||O===void 0||(O=O.filter)===null||O===void 0?void 0:O.value,A)||(w("changeFilterValue",A),y(fo(y(),["filter","value"],A,!0)),v()(y()))}),fe(()=>n(k),()=>{var A,O,M;O=(A=n(k))===null||A===void 0?void 0:A.value,Ft((M=y())===null||M===void 0||(M=M.sort)===null||M===void 0?void 0:M.path,O)||(w("changeSortPath",O),y(fo(y(),["sort","path"],O,!0)),v()(y()))}),fe(()=>n(C),()=>{var A,O,M;O=(A=n(C))===null||A===void 0?void 0:A.value,Ft((M=y())===null||M===void 0||(M=M.sort)===null||M===void 0?void 0:M.direction,O)||(w("changeSortDirection",O),y(fo(y(),["sort","direction"],O,!0)),v()(y()))}),fe(()=>n(b),()=>{(function(A){var O;Ft((O=y())===null||O===void 0||(O=O.projection)===null||O===void 0?void 0:O.paths,A)||(w("changeProjectionPaths",A),y(fo(y(),["projection","paths"],A,!0)),v()(y()))})(n(b)?n(b).map(A=>A.value):void 0)}),xn(),Rt(!0);var T=n3(),R=H(T),ne=H(R),ee=se(H(ne)),F=H(ee),te=H(F);Vs(te,{class:"jse-filter-path",showChevron:!0,get items(){return n(u)},get value(){return n(g)},set value(A){S(g,A)},$$legacy:!0});var ye=se(te,2);Vs(ye,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return h},get value(){return n(x)},set value(A){S(x,A)},$$legacy:!0});var W=se(ye,2),we=se(ne),Re=se(H(we)),Ee=H(Re),ge=H(Ee);Vs(ge,{class:"jse-sort-path",showChevron:!0,get items(){return n(u)},get value(){return n(k)},set value(A){S(k,A)},$$legacy:!0}),Vs(se(ge,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return f},get value(){return n(C)},set value(A){S(C,A)},$$legacy:!0});var Q=se(we),L=se(H(Q)),le=H(L);Vs(H(le),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(m)},get value(){return n(b)},set value(A){S(b,A)},$$legacy:!0}),Hu(W,()=>n(j),A=>S(j,A)),B(e,T),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var o3=he('<button type="button"><!> </button>'),a3=he('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function s3(e,t){vt(t,!1);var r=_(t,"queryLanguages",8),o=_(t,"queryLanguageId",12),s=_(t,"onChangeQueryLanguage",8);Rt();var a=a3();pr(H(a),5,r,_r,(i,l)=>{var c,d=o3(),u=H(d),m=p=>{nn(p,{get data(){return $g}})},b=p=>{nn(p,{get data(){return Pg}})};je(u,p=>{n(l),E(o()),Z(()=>n(l).id===o())?p(m):p(b,!1)});var w=se(u);Le(()=>{var p;c=Mt(d,1,"jse-query-language svelte-jrd4q2",null,c,{selected:n(l).id===o()}),wn(d,"title",(n(l),Z(()=>"Select ".concat(n(l).name," as query language")))),pt(w," ".concat((n(l),(p=Z(()=>n(l).name))!==null&&p!==void 0?p:"")))}),Te("click",d,()=>{return p=n(l).id,o(p),void s()(p);var p}),B(i,d)}),B(e,a),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var i3=he('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),l3=he('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function sd(e,t){vt(t,!1);var r=_(t,"title",9,"Modal"),o=_(t,"fullScreenButton",9,!1),s=_(t,"fullscreen",13,!1),a=_(t,"onClose",9,void 0);Rt(!0);var i=l3(),l=H(i),c=H(l),d=se(l,2);vr(d,t,"actions",{},null);var u=se(d,2),m=w=>{var p=i3(),y=H(p),v=nt(()=>s()?pw:Uw);nn(y,{get data(){return n(v)}}),Te("click",p,()=>s(!s())),B(w,p)};je(u,w=>{o()&&w(m)});var b=se(u,2);nn(H(b),{get data(){return vd}}),Le(()=>pt(c,r())),Te("click",b,()=>{var w;return(w=a())===null||w===void 0?void 0:w()}),B(e,i),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var c3=he('<button slot="actions" type="button" title="Select a query language"><!></button>'),Sf=Fr("jsoneditor:AutoScrollHandler");function Km(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function s(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function a(l){r&&l===t||(i(),Sf("startAutoScroll",l),t=l,r=setInterval(s,50))}function i(){r&&(Sf("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return Sf("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:d,bottom:u}=e.getBoundingClientRect();c<d?a(-o(d-c)):c>u?a(o(c-u)):i()}},onDragEnd:function(){i()}}}var u3=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,Ab=()=>{var e,t,r,o,s,a,i,l,c,d,u,m,b;function w(v){return v.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function p(v){e.scrollTo?e.scrollTo(e.scrollLeft,v):e.scrollTop=v}function y(v){d||(d=v),p(a(u=v-d,r,l,c)),b=!0,u<c?requestAnimationFrame(y):(function(){p(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof m=="function"&&m(),d=0,b=!1})()}return function(v){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,s=h.offset||0,m=h.callback,a=h.easing||u3,i=h.a11y||!1,typeof h.container){case"object":e=h.container;break;case"string":e=document.querySelector(h.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof v){case"number":t=void 0,i=!1,o=r+v;break;case"object":o=w(t=v);break;case"string":t=document.querySelector(v),o=w(t)}switch(l=o-r+s,typeof h.duration){case"number":c=h.duration;break;case"function":c=h.duration(l)}b?d=0:requestAnimationFrame(y)}};function Ai(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var Ci=Fr("validation"),d3={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Jm(e,t,r,o){return Wv(e,t,r,o,d3)}function qb(e,t,r,o){if(Ci("validateJSON"),!t)return[];if(r!==o){var s=r.stringify(e);return t(s!==void 0?o.parse(s):void 0)}return t(e)}function f3(e,t,r,o){if(Ci("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:Go.info}]};if(e.length!==0)try{var s=Ai(()=>r.parse(e),c=>Ci("validate: parsed json in ".concat(c," ms")));if(!t)return;var a=r===o?s:Ai(()=>o.parse(e),c=>Ci("validate: parsed json with the validationParser in ".concat(c," ms"))),i=Ai(()=>t(a),c=>Ci("validate: validated json in ".concat(c," ms")));return un(i)?void 0:{validationErrors:i}}catch(c){var l=Ai(()=>(function(d,u){if(d.length>Fk)return!1;try{return u.parse(va(d)),!0}catch{return!1}})(e,r),d=>Ci("validate: checked whether repairable in ".concat(d," ms")));return{parseError:Yi(e,c.message||c.toString()),isRepairable:l}}}var bu=Fr("jsoneditor:FocusTracker");function Yv(e){var t,{onMount:r,onDestroy:o,getWindow:s,hasFocus:a,onFocus:i,onBlur:l}=e,c=!1;function d(){var m=a();m&&(clearTimeout(t),c||(bu("focus"),i(),c=m))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(bu("blur"),c=!1,l())}))}r(()=>{bu("mount FocusTracker");var m=s();m&&(m.addEventListener("focusin",d,!0),m.addEventListener("focusout",u,!0))}),o(()=>{bu("destroy FocusTracker");var m=s();m&&(m.removeEventListener("focusin",d,!0),m.removeEventListener("focusout",u,!0))})}Ct(`/* over all fonts, sizes, and colors */
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
}`);var v3=he('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),h3=he('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function Mo(e,t){vt(t,!1);var r=_(t,"type",9,"success"),o=_(t,"icon",9,void 0),s=_(t,"message",9,void 0),a=_(t,"actions",25,()=>[]),i=_(t,"onClick",9,void 0),l=_(t,"onClose",9,void 0);l()&&Fo(l()),Rt(!0);var c,d=h3(),u=H(d),m=H(u),b=H(m),w=y=>{nn(y,{get data(){return o()}})};je(b,y=>{o()&&y(w)});var p=se(b);pr(se(u,2),5,a,_r,(y,v)=>{var h=v3(),f=H(h),g=j=>{nn(j,{get data(){return n(v),Z(()=>n(v).icon)}})};je(f,j=>{n(v),Z(()=>n(v).icon)&&j(g)});var x=se(f);Le(()=>{var j;wn(h,"title",(n(v),Z(()=>n(v).title))),h.disabled=(n(v),Z(()=>n(v).disabled)),pt(x," ".concat((n(v),(j=Z(()=>n(v).text))!==null&&j!==void 0?j:"")))}),Te("click",h,()=>{n(v).onClick&&n(v).onClick()}),Te("mousedown",h,()=>{n(v).onMouseDown&&n(v).onMouseDown()}),B(y,h)}),Le(()=>{var y,v;Mt(d,1,"jse-message jse-".concat((y=r())!==null&&y!==void 0?y:""),"svelte-cbvd26"),c=Mt(u,1,"jse-text svelte-cbvd26",null,c,{"jse-clickable":!!i()}),pt(p," ".concat((v=s())!==null&&v!==void 0?v:""))}),Te("click",u,function(){i()&&i()()}),B(e,d),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var p3=he('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),m3=he('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),g3=he('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),b3=he('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),y3=he('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),j3=he('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function Xv(e,t){vt(t,!1);var r=K(void 0,!0),o=_(t,"validationErrors",9),s=_(t,"selectError",9),a=K(!0,!0);function i(){S(a,!1)}function l(){S(a,!0)}fe(()=>E(o()),()=>{S(r,o().length)}),xn(),Rt(!0);var c=Ut(),d=tt(c),u=m=>{var b=j3(),w=H(b),p=v=>{var h=b3(),f=H(h),g=H(f);pr(g,1,()=>(E(Ku),E(o()),E(fu),Z(()=>Ku(o(),fu))),_r,(k,C,T)=>{var R=m3(),ne=H(R);nn(H(ne),{get data(){return Ys}});var ee=se(ne),F=H(ee),te=se(ee),ye=H(te),W=H(se(te)),we=Re=>{var Ee=p3();nn(H(Ee),{get data(){return qw}}),Te("click",Ee,Ma(i)),B(Re,Ee)};je(W,Re=>{E(o()),Z(()=>T===0&&o().length>1)&&Re(we)}),Le(Re=>{var Ee;Mt(R,1,"jse-validation-".concat((n(C),(Ee=Z(()=>n(C).severity))!==null&&Ee!==void 0?Ee:"")),"svelte-1342rh4"),pt(F,Re),pt(ye,(n(C),Z(()=>n(C).message)))},[()=>(E(mo),n(C),Z(()=>mo(n(C).path)))]),Te("click",R,()=>{setTimeout(()=>s()(n(C)))}),B(k,R)});var x=se(g),j=k=>{var C=g3(),T=se(H(C),2),R=H(T);Le(()=>pt(R,"(and ".concat(n(r)-fu," more errors)"))),B(k,C)};je(x,k=>{n(r)>fu&&k(j)}),B(v,h)},y=v=>{var h=y3(),f=H(h),g=H(f),x=H(g);nn(H(x),{get data(){return Ys}});var j=H(se(x));nn(H(se(j)),{get data(){return Ng}}),Le(k=>{var C;Mt(g,1,"jse-validation-".concat(k??""),"svelte-1342rh4"),pt(j,"".concat((C=n(r))!==null&&C!==void 0?C:""," validation errors "))},[()=>(E(o()),Z(()=>{return k=o(),[Go.error,Go.warning,Go.info].find(C=>k.some(T=>T.severity===C));var k}))]),Te("click",g,l),B(v,h)};je(w,v=>{n(a)||n(r)===1?v(p):v(y,!1)}),B(m,b)};je(d,m=>{E(un),E(o()),Z(()=>!un(o()))&&m(u)}),B(e,c),ht()}function id(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}Ct(`/* over all fonts, sizes, and colors */
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
}`);var w3=he('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function Ql(e,t){vt(t,!1);var r=_(t,"className",8,void 0),o=_(t,"fullscreen",8,!1),s=_(t,"onClose",8),a=K();function i(){s()()}oo(()=>n(a).showModal()),Fo(()=>n(a).close()),Rt();var l,c=w3(),d=H(c);vr(H(d),t,"default",{},null),er(c,u=>S(a,u),()=>n(a)),Qr(()=>Te("close",c,i)),Qr(()=>{return Te("pointerdown",c,(u=i,function(){for(var m=arguments.length,b=new Array(m),w=0;w<m;w++)b[w]=arguments[w];b[0].target===this&&u?.apply(this,b)}));var u}),Qr(()=>Te("cancel",c,es(function(u){Pl.call(this,t,u)}))),lo(c,(u,m)=>id?.(u,m),()=>i),Le(u=>l=Mt(c,1,u,"svelte-2aoco4",l,{"jse-fullscreen":o()}),[()=>ws((E(na),E(r()),Z(()=>na("jse-modal",r()))))]),B(e,c),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var x3=he('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function zb(e,t){vt(t,!1);var r=_(t,"onClose",9),o=zv()?"⌘":"Ctrl";Rt(!0),Ql(e,{get onClose(){return r()},className:"jse-copy-paste",children:(s,a)=>{var i=x3(),l=tt(i);sd(l,{title:"Copying and pasting",get onClose(){return r()}});var c=se(l,2),d=se(H(c),2),u=H(d),m=H(u),b=H(m),w=se(u,2),p=H(w),y=H(p),v=H(se(w,2)),h=H(v),f=H(se(d,2));Le(()=>{pt(b,"".concat(o,"+C")),pt(y,"".concat(o,"+X")),pt(h,"".concat(o,"+V"))}),Te("click",f,function(){for(var g,x=arguments.length,j=new Array(x),k=0;k<x;k++)j[k]=arguments[k];(g=r())===null||g===void 0||g.apply(this,j)}),B(s,i)},$$slots:{default:!0}}),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var k3=he('<div class="jse-separator svelte-3erbu0"></div>'),S3=he('<div class="jse-space svelte-3erbu0"></div>'),_3=he('<button type="button"><!> <!></button>'),C3=he('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function Md(e,t){vt(t,!1);var r=_(t,"items",25,()=>[]);Rt(!0);var o=C3(),s=H(o);vr(s,t,"left",{},null);var a=se(s,2);pr(a,1,r,_r,(i,l)=>{var c=Ut(),d=tt(c),u=b=>{B(b,k3())},m=b=>{var w=Ut(),p=tt(w),y=h=>{B(h,S3())},v=h=>{var f=Ut(),g=tt(f),x=k=>{var C=_3(),T=H(C),R=F=>{nn(F,{get data(){return n(l),Z(()=>n(l).icon)}})};je(T,F=>{n(l),Z(()=>n(l).icon)&&F(R)});var ne=se(T,2),ee=F=>{var te=Br();Le(()=>pt(te,(n(l),Z(()=>n(l).text)))),B(F,te)};je(ne,F=>{n(l),Z(()=>n(l).text)&&F(ee)}),Le(()=>{var F;Mt(C,1,"jse-button ".concat((n(l),(F=Z(()=>n(l).className))!==null&&F!==void 0?F:"")),"svelte-3erbu0"),wn(C,"title",(n(l),Z(()=>n(l).title))),C.disabled=(n(l),Z(()=>n(l).disabled||!1))}),Te("click",C,function(){for(var F,te=arguments.length,ye=new Array(te),W=0;W<te;W++)ye[W]=arguments[W];(F=n(l).onClick)===null||F===void 0||F.apply(this,ye)}),B(k,C)},j=k=>{var C=Br();Le(T=>pt(C,T),[()=>(n(l),Z(()=>(function(T){return console.error("Unknown type of menu item",T),"???"})(n(l))))]),B(k,C)};je(g,k=>{E(Ra),n(l),Z(()=>Ra(n(l)))?k(x):k(j,!1)},!0),B(h,f)};je(p,h=>{E(Qf),n(l),Z(()=>Qf(n(l)))?h(y):h(v,!1)},!0),B(b,w)};je(d,b=>{E(os),n(l),Z(()=>os(n(l)))?b(u):b(m,!1)}),B(i,c)}),vr(se(a,2),t,"right",{},null),B(e,o),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var E3=he('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),O3=he('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function $3(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=K(void 0,!0),i=K(void 0,!0),l=K(void 0,!0),c=_(t,"text",13,""),d=_(t,"readOnly",9,!1),u=_(t,"onParse",9),m=_(t,"onRepair",9),b=_(t,"onChange",9,void 0),w=_(t,"onApply",9),p=_(t,"onCancel",9),y=Fr("jsoneditor:JSONRepair"),v=K(void 0,!0);function h(){if(n(v)&&n(r)){var ee=n(r).position!==void 0?n(r).position:0;n(v).setSelectionRange(ee,ee),n(v).focus()}}function f(){w()(c())}function g(){try{c(m()(c())),b()&&b()(c())}catch{}}var x=K(void 0,!0);fe(()=>E(c()),()=>{S(r,(function(ee){try{return void u()(ee)}catch(F){return Yi(ee,F.message)}})(c()))}),fe(()=>E(c()),()=>{S(o,(function(ee){try{return m()(ee),!0}catch{return!1}})(c()))}),fe(()=>n(r),()=>{y("error",n(r))}),fe(()=>E(p()),()=>{S(x,[{type:"space"},{type:"button",icon:vd,title:"Cancel repair",className:"jse-cancel",onClick:p()}])}),fe(()=>yh,()=>{S(s,{icon:yh,text:"Show me",title:"Scroll to the error location",onClick:h})}),fe(()=>bs,()=>{S(a,{icon:bs,text:"Auto repair",title:"Automatically repair JSON",onClick:g})}),fe(()=>(n(o),n(s),n(a)),()=>{S(i,n(o)?[n(s),n(a)]:[n(s)])}),fe(()=>E(d()),()=>{S(l,[{icon:xv,text:"Apply",title:"Apply fixed JSON",disabled:d(),onClick:f}])}),xn(),Rt(!0);var j=O3(),k=H(j);Md(k,{get items(){return n(x)},$$slots:{left:(ee,F)=>{B(ee,E3())}}});var C=se(k,2),T=ee=>{var F=nt(()=>(n(r),Z(()=>"Cannot parse JSON: ".concat(n(r).message))));Mo(ee,{type:"error",get icon(){return Ys},get message(){return n(F)},get actions(){return n(i)}})},R=ee=>{Mo(ee,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};je(C,ee=>{n(r)?ee(T):ee(R,!1)});var ne=se(C,2);er(ne,ee=>S(v,ee),()=>n(v)),Le(()=>{ne.readOnly=d(),ni(ne,c())}),Te("input",ne,function(ee){y("handleChange");var F=ee.target.value;c()!==F&&(c(F),b()&&b()(c()))}),B(e,j),ht()}function Ib(e,t){vt(t,!1);var r=_(t,"text",13),o=_(t,"onParse",9),s=_(t,"onRepair",9),a=_(t,"onApply",9),i=_(t,"onClose",9);function l(d){a()(d),i()()}function c(){i()()}Rt(!0),Ql(e,{get onClose(){return i()},className:"jse-repair-modal",children:(d,u)=>{$3(d,{get onParse(){return o()},get onRepair(){return s()},onApply:l,onCancel:c,get text(){return r()},set text(m){r(m)},$$legacy:!0})},$$slots:{default:!0}}),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var P3=he('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),M3=he('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function R3(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=K(void 0,!0),i=K(void 0,!0),l=_(t,"visibleSections",9),c=_(t,"sectionIndex",9),d=_(t,"total",9),u=_(t,"path",9),m=_(t,"selection",9),b=_(t,"onExpandSection",9),w=_(t,"context",9);fe(()=>(E(l()),E(c())),()=>{S(r,l()[c()])}),fe(()=>n(r),()=>{S(o,n(r).end)}),fe(()=>(E(l()),E(c()),E(d())),()=>{S(s,l()[c()+1]?l()[c()+1].start:d())}),fe(()=>(E(w()),E(m()),E(u()),n(o)),()=>{S(a,Hl(w().getJson(),m(),u().concat(String(n(o)))))}),fe(()=>(n(o),n(s)),()=>{S(i,(function(x,j){var k={start:x,end:Math.min(Jf(x),j)},C=Math.max(Qu((x+j)/2),x),T={start:C,end:Math.min(Jf(C),j)},R=Qu(j),ne=R===j?R-Fl:R,ee={start:Math.max(ne,x),end:j},F=[k],te=T.start>=k.end&&T.end<=ee.start;return te&&F.push(T),ee.start>=(te?T.end:k.end)&&F.push(ee),F})(n(o),n(s)))}),xn(),Rt(!0);var p,y,v=M3(),h=H(v),f=H(h),g=H(f);pr(se(f,2),1,()=>n(i),_r,(x,j)=>{var k=P3(),C=H(k);Le(()=>{var T,R;return pt(C,"show ".concat((n(j),(T=Z(()=>n(j).start))!==null&&T!==void 0?T:""),"-").concat((n(j),(R=Z(()=>n(j).end))!==null&&R!==void 0?R:"")))}),Te("click",k,()=>b()(u(),n(j))),B(x,k)}),Le(()=>{var x,j;p=Mt(v,1,"jse-collapsed-items svelte-1v6dhm4",null,p,{"jse-selected":n(a)}),y=Lo(v,"",y,{"--level":(E(u()),Z(()=>u().length+2))}),pt(g,"Items ".concat((x=n(o))!==null&&x!==void 0?x:"","-").concat((j=n(s))!==null&&j!==void 0?j:""))}),Te("mousemove",v,function(x){x.stopPropagation()}),B(e,v),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var N3=he('<button type="button"><!></button>');function ts(e,t){vt(t,!1);var r=_(t,"root",9,!1),o=_(t,"insert",9,!1),s=_(t,"selected",9),a=_(t,"onContextMenu",9);Rt(!0);var i,l=N3();nn(H(l),{get data(){return Ba}}),Le(()=>{i=Mt(l,1,"jse-context-menu-pointer svelte-10ijtzr",null,i,{"jse-root":r(),"jse-insert":o(),"jse-selected":s()}),wn(l,"title",Dv)}),Te("click",l,function(c){for(var d=c.target;d&&d.nodeName!=="BUTTON";)d=d.parentNode;d&&a()({anchor:d,left:0,top:0,width:qa,height:Aa,offsetTop:2,offsetLeft:0,showTip:!0})}),B(e,l),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var T3=he('<div role="none" data-type="selectable-key"><!></div>'),A3=he("<!> <!>",1),q3=he('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function Db(e,t){vt(t,!0);var r=ho(()=>pn(t.selection)&&Dr(t.selection)),o=ho(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:n(r),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),s=Ut();pr(tt(s),17,()=>n(o),_r,(a,i)=>{var l=Ut(),c=tt(l),d=m=>{var b=ho(()=>n(i).action),w=q3();lo(w,(p,y)=>{var v;return(v=n(b))===null||v===void 0?void 0:v(p,y)},()=>n(i).props),B(m,w)},u=m=>{var b=ho(()=>n(i).component),w=Ut();U0(tt(w),()=>n(b),(p,y)=>{y(p,ps(()=>n(i).props))}),B(m,w)};je(c,m=>{Kk(n(i))?m(d):m(u,!1)}),B(a,l)}),B(e,s),ht()}var z3={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function _f(e){var{json:t,selection:r,deltaY:o,items:s}=e;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var a=o<0?(function(u){for(var{json:m,items:b,selection:w,deltaY:p}=u,y=za(m,w),v=b.findIndex(k=>Ft(k.path,y)),h=()=>{var k;return(k=b[f-1])===null||k===void 0?void 0:k.height},f=v,g=0;h()!==void 0&&Math.abs(p)>g+h()/2;)g+=h(),f-=1;var x=b[f].path,j=f-v;return f!==v&&b[f]!==void 0?{beforePath:x,offset:j}:void 0})({json:t,selection:r,deltaY:o,items:s}):(function(u){for(var m,{json:b,items:w,selection:p,deltaY:y}=u,v=gs(b,p),h=w.findIndex(ne=>Ft(ne.path,v)),f=0,g=h,x=()=>{var ne;return(ne=w[g+1])===null||ne===void 0?void 0:ne.height};x()!==void 0&&Math.abs(y)>f+x()/2;)f+=x(),g+=1;var j=tn(v),k=Xe(b,j),C=Array.isArray(k)?g:g+1,T=(m=w[C])===null||m===void 0?void 0:m.path,R=g-h;return T?{beforePath:T,offset:R}:{append:!0,offset:R}})({json:t,selection:r,deltaY:o,items:s});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=(function(u,m,b){if(!m)return[];var w="beforePath"in b?b.beforePath:void 0,p="append"in b?b.append:void 0,y=tn(ut(m)),v=Xe(u,y);if(!(p||w&&ga(w,y)&&w.length>y.length))return[];var h=za(u,m),f=gs(u,m),g=Wt(h),x=Wt(f),j=w?w[y.length]:void 0;if(!wr(v)){if(hr(v)){var k=Gr(g),C=Gr(x),T=j!==void 0?Gr(j):v.length;return Qy(C-k+1,T<k?te=>({op:"move",from:mt(y.concat(String(k+te))),path:mt(y.concat(String(T+te)))}):()=>({op:"move",from:mt(y.concat(String(k))),path:mt(y.concat(String(T)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var R=Object.keys(v),ne=R.indexOf(g),ee=R.indexOf(x),F=p?R.length:j!==void 0?R.indexOf(j):-1;return ne!==-1&&ee!==-1&&F!==-1?F>ne?[...R.slice(ne,ee+1),...R.slice(F,R.length)].map(te=>ks(y,te)):[...R.slice(F,ne),...R.slice(ee+1,R.length)].map(te=>ks(y,te)):[]})(t,r,a),l=tn(za(t,r)),c=Xe(t,l);if(Array.isArray(c)){var d=(function(u){var m,b,{items:w,json:p,selection:y,offset:v}=u,h=za(p,y),f=gs(p,y),g=w.findIndex(C=>Ft(C.path,h)),x=w.findIndex(C=>Ft(C.path,f)),j=(m=w[g+v])===null||m===void 0?void 0:m.path,k=(b=w[x+v])===null||b===void 0?void 0:b.path;return so(j,k)})({items:s,json:t,selection:r,offset:a.offset});return{operations:i,updatedSelection:d,offset:a.offset}}return{operations:i,updatedSelection:void 0,offset:a.offset}}Ct(`/* over all fonts, sizes, and colors */
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
}`);var I3=he('<button type="button"><!></button>');function Bi(e,t){vt(t,!1);var r=K(),o=_s("absolute-popup"),s=_(t,"validationError",8),a=_(t,"onExpand",8);fe(()=>E(s()),()=>{S(r,Hk(s())&&s().isChildError?"Contains invalid data":s().message)}),xn(),Rt();var i=I3();nn(H(i),{get data(){return Ys}}),Qr(()=>Te("click",i,function(){for(var l,c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];(l=a())===null||l===void 0||l.apply(this,d)})),lo(i,(l,c)=>tl?.(l,c),()=>De({text:n(r)},o)),Le(()=>{var l;return Mt(i,1,"jse-validation-".concat((E(s()),(l=Z(()=>s().severity))!==null&&l!==void 0?l:"")),"svelte-q6a061")}),B(e,i),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Xn=kd(()=>z3),D3=he('<div class="jse-separator svelte-1qi6rc1">:</div>'),L3=he('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),U3=he('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),F3=he('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),V3=he('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),B3=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),W3=he('<div data-type="insert-selection-area-inside"><!></div>'),H3=he('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),K3=he("<!> <!>",1),J3=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),Q3=he('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),G3=he('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),Y3=he('<div class="jse-separator svelte-1qi6rc1">:</div>'),X3=he('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),Z3=he('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),e6=he('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),t6=he('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),n6=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),r6=he('<div data-type="insert-selection-area-inside"><!></div>'),o6=he('<div slot="identifier"><!></div>'),a6=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),s6=he('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),i6=he('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),l6=he('<div class="jse-separator svelte-1qi6rc1">:</div>'),c6=he('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),u6=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),d6=he('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),f6=he('<div data-type="insert-selection-area-after"><!></div>'),v6=he('<div role="treeitem" tabindex="-1"><!> <!></div>');function sv(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=_(t,"pointer",9),a=_(t,"value",9),i=_(t,"state",9),l=_(t,"validationErrors",9),c=_(t,"searchResults",9),d=_(t,"selection",9),u=_(t,"context",9),m=_(t,"onDragSelectionStart",9),b=Fr("jsoneditor:JSONNode"),w=K(void 0,!0),p=void 0,y=K(void 0,!0),v=K(void 0,!0),h=K(void 0,!0),f=K(void 0,!0),g=K(void 0,!0),x=K(void 0,!0),j=K(void 0,!0);function k(ae){ae.stopPropagation();var J=Iv(ae);u().onExpand(n(v),!n(h),J)}function C(){u().onExpand(n(v),!0)}function T(ae,J){var pe=cc(n(v),Object.keys(a()),ae,J);return u().onPatch(pe),Wt(go(pe[0].path))}function R(ae){u().onDrag(ae)}function ne(ae){Xn().selecting&&(Xn(Xn().selecting=!1),ae.stopPropagation()),u().onDragEnd(),document.removeEventListener("mousemove",R,!0),document.removeEventListener("mouseup",ne)}function ee(){var ae;return((ae=u().findElement([]))===null||ae===void 0||(ae=ae.getBoundingClientRect())===null||ae===void 0?void 0:ae.top)||0}function F(ae,J){var pe=ee()-ae.initialContentTop;return J.clientY-ae.initialClientY-pe}function te(ae){if(!u().readOnly&&d()){var J=tn(ut(d()));if(Ft(n(v),J)){var pe=(function(G,V){var rt=[];function ot(N){var U=n(v).concat(N),Y=u().findElement(U);Y!==void 0&&rt.push({path:U,height:Y.clientHeight})}if(Array.isArray(a())){var Ce=u().getJson();if(Ce===void 0)return;var lt=za(Ce,G),qe=gs(Ce,G),He=parseInt(Wt(lt),10),it=parseInt(Wt(qe),10),Ve=V.find(N=>He>=N.start&&it<=N.end);if(!Ve)return;var{start:Et,end:P}=Ve;K0(Et,Math.min(a().length,P),N=>ot(String(N)))}else Object.keys(a()).forEach(ot);return rt})(d(),n(g)||Ui);if(b("dragSelectionStart",{selection:d(),items:pe}),pe){var $=u().getJson();if($!==void 0){var I=za($,d()),D=pe.findIndex(G=>Ft(G.path,I)),{offset:ce}=_f({json:$,selection:u().getSelection(),deltaY:0,items:pe});S(y,{initialTarget:ae.target,initialClientY:ae.clientY,initialContentTop:ee(),selectionStartIndex:D,selectionItemsCount:xs($,d()).length,items:pe,offset:ce,didMoveItems:!1}),Xn(Xn().dragging=!0),document.addEventListener("mousemove",ye,!0),document.addEventListener("mouseup",W)}}else b("Cannot drag the current selection (probably spread over multiple sections)")}else m()(ae)}}function ye(ae){if(n(y)){var J=u().getJson();if(J===void 0)return;var pe=F(n(y),ae),{offset:$}=_f({json:J,selection:u().getSelection(),deltaY:pe,items:n(y).items});$!==n(y).offset&&(b("drag selection",$,pe),S(y,De(De({},n(y)),{},{offset:$,didMoveItems:!0})))}}function W(ae){if(n(y)){var J=u().getJson();if(J===void 0)return;var pe=F(n(y),ae),{operations:$,updatedSelection:I}=_f({json:J,selection:u().getSelection(),deltaY:pe,items:n(y).items});if($)u().onPatch($,(G,V)=>({state:V,selection:I??d()}));else if(ae.target===n(y).initialTarget&&!n(y).didMoveItems){var D=ff(ae.target),ce=ab(ae.target);ce&&u().onSelect($m(D,ce))}S(y,void 0),Xn(Xn().dragging=!1),document.removeEventListener("mousemove",ye,!0),document.removeEventListener("mouseup",W)}}function we(ae){ae.shiftKey||(ae.stopPropagation(),ae.preventDefault(),u().onSelect(Qa(n(v))))}function Re(ae){ae.shiftKey||(ae.stopPropagation(),ae.preventDefault(),u().onSelect(Fa(n(v))))}function Ee(ae){u().onSelect(Qa(n(v))),Qn(),u().onContextMenu(ae)}function ge(ae){u().onSelect(Fa(n(v))),Qn(),u().onContextMenu(ae)}fe(()=>E(s()),()=>{S(v,go(s()))}),fe(()=>E(s()),()=>{S(r,encodeURIComponent(s()))}),fe(()=>E(i()),()=>{S(h,!!ri(i())&&i().expanded)}),fe(()=>(E(a()),E(i())),()=>{S(f,fa(a(),i(),[]))}),fe(()=>E(i()),()=>{S(g,Lr(i())?i().visibleSections:void 0)}),fe(()=>E(l()),()=>{var ae;S(x,(ae=l())===null||ae===void 0?void 0:ae.validationError)}),fe(()=>(E(u()),E(d()),n(v)),()=>{S(j,Hl(u().getJson(),d(),n(v)))}),fe(()=>n(v),()=>{S(o,n(v).length===0)}),xn(),Rt(!0);var Q,L,le=v6(),A=H(le),O=ae=>{var J=G3(),pe=tt(J),$=H(pe),I=H($),D=H(I),ce=ve=>{nn(ve,{get data(){return Ba}})},G=ve=>{nn(ve,{get data(){return zl}})};je(D,ve=>{n(h)?ve(ce):ve(G,!1)});var V=se(I,2);vr(V,t,"identifier",{},null);var rt=se(V,2),ot=ve=>{B(ve,D3())};je(rt,ve=>{n(o)||ve(ot)});var Ce=se(rt,2),lt=H(Ce),qe=H(lt),He=ve=>{var be=L3();Ru(se(tt(be),2),{children:(ft,at)=>{var Je=Br();Le(()=>{var Ge,qt;return pt(Je,"".concat((E(a()),(Ge=Z(()=>a().length))!==null&&Ge!==void 0?Ge:""),`
                `).concat((E(a()),(qt=Z(()=>a().length===1?"item":"items"))!==null&&qt!==void 0?qt:"")))}),B(ft,Je)},$$slots:{default:!0}}),B(ve,be)},it=ve=>{var be=U3();Ru(se(tt(be),2),{onclick:C,children:(ft,at)=>{var Je=Br();Le(()=>{var Ge,qt;return pt(Je,"".concat((E(a()),(Ge=Z(()=>a().length))!==null&&Ge!==void 0?Ge:""),`
                `).concat((E(a()),(qt=Z(()=>a().length===1?"item":"items"))!==null&&qt!==void 0?qt:"")))}),B(ft,Je)},$$slots:{default:!0}}),B(ve,be)};je(qe,ve=>{n(h)?ve(He):ve(it,!1)});var Ve=se(Ce,2),Et=ve=>{var be=F3();ts(H(be),{get root(){return n(o)},selected:!0,get onContextMenu(){return E(u()),Z(()=>u().onContextMenu)}}),B(ve,be)};je(Ve,ve=>{E(u()),n(j),E(d()),E(pn),E(Un),E(Dr),E(Ft),E(ut),n(v),Z(()=>!u().readOnly&&n(j)&&d()&&(pn(d())||Un(d()))&&!Dr(d())&&Ft(ut(d()),n(v)))&&ve(Et)});var P=se($,2),N=ve=>{Bi(ve,{get validationError(){return n(x)},onExpand:C})};je(P,ve=>{n(x),n(h),Z(()=>n(x)&&(!n(h)||!n(x).isChildError))&&ve(N)});var U=se(P,2),Y=ve=>{var be=V3();Te("click",be,we),B(ve,be)},me=ve=>{var be=B3();Te("click",be,Re),B(ve,be)};je(U,ve=>{n(h)?ve(Y):ve(me,!1)});var Ne=se(pe,2),ze=ve=>{var be=Q3(),ft=tt(be),at=H(ft),Je=En=>{var zt,dn,Vt=W3(),Jt=H(Vt),cn=nt(()=>(n(j),E(zr),E(d()),Z(()=>n(j)&&zr(d()))));ts(Jt,{insert:!0,get selected(){return n(cn)},onContextMenu:Ee}),Le(gt=>{zt=Mt(Vt,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,zt,gt),wn(Vt,"title",pf),dn=Lo(Vt,"",dn,{"--level":(n(v),Z(()=>n(v).length+1))})},[()=>({"jse-hovered":n(w)===zs,"jse-selected":n(j)&&zr(d())})]),B(En,Vt)};je(at,En=>{E(u()),n(w),E(zs),n(j),E(zr),E(d()),Z(()=>!u().readOnly&&(n(w)===zs||n(j)&&zr(d())))&&En(Je)}),pr(se(at,2),1,()=>n(g)||Ui,_r,(En,zt,dn)=>{var Vt=K3(),Jt=tt(Vt);pr(Jt,1,()=>(E(a()),n(zt),n(y),Z(()=>(function(fn,Ot,et){var Qt=Ot.start,It=Math.min(Ot.end,fn.length),zn=ig(Qt,It);return et&&et.offset!==0?cm(zn,et.selectionStartIndex,et.selectionItemsCount,et.offset).map((Hn,Vn)=>({index:Hn,gutterIndex:Vn})):zn.map(Hn=>({index:Hn,gutterIndex:Hn}))})(a(),n(zt),n(y)))),fn=>fn.index,(fn,Ot)=>{var et=nt(()=>(E(Lr),E(l()),n(Ot),Z(()=>Lr(l())?l().items[n(Ot).index]:void 0))),Qt=nt(()=>(E(pu),E(u()),E(d()),n(v),n(Ot),Z(()=>pu(u().getJson(),d(),n(v).concat(String(n(Ot).index)))))),It=Ut(),zn=tt(It),Hn=nt(()=>(E(fc),E(s()),n(Ot),Z(()=>fc(s(),n(Ot).index)))),Vn=nt(()=>(E(Lr),E(i()),n(Ot),Z(()=>Lr(i())?i().items[n(Ot).index]:void 0))),ur=nt(()=>(E(Lr),E(c()),n(Ot),Z(()=>Lr(c())?c().items[n(Ot).index]:void 0)));sv(zn,{get value(){return E(a()),n(Ot),Z(()=>a()[n(Ot).index])},get pointer(){return n(Hn)},get state(){return n(Vn)},get validationErrors(){return n(et)},get searchResults(){return n(ur)},get selection(){return n(Qt)},get context(){return u()},onDragSelectionStart:te,$$slots:{identifier:(Gn,or)=>{var mr=H3(),tr=H(mr),Cr=H(tr);Le(()=>pt(Cr,(n(Ot),Z(()=>n(Ot).gutterIndex)))),B(Gn,mr)}}}),B(fn,It)});var cn=se(Jt,2),gt=fn=>{var Ot=nt(()=>n(g)||Ui);R3(fn,{get visibleSections(){return n(Ot)},sectionIndex:dn,get total(){return E(a()),Z(()=>a().length)},get path(){return n(v)},get onExpandSection(){return E(u()),Z(()=>u().onExpandSection)},get selection(){return d()},get context(){return u()}})};je(cn,fn=>{n(zt),E(a()),Z(()=>n(zt).end<a().length)&&fn(gt)}),B(En,Vt)});var Ge=se(ft,2),qt=se(H(Ge),2),kn=En=>{var zt=J3();Te("click",zt,Re),B(En,zt)};je(qt,En=>{n(o)||En(kn)}),B(ve,be)};je(Ne,ve=>{n(h)&&ve(ze)}),Te("click",I,k),B(ae,J)},M=ae=>{var J=Ut(),pe=tt(J),$=D=>{var ce=i6(),G=tt(ce),V=H(G),rt=H(V),ot=H(rt),Ce=Ge=>{nn(Ge,{get data(){return Ba}})},lt=Ge=>{nn(Ge,{get data(){return zl}})};je(ot,Ge=>{n(h)?Ge(Ce):Ge(lt,!1)});var qe=se(rt,2);vr(qe,t,"identifier",{},null);var He=se(qe,2),it=Ge=>{B(Ge,Y3())};je(He,Ge=>{n(o)||Ge(it)});var Ve=se(He,2),Et=H(Ve),P=H(Et),N=Ge=>{B(Ge,X3())},U=Ge=>{var qt=Z3();Ru(se(tt(qt),2),{onclick:C,children:(kn,En)=>{var zt=Br();Le((dn,Vt)=>pt(zt,"".concat(dn??"",`
                `).concat(Vt??"")),[()=>(E(a()),Z(()=>Object.keys(a()).length)),()=>(E(a()),Z(()=>Object.keys(a()).length===1?"prop":"props"))]),B(kn,zt)},$$slots:{default:!0}}),B(Ge,qt)};je(P,Ge=>{n(h)?Ge(N):Ge(U,!1)});var Y=se(Ve,2),me=Ge=>{var qt=e6();ts(H(qt),{get root(){return n(o)},selected:!0,get onContextMenu(){return E(u()),Z(()=>u().onContextMenu)}}),B(Ge,qt)};je(Y,Ge=>{E(u()),n(j),E(d()),E(pn),E(Un),E(Dr),E(Ft),E(ut),n(v),Z(()=>!u().readOnly&&n(j)&&d()&&(pn(d())||Un(d()))&&!Dr(d())&&Ft(ut(d()),n(v)))&&Ge(me)});var Ne=se(V,2),ze=Ge=>{Bi(Ge,{get validationError(){return n(x)},onExpand:C})};je(Ne,Ge=>{n(x),n(h),Z(()=>n(x)&&(!n(h)||!n(x).isChildError))&&Ge(ze)});var ve=se(Ne,2),be=Ge=>{var qt=t6();Te("click",qt,we),B(Ge,qt)},ft=Ge=>{var qt=Ut(),kn=tt(qt),En=zt=>{var dn=n6();Te("click",dn,Re),B(zt,dn)};je(kn,zt=>{n(o)||zt(En)},!0),B(Ge,qt)};je(ve,Ge=>{n(h)?Ge(be):Ge(ft,!1)});var at=se(G,2),Je=Ge=>{var qt=s6(),kn=tt(qt),En=H(kn),zt=cn=>{var gt,fn,Ot=r6(),et=H(Ot),Qt=nt(()=>(n(j),E(zr),E(d()),Z(()=>n(j)&&zr(d()))));ts(et,{insert:!0,get selected(){return n(Qt)},onContextMenu:Ee}),Le(It=>{gt=Mt(Ot,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,gt,It),wn(Ot,"title",pf),fn=Lo(Ot,"",fn,{"--level":(n(v),Z(()=>n(v).length+1))})},[()=>({"jse-hovered":n(w)===zs,"jse-selected":n(j)&&zr(d())})]),B(cn,Ot)};je(En,cn=>{E(u()),n(w),E(zs),n(j),E(zr),E(d()),Z(()=>!u().readOnly&&(n(w)===zs||n(j)&&zr(d())))&&cn(zt)}),pr(se(En,2),1,()=>(E(a()),n(y),Z(()=>(function(cn,gt){var fn=Object.keys(cn);return gt&&gt.offset!==0?cm(fn,gt.selectionStartIndex,gt.selectionItemsCount,gt.offset):fn})(a(),n(y)))),_r,(cn,gt)=>{var fn=nt(()=>(E(fc),E(s()),n(gt),Z(()=>fc(s(),n(gt))))),Ot=nt(()=>(E(vo),E(c()),n(gt),Z(()=>vo(c())?c().properties[n(gt)]:void 0))),et=nt(()=>(E(vo),E(l()),n(gt),Z(()=>vo(l())?l().properties[n(gt)]:void 0))),Qt=nt(()=>(n(v),n(gt),Z(()=>n(v).concat(n(gt))))),It=nt(()=>(E(pu),E(u()),E(d()),E(n(Qt)),Z(()=>pu(u().getJson(),d(),n(Qt))))),zn=Ut(),Hn=tt(zn),Vn=nt(()=>(E(vo),E(i()),n(gt),Z(()=>vo(i())?i().properties[n(gt)]:void 0)));sv(Hn,{get value(){return E(a()),n(gt),Z(()=>a()[n(gt)])},get pointer(){return n(fn)},get state(){return n(Vn)},get validationErrors(){return n(et)},get searchResults(){return n(Ot)},get selection(){return n(It)},get context(){return u()},onDragSelectionStart:te,$$slots:{identifier:(ur,Gn)=>{var or,mr=o6(),tr=H(mr),Cr=nt(()=>(E(qm),E(n(Ot)),Z(()=>qm(n(Ot)))));(function(gr,xr){vt(xr,!1);var nr=K(void 0,!0),Pe=K(void 0,!0),Dt=_(xr,"pointer",9),jn=_(xr,"key",9),In=_(xr,"selection",9),dr=_(xr,"searchResultItems",9),Nr=_(xr,"onUpdateKey",9),Ht=_(xr,"context",9),kr=K(void 0,!0);function Wr(ie){n(Pe)||Ht().readOnly||(ie.preventDefault(),Ht().onSelect(Jv(n(kr))))}function rr(ie,ke){var Ie=Nr()(jn(),Ht().normalization.unescapeValue(ie)),X=tn(n(kr)).concat(Ie);Ht().onSelect(ke===ms.nextInside?Kt(X):Ja(X)),ke!==ms.self&&Ht().focus()}function Vr(){Ht().onSelect(Ja(n(kr))),Ht().focus()}fe(()=>E(Dt()),()=>{S(kr,go(Dt()))}),fe(()=>(E(In()),n(kr)),()=>{S(nr,Ur(In())&&Ft(In().path,n(kr)))}),fe(()=>(n(nr),E(In())),()=>{S(Pe,n(nr)&&Dr(In()))}),xn(),Rt(!0);var Dn=A3(),Gt=tt(Dn),Nt=ie=>{var ke=nt(()=>(E(Ht()),E(jn()),Z(()=>Ht().normalization.escapeValue(jn())))),Ie=nt(()=>(E(Dr),E(In()),Z(()=>Dr(In())?In().initialValue:void 0)));mb(ie,{get value(){return n(ke)},get initialValue(){return n(Ie)},label:"Edit key",shortText:!0,onChange:rr,onCancel:Vr,get onFind(){return E(Ht()),Z(()=>Ht().onFind)}})},Rn=ie=>{var ke,Ie=T3(),X=H(Ie),de=We=>{var st=nt(()=>(E(Ht()),E(jn()),Z(()=>Ht().normalization.escapeValue(jn()))));kb(We,{get text(){return n(st)},get searchResultItems(){return dr()}})},$e=We=>{var st=Br();Le(ct=>pt(st,ct),[()=>(E(Xi),E(Ht()),E(jn()),Z(()=>Xi(Ht().normalization.escapeValue(jn()))))]),B(We,st)};je(X,We=>{dr()?We(de):We($e,!1)}),Le(()=>ke=Mt(Ie,1,"jse-key svelte-1n4cez4",null,ke,{"jse-empty":jn()===""})),Te("dblclick",Ie,Wr),B(ie,Ie)};je(Gt,ie=>{E(Ht()),n(Pe),Z(()=>!Ht().readOnly&&n(Pe))?ie(Nt):ie(Rn,!1)});var br=se(Gt,2),ar=ie=>{ts(ie,{selected:!0,get onContextMenu(){return E(Ht()),Z(()=>Ht().onContextMenu)}})};je(br,ie=>{E(Ht()),n(nr),n(Pe),Z(()=>!Ht().readOnly&&n(nr)&&!n(Pe))&&ie(ar)}),B(gr,Dn),ht()})(tr,{get pointer(){return n(fn)},get key(){return n(gt)},get selection(){return n(It)},get searchResultItems(){return n(Cr)},get context(){return u()},onUpdateKey:T}),Le(gr=>or=Mt(mr,1,"jse-key-outer svelte-1qi6rc1",null,or,gr),[()=>({"jse-selected-key":Ur(n(It))&&Ft(n(It).path,n(Qt))})]),B(ur,mr)}}}),B(cn,zn)});var dn=se(kn,2),Vt=se(H(dn),2),Jt=cn=>{var gt=a6();Te("click",gt,Re),B(cn,gt)};je(Vt,cn=>{n(o)||cn(Jt)}),B(Ge,qt)};je(at,Ge=>{n(h)&&Ge(Je)}),Te("click",rt,k),B(D,ce)},I=D=>{var ce=d6(),G=H(ce),V=H(G);vr(V,t,"identifier",{},null);var rt=se(V,2),ot=Y=>{B(Y,l6())};je(rt,Y=>{n(o)||Y(ot)});var Ce=se(rt,2),lt=H(Ce),qe=nt(()=>n(j)?d():void 0),He=nt(()=>(E(zm),E(c()),Z(()=>zm(c()))));Db(lt,{get path(){return n(v)},get value(){return a()},get enforceString(){return n(f)},get selection(){return n(qe)},get searchResultItems(){return n(He)},get context(){return u()}});var it=se(Ce,2),Ve=Y=>{var me=c6();ts(H(me),{get root(){return n(o)},selected:!0,get onContextMenu(){return E(u()),Z(()=>u().onContextMenu)}}),B(Y,me)};je(it,Y=>{E(u()),n(j),E(d()),E(pn),E(Un),E(Dr),E(Ft),E(ut),n(v),Z(()=>!u().readOnly&&n(j)&&d()&&(pn(d())||Un(d()))&&!Dr(d())&&Ft(ut(d()),n(v)))&&Y(Ve)});var Et=se(G,2),P=Y=>{Bi(Y,{get validationError(){return n(x)},onExpand:C})};je(Et,Y=>{n(x)&&Y(P)});var N=se(Et,2),U=Y=>{var me=u6();Te("click",me,Re),B(Y,me)};je(N,Y=>{n(o)||Y(U)}),B(D,ce)};je(pe,D=>{E(yn),E(a()),Z(()=>yn(a()))?D($):D(I,!1)},!0),B(ae,J)};je(A,ae=>{E(a()),Z(()=>Array.isArray(a()))?ae(O):ae(M,!1)});var re=se(A,2),Oe=ae=>{var J,pe=f6(),$=H(pe),I=nt(()=>(n(j),E(po),E(d()),Z(()=>n(j)&&po(d()))));ts($,{insert:!0,get selected(){return n(I)},onContextMenu:ge}),Le(D=>{J=Mt(pe,1,"jse-insert-area jse-after svelte-1qi6rc1",null,J,D),wn(pe,"title",pf)},[()=>({"jse-hovered":n(w)===vu,"jse-selected":n(j)&&po(d())})]),B(ae,pe)};je(re,ae=>{E(u()),n(w),E(vu),n(j),E(po),E(d()),Z(()=>!u().readOnly&&(n(w)===vu||n(j)&&po(d())))&&ae(Oe)}),Le((ae,J)=>{Q=Mt(le,1,ae,"svelte-1qi6rc1",Q,J),wn(le,"data-path",n(r)),wn(le,"aria-selected",n(j)),L=Lo(le,"",L,{"--level":(n(v),Z(()=>n(v).length))})},[()=>ws((E(na),n(h),E(u()),n(v),E(a()),Z(()=>na("jse-json-node",{"jse-expanded":n(h)},u().onClassName(n(v),a()))))),()=>({"jse-root":n(o),"jse-selected":n(j)&&Un(d()),"jse-selected-value":n(j)&&pn(d()),"jse-readonly":u().readOnly,"jse-hovered":n(w)===vm})]),Te("mousedown",le,function(ae){if((ae.buttons===1||ae.buttons===2)&&!((J=ae.target).nodeName==="DIV"&&J.contentEditable==="true"||ae.buttons===1&&rb(ae.target,"BUTTON"))){var J;ae.stopPropagation(),ae.preventDefault(),u().focus(),document.addEventListener("mousemove",R,!0),document.addEventListener("mouseup",ne);var pe=ff(ae.target),$=u().getJson(),I=u().getDocumentState();if(!d()||pe===An.after||pe===An.inside||d().type!==pe&&d().type!==An.multi||!Hl($,d(),n(v)))if(Xn(Xn().selecting=!0),Xn(Xn().selectionAnchor=n(v)),Xn(Xn().selectionAnchorType=pe),Xn(Xn().selectionFocus=n(v)),ae.shiftKey){var D=u().getSelection();D&&u().onSelect(so(Qs(D),n(v)))}else if(pe===An.multi)if(n(o)&&ae.target.hasAttribute("data-path")){var ce=Wt(db(a(),I));u().onSelect(Xf(ce))}else u().onSelect(so(n(v),n(v)));else $!==void 0&&u().onSelect($m(pe,n(v)));else ae.button===0&&m()(ae)}}),Te("mousemove",le,function(ae){if(Xn().selecting){ae.preventDefault(),ae.stopPropagation(),Xn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var J=ff(ae.target);Ft(n(v),Xn().selectionFocus)&&J===Xn().selectionAnchorType||(Xn(Xn().selectionFocus=n(v)),Xn(Xn().selectionAnchorType=J),u().onSelect(so(Xn().selectionAnchor||Xn().selectionFocus,Xn().selectionFocus)))}}),Te("mouseover",le,function(ae){Xn().selecting||Xn().dragging||(ae.stopPropagation(),cs(ae.target,"data-type","selectable-value")?S(w,vm):cs(ae.target,"data-type","selectable-key")?S(w,void 0):cs(ae.target,"data-type","insert-selection-area-inside")?S(w,zs):cs(ae.target,"data-type","insert-selection-area-after")&&S(w,vu),clearTimeout(p))}),Te("mouseout",le,function(ae){ae.stopPropagation(),p=window.setTimeout(()=>S(w,void 0))}),B(e,le),ht()}var Lb={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},Ub={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},Qm={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},h6={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};Ct(`/* over all fonts, sizes, and colors */
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
}`);var p6=he('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),m6=he('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function iv(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Ww(r,o)}function Fb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=Xe(e,t);if(hr(s)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return(function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,d=(function(m,b){var w={boolean:0,number:1,string:2,undefined:4},p=3;return function(y,v){var h=Xe(y,m),f=Xe(v,m);if(typeof h!=typeof f){var g,x,j=(g=w[typeof h])!==null&&g!==void 0?g:p,k=(x=w[typeof f])!==null&&x!==void 0?x:p;return j>k?b:j<k?-b:0}return typeof h=="number"||typeof h=="boolean"?h>f?b:h<f?-b:0:cr(h)?0:b*iv(h,f)}})(l,c),u=Xe(a,i);return[{op:"replace",path:mt(i),value:u.slice(0).sort(d)}]})(e,t,r,o)}if(yn(s))return(function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Xe(a,i),d=Object.keys(c).slice();d.sort((m,b)=>l*iv(m,b));var u={};return d.forEach(m=>u[m]=c[m]),[{op:"replace",path:mt(i),value:u}]})(e,t,o);throw new Error("Cannot sort: no array or object")}rc(["click"]);Ct(`/* over all fonts, sizes, and colors */
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
}`);var g6=he('<button type="button"> </button>'),b6=he('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),y6=he('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function j6(e,t){vt(t,!1);var r=_(t,"items",9),o=_(t,"selectedItem",9),s=_(t,"onSelect",9);Rt(!0);var a=y6(),i=H(a);pr(i,1,()=>(E(Ku),E(r()),Z(()=>Ku(r(),100))),d=>d,(d,u)=>{var m,b=g6(),w=H(b);Le((p,y)=>{m=Mt(b,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,m,{"jse-selected":n(u)===o()}),wn(b,"title",p),pt(w,y)},[()=>(n(u),Z(()=>n(u).toString())),()=>(E(Ta),n(u),Z(()=>Ta(n(u).toString(),30)))]),Te("click",b,Ma(()=>s()(n(u)))),B(d,b)});var l=se(i,2),c=d=>{var u=b6();wn(u,"title","Limited to 100 items"),B(d,u)};je(l,d=>{E(r()),Z(()=>r().length>100)&&d(c)}),B(e,a),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var w6=he('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),x6=he('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function Gm(e,t){vt(t,!1);var r,o=K(void 0,!0),s=K(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:i}=_s("absolute-popup"),l=_(t,"path",9),c=_(t,"index",9),d=_(t,"onSelect",9),u=_(t,"getItems",9),m=K(void 0,!0),b=K(!1,!0);function w(g){i(r),d()(n(o).concat(g))}fe(()=>(E(l()),E(c())),()=>{S(o,l().slice(0,c()))}),fe(()=>(E(l()),E(c())),()=>{S(s,l()[c()])}),xn(),Rt(!0);var p,y=x6(),v=H(y);nn(H(v),{get data(){return Ng}});var h=se(v,2),f=g=>{var x=w6(),j=H(x);Le(()=>pt(j,n(s))),Te("click",x,()=>w(n(s))),B(g,x)};je(h,g=>{n(s)!==void 0&&g(f)}),er(y,g=>S(m,g),()=>n(m)),Le(()=>p=Mt(v,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,p,{"jse-open":n(b)})),Te("click",v,function(){if(n(m)){S(b,!0);var g={items:u()(n(o)),selectedItem:n(s),onSelect:w};r=a(j6,g,{anchor:n(m),closeOnOuterClick:!0,onClose:()=>{S(b,!1)}})}}),B(e,y),ht()}function Zv(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var k6=he('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),S6=he('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),_6=he('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function C6(e,t){vt(t,!1);var r=K(),o=_s("absolute-popup"),s=_(t,"path",8),a=_(t,"pathParser",8),i=_(t,"onChange",8),l=_(t,"onClose",8),c=_(t,"onError",8),d=_(t,"pathExists",8),u=K(),m=K(),b=K(!1),w=void 0,p=K(!1);function y(){n(u).focus()}function v(ne){try{var ee=a().parse(ne);return(function(F){if(!d()(F))throw new Error("Path does not exist in current document")})(ee),{path:ee,error:void 0}}catch(F){return{path:void 0,error:F}}}oo(()=>{y()}),Fo(()=>{clearTimeout(w)}),fe(()=>(E(a()),E(s())),()=>{S(m,a().stringify(s()))}),fe(()=>(n(b),n(m)),()=>{S(r,n(b)?v(n(m)).error:void 0)}),xn(),Rt();var h,f=_6(),g=H(f);er(g,ne=>S(u,ne),()=>n(u));var x=se(g,2),j=ne=>{var ee=k6();nn(H(ee),{get data(){return Ys}}),lo(ee,(F,te)=>tl?.(F,te),()=>De({text:String(n(r)||"")},o)),B(ne,ee)};je(x,ne=>{n(r)&&ne(j)});var k=se(x,2),C=ne=>{B(ne,S6())};je(k,ne=>{n(p)&&ne(C)});var T,R=se(k,2);nn(H(R),{get data(){return is}}),Le(()=>{h=Mt(f,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,h,{error:n(r)}),ni(g,n(m)),T=Mt(R,1,"jse-navigation-bar-copy svelte-uyexy4",null,T,{copied:n(p)})}),Te("keydown",g,Ma(function(ne){var ee=Ka(ne);if(ee==="Escape"&&(ne.preventDefault(),l()()),ee==="Enter"){ne.preventDefault(),S(b,!0);var F=v(n(m));F.path!==void 0?i()(F.path):c()(F.error)}})),Te("input",g,function(ne){S(m,ne.currentTarget.value)}),Te("click",R,function(){Zv(n(m)),S(p,!0),w=window.setTimeout(()=>S(p,!1),1e3),y()}),B(e,f),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var E6=he("<!> <!>",1),O6=he('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function $6(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=Fr("jsoneditor:NavigationBar"),a=_(t,"json",9),i=_(t,"selection",9),l=_(t,"onSelect",9),c=_(t,"onError",9),d=_(t,"pathParser",9),u=K(void 0,!0),m=K(!1,!0);function b(ee){s("get items for path",ee);var F=Xe(a(),ee);if(Array.isArray(F))return ig(0,F.length).map(String);if(yn(F)){var te=Object.keys(F).slice(0);return te.sort(iv),te}return[]}function w(ee){return Io(a(),ee)}function p(ee){s("select path",JSON.stringify(ee)),l()(so(ee,ee))}function y(){S(m,!1)}function v(ee){y(),p(ee)}fe(()=>(E(i()),ut),()=>{S(r,i()?ut(i()):[])}),fe(()=>(E(a()),n(r)),()=>{S(o,cr(Xe(a(),n(r))))}),fe(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(u)&&n(u).scrollTo){var ee=n(u).scrollWidth-n(u).clientWidth;ee>0&&(s("scrollTo ",ee),n(u).scrollTo({left:ee,behavior:"smooth"}))}})}),xn(),Rt(!0);var h=O6(),f=H(h),g=ee=>{var F=E6(),te=tt(F);pr(te,1,()=>n(r),_r,(we,Re,Ee)=>{Gm(we,{getItems:b,get path(){return n(r)},index:Ee,onSelect:p})});var ye=se(te,2),W=we=>{Gm(we,{getItems:b,get path(){return n(r)},get index(){return n(r),Z(()=>n(r).length)},onSelect:p})};je(ye,we=>{n(o)&&we(W)}),B(ee,F)},x=ee=>{C6(ee,{get path(){return n(r)},onClose:y,onChange:v,get onError(){return c()},pathExists:w,get pathParser(){return d()}})};je(f,ee=>{n(m)?ee(x,!1):ee(g)});var j,k=se(f,2),C=H(k),T=H(C),R=se(C,2),ne=nt(()=>n(m)?Dw:kw);nn(R,{get data(){return n(ne)}}),er(h,ee=>S(u,ee),()=>n(u)),Le(ee=>{j=Mt(k,1,"jse-navigation-bar-edit svelte-hjhal6",null,j,{flex:!n(m),editing:n(m)}),wn(k,"title",n(m)?"Cancel editing the selected path":"Edit the selected path"),pt(T,ee)},[()=>(E(cr),E(a()),n(m),Z(()=>cr(a())||n(m)?" ":"Navigation bar"))]),Te("click",k,function(){S(m,!n(m))}),B(e,h),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var P6=he('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),M6=he('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),R6=he('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function Vb(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=Fr("jsoneditor:SearchBox"),i=_(t,"json",9),l=_(t,"documentState",9),c=_(t,"parser",9),d=_(t,"showSearch",9),u=_(t,"showReplace",13),m=_(t,"readOnly",9),b=_(t,"columns",9),w=_(t,"onSearch",9),p=_(t,"onFocus",9),y=_(t,"onPatch",9),v=_(t,"onClose",9),h=K("",!0),f="",g=K("",!0),x=K(!1,!0),j=K(void 0,!0),k=Nu(function(D){return M.apply(this,arguments)},300),C=Nu(function(D){return re.apply(this,arguments)},300);function T(){u(!u()&&!m())}function R(D){D.stopPropagation();var ce=Ka(D);ce==="Enter"&&(D.preventDefault(),n(h)!==f?k.flush():Ee()),ce==="Shift+Enter"&&(D.preventDefault(),Q()),ce==="Ctrl+Enter"&&(D.preventDefault(),u()?te():Ee()),ce==="Ctrl+H"&&(D.preventDefault(),T()),ce==="Escape"&&(D.preventDefault(),J())}function ne(D){Ka(D)==="Enter"&&(D.preventDefault(),D.stopPropagation(),te())}function ee(){return F.apply(this,arguments)}function F(){return(F=jt(function*(){Qn(),yield k.flush()})).apply(this,arguments)}function te(){return ye.apply(this,arguments)}function ye(){return(ye=jt(function*(){var D;if(!m()){var ce=(D=n(j))===null||D===void 0?void 0:D.activeItem;if(a("handleReplace",{replaceText:n(g),activeItem:ce}),n(j)&&ce&&i()!==void 0){S(j,De(De({},Mm(n(j))),{},{activeIndex:n(o)}));var{operations:G,newSelection:V}=Yk(i(),l(),n(g),ce,c());y()(G,(rt,ot)=>({state:ot,selection:V})),Qn(),yield C.flush(),yield le()}}})).apply(this,arguments)}function W(){return we.apply(this,arguments)}function we(){return(we=jt(function*(){if(!m()){a("handleReplaceAll",{text:n(h),replaceText:n(g)});var{operations:D,newSelection:ce}=(function(G,V,rt,ot,Ce){for(var lt=Rm(rt,G,{maxResults:1/0}),qe=[],He=0;He<lt.length;He++){var it=lt[He-1],Ve=lt[He];He!==0&&Ve.field===it.field&&Ft(Ve.path,it.path)?Wt(qe).items.push(Ve):qe.push({path:Ve.path,field:Ve.field,items:[Ve]})}qe.sort((N,U)=>N.field!==U.field?N.field===Yo.key?1:-1:U.path.length-N.path.length);var Et,P=[];return qe.forEach(N=>{var{field:U,path:Y,items:me}=N;if(U===Yo.key){var Ne=tn(Y),ze=Xe(G,Ne),ve=Wt(Y),be=cc(Ne,Object.keys(ze),ve,Tm(ve,ot,me));P=P.concat(be),Et=el(G,be)}else{if(U!==Yo.value)throw new Error("Cannot replace: unknown type of search result field ".concat(U));var ft=Xe(G,Y);if(ft===void 0)throw new Error("Cannot replace: path not found ".concat(mt(Y)));var at=typeof ft=="string"?ft:String(ft),Je=fa(G,V,Y),Ge=Tm(at,ot,me),qt=[{op:"replace",path:mt(Y),value:Je?Ge:ul(Ge,Ce)}];P=P.concat(qt),Et=el(G,qt)}}),{operations:P,newSelection:Et}})(i(),l(),n(h),n(g),c());y()(D,(G,V)=>({state:V,selection:ce})),yield le()}})).apply(this,arguments)}function Re(D){D.select()}function Ee(){return ge.apply(this,arguments)}function ge(){return(ge=jt(function*(){S(j,n(j)?Mm(n(j)):void 0),yield le()})).apply(this,arguments)}function Q(){return L.apply(this,arguments)}function L(){return L=jt(function*(){S(j,n(j)?(function(D){var ce=D.activeIndex>0?D.activeIndex-1:D.items.length-1,G=D.items[ce],V=D.items.map((rt,ot)=>De(De({},rt),{},{active:ot===ce}));return De(De({},D),{},{items:V,activeItem:G,activeIndex:ce})})(n(j)):void 0),yield le()}),L.apply(this,arguments)}function le(){return A.apply(this,arguments)}function A(){return(A=jt(function*(){var D;a("handleFocus",n(j));var ce=(D=n(j))===null||D===void 0?void 0:D.activeItem;ce&&i()!==void 0&&(yield p()(ce.path,ce.resultIndex))})).apply(this,arguments)}function O(){return O=jt(function*(D){yield Oe(D,n(h),i())}),O.apply(this,arguments)}function M(){return M=jt(function*(D){yield Oe(d(),D,i()),yield le()}),M.apply(this,arguments)}function re(){return re=jt(function*(D){yield Oe(d(),n(h),D)}),re.apply(this,arguments)}function Oe(D,ce,G){return ae.apply(this,arguments)}function ae(){return ae=jt(function*(D,ce,G){return D?(a("applySearch",{showSearch:D,text:ce}),ce===""?(a("clearing search result"),n(j)!==void 0&&S(j,void 0),Promise.resolve()):(f=ce,S(x,!0),new Promise(V=>{setTimeout(()=>{var rt=Rm(ce,G,{maxResults:vf,columns:b()});S(j,(function(ot,Ce){var lt=Ce!=null&&Ce.activeItem?Am(Ce.activeItem):void 0,qe=ot.findIndex(Ve=>Ft(lt,Am(Ve))),He=qe!==-1?qe:Ce?.activeIndex!==void 0&&Ce?.activeIndex<ot.length?Ce?.activeIndex:ot.length>0?0:-1,it=ot.map((Ve,Et)=>De(De({resultIndex:Et},Ve),{},{active:Et===He}));return{items:it,activeItem:it[He],activeIndex:He}})(rt,n(j))),S(x,!1),V()})}))):(n(j)&&S(j,void 0),Promise.resolve())}),ae.apply(this,arguments)}function J(){a("handleClose"),k.cancel(),C.cancel(),Oe(!1,n(h),i()),v()()}fe(()=>n(j),()=>{var D;S(r,((D=n(j))===null||D===void 0||(D=D.items)===null||D===void 0?void 0:D.length)||0)}),fe(()=>n(j),()=>{var D;S(o,((D=n(j))===null||D===void 0?void 0:D.activeIndex)||0)}),fe(()=>(n(r),vf),()=>{S(s,n(r)>=vf?"".concat(999,"+"):String(n(r)))}),fe(()=>(E(w()),n(j)),()=>{w()(n(j))}),fe(()=>E(d()),()=>{(function(D){O.apply(this,arguments)})(d())}),fe(()=>n(h),()=>{k(n(h))}),fe(()=>E(i()),()=>{C(i())}),xn(),Rt(!0);var pe=Ut(),$=tt(pe),I=D=>{var ce=R6(),G=H(ce),V=H(G),rt=ve=>{var be=P6(),ft=H(be),at=nt(()=>u()?Ba:zl);nn(ft,{get data(){return n(at)}}),Te("click",be,T),B(ve,be)};je(V,ve=>{m()||ve(rt)});var ot=H(se(V,2)),Ce=H(ot),lt=H(Ce),qe=ve=>{nn(ve,{get data(){return mw},spin:!0})},He=ve=>{nn(ve,{get data(){return fd}})};je(lt,ve=>{n(x)?ve(qe):ve(He,!1)});var it=se(Ce,2),Ve=H(it);Qr(()=>Hu(Ve,()=>n(h),ve=>S(h,ve))),lo(Ve,ve=>Re?.(ve)),Qr(()=>Te("paste",Ve,ee));var Et,P=se(it,2),N=H(P),U=se(P,2);nn(H(U),{get data(){return Iw}});var Y=se(U,2);nn(H(Y),{get data(){return Sw}});var me=se(Y,2);nn(H(me),{get data(){return vd}});var Ne=se(ot,2),ze=ve=>{var be=M6(),ft=H(be),at=se(ft,2),Je=se(at,2);Hu(ft,()=>n(g),Ge=>S(g,Ge)),Te("keydown",ft,ne),Te("click",at,te),Te("click",Je,W),B(ve,be)};je(Ne,ve=>{u()&&!m()&&ve(ze)}),Le(()=>{var ve;Et=Mt(P,1,"jse-search-count svelte-1x1x8q0",null,Et,{"jse-visible":n(h)!==""}),pt(N,"".concat(n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"").concat((ve=n(s))!==null&&ve!==void 0?ve:""))}),Te("click",U,Ee),Te("click",Y,Q),Te("click",me,J),Te("keydown",G,R),B(D,ce)};je($,D=>{d()&&D(I)}),B(e,pe),ht()}var Gl=Symbol("path");function N6(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&(function(a,i,l){if(a.length<i)a.forEach(l);else for(var c=i>1?(a.length-1)/(i-1):a.length,d=0;d<i;d++){var u=Math.floor(d*c);l(a[u],u,a)}})(e,r,a=>{yn(a)?Bb(a,o,t):o[Gl]=!0});var s=[];return Gl in o&&s.push([]),Wb(o,[],s,t),s}function Bb(e,t,r){for(var o in e){var s=e[o],a=t[o]||(t[o]={});yn(s)&&r?Bb(s,a,r):a[Gl]===void 0&&(a[Gl]=!0)}}function Wb(e,t,r,o){for(var s in e){var a=t.concat(s),i=e[s];i&&i[Gl]===!0&&r.push(a),wr(i)&&o&&Wb(i,a,r,o)}}function T6(e,t,r,o,s,a){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=hr(r)?r.length:0,c=(function(f,g){var x=Object.values(f);if(un(x))return g;var j=(k,C)=>k+C;return x.reduce(j)/x.length})(o,s),d=e-i,u=t+2*i,m=f=>o[f]||s,b=0,w=a;w<d&&b<l;)w+=m(b),b++;b>0&&(w-=m(--b));for(var p=b,y=0;y<u&&p<l;)y+=m(p),p++;for(var v=0,h=p;h<l;h++)v+=m(h);return{startIndex:b,endIndex:p,startHeight:w,endHeight:v,averageItemHeight:c,visibleHeight:y,visibleItems:hr(r)?r.slice(b,p):[]}}function Ym(e,t,r,o){for(var{rowIndex:s}=To(e,t),a=0,i=0;i<s;i++)a+=r[i]||o;return a}function To(e,t){var[r,...o]=e,s=parseInt(r,10);return{rowIndex:isNaN(s)?-1:s,columnIndex:t.findIndex(a=>ga(o,a))}}function Is(e,t){var{rowIndex:r,columnIndex:o}=e;return[String(r),...t[o]]}function A6(e,t){var[r,o]=Wy(e,i=>Rv(i.path[0])),s=Ny(r,q6),a=Dy(s,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var d=(function(u,m){var b=To(u.path,m);return b.columnIndex!==-1?b.columnIndex:-1})(c,t);d!==-1?(l.columns[d]===void 0&&(l.columns[d]=[]),l.columns[d].push(c)):l.row.push(c)}),l});return{root:o,rows:a}}function ji(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>mo(r.path)+" "+r.message).join(", "),severity:Go.warning}}function q6(e){return parseInt(e.path[0],10)}function z6(e,t,r){var o=t.some(s=>(function(a,i,l){if(!a)return!1;if(i.op==="replace"){var c=go(i.path),{rowIndex:d,columnIndex:u}=To(c,l),m=l.findIndex(b=>Ft(b,a.path));if(d!==-1&&u!==-1&&u!==m)return!1}return!0})(e,s,r));return o?void 0:e}var io=Fr("jsoneditor:actions");function Hb(e){return lv.apply(this,arguments)}function lv(){return lv=jt(function*(e){var{json:t,selection:r,indentation:o,readOnly:s,parser:a,onPatch:i}=e;if(!s&&t!==void 0&&r&&Ni(r)){var l=hb(t,r,o,a);if(l!==void 0){io("cut",{selection:r,clipboard:l,indentation:o}),yield Zv(l);var{operations:c,newSelection:d}=jb(t,r);i(c,(u,m)=>({state:m,selection:d}))}}}),lv.apply(this,arguments)}function Kb(e){return cv.apply(this,arguments)}function cv(){return cv=jt(function*(e){var{json:t,selection:r,indentation:o,parser:s}=e,a=hb(t,r,o,s);a!==void 0&&(io("copy",{clipboard:a,indentation:o}),yield Zv(a))}),cv.apply(this,arguments)}function Jb(e){var{clipboardText:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onChangeText:l,onPasteMultilineText:c,openRepairModal:d}=e;if(!s)try{u(t)}catch{d(t,b=>{io("repaired pasted text: ",b),u(b)})}function u(m){if(r!==void 0){var b=o||Kt([]),w=yb(r,b,m,a),p=(function(y,v,h){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Vk;if(y.length>f)return!1;var g=/\n/.test(y);if(!g)return!1;var x=v.some(k=>k.op==="replace"&&Array.isArray(k.value)),j=v.filter(k=>k.op==="add").length>1;if(!x&&!j)return!1;try{return ac(y,h.parse),!1}catch{return!0}})(t,w,a);io("paste",{pastedText:m,operations:w,ensureSelection:b,pasteMultilineText:p}),i(w,(y,v)=>{var h=v;return w.filter(f=>(dg(f)||vv(f))&&cr(f.value)).forEach(f=>{var g=Qo(r,f.path);h=oi(y,h,g)}),{state:h}}),p&&c(m)}else io("paste text",{pastedText:m}),l(t,(y,v)=>{if(y)return{state:oi(y,v,[])}})}}function Qb(e){var{json:t,text:r,selection:o,keepSelection:s,readOnly:a,onChange:i,onPatch:l}=e;if(!a&&o){var c=t!==void 0&&(Ur(o)||pn(o))?so(o.path,o.path):o;if(un(ut(o)))io("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:d,newSelection:u}=jb(t,c);io("remove",{operations:d,selection:o,newSelection:u}),l(d,(m,b)=>({state:b,selection:s?o:u}))}}}function ld(e){var{insertType:t,selectInside:r,initialValue:o,json:s,selection:a,readOnly:i,parser:l,onPatch:c,onReplaceJson:d}=e;if(!i){var u=(function(y,v,h){if(h==="object")return{};if(h==="array")return[];if(h==="structure"&&y!==void 0){var f=v?fb(v):[],g=Xe(y,f);if(Array.isArray(g)&&!un(g)){var x=Ia(g);return cr(x)?ky(x,j=>Array.isArray(j)?[]:yn(j)?void 0:""):""}}return""})(s,a,t);if(s!==void 0){var m=l.stringify(u),b=yb(s,a,m,l);io("onInsert",{insertType:t,operations:b,newValue:u,data:m});var w=Wt(b.filter(y=>y.op==="add"||y.op==="replace"));c(b,(y,v,h)=>{if(w){var f=Qo(y,w.path);if(cr(u))return{state:Ho(y,v,f,Kv),selection:r?Qa(f):h};if(u===""){var g=un(f)?void 0:Xe(y,tn(f));return{state:Ho(y,v,f,Pu),selection:yn(g)?Jv(f,o):Xu(f,o)}}}}),io("after patch")}else{io("onInsert",{insertType:t,newValue:u});var p=[];d(u,(y,v)=>({state:oi(y,v,p),selection:cr(u)?Qa(p):Xu(p)}))}}}function Gb(e){return uv.apply(this,arguments)}function uv(){return uv=jt(function*(e){var{char:t,selectInside:r,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c,onSelect:d}=e;a||(Ur(s)?d(De(De({},s),{},{edit:!0,initialValue:t})):t==="{"?ld({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):t==="["?ld({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):pn(s)&&o!==void 0?cr(Xe(o,s.path))||d(De(De({},s),{},{edit:!0,initialValue:t})):(io("onInsertValueWithCharacter",{char:t}),yield(function(u){return dv.apply(this,arguments)})({char:t,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c})))}),uv.apply(this,arguments)}function dv(){return dv=jt(function*(e){var{char:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l}=e;s||ld({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l})}),dv.apply(this,arguments)}Ct(`/* over all fonts, sizes, and colors */
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
}`);var I6=he('<div class="jse-json-preview svelte-25xmyd"> </div>');function Yb(e,t){vt(t,!1);var r=K(),o=K(),s=_(t,"text",8),a=_(t,"json",8),i=_(t,"indentation",8),l=_(t,"parser",8);fe(()=>(E(a()),E(s())),()=>{S(r,a()!==void 0?{json:a()}:{text:s()||""})}),fe(()=>(n(r),E(i()),E(l()),Ju),()=>{S(o,Ta(Hf(n(r),i(),l()),Ju))}),xn(),Rt();var c=I6(),d=H(c);Le(()=>pt(d,n(o))),B(e,c),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var D6=he('<button type="button"><!> <!></button>');function Cf(e,t){vt(t,!1);var r=_(t,"item",8),o=_(t,"className",8,void 0),s=_(t,"onRequestClose",8);Rt();var a=D6(),i=H(a),l=u=>{nn(u,{get data(){return E(r()),Z(()=>r().icon)}})};je(i,u=>{E(r()),Z(()=>r().icon)&&u(l)});var c=se(i,2),d=u=>{var m=Br();Le(()=>pt(m,(E(r()),Z(()=>r().text)))),B(u,m)};je(c,u=>{E(r()),Z(()=>r().text)&&u(d)}),Le(u=>{Mt(a,1,u,"svelte-16jz6ui"),wn(a,"title",(E(r()),Z(()=>r().title))),a.disabled=(E(r()),Z(()=>r().disabled||!1))},[()=>ws((E(na),E(o()),E(r()),Z(()=>na("jse-context-menu-button",o(),r().className))))]),Te("click",a,u=>{s()(),r().onClick(u)}),B(e,a),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var L6=he('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),U6=he('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');Ct(`/* over all fonts, sizes, and colors */
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
}`);var F6=he('<button type="button" slot="defaultItem"><!> </button>');function Ef(e,t){vt(t,!1);var r=K(),o=_(t,"item",8),s=_(t,"className",8,void 0),a=_(t,"onRequestClose",8);fe(()=>(E(o()),E(a())),()=>{S(r,o().items.map(i=>De(De({},i),{},{onClick:l=>{a()(),i.onClick(l)}})))}),xn(),Rt(),(function(i,l){vt(l,!1);var c=K(void 0,!0),d=_(l,"items",25,()=>[]),u=_(l,"title",9,void 0),m=_(l,"width",9,"120px"),b=K(!1,!0);function w(){S(b,!1)}function p(j){Ka(j)==="Escape"&&(j.preventDefault(),S(b,!1))}oo(()=>{document.addEventListener("click",w),document.addEventListener("keydown",p)}),Fo(()=>{document.removeEventListener("click",w),document.removeEventListener("keydown",p)}),fe(()=>E(d()),()=>{S(c,d().every(j=>j.disabled===!0))}),xn(),Rt(!0);var y=U6(),v=H(y);vr(v,l,"defaultItem",{},null);var h,f=se(v,2);nn(H(f),{get data(){return Ba}});var g,x=se(f,2);pr(H(x),5,d,_r,(j,k)=>{var C=L6(),T=H(C),R=H(T),ne=F=>{nn(F,{get data(){return n(k),Z(()=>n(k).icon)}})};je(R,F=>{n(k),Z(()=>n(k).icon)&&F(ne)});var ee=se(R);Le(()=>{var F;wn(T,"title",(n(k),Z(()=>n(k).title))),T.disabled=(n(k),Z(()=>n(k).disabled)),Mt(T,1,ws((n(k),Z(()=>n(k).className))),"svelte-bov1j6"),pt(ee," ".concat((n(k),(F=Z(()=>n(k).text))!==null&&F!==void 0?F:"")))}),Te("click",T,F=>n(k).onClick(F)),B(j,C)}),Le(()=>{var j;wn(y,"title",u()),h=Mt(f,1,"jse-open-dropdown svelte-bov1j6",null,h,{"jse-visible":n(b)}),f.disabled=n(c),g=Mt(x,1,"jse-dropdown-items svelte-bov1j6",null,g,{"jse-visible":n(b)}),Lo(x,"width: ".concat((j=m())!==null&&j!==void 0?j:"",";"))}),Te("click",f,function(){var j=n(b);setTimeout(()=>S(b,!j))}),Te("click",y,w),B(i,y),ht()})(e,{get width(){return E(o()),Z(()=>o().width)},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=F6(),d=H(c),u=b=>{nn(b,{get data(){return E(o()),Z(()=>o().main.icon)}})};je(d,b=>{E(o()),Z(()=>o().main.icon)&&b(u)});var m=se(d);Le(b=>{var w;Mt(c,1,b,"svelte-1y5l9l1"),wn(c,"title",(E(o()),Z(()=>o().main.title))),c.disabled=(E(o()),Z(()=>o().main.disabled||!1)),pt(m," ".concat((E(o()),(w=Z(()=>o().main.text))!==null&&w!==void 0?w:"")))},[()=>ws((E(na),E(s()),E(o()),Z(()=>na("jse-context-menu-button",s(),o().main.className))))]),Te("click",c,b=>{a()(),o().main.onClick(b)}),B(i,c)}}}),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);var V6=he('<div class="jse-separator svelte-1shjn02"></div>'),B6=he('<div class="jse-label svelte-1shjn02"> </div>'),W6=he('<div class="jse-column svelte-1shjn02"></div>'),H6=he('<div class="jse-separator svelte-1shjn02"></div>'),K6=he('<div class="jse-row svelte-1shjn02"></div>'),J6=he('<div class="jse-separator svelte-1shjn02"></div>'),Q6=he('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),G6=he('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function Xb(e,t){vt(t,!1);var r=_(t,"items",9),o=_(t,"onRequestClose",9),s=_(t,"tip",9),a=K(void 0,!0);oo(()=>{var b=Array.from(n(a).querySelectorAll("button")).find(w=>!w.disabled);b&&b.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(b){return console.error("Unknown type of context menu item",b),"???"}Rt(!0);var c=G6(),d=H(c);pr(d,1,r,_r,(b,w)=>{var p=Ut(),y=tt(p),v=f=>{Cf(f,{get item(){return n(w)},get onRequestClose(){return o()}})},h=f=>{var g=Ut(),x=tt(g),j=C=>{Ef(C,{get item(){return n(w)},get onRequestClose(){return o()}})},k=C=>{var T=Ut(),R=tt(T),ne=F=>{var te=K6();pr(te,5,()=>(n(w),Z(()=>n(w).items)),_r,(ye,W)=>{var we=Ut(),Re=tt(we),Ee=Q=>{Cf(Q,{get item(){return n(W)},get onRequestClose(){return o()}})},ge=Q=>{var L=Ut(),le=tt(L),A=M=>{Ef(M,{get item(){return n(W)},get onRequestClose(){return o()}})},O=M=>{var re=Ut(),Oe=tt(re),ae=pe=>{var $=W6();pr($,5,()=>(n(W),Z(()=>n(W).items)),_r,(I,D)=>{var ce=Ut(),G=tt(ce),V=ot=>{Cf(ot,{className:"left",get item(){return n(D)},get onRequestClose(){return o()}})},rt=ot=>{var Ce=Ut(),lt=tt(Ce),qe=it=>{Ef(it,{className:"left",get item(){return n(D)},get onRequestClose(){return o()}})},He=it=>{var Ve=Ut(),Et=tt(Ve),P=U=>{B(U,V6())},N=U=>{var Y=Ut(),me=tt(Y),Ne=ve=>{var be=B6(),ft=H(be);Le(()=>pt(ft,(n(D),Z(()=>n(D).text)))),B(ve,be)},ze=ve=>{var be=Br();Le(ft=>pt(be,ft),[()=>(n(D),Z(()=>l(n(D))))]),B(ve,be)};je(me,ve=>{E(mm),n(D),Z(()=>mm(n(D)))?ve(Ne):ve(ze,!1)},!0),B(U,Y)};je(Et,U=>{E(os),n(D),Z(()=>os(n(D)))?U(P):U(N,!1)},!0),B(it,Ve)};je(lt,it=>{E(bi),n(D),Z(()=>bi(n(D)))?it(qe):it(He,!1)},!0),B(ot,Ce)};je(G,ot=>{E(Ra),n(D),Z(()=>Ra(n(D)))?ot(V):ot(rt,!1)}),B(I,ce)}),B(pe,$)},J=pe=>{var $=Ut(),I=tt($),D=G=>{B(G,H6())},ce=G=>{var V=Br();Le(rt=>pt(V,rt),[()=>(n(W),Z(()=>l(n(W))))]),B(G,V)};je(I,G=>{E(os),n(W),Z(()=>os(n(W)))?G(D):G(ce,!1)},!0),B(pe,$)};je(Oe,pe=>{E(bm),n(W),Z(()=>bm(n(W)))?pe(ae):pe(J,!1)},!0),B(M,re)};je(le,M=>{E(bi),n(W),Z(()=>bi(n(W)))?M(A):M(O,!1)},!0),B(Q,L)};je(Re,Q=>{E(Ra),n(W),Z(()=>Ra(n(W)))?Q(Ee):Q(ge,!1)}),B(ye,we)}),B(F,te)},ee=F=>{var te=Ut(),ye=tt(te),W=Re=>{B(Re,J6())},we=Re=>{var Ee=Br();Le(ge=>pt(Ee,ge),[()=>(n(w),Z(()=>l(n(w))))]),B(Re,Ee)};je(ye,Re=>{E(os),n(w),Z(()=>os(n(w)))?Re(W):Re(we,!1)},!0),B(F,te)};je(R,F=>{E(gm),n(w),Z(()=>gm(n(w)))?F(ne):F(ee,!1)},!0),B(C,T)};je(x,C=>{E(bi),n(w),Z(()=>bi(n(w)))?C(j):C(k,!1)},!0),B(f,g)};je(y,f=>{E(Ra),n(w),Z(()=>Ra(n(w)))?f(v):f(h,!1)}),B(b,p)});var u=se(d,2),m=b=>{var w=Q6(),p=H(w),y=H(p);nn(H(y),{get data(){return fw}});var v=H(se(y,2));Le(()=>pt(v,s())),B(b,w)};je(u,b=>{s()&&b(m)}),er(c,b=>S(a,b),()=>n(a)),Te("keydown",c,function(b){var w=Ka(b),p=i[w];if(p&&b.target){b.preventDefault();var y=xk({allElements:Array.from(n(a).querySelectorAll("button:not([disabled])")),currentElement:b.target,direction:p,hasPrio:v=>v.getAttribute("data-type")!=="jse-open-dropdown"});y&&y.focus()}}),B(e,c),ht()}Ct(`/* over all fonts, sizes, and colors */
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
}`);he("<option> </option>");he("<select></select>");var yu,ju;function wu(e,t){return yu||(ju=new WeakMap,yu=new ResizeObserver(r=>{for(var o of r){var s=ju.get(o.target);s&&s(o.target)}})),ju.set(e,t),yu.observe(e),{destroy:()=>{ju.delete(e),yu.unobserve(e)}}}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Y6=he("<!> <!>",1),X6=he('<div class="jse-search-box-background svelte-10mlrw4"></div>'),Z6=he('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),eS=he('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),tS=he('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),nS=he('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function fv(e,t){vt(t,!1);var r=K(void 0,!0),o=Fr("jsoneditor:TreeMode"),s=typeof window>"u";o("isSSR:",s);var a=Wi(),i=Wi(),{openAbsolutePopup:l,closeAbsolutePopup:c}=_s("absolute-popup"),d=K(void 0,!0),u=K(void 0,!0),m=K(void 0,!0),b=!1,w=Ab(),p=_(t,"readOnly",9),y=_(t,"externalContent",9),v=_(t,"externalSelection",9),h=_(t,"history",9),f=_(t,"truncateTextSize",9),g=_(t,"mainMenuBar",9),x=_(t,"navigationBar",9),j=_(t,"escapeControlCharacters",9),k=_(t,"escapeUnicodeCharacters",9),C=_(t,"parser",9),T=_(t,"parseMemoizeOne",9),R=_(t,"validator",9),ne=_(t,"validationParser",9),ee=_(t,"pathParser",9),F=_(t,"indentation",9),te=_(t,"onError",9),ye=_(t,"onChange",9),W=_(t,"onChangeMode",9),we=_(t,"onSelect",9),Re=_(t,"onUndo",9),Ee=_(t,"onRedo",9),ge=_(t,"onRenderValue",9),Q=_(t,"onRenderMenu",9),L=_(t,"onRenderContextMenu",9),le=_(t,"onClassName",9),A=_(t,"onFocus",9),O=_(t,"onBlur",9),M=_(t,"onSortModal",9),re=_(t,"onTransformModal",9),Oe=_(t,"onJSONEditorModal",9),ae=!1,J=K(!1,!0),pe=K(void 0,!0);Yv({onMount:oo,onDestroy:Fo,getWindow:()=>sc(n(m)),hasFocus:()=>ae&&document.hasFocus()||qv(n(m)),onFocus:()=>{b=!0,A()&&A()()},onBlur:()=>{b=!1,O()&&O()()}});var $=K(void 0,!0),I=K(void 0,!0),D=void 0,ce=!1,G=K(Gf({json:n($)}),!0),V=K(Wl(v())?v():void 0,!0);function rt(q){S(V,q)}oo(()=>{if(n(V)){var q=ut(n(V));S(G,Ho(n($),n(G),q,Pu)),setTimeout(()=>ar(q))}});var ot,Ce=K(void 0,!0),lt=K(void 0,!0),qe=K(void 0,!0),He=K(void 0,!0),it=K(!1,!0),Ve=K(!1,!0);function Et(q){S(He,(ot=q)?xb(n($),ot.items):void 0)}function P(q,oe){return N.apply(this,arguments)}function N(){return(N=jt(function*(q,oe){S(G,Ho(n($),n(G),q,Pu));var _e=br(oe);yield Gt(q,{element:_e})})).apply(this,arguments)}function U(){S(it,!1),S(Ve,!1),kt()}function Y(q){o("select validation error",q),S(V,Kt(q.path)),Gt(q.path)}function me(q){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yf;o("expand"),S(G,Ho(n($),n(G),q,oe))}function Ne(q,oe){S(G,xm(n($),n(G),q,oe)),n(V)&&(function(_e,Ke){return ga(ut(_e),Ke)&&(ut(_e).length>Ke.length||zr(_e))})(n(V),q)&&S(V,void 0)}var ze=K(!1,!0),ve=K([],!0),be=K(void 0,!0),ft=ql(qb);function at(q,oe,_e,Ke){Ai(()=>{var Fe;try{Fe=ft(q,oe,_e,Ke)}catch(Ue){Fe=[{path:[],message:"Failed to validate: "+Ue.message,severity:Go.warning}]}Ft(Fe,n(ve))||(o("validationErrors changed:",Fe),S(ve,Fe),S(be,(function(Ue,St){var _t;return St.forEach(Bt=>{_t=Jm(Ue,_t,Bt.path,(_n,en)=>De(De({},en),{},{validationError:Bt}))}),St.forEach(Bt=>{for(var _n=Bt.path;_n.length>0;)_n=tn(_n),_t=Jm(Ue,_t,_n,(en,Bn)=>Bn.validationError?Bn:De(De({},Bn),{},{validationError:{isChildError:!0,path:_n,message:"Contains invalid data",severity:Go.warning}}))}),_t})(q,n(ve))))},Fe=>o("validationErrors updated in ".concat(Fe," ms")))}function Je(){return o("validate"),D?{parseError:D,isRepairable:!1}:(at(n($),R(),C(),ne()),un(n(ve))?void 0:{validationErrors:n(ve)})}function Ge(){return n($)}function qt(){return n(G)}function kn(){return n(V)}function En(q){o("applyExternalContent",{updatedContent:q}),Ul(q)?(function(oe){if(oe!==void 0){var _e=!Ft(n($),oe);if(o("update external json",{isChanged:_e,currentlyText:n($)===void 0}),!!_e){var Ke={documentState:n(G),selection:n(V),json:n($),text:n(I),textIsRepaired:n(ze)};S($,oe),S(G,Eo(oe,n(G))),zt(n($)),S(I,void 0),S(ze,!1),D=void 0,dn(n($)),Vt(Ke)}}})(q.json):Ll(q)&&(function(oe){if(!(oe===void 0||Ul(y()))){var _e=oe!==n(I);if(o("update external text",{isChanged:_e}),!!_e){var Ke={documentState:n(G),selection:n(V),json:n($),text:n(I),textIsRepaired:n(ze)};try{S($,T()(oe)),S(G,Eo(n($),n(G))),zt(n($)),S(I,oe),S(ze,!1),D=void 0}catch(Fe){try{S($,T()(va(oe))),S(G,Eo(n($),n(G))),zt(n($)),S(I,oe),S(ze,!0),D=void 0,dn(n($))}catch{S($,void 0),S(G,void 0),S(I,y().text),S(ze,!1),D=n(I)!==void 0&&n(I)!==""?Yi(n(I),Fe.message||String(Fe)):void 0}}dn(n($)),Vt(Ke)}}})(q.text)}function zt(q){ce||(ce=!0,S(G,oi(q,n(G),[])))}function dn(q){n(V)&&(Io(q,Qs(n(V)))&&Io(q,ut(n(V)))||(o("clearing selection: path does not exist anymore",n(V)),S(V,yi(q,n(G)))))}function Vt(q){if(q.json!==void 0||q.text!==void 0){var oe=n($)!==void 0&&q.json!==void 0;h().add({type:"tree",undo:{patch:oe?[{op:"replace",path:"",value:q.json}]:void 0,json:q.json,text:q.text,documentState:q.documentState,textIsRepaired:q.textIsRepaired,selection:ua(q.selection),sortedColumn:void 0},redo:{patch:oe?[{op:"replace",path:"",value:n($)}]:void 0,json:n($),text:n(I),documentState:n(G),textIsRepaired:n(ze),selection:ua(n(V)),sortedColumn:void 0}})}}function Jt(q,oe){var _e;if(o("patch",q,oe),n($)===void 0)throw new Error("Cannot apply patch: no JSON");var Ke=n($),Fe={json:void 0,text:n(I),documentState:n(G),selection:ua(n(V)),textIsRepaired:n(ze),sortedColumn:void 0},Ue=wb(n($),q),St=cb(n($),n(G),q),_t=(_e=el(n($),q))!==null&&_e!==void 0?_e:n(V),Bt=typeof oe=="function"?oe(St.json,St.documentState,_t):void 0;return S($,Bt?.json!==void 0?Bt.json:St.json),S(G,Bt?.state!==void 0?Bt.state:St.documentState),S(V,Bt?.selection!==void 0?Bt.selection:_t),S(I,void 0),S(ze,!1),S(lt,void 0),S(qe,void 0),D=void 0,dn(n($)),h().add({type:"tree",undo:De({patch:Ue},Fe),redo:{patch:q,json:void 0,text:n(I),documentState:n(G),selection:ua(n(V)),sortedColumn:void 0,textIsRepaired:n(ze)}}),{json:n($),previousJson:Ke,undo:Ue,redo:q}}function cn(){!p()&&n(V)&&S(V,Jv(ut(n(V))))}function gt(){if(!p()&&n(V)){var q=ut(n(V)),oe=Xe(n($),q);cr(oe)?(function(_e,Ke){o("openJSONEditorModal",{path:_e,value:Ke}),ae=!0,Oe()({content:{json:Ke},path:_e,onPatch:n(Sn).onPatch,onClose:()=>{ae=!1,setTimeout(kt)}})})(q,oe):S(V,Xu(q))}}function fn(){if(!p()&&pn(n(V))){var q=ut(n(V)),oe=mt(q),_e=Xe(n($),q),Ke=!fa(n($),n(G),q),Fe=Ke?String(_e):ul(String(_e),C());o("handleToggleEnforceString",{enforceString:Ke,value:_e,updatedValue:Fe}),ke([{op:"replace",path:oe,value:Fe}],(Ue,St)=>({state:_d(n($),St,q,{type:"value",enforceString:Ke})}))}}function Ot(){return n(ze)&&n($)!==void 0&&Ie(n($)),n($)!==void 0?{json:n($)}:{text:n(I)||""}}function et(){return Qt.apply(this,arguments)}function Qt(){return Qt=jt(function*(){var q=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Hb({json:n($),selection:n(V),indentation:q?F():void 0,readOnly:p(),parser:C(),onPatch:ke})}),Qt.apply(this,arguments)}function It(){return zn.apply(this,arguments)}function zn(){return zn=jt(function*(){var q=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n($)!==void 0&&(yield Kb({json:n($),selection:n(V),indentation:q?F():void 0,parser:C()}))}),zn.apply(this,arguments)}function Hn(q){var oe;q.preventDefault(),Gn((oe=q.clipboardData)===null||oe===void 0?void 0:oe.getData("text/plain"))}function Vn(){return ur.apply(this,arguments)}function ur(){return(ur=jt(function*(){try{Gn(yield navigator.clipboard.readText())}catch(q){console.error(q),S(J,!0)}})).apply(this,arguments)}function Gn(q){q!==void 0&&Jb({clipboardText:q,json:n($),selection:n(V),readOnly:p(),parser:C(),onPatch:ke,onChangeText:X,onPasteMultilineText:Ln,openRepairModal:or})}function or(q,oe){S(pe,{text:q,onParse:_e=>ac(_e,Ke=>oc(Ke,C())),onRepair:Q0,onApply:oe,onClose:kt})}function mr(){Qb({json:n($),text:n(I),selection:n(V),keepSelection:!1,readOnly:p(),onChange:ye(),onPatch:ke})}function tr(){!p()&&n($)!==void 0&&n(V)&&Ni&&!un(ut(n(V)))&&(o("duplicate",{selection:n(V)}),ke(gb(n($),xs(n($),n(V)))))}function Cr(){p()||!n(V)||!Un(n(V))&&!pn(n(V))||un(ut(n(V)))||(o("extract",{selection:n(V)}),ke(bb(n($),n(V)),(q,oe)=>{if(cr(q))return{state:bf(q,oe,[])}}))}function gr(q){ld({insertType:q,selectInside:!0,initialValue:void 0,json:n($),selection:n(V),readOnly:p(),parser:C(),onPatch:ke,onReplaceJson:Ie})}function xr(q){Ur(n(V))&&S(V,Kt(n(V).path)),n(V)||S(V,yi(n($),n(G))),gr(q)}function nr(q){if(!p()&&n(V))if(hu(n(V)))try{var oe=Qs(n(V)),_e=Xe(n($),oe),Ke=(function(Ue,St,_t){if(St==="array"){if(Array.isArray(Ue))return Ue;if(yn(Ue))return lm(Ue);if(typeof Ue=="string")try{var Bt=_t.parse(Ue);if(Array.isArray(Bt))return Bt;if(yn(Bt))return lm(Bt)}catch{return[Ue]}return[Ue]}if(St==="object"){if(Array.isArray(Ue))return im(Ue);if(yn(Ue))return Ue;if(typeof Ue=="string")try{var _n=_t.parse(Ue);if(yn(_n))return _n;if(Array.isArray(_n))return im(_n)}catch{return{value:Ue}}return{value:Ue}}if(St==="value")return cr(Ue)?_t.stringify(Ue):Ue;throw new Error("Cannot convert ".concat(Nv(Ue,_t)," to ").concat(St))})(_e,q,C());if(Ke===_e)return;var Fe=[{op:"replace",path:mt(oe),value:Ke}];o("handleConvert",{selection:n(V),path:oe,type:q,operations:Fe}),ke(Fe,(Ue,St)=>({state:n(V)?oi(Ue,St,ut(n(V))):n(G)}))}catch(Ue){te()(Ue)}else te()(new Error("Cannot convert current selection to ".concat(q)))}function Pe(){if(n(V)){var q=Cm(n($),n(G),n(V),!1),oe=tn(ut(n(V)));q&&!un(ut(q))&&Ft(oe,tn(ut(q)))?S(V,Fa(ut(q))):S(V,Qa(oe)),o("insert before",{selection:n(V),selectionBefore:q,parentPath:oe}),Qn(),rn()}}function Dt(){if(n(V)){var q=gs(n($),n(V));o("insert after",q),S(V,Fa(q)),Qn(),rn()}}function jn(q){return In.apply(this,arguments)}function In(){return(In=jt(function*(q){yield Gb({char:q,selectInside:!0,json:n($),selection:n(V),readOnly:p(),parser:C(),onPatch:ke,onReplaceJson:Ie,onSelect:rt})})).apply(this,arguments)}function dr(){if(!p()&&h().canUndo){var q=h().undo();if(Gu(q)){var oe={json:n($),text:n(I)};S($,q.undo.patch?Jo(n($),q.undo.patch):q.undo.json),S(G,q.undo.documentState),S(V,q.undo.selection),S(I,q.undo.text),S(ze,q.undo.textIsRepaired),D=void 0,o("undo",{item:q,json:n($),documentState:n(G),selection:n(V)}),ie(oe,q.undo.patch&&q.redo.patch?{json:n($),previousJson:oe.json,redo:q.undo.patch,undo:q.redo.patch}:void 0),kt(),n(V)&&Gt(ut(n(V)),{scrollToWhenVisible:!1})}else Re()(q)}}function Nr(){if(!p()&&h().canRedo){var q=h().redo();if(Gu(q)){var oe={json:n($),text:n(I)};S($,q.redo.patch?Jo(n($),q.redo.patch):q.redo.json),S(G,q.redo.documentState),S(V,q.redo.selection),S(I,q.redo.text),S(ze,q.redo.textIsRepaired),D=void 0,o("redo",{item:q,json:n($),documentState:n(G),selection:n(V)}),ie(oe,q.undo.patch&&q.redo.patch?{json:n($),previousJson:oe.json,redo:q.redo.patch,undo:q.undo.patch}:void 0),kt(),n(V)&&Gt(ut(n(V)),{scrollToWhenVisible:!1})}else Ee()(q)}}function Ht(q){var oe;p()||n($)===void 0||(ae=!0,M()({id:a,json:n($),rootPath:q,onSort:(oe=jt(function*(_e){var{operations:Ke}=_e;o("onSort",q,Ke),ke(Ke,(Fe,Ue)=>({state:bf(Fe,Ue,q),selection:Kt(q)}))}),function(_e){return oe.apply(this,arguments)}),onClose:()=>{ae=!1,setTimeout(kt)}}))}function kr(){n(V)&&Ht(Om(n($),n(V)))}function Wr(){Ht([])}function rr(q){if(n($)!==void 0){var{id:oe,onTransform:_e,onClose:Ke}=q,Fe=q.rootPath||[];ae=!0,re()({id:oe||i,json:n($),rootPath:Fe,onTransform:Ue=>{_e?_e({operations:Ue,json:n($),transformedJson:Jo(n($),Ue)}):(o("onTransform",Fe,Ue),ke(Ue,(St,_t)=>({state:bf(St,_t,Fe),selection:Kt(Fe)})))},onClose:()=>{ae=!1,setTimeout(kt),Ke&&Ke()}})}}function Vr(){n(V)&&rr({rootPath:Om(n($),n(V))})}function Dn(){rr({rootPath:[]})}function Gt(q){return Nt.apply(this,arguments)}function Nt(){return Nt=jt(function*(q){var{scrollToWhenVisible:oe=!0,element:_e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};S(G,Ho(n($),n(G),q,Pu));var Ke=_e??Rn(q);if(o("scrollTo",{path:q,elem:Ke,refContents:n(d)}),!Ke||!n(d))return Promise.resolve();var Fe=n(d).getBoundingClientRect(),Ue=Ke.getBoundingClientRect();if(!oe&&Ue.bottom>Fe.top&&Ue.top<Fe.bottom)return Promise.resolve();var St=-Fe.height/4;return new Promise(_t=>{w(Ke,{container:n(d),offset:St,duration:300,callback:()=>_t()})})}),Nt.apply(this,arguments)}function Rn(q){var oe,_e;return Qn(),(oe=(_e=n(d))===null||_e===void 0?void 0:_e.querySelector('div[data-path="'.concat($u(q),'"]')))!==null&&oe!==void 0?oe:void 0}function br(q){var oe,_e;return Qn(),(oe=(_e=n(d))===null||_e===void 0?void 0:_e.querySelector('span[data-search-result-index="'.concat(q,'"]')))!==null&&oe!==void 0?oe:void 0}function ar(q){var oe=Rn(q);if(oe&&n(d)){var _e=n(d).getBoundingClientRect(),Ke=oe.getBoundingClientRect(),Fe=cr(Xe(n($),q))?20:Ke.height;Ke.top<_e.top+20?w(oe,{container:n(d),offset:-20,duration:0}):Ke.top+Fe>_e.bottom-20&&w(oe,{container:n(d),offset:-(_e.height-Fe-20),duration:0})}}function ie(q,oe){if(q.json!==void 0||q?.text!==void 0){if(n(I)!==void 0){var _e,Ke={text:n(I),json:void 0};(_e=ye())===null||_e===void 0||_e(Ke,q,{contentErrors:Je(),patchResult:oe})}else if(n($)!==void 0){var Fe,Ue={text:void 0,json:n($)};(Fe=ye())===null||Fe===void 0||Fe(Ue,q,{contentErrors:Je(),patchResult:oe})}}}function ke(q,oe){o("handlePatch",q,oe);var _e={json:n($),text:n(I)},Ke=Jt(q,oe);return ie(_e,Ke),Ke}function Ie(q,oe){var _e={json:n($),text:n(I)},Ke={documentState:n(G),selection:n(V),json:n($),text:n(I),textIsRepaired:n(ze)},Fe=Ho(n($),Eo(q,n(G)),[],Rl),Ue=typeof oe=="function"?oe(q,Fe,n(V)):void 0;S($,Ue?.json!==void 0?Ue.json:q),S(G,Ue?.state!==void 0?Ue.state:Fe),S(V,Ue?.selection!==void 0?Ue.selection:n(V)),S(I,void 0),S(ze,!1),D=void 0,dn(n($)),Vt(Ke),ie(_e,void 0)}function X(q,oe){o("handleChangeText");var _e={json:n($),text:n(I)},Ke={documentState:n(G),selection:n(V),json:n($),text:n(I),textIsRepaired:n(ze)};try{S($,T()(q)),S(G,Ho(n($),Eo(n($),n(G)),[],Rl)),S(I,void 0),S(ze,!1),D=void 0}catch(Ue){try{S($,T()(va(q))),S(G,Ho(n($),Eo(n($),n(G)),[],Rl)),S(I,q),S(ze,!0),D=void 0}catch{S($,void 0),S(G,Gf({json:n($),expand:Rl})),S(I,q),S(ze,!1),D=n(I)!==""?Yi(n(I),Ue.message||String(Ue)):void 0}}if(typeof oe=="function"){var Fe=oe(n($),n(G),n(V));S($,Fe?.json!==void 0?Fe.json:n($)),S(G,Fe?.state!==void 0?Fe.state:n(G)),S(V,Fe?.selection!==void 0?Fe.selection:n(V))}dn(n($)),Vt(Ke),ie(_e,void 0)}function de(q,oe){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:q,expanded:oe,recursive:_e}),oe?me(q,_e?Kv:Yf):Ne(q,_e),kt()}function $e(){de([],!0,!0)}function We(){de([],!1,!0)}function st(q){o("openFind",{findAndReplace:q}),S(it,!1),S(Ve,!1),Qn(),S(it,!0),S(Ve,q)}function ct(q,oe){o("handleExpandSection",q,oe),S(G,(function(_e,Ke,Fe,Ue){return Zi(_e,Ke,Fe,(St,_t)=>{if(!Lr(_t))return _t;var Bt=sb(_t.visibleSections.concat(Ue));return De(De({},_t),{},{visibleSections:Bt})})})(n($),n(G),q,oe))}function bt(q){o("pasted json as text",q),S(lt,q)}function Ln(q){o("pasted multiline text",{pastedText:q}),S(qe,q)}function Yt(q){var oe,{anchor:_e,left:Ke,top:Fe,width:Ue,height:St,offsetTop:_t,offsetLeft:Bt,showTip:_n}=q,en=(function(Nn){var{json:ir,documentState:bn,selection:yt,readOnly:sn,onEditKey:Pt,onEditValue:dt,onToggleEnforceString:At,onCut:fr,onCopy:Tn,onPaste:lr,onRemove:jr,onDuplicate:Hr,onExtract:wa,onInsertBefore:yo,onInsert:Vo,onConvert:aa,onInsertAfter:Bo,onSort:ao,onTransform:Kr}=Nn,jo=ir!==void 0,xa=!!yt,wo=!!yt&&un(ut(yt)),Cn=yt?Xe(ir,ut(yt)):void 0,Or=Array.isArray(Cn)?"Edit array":yn(Cn)?"Edit object":"Edit value",$r=jo&&(Un(yt)||Ur(yt)||pn(yt)),Es=yt&&!wo?Xe(ir,tn(ut(yt))):void 0,li=!sn&&jo&&Yu(yt)&&!wo&&!Array.isArray(Es),Os=!sn&&jo&&yt!==void 0&&Yu(yt),fl=Os&&!cr(Cn),ci=!sn&&$r,vl=$r,Rd=!sn&&xa,Nd=!sn&&jo&&$r&&!wo,Td=!sn&&jo&&yt!==void 0&&(Un(yt)||pn(yt))&&!wo,sa=$r,$s=sa?"Convert to:":"Insert:",Pr=!sn&&(zr(yt)&&Array.isArray(Cn)||po(yt)&&Array.isArray(Es)),Ro=!sn&&(sa?hu(yt)&&!yn(Cn):xa),hl=!sn&&(sa?hu(yt)&&!Array.isArray(Cn):xa),pl=!sn&&(sa?hu(yt)&&cr(Cn):xa),Ps=yt!==void 0&&fa(ir,bn,ut(yt));function Yr(ml){$r?ml!=="structure"&&aa(ml):Vo(ml)}return[{type:"row",items:[{type:"button",onClick:()=>Pt(),icon:zi,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!li},{type:"dropdown-button",main:{type:"button",onClick:()=>dt(),icon:zi,text:Or,title:"Edit the value (Double-click on the value)",disabled:!Os},width:"11em",items:[{type:"button",icon:zi,text:Or,title:"Edit the value (Double-click on the value)",onClick:()=>dt(),disabled:!Os},{type:"button",icon:Ps?Rg:Tg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>At(),disabled:!fl}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>fr(!0),icon:qi,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!ci},width:"10em",items:[{type:"button",icon:qi,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>fr(!0),disabled:!ci},{type:"button",icon:qi,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>fr(!1),disabled:!ci}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Tn(!0),icon:is,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!vl},width:"12em",items:[{type:"button",icon:is,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Tn(!0),disabled:!vl},{type:"button",icon:is,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Tn(!1),disabled:!vl}]},{type:"button",onClick:()=>lr(),icon:Mg,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!Rd}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Hr(),icon:zg,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!Nd},{type:"button",onClick:()=>wa(),icon:Mw,text:"Extract",title:"Extract selected contents",disabled:!Td},{type:"button",onClick:()=>ao(),icon:Iu,text:"Sort",title:"Sort array or object contents",disabled:sn||!$r},{type:"button",onClick:()=>Kr(),icon:qu,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:sn||!$r},{type:"button",onClick:()=>jr(),icon:Nf,text:"Remove",title:"Remove selected contents (Delete)",disabled:sn||!$r}]},{type:"column",items:[{type:"label",text:$s},{type:"button",onClick:()=>Yr("structure"),icon:sa?yc:$i,text:"Structure",title:$s+" structure like the first item in the array",disabled:!Pr},{type:"button",onClick:()=>Yr("object"),icon:sa?yc:$i,text:"Object",title:$s+" object",disabled:!Ro},{type:"button",onClick:()=>Yr("array"),icon:sa?yc:$i,text:"Array",title:$s+" array",disabled:!hl},{type:"button",onClick:()=>Yr("value"),icon:sa?yc:$i,text:"Value",title:$s+" value",disabled:!pl}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>yo(),icon:Cw,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:sn||!$r||wo},{type:"button",onClick:()=>Bo(),icon:yw,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:sn||!$r||wo}]}]})({json:n($),documentState:n(G),selection:n(V),readOnly:p(),onEditKey:cn,onEditValue:gt,onToggleEnforceString:fn,onCut:et,onCopy:It,onPaste:Vn,onRemove:mr,onDuplicate:tr,onExtract:Cr,onInsertBefore:Pe,onInsert:xr,onInsertAfter:Dt,onConvert:nr,onSort:kr,onTransform:Vr}),Bn=(oe=L()(en))!==null&&oe!==void 0?oe:en;if(Bn!==!1){var $t={left:Ke,top:Fe,offsetTop:_t,offsetLeft:Bt,width:Ue,height:St,anchor:_e,closeOnOuterClick:!0,onClose:()=>{ae=!1,kt()}};ae=!0;var sr=l(Xb,{tip:_n?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Bn,onRequestClose:()=>c(sr)},$t)}}function rn(q){if(!Dr(n(V)))if(q&&(q.stopPropagation(),q.preventDefault()),q&&q.type==="contextmenu"&&q.target!==n(u))Yt({left:q.clientX,top:q.clientY,width:qa,height:Aa,showTip:!1});else{var oe,_e=(oe=n(d))===null||oe===void 0?void 0:oe.querySelector(".jse-context-menu-pointer.jse-selected");if(_e)Yt({anchor:_e,offsetTop:2,width:qa,height:Aa,showTip:!1});else{var Ke,Fe=(Ke=n(d))===null||Ke===void 0?void 0:Ke.getBoundingClientRect();Fe&&Yt({top:Fe.top+2,left:Fe.left+2,width:qa,height:Aa,showTip:!1})}}}function Tt(q){Yt({anchor:ob(q.target,"BUTTON"),offsetTop:0,width:qa,height:Aa,showTip:!0})}function Xt(){return Tr.apply(this,arguments)}function Tr(){return(Tr=jt(function*(){if(o("apply pasted json",n(lt)),n(lt)){var{onPasteAsJson:q}=n(lt);S(lt,void 0),q(),setTimeout(kt)}})).apply(this,arguments)}function wt(){return gn.apply(this,arguments)}function gn(){return(gn=jt(function*(){o("apply pasted multiline text",n(qe)),n(qe)&&(Gn(JSON.stringify(n(qe))),setTimeout(kt))})).apply(this,arguments)}function on(){o("clear pasted json"),S(lt,void 0),kt()}function vn(){o("clear pasted multiline text"),S(qe,void 0),kt()}function Kn(){W()(Rr.text)}function On(q){S(V,q),kt(),Gt(ut(q))}function kt(){o("focus"),n(u)&&(n(u).focus(),n(u).select())}function Er(q){return(function(oe,_e,Ke){var Fe=tn(Ke),Ue=[Wt(Ke)],St=Xe(oe,Fe),_t=St?gf(St,_e,Ue):void 0;return _t?Kt(Fe.concat(_t)):Fa(Ke)})(n($),n(G),q)}function yr(q){n(r)&&n(r).onDrag(q)}function Ar(){n(r)&&n(r).onDragEnd()}var Sn=K(void 0,!0);fe(()=>n(V),()=>{var q;q=n(V),Ft(q,v())||(o("onSelect",q),we()(q))}),fe(()=>(E(j()),E(k())),()=>{S(Ce,Tv({escapeControlCharacters:j(),escapeUnicodeCharacters:k()}))}),fe(()=>n(it),()=>{(function(q){n(d)&&q&&n(d).scrollTop===0&&(Oo(d,n(d).style.overflowAnchor="none"),Oo(d,n(d).scrollTop+=Ml),setTimeout(()=>{n(d)&&Oo(d,n(d).style.overflowAnchor="")}))})(n(it))}),fe(()=>E(y()),()=>{En(y())}),fe(()=>E(v()),()=>{(function(q){Ft(n(V),q)||(o("applyExternalSelection",{selection:n(V),externalSelection:q}),Wl(q)&&S(V,q))})(v())}),fe(()=>(n($),E(R()),E(C()),E(ne())),()=>{at(n($),R(),C(),ne())}),fe(()=>(n(d),Km),()=>{S(r,n(d)?Km(n(d)):void 0)}),fe(()=>(E(p()),E(f()),E(C()),n(Ce),E(ge()),E(le())),()=>{S(Sn,{mode:Rr.tree,readOnly:p(),truncateTextSize:f(),parser:C(),normalization:n(Ce),getJson:Ge,getDocumentState:qt,getSelection:kn,findElement:Rn,findNextInside:Er,focus:kt,onPatch:ke,onInsert:gr,onExpand:de,onSelect:rt,onFind:st,onExpandSection:ct,onPasteJson:bt,onRenderValue:ge(),onContextMenu:Yt,onClassName:le()||(()=>{}),onDrag:yr,onDragEnd:Ar})}),fe(()=>n(Sn),()=>{o("context changed",n(Sn))}),xn();var $n={expand:me,collapse:Ne,validate:Je,getJson:Ge,patch:Jt,acceptAutoRepair:Ot,openTransformModal:rr,scrollTo:Gt,findElement:Rn,findSearchResult:br,focus:kt};Rt(!0);var Sr=nS();Te("mousedown",La,function(q){!dl(q.target,oe=>oe===n(m))&&Dr(n(V))&&(o("click outside the editor, exit edit mode"),S(V,ua(n(V))),b&&n(u)&&(n(u).focus(),n(u).blur()),o("blur (outside editor)"),n(u)&&n(u).blur())});var z,ue=tt(Sr),Me=H(ue),Be=q=>{(function(oe,_e){vt(_e,!1);var Ke=K(void 0,!0),Fe=K(void 0,!0),Ue=K(void 0,!0),St=_(_e,"json",9),_t=_(_e,"selection",9),Bt=_(_e,"readOnly",9),_n=_(_e,"showSearch",13,!1),en=_(_e,"history",9),Bn=_(_e,"onExpandAll",9),$t=_(_e,"onCollapseAll",9),sr=_(_e,"onUndo",9),Nn=_(_e,"onRedo",9),ir=_(_e,"onSort",9),bn=_(_e,"onTransform",9),yt=_(_e,"onContextMenu",9),sn=_(_e,"onCopy",9),Pt=_(_e,"onRenderMenu",9);function dt(){_n(!_n())}var At=K(void 0,!0),fr=K(void 0,!0),Tn=K(void 0,!0),lr=K(void 0,!0);fe(()=>E(St()),()=>{S(Ke,St()!==void 0)}),fe(()=>(n(Ke),E(_t()),pn),()=>{S(Fe,n(Ke)&&(Un(_t())||Ur(_t())||pn(_t())))}),fe(()=>(E(Bn()),E(St())),()=>{S(At,{type:"button",icon:Lb,title:"Expand all",className:"jse-expand-all",onClick:Bn(),disabled:!cr(St())})}),fe(()=>(E($t()),E(St())),()=>{S(fr,{type:"button",icon:Ub,title:"Collapse all",className:"jse-collapse-all",onClick:$t(),disabled:!cr(St())})}),fe(()=>E(St()),()=>{S(Tn,{type:"button",icon:fd,title:"Search (Ctrl+F)",className:"jse-search",onClick:dt,disabled:St()===void 0})}),fe(()=>(E(Bt()),n(At),n(fr),E(ir()),E(St()),E(bn()),n(Tn),E(yt()),E(sr()),E(en()),E(Nn()),E(sn()),n(Fe)),()=>{S(lr,Bt()?[n(At),n(fr),{type:"separator"},{type:"button",icon:is,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:sn(),disabled:!n(Fe)},{type:"separator"},n(Tn),{type:"space"}]:[n(At),n(fr),{type:"separator"},{type:"button",icon:Iu,title:"Sort",className:"jse-sort",onClick:ir(),disabled:Bt()||St()===void 0},{type:"button",icon:qu,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:bn(),disabled:Bt()||St()===void 0},n(Tn),{type:"button",icon:Ag,title:Dv,className:"jse-contextmenu",onClick:yt()},{type:"separator"},{type:"button",icon:wv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:sr(),disabled:!en().canUndo},{type:"button",icon:jv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Nn(),disabled:!en().canRedo},{type:"space"}])}),fe(()=>(E(Pt()),n(lr)),()=>{S(Ue,Pt()(n(lr))||n(lr))}),xn(),Rt(!0),Md(oe,{get items(){return n(Ue)}}),ht()})(q,{get json(){return n($)},get selection(){return n(V)},get readOnly(){return p()},get history(){return h()},onExpandAll:$e,onCollapseAll:We,onUndo:dr,onRedo:Nr,onSort:Wr,onTransform:Dn,onContextMenu:Tt,onCopy:It,get onRenderMenu(){return Q()},get showSearch(){return n(it)},set showSearch(oe){S(it,oe)},$$legacy:!0})};je(Me,q=>{g()&&q(Be)});var Se=se(Me,2),Qe=q=>{$6(q,{get json(){return n($)},get selection(){return n(V)},onSelect:On,get onError(){return te()},get pathParser(){return ee()}})};je(Se,q=>{x()&&q(Qe)});var Ze=se(Se,2),Ye=q=>{var oe=eS(),_e=tt(oe),Ke=H(_e);Ke.readOnly=!0,er(Ke,_t=>S(u,_t),()=>n(u));var Fe=se(_e,2),Ue=_t=>{var Bt=Ut(),_n=tt(Bt),en=$t=>{(function(sr,Nn){function ir(At){At.stopPropagation(),Nn.onCreateObject()}function bn(At){At.stopPropagation(),Nn.onCreateArray()}vt(Nn,!0);var yt=m6();yt.__click=()=>Nn.onClick();var sn=se(H(yt),2),Pt=se(H(sn),2),dt=At=>{var fr=p6(),Tn=se(tt(fr),2);wn(Tn,"title","Create an empty JSON object (press '{')"),Tn.__click=ir;var lr=se(Tn,2);wn(lr,"title","Create an empty JSON array (press '[')"),lr.__click=bn,B(At,fr)};je(Pt,At=>{Nn.readOnly||At(dt)}),B(sr,yt),ht()})($t,{get readOnly(){return p()},onCreateObject:()=>{kt(),jn("{")},onCreateArray:()=>{kt(),jn("[")},onClick:()=>{kt()}})},Bn=$t=>{var sr=Y6(),Nn=tt(sr),ir=nt(()=>p()?[]:[{icon:zu,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Kn}]);Mo(Nn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(ir)}}),Yb(se(Nn,2),{get text(){return n(I)},get json(){return n($)},get indentation(){return F()},get parser(){return C()}}),B($t,sr)};je(_n,$t=>{n(I)===""||n(I)===void 0?$t(en):$t(Bn,!1)}),B(_t,Bt)},St=_t=>{var Bt=Z6(),_n=tt(Bt);Vb(H(_n),{get json(){return n($)},get documentState(){return n(G)},get parser(){return C()},get showSearch(){return n(it)},get showReplace(){return n(Ve)},get readOnly(){return p()},columns:void 0,onSearch:Et,onFocus:P,onPatch:ke,onClose:U});var en=se(_n,2);wn(en,"data-jsoneditor-scrollable-contents",!0);var Bn=H(en),$t=Pt=>{B(Pt,X6())};je(Bn,Pt=>{n(it)&&Pt($t)}),sv(se(Bn,2),{get value(){return n($)},pointer:"",get state(){return n(G)},get validationErrors(){return n(be)},get searchResults(){return n(He)},get selection(){return n(V)},get context(){return n(Sn)},get onDragSelectionStart(){return Mr}}),er(en,Pt=>S(d,Pt),()=>n(d));var sr=se(en,2),Nn=Pt=>{var dt=nt(()=>(n(lt),Z(()=>"You pasted a JSON ".concat(Array.isArray(n(lt).contents)?"array":"object"," as text")))),At=nt(()=>[{icon:bs,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Xt},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:on}]);Mo(Pt,{type:"info",get message(){return n(dt)},get actions(){return n(At)}})};je(sr,Pt=>{n(lt)&&Pt(Nn)});var ir=se(sr,2),bn=Pt=>{var dt=nt(()=>[{icon:bs,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:wt},{text:"Leave as is",title:"Keep the pasted array",onClick:vn}]);Mo(Pt,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(dt)}})};je(ir,Pt=>{n(qe)&&Pt(bn)});var yt=se(ir,2),sn=Pt=>{var dt=nt(()=>p()?[]:[{icon:xv,text:"Ok",title:"Accept the repaired document",onClick:Ot},{icon:zu,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Kn}]);Mo(Pt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(dt)},onClose:kt})};je(yt,Pt=>{n(ze)&&Pt(sn)}),Xv(se(yt,2),{get validationErrors(){return n(ve)},selectError:Y}),B(_t,Bt)};je(Fe,_t=>{n($)===void 0?_t(Ue):_t(St,!1)}),Te("paste",Ke,Hn),B(q,oe)},Lt=q=>{B(q,tS())};je(Ze,q=>{s?q(Lt,!1):q(Ye)}),er(ue,q=>S(m,q),()=>n(m));var an=se(ue,2),Zt=q=>{zb(q,{onClose:()=>S(J,!1)})};je(an,q=>{n(J)&&q(Zt)});var Yn=se(an,2),qr=q=>{Ib(q,ps(()=>n(pe),{onClose:()=>{var oe;(oe=n(pe))===null||oe===void 0||oe.onClose(),S(pe,void 0)}}))};return je(Yn,q=>{n(pe)&&q(qr)}),Le(()=>z=Mt(ue,1,"jse-tree-mode svelte-10mlrw4",null,z,{"no-main-menu":!g()})),Te("keydown",ue,function(q){var oe=Ka(q),_e=q.shiftKey;if(o("keydown",{combo:oe,key:q.key}),oe==="Ctrl+X"&&(q.preventDefault(),et(!0)),oe==="Ctrl+Shift+X"&&(q.preventDefault(),et(!1)),oe==="Ctrl+C"&&(q.preventDefault(),It(!0)),oe==="Ctrl+Shift+C"&&(q.preventDefault(),It(!1)),oe==="Ctrl+D"&&(q.preventDefault(),tr()),oe!=="Delete"&&oe!=="Backspace"||(q.preventDefault(),mr()),oe==="Insert"&&(q.preventDefault(),gr("structure")),oe==="Ctrl+A"&&(q.preventDefault(),S(V,Kt([]))),oe==="Ctrl+Q"&&rn(q),oe==="ArrowUp"||oe==="Shift+ArrowUp"){q.preventDefault();var Ke=n(V)?Cm(n($),n(G),n(V),_e)||n(V):yi(n($),n(G));S(V,Ke),ar(ut(Ke))}if(oe==="ArrowDown"||oe==="Shift+ArrowDown"){q.preventDefault();var Fe=n(V)?(function(en,Bn,$t){var sr=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if($t){var Nn=sr?ut($t):gs(en,$t),ir=cr(Xe(en,Nn))?xm(en,Bn,Nn,!0):Bn,bn=gf(en,Bn,Nn),yt=gf(en,ir,Nn);if(sr)return zr($t)?bn!==void 0?so(bn,bn):void 0:po($t)?yt!==void 0?so(yt,yt):void 0:yt!==void 0?so(Qs($t),yt):void 0;if(po($t))return yt!==void 0?Kt(yt):void 0;if(zr($t)||pn($t))return bn!==void 0?Kt(bn):void 0;if(Ur($t)){if(bn===void 0||bn.length===0)return;var sn=tn(bn),Pt=Xe(en,sn);return Array.isArray(Pt)?Kt(bn):Ja(bn)}return Un($t)?yt!==void 0?Kt(yt):bn!==void 0?Kt(bn):void 0:void 0}})(n($),n(G),n(V),_e)||n(V):yi(n($),n(G));S(V,Fe),ar(ut(Fe))}if(oe==="ArrowLeft"||oe==="Shift+ArrowLeft"){q.preventDefault();var Ue=n(V)?(function(en,Bn,$t){var sr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Nn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if($t){var{caret:ir,previous:bn}=Em(en,Bn,$t,Nn);if(sr)return Un($t)?void 0:so($t.path,$t.path);if(ir&&bn)return Xf(bn);var yt=tn(ut($t)),sn=Xe(en,yt);return pn($t)&&Array.isArray(sn)?so($t.path,$t.path):Un($t)&&!Array.isArray(sn)?Ja($t.focusPath):void 0}})(n($),n(G),n(V),_e,!p())||n(V):yi(n($),n(G));S(V,Ue),ar(ut(Ue))}if(oe==="ArrowRight"||oe==="Shift+ArrowRight"){q.preventDefault();var St=n(V)&&n($)!==void 0?(function(en,Bn,$t){var sr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Nn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if($t){var{caret:ir,next:bn}=Em(en,Bn,$t,Nn);return sr?Un($t)?void 0:so($t.path,$t.path):ir&&bn?Xf(bn):Un($t)?Kt($t.focusPath):void 0}})(n($),n(G),n(V),_e,!p())||n(V):yi(n($),n(G));S(V,St),ar(ut(St))}if(oe==="Enter"&&n(V)){if(Cd(n(V))){var _t=n(V).focusPath,Bt=Xe(n($),tn(_t));Array.isArray(Bt)&&(q.preventDefault(),S(V,Kt(_t)))}Ur(n(V))&&(q.preventDefault(),S(V,De(De({},n(V)),{},{edit:!0}))),pn(n(V))&&(q.preventDefault(),cr(Xe(n($),n(V).path))?de(n(V).path,!0):S(V,De(De({},n(V)),{},{edit:!0})))}if(oe.replace(/^Shift\+/,"").length===1&&n(V))return q.preventDefault(),void jn(q.key);if(oe==="Enter"&&(po(n(V))||zr(n(V))))return q.preventDefault(),void jn("");if(oe==="Ctrl+Enter"&&pn(n(V))){var _n=Xe(n($),n(V).path);Sd(_n)&&window.open(String(_n),"_blank")}oe==="Escape"&&n(V)&&(q.preventDefault(),S(V,void 0)),oe==="Ctrl+F"&&(q.preventDefault(),st(!1)),oe==="Ctrl+H"&&(q.preventDefault(),st(!0)),oe==="Ctrl+Z"&&(q.preventDefault(),dr()),oe==="Ctrl+Shift+Z"&&(q.preventDefault(),Nr())}),Te("mousedown",ue,function(q){o("handleMouseDown",q);var oe=q.target;rb(oe,"BUTTON")||oe.isContentEditable||(kt(),n(V)||n($)!==void 0||n(I)!==""&&n(I)!==void 0||(o("createDefaultSelection"),S(V,Kt([]))))}),Te("contextmenu",ue,rn),B(e,Sr),xt(t,"expand",me),xt(t,"collapse",Ne),xt(t,"validate",Je),xt(t,"getJson",Ge),xt(t,"patch",Jt),xt(t,"acceptAutoRepair",Ot),xt(t,"openTransformModal",rr),xt(t,"scrollTo",Gt),xt(t,"findElement",Rn),xt(t,"findSearchResult",br),xt(t,"focus",kt),ht($n)}function Zb(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,s)=>Zb(Reflect.get(r,o,s)),set:()=>!1,deleteProperty:()=>!1});var t}var xu=Fr("jsoneditor:History");function e1(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function s(){return o<r.length}function a(){return o>0}function i(){return{canUndo:s(),canRedo:a(),items:()=>r.slice().reverse(),add:c,undo:u,redo:m,clear:d}}function l(){e.onChange&&e.onChange(i())}function c(b){xu("add",b),r=[b].concat(r.slice(o)).slice(0,t),o=0,l()}function d(){xu("clear"),r=[],o=0,l()}function u(){if(s()){var b=r[o];return o+=1,xu("undo",b),l(),b}}function m(){if(a())return xu("redo",r[o-=1]),l(),r[o]}return{get:i}}Ct(`/* over all fonts, sizes, and colors */
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
}`);var Ol=kd(()=>u4),wi=kd(()=>d4),rS=he('<div class="query-error svelte-lta8xm"> </div>'),oS=he("<!> <!>",1),aS=he('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),sS=he('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),iS=he('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function lS(e,t){var r,o,s;vt(t,!1);var a=Fr("jsoneditor:TransformModal"),i=_(t,"id",25,()=>"transform-modal-"+Ri()),l=_(t,"json",9),c=_(t,"rootPath",25,()=>[]),d=_(t,"indentation",9),u=_(t,"truncateTextSize",9),m=_(t,"escapeControlCharacters",9),b=_(t,"escapeUnicodeCharacters",9),w=_(t,"parser",9),p=_(t,"parseMemoizeOne",9),y=_(t,"validationParser",9),v=_(t,"pathParser",9),h=_(t,"queryLanguages",9),f=_(t,"queryLanguageId",13),g=_(t,"onChangeQueryLanguage",9),x=_(t,"onRenderValue",9),j=_(t,"onRenderMenu",9),k=_(t,"onRenderContextMenu",9),C=_(t,"onClassName",9),T=_(t,"onTransform",9),R=_(t,"onClose",9),ne=K(void 0,!0),ee=K(e1({onChange:G=>S(ee,G)}).get(),!0),F=K(void 0,!0),te=K(void 0,!0),ye=K(!1,!0),W="".concat(i(),":").concat(mt(c())),we=(r=Ol()[W])!==null&&r!==void 0?r:{},Re=K(wi().showWizard!==!1,!0),Ee=K(wi().showOriginal!==!1,!0),ge=K((o=we.queryOptions)!==null&&o!==void 0?o:{},!0),Q=K(f()===we.queryLanguageId&&we.query?we.query:"",!0),L=K((s=we.isManual)!==null&&s!==void 0&&s,!0),le=K(void 0,!0),A=K(void 0,!0),O=K({text:""},!0);function M(G){var V;return(V=h().find(rt=>rt.id===G))!==null&&V!==void 0?V:h()[0]}function re(G){try{S(ge,G),S(Q,M(f()).createQuery(n(F),G)),S(le,void 0),S(L,!1),a("updateQueryByWizard",{queryOptions:n(ge),query:n(Q),isManual:n(L)})}catch(V){S(le,String(V))}}function Oe(G){S(Q,G.target.value),S(L,!0),a("handleChangeQuery",{query:n(Q),isManual:n(L)})}n(L)||re(n(ge)),oo(()=>{var G;(G=n(ne))===null||G===void 0||G.focus()});var ae=Nu(function(G,V){if(G===void 0)return S(O,{text:""}),void S(A,"Error: No JSON");if(V.trim()!=="")try{a("previewTransform",{query:V});var rt=M(f()).executeQuery(G,V,w());S(O,{json:rt}),S(A,void 0)}catch(ot){S(O,{text:""}),S(A,String(ot))}else S(O,{json:G})},300);function J(){if(n(F)===void 0)return S(O,{text:""}),void S(A,"Error: No JSON");try{a("handleTransform",{query:n(Q)});var G=M(f()).executeQuery(n(F),n(Q),w());T()([{op:"replace",path:mt(c()),value:G}]),R()()}catch(V){console.error(V),S(O,{text:""}),S(A,String(V))}}function pe(){S(Re,!n(Re)),wi(wi().showWizard=n(Re))}function $(){S(Ee,!n(Ee)),wi(wi().showOriginal=n(Ee))}function I(G){G.focus()}function D(G){a("handleChangeQueryLanguage",G),f(G),g()(G),re(n(ge))}function ce(){n(ye)?S(ye,!n(ye)):R()()}fe(()=>(E(l()),E(c())),()=>{S(F,Zb(Xe(l(),c())))}),fe(()=>n(F),()=>{S(te,n(F)?{json:n(F)}:{text:""})}),fe(()=>(n(F),n(Q)),()=>{ae(n(F),n(Q))}),fe(()=>(Ol(),n(ge),n(Q),E(f()),n(L)),()=>{Ol(Ol()[W]={queryOptions:n(ge),query:n(Q),queryLanguageId:f(),isManual:n(L)}),a("store state in memory",W,Ol()[W])}),xn(),Rt(!0),Ql(e,{get onClose(){return R()},className:"jse-transform-modal",get fullscreen(){return n(ye)},children:(G,V)=>{var rt=iS();Kf(H(rt),{children:(ot,Ce)=>{var lt=sS(),qe=tt(lt);(function(et,Qt){vt(Qt,!1);var It,zn=_(Qt,"queryLanguages",9),Hn=_(Qt,"queryLanguageId",9),Vn=_(Qt,"fullscreen",13),ur=_(Qt,"onChangeQueryLanguage",9),Gn=_(Qt,"onClose",9),or=K(void 0,!0),{openAbsolutePopup:mr,closeAbsolutePopup:tr}=_s("absolute-popup");function Cr(){var gr={queryLanguages:zn(),queryLanguageId:Hn(),onChangeQueryLanguage:xr=>{tr(It),ur()(xr)}};It=mr(s3,gr,{offsetTop:-2,offsetLeft:0,anchor:n(or),closeOnOuterClick:!0})}Rt(!0),sd(et,{title:"Transform",fullScreenButton:!0,get onClose(){return Gn()},get fullscreen(){return Vn()},set fullscreen(gr){Vn(gr)},$$slots:{actions:(gr,xr)=>{var nr,Pe=c3();nn(H(Pe),{get data(){return Nw}}),er(Pe,Dt=>S(or,Dt),()=>n(or)),Le(()=>nr=Mt(Pe,1,"jse-config svelte-5gkegr",null,nr,{hide:zn().length<=1})),Te("click",Pe,Cr),B(gr,Pe)}},$$legacy:!0}),ht()})(qe,{get queryLanguages(){return h()},get queryLanguageId(){return f()},onChangeQueryLanguage:D,get onClose(){return R()},get fullscreen(){return n(ye)},set fullscreen(et){S(ye,et)},$$legacy:!0});var He=H(se(qe,2)),it=H(He),Ve=se(H(it),2);L0(H(Ve),()=>(E(f()),Z(()=>M(f()).description)));var Et=se(Ve,4),P=se(Et,2),N=H(P),U=H(N),Y=H(U),me=nt(()=>n(Re)?Ba:zl);nn(Y,{get data(){return n(me)}});var Ne=se(P,2),ze=et=>{var Qt=Ut(),It=tt(Qt),zn=Vn=>{var ur=oS(),Gn=tt(ur);r3(Gn,{get queryOptions(){return n(ge)},get json(){return n(F)},onChange:re});var or=se(Gn,2),mr=tr=>{var Cr=rS(),gr=H(Cr);Le(()=>pt(gr,n(le))),B(tr,Cr)};je(or,tr=>{n(le)&&tr(mr)}),B(Vn,ur)},Hn=Vn=>{B(Vn,Br("(Only available for arrays, not for objects)"))};je(It,Vn=>{n(F),Z(()=>Array.isArray(n(F)))?Vn(zn):Vn(Hn,!1)}),B(et,Qt)};je(Ne,et=>{n(Re)&&et(ze)});var ve=se(Ne,4);er(ve,et=>S(ne,et),()=>n(ne));var be,ft,at=se(it,2),Je=H(at),Ge=H(Je),qt=H(Ge),kn=H(qt),En=H(kn),zt=nt(()=>n(Ee)?Ba:zl);nn(En,{get data(){return n(zt)}});var dn=se(Ge,2),Vt=et=>{fv(et,{get externalContent(){return n(te)},externalSelection:void 0,get history(){return n(ee)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return b()},get parser(){return w()},get parseMemoizeOne(){return p()},get onRenderValue(){return x()},get onRenderMenu(){return j()},get onRenderContextMenu(){return k()},onError:Z(()=>console.error),get onChange(){return Mr},get onChangeMode(){return Mr},get onSelect(){return Mr},get onUndo(){return Mr},get onRedo(){return Mr},get onFocus(){return Mr},get onBlur(){return Mr},get onSortModal(){return Mr},get onTransformModal(){return Mr},get onJSONEditorModal(){return Mr},get onClassName(){return C()},validator:void 0,get validationParser(){return y()},get pathParser(){return v()}})};je(dn,et=>{n(Ee)&&et(Vt)});var Jt=se(Je,2),cn=se(H(Jt),2),gt=et=>{fv(et,{get externalContent(){return n(O)},externalSelection:void 0,get history(){return n(ee)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return b()},get parser(){return w()},get parseMemoizeOne(){return p()},get onRenderValue(){return x()},get onRenderMenu(){return j()},get onRenderContextMenu(){return k()},onError:Z(()=>console.error),get onChange(){return Mr},get onChangeMode(){return Mr},get onSelect(){return Mr},get onUndo(){return Mr},get onRedo(){return Mr},get onFocus(){return Mr},get onBlur(){return Mr},get onSortModal(){return Mr},get onTransformModal(){return Mr},get onJSONEditorModal(){return Mr},get onClassName(){return C()},validator:void 0,get validationParser(){return y()},get pathParser(){return v()}})},fn=et=>{var Qt=aS(),It=H(Qt);Le(()=>pt(It,n(A))),B(et,Qt)};je(cn,et=>{n(A)?et(fn,!1):et(gt)});var Ot=H(se(He,2));Qr(()=>Te("click",Ot,J)),lo(Ot,et=>I?.(et)),Le(et=>{ni(Et,et),ni(ve,n(Q)),be=Mt(at,1,"jse-data-contents svelte-lta8xm",null,be,{"jse-hide-original-data":!n(Ee)}),ft=Mt(Je,1,"jse-original-data svelte-lta8xm",null,ft,{"jse-hide":!n(Ee)}),Ot.disabled=!!n(A)},[()=>(E(un),E(c()),E(mo),Z(()=>un(c())?"(document root)":mo(c())))]),Te("click",U,pe),Te("input",ve,Oe),Te("click",kn,$),B(ot,lt)},$$slots:{default:!0}}),lo(rt,(ot,Ce)=>id?.(ot,Ce),()=>ce),B(G,rt)},$$slots:{default:!0}}),ht()}function Ao(){}var cS=0;class Zr{constructor(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=cS++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=t.combine||null}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof t!="function"&&(t=Yl.match(t)),r=>{var o=t(r);return o===void 0?null:[this,o]}}}Zr.closedBy=new Zr({deserialize:e=>e.split(" ")}),Zr.openedBy=new Zr({deserialize:e=>e.split(" ")}),Zr.group=new Zr({deserialize:e=>e.split(" ")}),Zr.isolate=new Zr({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),Zr.contextHash=new Zr({perNode:!0}),Zr.lookAhead=new Zr({perNode:!0}),Zr.mounted=new Zr({perNode:!0});var Xm,uS=Object.create(null);class Yl{constructor(t,r,o){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=t,this.props=r,this.id=o,this.flags=s}static define(t){var r=t.props&&t.props.length?Object.create(null):uS,o=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),s=new Yl(t.name||"",r,t.id,o);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(s)),a){if(a[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");r[a[0].id]=a[1]}}return s}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if(typeof t=="string"){if(this.name==t)return!0;var r=this.prop(Zr.group);return!!r&&r.indexOf(t)>-1}return this.id==t}static match(t){var r=Object.create(null);for(var o in t)for(var s of o.split(" "))r[s]=t[o];return a=>{for(var i=a.prop(Zr.group),l=-1;l<(i?i.length:0);l++){var c=r[l<0?a.name:i[l]];if(c)return c}}}}Yl.none=new Yl("",Object.create(null),0,8),(function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays"})(Xm||(Xm={})),new Zr({perNode:!0});Ct(`/* over all fonts, sizes, and colors */
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
}`);var dS=he('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),fS=he('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),vS=he('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),hS=he('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),eh=R1.define([{tag:_o.propertyName,color:"var(--internal-key-color)"},{tag:_o.number,color:"var(--internal-value-color-number)"},{tag:_o.bool,color:"var(--internal-value-color-boolean)"},{tag:_o.string,color:"var(--internal-value-color-string)"},{tag:_o.keyword,color:"var(--internal-value-color-null)"}]),pS=sg(eh),mS=eh.style;eh.style=e=>mS(e||[]);var gS=[rg.fromClass(class{constructor(e){this.view=e,this.indentUnit=Tu(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=Tu(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new og;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var s of o){var{numColumns:a,containsTab:i}=this.numColumns(s.text,t.tabSize),l="calc(".concat(a+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(a+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(a+this.indentUnit,"ch");e.add(s.from,s.from,ag.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var{from:o,to:s}of this.view.visibleRanges)for(var a=o;a<=s;){var i=e.doc.lineAt(a);r!==i&&(t.add(i),r=i),a=i.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var s=0;s<e.length;s++)switch(e[s]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];Ct(`/* over all fonts, sizes, and colors */
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
}`);var bS=he('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),yS=he('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),jS=he("<!> <!> <!> <!>",1),wS=he("<div></div> <!> <!>",1),xS=he('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),kS=he("<div><!> <!> <!></div>");function SS(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=_(t,"readOnly",9),a=_(t,"mainMenuBar",9),i=_(t,"statusBar",9),l=_(t,"askToFormat",9),c=_(t,"externalContent",9),d=_(t,"externalSelection",9),u=_(t,"history",9),m=_(t,"indentation",9),b=_(t,"tabSize",9),w=_(t,"escapeUnicodeCharacters",9),p=_(t,"parser",9),y=_(t,"validator",9),v=_(t,"validationParser",9),h=_(t,"onChange",9),f=_(t,"onChangeMode",9),g=_(t,"onSelect",9),x=_(t,"onUndo",9),j=_(t,"onRedo",9),k=_(t,"onError",9),C=_(t,"onFocus",9),T=_(t,"onBlur",9),R=_(t,"onRenderMenu",9),ne=_(t,"onSortModal",9),ee=_(t,"onTransformModal",9),F=Fr("jsoneditor:TextMode"),te={key:"Mod-i",run:ze,shift:ve,preventDefault:!0},ye=typeof window>"u";F("isSSR:",ye);var W,we=K(void 0,!0),Re=K(void 0,!0),Ee=K(void 0,!0),ge=K(!1,!0),Q=K(l(),!0),L=K([],!0),le=K(!1,!0),A=K(0,!0),O=K(0,!0),M=null,re=new bl,Oe=new bl,ae=new bl,J=new bl,pe=new bl,$=c(),I=K(Hf($,m(),p()),!0),D=ry.define(),ce=null;function G(){if(!ce||ce.length===0)return!1;var ie=ce[0].startState,ke=ce[ce.length-1].state,Ie=ce.map(de=>de.changes).reduce((de,$e)=>de.compose($e)),X={type:"text",undo:{changes:Ie.invert(ie.doc).toJSON(),selection:xr(ie.selection)},redo:{changes:Ie.toJSON(),selection:xr(ke.selection)}};return F("add history item",X),u().add(X),ce=null,!0}var V=K(w(),!0);oo(jt(function*(){if(!ye)try{W=(function(ie){var{target:ke,initialText:Ie,readOnly:X,indentation:de}=ie;F("Create CodeMirror editor",{readOnly:X,indentation:de});var $e=(function(st,ct){return yf(st)?st.ranges.every(bt=>bt.anchor<ct.length&&bt.head<ct.length):!1})(d(),Ie)?zn(d()):void 0,We=ui.create({doc:Ie,selection:$e,extensions:[sh.of([Q1,te]),re.of(gt()),N1(),T1(),A1(),q1(),z1(),qe(),I1(),D1(),ui.allowMultipleSelections.of(!0),L1(),sg(G1,{fallback:!0}),U1(),F1(),V1(),B1(),W1(),H1(),K1(),sh.of([...Y1,...X1,...Z1,{key:"Mod-z",run:qt,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:kn,preventDefault:!0},{key:"Ctrl-Shift-z",run:kn,preventDefault:!0},...ey,...ty,...ny]),pS,b2({hideFirstIndent:!0}),Ds.domEventHandlers({dblclick:cn}),Ds.updateListener.of(st=>{S(Ee,st.state),st.docChanged&&(st.transactions.some(ct=>!!ct.annotation(D))||(ce=[...ce??[],st]),mr()),st.selectionSet&&gr()}),f2(),J1({top:!0}),Ds.lineWrapping,Oe.of(ui.readOnly.of(X)),J.of(ui.tabSize.of(b())),ae.of(or(de)),pe.of(Ds.theme({},{dark:fn()}))]});return W=new Ds({state:We,parent:ke}),$e&&W.dispatch(W.state.update({selection:$e.main,scrollIntoView:!0})),W})({target:n(we),initialText:nr(n(I),n(ge))?"":n(r).escapeValue(n(I)),readOnly:s(),indentation:m()})}catch(ie){console.error(ie)}})),Fo(()=>{tr(),W&&(F("Destroy CodeMirror editor"),W.destroy()),Et()});var rt=Wi(),ot=Wi();function Ce(){W&&(F("focus"),W.focus())}function lt(ie,ke){if(W)try{(function(){var Ie=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],X=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],de=W.state,$e=de.doc.length,We=ih(de,$e,1/0);if(We){var st=[];if(Ie.length===0)st=it(We,de,void 0,X);else{var{from:ct}=uf(n(r).escapeValue(n(I)),Ie);ct!==void 0&&ct!==0&&(st=it(We,de,ct,X))}st.length>0&&(function(bt){Ve.apply(this,arguments)})(st)}})(ie,ke)}catch(Ie){k()(Ie)}}function qe(){return oy.of((ie,ke,Ie)=>{var X=ih(ie,ie.doc.length,1/0);if(!X||X.length<Ie)return null;for(var de=null,$e=X.resolveStack(Ie,1);$e;$e=$e.next){var We=$e.node;if(!(We.to<=Ie||We.from>Ie)){if(de&&We.from<ke)break;var st=We.type.prop(ng);if(st&&(We.to<X.length-50||X.length==ie.doc.length||!He(We))){var ct=st(We,ie);ct&&ct.from<=Ie&&ct.from>=ke&&ct.to>Ie&&(de=ct)}}}return de})}function He(ie){var ke=ie.lastChild;return ke&&ke.to==ie.to&&ke.type.isError}function it(ie,ke,Ie){var X=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],de=[],$e=new Set;return ie.iterate({enter(We){if(Ie===void 0||We.from>=Ie){var st=dy(ke,We.from,We.to);if(st){var ct="".concat(st.from,"-").concat(st.to);if(!$e.has(ct))if(X)de.push({from:st.from,to:st.to}),$e.add(ct);else{var bt=de.some(Ln=>Ln.from<=st.from&&Ln.to>=st.to);bt||(de.push({from:st.from,to:st.to}),$e.add(ct))}}}}}),de}function Ve(){return Ve=jt(function*(ie){if(ie.length!==0){var ke=ie.length>5e3;ke&&(S(le,!0),S(A,0),S(O,ie.length),M=new AbortController);var Ie=X=>new Promise(de=>{var $e;ke&&($e=M)!==null&&$e!==void 0&&$e.signal.aborted?de():requestAnimationFrame(()=>{var We=Math.min(X+100,ie.length),st=ie.slice(X,We);W.dispatch({effects:st.map(ct=>fy.of({from:ct.from,to:ct.to}))}),ke&&S(A,We),We<ie.length?Ie(We).then(de):de()})});yield Ie(0),ke&&(S(le,!1),S(A,0),S(O,0),M=null)}}),Ve.apply(this,arguments)}function Et(){M&&M.abort()}function P(ie){var ke=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yf;if(W)try{if(ie&&ie.length>0){var{from:Ie}=uf(n(r).escapeValue(n(I)),ie);Ie!==void 0&&(W.dispatch({selection:{anchor:Ie,head:Ie}}),iy(W))}else ly(W);ke?.(ie)}catch(X){k()(X)}}function N(){P([],()=>!0)}function U(){lt([],!0)}var Y=!1;function me(ie){return Ne(ie,!1)}function Ne(ie,ke){F("handlePatch",ie,ke);var Ie=p().parse(n(I)),X=Jo(Ie,ie),de=mg(Ie,ie);return It({text:p().stringify(X,null,m())},ke,!1),{json:X,previousJson:Ie,undo:de,redo:ie}}function ze(){if(F("format"),s())return!1;try{var ie=p().parse(n(I));return It({text:p().stringify(ie,null,m())},!0,!1),S(Q,l()),!0}catch(ke){k()(ke)}return!1}function ve(){if(F("compact"),s())return!1;try{var ie=p().parse(n(I));return It({text:p().stringify(ie)},!0,!1),S(Q,!1),!0}catch(ke){k()(ke)}return!1}function be(){if(F("repair"),!s())try{It({text:va(n(I))},!0,!1),S(Pe,mf),S(Dt,void 0)}catch(ie){k()(ie)}}function ft(){var ie;if(!s())try{var ke=p().parse(n(I));Y=!0,ne()({id:rt,json:ke,rootPath:[],onSort:(ie=jt(function*(Ie){var{operations:X}=Ie;F("onSort",X),Ne(X,!0)}),function(Ie){return ie.apply(this,arguments)}),onClose:()=>{Y=!1,Ce()}})}catch(Ie){k()(Ie)}}function at(ie){var{id:ke,rootPath:Ie,onTransform:X,onClose:de}=ie;try{var $e=p().parse(n(I));Y=!0,ee()({id:ke||ot,json:$e,rootPath:Ie||[],onTransform:We=>{X?X({operations:We,json:$e,transformedJson:Jo($e,We)}):(F("onTransform",We),Ne(We,!0))},onClose:()=>{Y=!1,Ce(),de&&de()}})}catch(We){k()(We)}}function Je(){s()||at({rootPath:[]})}function Ge(){W&&(n(we)&&n(we).querySelector(".cm-search")?cy(W):uy(W))}function qt(){if(s())return!1;tr();var ie=u().undo();return F("undo",ie),jm(ie)?(W.dispatch({annotations:D.of("undo"),changes:lh.fromJSON(ie.undo.changes),selection:qd.fromJSON(ie.undo.selection),scrollIntoView:!0}),!0):(x()(ie),!1)}function kn(){if(s())return!1;tr();var ie=u().redo();return F("redo",ie),jm(ie)?(W.dispatch({annotations:D.of("redo"),changes:lh.fromJSON(ie.redo.changes),selection:qd.fromJSON(ie.redo.selection),scrollIntoView:!0}),!0):(j()(ie),!1)}function En(){S(ge,!0),It(c(),!0,!0)}function zt(){f()(Rr.tree)}function dn(){ur()}function Vt(ie){F("select validation error",ie);var{from:ke,to:Ie}=Ot(ie);ke!==void 0&&Ie!==void 0&&(Jt(ke,Ie),Ce())}function Jt(ie,ke){F("setSelection",{anchor:ie,head:ke}),W&&W.dispatch(W.state.update({selection:{anchor:ie,head:ke},scrollIntoView:!0}))}function cn(ie,ke){if(ke.state.selection.ranges.length===1){var Ie=ke.state.selection.ranges[0],X=n(I).slice(Ie.from,Ie.to);if(X==="{"||X==="["){var de=jg.parse(n(I)),$e=Object.keys(de.pointers).find(st=>{var ct;return((ct=de.pointers[st].value)===null||ct===void 0?void 0:ct.pos)===Ie.from}),We=de.pointers[$e];$e&&We&&We.value&&We.valueEnd&&(F("pointer found, selecting inner contents of path:",$e,We),Jt(We.value.pos+1,We.valueEnd.pos-1))}}}function gt(){return ay(jn,{delay:300})}function fn(){return!!n(we)&&getComputedStyle(n(we)).getPropertyValue("--jse-theme").includes("dark")}function Ot(ie){var{path:ke,message:Ie,severity:X}=ie,{line:de,column:$e,from:We,to:st}=uf(n(r).escapeValue(n(I)),ke);return{path:ke,line:de,column:$e,from:We,to:st,message:Ie,severity:X,actions:[]}}function et(ie,ke){var{line:Ie,column:X,position:de,message:$e}=ie;return{path:[],line:Ie,column:X,from:de,to:de,severity:Go.error,message:$e,actions:ke&&!s()?[{name:"Auto repair",apply:()=>be()}]:void 0}}function Qt(ie){return{from:ie.from||0,to:ie.to||0,message:ie.message||"",actions:ie.actions,severity:ie.severity}}function It(ie,ke,Ie){var X=Hf(ie,m(),p()),de=!Ft(ie,$),$e=$;F("setCodeMirrorContent",{isChanged:de,emitChange:ke,forceUpdate:Ie}),W&&(de||Ie)&&($=ie,S(I,X),nr(n(I),n(ge))||W.dispatch({changes:{from:0,to:W.state.doc.length,insert:n(r).escapeValue(n(I))}}),G(),de&&ke&&Cr($,$e))}function zn(ie){return yf(ie)?qd.fromJSON(ie):void 0}function Hn(){return Vn.apply(this,arguments)}function Vn(){return Vn=jt(function*(){F("refresh"),yield(function(){return Gn.apply(this,arguments)})()}),Vn.apply(this,arguments)}function ur(){if(W){var ie=W?n(r).unescapeValue(W.state.doc.toString()):"",ke=ie!==n(I);if(F("onChangeCodeMirrorValue",{isChanged:ke}),ke){var Ie=$;S(I,ie),$={text:n(I)},G(),Cr($,Ie),Qn(),gr()}}}function Gn(){return(Gn=jt(function*(){if(Qn(),W){var ie=fn();return F("updateTheme",{dark:ie}),W.dispatch({effects:[pe.reconfigure(Ds.theme({},{dark:ie}))]}),new Promise(ke=>setTimeout(ke))}return Promise.resolve()})).apply(this,arguments)}function or(ie){var ke=sy.of(typeof ie=="number"?" ".repeat(ie):ie);return ie==="	"?[ke]:[ke,gS]}Yv({onMount:oo,onDestroy:Fo,getWindow:()=>sc(n(Re)),hasFocus:()=>Y&&document.hasFocus()||qv(n(Re)),onFocus:C(),onBlur:()=>{tr(),T()()}});var mr=Nu(ur,300);function tr(){mr.flush()}function Cr(ie,ke){h()&&h()(ie,ke,{contentErrors:In(),patchResult:void 0})}function gr(){g()(xr(n(Ee).selection))}function xr(ie){return De({type:An.text},ie.toJSON())}function nr(ie,ke){return!!ie&&ie.length>hf&&!ke}var Pe=K(mf,!0),Dt=K(void 0,!0);function jn(){if(nr(n(I),n(ge)))return[];var ie=In();if(ym(ie)){var{parseError:ke,isRepairable:Ie}=ie;return[Qt(et(ke,Ie))]}return Bk(ie)?ie.validationErrors.map(Ot).map(Qt):[]}function In(){F("validate:start"),tr();var ie=dr(n(r).escapeValue(n(I)),y(),p(),v());return ym(ie)?(S(Pe,ie.isRepairable?hm:"invalid"),S(Dt,ie.parseError),S(L,[])):(S(Pe,mf),S(Dt,void 0),S(L,ie?.validationErrors||[])),F("validate:end"),ie}var dr=ql(f3);function Nr(){n(Dt)&&(function(ie){F("select parse error",ie);var ke=et(ie,!1);Jt(ke.from!=null?ke.from:0,ke.to!=null?ke.to:0),Ce()})(n(Dt))}var Ht={icon:Ew,text:"Show me",title:"Move to the parse error location",onClick:Nr};fe(()=>E(w()),()=>{S(r,Tv({escapeControlCharacters:!1,escapeUnicodeCharacters:w()}))}),fe(()=>E(c()),()=>{It(c(),!1,!1)}),fe(()=>E(d()),()=>{(function(ie){if(yf(ie)){var ke=zn(ie);!W||!ke||n(Ee)&&n(Ee).selection.eq(ke)||(F("applyExternalSelection",ke),W.dispatch({selection:ke}))}})(d())}),fe(()=>E(y()),()=>{(function(ie){F("updateLinter",ie),W&&W.dispatch({effects:re.reconfigure(gt())})})(y())}),fe(()=>E(m()),()=>{(function(ie){W&&(F("updateIndentation",ie),W.dispatch({effects:ae.reconfigure(or(ie))}))})(m())}),fe(()=>E(b()),()=>{(function(ie){W&&(F("updateTabSize",ie),W.dispatch({effects:J.reconfigure(ui.tabSize.of(ie))}))})(b())}),fe(()=>E(s()),()=>{(function(ie){W&&(F("updateReadOnly",ie),W.dispatch({effects:[Oe.reconfigure(ui.readOnly.of(ie))]}))})(s())}),fe(()=>(n(V),E(w())),()=>{n(V)!==w()&&(S(V,w()),F("forceUpdateText",{escapeUnicodeCharacters:w()}),W&&W.dispatch({changes:{from:0,to:W.state.doc.length,insert:n(r).escapeValue(n(I))}}))}),fe(()=>(n(Pe),E(s()),bs),()=>{S(o,n(Pe)!==hm||s()?[Ht]:[{icon:bs,text:"Auto repair",title:"Automatically repair JSON",onClick:be},Ht])}),xn();var kr={focus:Ce,collapse:lt,expand:P,patch:me,handlePatch:Ne,openTransformModal:at,refresh:Hn,flush:tr,validate:In};Rt(!0);var Wr,rr=kS(),Vr=H(rr),Dn=ie=>{var ke=nt(()=>(n(I),Z(()=>n(I).length===0))),Ie=nt(()=>!n(ke)),X=nt(()=>!n(ke)),de=nt(()=>!n(ke)),$e=nt(()=>!n(ke)),We=nt(()=>!n(ke)),st=nt(()=>!n(ke));(function(ct,bt){vt(bt,!1);var Ln=K(void 0,!0),Yt=_(bt,"readOnly",9,!1),rn=_(bt,"onExpandAll",9),Tt=_(bt,"onCollapseAll",9),Xt=_(bt,"onFormat",9),Tr=_(bt,"onCompact",9),wt=_(bt,"onSort",9),gn=_(bt,"onTransform",9),on=_(bt,"onToggleSearch",9),vn=_(bt,"onUndo",9),Kn=_(bt,"onRedo",9),On=_(bt,"canExpandAll",9),kt=_(bt,"canCollapseAll",9),Er=_(bt,"canUndo",9),yr=_(bt,"canRedo",9),Ar=_(bt,"canFormat",9),Sn=_(bt,"canCompact",9),$n=_(bt,"canSort",9),Sr=_(bt,"canTransform",9),z=_(bt,"onRenderMenu",9),ue=K(void 0,!0),Me=K(void 0,!0),Be={type:"button",icon:fd,title:"Search (Ctrl+F)",className:"jse-search",onClick:on()},Se=K(void 0,!0);fe(()=>(E(rn()),E(On())),()=>{S(ue,{type:"button",icon:Lb,title:"Expand all",className:"jse-expand-all",onClick:rn(),disabled:!On()})}),fe(()=>(E(Tt()),E(kt())),()=>{S(Me,{type:"button",icon:Ub,title:"Collapse all",className:"jse-collapse-all",onClick:Tt(),disabled:!kt()})}),fe(()=>(E(Yt()),n(ue),n(Me),E(Xt()),E(Ar()),E(Tr()),E(Sn()),E(wt()),E($n()),E(gn()),E(Sr()),E(vn()),E(Er()),E(Kn()),E(yr())),()=>{S(Se,Yt()?[n(ue),n(Me),{type:"separator"},Be,{type:"space"}]:[n(ue),n(Me),{type:"separator"},{type:"button",icon:Qm,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Xt(),disabled:Yt()||!Ar()},{type:"button",icon:h6,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:Tr(),disabled:Yt()||!Sn()},{type:"separator"},{type:"button",icon:Iu,title:"Sort",className:"jse-sort",onClick:wt(),disabled:Yt()||!$n()},{type:"button",icon:qu,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:gn(),disabled:Yt()||!Sr()},Be,{type:"separator"},{type:"button",icon:wv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:vn(),disabled:!Er()},{type:"button",icon:jv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Kn(),disabled:!yr()},{type:"space"}])}),fe(()=>(E(z()),n(Se)),()=>{S(Ln,z()(n(Se))||n(Se))}),xn(),Rt(!0),Md(ct,{get items(){return n(Ln)}}),ht()})(ie,{get readOnly(){return s()},onExpandAll:N,onCollapseAll:U,onFormat:ze,onCompact:ve,onSort:ft,onTransform:Je,onToggleSearch:Ge,onUndo:qt,onRedo:kn,get canExpandAll(){return n(Ie)},get canCollapseAll(){return n(X)},get canFormat(){return n(de)},get canCompact(){return n($e)},get canSort(){return n(We)},get canTransform(){return n(st)},get canUndo(){return E(u()),Z(()=>u().canUndo)},get canRedo(){return E(u()),Z(()=>u().canRedo)},get onRenderMenu(){return R()}})};je(Vr,ie=>{a()&&ie(Dn)});var Gt=se(Vr,2),Nt=ie=>{var ke=bS(),Ie=se(H(ke),2),X=H(Ie),de=se(Ie,2);Le(()=>Lo(X,"width: ".concat(n(O)>0?n(A)/n(O)*100:0,"%"))),Te("click",de,Et),B(ie,ke)};je(Gt,ie=>{n(le)&&ie(Nt)});var Rn=se(Gt,2),br=ie=>{var ke,Ie=nt(()=>(n(I),n(ge),Z(()=>nr(n(I),n(ge))))),X=wS(),de=tt(X);er(de,bt=>S(we,bt),()=>n(we));var $e=se(de,2),We=bt=>{var Ln=yS(),Yt=tt(Ln),rn=nt(()=>(E(Mu),E(hf),n(I),Z(()=>"The JSON document is larger than ".concat(Mu(hf),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(Mu(n(I).length),"."))));Mo(Yt,{get icon(){return Ys},type:"error",get message(){return n(rn)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:En},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:zt},{text:"Cancel",title:"Cancel opening this large document.",onClick:dn}],onClose:Ce});var Tt=H(se(Yt,2));Le(Xt=>pt(Tt,Xt),[()=>(E(Ta),n(I),E(Ju),Z(()=>Ta(n(I)||"",Ju)))]),B(bt,Ln)};je($e,bt=>{n(Ie)&&bt(We)});var st=se($e,2),ct=bt=>{var Ln=jS(),Yt=tt(Ln),rn=gn=>{(function(on,vn){vt(vn,!1);var Kn=_(vn,"editorState",8),On=K(),kt=K(),Er=K(),yr=K(),Ar=K();fe(()=>E(Kn()),()=>{var Se;S(On,(Se=Kn())===null||Se===void 0||(Se=Se.selection)===null||Se===void 0||(Se=Se.main)===null||Se===void 0?void 0:Se.head)}),fe(()=>(n(On),E(Kn())),()=>{var Se;S(kt,n(On)!==void 0?(Se=Kn())===null||Se===void 0||(Se=Se.doc)===null||Se===void 0?void 0:Se.lineAt(n(On)):void 0)}),fe(()=>n(kt),()=>{S(Er,n(kt)!==void 0?n(kt).number:void 0)}),fe(()=>(n(kt),n(On)),()=>{S(yr,n(kt)!==void 0&&n(On)!==void 0?n(On)-n(kt).from+1:void 0)}),fe(()=>E(Kn()),()=>{var Se;S(Ar,(Se=Kn())===null||Se===void 0||(Se=Se.selection)===null||Se===void 0||(Se=Se.ranges)===null||Se===void 0?void 0:Se.reduce((Qe,Ze)=>Qe+Ze.to-Ze.from,0))}),xn(),Rt();var Sn=hS(),$n=H(Sn),Sr=Se=>{var Qe=dS(),Ze=H(Qe);Le(()=>{var Ye;return pt(Ze,"Line: ".concat((Ye=n(Er))!==null&&Ye!==void 0?Ye:""))}),B(Se,Qe)};je($n,Se=>{n(Er)!==void 0&&Se(Sr)});var z=se($n,2),ue=Se=>{var Qe=fS(),Ze=H(Qe);Le(()=>{var Ye;return pt(Ze,"Column: ".concat((Ye=n(yr))!==null&&Ye!==void 0?Ye:""))}),B(Se,Qe)};je(z,Se=>{n(yr)!==void 0&&Se(ue)});var Me=se(z,2),Be=Se=>{var Qe=vS(),Ze=H(Qe);Le(()=>{var Ye;return pt(Ze,"Selection: ".concat((Ye=n(Ar))!==null&&Ye!==void 0?Ye:""," characters"))}),B(Se,Qe)};je(Me,Se=>{n(Ar)!==void 0&&n(Ar)>0&&Se(Be)}),B(on,Sn),ht()})(gn,{get editorState(){return n(Ee)}})};je(Yt,gn=>{i()&&gn(rn)});var Tt=se(Yt,2),Xt=gn=>{Mo(gn,{type:"error",get icon(){return Ys},get message(){return n(Dt),Z(()=>n(Dt).message)},get actions(){return n(o)},onClick:Nr,onClose:Ce})};je(Tt,gn=>{n(Dt)&&gn(Xt)});var Tr=se(Tt,2),wt=gn=>{var on=nt(()=>[{icon:Qm,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:ze},{icon:vd,text:"No thanks",title:"Close this message",onClick:()=>S(Q,!1)}]);Mo(gn,{type:"success",message:"Do you want to format the JSON?",get actions(){return n(on)},onClose:Ce})};je(Tr,gn=>{n(Dt),n(Q),E(fm),n(I),Z(()=>!n(Dt)&&n(Q)&&fm(n(I)))&&gn(wt)}),Xv(se(Tr,2),{get validationErrors(){return n(L)},selectError:Vt}),B(bt,Ln)};je(st,bt=>{n(Ie)||bt(ct)}),Le(()=>ke=Mt(de,1,"jse-contents svelte-k2b9e6",null,ke,{"jse-hidden":n(Ie)})),B(ie,X)},ar=ie=>{B(ie,xS())};return je(Rn,ie=>{ye?ie(ar,!1):ie(br)}),er(rr,ie=>S(Re,ie),()=>n(Re)),Le(()=>Wr=Mt(rr,1,"jse-text-mode svelte-k2b9e6",null,Wr,{"no-main-menu":!a()})),B(e,rr),xt(t,"focus",Ce),xt(t,"collapse",lt),xt(t,"expand",P),xt(t,"patch",me),xt(t,"handlePatch",Ne),xt(t,"openTransformModal",at),xt(t,"refresh",Hn),xt(t,"flush",tr),xt(t,"validate",In),ht(kr)}Ct(`/* over all fonts, sizes, and colors */
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
}`);var _S=he('<button type="button"> </button>');Ct(`/* over all fonts, sizes, and colors */
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
}`);var CS=he('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),ES=he('<button type="button"><span class="jse-column-name"> </span> <!></button>');Ct(`/* over all fonts, sizes, and colors */
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
}`);var OS=he(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),$S=he('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),PS=he('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),MS=he('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function RS(e,t){vt(t,!0);var r=ho(()=>t.json?(function(y){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,h=[];return(function f(g,x){wr(g)&&x.length<v&&Object.keys(g).forEach(j=>{f(g[j],x.concat(j))}),hr(g)&&h.push(x)})(y,[]),h})(t.json).slice(0,99).filter(y=>y.length>0):[]),o=ho(()=>!un(n(r))),s=ho(()=>t.json===void 0&&(t.text===""||t.text===void 0)),a=ho(()=>n(o)?"Object with nested arrays":n(s)?"An empty document":wr(t.json)?"An object":hr(t.json)?"An empty array":"A ".concat(Nv(t.json,t.parser))),i=MS();i.__click=()=>t.onClick();var l=se(H(i),2),c=H(l),d=H(c),u=se(c,2),m=H(u),b=y=>{B(y,Br(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},w=y=>{var v=Ut(),h=tt(v),f=x=>{B(x,OS())},g=x=>{var j=Br();Le(()=>{var k;return pt(j,"".concat((k=n(a))!==null&&k!==void 0?k:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),B(x,j)};je(h,x=>{n(s)&&!t.readOnly?x(f):x(g,!1)},!0),B(y,v)};je(m,y=>{n(o)?y(b):y(w,!1)});var p=se(u,2);pr(p,17,()=>n(r),_r,(y,v)=>{var h=ho(()=>(function(ne){return Xe(t.json,ne).length})(n(v))),f=PS(),g=H(f),x=H(g),j=H(se(x)),k=se(g,2);k.__click=()=>t.openJSONEditorModal(n(v));var C=H(k),T=se(k,2),R=ne=>{var ee=$S();ee.__click=()=>t.extractPath(n(v)),B(ne,ee)};je(T,ne=>{t.readOnly||ne(R)}),Le(ne=>{var ee;pt(x,'"'.concat(ne??"",'" ')),pt(j,"(".concat((ee=n(h))!==null&&ee!==void 0?ee:""," ").concat(n(h)!==1?"items":"item",")")),pt(C,t.readOnly?"View":"Edit")},[()=>mo(n(v))]),B(y,f)}),se(p,2).__click=()=>t.onChangeMode(Rr.tree),Le(()=>pt(d,n(a))),B(e,i),ht()}rc(["click"]);Ct(`/* over all fonts, sizes, and colors */
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
}`);var NS=he('<button type="button"><!></button>');Ct(`/* over all fonts, sizes, and colors */
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
}`);var TS=he('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),AS=he('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),qS=he('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),zS=he('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),IS=he('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),DS=he('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),LS=he('<td class="jse-table-cell svelte-1p86y3c"></td>'),US=he('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),FS=he('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),VS=he("<!> <!>",1),BS=he('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),WS=he('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),HS=he('<div role="table"><!> <!></div> <!> <!>',1);function KS(e,t){vt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=Fr("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=_s("absolute-popup"),c=Ab(),d=Wi(),u=Wi(),m=typeof window>"u";a("isSSR:",m);var b=_(t,"readOnly",9),w=_(t,"externalContent",9),p=_(t,"externalSelection",9),y=_(t,"history",9),v=_(t,"truncateTextSize",9),h=_(t,"mainMenuBar",9),f=_(t,"escapeControlCharacters",9),g=_(t,"escapeUnicodeCharacters",9),x=_(t,"flattenColumns",9),j=_(t,"parser",9),k=_(t,"parseMemoizeOne",9),C=_(t,"validator",9),T=_(t,"validationParser",9),R=_(t,"indentation",9),ne=_(t,"onChange",9),ee=_(t,"onChangeMode",9),F=_(t,"onSelect",9),te=_(t,"onUndo",9),ye=_(t,"onRedo",9),W=_(t,"onRenderValue",9),we=_(t,"onRenderMenu",9),Re=_(t,"onRenderContextMenu",9),Ee=_(t,"onFocus",9),ge=_(t,"onBlur",9),Q=_(t,"onSortModal",9),L=_(t,"onTransformModal",9),le=_(t,"onJSONEditorModal",9),A=K(void 0,!0),O=K(void 0,!0),M=K(void 0,!0),re=K(void 0,!0),Oe=K(void 0,!0);Yv({onMount:oo,onDestroy:Fo,getWindow:()=>sc(n(O)),hasFocus:()=>Ve&&document.hasFocus()||qv(n(O)),onFocus:()=>{Et=!0,Ee()&&Ee()()},onBlur:()=>{Et=!1,ge()&&ge()()}});var ae,J=K(void 0,!0),pe=K(void 0,!0),$=K(void 0,!0),I=K(void 0,!0),D=K(void 0,!0),ce=K(void 0,!0),G=K(!1,!0),V=K(!1,!0);function rt(z){S(ce,(ae=z)?xb(n(J),ae.items):void 0)}function ot(z){return Ce.apply(this,arguments)}function Ce(){return(Ce=jt(function*(z){S(be,void 0),yield Hn(z)})).apply(this,arguments)}function lt(){S(G,!1),S(V,!1),et()}var qe=K(1e4,!0),He=K([],!0),it=K(void 0,!0),Ve=!1,Et=!1,P=K(!1,!0),N=K({},!0),U=K(600,!0),Y=K(0,!0),me=18;function Ne(z){S(be,z)}function ze(z){n(be)&&z!==void 0&&(Io(z,Qs(n(be)))&&Io(z,ut(n(be)))||(a("clearing selection: path does not exist anymore",n(be)),S(be,void 0)))}var ve=K(n(J)!==void 0?Gf({json:n(J)}):void 0,!0),be=K(Wl(p())?p():void 0,!0),ft=K(void 0,!0),at=K(!1,!0);function Je(z){if(!b()){a("onSortByHeader",z);var ue=z.sortDirection===qo.desc?-1:1;Jt(Fb(n(J),[],z.path,ue),(Me,Be)=>({state:Be,sortedColumn:z}))}}oo(()=>{n(be)&&ur(ut(n(be)))});var Ge=K(void 0,!0);function qt(z){if(z.json!==void 0||z.text!==void 0){var ue=n(J)!==void 0&&z.json!==void 0;y().add({type:"tree",undo:{patch:ue?[{op:"replace",path:"",value:z.json}]:void 0,json:z.json,text:z.text,documentState:z.documentState,textIsRepaired:z.textIsRepaired,selection:ua(z.selection),sortedColumn:z.sortedColumn},redo:{patch:ue?[{op:"replace",path:"",value:n(J)}]:void 0,json:n(J),text:n(pe),documentState:n(ve),textIsRepaired:n(at),selection:ua(n(be)),sortedColumn:n(ft)}})}}var kn=K([],!0),En=ql(qb);function zt(z,ue,Me,Be){Ai(()=>{var Se;try{Se=En(z,ue,Me,Be)}catch(Qe){Se=[{path:[],message:"Failed to validate: "+Qe.message,severity:Go.warning}]}Ft(Se,n(kn))||(a("validationErrors changed:",Se),S(kn,Se))},Se=>a("validationErrors updated in ".concat(Se," ms")))}function dn(){return a("validate"),n($)?{parseError:n($),isRepairable:!1}:(zt(n(J),C(),j(),T()),un(n(kn))?void 0:{validationErrors:n(kn)})}function Vt(z,ue){if(a("patch",z,ue),n(J)===void 0)throw new Error("Cannot apply patch: no JSON");var Me=n(J),Be={json:void 0,text:n(pe),documentState:n(ve),selection:ua(n(be)),sortedColumn:n(ft),textIsRepaired:n(at)},Se=wb(n(J),z),Qe=cb(n(J),n(ve),z),Ze=z6(n(ft),z,n(He)),Ye=typeof ue=="function"?ue(Qe.json,Qe.documentState,n(be)):void 0;return S(J,Ye?.json!==void 0?Ye.json:Qe.json),S(ve,Ye?.state!==void 0?Ye.state:Qe.documentState),S(be,Ye?.selection!==void 0?Ye.selection:n(be)),S(ft,Ye?.sortedColumn!==void 0?Ye.sortedColumn:Ze),S(pe,void 0),S(at,!1),S(I,void 0),S(D,void 0),S($,void 0),y().add({type:"tree",undo:De({patch:Se},Be),redo:{patch:z,json:void 0,text:void 0,documentState:n(ve),selection:ua(n(be)),sortedColumn:n(ft),textIsRepaired:n(at)}}),{json:n(J),previousJson:Me,undo:Se,redo:z}}function Jt(z,ue){a("handlePatch",z,ue);var Me={json:n(J),text:n(pe)},Be=Vt(z,ue);return cn(Me,Be),Be}function cn(z,ue){if((z.json!==void 0||z?.text!==void 0)&&ne()){if(n(pe)!==void 0){var Me={text:n(pe),json:void 0};ne()(Me,z,{contentErrors:dn(),patchResult:ue})}else if(n(J)!==void 0){var Be={text:void 0,json:n(J)};ne()(Be,z,{contentErrors:dn(),patchResult:ue})}}}function gt(z){a("pasted json as text",z),S(I,z)}function fn(z){a("pasted multiline text",{pastedText:z}),S(D,z)}function Ot(z){var ue=parseInt(z[0],10),Me=[String(ue+1),...z.slice(1)];return Io(n(J),Me)?Kt(Me):Kt(z)}function et(){a("focus"),n(re)&&(n(re).focus(),n(re).select())}function Qt(z){S(Y,z.target.scrollTop)}function It(){n(be)||S(be,(function(){if(hr(n(J))&&!un(n(J))&&!un(n(He)))return Kt(["0",...n(He)[0]])})())}function zn(){if(n(at)&&n(J)!==void 0){var z={json:n(J),text:n(pe)},ue={json:n(J),documentState:n(ve),selection:n(be),sortedColumn:n(ft),text:n(pe),textIsRepaired:n(at)};S(pe,void 0),S(at,!1),ze(n(J)),qt(ue),cn(z,void 0)}return{json:n(J),text:n(pe)}}function Hn(z){var{scrollToWhenVisible:ue=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Me=n(G)?Ml:0,Be=Ym(z,n(He),N,me),Se=Be-n(Y)+Me+me,Qe=Gn(z);if(a("scrollTo",{path:z,top:Be,scrollTop:n(Y),elem:Qe}),!n(M))return Promise.resolve();var Ze=n(M).getBoundingClientRect();if(Qe&&!ue){var Ye=Qe.getBoundingClientRect();if(Ye.bottom>Ze.top&&Ye.top<Ze.bottom)return Promise.resolve()}var Lt=-Math.max(Me+2*me,Ze.height/4);return new Promise(Qe?an=>{c(Qe,{container:n(M),offset:Lt,duration:300,callback:()=>{Vn(z),an()}})}:an=>{c(Se,{container:n(M),offset:Lt,duration:300,callback:()=>{Qn(),Vn(z),an()}})})}function Vn(z){var ue=Gn(z);if(ue&&n(M)){var Me=n(M).getBoundingClientRect(),Be=ue.getBoundingClientRect();if(Be.right>Me.right){var Se=Be.right-Me.right;Oo(M,n(M).scrollLeft+=Se)}if(Be.left<Me.left){var Qe=Me.left-Be.left;Oo(M,n(M).scrollLeft-=Qe)}}}function ur(z){(function(ue){if(n(M)){var{rowIndex:Me}=To(ue,n(He)),Be=Ym(ue,n(He),N,me),Se=Be+(N[Me]||me),Qe=me,Ze=n(M).getBoundingClientRect(),Ye=n(Y),Lt=n(Y)+Ze.height-Qe;if(Se>Lt){var an=Se-Lt;Oo(M,n(M).scrollTop+=an)}if(Be<Ye){var Zt=Ye-Be;Oo(M,n(M).scrollTop-=Zt)}}})(z),Vn(z)}function Gn(z){var ue,Me,Be=n(He).find(Qe=>ga(z.slice(1),Qe)),Se=Be?z.slice(0,1).concat(Be):z;return(ue=(Me=n(M))===null||Me===void 0?void 0:Me.querySelector('td[data-path="'.concat($u(Se),'"]')))!==null&&ue!==void 0?ue:void 0}function or(z){var ue,{anchor:Me,left:Be,top:Se,width:Qe,height:Ze,offsetTop:Ye,offsetLeft:Lt,showTip:an}=z,Zt=(function(oe){var{json:_e,documentState:Ke,selection:Fe,readOnly:Ue,onEditValue:St,onEditRow:_t,onToggleEnforceString:Bt,onCut:_n,onCopy:en,onPaste:Bn,onRemove:$t,onDuplicateRow:sr,onInsertBeforeRow:Nn,onInsertAfterRow:ir,onRemoveRow:bn}=oe,yt=_e!==void 0,sn=!!Fe,Pt=_e!==void 0&&Fe?Xe(_e,ut(Fe)):void 0,dt=yt&&(Un(Fe)||Ur(Fe)||pn(Fe)),At=!Ue&&yt&&Fe!==void 0&&Yu(Fe),fr=At&&!cr(Pt),Tn=!Ue&&dt,lr=Fe!==void 0&&fa(_e,Ke,ut(Fe));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>St(),icon:zi,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!At},width:"11em",items:[{type:"button",icon:zi,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>St(),disabled:!At},{type:"button",icon:lr?Rg:Tg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Bt(),disabled:!fr}]},{type:"dropdown-button",main:{type:"button",onClick:()=>_n(!0),icon:qi,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Tn},width:"10em",items:[{type:"button",icon:qi,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>_n(!0),disabled:Ue||!dt},{type:"button",icon:qi,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>_n(!1),disabled:Ue||!dt}]},{type:"dropdown-button",main:{type:"button",onClick:()=>en(!0),icon:is,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!dt},width:"12em",items:[{type:"button",icon:is,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>en(!1),disabled:!dt},{type:"button",icon:is,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>en(!1),disabled:!dt}]},{type:"button",onClick:()=>Bn(),icon:Mg,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Ue||!sn},{type:"button",onClick:()=>$t(),icon:Nf,text:"Remove",title:"Remove selected contents (Delete)",disabled:Ue||!dt}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>_t(),icon:zi,text:"Edit row",title:"Edit the current row",disabled:Ue||!sn||!yt},{type:"button",onClick:()=>sr(),icon:zg,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Ue||!sn||!yt},{type:"button",onClick:()=>Nn(),icon:$i,text:"Insert before",title:"Insert a row before the current row",disabled:Ue||!sn||!yt},{type:"button",onClick:()=>ir(),icon:$i,text:"Insert after",title:"Insert a row after the current row",disabled:Ue||!sn||!yt},{type:"button",onClick:()=>bn(),icon:Nf,text:"Remove row",title:"Remove current row",disabled:Ue||!sn||!yt}]}]}]})({json:n(J),documentState:n(ve),selection:n(be),readOnly:b(),onEditValue:Cr,onEditRow:gr,onToggleEnforceString:xr,onCut:Wr,onCopy:Vr,onPaste:Dt,onRemove:Gt,onDuplicateRow:Rn,onInsertBeforeRow:br,onInsertAfterRow:ar,onRemoveRow:ie}),Yn=(ue=Re()(Zt))!==null&&ue!==void 0?ue:Zt;if(Yn!==!1){var qr={left:Be,top:Se,offsetTop:Ye,offsetLeft:Lt,width:Qe,height:Ze,anchor:Me,closeOnOuterClick:!0,onClose:()=>{Ve=!1,et()}};Ve=!0;var q=i(Xb,{tip:an?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Yn,onRequestClose(){l(q),et()}},qr)}}function mr(z){if(!Dr(n(be)))if(z&&(z.stopPropagation(),z.preventDefault()),z&&z.type==="contextmenu"&&z.target!==n(re))or({left:z.clientX,top:z.clientY,width:qa,height:Aa,showTip:!1});else{var ue,Me=(ue=n(M))===null||ue===void 0?void 0:ue.querySelector(".jse-table-cell.jse-selected-value");if(Me)or({anchor:Me,offsetTop:2,width:qa,height:Aa,showTip:!1});else{var Be,Se=(Be=n(M))===null||Be===void 0?void 0:Be.getBoundingClientRect();Se&&or({top:Se.top+2,left:Se.left+2,width:qa,height:Aa,showTip:!1})}}}function tr(z){or({anchor:ob(z.target,"BUTTON"),offsetTop:0,width:qa,height:Aa,showTip:!0})}function Cr(){if(!b()&&n(be)){var z=ut(n(be));cr(Xe(n(J),z))?ct(z):S(be,Kt(z))}}function gr(){!b()&&n(be)&&ct(ut(n(be)).slice(0,1))}function xr(){if(!b()&&pn(n(be))){var z=n(be).path,ue=mt(z),Me=Xe(n(J),z),Be=!fa(n(J),n(ve),z),Se=Be?String(Me):ul(String(Me),j());a("handleToggleEnforceString",{enforceString:Be,value:Me,updatedValue:Se}),Jt([{op:"replace",path:ue,value:Se}],(Qe,Ze)=>({state:_d(n(J),Ze,z,{type:"value",enforceString:Be})}))}}function nr(){return Pe.apply(this,arguments)}function Pe(){return(Pe=jt(function*(){if(a("apply pasted json",n(I)),n(I)){var{onPasteAsJson:z}=n(I);z(),setTimeout(et)}})).apply(this,arguments)}function Dt(){return jn.apply(this,arguments)}function jn(){return(jn=jt(function*(){try{X(yield navigator.clipboard.readText())}catch(z){console.error(z),S(P,!0)}})).apply(this,arguments)}function In(){return dr.apply(this,arguments)}function dr(){return(dr=jt(function*(){a("apply pasted multiline text",n(D)),n(D)&&(X(JSON.stringify(n(D))),setTimeout(et))})).apply(this,arguments)}function Nr(){a("clear pasted json"),S(I,void 0),et()}function Ht(){a("clear pasted multiline text"),S(D,void 0),et()}function kr(){ee()(Rr.text)}function Wr(z){return rr.apply(this,arguments)}function rr(){return(rr=jt(function*(z){yield Hb({json:n(J),selection:n(be),indentation:z?R():void 0,readOnly:b(),parser:j(),onPatch:Jt})})).apply(this,arguments)}function Vr(){return Dn.apply(this,arguments)}function Dn(){return Dn=jt(function*(){var z=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(J)!==void 0&&(yield Kb({json:n(J),selection:n(be),indentation:z?R():void 0,parser:j()}))}),Dn.apply(this,arguments)}function Gt(){Qb({json:n(J),text:n(pe),selection:n(be),keepSelection:!0,readOnly:b(),onChange:ne(),onPatch:Jt})}function Nt(z){b()||(a("extract",{path:z}),Jt(bb(n(J),Kt(z))))}function Rn(){(function(z){var{json:ue,selection:Me,columns:Be,readOnly:Se,onPatch:Qe}=z;if(!Se&&ue!==void 0&&Me&&Ni(Me)){var{rowIndex:Ze,columnIndex:Ye}=To(ut(Me),Be);io("duplicate row",{rowIndex:Ze});var Lt=[String(Ze)];Qe(gb(ue,[Lt]),(an,Zt)=>({state:Zt,selection:Kt(Is({rowIndex:Ze<ue.length?Ze+1:Ze,columnIndex:Ye},Be))}))}})({json:n(J),selection:n(be),columns:n(He),readOnly:b(),onPatch:Jt})}function br(){(function(z){var{json:ue,selection:Me,columns:Be,readOnly:Se,onPatch:Qe}=z;if(!Se&&ue!==void 0&&Me&&Ni(Me)){var{rowIndex:Ze}=To(ut(Me),Be);io("insert before row",{rowIndex:Ze}),Qe(Ti(ue,[String(Ze)],[{key:"",value:wr(ue[0])?{}:""}]))}})({json:n(J),selection:n(be),columns:n(He),readOnly:b(),onPatch:Jt})}function ar(){(function(z){var{json:ue,selection:Me,columns:Be,readOnly:Se,onPatch:Qe}=z;if(!Se&&ue!==void 0&&Me&&Ni(Me)){var{rowIndex:Ze,columnIndex:Ye}=To(ut(Me),Be);io("insert after row",{rowIndex:Ze});var Lt=Ze+1,an=[String(Lt)],Zt=[{key:"",value:wr(ue[0])?{}:""}];Qe(Lt<ue.length?Ti(ue,an,Zt):Zf(ue,[],Zt),(Yn,qr)=>({state:qr,selection:Kt(Is({rowIndex:Lt,columnIndex:Ye},Be))}))}})({json:n(J),selection:n(be),columns:n(He),readOnly:b(),onPatch:Jt})}function ie(){(function(z){var{json:ue,selection:Me,columns:Be,readOnly:Se,onPatch:Qe}=z;if(!Se&&ue!==void 0&&Me&&Ni(Me)){var{rowIndex:Ze,columnIndex:Ye}=To(ut(Me),Be);io("remove row",{rowIndex:Ze}),Qe(Zu([[String(Ze)]]),(Lt,an)=>{var Zt=Ze<Lt.length?Ze:Ze>0?Ze-1:void 0,Yn=Zt!==void 0?Kt(Is({rowIndex:Zt,columnIndex:Ye},Be)):void 0;return io("remove row new selection",{rowIndex:Ze,newRowIndex:Zt,newSelection:Yn}),{state:an,selection:Yn}})}})({json:n(J),selection:n(be),columns:n(He),readOnly:b(),onPatch:Jt})}function ke(){return(ke=jt(function*(z){yield Gb({char:z,selectInside:!1,json:n(J),selection:n(be),readOnly:b(),parser:j(),onPatch:Jt,onReplaceJson:de,onSelect:Ne})})).apply(this,arguments)}function Ie(z){var ue;z.preventDefault(),X((ue=z.clipboardData)===null||ue===void 0?void 0:ue.getData("text/plain"))}function X(z){z!==void 0&&Jb({clipboardText:z,json:n(J),selection:n(be),readOnly:b(),parser:j(),onPatch:Jt,onChangeText:$e,onPasteMultilineText:fn,openRepairModal:bt})}function de(z,ue){var Me={json:n(J),text:n(pe)},Be={json:n(J),documentState:n(ve),selection:n(be),sortedColumn:n(ft),text:n(pe),textIsRepaired:n(at)},Se=Eo(z,n(ve)),Qe=typeof ue=="function"?ue(z,Se,n(be)):void 0;S(J,Qe?.json!==void 0?Qe.json:z),S(ve,Qe?.state!==void 0?Qe.state:Se),S(be,Qe?.selection!==void 0?Qe.selection:n(be)),S(ft,void 0),S(pe,void 0),S(at,!1),S($,void 0),ze(n(J)),qt(Be),cn(Me,void 0)}function $e(z,ue){a("handleChangeText");var Me={json:n(J),text:n(pe)},Be={json:n(J),documentState:n(ve),selection:n(be),sortedColumn:n(ft),text:n(pe),textIsRepaired:n(at)};try{S(J,k()(z)),S(ve,Eo(n(J),n(ve))),S(pe,void 0),S(at,!1),S($,void 0)}catch(Qe){try{S(J,k()(va(z))),S(ve,Eo(n(J),n(ve))),S(pe,z),S(at,!0),S($,void 0)}catch{S(J,void 0),S(ve,void 0),S(pe,z),S(at,!1),S($,n(pe)!==""?Yi(n(pe),Qe.message||String(Qe)):void 0)}}if(typeof ue=="function"){var Se=ue(n(J),n(ve),n(be));S(J,Se?.json!==void 0?Se.json:n(J)),S(ve,Se?.state!==void 0?Se.state:n(ve)),S(be,Se?.selection!==void 0?Se.selection:n(be))}ze(n(J)),qt(Be),cn(Me,void 0)}function We(z){a("select validation error",z),S(be,Kt(z.path)),Hn(z.path)}function st(z){if(n(J)!==void 0){var{id:ue,onTransform:Me,onClose:Be}=z,Se=z.rootPath||[];Ve=!0,L()({id:ue||u,json:n(J),rootPath:Se||[],onTransform:Qe=>{Me?Me({operations:Qe,json:n(J),transformedJson:Jo(n(J),Qe)}):(a("onTransform",Se,Qe),Jt(Qe))},onClose:()=>{Ve=!1,setTimeout(et),Be&&Be()}})}}function ct(z){a("openJSONEditorModal",{path:z}),Ve=!0,le()({content:{json:Xe(n(J),z)},path:z,onPatch:Jt,onClose:()=>{Ve=!1,setTimeout(et)}})}function bt(z,ue){S(Oe,{text:z,onParse:Me=>ac(Me,Be=>oc(Be,j())),onRepair:Q0,onApply:ue,onClose:et})}function Ln(){(function(z){b()||n(J)===void 0||(Ve=!0,Q()({id:d,json:n(J),rootPath:z,onSort:ue=>{var{operations:Me,itemPath:Be,direction:Se}=ue;a("onSort",Me,z,Be,Se),Jt(Me,(Qe,Ze)=>({state:Ze,sortedColumn:{path:Be,sortDirection:Se===-1?qo.desc:qo.asc}}))},onClose:()=>{Ve=!1,setTimeout(et)}}))})([])}function Yt(){st({rootPath:[]})}function rn(z){a("openFind",{findAndReplace:z}),S(G,!1),S(V,!1),Qn(),S(G,!0),S(V,z)}function Tt(){if(!b()&&y().canUndo){var z=y().undo();if(Gu(z)){var ue={json:n(J),text:n(pe)};S(J,z.undo.patch?Jo(n(J),z.undo.patch):z.undo.json),S(ve,z.undo.documentState),S(be,z.undo.selection),S(ft,z.undo.sortedColumn),S(pe,z.undo.text),S(at,z.undo.textIsRepaired),S($,void 0),a("undo",{item:z,json:n(J)}),cn(ue,z.undo.patch&&z.redo.patch?{json:n(J),previousJson:ue.json,redo:z.undo.patch,undo:z.redo.patch}:void 0),et(),n(be)&&Hn(ut(n(be)),{scrollToWhenVisible:!1})}else te()(z)}}function Xt(){if(!b()&&y().canRedo){var z=y().redo();if(Gu(z)){var ue={json:n(J),text:n(pe)};S(J,z.redo.patch?Jo(n(J),z.redo.patch):z.redo.json),S(ve,z.redo.documentState),S(be,z.redo.selection),S(ft,z.redo.sortedColumn),S(pe,z.redo.text),S(at,z.redo.textIsRepaired),S($,void 0),a("redo",{item:z,json:n(J)}),cn(ue,z.undo.patch&&z.redo.patch?{json:n(J),previousJson:ue.json,redo:z.redo.patch,undo:z.undo.patch}:void 0),et(),n(be)&&Hn(ut(n(be)),{scrollToWhenVisible:!1})}else ye()(z)}}function Tr(z){S(U,z.getBoundingClientRect().height)}fe(()=>(E(f()),E(g())),()=>{S(A,Tv({escapeControlCharacters:f(),escapeUnicodeCharacters:g()}))}),fe(()=>n(G),()=>{(function(z){if(n(M)){var ue=z?Ml:-100;n(M).scrollTo({top:Oo(M,n(M).scrollTop+=ue),left:n(M).scrollLeft})}})(n(G))}),fe(()=>E(w()),()=>{(function(z){var ue={json:n(J)},Me=Ll(z)?z.text!==n(pe):!Ft(ue.json,z.json);if(a("update external content",{isChanged:Me}),Me){var Be={json:n(J),documentState:n(ve),selection:n(be),sortedColumn:n(ft),text:n(pe),textIsRepaired:n(at)};if(Ll(z))try{S(J,k()(z.text)),S(ve,Eo(n(J),n(ve))),S(pe,z.text),S(at,!1),S($,void 0)}catch(Se){try{S(J,k()(va(z.text))),S(ve,Eo(n(J),n(ve))),S(pe,z.text),S(at,!0),S($,void 0)}catch{S(J,void 0),S(ve,void 0),S(pe,z.text),S(at,!1),S($,n(pe)!==""?Yi(n(pe),Se.message||String(Se)):void 0)}}else S(J,z.json),S(ve,Eo(n(J),n(ve))),S(pe,void 0),S(at,!1),S($,void 0);ze(n(J)),S(ft,void 0),qt(Be)}})(w())}),fe(()=>E(p()),()=>{(function(z){Ft(n(be),z)||(a("applyExternalSelection",{selection:n(be),externalSelection:z}),Wl(z)&&S(be,z))})(p())}),fe(()=>(n(He),n(J),E(x()),n(qe)),()=>{S(He,hr(n(J))?(function(z,ue){var Me=new Set(ue.map(mt)),Be=new Set(z.map(mt));for(var Se of Me)Be.has(Se)||Me.delete(Se);for(var Qe of Be)Me.has(Qe)||Me.add(Qe);return[...Me].map(go)})(N6(n(J),x(),n(qe)),n(He)):[])}),fe(()=>(n(J),n(He)),()=>{S(it,!(!n(J)||un(n(He))))}),fe(()=>(n(J),n(qe)),()=>{S(r,Array.isArray(n(J))&&n(J).length>n(qe))}),fe(()=>(n(Y),n(U),n(J),n(G),Ml),()=>{S(o,T6(n(Y),n(U),n(J),N,me,n(G)?Ml:0))}),fe(()=>n(J),()=>{n(J),n(M)&&n(M).scrollTo({top:n(M).scrollTop,left:n(M).scrollLeft})}),fe(()=>n(be),()=>{var z;z=n(be),Ft(z,p())||(a("onSelect",z),F()(z))}),fe(()=>(E(b()),E(v()),E(j()),n(A),n(J),n(ve),E(W())),()=>{S(Ge,{mode:Rr.table,readOnly:b(),truncateTextSize:v(),parser:j(),normalization:n(A),getJson:()=>n(J),getDocumentState:()=>n(ve),findElement:Gn,findNextInside:Ot,focus:et,onPatch:(z,ue)=>Jt((function(Me,Be){return Me.flatMap(Se=>{if(vv(Se)){var Qe=go(Se.path);if(Qe.length>0){for(var Ze=[Se],Ye=tn(Qe);Ye.length>0&&!Io(Be,Ye);)Ze.unshift({op:"add",path:mt(Ye),value:{}}),Ye=tn(Ye);return Ze}}return Se})})(z,n(J)),ue),onSelect:Ne,onFind:rn,onPasteJson:gt,onRenderValue:W()})}),fe(()=>(n(J),E(C()),E(j()),E(T())),()=>{zt(n(J),C(),j(),T())}),fe(()=>(n(kn),n(He)),()=>{S(s,A6(n(kn),n(He)))}),xn();var wt={validate:dn,patch:Vt,focus:et,acceptAutoRepair:zn,scrollTo:Hn,findElement:Gn,openTransformModal:st};Rt(!0);var gn=HS();Te("mousedown",La,function(z){!dl(z.target,ue=>ue===n(O))&&Dr(n(be))&&(a("click outside the editor, exit edit mode"),S(be,ua(n(be))),Et&&n(re)&&(n(re).focus(),n(re).blur()),a("blur (outside editor)"),n(re)&&n(re).blur())});var on,vn=tt(gn),Kn=H(vn),On=z=>{(function(ue,Me){vt(Me,!1);var Be=_(Me,"containsValidArray",9),Se=_(Me,"readOnly",9),Qe=_(Me,"showSearch",13,!1),Ze=_(Me,"history",9),Ye=_(Me,"onSort",9),Lt=_(Me,"onTransform",9),an=_(Me,"onContextMenu",9),Zt=_(Me,"onUndo",9),Yn=_(Me,"onRedo",9),qr=_(Me,"onRenderMenu",9);function q(){Qe(!Qe())}var oe=K(void 0,!0),_e=K(void 0,!0);fe(()=>(E(Se()),E(Ye()),E(Be()),E(Lt()),E(an()),E(Zt()),E(Ze()),E(Yn())),()=>{S(oe,Se()?[{type:"space"}]:[{type:"button",icon:Iu,title:"Sort",className:"jse-sort",onClick:Ye(),disabled:Se()||!Be()},{type:"button",icon:qu,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Lt(),disabled:Se()||!Be()},{type:"button",icon:fd,title:"Search (Ctrl+F)",className:"jse-search",onClick:q,disabled:!Be()},{type:"button",icon:Ag,title:Dv,className:"jse-contextmenu",onClick:an()},{type:"separator"},{type:"button",icon:wv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Zt(),disabled:!Ze().canUndo},{type:"button",icon:jv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Yn(),disabled:!Ze().canRedo},{type:"space"}])}),fe(()=>(E(qr()),n(oe)),()=>{S(_e,qr()(n(oe))||n(oe))}),xn(),Rt(!0),Md(ue,{get items(){return n(_e)}}),ht()})(z,{get containsValidArray(){return n(it)},get readOnly(){return b()},get history(){return y()},onSort:Ln,onTransform:Yt,onUndo:Tt,onRedo:Xt,onContextMenu:tr,get onRenderMenu(){return we()},get showSearch(){return n(G)},set showSearch(ue){S(G,ue)},$$legacy:!0})};je(Kn,z=>{h()&&z(On)});var kt=se(Kn,2),Er=z=>{var ue=BS(),Me=tt(ue),Be=H(Me);Be.readOnly=!0,er(Be,Ye=>S(re,Ye),()=>n(re));var Se=se(Me,2),Qe=Ye=>{var Lt=FS(),an=tt(Lt);Vb(H(an),{get json(){return n(J)},get documentState(){return n(ve)},get parser(){return j()},get showSearch(){return n(G)},get showReplace(){return n(V)},get readOnly(){return b()},get columns(){return n(He)},onSearch:rt,onFocus:ot,onPatch:Jt,onClose:lt});var Zt=se(an,2),Yn=H(Zt),qr=H(Yn),q=H(qr),oe=H(q),_e=H(oe),Ke=dt=>{var At=nt(()=>(E(ji),n(s),Z(()=>{var jr;return ji([],(jr=n(s))===null||jr===void 0?void 0:jr.root)}))),fr=Ut(),Tn=tt(fr),lr=jr=>{var Hr=TS();Bi(H(Hr),{get validationError(){return n(At)},get onExpand(){return Ao}}),B(jr,Hr)};je(Tn,jr=>{n(At)&&jr(lr)}),B(dt,fr)};je(_e,dt=>{E(un),n(s),Z(()=>{var At;return!un((At=n(s))===null||At===void 0?void 0:At.root)})&&dt(Ke)});var Fe=se(oe);pr(Fe,1,()=>n(He),_r,(dt,At)=>{var fr=AS();(function(Tn,lr){vt(lr,!1);var jr=K(void 0,!0),Hr=K(void 0,!0),wa=K(void 0,!0),yo=_(lr,"path",9),Vo=_(lr,"sortedColumn",9),aa=_(lr,"readOnly",9),Bo=_(lr,"onSort",9);fe(()=>(E(yo()),mo),()=>{S(jr,un(yo())?"values":mo(yo()))}),fe(()=>(E(Vo()),E(yo())),()=>{var Or;S(Hr,Vo()&&Ft(yo(),(Or=Vo())===null||Or===void 0?void 0:Or.path)?Vo().sortDirection:void 0)}),fe(()=>(n(Hr),pm),()=>{S(wa,n(Hr)?pm[n(Hr)]:void 0)}),xn(),Rt(!0);var ao,Kr=ES(),jo=H(Kr),xa=H(jo),wo=se(jo,2),Cn=Or=>{var $r=CS(),Es=H($r),li=nt(()=>(n(Hr),E(qo),E(Ba),E(bh),Z(()=>n(Hr)===qo.asc?Ba:bh)));nn(Es,{get data(){return n(li)}}),Le(()=>wn($r,"title","Currently sorted in ".concat(n(wa)," order"))),B(Or,$r)};je(wo,Or=>{n(Hr)!==void 0&&Or(Cn)}),Le(Or=>{ao=Mt(Kr,1,"jse-column-header svelte-5pxwfq",null,ao,{"jse-readonly":aa()}),wn(Kr,"title",aa()?n(jr):n(jr)+" (Click to sort the data by this column)"),pt(xa,Or)},[()=>(E(Ta),n(jr),E(50),Z(()=>Ta(n(jr),50)))]),Te("click",Kr,function(){aa()||Bo()({path:yo(),sortDirection:n(Hr)===qo.asc?qo.desc:qo.asc})}),B(Tn,Kr),ht()})(H(fr),{get path(){return n(At)},get sortedColumn(){return n(ft)},get readOnly(){return b()},onSort:Je}),B(dt,fr)});var Ue=se(Fe),St=dt=>{var At=qS(),fr=H(At),Tn=nt(()=>(n(J),Z(()=>Array.isArray(n(J))?n(J).length:0)));(function(lr,jr){vt(jr,!1);var Hr=_(jr,"count",9),wa=_(jr,"maxSampleCount",9),yo=_(jr,"readOnly",9),Vo=_(jr,"onRefresh",9);Rt(!0);var aa,Bo=NS();nn(H(Bo),{get data(){return Lw}}),Le(()=>{aa=Mt(Bo,1,"jse-column-header svelte-1wgrwv3",null,aa,{"jse-readonly":yo()}),wn(Bo,"title","The Columns are created by sampling ".concat(wa()," items out of ").concat(Hr(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),Te("click",Bo,()=>Vo()()),B(lr,Bo),ht()})(fr,{get count(){return n(Tn)},get maxSampleCount(){return n(qe)},get readOnly(){return b()},onRefresh:()=>S(qe,1/0)}),B(dt,At)};je(Ue,dt=>{n(r)&&dt(St)});var _t,Bt,_n=se(q),en=H(_n),Bn=se(_n);pr(Bn,1,()=>(n(o),Z(()=>n(o).visibleItems)),_r,(dt,At,fr)=>{var Tn=nt(()=>(n(o),Z(()=>n(o).startIndex+fr))),lr=nt(()=>(n(s),E(n(Tn)),Z(()=>n(s).rows[n(Tn)]))),jr=nt(()=>(E(ji),E(n(Tn)),E(n(lr)),Z(()=>{var ao;return ji([String(n(Tn))],(ao=n(lr))===null||ao===void 0?void 0:ao.row)}))),Hr=nt(()=>(E(la),n(J),n(ce),E(n(Tn)),Z(()=>la(n(J),n(ce),[String(n(Tn))])))),wa=US(),yo=H(wa);D0(yo,()=>n(Tn),ao=>{var Kr=zS(),jo=H(Kr),xa=se(jo),wo=Cn=>{Bi(Cn,{get validationError(){return n(jr)},get onExpand(){return Ao}})};je(xa,Cn=>{n(jr)&&Cn(wo)}),lo(Kr,(Cn,Or)=>wu?.(Cn,Or),()=>Cn=>(function(Or,$r){N[$r]=Or.getBoundingClientRect().height})(Cn,n(Tn))),Le(()=>{var Cn;return pt(jo,"".concat((Cn=n(Tn))!==null&&Cn!==void 0?Cn:""," "))}),B(ao,Kr)});var Vo=se(yo);pr(Vo,1,()=>n(He),_r,(ao,Kr,jo,xa)=>{var wo,Cn=nt(()=>(E(n(Tn)),n(Kr),Z(()=>[String(n(Tn))].concat(n(Kr))))),Or=nt(()=>(E(Xe),n(At),n(Kr),Z(()=>Xe(n(At),n(Kr))))),$r=nt(()=>(E(pn),n(be),E(ga),E(n(Cn)),Z(()=>pn(n(be))&&ga(n(be).path,n(Cn))))),Es=nt(()=>(E(n(lr)),Z(()=>{var Pr;return(Pr=n(lr))===null||Pr===void 0?void 0:Pr.columns[jo]}))),li=nt(()=>(E(ji),E(n(Cn)),E(n(Es)),Z(()=>ji(n(Cn),n(Es))))),Os=DS(),fl=H(Os),ci=H(fl),vl=Pr=>{var Ro=nt(()=>(E(ed),E(la),n(At),E(n(Hr)),n(Kr),Z(()=>ed(la(n(At),n(Hr),n(Kr)))))),hl=nt(()=>(E(n(Ro)),Z(()=>!!n(Ro)&&n(Ro).some(Ps=>Ps.active)))),pl=nt(()=>(E(un),E(n(Ro)),Z(()=>!un(n(Ro)))));(function(Ps,Yr){vt(Yr,!1);var ml=_(Yr,"path",9),th=_(Yr,"value",9),nh=_(Yr,"parser",9),t1=_(Yr,"isSelected",9),n1=_(Yr,"containsSearchResult",9),r1=_(Yr,"containsActiveSearchResult",9),o1=_(Yr,"onEdit",9);Rt(!0);var rh,uc=_S(),a1=H(uc);Le(gl=>{rh=Mt(uc,1,"jse-inline-value svelte-1jv89ui",null,rh,{"jse-selected":t1(),"jse-highlight":n1(),"jse-active":r1()}),pt(a1,gl)},[()=>(E(Ta),E(nh()),E(th()),E(50),Z(()=>{var gl;return Ta((gl=nh().stringify(th()))!==null&&gl!==void 0?gl:"",50)}))]),Te("dblclick",uc,()=>o1()(ml())),B(Ps,uc),ht()})(Pr,{get path(){return n(Cn)},get value(){return n(Or)},get parser(){return j()},get isSelected(){return n($r)},get containsSearchResult(){return n(pl)},get containsActiveSearchResult(){return n(hl)},onEdit:ct})},Rd=Pr=>{var Ro=nt(()=>(E(la),n(J),n(ce),E(n(Cn)),Z(()=>{var Yr;return(Yr=la(n(J),n(ce),n(Cn)))===null||Yr===void 0?void 0:Yr.searchResults}))),hl=nt(()=>n(Or)!==void 0?n(Or):""),pl=nt(()=>(E(fa),n(J),n(ve),E(n(Cn)),Z(()=>fa(n(J),n(ve),n(Cn))))),Ps=nt(()=>n($r)?n(be):void 0);Db(Pr,{get path(){return n(Cn)},get value(){return n(hl)},get enforceString(){return n(pl)},get selection(){return n(Ps)},get searchResultItems(){return n(Ro)},get context(){return n(Ge)}})};je(ci,Pr=>{E(cr),E(n(Or)),Z(()=>cr(n(Or)))?Pr(vl):Pr(Rd,!1)});var Nd=se(ci),Td=Pr=>{var Ro=IS();ts(H(Ro),{selected:!0,onContextMenu:or}),B(Pr,Ro)};je(Nd,Pr=>{E(b()),E(n($r)),E(Dr),n(be),Z(()=>!b()&&n($r)&&!Dr(n(be)))&&Pr(Td)});var sa=se(fl,2),$s=Pr=>{Bi(Pr,{get validationError(){return n(li)},get onExpand(){return Ao}})};je(sa,Pr=>{n(li)&&Pr($s)}),Le(Pr=>{wn(Os,"data-path",Pr),wo=Mt(fl,1,"jse-value-outer svelte-1p86y3c",null,wo,{"jse-selected-value":n($r)})},[()=>(E($u),E(n(Cn)),Z(()=>$u(n(Cn))))]),B(ao,Os)});var aa=se(Vo),Bo=ao=>{B(ao,LS())};je(aa,ao=>{n(r)&&ao(Bo)}),B(dt,wa)});var $t,sr=H(se(Bn));er(Zt,dt=>S(M,dt),()=>n(M)),lo(Zt,(dt,At)=>wu?.(dt,At),()=>Tr),Qr(()=>Te("scroll",Zt,Qt));var Nn=se(Zt,2),ir=dt=>{var At=nt(()=>(n(I),Z(()=>"You pasted a JSON ".concat(Array.isArray(n(I).contents)?"array":"object"," as text")))),fr=nt(()=>[{icon:bs,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:nr},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Nr}]);Mo(dt,{type:"info",get message(){return n(At)},get actions(){return n(fr)}})};je(Nn,dt=>{n(I)&&dt(ir)});var bn=se(Nn,2),yt=dt=>{var At=nt(()=>[{icon:bs,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:In},{text:"Leave as is",title:"Keep the pasted array",onClick:Ht}]);Mo(dt,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(At)}})};je(bn,dt=>{n(D)&&dt(yt)});var sn=se(bn,2),Pt=dt=>{var At=nt(()=>b()?[]:[{icon:xv,text:"Ok",title:"Accept the repaired document",onClick:zn},{icon:zu,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:kr}]);Mo(dt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(At)},onClose:et})};je(sn,dt=>{n(at)&&dt(Pt)}),Xv(se(sn,2),{get validationErrors(){return n(kn)},selectError:We}),Le(()=>{_t=Mt(_n,1,"jse-table-invisible-start-section svelte-1p86y3c",null,_t,{"jse-search-box-background":n(G)}),wn(en,"colspan",(n(He),Z(()=>n(He).length))),Bt=Lo(en,"",Bt,{height:(n(o),Z(()=>n(o).startHeight+"px"))}),wn(sr,"colspan",(n(He),Z(()=>n(He).length))),$t=Lo(sr,"",$t,{height:(n(o),Z(()=>n(o).endHeight+"px"))})}),B(Ye,Lt)},Ze=Ye=>{var Lt=Ut(),an=tt(Lt),Zt=qr=>{var q=VS(),oe=tt(q),_e=nt(()=>b()?[]:[{icon:zu,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:kr}]);Mo(oe,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(_e)}}),Yb(se(oe,2),{get text(){return n(pe)},get json(){return n(J)},get indentation(){return R()},get parser(){return j()}}),B(qr,q)},Yn=qr=>{RS(qr,{get text(){return n(pe)},get json(){return n(J)},get readOnly(){return b()},get parser(){return j()},openJSONEditorModal:ct,extractPath:Nt,get onChangeMode(){return ee()},onClick:()=>{et()}})};je(an,qr=>{n($)&&n(pe)!==void 0&&n(pe)!==""?qr(Zt):qr(Yn,!1)},!0),B(Ye,Lt)};je(Se,Ye=>{n(it)?Ye(Qe):Ye(Ze,!1)}),Te("paste",Be,Ie),B(z,ue)},yr=z=>{B(z,WS())};je(kt,z=>{m?z(yr,!1):z(Er)}),er(vn,z=>S(O,z),()=>n(O));var Ar=se(vn,2),Sn=z=>{zb(z,{onClose:()=>S(P,!1)})};je(Ar,z=>{n(P)&&z(Sn)});var $n=se(Ar,2),Sr=z=>{Ib(z,ps(()=>n(Oe),{onClose:()=>{var ue;(ue=n(Oe))===null||ue===void 0||ue.onClose(),S(Oe,void 0)}}))};return je($n,z=>{n(Oe)&&z(Sr)}),Le(()=>on=Mt(vn,1,"jse-table-mode svelte-1p86y3c",null,on,{"no-main-menu":!h()})),Te("mousedown",vn,function(z){if(z.buttons===1||z.buttons===2){var ue=z.target;ue.isContentEditable||et();var Me=ab(ue);if(Me){if(Dr(n(be))&&Hl(n(J),n(be),Me))return;S(be,Kt(Me)),z.preventDefault()}}}),Te("keydown",vn,function(z){var ue=Ka(z);if(a("keydown",{combo:ue,key:z.key}),ue==="Ctrl+X"&&(z.preventDefault(),Wr(!0)),ue==="Ctrl+Shift+X"&&(z.preventDefault(),Wr(!1)),ue==="Ctrl+C"&&(z.preventDefault(),Vr(!0)),ue==="Ctrl+Shift+C"&&(z.preventDefault(),Vr(!1)),ue==="Ctrl+D"&&(z.preventDefault(),Rn()),ue!=="Delete"&&ue!=="Backspace"||(z.preventDefault(),Gt()),ue==="Insert"&&z.preventDefault(),ue==="Ctrl+A"&&z.preventDefault(),ue==="Ctrl+Q"&&mr(z),ue==="ArrowLeft"&&(z.preventDefault(),It(),n(be))){var Me=(function(Lt,an){var{rowIndex:Zt,columnIndex:Yn}=To(ut(an),Lt);return Yn>0?Kt(Is({rowIndex:Zt,columnIndex:Yn-1},Lt)):an})(n(He),n(be));S(be,Me),ur(ut(Me))}if(ue==="ArrowRight"&&(z.preventDefault(),It(),n(be))){var Be=(function(Lt,an){var{rowIndex:Zt,columnIndex:Yn}=To(ut(an),Lt);return Yn<Lt.length-1?Kt(Is({rowIndex:Zt,columnIndex:Yn+1},Lt)):an})(n(He),n(be));S(be,Be),ur(ut(Be))}if(ue==="ArrowUp"&&(z.preventDefault(),It(),n(be))){var Se=(function(Lt,an){var{rowIndex:Zt,columnIndex:Yn}=To(ut(an),Lt);return Zt>0?Kt(Is({rowIndex:Zt-1,columnIndex:Yn},Lt)):an})(n(He),n(be));S(be,Se),ur(ut(Se))}if(ue==="ArrowDown"&&(z.preventDefault(),It(),n(be))){var Qe=(function(Lt,an,Zt){var{rowIndex:Yn,columnIndex:qr}=To(ut(Zt),an);return Yn<Lt.length-1?Kt(Is({rowIndex:Yn+1,columnIndex:qr},an)):Zt})(n(J),n(He),n(be));S(be,Qe),ur(ut(Qe))}if(ue==="Enter"&&n(be)&&pn(n(be))){z.preventDefault();var Ze=n(be).path;cr(Xe(n(J),Ze))?ct(Ze):b()||S(be,De(De({},n(be)),{},{edit:!0}))}if(ue.replace(/^Shift\+/,"").length===1&&n(be))return z.preventDefault(),void(function(Lt){ke.apply(this,arguments)})(z.key);if(ue==="Ctrl+Enter"&&pn(n(be))){z.preventDefault();var Ye=Xe(n(J),n(be).path);Sd(Ye)&&window.open(String(Ye),"_blank")}ue==="Escape"&&n(be)&&(z.preventDefault(),S(be,void 0)),ue==="Ctrl+F"&&(z.preventDefault(),rn(!1)),ue==="Ctrl+H"&&(z.preventDefault(),rn(!0)),ue==="Ctrl+Z"&&(z.preventDefault(),Tt()),ue==="Ctrl+Shift+Z"&&(z.preventDefault(),Xt())}),Te("contextmenu",vn,mr),B(e,gn),xt(t,"validate",dn),xt(t,"patch",Vt),xt(t,"focus",et),xt(t,"acceptAutoRepair",zn),xt(t,"scrollTo",Hn),xt(t,"findElement",Gn),xt(t,"openTransformModal",st),ht(wt)}function Zm(e,t){vt(t,!1);var r=_(t,"content",8),o=_(t,"selection",12),s=_(t,"readOnly",8),a=_(t,"indentation",8),i=_(t,"tabSize",8),l=_(t,"truncateTextSize",8),c=_(t,"externalMode",8),d=_(t,"mainMenuBar",8),u=_(t,"navigationBar",8),m=_(t,"statusBar",8),b=_(t,"askToFormat",8),w=_(t,"escapeControlCharacters",8),p=_(t,"escapeUnicodeCharacters",8),y=_(t,"flattenColumns",8),v=_(t,"parser",8),h=_(t,"parseMemoizeOne",8),f=_(t,"validator",8),g=_(t,"validationParser",8),x=_(t,"pathParser",8),j=_(t,"insideModal",8),k=_(t,"onChange",8),C=_(t,"onChangeMode",8),T=_(t,"onSelect",8),R=_(t,"onRenderValue",8),ne=_(t,"onClassName",8),ee=_(t,"onRenderMenu",8),F=_(t,"onRenderContextMenu",8),te=_(t,"onError",8),ye=_(t,"onFocus",8),W=_(t,"onBlur",8),we=_(t,"onSortModal",8),Re=_(t,"onTransformModal",8),Ee=_(t,"onJSONEditorModal",8),ge=K(),Q=K(),L=K(),le=Fr("jsoneditor:JSONEditorRoot"),A=K(e1({onChange:N=>S(A,N)}).get()),O=K(c());function M(N){if(wm(N)){S(O,N.undo.mode);var U=n(A).items(),Y=U.findIndex(Ne=>Ne===N),me=Y!==-1?U[Y-1]:void 0;le("handleUndo",{index:Y,item:N,items:U,prevItem:me}),me&&o(me.redo.selection),C()(n(O))}}function re(N){if(wm(N)){S(O,N.redo.mode);var U=n(A).items(),Y=U.findIndex(Ne=>Ne===N),me=Y!==-1?U[Y+1]:void 0;le("handleRedo",{index:Y,item:N,items:U,nextItem:me}),me&&o(me.undo.selection),C()(n(O))}}var Oe=K(),ae={type:"separator"},J=K(),pe=K();function $(N){if(n(ge))return n(ge).patch(N);if(n(Q))return n(Q).patch(N);if(n(L))return n(L).patch(N);throw new Error('Method patch is not available in mode "'.concat(n(O),'"'))}function I(N,U){if(n(ge))return n(ge).expand(N,U);if(n(L))return n(L).expand(N,U);throw new Error('Method expand is not available in mode "'.concat(n(O),'"'))}function D(N,U){if(n(ge))return n(ge).collapse(N,U);if(n(L))return n(L).collapse(N,U);throw new Error('Method collapse is not available in mode "'.concat(n(O),'"'))}function ce(N){if(n(L))n(L).openTransformModal(N);else if(n(ge))n(ge).openTransformModal(N);else{if(!n(Q))throw new Error('Method transform is not available in mode "'.concat(n(O),'"'));n(Q).openTransformModal(N)}}function G(){if(n(L))return n(L).validate();if(n(ge))return n(ge).validate();if(n(Q))return n(Q).validate();throw new Error('Method validate is not available in mode "'.concat(n(O),'"'))}function V(){return n(ge)?n(ge).acceptAutoRepair():r()}function rt(N){if(n(ge))return n(ge).scrollTo(N);if(n(Q))return n(Q).scrollTo(N);throw new Error('Method scrollTo is not available in mode "'.concat(n(O),'"'))}function ot(N){if(n(ge))return n(ge).findElement(N);if(n(Q))return n(Q).findElement(N);throw new Error('Method findElement is not available in mode "'.concat(n(O),'"'))}function Ce(){n(L)?n(L).focus():n(ge)?n(ge).focus():n(Q)&&n(Q).focus()}function lt(){return qe.apply(this,arguments)}function qe(){return(qe=jt(function*(){n(L)&&(yield n(L).refresh())})).apply(this,arguments)}fe(()=>E(c()),()=>{(function(N){if(N!==n(O)){var U={type:"mode",undo:{mode:n(O),selection:void 0},redo:{mode:N,selection:void 0}};n(O)==="text"&&n(L)&&n(L).flush(),le("add history item",U),n(A).add(U),S(O,N)}})(c())}),fe(()=>(n(O),E(C())),()=>{S(Oe,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(O),")"),className:"jse-group-button jse-first"+(n(O)===Rr.text?" jse-selected":""),onClick:()=>C()(Rr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(O),")"),className:"jse-group-button "+(n(O)===Rr.tree?" jse-selected":""),onClick:()=>C()(Rr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(O),")"),className:"jse-group-button jse-last"+(n(O)===Rr.table?" jse-selected":""),onClick:()=>C()(Rr.table)}])}),fe(()=>(n(Oe),E(ee()),n(O),E(j()),E(s())),()=>{S(J,N=>{var U=Qf(N[0])?n(Oe).concat(N):n(Oe).concat(ae,N),Y=$f(U);return ee()(U,{mode:n(O),modal:j(),readOnly:s()})||Y})}),fe(()=>(E(F()),n(O),E(j()),E(s()),E(o())),()=>{S(pe,N=>{var U,Y=$f(N);return(U=F()(N,{mode:n(O),modal:j(),readOnly:s(),selection:o()}))!==null&&U!==void 0?U:!s()&&Y})}),xn();var He={patch:$,expand:I,collapse:D,transform:ce,validate:G,acceptAutoRepair:V,scrollTo:rt,findElement:ot,focus:Ce,refresh:lt};Rt();var it=Ut(),Ve=tt(it),Et=N=>{er(SS(N,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(A)},get readOnly(){return s()},get indentation(){return a()},get tabSize(){return i()},get mainMenuBar(){return d()},get statusBar(){return m()},get askToFormat(){return b()},get escapeUnicodeCharacters(){return p()},get parser(){return v()},get validator(){return f()},get validationParser(){return g()},get onChange(){return k()},get onChangeMode(){return C()},get onSelect(){return T()},onUndo:M,onRedo:re,get onError(){return te()},get onFocus(){return ye()},get onBlur(){return W()},get onRenderMenu(){return n(J)},get onSortModal(){return we()},get onTransformModal(){return Re()},$$legacy:!0}),U=>S(L,U),()=>n(L))},P=N=>{var U=Ut(),Y=tt(U),me=ze=>{er(KS(ze,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(A)},get readOnly(){return s()},get truncateTextSize(){return l()},get mainMenuBar(){return d()},get escapeControlCharacters(){return w()},get escapeUnicodeCharacters(){return p()},get flattenColumns(){return y()},get parser(){return v()},get parseMemoizeOne(){return h()},get validator(){return f()},get validationParser(){return g()},get indentation(){return a()},get onChange(){return k()},get onChangeMode(){return C()},get onSelect(){return T()},onUndo:M,onRedo:re,get onRenderValue(){return R()},get onFocus(){return ye()},get onBlur(){return W()},get onRenderMenu(){return n(J)},get onRenderContextMenu(){return n(pe)},get onSortModal(){return we()},get onTransformModal(){return Re()},get onJSONEditorModal(){return Ee()},$$legacy:!0}),ve=>S(Q,ve),()=>n(Q))},Ne=ze=>{er(fv(ze,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(A)},get readOnly(){return s()},get indentation(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return d()},get navigationBar(){return u()},get escapeControlCharacters(){return w()},get escapeUnicodeCharacters(){return p()},get parser(){return v()},get parseMemoizeOne(){return h()},get validator(){return f()},get validationParser(){return g()},get pathParser(){return x()},get onError(){return te()},get onChange(){return k()},get onChangeMode(){return C()},get onSelect(){return T()},onUndo:M,onRedo:re,get onRenderValue(){return R()},get onClassName(){return ne()},get onFocus(){return ye()},get onBlur(){return W()},get onRenderMenu(){return n(J)},get onRenderContextMenu(){return n(pe)},get onSortModal(){return we()},get onTransformModal(){return Re()},get onJSONEditorModal(){return Ee()},$$legacy:!0}),ve=>S(ge,ve),()=>n(ge))};je(Y,ze=>{n(O),E(Rr),Z(()=>n(O)===Rr.table)?ze(me):ze(Ne,!1)},!0),B(N,U)};return je(Ve,N=>{n(O),E(Rr),Z(()=>n(O)===Rr.text||String(n(O))==="code")?N(Et):N(P,!1)}),B(e,it),xt(t,"patch",$),xt(t,"expand",I),xt(t,"collapse",D),xt(t,"transform",ce),xt(t,"validate",G),xt(t,"acceptAutoRepair",V),xt(t,"scrollTo",rt),xt(t,"findElement",ot),xt(t,"focus",Ce),xt(t,"refresh",lt),ht(He)}Ct(`/* over all fonts, sizes, and colors */
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
}`);var JS=he('<div class="jse-error svelte-t4zsk3"> </div>'),QS=he('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),GS=he('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),YS=he('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),XS=he('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),ZS=he('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),e8={};Ct(`/* over all fonts, sizes, and colors */
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
}`);var xi=kd(()=>e8),t8=he('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),n8=he('<div class="jse-error svelte-lwzlls"> </div>'),r8=he('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);Ct(`/* over all fonts, sizes, and colors */
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
}`);var o8=he('<div role="none"><!></div> <!> <!> <!>',1);function a8(e,t){vt(t,!1);var r=K(void 0,!0),o=Fr("jsoneditor:JSONEditor"),s={text:""},a=void 0,i=!1,l=Rr.tree,c=!0,d=!0,u=!0,m=!0,b=!1,w=!1,p=!0,y=JSON,v=void 0,h=JSON,f={parse:l4,stringify:mo},g=[$k],x=g[0].id,j=Ao,k=void 0,C=void 0,T=i4,R=Ao,ne=Ao,ee=Ao,F=Ao,te=Pe=>{console.error(Pe),alert(Pe.toString())},ye=Ao,W=Ao,we=_(t,"content",13,s),Re=_(t,"selection",13,a),Ee=_(t,"readOnly",13,i),ge=_(t,"indentation",13,2),Q=_(t,"tabSize",13,4),L=_(t,"truncateTextSize",13,1e3),le=_(t,"mode",13,l),A=_(t,"mainMenuBar",13,c),O=_(t,"navigationBar",13,d),M=_(t,"statusBar",13,u),re=_(t,"askToFormat",13,m),Oe=_(t,"escapeControlCharacters",13,b),ae=_(t,"escapeUnicodeCharacters",13,w),J=_(t,"flattenColumns",13,p),pe=_(t,"parser",13,y),$=_(t,"validator",13,v),I=_(t,"validationParser",13,h),D=_(t,"pathParser",13,f),ce=_(t,"queryLanguages",13,g),G=_(t,"queryLanguageId",13,x),V=_(t,"onChangeQueryLanguage",13,j),rt=_(t,"onChange",13,k),ot=_(t,"onSelect",13,C),Ce=_(t,"onRenderValue",13,T),lt=_(t,"onClassName",13,R),qe=_(t,"onRenderMenu",13,ne),He=_(t,"onRenderContextMenu",13,ee),it=_(t,"onChangeMode",13,F),Ve=_(t,"onError",13,te),Et=_(t,"onFocus",13,ye),P=_(t,"onBlur",13,W),N=K(Ri(),!0),U=K(!1,!0),Y=K(void 0,!0),me=K(void 0,!0),Ne=K(void 0,!0),ze=K(void 0,!0),ve=K(pe(),!0);function be(){return we()}function ft(Pe){o("set");var Dt=df(Pe);if(Dt)throw new Error(Dt);S(N,Ri()),we(Pe),Qn()}function at(Pe){o("update");var Dt=df(Pe);if(Dt)throw new Error(Dt);we(Pe),Qn()}function Je(Pe){var Dt=n(Y).patch(Pe);return Qn(),Dt}function Ge(Pe){Re(Pe),Qn()}function qt(Pe,Dt){n(Y).expand(Pe,Dt),Qn()}function kn(Pe){var Dt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(Y).collapse(Pe,Dt),Qn()}function En(){var Pe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(Y).transform(Pe),Qn()}function zt(){return n(Y).validate()}function dn(){var Pe=n(Y).acceptAutoRepair();return Qn(),Pe}function Vt(Pe){return Jt.apply(this,arguments)}function Jt(){return(Jt=jt(function*(Pe){yield n(Y).scrollTo(Pe)})).apply(this,arguments)}function cn(Pe){return n(Y).findElement(Pe)}function gt(){n(Y).focus(),Qn()}function fn(){return Ot.apply(this,arguments)}function Ot(){return(Ot=jt(function*(){yield n(Y).refresh()})).apply(this,arguments)}function et(Pe){var Dt,jn,In,dr,Nr,Ht,kr,Wr,rr,Vr,Dn,Gt,Nt,Rn,br,ar,ie,ke,Ie,X,de,$e,We,st,ct,bt,Ln,Yt,rn,Tt,Xt,Tr=Object.keys(Pe);for(var wt of Tr)switch(wt){case"content":we((Dt=Pe[wt])!==null&&Dt!==void 0?Dt:s);break;case"selection":Re((jn=Pe[wt])!==null&&jn!==void 0?jn:a);break;case"readOnly":Ee((In=Pe[wt])!==null&&In!==void 0?In:i);break;case"indentation":ge((dr=Pe[wt])!==null&&dr!==void 0?dr:2);break;case"tabSize":Q((Nr=Pe[wt])!==null&&Nr!==void 0?Nr:4);break;case"truncateTextSize":L((Ht=Pe[wt])!==null&&Ht!==void 0?Ht:1e3);break;case"mode":le((kr=Pe[wt])!==null&&kr!==void 0?kr:l);break;case"mainMenuBar":A((Wr=Pe[wt])!==null&&Wr!==void 0?Wr:c);break;case"navigationBar":O((rr=Pe[wt])!==null&&rr!==void 0?rr:d);break;case"statusBar":M((Vr=Pe[wt])!==null&&Vr!==void 0?Vr:u);break;case"askToFormat":re((Dn=Pe[wt])!==null&&Dn!==void 0?Dn:m);break;case"escapeControlCharacters":Oe((Gt=Pe[wt])!==null&&Gt!==void 0?Gt:b);break;case"escapeUnicodeCharacters":ae((Nt=Pe[wt])!==null&&Nt!==void 0?Nt:w);break;case"flattenColumns":J((Rn=Pe[wt])!==null&&Rn!==void 0?Rn:p);break;case"parser":pe((br=Pe[wt])!==null&&br!==void 0?br:y);break;case"validator":$((ar=Pe[wt])!==null&&ar!==void 0?ar:v);break;case"validationParser":I((ie=Pe[wt])!==null&&ie!==void 0?ie:h);break;case"pathParser":D((ke=Pe[wt])!==null&&ke!==void 0?ke:f);break;case"queryLanguages":ce((Ie=Pe[wt])!==null&&Ie!==void 0?Ie:g);break;case"queryLanguageId":G((X=Pe[wt])!==null&&X!==void 0?X:x);break;case"onChangeQueryLanguage":V((de=Pe[wt])!==null&&de!==void 0?de:j);break;case"onChange":rt(($e=Pe[wt])!==null&&$e!==void 0?$e:k);break;case"onRenderValue":Ce((We=Pe[wt])!==null&&We!==void 0?We:T);break;case"onClassName":lt((st=Pe[wt])!==null&&st!==void 0?st:R);break;case"onRenderMenu":qe((ct=Pe[wt])!==null&&ct!==void 0?ct:ne);break;case"onRenderContextMenu":He((bt=Pe[wt])!==null&&bt!==void 0?bt:ee);break;case"onChangeMode":it((Ln=Pe[wt])!==null&&Ln!==void 0?Ln:F);break;case"onSelect":ot((Yt=Pe[wt])!==null&&Yt!==void 0?Yt:C);break;case"onError":Ve((rn=Pe[wt])!==null&&rn!==void 0?rn:te);break;case"onFocus":Et((Tt=Pe[wt])!==null&&Tt!==void 0?Tt:ye);break;case"onBlur":P((Xt=Pe[wt])!==null&&Xt!==void 0?Xt:W);break;default:gn(wt)}function gn(on){o('Unknown property "'.concat(on,'"'))}ce().some(on=>on.id===G())||G(ce()[0].id),Qn()}function Qt(){return It.apply(this,arguments)}function It(){return(It=jt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function zn(Pe,Dt,jn){we(Pe),rt()&&rt()(Pe,Dt,jn)}function Hn(Pe){Re(Pe),ot()&&ot()($f(Pe))}function Vn(){S(U,!0),Et()&&Et()()}function ur(){S(U,!1),P()&&P()()}function Gn(Pe){return or.apply(this,arguments)}function or(){return(or=jt(function*(Pe){le()!==Pe&&(le(Pe),Qn(),gt(),it()(Pe))})).apply(this,arguments)}function mr(Pe){o("handleChangeQueryLanguage",Pe),G(Pe),V()(Pe)}function tr(Pe){var{id:Dt,json:jn,rootPath:In,onTransform:dr,onClose:Nr}=Pe;Ee()||S(ze,{id:Dt,json:jn,rootPath:In,indentation:ge(),truncateTextSize:L(),escapeControlCharacters:Oe(),escapeUnicodeCharacters:ae(),parser:pe(),parseMemoizeOne:n(r),validationParser:I(),pathParser:D(),queryLanguages:ce(),queryLanguageId:G(),onChangeQueryLanguage:mr,onRenderValue:Ce(),onRenderMenu:Ht=>qe()(Ht,{mode:le(),modal:!0,readOnly:Ee()}),onRenderContextMenu:Ht=>He()(Ht,{mode:le(),modal:!0,readOnly:Ee(),selection:Re()}),onClassName:lt(),onTransform:dr,onClose:Nr})}function Cr(Pe){Ee()||S(Ne,Pe)}function gr(Pe){var{content:Dt,path:jn,onPatch:In,onClose:dr}=Pe;o("onJSONEditorModal",{content:Dt,path:jn}),S(me,{content:Dt,path:jn,onPatch:In,readOnly:Ee(),indentation:ge(),tabSize:Q(),truncateTextSize:L(),mainMenuBar:A(),navigationBar:O(),statusBar:M(),askToFormat:re(),escapeControlCharacters:Oe(),escapeUnicodeCharacters:ae(),flattenColumns:J(),parser:pe(),validator:void 0,validationParser:I(),pathParser:D(),onRenderValue:Ce(),onClassName:lt(),onRenderMenu:qe(),onRenderContextMenu:He(),onSortModal:Cr,onTransformModal:tr,onClose:dr})}function xr(Pe){Pe.stopPropagation()}fe(()=>(E(pe()),n(ve),E(we()),Ri),()=>{if(!Y0(pe(),n(ve))){if(o("parser changed, recreate editor"),Ul(we())){var Pe=n(ve).stringify(we().json);we({json:Pe!==void 0?pe().parse(Pe):void 0})}S(ve,pe()),S(N,Ri())}}),fe(()=>E(we()),()=>{var Pe=df(we());Pe&&console.error("Error: "+Pe)}),fe(()=>E(Re()),()=>{Re()===null&&console.warn("selection is invalid: it is null but should be undefined")}),fe(()=>E(pe()),()=>{S(r,ql(pe().parse))}),fe(()=>E(le()),()=>{o("mode changed to",le())}),xn();var nr={get:be,set:ft,update:at,patch:Je,select:Ge,expand:qt,collapse:kn,transform:En,validate:zt,acceptAutoRepair:dn,scrollTo:Vt,findElement:cn,focus:gt,refresh:fn,updateProps:et,destroy:Qt};return Rt(!0),Kf(e,{children:(Pe,Dt)=>{var jn,In=o8(),dr=tt(In);D0(H(dr),()=>n(N),Dn=>{er(Zm(Dn,{get externalMode(){return le()},get content(){return we()},get selection(){return Re()},get readOnly(){return Ee()},get indentation(){return ge()},get tabSize(){return Q()},get truncateTextSize(){return L()},get statusBar(){return M()},get askToFormat(){return re()},get mainMenuBar(){return A()},get navigationBar(){return O()},get escapeControlCharacters(){return Oe()},get escapeUnicodeCharacters(){return ae()},get flattenColumns(){return J()},get parser(){return pe()},get parseMemoizeOne(){return n(r)},get validator(){return $()},get validationParser(){return I()},get pathParser(){return D()},insideModal:!1,get onError(){return Ve()},onChange:zn,onChangeMode:Gn,onSelect:Hn,get onRenderValue(){return Ce()},get onClassName(){return lt()},onFocus:Vn,onBlur:ur,get onRenderMenu(){return qe()},get onRenderContextMenu(){return He()},onSortModal:Cr,onTransformModal:tr,onJSONEditorModal:gr,$$legacy:!0}),Gt=>S(Y,Gt),()=>n(Y))});var Nr=se(dr,2),Ht=Dn=>{(function(Gt,Nt){var Rn,br;vt(Nt,!1);var ar=K(void 0,!0),ie=K(void 0,!0),ke=K(void 0,!0),Ie=K(void 0,!0),X=Fr("jsoneditor:SortModal"),de=_(Nt,"id",9),$e=_(Nt,"json",9),We=_(Nt,"rootPath",9),st=_(Nt,"onSort",9),ct=_(Nt,"onClose",9),bt={value:1,label:"ascending"},Ln=[bt,{value:-1,label:"descending"}],Yt="".concat(de(),":").concat(mt(We())),rn=K((Rn=xi()[Yt])===null||Rn===void 0?void 0:Rn.selectedProperty,!0),Tt=K(((br=xi()[Yt])===null||br===void 0?void 0:br.selectedDirection)||bt,!0),Xt=K(void 0,!0);function Tr(){try{var gn,on,vn;S(Xt,void 0);var Kn=((gn=n(rn))===null||gn===void 0?void 0:gn.value)||((on=n(Ie))===null||on===void 0||(on=on[0])===null||on===void 0?void 0:on.value)||[],On=(vn=n(Tt))===null||vn===void 0?void 0:vn.value,kt=Fb($e(),We(),Kn,On);st()!==void 0&&We()!==void 0&&st()({operations:kt,rootPath:We(),itemPath:Kn,direction:On}),ct()()}catch(Er){S(Xt,String(Er))}}function wt(gn){gn.focus()}fe(()=>(E($e()),E(We())),()=>{S(ar,Xe($e(),We()))}),fe(()=>n(ar),()=>{S(ie,Array.isArray(n(ar)))}),fe(()=>(n(ie),n(ar)),()=>{S(ke,n(ie)?Wf(n(ar)):void 0)}),fe(()=>(n(ke),as),()=>{S(Ie,n(ke)?n(ke).map(as):void 0)}),fe(()=>(xi(),n(rn),n(Tt)),()=>{xi(xi()[Yt]={selectedProperty:n(rn),selectedDirection:n(Tt)}),X("store state in memory",Yt,xi()[Yt])}),xn(),Rt(!0),Ql(Gt,{get onClose(){return ct()},className:"jse-sort-modal",children:(gn,on)=>{var vn=r8(),Kn=tt(vn),On=nt(()=>n(ie)?"Sort array items":"Sort object keys");sd(Kn,{get title(){return n(On)},get onClose(){return ct()}});var kt=H(se(Kn,2)),Er=se(H(kt)),yr=H(Er),Ar=se(H(yr)),Sn=H(Ar),$n=se(yr),Sr=Ze=>{var Ye=t8(),Lt=se(H(Ye));Vs(H(Lt),{showChevron:!0,get items(){return n(Ie)},get value(){return n(rn)},set value(an){S(rn,an)},$$legacy:!0}),B(Ze,Ye)};je($n,Ze=>{n(ie),n(Ie),Z(()=>{var Ye;return n(ie)&&n(Ie)&&((Ye=n(Ie))===null||Ye===void 0?void 0:Ye.length)>1})&&Ze(Sr)});var z=se($n),ue=se(H(z));Vs(H(ue),{showChevron:!0,clearable:!1,get items(){return Ln},get value(){return n(Tt)},set value(Ze){S(Tt,Ze)},$$legacy:!0});var Me=se(kt,2),Be=H(Me),Se=Ze=>{var Ye=n8(),Lt=H(Ye);Le(()=>pt(Lt,n(Xt))),B(Ze,Ye)};je(Be,Ze=>{n(Xt)&&Ze(Se)});var Qe=H(se(Me,2));Qr(()=>Te("click",Qe,Tr)),lo(Qe,Ze=>wt?.(Ze)),Le(Ze=>{ni(Sn,Ze),Qe.disabled=(n(ie),n(Ie),n(rn),Z(()=>{var Ye;return!!(n(ie)&&n(Ie)&&((Ye=n(Ie))===null||Ye===void 0?void 0:Ye.length)>1)&&!n(rn)}))},[()=>(E(We()),E(un),E(mo),Z(()=>We()&&!un(We())?mo(We()):"(document root)"))]),B(gn,vn)},$$slots:{default:!0}}),ht()})(Dn,ps(()=>n(Ne),{onClose:()=>{var Gt;(Gt=n(Ne))===null||Gt===void 0||Gt.onClose(),S(Ne,void 0)}}))};je(Nr,Dn=>{n(Ne)&&Dn(Ht)});var kr=se(Nr,2),Wr=Dn=>{lS(Dn,ps(()=>n(ze),{onClose:()=>{var Gt;(Gt=n(ze))===null||Gt===void 0||Gt.onClose(),S(ze,void 0)}}))};je(kr,Dn=>{n(ze)&&Dn(Wr)});var rr=se(kr,2),Vr=Dn=>{(function(Gt,Nt){vt(Nt,!1);var Rn=K(void 0,!0),br=K(void 0,!0),ar=K(void 0,!0),ie=K(void 0,!0),ke=Fr("jsoneditor:JSONEditorModal"),Ie=_(Nt,"content",9),X=_(Nt,"path",9),de=_(Nt,"onPatch",9),$e=_(Nt,"readOnly",9),We=_(Nt,"indentation",9),st=_(Nt,"tabSize",9),ct=_(Nt,"truncateTextSize",9),bt=_(Nt,"mainMenuBar",9),Ln=_(Nt,"navigationBar",9),Yt=_(Nt,"statusBar",9),rn=_(Nt,"askToFormat",9),Tt=_(Nt,"escapeControlCharacters",9),Xt=_(Nt,"escapeUnicodeCharacters",9),Tr=_(Nt,"flattenColumns",9),wt=_(Nt,"parser",9),gn=_(Nt,"validator",9),on=_(Nt,"validationParser",9),vn=_(Nt,"pathParser",9),Kn=_(Nt,"onRenderValue",9),On=_(Nt,"onClassName",9),kt=_(Nt,"onRenderMenu",9),Er=_(Nt,"onRenderContextMenu",9),yr=_(Nt,"onSortModal",9),Ar=_(Nt,"onTransformModal",9),Sn=_(Nt,"onClose",9),$n=K(void 0,!0),Sr=K(void 0,!0),z={mode:Be(Ie()),content:Ie(),selection:void 0,relativePath:X()},ue=K([z],!0),Me=K(void 0,!0);function Be(oe){return Ul(oe)&&hr(oe.json)?Rr.table:Rr.tree}function Se(){var oe,_e=(oe=Wt(n(ue)))===null||oe===void 0?void 0:oe.selection;Wl(_e)&&n($n).scrollTo(ut(_e))}function Qe(){if(ke("handleApply"),!$e())try{S(Me,void 0);var oe=n(Rn).relativePath,_e=n(Rn).content,Ke=[{op:"replace",path:mt(oe),value:um(_e,wt()).json}];if(n(ue).length>1){var Fe=um(n(ue)[n(ue).length-2].content,wt()).json,Ue={json:Jo(Fe,Ke)},St=De(De({},n(ue)[n(ue).length-2]||z),{},{content:Ue});S(ue,[...n(ue).slice(0,n(ue).length-2),St]),Qn(),Se()}else de()(Ke),Sn()()}catch(_t){S(Me,String(_t))}}function Ze(){if(ke("handleClose"),n(Sr))S(Sr,!1);else if(n(ue).length>1){var oe;S(ue,tn(n(ue))),Qn(),(oe=n($n))===null||oe===void 0||oe.focus(),Se(),S(Me,void 0)}else Sn()()}function Ye(oe){ke("handleChange",oe),Zt(_e=>De(De({},_e),{},{content:oe}))}function Lt(oe){ke("handleChangeSelection",oe),Zt(_e=>De(De({},_e),{},{selection:oe}))}function an(oe){ke("handleChangeMode",oe),Zt(_e=>De(De({},_e),{},{mode:oe}))}function Zt(oe){var _e=oe(Wt(n(ue)));S(ue,[...tn(n(ue)),_e])}function Yn(oe){S(Me,oe.toString()),console.error(oe)}function qr(oe){var _e,{content:Ke,path:Fe}=oe;ke("handleJSONEditorModal",{content:Ke,path:Fe});var Ue={mode:Be(Ke),content:Ke,selection:void 0,relativePath:Fe};S(ue,[...n(ue),Ue]),Qn(),(_e=n($n))===null||_e===void 0||_e.focus()}function q(oe){oe.focus()}oo(()=>{var oe;(oe=n($n))===null||oe===void 0||oe.focus()}),fe(()=>n(ue),()=>{S(Rn,Wt(n(ue))||z)}),fe(()=>n(ue),()=>{S(br,n(ue).flatMap(oe=>oe.relativePath))}),fe(()=>(n(br),mo),()=>{S(ar,un(n(br))?"(document root)":mo(n(br)))}),fe(()=>E(wt()),()=>{S(ie,ql(wt().parse))}),xn(),Rt(!0),Ql(Gt,{onClose:Ze,className:"jse-jsoneditor-modal",get fullscreen(){return n(Sr)},children:(oe,_e)=>{var Ke=ZS();Kf(H(Ke),{children:(Fe,Ue)=>{var St=XS(),_t=tt(St),Bt=nt(()=>(n(ue),Z(()=>n(ue).length>1?" (".concat(n(ue).length,")"):"")));sd(_t,{get title(){var Pt;return"Edit nested content ".concat((Pt=n(Bt))!==null&&Pt!==void 0?Pt:"")},fullScreenButton:!0,onClose:Ze,get fullscreen(){return n(Sr)},set fullscreen(Pt){S(Sr,Pt)},$$legacy:!0});var _n=se(_t,2),en=se(H(_n),2),Bn=se(en,4);er(Zm(H(Bn),{get externalMode(){return n(Rn),Z(()=>n(Rn).mode)},get content(){return n(Rn),Z(()=>n(Rn).content)},get selection(){return n(Rn),Z(()=>n(Rn).selection)},get readOnly(){return $e()},get indentation(){return We()},get tabSize(){return st()},get truncateTextSize(){return ct()},get statusBar(){return Yt()},get askToFormat(){return rn()},get mainMenuBar(){return bt()},get navigationBar(){return Ln()},get escapeControlCharacters(){return Tt()},get escapeUnicodeCharacters(){return Xt()},get flattenColumns(){return Tr()},get parser(){return wt()},get parseMemoizeOne(){return n(ie)},get validator(){return gn()},get validationParser(){return on()},get pathParser(){return vn()},insideModal:!0,onError:Yn,onChange:Ye,onChangeMode:an,onSelect:Lt,get onRenderValue(){return Kn()},get onClassName(){return On()},get onFocus(){return Ao},get onBlur(){return Ao},get onRenderMenu(){return kt()},get onRenderContextMenu(){return Er()},get onSortModal(){return yr()},get onTransformModal(){return Ar()},onJSONEditorModal:qr,$$legacy:!0}),Pt=>S($n,Pt),()=>n($n));var $t=H(se(Bn,2)),sr=Pt=>{var dt=JS(),At=H(dt);Le(()=>pt(At,n(Me))),B(Pt,dt)};je($t,Pt=>{n(Me)&&Pt(sr)});var Nn=se($t,2),ir=Pt=>{var dt=QS();nn(H(dt),{get data(){return jw}}),Te("click",dt,Ze),B(Pt,dt)};je(Nn,Pt=>{n(ue),Z(()=>n(ue).length>1)&&Pt(ir)});var bn=se(Nn,2),yt=Pt=>{var dt=GS();Qr(()=>Te("click",dt,Qe)),lo(dt,At=>q?.(At)),B(Pt,dt)},sn=Pt=>{var dt=YS();Te("click",dt,Ze),B(Pt,dt)};je(bn,Pt=>{$e()?Pt(sn,!1):Pt(yt)}),Le(()=>ni(en,n(ar))),B(Fe,St)},$$slots:{default:!0}}),B(oe,Ke)},$$slots:{default:!0}}),ht()})(Dn,ps(()=>n(me),{onClose:()=>{var Gt;(Gt=n(me))===null||Gt===void 0||Gt.onClose(),S(me,void 0)}}))};je(rr,Dn=>{n(me)&&Dn(Vr)}),Le(()=>jn=Mt(dr,1,"jse-main svelte-1l55585",null,jn,{"jse-focus":n(U)})),Te("keydown",dr,xr),B(Pe,In)},$$slots:{default:!0}}),xt(t,"get",be),xt(t,"set",ft),xt(t,"update",at),xt(t,"patch",Je),xt(t,"select",Ge),xt(t,"expand",qt),xt(t,"collapse",kn),xt(t,"transform",En),xt(t,"validate",zt),xt(t,"acceptAutoRepair",dn),xt(t,"scrollTo",Vt),xt(t,"findElement",cn),xt(t,"focus",gt),xt(t,"refresh",fn),xt(t,"updateProps",et),xt(t,"destroy",Qt),ht(nr)}function g8(e){var{target:t,props:r}=e,o=K2(a8,{target:t,props:r});return o.destroy=jt(function*(){return(function(s,a){var i=Ff.get(s);return i?(Ff.delete(s),i(a)):Promise.resolve()})(o)}),Qn(),o}export{Rr as C,Ul as f,g8 as v};
