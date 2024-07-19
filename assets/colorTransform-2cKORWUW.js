import{d as ne,bf as fe,aE as j,D as ie,r as T,H as $,I as S,V,$ as z,Q as le,ax as ue,Z as ce,u as d,J as de,K as se,aq as be,ah as he,L as me,bg as ge,ao as W,a1 as pe,ar as ve,az as ye,aA as we,aB as ke,aC as xe}from"./index-tHblRTxj.js";import{a as _e,E as Ne}from"./el-form-item-C1RA3thM.js";import{w as X,k as Me}from"./index-BKlY8qx0.js";import{u as $e}from"./useCopy-BmTeb3O3.js";import{b as ze}from"./_baseEach-2hfNRUI4.js";import{c as Ce}from"./_castFunction-BwsWpjRV.js";import"./castArray-DNtjWPNh.js";function Ie(e,a){var t=ne(e)?fe:ze;return t(e,Ce(a))}var C=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},s=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=Math.pow(10,a)),Math.round(t*e)/t+0},k=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=1),e>t?t:e>a?e:a},Y=function(e){return{c:k(e.c,0,100),m:k(e.m,0,100),y:k(e.y,0,100),k:k(e.k,0,100),a:k(e.a)}},A=function(e){return{c:s(e.c,2),m:s(e.m,2),y:s(e.y,2),k:s(e.k,2),a:s(e.a,3)}};function Z(e){return{r:s(255*(1-e.c/100)*(1-e.k/100)),g:s(255*(1-e.m/100)*(1-e.k/100)),b:s(255*(1-e.y/100)*(1-e.k/100)),a:e.a}}function K(e){var a=1-Math.max(e.r/255,e.g/255,e.b/255),t=(1-e.r/255-a)/(1-a),r=(1-e.g/255-a)/(1-a),o=(1-e.b/255-a)/(1-a);return{c:isNaN(t)?0:s(100*t),m:isNaN(r)?0:s(100*r),y:isNaN(o)?0:s(100*o),k:s(100*a),a:e.a}}function Se(e){var a=e.c,t=e.m,r=e.y,o=e.k,l=e.a,n=l===void 0?1:l;return C(a)&&C(t)&&C(r)&&C(o)?Z(Y({c:Number(a),m:Number(t),y:Number(r),k:Number(o),a:Number(n)})):null}var Ve=/^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ee=function(e){var a=Ve.exec(e);return a?Z(Y({c:Number(a[1])*(a[2]?1:100),m:Number(a[3])*(a[4]?1:100),y:Number(a[5])*(a[6]?1:100),k:Number(a[7])*(a[8]?1:100),a:a[9]===void 0?1:Number(a[9])/(a[10]?100:1)})):null};function He(e,a){e.prototype.toCmyk=function(){return A(K(this.rgba))},e.prototype.toCmykString=function(){return t=A(K(this.rgba)),r=t.c,o=t.m,l=t.y,n=t.k,(i=t.a)<1?"device-cmyk("+r+"% "+o+"% "+l+"% "+n+"% / "+i+")":"device-cmyk("+r+"% "+o+"% "+l+"% "+n+"%)";var t,r,o,l,n,i},a.object.push([Se,"cmyk"]),a.string.push([Ee,"cmyk"])}var qe={grad:.9,turn:360,rad:360/(2*Math.PI)},E=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},I=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=Math.pow(10,a)),Math.round(t*e)/t+0},H=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=1),e>t?t:e>a?e:a},ee=function(e){return{h:(a=e.h,(a=isFinite(a)?a%360:0)>0?a:a+360),w:H(e.w,0,100),b:H(e.b,0,100),a:H(e.a)};var a},G=function(e){return{h:I(e.h),w:I(e.w),b:I(e.b),a:I(e.a,3)}},J=function(e){return{h:function(a){var t=a.r,r=a.g,o=a.b,l=a.a,n=Math.max(t,r,o),i=n-Math.min(t,r,o),u=i?n===t?(r-o)/i:n===r?2+(o-t)/i:4+(t-r)/i:0;return{h:60*(u<0?u+6:u),s:n?i/n*100:0,v:n/255*100,a:l}}(e).h,w:Math.min(e.r,e.g,e.b)/255*100,b:100-Math.max(e.r,e.g,e.b)/255*100,a:e.a}},ae=function(e){return function(a){var t=a.h,r=a.s,o=a.v,l=a.a;t=t/360*6,r/=100,o/=100;var n=Math.floor(t),i=o*(1-r),u=o*(1-(t-n)*r),f=o*(1-(1-t+n)*r),h=n%6;return{r:255*[o,u,i,i,f,o][h],g:255*[f,o,o,u,i,i][h],b:255*[i,i,f,o,o,u][h],a:l}}({h:e.h,s:e.b===100?0:100-e.w/(100-e.b)*100,v:100-e.b,a:e.a})},Fe=function(e){var a=e.h,t=e.w,r=e.b,o=e.a,l=o===void 0?1:o;if(!E(a)||!E(t)||!E(r))return null;var n=ee({h:Number(a),w:Number(t),b:Number(r),a:Number(l)});return ae(n)},Pe=/^hwb\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Be=function(e){var a=Pe.exec(e);if(!a)return null;var t,r,o=ee({h:(t=a[1],r=a[2],r===void 0&&(r="deg"),Number(t)*(qe[r]||1)),w:Number(a[3]),b:Number(a[4]),a:a[5]===void 0?1:Number(a[5])/(a[6]?100:1)});return ae(o)};function Le(e,a){e.prototype.toHwb=function(){return G(J(this.rgba))},e.prototype.toHwbString=function(){return t=G(J(this.rgba)),r=t.h,o=t.w,l=t.b,(n=t.a)<1?"hwb("+r+" "+o+"% "+l+"% / "+n+")":"hwb("+r+" "+o+"% "+l+"%)";var t,r,o,l,n},a.string.push([Be,"hwb"]),a.object.push([Fe,"hwb"])}function De(e,a){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in t)r[t[o]]=o;var l={};e.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var i,u,f=r[this.toHex()];if(f)return f;if(n!=null&&n.closest){var h=this.toRgb(),p=1/0,g="black";if(!l.length)for(var _ in t)l[_]=new e(t[_]).toRgb();for(var N in t){var M=(i=h,u=l[N],Math.pow(i.r-u.r,2)+Math.pow(i.g-u.g,2)+Math.pow(i.b-u.b,2));M<p&&(p=M,g=N)}return g}},a.string.push([function(n){var i=n.toLowerCase(),u=i==="transparent"?"#0000":t[i];return u?new e(u).toRgb():null},"name"])}var Re={grad:.9,turn:360,rad:360/(2*Math.PI)},q=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},y=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=Math.pow(10,a)),Math.round(t*e)/t+0},b=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=1),e>t?t:e>a?e:a},F=function(e){var a=e/255;return a<.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)},P=function(e){return 255*(e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e)},B=96.422,L=100,D=82.521,Ue=function(e){var a,t,r={x:.9555766*(a=e).x+-.0230393*a.y+.0631636*a.z,y:-.0282895*a.x+1.0099416*a.y+.0210077*a.z,z:.0122982*a.x+-.020483*a.y+1.3299098*a.z};return t={r:P(.032404542*r.x-.015371385*r.y-.004985314*r.z),g:P(-.00969266*r.x+.018760108*r.y+41556e-8*r.z),b:P(556434e-9*r.x-.002040259*r.y+.010572252*r.z),a:e.a},{r:b(t.r,0,255),g:b(t.g,0,255),b:b(t.b,0,255),a:b(t.a)}},je=function(e){var a=F(e.r),t=F(e.g),r=F(e.b);return function(o){return{x:b(o.x,0,B),y:b(o.y,0,L),z:b(o.z,0,D),a:b(o.a)}}(function(o){return{x:1.0478112*o.x+.0228866*o.y+-.050127*o.z,y:.0295424*o.x+.9904844*o.y+-.0170491*o.z,z:-.0092345*o.x+.0150436*o.y+.7521316*o.z,a:o.a}}({x:100*(.4124564*a+.3575761*t+.1804375*r),y:100*(.2126729*a+.7151522*t+.072175*r),z:100*(.0193339*a+.119192*t+.9503041*r),a:e.a}))},x=216/24389,w=24389/27,te=function(e){return{l:b(e.l,0,100),c:e.c,h:(a=e.h,(a=isFinite(a)?a%360:0)>0?a:a+360),a:e.a};var a},O=function(e){return{l:y(e.l,2),c:y(e.c,2),h:y(e.h,2),a:y(e.a,3)}},Te=function(e){var a=e.l,t=e.c,r=e.h,o=e.a,l=o===void 0?1:o;if(!q(a)||!q(t)||!q(r))return null;var n=te({l:Number(a),c:Number(t),h:Number(r),a:Number(l)});return re(n)},Q=function(e){var a=function(l){var n=je(l),i=n.x/B,u=n.y/L,f=n.z/D;return i=i>x?Math.cbrt(i):(w*i+16)/116,{l:116*(u=u>x?Math.cbrt(u):(w*u+16)/116)-16,a:500*(i-u),b:200*(u-(f=f>x?Math.cbrt(f):(w*f+16)/116)),alpha:n.a}}(e),t=y(a.a,3),r=y(a.b,3),o=Math.atan2(r,t)/Math.PI*180;return{l:a.l,c:Math.sqrt(t*t+r*r),h:o<0?o+360:o,a:a.alpha}},re=function(e){return a={l:e.l,a:e.c*Math.cos(e.h*Math.PI/180),b:e.c*Math.sin(e.h*Math.PI/180),alpha:e.a},r=a.a/500+(t=(a.l+16)/116),o=t-a.b/200,Ue({x:(Math.pow(r,3)>x?Math.pow(r,3):(116*r-16)/w)*B,y:(a.l>8?Math.pow((a.l+16)/116,3):a.l/w)*L,z:(Math.pow(o,3)>x?Math.pow(o,3):(116*o-16)/w)*D,a:a.alpha});var a,t,r,o},Ae=/^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ke=function(e){var a=Ae.exec(e);if(!a)return null;var t,r,o=te({l:Number(a[1]),c:Number(a[2]),h:(t=a[3],r=a[4],r===void 0&&(r="deg"),Number(t)*(Re[r]||1)),a:a[5]===void 0?1:Number(a[5])/(a[6]?100:1)});return re(o)};function Ge(e,a){e.prototype.toLch=function(){return O(Q(this.rgba))},e.prototype.toLchString=function(){return t=O(Q(this.rgba)),r=t.l,o=t.c,l=t.h,(n=t.a)<1?"lch("+r+"% "+o+" "+l+" / "+n+")":"lch("+r+"% "+o+" "+l+")";var t,r,o,l,n},a.string.push([Ke,"lch"]),a.object.push([Te,"lch"])}function Je(e,a){try{return e()}catch{return a}}function m({label:e,parse:a=n=>X(n),format:t,placeholder:r,invalidMessage:o=`错误的 ${e} 格式。`,type:l="text"}){return{type:l,label:e,parse:n=>Je(()=>a(n),void 0),format:t,placeholder:r,validation:(n,i,u)=>{i?a(i).isValid()?u():u(new Error(o)):u()}}}function Oe(e){const a={};for(const r in e)a[r]="";const t={};for(const r in e)t[r]=[{validator:e[r].validation,trigger:"change"}];return{ruleForm:j(a),rules:j(t)}}const Qe=e=>(we("data-v-7fe68916"),e=e(),ke(),e),We={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","overflow-auto":""},Xe=Qe(()=>W("i",{class:"i-icon-park-outline-copy"},null,-1)),Ye=["onUpdate:modelValue","onChange"],Ze=ie({__name:"colorTransform",setup(e){Me([He,Le,De,Ge]);const a={picker:m({label:"颜色选择器",format:f=>f.toHex(),type:"color-picker"}),hex:m({label:"HEX",format:f=>f.toHex(),placeholder:"e.g. #ff0000"}),rgb:m({label:"RGB",format:f=>f.toRgbString(),placeholder:"e.g. rgb(255, 0, 0)"}),hsl:m({label:"HSL",format:f=>f.toHslString(),placeholder:"e.g. hsl(0, 100%, 50%)"}),hwb:m({label:"HWB",format:f=>f.toHwbString(),placeholder:"e.g. hwb(0, 0%, 0%)"}),lch:m({label:"LCH",format:f=>f.toLchString(),placeholder:"e.g. lch(53.24, 104.55, 40.85)"}),cmyk:m({label:"CMYK",format:f=>f.toCmykString(),placeholder:"e.g. cmyk(0, 100%, 100%, 0)"}),name:m({label:"名称",format:f=>f.toName({closest:!0})??"Unknown",placeholder:"e.g. red"})},{rules:t,ruleForm:r}=Oe(a),o=T(!1),l=T();n(X("#16b0f6"));function n(f,h){f!==void 0&&f.isValid()&&(o.value=f.isDark(),Ie(a,({format:p},g)=>{g!==h&&(r[g]=p(f))}))}const{copy:i}=$e({text:"复制成功"});function u(f){i(f)}return(f,h)=>{const p=ve,g=ye,_=_e,N=Ne;return $(),S("div",We,[V(N,{"max-w-full":"","w-250":"","label-width":100,rules:d(t),model:d(r),size:"large"},{default:z(()=>[($(),S(le,null,ue(a,({label:M,parse:R,placeholder:oe,type:U},c)=>V(_,{key:c,label:M,prop:c},{default:z(()=>[U==="text"?($(),ce(g,{key:0,modelValue:d(r)[c],"onUpdate:modelValue":v=>d(r)[c]=v,placeholder:oe,clearable:"",onInput:v=>n(R(d(r)[c]),c)},{append:z(()=>[V(p,{onClick:v=>u(d(r)[c])},{default:z(()=>[Xe]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","onInput"])):U==="color-picker"?($(),S("div",{key:1,class:de(["picker",{dark:d(o)}]),style:se({backgroundColor:d(r)[c]})},[be(he(d(r)[c])+" ",1),me(W("input",{ref_for:!0,ref_key:"colorInput",ref:l,"onUpdate:modelValue":v=>d(r)[c]=v,class:"class-input",type:"color",onChange:v=>n(R(d(r)[c]),c)},null,40,Ye),[[ge,d(r)[c]]])],6)):pe("",!0)]),_:2},1032,["label","prop"])),64))]),_:1},8,["rules","model"])])}}}),ia=xe(Ze,[["__scopeId","data-v-7fe68916"]]);export{ia as default};
