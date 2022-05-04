import{K as A,P as z,a1 as E,e as _,g as p,Q as w,b as v,F as q,c5 as T,L as M,ak as B,as as V,ac as K,a3 as x,_ as m,f as Y,i as Q,aX as U,C as H,aW as J,G as Z}from"./index.7e728817.js";import{u as ee}from"./useRefs.0b02d73a.js";var X=A("normal","exception","active","success"),te=A("line","circle","dashboard"),re=A("default","small"),I=function(){return{prefixCls:String,type:z.oneOf(te),percent:Number,format:{type:Function},status:z.oneOf(X),showInfo:{type:Boolean,default:void 0},strokeWidth:Number,strokeLinecap:String,strokeColor:{type:[String,Object],default:void 0},trailColor:String,width:Number,success:{type:Object,default:function(){return{}}},gapDegree:Number,gapPosition:String,size:z.oneOf(re),steps:Number,successPercent:Number,title:String}};function O(r){return!r||r<0?0:r>100?100:r}function L(r){var e=r.success,o=r.successPercent,t=o;return e&&"progress"in e&&(E(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),t=e.progress),e&&"percent"in e&&(t=e.percent),t}var ne=globalThis&&globalThis.__rest||function(r,e){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(o[t[n]]=r[t[n]]);return o},ae=function(){return w(w({},I()),{prefixCls:String,direction:{type:String}})},oe=function(e){var o=[];return Object.keys(e).forEach(function(t){var n=parseFloat(t.replace(/%/g,""));isNaN(n)||o.push({key:n,value:e[t]})}),o=o.sort(function(t,n){return t.key-n.key}),o.map(function(t){var n=t.key,l=t.value;return"".concat(l," ").concat(n,"%")}).join(", ")},se=function(e,o){var t=e.from,n=t===void 0?T.blue:t,l=e.to,c=l===void 0?T.blue:l,u=e.direction,d=u===void 0?o==="rtl"?"to left":"to right":u,i=ne(e,["from","to","direction"]);if(Object.keys(i).length!==0){var f=oe(i);return{backgroundImage:"linear-gradient(".concat(d,", ").concat(f,")")}}return{backgroundImage:"linear-gradient(".concat(d,", ").concat(n,", ").concat(c,")")}},ie=_({name:"Line",props:ae(),setup:function(e,o){var t=o.slots,n=p(function(){var i=e.strokeColor,f=e.direction;return i&&typeof i!="string"?se(i,f):{background:i}}),l=p(function(){return e.trailColor?{backgroundColor:e.trailColor}:void 0}),c=p(function(){var i=e.percent,f=e.strokeWidth,s=e.strokeLinecap,a=e.size;return w({width:"".concat(O(i),"%"),height:"".concat(f||(a==="small"?6:8),"px"),borderRadius:s==="square"?0:""},n.value)}),u=p(function(){return L(e)}),d=p(function(){var i=e.strokeWidth,f=e.size,s=e.strokeLinecap,a=e.success;return{width:"".concat(O(u.value),"%"),height:"".concat(i||(f==="small"?6:8),"px"),borderRadius:s==="square"?0:"",backgroundColor:a==null?void 0:a.strokeColor}});return function(){var i;return v(q,null,[v("div",{class:"".concat(e.prefixCls,"-outer")},[v("div",{class:"".concat(e.prefixCls,"-inner"),style:l.value},[v("div",{class:"".concat(e.prefixCls,"-bg"),style:c.value},null),u.value!==void 0?v("div",{class:"".concat(e.prefixCls,"-success-bg"),style:d.value},null):null])]),(i=t.default)===null||i===void 0?void 0:i.call(t)])}}}),ce={percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1},le=function(e){var o=M(null);return B(function(){var t=Date.now(),n=!1;e.value.forEach(function(l){var c,u=((c=l)===null||c===void 0?void 0:c.$el)||l;if(!!u){n=!0;var d=u.style;d.transitionDuration=".3s, .3s, .3s, .06s",o.value&&t-o.value<100&&(d.transitionDuration="0s, 0s")}}),n&&(o.value=Date.now())}),e},ue={gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String},fe=globalThis&&globalThis.__rest||function(r,e){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(o[t[n]]=r[t[n]]);return o},$=0;function F(r){return+r.replace("%","")}function G(r){return Array.isArray(r)?r:[r]}function R(r,e,o,t){var n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=arguments.length>5?arguments[5]:void 0,c=50-t/2,u=0,d=-c,i=0,f=-2*c;switch(l){case"left":u=-c,d=0,i=2*c,f=0;break;case"right":u=c,d=0,i=-2*c,f=0;break;case"bottom":d=c,f=2*c;break}var s="M 50,50 m ".concat(u,",").concat(d,`
   a `).concat(c,",").concat(c," 0 1 1 ").concat(i,",").concat(-f,`
   a `).concat(c,",").concat(c," 0 1 1 ").concat(-i,",").concat(f),a=Math.PI*2*c,h={stroke:o,strokeDasharray:"".concat(e/100*(a-n),"px ").concat(a,"px"),strokeDashoffset:"-".concat(n/2+r/100*(a-n),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:s,pathStyle:h}}var ve=_({name:"VCCircle",props:V(ue,ce),setup:function(e){$+=1;var o=M($),t=p(function(){return G(e.percent)}),n=p(function(){return G(e.strokeColor)}),l=ee(),c=K(l,2),u=c[0],d=c[1];le(d);var i=function(){var s=e.prefixCls,a=e.strokeWidth,h=e.strokeLinecap,y=e.gapDegree,g=e.gapPosition,C=0;return t.value.map(function(b,k){var j=n.value[k]||n.value[n.value.length-1],W=Object.prototype.toString.call(j)==="[object Object]"?"url(#".concat(s,"-gradient-").concat(o.value,")"):"",P=R(C,b,j,a,y,g),N=P.pathString,S=P.pathStyle;C+=b;var D={key:k,d:N,stroke:W,"stroke-linecap":h,"stroke-width":a,opacity:b===0?0:1,"fill-opacity":"0",class:"".concat(s,"-circle-path"),style:S};return v("path",x({ref:u(k)},D),null)})};return function(){var f=e.prefixCls,s=e.strokeWidth,a=e.trailWidth,h=e.gapDegree,y=e.gapPosition,g=e.trailColor,C=e.strokeLinecap;e.strokeColor;var b=fe(e,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"]),k=R(0,100,g,s,h,y),j=k.pathString,W=k.pathStyle;delete b.percent;var P=n.value.find(function(S){return Object.prototype.toString.call(S)==="[object Object]"}),N={d:j,stroke:g,"stroke-linecap":C,"stroke-width":a||s,"fill-opacity":"0",class:"".concat(f,"-circle-trail"),style:W};return v("svg",x({class:"".concat(f,"-circle"),viewBox:"0 0 100 100"},b),[P&&v("defs",null,[v("linearGradient",{id:"".concat(f,"-gradient-").concat(o.value),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(P).sort(function(S,D){return F(S)-F(D)}).map(function(S,D){return v("stop",{key:D,offset:S,"stop-color":P[S]},null)})])]),v("path",N,null),i().reverse()])}}});function de(r){var e=r.percent,o=r.success,t=r.successPercent,n=O(L({success:o,successPercent:t}));return[n,O(O(e)-n)]}function ge(r){var e=r.success,o=e===void 0?{}:e,t=r.strokeColor,n=o.strokeColor;return[n||T.green,t||null]}var pe=_({name:"Circle",inheritAttrs:!1,props:I(),setup:function(e,o){var t=o.slots,n=p(function(){if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),l=p(function(){var a=e.width||120;return{width:typeof a=="number"?"".concat(a,"px"):a,height:typeof a=="number"?"".concat(a,"px"):a,fontSize:"".concat(a*.15+6,"px")}}),c=p(function(){return e.strokeWidth||6}),u=p(function(){return e.gapPosition||e.type==="dashboard"&&"bottom"||"top"}),d=p(function(){return de(e)}),i=p(function(){return Object.prototype.toString.call(e.strokeColor)==="[object Object]"}),f=p(function(){return ge({success:e.success,strokeColor:e.strokeColor})}),s=p(function(){var a;return a={},m(a,"".concat(e.prefixCls,"-inner"),!0),m(a,"".concat(e.prefixCls,"-circle-gradient"),i.value),a});return function(){var a;return v("div",{class:s.value,style:l.value},[v(ve,{percent:d.value,strokeWidth:c.value,trailWidth:c.value,strokeColor:f.value,strokeLinecap:e.strokeLinecap,trailColor:e.trailColor,prefixCls:e.prefixCls,gapDegree:n.value,gapPosition:u.value},null),(a=t.default)===null||a===void 0?void 0:a.call(t)])}}}),he=function(){return w(w({},I()),{steps:Number,size:{type:String},strokeColor:String,trailColor:String})},ye=_({name:"Steps",props:he(),setup:function(e,o){var t=o.slots,n=p(function(){return Math.round(e.steps*((e.percent||0)/100))}),l=p(function(){return e.size==="small"?2:14}),c=p(function(){for(var u=e.steps,d=e.strokeWidth,i=d===void 0?8:d,f=e.strokeColor,s=e.trailColor,a=e.prefixCls,h=[],y=0;y<u;y+=1){var g,C=(g={},m(g,"".concat(a,"-steps-item"),!0),m(g,"".concat(a,"-steps-item-active"),y<=n.value-1),g);h.push(v("div",{key:y,class:C,style:{backgroundColor:y<=n.value-1?f:s,width:"".concat(l.value,"px"),height:"".concat(i,"px")}},null))}return h});return function(){var u;return v("div",{class:"".concat(e.prefixCls,"-steps-outer")},[c.value,(u=t.default)===null||u===void 0?void 0:u.call(t)])}}}),ke=_({name:"AProgress",props:V(I(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",gapDegree:0,strokeLinecap:"round"}),slots:["format"],setup:function(e,o){var t=o.slots,n=Y("progress",e),l=n.prefixCls,c=n.direction;E(e.successPercent==null,"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var u=p(function(){var s,a=e.type,h=e.showInfo,y=e.size,g=l.value;return s={},m(s,g,!0),m(s,"".concat(g,"-").concat(a==="dashboard"&&"circle"||a),!0),m(s,"".concat(g,"-show-info"),h),m(s,"".concat(g,"-").concat(y),y),m(s,"".concat(g,"-rtl"),c.value==="rtl"),s}),d=p(function(){var s=e.percent,a=s===void 0?0:s,h=L(e);return parseInt(h!==void 0?h.toString():a.toString(),10)}),i=p(function(){var s=e.status;return X.indexOf(s)<0&&d.value>=100?"success":s||"normal"}),f=function(){var a=e.showInfo,h=e.format,y=e.type,g=e.percent,C=e.title,b=L(e);if(!a)return null;var k,j=h||(t==null?void 0:t.format)||function(P){return"".concat(P,"%")},W=y==="line";return h||(t==null?void 0:t.format)||i.value!=="exception"&&i.value!=="success"?k=j(O(g),O(b)):i.value==="exception"?k=W?v(Q,null,null):v(U,null,null):i.value==="success"&&(k=W?v(H,null,null):v(J,null,null)),v("span",{class:"".concat(l.value,"-text"),title:C===void 0&&typeof k=="string"?k:void 0},[k])};return function(){var s=e.type,a=e.steps,h=e.strokeColor,y=e.title,g=f(),C;s==="line"?C=a?v(ye,x(x({},e),{},{strokeColor:typeof h=="string"?h:void 0,prefixCls:l.value,steps:a}),{default:function(){return[g]}}):v(ie,x(x({},e),{},{prefixCls:l.value}),{default:function(){return[g]}}):(s==="circle"||s==="dashboard")&&(C=v(pe,x(x({},e),{},{prefixCls:l.value}),{default:function(){return[g]}}));var b=w(w({},u.value),m({},"".concat(l.value,"-status-").concat(i.value),!0));return v("div",{class:b,title:y},[C])}}}),me=Z(ke);export{me as P};
