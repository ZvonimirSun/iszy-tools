import{cj as h}from"./index.90f5032a.js";const c="";function u(e,l){l===void 0&&(l={});var o=l.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o==="top"&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}const f=function(e,l){const{componentPrefix:o=c}=l||{};e.component(`${o}${this.name}`,this)};function i(...e){return new h(...e)}function n(e,l){const o=e&&e.a;let t;e&&e.hsl?t=i(e.hsl):e&&e.hex&&e.hex.length>0?t=i(e.hex):e&&e.hsv?t=i(e.hsv):e&&e.rgba?t=i(e.rgba):e&&e.rgb?t=i(e.rgb):t=i(e),t&&(t._a===void 0||t._a===null)&&t.setAlpha(o||t.getAlpha());const s=t.toHsl(),r=t.toHsv();return s.s===0&&(r.h=s.h=e.h||e.hsl&&e.hsl.h||l||0),{hsl:s,hex:t.toHexString().toUpperCase(),hex8:t.toHex8String().toUpperCase(),rgba:t.toRgb(),hsv:r,oldHue:e.h||l||s.h,source:e.source,a:t.getAlpha()}}var m={model:{prop:"modelValue",event:"update:modelValue"},props:["modelValue"],data(){return{val:n(this.modelValue)}},computed:{colors:{get(){return this.val},set(e){this.val=e,this.$emit("update:modelValue",e)}}},watch:{modelValue(e){this.val=n(e)}},methods:{colorChange(e,l){this.oldHue=this.colors.hsl.h,this.colors=n(e,l||this.oldHue)},isValidHex(e){return i(e).isValid},simpleCheckForValidColor(e){const l=["r","g","b","a","h","s","l","v"];let o=0,t=0;for(let s=0;s<l.length;s++){const r=l[s];e[r]&&(o++,isNaN(e[r])||t++)}if(o===t)return e},paletteUpperCase(e){return e.map(l=>l.toUpperCase())},isTransparent(e){return i(e).getAlpha()===0}}};export{m as c,f as i,u as s};