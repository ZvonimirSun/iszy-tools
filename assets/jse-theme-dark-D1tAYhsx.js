import{bj as I0,d as au,c2 as q0,c3 as D0,c4 as Qh,c5 as L0,i as U0,c as F0,c6 as V0,a as B0,c7 as W0,c8 as H0,c9 as wd,bg as Ru,bb as K0,ca as Q0,cb as J0,cc as G0,cd as rv,ce as Y0,cf as X0,cg as Z0,aW as Jh,ay as eb,b0 as Pc,ch as kd}from"./index-1Gxk3gC0.js";import{m as Di}from"./memoize-one.esm-BdPwpGay.js";import{L as tb,s as nb,t as ho,a as rb,b as ob,i as ab,f as sb,c as ov,d as ib,F as lb,V as Gh,e as cb,E as ds,g as zc,R as Yh,D as Xh,H as ub,h as Zh,j as zs,k as av,C as Ci,l as db,m as fb,n as vb,o as pb,p as hb,q as mb,r as gb,u as bb,v as yb,w as jb,x as xb,y as wb,z as kb,A as Sb,B as _b,G as Cb,I as Eb,J as Ob,K as $b,M as Pb,N as zb,O as Rb,P as Nb,Q as Mb,S as Tb,T as Nu,U as sv,W as Ab,X as Ib,Y as qb,Z as Db,_ as Lb,$ as Ub,a0 as Fb,a1 as Vb}from"./index-Cb-tqR_w.js";import{i as Bt}from"./Router-CiqySeZu.js";import{b as Bb,l as Qt}from"./last-D-rYfuUG.js";import{b as Wb,m as Hb}from"./map-C-gQ6S3A.js";import{b as su}from"./_baseIteratee-Bq0P7U2O.js";import{r as em}from"./range-BwFPQb5F.js";import{c as tm}from"./_castFunction-ghA8APza.js";import{t as Kb}from"./toFinite-DbreP7LB.js";import{b as Qb,c as Jb,a as Gb}from"./_baseEach-CMrnYH6D.js";function Yb(e){var t=Kb(e),r=t%1;return t===t?r?t-r:t:0}function Er(){}var Xb=1,Zb=4;function e1(e,t){return t=typeof t=="function"?t:void 0,I0(e,Xb|Zb,t)}function t1(e,t,r,o){for(var s=-1,a=e==null?0:e.length;++s<a;){var i=e[s];t(o,i,r(i),e)}return o}function n1(e,t,r,o){return Qb(e,function(s,a,i){t(o,s,r(s),i)}),o}function nm(e,t){return function(r,o){var s=au(r)?t1:n1,a=t?t():{};return s(r,e,su(o),a)}}function r1(e,t){for(var r=e==null?0:e.length;r--&&t(e[r],r,e)!==!1;);return e}var o1=q0(!0);function a1(e,t){return e&&o1(e,t,D0)}var s1=Jb(a1,!0);function i1(e,t){var r=au(e)?r1:s1;return r(e,tm(t))}function ba(e){return e&&e.length?e[0]:void 0}var l1=Object.prototype,c1=l1.hasOwnProperty,u1=nm(function(e,t,r){c1.call(e,r)?e[r].push(t):Qh(e,r,[t])});function an(e){var t=e==null?0:e.length;return t?Bb(e,0,-1):[]}var d1="[object Map]",f1="[object Set]",v1=Object.prototype,p1=v1.hasOwnProperty;function pn(e){if(e==null)return!0;if(L0(e)&&(au(e)||typeof e=="string"||typeof e.splice=="function"||U0(e)||F0(e)||V0(e)))return!e.length;var t=B0(e);if(t==d1||t==f1)return!e.size;if(W0(e))return!H0(e).length;for(var r in e)if(p1.call(e,r))return!1;return!0}function h1(e,t){return e<t}function m1(e,t){var r={};return t=su(t),Gb(e,function(o,s,a){Qh(r,s,t(o,s,a))}),r}function g1(e,t,r){for(var o=-1,s=e.length;++o<s;){var a=e[o],i=t(a);if(i!=null&&(l===void 0?i===i&&!wd(i):r(i,l)))var l=i,c=a}return c}function hl(e,t){return e&&e.length?g1(e,su(t),h1):void 0}function b1(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}function y1(e,t){if(e!==t){var r=e!==void 0,o=e===null,s=e===e,a=wd(e),i=t!==void 0,l=t===null,c=t===t,d=wd(t);if(!l&&!d&&!a&&e>t||a&&i&&c&&!l&&!d||o&&i&&c||!r&&c||!s)return 1;if(!o&&!a&&!d&&e<t||d&&r&&s&&!o&&!a||l&&r&&s||!i&&s||!c)return-1}return 0}function j1(e,t,r){for(var o=-1,s=e.criteria,a=t.criteria,i=s.length,l=r.length;++o<i;){var c=y1(s[o],a[o]);if(c){if(o>=l)return c;var d=r[o];return c*(d=="desc"?-1:1)}}return e.index-t.index}function x1(e,t,r){t.length?t=Ru(t,function(a){return au(a)?function(i){return K0(i,a.length===1?a[0]:a)}:a}):t=[Q0];var o=-1;t=Ru(t,J0(su));var s=Wb(e,function(a,i,l){var c=Ru(t,function(d){return d(a)});return{criteria:c,index:++o,value:a}});return b1(s,function(a,i){return j1(a,i,r)})}var w1=nm(function(e,t,r){e[r?0:1].push(t)},function(){return[[],[]]}),k1=G0(function(e,t){if(e==null)return[];var r=t.length;return r>1&&rv(e,t[0],t[1])?t=[]:r>2&&rv(t[0],t[1],t[2])&&(t=[t[0]]),x1(e,Y0(t),[])}),S1=9007199254740991,Mu=4294967295,_1=Math.min;function C1(e,t){if(e=Yb(e),e<1||e>S1)return[];var r=Mu,o=_1(e,Mu);t=tm(t),e-=Mu;for(var s=X0(o,t);++r<e;)t(r);return s}var E1=0;function ai(e){var t=++E1;return Z0(e)+t}var Tu,iv;function rm(){return iv||(iv=1,Tu=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,s,a;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(s=o;s--!==0;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(a=Object.keys(t),o=a.length,o!==Object.keys(r).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[s]))return!1;for(s=o;s--!==0;){var i=a[s];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}),Tu}function vr(e){return Array.isArray(e)}function yr(e){return e!==null&&typeof e=="object"&&(e.constructor===void 0||e.constructor.name==="Object")}function om(e){return e&&typeof e=="object"?e.op==="add":!1}function am(e){return e&&typeof e=="object"?e.op==="remove":!1}function cf(e){return e&&typeof e=="object"?e.op==="replace":!1}function Sd(e){return e&&typeof e=="object"?e.op==="copy":!1}function vs(e){return e&&typeof e=="object"?e.op==="move":!1}function O1(e,t){return JSON.stringify(e)===JSON.stringify(t)}function $1(e,t){return e===t}function sm(e){return e.slice(0,e.length-1)}function P1(e){return e[e.length-1]}function z1(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$1;if(e.length<t.length)return!1;for(let o=0;o<t.length;o++)if(!r(e[o],t[o]))return!1;return!0}function im(e){return typeof e=="object"&&e!==null}function uf(e){if(vr(e)){const t=e.slice();return Object.getOwnPropertySymbols(e).forEach(r=>{t[r]=e[r]}),t}else if(yr(e)){const t={...e};return Object.getOwnPropertySymbols(e).forEach(r=>{t[r]=e[r]}),t}else return e}function df(e,t,r){if(e[t]===r)return e;{const o=uf(e);return o[t]=r,o}}function Qe(e,t){let r=e,o=0;for(;o<t.length;)yr(r)?r=r[t[o]]:vr(r)?r=r[parseInt(t[o])]:r=void 0,o++;return r}function to(e,t,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return r;const s=t[0],a=to(e?e[s]:void 0,t.slice(1),r,o);if(yr(e)||vr(e))return df(e,s,a);if(o){const i=R1.test(s)?[]:{};return i[s]=a,i}else throw new Error("Path does not exist")}const R1=/^\d+$/;function ff(e,t,r){if(t.length===0)return r(e);if(!im(e))throw new Error("Path doesn't exist");const o=t[0],s=ff(e[o],t.slice(1),r);return df(e,o,s)}function iu(e,t){if(t.length===0)return e;if(!im(e))throw new Error("Path does not exist");if(t.length===1){const s=t[0];if(s in e){const a=uf(e);return vr(a)&&a.splice(parseInt(s),1),yr(a)&&delete a[s],a}else return e}const r=t[0],o=iu(e[r],t.slice(1));return df(e,r,o)}function vf(e,t,r){const o=t.slice(0,t.length-1),s=t[t.length-1];return ff(e,o,a=>{if(!Array.isArray(a))throw new TypeError("Array expected at path "+JSON.stringify(o));const i=uf(a);return i.splice(parseInt(s),0,r),i})}function Co(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:Co(e[t[0]],t.slice(1))}function so(e){const t=e.split("/");return t.shift(),t.map(r=>r.replace(/~1/g,"/").replace(/~0/g,"~"))}function ft(e){return e.map(lm).join("")}function lm(e){return"/"+String(e).replace(/~/g,"~0").replace(/\//g,"~1")}function ml(e,t){return e+lm(t)}function Mo(e,t,r){let o=e;for(let s=0;s<t.length;s++){L1(t[s]);let a=t[s];if(r&&r.before){const c=r.before(o,a);if(c!==void 0){if(c.document!==void 0&&(o=c.document),c.json!==void 0)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"');c.operation!==void 0&&(a=c.operation)}}const i=o,l=To(o,a.path);if(a.op==="add")o=T1(o,l,a.value);else if(a.op==="remove")o=M1(o,l);else if(a.op==="replace")o=N1(o,l,a.value);else if(a.op==="copy")o=A1(o,l,_d(a.from));else if(a.op==="move")o=I1(o,l,_d(a.from));else if(a.op==="test")q1(o,l,a.value);else throw new Error("Unknown JSONPatch operation "+JSON.stringify(a));if(r&&r.after){const c=r.after(o,a,i);c!==void 0&&(o=c)}}return o}function N1(e,t,r){return to(e,t,r)}function M1(e,t){return iu(e,t)}function T1(e,t,r){return nl(e,t)?vf(e,t,r):to(e,t,r)}function A1(e,t,r){const o=Qe(e,r);if(nl(e,t))return vf(e,t,o);{const s=Qe(e,r);return to(e,t,s)}}function I1(e,t,r){const o=Qe(e,r),s=iu(e,r);return nl(s,t)?vf(s,t,o):to(s,t,o)}function q1(e,t,r){if(r===void 0)throw new Error(`Test failed: no value provided (path: "${ft(t)}")`);if(!Co(e,t))throw new Error(`Test failed: path not found (path: "${ft(t)}")`);const o=Qe(e,t);if(!O1(o,r))throw new Error(`Test failed, value differs (path: "${ft(t)}")`)}function nl(e,t){if(t.length===0)return!1;const r=Qe(e,sm(t));return Array.isArray(r)}function D1(e,t){if(P1(t)!=="-")return t;const r=sm(t),o=Qe(e,r);return r.concat(o.length)}function L1(e){if(!["add","remove","replace","copy","move","test"].includes(e.op))throw new Error("Unknown JSONPatch op "+JSON.stringify(e.op));if(typeof e.path!="string")throw new Error('Required property "path" missing or not a string in operation '+JSON.stringify(e));if((e.op==="copy"||e.op==="move")&&typeof e.from!="string")throw new Error('Required property "from" missing or not a string in operation '+JSON.stringify(e))}function To(e,t){return D1(e,so(t))}function _d(e){return so(e)}function cm(e,t,r){let o=[];return Mo(e,t,{before:(a,i)=>{let l;const c=To(a,i.path);if(i.op==="add")l=fm(a,c);else if(i.op==="remove")l=dm(a,c);else if(i.op==="replace")l=um(a,c);else if(i.op==="copy")l=U1(a,c);else if(i.op==="move")l=F1(a,c,_d(i.from));else if(i.op==="test")l=[];else throw new Error("Unknown JSONPatch operation "+JSON.stringify(i));let d;if(r&&r.before){const u=r.before(a,i,l);if(u&&u.revertOperations&&(l=u.revertOperations),u&&u.document&&(d=u.document),u&&u.json)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"')}if(o=l.concat(o),d!==void 0)return{document:d}}}),o}function um(e,t){return[{op:"replace",path:ft(t),value:Qe(e,t)}]}function dm(e,t){return[{op:"add",path:ft(t),value:Qe(e,t)}]}function fm(e,t){return nl(e,t)||!Co(e,t)?[{op:"remove",path:ft(t)}]:um(e,t)}function U1(e,t){return fm(e,t)}function F1(e,t,r){if(t.length<r.length&&z1(r,t))return[{op:"replace",path:ft(t),value:e}];const o={op:"move",from:ft(t),path:ft(r)};return!nl(e,t)&&Co(e,t)?[o,...dm(e,t)]:[o]}var gl={},lv;function V1(){if(lv)return gl;lv=1;var e={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",'"':'"',"/":"/","\\":"\\"},t=97;gl.parse=function(p,x,v){var h={},f=0,y=0,w=0,b=v&&v.bigint&&typeof BigInt<"u";return{data:k("",!0),pointers:h};function k(T,E){$();var R;$e(T,"value");var ne=te();switch(ne){case"t":ee("rue"),R=!0;break;case"f":ee("alse"),R=!1;break;case"n":ee("ull"),R=null;break;case'"':R=M();break;case"[":R=H(T);break;case"{":R=G(T);break;default:je(),"-0123456789".indexOf(ne)>=0?R=z():Y()}return $e(T,"valueEnd"),$(),E&&w<p.length&&Y(),R}function $(){e:for(;w<p.length;){switch(p[w]){case" ":y++;break;case"	":y+=4;break;case"\r":y=0;break;case`
`:y=0,f++;break;default:break e}w++}}function M(){for(var T="",E;E=te(),E!='"';)E=="\\"?(E=te(),E in e?T+=e[E]:E=="u"?T+=B():I()):T+=E;return T}function z(){var T="",E=!0;p[w]=="-"&&(T+=te()),T+=p[w]=="0"?te():pe(),p[w]=="."&&(T+=te()+pe(),E=!1),(p[w]=="e"||p[w]=="E")&&(T+=te(),(p[w]=="+"||p[w]=="-")&&(T+=te()),T+=pe(),E=!1);var R=+T;return b&&E&&(R>Number.MAX_SAFE_INTEGER||R<Number.MIN_SAFE_INTEGER)?BigInt(T):R}function H(T){$();var E=[],R=0;if(te()=="]")return E;for(je();;){var ne=T+"/"+R;E.push(k(ne)),$();var Se=te();if(Se=="]")break;Se!=","&&I(),$(),R++}return E}function G(T){$();var E={};if(te()=="}")return E;for(je();;){var R=me();te()!='"'&&I();var ne=M(),Se=T+"/"+j(ne);ke(Se,"key",R),$e(Se,"keyEnd"),$(),te()!=":"&&I(),$(),E[ne]=k(Se),$();var K=te();if(K=="}")break;K!=","&&I(),$()}return E}function ee(T){for(var E=0;E<T.length;E++)te()!==T[E]&&I()}function te(){se();var T=p[w];return w++,y++,T}function je(){w--,y--}function B(){for(var T=4,E=0;T--;){E<<=4;var R=te().toLowerCase();R>="a"&&R<="f"?E+=R.charCodeAt()-t+10:R>="0"&&R<="9"?E+=+R:I()}return String.fromCharCode(E)}function pe(){for(var T="";p[w]>="0"&&p[w]<="9";)T+=te();if(T.length)return T;se(),Y()}function $e(T,E){ke(T,E,me())}function ke(T,E,R){h[T]=h[T]||{},h[T][E]=R}function me(){return{line:f,column:y,pos:w}}function Y(){throw new SyntaxError("Unexpected token "+p[w]+" in JSON at position "+w)}function I(){je(),Y()}function se(){if(w>=p.length)throw new SyntaxError("Unexpected end of JSON input")}},gl.stringify=function(p,x,v){if(!o(p))return;var h=0,f,y,w=typeof v=="object"?v.space:v;switch(typeof w){case"number":var b=w>10?10:w<0?0:Math.floor(w);w=b&&ke(b," "),f=b,y=b;break;case"string":w=w.slice(0,10),f=0,y=0;for(var k=0;k<w.length;k++){var $=w[k];switch($){case" ":y++;break;case"	":y+=4;break;case"\r":y=0;break;case`
`:y=0,h++;break;default:throw new Error("whitespace characters not allowed in JSON")}f++}break;default:w=void 0}var M="",z={},H=0,G=0,ee=0,te=v&&v.es6&&typeof Map=="function";return je(p,0,""),{json:M,pointers:z};function je(me,Y,I){switch($e(I,"value"),typeof me){case"number":case"bigint":case"boolean":B(""+me);break;case"string":B(u(me));break;case"object":me===null?B("null"):typeof me.toJSON=="function"?B(u(me.toJSON())):Array.isArray(me)?se():te?me.constructor.BYTES_PER_ELEMENT?se():me instanceof Map?E():me instanceof Set?E(!0):T():T()}$e(I,"valueEnd");function se(){if(me.length){B("[");for(var R=Y+1,ne=0;ne<me.length;ne++){ne&&B(","),pe(R);var Se=o(me[ne])?me[ne]:null,K=I+"/"+ne;je(Se,R,K)}pe(Y),B("]")}else B("[]")}function T(){var R=Object.keys(me);if(R.length){B("{");for(var ne=Y+1,Se=0;Se<R.length;Se++){var K=R[Se],F=me[K];if(o(F)){Se&&B(",");var ie=I+"/"+j(K);pe(ne),$e(ie,"key"),B(u(K)),$e(ie,"keyEnd"),B(":"),w&&B(" "),je(F,ne,ie)}}pe(Y),B("}")}else B("{}")}function E(R){if(me.size){B("{");for(var ne=Y+1,Se=!0,K=me.entries(),F=K.next();!F.done;){var ie=F.value,P=ie[0],U=R?!0:ie[1];if(o(U)){Se||B(","),Se=!1;var L=I+"/"+j(P);pe(ne),$e(L,"key"),B(u(P)),$e(L,"keyEnd"),B(":"),w&&B(" "),je(U,ne,L)}F=K.next()}pe(Y),B("}")}else B("{}")}}function B(me){G+=me.length,ee+=me.length,M+=me}function pe(me){if(w){for(M+=`
`+ke(me,w),H++,G=0;me--;)h?(H+=h,G=y):G+=y,ee+=f;ee+=1}}function $e(me,Y){z[me]=z[me]||{},z[me][Y]={line:H,column:G,pos:ee}}function ke(me,Y){return Array(me+1).join(Y)}};var r=["number","bigint","boolean","string","object"];function o(p){return r.indexOf(typeof p)>=0}var s=/"|\\/g,a=/[\b]/g,i=/\f/g,l=/\n/g,c=/\r/g,d=/\t/g;function u(p){return p=p.replace(s,"\\$&").replace(i,"\\f").replace(a,"\\b").replace(l,"\\n").replace(c,"\\r").replace(d,"\\t"),'"'+p+'"'}var g=/~/g,m=/\//g;function j(p){return p.replace(g,"~0").replace(m,"~1")}return gl}var B1=V1();const vm=Jh(B1);class Rs extends Error{constructor(t,r){super(t+" at position "+r),this.position=r}}const bl=92,Au=47,W1=42,cv=123,yl=125,uv=91,jl=93,H1=40,K1=41,Q1=32,pf=10,pm=9,hm=13,J1=8,G1=12,Rc=34,dv=43,fv=45,mm=39,gm=48,bm=57,os=44,xl=46,Y1=58,X1=59,Z1=65,ey=97,ty=69,ny=101,ry=70,oy=102,ay=160,sy=8192,iy=8202,ly=8239,cy=8287,uy=12288,dy=8220,fy=8221,vy=8216,py=8217,hy=96,my=180;function gy(e){return e>=gm&&e<=bm||e>=Z1&&e<=ry||e>=ey&&e<=oy}function as(e){return e>=gm&&e<=bm}function by(e){return e>=32&&e<=1114111}function Us(e){return yy.test(e)}const yy=/^[,:[\]/{}()\n+]$/;function jy(e){return Us(e)&&e!=="/"}function vv(e){return xy.test(e)||e&&Sc(e.charCodeAt(0))}const xy=/^[[{\w-]$/;function wy(e){return e===pf||e===hm||e===pm||e===J1||e===G1}function Ws(e){return e===Q1||e===pf||e===pm||e===hm}function ky(e){return e===ay||e>=sy&&e<=iy||e===ly||e===cy||e===uy}function Sc(e){return ym(e)||Cd(e)}function ym(e){return e===Rc||e===dy||e===fy}function pv(e){return e===Rc}function Cd(e){return e===mm||e===vy||e===py||e===hy||e===my}function hv(e){return e===mm}function Ei(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const o=e.lastIndexOf(t);return o!==-1?e.substring(0,o)+(r?"":e.substring(o+1)):e}function Qo(e,t){let r=e.length;if(!Ws(e.charCodeAt(r-1)))return e+t;for(;Ws(e.charCodeAt(r-1));)r--;return e.substring(0,r)+t+e.substring(r)}function Sy(e,t,r){return e.substring(0,t)+e.substring(t+r)}function _y(e){return/[,\n][ \t\r]*$/.test(e)}function Cy(e){return/^\w+$/.test(e)}const Ey={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Oy={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"};function Zo(e){let t=0,r="";a()||G();const s=d(os);for(s&&i(),vv(e[t])&&_y(r)?(s||(r=Qo(r,",")),x()):s&&(r=Ei(r,","));e.charCodeAt(t)===yl||e.charCodeAt(t)===jl;)t++,i();if(t>=e.length)return r;H();function a(){i();const B=j()||p()||v()||f()||y()||b();return i(),B}function i(){const B=t;let pe=l();do pe=c(),pe&&(pe=l());while(pe);return t>B}function l(){let B="",pe;for(;(pe=Ws(e.charCodeAt(t)))||ky(e.charCodeAt(t));)pe?B+=e[t]:B+=" ",t++;return B.length>0?(r+=B,!0):!1}function c(){if(e.charCodeAt(t)===Au&&e.charCodeAt(t+1)===W1){for(;t<e.length&&!$y(e,t);)t++;return t+=2,!0}if(e.charCodeAt(t)===Au&&e.charCodeAt(t+1)===Au){for(;t<e.length&&e.charCodeAt(t)!==pf;)t++;return!0}return!1}function d(B){return e.charCodeAt(t)===B?(r+=e[t],t++,!0):!1}function u(B){return e.charCodeAt(t)===B?(t++,!0):!1}function g(){return u(bl)}function m(){return i(),e.charCodeAt(t)===xl&&e.charCodeAt(t+1)===xl&&e.charCodeAt(t+2)===xl?(t+=3,i(),u(os),!0):!1}function j(){if(e.charCodeAt(t)===cv){r+="{",t++,i(),u(os)&&i();let B=!0;for(;t<e.length&&e.charCodeAt(t)!==yl;){let pe;if(B?(pe=!0,B=!1):(pe=d(os),pe||(r=Qo(r,",")),i()),m(),!(v()||b())){e.charCodeAt(t)===yl||e.charCodeAt(t)===cv||e.charCodeAt(t)===jl||e.charCodeAt(t)===uv||e[t]===void 0?r=Ei(r,","):ee();break}i();const ke=d(Y1),me=t>=e.length;ke||(vv(e[t])||me?r=Qo(r,":"):te()),a()||(ke||me?r+="null":te())}return e.charCodeAt(t)===yl?(r+="}",t++):r=Qo(r,"}"),!0}return!1}function p(){if(e.charCodeAt(t)===uv){r+="[",t++,i(),u(os)&&i();let B=!0;for(;t<e.length&&e.charCodeAt(t)!==jl;)if(B?B=!1:d(os)||(r=Qo(r,",")),m(),!a()){r=Ei(r,",");break}return e.charCodeAt(t)===jl?(r+="]",t++):r=Qo(r,"]"),!0}return!1}function x(){let B=!0,pe=!0;for(;pe;)B?B=!1:d(os)||(r=Qo(r,",")),pe=a();pe||(r=Ei(r,",")),r=`[
`.concat(r,`
]`)}function v(){let B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,pe=e.charCodeAt(t)===bl;if(pe&&(t++,pe=!0),Sc(e.charCodeAt(t))){const $e=pv(e.charCodeAt(t))?pv:hv(e.charCodeAt(t))?hv:Cd(e.charCodeAt(t))?Cd:ym,ke=t,me=r.length;let Y='"';for(t++;;){if(t>=e.length){const I=k(t-1);return!B&&Us(e.charAt(I))?(t=ke,r=r.substring(0,me),v(!0)):(Y=Qo(Y,'"'),r+=Y,!0)}else if($e(e.charCodeAt(t))){const I=t,se=Y.length;if(Y+='"',t++,r+=Y,i(),B||t>=e.length||Us(e.charAt(t))||Sc(e.charCodeAt(t))||as(e.charCodeAt(t)))return h(),!0;if(Us(e.charAt(k(I-1))))return t=ke,r=r.substring(0,me),v(!0);r=r.substring(0,me),t=I+1,Y=Y.substring(0,se)+"\\"+Y.substring(se)}else{if(B&&Us(e[t]))return Y=Qo(Y,'"'),r+=Y,h(),!0;if(e.charCodeAt(t)===bl){const I=e.charAt(t+1);if(Oy[I]!==void 0)Y+=e.slice(t,t+2),t+=2;else if(I==="u"){let T=2;for(;T<6&&gy(e.charCodeAt(t+T));)T++;T===6?(Y+=e.slice(t,t+6),t+=6):t+T>=e.length?t=e.length:je()}else Y+=I,t+=2}else{const I=e.charAt(t),se=e.charCodeAt(t);se===Rc&&e.charCodeAt(t-1)!==bl?(Y+="\\"+I,t++):wy(se)?(Y+=Ey[I],t++):(by(se)||z(I),Y+=I,t++)}}pe&&g()}}return!1}function h(){let B=!1;for(i();e.charCodeAt(t)===dv;){B=!0,t++,i(),r=Ei(r,'"',!0);const pe=r.length;v()?r=Sy(r,pe,1):r=Qo(r,'"')}return B}function f(){const B=t;if(e.charCodeAt(t)===fv){if(t++,$())return M(B),!0;if(!as(e.charCodeAt(t)))return t=B,!1}for(;as(e.charCodeAt(t));)t++;if(e.charCodeAt(t)===xl){if(t++,$())return M(B),!0;if(!as(e.charCodeAt(t)))return t=B,!1;for(;as(e.charCodeAt(t));)t++}if(e.charCodeAt(t)===ny||e.charCodeAt(t)===ty){if(t++,(e.charCodeAt(t)===fv||e.charCodeAt(t)===dv)&&t++,$())return M(B),!0;if(!as(e.charCodeAt(t)))return t=B,!1;for(;as(e.charCodeAt(t));)t++}if(!$())return t=B,!1;if(t>B){const pe=e.slice(B,t),$e=/^0\d/.test(pe);return r+=$e?'"'.concat(pe,'"'):pe,!0}return!1}function y(){return w("true","true")||w("false","false")||w("null","null")||w("True","true")||w("False","false")||w("None","null")}function w(B,pe){return e.slice(t,t+B.length)===B?(r+=pe,t+=B.length,!0):!1}function b(){const B=t;for(;t<e.length&&!jy(e[t])&&!Sc(e.charCodeAt(t));)t++;if(t>B){if(e.charCodeAt(t)===H1&&Cy(e.slice(B,t).trim()))return t++,a(),e.charCodeAt(t)===K1&&(t++,e.charCodeAt(t)===X1&&t++),!0;{for(;Ws(e.charCodeAt(t-1))&&t>0;)t--;const pe=e.slice(B,t);return r+=pe==="undefined"?"null":JSON.stringify(pe),e.charCodeAt(t)===Rc&&t++,!0}}}function k(B){let pe=B;for(;pe>0&&Ws(e.charCodeAt(pe));)pe--;return pe}function $(){return t>=e.length||Us(e[t])||Ws(e.charCodeAt(t))}function M(B){r+=e.slice(B,t)+"0"}function z(B){throw new Rs("Invalid character "+JSON.stringify(B),t)}function H(){throw new Rs("Unexpected character "+JSON.stringify(e[t]),t)}function G(){throw new Rs("Unexpected end of json string",e.length)}function ee(){throw new Rs("Object key expected",t)}function te(){throw new Rs("Colon expected",t)}function je(){const B=e.slice(t,t+6);throw new Rs('Invalid unicode character "'.concat(B,'"'),t)}}function $y(e,t){return e[t]==="*"&&e[t+1]==="/"}const hf=e=>Array.isArray(e),Py=e=>typeof e=="string";function Dr(e){return(...t)=>{const r=t.map(a=>vo(a)),o=r[0],s=r[1];return r.length===1?a=>e(o(a)):r.length===2?a=>e(o(a),s(a)):a=>e(...r.map(i=>i(a)))}}const Hs={pipe:(...e)=>{const t=e.map(r=>vo(r));return r=>t.reduce((o,s)=>s(o),r)},object:e=>{const t=Object.keys(e).map(r=>[r,vo(e[r])]);return r=>{const o={};for(const[s,a]of t)o[s]=a(r);return o}},array:(...e)=>{const t=e.map(r=>vo(r));return r=>t.map(o=>o(r))},get:(...e)=>{if(e.length===0)return t=>t;if(e.length===1){const t=e[0];return r=>r?.[t]}return t=>{let r=t;for(const o of e)r=r?.[o];return r}},map:e=>{const t=vo(e);return r=>r.map(t)},filter:e=>{const t=vo(e);return r=>r.filter(t)},sort:(e=["get"],t)=>{const r=vo(e),o=t==="desc"?-1:1;function s(a,i){const l=r(a),c=r(i);return l>c?o:l<c?-o:0}return a=>a.slice().sort(s)},pick:(...e)=>{const t=e.map(([o,...s])=>[s[s.length-1],Hs.get(...s)]),r=(o,s)=>{const a={};for(const[i,l]of s)a[i]=l(o);return a};return o=>hf(o)?o.map(s=>r(s,t)):r(o,t)},groupBy:e=>{const t=vo(e);return r=>{const o={};for(const s of r){const a=t(s);o[a]?o[a].push(s):o[a]=[s]}return o}},keyBy:e=>{const t=vo(e);return r=>{const o={};for(const s of r){const a=t(s);o[a]=o[a]??s}return o}},flatten:()=>e=>e.flat(),uniq:()=>e=>[...new Set(e)],uniqBy:e=>t=>Object.values(Hs.groupBy(e)(t)).map(r=>r[0]),limit:e=>t=>t.slice(0,e),size:()=>e=>e.length,keys:()=>Object.keys,values:()=>Object.values,prod:()=>e=>e.reduce((t,r)=>t*r),sum:()=>e=>e.reduce((t,r)=>t+r),average:()=>e=>Hs.sum()(e)/e.length,min:()=>e=>Math.min(...e),max:()=>e=>Math.max(...e),in:(e,t)=>{const r=vo(e),o=vo(t);return s=>o(s).includes(r(s))},"not in":(e,t)=>{const r=Hs.in(e,t);return o=>!r(o)},regex:(e,t,r)=>{const o=new RegExp(t,r),s=vo(e);return a=>o.test(s(a))},and:Dr((e,t)=>e&&t),or:Dr((e,t)=>e||t),not:Dr(e=>!e),exists:Dr(e=>e!==void 0),eq:Dr((e,t)=>e===t),gt:Dr((e,t)=>e>t),gte:Dr((e,t)=>e>=t),lt:Dr((e,t)=>e<t),lte:Dr((e,t)=>e<=t),ne:Dr((e,t)=>e!==t),add:Dr((e,t)=>e+t),subtract:Dr((e,t)=>e-t),multiply:Dr((e,t)=>e*t),divide:Dr((e,t)=>e/t),pow:Dr((e,t)=>e**t),mod:Dr((e,t)=>e%t),abs:Dr(Math.abs),round:Dr((e,t=0)=>+`${Math.round(+`${e}e${t}`)}e${-t}`)},wl=[];function vo(e,t){wl.unshift({...Hs,...wl[0]});try{const r=hf(e)?zy(e,wl[0]):()=>e;return o=>{try{return r(o)}catch(s){throw s.jsonquery=[{data:o,query:e},...s.jsonquery??[]],s}}}finally{wl.shift()}}function zy(e,t){const[r,...o]=e,s=t[r];if(!s)throw new Error(`Unknown function '${r}'`);return s(...o)}const jm={and:"and",or:"or",eq:"==",gt:">",gte:">=",lt:"<",lte:"<=",ne:"!=",add:"+",subtract:"-",multiply:"*",divide:"/",pow:"^",mod:"%",in:"in","not in":"not in"},Ry=/^[a-zA-Z_$][a-zA-Z\d_$]*$/,Ny=/^[a-zA-Z_$][a-zA-Z\d_$]*/,My=/^"(?:[^"\\]|\\.)*"/,Ty=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,Ay=/^(0|[1-9][0-9]*)/,Iy=/^(true|false|null)/,qy=/^[ \n\t\r]+/;function xm(e,t){const r=()=>{v();const b=o();if(v(),e[y]==="|"){const k=[b];for(;e[y]==="|";)y++,v(),k.push(o());return["pipe",...k]}return b},o=()=>{const b={...jm},k=s();v();for(const $ of Object.keys(b).sort((M,z)=>z.length-M.length)){const M=b[$];if(e.substring(y,y+M.length)===M){y+=M.length,v();const z=s();return[$,k,z]}}return k},s=()=>{if(e[y]==="("){y++;const b=r();return h(")"),b}return a()},a=()=>{const b=[];if(e[y]==="."){for(;e[y]===".";)y++,b.push(d()??u()??m()??f("Property expected"));return["get",...b]}return i()},i=()=>{const b=y,k=u();if(v(),!k||e[y]!=="(")return y=b,l();y++,!Hs[k]&&f(`Unknown function '${k}'`),v();const $=e[y]!==")"?[r()]:[];for(;y<e.length&&e[y]!==")";)v(),h(","),$.push(r());return h(")"),[k,...$]},l=()=>{if(e[y]==="{"){y++,v();const b={};let k=!0;for(;y<e.length&&e[y]!=="}";){k?k=!1:(h(","),v());const $=d()??u()??m()??f("Key expected");v(),h(":"),b[$]=r()}return h("}"),["object",b]}return c()},c=()=>{if(e[y]==="["){y++,v();const b=[];let k=!0;for(;y<e.length&&e[y]!=="]";)k?k=!1:(h(","),v()),b.push(r());return h("]"),["array",...b]}return d()??g()??j()},d=()=>x(My,JSON.parse),u=()=>x(Ny,b=>b),g=()=>x(Ty,JSON.parse),m=()=>x(Ay,JSON.parse),j=()=>{const b=x(Iy,JSON.parse);if(b!==void 0)return b;f("Value expected")},p=()=>{v(),y<e.length&&f(`Unexpected part '${e.substring(y)}'`)},x=(b,k)=>{const $=e.substring(y).match(b);if($)return y+=$[0].length,k($[0])},v=()=>x(qy,b=>b),h=b=>{e[y]!==b&&f(`Character '${b}' expected`),y++},f=(b,k=y)=>{throw new SyntaxError(`${b} (pos: ${k})`)};let y=0;const w=r();return p(),w}const Dy=40,Ly="  ",Uy=(e,t)=>{const r=Ly,o=(d,u)=>hf(d)?s(d,u):JSON.stringify(d),s=(d,u)=>{var g;const[m,...j]=d;if(m==="get"&&j.length>0)return i(j);if(m==="pipe"){const h=j.map(f=>o(f,u+r));return c(h,[""," | ",""],["",`
${u+r}| `,""])}if(m==="object")return a(j[0],u);if(m==="array"){const h=j.map(f=>o(f,u));return c(h,["[",", ","]"],[`[
${u+r}`,`,
${u+r}`,`
${u}]`])}const p=((g=void 0)==null?void 0:g[m])??jm[m];if(p&&j.length===2){const[h,f]=j,y=o(h,u),w=o(f,u);return`(${y} ${p} ${w})`}const x=j.length===1?u:u+r,v=j.map(h=>o(h,x));return j.length===1&&v[0][0]==="("?`${m}${v}`:c(v,[`${m}(`,", ",")"],j.length===1?[`${m}(`,`,
${u}`,")"]:[`${m}(
${x}`,`,
${x}`,`
${u})`])},a=(d,u)=>{const g=u+r,m=Object.entries(d).map(([j,p])=>`${l(j)}: ${o(p,g)}`);return c(m,["{ ",", "," }"],[`{
${g}`,`,
${g}`,`
${u}}`])},i=d=>d.map(u=>`.${l(u)}`).join(""),l=d=>Ry.test(d)?d:JSON.stringify(d),c=(d,[u,g,m],[j,p,x])=>u.length+d.reduce((v,h)=>v+h.length+g.length,0)-g.length+m.length<=Dy?u+d.join(g)+m:j+d.join(p)+x;return o(e,"")};function Fy(e,t,r){return vo(Py(t)?xm(t):t)(e)}const Vy={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},By={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},wm=By,km={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},Wy={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Ed={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},Hy={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z"]},Li={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},Sm={prefix:"fas",iconName:"paste",icon:[512,512,["file-clipboard"],"f0ea","M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ky={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]},Qy={prefix:"fas",iconName:"scissors",icon:[512,512,[9984,9986,9988,"cut"],"f0c4","M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Zs=Qy,Jy={prefix:"fas",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},Gy=Jy,Yy={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Xy={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},_m=Xy,Zy={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},ej=Zy,tj={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Cm={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},nj={prefix:"fas",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},rj=nj,mv={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},Em={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},Nc={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},Mc={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Va={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},oj={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},ei={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},aj={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},mf=aj,sj={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},gf=sj,ij={prefix:"fas",iconName:"crop-simple",icon:[512,512,["crop-alt"],"f565","M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l224 0 0-64-224 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64L160 64l0 64 224 0 0 352z"]},lj=ij,cj={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},uj=cj,Sa={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},dj={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},Om=dj,kl={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[448,512,[8644,"exchange"],"f0ec","M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]},fj={prefix:"fas",iconName:"arrow-down-short-wide",icon:[576,512,["sort-amount-desc","sort-amount-down-alt"],"f884","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Tc=fj,vj={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},gv={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},pj={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},lu=pj,hj={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ma={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},Ks={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},$m={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},mj=$m,cu=$m,gj={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"]},bj={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"]},Pm={prefix:"fas",iconName:"clone",icon:[512,512,[],"f24d","M288 448L64 448l0-224 64 0 0-64-64 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-64 0 0 64zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"]},bf={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},yj={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},ys=yj;var Iu={exports:{}},bv;function jj(){if(bv)return Iu.exports;bv=1;/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var e=function(t,r){var o,s,a=1,i=0,l=0,c=String.alphabet;function d(u,g,m){if(m){for(o=g;m=d(u,o),m<76&&m>65;)++o;return+u.slice(g-1,o)}return m=c&&c.indexOf(u.charAt(g)),m>-1?m+76:(m=u.charCodeAt(g)||0,m<45||m>127?m:m<46?65:m<48?m-1:m<58?m+18:m<65?m-11:m<91?m+11:m<97?m-37:m<123?m+5:m-63)}if((t+="")!=(r+="")){for(;a;)if(s=d(t,i++),a=d(r,l++),s<76&&a<76&&s>66&&a>66&&(s=d(t,i,i),a=d(r,l,i=o),l=o),s!=a)return s<a?-1:1}return 0};try{Iu.exports=e}catch{String.naturalCompare=e}return Iu.exports}var xj=jj();const wj=Jh(xj);var Sl={exports:{}},qu={},la={},ss={},Du={},Lu={},Uu={},yv;function Ac(){return yv||(yv=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class r extends t{constructor(f){if(super(),!e.IDENTIFIER.test(f))throw new Error("CodeGen: name must be a valid identifier");this.str=f}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=r;class o extends t{constructor(f){super(),this._items=typeof f=="string"?[f]:f}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const f=this._items[0];return f===""||f==='""'}get str(){var f;return(f=this._str)!==null&&f!==void 0?f:this._str=this._items.reduce((y,w)=>`${y}${w}`,"")}get names(){var f;return(f=this._names)!==null&&f!==void 0?f:this._names=this._items.reduce((y,w)=>(w instanceof r&&(y[w.str]=(y[w.str]||0)+1),y),{})}}e._Code=o,e.nil=new o("");function s(h,...f){const y=[h[0]];let w=0;for(;w<f.length;)l(y,f[w]),y.push(h[++w]);return new o(y)}e._=s;const a=new o("+");function i(h,...f){const y=[j(h[0])];let w=0;for(;w<f.length;)y.push(a),l(y,f[w]),y.push(a,j(h[++w]));return c(y),new o(y)}e.str=i;function l(h,f){f instanceof o?h.push(...f._items):f instanceof r?h.push(f):h.push(g(f))}e.addCodeArg=l;function c(h){let f=1;for(;f<h.length-1;){if(h[f]===a){const y=d(h[f-1],h[f+1]);if(y!==void 0){h.splice(f-1,3,y);continue}h[f++]="+"}f++}}function d(h,f){if(f==='""')return h;if(h==='""')return f;if(typeof h=="string")return f instanceof r||h[h.length-1]!=='"'?void 0:typeof f!="string"?`${h.slice(0,-1)}${f}"`:f[0]==='"'?h.slice(0,-1)+f.slice(1):void 0;if(typeof f=="string"&&f[0]==='"'&&!(h instanceof r))return`"${h}${f.slice(1)}`}function u(h,f){return f.emptyStr()?h:h.emptyStr()?f:i`${h}${f}`}e.strConcat=u;function g(h){return typeof h=="number"||typeof h=="boolean"||h===null?h:j(Array.isArray(h)?h.join(","):h)}function m(h){return new o(j(h))}e.stringify=m;function j(h){return JSON.stringify(h).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=j;function p(h){return typeof h=="string"&&e.IDENTIFIER.test(h)?new o(`.${h}`):s`[${h}]`}e.getProperty=p;function x(h){if(typeof h=="string"&&e.IDENTIFIER.test(h))return new o(`${h}`);throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`)}e.getEsmExportName=x;function v(h){return new o(h.toString())}e.regexpCode=v}(Uu)),Uu}var Fu={},jv;function xv(){return jv||(jv=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=Ac();class r extends Error{constructor(d){super(`CodeGen: "code" for ${d} not defined`),this.value=d.value}}var o;(function(c){c[c.Started=0]="Started",c[c.Completed=1]="Completed"})(o||(e.UsedValueState=o={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class s{constructor({prefixes:d,parent:u}={}){this._names={},this._prefixes=d,this._parent=u}toName(d){return d instanceof t.Name?d:this.name(d)}name(d){return new t.Name(this._newName(d))}_newName(d){const u=this._names[d]||this._nameGroup(d);return`${d}${u.index++}`}_nameGroup(d){var u,g;if(!((g=(u=this._parent)===null||u===void 0?void 0:u._prefixes)===null||g===void 0)&&g.has(d)||this._prefixes&&!this._prefixes.has(d))throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);return this._names[d]={prefix:d,index:0}}}e.Scope=s;class a extends t.Name{constructor(d,u){super(u),this.prefix=d}setValue(d,{property:u,itemIndex:g}){this.value=d,this.scopePath=(0,t._)`.${new t.Name(u)}[${g}]`}}e.ValueScopeName=a;const i=(0,t._)`\n`;class l extends s{constructor(d){super(d),this._values={},this._scope=d.scope,this.opts={...d,_n:d.lines?i:t.nil}}get(){return this._scope}name(d){return new a(d,this._newName(d))}value(d,u){var g;if(u.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const m=this.toName(d),{prefix:j}=m,p=(g=u.key)!==null&&g!==void 0?g:u.ref;let x=this._values[j];if(x){const f=x.get(p);if(f)return f}else x=this._values[j]=new Map;x.set(p,m);const v=this._scope[j]||(this._scope[j]=[]),h=v.length;return v[h]=u.ref,m.setValue(u,{property:j,itemIndex:h}),m}getValue(d,u){const g=this._values[d];if(g)return g.get(u)}scopeRefs(d,u=this._values){return this._reduceValues(u,g=>{if(g.scopePath===void 0)throw new Error(`CodeGen: name "${g}" has no value`);return(0,t._)`${d}${g.scopePath}`})}scopeCode(d=this._values,u,g){return this._reduceValues(d,m=>{if(m.value===void 0)throw new Error(`CodeGen: name "${m}" has no value`);return m.value.code},u,g)}_reduceValues(d,u,g={},m){let j=t.nil;for(const p in d){const x=d[p];if(!x)continue;const v=g[p]=g[p]||new Map;x.forEach(h=>{if(v.has(h))return;v.set(h,o.Started);let f=u(h);if(f){const y=this.opts.es5?e.varKinds.var:e.varKinds.const;j=(0,t._)`${j}${y} ${h} = ${f};${this.opts._n}`}else if(f=m?.(h))j=(0,t._)`${j}${f}${this.opts._n}`;else throw new r(h);v.set(h,o.Completed)})}return j}}e.ValueScope=l}(Fu)),Fu}var wv;function gn(){return wv||(wv=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=Ac(),r=xv();var o=Ac();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return o._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return o.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return o.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return o.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return o.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return o.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return o.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return o.Name}});var s=xv();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return s.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return s.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return s.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return s.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class a{optimizeNodes(){return this}optimizeNames(E,R){return this}}class i extends a{constructor(E,R,ne){super(),this.varKind=E,this.name=R,this.rhs=ne}render({es5:E,_n:R}){const ne=E?r.varKinds.var:this.varKind,Se=this.rhs===void 0?"":` = ${this.rhs}`;return`${ne} ${this.name}${Se};`+R}optimizeNames(E,R){if(E[this.name.str])return this.rhs&&(this.rhs=je(this.rhs,E,R)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class l extends a{constructor(E,R,ne){super(),this.lhs=E,this.rhs=R,this.sideEffects=ne}render({_n:E}){return`${this.lhs} = ${this.rhs};`+E}optimizeNames(E,R){if(!(this.lhs instanceof t.Name&&!E[this.lhs.str]&&!this.sideEffects))return this.rhs=je(this.rhs,E,R),this}get names(){const E=this.lhs instanceof t.Name?{}:{...this.lhs.names};return te(E,this.rhs)}}class c extends l{constructor(E,R,ne,Se){super(E,ne,Se),this.op=R}render({_n:E}){return`${this.lhs} ${this.op}= ${this.rhs};`+E}}class d extends a{constructor(E){super(),this.label=E,this.names={}}render({_n:E}){return`${this.label}:`+E}}class u extends a{constructor(E){super(),this.label=E,this.names={}}render({_n:E}){return`break${this.label?` ${this.label}`:""};`+E}}class g extends a{constructor(E){super(),this.error=E}render({_n:E}){return`throw ${this.error};`+E}get names(){return this.error.names}}class m extends a{constructor(E){super(),this.code=E}render({_n:E}){return`${this.code};`+E}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(E,R){return this.code=je(this.code,E,R),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class j extends a{constructor(E=[]){super(),this.nodes=E}render(E){return this.nodes.reduce((R,ne)=>R+ne.render(E),"")}optimizeNodes(){const{nodes:E}=this;let R=E.length;for(;R--;){const ne=E[R].optimizeNodes();Array.isArray(ne)?E.splice(R,1,...ne):ne?E[R]=ne:E.splice(R,1)}return E.length>0?this:void 0}optimizeNames(E,R){const{nodes:ne}=this;let Se=ne.length;for(;Se--;){const K=ne[Se];K.optimizeNames(E,R)||(B(E,K.names),ne.splice(Se,1))}return ne.length>0?this:void 0}get names(){return this.nodes.reduce((E,R)=>ee(E,R.names),{})}}class p extends j{render(E){return"{"+E._n+super.render(E)+"}"+E._n}}class x extends j{}class v extends p{}v.kind="else";class h extends p{constructor(E,R){super(R),this.condition=E}render(E){let R=`if(${this.condition})`+super.render(E);return this.else&&(R+="else "+this.else.render(E)),R}optimizeNodes(){super.optimizeNodes();const E=this.condition;if(E===!0)return this.nodes;let R=this.else;if(R){const ne=R.optimizeNodes();R=this.else=Array.isArray(ne)?new v(ne):ne}if(R)return E===!1?R instanceof h?R:R.nodes:this.nodes.length?this:new h(pe(E),R instanceof h?[R]:R.nodes);if(!(E===!1||!this.nodes.length))return this}optimizeNames(E,R){var ne;if(this.else=(ne=this.else)===null||ne===void 0?void 0:ne.optimizeNames(E,R),!!(super.optimizeNames(E,R)||this.else))return this.condition=je(this.condition,E,R),this}get names(){const E=super.names;return te(E,this.condition),this.else&&ee(E,this.else.names),E}}h.kind="if";class f extends p{}f.kind="for";class y extends f{constructor(E){super(),this.iteration=E}render(E){return`for(${this.iteration})`+super.render(E)}optimizeNames(E,R){if(super.optimizeNames(E,R))return this.iteration=je(this.iteration,E,R),this}get names(){return ee(super.names,this.iteration.names)}}class w extends f{constructor(E,R,ne,Se){super(),this.varKind=E,this.name=R,this.from=ne,this.to=Se}render(E){const R=E.es5?r.varKinds.var:this.varKind,{name:ne,from:Se,to:K}=this;return`for(${R} ${ne}=${Se}; ${ne}<${K}; ${ne}++)`+super.render(E)}get names(){const E=te(super.names,this.from);return te(E,this.to)}}class b extends f{constructor(E,R,ne,Se){super(),this.loop=E,this.varKind=R,this.name=ne,this.iterable=Se}render(E){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(E)}optimizeNames(E,R){if(super.optimizeNames(E,R))return this.iterable=je(this.iterable,E,R),this}get names(){return ee(super.names,this.iterable.names)}}class k extends p{constructor(E,R,ne){super(),this.name=E,this.args=R,this.async=ne}render(E){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(E)}}k.kind="func";class $ extends j{render(E){return"return "+super.render(E)}}$.kind="return";class M extends p{render(E){let R="try"+super.render(E);return this.catch&&(R+=this.catch.render(E)),this.finally&&(R+=this.finally.render(E)),R}optimizeNodes(){var E,R;return super.optimizeNodes(),(E=this.catch)===null||E===void 0||E.optimizeNodes(),(R=this.finally)===null||R===void 0||R.optimizeNodes(),this}optimizeNames(E,R){var ne,Se;return super.optimizeNames(E,R),(ne=this.catch)===null||ne===void 0||ne.optimizeNames(E,R),(Se=this.finally)===null||Se===void 0||Se.optimizeNames(E,R),this}get names(){const E=super.names;return this.catch&&ee(E,this.catch.names),this.finally&&ee(E,this.finally.names),E}}class z extends p{constructor(E){super(),this.error=E}render(E){return`catch(${this.error})`+super.render(E)}}z.kind="catch";class H extends p{render(E){return"finally"+super.render(E)}}H.kind="finally";class G{constructor(E,R={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...R,_n:R.lines?`
`:""},this._extScope=E,this._scope=new r.Scope({parent:E}),this._nodes=[new x]}toString(){return this._root.render(this.opts)}name(E){return this._scope.name(E)}scopeName(E){return this._extScope.name(E)}scopeValue(E,R){const ne=this._extScope.value(E,R);return(this._values[ne.prefix]||(this._values[ne.prefix]=new Set)).add(ne),ne}getScopeValue(E,R){return this._extScope.getValue(E,R)}scopeRefs(E){return this._extScope.scopeRefs(E,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(E,R,ne,Se){const K=this._scope.toName(R);return ne!==void 0&&Se&&(this._constants[K.str]=ne),this._leafNode(new i(E,K,ne)),K}const(E,R,ne){return this._def(r.varKinds.const,E,R,ne)}let(E,R,ne){return this._def(r.varKinds.let,E,R,ne)}var(E,R,ne){return this._def(r.varKinds.var,E,R,ne)}assign(E,R,ne){return this._leafNode(new l(E,R,ne))}add(E,R){return this._leafNode(new c(E,e.operators.ADD,R))}code(E){return typeof E=="function"?E():E!==t.nil&&this._leafNode(new m(E)),this}object(...E){const R=["{"];for(const[ne,Se]of E)R.length>1&&R.push(","),R.push(ne),(ne!==Se||this.opts.es5)&&(R.push(":"),(0,t.addCodeArg)(R,Se));return R.push("}"),new t._Code(R)}if(E,R,ne){if(this._blockNode(new h(E)),R&&ne)this.code(R).else().code(ne).endIf();else if(R)this.code(R).endIf();else if(ne)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(E){return this._elseNode(new h(E))}else(){return this._elseNode(new v)}endIf(){return this._endBlockNode(h,v)}_for(E,R){return this._blockNode(E),R&&this.code(R).endFor(),this}for(E,R){return this._for(new y(E),R)}forRange(E,R,ne,Se,K=this.opts.es5?r.varKinds.var:r.varKinds.let){const F=this._scope.toName(E);return this._for(new w(K,F,R,ne),()=>Se(F))}forOf(E,R,ne,Se=r.varKinds.const){const K=this._scope.toName(E);if(this.opts.es5){const F=R instanceof t.Name?R:this.var("_arr",R);return this.forRange("_i",0,(0,t._)`${F}.length`,ie=>{this.var(K,(0,t._)`${F}[${ie}]`),ne(K)})}return this._for(new b("of",Se,K,R),()=>ne(K))}forIn(E,R,ne,Se=this.opts.es5?r.varKinds.var:r.varKinds.const){if(this.opts.ownProperties)return this.forOf(E,(0,t._)`Object.keys(${R})`,ne);const K=this._scope.toName(E);return this._for(new b("in",Se,K,R),()=>ne(K))}endFor(){return this._endBlockNode(f)}label(E){return this._leafNode(new d(E))}break(E){return this._leafNode(new u(E))}return(E){const R=new $;if(this._blockNode(R),this.code(E),R.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode($)}try(E,R,ne){if(!R&&!ne)throw new Error('CodeGen: "try" without "catch" and "finally"');const Se=new M;if(this._blockNode(Se),this.code(E),R){const K=this.name("e");this._currNode=Se.catch=new z(K),R(K)}return ne&&(this._currNode=Se.finally=new H,this.code(ne)),this._endBlockNode(z,H)}throw(E){return this._leafNode(new g(E))}block(E,R){return this._blockStarts.push(this._nodes.length),E&&this.code(E).endBlock(R),this}endBlock(E){const R=this._blockStarts.pop();if(R===void 0)throw new Error("CodeGen: not in self-balancing block");const ne=this._nodes.length-R;if(ne<0||E!==void 0&&ne!==E)throw new Error(`CodeGen: wrong number of nodes: ${ne} vs ${E} expected`);return this._nodes.length=R,this}func(E,R=t.nil,ne,Se){return this._blockNode(new k(E,R,ne)),Se&&this.code(Se).endFunc(),this}endFunc(){return this._endBlockNode(k)}optimize(E=1){for(;E-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(E){return this._currNode.nodes.push(E),this}_blockNode(E){this._currNode.nodes.push(E),this._nodes.push(E)}_endBlockNode(E,R){const ne=this._currNode;if(ne instanceof E||R&&ne instanceof R)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${R?`${E.kind}/${R.kind}`:E.kind}"`)}_elseNode(E){const R=this._currNode;if(!(R instanceof h))throw new Error('CodeGen: "else" without "if"');return this._currNode=R.else=E,this}get _root(){return this._nodes[0]}get _currNode(){const E=this._nodes;return E[E.length-1]}set _currNode(E){const R=this._nodes;R[R.length-1]=E}}e.CodeGen=G;function ee(T,E){for(const R in E)T[R]=(T[R]||0)+(E[R]||0);return T}function te(T,E){return E instanceof t._CodeOrName?ee(T,E.names):T}function je(T,E,R){if(T instanceof t.Name)return ne(T);if(!Se(T))return T;return new t._Code(T._items.reduce((K,F)=>(F instanceof t.Name&&(F=ne(F)),F instanceof t._Code?K.push(...F._items):K.push(F),K),[]));function ne(K){const F=R[K.str];return F===void 0||E[K.str]!==1?K:(delete E[K.str],F)}function Se(K){return K instanceof t._Code&&K._items.some(F=>F instanceof t.Name&&E[F.str]===1&&R[F.str]!==void 0)}}function B(T,E){for(const R in E)T[R]=(T[R]||0)-(E[R]||0)}function pe(T){return typeof T=="boolean"||typeof T=="number"||T===null?!T:(0,t._)`!${se(T)}`}e.not=pe;const $e=I(e.operators.AND);function ke(...T){return T.reduce($e)}e.and=ke;const me=I(e.operators.OR);function Y(...T){return T.reduce(me)}e.or=Y;function I(T){return(E,R)=>E===t.nil?R:R===t.nil?E:(0,t._)`${se(E)} ${T} ${se(R)}`}function se(T){return T instanceof t.Name?T:(0,t._)`(${T})`}}(Lu)),Lu}var vn={},kv;function Dn(){if(kv)return vn;kv=1,Object.defineProperty(vn,"__esModule",{value:!0}),vn.checkStrictMode=vn.getErrorPath=vn.Type=vn.useFunc=vn.setEvaluated=vn.evaluatedPropsToName=vn.mergeEvaluated=vn.eachItem=vn.unescapeJsonPointer=vn.escapeJsonPointer=vn.escapeFragment=vn.unescapeFragment=vn.schemaRefOrVal=vn.schemaHasRulesButRef=vn.schemaHasRules=vn.checkUnknownRules=vn.alwaysValidSchema=vn.toHash=void 0;const e=gn(),t=Ac();function r(b){const k={};for(const $ of b)k[$]=!0;return k}vn.toHash=r;function o(b,k){return typeof k=="boolean"?k:Object.keys(k).length===0?!0:(s(b,k),!a(k,b.self.RULES.all))}vn.alwaysValidSchema=o;function s(b,k=b.schema){const{opts:$,self:M}=b;if(!$.strictSchema||typeof k=="boolean")return;const z=M.RULES.keywords;for(const H in k)z[H]||w(b,`unknown keyword: "${H}"`)}vn.checkUnknownRules=s;function a(b,k){if(typeof b=="boolean")return!b;for(const $ in b)if(k[$])return!0;return!1}vn.schemaHasRules=a;function i(b,k){if(typeof b=="boolean")return!b;for(const $ in b)if($!=="$ref"&&k.all[$])return!0;return!1}vn.schemaHasRulesButRef=i;function l({topSchemaRef:b,schemaPath:k},$,M,z){if(!z){if(typeof $=="number"||typeof $=="boolean")return $;if(typeof $=="string")return(0,e._)`${$}`}return(0,e._)`${b}${k}${(0,e.getProperty)(M)}`}vn.schemaRefOrVal=l;function c(b){return g(decodeURIComponent(b))}vn.unescapeFragment=c;function d(b){return encodeURIComponent(u(b))}vn.escapeFragment=d;function u(b){return typeof b=="number"?`${b}`:b.replace(/~/g,"~0").replace(/\//g,"~1")}vn.escapeJsonPointer=u;function g(b){return b.replace(/~1/g,"/").replace(/~0/g,"~")}vn.unescapeJsonPointer=g;function m(b,k){if(Array.isArray(b))for(const $ of b)k($);else k(b)}vn.eachItem=m;function j({mergeNames:b,mergeToName:k,mergeValues:$,resultToName:M}){return(z,H,G,ee)=>{const te=G===void 0?H:G instanceof e.Name?(H instanceof e.Name?b(z,H,G):k(z,H,G),G):H instanceof e.Name?(k(z,G,H),H):$(H,G);return ee===e.Name&&!(te instanceof e.Name)?M(z,te):te}}vn.mergeEvaluated={props:j({mergeNames:(b,k,$)=>b.if((0,e._)`${$} !== true && ${k} !== undefined`,()=>{b.if((0,e._)`${k} === true`,()=>b.assign($,!0),()=>b.assign($,(0,e._)`${$} || {}`).code((0,e._)`Object.assign(${$}, ${k})`))}),mergeToName:(b,k,$)=>b.if((0,e._)`${$} !== true`,()=>{k===!0?b.assign($,!0):(b.assign($,(0,e._)`${$} || {}`),x(b,$,k))}),mergeValues:(b,k)=>b===!0?!0:{...b,...k},resultToName:p}),items:j({mergeNames:(b,k,$)=>b.if((0,e._)`${$} !== true && ${k} !== undefined`,()=>b.assign($,(0,e._)`${k} === true ? true : ${$} > ${k} ? ${$} : ${k}`)),mergeToName:(b,k,$)=>b.if((0,e._)`${$} !== true`,()=>b.assign($,k===!0?!0:(0,e._)`${$} > ${k} ? ${$} : ${k}`)),mergeValues:(b,k)=>b===!0?!0:Math.max(b,k),resultToName:(b,k)=>b.var("items",k)})};function p(b,k){if(k===!0)return b.var("props",!0);const $=b.var("props",(0,e._)`{}`);return k!==void 0&&x(b,$,k),$}vn.evaluatedPropsToName=p;function x(b,k,$){Object.keys($).forEach(M=>b.assign((0,e._)`${k}${(0,e.getProperty)(M)}`,!0))}vn.setEvaluated=x;const v={};function h(b,k){return b.scopeValue("func",{ref:k,code:v[k.code]||(v[k.code]=new t._Code(k.code))})}vn.useFunc=h;var f;(function(b){b[b.Num=0]="Num",b[b.Str=1]="Str"})(f||(vn.Type=f={}));function y(b,k,$){if(b instanceof e.Name){const M=k===f.Num;return $?M?(0,e._)`"[" + ${b} + "]"`:(0,e._)`"['" + ${b} + "']"`:M?(0,e._)`"/" + ${b}`:(0,e._)`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return $?(0,e.getProperty)(b).toString():"/"+u(b)}vn.getErrorPath=y;function w(b,k,$=b.opts.strictSchema){if($){if(k=`strict mode: ${k}`,$===!0)throw new Error(k);b.self.logger.warn(k)}}return vn.checkStrictMode=w,vn}var _l={},Sv;function Ya(){if(Sv)return _l;Sv=1,Object.defineProperty(_l,"__esModule",{value:!0});const e=gn(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return _l.default=t,_l}var _v;function uu(){return _v||(_v=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=gn(),r=Dn(),o=Ya();e.keywordError={message:({keyword:v})=>(0,t.str)`must pass "${v}" keyword validation`},e.keyword$DataError={message:({keyword:v,schemaType:h})=>h?(0,t.str)`"${v}" keyword must be ${h} ($data)`:(0,t.str)`"${v}" keyword is invalid ($data)`};function s(v,h=e.keywordError,f,y){const{it:w}=v,{gen:b,compositeRule:k,allErrors:$}=w,M=g(v,h,f);y??(k||$)?c(b,M):d(w,(0,t._)`[${M}]`)}e.reportError=s;function a(v,h=e.keywordError,f){const{it:y}=v,{gen:w,compositeRule:b,allErrors:k}=y,$=g(v,h,f);c(w,$),b||k||d(y,o.default.vErrors)}e.reportExtraError=a;function i(v,h){v.assign(o.default.errors,h),v.if((0,t._)`${o.default.vErrors} !== null`,()=>v.if(h,()=>v.assign((0,t._)`${o.default.vErrors}.length`,h),()=>v.assign(o.default.vErrors,null)))}e.resetErrorsCount=i;function l({gen:v,keyword:h,schemaValue:f,data:y,errsCount:w,it:b}){if(w===void 0)throw new Error("ajv implementation error");const k=v.name("err");v.forRange("i",w,o.default.errors,$=>{v.const(k,(0,t._)`${o.default.vErrors}[${$}]`),v.if((0,t._)`${k}.instancePath === undefined`,()=>v.assign((0,t._)`${k}.instancePath`,(0,t.strConcat)(o.default.instancePath,b.errorPath))),v.assign((0,t._)`${k}.schemaPath`,(0,t.str)`${b.errSchemaPath}/${h}`),b.opts.verbose&&(v.assign((0,t._)`${k}.schema`,f),v.assign((0,t._)`${k}.data`,y))})}e.extendErrors=l;function c(v,h){const f=v.const("err",h);v.if((0,t._)`${o.default.vErrors} === null`,()=>v.assign(o.default.vErrors,(0,t._)`[${f}]`),(0,t._)`${o.default.vErrors}.push(${f})`),v.code((0,t._)`${o.default.errors}++`)}function d(v,h){const{gen:f,validateName:y,schemaEnv:w}=v;w.$async?f.throw((0,t._)`new ${v.ValidationError}(${h})`):(f.assign((0,t._)`${y}.errors`,h),f.return(!1))}const u={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function g(v,h,f){const{createErrors:y}=v.it;return y===!1?(0,t._)`{}`:m(v,h,f)}function m(v,h,f={}){const{gen:y,it:w}=v,b=[j(w,f),p(v,f)];return x(v,h,b),y.object(...b)}function j({errorPath:v},{instancePath:h}){const f=h?(0,t.str)`${v}${(0,r.getErrorPath)(h,r.Type.Str)}`:v;return[o.default.instancePath,(0,t.strConcat)(o.default.instancePath,f)]}function p({keyword:v,it:{errSchemaPath:h}},{schemaPath:f,parentSchema:y}){let w=y?h:(0,t.str)`${h}/${v}`;return f&&(w=(0,t.str)`${w}${(0,r.getErrorPath)(f,r.Type.Str)}`),[u.schemaPath,w]}function x(v,{params:h,message:f},y){const{keyword:w,data:b,schemaValue:k,it:$}=v,{opts:M,propertyName:z,topSchemaRef:H,schemaPath:G}=$;y.push([u.keyword,w],[u.params,typeof h=="function"?h(v):h||(0,t._)`{}`]),M.messages&&y.push([u.message,typeof f=="function"?f(v):f]),M.verbose&&y.push([u.schema,k],[u.parentSchema,(0,t._)`${H}${G}`],[o.default.data,b]),z&&y.push([u.propertyName,z])}}(Du)),Du}var Cv;function kj(){if(Cv)return ss;Cv=1,Object.defineProperty(ss,"__esModule",{value:!0}),ss.boolOrEmptySchema=ss.topBoolOrEmptySchema=void 0;const e=uu(),t=gn(),r=Ya(),o={message:"boolean schema is false"};function s(l){const{gen:c,schema:d,validateName:u}=l;d===!1?i(l,!1):typeof d=="object"&&d.$async===!0?c.return(r.default.data):(c.assign((0,t._)`${u}.errors`,null),c.return(!0))}ss.topBoolOrEmptySchema=s;function a(l,c){const{gen:d,schema:u}=l;u===!1?(d.var(c,!1),i(l)):d.var(c,!0)}ss.boolOrEmptySchema=a;function i(l,c){const{gen:d,data:u}=l,g={gen:d,keyword:"false schema",data:u,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:l};(0,e.reportError)(g,o,void 0,c)}return ss}var Hr={},is={},Ev;function zm(){if(Ev)return is;Ev=1,Object.defineProperty(is,"__esModule",{value:!0}),is.getRules=is.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function r(s){return typeof s=="string"&&t.has(s)}is.isJSONType=r;function o(){const s={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...s,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},s.number,s.string,s.array,s.object],post:{rules:[]},all:{},keywords:{}}}return is.getRules=o,is}var ca={},Ov;function Rm(){if(Ov)return ca;Ov=1,Object.defineProperty(ca,"__esModule",{value:!0}),ca.shouldUseRule=ca.shouldUseGroup=ca.schemaHasRulesForType=void 0;function e({schema:o,self:s},a){const i=s.RULES.types[a];return i&&i!==!0&&t(o,i)}ca.schemaHasRulesForType=e;function t(o,s){return s.rules.some(a=>r(o,a))}ca.shouldUseGroup=t;function r(o,s){var a;return o[s.keyword]!==void 0||((a=s.definition.implements)===null||a===void 0?void 0:a.some(i=>o[i]!==void 0))}return ca.shouldUseRule=r,ca}var $v;function Ic(){if($v)return Hr;$v=1,Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.reportTypeError=Hr.checkDataTypes=Hr.checkDataType=Hr.coerceAndCheckDataType=Hr.getJSONTypes=Hr.getSchemaTypes=Hr.DataType=void 0;const e=zm(),t=Rm(),r=uu(),o=gn(),s=Dn();var a;(function(f){f[f.Correct=0]="Correct",f[f.Wrong=1]="Wrong"})(a||(Hr.DataType=a={}));function i(f){const y=l(f.type);if(y.includes("null")){if(f.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!y.length&&f.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');f.nullable===!0&&y.push("null")}return y}Hr.getSchemaTypes=i;function l(f){const y=Array.isArray(f)?f:f?[f]:[];if(y.every(e.isJSONType))return y;throw new Error("type must be JSONType or JSONType[]: "+y.join(","))}Hr.getJSONTypes=l;function c(f,y){const{gen:w,data:b,opts:k}=f,$=u(y,k.coerceTypes),M=y.length>0&&!($.length===0&&y.length===1&&(0,t.schemaHasRulesForType)(f,y[0]));if(M){const z=p(y,b,k.strictNumbers,a.Wrong);w.if(z,()=>{$.length?g(f,y,$):v(f)})}return M}Hr.coerceAndCheckDataType=c;const d=new Set(["string","number","integer","boolean","null"]);function u(f,y){return y?f.filter(w=>d.has(w)||y==="array"&&w==="array"):[]}function g(f,y,w){const{gen:b,data:k,opts:$}=f,M=b.let("dataType",(0,o._)`typeof ${k}`),z=b.let("coerced",(0,o._)`undefined`);$.coerceTypes==="array"&&b.if((0,o._)`${M} == 'object' && Array.isArray(${k}) && ${k}.length == 1`,()=>b.assign(k,(0,o._)`${k}[0]`).assign(M,(0,o._)`typeof ${k}`).if(p(y,k,$.strictNumbers),()=>b.assign(z,k))),b.if((0,o._)`${z} !== undefined`);for(const G of w)(d.has(G)||G==="array"&&$.coerceTypes==="array")&&H(G);b.else(),v(f),b.endIf(),b.if((0,o._)`${z} !== undefined`,()=>{b.assign(k,z),m(f,z)});function H(G){switch(G){case"string":b.elseIf((0,o._)`${M} == "number" || ${M} == "boolean"`).assign(z,(0,o._)`"" + ${k}`).elseIf((0,o._)`${k} === null`).assign(z,(0,o._)`""`);return;case"number":b.elseIf((0,o._)`${M} == "boolean" || ${k} === null
              || (${M} == "string" && ${k} && ${k} == +${k})`).assign(z,(0,o._)`+${k}`);return;case"integer":b.elseIf((0,o._)`${M} === "boolean" || ${k} === null
              || (${M} === "string" && ${k} && ${k} == +${k} && !(${k} % 1))`).assign(z,(0,o._)`+${k}`);return;case"boolean":b.elseIf((0,o._)`${k} === "false" || ${k} === 0 || ${k} === null`).assign(z,!1).elseIf((0,o._)`${k} === "true" || ${k} === 1`).assign(z,!0);return;case"null":b.elseIf((0,o._)`${k} === "" || ${k} === 0 || ${k} === false`),b.assign(z,null);return;case"array":b.elseIf((0,o._)`${M} === "string" || ${M} === "number"
              || ${M} === "boolean" || ${k} === null`).assign(z,(0,o._)`[${k}]`)}}}function m({gen:f,parentData:y,parentDataProperty:w},b){f.if((0,o._)`${y} !== undefined`,()=>f.assign((0,o._)`${y}[${w}]`,b))}function j(f,y,w,b=a.Correct){const k=b===a.Correct?o.operators.EQ:o.operators.NEQ;let $;switch(f){case"null":return(0,o._)`${y} ${k} null`;case"array":$=(0,o._)`Array.isArray(${y})`;break;case"object":$=(0,o._)`${y} && typeof ${y} == "object" && !Array.isArray(${y})`;break;case"integer":$=M((0,o._)`!(${y} % 1) && !isNaN(${y})`);break;case"number":$=M();break;default:return(0,o._)`typeof ${y} ${k} ${f}`}return b===a.Correct?$:(0,o.not)($);function M(z=o.nil){return(0,o.and)((0,o._)`typeof ${y} == "number"`,z,w?(0,o._)`isFinite(${y})`:o.nil)}}Hr.checkDataType=j;function p(f,y,w,b){if(f.length===1)return j(f[0],y,w,b);let k;const $=(0,s.toHash)(f);if($.array&&$.object){const M=(0,o._)`typeof ${y} != "object"`;k=$.null?M:(0,o._)`!${y} || ${M}`,delete $.null,delete $.array,delete $.object}else k=o.nil;$.number&&delete $.integer;for(const M in $)k=(0,o.and)(k,j(M,y,w,b));return k}Hr.checkDataTypes=p;const x={message:({schema:f})=>`must be ${f}`,params:({schema:f,schemaValue:y})=>typeof f=="string"?(0,o._)`{type: ${f}}`:(0,o._)`{type: ${y}}`};function v(f){const y=h(f);(0,r.reportError)(y,x)}Hr.reportTypeError=v;function h(f){const{gen:y,data:w,schema:b}=f,k=(0,s.schemaRefOrVal)(f,b,"type");return{gen:y,keyword:"type",data:w,schema:b.type,schemaCode:k,schemaValue:k,parentSchema:b,params:{},it:f}}return Hr}var Oi={},Pv;function Sj(){if(Pv)return Oi;Pv=1,Object.defineProperty(Oi,"__esModule",{value:!0}),Oi.assignDefaults=void 0;const e=gn(),t=Dn();function r(s,a){const{properties:i,items:l}=s.schema;if(a==="object"&&i)for(const c in i)o(s,c,i[c].default);else a==="array"&&Array.isArray(l)&&l.forEach((c,d)=>o(s,d,c.default))}Oi.assignDefaults=r;function o(s,a,i){const{gen:l,compositeRule:c,data:d,opts:u}=s;if(i===void 0)return;const g=(0,e._)`${d}${(0,e.getProperty)(a)}`;if(c){(0,t.checkStrictMode)(s,`default is ignored for: ${g}`);return}let m=(0,e._)`${g} === undefined`;u.useDefaults==="empty"&&(m=(0,e._)`${m} || ${g} === null || ${g} === ""`),l.if(m,(0,e._)`${g} = ${(0,e.stringify)(i)}`)}return Oi}var zo={},Gn={},zv;function Bo(){if(zv)return Gn;zv=1,Object.defineProperty(Gn,"__esModule",{value:!0}),Gn.validateUnion=Gn.validateArray=Gn.usePattern=Gn.callValidateCode=Gn.schemaProperties=Gn.allSchemaProperties=Gn.noPropertyInData=Gn.propertyInData=Gn.isOwnProperty=Gn.hasPropFunc=Gn.reportMissingProp=Gn.checkMissingProp=Gn.checkReportMissingProp=void 0;const e=gn(),t=Dn(),r=Ya(),o=Dn();function s(f,y){const{gen:w,data:b,it:k}=f;w.if(u(w,b,y,k.opts.ownProperties),()=>{f.setParams({missingProperty:(0,e._)`${y}`},!0),f.error()})}Gn.checkReportMissingProp=s;function a({gen:f,data:y,it:{opts:w}},b,k){return(0,e.or)(...b.map($=>(0,e.and)(u(f,y,$,w.ownProperties),(0,e._)`${k} = ${$}`)))}Gn.checkMissingProp=a;function i(f,y){f.setParams({missingProperty:y},!0),f.error()}Gn.reportMissingProp=i;function l(f){return f.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Gn.hasPropFunc=l;function c(f,y,w){return(0,e._)`${l(f)}.call(${y}, ${w})`}Gn.isOwnProperty=c;function d(f,y,w,b){const k=(0,e._)`${y}${(0,e.getProperty)(w)} !== undefined`;return b?(0,e._)`${k} && ${c(f,y,w)}`:k}Gn.propertyInData=d;function u(f,y,w,b){const k=(0,e._)`${y}${(0,e.getProperty)(w)} === undefined`;return b?(0,e.or)(k,(0,e.not)(c(f,y,w))):k}Gn.noPropertyInData=u;function g(f){return f?Object.keys(f).filter(y=>y!=="__proto__"):[]}Gn.allSchemaProperties=g;function m(f,y){return g(y).filter(w=>!(0,t.alwaysValidSchema)(f,y[w]))}Gn.schemaProperties=m;function j({schemaCode:f,data:y,it:{gen:w,topSchemaRef:b,schemaPath:k,errorPath:$},it:M},z,H,G){const ee=G?(0,e._)`${f}, ${y}, ${b}${k}`:y,te=[[r.default.instancePath,(0,e.strConcat)(r.default.instancePath,$)],[r.default.parentData,M.parentData],[r.default.parentDataProperty,M.parentDataProperty],[r.default.rootData,r.default.rootData]];M.opts.dynamicRef&&te.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);const je=(0,e._)`${ee}, ${w.object(...te)}`;return H!==e.nil?(0,e._)`${z}.call(${H}, ${je})`:(0,e._)`${z}(${je})`}Gn.callValidateCode=j;const p=(0,e._)`new RegExp`;function x({gen:f,it:{opts:y}},w){const b=y.unicodeRegExp?"u":"",{regExp:k}=y.code,$=k(w,b);return f.scopeValue("pattern",{key:$.toString(),ref:$,code:(0,e._)`${k.code==="new RegExp"?p:(0,o.useFunc)(f,k)}(${w}, ${b})`})}Gn.usePattern=x;function v(f){const{gen:y,data:w,keyword:b,it:k}=f,$=y.name("valid");if(k.allErrors){const z=y.let("valid",!0);return M(()=>y.assign(z,!1)),z}return y.var($,!0),M(()=>y.break()),$;function M(z){const H=y.const("len",(0,e._)`${w}.length`);y.forRange("i",0,H,G=>{f.subschema({keyword:b,dataProp:G,dataPropType:t.Type.Num},$),y.if((0,e.not)($),z)})}}Gn.validateArray=v;function h(f){const{gen:y,schema:w,keyword:b,it:k}=f;if(!Array.isArray(w))throw new Error("ajv implementation error");if(w.some(H=>(0,t.alwaysValidSchema)(k,H))&&!k.opts.unevaluated)return;const M=y.let("valid",!1),z=y.name("_valid");y.block(()=>w.forEach((H,G)=>{const ee=f.subschema({keyword:b,schemaProp:G,compositeRule:!0},z);y.assign(M,(0,e._)`${M} || ${z}`),f.mergeValidEvaluated(ee,z)||y.if((0,e.not)(M))})),f.result(M,()=>f.reset(),()=>f.error(!0))}return Gn.validateUnion=h,Gn}var Rv;function _j(){if(Rv)return zo;Rv=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.validateKeywordUsage=zo.validSchemaType=zo.funcKeywordCode=zo.macroKeywordCode=void 0;const e=gn(),t=Ya(),r=Bo(),o=uu();function s(m,j){const{gen:p,keyword:x,schema:v,parentSchema:h,it:f}=m,y=j.macro.call(f.self,v,h,f),w=d(p,x,y);f.opts.validateSchema!==!1&&f.self.validateSchema(y,!0);const b=p.name("valid");m.subschema({schema:y,schemaPath:e.nil,errSchemaPath:`${f.errSchemaPath}/${x}`,topSchemaRef:w,compositeRule:!0},b),m.pass(b,()=>m.error(!0))}zo.macroKeywordCode=s;function a(m,j){var p;const{gen:x,keyword:v,schema:h,parentSchema:f,$data:y,it:w}=m;c(w,j);const b=!y&&j.compile?j.compile.call(w.self,h,f,w):j.validate,k=d(x,v,b),$=x.let("valid");m.block$data($,M),m.ok((p=j.valid)!==null&&p!==void 0?p:$);function M(){if(j.errors===!1)G(),j.modifying&&i(m),ee(()=>m.error());else{const te=j.async?z():H();j.modifying&&i(m),ee(()=>l(m,te))}}function z(){const te=x.let("ruleErrs",null);return x.try(()=>G((0,e._)`await `),je=>x.assign($,!1).if((0,e._)`${je} instanceof ${w.ValidationError}`,()=>x.assign(te,(0,e._)`${je}.errors`),()=>x.throw(je))),te}function H(){const te=(0,e._)`${k}.errors`;return x.assign(te,null),G(e.nil),te}function G(te=j.async?(0,e._)`await `:e.nil){const je=w.opts.passContext?t.default.this:t.default.self,B=!("compile"in j&&!y||j.schema===!1);x.assign($,(0,e._)`${te}${(0,r.callValidateCode)(m,k,je,B)}`,j.modifying)}function ee(te){var je;x.if((0,e.not)((je=j.valid)!==null&&je!==void 0?je:$),te)}}zo.funcKeywordCode=a;function i(m){const{gen:j,data:p,it:x}=m;j.if(x.parentData,()=>j.assign(p,(0,e._)`${x.parentData}[${x.parentDataProperty}]`))}function l(m,j){const{gen:p}=m;p.if((0,e._)`Array.isArray(${j})`,()=>{p.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${j} : ${t.default.vErrors}.concat(${j})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,o.extendErrors)(m)},()=>m.error())}function c({schemaEnv:m},j){if(j.async&&!m.$async)throw new Error("async keyword in sync schema")}function d(m,j,p){if(p===void 0)throw new Error(`keyword "${j}" failed to compile`);return m.scopeValue("keyword",typeof p=="function"?{ref:p}:{ref:p,code:(0,e.stringify)(p)})}function u(m,j,p=!1){return!j.length||j.some(x=>x==="array"?Array.isArray(m):x==="object"?m&&typeof m=="object"&&!Array.isArray(m):typeof m==x||p&&typeof m>"u")}zo.validSchemaType=u;function g({schema:m,opts:j,self:p,errSchemaPath:x},v,h){if(Array.isArray(v.keyword)?!v.keyword.includes(h):v.keyword!==h)throw new Error("ajv implementation error");const f=v.dependencies;if(f?.some(y=>!Object.prototype.hasOwnProperty.call(m,y)))throw new Error(`parent schema must have dependencies of ${h}: ${f.join(",")}`);if(v.validateSchema&&!v.validateSchema(m[h])){const w=`keyword "${h}" value is invalid at path "${x}": `+p.errorsText(v.validateSchema.errors);if(j.validateSchema==="log")p.logger.error(w);else throw new Error(w)}}return zo.validateKeywordUsage=g,zo}var ua={},Nv;function Cj(){if(Nv)return ua;Nv=1,Object.defineProperty(ua,"__esModule",{value:!0}),ua.extendSubschemaMode=ua.extendSubschemaData=ua.getSubschema=void 0;const e=gn(),t=Dn();function r(a,{keyword:i,schemaProp:l,schema:c,schemaPath:d,errSchemaPath:u,topSchemaRef:g}){if(i!==void 0&&c!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(i!==void 0){const m=a.schema[i];return l===void 0?{schema:m,schemaPath:(0,e._)`${a.schemaPath}${(0,e.getProperty)(i)}`,errSchemaPath:`${a.errSchemaPath}/${i}`}:{schema:m[l],schemaPath:(0,e._)`${a.schemaPath}${(0,e.getProperty)(i)}${(0,e.getProperty)(l)}`,errSchemaPath:`${a.errSchemaPath}/${i}/${(0,t.escapeFragment)(l)}`}}if(c!==void 0){if(d===void 0||u===void 0||g===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:c,schemaPath:d,topSchemaRef:g,errSchemaPath:u}}throw new Error('either "keyword" or "schema" must be passed')}ua.getSubschema=r;function o(a,i,{dataProp:l,dataPropType:c,data:d,dataTypes:u,propertyName:g}){if(d!==void 0&&l!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:m}=i;if(l!==void 0){const{errorPath:p,dataPathArr:x,opts:v}=i,h=m.let("data",(0,e._)`${i.data}${(0,e.getProperty)(l)}`,!0);j(h),a.errorPath=(0,e.str)`${p}${(0,t.getErrorPath)(l,c,v.jsPropertySyntax)}`,a.parentDataProperty=(0,e._)`${l}`,a.dataPathArr=[...x,a.parentDataProperty]}if(d!==void 0){const p=d instanceof e.Name?d:m.let("data",d,!0);j(p),g!==void 0&&(a.propertyName=g)}u&&(a.dataTypes=u);function j(p){a.data=p,a.dataLevel=i.dataLevel+1,a.dataTypes=[],i.definedProperties=new Set,a.parentData=i.data,a.dataNames=[...i.dataNames,p]}}ua.extendSubschemaData=o;function s(a,{jtdDiscriminator:i,jtdMetadata:l,compositeRule:c,createErrors:d,allErrors:u}){c!==void 0&&(a.compositeRule=c),d!==void 0&&(a.createErrors=d),u!==void 0&&(a.allErrors=u),a.jtdDiscriminator=i,a.jtdMetadata=l}return ua.extendSubschemaMode=s,ua}var Xr={},Vu={exports:{}},Mv;function Ej(){if(Mv)return Vu.exports;Mv=1;var e=Vu.exports=function(o,s,a){typeof s=="function"&&(a=s,s={}),a=s.cb||a;var i=typeof a=="function"?a:a.pre||function(){},l=a.post||function(){};t(s,i,l,o,"",o)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(o,s,a,i,l,c,d,u,g,m){if(i&&typeof i=="object"&&!Array.isArray(i)){s(i,l,c,d,u,g,m);for(var j in i){var p=i[j];if(Array.isArray(p)){if(j in e.arrayKeywords)for(var x=0;x<p.length;x++)t(o,s,a,p[x],l+"/"+j+"/"+x,c,l,j,i,x)}else if(j in e.propsKeywords){if(p&&typeof p=="object")for(var v in p)t(o,s,a,p[v],l+"/"+j+"/"+r(v),c,l,j,i,v)}else(j in e.keywords||o.allKeys&&!(j in e.skipKeywords))&&t(o,s,a,p,l+"/"+j,c,l,j,i)}a(i,l,c,d,u,g,m)}}function r(o){return o.replace(/~/g,"~0").replace(/\//g,"~1")}return Vu.exports}var Tv;function du(){if(Tv)return Xr;Tv=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.getSchemaRefs=Xr.resolveUrl=Xr.normalizeId=Xr._getFullPath=Xr.getFullPath=Xr.inlineRef=void 0;const e=Dn(),t=rm(),r=Ej(),o=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function s(x,v=!0){return typeof x=="boolean"?!0:v===!0?!i(x):v?l(x)<=v:!1}Xr.inlineRef=s;const a=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function i(x){for(const v in x){if(a.has(v))return!0;const h=x[v];if(Array.isArray(h)&&h.some(i)||typeof h=="object"&&i(h))return!0}return!1}function l(x){let v=0;for(const h in x){if(h==="$ref")return 1/0;if(v++,!o.has(h)&&(typeof x[h]=="object"&&(0,e.eachItem)(x[h],f=>v+=l(f)),v===1/0))return 1/0}return v}function c(x,v="",h){h!==!1&&(v=g(v));const f=x.parse(v);return d(x,f)}Xr.getFullPath=c;function d(x,v){return x.serialize(v).split("#")[0]+"#"}Xr._getFullPath=d;const u=/#\/?$/;function g(x){return x?x.replace(u,""):""}Xr.normalizeId=g;function m(x,v,h){return h=g(h),x.resolve(v,h)}Xr.resolveUrl=m;const j=/^[a-z_][-a-z0-9._]*$/i;function p(x,v){if(typeof x=="boolean")return{};const{schemaId:h,uriResolver:f}=this.opts,y=g(x[h]||v),w={"":y},b=c(f,y,!1),k={},$=new Set;return r(x,{allKeys:!0},(H,G,ee,te)=>{if(te===void 0)return;const je=b+G;let B=w[te];typeof H[h]=="string"&&(B=pe.call(this,H[h])),$e.call(this,H.$anchor),$e.call(this,H.$dynamicAnchor),w[G]=B;function pe(ke){const me=this.opts.uriResolver.resolve;if(ke=g(B?me(B,ke):ke),$.has(ke))throw z(ke);$.add(ke);let Y=this.refs[ke];return typeof Y=="string"&&(Y=this.refs[Y]),typeof Y=="object"?M(H,Y.schema,ke):ke!==g(je)&&(ke[0]==="#"?(M(H,k[ke],ke),k[ke]=H):this.refs[ke]=je),ke}function $e(ke){if(typeof ke=="string"){if(!j.test(ke))throw new Error(`invalid anchor "${ke}"`);pe.call(this,`#${ke}`)}}}),k;function M(H,G,ee){if(G!==void 0&&!t(H,G))throw z(ee)}function z(H){return new Error(`reference "${H}" resolves to more than one schema`)}}return Xr.getSchemaRefs=p,Xr}var Av;function fu(){if(Av)return la;Av=1,Object.defineProperty(la,"__esModule",{value:!0}),la.getData=la.KeywordCxt=la.validateFunctionCode=void 0;const e=kj(),t=Ic(),r=Rm(),o=Ic(),s=Sj(),a=_j(),i=Cj(),l=gn(),c=Ya(),d=du(),u=Dn(),g=uu();function m(P){if(b(P)&&($(P),w(P))){v(P);return}j(P,()=>(0,e.topBoolOrEmptySchema)(P))}la.validateFunctionCode=m;function j({gen:P,validateName:U,schema:L,schemaEnv:fe,opts:J},V){J.code.es5?P.func(U,(0,l._)`${c.default.data}, ${c.default.valCxt}`,fe.$async,()=>{P.code((0,l._)`"use strict"; ${f(L,J)}`),x(P,J),P.code(V)}):P.func(U,(0,l._)`${c.default.data}, ${p(J)}`,fe.$async,()=>P.code(f(L,J)).code(V))}function p(P){return(0,l._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef?(0,l._)`, ${c.default.dynamicAnchors}={}`:l.nil}}={}`}function x(P,U){P.if(c.default.valCxt,()=>{P.var(c.default.instancePath,(0,l._)`${c.default.valCxt}.${c.default.instancePath}`),P.var(c.default.parentData,(0,l._)`${c.default.valCxt}.${c.default.parentData}`),P.var(c.default.parentDataProperty,(0,l._)`${c.default.valCxt}.${c.default.parentDataProperty}`),P.var(c.default.rootData,(0,l._)`${c.default.valCxt}.${c.default.rootData}`),U.dynamicRef&&P.var(c.default.dynamicAnchors,(0,l._)`${c.default.valCxt}.${c.default.dynamicAnchors}`)},()=>{P.var(c.default.instancePath,(0,l._)`""`),P.var(c.default.parentData,(0,l._)`undefined`),P.var(c.default.parentDataProperty,(0,l._)`undefined`),P.var(c.default.rootData,c.default.data),U.dynamicRef&&P.var(c.default.dynamicAnchors,(0,l._)`{}`)})}function v(P){const{schema:U,opts:L,gen:fe}=P;j(P,()=>{L.$comment&&U.$comment&&te(P),H(P),fe.let(c.default.vErrors,null),fe.let(c.default.errors,0),L.unevaluated&&h(P),M(P),je(P)})}function h(P){const{gen:U,validateName:L}=P;P.evaluated=U.const("evaluated",(0,l._)`${L}.evaluated`),U.if((0,l._)`${P.evaluated}.dynamicProps`,()=>U.assign((0,l._)`${P.evaluated}.props`,(0,l._)`undefined`)),U.if((0,l._)`${P.evaluated}.dynamicItems`,()=>U.assign((0,l._)`${P.evaluated}.items`,(0,l._)`undefined`))}function f(P,U){const L=typeof P=="object"&&P[U.schemaId];return L&&(U.code.source||U.code.process)?(0,l._)`/*# sourceURL=${L} */`:l.nil}function y(P,U){if(b(P)&&($(P),w(P))){k(P,U);return}(0,e.boolOrEmptySchema)(P,U)}function w({schema:P,self:U}){if(typeof P=="boolean")return!P;for(const L in P)if(U.RULES.all[L])return!0;return!1}function b(P){return typeof P.schema!="boolean"}function k(P,U){const{schema:L,gen:fe,opts:J}=P;J.$comment&&L.$comment&&te(P),G(P),ee(P);const V=fe.const("_errs",c.default.errors);M(P,V),fe.var(U,(0,l._)`${V} === ${c.default.errors}`)}function $(P){(0,u.checkUnknownRules)(P),z(P)}function M(P,U){if(P.opts.jtd)return pe(P,[],!1,U);const L=(0,t.getSchemaTypes)(P.schema),fe=(0,t.coerceAndCheckDataType)(P,L);pe(P,L,!fe,U)}function z(P){const{schema:U,errSchemaPath:L,opts:fe,self:J}=P;U.$ref&&fe.ignoreKeywordsWithRef&&(0,u.schemaHasRulesButRef)(U,J.RULES)&&J.logger.warn(`$ref: keywords ignored in schema at path "${L}"`)}function H(P){const{schema:U,opts:L}=P;U.default!==void 0&&L.useDefaults&&L.strictSchema&&(0,u.checkStrictMode)(P,"default is ignored in the schema root")}function G(P){const U=P.schema[P.opts.schemaId];U&&(P.baseId=(0,d.resolveUrl)(P.opts.uriResolver,P.baseId,U))}function ee(P){if(P.schema.$async&&!P.schemaEnv.$async)throw new Error("async schema in sync schema")}function te({gen:P,schemaEnv:U,schema:L,errSchemaPath:fe,opts:J}){const V=L.$comment;if(J.$comment===!0)P.code((0,l._)`${c.default.self}.logger.log(${V})`);else if(typeof J.$comment=="function"){const Ze=(0,l.str)`${fe}/$comment`,Je=P.scopeValue("root",{ref:U.root});P.code((0,l._)`${c.default.self}.opts.$comment(${V}, ${Ze}, ${Je}.schema)`)}}function je(P){const{gen:U,schemaEnv:L,validateName:fe,ValidationError:J,opts:V}=P;L.$async?U.if((0,l._)`${c.default.errors} === 0`,()=>U.return(c.default.data),()=>U.throw((0,l._)`new ${J}(${c.default.vErrors})`)):(U.assign((0,l._)`${fe}.errors`,c.default.vErrors),V.unevaluated&&B(P),U.return((0,l._)`${c.default.errors} === 0`))}function B({gen:P,evaluated:U,props:L,items:fe}){L instanceof l.Name&&P.assign((0,l._)`${U}.props`,L),fe instanceof l.Name&&P.assign((0,l._)`${U}.items`,fe)}function pe(P,U,L,fe){const{gen:J,schema:V,data:Ze,allErrors:Je,opts:Oe,self:Xe}=P,{RULES:Ne}=Xe;if(V.$ref&&(Oe.ignoreKeywordsWithRef||!(0,u.schemaHasRulesButRef)(V,Ne))){J.block(()=>Se(P,"$ref",Ne.all.$ref.definition));return}Oe.jtd||ke(P,U),J.block(()=>{for(const lt of Ne.rules)Le(lt);Le(Ne.post)});function Le(lt){(0,r.shouldUseGroup)(V,lt)&&(lt.type?(J.if((0,o.checkDataType)(lt.type,Ze,Oe.strictNumbers)),$e(P,lt),U.length===1&&U[0]===lt.type&&L&&(J.else(),(0,o.reportTypeError)(P)),J.endIf()):$e(P,lt),Je||J.if((0,l._)`${c.default.errors} === ${fe||0}`))}}function $e(P,U){const{gen:L,schema:fe,opts:{useDefaults:J}}=P;J&&(0,s.assignDefaults)(P,U.type),L.block(()=>{for(const V of U.rules)(0,r.shouldUseRule)(fe,V)&&Se(P,V.keyword,V.definition,U.type)})}function ke(P,U){P.schemaEnv.meta||!P.opts.strictTypes||(me(P,U),P.opts.allowUnionTypes||Y(P,U),I(P,P.dataTypes))}function me(P,U){if(U.length){if(!P.dataTypes.length){P.dataTypes=U;return}U.forEach(L=>{T(P.dataTypes,L)||R(P,`type "${L}" not allowed by context "${P.dataTypes.join(",")}"`)}),E(P,U)}}function Y(P,U){U.length>1&&!(U.length===2&&U.includes("null"))&&R(P,"use allowUnionTypes to allow union type keyword")}function I(P,U){const L=P.self.RULES.all;for(const fe in L){const J=L[fe];if(typeof J=="object"&&(0,r.shouldUseRule)(P.schema,J)){const{type:V}=J.definition;V.length&&!V.some(Ze=>se(U,Ze))&&R(P,`missing type "${V.join(",")}" for keyword "${fe}"`)}}}function se(P,U){return P.includes(U)||U==="number"&&P.includes("integer")}function T(P,U){return P.includes(U)||U==="integer"&&P.includes("number")}function E(P,U){const L=[];for(const fe of P.dataTypes)T(U,fe)?L.push(fe):U.includes("integer")&&fe==="number"&&L.push("integer");P.dataTypes=L}function R(P,U){const L=P.schemaEnv.baseId+P.errSchemaPath;U+=` at "${L}" (strictTypes)`,(0,u.checkStrictMode)(P,U,P.opts.strictTypes)}class ne{constructor(U,L,fe){if((0,a.validateKeywordUsage)(U,L,fe),this.gen=U.gen,this.allErrors=U.allErrors,this.keyword=fe,this.data=U.data,this.schema=U.schema[fe],this.$data=L.$data&&U.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,u.schemaRefOrVal)(U,this.schema,fe,this.$data),this.schemaType=L.schemaType,this.parentSchema=U.schema,this.params={},this.it=U,this.def=L,this.$data)this.schemaCode=U.gen.const("vSchema",ie(this.$data,U));else if(this.schemaCode=this.schemaValue,!(0,a.validSchemaType)(this.schema,L.schemaType,L.allowUndefined))throw new Error(`${fe} value must be ${JSON.stringify(L.schemaType)}`);("code"in L?L.trackErrors:L.errors!==!1)&&(this.errsCount=U.gen.const("_errs",c.default.errors))}result(U,L,fe){this.failResult((0,l.not)(U),L,fe)}failResult(U,L,fe){this.gen.if(U),fe?fe():this.error(),L?(this.gen.else(),L(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(U,L){this.failResult((0,l.not)(U),void 0,L)}fail(U){if(U===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(U),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(U){if(!this.$data)return this.fail(U);const{schemaCode:L}=this;this.fail((0,l._)`${L} !== undefined && (${(0,l.or)(this.invalid$data(),U)})`)}error(U,L,fe){if(L){this.setParams(L),this._error(U,fe),this.setParams({});return}this._error(U,fe)}_error(U,L){(U?g.reportExtraError:g.reportError)(this,this.def.error,L)}$dataError(){(0,g.reportError)(this,this.def.$dataError||g.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,g.resetErrorsCount)(this.gen,this.errsCount)}ok(U){this.allErrors||this.gen.if(U)}setParams(U,L){L?Object.assign(this.params,U):this.params=U}block$data(U,L,fe=l.nil){this.gen.block(()=>{this.check$data(U,fe),L()})}check$data(U=l.nil,L=l.nil){if(!this.$data)return;const{gen:fe,schemaCode:J,schemaType:V,def:Ze}=this;fe.if((0,l.or)((0,l._)`${J} === undefined`,L)),U!==l.nil&&fe.assign(U,!0),(V.length||Ze.validateSchema)&&(fe.elseIf(this.invalid$data()),this.$dataError(),U!==l.nil&&fe.assign(U,!1)),fe.else()}invalid$data(){const{gen:U,schemaCode:L,schemaType:fe,def:J,it:V}=this;return(0,l.or)(Ze(),Je());function Ze(){if(fe.length){if(!(L instanceof l.Name))throw new Error("ajv implementation error");const Oe=Array.isArray(fe)?fe:[fe];return(0,l._)`${(0,o.checkDataTypes)(Oe,L,V.opts.strictNumbers,o.DataType.Wrong)}`}return l.nil}function Je(){if(J.validateSchema){const Oe=U.scopeValue("validate$data",{ref:J.validateSchema});return(0,l._)`!${Oe}(${L})`}return l.nil}}subschema(U,L){const fe=(0,i.getSubschema)(this.it,U);(0,i.extendSubschemaData)(fe,this.it,U),(0,i.extendSubschemaMode)(fe,U);const J={...this.it,...fe,items:void 0,props:void 0};return y(J,L),J}mergeEvaluated(U,L){const{it:fe,gen:J}=this;fe.opts.unevaluated&&(fe.props!==!0&&U.props!==void 0&&(fe.props=u.mergeEvaluated.props(J,U.props,fe.props,L)),fe.items!==!0&&U.items!==void 0&&(fe.items=u.mergeEvaluated.items(J,U.items,fe.items,L)))}mergeValidEvaluated(U,L){const{it:fe,gen:J}=this;if(fe.opts.unevaluated&&(fe.props!==!0||fe.items!==!0))return J.if(L,()=>this.mergeEvaluated(U,l.Name)),!0}}la.KeywordCxt=ne;function Se(P,U,L,fe){const J=new ne(P,L,U);"code"in L?L.code(J,fe):J.$data&&L.validate?(0,a.funcKeywordCode)(J,L):"macro"in L?(0,a.macroKeywordCode)(J,L):(L.compile||L.validate)&&(0,a.funcKeywordCode)(J,L)}const K=/^\/(?:[^~]|~0|~1)*$/,F=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function ie(P,{dataLevel:U,dataNames:L,dataPathArr:fe}){let J,V;if(P==="")return c.default.rootData;if(P[0]==="/"){if(!K.test(P))throw new Error(`Invalid JSON-pointer: ${P}`);J=P,V=c.default.rootData}else{const Xe=F.exec(P);if(!Xe)throw new Error(`Invalid JSON-pointer: ${P}`);const Ne=+Xe[1];if(J=Xe[2],J==="#"){if(Ne>=U)throw new Error(Oe("property/index",Ne));return fe[U-Ne]}if(Ne>U)throw new Error(Oe("data",Ne));if(V=L[U-Ne],!J)return V}let Ze=V;const Je=J.split("/");for(const Xe of Je)Xe&&(V=(0,l._)`${V}${(0,l.getProperty)((0,u.unescapeJsonPointer)(Xe))}`,Ze=(0,l._)`${Ze} && ${V}`);return Ze;function Oe(Xe,Ne){return`Cannot access ${Xe} ${Ne} levels up, current level is ${U}`}}return la.getData=ie,la}var Cl={},Iv;function yf(){if(Iv)return Cl;Iv=1,Object.defineProperty(Cl,"__esModule",{value:!0});class e extends Error{constructor(r){super("validation failed"),this.errors=r,this.ajv=this.validation=!0}}return Cl.default=e,Cl}var El={},qv;function vu(){if(qv)return El;qv=1,Object.defineProperty(El,"__esModule",{value:!0});const e=du();class t extends Error{constructor(o,s,a,i){super(i||`can't resolve reference ${a} from id ${s}`),this.missingRef=(0,e.resolveUrl)(o,s,a),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(o,this.missingRef))}}return El.default=t,El}var fo={},Dv;function jf(){if(Dv)return fo;Dv=1,Object.defineProperty(fo,"__esModule",{value:!0}),fo.resolveSchema=fo.getCompilingSchema=fo.resolveRef=fo.compileSchema=fo.SchemaEnv=void 0;const e=gn(),t=yf(),r=Ya(),o=du(),s=Dn(),a=fu();class i{constructor(h){var f;this.refs={},this.dynamicAnchors={};let y;typeof h.schema=="object"&&(y=h.schema),this.schema=h.schema,this.schemaId=h.schemaId,this.root=h.root||this,this.baseId=(f=h.baseId)!==null&&f!==void 0?f:(0,o.normalizeId)(y?.[h.schemaId||"$id"]),this.schemaPath=h.schemaPath,this.localRefs=h.localRefs,this.meta=h.meta,this.$async=y?.$async,this.refs={}}}fo.SchemaEnv=i;function l(v){const h=u.call(this,v);if(h)return h;const f=(0,o.getFullPath)(this.opts.uriResolver,v.root.baseId),{es5:y,lines:w}=this.opts.code,{ownProperties:b}=this.opts,k=new e.CodeGen(this.scope,{es5:y,lines:w,ownProperties:b});let $;v.$async&&($=k.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const M=k.scopeName("validate");v.validateName=M;const z={gen:k,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:k.scopeValue("schema",this.opts.code.source===!0?{ref:v.schema,code:(0,e.stringify)(v.schema)}:{ref:v.schema}),validateName:M,ValidationError:$,schema:v.schema,schemaEnv:v,rootId:f,baseId:v.baseId||f,schemaPath:e.nil,errSchemaPath:v.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let H;try{this._compilations.add(v),(0,a.validateFunctionCode)(z),k.optimize(this.opts.code.optimize);const G=k.toString();H=`${k.scopeRefs(r.default.scope)}return ${G}`,this.opts.code.process&&(H=this.opts.code.process(H,v));const te=new Function(`${r.default.self}`,`${r.default.scope}`,H)(this,this.scope.get());if(this.scope.value(M,{ref:te}),te.errors=null,te.schema=v.schema,te.schemaEnv=v,v.$async&&(te.$async=!0),this.opts.code.source===!0&&(te.source={validateName:M,validateCode:G,scopeValues:k._values}),this.opts.unevaluated){const{props:je,items:B}=z;te.evaluated={props:je instanceof e.Name?void 0:je,items:B instanceof e.Name?void 0:B,dynamicProps:je instanceof e.Name,dynamicItems:B instanceof e.Name},te.source&&(te.source.evaluated=(0,e.stringify)(te.evaluated))}return v.validate=te,v}catch(G){throw delete v.validate,delete v.validateName,H&&this.logger.error("Error compiling schema, function code:",H),G}finally{this._compilations.delete(v)}}fo.compileSchema=l;function c(v,h,f){var y;f=(0,o.resolveUrl)(this.opts.uriResolver,h,f);const w=v.refs[f];if(w)return w;let b=m.call(this,v,f);if(b===void 0){const k=(y=v.localRefs)===null||y===void 0?void 0:y[f],{schemaId:$}=this.opts;k&&(b=new i({schema:k,schemaId:$,root:v,baseId:h}))}if(b!==void 0)return v.refs[f]=d.call(this,b)}fo.resolveRef=c;function d(v){return(0,o.inlineRef)(v.schema,this.opts.inlineRefs)?v.schema:v.validate?v:l.call(this,v)}function u(v){for(const h of this._compilations)if(g(h,v))return h}fo.getCompilingSchema=u;function g(v,h){return v.schema===h.schema&&v.root===h.root&&v.baseId===h.baseId}function m(v,h){let f;for(;typeof(f=this.refs[h])=="string";)h=f;return f||this.schemas[h]||j.call(this,v,h)}function j(v,h){const f=this.opts.uriResolver.parse(h),y=(0,o._getFullPath)(this.opts.uriResolver,f);let w=(0,o.getFullPath)(this.opts.uriResolver,v.baseId,void 0);if(Object.keys(v.schema).length>0&&y===w)return x.call(this,f,v);const b=(0,o.normalizeId)(y),k=this.refs[b]||this.schemas[b];if(typeof k=="string"){const $=j.call(this,v,k);return typeof $?.schema!="object"?void 0:x.call(this,f,$)}if(typeof k?.schema=="object"){if(k.validate||l.call(this,k),b===(0,o.normalizeId)(h)){const{schema:$}=k,{schemaId:M}=this.opts,z=$[M];return z&&(w=(0,o.resolveUrl)(this.opts.uriResolver,w,z)),new i({schema:$,schemaId:M,root:v,baseId:w})}return x.call(this,f,k)}}fo.resolveSchema=j;const p=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function x(v,{baseId:h,schema:f,root:y}){var w;if(((w=v.fragment)===null||w===void 0?void 0:w[0])!=="/")return;for(const $ of v.fragment.slice(1).split("/")){if(typeof f=="boolean")return;const M=f[(0,s.unescapeFragment)($)];if(M===void 0)return;f=M;const z=typeof f=="object"&&f[this.opts.schemaId];!p.has($)&&z&&(h=(0,o.resolveUrl)(this.opts.uriResolver,h,z))}let b;if(typeof f!="boolean"&&f.$ref&&!(0,s.schemaHasRulesButRef)(f,this.RULES)){const $=(0,o.resolveUrl)(this.opts.uriResolver,h,f.$ref);b=j.call(this,y,$)}const{schemaId:k}=this.opts;if(b=b||new i({schema:f,schemaId:k,root:y,baseId:h}),b.schema!==b.root.schema)return b}return fo}const Oj="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",$j="Meta-schema for $data reference (JSON AnySchema extension proposal)",Pj="object",zj=["$data"],Rj={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},Nj=!1,Mj={$id:Oj,description:$j,type:Pj,required:zj,properties:Rj,additionalProperties:Nj};var Ol={},$i={exports:{}},Bu,Lv;function Tj(){return Lv||(Lv=1,Bu={HEX:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15}}),Bu}var Wu,Uv;function Aj(){if(Uv)return Wu;Uv=1;const{HEX:e}=Tj();function t(p){if(i(p,".")<3)return{host:p,isIPV4:!1};const x=p.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[v]=x;return v?{host:a(v,"."),isIPV4:!0}:{host:p,isIPV4:!1}}function r(p,x=!1){let v="",h=!0;for(const f of p){if(e[f]===void 0)return;f!=="0"&&h===!0&&(h=!1),h||(v+=f)}return x&&v.length===0&&(v="0"),v}function o(p){let x=0;const v={error:!1,address:"",zone:""},h=[],f=[];let y=!1,w=!1,b=!1;function k(){if(f.length){if(y===!1){const $=r(f);if($!==void 0)h.push($);else return v.error=!0,!1}f.length=0}return!0}for(let $=0;$<p.length;$++){const M=p[$];if(!(M==="["||M==="]"))if(M===":"){if(w===!0&&(b=!0),!k())break;if(x++,h.push(":"),x>7){v.error=!0;break}$-1>=0&&p[$-1]===":"&&(w=!0);continue}else if(M==="%"){if(!k())break;y=!0}else{f.push(M);continue}}return f.length&&(y?v.zone=f.join(""):b?h.push(f.join("")):h.push(r(f))),v.address=h.join(""),v}function s(p,x={}){if(i(p,":")<2)return{host:p,isIPV6:!1};const v=o(p);if(v.error)return{host:p,isIPV6:!1};{let h=v.address,f=v.address;return v.zone&&(h+="%"+v.zone,f+="%25"+v.zone),{host:h,escapedHost:f,isIPV6:!0}}}function a(p,x){let v="",h=!0;const f=p.length;for(let y=0;y<f;y++){const w=p[y];w==="0"&&h?(y+1<=f&&p[y+1]===x||y+1===f)&&(v+=w,h=!1):(w===x?h=!0:h=!1,v+=w)}return v}function i(p,x){let v=0;for(let h=0;h<p.length;h++)p[h]===x&&v++;return v}const l=/^\.\.?\//u,c=/^\/\.(?:\/|$)/u,d=/^\/\.\.(?:\/|$)/u,u=/^\/?(?:.|\n)*?(?=\/|$)/u;function g(p){const x=[];for(;p.length;)if(p.match(l))p=p.replace(l,"");else if(p.match(c))p=p.replace(c,"/");else if(p.match(d))p=p.replace(d,"/"),x.pop();else if(p==="."||p==="..")p="";else{const v=p.match(u);if(v){const h=v[0];p=p.slice(h.length),x.push(h)}else throw new Error("Unexpected dot segment condition")}return x.join("")}function m(p,x){const v=x!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=v(p.scheme)),p.userinfo!==void 0&&(p.userinfo=v(p.userinfo)),p.host!==void 0&&(p.host=v(p.host)),p.path!==void 0&&(p.path=v(p.path)),p.query!==void 0&&(p.query=v(p.query)),p.fragment!==void 0&&(p.fragment=v(p.fragment)),p}function j(p,x){const v=[];if(p.userinfo!==void 0&&(v.push(p.userinfo),v.push("@")),p.host!==void 0){let h=unescape(p.host);const f=t(h);if(f.isIPV4)h=f.host;else{const y=s(f.host,{});y.isIPV6===!0?h=`[${y.escapedHost}]`:h=p.host}v.push(h)}return(typeof p.port=="number"||typeof p.port=="string")&&(v.push(":"),v.push(String(p.port))),v.length?v.join(""):void 0}return Wu={recomposeAuthority:j,normalizeComponentEncoding:m,removeDotSegments:g,normalizeIPv4:t,normalizeIPv6:s,stringArrayToHexStripped:r},Wu}var Hu,Fv;function Ij(){if(Fv)return Hu;Fv=1;const e=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function r(f){return typeof f.secure=="boolean"?f.secure:String(f.scheme).toLowerCase()==="wss"}function o(f){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f}function s(f){const y=String(f.scheme).toLowerCase()==="https";return(f.port===(y?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}function a(f){return f.secure=r(f),f.resourceName=(f.path||"/")+(f.query?"?"+f.query:""),f.path=void 0,f.query=void 0,f}function i(f){if((f.port===(r(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){const[y,w]=f.resourceName.split("?");f.path=y&&y!=="/"?y:void 0,f.query=w,f.resourceName=void 0}return f.fragment=void 0,f}function l(f,y){if(!f.path)return f.error="URN can not be parsed",f;const w=f.path.match(t);if(w){const b=y.scheme||f.scheme||"urn";f.nid=w[1].toLowerCase(),f.nss=w[2];const k=`${b}:${y.nid||f.nid}`,$=h[k];f.path=void 0,$&&(f=$.parse(f,y))}else f.error=f.error||"URN can not be parsed.";return f}function c(f,y){const w=y.scheme||f.scheme||"urn",b=f.nid.toLowerCase(),k=`${w}:${y.nid||b}`,$=h[k];$&&(f=$.serialize(f,y));const M=f,z=f.nss;return M.path=`${b||y.nid}:${z}`,y.skipEscape=!0,M}function d(f,y){const w=f;return w.uuid=w.nss,w.nss=void 0,!y.tolerant&&(!w.uuid||!e.test(w.uuid))&&(w.error=w.error||"UUID is not valid."),w}function u(f){const y=f;return y.nss=(f.uuid||"").toLowerCase(),y}const g={scheme:"http",domainHost:!0,parse:o,serialize:s},m={scheme:"https",domainHost:g.domainHost,parse:o,serialize:s},j={scheme:"ws",domainHost:!0,parse:a,serialize:i},p={scheme:"wss",domainHost:j.domainHost,parse:j.parse,serialize:j.serialize},h={http:g,https:m,ws:j,wss:p,urn:{scheme:"urn",parse:l,serialize:c,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:d,serialize:u,skipNormalize:!0}};return Hu=h,Hu}var Vv;function qj(){if(Vv)return $i.exports;Vv=1;const{normalizeIPv6:e,normalizeIPv4:t,removeDotSegments:r,recomposeAuthority:o,normalizeComponentEncoding:s}=Aj(),a=Ij();function i(v,h){return typeof v=="string"?v=u(p(v,h),h):typeof v=="object"&&(v=p(u(v,h),h)),v}function l(v,h,f){const y=Object.assign({scheme:"null"},f),w=c(p(v,y),p(h,y),y,!0);return u(w,{...y,skipEscape:!0})}function c(v,h,f,y){const w={};return y||(v=p(u(v,f),f),h=p(u(h,f),f)),f=f||{},!f.tolerant&&h.scheme?(w.scheme=h.scheme,w.userinfo=h.userinfo,w.host=h.host,w.port=h.port,w.path=r(h.path||""),w.query=h.query):(h.userinfo!==void 0||h.host!==void 0||h.port!==void 0?(w.userinfo=h.userinfo,w.host=h.host,w.port=h.port,w.path=r(h.path||""),w.query=h.query):(h.path?(h.path.charAt(0)==="/"?w.path=r(h.path):((v.userinfo!==void 0||v.host!==void 0||v.port!==void 0)&&!v.path?w.path="/"+h.path:v.path?w.path=v.path.slice(0,v.path.lastIndexOf("/")+1)+h.path:w.path=h.path,w.path=r(w.path)),w.query=h.query):(w.path=v.path,h.query!==void 0?w.query=h.query:w.query=v.query),w.userinfo=v.userinfo,w.host=v.host,w.port=v.port),w.scheme=v.scheme),w.fragment=h.fragment,w}function d(v,h,f){return typeof v=="string"?(v=unescape(v),v=u(s(p(v,f),!0),{...f,skipEscape:!0})):typeof v=="object"&&(v=u(s(v,!0),{...f,skipEscape:!0})),typeof h=="string"?(h=unescape(h),h=u(s(p(h,f),!0),{...f,skipEscape:!0})):typeof h=="object"&&(h=u(s(h,!0),{...f,skipEscape:!0})),v.toLowerCase()===h.toLowerCase()}function u(v,h){const f={host:v.host,scheme:v.scheme,userinfo:v.userinfo,port:v.port,path:v.path,query:v.query,nid:v.nid,nss:v.nss,uuid:v.uuid,fragment:v.fragment,reference:v.reference,resourceName:v.resourceName,secure:v.secure,error:""},y=Object.assign({},h),w=[],b=a[(y.scheme||f.scheme||"").toLowerCase()];b&&b.serialize&&b.serialize(f,y),f.path!==void 0&&(y.skipEscape?f.path=unescape(f.path):(f.path=escape(f.path),f.scheme!==void 0&&(f.path=f.path.split("%3A").join(":")))),y.reference!=="suffix"&&f.scheme&&(w.push(f.scheme),w.push(":"));const k=o(f,y);if(k!==void 0&&(y.reference!=="suffix"&&w.push("//"),w.push(k),f.path&&f.path.charAt(0)!=="/"&&w.push("/")),f.path!==void 0){let $=f.path;!y.absolutePath&&(!b||!b.absolutePath)&&($=r($)),k===void 0&&($=$.replace(/^\/\//u,"/%2F")),w.push($)}return f.query!==void 0&&(w.push("?"),w.push(f.query)),f.fragment!==void 0&&(w.push("#"),w.push(f.fragment)),w.join("")}const g=Array.from({length:127},(v,h)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(h)));function m(v){let h=0;for(let f=0,y=v.length;f<y;++f)if(h=v.charCodeAt(f),h>126||g[h])return!0;return!1}const j=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function p(v,h){const f=Object.assign({},h),y={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},w=v.indexOf("%")!==-1;let b=!1;f.reference==="suffix"&&(v=(f.scheme?f.scheme+":":"")+"//"+v);const k=v.match(j);if(k){if(y.scheme=k[1],y.userinfo=k[3],y.host=k[4],y.port=parseInt(k[5],10),y.path=k[6]||"",y.query=k[7],y.fragment=k[8],isNaN(y.port)&&(y.port=k[5]),y.host){const M=t(y.host);if(M.isIPV4===!1){const z=e(M.host,{isIPV4:!1});y.host=z.host.toLowerCase(),b=z.isIPV6}else y.host=M.host,b=!0}y.scheme===void 0&&y.userinfo===void 0&&y.host===void 0&&y.port===void 0&&!y.path&&y.query===void 0?y.reference="same-document":y.scheme===void 0?y.reference="relative":y.fragment===void 0?y.reference="absolute":y.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==y.reference&&(y.error=y.error||"URI is not a "+f.reference+" reference.");const $=a[(f.scheme||y.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!$||!$.unicodeSupport)&&y.host&&(f.domainHost||$&&$.domainHost)&&b===!1&&m(y.host))try{y.host=URL.domainToASCII(y.host.toLowerCase())}catch(M){y.error=y.error||"Host's domain name can not be converted to ASCII: "+M}(!$||$&&!$.skipNormalize)&&(w&&y.scheme!==void 0&&(y.scheme=unescape(y.scheme)),w&&y.userinfo!==void 0&&(y.userinfo=unescape(y.userinfo)),w&&y.host!==void 0&&(y.host=unescape(y.host)),y.path!==void 0&&y.path.length&&(y.path=escape(unescape(y.path))),y.fragment!==void 0&&y.fragment.length&&(y.fragment=encodeURI(decodeURIComponent(y.fragment)))),$&&$.parse&&$.parse(y,f)}else y.error=y.error||"URI can not be parsed.";return y}const x={SCHEMES:a,normalize:i,resolve:l,resolveComponents:c,equal:d,serialize:u,parse:p};return $i.exports=x,$i.exports.default=x,$i.exports.fastUri=x,$i.exports}var Bv;function Dj(){if(Bv)return Ol;Bv=1,Object.defineProperty(Ol,"__esModule",{value:!0});const e=qj();return e.code='require("ajv/dist/runtime/uri").default',Ol.default=e,Ol}var Wv;function Lj(){return Wv||(Wv=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=fu();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var r=gn();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return r.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return r.CodeGen}});const o=yf(),s=vu(),a=zm(),i=jf(),l=gn(),c=du(),d=Ic(),u=Dn(),g=Mj,m=Dj(),j=(Y,I)=>new RegExp(Y,I);j.code="new RegExp";const p=["removeAdditional","useDefaults","coerceTypes"],x=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),v={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},h={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},f=200;function y(Y){var I,se,T,E,R,ne,Se,K,F,ie,P,U,L,fe,J,V,Ze,Je,Oe,Xe,Ne,Le,lt,He,_t;const O=Y.strict,N=(I=Y.code)===null||I===void 0?void 0:I.optimize,D=N===!0||N===void 0?1:N||0,re=(T=(se=Y.code)===null||se===void 0?void 0:se.regExp)!==null&&T!==void 0?T:j,he=(E=Y.uriResolver)!==null&&E!==void 0?E:m.default;return{strictSchema:(ne=(R=Y.strictSchema)!==null&&R!==void 0?R:O)!==null&&ne!==void 0?ne:!0,strictNumbers:(K=(Se=Y.strictNumbers)!==null&&Se!==void 0?Se:O)!==null&&K!==void 0?K:!0,strictTypes:(ie=(F=Y.strictTypes)!==null&&F!==void 0?F:O)!==null&&ie!==void 0?ie:"log",strictTuples:(U=(P=Y.strictTuples)!==null&&P!==void 0?P:O)!==null&&U!==void 0?U:"log",strictRequired:(fe=(L=Y.strictRequired)!==null&&L!==void 0?L:O)!==null&&fe!==void 0?fe:!1,code:Y.code?{...Y.code,optimize:D,regExp:re}:{optimize:D,regExp:re},loopRequired:(J=Y.loopRequired)!==null&&J!==void 0?J:f,loopEnum:(V=Y.loopEnum)!==null&&V!==void 0?V:f,meta:(Ze=Y.meta)!==null&&Ze!==void 0?Ze:!0,messages:(Je=Y.messages)!==null&&Je!==void 0?Je:!0,inlineRefs:(Oe=Y.inlineRefs)!==null&&Oe!==void 0?Oe:!0,schemaId:(Xe=Y.schemaId)!==null&&Xe!==void 0?Xe:"$id",addUsedSchema:(Ne=Y.addUsedSchema)!==null&&Ne!==void 0?Ne:!0,validateSchema:(Le=Y.validateSchema)!==null&&Le!==void 0?Le:!0,validateFormats:(lt=Y.validateFormats)!==null&&lt!==void 0?lt:!0,unicodeRegExp:(He=Y.unicodeRegExp)!==null&&He!==void 0?He:!0,int32range:(_t=Y.int32range)!==null&&_t!==void 0?_t:!0,uriResolver:he}}class w{constructor(I={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,I=this.opts={...I,...y(I)};const{es5:se,lines:T}=this.opts.code;this.scope=new l.ValueScope({scope:{},prefixes:x,es5:se,lines:T}),this.logger=ee(I.logger);const E=I.validateFormats;I.validateFormats=!1,this.RULES=(0,a.getRules)(),b.call(this,v,I,"NOT SUPPORTED"),b.call(this,h,I,"DEPRECATED","warn"),this._metaOpts=H.call(this),I.formats&&M.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),I.keywords&&z.call(this,I.keywords),typeof I.meta=="object"&&this.addMetaSchema(I.meta),$.call(this),I.validateFormats=E}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:I,meta:se,schemaId:T}=this.opts;let E=g;T==="id"&&(E={...g},E.id=E.$id,delete E.$id),se&&I&&this.addMetaSchema(E,E[T],!1)}defaultMeta(){const{meta:I,schemaId:se}=this.opts;return this.opts.defaultMeta=typeof I=="object"?I[se]||I:void 0}validate(I,se){let T;if(typeof I=="string"){if(T=this.getSchema(I),!T)throw new Error(`no schema with key or ref "${I}"`)}else T=this.compile(I);const E=T(se);return"$async"in T||(this.errors=T.errors),E}compile(I,se){const T=this._addSchema(I,se);return T.validate||this._compileSchemaEnv(T)}compileAsync(I,se){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:T}=this.opts;return E.call(this,I,se);async function E(ie,P){await R.call(this,ie.$schema);const U=this._addSchema(ie,P);return U.validate||ne.call(this,U)}async function R(ie){ie&&!this.getSchema(ie)&&await E.call(this,{$ref:ie},!0)}async function ne(ie){try{return this._compileSchemaEnv(ie)}catch(P){if(!(P instanceof s.default))throw P;return Se.call(this,P),await K.call(this,P.missingSchema),ne.call(this,ie)}}function Se({missingSchema:ie,missingRef:P}){if(this.refs[ie])throw new Error(`AnySchema ${ie} is loaded but ${P} cannot be resolved`)}async function K(ie){const P=await F.call(this,ie);this.refs[ie]||await R.call(this,P.$schema),this.refs[ie]||this.addSchema(P,ie,se)}async function F(ie){const P=this._loading[ie];if(P)return P;try{return await(this._loading[ie]=T(ie))}finally{delete this._loading[ie]}}}addSchema(I,se,T,E=this.opts.validateSchema){if(Array.isArray(I)){for(const ne of I)this.addSchema(ne,void 0,T,E);return this}let R;if(typeof I=="object"){const{schemaId:ne}=this.opts;if(R=I[ne],R!==void 0&&typeof R!="string")throw new Error(`schema ${ne} must be string`)}return se=(0,c.normalizeId)(se||R),this._checkUnique(se),this.schemas[se]=this._addSchema(I,T,se,E,!0),this}addMetaSchema(I,se,T=this.opts.validateSchema){return this.addSchema(I,se,!0,T),this}validateSchema(I,se){if(typeof I=="boolean")return!0;let T;if(T=I.$schema,T!==void 0&&typeof T!="string")throw new Error("$schema must be a string");if(T=T||this.opts.defaultMeta||this.defaultMeta(),!T)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const E=this.validate(T,I);if(!E&&se){const R="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(R);else throw new Error(R)}return E}getSchema(I){let se;for(;typeof(se=k.call(this,I))=="string";)I=se;if(se===void 0){const{schemaId:T}=this.opts,E=new i.SchemaEnv({schema:{},schemaId:T});if(se=i.resolveSchema.call(this,E,I),!se)return;this.refs[I]=se}return se.validate||this._compileSchemaEnv(se)}removeSchema(I){if(I instanceof RegExp)return this._removeAllSchemas(this.schemas,I),this._removeAllSchemas(this.refs,I),this;switch(typeof I){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const se=k.call(this,I);return typeof se=="object"&&this._cache.delete(se.schema),delete this.schemas[I],delete this.refs[I],this}case"object":{const se=I;this._cache.delete(se);let T=I[this.opts.schemaId];return T&&(T=(0,c.normalizeId)(T),delete this.schemas[T],delete this.refs[T]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(I){for(const se of I)this.addKeyword(se);return this}addKeyword(I,se){let T;if(typeof I=="string")T=I,typeof se=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),se.keyword=T);else if(typeof I=="object"&&se===void 0){if(se=I,T=se.keyword,Array.isArray(T)&&!T.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(je.call(this,T,se),!se)return(0,u.eachItem)(T,R=>B.call(this,R)),this;$e.call(this,se);const E={...se,type:(0,d.getJSONTypes)(se.type),schemaType:(0,d.getJSONTypes)(se.schemaType)};return(0,u.eachItem)(T,E.type.length===0?R=>B.call(this,R,E):R=>E.type.forEach(ne=>B.call(this,R,E,ne))),this}getKeyword(I){const se=this.RULES.all[I];return typeof se=="object"?se.definition:!!se}removeKeyword(I){const{RULES:se}=this;delete se.keywords[I],delete se.all[I];for(const T of se.rules){const E=T.rules.findIndex(R=>R.keyword===I);E>=0&&T.rules.splice(E,1)}return this}addFormat(I,se){return typeof se=="string"&&(se=new RegExp(se)),this.formats[I]=se,this}errorsText(I=this.errors,{separator:se=", ",dataVar:T="data"}={}){return!I||I.length===0?"No errors":I.map(E=>`${T}${E.instancePath} ${E.message}`).reduce((E,R)=>E+se+R)}$dataMetaSchema(I,se){const T=this.RULES.all;I=JSON.parse(JSON.stringify(I));for(const E of se){const R=E.split("/").slice(1);let ne=I;for(const Se of R)ne=ne[Se];for(const Se in T){const K=T[Se];if(typeof K!="object")continue;const{$data:F}=K.definition,ie=ne[Se];F&&ie&&(ne[Se]=me(ie))}}return I}_removeAllSchemas(I,se){for(const T in I){const E=I[T];(!se||se.test(T))&&(typeof E=="string"?delete I[T]:E&&!E.meta&&(this._cache.delete(E.schema),delete I[T]))}}_addSchema(I,se,T,E=this.opts.validateSchema,R=this.opts.addUsedSchema){let ne;const{schemaId:Se}=this.opts;if(typeof I=="object")ne=I[Se];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof I!="boolean")throw new Error("schema must be object or boolean")}let K=this._cache.get(I);if(K!==void 0)return K;T=(0,c.normalizeId)(ne||T);const F=c.getSchemaRefs.call(this,I,T);return K=new i.SchemaEnv({schema:I,schemaId:Se,meta:se,baseId:T,localRefs:F}),this._cache.set(K.schema,K),R&&!T.startsWith("#")&&(T&&this._checkUnique(T),this.refs[T]=K),E&&this.validateSchema(I,!0),K}_checkUnique(I){if(this.schemas[I]||this.refs[I])throw new Error(`schema with key or id "${I}" already exists`)}_compileSchemaEnv(I){if(I.meta?this._compileMetaSchema(I):i.compileSchema.call(this,I),!I.validate)throw new Error("ajv implementation error");return I.validate}_compileMetaSchema(I){const se=this.opts;this.opts=this._metaOpts;try{i.compileSchema.call(this,I)}finally{this.opts=se}}}w.ValidationError=o.default,w.MissingRefError=s.default,e.default=w;function b(Y,I,se,T="error"){for(const E in Y){const R=E;R in I&&this.logger[T](`${se}: option ${E}. ${Y[R]}`)}}function k(Y){return Y=(0,c.normalizeId)(Y),this.schemas[Y]||this.refs[Y]}function $(){const Y=this.opts.schemas;if(Y)if(Array.isArray(Y))this.addSchema(Y);else for(const I in Y)this.addSchema(Y[I],I)}function M(){for(const Y in this.opts.formats){const I=this.opts.formats[Y];I&&this.addFormat(Y,I)}}function z(Y){if(Array.isArray(Y)){this.addVocabulary(Y);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const I in Y){const se=Y[I];se.keyword||(se.keyword=I),this.addKeyword(se)}}function H(){const Y={...this.opts};for(const I of p)delete Y[I];return Y}const G={log(){},warn(){},error(){}};function ee(Y){if(Y===!1)return G;if(Y===void 0)return console;if(Y.log&&Y.warn&&Y.error)return Y;throw new Error("logger must implement log, warn and error methods")}const te=/^[a-z_$][a-z0-9_$:-]*$/i;function je(Y,I){const{RULES:se}=this;if((0,u.eachItem)(Y,T=>{if(se.keywords[T])throw new Error(`Keyword ${T} is already defined`);if(!te.test(T))throw new Error(`Keyword ${T} has invalid name`)}),!!I&&I.$data&&!("code"in I||"validate"in I))throw new Error('$data keyword must have "code" or "validate" function')}function B(Y,I,se){var T;const E=I?.post;if(se&&E)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:R}=this;let ne=E?R.post:R.rules.find(({type:K})=>K===se);if(ne||(ne={type:se,rules:[]},R.rules.push(ne)),R.keywords[Y]=!0,!I)return;const Se={keyword:Y,definition:{...I,type:(0,d.getJSONTypes)(I.type),schemaType:(0,d.getJSONTypes)(I.schemaType)}};I.before?pe.call(this,ne,Se,I.before):ne.rules.push(Se),R.all[Y]=Se,(T=I.implements)===null||T===void 0||T.forEach(K=>this.addKeyword(K))}function pe(Y,I,se){const T=Y.rules.findIndex(E=>E.keyword===se);T>=0?Y.rules.splice(T,0,I):(Y.rules.push(I),this.logger.warn(`rule ${se} is not defined`))}function $e(Y){let{metaSchema:I}=Y;I!==void 0&&(Y.$data&&this.opts.$data&&(I=me(I)),Y.validateSchema=this.compile(I,!0))}const ke={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function me(Y){return{anyOf:[Y,ke]}}}(qu)),qu}var $l={},Pl={},zl={},Hv;function Uj(){if(Hv)return zl;Hv=1,Object.defineProperty(zl,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return zl.default=e,zl}var Oa={},Kv;function Fj(){if(Kv)return Oa;Kv=1,Object.defineProperty(Oa,"__esModule",{value:!0}),Oa.callRef=Oa.getValidate=void 0;const e=vu(),t=Bo(),r=gn(),o=Ya(),s=jf(),a=Dn(),i={keyword:"$ref",schemaType:"string",code(d){const{gen:u,schema:g,it:m}=d,{baseId:j,schemaEnv:p,validateName:x,opts:v,self:h}=m,{root:f}=p;if((g==="#"||g==="#/")&&j===f.baseId)return w();const y=s.resolveRef.call(h,f,j,g);if(y===void 0)throw new e.default(m.opts.uriResolver,j,g);if(y instanceof s.SchemaEnv)return b(y);return k(y);function w(){if(p===f)return c(d,x,p,p.$async);const $=u.scopeValue("root",{ref:f});return c(d,(0,r._)`${$}.validate`,f,f.$async)}function b($){const M=l(d,$);c(d,M,$,$.$async)}function k($){const M=u.scopeValue("schema",v.code.source===!0?{ref:$,code:(0,r.stringify)($)}:{ref:$}),z=u.name("valid"),H=d.subschema({schema:$,dataTypes:[],schemaPath:r.nil,topSchemaRef:M,errSchemaPath:g},z);d.mergeEvaluated(H),d.ok(z)}}};function l(d,u){const{gen:g}=d;return u.validate?g.scopeValue("validate",{ref:u.validate}):(0,r._)`${g.scopeValue("wrapper",{ref:u})}.validate`}Oa.getValidate=l;function c(d,u,g,m){const{gen:j,it:p}=d,{allErrors:x,schemaEnv:v,opts:h}=p,f=h.passContext?o.default.this:r.nil;m?y():w();function y(){if(!v.$async)throw new Error("async schema referenced by sync schema");const $=j.let("valid");j.try(()=>{j.code((0,r._)`await ${(0,t.callValidateCode)(d,u,f)}`),k(u),x||j.assign($,!0)},M=>{j.if((0,r._)`!(${M} instanceof ${p.ValidationError})`,()=>j.throw(M)),b(M),x||j.assign($,!1)}),d.ok($)}function w(){d.result((0,t.callValidateCode)(d,u,f),()=>k(u),()=>b(u))}function b($){const M=(0,r._)`${$}.errors`;j.assign(o.default.vErrors,(0,r._)`${o.default.vErrors} === null ? ${M} : ${o.default.vErrors}.concat(${M})`),j.assign(o.default.errors,(0,r._)`${o.default.vErrors}.length`)}function k($){var M;if(!p.opts.unevaluated)return;const z=(M=g?.validate)===null||M===void 0?void 0:M.evaluated;if(p.props!==!0)if(z&&!z.dynamicProps)z.props!==void 0&&(p.props=a.mergeEvaluated.props(j,z.props,p.props));else{const H=j.var("props",(0,r._)`${$}.evaluated.props`);p.props=a.mergeEvaluated.props(j,H,p.props,r.Name)}if(p.items!==!0)if(z&&!z.dynamicItems)z.items!==void 0&&(p.items=a.mergeEvaluated.items(j,z.items,p.items));else{const H=j.var("items",(0,r._)`${$}.evaluated.items`);p.items=a.mergeEvaluated.items(j,H,p.items,r.Name)}}}return Oa.callRef=c,Oa.default=i,Oa}var Qv;function Vj(){if(Qv)return Pl;Qv=1,Object.defineProperty(Pl,"__esModule",{value:!0});const e=Uj(),t=Fj(),r=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return Pl.default=r,Pl}var Rl={},Nl={},Jv;function Bj(){if(Jv)return Nl;Jv=1,Object.defineProperty(Nl,"__esModule",{value:!0});const e=gn(),t=e.operators,r={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},o={message:({keyword:a,schemaCode:i})=>(0,e.str)`must be ${r[a].okStr} ${i}`,params:({keyword:a,schemaCode:i})=>(0,e._)`{comparison: ${r[a].okStr}, limit: ${i}}`},s={keyword:Object.keys(r),type:"number",schemaType:"number",$data:!0,error:o,code(a){const{keyword:i,data:l,schemaCode:c}=a;a.fail$data((0,e._)`${l} ${r[i].fail} ${c} || isNaN(${l})`)}};return Nl.default=s,Nl}var Ml={},Gv;function Wj(){if(Gv)return Ml;Gv=1,Object.defineProperty(Ml,"__esModule",{value:!0});const e=gn(),r={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:o})=>(0,e.str)`must be multiple of ${o}`,params:({schemaCode:o})=>(0,e._)`{multipleOf: ${o}}`},code(o){const{gen:s,data:a,schemaCode:i,it:l}=o,c=l.opts.multipleOfPrecision,d=s.let("res"),u=c?(0,e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}`:(0,e._)`${d} !== parseInt(${d})`;o.fail$data((0,e._)`(${i} === 0 || (${d} = ${a}/${i}, ${u}))`)}};return Ml.default=r,Ml}var Tl={},Al={},Yv;function Hj(){if(Yv)return Al;Yv=1,Object.defineProperty(Al,"__esModule",{value:!0});function e(t){const r=t.length;let o=0,s=0,a;for(;s<r;)o++,a=t.charCodeAt(s++),a>=55296&&a<=56319&&s<r&&(a=t.charCodeAt(s),(a&64512)===56320&&s++);return o}return Al.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',Al}var Xv;function Kj(){if(Xv)return Tl;Xv=1,Object.defineProperty(Tl,"__esModule",{value:!0});const e=gn(),t=Dn(),r=Hj(),s={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:i}){const l=a==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${l} than ${i} characters`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:i,data:l,schemaCode:c,it:d}=a,u=i==="maxLength"?e.operators.GT:e.operators.LT,g=d.opts.unicode===!1?(0,e._)`${l}.length`:(0,e._)`${(0,t.useFunc)(a.gen,r.default)}(${l})`;a.fail$data((0,e._)`${g} ${u} ${c}`)}};return Tl.default=s,Tl}var Il={},Zv;function Qj(){if(Zv)return Il;Zv=1,Object.defineProperty(Il,"__esModule",{value:!0});const e=Bo(),t=gn(),o={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,t.str)`must match pattern "${s}"`,params:({schemaCode:s})=>(0,t._)`{pattern: ${s}}`},code(s){const{data:a,$data:i,schema:l,schemaCode:c,it:d}=s,u=d.opts.unicodeRegExp?"u":"",g=i?(0,t._)`(new RegExp(${c}, ${u}))`:(0,e.usePattern)(s,l);s.fail$data((0,t._)`!${g}.test(${a})`)}};return Il.default=o,Il}var ql={},ep;function Jj(){if(ep)return ql;ep=1,Object.defineProperty(ql,"__esModule",{value:!0});const e=gn(),r={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:o,schemaCode:s}){const a=o==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${s} properties`},params:({schemaCode:o})=>(0,e._)`{limit: ${o}}`},code(o){const{keyword:s,data:a,schemaCode:i}=o,l=s==="maxProperties"?e.operators.GT:e.operators.LT;o.fail$data((0,e._)`Object.keys(${a}).length ${l} ${i}`)}};return ql.default=r,ql}var Dl={},tp;function Gj(){if(tp)return Dl;tp=1,Object.defineProperty(Dl,"__esModule",{value:!0});const e=Bo(),t=gn(),r=Dn(),s={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:a}})=>(0,t.str)`must have required property '${a}'`,params:({params:{missingProperty:a}})=>(0,t._)`{missingProperty: ${a}}`},code(a){const{gen:i,schema:l,schemaCode:c,data:d,$data:u,it:g}=a,{opts:m}=g;if(!u&&l.length===0)return;const j=l.length>=m.loopRequired;if(g.allErrors?p():x(),m.strictRequired){const f=a.parentSchema.properties,{definedProperties:y}=a.it;for(const w of l)if(f?.[w]===void 0&&!y.has(w)){const b=g.schemaEnv.baseId+g.errSchemaPath,k=`required property "${w}" is not defined at "${b}" (strictRequired)`;(0,r.checkStrictMode)(g,k,g.opts.strictRequired)}}function p(){if(j||u)a.block$data(t.nil,v);else for(const f of l)(0,e.checkReportMissingProp)(a,f)}function x(){const f=i.let("missing");if(j||u){const y=i.let("valid",!0);a.block$data(y,()=>h(f,y)),a.ok(y)}else i.if((0,e.checkMissingProp)(a,l,f)),(0,e.reportMissingProp)(a,f),i.else()}function v(){i.forOf("prop",c,f=>{a.setParams({missingProperty:f}),i.if((0,e.noPropertyInData)(i,d,f,m.ownProperties),()=>a.error())})}function h(f,y){a.setParams({missingProperty:f}),i.forOf(f,c,()=>{i.assign(y,(0,e.propertyInData)(i,d,f,m.ownProperties)),i.if((0,t.not)(y),()=>{a.error(),i.break()})},t.nil)}}};return Dl.default=s,Dl}var Ll={},np;function Yj(){if(np)return Ll;np=1,Object.defineProperty(Ll,"__esModule",{value:!0});const e=gn(),r={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:o,schemaCode:s}){const a=o==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${s} items`},params:({schemaCode:o})=>(0,e._)`{limit: ${o}}`},code(o){const{keyword:s,data:a,schemaCode:i}=o,l=s==="maxItems"?e.operators.GT:e.operators.LT;o.fail$data((0,e._)`${a}.length ${l} ${i}`)}};return Ll.default=r,Ll}var Ul={},Fl={},rp;function xf(){if(rp)return Fl;rp=1,Object.defineProperty(Fl,"__esModule",{value:!0});const e=rm();return e.code='require("ajv/dist/runtime/equal").default',Fl.default=e,Fl}var op;function Xj(){if(op)return Ul;op=1,Object.defineProperty(Ul,"__esModule",{value:!0});const e=Ic(),t=gn(),r=Dn(),o=xf(),a={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i,j:l}})=>(0,t.str)`must NOT have duplicate items (items ## ${l} and ${i} are identical)`,params:({params:{i,j:l}})=>(0,t._)`{i: ${i}, j: ${l}}`},code(i){const{gen:l,data:c,$data:d,schema:u,parentSchema:g,schemaCode:m,it:j}=i;if(!d&&!u)return;const p=l.let("valid"),x=g.items?(0,e.getSchemaTypes)(g.items):[];i.block$data(p,v,(0,t._)`${m} === false`),i.ok(p);function v(){const w=l.let("i",(0,t._)`${c}.length`),b=l.let("j");i.setParams({i:w,j:b}),l.assign(p,!0),l.if((0,t._)`${w} > 1`,()=>(h()?f:y)(w,b))}function h(){return x.length>0&&!x.some(w=>w==="object"||w==="array")}function f(w,b){const k=l.name("item"),$=(0,e.checkDataTypes)(x,k,j.opts.strictNumbers,e.DataType.Wrong),M=l.const("indices",(0,t._)`{}`);l.for((0,t._)`;${w}--;`,()=>{l.let(k,(0,t._)`${c}[${w}]`),l.if($,(0,t._)`continue`),x.length>1&&l.if((0,t._)`typeof ${k} == "string"`,(0,t._)`${k} += "_"`),l.if((0,t._)`typeof ${M}[${k}] == "number"`,()=>{l.assign(b,(0,t._)`${M}[${k}]`),i.error(),l.assign(p,!1).break()}).code((0,t._)`${M}[${k}] = ${w}`)})}function y(w,b){const k=(0,r.useFunc)(l,o.default),$=l.name("outer");l.label($).for((0,t._)`;${w}--;`,()=>l.for((0,t._)`${b} = ${w}; ${b}--;`,()=>l.if((0,t._)`${k}(${c}[${w}], ${c}[${b}])`,()=>{i.error(),l.assign(p,!1).break($)})))}}};return Ul.default=a,Ul}var Vl={},ap;function Zj(){if(ap)return Vl;ap=1,Object.defineProperty(Vl,"__esModule",{value:!0});const e=gn(),t=Dn(),r=xf(),s={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:a})=>(0,e._)`{allowedValue: ${a}}`},code(a){const{gen:i,data:l,$data:c,schemaCode:d,schema:u}=a;c||u&&typeof u=="object"?a.fail$data((0,e._)`!${(0,t.useFunc)(i,r.default)}(${l}, ${d})`):a.fail((0,e._)`${u} !== ${l}`)}};return Vl.default=s,Vl}var Bl={},sp;function ex(){if(sp)return Bl;sp=1,Object.defineProperty(Bl,"__esModule",{value:!0});const e=gn(),t=Dn(),r=xf(),s={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:a})=>(0,e._)`{allowedValues: ${a}}`},code(a){const{gen:i,data:l,$data:c,schema:d,schemaCode:u,it:g}=a;if(!c&&d.length===0)throw new Error("enum must have non-empty array");const m=d.length>=g.opts.loopEnum;let j;const p=()=>j??(j=(0,t.useFunc)(i,r.default));let x;if(m||c)x=i.let("valid"),a.block$data(x,v);else{if(!Array.isArray(d))throw new Error("ajv implementation error");const f=i.const("vSchema",u);x=(0,e.or)(...d.map((y,w)=>h(f,w)))}a.pass(x);function v(){i.assign(x,!1),i.forOf("v",u,f=>i.if((0,e._)`${p()}(${l}, ${f})`,()=>i.assign(x,!0).break()))}function h(f,y){const w=d[y];return typeof w=="object"&&w!==null?(0,e._)`${p()}(${l}, ${f}[${y}])`:(0,e._)`${l} === ${w}`}}};return Bl.default=s,Bl}var ip;function tx(){if(ip)return Rl;ip=1,Object.defineProperty(Rl,"__esModule",{value:!0});const e=Bj(),t=Wj(),r=Kj(),o=Qj(),s=Jj(),a=Gj(),i=Yj(),l=Xj(),c=Zj(),d=ex(),u=[e.default,t.default,r.default,o.default,s.default,a.default,i.default,l.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},c.default,d.default];return Rl.default=u,Rl}var Wl={},Ns={},lp;function Nm(){if(lp)return Ns;lp=1,Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.validateAdditionalItems=void 0;const e=gn(),t=Dn(),o={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:a}})=>(0,e.str)`must NOT have more than ${a} items`,params:({params:{len:a}})=>(0,e._)`{limit: ${a}}`},code(a){const{parentSchema:i,it:l}=a,{items:c}=i;if(!Array.isArray(c)){(0,t.checkStrictMode)(l,'"additionalItems" is ignored when "items" is not an array of schemas');return}s(a,c)}};function s(a,i){const{gen:l,schema:c,data:d,keyword:u,it:g}=a;g.items=!0;const m=l.const("len",(0,e._)`${d}.length`);if(c===!1)a.setParams({len:i.length}),a.pass((0,e._)`${m} <= ${i.length}`);else if(typeof c=="object"&&!(0,t.alwaysValidSchema)(g,c)){const p=l.var("valid",(0,e._)`${m} <= ${i.length}`);l.if((0,e.not)(p),()=>j(p)),a.ok(p)}function j(p){l.forRange("i",i.length,m,x=>{a.subschema({keyword:u,dataProp:x,dataPropType:t.Type.Num},p),g.allErrors||l.if((0,e.not)(p),()=>l.break())})}}return Ns.validateAdditionalItems=s,Ns.default=o,Ns}var Hl={},Ms={},cp;function Mm(){if(cp)return Ms;cp=1,Object.defineProperty(Ms,"__esModule",{value:!0}),Ms.validateTuple=void 0;const e=gn(),t=Dn(),r=Bo(),o={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(a){const{schema:i,it:l}=a;if(Array.isArray(i))return s(a,"additionalItems",i);l.items=!0,!(0,t.alwaysValidSchema)(l,i)&&a.ok((0,r.validateArray)(a))}};function s(a,i,l=a.schema){const{gen:c,parentSchema:d,data:u,keyword:g,it:m}=a;x(d),m.opts.unevaluated&&l.length&&m.items!==!0&&(m.items=t.mergeEvaluated.items(c,l.length,m.items));const j=c.name("valid"),p=c.const("len",(0,e._)`${u}.length`);l.forEach((v,h)=>{(0,t.alwaysValidSchema)(m,v)||(c.if((0,e._)`${p} > ${h}`,()=>a.subschema({keyword:g,schemaProp:h,dataProp:h},j)),a.ok(j))});function x(v){const{opts:h,errSchemaPath:f}=m,y=l.length,w=y===v.minItems&&(y===v.maxItems||v[i]===!1);if(h.strictTuples&&!w){const b=`"${g}" is ${y}-tuple, but minItems or maxItems/${i} are not specified or different at path "${f}"`;(0,t.checkStrictMode)(m,b,h.strictTuples)}}}return Ms.validateTuple=s,Ms.default=o,Ms}var up;function nx(){if(up)return Hl;up=1,Object.defineProperty(Hl,"__esModule",{value:!0});const e=Mm(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:r=>(0,e.validateTuple)(r,"items")};return Hl.default=t,Hl}var Kl={},dp;function rx(){if(dp)return Kl;dp=1,Object.defineProperty(Kl,"__esModule",{value:!0});const e=gn(),t=Dn(),r=Bo(),o=Nm(),a={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:i}})=>(0,e.str)`must NOT have more than ${i} items`,params:({params:{len:i}})=>(0,e._)`{limit: ${i}}`},code(i){const{schema:l,parentSchema:c,it:d}=i,{prefixItems:u}=c;d.items=!0,!(0,t.alwaysValidSchema)(d,l)&&(u?(0,o.validateAdditionalItems)(i,u):i.ok((0,r.validateArray)(i)))}};return Kl.default=a,Kl}var Ql={},fp;function ox(){if(fp)return Ql;fp=1,Object.defineProperty(Ql,"__esModule",{value:!0});const e=gn(),t=Dn(),o={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:s,max:a}})=>a===void 0?(0,e.str)`must contain at least ${s} valid item(s)`:(0,e.str)`must contain at least ${s} and no more than ${a} valid item(s)`,params:({params:{min:s,max:a}})=>a===void 0?(0,e._)`{minContains: ${s}}`:(0,e._)`{minContains: ${s}, maxContains: ${a}}`},code(s){const{gen:a,schema:i,parentSchema:l,data:c,it:d}=s;let u,g;const{minContains:m,maxContains:j}=l;d.opts.next?(u=m===void 0?1:m,g=j):u=1;const p=a.const("len",(0,e._)`${c}.length`);if(s.setParams({min:u,max:g}),g===void 0&&u===0){(0,t.checkStrictMode)(d,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(g!==void 0&&u>g){(0,t.checkStrictMode)(d,'"minContains" > "maxContains" is always invalid'),s.fail();return}if((0,t.alwaysValidSchema)(d,i)){let y=(0,e._)`${p} >= ${u}`;g!==void 0&&(y=(0,e._)`${y} && ${p} <= ${g}`),s.pass(y);return}d.items=!0;const x=a.name("valid");g===void 0&&u===1?h(x,()=>a.if(x,()=>a.break())):u===0?(a.let(x,!0),g!==void 0&&a.if((0,e._)`${c}.length > 0`,v)):(a.let(x,!1),v()),s.result(x,()=>s.reset());function v(){const y=a.name("_valid"),w=a.let("count",0);h(y,()=>a.if(y,()=>f(w)))}function h(y,w){a.forRange("i",0,p,b=>{s.subschema({keyword:"contains",dataProp:b,dataPropType:t.Type.Num,compositeRule:!0},y),w()})}function f(y){a.code((0,e._)`${y}++`),g===void 0?a.if((0,e._)`${y} >= ${u}`,()=>a.assign(x,!0).break()):(a.if((0,e._)`${y} > ${g}`,()=>a.assign(x,!1).break()),u===1?a.assign(x,!0):a.if((0,e._)`${y} >= ${u}`,()=>a.assign(x,!0)))}}};return Ql.default=o,Ql}var Ku={},vp;function ax(){return vp||(vp=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=gn(),r=Dn(),o=Bo();e.error={message:({params:{property:c,depsCount:d,deps:u}})=>{const g=d===1?"property":"properties";return(0,t.str)`must have ${g} ${u} when property ${c} is present`},params:({params:{property:c,depsCount:d,deps:u,missingProperty:g}})=>(0,t._)`{property: ${c},
    missingProperty: ${g},
    depsCount: ${d},
    deps: ${u}}`};const s={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(c){const[d,u]=a(c);i(c,d),l(c,u)}};function a({schema:c}){const d={},u={};for(const g in c){if(g==="__proto__")continue;const m=Array.isArray(c[g])?d:u;m[g]=c[g]}return[d,u]}function i(c,d=c.schema){const{gen:u,data:g,it:m}=c;if(Object.keys(d).length===0)return;const j=u.let("missing");for(const p in d){const x=d[p];if(x.length===0)continue;const v=(0,o.propertyInData)(u,g,p,m.opts.ownProperties);c.setParams({property:p,depsCount:x.length,deps:x.join(", ")}),m.allErrors?u.if(v,()=>{for(const h of x)(0,o.checkReportMissingProp)(c,h)}):(u.if((0,t._)`${v} && (${(0,o.checkMissingProp)(c,x,j)})`),(0,o.reportMissingProp)(c,j),u.else())}}e.validatePropertyDeps=i;function l(c,d=c.schema){const{gen:u,data:g,keyword:m,it:j}=c,p=u.name("valid");for(const x in d)(0,r.alwaysValidSchema)(j,d[x])||(u.if((0,o.propertyInData)(u,g,x,j.opts.ownProperties),()=>{const v=c.subschema({keyword:m,schemaProp:x},p);c.mergeValidEvaluated(v,p)},()=>u.var(p,!0)),c.ok(p))}e.validateSchemaDeps=l,e.default=s}(Ku)),Ku}var Jl={},pp;function sx(){if(pp)return Jl;pp=1,Object.defineProperty(Jl,"__esModule",{value:!0});const e=gn(),t=Dn(),o={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:s})=>(0,e._)`{propertyName: ${s.propertyName}}`},code(s){const{gen:a,schema:i,data:l,it:c}=s;if((0,t.alwaysValidSchema)(c,i))return;const d=a.name("valid");a.forIn("key",l,u=>{s.setParams({propertyName:u}),s.subschema({keyword:"propertyNames",data:u,dataTypes:["string"],propertyName:u,compositeRule:!0},d),a.if((0,e.not)(d),()=>{s.error(!0),c.allErrors||a.break()})}),s.ok(d)}};return Jl.default=o,Jl}var Gl={},hp;function Tm(){if(hp)return Gl;hp=1,Object.defineProperty(Gl,"__esModule",{value:!0});const e=Bo(),t=gn(),r=Ya(),o=Dn(),a={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:i})=>(0,t._)`{additionalProperty: ${i.additionalProperty}}`},code(i){const{gen:l,schema:c,parentSchema:d,data:u,errsCount:g,it:m}=i;if(!g)throw new Error("ajv implementation error");const{allErrors:j,opts:p}=m;if(m.props=!0,p.removeAdditional!=="all"&&(0,o.alwaysValidSchema)(m,c))return;const x=(0,e.allSchemaProperties)(d.properties),v=(0,e.allSchemaProperties)(d.patternProperties);h(),i.ok((0,t._)`${g} === ${r.default.errors}`);function h(){l.forIn("key",u,k=>{!x.length&&!v.length?w(k):l.if(f(k),()=>w(k))})}function f(k){let $;if(x.length>8){const M=(0,o.schemaRefOrVal)(m,d.properties,"properties");$=(0,e.isOwnProperty)(l,M,k)}else x.length?$=(0,t.or)(...x.map(M=>(0,t._)`${k} === ${M}`)):$=t.nil;return v.length&&($=(0,t.or)($,...v.map(M=>(0,t._)`${(0,e.usePattern)(i,M)}.test(${k})`))),(0,t.not)($)}function y(k){l.code((0,t._)`delete ${u}[${k}]`)}function w(k){if(p.removeAdditional==="all"||p.removeAdditional&&c===!1){y(k);return}if(c===!1){i.setParams({additionalProperty:k}),i.error(),j||l.break();return}if(typeof c=="object"&&!(0,o.alwaysValidSchema)(m,c)){const $=l.name("valid");p.removeAdditional==="failing"?(b(k,$,!1),l.if((0,t.not)($),()=>{i.reset(),y(k)})):(b(k,$),j||l.if((0,t.not)($),()=>l.break()))}}function b(k,$,M){const z={keyword:"additionalProperties",dataProp:k,dataPropType:o.Type.Str};M===!1&&Object.assign(z,{compositeRule:!0,createErrors:!1,allErrors:!1}),i.subschema(z,$)}}};return Gl.default=a,Gl}var Yl={},mp;function ix(){if(mp)return Yl;mp=1,Object.defineProperty(Yl,"__esModule",{value:!0});const e=fu(),t=Bo(),r=Dn(),o=Tm(),s={keyword:"properties",type:"object",schemaType:"object",code(a){const{gen:i,schema:l,parentSchema:c,data:d,it:u}=a;u.opts.removeAdditional==="all"&&c.additionalProperties===void 0&&o.default.code(new e.KeywordCxt(u,o.default,"additionalProperties"));const g=(0,t.allSchemaProperties)(l);for(const v of g)u.definedProperties.add(v);u.opts.unevaluated&&g.length&&u.props!==!0&&(u.props=r.mergeEvaluated.props(i,(0,r.toHash)(g),u.props));const m=g.filter(v=>!(0,r.alwaysValidSchema)(u,l[v]));if(m.length===0)return;const j=i.name("valid");for(const v of m)p(v)?x(v):(i.if((0,t.propertyInData)(i,d,v,u.opts.ownProperties)),x(v),u.allErrors||i.else().var(j,!0),i.endIf()),a.it.definedProperties.add(v),a.ok(j);function p(v){return u.opts.useDefaults&&!u.compositeRule&&l[v].default!==void 0}function x(v){a.subschema({keyword:"properties",schemaProp:v,dataProp:v},j)}}};return Yl.default=s,Yl}var Xl={},gp;function lx(){if(gp)return Xl;gp=1,Object.defineProperty(Xl,"__esModule",{value:!0});const e=Bo(),t=gn(),r=Dn(),o=Dn(),s={keyword:"patternProperties",type:"object",schemaType:"object",code(a){const{gen:i,schema:l,data:c,parentSchema:d,it:u}=a,{opts:g}=u,m=(0,e.allSchemaProperties)(l),j=m.filter(w=>(0,r.alwaysValidSchema)(u,l[w]));if(m.length===0||j.length===m.length&&(!u.opts.unevaluated||u.props===!0))return;const p=g.strictSchema&&!g.allowMatchingProperties&&d.properties,x=i.name("valid");u.props!==!0&&!(u.props instanceof t.Name)&&(u.props=(0,o.evaluatedPropsToName)(i,u.props));const{props:v}=u;h();function h(){for(const w of m)p&&f(w),u.allErrors?y(w):(i.var(x,!0),y(w),i.if(x))}function f(w){for(const b in p)new RegExp(w).test(b)&&(0,r.checkStrictMode)(u,`property ${b} matches pattern ${w} (use allowMatchingProperties)`)}function y(w){i.forIn("key",c,b=>{i.if((0,t._)`${(0,e.usePattern)(a,w)}.test(${b})`,()=>{const k=j.includes(w);k||a.subschema({keyword:"patternProperties",schemaProp:w,dataProp:b,dataPropType:o.Type.Str},x),u.opts.unevaluated&&v!==!0?i.assign((0,t._)`${v}[${b}]`,!0):!k&&!u.allErrors&&i.if((0,t.not)(x),()=>i.break())})})}}};return Xl.default=s,Xl}var Zl={},bp;function cx(){if(bp)return Zl;bp=1,Object.defineProperty(Zl,"__esModule",{value:!0});const e=Dn(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(r){const{gen:o,schema:s,it:a}=r;if((0,e.alwaysValidSchema)(a,s)){r.fail();return}const i=o.name("valid");r.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},i),r.failResult(i,()=>r.reset(),()=>r.error())},error:{message:"must NOT be valid"}};return Zl.default=t,Zl}var ec={},yp;function ux(){if(yp)return ec;yp=1,Object.defineProperty(ec,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:Bo().validateUnion,error:{message:"must match a schema in anyOf"}};return ec.default=t,ec}var tc={},jp;function dx(){if(jp)return tc;jp=1,Object.defineProperty(tc,"__esModule",{value:!0});const e=gn(),t=Dn(),o={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:s})=>(0,e._)`{passingSchemas: ${s.passing}}`},code(s){const{gen:a,schema:i,parentSchema:l,it:c}=s;if(!Array.isArray(i))throw new Error("ajv implementation error");if(c.opts.discriminator&&l.discriminator)return;const d=i,u=a.let("valid",!1),g=a.let("passing",null),m=a.name("_valid");s.setParams({passing:g}),a.block(j),s.result(u,()=>s.reset(),()=>s.error(!0));function j(){d.forEach((p,x)=>{let v;(0,t.alwaysValidSchema)(c,p)?a.var(m,!0):v=s.subschema({keyword:"oneOf",schemaProp:x,compositeRule:!0},m),x>0&&a.if((0,e._)`${m} && ${u}`).assign(u,!1).assign(g,(0,e._)`[${g}, ${x}]`).else(),a.if(m,()=>{a.assign(u,!0),a.assign(g,x),v&&s.mergeEvaluated(v,e.Name)})})}}};return tc.default=o,tc}var nc={},xp;function fx(){if(xp)return nc;xp=1,Object.defineProperty(nc,"__esModule",{value:!0});const e=Dn(),t={keyword:"allOf",schemaType:"array",code(r){const{gen:o,schema:s,it:a}=r;if(!Array.isArray(s))throw new Error("ajv implementation error");const i=o.name("valid");s.forEach((l,c)=>{if((0,e.alwaysValidSchema)(a,l))return;const d=r.subschema({keyword:"allOf",schemaProp:c},i);r.ok(i),r.mergeEvaluated(d)})}};return nc.default=t,nc}var rc={},wp;function vx(){if(wp)return rc;wp=1,Object.defineProperty(rc,"__esModule",{value:!0});const e=gn(),t=Dn(),o={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:a})=>(0,e.str)`must match "${a.ifClause}" schema`,params:({params:a})=>(0,e._)`{failingKeyword: ${a.ifClause}}`},code(a){const{gen:i,parentSchema:l,it:c}=a;l.then===void 0&&l.else===void 0&&(0,t.checkStrictMode)(c,'"if" without "then" and "else" is ignored');const d=s(c,"then"),u=s(c,"else");if(!d&&!u)return;const g=i.let("valid",!0),m=i.name("_valid");if(j(),a.reset(),d&&u){const x=i.let("ifClause");a.setParams({ifClause:x}),i.if(m,p("then",x),p("else",x))}else d?i.if(m,p("then")):i.if((0,e.not)(m),p("else"));a.pass(g,()=>a.error(!0));function j(){const x=a.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},m);a.mergeEvaluated(x)}function p(x,v){return()=>{const h=a.subschema({keyword:x},m);i.assign(g,m),a.mergeValidEvaluated(h,g),v?i.assign(v,(0,e._)`${x}`):a.setParams({ifClause:x})}}}};function s(a,i){const l=a.schema[i];return l!==void 0&&!(0,t.alwaysValidSchema)(a,l)}return rc.default=o,rc}var oc={},kp;function px(){if(kp)return oc;kp=1,Object.defineProperty(oc,"__esModule",{value:!0});const e=Dn(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:r,parentSchema:o,it:s}){o.if===void 0&&(0,e.checkStrictMode)(s,`"${r}" without "if" is ignored`)}};return oc.default=t,oc}var Sp;function hx(){if(Sp)return Wl;Sp=1,Object.defineProperty(Wl,"__esModule",{value:!0});const e=Nm(),t=nx(),r=Mm(),o=rx(),s=ox(),a=ax(),i=sx(),l=Tm(),c=ix(),d=lx(),u=cx(),g=ux(),m=dx(),j=fx(),p=vx(),x=px();function v(h=!1){const f=[u.default,g.default,m.default,j.default,p.default,x.default,i.default,l.default,a.default,c.default,d.default];return h?f.push(t.default,o.default):f.push(e.default,r.default),f.push(s.default),f}return Wl.default=v,Wl}var ac={},sc={},_p;function mx(){if(_p)return sc;_p=1,Object.defineProperty(sc,"__esModule",{value:!0});const e=gn(),r={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:o})=>(0,e.str)`must match format "${o}"`,params:({schemaCode:o})=>(0,e._)`{format: ${o}}`},code(o,s){const{gen:a,data:i,$data:l,schema:c,schemaCode:d,it:u}=o,{opts:g,errSchemaPath:m,schemaEnv:j,self:p}=u;if(!g.validateFormats)return;l?x():v();function x(){const h=a.scopeValue("formats",{ref:p.formats,code:g.code.formats}),f=a.const("fDef",(0,e._)`${h}[${d}]`),y=a.let("fType"),w=a.let("format");a.if((0,e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`,()=>a.assign(y,(0,e._)`${f}.type || "string"`).assign(w,(0,e._)`${f}.validate`),()=>a.assign(y,(0,e._)`"string"`).assign(w,f)),o.fail$data((0,e.or)(b(),k()));function b(){return g.strictSchema===!1?e.nil:(0,e._)`${d} && !${w}`}function k(){const $=j.$async?(0,e._)`(${f}.async ? await ${w}(${i}) : ${w}(${i}))`:(0,e._)`${w}(${i})`,M=(0,e._)`(typeof ${w} == "function" ? ${$} : ${w}.test(${i}))`;return(0,e._)`${w} && ${w} !== true && ${y} === ${s} && !${M}`}}function v(){const h=p.formats[c];if(!h){b();return}if(h===!0)return;const[f,y,w]=k(h);f===s&&o.pass($());function b(){if(g.strictSchema===!1){p.logger.warn(M());return}throw new Error(M());function M(){return`unknown format "${c}" ignored in schema at path "${m}"`}}function k(M){const z=M instanceof RegExp?(0,e.regexpCode)(M):g.code.formats?(0,e._)`${g.code.formats}${(0,e.getProperty)(c)}`:void 0,H=a.scopeValue("formats",{key:c,ref:M,code:z});return typeof M=="object"&&!(M instanceof RegExp)?[M.type||"string",M.validate,(0,e._)`${H}.validate`]:["string",M,H]}function $(){if(typeof h=="object"&&!(h instanceof RegExp)&&h.async){if(!j.$async)throw new Error("async format in sync schema");return(0,e._)`await ${w}(${i})`}return typeof y=="function"?(0,e._)`${w}(${i})`:(0,e._)`${w}.test(${i})`}}}};return sc.default=r,sc}var Cp;function gx(){if(Cp)return ac;Cp=1,Object.defineProperty(ac,"__esModule",{value:!0});const t=[mx().default];return ac.default=t,ac}var ls={},Ep;function bx(){return Ep||(Ep=1,Object.defineProperty(ls,"__esModule",{value:!0}),ls.contentVocabulary=ls.metadataVocabulary=void 0,ls.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],ls.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),ls}var Op;function yx(){if(Op)return $l;Op=1,Object.defineProperty($l,"__esModule",{value:!0});const e=Vj(),t=tx(),r=hx(),o=gx(),s=bx(),a=[e.default,t.default,(0,r.default)(),o.default,s.metadataVocabulary,s.contentVocabulary];return $l.default=a,$l}var ic={},Pi={},$p;function jx(){if($p)return Pi;$p=1,Object.defineProperty(Pi,"__esModule",{value:!0}),Pi.DiscrError=void 0;var e;return function(t){t.Tag="tag",t.Mapping="mapping"}(e||(Pi.DiscrError=e={})),Pi}var Pp;function xx(){if(Pp)return ic;Pp=1,Object.defineProperty(ic,"__esModule",{value:!0});const e=gn(),t=jx(),r=jf(),o=vu(),s=Dn(),i={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:l,tagName:c}})=>l===t.DiscrError.Tag?`tag "${c}" must be string`:`value of tag "${c}" must be in oneOf`,params:({params:{discrError:l,tag:c,tagName:d}})=>(0,e._)`{error: ${l}, tag: ${d}, tagValue: ${c}}`},code(l){const{gen:c,data:d,schema:u,parentSchema:g,it:m}=l,{oneOf:j}=g;if(!m.opts.discriminator)throw new Error("discriminator: requires discriminator option");const p=u.propertyName;if(typeof p!="string")throw new Error("discriminator: requires propertyName");if(u.mapping)throw new Error("discriminator: mapping is not supported");if(!j)throw new Error("discriminator: requires oneOf keyword");const x=c.let("valid",!1),v=c.const("tag",(0,e._)`${d}${(0,e.getProperty)(p)}`);c.if((0,e._)`typeof ${v} == "string"`,()=>h(),()=>l.error(!1,{discrError:t.DiscrError.Tag,tag:v,tagName:p})),l.ok(x);function h(){const w=y();c.if(!1);for(const b in w)c.elseIf((0,e._)`${v} === ${b}`),c.assign(x,f(w[b]));c.else(),l.error(!1,{discrError:t.DiscrError.Mapping,tag:v,tagName:p}),c.endIf()}function f(w){const b=c.name("valid"),k=l.subschema({keyword:"oneOf",schemaProp:w},b);return l.mergeEvaluated(k,e.Name),b}function y(){var w;const b={},k=M(g);let $=!0;for(let G=0;G<j.length;G++){let ee=j[G];if(ee?.$ref&&!(0,s.schemaHasRulesButRef)(ee,m.self.RULES)){const je=ee.$ref;if(ee=r.resolveRef.call(m.self,m.schemaEnv.root,m.baseId,je),ee instanceof r.SchemaEnv&&(ee=ee.schema),ee===void 0)throw new o.default(m.opts.uriResolver,m.baseId,je)}const te=(w=ee?.properties)===null||w===void 0?void 0:w[p];if(typeof te!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`);$=$&&(k||M(ee)),z(te,G)}if(!$)throw new Error(`discriminator: "${p}" must be required`);return b;function M({required:G}){return Array.isArray(G)&&G.includes(p)}function z(G,ee){if(G.const)H(G.const,ee);else if(G.enum)for(const te of G.enum)H(te,ee);else throw new Error(`discriminator: "properties/${p}" must have "const" or "enum"`)}function H(G,ee){if(typeof G!="string"||G in b)throw new Error(`discriminator: "${p}" values must be unique strings`);b[G]=ee}}}};return ic.default=i,ic}const wx="http://json-schema.org/draft-07/schema#",kx="http://json-schema.org/draft-07/schema#",Sx="Core schema meta-schema",_x={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Cx=["object","boolean"],Ex={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},Ox={$schema:wx,$id:kx,title:Sx,definitions:_x,type:Cx,properties:Ex,default:!0};var zp;function $x(){return zp||(zp=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const r=Lj(),o=yx(),s=xx(),a=Ox,i=["/properties"],l="http://json-schema.org/draft-07/schema";class c extends r.default{_addVocabularies(){super._addVocabularies(),o.default.forEach(p=>this.addVocabulary(p)),this.opts.discriminator&&this.addKeyword(s.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const p=this.opts.$data?this.$dataMetaSchema(a,i):a;this.addMetaSchema(p,l,!1),this.refs["http://json-schema.org/schema"]=l}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(l)?l:void 0)}}t.Ajv=c,e.exports=t=c,e.exports.Ajv=c,Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var d=fu();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return d.KeywordCxt}});var u=gn();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return u._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return u.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return u.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return u.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return u.CodeGen}});var g=yf();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return g.default}});var m=vu();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return m.default}})}(Sl,Sl.exports)),Sl.exports}$x();var Qu={},Rp;function Px(){return Rp||(Rp=1,function(e){(function(t){function r(O){return O!==null?Object.prototype.toString.call(O)==="[object Array]":!1}function o(O){return O!==null?Object.prototype.toString.call(O)==="[object Object]":!1}function s(O,N){if(O===N)return!0;var D=Object.prototype.toString.call(O);if(D!==Object.prototype.toString.call(N))return!1;if(r(O)===!0){if(O.length!==N.length)return!1;for(var re=0;re<O.length;re++)if(s(O[re],N[re])===!1)return!1;return!0}if(o(O)===!0){var he={};for(var Me in O)if(hasOwnProperty.call(O,Me)){if(s(O[Me],N[Me])===!1)return!1;he[Me]=!0}for(var Ue in N)if(hasOwnProperty.call(N,Ue)&&he[Ue]!==!0)return!1;return!0}return!1}function a(O){if(O===""||O===!1||O===null)return!0;if(r(O)&&O.length===0)return!0;if(o(O)){for(var N in O)if(O.hasOwnProperty(N))return!1;return!0}else return!1}function i(O){for(var N=Object.keys(O),D=[],re=0;re<N.length;re++)D.push(O[N[re]]);return D}var l;typeof String.prototype.trimLeft=="function"?l=function(O){return O.trimLeft()}:l=function(O){return O.match(/^\s*(.*)/)[1]};var c=0,d=1,u=2,g=3,m=4,j=5,p=6,x=7,v=8,h=9,f={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},y="EOF",w="UnquotedIdentifier",b="QuotedIdentifier",k="Rbracket",$="Rparen",M="Comma",z="Colon",H="Rbrace",G="Number",ee="Current",te="Expref",je="Pipe",B="Or",pe="And",$e="EQ",ke="GT",me="LT",Y="GTE",I="LTE",se="NE",T="Flatten",E="Star",R="Filter",ne="Dot",Se="Not",K="Lbrace",F="Lbracket",ie="Lparen",P="Literal",U={".":ne,"*":E,",":M,":":z,"{":K,"}":H,"]":k,"(":ie,")":$,"@":ee},L={"<":!0,">":!0,"=":!0,"!":!0},fe={" ":!0,"	":!0,"\n":!0};function J(O){return O>="a"&&O<="z"||O>="A"&&O<="Z"||O==="_"}function V(O){return O>="0"&&O<="9"||O==="-"}function Ze(O){return O>="a"&&O<="z"||O>="A"&&O<="Z"||O>="0"&&O<="9"||O==="_"}function Je(){}Je.prototype={tokenize:function(O){var N=[];this._current=0;for(var D,re,he;this._current<O.length;)if(J(O[this._current]))D=this._current,re=this._consumeUnquotedIdentifier(O),N.push({type:w,value:re,start:D});else if(U[O[this._current]]!==void 0)N.push({type:U[O[this._current]],value:O[this._current],start:this._current}),this._current++;else if(V(O[this._current]))he=this._consumeNumber(O),N.push(he);else if(O[this._current]==="[")he=this._consumeLBracket(O),N.push(he);else if(O[this._current]==='"')D=this._current,re=this._consumeQuotedIdentifier(O),N.push({type:b,value:re,start:D});else if(O[this._current]==="'")D=this._current,re=this._consumeRawStringLiteral(O),N.push({type:P,value:re,start:D});else if(O[this._current]==="`"){D=this._current;var Me=this._consumeLiteral(O);N.push({type:P,value:Me,start:D})}else if(L[O[this._current]]!==void 0)N.push(this._consumeOperator(O));else if(fe[O[this._current]]!==void 0)this._current++;else if(O[this._current]==="&")D=this._current,this._current++,O[this._current]==="&"?(this._current++,N.push({type:pe,value:"&&",start:D})):N.push({type:te,value:"&",start:D});else if(O[this._current]==="|")D=this._current,this._current++,O[this._current]==="|"?(this._current++,N.push({type:B,value:"||",start:D})):N.push({type:je,value:"|",start:D});else{var Ue=new Error("Unknown character:"+O[this._current]);throw Ue.name="LexerError",Ue}return N},_consumeUnquotedIdentifier:function(O){var N=this._current;for(this._current++;this._current<O.length&&Ze(O[this._current]);)this._current++;return O.slice(N,this._current)},_consumeQuotedIdentifier:function(O){var N=this._current;this._current++;for(var D=O.length;O[this._current]!=='"'&&this._current<D;){var re=this._current;O[re]==="\\"&&(O[re+1]==="\\"||O[re+1]==='"')?re+=2:re++,this._current=re}return this._current++,JSON.parse(O.slice(N,this._current))},_consumeRawStringLiteral:function(O){var N=this._current;this._current++;for(var D=O.length;O[this._current]!=="'"&&this._current<D;){var re=this._current;O[re]==="\\"&&(O[re+1]==="\\"||O[re+1]==="'")?re+=2:re++,this._current=re}this._current++;var he=O.slice(N+1,this._current-1);return he.replace("\\'","'")},_consumeNumber:function(O){var N=this._current;this._current++;for(var D=O.length;V(O[this._current])&&this._current<D;)this._current++;var re=parseInt(O.slice(N,this._current));return{type:G,value:re,start:N}},_consumeLBracket:function(O){var N=this._current;return this._current++,O[this._current]==="?"?(this._current++,{type:R,value:"[?",start:N}):O[this._current]==="]"?(this._current++,{type:T,value:"[]",start:N}):{type:F,value:"[",start:N}},_consumeOperator:function(O){var N=this._current,D=O[N];if(this._current++,D==="!")return O[this._current]==="="?(this._current++,{type:se,value:"!=",start:N}):{type:Se,value:"!",start:N};if(D==="<")return O[this._current]==="="?(this._current++,{type:I,value:"<=",start:N}):{type:me,value:"<",start:N};if(D===">")return O[this._current]==="="?(this._current++,{type:Y,value:">=",start:N}):{type:ke,value:">",start:N};if(D==="="&&O[this._current]==="=")return this._current++,{type:$e,value:"==",start:N}},_consumeLiteral:function(O){this._current++;for(var N=this._current,D=O.length,re;O[this._current]!=="`"&&this._current<D;){var he=this._current;O[he]==="\\"&&(O[he+1]==="\\"||O[he+1]==="`")?he+=2:he++,this._current=he}var Me=l(O.slice(N,this._current));return Me=Me.replace("\\`","`"),this._looksLikeJSON(Me)?re=JSON.parse(Me):re=JSON.parse('"'+Me+'"'),this._current++,re},_looksLikeJSON:function(O){var N='[{"',D=["true","false","null"],re="-0123456789";if(O==="")return!1;if(N.indexOf(O[0])>=0)return!0;if(D.indexOf(O)>=0)return!0;if(re.indexOf(O[0])>=0)try{return JSON.parse(O),!0}catch{return!1}else return!1}};var Oe={};Oe[y]=0,Oe[w]=0,Oe[b]=0,Oe[k]=0,Oe[$]=0,Oe[M]=0,Oe[H]=0,Oe[G]=0,Oe[ee]=0,Oe[te]=0,Oe[je]=1,Oe[B]=2,Oe[pe]=3,Oe[$e]=5,Oe[ke]=5,Oe[me]=5,Oe[Y]=5,Oe[I]=5,Oe[se]=5,Oe[T]=9,Oe[E]=20,Oe[R]=21,Oe[ne]=40,Oe[Se]=45,Oe[K]=50,Oe[F]=55,Oe[ie]=60;function Xe(){}Xe.prototype={parse:function(O){this._loadTokens(O),this.index=0;var N=this.expression(0);if(this._lookahead(0)!==y){var D=this._lookaheadToken(0),re=new Error("Unexpected token type: "+D.type+", value: "+D.value);throw re.name="ParserError",re}return N},_loadTokens:function(O){var N=new Je,D=N.tokenize(O);D.push({type:y,value:"",start:O.length}),this.tokens=D},expression:function(O){var N=this._lookaheadToken(0);this._advance();for(var D=this.nud(N),re=this._lookahead(0);O<Oe[re];)this._advance(),D=this.led(re,D),re=this._lookahead(0);return D},_lookahead:function(O){return this.tokens[this.index+O].type},_lookaheadToken:function(O){return this.tokens[this.index+O]},_advance:function(){this.index++},nud:function(O){var N,D,re;switch(O.type){case P:return{type:"Literal",value:O.value};case w:return{type:"Field",name:O.value};case b:var he={type:"Field",name:O.value};if(this._lookahead(0)===ie)throw new Error("Quoted identifier not allowed for function names.");return he;case Se:return D=this.expression(Oe.Not),{type:"NotExpression",children:[D]};case E:return N={type:"Identity"},D=null,this._lookahead(0)===k?D={type:"Identity"}:D=this._parseProjectionRHS(Oe.Star),{type:"ValueProjection",children:[N,D]};case R:return this.led(O.type,{type:"Identity"});case K:return this._parseMultiselectHash();case T:return N={type:T,children:[{type:"Identity"}]},D=this._parseProjectionRHS(Oe.Flatten),{type:"Projection",children:[N,D]};case F:return this._lookahead(0)===G||this._lookahead(0)===z?(D=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},D)):this._lookahead(0)===E&&this._lookahead(1)===k?(this._advance(),this._advance(),D=this._parseProjectionRHS(Oe.Star),{type:"Projection",children:[{type:"Identity"},D]}):this._parseMultiselectList();case ee:return{type:ee};case te:return re=this.expression(Oe.Expref),{type:"ExpressionReference",children:[re]};case ie:for(var Me=[];this._lookahead(0)!==$;)this._lookahead(0)===ee?(re={type:ee},this._advance()):re=this.expression(0),Me.push(re);return this._match($),Me[0];default:this._errorToken(O)}},led:function(O,N){var D;switch(O){case ne:var re=Oe.Dot;return this._lookahead(0)!==E?(D=this._parseDotRHS(re),{type:"Subexpression",children:[N,D]}):(this._advance(),D=this._parseProjectionRHS(re),{type:"ValueProjection",children:[N,D]});case je:return D=this.expression(Oe.Pipe),{type:je,children:[N,D]};case B:return D=this.expression(Oe.Or),{type:"OrExpression",children:[N,D]};case pe:return D=this.expression(Oe.And),{type:"AndExpression",children:[N,D]};case ie:for(var he=N.name,Me=[],Ue,be;this._lookahead(0)!==$;)this._lookahead(0)===ee?(Ue={type:ee},this._advance()):Ue=this.expression(0),this._lookahead(0)===M&&this._match(M),Me.push(Ue);return this._match($),be={type:"Function",name:he,children:Me},be;case R:var ve=this.expression(0);return this._match(k),this._lookahead(0)===T?D={type:"Identity"}:D=this._parseProjectionRHS(Oe.Filter),{type:"FilterProjection",children:[N,D,ve]};case T:var vt={type:T,children:[N]},tt=this._parseProjectionRHS(Oe.Flatten);return{type:"Projection",children:[vt,tt]};case $e:case se:case ke:case Y:case me:case I:return this._parseComparator(N,O);case F:var Ee=this._lookaheadToken(0);return Ee.type===G||Ee.type===z?(D=this._parseIndexExpression(),this._projectIfSlice(N,D)):(this._match(E),this._match(k),D=this._parseProjectionRHS(Oe.Star),{type:"Projection",children:[N,D]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(O){if(this._lookahead(0)===O)this._advance();else{var N=this._lookaheadToken(0),D=new Error("Expected "+O+", got: "+N.type);throw D.name="ParserError",D}},_errorToken:function(O){var N=new Error("Invalid token ("+O.type+'): "'+O.value+'"');throw N.name="ParserError",N},_parseIndexExpression:function(){if(this._lookahead(0)===z||this._lookahead(1)===z)return this._parseSliceExpression();var O={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(k),O},_projectIfSlice:function(O,N){var D={type:"IndexExpression",children:[O,N]};return N.type==="Slice"?{type:"Projection",children:[D,this._parseProjectionRHS(Oe.Star)]}:D},_parseSliceExpression:function(){for(var O=[null,null,null],N=0,D=this._lookahead(0);D!==k&&N<3;){if(D===z)N++,this._advance();else if(D===G)O[N]=this._lookaheadToken(0).value,this._advance();else{var re=this._lookahead(0),he=new Error("Syntax error, unexpected token: "+re.value+"("+re.type+")");throw he.name="Parsererror",he}D=this._lookahead(0)}return this._match(k),{type:"Slice",children:O}},_parseComparator:function(O,N){var D=this.expression(Oe[N]);return{type:"Comparator",name:N,children:[O,D]}},_parseDotRHS:function(O){var N=this._lookahead(0),D=[w,b,E];if(D.indexOf(N)>=0)return this.expression(O);if(N===F)return this._match(F),this._parseMultiselectList();if(N===K)return this._match(K),this._parseMultiselectHash()},_parseProjectionRHS:function(O){var N;if(Oe[this._lookahead(0)]<10)N={type:"Identity"};else if(this._lookahead(0)===F)N=this.expression(O);else if(this._lookahead(0)===R)N=this.expression(O);else if(this._lookahead(0)===ne)this._match(ne),N=this._parseDotRHS(O);else{var D=this._lookaheadToken(0),re=new Error("Sytanx error, unexpected token: "+D.value+"("+D.type+")");throw re.name="ParserError",re}return N},_parseMultiselectList:function(){for(var O=[];this._lookahead(0)!==k;){var N=this.expression(0);if(O.push(N),this._lookahead(0)===M&&(this._match(M),this._lookahead(0)===k))throw new Error("Unexpected token Rbracket")}return this._match(k),{type:"MultiSelectList",children:O}},_parseMultiselectHash:function(){for(var O=[],N=[w,b],D,re,he,Me;;){if(D=this._lookaheadToken(0),N.indexOf(D.type)<0)throw new Error("Expecting an identifier token, got: "+D.type);if(re=D.value,this._advance(),this._match(z),he=this.expression(0),Me={type:"KeyValuePair",name:re,value:he},O.push(Me),this._lookahead(0)===M)this._match(M);else if(this._lookahead(0)===H){this._match(H);break}}return{type:"MultiSelectHash",children:O}}};function Ne(O){this.runtime=O}Ne.prototype={search:function(O,N){return this.visit(O,N)},visit:function(O,N){var D,re,he,Me,Ue,be,ve,vt,tt,Ee;switch(O.type){case"Field":return N!==null&&o(N)?(be=N[O.name],be===void 0?null:be):null;case"Subexpression":for(he=this.visit(O.children[0],N),Ee=1;Ee<O.children.length;Ee++)if(he=this.visit(O.children[1],he),he===null)return null;return he;case"IndexExpression":return ve=this.visit(O.children[0],N),vt=this.visit(O.children[1],ve),vt;case"Index":if(!r(N))return null;var pt=O.value;return pt<0&&(pt=N.length+pt),he=N[pt],he===void 0&&(he=null),he;case"Slice":if(!r(N))return null;var ln=O.children.slice(0),On=this.computeSliceParams(N.length,ln),en=On[0],Wt=On[1],wn=On[2];if(he=[],wn>0)for(Ee=en;Ee<Wt;Ee+=wn)he.push(N[Ee]);else for(Ee=en;Ee>Wt;Ee+=wn)he.push(N[Ee]);return he;case"Projection":var Jt=this.visit(O.children[0],N);if(!r(Jt))return null;for(tt=[],Ee=0;Ee<Jt.length;Ee++)re=this.visit(O.children[1],Jt[Ee]),re!==null&&tt.push(re);return tt;case"ValueProjection":if(Jt=this.visit(O.children[0],N),!o(Jt))return null;tt=[];var Nt=i(Jt);for(Ee=0;Ee<Nt.length;Ee++)re=this.visit(O.children[1],Nt[Ee]),re!==null&&tt.push(re);return tt;case"FilterProjection":if(Jt=this.visit(O.children[0],N),!r(Jt))return null;var Ct=[],Yt=[];for(Ee=0;Ee<Jt.length;Ee++)D=this.visit(O.children[2],Jt[Ee]),a(D)||Ct.push(Jt[Ee]);for(var cn=0;cn<Ct.length;cn++)re=this.visit(O.children[1],Ct[cn]),re!==null&&Yt.push(re);return Yt;case"Comparator":switch(Me=this.visit(O.children[0],N),Ue=this.visit(O.children[1],N),O.name){case $e:he=s(Me,Ue);break;case se:he=!s(Me,Ue);break;case ke:he=Me>Ue;break;case Y:he=Me>=Ue;break;case me:he=Me<Ue;break;case I:he=Me<=Ue;break;default:throw new Error("Unknown comparator: "+O.name)}return he;case T:var yt=this.visit(O.children[0],N);if(!r(yt))return null;var Ge=[];for(Ee=0;Ee<yt.length;Ee++)re=yt[Ee],r(re)?Ge.push.apply(Ge,re):Ge.push(re);return Ge;case"Identity":return N;case"MultiSelectList":if(N===null)return null;for(tt=[],Ee=0;Ee<O.children.length;Ee++)tt.push(this.visit(O.children[Ee],N));return tt;case"MultiSelectHash":if(N===null)return null;tt={};var Ht;for(Ee=0;Ee<O.children.length;Ee++)Ht=O.children[Ee],tt[Ht.name]=this.visit(Ht.value,N);return tt;case"OrExpression":return D=this.visit(O.children[0],N),a(D)&&(D=this.visit(O.children[1],N)),D;case"AndExpression":return Me=this.visit(O.children[0],N),a(Me)===!0?Me:this.visit(O.children[1],N);case"NotExpression":return Me=this.visit(O.children[0],N),a(Me);case"Literal":return O.value;case je:return ve=this.visit(O.children[0],N),this.visit(O.children[1],ve);case ee:return N;case"Function":var Ft=[];for(Ee=0;Ee<O.children.length;Ee++)Ft.push(this.visit(O.children[Ee],N));return this.runtime.callFunction(O.name,Ft);case"ExpressionReference":var Nn=O.children[0];return Nn.jmespathType=te,Nn;default:throw new Error("Unknown node type: "+O.type)}},computeSliceParams:function(O,N){var D=N[0],re=N[1],he=N[2],Me=[null,null,null];if(he===null)he=1;else if(he===0){var Ue=new Error("Invalid slice, step cannot be 0");throw Ue.name="RuntimeError",Ue}var be=he<0;return D===null?D=be?O-1:0:D=this.capSliceRange(O,D,he),re===null?re=be?-1:O:re=this.capSliceRange(O,re,he),Me[0]=D,Me[1]=re,Me[2]=he,Me},capSliceRange:function(O,N,D){return N<0?(N+=O,N<0&&(N=D<0?-1:0)):N>=O&&(N=D<0?O-1:O),N}};function Le(O){this._interpreter=O,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[c]}]},avg:{_func:this._functionAvg,_signature:[{types:[v]}]},ceil:{_func:this._functionCeil,_signature:[{types:[c]}]},contains:{_func:this._functionContains,_signature:[{types:[u,g]},{types:[d]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[u]},{types:[u]}]},floor:{_func:this._functionFloor,_signature:[{types:[c]}]},length:{_func:this._functionLength,_signature:[{types:[u,g,m]}]},map:{_func:this._functionMap,_signature:[{types:[p]},{types:[g]}]},max:{_func:this._functionMax,_signature:[{types:[v,h]}]},merge:{_func:this._functionMerge,_signature:[{types:[m],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[g]},{types:[p]}]},sum:{_func:this._functionSum,_signature:[{types:[v]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[u]},{types:[u]}]},min:{_func:this._functionMin,_signature:[{types:[v,h]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[g]},{types:[p]}]},type:{_func:this._functionType,_signature:[{types:[d]}]},keys:{_func:this._functionKeys,_signature:[{types:[m]}]},values:{_func:this._functionValues,_signature:[{types:[m]}]},sort:{_func:this._functionSort,_signature:[{types:[h,v]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[g]},{types:[p]}]},join:{_func:this._functionJoin,_signature:[{types:[u]},{types:[h]}]},reverse:{_func:this._functionReverse,_signature:[{types:[u,g]}]},to_array:{_func:this._functionToArray,_signature:[{types:[d]}]},to_string:{_func:this._functionToString,_signature:[{types:[d]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[d]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[d],variadic:!0}]}}}Le.prototype={callFunction:function(O,N){var D=this.functionTable[O];if(D===void 0)throw new Error("Unknown function: "+O+"()");return this._validateArgs(O,N,D._signature),D._func.call(this,N)},_validateArgs:function(O,N,D){var re;if(D[D.length-1].variadic){if(N.length<D.length)throw re=D.length===1?" argument":" arguments",new Error("ArgumentError: "+O+"() takes at least"+D.length+re+" but received "+N.length)}else if(N.length!==D.length)throw re=D.length===1?" argument":" arguments",new Error("ArgumentError: "+O+"() takes "+D.length+re+" but received "+N.length);for(var he,Me,Ue,be=0;be<D.length;be++){Ue=!1,he=D[be].types,Me=this._getTypeName(N[be]);for(var ve=0;ve<he.length;ve++)if(this._typeMatches(Me,he[ve],N[be])){Ue=!0;break}if(!Ue){var vt=he.map(function(tt){return f[tt]}).join(",");throw new Error("TypeError: "+O+"() expected argument "+(be+1)+" to be type "+vt+" but received type "+f[Me]+" instead.")}}},_typeMatches:function(O,N,D){if(N===d)return!0;if(N===h||N===v||N===g){if(N===g)return O===g;if(O===g){var re;N===v?re=c:N===h&&(re=u);for(var he=0;he<D.length;he++)if(!this._typeMatches(this._getTypeName(D[he]),re,D[he]))return!1;return!0}}else return O===N},_getTypeName:function(O){switch(Object.prototype.toString.call(O)){case"[object String]":return u;case"[object Number]":return c;case"[object Array]":return g;case"[object Boolean]":return j;case"[object Null]":return x;case"[object Object]":return O.jmespathType===te?p:m}},_functionStartsWith:function(O){return O[0].lastIndexOf(O[1])===0},_functionEndsWith:function(O){var N=O[0],D=O[1];return N.indexOf(D,N.length-D.length)!==-1},_functionReverse:function(O){var N=this._getTypeName(O[0]);if(N===u){for(var D=O[0],re="",he=D.length-1;he>=0;he--)re+=D[he];return re}else{var Me=O[0].slice(0);return Me.reverse(),Me}},_functionAbs:function(O){return Math.abs(O[0])},_functionCeil:function(O){return Math.ceil(O[0])},_functionAvg:function(O){for(var N=0,D=O[0],re=0;re<D.length;re++)N+=D[re];return N/D.length},_functionContains:function(O){return O[0].indexOf(O[1])>=0},_functionFloor:function(O){return Math.floor(O[0])},_functionLength:function(O){return o(O[0])?Object.keys(O[0]).length:O[0].length},_functionMap:function(O){for(var N=[],D=this._interpreter,re=O[0],he=O[1],Me=0;Me<he.length;Me++)N.push(D.visit(re,he[Me]));return N},_functionMerge:function(O){for(var N={},D=0;D<O.length;D++){var re=O[D];for(var he in re)N[he]=re[he]}return N},_functionMax:function(O){if(O[0].length>0){var N=this._getTypeName(O[0][0]);if(N===c)return Math.max.apply(Math,O[0]);for(var D=O[0],re=D[0],he=1;he<D.length;he++)re.localeCompare(D[he])<0&&(re=D[he]);return re}else return null},_functionMin:function(O){if(O[0].length>0){var N=this._getTypeName(O[0][0]);if(N===c)return Math.min.apply(Math,O[0]);for(var D=O[0],re=D[0],he=1;he<D.length;he++)D[he].localeCompare(re)<0&&(re=D[he]);return re}else return null},_functionSum:function(O){for(var N=0,D=O[0],re=0;re<D.length;re++)N+=D[re];return N},_functionType:function(O){switch(this._getTypeName(O[0])){case c:return"number";case u:return"string";case g:return"array";case m:return"object";case j:return"boolean";case p:return"expref";case x:return"null"}},_functionKeys:function(O){return Object.keys(O[0])},_functionValues:function(O){for(var N=O[0],D=Object.keys(N),re=[],he=0;he<D.length;he++)re.push(N[D[he]]);return re},_functionJoin:function(O){var N=O[0],D=O[1];return D.join(N)},_functionToArray:function(O){return this._getTypeName(O[0])===g?O[0]:[O[0]]},_functionToString:function(O){return this._getTypeName(O[0])===u?O[0]:JSON.stringify(O[0])},_functionToNumber:function(O){var N=this._getTypeName(O[0]),D;return N===c?O[0]:N===u&&(D=+O[0],!isNaN(D))?D:null},_functionNotNull:function(O){for(var N=0;N<O.length;N++)if(this._getTypeName(O[N])!==x)return O[N];return null},_functionSort:function(O){var N=O[0].slice(0);return N.sort(),N},_functionSortBy:function(O){var N=O[0].slice(0);if(N.length===0)return N;var D=this._interpreter,re=O[1],he=this._getTypeName(D.visit(re,N[0]));if([c,u].indexOf(he)<0)throw new Error("TypeError");for(var Me=this,Ue=[],be=0;be<N.length;be++)Ue.push([be,N[be]]);Ue.sort(function(vt,tt){var Ee=D.visit(re,vt[1]),pt=D.visit(re,tt[1]);if(Me._getTypeName(Ee)!==he)throw new Error("TypeError: expected "+he+", received "+Me._getTypeName(Ee));if(Me._getTypeName(pt)!==he)throw new Error("TypeError: expected "+he+", received "+Me._getTypeName(pt));return Ee>pt?1:Ee<pt?-1:vt[0]-tt[0]});for(var ve=0;ve<Ue.length;ve++)N[ve]=Ue[ve][1];return N},_functionMaxBy:function(O){for(var N=O[1],D=O[0],re=this.createKeyFunction(N,[c,u]),he=-1/0,Me,Ue,be=0;be<D.length;be++)Ue=re(D[be]),Ue>he&&(he=Ue,Me=D[be]);return Me},_functionMinBy:function(O){for(var N=O[1],D=O[0],re=this.createKeyFunction(N,[c,u]),he=1/0,Me,Ue,be=0;be<D.length;be++)Ue=re(D[be]),Ue<he&&(he=Ue,Me=D[be]);return Me},createKeyFunction:function(O,N){var D=this,re=this._interpreter,he=function(Me){var Ue=re.visit(O,Me);if(N.indexOf(D._getTypeName(Ue))<0){var be="TypeError: expected one of "+N+", received "+D._getTypeName(Ue);throw new Error(be)}return Ue};return he}};function lt(O){var N=new Xe,D=N.parse(O);return D}function He(O){var N=new Je;return N.tokenize(O)}function _t(O,N){var D=new Xe,re=new Le,he=new Ne(re);re._interpreter=he;var Me=D.parse(N);return he.search(Me,O)}t.tokenize=He,t.compile=lt,t.search=_t,t.strictDeepEqual=s})(e)}(Qu)),Qu}Px();class zx{add(t,r,o){if(typeof arguments[0]!="string")for(let s in arguments[0])this.add(s,arguments[0][s],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(s){this[s]=this[s]||[],r&&this[s][o?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(o){o.call(r&&r.context?r.context:r,r)})}}class Rx{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach(s=>{if(typeof s!="object"||!s.name||!s.init)throw new Error("Invalid JSEP plugin format");this.registered[s.name]||(s.init(this.jsep),this.registered[s.name]=s)})}}class we{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+we.version}static addUnaryOp(t){return we.max_unop_len=Math.max(t.length,we.max_unop_len),we.unary_ops[t]=1,we}static addBinaryOp(t,r,o){return we.max_binop_len=Math.max(t.length,we.max_binop_len),we.binary_ops[t]=r,o?we.right_associative.add(t):we.right_associative.delete(t),we}static addIdentifierChar(t){return we.additional_identifier_chars.add(t),we}static addLiteral(t,r){return we.literals[t]=r,we}static removeUnaryOp(t){return delete we.unary_ops[t],t.length===we.max_unop_len&&(we.max_unop_len=we.getMaxKeyLen(we.unary_ops)),we}static removeAllUnaryOps(){return we.unary_ops={},we.max_unop_len=0,we}static removeIdentifierChar(t){return we.additional_identifier_chars.delete(t),we}static removeBinaryOp(t){return delete we.binary_ops[t],t.length===we.max_binop_len&&(we.max_binop_len=we.getMaxKeyLen(we.binary_ops)),we.right_associative.delete(t),we}static removeAllBinaryOps(){return we.binary_ops={},we.max_binop_len=0,we}static removeLiteral(t){return delete we.literals[t],we}static removeAllLiterals(){return we.literals={},we}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new we(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(r=>r.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return we.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!we.binary_ops[String.fromCharCode(t)]||we.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return we.isIdentifierStart(t)||we.isDecimalDigit(t)}throwError(t){const r=new Error(t+" at character "+this.index);throw r.index=this.index,r.description=t,r}runHook(t,r){if(we.hooks[t]){const o={context:this,node:r};return we.hooks.run(t,o),o.node}return r}searchHook(t){if(we.hooks[t]){const r={context:this};return we.hooks[t].find(function(o){return o.call(r.context,r),r.node}),r.node}}gobbleSpaces(){let t=this.code;for(;t===we.SPACE_CODE||t===we.TAB_CODE||t===we.LF_CODE||t===we.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),r=t.length===1?t[0]:{type:we.COMPOUND,body:t};return this.runHook("after-all",r)}gobbleExpressions(t){let r=[],o,s;for(;this.index<this.expr.length;)if(o=this.code,o===we.SEMCOL_CODE||o===we.COMMA_CODE)this.index++;else if(s=this.gobbleExpression())r.push(s);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return r}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,we.max_binop_len),r=t.length;for(;r>0;){if(we.binary_ops.hasOwnProperty(t)&&(!we.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!we.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=r,t;t=t.substr(0,--r)}return!1}gobbleBinaryExpression(){let t,r,o,s,a,i,l,c,d;if(i=this.gobbleToken(),!i||(r=this.gobbleBinaryOp(),!r))return i;for(a={value:r,prec:we.binaryPrecedence(r),right_a:we.right_associative.has(r)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+r),s=[i,a,l];r=this.gobbleBinaryOp();){if(o=we.binaryPrecedence(r),o===0){this.index-=r.length;break}a={value:r,prec:o,right_a:we.right_associative.has(r)},d=r;const u=g=>a.right_a&&g.right_a?o>g.prec:o<=g.prec;for(;s.length>2&&u(s[s.length-2]);)l=s.pop(),r=s.pop().value,i=s.pop(),t={type:we.BINARY_EXP,operator:r,left:i,right:l},s.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+d),s.push(a,t)}for(c=s.length-1,t=s[c];c>1;)t={type:we.BINARY_EXP,operator:s[c-1].value,left:s[c-2],right:t},c-=2;return t}gobbleToken(){let t,r,o,s;if(this.gobbleSpaces(),s=this.searchHook("gobble-token"),s)return this.runHook("after-token",s);if(t=this.code,we.isDecimalDigit(t)||t===we.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===we.SQUOTE_CODE||t===we.DQUOTE_CODE)s=this.gobbleStringLiteral();else if(t===we.OBRACK_CODE)s=this.gobbleArray();else{for(r=this.expr.substr(this.index,we.max_unop_len),o=r.length;o>0;){if(we.unary_ops.hasOwnProperty(r)&&(!we.isIdentifierStart(this.code)||this.index+r.length<this.expr.length&&!we.isIdentifierPart(this.expr.charCodeAt(this.index+r.length)))){this.index+=o;const a=this.gobbleToken();return a||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:we.UNARY_EXP,operator:r,argument:a,prefix:!0})}r=r.substr(0,--o)}we.isIdentifierStart(t)?(s=this.gobbleIdentifier(),we.literals.hasOwnProperty(s.name)?s={type:we.LITERAL,value:we.literals[s.name],raw:s.name}:s.name===we.this_str&&(s={type:we.THIS_EXP})):t===we.OPAREN_CODE&&(s=this.gobbleGroup())}return s?(s=this.gobbleTokenProperty(s),this.runHook("after-token",s)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let r=this.code;for(;r===we.PERIOD_CODE||r===we.OBRACK_CODE||r===we.OPAREN_CODE||r===we.QUMARK_CODE;){let o;if(r===we.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==we.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),r=this.code}this.index++,r===we.OBRACK_CODE?(t={type:we.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),r=this.code,r!==we.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):r===we.OPAREN_CODE?t={type:we.CALL_EXP,arguments:this.gobbleArguments(we.CPAREN_CODE),callee:t}:(r===we.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:we.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),r=this.code}return t}gobbleNumericLiteral(){let t="",r,o;for(;we.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===we.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);we.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(r=this.char,r==="e"||r==="E"){for(t+=this.expr.charAt(this.index++),r=this.char,(r==="+"||r==="-")&&(t+=this.expr.charAt(this.index++));we.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);we.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,we.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===we.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===we.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:we.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const r=this.index,o=this.expr.charAt(this.index++);let s=!1;for(;this.index<this.expr.length;){let a=this.expr.charAt(this.index++);if(a===o){s=!0;break}else if(a==="\\")switch(a=this.expr.charAt(this.index++),a){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=a}else t+=a}return s||this.throwError('Unclosed quote after "'+t+'"'),{type:we.LITERAL,value:t,raw:this.expr.substring(r,this.index)}}gobbleIdentifier(){let t=this.code,r=this.index;for(we.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,we.isIdentifierPart(t));)this.index++;return{type:we.IDENTIFIER,name:this.expr.slice(r,this.index)}}gobbleArguments(t){const r=[];let o=!1,s=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let a=this.code;if(a===t){o=!0,this.index++,t===we.CPAREN_CODE&&s&&s>=r.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(a===we.COMMA_CODE){if(this.index++,s++,s!==r.length){if(t===we.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===we.CBRACK_CODE)for(let i=r.length;i<s;i++)r.push(null)}}else if(r.length!==s&&s!==0)this.throwError("Expected comma");else{const i=this.gobbleExpression();(!i||i.type===we.COMPOUND)&&this.throwError("Expected comma"),r.push(i)}}return o||this.throwError("Expected "+String.fromCharCode(t)),r}gobbleGroup(){this.index++;let t=this.gobbleExpressions(we.CPAREN_CODE);if(this.code===we.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:we.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:we.ARRAY_EXP,elements:this.gobbleArguments(we.CBRACK_CODE)}}}const Nx=new zx;Object.assign(we,{hooks:Nx,plugins:new Rx(we),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});we.max_unop_len=we.getMaxKeyLen(we.unary_ops);we.max_binop_len=we.getMaxKeyLen(we.binary_ops);const Ba=e=>new we(e).parse(),Mx=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(we).filter(e=>!Mx.includes(e)&&Ba[e]===void 0).forEach(e=>{Ba[e]=we[e]});Ba.Jsep=we;const Tx="ConditionalExpression";var Ax={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===e.QUMARK_CODE){this.index++;const o=r.node,s=this.gobbleExpression();if(s||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const a=this.gobbleExpression();if(a||this.throwError("Expected expression"),r.node={type:Tx,test:o,consequent:s,alternate:a},o.operator&&e.binary_ops[o.operator]<=.9){let i=o;for(;i.right.operator&&e.binary_ops[i.right.operator]<=.9;)i=i.right;r.node.test=i.right,i.right=r.node,r.node=o}}else this.throwError("Expected :")}})}};Ba.plugins.register(Ax);const Np=47,Ix=92;var qx={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===Np){const o=++this.index;let s=!1;for(;this.index<this.expr.length;){if(this.code===Np&&!s){const a=this.expr.slice(o,this.index);let i="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)i+=this.char;else break}let l;try{l=new RegExp(a,i)}catch(c){this.throwError(c.message)}return r.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?s=!0:s&&this.code===e.CBRACK_CODE&&(s=!1),this.index+=this.code===Ix?2:1}this.throwError("Unclosed Regex")}})}};const Ju=43,Dx=45,Fs={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[Ju,Dx],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];Fs.assignmentOperators.forEach(o=>e.addBinaryOp(o,Fs.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(s){const a=this.code;Fs.updateOperators.some(i=>i===a&&i===this.expr.charCodeAt(this.index+1))&&(this.index+=2,s.node={type:"UpdateExpression",operator:a===Ju?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!s.node.argument||!t.includes(s.node.argument.type))&&this.throwError(`Unexpected ${s.node.operator}`))}),e.hooks.add("after-token",function(s){if(s.node){const a=this.code;Fs.updateOperators.some(i=>i===a&&i===this.expr.charCodeAt(this.index+1))&&(t.includes(s.node.type)||this.throwError(`Unexpected ${s.node.operator}`),this.index+=2,s.node={type:"UpdateExpression",operator:a===Ju?"++":"--",argument:s.node,prefix:!1})}}),e.hooks.add("after-expression",function(s){s.node&&r(s.node)});function r(o){Fs.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",r(o.left),r(o.right)):o.operator||Object.values(o).forEach(s=>{s&&typeof s=="object"&&r(s)})}}};Ba.plugins.register(qx,Fs);Ba.addUnaryOp("typeof");Ba.addLiteral("null",null);Ba.addLiteral("undefined",void 0);const Lx=nb({String:ho.string,Number:ho.number,"True False":ho.bool,PropertyName:ho.propertyName,Null:ho.null,",":ho.separator,"[ ]":ho.squareBracket,"{ }":ho.brace}),Ux=tb.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[Lx],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),Fx=ob.define({name:"json",parser:Ux.configure({props:[ab.add({Object:ov({except:/^\s*\}/}),Array:ov({except:/^\s*\]/})}),sb.add({"Object Array":ib})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function Vx(){return new rb(Fx)}function Bx(e,t=e.state){const r=new Set;for(const{from:o,to:s}of e.visibleRanges){let a=o;for(;a<=s;){const i=t.doc.lineAt(a);r.has(i)||r.add(i),a=i.to+1}}return r}function Od(e){const t=e.selection.main.head;return e.doc.lineAt(t)}function Mp(e,t){let r=0;e:for(let o=0;o<e.length;o++)switch(e[o]){case" ":case" ":{r+=1;continue e}case"	":{r+=t-r%t;continue e}case"\r":continue e;default:break e}return r}const qc=lb.define({combine(e){return cb(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}});class Wx{constructor(t,r,o,s){this.lines=t,this.state=r,this.map=new Map,this.unitWidth=o,this.markerType=s;for(const a of this.lines)this.add(a);this.state.facet(qc).highlightActiveBlock&&this.findAndSetActiveLines()}has(t){return this.map.has(typeof t=="number"?t:t.number)}get(t){const r=this.map.get(typeof t=="number"?t:t.number);if(!r)throw new Error("Line not found in indentation map");return r}set(t,r,o){const s=!t.text.trim().length,a={line:t,col:r,level:o,empty:s};return this.map.set(a.line.number,a),a}add(t){if(this.has(t))return this.get(t);if(!t.length||!t.text.trim().length){if(t.number===1)return this.set(t,0,0);if(t.number===this.state.doc.lines){const i=this.closestNonEmpty(t,-1);return this.set(t,0,i.level)}const s=this.closestNonEmpty(t,-1),a=this.closestNonEmpty(t,1);return s.level>=a.level&&this.markerType!=="codeOnly"?this.set(t,0,s.level):s.empty&&s.level===0&&a.level!==0?this.set(t,0,0):a.level>s.level?this.set(t,0,s.level+1):this.set(t,0,a.level)}const r=Mp(t.text,this.state.tabSize),o=Math.floor(r/this.unitWidth);return this.set(t,r,o)}closestNonEmpty(t,r){let o=t.number+r;for(;r===-1?o>=1:o<=this.state.doc.lines;){if(this.has(o)){const i=this.get(o);if(!i.empty)return i}const a=this.state.doc.line(o);if(a.text.trim().length){const i=Mp(a.text,this.state.tabSize),l=Math.floor(i/this.unitWidth);return this.set(a,i,l)}o+=r}const s=this.state.doc.line(r===-1?1:this.state.doc.lines);return this.set(s,0,0)}findAndSetActiveLines(){const t=Od(this.state);if(!this.has(t))return;let r=this.get(t);if(this.has(r.line.number+1)){const a=this.get(r.line.number+1);a.level>r.level&&(r=a)}if(this.has(r.line.number-1)){const a=this.get(r.line.number-1);a.level>r.level&&(r=a)}if(r.level===0)return;r.active=r.level;let o,s;for(o=r.line.number;o>1;o--){if(!this.has(o-1))continue;const a=this.get(o-1);if(a.level<r.level)break;a.active=r.level}for(s=r.line.number;s<this.state.doc.lines;s++){if(!this.has(s+1))continue;const a=this.get(s+1);if(a.level<r.level)break;a.active=r.level}}}function Hx(e){const t={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"};let r=t;return e&&(r=Object.assign(Object.assign({},t),e)),ds.baseTheme({"&light":{"--indent-marker-bg-color":r.light,"--indent-marker-active-bg-color":r.activeLight},"&dark":{"--indent-marker-bg-color":r.dark,"--indent-marker-active-bg-color":r.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function lc(e,t,r,o,s){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${r}ch)`} ${o*r}.5ch/calc(${r*s}ch - 1px) no-repeat`}function Kx(e,t,r,o,s){const{level:a,active:i}=e;if(s=s??o,r&&a===0)return[];const l=r?1:0,c=[];if(i!==void 0){const d=i-l-1;d>0&&c.push(lc("--indent-marker-bg-color",o,t,l,d)),c.push(lc("--indent-marker-active-bg-color",s,t,i-1,1)),i!==a&&c.push(lc("--indent-marker-bg-color",o,t,i,a-i))}else c.push(lc("--indent-marker-bg-color",o,t,l,a-l));return c.join(",")}class Qx{constructor(t){this.view=t,this.unitWidth=zc(t.state),this.currentLineNumber=Od(t.state).number,this.generate(t.state)}update(t){const r=zc(t.state),o=r!==this.unitWidth;o&&(this.unitWidth=r);const s=Od(t.state).number,a=s!==this.currentLineNumber;this.currentLineNumber=s;const i=t.state.facet(qc).highlightActiveBlock&&a;(t.docChanged||t.viewportChanged||o||i)&&this.generate(t.state)}generate(t){const r=new Yh,o=Bx(this.view,t),{hideFirstIndent:s,markerType:a,thickness:i,activeThickness:l}=t.facet(qc),c=new Wx(o,t,this.unitWidth,a);for(const d of o){const u=c.get(d.number);if(!u?.level)continue;const g=Kx(u,this.unitWidth,s,i,l);r.add(d.from,d.from,Xh.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${g}`}}))}this.decorations=r.finish()}}function Jx(e={}){return[qc.of(e),Hx(e.colors),Gh.fromClass(Qx,{decorations:t=>t.decorations})]}var Gx=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Yx=["mainAxis","crossAxis","limiter"];function Am(e,t){if(e==null)return{};var r,o,s=function(i,l){if(i==null)return{};var c={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(l.indexOf(d)!==-1)continue;c[d]=i[d]}return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function Tp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Tp(Object(r),!0).forEach(function(o){$d(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Ap(e,t,r,o,s,a,i){try{var l=e[a](i),c=l.value}catch(d){return void r(d)}l.done?t(c):Promise.resolve(c).then(o,s)}function kt(e){return function(){var t=this,r=arguments;return new Promise(function(o,s){var a=e.apply(t,r);function i(c){Ap(a,o,s,i,l,"next",c)}function l(c){Ap(a,o,s,i,l,"throw",c)}i(void 0)})}}function $d(e,t,r){return(t=function(o){var s=function(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var c=l.call(a,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}(o,"string");return typeof s=="symbol"?s:s+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ip,Gu,qp,Yu;typeof window<"u"&&((Gu=(Ip=(Yu=(qp=window).__svelte)!==null&&Yu!==void 0?Yu:qp.__svelte={}).v)!==null&&Gu!==void 0?Gu:Ip.v=new Set).add("5");var pi=!1;pi=!0;var Kr=Symbol(),hi=Array.isArray,Xx=Array.prototype.indexOf,Pd=Array.from,Zx=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,Im=Object.getOwnPropertyDescriptors,ew=Object.prototype,tw=Array.prototype,wf=Object.getPrototypeOf,Dp=Object.isExtensible;function zi(e){return typeof e=="function"}var Lp=()=>{};function nw(e){return e()}function Dc(e){for(var t=0;t<e.length;t++)e[t]()}var pu=32,qm=64,Ao=256,zd=512,xo=1024,si=2048,Es=4096,Da=8192,kf=16384,rl=65536,rw=1<<17,ow=1<<19,Rd=1<<20,aw=1<<21,ea=Symbol("$state"),Dm=Symbol("legacy props"),sw=Symbol(""),Lm=new class extends Error{constructor(){super(...arguments),$d(this,"name","StaleReactionError"),$d(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Um(e){return e===this.v}function Sf(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function iw(e,t){return e!==t}function Fm(e){return!Sf(e,this.v)}function ol(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var Hn=null;function Up(e){Hn=e}function Xa(e){return Vm().get(e)}function ct(e){Hn={p:Hn,c:null,e:null,s:e,x:null,l:null},pi&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])&&(Hn.l={s:null,u:null,r1:[],r2:js(!1)})}function ut(e){var t=Hn,r=t.e;if(r!==null)for(var o of(t.e=null,r))Ym(o);return e!==void 0&&(t.x=e),Hn=t.p,e??{}}function mi(){return!pi||Hn!==null&&Hn.l===null}function Vm(e){var t,r;return Hn===null&&ol(),(r=(t=Hn).c)!==null&&r!==void 0?r:t.c=new Map(function(o){for(var s=o.p;s!==null;){var a=s.c;if(a!==null)return a;s=s.p}return null}(Hn)||void 0)}function Qs(e){if(typeof e!="object"||e===null||ea in e)return e;var t=wf(e);if(t!==ew&&t!==tw)return e;var r=new Map,o=hi(e),s=da(0),a=ms,i=l=>{if(ms===a)return l();var c=cr,d=ms;Ha(null),Wp(a);var u=l();return Ha(c),Wp(d),u};return o&&r.set("length",da(e.length)),new Proxy(e,{defineProperty(l,c,d){"value"in d&&d.configurable!==!1&&d.enumerable!==!1&&d.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var u=r.get(c);return u===void 0?u=i(()=>{var g=da(d.value);return r.set(c,g),g}):S(u,d.value,!0),!0},deleteProperty(l,c){var d=r.get(c);if(d===void 0){if(c in l){var u=i(()=>da(Kr));r.set(c,u),Xu(s)}}else{if(o&&typeof c=="string"){var g=r.get("length"),m=Number(c);Number.isInteger(m)&&m<g.v&&S(g,m)}S(d,Kr),Xu(s)}return!0},get(l,c,d){var u;if(c===ea)return e;var g=r.get(c),m=c in l;if(g===void 0&&(!m||(u=ya(l,c))!==null&&u!==void 0&&u.writable)&&(g=i(()=>da(Qs(m?l[c]:Kr))),r.set(c,g)),g!==void 0){var j=n(g);return j===Kr?void 0:j}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var u=r.get(c);u&&(d.value=n(u))}else if(d===void 0){var g=r.get(c),m=g?.v;if(g!==void 0&&m!==Kr)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return d},has(l,c){var d;if(c===ea)return!0;var u=r.get(c),g=u!==void 0&&u.v!==Kr||Reflect.has(l,c);return(u!==void 0||Kn!==null&&(!g||(d=ya(l,c))!==null&&d!==void 0&&d.writable))&&(u===void 0&&(u=i(()=>da(g?Qs(l[c]):Kr)),r.set(c,u)),n(u)===Kr)?!1:g},set(l,c,d,u){var g,m=r.get(c),j=c in l;if(o&&c==="length")for(var p=d;p<m.v;p+=1){var x=r.get(p+"");x!==void 0?S(x,Kr):p in l&&(x=i(()=>da(Kr)),r.set(p+"",x))}m===void 0?(!j||(g=ya(l,c))!==null&&g!==void 0&&g.writable)&&(S(m=i(()=>da(void 0)),Qs(d)),r.set(c,m)):(j=m.v!==Kr,S(m,i(()=>Qs(d))));var v=Reflect.getOwnPropertyDescriptor(l,c);if(v!=null&&v.set&&v.set.call(u,d),!j){if(o&&typeof c=="string"){var h=r.get("length"),f=Number(c);Number.isInteger(f)&&f>=h.v&&S(h,f+1)}Xu(s)}return!0},ownKeys(l){n(s);var c=Reflect.ownKeys(l).filter(g=>{var m=r.get(g);return m===void 0||m.v!==Kr});for(var[d,u]of r)u.v===Kr||d in l||c.push(d);return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function Fp(e){try{if(e!==null&&typeof e=="object"&&ea in e)return e[ea]}catch{}return e}function lw(e,t){return Object.is(Fp(e),Fp(t))}function gi(e){var t=2050,r=cr!==null&&2&cr.f?cr:null;return Kn===null||r!==null&&(r.f&Ao)!==0?t|=Ao:Kn.f|=ow,{ctx:Hn,deps:null,effects:null,equals:Um,f:t,fn:e,reactions:null,rv:0,v:Kr,wv:0,parent:r??Kn,ac:null}}function ro(e){var t=gi(e);return sg(t),t}function Ce(e){var t=gi(e);return t.equals=Fm,t}function Bm(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Eo(t[r])}}function _f(e){var t,r=Kn;Ka(function(o){for(var s=o.parent;s!==null;){if(!(2&s.f))return s;s=s.parent}return null}(e));try{Bm(e),t=cg(e)}finally{Ka(r)}return t}function Wm(e){var t=_f(e);e.equals(t)||(e.v=t,e.wv=ig()),Wa||Fo(e,!Ta&&(e.f&Ao)===0||e.deps===null?xo:Es)}var ps=new Map;function js(e,t){return{f:0,v:e,reactions:null,equals:Um,rv:0,wv:0}}function da(e,t){var r=js(e);return sg(r),r}function Q(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=js(e);return o||(a.equals=Fm),pi&&s&&Hn!==null&&Hn.l!==null&&((r=(t=Hn.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function go(e,t){return S(e,Z(()=>n(e))),t}function S(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return cr===null||Go&&(cr.f&rw)===0||!mi()||!(131090&cr.f)||(r=xa)!==null&&r!==void 0&&r.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Nd(e,o?Qs(t):t)}function Nd(e,t){if(!e.equals(t)){var r=e.v;Wa?ps.set(e,t):ps.set(e,r),e.v=t,2&e.f&&((e.f&si)!==0&&_f(e),Fo(e,(e.f&Ao)===0?xo:Es)),e.wv=ig(),Hm(e,si),!mi()||Kn===null||(Kn.f&xo)===0||96&Kn.f||(wo===null?function(o){wo=o}([e]):wo.push(e))}return t}function Vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return S(e,r),o}function Xu(e){S(e,e.v+1)}function Hm(e,t){var r=e.reactions;if(r!==null)for(var o=mi(),s=r.length,a=0;a<s;a++){var i=r[a],l=i.f;(l&si)===0&&(o||i!==Kn)&&(Fo(i,t),1280&l&&(2&l?Hm(i,Es):yu(i)))}}var ja,Km,Qm,Jm;function hu(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function bo(e){return Qm.call(e)}function mu(e){return Jm.call(e)}function W(e,t){return bo(e)}function ht(e,t){var r=bo(e);return r instanceof Comment&&r.data===""?mu(r):r}function ae(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=mu(r);return r}function Gm(e){Kn===null&&cr===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),cr!==null&&(cr.f&Ao)!==0&&Kn===null&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Wa&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Za(e,t,r){var o=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],s=Kn,a={ctx:Hn,deps:null,nodes_start:null,nodes_end:null,f:e|si,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{bu(a),a.f|=32768}catch(c){throw Eo(a),c}else t!==null&&yu(a);if(!(r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&!(524416&a.f))&&o&&(s!==null&&function(c,d){var u=d.last;u===null?d.last=d.first=c:(u.next=c,c.prev=u,d.last=c)}(a,s),cr!==null&&2&cr.f)){var i,l=cr;((i=l.effects)!==null&&i!==void 0?i:l.effects=[]).push(a)}return a}function Cf(e){var t=Za(8,null,!1);return Fo(t,xo),t.teardown=e,t}function Md(e){if(Gm(),cr||!Kn||(Kn.f&pu)===0)return Ym(e);var t,r=Hn;((t=r.e)!==null&&t!==void 0?t:r.e=[]).push(e)}function Ym(e){return Za(2097156,e,!1)}function Lr(e){return Za(4,e,!1)}function ce(e,t){var r=Hn,o={effect:null,ran:!1};r.l.r1.push(o),o.effect=al(()=>{e(),o.ran||(o.ran=!0,S(r.l.r2,!0),Z(t))})}function En(){var e=Hn;al(()=>{if(n(e.l.r2)){for(var t of e.l.r1){var r=t.effect;(r.f&xo)!==0&&Fo(r,Es),sl(r)&&bu(r),t.ran=!1}e.l.r2.v=!1}})}function al(e){return Za(8,e,!0)}function Ae(e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gi,r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).map(t);return es(()=>e(...r.map(n)))}function es(e){return Za(24|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function oa(e){return Za(40,e,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function Xm(e){var t=e.teardown;if(t!==null){var r=Wa,o=cr;Bp(!0),Ha(null);try{t.call(null)}finally{Bp(r),Ha(o)}}}function Zm(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;for(e.first=e.last=null;r!==null;){var o;(o=r.ac)===null||o===void 0||o.abort(Lm);var s=r.next;(r.f&qm)!==0?r.parent=null:Eo(r,t),r=s}}function Eo(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;(t||262144&e.f)&&e.nodes_start!==null&&e.nodes_end!==null&&(eg(e.nodes_start,e.nodes_end),r=!0),Zm(e,t&&!r),Fc(e,0),Fo(e,kf);var o=e.transitions;if(o!==null)for(var s of o)s.stop();Xm(e);var a=e.parent;a!==null&&a.first!==null&&tg(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function eg(e,t){for(;e!==null;){var r=e===t?null:mu(e);e.remove(),e=r}}function tg(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function ii(e,t){var r=[];Ef(e,r,!0),ng(r,()=>{Eo(e),t&&t()})}function ng(e,t){var r=e.length;if(r>0){var o=()=>--r||t();for(var s of e)s.out(o)}else t()}function Ef(e,t,r){if((e.f&Da)===0){if(e.f^=Da,e.transitions!==null)for(var o of e.transitions)(o.is_global||r)&&t.push(o);for(var s=e.first;s!==null;){var a=s.next;Ef(s,t,((s.f&rl)!==0||(s.f&pu)!==0)&&r),s=a}}}function Lc(e){rg(e,!0)}function rg(e,t){if((e.f&Da)!==0){e.f^=Da;for(var r=e.first;r!==null;){var o=r.next;rg(r,((r.f&rl)!==0||(r.f&pu)!==0)&&t),r=o}if(e.transitions!==null)for(var s of e.transitions)(s.is_global||t)&&s.in()}}var Ui=[],Zu=[];function og(){var e=Ui;Ui=[],Dc(e)}function gu(e){Ui.length===0&&queueMicrotask(og),Ui.push(e)}function cw(){var e;Ui.length>0&&og(),Zu.length>0&&(e=Zu,Zu=[],Dc(e))}function ag(e,t){for(;t!==null;){if(128&t.f)try{return void t.b.error(e)}catch{}t=t.parent}throw e}var Fi=!1,Vi=null,hs=!1,Wa=!1;function Bp(e){Wa=e}var qi=[],cr=null,Go=!1;function Ha(e){cr=e}var Kn=null;function Ka(e){Kn=e}var xa=null;function sg(e){cr!==null&&cr.f&Rd&&(xa===null?xa=[e]:xa.push(e))}var Zr=null,po=0,wo=null,Uc=1,Bi=0,ms=Bi;function Wp(e){ms=e}var Ta=!1;function ig(){return++Uc}function sl(e){var t=e.f;if((t&si)!==0)return!0;if((t&Es)!==0){var r=e.deps,o=(t&Ao)!==0;if(r!==null){var s,a,i=(t&zd)!==0,l=o&&Kn!==null&&!Ta,c=r.length;if(i||l){var d=e,u=d.parent;for(s=0;s<c;s++){var g,m,j;a=r[s],(i||(g=a)===null||g===void 0||(g=g.reactions)===null||g===void 0||!g.includes(d))&&((j=(m=a).reactions)!==null&&j!==void 0?j:m.reactions=[]).push(d)}i&&(d.f^=zd),l&&u!==null&&(u.f&Ao)===0&&(d.f^=Ao)}for(s=0;s<c;s++)if(sl(a=r[s])&&Wm(a),a.wv>e.wv)return!0}o&&(Kn===null||Ta)||Fo(e,xo)}return!1}function lg(e,t){var r,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],s=e.reactions;if(s!==null&&((r=xa)===null||r===void 0||!r.includes(e)))for(var a=0;a<s.length;a++){var i=s[a];2&i.f?lg(i,t,!1):t===i&&(o?Fo(i,si):(i.f&xo)!==0&&Fo(i,Es),yu(i))}}function cg(e){var t=Zr,r=po,o=wo,s=cr,a=Ta,i=xa,l=Hn,c=Go,d=ms,u=e.f;Zr=null,po=0,wo=null,Ta=(u&Ao)!==0&&(Go||!hs||cr===null),cr=96&u?null:e,xa=null,Up(e.ctx),Go=!1,ms=++Bi,e.f|=Rd,e.ac!==null&&(e.ac.abort(Lm),e.ac=null);try{var g=(0,e.fn)(),m=e.deps;if(Zr!==null){var j;if(Fc(e,po),m!==null&&po>0)for(m.length=po+Zr.length,j=0;j<Zr.length;j++)m[po+j]=Zr[j];else e.deps=m=Zr;if(!Ta||2&u&&e.reactions!==null)for(j=po;j<m.length;j++){var p,x;((x=(p=m[j]).reactions)!==null&&x!==void 0?x:p.reactions=[]).push(e)}}else m!==null&&po<m.length&&(Fc(e,po),m.length=po);if(mi()&&wo!==null&&!Go&&m!==null&&!(6146&e.f))for(j=0;j<wo.length;j++)lg(wo[j],e);return s!==null&&s!==e&&(Bi++,wo!==null&&(o===null?o=wo:o.push(...wo))),g}catch(v){(function(h){var f=Kn;if(32768&f.f)ag(h,f);else{if(!(128&f.f))throw h;f.fn(h)}})(v)}finally{Zr=t,po=r,wo=o,cr=s,Ta=a,xa=i,Up(l),Go=c,ms=d,e.f^=Rd}}function uw(e,t){var r=t.reactions;if(r!==null){var o=Xx.call(r,e);if(o!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[o]=r[s],r.pop())}}r===null&&2&t.f&&(Zr===null||!Zr.includes(t))&&(Fo(t,Es),768&t.f||(t.f^=zd),Bm(t),Fc(t,0))}function Fc(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)uw(e,r[o])}function bu(e){var t=e.f;if((t&kf)===0){Fo(e,xo);var r=Kn,o=hs;Kn=e,hs=!0;try{16&t?function(a){for(var i=a.first;i!==null;){var l=i.next;(i.f&pu)===0&&Eo(i),i=l}}(e):Zm(e),Xm(e);var s=cg(e);e.teardown=typeof s=="function"?s:null,e.wv=Uc}finally{hs=o,Kn=r}}}function dw(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){if(Vi===null)throw e;ag(e,Vi)}}function ug(){var e=hs;try{var t=0;for(hs=!0;qi.length>0;){t++>1e3&&dw();var r=qi,o=r.length;qi=[];for(var s=0;s<o;s++)fw(vw(r[s]));ps.clear()}}finally{Fi=!1,hs=e,Vi=null}}function fw(e){var t=e.length;if(t!==0){for(var r=0;r<t;r++){var o=e[r];if(!(24576&o.f)&&sl(o)){var s=Uc;if(bu(o),o.deps===null&&o.first===null&&o.nodes_start===null&&(o.teardown===null?tg(o):o.fn=null),Uc>s&&(o.f&aw)!==0)break}}for(;r<t;r+=1)yu(e[r])}}function yu(e){Fi||(Fi=!0,queueMicrotask(ug));for(var t=Vi=e;t.parent!==null;){var r=(t=t.parent).f;if(96&r){if((r&xo)===0)return;t.f^=xo}}qi.push(t)}function vw(e){for(var t=[],r=e;r!==null;){var o=r.f,s=!!(96&o);if(!(s&&(o&xo)!==0)&&(o&Da)===0){4&o?t.push(r):s?r.f^=xo:sl(r)&&bu(r);var a=r.first;if(a!==null){r=a;continue}}var i=r.parent;for(r=r.next;r===null&&i!==null;)r=i.next,i=i.parent}return t}function Yn(e){for(;;){if(cw(),qi.length===0)return Fi=!1,void(Vi=null);Fi=!0,ug()}}function dg(){return(dg=kt(function*(){yield Promise.resolve(),Yn()})).apply(this,arguments)}function n(e){var t,r=!!(2&e.f);if(cr===null||Go){if(r&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&Ao)===0&&(o.f^=Ao)}}else if((t=xa)===null||t===void 0||!t.includes(e)){var a=cr.deps;e.rv<Bi&&(e.rv=Bi,Zr===null&&a!==null&&a[po]===e?po++:Zr===null?Zr=[e]:Ta&&Zr.includes(e)||Zr.push(e))}if(r&&!Wa&&sl(o=e)&&Wm(o),Wa){if(ps.has(e))return ps.get(e);if(r){var i=(o=e).v;return((o.f&xo)!==0||fg(o))&&(i=_f(o)),ps.set(o,i),i}}return e.v}function fg(e){if(e.v===Kr)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(ps.has(t)||2&t.f&&fg(t))return!0;return!1}function Z(e){var t=Go;try{return Go=!0,e()}finally{Go=t}}var pw=-7169;function Fo(e,t){e.f=e.f&pw|t}function C(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(ea in e)Td(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&ea in r&&Td(r)}}}function Td(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{Td(e[r],t)}catch{}var o=wf(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var s=Im(o);for(var a in s){var i=s[a].get;if(i)try{i.call(e)}catch{}}}}}var Hp=!1;function vg(e){var t=cr,r=Kn;Ha(null),Ka(null);try{return e()}finally{Ha(t),Ka(r)}}function hw(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>vg(r));var s=e.__on_r;e.__on_r=s?()=>{s(),o(!0)}:()=>o(!0),Hp||(Hp=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{if(!a.defaultPrevented)for(var i of a.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}var pg=new Set,Ad=new Set;function hg(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function s(a){if(o.capture||Mi.call(t,a),!a.cancelBubble)return vg(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?gu(()=>{t.addEventListener(e,s,o)}):t.addEventListener(e,s,o),s}function Re(e,t,r,o,s){var a={capture:o,passive:s},i=hg(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Cf(()=>{t.removeEventListener(e,i,a)})}function il(e){for(var t=0;t<e.length;t++)pg.add(e[t]);for(var r of Ad)r(e)}function Mi(e){var t,r=this,o=r.ownerDocument,s=e.type,a=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=a[0]||e.target,l=0,c=e.__root;if(c){var d=a.indexOf(c);if(d!==-1&&(r===document||r===window))return void(e.__root=r);var u=a.indexOf(r);if(u===-1)return;d<=u&&(l=d)}if((i=a[l]||e.target)!==r){Zx(e,"currentTarget",{configurable:!0,get:()=>i||o});var g=cr,m=Kn;Ha(null),Ka(null);try{for(var j,p=[];i!==null;){var x=i.assignedSlot||i.parentNode||i.host||null;try{var v=i["__"+s];if(v!=null&&(!i.disabled||e.target===i))if(hi(v)){var[h,...f]=v;h.apply(i,[e,...f])}else v.call(i,e)}catch(b){j?p.push(b):j=b}if(e.cancelBubble||x===r||x===null)break;i=x}if(j){var y=function(b){queueMicrotask(()=>{throw b})};for(var w of p)y(w);throw j}}finally{e.__root=r,delete e.currentTarget,Ha(g),Ka(m)}}}function Of(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function xs(e,t){var r=Kn;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function de(e,t){var r,o=!!(1&t),s=!!(2&t),a=!e.startsWith("<!>");return()=>{r===void 0&&(r=Of(a?e:"<!>"+e),o||(r=bo(r)));var i=s||Km?document.importNode(r,!0):r.cloneNode(!0);return o?xs(bo(i),i.lastChild):xs(i,i),i}}function ts(e,t){return function(r,o){var s,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",i=!r.startsWith("<!>"),l=!!(1&o),c="<".concat(a,">").concat(i?r:"<!>"+r,"</").concat(a,">");return()=>{if(!s){var d=bo(Of(c));if(l)for(s=document.createDocumentFragment();bo(d);)s.appendChild(bo(d));else s=bo(d)}var u=s.cloneNode(!0);return l?xs(bo(u),u.lastChild):xs(u,u),u}}(e,t,"svg")}function Tr(){var e=hu((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return xs(e,e),e}function lr(){var e=document.createDocumentFragment(),t=document.createComment(""),r=hu();return e.append(t,r),xs(t,r),e}function X(e,t){e!==null&&e.before(t)}var mw=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],gw={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},bw=["touchstart","touchmove"];function yw(e){return bw.includes(e)}function dt(e,t){var r,o=t==null?"":typeof t=="object"?t+"":t;o!==((r=e.__t)!==null&&r!==void 0?r:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function jw(e,t){return function(r,o){var{target:s,anchor:a,props:i={},events:l,context:c}=o;(function(){if(ja===void 0){ja=window,Km=/Firefox/.test(navigator.userAgent);var j=Element.prototype,p=Node.prototype,x=Text.prototype;Qm=ya(p,"firstChild").get,Jm=ya(p,"nextSibling").get,Dp(j)&&(j.__click=void 0,j.__className=void 0,j.__attributes=null,j.__style=void 0,j.__e=void 0),Dp(x)&&(x.__t=void 0)}})();var d=new Set,u=j=>{for(var p=0;p<j.length;p++){var x=j[p];if(!d.has(x)){d.add(x);var v=yw(x);s.addEventListener(x,Mi,{passive:v});var h=Ts.get(x);h===void 0?(document.addEventListener(x,Mi,{passive:v}),Ts.set(x,1)):Ts.set(x,h+1)}}};u(Pd(pg)),Ad.add(u);var g=void 0,m=function(j){var p=Za(qm,j,!0);return function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(v=>{x.outro?ii(p,()=>{Eo(p),v(void 0)}):(Eo(p),v(void 0))})}}(()=>{var j=a??s.appendChild(hu());return oa(()=>{c&&(ct({}),Hn.c=c),l&&(i.$$events=l),g=r(j,i)||{},c&&ut()}),()=>{for(var p of d){s.removeEventListener(p,Mi);var x=Ts.get(p);--x===0?(document.removeEventListener(p,Mi),Ts.delete(p)):Ts.set(p,x)}var v;Ad.delete(u),j!==a&&((v=j.parentNode)===null||v===void 0||v.removeChild(j))}});return Id.set(g,m),g}(e,t)}var Ts=new Map,Id=new WeakMap;function Qr(e){Hn===null&&ol(),pi&&Hn.l!==null?mg(Hn).m.push(e):Md(()=>{var t=Z(e);if(typeof t=="function")return t})}function Oo(e){Hn===null&&ol(),Qr(()=>()=>Z(e))}function xw(){var e=Hn;return e===null&&ol(),(t,r,o)=>{var s,a=(s=e.s.$$events)===null||s===void 0?void 0:s[t];if(a){var i=hi(a)?a.slice():[a],l=function(d,u){var{bubbles:g=!1,cancelable:m=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(d,{detail:u,bubbles:g,cancelable:m})}(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function ww(e){Hn===null&&ol(),Hn.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),mg(Hn).b.push(e)}function mg(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}function ye(e,t){var[r,o]=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],s=e,a=null,i=null,l=Kr,c=!1,d=function(g){c=!0,u(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],g)},u=(g,m)=>{l!==(l=g)&&(l?(a?Lc(a):m&&(a=oa(()=>m(s))),i&&ii(i,()=>{i=null})):(i?Lc(i):m&&(i=oa(()=>m(s,[r+1,o]))),a&&ii(a,()=>{a=null})))};es(()=>{c=!1,t(d),c||u(null,null)},r>0?rl:0)}function gg(e,t,r){var o,s=e,a=Kr,i=mi()?iw:Sf;es(()=>{i(a,a=t())&&(o&&ii(o),o=oa(()=>r(s)))})}function wr(e,t){return t}function pr(e,t,r,o,s){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l={flags:t,items:new Map,first:null};!(4&t)||(i=e.appendChild(hu()));var c=null,d=!1,u=Ce(()=>{var g=r();return hi(g)?g:g==null?[]:Pd(g)});es(()=>{var g=n(u),m=g.length;d&&m===0||(d=m===0,function(j,p,x,v,h,f,y){var w,b,k,$,M,z,H=!!(8&h),G=!!(3&h),ee=j.length,te=p.items,je=p.first,B=je,pe=null,$e=[],ke=[];if(H)for(z=0;z<ee;z+=1){var me;$=f(k=j[z],z),(M=te.get($))!==void 0&&((me=M.a)===null||me===void 0||me.measure(),(b??(b=new Set)).add(M))}for(z=0;z<ee;z+=1)if($=f(k=j[z],z),(M=te.get($))!==void 0){var Y;if(G&&kw(M,k,z,h),(M.e.f&Da)!==0&&(Lc(M.e),H&&((Y=M.a)===null||Y===void 0||Y.unfix(),(b??(b=new Set)).delete(M))),M!==B){if(w!==void 0&&w.has(M)){if($e.length<ke.length){var I,se=ke[0];pe=se.prev;var T=$e[0],E=$e[$e.length-1];for(I=0;I<$e.length;I+=1)Kp($e[I],se,x);for(I=0;I<ke.length;I+=1)w.delete(ke[I]);$a(p,T.prev,E.next),$a(p,pe,T),$a(p,E,se),B=se,pe=E,z-=1,$e=[],ke=[]}else w.delete(M),Kp(M,B,x),$a(p,M.prev,M.next),$a(p,M,pe===null?p.first:pe.next),$a(p,pe,M),pe=M;continue}for($e=[],ke=[];B!==null&&B.k!==$;)(B.e.f&Da)===0&&(w??(w=new Set)).add(B),ke.push(B),B=B.next;if(B===null)continue;M=B}$e.push(M),pe=M,B=M.next}else pe=Sw(B?B.e.nodes_start:x,p,pe,pe===null?p.first:pe.next,k,$,z,v,h,y),te.set($,pe),$e=[],ke=[],B=pe.next;if(B!==null||w!==void 0){for(var R=w===void 0?[]:Pd(w);B!==null;)(B.e.f&Da)===0&&R.push(B),B=B.next;var ne=R.length;if(ne>0){var Se=4&h&&ee===0?x:null;if(H){for(z=0;z<ne;z+=1){var K;(K=R[z].a)===null||K===void 0||K.measure()}for(z=0;z<ne;z+=1){var F;(F=R[z].a)===null||F===void 0||F.fix()}}(function(ie,P,U,L){for(var fe=[],J=P.length,V=0;V<J;V++)Ef(P[V].e,fe,!0);var Ze=J>0&&fe.length===0&&U!==null;if(Ze){var Je=U.parentNode;Je.textContent="",Je.append(U),L.clear(),$a(ie,P[0].prev,P[J-1].next)}ng(fe,()=>{for(var Oe=0;Oe<J;Oe++){var Xe=P[Oe];Ze||(L.delete(Xe.k),$a(ie,Xe.prev,Xe.next)),Eo(Xe.e,!Ze)}})})(p,R,Se,te)}}H&&gu(()=>{if(b!==void 0)for(M of b){var ie;(ie=M.a)===null||ie===void 0||ie.apply()}}),Kn.first=p.first&&p.first.e,Kn.last=pe&&pe.e}(g,l,i,s,t,o,r),a!==null&&(m===0?c?Lc(c):c=oa(()=>a(i)):c!==null&&ii(c,()=>{c=null})),n(u))})}function kw(e,t,r,o){1&o&&Nd(e.v,t),2&o?Nd(e.i,r):e.i=r}function Sw(e,t,r,o,s,a,i,l,c,d){var u=1&c?16&c?js(s):Q(s,!1,!1):s,g=2&c?js(i):i,m={i:g,v:u,k:a,a:null,e:null,prev:r,next:o};try{return m.e=oa(()=>l(e,u,g,d),!1),m.e.prev=r&&r.e,m.e.next=o&&o.e,r===null?t.first=m:(r.next=m,r.e.next=m.e),o!==null&&(o.prev=m,o.e.prev=m.e),m}finally{}}function Kp(e,t,r){for(var o=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==o;){var i=mu(a);s.before(a),a=i}}function $a(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function bg(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],s=e,a="";Ae(()=>{var i,l=Kn;if(a!==(a=(i=t())!==null&&i!==void 0?i:"")&&(l.nodes_start!==null&&(eg(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),a!=="")){var c=a+"";r?c="<svg>".concat(c,"</svg>"):o&&(c="<math>".concat(c,"</math>"));var d=Of(c);if((r||o)&&(d=bo(d)),xs(bo(d),d.lastChild),r||o)for(;bo(d);)s.before(bo(d));else s.before(d)}})}function fr(e,t,r,o,s){var a,i=(a=t.$$slots)===null||a===void 0?void 0:a[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?s!==null&&s(e):i(e,l?()=>o:o)}function yg(e,t,r){var o,s,a=e;es(()=>{o!==(o=t())&&(s&&(ii(s),s=null),o&&(s=oa(()=>r(a,o))))},rl)}function Yr(e,t,r){Lr(()=>{var o=Z(()=>t(e,r?.())||{});if(r&&o!=null&&o.update){var s=!1,a={};al(()=>{var i=r();C(i),s&&Sf(a,i)&&(a=i,o.update(i))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function _w(e,t){var r,o=void 0;es(()=>{o!==(o=t())&&(r&&(Eo(r),r=null),o&&(r=oa(()=>{Lr(()=>o(e))})))})}function jg(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=jg(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Qa(e){return typeof e=="object"?function(){for(var t,r,o=0,s="",a=arguments.length;o<a;o++)(t=arguments[o])&&(r=jg(t))&&(s&&(s+=" "),s+=r);return s}(e):e??""}var Qp=[...` 	
\r\f \v\uFEFF`];function Jp(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function ed(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Pt(e,t,r,o,s,a){var i=e.__className;if(i!==r||i===void 0){var l=function(u,g,m){var j=u==null?"":""+u;if(g&&(j=j?j+" "+g:g),m){for(var p in m)if(m[p])j=j?j+" "+p:p;else if(j.length)for(var x=p.length,v=0;(v=j.indexOf(p,v))>=0;){var h=v+x;v!==0&&!Qp.includes(j[v-1])||h!==j.length&&!Qp.includes(j[h])?v=h:j=(v===0?"":j.substring(0,v))+j.substring(h+1)}}return j===""?null:j}(r,o,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var d=!!a[c];s!=null&&d===!!s[c]||e.classList.toggle(c,d)}return a}function td(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,o))}}function Io(e,t,r,o){if(e.__style!==t){var s=function(a,i){if(i){var l,c,d="";if(Array.isArray(i)?(l=i[0],c=i[1]):l=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,g=0,m=!1,j=[];l&&j.push(...Object.keys(l).map(ed)),c&&j.push(...Object.keys(c).map(ed));for(var p=0,x=-1,v=a.length,h=0;h<v;h++){var f=a[h];if(m?f==="/"&&a[h-1]==="*"&&(m=!1):u?u===f&&(u=!1):f==="/"&&a[h+1]==="*"?m=!0:f==='"'||f==="'"?u=f:f==="("?g++:f===")"&&g--,!m&&u===!1&&g===0){if(f===":"&&x===-1)x=h;else if(f===";"||h===v-1){if(x!==-1){var y=ed(a.substring(p,x).trim());j.includes(y)||(f!==";"&&h++,d+=" "+a.substring(p,h).trim()+";")}p=h+1,x=-1}}}}return l&&(d+=Jp(l)),c&&(d+=Jp(c,!0)),(d=d.trim())===""?null:d}return a==null?null:String(a)}(t,o);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else o&&(Array.isArray(o)?(td(e,r?.[0],o[0]),td(e,r?.[1],o[1],"important")):td(e,r,o));return o}function qd(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!hi(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(Gp(o))}else{for(o of e.options)if(lw(Gp(o),t))return void(o.selected=!0);r&&t===void 0||(e.selectedIndex=-1)}}function Cw(e){var t=new MutationObserver(()=>{qd(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Cf(()=>{t.disconnect()})}function Gp(e){return"__value"in e?e.__value:e.value}var Vs=Symbol("class"),Ri=Symbol("style"),xg=Symbol("is custom element"),wg=Symbol("is html");function ws(e,t){var r=$f(e);r.value!==(r.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function Cn(e,t,r,o){var s=$f(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[sw]=r),r==null?e.removeAttribute(t):typeof r!="string"&&kg(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Ew(e,t,r,o){var s,a=$f(e),i=a[xg],l=!a[wg],c=t||{},d=e.tagName==="OPTION";for(var u in t)u in r||(r[u]=null);r.class?r.class=Qa(r.class):(o||r[Vs])&&(r.class=null),r[Ri]&&((s=r.style)!==null&&s!==void 0||(r.style=null));var g,m,j,p,x,v,h=kg(e),f=function(w){var b=r[w];if(d&&w==="value"&&b==null)return e.value=e.__value="",c[w]=b,0;if(w==="class")return g=e.namespaceURI==="http://www.w3.org/1999/xhtml",Pt(e,g,b,o,t?.[Vs],r[Vs]),c[w]=b,c[Vs]=r[Vs],0;if(w==="style")return Io(e,b,t?.[Ri],r[Ri]),c[w]=b,c[Ri]=r[Ri],0;if(b===(m=c[w])&&(b!==void 0||!e.hasAttribute(w))||(c[w]=b,(j=w[0]+w[1])==="$$"))return 0;if(j==="on"){var k={},$="$$"+w,M=w.slice(2);if(p=function(te){return mw.includes(te)}(M),function(te){return te.endsWith("capture")&&te!=="gotpointercapture"&&te!=="lostpointercapture"}(M)&&(M=M.slice(0,-7),k.capture=!0),!p&&m){if(b!=null)return 0;e.removeEventListener(M,c[$],k),c[$]=null}if(b!=null)if(p)e["__".concat(M)]=b,il([M]);else{let te=function(je){c[w].call(this,je)};c[$]=hg(M,e,te,k)}else p&&(e["__".concat(M)]=void 0)}else if(w==="style")Cn(e,w,b);else if(w==="autofocus")(function(te,je){if(je){var B=document.body;te.autofocus=!0,gu(()=>{document.activeElement===B&&te.focus()})}})(e,!!b);else if(i||w!=="__value"&&(w!=="value"||b==null))if(w==="selected"&&d)(function(te,je){je?te.hasAttribute("selected")||te.setAttribute("selected",""):te.removeAttribute("selected")})(e,b);else if(x=w,l||(x=function(te){var je;return te=te.toLowerCase(),(je=gw[te])!==null&&je!==void 0?je:te}(x)),v=x==="defaultValue"||x==="defaultChecked",b!=null||i||v)v||h.includes(x)&&(i||typeof b!="string")?e[x]=b:typeof b!="function"&&Cn(e,x,b);else if(a[w]=null,x==="value"||x==="checked"){var z=e,H=t===void 0;if(x==="value"){var G=z.defaultValue;z.removeAttribute(x),z.defaultValue=G,z.value=z.__value=H?G:null}else{var ee=z.defaultChecked;z.removeAttribute(x),z.defaultChecked=ee,z.checked=!!H&&ee}}else e.removeAttribute(w);else e.value=e.__value=b};for(var y in r)f(y);return c}function _c(e,t){var r=arguments.length>3?arguments[3]:void 0,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:gi,s=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[]).map(o),a=void 0,i={},l=e.nodeName==="SELECT",c=!1;if(es(()=>{var u=t(...s.map(n)),g=Ew(e,a,u,r);for(var m of(c&&l&&"value"in u&&qd(e,u.value),Object.getOwnPropertySymbols(i)))u[m]||Eo(i[m]);for(var j of Object.getOwnPropertySymbols(u)){var p=u[j];j.description!=="@attach"||a&&p===a[j]||(i[j]&&Eo(i[j]),i[j]=oa(()=>_w(e,()=>p))),g[j]=p}a=g}),l){var d=e;Lr(()=>{qd(d,a.value,!0),Cw(d)})}c=!0}function $f(e){var t;return(t=e.__attributes)!==null&&t!==void 0?t:e.__attributes={[xg]:e.nodeName.includes("-"),[wg]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var Yp=new Map;function kg(e){var t,r=Yp.get(e.nodeName);if(r)return r;Yp.set(e.nodeName,r=[]);for(var o=e,s=Element.prototype;s!==o;){for(var a in t=Im(o))t[a].set&&r.push(a);o=wf(o)}return r}function Vc(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=mi();hw(e,"input",s=>{var a=s?e.defaultValue:e.value;if(a=nd(e)?rd(a):a,r(a),o&&a!==(a=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Z(t)==null&&e.value&&r(nd(e)?rd(e.value):e.value),al(()=>{var s=t();nd(e)&&s===rd(e.value)||(e.type!=="date"||s||e.value)&&s!==e.value&&(e.value=s??"")})}function nd(e){var t=e.type;return t==="number"||t==="range"}function rd(e){return e===""?null:+e}function bt(e,t,r){var o=ya(e,t);o&&o.set&&(e[t]=r,Cf(()=>{e[t]=null}))}function Xp(e,t){return e===t||e?.[ea]===t}function er(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Lr(()=>{var o,s;return al(()=>{o=s,s=[],Z(()=>{e!==r(...s)&&(t(e,...s),o&&Xp(r(...o),e)&&t(null,...o))})}),()=>{gu(()=>{s&&Xp(r(...s),e)&&t(null,...s)})}}),e}function fa(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e?.apply(this,r)}}function Pa(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e?.apply(this,r)}}function zt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Hn,r=t.l.u;if(r){var o,s=()=>C(t.s);if(e){var a=0,i={},l=gi(()=>{var c=!1,d=t.s;for(var u in d)d[u]!==i[u]&&(i[u]=d[u],c=!0);return c&&a++,a});s=()=>n(l)}r.b.length&&(o=()=>{Zp(t,s),Dc(r.b)},Gm(),Za(2097160,o,!0)),Md(()=>{var c=Z(()=>r.m.map(nw));return()=>{for(var d of c)typeof d=="function"&&d()}}),r.a.length&&Md(()=>{Zp(t,s),Dc(r.a)})}}function Zp(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function ju(e){var t=js(0);return function(){return arguments.length===1?(S(t,n(t)+1),arguments[0]):(n(t),e())}}function Ti(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],s=hi(o)?o.slice():o==null?[]:[o];for(var a of s)a.call(this,t)}var cc=!1,Ow={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var o=Kn;try{Ka(e.parent_effect),e.special[t]=_({get[t](){return e.props[t]}},t,4)}finally{Ka(o)}}return e.special[t](r),Vp(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Vp(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function uc(e,t){return new Proxy({props:e,exclude:t,special:{},version:js(0),parent_effect:Kn},Ow)}var $w={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(zi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var s=e.props[o];zi(s)&&(s=s());var a=ya(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(zi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var s=ya(o,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===ea||t===Dm)return!1;for(var r of e.props)if(zi(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)if(zi(r)&&(r=r()),r){for(var o in r)t.includes(o)||t.push(o);for(var s of Object.getOwnPropertySymbols(r))t.includes(s)||t.push(s)}return t}};function La(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},$w)}function _(e,t,r,o){var s,a,i=!pi||!!(2&r),l=!!(8&r),c=!!(16&r),d=o,u=!0,g=()=>(u&&(u=!1,d=c?Z(o):o),d);if(l){var m,j,p=ea in e||Dm in e;s=(m=(j=ya(e,t))===null||j===void 0?void 0:j.set)!==null&&m!==void 0?m:p&&t in e?b=>e[t]=b:void 0}var x,v=!1;if(l?[a,v]=function(b){var k=cc;try{return cc=!1,[b(),cc]}finally{cc=k}}(()=>e[t]):a=e[t],a===void 0&&o!==void 0&&(a=g(),s&&(i&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),s(a))),x=i?()=>{var b=e[t];return b===void 0?g():(u=!0,b)}:()=>{var b=e[t];return b!==void 0&&(d=void 0),b===void 0?d:b},i&&!(4&r))return x;if(s){var h=e.$$legacy;return function(b,k){return arguments.length>0?(i&&k&&!h&&!v||s(k?x():b),b):x()}}var f=!1,y=(1&r?gi:Ce)(()=>(f=!1,x()));l&&n(y);var w=Kn;return function(b,k){if(arguments.length>0){var $=k?n(y):i&&l?Qs(b):b;return S(y,$),f=!0,d!==void 0&&(d=$),b}return Wa&&f||(w.f&kf)!==0?y.v:n(y)}}function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var s=function(a){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[a]}catch{}}("debug");return s!=null&&s.endsWith("*")?o.startsWith(s.slice(0,-1)):o===s}(e);if(!t)return Pw;var r=function(o){for(var s=0,a=0;a<o.length;a++)s=(s<<5)-s+o.charCodeAt(a),s|=0;return eh[Math.abs(s)%eh.length]}(e);return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];console.log("%c".concat(e),"color:".concat(r),...s)}}function Pw(){}var eh=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],zw=0;function Js(){return++zw}function Ur(e){return parseInt(e,10)}function Pf(e){return Rw.test(e)}var Rw=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function xn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function ir(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function Nw(e){return e===!0||e===!1}function Dd(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return Dd(Number(e));try{var t=e&&e.valueOf();if(t!==e)return Dd(t)}catch{return!1}return!1}function Sg(e){(dc=dc||window.document.createElement("div")).style.color="",dc.style.color=e;var t=dc.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var dc=void 0;function Mw(e){return typeof e=="string"&&e.length<99&&!!Sg(e)}function zf(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(xn(e))return"object";var r=t.stringify(e);return r&&Pf(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var Tw=/^https?:\/\/\S+$/;function xu(e){return typeof e=="string"&&Tw.test(e)}function bi(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(Pf(r)?t.parse(r):e)}var Aw=[];function th(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Ld(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!xn(i)||t&&l.length>0)&&(r[ft(l)]=!0),xn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var s=Math.min(e.length,1e4),a=0;a<s;a++)o(e[a],Aw);return Object.keys(r).sort().map(so)}function _g(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function Bc(e,t){return e.length>t?e.slice(0,t):e}function nh(e){return Te({},e)}function rh(e){return Object.values(e)}function oh(e,t,r,o){var s=e.slice(0),a=s.splice(t,r);return s.splice.apply(s,[t+o,0,...a]),s}function Iw(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function ll(e,t){try{return t.parse(e)}catch{return t.parse(Zo(e))}}function Cg(e,t){try{return ll(e,t)}catch{return}}function cl(e,t){e=e.replace(Og,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Eg(e){e=e.replace(Og,"");try{return Zo(e)}catch{}try{var t=Zo("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=Zo("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var Og=/,\s*$/;function li(e,t){var r=sh.exec(t);if(r){var o=Ur(r[2]),s=function(j,p){for(var x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:j.length,h=0,f=x;f<v;f++)j.charAt(f)===p&&h++;return h}(e,`
`,0,o),a=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:s,column:a,message:t.replace(sh,()=>"line ".concat(s+1," column ").concat(a+1))}}var i=Uw.exec(t),l=i?Ur(i[1]):void 0,c=l!==void 0?l-1:void 0,d=Fw.exec(t),u=d?Ur(d[1]):void 0,g=u!==void 0?u-1:void 0,m=c!==void 0&&g!==void 0?function(j,p,x){for(var v=j.indexOf(`
`),h=1;h<p&&v!==-1;)v=j.indexOf(`
`,v+1),h++;return v!==-1?v+x+1:void 0}(e,c,g):void 0;return{position:m,line:c,column:g,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function od(e,t){try{var r=vm.parse(e),o=ft(t),s=r.pointers[o];if(s)return{path:t,line:s.key?s.key.line:s.value?s.value.line:0,column:s.key?s.key.column:s.value?s.value.column:0,from:s.key?s.key.pos:s.value?s.value.pos:0,to:s.keyEnd?s.keyEnd.pos:s.valueEnd?s.valueEnd.pos:0}}catch(a){console.error(a)}return{path:t,line:0,column:0,from:0,to:0}}function ad(e){return xn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Wi(e){return xn(e)&&typeof e.text=="string"}function Hi(e){return xn(e)&&e.json!==void 0}function qw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Wi(e)?e:{text:r.stringify(e.json,null,t)}}function ah(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Hi(e)?e:{json:t.parse(e.text)}}function Ud(e,t,r){return qw(e,t,r).text}function Dw(e,t){return Lw(e,t)>t}function Lw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Wi(e))return e.text.length;var r=e.json,o=0;return function s(a){if(Array.isArray(a)){if((o+=a.length-1+2)>t)return;for(var i=0;i<a.length;i++)if(s(a[i]),o>t)return}else if(xn(a)){var l=Object.keys(a);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var d=l[c],u=a[d];o+=d.length+2,s(u)}}else o+=typeof a=="string"?a.length+2:String(a).length}(r),o}var sh=/(position|char) (\d+)/,Uw=/line (\d+)/,Fw=/column (\d+)/;function $g(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function ih(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&Vw.test(t)}var Or,qn,No,qo,Do,_o,Ua,Vw=/[,:]\S/;function Rf(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:r}=e;return t?r?Bw:Ww:r?Hw:Kw}(function(e){e.text="text",e.tree="tree",e.table="table"})(Or||(Or={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(qn||(qn={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(No||(No={})),function(e){e.info="info",e.warning="warning",e.error="error"}(qo||(qo={})),function(e){e.key="key",e.value="value"}(Do||(Do={})),function(e){e.asc="asc",e.desc="desc"}(_o||(_o={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(Ua||(Ua={}));var Bw={escapeValue:e=>Pg(Ng(String(e))),unescapeValue:e=>Mg(zg(e))},Ww={escapeValue:e=>Ng(String(e)),unescapeValue:e=>Mg(e)},Hw={escapeValue:e=>Pg(String(e)),unescapeValue:e=>zg(e)},Kw={escapeValue:e=>String(e),unescapeValue:e=>e};function Pg(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function zg(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return Rg[r]||r}catch{return t}})}var Rg={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Qw={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function Ng(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>Rg[t]||t)}function Mg(e){return e.replace(/\\["bfnrt\\]/g,t=>Qw[t]||t)}function ci(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function Tg(e,t){return yi(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function Aa(e,t,r){return yi(e,o=>function(s,a,i){return typeof s.getAttribute=="function"&&s.getAttribute(a)===i}(o,t,r))}function yi(e,t){return!!Nf(e,t)}function Nf(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function ul(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function Mf(e){var t=ul(e),r=t?.document.activeElement;return!!r&&yi(r,o=>o===e)}function Ag(e,t){return Nf(e,r=>r.nodeName===t)}function sd(e){return Aa(e,"data-type","selectable-key")?qn.key:Aa(e,"data-type","selectable-value")?qn.value:Aa(e,"data-type","insert-selection-area-inside")?qn.inside:Aa(e,"data-type","insert-selection-area-after")?qn.after:qn.multi}function Cc(e){return encodeURIComponent(ft(e))}function Ig(e){var t,r=Nf(e,s=>!(s==null||!s.hasAttribute)&&s.hasAttribute("data-path")),o=(t=r?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?so(decodeURIComponent(o)):void 0}function Jw(e){var{allElements:t,currentElement:r,direction:o,hasPrio:s=()=>!0,margin:a=10}=e,i=Hb(t.filter(function(h){var f=h.getBoundingClientRect();return f.width>0&&f.height>0}),c),l=c(r);function c(h){var f=h.getBoundingClientRect();return{x:f.left+f.width/2,y:f.top+f.height/2,rect:f,element:h}}function d(h,f){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,w=h.x-f.x,b=(h.y-f.y)*y;return Math.sqrt(w*w+b*b)}var u=h=>d(h,l);if(o==="Left"||o==="Right"){var g=o==="Left"?i.filter(h=>{return f=l,h.rect.left+a<f.rect.left;var f}):i.filter(h=>{return f=l,h.rect.right>f.rect.right+a;var f}),m=g.filter(h=>{return f=h,y=l,Math.abs(f.y-y.y)<a;var f,y}),j=hl(m,u)||hl(g,h=>d(h,l,10));return j?.element}if(o==="Up"||o==="Down"){var p=o==="Up"?i.filter(h=>{return f=l,h.y+a<f.y;var f}):i.filter(h=>{return f=l,h.y>f.y+a;var f}),x=p.filter(h=>s(h.element)),v=hl(x,u)||hl(p,u);return v?.element}}function Tf(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];Af(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tf)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in Gw||r.push(o),r.join(t)}function Af(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tf;return e.ctrlKey||e.metaKey&&t()}var Gw={};function St(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}St(`.jse-absolute-popup.svelte-1r8q3m8 {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-hidden-input:where(.svelte-1r8q3m8) {
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
.jse-absolute-popup.svelte-1r8q3m8 .jse-absolute-popup-content:where(.svelte-1r8q3m8) {
  position: absolute;
}`);var Yw=de('<div class="jse-absolute-popup-content svelte-1r8q3m8"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-1r8q3m8"/> <!></div>'),Xw=de('<div role="none" class="jse-absolute-popup svelte-1r8q3m8"><!></div>');function Zw(e,t){ct(t,!1);var r=_(t,"popup",8),o=_(t,"closeAbsolutePopup",8),s=Q(),a=Q();function i(g){r().options&&r().options.closeOnOuterClick&&!yi(g.target,m=>m===n(s))&&o()(r().id)}function l(g){_a(g)==="Escape"&&(g.preventDefault(),g.stopPropagation(),o()(r().id))}Qr(function(){n(a)&&n(a).focus()}),zt();var c=Xw();Re("mousedown",ja,function(g){i(g)},!0),Re("keydown",ja,l,!0),Re("wheel",ja,function(g){i(g)},!0);var d=W(c),u=g=>{var m=Yw(),j=W(m);er(j,p=>S(a,p),()=>n(a)),yg(ae(j,2),()=>r().component,(p,x)=>{x(p,La(()=>r().props))}),Ae(p=>Io(m,p),[()=>(n(s),C(r()),Z(()=>function(p,x){var v=p.getBoundingClientRect(),{left:h,top:f,positionAbove:y,positionLeft:w}=function(){if(x.anchor){var{anchor:b,width:k=0,height:$=0,offsetTop:M=0,offsetLeft:z=0,position:H}=x,{left:G,top:ee,bottom:te,right:je}=b.getBoundingClientRect(),B=H==="top"||ee+$>window.innerHeight&&ee>$,pe=H==="left"||G+k>window.innerWidth&&G>k;return{left:pe?je-z:G+z,top:B?ee-M:te+M,positionAbove:B,positionLeft:pe}}if(typeof x.left=="number"&&typeof x.top=="number"){var{left:$e,top:ke,width:me=0,height:Y=0}=x;return{left:$e,top:ke,positionAbove:ke+Y>window.innerHeight&&ke>Y,positionLeft:$e+me>window.innerWidth&&$e>me}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(y?"bottom: ".concat(v.top-f,"px;"):"top: ".concat(f-v.top,"px;"))+(w?"right: ".concat(v.left-h,"px;"):"left: ".concat(h-v.left,"px;"))}(n(s),r().options)))],Ce),X(g,m)};ye(d,g=>{n(s)&&g(u)}),er(c,g=>S(s,g),()=>n(s)),Re("mousedown",c,function(g){g.stopPropagation()}),Re("keydown",c,l),X(e,c),ut()}var e2=de("<!> <!>",1);function Fd(e,t){ct(t,!1);var r,o,s=Nr("jsoneditor:AbsolutePopup"),a=Q([],!0);function i(d){var u=n(a).findIndex(m=>m.id===d);if(u!==-1){var g=n(a)[u];g.options.onClose&&g.options.onClose(),S(a,n(a).filter(m=>m.id!==d))}}r="absolute-popup",o={openAbsolutePopup:function(d,u,g){s("open...",u,g);var m={id:Js(),component:d,props:u||{},options:g||{}};return S(a,[...n(a),m]),m.id},closeAbsolutePopup:i},Vm().set(r,o),ce(()=>n(a),()=>{s("popups",n(a))}),En(),zt(!0);var l=e2(),c=ht(l);pr(c,1,()=>n(a),wr,(d,u)=>{Zw(d,{get popup(){return n(u)},closeAbsolutePopup:i})}),fr(ae(c,2),t,"default",{},null),X(e,l),ut()}function dl(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),s=e,a=1;r.has(s);){var i="copy"+(a>1?" "+a:"");s="".concat(o," (").concat(i,")"),a++}return s}function pa(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function t2(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var n2={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a=[];r&&r.path&&r.relation&&r.value&&a.push(["filter",[(i=r.relation,xm("1 ".concat(i," 1"))[0]),fc(r.path),t2(r.value)]]);var i;return o&&o.path&&o.direction&&a.push(["sort",fc(o.path),o.direction==="desc"?"desc":"asc"]),s&&s.paths&&(s.paths.length>1?a.push(["pick",...s.paths.map(fc)]):a.push(["map",fc(s.paths[0])])),Uy(["pipe",...a])},executeQuery:function(e,t,r){var o=$g(r,JSON)?e:function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0}(e);return t.trim()!==""?Fy(o,t):o}};function fc(e){return["get",...e]}var r2=ts("<g><!></g>");function o2(e,t){ct(t,!1);var r=870711,o=Q(""),s=_(t,"data",8);function a(l){if(!l||!l.raw)return"";var c=l.raw,d={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(u,g)=>{var m="fa-".concat((r+=1).toString(16));return d[g]=m,' id="'.concat(m,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(u,g,m,j)=>{var p=g||j;return p&&d[p]?"#".concat(d[p]):u}),c}ce(()=>C(s()),()=>{S(o,a(s()))}),En();var i=r2();bg(W(i),()=>n(o),!0),X(e,i),ut()}St(`
  .fa-icon.svelte-1mc5hvj {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-1mc5hvj {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-1mc5hvj {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-1mc5hvj {
    color: #fff;
  }
  .fa-pulse.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-1mc5hvj-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var a2=ts("<svg><!></svg>"),s2=ts("<path></path>"),i2=ts("<polygon></polygon>"),l2=ts("<!><!><!>",1);function sn(e,t){var r=uc(t,["children","$$slots","$$events","$$legacy"]),o=uc(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);ct(t,!1);var s=_(t,"class",8,""),a=_(t,"data",8),i=Q(),l=_(t,"scale",8,1),c=_(t,"spin",8,!1),d=_(t,"inverse",8,!1),u=_(t,"pulse",8,!1),g=_(t,"flip",8,void 0),m=_(t,"label",8,""),j=_(t,"style",8,""),p=Q(10),x=Q(10),v=Q(),h=Q();function f(){var w=1;return l()!==void 0&&(w=Number(l())),isNaN(w)||w<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*w}function y(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}ce(()=>(C(a()),C(j()),C(l())),()=>{S(i,function(w){var b;if(w){if(!("definition"in w)){if("iconName"in w&&"icon"in w){w.iconName;var[k,$,,,M]=w.icon;b={width:k,height:$,paths:(Array.isArray(M)?M:[M]).map(z=>({d:z}))}}else b=w[Object.keys(w)[0]];return b}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(a())),j(),l(),S(p,n(i)?n(i).width/y()*f():0),S(x,n(i)?n(i).height/y()*f():0),S(v,function(){var w="";j()!==null&&(w+=j());var b=f();return b===1?w.length===0?"":w:(w===""||w.endsWith(";")||(w+="; "),"".concat(w,"font-size: ").concat(b,"em"))}()),S(h,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(p)," ").concat(n(x)))}),En(),zt(),function(w,b){var k=uc(b,["children","$$slots","$$events","$$legacy"]),$=uc(k,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),M=_(b,"class",8,""),z=_(b,"width",8),H=_(b,"height",8),G=_(b,"box",8,"0 0 0 0"),ee=_(b,"spin",8,!1),te=_(b,"inverse",8,!1),je=_(b,"pulse",8,!1),B=_(b,"flip",8,"none"),pe=_(b,"style",8,""),$e=_(b,"label",8,""),ke=a2();_c(ke,me=>{var Y;return Te(Te({version:"1.1",class:"fa-icon ".concat((Y=M())!==null&&Y!==void 0?Y:""),width:z(),height:H(),"aria-label":$e(),role:$e()?"img":"presentation",viewBox:G(),style:pe()},$),{},{[Vs]:me})},[()=>({"fa-spin":ee(),"fa-pulse":je(),"fa-inverse":te(),"fa-flip-horizontal":B()==="horizontal","fa-flip-vertical":B()==="vertical"})],"svelte-1mc5hvj"),fr(W(ke),b,"default",{},null),X(w,ke)}(e,La({get label(){return m()},get width(){return n(p)},get height(){return n(x)},get box(){return n(h)},get style(){return n(v)},get spin(){return c()},get flip(){return g()},get inverse(){return d()},get pulse(){return u()},get class(){return s()}},()=>o,{children:(w,b)=>{var k=lr();fr(ht(k),t,"default",{},$=>{var M=l2(),z=ht(M);pr(z,1,()=>(n(i),Z(()=>{var te;return((te=n(i))===null||te===void 0?void 0:te.paths)||[]})),wr,(te,je)=>{var B=s2();_c(B,()=>Te({},n(je))),X(te,B)});var H=ae(z);pr(H,1,()=>(n(i),Z(()=>{var te;return((te=n(i))===null||te===void 0?void 0:te.polygons)||[]})),wr,(te,je)=>{var B=i2();_c(B,()=>Te({},n(je))),X(te,B)});var G=ae(H),ee=te=>{o2(te,{get data(){return n(i)},set data(je){S(i,je)},$$legacy:!0})};ye(G,te=>{n(i),Z(()=>{var je;return(je=n(i))===null||je===void 0?void 0:je.raw})&&te(ee)}),X($,M)}),X(w,k)},$$slots:{default:!0}})),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-boolean-toggle.svelte-1ryp01u {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-1ryp01u:not(.jse-readonly) {
  cursor: pointer;
}`);var c2=de('<div role="checkbox" tabindex="-1"><!></div>');function u2(e,t){ct(t,!1);var r=_(t,"path",9),o=_(t,"value",9),s=_(t,"readOnly",9),a=_(t,"onPatch",9),i=_(t,"focus",9);zt(!0);var l,c=c2(),d=W(c),u=Ce(()=>o()===!0?wm:km);sn(d,{get data(){return n(u)}}),Ae(g=>{Cn(c,"aria-checked",o()===!0),l=Pt(c,1,"jse-boolean-toggle svelte-1ryp01u",null,l,g),Cn(c,"title",s()?"Boolean value ".concat(o()):"Click to toggle this boolean value")},[()=>({"jse-readonly":s()})],Ce),Re("mousedown",c,function(g){g.stopPropagation(),s()||(a()([{op:"replace",path:ft(r()),value:!o()}]),i()())}),X(e,c),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-s1wu8v .picker_slider,
.jse-color-picker-popup.svelte-s1wu8v .picker_sl,
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input,
.jse-color-picker-popup.svelte-s1wu8v .picker_sample,
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var d2=de('<div class="jse-color-picker-popup svelte-s1wu8v"></div>');function f2(e,t){ct(t,!1);var r=_(t,"color",8),o=_(t,"onChange",8),s=_(t,"showOnTop",8),a=Q(),i=()=>{};Qr(kt(function*(){var c,d=new((c=yield eb(()=>import("./vanilla-picker-B6E6ObS_.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(a),color:r(),popup:s()?"top":"bottom",onDone(u){var g=u.rgba[3]===1?u.hex.substring(0,7):u.hex;o()(g)}});d.show(),i=()=>{d.destroy()}})),Oo(()=>{i()}),zt();var l=d2();er(l,c=>S(a,c),()=>n(a)),X(e,l),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-color-picker-button.svelte-xeg9n6 {
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

.jse-color-picker-button.svelte-xeg9n6:not(.jse-readonly) {
  cursor: pointer;
}`);var v2=de('<button type="button"></button>');function p2(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),{openAbsolutePopup:s}=Xa("absolute-popup"),a=_(t,"path",9),i=_(t,"value",9),l=_(t,"readOnly",9),c=_(t,"onPatch",9),d=_(t,"focus",9);function u(p){c()([{op:"replace",path:ft(a()),value:p}]),g()}function g(){d()()}ce(()=>C(i()),()=>{S(r,Sg(i()))}),ce(()=>(C(l()),C(i())),()=>{S(o,l()?"Color ".concat(i()):"Click to open a color picker")}),En(),zt(!0);var m,j=v2();Ae(p=>{var x;m=Pt(j,1,"jse-color-picker-button svelte-xeg9n6",null,m,p),Io(j,"background: ".concat((x=n(r))!==null&&x!==void 0?x:"")),Cn(j,"title",n(o)),Cn(j,"aria-label",n(o))},[()=>({"jse-readonly":l()})],Ce),Re("click",j,function(p){var x,v;if(!l()){var h=p.target,f=h.getBoundingClientRect().top,y=((x=(v=ul(h))===null||v===void 0?void 0:v.innerHeight)!==null&&x!==void 0?x:0)-f<300&&f>300,w={color:i(),onChange:u,showOnTop:y};s(f2,w,{anchor:h,closeOnOuterClick:!0,onClose:g,offsetTop:18,offsetLeft:-8,height:300})}}),X(e,j),ut()}var id=1e3,Ki=100,vc=100,Wc=2e4,ti=[{start:0,end:Ki}],h2=1048576,m2=1048576,ld=10485760,cd="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",If="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",cs="hover-insert-inside",pc="hover-insert-after",lh="hover-collection",ud="valid",ch="repairable",ha=336,ma=260,Ai=100,uh={[_o.asc]:"ascending",[_o.desc]:"descending"};function qg(e){for(var t=k1(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var s=r.length-1,a=r[s],i=t[o];i.start<=a.end?r[s]={start:Math.min(a.start,i.start),end:Math.max(a.end,i.end)}:r.push(i)}return r}function Vd(e){return Hc(e)+Ki}function Hc(e){return Math.floor(e/Ki)*Ki}function Bd(e){return!!e&&(e.type==="space"||e.space===!0)}function Ra(e){return!!e&&(e.type==="separator"||e.separator===!0)}function dh(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function va(e){return!!e&&typeof e.onClick=="function"}function As(e){return!!e&&e.type==="dropdown-button"&&va(e.main)&&Array.isArray(e.items)}function fh(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function vh(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function ph(e){return xn(e)&&xn(e.parseError)}function g2(e){return xn(e)&&Array.isArray(e.validationErrors)}function b2(e){return xn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function y2(e){return xn(e)&&b2(e)&&typeof e.isChildError=="boolean"}function j2(e){return xn(e)&&typeof e.action=="function"&&xn(e.props)}function no(e){return e!==void 0&&e.type==="object"}function zr(e){return e!==void 0&&e.type==="array"}function qf(e){return e!==void 0&&e.type==="value"}function ks(e){return no(e)||zr(e)}function Dg(e){return e!==void 0&&Array.isArray(e.searchResults)}function Kc(e){return!!e&&e.type==="tree"}function hh(e){return!!e&&e.type==="text"}function mh(e){return!!e&&e.type==="mode"}function Wd(e){var{json:t,expand:r}=e,o=function(s){var{json:a,factory:i}=s;return Array.isArray(a)?i.createArrayDocumentState():xn(a)?i.createObjectDocumentState():a!==void 0?i.createValueDocumentState():void 0}({json:t,factory:Uf});return r&&o?Ro(t,o,[],r):o}function Df(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:ti,items:[]}}function Lf(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Uf={createObjectDocumentState:Lf,createArrayDocumentState:Df,createValueDocumentState:function(){return{type:"value"}}};function Lg(e,t,r,o){var{createObjectDocumentState:s,createArrayDocumentState:a,createValueDocumentState:i}=o;return function l(c,d,u){if(Array.isArray(c)){var g=zr(d)?d:a();if(u.length===0)return g;var m=Ur(u[0]),j=l(c[m],g.items[m],u.slice(1));return to(g,["items",u[0]],j)}if(xn(c)){var p=no(d)?d:s();if(u.length===0)return p;var x=u[0],v=l(c[x],p.properties[x],u.slice(1));return to(p,["properties",x],v)}return qf(d)?d:i()}(e,t,r)}function mo(e,t){return Qi(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?zr(o)?o:Df({expanded:!!ks(o)&&o.expanded}):xn(r)?no(o)?o:Lf({expanded:!!ks(o)&&o.expanded}):qf(o)?o:void 0},()=>!0)}function Qi(e,t,r,o,s){var a=o(e,t,r);if(Array.isArray(e)&&zr(a)&&s(a)){var i=[];return Ff(e,a.visibleSections,c=>{var d=r.concat(String(c)),u=Qi(e[c],a.items[c],d,o,s);u!==void 0&&(i[c]=u)}),th(i,a.items)?a:Te(Te({},a),{},{items:i})}if(xn(e)&&no(a)&&s(a)){var l={};return Object.keys(e).forEach(c=>{var d=r.concat(c),u=Qi(e[c],a.properties[c],d,o,s);u!==void 0&&(l[c]=u)}),th(Object.values(l),Object.values(a.properties))?a:Te(Te({},a),{},{properties:l})}return a}function Ff(e,t,r){t.forEach(o=>{var{start:s,end:a}=o;_g(s,Math.min(e.length,a),r)})}function Ji(e,t){for(var r=e,o=[],s=0;s<t.length;){if(Array.isArray(r)){var a=t[s];o.push("items",a),r=r[Ur(a)]}else{if(!xn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(s));var i=t[s];o.push("properties",i),r=r[i]}s++}return o}function Ro(e,t,r,o){for(var s=t,a=function(l){var c=r.slice(0,l);s=ui(e,s,c,(d,u)=>{var g=ks(u)&&!u.expanded?Te(Te({},u),{},{expanded:!0}):u;return zr(g)?function(m,j){if(function(v,h){return v.some(f=>h>=f.start&&h<f.end)}(m.visibleSections,j))return m;var p=Hc(j),x={start:p,end:Vd(p)};return Te(Te({},m),{},{visibleSections:qg(m.visibleSections.concat(x))})}(g,Ur(r[l])):g})},i=0;i<r.length;i++)a(i);return ui(e,s,r,(l,c)=>function(d,u,g,m){return Qi(d,u,g,(j,p,x)=>Array.isArray(j)&&m(x)?zr(p)?p.expanded?p:Te(Te({},p),{},{expanded:!0}):Df({expanded:!0}):xn(j)&&m(x)?no(p)?p.expanded?p:Te(Te({},p),{},{expanded:!0}):Lf({expanded:!0}):p,j=>ks(j)&&j.expanded)}(l,c,[],o))}function gh(e,t,r,o){return ui(e,t,r,(s,a)=>o?function(i,l,c){return Qi(i,l,c,(d,u)=>bh(u),()=>!0)}(s,a,r):bh(a))}function bh(e){return zr(e)&&e.expanded?Te(Te({},e),{},{expanded:!1,visibleSections:ti}):no(e)&&e.expanded?Te(Te({},e),{},{expanded:!1}):e}function Ug(e,t,r){var o={json:e,documentState:t},s=r.reduce((a,i)=>({json:Mo(a.json,[i]),documentState:x2(a.json,a.documentState,i)}),o);return{json:s.json,documentState:mo(s.json,s.documentState)}}function x2(e,t,r){if(om(r))return yh(e,t,r,void 0);if(am(r))return jh(e,t,r);if(cf(r)){var o=To(e,r.path),s=Xo(e,t,o);return s?wu(e,t,o,{type:"value",enforceString:s}):t}return Sd(r)||vs(r)?function(a,i,l){if(vs(l)&&l.from===l.path)return i;var c=i,d=To(a,l.from),u=Jo(a,c,d);return vs(l)&&(c=jh(a,c,{path:l.from})),c=yh(a,c,{path:l.path},u),c}(e,t,r):t}function Jo(e,t,r){try{return Qe(t,Ji(e,r))}catch{return}}function Vf(e,t,r,o,s){var a=Lg(e,t,r,s);return ff(a,Ji(e,r),i=>{var l=Qe(e,r);return o(l,i)})}function wu(e,t,r,o){return function(s,a,i,l,c){var d=Lg(s,a,i,c);return to(d,Ji(s,i),l)}(e,t,r,o,Uf)}function ui(e,t,r,o){return Vf(e,t,r,o,Uf)}function yh(e,t,r,o){var s=To(e,r.path),a=t;return a=ui(e,a,an(s),(i,l)=>{if(!zr(l))return l;var c=Ur(Qt(s)),{items:d,visibleSections:u}=l;return Te(Te({},l),{},{items:c<d.length?Iw(d,c,o!==void 0?[o]:Array(1)):d,visibleSections:Fg(u,c,1)})}),wu(e,a,s,o)}function jh(e,t,r){var o=To(e,r.path),s=an(o),a=Qe(e,s);return Array.isArray(a)?ui(e,t,s,(i,l)=>{if(!zr(l))return l;var c=Ur(Qt(o)),{items:d,visibleSections:u}=l;return Te(Te({},l),{},{items:d.slice(0,c).concat(d.slice(c+1)),visibleSections:Fg(u,c,-1)})}):function(i,l,c){var d=Ji(i,c);return Co(l,d)?iu(l,Ji(i,c)):l}(e,t,o)}function Fg(e,t,r){return function(o){for(var s=o.slice(0),a=1;a<s.length;)s[a-1].end===s[a].start&&(s[a-1]={start:s[a-1].start,end:s[a].end},s.splice(a)),a++;return s}(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function Xo(e,t,r){var o,s=Qe(e,r),a=Jo(e,t,r),i=qf(a)?a.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=s)=="string"&&typeof bi(o,JSON)!="string"}function fl(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function Bf(e,t){var r=[];return function o(s,a,i){r.push(i),vr(s)&&zr(a)&&a.expanded&&Ff(s,a.visibleSections,l=>{o(s[l],a.items[l],i.concat(String(l)))}),yr(s)&&no(a)&&a.expanded&&Object.keys(s).forEach(l=>{o(s[l],a.properties[l],i.concat(l))})}(e,t,[]),r}function Vg(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function s(a,i){o.push({path:i,type:No.value});var l=Jo(e,t,i);if(a&&ks(l)&&l.expanded){if(r&&o.push({path:i,type:No.inside}),vr(a)){var c=zr(l)?l.visibleSections:ti;Ff(a,c,d=>{var u=i.concat(String(d));s(a[d],u),r&&o.push({path:u,type:No.after})})}yr(a)&&Object.keys(a).forEach(d=>{var u=i.concat(d);o.push({path:u,type:No.key}),s(a[d],u),r&&o.push({path:u,type:No.after})})}}(e,[]),o}function dd(e,t,r){var o=Bf(e,t),s=o.map(ft).indexOf(ft(r));if(s!==-1&&s<o.length-1)return o[s+1]}function Ss(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Ro(e,t,r,Dw({json:Qe(e,r)},o)?Ii:Wf)}function fd(e,t,r){var o=Jo(e,t,r);return ks(o)&&o.expanded?t:Ss(e,t,r)}function Ii(e){return e.length===0||e.length===1&&e[0]==="0"}function Hd(e){return e.length===0}function Wf(){return!0}function Ec(){return!1}function oo(e){return e&&e.type===qn.after||!1}function $r(e){return e&&e.type===qn.inside||!1}function Rr(e){return e&&e.type===qn.key||!1}function mn(e){return e&&e.type===qn.value||!1}function Vn(e){return e&&e.type===qn.multi||!1}function ku(e){return Vn(e)&&Bt(e.focusPath,e.anchorPath)}function Gi(e){return Vn(e)||oo(e)||$r(e)||Rr(e)||mn(e)}function vd(e){return e&&e.type===qn.text||!1}function Ja(e,t){var r=[];return function(o,s,a){if(s){var i=gs(s),l=nt(s);if(Bt(i,l))return a(i);if(o!==void 0){var c=Wg(i,l);if(i.length===c.length||l.length===c.length)return a(c);var d=Jr(i,l),u=ga(o,d),g=Fa(o,d),m=ka(o,d,u),j=ka(o,d,g);if(!(m===-1||j===-1)){var p=Qe(o,c);if(yr(p)){for(var x=Object.keys(p),v=m;v<=j;v++){var h=a(c.concat(x[v]));if(h!==void 0)return h}return}if(vr(p)){for(var f=m;f<=j;f++){var y=a(c.concat(String(f)));if(y!==void 0)return y}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{r.push(o)}),r}function Bg(e){return $r(e)?e.path:an(nt(e))}function ga(e,t){if(!Vn(t))return t.path;var r=ka(e,t,t.anchorPath);return ka(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function Fa(e,t){if(!Vn(t))return t.path;var r=ka(e,t,t.anchorPath);return ka(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function xh(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var s=o?nt(r):ga(e,r),a=function(c,d,u){var g=Bf(c,d),m=g.map(ft),j=ft(u),p=m.indexOf(j);if(p!==-1&&p>0)return g[p-1]}(e,t,s);if(o)return $r(r)||oo(r)?a!==void 0?Jr(s,s):void 0:a!==void 0?Jr(gs(r),a):void 0;if(oo(r)||$r(r))return Gt(s);if(Rr(r)){if(a===void 0||a.length===0)return;var i=an(a),l=Qe(e,i);return Array.isArray(l)||pn(a)?Gt(a):Ca(a)}return mn(r),a!==void 0?Gt(a):void 0}}function wh(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var s=Vg(e,t,o),a=s.findIndex(i=>Bt(i.path,nt(r))&&String(i.type)===String(r.type));return{caret:a!==-1?s[a]:void 0,previous:a!==-1&&a>0?s[a-1]:void 0,next:a!==-1&&a<s.length-1?s[a+1]:void 0}}function Is(e,t){for(var r=Bf(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var s=r[o];return s===void 0||s.length===0||Array.isArray(Qe(e,an(s)))?Gt(s):Ca(s)}function di(e,t){if(t.length===1){var r=ba(t);if(r.op==="replace")return Gt(To(e,r.path))}if(!pn(t)&&t.every(i=>i.op==="move")){var o=ba(t),s=t.slice(1);if((Sd(o)||vs(o))&&o.from!==o.path&&s.every(i=>(Sd(i)||vs(i))&&i.from===i.path))return Ca(To(e,o.path))}var a=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>To(e,i.path));if(!pn(a))return{type:qn.multi,anchorPath:ba(a),focusPath:Qt(a)}}function Wg(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function Qc(e){return Rr(e)||mn(e)||ku(e)}function kh(e,t){return Qc(t)&&ir(Qe(e,nt(t)))?nt(t):an(nt(t))}function ta(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function Yo(e){if(Pr(e)){var{type:t,path:r}=e;return{type:t,path:r}}return e}function Ca(e){return{type:qn.key,path:e}}function Hf(e,t){return{type:qn.key,path:e,edit:!0,initialValue:t}}function Gt(e){return{type:qn.value,path:e}}function Jc(e,t){return{type:qn.value,path:e,edit:!0,initialValue:t}}function Ea(e){return{type:qn.inside,path:e}}function wa(e){return{type:qn.after,path:e}}function Jr(e,t){var r=Wg(e,t),o=e.length>r.length&&t.length>r.length;return{type:qn.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function Hg(e,t,r,o){if(Rr(t))return String(Qt(t.path));if(mn(t)){var s=Qe(e,t.path);return typeof s=="string"?s:o.stringify(s,null,r)}if(Vn(t)){if(pn(t.focusPath))return o.stringify(e,null,r);var a=Bg(t),i=Qe(e,a);if(Array.isArray(i)){if(ku(t)){var l=Qe(e,t.focusPath);return o.stringify(l,null,r)}return Ja(e,t).map(c=>{var d=Qe(e,c);return"".concat(o.stringify(d,null,r),",")}).join(`
`)}return Ja(e,t).map(c=>{var d=Qt(c),u=Qe(e,c);return"".concat(o.stringify(d),": ").concat(o.stringify(u,null,r),",")}).join(`
`)}}function Pr(e){return(Rr(e)||mn(e))&&e.edit===!0}function Gs(e){return Rr(e)||mn(e)||Vn(e)}function hc(e){return Rr(e)||mn(e)||ku(e)}function Kd(e){switch(e.type){case No.key:return Ca(e.path);case No.value:return Gt(e.path);case No.after:return wa(e.path);case No.inside:return Ea(e.path)}}function Sh(e,t){switch(e){case qn.key:return Ca(t);case qn.value:return Gt(t);case qn.after:return wa(t);case qn.inside:return Ea(t);case qn.multi:case qn.text:return Jr(t,t)}}function mc(e,t,r){if(t)return Yi(e,t,r)||ta(Vn(t)?an(t.focusPath):t.path,r)?t:void 0}function Yi(e,t,r){if(e===void 0||!t)return!1;if(Rr(t)||$r(t)||oo(t))return Bt(t.path,r);if(mn(t))return ta(r,t.path);if(Vn(t)){var o=ga(e,t),s=Fa(e,t),a=an(t.focusPath);if(!ta(r,a)||r.length<=a.length)return!1;var i=ka(e,t,o),l=ka(e,t,s),c=ka(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function ka(e,t,r){var o=an(t.focusPath);if(!ta(r,o)||r.length<=o.length)return-1;var s=r[o.length],a=Qe(e,o);if(yr(a))return Object.keys(a).indexOf(s);if(vr(a)){var i=Ur(s);if(i<a.length)return i}return-1}function nt(e){return Vn(e)?e.focusPath:e.path}function gs(e){return Vn(e)?e.anchorPath:e.path}function Vo(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var s of r)if(typeof s=="string"&&e.push(s),s&&typeof s=="object")for(var a in s)Object.hasOwnProperty.call(s,a)&&s[a]&&e.push(a);return e.join(" ")}function Kg(e,t,r){return Vo("jse-value","jse-"+zf(e,r),{"jse-url":xu(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===Or.table})}St(`/* over all fonts, sizes, and colors */
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
.jse-value.jse-string.svelte-f9kmxj {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-f9kmxj, .jse-value.jse-array.svelte-f9kmxj {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-f9kmxj {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-f9kmxj {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-f9kmxj {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-f9kmxj {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-f9kmxj {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-f9kmxj {
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
div.jse-editable-div.jse-short-text.svelte-f9kmxj {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-f9kmxj {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-f9kmxj {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var w2=de('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function Qg(e,t){ct(t,!1);var r=Nr("jsoneditor:EditableDiv"),o=_(t,"value",9),s=_(t,"initialValue",9),a=_(t,"shortText",9,!1),i=_(t,"label",9),l=_(t,"onChange",9),c=_(t,"onCancel",9),d=_(t,"onFind",9),u=_(t,"onPaste",9,Er),g=_(t,"onValueClass",9,()=>""),m=Q(void 0,!0),j=Q(void 0,!0),p=!1;function x(){return n(m)?function(f){return f.replace(/\n$/,"")}(n(m).innerText):""}function v(f){n(m)&&go(m,n(m).innerText=ci(f))}Qr(()=>{r("onMount",{value:o(),initialValue:s()}),v(s()!==void 0?s():o()),n(m)&&function(f){if(f.firstChild!=null){var y=document.createRange(),w=window.getSelection();y.setStart(f,1),y.collapse(!0),w?.removeAllRanges(),w?.addRange(y)}else f.focus()}(n(m))}),Oo(()=>{var f=x();r("onDestroy",{closed:p,value:o(),newValue:f}),p||f===o()||l()(f,Ua.no)}),ce(()=>(C(g()),C(o())),()=>{S(j,g()(o()))}),En(),zt(!0);var h=w2();er(h,f=>S(m,f),()=>n(m)),Ae(f=>{Cn(h,"aria-label",i()),Pt(h,1,f,"svelte-f9kmxj")},[()=>Qa((C(Vo),n(j),C(a()),Z(()=>Vo("jse-editable-div",n(j),{"jse-short-text":a()}))))],Ce),Re("input",h,function(){var f=x();f===""&&v(""),S(j,g()(f))}),Re("keydown",h,function(f){f.stopPropagation();var y=_a(f);if(y==="Escape"&&(f.preventDefault(),p=!0,c()()),y==="Enter"||y==="Tab"){f.preventDefault(),p=!0;var w=x();l()(w,Ua.nextInside)}y==="Ctrl+F"&&(f.preventDefault(),d()(!1)),y==="Ctrl+H"&&(f.preventDefault(),d()(!0))}),Re("paste",h,function(f){if(f.stopPropagation(),u()&&f.clipboardData){var y=f.clipboardData.getData("text/plain");u()(y)}}),Re("blur",h,function(){var f=document.hasFocus(),y=x();r("handleBlur",{hasFocus:f,closed:p,value:o(),newValue:y}),document.hasFocus()&&!p&&(p=!0,y!==o()&&l()(y,Ua.self))}),X(e,h),ut()}function k2(e,t){ct(t,!1);var r=_(t,"path",9),o=_(t,"value",9),s=_(t,"selection",9),a=_(t,"mode",9),i=_(t,"parser",9),l=_(t,"normalization",9),c=_(t,"enforceString",9),d=_(t,"onPatch",9),u=_(t,"onPasteJson",9),g=_(t,"onSelect",9),m=_(t,"onFind",9),j=_(t,"focus",9),p=_(t,"findNextInside",9);function x(y){return c()?y:bi(y,i())}function v(){g()(Gt(r())),j()()}zt(!0);var h=Ce(()=>(C(l()),C(o()),Z(()=>l().escapeValue(o())))),f=Ce(()=>(C(Pr),C(s()),Z(()=>Pr(s())?s().initialValue:void 0)));Qg(e,{get value(){return n(h)},get initialValue(){return n(f)},label:"Edit value",onChange:function(y,w){d()([{op:"replace",path:ft(r()),value:x(l().unescapeValue(y))}],(b,k,$)=>{if(!$||Bt(r(),nt($)))return{state:k,selection:w===Ua.nextInside?p()(r()):Gt(r())}}),j()()},onCancel:v,onPaste:function(y){try{var w=i().parse(y);ir(w)&&u()({path:r(),contents:w,onPasteAsJson:()=>{v();var b=[{op:"replace",path:ft(r()),value:w}];d()(b,(k,$)=>({state:Ss(k,$,r())}))}})}catch{}},get onFind(){return m()},onValueClass:function(y){return Kg(x(l().unescapeValue(y)),a(),i())}}),ut()}function Ys(e,t,r){var o=an(t),s=Qe(e,o);if(vr(s)){var a=Ur(Qt(t));return r.map((d,u)=>({op:"add",path:ft(o.concat(String(a+u))),value:d.value}))}if(yr(s)){var i=Qt(t),l=Object.keys(s),c=i!==void 0?fl(l,i,!0):[];return[...r.map(d=>{var u=dl(d.key,l);return{op:"add",path:ft(o.concat(u)),value:d.value}}),...c.map(d=>Ga(o,d))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Qd(e,t,r){var o=Qe(e,t);if(Array.isArray(o)){var s=o.length;return r.map((a,i)=>({op:"add",path:ft(t.concat(String(s+i))),value:a.value}))}return r.map(a=>{var i=dl(a.key,Object.keys(o));return{op:"add",path:ft(t.concat(i)),value:a.value}})}function vl(e,t,r,o){var s=dl(o,t.filter(i=>i!==r)),a=fl(t,r,!1);return[{op:"move",from:ft(e.concat(r)),path:ft(e.concat(s))},...a.map(i=>Ga(e,i))]}function Jg(e,t){var r=Qt(t);if(pn(r))throw new Error("Cannot duplicate root object");var o=an(r),s=Qt(r),a=Qe(e,o);if(vr(a)){var i=Qt(t),l=i?Ur(Qt(i))+1:0;return[...t.map((u,g)=>({op:"copy",from:ft(u),path:ft(o.concat(String(g+l)))}))]}if(yr(a)){var c=Object.keys(a),d=s!==void 0?fl(c,s,!1):[];return[...t.map(u=>{var g=dl(Qt(u),c);return{op:"copy",from:ft(u),path:ft(o.concat(g))}}),...d.map(u=>Ga(o,u))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function Gg(e,t){if(mn(t))return[{op:"move",from:ft(t.path),path:""}];if(!Vn(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var r=an(t.focusPath),o=Qe(e,r);if(vr(o)){var s=Ja(e,t).map(i=>{var l=Ur(Qt(i));return o[l]});return[{op:"replace",path:"",value:s}]}if(yr(o)){var a={};return Ja(e,t).forEach(i=>{var l=String(Qt(i));a[l]=o[l]}),[{op:"replace",path:"",value:a}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function Yg(e,t,r,o){if(Rr(t)){var s=Cg(r,o),a=an(t.path),i=Qe(e,a);return vl(a,Object.keys(i),Qt(t.path),typeof s=="string"?s:r)}if(mn(t)||Vn(t)&&pn(t.focusPath))try{return[{op:"replace",path:ft(nt(t)),value:cl(r,k=>ll(k,o))}]}catch{return[{op:"replace",path:ft(nt(t)),value:r}]}if(Vn(t)){var l=pd(r,o);return function(k,$,M){var z=ba($),H=an(z),G=Qe(k,H);if(vr(G)){var ee=ba($),te=ee?Ur(Qt(ee)):0;return[...Gc($),...M.map((I,se)=>({op:"add",path:ft(H.concat(String(se+te))),value:I.value}))]}if(yr(G)){var je=Qt($),B=an(je),pe=Qt(je),$e=Object.keys(G),ke=pe!==void 0?fl($e,pe,!1):[],me=new Set($.map(I=>Qt(I))),Y=$e.filter(I=>!me.has(I));return[...Gc($),...M.map(I=>{var se=dl(I.key,Y);return{op:"add",path:ft(B.concat(se)),value:I.value}}),...ke.map(I=>Ga(B,I))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,Ja(e,t),l)}if(oo(t)){var c=pd(r,o),d=t.path,u=an(d),g=Qe(e,u);if(vr(g)){var m=Ur(Qt(d));return Ys(e,u.concat(String(m+1)),c)}if(yr(g)){var j=String(Qt(d)),p=Object.keys(g);if(pn(p)||Qt(p)===j)return Qd(e,u,c);var x=p.indexOf(j),v=p[x+1];return Ys(e,u.concat(v),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if($r(t)){var h=pd(r,o),f=t.path,y=Qe(e,f);if(vr(y))return Ys(e,f.concat("0"),h);if(yr(y)){var w=Object.keys(y);if(pn(w))return Qd(e,f,h);var b=ba(w);return Ys(e,f.concat(b),h)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Gc(e){return e.map(t=>({op:"remove",path:ft(t)})).reverse()}function Ga(e,t){return{op:"move",from:ft(e.concat(t)),path:ft(e.concat(t))}}function pd(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),s=Cg(e,t),a=s!==void 0?s:cl(e,i=>ll(i,t));return r&&xn(a)||o&&Array.isArray(a)?[{key:"New item",value:a}]:Array.isArray(a)?a.map((i,l)=>({key:"New item "+l,value:i})):xn(a)?Object.keys(a).map(i=>({key:i,value:a[i]})):[{key:"New item",value:a}]}function Xg(e,t){if(Rr(t)){var r=an(t.path),o=Qe(e,r),s=vl(r,Object.keys(o),Qt(t.path),"");return{operations:s,newSelection:di(e,s)}}if(mn(t))return{operations:[{op:"replace",path:ft(t.path),value:""}],newSelection:t};if(Vn(t)){var a=Ja(e,t),i=Gc(a),l=Qt(a);if(pn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Gt([])};var c=an(l),d=Qe(e,c);if(vr(d)){var u=ba(a),g=Ur(Qt(u));return{operations:i,newSelection:g===0?Ea(c):wa(c.concat(String(g-1)))}}if(yr(d)){var m=Object.keys(d),j=ba(a),p=Qt(j),x=m.indexOf(p),v=m[x-1];return{operations:i,newSelection:x===0?Ea(c):wa(c.concat(v))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function Zg(e,t){var r=function(o,s){if(pn(s)||!s.every(vs))return s;var a=[];for(var i of s){var l=_h(so(i.from)),c=_h(so(i.path));if(!l||!c)return s;a.push({from:l,path:c,operation:i})}var d=a[0].path.parent,u=Qe(o,d);if(!yr(u)||!a.every(p=>function(x,v){return Bt(x.from.parent,v)&&Bt(x.path.parent,v)}(p,d)))return s;var g=function(p,x){var v=Object.keys(x),h=v.slice();for(var f of p){var y=h.indexOf(f.from.key);y!==-1&&(h.splice(y,1),h.push(f.path.key))}for(var w=0;w<v.length&&v[w]===h[w];)w++;return h[w]}(a,o),m=p=>p.operation,j=a.filter(p=>p.operation.from!==p.operation.path);return j.some(p=>p.path.key===g)?j.map(m):[Ga(d,g),...j.map(m)]}(e,t);return cm(e,r,{before:(o,s,a)=>{if(am(s)){var i=so(s.path);return{revertOperations:[...a,...hd(o,i)]}}if(vs(s)){var l=so(s.from);return{revertOperations:s.from===s.path?[s,...hd(o,l)]:[...a,...hd(o,l)]}}return{document:o}}})}function _h(e){return e.length>0?{parent:an(e),key:Qt(e)}:void 0}function hd(e,t){var r=an(t),o=Qt(t),s=Qe(e,r);return yr(s)?fl(Object.keys(s),o,!1).map(a=>Ga(r,a)):[]}function Ch(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((s,a)=>Te(Te({},s),{},{active:a===t}));return Te(Te({},e),{},{items:o,activeItem:r,activeIndex:t})}function Eh(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.toLowerCase(),a=(r=o?.maxResults)!==null&&r!==void 0?r:1/0,i=o?.columns,l=[],c=[];function d(v){l.length>=a||l.push(v)}function u(v,h){if(vr(h)){var f=c.length;c.push("0");for(var y=0;y<h.length;y++)if(c[f]=String(y),u(v,h[y]),l.length>=a)return;c.pop()}else if(yr(h)){var w=Object.keys(h),b=c.length;for(var k of(c.push(""),w))if(c[b]=k,Oh(k,v,c,Do.key,d),u(v,h[k]),l.length>=a)return;c.pop()}else Oh(String(h),v,c,Do.value,d)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var g=0;g<t.length;g++){c[0]=String(g);for(var m=t[g],j=0;j<i.length;j++){var p=i[j];if(p.length===1)c[1]=p[0];else for(var x=0;x<p.length;x++)c[x+1]=p[x];for(;c.length>p.length+1;)c.pop();u(s,Qe(m,p))}if(l.length>=a)break}return l}return u(s,t),l}function Oh(e,t,r,o,s){var a=e.toLowerCase(),i=0,l=-1,c=-1;do(c=a.indexOf(t,l))!==-1&&(l=c+t.length,s({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function Jd(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function $h(e,t,r){var o=e;return i1(r,s=>{o=Jd(o,t,s.start,s.end)}),o}function S2(e,t,r,o,s){var{field:a,path:i,start:l,end:c}=o;if(a===Do.key){var d=an(i),u=Qe(e,d),g=Qt(i),m=vl(d,Object.keys(u),g,Jd(g,r,l,c));return{newSelection:di(e,m),operations:m}}if(a===Do.value){var j=Qe(e,i);if(j===void 0)throw new Error("Cannot replace: path not found ".concat(ft(i)));var p=typeof j=="string"?j:String(j),x=Xo(e,t,i),v=Jd(p,r,l,c),h=[{op:"replace",path:ft(i),value:x?v:bi(v,s)}];return{newSelection:di(e,h),operations:h}}throw new Error("Cannot replace: unknown type of search result field ".concat(a))}function Ph(e){return e.path.concat(e.field,String(e.fieldIndex))}function zh(e){var t=Dg(e)?e.searchResults.filter(r=>r.field===Do.key):void 0;return t&&t.length>0?t:void 0}function Rh(e){var t=Dg(e)?e.searchResults.filter(r=>r.field===Do.value):void 0;return t&&t.length>0?t:void 0}var _2={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function e0(e,t){return t.reduce((r,o)=>function(s,a,i,l){return Vf(s,a,i,l,_2)}(e,r,o.path,(s,a)=>Te(Te({},a),{},{searchResults:a.searchResults?a.searchResults.concat(o):[o]})),void 0)}function Yc(e){var t,r=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=no(e)?Object.values(e.properties).flatMap(Yc):zr(e)?e.items.flatMap(Yc):[];return r.concat(o)}St(`/* over all fonts, sizes, and colors */
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
.jse-highlight.svelte-5fb7bl {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-5fb7bl {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var C2=de("<span> </span>");function t0(e,t){ct(t,!1);var r=Q(),o=_(t,"text",8),s=_(t,"searchResultItems",8);ce(()=>(C(o()),C(s())),()=>{S(r,function(i,l){var c=[],d=0;for(var u of l){var g=i.slice(d,u.start);g!==""&&c.push({resultIndex:void 0,type:"normal",text:g,active:!1});var m=i.slice(u.start,u.end);c.push({resultIndex:u.resultIndex,type:"highlight",text:m,active:u.active}),d=u.end}var j=Qt(l);return j&&j.end<i.length&&c.push({type:"normal",text:i.slice(j.end),resultIndex:void 0,active:!1}),c}(String(o()),s()))}),En(),zt();var a=lr();pr(ht(a),1,()=>n(r),wr,(i,l)=>{var c=lr(),d=ht(c),u=m=>{var j=Tr();Ae(()=>dt(j,(n(l),Z(()=>n(l).text)))),X(m,j)},g=m=>{var j,p=C2(),x=W(p);Ae((v,h,f)=>{j=Pt(p,1,"jse-highlight svelte-5fb7bl",null,j,v),Cn(p,"data-search-result-index",h),dt(x,f)},[()=>({"jse-active":n(l).active}),()=>(n(l),Z(()=>String(n(l).resultIndex))),()=>(C(ci),n(l),Z(()=>ci(n(l).text)))],Ce),X(m,p)};ye(d,m=>{n(l),Z(()=>n(l).type==="normal")?m(u):m(g,!1)}),X(i,c)}),X(e,a),ut()}function Oc(e){var t=1e3;if(e<900)return e.toFixed()+" B";var r=e/t;if(r<900)return r.toFixed(1)+" KB";var o=r/t;if(o<900)return o.toFixed(1)+" MB";var s=o/t;return s<900?s.toFixed(1)+" GB":(s/t).toFixed(1)+" TB"}St(`/* over all fonts, sizes, and colors */
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
.jse-tag.svelte-jlw0fj {
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
.jse-tag.svelte-jlw0fj:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-jlw0fj {
  opacity: 0.7;
  cursor: inherit;
}`);var E2=de('<button type="button"><!></button>');function $c(e,t){ct(t,!0);var r,o=ro(()=>t.onclick?a=>{a.preventDefault(),a.stopPropagation(),t.onclick()}:void 0),s=E2();s.__click=function(){for(var a,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];(a=n(o))===null||a===void 0||a.apply(this,l)},function(a,i){for(var l=arguments.length,c=new Array(l>2?l-2:0),d=2;d<l;d++)c[d-2]=arguments[d];var u,g=a,m=Lp;es(()=>{m!==(m=i())&&(u&&(Eo(u),u=null),u=oa(()=>m(g,...c)))},rl)}(W(s),()=>{var a;return(a=t.children)!==null&&a!==void 0?a:Lp}),Ae(a=>r=Pt(s,1,"jse-tag svelte-jlw0fj",null,r,a),[()=>({disabled:!t.onclick})]),X(e,s),ut()}il(["click"]);function O2(e,t,r){typeof t.value=="string"&&n(r)&&Af(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,"_blank"))}function $2(e,t){t.readOnly||(e.preventDefault(),t.onSelect(Jc(t.path)))}St(`/* over all fonts, sizes, and colors */
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
.jse-value.jse-string.svelte-c0g9qz {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-c0g9qz, .jse-value.jse-array.svelte-c0g9qz {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-c0g9qz {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-c0g9qz {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-c0g9qz {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-c0g9qz {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-c0g9qz {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-c0g9qz {
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
.jse-value.jse-table-cell.svelte-c0g9qz {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-c0g9qz {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-c0g9qz::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var P2=de('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function z2(e,t){ct(t,!0);var r=da(!0),o=ro(()=>n(r)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(j=>j.active&&j.end>t.truncateTextSize))),s=ro(()=>n(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),a=ro(()=>xu(t.value));function i(){S(r,!1)}var l=P2();l.__click=[O2,t,a],l.__dblclick=[$2,t];var c=W(l),d=j=>{var p=ro(()=>t.normalization.escapeValue(n(s)));t0(j,{get text(){return n(p)},get searchResultItems(){return t.searchResultItems}})},u=j=>{var p=Tr();Ae(x=>dt(p,x),[()=>ci(t.normalization.escapeValue(n(s)))]),X(j,p)};ye(c,j=>{t.searchResultItems?j(d):j(u,!1)});var g=ae(c,2),m=j=>{$c(j,{onclick:i,children:(p,x)=>{var v=Tr();Ae(h=>dt(v,"Show more (".concat(h??"",")")),[()=>Oc(t.value.length)]),X(p,v)},$$slots:{default:!0}})};ye(g,j=>{n(o)&&typeof t.value=="string"&&j(m)}),Ae(j=>{Pt(l,1,j,"svelte-c0g9qz"),Cn(l,"title",n(a)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>Qa(Kg(t.value,t.mode,t.parser))]),X(e,l),ut()}il(["click","dblclick"]);St(`/* over all fonts, sizes, and colors */
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
.jse-tooltip.svelte-14y3y8t {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var R2=de('<div class="jse-tooltip svelte-14y3y8t"> </div>');function N2(e,t){var r=_(t,"text",8),o=R2(),s=W(o);Ae(()=>dt(s,r())),X(e,o)}function fi(e,t){var r,{text:o,openAbsolutePopup:s,closeAbsolutePopup:a}=t;function i(){r=s(N2,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){a(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}St(`/* over all fonts, sizes, and colors */
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
.jse-timestamp.svelte-1jla5ec {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var M2=de('<div class="jse-timestamp svelte-1jla5ec"><!></div>');function T2(e,t){ct(t,!1);var r=Q(void 0,!0),o=Xa("absolute-popup"),s=_(t,"value",9);ce(()=>C(s()),()=>{S(r,"Time: ".concat(new Date(s()).toString()))}),En(),zt(!0);var a=M2();sn(W(a),{get data(){return Wy}}),Yr(a,(i,l)=>fi?.(i,l),()=>Te({text:n(r)},o)),X(e,a),ut()}function A2(e){var t=[];return!e.isEditing&&Nw(e.value)&&t.push({component:u2,props:e}),!e.isEditing&&Mw(e.value)&&t.push({component:p2,props:e}),e.isEditing&&t.push({component:k2,props:e}),e.isEditing||t.push({component:z2,props:e}),!e.isEditing&&Dd(e.value)&&t.push({component:T2,props:e}),t}function ao(e){return e.map((t,r)=>q2.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(r>0?".":"")+t).join("")}function I2(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(a=>a==='"',!0)),s('"')):t.push(o(a=>a==="]")),s("]")):t.push(o(a=>a==="."||a==="["));function o(a){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!a(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function s(a){if(e[r]!==a)throw new SyntaxError("Invalid JSON path: ".concat(a," expected at position ").concat(r));r++}return t}function Na(e){return{value:e,label:pn(e)?"(item root)":ao(e)}}var q2=/^\d+$/,D2={},L2={showWizard:!0,showOriginal:!0},Xc=Math.min,bs=Math.max,Zc=Math.round,gc=Math.floor,na=e=>({x:e,y:e}),U2={left:"right",right:"left",bottom:"top",top:"bottom"},F2={start:"end",end:"start"};function Nh(e,t,r){return bs(e,Xc(t,r))}function Su(e,t){return typeof e=="function"?e(t):e}function _s(e){return e.split("-")[0]}function _u(e){return e.split("-")[1]}function n0(e){return e==="x"?"y":"x"}function r0(e){return e==="y"?"height":"width"}var V2=new Set(["top","bottom"]);function Ia(e){return V2.has(_s(e))?"y":"x"}function o0(e){return n0(Ia(e))}function Gd(e){return e.replace(/start|end/g,t=>F2[t])}var Mh=["left","right"],Th=["right","left"],B2=["top","bottom"],W2=["bottom","top"];function H2(e,t,r,o){var s=_u(e),a=function(i,l,c){switch(i){case"top":case"bottom":return c?l?Th:Mh:l?Mh:Th;case"left":case"right":return l?B2:W2;default:return[]}}(_s(e),r==="start",o);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(Gd)))),a}function bc(e){return e.replace(/left|right|bottom|top/g,t=>U2[t])}function K2(e){return typeof e!="number"?function(t){return Te({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function eu(e){var{x:t,y:r,width:o,height:s}=e;return{width:o,height:s,top:r,left:t,right:t+o,bottom:r+s,x:t,y:r}}function Ah(e,t,r){var o,{reference:s,floating:a}=e,i=Ia(t),l=o0(t),c=r0(l),d=_s(t),u=i==="y",g=s.x+s.width/2-a.width/2,m=s.y+s.height/2-a.height/2,j=s[c]/2-a[c]/2;switch(d){case"top":o={x:g,y:s.y-a.height};break;case"bottom":o={x:g,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:m};break;case"left":o={x:s.x-a.width,y:m};break;default:o={x:s.x,y:s.y}}switch(_u(t)){case"start":o[l]-=j*(r&&u?-1:1);break;case"end":o[l]+=j*(r&&u?-1:1)}return o}var Q2=function(){var e=kt(function*(t,r,o){for(var{placement:s="bottom",strategy:a="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),d=yield l.isRTL==null?void 0:l.isRTL(r),u=yield l.getElementRects({reference:t,floating:r,strategy:a}),{x:g,y:m}=Ah(u,s,d),j=s,p={},x=0,v=0;v<c.length;v++){var{name:h,fn:f}=c[v],{x:y,y:w,data:b,reset:k}=yield f({x:g,y:m,initialPlacement:s,placement:j,strategy:a,middlewareData:p,rects:u,platform:l,elements:{reference:t,floating:r}});g=y??g,m=w??m,p=Te(Te({},p),{},{[h]:Te(Te({},p[h]),b)}),k&&x<=50&&(x++,typeof k=="object"&&(k.placement&&(j=k.placement),k.rects&&(u=k.rects===!0?yield l.getElementRects({reference:t,floating:r,strategy:a}):k.rects),{x:g,y:m}=Ah(u,j,d)),v=-1)}return{x:g,y:m,placement:j,strategy:a,middlewareData:p}});return function(t,r,o){return e.apply(this,arguments)}}();function a0(e,t){return Yd.apply(this,arguments)}function Yd(){return Yd=kt(function*(e,t){var r;t===void 0&&(t={});var{x:o,y:s,platform:a,rects:i,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:m=!1,padding:j=0}=Su(t,e),p=K2(j),x=l[m?g==="floating"?"reference":"floating":g],v=eu(yield a.getClippingRect({element:(r=yield a.isElement==null?void 0:a.isElement(x))==null||r?x:x.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),h=g==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,f=yield a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating),y=(yield a.isElement==null?void 0:a.isElement(f))&&(yield a.getScale==null?void 0:a.getScale(f))||{x:1,y:1},w=eu(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:h,offsetParent:f,strategy:c}):h);return{top:(v.top-w.top+p.top)/y.y,bottom:(w.bottom-v.bottom+p.bottom)/y.y,left:(v.left-w.left+p.left)/y.x,right:(w.right-v.right+p.right)/y.x}}),Yd.apply(this,arguments)}var J2=new Set(["left","top"]);function Xd(){return Xd=kt(function*(e,t){var{placement:r,platform:o,elements:s}=e,a=yield o.isRTL==null?void 0:o.isRTL(s.floating),i=_s(r),l=_u(r),c=Ia(r)==="y",d=J2.has(i)?-1:1,u=a&&c?-1:1,g=Su(t,e),{mainAxis:m,crossAxis:j,alignmentAxis:p}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return l&&typeof p=="number"&&(j=l==="end"?-1*p:p),c?{x:j*u,y:m*d}:{x:m*d,y:j*u}}),Xd.apply(this,arguments)}function Cu(){return typeof window<"u"}function vi(e){return s0(e)?(e.nodeName||"").toLowerCase():"#document"}function yo(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ra(e){var t;return(t=(s0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function s0(e){return!!Cu()&&(e instanceof Node||e instanceof yo(e).Node)}function Lo(e){return!!Cu()&&(e instanceof Element||e instanceof yo(e).Element)}function aa(e){return!!Cu()&&(e instanceof HTMLElement||e instanceof yo(e).HTMLElement)}function Ih(e){return!(!Cu()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof yo(e).ShadowRoot)}var G2=new Set(["inline","contents"]);function Xi(e){var{overflow:t,overflowX:r,overflowY:o,display:s}=Uo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!G2.has(s)}var Y2=new Set(["table","td","th"]);function X2(e){return Y2.has(vi(e))}var Z2=[":popover-open",":modal"];function tu(e){return Z2.some(t=>{try{return e.matches(t)}catch{return!1}})}var ek=["transform","translate","scale","rotate","perspective"],tk=["transform","translate","scale","rotate","perspective","filter"],nk=["paint","layout","strict","content"];function Zd(e){var t=Kf(),r=Lo(e)?Uo(e):e;return ek.some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||tk.some(o=>(r.willChange||"").includes(o))||nk.some(o=>(r.contain||"").includes(o))}function Kf(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var rk=new Set(["html","body","#document"]);function ni(e){return rk.has(vi(e))}function Uo(e){return yo(e).getComputedStyle(e)}function Eu(e){return Lo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function qa(e){if(vi(e)==="html")return e;var t=e.assignedSlot||e.parentNode||Ih(e)&&e.host||ra(e);return Ih(t)?t.host:t}function i0(e){var t=qa(e);return ni(t)?e.ownerDocument?e.ownerDocument.body:e.body:aa(t)&&Xi(t)?t:i0(t)}function Zi(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var s=i0(e),a=s===((o=e.ownerDocument)==null?void 0:o.body),i=yo(s);if(a){var l=ef(i);return t.concat(i,i.visualViewport||[],Xi(s)?s:[],l&&r?Zi(l):[])}return t.concat(s,Zi(s,[],r))}function ef(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function l0(e){var t=Uo(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,s=aa(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:o,l=Zc(r)!==a||Zc(o)!==i;return l&&(r=a,o=i),{width:r,height:o,$:l}}function Qf(e){return Lo(e)?e:e.contextElement}function ri(e){var t=Qf(e);if(!aa(t))return na(1);var r=t.getBoundingClientRect(),{width:o,height:s,$:a}=l0(t),i=(a?Zc(r.width):r.width)/o,l=(a?Zc(r.height):r.height)/s;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var ok=na(0);function c0(e){var t=yo(e);return Kf()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ok}function Cs(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var s=e.getBoundingClientRect(),a=Qf(e),i=na(1);t&&(o?Lo(o)&&(i=ri(o)):i=ri(e));var l=function(b,k,$){return k===void 0&&(k=!1),!(!$||k&&$!==yo(b))&&k}(a,r,o)?c0(a):na(0),c=(s.left+l.x)/i.x,d=(s.top+l.y)/i.y,u=s.width/i.x,g=s.height/i.y;if(a)for(var m=yo(a),j=o&&Lo(o)?yo(o):o,p=m,x=ef(p);x&&o&&j!==p;){var v=ri(x),h=x.getBoundingClientRect(),f=Uo(x),y=h.left+(x.clientLeft+parseFloat(f.paddingLeft))*v.x,w=h.top+(x.clientTop+parseFloat(f.paddingTop))*v.y;c*=v.x,d*=v.y,u*=v.x,g*=v.y,c+=y,d+=w,x=ef(p=yo(x))}return eu({width:u,height:g,x:c,y:d})}function Jf(e,t){var r=Eu(e).scrollLeft;return t?t.left+r:Cs(ra(e)).left+r}function u0(e,t,r){r===void 0&&(r=!1);var o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(r?0:Jf(e,o)),y:o.top+t.scrollTop}}var ak=new Set(["absolute","fixed"]);function qh(e,t,r){var o;if(t==="viewport")o=function(a,i){var l=yo(a),c=ra(a),d=l.visualViewport,u=c.clientWidth,g=c.clientHeight,m=0,j=0;if(d){u=d.width,g=d.height;var p=Kf();(!p||p&&i==="fixed")&&(m=d.offsetLeft,j=d.offsetTop)}return{width:u,height:g,x:m,y:j}}(e,r);else if(t==="document")o=function(a){var i=ra(a),l=Eu(a),c=a.ownerDocument.body,d=bs(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),u=bs(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),g=-l.scrollLeft+Jf(a),m=-l.scrollTop;return Uo(c).direction==="rtl"&&(g+=bs(i.clientWidth,c.clientWidth)-d),{width:d,height:u,x:g,y:m}}(ra(e));else if(Lo(t))o=function(a,i){var l=Cs(a,!0,i==="fixed"),c=l.top+a.clientTop,d=l.left+a.clientLeft,u=aa(a)?ri(a):na(1);return{width:a.clientWidth*u.x,height:a.clientHeight*u.y,x:d*u.x,y:c*u.y}}(t,r);else{var s=c0(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return eu(o)}function d0(e,t){var r=qa(e);return!(r===t||!Lo(r)||ni(r))&&(Uo(r).position==="fixed"||d0(r,t))}function sk(e,t,r){var o=aa(t),s=ra(t),a=r==="fixed",i=Cs(e,!0,a,t),l={scrollLeft:0,scrollTop:0},c=na(0);function d(){c.x=Jf(s)}if(o||!o&&!a)if((vi(t)!=="body"||Xi(s))&&(l=Eu(t)),o){var u=Cs(t,!0,a,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else s&&d();a&&!o&&s&&d();var g=!s||o||a?na(0):u0(s,l);return{x:i.left+l.scrollLeft-c.x-g.x,y:i.top+l.scrollTop-c.y-g.y,width:i.width,height:i.height}}function md(e){return Uo(e).position==="static"}function Dh(e,t){if(!aa(e)||Uo(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return ra(e)===r&&(r=r.ownerDocument.body),r}function Lh(e,t){var r=yo(e);if(tu(e))return r;if(!aa(e)){for(var o=qa(e);o&&!ni(o);){if(Lo(o)&&!md(o))return o;o=qa(o)}return r}for(var s=Dh(e,t);s&&X2(s)&&md(s);)s=Dh(s,t);return s&&ni(s)&&md(s)&&!Zd(s)?r:s||function(a){for(var i=qa(a);aa(i)&&!ni(i);){if(Zd(i))return i;if(tu(i))return null;i=qa(i)}return null}(e)||r}var ik={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:r,offsetParent:o,strategy:s}=e,a=s==="fixed",i=ra(o),l=!!t&&tu(t.floating);if(o===i||l&&a)return r;var c={scrollLeft:0,scrollTop:0},d=na(1),u=na(0),g=aa(o);if((g||!g&&!a)&&((vi(o)!=="body"||Xi(i))&&(c=Eu(o)),aa(o))){var m=Cs(o);d=ri(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}var j=!i||g||a?na(0):u0(i,c,!0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+j.x,y:r.y*d.y-c.scrollTop*d.y+u.y+j.y}},getDocumentElement:ra,getClippingRect:function(e){var{element:t,boundary:r,rootBoundary:o,strategy:s}=e,a=[...r==="clippingAncestors"?tu(t)?[]:function(c,d){var u=d.get(c);if(u)return u;for(var g=Zi(c,[],!1).filter(h=>Lo(h)&&vi(h)!=="body"),m=null,j=Uo(c).position==="fixed",p=j?qa(c):c;Lo(p)&&!ni(p);){var x=Uo(p),v=Zd(p);v||x.position!=="fixed"||(m=null),(j?!v&&!m:!v&&x.position==="static"&&m&&ak.has(m.position)||Xi(p)&&!v&&d0(c,p))?g=g.filter(h=>h!==p):m=x,p=qa(p)}return d.set(c,g),g}(t,this._c):[].concat(r),o],i=a[0],l=a.reduce((c,d)=>{var u=qh(t,d,s);return c.top=bs(u.top,c.top),c.right=Xc(u.right,c.right),c.bottom=Xc(u.bottom,c.bottom),c.left=bs(u.left,c.left),c},qh(t,i,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Lh,getElementRects:function(){var e=kt(function*(t){var r=this.getOffsetParent||Lh,o=this.getDimensions,s=yield o(t.floating);return{reference:sk(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:r}=l0(e);return{width:t,height:r}},getScale:ri,isElement:Lo,isRTL:function(e){return Uo(e).direction==="rtl"}};function Uh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function lk(e,t,r,o){o===void 0&&(o={});var{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,d=Qf(e),u=s||a?[...d?Zi(d):[],...Zi(t)]:[];u.forEach(v=>{s&&v.addEventListener("scroll",r,{passive:!0}),a&&v.addEventListener("resize",r)});var g,m=d&&l?function(v,h){var f,y=null,w=ra(v);function b(){var k;clearTimeout(f),(k=y)==null||k.disconnect(),y=null}return function k($,M){$===void 0&&($=!1),M===void 0&&(M=1),b();var z=v.getBoundingClientRect(),{left:H,top:G,width:ee,height:te}=z;if($||h(),ee&&te){var je={rootMargin:-gc(G)+"px "+-gc(w.clientWidth-(H+ee))+"px "+-gc(w.clientHeight-(G+te))+"px "+-gc(H)+"px",threshold:bs(0,Xc(1,M))||1},B=!0;try{y=new IntersectionObserver(pe,Te(Te({},je),{},{root:w.ownerDocument}))}catch{y=new IntersectionObserver(pe,je)}y.observe(v)}function pe($e){var ke=$e[0].intersectionRatio;if(ke!==M){if(!B)return k();ke?k(!1,ke):f=setTimeout(()=>{k(!1,1e-7)},1e3)}ke!==1||Uh(z,v.getBoundingClientRect())||k(),B=!1}}(!0),b}(d,r):null,j=-1,p=null;i&&(p=new ResizeObserver(v=>{var[h]=v;h&&h.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(j),j=requestAnimationFrame(()=>{var f;(f=p)==null||f.observe(t)})),r()}),d&&!c&&p.observe(d),p.observe(t));var x=c?Cs(e):null;return c&&function v(){var h=Cs(e);x&&!Uh(x,h)&&r(),x=h,g=requestAnimationFrame(v)}(),r(),()=>{var v;u.forEach(h=>{s&&h.removeEventListener("scroll",r),a&&h.removeEventListener("resize",r)}),m?.(),(v=p)==null||v.disconnect(),p=null,c&&cancelAnimationFrame(g)}}var ck=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>kt(function*(){var r,o,{x:s,y:a,placement:i,middlewareData:l}=t,c=yield function(d,u){return Xd.apply(this,arguments)}(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:Te(Te({},c),{},{placement:i})}})()}},uk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>kt(function*(){var{x:r,y:o,placement:s}=t,a=Su(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:y=>{var{x:w,y:b}=y;return{x:w,y:b}}}}=a,d=Am(a,Yx),u={x:r,y:o},g=yield a0(t,d),m=Ia(_s(s)),j=n0(m),p=u[j],x=u[m];if(i){var v=j==="y"?"bottom":"right";p=Nh(p+g[j==="y"?"top":"left"],p,p-g[v])}if(l){var h=m==="y"?"bottom":"right";x=Nh(x+g[m==="y"?"top":"left"],x,x-g[h])}var f=c.fn(Te(Te({},t),{},{[j]:p,[m]:x}));return Te(Te({},f),{},{data:{x:f.x-r,y:f.y-o,enabled:{[j]:i,[m]:l}}})})()}},dk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>kt(function*(){var r,o,{placement:s,middlewareData:a,rects:i,initialPlacement:l,platform:c,elements:d}=t,u=Su(e,t),{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:j,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0}=u,h=Am(u,Gx);if((r=a.arrow)!=null&&r.alignmentOffset)return{};var f=_s(s),y=Ia(l),w=_s(l)===l,b=yield c.isRTL==null?void 0:c.isRTL(d.floating),k=j||(w||!v?[bc(l)]:function(Y){var I=bc(Y);return[Gd(Y),I,Gd(I)]}(l)),$=x!=="none";!j&&$&&k.push(...H2(l,v,x,b));var M=[l,...k],z=yield a0(t,h),H=[],G=((o=a.flip)==null?void 0:o.overflows)||[];if(g&&H.push(z[f]),m){var ee=function(Y,I,se){se===void 0&&(se=!1);var T=_u(Y),E=o0(Y),R=r0(E),ne=E==="x"?T===(se?"end":"start")?"right":"left":T==="start"?"bottom":"top";return I.reference[R]>I.floating[R]&&(ne=bc(ne)),[ne,bc(ne)]}(s,i,b);H.push(z[ee[0]],z[ee[1]])}if(G=[...G,{placement:s,overflows:H}],!H.every(Y=>Y<=0)){var te,je,B=(((te=a.flip)==null?void 0:te.index)||0)+1,pe=M[B];if(pe&&(!(m==="alignment"&&y!==Ia(pe))||G.every(Y=>Y.overflows[0]>0&&Ia(Y.placement)===y)))return{data:{index:B,overflows:G},reset:{placement:pe}};var $e=(je=G.filter(Y=>Y.overflows[0]<=0).sort((Y,I)=>Y.overflows[1]-I.overflows[1])[0])==null?void 0:je.placement;if(!$e)switch(p){case"bestFit":var ke,me=(ke=G.filter(Y=>{if($){var I=Ia(Y.placement);return I===y||I==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(I=>I>0).reduce((I,se)=>I+se,0)]).sort((Y,I)=>Y[1]-I[1])[0])==null?void 0:ke[0];me&&($e=me);break;case"initialPlacement":$e=l}if(s!==$e)return{reset:{placement:$e}}}return{}})()}};function fk(e){var t,r,o={autoUpdate:!0},s=e,a=c=>Te(Te(Te({},o),e||{}),c||{}),i=c=>{t&&r&&(s=a(c),((d,u,g)=>{var m=new Map,j=Te({platform:ik},g),p=Te(Te({},j.platform),{},{_c:m});return Q2(d,u,Te(Te({},j),{},{platform:p}))})(t,r,s).then(d=>{var u;Object.assign(r.style,{position:d.strategy,left:"".concat(d.x,"px"),top:"".concat(d.y,"px")}),!((u=s)===null||u===void 0)&&u.onComputed&&s.onComputed(d)}))},l=c=>{Oo(c.subscribe(d=>{t===void 0?(t=d,i()):(Object.assign(t,d),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,d)=>{var u;r=c,s=a(d),setTimeout(()=>i(d),0),i(d);var g=()=>{u&&(u(),u=void 0)},m=function(){var{autoUpdate:j}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s||{};g(),j!==!1&&function(){return dg.apply(this,arguments)}().then(()=>lk(t,r,()=>i(s),j===!0?{}:j))};return u=m(),{update(j){i(j),u=m(j)},destroy(){g()}}},i]}function vk(e){var{loadOptions:t,filterText:r,items:o,multiple:s,value:a,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:d,convertStringItemsToObjects:u,filterGroupedItems:g,label:m}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=u(o));var j=o.filter(p=>{var x=d(p[m],r,p);return x&&s&&a!=null&&a.length&&(x=!a.some(v=>!!c&&v[i]===p[i])),x});return l&&(j=g(j)),j}function pk(e){return f0.apply(this,arguments)}function f0(){return(f0=kt(function*(e){var{dispatch:t,loadOptions:r,convertStringItemsToObjects:o,filterText:s}=e,a=yield r(s).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!="object"&&(a=o(a)),t("loaded",{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}St(`
  svg.svelte-qbd276 {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var hk=ts(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-qbd276"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);St(`
    svg.svelte-whdbu1 {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var mk=ts(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-whdbu1"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function gd(e){X(e,mk())}St(`
    .loading.svelte-1p3nqvd {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-1p3nqvd-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-1p3nqvd {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-1p3nqvd-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var gk=ts('<svg class="loading svelte-1p3nqvd" viewBox="25 25 50 50"><circle class="circle_path svelte-1p3nqvd" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');St(`
    .svelte-select.svelte-82qwg8 {
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

    .svelte-82qwg8 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-82qwg8:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-82qwg8 {
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

    .prepend.svelte-82qwg8,
    .indicators.svelte-82qwg8 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-82qwg8 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-82qwg8 {
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

    .svelte-82qwg8:not(.multi) > .value-container:where(.svelte-82qwg8) > input:where(.svelte-82qwg8) {
        width: 100%;
        height: 100%;
    }

    input.svelte-82qwg8::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-82qwg8:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-82qwg8 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-82qwg8 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-82qwg8 input:where(.svelte-82qwg8)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-82qwg8 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-82qwg8 .selected-item:where(.svelte-82qwg8) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-82qwg8:focus {
        outline: none;
    }

    .hide-selected-item.svelte-82qwg8 {
        opacity: 0;
    }

    .icon.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-82qwg8 {
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

    .clear-select.svelte-82qwg8:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-82qwg8 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-82qwg8 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-82qwg8 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-82qwg8 input:where(.svelte-82qwg8) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-82qwg8 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-82qwg8 {
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

    .multi-item.svelte-82qwg8 {
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

    .multi-item.disabled.svelte-82qwg8:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-82qwg8 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-82qwg8 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-82qwg8 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-82qwg8 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-82qwg8 {
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

    .empty.svelte-82qwg8 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-82qwg8 {
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

    .item.group-item.svelte-82qwg8 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-82qwg8:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-82qwg8 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-82qwg8 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-82qwg8:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-82qwg8,
    .item.hover.item.not-selectable.svelte-82qwg8,
    .item.active.item.not-selectable.svelte-82qwg8,
    .item.not-selectable.svelte-82qwg8:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-82qwg8 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var bk=de('<div class="list-item svelte-82qwg8" tabindex="-1" role="none"><div><!></div></div>'),yk=de('<div class="empty svelte-82qwg8">No options</div>'),jk=de('<div role="none"><!> <!> <!></div>'),xk=de('<span id="aria-selection" class="svelte-82qwg8"> </span> <span id="aria-context" class="svelte-82qwg8"> </span>',1),wk=de('<div class="multi-item-clear svelte-82qwg8"><!></div>'),kk=de('<div role="none"><span class="multi-item-text svelte-82qwg8"><!></span> <!></div>'),Sk=de("<div><!></div>"),_k=de('<div class="icon loading svelte-82qwg8" aria-hidden="true"><!></div>'),Ck=de('<button type="button" class="icon clear-select svelte-82qwg8"><!></button>'),Ek=de('<div class="icon chevron svelte-82qwg8" aria-hidden="true"><!></div>'),Ok=de('<input type="hidden" class="svelte-82qwg8"/>'),$k=de('<select class="required svelte-82qwg8" required tabindex="-1" aria-hidden="true"></select>'),Pk=de('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-82qwg8"><!></span> <div class="prepend svelte-82qwg8"><!></div> <div class="value-container svelte-82qwg8"><!> <input/></div> <div class="indicators svelte-82qwg8"><!> <!> <!></div> <!> <!></div>');function fs(e,t){var r=function(le){var xe={};for(var Fe in le.children&&(xe.default=!0),le.$$slots)xe[Fe]=!0;return xe}(t);ct(t,!1);var o,s=Q(),a=Q(),i=Q(),l=Q(),c=Q(),d=Q(),u=Q(),g=Q(),m=Q(),j=xw(),p=_(t,"justValue",12,null),x=_(t,"filter",8,vk),v=_(t,"getItems",8,pk),h=_(t,"id",8,null),f=_(t,"name",8,null),y=_(t,"container",12,void 0),w=_(t,"input",12,void 0),b=_(t,"multiple",8,!1),k=_(t,"multiFullItemClearable",8,!1),$=_(t,"disabled",8,!1),M=_(t,"focused",12,!1),z=_(t,"value",12,null),H=_(t,"filterText",12,""),G=_(t,"placeholder",8,"Please select"),ee=_(t,"placeholderAlwaysShow",8,!1),te=_(t,"items",12,null),je=_(t,"label",8,"label"),B=_(t,"itemFilter",8,(le,xe,Fe)=>"".concat(le).toLowerCase().includes(xe.toLowerCase())),pe=_(t,"groupBy",8,void 0),$e=_(t,"groupFilter",8,le=>le),ke=_(t,"groupHeaderSelectable",8,!1),me=_(t,"itemId",8,"value"),Y=_(t,"loadOptions",8,void 0),I=_(t,"containerStyles",8,""),se=_(t,"hasError",8,!1),T=_(t,"filterSelectedItems",8,!0),E=_(t,"required",8,!1),R=_(t,"closeListOnChange",8,!0),ne=_(t,"clearFilterTextOnBlur",8,!0),Se=_(t,"createGroupHeaderItem",8,(le,xe)=>({value:le,[je()]:le})),K=()=>n(u),F=_(t,"searchable",8,!0),ie=_(t,"inputStyles",8,""),P=_(t,"clearable",8,!0),U=_(t,"loading",12,!1),L=_(t,"listOpen",12,!1),fe=_(t,"debounce",8,function(le){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(le,xe)}),J=_(t,"debounceWait",8,300),V=_(t,"hideEmptyState",8,!1),Ze=_(t,"inputAttributes",24,()=>({})),Je=_(t,"listAutoWidth",8,!0),Oe=_(t,"showChevron",8,!1),Xe=_(t,"listOffset",8,5),Ne=_(t,"hoverItemIndex",12,0),Le=_(t,"floatingConfig",24,()=>({})),lt=_(t,"class",8,""),He=Q(),_t=Q(),O=Q(),N=Q(),D=Q();function re(le){return le.map((xe,Fe)=>({index:Fe,value:xe,label:"".concat(xe)}))}function he(le){var xe=[],Fe={};le.forEach(nn=>{var Tt=pe()(nn);xe.includes(Tt)||(xe.push(Tt),Fe[Tt]=[],Tt&&Fe[Tt].push(Object.assign(Se()(Tt,nn),{id:Tt,groupHeader:!0,selectable:ke()}))),Fe[Tt].push(Object.assign({groupItem:!!Tt},nn))});var Ot=[];return $e()(xe).forEach(nn=>{Fe[nn]&&Ot.push(...Fe[nn])}),Ot}function Me(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,xe=arguments.length>1?arguments[1]:void 0;Ne(le<0?0:le),!xe&&pe()&&n(u)[Ne()]&&!n(u)[Ne()].selectable&&Ft(1)}function Ue(){var le=!0;if(z()){var xe=[],Fe=[];z().forEach(Ot=>{xe.includes(Ot[me()])?le=!1:(xe.push(Ot[me()]),Fe.push(Ot))}),le||z(Fe)}return le}function be(le){var xe=le?le[me()]:z()[me()];return te().find(Fe=>Fe[me()]===xe)}function ve(le){return vt.apply(this,arguments)}function vt(){return(vt=kt(function*(le){var xe=z()[le];z().length===1?z(void 0):z(z().filter(Fe=>Fe!==xe)),j("clear",xe)})).apply(this,arguments)}function tt(le){if(M())switch(le.stopPropagation(),le.key){case"Escape":le.preventDefault(),Wt();break;case"Enter":if(le.preventDefault(),L()){if(n(u).length===0)break;var xe=n(u)[Ne()];if(z()&&!b()&&z()[me()]===xe[me()]){Wt();break}Ge(n(u)[Ne()])}break;case"ArrowDown":le.preventDefault(),L()?Ft(1):(L(!0),S(He,void 0));break;case"ArrowUp":le.preventDefault(),L()?Ft(-1):(L(!0),S(He,void 0));break;case"Tab":if(L()&&M()){if(n(u).length===0||z()&&z()[me()]===n(u)[Ne()][me()])return Wt();le.preventDefault(),Ge(n(u)[Ne()]),Wt()}break;case"Backspace":if(!b()||H().length>0)return;if(b()&&z()&&z().length>0){if(ve(n(He)!==void 0?n(He):z().length-1),n(He)===0||n(He)===void 0)break;S(He,z().length>n(He)?n(He)-1:void 0)}break;case"ArrowLeft":if(!z()||!b()||H().length>0)return;n(He)===void 0?S(He,z().length-1):z().length>n(He)&&n(He)!==0&&S(He,n(He)-1);break;case"ArrowRight":if(!z()||!b()||H().length>0||n(He)===void 0)return;n(He)===z().length-1?S(He,void 0):n(He)<z().length-1&&S(He,n(He)+1)}}function Ee(le){var xe,Fe;M()&&w()===((xe=document)===null||xe===void 0?void 0:xe.activeElement)||(le&&j("focus",le),(Fe=w())===null||Fe===void 0||Fe.focus(),M(!0))}function pt(le){return ln.apply(this,arguments)}function ln(){return(ln=kt(function*(le){var xe;yt||(L()||M())&&(j("blur",le),Wt(),M(!1),S(He,void 0),(xe=w())===null||xe===void 0||xe.blur())})).apply(this,arguments)}function On(){if(!$())return H().length>0?L(!0):void L(!L())}function en(){j("clear",z()),z(void 0),Wt(),Ee()}function Wt(){ne()&&H(""),L(!1)}ww(kt(function*(){S(_t,z()),S(O,H()),S(N,b())})),Qr(()=>{L()&&M(!0),M()&&w()&&w().focus()});var wn=_(t,"ariaValues",8,le=>"Option ".concat(le,", selected.")),Jt=_(t,"ariaListOpen",8,(le,xe)=>"You are currently focused on option ".concat(le,". There are ").concat(xe," results available.")),Nt=_(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),Ct,Yt=Q(null);function cn(){clearTimeout(Ct),Ct=setTimeout(()=>{yt=!1},100)}Oo(()=>{var le;(le=n(Yt))===null||le===void 0||le.remove()});var yt=!1;function Ge(le){le&&le.selectable!==!1&&function(xe){if(xe){H("");var Fe=Object.assign({},xe);if(Fe.groupHeader&&!Fe.selectable)return;z(b()?z()?z().concat([Fe]):[Fe]:z(Fe)),setTimeout(()=>{R()&&Wt(),S(He,void 0),j("change",z()),j("select",xe)})}}(le)}function Ht(le){yt||Ne(le)}function Ft(le){if(n(u).filter(Fe=>!Object.hasOwn(Fe,"selectable")||Fe.selectable===!0).length===0)return Ne(0);le>0&&Ne()===n(u).length-1?Ne(0):le<0&&Ne()===0?Ne(n(u).length-1):Ne(Ne()+le);var xe=n(u)[Ne()];xe&&xe.selectable===!1&&(le!==1&&le!==-1||Ft(le))}function Nn(le,xe,Fe){if(!b())return xe&&xe[Fe]===le[Fe]}var Mn=jr,hn=jr;function jr(le){return{update(xe){xe.scroll&&(cn(),le.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Tn=Q({strategy:"absolute",placement:"bottom-start",middleware:[ck(Xe()),dk(),uk()],autoUpdate:!1}),[rr,kr,Sr]=fk(n(Tn)),hr=Q(!0);ce(()=>(C(te()),C(z())),()=>{te(),z()&&function(){if(typeof z()=="string"){var le=(te()||[]).find(xe=>xe[me()]===z());z(le||{[me()]:z(),label:z()})}else b()&&Array.isArray(z())&&z().length>0&&z(z().map(xe=>typeof xe=="string"?{value:xe,label:xe}:xe))}()}),ce(()=>(C(Ze()),C(F())),()=>{!Ze()&&F()||(S(D,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},Ze())),h()&&go(D,n(D).id=h()),F()||go(D,n(D).readonly=!0))}),ce(()=>C(b()),()=>{b()&&z()&&(Array.isArray(z())?z([...z()]):z([z()]))}),ce(()=>(n(N),C(b())),()=>{n(N)&&!b()&&z()&&z(null)}),ce(()=>(C(b()),C(z())),()=>{b()&&z()&&z().length>1&&Ue()}),ce(()=>C(z()),()=>{z()&&(b()?JSON.stringify(z())!==JSON.stringify(n(_t))&&Ue()&&j("input",z()):n(_t)&&JSON.stringify(z()[me()])===JSON.stringify(n(_t)[me()])||j("input",z()))}),ce(()=>(C(z()),C(b()),n(_t)),()=>{!z()&&b()&&n(_t)&&j("input",z())}),ce(()=>(C(M()),C(w())),()=>{!M()&&w()&&Wt()}),ce(()=>(C(H()),n(O)),()=>{H()!==n(O)&&(Y()||H().length!==0)&&(Y()?fe()(kt(function*(){U(!0);var le=yield v()({dispatch:j,loadOptions:Y(),convertStringItemsToObjects:re,filterText:H()});le?(U(le.loading),L(L()?le.listOpen:H().length>0),M(L()&&le.focused),te(pe()?he(le.filteredItems):le.filteredItems)):(U(!1),M(!0),L(!0))}),J()):(L(!0),b()&&S(He,void 0)))}),ce(()=>(C(x()),C(Y()),C(H()),C(te()),C(b()),C(z()),C(me()),C(pe()),C(je()),C(T()),C(B())),()=>{S(u,x()({loadOptions:Y(),filterText:H(),items:te(),multiple:b(),value:z(),itemId:me(),groupBy:pe(),label:je(),filterSelectedItems:T(),itemFilter:B(),convertStringItemsToObjects:re,filterGroupedItems:he}))}),ce(()=>(C(b()),C(L()),C(z()),n(u)),()=>{!b()&&L()&&z()&&n(u)&&Me(n(u).findIndex(le=>le[me()]===z()[me()]),!0)}),ce(()=>(C(L()),C(b())),()=>{L()&&b()&&Ne(0)}),ce(()=>C(H()),()=>{H()&&Ne(0)}),ce(()=>C(Ne()),()=>{var le;le=Ne(),j("hoverItem",le)}),ce(()=>(C(b()),C(z())),()=>{S(s,b()?z()&&z().length>0:z())}),ce(()=>(n(s),C(H())),()=>{S(a,n(s)&&H().length>0)}),ce(()=>(n(s),C(P()),C($()),C(U())),()=>{S(i,n(s)&&P()&&!$()&&!U())}),ce(()=>(C(ee()),C(b()),C(G()),C(z())),()=>{var le;S(l,ee()&&b()||b()&&((le=z())===null||le===void 0?void 0:le.length)===0?G():z()?"":G())}),ce(()=>(C(z()),C(b())),()=>{var le,xe;S(c,z()?(le=b(),xe=void 0,xe=le&&z().length>0?z().map(Fe=>Fe[je()]).join(", "):z()[je()],wn()(xe)):"")}),ce(()=>(n(u),C(Ne()),C(M()),C(L())),()=>{S(d,function(){if(!n(u)||n(u).length===0)return"";var le=n(u)[Ne()];if(L()&&le){var xe=n(u)?n(u).length:0;return Jt()(le[je()],xe)}return Nt()()}((n(u),Ne(),M(),L())))}),ce(()=>C(te()),()=>{(function(le){le&&le.length!==0&&!le.some(xe=>typeof xe!="object")&&z()&&(b()?!z().some(xe=>!xe||!xe[me()]):z()[me()])&&(Array.isArray(z())?z(z().map(xe=>be(xe)||xe)):z(be()||z()))})(te())}),ce(()=>(C(b()),C(z()),C(me())),()=>{p((b(),z(),me(),b()?z()?z().map(le=>le[me()]):null:z()?z()[me()]:z()))}),ce(()=>(C(b()),n(_t),C(z())),()=>{b()||!n(_t)||z()||j("input",z())}),ce(()=>(C(L()),n(u),C(b()),C(z())),()=>{L()&&n(u)&&!b()&&!z()&&Me()}),ce(()=>n(u),()=>{(function(le){L()&&j("filter",le)})(n(u))}),ce(()=>(C(y()),C(Le()),n(Tn)),()=>{y()&&Le()&&Sr(Object.assign(n(Tn),Le()))}),ce(()=>n(Yt),()=>{S(g,!!n(Yt))}),ce(()=>(n(Yt),C(L())),()=>{(function(le,xe){if(!le||!xe)return S(hr,!0);setTimeout(()=>{S(hr,!1)},0)})(n(Yt),L())}),ce(()=>(C(L()),C(y()),n(Yt)),()=>{L()&&y()&&n(Yt)&&function(){var{width:le}=y().getBoundingClientRect();go(Yt,n(Yt).style.width=Je()?le+"px":"auto")}()}),ce(()=>C(Ne()),()=>{S(m,Ne())}),ce(()=>(C(w()),C(L()),C(M())),()=>{w()&&L()&&!M()&&Ee()}),ce(()=>(C(y()),C(Le())),()=>{var le;y()&&((le=Le())===null||le===void 0?void 0:le.autoUpdate)===void 0&&go(Tn,n(Tn).autoUpdate=!0)}),En(),zt();var Ln,ur=Pk();Re("click",ja,function(le){var xe;L()||M()||!y()||y().contains(le.target)||(xe=n(Yt))!==null&&xe!==void 0&&xe.contains(le.target)||pt()}),Re("keydown",ja,tt);var Pe=W(ur),Xt=le=>{var xe,Fe=jk(),Ot=W(Fe),nn=Rt=>{var _n=lr();fr(ht(_n),t,"list-prepend",{},null),X(Rt,_n)};ye(Ot,Rt=>{Z(()=>r["list-prepend"])&&Rt(nn)});var Tt=ae(Ot,2),Sn=Rt=>{var _n=lr();fr(ht(_n),t,"list",{get filteredItems(){return n(u)}},null),X(Rt,_n)},or=(Rt,_n)=>{var Fr=tr=>{var yn=lr();pr(ht(yn),1,()=>n(u),wr,(Fn,rt,zn)=>{var mr,It=bk(),io=W(It);fr(W(io),t,"item",{get item(){return n(rt)},index:zn},gr=>{var _r=Tr();Ae(()=>dt(_r,(n(rt),C(je()),Z(()=>{var xr;return(xr=n(rt))===null||xr===void 0?void 0:xr[je()]})))),X(gr,_r)}),Yr(io,(gr,_r)=>Mn?.(gr),()=>({scroll:Nn(n(rt),z(),me()),listDom:n(g)})),Yr(io,(gr,_r)=>hn?.(gr),()=>({scroll:n(m)===zn,listDom:n(g)})),Ae(gr=>mr=Pt(io,1,"item svelte-82qwg8",null,mr,gr),[()=>{var gr,_r;return{"list-group-title":n(rt).groupHeader,active:Nn(n(rt),z(),me()),first:(_r=zn,_r===0),hover:Ne()===zn,"group-item":n(rt).groupItem,"not-selectable":((gr=n(rt))===null||gr===void 0?void 0:gr.selectable)===!1}}],Ce),Re("mouseover",It,()=>Ht(zn)),Re("focus",It,()=>Ht(zn)),Re("click",It,fa(()=>function(gr){var{item:_r,i:xr}=gr;if(_r?.selectable!==!1)return z()&&!b()&&z()[me()]===_r[me()]?Wt():void(function(Vr){return Vr.groupHeader&&Vr.selectable||Vr.selectable||!Vr.hasOwnProperty("selectable")}(_r)&&(Ne(xr),Ge(_r)))}({item:n(rt),i:zn}))),Re("keydown",It,Pa(fa(function(gr){Ti.call(this,t,gr)}))),X(Fn,It)}),X(tr,yn)},jt=(tr,yn)=>{var Fn=rt=>{var zn=lr();fr(ht(zn),t,"empty",{},mr=>{X(mr,yk())}),X(rt,zn)};ye(tr,rt=>{V()||rt(Fn)},yn)};ye(Rt,tr=>{n(u),Z(()=>n(u).length>0)?tr(Fr):tr(jt,!1)},_n)};ye(Tt,Rt=>{Z(()=>r.list)?Rt(Sn):Rt(or,!1)});var An=ae(Tt,2),Zt=Rt=>{var _n=lr();fr(ht(_n),t,"list-append",{},null),X(Rt,_n)};ye(An,Rt=>{Z(()=>r["list-append"])&&Rt(Zt)}),Yr(Fe,Rt=>kr?.(Rt)),er(Fe,Rt=>S(Yt,Rt),()=>n(Yt)),Lr(()=>Re("scroll",Fe,cn)),Lr(()=>Re("pointerup",Fe,Pa(fa(function(Rt){Ti.call(this,t,Rt)})))),Lr(()=>Re("mousedown",Fe,Pa(fa(function(Rt){Ti.call(this,t,Rt)})))),Ae(Rt=>xe=Pt(Fe,1,"svelte-select-list svelte-82qwg8",null,xe,Rt),[()=>({prefloat:n(hr)})],Ce),X(le,Fe)};ye(Pe,le=>{L()&&le(Xt)});var kn=ae(Pe,2),Un=W(kn),ge=le=>{var xe=xk(),Fe=ht(xe),Ot=W(Fe),nn=W(ae(Fe,2));Ae(()=>{dt(Ot,n(c)),dt(nn,n(d))}),X(le,xe)};ye(Un,le=>{M()&&le(ge)});var qe=ae(kn,2);fr(W(qe),t,"prepend",{},null);var Ve=ae(qe,2),Et=W(Ve),Lt=le=>{var xe=lr(),Fe=ht(xe),Ot=Tt=>{var Sn=lr();pr(ht(Sn),1,z,wr,(or,An,Zt)=>{var Rt,_n=kk(),Fr=W(_n);fr(W(Fr),t,"selection",{get selection(){return n(An)},index:Zt},yn=>{var Fn=Tr();Ae(()=>dt(Fn,(n(An),C(je()),Z(()=>n(An)[je()])))),X(yn,Fn)});var jt=ae(Fr,2),tr=yn=>{var Fn=wk();fr(W(Fn),t,"multi-clear-icon",{},rt=>{gd(rt)}),Re("pointerup",Fn,Pa(fa(()=>ve(Zt)))),X(yn,Fn)};ye(jt,yn=>{$()||k()||!gd||yn(tr)}),Ae(yn=>Rt=Pt(_n,1,"multi-item svelte-82qwg8",null,Rt,yn),[()=>({active:n(He)===Zt,disabled:$()})],Ce),Re("click",_n,Pa(()=>k()?ve(Zt):{})),Re("keydown",_n,Pa(fa(function(yn){Ti.call(this,t,yn)}))),X(or,_n)}),X(Tt,Sn)},nn=Tt=>{var Sn,or=Sk();fr(W(or),t,"selection",{get selection(){return z()}},An=>{var Zt=Tr();Ae(()=>dt(Zt,(C(z()),C(je()),Z(()=>z()[je()])))),X(An,Zt)}),Ae(An=>Sn=Pt(or,1,"selected-item svelte-82qwg8",null,Sn,An),[()=>({"hide-selected-item":n(a)})],Ce),X(Tt,or)};ye(Fe,Tt=>{b()?Tt(Ot):Tt(nn,!1)}),X(le,xe)};ye(Et,le=>{n(s)&&le(Lt)});var Ut=ae(Et,2);_c(Ut,()=>Te(Te({readOnly:!F()},n(D)),{},{placeholder:n(l),style:ie(),disabled:$()}),void 0,"svelte-82qwg8"),er(Ut,le=>w(le),()=>w());var tn=ae(Ve,2),it=W(tn),Dt=le=>{var xe=_k();fr(W(xe),t,"loading-icon",{},Fe=>{(function(Ot){X(Ot,gk())})(Fe)}),X(le,xe)};ye(it,le=>{U()&&le(Dt)});var Ye=ae(it,2),bn=le=>{var xe=Ck();fr(W(xe),t,"clear-icon",{},Fe=>{gd(Fe)}),Re("click",xe,en),X(le,xe)};ye(Ye,le=>{n(i)&&le(bn)});var $n=ae(Ye,2),Qn=le=>{var xe=Ek();fr(W(xe),t,"chevron-icon",{get listOpen(){return L()}},Fe=>{(function(Ot){X(Ot,hk())})(Fe)}),X(le,xe)};ye($n,le=>{Oe()&&le(Qn)});var At=ae(tn,2);fr(At,t,"input-hidden",{get value(){return z()}},le=>{var xe=Ok();Ae(Fe=>{Cn(xe,"name",f()),ws(xe,Fe)},[()=>(C(z()),Z(()=>z()?JSON.stringify(z()):null))],Ce),X(le,xe)});var un=ae(At,2),Mt=le=>{var xe=lr();fr(ht(xe),t,"required",{get value(){return z()}},Fe=>{X(Fe,$k())}),X(le,xe)};return ye(un,le=>{C(E()),C(z()),Z(()=>E()&&(!z()||z().length===0))&&le(Mt)}),Lr(()=>Re("pointerup",ur,Pa(On))),er(ur,le=>y(le),()=>y()),Yr(ur,le=>rr?.(le)),Ae(le=>{var xe;Ln=Pt(ur,1,"svelte-select ".concat((xe=lt())!==null&&xe!==void 0?xe:""),"svelte-82qwg8",Ln,le),Io(ur,I())},[()=>({multi:b(),disabled:$(),focused:M(),"list-open":L(),"show-chevron":Oe(),error:se()})],Ce),Re("keydown",Ut,tt),Re("blur",Ut,pt),Re("focus",Ut,Ee),Vc(Ut,H),X(e,ur),bt(t,"getFilteredItems",K),bt(t,"handleClear",en),ut({getFilteredItems:K,handleClear:en})}St(`/* over all fonts, sizes, and colors */
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
table.jse-transform-wizard.svelte-qbze6z {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-qbze6z input:where(.svelte-qbze6z) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) th:where(.svelte-qbze6z) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var zk=de('<table class="jse-transform-wizard svelte-qbze6z"><tbody><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Filter</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!> <input class="jse-filter-value svelte-qbze6z"/></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Sort</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Pick</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!></div></td></tr></tbody></table>');function Rk(e,t){var r,o,s,a,i;ct(t,!1);var l=Q(void 0,!0),c=Q(void 0,!0),d=Q(void 0,!0),u=Q(void 0,!0),g=Q(void 0,!0),m=Q(void 0,!0),j=Nr("jsoneditor:TransformWizard"),p=_(t,"json",9),x=_(t,"queryOptions",29,()=>({})),v=_(t,"onChange",9),h=["==","!=","<","<=",">",">="].map(T=>({value:T,label:T})),f=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],y=Q((r=x())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?Na(x().filter.path):void 0,!0),w=Q((o=h.find(T=>{var E;return T.value===((E=x().filter)===null||E===void 0?void 0:E.relation)}))!==null&&o!==void 0?o:h[0],!0),b=Q(((s=x())===null||s===void 0||(s=s.filter)===null||s===void 0?void 0:s.value)||"",!0),k=Q((a=x())!==null&&a!==void 0&&(a=a.sort)!==null&&a!==void 0&&a.path?Na(x().sort.path):void 0,!0),$=Q((i=f.find(T=>{var E;return T.value===((E=x().sort)===null||E===void 0?void 0:E.direction)}))!==null&&i!==void 0?i:f[0],!0);ce(()=>C(p()),()=>{S(l,Array.isArray(p()))}),ce(()=>(n(l),C(p())),()=>{S(c,n(l)?Ld(p()):[])}),ce(()=>(n(l),C(p())),()=>{S(d,n(l)?Ld(p(),!0):[])}),ce(()=>(n(c),Na),()=>{S(u,n(c).map(Na))}),ce(()=>(n(d),Na),()=>{S(g,n(d)?n(d).map(Na):[])}),ce(()=>(C(x()),n(g),Bt),()=>{var T;S(m,(T=x())!==null&&T!==void 0&&(T=T.projection)!==null&&T!==void 0&&T.paths&&n(g)?x().projection.paths.map(E=>n(g).find(R=>Bt(R.value,E))).filter(E=>!!E):void 0)}),ce(()=>n(y),()=>{var T,E,R;E=(T=n(y))===null||T===void 0?void 0:T.value,Bt((R=x())===null||R===void 0||(R=R.filter)===null||R===void 0?void 0:R.path,E)||(j("changeFilterPath",E),x(to(x(),["filter","path"],E,!0)),v()(x()))}),ce(()=>n(w),()=>{var T,E,R;E=(T=n(w))===null||T===void 0?void 0:T.value,Bt((R=x())===null||R===void 0||(R=R.filter)===null||R===void 0?void 0:R.relation,E)||(j("changeFilterRelation",E),x(to(x(),["filter","relation"],E,!0)),v()(x()))}),ce(()=>n(b),()=>{var T,E;T=n(b),Bt((E=x())===null||E===void 0||(E=E.filter)===null||E===void 0?void 0:E.value,T)||(j("changeFilterValue",T),x(to(x(),["filter","value"],T,!0)),v()(x()))}),ce(()=>n(k),()=>{var T,E,R;E=(T=n(k))===null||T===void 0?void 0:T.value,Bt((R=x())===null||R===void 0||(R=R.sort)===null||R===void 0?void 0:R.path,E)||(j("changeSortPath",E),x(to(x(),["sort","path"],E,!0)),v()(x()))}),ce(()=>n($),()=>{var T,E,R;E=(T=n($))===null||T===void 0?void 0:T.value,Bt((R=x())===null||R===void 0||(R=R.sort)===null||R===void 0?void 0:R.direction,E)||(j("changeSortDirection",E),x(to(x(),["sort","direction"],E,!0)),v()(x()))}),ce(()=>n(m),()=>{(function(T){var E;Bt((E=x())===null||E===void 0||(E=E.projection)===null||E===void 0?void 0:E.paths,T)||(j("changeProjectionPaths",T),x(to(x(),["projection","paths"],T,!0)),v()(x()))})(n(m)?n(m).map(T=>T.value):void 0)}),En(),zt(!0);var M=zk(),z=W(M),H=W(z),G=ae(W(H)),ee=W(G),te=W(ee);fs(te,{class:"jse-filter-path",showChevron:!0,get items(){return n(u)},get value(){return n(y)},set value(T){S(y,T)},$$legacy:!0});var je=ae(te,2);fs(je,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return h},get value(){return n(w)},set value(T){S(w,T)},$$legacy:!0});var B=ae(je,2),pe=ae(H),$e=ae(W(pe)),ke=W($e),me=W(ke);fs(me,{class:"jse-sort-path",showChevron:!0,get items(){return n(u)},get value(){return n(k)},set value(T){S(k,T)},$$legacy:!0}),fs(ae(me,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return f},get value(){return n($)},set value(T){S($,T)},$$legacy:!0});var Y=ae(pe),I=ae(W(Y)),se=W(I);fs(W(se),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(g)},get value(){return n(m)},set value(T){S(m,T)},$$legacy:!0}),Vc(B,()=>n(b),T=>S(b,T)),X(e,M),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-select-query-language.svelte-atm4um {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um) {
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
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var Nk=de('<button type="button"><!> </button>'),Mk=de('<div class="jse-select-query-language svelte-atm4um"><div class="jse-select-query-language-container svelte-atm4um"></div></div>');function Tk(e,t){ct(t,!1);var r=_(t,"queryLanguages",8),o=_(t,"queryLanguageId",12),s=_(t,"onChangeQueryLanguage",8);zt();var a=Mk();pr(W(a),5,r,wr,(i,l)=>{var c,d=Nk(),u=W(d),g=p=>{sn(p,{get data(){return wm}})},m=p=>{sn(p,{get data(){return km}})};ye(u,p=>{n(l),C(o()),Z(()=>n(l).id===o())?p(g):p(m,!1)});var j=ae(u);Ae(p=>{var x;c=Pt(d,1,"jse-query-language svelte-atm4um",null,c,p),Cn(d,"title",(n(l),Z(()=>"Select ".concat(n(l).name," as query language")))),dt(j," ".concat((n(l),(x=Z(()=>n(l).name))!==null&&x!==void 0?x:"")))},[()=>({selected:n(l).id===o()})],Ce),Re("click",d,()=>{return p=n(l).id,o(p),void s()(p);var p}),X(i,d)}),X(e,a),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-header.svelte-1y24war {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1y24war .jse-title:where(.svelte-1y24war) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var Ak=de('<button type="button" class="jse-fullscreen svelte-1y24war" title="Toggle full screen"><!></button>'),Ik=de('<div class="jse-header svelte-1y24war"><div class="jse-title svelte-1y24war"> </div> <!> <!> <button type="button" class="jse-close svelte-1y24war"><!></button></div>');function nu(e,t){ct(t,!1);var r=_(t,"title",9,"Modal"),o=_(t,"fullScreenButton",9,!1),s=_(t,"fullscreen",13,!1),a=_(t,"onClose",9,void 0);zt(!0);var i=Ik(),l=W(i),c=W(l),d=ae(l,2);fr(d,t,"actions",{},null);var u=ae(d,2),g=j=>{var p=Ak(),x=W(p),v=Ce(()=>s()?Hy:bj);sn(x,{get data(){return n(v)}}),Re("click",p,()=>s(!s())),X(j,p)};ye(u,j=>{o()&&j(g)});var m=ae(u,2);sn(W(m),{get data(){return cu}}),Ae(()=>dt(c,r())),Re("click",m,()=>{var j;return(j=a())===null||j===void 0?void 0:j()}),X(e,i),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-config.svelte-1kpylsp {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-1kpylsp:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-1kpylsp {
  display: none;
}`);var qk=de('<button slot="actions" type="button" title="Select a query language"><!></button>'),bd=Nr("jsoneditor:AutoScrollHandler");function Fh(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function s(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function a(l){r&&l===t||(i(),bd("startAutoScroll",l),t=l,r=setInterval(s,50))}function i(){r&&(bd("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return bd("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:d,bottom:u}=e.getBoundingClientRect();c<d?a(-o(d-c)):c>u?a(o(c-u)):i()}},onDragEnd:function(){i()}}}var Dk=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,v0=()=>{var e,t,r,o,s,a,i,l,c,d,u,g,m;function j(v){return v.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function p(v){e.scrollTo?e.scrollTo(e.scrollLeft,v):e.scrollTop=v}function x(v){d||(d=v),p(a(u=v-d,r,l,c)),m=!0,u<c?requestAnimationFrame(x):function(){p(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof g=="function"&&g(),d=0,m=!1}()}return function(v){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,s=h.offset||0,g=h.callback,a=h.easing||Dk,i=h.a11y||!1,typeof h.container){case"object":e=h.container;break;case"string":e=document.querySelector(h.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof v){case"number":t=void 0,i=!1,o=r+v;break;case"object":o=j(t=v);break;case"string":t=document.querySelector(v),o=j(t)}switch(l=o-r+s,typeof h.duration){case"number":c=h.duration;break;case"function":c=h.duration(l)}m?d=0:requestAnimationFrame(x)}};function Xs(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var Bs=Nr("validation"),Lk={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Vh(e,t,r,o){return Vf(e,t,r,o,Lk)}function p0(e,t,r,o){if(Bs("validateJSON"),!t)return[];if(r!==o){var s=r.stringify(e);return t(s!==void 0?o.parse(s):void 0)}return t(e)}function Uk(e,t,r,o){if(Bs("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:qo.info}]};if(e.length!==0)try{var s=Xs(()=>r.parse(e),c=>Bs("validate: parsed json in ".concat(c," ms")));if(!t)return;var a=r===o?s:Xs(()=>o.parse(e),c=>Bs("validate: parsed json with the validationParser in ".concat(c," ms"))),i=Xs(()=>t(a),c=>Bs("validate: validated json in ".concat(c," ms")));return pn(i)?void 0:{validationErrors:i}}catch(c){var l=Xs(()=>function(d,u){if(d.length>h2)return!1;try{return u.parse(Zo(d)),!0}catch{return!1}}(e,r),d=>Bs("validate: checked whether repairable in ".concat(d," ms")));return{parseError:li(e,c.message||c.toString()),isRepairable:l}}}var yc=Nr("jsoneditor:FocusTracker");function Gf(e){var t,{onMount:r,onDestroy:o,getWindow:s,hasFocus:a,onFocus:i,onBlur:l}=e,c=!1;function d(){var g=a();g&&(clearTimeout(t),c||(yc("focus"),i(),c=g))}function u(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(yc("blur"),c=!1,l())}))}r(()=>{yc("mount FocusTracker");var g=s();g&&(g.addEventListener("focusin",d,!0),g.addEventListener("focusout",u,!0))}),o(()=>{yc("destroy FocusTracker");var g=s();g&&(g.removeEventListener("focusin",d,!0),g.removeEventListener("focusout",u,!0))})}St(`/* over all fonts, sizes, and colors */
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
.jse-message.svelte-czprfx {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-czprfx {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-czprfx .jse-text:where(.svelte-czprfx) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx) {
  cursor: pointer;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-czprfx {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-czprfx {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-czprfx {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx) {
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
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var Fk=de('<button type="button" class="jse-button jse-action jse-primary svelte-czprfx"><!> </button>'),Vk=de('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-czprfx"></div></div>');function jo(e,t){ct(t,!1);var r=_(t,"type",9,"success"),o=_(t,"icon",9,void 0),s=_(t,"message",9,void 0),a=_(t,"actions",25,()=>[]),i=_(t,"onClick",9,void 0),l=_(t,"onClose",9,void 0);l()&&Oo(l()),zt(!0);var c,d=Vk(),u=W(d),g=W(u),m=W(g),j=x=>{sn(x,{get data(){return o()}})};ye(m,x=>{o()&&x(j)});var p=ae(m);pr(ae(u,2),5,a,wr,(x,v)=>{var h=Fk(),f=W(h),y=b=>{sn(b,{get data(){return n(v),Z(()=>n(v).icon)}})};ye(f,b=>{n(v),Z(()=>n(v).icon)&&b(y)});var w=ae(f);Ae(()=>{var b;Cn(h,"title",(n(v),Z(()=>n(v).title))),h.disabled=(n(v),Z(()=>n(v).disabled)),dt(w," ".concat((n(v),(b=Z(()=>n(v).text))!==null&&b!==void 0?b:"")))}),Re("click",h,()=>{n(v).onClick&&n(v).onClick()}),Re("mousedown",h,()=>{n(v).onMouseDown&&n(v).onMouseDown()}),X(x,h)}),Ae(x=>{var v,h;Pt(d,1,"jse-message jse-".concat((v=r())!==null&&v!==void 0?v:""),"svelte-czprfx"),c=Pt(u,1,"jse-text svelte-czprfx",null,c,x),dt(p," ".concat((h=s())!==null&&h!==void 0?h:""))},[()=>({"jse-clickable":!!i()})],Ce),Re("click",u,function(){i()&&i()()}),X(e,d),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-validation-errors-overview.svelte-1uindol {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-error:where(.svelte-1uindol) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-info:where(.svelte-1uindol) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-icon:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol) {
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
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) div.jse-validation-errors-expand:where(.svelte-1uindol) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var Bk=de('<button type="button" class="jse-validation-errors-collapse svelte-1uindol" title="Collapse validation errors"><!></button>'),Wk=de('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-path svelte-1uindol"> </td><td class="jse-validation-error-message svelte-1uindol"> </td><td class="jse-validation-error-action svelte-1uindol"><!></td></tr>'),Hk=de('<tr class="jse-validation-error svelte-1uindol"><td class="svelte-1uindol"></td><td class="svelte-1uindol"></td><td class="svelte-1uindol"> </td><td class="svelte-1uindol"></td></tr>'),Kk=de('<table class="jse-validation-errors-overview-expanded svelte-1uindol"><tbody><!><!></tbody></table>'),Qk=de('<table class="jse-validation-errors-overview-collapsed svelte-1uindol"><tbody><tr><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-count svelte-1uindol"> <div class="jse-validation-errors-expand svelte-1uindol"><!></div></td></tr></tbody></table>'),Jk=de('<div class="jse-validation-errors-overview svelte-1uindol"><!></div>');function Yf(e,t){ct(t,!1);var r=Q(void 0,!0),o=_(t,"validationErrors",9),s=_(t,"selectError",9),a=Q(!0,!0);function i(){S(a,!1)}function l(){S(a,!0)}ce(()=>C(o()),()=>{S(r,o().length)}),En(),zt(!0);var c=lr(),d=ht(c),u=g=>{var m=Jk(),j=W(m),p=v=>{var h=Kk(),f=W(h),y=W(f);pr(y,1,()=>(C(Bc),C(o()),C(vc),Z(()=>Bc(o(),vc))),wr,(k,$,M)=>{var z=Wk(),H=W(z);sn(W(H),{get data(){return ys}});var G=ae(H),ee=W(G),te=ae(G),je=W(te),B=W(ae(te)),pe=$e=>{var ke=Bk();sn(W(ke),{get data(){return vj}}),Re("click",ke,fa(i)),X($e,ke)};ye(B,$e=>{C(o()),Z(()=>M===0&&o().length>1)&&$e(pe)}),Ae($e=>{var ke;Pt(z,1,"jse-validation-".concat((n($),(ke=Z(()=>n($).severity))!==null&&ke!==void 0?ke:"")),"svelte-1uindol"),dt(ee,$e),dt(je,(n($),Z(()=>n($).message)))},[()=>(C(ao),n($),Z(()=>ao(n($).path)))],Ce),Re("click",z,()=>{setTimeout(()=>s()(n($)))}),X(k,z)});var w=ae(y),b=k=>{var $=Hk(),M=ae(W($),2),z=W(M);Ae(()=>dt(z,"(and ".concat(n(r)-vc," more errors)"))),X(k,$)};ye(w,k=>{n(r)>vc&&k(b)}),X(v,h)},x=v=>{var h=Qk(),f=W(h),y=W(f),w=W(y);sn(W(w),{get data(){return ys}});var b=W(ae(w));sn(W(ae(b)),{get data(){return Cm}}),Ae(k=>{var $;Pt(y,1,"jse-validation-".concat(k??""),"svelte-1uindol"),dt(b,"".concat(($=n(r))!==null&&$!==void 0?$:""," validation errors "))},[()=>(C(o()),Z(()=>{return k=o(),[qo.error,qo.warning,qo.info].find($=>k.some(M=>M.severity===$));var k}))],Ce),Re("click",y,l),X(v,h)};ye(j,v=>{n(a)||n(r)===1?v(p):v(x,!1)}),X(g,m)};ye(d,g=>{C(pn),C(o()),Z(()=>!pn(o()))&&g(u)}),X(e,c),ut()}function ru(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}St(`/* over all fonts, sizes, and colors */
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
dialog.jse-modal.svelte-1s9c2ql {
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
dialog.jse-modal.jse-sort-modal.svelte-1s9c2ql {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-1s9c2ql {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-1s9c2ql {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-1s9c2ql {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-1s9c2ql {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-1s9c2ql::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-1s9c2ql {
  animation: svelte-1s9c2ql-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-1s9c2ql::backdrop {
  animation: svelte-1s9c2ql-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-1s9c2ql .jse-modal-inner:where(.svelte-1s9c2ql) {
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
@keyframes svelte-1s9c2ql-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-1s9c2ql-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-1s9c2ql .svelte-select {
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
}`);var Gk=de('<dialog><div class="jse-modal-inner svelte-1s9c2ql"><!></div></dialog>');function el(e,t){ct(t,!1);var r=_(t,"className",8,void 0),o=_(t,"fullscreen",8,!1),s=_(t,"onClose",8),a=Q();function i(){s()()}Qr(()=>n(a).showModal()),Oo(()=>n(a).close()),zt();var l,c=Gk(),d=W(c);fr(W(d),t,"default",{},null),er(c,u=>S(a,u),()=>n(a)),Lr(()=>Re("close",c,i)),Lr(()=>{return Re("pointerdown",c,(u=i,function(){for(var g=arguments.length,m=new Array(g),j=0;j<g;j++)m[j]=arguments[j];m[0].target===this&&u?.apply(this,m)}));var u}),Lr(()=>Re("cancel",c,Pa(function(u){Ti.call(this,t,u)}))),Yr(c,(u,g)=>ru?.(u,g),()=>i),Ae((u,g)=>l=Pt(c,1,u,"svelte-1s9c2ql",l,g),[()=>Qa((C(Vo),C(r()),Z(()=>Vo("jse-modal",r())))),()=>({"jse-fullscreen":o()})],Ce),X(e,c),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-modal-contents.svelte-189qksl {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl) {
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
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-189qksl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-189qksl .jse-shortcut:where(.svelte-189qksl) .jse-key:where(.svelte-189qksl) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var Yk=de('<!> <div class="jse-modal-contents svelte-189qksl"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-189qksl"><div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"> </div> for copy</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"> </div> for cut</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"> </div> for paste</div></div> <div class="jse-actions svelte-189qksl"><button type="button" class="jse-primary svelte-189qksl">Close</button></div></div>',1);function h0(e,t){ct(t,!1);var r=_(t,"onClose",9),o=Tf()?"⌘":"Ctrl";zt(!0),el(e,{get onClose(){return r()},className:"jse-copy-paste",children:(s,a)=>{var i=Yk(),l=ht(i);nu(l,{title:"Copying and pasting",get onClose(){return r()}});var c=ae(l,2),d=ae(W(c),2),u=W(d),g=W(u),m=W(g),j=ae(u,2),p=W(j),x=W(p),v=W(ae(j,2)),h=W(v),f=W(ae(d,2));Ae(()=>{dt(m,"".concat(o,"+C")),dt(x,"".concat(o,"+X")),dt(h,"".concat(o,"+V"))}),Re("click",f,function(){for(var y,w=arguments.length,b=new Array(w),k=0;k<w;k++)b[k]=arguments[k];(y=r())===null||y===void 0||y.apply(this,b)}),X(s,i)},$$slots:{default:!0}}),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-menu.svelte-pf7s2l {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l) {
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
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-first:where(.svelte-pf7s2l) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-last:where(.svelte-pf7s2l) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-selected:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-pf7s2l .jse-space:where(.svelte-pf7s2l) {
  flex: 1;
}
.jse-menu.svelte-pf7s2l .jse-separator:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var Xk=de('<div class="jse-separator svelte-pf7s2l"></div>'),Zk=de('<div class="jse-space svelte-pf7s2l"></div>'),e4=de('<button type="button"><!> <!></button>'),t4=de('<div class="jse-menu svelte-pf7s2l"><!> <!> <!></div>');function Ou(e,t){ct(t,!1);var r=_(t,"items",25,()=>[]);zt(!0);var o=t4(),s=W(o);fr(s,t,"left",{},null);var a=ae(s,2);pr(a,1,r,wr,(i,l)=>{var c=lr(),d=ht(c),u=m=>{X(m,Xk())},g=(m,j)=>{var p=v=>{X(v,Zk())},x=(v,h)=>{var f=w=>{var b=e4(),k=W(b),$=H=>{sn(H,{get data(){return n(l),Z(()=>n(l).icon)}})};ye(k,H=>{n(l),Z(()=>n(l).icon)&&H($)});var M=ae(k,2),z=H=>{var G=Tr();Ae(()=>dt(G,(n(l),Z(()=>n(l).text)))),X(H,G)};ye(M,H=>{n(l),Z(()=>n(l).text)&&H(z)}),Ae(()=>{var H;Pt(b,1,"jse-button ".concat((n(l),(H=Z(()=>n(l).className))!==null&&H!==void 0?H:"")),"svelte-pf7s2l"),Cn(b,"title",(n(l),Z(()=>n(l).title))),b.disabled=(n(l),Z(()=>n(l).disabled||!1))}),Re("click",b,function(){for(var H,G=arguments.length,ee=new Array(G),te=0;te<G;te++)ee[te]=arguments[te];(H=n(l).onClick)===null||H===void 0||H.apply(this,ee)}),X(w,b)},y=w=>{var b=Tr();Ae(k=>dt(b,k),[()=>(n(l),Z(()=>function(k){return console.error("Unknown type of menu item",k),"???"}(n(l))))],Ce),X(w,b)};ye(v,w=>{C(va),n(l),Z(()=>va(n(l)))?w(f):w(y,!1)},h)};ye(m,v=>{C(Bd),n(l),Z(()=>Bd(n(l)))?v(p):v(x,!1)},j)};ye(d,m=>{C(Ra),n(l),Z(()=>Ra(n(l)))?m(u):m(g,!1)}),X(i,c)}),fr(ae(a,2),t,"right",{},null),X(e,o),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-json-repair-component.svelte-3golau {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-3golau .jse-info:where(.svelte-3golau) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-3golau .jse-json-text:where(.svelte-3golau) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var n4=de('<div slot="left" class="jse-info svelte-3golau">Repair invalid JSON, then click apply</div>'),r4=de('<div class="jse-json-repair-component svelte-3golau"><!> <!> <textarea class="jse-json-text svelte-3golau" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function o4(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=Q(void 0,!0),a=Q(void 0,!0),i=Q(void 0,!0),l=Q(void 0,!0),c=_(t,"text",13,""),d=_(t,"readOnly",9,!1),u=_(t,"onParse",9),g=_(t,"onRepair",9),m=_(t,"onChange",9,void 0),j=_(t,"onApply",9),p=_(t,"onCancel",9),x=Nr("jsoneditor:JSONRepair"),v=Q(void 0,!0);function h(){if(n(v)&&n(r)){var G=n(r).position!==void 0?n(r).position:0;n(v).setSelectionRange(G,G),n(v).focus()}}function f(){j()(c())}function y(){try{c(g()(c())),m()&&m()(c())}catch{}}var w=Q(void 0,!0);ce(()=>C(c()),()=>{S(r,function(G){try{return void u()(G)}catch(ee){return li(G,ee.message)}}(c()))}),ce(()=>C(c()),()=>{S(o,function(G){try{return g()(G),!0}catch{return!1}}(c()))}),ce(()=>n(r),()=>{x("error",n(r))}),ce(()=>C(p()),()=>{S(w,[{type:"space"},{type:"button",icon:cu,title:"Cancel repair",className:"jse-cancel",onClick:p()}])}),ce(()=>gv,()=>{S(s,{icon:gv,text:"Show me",title:"Scroll to the error location",onClick:h})}),ce(()=>Va,()=>{S(a,{icon:Va,text:"Auto repair",title:"Automatically repair JSON",onClick:y})}),ce(()=>(n(o),n(s),n(a)),()=>{S(i,n(o)?[n(s),n(a)]:[n(s)])}),ce(()=>C(d()),()=>{S(l,[{icon:bf,text:"Apply",title:"Apply fixed JSON",disabled:d(),onClick:f}])}),En(),zt(!0);var b=r4(),k=W(b);Ou(k,{get items(){return n(w)},$$slots:{left:(G,ee)=>{X(G,n4())}}});var $=ae(k,2),M=G=>{var ee=Ce(()=>(n(r),Z(()=>"Cannot parse JSON: ".concat(n(r).message))));jo(G,{type:"error",get icon(){return ys},get message(){return n(ee)},get actions(){return n(i)}})},z=G=>{jo(G,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};ye($,G=>{n(r)?G(M):G(z,!1)});var H=ae($,2);er(H,G=>S(v,G),()=>n(v)),Ae(()=>{H.readOnly=d(),ws(H,c())}),Re("input",H,function(G){x("handleChange");var ee=G.target.value;c()!==ee&&(c(ee),m()&&m()(c()))}),X(e,b),ut()}function m0(e,t){ct(t,!1);var r=_(t,"text",13),o=_(t,"onParse",9),s=_(t,"onRepair",9),a=_(t,"onApply",9),i=_(t,"onClose",9);function l(d){a()(d),i()()}function c(){i()()}zt(!0),el(e,{get onClose(){return i()},className:"jse-repair-modal",children:(d,u)=>{o4(d,{get onParse(){return o()},get onRepair(){return s()},onApply:l,onCancel:c,get text(){return r()},set text(g){r(g)},$$legacy:!0})},$$slots:{default:!0}}),ut()}St(`/* over all fonts, sizes, and colors */
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
div.jse-collapsed-items.svelte-1h6hzoq {
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
div.jse-collapsed-items.jse-selected.svelte-1h6hzoq {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq),
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq) {
  display: inline;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):hover, div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var a4=de('<button type="button" class="jse-expand-items svelte-1h6hzoq"> </button>'),s4=de('<div role="none"><div><div class="jse-text svelte-1h6hzoq"> </div> <!></div></div>');function i4(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=Q(void 0,!0),a=Q(void 0,!0),i=Q(void 0,!0),l=_(t,"visibleSections",9),c=_(t,"sectionIndex",9),d=_(t,"total",9),u=_(t,"path",9),g=_(t,"selection",9),m=_(t,"onExpandSection",9),j=_(t,"context",9);ce(()=>(C(l()),C(c())),()=>{S(r,l()[c()])}),ce(()=>n(r),()=>{S(o,n(r).end)}),ce(()=>(C(l()),C(c()),C(d())),()=>{S(s,l()[c()+1]?l()[c()+1].start:d())}),ce(()=>(C(j()),C(g()),C(u()),n(o)),()=>{S(a,Yi(j().getJson(),g(),u().concat(String(n(o)))))}),ce(()=>(n(o),n(s)),()=>{S(i,function(w,b){var k={start:w,end:Math.min(Vd(w),b)},$=Math.max(Hc((w+b)/2),w),M={start:$,end:Math.min(Vd($),b)},z=Hc(b),H=z===b?z-Ki:z,G={start:Math.max(H,w),end:b},ee=[k],te=M.start>=k.end&&M.end<=G.start;return te&&ee.push(M),G.start>=(te?M.end:k.end)&&ee.push(G),ee}(n(o),n(s)))}),En(),zt(!0);var p,x,v=s4(),h=W(v),f=W(h),y=W(f);pr(ae(f,2),1,()=>n(i),wr,(w,b)=>{var k=a4(),$=W(k);Ae(()=>{var M,z;return dt($,"show ".concat((n(b),(M=Z(()=>n(b).start))!==null&&M!==void 0?M:""),"-").concat((n(b),(z=Z(()=>n(b).end))!==null&&z!==void 0?z:"")))}),Re("click",k,()=>m()(u(),n(b))),X(w,k)}),Ae((w,b)=>{var k,$;p=Pt(v,1,"jse-collapsed-items svelte-1h6hzoq",null,p,w),x=Io(v,"",x,b),dt(y,"Items ".concat((k=n(o))!==null&&k!==void 0?k:"","-").concat(($=n(s))!==null&&$!==void 0?$:""))},[()=>({"jse-selected":n(a)}),()=>({"--level":(C(u()),Z(()=>u().length+2))})],Ce),Re("mousemove",v,function(w){w.stopPropagation()}),X(e,v),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-context-menu-pointer.svelte-137iwnw {
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
.jse-context-menu-pointer.jse-root.svelte-137iwnw {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-137iwnw {
  right: -1px;
}
.jse-context-menu-pointer.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var l4=de('<button type="button"><!></button>');function za(e,t){ct(t,!1);var r=_(t,"root",9,!1),o=_(t,"insert",9,!1),s=_(t,"selected",9),a=_(t,"onContextMenu",9);zt(!0);var i,l=l4();sn(W(l),{get data(){return Sa}}),Ae(c=>{i=Pt(l,1,"jse-context-menu-pointer svelte-137iwnw",null,i,c),Cn(l,"title",If)},[()=>({"jse-root":r(),"jse-insert":o(),"jse-selected":s()})],Ce),Re("click",l,function(c){for(var d=c.target;d&&d.nodeName!=="BUTTON";)d=d.parentNode;d&&a()({anchor:d,left:0,top:0,width:ma,height:ha,offsetTop:2,offsetLeft:0,showTip:!0})}),X(e,l),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-key.svelte-2iqnqn {
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
.jse-key.jse-empty.svelte-2iqnqn {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-2iqnqn::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var c4=de('<div role="none" data-type="selectable-key"><!></div>'),u4=de("<!> <!>",1),d4=de('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function g0(e,t){ct(t,!0);var r=ro(()=>mn(t.selection)&&Pr(t.selection)),o=ro(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:n(r),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),s=lr();pr(ht(s),17,()=>n(o),wr,(a,i)=>{var l=lr(),c=ht(l),d=g=>{var m=d4(),j=ro(()=>n(i).action);Yr(m,(p,x)=>{var v;return(v=n(j))===null||v===void 0?void 0:v(p,x)},()=>n(i).props),X(g,m)},u=g=>{var m=lr(),j=ro(()=>n(i).component);yg(ht(m),()=>n(j),(p,x)=>{x(p,La(()=>n(i).props))}),X(g,m)};ye(c,g=>{j2(n(i))?g(d):g(u,!1)}),X(a,l)}),X(e,s),ut()}var f4={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function yd(e){var{json:t,selection:r,deltaY:o,items:s}=e;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var a=o<0?function(u){for(var{json:g,items:m,selection:j,deltaY:p}=u,x=ga(g,j),v=m.findIndex(k=>Bt(k.path,x)),h=()=>{var k;return(k=m[f-1])===null||k===void 0?void 0:k.height},f=v,y=0;h()!==void 0&&Math.abs(p)>y+h()/2;)y+=h(),f-=1;var w=m[f].path,b=f-v;return f!==v&&m[f]!==void 0?{beforePath:w,offset:b}:void 0}({json:t,selection:r,deltaY:o,items:s}):function(u){for(var g,{json:m,items:j,selection:p,deltaY:x}=u,v=Fa(m,p),h=j.findIndex(H=>Bt(H.path,v)),f=0,y=h,w=()=>{var H;return(H=j[y+1])===null||H===void 0?void 0:H.height};w()!==void 0&&Math.abs(x)>f+w()/2;)f+=w(),y+=1;var b=an(v),k=Qe(m,b),$=Array.isArray(k)?y:y+1,M=(g=j[$])===null||g===void 0?void 0:g.path,z=y-h;return M?{beforePath:M,offset:z}:{append:!0,offset:z}}({json:t,selection:r,deltaY:o,items:s});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(u,g,m){if(!g)return[];var j="beforePath"in m?m.beforePath:void 0,p="append"in m?m.append:void 0,x=an(nt(g)),v=Qe(u,x);if(!(p||j&&ta(j,x)&&j.length>x.length))return[];var h=ga(u,g),f=Fa(u,g),y=Qt(h),w=Qt(f),b=j?j[x.length]:void 0;if(!yr(v)){if(vr(v)){var k=Ur(y),$=Ur(w),M=b!==void 0?Ur(b):v.length;return C1($-k+1,M<k?te=>({op:"move",from:ft(x.concat(String(k+te))),path:ft(x.concat(String(M+te)))}):()=>({op:"move",from:ft(x.concat(String(k))),path:ft(x.concat(String(M)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var z=Object.keys(v),H=z.indexOf(y),G=z.indexOf(w),ee=p?z.length:b!==void 0?z.indexOf(b):-1;return H!==-1&&G!==-1&&ee!==-1?ee>H?[...z.slice(H,G+1),...z.slice(ee,z.length)].map(te=>Ga(x,te)):[...z.slice(ee,H),...z.slice(G+1,z.length)].map(te=>Ga(x,te)):[]}(t,r,a),l=an(ga(t,r)),c=Qe(t,l);if(Array.isArray(c)){var d=function(u){var g,m,{items:j,json:p,selection:x,offset:v}=u,h=ga(p,x),f=Fa(p,x),y=j.findIndex($=>Bt($.path,h)),w=j.findIndex($=>Bt($.path,f)),b=(g=j[y+v])===null||g===void 0?void 0:g.path,k=(m=j[w+v])===null||m===void 0?void 0:m.path;return Jr(b,k)}({items:s,json:t,selection:r,offset:a.offset});return{operations:i,updatedSelection:d,offset:a.offset}}return{operations:i,updatedSelection:void 0,offset:a.offset}}St(`/* over all fonts, sizes, and colors */
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
button.jse-validation-error.svelte-1a8aobl {
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

button.jse-validation-info.svelte-1a8aobl {
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

button.jse-validation-warning.svelte-1a8aobl {
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
}`);var v4=de('<button type="button"><!></button>');function oi(e,t){ct(t,!1);var r=Q(),o=Xa("absolute-popup"),s=_(t,"validationError",8),a=_(t,"onExpand",8);ce(()=>C(s()),()=>{S(r,y2(s())&&s().isChildError?"Contains invalid data":s().message)}),En(),zt();var i=v4();sn(W(i),{get data(){return ys}}),Lr(()=>Re("click",i,function(){for(var l,c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];(l=a())===null||l===void 0||l.apply(this,d)})),Yr(i,(l,c)=>fi?.(l,c),()=>Te({text:n(r)},o)),Ae(()=>{var l;return Pt(i,1,"jse-validation-".concat((C(s()),(l=Z(()=>s().severity))!==null&&l!==void 0?l:"")),"svelte-1a8aobl")}),X(e,i),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-expand.svelte-oawf7x {
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
.jse-expand.svelte-oawf7x:hover {
  opacity: 0.8;
}

.jse-meta.svelte-oawf7x,
.jse-separator.svelte-oawf7x,
.jse-index.svelte-oawf7x,
.jse-bracket.svelte-oawf7x {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-oawf7x {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-oawf7x {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-oawf7x {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-oawf7x {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-oawf7x {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-oawf7x {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-oawf7x > .jse-contents-outer:where(.svelte-oawf7x) > .jse-contents:where(.svelte-oawf7x) {
  padding-left: 0;
}
.jse-json-node.svelte-oawf7x .jse-props:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-items:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-header-outer:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-footer-outer:where(.svelte-oawf7x) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x) .jse-meta:where(.svelte-oawf7x) > .jse-meta-inner:where(.svelte-oawf7x) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-oawf7x .jse-contents-outer:where(.svelte-oawf7x) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) .jse-value-outer:where(.svelte-oawf7x) {
  display: inline-flex;
}
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area:where(.svelte-oawf7x) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area.jse-inside:where(.svelte-oawf7x) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area.jse-after:where(.svelte-oawf7x) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-oawf7x .jse-context-menu-pointer-anchor:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-insert-area:where(.svelte-oawf7x) {
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
.jse-json-node.svelte-oawf7x .jse-insert-area.jse-hovered:where(.svelte-oawf7x) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-value-outer:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-meta:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.jse-selected.svelte-oawf7x .jse-contents:where(.svelte-oawf7x),
.jse-json-node.jse-selected.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-value-outer:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-meta:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-footer:where(.svelte-oawf7x):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-oawf7x .jse-key-outer.jse-selected-key:where(.svelte-oawf7x) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-meta,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-oawf7x {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-oawf7x .jse-insert-area.jse-selected:where(.svelte-oawf7x) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Zn=ju(()=>f4),p4=de('<div class="jse-separator svelte-oawf7x">:</div>'),h4=de('<div class="jse-bracket svelte-oawf7x">[</div> <!> &nbsp;',1),m4=de('<div class="jse-bracket svelte-oawf7x">[</div> <!> <div class="jse-bracket svelte-oawf7x">]</div>',1),g4=de('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>'),b4=de('<div role="none" class="jse-insert-selection-area jse-inside svelte-oawf7x" data-type="insert-selection-area-inside"></div>'),y4=de('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),j4=de('<div data-type="insert-selection-area-inside"><!></div>'),x4=de('<div slot="identifier" class="jse-identifier svelte-oawf7x"><div class="jse-index svelte-oawf7x"> </div></div>'),w4=de("<!> <!>",1),k4=de('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),S4=de('<div class="jse-items svelte-oawf7x"><!> <!></div> <div class="jse-footer-outer svelte-oawf7x"><div data-type="selectable-value" class="jse-footer svelte-oawf7x"><span class="jse-bracket svelte-oawf7x">]</span></div> <!></div>',1),_4=de('<div class="jse-header-outer svelte-oawf7x"><div class="jse-header svelte-oawf7x"><button type="button" class="jse-expand svelte-oawf7x" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-oawf7x"><div class="jse-meta-inner svelte-oawf7x" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),C4=de('<div class="jse-separator svelte-oawf7x">:</div>'),E4=de('<div class="jse-bracket jse-expanded svelte-oawf7x">&lbrace;</div>'),O4=de('<div class="jse-bracket svelte-oawf7x">&lbrace;</div> <!> <div class="jse-bracket svelte-oawf7x">&rbrace;</div>',1),$4=de('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>'),P4=de('<div role="none" class="jse-insert-selection-area jse-inside svelte-oawf7x" data-type="insert-selection-area-inside"></div>'),z4=de('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),R4=de('<div data-type="insert-selection-area-inside"><!></div>'),N4=de('<div slot="identifier"><!></div>'),M4=de('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),T4=de('<div class="jse-props svelte-oawf7x"><!> <!></div> <div class="jse-footer-outer svelte-oawf7x"><div data-type="selectable-value" class="jse-footer svelte-oawf7x"><div class="jse-bracket svelte-oawf7x">&rbrace;</div></div> <!></div>',1),A4=de('<div class="jse-header-outer svelte-oawf7x"><div class="jse-header svelte-oawf7x"><button type="button" class="jse-expand svelte-oawf7x" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-oawf7x" data-type="selectable-value"><div class="jse-meta-inner svelte-oawf7x"><!></div></div> <!></div> <!> <!></div> <!>',1),I4=de('<div class="jse-separator svelte-oawf7x">:</div>'),q4=de('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>'),D4=de('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),L4=de('<div class="jse-contents-outer svelte-oawf7x"><div class="jse-contents svelte-oawf7x"><!> <!> <div class="jse-value-outer svelte-oawf7x"><!></div> <!></div> <!> <!></div>'),U4=de('<div data-type="insert-selection-area-after"><!></div>'),F4=de('<div role="treeitem" tabindex="-1"><!> <!></div>');function tf(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=_(t,"pointer",9),a=_(t,"value",9),i=_(t,"state",9),l=_(t,"validationErrors",9),c=_(t,"searchResults",9),d=_(t,"selection",9),u=_(t,"context",9),g=_(t,"onDragSelectionStart",9),m=Nr("jsoneditor:JSONNode"),j=Q(void 0,!0),p=void 0,x=Q(void 0,!0),v=Q(void 0,!0),h=Q(void 0,!0),f=Q(void 0,!0),y=Q(void 0,!0),w=Q(void 0,!0),b=Q(void 0,!0);function k(K){K.stopPropagation();var F=Af(K);u().onExpand(n(v),!n(h),F)}function $(){u().onExpand(n(v),!0)}function M(K,F){var ie=vl(n(v),Object.keys(a()),K,F);return u().onPatch(ie),Qt(so(ie[0].path))}function z(K){u().onDrag(K)}function H(K){Zn().selecting&&(Zn(Zn().selecting=!1),K.stopPropagation()),u().onDragEnd(),document.removeEventListener("mousemove",z,!0),document.removeEventListener("mouseup",H)}function G(){var K;return((K=u().findElement([]))===null||K===void 0||(K=K.getBoundingClientRect())===null||K===void 0?void 0:K.top)||0}function ee(K,F){var ie=G()-K.initialContentTop;return F.clientY-K.initialClientY-ie}function te(K){if(!u().readOnly&&d()){var F=an(nt(d()));if(Bt(n(v),F)){var ie=function(J,V){var Ze=[];function Je(N){var D=n(v).concat(N),re=u().findElement(D);re!==void 0&&Ze.push({path:D,height:re.clientHeight})}if(Array.isArray(a())){var Oe=u().getJson();if(Oe===void 0)return;var Xe=ga(Oe,J),Ne=Fa(Oe,J),Le=parseInt(Qt(Xe),10),lt=parseInt(Qt(Ne),10),He=V.find(N=>Le>=N.start&&lt<=N.end);if(!He)return;var{start:_t,end:O}=He;_g(_t,Math.min(a().length,O),N=>Je(String(N)))}else Object.keys(a()).forEach(Je);return Ze}(d(),n(y)||ti);if(m("dragSelectionStart",{selection:d(),items:ie}),ie){var P=u().getJson();if(P!==void 0){var U=ga(P,d()),L=ie.findIndex(J=>Bt(J.path,U)),{offset:fe}=yd({json:P,selection:u().getSelection(),deltaY:0,items:ie});S(x,{initialTarget:K.target,initialClientY:K.clientY,initialContentTop:G(),selectionStartIndex:L,selectionItemsCount:Ja(P,d()).length,items:ie,offset:fe,didMoveItems:!1}),Zn(Zn().dragging=!0),document.addEventListener("mousemove",je,!0),document.addEventListener("mouseup",B)}}else m("Cannot drag the current selection (probably spread over multiple sections)")}else g()(K)}}function je(K){if(n(x)){var F=u().getJson();if(F===void 0)return;var ie=ee(n(x),K),{offset:P}=yd({json:F,selection:u().getSelection(),deltaY:ie,items:n(x).items});P!==n(x).offset&&(m("drag selection",P,ie),S(x,Te(Te({},n(x)),{},{offset:P,didMoveItems:!0})))}}function B(K){if(n(x)){var F=u().getJson();if(F===void 0)return;var ie=ee(n(x),K),{operations:P,updatedSelection:U}=yd({json:F,selection:u().getSelection(),deltaY:ie,items:n(x).items});if(P)u().onPatch(P,(J,V)=>({state:V,selection:U??d()}));else if(K.target===n(x).initialTarget&&!n(x).didMoveItems){var L=sd(K.target),fe=Ig(K.target);fe&&u().onSelect(Sh(L,fe))}S(x,void 0),Zn(Zn().dragging=!1),document.removeEventListener("mousemove",je,!0),document.removeEventListener("mouseup",B)}}function pe(K){K.shiftKey||(K.stopPropagation(),K.preventDefault(),u().onSelect(Ea(n(v))))}function $e(K){K.shiftKey||(K.stopPropagation(),K.preventDefault(),u().onSelect(wa(n(v))))}function ke(K){u().onSelect(Ea(n(v))),Yn(),u().onContextMenu(K)}function me(K){u().onSelect(wa(n(v))),Yn(),u().onContextMenu(K)}ce(()=>C(s()),()=>{S(v,so(s()))}),ce(()=>C(s()),()=>{S(r,encodeURIComponent(s()))}),ce(()=>C(i()),()=>{S(h,!!ks(i())&&i().expanded)}),ce(()=>(C(a()),C(i())),()=>{S(f,Xo(a(),i(),[]))}),ce(()=>C(i()),()=>{S(y,zr(i())?i().visibleSections:void 0)}),ce(()=>C(l()),()=>{var K;S(w,(K=l())===null||K===void 0?void 0:K.validationError)}),ce(()=>(C(u()),C(d()),n(v)),()=>{S(b,Yi(u().getJson(),d(),n(v)))}),ce(()=>n(v),()=>{S(o,n(v).length===0)}),En(),zt(!0);var Y,I,se=F4(),T=W(se),E=K=>{var F=_4(),ie=ht(F),P=W(ie),U=W(P),L=W(U),fe=be=>{sn(be,{get data(){return Sa}})},J=be=>{sn(be,{get data(){return Li}})};ye(L,be=>{n(h)?be(fe):be(J,!1)});var V=ae(U,2);fr(V,t,"identifier",{},null);var Ze=ae(V,2),Je=be=>{X(be,p4())};ye(Ze,be=>{n(o)||be(Je)});var Oe=ae(Ze,2),Xe=W(Oe),Ne=W(Xe),Le=be=>{var ve=h4();$c(ae(ht(ve),2),{children:(vt,tt)=>{var Ee=Tr();Ae(()=>{var pt,ln;return dt(Ee,"".concat((C(a()),(pt=Z(()=>a().length))!==null&&pt!==void 0?pt:""),`
                `).concat((C(a()),(ln=Z(()=>a().length===1?"item":"items"))!==null&&ln!==void 0?ln:"")))}),X(vt,Ee)},$$slots:{default:!0}}),X(be,ve)},lt=be=>{var ve=m4();$c(ae(ht(ve),2),{onclick:$,children:(vt,tt)=>{var Ee=Tr();Ae(()=>{var pt,ln;return dt(Ee,"".concat((C(a()),(pt=Z(()=>a().length))!==null&&pt!==void 0?pt:""),`
                `).concat((C(a()),(ln=Z(()=>a().length===1?"item":"items"))!==null&&ln!==void 0?ln:"")))}),X(vt,Ee)},$$slots:{default:!0}}),X(be,ve)};ye(Ne,be=>{n(h)?be(Le):be(lt,!1)});var He=ae(Oe,2),_t=be=>{var ve=g4();za(W(ve),{get root(){return n(o)},selected:!0,get onContextMenu(){return C(u()),Z(()=>u().onContextMenu)}}),X(be,ve)};ye(He,be=>{C(u()),n(b),C(d()),C(mn),C(Vn),C(Pr),C(Bt),C(nt),n(v),Z(()=>!u().readOnly&&n(b)&&d()&&(mn(d())||Vn(d()))&&!Pr(d())&&Bt(nt(d()),n(v)))&&be(_t)});var O=ae(P,2),N=be=>{oi(be,{get validationError(){return n(w)},onExpand:$})};ye(O,be=>{n(w),n(h),Z(()=>n(w)&&(!n(h)||!n(w).isChildError))&&be(N)});var D=ae(O,2),re=be=>{var ve=b4();Re("click",ve,pe),X(be,ve)},he=be=>{var ve=y4();Re("click",ve,$e),X(be,ve)};ye(D,be=>{n(h)?be(re):be(he,!1)});var Me=ae(ie,2),Ue=be=>{var ve=S4(),vt=ht(ve),tt=W(vt),Ee=en=>{var Wt,wn,Jt=j4(),Nt=W(Jt),Ct=Ce(()=>(n(b),C($r),C(d()),Z(()=>n(b)&&$r(d()))));za(Nt,{insert:!0,get selected(){return n(Ct)},onContextMenu:ke}),Ae((Yt,cn)=>{Wt=Pt(Jt,1,"jse-insert-area jse-inside svelte-oawf7x",null,Wt,Yt),Cn(Jt,"title",cd),wn=Io(Jt,"",wn,cn)},[()=>({"jse-hovered":n(j)===cs,"jse-selected":n(b)&&$r(d())}),()=>({"--level":(n(v),Z(()=>n(v).length+1))})],Ce),X(en,Jt)};ye(tt,en=>{C(u()),n(j),C(cs),n(b),C($r),C(d()),Z(()=>!u().readOnly&&(n(j)===cs||n(b)&&$r(d())))&&en(Ee)}),pr(ae(tt,2),1,()=>n(y)||ti,wr,(en,Wt,wn)=>{var Jt=w4(),Nt=ht(Jt);pr(Nt,1,()=>(C(a()),n(Wt),n(x),Z(()=>function(cn,yt,Ge){var Ht=yt.start,Ft=Math.min(yt.end,cn.length),Nn=em(Ht,Ft);return Ge&&Ge.offset!==0?oh(Nn,Ge.selectionStartIndex,Ge.selectionItemsCount,Ge.offset).map((Mn,hn)=>({index:Mn,gutterIndex:hn})):Nn.map(Mn=>({index:Mn,gutterIndex:Mn}))}(a(),n(Wt),n(x)))),cn=>cn.index,(cn,yt)=>{var Ge=lr(),Ht=Ce(()=>(C(zr),C(l()),n(yt),Z(()=>zr(l())?l().items[n(yt).index]:void 0))),Ft=Ce(()=>(C(mc),C(u()),C(d()),n(v),n(yt),Z(()=>mc(u().getJson(),d(),n(v).concat(String(n(yt).index)))))),Nn=ht(Ge),Mn=Ce(()=>(C(ml),C(s()),n(yt),Z(()=>ml(s(),n(yt).index)))),hn=Ce(()=>(C(zr),C(i()),n(yt),Z(()=>zr(i())?i().items[n(yt).index]:void 0))),jr=Ce(()=>(C(zr),C(c()),n(yt),Z(()=>zr(c())?c().items[n(yt).index]:void 0)));tf(Nn,{get value(){return C(a()),n(yt),Z(()=>a()[n(yt).index])},get pointer(){return n(Mn)},get state(){return n(hn)},get validationErrors(){return n(Ht)},get searchResults(){return n(jr)},get selection(){return n(Ft)},get context(){return u()},onDragSelectionStart:te,$$slots:{identifier:(Tn,rr)=>{var kr=x4(),Sr=W(kr),hr=W(Sr);Ae(()=>dt(hr,(n(yt),Z(()=>n(yt).gutterIndex)))),X(Tn,kr)}}}),X(cn,Ge)});var Ct=ae(Nt,2),Yt=cn=>{var yt=Ce(()=>n(y)||ti);i4(cn,{get visibleSections(){return n(yt)},sectionIndex:wn,get total(){return C(a()),Z(()=>a().length)},get path(){return n(v)},get onExpandSection(){return C(u()),Z(()=>u().onExpandSection)},get selection(){return d()},get context(){return u()}})};ye(Ct,cn=>{n(Wt),C(a()),Z(()=>n(Wt).end<a().length)&&cn(Yt)}),X(en,Jt)});var pt=ae(vt,2),ln=ae(W(pt),2),On=en=>{var Wt=k4();Re("click",Wt,$e),X(en,Wt)};ye(ln,en=>{n(o)||en(On)}),X(be,ve)};ye(Me,be=>{n(h)&&be(Ue)}),Re("click",U,k),X(K,F)},R=(K,F)=>{var ie=U=>{var L=A4(),fe=ht(L),J=W(fe),V=W(J),Ze=W(V),Je=Ee=>{sn(Ee,{get data(){return Sa}})},Oe=Ee=>{sn(Ee,{get data(){return Li}})};ye(Ze,Ee=>{n(h)?Ee(Je):Ee(Oe,!1)});var Xe=ae(V,2);fr(Xe,t,"identifier",{},null);var Ne=ae(Xe,2),Le=Ee=>{X(Ee,C4())};ye(Ne,Ee=>{n(o)||Ee(Le)});var lt=ae(Ne,2),He=W(lt),_t=W(He),O=Ee=>{X(Ee,E4())},N=Ee=>{var pt=O4();$c(ae(ht(pt),2),{onclick:$,children:(ln,On)=>{var en=Tr();Ae((Wt,wn)=>dt(en,"".concat(Wt??"",`
                `).concat(wn??"")),[()=>(C(a()),Z(()=>Object.keys(a()).length)),()=>(C(a()),Z(()=>Object.keys(a()).length===1?"prop":"props"))],Ce),X(ln,en)},$$slots:{default:!0}}),X(Ee,pt)};ye(_t,Ee=>{n(h)?Ee(O):Ee(N,!1)});var D=ae(lt,2),re=Ee=>{var pt=$4();za(W(pt),{get root(){return n(o)},selected:!0,get onContextMenu(){return C(u()),Z(()=>u().onContextMenu)}}),X(Ee,pt)};ye(D,Ee=>{C(u()),n(b),C(d()),C(mn),C(Vn),C(Pr),C(Bt),C(nt),n(v),Z(()=>!u().readOnly&&n(b)&&d()&&(mn(d())||Vn(d()))&&!Pr(d())&&Bt(nt(d()),n(v)))&&Ee(re)});var he=ae(J,2),Me=Ee=>{oi(Ee,{get validationError(){return n(w)},onExpand:$})};ye(he,Ee=>{n(w),n(h),Z(()=>n(w)&&(!n(h)||!n(w).isChildError))&&Ee(Me)});var Ue=ae(he,2),be=Ee=>{var pt=P4();Re("click",pt,pe),X(Ee,pt)},ve=(Ee,pt)=>{var ln=On=>{var en=z4();Re("click",en,$e),X(On,en)};ye(Ee,On=>{n(o)||On(ln)},pt)};ye(Ue,Ee=>{n(h)?Ee(be):Ee(ve,!1)});var vt=ae(fe,2),tt=Ee=>{var pt=T4(),ln=ht(pt),On=W(ln),en=Nt=>{var Ct,Yt,cn=R4(),yt=W(cn),Ge=Ce(()=>(n(b),C($r),C(d()),Z(()=>n(b)&&$r(d()))));za(yt,{insert:!0,get selected(){return n(Ge)},onContextMenu:ke}),Ae((Ht,Ft)=>{Ct=Pt(cn,1,"jse-insert-area jse-inside svelte-oawf7x",null,Ct,Ht),Cn(cn,"title",cd),Yt=Io(cn,"",Yt,Ft)},[()=>({"jse-hovered":n(j)===cs,"jse-selected":n(b)&&$r(d())}),()=>({"--level":(n(v),Z(()=>n(v).length+1))})],Ce),X(Nt,cn)};ye(On,Nt=>{C(u()),n(j),C(cs),n(b),C($r),C(d()),Z(()=>!u().readOnly&&(n(j)===cs||n(b)&&$r(d())))&&Nt(en)}),pr(ae(On,2),1,()=>(C(a()),n(x),Z(()=>function(Nt,Ct){var Yt=Object.keys(Nt);return Ct&&Ct.offset!==0?oh(Yt,Ct.selectionStartIndex,Ct.selectionItemsCount,Ct.offset):Yt}(a(),n(x)))),wr,(Nt,Ct)=>{var Yt=lr(),cn=Ce(()=>(C(ml),C(s()),n(Ct),Z(()=>ml(s(),n(Ct))))),yt=Ce(()=>(C(no),C(c()),n(Ct),Z(()=>no(c())?c().properties[n(Ct)]:void 0))),Ge=Ce(()=>(C(no),C(l()),n(Ct),Z(()=>no(l())?l().properties[n(Ct)]:void 0))),Ht=Ce(()=>(n(v),n(Ct),Z(()=>n(v).concat(n(Ct))))),Ft=Ce(()=>(C(mc),C(u()),C(d()),C(n(Ht)),Z(()=>mc(u().getJson(),d(),n(Ht))))),Nn=ht(Yt),Mn=Ce(()=>(C(no),C(i()),n(Ct),Z(()=>no(i())?i().properties[n(Ct)]:void 0)));tf(Nn,{get value(){return C(a()),n(Ct),Z(()=>a()[n(Ct)])},get pointer(){return n(cn)},get state(){return n(Mn)},get validationErrors(){return n(Ge)},get searchResults(){return n(yt)},get selection(){return n(Ft)},get context(){return u()},onDragSelectionStart:te,$$slots:{identifier:(hn,jr)=>{var Tn,rr=N4(),kr=W(rr),Sr=Ce(()=>(C(zh),C(n(yt)),Z(()=>zh(n(yt)))));(function(hr,Ln){ct(Ln,!1);var ur=Q(void 0,!0),Pe=Q(void 0,!0),Xt=_(Ln,"pointer",9),kn=_(Ln,"key",9),Un=_(Ln,"selection",9),ge=_(Ln,"searchResultItems",9),qe=_(Ln,"onUpdateKey",9),Ve=_(Ln,"context",9),Et=Q(void 0,!0);function Lt(At){n(Pe)||Ve().readOnly||(At.preventDefault(),Ve().onSelect(Hf(n(Et))))}function Ut(At,un){var Mt=qe()(kn(),Ve().normalization.unescapeValue(At)),le=an(n(Et)).concat(Mt);Ve().onSelect(un===Ua.nextInside?Gt(le):Ca(le)),un!==Ua.self&&Ve().focus()}function tn(){Ve().onSelect(Ca(n(Et))),Ve().focus()}ce(()=>C(Xt()),()=>{S(Et,so(Xt()))}),ce(()=>(C(Un()),n(Et)),()=>{S(ur,Rr(Un())&&Bt(Un().path,n(Et)))}),ce(()=>(n(ur),C(Un())),()=>{S(Pe,n(ur)&&Pr(Un()))}),En(),zt(!0);var it=u4(),Dt=ht(it),Ye=At=>{var un=Ce(()=>(C(Ve()),C(kn()),Z(()=>Ve().normalization.escapeValue(kn())))),Mt=Ce(()=>(C(Pr),C(Un()),Z(()=>Pr(Un())?Un().initialValue:void 0)));Qg(At,{get value(){return n(un)},get initialValue(){return n(Mt)},label:"Edit key",shortText:!0,onChange:Ut,onCancel:tn,get onFind(){return C(Ve()),Z(()=>Ve().onFind)}})},bn=At=>{var un,Mt=c4(),le=W(Mt),xe=Ot=>{var nn=Ce(()=>(C(Ve()),C(kn()),Z(()=>Ve().normalization.escapeValue(kn()))));t0(Ot,{get text(){return n(nn)},get searchResultItems(){return ge()}})},Fe=Ot=>{var nn=Tr();Ae(Tt=>dt(nn,Tt),[()=>(C(ci),C(Ve()),C(kn()),Z(()=>ci(Ve().normalization.escapeValue(kn()))))],Ce),X(Ot,nn)};ye(le,Ot=>{ge()?Ot(xe):Ot(Fe,!1)}),Ae(Ot=>un=Pt(Mt,1,"jse-key svelte-2iqnqn",null,un,Ot),[()=>({"jse-empty":kn()===""})],Ce),Re("dblclick",Mt,Lt),X(At,Mt)};ye(Dt,At=>{C(Ve()),n(Pe),Z(()=>!Ve().readOnly&&n(Pe))?At(Ye):At(bn,!1)});var $n=ae(Dt,2),Qn=At=>{za(At,{selected:!0,get onContextMenu(){return C(Ve()),Z(()=>Ve().onContextMenu)}})};ye($n,At=>{C(Ve()),n(ur),n(Pe),Z(()=>!Ve().readOnly&&n(ur)&&!n(Pe))&&At(Qn)}),X(hr,it),ut()})(kr,{get pointer(){return n(cn)},get key(){return n(Ct)},get selection(){return n(Ft)},get searchResultItems(){return n(Sr)},get context(){return u()},onUpdateKey:M}),Ae(hr=>Tn=Pt(rr,1,"jse-key-outer svelte-oawf7x",null,Tn,hr),[()=>({"jse-selected-key":Rr(n(Ft))&&Bt(n(Ft).path,n(Ht))})],Ce),X(hn,rr)}}}),X(Nt,Yt)});var Wt=ae(ln,2),wn=ae(W(Wt),2),Jt=Nt=>{var Ct=M4();Re("click",Ct,$e),X(Nt,Ct)};ye(wn,Nt=>{n(o)||Nt(Jt)}),X(Ee,pt)};ye(vt,Ee=>{n(h)&&Ee(tt)}),Re("click",V,k),X(U,L)},P=U=>{var L=L4(),fe=W(L),J=W(fe);fr(J,t,"identifier",{},null);var V=ae(J,2),Ze=D=>{X(D,I4())};ye(V,D=>{n(o)||D(Ze)});var Je=ae(V,2),Oe=W(Je),Xe=Ce(()=>n(b)?d():void 0),Ne=Ce(()=>(C(Rh),C(c()),Z(()=>Rh(c()))));g0(Oe,{get path(){return n(v)},get value(){return a()},get enforceString(){return n(f)},get selection(){return n(Xe)},get searchResultItems(){return n(Ne)},get context(){return u()}});var Le=ae(Je,2),lt=D=>{var re=q4();za(W(re),{get root(){return n(o)},selected:!0,get onContextMenu(){return C(u()),Z(()=>u().onContextMenu)}}),X(D,re)};ye(Le,D=>{C(u()),n(b),C(d()),C(mn),C(Vn),C(Pr),C(Bt),C(nt),n(v),Z(()=>!u().readOnly&&n(b)&&d()&&(mn(d())||Vn(d()))&&!Pr(d())&&Bt(nt(d()),n(v)))&&D(lt)});var He=ae(fe,2),_t=D=>{oi(D,{get validationError(){return n(w)},onExpand:$})};ye(He,D=>{n(w)&&D(_t)});var O=ae(He,2),N=D=>{var re=D4();Re("click",re,$e),X(D,re)};ye(O,D=>{n(o)||D(N)}),X(U,L)};ye(K,U=>{C(xn),C(a()),Z(()=>xn(a()))?U(ie):U(P,!1)},F)};ye(T,K=>{C(a()),Z(()=>Array.isArray(a()))?K(E):K(R,!1)});var ne=ae(T,2),Se=K=>{var F,ie=U4(),P=W(ie),U=Ce(()=>(n(b),C(oo),C(d()),Z(()=>n(b)&&oo(d()))));za(P,{insert:!0,get selected(){return n(U)},onContextMenu:me}),Ae(L=>{F=Pt(ie,1,"jse-insert-area jse-after svelte-oawf7x",null,F,L),Cn(ie,"title",cd)},[()=>({"jse-hovered":n(j)===pc,"jse-selected":n(b)&&oo(d())})],Ce),X(K,ie)};ye(ne,K=>{C(u()),n(j),C(pc),n(b),C(oo),C(d()),Z(()=>!u().readOnly&&(n(j)===pc||n(b)&&oo(d())))&&K(Se)}),Ae((K,F,ie)=>{Y=Pt(se,1,K,"svelte-oawf7x",Y,F),Cn(se,"data-path",n(r)),Cn(se,"aria-selected",n(b)),I=Io(se,"",I,ie)},[()=>Qa((C(Vo),n(h),C(u()),n(v),C(a()),Z(()=>Vo("jse-json-node",{"jse-expanded":n(h)},u().onClassName(n(v),a()))))),()=>({"jse-root":n(o),"jse-selected":n(b)&&Vn(d()),"jse-selected-value":n(b)&&mn(d()),"jse-readonly":u().readOnly,"jse-hovered":n(j)===lh}),()=>({"--level":(n(v),Z(()=>n(v).length))})],Ce),Re("mousedown",se,function(K){if((K.buttons===1||K.buttons===2)&&!((F=K.target).nodeName==="DIV"&&F.contentEditable==="true"||K.buttons===1&&Tg(K.target,"BUTTON"))){var F;K.stopPropagation(),K.preventDefault(),u().focus(),document.addEventListener("mousemove",z,!0),document.addEventListener("mouseup",H);var ie=sd(K.target),P=u().getJson(),U=u().getDocumentState();if(!d()||ie===qn.after||ie===qn.inside||d().type!==ie&&d().type!==qn.multi||!Yi(P,d(),n(v)))if(Zn(Zn().selecting=!0),Zn(Zn().selectionAnchor=n(v)),Zn(Zn().selectionAnchorType=ie),Zn(Zn().selectionFocus=n(v)),K.shiftKey){var L=u().getSelection();L&&u().onSelect(Jr(gs(L),n(v)))}else if(ie===qn.multi)if(n(o)&&K.target.hasAttribute("data-path")){var fe=Qt(Vg(a(),U));u().onSelect(Kd(fe))}else u().onSelect(Jr(n(v),n(v)));else P!==void 0&&u().onSelect(Sh(ie,n(v)));else K.button===0&&g()(K)}}),Re("mousemove",se,function(K){if(Zn().selecting){K.preventDefault(),K.stopPropagation(),Zn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var F=sd(K.target);Bt(n(v),Zn().selectionFocus)&&F===Zn().selectionAnchorType||(Zn(Zn().selectionFocus=n(v)),Zn(Zn().selectionAnchorType=F),u().onSelect(Jr(Zn().selectionAnchor||Zn().selectionFocus,Zn().selectionFocus)))}}),Re("mouseover",se,function(K){Zn().selecting||Zn().dragging||(K.stopPropagation(),Aa(K.target,"data-type","selectable-value")?S(j,lh):Aa(K.target,"data-type","selectable-key")?S(j,void 0):Aa(K.target,"data-type","insert-selection-area-inside")?S(j,cs):Aa(K.target,"data-type","insert-selection-area-after")&&S(j,pc),clearTimeout(p))}),Re("mouseout",se,function(K){K.stopPropagation(),p=window.setTimeout(()=>S(j,void 0))}),X(e,se),ut()}var V4={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},B4={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},Bh={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},W4={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};function H4(e,t){e.stopPropagation(),t.onCreateObject()}function K4(e,t){e.stopPropagation(),t.onCreateArray()}St(`/* over all fonts, sizes, and colors */
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
.jse-welcome.svelte-1eamlhk {
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
.jse-welcome.svelte-1eamlhk:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-before:where(.svelte-1eamlhk) {
  flex: 1;
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-after:where(.svelte-1eamlhk) {
  flex: 2;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) .jse-welcome-info:where(.svelte-1eamlhk) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk) {
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
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var Q4=(e,t)=>t.onClick(),J4=de('<div class="jse-welcome-info svelte-1eamlhk">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1eamlhk">Create object</button> <button class="svelte-1eamlhk">Create array</button>',1),G4=de('<div class="jse-welcome svelte-1eamlhk" role="none"><div class="jse-space jse-before svelte-1eamlhk"></div> <div class="jse-contents svelte-1eamlhk"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1eamlhk"></div></div>');function nf(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return wj(r,o)}function b0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=Qe(e,t);if(vr(s)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,d=function(g,m){var j={boolean:0,number:1,string:2,undefined:4},p=3;return function(x,v){var h=Qe(x,g),f=Qe(v,g);if(typeof h!=typeof f){var y,w,b=(y=j[typeof h])!==null&&y!==void 0?y:p,k=(w=j[typeof f])!==null&&w!==void 0?w:p;return b>k?m:b<k?-m:0}return typeof h=="number"||typeof h=="boolean"?h>f?m:h<f?-m:0:ir(h)?0:m*nf(h,f)}}(l,c),u=Qe(a,i);return[{op:"replace",path:ft(i),value:u.slice(0).sort(d)}]}(e,t,r,o)}if(xn(s))return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Qe(a,i),d=Object.keys(c).slice();d.sort((g,m)=>l*nf(g,m));var u={};return d.forEach(g=>u[g]=c[g]),[{op:"replace",path:ft(i),value:u}]}(e,t,o);throw new Error("Cannot sort: no array or object")}il(["click"]);St(`/* over all fonts, sizes, and colors */
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
.jse-navigation-bar-dropdown.svelte-2nnd2m {
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
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m) {
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
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):focus, .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-2nnd2m) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var Y4=de('<button type="button"> </button>'),X4=de('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m">...</button>'),Z4=de('<div class="jse-navigation-bar-dropdown svelte-2nnd2m"><!> <!></div>');function eS(e,t){ct(t,!1);var r=_(t,"items",9),o=_(t,"selectedItem",9),s=_(t,"onSelect",9);zt(!0);var a=Z4(),i=W(a);pr(i,1,()=>(C(Bc),C(r()),Z(()=>Bc(r(),100))),d=>d,(d,u)=>{var g,m=Y4(),j=W(m);Ae((p,x,v)=>{g=Pt(m,1,"jse-navigation-bar-dropdown-item svelte-2nnd2m",null,g,p),Cn(m,"title",x),dt(j,v)},[()=>({"jse-selected":n(u)===o()}),()=>(n(u),Z(()=>n(u).toString())),()=>(C(pa),n(u),Z(()=>pa(n(u).toString(),30)))],Ce),Re("click",m,fa(()=>s()(n(u)))),X(d,m)});var l=ae(i,2),c=d=>{var u=X4();Cn(u,"title","Limited to 100 items"),X(d,u)};ye(l,d=>{C(r()),Z(()=>r().length>100)&&d(c)}),X(e,a),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-navigation-bar-item.svelte-752ro1 {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1) {
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
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):focus, .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-752ro1) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-752ro1) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-752ro1:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var tS=de('<button type="button" class="jse-navigation-bar-button svelte-752ro1"> </button>'),nS=de('<div class="jse-navigation-bar-item svelte-752ro1"><button type="button"><!></button> <!></div>');function Wh(e,t){ct(t,!1);var r,o=Q(void 0,!0),s=Q(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:i}=Xa("absolute-popup"),l=_(t,"path",9),c=_(t,"index",9),d=_(t,"onSelect",9),u=_(t,"getItems",9),g=Q(void 0,!0),m=Q(!1,!0);function j(y){i(r),d()(n(o).concat(y))}ce(()=>(C(l()),C(c())),()=>{S(o,l().slice(0,c()))}),ce(()=>(C(l()),C(c())),()=>{S(s,l()[c()])}),En(),zt(!0);var p,x=nS(),v=W(x);sn(W(v),{get data(){return Cm}});var h=ae(v,2),f=y=>{var w=tS(),b=W(w);Ae(()=>dt(b,n(s))),Re("click",w,()=>j(n(s))),X(y,w)};ye(h,y=>{n(s)!==void 0&&y(f)}),er(x,y=>S(g,y),()=>n(g)),Ae(y=>p=Pt(v,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-752ro1",null,p,y),[()=>({"jse-open":n(m)})],Ce),Re("click",v,function(){if(n(g)){S(m,!0);var y={items:u()(n(o)),selectedItem:n(s),onSelect:j};r=a(eS,y,{anchor:n(g),closeOnOuterClick:!0,onClose:()=>{S(m,!1)}})}}),X(e,x),ut()}function Xf(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}St(`/* over all fonts, sizes, and colors */
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
.jse-navigation-bar-path-editor.svelte-zc2wx7 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button:where(.svelte-zc2wx7) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-copy.copied:where(.svelte-zc2wx7) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-validation-error:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 .jse-copied-text:where(.svelte-zc2wx7) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var rS=de('<button type="button" class="jse-navigation-bar-validation-error svelte-zc2wx7"><!></button>'),oS=de('<div class="jse-copied-text svelte-zc2wx7">Copied!</div>'),aS=de('<div><input type="text" class="jse-navigation-bar-text svelte-zc2wx7"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function sS(e,t){ct(t,!1);var r=Q(),o=Xa("absolute-popup"),s=_(t,"path",8),a=_(t,"pathParser",8),i=_(t,"onChange",8),l=_(t,"onClose",8),c=_(t,"onError",8),d=_(t,"pathExists",8),u=Q(),g=Q(),m=Q(!1),j=void 0,p=Q(!1);function x(){n(u).focus()}function v(H){try{var G=a().parse(H);return function(ee){if(!d()(ee))throw new Error("Path does not exist in current document")}(G),{path:G,error:void 0}}catch(ee){return{path:void 0,error:ee}}}Qr(()=>{x()}),Oo(()=>{clearTimeout(j)}),ce(()=>(C(a()),C(s())),()=>{S(g,a().stringify(s()))}),ce(()=>(n(m),n(g)),()=>{S(r,n(m)?v(n(g)).error:void 0)}),En(),zt();var h,f=aS(),y=W(f);er(y,H=>S(u,H),()=>n(u));var w=ae(y,2),b=H=>{var G=rS();sn(W(G),{get data(){return ys}}),Yr(G,(ee,te)=>fi?.(ee,te),()=>Te({text:String(n(r)||"")},o)),X(H,G)};ye(w,H=>{n(r)&&H(b)});var k=ae(w,2),$=H=>{X(H,oS())};ye(k,H=>{n(p)&&H($)});var M,z=ae(k,2);sn(W(z),{get data(){return Ma}}),Ae((H,G)=>{h=Pt(f,1,"jse-navigation-bar-path-editor svelte-zc2wx7",null,h,H),ws(y,n(g)),M=Pt(z,1,"jse-navigation-bar-copy svelte-zc2wx7",null,M,G)},[()=>({error:n(r)}),()=>({copied:n(p)})],Ce),Re("keydown",y,fa(function(H){var G=_a(H);if(G==="Escape"&&(H.preventDefault(),l()()),G==="Enter"){H.preventDefault(),S(m,!0);var ee=v(n(g));ee.path!==void 0?i()(ee.path):c()(ee.error)}})),Re("input",y,function(H){S(g,H.currentTarget.value)}),Re("click",z,function(){Xf(n(g)),S(p,!0),j=window.setTimeout(()=>S(p,!1),1e3),x()}),X(e,f),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-navigation-bar.svelte-xs03gj {
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
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) {
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
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.flex:where(.svelte-xs03gj) {
  flex: 1;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):focus, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):hover, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.editing:where(.svelte-xs03gj) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) .jse-navigation-bar-space:where(.svelte-xs03gj) {
  flex: 1;
  text-align: left;
}`);var iS=de("<!> <!>",1),lS=de('<div class="jse-navigation-bar svelte-xs03gj"><!> <button type="button"><span class="jse-navigation-bar-space svelte-xs03gj"> </span> <!></button></div>');function cS(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=Nr("jsoneditor:NavigationBar"),a=_(t,"json",9),i=_(t,"selection",9),l=_(t,"onSelect",9),c=_(t,"onError",9),d=_(t,"pathParser",9),u=Q(void 0,!0),g=Q(!1,!0);function m(G){s("get items for path",G);var ee=Qe(a(),G);if(Array.isArray(ee))return em(0,ee.length).map(String);if(xn(ee)){var te=Object.keys(ee).slice(0);return te.sort(nf),te}return[]}function j(G){return Co(a(),G)}function p(G){s("select path",JSON.stringify(G)),l()(Jr(G,G))}function x(){S(g,!1)}function v(G){x(),p(G)}ce(()=>(C(i()),nt),()=>{S(r,i()?nt(i()):[])}),ce(()=>(C(a()),n(r)),()=>{S(o,ir(Qe(a(),n(r))))}),ce(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(u)&&n(u).scrollTo){var G=n(u).scrollWidth-n(u).clientWidth;G>0&&(s("scrollTo ",G),n(u).scrollTo({left:G,behavior:"smooth"}))}})}),En(),zt(!0);var h=lS(),f=W(h),y=G=>{var ee=iS(),te=ht(ee);pr(te,1,()=>n(r),wr,(pe,$e,ke)=>{Wh(pe,{getItems:m,get path(){return n(r)},index:ke,onSelect:p})});var je=ae(te,2),B=pe=>{Wh(pe,{getItems:m,get path(){return n(r)},get index(){return n(r),Z(()=>n(r).length)},onSelect:p})};ye(je,pe=>{n(o)&&pe(B)}),X(G,ee)},w=G=>{sS(G,{get path(){return n(r)},onClose:x,onChange:v,get onError(){return c()},pathExists:j,get pathParser(){return d()}})};ye(f,G=>{n(g)?G(w,!1):G(y)});var b,k=ae(f,2),$=W(k),M=W($),z=ae($,2),H=Ce(()=>n(g)?mj:ej);sn(z,{get data(){return n(H)}}),er(h,G=>S(u,G),()=>n(u)),Ae((G,ee)=>{b=Pt(k,1,"jse-navigation-bar-edit svelte-xs03gj",null,b,G),Cn(k,"title",n(g)?"Cancel editing the selected path":"Edit the selected path"),dt(M,ee)},[()=>({flex:!n(g),editing:n(g)}),()=>(C(ir),C(a()),n(g),Z(()=>ir(a())||n(g)?" ":"Navigation bar"))],Ce),Re("click",k,function(){S(g,!n(g))}),X(e,h),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-search-box.svelte-1mxl2uo {
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
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo),
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
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
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-replace-toggle:where(.svelte-1mxl2uo) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-icon:where(.svelte-1mxl2uo) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) label.jse-search-input-label:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count:where(.svelte-1mxl2uo) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count.jse-visible:where(.svelte-1mxl2uo) {
  visibility: visible;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  width: auto;
}`);var uS=de('<button type="button" class="jse-replace-toggle svelte-1mxl2uo" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),dS=de('<div class="jse-replace-section svelte-1mxl2uo"><input class="jse-replace-input svelte-1mxl2uo" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1mxl2uo">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1mxl2uo">All</button></div>'),fS=de('<div class="jse-search-box svelte-1mxl2uo"><form class="jse-search-form svelte-1mxl2uo"><!> <div class="jse-search-contents svelte-1mxl2uo"><div class="jse-search-section svelte-1mxl2uo"><div class="jse-search-icon svelte-1mxl2uo"><!></div> <label class="jse-search-input-label svelte-1mxl2uo" about="jse-search input"><input class="jse-search-input svelte-1mxl2uo" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1mxl2uo" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1mxl2uo" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1mxl2uo" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function y0(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=Q(void 0,!0),a=Nr("jsoneditor:SearchBox"),i=_(t,"json",9),l=_(t,"documentState",9),c=_(t,"parser",9),d=_(t,"showSearch",9),u=_(t,"showReplace",13),g=_(t,"readOnly",9),m=_(t,"columns",9),j=_(t,"onSearch",9),p=_(t,"onFocus",9),x=_(t,"onPatch",9),v=_(t,"onClose",9),h=Q("",!0),f="",y=Q("",!0),w=Q(!1,!0),b=Q(void 0,!0),k=Pc(function(L){return R.apply(this,arguments)},300),$=Pc(function(L){return ne.apply(this,arguments)},300);function M(){u(!u()&&!g())}function z(L){L.stopPropagation();var fe=_a(L);fe==="Enter"&&(L.preventDefault(),n(h)!==f?k.flush():ke()),fe==="Shift+Enter"&&(L.preventDefault(),Y()),fe==="Ctrl+Enter"&&(L.preventDefault(),u()?te():ke()),fe==="Ctrl+H"&&(L.preventDefault(),M()),fe==="Escape"&&(L.preventDefault(),F())}function H(L){_a(L)==="Enter"&&(L.preventDefault(),L.stopPropagation(),te())}function G(){return ee.apply(this,arguments)}function ee(){return(ee=kt(function*(){Yn(),yield k.flush()})).apply(this,arguments)}function te(){return je.apply(this,arguments)}function je(){return(je=kt(function*(){var L;if(!g()){var fe=(L=n(b))===null||L===void 0?void 0:L.activeItem;if(a("handleReplace",{replaceText:n(y),activeItem:fe}),n(b)&&fe&&i()!==void 0){S(b,Te(Te({},Ch(n(b))),{},{activeIndex:n(o)}));var{operations:J,newSelection:V}=S2(i(),l(),n(y),fe,c());x()(J,(Ze,Je)=>({state:Je,selection:V})),Yn(),yield $.flush(),yield se()}}})).apply(this,arguments)}function B(){return pe.apply(this,arguments)}function pe(){return(pe=kt(function*(){if(!g()){a("handleReplaceAll",{text:n(h),replaceText:n(y)});var{operations:L,newSelection:fe}=function(J,V,Ze,Je,Oe){for(var Xe=Eh(Ze,J,{maxResults:1/0}),Ne=[],Le=0;Le<Xe.length;Le++){var lt=Xe[Le-1],He=Xe[Le];Le!==0&&He.field===lt.field&&Bt(He.path,lt.path)?Qt(Ne).items.push(He):Ne.push({path:He.path,field:He.field,items:[He]})}Ne.sort((N,D)=>N.field!==D.field?N.field===Do.key?1:-1:D.path.length-N.path.length);var _t,O=[];return Ne.forEach(N=>{var{field:D,path:re,items:he}=N;if(D===Do.key){var Me=an(re),Ue=Qe(J,Me),be=Qt(re),ve=vl(Me,Object.keys(Ue),be,$h(be,Je,he));O=O.concat(ve),_t=di(J,ve)}else{if(D!==Do.value)throw new Error("Cannot replace: unknown type of search result field ".concat(D));var vt=Qe(J,re);if(vt===void 0)throw new Error("Cannot replace: path not found ".concat(ft(re)));var tt=typeof vt=="string"?vt:String(vt),Ee=Xo(J,V,re),pt=$h(tt,Je,he),ln=[{op:"replace",path:ft(re),value:Ee?pt:bi(pt,Oe)}];O=O.concat(ln),_t=di(J,ln)}}),{operations:O,newSelection:_t}}(i(),l(),n(h),n(y),c());x()(L,(J,V)=>({state:V,selection:fe})),yield se()}})).apply(this,arguments)}function $e(L){L.select()}function ke(){return me.apply(this,arguments)}function me(){return(me=kt(function*(){S(b,n(b)?Ch(n(b)):void 0),yield se()})).apply(this,arguments)}function Y(){return I.apply(this,arguments)}function I(){return I=kt(function*(){S(b,n(b)?function(L){var fe=L.activeIndex>0?L.activeIndex-1:L.items.length-1,J=L.items[fe],V=L.items.map((Ze,Je)=>Te(Te({},Ze),{},{active:Je===fe}));return Te(Te({},L),{},{items:V,activeItem:J,activeIndex:fe})}(n(b)):void 0),yield se()}),I.apply(this,arguments)}function se(){return T.apply(this,arguments)}function T(){return(T=kt(function*(){var L;a("handleFocus",n(b));var fe=(L=n(b))===null||L===void 0?void 0:L.activeItem;fe&&i()!==void 0&&(yield p()(fe.path,fe.resultIndex))})).apply(this,arguments)}function E(){return E=kt(function*(L){yield Se(L,n(h),i())}),E.apply(this,arguments)}function R(){return R=kt(function*(L){yield Se(d(),L,i()),yield se()}),R.apply(this,arguments)}function ne(){return ne=kt(function*(L){yield Se(d(),n(h),L)}),ne.apply(this,arguments)}function Se(L,fe,J){return K.apply(this,arguments)}function K(){return K=kt(function*(L,fe,J){return L?(a("applySearch",{showSearch:L,text:fe}),fe===""?(a("clearing search result"),n(b)!==void 0&&S(b,void 0),Promise.resolve()):(f=fe,S(w,!0),new Promise(V=>{setTimeout(()=>{var Ze=Eh(fe,J,{maxResults:id,columns:m()});S(b,function(Je,Oe){var Xe=Oe!=null&&Oe.activeItem?Ph(Oe.activeItem):void 0,Ne=Je.findIndex(He=>Bt(Xe,Ph(He))),Le=Ne!==-1?Ne:Oe?.activeIndex!==void 0&&Oe?.activeIndex<Je.length?Oe?.activeIndex:Je.length>0?0:-1,lt=Je.map((He,_t)=>Te(Te({resultIndex:_t},He),{},{active:_t===Le}));return{items:lt,activeItem:lt[Le],activeIndex:Le}}(Ze,n(b))),S(w,!1),V()})}))):(n(b)&&S(b,void 0),Promise.resolve())}),K.apply(this,arguments)}function F(){a("handleClose"),k.cancel(),$.cancel(),Se(!1,n(h),i()),v()()}ce(()=>n(b),()=>{var L;S(r,((L=n(b))===null||L===void 0||(L=L.items)===null||L===void 0?void 0:L.length)||0)}),ce(()=>n(b),()=>{var L;S(o,((L=n(b))===null||L===void 0?void 0:L.activeIndex)||0)}),ce(()=>(n(r),id),()=>{S(s,n(r)>=id?"".concat(999,"+"):String(n(r)))}),ce(()=>(C(j()),n(b)),()=>{j()(n(b))}),ce(()=>C(d()),()=>{(function(L){E.apply(this,arguments)})(d())}),ce(()=>n(h),()=>{k(n(h))}),ce(()=>C(i()),()=>{$(i())}),En(),zt(!0);var ie=lr(),P=ht(ie),U=L=>{var fe=fS(),J=W(fe),V=W(J),Ze=be=>{var ve=uS(),vt=W(ve),tt=Ce(()=>u()?Sa:Li);sn(vt,{get data(){return n(tt)}}),Re("click",ve,M),X(be,ve)};ye(V,be=>{g()||be(Ze)});var Je=W(ae(V,2)),Oe=W(Je),Xe=W(Oe),Ne=be=>{sn(be,{get data(){return Ky},spin:!0})},Le=be=>{sn(be,{get data(){return lu}})};ye(Xe,be=>{n(w)?be(Ne):be(Le,!1)});var lt=ae(Oe,2),He=W(lt);Lr(()=>Vc(He,()=>n(h),be=>S(h,be))),Yr(He,be=>$e?.(be)),Lr(()=>Re("paste",He,G));var _t,O=ae(lt,2),N=W(O),D=ae(O,2);sn(W(D),{get data(){return hj}});var re=ae(D,2);sn(W(re),{get data(){return tj}});var he=ae(re,2);sn(W(he),{get data(){return cu}});var Me=ae(Je,2),Ue=be=>{var ve=dS(),vt=W(ve),tt=ae(vt,2),Ee=ae(tt,2);Vc(vt,()=>n(y),pt=>S(y,pt)),Re("keydown",vt,H),Re("click",tt,te),Re("click",Ee,B),X(be,ve)};ye(Me,be=>{u()&&!g()&&be(Ue)}),Ae(be=>{var ve;_t=Pt(O,1,"jse-search-count svelte-1mxl2uo",null,_t,be),dt(N,"".concat(n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"").concat((ve=n(s))!==null&&ve!==void 0?ve:""))},[()=>({"jse-visible":n(h)!==""})],Ce),Re("click",D,ke),Re("click",re,Y),Re("click",he,F),Re("keydown",J,z),X(L,fe)};ye(P,L=>{d()&&L(U)}),X(e,ie),ut()}var tl=Symbol("path");function vS(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(a,i,l){if(a.length<i)a.forEach(l);else for(var c=i>1?(a.length-1)/(i-1):a.length,d=0;d<i;d++){var u=Math.floor(d*c);l(a[u],u,a)}}(e,r,a=>{xn(a)?j0(a,o,t):o[tl]=!0});var s=[];return tl in o&&s.push([]),x0(o,[],s,t),s}function j0(e,t,r){for(var o in e){var s=e[o],a=t[o]||(t[o]={});xn(s)&&r?j0(s,a,r):a[tl]===void 0&&(a[tl]=!0)}}function x0(e,t,r,o){for(var s in e){var a=t.concat(s),i=e[s];i&&i[tl]===!0&&r.push(a),yr(i)&&o&&x0(i,a,r,o)}}function pS(e,t,r,o,s,a){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=vr(r)?r.length:0,c=function(f,y){var w=Object.values(f);if(pn(w))return y;var b=(k,$)=>k+$;return w.reduce(b)/w.length}(o,s),d=e-i,u=t+2*i,g=f=>o[f]||s,m=0,j=a;j<d&&m<l;)j+=g(m),m++;m>0&&(j-=g(--m));for(var p=m,x=0;x<u&&p<l;)x+=g(p),p++;for(var v=0,h=p;h<l;h++)v+=g(h);return{startIndex:m,endIndex:p,startHeight:j,endHeight:v,averageItemHeight:c,visibleHeight:x,visibleItems:vr(r)?r.slice(m,p):[]}}function Hh(e,t,r,o){for(var{rowIndex:s}=ko(e,t),a=0,i=0;i<s;i++)a+=r[i]||o;return a}function ko(e,t){var[r,...o]=e,s=parseInt(r,10);return{rowIndex:isNaN(s)?-1:s,columnIndex:t.findIndex(a=>ta(o,a))}}function us(e,t){var{rowIndex:r,columnIndex:o}=e;return[String(r),...t[o]]}function hS(e,t){var[r,o]=w1(e,i=>Pf(i.path[0])),s=u1(r,mS),a=m1(s,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var d=function(u,g){var m=ko(u.path,g);return m.columnIndex!==-1?m.columnIndex:-1}(c,t);d!==-1?(l.columns[d]===void 0&&(l.columns[d]=[]),l.columns[d].push(c)):l.row.push(c)}),l});return{root:o,rows:a}}function qs(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>ao(r.path)+" "+r.message).join(", "),severity:qo.warning}}function mS(e){return parseInt(e.path[0],10)}function gS(e,t,r){var o=t.some(s=>function(a,i,l){if(!a)return!1;if(i.op==="replace"){var c=so(i.path),{rowIndex:d,columnIndex:u}=ko(c,l),g=l.findIndex(m=>Bt(m,a.path));if(d!==-1&&u!==-1&&u!==g)return!1}return!0}(e,s,r));return o?void 0:e}var Gr=Nr("jsoneditor:actions");function w0(e){return rf.apply(this,arguments)}function rf(){return rf=kt(function*(e){var{json:t,selection:r,indentation:o,readOnly:s,parser:a,onPatch:i}=e;if(!s&&t!==void 0&&r&&Gs(r)){var l=Hg(t,r,o,a);if(l!==void 0){Gr("cut",{selection:r,clipboard:l,indentation:o}),yield Xf(l);var{operations:c,newSelection:d}=Xg(t,r);i(c,(u,g)=>({state:g,selection:d}))}}}),rf.apply(this,arguments)}function k0(e){return of.apply(this,arguments)}function of(){return of=kt(function*(e){var{json:t,selection:r,indentation:o,parser:s}=e,a=Hg(t,r,o,s);a!==void 0&&(Gr("copy",{clipboard:a,indentation:o}),yield Xf(a))}),of.apply(this,arguments)}function S0(e){var{clipboardText:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onChangeText:l,onPasteMultilineText:c,openRepairModal:d}=e;if(!s)try{u(t)}catch{d(t,m=>{Gr("repaired pasted text: ",m),u(m)})}function u(g){if(r!==void 0){var m=o||Gt([]),j=Yg(r,m,g,a),p=function(x,v,h){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m2;if(x.length>f)return!1;var y=/\n/.test(x);if(!y)return!1;var w=v.some(k=>k.op==="replace"&&Array.isArray(k.value)),b=v.filter(k=>k.op==="add").length>1;if(!w&&!b)return!1;try{return cl(x,h.parse),!1}catch{return!0}}(t,j,a);Gr("paste",{pastedText:g,operations:j,ensureSelection:m,pasteMultilineText:p}),i(j,(x,v)=>{var h=v;return j.filter(f=>(om(f)||cf(f))&&ir(f.value)).forEach(f=>{var y=To(r,f.path);h=Ss(x,h,y)}),{state:h}}),p&&c(g)}else Gr("paste text",{pastedText:g}),l(t,(x,v)=>{if(x)return{state:Ss(x,v,[])}})}}function _0(e){var{json:t,text:r,selection:o,keepSelection:s,readOnly:a,onChange:i,onPatch:l}=e;if(!a&&o){var c=t!==void 0&&(Rr(o)||mn(o))?Jr(o.path,o.path):o;if(pn(nt(o)))Gr("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:d,newSelection:u}=Xg(t,c);Gr("remove",{operations:d,selection:o,newSelection:u}),l(d,(g,m)=>({state:m,selection:s?o:u}))}}}function ou(e){var{insertType:t,selectInside:r,initialValue:o,json:s,selection:a,readOnly:i,parser:l,onPatch:c,onReplaceJson:d}=e;if(!i){var u=function(x,v,h){if(h==="object")return{};if(h==="array")return[];if(h==="structure"&&x!==void 0){var f=v?Bg(v):[],y=Qe(x,f);if(Array.isArray(y)&&!pn(y)){var w=ba(y);return ir(w)?e1(w,b=>Array.isArray(b)?[]:xn(b)?void 0:""):""}}return""}(s,a,t);if(s!==void 0){var g=l.stringify(u),m=Yg(s,a,g,l);Gr("onInsert",{insertType:t,operations:m,newValue:u,data:g});var j=Qt(m.filter(x=>x.op==="add"||x.op==="replace"));c(m,(x,v,h)=>{if(j){var f=To(x,j.path);if(ir(u))return{state:Ro(x,v,f,Wf),selection:r?Ea(f):h};if(u===""){var y=pn(f)?void 0:Qe(x,an(f));return{state:Ro(x,v,f,Ec),selection:xn(y)?Hf(f,o):Jc(f,o)}}}}),Gr("after patch")}else{Gr("onInsert",{insertType:t,newValue:u});var p=[];d(u,(x,v)=>({state:Ss(x,v,p),selection:ir(u)?Ea(p):Jc(p)}))}}}function C0(e){return af.apply(this,arguments)}function af(){return af=kt(function*(e){var{char:t,selectInside:r,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c,onSelect:d}=e;a||(Rr(s)?d(Te(Te({},s),{},{edit:!0,initialValue:t})):t==="{"?ou({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):t==="["?ou({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):mn(s)&&o!==void 0?ir(Qe(o,s.path))||d(Te(Te({},s),{},{edit:!0,initialValue:t})):(Gr("onInsertValueWithCharacter",{char:t}),yield function(u){return sf.apply(this,arguments)}({char:t,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c})))}),af.apply(this,arguments)}function sf(){return sf=kt(function*(e){var{char:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l}=e;s||ou({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l})}),sf.apply(this,arguments)}St(`/* over all fonts, sizes, and colors */
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
.jse-json-preview.svelte-1vjn89h {
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
}`);var bS=de('<div class="jse-json-preview svelte-1vjn89h"> </div>');function E0(e,t){ct(t,!1);var r=Q(),o=Q(),s=_(t,"text",8),a=_(t,"json",8),i=_(t,"indentation",8),l=_(t,"parser",8);ce(()=>(C(a()),C(s())),()=>{S(r,a()!==void 0?{json:a()}:{text:s()||""})}),ce(()=>(n(r),C(i()),C(l()),Wc),()=>{S(o,pa(Ud(n(r),i(),l()),Wc))}),En(),zt();var c=bS(),d=W(c);Ae(()=>dt(d,n(o))),X(e,c),ut()}St(`/* over all fonts, sizes, and colors */
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
button.jse-context-menu-button.svelte-1idfykj {
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
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);var yS=de('<button type="button"><!> <!></button>');function jd(e,t){ct(t,!1);var r=_(t,"item",8),o=_(t,"className",8,void 0),s=_(t,"onRequestClose",8);zt();var a=yS(),i=W(a),l=u=>{sn(u,{get data(){return C(r()),Z(()=>r().icon)}})};ye(i,u=>{C(r()),Z(()=>r().icon)&&u(l)});var c=ae(i,2),d=u=>{var g=Tr();Ae(()=>dt(g,(C(r()),Z(()=>r().text)))),X(u,g)};ye(c,u=>{C(r()),Z(()=>r().text)&&u(d)}),Ae(u=>{Pt(a,1,u,"svelte-1idfykj"),Cn(a,"title",(C(r()),Z(()=>r().title))),a.disabled=(C(r()),Z(()=>r().disabled||!1))},[()=>Qa((C(Vo),C(o()),C(r()),Z(()=>Vo("jse-context-menu-button",o(),r().className))))],Ce),Re("click",a,u=>{s()(),r().onClick(u)}),X(e,a),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-dropdown-button.svelte-11rxb2m {
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
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) li:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m) {
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
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown.jse-visible:where(.svelte-11rxb2m) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items.jse-visible:where(.svelte-11rxb2m) {
  display: block;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m) {
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
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var jS=de('<li class="svelte-11rxb2m"><button type="button"><!> </button></li>'),xS=de('<div role="button" tabindex="0" class="jse-dropdown-button svelte-11rxb2m"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-11rxb2m"></ul></div></div>');St(`/* over all fonts, sizes, and colors */
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
button.jse-context-menu-button.svelte-1idfykj {
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
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);var wS=de('<button type="button" slot="defaultItem"><!> </button>');function xd(e,t){ct(t,!1);var r=Q(),o=_(t,"item",8),s=_(t,"className",8,void 0),a=_(t,"onRequestClose",8);ce(()=>(C(o()),C(a())),()=>{S(r,o().items.map(i=>Te(Te({},i),{},{onClick:l=>{a()(),i.onClick(l)}})))}),En(),zt(),function(i,l){ct(l,!1);var c=Q(void 0,!0),d=_(l,"items",25,()=>[]),u=_(l,"title",9,void 0),g=_(l,"width",9,"120px"),m=Q(!1,!0);function j(){S(m,!1)}function p(b){_a(b)==="Escape"&&(b.preventDefault(),S(m,!1))}Qr(()=>{document.addEventListener("click",j),document.addEventListener("keydown",p)}),Oo(()=>{document.removeEventListener("click",j),document.removeEventListener("keydown",p)}),ce(()=>C(d()),()=>{S(c,d().every(b=>b.disabled===!0))}),En(),zt(!0);var x=xS(),v=W(x);fr(v,l,"defaultItem",{},null);var h,f=ae(v,2);sn(W(f),{get data(){return Sa}});var y,w=ae(f,2);pr(W(w),5,d,wr,(b,k)=>{var $=jS(),M=W($),z=W(M),H=ee=>{sn(ee,{get data(){return n(k),Z(()=>n(k).icon)}})};ye(z,ee=>{n(k),Z(()=>n(k).icon)&&ee(H)});var G=ae(z);Ae(()=>{var ee;Cn(M,"title",(n(k),Z(()=>n(k).title))),M.disabled=(n(k),Z(()=>n(k).disabled)),Pt(M,1,Qa((n(k),Z(()=>n(k).className))),"svelte-11rxb2m"),dt(G," ".concat((n(k),(ee=Z(()=>n(k).text))!==null&&ee!==void 0?ee:"")))}),Re("click",M,ee=>n(k).onClick(ee)),X(b,$)}),Ae((b,k)=>{var $;Cn(x,"title",u()),h=Pt(f,1,"jse-open-dropdown svelte-11rxb2m",null,h,b),f.disabled=n(c),y=Pt(w,1,"jse-dropdown-items svelte-11rxb2m",null,y,k),Io(w,"width: ".concat(($=g())!==null&&$!==void 0?$:"",";"))},[()=>({"jse-visible":n(m)}),()=>({"jse-visible":n(m)})],Ce),Re("click",f,function(){var b=n(m);setTimeout(()=>S(m,!b))}),Re("click",x,j),X(i,x),ut()}(e,{get width(){return C(o()),Z(()=>o().width)},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=wS(),d=W(c),u=m=>{sn(m,{get data(){return C(o()),Z(()=>o().main.icon)}})};ye(d,m=>{C(o()),Z(()=>o().main.icon)&&m(u)});var g=ae(d);Ae(m=>{var j;Pt(c,1,m,"svelte-1idfykj"),Cn(c,"title",(C(o()),Z(()=>o().main.title))),c.disabled=(C(o()),Z(()=>o().main.disabled||!1)),dt(g," ".concat((C(o()),(j=Z(()=>o().main.text))!==null&&j!==void 0?j:"")))},[()=>Qa((C(Vo),C(s()),C(o()),Z(()=>Vo("jse-context-menu-button",s(),o().main.className))))],Ce),Re("click",c,m=>{a()(),o().main.onClick(m)}),X(i,c)}}}),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-contextmenu.svelte-12z7bz1 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-label:where(.svelte-12z7bz1) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) {
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
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) div.jse-tip-icon:where(.svelte-12z7bz1) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-12z7bz1 .jse-separator:where(.svelte-12z7bz1) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var kS=de('<div class="jse-separator svelte-12z7bz1"></div>'),SS=de('<div class="jse-label svelte-12z7bz1"> </div>'),_S=de('<div class="jse-column svelte-12z7bz1"></div>'),CS=de('<div class="jse-separator svelte-12z7bz1"></div>'),ES=de('<div class="jse-row svelte-12z7bz1"></div>'),OS=de('<div class="jse-separator svelte-12z7bz1"></div>'),$S=de('<div class="jse-row svelte-12z7bz1"><div class="jse-tip svelte-12z7bz1"><div class="jse-tip-icon svelte-12z7bz1"><!></div> <div class="jse-tip-text"> </div></div></div>'),PS=de('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-12z7bz1"><!> <!></div>');function O0(e,t){ct(t,!1);var r=_(t,"items",9),o=_(t,"onRequestClose",9),s=_(t,"tip",9),a=Q(void 0,!0);Qr(()=>{var m=Array.from(n(a).querySelectorAll("button")).find(j=>!j.disabled);m&&m.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(m){return console.error("Unknown type of context menu item",m),"???"}zt(!0);var c=PS(),d=W(c);pr(d,1,r,wr,(m,j)=>{var p=lr(),x=ht(p),v=f=>{jd(f,{get item(){return n(j)},get onRequestClose(){return o()}})},h=(f,y)=>{var w=k=>{xd(k,{get item(){return n(j)},get onRequestClose(){return o()}})},b=(k,$)=>{var M=H=>{var G=ES();pr(G,5,()=>(n(j),Z(()=>n(j).items)),wr,(ee,te)=>{var je=lr(),B=ht(je),pe=ke=>{jd(ke,{get item(){return n(te)},get onRequestClose(){return o()}})},$e=(ke,me)=>{var Y=se=>{xd(se,{get item(){return n(te)},get onRequestClose(){return o()}})},I=(se,T)=>{var E=ne=>{var Se=_S();pr(Se,5,()=>(n(te),Z(()=>n(te).items)),wr,(K,F)=>{var ie=lr(),P=ht(ie),U=fe=>{jd(fe,{className:"left",get item(){return n(F)},get onRequestClose(){return o()}})},L=(fe,J)=>{var V=Je=>{xd(Je,{className:"left",get item(){return n(F)},get onRequestClose(){return o()}})},Ze=(Je,Oe)=>{var Xe=Le=>{X(Le,kS())},Ne=(Le,lt)=>{var He=O=>{var N=SS(),D=W(N);Ae(()=>dt(D,(n(F),Z(()=>n(F).text)))),X(O,N)},_t=O=>{var N=Tr();Ae(D=>dt(N,D),[()=>(n(F),Z(()=>l(n(F))))],Ce),X(O,N)};ye(Le,O=>{C(dh),n(F),Z(()=>dh(n(F)))?O(He):O(_t,!1)},lt)};ye(Je,Le=>{C(Ra),n(F),Z(()=>Ra(n(F)))?Le(Xe):Le(Ne,!1)},Oe)};ye(fe,Je=>{C(As),n(F),Z(()=>As(n(F)))?Je(V):Je(Ze,!1)},J)};ye(P,fe=>{C(va),n(F),Z(()=>va(n(F)))?fe(U):fe(L,!1)}),X(K,ie)}),X(ne,Se)},R=(ne,Se)=>{var K=ie=>{X(ie,CS())},F=ie=>{var P=Tr();Ae(U=>dt(P,U),[()=>(n(te),Z(()=>l(n(te))))],Ce),X(ie,P)};ye(ne,ie=>{C(Ra),n(te),Z(()=>Ra(n(te)))?ie(K):ie(F,!1)},Se)};ye(se,ne=>{C(vh),n(te),Z(()=>vh(n(te)))?ne(E):ne(R,!1)},T)};ye(ke,se=>{C(As),n(te),Z(()=>As(n(te)))?se(Y):se(I,!1)},me)};ye(B,ke=>{C(va),n(te),Z(()=>va(n(te)))?ke(pe):ke($e,!1)}),X(ee,je)}),X(H,G)},z=(H,G)=>{var ee=je=>{X(je,OS())},te=je=>{var B=Tr();Ae(pe=>dt(B,pe),[()=>(n(j),Z(()=>l(n(j))))],Ce),X(je,B)};ye(H,je=>{C(Ra),n(j),Z(()=>Ra(n(j)))?je(ee):je(te,!1)},G)};ye(k,H=>{C(fh),n(j),Z(()=>fh(n(j)))?H(M):H(z,!1)},$)};ye(f,k=>{C(As),n(j),Z(()=>As(n(j)))?k(w):k(b,!1)},y)};ye(x,f=>{C(va),n(j),Z(()=>va(n(j)))?f(v):f(h,!1)}),X(m,p)});var u=ae(d,2),g=m=>{var j=$S(),p=W(j),x=W(p);sn(W(x),{get data(){return Vy}});var v=W(ae(x,2));Ae(()=>dt(v,s())),X(m,j)};ye(u,m=>{s()&&m(g)}),er(c,m=>S(a,m),()=>n(a)),Re("keydown",c,function(m){var j=_a(m),p=i[j];if(p&&m.target){m.preventDefault();var x=Jw({allElements:Array.from(n(a).querySelectorAll("button:not([disabled])")),currentElement:m.target,direction:p,hasPrio:v=>v.getAttribute("data-type")!=="jse-open-dropdown"});x&&x.focus()}}),X(e,c),ut()}St(`/* over all fonts, sizes, and colors */
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
.jse-value.jse-string.svelte-6ttr41 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-6ttr41, .jse-value.jse-array.svelte-6ttr41 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-6ttr41 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-6ttr41 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-6ttr41 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-6ttr41 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-6ttr41 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-6ttr41 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-6ttr41 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-6ttr41:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);de("<option> </option>");de("<select></select>");var jc,xc;function wc(e,t){return jc||(xc=new WeakMap,jc=new ResizeObserver(r=>{for(var o of r){var s=xc.get(o.target);s&&s(o.target)}})),xc.set(e,t),jc.observe(e),{destroy:()=>{xc.delete(e),jc.unobserve(e)}}}St(`/* over all fonts, sizes, and colors */
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
.jse-tree-mode.svelte-vrx1dr {
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
.jse-tree-mode.svelte-vrx1dr .jse-hidden-input-label:where(.svelte-vrx1dr) .jse-hidden-input:where(.svelte-vrx1dr) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-vrx1dr {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-search-box-container:where(.svelte-vrx1dr) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading-space:where(.svelte-vrx1dr) {
  flex: 1;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading:where(.svelte-vrx1dr) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-search-box-background:where(.svelte-vrx1dr) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var zS=de("<!> <!>",1),RS=de('<div class="jse-search-box-background svelte-vrx1dr"></div>'),NS=de('<div class="jse-search-box-container svelte-vrx1dr"><!></div> <div class="jse-contents svelte-vrx1dr"><!> <!></div> <!> <!> <!> <!>',1),MS=de('<label class="jse-hidden-input-label svelte-vrx1dr"><input type="text" tabindex="-1" class="jse-hidden-input svelte-vrx1dr"/></label> <!>',1),TS=de('<div class="jse-contents svelte-vrx1dr"><div class="jse-loading-space svelte-vrx1dr"></div> <div class="jse-loading svelte-vrx1dr">loading...</div></div>'),AS=de('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function lf(e,t){ct(t,!1);var r=Q(void 0,!0),o=Nr("jsoneditor:TreeMode"),s=typeof window>"u";o("isSSR:",s);var a=ai(),i=ai(),{openAbsolutePopup:l,closeAbsolutePopup:c}=Xa("absolute-popup"),d=Q(void 0,!0),u=Q(void 0,!0),g=Q(void 0,!0),m=!1,j=v0(),p=_(t,"readOnly",9),x=_(t,"externalContent",9),v=_(t,"externalSelection",9),h=_(t,"history",9),f=_(t,"truncateTextSize",9),y=_(t,"mainMenuBar",9),w=_(t,"navigationBar",9),b=_(t,"escapeControlCharacters",9),k=_(t,"escapeUnicodeCharacters",9),$=_(t,"parser",9),M=_(t,"parseMemoizeOne",9),z=_(t,"validator",9),H=_(t,"validationParser",9),G=_(t,"pathParser",9),ee=_(t,"indentation",9),te=_(t,"onError",9),je=_(t,"onChange",9),B=_(t,"onChangeMode",9),pe=_(t,"onSelect",9),$e=_(t,"onUndo",9),ke=_(t,"onRedo",9),me=_(t,"onRenderValue",9),Y=_(t,"onRenderMenu",9),I=_(t,"onRenderContextMenu",9),se=_(t,"onClassName",9),T=_(t,"onFocus",9),E=_(t,"onBlur",9),R=_(t,"onSortModal",9),ne=_(t,"onTransformModal",9),Se=_(t,"onJSONEditorModal",9),K=!1,F=Q(!1,!0),ie=Q(void 0,!0);Gf({onMount:Qr,onDestroy:Oo,getWindow:()=>ul(n(g)),hasFocus:()=>K&&document.hasFocus()||Mf(n(g)),onFocus:()=>{m=!0,T()&&T()()},onBlur:()=>{m=!1,E()&&E()()}});var P=Q(void 0,!0),U=Q(void 0,!0),L=void 0,fe=!1,J=Q(Wd({json:n(P)}),!0),V=Q(Gi(v())?v():void 0,!0);function Ze(A){S(V,A)}Qr(()=>{if(n(V)){var A=nt(n(V));S(J,Ro(n(P),n(J),A,Ec)),setTimeout(()=>At(A))}});var Je,Oe=Q(void 0,!0),Xe=Q(void 0,!0),Ne=Q(void 0,!0),Le=Q(void 0,!0),lt=Q(!1,!0),He=Q(!1,!0);function _t(A){S(Le,(Je=A)?e0(n(P),Je.items):void 0)}function O(A,oe){return N.apply(this,arguments)}function N(){return(N=kt(function*(A,oe){S(J,Ro(n(P),n(J),A,Ec));var _e=Qn(oe);yield Ye(A,{element:_e})})).apply(this,arguments)}function D(){S(lt,!1),S(He,!1),It()}function re(A){o("select validation error",A),S(V,Gt(A.path)),Ye(A.path)}function he(A){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hd;o("expand"),S(J,Ro(n(P),n(J),A,oe))}function Me(A,oe){S(J,gh(n(P),n(J),A,oe)),n(V)&&function(_e,Ke){return ta(nt(_e),Ke)&&(nt(_e).length>Ke.length||$r(_e))}(n(V),A)&&S(V,void 0)}var Ue=Q(!1,!0),be=Q([],!0),ve=Q(void 0,!0),vt=Di(p0);function tt(A,oe,_e,Ke){Xs(()=>{var De;try{De=vt(A,oe,_e,Ke)}catch(Ie){De=[{path:[],message:"Failed to validate: "+Ie.message,severity:qo.warning}]}Bt(De,n(be))||(o("validationErrors changed:",De),S(be,De),S(ve,function(Ie,xt){var wt;return xt.forEach(Kt=>{wt=Vh(Ie,wt,Kt.path,(Pn,on)=>Te(Te({},on),{},{validationError:Kt}))}),xt.forEach(Kt=>{for(var Pn=Kt.path;Pn.length>0;)Pn=an(Pn),wt=Vh(Ie,wt,Pn,(on,Bn)=>Bn.validationError?Bn:Te(Te({},Bn),{},{validationError:{isChildError:!0,path:Pn,message:"Contains invalid data",severity:qo.warning}}))}),wt}(A,n(be))))},De=>o("validationErrors updated in ".concat(De," ms")))}function Ee(){return o("validate"),L?{parseError:L,isRepairable:!1}:(tt(n(P),z(),$(),H()),pn(n(be))?void 0:{validationErrors:n(be)})}function pt(){return n(P)}function ln(){return n(J)}function On(){return n(V)}function en(A){o("applyExternalContent",{updatedContent:A}),Hi(A)?function(oe){if(oe!==void 0){var _e=!Bt(n(P),oe);if(o("update external json",{isChanged:_e,currentlyText:n(P)===void 0}),!!_e){var Ke={documentState:n(J),selection:n(V),json:n(P),text:n(U),textIsRepaired:n(Ue)};S(P,oe),S(J,mo(oe,n(J))),Wt(n(P)),S(U,void 0),S(Ue,!1),L=void 0,wn(n(P)),Jt(Ke)}}}(A.json):Wi(A)&&function(oe){if(!(oe===void 0||Hi(x()))){var _e=oe!==n(U);if(o("update external text",{isChanged:_e}),!!_e){var Ke={documentState:n(J),selection:n(V),json:n(P),text:n(U),textIsRepaired:n(Ue)};try{S(P,M()(oe)),S(J,mo(n(P),n(J))),Wt(n(P)),S(U,oe),S(Ue,!1),L=void 0}catch(De){try{S(P,M()(Zo(oe))),S(J,mo(n(P),n(J))),Wt(n(P)),S(U,oe),S(Ue,!0),L=void 0,wn(n(P))}catch{S(P,void 0),S(J,void 0),S(U,x().text),S(Ue,!1),L=n(U)!==void 0&&n(U)!==""?li(n(U),De.message||String(De)):void 0}}wn(n(P)),Jt(Ke)}}}(A.text)}function Wt(A){fe||(fe=!0,S(J,Ss(A,n(J),[])))}function wn(A){n(V)&&(Co(A,gs(n(V)))&&Co(A,nt(n(V)))||(o("clearing selection: path does not exist anymore",n(V)),S(V,Is(A,n(J)))))}function Jt(A){if(A.json!==void 0||A.text!==void 0){var oe=n(P)!==void 0&&A.json!==void 0;h().add({type:"tree",undo:{patch:oe?[{op:"replace",path:"",value:A.json}]:void 0,json:A.json,text:A.text,documentState:A.documentState,textIsRepaired:A.textIsRepaired,selection:Yo(A.selection),sortedColumn:void 0},redo:{patch:oe?[{op:"replace",path:"",value:n(P)}]:void 0,json:n(P),text:n(U),documentState:n(J),textIsRepaired:n(Ue),selection:Yo(n(V)),sortedColumn:void 0}})}}function Nt(A,oe){var _e;if(o("patch",A,oe),n(P)===void 0)throw new Error("Cannot apply patch: no JSON");var Ke=n(P),De={json:void 0,text:n(U),documentState:n(J),selection:Yo(n(V)),textIsRepaired:n(Ue),sortedColumn:void 0},Ie=Zg(n(P),A),xt=Ug(n(P),n(J),A),wt=(_e=di(n(P),A))!==null&&_e!==void 0?_e:n(V),Kt=typeof oe=="function"?oe(xt.json,xt.documentState,wt):void 0;return S(P,Kt?.json!==void 0?Kt.json:xt.json),S(J,Kt?.state!==void 0?Kt.state:xt.documentState),S(V,Kt?.selection!==void 0?Kt.selection:wt),S(U,void 0),S(Ue,!1),S(Xe,void 0),S(Ne,void 0),L=void 0,wn(n(P)),h().add({type:"tree",undo:Te({patch:Ie},De),redo:{patch:A,json:void 0,text:n(U),documentState:n(J),selection:Yo(n(V)),sortedColumn:void 0,textIsRepaired:n(Ue)}}),{json:n(P),previousJson:Ke,undo:Ie,redo:A}}function Ct(){!p()&&n(V)&&S(V,Hf(nt(n(V))))}function Yt(){if(!p()&&n(V)){var A=nt(n(V)),oe=Qe(n(P),A);ir(oe)?function(_e,Ke){o("openJSONEditorModal",{path:_e,value:Ke}),K=!0,Se()({content:{json:Ke},path:_e,onPatch:n(xr).onPatch,onClose:()=>{K=!1,setTimeout(It)}})}(A,oe):S(V,Jc(A))}}function cn(){if(!p()&&mn(n(V))){var A=nt(n(V)),oe=ft(A),_e=Qe(n(P),A),Ke=!Xo(n(P),n(J),A),De=Ke?String(_e):bi(String(_e),$());o("handleToggleEnforceString",{enforceString:Ke,value:_e,updatedValue:De}),Mt([{op:"replace",path:oe,value:De}],(Ie,xt)=>({state:wu(n(P),xt,A,{type:"value",enforceString:Ke})}))}}function yt(){return n(Ue)&&n(P)!==void 0&&le(n(P)),n(P)!==void 0?{json:n(P)}:{text:n(U)||""}}function Ge(){return Ht.apply(this,arguments)}function Ht(){return Ht=kt(function*(){var A=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield w0({json:n(P),selection:n(V),indentation:A?ee():void 0,readOnly:p(),parser:$(),onPatch:Mt})}),Ht.apply(this,arguments)}function Ft(){return Nn.apply(this,arguments)}function Nn(){return Nn=kt(function*(){var A=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(P)!==void 0&&(yield k0({json:n(P),selection:n(V),indentation:A?ee():void 0,parser:$()}))}),Nn.apply(this,arguments)}function Mn(A){var oe;A.preventDefault(),Tn((oe=A.clipboardData)===null||oe===void 0?void 0:oe.getData("text/plain"))}function hn(){return jr.apply(this,arguments)}function jr(){return(jr=kt(function*(){try{Tn(yield navigator.clipboard.readText())}catch(A){console.error(A),S(F,!0)}})).apply(this,arguments)}function Tn(A){A!==void 0&&S0({clipboardText:A,json:n(P),selection:n(V),readOnly:p(),parser:$(),onPatch:Mt,onChangeText:xe,onPasteMultilineText:An,openRepairModal:rr})}function rr(A,oe){S(ie,{text:A,onParse:_e=>cl(_e,Ke=>ll(Ke,$())),onRepair:Eg,onApply:oe,onClose:It})}function kr(){_0({json:n(P),text:n(U),selection:n(V),keepSelection:!1,readOnly:p(),onChange:je(),onPatch:Mt})}function Sr(){!p()&&n(P)!==void 0&&n(V)&&Gs&&!pn(nt(n(V)))&&(o("duplicate",{selection:n(V)}),Mt(Jg(n(P),Ja(n(P),n(V)))))}function hr(){p()||!n(V)||!Vn(n(V))&&!mn(n(V))||pn(nt(n(V)))||(o("extract",{selection:n(V)}),Mt(Gg(n(P),n(V)),(A,oe)=>{if(ir(A))return{state:fd(A,oe,[])}}))}function Ln(A){ou({insertType:A,selectInside:!0,initialValue:void 0,json:n(P),selection:n(V),readOnly:p(),parser:$(),onPatch:Mt,onReplaceJson:le})}function ur(A){Rr(n(V))&&S(V,Gt(n(V).path)),n(V)||S(V,Is(n(P),n(J))),Ln(A)}function Pe(A){if(!p()&&n(V))if(hc(n(V)))try{var oe=gs(n(V)),_e=Qe(n(P),oe),Ke=function(Ie,xt,wt){if(xt==="array"){if(Array.isArray(Ie))return Ie;if(xn(Ie))return rh(Ie);if(typeof Ie=="string")try{var Kt=wt.parse(Ie);if(Array.isArray(Kt))return Kt;if(xn(Kt))return rh(Kt)}catch{return[Ie]}return[Ie]}if(xt==="object"){if(Array.isArray(Ie))return nh(Ie);if(xn(Ie))return Ie;if(typeof Ie=="string")try{var Pn=wt.parse(Ie);if(xn(Pn))return Pn;if(Array.isArray(Pn))return nh(Pn)}catch{return{value:Ie}}return{value:Ie}}if(xt==="value")return ir(Ie)?wt.stringify(Ie):Ie;throw new Error("Cannot convert ".concat(zf(Ie,wt)," to ").concat(xt))}(_e,A,$());if(Ke===_e)return;var De=[{op:"replace",path:ft(oe),value:Ke}];o("handleConvert",{selection:n(V),path:oe,type:A,operations:De}),Mt(De,(Ie,xt)=>({state:n(V)?Ss(Ie,xt,nt(n(V))):n(J)}))}catch(Ie){te()(Ie)}else te()(new Error("Cannot convert current selection to ".concat(A)))}function Xt(){if(n(V)){var A=xh(n(P),n(J),n(V),!1),oe=an(nt(n(V)));A&&!pn(nt(A))&&Bt(oe,an(nt(A)))?S(V,wa(nt(A))):S(V,Ea(oe)),o("insert before",{selection:n(V),selectionBefore:A,parentPath:oe}),Yn(),Rt()}}function kn(){if(n(V)){var A=Fa(n(P),n(V));o("insert after",A),S(V,wa(A)),Yn(),Rt()}}function Un(A){return ge.apply(this,arguments)}function ge(){return(ge=kt(function*(A){yield C0({char:A,selectInside:!0,json:n(P),selection:n(V),readOnly:p(),parser:$(),onPatch:Mt,onReplaceJson:le,onSelect:Ze})})).apply(this,arguments)}function qe(){if(!p()&&h().canUndo){var A=h().undo();if(Kc(A)){var oe={json:n(P),text:n(U)};S(P,A.undo.patch?Mo(n(P),A.undo.patch):A.undo.json),S(J,A.undo.documentState),S(V,A.undo.selection),S(U,A.undo.text),S(Ue,A.undo.textIsRepaired),L=void 0,o("undo",{item:A,json:n(P),documentState:n(J),selection:n(V)}),un(oe,A.undo.patch&&A.redo.patch?{json:n(P),previousJson:oe.json,redo:A.undo.patch,undo:A.redo.patch}:void 0),It(),n(V)&&Ye(nt(n(V)),{scrollToWhenVisible:!1})}else $e()(A)}}function Ve(){if(!p()&&h().canRedo){var A=h().redo();if(Kc(A)){var oe={json:n(P),text:n(U)};S(P,A.redo.patch?Mo(n(P),A.redo.patch):A.redo.json),S(J,A.redo.documentState),S(V,A.redo.selection),S(U,A.redo.text),S(Ue,A.redo.textIsRepaired),L=void 0,o("redo",{item:A,json:n(P),documentState:n(J),selection:n(V)}),un(oe,A.undo.patch&&A.redo.patch?{json:n(P),previousJson:oe.json,redo:A.redo.patch,undo:A.undo.patch}:void 0),It(),n(V)&&Ye(nt(n(V)),{scrollToWhenVisible:!1})}else ke()(A)}}function Et(A){var oe;p()||n(P)===void 0||(K=!0,R()({id:a,json:n(P),rootPath:A,onSort:(oe=kt(function*(_e){var{operations:Ke}=_e;o("onSort",A,Ke),Mt(Ke,(De,Ie)=>({state:fd(De,Ie,A),selection:Gt(A)}))}),function(_e){return oe.apply(this,arguments)}),onClose:()=>{K=!1,setTimeout(It)}}))}function Lt(){n(V)&&Et(kh(n(P),n(V)))}function Ut(){Et([])}function tn(A){if(n(P)!==void 0){var{id:oe,onTransform:_e,onClose:Ke}=A,De=A.rootPath||[];K=!0,ne()({id:oe||i,json:n(P),rootPath:De,onTransform:Ie=>{_e?_e({operations:Ie,json:n(P),transformedJson:Mo(n(P),Ie)}):(o("onTransform",De,Ie),Mt(Ie,(xt,wt)=>({state:fd(xt,wt,De),selection:Gt(De)})))},onClose:()=>{K=!1,setTimeout(It),Ke&&Ke()}})}}function it(){n(V)&&tn({rootPath:kh(n(P),n(V))})}function Dt(){tn({rootPath:[]})}function Ye(A){return bn.apply(this,arguments)}function bn(){return bn=kt(function*(A){var{scrollToWhenVisible:oe=!0,element:_e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};S(J,Ro(n(P),n(J),A,Ec));var Ke=_e??$n(A);if(o("scrollTo",{path:A,elem:Ke,refContents:n(d)}),!Ke||!n(d))return Promise.resolve();var De=n(d).getBoundingClientRect(),Ie=Ke.getBoundingClientRect();if(!oe&&Ie.bottom>De.top&&Ie.top<De.bottom)return Promise.resolve();var xt=-De.height/4;return new Promise(wt=>{j(Ke,{container:n(d),offset:xt,duration:300,callback:()=>wt()})})}),bn.apply(this,arguments)}function $n(A){var oe,_e;return Yn(),(oe=(_e=n(d))===null||_e===void 0?void 0:_e.querySelector('div[data-path="'.concat(Cc(A),'"]')))!==null&&oe!==void 0?oe:void 0}function Qn(A){var oe,_e;return Yn(),(oe=(_e=n(d))===null||_e===void 0?void 0:_e.querySelector('span[data-search-result-index="'.concat(A,'"]')))!==null&&oe!==void 0?oe:void 0}function At(A){var oe=$n(A);if(oe&&n(d)){var _e=n(d).getBoundingClientRect(),Ke=oe.getBoundingClientRect(),De=ir(Qe(n(P),A))?20:Ke.height;Ke.top<_e.top+20?j(oe,{container:n(d),offset:-20,duration:0}):Ke.top+De>_e.bottom-20&&j(oe,{container:n(d),offset:-(_e.height-De-20),duration:0})}}function un(A,oe){if(A.json!==void 0||A?.text!==void 0){if(n(U)!==void 0){var _e,Ke={text:n(U),json:void 0};(_e=je())===null||_e===void 0||_e(Ke,A,{contentErrors:Ee(),patchResult:oe})}else if(n(P)!==void 0){var De,Ie={text:void 0,json:n(P)};(De=je())===null||De===void 0||De(Ie,A,{contentErrors:Ee(),patchResult:oe})}}}function Mt(A,oe){o("handlePatch",A,oe);var _e={json:n(P),text:n(U)},Ke=Nt(A,oe);return un(_e,Ke),Ke}function le(A,oe){var _e={json:n(P),text:n(U)},Ke={documentState:n(J),selection:n(V),json:n(P),text:n(U),textIsRepaired:n(Ue)},De=Ro(n(P),mo(A,n(J)),[],Ii),Ie=typeof oe=="function"?oe(A,De,n(V)):void 0;S(P,Ie?.json!==void 0?Ie.json:A),S(J,Ie?.state!==void 0?Ie.state:De),S(V,Ie?.selection!==void 0?Ie.selection:n(V)),S(U,void 0),S(Ue,!1),L=void 0,wn(n(P)),Jt(Ke),un(_e,void 0)}function xe(A,oe){o("handleChangeText");var _e={json:n(P),text:n(U)},Ke={documentState:n(J),selection:n(V),json:n(P),text:n(U),textIsRepaired:n(Ue)};try{S(P,M()(A)),S(J,Ro(n(P),mo(n(P),n(J)),[],Ii)),S(U,void 0),S(Ue,!1),L=void 0}catch(Ie){try{S(P,M()(Zo(A))),S(J,Ro(n(P),mo(n(P),n(J)),[],Ii)),S(U,A),S(Ue,!0),L=void 0}catch{S(P,void 0),S(J,Wd({json:n(P),expand:Ii})),S(U,A),S(Ue,!1),L=n(U)!==""?li(n(U),Ie.message||String(Ie)):void 0}}if(typeof oe=="function"){var De=oe(n(P),n(J),n(V));S(P,De?.json!==void 0?De.json:n(P)),S(J,De?.state!==void 0?De.state:n(J)),S(V,De?.selection!==void 0?De.selection:n(V))}wn(n(P)),Jt(Ke),un(_e,void 0)}function Fe(A,oe){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:A,expanded:oe,recursive:_e}),oe?he(A,_e?Wf:Hd):Me(A,_e),It()}function Ot(){Fe([],!0,!0)}function nn(){Fe([],!1,!0)}function Tt(A){o("openFind",{findAndReplace:A}),S(lt,!1),S(He,!1),Yn(),S(lt,!0),S(He,A)}function Sn(A,oe){o("handleExpandSection",A,oe),S(J,function(_e,Ke,De,Ie){return ui(_e,Ke,De,(xt,wt)=>{if(!zr(wt))return wt;var Kt=qg(wt.visibleSections.concat(Ie));return Te(Te({},wt),{},{visibleSections:Kt})})}(n(P),n(J),A,oe))}function or(A){o("pasted json as text",A),S(Xe,A)}function An(A){o("pasted multiline text",{pastedText:A}),S(Ne,A)}function Zt(A){var oe,{anchor:_e,left:Ke,top:De,width:Ie,height:xt,offsetTop:wt,offsetLeft:Kt,showTip:Pn}=A,on=function(In){var{json:Xn,documentState:jn,selection:mt,readOnly:fn,onEditKey:gt,onEditValue:st,onToggleEnforceString:qt,onCut:nr,onCopy:Mr,onPaste:Wn,onRemove:sr,onDuplicate:Ar,onExtract:sa,onInsertBefore:lo,onInsert:$o,onConvert:Wo,onInsertAfter:Po,onSort:Ir,onTransform:qr}=In,co=Xn!==void 0,ia=!!mt,uo=!!mt&&pn(nt(mt)),dr=mt?Qe(Xn,nt(mt)):void 0,Jn=Array.isArray(dr)?"Edit array":xn(dr)?"Edit object":"Edit value",br=co&&(Vn(mt)||Rr(mt)||mn(mt)),Ho=mt&&!uo?Qe(Xn,an(nt(mt))):void 0,Os=!fn&&co&&Qc(mt)&&!uo&&!Array.isArray(Ho),$s=!fn&&co&&mt!==void 0&&Qc(mt),ji=$s&&!ir(dr),Ps=!fn&&br,xi=br,$u=!fn&&ia,Pu=!fn&&co&&br&&!uo,zu=!fn&&co&&mt!==void 0&&(Vn(mt)||mn(mt))&&!uo,Ko=br,ns=Ko?"Convert to:":"Insert:",Cr=!fn&&($r(mt)&&Array.isArray(dr)||oo(mt)&&Array.isArray(Ho)),eo=!fn&&(Ko?hc(mt)&&!xn(dr):ia),wi=!fn&&(Ko?hc(mt)&&!Array.isArray(dr):ia),ki=!fn&&(Ko?hc(mt)&&ir(dr):ia),rs=mt!==void 0&&Xo(Xn,jn,nt(mt));function Wr(Si){br?Si!=="structure"&&Wo(Si):$o(Si)}return[{type:"row",items:[{type:"button",onClick:()=>gt(),icon:ei,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!Os},{type:"dropdown-button",main:{type:"button",onClick:()=>st(),icon:ei,text:Jn,title:"Edit the value (Double-click on the value)",disabled:!$s},width:"11em",items:[{type:"button",icon:ei,text:Jn,title:"Edit the value (Double-click on the value)",onClick:()=>st(),disabled:!$s},{type:"button",icon:rs?_m:Em,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>qt(),disabled:!ji}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>nr(!0),icon:Zs,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Ps},width:"10em",items:[{type:"button",icon:Zs,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>nr(!0),disabled:!Ps},{type:"button",icon:Zs,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>nr(!1),disabled:!Ps}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Mr(!0),icon:Ma,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!xi},width:"12em",items:[{type:"button",icon:Ma,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Mr(!0),disabled:!xi},{type:"button",icon:Ma,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Mr(!1),disabled:!xi}]},{type:"button",onClick:()=>Wn(),icon:Sm,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!$u}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Ar(),icon:Pm,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!Pu},{type:"button",onClick:()=>sa(),icon:lj,text:"Extract",title:"Extract selected contents",disabled:!zu},{type:"button",onClick:()=>Ir(),icon:Tc,text:"Sort",title:"Sort array or object contents",disabled:fn||!br},{type:"button",onClick:()=>qr(),icon:Nc,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:fn||!br},{type:"button",onClick:()=>sr(),icon:Ed,text:"Remove",title:"Remove selected contents (Delete)",disabled:fn||!br}]},{type:"column",items:[{type:"label",text:ns},{type:"button",onClick:()=>Wr("structure"),icon:Ko?kl:Ks,text:"Structure",title:ns+" structure like the first item in the array",disabled:!Cr},{type:"button",onClick:()=>Wr("object"),icon:Ko?kl:Ks,text:"Object",title:ns+" object",disabled:!eo},{type:"button",onClick:()=>Wr("array"),icon:Ko?kl:Ks,text:"Array",title:ns+" array",disabled:!wi},{type:"button",onClick:()=>Wr("value"),icon:Ko?kl:Ks,text:"Value",title:ns+" value",disabled:!ki}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>lo(),icon:rj,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:fn||!br||uo},{type:"button",onClick:()=>Po(),icon:Gy,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:fn||!br||uo}]}]}({json:n(P),documentState:n(J),selection:n(V),readOnly:p(),onEditKey:Ct,onEditValue:Yt,onToggleEnforceString:cn,onCut:Ge,onCopy:Ft,onPaste:hn,onRemove:kr,onDuplicate:Sr,onExtract:hr,onInsertBefore:Xt,onInsert:ur,onInsertAfter:kn,onConvert:Pe,onSort:Lt,onTransform:it}),Bn=(oe=I()(on))!==null&&oe!==void 0?oe:on;if(Bn!==!1){var $t={left:Ke,top:De,offsetTop:wt,offsetLeft:Kt,width:Ie,height:xt,anchor:_e,closeOnOuterClick:!0,onClose:()=>{K=!1,It()}};K=!0;var ar=l(O0,{tip:Pn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Bn,onRequestClose:()=>c(ar)},$t)}}function Rt(A){if(!Pr(n(V)))if(A&&(A.stopPropagation(),A.preventDefault()),A&&A.type==="contextmenu"&&A.target!==n(u))Zt({left:A.clientX,top:A.clientY,width:ma,height:ha,showTip:!1});else{var oe,_e=(oe=n(d))===null||oe===void 0?void 0:oe.querySelector(".jse-context-menu-pointer.jse-selected");if(_e)Zt({anchor:_e,offsetTop:2,width:ma,height:ha,showTip:!1});else{var Ke,De=(Ke=n(d))===null||Ke===void 0?void 0:Ke.getBoundingClientRect();De&&Zt({top:De.top+2,left:De.left+2,width:ma,height:ha,showTip:!1})}}}function _n(A){Zt({anchor:Ag(A.target,"BUTTON"),offsetTop:0,width:ma,height:ha,showTip:!0})}function Fr(){return jt.apply(this,arguments)}function jt(){return(jt=kt(function*(){if(o("apply pasted json",n(Xe)),n(Xe)){var{onPasteAsJson:A}=n(Xe);S(Xe,void 0),A(),setTimeout(It)}})).apply(this,arguments)}function tr(){return yn.apply(this,arguments)}function yn(){return(yn=kt(function*(){o("apply pasted multiline text",n(Ne)),n(Ne)&&(Tn(JSON.stringify(n(Ne))),setTimeout(It))})).apply(this,arguments)}function Fn(){o("clear pasted json"),S(Xe,void 0),It()}function rt(){o("clear pasted multiline text"),S(Ne,void 0),It()}function zn(){B()(Or.text)}function mr(A){S(V,A),It(),Ye(nt(A))}function It(){o("focus"),n(u)&&(n(u).focus(),n(u).select())}function io(A){return function(oe,_e,Ke){var De=an(Ke),Ie=[Qt(Ke)],xt=Qe(oe,De),wt=xt?dd(xt,_e,Ie):void 0;return wt?Gt(De.concat(wt)):wa(Ke)}(n(P),n(J),A)}function gr(A){n(r)&&n(r).onDrag(A)}function _r(){n(r)&&n(r).onDragEnd()}var xr=Q(void 0,!0);ce(()=>n(V),()=>{var A;A=n(V),Bt(A,v())||(o("onSelect",A),pe()(A))}),ce(()=>(C(b()),C(k())),()=>{S(Oe,Rf({escapeControlCharacters:b(),escapeUnicodeCharacters:k()}))}),ce(()=>n(lt),()=>{(function(A){n(d)&&A&&n(d).scrollTop===0&&(go(d,n(d).style.overflowAnchor="none"),go(d,n(d).scrollTop+=Ai),setTimeout(()=>{n(d)&&go(d,n(d).style.overflowAnchor="")}))})(n(lt))}),ce(()=>C(x()),()=>{en(x())}),ce(()=>C(v()),()=>{(function(A){Bt(n(V),A)||(o("applyExternalSelection",{selection:n(V),externalSelection:A}),Gi(A)&&S(V,A))})(v())}),ce(()=>(n(P),C(z()),C($()),C(H())),()=>{tt(n(P),z(),$(),H())}),ce(()=>(n(d),Fh),()=>{S(r,n(d)?Fh(n(d)):void 0)}),ce(()=>(C(p()),C(f()),C($()),n(Oe),C(me()),C(se())),()=>{S(xr,{mode:Or.tree,readOnly:p(),truncateTextSize:f(),parser:$(),normalization:n(Oe),getJson:pt,getDocumentState:ln,getSelection:On,findElement:$n,findNextInside:io,focus:It,onPatch:Mt,onInsert:Ln,onExpand:Fe,onSelect:Ze,onFind:Tt,onExpandSection:Sn,onPasteJson:or,onRenderValue:me(),onContextMenu:Zt,onClassName:se()||(()=>{}),onDrag:gr,onDragEnd:_r})}),ce(()=>n(xr),()=>{o("context changed",n(xr))}),En(),zt(!0);var Vr=AS();Re("mousedown",ja,function(A){!yi(A.target,oe=>oe===n(g))&&Pr(n(V))&&(o("click outside the editor, exit edit mode"),S(V,Yo(n(V))),m&&n(u)&&(n(u).focus(),n(u).blur()),o("blur (outside editor)"),n(u)&&n(u).blur())});var q,ue=ht(Vr),ze=W(ue),Be=A=>{(function(oe,_e){ct(_e,!1);var Ke=Q(void 0,!0),De=Q(void 0,!0),Ie=Q(void 0,!0),xt=_(_e,"json",9),wt=_(_e,"selection",9),Kt=_(_e,"readOnly",9),Pn=_(_e,"showSearch",13,!1),on=_(_e,"history",9),Bn=_(_e,"onExpandAll",9),$t=_(_e,"onCollapseAll",9),ar=_(_e,"onUndo",9),In=_(_e,"onRedo",9),Xn=_(_e,"onSort",9),jn=_(_e,"onTransform",9),mt=_(_e,"onContextMenu",9),fn=_(_e,"onCopy",9),gt=_(_e,"onRenderMenu",9);function st(){Pn(!Pn())}var qt=Q(void 0,!0),nr=Q(void 0,!0),Mr=Q(void 0,!0),Wn=Q(void 0,!0);ce(()=>C(xt()),()=>{S(Ke,xt()!==void 0)}),ce(()=>(n(Ke),C(wt()),mn),()=>{S(De,n(Ke)&&(Vn(wt())||Rr(wt())||mn(wt())))}),ce(()=>(C(Bn()),C(xt())),()=>{S(qt,{type:"button",icon:V4,title:"Expand all",className:"jse-expand-all",onClick:Bn(),disabled:!ir(xt())})}),ce(()=>(C($t()),C(xt())),()=>{S(nr,{type:"button",icon:B4,title:"Collapse all",className:"jse-collapse-all",onClick:$t(),disabled:!ir(xt())})}),ce(()=>C(xt()),()=>{S(Mr,{type:"button",icon:lu,title:"Search (Ctrl+F)",className:"jse-search",onClick:st,disabled:xt()===void 0})}),ce(()=>(C(Kt()),n(qt),n(nr),C(Xn()),C(xt()),C(jn()),n(Mr),C(mt()),C(ar()),C(on()),C(In()),C(fn()),n(De)),()=>{S(Wn,Kt()?[n(qt),n(nr),{type:"separator"},{type:"button",icon:Ma,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:fn(),disabled:!n(De)},{type:"separator"},n(Mr),{type:"space"}]:[n(qt),n(nr),{type:"separator"},{type:"button",icon:Tc,title:"Sort",className:"jse-sort",onClick:Xn(),disabled:Kt()||xt()===void 0},{type:"button",icon:Nc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:jn(),disabled:Kt()||xt()===void 0},n(Mr),{type:"button",icon:Om,title:If,className:"jse-contextmenu",onClick:mt()},{type:"separator"},{type:"button",icon:gf,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:ar(),disabled:!on().canUndo},{type:"button",icon:mf,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:In(),disabled:!on().canRedo},{type:"space"}])}),ce(()=>(C(gt()),n(Wn)),()=>{S(Ie,gt()(n(Wn))||n(Wn))}),En(),zt(!0),Ou(oe,{get items(){return n(Ie)}}),ut()})(A,{get json(){return n(P)},get selection(){return n(V)},get readOnly(){return p()},get history(){return h()},onExpandAll:Ot,onCollapseAll:nn,onUndo:qe,onRedo:Ve,onSort:Ut,onTransform:Dt,onContextMenu:_n,onCopy:Ft,get onRenderMenu(){return Y()},get showSearch(){return n(lt)},set showSearch(oe){S(lt,oe)},$$legacy:!0})};ye(ze,A=>{y()&&A(Be)});var We=ae(ze,2),et=A=>{cS(A,{get json(){return n(P)},get selection(){return n(V)},onSelect:mr,get onError(){return te()},get pathParser(){return G()}})};ye(We,A=>{w()&&A(et)});var ot=ae(We,2),at=A=>{var oe=MS(),_e=ht(oe),Ke=W(_e);Ke.readOnly=!0,er(Ke,wt=>S(u,wt),()=>n(u));var De=ae(_e,2),Ie=wt=>{var Kt=lr(),Pn=ht(Kt),on=$t=>{(function(ar,In){ct(In,!0);var Xn=G4();Xn.__click=[Q4,In];var jn=ae(W(Xn),2),mt=ae(W(jn),2),fn=gt=>{var st=J4(),qt=ae(ht(st),2);Cn(qt,"title","Create an empty JSON object (press '{')"),qt.__click=[H4,In];var nr=ae(qt,2);Cn(nr,"title","Create an empty JSON array (press '[')"),nr.__click=[K4,In],X(gt,st)};ye(mt,gt=>{In.readOnly||gt(fn)}),X(ar,Xn),ut()})($t,{get readOnly(){return p()},onCreateObject:()=>{It(),Un("{")},onCreateArray:()=>{It(),Un("[")},onClick:()=>{It()}})},Bn=$t=>{var ar=zS(),In=ht(ar),Xn=Ce(()=>p()?[]:[{icon:Mc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:zn}]);jo(In,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Xn)}}),E0(ae(In,2),{get text(){return n(U)},get json(){return n(P)},get indentation(){return ee()},get parser(){return $()}}),X($t,ar)};ye(Pn,$t=>{n(U)===""||n(U)===void 0?$t(on):$t(Bn,!1)}),X(wt,Kt)},xt=wt=>{var Kt=NS(),Pn=ht(Kt);y0(W(Pn),{get json(){return n(P)},get documentState(){return n(J)},get parser(){return $()},get showSearch(){return n(lt)},get showReplace(){return n(He)},get readOnly(){return p()},columns:void 0,onSearch:_t,onFocus:O,onPatch:Mt,onClose:D});var on=ae(Pn,2);Cn(on,"data-jsoneditor-scrollable-contents",!0);var Bn=W(on),$t=gt=>{X(gt,RS())};ye(Bn,gt=>{n(lt)&&gt($t)}),tf(ae(Bn,2),{get value(){return n(P)},pointer:"",get state(){return n(J)},get validationErrors(){return n(ve)},get searchResults(){return n(Le)},get selection(){return n(V)},get context(){return n(xr)},get onDragSelectionStart(){return Er}}),er(on,gt=>S(d,gt),()=>n(d));var ar=ae(on,2),In=gt=>{var st=Ce(()=>(n(Xe),Z(()=>"You pasted a JSON ".concat(Array.isArray(n(Xe).contents)?"array":"object"," as text")))),qt=Ce(()=>[{icon:Va,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Fr},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:Fn}]);jo(gt,{type:"info",get message(){return n(st)},get actions(){return n(qt)}})};ye(ar,gt=>{n(Xe)&&gt(In)});var Xn=ae(ar,2),jn=gt=>{var st=Ce(()=>[{icon:Va,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:tr},{text:"Leave as is",title:"Keep the pasted array",onClick:rt}]);jo(gt,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(st)}})};ye(Xn,gt=>{n(Ne)&&gt(jn)});var mt=ae(Xn,2),fn=gt=>{var st=Ce(()=>p()?[]:[{icon:bf,text:"Ok",title:"Accept the repaired document",onClick:yt},{icon:Mc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:zn}]);jo(gt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(st)},onClose:It})};ye(mt,gt=>{n(Ue)&&gt(fn)}),Yf(ae(mt,2),{get validationErrors(){return n(be)},selectError:re}),X(wt,Kt)};ye(De,wt=>{n(P)===void 0?wt(Ie):wt(xt,!1)}),Re("paste",Ke,Mn),X(A,oe)},Vt=A=>{X(A,TS())};ye(ot,A=>{s?A(Vt,!1):A(at)}),er(ue,A=>S(g,A),()=>n(g));var dn=ae(ue,2),rn=A=>{h0(A,{onClose:()=>S(F,!1)})};ye(dn,A=>{n(F)&&A(rn)});var Rn=ae(dn,2),Br=A=>{m0(A,La(()=>n(ie),{onClose:()=>{var oe;(oe=n(ie))===null||oe===void 0||oe.onClose(),S(ie,void 0)}}))};return ye(Rn,A=>{n(ie)&&A(Br)}),Ae(A=>q=Pt(ue,1,"jse-tree-mode svelte-vrx1dr",null,q,A),[()=>({"no-main-menu":!y()})],Ce),Re("keydown",ue,function(A){var oe=_a(A),_e=A.shiftKey;if(o("keydown",{combo:oe,key:A.key}),oe==="Ctrl+X"&&(A.preventDefault(),Ge(!0)),oe==="Ctrl+Shift+X"&&(A.preventDefault(),Ge(!1)),oe==="Ctrl+C"&&(A.preventDefault(),Ft(!0)),oe==="Ctrl+Shift+C"&&(A.preventDefault(),Ft(!1)),oe==="Ctrl+D"&&(A.preventDefault(),Sr()),oe!=="Delete"&&oe!=="Backspace"||(A.preventDefault(),kr()),oe==="Insert"&&(A.preventDefault(),Ln("structure")),oe==="Ctrl+A"&&(A.preventDefault(),S(V,Gt([]))),oe==="Ctrl+Q"&&Rt(A),oe==="ArrowUp"||oe==="Shift+ArrowUp"){A.preventDefault();var Ke=n(V)?xh(n(P),n(J),n(V),_e)||n(V):Is(n(P),n(J));S(V,Ke),At(nt(Ke))}if(oe==="ArrowDown"||oe==="Shift+ArrowDown"){A.preventDefault();var De=n(V)?function(on,Bn,$t){var ar=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if($t){var In=ar?nt($t):Fa(on,$t),Xn=ir(Qe(on,In))?gh(on,Bn,In,!0):Bn,jn=dd(on,Bn,In),mt=dd(on,Xn,In);if(ar)return $r($t)?jn!==void 0?Jr(jn,jn):void 0:oo($t)?mt!==void 0?Jr(mt,mt):void 0:mt!==void 0?Jr(gs($t),mt):void 0;if(oo($t))return mt!==void 0?Gt(mt):void 0;if($r($t)||mn($t))return jn!==void 0?Gt(jn):void 0;if(Rr($t)){if(jn===void 0||jn.length===0)return;var fn=an(jn),gt=Qe(on,fn);return Array.isArray(gt)?Gt(jn):Ca(jn)}return Vn($t)?mt!==void 0?Gt(mt):jn!==void 0?Gt(jn):void 0:void 0}}(n(P),n(J),n(V),_e)||n(V):Is(n(P),n(J));S(V,De),At(nt(De))}if(oe==="ArrowLeft"||oe==="Shift+ArrowLeft"){A.preventDefault();var Ie=n(V)?function(on,Bn,$t){var ar=arguments.length>3&&arguments[3]!==void 0&&arguments[3],In=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if($t){var{caret:Xn,previous:jn}=wh(on,Bn,$t,In);if(ar)return Vn($t)?void 0:Jr($t.path,$t.path);if(Xn&&jn)return Kd(jn);var mt=an(nt($t)),fn=Qe(on,mt);return mn($t)&&Array.isArray(fn)?Jr($t.path,$t.path):Vn($t)&&!Array.isArray(fn)?Ca($t.focusPath):void 0}}(n(P),n(J),n(V),_e,!p())||n(V):Is(n(P),n(J));S(V,Ie),At(nt(Ie))}if(oe==="ArrowRight"||oe==="Shift+ArrowRight"){A.preventDefault();var xt=n(V)&&n(P)!==void 0?function(on,Bn,$t){var ar=arguments.length>3&&arguments[3]!==void 0&&arguments[3],In=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if($t){var{caret:Xn,next:jn}=wh(on,Bn,$t,In);return ar?Vn($t)?void 0:Jr($t.path,$t.path):Xn&&jn?Kd(jn):Vn($t)?Gt($t.focusPath):void 0}}(n(P),n(J),n(V),_e,!p())||n(V):Is(n(P),n(J));S(V,xt),At(nt(xt))}if(oe==="Enter"&&n(V)){if(ku(n(V))){var wt=n(V).focusPath,Kt=Qe(n(P),an(wt));Array.isArray(Kt)&&(A.preventDefault(),S(V,Gt(wt)))}Rr(n(V))&&(A.preventDefault(),S(V,Te(Te({},n(V)),{},{edit:!0}))),mn(n(V))&&(A.preventDefault(),ir(Qe(n(P),n(V).path))?Fe(n(V).path,!0):S(V,Te(Te({},n(V)),{},{edit:!0})))}if(oe.replace(/^Shift\+/,"").length===1&&n(V))return A.preventDefault(),void Un(A.key);if(oe==="Enter"&&(oo(n(V))||$r(n(V))))return A.preventDefault(),void Un("");if(oe==="Ctrl+Enter"&&mn(n(V))){var Pn=Qe(n(P),n(V).path);xu(Pn)&&window.open(String(Pn),"_blank")}oe==="Escape"&&n(V)&&(A.preventDefault(),S(V,void 0)),oe==="Ctrl+F"&&(A.preventDefault(),Tt(!1)),oe==="Ctrl+H"&&(A.preventDefault(),Tt(!0)),oe==="Ctrl+Z"&&(A.preventDefault(),qe()),oe==="Ctrl+Shift+Z"&&(A.preventDefault(),Ve())}),Re("mousedown",ue,function(A){o("handleMouseDown",A);var oe=A.target;Tg(oe,"BUTTON")||oe.isContentEditable||(It(),n(V)||n(P)!==void 0||n(U)!==""&&n(U)!==void 0||(o("createDefaultSelection"),S(V,Gt([]))))}),Re("contextmenu",ue,Rt),X(e,Vr),bt(t,"expand",he),bt(t,"collapse",Me),bt(t,"validate",Ee),bt(t,"getJson",pt),bt(t,"patch",Nt),bt(t,"acceptAutoRepair",yt),bt(t,"openTransformModal",tn),bt(t,"scrollTo",Ye),bt(t,"findElement",$n),bt(t,"findSearchResult",Qn),bt(t,"focus",It),ut({expand:he,collapse:Me,validate:Ee,getJson:pt,patch:Nt,acceptAutoRepair:yt,openTransformModal:tn,scrollTo:Ye,findElement:$n,findSearchResult:Qn,focus:It})}function $0(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,s)=>$0(Reflect.get(r,o,s)),set:()=>!1,deleteProperty:()=>!1});var t}var kc=Nr("jsoneditor:History");function P0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function s(){return o<r.length}function a(){return o>0}function i(){return{canUndo:s(),canRedo:a(),items:()=>r.slice().reverse(),add:c,undo:u,redo:g,clear:d}}function l(){e.onChange&&e.onChange(i())}function c(m){kc("add",m),r=[m].concat(r.slice(o)).slice(0,t),o=0,l()}function d(){kc("clear"),r=[],o=0,l()}function u(){if(s()){var m=r[o];return o+=1,kc("undo",m),l(),m}}function g(){if(a())return kc("redo",r[o-=1]),l(),r[o]}return{get:i}}St(`/* over all fonts, sizes, and colors */
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
.jse-transform-modal-inner.svelte-rrrjnb {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb) {
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
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .query-error:where(.svelte-rrrjnb) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data.jse-hide:where(.svelte-rrrjnb) {
  flex: none;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-preview-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents.jse-hide-original-data:where(.svelte-rrrjnb) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) button:where(.svelte-rrrjnb) {
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
.jse-transform-modal-inner.svelte-rrrjnb .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb),
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):focus,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):read-only,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-preview.jse-error:where(.svelte-rrrjnb) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-rrrjnb a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var Ni=ju(()=>D2),Ds=ju(()=>L2),IS=de('<div class="query-error svelte-rrrjnb"> </div>'),qS=de("<!> <!>",1),DS=de('<div class="jse-preview jse-error svelte-rrrjnb"> </div>'),LS=de('<!> <div class="jse-modal-contents svelte-rrrjnb"><div class="jse-main-contents svelte-rrrjnb"><div class="jse-query-contents svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Language</div></div> <div class="jse-description svelte-rrrjnb"><!></div> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Path</div></div> <input class="jse-path svelte-rrrjnb" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Query</div></div> <textarea class="jse-query svelte-rrrjnb" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-rrrjnb"><button type="button" class="jse-primary svelte-rrrjnb">Transform</button></div></div>',1),US=de('<div class="jse-transform-modal-inner svelte-rrrjnb"><!></div>');function FS(e,t){var r,o,s;ct(t,!1);var a=Nr("jsoneditor:TransformModal"),i=_(t,"id",25,()=>"transform-modal-"+Js()),l=_(t,"json",9),c=_(t,"rootPath",25,()=>[]),d=_(t,"indentation",9),u=_(t,"truncateTextSize",9),g=_(t,"escapeControlCharacters",9),m=_(t,"escapeUnicodeCharacters",9),j=_(t,"parser",9),p=_(t,"parseMemoizeOne",9),x=_(t,"validationParser",9),v=_(t,"pathParser",9),h=_(t,"queryLanguages",9),f=_(t,"queryLanguageId",13),y=_(t,"onChangeQueryLanguage",9),w=_(t,"onRenderValue",9),b=_(t,"onRenderMenu",9),k=_(t,"onRenderContextMenu",9),$=_(t,"onClassName",9),M=_(t,"onTransform",9),z=_(t,"onClose",9),H=Q(void 0,!0),G=Q(P0({onChange:J=>S(G,J)}).get(),!0),ee=Q(void 0,!0),te=Q(void 0,!0),je=Q(!1,!0),B="".concat(i(),":").concat(ft(c())),pe=(r=Ni()[B])!==null&&r!==void 0?r:{},$e=Q(Ds().showWizard!==!1,!0),ke=Q(Ds().showOriginal!==!1,!0),me=Q((o=pe.queryOptions)!==null&&o!==void 0?o:{},!0),Y=Q(f()===pe.queryLanguageId&&pe.query?pe.query:"",!0),I=Q((s=pe.isManual)!==null&&s!==void 0&&s,!0),se=Q(void 0,!0),T=Q(void 0,!0),E=Q({text:""},!0);function R(J){var V;return(V=h().find(Ze=>Ze.id===J))!==null&&V!==void 0?V:h()[0]}function ne(J){try{S(me,J),S(Y,R(f()).createQuery(n(ee),J)),S(se,void 0),S(I,!1),a("updateQueryByWizard",{queryOptions:n(me),query:n(Y),isManual:n(I)})}catch(V){S(se,String(V))}}function Se(J){S(Y,J.target.value),S(I,!0),a("handleChangeQuery",{query:n(Y),isManual:n(I)})}n(I)||ne(n(me)),Qr(()=>{var J;(J=n(H))===null||J===void 0||J.focus()});var K=Pc(function(J,V){if(J===void 0)return S(E,{text:""}),void S(T,"Error: No JSON");if(V.trim()!=="")try{a("previewTransform",{query:V});var Ze=R(f()).executeQuery(J,V,j());S(E,{json:Ze}),S(T,void 0)}catch(Je){S(E,{text:""}),S(T,String(Je))}else S(E,{json:J})},300);function F(){if(n(ee)===void 0)return S(E,{text:""}),void S(T,"Error: No JSON");try{a("handleTransform",{query:n(Y)});var J=R(f()).executeQuery(n(ee),n(Y),j());M()([{op:"replace",path:ft(c()),value:J}]),z()()}catch(V){console.error(V),S(E,{text:""}),S(T,String(V))}}function ie(){S($e,!n($e)),Ds(Ds().showWizard=n($e))}function P(){S(ke,!n(ke)),Ds(Ds().showOriginal=n(ke))}function U(J){J.focus()}function L(J){a("handleChangeQueryLanguage",J),f(J),y()(J),ne(n(me))}function fe(){n(je)?S(je,!n(je)):z()()}ce(()=>(C(l()),C(c())),()=>{S(ee,$0(Qe(l(),c())))}),ce(()=>n(ee),()=>{S(te,n(ee)?{json:n(ee)}:{text:""})}),ce(()=>(n(ee),n(Y)),()=>{K(n(ee),n(Y))}),ce(()=>(Ni(),n(me),n(Y),C(f()),n(I)),()=>{Ni(Ni()[B]={queryOptions:n(me),query:n(Y),queryLanguageId:f(),isManual:n(I)}),a("store state in memory",B,Ni()[B])}),En(),zt(!0),el(e,{get onClose(){return z()},className:"jse-transform-modal",get fullscreen(){return n(je)},children:(J,V)=>{var Ze=US();Fd(W(Ze),{children:(Je,Oe)=>{var Xe=LS(),Ne=ht(Xe);(function(Ge,Ht){ct(Ht,!1);var Ft,Nn=_(Ht,"queryLanguages",9),Mn=_(Ht,"queryLanguageId",9),hn=_(Ht,"fullscreen",13),jr=_(Ht,"onChangeQueryLanguage",9),Tn=_(Ht,"onClose",9),rr=Q(void 0,!0),{openAbsolutePopup:kr,closeAbsolutePopup:Sr}=Xa("absolute-popup");function hr(){var Ln={queryLanguages:Nn(),queryLanguageId:Mn(),onChangeQueryLanguage:ur=>{Sr(Ft),jr()(ur)}};Ft=kr(Tk,Ln,{offsetTop:-2,offsetLeft:0,anchor:n(rr),closeOnOuterClick:!0})}zt(!0),nu(Ge,{title:"Transform",fullScreenButton:!0,get onClose(){return Tn()},get fullscreen(){return hn()},set fullscreen(Ln){hn(Ln)},$$slots:{actions:(Ln,ur)=>{var Pe,Xt=qk();sn(W(Xt),{get data(){return uj}}),er(Xt,kn=>S(rr,kn),()=>n(rr)),Ae(kn=>Pe=Pt(Xt,1,"jse-config svelte-1kpylsp",null,Pe,kn),[()=>({hide:Nn().length<=1})],Ce),Re("click",Xt,hr),X(Ln,Xt)}},$$legacy:!0}),ut()})(Ne,{get queryLanguages(){return h()},get queryLanguageId(){return f()},onChangeQueryLanguage:L,get onClose(){return z()},get fullscreen(){return n(je)},set fullscreen(Ge){S(je,Ge)},$$legacy:!0});var Le=W(ae(Ne,2)),lt=W(Le),He=ae(W(lt),2);bg(W(He),()=>(C(f()),Z(()=>R(f()).description)));var _t=ae(He,4),O=ae(_t,2),N=W(O),D=W(N),re=W(D),he=Ce(()=>n($e)?Sa:Li);sn(re,{get data(){return n(he)}});var Me=ae(O,2),Ue=Ge=>{var Ht=lr(),Ft=ht(Ht),Nn=hn=>{var jr=qS(),Tn=ht(jr);Rk(Tn,{get queryOptions(){return n(me)},get json(){return n(ee)},onChange:ne});var rr=ae(Tn,2),kr=Sr=>{var hr=IS(),Ln=W(hr);Ae(()=>dt(Ln,n(se))),X(Sr,hr)};ye(rr,Sr=>{n(se)&&Sr(kr)}),X(hn,jr)},Mn=hn=>{X(hn,Tr("(Only available for arrays, not for objects)"))};ye(Ft,hn=>{n(ee),Z(()=>Array.isArray(n(ee)))?hn(Nn):hn(Mn,!1)}),X(Ge,Ht)};ye(Me,Ge=>{n($e)&&Ge(Ue)});var be=ae(Me,4);er(be,Ge=>S(H,Ge),()=>n(H));var ve,vt,tt=ae(lt,2),Ee=W(tt),pt=W(Ee),ln=W(pt),On=W(ln),en=W(On),Wt=Ce(()=>n(ke)?Sa:Li);sn(en,{get data(){return n(Wt)}});var wn=ae(pt,2),Jt=Ge=>{lf(Ge,{get externalContent(){return n(te)},externalSelection:void 0,get history(){return n(G)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return m()},get parser(){return j()},get parseMemoizeOne(){return p()},get onRenderValue(){return w()},get onRenderMenu(){return b()},get onRenderContextMenu(){return k()},onError:Z(()=>console.error),get onChange(){return Er},get onChangeMode(){return Er},get onSelect(){return Er},get onUndo(){return Er},get onRedo(){return Er},get onFocus(){return Er},get onBlur(){return Er},get onSortModal(){return Er},get onTransformModal(){return Er},get onJSONEditorModal(){return Er},get onClassName(){return $()},validator:void 0,get validationParser(){return x()},get pathParser(){return v()}})};ye(wn,Ge=>{n(ke)&&Ge(Jt)});var Nt=ae(Ee,2),Ct=ae(W(Nt),2),Yt=Ge=>{lf(Ge,{get externalContent(){return n(E)},externalSelection:void 0,get history(){return n(G)},readOnly:!0,get truncateTextSize(){return u()},mainMenuBar:!1,navigationBar:!1,get indentation(){return d()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return m()},get parser(){return j()},get parseMemoizeOne(){return p()},get onRenderValue(){return w()},get onRenderMenu(){return b()},get onRenderContextMenu(){return k()},onError:Z(()=>console.error),get onChange(){return Er},get onChangeMode(){return Er},get onSelect(){return Er},get onUndo(){return Er},get onRedo(){return Er},get onFocus(){return Er},get onBlur(){return Er},get onSortModal(){return Er},get onTransformModal(){return Er},get onJSONEditorModal(){return Er},get onClassName(){return $()},validator:void 0,get validationParser(){return x()},get pathParser(){return v()}})},cn=Ge=>{var Ht=DS(),Ft=W(Ht);Ae(()=>dt(Ft,n(T))),X(Ge,Ht)};ye(Ct,Ge=>{n(T)?Ge(cn,!1):Ge(Yt)});var yt=W(ae(Le,2));Lr(()=>Re("click",yt,F)),Yr(yt,Ge=>U?.(Ge)),Ae((Ge,Ht,Ft)=>{ws(_t,Ge),ws(be,n(Y)),ve=Pt(tt,1,"jse-data-contents svelte-rrrjnb",null,ve,Ht),vt=Pt(Ee,1,"jse-original-data svelte-rrrjnb",null,vt,Ft),yt.disabled=!!n(T)},[()=>(C(pn),C(c()),C(ao),Z(()=>pn(c())?"(document root)":ao(c()))),()=>({"jse-hide-original-data":!n(ke)}),()=>({"jse-hide":!n(ke)})],Ce),Re("click",D,ie),Re("input",be,Se),Re("click",On,P),X(Je,Xe)},$$slots:{default:!0}}),Yr(Ze,(Je,Oe)=>ru?.(Je,Oe),()=>fe),X(J,Ze)},$$slots:{default:!0}}),ut()}function So(){}St(`/* over all fonts, sizes, and colors */
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
.jse-status-bar.svelte-1ulj7zd {
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
.jse-status-bar.svelte-1ulj7zd:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1ulj7zd .jse-status-bar-info:where(.svelte-1ulj7zd) {
  padding: 2px;
}`);var VS=de('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),BS=de('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),WS=de('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),HS=de('<div class="jse-status-bar svelte-1ulj7zd"><!> <!> <!></div>'),Zf=ub.define([{tag:ho.propertyName,color:"var(--internal-key-color)"},{tag:ho.number,color:"var(--internal-value-color-number)"},{tag:ho.bool,color:"var(--internal-value-color-boolean)"},{tag:ho.string,color:"var(--internal-value-color-string)"},{tag:ho.keyword,color:"var(--internal-value-color-null)"}]),KS=Zh(Zf),QS=Zf.style;Zf.style=e=>QS(e||[]);var JS=[Gh.fromClass(class{constructor(e){this.view=e,this.indentUnit=zc(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=zc(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new Yh;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var s of o){var{numColumns:a,containsTab:i}=this.numColumns(s.text,t.tabSize),l="calc(".concat(a+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(a+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(a+this.indentUnit,"ch");e.add(s.from,s.from,Xh.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var{from:o,to:s}of this.view.visibleRanges)for(var a=o;a<=s;){var i=e.doc.lineAt(a);r!==i&&(t.add(i),r=i),a=i.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var s=0;s<e.length;s++)switch(e[s]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];St(`/* over all fonts, sizes, and colors */
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
.jse-text-mode.svelte-xt61xw {
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
.jse-text-mode.no-main-menu.svelte-xt61xw {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) {
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
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-hidden:where(.svelte-xt61xw) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button {
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
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button[name="close"] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading-space:where(.svelte-xt61xw) {
  flex: 1;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading:where(.svelte-xt61xw) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-preview:where(.svelte-xt61xw) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}`);var GS=de('<!> <div class="jse-contents jse-preview svelte-xt61xw"> </div>',1),YS=de("<!> <!> <!> <!>",1),XS=de("<div></div> <!> <!>",1),ZS=de('<div class="jse-contents svelte-xt61xw"><div class="jse-loading-space svelte-xt61xw"></div> <div class="jse-loading svelte-xt61xw">loading...</div></div>'),e_=de("<div><!> <!></div>");function t_(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=_(t,"readOnly",9),a=_(t,"mainMenuBar",9),i=_(t,"statusBar",9),l=_(t,"askToFormat",9),c=_(t,"externalContent",9),d=_(t,"externalSelection",9),u=_(t,"history",9),g=_(t,"indentation",9),m=_(t,"tabSize",9),j=_(t,"escapeUnicodeCharacters",9),p=_(t,"parser",9),x=_(t,"validator",9),v=_(t,"validationParser",9),h=_(t,"onChange",9),f=_(t,"onChangeMode",9),y=_(t,"onSelect",9),w=_(t,"onUndo",9),b=_(t,"onRedo",9),k=_(t,"onError",9),$=_(t,"onFocus",9),M=_(t,"onBlur",9),z=_(t,"onRenderMenu",9),H=_(t,"onSortModal",9),G=_(t,"onTransformModal",9),ee=Nr("jsoneditor:TextMode"),te={key:"Mod-i",run:Ne,shift:Le,preventDefault:!0},je=typeof window>"u";ee("isSSR:",je);var B,pe=Q(void 0,!0),$e=Q(void 0,!0),ke=Q(void 0,!0),me=Q(!1,!0),Y=Q(l(),!0),I=Q([],!0),se=new Ci,T=new Ci,E=new Ci,R=new Ci,ne=new Ci,Se=c(),K=Q(Ud(Se,g(),p()),!0),F=Tb.define(),ie=null;function P(){if(!ie||ie.length===0)return!1;var ge=ie[0].startState,qe=ie[ie.length-1].state,Ve=ie.map(Lt=>Lt.changes).reduce((Lt,Ut)=>Lt.compose(Ut)),Et={type:"text",undo:{changes:Ve.invert(ge.doc).toJSON(),selection:Ft(ge.selection)},redo:{changes:Ve.toJSON(),selection:Ft(qe.selection)}};return ee("add history item",Et),u().add(Et),ie=null,!0}var U=Q(j(),!0);Qr(kt(function*(){if(!je)try{B=function(ge){var{target:qe,initialText:Ve,readOnly:Et,indentation:Lt}=ge;ee("Create CodeMirror editor",{readOnly:Et,indentation:Lt});var Ut=function(it,Dt){return vd(it)?it.ranges.every(Ye=>Ye.anchor<Dt.length&&Ye.head<Dt.length):!1}(d(),Ve)?Wt(d()):void 0,tn=zs.create({doc:Ve,selection:Ut,extensions:[av.of([Eb,te]),se.of(tt()),db(),fb(),vb(),pb(),hb(),mb(),gb(),zs.allowMultipleSelections.of(!0),bb(),Zh(Ob,{fallback:!0}),yb(),jb(),xb(),wb(),kb(),Sb(),_b(),av.of([...$b,...Pb,...zb,{key:"Mod-z",run:D,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:re,preventDefault:!0},{key:"Ctrl-Shift-z",run:re,preventDefault:!0},...Rb,...Nb,...Mb]),KS,Jx({hideFirstIndent:!0}),ds.domEventHandlers({dblclick:vt}),ds.updateListener.of(it=>{S(ke,it.state),it.docChanged&&(it.transactions.some(Dt=>!!Dt.annotation(F))||(ie=[...ie??[],it]),cn()),it.selectionSet&&Ht()}),Vx(),Cb({top:!0}),ds.lineWrapping,T.of(zs.readOnly.of(Et)),R.of(zs.tabSize.of(m())),E.of(Yt(Lt)),ne.of(ds.theme({},{dark:Ee()}))]});return B=new ds({state:tn,parent:qe}),Ut&&B.dispatch(B.state.update({selection:Ut.main,scrollIntoView:!0})),B}({target:n(pe),initialText:Nn(n(K),n(me))?"":n(r).escapeValue(n(K)),readOnly:s(),indentation:g()})}catch(ge){console.error(ge)}})),Oo(()=>{yt(),B&&(ee("Destroy CodeMirror editor"),B.destroy())});var L=ai(),fe=ai();function J(){B&&(ee("focus"),B.focus())}function V(ge){if(B)try{if(ge&&ge.length>0){var{from:qe}=od(n(r).escapeValue(n(K)),ge);qe!==void 0&&(B.dispatch({selection:{anchor:qe,head:qe}}),qb(B))}else Db(B)}catch(Ve){k()(Ve)}}function Ze(ge){var qe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hd;if(B)try{if(ge&&ge.length>0){var{from:Ve}=od(n(r).escapeValue(n(K)),ge);Ve!==void 0&&(B.dispatch({selection:{anchor:Ve,head:Ve}}),Lb(B))}else Ub(B);qe?.(ge)}catch(Et){k()(Et)}}var Je=!1;function Oe(ge){return Xe(ge,!1)}function Xe(ge,qe){ee("handlePatch",ge,qe);var Ve=p().parse(n(K)),Et=Mo(Ve,ge),Lt=cm(Ve,ge);return en({text:p().stringify(Et,null,g())},qe,!1),{json:Et,previousJson:Ve,undo:Lt,redo:ge}}function Ne(){if(ee("format"),s())return!1;try{var ge=p().parse(n(K));return en({text:p().stringify(ge,null,g())},!0,!1),S(Y,l()),!0}catch(qe){k()(qe)}return!1}function Le(){if(ee("compact"),s())return!1;try{var ge=p().parse(n(K));return en({text:p().stringify(ge)},!0,!1),S(Y,!1),!0}catch(qe){k()(qe)}return!1}function lt(){if(ee("repair"),!s())try{en({text:Zo(n(K))},!0,!1),S(Mn,ud),S(hn,void 0)}catch(ge){k()(ge)}}function He(){var ge;if(!s())try{var qe=p().parse(n(K));Je=!0,H()({id:L,json:qe,rootPath:[],onSort:(ge=kt(function*(Ve){var{operations:Et}=Ve;ee("onSort",Et),Xe(Et,!0)}),function(Ve){return ge.apply(this,arguments)}),onClose:()=>{Je=!1,J()}})}catch(Ve){k()(Ve)}}function _t(ge){var{id:qe,rootPath:Ve,onTransform:Et,onClose:Lt}=ge;try{var Ut=p().parse(n(K));Je=!0,G()({id:qe||fe,json:Ut,rootPath:Ve||[],onTransform:tn=>{Et?Et({operations:tn,json:Ut,transformedJson:Mo(Ut,tn)}):(ee("onTransform",tn),Xe(tn,!0))},onClose:()=>{Je=!1,J(),Lt&&Lt()}})}catch(tn){k()(tn)}}function O(){s()||_t({rootPath:[]})}function N(){B&&(n(pe)&&n(pe).querySelector(".cm-search")?Fb(B):Vb(B))}function D(){if(s())return!1;yt();var ge=u().undo();return ee("undo",ge),hh(ge)?(B.dispatch({annotations:F.of("undo"),changes:sv.fromJSON(ge.undo.changes),selection:Nu.fromJSON(ge.undo.selection),scrollIntoView:!0}),!0):(w()(ge),!1)}function re(){if(s())return!1;yt();var ge=u().redo();return ee("redo",ge),hh(ge)?(B.dispatch({annotations:F.of("redo"),changes:sv.fromJSON(ge.redo.changes),selection:Nu.fromJSON(ge.redo.selection),scrollIntoView:!0}),!0):(b()(ge),!1)}function he(){S(me,!0),en(c(),!0,!0)}function Me(){f()(Or.tree)}function Ue(){Nt()}function be(ge){ee("select validation error",ge);var{from:qe,to:Ve}=pt(ge);qe!==void 0&&Ve!==void 0&&(ve(qe,Ve),J())}function ve(ge,qe){ee("setSelection",{anchor:ge,head:qe}),B&&B.dispatch(B.state.update({selection:{anchor:ge,head:qe},scrollIntoView:!0}))}function vt(ge,qe){if(qe.state.selection.ranges.length===1){var Ve=qe.state.selection.ranges[0],Et=n(K).slice(Ve.from,Ve.to);if(Et==="{"||Et==="["){var Lt=vm.parse(n(K)),Ut=Object.keys(Lt.pointers).find(it=>{var Dt;return((Dt=Lt.pointers[it].value)===null||Dt===void 0?void 0:Dt.pos)===Ve.from}),tn=Lt.pointers[Ut];Ut&&tn&&tn.value&&tn.valueEnd&&(ee("pointer found, selecting inner contents of path:",Ut,tn),ve(tn.value.pos+1,tn.valueEnd.pos-1))}}}function tt(){return Ab(jr,{delay:300})}function Ee(){return!!n(pe)&&getComputedStyle(n(pe)).getPropertyValue("--jse-theme").includes("dark")}function pt(ge){var{path:qe,message:Ve,severity:Et}=ge,{line:Lt,column:Ut,from:tn,to:it}=od(n(r).escapeValue(n(K)),qe);return{path:qe,line:Lt,column:Ut,from:tn,to:it,message:Ve,severity:Et,actions:[]}}function ln(ge,qe){var{line:Ve,column:Et,position:Lt,message:Ut}=ge;return{path:[],line:Ve,column:Et,from:Lt,to:Lt,severity:qo.error,message:Ut,actions:qe&&!s()?[{name:"Auto repair",apply:()=>lt()}]:void 0}}function On(ge){return{from:ge.from||0,to:ge.to||0,message:ge.message||"",actions:ge.actions,severity:ge.severity}}function en(ge,qe,Ve){var Et=Ud(ge,g(),p()),Lt=!Bt(ge,Se),Ut=Se;ee("setCodeMirrorContent",{isChanged:Lt,emitChange:qe,forceUpdate:Ve}),B&&(Lt||Ve)&&(Se=ge,S(K,Et),Nn(n(K),n(me))||B.dispatch({changes:{from:0,to:B.state.doc.length,insert:n(r).escapeValue(n(K))}}),P(),Lt&&qe&&Ge(Se,Ut))}function Wt(ge){return vd(ge)?Nu.fromJSON(ge):void 0}function wn(){return Jt.apply(this,arguments)}function Jt(){return Jt=kt(function*(){ee("refresh"),yield function(){return Ct.apply(this,arguments)}()}),Jt.apply(this,arguments)}function Nt(){if(B){var ge=B?n(r).unescapeValue(B.state.doc.toString()):"",qe=ge!==n(K);if(ee("onChangeCodeMirrorValue",{isChanged:qe}),qe){var Ve=Se;S(K,ge),Se={text:n(K)},P(),Ge(Se,Ve),Yn(),Ht()}}}function Ct(){return(Ct=kt(function*(){if(Yn(),B){var ge=Ee();return ee("updateTheme",{dark:ge}),B.dispatch({effects:[ne.reconfigure(ds.theme({},{dark:ge}))]}),new Promise(qe=>setTimeout(qe))}return Promise.resolve()})).apply(this,arguments)}function Yt(ge){var qe=Ib.of(typeof ge=="number"?" ".repeat(ge):ge);return ge==="	"?[qe]:[qe,JS]}Gf({onMount:Qr,onDestroy:Oo,getWindow:()=>ul(n($e)),hasFocus:()=>Je&&document.hasFocus()||Mf(n($e)),onFocus:$(),onBlur:()=>{yt(),M()()}});var cn=Pc(Nt,300);function yt(){cn.flush()}function Ge(ge,qe){h()&&h()(ge,qe,{contentErrors:Tn(),patchResult:void 0})}function Ht(){y()(Ft(n(ke).selection))}function Ft(ge){return Te({type:qn.text},ge.toJSON())}function Nn(ge,qe){return!!ge&&ge.length>ld&&!qe}var Mn=Q(ud,!0),hn=Q(void 0,!0);function jr(){if(Nn(n(K),n(me)))return[];var ge=Tn();if(ph(ge)){var{parseError:qe,isRepairable:Ve}=ge;return[On(ln(qe,Ve))]}return g2(ge)?ge.validationErrors.map(pt).map(On):[]}function Tn(){ee("validate:start"),yt();var ge=rr(n(r).escapeValue(n(K)),x(),p(),v());return ph(ge)?(S(Mn,ge.isRepairable?ch:"invalid"),S(hn,ge.parseError),S(I,[])):(S(Mn,ud),S(hn,void 0),S(I,ge?.validationErrors||[])),ee("validate:end"),ge}var rr=Di(Uk);function kr(){n(hn)&&function(ge){ee("select parse error",ge);var qe=ln(ge,!1);ve(qe.from!=null?qe.from:0,qe.to!=null?qe.to:0),J()}(n(hn))}var Sr={icon:oj,text:"Show me",title:"Move to the parse error location",onClick:kr};ce(()=>C(j()),()=>{S(r,Rf({escapeControlCharacters:!1,escapeUnicodeCharacters:j()}))}),ce(()=>C(c()),()=>{en(c(),!1,!1)}),ce(()=>C(d()),()=>{(function(ge){if(vd(ge)){var qe=Wt(ge);!B||!qe||n(ke)&&n(ke).selection.eq(qe)||(ee("applyExternalSelection",qe),B.dispatch({selection:qe}))}})(d())}),ce(()=>C(x()),()=>{(function(ge){ee("updateLinter",ge),B&&B.dispatch({effects:se.reconfigure(tt())})})(x())}),ce(()=>C(g()),()=>{(function(ge){B&&(ee("updateIndentation",ge),B.dispatch({effects:E.reconfigure(Yt(ge))}))})(g())}),ce(()=>C(m()),()=>{(function(ge){B&&(ee("updateTabSize",ge),B.dispatch({effects:R.reconfigure(zs.tabSize.of(ge))}))})(m())}),ce(()=>C(s()),()=>{(function(ge){B&&(ee("updateReadOnly",ge),B.dispatch({effects:[T.reconfigure(zs.readOnly.of(ge))]}))})(s())}),ce(()=>(n(U),C(j())),()=>{n(U)!==j()&&(S(U,j()),ee("forceUpdateText",{escapeUnicodeCharacters:j()}),B&&B.dispatch({changes:{from:0,to:B.state.doc.length,insert:n(r).escapeValue(n(K))}}))}),ce(()=>(n(Mn),C(s()),Va),()=>{S(o,n(Mn)!==ch||s()?[Sr]:[{icon:Va,text:"Auto repair",title:"Automatically repair JSON",onClick:lt},Sr])}),En(),zt(!0);var hr,Ln=e_(),ur=W(Ln),Pe=ge=>{var qe=Ce(()=>(n(K),Z(()=>n(K).length===0))),Ve=Ce(()=>!n(qe)),Et=Ce(()=>!n(qe)),Lt=Ce(()=>!n(qe)),Ut=Ce(()=>!n(qe));(function(tn,it){ct(it,!1);var Dt=Q(void 0,!0),Ye=_(it,"readOnly",9,!1),bn=_(it,"onFormat",9),$n=_(it,"onCompact",9),Qn=_(it,"onSort",9),At=_(it,"onTransform",9),un=_(it,"onToggleSearch",9),Mt=_(it,"onUndo",9),le=_(it,"onRedo",9),xe=_(it,"canUndo",9),Fe=_(it,"canRedo",9),Ot=_(it,"canFormat",9),nn=_(it,"canCompact",9),Tt=_(it,"canSort",9),Sn=_(it,"canTransform",9),or=_(it,"onRenderMenu",9),An={type:"button",icon:lu,title:"Search (Ctrl+F)",className:"jse-search",onClick:un()},Zt=Q(void 0,!0);ce(()=>(C(Ye()),C(bn()),C(Ot()),C($n()),C(nn()),C(Qn()),C(Tt()),C(At()),C(Sn()),C(Mt()),C(xe()),C(le()),C(Fe())),()=>{S(Zt,Ye()?[An,{type:"space"}]:[{type:"button",icon:Bh,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:bn(),disabled:Ye()||!Ot()},{type:"button",icon:W4,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:$n(),disabled:Ye()||!nn()},{type:"separator"},{type:"button",icon:Tc,title:"Sort",className:"jse-sort",onClick:Qn(),disabled:Ye()||!Tt()},{type:"button",icon:Nc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:At(),disabled:Ye()||!Sn()},An,{type:"separator"},{type:"button",icon:gf,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Mt(),disabled:!xe()},{type:"button",icon:mf,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:le(),disabled:!Fe()},{type:"space"}])}),ce(()=>(C(or()),n(Zt)),()=>{S(Dt,or()(n(Zt))||n(Zt))}),En(),zt(!0),Ou(tn,{get items(){return n(Dt)}}),ut()})(ge,{get readOnly(){return s()},onFormat:Ne,onCompact:Le,onSort:He,onTransform:O,onToggleSearch:N,onUndo:D,onRedo:re,get canFormat(){return n(Ve)},get canCompact(){return n(Et)},get canSort(){return n(Lt)},get canTransform(){return n(Ut)},get canUndo(){return C(u()),Z(()=>u().canUndo)},get canRedo(){return C(u()),Z(()=>u().canRedo)},get onRenderMenu(){return z()}})};ye(ur,ge=>{a()&&ge(Pe)});var Xt=ae(ur,2),kn=ge=>{var qe,Ve=XS(),Et=Ce(()=>(n(K),n(me),Z(()=>Nn(n(K),n(me))))),Lt=ht(Ve);er(Lt,Ye=>S(pe,Ye),()=>n(pe));var Ut=ae(Lt,2),tn=Ye=>{var bn=GS(),$n=ht(bn),Qn=Ce(()=>(C(Oc),C(ld),n(K),Z(()=>"The JSON document is larger than ".concat(Oc(ld),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(Oc(n(K).length),"."))));jo($n,{get icon(){return ys},type:"error",get message(){return n(Qn)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:he},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:Me},{text:"Cancel",title:"Cancel opening this large document.",onClick:Ue}],onClose:J});var At=W(ae($n,2));Ae(un=>dt(At,un),[()=>(C(pa),n(K),C(Wc),Z(()=>pa(n(K)||"",Wc)))],Ce),X(Ye,bn)};ye(Ut,Ye=>{n(Et)&&Ye(tn)});var it=ae(Ut,2),Dt=Ye=>{var bn=YS(),$n=ht(bn),Qn=xe=>{(function(Fe,Ot){ct(Ot,!1);var nn=_(Ot,"editorState",8),Tt=Q(),Sn=Q(),or=Q(),An=Q(),Zt=Q();ce(()=>C(nn()),()=>{var rt;S(Tt,(rt=nn())===null||rt===void 0||(rt=rt.selection)===null||rt===void 0||(rt=rt.main)===null||rt===void 0?void 0:rt.head)}),ce(()=>(n(Tt),C(nn())),()=>{var rt;S(Sn,n(Tt)!==void 0?(rt=nn())===null||rt===void 0||(rt=rt.doc)===null||rt===void 0?void 0:rt.lineAt(n(Tt)):void 0)}),ce(()=>n(Sn),()=>{S(or,n(Sn)!==void 0?n(Sn).number:void 0)}),ce(()=>(n(Sn),n(Tt)),()=>{S(An,n(Sn)!==void 0&&n(Tt)!==void 0?n(Tt)-n(Sn).from+1:void 0)}),ce(()=>C(nn()),()=>{var rt;S(Zt,(rt=nn())===null||rt===void 0||(rt=rt.selection)===null||rt===void 0||(rt=rt.ranges)===null||rt===void 0?void 0:rt.reduce((zn,mr)=>zn+mr.to-mr.from,0))}),En(),zt();var Rt=HS(),_n=W(Rt),Fr=rt=>{var zn=VS(),mr=W(zn);Ae(()=>{var It;return dt(mr,"Line: ".concat((It=n(or))!==null&&It!==void 0?It:""))}),X(rt,zn)};ye(_n,rt=>{n(or)!==void 0&&rt(Fr)});var jt=ae(_n,2),tr=rt=>{var zn=BS(),mr=W(zn);Ae(()=>{var It;return dt(mr,"Column: ".concat((It=n(An))!==null&&It!==void 0?It:""))}),X(rt,zn)};ye(jt,rt=>{n(An)!==void 0&&rt(tr)});var yn=ae(jt,2),Fn=rt=>{var zn=WS(),mr=W(zn);Ae(()=>{var It;return dt(mr,"Selection: ".concat((It=n(Zt))!==null&&It!==void 0?It:""," characters"))}),X(rt,zn)};ye(yn,rt=>{n(Zt)!==void 0&&n(Zt)>0&&rt(Fn)}),X(Fe,Rt),ut()})(xe,{get editorState(){return n(ke)}})};ye($n,xe=>{i()&&xe(Qn)});var At=ae($n,2),un=xe=>{jo(xe,{type:"error",get icon(){return ys},get message(){return n(hn),Z(()=>n(hn).message)},get actions(){return n(o)},onClick:kr,onClose:J})};ye(At,xe=>{n(hn)&&xe(un)});var Mt=ae(At,2),le=xe=>{var Fe=Ce(()=>[{icon:Bh,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:Ne},{icon:cu,text:"No thanks",title:"Close this message",onClick:()=>S(Y,!1)}]);jo(xe,{type:"success",message:"Do you want to format the JSON?",get actions(){return n(Fe)},onClose:J})};ye(Mt,xe=>{n(hn),n(Y),C(ih),n(K),Z(()=>!n(hn)&&n(Y)&&ih(n(K)))&&xe(le)}),Yf(ae(Mt,2),{get validationErrors(){return n(I)},selectError:be}),X(Ye,bn)};ye(it,Ye=>{n(Et)||Ye(Dt)}),Ae(Ye=>qe=Pt(Lt,1,"jse-contents svelte-xt61xw",null,qe,Ye),[()=>({"jse-hidden":n(Et)})],Ce),X(ge,Ve)},Un=ge=>{X(ge,ZS())};return ye(Xt,ge=>{je?ge(Un,!1):ge(kn)}),er(Ln,ge=>S($e,ge),()=>n($e)),Ae(ge=>hr=Pt(Ln,1,"jse-text-mode svelte-xt61xw",null,hr,ge),[()=>({"no-main-menu":!a()})],Ce),X(e,Ln),bt(t,"focus",J),bt(t,"collapse",V),bt(t,"expand",Ze),bt(t,"patch",Oe),bt(t,"handlePatch",Xe),bt(t,"openTransformModal",_t),bt(t,"refresh",wn),bt(t,"flush",yt),bt(t,"validate",Tn),ut({focus:J,collapse:V,expand:Ze,patch:Oe,handlePatch:Xe,openTransformModal:_t,refresh:wn,flush:yt,validate:Tn})}St(`/* over all fonts, sizes, and colors */
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
.jse-inline-value.svelte-h57m0p {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-h57m0p {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-h57m0p {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var n_=de('<button type="button"> </button>');St(`/* over all fonts, sizes, and colors */
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
.jse-column-header.svelte-2i3vdx {
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
.jse-column-header.svelte-2i3vdx:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-2i3vdx:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-2i3vdx span.jse-column-sort-icon:where(.svelte-2i3vdx) {
  height: 1em;
}`);var r_=de('<span class="jse-column-sort-icon svelte-2i3vdx"><!></span>'),o_=de('<button type="button"><span class="jse-column-name"> </span> <!></button>');St(`/* over all fonts, sizes, and colors */
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
.jse-table-mode-welcome.svelte-17xl1jx {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-17xl1jx:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-space.jse-before:where(.svelte-17xl1jx) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-arrays-info:where(.svelte-17xl1jx) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) .jse-nested-property-path:where(.svelte-17xl1jx) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) .jse-nested-property-path:where(.svelte-17xl1jx) .jse-nested-property-count:where(.svelte-17xl1jx) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx) {
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
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-space.jse-after:where(.svelte-17xl1jx) {
  flex: 2;
}`);var a_=(e,t)=>t.onClick(),s_=de(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),i_=(e,t,r)=>t.openJSONEditorModal(n(r)),l_=(e,t,r)=>t.extractPath(n(r)),c_=de('<button type="button" class="jse-nested-array-action svelte-17xl1jx">Extract</button>'),u_=de('<div class="jse-nested-property svelte-17xl1jx"><div class="jse-nested-property-path svelte-17xl1jx"> <span class="jse-nested-property-count svelte-17xl1jx"> </span></div> <button type="button" class="jse-nested-array-action svelte-17xl1jx"> </button> <!></div>'),d_=(e,t)=>t.onChangeMode(Or.tree),f_=de('<div class="jse-table-mode-welcome svelte-17xl1jx" role="none"><div class="jse-space jse-before svelte-17xl1jx"></div> <div class="jse-nested-arrays svelte-17xl1jx"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-17xl1jx"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-17xl1jx">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-17xl1jx"></div></div>');function v_(e,t){ct(t,!0);var r=ro(()=>t.json?function(x){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,h=[];return function f(y,w){yr(y)&&w.length<v&&Object.keys(y).forEach(b=>{f(y[b],w.concat(b))}),vr(y)&&h.push(w)}(x,[]),h}(t.json).slice(0,99).filter(x=>x.length>0):[]),o=ro(()=>!pn(n(r))),s=ro(()=>t.json===void 0&&(t.text===""||t.text===void 0)),a=ro(()=>n(o)?"Object with nested arrays":n(s)?"An empty document":yr(t.json)?"An object":vr(t.json)?"An empty array":"A ".concat(zf(t.json,t.parser))),i=f_();i.__click=[a_,t];var l=ae(W(i),2),c=W(l),d=W(c),u=ae(c,2),g=W(u),m=x=>{X(x,Tr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},j=(x,v)=>{var h=y=>{X(y,s_())},f=y=>{var w=Tr();Ae(()=>{var b;return dt(w,"".concat((b=n(a))!==null&&b!==void 0?b:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),X(y,w)};ye(x,y=>{n(s)&&!t.readOnly?y(h):y(f,!1)},v)};ye(g,x=>{n(o)?x(m):x(j,!1)});var p=ae(u,2);pr(p,17,()=>n(r),wr,(x,v)=>{var h=u_(),f=ro(()=>function(H){return Qe(t.json,H).length}(n(v))),y=W(h),w=W(y),b=W(ae(w)),k=ae(y,2);k.__click=[i_,t,v];var $=W(k),M=ae(k,2),z=H=>{var G=c_();G.__click=[l_,t,v],X(H,G)};ye(M,H=>{t.readOnly||H(z)}),Ae(H=>{var G;dt(w,'"'.concat(H??"",'" ')),dt(b,"(".concat((G=n(f))!==null&&G!==void 0?G:""," ").concat(n(f)!==1?"items":"item",")")),dt($,t.readOnly?"View":"Edit")},[()=>ao(n(v))]),X(x,h)}),ae(p,2).__click=[d_,t],Ae(()=>dt(d,n(a))),X(e,i),ut()}il(["click"]);St(`/* over all fonts, sizes, and colors */
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
.jse-column-header.svelte-fzj761 {
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
.jse-column-header.svelte-fzj761:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-fzj761:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var p_=de('<button type="button"><!></button>');St(`/* over all fonts, sizes, and colors */
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
.jse-table-mode.svelte-u14cgx {
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
.jse-table-mode.no-main-menu.svelte-u14cgx {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-search-box-container:where(.svelte-u14cgx) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) .jse-hidden-input:where(.svelte-u14cgx) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) {
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
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-start-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx),
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-search-box-background:where(.svelte-u14cgx) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx), .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) .jse-table-root-error:where(.svelte-u14cgx) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer.jse-selected-value:where(.svelte-u14cgx) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-context-menu-anchor:where(.svelte-u14cgx) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) {
  align-items: unset;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading-space:where(.svelte-u14cgx) {
  flex: 1;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading:where(.svelte-u14cgx) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var h_=de('<div class="jse-table-root-error svelte-u14cgx"><!></div>'),m_=de('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),g_=de('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),b_=de('<th class="jse-table-cell jse-table-cell-gutter svelte-u14cgx"> <!></th>'),y_=de('<div class="jse-context-menu-anchor svelte-u14cgx"><!></div>'),j_=de('<td class="jse-table-cell svelte-u14cgx"><div><!><!></div> <!></td>'),x_=de('<td class="jse-table-cell svelte-u14cgx"></td>'),w_=de('<tr class="jse-table-row svelte-u14cgx"><!><!><!></tr>'),k_=de('<div class="jse-search-box-container svelte-u14cgx"><!></div> <div class="jse-contents svelte-u14cgx"><table class="jse-table-main svelte-u14cgx"><tbody><tr class="jse-table-row jse-table-row-header svelte-u14cgx"><th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th><!><!></tr><tr><td class="svelte-u14cgx"></td></tr><!><tr class="jse-table-invisible-end-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),S_=de("<!> <!>",1),__=de('<label class="jse-hidden-input-label svelte-u14cgx"><input type="text" tabindex="-1" class="jse-hidden-input svelte-u14cgx"/></label> <!>',1),C_=de('<div class="jse-contents jse-contents-loading svelte-u14cgx"><div class="jse-loading-space svelte-u14cgx"></div> <div class="jse-loading svelte-u14cgx">loading...</div></div>'),E_=de('<div role="table"><!> <!></div> <!> <!>',1);function O_(e,t){ct(t,!1);var r=Q(void 0,!0),o=Q(void 0,!0),s=Q(void 0,!0),a=Nr("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=Xa("absolute-popup"),c=v0(),d=ai(),u=ai(),g=typeof window>"u";a("isSSR:",g);var m=_(t,"readOnly",9),j=_(t,"externalContent",9),p=_(t,"externalSelection",9),x=_(t,"history",9),v=_(t,"truncateTextSize",9),h=_(t,"mainMenuBar",9),f=_(t,"escapeControlCharacters",9),y=_(t,"escapeUnicodeCharacters",9),w=_(t,"flattenColumns",9),b=_(t,"parser",9),k=_(t,"parseMemoizeOne",9),$=_(t,"validator",9),M=_(t,"validationParser",9),z=_(t,"indentation",9),H=_(t,"onChange",9),G=_(t,"onChangeMode",9),ee=_(t,"onSelect",9),te=_(t,"onUndo",9),je=_(t,"onRedo",9),B=_(t,"onRenderValue",9),pe=_(t,"onRenderMenu",9),$e=_(t,"onRenderContextMenu",9),ke=_(t,"onFocus",9),me=_(t,"onBlur",9),Y=_(t,"onSortModal",9),I=_(t,"onTransformModal",9),se=_(t,"onJSONEditorModal",9),T=Q(void 0,!0),E=Q(void 0,!0),R=Q(void 0,!0),ne=Q(void 0,!0),Se=Q(void 0,!0);Gf({onMount:Qr,onDestroy:Oo,getWindow:()=>ul(n(E)),hasFocus:()=>He&&document.hasFocus()||Mf(n(E)),onFocus:()=>{_t=!0,ke()&&ke()()},onBlur:()=>{_t=!1,me()&&me()()}});var K,F=Q(void 0,!0),ie=Q(void 0,!0),P=Q(void 0,!0),U=Q(void 0,!0),L=Q(void 0,!0),fe=Q(void 0,!0),J=Q(!1,!0),V=Q(!1,!0);function Ze(q){S(fe,(K=q)?e0(n(F),K.items):void 0)}function Je(q){return Oe.apply(this,arguments)}function Oe(){return(Oe=kt(function*(q){S(ve,void 0),yield Mn(q)})).apply(this,arguments)}function Xe(){S(J,!1),S(V,!1),Ge()}var Ne=Q(1e4,!0),Le=Q([],!0),lt=Q(void 0,!0),He=!1,_t=!1,O=Q(!1,!0),N=Q({},!0),D=Q(600,!0),re=Q(0,!0),he=18;function Me(q){S(ve,q)}function Ue(q){n(ve)&&q!==void 0&&(Co(q,gs(n(ve)))&&Co(q,nt(n(ve)))||(a("clearing selection: path does not exist anymore",n(ve)),S(ve,void 0)))}var be=Q(n(F)!==void 0?Wd({json:n(F)}):void 0,!0),ve=Q(Gi(p())?p():void 0,!0),vt=Q(void 0,!0),tt=Q(!1,!0);function Ee(q){if(!m()){a("onSortByHeader",q);var ue=q.sortDirection===_o.desc?-1:1;Nt(b0(n(F),[],q.path,ue),(ze,Be)=>({state:Be,sortedColumn:q}))}}Qr(()=>{n(ve)&&jr(nt(n(ve)))});var pt=Q(void 0,!0);function ln(q){if(q.json!==void 0||q.text!==void 0){var ue=n(F)!==void 0&&q.json!==void 0;x().add({type:"tree",undo:{patch:ue?[{op:"replace",path:"",value:q.json}]:void 0,json:q.json,text:q.text,documentState:q.documentState,textIsRepaired:q.textIsRepaired,selection:Yo(q.selection),sortedColumn:q.sortedColumn},redo:{patch:ue?[{op:"replace",path:"",value:n(F)}]:void 0,json:n(F),text:n(ie),documentState:n(be),textIsRepaired:n(tt),selection:Yo(n(ve)),sortedColumn:n(vt)}})}}var On=Q([],!0),en=Di(p0);function Wt(q,ue,ze,Be){Xs(()=>{var We;try{We=en(q,ue,ze,Be)}catch(et){We=[{path:[],message:"Failed to validate: "+et.message,severity:qo.warning}]}Bt(We,n(On))||(a("validationErrors changed:",We),S(On,We))},We=>a("validationErrors updated in ".concat(We," ms")))}function wn(){return a("validate"),n(P)?{parseError:n(P),isRepairable:!1}:(Wt(n(F),$(),b(),M()),pn(n(On))?void 0:{validationErrors:n(On)})}function Jt(q,ue){if(a("patch",q,ue),n(F)===void 0)throw new Error("Cannot apply patch: no JSON");var ze=n(F),Be={json:void 0,text:n(ie),documentState:n(be),selection:Yo(n(ve)),sortedColumn:n(vt),textIsRepaired:n(tt)},We=Zg(n(F),q),et=Ug(n(F),n(be),q),ot=gS(n(vt),q,n(Le)),at=typeof ue=="function"?ue(et.json,et.documentState,n(ve)):void 0;return S(F,at?.json!==void 0?at.json:et.json),S(be,at?.state!==void 0?at.state:et.documentState),S(ve,at?.selection!==void 0?at.selection:n(ve)),S(vt,at?.sortedColumn!==void 0?at.sortedColumn:ot),S(ie,void 0),S(tt,!1),S(U,void 0),S(L,void 0),S(P,void 0),x().add({type:"tree",undo:Te({patch:We},Be),redo:{patch:q,json:void 0,text:void 0,documentState:n(be),selection:Yo(n(ve)),sortedColumn:n(vt),textIsRepaired:n(tt)}}),{json:n(F),previousJson:ze,undo:We,redo:q}}function Nt(q,ue){a("handlePatch",q,ue);var ze={json:n(F),text:n(ie)},Be=Jt(q,ue);return Ct(ze,Be),Be}function Ct(q,ue){if((q.json!==void 0||q?.text!==void 0)&&H()){if(n(ie)!==void 0){var ze={text:n(ie),json:void 0};H()(ze,q,{contentErrors:wn(),patchResult:ue})}else if(n(F)!==void 0){var Be={text:void 0,json:n(F)};H()(Be,q,{contentErrors:wn(),patchResult:ue})}}}function Yt(q){a("pasted json as text",q),S(U,q)}function cn(q){a("pasted multiline text",{pastedText:q}),S(L,q)}function yt(q){var ue=parseInt(q[0],10),ze=[String(ue+1),...q.slice(1)];return Co(n(F),ze)?Gt(ze):Gt(q)}function Ge(){a("focus"),n(ne)&&(n(ne).focus(),n(ne).select())}function Ht(q){S(re,q.target.scrollTop)}function Ft(){n(ve)||S(ve,function(){if(vr(n(F))&&!pn(n(F))&&!pn(n(Le)))return Gt(["0",...n(Le)[0]])}())}function Nn(){if(n(tt)&&n(F)!==void 0){var q={json:n(F),text:n(ie)},ue={json:n(F),documentState:n(be),selection:n(ve),sortedColumn:n(vt),text:n(ie),textIsRepaired:n(tt)};S(ie,void 0),S(tt,!1),Ue(n(F)),ln(ue),Ct(q,void 0)}return{json:n(F),text:n(ie)}}function Mn(q){var{scrollToWhenVisible:ue=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ze=n(J)?Ai:0,Be=Hh(q,n(Le),N,he),We=Be-n(re)+ze+he,et=Tn(q);if(a("scrollTo",{path:q,top:Be,scrollTop:n(re),elem:et}),!n(R))return Promise.resolve();var ot=n(R).getBoundingClientRect();if(et&&!ue){var at=et.getBoundingClientRect();if(at.bottom>ot.top&&at.top<ot.bottom)return Promise.resolve()}var Vt=-Math.max(ze+2*he,ot.height/4);return new Promise(et?dn=>{c(et,{container:n(R),offset:Vt,duration:300,callback:()=>{hn(q),dn()}})}:dn=>{c(We,{container:n(R),offset:Vt,duration:300,callback:()=>{Yn(),hn(q),dn()}})})}function hn(q){var ue=Tn(q);if(ue&&n(R)){var ze=n(R).getBoundingClientRect(),Be=ue.getBoundingClientRect();if(Be.right>ze.right){var We=Be.right-ze.right;go(R,n(R).scrollLeft+=We)}if(Be.left<ze.left){var et=ze.left-Be.left;go(R,n(R).scrollLeft-=et)}}}function jr(q){(function(ue){if(n(R)){var{rowIndex:ze}=ko(ue,n(Le)),Be=Hh(ue,n(Le),N,he),We=Be+(N[ze]||he),et=he,ot=n(R).getBoundingClientRect(),at=n(re),Vt=n(re)+ot.height-et;if(We>Vt){var dn=We-Vt;go(R,n(R).scrollTop+=dn)}if(Be<at){var rn=at-Be;go(R,n(R).scrollTop-=rn)}}})(q),hn(q)}function Tn(q){var ue,ze,Be=n(Le).find(et=>ta(q.slice(1),et)),We=Be?q.slice(0,1).concat(Be):q;return(ue=(ze=n(R))===null||ze===void 0?void 0:ze.querySelector('td[data-path="'.concat(Cc(We),'"]')))!==null&&ue!==void 0?ue:void 0}function rr(q){var ue,{anchor:ze,left:Be,top:We,width:et,height:ot,offsetTop:at,offsetLeft:Vt,showTip:dn}=q,rn=function(oe){var{json:_e,documentState:Ke,selection:De,readOnly:Ie,onEditValue:xt,onEditRow:wt,onToggleEnforceString:Kt,onCut:Pn,onCopy:on,onPaste:Bn,onRemove:$t,onDuplicateRow:ar,onInsertBeforeRow:In,onInsertAfterRow:Xn,onRemoveRow:jn}=oe,mt=_e!==void 0,fn=!!De,gt=_e!==void 0&&De?Qe(_e,nt(De)):void 0,st=mt&&(Vn(De)||Rr(De)||mn(De)),qt=!Ie&&mt&&De!==void 0&&Qc(De),nr=qt&&!ir(gt),Mr=!Ie&&st,Wn=De!==void 0&&Xo(_e,Ke,nt(De));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>xt(),icon:ei,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!qt},width:"11em",items:[{type:"button",icon:ei,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>xt(),disabled:!qt},{type:"button",icon:Wn?_m:Em,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Kt(),disabled:!nr}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Pn(!0),icon:Zs,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Mr},width:"10em",items:[{type:"button",icon:Zs,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>Pn(!0),disabled:Ie||!st},{type:"button",icon:Zs,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>Pn(!1),disabled:Ie||!st}]},{type:"dropdown-button",main:{type:"button",onClick:()=>on(!0),icon:Ma,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!st},width:"12em",items:[{type:"button",icon:Ma,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>on(!1),disabled:!st},{type:"button",icon:Ma,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>on(!1),disabled:!st}]},{type:"button",onClick:()=>Bn(),icon:Sm,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Ie||!fn},{type:"button",onClick:()=>$t(),icon:Ed,text:"Remove",title:"Remove selected contents (Delete)",disabled:Ie||!st}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>wt(),icon:ei,text:"Edit row",title:"Edit the current row",disabled:Ie||!fn||!mt},{type:"button",onClick:()=>ar(),icon:Pm,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Ie||!fn||!mt},{type:"button",onClick:()=>In(),icon:Ks,text:"Insert before",title:"Insert a row before the current row",disabled:Ie||!fn||!mt},{type:"button",onClick:()=>Xn(),icon:Ks,text:"Insert after",title:"Insert a row after the current row",disabled:Ie||!fn||!mt},{type:"button",onClick:()=>jn(),icon:Ed,text:"Remove row",title:"Remove current row",disabled:Ie||!fn||!mt}]}]}]}({json:n(F),documentState:n(be),selection:n(ve),readOnly:m(),onEditValue:hr,onEditRow:Ln,onToggleEnforceString:ur,onCut:Ut,onCopy:it,onPaste:kn,onRemove:Ye,onDuplicateRow:$n,onInsertBeforeRow:Qn,onInsertAfterRow:At,onRemoveRow:un}),Rn=(ue=$e()(rn))!==null&&ue!==void 0?ue:rn;if(Rn!==!1){var Br={left:Be,top:We,offsetTop:at,offsetLeft:Vt,width:et,height:ot,anchor:ze,closeOnOuterClick:!0,onClose:()=>{He=!1,Ge()}};He=!0;var A=i(O0,{tip:dn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Rn,onRequestClose(){l(A),Ge()}},Br)}}function kr(q){if(!Pr(n(ve)))if(q&&(q.stopPropagation(),q.preventDefault()),q&&q.type==="contextmenu"&&q.target!==n(ne))rr({left:q.clientX,top:q.clientY,width:ma,height:ha,showTip:!1});else{var ue,ze=(ue=n(R))===null||ue===void 0?void 0:ue.querySelector(".jse-table-cell.jse-selected-value");if(ze)rr({anchor:ze,offsetTop:2,width:ma,height:ha,showTip:!1});else{var Be,We=(Be=n(R))===null||Be===void 0?void 0:Be.getBoundingClientRect();We&&rr({top:We.top+2,left:We.left+2,width:ma,height:ha,showTip:!1})}}}function Sr(q){rr({anchor:Ag(q.target,"BUTTON"),offsetTop:0,width:ma,height:ha,showTip:!0})}function hr(){if(!m()&&n(ve)){var q=nt(n(ve));ir(Qe(n(F),q))?Sn(q):S(ve,Gt(q))}}function Ln(){!m()&&n(ve)&&Sn(nt(n(ve)).slice(0,1))}function ur(){if(!m()&&mn(n(ve))){var q=n(ve).path,ue=ft(q),ze=Qe(n(F),q),Be=!Xo(n(F),n(be),q),We=Be?String(ze):bi(String(ze),b());a("handleToggleEnforceString",{enforceString:Be,value:ze,updatedValue:We}),Nt([{op:"replace",path:ue,value:We}],(et,ot)=>({state:wu(n(F),ot,q,{type:"value",enforceString:Be})}))}}function Pe(){return Xt.apply(this,arguments)}function Xt(){return(Xt=kt(function*(){if(a("apply pasted json",n(U)),n(U)){var{onPasteAsJson:q}=n(U);q(),setTimeout(Ge)}})).apply(this,arguments)}function kn(){return Un.apply(this,arguments)}function Un(){return(Un=kt(function*(){try{xe(yield navigator.clipboard.readText())}catch(q){console.error(q),S(O,!0)}})).apply(this,arguments)}function ge(){return qe.apply(this,arguments)}function qe(){return(qe=kt(function*(){a("apply pasted multiline text",n(L)),n(L)&&(xe(JSON.stringify(n(L))),setTimeout(Ge))})).apply(this,arguments)}function Ve(){a("clear pasted json"),S(U,void 0),Ge()}function Et(){a("clear pasted multiline text"),S(L,void 0),Ge()}function Lt(){G()(Or.text)}function Ut(q){return tn.apply(this,arguments)}function tn(){return(tn=kt(function*(q){yield w0({json:n(F),selection:n(ve),indentation:q?z():void 0,readOnly:m(),parser:b(),onPatch:Nt})})).apply(this,arguments)}function it(){return Dt.apply(this,arguments)}function Dt(){return Dt=kt(function*(){var q=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(F)!==void 0&&(yield k0({json:n(F),selection:n(ve),indentation:q?z():void 0,parser:b()}))}),Dt.apply(this,arguments)}function Ye(){_0({json:n(F),text:n(ie),selection:n(ve),keepSelection:!0,readOnly:m(),onChange:H(),onPatch:Nt})}function bn(q){m()||(a("extract",{path:q}),Nt(Gg(n(F),Gt(q))))}function $n(){(function(q){var{json:ue,selection:ze,columns:Be,readOnly:We,onPatch:et}=q;if(!We&&ue!==void 0&&ze&&Gs(ze)){var{rowIndex:ot,columnIndex:at}=ko(nt(ze),Be);Gr("duplicate row",{rowIndex:ot});var Vt=[String(ot)];et(Jg(ue,[Vt]),(dn,rn)=>({state:rn,selection:Gt(us({rowIndex:ot<ue.length?ot+1:ot,columnIndex:at},Be))}))}})({json:n(F),selection:n(ve),columns:n(Le),readOnly:m(),onPatch:Nt})}function Qn(){(function(q){var{json:ue,selection:ze,columns:Be,readOnly:We,onPatch:et}=q;if(!We&&ue!==void 0&&ze&&Gs(ze)){var{rowIndex:ot}=ko(nt(ze),Be);Gr("insert before row",{rowIndex:ot}),et(Ys(ue,[String(ot)],[{key:"",value:yr(ue[0])?{}:""}]))}})({json:n(F),selection:n(ve),columns:n(Le),readOnly:m(),onPatch:Nt})}function At(){(function(q){var{json:ue,selection:ze,columns:Be,readOnly:We,onPatch:et}=q;if(!We&&ue!==void 0&&ze&&Gs(ze)){var{rowIndex:ot,columnIndex:at}=ko(nt(ze),Be);Gr("insert after row",{rowIndex:ot});var Vt=ot+1,dn=[String(Vt)],rn=[{key:"",value:yr(ue[0])?{}:""}];et(Vt<ue.length?Ys(ue,dn,rn):Qd(ue,[],rn),(Rn,Br)=>({state:Br,selection:Gt(us({rowIndex:Vt,columnIndex:at},Be))}))}})({json:n(F),selection:n(ve),columns:n(Le),readOnly:m(),onPatch:Nt})}function un(){(function(q){var{json:ue,selection:ze,columns:Be,readOnly:We,onPatch:et}=q;if(!We&&ue!==void 0&&ze&&Gs(ze)){var{rowIndex:ot,columnIndex:at}=ko(nt(ze),Be);Gr("remove row",{rowIndex:ot}),et(Gc([[String(ot)]]),(Vt,dn)=>{var rn=ot<Vt.length?ot:ot>0?ot-1:void 0,Rn=rn!==void 0?Gt(us({rowIndex:rn,columnIndex:at},Be)):void 0;return Gr("remove row new selection",{rowIndex:ot,newRowIndex:rn,newSelection:Rn}),{state:dn,selection:Rn}})}})({json:n(F),selection:n(ve),columns:n(Le),readOnly:m(),onPatch:Nt})}function Mt(){return(Mt=kt(function*(q){yield C0({char:q,selectInside:!1,json:n(F),selection:n(ve),readOnly:m(),parser:b(),onPatch:Nt,onReplaceJson:Fe,onSelect:Me})})).apply(this,arguments)}function le(q){var ue;q.preventDefault(),xe((ue=q.clipboardData)===null||ue===void 0?void 0:ue.getData("text/plain"))}function xe(q){q!==void 0&&S0({clipboardText:q,json:n(F),selection:n(ve),readOnly:m(),parser:b(),onPatch:Nt,onChangeText:Ot,onPasteMultilineText:cn,openRepairModal:or})}function Fe(q,ue){var ze={json:n(F),text:n(ie)},Be={json:n(F),documentState:n(be),selection:n(ve),sortedColumn:n(vt),text:n(ie),textIsRepaired:n(tt)},We=mo(q,n(be)),et=typeof ue=="function"?ue(q,We,n(ve)):void 0;S(F,et?.json!==void 0?et.json:q),S(be,et?.state!==void 0?et.state:We),S(ve,et?.selection!==void 0?et.selection:n(ve)),S(vt,void 0),S(ie,void 0),S(tt,!1),S(P,void 0),Ue(n(F)),ln(Be),Ct(ze,void 0)}function Ot(q,ue){a("handleChangeText");var ze={json:n(F),text:n(ie)},Be={json:n(F),documentState:n(be),selection:n(ve),sortedColumn:n(vt),text:n(ie),textIsRepaired:n(tt)};try{S(F,k()(q)),S(be,mo(n(F),n(be))),S(ie,void 0),S(tt,!1),S(P,void 0)}catch(et){try{S(F,k()(Zo(q))),S(be,mo(n(F),n(be))),S(ie,q),S(tt,!0),S(P,void 0)}catch{S(F,void 0),S(be,void 0),S(ie,q),S(tt,!1),S(P,n(ie)!==""?li(n(ie),et.message||String(et)):void 0)}}if(typeof ue=="function"){var We=ue(n(F),n(be),n(ve));S(F,We?.json!==void 0?We.json:n(F)),S(be,We?.state!==void 0?We.state:n(be)),S(ve,We?.selection!==void 0?We.selection:n(ve))}Ue(n(F)),ln(Be),Ct(ze,void 0)}function nn(q){a("select validation error",q),S(ve,Gt(q.path)),Mn(q.path)}function Tt(q){if(n(F)!==void 0){var{id:ue,onTransform:ze,onClose:Be}=q,We=q.rootPath||[];He=!0,I()({id:ue||u,json:n(F),rootPath:We||[],onTransform:et=>{ze?ze({operations:et,json:n(F),transformedJson:Mo(n(F),et)}):(a("onTransform",We,et),Nt(et))},onClose:()=>{He=!1,setTimeout(Ge),Be&&Be()}})}}function Sn(q){a("openJSONEditorModal",{path:q}),He=!0,se()({content:{json:Qe(n(F),q)},path:q,onPatch:Nt,onClose:()=>{He=!1,setTimeout(Ge)}})}function or(q,ue){S(Se,{text:q,onParse:ze=>cl(ze,Be=>ll(Be,b())),onRepair:Eg,onApply:ue,onClose:Ge})}function An(){(function(q){m()||n(F)===void 0||(He=!0,Y()({id:d,json:n(F),rootPath:q,onSort:ue=>{var{operations:ze,itemPath:Be,direction:We}=ue;a("onSort",ze,q,Be,We),Nt(ze,(et,ot)=>({state:ot,sortedColumn:{path:Be,sortDirection:We===-1?_o.desc:_o.asc}}))},onClose:()=>{He=!1,setTimeout(Ge)}}))})([])}function Zt(){Tt({rootPath:[]})}function Rt(q){a("openFind",{findAndReplace:q}),S(J,!1),S(V,!1),Yn(),S(J,!0),S(V,q)}function _n(){if(!m()&&x().canUndo){var q=x().undo();if(Kc(q)){var ue={json:n(F),text:n(ie)};S(F,q.undo.patch?Mo(n(F),q.undo.patch):q.undo.json),S(be,q.undo.documentState),S(ve,q.undo.selection),S(vt,q.undo.sortedColumn),S(ie,q.undo.text),S(tt,q.undo.textIsRepaired),S(P,void 0),a("undo",{item:q,json:n(F)}),Ct(ue,q.undo.patch&&q.redo.patch?{json:n(F),previousJson:ue.json,redo:q.undo.patch,undo:q.redo.patch}:void 0),Ge(),n(ve)&&Mn(nt(n(ve)),{scrollToWhenVisible:!1})}else te()(q)}}function Fr(){if(!m()&&x().canRedo){var q=x().redo();if(Kc(q)){var ue={json:n(F),text:n(ie)};S(F,q.redo.patch?Mo(n(F),q.redo.patch):q.redo.json),S(be,q.redo.documentState),S(ve,q.redo.selection),S(vt,q.redo.sortedColumn),S(ie,q.redo.text),S(tt,q.redo.textIsRepaired),S(P,void 0),a("redo",{item:q,json:n(F)}),Ct(ue,q.undo.patch&&q.redo.patch?{json:n(F),previousJson:ue.json,redo:q.redo.patch,undo:q.undo.patch}:void 0),Ge(),n(ve)&&Mn(nt(n(ve)),{scrollToWhenVisible:!1})}else je()(q)}}function jt(q){S(D,q.getBoundingClientRect().height)}ce(()=>(C(f()),C(y())),()=>{S(T,Rf({escapeControlCharacters:f(),escapeUnicodeCharacters:y()}))}),ce(()=>n(J),()=>{(function(q){if(n(R)){var ue=q?Ai:-100;n(R).scrollTo({top:go(R,n(R).scrollTop+=ue),left:n(R).scrollLeft})}})(n(J))}),ce(()=>C(j()),()=>{(function(q){var ue={json:n(F)},ze=Wi(q)?q.text!==n(ie):!Bt(ue.json,q.json);if(a("update external content",{isChanged:ze}),ze){var Be={json:n(F),documentState:n(be),selection:n(ve),sortedColumn:n(vt),text:n(ie),textIsRepaired:n(tt)};if(Wi(q))try{S(F,k()(q.text)),S(be,mo(n(F),n(be))),S(ie,q.text),S(tt,!1),S(P,void 0)}catch(We){try{S(F,k()(Zo(q.text))),S(be,mo(n(F),n(be))),S(ie,q.text),S(tt,!0),S(P,void 0)}catch{S(F,void 0),S(be,void 0),S(ie,q.text),S(tt,!1),S(P,n(ie)!==""?li(n(ie),We.message||String(We)):void 0)}}else S(F,q.json),S(be,mo(n(F),n(be))),S(ie,void 0),S(tt,!1),S(P,void 0);Ue(n(F)),S(vt,void 0),ln(Be)}})(j())}),ce(()=>C(p()),()=>{(function(q){Bt(n(ve),q)||(a("applyExternalSelection",{selection:n(ve),externalSelection:q}),Gi(q)&&S(ve,q))})(p())}),ce(()=>(n(Le),n(F),C(w()),n(Ne)),()=>{S(Le,vr(n(F))?function(q,ue){var ze=new Set(ue.map(ft)),Be=new Set(q.map(ft));for(var We of ze)Be.has(We)||ze.delete(We);for(var et of Be)ze.has(et)||ze.add(et);return[...ze].map(so)}(vS(n(F),w(),n(Ne)),n(Le)):[])}),ce(()=>(n(F),n(Le)),()=>{S(lt,!(!n(F)||pn(n(Le))))}),ce(()=>(n(F),n(Ne)),()=>{S(r,Array.isArray(n(F))&&n(F).length>n(Ne))}),ce(()=>(n(re),n(D),n(F),n(J),Ai),()=>{S(o,pS(n(re),n(D),n(F),N,he,n(J)?Ai:0))}),ce(()=>n(F),()=>{n(F),n(R)&&n(R).scrollTo({top:n(R).scrollTop,left:n(R).scrollLeft})}),ce(()=>n(ve),()=>{var q;q=n(ve),Bt(q,p())||(a("onSelect",q),ee()(q))}),ce(()=>(C(m()),C(v()),C(b()),n(T),n(F),n(be),C(B())),()=>{S(pt,{mode:Or.table,readOnly:m(),truncateTextSize:v(),parser:b(),normalization:n(T),getJson:()=>n(F),getDocumentState:()=>n(be),findElement:Tn,findNextInside:yt,focus:Ge,onPatch:(q,ue)=>Nt(function(ze,Be){return ze.flatMap(We=>{if(cf(We)){var et=so(We.path);if(et.length>0){for(var ot=[We],at=an(et);at.length>0&&!Co(Be,at);)ot.unshift({op:"add",path:ft(at),value:{}}),at=an(at);return ot}}return We})}(q,n(F)),ue),onSelect:Me,onFind:Rt,onPasteJson:Yt,onRenderValue:B()})}),ce(()=>(n(F),C($()),C(b()),C(M())),()=>{Wt(n(F),$(),b(),M())}),ce(()=>(n(On),n(Le)),()=>{S(s,hS(n(On),n(Le)))}),En(),zt(!0);var tr=E_();Re("mousedown",ja,function(q){!yi(q.target,ue=>ue===n(E))&&Pr(n(ve))&&(a("click outside the editor, exit edit mode"),S(ve,Yo(n(ve))),_t&&n(ne)&&(n(ne).focus(),n(ne).blur()),a("blur (outside editor)"),n(ne)&&n(ne).blur())});var yn,Fn=ht(tr),rt=W(Fn),zn=q=>{(function(ue,ze){ct(ze,!1);var Be=_(ze,"containsValidArray",9),We=_(ze,"readOnly",9),et=_(ze,"showSearch",13,!1),ot=_(ze,"history",9),at=_(ze,"onSort",9),Vt=_(ze,"onTransform",9),dn=_(ze,"onContextMenu",9),rn=_(ze,"onUndo",9),Rn=_(ze,"onRedo",9),Br=_(ze,"onRenderMenu",9);function A(){et(!et())}var oe=Q(void 0,!0),_e=Q(void 0,!0);ce(()=>(C(We()),C(at()),C(Be()),C(Vt()),C(dn()),C(rn()),C(ot()),C(Rn())),()=>{S(oe,We()?[{type:"space"}]:[{type:"button",icon:Tc,title:"Sort",className:"jse-sort",onClick:at(),disabled:We()||!Be()},{type:"button",icon:Nc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Vt(),disabled:We()||!Be()},{type:"button",icon:lu,title:"Search (Ctrl+F)",className:"jse-search",onClick:A,disabled:!Be()},{type:"button",icon:Om,title:If,className:"jse-contextmenu",onClick:dn()},{type:"separator"},{type:"button",icon:gf,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:rn(),disabled:!ot().canUndo},{type:"button",icon:mf,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Rn(),disabled:!ot().canRedo},{type:"space"}])}),ce(()=>(C(Br()),n(oe)),()=>{S(_e,Br()(n(oe))||n(oe))}),En(),zt(!0),Ou(ue,{get items(){return n(_e)}}),ut()})(q,{get containsValidArray(){return n(lt)},get readOnly(){return m()},get history(){return x()},onSort:An,onTransform:Zt,onUndo:_n,onRedo:Fr,onContextMenu:Sr,get onRenderMenu(){return pe()},get showSearch(){return n(J)},set showSearch(ue){S(J,ue)},$$legacy:!0})};ye(rt,q=>{h()&&q(zn)});var mr=ae(rt,2),It=q=>{var ue=__(),ze=ht(ue),Be=W(ze);Be.readOnly=!0,er(Be,at=>S(ne,at),()=>n(ne));var We=ae(ze,2),et=at=>{var Vt=k_(),dn=ht(Vt);y0(W(dn),{get json(){return n(F)},get documentState(){return n(be)},get parser(){return b()},get showSearch(){return n(J)},get showReplace(){return n(V)},get readOnly(){return m()},get columns(){return n(Le)},onSearch:Ze,onFocus:Je,onPatch:Nt,onClose:Xe});var rn=ae(dn,2),Rn=W(rn),Br=W(Rn),A=W(Br),oe=W(A),_e=W(oe),Ke=st=>{var qt=lr(),nr=Ce(()=>(C(qs),n(s),Z(()=>{var sr;return qs([],(sr=n(s))===null||sr===void 0?void 0:sr.root)}))),Mr=ht(qt),Wn=sr=>{var Ar=h_();oi(W(Ar),{get validationError(){return n(nr)},get onExpand(){return So}}),X(sr,Ar)};ye(Mr,sr=>{n(nr)&&sr(Wn)}),X(st,qt)};ye(_e,st=>{C(pn),n(s),Z(()=>{var qt;return!pn((qt=n(s))===null||qt===void 0?void 0:qt.root)})&&st(Ke)});var De=ae(oe);pr(De,1,()=>n(Le),wr,(st,qt)=>{var nr=m_();(function(Mr,Wn){ct(Wn,!1);var sr=Q(void 0,!0),Ar=Q(void 0,!0),sa=Q(void 0,!0),lo=_(Wn,"path",9),$o=_(Wn,"sortedColumn",9),Wo=_(Wn,"readOnly",9),Po=_(Wn,"onSort",9);ce(()=>(C(lo()),ao),()=>{S(sr,pn(lo())?"values":ao(lo()))}),ce(()=>(C($o()),C(lo())),()=>{var Jn;S(Ar,$o()&&Bt(lo(),(Jn=$o())===null||Jn===void 0?void 0:Jn.path)?$o().sortDirection:void 0)}),ce(()=>(n(Ar),uh),()=>{S(sa,n(Ar)?uh[n(Ar)]:void 0)}),En(),zt(!0);var Ir,qr=o_(),co=W(qr),ia=W(co),uo=ae(co,2),dr=Jn=>{var br=r_(),Ho=W(br),Os=Ce(()=>(n(Ar),C(_o),C(Sa),C(mv),Z(()=>n(Ar)===_o.asc?Sa:mv)));sn(Ho,{get data(){return n(Os)}}),Ae(()=>Cn(br,"title","Currently sorted in ".concat(n(sa)," order"))),X(Jn,br)};ye(uo,Jn=>{n(Ar)!==void 0&&Jn(dr)}),Ae((Jn,br)=>{Ir=Pt(qr,1,"jse-column-header svelte-2i3vdx",null,Ir,Jn),Cn(qr,"title",Wo()?n(sr):n(sr)+" (Click to sort the data by this column)"),dt(ia,br)},[()=>({"jse-readonly":Wo()}),()=>(C(pa),n(sr),C(50),Z(()=>pa(n(sr),50)))],Ce),Re("click",qr,function(){Wo()||Po()({path:lo(),sortDirection:n(Ar)===_o.asc?_o.desc:_o.asc})}),X(Mr,qr),ut()})(W(nr),{get path(){return n(qt)},get sortedColumn(){return n(vt)},get readOnly(){return m()},onSort:Ee}),X(st,nr)});var Ie=ae(De),xt=st=>{var qt=g_(),nr=W(qt),Mr=Ce(()=>(n(F),Z(()=>Array.isArray(n(F))?n(F).length:0)));(function(Wn,sr){ct(sr,!1);var Ar=_(sr,"count",9),sa=_(sr,"maxSampleCount",9),lo=_(sr,"readOnly",9),$o=_(sr,"onRefresh",9);zt(!0);var Wo,Po=p_();sn(W(Po),{get data(){return gj}}),Ae(Ir=>{Wo=Pt(Po,1,"jse-column-header svelte-fzj761",null,Wo,Ir),Cn(Po,"title","The Columns are created by sampling ".concat(sa()," items out of ").concat(Ar(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")},[()=>({"jse-readonly":lo()})],Ce),Re("click",Po,()=>$o()()),X(Wn,Po),ut()})(nr,{get count(){return n(Mr)},get maxSampleCount(){return n(Ne)},get readOnly(){return m()},onRefresh:()=>S(Ne,1/0)}),X(st,qt)};ye(Ie,st=>{n(r)&&st(xt)});var wt,Kt,Pn=ae(A),on=W(Pn),Bn=ae(Pn);pr(Bn,1,()=>(n(o),Z(()=>n(o).visibleItems)),wr,(st,qt,nr)=>{var Mr=w_(),Wn=Ce(()=>(n(o),Z(()=>n(o).startIndex+nr))),sr=Ce(()=>(n(s),C(n(Wn)),Z(()=>n(s).rows[n(Wn)]))),Ar=Ce(()=>(C(qs),C(n(Wn)),C(n(sr)),Z(()=>{var Ir;return qs([String(n(Wn))],(Ir=n(sr))===null||Ir===void 0?void 0:Ir.row)}))),sa=Ce(()=>(C(Jo),n(F),n(fe),C(n(Wn)),Z(()=>Jo(n(F),n(fe),[String(n(Wn))])))),lo=W(Mr);gg(lo,()=>n(Wn),Ir=>{var qr=b_(),co=W(qr),ia=ae(co),uo=dr=>{oi(dr,{get validationError(){return n(Ar)},get onExpand(){return So}})};ye(ia,dr=>{n(Ar)&&dr(uo)}),Yr(qr,(dr,Jn)=>wc?.(dr,Jn),()=>dr=>function(Jn,br){N[br]=Jn.getBoundingClientRect().height}(dr,n(Wn))),Ae(()=>{var dr;return dt(co,"".concat((dr=n(Wn))!==null&&dr!==void 0?dr:""," "))}),X(Ir,qr)});var $o=ae(lo);pr($o,1,()=>n(Le),wr,(Ir,qr,co,ia)=>{var uo,dr=j_(),Jn=Ce(()=>(C(n(Wn)),n(qr),Z(()=>[String(n(Wn))].concat(n(qr))))),br=Ce(()=>(C(Qe),n(qt),n(qr),Z(()=>Qe(n(qt),n(qr))))),Ho=Ce(()=>(C(mn),n(ve),C(ta),C(n(Jn)),Z(()=>mn(n(ve))&&ta(n(ve).path,n(Jn))))),Os=Ce(()=>(C(n(sr)),Z(()=>{var Cr;return(Cr=n(sr))===null||Cr===void 0?void 0:Cr.columns[co]}))),$s=Ce(()=>(C(qs),C(n(Jn)),C(n(Os)),Z(()=>qs(n(Jn),n(Os))))),ji=W(dr),Ps=W(ji),xi=Cr=>{var eo=Ce(()=>(C(Yc),C(Jo),n(qt),C(n(sa)),n(qr),Z(()=>Yc(Jo(n(qt),n(sa),n(qr)))))),wi=Ce(()=>(C(n(eo)),Z(()=>!!n(eo)&&n(eo).some(rs=>rs.active)))),ki=Ce(()=>(C(pn),C(n(eo)),Z(()=>!pn(n(eo)))));(function(rs,Wr){ct(Wr,!1);var Si=_(Wr,"path",9),ev=_(Wr,"value",9),tv=_(Wr,"parser",9),z0=_(Wr,"isSelected",9),R0=_(Wr,"containsSearchResult",9),N0=_(Wr,"containsActiveSearchResult",9),M0=_(Wr,"onEdit",9);zt(!0);var nv,pl=n_(),T0=W(pl);Ae((_i,A0)=>{nv=Pt(pl,1,"jse-inline-value svelte-h57m0p",null,nv,_i),dt(T0,A0)},[()=>({"jse-selected":z0(),"jse-highlight":R0(),"jse-active":N0()}),()=>(C(pa),C(tv()),C(ev()),C(50),Z(()=>{var _i;return pa((_i=tv().stringify(ev()))!==null&&_i!==void 0?_i:"",50)}))],Ce),Re("dblclick",pl,()=>M0()(Si())),X(rs,pl),ut()})(Cr,{get path(){return n(Jn)},get value(){return n(br)},get parser(){return b()},get isSelected(){return n(Ho)},get containsSearchResult(){return n(ki)},get containsActiveSearchResult(){return n(wi)},onEdit:Sn})},$u=Cr=>{var eo=Ce(()=>(C(Jo),n(F),n(fe),C(n(Jn)),Z(()=>{var Wr;return(Wr=Jo(n(F),n(fe),n(Jn)))===null||Wr===void 0?void 0:Wr.searchResults}))),wi=Ce(()=>n(br)!==void 0?n(br):""),ki=Ce(()=>(C(Xo),n(F),n(be),C(n(Jn)),Z(()=>Xo(n(F),n(be),n(Jn))))),rs=Ce(()=>n(Ho)?n(ve):void 0);g0(Cr,{get path(){return n(Jn)},get value(){return n(wi)},get enforceString(){return n(ki)},get selection(){return n(rs)},get searchResultItems(){return n(eo)},get context(){return n(pt)}})};ye(Ps,Cr=>{C(ir),C(n(br)),Z(()=>ir(n(br)))?Cr(xi):Cr($u,!1)});var Pu=ae(Ps),zu=Cr=>{var eo=y_();za(W(eo),{selected:!0,onContextMenu:rr}),X(Cr,eo)};ye(Pu,Cr=>{C(m()),C(n(Ho)),C(Pr),n(ve),Z(()=>!m()&&n(Ho)&&!Pr(n(ve)))&&Cr(zu)});var Ko=ae(ji,2),ns=Cr=>{oi(Cr,{get validationError(){return n($s)},get onExpand(){return So}})};ye(Ko,Cr=>{n($s)&&Cr(ns)}),Ae((Cr,eo)=>{Cn(dr,"data-path",Cr),uo=Pt(ji,1,"jse-value-outer svelte-u14cgx",null,uo,eo)},[()=>(C(Cc),C(n(Jn)),Z(()=>Cc(n(Jn)))),()=>({"jse-selected-value":n(Ho)})],Ce),X(Ir,dr)});var Wo=ae($o),Po=Ir=>{X(Ir,x_())};ye(Wo,Ir=>{n(r)&&Ir(Po)}),X(st,Mr)});var $t,ar=W(ae(Bn));er(rn,st=>S(R,st),()=>n(R)),Yr(rn,(st,qt)=>wc?.(st,qt),()=>jt),Lr(()=>Re("scroll",rn,Ht));var In=ae(rn,2),Xn=st=>{var qt=Ce(()=>(n(U),Z(()=>"You pasted a JSON ".concat(Array.isArray(n(U).contents)?"array":"object"," as text")))),nr=Ce(()=>[{icon:Va,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:Pe},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Ve}]);jo(st,{type:"info",get message(){return n(qt)},get actions(){return n(nr)}})};ye(In,st=>{n(U)&&st(Xn)});var jn=ae(In,2),mt=st=>{var qt=Ce(()=>[{icon:Va,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:ge},{text:"Leave as is",title:"Keep the pasted array",onClick:Et}]);jo(st,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(qt)}})};ye(jn,st=>{n(L)&&st(mt)});var fn=ae(jn,2),gt=st=>{var qt=Ce(()=>m()?[]:[{icon:bf,text:"Ok",title:"Accept the repaired document",onClick:Nn},{icon:Mc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Lt}]);jo(st,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(qt)},onClose:Ge})};ye(fn,st=>{n(tt)&&st(gt)}),Yf(ae(fn,2),{get validationErrors(){return n(On)},selectError:nn}),Ae((st,qt,nr)=>{wt=Pt(Pn,1,"jse-table-invisible-start-section svelte-u14cgx",null,wt,st),Cn(on,"colspan",(n(Le),Z(()=>n(Le).length))),Kt=Io(on,"",Kt,qt),Cn(ar,"colspan",(n(Le),Z(()=>n(Le).length))),$t=Io(ar,"",$t,nr)},[()=>({"jse-search-box-background":n(J)}),()=>({height:(n(o),Z(()=>n(o).startHeight+"px"))}),()=>({height:(n(o),Z(()=>n(o).endHeight+"px"))})],Ce),X(at,Vt)},ot=(at,Vt)=>{var dn=Rn=>{var Br=S_(),A=ht(Br),oe=Ce(()=>m()?[]:[{icon:Mc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Lt}]);jo(A,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(oe)}}),E0(ae(A,2),{get text(){return n(ie)},get json(){return n(F)},get indentation(){return z()},get parser(){return b()}}),X(Rn,Br)},rn=Rn=>{v_(Rn,{get text(){return n(ie)},get json(){return n(F)},get readOnly(){return m()},get parser(){return b()},openJSONEditorModal:Sn,extractPath:bn,get onChangeMode(){return G()},onClick:()=>{Ge()}})};ye(at,Rn=>{n(P)&&n(ie)!==void 0&&n(ie)!==""?Rn(dn):Rn(rn,!1)},Vt)};ye(We,at=>{n(lt)?at(et):at(ot,!1)}),Re("paste",Be,le),X(q,ue)},io=q=>{X(q,C_())};ye(mr,q=>{g?q(io,!1):q(It)}),er(Fn,q=>S(E,q),()=>n(E));var gr=ae(Fn,2),_r=q=>{h0(q,{onClose:()=>S(O,!1)})};ye(gr,q=>{n(O)&&q(_r)});var xr=ae(gr,2),Vr=q=>{m0(q,La(()=>n(Se),{onClose:()=>{var ue;(ue=n(Se))===null||ue===void 0||ue.onClose(),S(Se,void 0)}}))};return ye(xr,q=>{n(Se)&&q(Vr)}),Ae(q=>yn=Pt(Fn,1,"jse-table-mode svelte-u14cgx",null,yn,q),[()=>({"no-main-menu":!h()})],Ce),Re("mousedown",Fn,function(q){if(q.buttons===1||q.buttons===2){var ue=q.target;ue.isContentEditable||Ge();var ze=Ig(ue);if(ze){if(Pr(n(ve))&&Yi(n(F),n(ve),ze))return;S(ve,Gt(ze)),q.preventDefault()}}}),Re("keydown",Fn,function(q){var ue=_a(q);if(a("keydown",{combo:ue,key:q.key}),ue==="Ctrl+X"&&(q.preventDefault(),Ut(!0)),ue==="Ctrl+Shift+X"&&(q.preventDefault(),Ut(!1)),ue==="Ctrl+C"&&(q.preventDefault(),it(!0)),ue==="Ctrl+Shift+C"&&(q.preventDefault(),it(!1)),ue==="Ctrl+D"&&(q.preventDefault(),$n()),ue!=="Delete"&&ue!=="Backspace"||(q.preventDefault(),Ye()),ue==="Insert"&&q.preventDefault(),ue==="Ctrl+A"&&q.preventDefault(),ue==="Ctrl+Q"&&kr(q),ue==="ArrowLeft"&&(q.preventDefault(),Ft(),n(ve))){var ze=function(Vt,dn){var{rowIndex:rn,columnIndex:Rn}=ko(nt(dn),Vt);return Rn>0?Gt(us({rowIndex:rn,columnIndex:Rn-1},Vt)):dn}(n(Le),n(ve));S(ve,ze),jr(nt(ze))}if(ue==="ArrowRight"&&(q.preventDefault(),Ft(),n(ve))){var Be=function(Vt,dn){var{rowIndex:rn,columnIndex:Rn}=ko(nt(dn),Vt);return Rn<Vt.length-1?Gt(us({rowIndex:rn,columnIndex:Rn+1},Vt)):dn}(n(Le),n(ve));S(ve,Be),jr(nt(Be))}if(ue==="ArrowUp"&&(q.preventDefault(),Ft(),n(ve))){var We=function(Vt,dn){var{rowIndex:rn,columnIndex:Rn}=ko(nt(dn),Vt);return rn>0?Gt(us({rowIndex:rn-1,columnIndex:Rn},Vt)):dn}(n(Le),n(ve));S(ve,We),jr(nt(We))}if(ue==="ArrowDown"&&(q.preventDefault(),Ft(),n(ve))){var et=function(Vt,dn,rn){var{rowIndex:Rn,columnIndex:Br}=ko(nt(rn),dn);return Rn<Vt.length-1?Gt(us({rowIndex:Rn+1,columnIndex:Br},dn)):rn}(n(F),n(Le),n(ve));S(ve,et),jr(nt(et))}if(ue==="Enter"&&n(ve)&&mn(n(ve))){q.preventDefault();var ot=n(ve).path;ir(Qe(n(F),ot))?Sn(ot):m()||S(ve,Te(Te({},n(ve)),{},{edit:!0}))}if(ue.replace(/^Shift\+/,"").length===1&&n(ve))return q.preventDefault(),void function(Vt){Mt.apply(this,arguments)}(q.key);if(ue==="Ctrl+Enter"&&mn(n(ve))){q.preventDefault();var at=Qe(n(F),n(ve).path);xu(at)&&window.open(String(at),"_blank")}ue==="Escape"&&n(ve)&&(q.preventDefault(),S(ve,void 0)),ue==="Ctrl+F"&&(q.preventDefault(),Rt(!1)),ue==="Ctrl+H"&&(q.preventDefault(),Rt(!0)),ue==="Ctrl+Z"&&(q.preventDefault(),_n()),ue==="Ctrl+Shift+Z"&&(q.preventDefault(),Fr())}),Re("contextmenu",Fn,kr),X(e,tr),bt(t,"validate",wn),bt(t,"patch",Jt),bt(t,"focus",Ge),bt(t,"acceptAutoRepair",Nn),bt(t,"scrollTo",Mn),bt(t,"findElement",Tn),bt(t,"openTransformModal",Tt),ut({validate:wn,patch:Jt,focus:Ge,acceptAutoRepair:Nn,scrollTo:Mn,findElement:Tn,openTransformModal:Tt})}function Kh(e,t){ct(t,!1);var r=_(t,"content",8),o=_(t,"selection",12),s=_(t,"readOnly",8),a=_(t,"indentation",8),i=_(t,"tabSize",8),l=_(t,"truncateTextSize",8),c=_(t,"externalMode",8),d=_(t,"mainMenuBar",8),u=_(t,"navigationBar",8),g=_(t,"statusBar",8),m=_(t,"askToFormat",8),j=_(t,"escapeControlCharacters",8),p=_(t,"escapeUnicodeCharacters",8),x=_(t,"flattenColumns",8),v=_(t,"parser",8),h=_(t,"parseMemoizeOne",8),f=_(t,"validator",8),y=_(t,"validationParser",8),w=_(t,"pathParser",8),b=_(t,"insideModal",8),k=_(t,"onChange",8),$=_(t,"onChangeMode",8),M=_(t,"onSelect",8),z=_(t,"onRenderValue",8),H=_(t,"onClassName",8),G=_(t,"onRenderMenu",8),ee=_(t,"onRenderContextMenu",8),te=_(t,"onError",8),je=_(t,"onFocus",8),B=_(t,"onBlur",8),pe=_(t,"onSortModal",8),$e=_(t,"onTransformModal",8),ke=_(t,"onJSONEditorModal",8),me=Q(),Y=Q(),I=Q(),se=Nr("jsoneditor:JSONEditorRoot"),T=Q(P0({onChange:O=>S(T,O)}).get()),E=Q(c());function R(O){if(mh(O)){S(E,O.undo.mode);var N=n(T).items(),D=N.findIndex(he=>he===O),re=D!==-1?N[D-1]:void 0;se("handleUndo",{index:D,item:O,items:N,prevItem:re}),re&&o(re.redo.selection),$()(n(E))}}function ne(O){if(mh(O)){S(E,O.redo.mode);var N=n(T).items(),D=N.findIndex(he=>he===O),re=D!==-1?N[D+1]:void 0;se("handleRedo",{index:D,item:O,items:N,nextItem:re}),re&&o(re.undo.selection),$()(n(E))}}var Se=Q(),K={type:"separator"},F=Q(),ie=Q();function P(O){if(n(me))return n(me).patch(O);if(n(Y))return n(Y).patch(O);if(n(I))return n(I).patch(O);throw new Error('Method patch is not available in mode "'.concat(n(E),'"'))}function U(O,N){if(n(me))return n(me).expand(O,N);if(n(I))return n(I).expand(O,N);throw new Error('Method expand is not available in mode "'.concat(n(E),'"'))}function L(O,N){if(n(me))return n(me).collapse(O,N);if(n(I))return n(I).collapse(O);throw new Error('Method collapse is not available in mode "'.concat(n(E),'"'))}function fe(O){if(n(I))n(I).openTransformModal(O);else if(n(me))n(me).openTransformModal(O);else{if(!n(Y))throw new Error('Method transform is not available in mode "'.concat(n(E),'"'));n(Y).openTransformModal(O)}}function J(){if(n(I))return n(I).validate();if(n(me))return n(me).validate();if(n(Y))return n(Y).validate();throw new Error('Method validate is not available in mode "'.concat(n(E),'"'))}function V(){return n(me)?n(me).acceptAutoRepair():r()}function Ze(O){if(n(me))return n(me).scrollTo(O);if(n(Y))return n(Y).scrollTo(O);throw new Error('Method scrollTo is not available in mode "'.concat(n(E),'"'))}function Je(O){if(n(me))return n(me).findElement(O);if(n(Y))return n(Y).findElement(O);throw new Error('Method findElement is not available in mode "'.concat(n(E),'"'))}function Oe(){n(I)?n(I).focus():n(me)?n(me).focus():n(Y)&&n(Y).focus()}function Xe(){return Ne.apply(this,arguments)}function Ne(){return(Ne=kt(function*(){n(I)&&(yield n(I).refresh())})).apply(this,arguments)}ce(()=>C(c()),()=>{(function(O){if(O!==n(E)){var N={type:"mode",undo:{mode:n(E),selection:void 0},redo:{mode:O,selection:void 0}};n(E)==="text"&&n(I)&&n(I).flush(),se("add history item",N),n(T).add(N),S(E,O)}})(c())}),ce(()=>(n(E),C($())),()=>{S(Se,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(E),")"),className:"jse-group-button jse-first"+(n(E)===Or.text?" jse-selected":""),onClick:()=>$()(Or.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(E),")"),className:"jse-group-button "+(n(E)===Or.tree?" jse-selected":""),onClick:()=>$()(Or.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(E),")"),className:"jse-group-button jse-last"+(n(E)===Or.table?" jse-selected":""),onClick:()=>$()(Or.table)}])}),ce(()=>(n(Se),C(G()),n(E),C(b()),C(s())),()=>{S(F,O=>{var N=Bd(O[0])?n(Se).concat(O):n(Se).concat(K,O),D=kd(N);return G()(N,{mode:n(E),modal:b(),readOnly:s()})||D})}),ce(()=>(C(ee()),n(E),C(b()),C(s()),C(o())),()=>{S(ie,O=>{var N,D=kd(O);return(N=ee()(O,{mode:n(E),modal:b(),readOnly:s(),selection:o()}))!==null&&N!==void 0?N:!s()&&D})}),En(),zt();var Le=lr(),lt=ht(Le),He=O=>{er(t_(O,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(T)},get readOnly(){return s()},get indentation(){return a()},get tabSize(){return i()},get mainMenuBar(){return d()},get statusBar(){return g()},get askToFormat(){return m()},get escapeUnicodeCharacters(){return p()},get parser(){return v()},get validator(){return f()},get validationParser(){return y()},get onChange(){return k()},get onChangeMode(){return $()},get onSelect(){return M()},onUndo:R,onRedo:ne,get onError(){return te()},get onFocus(){return je()},get onBlur(){return B()},get onRenderMenu(){return n(F)},get onSortModal(){return pe()},get onTransformModal(){return $e()},$$legacy:!0}),N=>S(I,N),()=>n(I))},_t=(O,N)=>{var D=he=>{er(O_(he,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(T)},get readOnly(){return s()},get truncateTextSize(){return l()},get mainMenuBar(){return d()},get escapeControlCharacters(){return j()},get escapeUnicodeCharacters(){return p()},get flattenColumns(){return x()},get parser(){return v()},get parseMemoizeOne(){return h()},get validator(){return f()},get validationParser(){return y()},get indentation(){return a()},get onChange(){return k()},get onChangeMode(){return $()},get onSelect(){return M()},onUndo:R,onRedo:ne,get onRenderValue(){return z()},get onFocus(){return je()},get onBlur(){return B()},get onRenderMenu(){return n(F)},get onRenderContextMenu(){return n(ie)},get onSortModal(){return pe()},get onTransformModal(){return $e()},get onJSONEditorModal(){return ke()},$$legacy:!0}),Me=>S(Y,Me),()=>n(Y))},re=he=>{er(lf(he,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(T)},get readOnly(){return s()},get indentation(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return d()},get navigationBar(){return u()},get escapeControlCharacters(){return j()},get escapeUnicodeCharacters(){return p()},get parser(){return v()},get parseMemoizeOne(){return h()},get validator(){return f()},get validationParser(){return y()},get pathParser(){return w()},get onError(){return te()},get onChange(){return k()},get onChangeMode(){return $()},get onSelect(){return M()},onUndo:R,onRedo:ne,get onRenderValue(){return z()},get onClassName(){return H()},get onFocus(){return je()},get onBlur(){return B()},get onRenderMenu(){return n(F)},get onRenderContextMenu(){return n(ie)},get onSortModal(){return pe()},get onTransformModal(){return $e()},get onJSONEditorModal(){return ke()},$$legacy:!0}),Me=>S(me,Me),()=>n(me))};ye(O,he=>{n(E),C(Or),Z(()=>n(E)===Or.table)?he(D):he(re,!1)},N)};return ye(lt,O=>{n(E),C(Or),Z(()=>n(E)===Or.text||String(n(E))==="code")?O(He):O(_t,!1)}),X(e,Le),bt(t,"patch",P),bt(t,"expand",U),bt(t,"collapse",L),bt(t,"transform",fe),bt(t,"validate",J),bt(t,"acceptAutoRepair",V),bt(t,"scrollTo",Ze),bt(t,"findElement",Je),bt(t,"focus",Oe),bt(t,"refresh",Xe),ut({patch:P,expand:U,collapse:L,transform:fe,validate:J,acceptAutoRepair:V,scrollTo:Ze,findElement:Je,focus:Oe,refresh:Xe})}St(`/* over all fonts, sizes, and colors */
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
.jse-modal-wrapper.svelte-v0el4e {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e) {
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
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) .jse-label-inner:where(.svelte-v0el4e) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-modal-inline-editor:where(.svelte-v0el4e) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) .jse-error:where(.svelte-v0el4e) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e) {
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
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var $_=de('<div class="jse-error svelte-v0el4e"> </div>'),P_=de('<button type="button" class="jse-secondary svelte-v0el4e"><!> Back</button>'),z_=de('<button type="button" class="jse-primary svelte-v0el4e">Apply</button>'),R_=de('<button type="button" class="jse-primary svelte-v0el4e">Close</button>'),N_=de('<!> <div class="jse-modal-contents svelte-v0el4e"><div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Path</div></div> <input class="jse-path svelte-v0el4e" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Contents</div></div> <div class="jse-modal-inline-editor svelte-v0el4e"><!></div> <div class="jse-actions svelte-v0el4e"><!> <!> <!></div></div>',1),M_=de('<div class="jse-modal-wrapper svelte-v0el4e"><!></div>'),T_={};St(`/* over all fonts, sizes, and colors */
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
.jse-modal-contents.svelte-1v9c92j {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j) {
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
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) th:where(.svelte-1v9c92j),
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) td:where(.svelte-1v9c92j) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j input.jse-path:where(.svelte-1v9c92j) {
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
.jse-modal-contents.svelte-1v9c92j .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) {
  height: 200px;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) .jse-error:where(.svelte-1v9c92j) {
  color: var(--jse-error-color, #ee5341);
}`);var Ls=ju(()=>T_),A_=de('<tr><th class="svelte-1v9c92j">Property</th><td class="svelte-1v9c92j"><!></td></tr>'),I_=de('<div class="jse-error svelte-1v9c92j"> </div>'),q_=de('<!> <div class="jse-modal-contents svelte-1v9c92j"><table class="svelte-1v9c92j"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-1v9c92j">Path</th><td class="svelte-1v9c92j"><input class="jse-path svelte-1v9c92j" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-1v9c92j">Direction</th><td class="svelte-1v9c92j"><!></td></tr></tbody></table> <div class="jse-space svelte-1v9c92j"><!></div> <div class="jse-actions svelte-1v9c92j"><button type="button" class="jse-primary svelte-1v9c92j">Sort</button></div></div>',1);St(`/* over all fonts, sizes, and colors */
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
.jse-main.svelte-57bmz4 {
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
.jse-main.svelte-57bmz4:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var D_=de('<div role="none"><!></div> <!> <!> <!>',1);function L_(e,t){ct(t,!1);var r=Q(void 0,!0),o=Nr("jsoneditor:JSONEditor"),s={text:""},a=void 0,i=!1,l=Or.tree,c=!0,d=!0,u=!0,g=!0,m=!1,j=!1,p=!0,x=JSON,v=void 0,h=JSON,f={parse:I2,stringify:ao},y=[n2],w=y[0].id,b=So,k=void 0,$=void 0,M=A2,z=So,H=So,G=So,ee=So,te=Pe=>{console.error(Pe),alert(Pe.toString())},je=So,B=So,pe=_(t,"content",13,s),$e=_(t,"selection",13,a),ke=_(t,"readOnly",13,i),me=_(t,"indentation",13,2),Y=_(t,"tabSize",13,4),I=_(t,"truncateTextSize",13,1e3),se=_(t,"mode",13,l),T=_(t,"mainMenuBar",13,c),E=_(t,"navigationBar",13,d),R=_(t,"statusBar",13,u),ne=_(t,"askToFormat",13,g),Se=_(t,"escapeControlCharacters",13,m),K=_(t,"escapeUnicodeCharacters",13,j),F=_(t,"flattenColumns",13,p),ie=_(t,"parser",13,x),P=_(t,"validator",13,v),U=_(t,"validationParser",13,h),L=_(t,"pathParser",13,f),fe=_(t,"queryLanguages",13,y),J=_(t,"queryLanguageId",13,w),V=_(t,"onChangeQueryLanguage",13,b),Ze=_(t,"onChange",13,k),Je=_(t,"onSelect",13,$),Oe=_(t,"onRenderValue",13,M),Xe=_(t,"onClassName",13,z),Ne=_(t,"onRenderMenu",13,H),Le=_(t,"onRenderContextMenu",13,G),lt=_(t,"onChangeMode",13,ee),He=_(t,"onError",13,te),_t=_(t,"onFocus",13,je),O=_(t,"onBlur",13,B),N=Q(Js(),!0),D=Q(!1,!0),re=Q(void 0,!0),he=Q(void 0,!0),Me=Q(void 0,!0),Ue=Q(void 0,!0),be=Q(ie(),!0);function ve(){return pe()}function vt(Pe){o("set");var Xt=ad(Pe);if(Xt)throw new Error(Xt);S(N,Js()),pe(Pe),Yn()}function tt(Pe){o("update");var Xt=ad(Pe);if(Xt)throw new Error(Xt);pe(Pe),Yn()}function Ee(Pe){var Xt=n(re).patch(Pe);return Yn(),Xt}function pt(Pe){$e(Pe),Yn()}function ln(Pe,Xt){n(re).expand(Pe,Xt),Yn()}function On(Pe){var Xt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(re).collapse(Pe,Xt),Yn()}function en(){var Pe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(re).transform(Pe),Yn()}function Wt(){return n(re).validate()}function wn(){var Pe=n(re).acceptAutoRepair();return Yn(),Pe}function Jt(Pe){return Nt.apply(this,arguments)}function Nt(){return(Nt=kt(function*(Pe){yield n(re).scrollTo(Pe)})).apply(this,arguments)}function Ct(Pe){return n(re).findElement(Pe)}function Yt(){n(re).focus(),Yn()}function cn(){return yt.apply(this,arguments)}function yt(){return(yt=kt(function*(){yield n(re).refresh()})).apply(this,arguments)}function Ge(Pe){var Xt,kn,Un,ge,qe,Ve,Et,Lt,Ut,tn,it,Dt,Ye,bn,$n,Qn,At,un,Mt,le,xe,Fe,Ot,nn,Tt,Sn,or,An,Zt,Rt,_n,Fr=Object.keys(Pe);for(var jt of Fr)switch(jt){case"content":pe((Xt=Pe[jt])!==null&&Xt!==void 0?Xt:s);break;case"selection":$e((kn=Pe[jt])!==null&&kn!==void 0?kn:a);break;case"readOnly":ke((Un=Pe[jt])!==null&&Un!==void 0?Un:i);break;case"indentation":me((ge=Pe[jt])!==null&&ge!==void 0?ge:2);break;case"tabSize":Y((qe=Pe[jt])!==null&&qe!==void 0?qe:4);break;case"truncateTextSize":I((Ve=Pe[jt])!==null&&Ve!==void 0?Ve:1e3);break;case"mode":se((Et=Pe[jt])!==null&&Et!==void 0?Et:l);break;case"mainMenuBar":T((Lt=Pe[jt])!==null&&Lt!==void 0?Lt:c);break;case"navigationBar":E((Ut=Pe[jt])!==null&&Ut!==void 0?Ut:d);break;case"statusBar":R((tn=Pe[jt])!==null&&tn!==void 0?tn:u);break;case"askToFormat":ne((it=Pe[jt])!==null&&it!==void 0?it:g);break;case"escapeControlCharacters":Se((Dt=Pe[jt])!==null&&Dt!==void 0?Dt:m);break;case"escapeUnicodeCharacters":K((Ye=Pe[jt])!==null&&Ye!==void 0?Ye:j);break;case"flattenColumns":F((bn=Pe[jt])!==null&&bn!==void 0?bn:p);break;case"parser":ie(($n=Pe[jt])!==null&&$n!==void 0?$n:x);break;case"validator":P((Qn=Pe[jt])!==null&&Qn!==void 0?Qn:v);break;case"validationParser":U((At=Pe[jt])!==null&&At!==void 0?At:h);break;case"pathParser":L((un=Pe[jt])!==null&&un!==void 0?un:f);break;case"queryLanguages":fe((Mt=Pe[jt])!==null&&Mt!==void 0?Mt:y);break;case"queryLanguageId":J((le=Pe[jt])!==null&&le!==void 0?le:w);break;case"onChangeQueryLanguage":V((xe=Pe[jt])!==null&&xe!==void 0?xe:b);break;case"onChange":Ze((Fe=Pe[jt])!==null&&Fe!==void 0?Fe:k);break;case"onRenderValue":Oe((Ot=Pe[jt])!==null&&Ot!==void 0?Ot:M);break;case"onClassName":Xe((nn=Pe[jt])!==null&&nn!==void 0?nn:z);break;case"onRenderMenu":Ne((Tt=Pe[jt])!==null&&Tt!==void 0?Tt:H);break;case"onRenderContextMenu":Le((Sn=Pe[jt])!==null&&Sn!==void 0?Sn:G);break;case"onChangeMode":lt((or=Pe[jt])!==null&&or!==void 0?or:ee);break;case"onSelect":Je((An=Pe[jt])!==null&&An!==void 0?An:$);break;case"onError":He((Zt=Pe[jt])!==null&&Zt!==void 0?Zt:te);break;case"onFocus":_t((Rt=Pe[jt])!==null&&Rt!==void 0?Rt:je);break;case"onBlur":O((_n=Pe[jt])!==null&&_n!==void 0?_n:B);break;default:tr(jt)}function tr(yn){o('Unknown property "'.concat(yn,'"'))}fe().some(yn=>yn.id===J())||J(fe()[0].id),Yn()}function Ht(){return Ft.apply(this,arguments)}function Ft(){return(Ft=kt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function Nn(Pe,Xt,kn){pe(Pe),Ze()&&Ze()(Pe,Xt,kn)}function Mn(Pe){$e(Pe),Je()&&Je()(kd(Pe))}function hn(){S(D,!0),_t()&&_t()()}function jr(){S(D,!1),O()&&O()()}function Tn(Pe){return rr.apply(this,arguments)}function rr(){return(rr=kt(function*(Pe){se()!==Pe&&(se(Pe),Yn(),Yt(),lt()(Pe))})).apply(this,arguments)}function kr(Pe){o("handleChangeQueryLanguage",Pe),J(Pe),V()(Pe)}function Sr(Pe){var{id:Xt,json:kn,rootPath:Un,onTransform:ge,onClose:qe}=Pe;ke()||S(Ue,{id:Xt,json:kn,rootPath:Un,indentation:me(),truncateTextSize:I(),escapeControlCharacters:Se(),escapeUnicodeCharacters:K(),parser:ie(),parseMemoizeOne:n(r),validationParser:U(),pathParser:L(),queryLanguages:fe(),queryLanguageId:J(),onChangeQueryLanguage:kr,onRenderValue:Oe(),onRenderMenu:Ve=>Ne()(Ve,{mode:se(),modal:!0,readOnly:ke()}),onRenderContextMenu:Ve=>Le()(Ve,{mode:se(),modal:!0,readOnly:ke(),selection:$e()}),onClassName:Xe(),onTransform:ge,onClose:qe})}function hr(Pe){ke()||S(Me,Pe)}function Ln(Pe){var{content:Xt,path:kn,onPatch:Un,onClose:ge}=Pe;o("onJSONEditorModal",{content:Xt,path:kn}),S(he,{content:Xt,path:kn,onPatch:Un,readOnly:ke(),indentation:me(),tabSize:Y(),truncateTextSize:I(),mainMenuBar:T(),navigationBar:E(),statusBar:R(),askToFormat:ne(),escapeControlCharacters:Se(),escapeUnicodeCharacters:K(),flattenColumns:F(),parser:ie(),validator:void 0,validationParser:U(),pathParser:L(),onRenderValue:Oe(),onClassName:Xe(),onRenderMenu:Ne(),onRenderContextMenu:Le(),onSortModal:hr,onTransformModal:Sr,onClose:ge})}function ur(Pe){Pe.stopPropagation()}return ce(()=>(C(ie()),n(be),C(pe()),Js),()=>{if(!$g(ie(),n(be))){if(o("parser changed, recreate editor"),Hi(pe())){var Pe=n(be).stringify(pe().json);pe({json:Pe!==void 0?ie().parse(Pe):void 0})}S(be,ie()),S(N,Js())}}),ce(()=>C(pe()),()=>{var Pe=ad(pe());Pe&&console.error("Error: "+Pe)}),ce(()=>C($e()),()=>{$e()===null&&console.warn("selection is invalid: it is null but should be undefined")}),ce(()=>C(ie()),()=>{S(r,Di(ie().parse))}),ce(()=>C(se()),()=>{o("mode changed to",se())}),En(),zt(!0),Fd(e,{children:(Pe,Xt)=>{var kn,Un=D_(),ge=ht(Un);gg(W(ge),()=>n(N),it=>{er(Kh(it,{get externalMode(){return se()},get content(){return pe()},get selection(){return $e()},get readOnly(){return ke()},get indentation(){return me()},get tabSize(){return Y()},get truncateTextSize(){return I()},get statusBar(){return R()},get askToFormat(){return ne()},get mainMenuBar(){return T()},get navigationBar(){return E()},get escapeControlCharacters(){return Se()},get escapeUnicodeCharacters(){return K()},get flattenColumns(){return F()},get parser(){return ie()},get parseMemoizeOne(){return n(r)},get validator(){return P()},get validationParser(){return U()},get pathParser(){return L()},insideModal:!1,get onError(){return He()},onChange:Nn,onChangeMode:Tn,onSelect:Mn,get onRenderValue(){return Oe()},get onClassName(){return Xe()},onFocus:hn,onBlur:jr,get onRenderMenu(){return Ne()},get onRenderContextMenu(){return Le()},onSortModal:hr,onTransformModal:Sr,onJSONEditorModal:Ln,$$legacy:!0}),Dt=>S(re,Dt),()=>n(re))});var qe=ae(ge,2),Ve=it=>{(function(Dt,Ye){var bn,$n;ct(Ye,!1);var Qn=Q(void 0,!0),At=Q(void 0,!0),un=Q(void 0,!0),Mt=Q(void 0,!0),le=Nr("jsoneditor:SortModal"),xe=_(Ye,"id",9),Fe=_(Ye,"json",9),Ot=_(Ye,"rootPath",9),nn=_(Ye,"onSort",9),Tt=_(Ye,"onClose",9),Sn={value:1,label:"ascending"},or=[Sn,{value:-1,label:"descending"}],An="".concat(xe(),":").concat(ft(Ot())),Zt=Q((bn=Ls()[An])===null||bn===void 0?void 0:bn.selectedProperty,!0),Rt=Q((($n=Ls()[An])===null||$n===void 0?void 0:$n.selectedDirection)||Sn,!0),_n=Q(void 0,!0);function Fr(){try{var tr,yn,Fn;S(_n,void 0);var rt=((tr=n(Zt))===null||tr===void 0?void 0:tr.value)||((yn=n(Mt))===null||yn===void 0||(yn=yn[0])===null||yn===void 0?void 0:yn.value)||[],zn=(Fn=n(Rt))===null||Fn===void 0?void 0:Fn.value,mr=b0(Fe(),Ot(),rt,zn);nn()!==void 0&&Ot()!==void 0&&nn()({operations:mr,rootPath:Ot(),itemPath:rt,direction:zn}),Tt()()}catch(It){S(_n,String(It))}}function jt(tr){tr.focus()}ce(()=>(C(Fe()),C(Ot())),()=>{S(Qn,Qe(Fe(),Ot()))}),ce(()=>n(Qn),()=>{S(At,Array.isArray(n(Qn)))}),ce(()=>(n(At),n(Qn)),()=>{S(un,n(At)?Ld(n(Qn)):void 0)}),ce(()=>(n(un),Na),()=>{S(Mt,n(un)?n(un).map(Na):void 0)}),ce(()=>(Ls(),n(Zt),n(Rt)),()=>{Ls(Ls()[An]={selectedProperty:n(Zt),selectedDirection:n(Rt)}),le("store state in memory",An,Ls()[An])}),En(),zt(!0),el(Dt,{get onClose(){return Tt()},className:"jse-sort-modal",children:(tr,yn)=>{var Fn=q_(),rt=ht(Fn),zn=Ce(()=>n(At)?"Sort array items":"Sort object keys");nu(rt,{get title(){return n(zn)},get onClose(){return Tt()}});var mr=W(ae(rt,2)),It=ae(W(mr)),io=W(It),gr=ae(W(io)),_r=W(gr),xr=ae(io),Vr=ot=>{var at=A_(),Vt=ae(W(at));fs(W(Vt),{showChevron:!0,get items(){return n(Mt)},get value(){return n(Zt)},set value(dn){S(Zt,dn)},$$legacy:!0}),X(ot,at)};ye(xr,ot=>{n(At),n(Mt),Z(()=>{var at;return n(At)&&n(Mt)&&((at=n(Mt))===null||at===void 0?void 0:at.length)>1})&&ot(Vr)});var q=ae(xr),ue=ae(W(q));fs(W(ue),{showChevron:!0,clearable:!1,get items(){return or},get value(){return n(Rt)},set value(ot){S(Rt,ot)},$$legacy:!0});var ze=ae(mr,2),Be=W(ze),We=ot=>{var at=I_(),Vt=W(at);Ae(()=>dt(Vt,n(_n))),X(ot,at)};ye(Be,ot=>{n(_n)&&ot(We)});var et=W(ae(ze,2));Lr(()=>Re("click",et,Fr)),Yr(et,ot=>jt?.(ot)),Ae(ot=>{ws(_r,ot),et.disabled=(n(At),n(Mt),n(Zt),Z(()=>{var at;return!!(n(At)&&n(Mt)&&((at=n(Mt))===null||at===void 0?void 0:at.length)>1)&&!n(Zt)}))},[()=>(C(Ot()),C(pn),C(ao),Z(()=>Ot()&&!pn(Ot())?ao(Ot()):"(document root)"))],Ce),X(tr,Fn)},$$slots:{default:!0}}),ut()})(it,La(()=>n(Me),{onClose:()=>{var Dt;(Dt=n(Me))===null||Dt===void 0||Dt.onClose(),S(Me,void 0)}}))};ye(qe,it=>{n(Me)&&it(Ve)});var Et=ae(qe,2),Lt=it=>{FS(it,La(()=>n(Ue),{onClose:()=>{var Dt;(Dt=n(Ue))===null||Dt===void 0||Dt.onClose(),S(Ue,void 0)}}))};ye(Et,it=>{n(Ue)&&it(Lt)});var Ut=ae(Et,2),tn=it=>{(function(Dt,Ye){ct(Ye,!1);var bn=Q(void 0,!0),$n=Q(void 0,!0),Qn=Q(void 0,!0),At=Q(void 0,!0),un=Nr("jsoneditor:JSONEditorModal"),Mt=_(Ye,"content",9),le=_(Ye,"path",9),xe=_(Ye,"onPatch",9),Fe=_(Ye,"readOnly",9),Ot=_(Ye,"indentation",9),nn=_(Ye,"tabSize",9),Tt=_(Ye,"truncateTextSize",9),Sn=_(Ye,"mainMenuBar",9),or=_(Ye,"navigationBar",9),An=_(Ye,"statusBar",9),Zt=_(Ye,"askToFormat",9),Rt=_(Ye,"escapeControlCharacters",9),_n=_(Ye,"escapeUnicodeCharacters",9),Fr=_(Ye,"flattenColumns",9),jt=_(Ye,"parser",9),tr=_(Ye,"validator",9),yn=_(Ye,"validationParser",9),Fn=_(Ye,"pathParser",9),rt=_(Ye,"onRenderValue",9),zn=_(Ye,"onClassName",9),mr=_(Ye,"onRenderMenu",9),It=_(Ye,"onRenderContextMenu",9),io=_(Ye,"onSortModal",9),gr=_(Ye,"onTransformModal",9),_r=_(Ye,"onClose",9),xr=Q(void 0,!0),Vr=Q(void 0,!0),q={mode:Be(Mt()),content:Mt(),selection:void 0,relativePath:le()},ue=Q([q],!0),ze=Q(void 0,!0);function Be(oe){return Hi(oe)&&vr(oe.json)?Or.table:Or.tree}function We(){var oe,_e=(oe=Qt(n(ue)))===null||oe===void 0?void 0:oe.selection;Gi(_e)&&n(xr).scrollTo(nt(_e))}function et(){if(un("handleApply"),!Fe())try{S(ze,void 0);var oe=n(bn).relativePath,_e=n(bn).content,Ke=[{op:"replace",path:ft(oe),value:ah(_e,jt()).json}];if(n(ue).length>1){var De=ah(n(ue)[n(ue).length-2].content,jt()).json,Ie={json:Mo(De,Ke)},xt=Te(Te({},n(ue)[n(ue).length-2]||q),{},{content:Ie});S(ue,[...n(ue).slice(0,n(ue).length-2),xt]),Yn(),We()}else xe()(Ke),_r()()}catch(wt){S(ze,String(wt))}}function ot(){if(un("handleClose"),n(Vr))S(Vr,!1);else if(n(ue).length>1){var oe;S(ue,an(n(ue))),Yn(),(oe=n(xr))===null||oe===void 0||oe.focus(),We(),S(ze,void 0)}else _r()()}function at(oe){un("handleChange",oe),rn(_e=>Te(Te({},_e),{},{content:oe}))}function Vt(oe){un("handleChangeSelection",oe),rn(_e=>Te(Te({},_e),{},{selection:oe}))}function dn(oe){un("handleChangeMode",oe),rn(_e=>Te(Te({},_e),{},{mode:oe}))}function rn(oe){var _e=oe(Qt(n(ue)));S(ue,[...an(n(ue)),_e])}function Rn(oe){S(ze,oe.toString()),console.error(oe)}function Br(oe){var _e,{content:Ke,path:De}=oe;un("handleJSONEditorModal",{content:Ke,path:De});var Ie={mode:Be(Ke),content:Ke,selection:void 0,relativePath:De};S(ue,[...n(ue),Ie]),Yn(),(_e=n(xr))===null||_e===void 0||_e.focus()}function A(oe){oe.focus()}Qr(()=>{var oe;(oe=n(xr))===null||oe===void 0||oe.focus()}),ce(()=>n(ue),()=>{S(bn,Qt(n(ue))||q)}),ce(()=>n(ue),()=>{S($n,n(ue).flatMap(oe=>oe.relativePath))}),ce(()=>(n($n),ao),()=>{S(Qn,pn(n($n))?"(document root)":ao(n($n)))}),ce(()=>C(jt()),()=>{S(At,Di(jt().parse))}),En(),zt(!0),el(Dt,{onClose:ot,className:"jse-jsoneditor-modal",get fullscreen(){return n(Vr)},children:(oe,_e)=>{var Ke=M_();Fd(W(Ke),{children:(De,Ie)=>{var xt=N_(),wt=ht(xt),Kt=Ce(()=>(n(ue),Z(()=>n(ue).length>1?" (".concat(n(ue).length,")"):"")));nu(wt,{get title(){var gt;return"Edit nested content ".concat((gt=n(Kt))!==null&&gt!==void 0?gt:"")},fullScreenButton:!0,onClose:ot,get fullscreen(){return n(Vr)},set fullscreen(gt){S(Vr,gt)},$$legacy:!0});var Pn=ae(wt,2),on=ae(W(Pn),2),Bn=ae(on,4);er(Kh(W(Bn),{get externalMode(){return n(bn),Z(()=>n(bn).mode)},get content(){return n(bn),Z(()=>n(bn).content)},get selection(){return n(bn),Z(()=>n(bn).selection)},get readOnly(){return Fe()},get indentation(){return Ot()},get tabSize(){return nn()},get truncateTextSize(){return Tt()},get statusBar(){return An()},get askToFormat(){return Zt()},get mainMenuBar(){return Sn()},get navigationBar(){return or()},get escapeControlCharacters(){return Rt()},get escapeUnicodeCharacters(){return _n()},get flattenColumns(){return Fr()},get parser(){return jt()},get parseMemoizeOne(){return n(At)},get validator(){return tr()},get validationParser(){return yn()},get pathParser(){return Fn()},insideModal:!0,onError:Rn,onChange:at,onChangeMode:dn,onSelect:Vt,get onRenderValue(){return rt()},get onClassName(){return zn()},get onFocus(){return So},get onBlur(){return So},get onRenderMenu(){return mr()},get onRenderContextMenu(){return It()},get onSortModal(){return io()},get onTransformModal(){return gr()},onJSONEditorModal:Br,$$legacy:!0}),gt=>S(xr,gt),()=>n(xr));var $t=W(ae(Bn,2)),ar=gt=>{var st=$_(),qt=W(st);Ae(()=>dt(qt,n(ze))),X(gt,st)};ye($t,gt=>{n(ze)&&gt(ar)});var In=ae($t,2),Xn=gt=>{var st=P_();sn(W(st),{get data(){return Yy}}),Re("click",st,ot),X(gt,st)};ye(In,gt=>{n(ue),Z(()=>n(ue).length>1)&&gt(Xn)});var jn=ae(In,2),mt=gt=>{var st=z_();Lr(()=>Re("click",st,et)),Yr(st,qt=>A?.(qt)),X(gt,st)},fn=gt=>{var st=R_();Re("click",st,ot),X(gt,st)};ye(jn,gt=>{Fe()?gt(fn,!1):gt(mt)}),Ae(()=>ws(on,n(Qn))),X(De,xt)},$$slots:{default:!0}}),X(oe,Ke)},$$slots:{default:!0}}),ut()})(it,La(()=>n(he),{onClose:()=>{var Dt;(Dt=n(he))===null||Dt===void 0||Dt.onClose(),S(he,void 0)}}))};ye(Ut,it=>{n(he)&&it(tn)}),Ae(it=>kn=Pt(ge,1,"jse-main svelte-57bmz4",null,kn,it),[()=>({"jse-focus":n(D)})],Ce),Re("keydown",ge,ur),X(Pe,Un)},$$slots:{default:!0}}),bt(t,"get",ve),bt(t,"set",vt),bt(t,"update",tt),bt(t,"patch",Ee),bt(t,"select",pt),bt(t,"expand",ln),bt(t,"collapse",On),bt(t,"transform",en),bt(t,"validate",Wt),bt(t,"acceptAutoRepair",wn),bt(t,"scrollTo",Jt),bt(t,"findElement",Ct),bt(t,"focus",Yt),bt(t,"refresh",cn),bt(t,"updateProps",Ge),bt(t,"destroy",Ht),ut({get:ve,set:vt,update:tt,patch:Ee,select:pt,expand:ln,collapse:On,transform:en,validate:Wt,acceptAutoRepair:wn,scrollTo:Jt,findElement:Ct,focus:Yt,refresh:cn,updateProps:Ge,destroy:Ht})}function Z_(e){var{target:t,props:r}=e,o=jw(L_,{target:t,props:r});return o.destroy=kt(function*(){return function(s,a){var i=Id.get(s);return i?(Id.delete(s),i(a)):Promise.resolve()}(o)}),Yn(),o}export{Hi as $,Z_ as H,Or as o};
