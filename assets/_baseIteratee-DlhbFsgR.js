import{b as P,cL as b,bN as h,cM as a,cN as A,bK as p,cO as y,bV as _,bW as g,d as L}from"./index-DZyj1-Eq.js";import{c as O}from"./Router-DzFaFs_4.js";var d=1,m=2;function C(n,r,e,t){var i=e.length,u=i;if(n==null)return!u;for(n=Object(n);i--;){var f=e[i];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<u;){f=e[i];var s=f[0],o=n[s],E=f[1];if(f[2]){if(o===void 0&&!(s in n))return!1}else{var M=new P,c;if(!(c===void 0?O(E,o,d|m,t,M):c))return!1}}return!0}function R(n){return n===n&&!b(n)}function I(n){for(var r=h(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,R(i)]}return r}function l(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function D(n){var r=I(n);return r.length==1&&r[0][2]?l(r[0][0],r[0][1]):function(e){return e===n||C(e,n,r)}}var G=1,w=2;function F(n,r){return a(n)&&R(r)?l(A(n),r):function(e){var t=p(e,n);return t===void 0&&t===r?y(e,n):O(r,t,G|w)}}function N(n){return function(r){return r==null?void 0:r[n]}}function K(n){return function(r){return _(r,n)}}function S(n){return a(n)?N(A(n)):K(n)}function U(n){return typeof n=="function"?n:n==null?g:typeof n=="object"?L(n)?F(n[0],n[1]):D(n):S(n)}export{U as b};