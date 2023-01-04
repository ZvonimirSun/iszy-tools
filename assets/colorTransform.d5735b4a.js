import{as as Q,aN as q,d as D,_ as L,o as N,L as E,cg as S,M as g,a as h,V as X,W as B,r as k,f as z,H as Z,w as C,k as o,N as ee,b as H,l as j,I as ne}from"./index.90f5032a.js";import{_ as te}from"./index.ec4ae359.js";import{c as R}from"./clamp.40405321.js";/* empty css              *//* empty css               */import{_ as oe}from"./index.cdbdeb38.js";import{t as A}from"./tinycolor.544f1cf1.js";import{F as se,_ as le}from"./Form.27a73f78.js";import"./useFlexGapSupport.a1ac5c07.js";import"./DownOutlined.66ecff8a.js";import"./isMobile.481c1aec.js";import"./Col.1f632adf.js";import"./responsiveObserve.b057c2c3.js";import"./toArray.3d58d565.js";import"./get.87de599b.js";import"./_baseGet.b363a9de.js";import"./toString.515e9072.js";import"./_arrayMap.dc1f124f.js";import"./_flatRest.a1f05edd.js";import"./toInteger.b3d61924.js";import"./toFinite.7cc9644f.js";import"./_arrayIncludesWith.15e56e3a.js";import"./collapseMotion.f3aeeb33.js";var re="Expected a function";function ae(t,s,i){var a=!0,r=!0;if(typeof t!="function")throw new TypeError(re);return Q(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),q(t,s,{leading:a,maxWait:s,trailing:r})}const I={},ie=D({name:"TextureCheckerboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${pe(this.white,this.grey,this.size)})`}}}});function ue(t,s,i){if(typeof document>"u")return null;const a=document.createElement("canvas");a.width=a.height=i*2;const r=a.getContext("2d");return r?(r.fillStyle=t,r.fillRect(0,0,a.width,a.height),r.fillStyle=s,r.fillRect(0,0,i,i),r.translate(i,i),r.fillRect(0,0,i,i),a.toDataURL()):null}function pe(t,s,i){const a=`${t},${s},${i}`;if(I[a])return I[a];const r=ue(t,s,i);return I[a]=r,r}function de(t,s,i,a,r,c){return N(),E("div",{class:"checkerboard",style:S(t.bgStyle)},null,4)}const Y=L(ie,[["render",de],["__scopeId","data-v-8b61e23d"]]);const he=D({name:"AlphaPicker",components:{Checkerboard:Y},props:{value:{type:Object,default:void 0}},emits:["change"],data:()=>({checkerboardBackground:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADBJREFUOE9jfPbs2X8GPEBSUhKfNAPjqAHDIgz+//+PNx08f/4cfzoYNYCBceiHAQC5flV5JzgrxQAAAABJRU5ErkJggg=="}),computed:{colors(){return this.value},gradientColor(){const{rgba:t}=this.colors,s=[t.r,t.g,t.b].join(",");return`linear-gradient(to right, rgba(${s}, 0) 0%, rgba(${s}, 1) 100%)`}},methods:{handleChange(t,s){!s&&t.preventDefault();const{container:i}=this.$refs;if(!i)return;const a=i.clientWidth,r=i.getBoundingClientRect().left+window.pageXOffset,u=(t.pageX||(t.touches?t.touches[0].pageX:0))-r;let v;u<0?v=0:u>a?v=1:v=Math.round(u*100/a)/100,this.colors.a!==v&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:v,source:"rgba"})},handleMouseDown(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}),ve=t=>(X("data-v-280001d8"),t=t(),B(),t),fe={class:"alphaContainer"},ce={class:"alphaCheckerboardWrap"},ge=ve(()=>g("div",{class:"alphaPicker"},null,-1)),me=[ge];function _e(t,s,i,a,r,c){const u=Y;return N(),E("div",fe,[g("div",ce,[h(u)]),g("div",{class:"alphaGradient",style:S({background:t.gradientColor})},null,4),g("div",{ref:"container",class:"alpha",onMousedown:s[0]||(s[0]=(...v)=>t.handleMouseDown&&t.handleMouseDown(...v)),onTouchmove:s[1]||(s[1]=(...v)=>t.handleChange&&t.handleChange(...v)),onTouchstart:s[2]||(s[2]=(...v)=>t.handleChange&&t.handleChange(...v))},[g("div",{class:"alphaPointer",style:S({left:t.colors.a*100+"%"})},me,4)],544)])}const be=L(he,[["render",_e],["__scopeId","data-v-280001d8"]]);const $e=D({name:"HuePicker",props:{value:{type:Object,default:void 0}},emits:["change"],data(){return{oldHue:0,pullDirection:""}},computed:{colors(){return this.value},pointerLeft(){return this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":`${this.colors.hsl.h*100/360}%`}},watch:{colors:function(t){const{h:s}=t.hsl;s!==0&&s-this.oldHue>0&&(this.pullDirection="right"),s!==0&&s-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=s}},methods:{handleChange(t,s){!s&&t.preventDefault();const{container:i}=this.$refs;if(!i)return;const a=i.clientWidth,r=i.getBoundingClientRect().left+window.pageXOffset,u=(t.pageX||(t.touches?t.touches[0].pageX:0))-r;let v,U;u<0?v=0:u>a?v=360:(U=u*100/a,v=360*U/100),this.colors.hsl.h!==v&&this.$emit("change",{h:v,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})},handleMouseDown(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}),we=t=>(X("data-v-93e3198f"),t=t(),B(),t),Ce={class:"hueContainer"},ye=["aria-valuenow"],xe=we(()=>g("div",{class:"huePicker"},null,-1)),Ae=[xe];function ke(t,s,i,a,r,c){return N(),E("div",Ce,[g("div",{ref:"container",class:"hue","aria-valuemin":"0","aria-valuemax":"360","aria-valuenow":t.colors.hsl.h,onMousedown:s[0]||(s[0]=(...u)=>t.handleMouseDown&&t.handleMouseDown(...u)),onTouchmove:s[1]||(s[1]=(...u)=>t.handleChange&&t.handleChange(...u)),onTouchstart:s[2]||(s[2]=(...u)=>t.handleChange&&t.handleChange(...u))},[g("div",{class:"huePointer",style:S({top:0,left:t.pointerLeft}),role:"presentation"},Ae,4)],40,ye)])}const Se=L($e,[["render",ke],["__scopeId","data-v-93e3198f"]]);const Ue=D({name:"SaturationPicker",props:{value:{type:Object,default:void 0}},emits:["change"],computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return`${-(this.colors.hsv.v*100)+1+100}%`},pointerLeft(){return`${this.colors.hsv.s*100}%`}},methods:{throttle:ae((t,s)=>{t(s)},20,{leading:!0,trailing:!1}),handleChange(t,s){!s&&t.preventDefault();const{container:i}=this.$refs;if(!i)return;const a=i.clientWidth,r=i.clientHeight,c=i.getBoundingClientRect().left+window.pageXOffset,u=i.getBoundingClientRect().top+window.pageYOffset,v=t.pageX||(t.touches?t.touches[0].pageX:0),U=t.pageY||(t.touches?t.touches[0].pageY:0),_=R(v-c,0,a),w=R(U-u,0,r),y=_/a,x=R(-(w/r)+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:y,v:x,a:this.colors.hsv.a,source:"hsva"})},onChange(t){this.$emit("change",t)},handleMouseDown(){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}),T=t=>(X("data-v-45643251"),t=t(),B(),t),Me={class:"saturationContainer"},Le=T(()=>g("div",{class:"saturationWhite"},null,-1)),Ne=T(()=>g("div",{class:"saturationBlack"},null,-1)),Ee=T(()=>g("div",{class:"saturationCircle"},null,-1)),De=[Ee];function He(t,s,i,a,r,c){return N(),E("div",Me,[g("div",{ref:"container",class:"saturation",style:S({background:t.bgColor}),onMousedown:s[0]||(s[0]=(...u)=>t.handleMouseDown&&t.handleMouseDown(...u)),onTouchmove:s[1]||(s[1]=(...u)=>t.handleChange&&t.handleChange(...u)),onTouchstart:s[2]||(s[2]=(...u)=>t.handleChange&&t.handleChange(...u))},[Le,Ne,g("div",{class:"saturationPointer",style:S({top:t.pointerTop,left:t.pointerLeft})},De,4)],36)])}const Re=L(Ue,[["render",He],["__scopeId","data-v-45643251"]]);const Ie={"w-max":"","max-w-full":"","h-full":"","overflow-auto":"",flex:"","flex-row":"","flex-wrap":"","justify-around":"","mx-auto":"","my-0":"",class:"p-3.2 gap-3.2"},Xe={flex:"","flex-col":"","h-fit":"","w-xl":"","max-w-full":""},Be={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Te={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Fe={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Oe={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Pe={"w-xl":"","h-fit":"","max-w-full":""},je={"w-full":"","h-sm":"","b-2":"","b-solid":""},Ye={"w-full":"","h-4":""},Ve={"w-full":"","h-4":""},We={flex:"","flex-col":"","h-fit":"","w-xl":"","max-w-full":""},Ge={__name:"colorTransform",setup(t){const s=k("#16b0f6"),i=k(""),a=k({r:void 0,g:void 0,b:void 0,a:void 0}),r=k({c:void 0,m:void 0,y:void 0,k:void 0}),c=k({h:void 0,s:void 0,l:void 0,a:void 0}),u=k({h:void 0,s:void 0,v:void 0,a:void 0}),v=k(P("16b0f6")),U=z(()=>{const{rgba:n}=v.value;return`rgba(${[n.r,n.g,n.b,n.a].join(",")})`});Z(()=>{_({cssString:s.value})});function _(n){if(!!n)if(n.hex)M(n.hex)&&w({hex:n.hex,from:"hex"});else if(n.rgba)M(n.rgba)&&w({r:n.rgba.r||v.value.rgba.r,g:n.rgba.g||v.value.rgba.g,b:n.rgba.b||v.value.rgba.b,a:n.rgba.a||v.value.rgba.a,from:"rgba"});else if(n.hsla){const e=`hsla(${n.hsla.h},${(n.hsla.s*100).toFixed(0)}%,${(n.hsla.l*100).toFixed(0)}%,${n.hsla.a}`;M(e)&&w({hsl:e,from:"hsla"})}else if(n.hsva){const e=`hsva(${n.hsva.h},${(n.hsva.s*100).toFixed(0)}%,${(n.hsva.v*100).toFixed(0)}%,${n.hsva.a}`;M(e)&&w({hsv:e,from:"hsva"})}else n.cssString?M(n.cssString)&&w({cssString:n.cssString,from:"cssString"}):n.cmyk&&w({cmyk:n.cmyk,from:"cmyk"})}function w(n){if(n.from==="cmyk"){const b=W(r.value.c,r.value.m,r.value.y,r.value.k);if(b)n.rgba=`rgb(${b[0]},${b[1]},${b[2]})`;else return}const{rgba:e,hex:m,hex8:p,a:f,hsl:d,hsv:$}=v.value=P(n,v.value.hsl.h);if(n.from!=="rgba"&&(a.value.r=e.r,a.value.g=e.g,a.value.b=e.b,a.value.a=e.a),n.from!=="hsla"&&(c.value.h=d.h,c.value.s=d.s,c.value.l=d.l,c.value.a=f),n.from!=="hsva"&&(u.value.h=$.h,u.value.s=$.s,u.value.v=$.v,u.value.a=f),n.from!=="cmyk"){const b=V(e.r,e.g,e.b);b&&(r.value.c=b[0],r.value.m=b[1],r.value.y=b[2],r.value.k=b[3])}f===1?i.value=m.replace("#",""):i.value=p.replace("#",""),n.from!=="cssString"&&(f===1?s.value="#"+i.value.toLowerCase():s.value=`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`)}function y(n){return`${(n*100).toFixed(0)}%`}function x(n){return parseFloat((parseInt(n.replace("%",""))/100).toFixed(2))}function F(n){return`${parseFloat(parseFloat(n).toFixed(2))}\xB0`}function O(n){return parseFloat(n.replace("\xB0",""))}function M(n){return A(n).isValid()}function P(n,e){const m=n&&n.a;let p;n&&n.hsl?p=A(n.hsl):n&&n.hex&&n.hex.length>0?p=A(n.hex):n&&n.hsv?p=A(n.hsv):n&&n.rgba?p=A(n.rgba):n&&n.rgb?p=A(n.rgb):n&&n.cssString?p=A(n.cssString):p=A(n),p&&(p._a===void 0||p._a===null)&&p.setAlpha(m||1);const f=p.toHsl(),d=p.toHsv();return f.s===0&&(d.h=f.h=n.h||n.hsl&&n.hsl.h||e||0),{hsl:f,hex:p.toHexString(),hex8:p.toHex8String(),rgba:p.toRgb(),hsv:d,oldHue:n.h||e||f.h,from:n.from,a:n.a||p.getAlpha()}}function V(n,e,m){let p=0,f=0,d=0,$=0;if(n=parseInt((""+n).replace(/\s/g,""),10),e=parseInt((""+e).replace(/\s/g,""),10),m=parseInt((""+m).replace(/\s/g,""),10),n==null||e==null||m==null||isNaN(n)||isNaN(e)||isNaN(m)||n<0||e<0||m<0||n>255||e>255||m>255)return;if(n===0&&e===0&&m===0)return[0,0,0,1];p=1-n/255,f=1-e/255,d=1-m/255;const b=Math.min(p,Math.min(f,d));return p=(p-b)/(1-b),f=(f-b)/(1-b),d=(d-b)/(1-b),$=b,[p,f,d,$]}function W(n,e,m,p){if(n==null||e==null||m==null||p==null||isNaN(n)||isNaN(e)||isNaN(m)||isNaN(p)||n<0||e<0||m<0||p<0||n>1||e>1||m>1||p>1)return;let f,d,$;return f=255*(1-n)*(1-p),d=255*(1-e)*(1-p),$=255*(1-m)*(1-p),f=Math.round(f),d=Math.round(d),$=Math.round($),[f,d,$]}return(n,e)=>{const m=ee,p=ne,f=le,d=oe,$=se,b=Re,G=Se,K=be,J=te;return N(),E("div",Ie,[g("div",Xe,[h(m,{level:4},{default:C(()=>[H(" \u989C\u8272 ")]),_:1}),h($,{layout:"vertical"},{default:C(()=>[h(f,{label:"CSS \u5B57\u7B26\u4E32"},{default:C(()=>[h(p,{value:o(s),"onUpdate:value":e[0]||(e[0]=l=>j(s)?s.value=l:null),onChange:e[1]||(e[1]=l=>_({cssString:o(s)}))},null,8,["value"])]),_:1}),h(f,{label:"HEX",class:"hex"},{default:C(()=>[h(p,{value:o(i),"onUpdate:value":e[2]||(e[2]=l=>j(i)?i.value=l:null),onChange:e[3]||(e[3]=l=>_({hex:o(i)}))},null,8,["value"])]),_:1}),h(f,{label:"RGBA",class:"rgba"},{default:C(()=>[g("div",Be,[h(d,{value:o(a).r,"onUpdate:value":e[4]||(e[4]=l=>o(a).r=l),placeholder:"R",max:255,min:0,step:1,precision:0,onChange:e[5]||(e[5]=l=>_({rgba:o(a)}))},null,8,["value"]),h(d,{value:o(a).g,"onUpdate:value":e[6]||(e[6]=l=>o(a).g=l),placeholder:"G",max:255,min:0,step:1,precision:0,onChange:e[7]||(e[7]=l=>_({rgba:o(a)}))},null,8,["value"]),h(d,{value:o(a).b,"onUpdate:value":e[8]||(e[8]=l=>o(a).b=l),placeholder:"B",max:255,min:0,step:1,precision:0,onChange:e[9]||(e[9]=l=>_({rgba:o(a)}))},null,8,["value"]),h(d,{value:o(a).a,"onUpdate:value":e[10]||(e[10]=l=>o(a).a=l),placeholder:"A",max:1,min:0,step:.01,precision:2,onChange:e[11]||(e[11]=l=>_({rgba:o(a)}))},null,8,["value","step"])])]),_:1}),h(f,{label:"CMYK",class:"cmyk"},{default:C(()=>[g("div",Te,[h(d,{value:o(r).c,"onUpdate:value":e[12]||(e[12]=l=>o(r).c=l),placeholder:"C",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[13]||(e[13]=l=>_({cmyk:o(r)}))},null,8,["value","step"]),h(d,{value:o(r).m,"onUpdate:value":e[14]||(e[14]=l=>o(r).m=l),placeholder:"M",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[15]||(e[15]=l=>_({cmyk:o(r)}))},null,8,["value","step"]),h(d,{value:o(r).y,"onUpdate:value":e[16]||(e[16]=l=>o(r).y=l),placeholder:"Y",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[17]||(e[17]=l=>_({cmyk:o(r)}))},null,8,["value","step"]),h(d,{value:o(r).k,"onUpdate:value":e[18]||(e[18]=l=>o(r).k=l),placeholder:"K",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[19]||(e[19]=l=>_({cmyk:o(r)}))},null,8,["value","step"])])]),_:1}),h(f,{label:"HSVA",class:"hsva"},{default:C(()=>[g("div",Fe,[h(d,{value:o(u).h,"onUpdate:value":e[20]||(e[20]=l=>o(u).h=l),placeholder:"H",max:360,min:0,step:.01,formatter:F,parser:O,precision:2,onChange:e[21]||(e[21]=l=>_({hsva:o(u)}))},null,8,["value","step"]),h(d,{value:o(u).s,"onUpdate:value":e[22]||(e[22]=l=>o(u).s=l),placeholder:"S",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[23]||(e[23]=l=>_({hsva:o(u)}))},null,8,["value","step"]),h(d,{value:o(u).v,"onUpdate:value":e[24]||(e[24]=l=>o(u).v=l),placeholder:"V",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[25]||(e[25]=l=>_({hsva:o(u)}))},null,8,["value","step"]),h(d,{value:o(u).a,"onUpdate:value":e[26]||(e[26]=l=>o(u).a=l),placeholder:"A",max:1,min:0,step:.01,precision:2,onChange:e[27]||(e[27]=l=>_({hsva:o(u)}))},null,8,["value","step"])])]),_:1}),h(f,{label:"HSLA",class:"hsla"},{default:C(()=>[g("div",Oe,[h(d,{value:o(c).h,"onUpdate:value":e[28]||(e[28]=l=>o(c).h=l),placeholder:"H",max:360,min:0,step:.01,formatter:F,parser:O,precision:2,onChange:e[29]||(e[29]=l=>_({hsla:o(c)}))},null,8,["value","step"]),h(d,{value:o(c).s,"onUpdate:value":e[30]||(e[30]=l=>o(c).s=l),placeholder:"S",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[31]||(e[31]=l=>_({hsla:o(c)}))},null,8,["value","step"]),h(d,{value:o(c).l,"onUpdate:value":e[32]||(e[32]=l=>o(c).l=l),placeholder:"L",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[33]||(e[33]=l=>_({hsla:o(c)}))},null,8,["value","step"]),h(d,{value:o(c).a,"onUpdate:value":e[34]||(e[34]=l=>o(c).a=l),placeholder:"A",max:1,min:0,step:.01,precision:2,onChange:e[35]||(e[35]=l=>_({hsla:o(c)}))},null,8,["value","step"])])]),_:1})]),_:1})]),g("div",Pe,[h(m,{level:4},{default:C(()=>[H(" \u989C\u8272\u9009\u62E9 ")]),_:1}),h(J,{direction:"vertical","w-full":"",gap:8},{default:C(()=>[g("div",je,[h(b,{value:o(v),onChange:w},null,8,["value"])]),g("div",Ye,[h(G,{value:o(v),onChange:w},null,8,["value"])]),g("div",Ve,[h(K,{value:o(v),onChange:w},null,8,["value"])])]),_:1})]),g("div",We,[h(m,{level:4},{default:C(()=>[H(" \u989C\u8272\u9884\u89C8 ")]),_:1}),g("div",{"w-full":"","h-sm":"",style:S({background:o(U)})},null,4)])])}}},_n=L(Ge,[["__scopeId","data-v-9e1cd095"]]);export{_n as default};