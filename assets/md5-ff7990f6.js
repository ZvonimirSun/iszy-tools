import{C as F,h as z,y as M,D as R,o as P,c as T,w as A,a as b,n as D,z as x,b as $,A as j,B as N,E as q,_ as G}from"./index-36befa60.js";import{E as H}from"./el-space-986750a7.js";import"./index-d2029fc8.js";import{E as J,a as K}from"./el-tab-pane-ee19fb72.js";import{E as O}from"./el-upload-73f692ab.js";import"./el-progress-b1f44cd4.js";import{_ as Q}from"./Title-bdaa702d.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-5db5da5d.js";import"./strings-a8b9ad4b.js";var L={exports:{}};(function(E,w){(function(l){E.exports=l()})(function(l){var v=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function u(a,o){var e=a[0],t=a[1],n=a[2],r=a[3];e+=(t&n|~t&r)+o[0]-680876936|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+o[1]-389564586|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+o[2]+606105819|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+o[3]-1044525330|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+o[4]-176418897|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+o[5]+1200080426|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+o[6]-1473231341|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+o[7]-45705983|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+o[8]+1770035416|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+o[9]-1958414417|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+o[10]-42063|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+o[11]-1990404162|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+o[12]+1804603682|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+o[13]-40341101|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+o[14]-1502002290|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+o[15]+1236535329|0,t=(t<<22|t>>>10)+n|0,e+=(t&r|n&~r)+o[1]-165796510|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+o[6]-1069501632|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+o[11]+643717713|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+o[0]-373897302|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+o[5]-701558691|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+o[10]+38016083|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+o[15]-660478335|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+o[4]-405537848|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+o[9]+568446438|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+o[14]-1019803690|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+o[3]-187363961|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+o[8]+1163531501|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+o[13]-1444681467|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+o[2]-51403784|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+o[7]+1735328473|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+o[12]-1926607734|0,t=(t<<20|t>>>12)+n|0,e+=(t^n^r)+o[5]-378558|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+o[8]-2022574463|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+o[11]+1839030562|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+o[14]-35309556|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+o[1]-1530992060|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+o[4]+1272893353|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+o[7]-155497632|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+o[10]-1094730640|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+o[13]+681279174|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+o[0]-358537222|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+o[3]-722521979|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+o[6]+76029189|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+o[9]-640364487|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+o[12]-421815835|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+o[15]+530742520|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+o[2]-995338651|0,t=(t<<23|t>>>9)+n|0,e+=(n^(t|~r))+o[0]-198630844|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+o[7]+1126891415|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+o[14]-1416354905|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+o[5]-57434055|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+o[12]+1700485571|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+o[3]-1894986606|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+o[10]-1051523|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+o[1]-2054922799|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+o[8]+1873313359|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+o[15]-30611744|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+o[6]-1560198380|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+o[13]+1309151649|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+o[4]-145523070|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+o[11]-1120210379|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+o[2]+718787259|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+o[9]-343485551|0,t=(t<<21|t>>>11)+n|0,a[0]=e+a[0]|0,a[1]=t+a[1]|0,a[2]=n+a[2]|0,a[3]=r+a[3]|0}function U(a){var o=[],e;for(e=0;e<64;e+=4)o[e>>2]=a.charCodeAt(e)+(a.charCodeAt(e+1)<<8)+(a.charCodeAt(e+2)<<16)+(a.charCodeAt(e+3)<<24);return o}function S(a){var o=[],e;for(e=0;e<64;e+=4)o[e>>2]=a[e]+(a[e+1]<<8)+(a[e+2]<<16)+(a[e+3]<<24);return o}function B(a){var o=a.length,e=[1732584193,-271733879,-1732584194,271733878],t,n,r,f,y,m;for(t=64;t<=o;t+=64)u(e,U(a.substring(t-64,t)));for(a=a.substring(t-64),n=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=a.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),t>55)for(u(e,r),t=0;t<16;t+=1)r[t]=0;return f=o*8,f=f.toString(16).match(/(.*?)(.{0,8})$/),y=parseInt(f[2],16),m=parseInt(f[1],16)||0,r[14]=y,r[15]=m,u(e,r),e}function h(a){var o=a.length,e=[1732584193,-271733879,-1732584194,271733878],t,n,r,f,y,m;for(t=64;t<=o;t+=64)u(e,S(a.subarray(t-64,t)));for(a=t-64<o?a.subarray(t-64):new Uint8Array(0),n=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=a[t]<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),t>55)for(u(e,r),t=0;t<16;t+=1)r[t]=0;return f=o*8,f=f.toString(16).match(/(.*?)(.{0,8})$/),y=parseInt(f[2],16),m=parseInt(f[1],16)||0,r[14]=y,r[15]=m,u(e,r),e}function i(a){var o="",e;for(e=0;e<4;e+=1)o+=v[a>>e*8+4&15]+v[a>>e*8&15];return o}function p(a){var o;for(o=0;o<a.length;o+=1)a[o]=i(a[o]);return a.join("")}p(B("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function a(o,e){return o=o|0||0,o<0?Math.max(o+e,0):Math.min(o,e)}ArrayBuffer.prototype.slice=function(o,e){var t=this.byteLength,n=a(o,t),r=t,f,y,m,V;return e!==l&&(r=a(e,t)),n>r?new ArrayBuffer(0):(f=r-n,y=new ArrayBuffer(f),m=new Uint8Array(y),V=new Uint8Array(this,n,f),m.set(V),y)}}();function c(a){return/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a))),a}function d(a,o){var e=a.length,t=new ArrayBuffer(e),n=new Uint8Array(t),r;for(r=0;r<e;r+=1)n[r]=a.charCodeAt(r);return o?n:t}function C(a){return String.fromCharCode.apply(null,new Uint8Array(a))}function g(a,o,e){var t=new Uint8Array(a.byteLength+o.byteLength);return t.set(new Uint8Array(a)),t.set(new Uint8Array(o),a.byteLength),e?t:t.buffer}function _(a){var o=[],e=a.length,t;for(t=0;t<e-1;t+=2)o.push(parseInt(a.substr(t,2),16));return String.fromCharCode.apply(String,o)}function s(){this.reset()}return s.prototype.append=function(a){return this.appendBinary(c(a)),this},s.prototype.appendBinary=function(a){this._buff+=a,this._length+=a.length;var o=this._buff.length,e;for(e=64;e<=o;e+=64)u(this._hash,U(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},s.prototype.end=function(a){var o=this._buff,e=o.length,t,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(t=0;t<e;t+=1)n[t>>2]|=o.charCodeAt(t)<<(t%4<<3);return this._finish(n,e),r=p(this._hash),a&&(r=_(r)),this.reset(),r},s.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},s.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},s.prototype.setState=function(a){return this._buff=a.buff,this._length=a.length,this._hash=a.hash,this},s.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},s.prototype._finish=function(a,o){var e=o,t,n,r;if(a[e>>2]|=128<<(e%4<<3),e>55)for(u(this._hash,a),e=0;e<16;e+=1)a[e]=0;t=this._length*8,t=t.toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(t[2],16),r=parseInt(t[1],16)||0,a[14]=n,a[15]=r,u(this._hash,a)},s.hash=function(a,o){return s.hashBinary(c(a),o)},s.hashBinary=function(a,o){var e=B(a),t=p(e);return o?_(t):t},s.ArrayBuffer=function(){this.reset()},s.ArrayBuffer.prototype.append=function(a){var o=g(this._buff.buffer,a,!0),e=o.length,t;for(this._length+=a.byteLength,t=64;t<=e;t+=64)u(this._hash,S(o.subarray(t-64,t)));return this._buff=t-64<e?new Uint8Array(o.buffer.slice(t-64)):new Uint8Array(0),this},s.ArrayBuffer.prototype.end=function(a){var o=this._buff,e=o.length,t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n,r;for(n=0;n<e;n+=1)t[n>>2]|=o[n]<<(n%4<<3);return this._finish(t,e),r=p(this._hash),a&&(r=_(r)),this.reset(),r},s.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},s.ArrayBuffer.prototype.getState=function(){var a=s.prototype.getState.call(this);return a.buff=C(a.buff),a},s.ArrayBuffer.prototype.setState=function(a){return a.buff=d(a.buff,!0),s.prototype.setState.call(this,a)},s.ArrayBuffer.prototype.destroy=s.prototype.destroy,s.ArrayBuffer.prototype._finish=s.prototype._finish,s.ArrayBuffer.hash=function(a,o){var e=h(new Uint8Array(a)),t=p(e);return o?_(t):t},s})})(L);var W=L.exports;const I=F(W),X=z({__name:"md5",setup(E){const w=M(""),l=M(""),v=M("text"),u=M([]);R(w,async h=>{h?(l.value="计算中...",l.value=await B(h)):l.value=""});function U(h){return u.value=[{name:h.name}],l.value="计算中...",B(h).then(i=>{l.value=i}),!1}function S(){}function B(h){try{if(typeof h=="string"){const i=I.hash(h).toString();return Promise.resolve(`MD5 32位 大写: ${i.toUpperCase()}
MD5 32位 小写: ${i.toLowerCase()}
MD5 16位 大写: ${i.substring(8,24).toUpperCase()}
MD5 16位 小写: ${i.substring(8,24).toLowerCase()}`)}else return new Promise(i=>{const p=File.prototype.slice,c=h,d=2097152,C=Math.ceil(c.size/d);let g=0;const _=new I.ArrayBuffer,s=new FileReader;s.onload=function(){if(s.result)if(_.append(s.result),g++,g<C)a();else{const o=_.end();i(`MD5 32位 大写: ${o.toUpperCase()}
MD5 32位 小写: ${o.toLowerCase()}
MD5 16位 大写: ${o.substring(8,24).toUpperCase()}
MD5 16位 小写: ${o.substring(8,24).toLowerCase()}`)}},s.onerror=function(){i("计算失败")};function a(){const o=g*d,e=o+d>=c.size?c.size:o+d;s.readAsArrayBuffer(p.call(c,o,e))}a()})}catch(i){return j.error(i.message),Promise.resolve("计算失败")}}return(h,i)=>{const p=N,c=J,d=q,C=O,g=K,_=Q,s=H;return P(),T(s,{fill:!0,direction:"vertical","w-full":""},{default:A(()=>[b(g,{modelValue:D(v),"onUpdate:modelValue":i[1]||(i[1]=a=>x(v)?v.value=a:null),type:"card"},{default:A(()=>[b(c,{name:"text",label:"文本"},{default:A(()=>[b(p,{modelValue:D(w),"onUpdate:modelValue":i[0]||(i[0]=a=>x(w)?w.value=a:null),type:"textarea",rows:5,placeholder:"请输入要进行 MD5 计算的字符"},null,8,["modelValue"])]),_:1}),b(c,{name:"file",label:"文件"},{default:A(()=>[b(C,{"file-list":D(u),"before-upload":U,"on-remove":S},{default:A(()=>[b(d,null,{default:A(()=>[$("选择文件")]),_:1})]),_:1},8,["file-list"])]),_:1})]),_:1},8,["modelValue"]),b(_,{level:4},{default:A(()=>[$(" 结果 ")]),_:1}),b(p,{modelValue:D(l),"onUpdate:modelValue":i[2]||(i[2]=a=>x(l)?l.value=a:null),type:"textarea",rows:5,readonly:"",placeholder:"MD5 计算的结果"},null,8,["modelValue"])]),_:1})}}});const it=G(X,[["__scopeId","data-v-090a8ad4"]]);export{it as default};
