import{d as D,aa as E,H as z,bQ as A,aw as T,bR as k,bD as b,aI as P,a as s,h as o,Y as x,br as V,P as _}from"./index.c31bc572.js";import{d as B}from"./debounce.b10463ff.js";var H=globalThis&&globalThis.__rest||function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(e[i[a]]=t[i[a]]);return e},Q=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:_.any,delay:Number,indicator:_.any}},l=null;function R(t,n){return!!t&&!!n&&!isNaN(Number(n))}function Y(t){var n=t.indicator;l=typeof n=="function"?n:function(){return s(n,null,null)}}var p=D({name:"ASpin",inheritAttrs:!1,props:E(Q(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:z("configProvider",A)}},data:function(){var n=this.spinning,e=this.delay,i=R(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;T(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=B(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&(this.sSpinning=n)},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=k(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),b(i)?P(i,{class:e}):l&&b(l())?P(l(),{class:e}):s("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e,i,a=this.$props,v=a.size,N=a.prefixCls,h=a.tip,d=h===void 0?(i=(e=this.$slots).tip)===null||i===void 0?void 0:i.call(e):h,$=a.wrapperClassName,u=this.$attrs,S=u.class,w=u.style,I=H(u,["class","style"]),y=this.configProvider,O=y.getPrefixCls,U=y.direction,r=O("spin",N),f=this.sSpinning,C=(n={},o(n,r,!0),o(n,"".concat(r,"-sm"),v==="small"),o(n,"".concat(r,"-lg"),v==="large"),o(n,"".concat(r,"-spinning"),f),o(n,"".concat(r,"-show-text"),!!d),o(n,"".concat(r,"-rtl"),U==="rtl"),o(n,S,!!S),n),m=s("div",x(x({},I),{},{style:w,class:C}),[this.renderIndicator(r),d?s("div",{class:"".concat(r,"-text")},[d]):null]),g=V(this);if(g&&g.length){var c,j=(c={},o(c,"".concat(r,"-container"),!0),o(c,"".concat(r,"-blur"),f),c);return s("div",{class:["".concat(r,"-nested-loading"),$]},[f&&s("div",{key:"loading"},[m]),s("div",{class:j,key:"container"},[g])])}return m}});p.setDefaultIndicator=Y;p.install=function(t){return t.component(p.name,p),t};export{p as S};