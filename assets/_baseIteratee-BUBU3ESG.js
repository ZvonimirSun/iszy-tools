import{b as P,cK as b,bM as h,cL as a,cM as A,bJ as p,cN as y,bU as _,bV as g,d as L}from"./index-Abyzm83G.js";import{c as M}from"./Router-iJ5jv1Px.js";var d=1,m=2;function C(n,r,e,t){var i=e.length,u=i;if(n==null)return!u;for(n=Object(n);i--;){var f=e[i];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<u;){f=e[i];var s=f[0],o=n[s],E=f[1];if(f[2]){if(o===void 0&&!(s in n))return!1}else{var O=new P,c;if(!(c===void 0?M(E,o,d|m,t,O):c))return!1}}return!0}function R(n){return n===n&&!b(n)}function I(n){for(var r=h(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,R(i)]}return r}function l(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function D(n){var r=I(n);return r.length==1&&r[0][2]?l(r[0][0],r[0][1]):function(e){return e===n||C(e,n,r)}}var G=1,w=2;function F(n,r){return a(n)&&R(r)?l(A(n),r):function(e){var t=p(e,n);return t===void 0&&t===r?y(e,n):M(r,t,G|w)}}function K(n){return function(r){return r==null?void 0:r[n]}}function N(n){return function(r){return _(r,n)}}function S(n){return a(n)?K(A(n)):N(n)}function T(n){return typeof n=="function"?n:n==null?g:typeof n=="object"?L(n)?F(n[0],n[1]):D(n):S(n)}export{T as b};