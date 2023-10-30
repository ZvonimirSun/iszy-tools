import{_ as M,h as N,o as E,l as L,a1 as k,m as g,a as p,I as B,J as R,y as A,k as Q,R as q,w as C,n as t,b as D,z as O,B as z}from"./index.js";import{E as Z}from"./el-space-8178ace4.js";import{t as ee}from"./throttle-e17a2ce0.js";import{c as I}from"./clamp-654ce5f7.js";import{E as oe,a as ne}from"./el-form-item-f46ae9a8.js";import{E as te}from"./el-input-number-d89f774b.js";import"./index-8a2c406b.js";import{t as V}from"./tinycolor-ea5bcbb6.js";import{_ as le}from"./Title-a43cccee.js";import"./vite-8235fac6.js";import"./castArray-88ad293b.js";import"./index-d81d9065.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-16073b58.js";const H={},se=N({name:"TextureCheckerboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${ae(this.white,this.grey,this.size)})`}}}});function re(n,s,u){if(typeof document>"u")return null;const a=document.createElement("canvas");a.width=a.height=u*2;const r=a.getContext("2d");return r?(r.fillStyle=n,r.fillRect(0,0,a.width,a.height),r.fillStyle=s,r.fillRect(0,0,u,u),r.translate(u,u),r.fillRect(0,0,u,u),a.toDataURL()):null}function ae(n,s,u){const a=`${n},${s},${u}`;if(H[a])return H[a];const r=re(n,s,u);return H[a]=r,r}function ie(n,s,u,a,r,c){return E(),L("div",{class:"checkerboard",style:k(n.bgStyle)},null,4)}const j=M(se,[["render",ie],["__scopeId","data-v-c05fb4fd"]]);const ue=N({name:"AlphaPicker",components:{Checkerboard:j},props:{value:{type:Object,default:void 0}},emits:["change"],data:()=>({checkerboardBackground:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADBJREFUOE9jfPbs2X8GPEBSUhKfNAPjqAHDIgz+//+PNx08f/4cfzoYNYCBceiHAQC5flV5JzgrxQAAAABJRU5ErkJggg=="}),computed:{colors(){return this.value},gradientColor(){const{rgba:n}=this.colors,s=[n.r,n.g,n.b].join(",");return`linear-gradient(to right, rgba(${s}, 0) 0%, rgba(${s}, 1) 100%)`}},methods:{handleChange(n,s){!s&&n.preventDefault();const{container:u}=this.$refs;if(!u)return;const a=u.clientWidth,r=u.getBoundingClientRect().left+window.pageXOffset,i=(n.pageX||(n.touches?n.touches[0].pageX:0))-r;let m;i<0?m=0:i>a?m=1:m=Math.round(i*100/a)/100,this.colors.a!==m&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:m,source:"rgba"})},handleMouseDown(n){this.handleChange(n,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}),de=n=>(B("data-v-6a023433"),n=n(),R(),n),he={class:"alphaContainer"},pe={class:"alphaCheckerboardWrap"},me=de(()=>g("div",{class:"alphaPicker"},null,-1)),fe=[me];function ce(n,s,u,a,r,c){const i=j;return E(),L("div",he,[g("div",pe,[p(i)]),g("div",{class:"alphaGradient",style:k({background:n.gradientColor})},null,4),g("div",{ref:"container",class:"alpha",onMousedown:s[0]||(s[0]=(...m)=>n.handleMouseDown&&n.handleMouseDown(...m)),onTouchmove:s[1]||(s[1]=(...m)=>n.handleChange&&n.handleChange(...m)),onTouchstart:s[2]||(s[2]=(...m)=>n.handleChange&&n.handleChange(...m))},[g("div",{class:"alphaPointer",style:k({left:n.colors.a*100+"%"})},fe,4)],544)])}const ge=M(ue,[["render",ce],["__scopeId","data-v-6a023433"]]);const ve=N({name:"HuePicker",props:{value:{type:Object,default:void 0}},emits:["change"],data(){return{oldHue:0,pullDirection:""}},computed:{colors(){return this.value},pointerLeft(){return this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":`${this.colors.hsl.h*100/360}%`}},watch:{colors:function(n){const{h:s}=n.hsl;s!==0&&s-this.oldHue>0&&(this.pullDirection="right"),s!==0&&s-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=s}},methods:{handleChange(n,s){!s&&n.preventDefault();const{container:u}=this.$refs;if(!u)return;const a=u.clientWidth,r=u.getBoundingClientRect().left+window.pageXOffset,i=(n.pageX||(n.touches?n.touches[0].pageX:0))-r;let m,S;i<0?m=0:i>a?m=360:(S=i*100/a,m=360*S/100),this.colors.hsl.h!==m&&this.$emit("change",{h:m,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})},handleMouseDown(n){this.handleChange(n,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}),_e=n=>(B("data-v-b9e25c31"),n=n(),R(),n),be={class:"hueContainer"},$e=["aria-valuenow"],we=_e(()=>g("div",{class:"huePicker"},null,-1)),Ce=[we];function ye(n,s,u,a,r,c){return E(),L("div",be,[g("div",{ref:"container",class:"hue","aria-valuemin":"0","aria-valuemax":"360","aria-valuenow":n.colors.hsl.h,onMousedown:s[0]||(s[0]=(...i)=>n.handleMouseDown&&n.handleMouseDown(...i)),onTouchmove:s[1]||(s[1]=(...i)=>n.handleChange&&n.handleChange(...i)),onTouchstart:s[2]||(s[2]=(...i)=>n.handleChange&&n.handleChange(...i))},[g("div",{class:"huePointer",style:k({top:0,left:n.pointerLeft}),role:"presentation"},Ce,4)],40,$e)])}const xe=M(ve,[["render",ye],["__scopeId","data-v-b9e25c31"]]);const Ve=N({name:"SaturationPicker",props:{value:{type:Object,default:void 0}},emits:["change"],computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return`${-(this.colors.hsv.v*100)+1+100}%`},pointerLeft(){return`${this.colors.hsv.s*100}%`}},methods:{throttle:ee((n,s)=>{n(s)},20,{leading:!0,trailing:!1}),handleChange(n,s){!s&&n.preventDefault();const{container:u}=this.$refs;if(!u)return;const a=u.clientWidth,r=u.clientHeight,c=u.getBoundingClientRect().left+window.pageXOffset,i=u.getBoundingClientRect().top+window.pageYOffset,m=n.pageX||(n.touches?n.touches[0].pageX:0),S=n.pageY||(n.touches?n.touches[0].pageY:0),_=I(m-c,0,a),w=I(S-i,0,r),y=_/a,x=I(-(w/r)+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:y,v:x,a:this.colors.hsv.a,source:"hsva"})},onChange(n){this.$emit("change",n)},handleMouseDown(){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}),X=n=>(B("data-v-8ceba5b7"),n=n(),R(),n),Ae={class:"saturationContainer"},ke=X(()=>g("div",{class:"saturationWhite"},null,-1)),Se=X(()=>g("div",{class:"saturationBlack"},null,-1)),Ue=X(()=>g("div",{class:"saturationCircle"},null,-1)),Me=[Ue];function Ee(n,s,u,a,r,c){return E(),L("div",Ae,[g("div",{ref:"container",class:"saturation",style:k({background:n.bgColor}),onMousedown:s[0]||(s[0]=(...i)=>n.handleMouseDown&&n.handleMouseDown(...i)),onTouchmove:s[1]||(s[1]=(...i)=>n.handleChange&&n.handleChange(...i)),onTouchstart:s[2]||(s[2]=(...i)=>n.handleChange&&n.handleChange(...i))},[ke,Se,g("div",{class:"saturationPointer",style:k({top:n.pointerTop,left:n.pointerLeft})},Me,4)],36)])}const Le=M(Ve,[["render",Ee],["__scopeId","data-v-8ceba5b7"]]);const Ne={"max-w-full":"","h-full":"","overflow-auto":"",flex:"","flex-row":"","flex-wrap":"","justify-around":"","mx-auto":"","my-0":"",class:"p-3.2 gap-3.2"},De={flex:"","flex-1":"","flex-col":"","h-fit":"","w-xl":"","max-w-full":""},Ie={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},He={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Be={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Re={flex:"","w-full":"","justify-between":"","overflow-auto":"",class:"gap-3.2"},Xe={"w-xl":"","h-fit":"","max-w-full":""},Fe={"w-full":"","h-sm":"","b-2":"","b-solid":""},Pe={"w-full":"","h-4":""},Te={"w-full":"","h-4":""},Oe={flex:"","flex-col":"","h-fit":"","w-xl":"","max-w-full":""},je={__name:"colorTransform",setup(n){const s=A("#16b0f6"),u=A(""),a=A({r:void 0,g:void 0,b:void 0,a:void 0}),r=A({c:void 0,m:void 0,y:void 0,k:void 0}),c=A({h:void 0,s:void 0,l:void 0,a:void 0}),i=A({h:void 0,s:void 0,v:void 0,a:void 0}),m=A(T("16b0f6")),S=Q(()=>{const{rgba:o}=m.value;return`rgba(${[o.r,o.g,o.b,o.a].join(",")})`});q(()=>{_({cssString:s.value})});function _(o){if(o)if(o.hex)U(o.hex)&&w({hex:o.hex,from:"hex"});else if(o.rgba)U(o.rgba)&&w({r:o.rgba.r||m.value.rgba.r,g:o.rgba.g||m.value.rgba.g,b:o.rgba.b||m.value.rgba.b,a:o.rgba.a||m.value.rgba.a,from:"rgba"});else if(o.hsla){const e=`hsla(${o.hsla.h},${(o.hsla.s*100).toFixed(0)}%,${(o.hsla.l*100).toFixed(0)}%,${o.hsla.a}`;U(e)&&w({hsl:e,from:"hsla"})}else if(o.hsva){const e=`hsva(${o.hsva.h},${(o.hsva.s*100).toFixed(0)}%,${(o.hsva.v*100).toFixed(0)}%,${o.hsva.a}`;U(e)&&w({hsv:e,from:"hsva"})}else o.cssString?U(o.cssString)&&w({cssString:o.cssString,from:"cssString"}):o.cmyk&&w({cmyk:o.cmyk,from:"cmyk"})}function w(o){if(o.from==="cmyk"){const b=W(r.value.c,r.value.m,r.value.y,r.value.k);if(b)o.rgba=`rgb(${b[0]},${b[1]},${b[2]})`;else return}const{rgba:e,hex:v,hex8:d,a:f,hsl:h,hsv:$}=m.value=T(o,m.value.hsl.h);if(o.from!=="rgba"&&(a.value.r=e.r,a.value.g=e.g,a.value.b=e.b,a.value.a=e.a),o.from!=="hsla"&&(c.value.h=h.h,c.value.s=h.s,c.value.l=h.l,c.value.a=f),o.from!=="hsva"&&(i.value.h=$.h,i.value.s=$.s,i.value.v=$.v,i.value.a=f),o.from!=="cmyk"){const b=Y(e.r,e.g,e.b);b&&(r.value.c=b[0],r.value.m=b[1],r.value.y=b[2],r.value.k=b[3])}f===1?u.value=v.replace("#",""):u.value=d.replace("#",""),o.from!=="cssString"&&(f===1?s.value="#"+u.value.toLowerCase():s.value=`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`)}function y(o){return`${(o*100).toFixed(0)}%`}function x(o){return parseFloat((parseInt(o.replace("%",""))/100).toFixed(2))}function F(o){return`${parseFloat(parseFloat(o).toFixed(2))}°`}function P(o){return parseFloat(o.replace("°",""))}function U(o){return V(o).isValid()}function T(o,e){const v=o&&o.a;let d;o&&o.hsl?d=V(o.hsl):o&&o.hex&&o.hex.length>0?d=V(o.hex):o&&o.hsv?d=V(o.hsv):o&&o.rgba?d=V(o.rgba):o&&o.rgb?d=V(o.rgb):o&&o.cssString?d=V(o.cssString):d=V(o),d&&(d._a===void 0||d._a===null)&&d.setAlpha(v||1);const f=d.toHsl(),h=d.toHsv();return f.s===0&&(h.h=f.h=o.h||o.hsl&&o.hsl.h||e||0),{hsl:f,hex:d.toHexString(),hex8:d.toHex8String(),rgba:d.toRgb(),hsv:h,oldHue:o.h||e||f.h,from:o.from,a:o.a||d.getAlpha()}}function Y(o,e,v){let d=0,f=0,h=0,$=0;if(o=parseInt((""+o).replace(/\s/g,""),10),e=parseInt((""+e).replace(/\s/g,""),10),v=parseInt((""+v).replace(/\s/g,""),10),o==null||e==null||v==null||isNaN(o)||isNaN(e)||isNaN(v)||o<0||e<0||v<0||o>255||e>255||v>255)return;if(o===0&&e===0&&v===0)return[0,0,0,1];d=1-o/255,f=1-e/255,h=1-v/255;const b=Math.min(d,Math.min(f,h));return d=(d-b)/(1-b),f=(f-b)/(1-b),h=(h-b)/(1-b),$=b,[d,f,h,$]}function W(o,e,v,d){if(o==null||e==null||v==null||d==null||isNaN(o)||isNaN(e)||isNaN(v)||isNaN(d)||o<0||e<0||v<0||d<0||o>1||e>1||v>1||d>1)return;let f,h,$;return f=255*(1-o)*(1-d),h=255*(1-e)*(1-d),$=255*(1-v)*(1-d),f=Math.round(f),h=Math.round(h),$=Math.round($),[f,h,$]}return(o,e)=>{const v=le,d=z,f=ne,h=te,$=oe,b=Le,G=xe,J=ge,K=Z;return E(),L("div",Ne,[g("div",De,[p(v,{level:4},{default:C(()=>[D(" 颜色 ")]),_:1}),p($,{"label-width":100},{default:C(()=>[p(f,{label:"CSS 字符串"},{default:C(()=>[p(d,{modelValue:t(s),"onUpdate:modelValue":e[0]||(e[0]=l=>O(s)?s.value=l:null),onChange:e[1]||(e[1]=l=>_({cssString:t(s)}))},null,8,["modelValue"])]),_:1}),p(f,{label:"HEX",class:"hex"},{default:C(()=>[p(d,{modelValue:t(u),"onUpdate:modelValue":e[2]||(e[2]=l=>O(u)?u.value=l:null),onChange:e[3]||(e[3]=l=>_({hex:t(u)}))},null,8,["modelValue"])]),_:1}),p(f,{label:"RGBA",class:"rgba"},{default:C(()=>[g("div",Ie,[p(h,{modelValue:t(a).r,"onUpdate:modelValue":e[4]||(e[4]=l=>t(a).r=l),"controls-position":"right",placeholder:"R",max:255,min:0,step:1,precision:0,onChange:e[5]||(e[5]=l=>_({rgba:t(a)}))},null,8,["modelValue"]),p(h,{modelValue:t(a).g,"onUpdate:modelValue":e[6]||(e[6]=l=>t(a).g=l),"controls-position":"right",placeholder:"G",max:255,min:0,step:1,precision:0,onChange:e[7]||(e[7]=l=>_({rgba:t(a)}))},null,8,["modelValue"]),p(h,{modelValue:t(a).b,"onUpdate:modelValue":e[8]||(e[8]=l=>t(a).b=l),"controls-position":"right",placeholder:"B",max:255,min:0,step:1,precision:0,onChange:e[9]||(e[9]=l=>_({rgba:t(a)}))},null,8,["modelValue"]),p(h,{modelValue:t(a).a,"onUpdate:modelValue":e[10]||(e[10]=l=>t(a).a=l),"controls-position":"right",placeholder:"A",max:1,min:0,step:.01,precision:2,onChange:e[11]||(e[11]=l=>_({rgba:t(a)}))},null,8,["modelValue"])])]),_:1}),p(f,{label:"CMYK",class:"cmyk"},{default:C(()=>[g("div",He,[p(h,{modelValue:t(r).c,"onUpdate:modelValue":e[12]||(e[12]=l=>t(r).c=l),"controls-position":"right",placeholder:"C",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[13]||(e[13]=l=>_({cmyk:t(r)}))},null,8,["modelValue"]),p(h,{modelValue:t(r).m,"onUpdate:modelValue":e[14]||(e[14]=l=>t(r).m=l),"controls-position":"right",placeholder:"M",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[15]||(e[15]=l=>_({cmyk:t(r)}))},null,8,["modelValue"]),p(h,{modelValue:t(r).y,"onUpdate:modelValue":e[16]||(e[16]=l=>t(r).y=l),"controls-position":"right",placeholder:"Y",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[17]||(e[17]=l=>_({cmyk:t(r)}))},null,8,["modelValue"]),p(h,{modelValue:t(r).k,"onUpdate:modelValue":e[18]||(e[18]=l=>t(r).k=l),"controls-position":"right",placeholder:"K",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[19]||(e[19]=l=>_({cmyk:t(r)}))},null,8,["modelValue"])])]),_:1}),p(f,{label:"HSVA",class:"hsva"},{default:C(()=>[g("div",Be,[p(h,{modelValue:t(i).h,"onUpdate:modelValue":e[20]||(e[20]=l=>t(i).h=l),"controls-position":"right",placeholder:"H",max:360,min:0,step:.01,formatter:F,parser:P,precision:2,onChange:e[21]||(e[21]=l=>_({hsva:t(i)}))},null,8,["modelValue"]),p(h,{modelValue:t(i).s,"onUpdate:modelValue":e[22]||(e[22]=l=>t(i).s=l),"controls-position":"right",placeholder:"S",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[23]||(e[23]=l=>_({hsva:t(i)}))},null,8,["modelValue"]),p(h,{modelValue:t(i).v,"onUpdate:modelValue":e[24]||(e[24]=l=>t(i).v=l),"controls-position":"right",placeholder:"V",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[25]||(e[25]=l=>_({hsva:t(i)}))},null,8,["modelValue"]),p(h,{modelValue:t(i).a,"onUpdate:modelValue":e[26]||(e[26]=l=>t(i).a=l),"controls-position":"right",placeholder:"A",max:1,min:0,step:.01,precision:2,onChange:e[27]||(e[27]=l=>_({hsva:t(i)}))},null,8,["modelValue"])])]),_:1}),p(f,{label:"HSLA",class:"hsla"},{default:C(()=>[g("div",Re,[p(h,{modelValue:t(c).h,"onUpdate:modelValue":e[28]||(e[28]=l=>t(c).h=l),"controls-position":"right",placeholder:"H",max:360,min:0,step:.01,formatter:F,parser:P,precision:2,onChange:e[29]||(e[29]=l=>_({hsla:t(c)}))},null,8,["modelValue"]),p(h,{modelValue:t(c).s,"onUpdate:modelValue":e[30]||(e[30]=l=>t(c).s=l),"controls-position":"right",placeholder:"S",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[31]||(e[31]=l=>_({hsla:t(c)}))},null,8,["modelValue"]),p(h,{modelValue:t(c).l,"onUpdate:modelValue":e[32]||(e[32]=l=>t(c).l=l),"controls-position":"right",placeholder:"L",max:1,min:0,step:.01,formatter:y,parser:x,precision:2,onChange:e[33]||(e[33]=l=>_({hsla:t(c)}))},null,8,["modelValue"]),p(h,{modelValue:t(c).a,"onUpdate:modelValue":e[34]||(e[34]=l=>t(c).a=l),"controls-position":"right",placeholder:"A",max:1,min:0,step:.01,precision:2,onChange:e[35]||(e[35]=l=>_({hsla:t(c)}))},null,8,["modelValue"])])]),_:1})]),_:1})]),g("div",Xe,[p(v,{level:4},{default:C(()=>[D(" 颜色选择 ")]),_:1}),p(K,{direction:"vertical","w-full":"",fill:!0,gap:8},{default:C(()=>[g("div",Fe,[p(b,{value:t(m),onChange:w},null,8,["value"])]),g("div",Pe,[p(G,{value:t(m),onChange:w},null,8,["value"])]),g("div",Te,[p(J,{value:t(m),onChange:w},null,8,["value"])])]),_:1})]),g("div",Oe,[p(v,{level:4},{default:C(()=>[D(" 颜色预览 ")]),_:1}),g("div",{"w-full":"","h-sm":"",style:k({background:t(S)})},null,4)])])}}},so=M(je,[["__scopeId","data-v-8d48b667"]]);export{so as default};
