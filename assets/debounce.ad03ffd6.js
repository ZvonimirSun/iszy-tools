import{aS as p,aT as S,aL as y}from"./index.93620b04.js";var R=function(){return p.Date.now()},h=R,A="Expected a function",F=Math.max,N=Math.min;function _(x,i,a){var u,d,m,f,n,r,o=0,E=!1,l=!1,v=!0;if(typeof x!="function")throw new TypeError(A);i=S(i)||0,y(a)&&(E=!!a.leading,l="maxWait"in a,m=l?F(S(a.maxWait)||0,i):m,v="trailing"in a?!!a.trailing:v);function g(e){var t=u,c=d;return u=d=void 0,o=e,f=x.apply(c,t),f}function W(e){return o=e,n=setTimeout(s,i),E?g(e):f}function b(e){var t=e-r,c=e-o,L=i-t;return l?N(L,m-c):L}function k(e){var t=e-r,c=e-o;return r===void 0||t>=i||t<0||l&&c>=m}function s(){var e=h();if(k(e))return I(e);n=setTimeout(s,b(e))}function I(e){return n=void 0,v&&u?g(e):(u=d=void 0,f)}function C(){n!==void 0&&clearTimeout(n),o=0,u=r=d=n=void 0}function M(){return n===void 0?f:I(h())}function T(){var e=h(),t=k(e);if(u=arguments,d=this,r=e,t){if(n===void 0)return W(r);if(l)return clearTimeout(n),n=setTimeout(s,i),g(r)}return n===void 0&&(n=setTimeout(s,i)),f}return T.cancel=C,T.flush=M,T}export{_ as d};
