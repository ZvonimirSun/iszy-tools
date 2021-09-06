import{_ as e}from"./container.80b8f264.js";import{o as t,K as r,V as n,r as i,k as a,b as o,a as s,O as l,P as h,l as c,c as u,w as f}from"./vendor.6db3f19c.js";/* empty css              */import"./index.9534a88d.js";function d(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}const g={};var p={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${v(this.white,this.grey,this.size)})`}}}};function b(e,t,r){if("undefined"==typeof document)return null;const n=document.createElement("canvas");n.width=n.height=2*r;const i=n.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,n.width,n.height),i.fillStyle=t,i.fillRect(0,0,r,r),i.translate(r,r),i.fillRect(0,0,r,r),n.toDataURL()):null}function v(e,t,r){const n=`${e},${t},${r}`;if(g[n])return g[n];const i=b(e,t,r);return g[n]=i,i}function m(e,i,a,o,s,l){return t(),r("div",{class:"vc-checkerboard",style:n(l.bgStyle)},null,4)}var x=".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";d(x),p.render=m,p.__file="src/components/checkboard/checkboard.vue";var _={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:p},computed:{colors(){return this.value},gradientColor(){const{rgba:e}=this.colors,t=[e.r,e.g,e.b].join(",");return`linear-gradient(to right, rgba(${t}, 0) 0%, rgba(${t}, 1) 100%)`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:r}=this.$refs;if(!r)return;const n=r.clientWidth,i=r.getBoundingClientRect().left+window.pageXOffset,a=(e.pageX||(e.touches?e.touches[0].pageX:0))-i;let o;o=a<0?0:a>n?1:Math.round(100*a/n)/100,this.colors.a!==o&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:o,source:"rgba"})},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},k={exports:{}};!function(e){!function(t){var r=/^\s+/,n=/\s+$/,i=0,a=t.round,o=t.min,s=t.max,l=t.random;function h(e,l){if(l=l||{},(e=e||"")instanceof h)return e;if(!(this instanceof h))return new h(e,l);var c=function(e){var i={r:0,g:0,b:0},a=1,l=null,h=null,c=null,u=!1,f=!1;"string"==typeof e&&(e=function(e){e=e.replace(r,"").replace(n,"").toLowerCase();var t,i=!1;if(H[e])e=H[e],i=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=B.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=B.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=B.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=B.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=B.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=B.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=B.hex8.exec(e))return{r:$(t[1]),g:$(t[2]),b:$(t[3]),a:O(t[4]),format:i?"name":"hex8"};if(t=B.hex6.exec(e))return{r:$(t[1]),g:$(t[2]),b:$(t[3]),format:i?"name":"hex"};if(t=B.hex4.exec(e))return{r:$(t[1]+""+t[1]),g:$(t[2]+""+t[2]),b:$(t[3]+""+t[3]),a:O(t[4]+""+t[4]),format:i?"name":"hex8"};if(t=B.hex3.exec(e))return{r:$(t[1]+""+t[1]),g:$(t[2]+""+t[2]),b:$(t[3]+""+t[3]),format:i?"name":"hex"};return!1}(e));"object"==typeof e&&(U(e.r)&&U(e.g)&&U(e.b)?(d=e.r,g=e.g,p=e.b,i={r:255*R(d,255),g:255*R(g,255),b:255*R(p,255)},u=!0,f="%"===String(e.r).substr(-1)?"prgb":"rgb"):U(e.h)&&U(e.s)&&U(e.v)?(l=T(e.s),h=T(e.v),i=function(e,r,n){e=6*R(e,360),r=R(r,100),n=R(n,100);var i=t.floor(e),a=e-i,o=n*(1-r),s=n*(1-a*r),l=n*(1-(1-a)*r),h=i%6;return{r:255*[n,s,o,o,l,n][h],g:255*[l,n,n,s,o,o][h],b:255*[o,o,l,n,n,s][h]}}(e.h,l,h),u=!0,f="hsv"):U(e.h)&&U(e.s)&&U(e.l)&&(l=T(e.s),c=T(e.l),i=function(e,t,r){var n,i,a;function o(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=R(e,360),t=R(t,100),r=R(r,100),0===t)n=i=a=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=o(l,s,e+1/3),i=o(l,s,e),a=o(l,s,e-1/3)}return{r:255*n,g:255*i,b:255*a}}(e.h,l,c),u=!0,f="hsl"),e.hasOwnProperty("a")&&(a=e.a));var d,g,p;return a=F(a),{ok:u,format:e.format||f,r:o(255,s(i.r,0)),g:o(255,s(i.g,0)),b:o(255,s(i.b,0)),a:a}}(e);this._originalInput=e,this._r=c.r,this._g=c.g,this._b=c.b,this._a=c.a,this._roundA=a(100*this._a)/100,this._format=l.format||c.format,this._gradientType=l.gradientType,this._r<1&&(this._r=a(this._r)),this._g<1&&(this._g=a(this._g)),this._b<1&&(this._b=a(this._b)),this._ok=c.ok,this._tc_id=i++}function c(e,t,r){e=R(e,255),t=R(t,255),r=R(r,255);var n,i,a=s(e,t,r),l=o(e,t,r),h=(a+l)/2;if(a==l)n=i=0;else{var c=a-l;switch(i=h>.5?c/(2-a-l):c/(a+l),a){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4;break}n/=6}return{h:n,s:i,l:h}}function u(e,t,r){e=R(e,255),t=R(t,255),r=R(r,255);var n,i,a=s(e,t,r),l=o(e,t,r),h=a,c=a-l;if(i=0===a?0:c/a,a==l)n=0;else{switch(a){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4;break}n/=6}return{h:n,s:i,v:h}}function f(e,t,r,n){var i=[M(a(e).toString(16)),M(a(t).toString(16)),M(a(r).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function d(e,t,r,n){return[M(j(n)),M(a(e).toString(16)),M(a(t).toString(16)),M(a(r).toString(16))].join("")}function g(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s-=t/100,r.s=L(r.s),h(r)}function p(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s+=t/100,r.s=L(r.s),h(r)}function b(e){return h(e).desaturate(100)}function v(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l+=t/100,r.l=L(r.l),h(r)}function m(e,t){t=0===t?0:t||10;var r=h(e).toRgb();return r.r=s(0,o(255,r.r-a(-t/100*255))),r.g=s(0,o(255,r.g-a(-t/100*255))),r.b=s(0,o(255,r.b-a(-t/100*255))),h(r)}function x(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l-=t/100,r.l=L(r.l),h(r)}function _(e,t){var r=h(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,h(r)}function k(e){var t=h(e).toHsl();return t.h=(t.h+180)%360,h(t)}function w(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+120)%360,s:t.s,l:t.l}),h({h:(r+240)%360,s:t.s,l:t.l})]}function y(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+90)%360,s:t.s,l:t.l}),h({h:(r+180)%360,s:t.s,l:t.l}),h({h:(r+270)%360,s:t.s,l:t.l})]}function C(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+72)%360,s:t.s,l:t.l}),h({h:(r+216)%360,s:t.s,l:t.l})]}function A(e,t,r){t=t||6,r=r||30;var n=h(e).toHsl(),i=360/r,a=[h(e)];for(n.h=(n.h-(i*t>>1)+720)%360;--t;)n.h=(n.h+i)%360,a.push(h(n));return a}function S(e,t){t=t||6;for(var r=h(e).toHsv(),n=r.h,i=r.s,a=r.v,o=[],s=1/t;t--;)o.push(h({h:n,s:i,v:a})),a=(a+s)%1;return o}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,r,n,i=this.toRgb();return e=i.r/255,r=i.g/255,n=i.b/255,.2126*(e<=.03928?e/12.92:t.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:t.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:t.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=F(e),this._roundA=a(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),t=a(360*e.h),r=a(100*e.s),n=a(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=a(360*e.h),r=a(100*e.s),n=a(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return f(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,i){var o=[M(a(e).toString(16)),M(a(t).toString(16)),M(a(r).toString(16)),M(j(n))];if(i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1))return o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0);return o.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:a(this._r),g:a(this._g),b:a(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+a(this._r)+", "+a(this._g)+", "+a(this._b)+")":"rgba("+a(this._r)+", "+a(this._g)+", "+a(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:a(100*R(this._r,255))+"%",g:a(100*R(this._g,255))+"%",b:a(100*R(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+a(100*R(this._r,255))+"%, "+a(100*R(this._g,255))+"%, "+a(100*R(this._b,255))+"%)":"rgba("+a(100*R(this._r,255))+"%, "+a(100*R(this._g,255))+"%, "+a(100*R(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(E[f(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+d(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var i=h(e);r="#"+d(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(v,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(_,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(k,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(w,arguments)},tetrad:function(){return this._applyCombination(y,arguments)}},h.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:T(e[n]));e=r}return h(e,t)},h.equals=function(e,t){return!(!e||!t)&&h(e).toRgbString()==h(t).toRgbString()},h.random=function(){return h.fromRatio({r:l(),g:l(),b:l()})},h.mix=function(e,t,r){r=0===r?0:r||50;var n=h(e).toRgb(),i=h(t).toRgb(),a=r/100;return h({r:(i.r-n.r)*a+n.r,g:(i.g-n.g)*a+n.g,b:(i.b-n.b)*a+n.b,a:(i.a-n.a)*a+n.a})},h.readability=function(e,r){var n=h(e),i=h(r);return(t.max(n.getLuminance(),i.getLuminance())+.05)/(t.min(n.getLuminance(),i.getLuminance())+.05)},h.isReadable=function(e,t,r){var n,i,a=h.readability(e,t);switch(i=!1,(n=function(e){var t,r;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),r=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==r&&"large"!==r&&(r="small");return{level:t,size:r}}(r)).level+n.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7;break}return i},h.mostReadable=function(e,t,r){var n,i,a,o,s=null,l=0;i=(r=r||{}).includeFallbackColors,a=r.level,o=r.size;for(var c=0;c<t.length;c++)(n=h.readability(e,t[c]))>l&&(l=n,s=h(t[c]));return h.isReadable(e,s,{level:a,size:o})||!i?s:(r.includeFallbackColors=!1,h.mostReadable(e,["#fff","#000"],r))};var H=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},E=h.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(H);function F(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function R(e,r){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var n=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=o(r,s(0,parseFloat(e))),n&&(e=parseInt(e*r,10)/100),t.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function L(e){return o(1,s(0,e))}function $(e){return parseInt(e,16)}function M(e){return 1==e.length?"0"+e:""+e}function T(e){return e<=1&&(e=100*e+"%"),e}function j(e){return t.round(255*parseFloat(e)).toString(16)}function O(e){return $(e)/255}var D,N,z,B=(N="[\\s|\\(]+("+(D="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+D+")[,|\\s]+("+D+")\\s*\\)?",z="[\\s|\\(]+("+D+")[,|\\s]+("+D+")[,|\\s]+("+D+")[,|\\s]+("+D+")\\s*\\)?",{CSS_UNIT:new RegExp(D),rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+z),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+z),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function U(e){return!!B.CSS_UNIT.exec(e)}e.exports?e.exports=h:window.tinycolor=h}(Math)}(k);var w=k.exports;function y(e,t){const r=e&&e.a;let n;n=e&&e.hsl?w(e.hsl):e&&e.hex&&e.hex.length>0?w(e.hex):e&&e.hsv?w(e.hsv):e&&e.rgba?w(e.rgba):e&&e.rgb?w(e.rgb):w(e),!n||void 0!==n._a&&null!==n._a||n.setAlpha(r||1);const i=n.toHsl(),a=n.toHsv();return 0===i.s&&(a.h=i.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:i,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:a,oldHue:e.h||t||i.h,source:e.source,a:e.a||n.getAlpha()}}var C={model:{prop:"modelValue",event:"update:modelValue"},props:["modelValue"],data(){return{val:y(this.modelValue)}},computed:{colors:{get(){return this.val},set(e){this.val=e,this.$emit("update:modelValue",e)}}},watch:{modelValue(e){this.val=y(e)}},methods:{colorChange(e,t){this.oldHue=this.colors.hsl.h,this.colors=y(e,t||this.oldHue)},isValidHex:e=>w(e).isValid(),simpleCheckForValidColor(e){const t=["r","g","b","a","h","s","l","v"];let r=0,n=0;for(let i=0;i<t.length;i++){const a=t[i];e[a]&&(r++,isNaN(e[a])||n++)}if(r===n)return e},paletteUpperCase:e=>e.map((e=>e.toUpperCase())),isTransparent:e=>0===w(e).getAlpha()}},A={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(e){this.handleChange(e.target.value)},handleChange(e){const t={};t[this.label]=e,(void 0===t.hex&&void 0===t["#"]||e.length>5)&&this.$emit("change",t)},handleKeyDown(e){let{val:t}=this;const r=Number(t);if(r){const n=this.arrowOffset||1;38===e.keyCode&&(t=r+n,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=r-n,this.handleChange(t),e.preventDefault())}}}},S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},H=E;function E(e,t,r){return t<r?e<t?t:e>r?r:e:e<r?r:e>t?t:e}var F=H,R="Expected a function",L=NaN,$="[object Symbol]",M=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,O=/^0o[0-7]+$/i,D=parseInt,N="object"==typeof S&&S&&S.Object===Object&&S,z="object"==typeof self&&self&&self.Object===Object&&self,B=N||z||Function("return this")(),U=Object.prototype,V=U.toString,I=Math.max,q=Math.min,P=function(){return B.Date.now()};function X(e,t,r){var n,i,a,o,s,l,h=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError(R);function d(t){var r=n,a=i;return n=i=void 0,h=t,o=e.apply(a,r)}function g(e){return h=e,s=setTimeout(b,t),c?d(e):o}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-h>=a}function b(){var e=P();if(p(e))return v(e);s=setTimeout(b,function(e){var r=t-(e-l);return u?q(r,a-(e-h)):r}(e))}function v(e){return s=void 0,f&&n?d(e):(n=i=void 0,o)}function m(){var e=P(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return g(l);if(u)return s=setTimeout(b,t),d(l)}return void 0===s&&(s=setTimeout(b,t)),o}return t=J(t)||0,Y(r)&&(c=!!r.leading,a=(u="maxWait"in r)?I(J(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),m.cancel=function(){void 0!==s&&clearTimeout(s),h=0,n=l=i=s=void 0},m.flush=function(){return void 0===s?o:v(P())},m}function W(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(R);return Y(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),X(e,t,{leading:n,maxWait:t,trailing:i})}function Y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function K(e){return!!e&&"object"==typeof e}function G(e){return"symbol"==typeof e||K(e)&&V.call(e)==$}function J(e){if("number"==typeof e)return e;if(G(e))return L;if(Y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(M,"");var r=j.test(e);return r||O.test(e)?D(e.slice(2),r?2:8):T.test(e)?L:+e}var Q=W,Z=Q,ee={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:Z(((e,t)=>{e(t)}),20,{leading:!0,trailing:!1}),handleChange(e,t){!t&&e.preventDefault();const{container:r}=this.$refs;if(!r)return;const n=r.clientWidth,i=r.clientHeight,a=r.getBoundingClientRect().left+window.pageXOffset,o=r.getBoundingClientRect().top+window.pageYOffset,s=e.pageX||(e.touches?e.touches[0].pageX:0),l=e.pageY||(e.touches?e.touches[0].pageY:0),h=F(s-a,0,n),c=F(l-o,0,i),u=h/n,f=F(-c/i+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:u,v:f,a:this.colors.hsv.a,source:"hsva"})},onChange(e){this.$emit("change",e)},handleMouseDown(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},te={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:()=>({oldHue:0,pullDirection:""}),computed:{colors(){const{h:e}=this.value.hsl;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:r}=this.$refs;if(!r)return;const n=r.clientWidth,i=r.clientHeight,a=r.getBoundingClientRect().left+window.pageXOffset,o=r.getBoundingClientRect().top+window.pageYOffset,s=(e.pageX||(e.touches?e.touches[0].pageX:0))-a,l=(e.pageY||(e.touches?e.touches[0].pageY:0))-o;let h,c;"vertical"===this.direction?(l<0?h=360:l>i?h=0:(c=-100*l/i+100,h=360*c/100),this.colors.hsl.h!==h&&this.$emit("change",{h:h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(s<0?h=0:s>n?h=360:(c=100*s/n,h=360*c/100),this.colors.hsl.h!==h&&this.$emit("change",{h:h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const re=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];var ne={name:"Sketch",mixins:[C],components:{saturation:ee,hue:te,alpha:_,"ed-in":A,checkboard:p},props:{presetColors:{type:Array,default:()=>re},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex(){let e;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`}},methods:{handlePreset(e){this.colorChange({hex:e,source:"hex"})},childChange(e){this.colorChange(e)},inputChange(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}};const ie={class:"vc-sketch-saturation-wrap"},ae={class:"vc-sketch-controls"},oe={class:"vc-sketch-sliders"},se={class:"vc-sketch-hue-wrap"},le={key:0,class:"vc-sketch-alpha-wrap"},he={class:"vc-sketch-color-wrap"},ce=["aria-label"],ue={key:0,class:"vc-sketch-field"},fe={class:"vc-sketch-field--double"},de={class:"vc-sketch-field--single"},ge={class:"vc-sketch-field--single"},pe={class:"vc-sketch-field--single"},be={key:0,class:"vc-sketch-field--single"},ve={class:"vc-sketch-presets",role:"group","aria-label":"A color preset, pick one to set as current color"},me=["aria-label","onClick"],xe=["aria-label","onClick"];function _e(e,u,f,d,g,p){const b=i("saturation"),v=i("hue"),m=i("alpha"),x=i("checkboard"),_=i("ed-in");return t(),r("div",{role:"application","aria-label":"Sketch color picker",class:c(["vc-sketch",f.disableAlpha?"vc-sketch__disable-alpha":""])},[a("div",ie,[o(b,{value:e.colors,onChange:p.childChange},null,8,["value","onChange"])]),a("div",ae,[a("div",oe,[a("div",se,[o(v,{value:e.colors,onChange:p.childChange},null,8,["value","onChange"])]),f.disableAlpha?s("v-if",!0):(t(),r("div",le,[o(m,{value:e.colors,onChange:p.childChange},null,8,["value","onChange"])]))]),a("div",he,[a("div",{"aria-label":`Current color is ${p.activeColor}`,class:"vc-sketch-active-color",style:n({background:p.activeColor})},null,12,ce),o(x)])]),f.disableFields?s("v-if",!0):(t(),r("div",ue,[s(" rgba "),a("div",fe,[o(_,{label:"hex",value:p.hex,onChange:p.inputChange},null,8,["value","onChange"])]),a("div",de,[o(_,{label:"r",value:e.colors.rgba.r,onChange:p.inputChange},null,8,["value","onChange"])]),a("div",ge,[o(_,{label:"g",value:e.colors.rgba.g,onChange:p.inputChange},null,8,["value","onChange"])]),a("div",pe,[o(_,{label:"b",value:e.colors.rgba.b,onChange:p.inputChange},null,8,["value","onChange"])]),f.disableAlpha?s("v-if",!0):(t(),r("div",be,[o(_,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:p.inputChange},null,8,["value","arrow-offset","onChange"])]))])),a("div",ve,[(t(!0),r(l,null,h(f.presetColors,(i=>(t(),r(l,null,[e.isTransparent(i)?(t(),r("div",{key:i,"aria-label":"Color:"+i,class:"vc-sketch-presets-color",onClick:e=>p.handlePreset(i)},[o(x)],8,xe)):(t(),r("div",{key:`!${i}`,class:"vc-sketch-presets-color","aria-label":"Color:"+i,style:n({background:i}),onClick:e=>p.handlePreset(i)},null,12,me))],64)))),256))])],2)}var ke=".vc-sketch{background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;padding:10px 10px 0;position:relative;width:200px}.vc-sketch-saturation-wrap{overflow:hidden;padding-bottom:75%;position:relative;width:100%}.vc-sketch-controls{display:flex}.vc-sketch-sliders{flex:1;padding:4px 0}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-alpha-wrap,.vc-sketch-hue-wrap{height:10px;position:relative}.vc-sketch-alpha-wrap{margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{border-radius:3px;height:24px;margin-left:4px;margin-top:4px;position:relative;width:24px}.vc-sketch-active-color{border-radius:2px;bottom:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);left:0;position:absolute;right:0;top:0;z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px;padding:4px 0 3px 10%;width:90%}.vc-sketch-field .vc-input__label{color:#222;display:block;font-size:11px;padding-bottom:4px;padding-top:3px;text-align:center;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{border-top:1px solid #eee;margin-left:-10px;margin-right:-10px;padding-left:10px;padding-top:10px}.vc-sketch-presets-color{cursor:pointer;display:inline-block;height:16px;margin:0 10px 10px 0;overflow:hidden;position:relative;vertical-align:top;width:16px}.vc-sketch-presets-color,.vc-sketch-presets-color .vc-checkerboard{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}";d(ke),ne.render=_e,ne.__file="src/components/sketch/sketch.vue";const we={name:"颜色转换",data:()=>({colors:"#16b0f6"}),components:{Container:e,Sketch:ne}};function ye(e,r,n,a,s,l){const h=i("Sketch"),c=i("container");return t(),u(c,null,{default:f((()=>[o(h,{modelValue:e.colors,"onUpdate:modelValue":r[0]||(r[0]=t=>e.colors=t),style:{maxWidth:"30rem",width:"100%",margin:"0 auto"}},null,8,["modelValue"])])),_:1})}we.render=ye;export{we as default};
