import{ci as n,at as l}from"./index-64dd3e12.js";var g="Expected a function";function d(t,a,i){var r=!0,e=!0;if(typeof t!="function")throw new TypeError(g);return n(i)&&(r="leading"in i?!!i.leading:r,e="trailing"in i?!!i.trailing:e),l(t,a,{leading:r,maxWait:a,trailing:e})}export{d as t};