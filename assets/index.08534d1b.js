import{d as E,av as z,j as D,bJ as A,a6 as T,aq as k,bK as V,by as b,ay as P,a as s,h as o,y as x,bL as B,P as _}from"./index.0076ae71.js";var q=globalThis&&globalThis.__rest||function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(e[i[a]]=t[i[a]]);return e},J=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:_.any,delay:Number,indicator:_.any}},l=null;function K(t,n){return!!t&&!!n&&!isNaN(Number(n))}function L(t){var n=t.indicator;l=typeof n=="function"?n:function(){return s(n,null,null)}}const p=E({name:"ASpin",inheritAttrs:!1,props:z(J(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:D("configProvider",A)}},data:function(){var n=this.spinning,e=this.delay,i=K(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;T(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=k(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&(this.sSpinning=n)},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=V(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),b(i)?P(i,{class:e}):l&&b(l())?P(l(),{class:e}):s("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e,i,a=this.$props,h=a.size,N=a.prefixCls,v=a.tip,d=v===void 0?(i=(e=this.$slots).tip)===null||i===void 0?void 0:i.call(e):v,$=a.wrapperClassName,u=this.$attrs,y=u.class,O=u.style,U=q(u,["class","style"]),S=this.configProvider,w=S.getPrefixCls,C=S.direction,r=w("spin",N),f=this.sSpinning,I=(n={},o(n,r,!0),o(n,"".concat(r,"-sm"),h==="small"),o(n,"".concat(r,"-lg"),h==="large"),o(n,"".concat(r,"-spinning"),f),o(n,"".concat(r,"-show-text"),!!d),o(n,"".concat(r,"-rtl"),C==="rtl"),o(n,y,!!y),n),m=s("div",x(x({},U),{},{style:O,class:I}),[this.renderIndicator(r),d?s("div",{class:"".concat(r,"-text")},[d]):null]),g=B(this);if(g&&g.length){var c,j=(c={},o(c,"".concat(r,"-container"),!0),o(c,"".concat(r,"-blur"),f),c);return s("div",{class:["".concat(r,"-nested-loading"),$]},[f&&s("div",{key:"loading"},[m]),s("div",{class:j,key:"container"},[g])])}return m}});p.setDefaultIndicator=L;p.install=function(t){return t.component(p.name,p),t};export{p as S};
