import{b as P,ch as p,ci as y,cj as a,ck as A,bT as M,cl as _,cm as d,cn as g,d as m}from"./index-BYYPt2FS.js";import{d as l}from"./Router-DwfDHa_U.js";var C=1,I=2;function L(n,r,e,t){var i=e.length,u=i;if(n==null)return!u;for(n=Object(n);i--;){var f=e[i];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<u;){f=e[i];var s=f[0],o=n[s],E=f[1];if(f[2]){if(o===void 0&&!(s in n))return!1}else{var O=new P,c;if(!(c===void 0?l(E,o,C|I,t,O):c))return!1}}return!0}function R(n){return n===n&&!p(n)}function b(n){for(var r=y(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,R(i)]}return r}function h(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function D(n){var r=b(n);return r.length==1&&r[0][2]?h(r[0][0],r[0][1]):function(e){return e===n||L(e,n,r)}}var G=1,w=2;function F(n,r){return a(n)&&R(r)?h(A(n),r):function(e){var t=M(e,n);return t===void 0&&t===r?_(e,n):l(r,t,G|w)}}function S(n){return function(r){return r==null?void 0:r[n]}}function T(n){return function(r){return d(r,n)}}function x(n){return a(n)?S(A(n)):T(n)}function U(n){return typeof n=="function"?n:n==null?g:typeof n=="object"?m(n)?F(n[0],n[1]):D(n):x(n)}export{U as b};
