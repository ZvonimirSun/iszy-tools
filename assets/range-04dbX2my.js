import{cS as l}from"./index-6zGE5DCB.js";import{t as f}from"./toFinite-tbsrRPt8.js";var c=Math.ceil,m=Math.max;function v(r,n,i,e){for(var o=-1,a=m(c((n-r)/(i||1)),0),u=Array(a);a--;)u[e?a:++o]=r,r+=i;return u}function g(r){return function(n,i,e){return e&&typeof e!="number"&&l(n,i,e)&&(i=e=void 0),n=f(n),i===void 0?(i=n,n=0):i=f(i),e=e===void 0?n<i?1:-1:f(e),v(n,i,e,r)}}var M=g();export{M as r};