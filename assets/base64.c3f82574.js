import{ap as A,k,o as V,x as W,y as f,z as c,as as b,f as l,ac as B,D as C,ab as z}from"./vendor.71e535b0.js";/* empty css                */import{c as U}from"./core.3ecda4d4.js";var D={exports:{}};(function(p,i){(function(t,o){p.exports=o(U.exports)})(A,function(t){return function(){var o=t,h=o.lib,x=h.WordArray,m=o.enc;m.Base64={stringify:function(a){var n=a.words,v=a.sigBytes,s=this._map;a.clamp();for(var r=[],e=0;e<v;e+=3)for(var u=n[e>>>2]>>>24-e%4*8&255,g=n[e+1>>>2]>>>24-(e+1)%4*8&255,y=n[e+2>>>2]>>>24-(e+2)%4*8&255,T=u<<16|g<<8|y,_=0;_<4&&e+_*.75<v;_++)r.push(s.charAt(T>>>6*(3-_)&63));var w=s.charAt(64);if(w)for(;r.length%4;)r.push(w);return r.join("")},parse:function(a){var n=a.length,v=this._map,s=this._reverseMap;if(!s){s=this._reverseMap=[];for(var r=0;r<v.length;r++)s[v.charCodeAt(r)]=r}var e=v.charAt(64);if(e){var u=a.indexOf(e);u!==-1&&(n=u)}return d(a,n,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function d(a,n,v){for(var s=[],r=0,e=0;e<n;e++)if(e%4){var u=v[a.charCodeAt(e-1)]<<e%4*2,g=v[a.charCodeAt(e)]>>>6-e%4*2,y=u|g;s[r>>>2]|=y<<24-r%4*8,r++}return x.create(s,r)}}(),t.enc.Base64})})(D);var L=D.exports,M={exports:{}};(function(p,i){(function(t,o){p.exports=o(U.exports)})(A,function(t){return t.enc.Utf8})})(M);var N=M.exports;const E=C("\u7F16\u7801 (Encode)"),G=C("\u89E3\u7801 (Decode)"),O=C("\u2195\u4EA4\u6362"),I={setup(p){const{TextArea:i}=z,t=k(""),o=k("");function h(){o.value=L.stringify(N.parse(t.value))}function x(){o.value=L.parse(t.value).toString(N)}function m(){const d=t.value;t.value=o.value,o.value=d}return(d,a)=>(V(),W(c(b),{direction:"vertical",style:{width:"100%"}},{default:f(()=>[l(c(i),{rows:5,value:t.value,"onUpdate:value":a[0]||(a[0]=n=>t.value=n),placeholder:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u5B57\u7B26"},null,8,["value"]),l(c(b),{style:{"flex-wrap":"wrap"}},{default:f(()=>[l(c(B),{type:"primary",onClick:h},{default:f(()=>[E]),_:1}),l(c(B),{onClick:x},{default:f(()=>[G]),_:1}),l(c(B),{onClick:m},{default:f(()=>[O]),_:1})]),_:1}),l(c(i),{rows:5,value:o.value,"onUpdate:value":a[1]||(a[1]=n=>o.value=n),readonly:"",placeholder:"Base64 \u7F16\u7801\u6216\u89E3\u7801\u7684\u7ED3\u679C"},null,8,["value"])]),_:1}))}};export{I as default};
