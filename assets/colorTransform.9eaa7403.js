import{C as e}from"./container.d6ed78ed.js";import{_ as t}from"./index.dad6b4ad.js";import{s as n,c as o}from"./color.3958caba.js";import{o as i,f as s,W as a,a as r,e as l,b as h,O as c,P as d,Q as u,X as p,c as v,w as g}from"./vendor.588f181b.js";const f={};var b={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${x(this.white,this.grey,this.size)})`}}}};function m(e,t,n){if("undefined"==typeof document)return null;const o=document.createElement("canvas");o.width=o.height=2*n;const i=o.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,o.width,o.height),i.fillStyle=t,i.fillRect(0,0,n,n),i.translate(n,n),i.fillRect(0,0,n,n),o.toDataURL()):null}function x(e,t,n){const o=`${e},${t},${n}`;if(f[o])return f[o];const i=m(e,t,n);return f[o]=i,i}function w(e,t,n,o,r,l){return i(),s("div",{class:"vc-checkerboard",style:a(l.bgStyle)},null,4)}var k=".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";n(k),b.render=w,b.__file="src/components/checkboard/checkboard.vue";var C={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:b},computed:{colors(){return this.value},gradientColor(){const{rgba:e}=this.colors,t=[e.r,e.g,e.b].join(",");return`linear-gradient(to right, rgba(${t}, 0) 0%, rgba(${t}, 1) 100%)`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const o=n.clientWidth,i=n.getBoundingClientRect().left+window.pageXOffset,s=(e.pageX||(e.touches?e.touches[0].pageX:0))-i;let a;a=s<0?0:s>o?1:Math.round(100*s/o)/100,this.colors.a!==a&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:a,source:"rgba"})},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},y={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(e){this.handleChange(e.target.value)},handleChange(e){const t={};t[this.label]=e,(void 0===t.hex&&void 0===t["#"]||e.length>5)&&this.$emit("change",t)},handleKeyDown(e){let{val:t}=this;const n=Number(t);if(n){const o=this.arrowOffset||1;38===e.keyCode&&(t=n+o,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=n-o,this.handleChange(t),e.preventDefault())}}}},E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$=L;function L(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}var S=$,_="Expected a function",j=NaN,D="[object Symbol]",O=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,B=/^0o[0-7]+$/i,A=parseInt,F="object"==typeof E&&E&&E.Object===Object&&E,z="object"==typeof self&&self&&self.Object===Object&&self,U=F||z||Function("return this")(),X=Object.prototype,R=X.toString,H=Math.max,N=Math.min,W=function(){return U.Date.now()};function Y(e,t,n){var o,i,s,a,r,l,h=0,c=!1,d=!1,u=!0;if("function"!=typeof e)throw new TypeError(_);function p(t){var n=o,s=i;return o=i=void 0,h=t,a=e.apply(s,n)}function v(e){return h=e,r=setTimeout(f,t),c?p(e):a}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-h>=s}function f(){var e=W();if(g(e))return b(e);r=setTimeout(f,function(e){var n=t-(e-l);return d?N(n,s-(e-h)):n}(e))}function b(e){return r=void 0,u&&o?p(e):(o=i=void 0,a)}function m(){var e=W(),n=g(e);if(o=arguments,i=this,l=e,n){if(void 0===r)return v(l);if(d)return r=setTimeout(f,t),p(l)}return void 0===r&&(r=setTimeout(f,t)),a}return t=Q(t)||0,V(n)&&(c=!!n.leading,s=(d="maxWait"in n)?H(Q(n.maxWait)||0,t):s,u="trailing"in n?!!n.trailing:u),m.cancel=function(){void 0!==r&&clearTimeout(r),h=0,o=l=i=r=void 0},m.flush=function(){return void 0===r?a:b(W())},m}function P(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(_);return V(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Y(e,t,{leading:o,maxWait:t,trailing:i})}function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){return!!e&&"object"==typeof e}function K(e){return"symbol"==typeof e||I(e)&&R.call(e)==D}function Q(e){if("number"==typeof e)return e;if(K(e))return j;if(V(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=V(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=T.test(e);return n||B.test(e)?A(e.slice(2),n?2:8):M.test(e)?j:+e}var q=P,G=q,J={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:G(((e,t)=>{e(t)}),20,{leading:!0,trailing:!1}),handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const o=n.clientWidth,i=n.clientHeight,s=n.getBoundingClientRect().left+window.pageXOffset,a=n.getBoundingClientRect().top+window.pageYOffset,r=e.pageX||(e.touches?e.touches[0].pageX:0),l=e.pageY||(e.touches?e.touches[0].pageY:0),h=S(r-s,0,o),c=S(l-a,0,i),d=h/o,u=S(-c/i+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:d,v:u,a:this.colors.hsv.a,source:"hsva"})},onChange(e){this.$emit("change",e)},handleMouseDown(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},Z={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:()=>({oldHue:0,pullDirection:""}),computed:{colors(){const{h:e}=this.value.hsl;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const o=n.clientWidth,i=n.clientHeight,s=n.getBoundingClientRect().left+window.pageXOffset,a=n.getBoundingClientRect().top+window.pageYOffset,r=(e.pageX||(e.touches?e.touches[0].pageX:0))-s,l=(e.pageY||(e.touches?e.touches[0].pageY:0))-a;let h,c;"vertical"===this.direction?(l<0?h=360:l>i?h=0:(c=-100*l/i+100,h=360*c/100),this.colors.hsl.h!==h&&this.$emit("change",{h:h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(r<0?h=0:r>o?h=360:(c=100*r/o,h=360*c/100),this.colors.hsl.h!==h&&this.$emit("change",{h:h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const ee=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];var te={name:"Sketch",mixins:[o],components:{saturation:J,hue:Z,alpha:C,"ed-in":y,checkboard:b},props:{presetColors:{type:Array,default:()=>ee},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex(){let e;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`}},methods:{handlePreset(e){this.colorChange({hex:e,source:"hex"})},childChange(e){this.colorChange(e)},inputChange(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}};const ne={class:"vc-sketch-saturation-wrap"},oe={class:"vc-sketch-controls"},ie={class:"vc-sketch-sliders"},se={class:"vc-sketch-hue-wrap"},ae={key:0,class:"vc-sketch-alpha-wrap"},re={class:"vc-sketch-color-wrap"},le=["aria-label"],he={key:0,class:"vc-sketch-field"},ce={class:"vc-sketch-field--double"},de={class:"vc-sketch-field--single"},ue={class:"vc-sketch-field--single"},pe={class:"vc-sketch-field--single"},ve={key:0,class:"vc-sketch-field--single"},ge={class:"vc-sketch-presets",role:"group","aria-label":"A color preset, pick one to set as current color"},fe=["aria-label","onClick"],be=["aria-label","onClick"];function me(e,t,n,o,v,g){const f=r("saturation"),b=r("hue"),m=r("alpha"),x=r("checkboard"),w=r("ed-in");return i(),s("div",{role:"application","aria-label":"Sketch color picker",class:p(["vc-sketch",n.disableAlpha?"vc-sketch__disable-alpha":""])},[l("div",ne,[h(f,{value:e.colors,onChange:g.childChange},null,8,["value","onChange"])]),l("div",oe,[l("div",ie,[l("div",se,[h(b,{value:e.colors,onChange:g.childChange},null,8,["value","onChange"])]),n.disableAlpha?c("v-if",!0):(i(),s("div",ae,[h(m,{value:e.colors,onChange:g.childChange},null,8,["value","onChange"])]))]),l("div",re,[l("div",{"aria-label":`Current color is ${g.activeColor}`,class:"vc-sketch-active-color",style:a({background:g.activeColor})},null,12,le),h(x)])]),n.disableFields?c("v-if",!0):(i(),s("div",he,[c(" rgba "),l("div",ce,[h(w,{label:"hex",value:g.hex,onChange:g.inputChange},null,8,["value","onChange"])]),l("div",de,[h(w,{label:"r",value:e.colors.rgba.r,onChange:g.inputChange},null,8,["value","onChange"])]),l("div",ue,[h(w,{label:"g",value:e.colors.rgba.g,onChange:g.inputChange},null,8,["value","onChange"])]),l("div",pe,[h(w,{label:"b",value:e.colors.rgba.b,onChange:g.inputChange},null,8,["value","onChange"])]),n.disableAlpha?c("v-if",!0):(i(),s("div",ve,[h(w,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:g.inputChange},null,8,["value","arrow-offset","onChange"])]))])),l("div",ge,[(i(!0),s(d,null,u(n.presetColors,(t=>(i(),s(d,null,[e.isTransparent(t)?(i(),s("div",{key:t,"aria-label":"Color:"+t,class:"vc-sketch-presets-color",onClick:e=>g.handlePreset(t)},[h(x)],8,be)):(i(),s("div",{key:`!${t}`,class:"vc-sketch-presets-color","aria-label":"Color:"+t,style:a({background:t}),onClick:e=>g.handlePreset(t)},null,12,fe))],64)))),256))])],2)}var xe=".vc-sketch{background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;padding:10px 10px 0;position:relative;width:200px}.vc-sketch-saturation-wrap{overflow:hidden;padding-bottom:75%;position:relative;width:100%}.vc-sketch-controls{display:flex}.vc-sketch-sliders{flex:1;padding:4px 0}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-alpha-wrap,.vc-sketch-hue-wrap{height:10px;position:relative}.vc-sketch-alpha-wrap{margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{border-radius:3px;height:24px;margin-left:4px;margin-top:4px;position:relative;width:24px}.vc-sketch-active-color{border-radius:2px;bottom:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);left:0;position:absolute;right:0;top:0;z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px;padding:4px 0 3px 10%;width:90%}.vc-sketch-field .vc-input__label{color:#222;display:block;font-size:11px;padding-bottom:4px;padding-top:3px;text-align:center;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{border-top:1px solid #eee;margin-left:-10px;margin-right:-10px;padding-left:10px;padding-top:10px}.vc-sketch-presets-color{cursor:pointer;display:inline-block;height:16px;margin:0 10px 10px 0;overflow:hidden;position:relative;vertical-align:top;width:16px}.vc-sketch-presets-color,.vc-sketch-presets-color .vc-checkerboard{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}";n(xe),te.render=me,te.__file="src/components/sketch/sketch.vue";const we={name:"颜色转换",data:()=>({colors:"#16b0f6"}),components:{Container:e,Sketch:te}};function ke(e,t,n,o,s,a){const l=r("Sketch"),c=r("container");return i(),v(c,null,{default:g((()=>[h(l,{modelValue:e.colors,"onUpdate:modelValue":t[0]||(t[0]=t=>e.colors=t),style:{maxWidth:"30rem",width:"100%",margin:"0 auto"}},null,8,["modelValue"])])),_:1})}var Ce=t(we,[["render",ke]]);export{Ce as default};
