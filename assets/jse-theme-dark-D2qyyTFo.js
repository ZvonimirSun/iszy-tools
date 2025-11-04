import{bQ as Gb,aS as Gu,bR as Yb,bS as Xb,bT as Xm,bU as Zb,bV as e1,bW as t1,bX as n1,bY as r1,bZ as o1,b_ as a1,b$ as pf,c0 as jd,c1 as s1,c2 as i1,c3 as l1,c4 as c1,c5 as Zv,c6 as u1,c7 as d1,c8 as f1,aO as Zm,ab as Ft,ao as v1,aV as wu,c9 as hf}from"./index-5f28A1cg.js";import{m as _l}from"./memoize-one.esm-BdPwpGay.js";import{L as p1,s as h1,t as Co,a as m1,b as g1,i as b1,f as eg,c as ep,d as y1,F as j1,V as tg,e as w1,E as $s,g as xu,R as ng,D as rg,H as x1,h as og,j as ni,k as tp,C as il,l as k1,m as S1,n as _1,o as C1,p as E1,q as O1,r as $1,u as P1,v as M1,w as R1,x as N1,y as T1,z as A1,A as q1,B as z1,G as I1,I as D1,J as L1,K as U1,M as F1,N as V1,O as B1,P as W1,Q as H1,S as K1,T as J1,U as np,W as wd,X as rp,Y as Q1,Z as G1,_ as Y1,$ as X1,a0 as Z1,a1 as ey,a2 as ty,a3 as ny}from"./index-D5mNNbb_.js";import{b as ry,l as Ht}from"./last-D-rYfuUG.js";import{b as oy,m as ay}from"./map-DKM2nqUO.js";import{b as Yu}from"./_baseIteratee-Cl0i2Iai.js";import{r as ag}from"./range-J1Sv4g6V.js";import{c as sg}from"./_castFunction-Be9_pqGo.js";import{t as sy}from"./toFinite-DFIsh9Ao.js";import{b as iy,c as ly,a as cy}from"./_baseEach-BpFLQ0mB.js";function uy(e){var t=sy(e),r=t%1;return t===t?r?t-r:t:0}function Pr(){}var dy=1,fy=4;function vy(e,t){return t=typeof t=="function"?t:void 0,Gb(e,dy|fy,t)}function py(e,t,r,o){for(var s=-1,a=e==null?0:e.length;++s<a;){var i=e[s];t(o,i,r(i),e)}return o}function hy(e,t,r,o){return iy(e,function(s,a,i){t(o,s,r(s),i)}),o}function ig(e,t){return function(r,o){var s=Gu(r)?py:hy,a=t?t():{};return s(r,e,Yu(o),a)}}function my(e,t){for(var r=e==null?0:e.length;r--&&t(e[r],r,e)!==!1;);return e}var gy=Yb(!0);function by(e,t){return e&&gy(e,t,Xb)}var yy=ly(by,!0);function jy(e,t){var r=Gu(e)?my:yy;return r(e,sg(t))}function Pa(e){return e&&e.length?e[0]:void 0}var wy=Object.prototype,xy=wy.hasOwnProperty,ky=ig(function(e,t,r){xy.call(e,r)?e[r].push(t):Xm(e,r,[t])});function nn(e){var t=e==null?0:e.length;return t?ry(e,0,-1):[]}var Sy="[object Map]",_y="[object Set]",Cy=Object.prototype,Ey=Cy.hasOwnProperty;function vn(e){if(e==null)return!0;if(Zb(e)&&(Gu(e)||typeof e=="string"||typeof e.splice=="function"||e1(e)||t1(e)||n1(e)))return!e.length;var t=r1(e);if(t==Sy||t==_y)return!e.size;if(o1(e))return!a1(e).length;for(var r in e)if(Ey.call(e,r))return!1;return!0}function Oy(e,t){return e<t}function $y(e,t){var r={};return t=Yu(t),cy(e,function(o,s,a){Xm(r,s,t(o,s,a))}),r}function Py(e,t,r){for(var o=-1,s=e.length;++o<s;){var a=e[o],i=t(a);if(i!=null&&(l===void 0?i===i&&!pf(i):r(i,l)))var l=i,c=a}return c}function nc(e,t){return e&&e.length?Py(e,Yu(t),Oy):void 0}function My(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}function Ry(e,t){if(e!==t){var r=e!==void 0,o=e===null,s=e===e,a=pf(e),i=t!==void 0,l=t===null,c=t===t,d=pf(t);if(!l&&!d&&!a&&e>t||a&&i&&c&&!l&&!d||o&&i&&c||!r&&c||!s)return 1;if(!o&&!a&&!d&&e<t||d&&r&&s&&!o&&!a||l&&r&&s||!i&&s||!c)return-1}return 0}function Ny(e,t,r){for(var o=-1,s=e.criteria,a=t.criteria,i=s.length,l=r.length;++o<i;){var c=Ry(s[o],a[o]);if(c){if(o>=l)return c;var d=r[o];return c*(d=="desc"?-1:1)}}return e.index-t.index}function Ty(e,t,r){t.length?t=jd(t,function(a){return Gu(a)?function(i){return s1(i,a.length===1?a[0]:a)}:a}):t=[i1];var o=-1;t=jd(t,l1(Yu));var s=oy(e,function(a,i,l){var c=jd(t,function(d){return d(a)});return{criteria:c,index:++o,value:a}});return My(s,function(a,i){return Ny(a,i,r)})}var Ay=ig(function(e,t,r){e[r?0:1].push(t)},function(){return[[],[]]}),qy=c1(function(e,t){if(e==null)return[];var r=t.length;return r>1&&Zv(e,t[0],t[1])?t=[]:r>2&&Zv(t[0],t[1],t[2])&&(t=[t[0]]),Ty(e,u1(t),[])}),zy=9007199254740991,xd=4294967295,Iy=Math.min;function Dy(e,t){if(e=uy(e),e<1||e>zy)return[];var r=xd,o=Iy(e,xd);t=sg(t),e-=xd;for(var s=d1(o,t);++r<e;)t(r);return s}var Ly=0;function qi(e){var t=++Ly;return f1(e)+t}var kd,op;function lg(){return op||(op=1,kd=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,s,a;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(s=o;s--!==0;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(a=Object.keys(t),o=a.length,o!==Object.keys(r).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[s]))return!1;for(s=o;s--!==0;){var i=a[s];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}),kd}function fr(e){return Array.isArray(e)}function jr(e){return e!==null&&typeof e=="object"&&(e.constructor===void 0||e.constructor.name==="Object")}function cg(e){return e&&typeof e=="object"?e.op==="add":!1}function ug(e){return e&&typeof e=="object"?e.op==="remove":!1}function av(e){return e&&typeof e=="object"?e.op==="replace":!1}function mf(e){return e&&typeof e=="object"?e.op==="copy":!1}function qs(e){return e&&typeof e=="object"?e.op==="move":!1}function Uy(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Fy(e,t){return e===t}function dg(e){return e.slice(0,e.length-1)}function Vy(e){return e[e.length-1]}function By(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fy;if(e.length<t.length)return!1;for(let o=0;o<t.length;o++)if(!r(e[o],t[o]))return!1;return!0}function fg(e){return typeof e=="object"&&e!==null}function sv(e){if(fr(e)){const t=e.slice();return Object.getOwnPropertySymbols(e).forEach(r=>{t[r]=e[r]}),t}else if(jr(e)){const t={...e};return Object.getOwnPropertySymbols(e).forEach(r=>{t[r]=e[r]}),t}else return e}function iv(e,t,r){if(e[t]===r)return e;{const o=sv(e);return o[t]=r,o}}function Xe(e,t){let r=e,o=0;for(;o<t.length;)jr(r)?r=r[t[o]]:fr(r)?r=r[parseInt(t[o])]:r=void 0,o++;return r}function fo(e,t,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return r;const s=t[0],a=fo(e?e[s]:void 0,t.slice(1),r,o);if(jr(e)||fr(e))return iv(e,s,a);if(o){const i=Wy.test(s)?[]:{};return i[s]=a,i}else throw new Error("Path does not exist")}const Wy=/^\d+$/;function lv(e,t,r){if(t.length===0)return r(e);if(!fg(e))throw new Error("Path doesn't exist");const o=t[0],s=lv(e[o],t.slice(1),r);return iv(e,o,s)}function Xu(e,t){if(t.length===0)return e;if(!fg(e))throw new Error("Path does not exist");if(t.length===1){const s=t[0];if(s in e){const a=sv(e);return fr(a)&&a.splice(parseInt(s),1),jr(a)&&delete a[s],a}else return e}const r=t[0],o=Xu(e[r],t.slice(1));return iv(e,r,o)}function cv(e,t,r){const o=t.slice(0,t.length-1),s=t[t.length-1];return lv(e,o,a=>{if(!Array.isArray(a))throw new TypeError("Array expected at path "+JSON.stringify(o));const i=sv(a);return i.splice(parseInt(s),0,r),i})}function zo(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:zo(e[t[0]],t.slice(1))}function bo(e){const t=e.split("/");return t.shift(),t.map(r=>r.replace(/~1/g,"/").replace(/~0/g,"~"))}function gt(e){return e.map(vg).join("")}function vg(e){return"/"+String(e).replace(/~/g,"~0").replace(/\//g,"~1")}function rc(e,t){return e+vg(t)}function Ko(e,t,r){let o=e;for(let s=0;s<t.length;s++){Zy(t[s]);let a=t[s];if(r&&r.before){const c=r.before(o,a);if(c!==void 0){if(c.document!==void 0&&(o=c.document),c.json!==void 0)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"');c.operation!==void 0&&(a=c.operation)}}const i=o,l=Jo(o,a.path);if(a.op==="add")o=Jy(o,l,a.value);else if(a.op==="remove")o=Ky(o,l);else if(a.op==="replace")o=Hy(o,l,a.value);else if(a.op==="copy")o=Qy(o,l,gf(a.from));else if(a.op==="move")o=Gy(o,l,gf(a.from));else if(a.op==="test")Yy(o,l,a.value);else throw new Error("Unknown JSONPatch operation "+JSON.stringify(a));if(r&&r.after){const c=r.after(o,a,i);c!==void 0&&(o=c)}}return o}function Hy(e,t,r){return fo(e,t,r)}function Ky(e,t){return Xu(e,t)}function Jy(e,t,r){return Ll(e,t)?cv(e,t,r):fo(e,t,r)}function Qy(e,t,r){const o=Xe(e,r);if(Ll(e,t))return cv(e,t,o);{const s=Xe(e,r);return fo(e,t,s)}}function Gy(e,t,r){const o=Xe(e,r),s=Xu(e,r);return Ll(s,t)?cv(s,t,o):fo(s,t,o)}function Yy(e,t,r){if(r===void 0)throw new Error(`Test failed: no value provided (path: "${gt(t)}")`);if(!zo(e,t))throw new Error(`Test failed: path not found (path: "${gt(t)}")`);const o=Xe(e,t);if(!Uy(o,r))throw new Error(`Test failed, value differs (path: "${gt(t)}")`)}function Ll(e,t){if(t.length===0)return!1;const r=Xe(e,dg(t));return Array.isArray(r)}function Xy(e,t){if(Vy(t)!=="-")return t;const r=dg(t),o=Xe(e,r);return r.concat(o.length)}function Zy(e){if(!["add","remove","replace","copy","move","test"].includes(e.op))throw new Error("Unknown JSONPatch op "+JSON.stringify(e.op));if(typeof e.path!="string")throw new Error('Required property "path" missing or not a string in operation '+JSON.stringify(e));if((e.op==="copy"||e.op==="move")&&typeof e.from!="string")throw new Error('Required property "from" missing or not a string in operation '+JSON.stringify(e))}function Jo(e,t){return Xy(e,bo(t))}function gf(e){return bo(e)}function pg(e,t,r){let o=[];return Ko(e,t,{before:(a,i)=>{let l;const c=Jo(a,i.path);if(i.op==="add")l=gg(a,c);else if(i.op==="remove")l=mg(a,c);else if(i.op==="replace")l=hg(a,c);else if(i.op==="copy")l=ej(a,c);else if(i.op==="move")l=tj(a,c,gf(i.from));else if(i.op==="test")l=[];else throw new Error("Unknown JSONPatch operation "+JSON.stringify(i));let d;if(r&&r.before){const u=r.before(a,i,l);if(u&&u.revertOperations&&(l=u.revertOperations),u&&u.document&&(d=u.document),u&&u.json)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"')}if(o=l.concat(o),d!==void 0)return{document:d}}}),o}function hg(e,t){return[{op:"replace",path:gt(t),value:Xe(e,t)}]}function mg(e,t){return[{op:"add",path:gt(t),value:Xe(e,t)}]}function gg(e,t){return Ll(e,t)||!zo(e,t)?[{op:"remove",path:gt(t)}]:hg(e,t)}function ej(e,t){return gg(e,t)}function tj(e,t,r){if(t.length<r.length&&By(r,t))return[{op:"replace",path:gt(t),value:e}];const o={op:"move",from:gt(t),path:gt(r)};return!Ll(e,t)&&zo(e,t)?[o,...mg(e,t)]:[o]}var oc={},ap;function nj(){if(ap)return oc;ap=1;var e={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",'"':'"',"/":"/","\\":"\\"},t=97;oc.parse=function(h,j,v){var p={},f=0,g=0,x=0,w=v&&v.bigint&&typeof BigInt<"u";return{data:k("",!0),pointers:p};function k(T,E){O();var M;Re(T,"value");var oe=Z();switch(oe){case"t":F("rue"),M=!0;break;case"f":F("alse"),M=!1;break;case"n":F("ull"),M=null;break;case'"':M=A();break;case"[":M=ne(T);break;case"{":M=G(T);break;default:je(),"-0123456789".indexOf(oe)>=0?M=R():B()}return Re(T,"valueEnd"),O(),E&&x<h.length&&B(),M}function O(){e:for(;x<h.length;){switch(h[x]){case" ":g++;break;case"	":g+=4;break;case"\r":g=0;break;case`
`:g=0,f++;break;default:break e}x++}}function A(){for(var T="",E;E=Z(),E!='"';)E=="\\"?(E=Z(),E in e?T+=e[E]:E=="u"?T+=Q():L()):T+=E;return T}function R(){var T="",E=!0;h[x]=="-"&&(T+=Z()),T+=h[x]=="0"?Z():we(),h[x]=="."&&(T+=Z()+we(),E=!1),(h[x]=="e"||h[x]=="E")&&(T+=Z(),(h[x]=="+"||h[x]=="-")&&(T+=Z()),T+=we(),E=!1);var M=+T;return w&&E&&(M>Number.MAX_SAFE_INTEGER||M<Number.MIN_SAFE_INTEGER)?BigInt(T):M}function ne(T){O();var E=[],M=0;if(Z()=="]")return E;for(je();;){var oe=T+"/"+M;E.push(k(oe)),O();var Oe=Z();if(Oe=="]")break;Oe!=","&&L(),O(),M++}return E}function G(T){O();var E={};if(Z()=="}")return E;for(je();;){var M=ce();Z()!='"'&&L();var oe=A(),Oe=T+"/"+y(oe);Ee(Oe,"key",M),Re(Oe,"keyEnd"),O(),Z()!=":"&&L(),O(),E[oe]=k(Oe),O();var ae=Z();if(ae=="}")break;ae!=","&&L(),O()}return E}function F(T){for(var E=0;E<T.length;E++)Z()!==T[E]&&L()}function Z(){le();var T=h[x];return x++,g++,T}function je(){x--,g--}function Q(){for(var T=4,E=0;T--;){E<<=4;var M=Z().toLowerCase();M>="a"&&M<="f"?E+=M.charCodeAt()-t+10:M>="0"&&M<="9"?E+=+M:L()}return String.fromCharCode(E)}function we(){for(var T="";h[x]>="0"&&h[x]<="9";)T+=Z();if(T.length)return T;le(),B()}function Re(T,E){Ee(T,E,ce())}function Ee(T,E,M){p[T]=p[T]||{},p[T][E]=M}function ce(){return{line:f,column:g,pos:x}}function B(){throw new SyntaxError("Unexpected token "+h[x]+" in JSON at position "+x)}function L(){je(),B()}function le(){if(x>=h.length)throw new SyntaxError("Unexpected end of JSON input")}},oc.stringify=function(h,j,v){if(!o(h))return;var p=0,f,g,x=typeof v=="object"?v.space:v;switch(typeof x){case"number":var w=x>10?10:x<0?0:Math.floor(x);x=w&&Ee(w," "),f=w,g=w;break;case"string":x=x.slice(0,10),f=0,g=0;for(var k=0;k<x.length;k++){var O=x[k];switch(O){case" ":g++;break;case"	":g+=4;break;case"\r":g=0;break;case`
`:g=0,p++;break;default:throw new Error("whitespace characters not allowed in JSON")}f++}break;default:x=void 0}var A="",R={},ne=0,G=0,F=0,Z=v&&v.es6&&typeof Map=="function";return je(h,0,""),{json:A,pointers:R};function je(ce,B,L){switch(Re(L,"value"),typeof ce){case"number":case"bigint":case"boolean":Q(""+ce);break;case"string":Q(u(ce));break;case"object":ce===null?Q("null"):typeof ce.toJSON=="function"?Q(u(ce.toJSON())):Array.isArray(ce)?le():Z?ce.constructor.BYTES_PER_ELEMENT?le():ce instanceof Map?E():ce instanceof Set?E(!0):T():T()}Re(L,"valueEnd");function le(){if(ce.length){Q("[");for(var M=B+1,oe=0;oe<ce.length;oe++){oe&&Q(","),we(M);var Oe=o(ce[oe])?ce[oe]:null,ae=L+"/"+oe;je(Oe,M,ae)}we(B),Q("]")}else Q("[]")}function T(){var M=Object.keys(ce);if(M.length){Q("{");for(var oe=B+1,Oe=0;Oe<M.length;Oe++){var ae=M[Oe],J=ce[ae];if(o(J)){Oe&&Q(",");var be=L+"/"+y(ae);we(oe),Re(be,"key"),Q(u(ae)),Re(be,"keyEnd"),Q(":"),x&&Q(" "),je(J,oe,be)}}we(B),Q("}")}else Q("{}")}function E(M){if(ce.size){Q("{");for(var oe=B+1,Oe=!0,ae=ce.entries(),J=ae.next();!J.done;){var be=J.value,P=be[0],I=M?!0:be[1];if(o(I)){Oe||Q(","),Oe=!1;var D=L+"/"+y(P);we(oe),Re(D,"key"),Q(u(P)),Re(D,"keyEnd"),Q(":"),x&&Q(" "),je(I,oe,D)}J=ae.next()}we(B),Q("}")}else Q("{}")}}function Q(ce){G+=ce.length,F+=ce.length,A+=ce}function we(ce){if(x){for(A+=`
`+Ee(ce,x),ne++,G=0;ce--;)p?(ne+=p,G=g):G+=g,F+=f;F+=1}}function Re(ce,B){R[ce]=R[ce]||{},R[ce][B]={line:ne,column:G,pos:F}}function Ee(ce,B){return Array(ce+1).join(B)}};var r=["number","bigint","boolean","string","object"];function o(h){return r.indexOf(typeof h)>=0}var s=/"|\\/g,a=/[\b]/g,i=/\f/g,l=/\n/g,c=/\r/g,d=/\t/g;function u(h){return h=h.replace(s,"\\$&").replace(i,"\\f").replace(a,"\\b").replace(l,"\\n").replace(c,"\\r").replace(d,"\\t"),'"'+h+'"'}var m=/~/g,b=/\//g;function y(h){return h.replace(m,"~0").replace(b,"~1")}return oc}var rj=nj();const bg=Zm(rj);class ri extends Error{constructor(t,r){super(t+" at position "+r),this.position=r}}const ac=92,Sd=47,oj=42,sp=123,sc=125,ip=91,ic=93,aj=40,sj=41,ij=32,uv=10,yg=9,jg=13,lj=8,cj=12,ku=34,lp=43,cp=45,wg=39,xg=48,kg=57,ws=44,lc=46,uj=58,dj=59,fj=65,vj=97,pj=69,hj=101,mj=70,gj=102,bj=160,yj=8192,jj=8202,wj=8239,xj=8287,kj=12288,Sj=8220,_j=8221,Cj=8216,Ej=8217,Oj=96,$j=180;function Pj(e){return e>=xg&&e<=kg||e>=fj&&e<=mj||e>=vj&&e<=gj}function xs(e){return e>=xg&&e<=kg}function Mj(e){return e>=32&&e<=1114111}function pi(e){return Rj.test(e)}const Rj=/^[,:[\]/{}()\n+]$/;function Nj(e){return pi(e)&&e!=="/"}function up(e){return Tj.test(e)||e&&fu(e.charCodeAt(0))}const Tj=/^[[{\w-]$/;function Aj(e){return e===uv||e===jg||e===yg||e===lj||e===cj}function yi(e){return e===ij||e===uv||e===yg||e===jg}function qj(e){return e===bj||e>=yj&&e<=jj||e===wj||e===xj||e===kj}function fu(e){return Sg(e)||bf(e)}function Sg(e){return e===ku||e===Sj||e===_j}function dp(e){return e===ku}function bf(e){return e===wg||e===Cj||e===Ej||e===Oj||e===$j}function fp(e){return e===wg}function ll(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const o=e.lastIndexOf(t);return o!==-1?e.substring(0,o)+(r?"":e.substring(o+1)):e}function oa(e,t){let r=e.length;if(!yi(e.charCodeAt(r-1)))return e+t;for(;yi(e.charCodeAt(r-1));)r--;return e.substring(0,r)+t+e.substring(r)}function zj(e,t,r){return e.substring(0,t)+e.substring(t+r)}function Ij(e){return/[,\n][ \t\r]*$/.test(e)}function Dj(e){return/^\w+$/.test(e)}const Lj={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Uj={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"};function ca(e){let t=0,r="";a()||G();const s=d(ws);for(s&&i(),up(e[t])&&Ij(r)?(s||(r=oa(r,",")),j()):s&&(r=ll(r,","));e.charCodeAt(t)===sc||e.charCodeAt(t)===ic;)t++,i();if(t>=e.length)return r;ne();function a(){i();const Q=y()||h()||v()||f()||g()||w();return i(),Q}function i(){const Q=t;let we=l();do we=c(),we&&(we=l());while(we);return t>Q}function l(){let Q="",we;for(;(we=yi(e.charCodeAt(t)))||qj(e.charCodeAt(t));)we?Q+=e[t]:Q+=" ",t++;return Q.length>0?(r+=Q,!0):!1}function c(){if(e.charCodeAt(t)===Sd&&e.charCodeAt(t+1)===oj){for(;t<e.length&&!Fj(e,t);)t++;return t+=2,!0}if(e.charCodeAt(t)===Sd&&e.charCodeAt(t+1)===Sd){for(;t<e.length&&e.charCodeAt(t)!==uv;)t++;return!0}return!1}function d(Q){return e.charCodeAt(t)===Q?(r+=e[t],t++,!0):!1}function u(Q){return e.charCodeAt(t)===Q?(t++,!0):!1}function m(){return u(ac)}function b(){return i(),e.charCodeAt(t)===lc&&e.charCodeAt(t+1)===lc&&e.charCodeAt(t+2)===lc?(t+=3,i(),u(ws),!0):!1}function y(){if(e.charCodeAt(t)===sp){r+="{",t++,i(),u(ws)&&i();let Q=!0;for(;t<e.length&&e.charCodeAt(t)!==sc;){let we;if(Q?(we=!0,Q=!1):(we=d(ws),we||(r=oa(r,",")),i()),b(),!(v()||w())){e.charCodeAt(t)===sc||e.charCodeAt(t)===sp||e.charCodeAt(t)===ic||e.charCodeAt(t)===ip||e[t]===void 0?r=ll(r,","):F();break}i();const Ee=d(uj),ce=t>=e.length;Ee||(up(e[t])||ce?r=oa(r,":"):Z()),a()||(Ee||ce?r+="null":Z())}return e.charCodeAt(t)===sc?(r+="}",t++):r=oa(r,"}"),!0}return!1}function h(){if(e.charCodeAt(t)===ip){r+="[",t++,i(),u(ws)&&i();let Q=!0;for(;t<e.length&&e.charCodeAt(t)!==ic;)if(Q?Q=!1:d(ws)||(r=oa(r,",")),b(),!a()){r=ll(r,",");break}return e.charCodeAt(t)===ic?(r+="]",t++):r=oa(r,"]"),!0}return!1}function j(){let Q=!0,we=!0;for(;we;)Q?Q=!1:d(ws)||(r=oa(r,",")),we=a();we||(r=ll(r,",")),r=`[
`.concat(r,`
]`)}function v(){let Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,we=e.charCodeAt(t)===ac;if(we&&(t++,we=!0),fu(e.charCodeAt(t))){const Re=dp(e.charCodeAt(t))?dp:fp(e.charCodeAt(t))?fp:bf(e.charCodeAt(t))?bf:Sg,Ee=t,ce=r.length;let B='"';for(t++;;){if(t>=e.length){const L=k(t-1);return!Q&&pi(e.charAt(L))?(t=Ee,r=r.substring(0,ce),v(!0)):(B=oa(B,'"'),r+=B,!0)}else if(Re(e.charCodeAt(t))){const L=t,le=B.length;if(B+='"',t++,r+=B,i(),Q||t>=e.length||pi(e.charAt(t))||fu(e.charCodeAt(t))||xs(e.charCodeAt(t)))return p(),!0;if(pi(e.charAt(k(L-1))))return t=Ee,r=r.substring(0,ce),v(!0);r=r.substring(0,ce),t=L+1,B=B.substring(0,le)+"\\"+B.substring(le)}else{if(Q&&pi(e[t]))return B=oa(B,'"'),r+=B,p(),!0;if(e.charCodeAt(t)===ac){const L=e.charAt(t+1);if(Uj[L]!==void 0)B+=e.slice(t,t+2),t+=2;else if(L==="u"){let T=2;for(;T<6&&Pj(e.charCodeAt(t+T));)T++;T===6?(B+=e.slice(t,t+6),t+=6):t+T>=e.length?t=e.length:je()}else B+=L,t+=2}else{const L=e.charAt(t),le=e.charCodeAt(t);le===ku&&e.charCodeAt(t-1)!==ac?(B+="\\"+L,t++):Aj(le)?(B+=Lj[L],t++):(Mj(le)||R(L),B+=L,t++)}}we&&m()}}return!1}function p(){let Q=!1;for(i();e.charCodeAt(t)===lp;){Q=!0,t++,i(),r=ll(r,'"',!0);const we=r.length;v()?r=zj(r,we,1):r=oa(r,'"')}return Q}function f(){const Q=t;if(e.charCodeAt(t)===cp){if(t++,O())return A(Q),!0;if(!xs(e.charCodeAt(t)))return t=Q,!1}for(;xs(e.charCodeAt(t));)t++;if(e.charCodeAt(t)===lc){if(t++,O())return A(Q),!0;if(!xs(e.charCodeAt(t)))return t=Q,!1;for(;xs(e.charCodeAt(t));)t++}if(e.charCodeAt(t)===hj||e.charCodeAt(t)===pj){if(t++,(e.charCodeAt(t)===cp||e.charCodeAt(t)===lp)&&t++,O())return A(Q),!0;if(!xs(e.charCodeAt(t)))return t=Q,!1;for(;xs(e.charCodeAt(t));)t++}if(!O())return t=Q,!1;if(t>Q){const we=e.slice(Q,t),Re=/^0\d/.test(we);return r+=Re?'"'.concat(we,'"'):we,!0}return!1}function g(){return x("true","true")||x("false","false")||x("null","null")||x("True","true")||x("False","false")||x("None","null")}function x(Q,we){return e.slice(t,t+Q.length)===Q?(r+=we,t+=Q.length,!0):!1}function w(){const Q=t;for(;t<e.length&&!Nj(e[t])&&!fu(e.charCodeAt(t));)t++;if(t>Q){if(e.charCodeAt(t)===aj&&Dj(e.slice(Q,t).trim()))return t++,a(),e.charCodeAt(t)===sj&&(t++,e.charCodeAt(t)===dj&&t++),!0;{for(;yi(e.charCodeAt(t-1))&&t>0;)t--;const we=e.slice(Q,t);return r+=we==="undefined"?"null":JSON.stringify(we),e.charCodeAt(t)===ku&&t++,!0}}}function k(Q){let we=Q;for(;we>0&&yi(e.charCodeAt(we));)we--;return we}function O(){return t>=e.length||pi(e[t])||yi(e.charCodeAt(t))}function A(Q){r+=e.slice(Q,t)+"0"}function R(Q){throw new ri("Invalid character "+JSON.stringify(Q),t)}function ne(){throw new ri("Unexpected character "+JSON.stringify(e[t]),t)}function G(){throw new ri("Unexpected end of json string",e.length)}function F(){throw new ri("Object key expected",t)}function Z(){throw new ri("Colon expected",t)}function je(){const Q=e.slice(t,t+6);throw new ri('Invalid unicode character "'.concat(Q,'"'),t)}}function Fj(e,t){return e[t]==="*"&&e[t+1]==="/"}const dv=e=>Array.isArray(e),Vj=e=>typeof e=="string";function Qr(e){return(...t)=>{const r=t.map(a=>So(a)),o=r[0],s=r[1];return r.length===1?a=>e(o(a)):r.length===2?a=>e(o(a),s(a)):a=>e(...r.map(i=>i(a)))}}const ji={pipe:(...e)=>{const t=e.map(r=>So(r));return r=>t.reduce((o,s)=>s(o),r)},object:e=>{const t=Object.keys(e).map(r=>[r,So(e[r])]);return r=>{const o={};for(const[s,a]of t)o[s]=a(r);return o}},array:(...e)=>{const t=e.map(r=>So(r));return r=>t.map(o=>o(r))},get:(...e)=>{if(e.length===0)return t=>t;if(e.length===1){const t=e[0];return r=>r?.[t]}return t=>{let r=t;for(const o of e)r=r?.[o];return r}},map:e=>{const t=So(e);return r=>r.map(t)},filter:e=>{const t=So(e);return r=>r.filter(t)},sort:(e=["get"],t)=>{const r=So(e),o=t==="desc"?-1:1;function s(a,i){const l=r(a),c=r(i);return l>c?o:l<c?-o:0}return a=>a.slice().sort(s)},pick:(...e)=>{const t=e.map(([o,...s])=>[s[s.length-1],ji.get(...s)]),r=(o,s)=>{const a={};for(const[i,l]of s)a[i]=l(o);return a};return o=>dv(o)?o.map(s=>r(s,t)):r(o,t)},groupBy:e=>{const t=So(e);return r=>{const o={};for(const s of r){const a=t(s);o[a]?o[a].push(s):o[a]=[s]}return o}},keyBy:e=>{const t=So(e);return r=>{const o={};for(const s of r){const a=t(s);o[a]=o[a]??s}return o}},flatten:()=>e=>e.flat(),uniq:()=>e=>[...new Set(e)],uniqBy:e=>t=>Object.values(ji.groupBy(e)(t)).map(r=>r[0]),limit:e=>t=>t.slice(0,e),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>e.reduce((t,r)=>t*r),sum:()=>e=>e.reduce((t,r)=>t+r),average:()=>e=>ji.sum()(e)/e.length,min:()=>e=>Math.min(...e),max:()=>e=>Math.max(...e),in:(e,t)=>{const r=So(e),o=So(t);return s=>o(s).includes(r(s))},"not in":(e,t)=>{const r=ji.in(e,t);return o=>!r(o)},regex:(e,t,r)=>{const o=new RegExp(t,r),s=So(e);return a=>o.test(s(a))},and:Qr((e,t)=>e&&t),or:Qr((e,t)=>e||t),not:Qr(e=>!e),exists:Qr(e=>e!==void 0),eq:Qr((e,t)=>e===t),gt:Qr((e,t)=>e>t),gte:Qr((e,t)=>e>=t),lt:Qr((e,t)=>e<t),lte:Qr((e,t)=>e<=t),ne:Qr((e,t)=>e!==t),add:Qr((e,t)=>e+t),subtract:Qr((e,t)=>e-t),multiply:Qr((e,t)=>e*t),divide:Qr((e,t)=>e/t),pow:Qr((e,t)=>e**t),mod:Qr((e,t)=>e%t),abs:Qr(Math.abs),round:Qr((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`)},cc=[];function So(e,t){cc.unshift({...ji,...cc[0]});try{const r=dv(e)?Bj(e,cc[0]):()=>e;return o=>{try{return r(o)}catch(s){throw s.jsonquery=[{data:o,query:e},...s.jsonquery??[]],s}}}finally{cc.shift()}}function Bj(e,t){const[r,...o]=e,s=t[r];if(!s)throw new Error(`Unknown function '${r}'`);return s(...o)}const _g={and:"and",or:"or",eq:"==",gt:">",gte:">=",lt:"<",lte:"<=",ne:"!=",add:"+",subtract:"-",multiply:"*",divide:"/",pow:"^",mod:"%",in:"in","not in":"not in"},Wj=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Hj=/^[a-zA-Z_$][a-zA-Z\d_$]*/,Kj=/^"(?:[^"\\]|\\.)*"/,Jj=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Qj=/^(0|[1-9][0-9]*)/,Gj=/^(true|false|null)/,Yj=/^[ \n\t\r]+/;function Cg(e,t){const r=()=>{v();const w=o();if(v(),e[g]==="|"){const k=[w];for(;e[g]==="|";)g++,v(),k.push(o());return["pipe",...k]}return w},o=()=>{const w={..._g},k=s();v();for(const O of Object.keys(w).sort((A,R)=>R.length-A.length)){const A=w[O];if(e.substring(g,g+A.length)===A){g+=A.length,v();const R=s();return[O,k,R]}}return k},s=()=>{if(e[g]==="("){g++;const w=r();return p(")"),w}return a()},a=()=>{const w=[];if(e[g]==="."){for(;e[g]===".";)g++,w.push(d()??u()??b()??f("Property expected"));return["get",...w]}return i()},i=()=>{const w=g,k=u();if(v(),!k||e[g]!=="(")return g=w,l();g++,!ji[k]&&f(`Unknown function '${k}'`),v();const O=e[g]!==")"?[r()]:[];for(;g<e.length&&e[g]!==")";)v(),p(","),O.push(r());return p(")"),[k,...O]},l=()=>{if(e[g]==="{"){g++,v();const w={};let k=!0;for(;g<e.length&&e[g]!=="}";){k?k=!1:(p(","),v());const O=d()??u()??b()??f("Key expected");v(),p(":"),w[O]=r()}return p("}"),["object",w]}return c()},c=()=>{if(e[g]==="["){g++,v();const w=[];let k=!0;for(;g<e.length&&e[g]!=="]";)k?k=!1:(p(","),v()),w.push(r());return p("]"),["array",...w]}return d()??m()??y()},d=()=>j(Kj,JSON.parse),u=()=>j(Hj,w=>w),m=()=>j(Jj,JSON.parse),b=()=>j(Qj,JSON.parse),y=()=>{const w=j(Gj,JSON.parse);if(w!==void 0)return w;f("Value expected")},h=()=>{v(),g<e.length&&f(`Unexpected part '${e.substring(g)}'`)},j=(w,k)=>{const O=e.substring(g).match(w);if(O)return g+=O[0].length,k(O[0])},v=()=>j(Yj,w=>w),p=w=>{e[g]!==w&&f(`Character '${w}' expected`),g++},f=(w,k=g)=>{throw new SyntaxError(`${w} (pos: ${k})`)};let g=0;const x=r();return h(),x}const Xj=40,Zj="  ",ew=(e,t)=>{const r=Zj,o=(d,u)=>dv(d)?s(d,u):JSON.stringify(d),s=(d,u)=>{var m;const[b,...y]=d;if(b==="get"&&y.length>0)return i(y);if(b==="pipe"){const p=y.map(f=>o(f,u+r));return c(p,[""," | ",""],["",`
${u+r}| `,""])}if(b==="object")return a(y[0],u);if(b==="array"){const p=y.map(f=>o(f,u));return c(p,["[",", ","]"],[`[
${u+r}`,`,
${u+r}`,`
${u}]`])}const h=((m=void 0)==null?void 0:m[b])??_g[b];if(h&&y.length===2){const[p,f]=y,g=o(p,u),x=o(f,u);return`(${g} ${h} ${x})`}const j=y.length===1?u:u+r,v=y.map(p=>o(p,j));return y.length===1&&v[0][0]==="("?`${b}${v}`:c(v,[`${b}(`,", ",")"],y.length===1?[`${b}(`,`,
${u}`,")"]:[`${b}(
${j}`,`,
${j}`,`
${u})`])},a=(d,u)=>{const m=u+r,b=Object.entries(d).map(([y,h])=>`${l(y)}: ${o(h,m)}`);return c(b,["{ ",", "," }"],[`{
${m}`,`,
${m}`,`
${u}}`])},i=d=>d.map(u=>`.${l(u)}`).join(""),l=d=>Wj.test(d)?d:JSON.stringify(d),c=(d,[u,m,b],[y,h,j])=>u.length+d.reduce((v,p)=>v+p.length+m.length,0)-m.length+b.length<=Xj?u+d.join(m)+b:y+d.join(h)+j;return o(e,"")};function tw(e,t,r){return So(Vj(t)?Cg(t):t)(e)}const nw={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},rw={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Eg=rw,Og={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},ow={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},yf={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},aw={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z"]},Cl={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},$g={prefix:"fas",iconName:"paste",icon:[512,512,["file-clipboard"],"f0ea","M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},sw={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]},iw={prefix:"fas",iconName:"scissors",icon:[512,512,[9984,9986,9988,"cut"],"f0c4","M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Ei=iw,lw={prefix:"fas",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},cw=lw,uw={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},dw={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Pg=dw,fw={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},vw=fw,pw={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Mg={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},hw={prefix:"fas",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},mw=hw,vp={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},Rg={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},Su={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},_u={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},is={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},gw={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Oi={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},bw={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},fv=bw,yw={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},vv=yw,jw={prefix:"fas",iconName:"crop-simple",icon:[512,512,["crop-alt"],"f565","M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l224 0 0-64-224 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64L160 64l0 64 224 0 0 352z"]},ww=jw,xw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},kw=xw,qa={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},Sw={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},Ng=Sw,uc={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[448,512,[8644,"exchange"],"f0ec","M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]},_w={prefix:"fas",iconName:"arrow-down-short-wide",icon:[576,512,["sort-amount-desc","sort-amount-down-alt"],"f884","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Cu=_w,Cw={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},pp={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ew={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Zu=Ew,Ow={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ya={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},wi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Tg={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},$w=Tg,ed=Tg,Pw={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"]},Mw={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"]},Ag={prefix:"fas",iconName:"clone",icon:[512,512,[],"f24d","M288 448L64 448l0-224 64 0 0-64-64 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-64 0 0 64zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"]},pv={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Rw={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Us=Rw;var _d={exports:{}},hp;function Nw(){if(hp)return _d.exports;hp=1;/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var e=function(t,r){var o,s,a=1,i=0,l=0,c=String.alphabet;function d(u,m,b){if(b){for(o=m;b=d(u,o),b<76&&b>65;)++o;return+u.slice(m-1,o)}return b=c&&c.indexOf(u.charAt(m)),b>-1?b+76:(b=u.charCodeAt(m)||0,b<45||b>127?b:b<46?65:b<48?b-1:b<58?b+18:b<65?b-11:b<91?b+11:b<97?b-37:b<123?b+5:b-63)}if((t+="")!=(r+="")){for(;a;)if(s=d(t,i++),a=d(r,l++),s<76&&a<76&&s>66&&a>66&&(s=d(t,i,i),a=d(r,l,i=o),l=o),s!=a)return s<a?-1:1}return 0};try{_d.exports=e}catch{String.naturalCompare=e}return _d.exports}var Tw=Nw();const Aw=Zm(Tw);var dc={exports:{}},Cd={},ya={},ks={},Ed={},Od={},$d={},mp;function Eu(){return mp||(mp=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class r extends t{constructor(f){if(super(),!e.IDENTIFIER.test(f))throw new Error("CodeGen: name must be a valid identifier");this.str=f}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=r;class o extends t{constructor(f){super(),this._items=typeof f=="string"?[f]:f}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const f=this._items[0];return f===""||f==='""'}get str(){var f;return(f=this._str)!==null&&f!==void 0?f:this._str=this._items.reduce((g,x)=>`${g}${x}`,"")}get names(){var f;return(f=this._names)!==null&&f!==void 0?f:this._names=this._items.reduce((g,x)=>(x instanceof r&&(g[x.str]=(g[x.str]||0)+1),g),{})}}e._Code=o,e.nil=new o("");function s(p,...f){const g=[p[0]];let x=0;for(;x<f.length;)l(g,f[x]),g.push(p[++x]);return new o(g)}e._=s;const a=new o("+");function i(p,...f){const g=[y(p[0])];let x=0;for(;x<f.length;)g.push(a),l(g,f[x]),g.push(a,y(p[++x]));return c(g),new o(g)}e.str=i;function l(p,f){f instanceof o?p.push(...f._items):f instanceof r?p.push(f):p.push(m(f))}e.addCodeArg=l;function c(p){let f=1;for(;f<p.length-1;){if(p[f]===a){const g=d(p[f-1],p[f+1]);if(g!==void 0){p.splice(f-1,3,g);continue}p[f++]="+"}f++}}function d(p,f){if(f==='""')return p;if(p==='""')return f;if(typeof p=="string")return f instanceof r||p[p.length-1]!=='"'?void 0:typeof f!="string"?`${p.slice(0,-1)}${f}"`:f[0]==='"'?p.slice(0,-1)+f.slice(1):void 0;if(typeof f=="string"&&f[0]==='"'&&!(p instanceof r))return`"${p}${f.slice(1)}`}function u(p,f){return f.emptyStr()?p:p.emptyStr()?f:i`${p}${f}`}e.strConcat=u;function m(p){return typeof p=="number"||typeof p=="boolean"||p===null?p:y(Array.isArray(p)?p.join(","):p)}function b(p){return new o(y(p))}e.stringify=b;function y(p){return JSON.stringify(p).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=y;function h(p){return typeof p=="string"&&e.IDENTIFIER.test(p)?new o(`.${p}`):s`[${p}]`}e.getProperty=h;function j(p){if(typeof p=="string"&&e.IDENTIFIER.test(p))return new o(`${p}`);throw new Error(`CodeGen: invalid export name: ${p}, use explicit $id name mapping`)}e.getEsmExportName=j;function v(p){return new o(p.toString())}e.regexpCode=v}($d)),$d}var Pd={},gp;function bp(){return gp||(gp=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=Eu();class r extends Error{constructor(d){super(`CodeGen: "code" for ${d} not defined`),this.value=d.value}}var o;(function(c){c[c.Started=0]="Started",c[c.Completed=1]="Completed"})(o||(e.UsedValueState=o={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class s{constructor({prefixes:d,parent:u}={}){this._names={},this._prefixes=d,this._parent=u}toName(d){return d instanceof t.Name?d:this.name(d)}name(d){return new t.Name(this._newName(d))}_newName(d){const u=this._names[d]||this._nameGroup(d);return`${d}${u.index++}`}_nameGroup(d){var u,m;if(!((m=(u=this._parent)===null||u===void 0?void 0:u._prefixes)===null||m===void 0)&&m.has(d)||this._prefixes&&!this._prefixes.has(d))throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);return this._names[d]={prefix:d,index:0}}}e.Scope=s;class a extends t.Name{constructor(d,u){super(u),this.prefix=d}setValue(d,{property:u,itemIndex:m}){this.value=d,this.scopePath=(0,t._)`.${new t.Name(u)}[${m}]`}}e.ValueScopeName=a;const i=(0,t._)`\n`;class l extends s{constructor(d){super(d),this._values={},this._scope=d.scope,this.opts={...d,_n:d.lines?i:t.nil}}get(){return this._scope}name(d){return new a(d,this._newName(d))}value(d,u){var m;if(u.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const b=this.toName(d),{prefix:y}=b,h=(m=u.key)!==null&&m!==void 0?m:u.ref;let j=this._values[y];if(j){const f=j.get(h);if(f)return f}else j=this._values[y]=new Map;j.set(h,b);const v=this._scope[y]||(this._scope[y]=[]),p=v.length;return v[p]=u.ref,b.setValue(u,{property:y,itemIndex:p}),b}getValue(d,u){const m=this._values[d];if(m)return m.get(u)}scopeRefs(d,u=this._values){return this._reduceValues(u,m=>{if(m.scopePath===void 0)throw new Error(`CodeGen: name "${m}" has no value`);return(0,t._)`${d}${m.scopePath}`})}scopeCode(d=this._values,u,m){return this._reduceValues(d,b=>{if(b.value===void 0)throw new Error(`CodeGen: name "${b}" has no value`);return b.value.code},u,m)}_reduceValues(d,u,m={},b){let y=t.nil;for(const h in d){const j=d[h];if(!j)continue;const v=m[h]=m[h]||new Map;j.forEach(p=>{if(v.has(p))return;v.set(p,o.Started);let f=u(p);if(f){const g=this.opts.es5?e.varKinds.var:e.varKinds.const;y=(0,t._)`${y}${g} ${p} = ${f};${this.opts._n}`}else if(f=b?.(p))y=(0,t._)`${y}${f}${this.opts._n}`;else throw new r(p);v.set(p,o.Completed)})}return y}}e.ValueScope=l}(Pd)),Pd}var yp;function gn(){return yp||(yp=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=Eu(),r=bp();var o=Eu();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return o._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return o.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return o.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return o.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return o.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return o.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return o.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return o.Name}});var s=bp();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return s.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return s.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return s.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return s.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class a{optimizeNodes(){return this}optimizeNames(E,M){return this}}class i extends a{constructor(E,M,oe){super(),this.varKind=E,this.name=M,this.rhs=oe}render({es5:E,_n:M}){const oe=E?r.varKinds.var:this.varKind,Oe=this.rhs===void 0?"":` = ${this.rhs}`;return`${oe} ${this.name}${Oe};`+M}optimizeNames(E,M){if(E[this.name.str])return this.rhs&&(this.rhs=je(this.rhs,E,M)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class l extends a{constructor(E,M,oe){super(),this.lhs=E,this.rhs=M,this.sideEffects=oe}render({_n:E}){return`${this.lhs} = ${this.rhs};`+E}optimizeNames(E,M){if(!(this.lhs instanceof t.Name&&!E[this.lhs.str]&&!this.sideEffects))return this.rhs=je(this.rhs,E,M),this}get names(){const E=this.lhs instanceof t.Name?{}:{...this.lhs.names};return Z(E,this.rhs)}}class c extends l{constructor(E,M,oe,Oe){super(E,oe,Oe),this.op=M}render({_n:E}){return`${this.lhs} ${this.op}= ${this.rhs};`+E}}class d extends a{constructor(E){super(),this.label=E,this.names={}}render({_n:E}){return`${this.label}:`+E}}class u extends a{constructor(E){super(),this.label=E,this.names={}}render({_n:E}){return`break${this.label?` ${this.label}`:""};`+E}}class m extends a{constructor(E){super(),this.error=E}render({_n:E}){return`throw ${this.error};`+E}get names(){return this.error.names}}class b extends a{constructor(E){super(),this.code=E}render({_n:E}){return`${this.code};`+E}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(E,M){return this.code=je(this.code,E,M),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class y extends a{constructor(E=[]){super(),this.nodes=E}render(E){return this.nodes.reduce((M,oe)=>M+oe.render(E),"")}optimizeNodes(){const{nodes:E}=this;let M=E.length;for(;M--;){const oe=E[M].optimizeNodes();Array.isArray(oe)?E.splice(M,1,...oe):oe?E[M]=oe:E.splice(M,1)}return E.length>0?this:void 0}optimizeNames(E,M){const{nodes:oe}=this;let Oe=oe.length;for(;Oe--;){const ae=oe[Oe];ae.optimizeNames(E,M)||(Q(E,ae.names),oe.splice(Oe,1))}return oe.length>0?this:void 0}get names(){return this.nodes.reduce((E,M)=>F(E,M.names),{})}}class h extends y{render(E){return"{"+E._n+super.render(E)+"}"+E._n}}class j extends y{}class v extends h{}v.kind="else";class p extends h{constructor(E,M){super(M),this.condition=E}render(E){let M=`if(${this.condition})`+super.render(E);return this.else&&(M+="else "+this.else.render(E)),M}optimizeNodes(){super.optimizeNodes();const E=this.condition;if(E===!0)return this.nodes;let M=this.else;if(M){const oe=M.optimizeNodes();M=this.else=Array.isArray(oe)?new v(oe):oe}if(M)return E===!1?M instanceof p?M:M.nodes:this.nodes.length?this:new p(we(E),M instanceof p?[M]:M.nodes);if(!(E===!1||!this.nodes.length))return this}optimizeNames(E,M){var oe;if(this.else=(oe=this.else)===null||oe===void 0?void 0:oe.optimizeNames(E,M),!!(super.optimizeNames(E,M)||this.else))return this.condition=je(this.condition,E,M),this}get names(){const E=super.names;return Z(E,this.condition),this.else&&F(E,this.else.names),E}}p.kind="if";class f extends h{}f.kind="for";class g extends f{constructor(E){super(),this.iteration=E}render(E){return`for(${this.iteration})`+super.render(E)}optimizeNames(E,M){if(super.optimizeNames(E,M))return this.iteration=je(this.iteration,E,M),this}get names(){return F(super.names,this.iteration.names)}}class x extends f{constructor(E,M,oe,Oe){super(),this.varKind=E,this.name=M,this.from=oe,this.to=Oe}render(E){const M=E.es5?r.varKinds.var:this.varKind,{name:oe,from:Oe,to:ae}=this;return`for(${M} ${oe}=${Oe}; ${oe}<${ae}; ${oe}++)`+super.render(E)}get names(){const E=Z(super.names,this.from);return Z(E,this.to)}}class w extends f{constructor(E,M,oe,Oe){super(),this.loop=E,this.varKind=M,this.name=oe,this.iterable=Oe}render(E){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(E)}optimizeNames(E,M){if(super.optimizeNames(E,M))return this.iterable=je(this.iterable,E,M),this}get names(){return F(super.names,this.iterable.names)}}class k extends h{constructor(E,M,oe){super(),this.name=E,this.args=M,this.async=oe}render(E){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(E)}}k.kind="func";class O extends y{render(E){return"return "+super.render(E)}}O.kind="return";class A extends h{render(E){let M="try"+super.render(E);return this.catch&&(M+=this.catch.render(E)),this.finally&&(M+=this.finally.render(E)),M}optimizeNodes(){var E,M;return super.optimizeNodes(),(E=this.catch)===null||E===void 0||E.optimizeNodes(),(M=this.finally)===null||M===void 0||M.optimizeNodes(),this}optimizeNames(E,M){var oe,Oe;return super.optimizeNames(E,M),(oe=this.catch)===null||oe===void 0||oe.optimizeNames(E,M),(Oe=this.finally)===null||Oe===void 0||Oe.optimizeNames(E,M),this}get names(){const E=super.names;return this.catch&&F(E,this.catch.names),this.finally&&F(E,this.finally.names),E}}class R extends h{constructor(E){super(),this.error=E}render(E){return`catch(${this.error})`+super.render(E)}}R.kind="catch";class ne extends h{render(E){return"finally"+super.render(E)}}ne.kind="finally";class G{constructor(E,M={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...M,_n:M.lines?`
`:""},this._extScope=E,this._scope=new r.Scope({parent:E}),this._nodes=[new j]}toString(){return this._root.render(this.opts)}name(E){return this._scope.name(E)}scopeName(E){return this._extScope.name(E)}scopeValue(E,M){const oe=this._extScope.value(E,M);return(this._values[oe.prefix]||(this._values[oe.prefix]=new Set)).add(oe),oe}getScopeValue(E,M){return this._extScope.getValue(E,M)}scopeRefs(E){return this._extScope.scopeRefs(E,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(E,M,oe,Oe){const ae=this._scope.toName(M);return oe!==void 0&&Oe&&(this._constants[ae.str]=oe),this._leafNode(new i(E,ae,oe)),ae}const(E,M,oe){return this._def(r.varKinds.const,E,M,oe)}let(E,M,oe){return this._def(r.varKinds.let,E,M,oe)}var(E,M,oe){return this._def(r.varKinds.var,E,M,oe)}assign(E,M,oe){return this._leafNode(new l(E,M,oe))}add(E,M){return this._leafNode(new c(E,e.operators.ADD,M))}code(E){return typeof E=="function"?E():E!==t.nil&&this._leafNode(new b(E)),this}object(...E){const M=["{"];for(const[oe,Oe]of E)M.length>1&&M.push(","),M.push(oe),(oe!==Oe||this.opts.es5)&&(M.push(":"),(0,t.addCodeArg)(M,Oe));return M.push("}"),new t._Code(M)}if(E,M,oe){if(this._blockNode(new p(E)),M&&oe)this.code(M).else().code(oe).endIf();else if(M)this.code(M).endIf();else if(oe)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(E){return this._elseNode(new p(E))}else(){return this._elseNode(new v)}endIf(){return this._endBlockNode(p,v)}_for(E,M){return this._blockNode(E),M&&this.code(M).endFor(),this}for(E,M){return this._for(new g(E),M)}forRange(E,M,oe,Oe,ae=this.opts.es5?r.varKinds.var:r.varKinds.let){const J=this._scope.toName(E);return this._for(new x(ae,J,M,oe),()=>Oe(J))}forOf(E,M,oe,Oe=r.varKinds.const){const ae=this._scope.toName(E);if(this.opts.es5){const J=M instanceof t.Name?M:this.var("_arr",M);return this.forRange("_i",0,(0,t._)`${J}.length`,be=>{this.var(ae,(0,t._)`${J}[${be}]`),oe(ae)})}return this._for(new w("of",Oe,ae,M),()=>oe(ae))}forIn(E,M,oe,Oe=this.opts.es5?r.varKinds.var:r.varKinds.const){if(this.opts.ownProperties)return this.forOf(E,(0,t._)`Object.keys(${M})`,oe);const ae=this._scope.toName(E);return this._for(new w("in",Oe,ae,M),()=>oe(ae))}endFor(){return this._endBlockNode(f)}label(E){return this._leafNode(new d(E))}break(E){return this._leafNode(new u(E))}return(E){const M=new O;if(this._blockNode(M),this.code(E),M.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(O)}try(E,M,oe){if(!M&&!oe)throw new Error('CodeGen: "try" without "catch" and "finally"');const Oe=new A;if(this._blockNode(Oe),this.code(E),M){const ae=this.name("e");this._currNode=Oe.catch=new R(ae),M(ae)}return oe&&(this._currNode=Oe.finally=new ne,this.code(oe)),this._endBlockNode(R,ne)}throw(E){return this._leafNode(new m(E))}block(E,M){return this._blockStarts.push(this._nodes.length),E&&this.code(E).endBlock(M),this}endBlock(E){const M=this._blockStarts.pop();if(M===void 0)throw new Error("CodeGen: not in self-balancing block");const oe=this._nodes.length-M;if(oe<0||E!==void 0&&oe!==E)throw new Error(`CodeGen: wrong number of nodes: ${oe} vs ${E} expected`);return this._nodes.length=M,this}func(E,M=t.nil,oe,Oe){return this._blockNode(new k(E,M,oe)),Oe&&this.code(Oe).endFunc(),this}endFunc(){return this._endBlockNode(k)}optimize(E=1){for(;E-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(E){return this._currNode.nodes.push(E),this}_blockNode(E){this._currNode.nodes.push(E),this._nodes.push(E)}_endBlockNode(E,M){const oe=this._currNode;if(oe instanceof E||M&&oe instanceof M)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${M?`${E.kind}/${M.kind}`:E.kind}"`)}_elseNode(E){const M=this._currNode;if(!(M instanceof p))throw new Error('CodeGen: "else" without "if"');return this._currNode=M.else=E,this}get _root(){return this._nodes[0]}get _currNode(){const E=this._nodes;return E[E.length-1]}set _currNode(E){const M=this._nodes;M[M.length-1]=E}}e.CodeGen=G;function F(T,E){for(const M in E)T[M]=(T[M]||0)+(E[M]||0);return T}function Z(T,E){return E instanceof t._CodeOrName?F(T,E.names):T}function je(T,E,M){if(T instanceof t.Name)return oe(T);if(!Oe(T))return T;return new t._Code(T._items.reduce((ae,J)=>(J instanceof t.Name&&(J=oe(J)),J instanceof t._Code?ae.push(...J._items):ae.push(J),ae),[]));function oe(ae){const J=M[ae.str];return J===void 0||E[ae.str]!==1?ae:(delete E[ae.str],J)}function Oe(ae){return ae instanceof t._Code&&ae._items.some(J=>J instanceof t.Name&&E[J.str]===1&&M[J.str]!==void 0)}}function Q(T,E){for(const M in E)T[M]=(T[M]||0)-(E[M]||0)}function we(T){return typeof T=="boolean"||typeof T=="number"||T===null?!T:(0,t._)`!${le(T)}`}e.not=we;const Re=L(e.operators.AND);function Ee(...T){return T.reduce(Re)}e.and=Ee;const ce=L(e.operators.OR);function B(...T){return T.reduce(ce)}e.or=B;function L(T){return(E,M)=>E===t.nil?M:M===t.nil?E:(0,t._)`${le(E)} ${T} ${le(M)}`}function le(T){return T instanceof t.Name?T:(0,t._)`(${T})`}}(Od)),Od}var cn={},jp;function zn(){if(jp)return cn;jp=1,Object.defineProperty(cn,"__esModule",{value:!0}),cn.checkStrictMode=cn.getErrorPath=cn.Type=cn.useFunc=cn.setEvaluated=cn.evaluatedPropsToName=cn.mergeEvaluated=cn.eachItem=cn.unescapeJsonPointer=cn.escapeJsonPointer=cn.escapeFragment=cn.unescapeFragment=cn.schemaRefOrVal=cn.schemaHasRulesButRef=cn.schemaHasRules=cn.checkUnknownRules=cn.alwaysValidSchema=cn.toHash=void 0;const e=gn(),t=Eu();function r(w){const k={};for(const O of w)k[O]=!0;return k}cn.toHash=r;function o(w,k){return typeof k=="boolean"?k:Object.keys(k).length===0?!0:(s(w,k),!a(k,w.self.RULES.all))}cn.alwaysValidSchema=o;function s(w,k=w.schema){const{opts:O,self:A}=w;if(!O.strictSchema||typeof k=="boolean")return;const R=A.RULES.keywords;for(const ne in k)R[ne]||x(w,`unknown keyword: "${ne}"`)}cn.checkUnknownRules=s;function a(w,k){if(typeof w=="boolean")return!w;for(const O in w)if(k[O])return!0;return!1}cn.schemaHasRules=a;function i(w,k){if(typeof w=="boolean")return!w;for(const O in w)if(O!=="$ref"&&k.all[O])return!0;return!1}cn.schemaHasRulesButRef=i;function l({topSchemaRef:w,schemaPath:k},O,A,R){if(!R){if(typeof O=="number"||typeof O=="boolean")return O;if(typeof O=="string")return(0,e._)`${O}`}return(0,e._)`${w}${k}${(0,e.getProperty)(A)}`}cn.schemaRefOrVal=l;function c(w){return m(decodeURIComponent(w))}cn.unescapeFragment=c;function d(w){return encodeURIComponent(u(w))}cn.escapeFragment=d;function u(w){return typeof w=="number"?`${w}`:w.replace(/~/g,"~0").replace(/\//g,"~1")}cn.escapeJsonPointer=u;function m(w){return w.replace(/~1/g,"/").replace(/~0/g,"~")}cn.unescapeJsonPointer=m;function b(w,k){if(Array.isArray(w))for(const O of w)k(O);else k(w)}cn.eachItem=b;function y({mergeNames:w,mergeToName:k,mergeValues:O,resultToName:A}){return(R,ne,G,F)=>{const Z=G===void 0?ne:G instanceof e.Name?(ne instanceof e.Name?w(R,ne,G):k(R,ne,G),G):ne instanceof e.Name?(k(R,G,ne),ne):O(ne,G);return F===e.Name&&!(Z instanceof e.Name)?A(R,Z):Z}}cn.mergeEvaluated={props:y({mergeNames:(w,k,O)=>w.if((0,e._)`${O} !== true && ${k} !== undefined`,()=>{w.if((0,e._)`${k} === true`,()=>w.assign(O,!0),()=>w.assign(O,(0,e._)`${O} || {}`).code((0,e._)`Object.assign(${O}, ${k})`))}),mergeToName:(w,k,O)=>w.if((0,e._)`${O} !== true`,()=>{k===!0?w.assign(O,!0):(w.assign(O,(0,e._)`${O} || {}`),j(w,O,k))}),mergeValues:(w,k)=>w===!0?!0:{...w,...k},resultToName:h}),items:y({mergeNames:(w,k,O)=>w.if((0,e._)`${O} !== true && ${k} !== undefined`,()=>w.assign(O,(0,e._)`${k} === true ? true : ${O} > ${k} ? ${O} : ${k}`)),mergeToName:(w,k,O)=>w.if((0,e._)`${O} !== true`,()=>w.assign(O,k===!0?!0:(0,e._)`${O} > ${k} ? ${O} : ${k}`)),mergeValues:(w,k)=>w===!0?!0:Math.max(w,k),resultToName:(w,k)=>w.var("items",k)})};function h(w,k){if(k===!0)return w.var("props",!0);const O=w.var("props",(0,e._)`{}`);return k!==void 0&&j(w,O,k),O}cn.evaluatedPropsToName=h;function j(w,k,O){Object.keys(O).forEach(A=>w.assign((0,e._)`${k}${(0,e.getProperty)(A)}`,!0))}cn.setEvaluated=j;const v={};function p(w,k){return w.scopeValue("func",{ref:k,code:v[k.code]||(v[k.code]=new t._Code(k.code))})}cn.useFunc=p;var f;(function(w){w[w.Num=0]="Num",w[w.Str=1]="Str"})(f||(cn.Type=f={}));function g(w,k,O){if(w instanceof e.Name){const A=k===f.Num;return O?A?(0,e._)`"[" + ${w} + "]"`:(0,e._)`"['" + ${w} + "']"`:A?(0,e._)`"/" + ${w}`:(0,e._)`"/" + ${w}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return O?(0,e.getProperty)(w).toString():"/"+u(w)}cn.getErrorPath=g;function x(w,k,O=w.opts.strictSchema){if(O){if(k=`strict mode: ${k}`,O===!0)throw new Error(k);w.self.logger.warn(k)}}return cn.checkStrictMode=x,cn}var fc={},wp;function fs(){if(wp)return fc;wp=1,Object.defineProperty(fc,"__esModule",{value:!0});const e=gn(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return fc.default=t,fc}var xp;function td(){return xp||(xp=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=gn(),r=zn(),o=fs();e.keywordError={message:({keyword:v})=>(0,t.str)`must pass "${v}" keyword validation`},e.keyword$DataError={message:({keyword:v,schemaType:p})=>p?(0,t.str)`"${v}" keyword must be ${p} ($data)`:(0,t.str)`"${v}" keyword is invalid ($data)`};function s(v,p=e.keywordError,f,g){const{it:x}=v,{gen:w,compositeRule:k,allErrors:O}=x,A=m(v,p,f);g??(k||O)?c(w,A):d(x,(0,t._)`[${A}]`)}e.reportError=s;function a(v,p=e.keywordError,f){const{it:g}=v,{gen:x,compositeRule:w,allErrors:k}=g,O=m(v,p,f);c(x,O),w||k||d(g,o.default.vErrors)}e.reportExtraError=a;function i(v,p){v.assign(o.default.errors,p),v.if((0,t._)`${o.default.vErrors} !== null`,()=>v.if(p,()=>v.assign((0,t._)`${o.default.vErrors}.length`,p),()=>v.assign(o.default.vErrors,null)))}e.resetErrorsCount=i;function l({gen:v,keyword:p,schemaValue:f,data:g,errsCount:x,it:w}){if(x===void 0)throw new Error("ajv implementation error");const k=v.name("err");v.forRange("i",x,o.default.errors,O=>{v.const(k,(0,t._)`${o.default.vErrors}[${O}]`),v.if((0,t._)`${k}.instancePath === undefined`,()=>v.assign((0,t._)`${k}.instancePath`,(0,t.strConcat)(o.default.instancePath,w.errorPath))),v.assign((0,t._)`${k}.schemaPath`,(0,t.str)`${w.errSchemaPath}/${p}`),w.opts.verbose&&(v.assign((0,t._)`${k}.schema`,f),v.assign((0,t._)`${k}.data`,g))})}e.extendErrors=l;function c(v,p){const f=v.const("err",p);v.if((0,t._)`${o.default.vErrors} === null`,()=>v.assign(o.default.vErrors,(0,t._)`[${f}]`),(0,t._)`${o.default.vErrors}.push(${f})`),v.code((0,t._)`${o.default.errors}++`)}function d(v,p){const{gen:f,validateName:g,schemaEnv:x}=v;x.$async?f.throw((0,t._)`new ${v.ValidationError}(${p})`):(f.assign((0,t._)`${g}.errors`,p),f.return(!1))}const u={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function m(v,p,f){const{createErrors:g}=v.it;return g===!1?(0,t._)`{}`:b(v,p,f)}function b(v,p,f={}){const{gen:g,it:x}=v,w=[y(x,f),h(v,f)];return j(v,p,w),g.object(...w)}function y({errorPath:v},{instancePath:p}){const f=p?(0,t.str)`${v}${(0,r.getErrorPath)(p,r.Type.Str)}`:v;return[o.default.instancePath,(0,t.strConcat)(o.default.instancePath,f)]}function h({keyword:v,it:{errSchemaPath:p}},{schemaPath:f,parentSchema:g}){let x=g?p:(0,t.str)`${p}/${v}`;return f&&(x=(0,t.str)`${x}${(0,r.getErrorPath)(f,r.Type.Str)}`),[u.schemaPath,x]}function j(v,{params:p,message:f},g){const{keyword:x,data:w,schemaValue:k,it:O}=v,{opts:A,propertyName:R,topSchemaRef:ne,schemaPath:G}=O;g.push([u.keyword,x],[u.params,typeof p=="function"?p(v):p||(0,t._)`{}`]),A.messages&&g.push([u.message,typeof f=="function"?f(v):f]),A.verbose&&g.push([u.schema,k],[u.parentSchema,(0,t._)`${ne}${G}`],[o.default.data,w]),R&&g.push([u.propertyName,R])}}(Ed)),Ed}var kp;function qw(){if(kp)return ks;kp=1,Object.defineProperty(ks,"__esModule",{value:!0}),ks.boolOrEmptySchema=ks.topBoolOrEmptySchema=void 0;const e=td(),t=gn(),r=fs(),o={message:"boolean schema is false"};function s(l){const{gen:c,schema:d,validateName:u}=l;d===!1?i(l,!1):typeof d=="object"&&d.$async===!0?c.return(r.default.data):(c.assign((0,t._)`${u}.errors`,null),c.return(!0))}ks.topBoolOrEmptySchema=s;function a(l,c){const{gen:d,schema:u}=l;u===!1?(d.var(c,!1),i(l)):d.var(c,!0)}ks.boolOrEmptySchema=a;function i(l,c){const{gen:d,data:u}=l,m={gen:d,keyword:"false schema",data:u,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:l};(0,e.reportError)(m,o,void 0,c)}return ks}var Zr={},Ss={},Sp;function qg(){if(Sp)return Ss;Sp=1,Object.defineProperty(Ss,"__esModule",{value:!0}),Ss.getRules=Ss.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function r(s){return typeof s=="string"&&t.has(s)}Ss.isJSONType=r;function o(){const s={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...s,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},s.number,s.string,s.array,s.object],post:{rules:[]},all:{},keywords:{}}}return Ss.getRules=o,Ss}var ja={},_p;function zg(){if(_p)return ja;_p=1,Object.defineProperty(ja,"__esModule",{value:!0}),ja.shouldUseRule=ja.shouldUseGroup=ja.schemaHasRulesForType=void 0;function e({schema:o,self:s},a){const i=s.RULES.types[a];return i&&i!==!0&&t(o,i)}ja.schemaHasRulesForType=e;function t(o,s){return s.rules.some(a=>r(o,a))}ja.shouldUseGroup=t;function r(o,s){var a;return o[s.keyword]!==void 0||((a=s.definition.implements)===null||a===void 0?void 0:a.some(i=>o[i]!==void 0))}return ja.shouldUseRule=r,ja}var Cp;function Ou(){if(Cp)return Zr;Cp=1,Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.reportTypeError=Zr.checkDataTypes=Zr.checkDataType=Zr.coerceAndCheckDataType=Zr.getJSONTypes=Zr.getSchemaTypes=Zr.DataType=void 0;const e=qg(),t=zg(),r=td(),o=gn(),s=zn();var a;(function(f){f[f.Correct=0]="Correct",f[f.Wrong=1]="Wrong"})(a||(Zr.DataType=a={}));function i(f){const g=l(f.type);if(g.includes("null")){if(f.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!g.length&&f.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');f.nullable===!0&&g.push("null")}return g}Zr.getSchemaTypes=i;function l(f){const g=Array.isArray(f)?f:f?[f]:[];if(g.every(e.isJSONType))return g;throw new Error("type must be JSONType or JSONType[]: "+g.join(","))}Zr.getJSONTypes=l;function c(f,g){const{gen:x,data:w,opts:k}=f,O=u(g,k.coerceTypes),A=g.length>0&&!(O.length===0&&g.length===1&&(0,t.schemaHasRulesForType)(f,g[0]));if(A){const R=h(g,w,k.strictNumbers,a.Wrong);x.if(R,()=>{O.length?m(f,g,O):v(f)})}return A}Zr.coerceAndCheckDataType=c;const d=new Set(["string","number","integer","boolean","null"]);function u(f,g){return g?f.filter(x=>d.has(x)||g==="array"&&x==="array"):[]}function m(f,g,x){const{gen:w,data:k,opts:O}=f,A=w.let("dataType",(0,o._)`typeof ${k}`),R=w.let("coerced",(0,o._)`undefined`);O.coerceTypes==="array"&&w.if((0,o._)`${A} == 'object' && Array.isArray(${k}) && ${k}.length == 1`,()=>w.assign(k,(0,o._)`${k}[0]`).assign(A,(0,o._)`typeof ${k}`).if(h(g,k,O.strictNumbers),()=>w.assign(R,k))),w.if((0,o._)`${R} !== undefined`);for(const G of x)(d.has(G)||G==="array"&&O.coerceTypes==="array")&&ne(G);w.else(),v(f),w.endIf(),w.if((0,o._)`${R} !== undefined`,()=>{w.assign(k,R),b(f,R)});function ne(G){switch(G){case"string":w.elseIf((0,o._)`${A} == "number" || ${A} == "boolean"`).assign(R,(0,o._)`"" + ${k}`).elseIf((0,o._)`${k} === null`).assign(R,(0,o._)`""`);return;case"number":w.elseIf((0,o._)`${A} == "boolean" || ${k} === null
              || (${A} == "string" && ${k} && ${k} == +${k})`).assign(R,(0,o._)`+${k}`);return;case"integer":w.elseIf((0,o._)`${A} === "boolean" || ${k} === null
              || (${A} === "string" && ${k} && ${k} == +${k} && !(${k} % 1))`).assign(R,(0,o._)`+${k}`);return;case"boolean":w.elseIf((0,o._)`${k} === "false" || ${k} === 0 || ${k} === null`).assign(R,!1).elseIf((0,o._)`${k} === "true" || ${k} === 1`).assign(R,!0);return;case"null":w.elseIf((0,o._)`${k} === "" || ${k} === 0 || ${k} === false`),w.assign(R,null);return;case"array":w.elseIf((0,o._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${k} === null`).assign(R,(0,o._)`[${k}]`)}}}function b({gen:f,parentData:g,parentDataProperty:x},w){f.if((0,o._)`${g} !== undefined`,()=>f.assign((0,o._)`${g}[${x}]`,w))}function y(f,g,x,w=a.Correct){const k=w===a.Correct?o.operators.EQ:o.operators.NEQ;let O;switch(f){case"null":return(0,o._)`${g} ${k} null`;case"array":O=(0,o._)`Array.isArray(${g})`;break;case"object":O=(0,o._)`${g} && typeof ${g} == "object" && !Array.isArray(${g})`;break;case"integer":O=A((0,o._)`!(${g} % 1) && !isNaN(${g})`);break;case"number":O=A();break;default:return(0,o._)`typeof ${g} ${k} ${f}`}return w===a.Correct?O:(0,o.not)(O);function A(R=o.nil){return(0,o.and)((0,o._)`typeof ${g} == "number"`,R,x?(0,o._)`isFinite(${g})`:o.nil)}}Zr.checkDataType=y;function h(f,g,x,w){if(f.length===1)return y(f[0],g,x,w);let k;const O=(0,s.toHash)(f);if(O.array&&O.object){const A=(0,o._)`typeof ${g} != "object"`;k=O.null?A:(0,o._)`!${g} || ${A}`,delete O.null,delete O.array,delete O.object}else k=o.nil;O.number&&delete O.integer;for(const A in O)k=(0,o.and)(k,y(A,g,x,w));return k}Zr.checkDataTypes=h;const j={message:({schema:f})=>`must be ${f}`,params:({schema:f,schemaValue:g})=>typeof f=="string"?(0,o._)`{type: ${f}}`:(0,o._)`{type: ${g}}`};function v(f){const g=p(f);(0,r.reportError)(g,j)}Zr.reportTypeError=v;function p(f){const{gen:g,data:x,schema:w}=f,k=(0,s.schemaRefOrVal)(f,w,"type");return{gen:g,keyword:"type",data:x,schema:w.type,schemaCode:k,schemaValue:k,parentSchema:w,params:{},it:f}}return Zr}var cl={},Ep;function zw(){if(Ep)return cl;Ep=1,Object.defineProperty(cl,"__esModule",{value:!0}),cl.assignDefaults=void 0;const e=gn(),t=zn();function r(s,a){const{properties:i,items:l}=s.schema;if(a==="object"&&i)for(const c in i)o(s,c,i[c].default);else a==="array"&&Array.isArray(l)&&l.forEach((c,d)=>o(s,d,c.default))}cl.assignDefaults=r;function o(s,a,i){const{gen:l,compositeRule:c,data:d,opts:u}=s;if(i===void 0)return;const m=(0,e._)`${d}${(0,e.getProperty)(a)}`;if(c){(0,t.checkStrictMode)(s,`default is ignored for: ${m}`);return}let b=(0,e._)`${m} === undefined`;u.useDefaults==="empty"&&(b=(0,e._)`${b} || ${m} === null || ${m} === ""`),l.if(b,(0,e._)`${m} = ${(0,e.stringify)(i)}`)}return cl}var Vo={},Hn={},Op;function ta(){if(Op)return Hn;Op=1,Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.validateUnion=Hn.validateArray=Hn.usePattern=Hn.callValidateCode=Hn.schemaProperties=Hn.allSchemaProperties=Hn.noPropertyInData=Hn.propertyInData=Hn.isOwnProperty=Hn.hasPropFunc=Hn.reportMissingProp=Hn.checkMissingProp=Hn.checkReportMissingProp=void 0;const e=gn(),t=zn(),r=fs(),o=zn();function s(f,g){const{gen:x,data:w,it:k}=f;x.if(u(x,w,g,k.opts.ownProperties),()=>{f.setParams({missingProperty:(0,e._)`${g}`},!0),f.error()})}Hn.checkReportMissingProp=s;function a({gen:f,data:g,it:{opts:x}},w,k){return(0,e.or)(...w.map(O=>(0,e.and)(u(f,g,O,x.ownProperties),(0,e._)`${k} = ${O}`)))}Hn.checkMissingProp=a;function i(f,g){f.setParams({missingProperty:g},!0),f.error()}Hn.reportMissingProp=i;function l(f){return f.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Hn.hasPropFunc=l;function c(f,g,x){return(0,e._)`${l(f)}.call(${g}, ${x})`}Hn.isOwnProperty=c;function d(f,g,x,w){const k=(0,e._)`${g}${(0,e.getProperty)(x)} !== undefined`;return w?(0,e._)`${k} && ${c(f,g,x)}`:k}Hn.propertyInData=d;function u(f,g,x,w){const k=(0,e._)`${g}${(0,e.getProperty)(x)} === undefined`;return w?(0,e.or)(k,(0,e.not)(c(f,g,x))):k}Hn.noPropertyInData=u;function m(f){return f?Object.keys(f).filter(g=>g!=="__proto__"):[]}Hn.allSchemaProperties=m;function b(f,g){return m(g).filter(x=>!(0,t.alwaysValidSchema)(f,g[x]))}Hn.schemaProperties=b;function y({schemaCode:f,data:g,it:{gen:x,topSchemaRef:w,schemaPath:k,errorPath:O},it:A},R,ne,G){const F=G?(0,e._)`${f}, ${g}, ${w}${k}`:g,Z=[[r.default.instancePath,(0,e.strConcat)(r.default.instancePath,O)],[r.default.parentData,A.parentData],[r.default.parentDataProperty,A.parentDataProperty],[r.default.rootData,r.default.rootData]];A.opts.dynamicRef&&Z.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);const je=(0,e._)`${F}, ${x.object(...Z)}`;return ne!==e.nil?(0,e._)`${R}.call(${ne}, ${je})`:(0,e._)`${R}(${je})`}Hn.callValidateCode=y;const h=(0,e._)`new RegExp`;function j({gen:f,it:{opts:g}},x){const w=g.unicodeRegExp?"u":"",{regExp:k}=g.code,O=k(x,w);return f.scopeValue("pattern",{key:O.toString(),ref:O,code:(0,e._)`${k.code==="new RegExp"?h:(0,o.useFunc)(f,k)}(${x}, ${w})`})}Hn.usePattern=j;function v(f){const{gen:g,data:x,keyword:w,it:k}=f,O=g.name("valid");if(k.allErrors){const R=g.let("valid",!0);return A(()=>g.assign(R,!1)),R}return g.var(O,!0),A(()=>g.break()),O;function A(R){const ne=g.const("len",(0,e._)`${x}.length`);g.forRange("i",0,ne,G=>{f.subschema({keyword:w,dataProp:G,dataPropType:t.Type.Num},O),g.if((0,e.not)(O),R)})}}Hn.validateArray=v;function p(f){const{gen:g,schema:x,keyword:w,it:k}=f;if(!Array.isArray(x))throw new Error("ajv implementation error");if(x.some(ne=>(0,t.alwaysValidSchema)(k,ne))&&!k.opts.unevaluated)return;const A=g.let("valid",!1),R=g.name("_valid");g.block(()=>x.forEach((ne,G)=>{const F=f.subschema({keyword:w,schemaProp:G,compositeRule:!0},R);g.assign(A,(0,e._)`${A} || ${R}`),f.mergeValidEvaluated(F,R)||g.if((0,e.not)(A))})),f.result(A,()=>f.reset(),()=>f.error(!0))}return Hn.validateUnion=p,Hn}var $p;function Iw(){if($p)return Vo;$p=1,Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.validateKeywordUsage=Vo.validSchemaType=Vo.funcKeywordCode=Vo.macroKeywordCode=void 0;const e=gn(),t=fs(),r=ta(),o=td();function s(b,y){const{gen:h,keyword:j,schema:v,parentSchema:p,it:f}=b,g=y.macro.call(f.self,v,p,f),x=d(h,j,g);f.opts.validateSchema!==!1&&f.self.validateSchema(g,!0);const w=h.name("valid");b.subschema({schema:g,schemaPath:e.nil,errSchemaPath:`${f.errSchemaPath}/${j}`,topSchemaRef:x,compositeRule:!0},w),b.pass(w,()=>b.error(!0))}Vo.macroKeywordCode=s;function a(b,y){var h;const{gen:j,keyword:v,schema:p,parentSchema:f,$data:g,it:x}=b;c(x,y);const w=!g&&y.compile?y.compile.call(x.self,p,f,x):y.validate,k=d(j,v,w),O=j.let("valid");b.block$data(O,A),b.ok((h=y.valid)!==null&&h!==void 0?h:O);function A(){if(y.errors===!1)G(),y.modifying&&i(b),F(()=>b.error());else{const Z=y.async?R():ne();y.modifying&&i(b),F(()=>l(b,Z))}}function R(){const Z=j.let("ruleErrs",null);return j.try(()=>G((0,e._)`await `),je=>j.assign(O,!1).if((0,e._)`${je} instanceof ${x.ValidationError}`,()=>j.assign(Z,(0,e._)`${je}.errors`),()=>j.throw(je))),Z}function ne(){const Z=(0,e._)`${k}.errors`;return j.assign(Z,null),G(e.nil),Z}function G(Z=y.async?(0,e._)`await `:e.nil){const je=x.opts.passContext?t.default.this:t.default.self,Q=!("compile"in y&&!g||y.schema===!1);j.assign(O,(0,e._)`${Z}${(0,r.callValidateCode)(b,k,je,Q)}`,y.modifying)}function F(Z){var je;j.if((0,e.not)((je=y.valid)!==null&&je!==void 0?je:O),Z)}}Vo.funcKeywordCode=a;function i(b){const{gen:y,data:h,it:j}=b;y.if(j.parentData,()=>y.assign(h,(0,e._)`${j.parentData}[${j.parentDataProperty}]`))}function l(b,y){const{gen:h}=b;h.if((0,e._)`Array.isArray(${y})`,()=>{h.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,o.extendErrors)(b)},()=>b.error())}function c({schemaEnv:b},y){if(y.async&&!b.$async)throw new Error("async keyword in sync schema")}function d(b,y,h){if(h===void 0)throw new Error(`keyword "${y}" failed to compile`);return b.scopeValue("keyword",typeof h=="function"?{ref:h}:{ref:h,code:(0,e.stringify)(h)})}function u(b,y,h=!1){return!y.length||y.some(j=>j==="array"?Array.isArray(b):j==="object"?b&&typeof b=="object"&&!Array.isArray(b):typeof b==j||h&&typeof b>"u")}Vo.validSchemaType=u;function m({schema:b,opts:y,self:h,errSchemaPath:j},v,p){if(Array.isArray(v.keyword)?!v.keyword.includes(p):v.keyword!==p)throw new Error("ajv implementation error");const f=v.dependencies;if(f?.some(g=>!Object.prototype.hasOwnProperty.call(b,g)))throw new Error(`parent schema must have dependencies of ${p}: ${f.join(",")}`);if(v.validateSchema&&!v.validateSchema(b[p])){const x=`keyword "${p}" value is invalid at path "${j}": `+h.errorsText(v.validateSchema.errors);if(y.validateSchema==="log")h.logger.error(x);else throw new Error(x)}}return Vo.validateKeywordUsage=m,Vo}var wa={},Pp;function Dw(){if(Pp)return wa;Pp=1,Object.defineProperty(wa,"__esModule",{value:!0}),wa.extendSubschemaMode=wa.extendSubschemaData=wa.getSubschema=void 0;const e=gn(),t=zn();function r(a,{keyword:i,schemaProp:l,schema:c,schemaPath:d,errSchemaPath:u,topSchemaRef:m}){if(i!==void 0&&c!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(i!==void 0){const b=a.schema[i];return l===void 0?{schema:b,schemaPath:(0,e._)`${a.schemaPath}${(0,e.getProperty)(i)}`,errSchemaPath:`${a.errSchemaPath}/${i}`}:{schema:b[l],schemaPath:(0,e._)`${a.schemaPath}${(0,e.getProperty)(i)}${(0,e.getProperty)(l)}`,errSchemaPath:`${a.errSchemaPath}/${i}/${(0,t.escapeFragment)(l)}`}}if(c!==void 0){if(d===void 0||u===void 0||m===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:c,schemaPath:d,topSchemaRef:m,errSchemaPath:u}}throw new Error('either "keyword" or "schema" must be passed')}wa.getSubschema=r;function o(a,i,{dataProp:l,dataPropType:c,data:d,dataTypes:u,propertyName:m}){if(d!==void 0&&l!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:b}=i;if(l!==void 0){const{errorPath:h,dataPathArr:j,opts:v}=i,p=b.let("data",(0,e._)`${i.data}${(0,e.getProperty)(l)}`,!0);y(p),a.errorPath=(0,e.str)`${h}${(0,t.getErrorPath)(l,c,v.jsPropertySyntax)}`,a.parentDataProperty=(0,e._)`${l}`,a.dataPathArr=[...j,a.parentDataProperty]}if(d!==void 0){const h=d instanceof e.Name?d:b.let("data",d,!0);y(h),m!==void 0&&(a.propertyName=m)}u&&(a.dataTypes=u);function y(h){a.data=h,a.dataLevel=i.dataLevel+1,a.dataTypes=[],i.definedProperties=new Set,a.parentData=i.data,a.dataNames=[...i.dataNames,h]}}wa.extendSubschemaData=o;function s(a,{jtdDiscriminator:i,jtdMetadata:l,compositeRule:c,createErrors:d,allErrors:u}){c!==void 0&&(a.compositeRule=c),d!==void 0&&(a.createErrors=d),u!==void 0&&(a.allErrors=u),a.jtdDiscriminator=i,a.jtdMetadata=l}return wa.extendSubschemaMode=s,wa}var io={},Md={exports:{}},Mp;function Lw(){if(Mp)return Md.exports;Mp=1;var e=Md.exports=function(o,s,a){typeof s=="function"&&(a=s,s={}),a=s.cb||a;var i=typeof a=="function"?a:a.pre||function(){},l=a.post||function(){};t(s,i,l,o,"",o)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(o,s,a,i,l,c,d,u,m,b){if(i&&typeof i=="object"&&!Array.isArray(i)){s(i,l,c,d,u,m,b);for(var y in i){var h=i[y];if(Array.isArray(h)){if(y in e.arrayKeywords)for(var j=0;j<h.length;j++)t(o,s,a,h[j],l+"/"+y+"/"+j,c,l,y,i,j)}else if(y in e.propsKeywords){if(h&&typeof h=="object")for(var v in h)t(o,s,a,h[v],l+"/"+y+"/"+r(v),c,l,y,i,v)}else(y in e.keywords||o.allKeys&&!(y in e.skipKeywords))&&t(o,s,a,h,l+"/"+y,c,l,y,i)}a(i,l,c,d,u,m,b)}}function r(o){return o.replace(/~/g,"~0").replace(/\//g,"~1")}return Md.exports}var Rp;function nd(){if(Rp)return io;Rp=1,Object.defineProperty(io,"__esModule",{value:!0}),io.getSchemaRefs=io.resolveUrl=io.normalizeId=io._getFullPath=io.getFullPath=io.inlineRef=void 0;const e=zn(),t=lg(),r=Lw(),o=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function s(j,v=!0){return typeof j=="boolean"?!0:v===!0?!i(j):v?l(j)<=v:!1}io.inlineRef=s;const a=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function i(j){for(const v in j){if(a.has(v))return!0;const p=j[v];if(Array.isArray(p)&&p.some(i)||typeof p=="object"&&i(p))return!0}return!1}function l(j){let v=0;for(const p in j){if(p==="$ref")return 1/0;if(v++,!o.has(p)&&(typeof j[p]=="object"&&(0,e.eachItem)(j[p],f=>v+=l(f)),v===1/0))return 1/0}return v}function c(j,v="",p){p!==!1&&(v=m(v));const f=j.parse(v);return d(j,f)}io.getFullPath=c;function d(j,v){return j.serialize(v).split("#")[0]+"#"}io._getFullPath=d;const u=/#\/?$/;function m(j){return j?j.replace(u,""):""}io.normalizeId=m;function b(j,v,p){return p=m(p),j.resolve(v,p)}io.resolveUrl=b;const y=/^[a-z_][-a-z0-9._]*$/i;function h(j,v){if(typeof j=="boolean")return{};const{schemaId:p,uriResolver:f}=this.opts,g=m(j[p]||v),x={"":g},w=c(f,g,!1),k={},O=new Set;return r(j,{allKeys:!0},(ne,G,F,Z)=>{if(Z===void 0)return;const je=w+G;let Q=x[Z];typeof ne[p]=="string"&&(Q=we.call(this,ne[p])),Re.call(this,ne.$anchor),Re.call(this,ne.$dynamicAnchor),x[G]=Q;function we(Ee){const ce=this.opts.uriResolver.resolve;if(Ee=m(Q?ce(Q,Ee):Ee),O.has(Ee))throw R(Ee);O.add(Ee);let B=this.refs[Ee];return typeof B=="string"&&(B=this.refs[B]),typeof B=="object"?A(ne,B.schema,Ee):Ee!==m(je)&&(Ee[0]==="#"?(A(ne,k[Ee],Ee),k[Ee]=ne):this.refs[Ee]=je),Ee}function Re(Ee){if(typeof Ee=="string"){if(!y.test(Ee))throw new Error(`invalid anchor "${Ee}"`);we.call(this,`#${Ee}`)}}}),k;function A(ne,G,F){if(G!==void 0&&!t(ne,G))throw R(F)}function R(ne){return new Error(`reference "${ne}" resolves to more than one schema`)}}return io.getSchemaRefs=h,io}var Np;function rd(){if(Np)return ya;Np=1,Object.defineProperty(ya,"__esModule",{value:!0}),ya.getData=ya.KeywordCxt=ya.validateFunctionCode=void 0;const e=qw(),t=Ou(),r=zg(),o=Ou(),s=zw(),a=Iw(),i=Dw(),l=gn(),c=fs(),d=nd(),u=zn(),m=td();function b(P){if(w(P)&&(O(P),x(P))){v(P);return}y(P,()=>(0,e.topBoolOrEmptySchema)(P))}ya.validateFunctionCode=b;function y({gen:P,validateName:I,schema:D,schemaEnv:ve,opts:Y},V){Y.code.es5?P.func(I,(0,l._)`${c.default.data}, ${c.default.valCxt}`,ve.$async,()=>{P.code((0,l._)`"use strict"; ${f(D,Y)}`),j(P,Y),P.code(V)}):P.func(I,(0,l._)`${c.default.data}, ${h(Y)}`,ve.$async,()=>P.code(f(D,Y)).code(V))}function h(P){return(0,l._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef?(0,l._)`, ${c.default.dynamicAnchors}={}`:l.nil}}={}`}function j(P,I){P.if(c.default.valCxt,()=>{P.var(c.default.instancePath,(0,l._)`${c.default.valCxt}.${c.default.instancePath}`),P.var(c.default.parentData,(0,l._)`${c.default.valCxt}.${c.default.parentData}`),P.var(c.default.parentDataProperty,(0,l._)`${c.default.valCxt}.${c.default.parentDataProperty}`),P.var(c.default.rootData,(0,l._)`${c.default.valCxt}.${c.default.rootData}`),I.dynamicRef&&P.var(c.default.dynamicAnchors,(0,l._)`${c.default.valCxt}.${c.default.dynamicAnchors}`)},()=>{P.var(c.default.instancePath,(0,l._)`""`),P.var(c.default.parentData,(0,l._)`undefined`),P.var(c.default.parentDataProperty,(0,l._)`undefined`),P.var(c.default.rootData,c.default.data),I.dynamicRef&&P.var(c.default.dynamicAnchors,(0,l._)`{}`)})}function v(P){const{schema:I,opts:D,gen:ve}=P;y(P,()=>{D.$comment&&I.$comment&&Z(P),ne(P),ve.let(c.default.vErrors,null),ve.let(c.default.errors,0),D.unevaluated&&p(P),A(P),je(P)})}function p(P){const{gen:I,validateName:D}=P;P.evaluated=I.const("evaluated",(0,l._)`${D}.evaluated`),I.if((0,l._)`${P.evaluated}.dynamicProps`,()=>I.assign((0,l._)`${P.evaluated}.props`,(0,l._)`undefined`)),I.if((0,l._)`${P.evaluated}.dynamicItems`,()=>I.assign((0,l._)`${P.evaluated}.items`,(0,l._)`undefined`))}function f(P,I){const D=typeof P=="object"&&P[I.schemaId];return D&&(I.code.source||I.code.process)?(0,l._)`/*# sourceURL=${D} */`:l.nil}function g(P,I){if(w(P)&&(O(P),x(P))){k(P,I);return}(0,e.boolOrEmptySchema)(P,I)}function x({schema:P,self:I}){if(typeof P=="boolean")return!P;for(const D in P)if(I.RULES.all[D])return!0;return!1}function w(P){return typeof P.schema!="boolean"}function k(P,I){const{schema:D,gen:ve,opts:Y}=P;Y.$comment&&D.$comment&&Z(P),G(P),F(P);const V=ve.const("_errs",c.default.errors);A(P,V),ve.var(I,(0,l._)`${V} === ${c.default.errors}`)}function O(P){(0,u.checkUnknownRules)(P),R(P)}function A(P,I){if(P.opts.jtd)return we(P,[],!1,I);const D=(0,t.getSchemaTypes)(P.schema),ve=(0,t.coerceAndCheckDataType)(P,D);we(P,D,!ve,I)}function R(P){const{schema:I,errSchemaPath:D,opts:ve,self:Y}=P;I.$ref&&ve.ignoreKeywordsWithRef&&(0,u.schemaHasRulesButRef)(I,Y.RULES)&&Y.logger.warn(`$ref: keywords ignored in schema at path "${D}"`)}function ne(P){const{schema:I,opts:D}=P;I.default!==void 0&&D.useDefaults&&D.strictSchema&&(0,u.checkStrictMode)(P,"default is ignored in the schema root")}function G(P){const I=P.schema[P.opts.schemaId];I&&(P.baseId=(0,d.resolveUrl)(P.opts.uriResolver,P.baseId,I))}function F(P){if(P.schema.$async&&!P.schemaEnv.$async)throw new Error("async schema in sync schema")}function Z({gen:P,schemaEnv:I,schema:D,errSchemaPath:ve,opts:Y}){const V=D.$comment;if(Y.$comment===!0)P.code((0,l._)`${c.default.self}.logger.log(${V})`);else if(typeof Y.$comment=="function"){const Qe=(0,l.str)`${ve}/$comment`,rt=P.scopeValue("root",{ref:I.root});P.code((0,l._)`${c.default.self}.opts.$comment(${V}, ${Qe}, ${rt}.schema)`)}}function je(P){const{gen:I,schemaEnv:D,validateName:ve,ValidationError:Y,opts:V}=P;D.$async?I.if((0,l._)`${c.default.errors} === 0`,()=>I.return(c.default.data),()=>I.throw((0,l._)`new ${Y}(${c.default.vErrors})`)):(I.assign((0,l._)`${ve}.errors`,c.default.vErrors),V.unevaluated&&Q(P),I.return((0,l._)`${c.default.errors} === 0`))}function Q({gen:P,evaluated:I,props:D,items:ve}){D instanceof l.Name&&P.assign((0,l._)`${I}.props`,D),ve instanceof l.Name&&P.assign((0,l._)`${I}.items`,ve)}function we(P,I,D,ve){const{gen:Y,schema:V,data:Qe,allErrors:rt,opts:Ce,self:lt}=P,{RULES:Ae}=lt;if(V.$ref&&(Ce.ignoreKeywordsWithRef||!(0,u.schemaHasRulesButRef)(V,Ae))){Y.block(()=>Oe(P,"$ref",Ae.all.$ref.definition));return}Ce.jtd||Ee(P,I),Y.block(()=>{for(const it of Ae.rules)We(it);We(Ae.post)});function We(it){(0,r.shouldUseGroup)(V,it)&&(it.type?(Y.if((0,o.checkDataType)(it.type,Qe,Ce.strictNumbers)),Re(P,it),I.length===1&&I[0]===it.type&&D&&(Y.else(),(0,o.reportTypeError)(P)),Y.endIf()):Re(P,it),rt||Y.if((0,l._)`${c.default.errors} === ${ve||0}`))}}function Re(P,I){const{gen:D,schema:ve,opts:{useDefaults:Y}}=P;Y&&(0,s.assignDefaults)(P,I.type),D.block(()=>{for(const V of I.rules)(0,r.shouldUseRule)(ve,V)&&Oe(P,V.keyword,V.definition,I.type)})}function Ee(P,I){P.schemaEnv.meta||!P.opts.strictTypes||(ce(P,I),P.opts.allowUnionTypes||B(P,I),L(P,P.dataTypes))}function ce(P,I){if(I.length){if(!P.dataTypes.length){P.dataTypes=I;return}I.forEach(D=>{T(P.dataTypes,D)||M(P,`type "${D}" not allowed by context "${P.dataTypes.join(",")}"`)}),E(P,I)}}function B(P,I){I.length>1&&!(I.length===2&&I.includes("null"))&&M(P,"use allowUnionTypes to allow union type keyword")}function L(P,I){const D=P.self.RULES.all;for(const ve in D){const Y=D[ve];if(typeof Y=="object"&&(0,r.shouldUseRule)(P.schema,Y)){const{type:V}=Y.definition;V.length&&!V.some(Qe=>le(I,Qe))&&M(P,`missing type "${V.join(",")}" for keyword "${ve}"`)}}}function le(P,I){return P.includes(I)||I==="number"&&P.includes("integer")}function T(P,I){return P.includes(I)||I==="integer"&&P.includes("number")}function E(P,I){const D=[];for(const ve of P.dataTypes)T(I,ve)?D.push(ve):I.includes("integer")&&ve==="number"&&D.push("integer");P.dataTypes=D}function M(P,I){const D=P.schemaEnv.baseId+P.errSchemaPath;I+=` at "${D}" (strictTypes)`,(0,u.checkStrictMode)(P,I,P.opts.strictTypes)}class oe{constructor(I,D,ve){if((0,a.validateKeywordUsage)(I,D,ve),this.gen=I.gen,this.allErrors=I.allErrors,this.keyword=ve,this.data=I.data,this.schema=I.schema[ve],this.$data=D.$data&&I.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,u.schemaRefOrVal)(I,this.schema,ve,this.$data),this.schemaType=D.schemaType,this.parentSchema=I.schema,this.params={},this.it=I,this.def=D,this.$data)this.schemaCode=I.gen.const("vSchema",be(this.$data,I));else if(this.schemaCode=this.schemaValue,!(0,a.validSchemaType)(this.schema,D.schemaType,D.allowUndefined))throw new Error(`${ve} value must be ${JSON.stringify(D.schemaType)}`);("code"in D?D.trackErrors:D.errors!==!1)&&(this.errsCount=I.gen.const("_errs",c.default.errors))}result(I,D,ve){this.failResult((0,l.not)(I),D,ve)}failResult(I,D,ve){this.gen.if(I),ve?ve():this.error(),D?(this.gen.else(),D(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(I,D){this.failResult((0,l.not)(I),void 0,D)}fail(I){if(I===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(I),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(I){if(!this.$data)return this.fail(I);const{schemaCode:D}=this;this.fail((0,l._)`${D} !== undefined && (${(0,l.or)(this.invalid$data(),I)})`)}error(I,D,ve){if(D){this.setParams(D),this._error(I,ve),this.setParams({});return}this._error(I,ve)}_error(I,D){(I?m.reportExtraError:m.reportError)(this,this.def.error,D)}$dataError(){(0,m.reportError)(this,this.def.$dataError||m.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,m.resetErrorsCount)(this.gen,this.errsCount)}ok(I){this.allErrors||this.gen.if(I)}setParams(I,D){D?Object.assign(this.params,I):this.params=I}block$data(I,D,ve=l.nil){this.gen.block(()=>{this.check$data(I,ve),D()})}check$data(I=l.nil,D=l.nil){if(!this.$data)return;const{gen:ve,schemaCode:Y,schemaType:V,def:Qe}=this;ve.if((0,l.or)((0,l._)`${Y} === undefined`,D)),I!==l.nil&&ve.assign(I,!0),(V.length||Qe.validateSchema)&&(ve.elseIf(this.invalid$data()),this.$dataError(),I!==l.nil&&ve.assign(I,!1)),ve.else()}invalid$data(){const{gen:I,schemaCode:D,schemaType:ve,def:Y,it:V}=this;return(0,l.or)(Qe(),rt());function Qe(){if(ve.length){if(!(D instanceof l.Name))throw new Error("ajv implementation error");const Ce=Array.isArray(ve)?ve:[ve];return(0,l._)`${(0,o.checkDataTypes)(Ce,D,V.opts.strictNumbers,o.DataType.Wrong)}`}return l.nil}function rt(){if(Y.validateSchema){const Ce=I.scopeValue("validate$data",{ref:Y.validateSchema});return(0,l._)`!${Ce}(${D})`}return l.nil}}subschema(I,D){const ve=(0,i.getSubschema)(this.it,I);(0,i.extendSubschemaData)(ve,this.it,I),(0,i.extendSubschemaMode)(ve,I);const Y={...this.it,...ve,items:void 0,props:void 0};return g(Y,D),Y}mergeEvaluated(I,D){const{it:ve,gen:Y}=this;ve.opts.unevaluated&&(ve.props!==!0&&I.props!==void 0&&(ve.props=u.mergeEvaluated.props(Y,I.props,ve.props,D)),ve.items!==!0&&I.items!==void 0&&(ve.items=u.mergeEvaluated.items(Y,I.items,ve.items,D)))}mergeValidEvaluated(I,D){const{it:ve,gen:Y}=this;if(ve.opts.unevaluated&&(ve.props!==!0||ve.items!==!0))return Y.if(D,()=>this.mergeEvaluated(I,l.Name)),!0}}ya.KeywordCxt=oe;function Oe(P,I,D,ve){const Y=new oe(P,D,I);"code"in D?D.code(Y,ve):Y.$data&&D.validate?(0,a.funcKeywordCode)(Y,D):"macro"in D?(0,a.macroKeywordCode)(Y,D):(D.compile||D.validate)&&(0,a.funcKeywordCode)(Y,D)}const ae=/^\/(?:[^~]|~0|~1)*$/,J=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function be(P,{dataLevel:I,dataNames:D,dataPathArr:ve}){let Y,V;if(P==="")return c.default.rootData;if(P[0]==="/"){if(!ae.test(P))throw new Error(`Invalid JSON-pointer: ${P}`);Y=P,V=c.default.rootData}else{const lt=J.exec(P);if(!lt)throw new Error(`Invalid JSON-pointer: ${P}`);const Ae=+lt[1];if(Y=lt[2],Y==="#"){if(Ae>=I)throw new Error(Ce("property/index",Ae));return ve[I-Ae]}if(Ae>I)throw new Error(Ce("data",Ae));if(V=D[I-Ae],!Y)return V}let Qe=V;const rt=Y.split("/");for(const lt of rt)lt&&(V=(0,l._)`${V}${(0,l.getProperty)((0,u.unescapeJsonPointer)(lt))}`,Qe=(0,l._)`${Qe} && ${V}`);return Qe;function Ce(lt,Ae){return`Cannot access ${lt} ${Ae} levels up, current level is ${I}`}}return ya.getData=be,ya}var vc={},Tp;function hv(){if(Tp)return vc;Tp=1,Object.defineProperty(vc,"__esModule",{value:!0});class e extends Error{constructor(r){super("validation failed"),this.errors=r,this.ajv=this.validation=!0}}return vc.default=e,vc}var pc={},Ap;function od(){if(Ap)return pc;Ap=1,Object.defineProperty(pc,"__esModule",{value:!0});const e=nd();class t extends Error{constructor(o,s,a,i){super(i||`can't resolve reference ${a} from id ${s}`),this.missingRef=(0,e.resolveUrl)(o,s,a),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(o,this.missingRef))}}return pc.default=t,pc}var ko={},qp;function mv(){if(qp)return ko;qp=1,Object.defineProperty(ko,"__esModule",{value:!0}),ko.resolveSchema=ko.getCompilingSchema=ko.resolveRef=ko.compileSchema=ko.SchemaEnv=void 0;const e=gn(),t=hv(),r=fs(),o=nd(),s=zn(),a=rd();class i{constructor(p){var f;this.refs={},this.dynamicAnchors={};let g;typeof p.schema=="object"&&(g=p.schema),this.schema=p.schema,this.schemaId=p.schemaId,this.root=p.root||this,this.baseId=(f=p.baseId)!==null&&f!==void 0?f:(0,o.normalizeId)(g?.[p.schemaId||"$id"]),this.schemaPath=p.schemaPath,this.localRefs=p.localRefs,this.meta=p.meta,this.$async=g?.$async,this.refs={}}}ko.SchemaEnv=i;function l(v){const p=u.call(this,v);if(p)return p;const f=(0,o.getFullPath)(this.opts.uriResolver,v.root.baseId),{es5:g,lines:x}=this.opts.code,{ownProperties:w}=this.opts,k=new e.CodeGen(this.scope,{es5:g,lines:x,ownProperties:w});let O;v.$async&&(O=k.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const A=k.scopeName("validate");v.validateName=A;const R={gen:k,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:k.scopeValue("schema",this.opts.code.source===!0?{ref:v.schema,code:(0,e.stringify)(v.schema)}:{ref:v.schema}),validateName:A,ValidationError:O,schema:v.schema,schemaEnv:v,rootId:f,baseId:v.baseId||f,schemaPath:e.nil,errSchemaPath:v.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let ne;try{this._compilations.add(v),(0,a.validateFunctionCode)(R),k.optimize(this.opts.code.optimize);const G=k.toString();ne=`${k.scopeRefs(r.default.scope)}return ${G}`,this.opts.code.process&&(ne=this.opts.code.process(ne,v));const Z=new Function(`${r.default.self}`,`${r.default.scope}`,ne)(this,this.scope.get());if(this.scope.value(A,{ref:Z}),Z.errors=null,Z.schema=v.schema,Z.schemaEnv=v,v.$async&&(Z.$async=!0),this.opts.code.source===!0&&(Z.source={validateName:A,validateCode:G,scopeValues:k._values}),this.opts.unevaluated){const{props:je,items:Q}=R;Z.evaluated={props:je instanceof e.Name?void 0:je,items:Q instanceof e.Name?void 0:Q,dynamicProps:je instanceof e.Name,dynamicItems:Q instanceof e.Name},Z.source&&(Z.source.evaluated=(0,e.stringify)(Z.evaluated))}return v.validate=Z,v}catch(G){throw delete v.validate,delete v.validateName,ne&&this.logger.error("Error compiling schema, function code:",ne),G}finally{this._compilations.delete(v)}}ko.compileSchema=l;function c(v,p,f){var g;f=(0,o.resolveUrl)(this.opts.uriResolver,p,f);const x=v.refs[f];if(x)return x;let w=b.call(this,v,f);if(w===void 0){const k=(g=v.localRefs)===null||g===void 0?void 0:g[f],{schemaId:O}=this.opts;k&&(w=new i({schema:k,schemaId:O,root:v,baseId:p}))}if(w!==void 0)return v.refs[f]=d.call(this,w)}ko.resolveRef=c;function d(v){return(0,o.inlineRef)(v.schema,this.opts.inlineRefs)?v.schema:v.validate?v:l.call(this,v)}function u(v){for(const p of this._compilations)if(m(p,v))return p}ko.getCompilingSchema=u;function m(v,p){return v.schema===p.schema&&v.root===p.root&&v.baseId===p.baseId}function b(v,p){let f;for(;typeof(f=this.refs[p])=="string";)p=f;return f||this.schemas[p]||y.call(this,v,p)}function y(v,p){const f=this.opts.uriResolver.parse(p),g=(0,o._getFullPath)(this.opts.uriResolver,f);let x=(0,o.getFullPath)(this.opts.uriResolver,v.baseId,void 0);if(Object.keys(v.schema).length>0&&g===x)return j.call(this,f,v);const w=(0,o.normalizeId)(g),k=this.refs[w]||this.schemas[w];if(typeof k=="string"){const O=y.call(this,v,k);return typeof O?.schema!="object"?void 0:j.call(this,f,O)}if(typeof k?.schema=="object"){if(k.validate||l.call(this,k),w===(0,o.normalizeId)(p)){const{schema:O}=k,{schemaId:A}=this.opts,R=O[A];return R&&(x=(0,o.resolveUrl)(this.opts.uriResolver,x,R)),new i({schema:O,schemaId:A,root:v,baseId:x})}return j.call(this,f,k)}}ko.resolveSchema=y;const h=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function j(v,{baseId:p,schema:f,root:g}){var x;if(((x=v.fragment)===null||x===void 0?void 0:x[0])!=="/")return;for(const O of v.fragment.slice(1).split("/")){if(typeof f=="boolean")return;const A=f[(0,s.unescapeFragment)(O)];if(A===void 0)return;f=A;const R=typeof f=="object"&&f[this.opts.schemaId];!h.has(O)&&R&&(p=(0,o.resolveUrl)(this.opts.uriResolver,p,R))}let w;if(typeof f!="boolean"&&f.$ref&&!(0,s.schemaHasRulesButRef)(f,this.RULES)){const O=(0,o.resolveUrl)(this.opts.uriResolver,p,f.$ref);w=y.call(this,g,O)}const{schemaId:k}=this.opts;if(w=w||new i({schema:f,schemaId:k,root:g,baseId:p}),w.schema!==w.root.schema)return w}return ko}const Uw="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",Fw="Meta-schema for $data reference (JSON AnySchema extension proposal)",Vw="object",Bw=["$data"],Ww={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},Hw=!1,Kw={$id:Uw,description:Fw,type:Vw,required:Bw,properties:Ww,additionalProperties:Hw};var hc={},ul={exports:{}},Rd,zp;function Jw(){return zp||(zp=1,Rd={HEX:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15}}),Rd}var Nd,Ip;function Qw(){if(Ip)return Nd;Ip=1;const{HEX:e}=Jw();function t(h){if(i(h,".")<3)return{host:h,isIPV4:!1};const j=h.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[v]=j;return v?{host:a(v,"."),isIPV4:!0}:{host:h,isIPV4:!1}}function r(h,j=!1){let v="",p=!0;for(const f of h){if(e[f]===void 0)return;f!=="0"&&p===!0&&(p=!1),p||(v+=f)}return j&&v.length===0&&(v="0"),v}function o(h){let j=0;const v={error:!1,address:"",zone:""},p=[],f=[];let g=!1,x=!1,w=!1;function k(){if(f.length){if(g===!1){const O=r(f);if(O!==void 0)p.push(O);else return v.error=!0,!1}f.length=0}return!0}for(let O=0;O<h.length;O++){const A=h[O];if(!(A==="["||A==="]"))if(A===":"){if(x===!0&&(w=!0),!k())break;if(j++,p.push(":"),j>7){v.error=!0;break}O-1>=0&&h[O-1]===":"&&(x=!0);continue}else if(A==="%"){if(!k())break;g=!0}else{f.push(A);continue}}return f.length&&(g?v.zone=f.join(""):w?p.push(f.join("")):p.push(r(f))),v.address=p.join(""),v}function s(h,j={}){if(i(h,":")<2)return{host:h,isIPV6:!1};const v=o(h);if(v.error)return{host:h,isIPV6:!1};{let p=v.address,f=v.address;return v.zone&&(p+="%"+v.zone,f+="%25"+v.zone),{host:p,escapedHost:f,isIPV6:!0}}}function a(h,j){let v="",p=!0;const f=h.length;for(let g=0;g<f;g++){const x=h[g];x==="0"&&p?(g+1<=f&&h[g+1]===j||g+1===f)&&(v+=x,p=!1):(x===j?p=!0:p=!1,v+=x)}return v}function i(h,j){let v=0;for(let p=0;p<h.length;p++)h[p]===j&&v++;return v}const l=/^\.\.?\//u,c=/^\/\.(?:\/|$)/u,d=/^\/\.\.(?:\/|$)/u,u=/^\/?(?:.|\n)*?(?=\/|$)/u;function m(h){const j=[];for(;h.length;)if(h.match(l))h=h.replace(l,"");else if(h.match(c))h=h.replace(c,"/");else if(h.match(d))h=h.replace(d,"/"),j.pop();else if(h==="."||h==="..")h="";else{const v=h.match(u);if(v){const p=v[0];h=h.slice(p.length),j.push(p)}else throw new Error("Unexpected dot segment condition")}return j.join("")}function b(h,j){const v=j!==!0?escape:unescape;return h.scheme!==void 0&&(h.scheme=v(h.scheme)),h.userinfo!==void 0&&(h.userinfo=v(h.userinfo)),h.host!==void 0&&(h.host=v(h.host)),h.path!==void 0&&(h.path=v(h.path)),h.query!==void 0&&(h.query=v(h.query)),h.fragment!==void 0&&(h.fragment=v(h.fragment)),h}function y(h,j){const v=[];if(h.userinfo!==void 0&&(v.push(h.userinfo),v.push("@")),h.host!==void 0){let p=unescape(h.host);const f=t(p);if(f.isIPV4)p=f.host;else{const g=s(f.host,{});g.isIPV6===!0?p=`[${g.escapedHost}]`:p=h.host}v.push(p)}return(typeof h.port=="number"||typeof h.port=="string")&&(v.push(":"),v.push(String(h.port))),v.length?v.join(""):void 0}return Nd={recomposeAuthority:y,normalizeComponentEncoding:b,removeDotSegments:m,normalizeIPv4:t,normalizeIPv6:s,stringArrayToHexStripped:r},Nd}var Td,Dp;function Gw(){if(Dp)return Td;Dp=1;const e=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function r(f){return typeof f.secure=="boolean"?f.secure:String(f.scheme).toLowerCase()==="wss"}function o(f){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f}function s(f){const g=String(f.scheme).toLowerCase()==="https";return(f.port===(g?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}function a(f){return f.secure=r(f),f.resourceName=(f.path||"/")+(f.query?"?"+f.query:""),f.path=void 0,f.query=void 0,f}function i(f){if((f.port===(r(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){const[g,x]=f.resourceName.split("?");f.path=g&&g!=="/"?g:void 0,f.query=x,f.resourceName=void 0}return f.fragment=void 0,f}function l(f,g){if(!f.path)return f.error="URN can not be parsed",f;const x=f.path.match(t);if(x){const w=g.scheme||f.scheme||"urn";f.nid=x[1].toLowerCase(),f.nss=x[2];const k=`${w}:${g.nid||f.nid}`,O=p[k];f.path=void 0,O&&(f=O.parse(f,g))}else f.error=f.error||"URN can not be parsed.";return f}function c(f,g){const x=g.scheme||f.scheme||"urn",w=f.nid.toLowerCase(),k=`${x}:${g.nid||w}`,O=p[k];O&&(f=O.serialize(f,g));const A=f,R=f.nss;return A.path=`${w||g.nid}:${R}`,g.skipEscape=!0,A}function d(f,g){const x=f;return x.uuid=x.nss,x.nss=void 0,!g.tolerant&&(!x.uuid||!e.test(x.uuid))&&(x.error=x.error||"UUID is not valid."),x}function u(f){const g=f;return g.nss=(f.uuid||"").toLowerCase(),g}const m={scheme:"http",domainHost:!0,parse:o,serialize:s},b={scheme:"https",domainHost:m.domainHost,parse:o,serialize:s},y={scheme:"ws",domainHost:!0,parse:a,serialize:i},h={scheme:"wss",domainHost:y.domainHost,parse:y.parse,serialize:y.serialize},p={http:m,https:b,ws:y,wss:h,urn:{scheme:"urn",parse:l,serialize:c,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:d,serialize:u,skipNormalize:!0}};return Td=p,Td}var Lp;function Yw(){if(Lp)return ul.exports;Lp=1;const{normalizeIPv6:e,normalizeIPv4:t,removeDotSegments:r,recomposeAuthority:o,normalizeComponentEncoding:s}=Qw(),a=Gw();function i(v,p){return typeof v=="string"?v=u(h(v,p),p):typeof v=="object"&&(v=h(u(v,p),p)),v}function l(v,p,f){const g=Object.assign({scheme:"null"},f),x=c(h(v,g),h(p,g),g,!0);return u(x,{...g,skipEscape:!0})}function c(v,p,f,g){const x={};return g||(v=h(u(v,f),f),p=h(u(p,f),f)),f=f||{},!f.tolerant&&p.scheme?(x.scheme=p.scheme,x.userinfo=p.userinfo,x.host=p.host,x.port=p.port,x.path=r(p.path||""),x.query=p.query):(p.userinfo!==void 0||p.host!==void 0||p.port!==void 0?(x.userinfo=p.userinfo,x.host=p.host,x.port=p.port,x.path=r(p.path||""),x.query=p.query):(p.path?(p.path.charAt(0)==="/"?x.path=r(p.path):((v.userinfo!==void 0||v.host!==void 0||v.port!==void 0)&&!v.path?x.path="/"+p.path:v.path?x.path=v.path.slice(0,v.path.lastIndexOf("/")+1)+p.path:x.path=p.path,x.path=r(x.path)),x.query=p.query):(x.path=v.path,p.query!==void 0?x.query=p.query:x.query=v.query),x.userinfo=v.userinfo,x.host=v.host,x.port=v.port),x.scheme=v.scheme),x.fragment=p.fragment,x}function d(v,p,f){return typeof v=="string"?(v=unescape(v),v=u(s(h(v,f),!0),{...f,skipEscape:!0})):typeof v=="object"&&(v=u(s(v,!0),{...f,skipEscape:!0})),typeof p=="string"?(p=unescape(p),p=u(s(h(p,f),!0),{...f,skipEscape:!0})):typeof p=="object"&&(p=u(s(p,!0),{...f,skipEscape:!0})),v.toLowerCase()===p.toLowerCase()}function u(v,p){const f={host:v.host,scheme:v.scheme,userinfo:v.userinfo,port:v.port,path:v.path,query:v.query,nid:v.nid,nss:v.nss,uuid:v.uuid,fragment:v.fragment,reference:v.reference,resourceName:v.resourceName,secure:v.secure,error:""},g=Object.assign({},p),x=[],w=a[(g.scheme||f.scheme||"").toLowerCase()];w&&w.serialize&&w.serialize(f,g),f.path!==void 0&&(g.skipEscape?f.path=unescape(f.path):(f.path=escape(f.path),f.scheme!==void 0&&(f.path=f.path.split("%3A").join(":")))),g.reference!=="suffix"&&f.scheme&&(x.push(f.scheme),x.push(":"));const k=o(f,g);if(k!==void 0&&(g.reference!=="suffix"&&x.push("//"),x.push(k),f.path&&f.path.charAt(0)!=="/"&&x.push("/")),f.path!==void 0){let O=f.path;!g.absolutePath&&(!w||!w.absolutePath)&&(O=r(O)),k===void 0&&(O=O.replace(/^\/\//u,"/%2F")),x.push(O)}return f.query!==void 0&&(x.push("?"),x.push(f.query)),f.fragment!==void 0&&(x.push("#"),x.push(f.fragment)),x.join("")}const m=Array.from({length:127},(v,p)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(p)));function b(v){let p=0;for(let f=0,g=v.length;f<g;++f)if(p=v.charCodeAt(f),p>126||m[p])return!0;return!1}const y=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function h(v,p){const f=Object.assign({},p),g={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},x=v.indexOf("%")!==-1;let w=!1;f.reference==="suffix"&&(v=(f.scheme?f.scheme+":":"")+"//"+v);const k=v.match(y);if(k){if(g.scheme=k[1],g.userinfo=k[3],g.host=k[4],g.port=parseInt(k[5],10),g.path=k[6]||"",g.query=k[7],g.fragment=k[8],isNaN(g.port)&&(g.port=k[5]),g.host){const A=t(g.host);if(A.isIPV4===!1){const R=e(A.host,{isIPV4:!1});g.host=R.host.toLowerCase(),w=R.isIPV6}else g.host=A.host,w=!0}g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==g.reference&&(g.error=g.error||"URI is not a "+f.reference+" reference.");const O=a[(f.scheme||g.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!O||!O.unicodeSupport)&&g.host&&(f.domainHost||O&&O.domainHost)&&w===!1&&b(g.host))try{g.host=URL.domainToASCII(g.host.toLowerCase())}catch(A){g.error=g.error||"Host's domain name can not be converted to ASCII: "+A}(!O||O&&!O.skipNormalize)&&(x&&g.scheme!==void 0&&(g.scheme=unescape(g.scheme)),x&&g.userinfo!==void 0&&(g.userinfo=unescape(g.userinfo)),x&&g.host!==void 0&&(g.host=unescape(g.host)),g.path!==void 0&&g.path.length&&(g.path=escape(unescape(g.path))),g.fragment!==void 0&&g.fragment.length&&(g.fragment=encodeURI(decodeURIComponent(g.fragment)))),O&&O.parse&&O.parse(g,f)}else g.error=g.error||"URI can not be parsed.";return g}const j={SCHEMES:a,normalize:i,resolve:l,resolveComponents:c,equal:d,serialize:u,parse:h};return ul.exports=j,ul.exports.default=j,ul.exports.fastUri=j,ul.exports}var Up;function Xw(){if(Up)return hc;Up=1,Object.defineProperty(hc,"__esModule",{value:!0});const e=Yw();return e.code='require("ajv/dist/runtime/uri").default',hc.default=e,hc}var Fp;function Zw(){return Fp||(Fp=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=rd();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var r=gn();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return r.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return r.CodeGen}});const o=hv(),s=od(),a=qg(),i=mv(),l=gn(),c=nd(),d=Ou(),u=zn(),m=Kw,b=Xw(),y=(B,L)=>new RegExp(B,L);y.code="new RegExp";const h=["removeAdditional","useDefaults","coerceTypes"],j=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),v={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},p={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},f=200;function g(B){var L,le,T,E,M,oe,Oe,ae,J,be,P,I,D,ve,Y,V,Qe,rt,Ce,lt,Ae,We,it,Ue,yt;const $=B.strict,N=(L=B.code)===null||L===void 0?void 0:L.optimize,U=N===!0||N===void 0?1:N||0,X=(T=(le=B.code)===null||le===void 0?void 0:le.regExp)!==null&&T!==void 0?T:y,me=(E=B.uriResolver)!==null&&E!==void 0?E:b.default;return{strictSchema:(oe=(M=B.strictSchema)!==null&&M!==void 0?M:$)!==null&&oe!==void 0?oe:!0,strictNumbers:(ae=(Oe=B.strictNumbers)!==null&&Oe!==void 0?Oe:$)!==null&&ae!==void 0?ae:!0,strictTypes:(be=(J=B.strictTypes)!==null&&J!==void 0?J:$)!==null&&be!==void 0?be:"log",strictTuples:(I=(P=B.strictTuples)!==null&&P!==void 0?P:$)!==null&&I!==void 0?I:"log",strictRequired:(ve=(D=B.strictRequired)!==null&&D!==void 0?D:$)!==null&&ve!==void 0?ve:!1,code:B.code?{...B.code,optimize:U,regExp:X}:{optimize:U,regExp:X},loopRequired:(Y=B.loopRequired)!==null&&Y!==void 0?Y:f,loopEnum:(V=B.loopEnum)!==null&&V!==void 0?V:f,meta:(Qe=B.meta)!==null&&Qe!==void 0?Qe:!0,messages:(rt=B.messages)!==null&&rt!==void 0?rt:!0,inlineRefs:(Ce=B.inlineRefs)!==null&&Ce!==void 0?Ce:!0,schemaId:(lt=B.schemaId)!==null&&lt!==void 0?lt:"$id",addUsedSchema:(Ae=B.addUsedSchema)!==null&&Ae!==void 0?Ae:!0,validateSchema:(We=B.validateSchema)!==null&&We!==void 0?We:!0,validateFormats:(it=B.validateFormats)!==null&&it!==void 0?it:!0,unicodeRegExp:(Ue=B.unicodeRegExp)!==null&&Ue!==void 0?Ue:!0,int32range:(yt=B.int32range)!==null&&yt!==void 0?yt:!0,uriResolver:me}}class x{constructor(L={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,L=this.opts={...L,...g(L)};const{es5:le,lines:T}=this.opts.code;this.scope=new l.ValueScope({scope:{},prefixes:j,es5:le,lines:T}),this.logger=F(L.logger);const E=L.validateFormats;L.validateFormats=!1,this.RULES=(0,a.getRules)(),w.call(this,v,L,"NOT SUPPORTED"),w.call(this,p,L,"DEPRECATED","warn"),this._metaOpts=ne.call(this),L.formats&&A.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),L.keywords&&R.call(this,L.keywords),typeof L.meta=="object"&&this.addMetaSchema(L.meta),O.call(this),L.validateFormats=E}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:L,meta:le,schemaId:T}=this.opts;let E=m;T==="id"&&(E={...m},E.id=E.$id,delete E.$id),le&&L&&this.addMetaSchema(E,E[T],!1)}defaultMeta(){const{meta:L,schemaId:le}=this.opts;return this.opts.defaultMeta=typeof L=="object"?L[le]||L:void 0}validate(L,le){let T;if(typeof L=="string"){if(T=this.getSchema(L),!T)throw new Error(`no schema with key or ref "${L}"`)}else T=this.compile(L);const E=T(le);return"$async"in T||(this.errors=T.errors),E}compile(L,le){const T=this._addSchema(L,le);return T.validate||this._compileSchemaEnv(T)}compileAsync(L,le){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:T}=this.opts;return E.call(this,L,le);async function E(be,P){await M.call(this,be.$schema);const I=this._addSchema(be,P);return I.validate||oe.call(this,I)}async function M(be){be&&!this.getSchema(be)&&await E.call(this,{$ref:be},!0)}async function oe(be){try{return this._compileSchemaEnv(be)}catch(P){if(!(P instanceof s.default))throw P;return Oe.call(this,P),await ae.call(this,P.missingSchema),oe.call(this,be)}}function Oe({missingSchema:be,missingRef:P}){if(this.refs[be])throw new Error(`AnySchema ${be} is loaded but ${P} cannot be resolved`)}async function ae(be){const P=await J.call(this,be);this.refs[be]||await M.call(this,P.$schema),this.refs[be]||this.addSchema(P,be,le)}async function J(be){const P=this._loading[be];if(P)return P;try{return await(this._loading[be]=T(be))}finally{delete this._loading[be]}}}addSchema(L,le,T,E=this.opts.validateSchema){if(Array.isArray(L)){for(const oe of L)this.addSchema(oe,void 0,T,E);return this}let M;if(typeof L=="object"){const{schemaId:oe}=this.opts;if(M=L[oe],M!==void 0&&typeof M!="string")throw new Error(`schema ${oe} must be string`)}return le=(0,c.normalizeId)(le||M),this._checkUnique(le),this.schemas[le]=this._addSchema(L,T,le,E,!0),this}addMetaSchema(L,le,T=this.opts.validateSchema){return this.addSchema(L,le,!0,T),this}validateSchema(L,le){if(typeof L=="boolean")return!0;let T;if(T=L.$schema,T!==void 0&&typeof T!="string")throw new Error("$schema must be a string");if(T=T||this.opts.defaultMeta||this.defaultMeta(),!T)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const E=this.validate(T,L);if(!E&&le){const M="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(M);else throw new Error(M)}return E}getSchema(L){let le;for(;typeof(le=k.call(this,L))=="string";)L=le;if(le===void 0){const{schemaId:T}=this.opts,E=new i.SchemaEnv({schema:{},schemaId:T});if(le=i.resolveSchema.call(this,E,L),!le)return;this.refs[L]=le}return le.validate||this._compileSchemaEnv(le)}removeSchema(L){if(L instanceof RegExp)return this._removeAllSchemas(this.schemas,L),this._removeAllSchemas(this.refs,L),this;switch(typeof L){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const le=k.call(this,L);return typeof le=="object"&&this._cache.delete(le.schema),delete this.schemas[L],delete this.refs[L],this}case"object":{const le=L;this._cache.delete(le);let T=L[this.opts.schemaId];return T&&(T=(0,c.normalizeId)(T),delete this.schemas[T],delete this.refs[T]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(L){for(const le of L)this.addKeyword(le);return this}addKeyword(L,le){let T;if(typeof L=="string")T=L,typeof le=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),le.keyword=T);else if(typeof L=="object"&&le===void 0){if(le=L,T=le.keyword,Array.isArray(T)&&!T.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(je.call(this,T,le),!le)return(0,u.eachItem)(T,M=>Q.call(this,M)),this;Re.call(this,le);const E={...le,type:(0,d.getJSONTypes)(le.type),schemaType:(0,d.getJSONTypes)(le.schemaType)};return(0,u.eachItem)(T,E.type.length===0?M=>Q.call(this,M,E):M=>E.type.forEach(oe=>Q.call(this,M,E,oe))),this}getKeyword(L){const le=this.RULES.all[L];return typeof le=="object"?le.definition:!!le}removeKeyword(L){const{RULES:le}=this;delete le.keywords[L],delete le.all[L];for(const T of le.rules){const E=T.rules.findIndex(M=>M.keyword===L);E>=0&&T.rules.splice(E,1)}return this}addFormat(L,le){return typeof le=="string"&&(le=new RegExp(le)),this.formats[L]=le,this}errorsText(L=this.errors,{separator:le=", ",dataVar:T="data"}={}){return!L||L.length===0?"No errors":L.map(E=>`${T}${E.instancePath} ${E.message}`).reduce((E,M)=>E+le+M)}$dataMetaSchema(L,le){const T=this.RULES.all;L=JSON.parse(JSON.stringify(L));for(const E of le){const M=E.split("/").slice(1);let oe=L;for(const Oe of M)oe=oe[Oe];for(const Oe in T){const ae=T[Oe];if(typeof ae!="object")continue;const{$data:J}=ae.definition,be=oe[Oe];J&&be&&(oe[Oe]=ce(be))}}return L}_removeAllSchemas(L,le){for(const T in L){const E=L[T];(!le||le.test(T))&&(typeof E=="string"?delete L[T]:E&&!E.meta&&(this._cache.delete(E.schema),delete L[T]))}}_addSchema(L,le,T,E=this.opts.validateSchema,M=this.opts.addUsedSchema){let oe;const{schemaId:Oe}=this.opts;if(typeof L=="object")oe=L[Oe];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof L!="boolean")throw new Error("schema must be object or boolean")}let ae=this._cache.get(L);if(ae!==void 0)return ae;T=(0,c.normalizeId)(oe||T);const J=c.getSchemaRefs.call(this,L,T);return ae=new i.SchemaEnv({schema:L,schemaId:Oe,meta:le,baseId:T,localRefs:J}),this._cache.set(ae.schema,ae),M&&!T.startsWith("#")&&(T&&this._checkUnique(T),this.refs[T]=ae),E&&this.validateSchema(L,!0),ae}_checkUnique(L){if(this.schemas[L]||this.refs[L])throw new Error(`schema with key or id "${L}" already exists`)}_compileSchemaEnv(L){if(L.meta?this._compileMetaSchema(L):i.compileSchema.call(this,L),!L.validate)throw new Error("ajv implementation error");return L.validate}_compileMetaSchema(L){const le=this.opts;this.opts=this._metaOpts;try{i.compileSchema.call(this,L)}finally{this.opts=le}}}x.ValidationError=o.default,x.MissingRefError=s.default,e.default=x;function w(B,L,le,T="error"){for(const E in B){const M=E;M in L&&this.logger[T](`${le}: option ${E}. ${B[M]}`)}}function k(B){return B=(0,c.normalizeId)(B),this.schemas[B]||this.refs[B]}function O(){const B=this.opts.schemas;if(B)if(Array.isArray(B))this.addSchema(B);else for(const L in B)this.addSchema(B[L],L)}function A(){for(const B in this.opts.formats){const L=this.opts.formats[B];L&&this.addFormat(B,L)}}function R(B){if(Array.isArray(B)){this.addVocabulary(B);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const L in B){const le=B[L];le.keyword||(le.keyword=L),this.addKeyword(le)}}function ne(){const B={...this.opts};for(const L of h)delete B[L];return B}const G={log(){},warn(){},error(){}};function F(B){if(B===!1)return G;if(B===void 0)return console;if(B.log&&B.warn&&B.error)return B;throw new Error("logger must implement log, warn and error methods")}const Z=/^[a-z_$][a-z0-9_$:-]*$/i;function je(B,L){const{RULES:le}=this;if((0,u.eachItem)(B,T=>{if(le.keywords[T])throw new Error(`Keyword ${T} is already defined`);if(!Z.test(T))throw new Error(`Keyword ${T} has invalid name`)}),!!L&&L.$data&&!("code"in L||"validate"in L))throw new Error('$data keyword must have "code" or "validate" function')}function Q(B,L,le){var T;const E=L?.post;if(le&&E)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:M}=this;let oe=E?M.post:M.rules.find(({type:ae})=>ae===le);if(oe||(oe={type:le,rules:[]},M.rules.push(oe)),M.keywords[B]=!0,!L)return;const Oe={keyword:B,definition:{...L,type:(0,d.getJSONTypes)(L.type),schemaType:(0,d.getJSONTypes)(L.schemaType)}};L.before?we.call(this,oe,Oe,L.before):oe.rules.push(Oe),M.all[B]=Oe,(T=L.implements)===null||T===void 0||T.forEach(ae=>this.addKeyword(ae))}function we(B,L,le){const T=B.rules.findIndex(E=>E.keyword===le);T>=0?B.rules.splice(T,0,L):(B.rules.push(L),this.logger.warn(`rule ${le} is not defined`))}function Re(B){let{metaSchema:L}=B;L!==void 0&&(B.$data&&this.opts.$data&&(L=ce(L)),B.validateSchema=this.compile(L,!0))}const Ee={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function ce(B){return{anyOf:[B,Ee]}}}(Cd)),Cd}var mc={},gc={},bc={},Vp;function ex(){if(Vp)return bc;Vp=1,Object.defineProperty(bc,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return bc.default=e,bc}var Fa={},Bp;function tx(){if(Bp)return Fa;Bp=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.callRef=Fa.getValidate=void 0;const e=od(),t=ta(),r=gn(),o=fs(),s=mv(),a=zn(),i={keyword:"$ref",schemaType:"string",code(d){const{gen:u,schema:m,it:b}=d,{baseId:y,schemaEnv:h,validateName:j,opts:v,self:p}=b,{root:f}=h;if((m==="#"||m==="#/")&&y===f.baseId)return x();const g=s.resolveRef.call(p,f,y,m);if(g===void 0)throw new e.default(b.opts.uriResolver,y,m);if(g instanceof s.SchemaEnv)return w(g);return k(g);function x(){if(h===f)return c(d,j,h,h.$async);const O=u.scopeValue("root",{ref:f});return c(d,(0,r._)`${O}.validate`,f,f.$async)}function w(O){const A=l(d,O);c(d,A,O,O.$async)}function k(O){const A=u.scopeValue("schema",v.code.source===!0?{ref:O,code:(0,r.stringify)(O)}:{ref:O}),R=u.name("valid"),ne=d.subschema({schema:O,dataTypes:[],schemaPath:r.nil,topSchemaRef:A,errSchemaPath:m},R);d.mergeEvaluated(ne),d.ok(R)}}};function l(d,u){const{gen:m}=d;return u.validate?m.scopeValue("validate",{ref:u.validate}):(0,r._)`${m.scopeValue("wrapper",{ref:u})}.validate`}Fa.getValidate=l;function c(d,u,m,b){const{gen:y,it:h}=d,{allErrors:j,schemaEnv:v,opts:p}=h,f=p.passContext?o.default.this:r.nil;b?g():x();function g(){if(!v.$async)throw new Error("async schema referenced by sync schema");const O=y.let("valid");y.try(()=>{y.code((0,r._)`await ${(0,t.callValidateCode)(d,u,f)}`),k(u),j||y.assign(O,!0)},A=>{y.if((0,r._)`!(${A} instanceof ${h.ValidationError})`,()=>y.throw(A)),w(A),j||y.assign(O,!1)}),d.ok(O)}function x(){d.result((0,t.callValidateCode)(d,u,f),()=>k(u),()=>w(u))}function w(O){const A=(0,r._)`${O}.errors`;y.assign(o.default.vErrors,(0,r._)`${o.default.vErrors} === null ? ${A} : ${o.default.vErrors}.concat(${A})`),y.assign(o.default.errors,(0,r._)`${o.default.vErrors}.length`)}function k(O){var A;if(!h.opts.unevaluated)return;const R=(A=m?.validate)===null||A===void 0?void 0:A.evaluated;if(h.props!==!0)if(R&&!R.dynamicProps)R.props!==void 0&&(h.props=a.mergeEvaluated.props(y,R.props,h.props));else{const ne=y.var("props",(0,r._)`${O}.evaluated.props`);h.props=a.mergeEvaluated.props(y,ne,h.props,r.Name)}if(h.items!==!0)if(R&&!R.dynamicItems)R.items!==void 0&&(h.items=a.mergeEvaluated.items(y,R.items,h.items));else{const ne=y.var("items",(0,r._)`${O}.evaluated.items`);h.items=a.mergeEvaluated.items(y,ne,h.items,r.Name)}}}return Fa.callRef=c,Fa.default=i,Fa}var Wp;function nx(){if(Wp)return gc;Wp=1,Object.defineProperty(gc,"__esModule",{value:!0});const e=ex(),t=tx(),r=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return gc.default=r,gc}var yc={},jc={},Hp;function rx(){if(Hp)return jc;Hp=1,Object.defineProperty(jc,"__esModule",{value:!0});const e=gn(),t=e.operators,r={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},o={message:({keyword:a,schemaCode:i})=>(0,e.str)`must be ${r[a].okStr} ${i}`,params:({keyword:a,schemaCode:i})=>(0,e._)`{comparison: ${r[a].okStr}, limit: ${i}}`},s={keyword:Object.keys(r),type:"number",schemaType:"number",$data:!0,error:o,code(a){const{keyword:i,data:l,schemaCode:c}=a;a.fail$data((0,e._)`${l} ${r[i].fail} ${c} || isNaN(${l})`)}};return jc.default=s,jc}var wc={},Kp;function ox(){if(Kp)return wc;Kp=1,Object.defineProperty(wc,"__esModule",{value:!0});const e=gn(),r={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:o})=>(0,e.str)`must be multiple of ${o}`,params:({schemaCode:o})=>(0,e._)`{multipleOf: ${o}}`},code(o){const{gen:s,data:a,schemaCode:i,it:l}=o,c=l.opts.multipleOfPrecision,d=s.let("res"),u=c?(0,e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}`:(0,e._)`${d} !== parseInt(${d})`;o.fail$data((0,e._)`(${i} === 0 || (${d} = ${a}/${i}, ${u}))`)}};return wc.default=r,wc}var xc={},kc={},Jp;function ax(){if(Jp)return kc;Jp=1,Object.defineProperty(kc,"__esModule",{value:!0});function e(t){const r=t.length;let o=0,s=0,a;for(;s<r;)o++,a=t.charCodeAt(s++),a>=55296&&a<=56319&&s<r&&(a=t.charCodeAt(s),(a&64512)===56320&&s++);return o}return kc.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',kc}var Qp;function sx(){if(Qp)return xc;Qp=1,Object.defineProperty(xc,"__esModule",{value:!0});const e=gn(),t=zn(),r=ax(),s={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:i}){const l=a==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${l} than ${i} characters`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:i,data:l,schemaCode:c,it:d}=a,u=i==="maxLength"?e.operators.GT:e.operators.LT,m=d.opts.unicode===!1?(0,e._)`${l}.length`:(0,e._)`${(0,t.useFunc)(a.gen,r.default)}(${l})`;a.fail$data((0,e._)`${m} ${u} ${c}`)}};return xc.default=s,xc}var Sc={},Gp;function ix(){if(Gp)return Sc;Gp=1,Object.defineProperty(Sc,"__esModule",{value:!0});const e=ta(),t=gn(),o={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,t.str)`must match pattern "${s}"`,params:({schemaCode:s})=>(0,t._)`{pattern: ${s}}`},code(s){const{data:a,$data:i,schema:l,schemaCode:c,it:d}=s,u=d.opts.unicodeRegExp?"u":"",m=i?(0,t._)`(new RegExp(${c}, ${u}))`:(0,e.usePattern)(s,l);s.fail$data((0,t._)`!${m}.test(${a})`)}};return Sc.default=o,Sc}var _c={},Yp;function lx(){if(Yp)return _c;Yp=1,Object.defineProperty(_c,"__esModule",{value:!0});const e=gn(),r={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:o,schemaCode:s}){const a=o==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${s} properties`},params:({schemaCode:o})=>(0,e._)`{limit: ${o}}`},code(o){const{keyword:s,data:a,schemaCode:i}=o,l=s==="maxProperties"?e.operators.GT:e.operators.LT;o.fail$data((0,e._)`Object.keys(${a}).length ${l} ${i}`)}};return _c.default=r,_c}var Cc={},Xp;function cx(){if(Xp)return Cc;Xp=1,Object.defineProperty(Cc,"__esModule",{value:!0});const e=ta(),t=gn(),r=zn(),s={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:a}})=>(0,t.str)`must have required property '${a}'`,params:({params:{missingProperty:a}})=>(0,t._)`{missingProperty: ${a}}`},code(a){const{gen:i,schema:l,schemaCode:c,data:d,$data:u,it:m}=a,{opts:b}=m;if(!u&&l.length===0)return;const y=l.length>=b.loopRequired;if(m.allErrors?h():j(),b.strictRequired){const f=a.parentSchema.properties,{definedProperties:g}=a.it;for(const x of l)if(f?.[x]===void 0&&!g.has(x)){const w=m.schemaEnv.baseId+m.errSchemaPath,k=`required property "${x}" is not defined at "${w}" (strictRequired)`;(0,r.checkStrictMode)(m,k,m.opts.strictRequired)}}function h(){if(y||u)a.block$data(t.nil,v);else for(const f of l)(0,e.checkReportMissingProp)(a,f)}function j(){const f=i.let("missing");if(y||u){const g=i.let("valid",!0);a.block$data(g,()=>p(f,g)),a.ok(g)}else i.if((0,e.checkMissingProp)(a,l,f)),(0,e.reportMissingProp)(a,f),i.else()}function v(){i.forOf("prop",c,f=>{a.setParams({missingProperty:f}),i.if((0,e.noPropertyInData)(i,d,f,b.ownProperties),()=>a.error())})}function p(f,g){a.setParams({missingProperty:f}),i.forOf(f,c,()=>{i.assign(g,(0,e.propertyInData)(i,d,f,b.ownProperties)),i.if((0,t.not)(g),()=>{a.error(),i.break()})},t.nil)}}};return Cc.default=s,Cc}var Ec={},Zp;function ux(){if(Zp)return Ec;Zp=1,Object.defineProperty(Ec,"__esModule",{value:!0});const e=gn(),r={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:o,schemaCode:s}){const a=o==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${s} items`},params:({schemaCode:o})=>(0,e._)`{limit: ${o}}`},code(o){const{keyword:s,data:a,schemaCode:i}=o,l=s==="maxItems"?e.operators.GT:e.operators.LT;o.fail$data((0,e._)`${a}.length ${l} ${i}`)}};return Ec.default=r,Ec}var Oc={},$c={},eh;function gv(){if(eh)return $c;eh=1,Object.defineProperty($c,"__esModule",{value:!0});const e=lg();return e.code='require("ajv/dist/runtime/equal").default',$c.default=e,$c}var th;function dx(){if(th)return Oc;th=1,Object.defineProperty(Oc,"__esModule",{value:!0});const e=Ou(),t=gn(),r=zn(),o=gv(),a={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i,j:l}})=>(0,t.str)`must NOT have duplicate items (items ## ${l} and ${i} are identical)`,params:({params:{i,j:l}})=>(0,t._)`{i: ${i}, j: ${l}}`},code(i){const{gen:l,data:c,$data:d,schema:u,parentSchema:m,schemaCode:b,it:y}=i;if(!d&&!u)return;const h=l.let("valid"),j=m.items?(0,e.getSchemaTypes)(m.items):[];i.block$data(h,v,(0,t._)`${b} === false`),i.ok(h);function v(){const x=l.let("i",(0,t._)`${c}.length`),w=l.let("j");i.setParams({i:x,j:w}),l.assign(h,!0),l.if((0,t._)`${x} > 1`,()=>(p()?f:g)(x,w))}function p(){return j.length>0&&!j.some(x=>x==="object"||x==="array")}function f(x,w){const k=l.name("item"),O=(0,e.checkDataTypes)(j,k,y.opts.strictNumbers,e.DataType.Wrong),A=l.const("indices",(0,t._)`{}`);l.for((0,t._)`;${x}--;`,()=>{l.let(k,(0,t._)`${c}[${x}]`),l.if(O,(0,t._)`continue`),j.length>1&&l.if((0,t._)`typeof ${k} == "string"`,(0,t._)`${k} += "_"`),l.if((0,t._)`typeof ${A}[${k}] == "number"`,()=>{l.assign(w,(0,t._)`${A}[${k}]`),i.error(),l.assign(h,!1).break()}).code((0,t._)`${A}[${k}] = ${x}`)})}function g(x,w){const k=(0,r.useFunc)(l,o.default),O=l.name("outer");l.label(O).for((0,t._)`;${x}--;`,()=>l.for((0,t._)`${w} = ${x}; ${w}--;`,()=>l.if((0,t._)`${k}(${c}[${x}], ${c}[${w}])`,()=>{i.error(),l.assign(h,!1).break(O)})))}}};return Oc.default=a,Oc}var Pc={},nh;function fx(){if(nh)return Pc;nh=1,Object.defineProperty(Pc,"__esModule",{value:!0});const e=gn(),t=zn(),r=gv(),s={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:a})=>(0,e._)`{allowedValue: ${a}}`},code(a){const{gen:i,data:l,$data:c,schemaCode:d,schema:u}=a;c||u&&typeof u=="object"?a.fail$data((0,e._)`!${(0,t.useFunc)(i,r.default)}(${l}, ${d})`):a.fail((0,e._)`${u} !== ${l}`)}};return Pc.default=s,Pc}var Mc={},rh;function vx(){if(rh)return Mc;rh=1,Object.defineProperty(Mc,"__esModule",{value:!0});const e=gn(),t=zn(),r=gv(),s={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:a})=>(0,e._)`{allowedValues: ${a}}`},code(a){const{gen:i,data:l,$data:c,schema:d,schemaCode:u,it:m}=a;if(!c&&d.length===0)throw new Error("enum must have non-empty array");const b=d.length>=m.opts.loopEnum;let y;const h=()=>y??(y=(0,t.useFunc)(i,r.default));let j;if(b||c)j=i.let("valid"),a.block$data(j,v);else{if(!Array.isArray(d))throw new Error("ajv implementation error");const f=i.const("vSchema",u);j=(0,e.or)(...d.map((g,x)=>p(f,x)))}a.pass(j);function v(){i.assign(j,!1),i.forOf("v",u,f=>i.if((0,e._)`${h()}(${l}, ${f})`,()=>i.assign(j,!0).break()))}function p(f,g){const x=d[g];return typeof x=="object"&&x!==null?(0,e._)`${h()}(${l}, ${f}[${g}])`:(0,e._)`${l} === ${x}`}}};return Mc.default=s,Mc}var oh;function px(){if(oh)return yc;oh=1,Object.defineProperty(yc,"__esModule",{value:!0});const e=rx(),t=ox(),r=sx(),o=ix(),s=lx(),a=cx(),i=ux(),l=dx(),c=fx(),d=vx(),u=[e.default,t.default,r.default,o.default,s.default,a.default,i.default,l.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},c.default,d.default];return yc.default=u,yc}var Rc={},oi={},ah;function Ig(){if(ah)return oi;ah=1,Object.defineProperty(oi,"__esModule",{value:!0}),oi.validateAdditionalItems=void 0;const e=gn(),t=zn(),o={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:a}})=>(0,e.str)`must NOT have more than ${a} items`,params:({params:{len:a}})=>(0,e._)`{limit: ${a}}`},code(a){const{parentSchema:i,it:l}=a,{items:c}=i;if(!Array.isArray(c)){(0,t.checkStrictMode)(l,'"additionalItems" is ignored when "items" is not an array of schemas');return}s(a,c)}};function s(a,i){const{gen:l,schema:c,data:d,keyword:u,it:m}=a;m.items=!0;const b=l.const("len",(0,e._)`${d}.length`);if(c===!1)a.setParams({len:i.length}),a.pass((0,e._)`${b} <= ${i.length}`);else if(typeof c=="object"&&!(0,t.alwaysValidSchema)(m,c)){const h=l.var("valid",(0,e._)`${b} <= ${i.length}`);l.if((0,e.not)(h),()=>y(h)),a.ok(h)}function y(h){l.forRange("i",i.length,b,j=>{a.subschema({keyword:u,dataProp:j,dataPropType:t.Type.Num},h),m.allErrors||l.if((0,e.not)(h),()=>l.break())})}}return oi.validateAdditionalItems=s,oi.default=o,oi}var Nc={},ai={},sh;function Dg(){if(sh)return ai;sh=1,Object.defineProperty(ai,"__esModule",{value:!0}),ai.validateTuple=void 0;const e=gn(),t=zn(),r=ta(),o={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(a){const{schema:i,it:l}=a;if(Array.isArray(i))return s(a,"additionalItems",i);l.items=!0,!(0,t.alwaysValidSchema)(l,i)&&a.ok((0,r.validateArray)(a))}};function s(a,i,l=a.schema){const{gen:c,parentSchema:d,data:u,keyword:m,it:b}=a;j(d),b.opts.unevaluated&&l.length&&b.items!==!0&&(b.items=t.mergeEvaluated.items(c,l.length,b.items));const y=c.name("valid"),h=c.const("len",(0,e._)`${u}.length`);l.forEach((v,p)=>{(0,t.alwaysValidSchema)(b,v)||(c.if((0,e._)`${h} > ${p}`,()=>a.subschema({keyword:m,schemaProp:p,dataProp:p},y)),a.ok(y))});function j(v){const{opts:p,errSchemaPath:f}=b,g=l.length,x=g===v.minItems&&(g===v.maxItems||v[i]===!1);if(p.strictTuples&&!x){const w=`"${m}" is ${g}-tuple, but minItems or maxItems/${i} are not specified or different at path "${f}"`;(0,t.checkStrictMode)(b,w,p.strictTuples)}}}return ai.validateTuple=s,ai.default=o,ai}var ih;function hx(){if(ih)return Nc;ih=1,Object.defineProperty(Nc,"__esModule",{value:!0});const e=Dg(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:r=>(0,e.validateTuple)(r,"items")};return Nc.default=t,Nc}var Tc={},lh;function mx(){if(lh)return Tc;lh=1,Object.defineProperty(Tc,"__esModule",{value:!0});const e=gn(),t=zn(),r=ta(),o=Ig(),a={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:i}})=>(0,e.str)`must NOT have more than ${i} items`,params:({params:{len:i}})=>(0,e._)`{limit: ${i}}`},code(i){const{schema:l,parentSchema:c,it:d}=i,{prefixItems:u}=c;d.items=!0,!(0,t.alwaysValidSchema)(d,l)&&(u?(0,o.validateAdditionalItems)(i,u):i.ok((0,r.validateArray)(i)))}};return Tc.default=a,Tc}var Ac={},ch;function gx(){if(ch)return Ac;ch=1,Object.defineProperty(Ac,"__esModule",{value:!0});const e=gn(),t=zn(),o={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:s,max:a}})=>a===void 0?(0,e.str)`must contain at least ${s} valid item(s)`:(0,e.str)`must contain at least ${s} and no more than ${a} valid item(s)`,params:({params:{min:s,max:a}})=>a===void 0?(0,e._)`{minContains: ${s}}`:(0,e._)`{minContains: ${s}, maxContains: ${a}}`},code(s){const{gen:a,schema:i,parentSchema:l,data:c,it:d}=s;let u,m;const{minContains:b,maxContains:y}=l;d.opts.next?(u=b===void 0?1:b,m=y):u=1;const h=a.const("len",(0,e._)`${c}.length`);if(s.setParams({min:u,max:m}),m===void 0&&u===0){(0,t.checkStrictMode)(d,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(m!==void 0&&u>m){(0,t.checkStrictMode)(d,'"minContains" > "maxContains" is always invalid'),s.fail();return}if((0,t.alwaysValidSchema)(d,i)){let g=(0,e._)`${h} >= ${u}`;m!==void 0&&(g=(0,e._)`${g} && ${h} <= ${m}`),s.pass(g);return}d.items=!0;const j=a.name("valid");m===void 0&&u===1?p(j,()=>a.if(j,()=>a.break())):u===0?(a.let(j,!0),m!==void 0&&a.if((0,e._)`${c}.length > 0`,v)):(a.let(j,!1),v()),s.result(j,()=>s.reset());function v(){const g=a.name("_valid"),x=a.let("count",0);p(g,()=>a.if(g,()=>f(x)))}function p(g,x){a.forRange("i",0,h,w=>{s.subschema({keyword:"contains",dataProp:w,dataPropType:t.Type.Num,compositeRule:!0},g),x()})}function f(g){a.code((0,e._)`${g}++`),m===void 0?a.if((0,e._)`${g} >= ${u}`,()=>a.assign(j,!0).break()):(a.if((0,e._)`${g} > ${m}`,()=>a.assign(j,!1).break()),u===1?a.assign(j,!0):a.if((0,e._)`${g} >= ${u}`,()=>a.assign(j,!0)))}}};return Ac.default=o,Ac}var Ad={},uh;function bx(){return uh||(uh=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=gn(),r=zn(),o=ta();e.error={message:({params:{property:c,depsCount:d,deps:u}})=>{const m=d===1?"property":"properties";return(0,t.str)`must have ${m} ${u} when property ${c} is present`},params:({params:{property:c,depsCount:d,deps:u,missingProperty:m}})=>(0,t._)`{property: ${c},
    missingProperty: ${m},
    depsCount: ${d},
    deps: ${u}}`};const s={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(c){const[d,u]=a(c);i(c,d),l(c,u)}};function a({schema:c}){const d={},u={};for(const m in c){if(m==="__proto__")continue;const b=Array.isArray(c[m])?d:u;b[m]=c[m]}return[d,u]}function i(c,d=c.schema){const{gen:u,data:m,it:b}=c;if(Object.keys(d).length===0)return;const y=u.let("missing");for(const h in d){const j=d[h];if(j.length===0)continue;const v=(0,o.propertyInData)(u,m,h,b.opts.ownProperties);c.setParams({property:h,depsCount:j.length,deps:j.join(", ")}),b.allErrors?u.if(v,()=>{for(const p of j)(0,o.checkReportMissingProp)(c,p)}):(u.if((0,t._)`${v} && (${(0,o.checkMissingProp)(c,j,y)})`),(0,o.reportMissingProp)(c,y),u.else())}}e.validatePropertyDeps=i;function l(c,d=c.schema){const{gen:u,data:m,keyword:b,it:y}=c,h=u.name("valid");for(const j in d)(0,r.alwaysValidSchema)(y,d[j])||(u.if((0,o.propertyInData)(u,m,j,y.opts.ownProperties),()=>{const v=c.subschema({keyword:b,schemaProp:j},h);c.mergeValidEvaluated(v,h)},()=>u.var(h,!0)),c.ok(h))}e.validateSchemaDeps=l,e.default=s}(Ad)),Ad}var qc={},dh;function yx(){if(dh)return qc;dh=1,Object.defineProperty(qc,"__esModule",{value:!0});const e=gn(),t=zn(),o={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:s})=>(0,e._)`{propertyName: ${s.propertyName}}`},code(s){const{gen:a,schema:i,data:l,it:c}=s;if((0,t.alwaysValidSchema)(c,i))return;const d=a.name("valid");a.forIn("key",l,u=>{s.setParams({propertyName:u}),s.subschema({keyword:"propertyNames",data:u,dataTypes:["string"],propertyName:u,compositeRule:!0},d),a.if((0,e.not)(d),()=>{s.error(!0),c.allErrors||a.break()})}),s.ok(d)}};return qc.default=o,qc}var zc={},fh;function Lg(){if(fh)return zc;fh=1,Object.defineProperty(zc,"__esModule",{value:!0});const e=ta(),t=gn(),r=fs(),o=zn(),a={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:i})=>(0,t._)`{additionalProperty: ${i.additionalProperty}}`},code(i){const{gen:l,schema:c,parentSchema:d,data:u,errsCount:m,it:b}=i;if(!m)throw new Error("ajv implementation error");const{allErrors:y,opts:h}=b;if(b.props=!0,h.removeAdditional!=="all"&&(0,o.alwaysValidSchema)(b,c))return;const j=(0,e.allSchemaProperties)(d.properties),v=(0,e.allSchemaProperties)(d.patternProperties);p(),i.ok((0,t._)`${m} === ${r.default.errors}`);function p(){l.forIn("key",u,k=>{!j.length&&!v.length?x(k):l.if(f(k),()=>x(k))})}function f(k){let O;if(j.length>8){const A=(0,o.schemaRefOrVal)(b,d.properties,"properties");O=(0,e.isOwnProperty)(l,A,k)}else j.length?O=(0,t.or)(...j.map(A=>(0,t._)`${k} === ${A}`)):O=t.nil;return v.length&&(O=(0,t.or)(O,...v.map(A=>(0,t._)`${(0,e.usePattern)(i,A)}.test(${k})`))),(0,t.not)(O)}function g(k){l.code((0,t._)`delete ${u}[${k}]`)}function x(k){if(h.removeAdditional==="all"||h.removeAdditional&&c===!1){g(k);return}if(c===!1){i.setParams({additionalProperty:k}),i.error(),y||l.break();return}if(typeof c=="object"&&!(0,o.alwaysValidSchema)(b,c)){const O=l.name("valid");h.removeAdditional==="failing"?(w(k,O,!1),l.if((0,t.not)(O),()=>{i.reset(),g(k)})):(w(k,O),y||l.if((0,t.not)(O),()=>l.break()))}}function w(k,O,A){const R={keyword:"additionalProperties",dataProp:k,dataPropType:o.Type.Str};A===!1&&Object.assign(R,{compositeRule:!0,createErrors:!1,allErrors:!1}),i.subschema(R,O)}}};return zc.default=a,zc}var Ic={},vh;function jx(){if(vh)return Ic;vh=1,Object.defineProperty(Ic,"__esModule",{value:!0});const e=rd(),t=ta(),r=zn(),o=Lg(),s={keyword:"properties",type:"object",schemaType:"object",code(a){const{gen:i,schema:l,parentSchema:c,data:d,it:u}=a;u.opts.removeAdditional==="all"&&c.additionalProperties===void 0&&o.default.code(new e.KeywordCxt(u,o.default,"additionalProperties"));const m=(0,t.allSchemaProperties)(l);for(const v of m)u.definedProperties.add(v);u.opts.unevaluated&&m.length&&u.props!==!0&&(u.props=r.mergeEvaluated.props(i,(0,r.toHash)(m),u.props));const b=m.filter(v=>!(0,r.alwaysValidSchema)(u,l[v]));if(b.length===0)return;const y=i.name("valid");for(const v of b)h(v)?j(v):(i.if((0,t.propertyInData)(i,d,v,u.opts.ownProperties)),j(v),u.allErrors||i.else().var(y,!0),i.endIf()),a.it.definedProperties.add(v),a.ok(y);function h(v){return u.opts.useDefaults&&!u.compositeRule&&l[v].default!==void 0}function j(v){a.subschema({keyword:"properties",schemaProp:v,dataProp:v},y)}}};return Ic.default=s,Ic}var Dc={},ph;function wx(){if(ph)return Dc;ph=1,Object.defineProperty(Dc,"__esModule",{value:!0});const e=ta(),t=gn(),r=zn(),o=zn(),s={keyword:"patternProperties",type:"object",schemaType:"object",code(a){const{gen:i,schema:l,data:c,parentSchema:d,it:u}=a,{opts:m}=u,b=(0,e.allSchemaProperties)(l),y=b.filter(x=>(0,r.alwaysValidSchema)(u,l[x]));if(b.length===0||y.length===b.length&&(!u.opts.unevaluated||u.props===!0))return;const h=m.strictSchema&&!m.allowMatchingProperties&&d.properties,j=i.name("valid");u.props!==!0&&!(u.props instanceof t.Name)&&(u.props=(0,o.evaluatedPropsToName)(i,u.props));const{props:v}=u;p();function p(){for(const x of b)h&&f(x),u.allErrors?g(x):(i.var(j,!0),g(x),i.if(j))}function f(x){for(const w in h)new RegExp(x).test(w)&&(0,r.checkStrictMode)(u,`property ${w} matches pattern ${x} (use allowMatchingProperties)`)}function g(x){i.forIn("key",c,w=>{i.if((0,t._)`${(0,e.usePattern)(a,x)}.test(${w})`,()=>{const k=y.includes(x);k||a.subschema({keyword:"patternProperties",schemaProp:x,dataProp:w,dataPropType:o.Type.Str},j),u.opts.unevaluated&&v!==!0?i.assign((0,t._)`${v}[${w}]`,!0):!k&&!u.allErrors&&i.if((0,t.not)(j),()=>i.break())})})}}};return Dc.default=s,Dc}var Lc={},hh;function xx(){if(hh)return Lc;hh=1,Object.defineProperty(Lc,"__esModule",{value:!0});const e=zn(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(r){const{gen:o,schema:s,it:a}=r;if((0,e.alwaysValidSchema)(a,s)){r.fail();return}const i=o.name("valid");r.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},i),r.failResult(i,()=>r.reset(),()=>r.error())},error:{message:"must NOT be valid"}};return Lc.default=t,Lc}var Uc={},mh;function kx(){if(mh)return Uc;mh=1,Object.defineProperty(Uc,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:ta().validateUnion,error:{message:"must match a schema in anyOf"}};return Uc.default=t,Uc}var Fc={},gh;function Sx(){if(gh)return Fc;gh=1,Object.defineProperty(Fc,"__esModule",{value:!0});const e=gn(),t=zn(),o={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:s})=>(0,e._)`{passingSchemas: ${s.passing}}`},code(s){const{gen:a,schema:i,parentSchema:l,it:c}=s;if(!Array.isArray(i))throw new Error("ajv implementation error");if(c.opts.discriminator&&l.discriminator)return;const d=i,u=a.let("valid",!1),m=a.let("passing",null),b=a.name("_valid");s.setParams({passing:m}),a.block(y),s.result(u,()=>s.reset(),()=>s.error(!0));function y(){d.forEach((h,j)=>{let v;(0,t.alwaysValidSchema)(c,h)?a.var(b,!0):v=s.subschema({keyword:"oneOf",schemaProp:j,compositeRule:!0},b),j>0&&a.if((0,e._)`${b} && ${u}`).assign(u,!1).assign(m,(0,e._)`[${m}, ${j}]`).else(),a.if(b,()=>{a.assign(u,!0),a.assign(m,j),v&&s.mergeEvaluated(v,e.Name)})})}}};return Fc.default=o,Fc}var Vc={},bh;function _x(){if(bh)return Vc;bh=1,Object.defineProperty(Vc,"__esModule",{value:!0});const e=zn(),t={keyword:"allOf",schemaType:"array",code(r){const{gen:o,schema:s,it:a}=r;if(!Array.isArray(s))throw new Error("ajv implementation error");const i=o.name("valid");s.forEach((l,c)=>{if((0,e.alwaysValidSchema)(a,l))return;const d=r.subschema({keyword:"allOf",schemaProp:c},i);r.ok(i),r.mergeEvaluated(d)})}};return Vc.default=t,Vc}var Bc={},yh;function Cx(){if(yh)return Bc;yh=1,Object.defineProperty(Bc,"__esModule",{value:!0});const e=gn(),t=zn(),o={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:a})=>(0,e.str)`must match "${a.ifClause}" schema`,params:({params:a})=>(0,e._)`{failingKeyword: ${a.ifClause}}`},code(a){const{gen:i,parentSchema:l,it:c}=a;l.then===void 0&&l.else===void 0&&(0,t.checkStrictMode)(c,'"if" without "then" and "else" is ignored');const d=s(c,"then"),u=s(c,"else");if(!d&&!u)return;const m=i.let("valid",!0),b=i.name("_valid");if(y(),a.reset(),d&&u){const j=i.let("ifClause");a.setParams({ifClause:j}),i.if(b,h("then",j),h("else",j))}else d?i.if(b,h("then")):i.if((0,e.not)(b),h("else"));a.pass(m,()=>a.error(!0));function y(){const j=a.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},b);a.mergeEvaluated(j)}function h(j,v){return()=>{const p=a.subschema({keyword:j},b);i.assign(m,b),a.mergeValidEvaluated(p,m),v?i.assign(v,(0,e._)`${j}`):a.setParams({ifClause:j})}}}};function s(a,i){const l=a.schema[i];return l!==void 0&&!(0,t.alwaysValidSchema)(a,l)}return Bc.default=o,Bc}var Wc={},jh;function Ex(){if(jh)return Wc;jh=1,Object.defineProperty(Wc,"__esModule",{value:!0});const e=zn(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:r,parentSchema:o,it:s}){o.if===void 0&&(0,e.checkStrictMode)(s,`"${r}" without "if" is ignored`)}};return Wc.default=t,Wc}var wh;function Ox(){if(wh)return Rc;wh=1,Object.defineProperty(Rc,"__esModule",{value:!0});const e=Ig(),t=hx(),r=Dg(),o=mx(),s=gx(),a=bx(),i=yx(),l=Lg(),c=jx(),d=wx(),u=xx(),m=kx(),b=Sx(),y=_x(),h=Cx(),j=Ex();function v(p=!1){const f=[u.default,m.default,b.default,y.default,h.default,j.default,i.default,l.default,a.default,c.default,d.default];return p?f.push(t.default,o.default):f.push(e.default,r.default),f.push(s.default),f}return Rc.default=v,Rc}var Hc={},Kc={},xh;function $x(){if(xh)return Kc;xh=1,Object.defineProperty(Kc,"__esModule",{value:!0});const e=gn(),r={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:o})=>(0,e.str)`must match format "${o}"`,params:({schemaCode:o})=>(0,e._)`{format: ${o}}`},code(o,s){const{gen:a,data:i,$data:l,schema:c,schemaCode:d,it:u}=o,{opts:m,errSchemaPath:b,schemaEnv:y,self:h}=u;if(!m.validateFormats)return;l?j():v();function j(){const p=a.scopeValue("formats",{ref:h.formats,code:m.code.formats}),f=a.const("fDef",(0,e._)`${p}[${d}]`),g=a.let("fType"),x=a.let("format");a.if((0,e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`,()=>a.assign(g,(0,e._)`${f}.type || "string"`).assign(x,(0,e._)`${f}.validate`),()=>a.assign(g,(0,e._)`"string"`).assign(x,f)),o.fail$data((0,e.or)(w(),k()));function w(){return m.strictSchema===!1?e.nil:(0,e._)`${d} && !${x}`}function k(){const O=y.$async?(0,e._)`(${f}.async ? await ${x}(${i}) : ${x}(${i}))`:(0,e._)`${x}(${i})`,A=(0,e._)`(typeof ${x} == "function" ? ${O} : ${x}.test(${i}))`;return(0,e._)`${x} && ${x} !== true && ${g} === ${s} && !${A}`}}function v(){const p=h.formats[c];if(!p){w();return}if(p===!0)return;const[f,g,x]=k(p);f===s&&o.pass(O());function w(){if(m.strictSchema===!1){h.logger.warn(A());return}throw new Error(A());function A(){return`unknown format "${c}" ignored in schema at path "${b}"`}}function k(A){const R=A instanceof RegExp?(0,e.regexpCode)(A):m.code.formats?(0,e._)`${m.code.formats}${(0,e.getProperty)(c)}`:void 0,ne=a.scopeValue("formats",{key:c,ref:A,code:R});return typeof A=="object"&&!(A instanceof RegExp)?[A.type||"string",A.validate,(0,e._)`${ne}.validate`]:["string",A,ne]}function O(){if(typeof p=="object"&&!(p instanceof RegExp)&&p.async){if(!y.$async)throw new Error("async format in sync schema");return(0,e._)`await ${x}(${i})`}return typeof g=="function"?(0,e._)`${x}(${i})`:(0,e._)`${x}.test(${i})`}}}};return Kc.default=r,Kc}var kh;function Px(){if(kh)return Hc;kh=1,Object.defineProperty(Hc,"__esModule",{value:!0});const t=[$x().default];return Hc.default=t,Hc}var _s={},Sh;function Mx(){return Sh||(Sh=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.contentVocabulary=_s.metadataVocabulary=void 0,_s.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],_s.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),_s}var _h;function Rx(){if(_h)return mc;_h=1,Object.defineProperty(mc,"__esModule",{value:!0});const e=nx(),t=px(),r=Ox(),o=Px(),s=Mx(),a=[e.default,t.default,(0,r.default)(),o.default,s.metadataVocabulary,s.contentVocabulary];return mc.default=a,mc}var Jc={},dl={},Ch;function Nx(){if(Ch)return dl;Ch=1,Object.defineProperty(dl,"__esModule",{value:!0}),dl.DiscrError=void 0;var e;return function(t){t.Tag="tag",t.Mapping="mapping"}(e||(dl.DiscrError=e={})),dl}var Eh;function Tx(){if(Eh)return Jc;Eh=1,Object.defineProperty(Jc,"__esModule",{value:!0});const e=gn(),t=Nx(),r=mv(),o=od(),s=zn(),i={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:l,tagName:c}})=>l===t.DiscrError.Tag?`tag "${c}" must be string`:`value of tag "${c}" must be in oneOf`,params:({params:{discrError:l,tag:c,tagName:d}})=>(0,e._)`{error: ${l}, tag: ${d}, tagValue: ${c}}`},code(l){const{gen:c,data:d,schema:u,parentSchema:m,it:b}=l,{oneOf:y}=m;if(!b.opts.discriminator)throw new Error("discriminator: requires discriminator option");const h=u.propertyName;if(typeof h!="string")throw new Error("discriminator: requires propertyName");if(u.mapping)throw new Error("discriminator: mapping is not supported");if(!y)throw new Error("discriminator: requires oneOf keyword");const j=c.let("valid",!1),v=c.const("tag",(0,e._)`${d}${(0,e.getProperty)(h)}`);c.if((0,e._)`typeof ${v} == "string"`,()=>p(),()=>l.error(!1,{discrError:t.DiscrError.Tag,tag:v,tagName:h})),l.ok(j);function p(){const x=g();c.if(!1);for(const w in x)c.elseIf((0,e._)`${v} === ${w}`),c.assign(j,f(x[w]));c.else(),l.error(!1,{discrError:t.DiscrError.Mapping,tag:v,tagName:h}),c.endIf()}function f(x){const w=c.name("valid"),k=l.subschema({keyword:"oneOf",schemaProp:x},w);return l.mergeEvaluated(k,e.Name),w}function g(){var x;const w={},k=A(m);let O=!0;for(let G=0;G<y.length;G++){let F=y[G];if(F?.$ref&&!(0,s.schemaHasRulesButRef)(F,b.self.RULES)){const je=F.$ref;if(F=r.resolveRef.call(b.self,b.schemaEnv.root,b.baseId,je),F instanceof r.SchemaEnv&&(F=F.schema),F===void 0)throw new o.default(b.opts.uriResolver,b.baseId,je)}const Z=(x=F?.properties)===null||x===void 0?void 0:x[h];if(typeof Z!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${h}"`);O=O&&(k||A(F)),R(Z,G)}if(!O)throw new Error(`discriminator: "${h}" must be required`);return w;function A({required:G}){return Array.isArray(G)&&G.includes(h)}function R(G,F){if(G.const)ne(G.const,F);else if(G.enum)for(const Z of G.enum)ne(Z,F);else throw new Error(`discriminator: "properties/${h}" must have "const" or "enum"`)}function ne(G,F){if(typeof G!="string"||G in w)throw new Error(`discriminator: "${h}" values must be unique strings`);w[G]=F}}}};return Jc.default=i,Jc}const Ax="http://json-schema.org/draft-07/schema#",qx="http://json-schema.org/draft-07/schema#",zx="Core schema meta-schema",Ix={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Dx=["object","boolean"],Lx={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},Ux={$schema:Ax,$id:qx,title:zx,definitions:Ix,type:Dx,properties:Lx,default:!0};var Oh;function Fx(){return Oh||(Oh=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const r=Zw(),o=Rx(),s=Tx(),a=Ux,i=["/properties"],l="http://json-schema.org/draft-07/schema";class c extends r.default{_addVocabularies(){super._addVocabularies(),o.default.forEach(h=>this.addVocabulary(h)),this.opts.discriminator&&this.addKeyword(s.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const h=this.opts.$data?this.$dataMetaSchema(a,i):a;this.addMetaSchema(h,l,!1),this.refs["http://json-schema.org/schema"]=l}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(l)?l:void 0)}}t.Ajv=c,e.exports=t=c,e.exports.Ajv=c,Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var d=rd();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return d.KeywordCxt}});var u=gn();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return u._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return u.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return u.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return u.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return u.CodeGen}});var m=hv();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return m.default}});var b=od();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return b.default}})}(dc,dc.exports)),dc.exports}Fx();var qd={},$h;function Vx(){return $h||($h=1,function(e){(function(t){function r($){return $!==null?Object.prototype.toString.call($)==="[object Array]":!1}function o($){return $!==null?Object.prototype.toString.call($)==="[object Object]":!1}function s($,N){if($===N)return!0;var U=Object.prototype.toString.call($);if(U!==Object.prototype.toString.call(N))return!1;if(r($)===!0){if($.length!==N.length)return!1;for(var X=0;X<$.length;X++)if(s($[X],N[X])===!1)return!1;return!0}if(o($)===!0){var me={};for(var Ne in $)if(hasOwnProperty.call($,Ne)){if(s($[Ne],N[Ne])===!1)return!1;me[Ne]=!0}for(var qe in N)if(hasOwnProperty.call(N,qe)&&me[qe]!==!0)return!1;return!0}return!1}function a($){if($===""||$===!1||$===null)return!0;if(r($)&&$.length===0)return!0;if(o($)){for(var N in $)if($.hasOwnProperty(N))return!1;return!0}else return!1}function i($){for(var N=Object.keys($),U=[],X=0;X<N.length;X++)U.push($[N[X]]);return U}var l;typeof String.prototype.trimLeft=="function"?l=function($){return $.trimLeft()}:l=function($){return $.match(/^\s*(.*)/)[1]};var c=0,d=1,u=2,m=3,b=4,y=5,h=6,j=7,v=8,p=9,f={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},g="EOF",x="UnquotedIdentifier",w="QuotedIdentifier",k="Rbracket",O="Rparen",A="Comma",R="Colon",ne="Rbrace",G="Number",F="Current",Z="Expref",je="Pipe",Q="Or",we="And",Re="EQ",Ee="GT",ce="LT",B="GTE",L="LTE",le="NE",T="Flatten",E="Star",M="Filter",oe="Dot",Oe="Not",ae="Lbrace",J="Lbracket",be="Lparen",P="Literal",I={".":oe,"*":E,",":A,":":R,"{":ae,"}":ne,"]":k,"(":be,")":O,"@":F},D={"<":!0,">":!0,"=":!0,"!":!0},ve={" ":!0,"	":!0,"\n":!0};function Y($){return $>="a"&&$<="z"||$>="A"&&$<="Z"||$==="_"}function V($){return $>="0"&&$<="9"||$==="-"}function Qe($){return $>="a"&&$<="z"||$>="A"&&$<="Z"||$>="0"&&$<="9"||$==="_"}function rt(){}rt.prototype={tokenize:function($){var N=[];this._current=0;for(var U,X,me;this._current<$.length;)if(Y($[this._current]))U=this._current,X=this._consumeUnquotedIdentifier($),N.push({type:x,value:X,start:U});else if(I[$[this._current]]!==void 0)N.push({type:I[$[this._current]],value:$[this._current],start:this._current}),this._current++;else if(V($[this._current]))me=this._consumeNumber($),N.push(me);else if($[this._current]==="[")me=this._consumeLBracket($),N.push(me);else if($[this._current]==='"')U=this._current,X=this._consumeQuotedIdentifier($),N.push({type:w,value:X,start:U});else if($[this._current]==="'")U=this._current,X=this._consumeRawStringLiteral($),N.push({type:P,value:X,start:U});else if($[this._current]==="`"){U=this._current;var Ne=this._consumeLiteral($);N.push({type:P,value:Ne,start:U})}else if(D[$[this._current]]!==void 0)N.push(this._consumeOperator($));else if(ve[$[this._current]]!==void 0)this._current++;else if($[this._current]==="&")U=this._current,this._current++,$[this._current]==="&"?(this._current++,N.push({type:we,value:"&&",start:U})):N.push({type:Z,value:"&",start:U});else if($[this._current]==="|")U=this._current,this._current++,$[this._current]==="|"?(this._current++,N.push({type:Q,value:"||",start:U})):N.push({type:je,value:"|",start:U});else{var qe=new Error("Unknown character:"+$[this._current]);throw qe.name="LexerError",qe}return N},_consumeUnquotedIdentifier:function($){var N=this._current;for(this._current++;this._current<$.length&&Qe($[this._current]);)this._current++;return $.slice(N,this._current)},_consumeQuotedIdentifier:function($){var N=this._current;this._current++;for(var U=$.length;$[this._current]!=='"'&&this._current<U;){var X=this._current;$[X]==="\\"&&($[X+1]==="\\"||$[X+1]==='"')?X+=2:X++,this._current=X}return this._current++,JSON.parse($.slice(N,this._current))},_consumeRawStringLiteral:function($){var N=this._current;this._current++;for(var U=$.length;$[this._current]!=="'"&&this._current<U;){var X=this._current;$[X]==="\\"&&($[X+1]==="\\"||$[X+1]==="'")?X+=2:X++,this._current=X}this._current++;var me=$.slice(N+1,this._current-1);return me.replace("\\'","'")},_consumeNumber:function($){var N=this._current;this._current++;for(var U=$.length;V($[this._current])&&this._current<U;)this._current++;var X=parseInt($.slice(N,this._current));return{type:G,value:X,start:N}},_consumeLBracket:function($){var N=this._current;return this._current++,$[this._current]==="?"?(this._current++,{type:M,value:"[?",start:N}):$[this._current]==="]"?(this._current++,{type:T,value:"[]",start:N}):{type:J,value:"[",start:N}},_consumeOperator:function($){var N=this._current,U=$[N];if(this._current++,U==="!")return $[this._current]==="="?(this._current++,{type:le,value:"!=",start:N}):{type:Oe,value:"!",start:N};if(U==="<")return $[this._current]==="="?(this._current++,{type:L,value:"<=",start:N}):{type:ce,value:"<",start:N};if(U===">")return $[this._current]==="="?(this._current++,{type:B,value:">=",start:N}):{type:Ee,value:">",start:N};if(U==="="&&$[this._current]==="=")return this._current++,{type:Re,value:"==",start:N}},_consumeLiteral:function($){this._current++;for(var N=this._current,U=$.length,X;$[this._current]!=="`"&&this._current<U;){var me=this._current;$[me]==="\\"&&($[me+1]==="\\"||$[me+1]==="`")?me+=2:me++,this._current=me}var Ne=l($.slice(N,this._current));return Ne=Ne.replace("\\`","`"),this._looksLikeJSON(Ne)?X=JSON.parse(Ne):X=JSON.parse('"'+Ne+'"'),this._current++,X},_looksLikeJSON:function($){var N='[{"',U=["true","false","null"],X="-0123456789";if($==="")return!1;if(N.indexOf($[0])>=0)return!0;if(U.indexOf($)>=0)return!0;if(X.indexOf($[0])>=0)try{return JSON.parse($),!0}catch{return!1}else return!1}};var Ce={};Ce[g]=0,Ce[x]=0,Ce[w]=0,Ce[k]=0,Ce[O]=0,Ce[A]=0,Ce[ne]=0,Ce[G]=0,Ce[F]=0,Ce[Z]=0,Ce[je]=1,Ce[Q]=2,Ce[we]=3,Ce[Re]=5,Ce[Ee]=5,Ce[ce]=5,Ce[B]=5,Ce[L]=5,Ce[le]=5,Ce[T]=9,Ce[E]=20,Ce[M]=21,Ce[oe]=40,Ce[Oe]=45,Ce[ae]=50,Ce[J]=55,Ce[be]=60;function lt(){}lt.prototype={parse:function($){this._loadTokens($),this.index=0;var N=this.expression(0);if(this._lookahead(0)!==g){var U=this._lookaheadToken(0),X=new Error("Unexpected token type: "+U.type+", value: "+U.value);throw X.name="ParserError",X}return N},_loadTokens:function($){var N=new rt,U=N.tokenize($);U.push({type:g,value:"",start:$.length}),this.tokens=U},expression:function($){var N=this._lookaheadToken(0);this._advance();for(var U=this.nud(N),X=this._lookahead(0);$<Ce[X];)this._advance(),U=this.led(X,U),X=this._lookahead(0);return U},_lookahead:function($){return this.tokens[this.index+$].type},_lookaheadToken:function($){return this.tokens[this.index+$]},_advance:function(){this.index++},nud:function($){var N,U,X;switch($.type){case P:return{type:"Literal",value:$.value};case x:return{type:"Field",name:$.value};case w:var me={type:"Field",name:$.value};if(this._lookahead(0)===be)throw new Error("Quoted identifier not allowed for function names.");return me;case Oe:return U=this.expression(Ce.Not),{type:"NotExpression",children:[U]};case E:return N={type:"Identity"},U=null,this._lookahead(0)===k?U={type:"Identity"}:U=this._parseProjectionRHS(Ce.Star),{type:"ValueProjection",children:[N,U]};case M:return this.led($.type,{type:"Identity"});case ae:return this._parseMultiselectHash();case T:return N={type:T,children:[{type:"Identity"}]},U=this._parseProjectionRHS(Ce.Flatten),{type:"Projection",children:[N,U]};case J:return this._lookahead(0)===G||this._lookahead(0)===R?(U=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},U)):this._lookahead(0)===E&&this._lookahead(1)===k?(this._advance(),this._advance(),U=this._parseProjectionRHS(Ce.Star),{type:"Projection",children:[{type:"Identity"},U]}):this._parseMultiselectList();case F:return{type:F};case Z:return X=this.expression(Ce.Expref),{type:"ExpressionReference",children:[X]};case be:for(var Ne=[];this._lookahead(0)!==O;)this._lookahead(0)===F?(X={type:F},this._advance()):X=this.expression(0),Ne.push(X);return this._match(O),Ne[0];default:this._errorToken($)}},led:function($,N){var U;switch($){case oe:var X=Ce.Dot;return this._lookahead(0)!==E?(U=this._parseDotRHS(X),{type:"Subexpression",children:[N,U]}):(this._advance(),U=this._parseProjectionRHS(X),{type:"ValueProjection",children:[N,U]});case je:return U=this.expression(Ce.Pipe),{type:je,children:[N,U]};case Q:return U=this.expression(Ce.Or),{type:"OrExpression",children:[N,U]};case we:return U=this.expression(Ce.And),{type:"AndExpression",children:[N,U]};case be:for(var me=N.name,Ne=[],qe,pe;this._lookahead(0)!==O;)this._lookahead(0)===F?(qe={type:F},this._advance()):qe=this.expression(0),this._lookahead(0)===A&&this._match(A),Ne.push(qe);return this._match(O),pe={type:"Function",name:me,children:Ne},pe;case M:var ge=this.expression(0);return this._match(k),this._lookahead(0)===T?U={type:"Identity"}:U=this._parseProjectionRHS(Ce.Filter),{type:"FilterProjection",children:[N,U,ge]};case T:var ft={type:T,children:[N]},at=this._parseProjectionRHS(Ce.Flatten);return{type:"Projection",children:[ft,at]};case Re:case le:case Ee:case B:case ce:case L:return this._parseComparator(N,$);case J:var Ke=this._lookaheadToken(0);return Ke.type===G||Ke.type===R?(U=this._parseIndexExpression(),this._projectIfSlice(N,U)):(this._match(E),this._match(k),U=this._parseProjectionRHS(Ce.Star),{type:"Projection",children:[N,U]});default:this._errorToken(this._lookaheadToken(0))}},_match:function($){if(this._lookahead(0)===$)this._advance();else{var N=this._lookaheadToken(0),U=new Error("Expected "+$+", got: "+N.type);throw U.name="ParserError",U}},_errorToken:function($){var N=new Error("Invalid token ("+$.type+'): "'+$.value+'"');throw N.name="ParserError",N},_parseIndexExpression:function(){if(this._lookahead(0)===R||this._lookahead(1)===R)return this._parseSliceExpression();var $={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(k),$},_projectIfSlice:function($,N){var U={type:"IndexExpression",children:[$,N]};return N.type==="Slice"?{type:"Projection",children:[U,this._parseProjectionRHS(Ce.Star)]}:U},_parseSliceExpression:function(){for(var $=[null,null,null],N=0,U=this._lookahead(0);U!==k&&N<3;){if(U===R)N++,this._advance();else if(U===G)$[N]=this._lookaheadToken(0).value,this._advance();else{var X=this._lookahead(0),me=new Error("Syntax error, unexpected token: "+X.value+"("+X.type+")");throw me.name="Parsererror",me}U=this._lookahead(0)}return this._match(k),{type:"Slice",children:$}},_parseComparator:function($,N){var U=this.expression(Ce[N]);return{type:"Comparator",name:N,children:[$,U]}},_parseDotRHS:function($){var N=this._lookahead(0),U=[x,w,E];if(U.indexOf(N)>=0)return this.expression($);if(N===J)return this._match(J),this._parseMultiselectList();if(N===ae)return this._match(ae),this._parseMultiselectHash()},_parseProjectionRHS:function($){var N;if(Ce[this._lookahead(0)]<10)N={type:"Identity"};else if(this._lookahead(0)===J)N=this.expression($);else if(this._lookahead(0)===M)N=this.expression($);else if(this._lookahead(0)===oe)this._match(oe),N=this._parseDotRHS($);else{var U=this._lookaheadToken(0),X=new Error("Sytanx error, unexpected token: "+U.value+"("+U.type+")");throw X.name="ParserError",X}return N},_parseMultiselectList:function(){for(var $=[];this._lookahead(0)!==k;){var N=this.expression(0);if($.push(N),this._lookahead(0)===A&&(this._match(A),this._lookahead(0)===k))throw new Error("Unexpected token Rbracket")}return this._match(k),{type:"MultiSelectList",children:$}},_parseMultiselectHash:function(){for(var $=[],N=[x,w],U,X,me,Ne;;){if(U=this._lookaheadToken(0),N.indexOf(U.type)<0)throw new Error("Expecting an identifier token, got: "+U.type);if(X=U.value,this._advance(),this._match(R),me=this.expression(0),Ne={type:"KeyValuePair",name:X,value:me},$.push(Ne),this._lookahead(0)===A)this._match(A);else if(this._lookahead(0)===ne){this._match(ne);break}}return{type:"MultiSelectHash",children:$}}};function Ae($){this.runtime=$}Ae.prototype={search:function($,N){return this.visit($,N)},visit:function($,N){var U,X,me,Ne,qe,pe,ge,ft,at,Ke;switch($.type){case"Field":return N!==null&&o(N)?(pe=N[$.name],pe===void 0?null:pe):null;case"Subexpression":for(me=this.visit($.children[0],N),Ke=1;Ke<$.children.length;Ke++)if(me=this.visit($.children[1],me),me===null)return null;return me;case"IndexExpression":return ge=this.visit($.children[0],N),ft=this.visit($.children[1],ge),ft;case"Index":if(!r(N))return null;var Ge=$.value;return Ge<0&&(Ge=N.length+Ge),me=N[Ge],me===void 0&&(me=null),me;case"Slice":if(!r(N))return null;var qt=$.children.slice(0),_n=this.computeSliceParams(N.length,qt),$n=_n[0],Dt=_n[1],pn=_n[2];if(me=[],pn>0)for(Ke=$n;Ke<Dt;Ke+=pn)me.push(N[Ke]);else for(Ke=$n;Ke>Dt;Ke+=pn)me.push(N[Ke]);return me;case"Projection":var Vt=this.visit($.children[0],N);if(!r(Vt))return null;for(at=[],Ke=0;Ke<Vt.length;Ke++)X=this.visit($.children[1],Vt[Ke]),X!==null&&at.push(X);return at;case"ValueProjection":if(Vt=this.visit($.children[0],N),!o(Vt))return null;at=[];var Gt=i(Vt);for(Ke=0;Ke<Gt.length;Ke++)X=this.visit($.children[1],Gt[Ke]),X!==null&&at.push(X);return at;case"FilterProjection":if(Vt=this.visit($.children[0],N),!r(Vt))return null;var fn=[],bt=[];for(Ke=0;Ke<Vt.length;Ke++)U=this.visit($.children[2],Vt[Ke]),a(U)||fn.push(Vt[Ke]);for(var on=0;on<fn.length;on++)X=this.visit($.children[1],fn[on]),X!==null&&bt.push(X);return bt;case"Comparator":switch(Ne=this.visit($.children[0],N),qe=this.visit($.children[1],N),$.name){case Re:me=s(Ne,qe);break;case le:me=!s(Ne,qe);break;case Ee:me=Ne>qe;break;case B:me=Ne>=qe;break;case ce:me=Ne<qe;break;case L:me=Ne<=qe;break;default:throw new Error("Unknown comparator: "+$.name)}return me;case T:var $t=this.visit($.children[0],N);if(!r($t))return null;var tt=[];for(Ke=0;Ke<$t.length;Ke++)X=$t[Ke],r(X)?tt.push.apply(tt,X):tt.push(X);return tt;case"Identity":return N;case"MultiSelectList":if(N===null)return null;for(at=[],Ke=0;Ke<$.children.length;Ke++)at.push(this.visit($.children[Ke],N));return at;case"MultiSelectHash":if(N===null)return null;at={};var Bt;for(Ke=0;Ke<$.children.length;Ke++)Bt=$.children[Ke],at[Bt.name]=this.visit(Bt.value,N);return at;case"OrExpression":return U=this.visit($.children[0],N),a(U)&&(U=this.visit($.children[1],N)),U;case"AndExpression":return Ne=this.visit($.children[0],N),a(Ne)===!0?Ne:this.visit($.children[1],N);case"NotExpression":return Ne=this.visit($.children[0],N),a(Ne);case"Literal":return $.value;case je:return ge=this.visit($.children[0],N),this.visit($.children[1],ge);case F:return N;case"Function":var At=[];for(Ke=0;Ke<$.children.length;Ke++)At.push(this.visit($.children[Ke],N));return this.runtime.callFunction($.name,At);case"ExpressionReference":var Pn=$.children[0];return Pn.jmespathType=Z,Pn;default:throw new Error("Unknown node type: "+$.type)}},computeSliceParams:function($,N){var U=N[0],X=N[1],me=N[2],Ne=[null,null,null];if(me===null)me=1;else if(me===0){var qe=new Error("Invalid slice, step cannot be 0");throw qe.name="RuntimeError",qe}var pe=me<0;return U===null?U=pe?$-1:0:U=this.capSliceRange($,U,me),X===null?X=pe?-1:$:X=this.capSliceRange($,X,me),Ne[0]=U,Ne[1]=X,Ne[2]=me,Ne},capSliceRange:function($,N,U){return N<0?(N+=$,N<0&&(N=U<0?-1:0)):N>=$&&(N=U<0?$-1:$),N}};function We($){this._interpreter=$,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[c]}]},avg:{_func:this._functionAvg,_signature:[{types:[v]}]},ceil:{_func:this._functionCeil,_signature:[{types:[c]}]},contains:{_func:this._functionContains,_signature:[{types:[u,m]},{types:[d]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[u]},{types:[u]}]},floor:{_func:this._functionFloor,_signature:[{types:[c]}]},length:{_func:this._functionLength,_signature:[{types:[u,m,b]}]},map:{_func:this._functionMap,_signature:[{types:[h]},{types:[m]}]},max:{_func:this._functionMax,_signature:[{types:[v,p]}]},merge:{_func:this._functionMerge,_signature:[{types:[b],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[m]},{types:[h]}]},sum:{_func:this._functionSum,_signature:[{types:[v]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[u]},{types:[u]}]},min:{_func:this._functionMin,_signature:[{types:[v,p]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[m]},{types:[h]}]},type:{_func:this._functionType,_signature:[{types:[d]}]},keys:{_func:this._functionKeys,_signature:[{types:[b]}]},values:{_func:this._functionValues,_signature:[{types:[b]}]},sort:{_func:this._functionSort,_signature:[{types:[p,v]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[m]},{types:[h]}]},join:{_func:this._functionJoin,_signature:[{types:[u]},{types:[p]}]},reverse:{_func:this._functionReverse,_signature:[{types:[u,m]}]},to_array:{_func:this._functionToArray,_signature:[{types:[d]}]},to_string:{_func:this._functionToString,_signature:[{types:[d]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[d]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[d],variadic:!0}]}}}We.prototype={callFunction:function($,N){var U=this.functionTable[$];if(U===void 0)throw new Error("Unknown function: "+$+"()");return this._validateArgs($,N,U._signature),U._func.call(this,N)},_validateArgs:function($,N,U){var X;if(U[U.length-1].variadic){if(N.length<U.length)throw X=U.length===1?" argument":" arguments",new Error("ArgumentError: "+$+"() takes at least"+U.length+X+" but received "+N.length)}else if(N.length!==U.length)throw X=U.length===1?" argument":" arguments",new Error("ArgumentError: "+$+"() takes "+U.length+X+" but received "+N.length);for(var me,Ne,qe,pe=0;pe<U.length;pe++){qe=!1,me=U[pe].types,Ne=this._getTypeName(N[pe]);for(var ge=0;ge<me.length;ge++)if(this._typeMatches(Ne,me[ge],N[pe])){qe=!0;break}if(!qe){var ft=me.map(function(at){return f[at]}).join(",");throw new Error("TypeError: "+$+"() expected argument "+(pe+1)+" to be type "+ft+" but received type "+f[Ne]+" instead.")}}},_typeMatches:function($,N,U){if(N===d)return!0;if(N===p||N===v||N===m){if(N===m)return $===m;if($===m){var X;N===v?X=c:N===p&&(X=u);for(var me=0;me<U.length;me++)if(!this._typeMatches(this._getTypeName(U[me]),X,U[me]))return!1;return!0}}else return $===N},_getTypeName:function($){switch(Object.prototype.toString.call($)){case"[object String]":return u;case"[object Number]":return c;case"[object Array]":return m;case"[object Boolean]":return y;case"[object Null]":return j;case"[object Object]":return $.jmespathType===Z?h:b}},_functionStartsWith:function($){return $[0].lastIndexOf($[1])===0},_functionEndsWith:function($){var N=$[0],U=$[1];return N.indexOf(U,N.length-U.length)!==-1},_functionReverse:function($){var N=this._getTypeName($[0]);if(N===u){for(var U=$[0],X="",me=U.length-1;me>=0;me--)X+=U[me];return X}else{var Ne=$[0].slice(0);return Ne.reverse(),Ne}},_functionAbs:function($){return Math.abs($[0])},_functionCeil:function($){return Math.ceil($[0])},_functionAvg:function($){for(var N=0,U=$[0],X=0;X<U.length;X++)N+=U[X];return N/U.length},_functionContains:function($){return $[0].indexOf($[1])>=0},_functionFloor:function($){return Math.floor($[0])},_functionLength:function($){return o($[0])?Object.keys($[0]).length:$[0].length},_functionMap:function($){for(var N=[],U=this._interpreter,X=$[0],me=$[1],Ne=0;Ne<me.length;Ne++)N.push(U.visit(X,me[Ne]));return N},_functionMerge:function($){for(var N={},U=0;U<$.length;U++){var X=$[U];for(var me in X)N[me]=X[me]}return N},_functionMax:function($){if($[0].length>0){var N=this._getTypeName($[0][0]);if(N===c)return Math.max.apply(Math,$[0]);for(var U=$[0],X=U[0],me=1;me<U.length;me++)X.localeCompare(U[me])<0&&(X=U[me]);return X}else return null},_functionMin:function($){if($[0].length>0){var N=this._getTypeName($[0][0]);if(N===c)return Math.min.apply(Math,$[0]);for(var U=$[0],X=U[0],me=1;me<U.length;me++)U[me].localeCompare(X)<0&&(X=U[me]);return X}else return null},_functionSum:function($){for(var N=0,U=$[0],X=0;X<U.length;X++)N+=U[X];return N},_functionType:function($){switch(this._getTypeName($[0])){case c:return"number";case u:return"string";case m:return"array";case b:return"object";case y:return"boolean";case h:return"expref";case j:return"null"}},_functionKeys:function($){return Object.keys($[0])},_functionValues:function($){for(var N=$[0],U=Object.keys(N),X=[],me=0;me<U.length;me++)X.push(N[U[me]]);return X},_functionJoin:function($){var N=$[0],U=$[1];return U.join(N)},_functionToArray:function($){return this._getTypeName($[0])===m?$[0]:[$[0]]},_functionToString:function($){return this._getTypeName($[0])===u?$[0]:JSON.stringify($[0])},_functionToNumber:function($){var N=this._getTypeName($[0]),U;return N===c?$[0]:N===u&&(U=+$[0],!isNaN(U))?U:null},_functionNotNull:function($){for(var N=0;N<$.length;N++)if(this._getTypeName($[N])!==j)return $[N];return null},_functionSort:function($){var N=$[0].slice(0);return N.sort(),N},_functionSortBy:function($){var N=$[0].slice(0);if(N.length===0)return N;var U=this._interpreter,X=$[1],me=this._getTypeName(U.visit(X,N[0]));if([c,u].indexOf(me)<0)throw new Error("TypeError");for(var Ne=this,qe=[],pe=0;pe<N.length;pe++)qe.push([pe,N[pe]]);qe.sort(function(ft,at){var Ke=U.visit(X,ft[1]),Ge=U.visit(X,at[1]);if(Ne._getTypeName(Ke)!==me)throw new Error("TypeError: expected "+me+", received "+Ne._getTypeName(Ke));if(Ne._getTypeName(Ge)!==me)throw new Error("TypeError: expected "+me+", received "+Ne._getTypeName(Ge));return Ke>Ge?1:Ke<Ge?-1:ft[0]-at[0]});for(var ge=0;ge<qe.length;ge++)N[ge]=qe[ge][1];return N},_functionMaxBy:function($){for(var N=$[1],U=$[0],X=this.createKeyFunction(N,[c,u]),me=-1/0,Ne,qe,pe=0;pe<U.length;pe++)qe=X(U[pe]),qe>me&&(me=qe,Ne=U[pe]);return Ne},_functionMinBy:function($){for(var N=$[1],U=$[0],X=this.createKeyFunction(N,[c,u]),me=1/0,Ne,qe,pe=0;pe<U.length;pe++)qe=X(U[pe]),qe<me&&(me=qe,Ne=U[pe]);return Ne},createKeyFunction:function($,N){var U=this,X=this._interpreter,me=function(Ne){var qe=X.visit($,Ne);if(N.indexOf(U._getTypeName(qe))<0){var pe="TypeError: expected one of "+N+", received "+U._getTypeName(qe);throw new Error(pe)}return qe};return me}};function it($){var N=new lt,U=N.parse($);return U}function Ue($){var N=new rt;return N.tokenize($)}function yt($,N){var U=new lt,X=new We,me=new Ae(X);X._interpreter=me;var Ne=U.parse(N);return me.search(Ne,$)}t.tokenize=Ue,t.compile=it,t.search=yt,t.strictDeepEqual=s})(e)}(qd)),qd}Vx();class Bx{add(t,r,o){if(typeof arguments[0]!="string")for(let s in arguments[0])this.add(s,arguments[0][s],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(s){this[s]=this[s]||[],r&&this[s][o?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(o){o.call(r&&r.context?r.context:r,r)})}}class Wx{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach(s=>{if(typeof s!="object"||!s.name||!s.init)throw new Error("Invalid JSEP plugin format");this.registered[s.name]||(s.init(this.jsep),this.registered[s.name]=s)})}}class xe{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+xe.version}static addUnaryOp(t){return xe.max_unop_len=Math.max(t.length,xe.max_unop_len),xe.unary_ops[t]=1,xe}static addBinaryOp(t,r,o){return xe.max_binop_len=Math.max(t.length,xe.max_binop_len),xe.binary_ops[t]=r,o?xe.right_associative.add(t):xe.right_associative.delete(t),xe}static addIdentifierChar(t){return xe.additional_identifier_chars.add(t),xe}static addLiteral(t,r){return xe.literals[t]=r,xe}static removeUnaryOp(t){return delete xe.unary_ops[t],t.length===xe.max_unop_len&&(xe.max_unop_len=xe.getMaxKeyLen(xe.unary_ops)),xe}static removeAllUnaryOps(){return xe.unary_ops={},xe.max_unop_len=0,xe}static removeIdentifierChar(t){return xe.additional_identifier_chars.delete(t),xe}static removeBinaryOp(t){return delete xe.binary_ops[t],t.length===xe.max_binop_len&&(xe.max_binop_len=xe.getMaxKeyLen(xe.binary_ops)),xe.right_associative.delete(t),xe}static removeAllBinaryOps(){return xe.binary_ops={},xe.max_binop_len=0,xe}static removeLiteral(t){return delete xe.literals[t],xe}static removeAllLiterals(){return xe.literals={},xe}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new xe(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(r=>r.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return xe.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!xe.binary_ops[String.fromCharCode(t)]||xe.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return xe.isIdentifierStart(t)||xe.isDecimalDigit(t)}throwError(t){const r=new Error(t+" at character "+this.index);throw r.index=this.index,r.description=t,r}runHook(t,r){if(xe.hooks[t]){const o={context:this,node:r};return xe.hooks.run(t,o),o.node}return r}searchHook(t){if(xe.hooks[t]){const r={context:this};return xe.hooks[t].find(function(o){return o.call(r.context,r),r.node}),r.node}}gobbleSpaces(){let t=this.code;for(;t===xe.SPACE_CODE||t===xe.TAB_CODE||t===xe.LF_CODE||t===xe.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),r=t.length===1?t[0]:{type:xe.COMPOUND,body:t};return this.runHook("after-all",r)}gobbleExpressions(t){let r=[],o,s;for(;this.index<this.expr.length;)if(o=this.code,o===xe.SEMCOL_CODE||o===xe.COMMA_CODE)this.index++;else if(s=this.gobbleExpression())r.push(s);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return r}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,xe.max_binop_len),r=t.length;for(;r>0;){if(xe.binary_ops.hasOwnProperty(t)&&(!xe.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!xe.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=r,t;t=t.substr(0,--r)}return!1}gobbleBinaryExpression(){let t,r,o,s,a,i,l,c,d;if(i=this.gobbleToken(),!i||(r=this.gobbleBinaryOp(),!r))return i;for(a={value:r,prec:xe.binaryPrecedence(r),right_a:xe.right_associative.has(r)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+r),s=[i,a,l];r=this.gobbleBinaryOp();){if(o=xe.binaryPrecedence(r),o===0){this.index-=r.length;break}a={value:r,prec:o,right_a:xe.right_associative.has(r)},d=r;const u=m=>a.right_a&&m.right_a?o>m.prec:o<=m.prec;for(;s.length>2&&u(s[s.length-2]);)l=s.pop(),r=s.pop().value,i=s.pop(),t={type:xe.BINARY_EXP,operator:r,left:i,right:l},s.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+d),s.push(a,t)}for(c=s.length-1,t=s[c];c>1;)t={type:xe.BINARY_EXP,operator:s[c-1].value,left:s[c-2],right:t},c-=2;return t}gobbleToken(){let t,r,o,s;if(this.gobbleSpaces(),s=this.searchHook("gobble-token"),s)return this.runHook("after-token",s);if(t=this.code,xe.isDecimalDigit(t)||t===xe.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===xe.SQUOTE_CODE||t===xe.DQUOTE_CODE)s=this.gobbleStringLiteral();else if(t===xe.OBRACK_CODE)s=this.gobbleArray();else{for(r=this.expr.substr(this.index,xe.max_unop_len),o=r.length;o>0;){if(xe.unary_ops.hasOwnProperty(r)&&(!xe.isIdentifierStart(this.code)||this.index+r.length<this.expr.length&&!xe.isIdentifierPart(this.expr.charCodeAt(this.index+r.length)))){this.index+=o;const a=this.gobbleToken();return a||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:xe.UNARY_EXP,operator:r,argument:a,prefix:!0})}r=r.substr(0,--o)}xe.isIdentifierStart(t)?(s=this.gobbleIdentifier(),xe.literals.hasOwnProperty(s.name)?s={type:xe.LITERAL,value:xe.literals[s.name],raw:s.name}:s.name===xe.this_str&&(s={type:xe.THIS_EXP})):t===xe.OPAREN_CODE&&(s=this.gobbleGroup())}return s?(s=this.gobbleTokenProperty(s),this.runHook("after-token",s)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let r=this.code;for(;r===xe.PERIOD_CODE||r===xe.OBRACK_CODE||r===xe.OPAREN_CODE||r===xe.QUMARK_CODE;){let o;if(r===xe.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==xe.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),r=this.code}this.index++,r===xe.OBRACK_CODE?(t={type:xe.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),r=this.code,r!==xe.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):r===xe.OPAREN_CODE?t={type:xe.CALL_EXP,arguments:this.gobbleArguments(xe.CPAREN_CODE),callee:t}:(r===xe.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:xe.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),r=this.code}return t}gobbleNumericLiteral(){let t="",r,o;for(;xe.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===xe.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);xe.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(r=this.char,r==="e"||r==="E"){for(t+=this.expr.charAt(this.index++),r=this.char,(r==="+"||r==="-")&&(t+=this.expr.charAt(this.index++));xe.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);xe.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,xe.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===xe.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===xe.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:xe.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const r=this.index,o=this.expr.charAt(this.index++);let s=!1;for(;this.index<this.expr.length;){let a=this.expr.charAt(this.index++);if(a===o){s=!0;break}else if(a==="\\")switch(a=this.expr.charAt(this.index++),a){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=a}else t+=a}return s||this.throwError('Unclosed quote after "'+t+'"'),{type:xe.LITERAL,value:t,raw:this.expr.substring(r,this.index)}}gobbleIdentifier(){let t=this.code,r=this.index;for(xe.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,xe.isIdentifierPart(t));)this.index++;return{type:xe.IDENTIFIER,name:this.expr.slice(r,this.index)}}gobbleArguments(t){const r=[];let o=!1,s=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){o=!0,this.index++,t===xe.CPAREN_CODE&&s&&s>=r.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(a===xe.COMMA_CODE){if(this.index++,s++,s!==r.length){if(t===xe.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===xe.CBRACK_CODE)for(let i=r.length;i<s;i++)r.push(null)}}else if(r.length!==s&&s!==0)this.throwError("Expected comma");else{const i=this.gobbleExpression();(!i||i.type===xe.COMPOUND)&&this.throwError("Expected comma"),r.push(i)}}return o||this.throwError("Expected "+String.fromCharCode(t)),r}gobbleGroup(){this.index++;let t=this.gobbleExpressions(xe.CPAREN_CODE);if(this.code===xe.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:xe.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:xe.ARRAY_EXP,elements:this.gobbleArguments(xe.CBRACK_CODE)}}}const Hx=new Bx;Object.assign(xe,{hooks:Hx,plugins:new Wx(xe),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});xe.max_unop_len=xe.getMaxKeyLen(xe.unary_ops);xe.max_binop_len=xe.getMaxKeyLen(xe.binary_ops);const ls=e=>new xe(e).parse(),Kx=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(xe).filter(e=>!Kx.includes(e)&&ls[e]===void 0).forEach(e=>{ls[e]=xe[e]});ls.Jsep=xe;const Jx="ConditionalExpression";var Qx={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===e.QUMARK_CODE){this.index++;const o=r.node,s=this.gobbleExpression();if(s||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const a=this.gobbleExpression();if(a||this.throwError("Expected expression"),r.node={type:Jx,test:o,consequent:s,alternate:a},o.operator&&e.binary_ops[o.operator]<=.9){let i=o;for(;i.right.operator&&e.binary_ops[i.right.operator]<=.9;)i=i.right;r.node.test=i.right,i.right=r.node,r.node=o}}else this.throwError("Expected :")}})}};ls.plugins.register(Qx);const Ph=47,Gx=92;var Yx={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===Ph){const o=++this.index;let s=!1;for(;this.index<this.expr.length;){if(this.code===Ph&&!s){const a=this.expr.slice(o,this.index);let i="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)i+=this.char;else break}let l;try{l=new RegExp(a,i)}catch(c){this.throwError(c.message)}return r.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?s=!0:s&&this.code===e.CBRACK_CODE&&(s=!1),this.index+=this.code===Gx?2:1}this.throwError("Unclosed Regex")}})}};const zd=43,Xx=45,hi={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[zd,Xx],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];hi.assignmentOperators.forEach(o=>e.addBinaryOp(o,hi.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(s){const a=this.code;hi.updateOperators.some(i=>i===a&&i===this.expr.charCodeAt(this.index+1))&&(this.index+=2,s.node={type:"UpdateExpression",operator:a===zd?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!s.node.argument||!t.includes(s.node.argument.type))&&this.throwError(`Unexpected ${s.node.operator}`))}),e.hooks.add("after-token",function(s){if(s.node){const a=this.code;hi.updateOperators.some(i=>i===a&&i===this.expr.charCodeAt(this.index+1))&&(t.includes(s.node.type)||this.throwError(`Unexpected ${s.node.operator}`),this.index+=2,s.node={type:"UpdateExpression",operator:a===zd?"++":"--",argument:s.node,prefix:!1})}}),e.hooks.add("after-expression",function(s){s.node&&r(s.node)});function r(o){hi.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",r(o.left),r(o.right)):o.operator||Object.values(o).forEach(s=>{s&&typeof s=="object"&&r(s)})}}};ls.plugins.register(Yx,hi);ls.addUnaryOp("typeof");ls.addLiteral("null",null);ls.addLiteral("undefined",void 0);const Zx=h1({String:Co.string,Number:Co.number,"True False":Co.bool,PropertyName:Co.propertyName,Null:Co.null,",":Co.separator,"[ ]":Co.squareBracket,"{ }":Co.brace}),e2=p1.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[Zx],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),t2=g1.define({name:"json",parser:e2.configure({props:[b1.add({Object:ep({except:/^\s*\}/}),Array:ep({except:/^\s*\]/})}),eg.add({"Object Array":y1})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function n2(){return new m1(t2)}function r2(e,t=e.state){const r=new Set;for(const{from:o,to:s}of e.visibleRanges){let a=o;for(;a<=s;){const i=t.doc.lineAt(a);r.has(i)||r.add(i),a=i.to+1}}return r}function jf(e){const t=e.selection.main.head;return e.doc.lineAt(t)}function Mh(e,t){let r=0;e:for(let o=0;o<e.length;o++)switch(e[o]){case" ":case" ":{r+=1;continue e}case"	":{r+=t-r%t;continue e}case"\r":continue e;default:break e}return r}const $u=j1.define({combine(e){return w1(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}});class o2{constructor(t,r,o,s){this.lines=t,this.state=r,this.map=new Map,this.unitWidth=o,this.markerType=s;for(const a of this.lines)this.add(a);this.state.facet($u).highlightActiveBlock&&this.findAndSetActiveLines()}has(t){return this.map.has(typeof t=="number"?t:t.number)}get(t){const r=this.map.get(typeof t=="number"?t:t.number);if(!r)throw new Error("Line not found in indentation map");return r}set(t,r,o){const s=!t.text.trim().length,a={line:t,col:r,level:o,empty:s};return this.map.set(a.line.number,a),a}add(t){if(this.has(t))return this.get(t);if(!t.length||!t.text.trim().length){if(t.number===1)return this.set(t,0,0);if(t.number===this.state.doc.lines){const i=this.closestNonEmpty(t,-1);return this.set(t,0,i.level)}const s=this.closestNonEmpty(t,-1),a=this.closestNonEmpty(t,1);return s.level>=a.level&&this.markerType!=="codeOnly"?this.set(t,0,s.level):s.empty&&s.level===0&&a.level!==0?this.set(t,0,0):a.level>s.level?this.set(t,0,s.level+1):this.set(t,0,a.level)}const r=Mh(t.text,this.state.tabSize),o=Math.floor(r/this.unitWidth);return this.set(t,r,o)}closestNonEmpty(t,r){let o=t.number+r;for(;r===-1?o>=1:o<=this.state.doc.lines;){if(this.has(o)){const i=this.get(o);if(!i.empty)return i}const a=this.state.doc.line(o);if(a.text.trim().length){const i=Mh(a.text,this.state.tabSize),l=Math.floor(i/this.unitWidth);return this.set(a,i,l)}o+=r}const s=this.state.doc.line(r===-1?1:this.state.doc.lines);return this.set(s,0,0)}findAndSetActiveLines(){const t=jf(this.state);if(!this.has(t))return;let r=this.get(t);if(this.has(r.line.number+1)){const a=this.get(r.line.number+1);a.level>r.level&&(r=a)}if(this.has(r.line.number-1)){const a=this.get(r.line.number-1);a.level>r.level&&(r=a)}if(r.level===0)return;r.active=r.level;let o,s;for(o=r.line.number;o>1;o--){if(!this.has(o-1))continue;const a=this.get(o-1);if(a.level<r.level)break;a.active=r.level}for(s=r.line.number;s<this.state.doc.lines;s++){if(!this.has(s+1))continue;const a=this.get(s+1);if(a.level<r.level)break;a.active=r.level}}}function a2(e){const t={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"};let r=t;return e&&(r=Object.assign(Object.assign({},t),e)),$s.baseTheme({"&light":{"--indent-marker-bg-color":r.light,"--indent-marker-active-bg-color":r.activeLight},"&dark":{"--indent-marker-bg-color":r.dark,"--indent-marker-active-bg-color":r.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function Qc(e,t,r,o,s){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${r}ch)`} ${o*r}.5ch/calc(${r*s}ch - 1px) no-repeat`}function s2(e,t,r,o,s){const{level:a,active:i}=e;if(s=s??o,r&&a===0)return[];const l=r?1:0,c=[];if(i!==void 0){const d=i-l-1;d>0&&c.push(Qc("--indent-marker-bg-color",o,t,l,d)),c.push(Qc("--indent-marker-active-bg-color",s,t,i-1,1)),i!==a&&c.push(Qc("--indent-marker-bg-color",o,t,i,a-i))}else c.push(Qc("--indent-marker-bg-color",o,t,l,a-l));return c.join(",")}class i2{constructor(t){this.view=t,this.unitWidth=xu(t.state),this.currentLineNumber=jf(t.state).number,this.generate(t.state)}update(t){const r=xu(t.state),o=r!==this.unitWidth;o&&(this.unitWidth=r);const s=jf(t.state).number,a=s!==this.currentLineNumber;this.currentLineNumber=s;const i=t.state.facet($u).highlightActiveBlock&&a;(t.docChanged||t.viewportChanged||o||i)&&this.generate(t.state)}generate(t){const r=new ng,o=r2(this.view,t),{hideFirstIndent:s,markerType:a,thickness:i,activeThickness:l}=t.facet($u),c=new o2(o,t,this.unitWidth,a);for(const d of o){const u=c.get(d.number);if(!u?.level)continue;const m=s2(u,this.unitWidth,s,i,l);r.add(d.from,d.from,rg.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${m}`}}))}this.decorations=r.finish()}}function l2(e={}){return[$u.of(e),a2(e.colors),tg.fromClass(i2,{decorations:t=>t.decorations})]}var c2=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],u2=["mainAxis","crossAxis","limiter"];function Ug(e,t){if(e==null)return{};var r,o,s=function(i,l){if(i==null)return{};var c={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(l.indexOf(d)!==-1)continue;c[d]=i[d]}return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function Rh(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Rh(Object(r),!0).forEach(function(o){zi(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Rh(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Nh(e,t,r,o,s,a,i){try{var l=e[a](i),c=l.value}catch(d){return void r(d)}l.done?t(c):Promise.resolve(c).then(o,s)}function jt(e){return function(){var t=this,r=arguments;return new Promise(function(o,s){var a=e.apply(t,r);function i(c){Nh(a,o,s,i,l,"next",c)}function l(c){Nh(a,o,s,i,l,"throw",c)}i(void 0)})}}function Fg(e,t){Vg(e,t),t.add(e)}function Zn(e,t,r){Vg(e,t),t.set(e,r)}function Vg(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function un(e,t,r){return e.set(vo(e,t),r),r}function et(e,t){return e.get(vo(e,t))}function vo(e,t,r){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}function zi(e,t,r){return(t=function(o){var s=function(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var c=l.call(a,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}(o,"string");return typeof s=="symbol"?s:s+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Th,Id,Ah,Dd;typeof window<"u"&&((Id=(Th=(Dd=(Ah=window).__svelte)!==null&&Dd!==void 0?Dd:Ah.__svelte={}).v)!==null&&Id!==void 0?Id:Th.v=new Set).add("5");var Ji=!1;Ji=!0;var Vr=Symbol(),d2=!1,Qi=Array.isArray,f2=Array.prototype.indexOf,wf=Array.from,xf=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Bg=Object.getOwnPropertyDescriptors,v2=Object.prototype,p2=Array.prototype,bv=Object.getPrototypeOf,qh=Object.isExtensible;function fl(e){return typeof e=="function"}var zh=()=>{};function h2(e){return e()}function Pu(e){for(var t=0;t<e.length;t++)e[t]()}var Ul=16,ad=32,Wg=64,Qo=256,kf=512,to=1024,za=2048,vs=4096,ua=8192,Gi=16384,yv=32768,Fl=65536,m2=1<<17,Hg=1<<19,Sf=1<<21,g2=1<<22,zs=1<<23,da=Symbol("$state"),Kg=Symbol("legacy props"),b2=Symbol(""),jv=new class extends Error{constructor(){super(...arguments),zi(this,"name","StaleReactionError"),zi(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Vl(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Jg(e){return e===this.v}function wv(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function y2(e,t){return e!==t}function Qg(e){return!wv(e,this.v)}var Un=null;function Ii(e){Un=e}function ps(e){return Gg().get(e)}function pt(e){Un={p:Un,c:null,e:null,s:e,x:null,l:Ji&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function ht(e){var t=Un,r=t.e;if(r!==null)for(var o of(t.e=null,r))u0(o);return e!==void 0&&(t.x=e),Un=t.p,e??{}}function Yi(){return!Ji||Un!==null&&Un.l===null}function Gg(e){var t,r;return Un===null&&Vl(),(r=(t=Un).c)!==null&&r!==void 0?r:t.c=new Map(function(o){for(var s=o.p;s!==null;){var a=s.c;if(a!==null)return a;s=s.p}return null}(Un)||void 0)}var Xa=[],vu=[];function Yg(){var e=Xa;Xa=[],Pu(e)}function j2(){return Xa.length>0||vu.length>0}function Ys(e){if(Xa.length===0&&!kl){var t=Xa;queueMicrotask(()=>{t===Xa&&Yg()})}Xa.push(e)}function w2(){var e;Xa.length>0&&Yg(),vu.length>0&&(e=vu,vu=[],Pu(e))}var x2=new WeakMap;function Xg(e){var t=dn;if(t===null)return jn.f|=zs,e;if((t.f&yv)===0){if(!(128&t.f))throw!t.parent&&e instanceof Error&&Zg(e),e;t.b.error(e)}else Di(e,t)}function Di(e,t){for(;t!==null;){if(128&t.f)try{return void t.b.error(e)}catch(r){e=r}t=t.parent}throw e instanceof Error&&Zg(e),e}function Zg(e){var t=x2.get(e);t&&(xf(e,"message",{value:t.message}),xf(e,"stack",{value:t.stack}))}var Ld=new Set,Mr=null,xl=null,_f=new Set,Fs=[],sd=null,Cf=!1,kl=!1,Ud=new WeakMap,Mu=new WeakMap,Va=new WeakMap,Gc=new WeakMap,Ef=new WeakMap,gl=new WeakMap,pu=new WeakMap,vl=new WeakMap,mi=new WeakMap,hu=new WeakMap,Of=new WeakMap,$f=new WeakMap,Cs=new WeakSet;class Vs{constructor(){Fg(this,Cs),zi(this,"current",new Map),Zn(this,Ud,new Map),Zn(this,Mu,new Set),Zn(this,Va,0),Zn(this,Gc,null),Zn(this,Ef,!1),Zn(this,gl,[]),Zn(this,pu,[]),Zn(this,vl,[]),Zn(this,mi,[]),Zn(this,hu,[]),Zn(this,Of,[]),Zn(this,$f,[]),zi(this,"skipped_effects",new Set)}process(t){for(var r of(Fs=[],xl=null,t))vo(Cs,this,k2).call(this,r);if(et(gl,this).length===0&&et(Va,this)===0){var o;vo(Cs,this,Ih).call(this);var s=et(vl,this),a=et(mi,this);un(vl,this,[]),un(mi,this,[]),un(hu,this,[]),xl=Mr,Mr=null,Dh(s),Dh(a),Mr===null?Mr=this:Ld.delete(this),(o=et(Gc,this))===null||o===void 0||o.resolve()}else vo(Cs,this,Fd).call(this,et(vl,this)),vo(Cs,this,Fd).call(this,et(mi,this)),vo(Cs,this,Fd).call(this,et(hu,this));for(var i of et(gl,this))Bs(i);for(var l of et(pu,this))Bs(l);un(gl,this,[]),un(pu,this,[])}capture(t,r){et(Ud,this).has(t)||et(Ud,this).set(t,r),this.current.set(t,t.v)}activate(){Mr=this}deactivate(){for(var t of(Mr=null,xl=null,_f))if(_f.delete(t),t(),Mr!==null)break}neuter(){un(Ef,this,!0)}flush(){Fs.length>0?e0():vo(Cs,this,Ih).call(this),Mr===this&&(et(Va,this)===0&&Ld.delete(this),this.deactivate())}increment(){un(Va,this,et(Va,this)+1)}decrement(){if(un(Va,this,et(Va,this)-1),et(Va,this)===0){for(var t of et(Of,this))co(t,za),Li(t);for(var r of et($f,this))co(r,vs),Li(r);un(vl,this,[]),un(mi,this,[]),this.flush()}else this.deactivate()}add_callback(t){et(Mu,this).add(t)}settled(){var t,r,o;return((t=et(Gc,this))!==null&&t!==void 0?t:un(Gc,this,{promise:new Promise((s,a)=>{r=s,o=a}),resolve:r,reject:o})).promise}static ensure(){if(Mr===null){var t=Mr=new Vs;Ld.add(Mr),kl||Vs.enqueue(()=>{Mr===t&&t.flush()})}return Mr}static enqueue(t){Ys(t)}}function k2(e){e.f^=to;for(var t=e.first;t!==null;){var r=t.f,o=!!(96&r);if(!(o&&(r&to)!==0||(r&ua)!==0||this.skipped_effects.has(t))&&t.fn!==null){if(o)t.f^=to;else if(4&r)et(mi,this).push(t);else if((r&to)===0){var s;(r&g2)!==0?((s=t.b)!==null&&s!==void 0&&s.is_pending()?et(pu,this):et(gl,this)).push(t):Kl(t)&&((t.f&Ul)!==0&&et(hu,this).push(t),Bs(t))}var a=t.first;if(a!==null){t=a;continue}}var i=t.parent;for(t=t.next;t===null&&i!==null;)t=i.next,i=i.parent}}function Fd(e){for(var t of e)((t.f&za)!==0?et(Of,this):et($f,this)).push(t),co(t,to);e.length=0}function Ih(){if(!et(Ef,this))for(var e of et(Mu,this))e();et(Mu,this).clear()}function Kn(e){var t=kl;kl=!0;try{for(;;){var r;if(w2(),Fs.length===0&&!j2()&&((r=Mr)===null||r===void 0||r.flush(),Fs.length===0))return void(sd=null);e0()}}finally{kl=t}}function e0(){var e=Mi;Cf=!0;try{var t=0;for(Jh(!0);Fs.length>0;){var r=Vs.ensure();t++>1e3&&S2(),r.process(Fs),rs.clear()}}finally{Cf=!1,Jh(e),sd=null}}function S2(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){Di(e,sd)}}var Ns=null;function Dh(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var o,s=e[r++];if(!(24576&s.f)&&Kl(s)&&(Ns=[],Bs(s),s.deps===null&&s.first===null&&s.nodes_start===null&&(s.teardown===null&&s.ac===null?p0(s):s.fn=null),((o=Ns)===null||o===void 0?void 0:o.length)>0)){for(var a of(rs.clear(),Ns))Bs(a);Ns=[]}}Ns=null}}function Li(e){for(var t=sd=e;t.parent!==null;){var r=(t=t.parent).f;if(Cf&&t===dn&&(r&Ul)!==0)return;if(96&r){if((r&to)===0)return;t.f^=to}}Fs.push(t)}function _2(e){var t,r=0,o=Ia(0);return()=>{jn===null||Wo||(n(o),Xi(()=>(r===0&&(t=te(()=>e(()=>Sl(o)))),r+=1,()=>{Ys(()=>{var s;(r-=1)===0&&((s=t)===null||s===void 0||s(),t=void 0,Sl(o))})})))}}var Ps=new WeakMap,Ts=new WeakMap,C2=new WeakMap,Ms=new WeakMap,Vd=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,_a=new WeakMap,Ba=new WeakMap,$i=new WeakMap,si=new WeakMap,Pi=new WeakMap,pl=new WeakMap,ii=new WeakMap,Lh=new WeakMap,Uh=new WeakMap,Rs=new WeakSet;class E2{constructor(t,r,o){Fg(this,Rs),zi(this,"parent",void 0),Zn(this,Ps,!1),Zn(this,Ts,void 0),Zn(this,C2,null),Zn(this,Ms,void 0),Zn(this,Vd,void 0),Zn(this,Ga,void 0),Zn(this,Ka,null),Zn(this,_a,null),Zn(this,Ba,null),Zn(this,$i,null),Zn(this,si,0),Zn(this,Pi,0),Zn(this,pl,!1),Zn(this,ii,null),Zn(this,Lh,()=>{et(ii,this)&&Ui(et(ii,this),et(si,this))}),Zn(this,Uh,_2(()=>(un(ii,this,Ia(et(si,this))),()=>{un(ii,this,null)}))),un(Ts,this,t),un(Ms,this,r),un(Vd,this,o),this.parent=dn.b,un(Ps,this,!!et(Ms,this).pending),un(Ga,this,hs(()=>{dn.b=this;try{un(Ka,this,Ro(()=>o(et(Ts,this))))}catch(s){this.error(s)}et(Pi,this)>0?vo(Rs,this,Vh).call(this):un(Ps,this,!1)},589952))}is_pending(){return et(Ps,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!et(Ms,this).pending}update_pending_count(t){vo(Rs,this,t0).call(this,t),un(si,this,et(si,this)+t),_f.add(et(Lh,this))}get_effect_pending(){return et(Uh,this).call(this),n(et(ii,this))}error(t){var r=et(Ms,this).onerror,o=et(Ms,this).failed;if(et(pl,this)||!r&&!o)throw t;et(Ka,this)&&(so(et(Ka,this)),un(Ka,this,null)),et(_a,this)&&(so(et(_a,this)),un(_a,this,null)),et(Ba,this)&&(so(et(Ba,this)),un(Ba,this,null));var s=!1,a=!1,i=()=>{s?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(s=!0,a&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),Vs.ensure(),un(si,this,0),et(Ba,this)!==null&&Xs(et(Ba,this),()=>{un(Ba,this,null)}),un(Ps,this,this.has_pending_snippet()),un(Ka,this,vo(Rs,this,Fh).call(this,()=>(un(pl,this,!1),Ro(()=>et(Vd,this).call(this,et(Ts,this)))))),et(Pi,this)>0?vo(Rs,this,Vh).call(this):un(Ps,this,!1))},l=jn;try{yo(null),a=!0,r?.(t,i),a=!1}catch(c){Di(c,et(Ga,this)&&et(Ga,this).parent)}finally{yo(l)}o&&Ys(()=>{un(Ba,this,vo(Rs,this,Fh).call(this,()=>{un(pl,this,!0);try{return Ro(()=>{o(et(Ts,this),()=>t,()=>i)})}catch(c){return Di(c,et(Ga,this).parent),null}finally{un(pl,this,!1)}}))})}}function Fh(e){var t=dn,r=jn,o=Un;Do(et(Ga,this)),yo(et(Ga,this)),Ii(et(Ga,this).ctx);try{return e()}catch(s){return Xg(s),null}finally{Do(t),yo(r),Ii(o)}}function Vh(){var e=et(Ms,this).pending;et(Ka,this)!==null&&(un($i,this,document.createDocumentFragment()),function(t,r){for(var o=t.nodes_start,s=t.nodes_end;o!==null;){var a=o===s?null:Hl(o);r.append(o),o=a}}(et(Ka,this),et($i,this))),et(_a,this)===null&&un(_a,this,Ro(()=>e(et(Ts,this))))}function t0(e){var t;this.has_pending_snippet()?(un(Pi,this,et(Pi,this)+e),et(Pi,this)===0&&(un(Ps,this,!1),et(_a,this)&&Xs(et(_a,this),()=>{un(_a,this,null)}),et($i,this)&&(et(Ts,this).before(et($i,this)),un($i,this,null)))):this.parent&&vo(Rs,t=this.parent,t0).call(t,e)}function n0(e,t,r){var o=Yi()?Bl:ot;if(t.length!==0){var s=Mr,a=dn,i=function(){var l=dn,c=jn,d=Un,u=Mr;return function(){Do(l),yo(c),Ii(d),u?.activate()}}();Promise.all(t.map(l=>function(c){var d=dn;d===null&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}();var u=d.b,m=void 0,b=Ia(Vr),y=null,h=!jn;return function(j){ma(4718592,j,!0)}(()=>{var j,v;try{var p=c();y&&Promise.resolve(p).catch(()=>{})}catch(k){p=Promise.reject(k)}var f=()=>p;m=(j=(v=y)===null||v===void 0?void 0:v.then(f,f))!==null&&j!==void 0?j:Promise.resolve(p),y=m;var g=Mr,x=u.is_pending();h&&(u.update_pending_count(1),x||g.increment());var w=function(k){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;y=null,x||g.activate(),O?O!==jv&&(b.f|=zs,Ui(b,O)):((b.f&zs)!==0&&(b.f^=zs),Ui(b,k)),h&&(u.update_pending_count(-1),x||g.decrement()),Bh()};if(m.then(w,k=>w(null,k||"unknown")),g)return()=>{queueMicrotask(()=>g.neuter())}}),new Promise(j=>{function v(p){function f(){p===m?j(b):v(m)}p.then(f,f)}v(m)})}(l))).then(l=>{s?.activate(),i();try{r([...e.map(o),...l])}catch(c){(a.f&Gi)===0&&Di(c,a)}s?.deactivate(),Bh()}).catch(l=>{Di(l,a)})}else r(e.map(o))}function Bh(){Do(null),yo(null),Ii(null)}function Bl(e){var t=2050,r=jn!==null&&2&jn.f?jn:null;return dn===null||r!==null&&(r.f&Qo)!==0?t|=Qo:dn.f|=Hg,{ctx:Un,deps:null,effects:null,equals:Jg,f:t,fn:e,reactions:null,rv:0,v:Vr,wv:0,parent:r??dn,ac:null}}function ho(e){var t=Bl(e);return g0(t),t}function ot(e){var t=Bl(e);return t.equals=Qg,t}function r0(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)so(t[r])}}function xv(e){var t,r=dn;Do(function(o){for(var s=o.parent;s!==null;){if(!(2&s.f))return s;s=s.parent}return null}(e));try{r0(e),t=w0(e)}finally{Do(r)}return t}function o0(e){var t=xv(e);e.equals(t)||(e.v=t,e.wv=y0()),Zs||co(e,!Za&&(e.f&Qo)===0||e.deps===null?to:vs)}var Ra,a0,s0,i0,rs=new Map;function Ia(e,t){return{f:0,v:e,reactions:null,equals:Jg,rv:0,wv:0}}function xa(e,t){var r=Ia(e);return g0(r),r}function K(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=Ia(e);return o||(a.equals=Qg),Ji&&s&&Un!==null&&Un.l!==null&&((r=(t=Un.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function Oo(e,t){return S(e,te(()=>n(e))),t}function S(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return jn===null||Wo&&(jn.f&m2)===0||!Yi()||!(4325394&jn.f)||(r=Na)!==null&&r!==void 0&&r.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Ui(e,o?xi(t):t)}function Ui(e,t){if(!e.equals(t)){var r=e.v;Zs?rs.set(e,t):rs.set(e,r),e.v=t,Vs.ensure().capture(e,r),2&e.f&&((e.f&za)!==0&&xv(e),co(e,(e.f&Qo)===0?to:vs)),e.wv=y0(),l0(e,za),!Yi()||dn===null||(dn.f&to)===0||96&dn.f||(No===null?function(o){No=o}([e]):No.push(e))}return t}function Wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return S(e,r),o}function Sl(e){S(e,e.v+1)}function l0(e,t){var r=e.reactions;if(r!==null)for(var o=Yi(),s=r.length,a=0;a<s;a++){var i=r[a],l=i.f;if(o||i!==dn){var c=(l&za)===0;c&&co(i,t),2&l?l0(i,vs):c&&((l&Ul)!==0&&Ns!==null&&Ns.push(i),Li(i))}}}function xi(e){if(typeof e!="object"||e===null||da in e)return e;var t=bv(e);if(t!==v2&&t!==p2)return e;var r=new Map,o=Qi(e),s=xa(0),a=Is,i=l=>{if(Is===a)return l();var c=jn,d=Is;yo(null),Gh(a);var u=l();return yo(c),Gh(d),u};return o&&r.set("length",xa(e.length)),new Proxy(e,{defineProperty(l,c,d){"value"in d&&d.configurable!==!1&&d.enumerable!==!1&&d.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var u=r.get(c);return u===void 0?u=i(()=>{var m=xa(d.value);return r.set(c,m),m}):S(u,d.value,!0),!0},deleteProperty(l,c){var d=r.get(c);if(d===void 0){if(c in l){var u=i(()=>xa(Vr));r.set(c,u),Sl(s)}}else S(d,Vr),Sl(s);return!0},get(l,c,d){var u;if(c===da)return e;var m=r.get(c),b=c in l;if(m===void 0&&(!b||(u=Ma(l,c))!==null&&u!==void 0&&u.writable)&&(m=i(()=>xa(xi(b?l[c]:Vr))),r.set(c,m)),m!==void 0){var y=n(m);return y===Vr?void 0:y}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var u=r.get(c);u&&(d.value=n(u))}else if(d===void 0){var m=r.get(c),b=m?.v;if(m!==void 0&&b!==Vr)return{enumerable:!0,configurable:!0,value:b,writable:!0}}return d},has(l,c){var d;if(c===da)return!0;var u=r.get(c),m=u!==void 0&&u.v!==Vr||Reflect.has(l,c);return(u!==void 0||dn!==null&&(!m||(d=Ma(l,c))!==null&&d!==void 0&&d.writable))&&(u===void 0&&(u=i(()=>xa(m?xi(l[c]):Vr)),r.set(c,u)),n(u)===Vr)?!1:m},set(l,c,d,u){var m,b=r.get(c),y=c in l;if(o&&c==="length")for(var h=d;h<b.v;h+=1){var j=r.get(h+"");j!==void 0?S(j,Vr):h in l&&(j=i(()=>xa(Vr)),r.set(h+"",j))}b===void 0?(!y||(m=Ma(l,c))!==null&&m!==void 0&&m.writable)&&(S(b=i(()=>xa(void 0)),xi(d)),r.set(c,b)):(y=b.v!==Vr,S(b,i(()=>xi(d))));var v=Reflect.getOwnPropertyDescriptor(l,c);if(v!=null&&v.set&&v.set.call(u,d),!y){if(o&&typeof c=="string"){var p=r.get("length"),f=Number(c);Number.isInteger(f)&&f>=p.v&&S(p,f+1)}Sl(s)}return!0},ownKeys(l){n(s);var c=Reflect.ownKeys(l).filter(m=>{var b=r.get(m);return b===void 0||b.v!==Vr});for(var[d,u]of r)u.v===Vr||d in l||c.push(d);return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function Hh(e){try{if(e!==null&&typeof e=="object"&&da in e)return e[da]}catch{}return e}function O2(e,t){return Object.is(Hh(e),Hh(t))}function Wl(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function $o(e){return s0.call(e)}function Hl(e){return i0.call(e)}function H(e,t){return $o(e)}function nt(e){var t=$o(e);return t instanceof Comment&&t.data===""?Hl(t):t}function ie(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=Hl(r);return r}var Kh=!1;function id(e){var t=jn,r=dn;yo(null),Do(null);try{return e()}finally{yo(t),Do(r)}}function $2(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>id(r));var s=e.__on_r;e.__on_r=s?()=>{s(),o(!0)}:()=>o(!0),Kh||(Kh=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{if(!a.defaultPrevented)for(var i of a.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}function c0(e){dn===null&&jn===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),jn!==null&&(jn.f&Qo)!==0&&dn===null&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Zs&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function ma(e,t,r){var o=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],s=dn;s!==null&&(s.f&ua)!==0&&(e|=ua);var a={ctx:Un,deps:null,nodes_start:null,nodes_end:null,f:e|za,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Bs(a),a.f|=yv}catch(d){throw so(a),d}else t!==null&&Li(a);if(o){var i=a;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Hg)===0&&(i=i.first),i!==null&&(i.parent=s,s!==null&&function(d,u){var m=u.last;m===null?u.last=u.first=d:(m.next=d,d.prev=m,u.last=d)}(i,s),jn!==null&&2&jn.f&&(e&Wg)===0)){var l,c=jn;((l=c.effects)!==null&&l!==void 0?l:c.effects=[]).push(i)}}return a}function kv(e){var t=ma(8,null,!1);return co(t,to),t.teardown=e,t}function Pf(e){c0();var t=dn.f;if(!(!jn&&(t&ad)!==0&&(t&yv)===0))return u0(e);var r,o=Un;((r=o.e)!==null&&r!==void 0?r:o.e=[]).push(e)}function u0(e){return ma(1048580,e,!1)}function Gr(e){return ma(4,e,!1)}function fe(e,t){var r={effect:null,ran:!1,deps:e};Un.l.$.push(r),r.effect=Xi(()=>{e(),r.ran||(r.ran=!0,te(t))})}function Sn(){var e=Un;Xi(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&to)!==0&&co(r,vs),Kl(r)&&Bs(r),t.ran=!1}})}function Xi(e){return ma(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function De(e){n0(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{ma(8,()=>e(...t.map(n)),!0)})}function hs(e){return ma(Ul|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Ro(e){return ma(524320,e,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function d0(e){var t=e.teardown;if(t!==null){var r=Zs,o=jn;Qh(!0),yo(null);try{t.call(null)}finally{Qh(r),yo(o)}}}function f0(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;e.first=e.last=null;for(var o,s=function(){var a=r.ac;a!==null&&id(()=>{a.abort(jv)}),o=r.next,(r.f&Wg)!==0?r.parent=null:so(r,t),r=o};r!==null;)s()}function so(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;(t||262144&e.f)&&e.nodes_start!==null&&e.nodes_end!==null&&(v0(e.nodes_start,e.nodes_end),r=!0),f0(e,t&&!r),Ru(e,0),co(e,Gi);var o=e.transitions;if(o!==null)for(var s of o)s.stop();d0(e);var a=e.parent;a!==null&&a.first!==null&&p0(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function v0(e,t){for(;e!==null;){var r=e===t?null:Hl(e);e.remove(),e=r}}function p0(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function Xs(e,t){var r=[];Sv(e,r,!0),h0(r,()=>{so(e),t&&t()})}function h0(e,t){var r=e.length;if(r>0){var o=()=>--r||t();for(var s of e)s.out(o)}else t()}function Sv(e,t,r){if((e.f&ua)===0){if(e.f^=ua,e.transitions!==null)for(var o of e.transitions)(o.is_global||r)&&t.push(o);for(var s=e.first;s!==null;){var a=s.next;Sv(s,t,((s.f&Fl)!==0||(s.f&ad)!==0)&&r),s=a}}}function Mf(e){m0(e,!0)}function m0(e,t){if((e.f&ua)!==0){e.f^=ua,(e.f&to)===0&&(co(e,za),Li(e));for(var r=e.first;r!==null;){var o=r.next;m0(r,((r.f&Fl)!==0||(r.f&ad)!==0)&&t),r=o}if(e.transitions!==null)for(var s of e.transitions)(s.is_global||t)&&s.in()}}var P2=null,Mi=!1;function Jh(e){Mi=e}var Zs=!1;function Qh(e){Zs=e}var jn=null,Wo=!1;function yo(e){jn=e}var dn=null;function Do(e){dn=e}var Na=null;function g0(e){jn!==null&&(Na===null?Na=[e]:Na.push(e))}var lo=null,_o=0,No=null,b0=1,El=0,Is=El;function Gh(e){Is=e}var Za=!1;function y0(){return++b0}function Kl(e){var t=e.f;if((t&za)!==0)return!0;if((t&vs)!==0){var r=e.deps,o=(t&Qo)!==0;if(r!==null){var s,a,i=(t&kf)!==0,l=o&&dn!==null&&!Za,c=r.length;if((i||l)&&(dn===null||(dn.f&Gi)===0)){var d=e,u=d.parent;for(s=0;s<c;s++){var m,b,y;a=r[s],(i||(m=a)===null||m===void 0||(m=m.reactions)===null||m===void 0||!m.includes(d))&&((y=(b=a).reactions)!==null&&y!==void 0?y:b.reactions=[]).push(d)}i&&(d.f^=kf),l&&u!==null&&(u.f&Qo)===0&&(d.f^=Qo)}for(s=0;s<c;s++)if(Kl(a=r[s])&&o0(a),a.wv>e.wv)return!0}o&&(dn===null||Za)||co(e,to)}return!1}function j0(e,t){var r,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],s=e.reactions;if(s!==null&&((r=Na)===null||r===void 0||!r.includes(e)))for(var a=0;a<s.length;a++){var i=s[a];2&i.f?j0(i,t,!1):t===i&&(o?co(i,za):(i.f&to)!==0&&co(i,vs),Li(i))}}function w0(e){var t=lo,r=_o,o=No,s=jn,a=Za,i=Na,l=Un,c=Wo,d=Is,u=e.f;lo=null,_o=0,No=null,Za=(u&Qo)!==0&&(Wo||!Mi||jn===null),jn=96&u?null:e,Na=null,Ii(e.ctx),Wo=!1,Is=++El,e.ac!==null&&(id(()=>{e.ac.abort(jv)}),e.ac=null);try{e.f|=Sf;var m=(0,e.fn)(),b=e.deps;if(lo!==null){var y;if(Ru(e,_o),b!==null&&_o>0)for(b.length=_o+lo.length,y=0;y<lo.length;y++)b[_o+y]=lo[y];else e.deps=b=lo;if(!Za||2&u&&e.reactions!==null)for(y=_o;y<b.length;y++){var h,j;((j=(h=b[y]).reactions)!==null&&j!==void 0?j:h.reactions=[]).push(e)}}else b!==null&&_o<b.length&&(Ru(e,_o),b.length=_o);if(Yi()&&No!==null&&!Wo&&b!==null&&!(6146&e.f))for(y=0;y<No.length;y++)j0(No[y],e);return s!==null&&s!==e&&(El++,No!==null&&(o===null?o=No:o.push(...No))),(e.f&zs)!==0&&(e.f^=zs),m}catch(v){return Xg(v)}finally{e.f^=Sf,lo=t,_o=r,No=o,jn=s,Za=a,Na=i,Ii(l),Wo=c,Is=d}}function M2(e,t){var r=t.reactions;if(r!==null){var o=f2.call(r,e);if(o!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[o]=r[s],r.pop())}}r===null&&2&t.f&&(lo===null||!lo.includes(t))&&(co(t,vs),768&t.f||(t.f^=kf),r0(t),Ru(t,0))}function Ru(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)M2(e,r[o])}function Bs(e){var t=e.f;if((t&Gi)===0){co(e,to);var r=dn,o=Mi;dn=e,Mi=!0;try{(t&Ul)!==0?function(a){for(var i=a.first;i!==null;){var l=i.next;(i.f&ad)===0&&so(i),i=l}}(e):f0(e),d0(e);var s=w0(e);e.teardown=typeof s=="function"?s:null,e.wv=b0}finally{Mi=o,dn=r}}}function x0(){return k0.apply(this,arguments)}function k0(){return(k0=jt(function*(){yield Promise.resolve(),Kn()})).apply(this,arguments)}function n(e){var t,r,o=!!(2&e.f);if((t=P2)===null||t===void 0||t.add(e),jn===null||Wo){if(o&&e.deps===null&&e.effects===null){var s=e,a=s.parent;a!==null&&(a.f&Qo)===0&&(s.f^=Qo)}}else if(!(dn!==null&&(dn.f&Gi)!==0||(r=Na)!==null&&r!==void 0&&r.includes(e))){var i=jn.deps;if((jn.f&Sf)!==0)e.rv<El&&(e.rv=El,lo===null&&i!==null&&i[_o]===e?_o++:lo===null?lo=[e]:Za&&lo.includes(e)||lo.push(e));else{var l,c;((c=(l=jn).deps)!==null&&c!==void 0?c:l.deps=[]).push(e);var d=e.reactions;d===null?e.reactions=[jn]:d.includes(jn)||d.push(jn)}}if(Zs){if(rs.has(e))return rs.get(e);if(o){var u=(s=e).v;return((s.f&to)===0&&s.reactions!==null||S0(s))&&(u=xv(s)),rs.set(s,u),u}}else o&&Kl(s=e)&&o0(s);if((e.f&zs)!==0)throw e.v;return e.v}function S0(e){if(e.v===Vr)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(rs.has(t)||2&t.f&&S0(t))return!0;return!1}function te(e){var t=Wo;try{return Wo=!0,e()}finally{Wo=t}}var R2=-7169;function co(e,t){e.f=e.f&R2|t}function C(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(da in e)Rf(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&da in r&&Rf(r)}}}function Rf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{Rf(e[r],t)}catch{}var o=bv(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var s=Bg(o);for(var a in s){var i=s[a].get;if(i)try{i.call(e)}catch{}}}}}var _0=new Set,Nf=new Set;function C0(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function s(a){if(o.capture||bl.call(t,a),!a.cancelBubble)return id(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ys(()=>{t.addEventListener(e,s,o)}):t.addEventListener(e,s,o),s}function Te(e,t,r,o,s){var a={capture:o,passive:s},i=C0(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&kv(()=>{t.removeEventListener(e,i,a)})}function Jl(e){for(var t=0;t<e.length;t++)_0.add(e[t]);for(var r of Nf)r(e)}function bl(e){var t,r=this,o=r.ownerDocument,s=e.type,a=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=a[0]||e.target,l=0,c=e===e&&e.__root;if(c){var d=a.indexOf(c);if(d!==-1&&(r===document||r===window))return void(e.__root=r);var u=a.indexOf(r);if(u===-1)return;d<=u&&(l=d)}if((i=a[l]||e.target)!==r){xf(e,"currentTarget",{configurable:!0,get:()=>i||o});var m=jn,b=dn;yo(null),Do(null);try{for(var y,h=[];i!==null;){var j=i.assignedSlot||i.parentNode||i.host||null;try{var v=i["__"+s];if(v!=null&&(!i.disabled||e.target===i))if(Qi(v)){var[p,...f]=v;p.apply(i,[e,...f])}else v.call(i,e)}catch(w){y?h.push(w):y=w}if(e.cancelBubble||j===r||j===null)break;i=j}if(y){var g=function(w){queueMicrotask(()=>{throw w})};for(var x of h)g(x);throw y}}finally{e.__root=r,delete e.currentTarget,yo(m),Do(b)}}}function _v(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Ws(e,t){var r=dn;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function he(e,t){var r,o=!!(1&t),s=!!(2&t),a=!e.startsWith("<!>");return()=>{r===void 0&&(r=_v(a?e:"<!>"+e),o||(r=$o(r)));var i=s||a0?document.importNode(r,!0):r.cloneNode(!0);return o?Ws($o(i),i.lastChild):Ws(i,i),i}}function ms(e,t){return function(r,o){var s,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",i=!r.startsWith("<!>"),l=!!(1&o),c="<".concat(a,">").concat(i?r:"<!>"+r,"</").concat(a,">");return()=>{if(!s){var d=$o(_v(c));if(l)for(s=document.createDocumentFragment();$o(d);)s.appendChild($o(d));else s=$o(d)}var u=s.cloneNode(!0);return l?Ws($o(u),u.lastChild):Ws(u,u),u}}(e,t,"svg")}function Br(){var e=Wl((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Ws(e,e),e}function Ut(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Wl();return e.append(t,r),Ws(t,r),e}function W(e,t){e!==null&&e.before(t)}var N2=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],T2={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},A2=["touchstart","touchmove"];function q2(e){return A2.includes(e)}function mt(e,t){var r,o=t==null?"":typeof t=="object"?t+"":t;o!==((r=e.__t)!==null&&r!==void 0?r:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function z2(e,t){return function(r,o){var{target:s,anchor:a,props:i={},events:l,context:c}=o;(function(){if(Ra===void 0){Ra=window,a0=/Firefox/.test(navigator.userAgent);var y=Element.prototype,h=Node.prototype,j=Text.prototype;s0=Ma(h,"firstChild").get,i0=Ma(h,"nextSibling").get,qh(y)&&(y.__click=void 0,y.__className=void 0,y.__attributes=null,y.__style=void 0,y.__e=void 0),qh(j)&&(j.__t=void 0)}})();var d=new Set,u=y=>{for(var h=0;h<y.length;h++){var j=y[h];if(!d.has(j)){d.add(j);var v=q2(j);s.addEventListener(j,bl,{passive:v});var p=li.get(j);p===void 0?(document.addEventListener(j,bl,{passive:v}),li.set(j,1)):li.set(j,p+1)}}};u(wf(_0)),Nf.add(u);var m=void 0,b=function(y){Vs.ensure();var h=ma(524352,y,!0);return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(v=>{j.outro?Xs(h,()=>{so(h),v(void 0)}):(so(h),v(void 0))})}}(()=>{var y=a??s.appendChild(Wl());return function(h,j,v){new E2(h,j,v)}(y,{pending:()=>{}},h=>{c&&(pt({}),Un.c=c),l&&(i.$$events=l),m=r(h,i)||{},c&&ht()}),()=>{for(var h of d){s.removeEventListener(h,bl);var j=li.get(h);--j===0?(document.removeEventListener(h,bl),li.delete(h)):li.set(h,j)}var v;Nf.delete(u),y!==a&&((v=y.parentNode)===null||v===void 0||v.removeChild(y))}});return Tf.set(m,b),m}(e,t)}var li=new Map,Tf=new WeakMap;function no(e){Un===null&&Vl(),Ji&&Un.l!==null?E0(Un).m.push(e):Pf(()=>{var t=te(e);if(typeof t=="function")return t})}function Lo(e){Un===null&&Vl(),no(()=>()=>te(e))}function I2(){var e=Un;return e===null&&Vl(),(t,r,o)=>{var s,a=(s=e.s.$$events)===null||s===void 0?void 0:s[t];if(a){var i=Qi(a)?a.slice():[a],l=function(d,u){var{bubbles:m=!1,cancelable:b=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(d,{detail:u,bubbles:m,cancelable:b})}(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function D2(e){Un===null&&Vl(),Un.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),E0(Un).b.push(e)}function E0(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}function ye(e,t){var r=e,o=null,s=null,a=Vr,i=!1,l=function(u){i=!0,d(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],u)};function c(){var u=a?o:s,m=a?s:o;u&&Mf(u),m&&Xs(m,()=>{a?s=null:o=null})}var d=(u,m)=>{if(a!==(a=u)){var b=r;a?o!=null||(o=m&&Ro(()=>m(b))):s!=null||(s=m&&Ro(()=>m(b))),c()}};hs(()=>{i=!1,t(l),i||d(null,null)},arguments.length>2&&arguments[2]!==void 0&&arguments[2]?Fl:0)}function O0(e,t,r){var o,s,a=e,i=Vr,l=Yi()?y2:wv;function c(){o&&Xs(o),o=s}hs(()=>{if(l(i,i=t())){var d=a;s=Ro(()=>r(d)),c()}})}function _r(e,t){return t}function vr(e,t,r,o,s){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l={flags:t,items:new Map,first:null};!(4&t)||(i=e.appendChild(Wl()));var c,d,u=null,m=!1,b=new Map,y=ot(()=>{var j=r();return Qi(j)?j:j==null?[]:wf(j)});function h(){(function(j,v,p,f,g,x,w,k,O){var A,R,ne,G,F,Z,je=!!(8&w),Q=!!(3&w),we=v.length,Re=p.items,Ee=p.first,ce=Ee,B=null,L=[],le=[];if(je)for(Z=0;Z<we;Z+=1){var T;G=k(ne=v[Z],Z),(F=Re.get(G))!==void 0&&((T=F.a)===null||T===void 0||T.measure(),(R??(R=new Set)).add(F))}for(Z=0;Z<we;Z+=1)if(G=k(ne=v[Z],Z),(F=Re.get(G))!==void 0){var E;if(Q&&L2(F,ne,Z,w),(F.e.f&ua)!==0&&(Mf(F.e),je&&((E=F.a)===null||E===void 0||E.unfix(),(R??(R=new Set)).delete(F))),F!==ce){if(A!==void 0&&A.has(F)){if(L.length<le.length){var M,oe=le[0];B=oe.prev;var Oe=L[0],ae=L[L.length-1];for(M=0;M<L.length;M+=1)Bd(L[M],oe,g);for(M=0;M<le.length;M+=1)A.delete(le[M]);aa(p,Oe.prev,ae.next),aa(p,B,Oe),aa(p,ae,oe),ce=oe,B=ae,Z-=1,L=[],le=[]}else A.delete(F),Bd(F,ce,g),aa(p,F.prev,F.next),aa(p,F,B===null?p.first:B.next),aa(p,B,F),B=F;continue}for(L=[],le=[];ce!==null&&ce.k!==G;)(ce.e.f&ua)===0&&(A??(A=new Set)).add(ce),le.push(ce),ce=ce.next;if(ce===null)continue;F=ce}L.push(F),B=F,ce=F.next}else{var J=f.get(G);if(J!==void 0){f.delete(G),Re.set(G,J);var be=B?B.next:ce;aa(p,B,J),aa(p,J,be),Bd(J,be,g),B=J}else B=U2(ce?ce.e.nodes_start:g,p,B,B===null?p.first:B.next,ne,G,Z,x,w,O);Re.set(G,B),L=[],le=[],ce=B.next}if(ce!==null||A!==void 0){for(var P=A===void 0?[]:wf(A);ce!==null;)(ce.e.f&ua)===0&&P.push(ce),ce=ce.next;var I=P.length;if(I>0){var D=4&w&&we===0?g:null;if(je){for(Z=0;Z<I;Z+=1){var ve;(ve=P[Z].a)===null||ve===void 0||ve.measure()}for(Z=0;Z<I;Z+=1){var Y;(Y=P[Z].a)===null||Y===void 0||Y.fix()}}(function(Qe,rt,Ce){for(var lt=Qe.items,Ae=[],We=rt.length,it=0;it<We;it++)Sv(rt[it].e,Ae,!0);var Ue=We>0&&Ae.length===0&&Ce!==null;if(Ue){var yt=Ce.parentNode;yt.textContent="",yt.append(Ce),lt.clear(),aa(Qe,rt[0].prev,rt[We-1].next)}h0(Ae,()=>{for(var $=0;$<We;$++){var N=rt[$];Ue||(lt.delete(N.k),aa(Qe,N.prev,N.next)),so(N.e,!Ue)}})})(p,P,D)}}je&&Ys(()=>{if(R!==void 0)for(F of R){var Qe;(Qe=F.a)===null||Qe===void 0||Qe.apply()}});for(var V of(j.first=p.first&&p.first.e,j.last=B&&B.e,f.values()))so(V.e);f.clear()})(d,c,l,b,i,s,t,o,r),a!==null&&(c.length===0?u?Mf(u):u=Ro(()=>a(i)):u!==null&&Xs(u,()=>{u=null}))}hs(()=>{d!=null||(d=dn);var j=(c=n(y)).length;m&&j===0||(m=j===0,h(),n(y))})}function L2(e,t,r,o){1&o&&Ui(e.v,t),2&o?Ui(e.i,r):e.i=r}function U2(e,t,r,o,s,a,i,l,c,d,u){var m=1&c?16&c?Ia(s):K(s,!1,!1):s,b=2&c?Ia(i):i,y={i:b,v:m,k:a,a:null,e:null,prev:r,next:o};try{return e===null&&document.createDocumentFragment().append(e=Wl()),y.e=Ro(()=>l(e,m,b,d),!1),y.e.prev=r&&r.e,y.e.next=o&&o.e,r===null?u||(t.first=y):(r.next=y,r.e.next=y.e),o!==null&&(o.prev=y,o.e.prev=y.e),y}finally{}}function Bd(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==o;){var i=Hl(a);s.before(a),a=i}}function aa(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function $0(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],s=e,a="";De(()=>{var i,l=dn;if(a!==(a=(i=t())!==null&&i!==void 0?i:"")&&(l.nodes_start!==null&&(v0(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),a!=="")){var c=a+"";r?c="<svg>".concat(c,"</svg>"):o&&(c="<math>".concat(c,"</math>"));var d=_v(c);if((r||o)&&(d=$o(d)),Ws($o(d),d.lastChild),r||o)for(;$o(d);)s.before($o(d));else s.before(d)}})}function dr(e,t,r,o,s){var a,i=(a=t.$$slots)===null||a===void 0?void 0:a[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?s!==null&&s(e):i(e,l?()=>o:o)}function P0(e,t,r){var o,s,a=e,i=null;function l(){s&&(Xs(s),s=null),s=i,i=null}hs(()=>{if(o!==(o=t())){if(o){var c=a;i=Ro(()=>r(c,o))}l()}},Fl)}function ao(e,t,r){Gr(()=>{var o=te(()=>t(e,r?.())||{});if(r&&o!=null&&o.update){var s=!1,a={};Xi(()=>{var i=r();C(i),s&&wv(a,i)&&(a=i,o.update(i))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function F2(e,t){var r,o=void 0;hs(()=>{o!==(o=t())&&(r&&(so(r),r=null),o&&(r=Ro(()=>{Gr(()=>o(e))})))})}function M0(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=M0(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function cs(e){return typeof e=="object"?function(){for(var t,r,o=0,s="",a=arguments.length;o<a;o++)(t=arguments[o])&&(r=M0(t))&&(s&&(s+=" "),s+=r);return s}(e):e??""}var Yh=[...` 	
\r\f \v\uFEFF`];function Xh(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Wd(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Rt(e,t,r,o,s,a){var i=e.__className;if(i!==r||i===void 0){var l=function(u,m,b){var y=u==null?"":""+u;if(m&&(y=y?y+" "+m:m),b){for(var h in b)if(b[h])y=y?y+" "+h:h;else if(y.length)for(var j=h.length,v=0;(v=y.indexOf(h,v))>=0;){var p=v+j;v!==0&&!Yh.includes(y[v-1])||p!==y.length&&!Yh.includes(y[p])?v=p:y=(v===0?"":y.substring(0,v))+y.substring(p+1)}}return y===""?null:y}(r,o,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var d=!!a[c];s!=null&&d===!!s[c]||e.classList.toggle(c,d)}return a}function Hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,o))}}function Io(e,t,r,o){if(e.__style!==t){var s=function(a,i){if(i){var l,c,d="";if(Array.isArray(i)?(l=i[0],c=i[1]):l=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,m=0,b=!1,y=[];l&&y.push(...Object.keys(l).map(Wd)),c&&y.push(...Object.keys(c).map(Wd));for(var h=0,j=-1,v=a.length,p=0;p<v;p++){var f=a[p];if(b?f==="/"&&a[p-1]==="*"&&(b=!1):u?u===f&&(u=!1):f==="/"&&a[p+1]==="*"?b=!0:f==='"'||f==="'"?u=f:f==="("?m++:f===")"&&m--,!b&&u===!1&&m===0){if(f===":"&&j===-1)j=p;else if(f===";"||p===v-1){if(j!==-1){var g=Wd(a.substring(h,j).trim());y.includes(g)||(f!==";"&&p++,d+=" "+a.substring(h,p).trim()+";")}h=p+1,j=-1}}}}return l&&(d+=Xh(l)),c&&(d+=Xh(c,!0)),(d=d.trim())===""?null:d}return a==null?null:String(a)}(t,o);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else o&&(Array.isArray(o)?(Hd(e,r?.[0],o[0]),Hd(e,r?.[1],o[1],"important")):Hd(e,r,o));return o}function Af(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!Qi(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(Zh(o))}else{for(o of e.options)if(O2(Zh(o),t))return void(o.selected=!0);r&&t===void 0||(e.selectedIndex=-1)}}function V2(e){var t=new MutationObserver(()=>{Af(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),kv(()=>{t.disconnect()})}function Zh(e){return"__value"in e?e.__value:e.value}var gi=Symbol("class"),hl=Symbol("style"),R0=Symbol("is custom element"),N0=Symbol("is html");function Hs(e,t){var r=Cv(e);r.value!==(r.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function kn(e,t,r,o){var s=Cv(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[b2]=r),r==null?e.removeAttribute(t):typeof r!="string"&&T0(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function B2(e,t,r,o){var s,a=Cv(e),i=a[R0],l=!a[N0],c=t||{},d=e.tagName==="OPTION";for(var u in t)u in r||(r[u]=null);r.class?r.class=cs(r.class):(o||r[gi])&&(r.class=null),r[hl]&&((s=r.style)!==null&&s!==void 0||(r.style=null));var m,b,y,h,j,v,p=T0(e),f=function(x){var w=r[x];if(d&&x==="value"&&w==null)return e.value=e.__value="",c[x]=w,0;if(x==="class")return m=e.namespaceURI==="http://www.w3.org/1999/xhtml",Rt(e,m,w,o,t?.[gi],r[gi]),c[x]=w,c[gi]=r[gi],0;if(x==="style")return Io(e,w,t?.[hl],r[hl]),c[x]=w,c[hl]=r[hl],0;if(w===(b=c[x])&&(w!==void 0||!e.hasAttribute(x))||(c[x]=w,(y=x[0]+x[1])==="$$"))return 0;if(y==="on"){var k={},O="$$"+x,A=x.slice(2);if(h=function(Z){return N2.includes(Z)}(A),function(Z){return Z.endsWith("capture")&&Z!=="gotpointercapture"&&Z!=="lostpointercapture"}(A)&&(A=A.slice(0,-7),k.capture=!0),!h&&b){if(w!=null)return 0;e.removeEventListener(A,c[O],k),c[O]=null}if(w!=null)if(h)e["__".concat(A)]=w,Jl([A]);else{let Z=function(je){c[x].call(this,je)};c[O]=C0(A,e,Z,k)}else h&&(e["__".concat(A)]=void 0)}else if(x==="style")kn(e,x,w);else if(x==="autofocus")(function(Z,je){if(je){var Q=document.body;Z.autofocus=!0,Ys(()=>{document.activeElement===Q&&Z.focus()})}})(e,!!w);else if(i||x!=="__value"&&(x!=="value"||w==null))if(x==="selected"&&d)(function(Z,je){je?Z.hasAttribute("selected")||Z.setAttribute("selected",""):Z.removeAttribute("selected")})(e,w);else if(j=x,l||(j=function(Z){var je;return Z=Z.toLowerCase(),(je=T2[Z])!==null&&je!==void 0?je:Z}(j)),v=j==="defaultValue"||j==="defaultChecked",w!=null||i||v)v||p.includes(j)&&(i||typeof w!="string")?(e[j]=w,j in a&&(a[j]=Vr)):typeof w!="function"&&kn(e,j,w);else if(a[x]=null,j==="value"||j==="checked"){var R=e,ne=t===void 0;if(j==="value"){var G=R.defaultValue;R.removeAttribute(j),R.defaultValue=G,R.value=R.__value=ne?G:null}else{var F=R.defaultChecked;R.removeAttribute(j),R.defaultChecked=F,R.checked=!!ne&&F}}else e.removeAttribute(x);else e.value=e.__value=w};for(var g in r)f(g);return c}function mu(e,t){var r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&arguments[5]!==void 0&&arguments[5],s=arguments.length>6&&arguments[6]!==void 0&&arguments[6];n0(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var i=void 0,l={},c=e.nodeName==="SELECT",d=!1;if(hs(()=>{var m=t(...a.map(n)),b=B2(e,i,m,r,o,s);for(var y of(d&&c&&"value"in m&&Af(e,m.value),Object.getOwnPropertySymbols(l)))m[y]||so(l[y]);for(var h of Object.getOwnPropertySymbols(m)){var j=m[h];h.description!=="@attach"||i&&j===i[h]||(l[h]&&so(l[h]),l[h]=Ro(()=>F2(e,()=>j))),b[h]=j}i=b}),c){var u=e;Gr(()=>{Af(u,i.value,!0),V2(u)})}d=!0})}function Cv(e){var t;return(t=e.__attributes)!==null&&t!==void 0?t:e.__attributes={[R0]:e.nodeName.includes("-"),[N0]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var em=new Map;function T0(e){var t,r=e.getAttribute("is")||e.nodeName,o=em.get(r);if(o)return o;em.set(r,o=[]);for(var s=e,a=Element.prototype;a!==s;){for(var i in t=Bg(s))t[i].set&&o.push(i);s=bv(s)}return o}function Nu(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=new WeakSet;$2(e,"input",function(){var s=jt(function*(a){var i=a?e.defaultValue:e.value;if(i=Kd(e)?Jd(i):i,r(i),Mr!==null&&o.add(Mr),yield x0(),i!==(i=t())){var l=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(c,e.value.length))}});return function(a){return s.apply(this,arguments)}}()),te(t)==null&&e.value&&(r(Kd(e)?Jd(e.value):e.value),Mr!==null&&o.add(Mr)),Xi(()=>{var s=t();if(e===document.activeElement){var a=xl??Mr;if(o.has(a))return}Kd(e)&&s===Jd(e.value)||(e.type!=="date"||s||e.value)&&s!==e.value&&(e.value=s??"")})}function Kd(e){var t=e.type;return t==="number"||t==="range"}function Jd(e){return e===""?null:+e}function St(e,t,r){var o=Ma(e,t);o&&o.set&&(e[t]=r,kv(()=>{e[t]=null}))}function tm(e,t){return e===t||e?.[da]===t}function er(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Gr(()=>{var o,s;return Xi(()=>{o=s,s=[],te(()=>{e!==r(...s)&&(t(e,...s),o&&tm(r(...o),e)&&t(null,...o))})}),()=>{Ys(()=>{s&&tm(r(...s),e)&&t(null,...s)})}}),e}function ka(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e?.apply(this,r)}}function Wa(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e?.apply(this,r)}}function Nt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Un,r=t.l.u;if(r){var o,s=()=>C(t.s);if(e){var a=0,i={},l=Bl(()=>{var c=!1,d=t.s;for(var u in d)d[u]!==i[u]&&(i[u]=d[u],c=!0);return c&&a++,a});s=()=>n(l)}r.b.length&&(o=()=>{nm(t,s),Pu(r.b)},c0(),ma(1048584,o,!0)),Pf(()=>{var c=te(()=>r.m.map(h2));return()=>{for(var d of c)typeof d=="function"&&d()}}),r.a.length&&Pf(()=>{nm(t,s),Pu(r.a)})}}function nm(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function ld(e){var t=Ia(0);return function(){return arguments.length===1?(S(t,n(t)+1),arguments[0]):(n(t),e())}}function yl(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],s=Qi(o)?o.slice():o==null?[]:[o];for(var a of s)a.call(this,t)}var Yc=!1,W2={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var o=dn;try{Do(e.parent_effect),e.special[t]=_({get[t](){return e.props[t]}},t,4)}finally{Do(o)}}return e.special[t](r),Wh(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Wh(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function Xc(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ia(0),parent_effect:dn},W2)}var H2={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(fl(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var s=e.props[o];fl(s)&&(s=s());var a=Ma(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(fl(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var s=Ma(o,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===da||t===Kg)return!1;for(var r of e.props)if(fl(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)if(fl(r)&&(r=r()),r){for(var o in r)t.includes(o)||t.push(o);for(var s of Object.getOwnPropertySymbols(r))t.includes(s)||t.push(s)}return t}};function os(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},H2)}function _(e,t,r,o){var s,a,i=!Ji||!!(2&r),l=!!(8&r),c=!!(16&r),d=o,u=!0,m=()=>(u&&(u=!1,d=c?te(o):o),d);if(l){var b,y,h=da in e||Kg in e;s=(b=(y=Ma(e,t))===null||y===void 0?void 0:y.set)!==null&&b!==void 0?b:h&&t in e?w=>e[t]=w:void 0}var j,v=!1;if(l?[a,v]=function(w){var k=Yc;try{return Yc=!1,[w(),Yc]}finally{Yc=k}}(()=>e[t]):a=e[t],a===void 0&&o!==void 0&&(a=m(),s&&(i&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),s(a))),j=i?()=>{var w=e[t];return w===void 0?m():(u=!0,w)}:()=>{var w=e[t];return w!==void 0&&(d=void 0),w===void 0?d:w},i&&!(4&r))return j;if(s){var p=e.$$legacy;return function(w,k){return arguments.length>0?(i&&k&&!p&&!v||s(k?j():w),w):j()}}var f=!1,g=(1&r?Bl:ot)(()=>(f=!1,j()));l&&n(g);var x=dn;return function(w,k){if(arguments.length>0){var O=k?n(g):i&&l?xi(w):w;return S(g,O),f=!0,d!==void 0&&(d=O),w}return Zs&&f||(x.f&Gi)!==0?g.v:n(g)}}function Ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var s=function(a){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[a]}catch{}}("debug");return s!=null&&s.endsWith("*")?o.startsWith(s.slice(0,-1)):o===s}(e);if(!t)return K2;var r=function(o){for(var s=0,a=0;a<o.length;a++)s=(s<<5)-s+o.charCodeAt(a),s|=0;return rm[Math.abs(s)%rm.length]}(e);return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];console.log("%c".concat(e),"color:".concat(r),...s)}}function K2(){}var rm=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],J2=0;function ki(){return++J2}function Yr(e){return parseInt(e,10)}function Ev(e){return Q2.test(e)}var Q2=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function wn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function lr(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function G2(e){return e===!0||e===!1}function qf(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return qf(Number(e));try{var t=e&&e.valueOf();if(t!==e)return qf(t)}catch{return!1}return!1}function A0(e){(Zc=Zc||window.document.createElement("div")).style.color="",Zc.style.color=e;var t=Zc.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var Zc=void 0;function Y2(e){return typeof e=="string"&&e.length<99&&!!A0(e)}function Ov(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(wn(e))return"object";var r=t.stringify(e);return r&&Ev(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var X2=/^https?:\/\/\S+$/;function cd(e){return typeof e=="string"&&X2.test(e)}function Zi(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(Ev(r)?t.parse(r):e)}var Z2=[];function om(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function zf(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!wn(i)||t&&l.length>0)&&(r[gt(l)]=!0),wn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var s=Math.min(e.length,1e4),a=0;a<s;a++)o(e[a],Z2);return Object.keys(r).sort().map(bo)}function q0(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function Tu(e,t){return e.length>t?e.slice(0,t):e}function am(e){return Ie({},e)}function sm(e){return Object.values(e)}function im(e,t,r,o){var s=e.slice(0),a=s.splice(t,r);return s.splice.apply(s,[t+o,0,...a]),s}function ek(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function Ql(e,t){try{return t.parse(e)}catch{return t.parse(ca(e))}}function z0(e,t){try{return Ql(e,t)}catch{return}}function Gl(e,t){e=e.replace(D0,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function I0(e){e=e.replace(D0,"");try{return ca(e)}catch{}try{var t=ca("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=ca("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var D0=/,\s*$/;function Fi(e,t){var r=cm.exec(t);if(r){var o=Yr(r[2]),s=function(y,h){for(var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:y.length,p=0,f=j;f<v;f++)y.charAt(f)===h&&p++;return p}(e,`
`,0,o),a=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:s,column:a,message:t.replace(cm,()=>"line ".concat(s+1," column ").concat(a+1))}}var i=ok.exec(t),l=i?Yr(i[1]):void 0,c=l!==void 0?l-1:void 0,d=ak.exec(t),u=d?Yr(d[1]):void 0,m=u!==void 0?u-1:void 0,b=c!==void 0&&m!==void 0?function(y,h,j){for(var v=y.indexOf(`
`),p=1;p<h&&v!==-1;)v=y.indexOf(`
`,v+1),p++;return v!==-1?v+j+1:void 0}(e,c,m):void 0;return{position:b,line:c,column:m,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function Qd(e,t){try{var r=bg.parse(e),o=gt(t),s=r.pointers[o];if(s)return{path:t,line:s.key?s.key.line:s.value?s.value.line:0,column:s.key?s.key.column:s.value?s.value.column:0,from:s.key?s.key.pos:s.value?s.value.pos:0,to:s.keyEnd?s.keyEnd.pos:s.valueEnd?s.valueEnd.pos:0}}catch(a){console.error(a)}return{path:t,line:0,column:0,from:0,to:0}}function Gd(e){return wn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Ol(e){return wn(e)&&typeof e.text=="string"}function $l(e){return wn(e)&&e.json!==void 0}function tk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Ol(e)?e:{text:r.stringify(e.json,null,t)}}function lm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return $l(e)?e:{json:t.parse(e.text)}}function If(e,t,r){return tk(e,t,r).text}function nk(e,t){return rk(e,t)>t}function rk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Ol(e))return e.text.length;var r=e.json,o=0;return function s(a){if(Array.isArray(a)){if((o+=a.length-1+2)>t)return;for(var i=0;i<a.length;i++)if(s(a[i]),o>t)return}else if(wn(a)){var l=Object.keys(a);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var d=l[c],u=a[d];o+=d.length+2,s(u)}}else o+=typeof a=="string"?a.length+2:String(a).length}(r),o}var cm=/(position|char) (\d+)/,ok=/line (\d+)/,ak=/column (\d+)/;function L0(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function um(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&sk.test(t)}var Rr,qn,Ho,Go,Yo,qo,as,sk=/[,:]\S/;function $v(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:r}=e;return t?r?ik:lk:r?ck:uk}(function(e){e.text="text",e.tree="tree",e.table="table"})(Rr||(Rr={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(qn||(qn={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(Ho||(Ho={})),function(e){e.info="info",e.warning="warning",e.error="error"}(Go||(Go={})),function(e){e.key="key",e.value="value"}(Yo||(Yo={})),function(e){e.asc="asc",e.desc="desc"}(qo||(qo={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(as||(as={}));var ik={escapeValue:e=>U0(B0(String(e))),unescapeValue:e=>W0(F0(e))},lk={escapeValue:e=>B0(String(e)),unescapeValue:e=>W0(e)},ck={escapeValue:e=>U0(String(e)),unescapeValue:e=>F0(e)},uk={escapeValue:e=>String(e),unescapeValue:e=>e};function U0(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function F0(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return V0[r]||r}catch{return t}})}var V0={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},dk={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function B0(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>V0[t]||t)}function W0(e){return e.replace(/\\["bfnrt\\]/g,t=>dk[t]||t)}function Vi(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function H0(e,t){return el(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function es(e,t,r){return el(e,o=>function(s,a,i){return typeof s.getAttribute=="function"&&s.getAttribute(a)===i}(o,t,r))}function el(e,t){return!!Pv(e,t)}function Pv(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function Yl(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function Mv(e){var t=Yl(e),r=t?.document.activeElement;return!!r&&el(r,o=>o===e)}function K0(e,t){return Pv(e,r=>r.nodeName===t)}function Yd(e){return es(e,"data-type","selectable-key")?qn.key:es(e,"data-type","selectable-value")?qn.value:es(e,"data-type","insert-selection-area-inside")?qn.inside:es(e,"data-type","insert-selection-area-after")?qn.after:qn.multi}function gu(e){return encodeURIComponent(gt(e))}function J0(e){var t,r=Pv(e,s=>!(s==null||!s.hasAttribute)&&s.hasAttribute("data-path")),o=(t=r?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?bo(decodeURIComponent(o)):void 0}function fk(e){var{allElements:t,currentElement:r,direction:o,hasPrio:s=()=>!0,margin:a=10}=e,i=ay(t.filter(function(p){var f=p.getBoundingClientRect();return f.width>0&&f.height>0}),c),l=c(r);function c(p){var f=p.getBoundingClientRect();return{x:f.left+f.width/2,y:f.top+f.height/2,rect:f,element:p}}function d(p,f){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,x=p.x-f.x,w=(p.y-f.y)*g;return Math.sqrt(x*x+w*w)}var u=p=>d(p,l);if(o==="Left"||o==="Right"){var m=o==="Left"?i.filter(p=>{return f=l,p.rect.left+a<f.rect.left;var f}):i.filter(p=>{return f=l,p.rect.right>f.rect.right+a;var f}),b=m.filter(p=>{return f=p,g=l,Math.abs(f.y-g.y)<a;var f,g}),y=nc(b,u)||nc(m,p=>d(p,l,10));return y?.element}if(o==="Up"||o==="Down"){var h=o==="Up"?i.filter(p=>{return f=l,p.y+a<f.y;var f}):i.filter(p=>{return f=l,p.y>f.y+a;var f}),j=h.filter(p=>s(p.element)),v=nc(j,u)||nc(h,u);return v?.element}}function Rv(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];Nv(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:Rv)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in vk||r.push(o),r.join(t)}function Nv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rv;return e.ctrlKey||e.metaKey&&t()}var vk={};function Ot(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}Ot(`.jse-absolute-popup.svelte-enkkpn {
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
}`);var pk=he('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),hk=he('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function mk(e,t){pt(t,!1);var r=_(t,"popup",8),o=_(t,"closeAbsolutePopup",8),s=K(),a=K();function i(m){r().options&&r().options.closeOnOuterClick&&!el(m.target,b=>b===n(s))&&o()(r().id)}function l(m){Da(m)==="Escape"&&(m.preventDefault(),m.stopPropagation(),o()(r().id))}no(function(){n(a)&&n(a).focus()}),Nt();var c=hk();Te("mousedown",Ra,function(m){i(m)},!0),Te("keydown",Ra,l,!0),Te("wheel",Ra,function(m){i(m)},!0);var d=H(c),u=m=>{var b=pk(),y=H(b);er(y,h=>S(a,h),()=>n(a)),P0(ie(y,2),()=>r().component,(h,j)=>{j(h,os(()=>r().props))}),De(h=>Io(b,h),[()=>(n(s),C(r()),te(()=>function(h,j){var v=h.getBoundingClientRect(),{left:p,top:f,positionAbove:g,positionLeft:x}=function(){if(j.anchor){var{anchor:w,width:k=0,height:O=0,offsetTop:A=0,offsetLeft:R=0,position:ne}=j,{left:G,top:F,bottom:Z,right:je}=w.getBoundingClientRect(),Q=ne==="top"||F+O>window.innerHeight&&F>O,we=ne==="left"||G+k>window.innerWidth&&G>k;return{left:we?je-R:G+R,top:Q?F-A:Z+A,positionAbove:Q,positionLeft:we}}if(typeof j.left=="number"&&typeof j.top=="number"){var{left:Re,top:Ee,width:ce=0,height:B=0}=j;return{left:Re,top:Ee,positionAbove:Ee+B>window.innerHeight&&Ee>B,positionLeft:Re+ce>window.innerWidth&&Re>ce}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(g?"bottom: ".concat(v.top-f,"px;"):"top: ".concat(f-v.top,"px;"))+(x?"right: ".concat(v.left-p,"px;"):"left: ".concat(p-v.left,"px;"))}(n(s),r().options)))]),W(m,b)};ye(d,m=>{n(s)&&m(u)}),er(c,m=>S(s,m),()=>n(s)),Te("mousedown",c,function(m){m.stopPropagation()}),Te("keydown",c,l),W(e,c),ht()}var gk=he("<!> <!>",1);function Df(e,t){pt(t,!1);var r=Ur("jsoneditor:AbsolutePopup"),o=K([],!0);function s(l){var c=n(o).findIndex(u=>u.id===l);if(c!==-1){var d=n(o)[c];d.options.onClose&&d.options.onClose(),S(o,n(o).filter(u=>u.id!==l))}}(function(l,c){Gg().set(l,c)})("absolute-popup",{openAbsolutePopup:function(l,c,d){r("open...",c,d);var u={id:ki(),component:l,props:c||{},options:d||{}};return S(o,[...n(o),u]),u.id},closeAbsolutePopup:s}),fe(()=>n(o),()=>{r("popups",n(o))}),Sn(),Nt(!0);var a=gk(),i=nt(a);vr(i,1,()=>n(o),_r,(l,c)=>{mk(l,{get popup(){return n(c)},closeAbsolutePopup:s})}),dr(ie(i,2),t,"default",{},null),W(e,a),ht()}function Xl(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),s=e,a=1;r.has(s);){var i="copy"+(a>1?" "+a:"");s="".concat(o," (").concat(i,")"),a++}return s}function Ca(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function bk(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var yk={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a=[];r&&r.path&&r.relation&&r.value&&a.push(["filter",[(i=r.relation,Cg("1 ".concat(i," 1"))[0]),eu(r.path),bk(r.value)]]);var i;return o&&o.path&&o.direction&&a.push(["sort",eu(o.path),o.direction==="desc"?"desc":"asc"]),s&&s.paths&&(s.paths.length>1?a.push(["pick",...s.paths.map(eu)]):a.push(["map",eu(s.paths[0])])),ew(["pipe",...a])},executeQuery:function(e,t,r){var o=L0(r,JSON)?e:function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0}(e);return t.trim()!==""?tw(o,t):o}};function eu(e){return["get",...e]}var jk=ms("<g><!></g>");function wk(e,t){pt(t,!1);var r=870711,o=K(""),s=_(t,"data",8);function a(l){if(!l||!l.raw)return"";var c=l.raw,d={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(u,m)=>{var b="fa-".concat((r+=1).toString(16));return d[m]=b,' id="'.concat(b,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(u,m,b,y)=>{var h=m||y;return h&&d[h]?"#".concat(d[h]):u}),c}fe(()=>C(s()),()=>{S(o,a(s()))}),Sn();var i=jk();$0(H(i),()=>n(o),!0),W(e,i),ht()}Ot(`
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
`);var xk=ms("<svg><!></svg>"),kk=ms("<path></path>"),Sk=ms("<polygon></polygon>"),_k=ms("<!><!><!>",1);function rn(e,t){var r=Xc(t,["children","$$slots","$$events","$$legacy"]),o=Xc(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);pt(t,!1);var s=_(t,"class",8,""),a=_(t,"data",8),i=K(),l=_(t,"scale",8,1),c=_(t,"spin",8,!1),d=_(t,"inverse",8,!1),u=_(t,"pulse",8,!1),m=_(t,"flip",8,void 0),b=_(t,"label",8,""),y=_(t,"style",8,""),h=K(10),j=K(10),v=K(),p=K();function f(){var x=1;return l()!==void 0&&(x=Number(l())),isNaN(x)||x<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*x}function g(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}fe(()=>(C(a()),C(y()),C(l())),()=>{S(i,function(x){var w;if(x){if(!("definition"in x)){if("iconName"in x&&"icon"in x){x.iconName;var[k,O,,,A]=x.icon;w={width:k,height:O,paths:(Array.isArray(A)?A:[A]).map(R=>({d:R}))}}else w=x[Object.keys(x)[0]];return w}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(a())),y(),l(),S(h,n(i)?n(i).width/g()*f():0),S(j,n(i)?n(i).height/g()*f():0),S(v,function(){var x="";y()!==null&&(x+=y());var w=f();return w===1?x.length===0?"":x:(x===""||x.endsWith(";")||(x+="; "),"".concat(x,"font-size: ").concat(w,"em"))}()),S(p,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(h)," ").concat(n(j)))}),Sn(),Nt(),function(x,w){var k=Xc(w,["children","$$slots","$$events","$$legacy"]),O=Xc(k,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),A=_(w,"class",8,""),R=_(w,"width",8),ne=_(w,"height",8),G=_(w,"box",8,"0 0 0 0"),F=_(w,"spin",8,!1),Z=_(w,"inverse",8,!1),je=_(w,"pulse",8,!1),Q=_(w,"flip",8,"none"),we=_(w,"style",8,""),Re=_(w,"label",8,""),Ee=xk();mu(Ee,ce=>{var B;return Ie(Ie({version:"1.1",class:"fa-icon ".concat((B=A())!==null&&B!==void 0?B:""),width:R(),height:ne(),"aria-label":Re(),role:Re()?"img":"presentation",viewBox:G(),style:we()},O),{},{[gi]:ce})},[()=>({"fa-spin":F(),"fa-pulse":je(),"fa-inverse":Z(),"fa-flip-horizontal":Q()==="horizontal","fa-flip-vertical":Q()==="vertical"})],void 0,"svelte-v67cny"),dr(H(Ee),w,"default",{},null),W(x,Ee)}(e,os({get label(){return b()},get width(){return n(h)},get height(){return n(j)},get box(){return n(p)},get style(){return n(v)},get spin(){return c()},get flip(){return m()},get inverse(){return d()},get pulse(){return u()},get class(){return s()}},()=>o,{children:(x,w)=>{var k=Ut();dr(nt(k),t,"default",{},O=>{var A=_k(),R=nt(A);vr(R,1,()=>(n(i),te(()=>{var Z;return((Z=n(i))===null||Z===void 0?void 0:Z.paths)||[]})),_r,(Z,je)=>{var Q=kk();mu(Q,()=>Ie({},n(je))),W(Z,Q)});var ne=ie(R);vr(ne,1,()=>(n(i),te(()=>{var Z;return((Z=n(i))===null||Z===void 0?void 0:Z.polygons)||[]})),_r,(Z,je)=>{var Q=Sk();mu(Q,()=>Ie({},n(je))),W(Z,Q)});var G=ie(ne),F=Z=>{wk(Z,{get data(){return n(i)},set data(je){S(i,je)},$$legacy:!0})};ye(G,Z=>{n(i),te(()=>{var je;return(je=n(i))===null||je===void 0?void 0:je.raw})&&Z(F)}),W(O,A)}),W(x,k)},$$slots:{default:!0}})),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Ck=he('<div role="checkbox" tabindex="-1"><!></div>');function Ek(e,t){pt(t,!1);var r=_(t,"path",9),o=_(t,"value",9),s=_(t,"readOnly",9),a=_(t,"onPatch",9),i=_(t,"focus",9);Nt(!0);var l,c=Ck(),d=H(c),u=ot(()=>o()===!0?Eg:Og);rn(d,{get data(){return n(u)}}),De(m=>{kn(c,"aria-checked",o()===!0),l=Rt(c,1,"jse-boolean-toggle svelte-eli4ob",null,l,m),kn(c,"title",s()?"Boolean value ".concat(o()):"Click to toggle this boolean value")},[()=>({"jse-readonly":s()})]),Te("mousedown",c,function(m){m.stopPropagation(),s()||(a()([{op:"replace",path:gt(r()),value:!o()}]),i()())}),W(e,c),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Ok=he('<div class="jse-color-picker-popup svelte-v77py2"></div>');function $k(e,t){pt(t,!1);var r=_(t,"color",8),o=_(t,"onChange",8),s=_(t,"showOnTop",8),a=K(),i=()=>{};no(jt(function*(){var c,d=new((c=yield v1(()=>import("./vanilla-picker-B6E6ObS_.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(a),color:r(),popup:s()?"top":"bottom",onDone(u){var m=u.rgba[3]===1?u.hex.substring(0,7):u.hex;o()(m)}});d.show(),i=()=>{d.destroy()}})),Lo(()=>{i()}),Nt();var l=Ok();er(l,c=>S(a,c),()=>n(a)),W(e,l),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Pk=he('<button type="button"></button>');function Mk(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),{openAbsolutePopup:s}=ps("absolute-popup"),a=_(t,"path",9),i=_(t,"value",9),l=_(t,"readOnly",9),c=_(t,"onPatch",9),d=_(t,"focus",9);function u(h){c()([{op:"replace",path:gt(a()),value:h}]),m()}function m(){d()()}fe(()=>C(i()),()=>{S(r,A0(i()))}),fe(()=>(C(l()),C(i())),()=>{S(o,l()?"Color ".concat(i()):"Click to open a color picker")}),Sn(),Nt(!0);var b,y=Pk();De(h=>{var j;b=Rt(y,1,"jse-color-picker-button svelte-13mgyo6",null,b,h),Io(y,"background: ".concat((j=n(r))!==null&&j!==void 0?j:"")),kn(y,"title",n(o)),kn(y,"aria-label",n(o))},[()=>({"jse-readonly":l()})]),Te("click",y,function(h){var j,v;if(!l()){var p=h.target,f=p.getBoundingClientRect().top,g=((j=(v=Yl(p))===null||v===void 0?void 0:v.innerHeight)!==null&&j!==void 0?j:0)-f<300&&f>300,x={color:i(),onChange:u,showOnTop:g};s($k,x,{anchor:p,closeOnOuterClick:!0,onClose:m,offsetTop:18,offsetLeft:-8,height:300})}}),W(e,y),ht()}var Xd=1e3,Pl=100,tu=100,Au=2e4,Ri=[{start:0,end:Pl}],Rk=1048576,Nk=1048576,Zd=10485760,ef="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",Tv="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Es="hover-insert-inside",nu="hover-insert-after",dm="hover-collection",tf="valid",fm="repairable",Ea=336,Oa=260,jl=100,vm={[qo.asc]:"ascending",[qo.desc]:"descending"};function Q0(e){for(var t=qy(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var s=r.length-1,a=r[s],i=t[o];i.start<=a.end?r[s]={start:Math.min(a.start,i.start),end:Math.max(a.end,i.end)}:r.push(i)}return r}function Lf(e){return qu(e)+Pl}function qu(e){return Math.floor(e/Pl)*Pl}function Uf(e){return!!e&&(e.type==="space"||e.space===!0)}function Ja(e){return!!e&&(e.type==="separator"||e.separator===!0)}function pm(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Sa(e){return!!e&&typeof e.onClick=="function"}function ci(e){return!!e&&e.type==="dropdown-button"&&Sa(e.main)&&Array.isArray(e.items)}function hm(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function mm(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function gm(e){return wn(e)&&wn(e.parseError)}function Tk(e){return wn(e)&&Array.isArray(e.validationErrors)}function Ak(e){return wn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function qk(e){return wn(e)&&Ak(e)&&typeof e.isChildError=="boolean"}function zk(e){return wn(e)&&typeof e.action=="function"&&wn(e.props)}function po(e){return e!==void 0&&e.type==="object"}function Dr(e){return e!==void 0&&e.type==="array"}function Av(e){return e!==void 0&&e.type==="value"}function Ks(e){return po(e)||Dr(e)}function G0(e){return e!==void 0&&Array.isArray(e.searchResults)}function zu(e){return!!e&&e.type==="tree"}function bm(e){return!!e&&e.type==="text"}function ym(e){return!!e&&e.type==="mode"}function Ff(e){var{json:t,expand:r}=e,o=function(s){var{json:a,factory:i}=s;return Array.isArray(a)?i.createArrayDocumentState():wn(a)?i.createObjectDocumentState():a!==void 0?i.createValueDocumentState():void 0}({json:t,factory:Iv});return r&&o?Bo(t,o,[],r):o}function qv(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:Ri,items:[]}}function zv(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Iv={createObjectDocumentState:zv,createArrayDocumentState:qv,createValueDocumentState:function(){return{type:"value"}}};function Y0(e,t,r,o){var{createObjectDocumentState:s,createArrayDocumentState:a,createValueDocumentState:i}=o;return function l(c,d,u){if(Array.isArray(c)){var m=Dr(d)?d:a();if(u.length===0)return m;var b=Yr(u[0]),y=l(c[b],m.items[b],u.slice(1));return fo(m,["items",u[0]],y)}if(wn(c)){var h=po(d)?d:s();if(u.length===0)return h;var j=u[0],v=l(c[j],h.properties[j],u.slice(1));return fo(h,["properties",j],v)}return Av(d)?d:i()}(e,t,r)}function Eo(e,t){return Ml(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?Dr(o)?o:qv({expanded:!!Ks(o)&&o.expanded}):wn(r)?po(o)?o:zv({expanded:!!Ks(o)&&o.expanded}):Av(o)?o:void 0},()=>!0)}function Ml(e,t,r,o,s){var a=o(e,t,r);if(Array.isArray(e)&&Dr(a)&&s(a)){var i=[];return Dv(e,a.visibleSections,c=>{var d=r.concat(String(c)),u=Ml(e[c],a.items[c],d,o,s);u!==void 0&&(i[c]=u)}),om(i,a.items)?a:Ie(Ie({},a),{},{items:i})}if(wn(e)&&po(a)&&s(a)){var l={};return Object.keys(e).forEach(c=>{var d=r.concat(c),u=Ml(e[c],a.properties[c],d,o,s);u!==void 0&&(l[c]=u)}),om(Object.values(l),Object.values(a.properties))?a:Ie(Ie({},a),{},{properties:l})}return a}function Dv(e,t,r){t.forEach(o=>{var{start:s,end:a}=o;q0(s,Math.min(e.length,a),r)})}function Rl(e,t){for(var r=e,o=[],s=0;s<t.length;){if(Array.isArray(r)){var a=t[s];o.push("items",a),r=r[Yr(a)]}else{if(!wn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(s));var i=t[s];o.push("properties",i),r=r[i]}s++}return o}function Bo(e,t,r,o){for(var s=t,a=function(l){var c=r.slice(0,l);s=Bi(e,s,c,(d,u)=>{var m=Ks(u)&&!u.expanded?Ie(Ie({},u),{},{expanded:!0}):u;return Dr(m)?function(b,y){if(function(v,p){return v.some(f=>p>=f.start&&p<f.end)}(b.visibleSections,y))return b;var h=qu(y),j={start:h,end:Lf(h)};return Ie(Ie({},b),{},{visibleSections:Q0(b.visibleSections.concat(j))})}(m,Yr(r[l])):m})},i=0;i<r.length;i++)a(i);return Bi(e,s,r,(l,c)=>function(d,u,m,b){return Ml(d,u,m,(y,h,j)=>Array.isArray(y)&&b(j)?Dr(h)?h.expanded?h:Ie(Ie({},h),{},{expanded:!0}):qv({expanded:!0}):wn(y)&&b(j)?po(h)?h.expanded?h:Ie(Ie({},h),{},{expanded:!0}):zv({expanded:!0}):h,y=>Ks(y)&&y.expanded)}(l,c,[],o))}function jm(e,t,r,o){return Bi(e,t,r,(s,a)=>o?function(i,l,c){return Ml(i,l,c,(d,u)=>wm(u),()=>!0)}(s,a,r):wm(a))}function wm(e){return Dr(e)&&e.expanded?Ie(Ie({},e),{},{expanded:!1,visibleSections:Ri}):po(e)&&e.expanded?Ie(Ie({},e),{},{expanded:!1}):e}function X0(e,t,r){var o={json:e,documentState:t},s=r.reduce((a,i)=>({json:Ko(a.json,[i]),documentState:Ik(a.json,a.documentState,i)}),o);return{json:s.json,documentState:Eo(s.json,s.documentState)}}function Ik(e,t,r){if(cg(r))return xm(e,t,r,void 0);if(ug(r))return km(e,t,r);if(av(r)){var o=Jo(e,r.path),s=la(e,t,o);return s?ud(e,t,o,{type:"value",enforceString:s}):t}return mf(r)||qs(r)?function(a,i,l){if(qs(l)&&l.from===l.path)return i;var c=i,d=Jo(a,l.from),u=sa(a,c,d);return qs(l)&&(c=km(a,c,{path:l.from})),c=xm(a,c,{path:l.path},u),c}(e,t,r):t}function sa(e,t,r){try{return Xe(t,Rl(e,r))}catch{return}}function Lv(e,t,r,o,s){var a=Y0(e,t,r,s);return lv(a,Rl(e,r),i=>{var l=Xe(e,r);return o(l,i)})}function ud(e,t,r,o){return function(s,a,i,l,c){var d=Y0(s,a,i,c);return fo(d,Rl(s,i),l)}(e,t,r,o,Iv)}function Bi(e,t,r,o){return Lv(e,t,r,o,Iv)}function xm(e,t,r,o){var s=Jo(e,r.path),a=t;return a=Bi(e,a,nn(s),(i,l)=>{if(!Dr(l))return l;var c=Yr(Ht(s)),{items:d,visibleSections:u}=l;return Ie(Ie({},l),{},{items:c<d.length?ek(d,c,o!==void 0?[o]:Array(1)):d,visibleSections:Z0(u,c,1)})}),ud(e,a,s,o)}function km(e,t,r){var o=Jo(e,r.path),s=nn(o),a=Xe(e,s);return Array.isArray(a)?Bi(e,t,s,(i,l)=>{if(!Dr(l))return l;var c=Yr(Ht(o)),{items:d,visibleSections:u}=l;return Ie(Ie({},l),{},{items:d.slice(0,c).concat(d.slice(c+1)),visibleSections:Z0(u,c,-1)})}):function(i,l,c){var d=Rl(i,c);return zo(l,d)?Xu(l,Rl(i,c)):l}(e,t,o)}function Z0(e,t,r){return function(o){for(var s=o.slice(0),a=1;a<s.length;)s[a-1].end===s[a].start&&(s[a-1]={start:s[a-1].start,end:s[a].end},s.splice(a)),a++;return s}(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function la(e,t,r){var o,s=Xe(e,r),a=sa(e,t,r),i=Av(a)?a.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=s)=="string"&&typeof Zi(o,JSON)!="string"}function Zl(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function Uv(e,t){var r=[];return function o(s,a,i){r.push(i),fr(s)&&Dr(a)&&a.expanded&&Dv(s,a.visibleSections,l=>{o(s[l],a.items[l],i.concat(String(l)))}),jr(s)&&po(a)&&a.expanded&&Object.keys(s).forEach(l=>{o(s[l],a.properties[l],i.concat(l))})}(e,t,[]),r}function eb(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function s(a,i){o.push({path:i,type:Ho.value});var l=sa(e,t,i);if(a&&Ks(l)&&l.expanded){if(r&&o.push({path:i,type:Ho.inside}),fr(a)){var c=Dr(l)?l.visibleSections:Ri;Dv(a,c,d=>{var u=i.concat(String(d));s(a[d],u),r&&o.push({path:u,type:Ho.after})})}jr(a)&&Object.keys(a).forEach(d=>{var u=i.concat(d);o.push({path:u,type:Ho.key}),s(a[d],u),r&&o.push({path:u,type:Ho.after})})}}(e,[]),o}function nf(e,t,r){var o=Uv(e,t),s=o.map(gt).indexOf(gt(r));if(s!==-1&&s<o.length-1)return o[s+1]}function Js(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Bo(e,t,r,nk({json:Xe(e,r)},o)?wl:Fv)}function rf(e,t,r){var o=sa(e,t,r);return Ks(o)&&o.expanded?t:Js(e,t,r)}function wl(e){return e.length===0||e.length===1&&e[0]==="0"}function Vf(e){return e.length===0}function Fv(){return!0}function bu(){return!1}function mo(e){return e&&e.type===qn.after||!1}function zr(e){return e&&e.type===qn.inside||!1}function Lr(e){return e&&e.type===qn.key||!1}function mn(e){return e&&e.type===qn.value||!1}function Ln(e){return e&&e.type===qn.multi||!1}function dd(e){return Ln(e)&&Ft(e.focusPath,e.anchorPath)}function Nl(e){return Ln(e)||mo(e)||zr(e)||Lr(e)||mn(e)}function of(e){return e&&e.type===qn.text||!1}function us(e,t){var r=[];return function(o,s,a){if(s){var i=Ds(s),l=ut(s);if(Ft(i,l))return a(i);if(o!==void 0){var c=nb(i,l);if(i.length===c.length||l.length===c.length)return a(c);var d=ro(i,l),u=$a(o,d),m=ss(o,d),b=Aa(o,d,u),y=Aa(o,d,m);if(!(b===-1||y===-1)){var h=Xe(o,c);if(jr(h)){for(var j=Object.keys(h),v=b;v<=y;v++){var p=a(c.concat(j[v]));if(p!==void 0)return p}return}if(fr(h)){for(var f=b;f<=y;f++){var g=a(c.concat(String(f)));if(g!==void 0)return g}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{r.push(o)}),r}function tb(e){return zr(e)?e.path:nn(ut(e))}function $a(e,t){if(!Ln(t))return t.path;var r=Aa(e,t,t.anchorPath);return Aa(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function ss(e,t){if(!Ln(t))return t.path;var r=Aa(e,t,t.anchorPath);return Aa(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function Sm(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var s=o?ut(r):$a(e,r),a=function(c,d,u){var m=Uv(c,d),b=m.map(gt),y=gt(u),h=b.indexOf(y);if(h!==-1&&h>0)return m[h-1]}(e,t,s);if(o)return zr(r)||mo(r)?a!==void 0?ro(s,s):void 0:a!==void 0?ro(Ds(r),a):void 0;if(mo(r)||zr(r))return Qt(s);if(Lr(r)){if(a===void 0||a.length===0)return;var i=nn(a),l=Xe(e,i);return Array.isArray(l)||vn(a)?Qt(a):La(a)}return mn(r),a!==void 0?Qt(a):void 0}}function _m(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var s=eb(e,t,o),a=s.findIndex(i=>Ft(i.path,ut(r))&&String(i.type)===String(r.type));return{caret:a!==-1?s[a]:void 0,previous:a!==-1&&a>0?s[a-1]:void 0,next:a!==-1&&a<s.length-1?s[a+1]:void 0}}function ui(e,t){for(var r=Uv(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var s=r[o];return s===void 0||s.length===0||Array.isArray(Xe(e,nn(s)))?Qt(s):La(s)}function Wi(e,t){if(t.length===1){var r=Pa(t);if(r.op==="replace")return Qt(Jo(e,r.path))}if(!vn(t)&&t.every(i=>i.op==="move")){var o=Pa(t),s=t.slice(1);if((mf(o)||qs(o))&&o.from!==o.path&&s.every(i=>(mf(i)||qs(i))&&i.from===i.path))return La(Jo(e,o.path))}var a=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>Jo(e,i.path));if(!vn(a))return{type:qn.multi,anchorPath:Pa(a),focusPath:Ht(a)}}function nb(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function Iu(e){return Lr(e)||mn(e)||dd(e)}function Cm(e,t){return Iu(t)&&lr(Xe(e,ut(t)))?ut(t):nn(ut(t))}function fa(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function ia(e){if(Ir(e)){var{type:t,path:r}=e;return{type:t,path:r}}return e}function La(e){return{type:qn.key,path:e}}function Vv(e,t){return{type:qn.key,path:e,edit:!0,initialValue:t}}function Qt(e){return{type:qn.value,path:e}}function Du(e,t){return{type:qn.value,path:e,edit:!0,initialValue:t}}function Ua(e){return{type:qn.inside,path:e}}function Ta(e){return{type:qn.after,path:e}}function ro(e,t){var r=nb(e,t),o=e.length>r.length&&t.length>r.length;return{type:qn.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function rb(e,t,r,o){if(Lr(t))return String(Ht(t.path));if(mn(t)){var s=Xe(e,t.path);return typeof s=="string"?s:o.stringify(s,null,r)}if(Ln(t)){if(vn(t.focusPath))return o.stringify(e,null,r);var a=tb(t),i=Xe(e,a);if(Array.isArray(i)){if(dd(t)){var l=Xe(e,t.focusPath);return o.stringify(l,null,r)}return us(e,t).map(c=>{var d=Xe(e,c);return"".concat(o.stringify(d,null,r),",")}).join(`
`)}return us(e,t).map(c=>{var d=Ht(c),u=Xe(e,c);return"".concat(o.stringify(d),": ").concat(o.stringify(u,null,r),",")}).join(`
`)}}function Ir(e){return(Lr(e)||mn(e))&&e.edit===!0}function Si(e){return Lr(e)||mn(e)||Ln(e)}function ru(e){return Lr(e)||mn(e)||dd(e)}function Bf(e){switch(e.type){case Ho.key:return La(e.path);case Ho.value:return Qt(e.path);case Ho.after:return Ta(e.path);case Ho.inside:return Ua(e.path)}}function Em(e,t){switch(e){case qn.key:return La(t);case qn.value:return Qt(t);case qn.after:return Ta(t);case qn.inside:return Ua(t);case qn.multi:case qn.text:return ro(t,t)}}function ou(e,t,r){if(t)return Tl(e,t,r)||fa(Ln(t)?nn(t.focusPath):t.path,r)?t:void 0}function Tl(e,t,r){if(e===void 0||!t)return!1;if(Lr(t)||zr(t)||mo(t))return Ft(t.path,r);if(mn(t))return fa(r,t.path);if(Ln(t)){var o=$a(e,t),s=ss(e,t),a=nn(t.focusPath);if(!fa(r,a)||r.length<=a.length)return!1;var i=Aa(e,t,o),l=Aa(e,t,s),c=Aa(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function Aa(e,t,r){var o=nn(t.focusPath);if(!fa(r,o)||r.length<=o.length)return-1;var s=r[o.length],a=Xe(e,o);if(jr(a))return Object.keys(a).indexOf(s);if(fr(a)){var i=Yr(s);if(i<a.length)return i}return-1}function ut(e){return Ln(e)?e.focusPath:e.path}function Ds(e){return Ln(e)?e.anchorPath:e.path}function ea(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var s of r)if(typeof s=="string"&&e.push(s),s&&typeof s=="object")for(var a in s)Object.hasOwnProperty.call(s,a)&&s[a]&&e.push(a);return e.join(" ")}function ob(e,t,r){return ea("jse-value","jse-"+Ov(e,r),{"jse-url":cd(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===Rr.table})}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Dk=he('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function ab(e,t){pt(t,!1);var r=Ur("jsoneditor:EditableDiv"),o=_(t,"value",9),s=_(t,"initialValue",9),a=_(t,"shortText",9,!1),i=_(t,"label",9),l=_(t,"onChange",9),c=_(t,"onCancel",9),d=_(t,"onFind",9),u=_(t,"onPaste",9,Pr),m=_(t,"onValueClass",9,()=>""),b=K(void 0,!0),y=K(void 0,!0),h=!1;function j(){return n(b)?function(f){return f.replace(/\n$/,"")}(n(b).innerText):""}function v(f){n(b)&&Oo(b,n(b).innerText=Vi(f))}no(()=>{r("onMount",{value:o(),initialValue:s()}),v(s()!==void 0?s():o()),n(b)&&function(f){if(f.firstChild!=null){var g=document.createRange(),x=window.getSelection();g.setStart(f,1),g.collapse(!0),x?.removeAllRanges(),x?.addRange(g)}else f.focus()}(n(b))}),Lo(()=>{var f=j();r("onDestroy",{closed:h,value:o(),newValue:f}),h||f===o()||l()(f,as.no)}),fe(()=>(C(m()),C(o())),()=>{S(y,m()(o()))}),Sn(),Nt(!0);var p=Dk();er(p,f=>S(b,f),()=>n(b)),De(f=>{kn(p,"aria-label",i()),Rt(p,1,f,"svelte-1r0oryi")},[()=>cs((C(ea),n(y),C(a()),te(()=>ea("jse-editable-div",n(y),{"jse-short-text":a()}))))]),Te("input",p,function(){var f=j();f===""&&v(""),S(y,m()(f))}),Te("keydown",p,function(f){f.stopPropagation();var g=Da(f);if(g==="Escape"&&(f.preventDefault(),h=!0,c()()),g==="Enter"||g==="Tab"){f.preventDefault(),h=!0;var x=j();l()(x,as.nextInside)}g==="Ctrl+F"&&(f.preventDefault(),d()(!1)),g==="Ctrl+H"&&(f.preventDefault(),d()(!0))}),Te("paste",p,function(f){if(f.stopPropagation(),u()&&f.clipboardData){var g=f.clipboardData.getData("text/plain");u()(g)}}),Te("blur",p,function(){var f=document.hasFocus(),g=j();r("handleBlur",{hasFocus:f,closed:h,value:o(),newValue:g}),document.hasFocus()&&!h&&(h=!0,g!==o()&&l()(g,as.self))}),W(e,p),ht()}function Lk(e,t){pt(t,!1);var r=_(t,"path",9),o=_(t,"value",9),s=_(t,"selection",9),a=_(t,"mode",9),i=_(t,"parser",9),l=_(t,"normalization",9),c=_(t,"enforceString",9),d=_(t,"onPatch",9),u=_(t,"onPasteJson",9),m=_(t,"onSelect",9),b=_(t,"onFind",9),y=_(t,"focus",9),h=_(t,"findNextInside",9);function j(g){return c()?g:Zi(g,i())}function v(){m()(Qt(r())),y()()}Nt(!0);var p=ot(()=>(C(l()),C(o()),te(()=>l().escapeValue(o())))),f=ot(()=>(C(Ir),C(s()),te(()=>Ir(s())?s().initialValue:void 0)));ab(e,{get value(){return n(p)},get initialValue(){return n(f)},label:"Edit value",onChange:function(g,x){d()([{op:"replace",path:gt(r()),value:j(l().unescapeValue(g))}],(w,k,O)=>{if(!O||Ft(r(),ut(O)))return{state:k,selection:x===as.nextInside?h()(r()):Qt(r())}}),y()()},onCancel:v,onPaste:function(g){try{var x=i().parse(g);lr(x)&&u()({path:r(),contents:x,onPasteAsJson:()=>{v();var w=[{op:"replace",path:gt(r()),value:x}];d()(w,(k,O)=>({state:Js(k,O,r())}))}})}catch{}},get onFind(){return b()},onValueClass:function(g){return ob(j(l().unescapeValue(g)),a(),i())}}),ht()}function _i(e,t,r){var o=nn(t),s=Xe(e,o);if(fr(s)){var a=Yr(Ht(t));return r.map((d,u)=>({op:"add",path:gt(o.concat(String(a+u))),value:d.value}))}if(jr(s)){var i=Ht(t),l=Object.keys(s),c=i!==void 0?Zl(l,i,!0):[];return[...r.map(d=>{var u=Xl(d.key,l);return{op:"add",path:gt(o.concat(u)),value:d.value}}),...c.map(d=>ds(o,d))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Wf(e,t,r){var o=Xe(e,t);if(Array.isArray(o)){var s=o.length;return r.map((a,i)=>({op:"add",path:gt(t.concat(String(s+i))),value:a.value}))}return r.map(a=>{var i=Xl(a.key,Object.keys(o));return{op:"add",path:gt(t.concat(i)),value:a.value}})}function ec(e,t,r,o){var s=t.filter(l=>l!==r),a=Xl(o,s),i=Zl(t,r,!1);return[{op:"move",from:gt(e.concat(r)),path:gt(e.concat(a))},...i.map(l=>ds(e,l))]}function sb(e,t){var r=Ht(t);if(vn(r))throw new Error("Cannot duplicate root object");var o=nn(r),s=Ht(r),a=Xe(e,o);if(fr(a)){var i=Ht(t),l=i?Yr(Ht(i))+1:0;return[...t.map((u,m)=>({op:"copy",from:gt(u),path:gt(o.concat(String(m+l)))}))]}if(jr(a)){var c=Object.keys(a),d=s!==void 0?Zl(c,s,!1):[];return[...t.map(u=>{var m=Xl(Ht(u),c);return{op:"copy",from:gt(u),path:gt(o.concat(m))}}),...d.map(u=>ds(o,u))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function ib(e,t){if(mn(t))return[{op:"move",from:gt(t.path),path:""}];if(!Ln(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var r=nn(t.focusPath),o=Xe(e,r);if(fr(o)){var s=us(e,t).map(i=>{var l=Yr(Ht(i));return o[l]});return[{op:"replace",path:"",value:s}]}if(jr(o)){var a={};return us(e,t).forEach(i=>{var l=String(Ht(i));a[l]=o[l]}),[{op:"replace",path:"",value:a}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function lb(e,t,r,o){if(Lr(t)){var s=z0(r,o),a=nn(t.path),i=Xe(e,a);return ec(a,Object.keys(i),Ht(t.path),typeof s=="string"?s:r)}if(mn(t)||Ln(t)&&vn(t.focusPath))try{return[{op:"replace",path:gt(ut(t)),value:Gl(r,k=>Ql(k,o))}]}catch{return[{op:"replace",path:gt(ut(t)),value:r}]}if(Ln(t)){var l=af(r,o);return function(k,O,A){var R=Pa(O),ne=nn(R),G=Xe(k,ne);if(fr(G)){var F=Pa(O),Z=F?Yr(Ht(F)):0;return[...Lu(O),...A.map((L,le)=>({op:"add",path:gt(ne.concat(String(le+Z))),value:L.value}))]}if(jr(G)){var je=Ht(O),Q=nn(je),we=Ht(je),Re=Object.keys(G),Ee=we!==void 0?Zl(Re,we,!1):[],ce=new Set(O.map(L=>Ht(L))),B=Re.filter(L=>!ce.has(L));return[...Lu(O),...A.map(L=>{var le=Xl(L.key,B);return{op:"add",path:gt(Q.concat(le)),value:L.value}}),...Ee.map(L=>ds(Q,L))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,us(e,t),l)}if(mo(t)){var c=af(r,o),d=t.path,u=nn(d),m=Xe(e,u);if(fr(m)){var b=Yr(Ht(d));return _i(e,u.concat(String(b+1)),c)}if(jr(m)){var y=String(Ht(d)),h=Object.keys(m);if(vn(h)||Ht(h)===y)return Wf(e,u,c);var j=h.indexOf(y),v=h[j+1];return _i(e,u.concat(v),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(zr(t)){var p=af(r,o),f=t.path,g=Xe(e,f);if(fr(g))return _i(e,f.concat("0"),p);if(jr(g)){var x=Object.keys(g);if(vn(x))return Wf(e,f,p);var w=Pa(x);return _i(e,f.concat(w),p)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Lu(e){return e.map(t=>({op:"remove",path:gt(t)})).reverse()}function ds(e,t){return{op:"move",from:gt(e.concat(t)),path:gt(e.concat(t))}}function af(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),s=z0(e,t),a=s!==void 0?s:Gl(e,i=>Ql(i,t));return r&&wn(a)||o&&Array.isArray(a)?[{key:"New item",value:a}]:Array.isArray(a)?a.map((i,l)=>({key:"New item "+l,value:i})):wn(a)?Object.keys(a).map(i=>({key:i,value:a[i]})):[{key:"New item",value:a}]}function cb(e,t){if(Lr(t)){var r=nn(t.path),o=Xe(e,r),s=ec(r,Object.keys(o),Ht(t.path),"");return{operations:s,newSelection:Wi(e,s)}}if(mn(t))return{operations:[{op:"replace",path:gt(t.path),value:""}],newSelection:t};if(Ln(t)){var a=us(e,t),i=Lu(a),l=Ht(a);if(vn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Qt([])};var c=nn(l),d=Xe(e,c);if(fr(d)){var u=Pa(a),m=Yr(Ht(u));return{operations:i,newSelection:m===0?Ua(c):Ta(c.concat(String(m-1)))}}if(jr(d)){var b=Object.keys(d),y=Pa(a),h=Ht(y),j=b.indexOf(h),v=b[j-1];return{operations:i,newSelection:j===0?Ua(c):Ta(c.concat(v))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function ub(e,t){var r=function(o,s){if(vn(s)||!s.every(qs))return s;var a=[];for(var i of s){var l=Om(bo(i.from)),c=Om(bo(i.path));if(!l||!c)return s;a.push({from:l,path:c,operation:i})}var d=a[0].path.parent,u=Xe(o,d);if(!jr(u)||!a.every(h=>function(j,v){return Ft(j.from.parent,v)&&Ft(j.path.parent,v)}(h,d)))return s;var m=function(h,j){var v=Object.keys(j),p=v.slice();for(var f of h){var g=p.indexOf(f.from.key);g!==-1&&(p.splice(g,1),p.push(f.path.key))}for(var x=0;x<v.length&&v[x]===p[x];)x++;return p[x]}(a,o),b=h=>h.operation,y=a.filter(h=>h.operation.from!==h.operation.path);return y.some(h=>h.path.key===m)?y.map(b):[ds(d,m),...y.map(b)]}(e,t);return pg(e,r,{before:(o,s,a)=>{if(ug(s)){var i=bo(s.path);return{revertOperations:[...a,...sf(o,i)]}}if(qs(s)){var l=bo(s.from);return{revertOperations:s.from===s.path?[s,...sf(o,l)]:[...a,...sf(o,l)]}}return{document:o}}})}function Om(e){return e.length>0?{parent:nn(e),key:Ht(e)}:void 0}function sf(e,t){var r=nn(t),o=Ht(t),s=Xe(e,r);return jr(s)?Zl(Object.keys(s),o,!1).map(a=>ds(r,a)):[]}function $m(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((s,a)=>Ie(Ie({},s),{},{active:a===t}));return Ie(Ie({},e),{},{items:o,activeItem:r,activeIndex:t})}function Pm(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.toLowerCase(),a=(r=o?.maxResults)!==null&&r!==void 0?r:1/0,i=o?.columns,l=[],c=[];function d(v){l.length>=a||l.push(v)}function u(v,p){if(fr(p)){var f=c.length;c.push("0");for(var g=0;g<p.length;g++)if(c[f]=String(g),u(v,p[g]),l.length>=a)return;c.pop()}else if(jr(p)){var x=Object.keys(p),w=c.length;for(var k of(c.push(""),x))if(c[w]=k,Mm(k,v,c,Yo.key,d),u(v,p[k]),l.length>=a)return;c.pop()}else Mm(String(p),v,c,Yo.value,d)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var m=0;m<t.length;m++){c[0]=String(m);for(var b=t[m],y=0;y<i.length;y++){var h=i[y];if(h.length===1)c[1]=h[0];else for(var j=0;j<h.length;j++)c[j+1]=h[j];for(;c.length>h.length+1;)c.pop();u(s,Xe(b,h))}if(l.length>=a)break}return l}return u(s,t),l}function Mm(e,t,r,o,s){var a=e.toLowerCase(),i=0,l=-1,c=-1;do(c=a.indexOf(t,l))!==-1&&(l=c+t.length,s({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function Hf(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function Rm(e,t,r){var o=e;return jy(r,s=>{o=Hf(o,t,s.start,s.end)}),o}function Uk(e,t,r,o,s){var{field:a,path:i,start:l,end:c}=o;if(a===Yo.key){var d=nn(i),u=Xe(e,d),m=Ht(i),b=ec(d,Object.keys(u),m,Hf(m,r,l,c));return{newSelection:Wi(e,b),operations:b}}if(a===Yo.value){var y=Xe(e,i);if(y===void 0)throw new Error("Cannot replace: path not found ".concat(gt(i)));var h=typeof y=="string"?y:String(y),j=la(e,t,i),v=Hf(h,r,l,c),p=[{op:"replace",path:gt(i),value:j?v:Zi(v,s)}];return{newSelection:Wi(e,p),operations:p}}throw new Error("Cannot replace: unknown type of search result field ".concat(a))}function Nm(e){return e.path.concat(e.field,String(e.fieldIndex))}function Tm(e){var t=G0(e)?e.searchResults.filter(r=>r.field===Yo.key):void 0;return t&&t.length>0?t:void 0}function Am(e){var t=G0(e)?e.searchResults.filter(r=>r.field===Yo.value):void 0;return t&&t.length>0?t:void 0}var Fk={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function db(e,t){return t.reduce((r,o)=>function(s,a,i,l){return Lv(s,a,i,l,Fk)}(e,r,o.path,(s,a)=>Ie(Ie({},a),{},{searchResults:a.searchResults?a.searchResults.concat(o):[o]})),void 0)}function Uu(e){var t,r=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=po(e)?Object.values(e.properties).flatMap(Uu):Dr(e)?e.items.flatMap(Uu):[];return r.concat(o)}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Vk=he("<span> </span>");function fb(e,t){pt(t,!1);var r=K(),o=_(t,"text",8),s=_(t,"searchResultItems",8);fe(()=>(C(o()),C(s())),()=>{S(r,function(i,l){var c=[],d=0;for(var u of l){var m=i.slice(d,u.start);m!==""&&c.push({resultIndex:void 0,type:"normal",text:m,active:!1});var b=i.slice(u.start,u.end);c.push({resultIndex:u.resultIndex,type:"highlight",text:b,active:u.active}),d=u.end}var y=Ht(l);return y&&y.end<i.length&&c.push({type:"normal",text:i.slice(y.end),resultIndex:void 0,active:!1}),c}(String(o()),s()))}),Sn(),Nt();var a=Ut();vr(nt(a),1,()=>n(r),_r,(i,l)=>{var c=Ut(),d=nt(c),u=b=>{var y=Br();De(()=>mt(y,(n(l),te(()=>n(l).text)))),W(b,y)},m=b=>{var y,h=Vk(),j=H(h);De((v,p,f)=>{y=Rt(h,1,"jse-highlight svelte-19qyvy6",null,y,v),kn(h,"data-search-result-index",p),mt(j,f)},[()=>({"jse-active":n(l).active}),()=>(n(l),te(()=>String(n(l).resultIndex))),()=>(C(Vi),n(l),te(()=>Vi(n(l).text)))]),W(b,h)};ye(d,b=>{n(l),te(()=>n(l).type==="normal")?b(u):b(m,!1)}),W(i,c)}),W(e,a),ht()}function yu(e){var t=1e3;if(e<900)return e.toFixed()+" B";var r=e/t;if(r<900)return r.toFixed(1)+" KB";var o=r/t;if(o<900)return o.toFixed(1)+" MB";var s=o/t;return s<900?s.toFixed(1)+" GB":(s/t).toFixed(1)+" TB"}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Bk=he('<button type="button"><!></button>');function ju(e,t){pt(t,!0);var r,o=ho(()=>t.onclick?a=>{a.preventDefault(),a.stopPropagation(),t.onclick()}:void 0),s=Bk();s.__click=function(){for(var a,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];(a=n(o))===null||a===void 0||a.apply(this,l)},function(a,i){for(var l=arguments.length,c=new Array(l>2?l-2:0),d=2;d<l;d++)c[d-2]=arguments[d];var u,m=a,b=zh;hs(()=>{b!==(b=i())&&(u&&(so(u),u=null),u=Ro(()=>b(m,...c)))},Fl)}(H(s),()=>{var a;return(a=t.children)!==null&&a!==void 0?a:zh}),De(a=>r=Rt(s,1,"jse-tag svelte-ubve9r",null,r,a),[()=>({disabled:!t.onclick})]),W(e,s),ht()}Jl(["click"]);function Wk(e,t,r){typeof t.value=="string"&&n(r)&&Nv(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,"_blank"))}function Hk(e,t){t.readOnly||(e.preventDefault(),t.onSelect(Du(t.path)))}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Kk=he('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function Jk(e,t){pt(t,!0);var r=xa(!0),o=ho(()=>n(r)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(y=>y.active&&y.end>t.truncateTextSize))),s=ho(()=>n(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),a=ho(()=>cd(t.value));function i(){S(r,!1)}var l=Kk();l.__click=[Wk,t,a],l.__dblclick=[Hk,t];var c=H(l),d=y=>{var h=ho(()=>t.normalization.escapeValue(n(s)));fb(y,{get text(){return n(h)},get searchResultItems(){return t.searchResultItems}})},u=y=>{var h=Br();De(j=>mt(h,j),[()=>Vi(t.normalization.escapeValue(n(s)))]),W(y,h)};ye(c,y=>{t.searchResultItems?y(d):y(u,!1)});var m=ie(c,2),b=y=>{ju(y,{onclick:i,children:(h,j)=>{var v=Br();De(p=>mt(v,"Show more (".concat(p??"",")")),[()=>yu(t.value.length)]),W(h,v)},$$slots:{default:!0}})};ye(m,y=>{n(o)&&typeof t.value=="string"&&y(b)}),De(y=>{Rt(l,1,y,"svelte-1saqp8c"),kn(l,"title",n(a)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>cs(ob(t.value,t.mode,t.parser))]),W(e,l),ht()}Jl(["click","dblclick"]);Ot(`/* over all fonts, sizes, and colors */
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
}`);var Qk=he('<div class="jse-tooltip svelte-brt1mq"> </div>');function Gk(e,t){var r=_(t,"text",8),o=Qk(),s=H(o);De(()=>mt(s,r())),W(e,o)}function Hi(e,t){var r,{text:o,openAbsolutePopup:s,closeAbsolutePopup:a}=t;function i(){r=s(Gk,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){a(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Yk=he('<div class="jse-timestamp svelte-1jcpman"><!></div>');function Xk(e,t){pt(t,!1);var r=K(void 0,!0),o=ps("absolute-popup"),s=_(t,"value",9);fe(()=>C(s()),()=>{S(r,"Time: ".concat(new Date(s()).toString()))}),Sn(),Nt(!0);var a=Yk();rn(H(a),{get data(){return ow}}),ao(a,(i,l)=>Hi?.(i,l),()=>Ie({text:n(r)},o)),W(e,a),ht()}function Zk(e){var t=[];return!e.isEditing&&G2(e.value)&&t.push({component:Ek,props:e}),!e.isEditing&&Y2(e.value)&&t.push({component:Mk,props:e}),e.isEditing&&t.push({component:Lk,props:e}),e.isEditing||t.push({component:Jk,props:e}),!e.isEditing&&qf(e.value)&&t.push({component:Xk,props:e}),t}function go(e){return e.map((t,r)=>t4.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(r>0?".":"")+t).join("")}function e4(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(a=>a==='"',!0)),s('"')):t.push(o(a=>a==="]")),s("]")):t.push(o(a=>a==="."||a==="["));function o(a){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!a(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function s(a){if(e[r]!==a)throw new SyntaxError("Invalid JSON path: ".concat(a," expected at position ").concat(r));r++}return t}function Qa(e){return{value:e,label:vn(e)?"(item root)":go(e)}}var t4=/^\d+$/,n4={},r4={showWizard:!0,showOriginal:!0},Fu=Math.min,Ls=Math.max,Vu=Math.round,au=Math.floor,va=e=>({x:e,y:e}),o4={left:"right",right:"left",bottom:"top",top:"bottom"},a4={start:"end",end:"start"};function qm(e,t,r){return Ls(e,Fu(t,r))}function fd(e,t){return typeof e=="function"?e(t):e}function Qs(e){return e.split("-")[0]}function vd(e){return e.split("-")[1]}function vb(e){return e==="x"?"y":"x"}function pb(e){return e==="y"?"height":"width"}var s4=new Set(["top","bottom"]);function ts(e){return s4.has(Qs(e))?"y":"x"}function hb(e){return vb(ts(e))}function Kf(e){return e.replace(/start|end/g,t=>a4[t])}var zm=["left","right"],Im=["right","left"],i4=["top","bottom"],l4=["bottom","top"];function c4(e,t,r,o){var s=vd(e),a=function(i,l,c){switch(i){case"top":case"bottom":return c?l?Im:zm:l?zm:Im;case"left":case"right":return l?i4:l4;default:return[]}}(Qs(e),r==="start",o);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(Kf)))),a}function su(e){return e.replace(/left|right|bottom|top/g,t=>o4[t])}function u4(e){return typeof e!="number"?function(t){return Ie({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Bu(e){var{x:t,y:r,width:o,height:s}=e;return{width:o,height:s,top:r,left:t,right:t+o,bottom:r+s,x:t,y:r}}function Dm(e,t,r){var o,{reference:s,floating:a}=e,i=ts(t),l=hb(t),c=pb(l),d=Qs(t),u=i==="y",m=s.x+s.width/2-a.width/2,b=s.y+s.height/2-a.height/2,y=s[c]/2-a[c]/2;switch(d){case"top":o={x:m,y:s.y-a.height};break;case"bottom":o={x:m,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:b};break;case"left":o={x:s.x-a.width,y:b};break;default:o={x:s.x,y:s.y}}switch(vd(t)){case"start":o[l]-=y*(r&&u?-1:1);break;case"end":o[l]+=y*(r&&u?-1:1)}return o}var d4=function(){var e=jt(function*(t,r,o){for(var{placement:s="bottom",strategy:a="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),d=yield l.isRTL==null?void 0:l.isRTL(r),u=yield l.getElementRects({reference:t,floating:r,strategy:a}),{x:m,y:b}=Dm(u,s,d),y=s,h={},j=0,v=0;v<c.length;v++){var{name:p,fn:f}=c[v],{x:g,y:x,data:w,reset:k}=yield f({x:m,y:b,initialPlacement:s,placement:y,strategy:a,middlewareData:h,rects:u,platform:l,elements:{reference:t,floating:r}});m=g??m,b=x??b,h=Ie(Ie({},h),{},{[p]:Ie(Ie({},h[p]),w)}),k&&j<=50&&(j++,typeof k=="object"&&(k.placement&&(y=k.placement),k.rects&&(u=k.rects===!0?yield l.getElementRects({reference:t,floating:r,strategy:a}):k.rects),{x:m,y:b}=Dm(u,y,d)),v=-1)}return{x:m,y:b,placement:y,strategy:a,middlewareData:h}});return function(t,r,o){return e.apply(this,arguments)}}();function mb(e,t){return Jf.apply(this,arguments)}function Jf(){return Jf=jt(function*(e,t){var r;t===void 0&&(t={});var{x:o,y:s,platform:a,rects:i,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:b=!1,padding:y=0}=fd(t,e),h=u4(y),j=l[b?m==="floating"?"reference":"floating":m],v=Bu(yield a.getClippingRect({element:(r=yield a.isElement==null?void 0:a.isElement(j))==null||r?j:j.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),p=m==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,f=yield a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating),g=(yield a.isElement==null?void 0:a.isElement(f))&&(yield a.getScale==null?void 0:a.getScale(f))||{x:1,y:1},x=Bu(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:p,offsetParent:f,strategy:c}):p);return{top:(v.top-x.top+h.top)/g.y,bottom:(x.bottom-v.bottom+h.bottom)/g.y,left:(v.left-x.left+h.left)/g.x,right:(x.right-v.right+h.right)/g.x}}),Jf.apply(this,arguments)}var f4=new Set(["left","top"]);function Qf(){return Qf=jt(function*(e,t){var{placement:r,platform:o,elements:s}=e,a=yield o.isRTL==null?void 0:o.isRTL(s.floating),i=Qs(r),l=vd(r),c=ts(r)==="y",d=f4.has(i)?-1:1,u=a&&c?-1:1,m=fd(t,e),{mainAxis:b,crossAxis:y,alignmentAxis:h}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof h=="number"&&(y=l==="end"?-1*h:h),c?{x:y*u,y:b*d}:{x:b*d,y:y*u}}),Qf.apply(this,arguments)}function pd(){return typeof window<"u"}function Ki(e){return gb(e)?(e.nodeName||"").toLowerCase():"#document"}function Po(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function pa(e){var t;return(t=(gb(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gb(e){return!!pd()&&(e instanceof Node||e instanceof Po(e).Node)}function Xo(e){return!!pd()&&(e instanceof Element||e instanceof Po(e).Element)}function ha(e){return!!pd()&&(e instanceof HTMLElement||e instanceof Po(e).HTMLElement)}function Lm(e){return!(!pd()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof Po(e).ShadowRoot)}var v4=new Set(["inline","contents"]);function Al(e){var{overflow:t,overflowX:r,overflowY:o,display:s}=Zo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!v4.has(s)}var p4=new Set(["table","td","th"]);function h4(e){return p4.has(Ki(e))}var m4=[":popover-open",":modal"];function Wu(e){return m4.some(t=>{try{return e.matches(t)}catch{return!1}})}var g4=["transform","translate","scale","rotate","perspective"],b4=["transform","translate","scale","rotate","perspective","filter"],y4=["paint","layout","strict","content"];function Gf(e){var t=Bv(),r=Xo(e)?Zo(e):e;return g4.some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||b4.some(o=>(r.willChange||"").includes(o))||y4.some(o=>(r.contain||"").includes(o))}function Bv(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var j4=new Set(["html","body","#document"]);function Ni(e){return j4.has(Ki(e))}function Zo(e){return Po(e).getComputedStyle(e)}function hd(e){return Xo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ns(e){if(Ki(e)==="html")return e;var t=e.assignedSlot||e.parentNode||Lm(e)&&e.host||pa(e);return Lm(t)?t.host:t}function bb(e){var t=ns(e);return Ni(t)?e.ownerDocument?e.ownerDocument.body:e.body:ha(t)&&Al(t)?t:bb(t)}function ql(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var s=bb(e),a=s===((o=e.ownerDocument)==null?void 0:o.body),i=Po(s);if(a){var l=Yf(i);return t.concat(i,i.visualViewport||[],Al(s)?s:[],l&&r?ql(l):[])}return t.concat(s,ql(s,[],r))}function Yf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function yb(e){var t=Zo(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,s=ha(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:o,l=Vu(r)!==a||Vu(o)!==i;return l&&(r=a,o=i),{width:r,height:o,$:l}}function Wv(e){return Xo(e)?e:e.contextElement}function Ti(e){var t=Wv(e);if(!ha(t))return va(1);var r=t.getBoundingClientRect(),{width:o,height:s,$:a}=yb(t),i=(a?Vu(r.width):r.width)/o,l=(a?Vu(r.height):r.height)/s;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var w4=va(0);function jb(e){var t=Po(e);return Bv()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:w4}function Gs(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var s=e.getBoundingClientRect(),a=Wv(e),i=va(1);t&&(o?Xo(o)&&(i=Ti(o)):i=Ti(e));var l=function(w,k,O){return k===void 0&&(k=!1),!(!O||k&&O!==Po(w))&&k}(a,r,o)?jb(a):va(0),c=(s.left+l.x)/i.x,d=(s.top+l.y)/i.y,u=s.width/i.x,m=s.height/i.y;if(a)for(var b=Po(a),y=o&&Xo(o)?Po(o):o,h=b,j=Yf(h);j&&o&&y!==h;){var v=Ti(j),p=j.getBoundingClientRect(),f=Zo(j),g=p.left+(j.clientLeft+parseFloat(f.paddingLeft))*v.x,x=p.top+(j.clientTop+parseFloat(f.paddingTop))*v.y;c*=v.x,d*=v.y,u*=v.x,m*=v.y,c+=g,d+=x,j=Yf(h=Po(j))}return Bu({width:u,height:m,x:c,y:d})}function Hu(e,t){var r=hd(e).scrollLeft;return t?t.left+r:Gs(pa(e)).left+r}function wb(e,t){var r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-Hu(e,r),y:r.top+t.scrollTop}}var x4=new Set(["absolute","fixed"]);function Um(e,t,r){var o;if(t==="viewport")o=function(a,i){var l=Po(a),c=pa(a),d=l.visualViewport,u=c.clientWidth,m=c.clientHeight,b=0,y=0;if(d){u=d.width,m=d.height;var h=Bv();(!h||h&&i==="fixed")&&(b=d.offsetLeft,y=d.offsetTop)}var j=Hu(c);if(j<=0){var v=c.ownerDocument,p=v.body,f=getComputedStyle(p),g=v.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,x=Math.abs(c.clientWidth-p.clientWidth-g);x<=25&&(u-=x)}else j<=25&&(u+=j);return{width:u,height:m,x:b,y}}(e,r);else if(t==="document")o=function(a){var i=pa(a),l=hd(a),c=a.ownerDocument.body,d=Ls(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),u=Ls(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),m=-l.scrollLeft+Hu(a),b=-l.scrollTop;return Zo(c).direction==="rtl"&&(m+=Ls(i.clientWidth,c.clientWidth)-d),{width:d,height:u,x:m,y:b}}(pa(e));else if(Xo(t))o=function(a,i){var l=Gs(a,!0,i==="fixed"),c=l.top+a.clientTop,d=l.left+a.clientLeft,u=ha(a)?Ti(a):va(1);return{width:a.clientWidth*u.x,height:a.clientHeight*u.y,x:d*u.x,y:c*u.y}}(t,r);else{var s=jb(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Bu(o)}function xb(e,t){var r=ns(e);return!(r===t||!Xo(r)||Ni(r))&&(Zo(r).position==="fixed"||xb(r,t))}function k4(e,t,r){var o=ha(t),s=pa(t),a=r==="fixed",i=Gs(e,!0,a,t),l={scrollLeft:0,scrollTop:0},c=va(0);function d(){c.x=Hu(s)}if(o||!o&&!a)if((Ki(t)!=="body"||Al(s))&&(l=hd(t)),o){var u=Gs(t,!0,a,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else s&&d();a&&!o&&s&&d();var m=!s||o||a?va(0):wb(s,l);return{x:i.left+l.scrollLeft-c.x-m.x,y:i.top+l.scrollTop-c.y-m.y,width:i.width,height:i.height}}function lf(e){return Zo(e).position==="static"}function Fm(e,t){if(!ha(e)||Zo(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return pa(e)===r&&(r=r.ownerDocument.body),r}function Vm(e,t){var r=Po(e);if(Wu(e))return r;if(!ha(e)){for(var o=ns(e);o&&!Ni(o);){if(Xo(o)&&!lf(o))return o;o=ns(o)}return r}for(var s=Fm(e,t);s&&h4(s)&&lf(s);)s=Fm(s,t);return s&&Ni(s)&&lf(s)&&!Gf(s)?r:s||function(a){for(var i=ns(a);ha(i)&&!Ni(i);){if(Gf(i))return i;if(Wu(i))return null;i=ns(i)}return null}(e)||r}var S4={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:r,offsetParent:o,strategy:s}=e,a=s==="fixed",i=pa(o),l=!!t&&Wu(t.floating);if(o===i||l&&a)return r;var c={scrollLeft:0,scrollTop:0},d=va(1),u=va(0),m=ha(o);if((m||!m&&!a)&&((Ki(o)!=="body"||Al(i))&&(c=hd(o)),ha(o))){var b=Gs(o);d=Ti(o),u.x=b.x+o.clientLeft,u.y=b.y+o.clientTop}var y=!i||m||a?va(0):wb(i,c);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+y.x,y:r.y*d.y-c.scrollTop*d.y+u.y+y.y}},getDocumentElement:pa,getClippingRect:function(e){var{element:t,boundary:r,rootBoundary:o,strategy:s}=e,a=r==="clippingAncestors"?Wu(t)?[]:function(d,u){var m=u.get(d);if(m)return m;for(var b=ql(d,[],!1).filter(f=>Xo(f)&&Ki(f)!=="body"),y=null,h=Zo(d).position==="fixed",j=h?ns(d):d;Xo(j)&&!Ni(j);){var v=Zo(j),p=Gf(j);p||v.position!=="fixed"||(y=null),(h?!p&&!y:!p&&v.position==="static"&&y&&x4.has(y.position)||Al(j)&&!p&&xb(d,j))?b=b.filter(f=>f!==j):y=v,j=ns(j)}return u.set(d,b),b}(t,this._c):[].concat(r),i=[...a,o],l=i[0],c=i.reduce((d,u)=>{var m=Um(t,u,s);return d.top=Ls(m.top,d.top),d.right=Fu(m.right,d.right),d.bottom=Fu(m.bottom,d.bottom),d.left=Ls(m.left,d.left),d},Um(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:Vm,getElementRects:function(){var e=jt(function*(t){var r=this.getOffsetParent||Vm,o=this.getDimensions,s=yield o(t.floating);return{reference:k4(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:r}=yb(e);return{width:t,height:r}},getScale:Ti,isElement:Xo,isRTL:function(e){return Zo(e).direction==="rtl"}};function Bm(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _4(e,t,r,o){o===void 0&&(o={});var{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=Wv(e),u=s||a?[...d?ql(d):[],...ql(t)]:[];u.forEach(v=>{s&&v.addEventListener("scroll",r,{passive:!0}),a&&v.addEventListener("resize",r)});var m,b=d&&l?function(v,p){var f,g=null,x=pa(v);function w(){var k;clearTimeout(f),(k=g)==null||k.disconnect(),g=null}return function k(O,A){O===void 0&&(O=!1),A===void 0&&(A=1),w();var R=v.getBoundingClientRect(),{left:ne,top:G,width:F,height:Z}=R;if(O||p(),F&&Z){var je={rootMargin:-au(G)+"px "+-au(x.clientWidth-(ne+F))+"px "+-au(x.clientHeight-(G+Z))+"px "+-au(ne)+"px",threshold:Ls(0,Fu(1,A))||1},Q=!0;try{g=new IntersectionObserver(we,Ie(Ie({},je),{},{root:x.ownerDocument}))}catch{g=new IntersectionObserver(we,je)}g.observe(v)}function we(Re){var Ee=Re[0].intersectionRatio;if(Ee!==A){if(!Q)return k();Ee?k(!1,Ee):f=setTimeout(()=>{k(!1,1e-7)},1e3)}Ee!==1||Bm(R,v.getBoundingClientRect())||k(),Q=!1}}(!0),w}(d,r):null,y=-1,h=null;i&&(h=new ResizeObserver(v=>{var[p]=v;p&&p.target===d&&h&&(h.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var f;(f=h)==null||f.observe(t)})),r()}),d&&!c&&h.observe(d),h.observe(t));var j=c?Gs(e):null;return c&&function v(){var p=Gs(e);j&&!Bm(j,p)&&r(),j=p,m=requestAnimationFrame(v)}(),r(),()=>{var v;u.forEach(p=>{s&&p.removeEventListener("scroll",r),a&&p.removeEventListener("resize",r)}),b?.(),(v=h)==null||v.disconnect(),h=null,c&&cancelAnimationFrame(m)}}var C4=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>jt(function*(){var r,o,{x:s,y:a,placement:i,middlewareData:l}=t,c=yield function(d,u){return Qf.apply(this,arguments)}(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:Ie(Ie({},c),{},{placement:i})}})()}},E4=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>jt(function*(){var{x:r,y:o,placement:s}=t,a=fd(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:g=>{var{x,y:w}=g;return{x,y:w}}}}=a,d=Ug(a,u2),u={x:r,y:o},m=yield mb(t,d),b=ts(Qs(s)),y=vb(b),h=u[y],j=u[b];if(i){var v=y==="y"?"bottom":"right";h=qm(h+m[y==="y"?"top":"left"],h,h-m[v])}if(l){var p=b==="y"?"bottom":"right";j=qm(j+m[b==="y"?"top":"left"],j,j-m[p])}var f=c.fn(Ie(Ie({},t),{},{[y]:h,[b]:j}));return Ie(Ie({},f),{},{data:{x:f.x-r,y:f.y-o,enabled:{[y]:i,[b]:l}}})})()}},O4=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>jt(function*(){var r,o,{placement:s,middlewareData:a,rects:i,initialPlacement:l,platform:c,elements:d}=t,u=fd(e,t),{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:y,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:j="none",flipAlignment:v=!0}=u,p=Ug(u,c2);if((r=a.arrow)!=null&&r.alignmentOffset)return{};var f=Qs(s),g=ts(l),x=Qs(l)===l,w=yield c.isRTL==null?void 0:c.isRTL(d.floating),k=y||(x||!v?[su(l)]:function(B){var L=su(B);return[Kf(B),L,Kf(L)]}(l)),O=j!=="none";!y&&O&&k.push(...c4(l,v,j,w));var A=[l,...k],R=yield mb(t,p),ne=[],G=((o=a.flip)==null?void 0:o.overflows)||[];if(m&&ne.push(R[f]),b){var F=function(B,L,le){le===void 0&&(le=!1);var T=vd(B),E=hb(B),M=pb(E),oe=E==="x"?T===(le?"end":"start")?"right":"left":T==="start"?"bottom":"top";return L.reference[M]>L.floating[M]&&(oe=su(oe)),[oe,su(oe)]}(s,i,w);ne.push(R[F[0]],R[F[1]])}if(G=[...G,{placement:s,overflows:ne}],!ne.every(B=>B<=0)){var Z,je,Q=(((Z=a.flip)==null?void 0:Z.index)||0)+1,we=A[Q];if(we&&(!(b==="alignment"&&g!==ts(we))||G.every(B=>ts(B.placement)!==g||B.overflows[0]>0)))return{data:{index:Q,overflows:G},reset:{placement:we}};var Re=(je=G.filter(B=>B.overflows[0]<=0).sort((B,L)=>B.overflows[1]-L.overflows[1])[0])==null?void 0:je.placement;if(!Re)switch(h){case"bestFit":var Ee,ce=(Ee=G.filter(B=>{if(O){var L=ts(B.placement);return L===g||L==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(L=>L>0).reduce((L,le)=>L+le,0)]).sort((B,L)=>B[1]-L[1])[0])==null?void 0:Ee[0];ce&&(Re=ce);break;case"initialPlacement":Re=l}if(s!==Re)return{reset:{placement:Re}}}return{}})()}};function $4(e){var t,r,o={autoUpdate:!0},s=e,a=c=>Ie(Ie(Ie({},o),e||{}),c||{}),i=c=>{t&&r&&(s=a(c),((d,u,m)=>{var b=new Map,y=Ie({platform:S4},m),h=Ie(Ie({},y.platform),{},{_c:b});return d4(d,u,Ie(Ie({},y),{},{platform:h}))})(t,r,s).then(d=>{var u;Object.assign(r.style,{position:d.strategy,left:"".concat(d.x,"px"),top:"".concat(d.y,"px")}),!((u=s)===null||u===void 0)&&u.onComputed&&s.onComputed(d)}))},l=c=>{Lo(c.subscribe(d=>{t===void 0?(t=d,i()):(Object.assign(t,d),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,d)=>{var u;r=c,s=a(d),setTimeout(()=>i(d),0),i(d);var m=()=>{u&&(u(),u=void 0)},b=function(){var{autoUpdate:y}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s||{};m(),y!==!1&&x0().then(()=>_4(t,r,()=>i(s),y===!0?{}:y))};return u=b(),{update(y){i(y),u=b(y)},destroy(){m()}}},i]}function P4(e){var{loadOptions:t,filterText:r,items:o,multiple:s,value:a,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:d,convertStringItemsToObjects:u,filterGroupedItems:m,label:b}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=u(o));var y=o.filter(h=>{var j=d(h[b],r,h);return j&&s&&a!=null&&a.length&&(j=!a.some(v=>!!c&&v[i]===h[i])),j});return l&&(y=m(y)),y}function M4(e){return kb.apply(this,arguments)}function kb(){return(kb=jt(function*(e){var{dispatch:t,loadOptions:r,convertStringItemsToObjects:o,filterText:s}=e,a=yield r(s).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!="object"&&(a=o(a)),t("loaded",{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}Ot(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var R4=ms(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);Ot(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var N4=ms(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function cf(e){W(e,N4())}Ot(`
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
`);var T4=ms('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');Ot(`
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
`);var A4=he('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),q4=he('<div class="empty svelte-1ul7oo4">No options</div>'),z4=he('<div role="none"><!> <!> <!></div>'),I4=he('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),D4=he('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),L4=he('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),U4=he("<div><!></div>"),F4=he('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),V4=he('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),B4=he('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),W4=he('<input type="hidden" class="svelte-1ul7oo4"/>'),H4=he('<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>'),K4=he('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function As(e,t){var r=function(ee){var ue={};for(var $e in ee.children&&(ue.default=!0),ee.$$slots)ue[$e]=!0;return ue}(t);pt(t,!1);var o,s=K(),a=K(),i=K(),l=K(),c=K(),d=K(),u=K(),m=K(),b=K(),y=I2(),h=_(t,"justValue",12,null),j=_(t,"filter",8,P4),v=_(t,"getItems",8,M4),p=_(t,"id",8,null),f=_(t,"name",8,null),g=_(t,"container",12,void 0),x=_(t,"input",12,void 0),w=_(t,"multiple",8,!1),k=_(t,"multiFullItemClearable",8,!1),O=_(t,"disabled",8,!1),A=_(t,"focused",12,!1),R=_(t,"value",12,null),ne=_(t,"filterText",12,""),G=_(t,"placeholder",8,"Please select"),F=_(t,"placeholderAlwaysShow",8,!1),Z=_(t,"items",12,null),je=_(t,"label",8,"label"),Q=_(t,"itemFilter",8,(ee,ue,$e)=>"".concat(ee).toLowerCase().includes(ue.toLowerCase())),we=_(t,"groupBy",8,void 0),Re=_(t,"groupFilter",8,ee=>ee),Ee=_(t,"groupHeaderSelectable",8,!1),ce=_(t,"itemId",8,"value"),B=_(t,"loadOptions",8,void 0),L=_(t,"containerStyles",8,""),le=_(t,"hasError",8,!1),T=_(t,"filterSelectedItems",8,!0),E=_(t,"required",8,!1),M=_(t,"closeListOnChange",8,!0),oe=_(t,"clearFilterTextOnBlur",8,!0),Oe=_(t,"createGroupHeaderItem",8,(ee,ue)=>({value:ee,[je()]:ee})),ae=()=>n(u),J=_(t,"searchable",8,!0),be=_(t,"inputStyles",8,""),P=_(t,"clearable",8,!0),I=_(t,"loading",12,!1),D=_(t,"listOpen",12,!1),ve=_(t,"debounce",8,function(ee){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(ee,ue)}),Y=_(t,"debounceWait",8,300),V=_(t,"hideEmptyState",8,!1),Qe=_(t,"inputAttributes",24,()=>({})),rt=_(t,"listAutoWidth",8,!0),Ce=_(t,"showChevron",8,!1),lt=_(t,"listOffset",8,5),Ae=_(t,"hoverItemIndex",12,0),We=_(t,"floatingConfig",24,()=>({})),it=_(t,"class",8,""),Ue=K(),yt=K(),$=K(),N=K(),U=K();function X(ee){return ee.map((ue,$e)=>({index:$e,value:ue,label:"".concat(ue)}))}function me(ee){var ue=[],$e={};ee.forEach(st=>{var ct=we()(st);ue.includes(ct)||(ue.push(ct),$e[ct]=[],ct&&$e[ct].push(Object.assign(Oe()(ct,st),{id:ct,groupHeader:!0,selectable:Ee()}))),$e[ct].push(Object.assign({groupItem:!!ct},st))});var Fe=[];return Re()(ue).forEach(st=>{$e[st]&&Fe.push(...$e[st])}),Fe}function Ne(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,ue=arguments.length>1?arguments[1]:void 0;Ae(ee<0?0:ee),!ue&&we()&&n(u)[Ae()]&&!n(u)[Ae()].selectable&&At(1)}function qe(){var ee=!0;if(R()){var ue=[],$e=[];R().forEach(Fe=>{ue.includes(Fe[ce()])?ee=!1:(ue.push(Fe[ce()]),$e.push(Fe))}),ee||R($e)}return ee}function pe(ee){var ue=ee?ee[ce()]:R()[ce()];return Z().find($e=>$e[ce()]===ue)}function ge(ee){return ft.apply(this,arguments)}function ft(){return(ft=jt(function*(ee){var ue=R()[ee];R().length===1?R(void 0):R(R().filter($e=>$e!==ue)),y("clear",ue)})).apply(this,arguments)}function at(ee){if(A())switch(ee.stopPropagation(),ee.key){case"Escape":ee.preventDefault(),Dt();break;case"Enter":if(ee.preventDefault(),D()){if(n(u).length===0)break;var ue=n(u)[Ae()];if(R()&&!w()&&R()[ce()]===ue[ce()]){Dt();break}tt(n(u)[Ae()])}break;case"ArrowDown":ee.preventDefault(),D()?At(1):(D(!0),S(Ue,void 0));break;case"ArrowUp":ee.preventDefault(),D()?At(-1):(D(!0),S(Ue,void 0));break;case"Tab":if(D()&&A()){if(n(u).length===0||R()&&R()[ce()]===n(u)[Ae()][ce()])return Dt();ee.preventDefault(),tt(n(u)[Ae()]),Dt()}break;case"Backspace":if(!w()||ne().length>0)return;if(w()&&R()&&R().length>0){if(ge(n(Ue)!==void 0?n(Ue):R().length-1),n(Ue)===0||n(Ue)===void 0)break;S(Ue,R().length>n(Ue)?n(Ue)-1:void 0)}break;case"ArrowLeft":if(!R()||!w()||ne().length>0)return;n(Ue)===void 0?S(Ue,R().length-1):R().length>n(Ue)&&n(Ue)!==0&&S(Ue,n(Ue)-1);break;case"ArrowRight":if(!R()||!w()||ne().length>0||n(Ue)===void 0)return;n(Ue)===R().length-1?S(Ue,void 0):n(Ue)<R().length-1&&S(Ue,n(Ue)+1)}}function Ke(ee){var ue,$e;A()&&x()===((ue=document)===null||ue===void 0?void 0:ue.activeElement)||(ee&&y("focus",ee),($e=x())===null||$e===void 0||$e.focus(),A(!0))}function Ge(ee){return qt.apply(this,arguments)}function qt(){return(qt=jt(function*(ee){var ue;$t||(D()||A())&&(y("blur",ee),Dt(),A(!1),S(Ue,void 0),(ue=x())===null||ue===void 0||ue.blur())})).apply(this,arguments)}function _n(){if(!O())return ne().length>0?D(!0):void D(!D())}function $n(){y("clear",R()),R(void 0),Dt(),Ke()}function Dt(){oe()&&ne(""),D(!1)}D2(jt(function*(){S(yt,R()),S($,ne()),S(N,w())})),no(()=>{D()&&A(!0),A()&&x()&&x().focus()});var pn=_(t,"ariaValues",8,ee=>"Option ".concat(ee,", selected.")),Vt=_(t,"ariaListOpen",8,(ee,ue)=>"You are currently focused on option ".concat(ee,". There are ").concat(ue," results available.")),Gt=_(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),fn,bt=K(null);function on(){clearTimeout(fn),fn=setTimeout(()=>{$t=!1},100)}Lo(()=>{var ee;(ee=n(bt))===null||ee===void 0||ee.remove()});var $t=!1;function tt(ee){ee&&ee.selectable!==!1&&function(ue){if(ue){ne("");var $e=Object.assign({},ue);if($e.groupHeader&&!$e.selectable)return;R(w()?R()?R().concat([$e]):[$e]:R($e)),setTimeout(()=>{M()&&Dt(),S(Ue,void 0),y("change",R()),y("select",ue)})}}(ee)}function Bt(ee){$t||Ae(ee)}function At(ee){if(n(u).filter($e=>!Object.hasOwn($e,"selectable")||$e.selectable===!0).length===0)return Ae(0);ee>0&&Ae()===n(u).length-1?Ae(0):ee<0&&Ae()===0?Ae(n(u).length-1):Ae(Ae()+ee);var ue=n(u)[Ae()];ue&&ue.selectable===!1&&(ee!==1&&ee!==-1||At(ee))}function Pn(ee,ue,$e){if(!w())return ue&&ue[$e]===ee[$e]}var Bn=cr,Fn=cr;function cr(ee){return{update(ue){ue.scroll&&(on(),ee.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Jn=K({strategy:"absolute",placement:"bottom-start",middleware:[C4(lt()),O4(),E4()],autoUpdate:!1}),[ar,pr,tr]=$4(n(Jn)),Cr=K(!0);fe(()=>(C(Z()),C(R())),()=>{Z(),R()&&function(){if(typeof R()=="string"){var ee=(Z()||[]).find(ue=>ue[ce()]===R());R(ee||{[ce()]:R(),label:R()})}else w()&&Array.isArray(R())&&R().length>0&&R(R().map(ue=>typeof ue=="string"?{value:ue,label:ue}:ue))}()}),fe(()=>(C(Qe()),C(J())),()=>{!Qe()&&J()||(S(U,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},Qe())),p()&&Oo(U,n(U).id=p()),J()||Oo(U,n(U).readonly=!0))}),fe(()=>C(w()),()=>{w()&&R()&&(Array.isArray(R())?R([...R()]):R([R()]))}),fe(()=>(n(N),C(w())),()=>{n(N)&&!w()&&R()&&R(null)}),fe(()=>(C(w()),C(R())),()=>{w()&&R()&&R().length>1&&qe()}),fe(()=>C(R()),()=>{R()&&(w()?JSON.stringify(R())!==JSON.stringify(n(yt))&&qe()&&y("input",R()):n(yt)&&JSON.stringify(R()[ce()])===JSON.stringify(n(yt)[ce()])||y("input",R()))}),fe(()=>(C(R()),C(w()),n(yt)),()=>{!R()&&w()&&n(yt)&&y("input",R())}),fe(()=>(C(A()),C(x())),()=>{!A()&&x()&&Dt()}),fe(()=>(C(ne()),n($)),()=>{ne()!==n($)&&(B()||ne().length!==0)&&(B()?ve()(jt(function*(){I(!0);var ee=yield v()({dispatch:y,loadOptions:B(),convertStringItemsToObjects:X,filterText:ne()});ee?(I(ee.loading),D(D()?ee.listOpen:ne().length>0),A(D()&&ee.focused),Z(we()?me(ee.filteredItems):ee.filteredItems)):(I(!1),A(!0),D(!0))}),Y()):(D(!0),w()&&S(Ue,void 0)))}),fe(()=>(C(j()),C(B()),C(ne()),C(Z()),C(w()),C(R()),C(ce()),C(we()),C(je()),C(T()),C(Q())),()=>{S(u,j()({loadOptions:B(),filterText:ne(),items:Z(),multiple:w(),value:R(),itemId:ce(),groupBy:we(),label:je(),filterSelectedItems:T(),itemFilter:Q(),convertStringItemsToObjects:X,filterGroupedItems:me}))}),fe(()=>(C(w()),C(D()),C(R()),n(u)),()=>{!w()&&D()&&R()&&n(u)&&Ne(n(u).findIndex(ee=>ee[ce()]===R()[ce()]),!0)}),fe(()=>(C(D()),C(w())),()=>{D()&&w()&&Ae(0)}),fe(()=>C(ne()),()=>{ne()&&Ae(0)}),fe(()=>C(Ae()),()=>{var ee;ee=Ae(),y("hoverItem",ee)}),fe(()=>(C(w()),C(R())),()=>{S(s,w()?R()&&R().length>0:R())}),fe(()=>(n(s),C(ne())),()=>{S(a,n(s)&&ne().length>0)}),fe(()=>(n(s),C(P()),C(O()),C(I())),()=>{S(i,n(s)&&P()&&!O()&&!I())}),fe(()=>(C(F()),C(w()),C(G()),C(R())),()=>{var ee;S(l,F()&&w()||w()&&((ee=R())===null||ee===void 0?void 0:ee.length)===0?G():R()?"":G())}),fe(()=>(C(R()),C(w())),()=>{var ee,ue;S(c,R()?(ee=w(),ue=void 0,ue=ee&&R().length>0?R().map($e=>$e[je()]).join(", "):R()[je()],pn()(ue)):"")}),fe(()=>(n(u),C(Ae()),C(A()),C(D())),()=>{S(d,function(){if(!n(u)||n(u).length===0)return"";var ee=n(u)[Ae()];if(D()&&ee){var ue=n(u)?n(u).length:0;return Vt()(ee[je()],ue)}return Gt()()}((n(u),Ae(),A(),D())))}),fe(()=>C(Z()),()=>{(function(ee){ee&&ee.length!==0&&!ee.some(ue=>typeof ue!="object")&&R()&&(w()?!R().some(ue=>!ue||!ue[ce()]):R()[ce()])&&(Array.isArray(R())?R(R().map(ue=>pe(ue)||ue)):R(pe()||R()))})(Z())}),fe(()=>(C(w()),C(R()),C(ce())),()=>{h((w(),R(),ce(),w()?R()?R().map(ee=>ee[ce()]):null:R()?R()[ce()]:R()))}),fe(()=>(C(w()),n(yt),C(R())),()=>{w()||!n(yt)||R()||y("input",R())}),fe(()=>(C(D()),n(u),C(w()),C(R())),()=>{D()&&n(u)&&!w()&&!R()&&Ne()}),fe(()=>n(u),()=>{(function(ee){D()&&y("filter",ee)})(n(u))}),fe(()=>(C(g()),C(We()),n(Jn)),()=>{g()&&We()&&tr(Object.assign(n(Jn),We()))}),fe(()=>n(bt),()=>{S(m,!!n(bt))}),fe(()=>(n(bt),C(D())),()=>{(function(ee,ue){if(!ee||!ue)return S(Cr,!0);setTimeout(()=>{S(Cr,!1)},0)})(n(bt),D())}),fe(()=>(C(D()),C(g()),n(bt)),()=>{D()&&g()&&n(bt)&&function(){var{width:ee}=g().getBoundingClientRect();Oo(bt,n(bt).style.width=rt()?ee+"px":"auto")}()}),fe(()=>C(Ae()),()=>{S(b,Ae())}),fe(()=>(C(x()),C(D()),C(A())),()=>{x()&&D()&&!A()&&Ke()}),fe(()=>(C(g()),C(We())),()=>{var ee;g()&&((ee=We())===null||ee===void 0?void 0:ee.autoUpdate)===void 0&&Oo(Jn,n(Jn).autoUpdate=!0)}),Sn();var hr={getFilteredItems:ae,handleClear:$n};Nt();var wr,nr=K4();Te("click",Ra,function(ee){var ue;D()||A()||!g()||g().contains(ee.target)||(ue=n(bt))!==null&&ue!==void 0&&ue.contains(ee.target)||Ge()}),Te("keydown",Ra,at);var Pe=H(nr),zt=ee=>{var ue,$e=z4(),Fe=H($e),st=Mt=>{var Zt=Ut();dr(nt(Zt),t,"list-prepend",{},null),W(Mt,Zt)};ye(Fe,Mt=>{te(()=>r["list-prepend"])&&Mt(st)});var ct=ie(Fe,2),vt=Mt=>{var Zt=Ut();dr(nt(Zt),t,"list",{get filteredItems(){return n(u)}},null),W(Mt,Zt)},Dn=Mt=>{var Zt=Ut(),Tr=nt(Zt),wt=Yt=>{var hn=Ut();vr(nt(hn),1,()=>n(u),_r,(Wn,Rn,_t)=>{var Er,gr=A4(),Ar=H(gr);dr(H(Ar),t,"item",{get item(){return n(Rn)},index:_t},Cn=>{var Nn=Br();De(()=>mt(Nn,(n(Rn),C(je()),te(()=>{var kr;return(kr=n(Rn))===null||kr===void 0?void 0:kr[je()]})))),W(Cn,Nn)}),ao(Ar,(Cn,Nn)=>Bn?.(Cn),()=>({scroll:Pn(n(Rn),R(),ce()),listDom:n(m)})),ao(Ar,(Cn,Nn)=>Fn?.(Cn),()=>({scroll:n(b)===_t,listDom:n(m)})),De(Cn=>Er=Rt(Ar,1,"item svelte-1ul7oo4",null,Er,Cn),[()=>{var Cn,Nn;return{"list-group-title":n(Rn).groupHeader,active:Pn(n(Rn),R(),ce()),first:(Nn=_t,Nn===0),hover:Ae()===_t,"group-item":n(Rn).groupItem,"not-selectable":((Cn=n(Rn))===null||Cn===void 0?void 0:Cn.selectable)===!1}}]),Te("mouseover",gr,()=>Bt(_t)),Te("focus",gr,()=>Bt(_t)),Te("click",gr,ka(()=>function(Cn){var{item:Nn,i:kr}=Cn;if(Nn?.selectable!==!1)return R()&&!w()&&R()[ce()]===Nn[ce()]?Dt():void(function(z){return z.groupHeader&&z.selectable||z.selectable||!z.hasOwnProperty("selectable")}(Nn)&&(Ae(kr),tt(Nn)))}({item:n(Rn),i:_t}))),Te("keydown",gr,Wa(ka(function(Cn){yl.call(this,t,Cn)}))),W(Wn,gr)}),W(Yt,hn)},bn=Yt=>{var hn=Ut(),Wn=nt(hn),Rn=_t=>{var Er=Ut();dr(nt(Er),t,"empty",{},gr=>{W(gr,q4())}),W(_t,Er)};ye(Wn,_t=>{V()||_t(Rn)},!0),W(Yt,hn)};ye(Tr,Yt=>{n(u),te(()=>n(u).length>0)?Yt(wt):Yt(bn,!1)},!0),W(Mt,Zt)};ye(ct,Mt=>{te(()=>r.list)?Mt(vt):Mt(Dn,!1)});var Jt=ie(ct,2),an=Mt=>{var Zt=Ut();dr(nt(Zt),t,"list-append",{},null),W(Mt,Zt)};ye(Jt,Mt=>{te(()=>r["list-append"])&&Mt(an)}),ao($e,Mt=>pr?.(Mt)),er($e,Mt=>S(bt,Mt),()=>n(bt)),Gr(()=>Te("scroll",$e,on)),Gr(()=>Te("pointerup",$e,Wa(ka(function(Mt){yl.call(this,t,Mt)})))),Gr(()=>Te("mousedown",$e,Wa(ka(function(Mt){yl.call(this,t,Mt)})))),De(Mt=>ue=Rt($e,1,"svelte-select-list svelte-1ul7oo4",null,ue,Mt),[()=>({prefloat:n(Cr)})]),W(ee,$e)};ye(Pe,ee=>{D()&&ee(zt)});var xn=ie(Pe,2),In=H(xn),ur=ee=>{var ue=I4(),$e=nt(ue),Fe=H($e),st=H(ie($e,2));De(()=>{mt(Fe,n(c)),mt(st,n(d))}),W(ee,ue)};ye(In,ee=>{A()&&ee(ur)});var Nr=ie(xn,2);dr(H(Nr),t,"prepend",{},null);var Kt=ie(Nr,2),xr=H(Kt),Wr=ee=>{var ue=Ut(),$e=nt(ue),Fe=ct=>{var vt=Ut();vr(nt(vt),1,R,_r,(Dn,Jt,an)=>{var Mt,Zt=L4(),Tr=H(Zt);dr(H(Tr),t,"selection",{get selection(){return n(Jt)},index:an},Yt=>{var hn=Br();De(()=>mt(hn,(n(Jt),C(je()),te(()=>n(Jt)[je()])))),W(Yt,hn)});var wt=ie(Tr,2),bn=Yt=>{var hn=D4();dr(H(hn),t,"multi-clear-icon",{},Wn=>{cf(Wn)}),Te("pointerup",hn,Wa(ka(()=>ge(an)))),W(Yt,hn)};ye(wt,Yt=>{O()||k()||!cf||Yt(bn)}),De(Yt=>Mt=Rt(Zt,1,"multi-item svelte-1ul7oo4",null,Mt,Yt),[()=>({active:n(Ue)===an,disabled:O()})]),Te("click",Zt,Wa(()=>k()?ge(an):{})),Te("keydown",Zt,Wa(ka(function(Yt){yl.call(this,t,Yt)}))),W(Dn,Zt)}),W(ct,vt)},st=ct=>{var vt,Dn=U4();dr(H(Dn),t,"selection",{get selection(){return R()}},Jt=>{var an=Br();De(()=>mt(an,(C(R()),C(je()),te(()=>R()[je()])))),W(Jt,an)}),De(Jt=>vt=Rt(Dn,1,"selected-item svelte-1ul7oo4",null,vt,Jt),[()=>({"hide-selected-item":n(a)})]),W(ct,Dn)};ye($e,ct=>{w()?ct(Fe):ct(st,!1)}),W(ee,ue)};ye(xr,ee=>{n(s)&&ee(Wr)});var rr=ie(xr,2);mu(rr,()=>Ie(Ie({readOnly:!J()},n(U)),{},{placeholder:n(l),style:be(),disabled:O()}),void 0,void 0,"svelte-1ul7oo4",!0),er(rr,ee=>x(ee),()=>x());var Fr=ie(Kt,2),Mn=H(Fr),Xt=ee=>{var ue=F4();dr(H(ue),t,"loading-icon",{},$e=>{(function(Fe){W(Fe,T4())})($e)}),W(ee,ue)};ye(Mn,ee=>{I()&&ee(Xt)});var Tt=ie(Mn,2),Tn=ee=>{var ue=V4();dr(H(ue),t,"clear-icon",{},$e=>{cf($e)}),Te("click",ue,$n),W(ee,ue)};ye(Tt,ee=>{n(i)&&ee(Tn)});var mr=ie(Tt,2),sr=ee=>{var ue=B4();dr(H(ue),t,"chevron-icon",{get listOpen(){return D()}},$e=>{(function(Fe){W(Fe,R4())})($e)}),W(ee,ue)};ye(mr,ee=>{Ce()&&ee(sr)});var se=ie(Fr,2);dr(se,t,"input-hidden",{get value(){return R()}},ee=>{var ue=W4();De($e=>{kn(ue,"name",f()),Hs(ue,$e)},[()=>(C(R()),te(()=>R()?JSON.stringify(R()):null))]),W(ee,ue)});var ke=ie(se,2),ze=ee=>{var ue=Ut();dr(nt(ue),t,"required",{get value(){return R()}},$e=>{W($e,H4())}),W(ee,ue)};return ye(ke,ee=>{C(E()),C(R()),te(()=>E()&&(!R()||R().length===0))&&ee(ze)}),Gr(()=>Te("pointerup",nr,Wa(_n))),er(nr,ee=>g(ee),()=>g()),ao(nr,ee=>ar?.(ee)),De(ee=>{var ue;wr=Rt(nr,1,"svelte-select ".concat((ue=it())!==null&&ue!==void 0?ue:""),"svelte-1ul7oo4",wr,ee),Io(nr,L())},[()=>({multi:w(),disabled:O(),focused:A(),"list-open":D(),"show-chevron":Ce(),error:le()})]),Te("keydown",rr,at),Te("blur",rr,Ge),Te("focus",rr,Ke),Nu(rr,ne),W(e,nr),St(t,"getFilteredItems",ae),St(t,"handleClear",$n),ht(hr)}Ot(`/* over all fonts, sizes, and colors */
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
}`);var J4=he('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function Q4(e,t){var r,o,s,a,i;pt(t,!1);var l=K(void 0,!0),c=K(void 0,!0),d=K(void 0,!0),u=K(void 0,!0),m=K(void 0,!0),b=K(void 0,!0),y=Ur("jsoneditor:TransformWizard"),h=_(t,"json",9),j=_(t,"queryOptions",29,()=>({})),v=_(t,"onChange",9),p=["==","!=","<","<=",">",">="].map(T=>({value:T,label:T})),f=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],g=K((r=j())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?Qa(j().filter.path):void 0,!0),x=K((o=p.find(T=>{var E;return T.value===((E=j().filter)===null||E===void 0?void 0:E.relation)}))!==null&&o!==void 0?o:p[0],!0),w=K(((s=j())===null||s===void 0||(s=s.filter)===null||s===void 0?void 0:s.value)||"",!0),k=K((a=j())!==null&&a!==void 0&&(a=a.sort)!==null&&a!==void 0&&a.path?Qa(j().sort.path):void 0,!0),O=K((i=f.find(T=>{var E;return T.value===((E=j().sort)===null||E===void 0?void 0:E.direction)}))!==null&&i!==void 0?i:f[0],!0);fe(()=>C(h()),()=>{S(l,Array.isArray(h()))}),fe(()=>(n(l),C(h())),()=>{S(c,n(l)?zf(h()):[])}),fe(()=>(n(l),C(h())),()=>{S(d,n(l)?zf(h(),!0):[])}),fe(()=>(n(c),Qa),()=>{S(u,n(c).map(Qa))}),fe(()=>(n(d),Qa),()=>{S(m,n(d)?n(d).map(Qa):[])}),fe(()=>(C(j()),n(m),Ft),()=>{var T;S(b,(T=j())!==null&&T!==void 0&&(T=T.projection)!==null&&T!==void 0&&T.paths&&n(m)?j().projection.paths.map(E=>n(m).find(M=>Ft(M.value,E))).filter(E=>!!E):void 0)}),fe(()=>n(g),()=>{var T,E,M;E=(T=n(g))===null||T===void 0?void 0:T.value,Ft((M=j())===null||M===void 0||(M=M.filter)===null||M===void 0?void 0:M.path,E)||(y("changeFilterPath",E),j(fo(j(),["filter","path"],E,!0)),v()(j()))}),fe(()=>n(x),()=>{var T,E,M;E=(T=n(x))===null||T===void 0?void 0:T.value,Ft((M=j())===null||M===void 0||(M=M.filter)===null||M===void 0?void 0:M.relation,E)||(y("changeFilterRelation",E),j(fo(j(),["filter","relation"],E,!0)),v()(j()))}),fe(()=>n(w),()=>{var T,E;T=n(w),Ft((E=j())===null||E===void 0||(E=E.filter)===null||E===void 0?void 0:E.value,T)||(y("changeFilterValue",T),j(fo(j(),["filter","value"],T,!0)),v()(j()))}),fe(()=>n(k),()=>{var T,E,M;E=(T=n(k))===null||T===void 0?void 0:T.value,Ft((M=j())===null||M===void 0||(M=M.sort)===null||M===void 0?void 0:M.path,E)||(y("changeSortPath",E),j(fo(j(),["sort","path"],E,!0)),v()(j()))}),fe(()=>n(O),()=>{var T,E,M;E=(T=n(O))===null||T===void 0?void 0:T.value,Ft((M=j())===null||M===void 0||(M=M.sort)===null||M===void 0?void 0:M.direction,E)||(y("changeSortDirection",E),j(fo(j(),["sort","direction"],E,!0)),v()(j()))}),fe(()=>n(b),()=>{(function(T){var E;Ft((E=j())===null||E===void 0||(E=E.projection)===null||E===void 0?void 0:E.paths,T)||(y("changeProjectionPaths",T),j(fo(j(),["projection","paths"],T,!0)),v()(j()))})(n(b)?n(b).map(T=>T.value):void 0)}),Sn(),Nt(!0);var A=J4(),R=H(A),ne=H(R),G=ie(H(ne)),F=H(G),Z=H(F);As(Z,{class:"jse-filter-path",showChevron:!0,get items(){return n(u)},get value(){return n(g)},set value(T){S(g,T)},$$legacy:!0});var je=ie(Z,2);As(je,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return p},get value(){return n(x)},set value(T){S(x,T)},$$legacy:!0});var Q=ie(je,2),we=ie(ne),Re=ie(H(we)),Ee=H(Re),ce=H(Ee);As(ce,{class:"jse-sort-path",showChevron:!0,get items(){return n(u)},get value(){return n(k)},set value(T){S(k,T)},$$legacy:!0}),As(ie(ce,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return f},get value(){return n(O)},set value(T){S(O,T)},$$legacy:!0});var B=ie(we),L=ie(H(B)),le=H(L);As(H(le),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(m)},get value(){return n(b)},set value(T){S(b,T)},$$legacy:!0}),Nu(Q,()=>n(w),T=>S(w,T)),W(e,A),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var G4=he('<button type="button"><!> </button>'),Y4=he('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function X4(e,t){pt(t,!1);var r=_(t,"queryLanguages",8),o=_(t,"queryLanguageId",12),s=_(t,"onChangeQueryLanguage",8);Nt();var a=Y4();vr(H(a),5,r,_r,(i,l)=>{var c,d=G4(),u=H(d),m=h=>{rn(h,{get data(){return Eg}})},b=h=>{rn(h,{get data(){return Og}})};ye(u,h=>{n(l),C(o()),te(()=>n(l).id===o())?h(m):h(b,!1)});var y=ie(u);De(h=>{var j;c=Rt(d,1,"jse-query-language svelte-jrd4q2",null,c,h),kn(d,"title",(n(l),te(()=>"Select ".concat(n(l).name," as query language")))),mt(y," ".concat((n(l),(j=te(()=>n(l).name))!==null&&j!==void 0?j:"")))},[()=>({selected:n(l).id===o()})]),Te("click",d,()=>{return h=n(l).id,o(h),void s()(h);var h}),W(i,d)}),W(e,a),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Z4=he('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),e3=he('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function Ku(e,t){pt(t,!1);var r=_(t,"title",9,"Modal"),o=_(t,"fullScreenButton",9,!1),s=_(t,"fullscreen",13,!1),a=_(t,"onClose",9,void 0);Nt(!0);var i=e3(),l=H(i),c=H(l),d=ie(l,2);dr(d,t,"actions",{},null);var u=ie(d,2),m=y=>{var h=Z4(),j=H(h),v=ot(()=>s()?aw:Mw);rn(j,{get data(){return n(v)}}),Te("click",h,()=>s(!s())),W(y,h)};ye(u,y=>{o()&&y(m)});var b=ie(u,2);rn(H(b),{get data(){return ed}}),De(()=>mt(c,r())),Te("click",b,()=>{var y;return(y=a())===null||y===void 0?void 0:y()}),W(e,i),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var t3=he('<button slot="actions" type="button" title="Select a query language"><!></button>'),uf=Ur("jsoneditor:AutoScrollHandler");function Wm(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function s(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function a(l){r&&l===t||(i(),uf("startAutoScroll",l),t=l,r=setInterval(s,50))}function i(){r&&(uf("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return uf("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:d,bottom:u}=e.getBoundingClientRect();c<d?a(-o(d-c)):c>u?a(o(c-u)):i()}},onDragEnd:function(){i()}}}var n3=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,Sb=()=>{var e,t,r,o,s,a,i,l,c,d,u,m,b;function y(v){return v.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function h(v){e.scrollTo?e.scrollTo(e.scrollLeft,v):e.scrollTop=v}function j(v){d||(d=v),h(a(u=v-d,r,l,c)),b=!0,u<c?requestAnimationFrame(j):function(){h(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof m=="function"&&m(),d=0,b=!1}()}return function(v){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,s=p.offset||0,m=p.callback,a=p.easing||n3,i=p.a11y||!1,typeof p.container){case"object":e=p.container;break;case"string":e=document.querySelector(p.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof v){case"number":t=void 0,i=!1,o=r+v;break;case"object":o=y(t=v);break;case"string":t=document.querySelector(v),o=y(t)}switch(l=o-r+s,typeof p.duration){case"number":c=p.duration;break;case"function":c=p.duration(l)}b?d=0:requestAnimationFrame(j)}};function Ci(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var bi=Ur("validation"),r3={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Hm(e,t,r,o){return Lv(e,t,r,o,r3)}function _b(e,t,r,o){if(bi("validateJSON"),!t)return[];if(r!==o){var s=r.stringify(e);return t(s!==void 0?o.parse(s):void 0)}return t(e)}function o3(e,t,r,o){if(bi("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:Go.info}]};if(e.length!==0)try{var s=Ci(()=>r.parse(e),c=>bi("validate: parsed json in ".concat(c," ms")));if(!t)return;var a=r===o?s:Ci(()=>o.parse(e),c=>bi("validate: parsed json with the validationParser in ".concat(c," ms"))),i=Ci(()=>t(a),c=>bi("validate: validated json in ".concat(c," ms")));return vn(i)?void 0:{validationErrors:i}}catch(c){var l=Ci(()=>function(d,u){if(d.length>Rk)return!1;try{return u.parse(ca(d)),!0}catch{return!1}}(e,r),d=>bi("validate: checked whether repairable in ".concat(d," ms")));return{parseError:Fi(e,c.message||c.toString()),isRepairable:l}}}var iu=Ur("jsoneditor:FocusTracker");function Hv(e){var t,{onMount:r,onDestroy:o,getWindow:s,hasFocus:a,onFocus:i,onBlur:l}=e,c=!1;function d(){var m=a();m&&(clearTimeout(t),c||(iu("focus"),i(),c=m))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(iu("blur"),c=!1,l())}))}r(()=>{iu("mount FocusTracker");var m=s();m&&(m.addEventListener("focusin",d,!0),m.addEventListener("focusout",u,!0))}),o(()=>{iu("destroy FocusTracker");var m=s();m&&(m.removeEventListener("focusin",d,!0),m.removeEventListener("focusout",u,!0))})}Ot(`/* over all fonts, sizes, and colors */
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
}`);var a3=he('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),s3=he('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function Mo(e,t){pt(t,!1);var r=_(t,"type",9,"success"),o=_(t,"icon",9,void 0),s=_(t,"message",9,void 0),a=_(t,"actions",25,()=>[]),i=_(t,"onClick",9,void 0),l=_(t,"onClose",9,void 0);l()&&Lo(l()),Nt(!0);var c,d=s3(),u=H(d),m=H(u),b=H(m),y=j=>{rn(j,{get data(){return o()}})};ye(b,j=>{o()&&j(y)});var h=ie(b);vr(ie(u,2),5,a,_r,(j,v)=>{var p=a3(),f=H(p),g=w=>{rn(w,{get data(){return n(v),te(()=>n(v).icon)}})};ye(f,w=>{n(v),te(()=>n(v).icon)&&w(g)});var x=ie(f);De(()=>{var w;kn(p,"title",(n(v),te(()=>n(v).title))),p.disabled=(n(v),te(()=>n(v).disabled)),mt(x," ".concat((n(v),(w=te(()=>n(v).text))!==null&&w!==void 0?w:"")))}),Te("click",p,()=>{n(v).onClick&&n(v).onClick()}),Te("mousedown",p,()=>{n(v).onMouseDown&&n(v).onMouseDown()}),W(j,p)}),De(j=>{var v,p;Rt(d,1,"jse-message jse-".concat((v=r())!==null&&v!==void 0?v:""),"svelte-cbvd26"),c=Rt(u,1,"jse-text svelte-cbvd26",null,c,j),mt(h," ".concat((p=s())!==null&&p!==void 0?p:""))},[()=>({"jse-clickable":!!i()})]),Te("click",u,function(){i()&&i()()}),W(e,d),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var i3=he('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),l3=he('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),c3=he('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),u3=he('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),d3=he('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),f3=he('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function Kv(e,t){pt(t,!1);var r=K(void 0,!0),o=_(t,"validationErrors",9),s=_(t,"selectError",9),a=K(!0,!0);function i(){S(a,!1)}function l(){S(a,!0)}fe(()=>C(o()),()=>{S(r,o().length)}),Sn(),Nt(!0);var c=Ut(),d=nt(c),u=m=>{var b=f3(),y=H(b),h=v=>{var p=u3(),f=H(p),g=H(f);vr(g,1,()=>(C(Tu),C(o()),C(tu),te(()=>Tu(o(),tu))),_r,(k,O,A)=>{var R=l3(),ne=H(R);rn(H(ne),{get data(){return Us}});var G=ie(ne),F=H(G),Z=ie(G),je=H(Z),Q=H(ie(Z)),we=Re=>{var Ee=i3();rn(H(Ee),{get data(){return Cw}}),Te("click",Ee,ka(i)),W(Re,Ee)};ye(Q,Re=>{C(o()),te(()=>A===0&&o().length>1)&&Re(we)}),De(Re=>{var Ee;Rt(R,1,"jse-validation-".concat((n(O),(Ee=te(()=>n(O).severity))!==null&&Ee!==void 0?Ee:"")),"svelte-1342rh4"),mt(F,Re),mt(je,(n(O),te(()=>n(O).message)))},[()=>(C(go),n(O),te(()=>go(n(O).path)))]),Te("click",R,()=>{setTimeout(()=>s()(n(O)))}),W(k,R)});var x=ie(g),w=k=>{var O=c3(),A=ie(H(O),2),R=H(A);De(()=>mt(R,"(and ".concat(n(r)-tu," more errors)"))),W(k,O)};ye(x,k=>{n(r)>tu&&k(w)}),W(v,p)},j=v=>{var p=d3(),f=H(p),g=H(f),x=H(g);rn(H(x),{get data(){return Us}});var w=H(ie(x));rn(H(ie(w)),{get data(){return Mg}}),De(k=>{var O;Rt(g,1,"jse-validation-".concat(k??""),"svelte-1342rh4"),mt(w,"".concat((O=n(r))!==null&&O!==void 0?O:""," validation errors "))},[()=>(C(o()),te(()=>{return k=o(),[Go.error,Go.warning,Go.info].find(O=>k.some(A=>A.severity===O));var k}))]),Te("click",g,l),W(v,p)};ye(y,v=>{n(a)||n(r)===1?v(h):v(j,!1)}),W(m,b)};ye(d,m=>{C(vn),C(o()),te(()=>!vn(o()))&&m(u)}),W(e,c),ht()}function Ju(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}Ot(`/* over all fonts, sizes, and colors */
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
}`);var v3=he('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function zl(e,t){pt(t,!1);var r=_(t,"className",8,void 0),o=_(t,"fullscreen",8,!1),s=_(t,"onClose",8),a=K();function i(){s()()}no(()=>n(a).showModal()),Lo(()=>n(a).close()),Nt();var l,c=v3(),d=H(c);dr(H(d),t,"default",{},null),er(c,u=>S(a,u),()=>n(a)),Gr(()=>Te("close",c,i)),Gr(()=>{return Te("pointerdown",c,(u=i,function(){for(var m=arguments.length,b=new Array(m),y=0;y<m;y++)b[y]=arguments[y];b[0].target===this&&u?.apply(this,b)}));var u}),Gr(()=>Te("cancel",c,Wa(function(u){yl.call(this,t,u)}))),ao(c,(u,m)=>Ju?.(u,m),()=>i),De((u,m)=>l=Rt(c,1,u,"svelte-2aoco4",l,m),[()=>cs((C(ea),C(r()),te(()=>ea("jse-modal",r())))),()=>({"jse-fullscreen":o()})]),W(e,c),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var p3=he('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function Cb(e,t){pt(t,!1);var r=_(t,"onClose",9),o=Rv()?"⌘":"Ctrl";Nt(!0),zl(e,{get onClose(){return r()},className:"jse-copy-paste",children:(s,a)=>{var i=p3(),l=nt(i);Ku(l,{title:"Copying and pasting",get onClose(){return r()}});var c=ie(l,2),d=ie(H(c),2),u=H(d),m=H(u),b=H(m),y=ie(u,2),h=H(y),j=H(h),v=H(ie(y,2)),p=H(v),f=H(ie(d,2));De(()=>{mt(b,"".concat(o,"+C")),mt(j,"".concat(o,"+X")),mt(p,"".concat(o,"+V"))}),Te("click",f,function(){for(var g,x=arguments.length,w=new Array(x),k=0;k<x;k++)w[k]=arguments[k];(g=r())===null||g===void 0||g.apply(this,w)}),W(s,i)},$$slots:{default:!0}}),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var h3=he('<div class="jse-separator svelte-3erbu0"></div>'),m3=he('<div class="jse-space svelte-3erbu0"></div>'),g3=he('<button type="button"><!> <!></button>'),b3=he('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function md(e,t){pt(t,!1);var r=_(t,"items",25,()=>[]);Nt(!0);var o=b3(),s=H(o);dr(s,t,"left",{},null);var a=ie(s,2);vr(a,1,r,_r,(i,l)=>{var c=Ut(),d=nt(c),u=b=>{W(b,h3())},m=b=>{var y=Ut(),h=nt(y),j=p=>{W(p,m3())},v=p=>{var f=Ut(),g=nt(f),x=k=>{var O=g3(),A=H(O),R=F=>{rn(F,{get data(){return n(l),te(()=>n(l).icon)}})};ye(A,F=>{n(l),te(()=>n(l).icon)&&F(R)});var ne=ie(A,2),G=F=>{var Z=Br();De(()=>mt(Z,(n(l),te(()=>n(l).text)))),W(F,Z)};ye(ne,F=>{n(l),te(()=>n(l).text)&&F(G)}),De(()=>{var F;Rt(O,1,"jse-button ".concat((n(l),(F=te(()=>n(l).className))!==null&&F!==void 0?F:"")),"svelte-3erbu0"),kn(O,"title",(n(l),te(()=>n(l).title))),O.disabled=(n(l),te(()=>n(l).disabled||!1))}),Te("click",O,function(){for(var F,Z=arguments.length,je=new Array(Z),Q=0;Q<Z;Q++)je[Q]=arguments[Q];(F=n(l).onClick)===null||F===void 0||F.apply(this,je)}),W(k,O)},w=k=>{var O=Br();De(A=>mt(O,A),[()=>(n(l),te(()=>function(A){return console.error("Unknown type of menu item",A),"???"}(n(l))))]),W(k,O)};ye(g,k=>{C(Sa),n(l),te(()=>Sa(n(l)))?k(x):k(w,!1)},!0),W(p,f)};ye(h,p=>{C(Uf),n(l),te(()=>Uf(n(l)))?p(j):p(v,!1)},!0),W(b,y)};ye(d,b=>{C(Ja),n(l),te(()=>Ja(n(l)))?b(u):b(m,!1)}),W(i,c)}),dr(ie(a,2),t,"right",{},null),W(e,o),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var y3=he('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),j3=he('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function w3(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=K(void 0,!0),i=K(void 0,!0),l=K(void 0,!0),c=_(t,"text",13,""),d=_(t,"readOnly",9,!1),u=_(t,"onParse",9),m=_(t,"onRepair",9),b=_(t,"onChange",9,void 0),y=_(t,"onApply",9),h=_(t,"onCancel",9),j=Ur("jsoneditor:JSONRepair"),v=K(void 0,!0);function p(){if(n(v)&&n(r)){var G=n(r).position!==void 0?n(r).position:0;n(v).setSelectionRange(G,G),n(v).focus()}}function f(){y()(c())}function g(){try{c(m()(c())),b()&&b()(c())}catch{}}var x=K(void 0,!0);fe(()=>C(c()),()=>{S(r,function(G){try{return void u()(G)}catch(F){return Fi(G,F.message)}}(c()))}),fe(()=>C(c()),()=>{S(o,function(G){try{return m()(G),!0}catch{return!1}}(c()))}),fe(()=>n(r),()=>{j("error",n(r))}),fe(()=>C(h()),()=>{S(x,[{type:"space"},{type:"button",icon:ed,title:"Cancel repair",className:"jse-cancel",onClick:h()}])}),fe(()=>pp,()=>{S(s,{icon:pp,text:"Show me",title:"Scroll to the error location",onClick:p})}),fe(()=>is,()=>{S(a,{icon:is,text:"Auto repair",title:"Automatically repair JSON",onClick:g})}),fe(()=>(n(o),n(s),n(a)),()=>{S(i,n(o)?[n(s),n(a)]:[n(s)])}),fe(()=>C(d()),()=>{S(l,[{icon:pv,text:"Apply",title:"Apply fixed JSON",disabled:d(),onClick:f}])}),Sn(),Nt(!0);var w=j3(),k=H(w);md(k,{get items(){return n(x)},$$slots:{left:(G,F)=>{W(G,y3())}}});var O=ie(k,2),A=G=>{var F=ot(()=>(n(r),te(()=>"Cannot parse JSON: ".concat(n(r).message))));Mo(G,{type:"error",get icon(){return Us},get message(){return n(F)},get actions(){return n(i)}})},R=G=>{Mo(G,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};ye(O,G=>{n(r)?G(A):G(R,!1)});var ne=ie(O,2);er(ne,G=>S(v,G),()=>n(v)),De(()=>{ne.readOnly=d(),Hs(ne,c())}),Te("input",ne,function(G){j("handleChange");var F=G.target.value;c()!==F&&(c(F),b()&&b()(c()))}),W(e,w),ht()}function Eb(e,t){pt(t,!1);var r=_(t,"text",13),o=_(t,"onParse",9),s=_(t,"onRepair",9),a=_(t,"onApply",9),i=_(t,"onClose",9);function l(d){a()(d),i()()}function c(){i()()}Nt(!0),zl(e,{get onClose(){return i()},className:"jse-repair-modal",children:(d,u)=>{w3(d,{get onParse(){return o()},get onRepair(){return s()},onApply:l,onCancel:c,get text(){return r()},set text(m){r(m)},$$legacy:!0})},$$slots:{default:!0}}),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var x3=he('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),k3=he('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function S3(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=K(void 0,!0),i=K(void 0,!0),l=_(t,"visibleSections",9),c=_(t,"sectionIndex",9),d=_(t,"total",9),u=_(t,"path",9),m=_(t,"selection",9),b=_(t,"onExpandSection",9),y=_(t,"context",9);fe(()=>(C(l()),C(c())),()=>{S(r,l()[c()])}),fe(()=>n(r),()=>{S(o,n(r).end)}),fe(()=>(C(l()),C(c()),C(d())),()=>{S(s,l()[c()+1]?l()[c()+1].start:d())}),fe(()=>(C(y()),C(m()),C(u()),n(o)),()=>{S(a,Tl(y().getJson(),m(),u().concat(String(n(o)))))}),fe(()=>(n(o),n(s)),()=>{S(i,function(x,w){var k={start:x,end:Math.min(Lf(x),w)},O=Math.max(qu((x+w)/2),x),A={start:O,end:Math.min(Lf(O),w)},R=qu(w),ne=R===w?R-Pl:R,G={start:Math.max(ne,x),end:w},F=[k],Z=A.start>=k.end&&A.end<=G.start;return Z&&F.push(A),G.start>=(Z?A.end:k.end)&&F.push(G),F}(n(o),n(s)))}),Sn(),Nt(!0);var h,j,v=k3(),p=H(v),f=H(p),g=H(f);vr(ie(f,2),1,()=>n(i),_r,(x,w)=>{var k=x3(),O=H(k);De(()=>{var A,R;return mt(O,"show ".concat((n(w),(A=te(()=>n(w).start))!==null&&A!==void 0?A:""),"-").concat((n(w),(R=te(()=>n(w).end))!==null&&R!==void 0?R:"")))}),Te("click",k,()=>b()(u(),n(w))),W(x,k)}),De((x,w)=>{var k,O;h=Rt(v,1,"jse-collapsed-items svelte-1v6dhm4",null,h,x),j=Io(v,"",j,w),mt(g,"Items ".concat((k=n(o))!==null&&k!==void 0?k:"","-").concat((O=n(s))!==null&&O!==void 0?O:""))},[()=>({"jse-selected":n(a)}),()=>({"--level":(C(u()),te(()=>u().length+2))})]),Te("mousemove",v,function(x){x.stopPropagation()}),W(e,v),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var _3=he('<button type="button"><!></button>');function Ha(e,t){pt(t,!1);var r=_(t,"root",9,!1),o=_(t,"insert",9,!1),s=_(t,"selected",9),a=_(t,"onContextMenu",9);Nt(!0);var i,l=_3();rn(H(l),{get data(){return qa}}),De(c=>{i=Rt(l,1,"jse-context-menu-pointer svelte-10ijtzr",null,i,c),kn(l,"title",Tv)},[()=>({"jse-root":r(),"jse-insert":o(),"jse-selected":s()})]),Te("click",l,function(c){for(var d=c.target;d&&d.nodeName!=="BUTTON";)d=d.parentNode;d&&a()({anchor:d,left:0,top:0,width:Oa,height:Ea,offsetTop:2,offsetLeft:0,showTip:!0})}),W(e,l),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var C3=he('<div role="none" data-type="selectable-key"><!></div>'),E3=he("<!> <!>",1),O3=he('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function Ob(e,t){pt(t,!0);var r=ho(()=>mn(t.selection)&&Ir(t.selection)),o=ho(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:n(r),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),s=Ut();vr(nt(s),17,()=>n(o),_r,(a,i)=>{var l=Ut(),c=nt(l),d=m=>{var b=ho(()=>n(i).action),y=O3();ao(y,(h,j)=>{var v;return(v=n(b))===null||v===void 0?void 0:v(h,j)},()=>n(i).props),W(m,y)},u=m=>{var b=ho(()=>n(i).component),y=Ut();P0(nt(y),()=>n(b),(h,j)=>{j(h,os(()=>n(i).props))}),W(m,y)};ye(c,m=>{zk(n(i))?m(d):m(u,!1)}),W(a,l)}),W(e,s),ht()}var $3={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function df(e){var{json:t,selection:r,deltaY:o,items:s}=e;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var a=o<0?function(u){for(var{json:m,items:b,selection:y,deltaY:h}=u,j=$a(m,y),v=b.findIndex(k=>Ft(k.path,j)),p=()=>{var k;return(k=b[f-1])===null||k===void 0?void 0:k.height},f=v,g=0;p()!==void 0&&Math.abs(h)>g+p()/2;)g+=p(),f-=1;var x=b[f].path,w=f-v;return f!==v&&b[f]!==void 0?{beforePath:x,offset:w}:void 0}({json:t,selection:r,deltaY:o,items:s}):function(u){for(var m,{json:b,items:y,selection:h,deltaY:j}=u,v=ss(b,h),p=y.findIndex(ne=>Ft(ne.path,v)),f=0,g=p,x=()=>{var ne;return(ne=y[g+1])===null||ne===void 0?void 0:ne.height};x()!==void 0&&Math.abs(j)>f+x()/2;)f+=x(),g+=1;var w=nn(v),k=Xe(b,w),O=Array.isArray(k)?g:g+1,A=(m=y[O])===null||m===void 0?void 0:m.path,R=g-p;return A?{beforePath:A,offset:R}:{append:!0,offset:R}}({json:t,selection:r,deltaY:o,items:s});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(u,m,b){if(!m)return[];var y="beforePath"in b?b.beforePath:void 0,h="append"in b?b.append:void 0,j=nn(ut(m)),v=Xe(u,j);if(!(h||y&&fa(y,j)&&y.length>j.length))return[];var p=$a(u,m),f=ss(u,m),g=Ht(p),x=Ht(f),w=y?y[j.length]:void 0;if(!jr(v)){if(fr(v)){var k=Yr(g),O=Yr(x),A=w!==void 0?Yr(w):v.length;return Dy(O-k+1,A<k?Z=>({op:"move",from:gt(j.concat(String(k+Z))),path:gt(j.concat(String(A+Z)))}):()=>({op:"move",from:gt(j.concat(String(k))),path:gt(j.concat(String(A)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var R=Object.keys(v),ne=R.indexOf(g),G=R.indexOf(x),F=h?R.length:w!==void 0?R.indexOf(w):-1;return ne!==-1&&G!==-1&&F!==-1?F>ne?[...R.slice(ne,G+1),...R.slice(F,R.length)].map(Z=>ds(j,Z)):[...R.slice(F,ne),...R.slice(G+1,R.length)].map(Z=>ds(j,Z)):[]}(t,r,a),l=nn($a(t,r)),c=Xe(t,l);if(Array.isArray(c)){var d=function(u){var m,b,{items:y,json:h,selection:j,offset:v}=u,p=$a(h,j),f=ss(h,j),g=y.findIndex(O=>Ft(O.path,p)),x=y.findIndex(O=>Ft(O.path,f)),w=(m=y[g+v])===null||m===void 0?void 0:m.path,k=(b=y[x+v])===null||b===void 0?void 0:b.path;return ro(w,k)}({items:s,json:t,selection:r,offset:a.offset});return{operations:i,updatedSelection:d,offset:a.offset}}return{operations:i,updatedSelection:void 0,offset:a.offset}}Ot(`/* over all fonts, sizes, and colors */
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
}`);var P3=he('<button type="button"><!></button>');function Ai(e,t){pt(t,!1);var r=K(),o=ps("absolute-popup"),s=_(t,"validationError",8),a=_(t,"onExpand",8);fe(()=>C(s()),()=>{S(r,qk(s())&&s().isChildError?"Contains invalid data":s().message)}),Sn(),Nt();var i=P3();rn(H(i),{get data(){return Us}}),Gr(()=>Te("click",i,function(){for(var l,c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];(l=a())===null||l===void 0||l.apply(this,d)})),ao(i,(l,c)=>Hi?.(l,c),()=>Ie({text:n(r)},o)),De(()=>{var l;return Rt(i,1,"jse-validation-".concat((C(s()),(l=te(()=>s().severity))!==null&&l!==void 0?l:"")),"svelte-q6a061")}),W(e,i),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var Xn=ld(()=>$3),M3=he('<div class="jse-separator svelte-1qi6rc1">:</div>'),R3=he('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),N3=he('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),T3=he('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),A3=he('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),q3=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),z3=he('<div data-type="insert-selection-area-inside"><!></div>'),I3=he('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),D3=he("<!> <!>",1),L3=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),U3=he('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),F3=he('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),V3=he('<div class="jse-separator svelte-1qi6rc1">:</div>'),B3=he('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),W3=he('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),H3=he('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),K3=he('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),J3=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),Q3=he('<div data-type="insert-selection-area-inside"><!></div>'),G3=he('<div slot="identifier"><!></div>'),Y3=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),X3=he('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),Z3=he('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),e6=he('<div class="jse-separator svelte-1qi6rc1">:</div>'),t6=he('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),n6=he('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),r6=he('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),o6=he('<div data-type="insert-selection-area-after"><!></div>'),a6=he('<div role="treeitem" tabindex="-1"><!> <!></div>');function Xf(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=_(t,"pointer",9),a=_(t,"value",9),i=_(t,"state",9),l=_(t,"validationErrors",9),c=_(t,"searchResults",9),d=_(t,"selection",9),u=_(t,"context",9),m=_(t,"onDragSelectionStart",9),b=Ur("jsoneditor:JSONNode"),y=K(void 0,!0),h=void 0,j=K(void 0,!0),v=K(void 0,!0),p=K(void 0,!0),f=K(void 0,!0),g=K(void 0,!0),x=K(void 0,!0),w=K(void 0,!0);function k(ae){ae.stopPropagation();var J=Nv(ae);u().onExpand(n(v),!n(p),J)}function O(){u().onExpand(n(v),!0)}function A(ae,J){var be=ec(n(v),Object.keys(a()),ae,J);return u().onPatch(be),Ht(bo(be[0].path))}function R(ae){u().onDrag(ae)}function ne(ae){Xn().selecting&&(Xn(Xn().selecting=!1),ae.stopPropagation()),u().onDragEnd(),document.removeEventListener("mousemove",R,!0),document.removeEventListener("mouseup",ne)}function G(){var ae;return((ae=u().findElement([]))===null||ae===void 0||(ae=ae.getBoundingClientRect())===null||ae===void 0?void 0:ae.top)||0}function F(ae,J){var be=G()-ae.initialContentTop;return J.clientY-ae.initialClientY-be}function Z(ae){if(!u().readOnly&&d()){var J=nn(ut(d()));if(Ft(n(v),J)){var be=function(Y,V){var Qe=[];function rt(N){var U=n(v).concat(N),X=u().findElement(U);X!==void 0&&Qe.push({path:U,height:X.clientHeight})}if(Array.isArray(a())){var Ce=u().getJson();if(Ce===void 0)return;var lt=$a(Ce,Y),Ae=ss(Ce,Y),We=parseInt(Ht(lt),10),it=parseInt(Ht(Ae),10),Ue=V.find(N=>We>=N.start&&it<=N.end);if(!Ue)return;var{start:yt,end:$}=Ue;q0(yt,Math.min(a().length,$),N=>rt(String(N)))}else Object.keys(a()).forEach(rt);return Qe}(d(),n(g)||Ri);if(b("dragSelectionStart",{selection:d(),items:be}),be){var P=u().getJson();if(P!==void 0){var I=$a(P,d()),D=be.findIndex(Y=>Ft(Y.path,I)),{offset:ve}=df({json:P,selection:u().getSelection(),deltaY:0,items:be});S(j,{initialTarget:ae.target,initialClientY:ae.clientY,initialContentTop:G(),selectionStartIndex:D,selectionItemsCount:us(P,d()).length,items:be,offset:ve,didMoveItems:!1}),Xn(Xn().dragging=!0),document.addEventListener("mousemove",je,!0),document.addEventListener("mouseup",Q)}}else b("Cannot drag the current selection (probably spread over multiple sections)")}else m()(ae)}}function je(ae){if(n(j)){var J=u().getJson();if(J===void 0)return;var be=F(n(j),ae),{offset:P}=df({json:J,selection:u().getSelection(),deltaY:be,items:n(j).items});P!==n(j).offset&&(b("drag selection",P,be),S(j,Ie(Ie({},n(j)),{},{offset:P,didMoveItems:!0})))}}function Q(ae){if(n(j)){var J=u().getJson();if(J===void 0)return;var be=F(n(j),ae),{operations:P,updatedSelection:I}=df({json:J,selection:u().getSelection(),deltaY:be,items:n(j).items});if(P)u().onPatch(P,(Y,V)=>({state:V,selection:I??d()}));else if(ae.target===n(j).initialTarget&&!n(j).didMoveItems){var D=Yd(ae.target),ve=J0(ae.target);ve&&u().onSelect(Em(D,ve))}S(j,void 0),Xn(Xn().dragging=!1),document.removeEventListener("mousemove",je,!0),document.removeEventListener("mouseup",Q)}}function we(ae){ae.shiftKey||(ae.stopPropagation(),ae.preventDefault(),u().onSelect(Ua(n(v))))}function Re(ae){ae.shiftKey||(ae.stopPropagation(),ae.preventDefault(),u().onSelect(Ta(n(v))))}function Ee(ae){u().onSelect(Ua(n(v))),Kn(),u().onContextMenu(ae)}function ce(ae){u().onSelect(Ta(n(v))),Kn(),u().onContextMenu(ae)}fe(()=>C(s()),()=>{S(v,bo(s()))}),fe(()=>C(s()),()=>{S(r,encodeURIComponent(s()))}),fe(()=>C(i()),()=>{S(p,!!Ks(i())&&i().expanded)}),fe(()=>(C(a()),C(i())),()=>{S(f,la(a(),i(),[]))}),fe(()=>C(i()),()=>{S(g,Dr(i())?i().visibleSections:void 0)}),fe(()=>C(l()),()=>{var ae;S(x,(ae=l())===null||ae===void 0?void 0:ae.validationError)}),fe(()=>(C(u()),C(d()),n(v)),()=>{S(w,Tl(u().getJson(),d(),n(v)))}),fe(()=>n(v),()=>{S(o,n(v).length===0)}),Sn(),Nt(!0);var B,L,le=a6(),T=H(le),E=ae=>{var J=F3(),be=nt(J),P=H(be),I=H(P),D=H(I),ve=pe=>{rn(pe,{get data(){return qa}})},Y=pe=>{rn(pe,{get data(){return Cl}})};ye(D,pe=>{n(p)?pe(ve):pe(Y,!1)});var V=ie(I,2);dr(V,t,"identifier",{},null);var Qe=ie(V,2),rt=pe=>{W(pe,M3())};ye(Qe,pe=>{n(o)||pe(rt)});var Ce=ie(Qe,2),lt=H(Ce),Ae=H(lt),We=pe=>{var ge=R3();ju(ie(nt(ge),2),{children:(ft,at)=>{var Ke=Br();De(()=>{var Ge,qt;return mt(Ke,"".concat((C(a()),(Ge=te(()=>a().length))!==null&&Ge!==void 0?Ge:""),`
                `).concat((C(a()),(qt=te(()=>a().length===1?"item":"items"))!==null&&qt!==void 0?qt:"")))}),W(ft,Ke)},$$slots:{default:!0}}),W(pe,ge)},it=pe=>{var ge=N3();ju(ie(nt(ge),2),{onclick:O,children:(ft,at)=>{var Ke=Br();De(()=>{var Ge,qt;return mt(Ke,"".concat((C(a()),(Ge=te(()=>a().length))!==null&&Ge!==void 0?Ge:""),`
                `).concat((C(a()),(qt=te(()=>a().length===1?"item":"items"))!==null&&qt!==void 0?qt:"")))}),W(ft,Ke)},$$slots:{default:!0}}),W(pe,ge)};ye(Ae,pe=>{n(p)?pe(We):pe(it,!1)});var Ue=ie(Ce,2),yt=pe=>{var ge=T3();Ha(H(ge),{get root(){return n(o)},selected:!0,get onContextMenu(){return C(u()),te(()=>u().onContextMenu)}}),W(pe,ge)};ye(Ue,pe=>{C(u()),n(w),C(d()),C(mn),C(Ln),C(Ir),C(Ft),C(ut),n(v),te(()=>!u().readOnly&&n(w)&&d()&&(mn(d())||Ln(d()))&&!Ir(d())&&Ft(ut(d()),n(v)))&&pe(yt)});var $=ie(P,2),N=pe=>{Ai(pe,{get validationError(){return n(x)},onExpand:O})};ye($,pe=>{n(x),n(p),te(()=>n(x)&&(!n(p)||!n(x).isChildError))&&pe(N)});var U=ie($,2),X=pe=>{var ge=A3();Te("click",ge,we),W(pe,ge)},me=pe=>{var ge=q3();Te("click",ge,Re),W(pe,ge)};ye(U,pe=>{n(p)?pe(X):pe(me,!1)});var Ne=ie(be,2),qe=pe=>{var ge=U3(),ft=nt(ge),at=H(ft),Ke=$n=>{var Dt,pn,Vt=z3(),Gt=H(Vt),fn=ot(()=>(n(w),C(zr),C(d()),te(()=>n(w)&&zr(d()))));Ha(Gt,{insert:!0,get selected(){return n(fn)},onContextMenu:Ee}),De((bt,on)=>{Dt=Rt(Vt,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,Dt,bt),kn(Vt,"title",ef),pn=Io(Vt,"",pn,on)},[()=>({"jse-hovered":n(y)===Es,"jse-selected":n(w)&&zr(d())}),()=>({"--level":(n(v),te(()=>n(v).length+1))})]),W($n,Vt)};ye(at,$n=>{C(u()),n(y),C(Es),n(w),C(zr),C(d()),te(()=>!u().readOnly&&(n(y)===Es||n(w)&&zr(d())))&&$n(Ke)}),vr(ie(at,2),1,()=>n(g)||Ri,_r,($n,Dt,pn)=>{var Vt=D3(),Gt=nt(Vt);vr(Gt,1,()=>(C(a()),n(Dt),n(j),te(()=>function(on,$t,tt){var Bt=$t.start,At=Math.min($t.end,on.length),Pn=ag(Bt,At);return tt&&tt.offset!==0?im(Pn,tt.selectionStartIndex,tt.selectionItemsCount,tt.offset).map((Bn,Fn)=>({index:Bn,gutterIndex:Fn})):Pn.map(Bn=>({index:Bn,gutterIndex:Bn}))}(a(),n(Dt),n(j)))),on=>on.index,(on,$t)=>{var tt=ot(()=>(C(Dr),C(l()),n($t),te(()=>Dr(l())?l().items[n($t).index]:void 0))),Bt=ot(()=>(C(ou),C(u()),C(d()),n(v),n($t),te(()=>ou(u().getJson(),d(),n(v).concat(String(n($t).index)))))),At=Ut(),Pn=nt(At),Bn=ot(()=>(C(rc),C(s()),n($t),te(()=>rc(s(),n($t).index)))),Fn=ot(()=>(C(Dr),C(i()),n($t),te(()=>Dr(i())?i().items[n($t).index]:void 0))),cr=ot(()=>(C(Dr),C(c()),n($t),te(()=>Dr(c())?c().items[n($t).index]:void 0)));Xf(Pn,{get value(){return C(a()),n($t),te(()=>a()[n($t).index])},get pointer(){return n(Bn)},get state(){return n(Fn)},get validationErrors(){return n(tt)},get searchResults(){return n(cr)},get selection(){return n(Bt)},get context(){return u()},onDragSelectionStart:Z,$$slots:{identifier:(Jn,ar)=>{var pr=I3(),tr=H(pr),Cr=H(tr);De(()=>mt(Cr,(n($t),te(()=>n($t).gutterIndex)))),W(Jn,pr)}}}),W(on,At)});var fn=ie(Gt,2),bt=on=>{var $t=ot(()=>n(g)||Ri);S3(on,{get visibleSections(){return n($t)},sectionIndex:pn,get total(){return C(a()),te(()=>a().length)},get path(){return n(v)},get onExpandSection(){return C(u()),te(()=>u().onExpandSection)},get selection(){return d()},get context(){return u()}})};ye(fn,on=>{n(Dt),C(a()),te(()=>n(Dt).end<a().length)&&on(bt)}),W($n,Vt)});var Ge=ie(ft,2),qt=ie(H(Ge),2),_n=$n=>{var Dt=L3();Te("click",Dt,Re),W($n,Dt)};ye(qt,$n=>{n(o)||$n(_n)}),W(pe,ge)};ye(Ne,pe=>{n(p)&&pe(qe)}),Te("click",I,k),W(ae,J)},M=ae=>{var J=Ut(),be=nt(J),P=D=>{var ve=Z3(),Y=nt(ve),V=H(Y),Qe=H(V),rt=H(Qe),Ce=Ge=>{rn(Ge,{get data(){return qa}})},lt=Ge=>{rn(Ge,{get data(){return Cl}})};ye(rt,Ge=>{n(p)?Ge(Ce):Ge(lt,!1)});var Ae=ie(Qe,2);dr(Ae,t,"identifier",{},null);var We=ie(Ae,2),it=Ge=>{W(Ge,V3())};ye(We,Ge=>{n(o)||Ge(it)});var Ue=ie(We,2),yt=H(Ue),$=H(yt),N=Ge=>{W(Ge,B3())},U=Ge=>{var qt=W3();ju(ie(nt(qt),2),{onclick:O,children:(_n,$n)=>{var Dt=Br();De((pn,Vt)=>mt(Dt,"".concat(pn??"",`
                `).concat(Vt??"")),[()=>(C(a()),te(()=>Object.keys(a()).length)),()=>(C(a()),te(()=>Object.keys(a()).length===1?"prop":"props"))]),W(_n,Dt)},$$slots:{default:!0}}),W(Ge,qt)};ye($,Ge=>{n(p)?Ge(N):Ge(U,!1)});var X=ie(Ue,2),me=Ge=>{var qt=H3();Ha(H(qt),{get root(){return n(o)},selected:!0,get onContextMenu(){return C(u()),te(()=>u().onContextMenu)}}),W(Ge,qt)};ye(X,Ge=>{C(u()),n(w),C(d()),C(mn),C(Ln),C(Ir),C(Ft),C(ut),n(v),te(()=>!u().readOnly&&n(w)&&d()&&(mn(d())||Ln(d()))&&!Ir(d())&&Ft(ut(d()),n(v)))&&Ge(me)});var Ne=ie(V,2),qe=Ge=>{Ai(Ge,{get validationError(){return n(x)},onExpand:O})};ye(Ne,Ge=>{n(x),n(p),te(()=>n(x)&&(!n(p)||!n(x).isChildError))&&Ge(qe)});var pe=ie(Ne,2),ge=Ge=>{var qt=K3();Te("click",qt,we),W(Ge,qt)},ft=Ge=>{var qt=Ut(),_n=nt(qt),$n=Dt=>{var pn=J3();Te("click",pn,Re),W(Dt,pn)};ye(_n,Dt=>{n(o)||Dt($n)},!0),W(Ge,qt)};ye(pe,Ge=>{n(p)?Ge(ge):Ge(ft,!1)});var at=ie(Y,2),Ke=Ge=>{var qt=X3(),_n=nt(qt),$n=H(_n),Dt=fn=>{var bt,on,$t=Q3(),tt=H($t),Bt=ot(()=>(n(w),C(zr),C(d()),te(()=>n(w)&&zr(d()))));Ha(tt,{insert:!0,get selected(){return n(Bt)},onContextMenu:Ee}),De((At,Pn)=>{bt=Rt($t,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,bt,At),kn($t,"title",ef),on=Io($t,"",on,Pn)},[()=>({"jse-hovered":n(y)===Es,"jse-selected":n(w)&&zr(d())}),()=>({"--level":(n(v),te(()=>n(v).length+1))})]),W(fn,$t)};ye($n,fn=>{C(u()),n(y),C(Es),n(w),C(zr),C(d()),te(()=>!u().readOnly&&(n(y)===Es||n(w)&&zr(d())))&&fn(Dt)}),vr(ie($n,2),1,()=>(C(a()),n(j),te(()=>function(fn,bt){var on=Object.keys(fn);return bt&&bt.offset!==0?im(on,bt.selectionStartIndex,bt.selectionItemsCount,bt.offset):on}(a(),n(j)))),_r,(fn,bt)=>{var on=ot(()=>(C(rc),C(s()),n(bt),te(()=>rc(s(),n(bt))))),$t=ot(()=>(C(po),C(c()),n(bt),te(()=>po(c())?c().properties[n(bt)]:void 0))),tt=ot(()=>(C(po),C(l()),n(bt),te(()=>po(l())?l().properties[n(bt)]:void 0))),Bt=ot(()=>(n(v),n(bt),te(()=>n(v).concat(n(bt))))),At=ot(()=>(C(ou),C(u()),C(d()),C(n(Bt)),te(()=>ou(u().getJson(),d(),n(Bt))))),Pn=Ut(),Bn=nt(Pn),Fn=ot(()=>(C(po),C(i()),n(bt),te(()=>po(i())?i().properties[n(bt)]:void 0)));Xf(Bn,{get value(){return C(a()),n(bt),te(()=>a()[n(bt)])},get pointer(){return n(on)},get state(){return n(Fn)},get validationErrors(){return n(tt)},get searchResults(){return n($t)},get selection(){return n(At)},get context(){return u()},onDragSelectionStart:Z,$$slots:{identifier:(cr,Jn)=>{var ar,pr=G3(),tr=H(pr),Cr=ot(()=>(C(Tm),C(n($t)),te(()=>Tm(n($t)))));(function(hr,wr){pt(wr,!1);var nr=K(void 0,!0),Pe=K(void 0,!0),zt=_(wr,"pointer",9),xn=_(wr,"key",9),In=_(wr,"selection",9),ur=_(wr,"searchResultItems",9),Nr=_(wr,"onUpdateKey",9),Kt=_(wr,"context",9),xr=K(void 0,!0);function Wr(se){n(Pe)||Kt().readOnly||(se.preventDefault(),Kt().onSelect(Vv(n(xr))))}function rr(se,ke){var ze=Nr()(xn(),Kt().normalization.unescapeValue(se)),ee=nn(n(xr)).concat(ze);Kt().onSelect(ke===as.nextInside?Qt(ee):La(ee)),ke!==as.self&&Kt().focus()}function Fr(){Kt().onSelect(La(n(xr))),Kt().focus()}fe(()=>C(zt()),()=>{S(xr,bo(zt()))}),fe(()=>(C(In()),n(xr)),()=>{S(nr,Lr(In())&&Ft(In().path,n(xr)))}),fe(()=>(n(nr),C(In())),()=>{S(Pe,n(nr)&&Ir(In()))}),Sn(),Nt(!0);var Mn=E3(),Xt=nt(Mn),Tt=se=>{var ke=ot(()=>(C(Kt()),C(xn()),te(()=>Kt().normalization.escapeValue(xn())))),ze=ot(()=>(C(Ir),C(In()),te(()=>Ir(In())?In().initialValue:void 0)));ab(se,{get value(){return n(ke)},get initialValue(){return n(ze)},label:"Edit key",shortText:!0,onChange:rr,onCancel:Fr,get onFind(){return C(Kt()),te(()=>Kt().onFind)}})},Tn=se=>{var ke,ze=C3(),ee=H(ze),ue=Fe=>{var st=ot(()=>(C(Kt()),C(xn()),te(()=>Kt().normalization.escapeValue(xn()))));fb(Fe,{get text(){return n(st)},get searchResultItems(){return ur()}})},$e=Fe=>{var st=Br();De(ct=>mt(st,ct),[()=>(C(Vi),C(Kt()),C(xn()),te(()=>Vi(Kt().normalization.escapeValue(xn()))))]),W(Fe,st)};ye(ee,Fe=>{ur()?Fe(ue):Fe($e,!1)}),De(Fe=>ke=Rt(ze,1,"jse-key svelte-1n4cez4",null,ke,Fe),[()=>({"jse-empty":xn()===""})]),Te("dblclick",ze,Wr),W(se,ze)};ye(Xt,se=>{C(Kt()),n(Pe),te(()=>!Kt().readOnly&&n(Pe))?se(Tt):se(Tn,!1)});var mr=ie(Xt,2),sr=se=>{Ha(se,{selected:!0,get onContextMenu(){return C(Kt()),te(()=>Kt().onContextMenu)}})};ye(mr,se=>{C(Kt()),n(nr),n(Pe),te(()=>!Kt().readOnly&&n(nr)&&!n(Pe))&&se(sr)}),W(hr,Mn),ht()})(tr,{get pointer(){return n(on)},get key(){return n(bt)},get selection(){return n(At)},get searchResultItems(){return n(Cr)},get context(){return u()},onUpdateKey:A}),De(hr=>ar=Rt(pr,1,"jse-key-outer svelte-1qi6rc1",null,ar,hr),[()=>({"jse-selected-key":Lr(n(At))&&Ft(n(At).path,n(Bt))})]),W(cr,pr)}}}),W(fn,Pn)});var pn=ie(_n,2),Vt=ie(H(pn),2),Gt=fn=>{var bt=Y3();Te("click",bt,Re),W(fn,bt)};ye(Vt,fn=>{n(o)||fn(Gt)}),W(Ge,qt)};ye(at,Ge=>{n(p)&&Ge(Ke)}),Te("click",Qe,k),W(D,ve)},I=D=>{var ve=r6(),Y=H(ve),V=H(Y);dr(V,t,"identifier",{},null);var Qe=ie(V,2),rt=X=>{W(X,e6())};ye(Qe,X=>{n(o)||X(rt)});var Ce=ie(Qe,2),lt=H(Ce),Ae=ot(()=>n(w)?d():void 0),We=ot(()=>(C(Am),C(c()),te(()=>Am(c()))));Ob(lt,{get path(){return n(v)},get value(){return a()},get enforceString(){return n(f)},get selection(){return n(Ae)},get searchResultItems(){return n(We)},get context(){return u()}});var it=ie(Ce,2),Ue=X=>{var me=t6();Ha(H(me),{get root(){return n(o)},selected:!0,get onContextMenu(){return C(u()),te(()=>u().onContextMenu)}}),W(X,me)};ye(it,X=>{C(u()),n(w),C(d()),C(mn),C(Ln),C(Ir),C(Ft),C(ut),n(v),te(()=>!u().readOnly&&n(w)&&d()&&(mn(d())||Ln(d()))&&!Ir(d())&&Ft(ut(d()),n(v)))&&X(Ue)});var yt=ie(Y,2),$=X=>{Ai(X,{get validationError(){return n(x)},onExpand:O})};ye(yt,X=>{n(x)&&X($)});var N=ie(yt,2),U=X=>{var me=n6();Te("click",me,Re),W(X,me)};ye(N,X=>{n(o)||X(U)}),W(D,ve)};ye(be,D=>{C(wn),C(a()),te(()=>wn(a()))?D(P):D(I,!1)},!0),W(ae,J)};ye(T,ae=>{C(a()),te(()=>Array.isArray(a()))?ae(E):ae(M,!1)});var oe=ie(T,2),Oe=ae=>{var J,be=o6(),P=H(be),I=ot(()=>(n(w),C(mo),C(d()),te(()=>n(w)&&mo(d()))));Ha(P,{insert:!0,get selected(){return n(I)},onContextMenu:ce}),De(D=>{J=Rt(be,1,"jse-insert-area jse-after svelte-1qi6rc1",null,J,D),kn(be,"title",ef)},[()=>({"jse-hovered":n(y)===nu,"jse-selected":n(w)&&mo(d())})]),W(ae,be)};ye(oe,ae=>{C(u()),n(y),C(nu),n(w),C(mo),C(d()),te(()=>!u().readOnly&&(n(y)===nu||n(w)&&mo(d())))&&ae(Oe)}),De((ae,J,be)=>{B=Rt(le,1,ae,"svelte-1qi6rc1",B,J),kn(le,"data-path",n(r)),kn(le,"aria-selected",n(w)),L=Io(le,"",L,be)},[()=>cs((C(ea),n(p),C(u()),n(v),C(a()),te(()=>ea("jse-json-node",{"jse-expanded":n(p)},u().onClassName(n(v),a()))))),()=>({"jse-root":n(o),"jse-selected":n(w)&&Ln(d()),"jse-selected-value":n(w)&&mn(d()),"jse-readonly":u().readOnly,"jse-hovered":n(y)===dm}),()=>({"--level":(n(v),te(()=>n(v).length))})]),Te("mousedown",le,function(ae){if((ae.buttons===1||ae.buttons===2)&&!((J=ae.target).nodeName==="DIV"&&J.contentEditable==="true"||ae.buttons===1&&H0(ae.target,"BUTTON"))){var J;ae.stopPropagation(),ae.preventDefault(),u().focus(),document.addEventListener("mousemove",R,!0),document.addEventListener("mouseup",ne);var be=Yd(ae.target),P=u().getJson(),I=u().getDocumentState();if(!d()||be===qn.after||be===qn.inside||d().type!==be&&d().type!==qn.multi||!Tl(P,d(),n(v)))if(Xn(Xn().selecting=!0),Xn(Xn().selectionAnchor=n(v)),Xn(Xn().selectionAnchorType=be),Xn(Xn().selectionFocus=n(v)),ae.shiftKey){var D=u().getSelection();D&&u().onSelect(ro(Ds(D),n(v)))}else if(be===qn.multi)if(n(o)&&ae.target.hasAttribute("data-path")){var ve=Ht(eb(a(),I));u().onSelect(Bf(ve))}else u().onSelect(ro(n(v),n(v)));else P!==void 0&&u().onSelect(Em(be,n(v)));else ae.button===0&&m()(ae)}}),Te("mousemove",le,function(ae){if(Xn().selecting){ae.preventDefault(),ae.stopPropagation(),Xn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var J=Yd(ae.target);Ft(n(v),Xn().selectionFocus)&&J===Xn().selectionAnchorType||(Xn(Xn().selectionFocus=n(v)),Xn(Xn().selectionAnchorType=J),u().onSelect(ro(Xn().selectionAnchor||Xn().selectionFocus,Xn().selectionFocus)))}}),Te("mouseover",le,function(ae){Xn().selecting||Xn().dragging||(ae.stopPropagation(),es(ae.target,"data-type","selectable-value")?S(y,dm):es(ae.target,"data-type","selectable-key")?S(y,void 0):es(ae.target,"data-type","insert-selection-area-inside")?S(y,Es):es(ae.target,"data-type","insert-selection-area-after")&&S(y,nu),clearTimeout(h))}),Te("mouseout",le,function(ae){ae.stopPropagation(),h=window.setTimeout(()=>S(y,void 0))}),W(e,le),ht()}var $b={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},Pb={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},Km={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},s6={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};function i6(e,t){e.stopPropagation(),t.onCreateObject()}function l6(e,t){e.stopPropagation(),t.onCreateArray()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var c6=(e,t)=>t.onClick(),u6=he('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),d6=he('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function Zf(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Aw(r,o)}function Mb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=Xe(e,t);if(fr(s)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,d=function(m,b){var y={boolean:0,number:1,string:2,undefined:4},h=3;return function(j,v){var p=Xe(j,m),f=Xe(v,m);if(typeof p!=typeof f){var g,x,w=(g=y[typeof p])!==null&&g!==void 0?g:h,k=(x=y[typeof f])!==null&&x!==void 0?x:h;return w>k?b:w<k?-b:0}return typeof p=="number"||typeof p=="boolean"?p>f?b:p<f?-b:0:lr(p)?0:b*Zf(p,f)}}(l,c),u=Xe(a,i);return[{op:"replace",path:gt(i),value:u.slice(0).sort(d)}]}(e,t,r,o)}if(wn(s))return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Xe(a,i),d=Object.keys(c).slice();d.sort((m,b)=>l*Zf(m,b));var u={};return d.forEach(m=>u[m]=c[m]),[{op:"replace",path:gt(i),value:u}]}(e,t,o);throw new Error("Cannot sort: no array or object")}Jl(["click"]);Ot(`/* over all fonts, sizes, and colors */
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
}`);var f6=he('<button type="button"> </button>'),v6=he('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),p6=he('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function h6(e,t){pt(t,!1);var r=_(t,"items",9),o=_(t,"selectedItem",9),s=_(t,"onSelect",9);Nt(!0);var a=p6(),i=H(a);vr(i,1,()=>(C(Tu),C(r()),te(()=>Tu(r(),100))),d=>d,(d,u)=>{var m,b=f6(),y=H(b);De((h,j,v)=>{m=Rt(b,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,m,h),kn(b,"title",j),mt(y,v)},[()=>({"jse-selected":n(u)===o()}),()=>(n(u),te(()=>n(u).toString())),()=>(C(Ca),n(u),te(()=>Ca(n(u).toString(),30)))]),Te("click",b,ka(()=>s()(n(u)))),W(d,b)});var l=ie(i,2),c=d=>{var u=v6();kn(u,"title","Limited to 100 items"),W(d,u)};ye(l,d=>{C(r()),te(()=>r().length>100)&&d(c)}),W(e,a),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var m6=he('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),g6=he('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function Jm(e,t){pt(t,!1);var r,o=K(void 0,!0),s=K(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:i}=ps("absolute-popup"),l=_(t,"path",9),c=_(t,"index",9),d=_(t,"onSelect",9),u=_(t,"getItems",9),m=K(void 0,!0),b=K(!1,!0);function y(g){i(r),d()(n(o).concat(g))}fe(()=>(C(l()),C(c())),()=>{S(o,l().slice(0,c()))}),fe(()=>(C(l()),C(c())),()=>{S(s,l()[c()])}),Sn(),Nt(!0);var h,j=g6(),v=H(j);rn(H(v),{get data(){return Mg}});var p=ie(v,2),f=g=>{var x=m6(),w=H(x);De(()=>mt(w,n(s))),Te("click",x,()=>y(n(s))),W(g,x)};ye(p,g=>{n(s)!==void 0&&g(f)}),er(j,g=>S(m,g),()=>n(m)),De(g=>h=Rt(v,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,h,g),[()=>({"jse-open":n(b)})]),Te("click",v,function(){if(n(m)){S(b,!0);var g={items:u()(n(o)),selectedItem:n(s),onSelect:y};r=a(h6,g,{anchor:n(m),closeOnOuterClick:!0,onClose:()=>{S(b,!1)}})}}),W(e,j),ht()}function Jv(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var b6=he('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),y6=he('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),j6=he('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function w6(e,t){pt(t,!1);var r=K(),o=ps("absolute-popup"),s=_(t,"path",8),a=_(t,"pathParser",8),i=_(t,"onChange",8),l=_(t,"onClose",8),c=_(t,"onError",8),d=_(t,"pathExists",8),u=K(),m=K(),b=K(!1),y=void 0,h=K(!1);function j(){n(u).focus()}function v(ne){try{var G=a().parse(ne);return function(F){if(!d()(F))throw new Error("Path does not exist in current document")}(G),{path:G,error:void 0}}catch(F){return{path:void 0,error:F}}}no(()=>{j()}),Lo(()=>{clearTimeout(y)}),fe(()=>(C(a()),C(s())),()=>{S(m,a().stringify(s()))}),fe(()=>(n(b),n(m)),()=>{S(r,n(b)?v(n(m)).error:void 0)}),Sn(),Nt();var p,f=j6(),g=H(f);er(g,ne=>S(u,ne),()=>n(u));var x=ie(g,2),w=ne=>{var G=b6();rn(H(G),{get data(){return Us}}),ao(G,(F,Z)=>Hi?.(F,Z),()=>Ie({text:String(n(r)||"")},o)),W(ne,G)};ye(x,ne=>{n(r)&&ne(w)});var k=ie(x,2),O=ne=>{W(ne,y6())};ye(k,ne=>{n(h)&&ne(O)});var A,R=ie(k,2);rn(H(R),{get data(){return Ya}}),De((ne,G)=>{p=Rt(f,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,p,ne),Hs(g,n(m)),A=Rt(R,1,"jse-navigation-bar-copy svelte-uyexy4",null,A,G)},[()=>({error:n(r)}),()=>({copied:n(h)})]),Te("keydown",g,ka(function(ne){var G=Da(ne);if(G==="Escape"&&(ne.preventDefault(),l()()),G==="Enter"){ne.preventDefault(),S(b,!0);var F=v(n(m));F.path!==void 0?i()(F.path):c()(F.error)}})),Te("input",g,function(ne){S(m,ne.currentTarget.value)}),Te("click",R,function(){Jv(n(m)),S(h,!0),y=window.setTimeout(()=>S(h,!1),1e3),j()}),W(e,f),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var x6=he("<!> <!>",1),k6=he('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function S6(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=Ur("jsoneditor:NavigationBar"),a=_(t,"json",9),i=_(t,"selection",9),l=_(t,"onSelect",9),c=_(t,"onError",9),d=_(t,"pathParser",9),u=K(void 0,!0),m=K(!1,!0);function b(G){s("get items for path",G);var F=Xe(a(),G);if(Array.isArray(F))return ag(0,F.length).map(String);if(wn(F)){var Z=Object.keys(F).slice(0);return Z.sort(Zf),Z}return[]}function y(G){return zo(a(),G)}function h(G){s("select path",JSON.stringify(G)),l()(ro(G,G))}function j(){S(m,!1)}function v(G){j(),h(G)}fe(()=>(C(i()),ut),()=>{S(r,i()?ut(i()):[])}),fe(()=>(C(a()),n(r)),()=>{S(o,lr(Xe(a(),n(r))))}),fe(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(u)&&n(u).scrollTo){var G=n(u).scrollWidth-n(u).clientWidth;G>0&&(s("scrollTo ",G),n(u).scrollTo({left:G,behavior:"smooth"}))}})}),Sn(),Nt(!0);var p=k6(),f=H(p),g=G=>{var F=x6(),Z=nt(F);vr(Z,1,()=>n(r),_r,(we,Re,Ee)=>{Jm(we,{getItems:b,get path(){return n(r)},index:Ee,onSelect:h})});var je=ie(Z,2),Q=we=>{Jm(we,{getItems:b,get path(){return n(r)},get index(){return n(r),te(()=>n(r).length)},onSelect:h})};ye(je,we=>{n(o)&&we(Q)}),W(G,F)},x=G=>{w6(G,{get path(){return n(r)},onClose:j,onChange:v,get onError(){return c()},pathExists:y,get pathParser(){return d()}})};ye(f,G=>{n(m)?G(x,!1):G(g)});var w,k=ie(f,2),O=H(k),A=H(O),R=ie(O,2),ne=ot(()=>n(m)?$w:vw);rn(R,{get data(){return n(ne)}}),er(p,G=>S(u,G),()=>n(u)),De((G,F)=>{w=Rt(k,1,"jse-navigation-bar-edit svelte-hjhal6",null,w,G),kn(k,"title",n(m)?"Cancel editing the selected path":"Edit the selected path"),mt(A,F)},[()=>({flex:!n(m),editing:n(m)}),()=>(C(lr),C(a()),n(m),te(()=>lr(a())||n(m)?" ":"Navigation bar"))]),Te("click",k,function(){S(m,!n(m))}),W(e,p),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var _6=he('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),C6=he('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),E6=he('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function Rb(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=Ur("jsoneditor:SearchBox"),i=_(t,"json",9),l=_(t,"documentState",9),c=_(t,"parser",9),d=_(t,"showSearch",9),u=_(t,"showReplace",13),m=_(t,"readOnly",9),b=_(t,"columns",9),y=_(t,"onSearch",9),h=_(t,"onFocus",9),j=_(t,"onPatch",9),v=_(t,"onClose",9),p=K("",!0),f="",g=K("",!0),x=K(!1,!0),w=K(void 0,!0),k=wu(function(D){return M.apply(this,arguments)},300),O=wu(function(D){return oe.apply(this,arguments)},300);function A(){u(!u()&&!m())}function R(D){D.stopPropagation();var ve=Da(D);ve==="Enter"&&(D.preventDefault(),n(p)!==f?k.flush():Ee()),ve==="Shift+Enter"&&(D.preventDefault(),B()),ve==="Ctrl+Enter"&&(D.preventDefault(),u()?Z():Ee()),ve==="Ctrl+H"&&(D.preventDefault(),A()),ve==="Escape"&&(D.preventDefault(),J())}function ne(D){Da(D)==="Enter"&&(D.preventDefault(),D.stopPropagation(),Z())}function G(){return F.apply(this,arguments)}function F(){return(F=jt(function*(){Kn(),yield k.flush()})).apply(this,arguments)}function Z(){return je.apply(this,arguments)}function je(){return(je=jt(function*(){var D;if(!m()){var ve=(D=n(w))===null||D===void 0?void 0:D.activeItem;if(a("handleReplace",{replaceText:n(g),activeItem:ve}),n(w)&&ve&&i()!==void 0){S(w,Ie(Ie({},$m(n(w))),{},{activeIndex:n(o)}));var{operations:Y,newSelection:V}=Uk(i(),l(),n(g),ve,c());j()(Y,(Qe,rt)=>({state:rt,selection:V})),Kn(),yield O.flush(),yield le()}}})).apply(this,arguments)}function Q(){return we.apply(this,arguments)}function we(){return(we=jt(function*(){if(!m()){a("handleReplaceAll",{text:n(p),replaceText:n(g)});var{operations:D,newSelection:ve}=function(Y,V,Qe,rt,Ce){for(var lt=Pm(Qe,Y,{maxResults:1/0}),Ae=[],We=0;We<lt.length;We++){var it=lt[We-1],Ue=lt[We];We!==0&&Ue.field===it.field&&Ft(Ue.path,it.path)?Ht(Ae).items.push(Ue):Ae.push({path:Ue.path,field:Ue.field,items:[Ue]})}Ae.sort((N,U)=>N.field!==U.field?N.field===Yo.key?1:-1:U.path.length-N.path.length);var yt,$=[];return Ae.forEach(N=>{var{field:U,path:X,items:me}=N;if(U===Yo.key){var Ne=nn(X),qe=Xe(Y,Ne),pe=Ht(X),ge=ec(Ne,Object.keys(qe),pe,Rm(pe,rt,me));$=$.concat(ge),yt=Wi(Y,ge)}else{if(U!==Yo.value)throw new Error("Cannot replace: unknown type of search result field ".concat(U));var ft=Xe(Y,X);if(ft===void 0)throw new Error("Cannot replace: path not found ".concat(gt(X)));var at=typeof ft=="string"?ft:String(ft),Ke=la(Y,V,X),Ge=Rm(at,rt,me),qt=[{op:"replace",path:gt(X),value:Ke?Ge:Zi(Ge,Ce)}];$=$.concat(qt),yt=Wi(Y,qt)}}),{operations:$,newSelection:yt}}(i(),l(),n(p),n(g),c());j()(D,(Y,V)=>({state:V,selection:ve})),yield le()}})).apply(this,arguments)}function Re(D){D.select()}function Ee(){return ce.apply(this,arguments)}function ce(){return(ce=jt(function*(){S(w,n(w)?$m(n(w)):void 0),yield le()})).apply(this,arguments)}function B(){return L.apply(this,arguments)}function L(){return L=jt(function*(){S(w,n(w)?function(D){var ve=D.activeIndex>0?D.activeIndex-1:D.items.length-1,Y=D.items[ve],V=D.items.map((Qe,rt)=>Ie(Ie({},Qe),{},{active:rt===ve}));return Ie(Ie({},D),{},{items:V,activeItem:Y,activeIndex:ve})}(n(w)):void 0),yield le()}),L.apply(this,arguments)}function le(){return T.apply(this,arguments)}function T(){return(T=jt(function*(){var D;a("handleFocus",n(w));var ve=(D=n(w))===null||D===void 0?void 0:D.activeItem;ve&&i()!==void 0&&(yield h()(ve.path,ve.resultIndex))})).apply(this,arguments)}function E(){return E=jt(function*(D){yield Oe(D,n(p),i())}),E.apply(this,arguments)}function M(){return M=jt(function*(D){yield Oe(d(),D,i()),yield le()}),M.apply(this,arguments)}function oe(){return oe=jt(function*(D){yield Oe(d(),n(p),D)}),oe.apply(this,arguments)}function Oe(D,ve,Y){return ae.apply(this,arguments)}function ae(){return ae=jt(function*(D,ve,Y){return D?(a("applySearch",{showSearch:D,text:ve}),ve===""?(a("clearing search result"),n(w)!==void 0&&S(w,void 0),Promise.resolve()):(f=ve,S(x,!0),new Promise(V=>{setTimeout(()=>{var Qe=Pm(ve,Y,{maxResults:Xd,columns:b()});S(w,function(rt,Ce){var lt=Ce!=null&&Ce.activeItem?Nm(Ce.activeItem):void 0,Ae=rt.findIndex(Ue=>Ft(lt,Nm(Ue))),We=Ae!==-1?Ae:Ce?.activeIndex!==void 0&&Ce?.activeIndex<rt.length?Ce?.activeIndex:rt.length>0?0:-1,it=rt.map((Ue,yt)=>Ie(Ie({resultIndex:yt},Ue),{},{active:yt===We}));return{items:it,activeItem:it[We],activeIndex:We}}(Qe,n(w))),S(x,!1),V()})}))):(n(w)&&S(w,void 0),Promise.resolve())}),ae.apply(this,arguments)}function J(){a("handleClose"),k.cancel(),O.cancel(),Oe(!1,n(p),i()),v()()}fe(()=>n(w),()=>{var D;S(r,((D=n(w))===null||D===void 0||(D=D.items)===null||D===void 0?void 0:D.length)||0)}),fe(()=>n(w),()=>{var D;S(o,((D=n(w))===null||D===void 0?void 0:D.activeIndex)||0)}),fe(()=>(n(r),Xd),()=>{S(s,n(r)>=Xd?"".concat(999,"+"):String(n(r)))}),fe(()=>(C(y()),n(w)),()=>{y()(n(w))}),fe(()=>C(d()),()=>{(function(D){E.apply(this,arguments)})(d())}),fe(()=>n(p),()=>{k(n(p))}),fe(()=>C(i()),()=>{O(i())}),Sn(),Nt(!0);var be=Ut(),P=nt(be),I=D=>{var ve=E6(),Y=H(ve),V=H(Y),Qe=pe=>{var ge=_6(),ft=H(ge),at=ot(()=>u()?qa:Cl);rn(ft,{get data(){return n(at)}}),Te("click",ge,A),W(pe,ge)};ye(V,pe=>{m()||pe(Qe)});var rt=H(ie(V,2)),Ce=H(rt),lt=H(Ce),Ae=pe=>{rn(pe,{get data(){return sw},spin:!0})},We=pe=>{rn(pe,{get data(){return Zu}})};ye(lt,pe=>{n(x)?pe(Ae):pe(We,!1)});var it=ie(Ce,2),Ue=H(it);Gr(()=>Nu(Ue,()=>n(p),pe=>S(p,pe))),ao(Ue,pe=>Re?.(pe)),Gr(()=>Te("paste",Ue,G));var yt,$=ie(it,2),N=H($),U=ie($,2);rn(H(U),{get data(){return Ow}});var X=ie(U,2);rn(H(X),{get data(){return pw}});var me=ie(X,2);rn(H(me),{get data(){return ed}});var Ne=ie(rt,2),qe=pe=>{var ge=C6(),ft=H(ge),at=ie(ft,2),Ke=ie(at,2);Nu(ft,()=>n(g),Ge=>S(g,Ge)),Te("keydown",ft,ne),Te("click",at,Z),Te("click",Ke,Q),W(pe,ge)};ye(Ne,pe=>{u()&&!m()&&pe(qe)}),De(pe=>{var ge;yt=Rt($,1,"jse-search-count svelte-1x1x8q0",null,yt,pe),mt(N,"".concat(n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"").concat((ge=n(s))!==null&&ge!==void 0?ge:""))},[()=>({"jse-visible":n(p)!==""})]),Te("click",U,Ee),Te("click",X,B),Te("click",me,J),Te("keydown",Y,R),W(D,ve)};ye(P,D=>{d()&&D(I)}),W(e,be),ht()}var Il=Symbol("path");function O6(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(a,i,l){if(a.length<i)a.forEach(l);else for(var c=i>1?(a.length-1)/(i-1):a.length,d=0;d<i;d++){var u=Math.floor(d*c);l(a[u],u,a)}}(e,r,a=>{wn(a)?Nb(a,o,t):o[Il]=!0});var s=[];return Il in o&&s.push([]),Tb(o,[],s,t),s}function Nb(e,t,r){for(var o in e){var s=e[o],a=t[o]||(t[o]={});wn(s)&&r?Nb(s,a,r):a[Il]===void 0&&(a[Il]=!0)}}function Tb(e,t,r,o){for(var s in e){var a=t.concat(s),i=e[s];i&&i[Il]===!0&&r.push(a),jr(i)&&o&&Tb(i,a,r,o)}}function $6(e,t,r,o,s,a){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=fr(r)?r.length:0,c=function(f,g){var x=Object.values(f);if(vn(x))return g;var w=(k,O)=>k+O;return x.reduce(w)/x.length}(o,s),d=e-i,u=t+2*i,m=f=>o[f]||s,b=0,y=a;y<d&&b<l;)y+=m(b),b++;b>0&&(y-=m(--b));for(var h=b,j=0;j<u&&h<l;)j+=m(h),h++;for(var v=0,p=h;p<l;p++)v+=m(p);return{startIndex:b,endIndex:h,startHeight:y,endHeight:v,averageItemHeight:c,visibleHeight:j,visibleItems:fr(r)?r.slice(b,h):[]}}function Qm(e,t,r,o){for(var{rowIndex:s}=To(e,t),a=0,i=0;i<s;i++)a+=r[i]||o;return a}function To(e,t){var[r,...o]=e,s=parseInt(r,10);return{rowIndex:isNaN(s)?-1:s,columnIndex:t.findIndex(a=>fa(o,a))}}function Os(e,t){var{rowIndex:r,columnIndex:o}=e;return[String(r),...t[o]]}function P6(e,t){var[r,o]=Ay(e,i=>Ev(i.path[0])),s=ky(r,M6),a=$y(s,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var d=function(u,m){var b=To(u.path,m);return b.columnIndex!==-1?b.columnIndex:-1}(c,t);d!==-1?(l.columns[d]===void 0&&(l.columns[d]=[]),l.columns[d].push(c)):l.row.push(c)}),l});return{root:o,rows:a}}function di(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>go(r.path)+" "+r.message).join(", "),severity:Go.warning}}function M6(e){return parseInt(e.path[0],10)}function R6(e,t,r){var o=t.some(s=>function(a,i,l){if(!a)return!1;if(i.op==="replace"){var c=bo(i.path),{rowIndex:d,columnIndex:u}=To(c,l),m=l.findIndex(b=>Ft(b,a.path));if(d!==-1&&u!==-1&&u!==m)return!1}return!0}(e,s,r));return o?void 0:e}var oo=Ur("jsoneditor:actions");function Ab(e){return ev.apply(this,arguments)}function ev(){return ev=jt(function*(e){var{json:t,selection:r,indentation:o,readOnly:s,parser:a,onPatch:i}=e;if(!s&&t!==void 0&&r&&Si(r)){var l=rb(t,r,o,a);if(l!==void 0){oo("cut",{selection:r,clipboard:l,indentation:o}),yield Jv(l);var{operations:c,newSelection:d}=cb(t,r);i(c,(u,m)=>({state:m,selection:d}))}}}),ev.apply(this,arguments)}function qb(e){return tv.apply(this,arguments)}function tv(){return tv=jt(function*(e){var{json:t,selection:r,indentation:o,parser:s}=e,a=rb(t,r,o,s);a!==void 0&&(oo("copy",{clipboard:a,indentation:o}),yield Jv(a))}),tv.apply(this,arguments)}function zb(e){var{clipboardText:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onChangeText:l,onPasteMultilineText:c,openRepairModal:d}=e;if(!s)try{u(t)}catch{d(t,b=>{oo("repaired pasted text: ",b),u(b)})}function u(m){if(r!==void 0){var b=o||Qt([]),y=lb(r,b,m,a),h=function(j,v,p){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Nk;if(j.length>f)return!1;var g=/\n/.test(j);if(!g)return!1;var x=v.some(k=>k.op==="replace"&&Array.isArray(k.value)),w=v.filter(k=>k.op==="add").length>1;if(!x&&!w)return!1;try{return Gl(j,p.parse),!1}catch{return!0}}(t,y,a);oo("paste",{pastedText:m,operations:y,ensureSelection:b,pasteMultilineText:h}),i(y,(j,v)=>{var p=v;return y.filter(f=>(cg(f)||av(f))&&lr(f.value)).forEach(f=>{var g=Jo(r,f.path);p=Js(j,p,g)}),{state:p}}),h&&c(m)}else oo("paste text",{pastedText:m}),l(t,(j,v)=>{if(j)return{state:Js(j,v,[])}})}}function Ib(e){var{json:t,text:r,selection:o,keepSelection:s,readOnly:a,onChange:i,onPatch:l}=e;if(!a&&o){var c=t!==void 0&&(Lr(o)||mn(o))?ro(o.path,o.path):o;if(vn(ut(o)))oo("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:d,newSelection:u}=cb(t,c);oo("remove",{operations:d,selection:o,newSelection:u}),l(d,(m,b)=>({state:b,selection:s?o:u}))}}}function Qu(e){var{insertType:t,selectInside:r,initialValue:o,json:s,selection:a,readOnly:i,parser:l,onPatch:c,onReplaceJson:d}=e;if(!i){var u=function(j,v,p){if(p==="object")return{};if(p==="array")return[];if(p==="structure"&&j!==void 0){var f=v?tb(v):[],g=Xe(j,f);if(Array.isArray(g)&&!vn(g)){var x=Pa(g);return lr(x)?vy(x,w=>Array.isArray(w)?[]:wn(w)?void 0:""):""}}return""}(s,a,t);if(s!==void 0){var m=l.stringify(u),b=lb(s,a,m,l);oo("onInsert",{insertType:t,operations:b,newValue:u,data:m});var y=Ht(b.filter(j=>j.op==="add"||j.op==="replace"));c(b,(j,v,p)=>{if(y){var f=Jo(j,y.path);if(lr(u))return{state:Bo(j,v,f,Fv),selection:r?Ua(f):p};if(u===""){var g=vn(f)?void 0:Xe(j,nn(f));return{state:Bo(j,v,f,bu),selection:wn(g)?Vv(f,o):Du(f,o)}}}}),oo("after patch")}else{oo("onInsert",{insertType:t,newValue:u});var h=[];d(u,(j,v)=>({state:Js(j,v,h),selection:lr(u)?Ua(h):Du(h)}))}}}function Db(e){return nv.apply(this,arguments)}function nv(){return nv=jt(function*(e){var{char:t,selectInside:r,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c,onSelect:d}=e;a||(Lr(s)?d(Ie(Ie({},s),{},{edit:!0,initialValue:t})):t==="{"?Qu({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):t==="["?Qu({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):mn(s)&&o!==void 0?lr(Xe(o,s.path))||d(Ie(Ie({},s),{},{edit:!0,initialValue:t})):(oo("onInsertValueWithCharacter",{char:t}),yield function(u){return rv.apply(this,arguments)}({char:t,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c})))}),nv.apply(this,arguments)}function rv(){return rv=jt(function*(e){var{char:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l}=e;s||Qu({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l})}),rv.apply(this,arguments)}Ot(`/* over all fonts, sizes, and colors */
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
}`);var N6=he('<div class="jse-json-preview svelte-25xmyd"> </div>');function Lb(e,t){pt(t,!1);var r=K(),o=K(),s=_(t,"text",8),a=_(t,"json",8),i=_(t,"indentation",8),l=_(t,"parser",8);fe(()=>(C(a()),C(s())),()=>{S(r,a()!==void 0?{json:a()}:{text:s()||""})}),fe(()=>(n(r),C(i()),C(l()),Au),()=>{S(o,Ca(If(n(r),i(),l()),Au))}),Sn(),Nt();var c=N6(),d=H(c);De(()=>mt(d,n(o))),W(e,c),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var T6=he('<button type="button"><!> <!></button>');function ff(e,t){pt(t,!1);var r=_(t,"item",8),o=_(t,"className",8,void 0),s=_(t,"onRequestClose",8);Nt();var a=T6(),i=H(a),l=u=>{rn(u,{get data(){return C(r()),te(()=>r().icon)}})};ye(i,u=>{C(r()),te(()=>r().icon)&&u(l)});var c=ie(i,2),d=u=>{var m=Br();De(()=>mt(m,(C(r()),te(()=>r().text)))),W(u,m)};ye(c,u=>{C(r()),te(()=>r().text)&&u(d)}),De(u=>{Rt(a,1,u,"svelte-16jz6ui"),kn(a,"title",(C(r()),te(()=>r().title))),a.disabled=(C(r()),te(()=>r().disabled||!1))},[()=>cs((C(ea),C(o()),C(r()),te(()=>ea("jse-context-menu-button",o(),r().className))))]),Te("click",a,u=>{s()(),r().onClick(u)}),W(e,a),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var A6=he('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),q6=he('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');Ot(`/* over all fonts, sizes, and colors */
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
}`);var z6=he('<button type="button" slot="defaultItem"><!> </button>');function vf(e,t){pt(t,!1);var r=K(),o=_(t,"item",8),s=_(t,"className",8,void 0),a=_(t,"onRequestClose",8);fe(()=>(C(o()),C(a())),()=>{S(r,o().items.map(i=>Ie(Ie({},i),{},{onClick:l=>{a()(),i.onClick(l)}})))}),Sn(),Nt(),function(i,l){pt(l,!1);var c=K(void 0,!0),d=_(l,"items",25,()=>[]),u=_(l,"title",9,void 0),m=_(l,"width",9,"120px"),b=K(!1,!0);function y(){S(b,!1)}function h(w){Da(w)==="Escape"&&(w.preventDefault(),S(b,!1))}no(()=>{document.addEventListener("click",y),document.addEventListener("keydown",h)}),Lo(()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",h)}),fe(()=>C(d()),()=>{S(c,d().every(w=>w.disabled===!0))}),Sn(),Nt(!0);var j=q6(),v=H(j);dr(v,l,"defaultItem",{},null);var p,f=ie(v,2);rn(H(f),{get data(){return qa}});var g,x=ie(f,2);vr(H(x),5,d,_r,(w,k)=>{var O=A6(),A=H(O),R=H(A),ne=F=>{rn(F,{get data(){return n(k),te(()=>n(k).icon)}})};ye(R,F=>{n(k),te(()=>n(k).icon)&&F(ne)});var G=ie(R);De(()=>{var F;kn(A,"title",(n(k),te(()=>n(k).title))),A.disabled=(n(k),te(()=>n(k).disabled)),Rt(A,1,cs((n(k),te(()=>n(k).className))),"svelte-bov1j6"),mt(G," ".concat((n(k),(F=te(()=>n(k).text))!==null&&F!==void 0?F:"")))}),Te("click",A,F=>n(k).onClick(F)),W(w,O)}),De((w,k)=>{var O;kn(j,"title",u()),p=Rt(f,1,"jse-open-dropdown svelte-bov1j6",null,p,w),f.disabled=n(c),g=Rt(x,1,"jse-dropdown-items svelte-bov1j6",null,g,k),Io(x,"width: ".concat((O=m())!==null&&O!==void 0?O:"",";"))},[()=>({"jse-visible":n(b)}),()=>({"jse-visible":n(b)})]),Te("click",f,function(){var w=n(b);setTimeout(()=>S(b,!w))}),Te("click",j,y),W(i,j),ht()}(e,{get width(){return C(o()),te(()=>o().width)},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=z6(),d=H(c),u=b=>{rn(b,{get data(){return C(o()),te(()=>o().main.icon)}})};ye(d,b=>{C(o()),te(()=>o().main.icon)&&b(u)});var m=ie(d);De(b=>{var y;Rt(c,1,b,"svelte-1y5l9l1"),kn(c,"title",(C(o()),te(()=>o().main.title))),c.disabled=(C(o()),te(()=>o().main.disabled||!1)),mt(m," ".concat((C(o()),(y=te(()=>o().main.text))!==null&&y!==void 0?y:"")))},[()=>cs((C(ea),C(s()),C(o()),te(()=>ea("jse-context-menu-button",s(),o().main.className))))]),Te("click",c,b=>{a()(),o().main.onClick(b)}),W(i,c)}}}),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);var I6=he('<div class="jse-separator svelte-1shjn02"></div>'),D6=he('<div class="jse-label svelte-1shjn02"> </div>'),L6=he('<div class="jse-column svelte-1shjn02"></div>'),U6=he('<div class="jse-separator svelte-1shjn02"></div>'),F6=he('<div class="jse-row svelte-1shjn02"></div>'),V6=he('<div class="jse-separator svelte-1shjn02"></div>'),B6=he('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),W6=he('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function Ub(e,t){pt(t,!1);var r=_(t,"items",9),o=_(t,"onRequestClose",9),s=_(t,"tip",9),a=K(void 0,!0);no(()=>{var b=Array.from(n(a).querySelectorAll("button")).find(y=>!y.disabled);b&&b.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(b){return console.error("Unknown type of context menu item",b),"???"}Nt(!0);var c=W6(),d=H(c);vr(d,1,r,_r,(b,y)=>{var h=Ut(),j=nt(h),v=f=>{ff(f,{get item(){return n(y)},get onRequestClose(){return o()}})},p=f=>{var g=Ut(),x=nt(g),w=O=>{vf(O,{get item(){return n(y)},get onRequestClose(){return o()}})},k=O=>{var A=Ut(),R=nt(A),ne=F=>{var Z=F6();vr(Z,5,()=>(n(y),te(()=>n(y).items)),_r,(je,Q)=>{var we=Ut(),Re=nt(we),Ee=B=>{ff(B,{get item(){return n(Q)},get onRequestClose(){return o()}})},ce=B=>{var L=Ut(),le=nt(L),T=M=>{vf(M,{get item(){return n(Q)},get onRequestClose(){return o()}})},E=M=>{var oe=Ut(),Oe=nt(oe),ae=be=>{var P=L6();vr(P,5,()=>(n(Q),te(()=>n(Q).items)),_r,(I,D)=>{var ve=Ut(),Y=nt(ve),V=rt=>{ff(rt,{className:"left",get item(){return n(D)},get onRequestClose(){return o()}})},Qe=rt=>{var Ce=Ut(),lt=nt(Ce),Ae=it=>{vf(it,{className:"left",get item(){return n(D)},get onRequestClose(){return o()}})},We=it=>{var Ue=Ut(),yt=nt(Ue),$=U=>{W(U,I6())},N=U=>{var X=Ut(),me=nt(X),Ne=pe=>{var ge=D6(),ft=H(ge);De(()=>mt(ft,(n(D),te(()=>n(D).text)))),W(pe,ge)},qe=pe=>{var ge=Br();De(ft=>mt(ge,ft),[()=>(n(D),te(()=>l(n(D))))]),W(pe,ge)};ye(me,pe=>{C(pm),n(D),te(()=>pm(n(D)))?pe(Ne):pe(qe,!1)},!0),W(U,X)};ye(yt,U=>{C(Ja),n(D),te(()=>Ja(n(D)))?U($):U(N,!1)},!0),W(it,Ue)};ye(lt,it=>{C(ci),n(D),te(()=>ci(n(D)))?it(Ae):it(We,!1)},!0),W(rt,Ce)};ye(Y,rt=>{C(Sa),n(D),te(()=>Sa(n(D)))?rt(V):rt(Qe,!1)}),W(I,ve)}),W(be,P)},J=be=>{var P=Ut(),I=nt(P),D=Y=>{W(Y,U6())},ve=Y=>{var V=Br();De(Qe=>mt(V,Qe),[()=>(n(Q),te(()=>l(n(Q))))]),W(Y,V)};ye(I,Y=>{C(Ja),n(Q),te(()=>Ja(n(Q)))?Y(D):Y(ve,!1)},!0),W(be,P)};ye(Oe,be=>{C(mm),n(Q),te(()=>mm(n(Q)))?be(ae):be(J,!1)},!0),W(M,oe)};ye(le,M=>{C(ci),n(Q),te(()=>ci(n(Q)))?M(T):M(E,!1)},!0),W(B,L)};ye(Re,B=>{C(Sa),n(Q),te(()=>Sa(n(Q)))?B(Ee):B(ce,!1)}),W(je,we)}),W(F,Z)},G=F=>{var Z=Ut(),je=nt(Z),Q=Re=>{W(Re,V6())},we=Re=>{var Ee=Br();De(ce=>mt(Ee,ce),[()=>(n(y),te(()=>l(n(y))))]),W(Re,Ee)};ye(je,Re=>{C(Ja),n(y),te(()=>Ja(n(y)))?Re(Q):Re(we,!1)},!0),W(F,Z)};ye(R,F=>{C(hm),n(y),te(()=>hm(n(y)))?F(ne):F(G,!1)},!0),W(O,A)};ye(x,O=>{C(ci),n(y),te(()=>ci(n(y)))?O(w):O(k,!1)},!0),W(f,g)};ye(j,f=>{C(Sa),n(y),te(()=>Sa(n(y)))?f(v):f(p,!1)}),W(b,h)});var u=ie(d,2),m=b=>{var y=B6(),h=H(y),j=H(h);rn(H(j),{get data(){return nw}});var v=H(ie(j,2));De(()=>mt(v,s())),W(b,y)};ye(u,b=>{s()&&b(m)}),er(c,b=>S(a,b),()=>n(a)),Te("keydown",c,function(b){var y=Da(b),h=i[y];if(h&&b.target){b.preventDefault();var j=fk({allElements:Array.from(n(a).querySelectorAll("button:not([disabled])")),currentElement:b.target,direction:h,hasPrio:v=>v.getAttribute("data-type")!=="jse-open-dropdown"});j&&j.focus()}}),W(e,c),ht()}Ot(`/* over all fonts, sizes, and colors */
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
}`);he("<option> </option>");he("<select></select>");var lu,cu;function uu(e,t){return lu||(cu=new WeakMap,lu=new ResizeObserver(r=>{for(var o of r){var s=cu.get(o.target);s&&s(o.target)}})),cu.set(e,t),lu.observe(e),{destroy:()=>{cu.delete(e),lu.unobserve(e)}}}Ot(`/* over all fonts, sizes, and colors */
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
}`);var H6=he("<!> <!>",1),K6=he('<div class="jse-search-box-background svelte-10mlrw4"></div>'),J6=he('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),Q6=he('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),G6=he('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),Y6=he('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function ov(e,t){pt(t,!1);var r=K(void 0,!0),o=Ur("jsoneditor:TreeMode"),s=typeof window>"u";o("isSSR:",s);var a=qi(),i=qi(),{openAbsolutePopup:l,closeAbsolutePopup:c}=ps("absolute-popup"),d=K(void 0,!0),u=K(void 0,!0),m=K(void 0,!0),b=!1,y=Sb(),h=_(t,"readOnly",9),j=_(t,"externalContent",9),v=_(t,"externalSelection",9),p=_(t,"history",9),f=_(t,"truncateTextSize",9),g=_(t,"mainMenuBar",9),x=_(t,"navigationBar",9),w=_(t,"escapeControlCharacters",9),k=_(t,"escapeUnicodeCharacters",9),O=_(t,"parser",9),A=_(t,"parseMemoizeOne",9),R=_(t,"validator",9),ne=_(t,"validationParser",9),G=_(t,"pathParser",9),F=_(t,"indentation",9),Z=_(t,"onError",9),je=_(t,"onChange",9),Q=_(t,"onChangeMode",9),we=_(t,"onSelect",9),Re=_(t,"onUndo",9),Ee=_(t,"onRedo",9),ce=_(t,"onRenderValue",9),B=_(t,"onRenderMenu",9),L=_(t,"onRenderContextMenu",9),le=_(t,"onClassName",9),T=_(t,"onFocus",9),E=_(t,"onBlur",9),M=_(t,"onSortModal",9),oe=_(t,"onTransformModal",9),Oe=_(t,"onJSONEditorModal",9),ae=!1,J=K(!1,!0),be=K(void 0,!0);Hv({onMount:no,onDestroy:Lo,getWindow:()=>Yl(n(m)),hasFocus:()=>ae&&document.hasFocus()||Mv(n(m)),onFocus:()=>{b=!0,T()&&T()()},onBlur:()=>{b=!1,E()&&E()()}});var P=K(void 0,!0),I=K(void 0,!0),D=void 0,ve=!1,Y=K(Ff({json:n(P)}),!0),V=K(Nl(v())?v():void 0,!0);function Qe(q){S(V,q)}no(()=>{if(n(V)){var q=ut(n(V));S(Y,Bo(n(P),n(Y),q,bu)),setTimeout(()=>sr(q))}});var rt,Ce=K(void 0,!0),lt=K(void 0,!0),Ae=K(void 0,!0),We=K(void 0,!0),it=K(!1,!0),Ue=K(!1,!0);function yt(q){S(We,(rt=q)?db(n(P),rt.items):void 0)}function $(q,re){return N.apply(this,arguments)}function N(){return(N=jt(function*(q,re){S(Y,Bo(n(P),n(Y),q,bu));var _e=mr(re);yield Xt(q,{element:_e})})).apply(this,arguments)}function U(){S(it,!1),S(Ue,!1),_t()}function X(q){o("select validation error",q),S(V,Qt(q.path)),Xt(q.path)}function me(q){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vf;o("expand"),S(Y,Bo(n(P),n(Y),q,re))}function Ne(q,re){S(Y,jm(n(P),n(Y),q,re)),n(V)&&function(_e,He){return fa(ut(_e),He)&&(ut(_e).length>He.length||zr(_e))}(n(V),q)&&S(V,void 0)}var qe=K(!1,!0),pe=K([],!0),ge=K(void 0,!0),ft=_l(_b);function at(q,re,_e,He){Ci(()=>{var Ve;try{Ve=ft(q,re,_e,He)}catch(Le){Ve=[{path:[],message:"Failed to validate: "+Le.message,severity:Go.warning}]}Ft(Ve,n(pe))||(o("validationErrors changed:",Ve),S(pe,Ve),S(ge,function(Le,Ct){var Et;return Ct.forEach(Wt=>{Et=Hm(Le,Et,Wt.path,(En,tn)=>Ie(Ie({},tn),{},{validationError:Wt}))}),Ct.forEach(Wt=>{for(var En=Wt.path;En.length>0;)En=nn(En),Et=Hm(Le,Et,En,(tn,Vn)=>Vn.validationError?Vn:Ie(Ie({},Vn),{},{validationError:{isChildError:!0,path:En,message:"Contains invalid data",severity:Go.warning}}))}),Et}(q,n(pe))))},Ve=>o("validationErrors updated in ".concat(Ve," ms")))}function Ke(){return o("validate"),D?{parseError:D,isRepairable:!1}:(at(n(P),R(),O(),ne()),vn(n(pe))?void 0:{validationErrors:n(pe)})}function Ge(){return n(P)}function qt(){return n(Y)}function _n(){return n(V)}function $n(q){o("applyExternalContent",{updatedContent:q}),$l(q)?function(re){if(re!==void 0){var _e=!Ft(n(P),re);if(o("update external json",{isChanged:_e,currentlyText:n(P)===void 0}),!!_e){var He={documentState:n(Y),selection:n(V),json:n(P),text:n(I),textIsRepaired:n(qe)};S(P,re),S(Y,Eo(re,n(Y))),Dt(n(P)),S(I,void 0),S(qe,!1),D=void 0,pn(n(P)),Vt(He)}}}(q.json):Ol(q)&&function(re){if(!(re===void 0||$l(j()))){var _e=re!==n(I);if(o("update external text",{isChanged:_e}),!!_e){var He={documentState:n(Y),selection:n(V),json:n(P),text:n(I),textIsRepaired:n(qe)};try{S(P,A()(re)),S(Y,Eo(n(P),n(Y))),Dt(n(P)),S(I,re),S(qe,!1),D=void 0}catch(Ve){try{S(P,A()(ca(re))),S(Y,Eo(n(P),n(Y))),Dt(n(P)),S(I,re),S(qe,!0),D=void 0,pn(n(P))}catch{S(P,void 0),S(Y,void 0),S(I,j().text),S(qe,!1),D=n(I)!==void 0&&n(I)!==""?Fi(n(I),Ve.message||String(Ve)):void 0}}pn(n(P)),Vt(He)}}}(q.text)}function Dt(q){ve||(ve=!0,S(Y,Js(q,n(Y),[])))}function pn(q){n(V)&&(zo(q,Ds(n(V)))&&zo(q,ut(n(V)))||(o("clearing selection: path does not exist anymore",n(V)),S(V,ui(q,n(Y)))))}function Vt(q){if(q.json!==void 0||q.text!==void 0){var re=n(P)!==void 0&&q.json!==void 0;p().add({type:"tree",undo:{patch:re?[{op:"replace",path:"",value:q.json}]:void 0,json:q.json,text:q.text,documentState:q.documentState,textIsRepaired:q.textIsRepaired,selection:ia(q.selection),sortedColumn:void 0},redo:{patch:re?[{op:"replace",path:"",value:n(P)}]:void 0,json:n(P),text:n(I),documentState:n(Y),textIsRepaired:n(qe),selection:ia(n(V)),sortedColumn:void 0}})}}function Gt(q,re){var _e;if(o("patch",q,re),n(P)===void 0)throw new Error("Cannot apply patch: no JSON");var He=n(P),Ve={json:void 0,text:n(I),documentState:n(Y),selection:ia(n(V)),textIsRepaired:n(qe),sortedColumn:void 0},Le=ub(n(P),q),Ct=X0(n(P),n(Y),q),Et=(_e=Wi(n(P),q))!==null&&_e!==void 0?_e:n(V),Wt=typeof re=="function"?re(Ct.json,Ct.documentState,Et):void 0;return S(P,Wt?.json!==void 0?Wt.json:Ct.json),S(Y,Wt?.state!==void 0?Wt.state:Ct.documentState),S(V,Wt?.selection!==void 0?Wt.selection:Et),S(I,void 0),S(qe,!1),S(lt,void 0),S(Ae,void 0),D=void 0,pn(n(P)),p().add({type:"tree",undo:Ie({patch:Le},Ve),redo:{patch:q,json:void 0,text:n(I),documentState:n(Y),selection:ia(n(V)),sortedColumn:void 0,textIsRepaired:n(qe)}}),{json:n(P),previousJson:He,undo:Le,redo:q}}function fn(){!h()&&n(V)&&S(V,Vv(ut(n(V))))}function bt(){if(!h()&&n(V)){var q=ut(n(V)),re=Xe(n(P),q);lr(re)?function(_e,He){o("openJSONEditorModal",{path:_e,value:He}),ae=!0,Oe()({content:{json:He},path:_e,onPatch:n(Cn).onPatch,onClose:()=>{ae=!1,setTimeout(_t)}})}(q,re):S(V,Du(q))}}function on(){if(!h()&&mn(n(V))){var q=ut(n(V)),re=gt(q),_e=Xe(n(P),q),He=!la(n(P),n(Y),q),Ve=He?String(_e):Zi(String(_e),O());o("handleToggleEnforceString",{enforceString:He,value:_e,updatedValue:Ve}),ke([{op:"replace",path:re,value:Ve}],(Le,Ct)=>({state:ud(n(P),Ct,q,{type:"value",enforceString:He})}))}}function $t(){return n(qe)&&n(P)!==void 0&&ze(n(P)),n(P)!==void 0?{json:n(P)}:{text:n(I)||""}}function tt(){return Bt.apply(this,arguments)}function Bt(){return Bt=jt(function*(){var q=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Ab({json:n(P),selection:n(V),indentation:q?F():void 0,readOnly:h(),parser:O(),onPatch:ke})}),Bt.apply(this,arguments)}function At(){return Pn.apply(this,arguments)}function Pn(){return Pn=jt(function*(){var q=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(P)!==void 0&&(yield qb({json:n(P),selection:n(V),indentation:q?F():void 0,parser:O()}))}),Pn.apply(this,arguments)}function Bn(q){var re;q.preventDefault(),Jn((re=q.clipboardData)===null||re===void 0?void 0:re.getData("text/plain"))}function Fn(){return cr.apply(this,arguments)}function cr(){return(cr=jt(function*(){try{Jn(yield navigator.clipboard.readText())}catch(q){console.error(q),S(J,!0)}})).apply(this,arguments)}function Jn(q){q!==void 0&&zb({clipboardText:q,json:n(P),selection:n(V),readOnly:h(),parser:O(),onPatch:ke,onChangeText:ee,onPasteMultilineText:Dn,openRepairModal:ar})}function ar(q,re){S(be,{text:q,onParse:_e=>Gl(_e,He=>Ql(He,O())),onRepair:I0,onApply:re,onClose:_t})}function pr(){Ib({json:n(P),text:n(I),selection:n(V),keepSelection:!1,readOnly:h(),onChange:je(),onPatch:ke})}function tr(){!h()&&n(P)!==void 0&&n(V)&&Si&&!vn(ut(n(V)))&&(o("duplicate",{selection:n(V)}),ke(sb(n(P),us(n(P),n(V)))))}function Cr(){h()||!n(V)||!Ln(n(V))&&!mn(n(V))||vn(ut(n(V)))||(o("extract",{selection:n(V)}),ke(ib(n(P),n(V)),(q,re)=>{if(lr(q))return{state:rf(q,re,[])}}))}function hr(q){Qu({insertType:q,selectInside:!0,initialValue:void 0,json:n(P),selection:n(V),readOnly:h(),parser:O(),onPatch:ke,onReplaceJson:ze})}function wr(q){Lr(n(V))&&S(V,Qt(n(V).path)),n(V)||S(V,ui(n(P),n(Y))),hr(q)}function nr(q){if(!h()&&n(V))if(ru(n(V)))try{var re=Ds(n(V)),_e=Xe(n(P),re),He=function(Le,Ct,Et){if(Ct==="array"){if(Array.isArray(Le))return Le;if(wn(Le))return sm(Le);if(typeof Le=="string")try{var Wt=Et.parse(Le);if(Array.isArray(Wt))return Wt;if(wn(Wt))return sm(Wt)}catch{return[Le]}return[Le]}if(Ct==="object"){if(Array.isArray(Le))return am(Le);if(wn(Le))return Le;if(typeof Le=="string")try{var En=Et.parse(Le);if(wn(En))return En;if(Array.isArray(En))return am(En)}catch{return{value:Le}}return{value:Le}}if(Ct==="value")return lr(Le)?Et.stringify(Le):Le;throw new Error("Cannot convert ".concat(Ov(Le,Et)," to ").concat(Ct))}(_e,q,O());if(He===_e)return;var Ve=[{op:"replace",path:gt(re),value:He}];o("handleConvert",{selection:n(V),path:re,type:q,operations:Ve}),ke(Ve,(Le,Ct)=>({state:n(V)?Js(Le,Ct,ut(n(V))):n(Y)}))}catch(Le){Z()(Le)}else Z()(new Error("Cannot convert current selection to ".concat(q)))}function Pe(){if(n(V)){var q=Sm(n(P),n(Y),n(V),!1),re=nn(ut(n(V)));q&&!vn(ut(q))&&Ft(re,nn(ut(q)))?S(V,Ta(ut(q))):S(V,Ua(re)),o("insert before",{selection:n(V),selectionBefore:q,parentPath:re}),Kn(),an()}}function zt(){if(n(V)){var q=ss(n(P),n(V));o("insert after",q),S(V,Ta(q)),Kn(),an()}}function xn(q){return In.apply(this,arguments)}function In(){return(In=jt(function*(q){yield Db({char:q,selectInside:!0,json:n(P),selection:n(V),readOnly:h(),parser:O(),onPatch:ke,onReplaceJson:ze,onSelect:Qe})})).apply(this,arguments)}function ur(){if(!h()&&p().canUndo){var q=p().undo();if(zu(q)){var re={json:n(P),text:n(I)};S(P,q.undo.patch?Ko(n(P),q.undo.patch):q.undo.json),S(Y,q.undo.documentState),S(V,q.undo.selection),S(I,q.undo.text),S(qe,q.undo.textIsRepaired),D=void 0,o("undo",{item:q,json:n(P),documentState:n(Y),selection:n(V)}),se(re,q.undo.patch&&q.redo.patch?{json:n(P),previousJson:re.json,redo:q.undo.patch,undo:q.redo.patch}:void 0),_t(),n(V)&&Xt(ut(n(V)),{scrollToWhenVisible:!1})}else Re()(q)}}function Nr(){if(!h()&&p().canRedo){var q=p().redo();if(zu(q)){var re={json:n(P),text:n(I)};S(P,q.redo.patch?Ko(n(P),q.redo.patch):q.redo.json),S(Y,q.redo.documentState),S(V,q.redo.selection),S(I,q.redo.text),S(qe,q.redo.textIsRepaired),D=void 0,o("redo",{item:q,json:n(P),documentState:n(Y),selection:n(V)}),se(re,q.undo.patch&&q.redo.patch?{json:n(P),previousJson:re.json,redo:q.redo.patch,undo:q.undo.patch}:void 0),_t(),n(V)&&Xt(ut(n(V)),{scrollToWhenVisible:!1})}else Ee()(q)}}function Kt(q){var re;h()||n(P)===void 0||(ae=!0,M()({id:a,json:n(P),rootPath:q,onSort:(re=jt(function*(_e){var{operations:He}=_e;o("onSort",q,He),ke(He,(Ve,Le)=>({state:rf(Ve,Le,q),selection:Qt(q)}))}),function(_e){return re.apply(this,arguments)}),onClose:()=>{ae=!1,setTimeout(_t)}}))}function xr(){n(V)&&Kt(Cm(n(P),n(V)))}function Wr(){Kt([])}function rr(q){if(n(P)!==void 0){var{id:re,onTransform:_e,onClose:He}=q,Ve=q.rootPath||[];ae=!0,oe()({id:re||i,json:n(P),rootPath:Ve,onTransform:Le=>{_e?_e({operations:Le,json:n(P),transformedJson:Ko(n(P),Le)}):(o("onTransform",Ve,Le),ke(Le,(Ct,Et)=>({state:rf(Ct,Et,Ve),selection:Qt(Ve)})))},onClose:()=>{ae=!1,setTimeout(_t),He&&He()}})}}function Fr(){n(V)&&rr({rootPath:Cm(n(P),n(V))})}function Mn(){rr({rootPath:[]})}function Xt(q){return Tt.apply(this,arguments)}function Tt(){return Tt=jt(function*(q){var{scrollToWhenVisible:re=!0,element:_e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};S(Y,Bo(n(P),n(Y),q,bu));var He=_e??Tn(q);if(o("scrollTo",{path:q,elem:He,refContents:n(d)}),!He||!n(d))return Promise.resolve();var Ve=n(d).getBoundingClientRect(),Le=He.getBoundingClientRect();if(!re&&Le.bottom>Ve.top&&Le.top<Ve.bottom)return Promise.resolve();var Ct=-Ve.height/4;return new Promise(Et=>{y(He,{container:n(d),offset:Ct,duration:300,callback:()=>Et()})})}),Tt.apply(this,arguments)}function Tn(q){var re,_e;return Kn(),(re=(_e=n(d))===null||_e===void 0?void 0:_e.querySelector('div[data-path="'.concat(gu(q),'"]')))!==null&&re!==void 0?re:void 0}function mr(q){var re,_e;return Kn(),(re=(_e=n(d))===null||_e===void 0?void 0:_e.querySelector('span[data-search-result-index="'.concat(q,'"]')))!==null&&re!==void 0?re:void 0}function sr(q){var re=Tn(q);if(re&&n(d)){var _e=n(d).getBoundingClientRect(),He=re.getBoundingClientRect(),Ve=lr(Xe(n(P),q))?20:He.height;He.top<_e.top+20?y(re,{container:n(d),offset:-20,duration:0}):He.top+Ve>_e.bottom-20&&y(re,{container:n(d),offset:-(_e.height-Ve-20),duration:0})}}function se(q,re){if(q.json!==void 0||q?.text!==void 0){if(n(I)!==void 0){var _e,He={text:n(I),json:void 0};(_e=je())===null||_e===void 0||_e(He,q,{contentErrors:Ke(),patchResult:re})}else if(n(P)!==void 0){var Ve,Le={text:void 0,json:n(P)};(Ve=je())===null||Ve===void 0||Ve(Le,q,{contentErrors:Ke(),patchResult:re})}}}function ke(q,re){o("handlePatch",q,re);var _e={json:n(P),text:n(I)},He=Gt(q,re);return se(_e,He),He}function ze(q,re){var _e={json:n(P),text:n(I)},He={documentState:n(Y),selection:n(V),json:n(P),text:n(I),textIsRepaired:n(qe)},Ve=Bo(n(P),Eo(q,n(Y)),[],wl),Le=typeof re=="function"?re(q,Ve,n(V)):void 0;S(P,Le?.json!==void 0?Le.json:q),S(Y,Le?.state!==void 0?Le.state:Ve),S(V,Le?.selection!==void 0?Le.selection:n(V)),S(I,void 0),S(qe,!1),D=void 0,pn(n(P)),Vt(He),se(_e,void 0)}function ee(q,re){o("handleChangeText");var _e={json:n(P),text:n(I)},He={documentState:n(Y),selection:n(V),json:n(P),text:n(I),textIsRepaired:n(qe)};try{S(P,A()(q)),S(Y,Bo(n(P),Eo(n(P),n(Y)),[],wl)),S(I,void 0),S(qe,!1),D=void 0}catch(Le){try{S(P,A()(ca(q))),S(Y,Bo(n(P),Eo(n(P),n(Y)),[],wl)),S(I,q),S(qe,!0),D=void 0}catch{S(P,void 0),S(Y,Ff({json:n(P),expand:wl})),S(I,q),S(qe,!1),D=n(I)!==""?Fi(n(I),Le.message||String(Le)):void 0}}if(typeof re=="function"){var Ve=re(n(P),n(Y),n(V));S(P,Ve?.json!==void 0?Ve.json:n(P)),S(Y,Ve?.state!==void 0?Ve.state:n(Y)),S(V,Ve?.selection!==void 0?Ve.selection:n(V))}pn(n(P)),Vt(He),se(_e,void 0)}function ue(q,re){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:q,expanded:re,recursive:_e}),re?me(q,_e?Fv:Vf):Ne(q,_e),_t()}function $e(){ue([],!0,!0)}function Fe(){ue([],!1,!0)}function st(q){o("openFind",{findAndReplace:q}),S(it,!1),S(Ue,!1),Kn(),S(it,!0),S(Ue,q)}function ct(q,re){o("handleExpandSection",q,re),S(Y,function(_e,He,Ve,Le){return Bi(_e,He,Ve,(Ct,Et)=>{if(!Dr(Et))return Et;var Wt=Q0(Et.visibleSections.concat(Le));return Ie(Ie({},Et),{},{visibleSections:Wt})})}(n(P),n(Y),q,re))}function vt(q){o("pasted json as text",q),S(lt,q)}function Dn(q){o("pasted multiline text",{pastedText:q}),S(Ae,q)}function Jt(q){var re,{anchor:_e,left:He,top:Ve,width:Le,height:Ct,offsetTop:Et,offsetLeft:Wt,showTip:En}=q,tn=function(An){var{json:Gn,documentState:yn,selection:xt,readOnly:ln,onEditKey:kt,onEditValue:dt,onToggleEnforceString:It,onCut:or,onCopy:Yn,onPaste:Sr,onRemove:br,onDuplicate:Hr,onExtract:ga,onInsertBefore:jo,onInsert:Uo,onConvert:na,onInsertAfter:Fo,onSort:Kr,onTransform:Jr}=An,wo=Gn!==void 0,ba=!!xt,xo=!!xt&&vn(ut(xt)),On=xt?Xe(Gn,ut(xt)):void 0,Or=Array.isArray(On)?"Edit array":wn(On)?"Edit object":"Edit value",yr=wo&&(Ln(xt)||Lr(xt)||mn(xt)),gs=xt&&!xo?Xe(Gn,nn(ut(xt))):void 0,ei=!ln&&wo&&Iu(xt)&&!xo&&!Array.isArray(gs),bs=!ln&&wo&&xt!==void 0&&Iu(xt),tl=bs&&!lr(On),ti=!ln&&yr,nl=yr,gd=!ln&&ba,bd=!ln&&wo&&yr&&!xo,yd=!ln&&wo&&xt!==void 0&&(Ln(xt)||mn(xt))&&!xo,ra=yr,ys=ra?"Convert to:":"Insert:",$r=!ln&&(zr(xt)&&Array.isArray(On)||mo(xt)&&Array.isArray(gs)),uo=!ln&&(ra?ru(xt)&&!wn(On):ba),rl=!ln&&(ra?ru(xt)&&!Array.isArray(On):ba),ol=!ln&&(ra?ru(xt)&&lr(On):ba),js=xt!==void 0&&la(Gn,yn,ut(xt));function Xr(al){yr?al!=="structure"&&na(al):Uo(al)}return[{type:"row",items:[{type:"button",onClick:()=>kt(),icon:Oi,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!ei},{type:"dropdown-button",main:{type:"button",onClick:()=>dt(),icon:Oi,text:Or,title:"Edit the value (Double-click on the value)",disabled:!bs},width:"11em",items:[{type:"button",icon:Oi,text:Or,title:"Edit the value (Double-click on the value)",onClick:()=>dt(),disabled:!bs},{type:"button",icon:js?Pg:Rg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>It(),disabled:!tl}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>or(!0),icon:Ei,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!ti},width:"10em",items:[{type:"button",icon:Ei,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>or(!0),disabled:!ti},{type:"button",icon:Ei,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>or(!1),disabled:!ti}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Yn(!0),icon:Ya,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!nl},width:"12em",items:[{type:"button",icon:Ya,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Yn(!0),disabled:!nl},{type:"button",icon:Ya,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Yn(!1),disabled:!nl}]},{type:"button",onClick:()=>Sr(),icon:$g,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!gd}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Hr(),icon:Ag,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!bd},{type:"button",onClick:()=>ga(),icon:ww,text:"Extract",title:"Extract selected contents",disabled:!yd},{type:"button",onClick:()=>Kr(),icon:Cu,text:"Sort",title:"Sort array or object contents",disabled:ln||!yr},{type:"button",onClick:()=>Jr(),icon:Su,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:ln||!yr},{type:"button",onClick:()=>br(),icon:yf,text:"Remove",title:"Remove selected contents (Delete)",disabled:ln||!yr}]},{type:"column",items:[{type:"label",text:ys},{type:"button",onClick:()=>Xr("structure"),icon:ra?uc:wi,text:"Structure",title:ys+" structure like the first item in the array",disabled:!$r},{type:"button",onClick:()=>Xr("object"),icon:ra?uc:wi,text:"Object",title:ys+" object",disabled:!uo},{type:"button",onClick:()=>Xr("array"),icon:ra?uc:wi,text:"Array",title:ys+" array",disabled:!rl},{type:"button",onClick:()=>Xr("value"),icon:ra?uc:wi,text:"Value",title:ys+" value",disabled:!ol}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>jo(),icon:mw,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:ln||!yr||xo},{type:"button",onClick:()=>Fo(),icon:cw,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:ln||!yr||xo}]}]}({json:n(P),documentState:n(Y),selection:n(V),readOnly:h(),onEditKey:fn,onEditValue:bt,onToggleEnforceString:on,onCut:tt,onCopy:At,onPaste:Fn,onRemove:pr,onDuplicate:tr,onExtract:Cr,onInsertBefore:Pe,onInsert:wr,onInsertAfter:zt,onConvert:nr,onSort:xr,onTransform:Fr}),Vn=(re=L()(tn))!==null&&re!==void 0?re:tn;if(Vn!==!1){var Pt={left:He,top:Ve,offsetTop:Et,offsetLeft:Wt,width:Le,height:Ct,anchor:_e,closeOnOuterClick:!0,onClose:()=>{ae=!1,_t()}};ae=!0;var ir=l(Ub,{tip:En?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Vn,onRequestClose:()=>c(ir)},Pt)}}function an(q){if(!Ir(n(V)))if(q&&(q.stopPropagation(),q.preventDefault()),q&&q.type==="contextmenu"&&q.target!==n(u))Jt({left:q.clientX,top:q.clientY,width:Oa,height:Ea,showTip:!1});else{var re,_e=(re=n(d))===null||re===void 0?void 0:re.querySelector(".jse-context-menu-pointer.jse-selected");if(_e)Jt({anchor:_e,offsetTop:2,width:Oa,height:Ea,showTip:!1});else{var He,Ve=(He=n(d))===null||He===void 0?void 0:He.getBoundingClientRect();Ve&&Jt({top:Ve.top+2,left:Ve.left+2,width:Oa,height:Ea,showTip:!1})}}}function Mt(q){Jt({anchor:K0(q.target,"BUTTON"),offsetTop:0,width:Oa,height:Ea,showTip:!0})}function Zt(){return Tr.apply(this,arguments)}function Tr(){return(Tr=jt(function*(){if(o("apply pasted json",n(lt)),n(lt)){var{onPasteAsJson:q}=n(lt);S(lt,void 0),q(),setTimeout(_t)}})).apply(this,arguments)}function wt(){return bn.apply(this,arguments)}function bn(){return(bn=jt(function*(){o("apply pasted multiline text",n(Ae)),n(Ae)&&(Jn(JSON.stringify(n(Ae))),setTimeout(_t))})).apply(this,arguments)}function Yt(){o("clear pasted json"),S(lt,void 0),_t()}function hn(){o("clear pasted multiline text"),S(Ae,void 0),_t()}function Wn(){Q()(Rr.text)}function Rn(q){S(V,q),_t(),Xt(ut(q))}function _t(){o("focus"),n(u)&&(n(u).focus(),n(u).select())}function Er(q){return function(re,_e,He){var Ve=nn(He),Le=[Ht(He)],Ct=Xe(re,Ve),Et=Ct?nf(Ct,_e,Le):void 0;return Et?Qt(Ve.concat(Et)):Ta(He)}(n(P),n(Y),q)}function gr(q){n(r)&&n(r).onDrag(q)}function Ar(){n(r)&&n(r).onDragEnd()}var Cn=K(void 0,!0);fe(()=>n(V),()=>{var q;q=n(V),Ft(q,v())||(o("onSelect",q),we()(q))}),fe(()=>(C(w()),C(k())),()=>{S(Ce,$v({escapeControlCharacters:w(),escapeUnicodeCharacters:k()}))}),fe(()=>n(it),()=>{(function(q){n(d)&&q&&n(d).scrollTop===0&&(Oo(d,n(d).style.overflowAnchor="none"),Oo(d,n(d).scrollTop+=jl),setTimeout(()=>{n(d)&&Oo(d,n(d).style.overflowAnchor="")}))})(n(it))}),fe(()=>C(j()),()=>{$n(j())}),fe(()=>C(v()),()=>{(function(q){Ft(n(V),q)||(o("applyExternalSelection",{selection:n(V),externalSelection:q}),Nl(q)&&S(V,q))})(v())}),fe(()=>(n(P),C(R()),C(O()),C(ne())),()=>{at(n(P),R(),O(),ne())}),fe(()=>(n(d),Wm),()=>{S(r,n(d)?Wm(n(d)):void 0)}),fe(()=>(C(h()),C(f()),C(O()),n(Ce),C(ce()),C(le())),()=>{S(Cn,{mode:Rr.tree,readOnly:h(),truncateTextSize:f(),parser:O(),normalization:n(Ce),getJson:Ge,getDocumentState:qt,getSelection:_n,findElement:Tn,findNextInside:Er,focus:_t,onPatch:ke,onInsert:hr,onExpand:ue,onSelect:Qe,onFind:st,onExpandSection:ct,onPasteJson:vt,onRenderValue:ce(),onContextMenu:Jt,onClassName:le()||(()=>{}),onDrag:gr,onDragEnd:Ar})}),fe(()=>n(Cn),()=>{o("context changed",n(Cn))}),Sn();var Nn={expand:me,collapse:Ne,validate:Ke,getJson:Ge,patch:Gt,acceptAutoRepair:$t,openTransformModal:rr,scrollTo:Xt,findElement:Tn,findSearchResult:mr,focus:_t};Nt(!0);var kr=Y6();Te("mousedown",Ra,function(q){!el(q.target,re=>re===n(m))&&Ir(n(V))&&(o("click outside the editor, exit edit mode"),S(V,ia(n(V))),b&&n(u)&&(n(u).focus(),n(u).blur()),o("blur (outside editor)"),n(u)&&n(u).blur())});var z,de=nt(kr),Me=H(de),Be=q=>{(function(re,_e){pt(_e,!1);var He=K(void 0,!0),Ve=K(void 0,!0),Le=K(void 0,!0),Ct=_(_e,"json",9),Et=_(_e,"selection",9),Wt=_(_e,"readOnly",9),En=_(_e,"showSearch",13,!1),tn=_(_e,"history",9),Vn=_(_e,"onExpandAll",9),Pt=_(_e,"onCollapseAll",9),ir=_(_e,"onUndo",9),An=_(_e,"onRedo",9),Gn=_(_e,"onSort",9),yn=_(_e,"onTransform",9),xt=_(_e,"onContextMenu",9),ln=_(_e,"onCopy",9),kt=_(_e,"onRenderMenu",9);function dt(){En(!En())}var It=K(void 0,!0),or=K(void 0,!0),Yn=K(void 0,!0),Sr=K(void 0,!0);fe(()=>C(Ct()),()=>{S(He,Ct()!==void 0)}),fe(()=>(n(He),C(Et()),mn),()=>{S(Ve,n(He)&&(Ln(Et())||Lr(Et())||mn(Et())))}),fe(()=>(C(Vn()),C(Ct())),()=>{S(It,{type:"button",icon:$b,title:"Expand all",className:"jse-expand-all",onClick:Vn(),disabled:!lr(Ct())})}),fe(()=>(C(Pt()),C(Ct())),()=>{S(or,{type:"button",icon:Pb,title:"Collapse all",className:"jse-collapse-all",onClick:Pt(),disabled:!lr(Ct())})}),fe(()=>C(Ct()),()=>{S(Yn,{type:"button",icon:Zu,title:"Search (Ctrl+F)",className:"jse-search",onClick:dt,disabled:Ct()===void 0})}),fe(()=>(C(Wt()),n(It),n(or),C(Gn()),C(Ct()),C(yn()),n(Yn),C(xt()),C(ir()),C(tn()),C(An()),C(ln()),n(Ve)),()=>{S(Sr,Wt()?[n(It),n(or),{type:"separator"},{type:"button",icon:Ya,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:ln(),disabled:!n(Ve)},{type:"separator"},n(Yn),{type:"space"}]:[n(It),n(or),{type:"separator"},{type:"button",icon:Cu,title:"Sort",className:"jse-sort",onClick:Gn(),disabled:Wt()||Ct()===void 0},{type:"button",icon:Su,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:yn(),disabled:Wt()||Ct()===void 0},n(Yn),{type:"button",icon:Ng,title:Tv,className:"jse-contextmenu",onClick:xt()},{type:"separator"},{type:"button",icon:vv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:ir(),disabled:!tn().canUndo},{type:"button",icon:fv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:An(),disabled:!tn().canRedo},{type:"space"}])}),fe(()=>(C(kt()),n(Sr)),()=>{S(Le,kt()(n(Sr))||n(Sr))}),Sn(),Nt(!0),md(re,{get items(){return n(Le)}}),ht()})(q,{get json(){return n(P)},get selection(){return n(V)},get readOnly(){return h()},get history(){return p()},onExpandAll:$e,onCollapseAll:Fe,onUndo:ur,onRedo:Nr,onSort:Wr,onTransform:Mn,onContextMenu:Mt,onCopy:At,get onRenderMenu(){return B()},get showSearch(){return n(it)},set showSearch(re){S(it,re)},$$legacy:!0})};ye(Me,q=>{g()&&q(Be)});var Se=ie(Me,2),Je=q=>{S6(q,{get json(){return n(P)},get selection(){return n(V)},onSelect:Rn,get onError(){return Z()},get pathParser(){return G()}})};ye(Se,q=>{x()&&q(Je)});var Ze=ie(Se,2),Ye=q=>{var re=Q6(),_e=nt(re),He=H(_e);He.readOnly=!0,er(He,Et=>S(u,Et),()=>n(u));var Ve=ie(_e,2),Le=Et=>{var Wt=Ut(),En=nt(Wt),tn=Pt=>{(function(ir,An){pt(An,!0);var Gn=d6();Gn.__click=[c6,An];var yn=ie(H(Gn),2),xt=ie(H(yn),2),ln=kt=>{var dt=u6(),It=ie(nt(dt),2);kn(It,"title","Create an empty JSON object (press '{')"),It.__click=[i6,An];var or=ie(It,2);kn(or,"title","Create an empty JSON array (press '[')"),or.__click=[l6,An],W(kt,dt)};ye(xt,kt=>{An.readOnly||kt(ln)}),W(ir,Gn),ht()})(Pt,{get readOnly(){return h()},onCreateObject:()=>{_t(),xn("{")},onCreateArray:()=>{_t(),xn("[")},onClick:()=>{_t()}})},Vn=Pt=>{var ir=H6(),An=nt(ir),Gn=ot(()=>h()?[]:[{icon:_u,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Wn}]);Mo(An,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Gn)}}),Lb(ie(An,2),{get text(){return n(I)},get json(){return n(P)},get indentation(){return F()},get parser(){return O()}}),W(Pt,ir)};ye(En,Pt=>{n(I)===""||n(I)===void 0?Pt(tn):Pt(Vn,!1)}),W(Et,Wt)},Ct=Et=>{var Wt=J6(),En=nt(Wt);Rb(H(En),{get json(){return n(P)},get documentState(){return n(Y)},get parser(){return O()},get showSearch(){return n(it)},get showReplace(){return n(Ue)},get readOnly(){return h()},columns:void 0,onSearch:yt,onFocus:$,onPatch:ke,onClose:U});var tn=ie(En,2);kn(tn,"data-jsoneditor-scrollable-contents",!0);var Vn=H(tn),Pt=kt=>{W(kt,K6())};ye(Vn,kt=>{n(it)&&kt(Pt)}),Xf(ie(Vn,2),{get value(){return n(P)},pointer:"",get state(){return n(Y)},get validationErrors(){return n(ge)},get searchResults(){return n(We)},get selection(){return n(V)},get context(){return n(Cn)},get onDragSelectionStart(){return Pr}}),er(tn,kt=>S(d,kt),()=>n(d));var ir=ie(tn,2),An=kt=>{var dt=ot(()=>(n(lt),te(()=>"You pasted a JSON ".concat(Array.isArray(n(lt).contents)?"array":"object"," as text")))),It=ot(()=>[{icon:is,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Zt},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:Yt}]);Mo(kt,{type:"info",get message(){return n(dt)},get actions(){return n(It)}})};ye(ir,kt=>{n(lt)&&kt(An)});var Gn=ie(ir,2),yn=kt=>{var dt=ot(()=>[{icon:is,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:wt},{text:"Leave as is",title:"Keep the pasted array",onClick:hn}]);Mo(kt,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(dt)}})};ye(Gn,kt=>{n(Ae)&&kt(yn)});var xt=ie(Gn,2),ln=kt=>{var dt=ot(()=>h()?[]:[{icon:pv,text:"Ok",title:"Accept the repaired document",onClick:$t},{icon:_u,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Wn}]);Mo(kt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(dt)},onClose:_t})};ye(xt,kt=>{n(qe)&&kt(ln)}),Kv(ie(xt,2),{get validationErrors(){return n(pe)},selectError:X}),W(Et,Wt)};ye(Ve,Et=>{n(P)===void 0?Et(Le):Et(Ct,!1)}),Te("paste",He,Bn),W(q,re)},Lt=q=>{W(q,G6())};ye(Ze,q=>{s?q(Lt,!1):q(Ye)}),er(de,q=>S(m,q),()=>n(m));var sn=ie(de,2),en=q=>{Cb(q,{onClose:()=>S(J,!1)})};ye(sn,q=>{n(J)&&q(en)});var Qn=ie(sn,2),qr=q=>{Eb(q,os(()=>n(be),{onClose:()=>{var re;(re=n(be))===null||re===void 0||re.onClose(),S(be,void 0)}}))};return ye(Qn,q=>{n(be)&&q(qr)}),De(q=>z=Rt(de,1,"jse-tree-mode svelte-10mlrw4",null,z,q),[()=>({"no-main-menu":!g()})]),Te("keydown",de,function(q){var re=Da(q),_e=q.shiftKey;if(o("keydown",{combo:re,key:q.key}),re==="Ctrl+X"&&(q.preventDefault(),tt(!0)),re==="Ctrl+Shift+X"&&(q.preventDefault(),tt(!1)),re==="Ctrl+C"&&(q.preventDefault(),At(!0)),re==="Ctrl+Shift+C"&&(q.preventDefault(),At(!1)),re==="Ctrl+D"&&(q.preventDefault(),tr()),re!=="Delete"&&re!=="Backspace"||(q.preventDefault(),pr()),re==="Insert"&&(q.preventDefault(),hr("structure")),re==="Ctrl+A"&&(q.preventDefault(),S(V,Qt([]))),re==="Ctrl+Q"&&an(q),re==="ArrowUp"||re==="Shift+ArrowUp"){q.preventDefault();var He=n(V)?Sm(n(P),n(Y),n(V),_e)||n(V):ui(n(P),n(Y));S(V,He),sr(ut(He))}if(re==="ArrowDown"||re==="Shift+ArrowDown"){q.preventDefault();var Ve=n(V)?function(tn,Vn,Pt){var ir=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(Pt){var An=ir?ut(Pt):ss(tn,Pt),Gn=lr(Xe(tn,An))?jm(tn,Vn,An,!0):Vn,yn=nf(tn,Vn,An),xt=nf(tn,Gn,An);if(ir)return zr(Pt)?yn!==void 0?ro(yn,yn):void 0:mo(Pt)?xt!==void 0?ro(xt,xt):void 0:xt!==void 0?ro(Ds(Pt),xt):void 0;if(mo(Pt))return xt!==void 0?Qt(xt):void 0;if(zr(Pt)||mn(Pt))return yn!==void 0?Qt(yn):void 0;if(Lr(Pt)){if(yn===void 0||yn.length===0)return;var ln=nn(yn),kt=Xe(tn,ln);return Array.isArray(kt)?Qt(yn):La(yn)}return Ln(Pt)?xt!==void 0?Qt(xt):yn!==void 0?Qt(yn):void 0:void 0}}(n(P),n(Y),n(V),_e)||n(V):ui(n(P),n(Y));S(V,Ve),sr(ut(Ve))}if(re==="ArrowLeft"||re==="Shift+ArrowLeft"){q.preventDefault();var Le=n(V)?function(tn,Vn,Pt){var ir=arguments.length>3&&arguments[3]!==void 0&&arguments[3],An=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(Pt){var{caret:Gn,previous:yn}=_m(tn,Vn,Pt,An);if(ir)return Ln(Pt)?void 0:ro(Pt.path,Pt.path);if(Gn&&yn)return Bf(yn);var xt=nn(ut(Pt)),ln=Xe(tn,xt);return mn(Pt)&&Array.isArray(ln)?ro(Pt.path,Pt.path):Ln(Pt)&&!Array.isArray(ln)?La(Pt.focusPath):void 0}}(n(P),n(Y),n(V),_e,!h())||n(V):ui(n(P),n(Y));S(V,Le),sr(ut(Le))}if(re==="ArrowRight"||re==="Shift+ArrowRight"){q.preventDefault();var Ct=n(V)&&n(P)!==void 0?function(tn,Vn,Pt){var ir=arguments.length>3&&arguments[3]!==void 0&&arguments[3],An=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(Pt){var{caret:Gn,next:yn}=_m(tn,Vn,Pt,An);return ir?Ln(Pt)?void 0:ro(Pt.path,Pt.path):Gn&&yn?Bf(yn):Ln(Pt)?Qt(Pt.focusPath):void 0}}(n(P),n(Y),n(V),_e,!h())||n(V):ui(n(P),n(Y));S(V,Ct),sr(ut(Ct))}if(re==="Enter"&&n(V)){if(dd(n(V))){var Et=n(V).focusPath,Wt=Xe(n(P),nn(Et));Array.isArray(Wt)&&(q.preventDefault(),S(V,Qt(Et)))}Lr(n(V))&&(q.preventDefault(),S(V,Ie(Ie({},n(V)),{},{edit:!0}))),mn(n(V))&&(q.preventDefault(),lr(Xe(n(P),n(V).path))?ue(n(V).path,!0):S(V,Ie(Ie({},n(V)),{},{edit:!0})))}if(re.replace(/^Shift\+/,"").length===1&&n(V))return q.preventDefault(),void xn(q.key);if(re==="Enter"&&(mo(n(V))||zr(n(V))))return q.preventDefault(),void xn("");if(re==="Ctrl+Enter"&&mn(n(V))){var En=Xe(n(P),n(V).path);cd(En)&&window.open(String(En),"_blank")}re==="Escape"&&n(V)&&(q.preventDefault(),S(V,void 0)),re==="Ctrl+F"&&(q.preventDefault(),st(!1)),re==="Ctrl+H"&&(q.preventDefault(),st(!0)),re==="Ctrl+Z"&&(q.preventDefault(),ur()),re==="Ctrl+Shift+Z"&&(q.preventDefault(),Nr())}),Te("mousedown",de,function(q){o("handleMouseDown",q);var re=q.target;H0(re,"BUTTON")||re.isContentEditable||(_t(),n(V)||n(P)!==void 0||n(I)!==""&&n(I)!==void 0||(o("createDefaultSelection"),S(V,Qt([]))))}),Te("contextmenu",de,an),W(e,kr),St(t,"expand",me),St(t,"collapse",Ne),St(t,"validate",Ke),St(t,"getJson",Ge),St(t,"patch",Gt),St(t,"acceptAutoRepair",$t),St(t,"openTransformModal",rr),St(t,"scrollTo",Xt),St(t,"findElement",Tn),St(t,"findSearchResult",mr),St(t,"focus",_t),ht(Nn)}function Fb(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,s)=>Fb(Reflect.get(r,o,s)),set:()=>!1,deleteProperty:()=>!1});var t}var du=Ur("jsoneditor:History");function Vb(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function s(){return o<r.length}function a(){return o>0}function i(){return{canUndo:s(),canRedo:a(),items:()=>r.slice().reverse(),add:c,undo:u,redo:m,clear:d}}function l(){e.onChange&&e.onChange(i())}function c(b){du("add",b),r=[b].concat(r.slice(o)).slice(0,t),o=0,l()}function d(){du("clear"),r=[],o=0,l()}function u(){if(s()){var b=r[o];return o+=1,du("undo",b),l(),b}}function m(){if(a())return du("redo",r[o-=1]),l(),r[o]}return{get:i}}Ot(`/* over all fonts, sizes, and colors */
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
}`);var ml=ld(()=>n4),fi=ld(()=>r4),X6=he('<div class="query-error svelte-lta8xm"> </div>'),Z6=he("<!> <!>",1),eS=he('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),tS=he('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),nS=he('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function rS(e,t){var r,o,s;pt(t,!1);var a=Ur("jsoneditor:TransformModal"),i=_(t,"id",25,()=>"transform-modal-"+ki()),l=_(t,"json",9),c=_(t,"rootPath",25,()=>[]),d=_(t,"indentation",9),u=_(t,"truncateTextSize",9),m=_(t,"escapeControlCharacters",9),b=_(t,"escapeUnicodeCharacters",9),y=_(t,"parser",9),h=_(t,"parseMemoizeOne",9),j=_(t,"validationParser",9),v=_(t,"pathParser",9),p=_(t,"queryLanguages",9),f=_(t,"queryLanguageId",13),g=_(t,"onChangeQueryLanguage",9),x=_(t,"onRenderValue",9),w=_(t,"onRenderMenu",9),k=_(t,"onRenderContextMenu",9),O=_(t,"onClassName",9),A=_(t,"onTransform",9),R=_(t,"onClose",9),ne=K(void 0,!0),G=K(Vb({onChange:Y=>S(G,Y)}).get(),!0),F=K(void 0,!0),Z=K(void 0,!0),je=K(!1,!0),Q="".concat(i(),":").concat(gt(c())),we=(r=ml()[Q])!==null&&r!==void 0?r:{},Re=K(fi().showWizard!==!1,!0),Ee=K(fi().showOriginal!==!1,!0),ce=K((o=we.queryOptions)!==null&&o!==void 0?o:{},!0),B=K(f()===we.queryLanguageId&&we.query?we.query:"",!0),L=K((s=we.isManual)!==null&&s!==void 0&&s,!0),le=K(void 0,!0),T=K(void 0,!0),E=K({text:""},!0);function M(Y){var V;return(V=p().find(Qe=>Qe.id===Y))!==null&&V!==void 0?V:p()[0]}function oe(Y){try{S(ce,Y),S(B,M(f()).createQuery(n(F),Y)),S(le,void 0),S(L,!1),a("updateQueryByWizard",{queryOptions:n(ce),query:n(B),isManual:n(L)})}catch(V){S(le,String(V))}}function Oe(Y){S(B,Y.target.value),S(L,!0),a("handleChangeQuery",{query:n(B),isManual:n(L)})}n(L)||oe(n(ce)),no(()=>{var Y;(Y=n(ne))===null||Y===void 0||Y.focus()});var ae=wu(function(Y,V){if(Y===void 0)return S(E,{text:""}),void S(T,"Error: No JSON");if(V.trim()!=="")try{a("previewTransform",{query:V});var Qe=M(f()).executeQuery(Y,V,y());S(E,{json:Qe}),S(T,void 0)}catch(rt){S(E,{text:""}),S(T,String(rt))}else S(E,{json:Y})},300);function J(){if(n(F)===void 0)return S(E,{text:""}),void S(T,"Error: No JSON");try{a("handleTransform",{query:n(B)});var Y=M(f()).executeQuery(n(F),n(B),y());A()([{op:"replace",path:gt(c()),value:Y}]),R()()}catch(V){console.error(V),S(E,{text:""}),S(T,String(V))}}function be(){S(Re,!n(Re)),fi(fi().showWizard=n(Re))}function P(){S(Ee,!n(Ee)),fi(fi().showOriginal=n(Ee))}function I(Y){Y.focus()}function D(Y){a("handleChangeQueryLanguage",Y),f(Y),g()(Y),oe(n(ce))}function ve(){n(je)?S(je,!n(je)):R()()}fe(()=>(C(l()),C(c())),()=>{S(F,Fb(Xe(l(),c())))}),fe(()=>n(F),()=>{S(Z,n(F)?{json:n(F)}:{text:""})}),fe(()=>(n(F),n(B)),()=>{ae(n(F),n(B))}),fe(()=>(ml(),n(ce),n(B),C(f()),n(L)),()=>{ml(ml()[Q]={queryOptions:n(ce),query:n(B),queryLanguageId:f(),isManual:n(L)}),a("store state in memory",Q,ml()[Q])}),Sn(),Nt(!0),zl(e,{get onClose(){return R()},className:"jse-transform-modal",get fullscreen(){return n(je)},children:(Y,V)=>{var Qe=nS();Df(H(Qe),{children:(rt,Ce)=>{var lt=tS(),Ae=nt(lt);(function(tt,Bt){pt(Bt,!1);var At,Pn=_(Bt,"queryLanguages",9),Bn=_(Bt,"queryLanguageId",9),Fn=_(Bt,"fullscreen",13),cr=_(Bt,"onChangeQueryLanguage",9),Jn=_(Bt,"onClose",9),ar=K(void 0,!0),{openAbsolutePopup:pr,closeAbsolutePopup:tr}=ps("absolute-popup");function Cr(){var hr={queryLanguages:Pn(),queryLanguageId:Bn(),onChangeQueryLanguage:wr=>{tr(At),cr()(wr)}};At=pr(X4,hr,{offsetTop:-2,offsetLeft:0,anchor:n(ar),closeOnOuterClick:!0})}Nt(!0),Ku(tt,{title:"Transform",fullScreenButton:!0,get onClose(){return Jn()},get fullscreen(){return Fn()},set fullscreen(hr){Fn(hr)},$$slots:{actions:(hr,wr)=>{var nr,Pe=t3();rn(H(Pe),{get data(){return kw}}),er(Pe,zt=>S(ar,zt),()=>n(ar)),De(zt=>nr=Rt(Pe,1,"jse-config svelte-5gkegr",null,nr,zt),[()=>({hide:Pn().length<=1})]),Te("click",Pe,Cr),W(hr,Pe)}},$$legacy:!0}),ht()})(Ae,{get queryLanguages(){return p()},get queryLanguageId(){return f()},onChangeQueryLanguage:D,get onClose(){return R()},get fullscreen(){return n(je)},set fullscreen(tt){S(je,tt)},$$legacy:!0});var We=H(ie(Ae,2)),it=H(We),Ue=ie(H(it),2);$0(H(Ue),()=>(C(f()),te(()=>M(f()).description)));var yt=ie(Ue,4),$=ie(yt,2),N=H($),U=H(N),X=H(U),me=ot(()=>n(Re)?qa:Cl);rn(X,{get data(){return n(me)}});var Ne=ie($,2),qe=tt=>{var Bt=Ut(),At=nt(Bt),Pn=Fn=>{var cr=Z6(),Jn=nt(cr);Q4(Jn,{get queryOptions(){return n(ce)},get json(){return n(F)},onChange:oe});var ar=ie(Jn,2),pr=tr=>{var Cr=X6(),hr=H(Cr);De(()=>mt(hr,n(le))),W(tr,Cr)};ye(ar,tr=>{n(le)&&tr(pr)}),W(Fn,cr)},Bn=Fn=>{W(Fn,Br("(Only available for arrays, not for objects)"))};ye(At,Fn=>{n(F),te(()=>Array.isArray(n(F)))?Fn(Pn):Fn(Bn,!1)}),W(tt,Bt)};ye(Ne,tt=>{n(Re)&&tt(qe)});var pe=ie(Ne,4);er(pe,tt=>S(ne,tt),()=>n(ne));var ge,ft,at=ie(it,2),Ke=H(at),Ge=H(Ke),qt=H(Ge),_n=H(qt),$n=H(_n),Dt=ot(()=>n(Ee)?qa:Cl);rn($n,{get data(){return n(Dt)}});var pn=ie(Ge,2),Vt=tt=>{ov(tt,{get externalContent(){return n(Z)},externalSelection:void 0,get history(){return n(G)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return b()},get parser(){return y()},get parseMemoizeOne(){return h()},get onRenderValue(){return x()},get onRenderMenu(){return w()},get onRenderContextMenu(){return k()},onError:te(()=>console.error),get onChange(){return Pr},get onChangeMode(){return Pr},get onSelect(){return Pr},get onUndo(){return Pr},get onRedo(){return Pr},get onFocus(){return Pr},get onBlur(){return Pr},get onSortModal(){return Pr},get onTransformModal(){return Pr},get onJSONEditorModal(){return Pr},get onClassName(){return O()},validator:void 0,get validationParser(){return j()},get pathParser(){return v()}})};ye(pn,tt=>{n(Ee)&&tt(Vt)});var Gt=ie(Ke,2),fn=ie(H(Gt),2),bt=tt=>{ov(tt,{get externalContent(){return n(E)},externalSelection:void 0,get history(){return n(G)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return m()},get escapeUnicodeCharacters(){return b()},get parser(){return y()},get parseMemoizeOne(){return h()},get onRenderValue(){return x()},get onRenderMenu(){return w()},get onRenderContextMenu(){return k()},onError:te(()=>console.error),get onChange(){return Pr},get onChangeMode(){return Pr},get onSelect(){return Pr},get onUndo(){return Pr},get onRedo(){return Pr},get onFocus(){return Pr},get onBlur(){return Pr},get onSortModal(){return Pr},get onTransformModal(){return Pr},get onJSONEditorModal(){return Pr},get onClassName(){return O()},validator:void 0,get validationParser(){return j()},get pathParser(){return v()}})},on=tt=>{var Bt=eS(),At=H(Bt);De(()=>mt(At,n(T))),W(tt,Bt)};ye(fn,tt=>{n(T)?tt(on,!1):tt(bt)});var $t=H(ie(We,2));Gr(()=>Te("click",$t,J)),ao($t,tt=>I?.(tt)),De((tt,Bt,At)=>{Hs(yt,tt),Hs(pe,n(B)),ge=Rt(at,1,"jse-data-contents svelte-lta8xm",null,ge,Bt),ft=Rt(Ke,1,"jse-original-data svelte-lta8xm",null,ft,At),$t.disabled=!!n(T)},[()=>(C(vn),C(c()),C(go),te(()=>vn(c())?"(document root)":go(c()))),()=>({"jse-hide-original-data":!n(Ee)}),()=>({"jse-hide":!n(Ee)})]),Te("click",U,be),Te("input",pe,Oe),Te("click",_n,P),W(rt,lt)},$$slots:{default:!0}}),ao(Qe,(rt,Ce)=>Ju?.(rt,Ce),()=>ve),W(Y,Qe)},$$slots:{default:!0}}),ht()}function Ao(){}var oS=0;class eo{constructor(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=oS++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof t!="function"&&(t=Dl.match(t)),r=>{var o=t(r);return o===void 0?null:[this,o]}}}eo.closedBy=new eo({deserialize:e=>e.split(" ")}),eo.openedBy=new eo({deserialize:e=>e.split(" ")}),eo.group=new eo({deserialize:e=>e.split(" ")}),eo.isolate=new eo({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),eo.contextHash=new eo({perNode:!0}),eo.lookAhead=new eo({perNode:!0}),eo.mounted=new eo({perNode:!0});var Gm,aS=Object.create(null);class Dl{constructor(t,r,o){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=t,this.props=r,this.id=o,this.flags=s}static define(t){var r=t.props&&t.props.length?Object.create(null):aS,o=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),s=new Dl(t.name||"",r,t.id,o);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(s)),a){if(a[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");r[a[0].id]=a[1]}}return s}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if(typeof t=="string"){if(this.name==t)return!0;var r=this.prop(eo.group);return!!r&&r.indexOf(t)>-1}return this.id==t}static match(t){var r=Object.create(null);for(var o in t)for(var s of o.split(" "))r[s]=t[o];return a=>{for(var i=a.prop(eo.group),l=-1;l<(i?i.length:0);l++){var c=r[l<0?a.name:i[l]];if(c)return c}}}}Dl.none=new Dl("",Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays"}(Gm||(Gm={})),new eo({perNode:!0});Ot(`/* over all fonts, sizes, and colors */
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
}`);var sS=he('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),iS=he('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),lS=he('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),cS=he('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),Qv=x1.define([{tag:Co.propertyName,color:"var(--internal-key-color)"},{tag:Co.number,color:"var(--internal-value-color-number)"},{tag:Co.bool,color:"var(--internal-value-color-boolean)"},{tag:Co.string,color:"var(--internal-value-color-string)"},{tag:Co.keyword,color:"var(--internal-value-color-null)"}]),uS=og(Qv),dS=Qv.style;Qv.style=e=>dS(e||[]);var fS=[tg.fromClass(class{constructor(e){this.view=e,this.indentUnit=xu(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=xu(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new ng;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var s of o){var{numColumns:a,containsTab:i}=this.numColumns(s.text,t.tabSize),l="calc(".concat(a+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(a+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(a+this.indentUnit,"ch");e.add(s.from,s.from,rg.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var{from:o,to:s}of this.view.visibleRanges)for(var a=o;a<=s;){var i=e.doc.lineAt(a);r!==i&&(t.add(i),r=i),a=i.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var s=0;s<e.length;s++)switch(e[s]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];Ot(`/* over all fonts, sizes, and colors */
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
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name="close"] {
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
}`);var vS=he('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),pS=he('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),hS=he("<!> <!> <!> <!>",1),mS=he("<div></div> <!> <!>",1),gS=he('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),bS=he("<div><!> <!> <!></div>");function yS(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=_(t,"readOnly",9),a=_(t,"mainMenuBar",9),i=_(t,"statusBar",9),l=_(t,"askToFormat",9),c=_(t,"externalContent",9),d=_(t,"externalSelection",9),u=_(t,"history",9),m=_(t,"indentation",9),b=_(t,"tabSize",9),y=_(t,"escapeUnicodeCharacters",9),h=_(t,"parser",9),j=_(t,"validator",9),v=_(t,"validationParser",9),p=_(t,"onChange",9),f=_(t,"onChangeMode",9),g=_(t,"onSelect",9),x=_(t,"onUndo",9),w=_(t,"onRedo",9),k=_(t,"onError",9),O=_(t,"onFocus",9),A=_(t,"onBlur",9),R=_(t,"onRenderMenu",9),ne=_(t,"onSortModal",9),G=_(t,"onTransformModal",9),F=Ur("jsoneditor:TextMode"),Z={key:"Mod-i",run:qe,shift:pe,preventDefault:!0},je=typeof window>"u";F("isSSR:",je);var Q,we=K(void 0,!0),Re=K(void 0,!0),Ee=K(void 0,!0),ce=K(!1,!0),B=K(l(),!0),L=K([],!0),le=K(!1,!0),T=K(0,!0),E=K(0,!0),M=null,oe=new il,Oe=new il,ae=new il,J=new il,be=new il,P=c(),I=K(If(P,m(),h()),!0),D=K1.define(),ve=null;function Y(){if(!ve||ve.length===0)return!1;var se=ve[0].startState,ke=ve[ve.length-1].state,ze=ve.map(ue=>ue.changes).reduce((ue,$e)=>ue.compose($e)),ee={type:"text",undo:{changes:ze.invert(se.doc).toJSON(),selection:wr(se.selection)},redo:{changes:ze.toJSON(),selection:wr(ke.selection)}};return F("add history item",ee),u().add(ee),ve=null,!0}var V=K(y(),!0);no(jt(function*(){if(!je)try{Q=function(se){var{target:ke,initialText:ze,readOnly:ee,indentation:ue}=se;F("Create CodeMirror editor",{readOnly:ee,indentation:ue});var $e=function(st,ct){return of(st)?st.ranges.every(vt=>vt.anchor<ct.length&&vt.head<ct.length):!1}(d(),ze)?Pn(d()):void 0,Fe=ni.create({doc:ze,selection:$e,extensions:[tp.of([D1,Z]),oe.of(bt()),k1(),S1(),_1(),C1(),E1(),Ae(),O1(),$1(),ni.allowMultipleSelections.of(!0),P1(),og(L1,{fallback:!0}),M1(),R1(),N1(),T1(),A1(),q1(),z1(),tp.of([...U1,...F1,...V1,{key:"Mod-z",run:qt,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:_n,preventDefault:!0},{key:"Ctrl-Shift-z",run:_n,preventDefault:!0},...B1,...W1,...H1]),uS,l2({hideFirstIndent:!0}),$s.domEventHandlers({dblclick:fn}),$s.updateListener.of(st=>{S(Ee,st.state),st.docChanged&&(st.transactions.some(ct=>!!ct.annotation(D))||(ve=[...ve??[],st]),pr()),st.selectionSet&&hr()}),n2(),I1({top:!0}),$s.lineWrapping,Oe.of(ni.readOnly.of(ee)),J.of(ni.tabSize.of(b())),ae.of(ar(ue)),be.of($s.theme({},{dark:on()}))]});return Q=new $s({state:Fe,parent:ke}),$e&&Q.dispatch(Q.state.update({selection:$e.main,scrollIntoView:!0})),Q}({target:n(we),initialText:nr(n(I),n(ce))?"":n(r).escapeValue(n(I)),readOnly:s(),indentation:m()})}catch(se){console.error(se)}})),Lo(()=>{tr(),Q&&(F("Destroy CodeMirror editor"),Q.destroy()),yt()});var Qe=qi(),rt=qi();function Ce(){Q&&(F("focus"),Q.focus())}function lt(se,ke){if(Q)try{(function(){var ze=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],ee=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ue=Q.state,$e=ue.doc.length,Fe=np(ue,$e,1/0);if(Fe){var st=[];if(ze.length===0)st=it(Fe,ue,void 0,ee);else{var{from:ct}=Qd(n(r).escapeValue(n(I)),ze);ct!==void 0&&ct!==0&&(st=it(Fe,ue,ct,ee))}st.length>0&&function(vt){Ue.apply(this,arguments)}(st)}})(se,ke)}catch(ze){k()(ze)}}function Ae(){return J1.of((se,ke,ze)=>{var ee=np(se,se.doc.length,1/0);if(!ee||ee.length<ze)return null;for(var ue=null,$e=ee.resolveStack(ze,1);$e;$e=$e.next){var Fe=$e.node;if(!(Fe.to<=ze||Fe.from>ze)){if(ue&&Fe.from<ke)break;var st=Fe.type.prop(eg);if(st&&(Fe.to<ee.length-50||ee.length==se.doc.length||!We(Fe))){var ct=st(Fe,se);ct&&ct.from<=ze&&ct.from>=ke&&ct.to>ze&&(ue=ct)}}}return ue})}function We(se){var ke=se.lastChild;return ke&&ke.to==se.to&&ke.type.isError}function it(se,ke,ze){var ee=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],ue=[],$e=new Set;return se.iterate({enter(Fe){if(ze===void 0||Fe.from>=ze){var st=ty(ke,Fe.from,Fe.to);if(st){var ct="".concat(st.from,"-").concat(st.to);if(!$e.has(ct))if(ee)ue.push({from:st.from,to:st.to}),$e.add(ct);else{var vt=ue.some(Dn=>Dn.from<=st.from&&Dn.to>=st.to);vt||(ue.push({from:st.from,to:st.to}),$e.add(ct))}}}}}),ue}function Ue(){return Ue=jt(function*(se){if(se.length!==0){var ke=se.length>5e3;ke&&(S(le,!0),S(T,0),S(E,se.length),M=new AbortController);var ze=ee=>new Promise(ue=>{var $e;ke&&($e=M)!==null&&$e!==void 0&&$e.signal.aborted?ue():requestAnimationFrame(()=>{var Fe=Math.min(ee+100,se.length),st=se.slice(ee,Fe);Q.dispatch({effects:st.map(ct=>ny.of({from:ct.from,to:ct.to}))}),ke&&S(T,Fe),Fe<se.length?ze(Fe).then(ue):ue()})});yield ze(0),ke&&(S(le,!1),S(T,0),S(E,0),M=null)}}),Ue.apply(this,arguments)}function yt(){M&&M.abort()}function $(se){var ke=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vf;if(Q)try{if(se&&se.length>0){var{from:ze}=Qd(n(r).escapeValue(n(I)),se);ze!==void 0&&(Q.dispatch({selection:{anchor:ze,head:ze}}),Y1(Q))}else X1(Q);ke?.(se)}catch(ee){k()(ee)}}function N(){$([],()=>!0)}function U(){lt([],!0)}var X=!1;function me(se){return Ne(se,!1)}function Ne(se,ke){F("handlePatch",se,ke);var ze=h().parse(n(I)),ee=Ko(ze,se),ue=pg(ze,se);return At({text:h().stringify(ee,null,m())},ke,!1),{json:ee,previousJson:ze,undo:ue,redo:se}}function qe(){if(F("format"),s())return!1;try{var se=h().parse(n(I));return At({text:h().stringify(se,null,m())},!0,!1),S(B,l()),!0}catch(ke){k()(ke)}return!1}function pe(){if(F("compact"),s())return!1;try{var se=h().parse(n(I));return At({text:h().stringify(se)},!0,!1),S(B,!1),!0}catch(ke){k()(ke)}return!1}function ge(){if(F("repair"),!s())try{At({text:ca(n(I))},!0,!1),S(Pe,tf),S(zt,void 0)}catch(se){k()(se)}}function ft(){var se;if(!s())try{var ke=h().parse(n(I));X=!0,ne()({id:Qe,json:ke,rootPath:[],onSort:(se=jt(function*(ze){var{operations:ee}=ze;F("onSort",ee),Ne(ee,!0)}),function(ze){return se.apply(this,arguments)}),onClose:()=>{X=!1,Ce()}})}catch(ze){k()(ze)}}function at(se){var{id:ke,rootPath:ze,onTransform:ee,onClose:ue}=se;try{var $e=h().parse(n(I));X=!0,G()({id:ke||rt,json:$e,rootPath:ze||[],onTransform:Fe=>{ee?ee({operations:Fe,json:$e,transformedJson:Ko($e,Fe)}):(F("onTransform",Fe),Ne(Fe,!0))},onClose:()=>{X=!1,Ce(),ue&&ue()}})}catch(Fe){k()(Fe)}}function Ke(){s()||at({rootPath:[]})}function Ge(){Q&&(n(we)&&n(we).querySelector(".cm-search")?Z1(Q):ey(Q))}function qt(){if(s())return!1;tr();var se=u().undo();return F("undo",se),bm(se)?(Q.dispatch({annotations:D.of("undo"),changes:rp.fromJSON(se.undo.changes),selection:wd.fromJSON(se.undo.selection),scrollIntoView:!0}),!0):(x()(se),!1)}function _n(){if(s())return!1;tr();var se=u().redo();return F("redo",se),bm(se)?(Q.dispatch({annotations:D.of("redo"),changes:rp.fromJSON(se.redo.changes),selection:wd.fromJSON(se.redo.selection),scrollIntoView:!0}),!0):(w()(se),!1)}function $n(){S(ce,!0),At(c(),!0,!0)}function Dt(){f()(Rr.tree)}function pn(){cr()}function Vt(se){F("select validation error",se);var{from:ke,to:ze}=$t(se);ke!==void 0&&ze!==void 0&&(Gt(ke,ze),Ce())}function Gt(se,ke){F("setSelection",{anchor:se,head:ke}),Q&&Q.dispatch(Q.state.update({selection:{anchor:se,head:ke},scrollIntoView:!0}))}function fn(se,ke){if(ke.state.selection.ranges.length===1){var ze=ke.state.selection.ranges[0],ee=n(I).slice(ze.from,ze.to);if(ee==="{"||ee==="["){var ue=bg.parse(n(I)),$e=Object.keys(ue.pointers).find(st=>{var ct;return((ct=ue.pointers[st].value)===null||ct===void 0?void 0:ct.pos)===ze.from}),Fe=ue.pointers[$e];$e&&Fe&&Fe.value&&Fe.valueEnd&&(F("pointer found, selecting inner contents of path:",$e,Fe),Gt(Fe.value.pos+1,Fe.valueEnd.pos-1))}}}function bt(){return Q1(xn,{delay:300})}function on(){return!!n(we)&&getComputedStyle(n(we)).getPropertyValue("--jse-theme").includes("dark")}function $t(se){var{path:ke,message:ze,severity:ee}=se,{line:ue,column:$e,from:Fe,to:st}=Qd(n(r).escapeValue(n(I)),ke);return{path:ke,line:ue,column:$e,from:Fe,to:st,message:ze,severity:ee,actions:[]}}function tt(se,ke){var{line:ze,column:ee,position:ue,message:$e}=se;return{path:[],line:ze,column:ee,from:ue,to:ue,severity:Go.error,message:$e,actions:ke&&!s()?[{name:"Auto repair",apply:()=>ge()}]:void 0}}function Bt(se){return{from:se.from||0,to:se.to||0,message:se.message||"",actions:se.actions,severity:se.severity}}function At(se,ke,ze){var ee=If(se,m(),h()),ue=!Ft(se,P),$e=P;F("setCodeMirrorContent",{isChanged:ue,emitChange:ke,forceUpdate:ze}),Q&&(ue||ze)&&(P=se,S(I,ee),nr(n(I),n(ce))||Q.dispatch({changes:{from:0,to:Q.state.doc.length,insert:n(r).escapeValue(n(I))}}),Y(),ue&&ke&&Cr(P,$e))}function Pn(se){return of(se)?wd.fromJSON(se):void 0}function Bn(){return Fn.apply(this,arguments)}function Fn(){return Fn=jt(function*(){F("refresh"),yield function(){return Jn.apply(this,arguments)}()}),Fn.apply(this,arguments)}function cr(){if(Q){var se=Q?n(r).unescapeValue(Q.state.doc.toString()):"",ke=se!==n(I);if(F("onChangeCodeMirrorValue",{isChanged:ke}),ke){var ze=P;S(I,se),P={text:n(I)},Y(),Cr(P,ze),Kn(),hr()}}}function Jn(){return(Jn=jt(function*(){if(Kn(),Q){var se=on();return F("updateTheme",{dark:se}),Q.dispatch({effects:[be.reconfigure($s.theme({},{dark:se}))]}),new Promise(ke=>setTimeout(ke))}return Promise.resolve()})).apply(this,arguments)}function ar(se){var ke=G1.of(typeof se=="number"?" ".repeat(se):se);return se==="	"?[ke]:[ke,fS]}Hv({onMount:no,onDestroy:Lo,getWindow:()=>Yl(n(Re)),hasFocus:()=>X&&document.hasFocus()||Mv(n(Re)),onFocus:O(),onBlur:()=>{tr(),A()()}});var pr=wu(cr,300);function tr(){pr.flush()}function Cr(se,ke){p()&&p()(se,ke,{contentErrors:In(),patchResult:void 0})}function hr(){g()(wr(n(Ee).selection))}function wr(se){return Ie({type:qn.text},se.toJSON())}function nr(se,ke){return!!se&&se.length>Zd&&!ke}var Pe=K(tf,!0),zt=K(void 0,!0);function xn(){if(nr(n(I),n(ce)))return[];var se=In();if(gm(se)){var{parseError:ke,isRepairable:ze}=se;return[Bt(tt(ke,ze))]}return Tk(se)?se.validationErrors.map($t).map(Bt):[]}function In(){F("validate:start"),tr();var se=ur(n(r).escapeValue(n(I)),j(),h(),v());return gm(se)?(S(Pe,se.isRepairable?fm:"invalid"),S(zt,se.parseError),S(L,[])):(S(Pe,tf),S(zt,void 0),S(L,se?.validationErrors||[])),F("validate:end"),se}var ur=_l(o3);function Nr(){n(zt)&&function(se){F("select parse error",se);var ke=tt(se,!1);Gt(ke.from!=null?ke.from:0,ke.to!=null?ke.to:0),Ce()}(n(zt))}var Kt={icon:gw,text:"Show me",title:"Move to the parse error location",onClick:Nr};fe(()=>C(y()),()=>{S(r,$v({escapeControlCharacters:!1,escapeUnicodeCharacters:y()}))}),fe(()=>C(c()),()=>{At(c(),!1,!1)}),fe(()=>C(d()),()=>{(function(se){if(of(se)){var ke=Pn(se);!Q||!ke||n(Ee)&&n(Ee).selection.eq(ke)||(F("applyExternalSelection",ke),Q.dispatch({selection:ke}))}})(d())}),fe(()=>C(j()),()=>{(function(se){F("updateLinter",se),Q&&Q.dispatch({effects:oe.reconfigure(bt())})})(j())}),fe(()=>C(m()),()=>{(function(se){Q&&(F("updateIndentation",se),Q.dispatch({effects:ae.reconfigure(ar(se))}))})(m())}),fe(()=>C(b()),()=>{(function(se){Q&&(F("updateTabSize",se),Q.dispatch({effects:J.reconfigure(ni.tabSize.of(se))}))})(b())}),fe(()=>C(s()),()=>{(function(se){Q&&(F("updateReadOnly",se),Q.dispatch({effects:[Oe.reconfigure(ni.readOnly.of(se))]}))})(s())}),fe(()=>(n(V),C(y())),()=>{n(V)!==y()&&(S(V,y()),F("forceUpdateText",{escapeUnicodeCharacters:y()}),Q&&Q.dispatch({changes:{from:0,to:Q.state.doc.length,insert:n(r).escapeValue(n(I))}}))}),fe(()=>(n(Pe),C(s()),is),()=>{S(o,n(Pe)!==fm||s()?[Kt]:[{icon:is,text:"Auto repair",title:"Automatically repair JSON",onClick:ge},Kt])}),Sn();var xr={focus:Ce,collapse:lt,expand:$,patch:me,handlePatch:Ne,openTransformModal:at,refresh:Bn,flush:tr,validate:In};Nt(!0);var Wr,rr=bS(),Fr=H(rr),Mn=se=>{var ke=ot(()=>(n(I),te(()=>n(I).length===0))),ze=ot(()=>!n(ke)),ee=ot(()=>!n(ke)),ue=ot(()=>!n(ke)),$e=ot(()=>!n(ke)),Fe=ot(()=>!n(ke)),st=ot(()=>!n(ke));(function(ct,vt){pt(vt,!1);var Dn=K(void 0,!0),Jt=_(vt,"readOnly",9,!1),an=_(vt,"onExpandAll",9),Mt=_(vt,"onCollapseAll",9),Zt=_(vt,"onFormat",9),Tr=_(vt,"onCompact",9),wt=_(vt,"onSort",9),bn=_(vt,"onTransform",9),Yt=_(vt,"onToggleSearch",9),hn=_(vt,"onUndo",9),Wn=_(vt,"onRedo",9),Rn=_(vt,"canExpandAll",9),_t=_(vt,"canCollapseAll",9),Er=_(vt,"canUndo",9),gr=_(vt,"canRedo",9),Ar=_(vt,"canFormat",9),Cn=_(vt,"canCompact",9),Nn=_(vt,"canSort",9),kr=_(vt,"canTransform",9),z=_(vt,"onRenderMenu",9),de=K(void 0,!0),Me=K(void 0,!0),Be={type:"button",icon:Zu,title:"Search (Ctrl+F)",className:"jse-search",onClick:Yt()},Se=K(void 0,!0);fe(()=>(C(an()),C(Rn())),()=>{S(de,{type:"button",icon:$b,title:"Expand all",className:"jse-expand-all",onClick:an(),disabled:!Rn()})}),fe(()=>(C(Mt()),C(_t())),()=>{S(Me,{type:"button",icon:Pb,title:"Collapse all",className:"jse-collapse-all",onClick:Mt(),disabled:!_t()})}),fe(()=>(C(Jt()),n(de),n(Me),C(Zt()),C(Ar()),C(Tr()),C(Cn()),C(wt()),C(Nn()),C(bn()),C(kr()),C(hn()),C(Er()),C(Wn()),C(gr())),()=>{S(Se,Jt()?[n(de),n(Me),{type:"separator"},Be,{type:"space"}]:[n(de),n(Me),{type:"separator"},{type:"button",icon:Km,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Zt(),disabled:Jt()||!Ar()},{type:"button",icon:s6,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:Tr(),disabled:Jt()||!Cn()},{type:"separator"},{type:"button",icon:Cu,title:"Sort",className:"jse-sort",onClick:wt(),disabled:Jt()||!Nn()},{type:"button",icon:Su,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:bn(),disabled:Jt()||!kr()},Be,{type:"separator"},{type:"button",icon:vv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:hn(),disabled:!Er()},{type:"button",icon:fv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Wn(),disabled:!gr()},{type:"space"}])}),fe(()=>(C(z()),n(Se)),()=>{S(Dn,z()(n(Se))||n(Se))}),Sn(),Nt(!0),md(ct,{get items(){return n(Dn)}}),ht()})(se,{get readOnly(){return s()},onExpandAll:N,onCollapseAll:U,onFormat:qe,onCompact:pe,onSort:ft,onTransform:Ke,onToggleSearch:Ge,onUndo:qt,onRedo:_n,get canExpandAll(){return n(ze)},get canCollapseAll(){return n(ee)},get canFormat(){return n(ue)},get canCompact(){return n($e)},get canSort(){return n(Fe)},get canTransform(){return n(st)},get canUndo(){return C(u()),te(()=>u().canUndo)},get canRedo(){return C(u()),te(()=>u().canRedo)},get onRenderMenu(){return R()}})};ye(Fr,se=>{a()&&se(Mn)});var Xt=ie(Fr,2),Tt=se=>{var ke=vS(),ze=ie(H(ke),2),ee=H(ze),ue=ie(ze,2);De(()=>Io(ee,"width: ".concat(n(E)>0?n(T)/n(E)*100:0,"%"))),Te("click",ue,yt),W(se,ke)};ye(Xt,se=>{n(le)&&se(Tt)});var Tn=ie(Xt,2),mr=se=>{var ke,ze=ot(()=>(n(I),n(ce),te(()=>nr(n(I),n(ce))))),ee=mS(),ue=nt(ee);er(ue,vt=>S(we,vt),()=>n(we));var $e=ie(ue,2),Fe=vt=>{var Dn=pS(),Jt=nt(Dn),an=ot(()=>(C(yu),C(Zd),n(I),te(()=>"The JSON document is larger than ".concat(yu(Zd),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(yu(n(I).length),"."))));Mo(Jt,{get icon(){return Us},type:"error",get message(){return n(an)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:$n},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:Dt},{text:"Cancel",title:"Cancel opening this large document.",onClick:pn}],onClose:Ce});var Mt=H(ie(Jt,2));De(Zt=>mt(Mt,Zt),[()=>(C(Ca),n(I),C(Au),te(()=>Ca(n(I)||"",Au)))]),W(vt,Dn)};ye($e,vt=>{n(ze)&&vt(Fe)});var st=ie($e,2),ct=vt=>{var Dn=hS(),Jt=nt(Dn),an=bn=>{(function(Yt,hn){pt(hn,!1);var Wn=_(hn,"editorState",8),Rn=K(),_t=K(),Er=K(),gr=K(),Ar=K();fe(()=>C(Wn()),()=>{var Se;S(Rn,(Se=Wn())===null||Se===void 0||(Se=Se.selection)===null||Se===void 0||(Se=Se.main)===null||Se===void 0?void 0:Se.head)}),fe(()=>(n(Rn),C(Wn())),()=>{var Se;S(_t,n(Rn)!==void 0?(Se=Wn())===null||Se===void 0||(Se=Se.doc)===null||Se===void 0?void 0:Se.lineAt(n(Rn)):void 0)}),fe(()=>n(_t),()=>{S(Er,n(_t)!==void 0?n(_t).number:void 0)}),fe(()=>(n(_t),n(Rn)),()=>{S(gr,n(_t)!==void 0&&n(Rn)!==void 0?n(Rn)-n(_t).from+1:void 0)}),fe(()=>C(Wn()),()=>{var Se;S(Ar,(Se=Wn())===null||Se===void 0||(Se=Se.selection)===null||Se===void 0||(Se=Se.ranges)===null||Se===void 0?void 0:Se.reduce((Je,Ze)=>Je+Ze.to-Ze.from,0))}),Sn(),Nt();var Cn=cS(),Nn=H(Cn),kr=Se=>{var Je=sS(),Ze=H(Je);De(()=>{var Ye;return mt(Ze,"Line: ".concat((Ye=n(Er))!==null&&Ye!==void 0?Ye:""))}),W(Se,Je)};ye(Nn,Se=>{n(Er)!==void 0&&Se(kr)});var z=ie(Nn,2),de=Se=>{var Je=iS(),Ze=H(Je);De(()=>{var Ye;return mt(Ze,"Column: ".concat((Ye=n(gr))!==null&&Ye!==void 0?Ye:""))}),W(Se,Je)};ye(z,Se=>{n(gr)!==void 0&&Se(de)});var Me=ie(z,2),Be=Se=>{var Je=lS(),Ze=H(Je);De(()=>{var Ye;return mt(Ze,"Selection: ".concat((Ye=n(Ar))!==null&&Ye!==void 0?Ye:""," characters"))}),W(Se,Je)};ye(Me,Se=>{n(Ar)!==void 0&&n(Ar)>0&&Se(Be)}),W(Yt,Cn),ht()})(bn,{get editorState(){return n(Ee)}})};ye(Jt,bn=>{i()&&bn(an)});var Mt=ie(Jt,2),Zt=bn=>{Mo(bn,{type:"error",get icon(){return Us},get message(){return n(zt),te(()=>n(zt).message)},get actions(){return n(o)},onClick:Nr,onClose:Ce})};ye(Mt,bn=>{n(zt)&&bn(Zt)});var Tr=ie(Mt,2),wt=bn=>{var Yt=ot(()=>[{icon:Km,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:qe},{icon:ed,text:"No thanks",title:"Close this message",onClick:()=>S(B,!1)}]);Mo(bn,{type:"success",message:"Do you want to format the JSON?",get actions(){return n(Yt)},onClose:Ce})};ye(Tr,bn=>{n(zt),n(B),C(um),n(I),te(()=>!n(zt)&&n(B)&&um(n(I)))&&bn(wt)}),Kv(ie(Tr,2),{get validationErrors(){return n(L)},selectError:Vt}),W(vt,Dn)};ye(st,vt=>{n(ze)||vt(ct)}),De(vt=>ke=Rt(ue,1,"jse-contents svelte-k2b9e6",null,ke,vt),[()=>({"jse-hidden":n(ze)})]),W(se,ee)},sr=se=>{W(se,gS())};return ye(Tn,se=>{je?se(sr,!1):se(mr)}),er(rr,se=>S(Re,se),()=>n(Re)),De(se=>Wr=Rt(rr,1,"jse-text-mode svelte-k2b9e6",null,Wr,se),[()=>({"no-main-menu":!a()})]),W(e,rr),St(t,"focus",Ce),St(t,"collapse",lt),St(t,"expand",$),St(t,"patch",me),St(t,"handlePatch",Ne),St(t,"openTransformModal",at),St(t,"refresh",Bn),St(t,"flush",tr),St(t,"validate",In),ht(xr)}Ot(`/* over all fonts, sizes, and colors */
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
}`);var jS=he('<button type="button"> </button>');Ot(`/* over all fonts, sizes, and colors */
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
}`);var wS=he('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),xS=he('<button type="button"><span class="jse-column-name"> </span> <!></button>');Ot(`/* over all fonts, sizes, and colors */
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
}`);var kS=(e,t)=>t.onClick(),SS=he(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),_S=(e,t,r)=>t.openJSONEditorModal(n(r)),CS=(e,t,r)=>t.extractPath(n(r)),ES=he('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),OS=he('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),$S=(e,t)=>t.onChangeMode(Rr.tree),PS=he('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function MS(e,t){pt(t,!0);var r=ho(()=>t.json?function(j){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,p=[];return function f(g,x){jr(g)&&x.length<v&&Object.keys(g).forEach(w=>{f(g[w],x.concat(w))}),fr(g)&&p.push(x)}(j,[]),p}(t.json).slice(0,99).filter(j=>j.length>0):[]),o=ho(()=>!vn(n(r))),s=ho(()=>t.json===void 0&&(t.text===""||t.text===void 0)),a=ho(()=>n(o)?"Object with nested arrays":n(s)?"An empty document":jr(t.json)?"An object":fr(t.json)?"An empty array":"A ".concat(Ov(t.json,t.parser))),i=PS();i.__click=[kS,t];var l=ie(H(i),2),c=H(l),d=H(c),u=ie(c,2),m=H(u),b=j=>{W(j,Br(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},y=j=>{var v=Ut(),p=nt(v),f=x=>{W(x,SS())},g=x=>{var w=Br();De(()=>{var k;return mt(w,"".concat((k=n(a))!==null&&k!==void 0?k:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),W(x,w)};ye(p,x=>{n(s)&&!t.readOnly?x(f):x(g,!1)},!0),W(j,v)};ye(m,j=>{n(o)?j(b):j(y,!1)});var h=ie(u,2);vr(h,17,()=>n(r),_r,(j,v)=>{var p=ho(()=>function(ne){return Xe(t.json,ne).length}(n(v))),f=OS(),g=H(f),x=H(g),w=H(ie(x)),k=ie(g,2);k.__click=[_S,t,v];var O=H(k),A=ie(k,2),R=ne=>{var G=ES();G.__click=[CS,t,v],W(ne,G)};ye(A,ne=>{t.readOnly||ne(R)}),De(ne=>{var G;mt(x,'"'.concat(ne??"",'" ')),mt(w,"(".concat((G=n(p))!==null&&G!==void 0?G:""," ").concat(n(p)!==1?"items":"item",")")),mt(O,t.readOnly?"View":"Edit")},[()=>go(n(v))]),W(j,f)}),ie(h,2).__click=[$S,t],De(()=>mt(d,n(a))),W(e,i),ht()}Jl(["click"]);Ot(`/* over all fonts, sizes, and colors */
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
}`);var RS=he('<button type="button"><!></button>');Ot(`/* over all fonts, sizes, and colors */
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
}`);var NS=he('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),TS=he('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),AS=he('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),qS=he('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),zS=he('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),IS=he('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),DS=he('<td class="jse-table-cell svelte-1p86y3c"></td>'),LS=he('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),US=he('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),FS=he("<!> <!>",1),VS=he('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),BS=he('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),WS=he('<div role="table"><!> <!></div> <!> <!>',1);function HS(e,t){pt(t,!1);var r=K(void 0,!0),o=K(void 0,!0),s=K(void 0,!0),a=Ur("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=ps("absolute-popup"),c=Sb(),d=qi(),u=qi(),m=typeof window>"u";a("isSSR:",m);var b=_(t,"readOnly",9),y=_(t,"externalContent",9),h=_(t,"externalSelection",9),j=_(t,"history",9),v=_(t,"truncateTextSize",9),p=_(t,"mainMenuBar",9),f=_(t,"escapeControlCharacters",9),g=_(t,"escapeUnicodeCharacters",9),x=_(t,"flattenColumns",9),w=_(t,"parser",9),k=_(t,"parseMemoizeOne",9),O=_(t,"validator",9),A=_(t,"validationParser",9),R=_(t,"indentation",9),ne=_(t,"onChange",9),G=_(t,"onChangeMode",9),F=_(t,"onSelect",9),Z=_(t,"onUndo",9),je=_(t,"onRedo",9),Q=_(t,"onRenderValue",9),we=_(t,"onRenderMenu",9),Re=_(t,"onRenderContextMenu",9),Ee=_(t,"onFocus",9),ce=_(t,"onBlur",9),B=_(t,"onSortModal",9),L=_(t,"onTransformModal",9),le=_(t,"onJSONEditorModal",9),T=K(void 0,!0),E=K(void 0,!0),M=K(void 0,!0),oe=K(void 0,!0),Oe=K(void 0,!0);Hv({onMount:no,onDestroy:Lo,getWindow:()=>Yl(n(E)),hasFocus:()=>Ue&&document.hasFocus()||Mv(n(E)),onFocus:()=>{yt=!0,Ee()&&Ee()()},onBlur:()=>{yt=!1,ce()&&ce()()}});var ae,J=K(void 0,!0),be=K(void 0,!0),P=K(void 0,!0),I=K(void 0,!0),D=K(void 0,!0),ve=K(void 0,!0),Y=K(!1,!0),V=K(!1,!0);function Qe(z){S(ve,(ae=z)?db(n(J),ae.items):void 0)}function rt(z){return Ce.apply(this,arguments)}function Ce(){return(Ce=jt(function*(z){S(ge,void 0),yield Bn(z)})).apply(this,arguments)}function lt(){S(Y,!1),S(V,!1),tt()}var Ae=K(1e4,!0),We=K([],!0),it=K(void 0,!0),Ue=!1,yt=!1,$=K(!1,!0),N=K({},!0),U=K(600,!0),X=K(0,!0),me=18;function Ne(z){S(ge,z)}function qe(z){n(ge)&&z!==void 0&&(zo(z,Ds(n(ge)))&&zo(z,ut(n(ge)))||(a("clearing selection: path does not exist anymore",n(ge)),S(ge,void 0)))}var pe=K(n(J)!==void 0?Ff({json:n(J)}):void 0,!0),ge=K(Nl(h())?h():void 0,!0),ft=K(void 0,!0),at=K(!1,!0);function Ke(z){if(!b()){a("onSortByHeader",z);var de=z.sortDirection===qo.desc?-1:1;Gt(Mb(n(J),[],z.path,de),(Me,Be)=>({state:Be,sortedColumn:z}))}}no(()=>{n(ge)&&cr(ut(n(ge)))});var Ge=K(void 0,!0);function qt(z){if(z.json!==void 0||z.text!==void 0){var de=n(J)!==void 0&&z.json!==void 0;j().add({type:"tree",undo:{patch:de?[{op:"replace",path:"",value:z.json}]:void 0,json:z.json,text:z.text,documentState:z.documentState,textIsRepaired:z.textIsRepaired,selection:ia(z.selection),sortedColumn:z.sortedColumn},redo:{patch:de?[{op:"replace",path:"",value:n(J)}]:void 0,json:n(J),text:n(be),documentState:n(pe),textIsRepaired:n(at),selection:ia(n(ge)),sortedColumn:n(ft)}})}}var _n=K([],!0),$n=_l(_b);function Dt(z,de,Me,Be){Ci(()=>{var Se;try{Se=$n(z,de,Me,Be)}catch(Je){Se=[{path:[],message:"Failed to validate: "+Je.message,severity:Go.warning}]}Ft(Se,n(_n))||(a("validationErrors changed:",Se),S(_n,Se))},Se=>a("validationErrors updated in ".concat(Se," ms")))}function pn(){return a("validate"),n(P)?{parseError:n(P),isRepairable:!1}:(Dt(n(J),O(),w(),A()),vn(n(_n))?void 0:{validationErrors:n(_n)})}function Vt(z,de){if(a("patch",z,de),n(J)===void 0)throw new Error("Cannot apply patch: no JSON");var Me=n(J),Be={json:void 0,text:n(be),documentState:n(pe),selection:ia(n(ge)),sortedColumn:n(ft),textIsRepaired:n(at)},Se=ub(n(J),z),Je=X0(n(J),n(pe),z),Ze=R6(n(ft),z,n(We)),Ye=typeof de=="function"?de(Je.json,Je.documentState,n(ge)):void 0;return S(J,Ye?.json!==void 0?Ye.json:Je.json),S(pe,Ye?.state!==void 0?Ye.state:Je.documentState),S(ge,Ye?.selection!==void 0?Ye.selection:n(ge)),S(ft,Ye?.sortedColumn!==void 0?Ye.sortedColumn:Ze),S(be,void 0),S(at,!1),S(I,void 0),S(D,void 0),S(P,void 0),j().add({type:"tree",undo:Ie({patch:Se},Be),redo:{patch:z,json:void 0,text:void 0,documentState:n(pe),selection:ia(n(ge)),sortedColumn:n(ft),textIsRepaired:n(at)}}),{json:n(J),previousJson:Me,undo:Se,redo:z}}function Gt(z,de){a("handlePatch",z,de);var Me={json:n(J),text:n(be)},Be=Vt(z,de);return fn(Me,Be),Be}function fn(z,de){if((z.json!==void 0||z?.text!==void 0)&&ne()){if(n(be)!==void 0){var Me={text:n(be),json:void 0};ne()(Me,z,{contentErrors:pn(),patchResult:de})}else if(n(J)!==void 0){var Be={text:void 0,json:n(J)};ne()(Be,z,{contentErrors:pn(),patchResult:de})}}}function bt(z){a("pasted json as text",z),S(I,z)}function on(z){a("pasted multiline text",{pastedText:z}),S(D,z)}function $t(z){var de=parseInt(z[0],10),Me=[String(de+1),...z.slice(1)];return zo(n(J),Me)?Qt(Me):Qt(z)}function tt(){a("focus"),n(oe)&&(n(oe).focus(),n(oe).select())}function Bt(z){S(X,z.target.scrollTop)}function At(){n(ge)||S(ge,function(){if(fr(n(J))&&!vn(n(J))&&!vn(n(We)))return Qt(["0",...n(We)[0]])}())}function Pn(){if(n(at)&&n(J)!==void 0){var z={json:n(J),text:n(be)},de={json:n(J),documentState:n(pe),selection:n(ge),sortedColumn:n(ft),text:n(be),textIsRepaired:n(at)};S(be,void 0),S(at,!1),qe(n(J)),qt(de),fn(z,void 0)}return{json:n(J),text:n(be)}}function Bn(z){var{scrollToWhenVisible:de=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Me=n(Y)?jl:0,Be=Qm(z,n(We),N,me),Se=Be-n(X)+Me+me,Je=Jn(z);if(a("scrollTo",{path:z,top:Be,scrollTop:n(X),elem:Je}),!n(M))return Promise.resolve();var Ze=n(M).getBoundingClientRect();if(Je&&!de){var Ye=Je.getBoundingClientRect();if(Ye.bottom>Ze.top&&Ye.top<Ze.bottom)return Promise.resolve()}var Lt=-Math.max(Me+2*me,Ze.height/4);return new Promise(Je?sn=>{c(Je,{container:n(M),offset:Lt,duration:300,callback:()=>{Fn(z),sn()}})}:sn=>{c(Se,{container:n(M),offset:Lt,duration:300,callback:()=>{Kn(),Fn(z),sn()}})})}function Fn(z){var de=Jn(z);if(de&&n(M)){var Me=n(M).getBoundingClientRect(),Be=de.getBoundingClientRect();if(Be.right>Me.right){var Se=Be.right-Me.right;Oo(M,n(M).scrollLeft+=Se)}if(Be.left<Me.left){var Je=Me.left-Be.left;Oo(M,n(M).scrollLeft-=Je)}}}function cr(z){(function(de){if(n(M)){var{rowIndex:Me}=To(de,n(We)),Be=Qm(de,n(We),N,me),Se=Be+(N[Me]||me),Je=me,Ze=n(M).getBoundingClientRect(),Ye=n(X),Lt=n(X)+Ze.height-Je;if(Se>Lt){var sn=Se-Lt;Oo(M,n(M).scrollTop+=sn)}if(Be<Ye){var en=Ye-Be;Oo(M,n(M).scrollTop-=en)}}})(z),Fn(z)}function Jn(z){var de,Me,Be=n(We).find(Je=>fa(z.slice(1),Je)),Se=Be?z.slice(0,1).concat(Be):z;return(de=(Me=n(M))===null||Me===void 0?void 0:Me.querySelector('td[data-path="'.concat(gu(Se),'"]')))!==null&&de!==void 0?de:void 0}function ar(z){var de,{anchor:Me,left:Be,top:Se,width:Je,height:Ze,offsetTop:Ye,offsetLeft:Lt,showTip:sn}=z,en=function(re){var{json:_e,documentState:He,selection:Ve,readOnly:Le,onEditValue:Ct,onEditRow:Et,onToggleEnforceString:Wt,onCut:En,onCopy:tn,onPaste:Vn,onRemove:Pt,onDuplicateRow:ir,onInsertBeforeRow:An,onInsertAfterRow:Gn,onRemoveRow:yn}=re,xt=_e!==void 0,ln=!!Ve,kt=_e!==void 0&&Ve?Xe(_e,ut(Ve)):void 0,dt=xt&&(Ln(Ve)||Lr(Ve)||mn(Ve)),It=!Le&&xt&&Ve!==void 0&&Iu(Ve),or=It&&!lr(kt),Yn=!Le&&dt,Sr=Ve!==void 0&&la(_e,He,ut(Ve));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>Ct(),icon:Oi,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!It},width:"11em",items:[{type:"button",icon:Oi,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>Ct(),disabled:!It},{type:"button",icon:Sr?Pg:Rg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Wt(),disabled:!or}]},{type:"dropdown-button",main:{type:"button",onClick:()=>En(!0),icon:Ei,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Yn},width:"10em",items:[{type:"button",icon:Ei,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>En(!0),disabled:Le||!dt},{type:"button",icon:Ei,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>En(!1),disabled:Le||!dt}]},{type:"dropdown-button",main:{type:"button",onClick:()=>tn(!0),icon:Ya,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!dt},width:"12em",items:[{type:"button",icon:Ya,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>tn(!1),disabled:!dt},{type:"button",icon:Ya,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>tn(!1),disabled:!dt}]},{type:"button",onClick:()=>Vn(),icon:$g,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Le||!ln},{type:"button",onClick:()=>Pt(),icon:yf,text:"Remove",title:"Remove selected contents (Delete)",disabled:Le||!dt}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>Et(),icon:Oi,text:"Edit row",title:"Edit the current row",disabled:Le||!ln||!xt},{type:"button",onClick:()=>ir(),icon:Ag,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Le||!ln||!xt},{type:"button",onClick:()=>An(),icon:wi,text:"Insert before",title:"Insert a row before the current row",disabled:Le||!ln||!xt},{type:"button",onClick:()=>Gn(),icon:wi,text:"Insert after",title:"Insert a row after the current row",disabled:Le||!ln||!xt},{type:"button",onClick:()=>yn(),icon:yf,text:"Remove row",title:"Remove current row",disabled:Le||!ln||!xt}]}]}]}({json:n(J),documentState:n(pe),selection:n(ge),readOnly:b(),onEditValue:Cr,onEditRow:hr,onToggleEnforceString:wr,onCut:Wr,onCopy:Fr,onPaste:zt,onRemove:Xt,onDuplicateRow:Tn,onInsertBeforeRow:mr,onInsertAfterRow:sr,onRemoveRow:se}),Qn=(de=Re()(en))!==null&&de!==void 0?de:en;if(Qn!==!1){var qr={left:Be,top:Se,offsetTop:Ye,offsetLeft:Lt,width:Je,height:Ze,anchor:Me,closeOnOuterClick:!0,onClose:()=>{Ue=!1,tt()}};Ue=!0;var q=i(Ub,{tip:sn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Qn,onRequestClose(){l(q),tt()}},qr)}}function pr(z){if(!Ir(n(ge)))if(z&&(z.stopPropagation(),z.preventDefault()),z&&z.type==="contextmenu"&&z.target!==n(oe))ar({left:z.clientX,top:z.clientY,width:Oa,height:Ea,showTip:!1});else{var de,Me=(de=n(M))===null||de===void 0?void 0:de.querySelector(".jse-table-cell.jse-selected-value");if(Me)ar({anchor:Me,offsetTop:2,width:Oa,height:Ea,showTip:!1});else{var Be,Se=(Be=n(M))===null||Be===void 0?void 0:Be.getBoundingClientRect();Se&&ar({top:Se.top+2,left:Se.left+2,width:Oa,height:Ea,showTip:!1})}}}function tr(z){ar({anchor:K0(z.target,"BUTTON"),offsetTop:0,width:Oa,height:Ea,showTip:!0})}function Cr(){if(!b()&&n(ge)){var z=ut(n(ge));lr(Xe(n(J),z))?ct(z):S(ge,Qt(z))}}function hr(){!b()&&n(ge)&&ct(ut(n(ge)).slice(0,1))}function wr(){if(!b()&&mn(n(ge))){var z=n(ge).path,de=gt(z),Me=Xe(n(J),z),Be=!la(n(J),n(pe),z),Se=Be?String(Me):Zi(String(Me),w());a("handleToggleEnforceString",{enforceString:Be,value:Me,updatedValue:Se}),Gt([{op:"replace",path:de,value:Se}],(Je,Ze)=>({state:ud(n(J),Ze,z,{type:"value",enforceString:Be})}))}}function nr(){return Pe.apply(this,arguments)}function Pe(){return(Pe=jt(function*(){if(a("apply pasted json",n(I)),n(I)){var{onPasteAsJson:z}=n(I);z(),setTimeout(tt)}})).apply(this,arguments)}function zt(){return xn.apply(this,arguments)}function xn(){return(xn=jt(function*(){try{ee(yield navigator.clipboard.readText())}catch(z){console.error(z),S($,!0)}})).apply(this,arguments)}function In(){return ur.apply(this,arguments)}function ur(){return(ur=jt(function*(){a("apply pasted multiline text",n(D)),n(D)&&(ee(JSON.stringify(n(D))),setTimeout(tt))})).apply(this,arguments)}function Nr(){a("clear pasted json"),S(I,void 0),tt()}function Kt(){a("clear pasted multiline text"),S(D,void 0),tt()}function xr(){G()(Rr.text)}function Wr(z){return rr.apply(this,arguments)}function rr(){return(rr=jt(function*(z){yield Ab({json:n(J),selection:n(ge),indentation:z?R():void 0,readOnly:b(),parser:w(),onPatch:Gt})})).apply(this,arguments)}function Fr(){return Mn.apply(this,arguments)}function Mn(){return Mn=jt(function*(){var z=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(J)!==void 0&&(yield qb({json:n(J),selection:n(ge),indentation:z?R():void 0,parser:w()}))}),Mn.apply(this,arguments)}function Xt(){Ib({json:n(J),text:n(be),selection:n(ge),keepSelection:!0,readOnly:b(),onChange:ne(),onPatch:Gt})}function Tt(z){b()||(a("extract",{path:z}),Gt(ib(n(J),Qt(z))))}function Tn(){(function(z){var{json:de,selection:Me,columns:Be,readOnly:Se,onPatch:Je}=z;if(!Se&&de!==void 0&&Me&&Si(Me)){var{rowIndex:Ze,columnIndex:Ye}=To(ut(Me),Be);oo("duplicate row",{rowIndex:Ze});var Lt=[String(Ze)];Je(sb(de,[Lt]),(sn,en)=>({state:en,selection:Qt(Os({rowIndex:Ze<de.length?Ze+1:Ze,columnIndex:Ye},Be))}))}})({json:n(J),selection:n(ge),columns:n(We),readOnly:b(),onPatch:Gt})}function mr(){(function(z){var{json:de,selection:Me,columns:Be,readOnly:Se,onPatch:Je}=z;if(!Se&&de!==void 0&&Me&&Si(Me)){var{rowIndex:Ze}=To(ut(Me),Be);oo("insert before row",{rowIndex:Ze}),Je(_i(de,[String(Ze)],[{key:"",value:jr(de[0])?{}:""}]))}})({json:n(J),selection:n(ge),columns:n(We),readOnly:b(),onPatch:Gt})}function sr(){(function(z){var{json:de,selection:Me,columns:Be,readOnly:Se,onPatch:Je}=z;if(!Se&&de!==void 0&&Me&&Si(Me)){var{rowIndex:Ze,columnIndex:Ye}=To(ut(Me),Be);oo("insert after row",{rowIndex:Ze});var Lt=Ze+1,sn=[String(Lt)],en=[{key:"",value:jr(de[0])?{}:""}];Je(Lt<de.length?_i(de,sn,en):Wf(de,[],en),(Qn,qr)=>({state:qr,selection:Qt(Os({rowIndex:Lt,columnIndex:Ye},Be))}))}})({json:n(J),selection:n(ge),columns:n(We),readOnly:b(),onPatch:Gt})}function se(){(function(z){var{json:de,selection:Me,columns:Be,readOnly:Se,onPatch:Je}=z;if(!Se&&de!==void 0&&Me&&Si(Me)){var{rowIndex:Ze,columnIndex:Ye}=To(ut(Me),Be);oo("remove row",{rowIndex:Ze}),Je(Lu([[String(Ze)]]),(Lt,sn)=>{var en=Ze<Lt.length?Ze:Ze>0?Ze-1:void 0,Qn=en!==void 0?Qt(Os({rowIndex:en,columnIndex:Ye},Be)):void 0;return oo("remove row new selection",{rowIndex:Ze,newRowIndex:en,newSelection:Qn}),{state:sn,selection:Qn}})}})({json:n(J),selection:n(ge),columns:n(We),readOnly:b(),onPatch:Gt})}function ke(){return(ke=jt(function*(z){yield Db({char:z,selectInside:!1,json:n(J),selection:n(ge),readOnly:b(),parser:w(),onPatch:Gt,onReplaceJson:ue,onSelect:Ne})})).apply(this,arguments)}function ze(z){var de;z.preventDefault(),ee((de=z.clipboardData)===null||de===void 0?void 0:de.getData("text/plain"))}function ee(z){z!==void 0&&zb({clipboardText:z,json:n(J),selection:n(ge),readOnly:b(),parser:w(),onPatch:Gt,onChangeText:$e,onPasteMultilineText:on,openRepairModal:vt})}function ue(z,de){var Me={json:n(J),text:n(be)},Be={json:n(J),documentState:n(pe),selection:n(ge),sortedColumn:n(ft),text:n(be),textIsRepaired:n(at)},Se=Eo(z,n(pe)),Je=typeof de=="function"?de(z,Se,n(ge)):void 0;S(J,Je?.json!==void 0?Je.json:z),S(pe,Je?.state!==void 0?Je.state:Se),S(ge,Je?.selection!==void 0?Je.selection:n(ge)),S(ft,void 0),S(be,void 0),S(at,!1),S(P,void 0),qe(n(J)),qt(Be),fn(Me,void 0)}function $e(z,de){a("handleChangeText");var Me={json:n(J),text:n(be)},Be={json:n(J),documentState:n(pe),selection:n(ge),sortedColumn:n(ft),text:n(be),textIsRepaired:n(at)};try{S(J,k()(z)),S(pe,Eo(n(J),n(pe))),S(be,void 0),S(at,!1),S(P,void 0)}catch(Je){try{S(J,k()(ca(z))),S(pe,Eo(n(J),n(pe))),S(be,z),S(at,!0),S(P,void 0)}catch{S(J,void 0),S(pe,void 0),S(be,z),S(at,!1),S(P,n(be)!==""?Fi(n(be),Je.message||String(Je)):void 0)}}if(typeof de=="function"){var Se=de(n(J),n(pe),n(ge));S(J,Se?.json!==void 0?Se.json:n(J)),S(pe,Se?.state!==void 0?Se.state:n(pe)),S(ge,Se?.selection!==void 0?Se.selection:n(ge))}qe(n(J)),qt(Be),fn(Me,void 0)}function Fe(z){a("select validation error",z),S(ge,Qt(z.path)),Bn(z.path)}function st(z){if(n(J)!==void 0){var{id:de,onTransform:Me,onClose:Be}=z,Se=z.rootPath||[];Ue=!0,L()({id:de||u,json:n(J),rootPath:Se||[],onTransform:Je=>{Me?Me({operations:Je,json:n(J),transformedJson:Ko(n(J),Je)}):(a("onTransform",Se,Je),Gt(Je))},onClose:()=>{Ue=!1,setTimeout(tt),Be&&Be()}})}}function ct(z){a("openJSONEditorModal",{path:z}),Ue=!0,le()({content:{json:Xe(n(J),z)},path:z,onPatch:Gt,onClose:()=>{Ue=!1,setTimeout(tt)}})}function vt(z,de){S(Oe,{text:z,onParse:Me=>Gl(Me,Be=>Ql(Be,w())),onRepair:I0,onApply:de,onClose:tt})}function Dn(){(function(z){b()||n(J)===void 0||(Ue=!0,B()({id:d,json:n(J),rootPath:z,onSort:de=>{var{operations:Me,itemPath:Be,direction:Se}=de;a("onSort",Me,z,Be,Se),Gt(Me,(Je,Ze)=>({state:Ze,sortedColumn:{path:Be,sortDirection:Se===-1?qo.desc:qo.asc}}))},onClose:()=>{Ue=!1,setTimeout(tt)}}))})([])}function Jt(){st({rootPath:[]})}function an(z){a("openFind",{findAndReplace:z}),S(Y,!1),S(V,!1),Kn(),S(Y,!0),S(V,z)}function Mt(){if(!b()&&j().canUndo){var z=j().undo();if(zu(z)){var de={json:n(J),text:n(be)};S(J,z.undo.patch?Ko(n(J),z.undo.patch):z.undo.json),S(pe,z.undo.documentState),S(ge,z.undo.selection),S(ft,z.undo.sortedColumn),S(be,z.undo.text),S(at,z.undo.textIsRepaired),S(P,void 0),a("undo",{item:z,json:n(J)}),fn(de,z.undo.patch&&z.redo.patch?{json:n(J),previousJson:de.json,redo:z.undo.patch,undo:z.redo.patch}:void 0),tt(),n(ge)&&Bn(ut(n(ge)),{scrollToWhenVisible:!1})}else Z()(z)}}function Zt(){if(!b()&&j().canRedo){var z=j().redo();if(zu(z)){var de={json:n(J),text:n(be)};S(J,z.redo.patch?Ko(n(J),z.redo.patch):z.redo.json),S(pe,z.redo.documentState),S(ge,z.redo.selection),S(ft,z.redo.sortedColumn),S(be,z.redo.text),S(at,z.redo.textIsRepaired),S(P,void 0),a("redo",{item:z,json:n(J)}),fn(de,z.undo.patch&&z.redo.patch?{json:n(J),previousJson:de.json,redo:z.redo.patch,undo:z.undo.patch}:void 0),tt(),n(ge)&&Bn(ut(n(ge)),{scrollToWhenVisible:!1})}else je()(z)}}function Tr(z){S(U,z.getBoundingClientRect().height)}fe(()=>(C(f()),C(g())),()=>{S(T,$v({escapeControlCharacters:f(),escapeUnicodeCharacters:g()}))}),fe(()=>n(Y),()=>{(function(z){if(n(M)){var de=z?jl:-100;n(M).scrollTo({top:Oo(M,n(M).scrollTop+=de),left:n(M).scrollLeft})}})(n(Y))}),fe(()=>C(y()),()=>{(function(z){var de={json:n(J)},Me=Ol(z)?z.text!==n(be):!Ft(de.json,z.json);if(a("update external content",{isChanged:Me}),Me){var Be={json:n(J),documentState:n(pe),selection:n(ge),sortedColumn:n(ft),text:n(be),textIsRepaired:n(at)};if(Ol(z))try{S(J,k()(z.text)),S(pe,Eo(n(J),n(pe))),S(be,z.text),S(at,!1),S(P,void 0)}catch(Se){try{S(J,k()(ca(z.text))),S(pe,Eo(n(J),n(pe))),S(be,z.text),S(at,!0),S(P,void 0)}catch{S(J,void 0),S(pe,void 0),S(be,z.text),S(at,!1),S(P,n(be)!==""?Fi(n(be),Se.message||String(Se)):void 0)}}else S(J,z.json),S(pe,Eo(n(J),n(pe))),S(be,void 0),S(at,!1),S(P,void 0);qe(n(J)),S(ft,void 0),qt(Be)}})(y())}),fe(()=>C(h()),()=>{(function(z){Ft(n(ge),z)||(a("applyExternalSelection",{selection:n(ge),externalSelection:z}),Nl(z)&&S(ge,z))})(h())}),fe(()=>(n(We),n(J),C(x()),n(Ae)),()=>{S(We,fr(n(J))?function(z,de){var Me=new Set(de.map(gt)),Be=new Set(z.map(gt));for(var Se of Me)Be.has(Se)||Me.delete(Se);for(var Je of Be)Me.has(Je)||Me.add(Je);return[...Me].map(bo)}(O6(n(J),x(),n(Ae)),n(We)):[])}),fe(()=>(n(J),n(We)),()=>{S(it,!(!n(J)||vn(n(We))))}),fe(()=>(n(J),n(Ae)),()=>{S(r,Array.isArray(n(J))&&n(J).length>n(Ae))}),fe(()=>(n(X),n(U),n(J),n(Y),jl),()=>{S(o,$6(n(X),n(U),n(J),N,me,n(Y)?jl:0))}),fe(()=>n(J),()=>{n(J),n(M)&&n(M).scrollTo({top:n(M).scrollTop,left:n(M).scrollLeft})}),fe(()=>n(ge),()=>{var z;z=n(ge),Ft(z,h())||(a("onSelect",z),F()(z))}),fe(()=>(C(b()),C(v()),C(w()),n(T),n(J),n(pe),C(Q())),()=>{S(Ge,{mode:Rr.table,readOnly:b(),truncateTextSize:v(),parser:w(),normalization:n(T),getJson:()=>n(J),getDocumentState:()=>n(pe),findElement:Jn,findNextInside:$t,focus:tt,onPatch:(z,de)=>Gt(function(Me,Be){return Me.flatMap(Se=>{if(av(Se)){var Je=bo(Se.path);if(Je.length>0){for(var Ze=[Se],Ye=nn(Je);Ye.length>0&&!zo(Be,Ye);)Ze.unshift({op:"add",path:gt(Ye),value:{}}),Ye=nn(Ye);return Ze}}return Se})}(z,n(J)),de),onSelect:Ne,onFind:an,onPasteJson:bt,onRenderValue:Q()})}),fe(()=>(n(J),C(O()),C(w()),C(A())),()=>{Dt(n(J),O(),w(),A())}),fe(()=>(n(_n),n(We)),()=>{S(s,P6(n(_n),n(We)))}),Sn();var wt={validate:pn,patch:Vt,focus:tt,acceptAutoRepair:Pn,scrollTo:Bn,findElement:Jn,openTransformModal:st};Nt(!0);var bn=WS();Te("mousedown",Ra,function(z){!el(z.target,de=>de===n(E))&&Ir(n(ge))&&(a("click outside the editor, exit edit mode"),S(ge,ia(n(ge))),yt&&n(oe)&&(n(oe).focus(),n(oe).blur()),a("blur (outside editor)"),n(oe)&&n(oe).blur())});var Yt,hn=nt(bn),Wn=H(hn),Rn=z=>{(function(de,Me){pt(Me,!1);var Be=_(Me,"containsValidArray",9),Se=_(Me,"readOnly",9),Je=_(Me,"showSearch",13,!1),Ze=_(Me,"history",9),Ye=_(Me,"onSort",9),Lt=_(Me,"onTransform",9),sn=_(Me,"onContextMenu",9),en=_(Me,"onUndo",9),Qn=_(Me,"onRedo",9),qr=_(Me,"onRenderMenu",9);function q(){Je(!Je())}var re=K(void 0,!0),_e=K(void 0,!0);fe(()=>(C(Se()),C(Ye()),C(Be()),C(Lt()),C(sn()),C(en()),C(Ze()),C(Qn())),()=>{S(re,Se()?[{type:"space"}]:[{type:"button",icon:Cu,title:"Sort",className:"jse-sort",onClick:Ye(),disabled:Se()||!Be()},{type:"button",icon:Su,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Lt(),disabled:Se()||!Be()},{type:"button",icon:Zu,title:"Search (Ctrl+F)",className:"jse-search",onClick:q,disabled:!Be()},{type:"button",icon:Ng,title:Tv,className:"jse-contextmenu",onClick:sn()},{type:"separator"},{type:"button",icon:vv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:en(),disabled:!Ze().canUndo},{type:"button",icon:fv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Qn(),disabled:!Ze().canRedo},{type:"space"}])}),fe(()=>(C(qr()),n(re)),()=>{S(_e,qr()(n(re))||n(re))}),Sn(),Nt(!0),md(de,{get items(){return n(_e)}}),ht()})(z,{get containsValidArray(){return n(it)},get readOnly(){return b()},get history(){return j()},onSort:Dn,onTransform:Jt,onUndo:Mt,onRedo:Zt,onContextMenu:tr,get onRenderMenu(){return we()},get showSearch(){return n(Y)},set showSearch(de){S(Y,de)},$$legacy:!0})};ye(Wn,z=>{p()&&z(Rn)});var _t=ie(Wn,2),Er=z=>{var de=VS(),Me=nt(de),Be=H(Me);Be.readOnly=!0,er(Be,Ye=>S(oe,Ye),()=>n(oe));var Se=ie(Me,2),Je=Ye=>{var Lt=US(),sn=nt(Lt);Rb(H(sn),{get json(){return n(J)},get documentState(){return n(pe)},get parser(){return w()},get showSearch(){return n(Y)},get showReplace(){return n(V)},get readOnly(){return b()},get columns(){return n(We)},onSearch:Qe,onFocus:rt,onPatch:Gt,onClose:lt});var en=ie(sn,2),Qn=H(en),qr=H(Qn),q=H(qr),re=H(q),_e=H(re),He=dt=>{var It=ot(()=>(C(di),n(s),te(()=>{var br;return di([],(br=n(s))===null||br===void 0?void 0:br.root)}))),or=Ut(),Yn=nt(or),Sr=br=>{var Hr=NS();Ai(H(Hr),{get validationError(){return n(It)},get onExpand(){return Ao}}),W(br,Hr)};ye(Yn,br=>{n(It)&&br(Sr)}),W(dt,or)};ye(_e,dt=>{C(vn),n(s),te(()=>{var It;return!vn((It=n(s))===null||It===void 0?void 0:It.root)})&&dt(He)});var Ve=ie(re);vr(Ve,1,()=>n(We),_r,(dt,It)=>{var or=TS();(function(Yn,Sr){pt(Sr,!1);var br=K(void 0,!0),Hr=K(void 0,!0),ga=K(void 0,!0),jo=_(Sr,"path",9),Uo=_(Sr,"sortedColumn",9),na=_(Sr,"readOnly",9),Fo=_(Sr,"onSort",9);fe(()=>(C(jo()),go),()=>{S(br,vn(jo())?"values":go(jo()))}),fe(()=>(C(Uo()),C(jo())),()=>{var Or;S(Hr,Uo()&&Ft(jo(),(Or=Uo())===null||Or===void 0?void 0:Or.path)?Uo().sortDirection:void 0)}),fe(()=>(n(Hr),vm),()=>{S(ga,n(Hr)?vm[n(Hr)]:void 0)}),Sn(),Nt(!0);var Kr,Jr=xS(),wo=H(Jr),ba=H(wo),xo=ie(wo,2),On=Or=>{var yr=wS(),gs=H(yr),ei=ot(()=>(n(Hr),C(qo),C(qa),C(vp),te(()=>n(Hr)===qo.asc?qa:vp)));rn(gs,{get data(){return n(ei)}}),De(()=>kn(yr,"title","Currently sorted in ".concat(n(ga)," order"))),W(Or,yr)};ye(xo,Or=>{n(Hr)!==void 0&&Or(On)}),De((Or,yr)=>{Kr=Rt(Jr,1,"jse-column-header svelte-5pxwfq",null,Kr,Or),kn(Jr,"title",na()?n(br):n(br)+" (Click to sort the data by this column)"),mt(ba,yr)},[()=>({"jse-readonly":na()}),()=>(C(Ca),n(br),C(50),te(()=>Ca(n(br),50)))]),Te("click",Jr,function(){na()||Fo()({path:jo(),sortDirection:n(Hr)===qo.asc?qo.desc:qo.asc})}),W(Yn,Jr),ht()})(H(or),{get path(){return n(It)},get sortedColumn(){return n(ft)},get readOnly(){return b()},onSort:Ke}),W(dt,or)});var Le=ie(Ve),Ct=dt=>{var It=AS(),or=H(It),Yn=ot(()=>(n(J),te(()=>Array.isArray(n(J))?n(J).length:0)));(function(Sr,br){pt(br,!1);var Hr=_(br,"count",9),ga=_(br,"maxSampleCount",9),jo=_(br,"readOnly",9),Uo=_(br,"onRefresh",9);Nt(!0);var na,Fo=RS();rn(H(Fo),{get data(){return Pw}}),De(Kr=>{na=Rt(Fo,1,"jse-column-header svelte-1wgrwv3",null,na,Kr),kn(Fo,"title","The Columns are created by sampling ".concat(ga()," items out of ").concat(Hr(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")},[()=>({"jse-readonly":jo()})]),Te("click",Fo,()=>Uo()()),W(Sr,Fo),ht()})(or,{get count(){return n(Yn)},get maxSampleCount(){return n(Ae)},get readOnly(){return b()},onRefresh:()=>S(Ae,1/0)}),W(dt,It)};ye(Le,dt=>{n(r)&&dt(Ct)});var Et,Wt,En=ie(q),tn=H(En),Vn=ie(En);vr(Vn,1,()=>(n(o),te(()=>n(o).visibleItems)),_r,(dt,It,or)=>{var Yn=ot(()=>(n(o),te(()=>n(o).startIndex+or))),Sr=ot(()=>(n(s),C(n(Yn)),te(()=>n(s).rows[n(Yn)]))),br=ot(()=>(C(di),C(n(Yn)),C(n(Sr)),te(()=>{var Kr;return di([String(n(Yn))],(Kr=n(Sr))===null||Kr===void 0?void 0:Kr.row)}))),Hr=ot(()=>(C(sa),n(J),n(ve),C(n(Yn)),te(()=>sa(n(J),n(ve),[String(n(Yn))])))),ga=LS(),jo=H(ga);O0(jo,()=>n(Yn),Kr=>{var Jr=qS(),wo=H(Jr),ba=ie(wo),xo=On=>{Ai(On,{get validationError(){return n(br)},get onExpand(){return Ao}})};ye(ba,On=>{n(br)&&On(xo)}),ao(Jr,(On,Or)=>uu?.(On,Or),()=>On=>function(Or,yr){N[yr]=Or.getBoundingClientRect().height}(On,n(Yn))),De(()=>{var On;return mt(wo,"".concat((On=n(Yn))!==null&&On!==void 0?On:""," "))}),W(Kr,Jr)});var Uo=ie(jo);vr(Uo,1,()=>n(We),_r,(Kr,Jr,wo,ba)=>{var xo,On=ot(()=>(C(n(Yn)),n(Jr),te(()=>[String(n(Yn))].concat(n(Jr))))),Or=ot(()=>(C(Xe),n(It),n(Jr),te(()=>Xe(n(It),n(Jr))))),yr=ot(()=>(C(mn),n(ge),C(fa),C(n(On)),te(()=>mn(n(ge))&&fa(n(ge).path,n(On))))),gs=ot(()=>(C(n(Sr)),te(()=>{var $r;return($r=n(Sr))===null||$r===void 0?void 0:$r.columns[wo]}))),ei=ot(()=>(C(di),C(n(On)),C(n(gs)),te(()=>di(n(On),n(gs))))),bs=IS(),tl=H(bs),ti=H(tl),nl=$r=>{var uo=ot(()=>(C(Uu),C(sa),n(It),C(n(Hr)),n(Jr),te(()=>Uu(sa(n(It),n(Hr),n(Jr)))))),rl=ot(()=>(C(n(uo)),te(()=>!!n(uo)&&n(uo).some(js=>js.active)))),ol=ot(()=>(C(vn),C(n(uo)),te(()=>!vn(n(uo)))));(function(js,Xr){pt(Xr,!1);var al=_(Xr,"path",9),Gv=_(Xr,"value",9),Yv=_(Xr,"parser",9),Bb=_(Xr,"isSelected",9),Wb=_(Xr,"containsSearchResult",9),Hb=_(Xr,"containsActiveSearchResult",9),Kb=_(Xr,"onEdit",9);Nt(!0);var Xv,tc=jS(),Jb=H(tc);De((sl,Qb)=>{Xv=Rt(tc,1,"jse-inline-value svelte-1jv89ui",null,Xv,sl),mt(Jb,Qb)},[()=>({"jse-selected":Bb(),"jse-highlight":Wb(),"jse-active":Hb()}),()=>(C(Ca),C(Yv()),C(Gv()),C(50),te(()=>{var sl;return Ca((sl=Yv().stringify(Gv()))!==null&&sl!==void 0?sl:"",50)}))]),Te("dblclick",tc,()=>Kb()(al())),W(js,tc),ht()})($r,{get path(){return n(On)},get value(){return n(Or)},get parser(){return w()},get isSelected(){return n(yr)},get containsSearchResult(){return n(ol)},get containsActiveSearchResult(){return n(rl)},onEdit:ct})},gd=$r=>{var uo=ot(()=>(C(sa),n(J),n(ve),C(n(On)),te(()=>{var Xr;return(Xr=sa(n(J),n(ve),n(On)))===null||Xr===void 0?void 0:Xr.searchResults}))),rl=ot(()=>n(Or)!==void 0?n(Or):""),ol=ot(()=>(C(la),n(J),n(pe),C(n(On)),te(()=>la(n(J),n(pe),n(On))))),js=ot(()=>n(yr)?n(ge):void 0);Ob($r,{get path(){return n(On)},get value(){return n(rl)},get enforceString(){return n(ol)},get selection(){return n(js)},get searchResultItems(){return n(uo)},get context(){return n(Ge)}})};ye(ti,$r=>{C(lr),C(n(Or)),te(()=>lr(n(Or)))?$r(nl):$r(gd,!1)});var bd=ie(ti),yd=$r=>{var uo=zS();Ha(H(uo),{selected:!0,onContextMenu:ar}),W($r,uo)};ye(bd,$r=>{C(b()),C(n(yr)),C(Ir),n(ge),te(()=>!b()&&n(yr)&&!Ir(n(ge)))&&$r(yd)});var ra=ie(tl,2),ys=$r=>{Ai($r,{get validationError(){return n(ei)},get onExpand(){return Ao}})};ye(ra,$r=>{n(ei)&&$r(ys)}),De(($r,uo)=>{kn(bs,"data-path",$r),xo=Rt(tl,1,"jse-value-outer svelte-1p86y3c",null,xo,uo)},[()=>(C(gu),C(n(On)),te(()=>gu(n(On)))),()=>({"jse-selected-value":n(yr)})]),W(Kr,bs)});var na=ie(Uo),Fo=Kr=>{W(Kr,DS())};ye(na,Kr=>{n(r)&&Kr(Fo)}),W(dt,ga)});var Pt,ir=H(ie(Vn));er(en,dt=>S(M,dt),()=>n(M)),ao(en,(dt,It)=>uu?.(dt,It),()=>Tr),Gr(()=>Te("scroll",en,Bt));var An=ie(en,2),Gn=dt=>{var It=ot(()=>(n(I),te(()=>"You pasted a JSON ".concat(Array.isArray(n(I).contents)?"array":"object"," as text")))),or=ot(()=>[{icon:is,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:nr},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Nr}]);Mo(dt,{type:"info",get message(){return n(It)},get actions(){return n(or)}})};ye(An,dt=>{n(I)&&dt(Gn)});var yn=ie(An,2),xt=dt=>{var It=ot(()=>[{icon:is,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:In},{text:"Leave as is",title:"Keep the pasted array",onClick:Kt}]);Mo(dt,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(It)}})};ye(yn,dt=>{n(D)&&dt(xt)});var ln=ie(yn,2),kt=dt=>{var It=ot(()=>b()?[]:[{icon:pv,text:"Ok",title:"Accept the repaired document",onClick:Pn},{icon:_u,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:xr}]);Mo(dt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(It)},onClose:tt})};ye(ln,dt=>{n(at)&&dt(kt)}),Kv(ie(ln,2),{get validationErrors(){return n(_n)},selectError:Fe}),De((dt,It,or)=>{Et=Rt(En,1,"jse-table-invisible-start-section svelte-1p86y3c",null,Et,dt),kn(tn,"colspan",(n(We),te(()=>n(We).length))),Wt=Io(tn,"",Wt,It),kn(ir,"colspan",(n(We),te(()=>n(We).length))),Pt=Io(ir,"",Pt,or)},[()=>({"jse-search-box-background":n(Y)}),()=>({height:(n(o),te(()=>n(o).startHeight+"px"))}),()=>({height:(n(o),te(()=>n(o).endHeight+"px"))})]),W(Ye,Lt)},Ze=Ye=>{var Lt=Ut(),sn=nt(Lt),en=qr=>{var q=FS(),re=nt(q),_e=ot(()=>b()?[]:[{icon:_u,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:xr}]);Mo(re,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(_e)}}),Lb(ie(re,2),{get text(){return n(be)},get json(){return n(J)},get indentation(){return R()},get parser(){return w()}}),W(qr,q)},Qn=qr=>{MS(qr,{get text(){return n(be)},get json(){return n(J)},get readOnly(){return b()},get parser(){return w()},openJSONEditorModal:ct,extractPath:Tt,get onChangeMode(){return G()},onClick:()=>{tt()}})};ye(sn,qr=>{n(P)&&n(be)!==void 0&&n(be)!==""?qr(en):qr(Qn,!1)},!0),W(Ye,Lt)};ye(Se,Ye=>{n(it)?Ye(Je):Ye(Ze,!1)}),Te("paste",Be,ze),W(z,de)},gr=z=>{W(z,BS())};ye(_t,z=>{m?z(gr,!1):z(Er)}),er(hn,z=>S(E,z),()=>n(E));var Ar=ie(hn,2),Cn=z=>{Cb(z,{onClose:()=>S($,!1)})};ye(Ar,z=>{n($)&&z(Cn)});var Nn=ie(Ar,2),kr=z=>{Eb(z,os(()=>n(Oe),{onClose:()=>{var de;(de=n(Oe))===null||de===void 0||de.onClose(),S(Oe,void 0)}}))};return ye(Nn,z=>{n(Oe)&&z(kr)}),De(z=>Yt=Rt(hn,1,"jse-table-mode svelte-1p86y3c",null,Yt,z),[()=>({"no-main-menu":!p()})]),Te("mousedown",hn,function(z){if(z.buttons===1||z.buttons===2){var de=z.target;de.isContentEditable||tt();var Me=J0(de);if(Me){if(Ir(n(ge))&&Tl(n(J),n(ge),Me))return;S(ge,Qt(Me)),z.preventDefault()}}}),Te("keydown",hn,function(z){var de=Da(z);if(a("keydown",{combo:de,key:z.key}),de==="Ctrl+X"&&(z.preventDefault(),Wr(!0)),de==="Ctrl+Shift+X"&&(z.preventDefault(),Wr(!1)),de==="Ctrl+C"&&(z.preventDefault(),Fr(!0)),de==="Ctrl+Shift+C"&&(z.preventDefault(),Fr(!1)),de==="Ctrl+D"&&(z.preventDefault(),Tn()),de!=="Delete"&&de!=="Backspace"||(z.preventDefault(),Xt()),de==="Insert"&&z.preventDefault(),de==="Ctrl+A"&&z.preventDefault(),de==="Ctrl+Q"&&pr(z),de==="ArrowLeft"&&(z.preventDefault(),At(),n(ge))){var Me=function(Lt,sn){var{rowIndex:en,columnIndex:Qn}=To(ut(sn),Lt);return Qn>0?Qt(Os({rowIndex:en,columnIndex:Qn-1},Lt)):sn}(n(We),n(ge));S(ge,Me),cr(ut(Me))}if(de==="ArrowRight"&&(z.preventDefault(),At(),n(ge))){var Be=function(Lt,sn){var{rowIndex:en,columnIndex:Qn}=To(ut(sn),Lt);return Qn<Lt.length-1?Qt(Os({rowIndex:en,columnIndex:Qn+1},Lt)):sn}(n(We),n(ge));S(ge,Be),cr(ut(Be))}if(de==="ArrowUp"&&(z.preventDefault(),At(),n(ge))){var Se=function(Lt,sn){var{rowIndex:en,columnIndex:Qn}=To(ut(sn),Lt);return en>0?Qt(Os({rowIndex:en-1,columnIndex:Qn},Lt)):sn}(n(We),n(ge));S(ge,Se),cr(ut(Se))}if(de==="ArrowDown"&&(z.preventDefault(),At(),n(ge))){var Je=function(Lt,sn,en){var{rowIndex:Qn,columnIndex:qr}=To(ut(en),sn);return Qn<Lt.length-1?Qt(Os({rowIndex:Qn+1,columnIndex:qr},sn)):en}(n(J),n(We),n(ge));S(ge,Je),cr(ut(Je))}if(de==="Enter"&&n(ge)&&mn(n(ge))){z.preventDefault();var Ze=n(ge).path;lr(Xe(n(J),Ze))?ct(Ze):b()||S(ge,Ie(Ie({},n(ge)),{},{edit:!0}))}if(de.replace(/^Shift\+/,"").length===1&&n(ge))return z.preventDefault(),void function(Lt){ke.apply(this,arguments)}(z.key);if(de==="Ctrl+Enter"&&mn(n(ge))){z.preventDefault();var Ye=Xe(n(J),n(ge).path);cd(Ye)&&window.open(String(Ye),"_blank")}de==="Escape"&&n(ge)&&(z.preventDefault(),S(ge,void 0)),de==="Ctrl+F"&&(z.preventDefault(),an(!1)),de==="Ctrl+H"&&(z.preventDefault(),an(!0)),de==="Ctrl+Z"&&(z.preventDefault(),Mt()),de==="Ctrl+Shift+Z"&&(z.preventDefault(),Zt())}),Te("contextmenu",hn,pr),W(e,bn),St(t,"validate",pn),St(t,"patch",Vt),St(t,"focus",tt),St(t,"acceptAutoRepair",Pn),St(t,"scrollTo",Bn),St(t,"findElement",Jn),St(t,"openTransformModal",st),ht(wt)}function Ym(e,t){pt(t,!1);var r=_(t,"content",8),o=_(t,"selection",12),s=_(t,"readOnly",8),a=_(t,"indentation",8),i=_(t,"tabSize",8),l=_(t,"truncateTextSize",8),c=_(t,"externalMode",8),d=_(t,"mainMenuBar",8),u=_(t,"navigationBar",8),m=_(t,"statusBar",8),b=_(t,"askToFormat",8),y=_(t,"escapeControlCharacters",8),h=_(t,"escapeUnicodeCharacters",8),j=_(t,"flattenColumns",8),v=_(t,"parser",8),p=_(t,"parseMemoizeOne",8),f=_(t,"validator",8),g=_(t,"validationParser",8),x=_(t,"pathParser",8),w=_(t,"insideModal",8),k=_(t,"onChange",8),O=_(t,"onChangeMode",8),A=_(t,"onSelect",8),R=_(t,"onRenderValue",8),ne=_(t,"onClassName",8),G=_(t,"onRenderMenu",8),F=_(t,"onRenderContextMenu",8),Z=_(t,"onError",8),je=_(t,"onFocus",8),Q=_(t,"onBlur",8),we=_(t,"onSortModal",8),Re=_(t,"onTransformModal",8),Ee=_(t,"onJSONEditorModal",8),ce=K(),B=K(),L=K(),le=Ur("jsoneditor:JSONEditorRoot"),T=K(Vb({onChange:N=>S(T,N)}).get()),E=K(c());function M(N){if(ym(N)){S(E,N.undo.mode);var U=n(T).items(),X=U.findIndex(Ne=>Ne===N),me=X!==-1?U[X-1]:void 0;le("handleUndo",{index:X,item:N,items:U,prevItem:me}),me&&o(me.redo.selection),O()(n(E))}}function oe(N){if(ym(N)){S(E,N.redo.mode);var U=n(T).items(),X=U.findIndex(Ne=>Ne===N),me=X!==-1?U[X+1]:void 0;le("handleRedo",{index:X,item:N,items:U,nextItem:me}),me&&o(me.undo.selection),O()(n(E))}}var Oe=K(),ae={type:"separator"},J=K(),be=K();function P(N){if(n(ce))return n(ce).patch(N);if(n(B))return n(B).patch(N);if(n(L))return n(L).patch(N);throw new Error('Method patch is not available in mode "'.concat(n(E),'"'))}function I(N,U){if(n(ce))return n(ce).expand(N,U);if(n(L))return n(L).expand(N,U);throw new Error('Method expand is not available in mode "'.concat(n(E),'"'))}function D(N,U){if(n(ce))return n(ce).collapse(N,U);if(n(L))return n(L).collapse(N,U);throw new Error('Method collapse is not available in mode "'.concat(n(E),'"'))}function ve(N){if(n(L))n(L).openTransformModal(N);else if(n(ce))n(ce).openTransformModal(N);else{if(!n(B))throw new Error('Method transform is not available in mode "'.concat(n(E),'"'));n(B).openTransformModal(N)}}function Y(){if(n(L))return n(L).validate();if(n(ce))return n(ce).validate();if(n(B))return n(B).validate();throw new Error('Method validate is not available in mode "'.concat(n(E),'"'))}function V(){return n(ce)?n(ce).acceptAutoRepair():r()}function Qe(N){if(n(ce))return n(ce).scrollTo(N);if(n(B))return n(B).scrollTo(N);throw new Error('Method scrollTo is not available in mode "'.concat(n(E),'"'))}function rt(N){if(n(ce))return n(ce).findElement(N);if(n(B))return n(B).findElement(N);throw new Error('Method findElement is not available in mode "'.concat(n(E),'"'))}function Ce(){n(L)?n(L).focus():n(ce)?n(ce).focus():n(B)&&n(B).focus()}function lt(){return Ae.apply(this,arguments)}function Ae(){return(Ae=jt(function*(){n(L)&&(yield n(L).refresh())})).apply(this,arguments)}fe(()=>C(c()),()=>{(function(N){if(N!==n(E)){var U={type:"mode",undo:{mode:n(E),selection:void 0},redo:{mode:N,selection:void 0}};n(E)==="text"&&n(L)&&n(L).flush(),le("add history item",U),n(T).add(U),S(E,N)}})(c())}),fe(()=>(n(E),C(O())),()=>{S(Oe,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(E),")"),className:"jse-group-button jse-first"+(n(E)===Rr.text?" jse-selected":""),onClick:()=>O()(Rr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(E),")"),className:"jse-group-button "+(n(E)===Rr.tree?" jse-selected":""),onClick:()=>O()(Rr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(E),")"),className:"jse-group-button jse-last"+(n(E)===Rr.table?" jse-selected":""),onClick:()=>O()(Rr.table)}])}),fe(()=>(n(Oe),C(G()),n(E),C(w()),C(s())),()=>{S(J,N=>{var U=Uf(N[0])?n(Oe).concat(N):n(Oe).concat(ae,N),X=hf(U);return G()(U,{mode:n(E),modal:w(),readOnly:s()})||X})}),fe(()=>(C(F()),n(E),C(w()),C(s()),C(o())),()=>{S(be,N=>{var U,X=hf(N);return(U=F()(N,{mode:n(E),modal:w(),readOnly:s(),selection:o()}))!==null&&U!==void 0?U:!s()&&X})}),Sn();var We={patch:P,expand:I,collapse:D,transform:ve,validate:Y,acceptAutoRepair:V,scrollTo:Qe,findElement:rt,focus:Ce,refresh:lt};Nt();var it=Ut(),Ue=nt(it),yt=N=>{er(yS(N,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(T)},get readOnly(){return s()},get indentation(){return a()},get tabSize(){return i()},get mainMenuBar(){return d()},get statusBar(){return m()},get askToFormat(){return b()},get escapeUnicodeCharacters(){return h()},get parser(){return v()},get validator(){return f()},get validationParser(){return g()},get onChange(){return k()},get onChangeMode(){return O()},get onSelect(){return A()},onUndo:M,onRedo:oe,get onError(){return Z()},get onFocus(){return je()},get onBlur(){return Q()},get onRenderMenu(){return n(J)},get onSortModal(){return we()},get onTransformModal(){return Re()},$$legacy:!0}),U=>S(L,U),()=>n(L))},$=N=>{var U=Ut(),X=nt(U),me=qe=>{er(HS(qe,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(T)},get readOnly(){return s()},get truncateTextSize(){return l()},get mainMenuBar(){return d()},get escapeControlCharacters(){return y()},get escapeUnicodeCharacters(){return h()},get flattenColumns(){return j()},get parser(){return v()},get parseMemoizeOne(){return p()},get validator(){return f()},get validationParser(){return g()},get indentation(){return a()},get onChange(){return k()},get onChangeMode(){return O()},get onSelect(){return A()},onUndo:M,onRedo:oe,get onRenderValue(){return R()},get onFocus(){return je()},get onBlur(){return Q()},get onRenderMenu(){return n(J)},get onRenderContextMenu(){return n(be)},get onSortModal(){return we()},get onTransformModal(){return Re()},get onJSONEditorModal(){return Ee()},$$legacy:!0}),pe=>S(B,pe),()=>n(B))},Ne=qe=>{er(ov(qe,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(T)},get readOnly(){return s()},get indentation(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return d()},get navigationBar(){return u()},get escapeControlCharacters(){return y()},get escapeUnicodeCharacters(){return h()},get parser(){return v()},get parseMemoizeOne(){return p()},get validator(){return f()},get validationParser(){return g()},get pathParser(){return x()},get onError(){return Z()},get onChange(){return k()},get onChangeMode(){return O()},get onSelect(){return A()},onUndo:M,onRedo:oe,get onRenderValue(){return R()},get onClassName(){return ne()},get onFocus(){return je()},get onBlur(){return Q()},get onRenderMenu(){return n(J)},get onRenderContextMenu(){return n(be)},get onSortModal(){return we()},get onTransformModal(){return Re()},get onJSONEditorModal(){return Ee()},$$legacy:!0}),pe=>S(ce,pe),()=>n(ce))};ye(X,qe=>{n(E),C(Rr),te(()=>n(E)===Rr.table)?qe(me):qe(Ne,!1)},!0),W(N,U)};return ye(Ue,N=>{n(E),C(Rr),te(()=>n(E)===Rr.text||String(n(E))==="code")?N(yt):N($,!1)}),W(e,it),St(t,"patch",P),St(t,"expand",I),St(t,"collapse",D),St(t,"transform",ve),St(t,"validate",Y),St(t,"acceptAutoRepair",V),St(t,"scrollTo",Qe),St(t,"findElement",rt),St(t,"focus",Ce),St(t,"refresh",lt),ht(We)}Ot(`/* over all fonts, sizes, and colors */
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
}`);var KS=he('<div class="jse-error svelte-t4zsk3"> </div>'),JS=he('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),QS=he('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),GS=he('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),YS=he('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),XS=he('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),ZS={};Ot(`/* over all fonts, sizes, and colors */
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
}`);var vi=ld(()=>ZS),e8=he('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),t8=he('<div class="jse-error svelte-lwzlls"> </div>'),n8=he('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);Ot(`/* over all fonts, sizes, and colors */
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
}`);var r8=he('<div role="none"><!></div> <!> <!> <!>',1);function o8(e,t){pt(t,!1);var r=K(void 0,!0),o=Ur("jsoneditor:JSONEditor"),s={text:""},a=void 0,i=!1,l=Rr.tree,c=!0,d=!0,u=!0,m=!0,b=!1,y=!1,h=!0,j=JSON,v=void 0,p=JSON,f={parse:e4,stringify:go},g=[yk],x=g[0].id,w=Ao,k=void 0,O=void 0,A=Zk,R=Ao,ne=Ao,G=Ao,F=Ao,Z=Pe=>{console.error(Pe),alert(Pe.toString())},je=Ao,Q=Ao,we=_(t,"content",13,s),Re=_(t,"selection",13,a),Ee=_(t,"readOnly",13,i),ce=_(t,"indentation",13,2),B=_(t,"tabSize",13,4),L=_(t,"truncateTextSize",13,1e3),le=_(t,"mode",13,l),T=_(t,"mainMenuBar",13,c),E=_(t,"navigationBar",13,d),M=_(t,"statusBar",13,u),oe=_(t,"askToFormat",13,m),Oe=_(t,"escapeControlCharacters",13,b),ae=_(t,"escapeUnicodeCharacters",13,y),J=_(t,"flattenColumns",13,h),be=_(t,"parser",13,j),P=_(t,"validator",13,v),I=_(t,"validationParser",13,p),D=_(t,"pathParser",13,f),ve=_(t,"queryLanguages",13,g),Y=_(t,"queryLanguageId",13,x),V=_(t,"onChangeQueryLanguage",13,w),Qe=_(t,"onChange",13,k),rt=_(t,"onSelect",13,O),Ce=_(t,"onRenderValue",13,A),lt=_(t,"onClassName",13,R),Ae=_(t,"onRenderMenu",13,ne),We=_(t,"onRenderContextMenu",13,G),it=_(t,"onChangeMode",13,F),Ue=_(t,"onError",13,Z),yt=_(t,"onFocus",13,je),$=_(t,"onBlur",13,Q),N=K(ki(),!0),U=K(!1,!0),X=K(void 0,!0),me=K(void 0,!0),Ne=K(void 0,!0),qe=K(void 0,!0),pe=K(be(),!0);function ge(){return we()}function ft(Pe){o("set");var zt=Gd(Pe);if(zt)throw new Error(zt);S(N,ki()),we(Pe),Kn()}function at(Pe){o("update");var zt=Gd(Pe);if(zt)throw new Error(zt);we(Pe),Kn()}function Ke(Pe){var zt=n(X).patch(Pe);return Kn(),zt}function Ge(Pe){Re(Pe),Kn()}function qt(Pe,zt){n(X).expand(Pe,zt),Kn()}function _n(Pe){var zt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(X).collapse(Pe,zt),Kn()}function $n(){var Pe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(X).transform(Pe),Kn()}function Dt(){return n(X).validate()}function pn(){var Pe=n(X).acceptAutoRepair();return Kn(),Pe}function Vt(Pe){return Gt.apply(this,arguments)}function Gt(){return(Gt=jt(function*(Pe){yield n(X).scrollTo(Pe)})).apply(this,arguments)}function fn(Pe){return n(X).findElement(Pe)}function bt(){n(X).focus(),Kn()}function on(){return $t.apply(this,arguments)}function $t(){return($t=jt(function*(){yield n(X).refresh()})).apply(this,arguments)}function tt(Pe){var zt,xn,In,ur,Nr,Kt,xr,Wr,rr,Fr,Mn,Xt,Tt,Tn,mr,sr,se,ke,ze,ee,ue,$e,Fe,st,ct,vt,Dn,Jt,an,Mt,Zt,Tr=Object.keys(Pe);for(var wt of Tr)switch(wt){case"content":we((zt=Pe[wt])!==null&&zt!==void 0?zt:s);break;case"selection":Re((xn=Pe[wt])!==null&&xn!==void 0?xn:a);break;case"readOnly":Ee((In=Pe[wt])!==null&&In!==void 0?In:i);break;case"indentation":ce((ur=Pe[wt])!==null&&ur!==void 0?ur:2);break;case"tabSize":B((Nr=Pe[wt])!==null&&Nr!==void 0?Nr:4);break;case"truncateTextSize":L((Kt=Pe[wt])!==null&&Kt!==void 0?Kt:1e3);break;case"mode":le((xr=Pe[wt])!==null&&xr!==void 0?xr:l);break;case"mainMenuBar":T((Wr=Pe[wt])!==null&&Wr!==void 0?Wr:c);break;case"navigationBar":E((rr=Pe[wt])!==null&&rr!==void 0?rr:d);break;case"statusBar":M((Fr=Pe[wt])!==null&&Fr!==void 0?Fr:u);break;case"askToFormat":oe((Mn=Pe[wt])!==null&&Mn!==void 0?Mn:m);break;case"escapeControlCharacters":Oe((Xt=Pe[wt])!==null&&Xt!==void 0?Xt:b);break;case"escapeUnicodeCharacters":ae((Tt=Pe[wt])!==null&&Tt!==void 0?Tt:y);break;case"flattenColumns":J((Tn=Pe[wt])!==null&&Tn!==void 0?Tn:h);break;case"parser":be((mr=Pe[wt])!==null&&mr!==void 0?mr:j);break;case"validator":P((sr=Pe[wt])!==null&&sr!==void 0?sr:v);break;case"validationParser":I((se=Pe[wt])!==null&&se!==void 0?se:p);break;case"pathParser":D((ke=Pe[wt])!==null&&ke!==void 0?ke:f);break;case"queryLanguages":ve((ze=Pe[wt])!==null&&ze!==void 0?ze:g);break;case"queryLanguageId":Y((ee=Pe[wt])!==null&&ee!==void 0?ee:x);break;case"onChangeQueryLanguage":V((ue=Pe[wt])!==null&&ue!==void 0?ue:w);break;case"onChange":Qe(($e=Pe[wt])!==null&&$e!==void 0?$e:k);break;case"onRenderValue":Ce((Fe=Pe[wt])!==null&&Fe!==void 0?Fe:A);break;case"onClassName":lt((st=Pe[wt])!==null&&st!==void 0?st:R);break;case"onRenderMenu":Ae((ct=Pe[wt])!==null&&ct!==void 0?ct:ne);break;case"onRenderContextMenu":We((vt=Pe[wt])!==null&&vt!==void 0?vt:G);break;case"onChangeMode":it((Dn=Pe[wt])!==null&&Dn!==void 0?Dn:F);break;case"onSelect":rt((Jt=Pe[wt])!==null&&Jt!==void 0?Jt:O);break;case"onError":Ue((an=Pe[wt])!==null&&an!==void 0?an:Z);break;case"onFocus":yt((Mt=Pe[wt])!==null&&Mt!==void 0?Mt:je);break;case"onBlur":$((Zt=Pe[wt])!==null&&Zt!==void 0?Zt:Q);break;default:bn(wt)}function bn(Yt){o('Unknown property "'.concat(Yt,'"'))}ve().some(Yt=>Yt.id===Y())||Y(ve()[0].id),Kn()}function Bt(){return At.apply(this,arguments)}function At(){return(At=jt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function Pn(Pe,zt,xn){we(Pe),Qe()&&Qe()(Pe,zt,xn)}function Bn(Pe){Re(Pe),rt()&&rt()(hf(Pe))}function Fn(){S(U,!0),yt()&&yt()()}function cr(){S(U,!1),$()&&$()()}function Jn(Pe){return ar.apply(this,arguments)}function ar(){return(ar=jt(function*(Pe){le()!==Pe&&(le(Pe),Kn(),bt(),it()(Pe))})).apply(this,arguments)}function pr(Pe){o("handleChangeQueryLanguage",Pe),Y(Pe),V()(Pe)}function tr(Pe){var{id:zt,json:xn,rootPath:In,onTransform:ur,onClose:Nr}=Pe;Ee()||S(qe,{id:zt,json:xn,rootPath:In,indentation:ce(),truncateTextSize:L(),escapeControlCharacters:Oe(),escapeUnicodeCharacters:ae(),parser:be(),parseMemoizeOne:n(r),validationParser:I(),pathParser:D(),queryLanguages:ve(),queryLanguageId:Y(),onChangeQueryLanguage:pr,onRenderValue:Ce(),onRenderMenu:Kt=>Ae()(Kt,{mode:le(),modal:!0,readOnly:Ee()}),onRenderContextMenu:Kt=>We()(Kt,{mode:le(),modal:!0,readOnly:Ee(),selection:Re()}),onClassName:lt(),onTransform:ur,onClose:Nr})}function Cr(Pe){Ee()||S(Ne,Pe)}function hr(Pe){var{content:zt,path:xn,onPatch:In,onClose:ur}=Pe;o("onJSONEditorModal",{content:zt,path:xn}),S(me,{content:zt,path:xn,onPatch:In,readOnly:Ee(),indentation:ce(),tabSize:B(),truncateTextSize:L(),mainMenuBar:T(),navigationBar:E(),statusBar:M(),askToFormat:oe(),escapeControlCharacters:Oe(),escapeUnicodeCharacters:ae(),flattenColumns:J(),parser:be(),validator:void 0,validationParser:I(),pathParser:D(),onRenderValue:Ce(),onClassName:lt(),onRenderMenu:Ae(),onRenderContextMenu:We(),onSortModal:Cr,onTransformModal:tr,onClose:ur})}function wr(Pe){Pe.stopPropagation()}fe(()=>(C(be()),n(pe),C(we()),ki),()=>{if(!L0(be(),n(pe))){if(o("parser changed, recreate editor"),$l(we())){var Pe=n(pe).stringify(we().json);we({json:Pe!==void 0?be().parse(Pe):void 0})}S(pe,be()),S(N,ki())}}),fe(()=>C(we()),()=>{var Pe=Gd(we());Pe&&console.error("Error: "+Pe)}),fe(()=>C(Re()),()=>{Re()===null&&console.warn("selection is invalid: it is null but should be undefined")}),fe(()=>C(be()),()=>{S(r,_l(be().parse))}),fe(()=>C(le()),()=>{o("mode changed to",le())}),Sn();var nr={get:ge,set:ft,update:at,patch:Ke,select:Ge,expand:qt,collapse:_n,transform:$n,validate:Dt,acceptAutoRepair:pn,scrollTo:Vt,findElement:fn,focus:bt,refresh:on,updateProps:tt,destroy:Bt};return Nt(!0),Df(e,{children:(Pe,zt)=>{var xn,In=r8(),ur=nt(In);O0(H(ur),()=>n(N),Mn=>{er(Ym(Mn,{get externalMode(){return le()},get content(){return we()},get selection(){return Re()},get readOnly(){return Ee()},get indentation(){return ce()},get tabSize(){return B()},get truncateTextSize(){return L()},get statusBar(){return M()},get askToFormat(){return oe()},get mainMenuBar(){return T()},get navigationBar(){return E()},get escapeControlCharacters(){return Oe()},get escapeUnicodeCharacters(){return ae()},get flattenColumns(){return J()},get parser(){return be()},get parseMemoizeOne(){return n(r)},get validator(){return P()},get validationParser(){return I()},get pathParser(){return D()},insideModal:!1,get onError(){return Ue()},onChange:Pn,onChangeMode:Jn,onSelect:Bn,get onRenderValue(){return Ce()},get onClassName(){return lt()},onFocus:Fn,onBlur:cr,get onRenderMenu(){return Ae()},get onRenderContextMenu(){return We()},onSortModal:Cr,onTransformModal:tr,onJSONEditorModal:hr,$$legacy:!0}),Xt=>S(X,Xt),()=>n(X))});var Nr=ie(ur,2),Kt=Mn=>{(function(Xt,Tt){var Tn,mr;pt(Tt,!1);var sr=K(void 0,!0),se=K(void 0,!0),ke=K(void 0,!0),ze=K(void 0,!0),ee=Ur("jsoneditor:SortModal"),ue=_(Tt,"id",9),$e=_(Tt,"json",9),Fe=_(Tt,"rootPath",9),st=_(Tt,"onSort",9),ct=_(Tt,"onClose",9),vt={value:1,label:"ascending"},Dn=[vt,{value:-1,label:"descending"}],Jt="".concat(ue(),":").concat(gt(Fe())),an=K((Tn=vi()[Jt])===null||Tn===void 0?void 0:Tn.selectedProperty,!0),Mt=K(((mr=vi()[Jt])===null||mr===void 0?void 0:mr.selectedDirection)||vt,!0),Zt=K(void 0,!0);function Tr(){try{var bn,Yt,hn;S(Zt,void 0);var Wn=((bn=n(an))===null||bn===void 0?void 0:bn.value)||((Yt=n(ze))===null||Yt===void 0||(Yt=Yt[0])===null||Yt===void 0?void 0:Yt.value)||[],Rn=(hn=n(Mt))===null||hn===void 0?void 0:hn.value,_t=Mb($e(),Fe(),Wn,Rn);st()!==void 0&&Fe()!==void 0&&st()({operations:_t,rootPath:Fe(),itemPath:Wn,direction:Rn}),ct()()}catch(Er){S(Zt,String(Er))}}function wt(bn){bn.focus()}fe(()=>(C($e()),C(Fe())),()=>{S(sr,Xe($e(),Fe()))}),fe(()=>n(sr),()=>{S(se,Array.isArray(n(sr)))}),fe(()=>(n(se),n(sr)),()=>{S(ke,n(se)?zf(n(sr)):void 0)}),fe(()=>(n(ke),Qa),()=>{S(ze,n(ke)?n(ke).map(Qa):void 0)}),fe(()=>(vi(),n(an),n(Mt)),()=>{vi(vi()[Jt]={selectedProperty:n(an),selectedDirection:n(Mt)}),ee("store state in memory",Jt,vi()[Jt])}),Sn(),Nt(!0),zl(Xt,{get onClose(){return ct()},className:"jse-sort-modal",children:(bn,Yt)=>{var hn=n8(),Wn=nt(hn),Rn=ot(()=>n(se)?"Sort array items":"Sort object keys");Ku(Wn,{get title(){return n(Rn)},get onClose(){return ct()}});var _t=H(ie(Wn,2)),Er=ie(H(_t)),gr=H(Er),Ar=ie(H(gr)),Cn=H(Ar),Nn=ie(gr),kr=Ze=>{var Ye=e8(),Lt=ie(H(Ye));As(H(Lt),{showChevron:!0,get items(){return n(ze)},get value(){return n(an)},set value(sn){S(an,sn)},$$legacy:!0}),W(Ze,Ye)};ye(Nn,Ze=>{n(se),n(ze),te(()=>{var Ye;return n(se)&&n(ze)&&((Ye=n(ze))===null||Ye===void 0?void 0:Ye.length)>1})&&Ze(kr)});var z=ie(Nn),de=ie(H(z));As(H(de),{showChevron:!0,clearable:!1,get items(){return Dn},get value(){return n(Mt)},set value(Ze){S(Mt,Ze)},$$legacy:!0});var Me=ie(_t,2),Be=H(Me),Se=Ze=>{var Ye=t8(),Lt=H(Ye);De(()=>mt(Lt,n(Zt))),W(Ze,Ye)};ye(Be,Ze=>{n(Zt)&&Ze(Se)});var Je=H(ie(Me,2));Gr(()=>Te("click",Je,Tr)),ao(Je,Ze=>wt?.(Ze)),De(Ze=>{Hs(Cn,Ze),Je.disabled=(n(se),n(ze),n(an),te(()=>{var Ye;return!!(n(se)&&n(ze)&&((Ye=n(ze))===null||Ye===void 0?void 0:Ye.length)>1)&&!n(an)}))},[()=>(C(Fe()),C(vn),C(go),te(()=>Fe()&&!vn(Fe())?go(Fe()):"(document root)"))]),W(bn,hn)},$$slots:{default:!0}}),ht()})(Mn,os(()=>n(Ne),{onClose:()=>{var Xt;(Xt=n(Ne))===null||Xt===void 0||Xt.onClose(),S(Ne,void 0)}}))};ye(Nr,Mn=>{n(Ne)&&Mn(Kt)});var xr=ie(Nr,2),Wr=Mn=>{rS(Mn,os(()=>n(qe),{onClose:()=>{var Xt;(Xt=n(qe))===null||Xt===void 0||Xt.onClose(),S(qe,void 0)}}))};ye(xr,Mn=>{n(qe)&&Mn(Wr)});var rr=ie(xr,2),Fr=Mn=>{(function(Xt,Tt){pt(Tt,!1);var Tn=K(void 0,!0),mr=K(void 0,!0),sr=K(void 0,!0),se=K(void 0,!0),ke=Ur("jsoneditor:JSONEditorModal"),ze=_(Tt,"content",9),ee=_(Tt,"path",9),ue=_(Tt,"onPatch",9),$e=_(Tt,"readOnly",9),Fe=_(Tt,"indentation",9),st=_(Tt,"tabSize",9),ct=_(Tt,"truncateTextSize",9),vt=_(Tt,"mainMenuBar",9),Dn=_(Tt,"navigationBar",9),Jt=_(Tt,"statusBar",9),an=_(Tt,"askToFormat",9),Mt=_(Tt,"escapeControlCharacters",9),Zt=_(Tt,"escapeUnicodeCharacters",9),Tr=_(Tt,"flattenColumns",9),wt=_(Tt,"parser",9),bn=_(Tt,"validator",9),Yt=_(Tt,"validationParser",9),hn=_(Tt,"pathParser",9),Wn=_(Tt,"onRenderValue",9),Rn=_(Tt,"onClassName",9),_t=_(Tt,"onRenderMenu",9),Er=_(Tt,"onRenderContextMenu",9),gr=_(Tt,"onSortModal",9),Ar=_(Tt,"onTransformModal",9),Cn=_(Tt,"onClose",9),Nn=K(void 0,!0),kr=K(void 0,!0),z={mode:Be(ze()),content:ze(),selection:void 0,relativePath:ee()},de=K([z],!0),Me=K(void 0,!0);function Be(re){return $l(re)&&fr(re.json)?Rr.table:Rr.tree}function Se(){var re,_e=(re=Ht(n(de)))===null||re===void 0?void 0:re.selection;Nl(_e)&&n(Nn).scrollTo(ut(_e))}function Je(){if(ke("handleApply"),!$e())try{S(Me,void 0);var re=n(Tn).relativePath,_e=n(Tn).content,He=[{op:"replace",path:gt(re),value:lm(_e,wt()).json}];if(n(de).length>1){var Ve=lm(n(de)[n(de).length-2].content,wt()).json,Le={json:Ko(Ve,He)},Ct=Ie(Ie({},n(de)[n(de).length-2]||z),{},{content:Le});S(de,[...n(de).slice(0,n(de).length-2),Ct]),Kn(),Se()}else ue()(He),Cn()()}catch(Et){S(Me,String(Et))}}function Ze(){if(ke("handleClose"),n(kr))S(kr,!1);else if(n(de).length>1){var re;S(de,nn(n(de))),Kn(),(re=n(Nn))===null||re===void 0||re.focus(),Se(),S(Me,void 0)}else Cn()()}function Ye(re){ke("handleChange",re),en(_e=>Ie(Ie({},_e),{},{content:re}))}function Lt(re){ke("handleChangeSelection",re),en(_e=>Ie(Ie({},_e),{},{selection:re}))}function sn(re){ke("handleChangeMode",re),en(_e=>Ie(Ie({},_e),{},{mode:re}))}function en(re){var _e=re(Ht(n(de)));S(de,[...nn(n(de)),_e])}function Qn(re){S(Me,re.toString()),console.error(re)}function qr(re){var _e,{content:He,path:Ve}=re;ke("handleJSONEditorModal",{content:He,path:Ve});var Le={mode:Be(He),content:He,selection:void 0,relativePath:Ve};S(de,[...n(de),Le]),Kn(),(_e=n(Nn))===null||_e===void 0||_e.focus()}function q(re){re.focus()}no(()=>{var re;(re=n(Nn))===null||re===void 0||re.focus()}),fe(()=>n(de),()=>{S(Tn,Ht(n(de))||z)}),fe(()=>n(de),()=>{S(mr,n(de).flatMap(re=>re.relativePath))}),fe(()=>(n(mr),go),()=>{S(sr,vn(n(mr))?"(document root)":go(n(mr)))}),fe(()=>C(wt()),()=>{S(se,_l(wt().parse))}),Sn(),Nt(!0),zl(Xt,{onClose:Ze,className:"jse-jsoneditor-modal",get fullscreen(){return n(kr)},children:(re,_e)=>{var He=XS();Df(H(He),{children:(Ve,Le)=>{var Ct=YS(),Et=nt(Ct),Wt=ot(()=>(n(de),te(()=>n(de).length>1?" (".concat(n(de).length,")"):"")));Ku(Et,{get title(){var kt;return"Edit nested content ".concat((kt=n(Wt))!==null&&kt!==void 0?kt:"")},fullScreenButton:!0,onClose:Ze,get fullscreen(){return n(kr)},set fullscreen(kt){S(kr,kt)},$$legacy:!0});var En=ie(Et,2),tn=ie(H(En),2),Vn=ie(tn,4);er(Ym(H(Vn),{get externalMode(){return n(Tn),te(()=>n(Tn).mode)},get content(){return n(Tn),te(()=>n(Tn).content)},get selection(){return n(Tn),te(()=>n(Tn).selection)},get readOnly(){return $e()},get indentation(){return Fe()},get tabSize(){return st()},get truncateTextSize(){return ct()},get statusBar(){return Jt()},get askToFormat(){return an()},get mainMenuBar(){return vt()},get navigationBar(){return Dn()},get escapeControlCharacters(){return Mt()},get escapeUnicodeCharacters(){return Zt()},get flattenColumns(){return Tr()},get parser(){return wt()},get parseMemoizeOne(){return n(se)},get validator(){return bn()},get validationParser(){return Yt()},get pathParser(){return hn()},insideModal:!0,onError:Qn,onChange:Ye,onChangeMode:sn,onSelect:Lt,get onRenderValue(){return Wn()},get onClassName(){return Rn()},get onFocus(){return Ao},get onBlur(){return Ao},get onRenderMenu(){return _t()},get onRenderContextMenu(){return Er()},get onSortModal(){return gr()},get onTransformModal(){return Ar()},onJSONEditorModal:qr,$$legacy:!0}),kt=>S(Nn,kt),()=>n(Nn));var Pt=H(ie(Vn,2)),ir=kt=>{var dt=KS(),It=H(dt);De(()=>mt(It,n(Me))),W(kt,dt)};ye(Pt,kt=>{n(Me)&&kt(ir)});var An=ie(Pt,2),Gn=kt=>{var dt=JS();rn(H(dt),{get data(){return uw}}),Te("click",dt,Ze),W(kt,dt)};ye(An,kt=>{n(de),te(()=>n(de).length>1)&&kt(Gn)});var yn=ie(An,2),xt=kt=>{var dt=QS();Gr(()=>Te("click",dt,Je)),ao(dt,It=>q?.(It)),W(kt,dt)},ln=kt=>{var dt=GS();Te("click",dt,Ze),W(kt,dt)};ye(yn,kt=>{$e()?kt(ln,!1):kt(xt)}),De(()=>Hs(tn,n(sr))),W(Ve,Ct)},$$slots:{default:!0}}),W(re,He)},$$slots:{default:!0}}),ht()})(Mn,os(()=>n(me),{onClose:()=>{var Xt;(Xt=n(me))===null||Xt===void 0||Xt.onClose(),S(me,void 0)}}))};ye(rr,Mn=>{n(me)&&Mn(Fr)}),De(Mn=>xn=Rt(ur,1,"jse-main svelte-1l55585",null,xn,Mn),[()=>({"jse-focus":n(U)})]),Te("keydown",ur,wr),W(Pe,In)},$$slots:{default:!0}}),St(t,"get",ge),St(t,"set",ft),St(t,"update",at),St(t,"patch",Ke),St(t,"select",Ge),St(t,"expand",qt),St(t,"collapse",_n),St(t,"transform",$n),St(t,"validate",Dt),St(t,"acceptAutoRepair",pn),St(t,"scrollTo",Vt),St(t,"findElement",fn),St(t,"focus",bt),St(t,"refresh",on),St(t,"updateProps",tt),St(t,"destroy",Bt),ht(nr)}function m8(e){var{target:t,props:r}=e,o=z2(o8,{target:t,props:r});return o.destroy=jt(function*(){return function(s,a){var i=Tf.get(s);return i?(Tf.delete(s),i(a)):Promise.resolve()}(o)}),Kn(),o}export{m8 as d,Rr as f,$l as o};
