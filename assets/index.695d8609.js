import{H as V,e as $,P as N,K as P,f as D,g as o,L as B,ae as E,aU as H,b as p,Q as f,i as S,F as K,ab as Q,h as R}from"./index.db910b6a.js";import{u as U}from"./useFlexGapSupport.e1f3909d.js";var W={small:8,middle:16,large:24},k=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:N.oneOf(P("horizontal","vertical")).def("horizontal"),align:N.oneOf(P("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function q(n){return typeof n=="string"?W[n]:n||0}var J=$({name:"ASpace",props:k(),slots:["split"],setup:function(t,F){var c=F.slots,d=D("space",t),l=d.prefixCls,G=d.space,x=d.direction,z=U(),i=o(function(){var a,e,r;return(r=(a=t.size)!==null&&a!==void 0?a:(e=G.value)===null||e===void 0?void 0:e.size)!==null&&r!==void 0?r:"small"}),m=B(),u=B();E(i,function(){var a=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(function(r){return q(r)}),e=Q(a,2);m.value=e[0],u.value=e[1]},{immediate:!0});var _=o(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),I=o(function(){var a;return R(l.value,"".concat(l.value,"-").concat(t.direction),(a={},S(a,"".concat(l.value,"-rtl"),x.value==="rtl"),S(a,"".concat(l.value,"-align-").concat(_.value),_.value),a))}),j=o(function(){return x.value==="rtl"?"marginLeft":"marginRight"}),L=o(function(){var a={};return z.value&&(a.columnGap="".concat(m.value,"px"),a.rowGap="".concat(u.value,"px")),f(f({},a),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-u.value,"px")})});return function(){var a,e,r=t.wrap,h=t.direction,O=h===void 0?"horizontal":h,w=H((a=c.default)===null||a===void 0?void 0:a.call(c)),C=w.length;if(C===0)return null;var s=(e=c.split)===null||e===void 0?void 0:e.call(c),b="".concat(l.value,"-item"),A=m.value,g=C-1;return p("div",{class:I.value,style:L.value},[w.map(function(T,y){var v={};return z.value||(O==="vertical"?y<g&&(v={marginBottom:"".concat(A/(s?2:1),"px")}):v=f(f({},y<g&&S({},j.value,"".concat(A/(s?2:1),"px"))),r&&{paddingBottom:"".concat(u.value,"px")})),p(K,null,[p("div",{class:b,style:v},[T]),y<g&&s&&p("span",{class:"".concat(b,"-split"),style:v},[s])])})])}}}),Y=V(J);export{Y as S};
