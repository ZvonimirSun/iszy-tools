import{cE as n,Y as l}from"./index-8b7a132d.js";var g="Expected a function";function d(t,a,r){var e=!0,i=!0;if(typeof t!="function")throw new TypeError(g);return n(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),l(t,a,{leading:e,maxWait:a,trailing:i})}export{d as t};
