import{bD as n}from"./index-Qxs6HJco.js";const c="";function u(e,o){o===void 0&&(o={});var h=o.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",h==="top"&&s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}const f=function(e,o){const{componentPrefix:h=c}=o||{};e.component(`${h}${this.name}`,this)};function i(...e){return new n(...e)}function r(e,o){const h=e&&e.a;let s;e&&e.hsl?s=i(e.hsl):e&&e.hex&&e.hex.length>0?s=i(e.hex):e&&e.hsv?s=i(e.hsv):e&&e.rgba?s=i(e.rgba):e&&e.rgb?s=i(e.rgb):s=i(e),s&&(s._a===void 0||s._a===null)&&s.setAlpha(h||s.getAlpha());const l=s.toHsl(),t=s.toHsv();return l.s===0&&(t.h=l.h=e.h||e.hsl&&e.hsl.h||o||0),t.v<.0164&&(t.h=e.h||e.hsv&&e.hsv.h||0,t.s=e.s||e.hsv&&e.hsv.s||0),l.l<.01&&(l.h=e.h||e.hsl&&e.hsl.h||0,l.s=e.s||e.hsl&&e.hsl.s||0),{hsl:l,hex:s.toHexString().toUpperCase(),hex8:s.toHex8String().toUpperCase(),rgba:s.toRgb(),hsv:t,oldHue:e.h||o||l.h,source:e.source,a:s.getAlpha()}}var m={model:{prop:"modelValue",event:"update:modelValue"},props:["modelValue"],data(){return{val:r(this.modelValue)}},computed:{colors:{get(){return this.val},set(e){this.val=e,this.$emit("update:modelValue",e)}}},watch:{modelValue(e){this.val=r(e)}},methods:{colorChange(e,o){this.oldHue=this.colors.hsl.h,this.colors=r(e,o||this.oldHue)},isValidHex(e){return i(e).isValid},simpleCheckForValidColor(e){const o=["r","g","b","a","h","s","l","v"];let h=0,s=0;for(let l=0;l<o.length;l++){const t=o[l];e[t]&&(h++,isNaN(e[t])||s++)}if(h===s)return e},paletteUpperCase(e){return e.map(o=>o.toUpperCase())},isTransparent(e){return i(e).getAlpha()===0}}};export{m as c,f as i,u as s};
