import{Y as b,_ as N,d as R,o as h,c as y,w as o,a as t,b as _,B as k,m as $}from"./index.90f5032a.js";/* empty css              *//* empty css               */import{_ as C}from"./index.ec4ae359.js";import{_ as M}from"./index.3f42e919.js";import{_ as F}from"./index.cdbdeb38.js";import{b as B}from"./_baseRandom.67e4faa9.js";import{t as r}from"./toFinite.7cc9644f.js";import"./index.766b86ca.js";import{F as U,_ as g}from"./Form.27a73f78.js";import"./useFlexGapSupport.a1ac5c07.js";import"./DownOutlined.66ecff8a.js";import"./isMobile.481c1aec.js";import"./Col.1f632adf.js";import"./responsiveObserve.b057c2c3.js";import"./toArray.3d58d565.js";import"./get.87de599b.js";import"./_baseGet.b363a9de.js";import"./toString.515e9072.js";import"./_arrayMap.dc1f124f.js";import"./_flatRest.a1f05edd.js";import"./toInteger.b3d61924.js";import"./_arrayIncludesWith.15e56e3a.js";import"./collapseMotion.f3aeeb33.js";var x=parseFloat,I=Math.min,V=Math.random;function z(e,n,a){if(a&&typeof a!="boolean"&&b(e,n,a)&&(n=a=void 0),a===void 0&&(typeof n=="boolean"?(a=n,n=void 0):typeof e=="boolean"&&(a=e,e=void 0)),e===void 0&&n===void 0?(e=0,n=1):(e=r(e),n===void 0?(n=e,e=0):n=r(n)),e>n){var u=e;e=n,n=u}if(a||e%1||n%1){var i=V();return I(e+i*(n-e+x("1e-"+((i+"").length-1))),n)}return B(e,n)}const P=R({name:"RandomNumber",data:()=>({min:0,max:10,times:1,float:!1,randomNumResult:""}),methods:{randomNum(){try{for(let e=0;e<this.times;e++)this.randomNumResult=z(this.min,this.max,this.float)+(this.randomNumResult===""?"":`
`)+this.randomNumResult}catch{this.$msg.error("\u8BA1\u7B97\u9519\u8BEF")}},clearRandomNum(){this.randomNumResult=""}}});function T(e,n,a,u,i,Y){const l=F,s=g,f=M,d=k,p=C,c=$,v=U;return h(),y(v,{"label-col":{sm:{span:2}},"wrapper-col":{sm:{span:3}}},{default:o(()=>[t(s,{label:"\u6700\u5C0F\u6570\u5B57"},{default:o(()=>[t(l,{value:e.min,"onUpdate:value":n[0]||(n[0]=m=>e.min=m),valueModifiers:{number:!0}},null,8,["value"])]),_:1}),t(s,{label:"\u6700\u5927\u6570\u5B57"},{default:o(()=>[t(l,{value:e.max,"onUpdate:value":n[1]||(n[1]=m=>e.max=m),valueModifiers:{number:!0}},null,8,["value"])]),_:1}),t(s,{label:"\u6B21\u6570"},{default:o(()=>[t(l,{value:e.times,"onUpdate:value":n[2]||(n[2]=m=>e.times=m),valueModifiers:{number:!0},step:1},null,8,["value"])]),_:1}),t(s,{label:"\u5C0F\u6570"},{default:o(()=>[t(f,{checked:e.float,"onUpdate:checked":n[3]||(n[3]=m=>e.float=m)},null,8,["checked"])]),_:1}),t(s,{"wrapper-col":{sm:{span:3,offset:2}}},{default:o(()=>[t(p,null,{default:o(()=>[t(d,{type:"primary",onClick:e.randomNum},{default:o(()=>[_(" \u751F\u6210 ")]),_:1},8,["onClick"]),t(d,{onClick:e.clearRandomNum},{default:o(()=>[_(" \u6E05\u7A7A ")]),_:1},8,["onClick"])]),_:1})]),_:1}),t(s,{"wrapper-col":{sm:{span:5}}},{default:o(()=>[t(c,{value:e.randomNumResult,readonly:"","auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1})]),_:1})}const ie=N(P,[["render",T],["__scopeId","data-v-e8e42709"]]);export{ie as default};