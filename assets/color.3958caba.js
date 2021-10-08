function t(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var e={exports:{}};!function(t){!function(e){var r=/^\s+/,n=/\s+$/,a=0,i=e.round,s=e.min,o=e.max,f=e.random;function h(t,f){if(f=f||{},(t=t||"")instanceof h)return t;if(!(this instanceof h))return new h(t,f);var l=function(t){var a={r:0,g:0,b:0},i=1,f=null,h=null,l=null,u=!1,c=!1;"string"==typeof t&&(t=function(t){t=t.replace(r,"").replace(n,"").toLowerCase();var e,a=!1;if(R[t])t=R[t],a=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(e=j.rgb.exec(t))return{r:e[1],g:e[2],b:e[3]};if(e=j.rgba.exec(t))return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=j.hsl.exec(t))return{h:e[1],s:e[2],l:e[3]};if(e=j.hsla.exec(t))return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=j.hsv.exec(t))return{h:e[1],s:e[2],v:e[3]};if(e=j.hsva.exec(t))return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=j.hex8.exec(t))return{r:q(e[1]),g:q(e[2]),b:q(e[3]),a:I(e[4]),format:a?"name":"hex8"};if(e=j.hex6.exec(t))return{r:q(e[1]),g:q(e[2]),b:q(e[3]),format:a?"name":"hex"};if(e=j.hex4.exec(t))return{r:q(e[1]+""+e[1]),g:q(e[2]+""+e[2]),b:q(e[3]+""+e[3]),a:I(e[4]+""+e[4]),format:a?"name":"hex8"};if(e=j.hex3.exec(t))return{r:q(e[1]+""+e[1]),g:q(e[2]+""+e[2]),b:q(e[3]+""+e[3]),format:a?"name":"hex"};return!1}(t));"object"==typeof t&&(O(t.r)&&O(t.g)&&O(t.b)?(g=t.r,d=t.g,b=t.b,a={r:255*N(g,255),g:255*N(d,255),b:255*N(b,255)},u=!0,c="%"===String(t.r).substr(-1)?"prgb":"rgb"):O(t.h)&&O(t.s)&&O(t.v)?(f=V(t.s),h=V(t.v),a=function(t,r,n){t=6*N(t,360),r=N(r,100),n=N(n,100);var a=e.floor(t),i=t-a,s=n*(1-r),o=n*(1-i*r),f=n*(1-(1-i)*r),h=a%6;return{r:255*[n,o,s,s,f,n][h],g:255*[f,n,n,o,s,s][h],b:255*[s,s,f,n,n,o][h]}}(t.h,f,h),u=!0,c="hsv"):O(t.h)&&O(t.s)&&O(t.l)&&(f=V(t.s),l=V(t.l),a=function(t,e,r){var n,a,i;function s(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=N(t,360),e=N(e,100),r=N(r,100),0===e)n=a=i=r;else{var o=r<.5?r*(1+e):r+e-r*e,f=2*r-o;n=s(f,o,t+1/3),a=s(f,o,t),i=s(f,o,t-1/3)}return{r:255*n,g:255*a,b:255*i}}(t.h,f,l),u=!0,c="hsl"),t.hasOwnProperty("a")&&(i=t.a));var g,d,b;return i=F(i),{ok:u,format:t.format||c,r:s(255,o(a.r,0)),g:s(255,o(a.g,0)),b:s(255,o(a.b,0)),a:i}}(t);this._originalInput=t,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=i(100*this._a)/100,this._format=f.format||l.format,this._gradientType=f.gradientType,this._r<1&&(this._r=i(this._r)),this._g<1&&(this._g=i(this._g)),this._b<1&&(this._b=i(this._b)),this._ok=l.ok,this._tc_id=a++}function l(t,e,r){t=N(t,255),e=N(e,255),r=N(r,255);var n,a,i=o(t,e,r),f=s(t,e,r),h=(i+f)/2;if(i==f)n=a=0;else{var l=i-f;switch(a=h>.5?l/(2-i-f):l/(i+f),i){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4;break}n/=6}return{h:n,s:a,l:h}}function u(t,e,r){t=N(t,255),e=N(e,255),r=N(r,255);var n,a,i=o(t,e,r),f=s(t,e,r),h=i,l=i-f;if(a=0===i?0:l/i,i==f)n=0;else{switch(i){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4;break}n/=6}return{h:n,s:a,v:h}}function c(t,e,r,n){var a=[M(i(t).toString(16)),M(i(e).toString(16)),M(i(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function g(t,e,r,n){return[M(E(n)),M(i(t).toString(16)),M(i(e).toString(16)),M(i(r).toString(16))].join("")}function d(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.s-=e/100,r.s=T(r.s),h(r)}function b(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.s+=e/100,r.s=T(r.s),h(r)}function p(t){return h(t).desaturate(100)}function m(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.l+=e/100,r.l=T(r.l),h(r)}function _(t,e){e=0===e?0:e||10;var r=h(t).toRgb();return r.r=o(0,s(255,r.r-i(-e/100*255))),r.g=o(0,s(255,r.g-i(-e/100*255))),r.b=o(0,s(255,r.b-i(-e/100*255))),h(r)}function v(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.l-=e/100,r.l=T(r.l),h(r)}function y(t,e){var r=h(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,h(r)}function x(t){var e=h(t).toHsl();return e.h=(e.h+180)%360,h(e)}function A(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+120)%360,s:e.s,l:e.l}),h({h:(r+240)%360,s:e.s,l:e.l})]}function k(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+90)%360,s:e.s,l:e.l}),h({h:(r+180)%360,s:e.s,l:e.l}),h({h:(r+270)%360,s:e.s,l:e.l})]}function w(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+72)%360,s:e.s,l:e.l}),h({h:(r+216)%360,s:e.s,l:e.l})]}function S(t,e,r){e=e||6,r=r||30;var n=h(t).toHsl(),a=360/r,i=[h(t)];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(h(n));return i}function H(t,e){e=e||6;for(var r=h(t).toHsv(),n=r.h,a=r.s,i=r.v,s=[],o=1/e;e--;)s.push(h({h:n,s:a,v:i})),i=(i+o)%1;return s}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,n,a=this.toRgb();return t=a.r/255,r=a.g/255,n=a.b/255,.2126*(t<=.03928?t/12.92:e.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:e.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:e.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=F(t),this._roundA=i(100*this._a)/100,this},toHsv:function(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=u(this._r,this._g,this._b),e=i(360*t.h),r=i(100*t.s),n=i(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=l(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=l(this._r,this._g,this._b),e=i(360*t.h),r=i(100*t.s),n=i(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return c(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,a){var s=[M(i(t).toString(16)),M(i(e).toString(16)),M(i(r).toString(16)),M(E(n))];if(a&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1))return s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0);return s.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:i(this._r),g:i(this._g),b:i(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+i(this._r)+", "+i(this._g)+", "+i(this._b)+")":"rgba("+i(this._r)+", "+i(this._g)+", "+i(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:i(100*N(this._r,255))+"%",g:i(100*N(this._g,255))+"%",b:i(100*N(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+i(100*N(this._r,255))+"%, "+i(100*N(this._g,255))+"%, "+i(100*N(this._b,255))+"%)":"rgba("+i(100*N(this._r,255))+"%, "+i(100*N(this._g,255))+"%, "+i(100*N(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(C[c(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+g(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var a=h(t);r="#"+g(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(_,arguments)},darken:function(){return this._applyModification(v,arguments)},desaturate:function(){return this._applyModification(d,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(p,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(H,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(A,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},h.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:V(t[n]));t=r}return h(t,e)},h.equals=function(t,e){return!(!t||!e)&&h(t).toRgbString()==h(e).toRgbString()},h.random=function(){return h.fromRatio({r:f(),g:f(),b:f()})},h.mix=function(t,e,r){r=0===r?0:r||50;var n=h(t).toRgb(),a=h(e).toRgb(),i=r/100;return h({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},h.readability=function(t,r){var n=h(t),a=h(r);return(e.max(n.getLuminance(),a.getLuminance())+.05)/(e.min(n.getLuminance(),a.getLuminance())+.05)},h.isReadable=function(t,e,r){var n,a,i=h.readability(t,e);switch(a=!1,(n=function(t){var e,r;e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),r=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA");"small"!==r&&"large"!==r&&(r="small");return{level:e,size:r}}(r)).level+n.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7;break}return a},h.mostReadable=function(t,e,r){var n,a,i,s,o=null,f=0;a=(r=r||{}).includeFallbackColors,i=r.level,s=r.size;for(var l=0;l<e.length;l++)(n=h.readability(t,e[l]))>f&&(f=n,o=h(e[l]));return h.isReadable(t,o,{level:i,size:s})||!a?o:(r.includeFallbackColors=!1,h.mostReadable(t,["#fff","#000"],r))};var R=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},C=h.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(R);function F(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function N(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=s(r,o(0,parseFloat(t))),n&&(t=parseInt(t*r,10)/100),e.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function T(t){return s(1,o(0,t))}function q(t){return parseInt(t,16)}function M(t){return 1==t.length?"0"+t:""+t}function V(t){return t<=1&&(t=100*t+"%"),t}function E(t){return e.round(255*parseFloat(t)).toString(16)}function I(t){return q(t)/255}var L,z,U,j=(z="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",U="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+U),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+U),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+U),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function O(t){return!!j.CSS_UNIT.exec(t)}t.exports?t.exports=h:window.tinycolor=h}(Math)}(e);var r=e.exports;function n(t,e){const n=t&&t.a;let a;a=t&&t.hsl?r(t.hsl):t&&t.hex&&t.hex.length>0?r(t.hex):t&&t.hsv?r(t.hsv):t&&t.rgba?r(t.rgba):t&&t.rgb?r(t.rgb):r(t),!a||void 0!==a._a&&null!==a._a||a.setAlpha(n||1);const i=a.toHsl(),s=a.toHsv();return 0===i.s&&(s.h=i.h=t.h||t.hsl&&t.hsl.h||e||0),{hsl:i,hex:a.toHexString().toUpperCase(),hex8:a.toHex8String().toUpperCase(),rgba:a.toRgb(),hsv:s,oldHue:t.h||e||i.h,source:t.source,a:t.a||a.getAlpha()}}var a={model:{prop:"modelValue",event:"update:modelValue"},props:["modelValue"],data(){return{val:n(this.modelValue)}},computed:{colors:{get(){return this.val},set(t){this.val=t,this.$emit("update:modelValue",t)}}},watch:{modelValue(t){this.val=n(t)}},methods:{colorChange(t,e){this.oldHue=this.colors.hsl.h,this.colors=n(t,e||this.oldHue)},isValidHex:t=>r(t).isValid(),simpleCheckForValidColor(t){const e=["r","g","b","a","h","s","l","v"];let r=0,n=0;for(let a=0;a<e.length;a++){const i=e[a];t[i]&&(r++,isNaN(t[i])||n++)}if(r===n)return t},paletteUpperCase:t=>t.map((t=>t.toUpperCase())),isTransparent:t=>0===r(t).getAlpha()}};export{a as c,t as s};
