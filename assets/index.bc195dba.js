import{v as $,P as I,bj as E,d as _,f as g,s as y,a as d,F as B,c0 as z,y as G,r as R,ba as X,ax as q,q as Y,h as b,e as K,i as U,bf as H,C as J,be as Q,n as Z}from"./index.357cc62b.js";import{u as ee}from"./useRefs.493c8bf4.js";var V=$("normal","exception","active","success"),te=$("line","circle","dashboard"),re=$("default","small"),j=function(){return{prefixCls:String,type:I.oneOf(te),percent:Number,format:{type:Function},status:I.oneOf(V),showInfo:{type:Boolean,default:void 0},strokeWidth:Number,strokeLinecap:String,strokeColor:{type:[String,Object],default:void 0},trailColor:String,width:Number,success:{type:Object,default:function(){return{}}},gapDegree:Number,gapPosition:String,size:I.oneOf(re),steps:Number,successPercent:Number,title:String}};function D(s){return!s||s<0?0:s>100?100:s}function L(s){var e=s.success,c=s.successPercent,r=c;return e&&"progress"in e&&(E(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),r=e.progress),e&&"percent"in e&&(r=e.percent),r}var ne=["from","to","direction"],ae=function(){return y(y({},j()),{},{prefixCls:String,direction:{type:String}})},se=function(e){var c=[];return Object.keys(e).forEach(function(r){var n=parseFloat(r.replace(/%/g,""));isNaN(n)||c.push({key:n,value:e[r]})}),c=c.sort(function(r,n){return r.key-n.key}),c.map(function(r){var n=r.key,l=r.value;return"".concat(l," ").concat(n,"%")}).join(", ")},oe=function(e,c){var r=e.from,n=r===void 0?z.blue:r,l=e.to,i=l===void 0?z.blue:l,u=e.direction,h=u===void 0?c==="rtl"?"to left":"to right":u,o=G(e,ne);if(Object.keys(o).length!==0){var f=se(o);return{backgroundImage:"linear-gradient(".concat(h,", ").concat(f,")")}}return{backgroundImage:"linear-gradient(".concat(h,", ").concat(n,", ").concat(i,")")}};const ie=_({compatConfig:{MODE:3},name:"Line",props:ae(),setup:function(e,c){var r=c.slots,n=g(function(){var o=e.strokeColor,f=e.direction;return o&&typeof o!="string"?oe(o,f):{background:o}}),l=g(function(){return e.trailColor?{backgroundColor:e.trailColor}:void 0}),i=g(function(){var o=e.percent,f=e.strokeWidth,a=e.strokeLinecap,t=e.size;return y({width:"".concat(D(o),"%"),height:"".concat(f||(t==="small"?6:8),"px"),borderRadius:a==="square"?0:""},n.value)}),u=g(function(){return L(e)}),h=g(function(){var o=e.strokeWidth,f=e.size,a=e.strokeLinecap,t=e.success;return{width:"".concat(D(u.value),"%"),height:"".concat(o||(f==="small"?6:8),"px"),borderRadius:a==="square"?0:"",backgroundColor:t==null?void 0:t.strokeColor}});return function(){var o;return d(B,null,[d("div",{class:"".concat(e.prefixCls,"-outer")},[d("div",{class:"".concat(e.prefixCls,"-inner"),style:l.value},[d("div",{class:"".concat(e.prefixCls,"-bg"),style:i.value},null),u.value!==void 0?d("div",{class:"".concat(e.prefixCls,"-success-bg"),style:h.value},null):null])]),(o=r.default)===null||o===void 0?void 0:o.call(r)])}}});var ce={percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1},le=function(e){var c=R(null);return X(function(){var r=Date.now(),n=!1;e.value.forEach(function(l){var i=(l==null?void 0:l.$el)||l;if(!!i){n=!0;var u=i.style;u.transitionDuration=".3s, .3s, .3s, .06s",c.value&&r-c.value<100&&(u.transitionDuration="0s, 0s")}}),n&&(c.value=Date.now())}),e},ue={gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String},fe=["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"],A=0;function T(s){return+s.replace("%","")}function F(s){return Array.isArray(s)?s:[s]}function M(s,e,c,r){var n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=arguments.length>5?arguments[5]:void 0,i=50-r/2,u=0,h=-i,o=0,f=-2*i;switch(l){case"left":u=-i,h=0,o=2*i,f=0;break;case"right":u=i,h=0,o=-2*i,f=0;break;case"bottom":h=i,f=2*i;break}var a="M 50,50 m ".concat(u,",").concat(h,`
   a `).concat(i,",").concat(i," 0 1 1 ").concat(o,",").concat(-f,`
   a `).concat(i,",").concat(i," 0 1 1 ").concat(-o,",").concat(f),t=Math.PI*2*i,p={stroke:c,strokeDasharray:"".concat(e/100*(t-n),"px ").concat(t,"px"),strokeDashoffset:"-".concat(n/2+s/100*(t-n),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:a,pathStyle:p}}const de=_({compatConfig:{MODE:3},name:"VCCircle",props:q(ue,ce),setup:function(e){A+=1;var c=R(A),r=g(function(){return F(e.percent)}),n=g(function(){return F(e.strokeColor)}),l=ee(),i=Y(l,2),u=i[0],h=i[1];le(h);var o=function(){var a=e.prefixCls,t=e.strokeWidth,p=e.strokeLinecap,k=e.gapDegree,v=e.gapPosition,m=0;return r.value.map(function(P,C){var W=n.value[C]||n.value[n.value.length-1],w=Object.prototype.toString.call(W)==="[object Object]"?"url(#".concat(a,"-gradient-").concat(c.value,")"):"",S=M(m,P,W,t,k,v),N=S.pathString,x=S.pathStyle;m+=P;var O={key:C,d:N,stroke:w,"stroke-linecap":p,"stroke-width":t,opacity:P===0?0:1,"fill-opacity":"0",class:"".concat(a,"-circle-path"),style:x};return d("path",y({ref:u(C)},O),null)})};return function(){var f=e.prefixCls,a=e.strokeWidth,t=e.trailWidth,p=e.gapDegree,k=e.gapPosition,v=e.trailColor,m=e.strokeLinecap;e.strokeColor;var P=G(e,fe),C=M(0,100,v,a,p,k),W=C.pathString,w=C.pathStyle;delete P.percent;var S=n.value.find(function(x){return Object.prototype.toString.call(x)==="[object Object]"}),N={d:W,stroke:v,"stroke-linecap":m,"stroke-width":t||a,"fill-opacity":"0",class:"".concat(f,"-circle-trail"),style:w};return d("svg",y({class:"".concat(f,"-circle"),viewBox:"0 0 100 100"},P),[S&&d("defs",null,[d("linearGradient",{id:"".concat(f,"-gradient-").concat(c.value),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(S).sort(function(x,O){return T(x)-T(O)}).map(function(x,O){return d("stop",{key:O,offset:x,"stop-color":S[x]},null)})])]),d("path",N,null),o().reverse()])}}});function ve(s){var e=s.percent,c=s.success,r=s.successPercent,n=D(L({success:c,successPercent:r}));return[n,D(D(e)-n)]}function ge(s){var e=s.success,c=e===void 0?{}:e,r=s.strokeColor,n=c.strokeColor;return[n||z.green,r||null]}const pe=_({compatConfig:{MODE:3},name:"Circle",inheritAttrs:!1,props:j(),setup:function(e,c){var r=c.slots,n=g(function(){if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),l=g(function(){var t=e.width||120;return{width:typeof t=="number"?"".concat(t,"px"):t,height:typeof t=="number"?"".concat(t,"px"):t,fontSize:"".concat(t*.15+6,"px")}}),i=g(function(){return e.strokeWidth||6}),u=g(function(){return e.gapPosition||e.type==="dashboard"&&"bottom"||"top"}),h=g(function(){return ve(e)}),o=g(function(){return Object.prototype.toString.call(e.strokeColor)==="[object Object]"}),f=g(function(){return ge({success:e.success,strokeColor:e.strokeColor})}),a=g(function(){var t;return t={},b(t,"".concat(e.prefixCls,"-inner"),!0),b(t,"".concat(e.prefixCls,"-circle-gradient"),o.value),t});return function(){var t;return d("div",{class:a.value,style:l.value},[d(de,{percent:h.value,strokeWidth:i.value,trailWidth:i.value,strokeColor:f.value,strokeLinecap:e.strokeLinecap,trailColor:e.trailColor,prefixCls:e.prefixCls,gapDegree:n.value,gapPosition:u.value},null),(t=r.default)===null||t===void 0?void 0:t.call(r)])}}});var he=function(){return y(y({},j()),{},{steps:Number,size:{type:String},strokeColor:String,trailColor:String})};const ke=_({compatConfig:{MODE:3},name:"Steps",props:he(),setup:function(e,c){var r=c.slots,n=g(function(){return Math.round(e.steps*((e.percent||0)/100))}),l=g(function(){return e.size==="small"?2:14}),i=g(function(){for(var u=e.steps,h=e.strokeWidth,o=h===void 0?8:h,f=e.strokeColor,a=e.trailColor,t=e.prefixCls,p=[],k=0;k<u;k+=1){var v,m=(v={},b(v,"".concat(t,"-steps-item"),!0),b(v,"".concat(t,"-steps-item-active"),k<=n.value-1),v);p.push(d("div",{key:k,class:m,style:{backgroundColor:k<=n.value-1?f:a,width:"".concat(l.value,"px"),height:"".concat(o,"px")}},null))}return p});return function(){var u;return d("div",{class:"".concat(e.prefixCls,"-steps-outer")},[i.value,(u=r.default)===null||u===void 0?void 0:u.call(r)])}}}),Ce=_({compatConfig:{MODE:3},name:"AProgress",props:q(j(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",strokeLinecap:"round"}),slots:["format"],setup:function(e,c){var r=c.slots,n=K("progress",e),l=n.prefixCls,i=n.direction;E(e.successPercent==null,"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var u=g(function(){var a,t=e.type,p=e.showInfo,k=e.size,v=l.value;return a={},b(a,v,!0),b(a,"".concat(v,"-").concat(t==="dashboard"&&"circle"||t),!0),b(a,"".concat(v,"-show-info"),p),b(a,"".concat(v,"-").concat(k),k),b(a,"".concat(v,"-rtl"),i.value==="rtl"),a}),h=g(function(){var a=e.percent,t=a===void 0?0:a,p=L(e);return parseInt(p!==void 0?p.toString():t.toString(),10)}),o=g(function(){var a=e.status;return V.indexOf(a)<0&&h.value>=100?"success":a||"normal"}),f=function(){var t=e.showInfo,p=e.format,k=e.type,v=e.percent,m=e.title,P=L(e);if(!t)return null;var C,W=p||(r==null?void 0:r.format)||function(S){return"".concat(S,"%")},w=k==="line";return p||r!=null&&r.format||o.value!=="exception"&&o.value!=="success"?C=W(D(v),D(P)):o.value==="exception"?C=w?d(U,null,null):d(H,null,null):o.value==="success"&&(C=w?d(J,null,null):d(Q,null,null)),d("span",{class:"".concat(l.value,"-text"),title:m===void 0&&typeof C=="string"?C:void 0},[C])};return function(){var a=e.type,t=e.steps,p=e.strokeColor,k=e.title,v=f(),m;a==="line"?m=t?d(ke,y(y({},e),{},{strokeColor:typeof p=="string"?p:void 0,prefixCls:l.value,steps:t}),{default:function(){return[v]}}):d(ie,y(y({},e),{},{prefixCls:l.value}),{default:function(){return[v]}}):(a==="circle"||a==="dashboard")&&(m=d(pe,y(y({},e),{},{prefixCls:l.value}),{default:function(){return[v]}}));var P=y(y({},u.value),{},b({},"".concat(l.value,"-status-").concat(o.value),!0));return d("div",{class:P,title:k},[m])}}}),Pe=Z(Ce);export{Pe as _};
