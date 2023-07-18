import{o as g,l as v,a1 as E,aJ as S,m as l,a as p,T as le,bZ as ce,t as N,C as re,W as A,p as ae,s as F,H as ee,I as se,_ as he,y as X,k as O,n as y,z as P,w as K,A as te,E as de,b as J}from"./index-db2747c4.js";import{E as ue}from"./el-input-number-65fa7dec.js";import"./index-ad2d7073.js";import{t as H}from"./tinycolor-6fcb9152.js";import{s as L,i as D,c as pe}from"./color-fd78a7fa.js";import{_ as fe}from"./Paragraph-2fda950f.js";import"./index-2c5613d7.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-18f862a9.js";const Z={};var I={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${ve(this.white,this.grey,this.size)})`}}}};function ge(e,t,n){if(typeof document>"u")return null;const r=document.createElement("canvas");r.width=r.height=n*2;const a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=t,a.fillRect(0,0,n,n),a.translate(n,n),a.fillRect(0,0,n,n),r.toDataURL()):null}function ve(e,t,n){const r=`${e},${t},${n}`;if(Z[r])return Z[r];const a=ge(e,t,n);return Z[r]=a,a}function be(e,t,n,r,a,o){return g(),v("div",{class:"vc-checkerboard",style:E(o.bgStyle)},null,4)}var me=".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";L(me);I.render=be;I.__file="src/components/checkboard/checkboard.vue";I.install=D;var V={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:I},computed:{colors(){return this.value},gradientColor(){const{rgba:e}=this.colors,t=[e.r,e.g,e.b].join(",");return`linear-gradient(to right, rgba(${t}, 0) 0%, rgba(${t}, 1) 100%)`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const r=n.clientWidth,a=n.getBoundingClientRect().left+window.pageXOffset,s=(e.pageX||(e.touches?e.touches[0].pageX:0))-a;let i;s<0?i=0:s>r?i=1:i=Math.round(s*100/r)/100,this.colors.a!==i&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:i,source:"rgba"})},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const xe={class:"vc-alpha"},_e={class:"vc-alpha-checkboard-wrap"},Ce=l("div",{class:"vc-alpha-picker"},null,-1),ke=[Ce];function we(e,t,n,r,a,o){const s=S("checkboard");return g(),v("div",xe,[l("div",_e,[p(s)]),l("div",{class:"vc-alpha-gradient",style:E({background:o.gradientColor})},null,4),l("div",{class:"vc-alpha-container",ref:"container",onMousedown:t[0]||(t[0]=(...i)=>o.handleMouseDown&&o.handleMouseDown(...i)),onTouchmove:t[1]||(t[1]=(...i)=>o.handleChange&&o.handleChange(...i)),onTouchstart:t[2]||(t[2]=(...i)=>o.handleChange&&o.handleChange(...i))},[l("div",{class:"vc-alpha-pointer",style:E({left:o.colors.a*100+"%"})},ke,4)],544)])}var ye=".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";L(ye);V.render=we;V.__file="src/components/alpha/alpha.vue";V.install=D;var W={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(e){if(this.max!==void 0&&+e>this.max)this.$refs.input.value=this.max;else return e}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(e){this.handleChange(e.target.value)},handleChange(e){const t={};t[this.label]=e,t.hex===void 0&&t["#"]===void 0?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown(e){let{val:t}=this;const n=Number(t);if(n){const r=this.arrowOffset||1;e.keyCode===38&&(t=n+r,this.handleChange(t),e.preventDefault()),e.keyCode===40&&(t=n-r,this.handleChange(t),e.preventDefault())}}}};const Ee={class:"vc-editable-input"},$e=["aria-labelledby"],Te=["for","id"],Me={class:"vc-input__desc"};function Se(e,t,n,r,a,o){return g(),v("div",Ee,[le(l("input",{"aria-labelledby":o.labelId,class:"vc-input__input","onUpdate:modelValue":t[0]||(t[0]=s=>o.val=s),onKeydown:t[1]||(t[1]=(...s)=>o.handleKeyDown&&o.handleKeyDown(...s)),onInput:t[2]||(t[2]=(...s)=>o.update&&o.update(...s)),ref:"input"},null,40,$e),[[ce,o.val]]),l("span",{for:n.label,class:"vc-input__label",id:o.labelId},N(o.labelSpanText),9,Te),l("span",Me,N(n.desc),1)])}var Le=".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}";L(Le);W.render=Se;W.__file="src/components/editable-input/editable-input.vue";W.install=D;var De=je;function je(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}const q=re(De);var ie="Expected a function",ne=0/0,Oe="[object Symbol]",Be=/^\s+|\s+$/g,Ie=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,ze=/^0o[0-7]+$/i,Ae=parseInt,Fe=typeof A=="object"&&A&&A.Object===Object&&A,Xe=typeof self=="object"&&self&&self.Object===Object&&self,He=Fe||Xe||Function("return this")(),Ne=Object.prototype,Ue=Ne.toString,Ve=Math.max,We=Math.min,Q=function(){return He.Date.now()};function Ye(e,t,n){var r,a,o,s,i,b,u=0,f=!1,c=!1,x=!0;if(typeof e!="function")throw new TypeError(ie);t=oe(t)||0,U(n)&&(f=!!n.leading,c="maxWait"in n,o=c?Ve(oe(n.maxWait)||0,t):o,x="trailing"in n?!!n.trailing:x);function d(h){var w=r,T=a;return r=a=void 0,u=h,s=e.apply(T,w),s}function _(h){return u=h,i=setTimeout(k,t),f?d(h):s}function $(h){var w=h-b,T=h-u,z=t-w;return c?We(z,o-T):z}function C(h){var w=h-b,T=h-u;return b===void 0||w>=t||w<0||c&&T>=o}function k(){var h=Q();if(C(h))return m(h);i=setTimeout(k,$(h))}function m(h){return i=void 0,x&&r?d(h):(r=a=void 0,s)}function j(){i!==void 0&&clearTimeout(i),u=0,r=b=a=i=void 0}function R(){return i===void 0?s:m(Q())}function M(){var h=Q(),w=C(h);if(r=arguments,a=this,b=h,w){if(i===void 0)return _(b);if(c)return i=setTimeout(k,t),d(b)}return i===void 0&&(i=setTimeout(k,t)),s}return M.cancel=j,M.flush=R,M}function Ge(e,t,n){var r=!0,a=!0;if(typeof e!="function")throw new TypeError(ie);return U(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Ye(e,t,{leading:r,maxWait:t,trailing:a})}function U(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Pe(e){return!!e&&typeof e=="object"}function Ke(e){return typeof e=="symbol"||Pe(e)&&Ue.call(e)==Oe}function oe(e){if(typeof e=="number")return e;if(Ke(e))return ne;if(U(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=U(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Be,"");var n=Re.test(e);return n||ze.test(e)?Ae(e.slice(2),n?2:8):Ie.test(e)?ne:+e}var Je=Ge;const Ze=re(Je);var Y={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return`${-(this.colors.hsv.v*100)+1+100}%`},pointerLeft(){return`${this.colors.hsv.s*100}%`}},methods:{throttle:Ze((e,t)=>{e(t)},20,{leading:!0,trailing:!1}),handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const r=n.clientWidth,a=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,i=e.pageX||(e.touches?e.touches[0].pageX:0),b=e.pageY||(e.touches?e.touches[0].pageY:0),u=q(i-o,0,r),f=q(b-s,0,a),c=u/r,x=q(-(f/a)+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:c,v:x,a:this.colors.hsv.a,source:"hsva"})},onChange(e){this.$emit("change",e)},handleMouseDown(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const qe=l("div",{class:"vc-saturation--white"},null,-1),Qe=l("div",{class:"vc-saturation--black"},null,-1),et=l("div",{class:"vc-saturation-circle"},null,-1),tt=[et];function nt(e,t,n,r,a,o){return g(),v("div",{class:"vc-saturation",style:E({background:o.bgColor}),ref:"container",onMousedown:t[0]||(t[0]=(...s)=>o.handleMouseDown&&o.handleMouseDown(...s)),onTouchmove:t[1]||(t[1]=(...s)=>o.handleChange&&o.handleChange(...s)),onTouchstart:t[2]||(t[2]=(...s)=>o.handleChange&&o.handleChange(...s))},[qe,Qe,l("div",{class:"vc-saturation-pointer",style:E({top:o.pointerTop,left:o.pointerLeft})},tt,4)],36)}var ot=".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,rgba(255,255,255,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}";L(ot);Y.render=nt;Y.__file="src/components/saturation/saturation.vue";Y.install=D;var G={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data(){return{oldHue:0,pullDirection:""}},computed:{colors(){const{h:e}=this.value.hsl;return e!==0&&e-this.oldHue>0&&(this.pullDirection="right"),e!==0&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:`${-(this.colors.hsl.h*100/360)+100}%`:0},pointerLeft(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":`${this.colors.hsl.h*100/360}%`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const r=n.clientWidth,a=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,i=e.pageX||(e.touches?e.touches[0].pageX:0),b=e.pageY||(e.touches?e.touches[0].pageY:0),u=i-o,f=b-s;let c,x;this.direction==="vertical"?(f<0?c=360:f>a?c=0:(x=-(f*100/a)+100,c=360*x/100),this.colors.hsl.h!==c&&this.$emit("change",{h:c,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(u<0?c=0:u>r?c=360:(x=u*100/r,c=360*x/100),this.colors.hsl.h!==c&&this.$emit("change",{h:c,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const rt=["aria-valuenow"],at=l("div",{class:"vc-hue-picker"},null,-1),st=[at];function it(e,t,n,r,a,o){return g(),v("div",{class:ae(["vc-hue",o.directionClass])},[l("div",{class:"vc-hue-container",role:"slider","aria-valuenow":o.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360",ref:"container",onMousedown:t[0]||(t[0]=(...s)=>o.handleMouseDown&&o.handleMouseDown(...s)),onTouchmove:t[1]||(t[1]=(...s)=>o.handleChange&&o.handleChange(...s)),onTouchstart:t[2]||(t[2]=(...s)=>o.handleChange&&o.handleChange(...s))},[l("div",{class:"vc-hue-pointer",style:E({top:o.pointerTop,left:o.pointerLeft}),role:"presentation"},st,4)],40,rt)],2)}var lt=".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";L(lt);G.render=it;G.__file="src/components/hue/hue.vue";G.install=D;const ct=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];var B={name:"Sketch",mixins:[pe],components:{saturation:Y,hue:G,alpha:V,"ed-in":W,checkboard:I},props:{presetColors:{type:Array,default(){return ct}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex(){let e;return this.colors.a<1?e=this.colors.hex8:e=this.colors.hex,e.replace("#","")},activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`}},methods:{handlePreset(e){this.colorChange({hex:e,source:"hex"})},childChange(e){this.colorChange(e)},inputChange(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}};const ht={class:"vc-sketch-saturation-wrap"},dt={class:"vc-sketch-controls"},ut={class:"vc-sketch-sliders"},pt={class:"vc-sketch-hue-wrap"},ft={key:0,class:"vc-sketch-alpha-wrap"},gt={class:"vc-sketch-color-wrap"},vt=["aria-label"],bt={key:0,class:"vc-sketch-field"},mt={class:"vc-sketch-field--double"},xt={class:"vc-sketch-field--single"},_t={class:"vc-sketch-field--single"},Ct={class:"vc-sketch-field--single"},kt={key:0,class:"vc-sketch-field--single"},wt={class:"vc-sketch-presets",role:"group","aria-label":"A color preset, pick one to set as current color"},yt=["aria-label","onClick"],Et=["aria-label","onClick"];function $t(e,t,n,r,a,o){const s=S("saturation"),i=S("hue"),b=S("alpha"),u=S("checkboard"),f=S("ed-in");return g(),v("div",{role:"application","aria-label":"Sketch color picker",class:ae(["vc-sketch",n.disableAlpha?"vc-sketch__disable-alpha":""])},[l("div",ht,[p(s,{value:e.colors,onChange:o.childChange},null,8,["value","onChange"])]),l("div",dt,[l("div",ut,[l("div",pt,[p(i,{value:e.colors,onChange:o.childChange},null,8,["value","onChange"])]),n.disableAlpha?F("v-if",!0):(g(),v("div",ft,[p(b,{value:e.colors,onChange:o.childChange},null,8,["value","onChange"])]))]),l("div",gt,[l("div",{"aria-label":`Current color is ${o.activeColor}`,class:"vc-sketch-active-color",style:E({background:o.activeColor})},null,12,vt),p(u)])]),n.disableFields?F("v-if",!0):(g(),v("div",bt,[F(" rgba "),l("div",mt,[p(f,{label:"hex",value:o.hex,onChange:o.inputChange},null,8,["value","onChange"])]),l("div",xt,[p(f,{label:"r",value:e.colors.rgba.r,onChange:o.inputChange},null,8,["value","onChange"])]),l("div",_t,[p(f,{label:"g",value:e.colors.rgba.g,onChange:o.inputChange},null,8,["value","onChange"])]),l("div",Ct,[p(f,{label:"b",value:e.colors.rgba.b,onChange:o.inputChange},null,8,["value","onChange"])]),n.disableAlpha?F("v-if",!0):(g(),v("div",kt,[p(f,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:o.inputChange},null,8,["value","arrow-offset","onChange"])]))])),l("div",wt,[(g(!0),v(ee,null,se(n.presetColors,c=>(g(),v(ee,null,[e.isTransparent(c)?(g(),v("div",{key:c,"aria-label":"Color:"+c,class:"vc-sketch-presets-color",onClick:x=>o.handlePreset(c)},[p(u)],8,Et)):(g(),v("div",{key:`!${c}`,class:"vc-sketch-presets-color","aria-label":"Color:"+c,style:E({background:c}),onClick:x=>o.handlePreset(c)},null,12,yt))],64))),256))])],2)}var Tt=".vc-sketch{background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;padding:10px 10px 0;position:relative;width:200px}.vc-sketch-saturation-wrap{overflow:hidden;padding-bottom:75%;position:relative;width:100%}.vc-sketch-controls{display:flex}.vc-sketch-sliders{flex:1;padding:4px 0}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-alpha-wrap,.vc-sketch-hue-wrap{height:10px;position:relative}.vc-sketch-alpha-wrap{margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{border-radius:3px;height:24px;margin-left:4px;margin-top:4px;position:relative;width:24px}.vc-sketch-active-color{border-radius:2px;bottom:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);left:0;position:absolute;right:0;top:0;z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px;padding:4px 0 3px 10%;width:90%}.vc-sketch-field .vc-input__label{color:#222;display:block;font-size:11px;padding-bottom:4px;padding-top:3px;text-align:center;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{border-top:1px solid #eee;margin-left:-10px;margin-right:-10px;padding-left:10px;padding-top:10px}.vc-sketch-presets-color{cursor:pointer;display:inline-block;height:16px;margin:0 10px 10px 0;overflow:hidden;position:relative;vertical-align:top;width:16px}.vc-sketch-presets-color,.vc-sketch-presets-color .vc-checkerboard{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}";L(Tt);B.render=$t;B.__file="src/components/sketch/sketch.vue";B.install=D;const Mt={flex:"","flex-col":"","w-fit":"","mx-auto":"","justify-start":"","items-center":"","h-full":"","overflow-auto":"","p-t-1":"",class:"gap-3.2"},St={flex:"","w-fit":"","flex-wrap":"","max-w-full":"","mx-auto":"","justify-start":"","items-center":"",class:"gap-3.2 selector"},Lt={flex:"","flex-col":"","items-center":"","mx-auto":""},Dt={flex:"","flex-row":"","w-fit":"","mx-auto":"","justify-start":"","flex-wrap":"","items-stretch":"",class:"gap-3.2"},jt=["onClick"],Ot={relative:""},Bt={__name:"gradientColor",setup(e){const t=X("#ff0000"),n=X("#00ffff"),r=X(10),a=X(!1),o=O({get(){return t.value},set(d){d&&d.hex&&(t.value=d.hex)}}),s=O({get(){return n.value},set(d){d&&d.hex&&(n.value=d.hex)}}),i=O(()=>f(t.value,n.value,r.value)),b=O(()=>i.value.map(d=>H(d).toRgbString())),u=O(()=>a.value?b.value:i.value);function f(d,_,$){const C=H(d).toRgb(),k=H(_).toRgb(),m=(k.r-C.r)/$,j=(k.g-C.g)/$,R=(k.b-C.b)/$,M=[];for(let h=0;h<$;h++){const w=Math.round(C.r+m*h),T=Math.round(C.g+j*h),z=Math.round(C.b+R*h);M.push(H({r:w,g:T,b:z}).toHexString())}return M}function c(d){window.navigator.clipboard.writeText(d),te.success("复制成功")}function x(){const d=u.value.join(",");window.navigator.clipboard.writeText(d),te.success("复制成功")}return(d,_)=>{const $=fe,C=ue,k=de;return g(),v("div",Mt,[l("div",St,[p(y(B),{modelValue:y(o),"onUpdate:modelValue":_[0]||(_[0]=m=>P(o)?o.value=m:null),"disable-alpha":!0,"mx-auto":""},null,8,["modelValue"]),l("div",Lt,[p($,null,{default:K(()=>[J(" 渐变个数 ")]),_:1}),p(C,{modelValue:y(r),"onUpdate:modelValue":_[1]||(_[1]=m=>P(r)?r.value=m:null),modelModifiers:{number:!0},step:1,precision:0},null,8,["modelValue"])]),p(y(B),{modelValue:y(s),"onUpdate:modelValue":_[2]||(_[2]=m=>P(s)?s.value=m:null),"mx-auto":"","disable-alpha":!0},null,8,["modelValue"])]),l("div",Dt,[(g(!0),v(ee,null,se(y(u),(m,j)=>(g(),v("div",{key:j,"display-block":"","cursor-pointer":"",truncate:"","h-fit":"","text-center":"",class:"p-3.2",style:E({background:m,width:y(a)?"15rem":"9rem"}),onClick:R=>c(m)},N(m),13,jt))),128)),l("div",Ot,[p(k,{"h-full":"",onClick:_[3]||(_[3]=m=>a.value=!y(a))},{default:K(()=>[J(N(y(a)?"显示HEX":"显示RGB"),1)]),_:1})])]),p(k,{type:"primary",onClick:x},{default:K(()=>[J(" 复制所有 ")]),_:1})])}}},Vt=he(Bt,[["__scopeId","data-v-cf2cba4f"]]);export{Vt as default};
