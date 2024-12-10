import{q as u,E as p,x as w,V as E,F as l,K as h,ah as te,aY as oe,H,t as q,G as T,X as W,Y as J,a0 as ne,R as A,n as D,v as x,W as U,w as N,aA as P,N as se,L as I}from"./index-DfRcp7P5.js";import{E as ae}from"./el-input-number-CW4Jcem9.js";import{w as z}from"./index-BKlY8qx0.js";import{P as re}from"./Router-DMyAjHEA.js";import{s as $,i as M,c as le}from"./color-BcUWweng.js";import"./index-sJhUyRIU.js";const j={};var B={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${ce(this.white,this.grey,this.size)})`}}}};function ie(e,t,n){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=n*2;const r=s.getContext("2d");return r?(r.fillStyle=e,r.fillRect(0,0,s.width,s.height),r.fillStyle=t,r.fillRect(0,0,n,n),r.translate(n,n),r.fillRect(0,0,n,n),s.toDataURL()):null}function ce(e,t,n){const s=`${e},${t},${n}`;if(j[s])return j[s];const r=ie(e,t,n);return j[s]=r,r}function he(e,t,n,s,r,o){return u(),p("div",{class:"vc-checkerboard",style:w(o.bgStyle)},null,4)}var de=".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";$(de);B.render=he;B.__file="src/components/checkboard/checkboard.vue";B.install=M;var R={name:"Alpha",components:{Checkboard:B},props:{value:Object,onChange:Function},computed:{colors(){return this.value},gradientColor(){const{rgba:e}=this.colors,t=[e.r,e.g,e.b].join(",");return`linear-gradient(to right, rgba(${t}, 0) 0%, rgba(${t}, 1) 100%)`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const s=n.clientWidth,r=n.getBoundingClientRect().left+window.pageXOffset,a=(e.pageX||(e.touches?e.touches[0].pageX:0))-r;let c;a<0?c=0:a>s?c=1:c=Math.round(a*100/s)/100,this.colors.a!==c&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:c,source:"rgba"})},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const ue={class:"vc-alpha"},pe={class:"vc-alpha-checkboard-wrap"},ve=l("div",{class:"vc-alpha-picker"},null,-1),ge=[ve];function fe(e,t,n,s,r,o){const a=E("Checkboard");return u(),p("div",ue,[l("div",pe,[h(a)]),l("div",{class:"vc-alpha-gradient",style:w({background:o.gradientColor})},null,4),l("div",{ref:"container",class:"vc-alpha-container",onMousedown:t[0]||(t[0]=(...c)=>o.handleMouseDown&&o.handleMouseDown(...c)),onTouchmove:t[1]||(t[1]=(...c)=>o.handleChange&&o.handleChange(...c)),onTouchstart:t[2]||(t[2]=(...c)=>o.handleChange&&o.handleChange(...c))},[l("div",{class:"vc-alpha-pointer",style:w({left:`${o.colors.a*100}%`})},ge,4)],544)])}var be=".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";$(be);R.render=fe;R.__file="src/components/alpha/alpha.vue";R.install=M;var X={name:"EditableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(e){if(this.max!==void 0&&+e>this.max)this.$refs.input.value=this.max;else return e}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(e){this.handleChange(e.target.value)},handleChange(e){const t={};t[this.label]=e,t.hex===void 0&&t["#"]===void 0?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown(e){let{val:t}=this;const n=Number(t);if(n){const s=this.arrowOffset||1;e.keyCode===38&&(t=n+s,this.handleChange(t),e.preventDefault()),e.keyCode===40&&(t=n-s,this.handleChange(t),e.preventDefault())}}}};const me={class:"vc-editable-input"},xe=["aria-labelledby"],we=["id","for"],Ce={class:"vc-input__desc"};function _e(e,t,n,s,r,o){return u(),p("div",me,[te(l("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=a=>o.val=a),"aria-labelledby":o.labelId,class:"vc-input__input",onKeydown:t[1]||(t[1]=(...a)=>o.handleKeyDown&&o.handleKeyDown(...a)),onInput:t[2]||(t[2]=(...a)=>o.update&&o.update(...a))},null,40,xe),[[oe,o.val]]),l("span",{id:o.labelId,for:n.label,class:"vc-input__label"},H(o.labelSpanText),9,we),l("span",Ce,H(n.desc),1)])}var ke=".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}";$(ke);X.render=_e;X.__file="src/components/editable-input/editable-input.vue";X.install=M;function Y(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}var V={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return`${-(this.colors.hsv.v*100)+1+100}%`},pointerLeft(){return`${this.colors.hsv.s*100}%`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const s=n.clientWidth,r=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,a=n.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),_=e.pageY||(e.touches?e.touches[0].pageY:0),b=Y(c-o,0,s),g=Y(_-a,0,r),i=b/s,m=Y(-(g/r)+1,0,1);this.onChange({h:this.colors.hsv.h,s:i,v:m,a:this.colors.hsv.a,source:"hsva"})},onChange(e){this.$emit("change",e)},handleMouseDown(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const ye=l("div",{class:"vc-saturation--white"},null,-1),Ee=l("div",{class:"vc-saturation--black"},null,-1),$e=l("div",{class:"vc-saturation-circle"},null,-1),Me=[$e];function Le(e,t,n,s,r,o){return u(),p("div",{ref:"container",class:"vc-saturation",style:w({background:o.bgColor}),onMousedown:t[0]||(t[0]=(...a)=>o.handleMouseDown&&o.handleMouseDown(...a)),onTouchmove:t[1]||(t[1]=(...a)=>o.handleChange&&o.handleChange(...a)),onTouchstart:t[2]||(t[2]=(...a)=>o.handleChange&&o.handleChange(...a))},[ye,Ee,l("div",{class:"vc-saturation-pointer",style:w({top:o.pointerTop,left:o.pointerLeft})},Me,4)],36)}var De=".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}";$(De);V.render=Le;V.__file="src/components/saturation/saturation.vue";V.install=M;var F={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data(){return{oldHue:0,pullDirection:""}},computed:{colors(){return this.value},directionClass(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:`${-(this.colors.hsl.h*100/360)+100}%`:0},pointerLeft(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":`${this.colors.hsl.h*100/360}%`}},watch:{value:{handler(e,t){const{h:n}=e.hsl;n!==0&&n-this.oldHue>0&&(this.pullDirection="right"),n!==0&&n-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=n},deep:!0,immediate:!0}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:n}=this.$refs;if(!n)return;const s=n.clientWidth,r=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,a=n.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),_=e.pageY||(e.touches?e.touches[0].pageY:0),b=c-o,g=_-a;let i,m;this.direction==="vertical"?(g<0?i=360:g>r?i=0:(m=-(g*100/r)+100,i=360*m/100),this.colors.hsl.h!==i&&this.$emit("change",{h:i,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(b<0?i=0:b>s?i=360:(m=b*100/s,i=360*m/100),this.colors.hsl.h!==i&&this.$emit("change",{h:i,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const Se=["aria-valuenow"],Be=l("div",{class:"vc-hue-picker"},null,-1),Te=[Be];function Ae(e,t,n,s,r,o){return u(),p("div",{class:q(["vc-hue",[o.directionClass]])},[l("div",{ref:"container",class:"vc-hue-container",role:"slider","aria-valuenow":o.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360",onMousedown:t[0]||(t[0]=(...a)=>o.handleMouseDown&&o.handleMouseDown(...a)),onTouchmove:t[1]||(t[1]=(...a)=>o.handleChange&&o.handleChange(...a)),onTouchstart:t[2]||(t[2]=(...a)=>o.handleChange&&o.handleChange(...a))},[l("div",{class:"vc-hue-pointer",style:w({top:o.pointerTop,left:o.pointerLeft}),role:"presentation"},Te,4)],40,Se)],2)}var ze=".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";$(ze);F.render=Ae;F.__file="src/components/hue/hue.vue";F.install=M;const He=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];var S={name:"Sketch",components:{Saturation:V,Hue:F,Alpha:R,EdIn:X,Checkboard:B},mixins:[le],props:{presetColors:{type:Array,default(){return He}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex(){let e;return this.colors.a<1?e=this.colors.hex8:e=this.colors.hex,e.replace("#","")},activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`}},methods:{handlePreset(e){this.colorChange(e)},childChange(e){this.colorChange(e)},inputChange(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}};const Re={class:"vc-sketch-saturation-wrap"},Xe={class:"vc-sketch-controls"},Ve={class:"vc-sketch-sliders"},Fe={class:"vc-sketch-hue-wrap"},Oe={key:0,class:"vc-sketch-alpha-wrap"},Ue={class:"vc-sketch-color-wrap"},Ne=["aria-label"],Ie={key:0,class:"vc-sketch-field"},je={class:"vc-sketch-field--double"},Ye={class:"vc-sketch-field--single"},We={class:"vc-sketch-field--single"},Ge={class:"vc-sketch-field--single"},Ke={key:0,class:"vc-sketch-field--single"},Pe={class:"vc-sketch-presets",role:"group","aria-label":"A color preset, pick one to set as current color"},qe=["aria-label","onClick"],Je=["aria-label","onClick"];function Qe(e,t,n,s,r,o){const a=E("Saturation"),c=E("Hue"),_=E("Alpha"),b=E("Checkboard"),g=E("EdIn");return u(),p("div",{role:"application","aria-label":"Sketch color picker",class:q(["vc-sketch",[n.disableAlpha?"vc-sketch__disable-alpha":""]])},[l("div",Re,[h(a,{value:e.colors,onChange:o.childChange},null,8,["value","onChange"])]),l("div",Xe,[l("div",Ve,[l("div",Fe,[h(c,{value:e.colors,onChange:o.childChange},null,8,["value","onChange"])]),n.disableAlpha?T("v-if",!0):(u(),p("div",Oe,[h(_,{value:e.colors,onChange:o.childChange},null,8,["value","onChange"])]))]),l("div",Ue,[l("div",{"aria-label":`Current color is ${o.activeColor}`,class:"vc-sketch-active-color",style:w({background:o.activeColor})},null,12,Ne),h(b)])]),n.disableFields?T("v-if",!0):(u(),p("div",Ie,[T(" rgba "),l("div",je,[h(g,{label:"hex",value:o.hex,onChange:o.inputChange},null,8,["value","onChange"])]),l("div",Ye,[h(g,{label:"r",value:e.colors.rgba.r,onChange:o.inputChange},null,8,["value","onChange"])]),l("div",We,[h(g,{label:"g",value:e.colors.rgba.g,onChange:o.inputChange},null,8,["value","onChange"])]),l("div",Ge,[h(g,{label:"b",value:e.colors.rgba.b,onChange:o.inputChange},null,8,["value","onChange"])]),n.disableAlpha?T("v-if",!0):(u(),p("div",Ke,[h(g,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:o.inputChange},null,8,["value","arrow-offset","onChange"])]))])),l("div",Pe,[(u(!0),p(W,null,J(n.presetColors,i=>(u(),p(W,null,[e.isTransparent(i)?(u(),p("div",{key:i,"aria-label":`Color:${i}`,class:"vc-sketch-presets-color",onClick:m=>o.handlePreset(i)},[h(b)],8,Je)):(u(),p("div",{key:`!${i}`,class:"vc-sketch-presets-color","aria-label":`Color:${i}`,style:w({background:i}),onClick:m=>o.handlePreset(i)},null,12,qe))],64))),256))])],2)}var Ze=".vc-sketch{background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;padding:10px 10px 0;position:relative;width:200px}.vc-sketch-saturation-wrap{overflow:hidden;padding-bottom:75%;position:relative;width:100%}.vc-sketch-controls{display:flex}.vc-sketch-sliders{flex:1;padding:4px 0}.vc-sketch-sliders .vc-alpha-gradient,.vc-sketch-sliders .vc-hue{border-radius:2px}.vc-sketch-alpha-wrap,.vc-sketch-hue-wrap{height:10px;position:relative}.vc-sketch-alpha-wrap{margin-top:4px;overflow:hidden}.vc-sketch-color-wrap{border-radius:3px;height:24px;margin-left:4px;margin-top:4px;position:relative;width:24px}.vc-sketch-active-color{border-radius:2px;bottom:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);left:0;position:absolute;right:0;top:0;z-index:2}.vc-sketch-color-wrap .vc-checkerboard{background-size:auto}.vc-sketch-field{display:flex;padding-top:4px}.vc-sketch-field .vc-input__input{border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:10px;padding:4px 0 3px 10%;width:90%}.vc-sketch-field .vc-input__label{color:#222;display:block;font-size:11px;padding-bottom:4px;padding-top:3px;text-align:center;text-transform:capitalize}.vc-sketch-field--single{flex:1;padding-left:6px}.vc-sketch-field--double{flex:2}.vc-sketch-presets{border-top:1px solid #eee;margin-left:-10px;margin-right:-10px;padding-left:10px;padding-top:10px}.vc-sketch-presets-color{cursor:pointer;display:inline-block;height:16px;margin:0 10px 10px 0;overflow:hidden;position:relative;vertical-align:top;width:16px}.vc-sketch-presets-color,.vc-sketch-presets-color .vc-checkerboard{border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}.vc-sketch__disable-alpha .vc-sketch-color-wrap{height:10px}";$(Ze);S.render=Qe;S.__file="src/components/sketch/sketch.vue";S.install=M;const et={"mx-auto":"","h-full":"","w-fit":"",flex:"","flex-col":"","items-center":"","justify-start":"","overflow-auto":"","p-t-1":"",class:"gap-3.2"},tt={"mx-auto":"","max-w-full":"","w-fit":"",flex:"","flex-wrap":"","items-center":"","justify-start":"",class:"selector gap-3.2"},ot={"mx-auto":"",flex:"","flex-col":"","items-center":""},nt={"mx-auto":"","w-fit":"",flex:"","flex-row":"","flex-wrap":"","items-stretch":"","justify-start":"",class:"gap-3.2"},st=["onClick"],at={relative:""},rt={__name:"gradientColor",setup(e){const t=A("#ff0000"),n=A("#00ffff"),s=A(10),r=A(!1),o=D({get(){return t.value},set(d){d&&d.hex&&(t.value=d.hex)}}),a=D({get(){return n.value},set(d){d&&d.hex&&(n.value=d.hex)}}),c=D(()=>g(t.value,n.value,s.value)),_=D(()=>c.value.map(d=>z(d).toRgbString())),b=D(()=>r.value?_.value:c.value);function g(d,v,k){const C=z(d).toRgb(),y=z(v).toRgb(),f=(y.r-C.r)/k,O=(y.g-C.g)/k,G=(y.b-C.b)/k,K=[];for(let L=0;L<k;L++){const Q=Math.round(C.r+f*L),Z=Math.round(C.g+O*L),ee=Math.round(C.b+G*L);K.push(z({r:Q,g:Z,b:ee}).toHex())}return K}function i(d){window.navigator.clipboard.writeText(d),P.success("复制成功")}function m(){const d=b.value.join(",");window.navigator.clipboard.writeText(d),P.success("复制成功")}return(d,v)=>{const k=re,C=ae,y=se;return u(),p("div",et,[l("div",tt,[h(x(S),{modelValue:x(o),"onUpdate:modelValue":v[0]||(v[0]=f=>U(o)?o.value=f:null),"disable-alpha":!0,"mx-auto":""},null,8,["modelValue"]),l("div",ot,[h(k,null,{default:N(()=>v[4]||(v[4]=[I(" 渐变个数 ")])),_:1}),h(C,{modelValue:x(s),"onUpdate:modelValue":v[1]||(v[1]=f=>U(s)?s.value=f:null),modelModifiers:{number:!0},step:1,precision:0},null,8,["modelValue"])]),h(x(S),{modelValue:x(a),"onUpdate:modelValue":v[2]||(v[2]=f=>U(a)?a.value=f:null),"mx-auto":"","disable-alpha":!0},null,8,["modelValue"])]),l("div",nt,[(u(!0),p(W,null,J(x(b),(f,O)=>(u(),p("div",{key:O,"display-block":"","h-fit":"","cursor-pointer":"",truncate:"","text-center":"",class:"p-3.2",style:w({background:f,width:x(r)?"15rem":"9rem"}),onClick:G=>i(f)},H(f),13,st))),128)),l("div",at,[h(y,{"h-full":"",onClick:v[3]||(v[3]=f=>r.value=!x(r))},{default:N(()=>[I(H(x(r)?"显示HEX":"显示RGB"),1)]),_:1})])]),h(y,{type:"primary",onClick:m},{default:N(()=>v[5]||(v[5]=[I(" 复制所有 ")])),_:1})])}}},pt=ne(rt,[["__scopeId","data-v-5979d142"]]);export{pt as default};
