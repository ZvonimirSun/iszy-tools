import{d as B,aK as we,f as o,j as he,P,r as h,bh as Re,y as W,a as f,s as r,g as Y,b8 as ne,p as Ne}from"./index.5225add7.js";var ae=Symbol("OverflowContextProviderKey"),H=B({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(e,d){var v=d.slots;return we(ae,o(function(){return e.value})),function(){var c;return(c=v.default)===null||c===void 0?void 0:c.call(v)}}}),be=function(){return he(ae,o(function(){return null}))},Ie=["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"],K=void 0;const T=B({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:P.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:P.any,invalidate:Boolean},setup:function(e,d){var v=d.slots,c=d.expose,s=o(function(){return e.responsive&&!e.display}),S=h();c({itemNodeRef:S});function w(i){e.registerSize(e.itemKey,i)}return Re(function(){w(null)}),function(){var i,R=e.prefixCls,N=e.invalidate,y=e.item,g=e.renderItem,m=e.responsive;e.registerSize,e.itemKey,e.display;var z=e.order,C=e.component,j=C===void 0?"div":C,O=W(e,Ie),k=(i=v.default)===null||i===void 0?void 0:i.call(v),b=g&&y!==K?g(y):k,M;N||(M={opacity:s.value?0:1,height:s.value?0:K,overflowY:s.value?"hidden":K,order:m?z:K,pointerEvents:s.value?"none":K,position:s.value?"absolute":K});var $={};return s.value&&($["aria-hidden"]=!0),f(ne,{disabled:!m,onResize:function(F){var A=F.offsetWidth;w(A)}},{default:function(){return f(j,r(r(r({class:Y(!N&&R),style:M},$),O),{},{ref:S}),{default:function(){return[b]}})}})}}});var _e=["component"],ze=["className"],Oe=["class"];const Fe=B({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:P.any,title:P.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(e,d){var v=d.slots,c=d.attrs,s=be();return function(){if(!s.value){var S,w=e.component,i=w===void 0?"div":w,R=W(e,_e);return f(i,r(r({},R),c),{default:function(){return[(S=v.default)===null||S===void 0?void 0:S.call(v)]}})}var N=s.value,y=N.className,g=W(N,ze),m=c.class,z=W(c,Oe);return f(H,{value:null},{default:function(){return[f(T,r(r(r({class:Y(y,m)},g),z),e),v)]}})}}});var Ee=["class","style"],re="responsive",ue="invalidate";function Ke(_){return"+ ".concat(_.length," ...")}var Pe=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:P.any,component:String,itemComponent:P.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},G=B({name:"Overflow",inheritAttrs:!1,props:Pe(),emits:["visibleChange"],setup:function(e,d){var v=d.attrs,c=d.emit,s=d.slots,S=o(function(){return e.ssr==="full"}),w=h(null),i=o(function(){return w.value||0}),R=h(new Map),N=h(0),y=h(0),g=h(0),m=h(null),z=h(null),C=o(function(){return z.value===null&&S.value?Number.MAX_SAFE_INTEGER:z.value||0}),j=h(!1),O=o(function(){return"".concat(e.prefixCls,"-item")}),k=o(function(){return Math.max(N.value,y.value)}),b=o(function(){return!!(e.data.length&&e.maxCount===re)}),M=o(function(){return e.maxCount===ue}),$=o(function(){return b.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount}),I=o(function(){var n=e.data;return b.value?w.value===null&&S.value?n=e.data:n=e.data.slice(0,Math.min(e.data.length,i.value/e.itemWidth)):typeof e.maxCount=="number"&&(n=e.data.slice(0,e.maxCount)),n}),F=o(function(){return b.value?e.data.slice(C.value+1):e.data.slice(I.value.length)}),A=function(t,a){var u;return typeof e.itemKey=="function"?e.itemKey(t):(u=e.itemKey&&(t==null?void 0:t[e.itemKey]))!==null&&u!==void 0?u:a},ie=o(function(){return e.renderItem||function(n){return n}}),V=function(t,a){z.value=t,a||(j.value=t<e.data.length-1,c("visibleChange",t))},le=function(t,a){w.value=a.clientWidth},q=function(t,a){var u=new Map(R.value);a===null?u.delete(t):u.set(t,a),R.value=u},oe=function(t,a){N.value=y.value,y.value=a},ve=function(t,a){g.value=a},L=function(t){return R.value.get(A(I.value[t],t))};return Ne([i,R,y,g,function(){return e.itemKey},I],function(){if(i.value&&k.value&&I.value){var n=g.value,t=I.value.length,a=t-1;if(!t){V(0),m.value=null;return}for(var u=0;u<t;u+=1){var p=L(u);if(p===void 0){V(u-1,!0);break}if(n+=p,a===0&&n<=i.value||u===a-1&&n+L(a)<=i.value){V(a),m.value=null;break}else if(n+k.value>i.value){V(u-1),m.value=n-p-g.value+y.value;break}}e.suffix&&L(0)+g.value>i.value&&(m.value=null)}}),function(){var n=j.value&&!!F.value.length,t=e.itemComponent,a=e.renderRawItem,u=e.renderRawRest,p=e.renderRest,J=e.prefixCls,se=J===void 0?"rc-overflow":J,Q=e.suffix,Z=e.component,fe=Z===void 0?"div":Z,de=e.id,ce=e.onMousedown,me=v.class,ye=v.style,ge=W(v,Ee),ee={};m.value!==null&&b.value&&(ee={position:"absolute",left:"".concat(m.value,"px"),top:0});var D={prefixCls:O.value,responsive:b.value,component:t,invalidate:M.value},Ce=a?function(x,l){var E=A(x,l);return f(H,{key:E,value:r(r({},D),{},{order:l,item:x,itemKey:E,registerSize:q,display:l<=C.value})},{default:function(){return[a(x,l)]}})}:function(x,l){var E=A(x,l);return f(T,r(r({},D),{},{order:l,key:E,item:x,renderItem:ie.value,itemKey:E,registerSize:q,display:l<=C.value}),null)},U=function(){return null},te={order:n?C.value:Number.MAX_SAFE_INTEGER,className:"".concat(O.value," ").concat(O.value,"-rest"),registerSize:oe,display:n};if(u)u&&(U=function(){return f(H,{value:r(r({},D),te)},{default:function(){return[u(F.value)]}})});else{var X=p||Ke;U=function(){return f(T,r(r({},D),te),{default:function(){return typeof X=="function"?X(F.value):X}})}}var xe=function(){var l;return f(fe,r({id:de,class:Y(!M.value&&se,me),style:ye,onMousedown:ce},ge),{default:function(){return[I.value.map(Ce),$.value?U():null,Q&&f(T,r(r({},D),{},{order:C.value,class:"".concat(O.value,"-suffix"),registerSize:ve,display:!0,style:ee}),{default:function(){return Q}}),(l=s.default)===null||l===void 0?void 0:l.call(s)]}})};return f(ne,{disabled:!b.value,onResize:le},{default:xe})}}});G.Item=Fe;G.RESPONSIVE=re;G.INVALIDATE=ue;const Ae=G;export{Ae as O};
