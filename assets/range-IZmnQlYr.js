import{d8 as l}from"./index-AbLOts5N.js";import{t as f}from"./toFinite-BnoKz_-R.js";var m=Math.ceil,g=Math.max;function h(r,e,i,n){for(var u=-1,a=g(m((e-r)/(i||1)),0),o=Array(a);a--;)o[++u]=r,r+=i;return o}function c(r){return function(e,i,n){return n&&typeof n!="number"&&l(e,i,n)&&(i=n=void 0),e=f(e),i===void 0?(i=e,e=0):i=f(i),n=n===void 0?e<i?1:-1:f(n),h(e,i,n)}}var R=c();export{R as r};
