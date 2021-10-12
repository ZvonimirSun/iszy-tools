import{C as hn}from"./vue-codemirror.48cde332.js";import{o as S,c as R,J as ke,K as un,b as p,U as Ie,P as Se,Q as De,ag as Te,a as K,O as be,w as fe,$ as fn,aw as dn,a0 as pn,_ as Qe,aT as gn,T as vn,V as bn,f as en,e as He,W as xn,p as mn,h as wn}from"./vendor.3bd2b7e4.js";/* empty css               *//* empty css               *//* empty css              */import{c as yn}from"./createFile.43ce4571.js";import{_ as _n}from"./index.28336b27.js";var nn={},ze={};ze.byteLength=Bn;ze.toByteArray=Fn;ze.fromByteArray=Sn;var we=[],xe=[],Cn=typeof Uint8Array!="undefined"?Uint8Array:Array,Xe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Me=0,kn=Xe.length;Me<kn;++Me)we[Me]=Xe[Me],xe[Xe.charCodeAt(Me)]=Me;xe["-".charCodeAt(0)]=62;xe["_".charCodeAt(0)]=63;function tn(t){var l=t.length;if(l%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var h=t.indexOf("=");h===-1&&(h=l);var b=h===l?0:4-h%4;return[h,b]}function Bn(t){var l=tn(t),h=l[0],b=l[1];return(h+b)*3/4-b}function En(t,l,h){return(l+h)*3/4-h}function Fn(t){var l,h=tn(t),b=h[0],m=h[1],s=new Cn(En(t,b,m)),g=0,c=m>0?b-4:b,y;for(y=0;y<c;y+=4)l=xe[t.charCodeAt(y)]<<18|xe[t.charCodeAt(y+1)]<<12|xe[t.charCodeAt(y+2)]<<6|xe[t.charCodeAt(y+3)],s[g++]=l>>16&255,s[g++]=l>>8&255,s[g++]=l&255;return m===2&&(l=xe[t.charCodeAt(y)]<<2|xe[t.charCodeAt(y+1)]>>4,s[g++]=l&255),m===1&&(l=xe[t.charCodeAt(y)]<<10|xe[t.charCodeAt(y+1)]<<4|xe[t.charCodeAt(y+2)]>>2,s[g++]=l>>8&255,s[g++]=l&255),s}function An(t){return we[t>>18&63]+we[t>>12&63]+we[t>>6&63]+we[t&63]}function In(t,l,h){for(var b,m=[],s=l;s<h;s+=3)b=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(t[s+2]&255),m.push(An(b));return m.join("")}function Sn(t){for(var l,h=t.length,b=h%3,m=[],s=16383,g=0,c=h-b;g<c;g+=s)m.push(In(t,g,g+s>c?c:g+s));return b===1?(l=t[h-1],m.push(we[l>>2]+we[l<<4&63]+"==")):b===2&&(l=(t[h-2]<<8)+t[h-1],m.push(we[l>>10]+we[l>>4&63]+we[l<<2&63]+"=")),m.join("")}var qe={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */qe.read=function(t,l,h,b,m){var s,g,c=m*8-b-1,y=(1<<c)-1,x=y>>1,A=-7,B=h?m-1:0,W=h?-1:1,Z=t[l+B];for(B+=W,s=Z&(1<<-A)-1,Z>>=-A,A+=c;A>0;s=s*256+t[l+B],B+=W,A-=8);for(g=s&(1<<-A)-1,s>>=-A,A+=b;A>0;g=g*256+t[l+B],B+=W,A-=8);if(s===0)s=1-x;else{if(s===y)return g?NaN:(Z?-1:1)*(1/0);g=g+Math.pow(2,b),s=s-x}return(Z?-1:1)*g*Math.pow(2,s-b)};qe.write=function(t,l,h,b,m,s){var g,c,y,x=s*8-m-1,A=(1<<x)-1,B=A>>1,W=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,Z=b?0:s-1,se=b?1:-1,Q=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(c=isNaN(l)?1:0,g=A):(g=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-g))<1&&(g--,y*=2),g+B>=1?l+=W/y:l+=W*Math.pow(2,1-B),l*y>=2&&(g++,y/=2),g+B>=A?(c=0,g=A):g+B>=1?(c=(l*y-1)*Math.pow(2,m),g=g+B):(c=l*Math.pow(2,B-1)*Math.pow(2,m),g=0));m>=8;t[h+Z]=c&255,Z+=se,c/=256,m-=8);for(g=g<<m|c,x+=m;x>0;t[h+Z]=g&255,Z+=se,g/=256,x-=8);t[h+Z-se]|=Q*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const l=ze,h=qe,b=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=_e,t.INSPECT_MAX_BYTES=50;const m=2147483647;t.kMaxLength=m,c.TYPED_ARRAY_SUPPORT=s(),!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{const r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch(r){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function g(r){if(r>m)throw new RangeError('The value "'+r+'" is invalid for option "size"');const e=new Uint8Array(r);return Object.setPrototypeOf(e,c.prototype),e}function c(r,e,n){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B(r)}return y(r,e,n)}c.poolSize=8192;function y(r,e,n){if(typeof r=="string")return W(r,e);if(ArrayBuffer.isView(r))return se(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(te(r,ArrayBuffer)||r&&te(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(te(r,SharedArrayBuffer)||r&&te(r.buffer,SharedArrayBuffer)))return Q(r,e,n);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const a=r.valueOf&&r.valueOf();if(a!=null&&a!==r)return c.from(a,e,n);const f=ye(r);if(f)return f;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return c.from(r[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}c.from=function(r,e,n){return y(r,e,n)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function x(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function A(r,e,n){return x(r),r<=0?g(r):e!==void 0?typeof n=="string"?g(r).fill(e,n):g(r).fill(e):g(r)}c.alloc=function(r,e,n){return A(r,e,n)};function B(r){return x(r),g(r<0?0:ve(r)|0)}c.allocUnsafe=function(r){return B(r)},c.allocUnsafeSlow=function(r){return B(r)};function W(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!c.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=Ee(r,e)|0;let a=g(n);const f=a.write(r,e);return f!==n&&(a=a.slice(0,f)),a}function Z(r){const e=r.length<0?0:ve(r.length)|0,n=g(e);for(let a=0;a<e;a+=1)n[a]=r[a]&255;return n}function se(r){if(te(r,Uint8Array)){const e=new Uint8Array(r);return Q(e.buffer,e.byteOffset,e.byteLength)}return Z(r)}function Q(r,e,n){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let a;return e===void 0&&n===void 0?a=new Uint8Array(r):n===void 0?a=new Uint8Array(r,e):a=new Uint8Array(r,e,n),Object.setPrototypeOf(a,c.prototype),a}function ye(r){if(c.isBuffer(r)){const e=ve(r.length)|0,n=g(e);return n.length===0||r.copy(n,0,0,e),n}if(r.length!==void 0)return typeof r.length!="number"||Ce(r.length)?g(0):Z(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Z(r.data)}function ve(r){if(r>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return r|0}function _e(r){return+r!=r&&(r=0),c.alloc(+r)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype},c.compare=function(e,n){if(te(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),te(n,Uint8Array)&&(n=c.from(n,n.offset,n.byteLength)),!c.isBuffer(e)||!c.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let a=e.length,f=n.length;for(let d=0,v=Math.min(a,f);d<v;++d)if(e[d]!==n[d]){a=e[d],f=n[d];break}return a<f?-1:f<a?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);let a;if(n===void 0)for(n=0,a=0;a<e.length;++a)n+=e[a].length;const f=c.allocUnsafe(n);let d=0;for(a=0;a<e.length;++a){let v=e[a];if(te(v,Uint8Array))d+v.length>f.length?(c.isBuffer(v)||(v=c.from(v)),v.copy(f,d)):Uint8Array.prototype.set.call(f,v,d);else if(c.isBuffer(v))v.copy(f,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=v.length}return f};function Ee(r,e){if(c.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||te(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const n=r.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&n===0)return 0;let f=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return _(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Y(r).length;default:if(f)return a?-1:_(r).length;e=(""+e).toLowerCase(),f=!0}}c.byteLength=Ee;function Re(r,e,n){let a=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return le(this,e,n);case"utf8":case"utf-8":return P(this,e,n);case"ascii":return re(this,e,n);case"latin1":case"binary":return me(this,e,n);case"base64":return T(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,e,n);default:if(a)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),a=!0}}c.prototype._isBuffer=!0;function ue(r,e,n){const a=r[e];r[e]=r[n],r[n]=a}c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)ue(this,n,n+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)ue(this,n,n+3),ue(this,n+1,n+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)ue(this,n,n+7),ue(this,n+1,n+6),ue(this,n+2,n+5),ue(this,n+3,n+4);return this},c.prototype.toString=function(){const e=this.length;return e===0?"":arguments.length===0?P(this,0,e):Re.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0},c.prototype.inspect=function(){let e="";const n=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"},b&&(c.prototype[b]=c.prototype.inspect),c.prototype.compare=function(e,n,a,f,d){if(te(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),a===void 0&&(a=e?e.length:0),f===void 0&&(f=0),d===void 0&&(d=this.length),n<0||a>e.length||f<0||d>this.length)throw new RangeError("out of range index");if(f>=d&&n>=a)return 0;if(f>=d)return-1;if(n>=a)return 1;if(n>>>=0,a>>>=0,f>>>=0,d>>>=0,this===e)return 0;let v=d-f,N=a-n;const ie=Math.min(v,N),ee=this.slice(f,d),ae=e.slice(n,a);for(let X=0;X<ie;++X)if(ee[X]!==ae[X]){v=ee[X],N=ae[X];break}return v<N?-1:N<v?1:0};function q(r,e,n,a,f){if(r.length===0)return-1;if(typeof n=="string"?(a=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Ce(n)&&(n=f?0:r.length-1),n<0&&(n=r.length+n),n>=r.length){if(f)return-1;n=r.length-1}else if(n<0)if(f)n=0;else return-1;if(typeof e=="string"&&(e=c.from(e,a)),c.isBuffer(e))return e.length===0?-1:F(r,e,n,a,f);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?f?Uint8Array.prototype.indexOf.call(r,e,n):Uint8Array.prototype.lastIndexOf.call(r,e,n):F(r,[e],n,a,f);throw new TypeError("val must be string, number or Buffer")}function F(r,e,n,a,f){let d=1,v=r.length,N=e.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(r.length<2||e.length<2)return-1;d=2,v/=2,N/=2,n/=2}function ie(ae,X){return d===1?ae[X]:ae.readUInt16BE(X*d)}let ee;if(f){let ae=-1;for(ee=n;ee<v;ee++)if(ie(r,ee)===ie(e,ae===-1?0:ee-ae)){if(ae===-1&&(ae=ee),ee-ae+1===N)return ae*d}else ae!==-1&&(ee-=ee-ae),ae=-1}else for(n+N>v&&(n=v-N),ee=n;ee>=0;ee--){let ae=!0;for(let X=0;X<N;X++)if(ie(r,ee+X)!==ie(e,X)){ae=!1;break}if(ae)return ee}return-1}c.prototype.includes=function(e,n,a){return this.indexOf(e,n,a)!==-1},c.prototype.indexOf=function(e,n,a){return q(this,e,n,a,!0)},c.prototype.lastIndexOf=function(e,n,a){return q(this,e,n,a,!1)};function E(r,e,n,a){n=Number(n)||0;const f=r.length-n;a?(a=Number(a),a>f&&(a=f)):a=f;const d=e.length;a>d/2&&(a=d/2);let v;for(v=0;v<a;++v){const N=parseInt(e.substr(v*2,2),16);if(Ce(N))return v;r[n+v]=N}return v}function I(r,e,n,a){return J(_(e,r.length-n),r,n,a)}function L(r,e,n,a){return J(C(e),r,n,a)}function O(r,e,n,a){return J(Y(e),r,n,a)}function $(r,e,n,a){return J(j(e,r.length-n),r,n,a)}c.prototype.write=function(e,n,a,f){if(n===void 0)f="utf8",a=this.length,n=0;else if(a===void 0&&typeof n=="string")f=n,a=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(a)?(a=a>>>0,f===void 0&&(f="utf8")):(f=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const d=this.length-n;if((a===void 0||a>d)&&(a=d),e.length>0&&(a<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");let v=!1;for(;;)switch(f){case"hex":return E(this,e,n,a);case"utf8":case"utf-8":return I(this,e,n,a);case"ascii":case"latin1":case"binary":return L(this,e,n,a);case"base64":return O(this,e,n,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,e,n,a);default:if(v)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase(),v=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function T(r,e,n){return e===0&&n===r.length?l.fromByteArray(r):l.fromByteArray(r.slice(e,n))}function P(r,e,n){n=Math.min(r.length,n);const a=[];let f=e;for(;f<n;){const d=r[f];let v=null,N=d>239?4:d>223?3:d>191?2:1;if(f+N<=n){let ie,ee,ae,X;switch(N){case 1:d<128&&(v=d);break;case 2:ie=r[f+1],(ie&192)==128&&(X=(d&31)<<6|ie&63,X>127&&(v=X));break;case 3:ie=r[f+1],ee=r[f+2],(ie&192)==128&&(ee&192)==128&&(X=(d&15)<<12|(ie&63)<<6|ee&63,X>2047&&(X<55296||X>57343)&&(v=X));break;case 4:ie=r[f+1],ee=r[f+2],ae=r[f+3],(ie&192)==128&&(ee&192)==128&&(ae&192)==128&&(X=(d&15)<<18|(ie&63)<<12|(ee&63)<<6|ae&63,X>65535&&X<1114112&&(v=X))}}v===null?(v=65533,N=1):v>65535&&(v-=65536,a.push(v>>>10&1023|55296),v=56320|v&1023),a.push(v),f+=N}return ce(a)}const oe=4096;function ce(r){const e=r.length;if(e<=oe)return String.fromCharCode.apply(String,r);let n="",a=0;for(;a<e;)n+=String.fromCharCode.apply(String,r.slice(a,a+=oe));return n}function re(r,e,n){let a="";n=Math.min(r.length,n);for(let f=e;f<n;++f)a+=String.fromCharCode(r[f]&127);return a}function me(r,e,n){let a="";n=Math.min(r.length,n);for(let f=e;f<n;++f)a+=String.fromCharCode(r[f]);return a}function le(r,e,n){const a=r.length;(!e||e<0)&&(e=0),(!n||n<0||n>a)&&(n=a);let f="";for(let d=e;d<n;++d)f+=ge[r[d]];return f}function D(r,e,n){const a=r.slice(e,n);let f="";for(let d=0;d<a.length-1;d+=2)f+=String.fromCharCode(a[d]+a[d+1]*256);return f}c.prototype.slice=function(e,n){const a=this.length;e=~~e,n=n===void 0?a:~~n,e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a),n<0?(n+=a,n<0&&(n=0)):n>a&&(n=a),n<e&&(n=e);const f=this.subarray(e,n);return Object.setPrototypeOf(f,c.prototype),f};function z(r,e,n){if(r%1!=0||r<0)throw new RangeError("offset is not uint");if(r+e>n)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,n,a){e=e>>>0,n=n>>>0,a||z(e,n,this.length);let f=this[e],d=1,v=0;for(;++v<n&&(d*=256);)f+=this[e+v]*d;return f},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,n,a){e=e>>>0,n=n>>>0,a||z(e,n,this.length);let f=this[e+--n],d=1;for(;n>0&&(d*=256);)f+=this[e+--n]*d;return f},c.prototype.readUint8=c.prototype.readUInt8=function(e,n){return e=e>>>0,n||z(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||z(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||z(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||z(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||z(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=Ae(function(e){e=e>>>0,i(e,"offset");const n=this[e],a=this[e+7];(n===void 0||a===void 0)&&u(e,this.length-8);const f=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,d=this[++e]+this[++e]*2**8+this[++e]*2**16+a*2**24;return BigInt(f)+(BigInt(d)<<BigInt(32))}),c.prototype.readBigUInt64BE=Ae(function(e){e=e>>>0,i(e,"offset");const n=this[e],a=this[e+7];(n===void 0||a===void 0)&&u(e,this.length-8);const f=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],d=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+a;return(BigInt(f)<<BigInt(32))+BigInt(d)}),c.prototype.readIntLE=function(e,n,a){e=e>>>0,n=n>>>0,a||z(e,n,this.length);let f=this[e],d=1,v=0;for(;++v<n&&(d*=256);)f+=this[e+v]*d;return d*=128,f>=d&&(f-=Math.pow(2,8*n)),f},c.prototype.readIntBE=function(e,n,a){e=e>>>0,n=n>>>0,a||z(e,n,this.length);let f=n,d=1,v=this[e+--f];for(;f>0&&(d*=256);)v+=this[e+--f]*d;return d*=128,v>=d&&(v-=Math.pow(2,8*n)),v},c.prototype.readInt8=function(e,n){return e=e>>>0,n||z(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},c.prototype.readInt16LE=function(e,n){e=e>>>0,n||z(e,2,this.length);const a=this[e]|this[e+1]<<8;return a&32768?a|4294901760:a},c.prototype.readInt16BE=function(e,n){e=e>>>0,n||z(e,2,this.length);const a=this[e+1]|this[e]<<8;return a&32768?a|4294901760:a},c.prototype.readInt32LE=function(e,n){return e=e>>>0,n||z(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,n){return e=e>>>0,n||z(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=Ae(function(e){e=e>>>0,i(e,"offset");const n=this[e],a=this[e+7];(n===void 0||a===void 0)&&u(e,this.length-8);const f=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(a<<24);return(BigInt(f)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),c.prototype.readBigInt64BE=Ae(function(e){e=e>>>0,i(e,"offset");const n=this[e],a=this[e+7];(n===void 0||a===void 0)&&u(e,this.length-8);const f=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(f)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+a)}),c.prototype.readFloatLE=function(e,n){return e=e>>>0,n||z(e,4,this.length),h.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,n){return e=e>>>0,n||z(e,4,this.length),h.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||z(e,8,this.length),h.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||z(e,8,this.length),h.read(this,e,!1,52,8)};function H(r,e,n,a,f,d){if(!c.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>f||e<d)throw new RangeError('"value" argument is out of bounds');if(n+a>r.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,n,a,f){if(e=+e,n=n>>>0,a=a>>>0,!f){const N=Math.pow(2,8*a)-1;H(this,e,n,a,N,0)}let d=1,v=0;for(this[n]=e&255;++v<a&&(d*=256);)this[n+v]=e/d&255;return n+a},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,n,a,f){if(e=+e,n=n>>>0,a=a>>>0,!f){const N=Math.pow(2,8*a)-1;H(this,e,n,a,N,0)}let d=a-1,v=1;for(this[n+d]=e&255;--d>=0&&(v*=256);)this[n+d]=e/v&255;return n+a},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,1,255,0),this[n]=e&255,n+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function he(r,e,n,a,f){Fe(e,a,f,r,n,7);let d=Number(e&BigInt(4294967295));r[n++]=d,d=d>>8,r[n++]=d,d=d>>8,r[n++]=d,d=d>>8,r[n++]=d;let v=Number(e>>BigInt(32)&BigInt(4294967295));return r[n++]=v,v=v>>8,r[n++]=v,v=v>>8,r[n++]=v,v=v>>8,r[n++]=v,n}function de(r,e,n,a,f){Fe(e,a,f,r,n,7);let d=Number(e&BigInt(4294967295));r[n+7]=d,d=d>>8,r[n+6]=d,d=d>>8,r[n+5]=d,d=d>>8,r[n+4]=d;let v=Number(e>>BigInt(32)&BigInt(4294967295));return r[n+3]=v,v=v>>8,r[n+2]=v,v=v>>8,r[n+1]=v,v=v>>8,r[n]=v,n+8}c.prototype.writeBigUInt64LE=Ae(function(e,n=0){return he(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeBigUInt64BE=Ae(function(e,n=0){return de(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeIntLE=function(e,n,a,f){if(e=+e,n=n>>>0,!f){const ie=Math.pow(2,8*a-1);H(this,e,n,a,ie-1,-ie)}let d=0,v=1,N=0;for(this[n]=e&255;++d<a&&(v*=256);)e<0&&N===0&&this[n+d-1]!==0&&(N=1),this[n+d]=(e/v>>0)-N&255;return n+a},c.prototype.writeIntBE=function(e,n,a,f){if(e=+e,n=n>>>0,!f){const ie=Math.pow(2,8*a-1);H(this,e,n,a,ie-1,-ie)}let d=a-1,v=1,N=0;for(this[n+d]=e&255;--d>=0&&(v*=256);)e<0&&N===0&&this[n+d+1]!==0&&(N=1),this[n+d]=(e/v>>0)-N&255;return n+a},c.prototype.writeInt8=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1},c.prototype.writeInt16LE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2},c.prototype.writeInt16BE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2},c.prototype.writeInt32LE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4},c.prototype.writeInt32BE=function(e,n,a){return e=+e,n=n>>>0,a||H(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4},c.prototype.writeBigInt64LE=Ae(function(e,n=0){return he(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeBigInt64BE=Ae(function(e,n=0){return de(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function k(r,e,n,a,f,d){if(n+a>r.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function U(r,e,n,a,f){return e=+e,n=n>>>0,f||k(r,e,n,4),h.write(r,e,n,a,23,4),n+4}c.prototype.writeFloatLE=function(e,n,a){return U(this,e,n,!0,a)},c.prototype.writeFloatBE=function(e,n,a){return U(this,e,n,!1,a)};function V(r,e,n,a,f){return e=+e,n=n>>>0,f||k(r,e,n,8),h.write(r,e,n,a,52,8),n+8}c.prototype.writeDoubleLE=function(e,n,a){return V(this,e,n,!0,a)},c.prototype.writeDoubleBE=function(e,n,a){return V(this,e,n,!1,a)},c.prototype.copy=function(e,n,a,f){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(a||(a=0),!f&&f!==0&&(f=this.length),n>=e.length&&(n=e.length),n||(n=0),f>0&&f<a&&(f=a),f===a||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("sourceEnd out of bounds");f>this.length&&(f=this.length),e.length-n<f-a&&(f=e.length-n+a);const d=f-a;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,a,f):Uint8Array.prototype.set.call(e,this.subarray(a,f),n),d},c.prototype.fill=function(e,n,a,f){if(typeof e=="string"){if(typeof n=="string"?(f=n,n=0,a=this.length):typeof a=="string"&&(f=a,a=this.length),f!==void 0&&typeof f!="string")throw new TypeError("encoding must be a string");if(typeof f=="string"&&!c.isEncoding(f))throw new TypeError("Unknown encoding: "+f);if(e.length===1){const v=e.charCodeAt(0);(f==="utf8"&&v<128||f==="latin1")&&(e=v)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<a)throw new RangeError("Out of range index");if(a<=n)return this;n=n>>>0,a=a===void 0?this.length:a>>>0,e||(e=0);let d;if(typeof e=="number")for(d=n;d<a;++d)this[d]=e;else{const v=c.isBuffer(e)?e:c.from(e,f),N=v.length;if(N===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(d=0;d<a-n;++d)this[d+n]=v[d%N]}return this};const M={};function G(r,e,n){M[r]=class extends n{constructor(){super();Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(f){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:f,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}G("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),G("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError),G("ERR_OUT_OF_RANGE",function(r,e,n){let a=`The value of "${r}" is out of range.`,f=n;return Number.isInteger(n)&&Math.abs(n)>2**32?f=ne(String(n)):typeof n=="bigint"&&(f=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(f=ne(f)),f+="n"),a+=` It must be ${e}. Received ${f}`,a},RangeError);function ne(r){let e="",n=r.length;const a=r[0]==="-"?1:0;for(;n>=a+4;n-=3)e=`_${r.slice(n-3,n)}${e}`;return`${r.slice(0,n)}${e}`}function Le(r,e,n){i(e,"offset"),(r[e]===void 0||r[e+n]===void 0)&&u(e,r.length-(n+1))}function Fe(r,e,n,a,f,d){if(r>n||r<e){const v=typeof e=="bigint"?"n":"";let N;throw d>3?e===0||e===BigInt(0)?N=`>= 0${v} and < 2${v} ** ${(d+1)*8}${v}`:N=`>= -(2${v} ** ${(d+1)*8-1}${v}) and < 2 ** ${(d+1)*8-1}${v}`:N=`>= ${e}${v} and <= ${n}${v}`,new M.ERR_OUT_OF_RANGE("value",N,r)}Le(a,f,d)}function i(r,e){if(typeof r!="number")throw new M.ERR_INVALID_ARG_TYPE(e,"number",r)}function u(r,e,n){throw Math.floor(r)!==r?(i(r,n),new M.ERR_OUT_OF_RANGE(n||"offset","an integer",r)):e<0?new M.ERR_BUFFER_OUT_OF_BOUNDS:new M.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,r)}const o=/[^+/0-9A-Za-z-_]/g;function w(r){if(r=r.split("=")[0],r=r.trim().replace(o,""),r.length<2)return"";for(;r.length%4!=0;)r=r+"=";return r}function _(r,e){e=e||1/0;let n;const a=r.length;let f=null;const d=[];for(let v=0;v<a;++v){if(n=r.charCodeAt(v),n>55295&&n<57344){if(!f){if(n>56319){(e-=3)>-1&&d.push(239,191,189);continue}else if(v+1===a){(e-=3)>-1&&d.push(239,191,189);continue}f=n;continue}if(n<56320){(e-=3)>-1&&d.push(239,191,189),f=n;continue}n=(f-55296<<10|n-56320)+65536}else f&&(e-=3)>-1&&d.push(239,191,189);if(f=null,n<128){if((e-=1)<0)break;d.push(n)}else if(n<2048){if((e-=2)<0)break;d.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;d.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;d.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return d}function C(r){const e=[];for(let n=0;n<r.length;++n)e.push(r.charCodeAt(n)&255);return e}function j(r,e){let n,a,f;const d=[];for(let v=0;v<r.length&&!((e-=2)<0);++v)n=r.charCodeAt(v),a=n>>8,f=n%256,d.push(f),d.push(a);return d}function Y(r){return l.toByteArray(w(r))}function J(r,e,n,a){let f;for(f=0;f<a&&!(f+n>=e.length||f>=r.length);++f)e[f+n]=r[f];return f}function te(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Ce(r){return r!==r}const ge=function(){const r="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const a=n*16;for(let f=0;f<16;++f)e[a+f]=r[n]+r[f]}return e}();function Ae(r){return typeof BigInt=="undefined"?cn:r}function cn(){throw new Error("BigInt not supported")}})(nn);var Oe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Tn(t){var l={exports:{}};return t(l,l.exports),l.exports}var Ue=Tn(function(t){(function(l){var h=/^\s+/,b=/\s+$/,m=0,s=l.round,g=l.min,c=l.max,y=l.random;function x(i,u){if(i=i||"",u=u||{},i instanceof x)return i;if(!(this instanceof x))return new x(i,u);var o=A(i);this._originalInput=i,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=s(100*this._a)/100,this._format=u.format||o.format,this._gradientType=u.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=o.ok,this._tc_id=m++}x.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(i.r*299+i.g*587+i.b*114)/1e3},getLuminance:function(){var i=this.toRgb(),u,o,w,_,C,j;return u=i.r/255,o=i.g/255,w=i.b/255,u<=.03928?_=u/12.92:_=l.pow((u+.055)/1.055,2.4),o<=.03928?C=o/12.92:C=l.pow((o+.055)/1.055,2.4),w<=.03928?j=w/12.92:j=l.pow((w+.055)/1.055,2.4),.2126*_+.7152*C+.0722*j},setAlpha:function(i){return this._a=le(i),this._roundA=s(100*this._a)/100,this},toHsv:function(){var i=se(this._r,this._g,this._b);return{h:i.h*360,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=se(this._r,this._g,this._b),u=s(i.h*360),o=s(i.s*100),w=s(i.v*100);return this._a==1?"hsv("+u+", "+o+"%, "+w+"%)":"hsva("+u+", "+o+"%, "+w+"%, "+this._roundA+")"},toHsl:function(){var i=W(this._r,this._g,this._b);return{h:i.h*360,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=W(this._r,this._g,this._b),u=s(i.h*360),o=s(i.s*100),w=s(i.l*100);return this._a==1?"hsl("+u+", "+o+"%, "+w+"%)":"hsla("+u+", "+o+"%, "+w+"%, "+this._roundA+")"},toHex:function(i){return ye(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return ve(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(D(this._r,255)*100)+"%",g:s(D(this._g,255)*100)+"%",b:s(D(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+s(D(this._r,255)*100)+"%, "+s(D(this._g,255)*100)+"%, "+s(D(this._b,255)*100)+"%)":"rgba("+s(D(this._r,255)*100)+"%, "+s(D(this._g,255)*100)+"%, "+s(D(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:re[ye(this._r,this._g,this._b,!0)]||!1},toFilter:function(i){var u="#"+_e(this._r,this._g,this._b,this._a),o=u,w=this._gradientType?"GradientType = 1, ":"";if(i){var _=x(i);o="#"+_e(_._r,_._g,_._b,_._a)}return"progid:DXImageTransform.Microsoft.gradient("+w+"startColorstr="+u+",endColorstr="+o+")"},toString:function(i){var u=!!i;i=i||this._format;var o=!1,w=this._a<1&&this._a>=0,_=!u&&w&&(i==="hex"||i==="hex6"||i==="hex3"||i==="hex4"||i==="hex8"||i==="name");return _?i==="name"&&this._a===0?this.toName():this.toRgbString():(i==="rgb"&&(o=this.toRgbString()),i==="prgb"&&(o=this.toPercentageRgbString()),(i==="hex"||i==="hex6")&&(o=this.toHexString()),i==="hex3"&&(o=this.toHexString(!0)),i==="hex4"&&(o=this.toHex8String(!0)),i==="hex8"&&(o=this.toHex8String()),i==="name"&&(o=this.toName()),i==="hsl"&&(o=this.toHslString()),i==="hsv"&&(o=this.toHsvString()),o||this.toHexString())},clone:function(){return x(this.toString())},_applyModification:function(i,u){var o=i.apply(null,[this].concat([].slice.call(u)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(q,arguments)},brighten:function(){return this._applyModification(F,arguments)},darken:function(){return this._applyModification(E,arguments)},desaturate:function(){return this._applyModification(Ee,arguments)},saturate:function(){return this._applyModification(Re,arguments)},greyscale:function(){return this._applyModification(ue,arguments)},spin:function(){return this._applyModification(I,arguments)},_applyCombination:function(i,u){return i.apply(null,[this].concat([].slice.call(u)))},analogous:function(){return this._applyCombination(P,arguments)},complement:function(){return this._applyCombination(L,arguments)},monochromatic:function(){return this._applyCombination(oe,arguments)},splitcomplement:function(){return this._applyCombination(T,arguments)},triad:function(){return this._applyCombination(O,arguments)},tetrad:function(){return this._applyCombination($,arguments)}},x.fromRatio=function(i,u){if(typeof i=="object"){var o={};for(var w in i)i.hasOwnProperty(w)&&(w==="a"?o[w]=i[w]:o[w]=U(i[w]));i=o}return x(i,u)};function A(i){var u={r:0,g:0,b:0},o=1,w=null,_=null,C=null,j=!1,Y=!1;return typeof i=="string"&&(i=Le(i)),typeof i=="object"&&(ne(i.r)&&ne(i.g)&&ne(i.b)?(u=B(i.r,i.g,i.b),j=!0,Y=String(i.r).substr(-1)==="%"?"prgb":"rgb"):ne(i.h)&&ne(i.s)&&ne(i.v)?(w=U(i.s),_=U(i.v),u=Q(i.h,w,_),j=!0,Y="hsv"):ne(i.h)&&ne(i.s)&&ne(i.l)&&(w=U(i.s),C=U(i.l),u=Z(i.h,w,C),j=!0,Y="hsl"),i.hasOwnProperty("a")&&(o=i.a)),o=le(o),{ok:j,format:i.format||Y,r:g(255,c(u.r,0)),g:g(255,c(u.g,0)),b:g(255,c(u.b,0)),a:o}}function B(i,u,o){return{r:D(i,255)*255,g:D(u,255)*255,b:D(o,255)*255}}function W(i,u,o){i=D(i,255),u=D(u,255),o=D(o,255);var w=c(i,u,o),_=g(i,u,o),C,j,Y=(w+_)/2;if(w==_)C=j=0;else{var J=w-_;switch(j=Y>.5?J/(2-w-_):J/(w+_),w){case i:C=(u-o)/J+(u<o?6:0);break;case u:C=(o-i)/J+2;break;case o:C=(i-u)/J+4;break}C/=6}return{h:C,s:j,l:Y}}function Z(i,u,o){var w,_,C;i=D(i,360),u=D(u,100),o=D(o,100);function j(te,Ce,ge){return ge<0&&(ge+=1),ge>1&&(ge-=1),ge<1/6?te+(Ce-te)*6*ge:ge<1/2?Ce:ge<2/3?te+(Ce-te)*(2/3-ge)*6:te}if(u===0)w=_=C=o;else{var Y=o<.5?o*(1+u):o+u-o*u,J=2*o-Y;w=j(J,Y,i+1/3),_=j(J,Y,i),C=j(J,Y,i-1/3)}return{r:w*255,g:_*255,b:C*255}}function se(i,u,o){i=D(i,255),u=D(u,255),o=D(o,255);var w=c(i,u,o),_=g(i,u,o),C,j,Y=w,J=w-_;if(j=w===0?0:J/w,w==_)C=0;else{switch(w){case i:C=(u-o)/J+(u<o?6:0);break;case u:C=(o-i)/J+2;break;case o:C=(i-u)/J+4;break}C/=6}return{h:C,s:j,v:Y}}function Q(i,u,o){i=D(i,360)*6,u=D(u,100),o=D(o,100);var w=l.floor(i),_=i-w,C=o*(1-u),j=o*(1-_*u),Y=o*(1-(1-_)*u),J=w%6,te=[o,j,C,C,Y,o][J],Ce=[Y,o,o,j,C,C][J],ge=[C,C,Y,o,o,j][J];return{r:te*255,g:Ce*255,b:ge*255}}function ye(i,u,o,w){var _=[k(s(i).toString(16)),k(s(u).toString(16)),k(s(o).toString(16))];return w&&_[0].charAt(0)==_[0].charAt(1)&&_[1].charAt(0)==_[1].charAt(1)&&_[2].charAt(0)==_[2].charAt(1)?_[0].charAt(0)+_[1].charAt(0)+_[2].charAt(0):_.join("")}function ve(i,u,o,w,_){var C=[k(s(i).toString(16)),k(s(u).toString(16)),k(s(o).toString(16)),k(V(w))];return _&&C[0].charAt(0)==C[0].charAt(1)&&C[1].charAt(0)==C[1].charAt(1)&&C[2].charAt(0)==C[2].charAt(1)&&C[3].charAt(0)==C[3].charAt(1)?C[0].charAt(0)+C[1].charAt(0)+C[2].charAt(0)+C[3].charAt(0):C.join("")}function _e(i,u,o,w){var _=[k(V(w)),k(s(i).toString(16)),k(s(u).toString(16)),k(s(o).toString(16))];return _.join("")}x.equals=function(i,u){return!i||!u?!1:x(i).toRgbString()==x(u).toRgbString()},x.random=function(){return x.fromRatio({r:y(),g:y(),b:y()})};function Ee(i,u){u=u===0?0:u||10;var o=x(i).toHsl();return o.s-=u/100,o.s=z(o.s),x(o)}function Re(i,u){u=u===0?0:u||10;var o=x(i).toHsl();return o.s+=u/100,o.s=z(o.s),x(o)}function ue(i){return x(i).desaturate(100)}function q(i,u){u=u===0?0:u||10;var o=x(i).toHsl();return o.l+=u/100,o.l=z(o.l),x(o)}function F(i,u){u=u===0?0:u||10;var o=x(i).toRgb();return o.r=c(0,g(255,o.r-s(255*-(u/100)))),o.g=c(0,g(255,o.g-s(255*-(u/100)))),o.b=c(0,g(255,o.b-s(255*-(u/100)))),x(o)}function E(i,u){u=u===0?0:u||10;var o=x(i).toHsl();return o.l-=u/100,o.l=z(o.l),x(o)}function I(i,u){var o=x(i).toHsl(),w=(o.h+u)%360;return o.h=w<0?360+w:w,x(o)}function L(i){var u=x(i).toHsl();return u.h=(u.h+180)%360,x(u)}function O(i){var u=x(i).toHsl(),o=u.h;return[x(i),x({h:(o+120)%360,s:u.s,l:u.l}),x({h:(o+240)%360,s:u.s,l:u.l})]}function $(i){var u=x(i).toHsl(),o=u.h;return[x(i),x({h:(o+90)%360,s:u.s,l:u.l}),x({h:(o+180)%360,s:u.s,l:u.l}),x({h:(o+270)%360,s:u.s,l:u.l})]}function T(i){var u=x(i).toHsl(),o=u.h;return[x(i),x({h:(o+72)%360,s:u.s,l:u.l}),x({h:(o+216)%360,s:u.s,l:u.l})]}function P(i,u,o){u=u||6,o=o||30;var w=x(i).toHsl(),_=360/o,C=[x(i)];for(w.h=(w.h-(_*u>>1)+720)%360;--u;)w.h=(w.h+_)%360,C.push(x(w));return C}function oe(i,u){u=u||6;for(var o=x(i).toHsv(),w=o.h,_=o.s,C=o.v,j=[],Y=1/u;u--;)j.push(x({h:w,s:_,v:C})),C=(C+Y)%1;return j}x.mix=function(i,u,o){o=o===0?0:o||50;var w=x(i).toRgb(),_=x(u).toRgb(),C=o/100,j={r:(_.r-w.r)*C+w.r,g:(_.g-w.g)*C+w.g,b:(_.b-w.b)*C+w.b,a:(_.a-w.a)*C+w.a};return x(j)},x.readability=function(i,u){var o=x(i),w=x(u);return(l.max(o.getLuminance(),w.getLuminance())+.05)/(l.min(o.getLuminance(),w.getLuminance())+.05)},x.isReadable=function(i,u,o){var w=x.readability(i,u),_,C;switch(C=!1,_=Fe(o),_.level+_.size){case"AAsmall":case"AAAlarge":C=w>=4.5;break;case"AAlarge":C=w>=3;break;case"AAAsmall":C=w>=7;break}return C},x.mostReadable=function(i,u,o){var w=null,_=0,C,j,Y,J;o=o||{},j=o.includeFallbackColors,Y=o.level,J=o.size;for(var te=0;te<u.length;te++)C=x.readability(i,u[te]),C>_&&(_=C,w=x(u[te]));return x.isReadable(i,w,{level:Y,size:J})||!j?w:(o.includeFallbackColors=!1,x.mostReadable(i,["#fff","#000"],o))};var ce=x.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},re=x.hexNames=me(ce);function me(i){var u={};for(var o in i)i.hasOwnProperty(o)&&(u[i[o]]=o);return u}function le(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function D(i,u){he(i)&&(i="100%");var o=de(i);return i=g(u,c(0,parseFloat(i))),o&&(i=parseInt(i*u,10)/100),l.abs(i-u)<1e-6?1:i%u/parseFloat(u)}function z(i){return g(1,c(0,i))}function H(i){return parseInt(i,16)}function he(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1}function de(i){return typeof i=="string"&&i.indexOf("%")!=-1}function k(i){return i.length==1?"0"+i:""+i}function U(i){return i<=1&&(i=i*100+"%"),i}function V(i){return l.round(parseFloat(i)*255).toString(16)}function M(i){return H(i)/255}var G=function(){var i="[-\\+]?\\d+%?",u="[-\\+]?\\d*\\.\\d+%?",o="(?:"+u+")|(?:"+i+")",w="[\\s|\\(]+("+o+")[,|\\s]+("+o+")[,|\\s]+("+o+")\\s*\\)?",_="[\\s|\\(]+("+o+")[,|\\s]+("+o+")[,|\\s]+("+o+")[,|\\s]+("+o+")\\s*\\)?";return{CSS_UNIT:new RegExp(o),rgb:new RegExp("rgb"+w),rgba:new RegExp("rgba"+_),hsl:new RegExp("hsl"+w),hsla:new RegExp("hsla"+_),hsv:new RegExp("hsv"+w),hsva:new RegExp("hsva"+_),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function ne(i){return!!G.CSS_UNIT.exec(i)}function Le(i){i=i.replace(h,"").replace(b,"").toLowerCase();var u=!1;if(ce[i])i=ce[i],u=!0;else if(i=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var o;return(o=G.rgb.exec(i))?{r:o[1],g:o[2],b:o[3]}:(o=G.rgba.exec(i))?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=G.hsl.exec(i))?{h:o[1],s:o[2],l:o[3]}:(o=G.hsla.exec(i))?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=G.hsv.exec(i))?{h:o[1],s:o[2],v:o[3]}:(o=G.hsva.exec(i))?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=G.hex8.exec(i))?{r:H(o[1]),g:H(o[2]),b:H(o[3]),a:M(o[4]),format:u?"name":"hex8"}:(o=G.hex6.exec(i))?{r:H(o[1]),g:H(o[2]),b:H(o[3]),format:u?"name":"hex"}:(o=G.hex4.exec(i))?{r:H(o[1]+""+o[1]),g:H(o[2]+""+o[2]),b:H(o[3]+""+o[3]),a:M(o[4]+""+o[4]),format:u?"name":"hex8"}:(o=G.hex3.exec(i))?{r:H(o[1]+""+o[1]),g:H(o[2]+""+o[2]),b:H(o[3]+""+o[3]),format:u?"name":"hex"}:!1}function Fe(i){var u,o;return i=i||{level:"AA",size:"small"},u=(i.level||"AA").toUpperCase(),o=(i.size||"small").toLowerCase(),u!=="AA"&&u!=="AAA"&&(u="AA"),o!=="small"&&o!=="large"&&(o="small"),{level:u,size:o}}t.exports?t.exports=x:window.tinycolor=x})(Math)});function Ye(t,l){var h=t&&t.a,b;t&&t.hsl?b=Ue(t.hsl):t&&t.hex&&t.hex.length>0?b=Ue(t.hex):t&&t.hsv?b=Ue(t.hsv):t&&t.rgba?b=Ue(t.rgba):t&&t.rgb?b=Ue(t.rgb):b=Ue(t),b&&(b._a===void 0||b._a===null)&&b.setAlpha(h||1);var m=b.toHsl(),s=b.toHsv();return m.s===0&&(s.h=m.h=t.h||t.hsl&&t.hsl.h||l||0),{hsl:m,hex:b.toHexString().toUpperCase(),hex8:b.toHex8String().toUpperCase(),rgba:b.toRgb(),hsv:s,oldHue:t.h||l||m.h,source:t.source,a:t.a||b.getAlpha()}}var Be={model:{prop:"modelValue",event:"update:modelValue"},props:["modelValue"],data(){return{val:Ye(this.modelValue)}},computed:{colors:{get(){return this.val},set(t){this.val=t,this.$emit("update:modelValue",t)}}},watch:{modelValue(t){this.val=Ye(t)}},methods:{colorChange(t,l){this.oldHue=this.colors.hsl.h,this.colors=Ye(t,l||this.oldHue)},isValidHex(t){return Ue(t).isValid()},simpleCheckForValidColor(t){for(var l=["r","g","b","a","h","s","l","v"],h=0,b=0,m=0;m<l.length;m++){var s=l[m];t[s]&&(h++,isNaN(t[s])||b++)}if(h===b)return t},paletteUpperCase(t){return t.map(l=>l.toUpperCase())},isTransparent(t){return Ue(t).getAlpha()===0}}},Pe={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(t){if(this.max!==void 0&&+t>this.max)this.$refs.input.value=this.max;else return t}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(t){this.handleChange(t.target.value)},handleChange(t){let l={};l[this.label]=t,l.hex===void 0&&l["#"]===void 0?this.$emit("change",l):t.length>5&&this.$emit("change",l)},handleKeyDown(t){let l=this.val,h=Number(l);if(h){let b=this.arrowOffset||1;t.keyCode===38&&(l=h+b,this.handleChange(l),t.preventDefault()),t.keyCode===40&&(l=h-b,this.handleChange(l),t.preventDefault())}}}};const Un={class:"vc-editable-input"},Rn={class:"vc-input__desc"};function Ln(t,l,h,b,m,s){return S(),R("div",Un,[ke(p("input",{"aria-labelledby":s.labelId,class:"vc-input__input","onUpdate:modelValue":l[1]||(l[1]=g=>s.val=g),onKeydown:l[2]||(l[2]=(...g)=>s.handleKeyDown&&s.handleKeyDown(...g)),onInput:l[3]||(l[3]=(...g)=>s.update&&s.update(...g)),ref:"input"},null,40,["aria-labelledby"]),[[un,s.val]]),p("span",{for:h.label,class:"vc-input__label",id:s.labelId},Ie(s.labelSpanText),9,["for","id"]),p("span",Rn,Ie(h.desc),1)])}function pe(t,l){l===void 0&&(l={});var h=l.insertAt;if(!(!t||typeof document=="undefined")){var b=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.type="text/css",h==="top"&&b.firstChild?b.insertBefore(m,b.firstChild):b.appendChild(m),m.styleSheet?m.styleSheet.cssText=t:m.appendChild(document.createTextNode(t))}}var Dn=`
.vc-editable-input {
  position: relative;
}
.vc-input__input {
  padding: 0;
  border: 0;
  outline: none;
}
.vc-input__label {
  text-transform: capitalize;
}
`;pe(Dn);Pe.render=Ln;var Je=Pn;function Pn(t,l,h){return l<h?t<l?l:t>h?h:t:t<h?h:t>l?l:t}var rn="Expected a function",an=0/0,Mn="[object Symbol]",$n=/^\s+|\s+$/g,Nn=/^[-+]0x[0-9a-f]+$/i,Hn=/^0b[01]+$/i,zn=/^0o[0-7]+$/i,On=parseInt,jn=typeof Oe=="object"&&Oe&&Oe.Object===Object&&Oe,Vn=typeof self=="object"&&self&&self.Object===Object&&self,Gn=jn||Vn||Function("return this")(),Wn=Object.prototype,Xn=Wn.toString,qn=Math.max,Yn=Math.min,Ke=function(){return Gn.Date.now()};function Jn(t,l,h){var b,m,s,g,c,y,x=0,A=!1,B=!1,W=!0;if(typeof t!="function")throw new TypeError(rn);l=on(l)||0,je(h)&&(A=!!h.leading,B="maxWait"in h,s=B?qn(on(h.maxWait)||0,l):s,W="trailing"in h?!!h.trailing:W);function Z(q){var F=b,E=m;return b=m=void 0,x=q,g=t.apply(E,F),g}function se(q){return x=q,c=setTimeout(ve,l),A?Z(q):g}function Q(q){var F=q-y,E=q-x,I=l-F;return B?Yn(I,s-E):I}function ye(q){var F=q-y,E=q-x;return y===void 0||F>=l||F<0||B&&E>=s}function ve(){var q=Ke();if(ye(q))return _e(q);c=setTimeout(ve,Q(q))}function _e(q){return c=void 0,W&&b?Z(q):(b=m=void 0,g)}function Ee(){c!==void 0&&clearTimeout(c),x=0,b=y=m=c=void 0}function Re(){return c===void 0?g:_e(Ke())}function ue(){var q=Ke(),F=ye(q);if(b=arguments,m=this,y=q,F){if(c===void 0)return se(y);if(B)return c=setTimeout(ve,l),Z(y)}return c===void 0&&(c=setTimeout(ve,l)),g}return ue.cancel=Ee,ue.flush=Re,ue}function Kn(t,l,h){var b=!0,m=!0;if(typeof t!="function")throw new TypeError(rn);return je(h)&&(b="leading"in h?!!h.leading:b,m="trailing"in h?!!h.trailing:m),Jn(t,l,{leading:b,maxWait:l,trailing:m})}function je(t){var l=typeof t;return!!t&&(l=="object"||l=="function")}function Zn(t){return!!t&&typeof t=="object"}function Qn(t){return typeof t=="symbol"||Zn(t)&&Xn.call(t)==Mn}function on(t){if(typeof t=="number")return t;if(Qn(t))return an;if(je(t)){var l=typeof t.valueOf=="function"?t.valueOf():t;t=je(l)?l+"":l}if(typeof t!="string")return t===0?t:+t;t=t.replace($n,"");var h=Hn.test(t);return h||zn.test(t)?On(t.slice(2),h?2:8):Nn.test(t)?an:+t}var et=Kn,Ve={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return-(this.colors.hsv.v*100)+1+100+"%"},pointerLeft(){return this.colors.hsv.s*100+"%"}},methods:{throttle:et((t,l)=>{t(l)},20,{leading:!0,trailing:!1}),handleChange(t,l){!l&&t.preventDefault();var h=this.$refs.container;if(!!h){var b=h.clientWidth,m=h.clientHeight,s=h.getBoundingClientRect().left+window.pageXOffset,g=h.getBoundingClientRect().top+window.pageYOffset,c=t.pageX||(t.touches?t.touches[0].pageX:0),y=t.pageY||(t.touches?t.touches[0].pageY:0),x=Je(c-s,0,b),A=Je(y-g,0,m),B=x/b,W=Je(-(A/m)+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:B,v:W,a:this.colors.hsv.a,source:"hsva"})}},onChange(t){this.$emit("change",t)},handleMouseDown(t){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(t){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const nt=p("div",{class:"vc-saturation--white"},null,-1),tt=p("div",{class:"vc-saturation--black"},null,-1),rt=p("div",{class:"vc-saturation-circle"},null,-1);function it(t,l,h,b,m,s){return S(),R("div",{class:"vc-saturation",style:{background:s.bgColor},ref:"container",onMousedown:l[1]||(l[1]=(...g)=>s.handleMouseDown&&s.handleMouseDown(...g)),onTouchmove:l[2]||(l[2]=(...g)=>s.handleChange&&s.handleChange(...g)),onTouchstart:l[3]||(l[3]=(...g)=>s.handleChange&&s.handleChange(...g))},[nt,tt,p("div",{class:"vc-saturation-pointer",style:{top:s.pointerTop,left:s.pointerLeft}},[rt],4)],36)}var at=`
.vc-saturation,
.vc-saturation--white,
.vc-saturation--black {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.vc-saturation--white {
  background: linear-gradient(to right, #fff, rgba(255,255,255,0));
}
.vc-saturation--black {
  background: linear-gradient(to top, #000, rgba(0,0,0,0));
}
.vc-saturation-pointer {
  cursor: pointer;
  position: absolute;
}
.vc-saturation-circle {
  cursor: head;
  width: 4px;
  height: 4px;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
  border-radius: 50%;
  transform: translate(-2px, -2px);
}
`;pe(at);Ve.render=it;var Ne={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data(){return{oldHue:0,pullDirection:""}},computed:{colors(){const t=this.value.hsl.h;return t!==0&&t-this.oldHue>0&&(this.pullDirection="right"),t!==0&&t-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=t,this.value},directionClass(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:-(this.colors.hsl.h*100/360)+100+"%":0},pointerLeft(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":this.colors.hsl.h*100/360+"%"}},methods:{handleChange(t,l){!l&&t.preventDefault();var h=this.$refs.container;if(!!h){var b=h.clientWidth,m=h.clientHeight,s=h.getBoundingClientRect().left+window.pageXOffset,g=h.getBoundingClientRect().top+window.pageYOffset,c=t.pageX||(t.touches?t.touches[0].pageX:0),y=t.pageY||(t.touches?t.touches[0].pageY:0),x=c-s,A=y-g,B,W;this.direction==="vertical"?(A<0?B=360:A>m?B=0:(W=-(A*100/m)+100,B=360*W/100),this.colors.hsl.h!==B&&this.$emit("change",{h:B,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(x<0?B=0:x>b?B=360:(W=x*100/b,B=360*W/100),this.colors.hsl.h!==B&&this.$emit("change",{h:B,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(t){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const ot=p("div",{class:"vc-hue-picker"},null,-1);function st(t,l,h,b,m,s){return S(),R("div",{class:["vc-hue",s.directionClass]},[p("div",{class:"vc-hue-container",role:"slider","aria-valuenow":s.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360",ref:"container",onMousedown:l[1]||(l[1]=(...g)=>s.handleMouseDown&&s.handleMouseDown(...g)),onTouchmove:l[2]||(l[2]=(...g)=>s.handleChange&&s.handleChange(...g)),onTouchstart:l[3]||(l[3]=(...g)=>s.handleChange&&s.handleChange(...g))},[p("div",{class:"vc-hue-pointer",style:{top:s.pointerTop,left:s.pointerLeft},role:"presentation"},[ot],4)],40,["aria-valuenow"])],2)}var lt=`
.vc-hue {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 2px;
}
.vc-hue--horizontal {
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue--vertical {
  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue-container {
  cursor: pointer;
  margin: 0 2px;
  position: relative;
  height: 100%;
}
.vc-hue-pointer {
  z-index: 2;
  position: absolute;
}
.vc-hue-picker {
  cursor: pointer;
  margin-top: 1px;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  transform: translateX(-2px) ;
}
`;pe(lt);Ne.render=st;let Ze={};var Ge={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":"url("+ht(this.white,this.grey,this.size)+")"}}}};function ct(t,l,h){if(typeof document=="undefined")return null;var b=document.createElement("canvas");b.width=b.height=h*2;var m=b.getContext("2d");return m?(m.fillStyle=t,m.fillRect(0,0,b.width,b.height),m.fillStyle=l,m.fillRect(0,0,h,h),m.translate(h,h),m.fillRect(0,0,h,h),b.toDataURL()):null}function ht(t,l,h){var b=t+","+l+","+h;if(Ze[b])return Ze[b];var m=ct(t,l,h);return Ze[b]=m,m}function ut(t,l,h,b,m,s){return S(),R("div",{class:"vc-checkerboard",style:s.bgStyle},null,4)}var ft=`
.vc-checkerboard {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-size: contain;
}
`;pe(ft);Ge.render=ut;var We={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:Ge},computed:{colors(){return this.value},gradientColor(){var t=this.colors.rgba,l=[t.r,t.g,t.b].join(",");return"linear-gradient(to right, rgba("+l+", 0) 0%, rgba("+l+", 1) 100%)"}},methods:{handleChange(t,l){!l&&t.preventDefault();var h=this.$refs.container;if(!!h){var b=h.clientWidth,m=h.getBoundingClientRect().left+window.pageXOffset,s=t.pageX||(t.touches?t.touches[0].pageX:0),g=s-m,c;g<0?c=0:g>b?c=1:c=Math.round(g*100/b)/100,this.colors.a!==c&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:c,source:"rgba"})}},handleMouseDown(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const dt={class:"vc-alpha"},pt={class:"vc-alpha-checkboard-wrap"},gt=p("div",{class:"vc-alpha-picker"},null,-1);function vt(t,l,h,b,m,s){const g=K("checkboard");return S(),R("div",dt,[p("div",pt,[p(g)]),p("div",{class:"vc-alpha-gradient",style:{background:s.gradientColor}},null,4),p("div",{class:"vc-alpha-container",ref:"container",onMousedown:l[1]||(l[1]=(...c)=>s.handleMouseDown&&s.handleMouseDown(...c)),onTouchmove:l[2]||(l[2]=(...c)=>s.handleChange&&s.handleChange(...c)),onTouchstart:l[3]||(l[3]=(...c)=>s.handleChange&&s.handleChange(...c))},[p("div",{class:"vc-alpha-pointer",style:{left:s.colors.a*100+"%"}},[gt],4)],544)])}var bt=`
.vc-alpha {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-checkboard-wrap {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}
.vc-alpha-gradient {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-container {
  cursor: pointer;
  position: relative;
  z-index: 2;
  height: 100%;
  margin: 0 3px;
}
.vc-alpha-pointer {
  z-index: 2;
  position: absolute;
}
.vc-alpha-picker {
  cursor: pointer;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  margin-top: 1px;
  transform: translateX(-2px);
}
`;pe(bt);We.render=vt;var xt={name:"Chrome",mixins:[Be],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:Ve,hue:Ne,alpha:We,"ed-in":Pe,checkboard:Ge},data(){return{fieldsIndex:0,highlight:!1}},computed:{hsl(){const{h:t,s:l,l:h}=this.colors.hsl;return{h:t.toFixed(),s:`${(l*100).toFixed()}%`,l:`${(h*100).toFixed()}%`}},activeColor(){const t=this.colors.rgba;return"rgba("+[t.r,t.g,t.b,t.a].join(",")+")"},hasAlpha(){return this.colors.a<1}},methods:{childChange(t){this.colorChange(t)},inputChange(t){if(!!t){if(t.hex)this.isValidHex(t.hex)&&this.colorChange({hex:t.hex,source:"hex"});else if(t.r||t.g||t.b||t.a)this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"});else if(t.h||t.s||t.l){const l=t.s?t.s.replace("%","")/100:this.colors.hsl.s,h=t.l?t.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:t.h||this.colors.hsl.h,s:l,l:h,source:"hsl"})}}},toggleViews(){if(this.fieldsIndex>=2){this.fieldsIndex=0;return}this.fieldsIndex++},showHighlight(){this.highlight=!0},hideHighlight(){this.highlight=!1}}};const mt={class:"vc-chrome-saturation-wrap"},wt={class:"vc-chrome-body"},yt={class:"vc-chrome-controls"},_t={class:"vc-chrome-color-wrap"},Ct={class:"vc-chrome-sliders"},kt={class:"vc-chrome-hue-wrap"},Bt={key:0,class:"vc-chrome-alpha-wrap"},Et={key:0,class:"vc-chrome-fields-wrap"},Ft={class:"vc-chrome-fields"},At={class:"vc-chrome-field"},It={class:"vc-chrome-fields"},St={class:"vc-chrome-field"},Tt={class:"vc-chrome-field"},Ut={class:"vc-chrome-field"},Rt={key:0,class:"vc-chrome-field"},Lt={class:"vc-chrome-fields"},Dt={class:"vc-chrome-field"},Pt={class:"vc-chrome-field"},Mt={class:"vc-chrome-field"},$t={key:0,class:"vc-chrome-field"},Nt={class:"vc-chrome-toggle-icon"},Ht=p("path",{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"},null,-1),zt={class:"vc-chrome-toggle-icon-highlight"};function Ot(t,l,h,b,m,s){const g=K("saturation"),c=K("checkboard"),y=K("hue"),x=K("alpha"),A=K("ed-in");return S(),R("div",{role:"application","aria-label":"Chrome color picker",class:["vc-chrome",h.disableAlpha?"vc-chrome__disable-alpha":""]},[p("div",mt,[p(g,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]),p("div",wt,[p("div",yt,[p("div",_t,[p("div",{"aria-label":`current color is ${t.colors.hex}`,class:"vc-chrome-active-color",style:{background:s.activeColor}},null,12,["aria-label"]),h.disableAlpha?be("",!0):(S(),R(c,{key:0}))]),p("div",Ct,[p("div",kt,[p(y,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]),h.disableAlpha?be("",!0):(S(),R("div",Bt,[p(x,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]))])]),h.disableFields?be("",!0):(S(),R("div",Et,[ke(p("div",Ft,[p("div",At,[s.hasAlpha?be("",!0):(S(),R(A,{key:0,label:"hex",value:t.colors.hex,onChange:s.inputChange},null,8,["value","onChange"])),s.hasAlpha?(S(),R(A,{key:1,label:"hex",value:t.colors.hex8,onChange:s.inputChange},null,8,["value","onChange"])):be("",!0)])],512),[[Te,m.fieldsIndex===0]]),ke(p("div",It,[p("div",St,[p(A,{label:"r",value:t.colors.rgba.r,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",Tt,[p(A,{label:"g",value:t.colors.rgba.g,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",Ut,[p(A,{label:"b",value:t.colors.rgba.b,onChange:s.inputChange},null,8,["value","onChange"])]),h.disableAlpha?be("",!0):(S(),R("div",Rt,[p(A,{label:"a",value:t.colors.a,"arrow-offset":.01,max:1,onChange:s.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[Te,m.fieldsIndex===1]]),ke(p("div",Lt,[p("div",Dt,[p(A,{label:"h",value:s.hsl.h,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",Pt,[p(A,{label:"s",value:s.hsl.s,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",Mt,[p(A,{label:"l",value:s.hsl.l,onChange:s.inputChange},null,8,["value","onChange"])]),h.disableAlpha?be("",!0):(S(),R("div",$t,[p(A,{label:"a",value:t.colors.a,"arrow-offset":.01,max:1,onChange:s.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[Te,m.fieldsIndex===2]]),p("div",{class:"vc-chrome-toggle-btn",role:"button","aria-label":"Change another color definition",onClick:l[4]||(l[4]=(...B)=>s.toggleViews&&s.toggleViews(...B))},[p("div",Nt,[(S(),R("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",onMouseover:l[1]||(l[1]=(...B)=>s.showHighlight&&s.showHighlight(...B)),onMouseenter:l[2]||(l[2]=(...B)=>s.showHighlight&&s.showHighlight(...B)),onMouseout:l[3]||(l[3]=(...B)=>s.hideHighlight&&s.hideHighlight(...B))},[Ht],32))]),ke(p("div",zt,null,512),[[Te,m.highlight]])])]))])],2)}var jt=`
.vc-chrome {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);
  box-sizing: initial;
  width: 225px;
  font-family: Menlo;
  background-color: #fff;
}
.vc-chrome-controls {
  display: flex;
}
.vc-chrome-color-wrap {
  position: relative;
  width: 36px;
}
.vc-chrome-active-color {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
}
.vc-chrome-color-wrap .vc-checkerboard {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-size: auto;
}
.vc-chrome-sliders {
  flex: 1;
}
.vc-chrome-fields-wrap {
  display: flex;
  padding-top: 16px;
}
.vc-chrome-fields {
  display: flex;
  margin-left: -6px;
  flex: 1;
}
.vc-chrome-field {
  padding-left: 6px;
  width: 100%;
}
.vc-chrome-toggle-btn {
  width: 32px;
  text-align: right;
  position: relative;
}
.vc-chrome-toggle-icon {
  margin-right: -4px;
  margin-top: 12px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.vc-chrome-toggle-icon-highlight {
  position: absolute;
  width: 24px;
  height: 28px;
  background: #eee;
  border-radius: 4px;
  top: 10px;
  left: 12px;
}
.vc-chrome-hue-wrap {
  position: relative;
  height: 10px;
  margin-bottom: 8px;
}
.vc-chrome-alpha-wrap {
  position: relative;
  height: 10px;
}
.vc-chrome-hue-wrap .vc-hue {
  border-radius: 2px;
}
.vc-chrome-alpha-wrap .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  transform: translate(-6px, -2px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.vc-chrome-body {
  padding: 16px 16px 12px;
  background-color: #fff;
}
.vc-chrome-saturation-wrap {
  width: 100%;
  padding-bottom: 55%;
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.vc-chrome-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-chrome-fields .vc-input__input {
  font-size: 11px;
  color: #333;
  width: 100%;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0 0 0 1px #dadada;
  height: 21px;
  text-align: center;
}
.vc-chrome-fields .vc-input__label {
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  color: #969696;
  text-align: center;
  display: block;
  margin-top: 12px;
}
.vc-chrome__disable-alpha .vc-chrome-active-color {
  width: 18px;
  height: 18px;
}
.vc-chrome__disable-alpha .vc-chrome-color-wrap {
  width: 30px;
}
.vc-chrome__disable-alpha .vc-chrome-hue-wrap {
  margin-top: 4px;
  margin-bottom: 4px;
}
`;pe(jt);xt.render=Ot;const Vt=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];var sn={name:"Compact",mixins:[Be],props:{palette:{type:Array,default(){return Vt}}},components:{"ed-in":Pe},computed:{pick(){return this.colors.hex.toUpperCase()}},methods:{handlerClick(t){this.colorChange({hex:t,source:"hex"})}}};const Gt={role:"application","aria-label":"Compact color picker",class:"vc-compact"},Wt={class:"vc-compact-colors",role:"listbox"},Xt={class:"vc-compact-dot"};function qt(t,l,h,b,m,s){return S(),R("div",Gt,[p("ul",Wt,[(S(!0),R(Se,null,De(t.paletteUpperCase(h.palette),g=>(S(),R("li",{role:"option","aria-label":"color:"+g,"aria-selected":g===s.pick,class:["vc-compact-color-item",{"vc-compact-color-item--white":g==="#FFFFFF"}],key:g,style:{background:g},onClick:c=>s.handlerClick(g)},[ke(p("div",Xt,null,512),[[Te,g===s.pick]])],14,["aria-label","aria-selected","onClick"]))),128))])])}var Yt=`
.vc-compact {
  padding-top: 5px;
  padding-left: 5px;
  width: 245px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-compact-colors {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-compact-color-item {
  list-style: none;
  width: 15px;
  height: 15px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
}
.vc-compact-color-item--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-compact-color-item--white .vc-compact-dot {
  background: #000;
}
.vc-compact-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
`;pe(Yt);sn.render=qt;const Jt=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];var Kt={name:"Grayscale",mixins:[Be],props:{palette:{type:Array,default(){return Jt}}},components:{},computed:{pick(){return this.colors.hex.toUpperCase()}},methods:{handlerClick(t){this.colorChange({hex:t,source:"hex"})}}};const Zt={role:"application","aria-label":"Grayscale color picker",class:"vc-grayscale"},Qt={class:"vc-grayscale-colors",role:"listbox"},er={class:"vc-grayscale-dot"};function nr(t,l,h,b,m,s){return S(),R("div",Zt,[p("ul",Qt,[(S(!0),R(Se,null,De(t.paletteUpperCase(h.palette),g=>(S(),R("li",{role:"option","aria-label":"Color:"+g,"aria-selected":g===s.pick,key:g,class:["vc-grayscale-color-item",{"vc-grayscale-color-item--white":g=="#FFFFFF"}],style:{background:g},onClick:c=>s.handlerClick(g)},[ke(p("div",er,null,512),[[Te,g===s.pick]])],14,["aria-label","aria-selected","onClick"]))),128))])])}var tr=`
.vc-grayscale {
  width: 125px;
  border-radius: 2px;
  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-grayscale-colors {
  border-radius: 2px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-grayscale-color-item {
  list-style: none;
  width: 25px;
  height: 25px;
  float: left;
  position: relative;
  cursor: pointer;
}
.vc-grayscale-color-item--white .vc-grayscale-dot {
  background: #000;
}
.vc-grayscale-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -2px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
`;pe(tr);Kt.render=nr;var rr={name:"Material",mixins:[Be],components:{"ed-in":Pe},methods:{onChange(t){!t||(t.hex?this.isValidHex(t.hex)&&this.colorChange({hex:t.hex,source:"hex"}):(t.r||t.g||t.b)&&this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"}))}}};const ir={role:"application","aria-label":"Material color picker",class:"vc-material"},ar={class:"vc-material-split"},or={class:"vc-material-third"},sr={class:"vc-material-third"},lr={class:"vc-material-third"};function cr(t,l,h,b,m,s){const g=K("ed-in");return S(),R("div",ir,[p(g,{class:"vc-material-hex",label:"hex",value:t.colors.hex,style:{borderColor:t.colors.hex},onChange:s.onChange},null,8,["value","style","onChange"]),p("div",ar,[p("div",or,[p(g,{label:"r",value:t.colors.rgba.r,onChange:s.onChange},null,8,["value","onChange"])]),p("div",sr,[p(g,{label:"g",value:t.colors.rgba.g,onChange:s.onChange},null,8,["value","onChange"])]),p("div",lr,[p(g,{label:"b",value:t.colors.rgba.b,onChange:s.onChange},null,8,["value","onChange"])])])])}var hr=`
.vc-material {
  width: 98px;
  height: 98px;
  padding: 16px;
  font-family: "Roboto";
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-material .vc-input__input {
  width: 100%;
  margin-top: 12px;
  font-size: 15px;
  color: #333;
  height: 30px;
}
.vc-material .vc-input__label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 11px;
  color: #999;
  text-transform: capitalize;
}
.vc-material-hex {
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
.vc-material-split {
  display: flex;
  margin-right: -10px;
  padding-top: 11px;
}
.vc-material-third {
  flex: 1;
  padding-right: 10px;
}
`;pe(hr);rr.render=cr;var ur={name:"Photoshop",mixins:[Be],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:Ve,hue:Ne,alpha:We,"ed-in":Pe},data(){return{currentColor:"#FFF"}},computed:{hsv(){const t=this.colors.hsv;return{h:t.h.toFixed(),s:(t.s*100).toFixed(),v:(t.v*100).toFixed()}},hex(){const t=this.colors.hex;return t&&t.replace("#","")}},created(){this.currentColor=this.colors.hex},methods:{childChange(t){this.colorChange(t)},inputChange(t){!t||(t["#"]?this.isValidHex(t["#"])&&this.colorChange({hex:t["#"],source:"hex"}):t.r||t.g||t.b||t.a?this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"}):(t.h||t.s||t.v)&&this.colorChange({h:t.h||this.colors.hsv.h,s:t.s/100||this.colors.hsv.s,v:t.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept(){this.$emit("ok")},handleCancel(){this.$emit("cancel")},handleReset(){this.$emit("reset")}}};const fr={role:"heading",class:"vc-ps-head"},dr={class:"vc-ps-body"},pr={class:"vc-ps-saturation-wrap"},gr={class:"vc-ps-hue-wrap"},vr=p("div",{class:"vc-ps-hue-pointer"},[p("i",{class:"vc-ps-hue-pointer--left"}),p("i",{class:"vc-ps-hue-pointer--right"})],-1),br={class:"vc-ps-previews"},xr={class:"vc-ps-previews__label"},mr={class:"vc-ps-previews__swatches"},wr={class:"vc-ps-previews__label"},yr={key:0,class:"vc-ps-actions"},_r={class:"vc-ps-fields"},Cr=p("div",{class:"vc-ps-fields__divider"},null,-1),kr=p("div",{class:"vc-ps-fields__divider"},null,-1);function Br(t,l,h,b,m,s){const g=K("saturation"),c=K("hue"),y=K("ed-in");return S(),R("div",{role:"application","aria-label":"PhotoShop color picker",class:["vc-photoshop",h.disableFields?"vc-photoshop__disable-fields":""]},[p("div",fr,Ie(h.head),1),p("div",dr,[p("div",pr,[p(g,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]),p("div",gr,[p(c,{value:t.colors,onChange:s.childChange,direction:"vertical"},{default:fe(()=>[vr]),_:1},8,["value","onChange"])]),p("div",{class:["vc-ps-controls",h.disableFields?"vc-ps-controls__disable-fields":""]},[p("div",br,[p("div",xr,Ie(h.newLabel),1),p("div",mr,[p("div",{class:"vc-ps-previews__pr-color","aria-label":`New color is ${t.colors.hex}`,style:{background:t.colors.hex}},null,12,["aria-label"]),p("div",{class:"vc-ps-previews__pr-color","aria-label":`Current color is ${m.currentColor}`,style:{background:m.currentColor},onClick:l[1]||(l[1]=(...x)=>s.clickCurrentColor&&s.clickCurrentColor(...x))},null,12,["aria-label"])]),p("div",wr,Ie(h.currentLabel),1)]),h.disableFields?be("",!0):(S(),R("div",yr,[p("div",{class:"vc-ps-ac-btn",role:"button","aria-label":h.acceptLabel,onClick:l[2]||(l[2]=(...x)=>s.handleAccept&&s.handleAccept(...x))},Ie(h.acceptLabel),9,["aria-label"]),p("div",{class:"vc-ps-ac-btn",role:"button","aria-label":h.cancelLabel,onClick:l[3]||(l[3]=(...x)=>s.handleCancel&&s.handleCancel(...x))},Ie(h.cancelLabel),9,["aria-label"]),p("div",_r,[p(y,{label:"h",desc:"\xB0",value:s.hsv.h,onChange:s.inputChange},null,8,["value","onChange"]),p(y,{label:"s",desc:"%",value:s.hsv.s,max:100,onChange:s.inputChange},null,8,["value","onChange"]),p(y,{label:"v",desc:"%",value:s.hsv.v,max:100,onChange:s.inputChange},null,8,["value","onChange"]),Cr,p(y,{label:"r",value:t.colors.rgba.r,onChange:s.inputChange},null,8,["value","onChange"]),p(y,{label:"g",value:t.colors.rgba.g,onChange:s.inputChange},null,8,["value","onChange"]),p(y,{label:"b",value:t.colors.rgba.b,onChange:s.inputChange},null,8,["value","onChange"]),kr,p(y,{label:"#",class:"vc-ps-fields__hex",value:s.hex,onChange:s.inputChange},null,8,["value","onChange"])]),h.hasResetButton?(S(),R("div",{key:0,class:"vc-ps-ac-btn","aria-label":"reset",onClick:l[4]||(l[4]=(...x)=>s.handleReset&&s.handleReset(...x))},Ie(h.resetLabel),1)):be("",!0)]))],2)])],2)}var Er=`
.vc-photoshop {
  background: #DCDCDC;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);
  box-sizing: initial;
  width: 513px;
  font-family: Roboto;
}
.vc-photoshop__disable-fields {
  width: 390px;
}
.vc-ps-head {
  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);
  border-bottom: 1px solid #B1B1B1;
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);
  height: 23px;
  line-height: 24px;
  border-radius: 4px 4px 0 0;
  font-size: 13px;
  color: #4D4D4D;
  text-align: center;
}
.vc-ps-body {
  padding: 15px;
  display: flex;
}
.vc-ps-saturation-wrap {
  width: 256px;
  height: 256px;
  position: relative;
  border: 2px solid #B3B3B3;
  border-bottom: 2px solid #F0F0F0;
  overflow: hidden;
}
.vc-ps-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-ps-hue-wrap {
  position: relative;
  height: 256px;
  width: 19px;
  margin-left: 10px;
  border: 2px solid #B3B3B3;
  border-bottom: 2px solid #F0F0F0;
}
.vc-ps-hue-pointer {
  position: relative;
}
.vc-ps-hue-pointer--left,
.vc-ps-hue-pointer--right {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 8px;
  border-color: transparent transparent transparent #555;
}
.vc-ps-hue-pointer--left:after,
.vc-ps-hue-pointer--right:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 6px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: 1px;
  left: 1px;
  transform: translate(-8px, -5px);
}
.vc-ps-hue-pointer--left {
  transform: translate(-13px, -4px);
}
.vc-ps-hue-pointer--right {
  transform: translate(20px, -4px) rotate(180deg);
}
.vc-ps-controls {
  width: 180px;
  margin-left: 10px;
  display: flex;
}
.vc-ps-controls__disable-fields {
  width: auto;
}
.vc-ps-actions {
  margin-left: 20px;
  flex: 1;
}
.vc-ps-ac-btn {
  cursor: pointer;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);
  border: 1px solid #878787;
  border-radius: 2px;
  height: 20px;
  box-shadow: 0 1px 0 0 #EAEAEA;
  font-size: 14px;
  color: #000;
  line-height: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.vc-ps-previews {
  width: 60px;
}
.vc-ps-previews__swatches {
  border: 1px solid #B3B3B3;
  border-bottom: 1px solid #F0F0F0;
  margin-bottom: 2px;
  margin-top: 1px;
}
.vc-ps-previews__pr-color {
  height: 34px;
  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
}
.vc-ps-previews__label {
  font-size: 14px;
  color: #000;
  text-align: center;
}
.vc-ps-fields {
  padding-top: 5px;
  padding-bottom: 9px;
  width: 80px;
  position: relative;
}
.vc-ps-fields .vc-input__input {
  margin-left: 40%;
  width: 40%;
  height: 18px;
  border: 1px solid #888888;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;
  margin-bottom: 5px;
  font-size: 13px;
  padding-left: 3px;
  margin-right: 10px;
}
.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {
  top: 0;
  text-transform: uppercase;
  font-size: 13px;
  height: 18px;
  line-height: 22px;
  position: absolute;
}
.vc-ps-fields .vc-input__label {
  left: 0;
  width: 34px;
}
.vc-ps-fields .vc-input__desc {
  right: 0;
  width: 0;
}
.vc-ps-fields__divider {
  height: 5px;
}
.vc-ps-fields__hex .vc-input__input {
  margin-left: 20%;
  width: 80%;
  height: 18px;
  border: 1px solid #888888;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;
  margin-bottom: 6px;
  font-size: 13px;
  padding-left: 3px;
}
.vc-ps-fields__hex .vc-input__label {
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  text-transform: uppercase;
  font-size: 13px;
  height: 18px;
  line-height: 22px;
}
`;pe(Er);ur.render=Br;const Fr=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];var Ar={name:"Sketch",mixins:[Be],components:{saturation:Ve,hue:Ne,alpha:We,"ed-in":Pe,checkboard:Ge},props:{presetColors:{type:Array,default(){return Fr}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex(){let t;return this.colors.a<1?t=this.colors.hex8:t=this.colors.hex,t.replace("#","")},activeColor(){var t=this.colors.rgba;return"rgba("+[t.r,t.g,t.b,t.a].join(",")+")"}},methods:{handlePreset(t){this.colorChange({hex:t,source:"hex"})},childChange(t){this.colorChange(t)},inputChange(t){!t||(t.hex?this.isValidHex(t.hex)&&this.colorChange({hex:t.hex,source:"hex"}):(t.r||t.g||t.b||t.a)&&this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"}))}}};const Ir={class:"vc-sketch-saturation-wrap"},Sr={class:"vc-sketch-controls"},Tr={class:"vc-sketch-sliders"},Ur={class:"vc-sketch-hue-wrap"},Rr={key:0,class:"vc-sketch-alpha-wrap"},Lr={class:"vc-sketch-color-wrap"},Dr={key:0,class:"vc-sketch-field"},Pr={class:"vc-sketch-field--double"},Mr={class:"vc-sketch-field--single"},$r={class:"vc-sketch-field--single"},Nr={class:"vc-sketch-field--single"},Hr={key:0,class:"vc-sketch-field--single"},zr={class:"vc-sketch-presets",role:"group","aria-label":"A color preset, pick one to set as current color"};function Or(t,l,h,b,m,s){const g=K("saturation"),c=K("hue"),y=K("alpha"),x=K("checkboard"),A=K("ed-in");return S(),R("div",{role:"application","aria-label":"Sketch color picker",class:["vc-sketch",h.disableAlpha?"vc-sketch__disable-alpha":""]},[p("div",Ir,[p(g,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]),p("div",Sr,[p("div",Tr,[p("div",Ur,[p(c,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]),h.disableAlpha?be("",!0):(S(),R("div",Rr,[p(y,{value:t.colors,onChange:s.childChange},null,8,["value","onChange"])]))]),p("div",Lr,[p("div",{"aria-label":`Current color is ${s.activeColor}`,class:"vc-sketch-active-color",style:{background:s.activeColor}},null,12,["aria-label"]),p(x)])]),h.disableFields?be("",!0):(S(),R("div",Dr,[p("div",Pr,[p(A,{label:"hex",value:s.hex,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",Mr,[p(A,{label:"r",value:t.colors.rgba.r,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",$r,[p(A,{label:"g",value:t.colors.rgba.g,onChange:s.inputChange},null,8,["value","onChange"])]),p("div",Nr,[p(A,{label:"b",value:t.colors.rgba.b,onChange:s.inputChange},null,8,["value","onChange"])]),h.disableAlpha?be("",!0):(S(),R("div",Hr,[p(A,{label:"a",value:t.colors.a,"arrow-offset":.01,max:1,onChange:s.inputChange},null,8,["value","arrow-offset","onChange"])]))])),p("div",zr,[(S(!0),R(Se,null,De(h.presetColors,B=>(S(),R(Se,null,[t.isTransparent(B)?(S(),R("div",{key:B,"aria-label":"Color:"+B,class:"vc-sketch-presets-color",onClick:W=>s.handlePreset(B)},[p(x)],8,["aria-label","onClick"])):(S(),R("div",{key:`!${B}`,class:"vc-sketch-presets-color","aria-label":"Color:"+B,style:{background:B},onClick:W=>s.handlePreset(B)},null,12,["aria-label","onClick"]))],64))),256))])],2)}var jr=`
.vc-sketch {
  position: relative;
  width: 200px;
  padding: 10px 10px 0;
  box-sizing: initial;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);
}
.vc-sketch-saturation-wrap {
  width: 100%;
  padding-bottom: 75%;
  position: relative;
  overflow: hidden;
}
.vc-sketch-controls {
  display: flex;
}
.vc-sketch-sliders {
  padding: 4px 0;
  flex: 1;
}
.vc-sketch-sliders .vc-hue,
.vc-sketch-sliders .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-sketch-hue-wrap {
  position: relative;
  height: 10px;
}
.vc-sketch-alpha-wrap {
  position: relative;
  height: 10px;
  margin-top: 4px;
  overflow: hidden;
}
.vc-sketch-color-wrap {
  width: 24px;
  height: 24px;
  position: relative;
  margin-top: 4px;
  margin-left: 4px;
  border-radius: 3px;
}
.vc-sketch-active-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);
  z-index: 2;
}
.vc-sketch-color-wrap .vc-checkerboard {
  background-size: auto;
}
.vc-sketch-field {
  display: flex;
  padding-top: 4px;
}
.vc-sketch-field .vc-input__input {
  width: 90%;
  padding: 4px 0 3px 10%;
  border: none;
  box-shadow: inset 0 0 0 1px #ccc;
  font-size: 10px;
}
.vc-sketch-field .vc-input__label {
  display: block;
  text-align: center;
  font-size: 11px;
  color: #222;
  padding-top: 3px;
  padding-bottom: 4px;
  text-transform: capitalize;
}
.vc-sketch-field--single {
  flex: 1;
  padding-left: 6px;
}
.vc-sketch-field--double {
  flex: 2;
}
.vc-sketch-presets {
  margin-right: -10px;
  margin-left: -10px;
  padding-left: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}
.vc-sketch-presets-color {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0 10px 10px 0;
  vertical-align: top;
  cursor: pointer;
  width: 16px;
  height: 16px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
}
.vc-sketch-presets-color .vc-checkerboard {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
  border-radius: 3px;
}
.vc-sketch__disable-alpha .vc-sketch-color-wrap {
  height: 10px;
}
`;pe(jr);Ar.render=Or;const $e=.5;var Vr={name:"Slider",mixins:[Be],props:{swatches:{type:Array,default(){return[{s:$e,l:.8},{s:$e,l:.65},{s:$e,l:.5},{s:$e,l:.35},{s:$e,l:.2}]}}},components:{hue:Ne},computed:{normalizedSwatches(){return this.swatches.map(l=>typeof l!="object"?{s:$e,l}:l)}},methods:{isActive(t,l){const h=this.colors.hsl;return h.l===1&&t.l===1||h.l===0&&t.l===0?!0:Math.abs(h.l-t.l)<.01&&Math.abs(h.s-t.s)<.01},hueChange(t){this.colorChange(t)},handleSwClick(t,l){this.colorChange({h:this.colors.hsl.h,s:l.s,l:l.l,source:"hsl"})}}};const Gr={role:"application","aria-label":"Slider color picker",class:"vc-slider"},Wr={class:"vc-slider-hue-warp"},Xr={class:"vc-slider-swatches",role:"group"};function qr(t,l,h,b,m,s){const g=K("hue");return S(),R("div",Gr,[p("div",Wr,[p(g,{value:t.colors,onChange:s.hueChange},null,8,["value","onChange"])]),p("div",Xr,[(S(!0),R(Se,null,De(s.normalizedSwatches,(c,y)=>(S(),R("div",{class:"vc-slider-swatch",key:y,"data-index":y,"aria-label":"color:"+t.colors.hex,role:"button",onClick:x=>s.handleSwClick(y,c)},[p("div",{class:["vc-slider-swatch-picker",{"vc-slider-swatch-picker--active":s.isActive(c,y),"vc-slider-swatch-picker--white":c.l===1}],style:{background:"hsl("+t.colors.hsl.h+", "+c.s*100+"%, "+c.l*100+"%)"}},null,6)],8,["data-index","aria-label","onClick"]))),128))])])}var Yr=`
.vc-slider {
  position: relative;
  width: 410px;
}
.vc-slider-hue-warp {
  height: 12px;
  position: relative;
}
.vc-slider-hue-warp .vc-hue-picker {
  width: 14px;
  height: 14px;
  border-radius: 6px;
  transform: translate(-7px, -2px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.vc-slider-swatches {
  display: flex;
  margin-top: 20px;
}
.vc-slider-swatch {
  margin-right: 1px;
  flex: 1;
  width: 20%;
}
.vc-slider-swatch:first-child {
  margin-right: 1px;
}
.vc-slider-swatch:first-child .vc-slider-swatch-picker {
  border-radius: 2px 0px 0px 2px;
}
.vc-slider-swatch:last-child {
  margin-right: 0;
}
.vc-slider-swatch:last-child .vc-slider-swatch-picker {
  border-radius: 0px 2px 2px 0px;
}
.vc-slider-swatch-picker {
  cursor: pointer;
  height: 12px;
}
.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {
  transform: scaleY(1.8);
  border-radius: 3.6px/2px;
}
.vc-slider-swatch-picker--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {
  box-shadow: inset 0 0 0 0.6px #ddd;
}
`;pe(Yr);Vr.render=qr;var Jr={"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},Kr={"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},Zr={"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},Qr={"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},ei={"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},ni={"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},ti={"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},ri={"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},ii={"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},ai={"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},oi={"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},si={"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},li={"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},ci={"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},hi={"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},ui={"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},fi={"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},di={"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},pi={"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},gi={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},vi={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},bi={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},xi={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},mi="#ffffff",wi="#000000",yi={red:Jr,pink:Kr,purple:Zr,deepPurple:Qr,indigo:ei,blue:ni,lightBlue:ti,cyan:ri,teal:ii,green:ai,lightGreen:oi,lime:si,yellow:li,amber:ci,orange:hi,deepOrange:ui,brown:fi,grey:di,blueGrey:pi,darkText:gi,lightText:vi,darkIcons:bi,lightIcons:xi,white:mi,black:wi},_i=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],Ci=["900","700","500","300","100"],ki=(()=>{var t=[];return _i.forEach(l=>{var h=[];l.toLowerCase()==="black"||l.toLowerCase()==="white"?h=h.concat(["#000000","#FFFFFF"]):Ci.forEach(b=>{const m=yi[l][b];h.push(m.toUpperCase())}),t.push(h)}),t})(),Bi={name:"Swatches",mixins:[Be],props:{palette:{type:Array,default(){return ki}}},computed:{pick(){return this.colors.hex}},methods:{equal(t){return t.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick(t){this.colorChange({hex:t,source:"hex"})}}};const Ei={class:"vc-swatches-box",role:"listbox"},Fi={class:"vc-swatches-pick"},Ai=p("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24"},[p("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})],-1);function Ii(t,l,h,b,m,s){return S(),R("div",{role:"application","aria-label":"Swatches color picker",class:"vc-swatches","data-pick":s.pick},[p("div",Ei,[(S(!0),R(Se,null,De(h.palette,(g,c)=>(S(),R("div",{class:"vc-swatches-color-group",key:c},[(S(!0),R(Se,null,De(g,y=>(S(),R("div",{class:["vc-swatches-color-it",{"vc-swatches-color--white":y==="#FFFFFF"}],role:"option","aria-label":"Color:"+y,"aria-selected":s.equal(y),key:y,"data-color":y,style:{background:y},onClick:x=>s.handlerClick(y)},[ke(p("div",Fi,[Ai],512),[[Te,s.equal(y)]])],14,["aria-label","aria-selected","data-color","onClick"]))),128))]))),128))])],8,["data-pick"])}var Si=`
.vc-swatches {
  width: 320px;
  height: 240px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
}
.vc-swatches-box {
  padding: 16px 0 6px 16px;
  overflow: hidden;
}
.vc-swatches-color-group {
  padding-bottom: 10px;
  width: 40px;
  float: left;
  margin-right: 10px;
}
.vc-swatches-color-it {
  box-sizing: border-box;
  width: 40px;
  height: 24px;
  cursor: pointer;
  background: #880e4f;
  margin-bottom: 1px;
  overflow: hidden;
  -ms-border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -o-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
  border-radius: 2px 2px 0 0;
}
.vc-swatches-color--white {
  border: 1px solid #DDD;
}
.vc-swatches-pick {
  fill: rgb(255, 255, 255);
  margin-left: 8px;
  display: block;
}
.vc-swatches-color--white .vc-swatches-pick {
  fill: rgb(51, 51, 51);
}
`;pe(Si);Bi.render=Ii;const Ti=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];var Ui={name:"Twitter",mixins:[Be],components:{editableInput:Pe},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default(){return Ti}},triangle:{default:"top-left",validator(t){return["hide","top-left","top-right"].includes(t)}}},computed:{hsv(){const t=this.colors.hsv;return{h:t.h.toFixed(),s:(t.s*100).toFixed(),v:(t.v*100).toFixed()}},hex(){const t=this.colors.hex;return t&&t.replace("#","")}},methods:{equal(t){return t.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick(t){this.colorChange({hex:t,source:"hex"})},inputChange(t){!t||(t["#"]?this.isValidHex(t["#"])&&this.colorChange({hex:t["#"],source:"hex"}):t.r||t.g||t.b||t.a?this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"}):(t.h||t.s||t.v)&&this.colorChange({h:t.h||this.colors.hsv.h,s:t.s/100||this.colors.hsv.s,v:t.v/100||this.colors.hsv.v,source:"hsv"}))}}};const Ri=p("div",{class:"vc-twitter-triangle-shadow"},null,-1),Li=p("div",{class:"vc-twitter-triangle"},null,-1),Di={class:"vc-twitter-body"},Pi=p("div",{class:"vc-twitter-hash"},"#",-1),Mi=p("div",{class:"vc-twitter-clear"},null,-1);function $i(t,l,h,b,m,s){const g=K("editable-input");return S(),R("div",{class:["vc-twitter",{"vc-twitter-hide-triangle ":h.triangle==="hide","vc-twitter-top-left-triangle ":h.triangle==="top-left","vc-twitter-top-right-triangle ":h.triangle==="top-right"}],style:{width:typeof h.width=="number"?`${h.width}px`:h.width}},[Ri,Li,p("div",Di,[(S(!0),R(Se,null,De(h.defaultColors,(c,y)=>(S(),R("span",{class:"vc-twitter-swatch",style:{background:c,boxShadow:`0 0 4px ${s.equal(c)?c:"transparent"}`},key:y,onClick:x=>s.handlerClick(c)},null,12,["onClick"]))),128)),Pi,p(g,{label:"#",value:s.hex,onChange:s.inputChange},null,8,["value","onChange"]),Mi])],6)}var Ni=`
.vc-twitter {
  background: #fff;
  border: 0 solid rgba(0,0,0,0.25);
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  border-radius: 4px;
  position: relative;
}
.vc-twitter-triangle {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 9px 10px 9px;
  border-color: transparent transparent #fff transparent;
  position: absolute;
}
.vc-twitter-triangle-shadow {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 9px 10px 9px;
  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;
  position: absolute;
}
.vc-twitter-body {
  padding: 15px 9px 9px 15px;
}
.vc-twitter .vc-editable-input {
  position: relative;
}
.vc-twitter .vc-editable-input input {
  width: 100px;
  font-size: 14px;
  color: #666;
  border: 0px;
  outline: none;
  height: 28px;
  box-shadow: inset 0 0 0 1px #F0F0F0;
  box-sizing: content-box;
  border-radius: 0 4px 4px 0;
  float: left;
  padding: 1px;
  padding-left: 8px;
}
.vc-twitter .vc-editable-input span {
  display: none;
}
.vc-twitter-hash {
  background: #F0F0F0;
  height: 30px;
  width: 30px;
  border-radius: 4px 0 0 4px;
  float: left;
  color: #98A1A4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-twitter-swatch {
  width: 30px;
  height: 30px;
  float: left;
  border-radius: 4px;
  margin: 0 6px 6px 0;
  cursor: pointer;
  position: relative;
  outline: none;
}
.vc-twitter-clear {
  clear: both;
}
.vc-twitter-hide-triangle .vc-twitter-triangle {
  display: none;
}
.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {
  display: none;
}
.vc-twitter-top-left-triangle .vc-twitter-triangle{
  top: -10px;
  left: 12px;
}
.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{
  top: -11px;
  left: 12px;
}
.vc-twitter-top-right-triangle .vc-twitter-triangle{
  top: -10px;
  right: 12px;
}
.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{
  top: -11px;
  right: 12px;
}
`;pe(Ni);Ui.render=$i;var ln={exports:{}};(function(t){(function(l){var h=Ee(),b=Re(),m=ue(),s=q(),g={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:y,toPng:A,toJpeg:B,toBlob:W,toPixelData:x,impl:{fontFaces:m,images:s,util:h,inliner:b,options:{}}};t.exports=c;function y(F,E){return E=E||{},Z(E),Promise.resolve(F).then(function(L){return Q(L,E.filter,!0)}).then(ye).then(ve).then(I).then(function(L){return _e(L,E.width||h.width(F),E.height||h.height(F))});function I(L){return E.bgcolor&&(L.style.backgroundColor=E.bgcolor),E.width&&(L.style.width=E.width+"px"),E.height&&(L.style.height=E.height+"px"),E.style&&Object.keys(E.style).forEach(function(O){L.style[O]=E.style[O]}),L}}function x(F,E){return se(F,E||{}).then(function(I){return I.getContext("2d").getImageData(0,0,h.width(F),h.height(F)).data})}function A(F,E){return se(F,E||{}).then(function(I){return I.toDataURL()})}function B(F,E){return E=E||{},se(F,E).then(function(I){return I.toDataURL("image/jpeg",E.quality||1)})}function W(F,E){return se(F,E||{}).then(h.canvasToBlob)}function Z(F){typeof F.imagePlaceholder=="undefined"?c.impl.options.imagePlaceholder=g.imagePlaceholder:c.impl.options.imagePlaceholder=F.imagePlaceholder,typeof F.cacheBust=="undefined"?c.impl.options.cacheBust=g.cacheBust:c.impl.options.cacheBust=F.cacheBust}function se(F,E){return y(F,E).then(h.makeImage).then(h.delay(100)).then(function(L){var O=I(F);return O.getContext("2d").drawImage(L,0,0),O});function I(L){var O=document.createElement("canvas");if(O.width=E.width||h.width(L),O.height=E.height||h.height(L),E.bgcolor){var $=O.getContext("2d");$.fillStyle=E.bgcolor,$.fillRect(0,0,O.width,O.height)}return O}}function Q(F,E,I){if(!I&&E&&!E(F))return Promise.resolve();return Promise.resolve(F).then(L).then(function(T){return O(F,T,E)}).then(function(T){return $(F,T)});function L(T){return T instanceof HTMLCanvasElement?h.makeImage(T.toDataURL()):T.cloneNode(!1)}function O(T,P,oe){var ce=T.childNodes;if(ce.length===0)return Promise.resolve(P);return re(P,h.asArray(ce),oe).then(function(){return P});function re(me,le,D){var z=Promise.resolve();return le.forEach(function(H){z=z.then(function(){return Q(H,D)}).then(function(he){he&&me.appendChild(he)})}),z}}function $(T,P){if(!(P instanceof Element))return P;return Promise.resolve().then(oe).then(ce).then(re).then(me).then(function(){return P});function oe(){le(window.getComputedStyle(T),P.style);function le(D,z){D.cssText?z.cssText=D.cssText:H(D,z);function H(he,de){h.asArray(he).forEach(function(k){de.setProperty(k,he.getPropertyValue(k),he.getPropertyPriority(k))})}}}function ce(){[":before",":after"].forEach(function(D){le(D)});function le(D){var z=window.getComputedStyle(T,D),H=z.getPropertyValue("content");if(H===""||H==="none")return;var he=h.uid();P.className=P.className+" "+he;var de=document.createElement("style");de.appendChild(k(he,D,z)),P.appendChild(de);function k(U,V,M){var G="."+U+":"+V,ne=M.cssText?Le(M):Fe(M);return document.createTextNode(G+"{"+ne+"}");function Le(i){var u=i.getPropertyValue("content");return i.cssText+" content: "+u+";"}function Fe(i){return h.asArray(i).map(u).join("; ")+";";function u(o){return o+": "+i.getPropertyValue(o)+(i.getPropertyPriority(o)?" !important":"")}}}}}function re(){T instanceof HTMLTextAreaElement&&(P.innerHTML=T.value),T instanceof HTMLInputElement&&P.setAttribute("value",T.value)}function me(){P instanceof SVGElement&&(P.setAttribute("xmlns","http://www.w3.org/2000/svg"),P instanceof SVGRectElement&&["width","height"].forEach(function(le){var D=P.getAttribute(le);!D||P.style.setProperty(le,D)}))}}}function ye(F){return m.resolveAll().then(function(E){var I=document.createElement("style");return F.appendChild(I),I.appendChild(document.createTextNode(E)),F})}function ve(F){return s.inlineAll(F).then(function(){return F})}function _e(F,E,I){return Promise.resolve(F).then(function(L){return L.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(L)}).then(h.escapeXhtml).then(function(L){return'<foreignObject x="0" y="0" width="100%" height="100%">'+L+"</foreignObject>"}).then(function(L){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+E+'" height="'+I+'">'+L+"</svg>"}).then(function(L){return"data:image/svg+xml;charset=utf-8,"+L})}function Ee(){return{escape:me,parseExtension:E,mimeType:I,dataAsUrl:re,isDataUrl:L,canvasToBlob:$,resolveUrl:T,getAndEncode:ce,uid:P(),delay:le,asArray:D,escapeXhtml:z,makeImage:oe,width:H,height:he};function F(){var k="application/font-woff",U="image/jpeg";return{woff:k,woff2:k,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:U,jpeg:U,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function E(k){var U=/\.([^\.\/]*?)$/g.exec(k);return U?U[1]:""}function I(k){var U=E(k).toLowerCase();return F()[U]||""}function L(k){return k.search(/^(data:)/)!==-1}function O(k){return new Promise(function(U){for(var V=window.atob(k.toDataURL().split(",")[1]),M=V.length,G=new Uint8Array(M),ne=0;ne<M;ne++)G[ne]=V.charCodeAt(ne);U(new Blob([G],{type:"image/png"}))})}function $(k){return k.toBlob?new Promise(function(U){k.toBlob(U)}):O(k)}function T(k,U){var V=document.implementation.createHTMLDocument(),M=V.createElement("base");V.head.appendChild(M);var G=V.createElement("a");return V.body.appendChild(G),M.href=U,G.href=k,G.href}function P(){var k=0;return function(){return"u"+U()+k++;function U(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function oe(k){return new Promise(function(U,V){var M=new Image;M.onload=function(){U(M)},M.onerror=V,M.src=k})}function ce(k){var U=3e4;return c.impl.options.cacheBust&&(k+=(/\?/.test(k)?"&":"?")+new Date().getTime()),new Promise(function(V){var M=new XMLHttpRequest;M.onreadystatechange=Le,M.ontimeout=Fe,M.responseType="blob",M.timeout=U,M.open("GET",k,!0),M.send();var G;if(c.impl.options.imagePlaceholder){var ne=c.impl.options.imagePlaceholder.split(/,/);ne&&ne[1]&&(G=ne[1])}function Le(){if(M.readyState===4){if(M.status!==200){G?V(G):i("cannot fetch resource: "+k+", status: "+M.status);return}var u=new FileReader;u.onloadend=function(){var o=u.result.split(/,/)[1];V(o)},u.readAsDataURL(M.response)}}function Fe(){G?V(G):i("timeout of "+U+"ms occured while fetching resource: "+k)}function i(u){console.error(u),V("")}})}function re(k,U){return"data:"+U+";base64,"+k}function me(k){return k.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function le(k){return function(U){return new Promise(function(V){setTimeout(function(){V(U)},k)})}}function D(k){for(var U=[],V=k.length,M=0;M<V;M++)U.push(k[M]);return U}function z(k){return k.replace(/#/g,"%23").replace(/\n/g,"%0A")}function H(k){var U=de(k,"border-left-width"),V=de(k,"border-right-width");return k.scrollWidth+U+V}function he(k){var U=de(k,"border-top-width"),V=de(k,"border-bottom-width");return k.scrollHeight+U+V}function de(k,U){var V=window.getComputedStyle(k).getPropertyValue(U);return parseFloat(V.replace("px",""))}}function Re(){var F=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:O,shouldProcess:E,impl:{readUrls:I,inline:L}};function E($){return $.search(F)!==-1}function I($){for(var T=[],P;(P=F.exec($))!==null;)T.push(P[1]);return T.filter(function(oe){return!h.isDataUrl(oe)})}function L($,T,P,oe){return Promise.resolve(T).then(function(re){return P?h.resolveUrl(re,P):re}).then(oe||h.getAndEncode).then(function(re){return h.dataAsUrl(re,h.mimeType(T))}).then(function(re){return $.replace(ce(T),"$1"+re+"$3")});function ce(re){return new RegExp(`(url\\(['"]?)(`+h.escape(re)+`)(['"]?\\))`,"g")}}function O($,T,P){if(oe())return Promise.resolve($);return Promise.resolve($).then(I).then(function(ce){var re=Promise.resolve($);return ce.forEach(function(me){re=re.then(function(le){return L(le,me,T,P)})}),re});function oe(){return!E($)}}}function ue(){return{resolveAll:F,impl:{readAll:E}};function F(){return E().then(function(I){return Promise.all(I.map(function(L){return L.resolve()}))}).then(function(I){return I.join(`
`)})}function E(){return Promise.resolve(h.asArray(document.styleSheets)).then(L).then(I).then(function($){return $.map(O)});function I($){return $.filter(function(T){return T.type===CSSRule.FONT_FACE_RULE}).filter(function(T){return b.shouldProcess(T.style.getPropertyValue("src"))})}function L($){var T=[];return $.forEach(function(P){try{h.asArray(P.cssRules||[]).forEach(T.push.bind(T))}catch(oe){console.log("Error while reading CSS rules from "+P.href,oe.toString())}}),T}function O($){return{resolve:function(){var P=($.parentStyleSheet||{}).href;return b.inlineAll($.cssText,P)},src:function(){return $.style.getPropertyValue("src")}}}}}function q(){return{inlineAll:E,impl:{newImage:F}};function F(I){return{inline:L};function L(O){return h.isDataUrl(I.src)?Promise.resolve():Promise.resolve(I.src).then(O||h.getAndEncode).then(function($){return h.dataAsUrl($,h.mimeType(I.src))}).then(function($){return new Promise(function(T,P){I.onload=T,I.onerror=P,I.src=$})})}}function E(I){if(!(I instanceof Element))return Promise.resolve(I);return L(I).then(function(){return I instanceof HTMLImageElement?F(I).inline():Promise.all(h.asArray(I.childNodes).map(function(O){return E(O)}))});function L(O){var $=O.style.getPropertyValue("background");return $?b.inlineAll($).then(function(T){O.style.setProperty("background",T,O.style.getPropertyPriority("background"))}).then(function(){return O}):Promise.resolve(O)}}}})()})(ln);var Hi=ln.exports;const{Paragraph:zi}=vn,{Item:Oi}=Qe,ji={name:"watermark",components:{Container:hn,Input:fn,Upload:dn,Button:pn,Form:Qe,FormItem:Oi,Slider:gn,Compact:sn,Paragraph:zi},data:()=>({file:"",fileName:"",loading:!1,options:{fontSize:14,text:"\u4EC5\u4F9B xxx \u9A8C\u8BC1\u4F7F\u7528",alpha:5,color:"#000000",rotate:23,width:10}}),computed:{color:{get(){return{hex:this.options.color}},set(t){t&&t.hex&&(this.options.color=t.hex)}},svg(){let t=this.options.fontSize*this.options.text.length;t=t+this.options.width/100*t;const l=`<svg xmlns="http://www.w3.org/2000/svg" width="${t}px" height="${t}px">
                <text x="50%" y="50%"
                    alignment-baseline="middle"
                    text-anchor="middle"
                    stroke="${this.options.color}"
                    opacity="${this.options.alpha/10}"
                    transform="translate(${t/2}, ${t/2}) rotate(${this.options.rotate}) translate(-${t/2}, -${t/2})"
                    font-weight="100"
                    font-size="${this.options.fontSize}"
                    font-family="microsoft yahe"
                    >
                    ${this.options.text}
                </text>
            </svg>`;return"data:image/svg+xml;base64,"+nn.Buffer.from(l).toString("base64")}},methods:{upload(t){const l=new FileReader;return l.onload=()=>{this.fileName=t.name,this.file=l.result},l.readAsDataURL(t),!1},async addWatermark(){this.loading=!0;try{const t=await Hi.toBlob(this.$refs.preview,{});yn(t,"watermark.png")}catch(t){this.$msg.error("\u751F\u6210\u5931\u8D25")}this.loading=!1}}},Vi=t=>(mn("data-v-75cfc806"),t=t(),wn(),t),Gi=Vi(()=>He("blockquote",null,"\u5168\u90E8\u8FC7\u7A0B\u5747\u5728\u672C\u5730\u8FDB\u884C\uFF0C\u672C\u5DE5\u5177\u53EF\u79BB\u7EBF\u4F7F\u7528",-1)),Wi={key:0},Xi={key:1},qi={class:"preview",ref:"preview"},Yi=["src"];function Ji(t,l,h,b,m,s){const g=K("Paragraph"),c=K("Button"),y=K("Input"),x=K("Upload"),A=K("FormItem"),B=K("Slider"),W=K("Compact"),Z=K("Form"),se=K("container");return S(),R(se,null,{default:fe(()=>[p(g,null,{default:fe(()=>[Gi]),_:1}),p(Z,{layout:"vertical"},{default:fe(()=>[p(A,{label:"\u8BF7\u9009\u62E9\u8981\u6DFB\u52A0\u6C34\u5370\u7684\u56FE\u7247"},{default:fe(()=>[p(x,{fileList:[],showUploadList:!1,accept:"image/*","before-upload":s.upload},{default:fe(()=>[p(y,{readonly:"",placeholder:"\u70B9\u51FB\u8FD9\u91CC\u4E0A\u4F20\u56FE\u7247",value:t.fileName},{addonAfter:fe(()=>[p(c,{block:"",disabled:!t.file,onClick:bn(s.addWatermark,["stop"]),loading:t.loading},{default:fe(()=>[t.loading?(S(),en("span",Wi,"\u5904\u7406\u4E2D")):(S(),en("span",Xi,"\u5F00\u59CB\u5904\u7406"))]),_:1},8,["disabled","onClick","loading"])]),_:1},8,["value"])]),_:1},8,["before-upload"])]),_:1}),p(A,{label:"\u8BF7\u8F93\u5165\u6C34\u5370\u6587\u5B57"},{default:fe(()=>[p(y,{placeholder:"\u4EC5\u4F9B xxx \u9A8C\u8BC1\u4F7F\u7528",value:t.options.text,"onUpdate:value":l[0]||(l[0]=Q=>t.options.text=Q)},null,8,["value"])]),_:1}),p(A,{label:"\u5B57\u4F53\u5927\u5C0F"},{default:fe(()=>[p(B,{max:30,min:10,value:t.options.fontSize,"onUpdate:value":l[1]||(l[1]=Q=>t.options.fontSize=Q)},null,8,["value"])]),_:1}),p(A,{label:"\u900F\u660E\u5EA6"},{default:fe(()=>[p(B,{max:10,min:1,step:.1,value:t.options.alpha,"onUpdate:value":l[2]||(l[2]=Q=>t.options.alpha=Q)},null,8,["step","value"])]),_:1}),p(A,{label:"\u65CB\u8F6C\u89D2\u5EA6"},{default:fe(()=>[p(B,{max:365,min:0,value:t.options.rotate,"onUpdate:value":l[3]||(l[3]=Q=>t.options.rotate=Q)},null,8,["value"])]),_:1}),p(A,{label:"\u6587\u672C\u95F4\u8DDD"},{default:fe(()=>[p(B,{max:100,min:0,value:t.options.width,"onUpdate:value":l[4]||(l[4]=Q=>t.options.width=Q)},null,8,["value"])]),_:1}),p(A,{label:"\u6587\u5B57\u989C\u8272"},{default:fe(()=>[p(W,{modelValue:s.color,"onUpdate:modelValue":l[5]||(l[5]=Q=>s.color=Q)},null,8,["modelValue"])]),_:1}),ke(p(A,{label:"\u9884\u89C8"},{default:fe(()=>[He("div",qi,[He("img",{src:t.file,alt:"preview"},null,8,Yi),He("div",{class:"watermark",style:xn({background:`url(${s.svg})`})},null,4)],512)]),_:1},512),[[Te,t.file]])]),_:1})]),_:1})}var aa=_n(ji,[["render",Ji],["__scopeId","data-v-75cfc806"]]);export{aa as default};
