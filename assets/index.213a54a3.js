import{G as V,e as $,P as N,K as G,f as D,g as o,L as P,af as E,aX as K,b as p,Q as f,i as S,F as Q,ac as R,h as W}from"./index.fd3c34f7.js";import{u as X}from"./useFlexGapSupport.5d23bcb4.js";var k={small:8,middle:16,large:24},q=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:N.oneOf(G("horizontal","vertical")).def("horizontal"),align:N.oneOf(G("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function H(n){return typeof n=="string"?k[n]:n||0}var J=$({name:"ASpace",props:q(),slots:["split"],setup:function(t,B){var c=B.slots,d=D("space",t),l=d.prefixCls,F=d.space,x=d.direction,z=X(),i=o(function(){var a,e,r;return(r=(a=t.size)!==null&&a!==void 0?a:(e=F.value)===null||e===void 0?void 0:e.size)!==null&&r!==void 0?r:"small"}),m=P(),u=P();E(i,function(){var a=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(function(r){return H(r)}),e=R(a,2);m.value=e[0],u.value=e[1]},{immediate:!0});var _=o(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),I=o(function(){var a;return W(l.value,"".concat(l.value,"-").concat(t.direction),(a={},S(a,"".concat(l.value,"-rtl"),x.value==="rtl"),S(a,"".concat(l.value,"-align-").concat(_.value),_.value),a))}),j=o(function(){return x.value==="rtl"?"marginLeft":"marginRight"}),L=o(function(){var a={};return z.value&&(a.columnGap="".concat(m.value,"px"),a.rowGap="".concat(u.value,"px")),f(f({},a),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-u.value,"px")})});return function(){var a,e,r=t.wrap,h=t.direction,O=h===void 0?"horizontal":h,w=K((a=c.default)===null||a===void 0?void 0:a.call(c)),C=w.length;if(C===0)return null;var s=(e=c.split)===null||e===void 0?void 0:e.call(c),b="".concat(l.value,"-item"),A=m.value,g=C-1;return p("div",{class:I.value,style:L.value},[w.map(function(T,y){var v={};return z.value||(O==="vertical"?y<g&&(v={marginBottom:"".concat(A/(s?2:1),"px")}):v=f(f({},y<g&&S({},j.value,"".concat(A/(s?2:1),"px"))),r&&{paddingBottom:"".concat(u.value,"px")})),p(Q,null,[p("div",{class:b,style:v},[T]),y<g&&s&&p("span",{class:"".concat(b,"-split"),style:v},[s])])})])}}}),Y=V(J);export{Y as S};
