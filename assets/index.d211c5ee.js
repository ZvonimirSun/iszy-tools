import{S as o,e}from"./vendor.1bf9e949.js";var r={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function t(){return"icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1)}function i(o,e,r){var t="string"==typeof e.fill?[e.fill]:e.fill||[],i=[];switch(e.theme||r.theme){case"outline":i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("none"),i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("none");break;case"filled":i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("#FFF"),i.push("#FFF");break;case"two-tone":i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("string"==typeof t[1]?t[1]:r.colors.twoTone.twoTone),i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("string"==typeof t[1]?t[1]:r.colors.twoTone.twoTone);break;case"multi-color":i.push("string"==typeof t[0]?t[0]:"currentColor"),i.push("string"==typeof t[1]?t[1]:r.colors.multiColor.outFillColor),i.push("string"==typeof t[2]?t[2]:r.colors.multiColor.innerStrokeColor),i.push("string"==typeof t[3]?t[3]:r.colors.multiColor.innerFillColor);break}return{size:e.size||r.size,strokeWidth:e.strokeWidth||r.strokeWidth,strokeLinecap:e.strokeLinecap||r.strokeLinecap,strokeLinejoin:e.strokeLinejoin||r.strokeLinejoin,colors:i,id:o}}var n=Symbol("icon-context");function s(s,l,p){return{name:"icon-"+s,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(u){var c=t(),f=o(n,r);return function(){var o=u.size,r=u.strokeWidth,t=u.strokeLinecap,n=u.strokeLinejoin,h=u.theme,a=u.fill,k=u.spin,F=i(c,{size:o,strokeWidth:r,strokeLinecap:t,strokeLinejoin:n,theme:h,fill:a},f),C=[f.prefix+"-icon"];return C.push(f.prefix+"-icon-"+s),l&&f.rtl&&C.push(f.prefix+"-icon-rtl"),k&&C.push(f.prefix+"-icon-spin"),e("span",{class:C.join(" ")},[p(F)])}}}}export{s as I};
