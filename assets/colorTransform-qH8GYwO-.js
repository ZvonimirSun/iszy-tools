import{i as oe,am as fe,G as U,D as ie,l as T,o as $,h as S,s as E,w as z,F as le,r as ue,H as ce,t as d,a3 as de,a5 as se,z as be,C as he,A as me,an as ge,j as Y,a4 as pe,E as ve,y as ye,p as we,k as ke,g as xe}from"./index-j7kdK-H8.js";import{a as _e,E as Ne}from"./el-form-item-pniwTBoV.js";import{w as J,k as Me}from"./index-kn6emmbE.js";import{u as $e}from"./useCopy-9Ob1NI-A.js";import{b as ze}from"./_baseEach-gbQdIEUR.js";import{c as Ce}from"./_castFunction-msMmHjJI.js";import"./castArray-RcvnJ037.js";function Ie(e,a){var t=oe(e)?fe:ze;return t(e,Ce(a))}var C=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},s=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=Math.pow(10,a)),Math.round(t*e)/t+0},k=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=1),e>t?t:e>a?e:a},Q=function(e){return{c:k(e.c,0,100),m:k(e.m,0,100),y:k(e.y,0,100),k:k(e.k,0,100),a:k(e.a)}},A=function(e){return{c:s(e.c,2),m:s(e.m,2),y:s(e.y,2),k:s(e.k,2),a:s(e.a,3)}};function Z(e){return{r:s(255*(1-e.c/100)*(1-e.k/100)),g:s(255*(1-e.m/100)*(1-e.k/100)),b:s(255*(1-e.y/100)*(1-e.k/100)),a:e.a}}function G(e){var a=1-Math.max(e.r/255,e.g/255,e.b/255),t=(1-e.r/255-a)/(1-a),r=(1-e.g/255-a)/(1-a),n=(1-e.b/255-a)/(1-a);return{c:isNaN(t)?0:s(100*t),m:isNaN(r)?0:s(100*r),y:isNaN(n)?0:s(100*n),k:s(100*a),a:e.a}}function Se(e){var a=e.c,t=e.m,r=e.y,n=e.k,l=e.a,o=l===void 0?1:l;return C(a)&&C(t)&&C(r)&&C(n)?Z(Q({c:Number(a),m:Number(t),y:Number(r),k:Number(n),a:Number(o)})):null}var Ee=/^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ve=function(e){var a=Ee.exec(e);return a?Z(Q({c:Number(a[1])*(a[2]?1:100),m:Number(a[3])*(a[4]?1:100),y:Number(a[5])*(a[6]?1:100),k:Number(a[7])*(a[8]?1:100),a:a[9]===void 0?1:Number(a[9])/(a[10]?100:1)})):null};function He(e,a){e.prototype.toCmyk=function(){return A(G(this.rgba))},e.prototype.toCmykString=function(){return t=A(G(this.rgba)),r=t.c,n=t.m,l=t.y,o=t.k,(i=t.a)<1?"device-cmyk("+r+"% "+n+"% "+l+"% "+o+"% / "+i+")":"device-cmyk("+r+"% "+n+"% "+l+"% "+o+"%)";var t,r,n,l,o,i},a.object.push([Se,"cmyk"]),a.string.push([Ve,"cmyk"])}var Fe={grad:.9,turn:360,rad:360/(2*Math.PI)},V=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},I=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=Math.pow(10,a)),Math.round(t*e)/t+0},H=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=1),e>t?t:e>a?e:a},ee=function(e){return{h:(a=e.h,(a=isFinite(a)?a%360:0)>0?a:a+360),w:H(e.w,0,100),b:H(e.b,0,100),a:H(e.a)};var a},K=function(e){return{h:I(e.h),w:I(e.w),b:I(e.b),a:I(e.a,3)}},O=function(e){return{h:function(a){var t=a.r,r=a.g,n=a.b,l=a.a,o=Math.max(t,r,n),i=o-Math.min(t,r,n),u=i?o===t?(r-n)/i:o===r?2+(n-t)/i:4+(t-r)/i:0;return{h:60*(u<0?u+6:u),s:o?i/o*100:0,v:o/255*100,a:l}}(e).h,w:Math.min(e.r,e.g,e.b)/255*100,b:100-Math.max(e.r,e.g,e.b)/255*100,a:e.a}},ae=function(e){return function(a){var t=a.h,r=a.s,n=a.v,l=a.a;t=t/360*6,r/=100,n/=100;var o=Math.floor(t),i=n*(1-r),u=n*(1-(t-o)*r),f=n*(1-(1-t+o)*r),h=o%6;return{r:255*[n,u,i,i,f,n][h],g:255*[f,n,n,u,i,i][h],b:255*[i,i,f,n,n,u][h],a:l}}({h:e.h,s:e.b===100?0:100-e.w/(100-e.b)*100,v:100-e.b,a:e.a})},qe=function(e){var a=e.h,t=e.w,r=e.b,n=e.a,l=n===void 0?1:n;if(!V(a)||!V(t)||!V(r))return null;var o=ee({h:Number(a),w:Number(t),b:Number(r),a:Number(l)});return ae(o)},Pe=/^hwb\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Be=function(e){var a=Pe.exec(e);if(!a)return null;var t,r,n=ee({h:(t=a[1],r=a[2],r===void 0&&(r="deg"),Number(t)*(Fe[r]||1)),w:Number(a[3]),b:Number(a[4]),a:a[5]===void 0?1:Number(a[5])/(a[6]?100:1)});return ae(n)};function Le(e,a){e.prototype.toHwb=function(){return K(O(this.rgba))},e.prototype.toHwbString=function(){return t=K(O(this.rgba)),r=t.h,n=t.w,l=t.b,(o=t.a)<1?"hwb("+r+" "+n+"% "+l+"% / "+o+")":"hwb("+r+" "+n+"% "+l+"%)";var t,r,n,l,o},a.string.push([Be,"hwb"]),a.object.push([qe,"hwb"])}function De(e,a){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var n in t)r[t[n]]=n;var l={};e.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var i,u,f=r[this.toHex()];if(f)return f;if(o!=null&&o.closest){var h=this.toRgb(),p=1/0,g="black";if(!l.length)for(var _ in t)l[_]=new e(t[_]).toRgb();for(var N in t){var M=(i=h,u=l[N],Math.pow(i.r-u.r,2)+Math.pow(i.g-u.g,2)+Math.pow(i.b-u.b,2));M<p&&(p=M,g=N)}return g}},a.string.push([function(o){var i=o.toLowerCase(),u=i==="transparent"?"#0000":t[i];return u?new e(u).toRgb():null},"name"])}var je={grad:.9,turn:360,rad:360/(2*Math.PI)},F=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},y=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=Math.pow(10,a)),Math.round(t*e)/t+0},b=function(e,a,t){return a===void 0&&(a=0),t===void 0&&(t=1),e>t?t:e>a?e:a},q=function(e){var a=e/255;return a<.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)},P=function(e){return 255*(e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e)},B=96.422,L=100,D=82.521,Re=function(e){var a,t,r={x:.9555766*(a=e).x+-.0230393*a.y+.0631636*a.z,y:-.0282895*a.x+1.0099416*a.y+.0210077*a.z,z:.0122982*a.x+-.020483*a.y+1.3299098*a.z};return t={r:P(.032404542*r.x-.015371385*r.y-.004985314*r.z),g:P(-.00969266*r.x+.018760108*r.y+41556e-8*r.z),b:P(556434e-9*r.x-.002040259*r.y+.010572252*r.z),a:e.a},{r:b(t.r,0,255),g:b(t.g,0,255),b:b(t.b,0,255),a:b(t.a)}},Ue=function(e){var a=q(e.r),t=q(e.g),r=q(e.b);return function(n){return{x:b(n.x,0,B),y:b(n.y,0,L),z:b(n.z,0,D),a:b(n.a)}}(function(n){return{x:1.0478112*n.x+.0228866*n.y+-.050127*n.z,y:.0295424*n.x+.9904844*n.y+-.0170491*n.z,z:-.0092345*n.x+.0150436*n.y+.7521316*n.z,a:n.a}}({x:100*(.4124564*a+.3575761*t+.1804375*r),y:100*(.2126729*a+.7151522*t+.072175*r),z:100*(.0193339*a+.119192*t+.9503041*r),a:e.a}))},x=216/24389,w=24389/27,te=function(e){return{l:b(e.l,0,100),c:e.c,h:(a=e.h,(a=isFinite(a)?a%360:0)>0?a:a+360),a:e.a};var a},W=function(e){return{l:y(e.l,2),c:y(e.c,2),h:y(e.h,2),a:y(e.a,3)}},Te=function(e){var a=e.l,t=e.c,r=e.h,n=e.a,l=n===void 0?1:n;if(!F(a)||!F(t)||!F(r))return null;var o=te({l:Number(a),c:Number(t),h:Number(r),a:Number(l)});return re(o)},X=function(e){var a=function(l){var o=Ue(l),i=o.x/B,u=o.y/L,f=o.z/D;return i=i>x?Math.cbrt(i):(w*i+16)/116,{l:116*(u=u>x?Math.cbrt(u):(w*u+16)/116)-16,a:500*(i-u),b:200*(u-(f=f>x?Math.cbrt(f):(w*f+16)/116)),alpha:o.a}}(e),t=y(a.a,3),r=y(a.b,3),n=Math.atan2(r,t)/Math.PI*180;return{l:a.l,c:Math.sqrt(t*t+r*r),h:n<0?n+360:n,a:a.alpha}},re=function(e){return a={l:e.l,a:e.c*Math.cos(e.h*Math.PI/180),b:e.c*Math.sin(e.h*Math.PI/180),alpha:e.a},r=a.a/500+(t=(a.l+16)/116),n=t-a.b/200,Re({x:(Math.pow(r,3)>x?Math.pow(r,3):(116*r-16)/w)*B,y:(a.l>8?Math.pow((a.l+16)/116,3):a.l/w)*L,z:(Math.pow(n,3)>x?Math.pow(n,3):(116*n-16)/w)*D,a:a.alpha});var a,t,r,n},Ae=/^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ge=function(e){var a=Ae.exec(e);if(!a)return null;var t,r,n=te({l:Number(a[1]),c:Number(a[2]),h:(t=a[3],r=a[4],r===void 0&&(r="deg"),Number(t)*(je[r]||1)),a:a[5]===void 0?1:Number(a[5])/(a[6]?100:1)});return re(n)};function Ke(e,a){e.prototype.toLch=function(){return W(X(this.rgba))},e.prototype.toLchString=function(){return t=W(X(this.rgba)),r=t.l,n=t.c,l=t.h,(o=t.a)<1?"lch("+r+"% "+n+" "+l+" / "+o+")":"lch("+r+"% "+n+" "+l+")";var t,r,n,l,o},a.string.push([Ge,"lch"]),a.object.push([Te,"lch"])}function Oe(e,a){try{return e()}catch{return a}}function m({label:e,parse:a=o=>J(o),format:t,placeholder:r,invalidMessage:n=`错误的 ${e} 格式。`,type:l="text"}){return{type:l,label:e,parse:o=>Oe(()=>a(o),void 0),format:t,placeholder:r,validation:(o,i,u)=>{i?a(i).isValid()?u():u(new Error(n)):u()}}}function We(e){const a={};for(const r in e)a[r]="";const t={};for(const r in e)t[r]=[{validator:e[r].validation,trigger:"change"}];return{ruleForm:U(a),rules:U(t)}}const Xe=e=>(we("data-v-65f3d841"),e=e(),ke(),e),Ye={"w-full":"","h-full":"","overflow-auto":"",flex:"","flex-col":"","items-center":""},Je=Xe(()=>Y("i",{class:"i-icon-park-outline-copy"},null,-1)),Qe=["onUpdate:modelValue","onChange"],Ze=ie({__name:"colorTransform",setup(e){Me([He,Le,De,Ke]);const a={picker:m({label:"颜色选择器",format:f=>f.toHex(),type:"color-picker"}),hex:m({label:"HEX",format:f=>f.toHex(),placeholder:"e.g. #ff0000"}),rgb:m({label:"RGB",format:f=>f.toRgbString(),placeholder:"e.g. rgb(255, 0, 0)"}),hsl:m({label:"HSL",format:f=>f.toHslString(),placeholder:"e.g. hsl(0, 100%, 50%)"}),hwb:m({label:"HWB",format:f=>f.toHwbString(),placeholder:"e.g. hwb(0, 0%, 0%)"}),lch:m({label:"LCH",format:f=>f.toLchString(),placeholder:"e.g. lch(53.24, 104.55, 40.85)"}),cmyk:m({label:"CMYK",format:f=>f.toCmykString(),placeholder:"e.g. cmyk(0, 100%, 100%, 0)"}),name:m({label:"名称",format:f=>f.toName({closest:!0})??"Unknown",placeholder:"e.g. red"})},{rules:t,ruleForm:r}=We(a),n=T(!1),l=T();o(J("#16b0f6"));function o(f,h){f!==void 0&&f.isValid()&&(n.value=f.isDark(),Ie(a,({format:p},g)=>{g!==h&&(r[g]=p(f))}))}const{copy:i}=$e({text:"复制成功"});function u(f){i(f)}return(f,h)=>{const p=ve,g=ye,_=_e,N=Ne;return $(),S("div",Ye,[E(N,{"w-250":"","max-w-full":"","label-width":100,rules:d(t),model:d(r),size:"large"},{default:z(()=>[($(),S(le,null,ue(a,({label:M,parse:j,placeholder:ne,type:R},c)=>E(_,{key:c,label:M,prop:c},{default:z(()=>[R==="text"?($(),ce(g,{key:0,modelValue:d(r)[c],"onUpdate:modelValue":v=>d(r)[c]=v,placeholder:ne,clearable:"",onInput:v=>o(j(d(r)[c]),c)},{append:z(()=>[E(p,{onClick:v=>u(d(r)[c])},{default:z(()=>[Je]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","onInput"])):R==="color-picker"?($(),S("div",{key:1,class:de(["picker",{dark:d(n)}]),style:se({backgroundColor:d(r)[c]})},[be(he(d(r)[c])+" ",1),me(Y("input",{ref_for:!0,ref_key:"colorInput",ref:l,"onUpdate:modelValue":v=>d(r)[c]=v,class:"class-input",type:"color",onChange:v=>o(j(d(r)[c]),c)},null,40,Qe),[[ge,d(r)[c]]])],6)):pe("",!0)]),_:2},1032,["label","prop"])),64))]),_:1},8,["rules","model"])])}}}),ia=xe(Ze,[["__scopeId","data-v-65f3d841"]]);export{ia as default};
