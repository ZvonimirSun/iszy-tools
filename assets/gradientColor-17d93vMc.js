import{ac as at,B as C,x as R,c as I,a as F,b as k,y as v,X as N,az as V,F as nt,e as it,a8 as U,b7 as st,aB as ot,o as P,W as G,n as ft,t as j}from"./vendor-6AexJ7S2.js";import{_ as ut}from"./ant-design-vue-HXezLoId.js";import{s as D}from"./@ckpack/vue-color-Wzq3VSu9.js";function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(t)}var ht=/^\s+/,lt=/\s+$/;function s(t,r){if(t=t||"",r=r||{},t instanceof s)return t;if(!(this instanceof s))return new s(t,r);var e=dt(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}s.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(r.r*299+r.g*587+r.b*114)/1e3},getLuminance:function(){var r=this.toRgb(),e,a,i,n,o,f;return e=r.r/255,a=r.g/255,i=r.b/255,e<=.03928?n=e/12.92:n=Math.pow((e+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),i<=.03928?f=i/12.92:f=Math.pow((i+.055)/1.055,2.4),.2126*n+.7152*o+.0722*f},setAlpha:function(r){return this._a=K(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=q(this._r,this._g,this._b);return{h:r.h*360,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=q(this._r,this._g,this._b),e=Math.round(r.h*360),a=Math.round(r.s*100),i=Math.round(r.v*100);return this._a==1?"hsv("+e+", "+a+"%, "+i+"%)":"hsva("+e+", "+a+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var r=$(this._r,this._g,this._b);return{h:r.h*360,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=$(this._r,this._g,this._b),e=Math.round(r.h*360),a=Math.round(r.s*100),i=Math.round(r.l*100);return this._a==1?"hsl("+e+", "+a+"%, "+i+"%)":"hsla("+e+", "+a+"%, "+i+"%, "+this._roundA+")"},toHex:function(r){return X(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return pt(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(u(this._r,255)*100)+"%",g:Math.round(u(this._g,255)*100)+"%",b:Math.round(u(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(u(this._r,255)*100)+"%, "+Math.round(u(this._g,255)*100)+"%, "+Math.round(u(this._b,255)*100)+"%)":"rgba("+Math.round(u(this._r,255)*100)+"%, "+Math.round(u(this._g,255)*100)+"%, "+Math.round(u(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Ht[X(this._r,this._g,this._b,!0)]||!1},toFilter:function(r){var e="#"+W(this._r,this._g,this._b,this._a),a=e,i=this._gradientType?"GradientType = 1, ":"";if(r){var n=s(r);a="#"+W(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+e+",endColorstr="+a+")"},toString:function(r){var e=!!r;r=r||this._format;var a=!1,i=this._a<1&&this._a>=0,n=!e&&i&&(r==="hex"||r==="hex6"||r==="hex3"||r==="hex4"||r==="hex8"||r==="name");return n?r==="name"&&this._a===0?this.toName():this.toRgbString():(r==="rgb"&&(a=this.toRgbString()),r==="prgb"&&(a=this.toPercentageRgbString()),(r==="hex"||r==="hex6")&&(a=this.toHexString()),r==="hex3"&&(a=this.toHexString(!0)),r==="hex4"&&(a=this.toHex8String(!0)),r==="hex8"&&(a=this.toHex8String()),r==="name"&&(a=this.toName()),r==="hsl"&&(a=this.toHslString()),r==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},clone:function(){return s(this.toString())},_applyModification:function(r,e){var a=r.apply(null,[this].concat([].slice.call(e)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(xt,arguments)},brighten:function(){return this._applyModification(yt,arguments)},darken:function(){return this._applyModification(Mt,arguments)},desaturate:function(){return this._applyModification(mt,arguments)},saturate:function(){return this._applyModification(_t,arguments)},greyscale:function(){return this._applyModification(vt,arguments)},spin:function(){return this._applyModification(At,arguments)},_applyCombination:function(r,e){return r.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(wt,arguments)},complement:function(){return this._applyCombination(St,arguments)},monochromatic:function(){return this._applyCombination(Rt,arguments)},splitcomplement:function(){return this._applyCombination(kt,arguments)},triad:function(){return this._applyCombination(Z,[3])},tetrad:function(){return this._applyCombination(Z,[4])}};s.fromRatio=function(t,r){if(T(t)=="object"){var e={};for(var a in t)t.hasOwnProperty(a)&&(a==="a"?e[a]=t[a]:e[a]=H(t[a]));t=e}return s(t,r)};function dt(t){var r={r:0,g:0,b:0},e=1,a=null,i=null,n=null,o=!1,f=!1;return typeof t=="string"&&(t=Bt(t)),T(t)=="object"&&(x(t.r)&&x(t.g)&&x(t.b)?(r=gt(t.r,t.g,t.b),o=!0,f=String(t.r).substr(-1)==="%"?"prgb":"rgb"):x(t.h)&&x(t.s)&&x(t.v)?(a=H(t.s),i=H(t.v),r=bt(t.h,a,i),o=!0,f="hsv"):x(t.h)&&x(t.s)&&x(t.l)&&(a=H(t.s),n=H(t.l),r=ct(t.h,a,n),o=!0,f="hsl"),t.hasOwnProperty("a")&&(e=t.a)),e=K(e),{ok:o,format:t.format||f,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:e}}function gt(t,r,e){return{r:u(t,255)*255,g:u(r,255)*255,b:u(e,255)*255}}function $(t,r,e){t=u(t,255),r=u(r,255),e=u(e,255);var a=Math.max(t,r,e),i=Math.min(t,r,e),n,o,f=(a+i)/2;if(a==i)n=o=0;else{var h=a-i;switch(o=f>.5?h/(2-a-i):h/(a+i),a){case t:n=(r-e)/h+(r<e?6:0);break;case r:n=(e-t)/h+2;break;case e:n=(t-r)/h+4;break}n/=6}return{h:n,s:o,l:f}}function ct(t,r,e){var a,i,n;t=u(t,360),r=u(r,100),e=u(e,100);function o(d,M,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(M-d)*6*g:g<1/2?M:g<2/3?d+(M-d)*(2/3-g)*6:d}if(r===0)a=i=n=e;else{var f=e<.5?e*(1+r):e+r-e*r,h=2*e-f;a=o(h,f,t+1/3),i=o(h,f,t),n=o(h,f,t-1/3)}return{r:a*255,g:i*255,b:n*255}}function q(t,r,e){t=u(t,255),r=u(r,255),e=u(e,255);var a=Math.max(t,r,e),i=Math.min(t,r,e),n,o,f=a,h=a-i;if(o=a===0?0:h/a,a==i)n=0;else{switch(a){case t:n=(r-e)/h+(r<e?6:0);break;case r:n=(e-t)/h+2;break;case e:n=(t-r)/h+4;break}n/=6}return{h:n,s:o,v:f}}function bt(t,r,e){t=u(t,360)*6,r=u(r,100),e=u(e,100);var a=Math.floor(t),i=t-a,n=e*(1-r),o=e*(1-i*r),f=e*(1-(1-i)*r),h=a%6,d=[e,o,n,n,f,e][h],M=[f,e,e,o,n,n][h],g=[n,n,f,e,e,o][h];return{r:d*255,g:M*255,b:g*255}}function X(t,r,e,a){var i=[m(Math.round(t).toString(16)),m(Math.round(r).toString(16)),m(Math.round(e).toString(16))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function pt(t,r,e,a,i){var n=[m(Math.round(t).toString(16)),m(Math.round(r).toString(16)),m(Math.round(e).toString(16)),m(Q(a))];return i&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)&&n[3].charAt(0)==n[3].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function W(t,r,e,a){var i=[m(Q(a)),m(Math.round(t).toString(16)),m(Math.round(r).toString(16)),m(Math.round(e).toString(16))];return i.join("")}s.equals=function(t,r){return!t||!r?!1:s(t).toRgbString()==s(r).toRgbString()};s.random=function(){return s.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function mt(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.s-=r/100,e.s=B(e.s),s(e)}function _t(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.s+=r/100,e.s=B(e.s),s(e)}function vt(t){return s(t).desaturate(100)}function xt(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.l+=r/100,e.l=B(e.l),s(e)}function yt(t,r){r=r===0?0:r||10;var e=s(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(r/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(r/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(r/100)))),s(e)}function Mt(t,r){r=r===0?0:r||10;var e=s(t).toHsl();return e.l-=r/100,e.l=B(e.l),s(e)}function At(t,r){var e=s(t).toHsl(),a=(e.h+r)%360;return e.h=a<0?360+a:a,s(e)}function St(t){var r=s(t).toHsl();return r.h=(r.h+180)%360,s(r)}function Z(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var e=s(t).toHsl(),a=[s(t)],i=360/r,n=1;n<r;n++)a.push(s({h:(e.h+n*i)%360,s:e.s,l:e.l}));return a}function kt(t){var r=s(t).toHsl(),e=r.h;return[s(t),s({h:(e+72)%360,s:r.s,l:r.l}),s({h:(e+216)%360,s:r.s,l:r.l})]}function wt(t,r,e){r=r||6,e=e||30;var a=s(t).toHsl(),i=360/e,n=[s(t)];for(a.h=(a.h-(i*r>>1)+720)%360;--r;)a.h=(a.h+i)%360,n.push(s(a));return n}function Rt(t,r){r=r||6;for(var e=s(t).toHsv(),a=e.h,i=e.s,n=e.v,o=[],f=1/r;r--;)o.push(s({h:a,s:i,v:n})),n=(n+f)%1;return o}s.mix=function(t,r,e){e=e===0?0:e||50;var a=s(t).toRgb(),i=s(r).toRgb(),n=e/100,o={r:(i.r-a.r)*n+a.r,g:(i.g-a.g)*n+a.g,b:(i.b-a.b)*n+a.b,a:(i.a-a.a)*n+a.a};return s(o)};s.readability=function(t,r){var e=s(t),a=s(r);return(Math.max(e.getLuminance(),a.getLuminance())+.05)/(Math.min(e.getLuminance(),a.getLuminance())+.05)};s.isReadable=function(t,r,e){var a=s.readability(t,r),i,n;switch(n=!1,i=Et(e),i.level+i.size){case"AAsmall":case"AAAlarge":n=a>=4.5;break;case"AAlarge":n=a>=3;break;case"AAAsmall":n=a>=7;break}return n};s.mostReadable=function(t,r,e){var a=null,i=0,n,o,f,h;e=e||{},o=e.includeFallbackColors,f=e.level,h=e.size;for(var d=0;d<r.length;d++)n=s.readability(t,r[d]),n>i&&(i=n,a=s(r[d]));return s.isReadable(t,a,{level:f,size:h})||!o?a:(e.includeFallbackColors=!1,s.mostReadable(t,["#fff","#000"],e))};var z=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ht=s.hexNames=Ct(z);function Ct(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}function K(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function u(t,r){Ft(t)&&(t="100%");var e=Tt(t);return t=Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function B(t){return Math.min(1,Math.max(0,t))}function c(t){return parseInt(t,16)}function Ft(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function Tt(t){return typeof t=="string"&&t.indexOf("%")!=-1}function m(t){return t.length==1?"0"+t:""+t}function H(t){return t<=1&&(t=t*100+"%"),t}function Q(t){return Math.round(parseFloat(t)*255).toString(16)}function J(t){return c(t)/255}var p=function(){var t="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",e="(?:"+r+")|(?:"+t+")",a="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",i="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+a),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+a),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+a),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function x(t){return!!p.CSS_UNIT.exec(t)}function Bt(t){t=t.replace(ht,"").replace(lt,"").toLowerCase();var r=!1;if(z[t])t=z[t],r=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e;return(e=p.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=p.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=p.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=p.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=p.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=p.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=p.hex8.exec(t))?{r:c(e[1]),g:c(e[2]),b:c(e[3]),a:J(e[4]),format:r?"name":"hex8"}:(e=p.hex6.exec(t))?{r:c(e[1]),g:c(e[2]),b:c(e[3]),format:r?"name":"hex"}:(e=p.hex4.exec(t))?{r:c(e[1]+""+e[1]),g:c(e[2]+""+e[2]),b:c(e[3]+""+e[3]),a:J(e[4]+""+e[4]),format:r?"name":"hex8"}:(e=p.hex3.exec(t))?{r:c(e[1]+""+e[1]),g:c(e[2]+""+e[2]),b:c(e[3]+""+e[3]),format:r?"name":"hex"}:!1}function Et(t){var r,e;return t=t||{level:"AA",size:"small"},r=(t.level||"AA").toUpperCase(),e=(t.size||"small").toLowerCase(),r!=="AA"&&r!=="AAA"&&(r="AA"),e!=="small"&&e!=="large"&&(e="small"),{level:r,size:e}}const It={flex:"","flex-col":"","w-fit":"","mx-auto":"","justify-start":"","items-center":"","h-full":"","overflow-auto":"","p-t-1":"",class:"gap-3.2"},Nt={flex:"","w-fit":"","flex-wrap":"","max-w-full":"","mx-auto":"","justify-start":"","items-center":"",class:"gap-3.2 selector"},Vt={flex:"","flex-col":"","items-center":"","mx-auto":""},Pt={flex:"","flex-row":"","w-fit":"","mx-auto":"","justify-start":"","flex-wrap":"","items-stretch":"",class:"gap-3.2"},Gt=["onClick"],zt={relative:""},Lt={__name:"gradientColor",setup(t){const r=C("#ff0000"),e=C("#00ffff"),a=C(10),i=C(!1),n=R({get(){return r.value},set(l){l&&l.hex&&(r.value=l.hex)}}),o=R({get(){return e.value},set(l){l&&l.hex&&(e.value=l.hex)}}),f=R(()=>M(r.value,e.value,a.value)),h=R(()=>f.value.map(l=>s(l).toRgbString())),d=R(()=>i.value?h.value:f.value);function M(l,_,A){const y=s(l).toRgb(),S=s(_).toRgb(),b=(S.r-y.r)/A,E=(S.g-y.g)/A,L=(S.b-y.b)/A,O=[];for(let w=0;w<A;w++){const tt=Math.round(y.r+b*w),et=Math.round(y.g+E*w),rt=Math.round(y.b+L*w);O.push(s({r:tt,g:et,b:rt}).toHexString())}return O}function g(l){window.navigator.clipboard.writeText(l),U.success("复制成功")}function Y(){const l=d.value.join(",");window.navigator.clipboard.writeText(l),U.success("复制成功")}return(l,_)=>{const A=ut,y=st,S=ot;return P(),I("div",It,[F("div",Nt,[k(v(D),{modelValue:v(n),"onUpdate:modelValue":_[0]||(_[0]=b=>N(n)?n.value=b:null),"disable-alpha":!0,"mx-auto":""},null,8,["modelValue"]),F("div",Vt,[k(A,null,{default:V(()=>[G(" 渐变个数 ")]),_:1}),k(y,{modelValue:v(a),"onUpdate:modelValue":_[1]||(_[1]=b=>N(a)?a.value=b:null),modelModifiers:{number:!0},step:1,precision:0},null,8,["modelValue"])]),k(v(D),{modelValue:v(o),"onUpdate:modelValue":_[2]||(_[2]=b=>N(o)?o.value=b:null),"mx-auto":"","disable-alpha":!0},null,8,["modelValue"])]),F("div",Pt,[(P(!0),I(nt,null,it(v(d),(b,E)=>(P(),I("div",{key:E,"display-block":"","cursor-pointer":"",truncate:"","h-fit":"","text-center":"",class:"p-3.2",style:ft({background:b,width:v(i)?"15rem":"9rem"}),onClick:L=>g(b)},j(b),13,Gt))),128)),F("div",zt,[k(S,{"h-full":"",onClick:_[3]||(_[3]=b=>i.value=!v(i))},{default:V(()=>[G(j(v(i)?"显示HEX":"显示RGB"),1)]),_:1})])]),k(S,{type:"primary",onClick:Y},{default:V(()=>[G(" 复制所有 ")]),_:1})])}}},Dt=at(Lt,[["__scopeId","data-v-fe86027b"]]);export{Dt as default};
