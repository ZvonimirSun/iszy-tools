import{_ as P,S as V,H as x,A as y}from"./index.76034313.js";import{t as i}from"./tinycolor.4227ddcb.js";import{ac as H,ad as I,ae as G,a2 as L,a3 as R,c as B,f as n,x as h,j as N,n as k,r as t,o as w,a as f}from"./vendor.fec45e94.js";/* empty css                *//* empty css               *//* empty css                */const{Item:j}=H,{Group:z}=I,E={name:"\u989C\u8272\u8F6C\u6362",data:()=>({hex:"16b0f6",rgba:{r:void 0,g:void 0,b:void 0,a:void 0},hsla:{h:void 0,s:void 0,l:void 0,a:void 0},hsva:{h:void 0,s:void 0,v:void 0,a:void 0},oldHue:void 0,colors:C("16b0f6")}),computed:{activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`},isLight(){return this.colors?i(this.colors.hex8).isLight()||this.colors.a<.5:!0}},components:{Saturation:V,Hue:x,Alpha:y,Form:H,FormItem:j,Input:I,InputGroup:z,InputNumber:G,Row:L,Col:R},mounted(){this.inputChange({hex:this.hex})},methods:{colorChange(e,l){this.oldHue=this.colors.hsl.h;const{rgba:p,hex:r,hex8:g,a:s,hsl:v,hsv:u,source:o}=this.colors=C(e,l||this.oldHue);o!=="rgba"&&(this.rgba.r=p.r,this.rgba.g=p.g,this.rgba.b=p.b,this.rgba.a=p.a),o!=="hsla"&&(this.hsla.h=v.h,this.hsla.s=v.s,this.hsla.l=v.l,this.hsla.a=s),this.hsva.h=u.h,this.hsva.s=u.s,this.hsva.v=u.v,this.hsva.a=s,o!=="hex"&&(s===1?this.hex=r.replace("#",""):this.hex=g.replace("#",""))},isValidColor(e){return i(e).isValid()},childChange(e){this.colorChange(e)},inputChange(e){if(!!e){if(e.hex)this.isValidColor(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.rgba)this.isValidColor(e.rgba)&&this.colorChange({r:e.rgba.r||this.colors.rgba.r,g:e.rgba.g||this.colors.rgba.g,b:e.rgba.b||this.colors.rgba.b,a:e.rgba.a||this.colors.rgba.a,source:"rgba"});else if(e.hsla){const l=`hsla(${e.hsla.h},${(e.hsla.s*100).toFixed(0)}%,${(e.hsla.l*100).toFixed(0)}%,${e.hsla.a}`;this.isValidColor(l)&&this.colorChange(l)}else if(e.hsva){const l=`hsva(${e.hsva.h},${(e.hsva.s*100).toFixed(0)}%,${(e.hsva.v*100).toFixed(0)}%,${e.hsva.a}`;this.isValidColor(l)&&this.colorChange(l)}}},formatterPercentage(e){return`${(e*100).toFixed(0)}%`},parserPercentage(e){return parseInt(e.replace("%",""))/100}}};function C(e,l){const p=e&&e.a;let r;e&&e.hsl?r=i(e.hsl):e&&e.hex&&e.hex.length>0?r=i(e.hex):e&&e.hsv?r=i(e.hsv):e&&e.rgba?r=i(e.rgba):e&&e.rgb?r=i(e.rgb):r=i(e),r&&(r._a===void 0||r._a===null)&&r.setAlpha(p||1);const g=r.toHsl(),s=r.toHsv();return g.s===0&&(s.h=g.h=e.h||e.hsl&&e.hsl.h||l||0),{hsl:g,hex:r.toHexString().toUpperCase(),hex8:r.toHex8String().toUpperCase(),rgba:r.toRgb(),hsv:s,oldHue:e.h||l||g.h,source:e.source,a:e.a||r.getAlpha()}}const T={class:"saturation"},X={class:"hue"},q={class:"alpha"};function D(e,l,p,r,g,s){const v=t("Input"),u=t("FormItem"),o=t("InputNumber"),m=t("InputGroup"),d=t("Form"),b=t("Col"),U=t("Saturation"),A=t("Hue"),F=t("Alpha"),S=t("Row");return w(),B("div",{class:N(["panel",{light:s.isLight,dark:!s.isLight}]),style:k({background:s.activeColor})},[n(S,null,{default:h(()=>[n(b,{md:12,xl:8,span:24},{default:h(()=>[n(d,{layout:"vertical"},{default:h(()=>[n(u,{label:"HEX",class:"hex"},{default:h(()=>[n(v,{value:e.hex,"onUpdate:value":l[0]||(l[0]=a=>e.hex=a),onChange:l[1]||(l[1]=a=>s.inputChange({hex:e.hex}))},null,8,["value"])]),_:1}),n(u,{label:"RGBA",class:"rgba"},{default:h(()=>[n(m,{compact:""},{default:h(()=>[n(o,{placeholder:"R",value:e.rgba.r,"onUpdate:value":l[2]||(l[2]=a=>e.rgba.r=a),onChange:l[3]||(l[3]=a=>s.inputChange({rgba:e.rgba})),max:255,min:0,step:1},null,8,["value"]),n(o,{placeholder:"G",value:e.rgba.g,"onUpdate:value":l[4]||(l[4]=a=>e.rgba.g=a),onChange:l[5]||(l[5]=a=>s.inputChange({rgba:e.rgba})),max:255,min:0,step:1},null,8,["value"]),n(o,{placeholder:"B",value:e.rgba.b,"onUpdate:value":l[6]||(l[6]=a=>e.rgba.b=a),onChange:l[7]||(l[7]=a=>s.inputChange({rgba:e.rgba})),max:255,min:0,step:1},null,8,["value"]),n(o,{placeholder:"A",value:e.rgba.a,"onUpdate:value":l[8]||(l[8]=a=>e.rgba.a=a),onChange:l[9]||(l[9]=a=>s.inputChange({rgba:e.rgba})),max:1,min:0,step:.01},null,8,["value","step"])]),_:1})]),_:1}),n(u,{label:"HSLA",class:"hsla"},{default:h(()=>[n(m,{compact:""},{default:h(()=>[n(o,{placeholder:"H",value:e.hsla.h,"onUpdate:value":l[10]||(l[10]=a=>e.hsla.h=a),onChange:l[11]||(l[11]=a=>s.inputChange({hsla:e.hsla})),max:360,min:0,step:.01,precision:2},null,8,["value","step"]),n(o,{placeholder:"S",value:e.hsla.s,"onUpdate:value":l[12]||(l[12]=a=>e.hsla.s=a),onChange:l[13]||(l[13]=a=>s.inputChange({hsla:e.hsla})),max:1,min:0,step:.01,formatter:s.formatterPercentage,parser:s.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"L",value:e.hsla.l,"onUpdate:value":l[14]||(l[14]=a=>e.hsla.l=a),onChange:l[15]||(l[15]=a=>s.inputChange({hsla:e.hsla})),max:1,min:0,step:.01,formatter:s.formatterPercentage,parser:s.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"A",value:e.hsla.a,"onUpdate:value":l[16]||(l[16]=a=>e.hsla.a=a),onChange:l[17]||(l[17]=a=>s.inputChange({hsla:e.hsla})),max:1,min:0,step:.01,precision:2},null,8,["value","step"])]),_:1})]),_:1}),n(u,{label:"HSVA",class:"hsva"},{default:h(()=>[n(m,{compact:""},{default:h(()=>[n(o,{placeholder:"H",value:e.hsva.h,"onUpdate:value":l[18]||(l[18]=a=>e.hsva.h=a),onChange:l[19]||(l[19]=a=>s.inputChange({hsva:e.hsva})),max:360,min:0,step:.01,precision:2},null,8,["value","step"]),n(o,{placeholder:"S",value:e.hsva.s,"onUpdate:value":l[20]||(l[20]=a=>e.hsva.s=a),onChange:l[21]||(l[21]=a=>s.inputChange({hsva:e.hsva})),max:1,min:0,step:.01,formatter:s.formatterPercentage,parser:s.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"V",value:e.hsva.v,"onUpdate:value":l[22]||(l[22]=a=>e.hsva.v=a),onChange:l[23]||(l[23]=a=>s.inputChange({hsva:e.hsva})),max:1,min:0,step:.01,formatter:s.formatterPercentage,parser:s.parserPercentage,precision:2},null,8,["value","step","formatter","parser"]),n(o,{placeholder:"A",value:e.hsva.a,"onUpdate:value":l[24]||(l[24]=a=>e.hsva.a=a),onChange:l[25]||(l[25]=a=>s.inputChange({hsva:e.hsva})),max:1,min:0,step:.01,precision:2},null,8,["value","step"])]),_:1})]),_:1})]),_:1})]),_:1}),n(b,{md:12,xl:8,span:24},{default:h(()=>[n(d,{layout:"vertical"},{default:h(()=>[n(u,{label:"\u989C\u8272\u9009\u62E9"},{default:h(()=>[f("div",T,[n(U,{value:e.colors,onChange:s.childChange},null,8,["value","onChange"])]),f("div",X,[n(A,{value:e.colors,onChange:s.childChange},null,8,["value","onChange"])]),f("div",q,[n(F,{value:e.colors,onChange:s.childChange},null,8,["value","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})],6)}var Y=P(E,[["render",D],["__scopeId","data-v-1d6187f0"]]);export{Y as default};
