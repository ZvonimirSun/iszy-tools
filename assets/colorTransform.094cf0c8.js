import{S as P,H as V,A as j}from"./vue-codemirror.e4bf27bd.js";import{C as y}from"./container.af53ac81.js";import{t as i}from"./tinycolor.4227ddcb.js";import{_ as C,$ as H,ac as G,I as L,J as R,a as h,o as w,b as B,w as t,f as m,e as n,X as N,W as k}from"./vendor.06d41b47.js";/* empty css               *//* empty css              *//* empty css               */import{_ as z}from"./index.3e8bde9e.js";const{Item:T}=C,{Group:X}=H,E={name:"\u989C\u8272\u8F6C\u6362",data:()=>({hex:"16b0f6",rgba:{r:void 0,g:void 0,b:void 0,a:void 0},hsla:{h:void 0,s:void 0,l:void 0,a:void 0},hsva:{h:void 0,s:void 0,v:void 0,a:void 0},oldHue:void 0,colors:I("16b0f6")}),computed:{activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`},isLight(){return this.colors?i(this.colors.hex8).isLight()||this.colors.a<.5:!0}},components:{Container:y,Saturation:P,Hue:V,Alpha:j,Form:C,FormItem:T,Input:H,InputGroup:X,InputNumber:G,Row:L,Col:R},mounted(){this.inputChange({hex:this.hex})},methods:{colorChange(e,l){this.oldHue=this.colors.hsl.h;const{rgba:p,hex:r,hex8:g,a,hsl:v,hsv:u,source:o}=this.colors=I(e,l||this.oldHue);o!=="rgba"&&(this.rgba.r=p.r,this.rgba.g=p.g,this.rgba.b=p.b,this.rgba.a=p.a),o!=="hsla"&&(this.hsla.h=v.h,this.hsla.s=v.s,this.hsla.l=v.l,this.hsla.a=a),this.hsva.h=u.h,this.hsva.s=u.s,this.hsva.v=u.v,this.hsva.a=a,o!=="hex"&&(a===1?this.hex=r.replace("#",""):this.hex=g.replace("#",""))},isValidColor(e){return i(e).isValid()},childChange(e){this.colorChange(e)},inputChange(e){if(!!e){if(e.hex)this.isValidColor(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.rgba)this.isValidColor(e.rgba)&&this.colorChange({r:e.rgba.r||this.colors.rgba.r,g:e.rgba.g||this.colors.rgba.g,b:e.rgba.b||this.colors.rgba.b,a:e.rgba.a||this.colors.rgba.a,source:"rgba"});else if(e.hsla){const l=`hsla(${e.hsla.h},${(e.hsla.s*100).toFixed(0)}%,${(e.hsla.l*100).toFixed(0)}%,${e.hsla.a}`;this.isValidColor(l)&&this.colorChange(l)}else if(e.hsva){const l=`hsva(${e.hsva.h},${(e.hsva.s*100).toFixed(0)}%,${(e.hsva.v*100).toFixed(0)}%,${e.hsva.a}`;this.isValidColor(l)&&this.colorChange(l)}}},formatterPercentage(e){return`${(e*100).toFixed(0)}%`},parserPercentage(e){return parseInt(e.replace("%",""))/100}}};function I(e,l){const p=e&&e.a;let r;e&&e.hsl?r=i(e.hsl):e&&e.hex&&e.hex.length>0?r=i(e.hex):e&&e.hsv?r=i(e.hsv):e&&e.rgba?r=i(e.rgba):e&&e.rgb?r=i(e.rgb):r=i(e),r&&(r._a===void 0||r._a===null)&&r.setAlpha(p||1);const g=r.toHsl(),a=r.toHsv();return g.s===0&&(a.h=g.h=e.h||e.hsl&&e.hsl.h||l||0),{hsl:g,hex:r.toHexString().toUpperCase(),hex8:r.toHex8String().toUpperCase(),rgba:r.toRgb(),hsv:a,oldHue:e.h||l||g.h,source:e.source,a:e.a||r.getAlpha()}}const J={class:"saturation"},W={class:"hue"},$={class:"alpha"};function c(e,l,p,r,g,a){const v=h("Input"),u=h("FormItem"),o=h("InputNumber"),d=h("InputGroup"),f=h("Form"),b=h("Col"),U=h("Saturation"),x=h("Hue"),A=h("Alpha"),F=h("Row"),S=h("container");return w(),B(S,null,{default:t(()=>[m("div",{class:N(["panel",{light:a.isLight,dark:!a.isLight}]),style:k({background:a.activeColor})},[n(F,null,{default:t(()=>[n(b,{md:12,xl:8,span:24},{default:t(()=>[n(f,{layout:"vertical"},{default:t(()=>[n(u,{label:"HEX",class:"hex"},{default:t(()=>[n(v,{value:e.hex,"onUpdate:value":l[0]||(l[0]=s=>e.hex=s),onChange:l[1]||(l[1]=s=>a.inputChange({hex:e.hex}))},null,8,["value"])]),_:1}),n(u,{label:"RGBA",class:"rgba"},{default:t(()=>[n(d,{compact:""},{default:t(()=>[n(o,{placeholder:"R",value:e.rgba.r,"onUpdate:value":l[2]||(l[2]=s=>e.rgba.r=s),onChange:l[3]||(l[3]=s=>a.inputChange({rgba:e.rgba})),max:255,min:0,step:1},null,8,["value"]),n(o,{placeholder:"G",value:e.rgba.g,"onUpdate:value":l[4]||(l[4]=s=>e.rgba.g=s),onChange:l[5]||(l[5]=s=>a.inputChange({rgba:e.rgba})),max:255,min:0,step:1},null,8,["value"]),n(o,{placeholder:"B",value:e.rgba.b,"onUpdate:value":l[6]||(l[6]=s=>e.rgba.b=s),onChange:l[7]||(l[7]=s=>a.inputChange({rgba:e.rgba})),max:255,min:0,step:1},null,8,["value"]),n(o,{placeholder:"A",value:e.rgba.a,"onUpdate:value":l[8]||(l[8]=s=>e.rgba.a=s),onChange:l[9]||(l[9]=s=>a.inputChange({rgba:e.rgba})),max:1,min:0,step:.01},null,8,["value","step"])]),_:1})]),_:1}),n(u,{label:"HSLA",class:"hsla"},{default:t(()=>[n(d,{compact:""},{default:t(()=>[n(o,{placeholder:"H",value:e.hsla.h,"onUpdate:value":l[10]||(l[10]=s=>e.hsla.h=s),onChange:l[11]||(l[11]=s=>a.inputChange({hsla:e.hsla})),max:360,min:0,step:.01,precision:2},null,8,["value","step"]),n(o,{placeholder:"S",value:e.hsla.s,"onUpdate:value":l[12]||(l[12]=s=>e.hsla.s=s),onChange:l[13]||(l[13]=s=>a.inputChange({hsla:e.hsla})),max:1,min:0,step:.01,formatter:a.formatterPercentage,parser:a.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"L",value:e.hsla.l,"onUpdate:value":l[14]||(l[14]=s=>e.hsla.l=s),onChange:l[15]||(l[15]=s=>a.inputChange({hsla:e.hsla})),max:1,min:0,step:.01,formatter:a.formatterPercentage,parser:a.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"A",value:e.hsla.a,"onUpdate:value":l[16]||(l[16]=s=>e.hsla.a=s),onChange:l[17]||(l[17]=s=>a.inputChange({hsla:e.hsla})),max:1,min:0,step:.01,precision:2},null,8,["value","step"])]),_:1})]),_:1}),n(u,{label:"HSVA",class:"hsva"},{default:t(()=>[n(d,{compact:""},{default:t(()=>[n(o,{placeholder:"H",value:e.hsva.h,"onUpdate:value":l[18]||(l[18]=s=>e.hsva.h=s),onChange:l[19]||(l[19]=s=>a.inputChange({hsva:e.hsva})),max:360,min:0,step:.01,precision:2},null,8,["value","step"]),n(o,{placeholder:"S",value:e.hsva.s,"onUpdate:value":l[20]||(l[20]=s=>e.hsva.s=s),onChange:l[21]||(l[21]=s=>a.inputChange({hsva:e.hsva})),max:1,min:0,step:.01,formatter:a.formatterPercentage,parser:a.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"V",value:e.hsva.v,"onUpdate:value":l[22]||(l[22]=s=>e.hsva.v=s),onChange:l[23]||(l[23]=s=>a.inputChange({hsva:e.hsva})),max:1,min:0,step:.01,formatter:a.formatterPercentage,parser:a.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"A",value:e.hsva.a,"onUpdate:value":l[24]||(l[24]=s=>e.hsva.a=s),onChange:l[25]||(l[25]=s=>a.inputChange({hsva:e.hsva})),max:1,min:0,step:.01,precision:2},null,8,["value","step"])]),_:1})]),_:1})]),_:1})]),_:1}),n(b,{md:12,xl:8,span:24},{default:t(()=>[n(f,{layout:"vertical"},{default:t(()=>[n(u,{label:"\u989C\u8272\u9009\u62E9"},{default:t(()=>[m("div",J,[n(U,{value:e.colors,onChange:a.childChange},null,8,["value","onChange"])]),m("div",W,[n(x,{value:e.colors,onChange:a.childChange},null,8,["value","onChange"])]),m("div",$,[n(A,{value:e.colors,onChange:a.childChange},null,8,["value","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})],6)]),_:1})}var _=z(E,[["render",c],["__scopeId","data-v-383307f3"]]);export{_ as default};
