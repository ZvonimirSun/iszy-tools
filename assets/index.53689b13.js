import{e as D,as as E,H as z,ae as A,aA as T,W as b,aB as P,b as s,i as o,a3 as x,aC as k,P as _,aD as B}from"./index.fd3c34f7.js";import{d as V}from"./debounce.f0dc985b.js";var H=globalThis&&globalThis.__rest||function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(e[i[a]]=t[i[a]]);return e},W=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:_.any,delay:Number,indicator:_.any}},l=null;function q(t,n){return!!t&&!!n&&!isNaN(Number(n))}function F(t){var n=t.indicator;l=typeof n=="function"?n:function(){return s(n,null,null)}}var p=D({name:"ASpin",inheritAttrs:!1,props:E(W(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:z("configProvider",B)}},data:function(){var n=this.spinning,e=this.delay,i=q(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;A(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=V(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&(this.sSpinning=n)},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=T(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),b(i)?P(i,{class:e}):l&&b(l())?P(l(),{class:e}):s("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e,i,a=this.$props,v=a.size,N=a.prefixCls,h=a.tip,d=h===void 0?(i=(e=this.$slots).tip)===null||i===void 0?void 0:i.call(e):h,$=a.wrapperClassName,u=this.$attrs,S=u.class,C=u.style,O=H(u,["class","style"]),y=this.configProvider,U=y.getPrefixCls,w=y.direction,r=U("spin",N),f=this.sSpinning,I=(n={},o(n,r,!0),o(n,"".concat(r,"-sm"),v==="small"),o(n,"".concat(r,"-lg"),v==="large"),o(n,"".concat(r,"-spinning"),f),o(n,"".concat(r,"-show-text"),!!d),o(n,"".concat(r,"-rtl"),w==="rtl"),o(n,S,!!S),n),m=s("div",x(x({},O),{},{style:C,class:I}),[this.renderIndicator(r),d?s("div",{class:"".concat(r,"-text")},[d]):null]),g=k(this);if(g&&g.length){var c,j=(c={},o(c,"".concat(r,"-container"),!0),o(c,"".concat(r,"-blur"),f),c);return s("div",{class:["".concat(r,"-nested-loading"),$]},[f&&s("div",{key:"loading"},[m]),s("div",{class:j,key:"container"},[g])])}return m}});p.setDefaultIndicator=F;p.install=function(t){return t.component(p.name,p),t};export{p as S};
